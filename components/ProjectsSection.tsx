import React from 'react';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Quillium - Open Source AI Search',
      description: 'Self-hostable alternative to Perplexity with Go backend and Next.js frontend',
      tags: ['Go', 'Next.js', 'AI'],
      link: 'https://gitlab.cherkaoui.ch/quillium-ai'
    },
    {
      title: 'Home Kubernetes Cluster',
      description: 'Production-grade enterprise Kubernetes cluster for media, backups, and self-hosted services',
      tags: ['Kubernetes', 'Proxmox', 'OpenTofu'],
      link: 'https://docs.cherkaoui.ch/homelab'
    },
    {
      title: 'Automated Life with n8n & GitLab',
      description: 'Complete automation setup using self-hosted GitLab CI/CD and n8n workflows for daily tasks',
      tags: ['n8n', 'GitLab', 'Automation', 'Self-hosted'],
      link: 'https://gitlab.cherkaoui.ch/HadiCherkaoui'
    }
  ];

  const highlights = [
    'Built a self-hostable AI search engine alternative',
    'Designed and deployed a production-grade Kubernetes cluster at home',
    'Automated daily workflows using self-hosted GitLab and n8n for complete life automation'
  ];

  return (
    <section id="projects" className="pt-65 pb-24 px-4 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.1),transparent_70%)] pointer-events-none"></div>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-[var(--primary-color)]/10 text-[var(--primary-color)] rounded-full mb-4">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-[var(--primary-color)]">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
            Here are some of my recent projects. I&apos;m passionate about building tools that solve real problems and contribute to the open-source community.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Project cards */}
          <div className="md:w-1/2 order-2 md:order-1" data-aos="fade-right">
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-[var(--card-bg)] rounded-xl shadow-lg hover-lift group transition-all duration-300 border border-[var(--foreground)]/5 relative overflow-hidden" 
                  data-aos="fade-up" 
                  data-aos-delay={100 * (index + 1)}
                >
                  {/* Decorative gradient */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]"></div>
                  
                  <h3 className="text-xl font-bold mb-3 text-[var(--foreground)]">
                    {project.title}
                  </h3>
                  
                  <p className="text-[var(--foreground)]/70 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-2 py-1 bg-[var(--primary-color)]/10 text-[var(--primary-color)] rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-sm text-[var(--primary-color)] hover:text-[var(--primary-color)]/80 transition-colors"
                  >
                    <span>View Project</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          {/* Project info */}
          <div className="md:w-1/2 order-1 md:order-2" data-aos="fade-left">
            <div className="sticky top-24">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--primary-color)]">
                  What I Build
                </h3>
                
                <p className="text-lg leading-relaxed text-[var(--foreground)]/80 mb-6">
                  I focus on creating practical solutions that leverage modern technologies. My projects range from web applications to infrastructure automation and knowledge sharing.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://github.com/HadiCherkaoui" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary-color)] text-white rounded-lg hover:bg-[var(--primary-color)]/90 transition-colors hover-lift"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    GitHub Projects
                  </a>
                  <a 
                    href="https://gitlab.cherkaoui.ch/HadiCherkaoui" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--card-bg)] text-[var(--foreground)] border border-[var(--primary-color)] rounded-lg hover:bg-[var(--primary-color)]/10 transition-colors hover-lift"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.955 13.587l-1.342-4.135-2.664-8.189c-.135-.423-.73-.423-.867 0L16.418 9.45H7.582L4.918 1.263c-.135-.423-.73-.423-.867 0L1.387 9.452.045 13.587c-.121.375.014.789.331 1.023L12 23.054l11.624-8.443c.318-.235.452-.648.331-1.024"/></svg>
                    GitLab Projects
                  </a>
                </div>
              </div>
              
              <div className="bg-[var(--card-bg)] p-6 rounded-xl shadow-lg border border-[var(--foreground)]/5">
                <h3 className="text-xl font-bold mb-6 text-[var(--foreground)]">Project Highlights</h3>
                
                <ul className="space-y-4">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center text-[var(--primary-color)]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-[var(--foreground)]/10">
                  <h4 className="font-medium mb-3">Technologies I frequently use:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Kubernetes', 'Docker', 'Go', 'TypeScript', 'React', 'Next.js', 'n8n', 'GitLab'].map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-[var(--primary-color)]/5 text-[var(--primary-color)]/90 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
