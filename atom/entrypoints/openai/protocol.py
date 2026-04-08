# SPDX-License-Identifier: MIT
# Copyright (C) 2024-2025, Advanced Micro Devices, Inc. All rights reserved.

"""Pydantic request/response models for the OpenAI-compatible API."""

import time
from typing import Any, Dict, List, Optional, Union

from pydantic import BaseModel, ConfigDict, Field

# ============================================================================
# Constants
# ============================================================================

DEFAULT_TEMPERATURE = 1.0
DEFAULT_TOP_K = -1
DEFAULT_TOP_P = 1.0
DEFAULT_MAX_TOKENS = 8192
CHAT_COMPLETION_OBJECT = "chat.completion"
CHAT_COMPLETION_CHUNK_OBJECT = "chat.completion.chunk"
TEXT_COMPLETION_OBJECT = "text_completion"
STREAM_DONE_MESSAGE = "data: [DONE]\n\n"


# ============================================================================
# Request Models
# ============================================================================


class ChatMessage(BaseModel):
    """Represents a single chat message."""

    role: str
    content: Union[str, List[Dict[str, Any]]]

    model_config = ConfigDict(extra="allow")

    def get_content_text(self) -> str:
        """Extract text content, handling both string and multimodal content parts."""
        if isinstance(self.content, str):
            return self.content
        # OpenAI multimodal format: [{"type": "text", "text": "..."}, ...]
        parts = []
        for part in self.content:
            if isinstance(part, dict) and part.get("type") == "text":
                parts.append(part.get("text", ""))
        return "\n".join(parts)


class ChatCompletionRequest(BaseModel):
    """Request model for chat completions (OpenAI-compatible)."""

    model_config = {"extra": "ignore"}

    model: Optional[str] = None
    messages: Optional[List[ChatMessage]] = None
    prompt: Optional[List[ChatMessage]] = None  # Accept 'prompt' as alias
    temperature: Optional[float] = DEFAULT_TEMPERATURE
    top_k: Optional[int] = DEFAULT_TOP_K
    top_p: Optional[float] = DEFAULT_TOP_P
    max_tokens: Optional[int] = DEFAULT_MAX_TOKENS
    stop: Optional[List[str]] = None
    ignore_eos: Optional[bool] = False
    stream: Optional[bool] = False
    seed: Optional[int] = None
    chat_template_kwargs: Optional[Dict[str, Any]] = None
    # Accepted for compatibility, not actively used:
    presence_penalty: Optional[float] = 0.0
    frequency_penalty: Optional[float] = 0.0
    n: Optional[int] = 1

    def get_messages(self) -> List[ChatMessage]:
        """Get messages from either 'messages' or 'prompt' field."""
        if self.messages is not None:
            return self.messages
        elif self.prompt is not None:
            return self.prompt
        else:
            raise ValueError("Either 'messages' or 'prompt' field is required")


class CompletionRequest(BaseModel):
    """Request model for text completions (OpenAI-compatible)."""

    model_config = {"extra": "ignore"}

    model: Optional[str] = None
    prompt: str
    temperature: Optional[float] = DEFAULT_TEMPERATURE
    top_k: Optional[int] = DEFAULT_TOP_K
    top_p: Optional[float] = DEFAULT_TOP_P
    max_tokens: Optional[int] = DEFAULT_MAX_TOKENS
    stop: Optional[List[str]] = None
    ignore_eos: Optional[bool] = False
    stream: Optional[bool] = False


# ============================================================================
# Response Models
# ============================================================================


class ChatCompletionResponse(BaseModel):
    """Response model for chat completions."""

    id: str
    object: str = CHAT_COMPLETION_OBJECT
    created: int
    model: str
    choices: List[Dict[str, Any]]
    usage: Dict[str, Any]

    model_config = ConfigDict(extra="allow")


class CompletionResponse(BaseModel):
    """Response model for text completions."""

    id: str
    object: str = TEXT_COMPLETION_OBJECT
    created: int
    model: str
    choices: List[Dict[str, Any]]
    usage: Dict[str, Any]


class ModelCard(BaseModel):
    """Model card for /v1/models endpoint."""

    id: str
    object: str = "model"
    created: int = Field(default_factory=lambda: int(time.time()))
    owned_by: str = "atom"


class ModelList(BaseModel):
    """Response for /v1/models endpoint."""

    object: str = "list"
    data: List[ModelCard] = Field(default_factory=list)


class ErrorResponse(BaseModel):
    """OpenAI-format error response."""

    error: Dict[str, Any]
