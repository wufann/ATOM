# ATOM vLLM Benchmark Guide

Use this guide when the user asks to benchmark ATOM vLLM serving performance, compare plugin on/off impact, or validate a performance claim.

## What this guide should do

1. Confirm benchmark goal and variables (throughput, TTFT, TPOT, E2EL, etc.).
2. Build a valid A/B benchmark setup where only one variable changes.
3. Run repeatable measurements and summarize median results.
4. Report reproducible commands, key metrics, and known risks.

## Inputs To Collect First

Before running any benchmark, confirm:

- Model path (HF id or local path)
- Serving backend (`vllm`)
- Hardware shape (GPU type/count)
- `tensor_parallel_size`, KV cache dtype, and scheduler flags
- Request mix (ISL/OSL/concurrency/request rate)
- Comparison target:
  - baseline (plugin off)
  - candidate (plugin on)

If any of these are missing, ask before execution.

## Environment Checklist

For each benchmark round:

- Kill old server processes and verify VRAM is released.
- Clear cache when startup behavior is inconsistent:
  - `rm -rf /root/.cache/atom/*`
  - `rm -rf /root/.cache/vllm/*`
- Set stable logging:
  - `export AITER_LOG_LEVEL=WARNING`
- Confirm server is actually ready:
  - `curl -sf http://localhost:8000/v1/models`
  - `rocm-smi --showmemuse` and verify allocated memory is greater than 0.

## A/B Benchmark Workflow

Always benchmark both conditions:

- **A (baseline):** plugin disabled
- **B (candidate):** plugin enabled

Only one variable is allowed to change between A and B.

### 1) Launch server

Use the same launch command template for both A/B, changing only plugin toggle env vars.

```bash
vllm serve <model_path> \
  --host localhost \
  --port 8000 \
  --tensor-parallel-size <tp> \
  --trust-remote-code \
  --kv-cache-dtype fp8
```

Common plugin toggles:

- `ATOM_DISABLE_VLLM_PLUGIN=1` (disable plugin path)
- `ATOM_DISABLE_VLLM_PLUGIN_ATTENTION=1` (disable plugin attention path)
- `VLLM_ROCM_USE_AITER=1` (enable aiter path when needed)

### 2) Run smoke validation

```bash
curl -sf http://localhost:8000/v1/models
vllm bench serve \
  --backend openai-chat \
  --base-url http://localhost:8000 \
  --endpoint /v1/chat/completions \
  --model <model> \
  --dataset-name random \
  --random-input-len 32 \
  --random-output-len 32 \
  --max-concurrency <smoke_conc> \
  --num-prompts <smoke_conc_x10> \
  --num-warmups <smoke_conc_x2> \
  --request-rate 1 \
  --disable-tqdm
```

Use `smoke_conc_x10 = smoke_conc * 10` and `smoke_conc_x2 = smoke_conc * 2`.

If smoke test fails, do not continue with performance comparison.

### 3) Run benchmark workload

```bash
vllm bench serve \
  --backend openai-chat \
  --base-url http://localhost:8000 \
  --endpoint /v1/chat/completions \
  --model=<model> \
  --dataset-name=random \
  --random-input-len=<isl> \
  --random-output-len=<osl> \
  --random-range-ratio=0.8 \
  --num-prompts=<conc_x10> \
  --num-warmups=<conc_x2> \
  --max-concurrency=<conc> \
  --trust-remote-code \
  --request-rate=inf \
  --ignore-eos \
  --disable-tqdm \
  --save-result \
  --percentile-metrics="ttft,tpot,itl,e2el"
```

### 4) Minimum benchmark matrix

| Scenario | ISL | OSL | Concurrency |
|---|---:|---:|---:|
| Short in / short out | 1024 | 1024 | 1, 8, 32, 128 |
| Short in / long out | 1024 | 8192 | 1, 8, 32 |
| Long in / short out | 8192 | 1024 | 1, 8, 32, 128 |

### 5) Repetition and statistics

- Run each scenario at least 1 times.
- Use median values for comparison.
- If variance is large, increase repeat count.

## Regression Profiling Workflow

When regression is observed:

```bash
# 1) Start (or restart) server with profiler enabled
vllm serve <model_path> \
  --host localhost \
  --port 8000 \
  --tensor-parallel-size <tp> \
  --trust-remote-code \
  --kv-cache-dtype fp8 \
  --profiler-config '<profiler_config_json>'

# 2) Run profiled benchmark workload
vllm bench serve \
  --backend openai-chat \
  --base-url http://localhost:8000 \
  --endpoint /v1/chat/completions \
  --model <model> \
  --dataset-name random \
  --random-input-len <isl> \
  --random-output-len <osl> \
  --max-concurrency <conc> \
  --num-prompts <conc_x10> \
  --num-warmups <conc_x2> \
  --request-rate inf \
  --profile \
  --save-result
```

- `--profile` requires server-side `--profiler-config`.
- Keep profiler config identical between plugin-off and plugin-on runs.

## Reporting Template

Use this format in final response:

```markdown
### ATOM vLLM Benchmark Result
- Goal: <what was compared and why>
- Setup:
  - Model: <model>
  - Hardware: <gpu and count>
  - Fixed args: <tp, kv dtype, scheduler flags>
- Validation: <smoke test pass/fail>
- Benchmark:
  - Baseline (plugin off): <throughput/latency median>
  - Candidate (plugin on): <throughput/latency median>
  - Delta: <percent change>
- Confidence:
  - Runs: <repeat count>
  - Variance: <low/medium/high>
- Risk:
  - <known risks or unknowns>
- Repro:
  - <exact launch command A>
  - <exact launch command B>
  - <exact benchmark command>
```

## Guardrails

- Never compare runs with different model, TP, KV dtype, or request mix.
- If GPU memory is not allocated, treat benchmark results as invalid.
- If plugin-on and plugin-off outputs differ semantically, run accuracy checks before claiming performance gains.
