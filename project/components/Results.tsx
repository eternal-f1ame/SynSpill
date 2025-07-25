export function Results() {
  const results = [
    {
      method: "Qwen-VL 7B (Zero-Shot)",
      map50_public: "35",
      map50_proprietary: "15",
      color: "from-gray-500 to-slate-600"
    },
    {
      method: "Qwen-VL 32B (Zero-Shot)",
      map50_public: "42",
      map50_proprietary: "24",
      color: "from-gray-600 to-slate-700"
    },
    {
      method: "YOLOv11 (Fine-tuned)",
      map50_public: "81",
      map50_proprietary: "64",
      color: "from-orange-500 to-red-500"
    },
    {
      method: "RF-DETR (Fine-tuned)",
      map50_public: "83",
      map50_proprietary: "67",
      color: "from-green-500 to-emerald-600"
    },
    {
      method: "Qwen-VL 7B + LoRA (V+L)",
      map50_public: "78",
      map50_proprietary: "66",
      color: "from-blue-500 to-purple-600"
    },
    {
      method: "Qwen-VL 32B + LoRA (V+L)",
      map50_public: "84",
      map50_proprietary: "71",
      color: "from-purple-500 to-pink-600",
      highlight: true
    }
  ];

  const metrics = [
    {
      title: "Detection Accuracy",
      value: "84%",
      description: "Best mAP@50 with Qwen-VL 32B + LoRA",
      icon: "🎯"
    },
    {
      title: "Synthetic Images",
      value: "2,000",
      description: "High-quality samples generated via pipeline",
      icon: "📊"
    },
    {
      title: "Model Adaptation",
      value: "PEFT",
      description: "Parameter-efficient fine-tuning approach",
      icon: "🔧"
    },
    {
      title: "State-of-the-Art",
      value: "VLM",
      description: "Outperforms fine-tuned detectors",
      icon: "⚡"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-slate-900 to-blue-800 dark:from-white dark:to-blue-300 bg-clip-text text-transparent">
          Experimental Results
        </h2>
        <p className="text-lg text-center text-slate-600 dark:text-slate-400 mb-16 max-w-3xl mx-auto">
          Comprehensive evaluation demonstrates significant improvements with synthetic data
        </p>

        {/* Performance Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 text-center group hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-3">{metric.icon}</div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {metric.value}
              </div>
              <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">
                {metric.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Results Table */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 mb-16">
          <h3 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-8">
            Quantitative Comparison
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left py-4 px-4 font-semibold text-slate-900 dark:text-white">Method</th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-900 dark:text-white">Public Dataset</th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-900 dark:text-white">Proprietary Dataset</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result, index) => (
                  <tr
                    key={index}
                    className={`border-b border-slate-200 dark:border-slate-700 ${
                      result.highlight ? 'bg-white dark:bg-slate-800 shadow-sm' : ''
                    } hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors`}
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 bg-gradient-to-r ${result.color} rounded-full`}></div>
                        <span className={`font-medium ${result.highlight ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>
                          {result.method}
                        </span>
                        {result.highlight && (
                          <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-2 py-1 rounded-full">
                            Best
                          </span>
                        )}
                      </div>
                    </td>
                    <td className={`text-center py-4 px-4 font-mono ${result.highlight ? 'font-bold text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>
                      {result.map50_public}%
                    </td>
                    <td className={`text-center py-4 px-4 font-mono ${result.highlight ? 'font-bold text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>
                      {result.map50_proprietary}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Findings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              🔍 Key Findings
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <p className="text-slate-700 dark:text-slate-300">
                  <strong>PEFT VLMs achieve state-of-the-art performance</strong> - Qwen-VL 32B + LoRA (V+L) outperforms all baselines with 84% mAP@50
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-slate-700 dark:text-slate-300">
                  <strong>Synthetic data enables effective adaptation</strong> - 2,000 synthetic images bridge the domain gap for industrial spill detection
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <p className="text-slate-700 dark:text-slate-300">
                  <strong>Joint vision-language adaptation optimal</strong> - LoRA (V+L) provides the best performance across both datasets
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              🚀 Impact
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  1
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  First scalable solution for industrial spill detection using synthetic data
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  2
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Enables deployment in data-scarce industrial environments
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  3
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Provides cost-effective alternative to manual monitoring
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
