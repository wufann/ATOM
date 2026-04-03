window.BENCHMARK_DATA = {
  "lastUpdate": 1775226605191,
  "repoUrl": "https://github.com/ROCm/ATOM",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "Xin.Huang@amd.com",
            "name": "Xin Huang",
            "username": "gyohuangxin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8d04949f446c712951d6004ef9601b11f4e97085",
          "message": "CI: improve atom test image and model cache handling (#476)\n\n* CI: Update atom test to use internal registry cache\n\n* CI: keep forced pulls on predownload runner only\n\n* CI: serialize shared model downloads in atom test\n\n* CI: skip shared model lock on baremetal runner\n\n* CI: move model download locking into container",
          "timestamp": "2026-04-03T01:10:03+08:00",
          "tree_id": "8071c638acbce64e883f9d349e18d71fed94f4bf",
          "url": "https://github.com/ROCm/ATOM/commit/8d04949f446c712951d6004ef9601b11f4e97085"
        },
        "date": 1775166827021,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM::DeepSeek-R1-0528 accuracy (GSM8K)",
            "value": 0.9507,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (GSM8K 3-shot flexible-extract) | strict-match: 0.9431 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528 MTP accuracy (GSM8K)",
            "value": 0.9462,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: Same base model as DeepSeek-R1-0528 FP8 | strict-match: 0.9439 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 accuracy (GSM8K)",
            "value": 0.9356,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9287 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 MTP accuracy (GSM8K)",
            "value": 0.9348,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9272 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::GLM-5-FP8 accuracy (GSM8K)",
            "value": 0.9424,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.93 | Baseline: 0.9545 | BaselineModel: zai-org/GLM-5 | BaselineNote: HF: amd/GLM-5-MXFP4 card shows GLM-5 baseline=0.9545 (5-shot) | strict-match: 0.9477 | fewshot: 3 | Model: /models/zai-org/GLM-5-FP8"
          },
          {
            "name": "ATOM::Kimi-K2.5-MXFP4 accuracy (GSM8K)",
            "value": 0.9393,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.93 | Baseline: 0.9409 | BaselineModel: moonshotai/Kimi-K2.5 | BaselineNote: HF: amd/Kimi-K2.5-MXFP4 card shows Kimi-K2.5 baseline=0.9409 | strict-match: 0.9393 | fewshot: 3 | Model: /models/amd/Kimi-K2.5-MXFP4"
          },
          {
            "name": "ATOM::Meta-Llama-3-8B-Instruct accuracy (GSM8K)",
            "value": 0.7437,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.73 | BaselineModel: meta-llama/Meta-Llama-3-8B-Instruct | BaselineNote: HF reports 0.796 but 8-shot CoT; CI uses 3-shot, not comparable | strict-match: 0.7422 | fewshot: 3 | Model: /models/meta-llama/Meta-Llama-3-8B-Instruct"
          },
          {
            "name": "ATOM::Qwen3-235B-A22B-Instruct-2507-FP8 accuracy (GSM8K)",
            "value": 0.9014,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.87 | Baseline: 0.909 | BaselineModel: Qwen/Qwen3-235B-A22B-Instruct-2507 | BaselineNote: HF: amd/Qwen3-235B-A22B-Instruct-2507-MXFP4 card shows baseline=0.909 | strict-match: 0.8825 | fewshot: 3 | Model: /models/Qwen/Qwen3-235B-A22B-Instruct-2507-FP8"
          },
          {
            "name": "ATOM::Qwen3-Next-80B-A3B-Thinking accuracy (GSM8K)",
            "value": 0.6998,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.65 | BaselineModel: Qwen/Qwen3-Next-80B-A3B-Thinking | BaselineNote: No public GSM8K baseline; HF card has no GSM8K | strict-match: 0.7991 | fewshot: 3 | Model: /models/Qwen/Qwen3-Next-80B-A3B-Thinking"
          },
          {
            "name": "ATOM::gpt-oss-120b accuracy (GSM8K)",
            "value": 0.3935,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.38 | BaselineModel: openai/gpt-oss-120b | BaselineNote: No public GSM8K baseline available | strict-match: 0.2146 | fewshot: 3 | Model: /models/openai/gpt-oss-120b"
          },
          {
            "name": "ATOM::gpt-oss-120b (2 GPUs) accuracy (GSM8K)",
            "value": 0.4344,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.38 | BaselineModel: openai/gpt-oss-120b | BaselineNote: No public GSM8K baseline available | strict-match: 0.2381 | fewshot: 3 | Model: /models/openai/gpt-oss-120b"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yuhzhu@amd.com",
            "name": "Zhu Yuhua",
            "username": "zhuyuhua-v"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "380986d058eca1e1d49c1ca41f86724d3bad4145",
          "message": "[feat] Make ATOM work with SGLang out-of-tree (#355)\n\n* register attn backend to sgl from ATOM\nenable mla\n\n* make format happy\n\n* arg parse for  format launch\n\n* remove print logging\n\n* add Qwen3-235B support for sgl_oot\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* add Deepseek-R1 support for sgl_oot\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* unify base model wrapper\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* enable fuse_rope_cat_and_cache_mla on gfx950\n\n* add _is_hip = True\n\n* fix AiterTensor check\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* clean mla code path, keep the origin design\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* clean code: separate sglang mla path\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* add comments\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* change sglang args and qwen page size\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* remove redundant code\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* [mla] non prefill path\n\n* re-consider attn related files' structure and atom related modifications\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* clean format\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* fix review comments\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* fix review comments\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* fix review comments, add acc fix\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n---------\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\nCo-authored-by: Guanbao Yu <gyu@amd.com>\nCo-authored-by: ZhiweiYan-96 <zhiwei.yan@amd.com>\nCo-authored-by: wuhuikx <hattie.wu@amd.com>",
          "timestamp": "2026-04-03T09:53:36+08:00",
          "tree_id": "c3c6567042bf5858c32abc66e76ea4f88917ac9c",
          "url": "https://github.com/ROCm/ATOM/commit/380986d058eca1e1d49c1ca41f86724d3bad4145"
        },
        "date": 1775193643223,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM::DeepSeek-R1-0528 accuracy (GSM8K)",
            "value": 0.9416,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (GSM8K 3-shot flexible-extract) | strict-match: 0.9378 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528 MTP accuracy (GSM8K)",
            "value": 0.9447,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: Same base model as DeepSeek-R1-0528 FP8 | strict-match: 0.9378 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 accuracy (GSM8K)",
            "value": 0.9401,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9363 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 MTP accuracy (GSM8K)",
            "value": 0.9393,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9393 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::GLM-5-FP8 accuracy (GSM8K)",
            "value": 0.9409,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.93 | Baseline: 0.9545 | BaselineModel: zai-org/GLM-5 | BaselineNote: HF: amd/GLM-5-MXFP4 card shows GLM-5 baseline=0.9545 (5-shot) | strict-match: 0.9462 | fewshot: 3 | Model: /models/zai-org/GLM-5-FP8"
          },
          {
            "name": "ATOM::Kimi-K2.5-MXFP4 accuracy (GSM8K)",
            "value": 0.9356,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.93 | Baseline: 0.9409 | BaselineModel: moonshotai/Kimi-K2.5 | BaselineNote: HF: amd/Kimi-K2.5-MXFP4 card shows Kimi-K2.5 baseline=0.9409 | strict-match: 0.9348 | fewshot: 3 | Model: /models/amd/Kimi-K2.5-MXFP4"
          },
          {
            "name": "ATOM::Llama-3.3-70B-Instruct-MXFP4-Preview accuracy (GSM8K)",
            "value": 0.906,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.88 | BaselineModel: meta-llama/Llama-3.3-70B-Instruct | BaselineNote: HF page inaccessible; needs CI measurement of baseline | strict-match: 0.6103 | fewshot: 3 | Model: /models/amd/Llama-3.3-70B-Instruct-MXFP4-Preview"
          },
          {
            "name": "ATOM::Qwen3-235B-A22B-Instruct-2507-FP8 accuracy (GSM8K)",
            "value": 0.8908,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.87 | Baseline: 0.909 | BaselineModel: Qwen/Qwen3-235B-A22B-Instruct-2507 | BaselineNote: HF: amd/Qwen3-235B-A22B-Instruct-2507-MXFP4 card shows baseline=0.909 | strict-match: 0.8741 | fewshot: 3 | Model: /models/Qwen/Qwen3-235B-A22B-Instruct-2507-FP8"
          },
          {
            "name": "ATOM::Qwen3-Next-80B-A3B-Thinking accuracy (GSM8K)",
            "value": 0.6907,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.65 | BaselineModel: Qwen/Qwen3-Next-80B-A3B-Thinking | BaselineNote: No public GSM8K baseline; HF card has no GSM8K | strict-match: 0.7961 | fewshot: 3 | Model: /models/Qwen/Qwen3-Next-80B-A3B-Thinking"
          },
          {
            "name": "ATOM::gpt-oss-120b accuracy (GSM8K)",
            "value": 0.4117,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.38 | BaselineModel: openai/gpt-oss-120b | BaselineNote: No public GSM8K baseline available | strict-match: 0.2161 | fewshot: 3 | Model: /models/openai/gpt-oss-120b"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Xin.Huang@amd.com",
            "name": "Xin Huang",
            "username": "gyohuangxin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8d04949f446c712951d6004ef9601b11f4e97085",
          "message": "CI: improve atom test image and model cache handling (#476)\n\n* CI: Update atom test to use internal registry cache\n\n* CI: keep forced pulls on predownload runner only\n\n* CI: serialize shared model downloads in atom test\n\n* CI: skip shared model lock on baremetal runner\n\n* CI: move model download locking into container",
          "timestamp": "2026-04-03T01:10:03+08:00",
          "tree_id": "8071c638acbce64e883f9d349e18d71fed94f4bf",
          "url": "https://github.com/ROCm/ATOM/commit/8d04949f446c712951d6004ef9601b11f4e97085"
        },
        "date": 1775194809327,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM::DeepSeek-R1-0528 accuracy (GSM8K)",
            "value": 0.9507,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (GSM8K 3-shot flexible-extract) | strict-match: 0.9431 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528 MTP accuracy (GSM8K)",
            "value": 0.9462,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: Same base model as DeepSeek-R1-0528 FP8 | strict-match: 0.9439 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 accuracy (GSM8K)",
            "value": 0.9356,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9287 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 MTP accuracy (GSM8K)",
            "value": 0.9348,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9272 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::GLM-5-FP8 accuracy (GSM8K)",
            "value": 0.9424,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.93 | Baseline: 0.9545 | BaselineModel: zai-org/GLM-5 | BaselineNote: HF: amd/GLM-5-MXFP4 card shows GLM-5 baseline=0.9545 (5-shot) | strict-match: 0.9477 | fewshot: 3 | Model: /models/zai-org/GLM-5-FP8"
          },
          {
            "name": "ATOM::Kimi-K2.5-MXFP4 accuracy (GSM8K)",
            "value": 0.9393,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.93 | Baseline: 0.9409 | BaselineModel: moonshotai/Kimi-K2.5 | BaselineNote: HF: amd/Kimi-K2.5-MXFP4 card shows Kimi-K2.5 baseline=0.9409 | strict-match: 0.9393 | fewshot: 3 | Model: /models/amd/Kimi-K2.5-MXFP4"
          },
          {
            "name": "ATOM::Llama-3.3-70B-Instruct-MXFP4-Preview accuracy (GSM8K)",
            "value": 0.909,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.88 | BaselineModel: meta-llama/Llama-3.3-70B-Instruct | BaselineNote: HF page inaccessible; needs CI measurement of baseline | strict-match: 0.6209 | fewshot: 3 | Model: /models/amd/Llama-3.3-70B-Instruct-MXFP4-Preview"
          },
          {
            "name": "ATOM::Meta-Llama-3-8B-Instruct accuracy (GSM8K)",
            "value": 0.7437,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.73 | BaselineModel: meta-llama/Meta-Llama-3-8B-Instruct | BaselineNote: HF reports 0.796 but 8-shot CoT; CI uses 3-shot, not comparable | strict-match: 0.7422 | fewshot: 3 | Model: /models/meta-llama/Meta-Llama-3-8B-Instruct"
          },
          {
            "name": "ATOM::Qwen3-235B-A22B-Instruct-2507-FP8 accuracy (GSM8K)",
            "value": 0.9014,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.87 | Baseline: 0.909 | BaselineModel: Qwen/Qwen3-235B-A22B-Instruct-2507 | BaselineNote: HF: amd/Qwen3-235B-A22B-Instruct-2507-MXFP4 card shows baseline=0.909 | strict-match: 0.8825 | fewshot: 3 | Model: /models/Qwen/Qwen3-235B-A22B-Instruct-2507-FP8"
          },
          {
            "name": "ATOM::Qwen3-Next-80B-A3B-Thinking accuracy (GSM8K)",
            "value": 0.6998,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.65 | BaselineModel: Qwen/Qwen3-Next-80B-A3B-Thinking | BaselineNote: No public GSM8K baseline; HF card has no GSM8K | strict-match: 0.7991 | fewshot: 3 | Model: /models/Qwen/Qwen3-Next-80B-A3B-Thinking"
          },
          {
            "name": "ATOM::gpt-oss-120b accuracy (GSM8K)",
            "value": 0.3935,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.38 | BaselineModel: openai/gpt-oss-120b | BaselineNote: No public GSM8K baseline available | strict-match: 0.2146 | fewshot: 3 | Model: /models/openai/gpt-oss-120b"
          },
          {
            "name": "ATOM::gpt-oss-120b (2 GPUs) accuracy (GSM8K)",
            "value": 0.4344,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23912522222 | Threshold: 0.38 | BaselineModel: openai/gpt-oss-120b | BaselineNote: No public GSM8K baseline available | strict-match: 0.2381 | fewshot: 3 | Model: /models/openai/gpt-oss-120b"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yuhzhu@amd.com",
            "name": "Zhu Yuhua",
            "username": "zhuyuhua-v"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "380986d058eca1e1d49c1ca41f86724d3bad4145",
          "message": "[feat] Make ATOM work with SGLang out-of-tree (#355)\n\n* register attn backend to sgl from ATOM\nenable mla\n\n* make format happy\n\n* arg parse for  format launch\n\n* remove print logging\n\n* add Qwen3-235B support for sgl_oot\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* add Deepseek-R1 support for sgl_oot\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* unify base model wrapper\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* enable fuse_rope_cat_and_cache_mla on gfx950\n\n* add _is_hip = True\n\n* fix AiterTensor check\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* clean mla code path, keep the origin design\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* clean code: separate sglang mla path\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* add comments\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* change sglang args and qwen page size\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* remove redundant code\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* [mla] non prefill path\n\n* re-consider attn related files' structure and atom related modifications\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* clean format\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* fix review comments\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* fix review comments\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n* fix review comments, add acc fix\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\n\n---------\n\nSigned-off-by: zhuyuhua-v <yuhzhu@amd.com>\nCo-authored-by: Guanbao Yu <gyu@amd.com>\nCo-authored-by: ZhiweiYan-96 <zhiwei.yan@amd.com>\nCo-authored-by: wuhuikx <hattie.wu@amd.com>",
          "timestamp": "2026-04-03T09:53:36+08:00",
          "tree_id": "c3c6567042bf5858c32abc66e76ea4f88917ac9c",
          "url": "https://github.com/ROCm/ATOM/commit/380986d058eca1e1d49c1ca41f86724d3bad4145"
        },
        "date": 1775195710351,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM::DeepSeek-R1-0528 accuracy (GSM8K)",
            "value": 0.9416,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (GSM8K 3-shot flexible-extract) | strict-match: 0.9378 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528 MTP accuracy (GSM8K)",
            "value": 0.9447,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: Same base model as DeepSeek-R1-0528 FP8 | strict-match: 0.9378 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 accuracy (GSM8K)",
            "value": 0.9401,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9363 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 MTP accuracy (GSM8K)",
            "value": 0.9393,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9393 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::GLM-5-FP8 accuracy (GSM8K)",
            "value": 0.9409,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.93 | Baseline: 0.9545 | BaselineModel: zai-org/GLM-5 | BaselineNote: HF: amd/GLM-5-MXFP4 card shows GLM-5 baseline=0.9545 (5-shot) | strict-match: 0.9462 | fewshot: 3 | Model: /models/zai-org/GLM-5-FP8"
          },
          {
            "name": "ATOM::Kimi-K2.5-MXFP4 accuracy (GSM8K)",
            "value": 0.9356,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.93 | Baseline: 0.9409 | BaselineModel: moonshotai/Kimi-K2.5 | BaselineNote: HF: amd/Kimi-K2.5-MXFP4 card shows Kimi-K2.5 baseline=0.9409 | strict-match: 0.9348 | fewshot: 3 | Model: /models/amd/Kimi-K2.5-MXFP4"
          },
          {
            "name": "ATOM::Llama-3.3-70B-Instruct-MXFP4-Preview accuracy (GSM8K)",
            "value": 0.906,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.88 | BaselineModel: meta-llama/Llama-3.3-70B-Instruct | BaselineNote: HF page inaccessible; needs CI measurement of baseline | strict-match: 0.6103 | fewshot: 3 | Model: /models/amd/Llama-3.3-70B-Instruct-MXFP4-Preview"
          },
          {
            "name": "ATOM::Meta-Llama-3-8B-Instruct accuracy (GSM8K)",
            "value": 0.7498,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.73 | BaselineModel: meta-llama/Meta-Llama-3-8B-Instruct | BaselineNote: HF reports 0.796 but 8-shot CoT; CI uses 3-shot, not comparable | strict-match: 0.7506 | fewshot: 3 | Model: /models/meta-llama/Meta-Llama-3-8B-Instruct"
          },
          {
            "name": "ATOM::Qwen3-235B-A22B-Instruct-2507-FP8 accuracy (GSM8K)",
            "value": 0.8908,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.87 | Baseline: 0.909 | BaselineModel: Qwen/Qwen3-235B-A22B-Instruct-2507 | BaselineNote: HF: amd/Qwen3-235B-A22B-Instruct-2507-MXFP4 card shows baseline=0.909 | strict-match: 0.8741 | fewshot: 3 | Model: /models/Qwen/Qwen3-235B-A22B-Instruct-2507-FP8"
          },
          {
            "name": "ATOM::Qwen3-Next-80B-A3B-Thinking accuracy (GSM8K)",
            "value": 0.6907,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.65 | BaselineModel: Qwen/Qwen3-Next-80B-A3B-Thinking | BaselineNote: No public GSM8K baseline; HF card has no GSM8K | strict-match: 0.7961 | fewshot: 3 | Model: /models/Qwen/Qwen3-Next-80B-A3B-Thinking"
          },
          {
            "name": "ATOM::gpt-oss-120b accuracy (GSM8K)",
            "value": 0.4117,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.38 | BaselineModel: openai/gpt-oss-120b | BaselineNote: No public GSM8K baseline available | strict-match: 0.2161 | fewshot: 3 | Model: /models/openai/gpt-oss-120b"
          },
          {
            "name": "ATOM::gpt-oss-120b (2 GPUs) accuracy (GSM8K)",
            "value": 0.4086,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23930298233 | Threshold: 0.38 | BaselineModel: openai/gpt-oss-120b | BaselineNote: No public GSM8K baseline available | strict-match: 0.2487 | fewshot: 3 | Model: /models/openai/gpt-oss-120b"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Perry.Zhang@amd.com",
            "name": "PerryZhang01",
            "username": "PerryZhang01"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "15721c1525f160ba50e67a1f53e03187435a8df7",
          "message": "[fix](tp8): fix tp8 accuracy for gpt-oss (#449)\n\n* [fix](tp8): fix tp8 accuracy for gpt-oss\n\n* [fix](gpt-oss): mv contiguous to allreduce\n\n* [fix](pad): remove pad after allreduce\n\n---------\n\nCo-authored-by: perzhang <perzhang@amd.com>\nCo-authored-by: wuhuikx <hattie.wu@amd.com>",
          "timestamp": "2026-04-03T15:57:38+08:00",
          "tree_id": "d3482ce78697c170bc369a405824a509bb08d37c",
          "url": "https://github.com/ROCm/ATOM/commit/15721c1525f160ba50e67a1f53e03187435a8df7"
        },
        "date": 1775204444916,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM::DeepSeek-R1-0528 accuracy (GSM8K)",
            "value": 0.9424,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23938985781 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (GSM8K 3-shot flexible-extract) | strict-match: 0.9386 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528 MTP accuracy (GSM8K)",
            "value": 0.9401,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23938985781 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: Same base model as DeepSeek-R1-0528 FP8 | strict-match: 0.9363 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 accuracy (GSM8K)",
            "value": 0.9333,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23938985781 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9295 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 MTP accuracy (GSM8K)",
            "value": 0.9401,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23938985781 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9348 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::GLM-5-FP8 accuracy (GSM8K)",
            "value": 0.9424,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23938985781 | Threshold: 0.93 | Baseline: 0.9545 | BaselineModel: zai-org/GLM-5 | BaselineNote: HF: amd/GLM-5-MXFP4 card shows GLM-5 baseline=0.9545 (5-shot) | strict-match: 0.9507 | fewshot: 3 | Model: /models/zai-org/GLM-5-FP8"
          },
          {
            "name": "ATOM::Kimi-K2.5-MXFP4 accuracy (GSM8K)",
            "value": 0.9257,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23938985781 | Threshold: 0.93 | Baseline: 0.9409 | BaselineModel: moonshotai/Kimi-K2.5 | BaselineNote: HF: amd/Kimi-K2.5-MXFP4 card shows Kimi-K2.5 baseline=0.9409 | strict-match: 0.9257 | fewshot: 3 | Model: /models/amd/Kimi-K2.5-MXFP4"
          },
          {
            "name": "ATOM::Qwen3-235B-A22B-Instruct-2507-FP8 accuracy (GSM8K)",
            "value": 0.9037,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23938985781 | Threshold: 0.87 | Baseline: 0.909 | BaselineModel: Qwen/Qwen3-235B-A22B-Instruct-2507 | BaselineNote: HF: amd/Qwen3-235B-A22B-Instruct-2507-MXFP4 card shows baseline=0.909 | strict-match: 0.8848 | fewshot: 3 | Model: /models/Qwen/Qwen3-235B-A22B-Instruct-2507-FP8"
          },
          {
            "name": "ATOM::Qwen3-Next-80B-A3B-Thinking accuracy (GSM8K)",
            "value": 0.6892,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23938985781 | Threshold: 0.65 | BaselineModel: Qwen/Qwen3-Next-80B-A3B-Thinking | BaselineNote: No public GSM8K baseline; HF card has no GSM8K | strict-match: 0.7961 | fewshot: 3 | Model: /models/Qwen/Qwen3-Next-80B-A3B-Thinking"
          },
          {
            "name": "ATOM::gpt-oss-120b accuracy (GSM8K)",
            "value": 0.4049,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23938985781 | Threshold: 0.38 | BaselineModel: openai/gpt-oss-120b | BaselineNote: No public GSM8K baseline available | strict-match: 0.2335 | fewshot: 3 | Model: /models/openai/gpt-oss-120b"
          },
          {
            "name": "ATOM::gpt-oss-120b (2 GPUs) accuracy (GSM8K)",
            "value": 0.4139,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23938985781 | Threshold: 0.38 | BaselineModel: openai/gpt-oss-120b | BaselineNote: No public GSM8K baseline available | strict-match: 0.2183 | fewshot: 3 | Model: /models/openai/gpt-oss-120b"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775207620460,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=32 throughput (tok/s)",
            "value": 2063.88,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=32 Total Tput (tok/s)",
            "value": 4121.24,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=32 TTFT (ms)",
            "value": 158.26,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=32 TPOT (ms)",
            "value": 14.96,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=32 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775208082448,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=32 throughput (tok/s)",
            "value": 2563.86,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=32 Total Tput (tok/s)",
            "value": 5119.62,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=32 TTFT (ms)",
            "value": 146.38,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=32 TPOT (ms)",
            "value": 12,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775208302730,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=4 throughput (tok/s)",
            "value": 341.91,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=4 Total Tput (tok/s)",
            "value": 687.16,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=4 TTFT (ms)",
            "value": 179.83,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=4 TPOT (ms)",
            "value": 11.15,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=4 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775208612940,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=64 throughput (tok/s)",
            "value": 1569.55,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=64 Total Tput (tok/s)",
            "value": 14147.62,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=64 TTFT (ms)",
            "value": 1051.25,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=64 TPOT (ms)",
            "value": 38.93,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=64 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775208630939,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=32 throughput (tok/s)",
            "value": 1579.87,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=32 Total Tput (tok/s)",
            "value": 14127.66,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=32 TTFT (ms)",
            "value": 618.83,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=32 TPOT (ms)",
            "value": 19.07,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=32 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775208816452,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=4 throughput (tok/s)",
            "value": 425.62,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=4 Total Tput (tok/s)",
            "value": 855.4,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=4 TTFT (ms)",
            "value": 135.25,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=4 TPOT (ms)",
            "value": 8.97,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=4 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775209383434,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=128 throughput (tok/s)",
            "value": 5785.43,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=128 Total Tput (tok/s)",
            "value": 11583.57,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=128 TTFT (ms)",
            "value": 248.75,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=128 TPOT (ms)",
            "value": 21.33,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775210000545,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=64 throughput (tok/s)",
            "value": 4977.14,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=64 Total Tput (tok/s)",
            "value": 5598.58,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=64 TTFT (ms)",
            "value": 155.56,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=64 TPOT (ms)",
            "value": 12.47,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=64 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775210541234,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=256 throughput (tok/s)",
            "value": 4083.76,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=256 Total Tput (tok/s)",
            "value": 36743.3,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=256 TTFT (ms)",
            "value": 2040.55,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=256 TPOT (ms)",
            "value": 59.73,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=256 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775210603626,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=64 throughput (tok/s)",
            "value": 2240.35,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=64 Total Tput (tok/s)",
            "value": 2520.08,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=64 TTFT (ms)",
            "value": 305.13,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=64 TPOT (ms)",
            "value": 27.82,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=64 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775211154994,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=16 throughput (tok/s)",
            "value": 954.41,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=16 Total Tput (tok/s)",
            "value": 1074.16,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=16 TTFT (ms)",
            "value": 152.23,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=16 TPOT (ms)",
            "value": 16.34,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=16 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775211785791,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=16 throughput (tok/s)",
            "value": 922.94,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=16 Total Tput (tok/s)",
            "value": 1855.7,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=16 TTFT (ms)",
            "value": 146.51,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=16 TPOT (ms)",
            "value": 16.83,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=16 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775212323706,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=8 throughput (tok/s)",
            "value": 687.05,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=8 Total Tput (tok/s)",
            "value": 6111.59,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=8 TTFT (ms)",
            "value": 363.44,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=8 TPOT (ms)",
            "value": 11.05,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=8 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775212432456,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=32 throughput (tok/s)",
            "value": 1448.14,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=32 Total Tput (tok/s)",
            "value": 2891.71,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=32 TTFT (ms)",
            "value": 269.46,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=32 TPOT (ms)",
            "value": 21.32,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=32 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775212551322,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=4 throughput (tok/s)",
            "value": 348.66,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=4 Total Tput (tok/s)",
            "value": 393.15,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=4 TTFT (ms)",
            "value": 242.33,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=4 TPOT (ms)",
            "value": 11.26,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=4 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zejun.chen@amd.com",
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "efde2befff305dc930707d06b0185bf422ea0f1e",
          "message": "[plugin][OOT CI] refine OOT CI/dashboard/OOT docker release (#459)\n\n* [plugin][OOT CI] change the OOT CI mount folder logic\nto make model hit cache instead of downloading\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T18:15:42+08:00",
          "tree_id": "4387d0f6d2b537e7e80e3143f6cdd323396d55f4",
          "url": "https://github.com/ROCm/ATOM/commit/efde2befff305dc930707d06b0185bf422ea0f1e"
        },
        "date": 1775212676342,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM::DeepSeek-R1-0528 accuracy (GSM8K)",
            "value": 0.9484,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23942832989 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (GSM8K 3-shot flexible-extract) | strict-match: 0.9447 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528 MTP accuracy (GSM8K)",
            "value": 0.953,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23942832989 | Threshold: 0.94 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: Same base model as DeepSeek-R1-0528 FP8 | strict-match: 0.9507 | fewshot: 3 | Model: /models/deepseek-ai/DeepSeek-R1-0528"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 accuracy (GSM8K)",
            "value": 0.9371,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23942832989 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.9356 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::DeepSeek-R1-0528-FP4 MTP accuracy (GSM8K)",
            "value": 0.9378,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23942832989 | Threshold: 0.93 | Baseline: 0.9553 | BaselineModel: deepseek-ai/DeepSeek-R1-0528 | BaselineNote: CI measured FP8 baseline (deepseek-ai/DeepSeek-R1-0528 is natively FP8) | strict-match: 0.931 | fewshot: 3 | Model: /models/amd/DeepSeek-R1-0528-MXFP4-MTP-MoEFP4"
          },
          {
            "name": "ATOM::GLM-5-FP8 accuracy (GSM8K)",
            "value": 0.9371,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23942832989 | Threshold: 0.93 | Baseline: 0.9545 | BaselineModel: zai-org/GLM-5 | BaselineNote: HF: amd/GLM-5-MXFP4 card shows GLM-5 baseline=0.9545 (5-shot) | strict-match: 0.9447 | fewshot: 3 | Model: /models/zai-org/GLM-5-FP8"
          },
          {
            "name": "ATOM::Kimi-K2.5-MXFP4 accuracy (GSM8K)",
            "value": 0.9363,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23942832989 | Threshold: 0.93 | Baseline: 0.9409 | BaselineModel: moonshotai/Kimi-K2.5 | BaselineNote: HF: amd/Kimi-K2.5-MXFP4 card shows Kimi-K2.5 baseline=0.9409 | strict-match: 0.934 | fewshot: 3 | Model: /models/amd/Kimi-K2.5-MXFP4"
          },
          {
            "name": "ATOM::Llama-3.3-70B-Instruct-MXFP4-Preview accuracy (GSM8K)",
            "value": 0.909,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23942832989 | Threshold: 0.88 | BaselineModel: meta-llama/Llama-3.3-70B-Instruct | BaselineNote: HF page inaccessible; needs CI measurement of baseline | strict-match: 0.5959 | fewshot: 3 | Model: /models/amd/Llama-3.3-70B-Instruct-MXFP4-Preview"
          },
          {
            "name": "ATOM::Meta-Llama-3-8B-Instruct accuracy (GSM8K)",
            "value": 0.743,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23942832989 | Threshold: 0.73 | BaselineModel: meta-llama/Meta-Llama-3-8B-Instruct | BaselineNote: HF reports 0.796 but 8-shot CoT; CI uses 3-shot, not comparable | strict-match: 0.7407 | fewshot: 3 | Model: /models/meta-llama/Meta-Llama-3-8B-Instruct"
          },
          {
            "name": "ATOM::Qwen3-235B-A22B-Instruct-2507-FP8 accuracy (GSM8K)",
            "value": 0.8976,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23942832989 | Threshold: 0.87 | Baseline: 0.909 | BaselineModel: Qwen/Qwen3-235B-A22B-Instruct-2507 | BaselineNote: HF: amd/Qwen3-235B-A22B-Instruct-2507-MXFP4 card shows baseline=0.909 | strict-match: 0.881 | fewshot: 3 | Model: /models/Qwen/Qwen3-235B-A22B-Instruct-2507-FP8"
          },
          {
            "name": "ATOM::Qwen3-Next-80B-A3B-Thinking accuracy (GSM8K)",
            "value": 0.7028,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23942832989 | Threshold: 0.65 | BaselineModel: Qwen/Qwen3-Next-80B-A3B-Thinking | BaselineNote: No public GSM8K baseline; HF card has no GSM8K | strict-match: 0.8006 | fewshot: 3 | Model: /models/Qwen/Qwen3-Next-80B-A3B-Thinking"
          },
          {
            "name": "ATOM::gpt-oss-120b accuracy (GSM8K)",
            "value": 0.3942,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23942832989 | Threshold: 0.38 | BaselineModel: openai/gpt-oss-120b | BaselineNote: No public GSM8K baseline available | strict-match: 0.2062 | fewshot: 3 | Model: /models/openai/gpt-oss-120b"
          },
          {
            "name": "ATOM::gpt-oss-120b (2 GPUs) accuracy (GSM8K)",
            "value": 0.4011,
            "unit": "score",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23942832989 | Threshold: 0.38 | BaselineModel: openai/gpt-oss-120b | BaselineNote: No public GSM8K baseline available | strict-match: 0.2123 | fewshot: 3 | Model: /models/openai/gpt-oss-120b"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775212909180,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=32 throughput (tok/s)",
            "value": 1529.68,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=32 Total Tput (tok/s)",
            "value": 1719.61,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=32 TTFT (ms)",
            "value": 173.5,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=32 TPOT (ms)",
            "value": 20.42,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=32 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775213451294,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=4 throughput (tok/s)",
            "value": 449.96,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=4 Total Tput (tok/s)",
            "value": 904.32,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=4 TTFT (ms)",
            "value": 138.32,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=4 TPOT (ms)",
            "value": 8.47,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775213531727,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=8 throughput (tok/s)",
            "value": 796.32,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=8 Total Tput (tok/s)",
            "value": 1586.76,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=8 TTFT (ms)",
            "value": 95.03,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=8 TPOT (ms)",
            "value": 9.72,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=8 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775213918877,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=64 throughput (tok/s)",
            "value": 2107.28,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=64 Total Tput (tok/s)",
            "value": 4215.5,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=64 TTFT (ms)",
            "value": 321.15,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=64 TPOT (ms)",
            "value": 29.32,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=64 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775214092488,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=8 throughput (tok/s)",
            "value": 537.8,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=8 Total Tput (tok/s)",
            "value": 4783.99,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=8 TTFT (ms)",
            "value": 347,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=8 TPOT (ms)",
            "value": 14.25,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=8 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775214094775,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=64 throughput (tok/s)",
            "value": 2949.13,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=64 Total Tput (tok/s)",
            "value": 5899.58,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=64 TTFT (ms)",
            "value": 238.21,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=64 TPOT (ms)",
            "value": 20.92,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=64 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775214675913,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=16 throughput (tok/s)",
            "value": 1087.32,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=16 Total Tput (tok/s)",
            "value": 9812.8,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=16 TTFT (ms)",
            "value": 411.42,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=16 TPOT (ms)",
            "value": 13.81,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=16 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775214725954,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=4 throughput (tok/s)",
            "value": 403.64,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=4 Total Tput (tok/s)",
            "value": 3628.48,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=4 TTFT (ms)",
            "value": 232.09,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=4 TPOT (ms)",
            "value": 9.43,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775215091736,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=16 throughput (tok/s)",
            "value": 1764.7,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=16 Total Tput (tok/s)",
            "value": 3548.19,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=16 TTFT (ms)",
            "value": 119.89,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=16 TPOT (ms)",
            "value": 8.74,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=16 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775215414060,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=32 throughput (tok/s)",
            "value": 1169.35,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=32 Total Tput (tok/s)",
            "value": 10456.71,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=32 TTFT (ms)",
            "value": 692.78,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=32 TPOT (ms)",
            "value": 25.96,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=32 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775215534873,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=128 throughput (tok/s)",
            "value": 3116.43,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=128 Total Tput (tok/s)",
            "value": 28135.4,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=128 TTFT (ms)",
            "value": 1219.65,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=128 TPOT (ms)",
            "value": 39.11,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775215623479,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=32 throughput (tok/s)",
            "value": 2065.32,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=32 Total Tput (tok/s)",
            "value": 18468.71,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=32 TTFT (ms)",
            "value": 483.99,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=32 TPOT (ms)",
            "value": 14.52,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775215879564,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=32 throughput (tok/s)",
            "value": 2066.45,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=32 Total Tput (tok/s)",
            "value": 18478.88,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=32 TTFT (ms)",
            "value": 567.17,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=32 TPOT (ms)",
            "value": 14.48,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=32 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775215969738,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=4 throughput (tok/s)",
            "value": 433.72,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=4 Total Tput (tok/s)",
            "value": 871.69,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=4 TTFT (ms)",
            "value": 92.24,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=4 TPOT (ms)",
            "value": 8.84,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775215994255,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=16 throughput (tok/s)",
            "value": 1360.39,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=16 Total Tput (tok/s)",
            "value": 2735.26,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=16 TTFT (ms)",
            "value": 122.29,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=16 TPOT (ms)",
            "value": 11.38,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775216095926,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=4 throughput (tok/s)",
            "value": 392.46,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=4 Total Tput (tok/s)",
            "value": 3527.97,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=4 TTFT (ms)",
            "value": 277.1,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=4 TPOT (ms)",
            "value": 9.66,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=4 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775216403983,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=32 throughput (tok/s)",
            "value": 2162.51,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=32 Total Tput (tok/s)",
            "value": 4318.18,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=32 TTFT (ms)",
            "value": 140.95,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=32 TPOT (ms)",
            "value": 14.29,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775216438082,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=16 throughput (tok/s)",
            "value": 1306.34,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=16 Total Tput (tok/s)",
            "value": 11789.37,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=16 TTFT (ms)",
            "value": 306.81,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=16 TPOT (ms)",
            "value": 11.49,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775216840626,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=4 throughput (tok/s)",
            "value": 552.87,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=4 Total Tput (tok/s)",
            "value": 1111.15,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=4 TTFT (ms)",
            "value": 81.02,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=4 TPOT (ms)",
            "value": 6.92,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=4 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775217207970,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=4 throughput (tok/s)",
            "value": 527.64,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=4 Total Tput (tok/s)",
            "value": 4743.2,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=4 TTFT (ms)",
            "value": 249.69,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=4 TPOT (ms)",
            "value": 7.13,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=4 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775217351626,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=16 throughput (tok/s)",
            "value": 794.44,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=16 Total Tput (tok/s)",
            "value": 7169.62,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=16 TTFT (ms)",
            "value": 480.4,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=16 TPOT (ms)",
            "value": 19.04,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=16 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775217362678,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=128 throughput (tok/s)",
            "value": 3647.76,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=128 Total Tput (tok/s)",
            "value": 32932.3,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=128 TTFT (ms)",
            "value": 1153.51,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=128 TPOT (ms)",
            "value": 33.27,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775217573613,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=8 throughput (tok/s)",
            "value": 596.54,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=8 Total Tput (tok/s)",
            "value": 1188.68,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=8 TTFT (ms)",
            "value": 215.48,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=8 TPOT (ms)",
            "value": 12.91,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/1024 c=8 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775217719386,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=16 throughput (tok/s)",
            "value": 2041.15,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=16 Total Tput (tok/s)",
            "value": 4104.03,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=16 TTFT (ms)",
            "value": 99.53,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=16 TPOT (ms)",
            "value": 7.55,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=16 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775217771343,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=32 throughput (tok/s)",
            "value": 1740.02,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=32 Total Tput (tok/s)",
            "value": 15559.78,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=32 TTFT (ms)",
            "value": 496.51,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=32 TPOT (ms)",
            "value": 17.37,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=32 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775217777930,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=32 throughput (tok/s)",
            "value": 2936.1,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=32 Total Tput (tok/s)",
            "value": 5862.92,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=32 TTFT (ms)",
            "value": 158.91,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=32 TPOT (ms)",
            "value": 10.46,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=32 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775218095255,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=16 throughput (tok/s)",
            "value": 1167.9,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=16 Total Tput (tok/s)",
            "value": 10540,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=16 TTFT (ms)",
            "value": 357.33,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=16 TPOT (ms)",
            "value": 12.87,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775218119994,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=4 throughput (tok/s)",
            "value": 541.49,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=4 Total Tput (tok/s)",
            "value": 1088.27,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=4 TTFT (ms)",
            "value": 99.62,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=4 TPOT (ms)",
            "value": 7.04,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=4 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775218541673,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=64 throughput (tok/s)",
            "value": 4336.26,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=64 Total Tput (tok/s)",
            "value": 8674.47,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=64 TTFT (ms)",
            "value": 182.5,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=64 TPOT (ms)",
            "value": 14.16,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=64 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775218734316,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=128 throughput (tok/s)",
            "value": 4890.34,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=128 Total Tput (tok/s)",
            "value": 9791.41,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=128 TTFT (ms)",
            "value": 249.03,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=128 TPOT (ms)",
            "value": 25.3,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775218879314,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=32 throughput (tok/s)",
            "value": 3309.43,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=32 Total Tput (tok/s)",
            "value": 3720.33,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=32 TTFT (ms)",
            "value": 122.4,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=32 TPOT (ms)",
            "value": 9.41,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=32 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775219220612,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=64 throughput (tok/s)",
            "value": 3280.04,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=64 Total Tput (tok/s)",
            "value": 6561.55,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=64 TTFT (ms)",
            "value": 210.56,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=64 TPOT (ms)",
            "value": 18.79,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775219358438,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=256 throughput (tok/s)",
            "value": 5882.31,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=256 Total Tput (tok/s)",
            "value": 11758.93,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=256 TTFT (ms)",
            "value": 482.85,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=256 TPOT (ms)",
            "value": 42.12,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=256 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775219705847,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=8 throughput (tok/s)",
            "value": 979.07,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=8 Total Tput (tok/s)",
            "value": 1950.9,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=8 TTFT (ms)",
            "value": 104.79,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=8 TPOT (ms)",
            "value": 7.88,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/1024 c=8 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775219717550,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=16 throughput (tok/s)",
            "value": 1520.76,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=16 Total Tput (tok/s)",
            "value": 3057.71,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=16 TTFT (ms)",
            "value": 163.27,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=16 TPOT (ms)",
            "value": 10.11,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=16 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775219919951,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=64 throughput (tok/s)",
            "value": 2049.62,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=64 Total Tput (tok/s)",
            "value": 18474.8,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=64 TTFT (ms)",
            "value": 936.68,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=64 TPOT (ms)",
            "value": 29.68,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=64 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775220110703,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=32 throughput (tok/s)",
            "value": 3557.29,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=32 Total Tput (tok/s)",
            "value": 7103.33,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=32 TTFT (ms)",
            "value": 121.72,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=32 TPOT (ms)",
            "value": 8.61,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=32 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775220408008,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=8 throughput (tok/s)",
            "value": 772.37,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=8 Total Tput (tok/s)",
            "value": 1539.04,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=8 TTFT (ms)",
            "value": 112.46,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=8 TPOT (ms)",
            "value": 10.02,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=8 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775220654331,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=64 throughput (tok/s)",
            "value": 3908.66,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=64 Total Tput (tok/s)",
            "value": 7819.09,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=64 TTFT (ms)",
            "value": 183.14,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=64 TPOT (ms)",
            "value": 15.72,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775221054889,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=8 throughput (tok/s)",
            "value": 600.52,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=8 Total Tput (tok/s)",
            "value": 675.79,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=8 TTFT (ms)",
            "value": 191.83,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=8 TPOT (ms)",
            "value": 12.96,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 1024/8192 c=8 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775221122260,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=8 throughput (tok/s)",
            "value": 771.6,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=8 Total Tput (tok/s)",
            "value": 6863.71,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=8 TTFT (ms)",
            "value": 266.69,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=8 TPOT (ms)",
            "value": 9.89,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=8 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775221330050,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=256 throughput (tok/s)",
            "value": 7081.59,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=256 Total Tput (tok/s)",
            "value": 14156.34,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=256 TTFT (ms)",
            "value": 391.41,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=256 TPOT (ms)",
            "value": 34.95,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 1024/1024 c=256 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775221377819,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=8 throughput (tok/s)",
            "value": 1086.87,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=8 Total Tput (tok/s)",
            "value": 1223.1,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=8 TTFT (ms)",
            "value": 88.68,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=8 TPOT (ms)",
            "value": 7.14,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=8 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775221534190,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=8 throughput (tok/s)",
            "value": 864.99,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=8 Total Tput (tok/s)",
            "value": 7694.52,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=8 TTFT (ms)",
            "value": 311.65,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=8 TPOT (ms)",
            "value": 8.75,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=8 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775221876431,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=64 throughput (tok/s)",
            "value": 2825.01,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=64 Total Tput (tok/s)",
            "value": 25464.04,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=64 TTFT (ms)",
            "value": 841.81,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=64 TPOT (ms)",
            "value": 21.37,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=64 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775221931381,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=4 throughput (tok/s)",
            "value": 559.58,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=4 Total Tput (tok/s)",
            "value": 630.99,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=4 TTFT (ms)",
            "value": 75.14,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=4 TPOT (ms)",
            "value": 7.02,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=4 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775222021049,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=8 throughput (tok/s)",
            "value": 722.11,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=8 Total Tput (tok/s)",
            "value": 6423.5,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=8 TTFT (ms)",
            "value": 278.63,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=8 TPOT (ms)",
            "value": 10.58,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=8 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775222052057,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=256 throughput (tok/s)",
            "value": 8498.88,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=256 Total Tput (tok/s)",
            "value": 16989.55,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=256 TTFT (ms)",
            "value": 364.82,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=256 TPOT (ms)",
            "value": 29.07,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=256 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775222978324,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=8 throughput (tok/s)",
            "value": 840.31,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=8 Total Tput (tok/s)",
            "value": 1674.41,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=8 TTFT (ms)",
            "value": 123.38,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=8 TPOT (ms)",
            "value": 9.18,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 1024/1024 c=8 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775222988211,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=8 throughput (tok/s)",
            "value": 1015.42,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=8 Total Tput (tok/s)",
            "value": 1142.69,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=8 TTFT (ms)",
            "value": 108.4,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=8 TPOT (ms)",
            "value": 7.65,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=8 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775223005613,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=64 throughput (tok/s)",
            "value": 7109.13,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=64 Total Tput (tok/s)",
            "value": 7996.77,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=64 TTFT (ms)",
            "value": 129.47,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=64 TPOT (ms)",
            "value": 8.65,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=64 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775223440282,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=4 throughput (tok/s)",
            "value": 421.52,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=4 Total Tput (tok/s)",
            "value": 3789.25,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=4 TTFT (ms)",
            "value": 196.81,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=4 TPOT (ms)",
            "value": 9.05,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=4 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775223607268,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=64 throughput (tok/s)",
            "value": 2412.82,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=64 Total Tput (tok/s)",
            "value": 21748.62,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=64 TTFT (ms)",
            "value": 746.36,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=64 TPOT (ms)",
            "value": 25.23,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B 8192/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775223901380,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=4 throughput (tok/s)",
            "value": 561.1,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=4 Total Tput (tok/s)",
            "value": 632.71,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=4 TTFT (ms)",
            "value": 101.88,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=4 TPOT (ms)",
            "value": 7,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=4 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775224409336,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=256 throughput (tok/s)",
            "value": 2906.49,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=256 Total Tput (tok/s)",
            "value": 26150.89,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=256 TTFT (ms)",
            "value": 2783.32,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=256 TPOT (ms)",
            "value": 84.07,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 8192/1024 c=256 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775224597409,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=16 throughput (tok/s)",
            "value": 2110.41,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=16 Total Tput (tok/s)",
            "value": 2375.18,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=16 TTFT (ms)",
            "value": 98.11,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=16 TPOT (ms)",
            "value": 7.34,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=16 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775224624386,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=4 throughput (tok/s)",
            "value": 319.52,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=4 Total Tput (tok/s)",
            "value": 2872.34,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=4 TTFT (ms)",
            "value": 271.64,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=4 TPOT (ms)",
            "value": 11.92,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Kimi-K2.5-MXFP4-tp4 8192/1024 c=4 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775224713064,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=128 throughput (tok/s)",
            "value": 4287.28,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=128 Total Tput (tok/s)",
            "value": 8583.97,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=128 TTFT (ms)",
            "value": 293.04,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=128 TPOT (ms)",
            "value": 28.84,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=128 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775224902770,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=16 throughput (tok/s)",
            "value": 1307.86,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=16 Total Tput (tok/s)",
            "value": 2629.64,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=16 TTFT (ms)",
            "value": 132.28,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=16 TPOT (ms)",
            "value": 11.83,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8-tp4 1024/1024 c=16 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775225025124,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=8 throughput (tok/s)",
            "value": 1074.1,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=8 Total Tput (tok/s)",
            "value": 2140.26,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=8 TTFT (ms)",
            "value": 81.02,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=8 TPOT (ms)",
            "value": 7.19,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/1024 c=8 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775225292415,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=16 throughput (tok/s)",
            "value": 1406.66,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=16 Total Tput (tok/s)",
            "value": 12694.76,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=16 TTFT (ms)",
            "value": 400.68,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=16 TPOT (ms)",
            "value": 10.56,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 8192/1024 c=16 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775225681231,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=16 throughput (tok/s)",
            "value": 1846,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=16 Total Tput (tok/s)",
            "value": 2077.59,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=16 TTFT (ms)",
            "value": 118.19,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=16 TPOT (ms)",
            "value": 8.41,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp1 1024/8192 c=16 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775225724207,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=32 throughput (tok/s)",
            "value": 3926.89,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=32 Total Tput (tok/s)",
            "value": 4414.46,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=32 TTFT (ms)",
            "value": 129.74,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=32 TPOT (ms)",
            "value": 7.9,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 1024/8192 c=32 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775225916440,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=64 throughput (tok/s)",
            "value": 2874.19,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=64 Total Tput (tok/s)",
            "value": 25907.3,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=64 TTFT (ms)",
            "value": 723.86,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=64 TPOT (ms)",
            "value": 21.06,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3.5-397B-A17B-FP8 8192/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775226113929,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=8 throughput (tok/s)",
            "value": 992.46,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=8 Total Tput (tok/s)",
            "value": 8828.41,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=8 TTFT (ms)",
            "value": 177.45,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=8 TPOT (ms)",
            "value": 7.72,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=8 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775226196218,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=64 throughput (tok/s)",
            "value": 4662.07,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=64 Total Tput (tok/s)",
            "value": 42022.84,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=64 TTFT (ms)",
            "value": 454.45,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=64 TPOT (ms)",
            "value": 12.91,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=64 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775226307227,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=16 throughput (tok/s)",
            "value": 1799.74,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=16 Total Tput (tok/s)",
            "value": 16242.21,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=16 TTFT (ms)",
            "value": 225.09,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=16 TPOT (ms)",
            "value": 8.3,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=16 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775226578722,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=32 throughput (tok/s)",
            "value": 3007.74,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=32 Total Tput (tok/s)",
            "value": 26896.18,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=32 TTFT (ms)",
            "value": 316.1,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=32 TPOT (ms)",
            "value": 9.94,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=32 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "committer": {
            "name": "zejunchen-zejun",
            "username": "zejunchen-zejun",
            "email": "zejun.chen@amd.com"
          },
          "id": "902341080bc8f69a382b8e02be3afb3505e60e3f",
          "message": "[plugin][oot benchmark] use specific commit model for K2.5\n\nSigned-off-by: zejunchen-zejun <zejun.chen@amd.com>",
          "timestamp": "2026-04-03T08:53:37Z",
          "url": "https://github.com/ROCm/ATOM/commit/902341080bc8f69a382b8e02be3afb3505e60e3f"
        },
        "date": 1775226603281,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=4 throughput (tok/s)",
            "value": 521.56,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=4 Total Tput (tok/s)",
            "value": 4688.51,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=4 TTFT (ms)",
            "value": 153.23,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=4 TPOT (ms)",
            "value": 7.31,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23940746614 | GPU: AMD Instinct MI355X | VRAM: 288GB | ROCm: 7.2.1 | Docker: rocm/atom-dev:vllm-v0.17.0-nightly_20260403"
          },
          {
            "name": "ATOM-vLLM::Qwen3-Next-80B-A3B-Instruct-FP8-tp4 8192/1024 c=4 _gpu_count",
            "value": 4,
            "unit": ""
          }
        ]
      }
    ]
  }
}