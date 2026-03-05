# SPDX-License-Identifier: MIT
# Copyright (C) 2024-2025, Advanced Micro Devices, Inc. All rights reserved.

import logging
from dataclasses import dataclass
from functools import partial as functools_partial
from typing import Optional

import torch
import aiter
from aiter import (
    QuantType,
    concat_and_cache_mla,
    dtypes,
    flash_attn_varlen_func,
    fused_qk_rope_concat_and_cache_mla,
    get_hip_quant,
)
from aiter.dist.parallel_state import get_dp_group
from aiter.mla import mla_decode_fwd, mla_prefill_fwd
from aiter.ops.triton.gluon.pa_decode_gluon import get_recommended_splits
from atom.config import get_current_atom_config
from atom.model_ops.linear import use_triton_gemm
from atom.model_ops.utils import get_and_maybe_dequant_weights
from atom.utils import envs
from atom.utils.forward_context import (
    AttentionMetaData,
    ForwardContext,
    get_attn_metadata_for_layer,
    get_forward_context,
)
from torch import nn

from aiter.ops.triton.batched_gemm_a8w8_a_per_token_group_prequant_w_per_batched_tensor_quant import (  # noqa: E501 # isort: skip
    batched_gemm_a8w8_a_per_token_group_prequant_w_per_batched_tensor_quant as _aiter_triton_fp8_bmm,
)

torch.set_printoptions(threshold=10_000)

logger = logging.getLogger("atom")

if use_triton_gemm():
    try:
        from aiter.ops.triton.fused_gemm_a8w8_blockscale_split_cat import (
            fused_gemm_a8w8_blockscale_preshuffle_split_cat,
        )
        from aiter.ops.triton.fused_gemm_afp4wfp4_split_cat import (
            fused_gemm_afp4wfp4_preshuffle_split_cat,
        )
    except ImportError as e:
        logger.warning(f"Triton fused GEMM split_cat not available: {e}")
        fused_gemm_afp4wfp4_preshuffle_split_cat = None
        fused_gemm_a8w8_blockscale_preshuffle_split_cat = None


def is_rocm_aiter_fp4bmm_enabled() -> bool:
    return envs.ATOM_USE_TRITON_MXFP4_BMM


if is_rocm_aiter_fp4bmm_enabled():
    # from aiter.ops.triton.batched_gemm_afp4wfp4_pre_quant import  batched_gemm_afp4wfp4_pre_quant
    from aiter.ops.triton.batched_gemm_a16wfp4 import batched_gemm_a16wfp4
    from atom.model_ops.utils import quark_post_load_weights


# MLA Specific Arguments
@dataclass
class MLAModules:
    """Modules used in MLA."""

    q_lora_rank: Optional[int]
    kv_lora_rank: int
    qk_nope_head_dim: int
    qk_rope_head_dim: int
    qk_head_dim: int
    v_head_dim: int
    rotary_emb: torch.nn.Module
    q_proj: Optional[torch.nn.Module]
    kv_b_proj: torch.nn.Module
    o_proj: torch.nn.Module
    indexer: Optional[torch.nn.Module]


def dynamic_per_batched_tensor_quant(
    x: torch.Tensor, dtype: torch.dtype = torch.float8_e4m3fn
):
    DTYPE_MAX = torch.finfo(dtype).max
    min_val, max_val = x.aminmax()
    amax = torch.maximum(min_val.abs(), max_val.abs()).clamp(min=1e-10)
    scale = DTYPE_MAX / amax
    x_scl_sat = (x * scale).clamp(min=-DTYPE_MAX, max=DTYPE_MAX)
    return x_scl_sat.to(dtype).contiguous(), scale.float().reciprocal()


class MLAAttention(nn.Module):
    def __init__(
        self,
        num_heads: int,
        head_size: int,
        scale: float,
        num_kv_heads: int,
        kv_cache_dtype: str,
        layer_num: int = 0,
        mla_modules: MLAModules = None,
        dtype: torch.dtype = torch.bfloat16,
        sinks: Optional[nn.Parameter] = None,
        **kwargs,
    ) -> None:
        super().__init__()
        self.num_heads = num_heads
        self.head_size = head_size
        self.scale = float(scale)
        self.num_kv_heads = num_kv_heads
        self.kv_cache_dtype = kv_cache_dtype if kv_cache_dtype == "fp8" else "auto"
        self.dtype = dtype
        config = get_current_atom_config()
        self.use_mha_decode = config.hf_config.model_type == "glm_moe_dsa"
        # self.use_mha_decode = False
        self.sinks = sinks

        self.q_lora_rank = mla_modules.q_lora_rank
        self.kv_lora_rank = mla_modules.kv_lora_rank
        self.qk_nope_head_dim = mla_modules.qk_nope_head_dim
        self.qk_rope_head_dim = mla_modules.qk_rope_head_dim
        self.qk_head_dim = mla_modules.qk_head_dim
        self.v_head_dim = mla_modules.v_head_dim
        self.rotary_emb = mla_modules.rotary_emb
        self.q_proj = mla_modules.q_proj
        self.o_proj = mla_modules.o_proj
        self.kv_b_proj = mla_modules.kv_b_proj
        self.kv_cache = torch.tensor([])
        self.one_scale = torch.tensor(1.0, dtype=torch.float32)
        self._k_scale = self.one_scale
        self._q_scale = self.one_scale
        self.topk_indices_buffer = (
            mla_modules.indexer.topk_indices_buffer
            if mla_modules.indexer is not None
            else None
        )
        self.layer_num = layer_num

    def process_weights_after_loading(self):
        if is_rocm_aiter_fp4bmm_enabled():
            kv_b_proj_weight = get_and_maybe_dequant_weights(self.kv_b_proj)
            self.W_K, self.W_K_scale, W_V, self.W_V_scale = quark_post_load_weights(
                self, kv_b_proj_weight, "mxfp4"
            )
            self.W_V = W_V.contiguous().transpose(1, 2)

            self.W_K = self.W_K.transpose(-2, -1).contiguous()
            self.W_K_scale = self.W_K_scale.transpose(-2, -1).contiguous()
            self.W_V = self.W_V.transpose(-2, -1).contiguous()
            self.W_V_scale = self.W_V_scale.transpose(-2, -1).contiguous()
        else:  # is_rocm_aiter_fp8bmm_enabled():
            kv_b_proj_weight = get_and_maybe_dequant_weights(self.kv_b_proj).T
            assert kv_b_proj_weight.shape == (
                self.kv_lora_rank,
                self.num_heads * (self.qk_nope_head_dim + self.v_head_dim),
            ), (
                f"{kv_b_proj_weight.shape=}, "
                f"{self.kv_lora_rank=}, "
                f"{self.num_heads=}, "
                f"{self.qk_nope_head_dim=}, "
                f"{self.v_head_dim=}"
            )
            kv_b_proj_weight = kv_b_proj_weight.view(
                self.kv_lora_rank,
                self.num_heads,
                self.qk_nope_head_dim + self.v_head_dim,
            )
            W_UK, W_UV = kv_b_proj_weight.split(
                [self.qk_nope_head_dim, self.v_head_dim], dim=-1
            )
            W_K = W_UK.transpose(0, 1)  # 16 512 128
            W_V = W_UV.permute(1, 2, 0)  # 16 128 512
            self.W_K, self.W_K_scale = dynamic_per_batched_tensor_quant(
                W_K, dtype=dtypes.fp8
            )
            self.W_V, self.W_V_scale = dynamic_per_batched_tensor_quant(
                W_V, dtype=dtypes.fp8
            )

    def _v_up_proj_and_o_proj(self, x):
        # Convert from (B, N, L) to (N, B, L)
        x = x.view(-1, self.num_heads, self.kv_lora_rank).transpose(0, 1)
        # Multiply (N, B, L) x (N, L, V) -> (N, B, V), Convert from (N, B, V) to (B, N, V)
        # x = torch.bmm(x, self.W_UV).transpose(0, 1)
        # Convert from (B, N, L) to (N, B, L)
        if is_rocm_aiter_fp4bmm_enabled():
            output = torch.empty(
                x.shape[1],
                x.shape[0],
                self.W_V.shape[1],
                device=x.device,
                dtype=torch.bfloat16,
            )
            output = batched_gemm_a16wfp4(
                x,
                self.W_V,
                self.W_V_scale,
                y=output,
                transpose_bm=True,
                prequant=True,
                y_scale=None,
            )
            # x = x.transpose(0, 1).flatten(1, 2)
            output = output.view(-1, self.num_heads * self.v_head_dim)
            x = output
        else:
            x = _aiter_triton_fp8_bmm(
                x, self.W_V, self.W_V_scale, group_size=128, transpose_bm=True
            )
            # Convert from (B, N, V) to (B, N * V)
            x = x.reshape(-1, self.num_heads * self.v_head_dim)
        return self.o_proj(x)

    def _q_proj_and_k_up_proj(self, x, x_scale=None):
        q_nope, q_pe = (
            self.q_proj(x, x_scale)
            .view(-1, self.num_heads, self.qk_head_dim)
            .split([self.qk_nope_head_dim, self.qk_rope_head_dim], dim=-1)
        )

        # Convert from (B, N, P) to (N, B, P)
        q_nope = q_nope.transpose(0, 1)

        if is_rocm_aiter_fp4bmm_enabled():
            # FP4 BMM: (N, B, P) x (N, P, L) -> (N, B, L)
            ql_nope = batched_gemm_a16wfp4(
                q_nope,
                self.W_K,
                self.W_K_scale,
                y=None,
                transpose_bm=True,
                prequant=True,
                y_scale=None,
            )
        else:
            # Multiply (N, B, P) x (N, P, L) -> (N, B, L), Convert from (N, B, L) to (B, N, L)
            # ql_nope = torch.bmm(q_nope, self.W_UK_T).transpose(0, 1)
            ql_nope = _aiter_triton_fp8_bmm(
                q_nope, self.W_K, self.W_K_scale, group_size=128, transpose_bm=True
            )
        return ql_nope, q_pe

    def fused_kv_bmm(
        self, x, x_scale, k_nope, k_rope, positions, kv_cache, attn_metadata
    ):
        q_nope, q_pe = (
            self.q_proj(x, x_scale)
            .view(-1, self.num_heads, self.qk_head_dim)
            .split([self.qk_nope_head_dim, self.qk_rope_head_dim], dim=-1)
        )

        q_nope = q_nope.transpose(0, 1)

        if is_rocm_aiter_fp4bmm_enabled():
            from aiter.ops.triton.fusions.fused_bmm_rope_kv_cache import (
                fused_fp4_bmm_rope_cat_and_cache_mla,
            )

            result, _, _, _ = fused_fp4_bmm_rope_cat_and_cache_mla(
                q_nope,
                self.W_K,
                self.W_K_scale,
                q_pe,
                k_nope.view(-1, self.num_kv_heads, self.kv_lora_rank),
                k_rope.view(-1, self.num_kv_heads, self.qk_rope_head_dim),
                kv_cache,
                attn_metadata.slot_mapping,
                positions,
                self.rotary_emb.cos_cache,
                self.rotary_emb.sin_cache,
                y=None,
                transpose_bm=True,
                prequant=True,
                y_scale=None,
                k_scale=self._k_scale,
                is_neox=self.rotary_emb.is_neox_style,
                q_out_dtype=kv_cache.dtype,
                num_decode_toks_for_zeros=0,
            )
        else:
            from aiter.ops.triton.fusions.fused_bmm_rope_kv_cache import (
                fused_fp8_bmm_rope_cat_and_cache_mla,
            )

            result, _, _, _ = fused_fp8_bmm_rope_cat_and_cache_mla(
                q_nope,
                self.W_K,
                self.W_K_scale,
                q_pe,
                k_nope.view(-1, self.num_kv_heads, self.kv_lora_rank),
                k_rope.view(-1, self.num_kv_heads, self.qk_rope_head_dim),
                kv_cache,
                attn_metadata.slot_mapping,
                positions,
                self.rotary_emb.cos_cache,
                self.rotary_emb.sin_cache,
                group_size=128,
                transpose_bm=True,
                k_scale=self._k_scale,
                is_neox=self.rotary_emb.is_neox_style,
                q_out_dtype=kv_cache.dtype,
                num_decode_toks_for_zeros=0,
            )

        return result

    def _forward_prefill_mha(
        self,
        q: torch.Tensor,
        kv_c_normed: torch.Tensor,
        k_rope: torch.Tensor,
        kv_c_and_k_pe_cache: torch.Tensor,
        attn_metadata: AttentionMetaData,
    ) -> torch.Tensor:
        assert attn_metadata is not None

        if k_rope.dim() == 2:
            k_rope = k_rope.unsqueeze(1)

        if use_triton_gemm():
            weight = self.kv_b_proj.weight
            weight_scale = self.kv_b_proj.weight_scale
            if (
                fused_gemm_afp4wfp4_preshuffle_split_cat is not None
                and weight.dtype == dtypes.fp4x2
            ):  # FP4 GEMM + split + cat
                m = kv_c_normed.shape[0]
                # from aiter.ops.triton.quant import dynamic_mxfp4_quant
                # input = kv_c_normed
                # input_2d = input.view(-1, input.shape[-1])
                output_dtype = kv_c_normed.dtype

                # q_input, x_scale = dynamic_mxfp4_quant(input_2d)
                quant_func = get_hip_quant(QuantType.per_1x32)
                q_input, x_scale = quant_func(
                    kv_c_normed,
                    quant_dtype=dtypes.fp4x2,
                    shuffle=(m >= 32),
                )

                if m >= 32:
                    x_scale = x_scale.view(torch.uint8).view(x_scale.shape[0] // 32, -1)
                else:
                    x_scale = x_scale[:m, ...].view(torch.uint8)

                k, v = fused_gemm_afp4wfp4_preshuffle_split_cat(
                    q_input.view(torch.uint8),
                    weight.view(torch.uint8).view(weight.shape[0] // 16, -1),
                    k_rope.expand((-1, self.num_heads, -1)),
                    x_scale,
                    weight_scale.view(torch.uint8).view(
                        weight_scale.shape[0] // 32, -1
                    ),
                    self.qk_nope_head_dim,
                    self.v_head_dim,
                    output_dtype,
                )
            elif (
                fused_gemm_a8w8_blockscale_preshuffle_split_cat is not None
                and weight.dtype == dtypes.fp8
            ):  # FP8 GEMM + split + cat
                weight_shuffled = weight.reshape(
                    weight.shape[0] // 16, weight.shape[1] * 16
                )

                output_dtype = kv_c_normed.dtype

                quant_func = functools_partial(
                    get_hip_quant(QuantType.per_1x128), transpose_scale=True
                )
                q_input, x_scale = quant_func(
                    kv_c_normed,
                    quant_dtype=dtypes.fp8,
                    scale=getattr(self.kv_b_proj, "input_scale", None),
                )

                k, v = fused_gemm_a8w8_blockscale_preshuffle_split_cat(
                    q_input,
                    weight_shuffled,
                    k_rope.expand((-1, self.num_heads, -1)),
                    x_scale,
                    weight_scale,
                    self.qk_nope_head_dim,
                    self.v_head_dim,
                    output_dtype,
                )
            else:
                kv_nope = self.kv_b_proj(kv_c_normed).view(
                    -1, self.num_heads, self.qk_nope_head_dim + self.v_head_dim
                )
                k_nope, v = kv_nope.split(
                    [self.qk_nope_head_dim, self.v_head_dim], dim=-1
                )

                k = torch.cat((k_nope, k_rope.expand((*k_nope.shape[:-1], -1))), dim=-1)
        else:
            kv_nope = self.kv_b_proj(kv_c_normed).view(
                -1, self.num_heads, self.qk_nope_head_dim + self.v_head_dim
            )
            k_nope, v = kv_nope.split([self.qk_nope_head_dim, self.v_head_dim], dim=-1)

            k = torch.cat((k_nope, k_rope.expand((*k_nope.shape[:-1], -1))), dim=-1)

        output = flash_attn_varlen_func(
            q=q,
            k=k,
            v=v,
            cu_seqlens_q=attn_metadata.cu_seqlens_q,
            cu_seqlens_k=attn_metadata.cu_seqlens_k,
            max_seqlen_q=attn_metadata.max_seqlen_q,
            max_seqlen_k=attn_metadata.max_seqlen_k,
            min_seqlen_q=attn_metadata.min_seqlen_q,
            dropout_p=attn_metadata.dropout_p,
            softmax_scale=self.scale,
            causal=True,
        )

        return self.o_proj(output.flatten(start_dim=-2))

    def _forward_prefill_mla(
        self,
        q: torch.Tensor,
        kv_c_and_k_pe_cache: torch.Tensor,
        attn_metadata: AttentionMetaData,
    ) -> torch.Tensor:
        assert attn_metadata is not None
        B = q.shape[0]

        o = torch.empty(
            B, self.num_heads, self.kv_lora_rank, dtype=self.dtype, device=q.device
        )

        paged_cu_seqlens_q = attn_metadata.cu_seqlens_q
        paged_kv_indptr = attn_metadata.kv_indptr
        paged_kv_indices = attn_metadata.kv_indices
        kv_last_page_lens = attn_metadata.kv_last_page_lens
        max_q_len = attn_metadata.max_seqlen_q
        if self.topk_indices_buffer is not None:
            sparse_kv_indices = triton_convert_req_index_to_global_index_dsa_prefill(
                attn_metadata.sparse_cu_seqlens_q,
                attn_metadata.sparse_kv_indptr,
                attn_metadata.token_to_seq_idxs,
                self.topk_indices_buffer[:B],
                attn_metadata.block_tables,
                attn_metadata.cu_seqlens_q,
                NUM_TOPK_TOKENS=self.topk_indices_buffer.shape[1],
            )
            paged_cu_seqlens_q = attn_metadata.sparse_cu_seqlens_q
            paged_kv_indptr = attn_metadata.sparse_kv_indptr
            paged_kv_indices = sparse_kv_indices
            max_q_len = 1

        if kv_c_and_k_pe_cache.numel() > 0:
            if self.kv_cache_dtype.startswith("fp8"):
                mla_decode_fwd(
                    q,
                    kv_c_and_k_pe_cache.view(-1, 1, 1, q.shape[-1]),
                    o,
                    paged_cu_seqlens_q,
                    paged_kv_indptr,
                    paged_kv_indices,
                    kv_last_page_lens,
                    max_q_len,
                    self.scale,
                    0.0,
                    None,
                    q_scale=self._q_scale,
                    kv_scale=self._k_scale,
                )
            else:
                mla_prefill_fwd(
                    q,
                    kv_c_and_k_pe_cache.view(-1, 1, 1, q.shape[-1]),
                    o,
                    paged_cu_seqlens_q,
                    paged_kv_indptr,
                    paged_kv_indices,
                    kv_last_page_lens,
                    max_q_len,
                    self.scale,
                    0.0,
                    None,
                )

        return self._v_up_proj_and_o_proj(o)

    def _forward_decode(
        self,
        q: torch.Tensor,
        kv_c_and_k_pe_cache: torch.Tensor,
        attn_metadata: AttentionMetaData,
    ) -> torch.Tensor:
        assert kv_c_and_k_pe_cache.numel() > 0
        assert attn_metadata is not None
        B = q.shape[0]

        o = torch.empty(
            B, self.num_heads, self.kv_lora_rank, dtype=self.dtype, device=q.device
        )

        kv_buffer = kv_c_and_k_pe_cache.unsqueeze(2)
        paged_kv_indptr = attn_metadata.kv_indptr
        paged_kv_indices = attn_metadata.kv_indices
        if self.topk_indices_buffer is not None:
            paged_kv_indptr = attn_metadata.sparse_kv_indptr
            paged_kv_indices = triton_convert_req_index_to_global_index(
                attn_metadata.cu_seqlens_q,
                attn_metadata.kv_indptr,
                paged_kv_indptr,
                attn_metadata.kv_indices,
                self.topk_indices_buffer[:B],
                NUM_TOPK_TOKENS=self.topk_indices_buffer.shape[1],
            )

        # q_scale = kv_scale = None
        # if self.kv_cache_dtype.startswith("fp8"):
        #     q = q.to(dtypes.fp8)
        #     q_scale = kv_scale = self.one_scale

        dp_size = get_dp_group().world_size
        use_persistent_mode = not (dp_size > 1 and self.kv_cache_dtype == "fp8")

        if not use_persistent_mode:
            # DP : disable persistent mode to avoid overflow
            work_meta_data = None
            work_indptr = None
            work_info_set = None
            reduce_indptr = None
            reduce_final_map = None
            reduce_partial_map = None
        else:
            work_meta_data = attn_metadata.work_meta_data
            work_indptr = attn_metadata.work_indptr
            work_info_set = attn_metadata.work_info_set
            reduce_indptr = attn_metadata.reduce_indptr
            reduce_final_map = attn_metadata.reduce_final_map
            reduce_partial_map = attn_metadata.reduce_partial_map

        mla_decode_fwd(
            q,
            kv_buffer.view(-1, 1, 1, q.shape[-1]),
            o,
            attn_metadata.cu_seqlens_q,
            paged_kv_indptr,
            paged_kv_indices,
            attn_metadata.kv_last_page_lens,
            attn_metadata.max_seqlen_q,
            num_kv_splits=16,
            sm_scale=self.scale,
            work_meta_data=work_meta_data,
            work_indptr=work_indptr,
            work_info_set=work_info_set,
            reduce_indptr=reduce_indptr,
            reduce_final_map=reduce_final_map,
            reduce_partial_map=reduce_partial_map,
            q_scale=self._q_scale,
            kv_scale=self._k_scale,
        )

        return self._v_up_proj_and_o_proj(o)

    def _forward_decode_mha(
        self,
        q: torch.Tensor,
        k: torch.Tensor,
        v: torch.Tensor,
        attn_metadata: AttentionMetaData,
    ) -> torch.Tensor:
        """Decode path using MHA (e.g. for GLM-5 when mla_decode kernel is unsupported). Uses paged_attention_triton (pa_decode_gluon)."""
        forward_context = get_forward_context()
        kv_cache_data = forward_context.kv_cache_data
        layer_cache = kv_cache_data[f"layer_{self.layer_num}"]
        k_cache = layer_cache.k_cache
        v_cache = layer_cache.v_cache
        k_scale = getattr(layer_cache, "k_scale", None)
        v_scale = getattr(layer_cache, "v_scale", None)
        if k_scale is None:
            k_scale = self.one_scale
        if v_scale is None:
            v_scale = self.one_scale

        if self.kv_cache_dtype == "fp8":
            aiter.reshape_and_cache_with_pertoken_quant(
                k,
                v,
                k_cache,
                v_cache,
                k_scale,
                v_scale,
                attn_metadata.slot_mapping,
                asm_layout=False,
            )
        else:
            aiter.reshape_and_cache(
                k,
                v,
                k_cache,
                v_cache,
                attn_metadata.slot_mapping,
                kv_cache_dtype="auto",
                k_scale=None,
                v_scale=None,
                asm_layout=False,
            )

        o = torch.empty_like(q)
        num_seqs, num_q_heads_total, head_size = q.shape
        num_blocks, num_kv_heads, _, block_size, _ = k_cache.shape
        query_group_size = num_q_heads_total // num_kv_heads
        assert num_q_heads_total % num_kv_heads == 0

        max_context_partition_num = get_recommended_splits(num_seqs, num_kv_heads)
        context_partition_size = 256
        sliding_window = getattr(self, "sliding_window", -1)
        if sliding_window > 0:
            max_context_partition_num = 1
            context_partition_size = 128

        intermediate_shape = (
            num_seqs,
            num_kv_heads,
            max_context_partition_num,
            query_group_size,
        )
        exp_sums = torch.empty(intermediate_shape, dtype=torch.float32, device=q.device)
        max_logits = torch.empty(
            intermediate_shape, dtype=torch.float32, device=q.device
        )
        temporary_output = torch.empty(
            *intermediate_shape,
            head_size,
            dtype=q.dtype,
            device=q.device,
        )

        if k_scale is not None and k_scale.numel() > 1:
            k_scale = k_scale.unsqueeze(-1)
            v_scale = v_scale.unsqueeze(-1)

        compute_type = (
            torch.bfloat16
            if self.kv_cache_dtype == "bf16" or self.kv_cache_dtype == "auto"
            else aiter.dtypes.fp8
        )
        # q = torch.randn_like(q)
        # k_cache = torch.randn_like(k_cache)
        # v_cache = torch.randn_like(v_cache)

        torch.ops.aiter.pa_decode_gluon(
            o,
            q,
            k_cache,
            v_cache,
            attn_metadata.context_lens,
            attn_metadata.block_tables,
            self.scale,
            attn_metadata.max_seqlen_q,
            max_context_partition_num,
            context_partition_size,
            compute_type,
            None,  # q_scale
            None if self.kv_cache_dtype == "bf16" else k_scale,
            None if self.kv_cache_dtype == "bf16" else v_scale,
            exp_sums=exp_sums,
            max_logits=max_logits,
            temporary_output=temporary_output,
            alibi_slopes=None,
            sinks=self.sinks,
            sliding_window=sliding_window,
            ps=True,
        )
        # from aiter.dist.parallel_state import get_tp_group
        # if get_tp_group().rank == 0:
        #     # print("output of pa_decode_gluon:", o)
        #     print(f"q.shape: {q.shape}")
        #     print(f"k_cache.shape: {k_cache.shape}")
        #     print(f"v_cache.shape: {v_cache.shape}")
        #     print(f"attn_metadata.context_lens: {attn_metadata.context_lens}")
        #     print(f"attn_metadata.block_tables.shape: {attn_metadata.block_tables.shape}")

        #     print(f"o.shape: {o.shape}")

        return self.o_proj(o.view(o.shape[0], -1))

    def _compute_kv_from_knope_krope(
        self, kv_c_normed: torch.Tensor, k_rope: torch.Tensor
    ) -> tuple[torch.Tensor, torch.Tensor]:
        """Compute full k, v from k_nope (kv_c_normed) and k_rope for MHA cache."""
        if k_rope.dim() == 2:
            k_rope = k_rope.unsqueeze(1)
        kv_nope = self.kv_b_proj(kv_c_normed).view(
            -1, self.num_heads, self.qk_nope_head_dim + self.v_head_dim
        )  # got k_nope + v from kv_c_normed
        k_nope, v = kv_nope.split(
            [self.qk_nope_head_dim, self.v_head_dim], dim=-1
        )
        k = torch.cat((k_nope, k_rope.expand((*k_nope.shape[:-1], -1))), dim=-1)
        return k, v

    def forward(
        self,
        q: torch.Tensor,  # query in unified attn
        k_nope: torch.Tensor,
        k_rope: torch.Tensor,
        positions: torch.Tensor,
        q_scale: Optional[torch.Tensor],
        qkv: Optional[torch.Tensor],
    ) -> torch.Tensor:
        # kv_cache = self.kv_cache
        forward_context: ForwardContext = get_forward_context()
        if isinstance(forward_context.attn_metadata, dict):
            attn_metadata = get_attn_metadata_for_layer(
                forward_context, self.layer_num
            )
        else:
            attn_metadata = forward_context.attn_metadata
        context = forward_context.context
        use_prefill_mla = (
            self.topk_indices_buffer is not None
            and attn_metadata.max_seqlen_k > self.topk_indices_buffer.shape[1]
        )
        if forward_context.context.is_dummy_run:
            # dummy run: skip real attention and return
            atom_config = get_current_atom_config()
            output_shape = list(q.shape)
            output_shape[-1] = atom_config.hf_config.hidden_size
            output_dtype = atom_config.torch_dtype
            output = torch.empty(output_shape, dtype=output_dtype, device=q.device)
            return output
        kv_cache_data = forward_context.kv_cache_data
        kv_cache = kv_cache_data[f"layer_{self.layer_num}"].k_cache

        if context.is_prefill and not use_prefill_mla:
            prefill_q = self.q_proj(q, x_scale=q_scale).view(
                -1, self.num_heads, self.qk_head_dim
            )
            prefill_q_pe = prefill_q[..., self.qk_nope_head_dim :]
            self.rotary_emb(positions, prefill_q_pe, k_rope)

            if self.use_mha_decode:
                k, v = self._compute_kv_from_knope_krope(k_nope, k_rope)
                layer_cache = kv_cache_data[f"layer_{self.layer_num}"]
                k_cache = layer_cache.k_cache
                v_cache = layer_cache.v_cache
                k_scale = layer_cache.k_scale
                v_scale = layer_cache.v_scale
                if self.kv_cache_dtype == "fp8":
                    aiter.reshape_and_cache_with_pertoken_quant(
                        k,
                        v,
                        k_cache,
                        v_cache,
                        k_scale,
                        v_scale,
                        attn_metadata.slot_mapping,
                        asm_layout=True,  # use triton attention
                    )
                else:
                    aiter.reshape_and_cache(
                        k,
                        v,
                        k_cache,
                        v_cache,
                        attn_metadata.slot_mapping,
                        kv_cache_dtype="auto",
                        k_scale=None,
                        v_scale=None,
                        asm_layout=True,
                    )

            elif kv_cache.numel() > 0:
                concat_and_cache_mla(
                    k_nope,
                    k_rope.squeeze(1),
                    kv_cache,
                    attn_metadata.slot_mapping.flatten(),
                    kv_cache_dtype=self.kv_cache_dtype,
                    scale=self._k_scale,
                )

            output = self._forward_prefill_mha(
                prefill_q, k_nope, k_rope, kv_cache, attn_metadata
            )
        elif self.use_mha_decode and not context.is_prefill:
            # prefill_q = self.q_proj(q, x_scale=q_scale).view(
            #     -1, self.num_heads, self.qk_head_dim
            # )
            # prefill_q_pe = prefill_q[..., self.qk_nope_head_dim :]
            # self.rotary_emb(positions, prefill_q_pe, k_rope)

            q_nope, q_rope = self._q_proj_and_k_up_proj(q, x_scale=q_scale)
            self.rotary_emb(positions, q_rope, k_rope)
            q_nope_bt = q_nope.transpose(0, 1).to(q_rope.dtype)
            if q_nope_bt.size(0) != q_rope.size(0):
                q_nope_bt = q_nope_bt.transpose(0, 1)
            n_heads = max(q_nope_bt.size(1), q_rope.size(1))
            if q_nope_bt.size(1) != n_heads:
                q_nope_bt = q_nope_bt.repeat_interleave(
                    n_heads // q_nope_bt.size(1), dim=1
                )
            if q_rope.size(1) != n_heads:
                q_rope = q_rope.repeat_interleave(
                    n_heads // q_rope.size(1), dim=1
                )
            # Reduce q_nope 512 -> qk_nope_head_dim (192), then concat with q_rope (64) -> (bs, 8, qk_head_dim)
            q_nope_reduced = q_nope_bt[:, :, : self.qk_nope_head_dim]
            q_for_mha = torch.cat([q_nope_reduced, q_rope], dim=-1)
            # print("q_for_mha", q_for_mha.shape)
            # print("q_rope", q_rope.shape)
            # print("q_out", q_out.shape)
            # print("prefill_q_pe", prefill_q_pe.shape)
            k, v = self._compute_kv_from_knope_krope(k_nope, k_rope)
            output = self._forward_decode_mha(q_for_mha, k, v, attn_metadata)
        else:
            q_nope, q_rope = self._q_proj_and_k_up_proj(q, x_scale=q_scale)

            q_out = torch.empty(
                (
                    q_nope.shape[0],
                    self.num_heads,
                    self.kv_lora_rank + self.qk_rope_head_dim,
                ),
                dtype=(
                    dtypes.fp8 if self.kv_cache_dtype.startswith("fp8") else self.dtype
                ),
                device=q_nope.device,
            )
            if kv_cache.numel() > 0:
                fused_qk_rope_concat_and_cache_mla(
                    q_nope,
                    q_rope,
                    k_nope,
                    k_rope,
                    kv_cache.view(
                        kv_cache.shape[0], -1, self.kv_lora_rank + self.qk_rope_head_dim
                    ),
                    q_out,
                    attn_metadata.slot_mapping,
                    self._k_scale,
                    self._q_scale,
                    positions,
                    self.rotary_emb.cos_cache,
                    self.rotary_emb.sin_cache,
                    is_neox=self.rotary_emb.is_neox_style,
                    is_nope_first=True,
                )
                # q_out = self.fused_kv_bmm(q, q_scale, k_nope, k_rope, positions, kv_cache, attn_metadata)

            if context.is_prefill:
                output = self._forward_prefill_mla(q_out, kv_cache, attn_metadata)
            else:
                print("q_out", q_out.shape)
                output = self._forward_decode(q_out, kv_cache, attn_metadata)

        return output


import triton
import triton.language as tl


@triton.jit
def _convert_req_index_to_global_index_kernel(
    qo_indptr,  # int32 [num_requests]
    kv_indptr,  # int32 [num_requests+1]
    page_kv_indptr,  # int32 [num_requests+1]
    kv_indices,  # int32 [num_requests * max_num_blocks_per_req]
    token_indices_ptr,  # int32 [num_tokens, NUM_TOPK_TOKENS]
    out_kv_indices,  # int32
    # shapes (compile-time where possible)
    NUM_TOPK_TOKENS: tl.constexpr,
    BLOCK_SIZE: tl.constexpr,
    BLOCK_N: tl.constexpr,  # tile width along columns
    # strides (in elements)
    ti_stride0,
    ti_stride1,
):
    # program_id(0) -> batch_id (row)
    # program_id(1) -> tile index along columns
    batch_id = tl.program_id(0)
    tile_id = tl.program_id(1)

    # Each program covers BLOCK_N consecutive columns
    indice_id = tile_id * BLOCK_N + tl.arange(0, BLOCK_N)

    # Load request id for this token (no mask: grid is exact)
    kv_start = tl.load(kv_indptr + batch_id)
    kv_end = tl.load(kv_indptr + batch_id + 1)
    out_kv_start = tl.load(page_kv_indptr + batch_id)
    kv_len = kv_end - kv_start
    qo_start = tl.load(qo_indptr + batch_id)
    qo_end = tl.load(qo_indptr + batch_id + 1)

    for token_id in range(qo_start, qo_end):
        # Load token indices for this tile
        ti_ptr = token_indices_ptr + token_id * ti_stride0 + indice_id * ti_stride1
        tok = tl.load(ti_ptr)  # int32

        # Guard block_table access
        valid_mask = (indice_id < kv_len) & (indice_id < NUM_TOPK_TOKENS)
        out_val = tl.load(
            kv_indices + kv_start + tok,
            mask=valid_mask,
            other=0,
        )

        # Store results
        out_ptr_ij = out_kv_indices + out_kv_start + indice_id
        tl.store(
            out_ptr_ij,
            out_val,
            mask=valid_mask,
        )


def triton_convert_req_index_to_global_index(
    qo_indptr: torch.Tensor,  # int32 [num_tokens + 1]
    kv_indptr: torch.Tensor,  # int32 [num_tokens + 1]
    page_kv_indptr: torch.Tensor,  # int32 [num_tokens + 1]
    kv_indices: torch.Tensor,  # int32 [total_kv_seqlen]
    token_indices: torch.Tensor,  # int32 [num_tokens, NUM_TOPK_TOKENS]
    BLOCK_SIZE: int = 1,  # page_block_size = 1 for now
    NUM_TOPK_TOKENS: int = 2048,
    BLOCK_N: int = 128,  # tile width along columns
):
    """
    out[token_id, indice_id] =
        block_table[req_id[token_id],
            token_indices[token_id, indice_id] // BLOCK_SIZE] * BLOCK_SIZE
        + token_indices[token_id, indice_id] % BLOCK_SIZE

    Only when token_indices[token_id, indice_id] == -1 do we output -1.
    For safety, we also output -1 if the derived block_id would be
        out-of-bounds.
    """
    assert kv_indices.dtype == torch.int32
    assert token_indices.dtype == torch.int32
    assert token_indices.shape[1] == NUM_TOPK_TOKENS
    assert NUM_TOPK_TOKENS % BLOCK_N == 0, (
        f"NUM_TOPK_TOKENS ({NUM_TOPK_TOKENS}) must be divisible by"
        f"BLOCK_N ({BLOCK_N})"
    )

    num_batch = kv_indptr.shape[0] - 1
    tiles_per_row = NUM_TOPK_TOKENS // BLOCK_N

    # Ensure contiguous tensors on the same device
    qo_indptr_c = qo_indptr.contiguous()
    kv_indptr_c = kv_indptr.contiguous()
    kv_indices_c = kv_indices.contiguous()
    token_indices_c = token_indices.contiguous()
    page_kv_indptr_c = page_kv_indptr.contiguous()
    # TODO: not support mtp
    new_kv_indices = torch.empty_like(kv_indices)

    # Strides in elements
    ti_stride0, ti_stride1 = token_indices_c.stride()

    # Exact 2D grid: tokens × column tiles
    grid = (num_batch, tiles_per_row)

    _convert_req_index_to_global_index_kernel[grid](
        qo_indptr_c,
        kv_indptr_c,
        page_kv_indptr_c,
        kv_indices_c,
        token_indices_c,
        new_kv_indices,
        # shapes / constexprs
        NUM_TOPK_TOKENS,
        BLOCK_SIZE,
        BLOCK_N,
        # strides
        ti_stride0,
        ti_stride1,
    )
    return new_kv_indices


@triton.jit
def _convert_req_index_to_global_index_dsa_prefill_kernel(
    dsa_qo_indptr,  # int32 [num_tokens + 1]
    dsa_kv_indptr,  # int32 [num_tokens + 1]
    token_to_seq_idxs,  # int32 [num_tokens]
    topk_indices,  # int32 [num_tokens, NUM_TOPK_TOKENS]
    block_table,  # int32 [num_req, max_num_blocks_per_req]
    cu_seqlens_q,  # int32 [num_tokens + 1]
    out_kv_indices,  # int32
    # shapes (compile-time where possible)
    NUM_TOPK_TOKENS: tl.constexpr,
    BLOCK_SIZE: tl.constexpr,
    BLOCK_N: tl.constexpr,  # tile width along columns
    # strides (in elements)
    ti_stride0: tl.int64,  # topk_indices stride 0
    ti_stride1: tl.constexpr,  # topk_indices stride 1
    bt_stride0: tl.int64,  # block_table stride 0
    bt_stride1: tl.constexpr,  # block_table stride 1
):
    token_id = tl.program_id(0)
    tile_id = tl.program_id(1)

    col_id = tile_id * BLOCK_N + tl.arange(0, BLOCK_N)

    req_id = tl.load(token_to_seq_idxs + token_id)  # int32

    kv_start = tl.load(dsa_kv_indptr + token_id)
    kv_end = tl.load(dsa_kv_indptr + token_id + 1)
    kv_len = kv_end - kv_start

    # Load token indices for this tile
    indice = tl.load(
        topk_indices + token_id * ti_stride0 + col_id * ti_stride1
    )  # int32
    pre_seqlens_q = tl.load(cu_seqlens_q + req_id)

    # Guard block_table access
    store_mask = (col_id < kv_len) & (col_id < NUM_TOPK_TOKENS)
    valid_mask = store_mask & (indice >= 0)
    out_val = tl.load(
        block_table + req_id * bt_stride0 + (indice - pre_seqlens_q) * bt_stride1,
        mask=valid_mask,
        other=-1,
    )

    # Store results
    out_ptr_ij = out_kv_indices + kv_start + col_id
    tl.store(
        out_ptr_ij,
        out_val,
        mask=store_mask,
    )


def triton_convert_req_index_to_global_index_dsa_prefill(
    dsa_qo_indptr: torch.Tensor,  # int32 [num_tokens + 1]
    dsa_kv_indptr: torch.Tensor,  # int32 [num_tokens + 1]
    token_to_seq_idxs: torch.Tensor,  # int32 [num_tokens]
    topk_indices: torch.Tensor,  # int32 [num_tokens, NUM_TOPK_TOKENS]
    block_table: torch.Tensor,  # int32 [num_req, max_num_blocks_per_req]
    cu_seqlens_q: torch.Tensor,  # int32 [num_tokens + 1]
    # dsa_kv_indices: torch.Tensor,  # int32 [total_kv_seqlen]           -->>>     output for this kernel
    PAGE_SIZE: int = 1,  # page_block_size = 1 for now
    NUM_TOPK_TOKENS: int = 2048,
    BLOCK_N: int = 1024,  # tile width along columns
):

    assert topk_indices.shape[1] == NUM_TOPK_TOKENS
    assert NUM_TOPK_TOKENS % BLOCK_N == 0, (
        f"NUM_TOPK_TOKENS ({NUM_TOPK_TOKENS}) must be divisible by"
        f"BLOCK_N ({BLOCK_N})"
    )

    num_tokens = dsa_qo_indptr.shape[0] - 1
    tiles_per_row = NUM_TOPK_TOKENS // BLOCK_N

    new_kv_indices = torch.empty(
        num_tokens * NUM_TOPK_TOKENS, dtype=torch.int32, device=topk_indices.device
    )

    # Strides in elements
    ti_stride0, ti_stride1 = topk_indices.stride()
    bt_stride0, bt_stride1 = block_table.stride()

    grid = (num_tokens, tiles_per_row)

    _convert_req_index_to_global_index_dsa_prefill_kernel[grid](
        dsa_qo_indptr,
        dsa_kv_indptr,
        token_to_seq_idxs,
        topk_indices,
        block_table,
        cu_seqlens_q,
        new_kv_indices,
        # shapes / constexprs
        NUM_TOPK_TOKENS,
        PAGE_SIZE,
        BLOCK_N,
        # strides
        ti_stride0,
        ti_stride1,
        bt_stride0,
        bt_stride1,
    )
    return new_kv_indices
