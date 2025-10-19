import React from 'react';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 top-1/4 w-80 h-80 rounded-full bg-[var(--primary-color)]/5"></div>
        <div className="absolute -left-40 bottom-1/4 w-80 h-80 rounded-full bg-[var(--secondary-color)]/5"></div>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-[var(--primary-color)]/10 text-[var(--primary-color)] rounded-full mb-4">
            My Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="text-[var(--primary-color)]">Technologies</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Skills grid */}
          <div className="md:w-1/2 order-2 md:order-1" data-aos="fade-right">
            <div className="grid grid-cols-2 gap-6">
              {/* Open Source */}
              <div className="p-6 bg-[var(--card-bg)] rounded-xl shadow-lg hover-lift group transition-all duration-300 text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center text-[var(--primary-color)] group-hover:bg-[var(--primary-color)]/20 transition-colors duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path d="M6 3v12"></path><path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path><path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path><path d="M15 6a9 9 0 0 0-9 9"></path><path d="M18 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path><path d="M9 6a9 9 0 0 1 9 9"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[var(--primary-color)]">Open Source</h3>
                <p className="text-[var(--foreground)]/70">Active Contributor</p>
              </div>
              
              {/* PowerShell & Linux */}
              <div className="p-6 bg-[var(--card-bg)] rounded-xl shadow-lg hover-lift group transition-all duration-300 text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--secondary-color)]/10 flex items-center justify-center text-[var(--secondary-color)] group-hover:bg-[var(--secondary-color)]/20 transition-colors duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[var(--secondary-color)]">PowerShell & Linux</h3>
                <p className="text-[var(--foreground)]/70">Automation & Scripting</p>
              </div>
              
              {/* Security */}
              <div className="p-6 bg-[var(--card-bg)] rounded-xl shadow-lg hover-lift group transition-all duration-300 text-center" data-aos="fade-up" data-aos-delay="300">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center text-[var(--primary-color)] group-hover:bg-[var(--primary-color)]/20 transition-colors duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[var(--primary-color)]">Security</h3>
                <p className="text-[var(--foreground)]/70">System & Network Security</p>
              </div>
              
              {/* More Skills */}
              <div className="p-6 bg-[var(--card-bg)] rounded-xl shadow-lg hover-lift group transition-all duration-300 text-center relative" data-aos="fade-up" data-aos-delay="400">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--secondary-color)]/10 flex items-center justify-center text-[var(--secondary-color)] group-hover:bg-[var(--secondary-color)]/20 transition-colors duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[var(--secondary-color)]">More Skills</h3>
                <p className="text-[var(--foreground)]/70">Click to view full skillset</p>
                <a 
                  href="https://docs.cherkaoui.ch/skills" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] rounded-xl transition-opacity duration-300"
                >
                  <span className="text-white font-medium flex items-center">
                    View All
                    <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="md:w-1/2 order-1 md:order-2" data-aos="fade-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--primary-color)]">
              Technical Proficiency
            </h3>
            
            <p className="text-lg leading-relaxed text-[var(--foreground)]/80 mb-8">
              Passionate about technology, from PC building to infrastructure automation. I love working with Linux, containers, and modern DevOps tools while actively contributing to open source projects.
            </p>
            
            {/* Skill bars */}
            <div className="space-y-5 mb-8">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Kubernetes & Docker</span>
                  <span className="text-[var(--primary-color)]">100%</span>
                </div>
                <div className="w-full bg-[var(--card-bg)] rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] h-2.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Linux & Shell Scripting</span>
                  <span className="text-[var(--primary-color)]">85%</span>
                </div>
                <div className="w-full bg-[var(--card-bg)] rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Cloud Platforms (AWS, Azure)</span>
                  <span className="text-[var(--primary-color)]">80%</span>
                </div>
                <div className="w-full bg-[var(--card-bg)] rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] h-2.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Web Development</span>
                  <span className="text-[var(--primary-color)]">75%</span>
                </div>
                <div className="w-full bg-[var(--card-bg)] rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Backend Developing</span>
                  <span className="text-[var(--primary-color)]">80%</span>
                </div>
                <div className="w-full bg-[var(--card-bg)] rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] h-2.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Ethical Hacking</span>
                  <span className="text-[var(--primary-color)]">30%</span>
                </div>
                <div className="w-full bg-[var(--card-bg)] rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] h-2.5 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>
            
            {/* Skill tags */}
            <div className="flex flex-wrap gap-2">
              {[
                'Kubernetes', 'Docker', 'Linux', 'AWS', 'Azure', 'Terraform', 'FluxCD',
                'PowerShell', 'Python', 'JavaScript', 'TypeScript', 'Go', 'React', 'Next.js',
                'CI/CD', 'Git', 'Proxmox', 'Networking'
              ].map((tag, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1.5 bg-[var(--card-bg)] text-sm font-medium rounded-full border border-[var(--foreground)]/10 hover:border-[var(--primary-color)]/50 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
