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
          </div>
        </div>
      </div>
    </section>
  );
}
