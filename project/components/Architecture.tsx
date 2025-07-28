export function Architecture() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-slate-900 to-blue-800 dark:from-white dark:to-blue-300 bg-clip-text text-transparent">
          System Architecture
        </h2>
        <p className="text-lg text-center text-slate-600 dark:text-slate-400 mb-16 max-w-3xl mx-auto">
          End-to-end pipeline for industrial spill detection using synthetic data and Vision-Language Models
        </p>

        {/* Main Architecture Diagram */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 mb-16 border border-slate-200 dark:border-slate-700">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            {/* Input Stage */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-20 h-20 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto shadow-lg">
                📹
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Input Stage</h3>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
                  CCTV Feed
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
                  Text Prompt
                </div>
              </div>
            </div>

            {/* Processing Stage */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-20 h-20 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto shadow-lg">
                🧠
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">VLM Processing</h3>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
                  PEFT Training
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
                  LoRA Adaptation
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
                  Confidence Scoring
                </div>
              </div>
            </div>

            {/* Output Stage */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-red-500 to-orange-600 w-20 h-20 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto shadow-lg">
                🚨
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Alert System</h3>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
                  Detection Results
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
                  Alert Trigger
                </div>
              </div>
            </div>
          </div>

          {/* Flow Arrows */}
          <div className="hidden lg:block">
            <div className="flex justify-center items-center mt-8">
              <div className="flex items-center space-x-8">
                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Synthetic Data Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              AnomalInfusion Pipeline
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Stable Diffusion XL</h4>
                  <p className="text-slate-600 dark:text-slate-400">Base image generation with controlled prompts</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">IP Adapters</h4>
                  <p className="text-slate-600 dark:text-slate-400">Style and content conditioning for realism</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Inpainting</h4>
                  <p className="text-slate-600 dark:text-slate-400">Precise spill placement and anomaly insertion</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 text-center">
              Data Flow
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Real Images</span>
                <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-2 py-1 rounded">Scarce</span>
              </div>
              <div className="text-center">
                <svg className="w-6 h-6 text-slate-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Synthetic Data</span>
                <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 py-1 rounded">Abundant</span>
              </div>
              <div className="text-center">
                <svg className="w-6 h-6 text-slate-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg">
                <span className="text-sm font-medium">Trained Model</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded">Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
