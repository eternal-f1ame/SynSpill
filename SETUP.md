## SynSpill Reproduction Guide

Create a conda environment and install the dependencies (Python 3.12).

### 1. Environment Setup

```bash
# Clone and setup
git clone https://github.com/comfyanonymous/ComfyUI.git
cd ComfyUI

# Install dependencies
pip install -r requirements.txt

# Install PyTorch (NVIDIA GPU)
pip install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu128

```bash
# Manual ComfyUI Manager installation
cd custom_nodes
git clone https://github.com/ltdrdata/ComfyUI-Manager.git
cd ..

# Install custom nodes
./install_custom_nodes.sh
```

### 2. Download Required Models

#### Model Directory Structure
```
models/
├── checkpoints/     # Base diffusion models (.safetensors)
├── vae/            # VAE models
├── loras/          # LoRA weights
├── controlnet/     # ControlNet models
├── clip_vision/    # CLIP vision models
└── ipadapter/      # IP-Adapter models
```

#### Required Models for Research Reproduction

**Base Models:**

```bash
# Create directories
mkdir -p models/checkpoints models/loras models/ipadapter models/clip_vision

# SDXL-Turbo Inpainting Model
wget -P models/checkpoints/ https://huggingface.co/stabilityai/sdxl-turbo/resolve/main/sd_xl_turbo_1.0_fp16.safetensors
```

**IP-Adapter Components:**

```bash
# IP Composition Adapter - Download specific files
wget -P models/ipadapter/ https://huggingface.co/ostris/ip-composition-adapter/resolve/main/ip_plus_composition_sd15.safetensors
# Or for SDXL version:
wget -P models/ipadapter/ https://huggingface.co/ostris/ip-composition-adapter/resolve/main/ip_plus_composition_sdxl.safetensors

# CLIP ViT-H/14 LAION-2B - Download model files
wget -P models/clip_vision/ https://huggingface.co/laion/CLIP-ViT-H-14-laion2B-s32B-b79K/resolve/main/open_clip_pytorch_model.bin
wget -P models/clip_vision/ https://huggingface.co/laion/CLIP-ViT-H-14-laion2B-s32B-b79K/resolve/main/config.json
```

**Manual Downloads Required:**

- **Interior Scene XL**: Visit https://civitai.com/models/715747/interior-scene-xl and download the model file to `models/checkpoints/`
- **Factory Model** (optional): Visit https://civitai.com/models/77373/factory for additional scene generation

**Note:** Some models from CivitAI require account registration and manual download due to licensing agreements.

### 3. Custom Nodes Installation

#### Automated Installation (Recommended)

We provide a comprehensive installation script that clones all the custom nodes used in this research:

```bash
# Make the script executable (if not already)
chmod +x install_custom_nodes.sh

# Run the installation script
./install_custom_nodes.sh
```

**Installed Custom Nodes Include:**

- **ComfyUI Manager** - Essential for managing nodes and models
- **ComfyUI IPAdapter Plus** - IP-Adapter functionality for composition
- **ComfyUI Impact Pack/Subpack** - Advanced image processing and segmentation
- **ComfyUI Inspire Pack** - Additional workflow utilities
- **ComfyUI Custom Scripts** - Workflow enhancements and UI improvements
- **ComfyUI Dynamic Prompts** - Dynamic prompt generation
- **ComfyUI KJNodes** - Various utility nodes for image processing
- **ComfyUI Ultimate SD Upscale** - Advanced upscaling capabilities
- **ComfyUI GGUF** - Support for GGUF model format
- **ComfyUI Image Filters** - Comprehensive image filtering nodes
- **ComfyUI Depth Anything V2** - Depth estimation capabilities
- **ComfyUI RMBG** - Background removal functionality
- **ComfyUI FizzNodes** - Animation and scheduling nodes
- **RGThree ComfyUI** - Advanced workflow management
- **WAS Node Suite** - Comprehensive collection of utility nodes
- **And more...**

### 4. Using ComfyUI Manager

After installing ComfyUI Manager, you can easily install missing nodes and models:

```bash
# Start ComfyUI first
python main.py --listen 0.0.0.0 --port 8188
```

**In the ComfyUI Web Interface:**

1. **Access Manager**: Click the "Manager" button in the ComfyUI interface
2. **Install Missing Nodes**: 
   - Load any workflow that uses custom nodes
   - Click "Install Missing Custom Nodes" to automatically install required nodes
3. **Install Models**: 
   - Go to "Model Manager" tab
   - Search and install models directly from the interface
   - Supports HuggingFace, CivitAI, and other model repositories

**Alternative Model Installation via Manager:**

- **Checkpoints**: Search for "SDXL" or "Stable Diffusion" models
- **IP-Adapters**: Search for "IP-Adapter" in the model manager
- **ControlNets**: Browse and install ControlNet models as needed
- **LoRAs**: Install LoRA models directly through the interface

**Benefits of using ComfyUI Manager:**

- Automatic dependency resolution
- One-click installation of missing nodes
- Model browser with direct download
- Version management
- Automatic updates

### 5. Start ComfyUI Server

```bash
# Local access
python main.py

# Network access (for cluster/remote)
python main.py --listen 0.0.0.0 --port 8188

# With latest frontend
python main.py --front-end-version Comfy-Org/ComfyUI_frontend@latest
```

Access at: `http://localhost:8188`

## Research-Specific Features

### Custom Guidance Methods

- **FreSca**: Frequency-dependent scaling guidance (`comfy_extras/nodes_fresca.py`)
- **PAG**: Perturbed Attention Guidance (`comfy_extras/nodes_pag.py`) 
- **SAG**: Self Attention Guidance (`comfy_extras/nodes_sag.py`)
- **SLG**: Skip Layer Guidance (`comfy_extras/nodes_slg.py`)
- **APG**: Adaptive Patch Guidance (`comfy_extras/nodes_apg.py`)
- **Mahiro**: Direction-based guidance scaling (`comfy_extras/nodes_mahiro.py`)

### Advanced Sampling

- Custom samplers and schedulers (`comfy_extras/nodes_custom_sampler.py`)
- Token merging optimization (`comfy_extras/nodes_tomesd.py`)
- Various diffusion model sampling methods

## Research Configuration

### Key Hyperparameters for Synthetic Image Generation

The following table summarizes the key hyperparameters used in our synthetic image generation pipeline:

| Parameter | Value / Configuration |
|-----------|----------------------|
| **Scene Generation Specifics** | |
| Base Model | Stable Diffusion XL 1.0 |
| Image Resolution | 1024 × 1024 |
| Sampler | DDPM-SDE-2m-GPU |
| Scheduler | Karras |
| Sampling Steps | 64 |
| CFG Scale | 8 |
| LoRA Strength | 0.2–0.4 |
| IP-Adapter | IP Composition+CLIP-ViT-H |
| IP-Adapter Strength | 0.6 |
| **Inpainting Specifics** | |
| Inpainting Model | SDXL-Turbo Inpainting |
| Differential Diffusion | Enabled |
| Mask Feathering | 50 pixels |
| Mask Opacity | 75% |
| Denoise Strength | 0.5-0.6 |

### Model References

- **Interior Scene XL**: https://civitai.com/models/715747/interior-scene-xl
- **SDXL-Turbo**: https://huggingface.co/stabilityai/sdxl-turbo
- **IP Composition Adapter**: https://huggingface.co/ostris/ip-composition-adapter
- **CLIP ViT-H/14 LAION-2B**: https://huggingface.co/laion/CLIP-ViT-H-14-laion2B-s32B-b79K

### Configuration in ComfyUI

When setting up workflows in ComfyUI, ensure the following nodes are configured with the specified parameters:

**KSampler/KSampler Advanced:**

- Steps: 64
- CFG: 8.0
- Sampler: ddpm_sde_gpu (or ddpm_sde if GPU version unavailable)
- Scheduler: Karras

**LoRA Loader:**

- Strength Model: 0.2-0.4 range
- Strength CLIP: 0.2-0.4 range

**IPAdapter:**

- Weight: 0.6
- Weight Type: composition (for IP Composition Adapter)

**Inpainting Specific:**

- Denoise: 0.5-0.6
- Use differential diffusion when available
- Mask feathering: 50 pixels
- Mask opacity: 0.75

## Running Experiments

### Load Research Workflows

1. Navigate to the ComfyUI interface
2. Load workflows from `user/default/workflows/`:
   - `IMG-SDTune-Lightning-RD.json`
   - `Inpaint.json` 
   - `IP-Adapter.json`
   - `Test Factory.json`

**Using ComfyUI Manager with Workflows:**

- When loading workflows, if nodes are missing, ComfyUI Manager will show a popup
- Click "Install Missing Custom Nodes" to automatically install required nodes
- Restart ComfyUI after installation
- Reload the workflow to verify all nodes are available

### For Cluster Usage

See `CLUSTER_ACCESS_README.md` for detailed SLURM cluster setup with SSH tunneling.

### API Usage

```python
# Basic API example
python script_examples/basic_api_example.py

# WebSocket examples  
python script_examples/websockets_api_example.py
```

## Troubleshooting

**CUDA Issues:**

```bash

pip uninstall torch
pip install torch --extra-index-url https://download.pytorch.org/whl/cu128
```

**Memory Issues:**

```bash
python main.py --cpu  # CPU fallback
python main.py --force-fp32  # Lower precision
```

**Custom Nodes Not Loading:**

- Check `custom_nodes/` directory
- Restart ComfyUI after installing new nodes
- Check logs for dependency issues
- Use ComfyUI Manager to reinstall problematic nodes
- Try "Update All" in ComfyUI Manager for compatibility fixes

**ComfyUI Manager Issues:**

- If the Manager button doesn't appear, restart ComfyUI
- Check that ComfyUI-Manager is properly cloned in `custom_nodes/`
- For model download failures, try manual wget commands provided above
- Clear browser cache if the Manager interface doesn't load properly

**Custom Nodes Installation Script Issues:**

- If the script fails with permission errors, run: `chmod +x install_custom_nodes.sh`
- For network issues, try rerunning the script (it will skip existing installations)
- If specific nodes fail to clone, check your internet connection and GitHub access
- Some nodes may require additional dependencies - check individual node README files
- After running the script, restart ComfyUI to load all new nodes
