#!/usr/bin/env python3
# SPDX-License-Identifier: MIT
# Copyright (C) 2024-2025, Advanced Micro Devices, Inc. All rights reserved.
"""
Check whether ATOM supports Gemma 3 without loading the full engine.

Usage:
  python scripts/verify_gemma3/check_gemma3_support.py
  python scripts/verify_gemma3/check_gemma3_support.py --model google/gemma-3-4b-it
"""
import argparse
import os
import sys

repo_root = os.path.abspath(
    os.path.join(os.path.dirname(__file__), "../..")
)
if repo_root not in sys.path:
    sys.path.insert(0, repo_root)

# Use local AITER clone when present (avoids ImportError from aiter)
_aiter_dir = os.environ.get("AITER_DIR") or os.path.join(
    os.path.dirname(repo_root), "aiter"
)
if os.path.isdir(_aiter_dir):
    _existing = os.environ.get("PYTHONPATH", "")
    os.environ["PYTHONPATH"] = _aiter_dir + (f":{_existing}" if _existing else "")
    if _aiter_dir not in sys.path:
        sys.path.insert(0, _aiter_dir)

DEFAULT_MODEL = "google/gemma-3-1b-it"
GEMMA3_TEXT_ARCH = "Gemma3ForCausalLM"
GEMMA3_VLM_ARCH = "Gemma3ForConditionalGeneration"


def main():
    parser = argparse.ArgumentParser(
        description="Check if ATOM supports Gemma 3 for a given model"
    )
    parser.add_argument(
        "--model",
        "-m",
        type=str,
        default=DEFAULT_MODEL,
        help=f"HuggingFace model id or path (default: {DEFAULT_MODEL})",
    )
    args = parser.parse_args()

    from transformers import AutoConfig

    from atom.model_engine.model_runner import support_model_arch_dict

    print(f"Model: {args.model}")
    print("ATOM registry (support_model_arch_dict) includes:")
    for arch in (GEMMA3_TEXT_ARCH, GEMMA3_VLM_ARCH):
        supported = arch in support_model_arch_dict
        print(f"  {arch}: {'yes' if supported else 'no'}")

    try:
        config = AutoConfig.from_pretrained(
            args.model, trust_remote_code=True
        )
        archs = getattr(config, "architectures", None) or []
        model_type = getattr(config, "model_type", "")
        print(f"\nConfig from HuggingFace:")
        print(f"  architectures: {archs}")
        print(f"  model_type: {model_type}")

        if not archs:
            print("\n  Could not determine architecture.")
            sys.exit(1)

        primary = archs[0]
        if primary in support_model_arch_dict:
            print(f"\nOK: ATOM supports this model (architecture {primary!r}).")
        else:
            print(
                f"\n*** ATOM does not support architecture {primary!r}. ***"
            )
            print(
                "Add it to support_model_arch_dict in "
                "atom/model_engine/model_runner.py and implement the model class."
            )
            sys.exit(1)
    except Exception as e:
        print(f"\nFailed to load config: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
