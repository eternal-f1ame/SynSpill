#!/bin/bash

# ComfyUI Custom Nodes Installation Script
# This script installs all the custom nodes used in the research project

set -e  # Exit on any error

echo "🚀 Installing ComfyUI Custom Nodes for Research Project"
echo "======================================================="

# Change to custom_nodes directory
cd custom_nodes

echo "📦 Installing essential custom nodes..."

# ComfyUI Manager - Essential for managing other nodes and models
echo "Installing ComfyUI Manager..."
if [ ! -d "ComfyUI-Manager" ]; then
    git clone https://github.com/ltdrdata/ComfyUI-Manager.git
else
    echo "✅ ComfyUI Manager already exists"
fi

# ComfyUI IPAdapter Plus - For IP-Adapter functionality
echo "Installing ComfyUI IPAdapter Plus..."
if [ ! -d "ComfyUI_IPAdapter_plus" ]; then
    git clone https://github.com/cubiq/ComfyUI_IPAdapter_plus.git
else
    echo "✅ ComfyUI IPAdapter Plus already exists"
fi

# ComfyUI Comfyroll Custom Nodes - Utility nodes
echo "Installing ComfyUI Comfyroll Custom Nodes..."
if [ ! -d "ComfyUI_Comfyroll_CustomNodes" ]; then
    git clone https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes.git
else
    echo "✅ ComfyUI Comfyroll Custom Nodes already exists"
fi

# ComfyUI Impact Pack - Advanced image processing
echo "Installing ComfyUI Impact Pack..."
if [ ! -d "ComfyUI-Impact-Pack" ]; then
    git clone https://github.com/ltdrdata/ComfyUI-Impact-Pack.git
else
    echo "✅ ComfyUI Impact Pack already exists"
fi

# ComfyUI Impact Subpack - Additional impact functionality
echo "Installing ComfyUI Impact Subpack..."
if [ ! -d "ComfyUI-Impact-Subpack" ]; then
    git clone https://github.com/ltdrdata/ComfyUI-Impact-Subpack.git
else
    echo "✅ ComfyUI Impact Subpack already exists"
fi

# ComfyUI Inspire Pack - Additional utilities
echo "Installing ComfyUI Inspire Pack..."
if [ ! -d "ComfyUI-Inspire-Pack" ]; then
    git clone https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git
else
    echo "✅ ComfyUI Inspire Pack already exists"
fi

# ComfyUI Custom Scripts - Workflow enhancements
echo "Installing ComfyUI Custom Scripts..."
if [ ! -d "ComfyUI-Custom-Scripts" ]; then
    git clone https://github.com/pythongosssss/ComfyUI-Custom-Scripts.git
else
    echo "✅ ComfyUI Custom Scripts already exists"
fi

# ComfyUI Dynamic Prompts - Dynamic prompt generation
echo "Installing ComfyUI Dynamic Prompts..."
if [ ! -d "comfyui-dynamicprompts" ]; then
    git clone https://github.com/adieyal/comfyui-dynamicprompts.git
else
    echo "✅ ComfyUI Dynamic Prompts already exists"
fi

# ComfyUI KJNodes - Additional utility nodes
echo "Installing ComfyUI KJNodes..."
if [ ! -d "comfyui-kjnodes" ]; then
    git clone https://github.com/kijai/ComfyUI-KJNodes.git comfyui-kjnodes
else
    echo "✅ ComfyUI KJNodes already exists"
fi

# ComfyUI Ultimate SD Upscale - Advanced upscaling
echo "Installing ComfyUI Ultimate SD Upscale..."
if [ ! -d "ComfyUI_UltimateSDUpscale" ]; then
    git clone https://github.com/ssitu/ComfyUI_UltimateSDUpscale.git
else
    echo "✅ ComfyUI Ultimate SD Upscale already exists"
fi

# ComfyUI GGUF - GGUF model support
echo "Installing ComfyUI GGUF..."
if [ ! -d "ComfyUI-GGUF" ]; then
    git clone https://github.com/city96/ComfyUI-GGUF.git
else
    echo "✅ ComfyUI GGUF already exists"
fi

# ComfyUI Image Filters - Image processing filters
echo "Installing ComfyUI Image Filters..."
if [ ! -d "ComfyUI-Image-Filters" ]; then
    git clone https://github.com/spacepxl/ComfyUI-Image-Filters.git
else
    echo "✅ ComfyUI Image Filters already exists"
fi

# ComfyUI Depth Anything V2 - Depth estimation
echo "Installing ComfyUI Depth Anything V2..."
if [ ! -d "comfyui-depthanythingv2" ]; then
    git clone https://github.com/kijai/ComfyUI-DepthAnythingV2.git comfyui-depthanythingv2
else
    echo "✅ ComfyUI Depth Anything V2 already exists"
fi

# ComfyUI RMBG - Background removal
echo "Installing ComfyUI RMBG..."
if [ ! -d "comfyui-rmbg" ]; then
    git clone https://github.com/Jcd1230/rembg-comfyui-node.git comfyui-rmbg
else
    echo "✅ ComfyUI RMBG already exists"
fi

# ComfyUI FizzNodes - Animation and scheduling nodes
echo "Installing ComfyUI FizzNodes..."
if [ ! -d "comfyui_fizznodes" ]; then
    git clone https://github.com/FizzleDorf/ComfyUI_FizzNodes.git comfyui_fizznodes
else
    echo "✅ ComfyUI FizzNodes already exists"
fi

# ComfyUI PanoCard - Panorama processing
echo "Installing ComfyUI PanoCard..."
if [ ! -d "ComfyUI-PanoCard" ]; then
    git clone https://github.com/Fannovel16/ComfyUI-PanoCard.git
else
    echo "✅ ComfyUI PanoCard already exists"
fi

# RGThree ComfyUI - Advanced workflow nodes
echo "Installing RGThree ComfyUI..."
if [ ! -d "rgthree-comfy" ]; then
    git clone https://github.com/rgthree/rgthree-comfy.git
else
    echo "✅ RGThree ComfyUI already exists"
fi

# SD Dynamic Thresholding - Dynamic thresholding for SD
echo "Installing SD Dynamic Thresholding..."
if [ ! -d "sd-dynamic-thresholding" ]; then
    git clone https://github.com/mcmonkeyprojects/sd-dynamic-thresholding.git
else
    echo "✅ SD Dynamic Thresholding already exists"
fi

# WAS Node Suite - Comprehensive node collection
echo "Installing WAS Node Suite..."
if [ ! -d "was-node-suite-comfyui" ]; then
    git clone https://github.com/WASasquatch/was-node-suite-comfyui.git
else
    echo "✅ WAS Node Suite already exists"
fi

# CG Image Filter - Additional image filters
echo "Installing CG Image Filter..."
if [ ! -d "cg-image-filter" ]; then
    git clone https://github.com/chrisgoringe/cg-image-filter.git
else
    echo "✅ CG Image Filter already exists"
fi

# Derfuu Modded Nodes - Various utility nodes
echo "Installing Derfuu Modded Nodes..."
if [ ! -d "derfuu_comfyui_moddednodes" ]; then
    git clone https://github.com/Derfuu/Derfuu_ComfyUI_ModdedNodes.git derfuu_comfyui_moddednodes
else
    echo "✅ Derfuu Modded Nodes already exists"
fi

echo ""
echo "✅ All custom nodes installed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Restart ComfyUI to load the new nodes"
echo "2. Some nodes may require additional dependencies - check individual README files"
echo "3. Use ComfyUI Manager to install any missing models or resolve dependencies"
echo "4. Check the console for any error messages during startup"
echo ""
echo "🎉 Installation complete! Your ComfyUI is ready for research workflows."
