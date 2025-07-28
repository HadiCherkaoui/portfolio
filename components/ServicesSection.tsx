import React from 'react';

export default function ServicesSection() {
  const services = [
    {
      title: 'PC Building & Tech Support',
      description: 'Custom PC builds, hardware troubleshooting, and technical advice for all your computing needs',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      features: ['Custom PC builds', 'Hardware diagnostics', 'Performance optimization', 'Technical consultation'],
      link: 'https://cherkaoui.ch'
    },
    {
      title: 'Server Setup & Management',
      description: 'Professional server deployment, configuration, and ongoing management for businesses and individuals',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      features: ['Linux server setup', 'Security hardening', 'Backup solutions', 'Monitoring & maintenance'],
      link: 'mailto:contact@hide.cherkaoui.ch'
    },
    {
      title: 'Cluster & Homelab Solutions',
      description: 'Design and implement Kubernetes clusters, homelabs, and self-hosted infrastructure solutions',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      features: ['Kubernetes clusters', 'Proxmox virtualization', 'Network configuration', 'Self-hosted services'],
      link: 'mailto:contact@hide.cherkaoui.ch'
    },
    {
      title: 'Game Server Hosting',
      description: 'Custom game server setup and hosting for communities, with full management and support',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: ['Minecraft servers', 'Game mod support', 'Performance optimization', '24/7 uptime monitoring'],
      link: 'mailto:contact@hide.cherkaoui.ch'
    },
    {
      title: 'AI Workflow Automation',
      description: 'Create intelligent automation workflows using n8n and AI to streamline your business processes',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      features: ['n8n workflow design', 'AI integration', 'Process automation', 'Custom integrations'],
      link: 'mailto:contact@hide.cherkaoui.ch'
    },
    {
      title: 'Web & App Development',
      description: 'Full-stack development services for modern web applications and mobile apps',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      features: ['React/Next.js apps', 'Go backends', 'Database design', 'API development'],
      link: 'mailto:contact@hide.cherkaoui.ch'
    }
  ];

  return (
    <section id="services" className="py-24 px-4 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-[var(--primary-color)]/10 text-[var(--primary-color)] rounded-full mb-4">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What I <span className="text-[var(--primary-color)]">Offer</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-[var(--foreground)]/80 max-w-3xl mx-auto">
            From PC building to enterprise infrastructure, I provide comprehensive technical services to help individuals and businesses with their technology needs.
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-6 bg-[var(--card-bg)] rounded-xl shadow-lg hover-lift group transition-all duration-300 border border-[var(--foreground)]/5 relative overflow-hidden" 
              data-aos="fade-up" 
              data-aos-delay={100 * (index + 1)}
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]"></div>
              
              {/* Icon */}
              <div className="mb-4 text-[var(--primary-color)]">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-[var(--foreground)]">
                {service.title}
              </h3>
              
              <p className="text-[var(--foreground)]/70 mb-4">
                {service.description}
              </p>
              
              {/* Features list */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-[var(--foreground)]/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-color)] flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a 
                href={service.link} 
                target={service.link.startsWith('mailto:') ? '_self' : '_blank'}
                rel={service.link.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                className="inline-flex items-center gap-2 text-[var(--primary-color)] hover:text-[var(--primary-color)]/80 transition-colors font-medium"
              >
                <span>{service.link.startsWith('mailto:') ? 'Get in Touch' : 'Learn More'}</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
        
        {/* Contact CTA */}
        <div className="text-center bg-[var(--card-bg)] p-8 rounded-xl shadow-lg border border-[var(--foreground)]/5">
          <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)]">
            Need Something Custom?
          </h3>
          <p className="text-[var(--foreground)]/70 mb-6 max-w-2xl mx-auto">
            Don&apos;t see exactly what you&apos;re looking for? I&apos;m always open to discussing custom projects and unique technical challenges. 
            Reach out through my forum or email to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary-color)] text-white rounded-lg hover:bg-[var(--primary-color)]/90 transition-colors hover-lift"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-2M3 4h6l4 4v8a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
              </svg>
              Contact Forum
            </a>
            <a 
              href="mailto:contact@hide.cherkaoui.ch" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--card-bg)] text-[var(--foreground)] border border-[var(--primary-color)] rounded-lg hover:bg-[var(--primary-color)]/10 transition-colors hover-lift"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
