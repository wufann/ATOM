# SPDX-License-Identifier: Apache-2.0
# SPDX-FileCopyrightText: Copyright contributors to the vLLM project
"""Inference-only MiMo-V2-Flash MTP (Multi-Token Prediction) model."""

import re
from typing import Optional, Union

import torch
import torch.nn as nn
from aiter.dist.communication_op import tensor_model_parallel_all_reduce
from atom.config import Config, QuantizationConfig
from atom.model_ops.embed_head import ParallelLMHead, VocabParallelEmbedding
from atom.model_ops.layernorm import RMSNorm
from atom.models.utils import IntermediateTensors, maybe_prefix
from atom.utils.decorators import support_torch_compile
from transformers import PretrainedConfig

from .mimo_v2_flash import MiMoV2Attention, MiMoV2MLP


class MiMoV2FlashMTPLayer(nn.Module):
    """Single transformer decoder block for MTP, using SWA attention + dense MLP."""

    def __init__(
        self,
        atom_config: Config,
        layer_num: int = 0,
        prefix: str = "",
    ) -> None:
        super().__init__()

        config = atom_config.hf_config
        quant_config = atom_config.quant_config
        kv_cache_dtype = atom_config.kv_cache_dtype

        self.hidden_size = config.hidden_size

        rope_theta = getattr(config, "rope_theta", 1000000)
        max_position_embeddings = getattr(config, "max_position_embeddings", 32768)
        v_scale = getattr(config, "attention_value_scale", None)

        # MTP block always uses SWA (sliding window attention)
        self.self_attn = MiMoV2Attention(
            hidden_size=self.hidden_size,
            num_heads=config.swa_num_attention_heads,
            num_kv_heads=config.swa_num_key_value_heads,
            head_dim=config.swa_head_dim,
            v_head_dim=getattr(config, "swa_v_head_dim", None),
            v_scale=v_scale,
            sliding_window_size=config.sliding_window_size,
            attention_bias=getattr(config, "attention_bias", False),
            add_swa_attention_sink_bias=getattr(
                config, "add_swa_attention_sink_bias", False
            ),
            rope_theta=getattr(config, "swa_rope_theta", rope_theta),
            max_position_embeddings=max_position_embeddings,
            partial_rotary_factor=getattr(config, "partial_rotary_factor", 1.0),
            kv_cache_dtype=kv_cache_dtype,
            layer_num=layer_num,
            quant_config=quant_config,
            prefix=f"{prefix}.self_attn",
        )

        # MTP block always uses dense MLP (not MoE)
        self.mlp = MiMoV2MLP(
            hidden_size=self.hidden_size,
            intermediate_size=config.intermediate_size,
            hidden_act=config.hidden_act,
            quant_config=quant_config,
            reduce_results=True,
            prefix=f"{prefix}.mlp",
        )

        self.input_layernorm = RMSNorm(
            config.hidden_size,
            eps=config.layernorm_epsilon,
            fused_allreduce=False,
        )
        self.post_attention_layernorm = RMSNorm(
            config.hidden_size,
            eps=config.layernorm_epsilon,
            fused_allreduce=False,
        )

    def forward(
        self,
        positions: torch.Tensor,
        hidden_states: torch.Tensor,
        residual: torch.Tensor | None,
    ) -> tuple[torch.Tensor, torch.Tensor]:
        if residual is None:
            residual = hidden_states
            hidden_states = self.input_layernorm(hidden_states)
        else:
            hidden_states, residual = self.input_layernorm(hidden_states, residual)

        hidden_states = self.self_attn(
            positions=positions,
            hidden_states=hidden_states,
        )

        hidden_states, residual = self.post_attention_layernorm(hidden_states, residual)
        hidden_states = self.mlp(hidden_states)
        return hidden_states, residual


class MiMoV2FlashMTPPredictorLayer(nn.Module):
    """One MTP prediction layer: enorm + hnorm + eh_proj + mtp_block + final_layernorm."""

    def __init__(self, atom_config: Config, prefix: str, layer_idx: int) -> None:
        super().__init__()

        config = atom_config.hf_config
        self.config = config

        self.enorm = RMSNorm(config.hidden_size, eps=config.layernorm_epsilon)
        self.hnorm = RMSNorm(config.hidden_size, eps=config.layernorm_epsilon)
        self.eh_proj = nn.Linear(config.hidden_size * 2, config.hidden_size, bias=False)

        self.mtp_block = MiMoV2FlashMTPLayer(
            atom_config=atom_config,
            layer_num=layer_idx,
            prefix=f"{prefix}.mtp_block",
        )

        self.final_layernorm = RMSNorm(
            config.hidden_size,
            eps=config.layernorm_epsilon,
            fused_allreduce=False,
        )

    def forward(
        self,
        input_ids: torch.Tensor,
        positions: torch.Tensor,
        previous_hidden_states: torch.Tensor,
        inputs_embeds: torch.Tensor,
        spec_step_index: int = 0,
    ) -> torch.Tensor:
        assert inputs_embeds is not None
        inputs_embeds = self.enorm(inputs_embeds)
        previous_hidden_states = self.hnorm(previous_hidden_states)

        hidden_states = self.eh_proj(
            torch.cat([inputs_embeds, previous_hidden_states], dim=-1)
        )

        hidden_states, residual = self.mtp_block(
            positions=positions, hidden_states=hidden_states, residual=None
        )
        # MTP always has fused_allreduce off, do explicit all-reduce
        hidden_states = tensor_model_parallel_all_reduce(hidden_states)
        hidden_states = residual + hidden_states

        # Apply final layernorm
        hidden_states = self.final_layernorm(hidden_states)
        return hidden_states


class MiMoV2FlashMultiTokenPredictor(nn.Module):
    def __init__(self, *, atom_config: Config, prefix: str = ""):
        super().__init__()
        config = atom_config.hf_config
        self.mtp_start_layer_idx = config.num_hidden_layers
        self.num_mtp_layers = getattr(config, "num_nextn_predict_layers", 1)

        self.layers = torch.nn.ModuleDict(
            {
                str(idx): MiMoV2FlashMTPPredictorLayer(
                    atom_config, f"{prefix}.layers.{idx}", layer_idx=idx
                )
                for idx in range(
                    self.mtp_start_layer_idx,
                    self.mtp_start_layer_idx + self.num_mtp_layers,
                )
            }
        )
        self.embed_tokens = VocabParallelEmbedding(
            config.vocab_size,
            config.hidden_size,
        )

    def forward(
        self,
        input_ids: torch.Tensor,
        positions: torch.Tensor,
        previous_hidden_states: torch.Tensor,
        inputs_embeds: torch.Tensor | None = None,
        spec_step_idx: int = 0,
    ) -> torch.Tensor:
        if inputs_embeds is None:
            inputs_embeds = self.embed_tokens(input_ids)
        current_step_idx = spec_step_idx % self.num_mtp_layers
        return self.layers[str(self.mtp_start_layer_idx + current_step_idx)](
            input_ids,
            positions,
            previous_hidden_states,
            inputs_embeds,
            current_step_idx,
        )


@support_torch_compile
class MiMoV2FlashMTP(nn.Module):

    packed_modules_mapping = {
        "q_proj": ("qkv_proj", "q"),
        "k_proj": ("qkv_proj", "k"),
        "v_proj": ("qkv_proj", "v"),
        "gate_proj": ("gate_up_proj", 0),
        "up_proj": ("gate_up_proj", 1),
    }

    def __init__(self, atom_config: Config, prefix: str = ""):
        super().__init__()
        self.config = atom_config.hf_config

        self.model = MiMoV2FlashMultiTokenPredictor(
            atom_config=atom_config, prefix=maybe_prefix(prefix, "model")
        )

        self.lm_head = ParallelLMHead(
            num_embeddings=self.config.vocab_size,
            embedding_dim=self.config.hidden_size,
            bias=False,
            prefix=maybe_prefix(prefix, "lm_head"),
        )

    def forward(
        self,
        input_ids: torch.Tensor,
        positions: torch.Tensor,
        hidden_states: torch.Tensor,
        intermediate_tensors: IntermediateTensors | None = None,
        inputs_embeds: torch.Tensor | None = None,
        spec_step_idx: int = 0,
    ) -> torch.Tensor:
        hidden_states = self.model(
            input_ids, positions, hidden_states, inputs_embeds, spec_step_idx
        )
        return hidden_states

    def compute_logits(
        self,
        hidden_states: torch.Tensor,
        spec_step_idx: int = 0,
    ) -> torch.Tensor | None:
        return self.lm_head(hidden_states)


# ---------------------------------------------------------------------------
# Weight remapping utilities for MTP checkpoint -> model parameter mapping
# ---------------------------------------------------------------------------

# Checkpoint pattern: model.mtp.layers.{N}.*
_MTP_LAYER_PATTERN = re.compile(r"model\.mtp\.layers\.(\d+)\.")

# Weights that live at the predictor level (not inside mtp_block)
_PREDICTOR_LEVEL_WEIGHTS = {"enorm", "hnorm", "eh_proj", "final_layernorm"}

# Shared weights that get promoted to top-level model attributes
_SHARED_WEIGHT_NAMES = {"embed_tokens"}


def get_mimo_v2_spec_layer_idx(config: PretrainedConfig, weight_name: str) -> Optional[int]:
    """Check if a weight belongs to an MTP layer or is a shared weight.

    Returns the target layer index for MTP layer weights, or -1 for shared
    weights (embed_tokens, lm_head). Returns None if the weight should be skipped.
    """
    num_nextn = getattr(config, "num_nextn_predict_layers", 0)
    if num_nextn <= 0:
        return None

    match = _MTP_LAYER_PATTERN.match(weight_name)
    if match is not None:
        mtp_layer_idx = int(match.group(1))
        if mtp_layer_idx < num_nextn:
            return config.num_hidden_layers + mtp_layer_idx
        return None

    # Shared weights (embed_tokens, lm_head) are at top level in checkpoint
    if any(key in weight_name for key in _SHARED_WEIGHT_NAMES):
        return -1  # sentinel: shared weight, pass through unchanged
    if "lm_head" in weight_name:
        return -1

    return None


def rewrite_mimo_v2_spec_layer_name(spec_layer: int, name: str) -> str:
    """Rewrite MTP weight names from checkpoint format to model parameter format.

    The spec_layer is the target layer index (num_hidden_layers + mtp_layer_idx).

    Checkpoint format -> Model parameter format:
        model.mtp.layers.{N}.enorm.*             -> model.layers.{spec_layer}.enorm.*
        model.mtp.layers.{N}.hnorm.*             -> model.layers.{spec_layer}.hnorm.*
        model.mtp.layers.{N}.eh_proj.*           -> model.layers.{spec_layer}.eh_proj.*
        model.mtp.layers.{N}.final_layernorm.*   -> model.layers.{spec_layer}.final_layernorm.*
        model.mtp.layers.{N}.pre_mlp_layernorm.* -> model.layers.{spec_layer}.mtp_block.post_attention_layernorm.*
        model.mtp.layers.{N}.<other>             -> model.layers.{spec_layer}.mtp_block.<other>
        model.mtp.layers.{N}.embed_tokens.*      -> model.embed_tokens.* (shared, top-level)
    """
    # Rename pre_mlp_layernorm -> post_attention_layernorm
    if "pre_mlp_layernorm" in name:
        name = name.replace("pre_mlp_layernorm", "post_attention_layernorm")

    match = _MTP_LAYER_PATTERN.match(name)
    if match is not None:
        prefix = match.group(0)  # e.g. "model.mtp.layers.0."
        suffix = name[len(prefix):]  # everything after the prefix

        # Shared weights promoted to top level
        for weight_name in _SHARED_WEIGHT_NAMES:
            if suffix.startswith(weight_name):
                return f"model.{suffix}"

        # Predictor-level weights stay at the layer level
        for weight_name in _PREDICTOR_LEVEL_WEIGHTS:
            if suffix.startswith(weight_name):
                return f"model.layers.{spec_layer}.{suffix}"

        # All other weights belong to the transformer block
        return f"model.layers.{spec_layer}.mtp_block.{suffix}"

    return name
