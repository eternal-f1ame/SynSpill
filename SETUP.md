# SynSpill Setup Guide

This guide will help you set up the environment needed to run the SynSpill synthetic data generation pipeline, which is built on top of ComfyUI.

## Prerequisites

- Python 3.10 or higher
- CUDA-compatible GPU with at least 8GB VRAM (recommended: 12GB+ for SDXL)
- Git

## 1. ComfyUI Installation

### Clone and Install ComfyUI

```bash
git clone https://github.com/comfyanonymous/ComfyUI.git
cd ComfyUI
pip install -r requirements.txt
```

### Install Additional Dependencies

```bash
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121
```

## 2. Model Downloads

You'll need to download several models and place them in the correct ComfyUI directories:

### Base Models (SDXL)
Place these in `ComfyUI/models/checkpoints/`:
- SDXL Base 1.0 model
- SDXL Refiner 1.0 model (optional)
- [Additional SDXL models as needed]

### LoRA Models
Place these in `ComfyUI/models/loras/`:
- Industrial environment LoRAs
- Spill detection specific LoRAs
- [Specific LoRA models will be provided]

### Inpainting Models
Place these in `ComfyUI/models/checkpoints/`:
- SDXL Inpainting model
- [Additional inpainting models as needed]

### IP-Adapter Models
Place these in `ComfyUI/models/ipadapter/`:
- IP-Adapter SDXL models
- [Specific IP-Adapter models will be provided]

## 3. ComfyUI Extension Installation

### Install ComfyUI Manager
1. Navigate to your ComfyUI directory
2. Clone ComfyUI Manager:
   ```bash
   cd custom_nodes
   git clone https://github.com/ltdrdata/ComfyUI-Manager.git
   ```

### Required Extensions
After installing ComfyUI Manager, install these extensions through the manager interface:

1. **ComfyUI-IPAdapter-Plus**
   - Essential for IP-Adapter functionality
   - Enables style and content conditioning

2. **ComfyUI-ControlNet**
   - Required for guided generation
   - Provides layout and pose control

3. **[Additional extensions to be specified]**
   - Extension 1: [Description]
   - Extension 2: [Description]
   - Extension 3: [Description]

## 4. Directory Structure

After setup, your ComfyUI directory should look like this:

```
ComfyUI/
├── models/
│   ├── checkpoints/
│   │   ├── [SDXL models]
│   │   └── [Inpainting models]
│   ├── loras/
│   │   └── [LoRA models]
│   ├── controlnet/
│   │   └── [ControlNet models]
│   ├── ipadapter/
│   │   └── [IP-Adapter models]
│   └── [other model directories]
├── custom_nodes/
│   ├── ComfyUI-Manager/
│   ├── ComfyUI-IPAdapter-Plus/
│   └── [other extensions]
└── [other ComfyUI files]
```

## 5. Verification

1. Start ComfyUI:
   ```bash
   python main.py
   ```

2. Open your browser and navigate to `http://localhost:8188`

3. Verify that all extensions are loaded correctly in the ComfyUI interface

4. Test basic functionality with a simple SDXL generation workflow

## 6. SynSpill Integration

After ComfyUI is set up:

1. Clone the SynSpill repository
2. Copy the provided ComfyUI workflows to your ComfyUI directory
3. Configure the data paths in the workflow files
4. Run the synthetic data generation pipeline

## Troubleshooting

### Common Issues

- **CUDA out of memory**: Reduce batch size or use model offloading
- **Missing models**: Ensure all models are downloaded and placed in correct directories
- **Extension conflicts**: Check ComfyUI Manager for compatibility issues

### Performance Optimization

- Use `--lowvram` flag if you have limited GPU memory
- Consider using `--cpu` for CPU-only inference (slower)
- Enable model offloading for better memory management

## Next Steps

Once ComfyUI is properly set up, you can proceed with:
1. Loading the SynSpill workflows
2. Configuring dataset paths
3. Running synthetic data generation
4. Training adaptation models

---

**Note**: This setup guide will be updated with specific model names, download links, and additional extension requirements as the project develops.
