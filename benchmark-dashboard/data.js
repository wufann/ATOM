window.BENCHMARK_DATA = {
  "lastUpdate": 1773502931952,
  "repoUrl": "https://github.com/ROCm/ATOM",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "Lingpeng Jin",
            "username": "valarLip",
            "email": "103567126+valarLip@users.noreply.github.com"
          },
          "committer": {
            "name": "Lingpeng Jin",
            "username": "valarLip",
            "email": "103567126+valarLip@users.noreply.github.com"
          },
          "id": "9567af916d7b6fa8d66607d668eec41464448a8c",
          "message": "perf: remove ATOM_DISABLE_MMAP from benchmark workflow to speed up model loading",
          "timestamp": "2026-03-14T10:29:47Z",
          "url": "https://github.com/ROCm/ATOM/commit/9567af916d7b6fa8d66607d668eec41464448a8c"
        },
        "date": 1773484446473,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "DeepSeek-R1-0528 0/0 c=128 throughput (tok/s)",
            "value": 4262.89,
            "unit": "tok/s"
          },
          {
            "name": "DeepSeek-R1-0528 0/0 c=128 TPOT (ms)",
            "value": 28.81,
            "unit": "ms"
          },
          {
            "name": "DeepSeek-R1-0528 0/0 c=128 throughput (tok/s)",
            "value": 6914.47,
            "unit": "tok/s"
          },
          {
            "name": "DeepSeek-R1-0528 0/0 c=128 TPOT (ms)",
            "value": 17.39,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lingpeng Jin",
            "username": "valarLip",
            "email": "103567126+valarLip@users.noreply.github.com"
          },
          "committer": {
            "name": "Lingpeng Jin",
            "username": "valarLip",
            "email": "103567126+valarLip@users.noreply.github.com"
          },
          "id": "3bb2ae88fa67eb5fd45c6e352b10c32928850314",
          "message": "fix: regression analysis skipped + MTP not distinguished in report\n\n- Add always() to regression-analysis job if-condition (fix: skipped when\n  summarize job uses if: always())\n- Add --use-chat-template for MTP benchmark via bench_args matrix field\n- Detect variant tag (e.g. mtp3) from result filename in summarize.py\n  to distinguish MTP vs non-MTP in regression report\n- Replace jq with python3 for JSON injection in atom_test.sh\n- Pass BENCH_EXTRA_ARGS through to benchmark_serving",
          "timestamp": "2026-03-14T11:05:13Z",
          "url": "https://github.com/ROCm/ATOM/commit/3bb2ae88fa67eb5fd45c6e352b10c32928850314"
        },
        "date": 1773488649095,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=128 throughput (tok/s)",
            "value": 4348.28,
            "unit": "tok/s"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=128 TPOT (ms)",
            "value": 28.32,
            "unit": "ms"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=128 throughput (tok/s)",
            "value": 5380.99,
            "unit": "tok/s"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=128 TPOT (ms)",
            "value": 22.46,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lingpeng Jin",
            "username": "valarLip",
            "email": "103567126+valarLip@users.noreply.github.com"
          },
          "committer": {
            "name": "Lingpeng Jin",
            "username": "valarLip",
            "email": "103567126+valarLip@users.noreply.github.com"
          },
          "id": "d218ecff3fe490d92fb6244876dd1e538b1b6943",
          "message": "feat: custom benchmark dashboard, MTP variant display, fix-then-sweep rule\n\nDashboard:\n- Add custom dark-theme dashboard with tabs (Overview/Throughput vs Latency/\n  Throughput/Latency/Historical)\n- Interactive vs Token Throughput scatter chart (like InferenceX)\n- Overview table with commit + CI run links\n- Add TTFT, Total Throughput metrics to dashboard entries\n- Use cdnjs.cloudflare.com CDN for Chart.js\n\nsummarize.py:\n- Extract _display_model() to eliminate duplicate variant logic\n- _config_key reuses _display_model\n\nWorkflow:\n- Detect variant from filename for dashboard trend lines\n- Add run URL as extra field for click-to-CI-run\n- auto-push=false, deploy custom index.html to gh-pages\n- Fix: save dashboard template before git checkout gh-pages\n- Fix: git checkout back to SHA instead of detached HEAD\n- Restore ATOM_DISABLE_MMAP=true\n- Regression trace: group by variant, correct server/bench args\n- Reduce profile prompts to CONC*2\n- Remove unused import os\n\nCLAUDE.md:\n- Add Fix-then-sweep rule to Critical Rules",
          "timestamp": "2026-03-14T13:02:29Z",
          "url": "https://github.com/ROCm/ATOM/commit/d218ecff3fe490d92fb6244876dd1e538b1b6943"
        },
        "date": 1773494563791,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=128 throughput (tok/s)",
            "value": 4274.2,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23088513632"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=128 Total Tput (tok/s)",
            "value": 8557.79,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23088513632"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=128 TTFT (ms)",
            "value": 318.2,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23088513632"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=128 TPOT (ms)",
            "value": 28.83,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23088513632"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=256 throughput (tok/s)",
            "value": 6038.55,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23088513632"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=256 Total Tput (tok/s)",
            "value": 12071.26,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23088513632"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=256 TTFT (ms)",
            "value": 581.14,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23088513632"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=256 TPOT (ms)",
            "value": 40.76,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23088513632"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=128 throughput (tok/s)",
            "value": 5467.06,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23088513632"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=128 Total Tput (tok/s)",
            "value": 10963.48,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23088513632"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=128 TTFT (ms)",
            "value": 334.64,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23088513632"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=128 TPOT (ms)",
            "value": 22.05,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23088513632"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=256 throughput (tok/s)",
            "value": 7283.52,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23088513632"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=256 Total Tput (tok/s)",
            "value": 14583.42,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23088513632"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=256 TTFT (ms)",
            "value": 534.17,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23088513632"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=256 TPOT (ms)",
            "value": 33.01,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23088513632"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lingpeng Jin",
            "username": "valarLip",
            "email": "103567126+valarLip@users.noreply.github.com"
          },
          "committer": {
            "name": "Lingpeng Jin",
            "username": "valarLip",
            "email": "103567126+valarLip@users.noreply.github.com"
          },
          "id": "b16705c354088e18f754560da3ccfb13102db46d",
          "message": "fix: pkill in regression trace exits non-zero when no process found, causing step failure",
          "timestamp": "2026-03-14T14:41:35Z",
          "url": "https://github.com/ROCm/ATOM/commit/b16705c354088e18f754560da3ccfb13102db46d"
        },
        "date": 1773499986910,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Meta-Llama-3-8B-Instruct 1024/1024 c=128 throughput (tok/s)",
            "value": 0,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090100375"
          },
          {
            "name": "Meta-Llama-3-8B-Instruct 1024/1024 c=128 Total Tput (tok/s)",
            "value": 0,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090100375"
          },
          {
            "name": "Meta-Llama-3-8B-Instruct 1024/1024 c=128 TTFT (ms)",
            "value": 0,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090100375"
          },
          {
            "name": "Meta-Llama-3-8B-Instruct 1024/1024 c=128 TPOT (ms)",
            "value": 0,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090100375"
          },
          {
            "name": "Meta-Llama-3-8B-Instruct 1024/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "Meta-Llama-3-8B-Instruct 1024/1024 c=64 throughput (tok/s)",
            "value": 0,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090100375"
          },
          {
            "name": "Meta-Llama-3-8B-Instruct 1024/1024 c=64 Total Tput (tok/s)",
            "value": 0,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090100375"
          },
          {
            "name": "Meta-Llama-3-8B-Instruct 1024/1024 c=64 TTFT (ms)",
            "value": 0,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090100375"
          },
          {
            "name": "Meta-Llama-3-8B-Instruct 1024/1024 c=64 TPOT (ms)",
            "value": 0,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090100375"
          },
          {
            "name": "Meta-Llama-3-8B-Instruct 1024/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lingpeng Jin",
            "username": "valarLip",
            "email": "103567126+valarLip@users.noreply.github.com"
          },
          "committer": {
            "name": "Lingpeng Jin",
            "username": "valarLip",
            "email": "103567126+valarLip@users.noreply.github.com"
          },
          "id": "3f34dbbe0cb99a8bc2e683788a9a999597e7489c",
          "message": "fix: benchmark job failures and Copilot review\n\nCritical fixes:\n- Remove backslash on $model_path in docker exec (all models got empty --model)\n- Fix GLM-5-FP8 HF path: amd/GLM-5-FP8 → zai-org/GLM-5-FP8\n\nCopilot review fixes:\n- Fix invalid CSS: hsl() backgroundColor → hsla()\n- Remove unnecessary # noqa: F811 on record_function import\n- Batch llvm-cxxfilt demangle calls (single subprocess)\n- Update stale prefill comment\n- Guard ZeroDivisionError in draft step overhead\n- Truncate prefill ctx label for large batches (>5 seqs)",
          "timestamp": "2026-03-14T15:04:33Z",
          "url": "https://github.com/ROCm/ATOM/commit/3f34dbbe0cb99a8bc2e683788a9a999597e7489c"
        },
        "date": 1773502931429,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=128 throughput (tok/s)",
            "value": 4261.89,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090517508"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=128 Total Tput (tok/s)",
            "value": 8533.14,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090517508"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=128 TTFT (ms)",
            "value": 343.52,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090517508"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=128 TPOT (ms)",
            "value": 28.88,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090517508"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=64 throughput (tok/s)",
            "value": 2894.04,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090517508"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=64 Total Tput (tok/s)",
            "value": 5789.39,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090517508"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=64 TTFT (ms)",
            "value": 213.35,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090517508"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=64 TPOT (ms)",
            "value": 21.25,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090517508"
          },
          {
            "name": "DeepSeek-R1-0528 1024/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=128 throughput (tok/s)",
            "value": 5330.26,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090517508"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=128 Total Tput (tok/s)",
            "value": 10689.36,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090517508"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=128 TTFT (ms)",
            "value": 337.83,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090517508"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=128 TPOT (ms)",
            "value": 22.64,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090517508"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=64 throughput (tok/s)",
            "value": 3754.95,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090517508"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=64 Total Tput (tok/s)",
            "value": 7523.41,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090517508"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=64 TTFT (ms)",
            "value": 236.36,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090517508"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=64 TPOT (ms)",
            "value": 16.15,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090517508"
          },
          {
            "name": "DeepSeek-R1-0528-mtp3 1024/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=128 throughput (tok/s)",
            "value": 2608.41,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090517508"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=128 Total Tput (tok/s)",
            "value": 5222.55,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090517508"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=128 TTFT (ms)",
            "value": 422.62,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090517508"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=128 TPOT (ms)",
            "value": 47.24,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090517508"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=128 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=64 throughput (tok/s)",
            "value": 1695.37,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090517508"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=64 Total Tput (tok/s)",
            "value": 3391.5,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090517508"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=64 TTFT (ms)",
            "value": 286.76,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090517508"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=64 TPOT (ms)",
            "value": 36.23,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090517508"
          },
          {
            "name": "GLM-5-FP8 1024/1024 c=64 _gpu_count",
            "value": 8,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=128 throughput (tok/s)",
            "value": 8128.5,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090517508"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=128 Total Tput (tok/s)",
            "value": 16274.86,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090517508"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=128 TTFT (ms)",
            "value": 183.33,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090517508"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=128 TPOT (ms)",
            "value": 15.18,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090517508"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=128 _gpu_count",
            "value": 1,
            "unit": ""
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=64 throughput (tok/s)",
            "value": 5648.93,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090517508"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=64 Total Tput (tok/s)",
            "value": 11300.4,
            "unit": "tok/s",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090517508"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=64 TTFT (ms)",
            "value": 118.43,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090517508"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=64 TPOT (ms)",
            "value": 10.94,
            "unit": "ms",
            "extra": "Run: https://github.com/ROCm/ATOM/actions/runs/23090517508"
          },
          {
            "name": "gpt-oss-120b 1024/1024 c=64 _gpu_count",
            "value": 1,
            "unit": ""
          }
        ]
      }
    ]
  }
}