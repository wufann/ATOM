"""
Create a mini model from Kimi-K2-Thinking-MXFP4 with 1 decoder layer for performance profiling.

The original model has 61 decoder layers:
  - Layer 0: Dense MLP (first_k_dense_replace=1)
  - Layers 1-60: MoE (384 routed experts + 1 shared expert)

This script extracts layer 1 (the first MoE layer) and remaps it to layer 0,
preserving the full architecture (attention, MoE, embedding, lm_head) for
accurate decode-stage performance analysis.

Usage:
  # On host (paths default to /shared/amdgpu/home/hattie_wu_qle/models/...)
  python3 create_mini_model.py

  # In Docker container (mounted at /home/hatwu)
  python3 create_mini_model.py --home /home/hatwu
"""

import argparse
import json
import shutil
from pathlib import Path
from collections import defaultdict

from safetensors.torch import load_file, save_file


def parse_args():
    parser = argparse.ArgumentParser(description="Create mini 1-layer model from Kimi-K2-Thinking-MXFP4")
    parser.add_argument("--home", type=str, default="/shared/amdgpu/home/hattie_wu_qle",
                        help="Home directory (use /home/hatwu inside Docker)")
    parser.add_argument("--layer", type=int, default=1,
                        help="Which layer to extract (default: 1, first MoE layer)")
    return parser.parse_args()


def load_weight_map(src_dir):
    with open(src_dir / "model.safetensors.index.json") as f:
        index = json.load(f)
    return index["weight_map"]


def classify_weights(weight_map, selected_layer):
    """Group weights into: layer weights, embedding, norm, lm_head."""
    layer_prefix = f"model.layers.{selected_layer}."
    needed = {}
    files_to_load = defaultdict(list)

    for key, shard_file in weight_map.items():
        keep = False
        new_key = key

        if key.startswith(layer_prefix):
            new_key = key.replace(layer_prefix, "model.layers.0.")
            keep = True
        elif key == "model.embed_tokens.weight":
            keep = True
        elif key == "model.norm.weight":
            keep = True
        elif key == "lm_head.weight":
            keep = True

        if keep:
            needed[key] = (new_key, shard_file)
            files_to_load[shard_file].append((key, new_key))

    return needed, files_to_load


def create_mini_config(src_dir):
    with open(src_dir / "config.json") as f:
        config = json.load(f)

    config["num_hidden_layers"] = 1
    config["first_k_dense_replace"] = 0

    return config


def main():
    args = parse_args()
    selected_layer = args.layer

    home = Path(args.home)
    src_dir = home / "models" / "Kimi-K2-Thinking-MXFP4"
    dst_dir = home / "models" / "Kimi-K2-Thinking-MXFP4-Mini-1Layer"

    print(f"Source model: {src_dir}")
    print(f"Destination:  {dst_dir}")
    print(f"Selected layer: {selected_layer} (MoE layer)")
    print()

    dst_dir.mkdir(parents=True, exist_ok=True)

    weight_map = load_weight_map(src_dir)
    needed, files_to_load = classify_weights(weight_map, selected_layer)

    print(f"Total weights to extract: {len(needed)}")
    print(f"Shard files to read: {len(files_to_load)}")
    print()

    all_tensors = {}
    for shard_file in sorted(files_to_load.keys()):
        pairs = files_to_load[shard_file]
        shard_path = src_dir / shard_file
        print(f"Loading {shard_file} ({len(pairs)} tensors)...")
        shard_data = load_file(str(shard_path))

        for orig_key, new_key in pairs:
            if orig_key in shard_data:
                all_tensors[new_key] = shard_data[orig_key]
            else:
                print(f"  WARNING: {orig_key} not found in {shard_file}")

    print(f"\nExtracted {len(all_tensors)} tensors total")

    output_file = dst_dir / "model.safetensors"
    print(f"Saving to {output_file}...")
    save_file(all_tensors, str(output_file))

    new_weight_map = {k: "model.safetensors" for k in sorted(all_tensors.keys())}
    index = {
        "metadata": {"total_size": sum(t.numel() * t.element_size() for t in all_tensors.values())},
        "weight_map": new_weight_map,
    }
    with open(dst_dir / "model.safetensors.index.json", "w") as f:
        json.dump(index, f, indent=4)

    config = create_mini_config(src_dir)
    with open(dst_dir / "config.json", "w") as f:
        json.dump(config, f, indent=4)
    print("Saved config.json")

    copy_files = [
        "configuration_deepseek.py",
        "modeling_deepseek.py",
        "tokenizer_config.json",
        "special_tokens_map.json",
        "generation_config.json",
        "tiktoken.model",
        "tokenization_kimi.py",
        "chat_template.jinja",
    ]
    for fname in copy_files:
        src = src_dir / fname
        if src.exists():
            shutil.copy2(str(src), str(dst_dir / fname))
            print(f"Copied {fname}")

    print("\n=== Mini Model Summary ===")
    print(f"Layers: 1 (MoE layer from original layer {selected_layer})")
    print(f"Architecture: DeepseekV3 (Kimi-K2)")
    print(f"Hidden size: {config['hidden_size']}")
    print(f"Attention heads: {config['num_attention_heads']}")
    print(f"KV LoRA rank: {config['kv_lora_rank']}")
    print(f"Q LoRA rank: {config['q_lora_rank']}")
    print(f"Routed experts: {config['n_routed_experts']}")
    print(f"Shared experts: {config['n_shared_experts']}")
    print(f"Experts per token: {config['num_experts_per_tok']}")
    print(f"Vocab size: {config['vocab_size']}")
    print(f"Output directory: {dst_dir}")
    print("\nDone!")


if __name__ == "__main__":
    main()
