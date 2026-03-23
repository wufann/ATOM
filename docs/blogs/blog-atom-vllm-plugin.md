# ATOM as vLLM Plugin Backend: Ecosystem Co-Evolution for AMD LLM Inference

Authors:  Zejun Chen, Hattie Wu, Lingpeng Jin, Carlus Huang, Chuan Li, Peng Sun

## 1. Introduction

LLM inference has long faced a core tension between hardware-specific optimization and framework compatibility. Maximizing performance on AMD Instinct GPUs needs deep hardware-aware kernel engineering, while production LLM serving overwhelmingly uses [vLLM](https://github.com/vllm-project/vllm) — the industry de facto standard — for its proven scheduling, memory management and API compatibility.

ATOM, a high-performance inference engine built exclusively for AMD Instinct GPUs, resolves this conflict through its dual-mode architecture. It runs as a standalone server or integrates seamlessly into vLLM as a plugin backend, delivering AMD-native model and kernel optimizations without modifying vLLM’s core code.

The ATOM vLLM plugin is neither a fork nor a replacement for vLLM, but a collaborative bridge connecting AMD’s hardware innovation to the open-source vLLM ecosystem, rooted in co-evolution, not competition. As the universal LLM serving standard, vLLM underpins inference infrastructure for startups and hyperscalers who rely on its APIs, continuous batching, and operational tools. Switching frameworks incurs steep learning costs, migration risks, and operational overhead; users should not have to choose between a trusted framework and full hardware performance.

Integrating ATOM as a vLLM plugin creates a cross-stakeholder win-win with five core advantages: 

- **Zero learning curve:** Full compatibility with existing vLLM commands, APIs, and workflows. ATOM runs transparently with no new tools or configuration—only improved kernel performance and a consistent experience.

- **Early access to AMD innovation:** Immediate use of cutting-edge AMD features (e.g., FP4 on MI355X, MI400 rack-scale inference) and top-tier kernel optimizations (e.g., AITER fused attention, custom AllReduce) without waiting for vLLM mainline upstreaming, shortening time-to-value for new AMD chips.

- **Agile innovation sandbox:** A fast validation layer for new ideas, hardware enablement, and kernel library testing (e.g., AITER), flexibly aligned with AMD’s roadmap (new GPUs, FP8/FP4, attention mechanisms) and unconstrained by upstream release cycles. 

- **vLLM as production-grade foundation for ROCm:** As the community-standard serving framework, vLLM delivers the stability, broad model coverage, and enterprise-grade features required for production deployments of AMD ROCm-based infrastructure.

- **Upstreamed mature optimizations:** ATOM serves as a temporary proving ground; stabilized kernels, optimizations, and features are upstreamed to vLLM’s native ROCm backend, benefiting all ROCm users and strengthening the open-source ecosystem.

This plugin enables a closed, iterative innovation cycle: new hardware, ideas, and libraries → rapid validation via ATOM → upstream integration into vLLM core when mature → universal access for ROCm users. The model accelerates delivery of AMD’s hardware advantages to users through ATOM, while long-term improvements flow back to the open-source community via vLLM. The remainder of this post examines the design, architecture, and implementation of the ATOM vLLM plugin system.


## 2. Architecture Overview

Framework teams (vLLM) focus on scheduling, batching, and API surfaces across multiple backends; hardware teams (AMD) drive kernel-level optimizations but cannot rewrite an entire serving framework. vLLM's **plugin registration mechanism** bridges this gap — ATOM follows the same established pattern used by other accelerator vendors, providing a clean three-layer separation of concerns:

| Layer | Responsibility |
|-------|---------------|
| **vLLM** | Request scheduling, KV cache management, continuous batching, OpenAI-compatible API |
| **ATOM Plugin** | Platform registration, model implementation, attention backends, kernel-level optimization |
| **AITER** | Low-level GPU kernels — fused MoE, flash attention, quantized GEMM, RoPE fusion |

For a comprehensive technical reference covering configuration translation, attention integration internals, installation, and environment variables, refer to the [ATOM vLLM Plugin Backend Guide](https://rocm.github.io/ATOM/docs/vllm_plugin_backend_guide.html).

The ATOM vLLM plugin system consists of four interconnected subsystems:

![ATOM vLLM Plugin Architecture Stack](atom_vllm_architecture_stack.svg)

## 3. Execution Details

The following diagram illustrates the end-to-end execution flow—from `vllm serve` startup through OOT plugin discovery, model construction, and a single serving step—showing how vLLM and ATOM interact at each stage:

![vLLM execution flow with ATOM OOT plugin](atom_vllm_oot_injection.svg)

As shown in the diagram, the execution flow has four phases: **plugin discovery** (steps 1–5), **attention backend selection** (steps 6–7), **model construction** (steps 8–9), and **serving** (steps 10–11). The subsections below detail the key implementation points for each phase.

### 3.1. Entry Point Registration (Steps 1–5)

The plugin activates through Python's standard `entry_points` mechanism:

```toml
[project.entry-points."vllm.platform_plugins"]
atom = "atom.plugin.vllm.register:register_platform"

[project.entry-points."vllm.general_plugins"]
atom_model_registry = "atom.plugin.vllm.register:register_model"
```

`register_platform()` returns the `ATOMPlatform` class (step 3); `register_model()` overrides vLLM's model registry with ATOM's optimized wrappers (step 5). Both hooks are no-ops when `ATOM_DISABLE_VLLM_PLUGIN=1` is set.

### 3.2. Attention Backend Selection (Steps 6–7)

`ATOMPlatform` extends `RocmPlatform` and overrides `get_attn_backend_cls()` to route attention to AITER-backed implementations:

```python
class ATOMPlatform(RocmPlatform):
    @classmethod
    def get_attn_backend_cls(cls, selected_backend, attn_selector_config, num_heads):
        if attn_selector_config.use_mla:
            return "atom.model_ops.attentions.aiter_mla.AiterMLABackend"
        return "atom.model_ops.attentions.aiter_attention.AiterBackend"
```

- **AiterBackend (MHA)** — Translates vLLM's `CommonAttentionMetadata` into a three-phase format (decode / extend / prefill) with chunk-based context processing.
- **AiterMLABackend (MLA)** — For DeepSeek V2/V3-style latent attention, with fused QK-RoPE-Cache-Update, batched FP4/FP8 GEMM for V-projection, persistent metadata buffers for CUDAGraph, and distributed context parallelism. ATOM patches vLLM's `MLAAttention.forward_impl` at import time to delegate to its own implementation when the plugin is active.

### 3.3. Model Construction and Weight Loading (Steps 8–9)

The `ATOMModelBase` wrapper implements vLLM's model interface while delegating to ATOM's native models. It handles:

- **Config translation** — `VllmConfig` → ATOM `Config`, preserving CUDAGraph settings while applying ATOM's own compile policies.
- **Model construction** — Instantiates the ATOM model class and initializes AITER's distributed backend.
- **Weight loading** — Uses ATOM's `load_model_in_plugin_mode()` for ATOM-specific formats and quantization schemes.

## 4. Supported Models

| Architecture | Type | Representative Models | ATOM Model Class |
|-------------|------|----------------------|-----------------|
| Qwen3ForCausalLM | Dense | Qwen3-8B, Qwen3-32B | `atom.models.qwen3` |
| Qwen3MoeForCausalLM | MoE | Qwen3-235B-A22B | `atom.models.qwen3_moe` |
| DeepseekV3ForCausalLM | MoE (MLA) | DeepSeek-V3, DeepSeek-R1, Kimi-K2-Thinking | `atom.models.deepseek_v2` |
| GptOssForCausalLM | MoE | GPT-OSS | `atom.models.gpt_oss` |
| Glm4MoeForCausalLM | MoE | GLM-4-MoE | `atom.models.glm4_moe` |

For step-by-step deployment recipes (Docker setup, server launch, benchmarking, and accuracy validation) for each model, refer to the [ATOM vLLM Recipes](https://github.com/ROCm/ATOM/tree/main/recipes/atom_vllm).

## 5. Performance Characteristics

In terms of performance, ATOM focuses on the following areas:

1. **Kernel-Level Fusion** — ATOM's models leverage AITER kernels that perform aggressive fusion of operations (e.g., QK-norm + RoPE + cache update + quantization) into single kernel launches, reducing memory bandwidth pressure.

2. **Optimized MoE Scheduling** — For Mixture-of-Experts models (Qwen3-MoE, DeepSeek V3, GPT-OSS), ATOM provides specialized expert parallel implementations with custom collective operations via AITER's distributed backend.

3. **Precision Optimization** — Native FP8 and FP4 (MXFP4) support through AITER's quantized GEMM kernels, including batched variants for MLA's V-projection.

4. **Instinct-Generation-Specific Optimization** — ATOM applies customized optimizations tuned for each generation of AMD Instinct hardware (e.g., MI300X/CDNA 3, MI355X/CDNA 4, MI400), leveraging micro-architecture differences for better performance.




## Conclusion

The ATOM vLLM plugin demonstrates that hardware-specific optimization and framework compatibility are not mutually exclusive. By leveraging vLLM's OOT plugin mechanism, ATOM delivers AMD-specific kernel optimizations — fused attention, quantized GEMM, optimized MoE routing — while preserving the full vLLM feature set that production deployments depend on.

The plugin architecture also serves as a proving ground: optimizations validated in ATOM's plugin mode can be upstreamed to vLLM's native ROCm backend over time, benefiting the broader community. Meanwhile, users get immediate access to the latest AMD hardware capabilities without waiting for upstream integration cycles.

For more information, see the [ATOM Documentation](https://rocm.github.io/ATOM/docs/), the [RFC on GitHub](https://github.com/ROCm/ATOM/issues/201), and the [ATOM repository](https://github.com/ROCm/ATOM).
