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

## Citation

If you use this data in your research, please cite our ICCV 2025 paper.
