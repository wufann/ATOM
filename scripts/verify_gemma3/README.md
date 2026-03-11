# Verify Gemma 3 support in ATOM

Scripts to verify that [Gemma 3](https://huggingface.co/google/gemma-3-1b-it) text and (when implemented) vision-language models run correctly on ATOM.

## Prerequisites

- ATOM installed and runnable (see repo root `README.md` and `docs/`).
- For real weights: HuggingFace token and `huggingface-cli login` if the model is gated.
- ROCm/AMD GPU environment.

## Current ATOM support

Gemma 3 text-only models use:

- **HuggingFace architecture:** `Gemma3ForCausalLM`
- **Model type:** `gemma3_text`

ATOM’s model registry is in `atom/model_engine/model_runner.py` (`support_model_arch_dict`). **Until `Gemma3ForCausalLM` is added there and a corresponding model implementation exists in `atom/models/`, the verification script will exit with a clear error** explaining that Gemma 3 is not yet supported.

## Usage

From the ATOM repository root:

```bash
# Default model: google/gemma-3-1b-it (will fail until Gemma 3 is supported)
python scripts/verify_gemma3/verify_gemma3_text.py

# Skip loading weights (dummy) – still requires architecture support
python scripts/verify_gemma3/verify_gemma3_text.py --load_dummy

# Another Gemma 3 text model
python scripts/verify_gemma3/verify_gemma3_text.py --model google/gemma-3-4b-it

# Limit length and temperature
python scripts/verify_gemma3/verify_gemma3_text.py --max-tokens 16 --temperature 0.2
```

All engine arguments from `EngineArgs` are available (e.g. `--tensor-parallel-size`, `--max-model-len`, `--enforce-eager`).

## Adding Gemma 3 support to ATOM

1. Implement the model (e.g. `atom/models/gemma3.py`) following existing patterns (e.g. `atom/models/llama.py`, `atom/models/gpt_oss.py`).
2. Register it in `atom/model_engine/model_runner.py`:

   ```python
   support_model_arch_dict = {
       ...
       "Gemma3ForCausalLM": "atom.models.gemma3.Gemma3ForCausalLM",
   }
   ```

3. Add weight loading and config handling as in the [Model Support Guide](../../docs/model_support_guide.md).
4. Run:

   ```bash
   python scripts/verify_gemma3/verify_gemma3_text.py
   ```

## Gemma 3 multi-modal (VLM) support check

To check whether ATOM supports Gemma 3 vision-language models (e.g. `Gemma3ForConditionalGeneration`):

```bash
# Check registry only (no HuggingFace access)
python scripts/verify_gemma3/check_gemma3_multimodal_support.py --skip-config

# Check registry and a specific model (requires HF token for gated models)
python scripts/verify_gemma3/check_gemma3_multimodal_support.py --model google/gemma-3-4b-it
```

The script reports whether `Gemma3ForConditionalGeneration` is in ATOM’s registry and, if a model is loaded, whether the config indicates vision/multimodal. Until ATOM adds VLM support, the script exits with a clear message on what to implement.

## Gemma 3n and VLM

- **Gemma 3n** (e.g. `google/gemma-3n-E2B-it`) supports text and multimodal (image/audio); architecture may differ.
- **Gemma 3 VLM** uses `Gemma3ForConditionalGeneration` and a vision encoder (e.g. SigLip). ATOM does not yet support this architecture.
