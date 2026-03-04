import React from "react";
import useSpotlight from "../hooks/useSpotlight";

export default function HobbiesSection() {
  const hobbyCards = [
    { title: "Gaming", description: "Competitive gaming", icon: "gamepad" },
    { title: "Coding Projects", description: "Building personal automation tools", icon: "code" },
    { title: "Tech Exploration", description: "Learning new technologies", icon: "compass" },
    { title: "Home Lab", description: "Managing & improving efficiency", icon: "server" },
    { title: "PC Building", description: "Hardware & System Optimization", icon: "cpu" },
    { title: "Open Source", description: "Contributing to projects", icon: "git-branch" },
    { title: "Ethical Hacking", description: "Learning cybersecurity through TryHackMe", icon: "shield" },
    { title: "AI/ML Research", description: "Exploring machine learning and AI applications", icon: "brain" },
  ];

  const getIcon = (iconName: string) => {
    const icons: Record<string, JSX.Element> = {
      gamepad: (
        <>
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <path d="M6 12h4" />
          <path d="M8 10v4" />
          <circle cx="16" cy="11" r="1" />
          <circle cx="18" cy="13" r="1" />
        </>
      ),
      code: (
        <>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </>
      ),
      compass: (
        <>
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </>
      ),
      server: (
        <>
          <rect x="2" y="2" width="20" height="8" rx="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </>
      ),
      cpu: (
        <>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" />
          <line x1="20" y1="14" x2="23" y2="14" />
          <line x1="1" y1="9" x2="4" y2="9" />
          <line x1="1" y1="14" x2="4" y2="14" />
        </>
      ),
      "git-branch": (
        <>
          <line x1="6" y1="3" x2="6" y1="15" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M18 9a9 9 0 0 1-9 9" />
        </>
      ),
      shield: (
        <>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </>
      ),
      brain: (
        <>
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
        </>
      ),
    };
    return icons[iconName] || icons.code;
  };

  return (
    <section id="hobbies" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-tech text-[var(--accent-emerald)] mb-4 block">
            Personal Interests
          </span>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl mb-6">
            Hobbies &{" "}
            <span className="emerald-accent">Interests</span>
          </h2>
          <div className="w-20 h-0.5 bg-[var(--accent-emerald)] mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {hobbyCards.map((hobby, index) => (
            <HobbyCard
              key={hobby.title}
              title={hobby.title}
              description={hobby.description}
              icon={getIcon(hobby.icon)}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            When I&apos;m not coding or working with technology, I enjoy these
            activities that help me maintain a balanced lifestyle and bring
            fresh perspectives to my technical work.
          </p>
          <a
            href="https://docs.cherkaoui.ch/skills/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card px-6 py-3 mt-6 inline-flex items-center gap-2 text-[var(--accent-emerald)] hover-lift"
          >
            <span>Read more about my hobbies</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function HobbyCard({
  title,
  description,
  icon,
  delay,
}: {
  title: string;
  description: string;
  icon: JSX.Element;
  delay: number;
}) {
  const { ref, spotlightProps } = useSpotlight<HTMLDivElement>();

  return (
    <div
      ref={ref}
      {...spotlightProps}
      className="glass-card p-6 text-center hover-lift"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--accent-emerald-subtle)] flex items-center justify-center text-[var(--accent-emerald)] icon-rotate">
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
        >
          {icon}
        </svg>
      </div>
      <h3 className="text-lg font-medium mb-2 text-[var(--accent-emerald)]">
        {title}
      </h3>
      <p className="text-[var(--text-muted)] text-sm">{description}</p>
    </div>
  );
}
