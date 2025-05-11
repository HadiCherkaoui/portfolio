'use client';
import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import DailyDriverSection from '../components/DailyDriverSection';
import SkillsSection from '../components/SkillsSection';
import HobbiesSection from '../components/HobbiesSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import SectionWrapper from '../components/SectionWrapper';

export default function Home() {
  // Initialize section transitions on client-side
  useEffect(() => {
    // Add a small delay to ensure DOM is fully loaded
    const timer = setTimeout(() => {
      // Add animation-delay classes to stagger the animations
      const sections = document.querySelectorAll('.fade-in-section');
      sections.forEach((section, index) => {
        (section as HTMLElement).style.transitionDelay = `${index * 0.1}s`;
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen relative">
      {/* Decorative elements */}
      <div className="fixed top-20 right-10 w-72 h-72 bg-[var(--primary-color)] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="fixed top-40 left-20 w-72 h-72 bg-[var(--secondary-color)] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="fixed bottom-20 right-20 w-72 h-72 bg-[var(--accent-color)] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      
      {/* Hero section doesn't use the wrapper as it should be visible immediately */}
      <HeroSection />
      
      {/* Content sections with smooth transitions */}
      <SectionWrapper>
        <AboutSection />
      </SectionWrapper>
      
      <SectionWrapper>
        <DailyDriverSection />
      </SectionWrapper>
      
      <SectionWrapper>
        <SkillsSection />
      </SectionWrapper>
      
      <SectionWrapper>
        <HobbiesSection />
      </SectionWrapper>
      
      <SectionWrapper>
        <ProjectsSection />
      </SectionWrapper>
      
      <SectionWrapper>
        <ContactSection />
      </SectionWrapper>
    </main>
  );
}