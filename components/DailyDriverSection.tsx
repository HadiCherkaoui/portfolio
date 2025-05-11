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
                href="https://blog.cherkaoui.ch" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--secondary-color)] text-white rounded-lg hover:bg-[var(--secondary-color)]/90 transition-all hover-lift"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.199 24c-1.119 0-2.3-.21-3.531-.63-1.232-.42-2.4-1.009-3.51-1.77-1.108-.76-2.039-1.624-2.789-2.591-.75-.967-1.291-1.995-1.621-3.084-.33-1.089-.495-2.224-.495-3.405 0-1.183.165-2.319.495-3.405.33-1.087.87-2.115 1.621-3.084.75-.967 1.68-1.832 2.789-2.591 1.109-.761 2.279-1.35 3.51-1.77 1.23-.42 2.41-.63 3.531-.63 1.12 0 2.301.21 3.54.63 1.23.42 2.4 1.009 3.51 1.77 1.109.76 2.039 1.624 2.79 2.591.749.967 1.291 1.995 1.62 3.084.33 1.089.495 2.224.495 3.405 0 1.183-.165 2.319-.495 3.405-.33 1.087-.87 2.115-1.62 3.084-.75.967-1.68 1.832-2.79 2.591-1.11.761-2.28 1.35-3.51 1.77-1.24.42-2.42.63-3.54.63zm0-23c-1.029 0-2.12.19-3.24.57-1.12.38-2.19.909-3.21 1.59-1.02.68-1.9 1.471-2.61 2.37-.71.9-1.23 1.851-1.53 2.851-.3 1-.45 2.04-.45 3.119 0 1.08.15 2.12.45 3.12.3 1 .82 1.95 1.53 2.85.71.9 1.59 1.69 2.61 2.37 1.02.68 2.09 1.21 3.21 1.59 1.12.38 2.21.57 3.24.57 1.03 0 2.12-.19 3.24-.57 1.12-.38 2.19-.91 3.21-1.59 1.02-.68 1.9-1.47 2.61-2.37.71-.9 1.23-1.85 1.53-2.85.3-1 .45-2.04.45-3.12 0-1.08-.15-2.12-.45-3.12-.3-1-.82-1.95-1.53-2.85-.71-.9-1.59-1.69-2.61-2.37-1.02-.68-2.09-1.21-3.21-1.59-1.12-.38-2.21-.57-3.24-.57z"/><path d="M9.589 15.947c0-.297.058-.55.175-.757.117-.207.28-.378.487-.512.208-.135.446-.236.713-.303.267-.067.549-.101.846-.101.267 0 .533.033.8.101.267.067.505.168.713.303.208.134.375.305.5.512.125.207.188.46.188.757 0 .29-.063.537-.188.744-.125.207-.292.378-.5.512-.208.135-.446.232-.713.29-.267.06-.533.088-.8.088-.297 0-.579-.029-.846-.088-.267-.058-.505-.155-.713-.29-.208-.134-.37-.305-.487-.512-.117-.207-.175-.454-.175-.744zm7.822-9.947h-10.822v1h10.822v-1zm0 2h-10.822v1h10.822v-1zm0 2h-10.822v1h10.822v-1zm-10.822 4h4.822v8h-4.822v-8z"/></svg>
                Read Blog
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
