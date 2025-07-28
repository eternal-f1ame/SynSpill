export function Highlights() {
  const highlights = [
    {
      icon: "🏭",
      title: "Industrial Safety Focus",
      description: "First comprehensive framework for automated industrial spill detection using computer vision",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: "🎨",
      title: "Synthetic Data Pipeline",
      description: "Novel AnomalInfusion technique using Stable Diffusion XL + IP adapters for realistic spill generation",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "🧠",
      title: "VLM Adaptation", 
      description: "Parameter-efficient fine-tuning with LoRA for domain specialization without full model retraining",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "📊",
      title: "Dual Approach",
      description: "Benefits both Vision-Language Models and traditional object detectors (YOLO, DETR)",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "⚡",
      title: "Zero-Shot Capability",
      description: "Strong generalization to unseen spill scenarios even without synthetic data training",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: "🎯",
      title: "Real-World Validation",
      description: "Tested and validated on actual industrial CCTV footage from manufacturing facilities",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-slate-900 to-blue-800 dark:from-white dark:to-blue-300 bg-clip-text text-transparent">
          Key Highlights
        </h2>
        <p className="text-lg text-center text-slate-600 dark:text-slate-400 mb-16 max-w-3xl mx-auto">
          Breakthrough innovations in synthetic data generation and model adaptation for industrial safety applications
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 border border-slate-200 dark:border-slate-700"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${highlight.color} rounded-xl mb-6 text-2xl shadow-lg`}>
                {highlight.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                {highlight.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {highlight.description}
              </p>
              
              {/* Hover indicator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium shadow-lg">
            <span className="mr-2">🚀</span>
            Revolutionizing Industrial Safety with AI
          </div>
        </div>
      </div>
    </section>
  );
}
