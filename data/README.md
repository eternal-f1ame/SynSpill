# SynSpill Data Directory

This directory contains datasets, annotations, and workflow configurations for the SynSpill project - a comprehensive dataset for industrial spill detection and synthesis.

## Directory Structure

```text
data/
├── README.md                    # This file
├── generation_workflow.json    # ComfyUI workflow for synthetic image generation
├── inpainting_workflow.json    # ComfyUI workflow for inpainting operations
├── release/                     # Full dataset release
│   ├── annotation_masks/        # Binary masks for spill regions (PNG format)
│   ├── annotations/             # Ground truth annotations and metadata
│   └── generated_images/        # Complete set of synthetic spill images
└── samples/                     # Sample data for preview and testing
    ├── annotation_masks/        # Sample binary masks
    ├── generated_images/        # Sample synthetic images
    └── inpainted_images/        # Sample inpainted results
```

## Dataset Contents

### Release Dataset (`release/`)

- **Generated Images**: High-quality synthetic industrial spill scenarios
- **Annotation Masks**: Pixel-perfect binary masks identifying spill regions
- **Annotations**: Structured metadata including bounding boxes, class labels, and scene descriptions

### Sample Dataset (`samples/`)

A subset of the full dataset for quick evaluation and testing purposes, containing:

- Representative examples from each category
- Various spill types and industrial environments
- Both generated and inpainted image samples

### Workflow Configurations

- **`generation_workflow.json`**: ComfyUI workflow for generating base synthetic images using Stable Diffusion XL
- **`inpainting_workflow.json`**: ComfyUI workflow for precise spill placement and inpainting operations

## Synthetic Data Generation

The synthetic dataset is created using our AnomalInfusion pipeline:

1. **Base Generation**: Stable Diffusion XL creates industrial environment images
2. **Style Conditioning**: IP adapters ensure consistent visual style across scenes
3. **Spill Synthesis**: Controlled inpainting places realistic spills in specified locations
4. **Mask Generation**: Automated creation of precise segmentation masks

## Usage

The data is organized for direct use with computer vision frameworks:

- Images are in standard formats (PNG/JPG)
- Masks are binary images (0 = background, 255 = spill)
- Annotations follow standard object detection formats

## Citation

If you use this dataset in your research, please cite our ICCV 2025 paper:

```bibtex
@inproceedings{baranwal2025synspill,
    title={SynSpill: Improved Industrial Spill Detection With Synthetic Data},
    author={Baranwal, Aaditya and Bhatia, Guneet and Mueez, Abdul and Voelker, Jason and Vyas, Shruti},
    booktitle={Proceedings of the IEEE/CVF International Conference on Computer Vision},
    year={2025}
}
```

## License

Please refer to the `LICENSE.md` file in the root directory for licensing information.
