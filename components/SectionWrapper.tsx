import React, { useEffect, useRef } from 'react';

type SectionWrapperProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

export default function SectionWrapper({
  children,
  id,
  className = '',
}: SectionWrapperProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;
    
    // Check if IntersectionObserver is available
    if (!('IntersectionObserver' in window)) {
      // For browsers that don't support IntersectionObserver, make the section visible
      if (sectionRef.current) {
        sectionRef.current.classList.add('is-visible');
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Once the animation is done, we can unobserve the element
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`fade-in-section ${className}`}
    >
      {children}
    </section>
  );
}
