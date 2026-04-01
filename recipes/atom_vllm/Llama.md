# Llama-3 (70B + 405B MXFP4) with ATOM vLLM Plugin Backend

This recipe shows how to run `meta-llama/Llama-3.1-70B-Instruct` and `amd/Llama-3.1-405B-Instruct-MXFP4-Preview` with the ATOM vLLM plugin backend. For background on the plugin backend, see [ATOM vLLM Plugin Backend](../../docs/vllm_plugin_backend_guide.md).

## Step 1: Pull the OOT Docker

```bash
docker pull rocm/atom-dev:vllm-latest
```

## Step 2: Launch vLLM Server

The ATOM vLLM plugin backend keeps the standard vLLM CLI, server APIs, and general usage flow compatible with upstream vLLM. For general server options and API usage, refer to the [official vLLM documentation](https://docs.vllm.ai/en/latest/).

Both models are gated on Hugging Face. Make sure your environment has access first:

```bash
huggingface-cli login
```

### Llama-3.1-70B-Instruct (TP=1)

```bash
vllm serve meta-llama/Llama-3.1-70B-Instruct \
    --host localhost \
    --port 8000 \
    --tensor-parallel-size 1 \
    --kv-cache-dtype fp8 \
    --gpu_memory_utilization 0.9 \
    --async-scheduling \
    --compilation-config '{"cudagraph_mode": "FULL_AND_PIECEWISE"}' \
    --no-enable-prefix-caching
```

### Llama-3.1-405B-Instruct-MXFP4-Preview (TP=8)

```bash
vllm serve amd/Llama-3.1-405B-Instruct-MXFP4-Preview \
    --host localhost \
    --port 8000 \
    --tensor-parallel-size 8 \
    --kv-cache-dtype fp8 \
    --gpu_memory_utilization 0.9 \
    --async-scheduling \
    --compilation-config '{"cudagraph_mode": "FULL_AND_PIECEWISE"}' \
    --no-enable-prefix-caching
```

## Step 3: Performance Benchmark

Users can use the default `vllm bench` command for performance benchmarking:

```bash
vllm bench serve \
    --host localhost \
    --port 8000 \
    --model meta-llama/Llama-3.1-70B-Instruct \
    --dataset-name random \
    --random-input-len 8000 \
    --random-output-len 1000 \
    --random-range-ratio 0.8 \
    --max-concurrency 64 \
    --num-prompts 640 \
    --trust-remote-code \
    --percentile-metrics ttft,tpot,itl,e2el
```

## Step 4: Accuracy Validation

### Llama-3.1-70B-Instruct

```bash
lm_eval --model local-completions \
        --model_args model=meta-llama/Llama-3.1-70B-Instruct,base_url=http://localhost:8000/v1/completions,num_concurrent=16,max_retries=3,tokenized_requests=False \
        --tasks gsm8k \
        --num_fewshot 3
```

### Llama-3.1-405B-Instruct-MXFP4-Preview

```bash
lm_eval --model local-completions \
        --model_args model=amd/Llama-3.1-405B-Instruct-MXFP4-Preview,base_url=http://localhost:8000/v1/completions,num_concurrent=16,max_retries=3,tokenized_requests=False \
        --tasks gsm8k \
        --num_fewshot 3
```

## CI Alignment Notes

- `Llama-3.1-70B-Instruct` uses TP=1 in nightly accuracy (`RUN_LLAMA70_TP1`).
- `Llama-3.1-405B-Instruct-MXFP4-Preview` uses TP=8 in nightly accuracy (`RUN_LLAMA405_MXFP4_TP8`).
