export function Method() {
  const approaches = [
    {
      title: "Zero-Shot VLM",
      description: "Baseline performance without any adaptation",
      features: ["No training required", "General capabilities", "Limited domain knowledge"],
      color: "from-gray-500 to-slate-600",
      performance: "42.1%"
    },
    {
      title: "PEFT + SynSpill",
      description: "Parameter-efficient fine-tuning with synthetic data",
      features: ["LoRA adaptation", "Synthetic data training", "Domain specialization"],
      color: "from-blue-500 to-purple-600",
      performance: "63.4%"
    },
    {
      title: "Traditional Detectors",
      description: "YOLO/DETR baseline without synthetic data",
      features: ["Object detection focus", "Limited generalization", "Real-world challenges"],
      color: "from-orange-500 to-red-500",
      performance: "39.8%"
    },
    {
      title: "Detectors + SynSpill",
      description: "Traditional detectors trained with synthetic data",
      features: ["Improved accuracy", "Better robustness", "Enhanced performance"],
      color: "from-green-500 to-emerald-600",
      performance: "61.2%"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-slate-900 to-blue-800 dark:from-white dark:to-blue-300 bg-clip-text text-transparent">
          Methodology Comparison
        </h2>
        <p className="text-lg text-center text-slate-600 dark:text-slate-400 mb-16 max-w-3xl mx-auto">
          Comprehensive evaluation of different approaches to industrial spill detection
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${approach.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Performance badge */}
              <div className="absolute top-4 right-4">
                <div className={`bg-gradient-to-r ${approach.color} text-white px-3 py-1 rounded-lg text-sm font-bold shadow-lg`}>
                  mAP: {approach.performance}
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {approach.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  {approach.description}
                </p>

                                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    {approach.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <div className={`w-2 h-2 bg-gradient-to-r ${approach.color} rounded-sm mt-2`}></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Process Flow */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700">
          <h3 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-8">
            PEFT Training Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto shadow-lg">
                🎨
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">Generate</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Create synthetic spill images using diffusion models</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto shadow-lg">
                🏷️
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">Annotate</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Automatically label synthetic data with ground truth</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-16 h-16 rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto shadow-lg">
                🔧
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">Adapt</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Fine-tune models using LoRA on synthetic dataset</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-500 to-orange-500 w-16 h-16 rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto shadow-lg">
                ✅
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">Deploy</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Deploy adapted model for real-world detection</p>
            </div>
          </div>

          {/* Arrows */}
          <div className="hidden md:flex justify-center items-center mt-6 space-x-16">
            <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Key Innovation */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">💡 Key Innovation</h3>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Our synthetic data generation pipeline bridges the gap between scarce real-world data and the need for robust industrial spill detection, enabling effective model adaptation with minimal computational overhead.
          </p>
        </div>
      </div>
    </section>
  );
}
