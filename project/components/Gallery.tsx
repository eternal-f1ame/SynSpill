"use client";

import { useState } from "react";
import Image from "next/image";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "/gallery/abstract-fig.jpg",
      title: "Comparative Detection Performance",
      description: "Real-world CCTV image showing detection results from different methods",
      category: "results"
    },
    {
      src: "/gallery/pipeline.jpg", 
      title: "Detection Pipeline",
      description: "End-to-end system architecture for industrial spill detection",
      category: "architecture"
    },
    {
      src: "/gallery/synthetic-samples.jpg",
      title: "Synthetic Data Samples",
      description: "Generated spill images using AnomalInfusion pipeline",
      category: "synthetic"
    },
    {
      src: "/gallery/performance-comparison.jpg",
      title: "Performance Showdown",
      description: "Quantitative comparison across different methods and datasets",
      category: "results"
    },
    {
      src: "/gallery/localization.jpg",
      title: "Localization Accuracy",
      description: "Precision of spill detection and localization in industrial settings",
      category: "results"
    },
    {
      src: "/gallery/adaptation-strategies.jpg",
      title: "Adaptation Strategies",
      description: "Comparison of different model adaptation approaches",
      category: "method"
    }
  ];

  const categories = [
    { id: "all", label: "All", count: images.length },
    { id: "results", label: "Results", count: images.filter(img => img.category === "results").length },
    { id: "synthetic", label: "Synthetic Data", count: images.filter(img => img.category === "synthetic").length },
    { id: "architecture", label: "Architecture", count: images.filter(img => img.category === "architecture").length },
    { id: "method", label: "Methods", count: images.filter(img => img.category === "method").length }
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const filteredImages = activeCategory === "all" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-slate-900 to-blue-800 dark:from-white dark:to-blue-300 bg-clip-text text-transparent">
          Visual Results
        </h2>
        <p className="text-lg text-center text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
          Explore our comprehensive results, synthetic data samples, and system architecture
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750'
              }`}
            >
              {category.label}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative h-64 bg-gradient-to-br from-slate-100 to-blue-100 dark:from-slate-700 dark:to-slate-600 overflow-hidden">
                {/* Placeholder since we don't have actual images */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📊</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                      {image.title}
                    </div>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 dark:bg-slate-800/90 rounded-full p-3">
                      <svg className="w-6 h-6 text-slate-700 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {image.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {image.description}
                </p>
                
                {/* Category badge */}
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Paper Figures Note */}
        <div className="mt-16 bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 text-center">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
            📄 Paper Figures Available
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
            All figures and results shown in our ICCV 2025 paper are available in the project/figs directory. 
            High-resolution versions suitable for presentations and publications.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/project/figs/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
              View Paper Figures
            </a>
            <a
              href="/paper.pdf"
              className="inline-flex items-center px-6 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-full font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
            >
              📄 Full Paper (PDF)
            </a>
          </div>
        </div>
      </div>

      {/* Modal for enlarged image view */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full bg-white dark:bg-slate-800 rounded-2xl overflow-hidden">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="h-96 bg-gradient-to-br from-slate-100 to-blue-100 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <div className="text-xl text-slate-600 dark:text-slate-400 font-medium">
                  Figure Preview
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-500 mt-2">
                  Actual figures available in paper
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
