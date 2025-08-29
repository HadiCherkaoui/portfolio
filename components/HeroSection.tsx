'use client';

import React, { useEffect, useState } from 'react';

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);
  
  useEffect(() => {
    // Skills array for typing animation
    const skills = [
      'Kubernetes',
      'Linux Enthusiast',
      'Platform Developer',
      'Open Source Contributor',
      'Tech Explorer',
      'Docker Expert'
    ];
    const typingAnimation = () => {
      const currentSkill = skills[currentIndex];
      const shouldDelete = isDeleting;
      
      // Set typing speed based on action (typing or deleting)
      setTypingSpeed(isDeleting ? 50 : 100);
      
      if (!shouldDelete && displayText === currentSkill) {
        // Pause at the end of typing before starting to delete
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
      
      if (shouldDelete && displayText === '') {
        // Move to the next skill after deleting
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
        return;
      }
      
      // Update the displayed text
      const nextText = shouldDelete
        ? currentSkill.substring(0, displayText.length - 1)
        : currentSkill.substring(0, displayText.length + 1);
      
      setDisplayText(nextText);
    };
    
    const timer = setTimeout(typingAnimation, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, typingSpeed]);
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center py-20 px-4 relative overflow-hidden">
      {/* Particles background effect will be added with JavaScript */}
      <div id="particles-container" className="absolute inset-0 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.1),transparent_70%)] pointer-events-none"></div>
      
      {/* Hero content */}
      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <div className="mb-2">
          <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-[var(--primary-color)]/10 text-[var(--primary-color)] border border-[var(--primary-color)]/20 mb-4">
            Platform Developer Apprentice
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 glitch-text" data-text="Hadi Cherkaoui">
          Hadi Cherkaoui
        </h1>
        
        <div className="mb-8 h-12 flex justify-center items-center">
          <span className="text-2xl md:text-3xl text-[var(--secondary-color)] font-mono inline-flex">
            <span>{displayText}</span>
            <span className="border-r-2 border-[var(--secondary-color)] ml-1 animate-blink">&nbsp;</span>
          </span>
        </div>
        
        <p className="text-xl mb-10 text-[var(--foreground)]/80 max-w-2xl mx-auto leading-relaxed">
          Platform Developer apprentice based in Switzerland, passionate about technology and open source.
          Specializing in Kubernetes, automation, and cloud-native technologies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#about" 
            className="px-8 py-3 bg-[var(--primary-color)] text-white rounded-full font-medium 
                      border-2 border-transparent transition-all duration-300 hover-lift
                      hover:bg-[var(--primary-color)]/90 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]"
          >
            Discover More
          </a>
          <a 
            href="#projects" 
            className="px-8 py-3 bg-transparent text-[var(--primary-color)] rounded-full font-medium 
                      border-2 border-[var(--primary-color)] transition-all duration-300 hover-lift
                      hover:bg-[var(--primary-color)]/10 hover:shadow-[0_0_15px_rgba(37,99,235,0.3)]"
          >
            View Projects
          </a>
        </div>
        
        {/* Social links */}
        <div className="mt-12 flex justify-center space-x-6">
          <a href="https://github.com/HadiCherkaoui" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)]/70 hover:text-[var(--primary-color)] transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="https://gitlab.cherkaoui.ch/HadiCherkaoui" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)]/70 hover:text-[var(--primary-color)] transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.955 13.587l-1.342-4.135-2.664-8.189c-.135-.423-.73-.423-.867 0L16.418 9.45H7.582L4.918 1.263c-.135-.423-.73-.423-.867 0L1.387 9.452.045 13.587c-.121.375.014.789.331 1.023L12 23.054l11.624-8.443c.318-.235.452-.648.331-1.024"/></svg>
          </a>
          <a href="https://docs.cherkaoui.ch" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)]/70 hover:text-[var(--primary-color)] transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          </a>
          <a href="https://cherkaoui.ch" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)]/70 hover:text-[var(--primary-color)] transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-2M3 4h6l4 4v8a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" /></svg>
          </a>
          <a href="mailto:contact@hide.cherkaoui.ch" className="text-[var(--foreground)]/70 hover:text-[var(--primary-color)] transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-6 h-6 border-r-2 border-b-2 border-[var(--primary-color)] transform rotate-45 animate-bounce"></div>
      </div>
    </section>
  );
}
