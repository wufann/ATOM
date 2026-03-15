# Kimi-K2 GEMM Shape Configuration

Model: **Kimi-K2-Thinking** (DeepseekV3ForCausalLM architecture)

## Model Parameters

| Parameter | Value |
|-----------|------:|
| `hidden_size` | 7168 |
| `q_lora_rank` | 1536 |
| `kv_lora_rank` | 512 |
| `qk_nope_head_dim` | 128 |
| `qk_rope_head_dim` | 64 |
| `v_head_dim` | 128 |
| `num_attention_heads` | 64 |
| `intermediate_size` (shared expert) | 18432 |
| `moe_intermediate_size` (routed expert) | 2048 |
| `n_routed_experts` | 384 |
| `n_shared_experts` | 1 |

## GEMM Shapes

| Layer | N | K | Description |
|-------|---:|---:|-------------|
| `fused_qkv_a_proj` | 2112 | 7168 | q_lora_rank(1536) + kv_lora_rank(512) + qk_rope_head_dim(64) |
| `q_b_proj` | 12288 | 1536 | num_heads(64) × qk_head_dim(128+64=192) |
| `kv_b_proj` | 16384 | 512 | num_heads(64) × (qk_nope_head_dim(128) + v_head_dim(128)) |
| `o_proj` | 7168 | 8192 | hidden_size(7168) ← num_heads(64) × v_head_dim(128) |
| `gate` (MoE router) | 384 | 7168 | n_routed_experts(384) ← hidden_size(7168) |
| `shared_experts.gate_up_proj` | 36864 | 7168 | intermediate_size(18432) × 2 ← hidden_size(7168) |
| `shared_experts.down_proj` | 7168 | 18432 | hidden_size(7168) ← intermediate_size(18432) |
| `experts.gate_up_proj` (per expert) | 4096 | 7168 | moe_intermediate_size(2048) × 2 ← hidden_size(7168) |
| `experts.down_proj` (per expert) | 7168 | 2048 | hidden_size(7168) ← moe_intermediate_size(2048) |

## TP Splitting Rules

| Linear Type | TP Split | Rule |
|-------------|----------|------|
| `ReplicatedLinear` / `MergedReplicatedLinear` | None | N, K unchanged (replicated on all ranks) |
| `ColumnParallelLinear` / `MergedColumnParallelLinear` | N axis | N_per_rank = N / tp_size, K unchanged |
| `RowParallelLinear` | K axis | K_per_rank = K / tp_size, N unchanged |

## GEMM Shapes with TP=4

### Attention + Shared Expert (TP split)

| Layer | Type | N | K | Description |
|-------|------|---:|---:|-------------|
| `fused_qkv_a_proj` | MergedReplicated | 2112 | 7168 | No split (replicated) |
| `q_b_proj` | ColumnParallel | **3072** | 1536 | 12288 / 4 = 3072 |
| `kv_b_proj` | ColumnParallel | **4096** | 512 | 16384 / 4 = 4096 |
| `o_proj` | RowParallel | 7168 | **2048** | 8192 / 4 = 2048 |
| `gate` (MoE router) | Replicated | 384 | 7168 | No split (replicated) |
| `shared_experts.gate_up_proj` | MergedColumnParallel | **9216** | 7168 | 36864 / 4 = 9216 |
| `shared_experts.down_proj` | RowParallel | 7168 | **4608** | 18432 / 4 = 4608 |

### Routed Experts — EP mode (default, `enable_expert_parallel=True`)

When EP is enabled, `ep_size = tp_size`. Each rank owns a subset of experts with **full** (unsplit) per-expert weights.

| Layer | N | K | Experts per rank | Description |
|-------|---:|---:|---:|-------------|
| `experts.gate_up_proj` | 4096 | 7168 | 96 | 384 / 4 = 96 experts, weight not TP-split |
| `experts.down_proj` | 7168 | 2048 | 96 | 384 / 4 = 96 experts, weight not TP-split |

### Routed Experts — TP mode (no EP, `enable_expert_parallel=False`)

When EP is disabled, all 384 experts exist on every rank, but each expert's weight is TP-split.

| Layer | Type | N | K | Description |
|-------|------|---:|---:|-------------|
| `experts.gate_up_proj` | MergedColumnParallel | **1024** | 7168 | 4096 / 4 = 1024, all 384 experts on each rank |
| `experts.down_proj` | RowParallel | 7168 | **512** | 2048 / 4 = 512, all 384 experts on each rank |

---

## GEMM Shapes with TP=8

### Attention + Shared Expert (TP split)

| Layer | Type | N | K | Description |
|-------|------|---:|---:|-------------|
| `fused_qkv_a_proj` | MergedReplicated | 2112 | 7168 | No split (replicated) |
| `q_b_proj` | ColumnParallel | **1536** | 1536 | 12288 / 8 = 1536 |
| `kv_b_proj` | ColumnParallel | **2048** | 512 | 16384 / 8 = 2048 |
| `o_proj` | RowParallel | 7168 | **1024** | 8192 / 8 = 1024 |
| `gate` (MoE router) | Replicated | 384 | 7168 | No split (replicated) |
| `shared_experts.gate_up_proj` | MergedColumnParallel | **4608** | 7168 | 36864 / 8 = 4608 |
| `shared_experts.down_proj` | RowParallel | 7168 | **2304** | 18432 / 8 = 2304 |

### Routed Experts — EP mode (default, `enable_expert_parallel=True`)

| Layer | N | K | Experts per rank | Description |
|-------|---:|---:|---:|-------------|
| `experts.gate_up_proj` | 4096 | 7168 | 48 | 384 / 8 = 48 experts, weight not TP-split |
| `experts.down_proj` | 7168 | 2048 | 48 | 384 / 8 = 48 experts, weight not TP-split |

### Routed Experts — TP mode (no EP, `enable_expert_parallel=False`)

| Layer | Type | N | K | Description |
|-------|------|---:|---:|-------------|
| `experts.gate_up_proj` | MergedColumnParallel | **512** | 7168 | 4096 / 8 = 512, all 384 experts on each rank |
| `experts.down_proj` | RowParallel | 7168 | **256** | 2048 / 8 = 256, all 384 experts on each rank |

## Decode-Stage MLA Absorb Optimization

In the decode path, ATOM applies **weight absorption** to eliminate the `kv_b_proj` GEMM at runtime. The `kv_b_proj` weight is decomposed into W_UK (K projection) and W_UV (V projection) during `process_weights_after_loading`, and these are absorbed into the q-side and output-side respectively. This converts standard GEMMs into **batched GEMMs** (one per attention head).

### Absorb Decomposition

Original `kv_b_proj` weight shape: `(num_heads × (qk_nope_head_dim + v_head_dim), kv_lora_rank)` = `(16384, 512)` (full model)

After decomposition and reshape:

| Absorbed Weight | Shape | Description |
|-----------------|-------|-------------|
| `W_K` (W_UK^T) | `(N_heads, qk_nope_head_dim, kv_lora_rank)` | K absorption: transposed for q_nope @ W_K → q_absorbed |
| `W_V` (W_UV^T) | `(N_heads, kv_lora_rank, v_head_dim)` | V absorption: attn_output @ W_V → v_output |

### Decode Attention GEMM Flow (after absorb)

Standard (no absorb): `fused_qkv_a_proj` → `q_b_proj` → `kv_b_proj` → Attention → `o_proj`

With absorb: `fused_qkv_a_proj` → `q_b_proj` → **q_nope @ W_K** → Attention (latent space) → **attn_out @ W_V** → `o_proj`

The `kv_b_proj` GEMM is completely eliminated. Instead, two batched GEMMs appear:

| Step | Operation | Input Shape | Weight Shape | Output Shape | Description |
|------|-----------|-------------|--------------|--------------|-------------|
| 1 | `fused_qkv_a_proj` | (M, 7168) | (2112, 7168) | (M, 2112) | Standard GEMM, replicated |
| 2 | `q_b_proj` | (M, 1536) | (N×192, 1536) | (M, N×192) | Standard GEMM, ColumnParallel |
| 3 | **q_nope @ W_K** | (N, M, 128) | (N, 128, 512) | (N, M, 512) | **Batched GEMM** (absorb K) |
| 4 | MLA Decode Attention | q: (M, N, 576) | KV cache: (kv_lora_rank + qk_rope_head_dim) | (M, N, 512) | Attention in latent space |
| 5 | **attn_out @ W_V** | (N, M, 512) | (N, 512, 128) | (N, M, 128) | **Batched GEMM** (absorb V) |
| 6 | `o_proj` | (M, N×128) | (7168, N×128) | (M, 7168) | Standard GEMM, RowParallel |

> Note: N = num_local_heads (after TP split). Attention operates on `kv_lora_rank(512) + qk_rope_head_dim(64) = 576` dim.

### Absorbed Batched GEMM Shapes — TP=4 (N_heads = 16)

| Batched GEMM | Batch (heads) | M | N | K | Quant | Description |
|--------------|---:|---|---:|---:|-------|-------------|
| q_nope @ W_K | 16 | tokens | **512** | **128** | FP8 / MXFP4 | Absorb K: (16, M, 128) × (16, 128, 512) → (16, M, 512) |
| attn_out @ W_V | 16 | tokens | **128** | **512** | FP8 / MXFP4 | Absorb V: (16, M, 512) × (16, 512, 128) → (16, M, 128) |

### Absorbed Batched GEMM Shapes — TP=8 (N_heads = 8)

| Batched GEMM | Batch (heads) | M | N | K | Quant | Description |
|--------------|---:|---|---:|---:|-------|-------------|
| q_nope @ W_K | 8 | tokens | **512** | **128** | FP8 / MXFP4 | Absorb K: (8, M, 128) × (8, 128, 512) → (8, M, 512) |
| attn_out @ W_V | 8 | tokens | **128** | **512** | FP8 / MXFP4 | Absorb V: (8, M, 512) × (8, 512, 128) → (8, M, 128) |

### Full Decode Attention GEMM Summary — TP=4

| Step | GEMM Type | Shape (M × N × K) | Quant |
|------|-----------|-------------------|-------|
| `fused_qkv_a_proj` | Standard | M × 2112 × 7168 | BF16 (replicated) |
| `q_b_proj` | Standard | M × 3072 × 1536 | BF16 (ColumnParallel) |
| q_nope @ W_K | Batched ×16 | M × 512 × 128 | FP8 / MXFP4 |
| attn_out @ W_V | Batched ×16 | M × 128 × 512 | FP8 / MXFP4 |
| `o_proj` | Standard | M × 7168 × 2048 | BF16 (RowParallel) |

### Full Decode Attention GEMM Summary — TP=8

| Step | GEMM Type | Shape (M × N × K) | Quant |
|------|-----------|-------------------|-------|
| `fused_qkv_a_proj` | Standard | M × 2112 × 7168 | BF16 (replicated) |
| `q_b_proj` | Standard | M × 1536 × 1536 | BF16 (ColumnParallel) |
| q_nope @ W_K | Batched ×8 | M × 512 × 128 | FP8 / MXFP4 |
| attn_out @ W_V | Batched ×8 | M × 128 × 512 | FP8 / MXFP4 |
| `o_proj` | Standard | M × 7168 × 1024 | BF16 (RowParallel) |

## Quantization Note

- **Attention layers** (`fused_qkv_a_proj`, `q_b_proj`, `kv_b_proj`, `o_proj`): BF16
- **MoE gate** (`gate`): BF16
- **Shared experts** (`shared_experts.gate_up_proj`, `shared_experts.down_proj`): BF16
- **Routed experts** (`experts.gate_up_proj`, `experts.down_proj`): MXFP4 blockscale (per_group, group_size=32, scale_format=e8m0)
