"use client";

import { useState } from "react";

export function Citation() {
  const [copied, setCopied] = useState(false);

  const bibtex = `@inproceedings{baranwal2025synspill,
    title={SynSpill: Improved Industrial Spill Detection With Synthetic Data},
    author={Baranwal, Aaditya and Mueez, Abdul and Voelker, Jason and Bhatia, Guneet and Vyas, Shruti},
    booktitle={Proceedings of the IEEE/CVF International Conference on Computer Vision},
    year={2025}
}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-slate-900 to-blue-800 dark:from-white dark:to-blue-300 bg-clip-text text-transparent">
          Citation
        </h2>
        <p className="text-lg text-center text-slate-600 dark:text-slate-400 mb-16 max-w-3xl mx-auto">
          If you use our work, please cite our paper
        </p>

        {/* Citation Box */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              📝 BibTeX Citation
            </h3>
            <button
              onClick={copyToClipboard}
              className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                copied 
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' 
                  : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50'
              }`}
            >
              {copied ? (
                <>
                  <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy
                </>
              )}
            </button>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
            <pre className="text-sm text-slate-700 dark:text-slate-300 font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">
              {bibtex}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
