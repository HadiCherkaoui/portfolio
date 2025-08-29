import React from 'react';
import Image from 'next/image';

export default function DailyDriverSection() {
  return (
    <section id="daily-driver" className="py-24 px-4 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.1),transparent_70%)] pointer-events-none"></div>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-[var(--secondary-color)]/10 text-[var(--secondary-color)] rounded-full mb-4">
            Operating System
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-[var(--secondary-color)]">Daily Driver</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[var(--secondary-color)] to-[var(--primary-color)] mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Image with effects */}
          <div className="md:w-1/2 order-2 md:order-1" data-aos="fade-right">
            <div className="relative group">
              {/* Decorative elements */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition duration-700"></div>
              
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl hover-lift">
                <Image
                  src="/arch-linux-desktop.png"
                  alt="Arch Linux Desktop"
                  width={500}
                  height={500}
                  className="rounded-xl group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay with logo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.39 8.269c-.506 1.284-1.05 2.492-1.727 3.762-.677.047-1.257.073-1.927.2.804-1.304 1.62-2.597 2.454-3.962h1.2zm1.22 0c.834 1.365 1.65 2.658 2.454 3.962-.67-.127-1.25-.153-1.927-.2-.677-1.27-1.221-2.478-1.727-3.762h1.2zm-6.287 4.852c-.506.127-.956.323-1.337.596-.38.273-.7.613-.956 1.023-.256.41-.383.883-.383 1.419 0 .536.127 1.01.383 1.419.256.41.575.75.956 1.023.381.273.831.47 1.337.596.506.127 1.047.19 1.624.19.577 0 1.118-.063 1.624-.19.506-.127.956-.323 1.337-.596.38-.273.7-.613.956-1.023.256-.41.383-.883.383-1.419 0-.536-.127-1.01-.383-1.419-.256-.41-.575-.75-.956-1.023-.38-.273-.831-.47-1.337-.596-.506-.127-1.047-.19-1.624-.19-.577 0-1.118.063-1.624.19zm11.954 0c-.506.127-.956.323-1.337.596-.38.273-.7.613-.956 1.023-.256.41-.383.883-.383 1.419 0 .536.127 1.01.383 1.419.256.41.575.75.956 1.023.381.273.831.47 1.337.596.506.127 1.047.19 1.624.19.577 0 1.118-.063 1.624-.19.506-.127.956-.323 1.337-.596.38-.273.7-.613.956-1.023.256-.41.383-.883.383-1.419 0-.536-.127-1.01-.383-1.419-.256-.41-.575-.75-.956-1.023-.38-.273-.831-.47-1.337-.596-.506-.127-1.047-.19-1.624-.19-.577 0-1.118.063-1.624.19zM12 0L4.596 2.38l1.11 9.704L12 20l6.294-7.916 1.11-9.703L12 0z" />
                    </svg>
                    <h3 className="text-xl font-bold text-white">Arch Linux</h3>
                  </div>
                  <p className="text-white/90 text-sm">
                    My customized Arch Linux desktop environment with i3 window manager
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="md:w-1/2 order-1 md:order-2" data-aos="fade-left">
            <div className="space-y-4 text-[var(--foreground)]/80">
              <p className="text-lg leading-relaxed">
                I made the decision to migrate from Windows to <span className="font-semibold text-[var(--secondary-color)]">Arch Linux</span> as my daily operating system. This transition represents my commitment to open-source software, customization, and learning the inner workings of my system.
              </p>
              
              <p className="text-lg leading-relaxed">
                Arch Linux offers me complete control over my computing environment, allowing me to build a minimal, efficient system tailored to my specific needs. The rolling release model ensures I&apos;m always running the latest software without major version upgrades.
              </p>
              
              <p className="text-lg leading-relaxed">
                The journey wasn&apos;t without challenges, but the process taught me valuable skills in system administration, troubleshooting, and the Linux ecosystem. Now I enjoy a lightweight, secure, and highly customized desktop that perfectly suits my workflow.
              </p>
            </div>
            
            {/* Feature list */}
            <div className="mt-8 space-y-4">
              <h4 className="text-lg font-semibold mb-4">Key Features of My Setup:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--secondary-color)]/10 flex items-center justify-center text-[var(--secondary-color)]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </span>
                  <span>Customized Arch using kde plasma with kvantum</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--secondary-color)]/10 flex items-center justify-center text-[var(--secondary-color)]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </span>
                  <span>Custom shell scripts for automation and workflow enhancement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--secondary-color)]/10 flex items-center justify-center text-[var(--secondary-color)]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </span>
                  <span>Minimalist design focused on performance and efficiency</span>
                </li>
              </ul>
            </div>
            
            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a 
                href="https://github.com/HadiCherkaoui" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--secondary-color)] text-white rounded-lg hover:bg-[var(--secondary-color)]/90 transition-all hover-lift"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub Projects
              </a>
              <a 
                href="https://gitlab.cherkaoui.ch/HadiCherkaoui" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--card-bg)] rounded-lg hover:bg-[var(--secondary-color)]/10 hover:text-[var(--secondary-color)] border border-[var(--foreground)]/10 hover:border-[var(--secondary-color)]/50 transition-all hover-lift"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.955 13.587l-1.342-4.135-2.664-8.189c-.135-.423-.73-.423-.867 0L16.418 9.45H7.582L4.918 1.263c-.135-.423-.73-.423-.867 0L1.387 9.452.045 13.587c-.121.375.014.789.331 1.023L12 23.054l11.624-8.443c.318-.235.452-.648.331-1.024"/></svg>
                GitLab Projects
              </a>
              <a 
                href="https://docs.cherkaoui.ch/setup/os-setup" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--card-bg)] rounded-lg hover:bg-[var(--secondary-color)]/10 hover:text-[var(--secondary-color)] border border-[var(--foreground)]/10 hover:border-[var(--secondary-color)]/50 transition-all hover-lift"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Setup Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
