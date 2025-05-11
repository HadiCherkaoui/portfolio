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
          <a href="https://github.com/hadicherkaoui" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)]/70 hover:text-[var(--primary-color)] transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="https://blog.hide.cherkaoui.ch" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)]/70 hover:text-[var(--primary-color)] transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.199 24c-1.119 0-2.3-.21-3.531-.63-1.232-.42-2.4-1.009-3.51-1.77-1.108-.76-2.039-1.624-2.789-2.591-.75-.967-1.291-1.995-1.621-3.084-.33-1.089-.495-2.224-.495-3.405 0-1.183.165-2.319.495-3.405.33-1.087.87-2.115 1.621-3.084.75-.967 1.68-1.832 2.789-2.591 1.109-.761 2.279-1.35 3.51-1.77 1.23-.42 2.41-.63 3.531-.63 1.12 0 2.301.21 3.54.63 1.23.42 2.4 1.009 3.51 1.77 1.109.76 2.039 1.624 2.79 2.591.749.967 1.291 1.995 1.62 3.084.33 1.089.495 2.224.495 3.405 0 1.183-.165 2.319-.495 3.405-.33 1.087-.87 2.115-1.62 3.084-.75.967-1.68 1.832-2.79 2.591-1.11.761-2.28 1.35-3.51 1.77-1.24.42-2.42.63-3.54.63zm0-23c-1.029 0-2.12.19-3.24.57-1.12.38-2.19.909-3.21 1.59-1.02.68-1.9 1.471-2.61 2.37-.71.9-1.23 1.851-1.53 2.851-.3 1-.45 2.04-.45 3.119 0 1.08.15 2.12.45 3.12.3 1 .82 1.95 1.53 2.85.71.9 1.59 1.69 2.61 2.37 1.02.68 2.09 1.21 3.21 1.59 1.12.38 2.21.57 3.24.57 1.03 0 2.12-.19 3.24-.57 1.12-.38 2.19-.91 3.21-1.59 1.02-.68 1.9-1.47 2.61-2.37.71-.9 1.23-1.85 1.53-2.85.3-1 .45-2.04.45-3.12 0-1.08-.15-2.12-.45-3.12-.3-1-.82-1.95-1.53-2.85-.71-.9-1.59-1.69-2.61-2.37-1.02-.68-2.09-1.21-3.21-1.59-1.12-.38-2.21-.57-3.24-.57z"/><path d="M9.589 15.947c0-.297.058-.55.175-.757.117-.207.28-.378.487-.512.208-.135.446-.236.713-.303.267-.067.549-.101.846-.101.267 0 .533.033.8.101.267.067.505.168.713.303.208.134.375.305.5.512.125.207.188.46.188.757 0 .29-.063.537-.188.744-.125.207-.292.378-.5.512-.208.135-.446.232-.713.29-.267.06-.533.088-.8.088-.297 0-.579-.029-.846-.088-.267-.058-.505-.155-.713-.29-.208-.134-.37-.305-.487-.512-.117-.207-.175-.454-.175-.744zm7.822-9.947h-10.822v1h10.822v-1zm0 2h-10.822v1h10.822v-1zm0 2h-10.822v1h10.822v-1zm-10.822 4h4.822v8h-4.822v-8z"/></svg>
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
