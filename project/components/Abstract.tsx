export function Abstract() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        {/* Conference Info */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-sm font-medium shadow-lg">
              <span className="mr-2">🏆</span>
              ICCV 2025
            </div>
            <div className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl text-sm font-medium shadow-lg">
              <span className="mr-2">👁️</span>
              VISION Workshop
            </div>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
            Workshop on Computer Vision for Industrial Applications
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-500">
            International Conference on Computer Vision • Milan, Italy • October 2025
          </p>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-slate-900 to-blue-800 dark:from-white dark:to-blue-300 bg-clip-text text-transparent">
          Abstract
        </h2>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
            Large-scale Vision-Language Models (VLMs) have transformed general-purpose visual recognition through strong zero-shot capabilities. However, their performance degrades significantly in niche, safety-critical domains such as industrial spill detection, where hazardous events are rare, sensitive, and difficult to annotate.
          </p>
          
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
            This scarcity—driven by privacy concerns, data sensitivity, and the infrequency of real incidents—renders conventional fine-tuning of detectors infeasible for most industrial settings.
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 mb-6 border border-blue-100 dark:border-blue-800">
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 font-medium">
              We address this challenge by introducing a scalable framework centered on a high-quality synthetic data generation pipeline. We demonstrate that this synthetic corpus enables effective <strong>Parameter-Efficient Fine-Tuning (PEFT)</strong> of VLMs and substantially boosts the performance of state-of-the-art object detectors such as YOLO and DETR.
            </p>
          </div>
          
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
            Notably, in the absence of synthetic data (SynSpill dataset), VLMs still generalize better to unseen spill scenarios than these detectors. When SynSpill is used, both VLMs and detectors achieve marked improvements, with their performance becoming comparable.
          </p>
          
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            Our results underscore that a <strong>high-fidelity synthetic data</strong> is a powerful means to bridge the domain gap in safety-critical applications. The combination of synthetic generation and lightweight adaptation offers a cost-effective, scalable pathway for deploying vision systems in industrial environments where real data is scarce/impractical to obtain.
          </p>
        </div>
      </div>
    </section>
  );
}
