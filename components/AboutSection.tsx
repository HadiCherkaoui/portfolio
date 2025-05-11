import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 top-1/4 w-40 h-40 rounded-full bg-[var(--primary-color)]/5"></div>
        <div className="absolute -right-20 bottom-1/4 w-60 h-60 rounded-full bg-[var(--secondary-color)]/5"></div>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-[var(--primary-color)]/10 text-[var(--primary-color)] rounded-full mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Get to Know Me Better
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Profile image with decorative elements */}
          <div className="md:w-2/5 relative" data-aos="fade-right">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[var(--primary-color)] rounded-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[var(--secondary-color)] rounded-2xl"></div>
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl hover-lift">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary-color)]/20 to-transparent z-10"></div>
              <Image
                src="/thewalk.jpg"
                alt="Profile Picture"
                width={500}
                height={500}
                className="rounded-2xl hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </div>
          
          {/* About content */}
          <div className="md:w-3/5" data-aos="fade-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--secondary-color)]">
              Platform Developer Apprentice
            </h3>
            
            <div className="space-y-4 text-[var(--foreground)]/80">
              <p className="text-lg leading-relaxed">
                I'm a <span className="font-semibold text-[var(--foreground)]">16-year-old Platform Developer apprentice</span> based in Switzerland, passionate about technology and open source. I love working with <span className="text-[var(--primary-color)]">Kubernetes</span>, automation, and managing my home lab setup (Proxmox with Kubernetes).
              </p>
              
              <p className="text-lg leading-relaxed">
                For me, IT isn't just a career choice - it's something I truly enjoy. Whether I'm writing PowerShell scripts, working with Docker containers, or exploring new technologies, I'm always excited to learn and create. My enthusiasm for Linux and open-source technologies drives me to continuously expand my knowledge.
              </p>
            </div>
            
            {/* Skills tags */}
            <div className="mt-8 mb-10">
              <h4 className="text-lg font-semibold mb-4">My Focus Areas:</h4>
              <div className="flex flex-wrap gap-2">
                {['Kubernetes', 'Docker', 'Linux', 'Automation', 'Cloud Native', 'CI/CD', 'Home Lab', 'Open Source'].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-[var(--card-bg)] text-sm font-medium rounded-full border border-[var(--foreground)]/10 hover:border-[var(--primary-color)]/50 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Connect links */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/HadiCherkaoui" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--card-bg)] rounded-lg hover:bg-[var(--primary-color)]/10 hover:text-[var(--primary-color)] border border-[var(--foreground)]/10 hover:border-[var(--primary-color)]/50 transition-all hover-lift"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
              <a 
                href="mailto:contact@hide.cherkaoui.ch" 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--card-bg)] rounded-lg hover:bg-[var(--primary-color)]/10 hover:text-[var(--primary-color)] border border-[var(--foreground)]/10 hover:border-[var(--primary-color)]/50 transition-all hover-lift"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
                Email Me
              </a>
              <a 
                href="https://docs.cherkaoui.ch/about-me" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--card-bg)] rounded-lg hover:bg-[var(--primary-color)]/10 hover:text-[var(--primary-color)] border border-[var(--foreground)]/10 hover:border-[var(--primary-color)]/50 transition-all hover-lift"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
