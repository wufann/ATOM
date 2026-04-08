# SPDX-License-Identifier: MIT
# Copyright (C) 2024-2025, Advanced Micro Devices, Inc. All rights reserved.

"""Chat completion handler for the OpenAI-compatible API."""

import asyncio
import json
import logging
import time
import uuid
from typing import Any, AsyncGenerator, Dict, List, Optional

from .protocol import (
    CHAT_COMPLETION_CHUNK_OBJECT,
    STREAM_DONE_MESSAGE,
    ChatCompletionRequest,
    ChatCompletionResponse,
)
from .reasoning import ReasoningFilter, separate_reasoning

logger = logging.getLogger("atom")


def create_chat_chunk(
    request_id: str,
    model: str,
    delta: Optional[Dict[str, str]] = None,
    finish_reason: Optional[str] = None,
    usage: Optional[Dict] = None,
) -> str:
    """Create a chat completion chunk in SSE format."""
    chunk = {
        "id": request_id,
        "object": CHAT_COMPLETION_CHUNK_OBJECT,
        "created": int(time.time()),
        "model": model,
        "choices": [
            {
                "index": 0,
                "delta": delta if delta else {},
                "finish_reason": finish_reason,
                "logprobs": None,
            }
        ],
    }
    if usage is not None:
        chunk["usage"] = usage
    return f"data: {json.dumps(chunk)}\n\n"


async def stream_chat_response(
    request_id: str,
    model: str,
    prompt: str,
    stream_queue: asyncio.Queue,
    seq_id: int,
    tokenizer,
    cleanup_fn,
) -> AsyncGenerator[str, None]:
    """Generate streaming chat completion response with reasoning separation.

    Yields SSE chunks with reasoning_content and content in separate delta fields,
    following the SGLang/vLLM pattern.
    """
    num_tokens_input = len(tokenizer.encode(prompt))
    num_tokens_output = 0
    reasoning_filter = ReasoningFilter()
    first_chunk = True

    # Send initial role chunk
    yield create_chat_chunk(request_id, model, delta={"role": "assistant"})

    while True:
        chunk_data = await stream_queue.get()
        new_text = chunk_data["text"]
        num_tokens_output += len(chunk_data.get("token_ids", []))
        finish = chunk_data.get("finish_reason")

        # Process through reasoning filter
        segments = reasoning_filter.process(new_text)
        if chunk_data.get("finished", False):
            segments.extend(reasoning_filter.flush())

        # Emit delta chunks for each segment
        for field, text in segments:
            if text:
                yield create_chat_chunk(request_id, model, delta={field: text})

        if chunk_data.get("finished", False):
            break

    cleanup_fn(request_id, seq_id)

    # Final chunks: finish reason + usage
    usage = {
        "prompt_tokens": num_tokens_input,
        "completion_tokens": num_tokens_output,
        "total_tokens": num_tokens_input + num_tokens_output,
    }
    yield create_chat_chunk(request_id, model, finish_reason="stop")
    # Usage-only chunk
    usage_chunk = {
        "id": request_id,
        "object": CHAT_COMPLETION_CHUNK_OBJECT,
        "created": int(time.time()),
        "model": model,
        "usage": usage,
    }
    yield f"data: {json.dumps(usage_chunk)}\n\n"
    yield STREAM_DONE_MESSAGE


def build_chat_response(
    request_id: str,
    model: str,
    raw_text: str,
    final_output: Dict[str, Any],
) -> ChatCompletionResponse:
    """Build a non-streaming chat completion response with reasoning separation."""
    reasoning_content, content = separate_reasoning(raw_text)

    message = {"role": "assistant", "content": content}
    if reasoning_content is not None:
        message["reasoning_content"] = reasoning_content

    return ChatCompletionResponse(
        id=request_id,
        created=int(time.time()),
        model=model,
        choices=[
            {
                "index": 0,
                "message": message,
                "finish_reason": final_output["finish_reason"],
            }
        ],
        usage={
            "prompt_tokens": final_output["num_tokens_input"],
            "completion_tokens": final_output["num_tokens_output"],
            "total_tokens": final_output["num_tokens_input"]
            + final_output["num_tokens_output"],
            "ttft_s": round(final_output.get("ttft", 0.0), 4),
            "tpot_s": round(final_output.get("tpot", 0.0), 4),
            "latency_s": round(final_output.get("latency", 0.0), 4),
        },
    )
