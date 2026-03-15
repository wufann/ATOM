#!/bin/bash
# Launch script for ATOM-aligned decode UT
# Usage:
#   Single GPU:  bash run_decode_ut.sh
#   Multi-GPU:   bash run_decode_ut.sh --tp 8
#   Custom args: bash run_decode_ut.sh --tp 4 --bs 32 --ctx 2048

set -e

TP_SIZE=1
BATCH_SIZE=1
CONTEXT_LEN=128
DECODE_STEPS=20
WARMUP=5
MODEL_PATH="/home/hatwu/models/Kimi-K2-Thinking-MXFP4-Mini-1Layer"

while [[ $# -gt 0 ]]; do
    case $1 in
        --tp)       TP_SIZE="$2";       shift 2 ;;
        --bs)       BATCH_SIZE="$2";    shift 2 ;;
        --ctx)      CONTEXT_LEN="$2";   shift 2 ;;
        --steps)    DECODE_STEPS="$2";  shift 2 ;;
        --warmup)   WARMUP="$2";        shift 2 ;;
        --model)    MODEL_PATH="$2";    shift 2 ;;
        *)          echo "Unknown arg: $1"; exit 1 ;;
    esac
done

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SCRIPT="$SCRIPT_DIR/run_mini_model.py"

COMMON_ARGS="--model-path $MODEL_PATH --batch-size $BATCH_SIZE --context-len $CONTEXT_LEN --decode-steps $DECODE_STEPS --warmup $WARMUP --tp-size $TP_SIZE"

if [ "$TP_SIZE" -gt 1 ]; then
    echo "Launching with torchrun (TP=$TP_SIZE)"
    torchrun --nproc_per_node=$TP_SIZE --master_port=29500 \
        "$SCRIPT" $COMMON_ARGS
else
    echo "Launching single GPU"
    python3 "$SCRIPT" $COMMON_ARGS
fi
