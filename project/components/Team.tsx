"use client";

import Image from "next/image";

export function Team() {
  const institutions = [
    {
      name: "University of Central Florida",
      logo: "/UCF-logo.png",
      website: "https://www.ucf.edu",
    },
    {
      name: "Siemens Energy",
      logo: "/SE-logo.png",
      website: "https://www.siemens-energy.com",
    }
  ];

  return (
    <section className="py-20 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-slate-900 to-blue-800 dark:from-white dark:to-blue-300 bg-clip-text text-transparent">
          Research Collaboration
        </h2>
        <p className="text-lg text-center text-slate-600 dark:text-slate-400 mb-16 max-w-3xl mx-auto">
          Collaborative effort between academic researchers and industry experts to advance Smart Sensing
        </p>

        {/* Institutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {institutions.map((institution, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg transition-all duration-300"
            >
              <a 
                href={institution.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-white rounded-xl mb-6 shadow-lg group-hover:scale-105 transition-transform duration-300 p-2`}>
                  <Image
                    src={institution.logo}
                    alt={`${institution.name} Logo`}
                    width={60}
                    height={60}
                    className="w-14 h-14 object-contain"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {institution.name}
                </h3>
                
                <div className="mt-4 inline-flex items-center text-sm text-blue-600 dark:text-blue-400 group-hover:underline">
                  Visit Website
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Collaboration Statement */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">🤝 Academic-Industry Collaboration</h3>
          <p className="text-lg opacity-90 max-w-4xl mx-auto leading-relaxed">
            This work represents a successful collaboration between academic research and industrial application, 
            combining cutting-edge computer vision research with real-world safety requirements in industrial environments. 
            Our partnership ensures that research innovations translate directly into practical solutions for industrial safety.
          </p>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
            Get In Touch
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:aaditya.baranwal@ucf.edu"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Research Inquiries
            </a>
            <a
              href="https://github.com/eternal-f1ame/SynSpill"
              className="inline-flex items-center px-6 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-full font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
