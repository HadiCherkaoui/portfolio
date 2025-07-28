import React from 'react';

export default function AutomationSection() {
  const automationFeatures = [
    {
      title: 'Self-Hosted GitLab',
      description: 'Complete DevOps platform with CI/CD pipelines, container registry, and project management',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0L8.5 9.5h7L12 0zM1.5 9.5L12 24l-7-4.5L1.5 9.5zM22.5 9.5L19 19.5 12 24l10.5-14.5zM8.5 9.5L5 19.5 12 24 8.5 9.5zM15.5 9.5L19 19.5 12 24l3.5-14.5z"/>
        </svg>
      ),
      features: ['Private repositories', 'CI/CD automation', 'Container registry', 'Issue tracking'],
      link: 'https://gitlab.cherkaoui.ch/HadiCherkaoui'
    },
    {
      title: 'n8n Workflow Automation',
      description: 'Powerful workflow automation platform for connecting apps and automating repetitive tasks',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: ['Visual workflow editor', 'API integrations', 'Scheduled automation', 'Custom nodes'],
      link: 'https://gitlab.cherkaoui.ch/HadiCherkaoui'
    },
    {
      title: 'Infrastructure as Code',
      description: 'Automated infrastructure deployment and management using modern DevOps practices',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      features: ['Terraform/OpenTofu', 'Kubernetes manifests', 'Ansible playbooks', 'GitOps workflows'],
      link: 'https://gitlab.cherkaoui.ch/HadiCherkaoui/homelab-k8s'
    }
  ];

  const automationExamples = [
    'Automated home media server management and content organization',
    'Smart home integration with custom sensors and notifications',
    'Automatic checking of new versions of deployed services and updating them',
    'Development environment provisioning and configuration',
    'Monitoring and alerting for all self-hosted services',
    'Automated security updates and system maintenance'
  ];

  return (
    <section id="automation" className="py-24 px-4 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.1),transparent_70%)] pointer-events-none"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-[var(--primary-color)]/10 text-[var(--primary-color)] rounded-full mb-4">
            Automation & DevOps
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Automating <span className="text-[var(--primary-color)]">Everything</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-[var(--foreground)]/80 max-w-3xl mx-auto">
            I&apos;ve built a complete self-hosted automation ecosystem using GitLab and n8n to streamline my entire digital life. 
            From development workflows to smart home management, everything runs automatically.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Automation tools */}
          <div className="lg:w-1/2 order-2 lg:order-1" data-aos="fade-right">
            <div className="space-y-8">
              {automationFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-[var(--card-bg)] rounded-xl shadow-lg hover-lift group transition-all duration-300 border border-[var(--foreground)]/5 relative overflow-hidden" 
                  data-aos="fade-up" 
                  data-aos-delay={100 * (index + 1)}
                >
                  {/* Decorative gradient */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]"></div>
                  
                  <div className="flex items-start gap-4">
                    <div className="text-[var(--primary-color)] flex-shrink-0">
                      {feature.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-[var(--foreground)]">
                        {feature.title}
                      </h3>
                      
                      <p className="text-[var(--foreground)]/70 mb-4">
                        {feature.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {feature.features.map((item, itemIndex) => (
                          <span 
                            key={itemIndex} 
                            className="px-2 py-1 bg-[var(--primary-color)]/10 text-[var(--primary-color)] rounded-full text-xs font-medium"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                      
                      <a 
                        href={feature.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 text-[var(--primary-color)] hover:text-[var(--primary-color)]/80 transition-colors font-medium"
                      >
                        <span>Explore</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Automation examples */}
          <div className="lg:w-1/2 order-1 lg:order-2" data-aos="fade-left">
            <div className="sticky top-24">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--primary-color)]">
                  What Gets Automated
                </h3>
                
                <p className="text-lg leading-relaxed text-[var(--foreground)]/80 mb-8">
                  My automation setup handles everything from code deployment to smart home management. 
                  Here&apos;s what runs automatically in my digital ecosystem:
                </p>
                
                <ul className="space-y-4 mb-8">
                  {automationExamples.map((example, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center text-[var(--primary-color)]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      <span className="text-[var(--foreground)]/80">{example}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-[var(--card-bg)] p-6 rounded-xl shadow-lg border border-[var(--foreground)]/5">
                  <h4 className="font-bold mb-4 text-[var(--foreground)]">
                    🚀 The Result
                  </h4>
                  <p className="text-[var(--foreground)]/70 mb-4">
                    A fully automated digital life where repetitive tasks are eliminated, 
                    systems self-maintain, and I can focus on what matters most - building and creating.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {['GitLab CI/CD', 'n8n Workflows', 'Kubernetes', 'Proxmox', 'Ansible'].map((tech, index) => (
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
