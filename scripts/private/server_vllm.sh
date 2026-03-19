#export ATOM_DISABLE_VLLM_PLUGIN=1

export SAFETENSORS_FAST_GPU=1
export VLLM_ROCM_USE_AITER=1
export VLLM_RPC_TIMEOUT=1800000

export AITER_QUICK_REDUCE_QUANTIZATION=INT4
export ATOM_ENABLE_QK_NORM_ROPE_CACHE_QUANT_FUSION=1

export VLLM_CACHE_ROOT=/root/.cache/vllm
export TORCHINDUCTOR_CACHE_DIR=/root/.cache/inductor
rm -rf /root/.cache/vllm

model_path=/data/models/Qwen3-235B-A22B-Instruct-2507-FP8/
model_path=/models/Kimi-K2-Thinking-MXFP4/
# model_path=/models/DeepSeek-R1-0528-MXFP4
model_path=/models/DeepSeek-R1-0528
rm -rf /root/.cache/vllm/
export VLLM_CUSTOM_SCOPES_FOR_PROFILING=1
PROFILER_DIR="/home/hatwu/profiler_vllm_oot_ds_fp4"
mkdir -p "$PROFILER_DIR"
PROFILER_CONFIG="{\"profiler\":\"torch\",\"torch_profiler_dir\":\"${PROFILER_DIR}\",\"torch_profiler_with_stack\":true,\"torch_profiler_record_shapes\":false,\"torch_profiler_with_flops\":false,\"torch_profiler_use_gzip\":true,\"torch_profiler_dump_cuda_time_total\":true,\"torch_profiler_with_memory\":false,\"ignore_frontend\":false,\"delay_iterations\":0,\"max_iterations\":0}"
export VLLM_TORCH_PROFILER_DIR="$PROFILER_DIR"

vllm serve $model_path \
    --host localhost \
    --port 8000 \
    --tensor-parallel-size 8 \
    --trust-remote-code \
    --gpu_memory_utilization 0.9 \
    --async-scheduling \
    --compilation-config '{"cudagraph_mode": "FULL_AND_PIECEWISE"}' \
    --kv-cache-dtype fp8 \
    --max-num-batched-tokens 16384 \
    --max-model-len 16384 \
    --no-enable-prefix-caching \
    --load-format fastsafetensors \
    --profiler-config "$PROFILER_CONFIG"
#    2>&1 | tee log.serve.log &
#    --profiler-config "$PROFILER_CONFIG"
#   --enable-expert-parallel \
#    --load-format fastsafetensors \