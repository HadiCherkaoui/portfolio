import React from 'react';

export default function HobbiesSection() {
  const hobbies = [
    {
      title: 'Gaming',
      description: 'Competitive gaming',
      icon: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>,
      color: 'primary'
    },
    {
      title: 'Coding Projects',
      description: 'Building personal automation tools',
      icon: <><path d="M16 18l6-6-6-6"></path><path d="M8 6l-6 6 6 6"></path><path d="M12 2l4 20"></path></>,
      color: 'secondary'
    },
    {
      title: 'Tech Exploration',
      description: 'Learning new technologies',
      icon: <><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></>,
      color: 'primary'
    },
    {
      title: 'Home Lab',
      description: 'Managing & improving efficiency',
      icon: <><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></>,
      color: 'secondary'
    },
    {
      title: 'PC Building',
      description: 'Hardware & System Optimization',
      icon: <><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></>,
      color: 'primary'
    },
    {
      title: 'Open Source',
      description: 'Contributing to projects',
      icon: <><path d="M6 3v12"></path><path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path><path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path><path d="M15 6a9 9 0 0 0-9 9"></path><path d="M18 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path><path d="M9 6a9 9 0 0 1 9 9"></path></>,
      color: 'secondary'
    }
  ];

  return (
    <section id="hobbies" className="py-24 px-4 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 top-1/3 w-60 h-60 rounded-full bg-[var(--accent-color)]/5"></div>
        <div className="absolute -right-20 bottom-1/3 w-60 h-60 rounded-full bg-[var(--primary-color)]/5"></div>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-[var(--accent-color)]/10 text-[var(--accent-color)] rounded-full mb-4">
            Personal Interests
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hobbies & <span className="text-[var(--accent-color)]">Interests</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <div 
              key={index}
              className="p-6 bg-[var(--card-bg)] rounded-xl shadow-lg hover-lift group transition-all duration-300 text-center" 
              data-aos="zoom-in" 
              data-aos-delay={100 * (index + 1)}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--${hobby.color}-color)]/10 flex items-center justify-center text-[var(--${hobby.color}-color)] group-hover:bg-[var(--${hobby.color}-color)]/20 transition-colors duration-300`}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  {hobby.icon}
                </svg>
              </div>
              <h3 className={`text-xl font-bold mb-2 text-[var(--${hobby.color}-color)]`}>{hobby.title}</h3>
              <p className="text-[var(--foreground)]/70">{hobby.description}</p>
            </div>
          ))}
        </div>
        
        {/* Additional info */}
        <div className="mt-16 text-center">
          <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
            When I'm not coding or working with technology, I enjoy these activities that help me maintain a balanced lifestyle and bring fresh perspectives to my technical work.
          </p>
          <a 
            href="https://docs.cherkaoui.ch/skills/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-5 py-2.5 mt-6 bg-[var(--accent-color)]/10 text-[var(--accent-color)] rounded-lg hover:bg-[var(--accent-color)]/20 border border-[var(--accent-color)]/20 transition-colors hover-lift"
          >
            <span>Read more about my hobbies</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
