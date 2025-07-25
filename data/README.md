# Data Directory

This directory contains datasets and annotations for the SynSpill project.

## Structure

- `synthetic/` - Generated synthetic spill images and annotations
- `real/` - Real-world industrial CCTV footage (test set)
- `annotations/` - Ground truth labels and bounding boxes

## Synthetic Data

The synthetic dataset is generated using our AnomalInfusion pipeline:
- Stable Diffusion XL for base image generation
- IP adapters for style conditioning
- Inpainting for precise spill placement

### Format
- Images: JPEG format, various resolutions
- Annotations: COCO format JSON files
- Metadata: Generation parameters and prompts

## Real Data

Real-world test data includes:
- Industrial CCTV footage
- Various lighting conditions
- Different facility layouts
- Anonymized and privacy-compliant

## Annotations

Ground truth annotations include:
- Bounding box coordinates
- Spill classification labels
- Severity ratings
- Environmental context

## Access

Due to privacy and proprietary concerns, datasets are not publicly distributed. 
Contact the authors for research collaboration and data access requests.

## Citation

If you use this data in your research, please cite our ICCV 2025 paper.
