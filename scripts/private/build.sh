export MAX_JOBS=$(nproc)
export PYTORCH_ROCM_ARCH="gfx950"
export CCACHE_DIR=/home/hatwu/.ccache
export CCACHE_MAXSIZE=20G
if command -v ccache &>/dev/null; then
    export PATH="/usr/lib/ccache:$PATH"
    export CMAKE_CXX_COMPILER_LAUNCHER=ccache
    export CMAKE_C_COMPILER_LAUNCHER=ccache
fi

# pip uninstall -y vllm
# cd /home/hatwu/vllm
# pip install -r requirements/rocm-build.txt
# python3 setup.py develop

git clone https://github.com/ROCm/aiter.git
pip uninstall -y aiter
pip uninstall -y amd-aiter
cd /home/hatwu/aiter
python3 setup.py develop

#pip install --upgrade triton
#pip uninstall -y transformers
#pip install "transformers>=4.48,<5.0"
pip install git+https://github.com/foundation-model-stack/fastsafetensors.git

git clone https://github.com/ROCm/ATOM.git
cd /home/hatwu/ATOM
pip install -e . 2>&1 | tee build.log
