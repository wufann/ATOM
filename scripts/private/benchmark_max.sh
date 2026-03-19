MODEL=/home/hatwu/models/Kimi-K2-Thinking-MXFP4/
MODEL=/models/DeepSeek-R1-0528-MXFP4
MODEL=/models/DeepSeek-R1-0528
PORT=8000
log_dir=/home/hatwu/ATOM/scripts/private/ds_fp8_result
mkdir -p ${log_dir}
RESULT_FILENAME=oot_ds_fp4_result

ISL_LIST=${ISL:-"1000 8000"}
OSL_LIST=${OSL:-"1000 8000"}
CONCURRENCY_LIST=${CONCURRENCY:-"4 8 16 32 64"}

ISL_LIST=${ISL:-"1000"}
OSL_LIST=${OSL:-"1000"}
CONCURRENCY_LIST=${CONCURRENCY:-"4"}

for ISL in $ISL_LIST; do
for OSL in $OSL_LIST; do
for CONCURRENCY in $CONCURRENCY_LIST; do
    NUM_PROMPTS=$((CONCURRENCY * 10))
    echo "========== Running benchmark with ISL=${ISL} OSL=${OSL} CONCURRENCY=${CONCURRENCY} =========="
    python /home/hatwu/bench_serving/benchmark_serving.py \
        --model=$MODEL --backend=vllm --base-url=http://localhost:$PORT \
        --trust-remote-code \
        --dataset-name=random \
        --random-input-len=${ISL} --random-output-len=${OSL} \
        --random-range-ratio 0.8 \
        --num-prompts=${NUM_PROMPTS} \
        --max-concurrency=${CONCURRENCY} \
        --request-rate=inf --ignore-eos \
        --save-result --result-dir=${log_dir} --result-filename=${RESULT_FILENAME}_isl${ISL}_osl${OSL}_c${CONCURRENCY}.json \
        --percentile-metrics="ttft,tpot,itl,e2el"
done
done
done
