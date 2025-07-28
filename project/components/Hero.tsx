"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
        {/* Animated background particles */}
      <div className="absolute inset-0">
        {isVisible && [...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-lg opacity-20 animate-pulse"
            style={{
              left: `${(i * 13.7) % 100}%`,
              top: `${(i * 17.3) % 100}%`,
              animationDelay: `${(i * 0.15) % 3}s`,
              animationDuration: `${3 + (i * 0.1) % 2}s`
            }}
          />
        ))}
      </div>      <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="relative bg-white dark:bg-slate-800 rounded-xl p-6 shadow-2xl">
              <Image
                src="/spill-logo.png"
                alt="SynSpill Logo"
                width={100}
                height={100}
                className="w-20 h-20 md:w-24 md:h-24"
              />
            </div>
          </div>
        </div>

        {/* Conference Badge */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row gap-2 items-center justify-center">
            <a 
              href="https://iccv.thecvf.com/Conferences/2025" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="mr-2">🏆</span>
              ICCV 2025
            </a>
            <a 
              href="https://vision-workshop.github.io/iccv-2025/"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="mr-2">👁️</span>
              VISION Workshop
            </a>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-300 dark:to-white bg-clip-text text-transparent mb-6 leading-tight">
          SynSpill
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 mb-4 max-w-4xl mx-auto leading-relaxed">
          Improved Industrial Spill Detection With Synthetic Data
        </p>

        {/* Authors */}
        <div className="mb-12 text-slate-600 dark:text-slate-300">
          <p className="text-lg mb-2">
            <span className="font-semibold">Aaditya Baranwal</span>¹<sup>†</sup>,  
            <span className="font-semibold">Abdul Mueez</span>¹,
          </p>
          <p className="text-lg mb-4">
            <span className="font-semibold">Jason Voelker</span>²,
            <span className="font-semibold">Guneet Bhatia</span>²,
            <span className="font-semibold">Shruti Vyas</span>¹
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            ¹University of Central Florida • ²Siemens Energy
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="/paper.pdf"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center">
              📄 Read Paper
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>
          
          <a
            href="https://github.com/eternal-f1ame/SynSpill"
            className="group px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-xl font-semibold text-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
          >
            <span className="flex items-center">
              <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              GitHub
            </span>
          </a>
          
          <a
            href="https://github.com/eternal-f1ame/SynSpill/tree/main/data"
            className="group px-8 py-4 border-2 border-orange-300 text-orange-600 rounded-xl font-semibold text-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300"
          >
            <span className="flex items-center">
              🗂️ Dataset
            </span>
          </a>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="absolute bottom-1 left-1/2 transform -translate-x-1/2 p-3 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
          aria-label="Scroll down"
        >
          <svg className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
}
