window.BENCHMARK_DATA = {
  "lastUpdate": 1775219707549,
  "repoUrl": "https://github.com/ROCm/ATOM",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "thiago.pereirarocha@amd.com",
            "name": "Thiago Pereira Rocha",
            "username": "thpereir"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b3128fb32e7a94fe3d9e413a7be3a78e201e86f1",
          "message": "Fix GLM-5-FP8 Indexer.weights_proj GEMM crash via model-declared exclude name mapping (#451)\n\nGLM-5's HF quant config lists `indexers_proj` in modules_to_not_convert, but\nATOM's actual module path is `model.layers.N.self_attn.indexer.weights_proj`.\nThe exclude list entries are fully-qualified (e.g.\n`model.layers.0.self_attn.indexers_proj`), so the translation must use\nstr.replace to do substring substitution on each entry.\n\nFix:\n- Add `quant_exclude_name_mapping` to `remap_layer_name()` as a generic\n  mechanism for translating HF quant config exclude names to ATOM module paths.\n- `GlmMoeDsaForCausalLM` declares the mapping as a class attribute alongside\n  `packed_modules_mapping`, keeping the translation co-located with the model.\n- config.py iterates each exclude entry and applies str.replace for every\n  mapping pair, so `model.layers.0.self_attn.indexers_proj` becomes\n  `model.layers.0.self_attn.indexer.weights_proj` and is correctly matched by\n  _is_excluded()'s exact/prefix logic.\n- `model_runner.py` passes it through via `getattr(model_class, ...)`,\n  consistent with how `packed_modules_mapping` is already threaded.\n- Removes previous fix `quant_config=None` from `Indexer.weights_proj`.\n\nFuture models with HF-name/ATOM-path mismatches declare\n`quant_exclude_name_mapping` on their class so no model_type branches\nneeded in config.py.",
          "timestamp": "2026-04-01T11:08:01+08:00",
          "tree_id": "f29c6362bc26661618a12ad2bde72d718c1e9784",
          "url": "https://github.com/ROCm/ATOM/commit/b3128fb32e7a94fe3d9e413a7be3a78e201e86f1"
        },
        "date": 1775015173165,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM::DeepSeek-R1-0528 accuracy (GSM8K)",
            "value": 0.9447,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23829997346 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (GSM8K 3-shot flexible-extract) | strict-match: 0.9409 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528 MTP accuracy (GSM8K)",
            "value": 0.9439,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23829997346 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: Same base model as DeepSeek-R1-0528 FP8 | strict-match: 0.9393 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 accuracy (GSM8K)",
            "value": 0.9401,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23829997346 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9371 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 MTP accuracy (GSM8K)",
            "value": 0.9416,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23829997346 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.934 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::Llama-3.3-70B-Instruct-MXFP4-Preview accuracy (GSM8K)",
            "value": 0.9067,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23829997346 | Threshold: 0.88 | BaselineModel: meta-llama/Llama-3.3-70B-Instruct | BaselineNote: HF page inaccessible; needs CI measurement of baseline | strict-match: 0.6202 | fewshot: 3 | Model: /models/amd/Llama-3.3-70B-Instruct-MXFP4-Preview"
          },
          {
            "name": "ATOM::Meta-Llama-3-8B-Instruct accuracy (GSM8K)",
            "value": 0.743,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23829997346 | Threshold: 0.73 | BaselineModel: meta-llama/Meta-Llama-3-8B-Instruct | BaselineNote: HF reports 0.796 but 8-shot CoT; CI uses 3-shot, not comparable | strict-match: 0.746 | fewshot: 3 | Model: /models/meta-llama/Meta-Llama-3-8B-Instruct"
          },
          {
            "name": "ATOM::Qwen3-235B-A22B-Instruct-2507-FP8 accuracy (GSM8K)",
            "value": 0.8984,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23829997346 | Threshold: 0.87 | Baseline: 0.909 | BaselineModel: Qwen/Qwen3-235B-A22B-Instruct-2507 | BaselineNote: HF: amd/Qwen3-235B-A22B-Instruct-2507-MXFP4 card shows baseline=0.909 | strict-match: 0.8825 | fewshot: 3 | Model: /models/Qwen/Qwen3-235B-A22B-Instruct-2507-FP8"
          },
          {
            "name": "ATOM::Qwen3-Next-80B-A3B-Thinking accuracy (GSM8K)",
            "value": 0.696,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23829997346 | Threshold: 0.65 | BaselineModel: Qwen/Qwen3-Next-80B-A3B-Thinking | BaselineNote: No public GSM8K baseline; HF card has no GSM8K | strict-match: 0.7938 | fewshot: 3 | Model: /models/Qwen/Qwen3-Next-80B-A3B-Thinking"
          },
          {
            "name": "ATOM::gpt-oss-120b accuracy (GSM8K)",
            "value": 0.4344,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23829997346 | Threshold: 0.38 | BaselineModel: openai/gpt-oss-120b | BaselineNote: No public GSM8K baseline available | strict-match: 0.2555 | fewshot: 3 | Model: /models/openai/gpt-oss-120b"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Thiago Pereira Rocha",
            "username": "thpereir",
            "email": "thiago.pereirarocha@amd.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b3128fb32e7a94fe3d9e413a7be3a78e201e86f1",
          "message": "Fix GLM-5-FP8 Indexer.weights_proj GEMM crash via model-declared exclude name mapping (#451)\n\nGLM-5's HF quant config lists `indexers_proj` in modules_to_not_convert, but\nATOM's actual module path is `model.layers.N.self_attn.indexer.weights_proj`.\nThe exclude list entries are fully-qualified (e.g.\n`model.layers.0.self_attn.indexers_proj`), so the translation must use\nstr.replace to do substring substitution on each entry.\n\nFix:\n- Add `quant_exclude_name_mapping` to `remap_layer_name()` as a generic\n  mechanism for translating HF quant config exclude names to ATOM module paths.\n- `GlmMoeDsaForCausalLM` declares the mapping as a class attribute alongside\n  `packed_modules_mapping`, keeping the translation co-located with the model.\n- config.py iterates each exclude entry and applies str.replace for every\n  mapping pair, so `model.layers.0.self_attn.indexers_proj` becomes\n  `model.layers.0.self_attn.indexer.weights_proj` and is correctly matched by\n  _is_excluded()'s exact/prefix logic.\n- `model_runner.py` passes it through via `getattr(model_class, ...)`,\n  consistent with how `packed_modules_mapping` is already threaded.\n- Removes previous fix `quant_config=None` from `Indexer.weights_proj`.\n\nFuture models with HF-name/ATOM-path mismatches declare\n`quant_exclude_name_mapping` on their class so no model_type branches\nneeded in config.py.",
          "timestamp": "2026-04-01T03:08:01Z",
          "url": "https://github.com/ROCm/ATOM/commit/b3128fb32e7a94fe3d9e413a7be3a78e201e86f1"
        },
        "date": 1775022448204,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "MiniMax-M2.5 1024/1024 c=128 throughput (tok/s)",
            "value": 3757.05,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=128 Total Tput (tok/s)",
            "value": 7522.35,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=128 TTFT (ms)",
            "value": 314.14,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=128 TPOT (ms)",
            "value": 32.93,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=128 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=16 throughput (tok/s)",
            "value": 1097.32,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=16 Total Tput (tok/s)",
            "value": 2206.32,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=16 TTFT (ms)",
            "value": 120.9,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=16 TPOT (ms)",
            "value": 14.15,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=16 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=2 throughput (tok/s)",
            "value": 216.13,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=2 Total Tput (tok/s)",
            "value": 428.3,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=2 TTFT (ms)",
            "value": 71.79,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=2 TPOT (ms)",
            "value": 9.16,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=2 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=256 throughput (tok/s)",
            "value": 5498.44,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=256 Total Tput (tok/s)",
            "value": 10991.57,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=256 TTFT (ms)",
            "value": 569.71,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=256 TPOT (ms)",
            "value": 44.9,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=256 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=32 throughput (tok/s)",
            "value": 1735.6,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=32 Total Tput (tok/s)",
            "value": 3465.72,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=32 TTFT (ms)",
            "value": 155.82,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=32 TPOT (ms)",
            "value": 17.83,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=32 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=4 throughput (tok/s)",
            "value": 396.28,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=4 Total Tput (tok/s)",
            "value": 796.43,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=4 TTFT (ms)",
            "value": 84.5,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=4 TPOT (ms)",
            "value": 9.69,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=4 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=64 throughput (tok/s)",
            "value": 2393.79,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=64 Total Tput (tok/s)",
            "value": 4788.65,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=64 TTFT (ms)",
            "value": 208.54,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=64 TPOT (ms)",
            "value": 25.87,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=64 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=8 throughput (tok/s)",
            "value": 658.92,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=8 Total Tput (tok/s)",
            "value": 1312.97,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=8 TTFT (ms)",
            "value": 100.51,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=8 TPOT (ms)",
            "value": 11.79,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=8 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=128 throughput (tok/s)",
            "value": 4550.05,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=128 Total Tput (tok/s)",
            "value": 9110.1,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=128 TTFT (ms)",
            "value": 274.95,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=128 TPOT (ms)",
            "value": 27.05,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=16 throughput (tok/s)",
            "value": 1050.35,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=16 Total Tput (tok/s)",
            "value": 2111.87,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=16 TTFT (ms)",
            "value": 113.2,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=16 TPOT (ms)",
            "value": 14.83,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=2 throughput (tok/s)",
            "value": 192.95,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=2 Total Tput (tok/s)",
            "value": 382.37,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=2 TTFT (ms)",
            "value": 69.03,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=2 TPOT (ms)",
            "value": 10.27,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=2 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=256 throughput (tok/s)",
            "value": 6419.93,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=256 Total Tput (tok/s)",
            "value": 12833.66,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=256 TTFT (ms)",
            "value": 501.5,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=256 TPOT (ms)",
            "value": 38.37,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=256 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=32 throughput (tok/s)",
            "value": 1763.64,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=32 Total Tput (tok/s)",
            "value": 3521.71,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=32 TTFT (ms)",
            "value": 138.38,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=32 TPOT (ms)",
            "value": 17.57,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=4 throughput (tok/s)",
            "value": 357.74,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=4 Total Tput (tok/s)",
            "value": 718.98,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=4 TTFT (ms)",
            "value": 82.86,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=4 TPOT (ms)",
            "value": 10.74,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=64 throughput (tok/s)",
            "value": 2971.21,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=64 Total Tput (tok/s)",
            "value": 5943.75,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=64 TTFT (ms)",
            "value": 198.94,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=64 TPOT (ms)",
            "value": 20.71,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=8 throughput (tok/s)",
            "value": 674.78,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=8 Total Tput (tok/s)",
            "value": 1344.58,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=8 TTFT (ms)",
            "value": 94.88,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=8 TPOT (ms)",
            "value": 11.49,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=8 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=128 throughput (tok/s)",
            "value": 5294.37,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=128 Total Tput (tok/s)",
            "value": 10616.85,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=128 TTFT (ms)",
            "value": 343.37,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=128 TPOT (ms)",
            "value": 23.1,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=16 throughput (tok/s)",
            "value": 1586.72,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=16 Total Tput (tok/s)",
            "value": 3195.58,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=16 TTFT (ms)",
            "value": 139.22,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=16 TPOT (ms)",
            "value": 9.55,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=256 throughput (tok/s)",
            "value": 7395.64,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=256 Total Tput (tok/s)",
            "value": 14807.3,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=256 TTFT (ms)",
            "value": 550.92,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=256 TPOT (ms)",
            "value": 33.04,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=256 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=32 throughput (tok/s)",
            "value": 2549.31,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=32 Total Tput (tok/s)",
            "value": 5098.79,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=32 TTFT (ms)",
            "value": 171.76,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=32 TPOT (ms)",
            "value": 11.92,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=4 throughput (tok/s)",
            "value": 592.23,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=4 Total Tput (tok/s)",
            "value": 1192.14,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=4 TTFT (ms)",
            "value": 114.34,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=4 TPOT (ms)",
            "value": 6.36,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=64 throughput (tok/s)",
            "value": 3609.01,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=64 Total Tput (tok/s)",
            "value": 7230.85,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=64 TTFT (ms)",
            "value": 240.75,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=64 TPOT (ms)",
            "value": 16.92,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=8 throughput (tok/s)",
            "value": 992.67,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=8 Total Tput (tok/s)",
            "value": 1980.86,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=8 TTFT (ms)",
            "value": 109.94,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=8 TPOT (ms)",
            "value": 7.7,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=8 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=128 throughput (tok/s)",
            "value": 5480.07,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=128 Total Tput (tok/s)",
            "value": 10972.18,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=128 TTFT (ms)",
            "value": 279.47,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=128 TPOT (ms)",
            "value": 22.45,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=16 throughput (tok/s)",
            "value": 1409.44,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=16 Total Tput (tok/s)",
            "value": 2833.88,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=16 TTFT (ms)",
            "value": 181.49,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=16 TPOT (ms)",
            "value": 10.91,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=2 throughput (tok/s)",
            "value": 262.37,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=2 Total Tput (tok/s)",
            "value": 519.94,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=2 TTFT (ms)",
            "value": 104.19,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=2 TPOT (ms)",
            "value": 7.49,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=2 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=256 throughput (tok/s)",
            "value": 7787.58,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=256 Total Tput (tok/s)",
            "value": 15567.62,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=256 TTFT (ms)",
            "value": 439.01,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=256 TPOT (ms)",
            "value": 31.57,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=256 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=32 throughput (tok/s)",
            "value": 2213.23,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=32 Total Tput (tok/s)",
            "value": 4419.47,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=32 TTFT (ms)",
            "value": 317.68,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=32 TPOT (ms)",
            "value": 13.78,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=4 throughput (tok/s)",
            "value": 462.2,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=4 Total Tput (tok/s)",
            "value": 928.93,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=4 TTFT (ms)",
            "value": 75.08,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=4 TPOT (ms)",
            "value": 8.31,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=64 throughput (tok/s)",
            "value": 3521.34,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=64 Total Tput (tok/s)",
            "value": 7044.28,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=64 TTFT (ms)",
            "value": 196.63,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=64 TPOT (ms)",
            "value": 17.48,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=8 throughput (tok/s)",
            "value": 823.11,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=8 Total Tput (tok/s)",
            "value": 1640.15,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=8 TTFT (ms)",
            "value": 104.65,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=8 TPOT (ms)",
            "value": 9.41,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=8 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=128 throughput (tok/s)",
            "value": 6654.78,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=128 Total Tput (tok/s)",
            "value": 13345.05,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=128 TTFT (ms)",
            "value": 329.06,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=128 TPOT (ms)",
            "value": 18.32,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=16 throughput (tok/s)",
            "value": 2071.93,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=16 Total Tput (tok/s)",
            "value": 4171.89,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=16 TTFT (ms)",
            "value": 138.09,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=16 TPOT (ms)",
            "value": 7.38,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=256 throughput (tok/s)",
            "value": 8518.35,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=256 Total Tput (tok/s)",
            "value": 17054.38,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=256 TTFT (ms)",
            "value": 476.52,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=256 TPOT (ms)",
            "value": 28.81,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=256 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=32 throughput (tok/s)",
            "value": 2880.74,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=32 Total Tput (tok/s)",
            "value": 5760.89,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=32 TTFT (ms)",
            "value": 171.11,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=32 TPOT (ms)",
            "value": 10.58,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=4 throughput (tok/s)",
            "value": 745.41,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=4 Total Tput (tok/s)",
            "value": 1500.52,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=4 TTFT (ms)",
            "value": 131.12,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=4 TPOT (ms)",
            "value": 4.99,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=64 throughput (tok/s)",
            "value": 4758.92,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=64 Total Tput (tok/s)",
            "value": 9535.24,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=64 TTFT (ms)",
            "value": 219.5,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=64 TPOT (ms)",
            "value": 12.76,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=8 throughput (tok/s)",
            "value": 1244.64,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=8 Total Tput (tok/s)",
            "value": 2484.15,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=8 TTFT (ms)",
            "value": 130.35,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=8 TPOT (ms)",
            "value": 6.05,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=8 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=128 throughput (tok/s)",
            "value": 2979.74,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=128 Total Tput (tok/s)",
            "value": 5966.02,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=128 TTFT (ms)",
            "value": 432.35,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=128 TPOT (ms)",
            "value": 41.3,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=16 throughput (tok/s)",
            "value": 697.24,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=16 Total Tput (tok/s)",
            "value": 1401.89,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=16 TTFT (ms)",
            "value": 165.63,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=16 TPOT (ms)",
            "value": 22.24,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=2 throughput (tok/s)",
            "value": 112.35,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=2 Total Tput (tok/s)",
            "value": 222.65,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=2 TTFT (ms)",
            "value": 115.73,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=2 TPOT (ms)",
            "value": 17.64,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=2 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=256 throughput (tok/s)",
            "value": 4203.33,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=256 Total Tput (tok/s)",
            "value": 8402.6,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=256 TTFT (ms)",
            "value": 630.41,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=256 TPOT (ms)",
            "value": 58.78,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=256 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=32 throughput (tok/s)",
            "value": 1160.1,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=32 Total Tput (tok/s)",
            "value": 2316.53,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=32 TTFT (ms)",
            "value": 205.95,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=32 TPOT (ms)",
            "value": 26.63,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=4 throughput (tok/s)",
            "value": 203.51,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=4 Total Tput (tok/s)",
            "value": 409.01,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=4 TTFT (ms)",
            "value": 126.8,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=4 TPOT (ms)",
            "value": 18.92,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=64 throughput (tok/s)",
            "value": 1875.27,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=64 Total Tput (tok/s)",
            "value": 3751.39,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=64 TTFT (ms)",
            "value": 264.76,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=64 TPOT (ms)",
            "value": 32.82,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=8 throughput (tok/s)",
            "value": 384,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=8 Total Tput (tok/s)",
            "value": 765.17,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=8 TTFT (ms)",
            "value": 141.02,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=8 TPOT (ms)",
            "value": 20.23,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=8 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=128 throughput (tok/s)",
            "value": 8809.93,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=128 Total Tput (tok/s)",
            "value": 17639.21,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=128 TTFT (ms)",
            "value": 241.64,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=128 TPOT (ms)",
            "value": 13.88,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=128 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=16 throughput (tok/s)",
            "value": 2428.3,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=16 Total Tput (tok/s)",
            "value": 4882.44,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=16 TTFT (ms)",
            "value": 59.39,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=16 TPOT (ms)",
            "value": 6.4,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=16 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=2 throughput (tok/s)",
            "value": 528.33,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=2 Total Tput (tok/s)",
            "value": 1047,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=2 TTFT (ms)",
            "value": 43.29,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=2 TPOT (ms)",
            "value": 3.73,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=2 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=256 throughput (tok/s)",
            "value": 12512.11,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=256 Total Tput (tok/s)",
            "value": 25012.12,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=256 TTFT (ms)",
            "value": 283.48,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=256 TPOT (ms)",
            "value": 19.76,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=256 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=32 throughput (tok/s)",
            "value": 3853.62,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=32 Total Tput (tok/s)",
            "value": 7695.05,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=32 TTFT (ms)",
            "value": 78.52,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=32 TPOT (ms)",
            "value": 8.05,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=32 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=4 throughput (tok/s)",
            "value": 932.53,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=4 Total Tput (tok/s)",
            "value": 1874.19,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=4 TTFT (ms)",
            "value": 44.47,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=4 TPOT (ms)",
            "value": 4.11,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=4 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=64 throughput (tok/s)",
            "value": 5980.56,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=64 Total Tput (tok/s)",
            "value": 11963.82,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=64 TTFT (ms)",
            "value": 87.92,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=64 TPOT (ms)",
            "value": 10.33,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=64 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=8 throughput (tok/s)",
            "value": 1530.99,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=8 Total Tput (tok/s)",
            "value": 3050.67,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=8 TTFT (ms)",
            "value": 48.61,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=8 TPOT (ms)",
            "value": 5.07,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=8 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=128 throughput (tok/s)",
            "value": 3245.65,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=128 Total Tput (tok/s)",
            "value": 6498.43,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=128 TTFT (ms)",
            "value": 456.06,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=128 TPOT (ms)",
            "value": 37.95,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=128 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=16 throughput (tok/s)",
            "value": 915.67,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=16 Total Tput (tok/s)",
            "value": 1841.09,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=16 TTFT (ms)",
            "value": 141,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=16 TPOT (ms)",
            "value": 16.97,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=16 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=2 throughput (tok/s)",
            "value": 183.85,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=2 Total Tput (tok/s)",
            "value": 364.35,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=2 TTFT (ms)",
            "value": 112.4,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=2 TPOT (ms)",
            "value": 10.73,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=2 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=256 throughput (tok/s)",
            "value": 4475.71,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=256 Total Tput (tok/s)",
            "value": 8947.1,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=256 TTFT (ms)",
            "value": 637.86,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=256 TPOT (ms)",
            "value": 55.25,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=256 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=32 throughput (tok/s)",
            "value": 1456.89,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=32 Total Tput (tok/s)",
            "value": 2909.17,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=32 TTFT (ms)",
            "value": 180.56,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=32 TPOT (ms)",
            "value": 21.26,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=32 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=4 throughput (tok/s)",
            "value": 335.47,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=4 Total Tput (tok/s)",
            "value": 674.22,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=4 TTFT (ms)",
            "value": 101.57,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=4 TPOT (ms)",
            "value": 11.44,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=4 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=64 throughput (tok/s)",
            "value": 2173.39,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=64 Total Tput (tok/s)",
            "value": 4347.77,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=64 TTFT (ms)",
            "value": 269.02,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=64 TPOT (ms)",
            "value": 28.42,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=64 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=8 throughput (tok/s)",
            "value": 591.11,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=8 Total Tput (tok/s)",
            "value": 1177.85,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=8 TTFT (ms)",
            "value": 123.1,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=8 TPOT (ms)",
            "value": 13.12,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23831181566 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=8 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ygan@amd.com",
            "name": "Pleaplusone",
            "username": "ganyi1996ppo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3bb7684ab41473ba4418e8cfc797eef66a11c5aa",
          "message": "[OOT Plugin] Fix qwen3.5 fp8 functionality and accuracy issue (#448)\n\n* fix qwen3.5 fp8 load and accuracy issue\n\nSigned-off-by: ganyi <ygan@amd.com>\n\n* black\n\nSigned-off-by: ganyi <ygan@amd.com>\n\n* ci fix\n\nSigned-off-by: ganyi <ygan@amd.com>\n\n* fix mutimodal\n\nSigned-off-by: ganyi <ygan@amd.com>\n\n* Apply suggestions from code review\n\nCo-authored-by: Copilot <175728472+Copilot@users.noreply.github.com>\n\n* update accuracy threshold for qwen3.5 35B fp8\n\nSigned-off-by: ganyi <ygan@amd.com>\n\n---------\n\nSigned-off-by: ganyi <ygan@amd.com>\nCo-authored-by: Copilot <175728472+Copilot@users.noreply.github.com>",
          "timestamp": "2026-04-01T15:40:35+08:00",
          "tree_id": "f1b642ace6d7e6ff1339409cd1fd39815aab146e",
          "url": "https://github.com/ROCm/ATOM/commit/3bb7684ab41473ba4418e8cfc797eef66a11c5aa"
        },
        "date": 1775053250952,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM::DeepSeek-R1-0528 accuracy (GSM8K)",
            "value": 0.9462,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23837633546 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (GSM8K 3-shot flexible-extract) | strict-match: 0.9462 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528 MTP accuracy (GSM8K)",
            "value": 0.9409,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23837633546 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: Same base model as DeepSeek-R1-0528 FP8 | strict-match: 0.9386 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 accuracy (GSM8K)",
            "value": 0.9424,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23837633546 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9363 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 MTP accuracy (GSM8K)",
            "value": 0.9356,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23837633546 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9295 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::Qwen3-235B-A22B-Instruct-2507-FP8 accuracy (GSM8K)",
            "value": 0.8923,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23837633546 | Threshold: 0.87 | Baseline: 0.909 | BaselineModel: Qwen/Qwen3-235B-A22B-Instruct-2507 | BaselineNote: HF: amd/Qwen3-235B-A22B-Instruct-2507-MXFP4 card shows baseline=0.909 | strict-match: 0.8795 | fewshot: 3 | Model: /models/Qwen/Qwen3-235B-A22B-Instruct-2507-FP8"
          },
          {
            "name": "ATOM::Qwen3-Next-80B-A3B-Thinking accuracy (GSM8K)",
            "value": 0.6967,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23837633546 | Threshold: 0.65 | BaselineModel: Qwen/Qwen3-Next-80B-A3B-Thinking | BaselineNote: No public GSM8K baseline; HF card has no GSM8K | strict-match: 0.7983 | fewshot: 3 | Model: /models/Qwen/Qwen3-Next-80B-A3B-Thinking"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "1f87149c7e1593664c24fe01ab1716c3f3b058bb",
          "message": "make up missing check name for Qwen3.5 OOT CI\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-01T11:55:46Z",
          "url": "https://github.com/ROCm/ATOM/commit/1f87149c7e1593664c24fe01ab1716c3f3b058bb"
        },
        "date": 1775055123658,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/1024 c=16 throughput (tok/s)",
            "value": 1108.78,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/1024 c=16 Total Tput (tok/s)",
            "value": 2229.37,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/1024 c=16 TTFT (ms)",
            "value": 143.61,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/1024 c=16 TPOT (ms)",
            "value": 13.95,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/1024 c=32 throughput (tok/s)",
            "value": 1790.67,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/1024 c=32 Total Tput (tok/s)",
            "value": 3575.69,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/1024 c=32 TTFT (ms)",
            "value": 151.73,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/1024 c=32 TPOT (ms)",
            "value": 17.27,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/1024 c=4 throughput (tok/s)",
            "value": 357.53,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/1024 c=4 Total Tput (tok/s)",
            "value": 718.55,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/1024 c=4 TTFT (ms)",
            "value": 126.18,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/1024 c=4 TPOT (ms)",
            "value": 10.7,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/1024 c=64 throughput (tok/s)",
            "value": 2645.08,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/1024 c=64 Total Tput (tok/s)",
            "value": 5291.36,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/1024 c=64 TTFT (ms)",
            "value": 213.17,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/1024 c=64 TPOT (ms)",
            "value": 23.34,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/1024 c=8 throughput (tok/s)",
            "value": 655.85,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/1024 c=8 Total Tput (tok/s)",
            "value": 1306.86,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/1024 c=8 TTFT (ms)",
            "value": 125.51,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/1024 c=8 TPOT (ms)",
            "value": 11.79,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/1024 c=8 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/8192 c=16 throughput (tok/s)",
            "value": 1149.41,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/8192 c=16 Total Tput (tok/s)",
            "value": 1293.62,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/8192 c=16 TTFT (ms)",
            "value": 134.5,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/8192 c=16 TPOT (ms)",
            "value": 13.53,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/8192 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/8192 c=32 throughput (tok/s)",
            "value": 1913.6,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/8192 c=32 Total Tput (tok/s)",
            "value": 2151.2,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/8192 c=32 TTFT (ms)",
            "value": 165.33,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/8192 c=32 TPOT (ms)",
            "value": 16.29,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/8192 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/8192 c=4 throughput (tok/s)",
            "value": 364.78,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/8192 c=4 Total Tput (tok/s)",
            "value": 411.33,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/8192 c=4 TTFT (ms)",
            "value": 127.12,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/8192 c=4 TPOT (ms)",
            "value": 10.77,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/8192 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/8192 c=64 throughput (tok/s)",
            "value": 2889.99,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/8192 c=64 Total Tput (tok/s)",
            "value": 3250.83,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/8192 c=64 TTFT (ms)",
            "value": 280.12,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/8192 c=64 TPOT (ms)",
            "value": 21.49,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/8192 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/8192 c=8 throughput (tok/s)",
            "value": 663.51,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/8192 c=8 Total Tput (tok/s)",
            "value": 746.67,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/8192 c=8 TTFT (ms)",
            "value": 144.69,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/8192 c=8 TPOT (ms)",
            "value": 11.71,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 1024/8192 c=8 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 8192/1024 c=16 throughput (tok/s)",
            "value": 969.58,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 8192/1024 c=16 Total Tput (tok/s)",
            "value": 8750.18,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 8192/1024 c=16 TTFT (ms)",
            "value": 377.1,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 8192/1024 c=16 TPOT (ms)",
            "value": 15.56,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 8192/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 8192/1024 c=32 throughput (tok/s)",
            "value": 1467.85,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 8192/1024 c=32 Total Tput (tok/s)",
            "value": 13125.96,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 8192/1024 c=32 TTFT (ms)",
            "value": 547.47,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 8192/1024 c=32 TPOT (ms)",
            "value": 20.62,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 8192/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 8192/1024 c=4 throughput (tok/s)",
            "value": 337.76,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 8192/1024 c=4 Total Tput (tok/s)",
            "value": 3036.23,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 8192/1024 c=4 TTFT (ms)",
            "value": 209.37,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 8192/1024 c=4 TPOT (ms)",
            "value": 11.32,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 8192/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 8192/1024 c=64 throughput (tok/s)",
            "value": 2008.8,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 8192/1024 c=64 Total Tput (tok/s)",
            "value": 18106.89,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 8192/1024 c=64 TTFT (ms)",
            "value": 848.96,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 8192/1024 c=64 TPOT (ms)",
            "value": 30.32,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 8192/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 8192/1024 c=8 throughput (tok/s)",
            "value": 604.77,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 8192/1024 c=8 Total Tput (tok/s)",
            "value": 5379.67,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 8192/1024 c=8 TTFT (ms)",
            "value": 294.66,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 8192/1024 c=8 TPOT (ms)",
            "value": 12.67,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4 8192/1024 c=8 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=16 throughput (tok/s)",
            "value": 1524.06,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=16 Total Tput (tok/s)",
            "value": 3064.34,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=16 TTFT (ms)",
            "value": 116.39,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=16 TPOT (ms)",
            "value": 10.13,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=32 throughput (tok/s)",
            "value": 1024.1,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=32 Total Tput (tok/s)",
            "value": 2044.96,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=32 TTFT (ms)",
            "value": 1758.63,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=32 TPOT (ms)",
            "value": 28.8,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=4 throughput (tok/s)",
            "value": 450.19,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=4 Total Tput (tok/s)",
            "value": 904.78,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=4 TTFT (ms)",
            "value": 110.15,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=4 TPOT (ms)",
            "value": 8.49,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=64 throughput (tok/s)",
            "value": 3897.52,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=64 Total Tput (tok/s)",
            "value": 7796.79,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=64 TTFT (ms)",
            "value": 161.63,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=64 TPOT (ms)",
            "value": 15.78,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=8 throughput (tok/s)",
            "value": 842.61,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=8 Total Tput (tok/s)",
            "value": 1679,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=8 TTFT (ms)",
            "value": 107.38,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=8 TPOT (ms)",
            "value": 9.17,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=8 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=16 throughput (tok/s)",
            "value": 1309.47,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=16 Total Tput (tok/s)",
            "value": 11817.68,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=16 TTFT (ms)",
            "value": 331.83,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=16 TPOT (ms)",
            "value": 11.43,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=32 throughput (tok/s)",
            "value": 2063.98,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=32 Total Tput (tok/s)",
            "value": 18456.74,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=32 TTFT (ms)",
            "value": 467.01,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=32 TPOT (ms)",
            "value": 14.55,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=4 throughput (tok/s)",
            "value": 423.16,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=4 Total Tput (tok/s)",
            "value": 3803.95,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=4 TTFT (ms)",
            "value": 212.78,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=4 TPOT (ms)",
            "value": 9,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=64 throughput (tok/s)",
            "value": 1539.08,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=64 Total Tput (tok/s)",
            "value": 13872.96,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=64 TTFT (ms)",
            "value": 1008.04,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=64 TPOT (ms)",
            "value": 39.79,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=8 throughput (tok/s)",
            "value": 269.91,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=8 Total Tput (tok/s)",
            "value": 2400.96,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=8 TTFT (ms)",
            "value": 2495.47,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=8 TPOT (ms)",
            "value": 26.42,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=8 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=16 throughput (tok/s)",
            "value": 1572.16,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=16 Total Tput (tok/s)",
            "value": 3161.06,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=16 TTFT (ms)",
            "value": 99.96,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=16 TPOT (ms)",
            "value": 9.84,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=16 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=4 throughput (tok/s)",
            "value": 462.76,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=4 Total Tput (tok/s)",
            "value": 930.04,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=4 TTFT (ms)",
            "value": 104.11,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=4 TPOT (ms)",
            "value": 8.26,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=4 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=64 throughput (tok/s)",
            "value": 4011.58,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=64 Total Tput (tok/s)",
            "value": 8024.98,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=64 TTFT (ms)",
            "value": 179.31,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=64 TPOT (ms)",
            "value": 15.31,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=64 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=16 throughput (tok/s)",
            "value": 1664.74,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=16 Total Tput (tok/s)",
            "value": 1873.6,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=16 TTFT (ms)",
            "value": 95.04,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=16 TPOT (ms)",
            "value": 9.33,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=16 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=32 throughput (tok/s)",
            "value": 2821.75,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=32 Total Tput (tok/s)",
            "value": 3172.1,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=32 TTFT (ms)",
            "value": 139.94,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=32 TPOT (ms)",
            "value": 11.04,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=32 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=4 throughput (tok/s)",
            "value": 497.11,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=4 Total Tput (tok/s)",
            "value": 560.55,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=4 TTFT (ms)",
            "value": 83.81,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=4 TPOT (ms)",
            "value": 7.9,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=4 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=64 throughput (tok/s)",
            "value": 4325.58,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=64 Total Tput (tok/s)",
            "value": 4865.67,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=64 TTFT (ms)",
            "value": 152.08,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=64 TPOT (ms)",
            "value": 14.35,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=64 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=8 throughput (tok/s)",
            "value": 896.63,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=8 Total Tput (tok/s)",
            "value": 1009.01,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=8 TTFT (ms)",
            "value": 111.71,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=8 TPOT (ms)",
            "value": 8.66,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=8 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=16 throughput (tok/s)",
            "value": 1279.98,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=16 Total Tput (tok/s)",
            "value": 11551.5,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=16 TTFT (ms)",
            "value": 379.44,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=16 TPOT (ms)",
            "value": 11.66,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=16 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=32 throughput (tok/s)",
            "value": 1959.02,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=32 Total Tput (tok/s)",
            "value": 17518.15,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=32 TTFT (ms)",
            "value": 487.67,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=32 TPOT (ms)",
            "value": 15.38,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=32 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=4 throughput (tok/s)",
            "value": 457.91,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=4 Total Tput (tok/s)",
            "value": 4116.33,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=4 TTFT (ms)",
            "value": 220.15,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=4 TPOT (ms)",
            "value": 8.28,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=4 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=64 throughput (tok/s)",
            "value": 2628.63,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=64 Total Tput (tok/s)",
            "value": 23693.85,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=64 TTFT (ms)",
            "value": 758.45,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=64 TPOT (ms)",
            "value": 23.1,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=64 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=8 throughput (tok/s)",
            "value": 794.8,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=8 Total Tput (tok/s)",
            "value": 7070.12,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=8 TTFT (ms)",
            "value": 304.51,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=8 TPOT (ms)",
            "value": 9.56,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=8 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=16 throughput (tok/s)",
            "value": 1875.81,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=16 Total Tput (tok/s)",
            "value": 3771.6,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=16 TTFT (ms)",
            "value": 96.07,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=16 TPOT (ms)",
            "value": 8.22,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=16 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=32 throughput (tok/s)",
            "value": 3326.37,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=32 Total Tput (tok/s)",
            "value": 6642.23,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=32 TTFT (ms)",
            "value": 102.96,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=32 TPOT (ms)",
            "value": 9.23,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=32 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=4 throughput (tok/s)",
            "value": 501.96,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=4 Total Tput (tok/s)",
            "value": 1008.82,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=4 TTFT (ms)",
            "value": 93.09,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=4 TPOT (ms)",
            "value": 7.62,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=4 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=64 throughput (tok/s)",
            "value": 5594.8,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=64 Total Tput (tok/s)",
            "value": 11192.12,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=64 TTFT (ms)",
            "value": 149.82,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=64 TPOT (ms)",
            "value": 10.89,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=64 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=8 throughput (tok/s)",
            "value": 974.44,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=8 Total Tput (tok/s)",
            "value": 1941.68,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=8 TTFT (ms)",
            "value": 90.49,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=8 TPOT (ms)",
            "value": 7.92,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=8 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=16 throughput (tok/s)",
            "value": 1951.66,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=16 Total Tput (tok/s)",
            "value": 2196.52,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=16 TTFT (ms)",
            "value": 88.3,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=16 TPOT (ms)",
            "value": 7.94,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=16 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=32 throughput (tok/s)",
            "value": 3640.1,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=32 Total Tput (tok/s)",
            "value": 4092.06,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=32 TTFT (ms)",
            "value": 111.33,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=32 TPOT (ms)",
            "value": 8.53,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=32 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=4 throughput (tok/s)",
            "value": 510.33,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=4 Total Tput (tok/s)",
            "value": 575.45,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=4 TTFT (ms)",
            "value": 92,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=4 TPOT (ms)",
            "value": 7.7,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=4 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=64 throughput (tok/s)",
            "value": 6625.63,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=64 Total Tput (tok/s)",
            "value": 7452.9,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=64 TTFT (ms)",
            "value": 151.38,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=64 TPOT (ms)",
            "value": 9.28,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=64 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=8 throughput (tok/s)",
            "value": 990.52,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=8 Total Tput (tok/s)",
            "value": 1114.67,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=8 TTFT (ms)",
            "value": 93.57,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=8 TPOT (ms)",
            "value": 7.83,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=8 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=16 throughput (tok/s)",
            "value": 1666.49,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=16 Total Tput (tok/s)",
            "value": 15039.63,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=16 TTFT (ms)",
            "value": 199.44,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=16 TPOT (ms)",
            "value": 9.01,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=16 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=32 throughput (tok/s)",
            "value": 2781.17,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=32 Total Tput (tok/s)",
            "value": 24870.12,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=32 TTFT (ms)",
            "value": 338.64,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=32 TPOT (ms)",
            "value": 10.75,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=32 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=64 throughput (tok/s)",
            "value": 4419.1,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=64 Total Tput (tok/s)",
            "value": 39832.82,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=64 TTFT (ms)",
            "value": 450.19,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=64 TPOT (ms)",
            "value": 13.64,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=64 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=8 throughput (tok/s)",
            "value": 911.71,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=8 Total Tput (tok/s)",
            "value": 8110.07,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=8 TTFT (ms)",
            "value": 178.67,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=8 TPOT (ms)",
            "value": 8.42,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23842073958 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=8 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ygan@amd.com",
            "name": "Pleaplusone",
            "username": "ganyi1996ppo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c7737c061dfa86f60941dd64b2e9533553e816cc",
          "message": "[OOT][Recipe] Update qwen3next recipe for performance measturement (#466)\n\n* update qwen3next recipe for performance measturement\n\nSigned-off-by: ganyi <pleaplusone.gy@gmail.com>",
          "timestamp": "2026-04-01T22:09:43+08:00",
          "tree_id": "98a1c69cfab7679574c22e05afdc92ec99de3288",
          "url": "https://github.com/ROCm/ATOM/commit/c7737c061dfa86f60941dd64b2e9533553e816cc"
        },
        "date": 1775075066665,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM::DeepSeek-R1-0528 accuracy (GSM8K)",
            "value": 0.9477,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23852938521 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (GSM8K 3-shot flexible-extract) | strict-match: 0.9447 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528 MTP accuracy (GSM8K)",
            "value": 0.9469,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23852938521 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: Same base model as DeepSeek-R1-0528 FP8 | strict-match: 0.9431 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 accuracy (GSM8K)",
            "value": 0.9371,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23852938521 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.931 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 MTP accuracy (GSM8K)",
            "value": 0.9371,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23852938521 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9325 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::Qwen3-235B-A22B-Instruct-2507-FP8 accuracy (GSM8K)",
            "value": 0.8946,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23852938521 | Threshold: 0.87 | Baseline: 0.909 | BaselineModel: Qwen/Qwen3-235B-A22B-Instruct-2507 | BaselineNote: HF: amd/Qwen3-235B-A22B-Instruct-2507-MXFP4 card shows baseline=0.909 | strict-match: 0.8764 | fewshot: 3 | Model: /models/Qwen/Qwen3-235B-A22B-Instruct-2507-FP8"
          },
          {
            "name": "ATOM::Qwen3-Next-80B-A3B-Thinking accuracy (GSM8K)",
            "value": 0.6952,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23852938521 | Threshold: 0.65 | BaselineModel: Qwen/Qwen3-Next-80B-A3B-Thinking | BaselineNote: No public GSM8K baseline; HF card has no GSM8K | strict-match: 0.7915 | fewshot: 3 | Model: /models/Qwen/Qwen3-Next-80B-A3B-Thinking"
          },
          {
            "name": "ATOM::gpt-oss-120b (2 GPUs) accuracy (GSM8K)",
            "value": 0.4109,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23852938521 | Threshold: 0.38 | BaselineModel: openai/gpt-oss-120b | BaselineNote: No public GSM8K baseline available | strict-match: 0.2305 | fewshot: 3 | Model: /models/openai/gpt-oss-120b"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Li",
            "username": "ChuanLi1101",
            "email": "chuali@amd.com"
          },
          "committer": {
            "name": "Li",
            "username": "ChuanLi1101",
            "email": "chuali@amd.com"
          },
          "id": "760a619189c5ea6cfc7c2a93b167d1328470f212",
          "message": "add kernel comparison dashboard (ATOM OOT vs vLLM v0.18)\n\nMade-with: Cursor",
          "timestamp": "2026-04-01T19:24:19Z",
          "url": "https://github.com/ROCm/ATOM/commit/760a619189c5ea6cfc7c2a93b167d1328470f212"
        },
        "date": 1775077057500,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "MiniMax-M2.5 1024/1024 c=1 throughput (tok/s)",
            "value": 113.87,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=1 Total Tput (tok/s)",
            "value": 226.94,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=1 TTFT (ms)",
            "value": 74.33,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=1 TPOT (ms)",
            "value": 8.71,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=1 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=128 throughput (tok/s)",
            "value": 3762.57,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=128 Total Tput (tok/s)",
            "value": 7533.41,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=128 TTFT (ms)",
            "value": 314.34,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=128 TPOT (ms)",
            "value": 32.85,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=128 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=16 throughput (tok/s)",
            "value": 1093.67,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=16 Total Tput (tok/s)",
            "value": 2198.99,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=16 TTFT (ms)",
            "value": 127.46,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=16 TPOT (ms)",
            "value": 14.19,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=16 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=2 throughput (tok/s)",
            "value": 221.77,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=2 Total Tput (tok/s)",
            "value": 439.48,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=2 TTFT (ms)",
            "value": 69.4,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=2 TPOT (ms)",
            "value": 8.92,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=2 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=256 throughput (tok/s)",
            "value": 5456.2,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=256 Total Tput (tok/s)",
            "value": 10907.13,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=256 TTFT (ms)",
            "value": 513.28,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=256 TPOT (ms)",
            "value": 45.27,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=256 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=32 throughput (tok/s)",
            "value": 1738.9,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=32 Total Tput (tok/s)",
            "value": 3472.31,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=32 TTFT (ms)",
            "value": 157.69,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=32 TPOT (ms)",
            "value": 17.8,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=32 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=4 throughput (tok/s)",
            "value": 398.7,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=4 Total Tput (tok/s)",
            "value": 801.31,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=4 TTFT (ms)",
            "value": 84.18,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=4 TPOT (ms)",
            "value": 9.63,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=4 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=64 throughput (tok/s)",
            "value": 2394.75,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=64 Total Tput (tok/s)",
            "value": 4790.59,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=64 TTFT (ms)",
            "value": 214.69,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=64 TPOT (ms)",
            "value": 25.86,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=64 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=8 throughput (tok/s)",
            "value": 655.8,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=8 Total Tput (tok/s)",
            "value": 1306.76,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=8 TTFT (ms)",
            "value": 102.91,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=8 TPOT (ms)",
            "value": 11.85,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=8 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=1 throughput (tok/s)",
            "value": 91,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=1 Total Tput (tok/s)",
            "value": 814.58,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=1 TTFT (ms)",
            "value": 302.49,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=1 TPOT (ms)",
            "value": 10.68,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=1 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=128 throughput (tok/s)",
            "value": 1857.52,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=128 Total Tput (tok/s)",
            "value": 16769.84,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=128 TTFT (ms)",
            "value": 1956.68,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=128 TPOT (ms)",
            "value": 65.79,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=128 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=16 throughput (tok/s)",
            "value": 803.79,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=16 Total Tput (tok/s)",
            "value": 7254.02,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=16 TTFT (ms)",
            "value": 507.17,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=16 TPOT (ms)",
            "value": 18.75,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=16 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=2 throughput (tok/s)",
            "value": 175.9,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=2 Total Tput (tok/s)",
            "value": 1567.5,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=2 TTFT (ms)",
            "value": 316.3,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=2 TPOT (ms)",
            "value": 11,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=2 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=256 throughput (tok/s)",
            "value": 2200.67,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=256 Total Tput (tok/s)",
            "value": 19800.35,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=256 TTFT (ms)",
            "value": 3549.79,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=256 TPOT (ms)",
            "value": 111.14,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=256 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=32 throughput (tok/s)",
            "value": 1175.94,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=32 Total Tput (tok/s)",
            "value": 10515.67,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=32 TTFT (ms)",
            "value": 730.31,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=32 TPOT (ms)",
            "value": 25.75,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=32 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=4 throughput (tok/s)",
            "value": 312.83,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=4 Total Tput (tok/s)",
            "value": 2812.15,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=4 TTFT (ms)",
            "value": 340.1,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=4 TPOT (ms)",
            "value": 12.11,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=4 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=64 throughput (tok/s)",
            "value": 1446.66,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=64 Total Tput (tok/s)",
            "value": 13039.91,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=64 TTFT (ms)",
            "value": 1189.42,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=64 TPOT (ms)",
            "value": 42.23,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=64 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=8 throughput (tok/s)",
            "value": 508.96,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=8 Total Tput (tok/s)",
            "value": 4527.44,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=8 TTFT (ms)",
            "value": 417.71,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=8 TPOT (ms)",
            "value": 15.01,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=8 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=1 throughput (tok/s)",
            "value": 99.58,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=1 Total Tput (tok/s)",
            "value": 198.46,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=1 TTFT (ms)",
            "value": 73.13,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=1 TPOT (ms)",
            "value": 9.97,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=1 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=128 throughput (tok/s)",
            "value": 4558.83,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=128 Total Tput (tok/s)",
            "value": 9127.67,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=128 TTFT (ms)",
            "value": 303.67,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=128 TPOT (ms)",
            "value": 27.01,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=16 throughput (tok/s)",
            "value": 1171.04,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=16 Total Tput (tok/s)",
            "value": 2354.54,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=16 TTFT (ms)",
            "value": 103.58,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=16 TPOT (ms)",
            "value": 13.25,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=2 throughput (tok/s)",
            "value": 194.11,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=2 Total Tput (tok/s)",
            "value": 384.67,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=2 TTFT (ms)",
            "value": 75.93,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=2 TPOT (ms)",
            "value": 10.2,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=2 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=256 throughput (tok/s)",
            "value": 6431.37,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=256 Total Tput (tok/s)",
            "value": 12856.52,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=256 TTFT (ms)",
            "value": 516.52,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=256 TPOT (ms)",
            "value": 38.28,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=256 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=32 throughput (tok/s)",
            "value": 1768.31,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=32 Total Tput (tok/s)",
            "value": 3531.02,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=32 TTFT (ms)",
            "value": 141.93,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=32 TPOT (ms)",
            "value": 17.52,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=4 throughput (tok/s)",
            "value": 357.7,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=4 Total Tput (tok/s)",
            "value": 718.9,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=4 TTFT (ms)",
            "value": 72.68,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=4 TPOT (ms)",
            "value": 10.75,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=64 throughput (tok/s)",
            "value": 2828.75,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=64 Total Tput (tok/s)",
            "value": 5658.77,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=64 TTFT (ms)",
            "value": 203.1,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=64 TPOT (ms)",
            "value": 21.76,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=8 throughput (tok/s)",
            "value": 676.28,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=8 Total Tput (tok/s)",
            "value": 1347.57,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=8 TTFT (ms)",
            "value": 96.58,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=8 TPOT (ms)",
            "value": 11.46,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=8 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=1 throughput (tok/s)",
            "value": 93.42,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=1 Total Tput (tok/s)",
            "value": 836.28,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=1 TTFT (ms)",
            "value": 247.06,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=1 TPOT (ms)",
            "value": 10.45,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=1 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=128 throughput (tok/s)",
            "value": 2261.24,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=128 Total Tput (tok/s)",
            "value": 20414.69,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=128 TTFT (ms)",
            "value": 1859.49,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=128 TPOT (ms)",
            "value": 53.75,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=16 throughput (tok/s)",
            "value": 906,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=16 Total Tput (tok/s)",
            "value": 8176.47,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=16 TTFT (ms)",
            "value": 460.52,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=16 TPOT (ms)",
            "value": 16.6,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=2 throughput (tok/s)",
            "value": 178.18,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=2 Total Tput (tok/s)",
            "value": 1587.82,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=2 TTFT (ms)",
            "value": 282.51,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=2 TPOT (ms)",
            "value": 10.9,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=2 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=256 throughput (tok/s)",
            "value": 2663.69,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=256 Total Tput (tok/s)",
            "value": 23966.27,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=256 TTFT (ms)",
            "value": 3340.25,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=256 TPOT (ms)",
            "value": 91.39,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=256 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=32 throughput (tok/s)",
            "value": 1274.56,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=32 Total Tput (tok/s)",
            "value": 11397.55,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=32 TTFT (ms)",
            "value": 646.49,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=32 TPOT (ms)",
            "value": 23.79,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=4 throughput (tok/s)",
            "value": 316.25,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=4 Total Tput (tok/s)",
            "value": 2842.88,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=4 TTFT (ms)",
            "value": 306.45,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=4 TPOT (ms)",
            "value": 12,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=64 throughput (tok/s)",
            "value": 1801.92,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=64 Total Tput (tok/s)",
            "value": 16242.14,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=64 TTFT (ms)",
            "value": 1038.64,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=64 TPOT (ms)",
            "value": 33.76,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=8 throughput (tok/s)",
            "value": 583,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=8 Total Tput (tok/s)",
            "value": 5186.1,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=8 TTFT (ms)",
            "value": 369.09,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=8 TPOT (ms)",
            "value": 13.08,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=8 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=128 throughput (tok/s)",
            "value": 5349.78,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=128 Total Tput (tok/s)",
            "value": 10728.76,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=128 TTFT (ms)",
            "value": 348.14,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=128 TPOT (ms)",
            "value": 22.81,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=16 throughput (tok/s)",
            "value": 1582.37,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=16 Total Tput (tok/s)",
            "value": 3186.9,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=16 TTFT (ms)",
            "value": 141.18,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=16 TPOT (ms)",
            "value": 9.61,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=256 throughput (tok/s)",
            "value": 7385.74,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=256 Total Tput (tok/s)",
            "value": 14787.99,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=256 TTFT (ms)",
            "value": 536.84,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=256 TPOT (ms)",
            "value": 33.21,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=256 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=32 throughput (tok/s)",
            "value": 2527.38,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=32 Total Tput (tok/s)",
            "value": 5054.99,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=32 TTFT (ms)",
            "value": 177.54,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=32 TPOT (ms)",
            "value": 12.05,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=4 throughput (tok/s)",
            "value": 579.88,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=4 Total Tput (tok/s)",
            "value": 1167.34,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=4 TTFT (ms)",
            "value": 98.54,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=4 TPOT (ms)",
            "value": 6.44,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=64 throughput (tok/s)",
            "value": 3693.93,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=64 Total Tput (tok/s)",
            "value": 7401.24,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=64 TTFT (ms)",
            "value": 239.2,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=64 TPOT (ms)",
            "value": 16.52,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=8 throughput (tok/s)",
            "value": 958.83,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=8 Total Tput (tok/s)",
            "value": 1913.51,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=8 TTFT (ms)",
            "value": 114.81,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=8 TPOT (ms)",
            "value": 8.07,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=8 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=128 throughput (tok/s)",
            "value": 2640.85,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=128 Total Tput (tok/s)",
            "value": 23907.62,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=128 TTFT (ms)",
            "value": 1912.67,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=128 TPOT (ms)",
            "value": 45.7,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=16 throughput (tok/s)",
            "value": 1226.24,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=16 Total Tput (tok/s)",
            "value": 11099.59,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=16 TTFT (ms)",
            "value": 518.62,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=16 TPOT (ms)",
            "value": 12.16,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=256 throughput (tok/s)",
            "value": 3047.75,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=256 Total Tput (tok/s)",
            "value": 27497.95,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=256 TTFT (ms)",
            "value": 3470.63,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=256 TPOT (ms)",
            "value": 79.37,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=256 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=32 throughput (tok/s)",
            "value": 1740.7,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=32 Total Tput (tok/s)",
            "value": 15611.21,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=32 TTFT (ms)",
            "value": 690.3,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=32 TPOT (ms)",
            "value": 17.08,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=4 throughput (tok/s)",
            "value": 563.35,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=4 Total Tput (tok/s)",
            "value": 5076.49,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=4 TTFT (ms)",
            "value": 344.19,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=4 TPOT (ms)",
            "value": 6.41,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=64 throughput (tok/s)",
            "value": 2180.83,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=64 Total Tput (tok/s)",
            "value": 19714.18,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=64 TTFT (ms)",
            "value": 1048.78,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=64 TPOT (ms)",
            "value": 27.68,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=8 throughput (tok/s)",
            "value": 868.26,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=8 Total Tput (tok/s)",
            "value": 7743.14,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=8 TTFT (ms)",
            "value": 379.06,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=8 TPOT (ms)",
            "value": 8.57,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=8 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=1 throughput (tok/s)",
            "value": 132.45,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=1 Total Tput (tok/s)",
            "value": 263.97,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=1 TTFT (ms)",
            "value": 98.92,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=1 TPOT (ms)",
            "value": 7.44,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=1 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=128 throughput (tok/s)",
            "value": 5509.28,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=128 Total Tput (tok/s)",
            "value": 11030.65,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=128 TTFT (ms)",
            "value": 319.46,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=128 TPOT (ms)",
            "value": 22.28,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=16 throughput (tok/s)",
            "value": 1413.68,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=16 Total Tput (tok/s)",
            "value": 2842.41,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=16 TTFT (ms)",
            "value": 155.44,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=16 TPOT (ms)",
            "value": 10.91,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=2 throughput (tok/s)",
            "value": 261.99,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=2 Total Tput (tok/s)",
            "value": 519.19,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=2 TTFT (ms)",
            "value": 102.16,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=2 TPOT (ms)",
            "value": 7.51,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=2 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=256 throughput (tok/s)",
            "value": 7951.62,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=256 Total Tput (tok/s)",
            "value": 15895.56,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=256 TTFT (ms)",
            "value": 743.36,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=256 TPOT (ms)",
            "value": 30.68,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=256 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=32 throughput (tok/s)",
            "value": 2325.28,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=32 Total Tput (tok/s)",
            "value": 4643.2,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=32 TTFT (ms)",
            "value": 147.58,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=32 TPOT (ms)",
            "value": 13.27,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=4 throughput (tok/s)",
            "value": 462.23,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=4 Total Tput (tok/s)",
            "value": 928.98,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=4 TTFT (ms)",
            "value": 122.85,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=4 TPOT (ms)",
            "value": 8.26,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=64 throughput (tok/s)",
            "value": 3594.04,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=64 Total Tput (tok/s)",
            "value": 7189.71,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=64 TTFT (ms)",
            "value": 219.4,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=64 TPOT (ms)",
            "value": 17.07,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=8 throughput (tok/s)",
            "value": 719.48,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=8 Total Tput (tok/s)",
            "value": 1433.65,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=8 TTFT (ms)",
            "value": 94.8,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=8 TPOT (ms)",
            "value": 10.81,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=8 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=1 throughput (tok/s)",
            "value": 124.72,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=1 Total Tput (tok/s)",
            "value": 1116.4,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=1 TTFT (ms)",
            "value": 202.61,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=1 TPOT (ms)",
            "value": 7.81,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=1 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=128 throughput (tok/s)",
            "value": 2765.61,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=128 Total Tput (tok/s)",
            "value": 24968.13,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=128 TTFT (ms)",
            "value": 1397.61,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=128 TPOT (ms)",
            "value": 44.06,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=16 throughput (tok/s)",
            "value": 1104.82,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=16 Total Tput (tok/s)",
            "value": 9970.7,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=16 TTFT (ms)",
            "value": 374.13,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=16 TPOT (ms)",
            "value": 13.64,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=2 throughput (tok/s)",
            "value": 239.16,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=2 Total Tput (tok/s)",
            "value": 2131.27,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=2 TTFT (ms)",
            "value": 228.47,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=2 TPOT (ms)",
            "value": 8.1,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=2 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=256 throughput (tok/s)",
            "value": 3237.18,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=256 Total Tput (tok/s)",
            "value": 29126.26,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=256 TTFT (ms)",
            "value": 2666.76,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=256 TPOT (ms)",
            "value": 75.17,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=256 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=32 throughput (tok/s)",
            "value": 1634.94,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=32 Total Tput (tok/s)",
            "value": 14620.14,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=32 TTFT (ms)",
            "value": 537.61,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=32 TPOT (ms)",
            "value": 18.51,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=4 throughput (tok/s)",
            "value": 417.47,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=4 Total Tput (tok/s)",
            "value": 3752.83,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=4 TTFT (ms)",
            "value": 248.74,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=4 TPOT (ms)",
            "value": 9.09,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=64 throughput (tok/s)",
            "value": 2159.86,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=64 Total Tput (tok/s)",
            "value": 19468.52,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=64 TTFT (ms)",
            "value": 843.85,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=64 TPOT (ms)",
            "value": 28.2,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=8 throughput (tok/s)",
            "value": 718.06,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=8 Total Tput (tok/s)",
            "value": 6387.44,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=8 TTFT (ms)",
            "value": 304.7,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=8 TPOT (ms)",
            "value": 10.62,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=8 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=128 throughput (tok/s)",
            "value": 6779.64,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=128 Total Tput (tok/s)",
            "value": 13595,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=128 TTFT (ms)",
            "value": 336.9,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=128 TPOT (ms)",
            "value": 17.99,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=16 throughput (tok/s)",
            "value": 2114.92,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=16 Total Tput (tok/s)",
            "value": 4258.17,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=16 TTFT (ms)",
            "value": 140.48,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=16 TPOT (ms)",
            "value": 7.16,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=256 throughput (tok/s)",
            "value": 8364.92,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=256 Total Tput (tok/s)",
            "value": 16747.63,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=256 TTFT (ms)",
            "value": 492.55,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=256 TPOT (ms)",
            "value": 29.38,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=256 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=32 throughput (tok/s)",
            "value": 3197.71,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=32 Total Tput (tok/s)",
            "value": 6395.35,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=32 TTFT (ms)",
            "value": 167.36,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=32 TPOT (ms)",
            "value": 9.41,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=4 throughput (tok/s)",
            "value": 732.01,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=4 Total Tput (tok/s)",
            "value": 1473.62,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=4 TTFT (ms)",
            "value": 115.1,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=4 TPOT (ms)",
            "value": 5.04,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=64 throughput (tok/s)",
            "value": 4728.9,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=64 Total Tput (tok/s)",
            "value": 9475.24,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=64 TTFT (ms)",
            "value": 218.49,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=64 TPOT (ms)",
            "value": 12.86,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=8 throughput (tok/s)",
            "value": 1250.07,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=8 Total Tput (tok/s)",
            "value": 2494.6,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=8 TTFT (ms)",
            "value": 133.54,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=8 TPOT (ms)",
            "value": 6.03,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=8 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=128 throughput (tok/s)",
            "value": 3379.28,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=128 Total Tput (tok/s)",
            "value": 30597.04,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=128 TTFT (ms)",
            "value": 1496.51,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=128 TPOT (ms)",
            "value": 35.75,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=16 throughput (tok/s)",
            "value": 1376.87,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=16 Total Tput (tok/s)",
            "value": 12463.69,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=16 TTFT (ms)",
            "value": 440.77,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=16 TPOT (ms)",
            "value": 10.87,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=256 throughput (tok/s)",
            "value": 3664.49,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=256 Total Tput (tok/s)",
            "value": 33069.06,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=256 TTFT (ms)",
            "value": 2770.31,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=256 TPOT (ms)",
            "value": 66.1,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=256 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=32 throughput (tok/s)",
            "value": 2086.11,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=32 Total Tput (tok/s)",
            "value": 18710.44,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=32 TTFT (ms)",
            "value": 574.82,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=32 TPOT (ms)",
            "value": 14.3,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=4 throughput (tok/s)",
            "value": 649.39,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=4 Total Tput (tok/s)",
            "value": 5854.17,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=4 TTFT (ms)",
            "value": 268.36,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=4 TPOT (ms)",
            "value": 5.63,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=64 throughput (tok/s)",
            "value": 2787.85,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=64 Total Tput (tok/s)",
            "value": 25201.73,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=64 TTFT (ms)",
            "value": 881.34,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=64 TPOT (ms)",
            "value": 21.54,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=8 throughput (tok/s)",
            "value": 919.83,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=8 Total Tput (tok/s)",
            "value": 8205.91,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=8 TTFT (ms)",
            "value": 791.55,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=8 TPOT (ms)",
            "value": 7.51,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=8 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=1 throughput (tok/s)",
            "value": 274.28,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=1 Total Tput (tok/s)",
            "value": 546.63,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=1 TTFT (ms)",
            "value": 44.01,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=1 TPOT (ms)",
            "value": 3.6,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=1 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=128 throughput (tok/s)",
            "value": 8866.64,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=128 Total Tput (tok/s)",
            "value": 17752.75,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=128 TTFT (ms)",
            "value": 144.4,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=128 TPOT (ms)",
            "value": 13.94,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=128 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=16 throughput (tok/s)",
            "value": 2442.68,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=16 Total Tput (tok/s)",
            "value": 4911.36,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=16 TTFT (ms)",
            "value": 60,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=16 TPOT (ms)",
            "value": 6.36,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=16 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=2 throughput (tok/s)",
            "value": 522.13,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=2 Total Tput (tok/s)",
            "value": 1034.72,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=2 TTFT (ms)",
            "value": 40.55,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=2 TPOT (ms)",
            "value": 3.78,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=2 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=256 throughput (tok/s)",
            "value": 12665.03,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=256 Total Tput (tok/s)",
            "value": 25317.81,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=256 TTFT (ms)",
            "value": 1634.73,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=256 TPOT (ms)",
            "value": 18.22,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=256 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=32 throughput (tok/s)",
            "value": 3805.15,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=32 Total Tput (tok/s)",
            "value": 7598.26,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=32 TTFT (ms)",
            "value": 80.25,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=32 TPOT (ms)",
            "value": 8.16,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=32 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=4 throughput (tok/s)",
            "value": 934.43,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=4 Total Tput (tok/s)",
            "value": 1877.99,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=4 TTFT (ms)",
            "value": 45.48,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=4 TPOT (ms)",
            "value": 4.1,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=4 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=64 throughput (tok/s)",
            "value": 6041.28,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=64 Total Tput (tok/s)",
            "value": 12085.28,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=64 TTFT (ms)",
            "value": 117.31,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=64 TPOT (ms)",
            "value": 10.23,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=64 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=8 throughput (tok/s)",
            "value": 1534.83,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=8 Total Tput (tok/s)",
            "value": 3058.33,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=8 TTFT (ms)",
            "value": 41.92,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=8 TPOT (ms)",
            "value": 5.07,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=8 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=1 throughput (tok/s)",
            "value": 257.64,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=1 Total Tput (tok/s)",
            "value": 2306.3,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=1 TTFT (ms)",
            "value": 144.2,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=1 TPOT (ms)",
            "value": 3.73,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=1 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=128 throughput (tok/s)",
            "value": 4792.31,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=128 Total Tput (tok/s)",
            "value": 43265.41,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=128 TTFT (ms)",
            "value": 922.98,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=128 TPOT (ms)",
            "value": 25.38,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=128 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=16 throughput (tok/s)",
            "value": 2012.94,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=16 Total Tput (tok/s)",
            "value": 18166.26,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=16 TTFT (ms)",
            "value": 233.24,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=16 TPOT (ms)",
            "value": 7.48,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=16 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=2 throughput (tok/s)",
            "value": 485.84,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=2 Total Tput (tok/s)",
            "value": 4329.51,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=2 TTFT (ms)",
            "value": 144.23,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=2 TPOT (ms)",
            "value": 3.95,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=2 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=256 throughput (tok/s)",
            "value": 5575.26,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=256 Total Tput (tok/s)",
            "value": 50162.94,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=256 TTFT (ms)",
            "value": 1835.56,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=256 TPOT (ms)",
            "value": 43.28,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=256 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=32 throughput (tok/s)",
            "value": 2844.93,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=32 Total Tput (tok/s)",
            "value": 25440.23,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=32 TTFT (ms)",
            "value": 318.22,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=32 TPOT (ms)",
            "value": 10.65,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=32 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=4 throughput (tok/s)",
            "value": 850.1,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=4 Total Tput (tok/s)",
            "value": 7641.87,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=4 TTFT (ms)",
            "value": 161.27,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=4 TPOT (ms)",
            "value": 4.42,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=4 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=64 throughput (tok/s)",
            "value": 3930.1,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=64 Total Tput (tok/s)",
            "value": 35425.03,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=64 TTFT (ms)",
            "value": 529.32,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=64 TPOT (ms)",
            "value": 15.42,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=64 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=8 throughput (tok/s)",
            "value": 1392.04,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=8 Total Tput (tok/s)",
            "value": 12382.86,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=8 TTFT (ms)",
            "value": 195.26,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=8 TPOT (ms)",
            "value": 5.45,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=8 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=1 throughput (tok/s)",
            "value": 118.87,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=1 Total Tput (tok/s)",
            "value": 236.9,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=1 TTFT (ms)",
            "value": 88.82,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=1 TPOT (ms)",
            "value": 8.32,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=1 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=128 throughput (tok/s)",
            "value": 3297.06,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=128 Total Tput (tok/s)",
            "value": 6601.36,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=128 TTFT (ms)",
            "value": 513.66,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=128 TPOT (ms)",
            "value": 37.38,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=128 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=16 throughput (tok/s)",
            "value": 993.74,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=16 Total Tput (tok/s)",
            "value": 1998.05,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=16 TTFT (ms)",
            "value": 139.62,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=16 TPOT (ms)",
            "value": 15.64,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=16 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=2 throughput (tok/s)",
            "value": 222.24,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=2 Total Tput (tok/s)",
            "value": 440.41,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=2 TTFT (ms)",
            "value": 96.05,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=2 TPOT (ms)",
            "value": 8.89,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=2 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=256 throughput (tok/s)",
            "value": 4592.42,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=256 Total Tput (tok/s)",
            "value": 9180.4,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=256 TTFT (ms)",
            "value": 1085.01,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=256 TPOT (ms)",
            "value": 53.21,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=256 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=32 throughput (tok/s)",
            "value": 1556.88,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=32 Total Tput (tok/s)",
            "value": 3108.83,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=32 TTFT (ms)",
            "value": 221.61,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=32 TPOT (ms)",
            "value": 19.87,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=32 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=4 throughput (tok/s)",
            "value": 401.22,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=4 Total Tput (tok/s)",
            "value": 806.36,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=4 TTFT (ms)",
            "value": 106.01,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=4 TPOT (ms)",
            "value": 9.56,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=4 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=64 throughput (tok/s)",
            "value": 2215.85,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=64 Total Tput (tok/s)",
            "value": 4432.71,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=64 TTFT (ms)",
            "value": 280.19,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=64 TPOT (ms)",
            "value": 27.94,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=64 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=8 throughput (tok/s)",
            "value": 662.18,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=8 Total Tput (tok/s)",
            "value": 1319.48,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=8 TTFT (ms)",
            "value": 121.79,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=8 TPOT (ms)",
            "value": 11.72,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=8 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=1 throughput (tok/s)",
            "value": 111.53,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=1 Total Tput (tok/s)",
            "value": 998.34,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=1 TTFT (ms)",
            "value": 338.52,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=1 TPOT (ms)",
            "value": 8.61,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=1 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=128 throughput (tok/s)",
            "value": 1691.93,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=128 Total Tput (tok/s)",
            "value": 15274.91,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=128 TTFT (ms)",
            "value": 2826.92,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=128 TPOT (ms)",
            "value": 71.61,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=128 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=16 throughput (tok/s)",
            "value": 784.53,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=16 Total Tput (tok/s)",
            "value": 7080.22,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=16 TTFT (ms)",
            "value": 585.34,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=16 TPOT (ms)",
            "value": 19.25,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=16 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=2 throughput (tok/s)",
            "value": 203.04,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=2 Total Tput (tok/s)",
            "value": 1809.41,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=2 TTFT (ms)",
            "value": 341.96,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=2 TPOT (ms)",
            "value": 9.47,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=2 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=256 throughput (tok/s)",
            "value": 1933.68,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=256 Total Tput (tok/s)",
            "value": 17398.1,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=256 TTFT (ms)",
            "value": 4832.33,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=256 TPOT (ms)",
            "value": 125.76,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=256 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=32 throughput (tok/s)",
            "value": 1101.51,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=32 Total Tput (tok/s)",
            "value": 9850.09,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=32 TTFT (ms)",
            "value": 886.98,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=32 TPOT (ms)",
            "value": 27.48,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=32 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=4 throughput (tok/s)",
            "value": 351.75,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=4 Total Tput (tok/s)",
            "value": 3162,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=4 TTFT (ms)",
            "value": 402.72,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=4 TPOT (ms)",
            "value": 10.68,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=4 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=64 throughput (tok/s)",
            "value": 1382.58,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=64 Total Tput (tok/s)",
            "value": 12462.28,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=64 TTFT (ms)",
            "value": 1445.36,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=64 TPOT (ms)",
            "value": 44.03,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=64 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=8 throughput (tok/s)",
            "value": 551.36,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=8 Total Tput (tok/s)",
            "value": 4904.61,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=8 TTFT (ms)",
            "value": 502.9,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=8 TPOT (ms)",
            "value": 13.74,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23861545938 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=8 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chuali@amd.com",
            "name": "Li",
            "username": "ChuanLi1101"
          },
          "committer": {
            "email": "chuali@amd.com",
            "name": "Li",
            "username": "ChuanLi1101"
          },
          "distinct": true,
          "id": "760a619189c5ea6cfc7c2a93b167d1328470f212",
          "message": "add kernel comparison dashboard (ATOM OOT vs vLLM v0.18)\n\nMade-with: Cursor",
          "timestamp": "2026-04-01T12:24:19-07:00",
          "tree_id": "549baee3e6a6dc978cd4afec0e61d413841c6ef1",
          "url": "https://github.com/ROCm/ATOM/commit/760a619189c5ea6cfc7c2a93b167d1328470f212"
        },
        "date": 1775082102351,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM::DeepSeek-R1-0528 accuracy (GSM8K)",
            "value": 0.9545,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23866672992 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (GSM8K 3-shot flexible-extract) | strict-match: 0.9522 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528 MTP accuracy (GSM8K)",
            "value": 0.9424,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23866672992 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: Same base model as DeepSeek-R1-0528 FP8 | strict-match: 0.9393 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 accuracy (GSM8K)",
            "value": 0.9409,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23866672992 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9356 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 MTP accuracy (GSM8K)",
            "value": 0.9371,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23866672992 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.934 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::Llama-3.3-70B-Instruct-MXFP4-Preview accuracy (GSM8K)",
            "value": 0.9121,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23866672992 | Threshold: 0.88 | BaselineModel: meta-llama/Llama-3.3-70B-Instruct | BaselineNote: HF page inaccessible; needs CI measurement of baseline | strict-match: 0.6224 | fewshot: 3 | Model: /models/amd/Llama-3.3-70B-Instruct-MXFP4-Preview"
          },
          {
            "name": "ATOM::Meta-Llama-3-8B-Instruct accuracy (GSM8K)",
            "value": 0.7491,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23866672992 | Threshold: 0.73 | BaselineModel: meta-llama/Meta-Llama-3-8B-Instruct | BaselineNote: HF reports 0.796 but 8-shot CoT; CI uses 3-shot, not comparable | strict-match: 0.7498 | fewshot: 3 | Model: /models/meta-llama/Meta-Llama-3-8B-Instruct"
          },
          {
            "name": "ATOM::Qwen3-235B-A22B-Instruct-2507-FP8 accuracy (GSM8K)",
            "value": 0.9014,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23866672992 | Threshold: 0.87 | Baseline: 0.909 | BaselineModel: Qwen/Qwen3-235B-A22B-Instruct-2507 | BaselineNote: HF: amd/Qwen3-235B-A22B-Instruct-2507-MXFP4 card shows baseline=0.909 | strict-match: 0.8863 | fewshot: 3 | Model: /models/Qwen/Qwen3-235B-A22B-Instruct-2507-FP8"
          },
          {
            "name": "ATOM::Qwen3-Next-80B-A3B-Thinking accuracy (GSM8K)",
            "value": 0.6975,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23866672992 | Threshold: 0.65 | BaselineModel: Qwen/Qwen3-Next-80B-A3B-Thinking | BaselineNote: No public GSM8K baseline; HF card has no GSM8K | strict-match: 0.7847 | fewshot: 3 | Model: /models/Qwen/Qwen3-Next-80B-A3B-Thinking"
          },
          {
            "name": "ATOM::gpt-oss-120b accuracy (GSM8K)",
            "value": 0.4132,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23866672992 | Threshold: 0.38 | BaselineModel: openai/gpt-oss-120b | BaselineNote: No public GSM8K baseline available | strict-match: 0.2373 | fewshot: 3 | Model: /models/openai/gpt-oss-120b"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ygan@amd.com",
            "name": "Pleaplusone",
            "username": "ganyi1996ppo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25351954e5f82adf1138bfa3dd19f20befa06174",
          "message": "[Qwen3Next][Perf] add fused chunk split kernel for qkvzba and qkvz,ba case (#457)\n\n* add fused chunk split kernel for qkvzba and qkvz,ba case\n\nSigned-off-by: ganyi <ygan@amd.com>\n\n* use out ptr dtype for zeros\n\nSigned-off-by: ganyi <ygan@amd.com>\n\n---------\n\nSigned-off-by: ganyi <ygan@amd.com>",
          "timestamp": "2026-04-02T11:15:52+08:00",
          "tree_id": "4fd9e870d22829058b0610538af8a2292501f40c",
          "url": "https://github.com/ROCm/ATOM/commit/25351954e5f82adf1138bfa3dd19f20befa06174"
        },
        "date": 1775115406887,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM::DeepSeek-R1-0528 accuracy (GSM8K)",
            "value": 0.9454,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23881995792 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (GSM8K 3-shot flexible-extract) | strict-match: 0.9424 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528 MTP accuracy (GSM8K)",
            "value": 0.9454,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23881995792 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: Same base model as DeepSeek-R1-0528 FP8 | strict-match: 0.9378 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 accuracy (GSM8K)",
            "value": 0.9393,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23881995792 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9348 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 MTP accuracy (GSM8K)",
            "value": 0.9401,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23881995792 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9363 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::Meta-Llama-3-8B-Instruct accuracy (GSM8K)",
            "value": 0.7528,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23881995792 | Threshold: 0.73 | BaselineModel: meta-llama/Meta-Llama-3-8B-Instruct | BaselineNote: HF reports 0.796 but 8-shot CoT; CI uses 3-shot, not comparable | strict-match: 0.7544 | fewshot: 3 | Model: /models/meta-llama/Meta-Llama-3-8B-Instruct"
          },
          {
            "name": "ATOM::Qwen3-235B-A22B-Instruct-2507-FP8 accuracy (GSM8K)",
            "value": 0.8976,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23881995792 | Threshold: 0.87 | Baseline: 0.909 | BaselineModel: Qwen/Qwen3-235B-A22B-Instruct-2507 | BaselineNote: HF: amd/Qwen3-235B-A22B-Instruct-2507-MXFP4 card shows baseline=0.909 | strict-match: 0.8779 | fewshot: 3 | Model: /models/Qwen/Qwen3-235B-A22B-Instruct-2507-FP8"
          },
          {
            "name": "ATOM::Qwen3-Next-80B-A3B-Thinking accuracy (GSM8K)",
            "value": 0.6816,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23881995792 | Threshold: 0.65 | BaselineModel: Qwen/Qwen3-Next-80B-A3B-Thinking | BaselineNote: No public GSM8K baseline; HF card has no GSM8K | strict-match: 0.7892 | fewshot: 3 | Model: /models/Qwen/Qwen3-Next-80B-A3B-Thinking"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103567126+valarLip@users.noreply.github.com",
            "name": "Lingpeng Jin",
            "username": "valarLip"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3ef050eda3d8006eefab173711126517107b3ea",
          "message": "Revert \"add kernel comparison dashboard (ATOM OOT vs vLLM v0.18)\" (#471)\n\nThis reverts commit 760a619189c5ea6cfc7c2a93b167d1328470f212.",
          "timestamp": "2026-04-02T14:00:09+08:00",
          "tree_id": "092ac2879a884d2e22ea682087fd45168c6f6f87",
          "url": "https://github.com/ROCm/ATOM/commit/e3ef050eda3d8006eefab173711126517107b3ea"
        },
        "date": 1775117289201,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM::DeepSeek-R1-0528 accuracy (GSM8K)",
            "value": 0.9462,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23886415487 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (GSM8K 3-shot flexible-extract) | strict-match: 0.9393 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528 MTP accuracy (GSM8K)",
            "value": 0.9424,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23886415487 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: Same base model as DeepSeek-R1-0528 FP8 | strict-match: 0.9386 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 accuracy (GSM8K)",
            "value": 0.9318,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23886415487 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9295 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 MTP accuracy (GSM8K)",
            "value": 0.9454,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23886415487 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9401 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::GLM-5-FP8 accuracy (GSM8K)",
            "value": 0.9393,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23886415487 | Threshold: 0.93 | Baseline: 0.9545 | BaselineModel: zai-org/GLM-5 | BaselineNote: HF: amd/GLM-5-MXFP4 card shows GLM-5 baseline=0.9545 (5-shot) | strict-match: 0.9447 | fewshot: 3 | Model: /models/zai-org/GLM-5-FP8"
          },
          {
            "name": "ATOM::Kimi-K2.5-MXFP4 accuracy (GSM8K)",
            "value": 0.9318,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23886415487 | Threshold: 0.93 | Baseline: 0.9409 | BaselineModel: moonshotai/Kimi-K2.5 | BaselineNote: HF: amd/Kimi-K2.5-MXFP4 card shows Kimi-K2.5 baseline=0.9409 | strict-match: 0.931 | fewshot: 3 | Model: /models/amd/Kimi-K2.5-MXFP4"
          },
          {
            "name": "ATOM::Meta-Llama-3-8B-Instruct accuracy (GSM8K)",
            "value": 0.7422,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23886415487 | Threshold: 0.73 | BaselineModel: meta-llama/Meta-Llama-3-8B-Instruct | BaselineNote: HF reports 0.796 but 8-shot CoT; CI uses 3-shot, not comparable | strict-match: 0.74 | fewshot: 3 | Model: /models/meta-llama/Meta-Llama-3-8B-Instruct"
          },
          {
            "name": "ATOM::Qwen3-235B-A22B-Instruct-2507-FP8 accuracy (GSM8K)",
            "value": 0.9037,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23886415487 | Threshold: 0.87 | Baseline: 0.909 | BaselineModel: Qwen/Qwen3-235B-A22B-Instruct-2507 | BaselineNote: HF: amd/Qwen3-235B-A22B-Instruct-2507-MXFP4 card shows baseline=0.909 | strict-match: 0.887 | fewshot: 3 | Model: /models/Qwen/Qwen3-235B-A22B-Instruct-2507-FP8"
          },
          {
            "name": "ATOM::Qwen3-Next-80B-A3B-Thinking accuracy (GSM8K)",
            "value": 0.6945,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23886415487 | Threshold: 0.65 | BaselineModel: Qwen/Qwen3-Next-80B-A3B-Thinking | BaselineNote: No public GSM8K baseline; HF card has no GSM8K | strict-match: 0.7976 | fewshot: 3 | Model: /models/Qwen/Qwen3-Next-80B-A3B-Thinking"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ygan@amd.com",
            "name": "Pleaplusone",
            "username": "ganyi1996ppo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25351954e5f82adf1138bfa3dd19f20befa06174",
          "message": "[Qwen3Next][Perf] add fused chunk split kernel for qkvzba and qkvz,ba case (#457)\n\n* add fused chunk split kernel for qkvzba and qkvz,ba case\n\nSigned-off-by: ganyi <ygan@amd.com>\n\n* use out ptr dtype for zeros\n\nSigned-off-by: ganyi <ygan@amd.com>\n\n---------\n\nSigned-off-by: ganyi <ygan@amd.com>",
          "timestamp": "2026-04-02T11:15:52+08:00",
          "tree_id": "4fd9e870d22829058b0610538af8a2292501f40c",
          "url": "https://github.com/ROCm/ATOM/commit/25351954e5f82adf1138bfa3dd19f20befa06174"
        },
        "date": 1775118163154,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM::DeepSeek-R1-0528 accuracy (GSM8K)",
            "value": 0.9454,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23881995792 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (GSM8K 3-shot flexible-extract) | strict-match: 0.9424 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528 MTP accuracy (GSM8K)",
            "value": 0.9454,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23881995792 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: Same base model as DeepSeek-R1-0528 FP8 | strict-match: 0.9378 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 accuracy (GSM8K)",
            "value": 0.9393,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23881995792 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9348 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 MTP accuracy (GSM8K)",
            "value": 0.9401,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23881995792 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9363 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::Meta-Llama-3-8B-Instruct accuracy (GSM8K)",
            "value": 0.7528,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23881995792 | Threshold: 0.73 | BaselineModel: meta-llama/Meta-Llama-3-8B-Instruct | BaselineNote: HF reports 0.796 but 8-shot CoT; CI uses 3-shot, not comparable | strict-match: 0.7544 | fewshot: 3 | Model: /models/meta-llama/Meta-Llama-3-8B-Instruct"
          },
          {
            "name": "ATOM::Qwen3-235B-A22B-Instruct-2507-FP8 accuracy (GSM8K)",
            "value": 0.8976,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23881995792 | Threshold: 0.87 | Baseline: 0.909 | BaselineModel: Qwen/Qwen3-235B-A22B-Instruct-2507 | BaselineNote: HF: amd/Qwen3-235B-A22B-Instruct-2507-MXFP4 card shows baseline=0.909 | strict-match: 0.8779 | fewshot: 3 | Model: /models/Qwen/Qwen3-235B-A22B-Instruct-2507-FP8"
          },
          {
            "name": "ATOM::Qwen3-Next-80B-A3B-Thinking accuracy (GSM8K)",
            "value": 0.6816,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23881995792 | Threshold: 0.65 | BaselineModel: Qwen/Qwen3-Next-80B-A3B-Thinking | BaselineNote: No public GSM8K baseline; HF card has no GSM8K | strict-match: 0.7892 | fewshot: 3 | Model: /models/Qwen/Qwen3-Next-80B-A3B-Thinking"
          },
          {
            "name": "ATOM::gpt-oss-120b (2 GPUs) accuracy (GSM8K)",
            "value": 0.417,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23881995792 | Threshold: 0.38 | BaselineModel: openai/gpt-oss-120b | BaselineNote: No public GSM8K baseline available | strict-match: 0.229 | fewshot: 3 | Model: /models/openai/gpt-oss-120b"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103567126+valarLip@users.noreply.github.com",
            "name": "Lingpeng Jin",
            "username": "valarLip"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3ef050eda3d8006eefab173711126517107b3ea",
          "message": "Revert \"add kernel comparison dashboard (ATOM OOT vs vLLM v0.18)\" (#471)\n\nThis reverts commit 760a619189c5ea6cfc7c2a93b167d1328470f212.",
          "timestamp": "2026-04-02T14:00:09+08:00",
          "tree_id": "092ac2879a884d2e22ea682087fd45168c6f6f87",
          "url": "https://github.com/ROCm/ATOM/commit/e3ef050eda3d8006eefab173711126517107b3ea"
        },
        "date": 1775119859736,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM::DeepSeek-R1-0528 accuracy (GSM8K)",
            "value": 0.9462,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23886415487 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (GSM8K 3-shot flexible-extract) | strict-match: 0.9393 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528 MTP accuracy (GSM8K)",
            "value": 0.9424,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23886415487 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: Same base model as DeepSeek-R1-0528 FP8 | strict-match: 0.9386 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 accuracy (GSM8K)",
            "value": 0.9318,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23886415487 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9295 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 MTP accuracy (GSM8K)",
            "value": 0.9454,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23886415487 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9401 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::GLM-5-FP8 accuracy (GSM8K)",
            "value": 0.9393,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23886415487 | Threshold: 0.93 | Baseline: 0.9545 | BaselineModel: zai-org/GLM-5 | BaselineNote: HF: amd/GLM-5-MXFP4 card shows GLM-5 baseline=0.9545 (5-shot) | strict-match: 0.9447 | fewshot: 3 | Model: /models/zai-org/GLM-5-FP8"
          },
          {
            "name": "ATOM::Kimi-K2.5-MXFP4 accuracy (GSM8K)",
            "value": 0.9318,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23886415487 | Threshold: 0.93 | Baseline: 0.9409 | BaselineModel: moonshotai/Kimi-K2.5 | BaselineNote: HF: amd/Kimi-K2.5-MXFP4 card shows Kimi-K2.5 baseline=0.9409 | strict-match: 0.931 | fewshot: 3 | Model: /models/amd/Kimi-K2.5-MXFP4"
          },
          {
            "name": "ATOM::Meta-Llama-3-8B-Instruct accuracy (GSM8K)",
            "value": 0.7422,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23886415487 | Threshold: 0.73 | BaselineModel: meta-llama/Meta-Llama-3-8B-Instruct | BaselineNote: HF reports 0.796 but 8-shot CoT; CI uses 3-shot, not comparable | strict-match: 0.74 | fewshot: 3 | Model: /models/meta-llama/Meta-Llama-3-8B-Instruct"
          },
          {
            "name": "ATOM::Qwen3-235B-A22B-Instruct-2507-FP8 accuracy (GSM8K)",
            "value": 0.9037,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23886415487 | Threshold: 0.87 | Baseline: 0.909 | BaselineModel: Qwen/Qwen3-235B-A22B-Instruct-2507 | BaselineNote: HF: amd/Qwen3-235B-A22B-Instruct-2507-MXFP4 card shows baseline=0.909 | strict-match: 0.887 | fewshot: 3 | Model: /models/Qwen/Qwen3-235B-A22B-Instruct-2507-FP8"
          },
          {
            "name": "ATOM::Qwen3-Next-80B-A3B-Thinking accuracy (GSM8K)",
            "value": 0.6945,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23886415487 | Threshold: 0.65 | BaselineModel: Qwen/Qwen3-Next-80B-A3B-Thinking | BaselineNote: No public GSM8K baseline; HF card has no GSM8K | strict-match: 0.7976 | fewshot: 3 | Model: /models/Qwen/Qwen3-Next-80B-A3B-Thinking"
          },
          {
            "name": "ATOM::gpt-oss-120b (2 GPUs) accuracy (GSM8K)",
            "value": 0.4382,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23886415487 | Threshold: 0.38 | BaselineModel: openai/gpt-oss-120b | BaselineNote: No public GSM8K baseline available | strict-match: 0.2267 | fewshot: 3 | Model: /models/openai/gpt-oss-120b"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "4bb380fbf67c3e28497fb09db313e0caf500c70b",
          "message": "check reused oot ci docker and bypass aiter refresh\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-02T09:49:00Z",
          "url": "https://github.com/ROCm/ATOM/commit/4bb380fbf67c3e28497fb09db313e0caf500c70b"
        },
        "date": 1775123669678,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=16 throughput (tok/s)",
            "value": 2389.54,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=16 Total Tput (tok/s)",
            "value": 4804.51,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=16 TTFT (ms)",
            "value": 59.82,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=16 TPOT (ms)",
            "value": 6.5,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=16 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=32 throughput (tok/s)",
            "value": 3769.16,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=32 Total Tput (tok/s)",
            "value": 7526.41,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=32 TTFT (ms)",
            "value": 91.19,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=32 TPOT (ms)",
            "value": 8.21,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=32 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=4 throughput (tok/s)",
            "value": 901.09,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=4 Total Tput (tok/s)",
            "value": 1810.99,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=4 TTFT (ms)",
            "value": 48.79,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=4 TPOT (ms)",
            "value": 4.25,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=4 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=64 throughput (tok/s)",
            "value": 6082.51,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=64 Total Tput (tok/s)",
            "value": 12167.76,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=64 TTFT (ms)",
            "value": 103.53,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=64 TPOT (ms)",
            "value": 10.15,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=64 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=8 throughput (tok/s)",
            "value": 1501.07,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=8 Total Tput (tok/s)",
            "value": 2991.06,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=8 TTFT (ms)",
            "value": 62.54,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=8 TPOT (ms)",
            "value": 5.16,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=8 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=16 throughput (tok/s)",
            "value": 2560.64,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=16 Total Tput (tok/s)",
            "value": 2881.9,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=16 TTFT (ms)",
            "value": 74.75,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=16 TPOT (ms)",
            "value": 6.1,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=16 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=32 throughput (tok/s)",
            "value": 3980.93,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=32 Total Tput (tok/s)",
            "value": 4475.21,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=32 TTFT (ms)",
            "value": 90.14,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=32 TPOT (ms)",
            "value": 7.84,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=32 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=4 throughput (tok/s)",
            "value": 926.81,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=4 Total Tput (tok/s)",
            "value": 1045.08,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=4 TTFT (ms)",
            "value": 50.19,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=4 TPOT (ms)",
            "value": 4.24,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=4 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=64 throughput (tok/s)",
            "value": 6412.99,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=64 Total Tput (tok/s)",
            "value": 7213.71,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=64 TTFT (ms)",
            "value": 131.82,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=64 TPOT (ms)",
            "value": 9.71,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=64 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=8 throughput (tok/s)",
            "value": 1578.1,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=8 Total Tput (tok/s)",
            "value": 1775.89,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=8 TTFT (ms)",
            "value": 51.39,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=8 TPOT (ms)",
            "value": 4.94,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=8 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=16 throughput (tok/s)",
            "value": 2004.58,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=16 Total Tput (tok/s)",
            "value": 18090.86,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=16 TTFT (ms)",
            "value": 239.67,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=16 TPOT (ms)",
            "value": 7.51,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=16 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=32 throughput (tok/s)",
            "value": 2869.59,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=32 Total Tput (tok/s)",
            "value": 25660.8,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=32 TTFT (ms)",
            "value": 360.73,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=32 TPOT (ms)",
            "value": 10.52,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=32 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=4 throughput (tok/s)",
            "value": 832.14,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=4 Total Tput (tok/s)",
            "value": 7480.47,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=4 TTFT (ms)",
            "value": 153.89,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=4 TPOT (ms)",
            "value": 4.53,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=4 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=64 throughput (tok/s)",
            "value": 3902.2,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=64 Total Tput (tok/s)",
            "value": 35173.6,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=64 TTFT (ms)",
            "value": 588.04,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=64 TPOT (ms)",
            "value": 15.49,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=64 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=8 throughput (tok/s)",
            "value": 1336.58,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=8 Total Tput (tok/s)",
            "value": 11889.49,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=8 TTFT (ms)",
            "value": 180.34,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=8 TPOT (ms)",
            "value": 5.7,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23855855341 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=8 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103567126+valarLip@users.noreply.github.com",
            "name": "Lingpeng Jin",
            "username": "valarLip"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3ef050eda3d8006eefab173711126517107b3ea",
          "message": "Revert \"add kernel comparison dashboard (ATOM OOT vs vLLM v0.18)\" (#471)\n\nThis reverts commit 760a619189c5ea6cfc7c2a93b167d1328470f212.",
          "timestamp": "2026-04-02T14:00:09+08:00",
          "tree_id": "092ac2879a884d2e22ea682087fd45168c6f6f87",
          "url": "https://github.com/ROCm/ATOM/commit/e3ef050eda3d8006eefab173711126517107b3ea"
        },
        "date": 1775132118866,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM::DeepSeek-R1-0528 accuracy (GSM8K)",
            "value": 0.9462,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23886415487 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (GSM8K 3-shot flexible-extract) | strict-match: 0.9393 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528 MTP accuracy (GSM8K)",
            "value": 0.9424,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23886415487 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: Same base model as DeepSeek-R1-0528 FP8 | strict-match: 0.9386 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 accuracy (GSM8K)",
            "value": 0.9318,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23886415487 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9295 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 MTP accuracy (GSM8K)",
            "value": 0.9454,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23886415487 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9401 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::GLM-5-FP8 accuracy (GSM8K)",
            "value": 0.9393,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23886415487 | Threshold: 0.93 | Baseline: 0.9545 | BaselineModel: zai-org/GLM-5 | BaselineNote: HF: amd/GLM-5-MXFP4 card shows GLM-5 baseline=0.9545 (5-shot) | strict-match: 0.9447 | fewshot: 3 | Model: /models/zai-org/GLM-5-FP8"
          },
          {
            "name": "ATOM::Kimi-K2.5-MXFP4 accuracy (GSM8K)",
            "value": 0.9318,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23886415487 | Threshold: 0.93 | Baseline: 0.9409 | BaselineModel: moonshotai/Kimi-K2.5 | BaselineNote: HF: amd/Kimi-K2.5-MXFP4 card shows Kimi-K2.5 baseline=0.9409 | strict-match: 0.931 | fewshot: 3 | Model: /models/amd/Kimi-K2.5-MXFP4"
          },
          {
            "name": "ATOM::Meta-Llama-3-8B-Instruct accuracy (GSM8K)",
            "value": 0.7422,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23886415487 | Threshold: 0.73 | BaselineModel: meta-llama/Meta-Llama-3-8B-Instruct | BaselineNote: HF reports 0.796 but 8-shot CoT; CI uses 3-shot, not comparable | strict-match: 0.74 | fewshot: 3 | Model: /models/meta-llama/Meta-Llama-3-8B-Instruct"
          },
          {
            "name": "ATOM::Qwen3-235B-A22B-Instruct-2507-FP8 accuracy (GSM8K)",
            "value": 0.9037,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23886415487 | Threshold: 0.87 | Baseline: 0.909 | BaselineModel: Qwen/Qwen3-235B-A22B-Instruct-2507 | BaselineNote: HF: amd/Qwen3-235B-A22B-Instruct-2507-MXFP4 card shows baseline=0.909 | strict-match: 0.887 | fewshot: 3 | Model: /models/Qwen/Qwen3-235B-A22B-Instruct-2507-FP8"
          },
          {
            "name": "ATOM::Qwen3-Next-80B-A3B-Thinking accuracy (GSM8K)",
            "value": 0.6945,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23886415487 | Threshold: 0.65 | BaselineModel: Qwen/Qwen3-Next-80B-A3B-Thinking | BaselineNote: No public GSM8K baseline; HF card has no GSM8K | strict-match: 0.7976 | fewshot: 3 | Model: /models/Qwen/Qwen3-Next-80B-A3B-Thinking"
          },
          {
            "name": "ATOM::gpt-oss-120b (2 GPUs) accuracy (GSM8K)",
            "value": 0.4382,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23886415487 | Threshold: 0.38 | BaselineModel: openai/gpt-oss-120b | BaselineNote: No public GSM8K baseline available | strict-match: 0.2267 | fewshot: 3 | Model: /models/openai/gpt-oss-120b"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "afc2bc0855700f7493a69f918fa7eaf2ac35be5a",
          "message": "fix oot ci crash issue\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-02T11:18:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/afc2bc0855700f7493a69f918fa7eaf2ac35be5a"
        },
        "date": 1775133703709,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=128 throughput (tok/s)",
            "value": 4295.73,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=128 Total Tput (tok/s)",
            "value": 8600.89,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=128 TTFT (ms)",
            "value": 285.7,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=128 TPOT (ms)",
            "value": 28.82,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=128 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=16 throughput (tok/s)",
            "value": 1305.69,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=16 Total Tput (tok/s)",
            "value": 2625.29,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=16 TTFT (ms)",
            "value": 109.67,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=16 TPOT (ms)",
            "value": 11.86,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=16 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=256 throughput (tok/s)",
            "value": 5923.03,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=256 Total Tput (tok/s)",
            "value": 11840.33,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=256 TTFT (ms)",
            "value": 508.84,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=256 TPOT (ms)",
            "value": 41.8,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=256 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=32 throughput (tok/s)",
            "value": 2066.82,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=32 Total Tput (tok/s)",
            "value": 4127.11,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=32 TTFT (ms)",
            "value": 158.45,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=32 TPOT (ms)",
            "value": 14.94,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=32 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=4 throughput (tok/s)",
            "value": 428.18,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=4 Total Tput (tok/s)",
            "value": 860.54,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=4 TTFT (ms)",
            "value": 104.81,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=4 TPOT (ms)",
            "value": 8.94,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=4 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=64 throughput (tok/s)",
            "value": 2932.5,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=64 Total Tput (tok/s)",
            "value": 5866.32,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=64 TTFT (ms)",
            "value": 186.39,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=64 TPOT (ms)",
            "value": 21.08,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=64 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=8 throughput (tok/s)",
            "value": 771.89,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=8 Total Tput (tok/s)",
            "value": 1538.08,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=8 TTFT (ms)",
            "value": 105.6,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=8 TPOT (ms)",
            "value": 10.02,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=8 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=128 throughput (tok/s)",
            "value": 2546.86,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=128 Total Tput (tok/s)",
            "value": 22993.28,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=128 TTFT (ms)",
            "value": 1562.27,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=128 TPOT (ms)",
            "value": 47.84,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=128 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=16 throughput (tok/s)",
            "value": 1081.37,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=16 Total Tput (tok/s)",
            "value": 9759.05,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=16 TTFT (ms)",
            "value": 429.31,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=16 TPOT (ms)",
            "value": 13.87,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=16 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=256 throughput (tok/s)",
            "value": 2904.62,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=256 Total Tput (tok/s)",
            "value": 26134.07,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=256 TTFT (ms)",
            "value": 2732.1,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=256 TPOT (ms)",
            "value": 84.18,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=256 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=32 throughput (tok/s)",
            "value": 1571.75,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=32 Total Tput (tok/s)",
            "value": 14055.08,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=32 TTFT (ms)",
            "value": 584.81,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=32 TPOT (ms)",
            "value": 19.22,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=32 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=4 throughput (tok/s)",
            "value": 393,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=4 Total Tput (tok/s)",
            "value": 3532.81,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=4 TTFT (ms)",
            "value": 257.96,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=4 TPOT (ms)",
            "value": 9.66,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=4 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=64 throughput (tok/s)",
            "value": 2050.32,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=64 Total Tput (tok/s)",
            "value": 18481.1,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=64 TTFT (ms)",
            "value": 922.55,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=64 TPOT (ms)",
            "value": 29.69,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=64 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=8 throughput (tok/s)",
            "value": 684.92,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=8 Total Tput (tok/s)",
            "value": 6092.69,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=8 TTFT (ms)",
            "value": 335.21,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=8 TPOT (ms)",
            "value": 11.12,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=8 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=16 throughput (tok/s)",
            "value": 1498.67,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=16 Total Tput (tok/s)",
            "value": 3013.3,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=16 TTFT (ms)",
            "value": 122.96,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=16 TPOT (ms)",
            "value": 10.31,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=16 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=32 throughput (tok/s)",
            "value": 2560.5,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=32 Total Tput (tok/s)",
            "value": 5112.91,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=32 TTFT (ms)",
            "value": 148.85,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=32 TPOT (ms)",
            "value": 12.01,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=32 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=4 throughput (tok/s)",
            "value": 499.32,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=4 Total Tput (tok/s)",
            "value": 1003.52,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=4 TTFT (ms)",
            "value": 82.03,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=4 TPOT (ms)",
            "value": 7.67,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=4 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=64 throughput (tok/s)",
            "value": 3909.15,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=64 Total Tput (tok/s)",
            "value": 7820.06,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=64 TTFT (ms)",
            "value": 182.02,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=64 TPOT (ms)",
            "value": 15.71,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=64 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=8 throughput (tok/s)",
            "value": 884.88,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=8 Total Tput (tok/s)",
            "value": 1763.23,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=8 TTFT (ms)",
            "value": 87.61,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=8 TPOT (ms)",
            "value": 8.75,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=8 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=16 throughput (tok/s)",
            "value": 1659.72,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=16 Total Tput (tok/s)",
            "value": 1867.94,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=16 TTFT (ms)",
            "value": 123.4,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=16 TPOT (ms)",
            "value": 9.36,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=16 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=32 throughput (tok/s)",
            "value": 2850.96,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=32 Total Tput (tok/s)",
            "value": 3204.94,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=32 TTFT (ms)",
            "value": 118.06,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=32 TPOT (ms)",
            "value": 10.93,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=32 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=4 throughput (tok/s)",
            "value": 493.15,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=4 Total Tput (tok/s)",
            "value": 556.08,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=4 TTFT (ms)",
            "value": 104.84,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=4 TPOT (ms)",
            "value": 7.96,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=4 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=64 throughput (tok/s)",
            "value": 4216.66,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=64 Total Tput (tok/s)",
            "value": 4743.15,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=64 TTFT (ms)",
            "value": 185.23,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=64 TPOT (ms)",
            "value": 14.7,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=64 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=8 throughput (tok/s)",
            "value": 887.87,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=8 Total Tput (tok/s)",
            "value": 999.16,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=8 TTFT (ms)",
            "value": 126.9,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=8 TPOT (ms)",
            "value": 8.75,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=8 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=16 throughput (tok/s)",
            "value": 1345.98,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=16 Total Tput (tok/s)",
            "value": 12147.17,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=16 TTFT (ms)",
            "value": 353.69,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=16 TPOT (ms)",
            "value": 11.1,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=16 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=32 throughput (tok/s)",
            "value": 1956.53,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=32 Total Tput (tok/s)",
            "value": 17495.91,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=32 TTFT (ms)",
            "value": 550.53,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=32 TPOT (ms)",
            "value": 15.33,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=32 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=4 throughput (tok/s)",
            "value": 448.28,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=4 Total Tput (tok/s)",
            "value": 4029.81,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=4 TTFT (ms)",
            "value": 223.84,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=4 TPOT (ms)",
            "value": 8.46,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=4 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=64 throughput (tok/s)",
            "value": 2621.36,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=64 Total Tput (tok/s)",
            "value": 23628.37,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=64 TTFT (ms)",
            "value": 800.98,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=64 TPOT (ms)",
            "value": 23.11,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=64 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=8 throughput (tok/s)",
            "value": 803.58,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=8 Total Tput (tok/s)",
            "value": 7148.2,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=8 TTFT (ms)",
            "value": 304.76,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=8 TPOT (ms)",
            "value": 9.46,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=8 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=16 throughput (tok/s)",
            "value": 1868.42,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=16 Total Tput (tok/s)",
            "value": 3756.72,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=16 TTFT (ms)",
            "value": 95.26,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=16 TPOT (ms)",
            "value": 8.26,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=16 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=32 throughput (tok/s)",
            "value": 3284.02,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=32 Total Tput (tok/s)",
            "value": 6557.65,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=32 TTFT (ms)",
            "value": 122.01,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=32 TPOT (ms)",
            "value": 9.33,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=32 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=4 throughput (tok/s)",
            "value": 502.05,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=4 Total Tput (tok/s)",
            "value": 1009.01,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=4 TTFT (ms)",
            "value": 87.61,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=4 TPOT (ms)",
            "value": 7.62,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=4 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=64 throughput (tok/s)",
            "value": 5640.65,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=64 Total Tput (tok/s)",
            "value": 11283.83,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=64 TTFT (ms)",
            "value": 138.2,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=64 TPOT (ms)",
            "value": 10.81,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=64 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=8 throughput (tok/s)",
            "value": 981.61,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=8 Total Tput (tok/s)",
            "value": 1955.97,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=8 TTFT (ms)",
            "value": 90.74,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=8 TPOT (ms)",
            "value": 7.87,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=8 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=16 throughput (tok/s)",
            "value": 1962.07,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=16 Total Tput (tok/s)",
            "value": 2208.23,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=16 TTFT (ms)",
            "value": 93.58,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=16 TPOT (ms)",
            "value": 7.89,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=16 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=32 throughput (tok/s)",
            "value": 3641.28,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=32 Total Tput (tok/s)",
            "value": 4093.38,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=32 TTFT (ms)",
            "value": 99.82,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=32 TPOT (ms)",
            "value": 8.53,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=32 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=4 throughput (tok/s)",
            "value": 511.45,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=4 Total Tput (tok/s)",
            "value": 576.72,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=4 TTFT (ms)",
            "value": 91.4,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=4 TPOT (ms)",
            "value": 7.68,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=4 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=64 throughput (tok/s)",
            "value": 6641.58,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=64 Total Tput (tok/s)",
            "value": 7470.84,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=64 TTFT (ms)",
            "value": 117.05,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=64 TPOT (ms)",
            "value": 9.26,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=64 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=8 throughput (tok/s)",
            "value": 987.09,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=8 Total Tput (tok/s)",
            "value": 1110.81,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=8 TTFT (ms)",
            "value": 90.77,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=8 TPOT (ms)",
            "value": 7.86,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=8 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=16 throughput (tok/s)",
            "value": 1651.44,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=16 Total Tput (tok/s)",
            "value": 14903.85,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=16 TTFT (ms)",
            "value": 198.79,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=16 TPOT (ms)",
            "value": 9.09,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=16 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=32 throughput (tok/s)",
            "value": 2817.07,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=32 Total Tput (tok/s)",
            "value": 25191.15,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=32 TTFT (ms)",
            "value": 313.1,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=32 TPOT (ms)",
            "value": 10.63,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=32 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=4 throughput (tok/s)",
            "value": 486.64,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=4 Total Tput (tok/s)",
            "value": 4374.58,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=4 TTFT (ms)",
            "value": 128.3,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=4 TPOT (ms)",
            "value": 7.87,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=4 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=64 throughput (tok/s)",
            "value": 4469.79,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=64 Total Tput (tok/s)",
            "value": 40289.73,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=64 TTFT (ms)",
            "value": 447.75,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=64 TPOT (ms)",
            "value": 13.49,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=64 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=8 throughput (tok/s)",
            "value": 925.21,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=8 Total Tput (tok/s)",
            "value": 8230.15,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=8 TTFT (ms)",
            "value": 154.88,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=8 TPOT (ms)",
            "value": 8.32,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23893168143 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=8 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lihaoyang0109@gmail.com",
            "name": "haoyangli0109",
            "username": "haoyangli0109"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "464ce6751e52b8f278b39cd03434005dc81dda28",
          "message": "WIP (#411)\n\nSigned-off-by: Haoyang Li <lihaoyang0109@gmail.com>",
          "timestamp": "2026-04-02T20:09:37+08:00",
          "tree_id": "8dd6541b9438fd0eed597bd6c3c6a6af1715297a",
          "url": "https://github.com/ROCm/ATOM/commit/464ce6751e52b8f278b39cd03434005dc81dda28"
        },
        "date": 1775135281673,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM::DeepSeek-R1-0528 accuracy (GSM8K)",
            "value": 0.9522,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23899663301 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (GSM8K 3-shot flexible-extract) | strict-match: 0.9477 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528 MTP accuracy (GSM8K)",
            "value": 0.9447,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23899663301 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: Same base model as DeepSeek-R1-0528 FP8 | strict-match: 0.9416 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 accuracy (GSM8K)",
            "value": 0.9439,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23899663301 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9393 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 MTP accuracy (GSM8K)",
            "value": 0.931,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23899663301 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9257 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::Kimi-K2.5-MXFP4 accuracy (GSM8K)",
            "value": 0.9303,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23899663301 | Threshold: 0.93 | Baseline: 0.9409 | BaselineModel: moonshotai/Kimi-K2.5 | BaselineNote: HF: amd/Kimi-K2.5-MXFP4 card shows Kimi-K2.5 baseline=0.9409 | strict-match: 0.931 | fewshot: 3 | Model: /models/amd/Kimi-K2.5-MXFP4"
          },
          {
            "name": "ATOM::Llama-3.3-70B-Instruct-MXFP4-Preview accuracy (GSM8K)",
            "value": 0.9143,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23899663301 | Threshold: 0.88 | BaselineModel: meta-llama/Llama-3.3-70B-Instruct | BaselineNote: HF page inaccessible; needs CI measurement of baseline | strict-match: 0.6202 | fewshot: 3 | Model: /models/amd/Llama-3.3-70B-Instruct-MXFP4-Preview"
          },
          {
            "name": "ATOM::Meta-Llama-3-8B-Instruct accuracy (GSM8K)",
            "value": 0.7286,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23899663301 | Threshold: 0.73 | BaselineModel: meta-llama/Meta-Llama-3-8B-Instruct | BaselineNote: HF reports 0.796 but 8-shot CoT; CI uses 3-shot, not comparable | strict-match: 0.7271 | fewshot: 3 | Model: /models/meta-llama/Meta-Llama-3-8B-Instruct"
          },
          {
            "name": "ATOM::Qwen3-235B-A22B-Instruct-2507-FP8 accuracy (GSM8K)",
            "value": 0.9014,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23899663301 | Threshold: 0.87 | Baseline: 0.909 | BaselineModel: Qwen/Qwen3-235B-A22B-Instruct-2507 | BaselineNote: HF: amd/Qwen3-235B-A22B-Instruct-2507-MXFP4 card shows baseline=0.909 | strict-match: 0.8848 | fewshot: 3 | Model: /models/Qwen/Qwen3-235B-A22B-Instruct-2507-FP8"
          },
          {
            "name": "ATOM::Qwen3-Next-80B-A3B-Thinking accuracy (GSM8K)",
            "value": 0.6907,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23899663301 | Threshold: 0.65 | BaselineModel: Qwen/Qwen3-Next-80B-A3B-Thinking | BaselineNote: No public GSM8K baseline; HF card has no GSM8K | strict-match: 0.793 | fewshot: 3 | Model: /models/Qwen/Qwen3-Next-80B-A3B-Thinking"
          },
          {
            "name": "ATOM::gpt-oss-120b (2 GPUs) accuracy (GSM8K)",
            "value": 0.4071,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23899663301 | Threshold: 0.38 | BaselineModel: openai/gpt-oss-120b | BaselineNote: No public GSM8K baseline available | strict-match: 0.232 | fewshot: 3 | Model: /models/openai/gpt-oss-120b"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "haoyangli0109",
            "username": "haoyangli0109",
            "email": "lihaoyang0109@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "464ce6751e52b8f278b39cd03434005dc81dda28",
          "message": "WIP (#411)\n\nSigned-off-by: Haoyang Li <lihaoyang0109@gmail.com>",
          "timestamp": "2026-04-02T12:09:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/464ce6751e52b8f278b39cd03434005dc81dda28"
        },
        "date": 1775137437746,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "GLM-5-FP8 1024/1024 c=128 throughput (tok/s)",
            "value": 2930,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23902037281 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=128 Total Tput (tok/s)",
            "value": 5866.45,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23902037281 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=128 TTFT (ms)",
            "value": 411.35,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23902037281 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=128 TPOT (ms)",
            "value": 42.06,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23902037281 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=16 throughput (tok/s)",
            "value": 700.85,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23902037281 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=16 Total Tput (tok/s)",
            "value": 1409.16,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23902037281 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=16 TTFT (ms)",
            "value": 163.06,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23902037281 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=16 TPOT (ms)",
            "value": 22.14,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23902037281 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=2 throughput (tok/s)",
            "value": 109.22,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23902037281 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=2 Total Tput (tok/s)",
            "value": 216.44,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23902037281 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=2 TTFT (ms)",
            "value": 117.23,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23902037281 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=2 TPOT (ms)",
            "value": 18.15,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23902037281 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=2 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=256 throughput (tok/s)",
            "value": 4217.86,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23902037281 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=256 Total Tput (tok/s)",
            "value": 8431.64,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23902037281 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=256 TTFT (ms)",
            "value": 633.57,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23902037281 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=256 TPOT (ms)",
            "value": 58.57,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23902037281 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=256 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=32 throughput (tok/s)",
            "value": 1129.17,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23902037281 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=32 Total Tput (tok/s)",
            "value": 2254.78,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23902037281 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=32 TTFT (ms)",
            "value": 590.02,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23902037281 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=32 TPOT (ms)",
            "value": 26.99,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23902037281 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=4 throughput (tok/s)",
            "value": 206.67,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23902037281 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=4 Total Tput (tok/s)",
            "value": 415.36,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23902037281 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=4 TTFT (ms)",
            "value": 125.66,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23902037281 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=4 TPOT (ms)",
            "value": 18.62,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23902037281 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=64 throughput (tok/s)",
            "value": 1868.43,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23902037281 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=64 Total Tput (tok/s)",
            "value": 3737.7,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23902037281 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=64 TTFT (ms)",
            "value": 270.44,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23902037281 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=64 TPOT (ms)",
            "value": 32.93,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23902037281 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=8 throughput (tok/s)",
            "value": 376.96,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23902037281 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=8 Total Tput (tok/s)",
            "value": 751.14,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23902037281 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=8 TTFT (ms)",
            "value": 135.3,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23902037281 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=8 TPOT (ms)",
            "value": 20.63,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23902037281 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=8 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lihaoyang0109@gmail.com",
            "name": "haoyangli0109",
            "username": "haoyangli0109"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "464ce6751e52b8f278b39cd03434005dc81dda28",
          "message": "WIP (#411)\n\nSigned-off-by: Haoyang Li <lihaoyang0109@gmail.com>",
          "timestamp": "2026-04-02T20:09:37+08:00",
          "tree_id": "8dd6541b9438fd0eed597bd6c3c6a6af1715297a",
          "url": "https://github.com/ROCm/ATOM/commit/464ce6751e52b8f278b39cd03434005dc81dda28"
        },
        "date": 1775138542364,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM::DeepSeek-R1-0528 accuracy (GSM8K)",
            "value": 0.9522,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23899663301 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (GSM8K 3-shot flexible-extract) | strict-match: 0.9477 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528 MTP accuracy (GSM8K)",
            "value": 0.9447,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23899663301 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: Same base model as DeepSeek-R1-0528 FP8 | strict-match: 0.9416 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 accuracy (GSM8K)",
            "value": 0.9439,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23899663301 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9393 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 MTP accuracy (GSM8K)",
            "value": 0.931,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23899663301 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9257 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::GLM-5-FP8 accuracy (GSM8K)",
            "value": 0.9454,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23899663301 | Threshold: 0.93 | Baseline: 0.9545 | BaselineModel: zai-org/GLM-5 | BaselineNote: HF: amd/GLM-5-MXFP4 card shows GLM-5 baseline=0.9545 (5-shot) | strict-match: 0.9515 | fewshot: 3 | Model: /models/zai-org/GLM-5-FP8"
          },
          {
            "name": "ATOM::Kimi-K2.5-MXFP4 accuracy (GSM8K)",
            "value": 0.9303,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23899663301 | Threshold: 0.93 | Baseline: 0.9409 | BaselineModel: moonshotai/Kimi-K2.5 | BaselineNote: HF: amd/Kimi-K2.5-MXFP4 card shows Kimi-K2.5 baseline=0.9409 | strict-match: 0.931 | fewshot: 3 | Model: /models/amd/Kimi-K2.5-MXFP4"
          },
          {
            "name": "ATOM::Llama-3.3-70B-Instruct-MXFP4-Preview accuracy (GSM8K)",
            "value": 0.9143,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23899663301 | Threshold: 0.88 | BaselineModel: meta-llama/Llama-3.3-70B-Instruct | BaselineNote: HF page inaccessible; needs CI measurement of baseline | strict-match: 0.6202 | fewshot: 3 | Model: /models/amd/Llama-3.3-70B-Instruct-MXFP4-Preview"
          },
          {
            "name": "ATOM::Meta-Llama-3-8B-Instruct accuracy (GSM8K)",
            "value": 0.7286,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23899663301 | Threshold: 0.73 | BaselineModel: meta-llama/Meta-Llama-3-8B-Instruct | BaselineNote: HF reports 0.796 but 8-shot CoT; CI uses 3-shot, not comparable | strict-match: 0.7271 | fewshot: 3 | Model: /models/meta-llama/Meta-Llama-3-8B-Instruct"
          },
          {
            "name": "ATOM::Qwen3-235B-A22B-Instruct-2507-FP8 accuracy (GSM8K)",
            "value": 0.9014,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23899663301 | Threshold: 0.87 | Baseline: 0.909 | BaselineModel: Qwen/Qwen3-235B-A22B-Instruct-2507 | BaselineNote: HF: amd/Qwen3-235B-A22B-Instruct-2507-MXFP4 card shows baseline=0.909 | strict-match: 0.8848 | fewshot: 3 | Model: /models/Qwen/Qwen3-235B-A22B-Instruct-2507-FP8"
          },
          {
            "name": "ATOM::Qwen3-Next-80B-A3B-Thinking accuracy (GSM8K)",
            "value": 0.6907,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23899663301 | Threshold: 0.65 | BaselineModel: Qwen/Qwen3-Next-80B-A3B-Thinking | BaselineNote: No public GSM8K baseline; HF card has no GSM8K | strict-match: 0.793 | fewshot: 3 | Model: /models/Qwen/Qwen3-Next-80B-A3B-Thinking"
          },
          {
            "name": "ATOM::gpt-oss-120b (2 GPUs) accuracy (GSM8K)",
            "value": 0.4071,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23899663301 | Threshold: 0.38 | BaselineModel: openai/gpt-oss-120b | BaselineNote: No public GSM8K baseline available | strict-match: 0.232 | fewshot: 3 | Model: /models/openai/gpt-oss-120b"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "74e43a045041cb006c1288f074d624649710874e",
          "message": "align weight cache policy with atom native ci\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-02T13:45:35Z",
          "url": "https://github.com/ROCm/ATOM/commit/74e43a045041cb006c1288f074d624649710874e"
        },
        "date": 1775143062524,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=16 throughput (tok/s)",
            "value": 2418.26,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=16 Total Tput (tok/s)",
            "value": 4862.26,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=16 TTFT (ms)",
            "value": 71.26,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=16 TPOT (ms)",
            "value": 6.41,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=16 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "74e43a045041cb006c1288f074d624649710874e",
          "message": "align weight cache policy with atom native ci\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-02T13:45:35Z",
          "url": "https://github.com/ROCm/ATOM/commit/74e43a045041cb006c1288f074d624649710874e"
        },
        "date": 1775143155449,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=64 throughput (tok/s)",
            "value": 6006.87,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=64 Total Tput (tok/s)",
            "value": 12016.46,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=64 TTFT (ms)",
            "value": 121.68,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=64 TPOT (ms)",
            "value": 10.27,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=64 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "74e43a045041cb006c1288f074d624649710874e",
          "message": "align weight cache policy with atom native ci\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-02T13:45:35Z",
          "url": "https://github.com/ROCm/ATOM/commit/74e43a045041cb006c1288f074d624649710874e"
        },
        "date": 1775143285464,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=64 throughput (tok/s)",
            "value": 3955.69,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=64 Total Tput (tok/s)",
            "value": 35655.73,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=64 TTFT (ms)",
            "value": 538.03,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=64 TPOT (ms)",
            "value": 15.33,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=64 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "74e43a045041cb006c1288f074d624649710874e",
          "message": "align weight cache policy with atom native ci\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-02T13:45:35Z",
          "url": "https://github.com/ROCm/ATOM/commit/74e43a045041cb006c1288f074d624649710874e"
        },
        "date": 1775143378062,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=4 throughput (tok/s)",
            "value": 916.38,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=4 Total Tput (tok/s)",
            "value": 1033.32,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=4 TTFT (ms)",
            "value": 50.59,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=4 TPOT (ms)",
            "value": 4.29,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=4 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "74e43a045041cb006c1288f074d624649710874e",
          "message": "align weight cache policy with atom native ci\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-02T13:45:35Z",
          "url": "https://github.com/ROCm/ATOM/commit/74e43a045041cb006c1288f074d624649710874e"
        },
        "date": 1775143448137,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=8 throughput (tok/s)",
            "value": 1522.44,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=8 Total Tput (tok/s)",
            "value": 1713.25,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=8 TTFT (ms)",
            "value": 59.1,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=8 TPOT (ms)",
            "value": 5.12,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=8 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "74e43a045041cb006c1288f074d624649710874e",
          "message": "align weight cache policy with atom native ci\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-02T13:45:35Z",
          "url": "https://github.com/ROCm/ATOM/commit/74e43a045041cb006c1288f074d624649710874e"
        },
        "date": 1775143577554,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=4 throughput (tok/s)",
            "value": 834.98,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=4 Total Tput (tok/s)",
            "value": 7505.93,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=4 TTFT (ms)",
            "value": 150.88,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=4 TPOT (ms)",
            "value": 4.52,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=4 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "74e43a045041cb006c1288f074d624649710874e",
          "message": "align weight cache policy with atom native ci\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-02T13:45:35Z",
          "url": "https://github.com/ROCm/ATOM/commit/74e43a045041cb006c1288f074d624649710874e"
        },
        "date": 1775143753172,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=16 throughput (tok/s)",
            "value": 1978.41,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=16 Total Tput (tok/s)",
            "value": 17854.63,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=16 TTFT (ms)",
            "value": 273.94,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=16 TPOT (ms)",
            "value": 7.57,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=16 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "74e43a045041cb006c1288f074d624649710874e",
          "message": "align weight cache policy with atom native ci\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-02T13:45:35Z",
          "url": "https://github.com/ROCm/ATOM/commit/74e43a045041cb006c1288f074d624649710874e"
        },
        "date": 1775143897010,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=16 throughput (tok/s)",
            "value": 2597.48,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=16 Total Tput (tok/s)",
            "value": 2923.37,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=16 TTFT (ms)",
            "value": 60.19,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=16 TPOT (ms)",
            "value": 6,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=16 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "74e43a045041cb006c1288f074d624649710874e",
          "message": "align weight cache policy with atom native ci\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-02T13:45:35Z",
          "url": "https://github.com/ROCm/ATOM/commit/74e43a045041cb006c1288f074d624649710874e"
        },
        "date": 1775143925928,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=8 throughput (tok/s)",
            "value": 1334.29,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=8 Total Tput (tok/s)",
            "value": 11869.12,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=8 TTFT (ms)",
            "value": 193.7,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=8 TPOT (ms)",
            "value": 5.69,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=8 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "74e43a045041cb006c1288f074d624649710874e",
          "message": "align weight cache policy with atom native ci\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-02T13:45:35Z",
          "url": "https://github.com/ROCm/ATOM/commit/74e43a045041cb006c1288f074d624649710874e"
        },
        "date": 1775144104004,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=32 throughput (tok/s)",
            "value": 2861.83,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=32 Total Tput (tok/s)",
            "value": 25591.41,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=32 TTFT (ms)",
            "value": 385.65,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=32 TPOT (ms)",
            "value": 10.53,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=32 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "74e43a045041cb006c1288f074d624649710874e",
          "message": "align weight cache policy with atom native ci\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-02T13:45:35Z",
          "url": "https://github.com/ROCm/ATOM/commit/74e43a045041cb006c1288f074d624649710874e"
        },
        "date": 1775144192158,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=8 throughput (tok/s)",
            "value": 1488.88,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=8 Total Tput (tok/s)",
            "value": 2966.77,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=8 TTFT (ms)",
            "value": 53.78,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=8 TPOT (ms)",
            "value": 5.21,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=8 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "74e43a045041cb006c1288f074d624649710874e",
          "message": "align weight cache policy with atom native ci\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-02T13:45:35Z",
          "url": "https://github.com/ROCm/ATOM/commit/74e43a045041cb006c1288f074d624649710874e"
        },
        "date": 1775144199720,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=64 throughput (tok/s)",
            "value": 6146.4,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=64 Total Tput (tok/s)",
            "value": 6913.83,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=64 TTFT (ms)",
            "value": 120.35,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=64 TPOT (ms)",
            "value": 10.14,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=64 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "74e43a045041cb006c1288f074d624649710874e",
          "message": "align weight cache policy with atom native ci\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-02T13:45:35Z",
          "url": "https://github.com/ROCm/ATOM/commit/74e43a045041cb006c1288f074d624649710874e"
        },
        "date": 1775144221382,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=32 throughput (tok/s)",
            "value": 3776.62,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=32 Total Tput (tok/s)",
            "value": 7541.29,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=32 TTFT (ms)",
            "value": 80.4,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=32 TPOT (ms)",
            "value": 8.21,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=32 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "74e43a045041cb006c1288f074d624649710874e",
          "message": "align weight cache policy with atom native ci\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-02T13:45:35Z",
          "url": "https://github.com/ROCm/ATOM/commit/74e43a045041cb006c1288f074d624649710874e"
        },
        "date": 1775144302065,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=32 throughput (tok/s)",
            "value": 3956.64,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=32 Total Tput (tok/s)",
            "value": 4447.9,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=32 TTFT (ms)",
            "value": 91.44,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=32 TPOT (ms)",
            "value": 7.88,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=32 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "74e43a045041cb006c1288f074d624649710874e",
          "message": "align weight cache policy with atom native ci\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-02T13:45:35Z",
          "url": "https://github.com/ROCm/ATOM/commit/74e43a045041cb006c1288f074d624649710874e"
        },
        "date": 1775144347728,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=4 throughput (tok/s)",
            "value": 898.74,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=4 Total Tput (tok/s)",
            "value": 1806.27,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=4 TTFT (ms)",
            "value": 50.42,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=4 TPOT (ms)",
            "value": 4.26,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=4 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "74e43a045041cb006c1288f074d624649710874e",
          "message": "align weight cache policy with atom native ci\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-02T13:45:35Z",
          "url": "https://github.com/ROCm/ATOM/commit/74e43a045041cb006c1288f074d624649710874e"
        },
        "date": 1775144392092,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=16 throughput (tok/s)",
            "value": 2418.26,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=16 Total Tput (tok/s)",
            "value": 4862.26,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=16 TTFT (ms)",
            "value": 71.26,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=16 TPOT (ms)",
            "value": 6.41,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=16 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=32 throughput (tok/s)",
            "value": 3776.62,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=32 Total Tput (tok/s)",
            "value": 7541.29,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=32 TTFT (ms)",
            "value": 80.4,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=32 TPOT (ms)",
            "value": 8.21,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=32 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=4 throughput (tok/s)",
            "value": 898.74,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=4 Total Tput (tok/s)",
            "value": 1806.27,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=4 TTFT (ms)",
            "value": 50.42,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=4 TPOT (ms)",
            "value": 4.26,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=4 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=64 throughput (tok/s)",
            "value": 6006.87,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=64 Total Tput (tok/s)",
            "value": 12016.46,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=64 TTFT (ms)",
            "value": 121.68,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=64 TPOT (ms)",
            "value": 10.27,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=64 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=8 throughput (tok/s)",
            "value": 1488.88,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=8 Total Tput (tok/s)",
            "value": 2966.77,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=8 TTFT (ms)",
            "value": 53.78,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=8 TPOT (ms)",
            "value": 5.21,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/1024 c=8 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=16 throughput (tok/s)",
            "value": 2597.48,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=16 Total Tput (tok/s)",
            "value": 2923.37,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=16 TTFT (ms)",
            "value": 60.19,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=16 TPOT (ms)",
            "value": 6,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=16 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=32 throughput (tok/s)",
            "value": 3956.64,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=32 Total Tput (tok/s)",
            "value": 4447.9,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=32 TTFT (ms)",
            "value": 91.44,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=32 TPOT (ms)",
            "value": 7.88,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=32 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=4 throughput (tok/s)",
            "value": 916.38,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=4 Total Tput (tok/s)",
            "value": 1033.32,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=4 TTFT (ms)",
            "value": 50.59,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=4 TPOT (ms)",
            "value": 4.29,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=4 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=64 throughput (tok/s)",
            "value": 6146.4,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=64 Total Tput (tok/s)",
            "value": 6913.83,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=64 TTFT (ms)",
            "value": 120.35,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=64 TPOT (ms)",
            "value": 10.14,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=64 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=8 throughput (tok/s)",
            "value": 1522.44,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=8 Total Tput (tok/s)",
            "value": 1713.25,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=8 TTFT (ms)",
            "value": 59.1,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=8 TPOT (ms)",
            "value": 5.12,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 1024/8192 c=8 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=16 throughput (tok/s)",
            "value": 1978.41,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=16 Total Tput (tok/s)",
            "value": 17854.63,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=16 TTFT (ms)",
            "value": 273.94,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=16 TPOT (ms)",
            "value": 7.57,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=16 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=32 throughput (tok/s)",
            "value": 2861.83,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=32 Total Tput (tok/s)",
            "value": 25591.41,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=32 TTFT (ms)",
            "value": 385.65,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=32 TPOT (ms)",
            "value": 10.53,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=32 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=4 throughput (tok/s)",
            "value": 834.98,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=4 Total Tput (tok/s)",
            "value": 7505.93,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=4 TTFT (ms)",
            "value": 150.88,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=4 TPOT (ms)",
            "value": 4.52,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=4 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=64 throughput (tok/s)",
            "value": 3955.69,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=64 Total Tput (tok/s)",
            "value": 35655.73,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=64 TTFT (ms)",
            "value": 538.03,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=64 TPOT (ms)",
            "value": 15.33,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=64 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=8 throughput (tok/s)",
            "value": 1334.29,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=8 Total Tput (tok/s)",
            "value": 11869.12,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=8 TTFT (ms)",
            "value": 193.7,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=8 TPOT (ms)",
            "value": 5.69,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23907512805 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260401"
          },
          {
            "name": "ATOM-vLLM::gpt-oss-120b 8192/1024 c=8 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lihaoyang0109@gmail.com",
            "name": "haoyangli0109",
            "username": "haoyangli0109"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "464ce6751e52b8f278b39cd03434005dc81dda28",
          "message": "WIP (#411)\n\nSigned-off-by: Haoyang Li <lihaoyang0109@gmail.com>",
          "timestamp": "2026-04-02T20:09:37+08:00",
          "tree_id": "8dd6541b9438fd0eed597bd6c3c6a6af1715297a",
          "url": "https://github.com/ROCm/ATOM/commit/464ce6751e52b8f278b39cd03434005dc81dda28"
        },
        "date": 1775160579330,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM::DeepSeek-R1-0528 accuracy (GSM8K)",
            "value": 0.9522,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23899663301 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (GSM8K 3-shot flexible-extract) | strict-match: 0.9477 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528 MTP accuracy (GSM8K)",
            "value": 0.9447,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23899663301 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: Same base model as DeepSeek-R1-0528 FP8 | strict-match: 0.9416 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 accuracy (GSM8K)",
            "value": 0.9439,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23899663301 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9393 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 MTP accuracy (GSM8K)",
            "value": 0.931,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23899663301 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9257 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::GLM-5-FP8 accuracy (GSM8K)",
            "value": 0.9454,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23899663301 | Threshold: 0.93 | Baseline: 0.9545 | BaselineModel: zai-org/GLM-5 | BaselineNote: HF: amd/GLM-5-MXFP4 card shows GLM-5 baseline=0.9545 (5-shot) | strict-match: 0.9515 | fewshot: 3 | Model: /models/zai-org/GLM-5-FP8"
          },
          {
            "name": "ATOM::Kimi-K2.5-MXFP4 accuracy (GSM8K)",
            "value": 0.9303,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23899663301 | Threshold: 0.93 | Baseline: 0.9409 | BaselineModel: moonshotai/Kimi-K2.5 | BaselineNote: HF: amd/Kimi-K2.5-MXFP4 card shows Kimi-K2.5 baseline=0.9409 | strict-match: 0.931 | fewshot: 3 | Model: /models/amd/Kimi-K2.5-MXFP4"
          },
          {
            "name": "ATOM::Llama-3.3-70B-Instruct-MXFP4-Preview accuracy (GSM8K)",
            "value": 0.9143,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23899663301 | Threshold: 0.88 | BaselineModel: meta-llama/Llama-3.3-70B-Instruct | BaselineNote: HF page inaccessible; needs CI measurement of baseline | strict-match: 0.6202 | fewshot: 3 | Model: /models/amd/Llama-3.3-70B-Instruct-MXFP4-Preview"
          },
          {
            "name": "ATOM::Meta-Llama-3-8B-Instruct accuracy (GSM8K)",
            "value": 0.7286,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23899663301 | Threshold: 0.73 | BaselineModel: meta-llama/Meta-Llama-3-8B-Instruct | BaselineNote: HF reports 0.796 but 8-shot CoT; CI uses 3-shot, not comparable | strict-match: 0.7271 | fewshot: 3 | Model: /models/meta-llama/Meta-Llama-3-8B-Instruct"
          },
          {
            "name": "ATOM::Qwen3-235B-A22B-Instruct-2507-FP8 accuracy (GSM8K)",
            "value": 0.9014,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23899663301 | Threshold: 0.87 | Baseline: 0.909 | BaselineModel: Qwen/Qwen3-235B-A22B-Instruct-2507 | BaselineNote: HF: amd/Qwen3-235B-A22B-Instruct-2507-MXFP4 card shows baseline=0.909 | strict-match: 0.8848 | fewshot: 3 | Model: /models/Qwen/Qwen3-235B-A22B-Instruct-2507-FP8"
          },
          {
            "name": "ATOM::Qwen3-Next-80B-A3B-Thinking accuracy (GSM8K)",
            "value": 0.6907,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23899663301 | Threshold: 0.65 | BaselineModel: Qwen/Qwen3-Next-80B-A3B-Thinking | BaselineNote: No public GSM8K baseline; HF card has no GSM8K | strict-match: 0.793 | fewshot: 3 | Model: /models/Qwen/Qwen3-Next-80B-A3B-Thinking"
          },
          {
            "name": "ATOM::gpt-oss-120b (2 GPUs) accuracy (GSM8K)",
            "value": 0.4071,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23899663301 | Threshold: 0.38 | BaselineModel: openai/gpt-oss-120b | BaselineNote: No public GSM8K baseline available | strict-match: 0.232 | fewshot: 3 | Model: /models/openai/gpt-oss-120b"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xin Huang",
            "username": "gyohuangxin",
            "email": "Xin.Huang@amd.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8d04949f446c712951d6004ef9601b11f4e97085",
          "message": "CI: improve atom test image and model cache handling (#476)\n\n* CI: Update atom test to use internal registry cache\n\n* CI: keep forced pulls on predownload runner only\n\n* CI: serialize shared model downloads in atom test\n\n* CI: skip shared model lock on baremetal runner\n\n* CI: move model download locking into container",
          "timestamp": "2026-04-02T17:10:03Z",
          "url": "https://github.com/ROCm/ATOM/commit/8d04949f446c712951d6004ef9601b11f4e97085"
        },
        "date": 1775166265764,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "MiniMax-M2.5 1024/1024 c=1 throughput (tok/s)",
            "value": 113.92,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=1 Total Tput (tok/s)",
            "value": 227.03,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=1 TTFT (ms)",
            "value": 72.42,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=1 TPOT (ms)",
            "value": 8.71,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=1 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=128 throughput (tok/s)",
            "value": 3749.24,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=128 Total Tput (tok/s)",
            "value": 7506.71,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=128 TTFT (ms)",
            "value": 314.25,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=128 TPOT (ms)",
            "value": 33,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=128 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=16 throughput (tok/s)",
            "value": 1097.96,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=16 Total Tput (tok/s)",
            "value": 2207.6,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=16 TTFT (ms)",
            "value": 125.44,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=16 TPOT (ms)",
            "value": 14.13,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=16 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=2 throughput (tok/s)",
            "value": 222.39,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=2 Total Tput (tok/s)",
            "value": 440.71,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=2 TTFT (ms)",
            "value": 74.51,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=2 TPOT (ms)",
            "value": 8.89,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=2 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=256 throughput (tok/s)",
            "value": 5476.09,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=256 Total Tput (tok/s)",
            "value": 10946.89,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=256 TTFT (ms)",
            "value": 552.65,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=256 TPOT (ms)",
            "value": 45.03,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=256 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=32 throughput (tok/s)",
            "value": 1719.56,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=32 Total Tput (tok/s)",
            "value": 3433.68,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=32 TTFT (ms)",
            "value": 146.48,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=32 TPOT (ms)",
            "value": 18.02,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=32 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=4 throughput (tok/s)",
            "value": 399.72,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=4 Total Tput (tok/s)",
            "value": 803.35,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=4 TTFT (ms)",
            "value": 76.58,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=4 TPOT (ms)",
            "value": 9.62,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=4 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=64 throughput (tok/s)",
            "value": 2377.37,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=64 Total Tput (tok/s)",
            "value": 4755.81,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=64 TTFT (ms)",
            "value": 213.33,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=64 TPOT (ms)",
            "value": 26.06,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=64 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=8 throughput (tok/s)",
            "value": 658.71,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=8 Total Tput (tok/s)",
            "value": 1312.55,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=8 TTFT (ms)",
            "value": 100.89,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=8 TPOT (ms)",
            "value": 11.8,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 1024/1024 c=8 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=1 throughput (tok/s)",
            "value": 91.38,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=1 Total Tput (tok/s)",
            "value": 818.02,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=1 TTFT (ms)",
            "value": 271.12,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=1 TPOT (ms)",
            "value": 10.66,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=1 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=128 throughput (tok/s)",
            "value": 1857.45,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=128 Total Tput (tok/s)",
            "value": 16769.25,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=128 TTFT (ms)",
            "value": 1950.81,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=128 TPOT (ms)",
            "value": 65.8,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=128 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=16 throughput (tok/s)",
            "value": 800.41,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=16 Total Tput (tok/s)",
            "value": 7223.46,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=16 TTFT (ms)",
            "value": 509.88,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=16 TPOT (ms)",
            "value": 18.83,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=16 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=2 throughput (tok/s)",
            "value": 169.7,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=2 Total Tput (tok/s)",
            "value": 1512.26,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=2 TTFT (ms)",
            "value": 312.98,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=2 TPOT (ms)",
            "value": 11.42,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=2 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=256 throughput (tok/s)",
            "value": 2197.16,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=256 Total Tput (tok/s)",
            "value": 19768.71,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=256 TTFT (ms)",
            "value": 3621.14,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=256 TPOT (ms)",
            "value": 111.23,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=256 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=32 throughput (tok/s)",
            "value": 1174.08,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=32 Total Tput (tok/s)",
            "value": 10499.02,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=32 TTFT (ms)",
            "value": 737.35,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=32 TPOT (ms)",
            "value": 25.8,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=32 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=4 throughput (tok/s)",
            "value": 312.47,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=4 Total Tput (tok/s)",
            "value": 2808.94,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=4 TTFT (ms)",
            "value": 353.02,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=4 TPOT (ms)",
            "value": 12.11,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=4 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=64 throughput (tok/s)",
            "value": 1453.34,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=64 Total Tput (tok/s)",
            "value": 13100.06,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=64 TTFT (ms)",
            "value": 1157.51,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=64 TPOT (ms)",
            "value": 42.09,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=64 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=8 throughput (tok/s)",
            "value": 510.32,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=8 Total Tput (tok/s)",
            "value": 4539.56,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=8 TTFT (ms)",
            "value": 386.76,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=8 TPOT (ms)",
            "value": 15,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "MiniMax-M2.5 8192/1024 c=8 _gpu_count",
            "value": 2,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=1 throughput (tok/s)",
            "value": 96.57,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=1 Total Tput (tok/s)",
            "value": 192.46,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=1 TTFT (ms)",
            "value": 74.72,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=1 TPOT (ms)",
            "value": 10.29,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=1 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=128 throughput (tok/s)",
            "value": 4425.37,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=128 Total Tput (tok/s)",
            "value": 8860.46,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=128 TTFT (ms)",
            "value": 501.73,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=128 TPOT (ms)",
            "value": 27.63,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=16 throughput (tok/s)",
            "value": 1159.54,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=16 Total Tput (tok/s)",
            "value": 2331.43,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=16 TTFT (ms)",
            "value": 113.75,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=16 TPOT (ms)",
            "value": 13.37,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=2 throughput (tok/s)",
            "value": 193.04,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=2 Total Tput (tok/s)",
            "value": 382.56,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=2 TTFT (ms)",
            "value": 78.59,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=2 TPOT (ms)",
            "value": 10.25,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=2 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=256 throughput (tok/s)",
            "value": 6361.71,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=256 Total Tput (tok/s)",
            "value": 12717.27,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=256 TTFT (ms)",
            "value": 725.32,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=256 TPOT (ms)",
            "value": 38.46,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=256 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=32 throughput (tok/s)",
            "value": 1759.65,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=32 Total Tput (tok/s)",
            "value": 3513.73,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=32 TTFT (ms)",
            "value": 143.5,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=32 TPOT (ms)",
            "value": 17.61,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=4 throughput (tok/s)",
            "value": 330.22,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=4 Total Tput (tok/s)",
            "value": 663.68,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=4 TTFT (ms)",
            "value": 83.42,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=4 TPOT (ms)",
            "value": 11.67,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=64 throughput (tok/s)",
            "value": 2959.82,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=64 Total Tput (tok/s)",
            "value": 5920.97,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=64 TTFT (ms)",
            "value": 198.83,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=64 TPOT (ms)",
            "value": 20.79,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=8 throughput (tok/s)",
            "value": 664.35,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=8 Total Tput (tok/s)",
            "value": 1323.79,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=8 TTFT (ms)",
            "value": 93.74,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=8 TPOT (ms)",
            "value": 11.68,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=8 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=1 throughput (tok/s)",
            "value": 91.54,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=1 Total Tput (tok/s)",
            "value": 819.45,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=1 TTFT (ms)",
            "value": 273.88,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=1 TPOT (ms)",
            "value": 10.64,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=1 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=128 throughput (tok/s)",
            "value": 2275.59,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=128 Total Tput (tok/s)",
            "value": 20544.24,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=128 TTFT (ms)",
            "value": 1814.81,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=128 TPOT (ms)",
            "value": 53.45,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=16 throughput (tok/s)",
            "value": 911.72,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=16 Total Tput (tok/s)",
            "value": 8228.06,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=16 TTFT (ms)",
            "value": 429.34,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=16 TPOT (ms)",
            "value": 16.53,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=2 throughput (tok/s)",
            "value": 177.08,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=2 Total Tput (tok/s)",
            "value": 1578.01,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=2 TTFT (ms)",
            "value": 282.64,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=2 TPOT (ms)",
            "value": 10.97,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=2 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=256 throughput (tok/s)",
            "value": 2657.67,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=256 Total Tput (tok/s)",
            "value": 23912.19,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=256 TTFT (ms)",
            "value": 3350.54,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=256 TPOT (ms)",
            "value": 91.6,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=256 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=32 throughput (tok/s)",
            "value": 1255.81,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=32 Total Tput (tok/s)",
            "value": 11229.84,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=32 TTFT (ms)",
            "value": 697.3,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=32 TPOT (ms)",
            "value": 24.12,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=4 throughput (tok/s)",
            "value": 318.36,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=4 Total Tput (tok/s)",
            "value": 2861.87,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=4 TTFT (ms)",
            "value": 307.83,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=4 TPOT (ms)",
            "value": 11.92,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=64 throughput (tok/s)",
            "value": 1716.4,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=64 Total Tput (tok/s)",
            "value": 15471.24,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=64 TTFT (ms)",
            "value": 1865.74,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=64 TPOT (ms)",
            "value": 34.62,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=8 throughput (tok/s)",
            "value": 578.46,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=8 Total Tput (tok/s)",
            "value": 5145.65,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=8 TTFT (ms)",
            "value": 373.74,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=8 TPOT (ms)",
            "value": 13.18,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528 8192/1024 c=8 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=128 throughput (tok/s)",
            "value": 5279.18,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=128 Total Tput (tok/s)",
            "value": 10586.59,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=128 TTFT (ms)",
            "value": 346.67,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=128 TPOT (ms)",
            "value": 23.15,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=16 throughput (tok/s)",
            "value": 1486.78,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=16 Total Tput (tok/s)",
            "value": 2994.18,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=16 TTFT (ms)",
            "value": 131.29,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=16 TPOT (ms)",
            "value": 10.26,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=256 throughput (tok/s)",
            "value": 7345.87,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=256 Total Tput (tok/s)",
            "value": 14708.21,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=256 TTFT (ms)",
            "value": 548.99,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=256 TPOT (ms)",
            "value": 33.41,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=256 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=32 throughput (tok/s)",
            "value": 2445.12,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=32 Total Tput (tok/s)",
            "value": 4889.99,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=32 TTFT (ms)",
            "value": 177.99,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=32 TPOT (ms)",
            "value": 12.47,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=4 throughput (tok/s)",
            "value": 604.33,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=4 Total Tput (tok/s)",
            "value": 1216.43,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=4 TTFT (ms)",
            "value": 100.12,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=4 TPOT (ms)",
            "value": 6.35,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=64 throughput (tok/s)",
            "value": 3540.61,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=64 Total Tput (tok/s)",
            "value": 7094.18,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=64 TTFT (ms)",
            "value": 246.85,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=64 TPOT (ms)",
            "value": 17.31,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=8 throughput (tok/s)",
            "value": 973.87,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=8 Total Tput (tok/s)",
            "value": 1943.45,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=8 TTFT (ms)",
            "value": 117.05,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=8 TPOT (ms)",
            "value": 7.81,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=8 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=128 throughput (tok/s)",
            "value": 2653.56,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=128 Total Tput (tok/s)",
            "value": 24024.08,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=128 TTFT (ms)",
            "value": 2067.89,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=128 TPOT (ms)",
            "value": 45.3,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=16 throughput (tok/s)",
            "value": 1246.11,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=16 Total Tput (tok/s)",
            "value": 11278.59,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=16 TTFT (ms)",
            "value": 574.56,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=16 TPOT (ms)",
            "value": 11.82,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=256 throughput (tok/s)",
            "value": 3041.72,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=256 Total Tput (tok/s)",
            "value": 27444.14,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=256 TTFT (ms)",
            "value": 3716.16,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=256 TPOT (ms)",
            "value": 79.25,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=256 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=32 throughput (tok/s)",
            "value": 1722.03,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=32 Total Tput (tok/s)",
            "value": 15442.25,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=32 TTFT (ms)",
            "value": 879.24,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=32 TPOT (ms)",
            "value": 17.18,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=4 throughput (tok/s)",
            "value": 542.69,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=4 Total Tput (tok/s)",
            "value": 4891.91,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=4 TTFT (ms)",
            "value": 317.85,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=4 TPOT (ms)",
            "value": 6.8,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=64 throughput (tok/s)",
            "value": 2183.63,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=64 Total Tput (tok/s)",
            "value": 19739.11,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=64 TTFT (ms)",
            "value": 1046.77,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=64 TPOT (ms)",
            "value": 27.61,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=8 throughput (tok/s)",
            "value": 833.82,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=8 Total Tput (tok/s)",
            "value": 7436.68,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=8 TTFT (ms)",
            "value": 406.43,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=8 TPOT (ms)",
            "value": 8.73,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 8192/1024 c=8 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=1 throughput (tok/s)",
            "value": 134.9,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=1 Total Tput (tok/s)",
            "value": 268.85,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=1 TTFT (ms)",
            "value": 109.24,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=1 TPOT (ms)",
            "value": 7.3,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=1 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=128 throughput (tok/s)",
            "value": 5481,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=128 Total Tput (tok/s)",
            "value": 10974.04,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=128 TTFT (ms)",
            "value": 281.6,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=128 TPOT (ms)",
            "value": 22.45,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=16 throughput (tok/s)",
            "value": 1374.19,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=16 Total Tput (tok/s)",
            "value": 2763,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=16 TTFT (ms)",
            "value": 153.38,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=16 TPOT (ms)",
            "value": 11.24,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=2 throughput (tok/s)",
            "value": 260.8,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=2 Total Tput (tok/s)",
            "value": 516.83,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=2 TTFT (ms)",
            "value": 104.16,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=2 TPOT (ms)",
            "value": 7.54,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=2 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=256 throughput (tok/s)",
            "value": 7773.48,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=256 Total Tput (tok/s)",
            "value": 15539.45,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=256 TTFT (ms)",
            "value": 572.46,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=256 TPOT (ms)",
            "value": 31.42,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=256 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=32 throughput (tok/s)",
            "value": 2329.71,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=32 Total Tput (tok/s)",
            "value": 4652.05,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=32 TTFT (ms)",
            "value": 148.33,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=32 TPOT (ms)",
            "value": 13.24,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=4 throughput (tok/s)",
            "value": 427.62,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=4 Total Tput (tok/s)",
            "value": 859.43,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=4 TTFT (ms)",
            "value": 108.72,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=4 TPOT (ms)",
            "value": 8.96,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=64 throughput (tok/s)",
            "value": 3587.75,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=64 Total Tput (tok/s)",
            "value": 7177.11,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=64 TTFT (ms)",
            "value": 233.46,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=64 TPOT (ms)",
            "value": 17.1,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=8 throughput (tok/s)",
            "value": 818.35,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=8 Total Tput (tok/s)",
            "value": 1630.66,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=8 TTFT (ms)",
            "value": 105.37,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=8 TPOT (ms)",
            "value": 9.46,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 1024/1024 c=8 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=1 throughput (tok/s)",
            "value": 122.3,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=1 Total Tput (tok/s)",
            "value": 1094.77,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=1 TTFT (ms)",
            "value": 226.03,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=1 TPOT (ms)",
            "value": 7.94,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=1 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=128 throughput (tok/s)",
            "value": 2762.84,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=128 Total Tput (tok/s)",
            "value": 24943.16,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=128 TTFT (ms)",
            "value": 1387.76,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=128 TPOT (ms)",
            "value": 44.14,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=16 throughput (tok/s)",
            "value": 1067.94,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=16 Total Tput (tok/s)",
            "value": 9637.91,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=16 TTFT (ms)",
            "value": 480.08,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=16 TPOT (ms)",
            "value": 14.03,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=2 throughput (tok/s)",
            "value": 238.37,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=2 Total Tput (tok/s)",
            "value": 2124.25,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=2 TTFT (ms)",
            "value": 231.64,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=2 TPOT (ms)",
            "value": 8.13,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=2 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=256 throughput (tok/s)",
            "value": 3225.16,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=256 Total Tput (tok/s)",
            "value": 29018.08,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=256 TTFT (ms)",
            "value": 2673.2,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=256 TPOT (ms)",
            "value": 75.57,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=256 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=32 throughput (tok/s)",
            "value": 1639.73,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=32 Total Tput (tok/s)",
            "value": 14662.98,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=32 TTFT (ms)",
            "value": 528.96,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=32 TPOT (ms)",
            "value": 18.45,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=4 throughput (tok/s)",
            "value": 415.3,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=4 Total Tput (tok/s)",
            "value": 3733.31,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=4 TTFT (ms)",
            "value": 251.55,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=4 TPOT (ms)",
            "value": 9.13,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=64 throughput (tok/s)",
            "value": 2192.65,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=64 Total Tput (tok/s)",
            "value": 19764.1,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=64 TTFT (ms)",
            "value": 852.14,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=64 TPOT (ms)",
            "value": 27.77,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=8 throughput (tok/s)",
            "value": 712.89,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=8 Total Tput (tok/s)",
            "value": 6341.46,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=8 TTFT (ms)",
            "value": 295.99,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=8 TPOT (ms)",
            "value": 10.71,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4 8192/1024 c=8 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=128 throughput (tok/s)",
            "value": 6692.9,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=128 Total Tput (tok/s)",
            "value": 13421.1,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=128 TTFT (ms)",
            "value": 347.15,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=128 TPOT (ms)",
            "value": 18.2,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=16 throughput (tok/s)",
            "value": 1878.13,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=16 Total Tput (tok/s)",
            "value": 3782.34,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=16 TTFT (ms)",
            "value": 155.29,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=16 TPOT (ms)",
            "value": 8.03,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=256 throughput (tok/s)",
            "value": 8473.78,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=256 Total Tput (tok/s)",
            "value": 16965.31,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=256 TTFT (ms)",
            "value": 481.35,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=256 TPOT (ms)",
            "value": 28.98,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=256 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=32 throughput (tok/s)",
            "value": 2906.52,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=32 Total Tput (tok/s)",
            "value": 5812.91,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=32 TTFT (ms)",
            "value": 170.29,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=32 TPOT (ms)",
            "value": 10.5,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=4 throughput (tok/s)",
            "value": 547.58,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=4 Total Tput (tok/s)",
            "value": 1102.21,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=4 TTFT (ms)",
            "value": 96.55,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=4 TPOT (ms)",
            "value": 7.06,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=64 throughput (tok/s)",
            "value": 4809.38,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=64 Total Tput (tok/s)",
            "value": 9635.91,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=64 TTFT (ms)",
            "value": 246.82,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=64 TPOT (ms)",
            "value": 12.63,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=8 throughput (tok/s)",
            "value": 1256.16,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=8 Total Tput (tok/s)",
            "value": 2507.05,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=8 TTFT (ms)",
            "value": 130.39,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=8 TPOT (ms)",
            "value": 6.03,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 1024/1024 c=8 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=128 throughput (tok/s)",
            "value": 3305.87,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=128 Total Tput (tok/s)",
            "value": 29934.23,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=128 TTFT (ms)",
            "value": 1690.33,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=128 TPOT (ms)",
            "value": 36.32,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=16 throughput (tok/s)",
            "value": 1411.43,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=16 Total Tput (tok/s)",
            "value": 12773.84,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=16 TTFT (ms)",
            "value": 404.28,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=16 TPOT (ms)",
            "value": 10.61,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=256 throughput (tok/s)",
            "value": 3613.37,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=256 Total Tput (tok/s)",
            "value": 32606.9,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=256 TTFT (ms)",
            "value": 2775.75,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=256 TPOT (ms)",
            "value": 67.07,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=256 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=32 throughput (tok/s)",
            "value": 1923.92,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=32 Total Tput (tok/s)",
            "value": 17257,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=32 TTFT (ms)",
            "value": 639.05,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=32 TPOT (ms)",
            "value": 15.46,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=4 throughput (tok/s)",
            "value": 552.17,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=4 Total Tput (tok/s)",
            "value": 4978.82,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=4 TTFT (ms)",
            "value": 271.58,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=4 TPOT (ms)",
            "value": 6.68,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=64 throughput (tok/s)",
            "value": 2675.34,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=64 Total Tput (tok/s)",
            "value": 24183.61,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=64 TTFT (ms)",
            "value": 921.85,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=64 TPOT (ms)",
            "value": 22.47,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=8 throughput (tok/s)",
            "value": 1027.31,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=8 Total Tput (tok/s)",
            "value": 9167.73,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=8 TTFT (ms)",
            "value": 325.88,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=8 TPOT (ms)",
            "value": 7.12,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "DeepSeek-R1-0528-MXFP4-MTP-MoEFP4-mtp3 8192/1024 c=8 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=128 throughput (tok/s)",
            "value": 2961.84,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=128 Total Tput (tok/s)",
            "value": 5930.18,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=128 TTFT (ms)",
            "value": 378.38,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=128 TPOT (ms)",
            "value": 41.56,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=16 throughput (tok/s)",
            "value": 676.33,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=16 Total Tput (tok/s)",
            "value": 1359.85,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=16 TTFT (ms)",
            "value": 160.12,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=16 TPOT (ms)",
            "value": 22.97,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=2 throughput (tok/s)",
            "value": 110.22,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=2 Total Tput (tok/s)",
            "value": 218.42,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=2 TTFT (ms)",
            "value": 124.05,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=2 TPOT (ms)",
            "value": 17.98,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=2 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=256 throughput (tok/s)",
            "value": 4207.36,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=256 Total Tput (tok/s)",
            "value": 8410.65,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=256 TTFT (ms)",
            "value": 621.07,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=256 TPOT (ms)",
            "value": 58.75,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=256 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=32 throughput (tok/s)",
            "value": 1149.82,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=32 Total Tput (tok/s)",
            "value": 2296,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=32 TTFT (ms)",
            "value": 206.06,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=32 TPOT (ms)",
            "value": 26.88,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=4 throughput (tok/s)",
            "value": 208.81,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=4 Total Tput (tok/s)",
            "value": 419.65,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=4 TTFT (ms)",
            "value": 126.67,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=4 TPOT (ms)",
            "value": 18.42,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=64 throughput (tok/s)",
            "value": 1858,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=64 Total Tput (tok/s)",
            "value": 3716.84,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=64 TTFT (ms)",
            "value": 269.52,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=64 TPOT (ms)",
            "value": 33.13,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=8 throughput (tok/s)",
            "value": 385.65,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=8 Total Tput (tok/s)",
            "value": 768.45,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=8 TTFT (ms)",
            "value": 139.08,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=8 TPOT (ms)",
            "value": 20.14,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=8 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=128 throughput (tok/s)",
            "value": 1478.25,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=128 Total Tput (tok/s)",
            "value": 13345.78,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=128 TTFT (ms)",
            "value": 3223.78,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=128 TPOT (ms)",
            "value": 81.77,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=16 throughput (tok/s)",
            "value": 541.03,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=16 Total Tput (tok/s)",
            "value": 4882.64,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=16 TTFT (ms)",
            "value": 798.48,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=16 TPOT (ms)",
            "value": 27.74,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=2 throughput (tok/s)",
            "value": 101.5,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=2 Total Tput (tok/s)",
            "value": 904.47,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=2 TTFT (ms)",
            "value": 476.13,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=2 TPOT (ms)",
            "value": 19.15,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=2 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=256 throughput (tok/s)",
            "value": 1752.62,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=256 Total Tput (tok/s)",
            "value": 15769.08,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=256 TTFT (ms)",
            "value": 5974.2,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=256 TPOT (ms)",
            "value": 137.86,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=256 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=32 throughput (tok/s)",
            "value": 852.85,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=32 Total Tput (tok/s)",
            "value": 7626.44,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=32 TTFT (ms)",
            "value": 1135.78,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=32 TPOT (ms)",
            "value": 35.24,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=4 throughput (tok/s)",
            "value": 182.67,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=4 Total Tput (tok/s)",
            "value": 1642.14,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=4 TTFT (ms)",
            "value": 519.66,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=4 TPOT (ms)",
            "value": 20.81,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=64 throughput (tok/s)",
            "value": 1142.71,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=64 Total Tput (tok/s)",
            "value": 10300.11,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=64 TTFT (ms)",
            "value": 1912.58,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=64 TPOT (ms)",
            "value": 52.91,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=8 throughput (tok/s)",
            "value": 325.67,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=8 Total Tput (tok/s)",
            "value": 2896.95,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=8 TTFT (ms)",
            "value": 599.07,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=8 TPOT (ms)",
            "value": 23.49,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "GLM-5-FP8 8192/1024 c=8 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=1 throughput (tok/s)",
            "value": 269.23,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=1 Total Tput (tok/s)",
            "value": 536.56,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=1 TTFT (ms)",
            "value": 46.76,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=1 TPOT (ms)",
            "value": 3.67,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=1 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=128 throughput (tok/s)",
            "value": 8744.23,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=128 Total Tput (tok/s)",
            "value": 17507.68,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=128 TTFT (ms)",
            "value": 219.72,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=128 TPOT (ms)",
            "value": 14.01,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=128 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=16 throughput (tok/s)",
            "value": 2468.01,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=16 Total Tput (tok/s)",
            "value": 4962.29,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=16 TTFT (ms)",
            "value": 61.37,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=16 TPOT (ms)",
            "value": 6.3,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=16 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=2 throughput (tok/s)",
            "value": 529.99,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=2 Total Tput (tok/s)",
            "value": 1050.28,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=2 TTFT (ms)",
            "value": 45.6,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=2 TPOT (ms)",
            "value": 3.72,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=2 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=256 throughput (tok/s)",
            "value": 12532.75,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=256 Total Tput (tok/s)",
            "value": 25053.38,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=256 TTFT (ms)",
            "value": 308.73,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=256 TPOT (ms)",
            "value": 19.57,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=256 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=32 throughput (tok/s)",
            "value": 3830.12,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=32 Total Tput (tok/s)",
            "value": 7648.13,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=32 TTFT (ms)",
            "value": 66.4,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=32 TPOT (ms)",
            "value": 8.11,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=32 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=4 throughput (tok/s)",
            "value": 933.18,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=4 Total Tput (tok/s)",
            "value": 1875.49,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=4 TTFT (ms)",
            "value": 39.24,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=4 TPOT (ms)",
            "value": 4.12,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=4 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=64 throughput (tok/s)",
            "value": 6004.63,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=64 Total Tput (tok/s)",
            "value": 12011.97,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=64 TTFT (ms)",
            "value": 88.03,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=64 TPOT (ms)",
            "value": 10.3,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=64 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=8 throughput (tok/s)",
            "value": 1515.08,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=8 Total Tput (tok/s)",
            "value": 3018.97,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=8 TTFT (ms)",
            "value": 50.61,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=8 TPOT (ms)",
            "value": 5.13,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=8 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=1 throughput (tok/s)",
            "value": 260.2,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=1 Total Tput (tok/s)",
            "value": 2329.16,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=1 TTFT (ms)",
            "value": 145.41,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=1 TPOT (ms)",
            "value": 3.69,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=1 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=128 throughput (tok/s)",
            "value": 4755.55,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=128 Total Tput (tok/s)",
            "value": 42933.49,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=128 TTFT (ms)",
            "value": 1020.21,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=128 TPOT (ms)",
            "value": 25.47,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=128 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=16 throughput (tok/s)",
            "value": 1996.65,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=16 Total Tput (tok/s)",
            "value": 18019.29,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=16 TTFT (ms)",
            "value": 209.08,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=16 TPOT (ms)",
            "value": 7.57,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=16 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=2 throughput (tok/s)",
            "value": 489.07,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=2 Total Tput (tok/s)",
            "value": 4358.33,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=2 TTFT (ms)",
            "value": 146.46,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=2 TPOT (ms)",
            "value": 3.92,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=2 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=256 throughput (tok/s)",
            "value": 5545.59,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=256 Total Tput (tok/s)",
            "value": 49895.96,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=256 TTFT (ms)",
            "value": 2273.89,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=256 TPOT (ms)",
            "value": 43.16,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=256 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=32 throughput (tok/s)",
            "value": 2827.48,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=32 Total Tput (tok/s)",
            "value": 25284.22,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=32 TTFT (ms)",
            "value": 319.33,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=32 TPOT (ms)",
            "value": 10.73,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=32 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=4 throughput (tok/s)",
            "value": 844.1,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=4 Total Tput (tok/s)",
            "value": 7588,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=4 TTFT (ms)",
            "value": 139.6,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=4 TPOT (ms)",
            "value": 4.48,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=4 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=64 throughput (tok/s)",
            "value": 3863.43,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=64 Total Tput (tok/s)",
            "value": 34824.12,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=64 TTFT (ms)",
            "value": 517.51,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=64 TPOT (ms)",
            "value": 15.75,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=64 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=8 throughput (tok/s)",
            "value": 1343.43,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=8 Total Tput (tok/s)",
            "value": 11950.43,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=8 TTFT (ms)",
            "value": 207.34,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=8 TPOT (ms)",
            "value": 5.64,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "gpt-oss-120b 8192/1024 c=8 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=1 throughput (tok/s)",
            "value": 121.46,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=1 Total Tput (tok/s)",
            "value": 242.06,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=1 TTFT (ms)",
            "value": 86.48,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=1 TPOT (ms)",
            "value": 8.15,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=1 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=128 throughput (tok/s)",
            "value": 3316.65,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=128 Total Tput (tok/s)",
            "value": 6640.58,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=128 TTFT (ms)",
            "value": 503.69,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=128 TPOT (ms)",
            "value": 37.16,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=128 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=16 throughput (tok/s)",
            "value": 980.65,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=16 Total Tput (tok/s)",
            "value": 1971.75,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=16 TTFT (ms)",
            "value": 139.73,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=16 TPOT (ms)",
            "value": 15.86,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=16 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=2 throughput (tok/s)",
            "value": 225.73,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=2 Total Tput (tok/s)",
            "value": 447.33,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=2 TTFT (ms)",
            "value": 117.61,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=2 TPOT (ms)",
            "value": 8.72,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=2 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=256 throughput (tok/s)",
            "value": 4696.22,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=256 Total Tput (tok/s)",
            "value": 9387.9,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=256 TTFT (ms)",
            "value": 1385.39,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=256 TPOT (ms)",
            "value": 52.01,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=256 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=32 throughput (tok/s)",
            "value": 1560,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=32 Total Tput (tok/s)",
            "value": 3115.07,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=32 TTFT (ms)",
            "value": 204.06,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=32 TPOT (ms)",
            "value": 19.85,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=32 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=4 throughput (tok/s)",
            "value": 400.8,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=4 Total Tput (tok/s)",
            "value": 805.52,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=4 TTFT (ms)",
            "value": 104.03,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=4 TPOT (ms)",
            "value": 9.57,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=4 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=64 throughput (tok/s)",
            "value": 2213.81,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=64 Total Tput (tok/s)",
            "value": 4428.62,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=64 TTFT (ms)",
            "value": 282.15,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=64 TPOT (ms)",
            "value": 27.97,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=64 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=8 throughput (tok/s)",
            "value": 661.48,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=8 Total Tput (tok/s)",
            "value": 1318.08,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=8 TTFT (ms)",
            "value": 127.75,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=8 TPOT (ms)",
            "value": 11.73,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 1024/1024 c=8 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=1 throughput (tok/s)",
            "value": 110.81,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=1 Total Tput (tok/s)",
            "value": 991.9,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=1 TTFT (ms)",
            "value": 341.66,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=1 TPOT (ms)",
            "value": 8.66,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=1 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=128 throughput (tok/s)",
            "value": 1692.11,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=128 Total Tput (tok/s)",
            "value": 15276.5,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=128 TTFT (ms)",
            "value": 2727.28,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=128 TPOT (ms)",
            "value": 71.72,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=128 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=16 throughput (tok/s)",
            "value": 782.99,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=16 Total Tput (tok/s)",
            "value": 7066.3,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=16 TTFT (ms)",
            "value": 607.73,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=16 TPOT (ms)",
            "value": 19.27,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=16 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=2 throughput (tok/s)",
            "value": 203.04,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=2 Total Tput (tok/s)",
            "value": 1809.36,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=2 TTFT (ms)",
            "value": 356.29,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=2 TPOT (ms)",
            "value": 9.45,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=2 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=256 throughput (tok/s)",
            "value": 1942.13,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=256 Total Tput (tok/s)",
            "value": 17474.18,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=256 TTFT (ms)",
            "value": 5638.74,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=256 TPOT (ms)",
            "value": 124.27,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=256 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=32 throughput (tok/s)",
            "value": 1100.82,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=32 Total Tput (tok/s)",
            "value": 9843.84,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=32 TTFT (ms)",
            "value": 893.16,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=32 TPOT (ms)",
            "value": 27.48,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=32 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=4 throughput (tok/s)",
            "value": 349.82,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=4 Total Tput (tok/s)",
            "value": 3144.66,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=4 TTFT (ms)",
            "value": 401.77,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=4 TPOT (ms)",
            "value": 10.74,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=4 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=64 throughput (tok/s)",
            "value": 1383.66,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=64 Total Tput (tok/s)",
            "value": 12471.97,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=64 TTFT (ms)",
            "value": 1486.97,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=64 TPOT (ms)",
            "value": 43.95,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=64 _gpu_count",
            "value": 4,
            "unit": ""
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=8 throughput (tok/s)",
            "value": 560.75,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=8 Total Tput (tok/s)",
            "value": 4988.1,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=8 TTFT (ms)",
            "value": 472.96,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=8 TPOT (ms)",
            "value": 13.53,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912952072 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1"
          },
          {
            "name": "Kimi-K2.5-MXFP4 8192/1024 c=8 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Xin.Huang@amd.com",
            "name": "Xin Huang",
            "username": "gyohuangxin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8d04949f446c712951d6004ef9601b11f4e97085",
          "message": "CI: improve atom test image and model cache handling (#476)\n\n* CI: Update atom test to use internal registry cache\n\n* CI: keep forced pulls on predownload runner only\n\n* CI: serialize shared model downloads in atom test\n\n* CI: skip shared model lock on baremetal runner\n\n* CI: move model download locking into container",
          "timestamp": "2026-04-03T01:10:03+08:00",
          "tree_id": "8071c638acbce64e883f9d349e18d71fed94f4bf",
          "url": "https://github.com/ROCm/ATOM/commit/8d04949f446c712951d6004ef9601b11f4e97085"
        },
        "date": 1775166827021,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM::DeepSeek-R1-0528 accuracy (GSM8K)",
            "value": 0.9507,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (GSM8K 3-shot flexible-extract) | strict-match: 0.9431 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528 MTP accuracy (GSM8K)",
            "value": 0.9462,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: Same base model as DeepSeek-R1-0528 FP8 | strict-match: 0.9439 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 accuracy (GSM8K)",
            "value": 0.9356,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9287 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 MTP accuracy (GSM8K)",
            "value": 0.9348,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9272 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::GLM-5-FP8 accuracy (GSM8K)",
            "value": 0.9424,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.93 | Baseline: 0.9545 | BaselineModel: zai-org/GLM-5 | BaselineNote: HF: amd/GLM-5-MXFP4 card shows GLM-5 baseline=0.9545 (5-shot) | strict-match: 0.9477 | fewshot: 3 | Model: /models/zai-org/GLM-5-FP8"
          },
          {
            "name": "ATOM::Kimi-K2.5-MXFP4 accuracy (GSM8K)",
            "value": 0.9393,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.93 | Baseline: 0.9409 | BaselineModel: moonshotai/Kimi-K2.5 | BaselineNote: HF: amd/Kimi-K2.5-MXFP4 card shows Kimi-K2.5 baseline=0.9409 | strict-match: 0.9393 | fewshot: 3 | Model: /models/amd/Kimi-K2.5-MXFP4"
          },
          {
            "name": "ATOM::Meta-Llama-3-8B-Instruct accuracy (GSM8K)",
            "value": 0.7437,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.73 | BaselineModel: meta-llama/Meta-Llama-3-8B-Instruct | BaselineNote: HF reports 0.796 but 8-shot CoT; CI uses 3-shot, not comparable | strict-match: 0.7422 | fewshot: 3 | Model: /models/meta-llama/Meta-Llama-3-8B-Instruct"
          },
          {
            "name": "ATOM::Qwen3-235B-A22B-Instruct-2507-FP8 accuracy (GSM8K)",
            "value": 0.9014,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.87 | Baseline: 0.909 | BaselineModel: Qwen/Qwen3-235B-A22B-Instruct-2507 | BaselineNote: HF: amd/Qwen3-235B-A22B-Instruct-2507-MXFP4 card shows baseline=0.909 | strict-match: 0.8825 | fewshot: 3 | Model: /models/Qwen/Qwen3-235B-A22B-Instruct-2507-FP8"
          },
          {
            "name": "ATOM::Qwen3-Next-80B-A3B-Thinking accuracy (GSM8K)",
            "value": 0.6998,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.65 | BaselineModel: Qwen/Qwen3-Next-80B-A3B-Thinking | BaselineNote: No public GSM8K baseline; HF card has no GSM8K | strict-match: 0.7991 | fewshot: 3 | Model: /models/Qwen/Qwen3-Next-80B-A3B-Thinking"
          },
          {
            "name": "ATOM::gpt-oss-120b accuracy (GSM8K)",
            "value": 0.3935,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.38 | BaselineModel: openai/gpt-oss-120b | BaselineNote: No public GSM8K baseline available | strict-match: 0.2146 | fewshot: 3 | Model: /models/openai/gpt-oss-120b"
          },
          {
            "name": "ATOM::gpt-oss-120b (2 GPUs) accuracy (GSM8K)",
            "value": 0.4344,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.38 | BaselineModel: openai/gpt-oss-120b | BaselineNote: No public GSM8K baseline available | strict-match: 0.2381 | fewshot: 3 | Model: /models/openai/gpt-oss-120b"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yuhzhu@amd.com",
            "name": "Zhu Yuhua",
            "username": "zhuyuhua-v"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "380986d058eca1e1d49c1ca41f86724d3bad4145",
          "message": "[feat] Make ATOM work with SGLang out-of-tree (#355)\n\n* register attn backend to sgl from ATOM\nenable mla\n\n* make format happy\n\n* arg parse for  format launch\n\n* remove print logging\n\n* add Qwen3-235B support for sgl_oot\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* add Deepseek-R1 support for sgl_oot\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* unify base model wrapper\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* enable fuse_rope_cat_and_cache_mla on gfx950\n\n* add _is_hip = True\n\n* fix AiterTensor check\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* clean mla code path, keep the origin design\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* clean code: separate sglang mla path\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* add comments\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* change sglang args and qwen page size\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* remove redundant code\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* [mla] non prefill path\n\n* re-consider attn related files' structure and atom related modifications\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* clean format\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* fix review comments\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* fix review comments\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* fix review comments, add acc fix\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n---------\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\nCo-authored-by: Guanbao Yu <gyu@amd.com>\nCo-authored-by: ZhiweiYan-96 <zhiwei.yan@amd.com>\nCo-authored-by: wuhuikx <hattie.wu@amd.com>",
          "timestamp": "2026-04-03T09:53:36+08:00",
          "tree_id": "c3c6567042bf5858c32abc66e76ea4f88917ac9c",
          "url": "https://github.com/ROCm/ATOM/commit/380986d058eca1e1d49c1ca41f86724d3bad4145"
        },
        "date": 1775193643223,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM::DeepSeek-R1-0528 accuracy (GSM8K)",
            "value": 0.9416,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (GSM8K 3-shot flexible-extract) | strict-match: 0.9378 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528 MTP accuracy (GSM8K)",
            "value": 0.9447,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: Same base model as DeepSeek-R1-0528 FP8 | strict-match: 0.9378 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 accuracy (GSM8K)",
            "value": 0.9401,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9363 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 MTP accuracy (GSM8K)",
            "value": 0.9393,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9393 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::GLM-5-FP8 accuracy (GSM8K)",
            "value": 0.9409,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.93 | Baseline: 0.9545 | BaselineModel: zai-org/GLM-5 | BaselineNote: HF: amd/GLM-5-MXFP4 card shows GLM-5 baseline=0.9545 (5-shot) | strict-match: 0.9462 | fewshot: 3 | Model: /models/zai-org/GLM-5-FP8"
          },
          {
            "name": "ATOM::Kimi-K2.5-MXFP4 accuracy (GSM8K)",
            "value": 0.9356,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.93 | Baseline: 0.9409 | BaselineModel: moonshotai/Kimi-K2.5 | BaselineNote: HF: amd/Kimi-K2.5-MXFP4 card shows Kimi-K2.5 baseline=0.9409 | strict-match: 0.9348 | fewshot: 3 | Model: /models/amd/Kimi-K2.5-MXFP4"
          },
          {
            "name": "ATOM::Llama-3.3-70B-Instruct-MXFP4-Preview accuracy (GSM8K)",
            "value": 0.906,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.88 | BaselineModel: meta-llama/Llama-3.3-70B-Instruct | BaselineNote: HF page inaccessible; needs CI measurement of baseline | strict-match: 0.6103 | fewshot: 3 | Model: /models/amd/Llama-3.3-70B-Instruct-MXFP4-Preview"
          },
          {
            "name": "ATOM::Qwen3-235B-A22B-Instruct-2507-FP8 accuracy (GSM8K)",
            "value": 0.8908,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.87 | Baseline: 0.909 | BaselineModel: Qwen/Qwen3-235B-A22B-Instruct-2507 | BaselineNote: HF: amd/Qwen3-235B-A22B-Instruct-2507-MXFP4 card shows baseline=0.909 | strict-match: 0.8741 | fewshot: 3 | Model: /models/Qwen/Qwen3-235B-A22B-Instruct-2507-FP8"
          },
          {
            "name": "ATOM::Qwen3-Next-80B-A3B-Thinking accuracy (GSM8K)",
            "value": 0.6907,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.65 | BaselineModel: Qwen/Qwen3-Next-80B-A3B-Thinking | BaselineNote: No public GSM8K baseline; HF card has no GSM8K | strict-match: 0.7961 | fewshot: 3 | Model: /models/Qwen/Qwen3-Next-80B-A3B-Thinking"
          },
          {
            "name": "ATOM::gpt-oss-120b accuracy (GSM8K)",
            "value": 0.4117,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.38 | BaselineModel: openai/gpt-oss-120b | BaselineNote: No public GSM8K baseline available | strict-match: 0.2161 | fewshot: 3 | Model: /models/openai/gpt-oss-120b"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Xin.Huang@amd.com",
            "name": "Xin Huang",
            "username": "gyohuangxin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8d04949f446c712951d6004ef9601b11f4e97085",
          "message": "CI: improve atom test image and model cache handling (#476)\n\n* CI: Update atom test to use internal registry cache\n\n* CI: keep forced pulls on predownload runner only\n\n* CI: serialize shared model downloads in atom test\n\n* CI: skip shared model lock on baremetal runner\n\n* CI: move model download locking into container",
          "timestamp": "2026-04-03T01:10:03+08:00",
          "tree_id": "8071c638acbce64e883f9d349e18d71fed94f4bf",
          "url": "https://github.com/ROCm/ATOM/commit/8d04949f446c712951d6004ef9601b11f4e97085"
        },
        "date": 1775194809327,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM::DeepSeek-R1-0528 accuracy (GSM8K)",
            "value": 0.9507,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (GSM8K 3-shot flexible-extract) | strict-match: 0.9431 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528 MTP accuracy (GSM8K)",
            "value": 0.9462,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: Same base model as DeepSeek-R1-0528 FP8 | strict-match: 0.9439 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 accuracy (GSM8K)",
            "value": 0.9356,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9287 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 MTP accuracy (GSM8K)",
            "value": 0.9348,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9272 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::GLM-5-FP8 accuracy (GSM8K)",
            "value": 0.9424,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.93 | Baseline: 0.9545 | BaselineModel: zai-org/GLM-5 | BaselineNote: HF: amd/GLM-5-MXFP4 card shows GLM-5 baseline=0.9545 (5-shot) | strict-match: 0.9477 | fewshot: 3 | Model: /models/zai-org/GLM-5-FP8"
          },
          {
            "name": "ATOM::Kimi-K2.5-MXFP4 accuracy (GSM8K)",
            "value": 0.9393,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.93 | Baseline: 0.9409 | BaselineModel: moonshotai/Kimi-K2.5 | BaselineNote: HF: amd/Kimi-K2.5-MXFP4 card shows Kimi-K2.5 baseline=0.9409 | strict-match: 0.9393 | fewshot: 3 | Model: /models/amd/Kimi-K2.5-MXFP4"
          },
          {
            "name": "ATOM::Llama-3.3-70B-Instruct-MXFP4-Preview accuracy (GSM8K)",
            "value": 0.909,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.88 | BaselineModel: meta-llama/Llama-3.3-70B-Instruct | BaselineNote: HF page inaccessible; needs CI measurement of baseline | strict-match: 0.6209 | fewshot: 3 | Model: /models/amd/Llama-3.3-70B-Instruct-MXFP4-Preview"
          },
          {
            "name": "ATOM::Meta-Llama-3-8B-Instruct accuracy (GSM8K)",
            "value": 0.7437,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.73 | BaselineModel: meta-llama/Meta-Llama-3-8B-Instruct | BaselineNote: HF reports 0.796 but 8-shot CoT; CI uses 3-shot, not comparable | strict-match: 0.7422 | fewshot: 3 | Model: /models/meta-llama/Meta-Llama-3-8B-Instruct"
          },
          {
            "name": "ATOM::Qwen3-235B-A22B-Instruct-2507-FP8 accuracy (GSM8K)",
            "value": 0.9014,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.87 | Baseline: 0.909 | BaselineModel: Qwen/Qwen3-235B-A22B-Instruct-2507 | BaselineNote: HF: amd/Qwen3-235B-A22B-Instruct-2507-MXFP4 card shows baseline=0.909 | strict-match: 0.8825 | fewshot: 3 | Model: /models/Qwen/Qwen3-235B-A22B-Instruct-2507-FP8"
          },
          {
            "name": "ATOM::Qwen3-Next-80B-A3B-Thinking accuracy (GSM8K)",
            "value": 0.6998,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.65 | BaselineModel: Qwen/Qwen3-Next-80B-A3B-Thinking | BaselineNote: No public GSM8K baseline; HF card has no GSM8K | strict-match: 0.7991 | fewshot: 3 | Model: /models/Qwen/Qwen3-Next-80B-A3B-Thinking"
          },
          {
            "name": "ATOM::gpt-oss-120b accuracy (GSM8K)",
            "value": 0.3935,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.38 | BaselineModel: openai/gpt-oss-120b | BaselineNote: No public GSM8K baseline available | strict-match: 0.2146 | fewshot: 3 | Model: /models/openai/gpt-oss-120b"
          },
          {
            "name": "ATOM::gpt-oss-120b (2 GPUs) accuracy (GSM8K)",
            "value": 0.4344,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.38 | BaselineModel: openai/gpt-oss-120b | BaselineNote: No public GSM8K baseline available | strict-match: 0.2381 | fewshot: 3 | Model: /models/openai/gpt-oss-120b"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yuhzhu@amd.com",
            "name": "Zhu Yuhua",
            "username": "zhuyuhua-v"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "380986d058eca1e1d49c1ca41f86724d3bad4145",
          "message": "[feat] Make ATOM work with SGLang out-of-tree (#355)\n\n* register attn backend to sgl from ATOM\nenable mla\n\n* make format happy\n\n* arg parse for  format launch\n\n* remove print logging\n\n* add Qwen3-235B support for sgl_oot\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* add Deepseek-R1 support for sgl_oot\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* unify base model wrapper\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* enable fuse_rope_cat_and_cache_mla on gfx950\n\n* add _is_hip = True\n\n* fix AiterTensor check\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* clean mla code path, keep the origin design\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* clean code: separate sglang mla path\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* add comments\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* change sglang args and qwen page size\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* remove redundant code\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* [mla] non prefill path\n\n* re-consider attn related files' structure and atom related modifications\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* clean format\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* fix review comments\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* fix review comments\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* fix review comments, add acc fix\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n---------\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\nCo-authored-by: Guanbao Yu <gyu@amd.com>\nCo-authored-by: ZhiweiYan-96 <zhiwei.yan@amd.com>\nCo-authored-by: wuhuikx <hattie.wu@amd.com>",
          "timestamp": "2026-04-03T09:53:36+08:00",
          "tree_id": "c3c6567042bf5858c32abc66e76ea4f88917ac9c",
          "url": "https://github.com/ROCm/ATOM/commit/380986d058eca1e1d49c1ca41f86724d3bad4145"
        },
        "date": 1775195710351,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM::DeepSeek-R1-0528 accuracy (GSM8K)",
            "value": 0.9416,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (GSM8K 3-shot flexible-extract) | strict-match: 0.9378 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528 MTP accuracy (GSM8K)",
            "value": 0.9447,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: Same base model as DeepSeek-R1-0528 FP8 | strict-match: 0.9378 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 accuracy (GSM8K)",
            "value": 0.9401,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9363 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 MTP accuracy (GSM8K)",
            "value": 0.9393,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9393 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::GLM-5-FP8 accuracy (GSM8K)",
            "value": 0.9409,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.93 | Baseline: 0.9545 | BaselineModel: zai-org/GLM-5 | BaselineNote: HF: amd/GLM-5-MXFP4 card shows GLM-5 baseline=0.9545 (5-shot) | strict-match: 0.9462 | fewshot: 3 | Model: /models/zai-org/GLM-5-FP8"
          },
          {
            "name": "ATOM::Kimi-K2.5-MXFP4 accuracy (GSM8K)",
            "value": 0.9356,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.93 | Baseline: 0.9409 | BaselineModel: moonshotai/Kimi-K2.5 | BaselineNote: HF: amd/Kimi-K2.5-MXFP4 card shows Kimi-K2.5 baseline=0.9409 | strict-match: 0.9348 | fewshot: 3 | Model: /models/amd/Kimi-K2.5-MXFP4"
          },
          {
            "name": "ATOM::Llama-3.3-70B-Instruct-MXFP4-Preview accuracy (GSM8K)",
            "value": 0.906,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.88 | BaselineModel: meta-llama/Llama-3.3-70B-Instruct | BaselineNote: HF page inaccessible; needs CI measurement of baseline | strict-match: 0.6103 | fewshot: 3 | Model: /models/amd/Llama-3.3-70B-Instruct-MXFP4-Preview"
          },
          {
            "name": "ATOM::Meta-Llama-3-8B-Instruct accuracy (GSM8K)",
            "value": 0.7498,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.73 | BaselineModel: meta-llama/Meta-Llama-3-8B-Instruct | BaselineNote: HF reports 0.796 but 8-shot CoT; CI uses 3-shot, not comparable | strict-match: 0.7506 | fewshot: 3 | Model: /models/meta-llama/Meta-Llama-3-8B-Instruct"
          },
          {
            "name": "ATOM::Qwen3-235B-A22B-Instruct-2507-FP8 accuracy (GSM8K)",
            "value": 0.8908,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.87 | Baseline: 0.909 | BaselineModel: Qwen/Qwen3-235B-A22B-Instruct-2507 | BaselineNote: HF: amd/Qwen3-235B-A22B-Instruct-2507-MXFP4 card shows baseline=0.909 | strict-match: 0.8741 | fewshot: 3 | Model: /models/Qwen/Qwen3-235B-A22B-Instruct-2507-FP8"
          },
          {
            "name": "ATOM::Qwen3-Next-80B-A3B-Thinking accuracy (GSM8K)",
            "value": 0.6907,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.65 | BaselineModel: Qwen/Qwen3-Next-80B-A3B-Thinking | BaselineNote: No public GSM8K baseline; HF card has no GSM8K | strict-match: 0.7961 | fewshot: 3 | Model: /models/Qwen/Qwen3-Next-80B-A3B-Thinking"
          },
          {
            "name": "ATOM::gpt-oss-120b accuracy (GSM8K)",
            "value": 0.4117,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.38 | BaselineModel: openai/gpt-oss-120b | BaselineNote: No public GSM8K baseline available | strict-match: 0.2161 | fewshot: 3 | Model: /models/openai/gpt-oss-120b"
          },
          {
            "name": "ATOM::gpt-oss-120b (2 GPUs) accuracy (GSM8K)",
            "value": 0.4086,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.38 | BaselineModel: openai/gpt-oss-120b | BaselineNote: No public GSM8K baseline available | strict-match: 0.2487 | fewshot: 3 | Model: /models/openai/gpt-oss-120b"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Perry.Zhang@amd.com",
            "name": "PerryZhang01",
            "username": "PerryZhang01"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "15721c1525f160ba50e67a1f53e03187435a8df7",
          "message": "[fix](tp8): fix tp8 accuracy for gpt-oss (#449)\n\n* [fix](tp8): fix tp8 accuracy for gpt-oss\n\n* [fix](gpt-oss): mv contiguous to allreduce\n\n* [fix](pad): remove pad after allreduce\n\n---------\n\nCo-authored-by: perzhang <perzhang@amd.com>\nCo-authored-by: wuhuikx <hattie.wu@amd.com>",
          "timestamp": "2026-04-03T15:57:38+08:00",
          "tree_id": "d3482ce78697c170bc369a405824a509bb08d37c",
          "url": "https://github.com/ROCm/ATOM/commit/15721c1525f160ba50e67a1f53e03187435a8df7"
        },
        "date": 1775204444916,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM::DeepSeek-R1-0528 accuracy (GSM8K)",
            "value": 0.9424,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23938985781 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (GSM8K 3-shot flexible-extract) | strict-match: 0.9386 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528 MTP accuracy (GSM8K)",
            "value": 0.9401,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23938985781 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: Same base model as DeepSeek-R1-0528 FP8 | strict-match: 0.9363 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 accuracy (GSM8K)",
            "value": 0.9333,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23938985781 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9295 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 MTP accuracy (GSM8K)",
            "value": 0.9401,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23938985781 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9348 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::GLM-5-FP8 accuracy (GSM8K)",
            "value": 0.9424,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23938985781 | Threshold: 0.93 | Baseline: 0.9545 | BaselineModel: zai-org/GLM-5 | BaselineNote: HF: amd/GLM-5-MXFP4 card shows GLM-5 baseline=0.9545 (5-shot) | strict-match: 0.9507 | fewshot: 3 | Model: /models/zai-org/GLM-5-FP8"
          },
          {
            "name": "ATOM::Kimi-K2.5-MXFP4 accuracy (GSM8K)",
            "value": 0.9257,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23938985781 | Threshold: 0.93 | Baseline: 0.9409 | BaselineModel: moonshotai/Kimi-K2.5 | BaselineNote: HF: amd/Kimi-K2.5-MXFP4 card shows Kimi-K2.5 baseline=0.9409 | strict-match: 0.9257 | fewshot: 3 | Model: /models/amd/Kimi-K2.5-MXFP4"
          },
          {
            "name": "ATOM::Qwen3-235B-A22B-Instruct-2507-FP8 accuracy (GSM8K)",
            "value": 0.9037,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23938985781 | Threshold: 0.87 | Baseline: 0.909 | BaselineModel: Qwen/Qwen3-235B-A22B-Instruct-2507 | BaselineNote: HF: amd/Qwen3-235B-A22B-Instruct-2507-MXFP4 card shows baseline=0.909 | strict-match: 0.8848 | fewshot: 3 | Model: /models/Qwen/Qwen3-235B-A22B-Instruct-2507-FP8"
          },
          {
            "name": "ATOM::Qwen3-Next-80B-A3B-Thinking accuracy (GSM8K)",
            "value": 0.6892,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23938985781 | Threshold: 0.65 | BaselineModel: Qwen/Qwen3-Next-80B-A3B-Thinking | BaselineNote: No public GSM8K baseline; HF card has no GSM8K | strict-match: 0.7961 | fewshot: 3 | Model: /models/Qwen/Qwen3-Next-80B-A3B-Thinking"
          },
          {
            "name": "ATOM::gpt-oss-120b accuracy (GSM8K)",
            "value": 0.4049,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23938985781 | Threshold: 0.38 | BaselineModel: openai/gpt-oss-120b | BaselineNote: No public GSM8K baseline available | strict-match: 0.2335 | fewshot: 3 | Model: /models/openai/gpt-oss-120b"
          },
          {
            "name": "ATOM::gpt-oss-120b (2 GPUs) accuracy (GSM8K)",
            "value": 0.4139,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23938985781 | Threshold: 0.38 | BaselineModel: openai/gpt-oss-120b | BaselineNote: No public GSM8K baseline available | strict-match: 0.2183 | fewshot: 3 | Model: /models/openai/gpt-oss-120b"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775207620460,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=32 throughput (tok/s)",
            "value": 2063.88,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=32 Total Tput (tok/s)",
            "value": 4121.24,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=32 TTFT (ms)",
            "value": 158.26,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=32 TPOT (ms)",
            "value": 14.96,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=32 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775208082448,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=32 throughput (tok/s)",
            "value": 2563.86,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=32 Total Tput (tok/s)",
            "value": 5119.62,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=32 TTFT (ms)",
            "value": 146.38,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=32 TPOT (ms)",
            "value": 12,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775208302730,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=4 throughput (tok/s)",
            "value": 341.91,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=4 Total Tput (tok/s)",
            "value": 687.16,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=4 TTFT (ms)",
            "value": 179.83,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=4 TPOT (ms)",
            "value": 11.15,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=4 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775208612940,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=64 throughput (tok/s)",
            "value": 1569.55,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=64 Total Tput (tok/s)",
            "value": 14147.62,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=64 TTFT (ms)",
            "value": 1051.25,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=64 TPOT (ms)",
            "value": 38.93,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=64 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775208630939,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=32 throughput (tok/s)",
            "value": 1579.87,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=32 Total Tput (tok/s)",
            "value": 14127.66,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=32 TTFT (ms)",
            "value": 618.83,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=32 TPOT (ms)",
            "value": 19.07,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=32 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775208816452,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=4 throughput (tok/s)",
            "value": 425.62,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=4 Total Tput (tok/s)",
            "value": 855.4,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=4 TTFT (ms)",
            "value": 135.25,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=4 TPOT (ms)",
            "value": 8.97,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=4 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775209383434,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=128 throughput (tok/s)",
            "value": 5785.43,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=128 Total Tput (tok/s)",
            "value": 11583.57,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=128 TTFT (ms)",
            "value": 248.75,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=128 TPOT (ms)",
            "value": 21.33,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775210000545,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=64 throughput (tok/s)",
            "value": 4977.14,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=64 Total Tput (tok/s)",
            "value": 5598.58,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=64 TTFT (ms)",
            "value": 155.56,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=64 TPOT (ms)",
            "value": 12.47,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=64 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775210541234,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=256 throughput (tok/s)",
            "value": 4083.76,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=256 Total Tput (tok/s)",
            "value": 36743.3,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=256 TTFT (ms)",
            "value": 2040.55,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=256 TPOT (ms)",
            "value": 59.73,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=256 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775210603626,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=64 throughput (tok/s)",
            "value": 2240.35,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=64 Total Tput (tok/s)",
            "value": 2520.08,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=64 TTFT (ms)",
            "value": 305.13,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=64 TPOT (ms)",
            "value": 27.82,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=64 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775211154994,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=16 throughput (tok/s)",
            "value": 954.41,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=16 Total Tput (tok/s)",
            "value": 1074.16,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=16 TTFT (ms)",
            "value": 152.23,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=16 TPOT (ms)",
            "value": 16.34,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=16 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775211785791,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=16 throughput (tok/s)",
            "value": 922.94,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=16 Total Tput (tok/s)",
            "value": 1855.7,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=16 TTFT (ms)",
            "value": 146.51,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=16 TPOT (ms)",
            "value": 16.83,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=16 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775212323706,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=8 throughput (tok/s)",
            "value": 687.05,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=8 Total Tput (tok/s)",
            "value": 6111.59,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=8 TTFT (ms)",
            "value": 363.44,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=8 TPOT (ms)",
            "value": 11.05,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=8 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775212432456,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=32 throughput (tok/s)",
            "value": 1448.14,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=32 Total Tput (tok/s)",
            "value": 2891.71,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=32 TTFT (ms)",
            "value": 269.46,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=32 TPOT (ms)",
            "value": 21.32,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=32 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775212551322,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=4 throughput (tok/s)",
            "value": 348.66,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=4 Total Tput (tok/s)",
            "value": 393.15,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=4 TTFT (ms)",
            "value": 242.33,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=4 TPOT (ms)",
            "value": 11.26,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=4 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zejun.chen@amd.com",
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "efde2befff305dc930707d06b0185bf422ea0f1e",
          "message": "[plugin][OOT CI] refine OOT CI/dashboard/OOT docker release (#459)\n\n* [plugin][OOT CI] change the OOT CI mount folder logic\nto make model hit cache instead of downloading\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T18:15:42+08:00",
          "tree_id": "4387d0f6d2b537e7e80e3143f6cdd323396d55f4",
          "url": "https://github.com/ROCm/ATOM/commit/efde2befff305dc930707d06b0185bf422ea0f1e"
        },
        "date": 1775212676342,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM::DeepSeek-R1-0528 accuracy (GSM8K)",
            "value": 0.9484,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23942832989 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (GSM8K 3-shot flexible-extract) | strict-match: 0.9447 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528 MTP accuracy (GSM8K)",
            "value": 0.953,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23942832989 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: Same base model as DeepSeek-R1-0528 FP8 | strict-match: 0.9507 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 accuracy (GSM8K)",
            "value": 0.9371,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23942832989 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9356 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 MTP accuracy (GSM8K)",
            "value": 0.9378,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23942832989 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.931 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::GLM-5-FP8 accuracy (GSM8K)",
            "value": 0.9371,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23942832989 | Threshold: 0.93 | Baseline: 0.9545 | BaselineModel: zai-org/GLM-5 | BaselineNote: HF: amd/GLM-5-MXFP4 card shows GLM-5 baseline=0.9545 (5-shot) | strict-match: 0.9447 | fewshot: 3 | Model: /models/zai-org/GLM-5-FP8"
          },
          {
            "name": "ATOM::Kimi-K2.5-MXFP4 accuracy (GSM8K)",
            "value": 0.9363,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23942832989 | Threshold: 0.93 | Baseline: 0.9409 | BaselineModel: moonshotai/Kimi-K2.5 | BaselineNote: HF: amd/Kimi-K2.5-MXFP4 card shows Kimi-K2.5 baseline=0.9409 | strict-match: 0.934 | fewshot: 3 | Model: /models/amd/Kimi-K2.5-MXFP4"
          },
          {
            "name": "ATOM::Llama-3.3-70B-Instruct-MXFP4-Preview accuracy (GSM8K)",
            "value": 0.909,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23942832989 | Threshold: 0.88 | BaselineModel: meta-llama/Llama-3.3-70B-Instruct | BaselineNote: HF page inaccessible; needs CI measurement of baseline | strict-match: 0.5959 | fewshot: 3 | Model: /models/amd/Llama-3.3-70B-Instruct-MXFP4-Preview"
          },
          {
            "name": "ATOM::Meta-Llama-3-8B-Instruct accuracy (GSM8K)",
            "value": 0.743,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23942832989 | Threshold: 0.73 | BaselineModel: meta-llama/Meta-Llama-3-8B-Instruct | BaselineNote: HF reports 0.796 but 8-shot CoT; CI uses 3-shot, not comparable | strict-match: 0.7407 | fewshot: 3 | Model: /models/meta-llama/Meta-Llama-3-8B-Instruct"
          },
          {
            "name": "ATOM::Qwen3-235B-A22B-Instruct-2507-FP8 accuracy (GSM8K)",
            "value": 0.8976,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23942832989 | Threshold: 0.87 | Baseline: 0.909 | BaselineModel: Qwen/Qwen3-235B-A22B-Instruct-2507 | BaselineNote: HF: amd/Qwen3-235B-A22B-Instruct-2507-MXFP4 card shows baseline=0.909 | strict-match: 0.881 | fewshot: 3 | Model: /models/Qwen/Qwen3-235B-A22B-Instruct-2507-FP8"
          },
          {
            "name": "ATOM::Qwen3-Next-80B-A3B-Thinking accuracy (GSM8K)",
            "value": 0.7028,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23942832989 | Threshold: 0.65 | BaselineModel: Qwen/Qwen3-Next-80B-A3B-Thinking | BaselineNote: No public GSM8K baseline; HF card has no GSM8K | strict-match: 0.8006 | fewshot: 3 | Model: /models/Qwen/Qwen3-Next-80B-A3B-Thinking"
          },
          {
            "name": "ATOM::gpt-oss-120b accuracy (GSM8K)",
            "value": 0.3942,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23942832989 | Threshold: 0.38 | BaselineModel: openai/gpt-oss-120b | BaselineNote: No public GSM8K baseline available | strict-match: 0.2062 | fewshot: 3 | Model: /models/openai/gpt-oss-120b"
          },
          {
            "name": "ATOM::gpt-oss-120b (2 GPUs) accuracy (GSM8K)",
            "value": 0.4011,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23942832989 | Threshold: 0.38 | BaselineModel: openai/gpt-oss-120b | BaselineNote: No public GSM8K baseline available | strict-match: 0.2123 | fewshot: 3 | Model: /models/openai/gpt-oss-120b"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775212909180,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=32 throughput (tok/s)",
            "value": 1529.68,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=32 Total Tput (tok/s)",
            "value": 1719.61,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=32 TTFT (ms)",
            "value": 173.5,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=32 TPOT (ms)",
            "value": 20.42,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=32 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775213451294,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=4 throughput (tok/s)",
            "value": 449.96,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=4 Total Tput (tok/s)",
            "value": 904.32,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=4 TTFT (ms)",
            "value": 138.32,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=4 TPOT (ms)",
            "value": 8.47,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775213531727,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=8 throughput (tok/s)",
            "value": 796.32,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=8 Total Tput (tok/s)",
            "value": 1586.76,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=8 TTFT (ms)",
            "value": 95.03,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=8 TPOT (ms)",
            "value": 9.72,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=8 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775213918877,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=64 throughput (tok/s)",
            "value": 2107.28,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=64 Total Tput (tok/s)",
            "value": 4215.5,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=64 TTFT (ms)",
            "value": 321.15,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=64 TPOT (ms)",
            "value": 29.32,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=64 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775214092488,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=8 throughput (tok/s)",
            "value": 537.8,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=8 Total Tput (tok/s)",
            "value": 4783.99,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=8 TTFT (ms)",
            "value": 347,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=8 TPOT (ms)",
            "value": 14.25,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=8 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775214094775,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=64 throughput (tok/s)",
            "value": 2949.13,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=64 Total Tput (tok/s)",
            "value": 5899.58,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=64 TTFT (ms)",
            "value": 238.21,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=64 TPOT (ms)",
            "value": 20.92,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=64 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775214675913,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=16 throughput (tok/s)",
            "value": 1087.32,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=16 Total Tput (tok/s)",
            "value": 9812.8,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=16 TTFT (ms)",
            "value": 411.42,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=16 TPOT (ms)",
            "value": 13.81,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=16 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775214725954,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=4 throughput (tok/s)",
            "value": 403.64,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=4 Total Tput (tok/s)",
            "value": 3628.48,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=4 TTFT (ms)",
            "value": 232.09,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=4 TPOT (ms)",
            "value": 9.43,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775215091736,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=16 throughput (tok/s)",
            "value": 1764.7,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=16 Total Tput (tok/s)",
            "value": 3548.19,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=16 TTFT (ms)",
            "value": 119.89,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=16 TPOT (ms)",
            "value": 8.74,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=16 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775215414060,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=32 throughput (tok/s)",
            "value": 1169.35,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=32 Total Tput (tok/s)",
            "value": 10456.71,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=32 TTFT (ms)",
            "value": 692.78,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=32 TPOT (ms)",
            "value": 25.96,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=32 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775215534873,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=128 throughput (tok/s)",
            "value": 3116.43,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=128 Total Tput (tok/s)",
            "value": 28135.4,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=128 TTFT (ms)",
            "value": 1219.65,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=128 TPOT (ms)",
            "value": 39.11,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775215623479,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=32 throughput (tok/s)",
            "value": 2065.32,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=32 Total Tput (tok/s)",
            "value": 18468.71,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=32 TTFT (ms)",
            "value": 483.99,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=32 TPOT (ms)",
            "value": 14.52,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775215879564,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=32 throughput (tok/s)",
            "value": 2066.45,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=32 Total Tput (tok/s)",
            "value": 18478.88,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=32 TTFT (ms)",
            "value": 567.17,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=32 TPOT (ms)",
            "value": 14.48,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=32 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775215969738,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=4 throughput (tok/s)",
            "value": 433.72,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=4 Total Tput (tok/s)",
            "value": 871.69,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=4 TTFT (ms)",
            "value": 92.24,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=4 TPOT (ms)",
            "value": 8.84,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775215994255,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=16 throughput (tok/s)",
            "value": 1360.39,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=16 Total Tput (tok/s)",
            "value": 2735.26,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=16 TTFT (ms)",
            "value": 122.29,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=16 TPOT (ms)",
            "value": 11.38,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775216095926,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=4 throughput (tok/s)",
            "value": 392.46,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=4 Total Tput (tok/s)",
            "value": 3527.97,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=4 TTFT (ms)",
            "value": 277.1,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=4 TPOT (ms)",
            "value": 9.66,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=4 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775216403983,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=32 throughput (tok/s)",
            "value": 2162.51,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=32 Total Tput (tok/s)",
            "value": 4318.18,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=32 TTFT (ms)",
            "value": 140.95,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=32 TPOT (ms)",
            "value": 14.29,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775216438082,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=16 throughput (tok/s)",
            "value": 1306.34,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=16 Total Tput (tok/s)",
            "value": 11789.37,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=16 TTFT (ms)",
            "value": 306.81,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=16 TPOT (ms)",
            "value": 11.49,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775216840626,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=4 throughput (tok/s)",
            "value": 552.87,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=4 Total Tput (tok/s)",
            "value": 1111.15,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=4 TTFT (ms)",
            "value": 81.02,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=4 TPOT (ms)",
            "value": 6.92,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=4 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775217207970,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=4 throughput (tok/s)",
            "value": 527.64,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=4 Total Tput (tok/s)",
            "value": 4743.2,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=4 TTFT (ms)",
            "value": 249.69,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=4 TPOT (ms)",
            "value": 7.13,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=4 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775217351626,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=16 throughput (tok/s)",
            "value": 794.44,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=16 Total Tput (tok/s)",
            "value": 7169.62,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=16 TTFT (ms)",
            "value": 480.4,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=16 TPOT (ms)",
            "value": 19.04,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=16 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775217362678,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=128 throughput (tok/s)",
            "value": 3647.76,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=128 Total Tput (tok/s)",
            "value": 32932.3,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=128 TTFT (ms)",
            "value": 1153.51,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=128 TPOT (ms)",
            "value": 33.27,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775217573613,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=8 throughput (tok/s)",
            "value": 596.54,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=8 Total Tput (tok/s)",
            "value": 1188.68,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=8 TTFT (ms)",
            "value": 215.48,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=8 TPOT (ms)",
            "value": 12.91,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=8 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775217719386,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=16 throughput (tok/s)",
            "value": 2041.15,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=16 Total Tput (tok/s)",
            "value": 4104.03,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=16 TTFT (ms)",
            "value": 99.53,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=16 TPOT (ms)",
            "value": 7.55,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=16 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775217771343,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=32 throughput (tok/s)",
            "value": 1740.02,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=32 Total Tput (tok/s)",
            "value": 15559.78,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=32 TTFT (ms)",
            "value": 496.51,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=32 TPOT (ms)",
            "value": 17.37,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775217777930,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=32 throughput (tok/s)",
            "value": 2936.1,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=32 Total Tput (tok/s)",
            "value": 5862.92,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=32 TTFT (ms)",
            "value": 158.91,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=32 TPOT (ms)",
            "value": 10.46,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=32 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775218095255,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=16 throughput (tok/s)",
            "value": 1167.9,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=16 Total Tput (tok/s)",
            "value": 10540,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=16 TTFT (ms)",
            "value": 357.33,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=16 TPOT (ms)",
            "value": 12.87,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775218119994,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=4 throughput (tok/s)",
            "value": 541.49,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=4 Total Tput (tok/s)",
            "value": 1088.27,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=4 TTFT (ms)",
            "value": 99.62,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=4 TPOT (ms)",
            "value": 7.04,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=4 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775218541673,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=64 throughput (tok/s)",
            "value": 4336.26,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=64 Total Tput (tok/s)",
            "value": 8674.47,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=64 TTFT (ms)",
            "value": 182.5,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=64 TPOT (ms)",
            "value": 14.16,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=64 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775218734316,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=128 throughput (tok/s)",
            "value": 4890.34,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=128 Total Tput (tok/s)",
            "value": 9791.41,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=128 TTFT (ms)",
            "value": 249.03,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=128 TPOT (ms)",
            "value": 25.3,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775218879314,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=32 throughput (tok/s)",
            "value": 3309.43,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=32 Total Tput (tok/s)",
            "value": 3720.33,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=32 TTFT (ms)",
            "value": 122.4,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=32 TPOT (ms)",
            "value": 9.41,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=32 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775219220612,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=64 throughput (tok/s)",
            "value": 3280.04,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=64 Total Tput (tok/s)",
            "value": 6561.55,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=64 TTFT (ms)",
            "value": 210.56,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=64 TPOT (ms)",
            "value": 18.79,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775219358438,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=256 throughput (tok/s)",
            "value": 5882.31,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=256 Total Tput (tok/s)",
            "value": 11758.93,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=256 TTFT (ms)",
            "value": 482.85,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=256 TPOT (ms)",
            "value": 42.12,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=256 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775219705847,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=8 throughput (tok/s)",
            "value": 979.07,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=8 Total Tput (tok/s)",
            "value": 1950.9,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=8 TTFT (ms)",
            "value": 104.79,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=8 TPOT (ms)",
            "value": 7.88,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=8 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      }
    ]
  }
}