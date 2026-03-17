# ATOM vLLM Plugin Guide

ATOM (AiTer Optimized Model) is AMD's lightweight LLM inference engine built on
[AITER](https://github.com/ROCm/aiter) kernels for ROCm/HIP GPUs. This guide
documents ATOM's **plugin mode**, which allows ATOM's optimized models, attention
backends, and MoE kernels to run inside [vLLM](https://github.com/vllm-project/vllm)
as an out-of-tree (OOT) backend.

> **Quick Reference**
>
> | Component | Import / Entry Point | Purpose |
> |-----------|---------------------|---------|
> | `register_platform` | `atom.plugin.vllm.register:register_platform` | vLLM platform plugin — returns `ATOMPlatform` |
> | `register_model` | `atom.plugin.vllm.register:register_model` | vLLM general plugin — overrides model registry |
> | `ATOMPlatform` | `atom.plugin.vllm.platform.ATOMPlatform` | ROCm platform subclass that selects ATOM attention backends |
> | `ATOMModelBase` | `atom.plugin.vllm.model_wrapper.ATOMModelBase` | Base wrapper adapting ATOM models to vLLM's `VllmModel` interface |
> | `PluginConfig` | `atom.plugin.config.PluginConfig` | Dataclass carrying plugin-specific configuration |
> | `generate_atom_config_for_plugin_mode` | `atom.plugin.config` | Builds an ATOM `Config` from vLLM's config |

---

## 1. Overview

When ATOM is installed alongside vLLM, it automatically registers itself via
Python entry points. vLLM discovers ATOM at startup and delegates model
construction, attention computation, and weight loading to ATOM's optimized
implementations — no code changes to vLLM are required.

Key benefits of plugin mode:

- **Rapid PoC for new ROCm hardware and optimizations** — the plugin architecture
  enables fast prototyping and validation of new AMD GPU generations, novel kernel
  implementations, and experimental optimization ideas (e.g., fused operators,
  new quantization schemes, MoE scheduling strategies) without forking or modifying
  vLLM itself. New hardware support and performance innovations land in ATOM first
  and are immediately available to the entire vLLM user base.
- **Full ecosystem compatibility** — ATOM serves as a transparent acceleration
  layer beneath vLLM. Serving APIs, CLI flags, OpenAI-compatible endpoints, and
  client tooling all remain identical — users simply deploy vLLM within a
  ROCm environment that ships ATOM pre-installed and gain optimized performance
  with zero workflow changes.

---

## 2. Supported Models

The plugin currently overrides the following model architectures in vLLM's
`ModelRegistry`:

| HuggingFace Architecture | ATOM Model Class | Wrapper | Category |
|---|---|---|---|
| `Qwen3ForCausalLM` | `atom.models.qwen3.Qwen3ForCausalLM` | `ATOMForCausalLM` | Dense |
| `Qwen3MoeForCausalLM` | `atom.models.qwen3_moe.Qwen3MoeForCausalLM` | `ATOMMoEForCausalLM` | MoE |
| `DeepseekV3ForCausalLM` | `atom.models.deepseek_v2.DeepseekV3ForCausalLM` | `ATOMMoEForCausalLM` | MoE |
| `GptOssForCausalLM` | `atom.models.gpt_oss.GptOssForCausalLM` | `ATOMMoEForCausalLM` | MoE |
| `Glm4MoeForCausalLM` | `atom.models.glm4_moe.Glm4MoeForCausalLM` | `ATOMMoEForCausalLM` | MoE |

Two wrapper classes cover all models:

- **`ATOMForCausalLM`** — for dense (non-MoE) causal language models.
- **`ATOMMoEForCausalLM`** — for Mixture-of-Experts causal language models.

Both inherit from `ATOMModelBase`, which implements `VllmModel`, `SupportsQuant`,
and `SupportsPP` interfaces.

---

## 3. Installation and Quick Start

### 3.1 Prerequisites

- AMD Instinct MI300X / MI300A / MI355X GPUs

### 3.2 Set Up the Environment

The recommended approach is to pull an official ATOM + vLLM Docker image from
[Docker Hub](https://hub.docker.com/r/rocm/atom-dev/tags?name=vllm). These
images ship with ROCm, PyTorch, AITER, ATOM, and a compatible vLLM build
pre-installed — no manual dependency management is required.

Pull the latest OOT image:

```bash
docker pull rocm/atom-dev:vllm-latest
```

Or pin to a specific vLLM version and nightly date for reproducibility:

```bash
docker pull rocm/atom-dev:vllm-v0.17.0-nightly_20260315
```

ATOM's vLLM entry points are registered automatically at install time. Once
the container is running, `vllm serve` will pick up ATOM with no additional
configuration.

### 3.3 Launch vLLM with ATOM Plugin

```bash
vllm serve amd/DeepSeek-R1-0528-MXFP4 \
    --trust-remote-code \
    --kv-cache-dtype fp8 \
    --tensor-parallel-size 8 \
    --enable-expert-parallel
```

ATOM will log its activation at startup:

```
INFO atom: Register model DeepseekV3ForCausalLM to vLLM with atom.plugin.vllm.model_wrapper:ATOMMoEForCausalLM
INFO atom: Use atom attention backend
```

### 3.4 Disable the Plugin

This is intended for **debugging only**. When the ATOM plugin is disabled, vLLM
falls back to its built-in ROCm path, which may encounter version mismatches
with the AITER library bundled in the environment. To run pure vLLM without ATOM,
set environment variables before launching:

```bash
# Disable the entire ATOM plugin (platform + models)
export ATOM_DISABLE_VLLM_PLUGIN=1

# Or disable only ATOM attention (keep ATOM models but use vLLM attention)
export ATOM_DISABLE_VLLM_PLUGIN_ATTENTION=1
```

---

## 4. Architecture

### 4.1 Plugin Discovery

ATOM registers two entry points in `pyproject.toml`:

```toml
[project.entry-points."vllm.platform_plugins"]
atom = "atom.plugin.vllm.register:register_platform"

[project.entry-points."vllm.general_plugins"]
atom_model_registry = "atom.plugin.vllm.register:register_model"
```

vLLM calls these at startup:

1. **`register_platform()`** — sets `_CURRENT_FRAMEWORK = "vllm"` and returns
   the string `"atom.plugin.vllm.platform.ATOMPlatform"`. vLLM uses this class
   as the active platform, which controls attention backend selection.

2. **`register_model()`** — iterates over `_VLLM_MODEL_REGISTRY_OVERRIDES` and
   calls `vllm.ModelRegistry.register_model()` for each supported architecture,
   pointing them to ATOM wrapper classes. It also patches vLLM's `Attention` and
   `MLAAttention` classes for compatibility.

### 4.2 Plugin Lifecycle

```
vLLM startup
│
├─ 1. register_platform()
│     ├─ _set_framework_backbone("vllm")
│     └─ return "atom.plugin.vllm.platform.ATOMPlatform"
│
├─ 2. register_model()
│     ├─ Override ModelRegistry for supported architectures
│     ├─ patch_vllm_mla_attention()
│     └─ Patch Attention.process_weights_after_loading
│
├─ 3. vLLM loads model → ATOMModelBase.__init__()
│     ├─ generate_atom_config_for_plugin_mode(vllm_config)
│     │     └─ _generate_atom_config_from_vllm_config()
│     │           ├─ Build PluginConfig (vLLM-specific fields)
│     │           └─ Build ATOM Config (model, TP, KV cache, etc.)
│     ├─ set_attn_cls() → ops.Attention = PagedAttention
│     ├─ init_aiter_dist() → initialize AITER distributed env
│     └─ Construct ATOM model (e.g., DeepseekV3ForCausalLM)
│
├─ 4. ATOMPlatform.get_attn_backend_cls()
│     ├─ MLA model → AiterMLABackend
│     └─ MHA model → AiterBackend
│
└─ 5. Forward pass
      ├─ vLLM calls ATOMModelBase.forward()
      ├─ Delegates to self.model(input_ids, positions, ...)
      └─ Attention uses ATOM's AITER kernels via plugin decorators
```

### 4.3 Component Diagram

```
atom/plugin/
├── __init__.py              # Public API: is_vllm, is_plugin_mode
├── prepare.py               # Framework detection and state management
├── config.py                # PluginConfig + vLLM-to-ATOM config translation
├── register.py              # set_attn_cls, init_aiter_dist
├── attention.py             # vLLM attention metadata builders and backend decorators
├── attention_mha.py         # MHA (PagedAttention) plugin-mode decorator
├── attention_mla.py         # MLA plugin-mode methods and decorator
├── moe.py                   # FusedMoE decorator for plugin mode
└── vllm/
    ├── __init__.py           # vLLM sub-package exports
    ├── register.py           # register_platform(), register_model()
    ├── platform.py           # ATOMPlatform (RocmPlatform subclass)
    ├── model_wrapper.py      # ATOMModelBase, ATOMForCausalLM, ATOMMoEForCausalLM
    └── mla_patch.py          # Patches vLLM MLAAttention for ATOM MLA integration
```

---

## 5. Configuration Translation

When vLLM constructs an ATOM model, `generate_atom_config_for_plugin_mode()` translates
vLLM's `VllmConfig` into an ATOM `Config`. The translation preserves vLLM's
scheduling, caching, and parallelism decisions while injecting ATOM-specific
compilation and plugin settings.

### 5.1 `PluginConfig` Fields

| Field | Type | Default | Description |
|---|---|---|---|
| `model_config` | `Any` | `None` | vLLM's model config object |
| `rank` | `int` | `0` | Current process rank |
| `is_plugin_mode` | `bool` | `False` | Always `True` when running as a plugin |
| `is_vllm` | `bool` | `False` | `True` when running inside vLLM |
| `vllm_scheduler_config` | `Any` | `None` | vLLM scheduler config |
| `vllm_cache_config` | `Any` | `None` | vLLM cache config |
| `vllm_quant_config` | `Any` | `None` | vLLM quantization config |
| `vllm_use_atom_attention` | `bool` | `False` | Whether ATOM attention is active |

### 5.2 vLLM Config Mapping

The following table shows how vLLM config fields map to ATOM `Config` fields:

| ATOM `Config` Field | Source (vLLM) |
|---|---|
| `model` | `model_config.model` |
| `max_num_batched_tokens` | `scheduler_config.max_num_batched_tokens` |
| `max_num_seqs` | `scheduler_config.max_num_seqs` |
| `max_model_len` | `model_config.max_model_len` (or `scheduler_config.max_model_len`) |
| `gpu_memory_utilization` | `cache_config.gpu_memory_utilization` |
| `tensor_parallel_size` | `parallel_config.tensor_parallel_size` |
| `kv_cache_block_size` | `cache_config.block_size` |
| `num_kvcache_blocks` | `cache_config.num_gpu_blocks` |
| `kv_cache_dtype` | `cache_config.cache_dtype` |
| `enable_prefix_caching` | `cache_config.enable_prefix_caching` |
| `enable_expert_parallel` | `parallel_config.enable_expert_parallel` |
| `compilation_config.level` | `compilation_config.mode` |
| `enforce_eager` | Always `True` (ATOM disables its own CUDA graphs in plugin mode) |

**Design note:** In plugin mode, ATOM sets `enforce_eager=True` and
`use_cudagraph=False` because CUDA graph capture is managed by vLLM, not by ATOM.
ATOM's compilation config level is still derived from vLLM's
`compilation_config.mode` to control torch.compile behavior.

---

## 6. Attention Integration

### 6.1 Backend Selection

`ATOMPlatform.get_attn_backend_cls()` overrides vLLM's default attention backend
selection:

| Condition | Backend | Description |
|---|---|---|
| MLA model (`attn_selector_config.use_mla == True`) | `AiterMLABackend` | AITER Multi-Latent Attention backend |
| Standard MHA model | `AiterBackend` | AITER paged attention backend |
| `ATOM_DISABLE_VLLM_PLUGIN_ATTENTION=1` | vLLM default | Falls back to vLLM's ROCm attention |

### 6.2 MLA Patching

For models using Multi-Latent Attention (e.g., DeepSeek-R1), ATOM patches vLLM's
`MLAAttention` class at registration time via `patch_vllm_mla_attention()`:

- **`process_weights_after_loading`** — patched to call ATOM's weight processing
  and set default quantization scales (`_k_scale`, `_v_scale`, `_q_scale`,
  `_prob_scale`) instead of vLLM's original logic.
- **`forward_impl`** — patched to call `self.impl.forward_impl_plugin_mode()`
  when available, enabling fused QK RoPE and KV cache update within the attention
  forward pass.

### 6.3 Plugin-Mode Decorators

ATOM uses decorator classes to adapt its attention backends for plugin mode:

| Decorator | Target | Purpose |
|---|---|---|
| `AiterAttentionMetadataBuilderDecoratorForPluginMode` | MHA metadata builder | Adapts vLLM attention metadata to ATOM format |
| `AiterMLAAttentionMetadataBuilderDecoratorForPluginMode` | MLA metadata builder | Adapts vLLM MLA metadata to ATOM format |
| `AiterBackendDecoratorForPluginMode` | `AiterBackend` | Adds plugin-mode attributes and methods |
| `MLAAttentionImplDecoratorForPluginMode` | `MLAAttentionImpl` | Adds MLA plugin-mode forward implementation |
| `FusedMoEDecoratorForPluginMode` | `FusedMoE` | Renames to `ATOMFusedMoE` to prevent vLLM kernel initialization conflicts |

---

## 7. Model Wrapper

`ATOMModelBase` is the bridge between vLLM's model interface and ATOM's model
implementations.

### 7.1 Initialization

When vLLM instantiates a model, `ATOMModelBase.__init__` performs:

1. Stores vLLM config references (`model_config`, `cache_config`, `quant_config`, etc.)
2. Calls `generate_atom_config_for_plugin_mode(vllm_config)` to build the ATOM config
3. Calls `set_attn_cls()` to set `ops.Attention = PagedAttention` for vLLM mode
4. Calls `init_aiter_dist()` to initialize AITER's distributed environment (NCCL, TP/EP groups)
5. Looks up the ATOM model class from `_ATOM_MODEL_CLASSES` and constructs it
6. Initializes pipeline-parallel group references (`pp_group`, `tp_group`)

### 7.2 Forward Pass

```python
def forward(self, input_ids, positions, intermediate_tensors=None, inputs_embeds=None, **kwargs):
    # Pipeline parallel: use intermediate tensors from previous stage
    if not self.pp_group.is_first_rank:
        input_ids = None
        inputs_embeds = intermediate_tensors["hidden_states"]

    # Copy positions for MLA attention in graph mode
    if "positions" in self.atom_config.compilation_config.static_forward_context:
        buf = self.atom_config.compilation_config.static_forward_context["positions"]
        buf[:positions.numel()].copy_(positions)

    hidden_states = self.model(input_ids=input_ids, positions=positions, ...)

    if not self.pp_group.is_last_rank:
        return IntermediateTensors({"hidden_states": hidden_states})
    return hidden_states
```

### 7.3 Weight Loading

`ATOMModelBase.load_weights()` delegates to `load_model_in_plugin_mode()`, which
uses ATOM's custom weight loader. The vLLM-provided `weights` iterator is not
used directly — ATOM loads weights from the model path using its own safetensors
loader with support for sharded checkpoints and quantization-aware loading.

---

## 8. Environment Variables

| Variable | Type | Default | Description |
|---|---|---|---|
| `ATOM_DISABLE_VLLM_PLUGIN` | bool | `0` (false) | Set to `1` to disable the entire ATOM vLLM plugin (platform + model registration). vLLM runs in pure ROCm mode. |
| `ATOM_DISABLE_VLLM_PLUGIN_ATTENTION` | bool | `0` (false) | Set to `1` to disable only ATOM's attention backends. ATOM models are still used, but attention falls back to vLLM's default ROCm backend. |
| `ATOM_ENABLE_QK_NORM_ROPE_CACHE_QUANT_FUSION` | bool | `0` (false) | Enable QK-norm + RoPE + cache + quant fusion in attention. Recommended for Qwen3-MoE models. |

---

## 9. Known Limitations

- **CUDA graphs** — In plugin mode, ATOM disables its own CUDA graph capture
  (`enforce_eager=True`, `use_cudagraph=False`). CUDA graph management is
  delegated entirely to vLLM.

- **`max_num_batched_tokens` threshold** — When `max_num_batched_tokens >= 18432`,
  there is a known issue with illegal memory access in the ASM `fused_moe` kernel.
  If encountered, reduce `max_num_batched_tokens` or switch to the CK `fused_moe`
  kernel.

- **Multi-modality** — `ATOMPlatform` does not yet override
  `get_supported_vit_attn_backends()`, so Vision Transformer attention in
  multi-modal models falls back to vLLM's default backend.

---

## 10. Troubleshooting

### Plugin not activating

Verify ATOM is installed and entry points are registered:

```bash
pip show atom
python -c "from atom.plugin.vllm.register import register_platform; print(register_platform())"
```

Expected output: `atom.plugin.vllm.platform.ATOMPlatform`

### Falling back to vLLM attention

Check that `ATOM_DISABLE_VLLM_PLUGIN_ATTENTION` is not set:

```bash
echo $ATOM_DISABLE_VLLM_PLUGIN_ATTENTION
```

Look for this log line at startup:

```
INFO atom: Use atom attention backend
```

If you see `Fallback to original vLLM attention backend`, the attention plugin
is disabled.

### Illegal memory access in MoE

If you encounter `illegal memory access` errors with large batch sizes, try:

```bash
vllm serve <model> --max-num-batched-tokens 16384
```

Or switch to the CK fused_moe kernel by setting the appropriate ATOM environment
variable.

---

## Source Files

| File | Description |
|------|-------------|
| `atom/plugin/__init__.py` | Public API: `is_vllm`, `is_plugin_mode` |
| `atom/plugin/prepare.py` | Framework detection and `_CURRENT_FRAMEWORK` state management |
| `atom/plugin/config.py` | `PluginConfig` dataclass, `generate_atom_config_for_plugin_mode()`, vLLM config translator |
| `atom/plugin/register.py` | `set_attn_cls()`, `init_aiter_dist()` |
| `atom/plugin/attention.py` | vLLM attention metadata builders, backend decorators, `unified_attention_with_output_base_for_plugin_mode` |
| `atom/plugin/attention_mha.py` | MHA `PagedAttentionImpl` plugin-mode decorator |
| `atom/plugin/attention_mla.py` | MLA plugin-mode methods and `MLAAttentionImplDecoratorForPluginMode` |
| `atom/plugin/moe.py` | `FusedMoEDecoratorForPluginMode` — renames `FusedMoE` to `ATOMFusedMoE` in vLLM |
| `atom/plugin/vllm/__init__.py` | vLLM sub-package exports: `register_model`, `register_platform` |
| `atom/plugin/vllm/register.py` | `register_platform()`, `register_model()`, model registry overrides, attention patches |
| `atom/plugin/vllm/platform.py` | `ATOMPlatform` — `RocmPlatform` subclass selecting ATOM attention backends |
| `atom/plugin/vllm/model_wrapper.py` | `ATOMModelBase`, `ATOMForCausalLM`, `ATOMMoEForCausalLM` — vLLM model wrappers |
| `atom/plugin/vllm/mla_patch.py` | Patches vLLM `MLAAttention.process_weights_after_loading` and `forward_impl` |
| `pyproject.toml` | Entry point declarations for `vllm.platform_plugins` and `vllm.general_plugins` |
