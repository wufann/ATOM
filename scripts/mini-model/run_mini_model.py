"""
ATOM-aligned decode-stage UT for Kimi-K2-Thinking-MXFP4 Mini 1-Layer model.

All operators, data types, and model structure match the ATOM production path.
Weights are dummy (random init via nn.Module defaults); only performance matters.

Usage (inside Docker container, single GPU):
  python3 /home/hatwu/ATOM/scripts/mini-model/run_mini_model.py

  # Custom batch size / context length
  python3 /home/hatwu/ATOM/scripts/mini-model/run_mini_model.py --batch-size 4 --context-len 2048
"""

import argparse
import os
import sys
import time

import numpy as np
import torch
import torch.distributed as dist

ATOM_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.insert(0, ATOM_ROOT)

# Patch missing aiter symbols that ATOM code may import but aren't in this aiter build
import aiter as _aiter
if not hasattr(_aiter, "decode_update_mla_metadata_v1"):
    _aiter.decode_update_mla_metadata_v1 = None


def parse_args():
    p = argparse.ArgumentParser(description="ATOM-aligned decode UT for mini Kimi model")
    p.add_argument("--model-path", type=str,
                    default="/home/hatwu/models/Kimi-K2-Thinking-MXFP4-Mini-1Layer",
                    help="Path to mini model directory")
    p.add_argument("--batch-size", type=int, default=32)
    p.add_argument("--context-len", type=int, default=128,
                    help="Simulated context length (KV cache already filled)")
    p.add_argument("--decode-steps", type=int, default=20)
    p.add_argument("--warmup", type=int, default=5)
    p.add_argument("--tp-size", type=int, default=4)
    p.add_argument("--kv-cache-dtype", type=str, default="bf16",
                    choices=["bf16", "fp8"])
    p.add_argument("--block-size", type=int, default=16,
                    help="Logical KV cache block size")
    p.add_argument("--max-num-batched-tokens", type=int, default=4096)
    p.add_argument("--max-num-seqs", type=int, default=32)
    p.add_argument("--profile", action="store_true",
                    help="Enable torch profiler for decode steps")
    p.add_argument("--profile-dir", type=str, default="./profile_traces",
                    help="Directory to save profiler traces")
    return p.parse_args()


def init_distributed(tp_size: int):
    """Initialize distributed environment via aiter."""
    from aiter import init_dist_env
    rank = int(os.environ.get("LOCAL_RANK", 0))
    torch.cuda.set_device(rank)
    backend = "nccl"
    init_dist_env(
        tp_size,
        rankID=rank,
        backend=backend,
        distributed_init_method=f"tcp://127.0.0.1:{os.environ.get('MASTER_PORT', '29500')}",
    )
    return rank


def build_atom_config(args, rank):
    """Build ATOM Config with MXFP4 quantization and dummy loading."""
    from atom.config import Config, CompilationConfig, set_current_atom_config

    config = Config(
        model=args.model_path,
        load_dummy=True,
        tensor_parallel_size=args.tp_size,
        enforce_eager=True,
        kv_cache_block_size=args.block_size,
        kv_cache_dtype=args.kv_cache_dtype,
        max_num_batched_tokens=args.max_num_batched_tokens,
        max_num_seqs=args.max_num_seqs,
        compilation_config=CompilationConfig(level=0, use_cudagraph=False),
    )
    set_current_atom_config(config)
    return config


def build_model(config):
    """Construct ATOM DeepseekV2ForCausalLM and skip weight loading."""
    from atom.models.deepseek_v2 import DeepseekV2ForCausalLM
    from atom.model_loader.loader import load_model

    config.quant_config.remap_layer_name(
        config.hf_config,
        getattr(DeepseekV2ForCausalLM, "packed_modules_mapping", {}),
    )

    torch.set_default_dtype(config.torch_dtype)
    torch.set_default_device("cuda")

    model = DeepseekV2ForCausalLM(atom_config=config)

    torch.set_default_device(None)
    load_model(model, config.model, config.hf_config, load_dummy=True)

    model.eval()
    return model


def allocate_kv_cache(config, model, tp_size):
    """Allocate MLA paged KV cache and bind to model layers."""
    from aiter import dtypes
    from atom.config import KVCacheTensor
    from atom.utils.forward_context import set_kv_cache_data

    hf = config.hf_config
    num_layers = hf.num_hidden_layers
    physical_block_size = 1  # MLA backend uses block_size=1
    block_ratio = config.kv_cache_block_size // physical_block_size

    max_context = config.max_model_len or 8192
    tokens_per_seq = max_context + 256
    logical_blocks_per_seq = (tokens_per_seq + config.kv_cache_block_size - 1) // config.kv_cache_block_size
    num_logical_blocks = logical_blocks_per_seq * config.max_num_seqs
    num_physical_blocks = num_logical_blocks * block_ratio

    kv_dtype = dtypes.d_dtypes[config.kv_cache_dtype]
    kv_cache_all = torch.zeros(
        num_layers,
        num_physical_blocks,
        physical_block_size,
        576,  # kv_lora_rank(512) + qk_rope_head_dim(64)
        dtype=kv_dtype,
        device="cuda",
    )

    kv_cache_tensors = []
    layer_id = 0
    for module in model.modules():
        if hasattr(module, "base_attention"):
            if hasattr(module, "use_mla") and module.use_mla:
                kv_cache = kv_cache_all[layer_id].view(
                    num_physical_blocks * physical_block_size, 1, 576
                )
                module.kv_cache = kv_cache
                module.max_model_len = config.max_model_len
                kv_cache_tensors.append(KVCacheTensor(
                    layer_num=layer_id,
                    k_cache=kv_cache,
                    v_cache=None,
                    k_scale=None,
                    v_scale=None,
                ))
                layer_id += 1

    kv_cache_data = {
        f"layer_{i}": t for i, t in enumerate(kv_cache_tensors)
    }
    set_kv_cache_data(kv_cache_data)

    return kv_cache_all, num_physical_blocks, physical_block_size, block_ratio


def build_decode_metadata(
    batch_size, context_lens_np, block_tables_np,
    num_physical_blocks, physical_block_size, block_ratio,
    num_attention_heads, kv_cache_dtype, tp_size,
):
    """
    Build AttentionMetaData for decode (1 token per sequence).
    Mirrors AiterMLAMetadataBuilder.prepare_decode().
    """
    from aiter import dtypes, get_mla_metadata_info_v1, get_mla_metadata_v1
    from atom.utils.forward_context import AttentionMetaData
    from atom.utils.block_convert import kv_indices_generate_triton

    max_seqlen_q = 1
    max_seqlen_k = int(context_lens_np.max())
    bs = batch_size

    num_local_heads = num_attention_heads // tp_size
    _MLA_MIN_HEADS = 16
    padded_num_heads = max(num_local_heads, _MLA_MIN_HEADS)
    dtype_kv = dtypes.d_dtypes[kv_cache_dtype]
    dtype_q = dtype_kv

    # slot_mapping: for decode, each seq writes to the last slot in its last block
    slot_mapping = np.zeros(bs, dtype=np.int64)
    for i in range(bs):
        ctx_len = context_lens_np[i]
        last_logical_block_idx = (ctx_len - 1) // (physical_block_size * block_ratio)
        last_physical_block = block_tables_np[i, last_logical_block_idx]
        offset_in_logical = (ctx_len - 1) % (physical_block_size * block_ratio)
        physical_sub_block = offset_in_logical // physical_block_size
        offset_in_physical = offset_in_logical % physical_block_size
        physical_block_id = last_physical_block * block_ratio + physical_sub_block
        slot_mapping[i] = physical_block_id * physical_block_size + offset_in_physical

    slot_mapping_gpu = torch.tensor(slot_mapping, dtype=torch.long, device="cuda")

    context_lens_gpu = torch.tensor(context_lens_np, dtype=torch.int32, device="cuda")

    # cu_seqlens_q: [0, 1, 2, ..., bs] for decode (1 token each)
    cu_seqlens_q = torch.arange(bs + 1, dtype=torch.int32, device="cuda")

    # kv_indptr: cumulative number of physical blocks per seq
    num_blocks_per_seq = np.ceil(context_lens_np / physical_block_size).astype(np.int32)
    kv_indptr_np = np.zeros(bs + 1, dtype=np.int32)
    kv_indptr_np[1:] = np.cumsum(num_blocks_per_seq)
    kv_indptr_gpu = torch.tensor(kv_indptr_np, dtype=torch.int32, device="cuda")

    # kv_last_page_lens: always 1 for physical_block_size=1
    kv_last_page_lens = torch.ones(bs, dtype=torch.int32, device="cuda")

    # block_tables (logical) → GPU
    max_logical_blocks = block_tables_np.shape[1]
    block_tables_gpu = torch.tensor(block_tables_np, dtype=torch.int32, device="cuda")

    # kv_indices: generated by triton kernel from block_tables
    total_physical_blocks_needed = int(kv_indptr_np[-1])
    max_possible_indices = bs * (max_seqlen_k + block_ratio)
    kv_indices = torch.zeros(max(max_possible_indices, total_physical_blocks_needed + 1024),
                             dtype=torch.int32, device="cuda")
    kv_indices_generate_triton(
        block_tables_gpu,
        kv_indices,
        kv_indptr_gpu,
        block_ratio,
        max_seqlen_k,
    )

    # MLA persistent worker buffers (work_meta_data, etc.)
    (
        (work_meta_data_size, work_meta_data_type),
        (work_indptr_size, work_indptr_type),
        (work_info_set_size, work_info_set_type),
        (reduce_indptr_size, reduce_indptr_type),
        (reduce_final_map_size, reduce_final_map_type),
        (reduce_partial_map_size, reduce_partial_map_type),
    ) = get_mla_metadata_info_v1(
        bs, 1, padded_num_heads, dtype_q, dtype_kv,
        is_sparse=False, fast_mode=True,
    )

    work_meta_data = torch.empty(work_meta_data_size, dtype=work_meta_data_type, device="cuda")
    work_indptr = torch.empty(work_indptr_size, dtype=work_indptr_type, device="cuda")
    work_info_set = torch.empty(work_info_set_size, dtype=work_info_set_type, device="cuda")
    reduce_indptr = torch.empty(reduce_indptr_size, dtype=reduce_indptr_type, device="cuda")
    reduce_final_map = torch.empty(reduce_final_map_size, dtype=reduce_final_map_type, device="cuda")
    reduce_partial_map = torch.empty(reduce_partial_map_size, dtype=reduce_partial_map_type, device="cuda")

    get_mla_metadata_v1(
        cu_seqlens_q,
        kv_indptr_gpu,
        kv_last_page_lens,
        padded_num_heads,
        1,  # nhead_kv
        True,
        work_meta_data,
        work_info_set,
        work_indptr,
        reduce_indptr,
        reduce_final_map,
        reduce_partial_map,
        page_size=physical_block_size,
        dtype_q=dtype_q,
        dtype_kv=dtype_kv,
        kv_granularity=max(physical_block_size, 16),
        max_seqlen_qo=max_seqlen_q,
        uni_seqlen_qo=max_seqlen_q,
        fast_mode=1,
        max_split_per_batch=16,
    )

    attn_metadata = AttentionMetaData(
        slot_mapping=slot_mapping_gpu,
        context_lens=context_lens_gpu,
        block_tables=block_tables_gpu,
        cu_seqlens_q=cu_seqlens_q,
        max_seqlen_q=max_seqlen_q,
        max_seqlen_k=max_seqlen_k,
        kv_indptr=kv_indptr_gpu,
        kv_indices=kv_indices,
        kv_last_page_lens=kv_last_page_lens,
        work_meta_data=work_meta_data,
        work_indptr=work_indptr,
        work_info_set=work_info_set,
        reduce_indptr=reduce_indptr,
        reduce_final_map=reduce_final_map,
        reduce_partial_map=reduce_partial_map,
    )
    attn_metadata.dtype_q = dtype_q

    return attn_metadata


def simulate_block_tables(batch_size, context_lens_np, block_size, block_ratio):
    """
    Create fake block tables mapping logical blocks → physical blocks.
    Physical blocks are assigned sequentially starting from 0.
    """
    max_logical_blocks = 0
    for i in range(batch_size):
        n = int(np.ceil(context_lens_np[i] / block_size))
        max_logical_blocks = max(max_logical_blocks, n)

    block_tables = np.zeros((batch_size, max_logical_blocks), dtype=np.int32)
    next_block = 0
    for i in range(batch_size):
        n = int(np.ceil(context_lens_np[i] / block_size))
        for j in range(n):
            block_tables[i, j] = next_block
            next_block += 1

    return block_tables


def run_decode_step(model, config, input_ids, positions, attn_metadata):
    """Execute one decode step with ATOM forward context."""
    from atom.utils.forward_context import Context, set_forward_context

    bs = input_ids.shape[0]
    context = Context(
        positions=positions,
        is_prefill=False,
        batch_size=bs,
        graph_bs=bs,
    )

    set_forward_context(attn_metadata, config, context)
    hidden_states = model(input_ids, positions)
    logits = model.compute_logits(hidden_states)
    return logits


def main():
    args = parse_args()

    rank = init_distributed(args.tp_size)
    is_main = rank == 0

    if is_main:
        print("=" * 60)
        print("ATOM-Aligned Decode UT — Kimi-K2 Mini 1-Layer Model")
        print("=" * 60)
        print(f"  Model path:    {args.model_path}")
        print(f"  TP size:       {args.tp_size}")
        print(f"  Batch size:    {args.batch_size}")
        print(f"  Context len:   {args.context_len}")
        print(f"  Decode steps:  {args.decode_steps}")
        print(f"  Warmup steps:  {args.warmup}")
        print(f"  KV cache dtype:{args.kv_cache_dtype}")
        print(f"  Block size:    {args.block_size}")
        print()

    # --- Build model ---
    if is_main:
        print("--- Building ATOM Model (dummy weights) ---")
    t0 = time.time()
    config = build_atom_config(args, rank)
    model = build_model(config)
    build_time = time.time() - t0
    if is_main:
        param_count = sum(p.numel() for p in model.parameters())
        param_mb = sum(p.numel() * p.element_size() for p in model.parameters()) / 1024 / 1024
        print(f"  Model built in {build_time:.2f}s")
        print(f"  Parameters: {param_count:,} ({param_mb:.1f} MB)")
        print()

    # --- Allocate KV cache ---
    if is_main:
        print("--- Allocating KV Cache ---")
    kv_cache_all, num_physical_blocks, physical_block_size, block_ratio = \
        allocate_kv_cache(config, model, args.tp_size)
    if is_main:
        kv_mb = kv_cache_all.numel() * kv_cache_all.element_size() / 1024 / 1024
        print(f"  KV cache shape: {list(kv_cache_all.shape)}")
        print(f"  KV cache size:  {kv_mb:.1f} MB")
        print(f"  Physical blocks: {num_physical_blocks}")
        print(f"  Block ratio:    {block_ratio}")
        print()

    # --- Prepare decode inputs ---
    hf = config.hf_config
    bs = args.batch_size
    context_len = args.context_len

    max_total_context = context_len + args.warmup + args.decode_steps
    max_context_lens_np = np.full(bs, max_total_context, dtype=np.int32)
    block_tables_np = simulate_block_tables(bs, max_context_lens_np, args.block_size, block_ratio)

    input_ids = torch.randint(0, hf.vocab_size, (bs,), device="cuda", dtype=torch.long)
    positions = torch.full((bs,), context_len, device="cuda", dtype=torch.long)

    # --- Warmup ---
    if is_main:
        print(f"--- Warmup ({args.warmup} steps) ---")

    for step in range(args.warmup):
        cur_context = context_len + step
        context_lens_np_cur = np.full(bs, cur_context, dtype=np.int32)
        positions_cur = torch.full((bs,), cur_context, device="cuda", dtype=torch.long)

        attn_metadata = build_decode_metadata(
            bs, context_lens_np_cur, block_tables_np,
            num_physical_blocks, physical_block_size, block_ratio,
            hf.num_attention_heads, args.kv_cache_dtype, args.tp_size,
        )
        logits = run_decode_step(model, config, input_ids, positions_cur, attn_metadata)
        input_ids = logits.argmax(dim=-1)

    torch.cuda.synchronize()
    if is_main:
        print(f"  Warmup done.")
        print()

    # --- Timed decode ---
    if is_main:
        print(f"--- Decode ({args.decode_steps} steps) ---")

    decode_times = []
    cur_context = context_len + args.warmup

    profiler_ctx = None
    if args.profile:
        os.makedirs(args.profile_dir, exist_ok=True)
        if is_main:
            print(f"  Profiler enabled, traces will be saved to: {args.profile_dir}")
        profiler_ctx = torch.profiler.profile(
            activities=[
                torch.profiler.ProfilerActivity.CPU,
                torch.profiler.ProfilerActivity.CUDA,
            ],
            schedule=torch.profiler.schedule(
                wait=1, warmup=1, active=args.decode_steps - 2, repeat=1,
            ),
            on_trace_ready=torch.profiler.tensorboard_trace_handler(args.profile_dir),
            record_shapes=True,
            with_stack=True,
        )
        profiler_ctx.__enter__()

    for step in range(args.decode_steps):
        cur_context_step = cur_context + step
        context_lens_np_cur = np.full(bs, cur_context_step, dtype=np.int32)
        positions_cur = torch.full((bs,), cur_context_step, device="cuda", dtype=torch.long)

        attn_metadata = build_decode_metadata(
            bs, context_lens_np_cur, block_tables_np,
            num_physical_blocks, physical_block_size, block_ratio,
            hf.num_attention_heads, args.kv_cache_dtype, args.tp_size,
        )

        torch.cuda.synchronize()
        t_start = time.time()
        logits = run_decode_step(model, config, input_ids, positions_cur, attn_metadata)
        torch.cuda.synchronize()
        t_step = time.time() - t_start

        input_ids = logits.argmax(dim=-1)
        decode_times.append(t_step)
        if is_main:
            print(f"  Step {step+1:3d}: {t_step * 1000:.2f} ms")

        if profiler_ctx is not None:
            profiler_ctx.step()

    if profiler_ctx is not None:
        profiler_ctx.__exit__(None, None, None)
        if is_main:
            print(f"  Profiler traces saved to: {args.profile_dir}")

    # --- Results ---
    if is_main:
        print()
        print("=" * 60)
        print("Results Summary")
        print("=" * 60)
        avg_ms = sum(decode_times) / len(decode_times) * 1000
        min_ms = min(decode_times) * 1000
        max_ms = max(decode_times) * 1000
        p50 = sorted(decode_times)[len(decode_times) // 2] * 1000
        print(f"  Batch size:       {bs}")
        print(f"  Context length:   {context_len}")
        print(f"  Decode avg:       {avg_ms:.2f} ms/step")
        print(f"  Decode min:       {min_ms:.2f} ms/step")
        print(f"  Decode max:       {max_ms:.2f} ms/step")
        print(f"  Decode p50:       {p50:.2f} ms/step")
        print(f"  Throughput:       {bs * 1000 / avg_ms:.1f} tokens/s (1-layer)")
        print(f"  Total generated:  {args.warmup + args.decode_steps} tokens")
        print()

    if dist.is_initialized():
        dist.barrier()


if __name__ == "__main__":
    main()
