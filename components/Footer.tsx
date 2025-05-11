import React from 'react';

export default function Footer() {
  return (
    <footer className="py-10 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[var(--primary-color)]">Hadi Cherkaoui</h3>
            <p className="text-[var(--foreground)]/70 mb-4">
              Platform Developer Apprentice based in Switzerland, passionate about Kubernetes, automation, and open-source technologies.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/HadiCherkaoui" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--foreground)]/60 hover:text-[var(--primary-color)] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a 
                href="https://blog.cherkaoui.ch" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--foreground)]/60 hover:text-[var(--primary-color)] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.199 24c-1.119 0-2.3-.21-3.531-.63-1.232-.42-2.4-1.009-3.51-1.77-1.108-.76-2.039-1.624-2.789-2.591-.75-.967-1.291-1.995-1.621-3.084-.33-1.089-.495-2.224-.495-3.405 0-1.183.165-2.319.495-3.405.33-1.087.87-2.115 1.621-3.084.75-.967 1.68-1.832 2.789-2.591 1.109-.761 2.279-1.35 3.51-1.77 1.23-.42 2.41-.63 3.531-.63 1.12 0 2.301.21 3.54.63 1.23.42 2.4 1.009 3.51 1.77 1.109.76 2.039 1.624 2.79 2.591.749.967 1.291 1.995 1.62 3.084.33 1.089.495 2.224.495 3.405 0 1.183-.165 2.319-.495 3.405-.33 1.087-.87 2.115-1.62 3.084-.75.967-1.68 1.832-2.79 2.591-1.11.761-2.28 1.35-3.51 1.77-1.24.42-2.42.63-3.54.63zm0-23c-1.029 0-2.12.19-3.24.57-1.12.38-2.19.909-3.21 1.59-1.02.68-1.9 1.471-2.61 2.37-.71.9-1.23 1.851-1.53 2.851-.3 1-.45 2.04-.45 3.119 0 1.08.15 2.12.45 3.12.3 1 .82 1.95 1.53 2.85.71.9 1.59 1.69 2.61 2.37 1.02.68 2.09 1.21 3.21 1.59 1.12.38 2.21.57 3.24.57 1.03 0 2.12-.19 3.24-.57 1.12-.38 2.19-.91 3.21-1.59 1.02-.68 1.9-1.47 2.61-2.37.71-.9 1.23-1.85 1.53-2.85.3-1 .45-2.04.45-3.12 0-1.08-.15-2.12-.45-3.12-.3-1-.82-1.95-1.53-2.85-.71-.9-1.59-1.69-2.61-2.37-1.02-.68-2.09-1.21-3.21-1.59-1.12-.38-2.21-.57-3.24-.57z"/></svg>
              </a>
              <a 
                href="https://docs.cherkaoui.ch" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--foreground)]/60 hover:text-[var(--primary-color)] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[var(--primary-color)]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-[var(--foreground)]/70 hover:text-[var(--primary-color)] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-[var(--foreground)]/70 hover:text-[var(--primary-color)] transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-[var(--foreground)]/70 hover:text-[var(--primary-color)] transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-[var(--foreground)]/70 hover:text-[var(--primary-color)] transition-colors">Projects</a>
              </li>
              <li>
                <a href="#daily-driver" className="text-[var(--foreground)]/70 hover:text-[var(--primary-color)] transition-colors">Daily Driver</a>
              </li>
              <li>
                <a href="#hobbies" className="text-[var(--foreground)]/70 hover:text-[var(--primary-color)] transition-colors">Hobbies</a>
              </li>
              <li>
                <a href="#contact" className="text-[var(--foreground)]/70 hover:text-[var(--primary-color)] transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[var(--primary-color)]">Contact</h3>
            <p className="text-[var(--foreground)]/70 mb-4">
              Feel free to reach out if you have any questions or would like to work together on a project.
            </p>
            <a 
              href="mailto:contact@hide.cherkaoui.ch" 
              className="inline-flex items-center gap-2 text-[var(--foreground)]/70 hover:text-[var(--primary-color)] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
              </svg>
              contact@hide.cherkaoui.ch
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-[var(--foreground)]/10 text-center">
          <p className="text-[var(--foreground)]/60">
            &copy; {new Date().getFullYear()} Hadi Cherkaoui - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}