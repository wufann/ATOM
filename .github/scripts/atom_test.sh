#!/bin/bash

#############################################
# GPU Load Test for DeepSeek-R1 Model
# Clean version with improved table output
#############################################

MODEL_NAME="deepseek-ai/DeepSeek-R1-0528"
MODEL_LOCAL_PATH="/models/deepseek-ai/DeepSeek-R1-0528"
TENSOR_PARALLEL=8
KV_CACHE_DTYPE="fp8"
TEMPERATURE=0

LOG_FILE="/tmp/gpu_load_test_$(hostname)_$(date +%Y%m%d_%H%M%S).log"

echo "========================================="
echo "GPU Load Test - DeepSeek-R1"
echo "========================================="
echo "Hostname: $(hostname)"
echo "Date: $(date)"
echo "Log: $LOG_FILE"
echo ""

# Check if model exists locally
if [ -f "$MODEL_LOCAL_PATH/config.json" ]; then
    echo "✅ Found model at: $MODEL_LOCAL_PATH"
    MODEL_PATH="$MODEL_LOCAL_PATH"
else
    echo "⚠️  Model not found locally, will download: $MODEL_NAME"
    MODEL_PATH="$MODEL_NAME"
fi
echo ""

# GPU Status
if command -v rocm-smi &> /dev/null; then
    GPU_COUNT=$(rocm-smi --showid 2>/dev/null | grep -c 'GPU' || echo '8')
    echo "GPU Count: $GPU_COUNT"
    echo ""
fi

# Remove existing container
docker rm -f atom_inference 2>/dev/null

# Run the test
echo "Starting model load test..."
echo ""

docker run \
  --name atom_inference \
  --network=host \
  --device=/dev/kfd \
  --device=/dev/dri \
  --group-add video \
  --cap-add=SYS_PTRACE \
  --security-opt seccomp=unconfined \
  -v /data:/data \
  -e HF_HOME=/data/huggingface_cache \
  -e NCCL_DEBUG=WARN \
  -e RCCL_DEBUG=WARN \
  --shm-size=16G \
  --ulimit memlock=-1 \
  --ulimit stack=67108864 \
  rocm/atom-dev:latest \
  bash -c '
    MODEL_RUNNER="/app/ATOM/atom/model_engine/model_runner.py"

    # Add timing instrumentation
    if ! grep -q "^import time$" "$MODEL_RUNNER"; then
        sed -i "1a import time" "$MODEL_RUNNER"
    fi

    # Instrument model loading
    sed -i "/load_model(self.model, config.model, config.hf_config, config.load_dummy)/i\\
        load_start_time = time.time()\\
        logger.info(f\"[LOAD_START] GPU {self.rank} | Time: {load_start_time:.6f}\")" \
        "$MODEL_RUNNER"

    sed -i "/load_model(self.model, config.model, config.hf_config, config.load_dummy)/a\\
        load_elapsed = time.time() - load_start_time\\
        logger.info(f\"[LOAD_DONE] GPU {self.rank} | Duration: {load_elapsed:.2f}s\")" \
        "$MODEL_RUNNER"

    # Run inference
    python3 -m atom.examples.simple_inference \
      --model "'"$MODEL_PATH"'" \
      --kv_cache_dtype "'"$KV_CACHE_DTYPE"'" \
      -tp "'"$TENSOR_PARALLEL"'" \
      --temperature "'"$TEMPERATURE"'"
  ' 2>&1 | tee "$LOG_FILE"

# Analyze results
echo ""
echo "========================================="
echo "GPU LOAD TIME ANALYSIS"
echo "========================================="
echo ""

# Check if test completed
LOAD_COUNT=$(grep -c "\[LOAD_DONE\]" "$LOG_FILE" 2>/dev/null || echo 0)

if [ "$LOAD_COUNT" -eq 0 ]; then
    echo "❌ Test failed - no GPU load completion found"
    echo "Check log: $LOG_FILE"
    exit 1
fi

# Extract GPU load times into array
declare -A gpu_times
while IFS= read -r line; do
    # Extract GPU number and duration
    gpu_num=$(echo "$line" | grep -oP 'GPU \K\d+')
    duration=$(echo "$line" | grep -oP 'Duration: \K[0-9.]+')

    if [ -n "$gpu_num" ] && [ -n "$duration" ]; then
        gpu_times[$gpu_num]=$duration
    fi
done < <(grep "\[LOAD_DONE\]" "$LOG_FILE")

# Find min and max times
min_time=""
max_time=""
for gpu in "${!gpu_times[@]}"; do
    time=${gpu_times[$gpu]}
    if [ -z "$min_time" ] || (( $(awk -v t="$time" -v m="$min_time" 'BEGIN {print (t < m)}') )); then
        min_time=$time
    fi
    if [ -z "$max_time" ] || (( $(awk -v t="$time" -v m="$max_time" 'BEGIN {print (t > m)}') )); then
        max_time=$time
    fi
done

# Sort GPUs by load time
sorted_gpus=$(for gpu in "${!gpu_times[@]}"; do
    echo "$gpu ${gpu_times[$gpu]}"
done | sort -k2 -n)

# Print table header
echo "┌───────┬───────────┬──────────────┬──────────────────────┐"
echo "│  GPU  │ Load Time │    Status    │  Delta from Fastest  │"
echo "├───────┼───────────┼──────────────┼──────────────────────┤"

# Print each GPU
fastest_printed=false
while IFS= read -r line; do
    gpu=$(echo "$line" | awk '{print $1}')
    time=$(echo "$line" | awk '{print $2}')

    # Calculate delta
    delta=$(awk -v t="$time" -v m="$min_time" 'BEGIN {printf "%.2f", t - m}')

    # Determine status
    if [ "$fastest_printed" = false ]; then
        status="✅ Fastest"
        delta_str="-"
        fastest_printed=true
    elif (( $(awk -v d="$delta" 'BEGIN {print (d < 1)}') )); then
        status="✅ Excellent"
        delta_str=$(printf "+%.2fs" "$delta")
    elif (( $(awk -v d="$delta" 'BEGIN {print (d < 5)}') )); then
        status="✅ Good"
        delta_str=$(printf "+%.2fs" "$delta")
    elif (( $(awk -v d="$delta" 'BEGIN {print (d < 10)}') )); then
        status="⚠️  Moderate"
        delta_str=$(printf "+%.2fs" "$delta")
    elif (( $(awk -v d="$delta" 'BEGIN {print (d < 100)}') )); then
        status="❌ SLOW"
        multiplier=$(awk -v t="$time" -v m="$min_time" 'BEGIN {printf "%.1f", t / m}')
        delta_str=$(printf "+%.0fs (%.1fx slower!)" "$delta" "$multiplier")
    else
        status="❌ VERY SLOW"
        multiplier=$(awk -v t="$time" -v m="$min_time" 'BEGIN {printf "%.1f", t / m}')
        delta_str=$(printf "+%.0fs (%.1fx slower!)" "$delta" "$multiplier")
    fi

    printf "│ GPU %1s │ %-9s │ %-12s │ %-20s │\n" "$gpu" "${time}s" "$status" "$delta_str"
    echo "├───────┼───────────┼──────────────┼──────────────────────┤"
done <<< "$sorted_gpus"

# Table footer
echo "└───────┴───────────┴──────────────┴──────────────────────┘"
echo ""

# Summary statistics
avg_time=$(awk 'BEGIN {sum=0; count=0} {sum+=$2; count++} END {if(count>0) printf "%.2f", sum/count}' <<< "$sorted_gpus")
delta_range=$(awk -v max="$max_time" -v min="$min_time" 'BEGIN {printf "%.2f", max - min}')
variance=$(awk -v max="$max_time" -v min="$min_time" -v avg="$avg_time" 'BEGIN {if(avg>0) printf "%.2f", ((max - min) / avg) * 100; else print "0"}')

echo "Summary:"
echo "  GPUs Tested:  $LOAD_COUNT"
echo "  Fastest:      ${min_time}s"
echo "  Slowest:      ${max_time}s"
echo "  Average:      ${avg_time}s"
echo "  Delta:        ${delta_range}s"
echo "  Variance:     ${variance}%"
echo ""

# Overall assessment
if (( $(awk -v d="$delta_range" 'BEGIN {print (d < 1)}') )); then
    echo "✅ EXCELLENT - All GPUs load within 1s of each other"
elif (( $(awk -v d="$delta_range" 'BEGIN {print (d < 5)}') )); then
    echo "✅ GOOD - GPUs load within 5s variance"
elif (( $(awk -v d="$delta_range" 'BEGIN {print (d < 10)}') )); then
    echo "⚠️  MODERATE - Some variance detected (${delta_range}s)"
else
    echo "❌ HIGH VARIANCE - Investigate slow GPUs (${delta_range}s difference)"
    echo ""
    echo "Recommended actions:"
    echo "  1. Check which GPUs are slow (see table above)"
    echo "  2. Run test again to verify consistency"
    echo "  3. Check firmware versions: rocm-smi --showfw"
    echo "  4. Check PCIe links: lspci -vv | grep LnkSta"
fi

echo ""
echo "Full log: $LOG_FILE"
echo "========================================="
 
