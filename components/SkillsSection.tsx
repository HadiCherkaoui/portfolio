import React from "react";
import useSpotlight from "../hooks/useSpotlight";

export default function SkillsSection() {
  const { ref: card1Ref, spotlightProps: card1Spotlight } = useSpotlight<HTMLDivElement>();
  const { ref: card2Ref, spotlightProps: card2Spotlight } = useSpotlight<HTMLDivElement>();
  const { ref: card3Ref, spotlightProps: card3Spotlight } = useSpotlight<HTMLDivElement>();
  const { ref: card4Ref, spotlightProps: card4Spotlight } = useSpotlight<HTMLDivElement>();

  const skills = [
    { name: "Kubernetes & Docker", level: 100 },
    { name: "Linux & Shell Scripting", level: 100 },
    { name: "Cloud Platforms (AWS, Azure)", level: 90 },
    { name: "Backend Developing", level: 90 },
    { name: "Web Development", level: 75 },
    { name: "Ethical Hacking", level: 50 },
  ];

  const tags = [
    "Kubernetes", "Docker", "Linux", "AWS", "Azure", "Terraform", "FluxCD",
    "PowerShell", "Python", "JavaScript", "TypeScript", "Go", "React", "Next.js",
    "CI/CD", "Git", "k0s", "Networking", "Ubuntu"
  ];

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-tech text-[var(--accent-emerald)] mb-4 block">
            My Expertise
          </span>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl mb-6">
            Skills &{" "}
            <span className="emerald-accent">Technologies</span>
          </h2>
          <div className="w-20 h-0.5 bg-[var(--accent-emerald)] mx-auto" />
        </div>

        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Skills grid */}
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="grid grid-cols-2 gap-6">
              {/* Open Source */}
              <div
                ref={card1Ref}
                {...card1Spotlight}
                className="glass-card p-6 text-center hover-lift"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--accent-emerald-subtle)] flex items-center justify-center text-[var(--accent-emerald)] icon-rotate"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path d="M6 3v12" />
                    <path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    <path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    <path d="M15 6a9 9 0 0 0-9 9" />
                    <path d="M18 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                    <path d="M9 6a9 9 0 0 1 9 9" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 text-[var(--accent-emerald)]">
                  Open Source
                </h3>
                <p className="text-[var(--text-muted)]">Active Contributor</p>
              </div>

              {/* PowerShell & Linux */}
              <div
                ref={card2Ref}
                {...card2Spotlight}
                className="glass-card p-6 text-center hover-lift"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--accent-emerald-subtle)] flex items-center justify-center text-[var(--accent-emerald)] icon-rotate"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <polyline points="4 17 10 11 4 5" />
                    <line x1="12" y1="19" x2="20" y2="19" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 text-[var(--accent-emerald)]">
                  Shell & Linux
                </h3>
                <p className="text-[var(--text-muted)]">Automation & Scripting</p>
              </div>

              {/* Security */}
              <div
                ref={card3Ref}
                {...card3Spotlight}
                className="glass-card p-6 text-center hover-lift"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--accent-emerald-subtle)] flex items-center justify-center text-[var(--accent-emerald)] icon-rotate"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 text-[var(--accent-emerald)]">
                  Security
                </h3>
                <p className="text-[var(--text-muted)]">System & Network Security</p>
              </div>

              {/* More Skills */}
              <div
                ref={card4Ref}
                {...card4Spotlight}
                className="glass-card p-6 text-center hover-lift relative group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--accent-emerald-subtle)] flex items-center justify-center text-[var(--accent-emerald)] icon-rotate"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 text-[var(--accent-emerald)]">
                  More Skills
                </h3>
                <p className="text-[var(--text-muted)]">Click to view full skillset</p>
                <a
                  href="https://docs.cherkaoui.ch/skills"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-[var(--accent-emerald)] rounded-2xl transition-opacity duration-500"
                  style={{ transitionTimingFunction: "var(--ease-signature)" }}
                >
                  <span className="text-[var(--bg-primary)] font-medium flex items-center"
                  >
                    View All
                    <svg
                      className="w-5 h-5 ml-1"
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
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="md:w-1/2 order-1 md:order-2">
            <h3 className="font-headline text-2xl md:text-3xl mb-6 text-[var(--text-primary)]">
              Technical Proficiency
            </h3>

            <p className="text-lg leading-relaxed text-[var(--text-secondary)] mb-8">
              Passionate about technology, from PC building to infrastructure
              automation. I love working with Linux, containers, and modern
              DevOps tools while actively contributing to open source projects.
            </p>

            {/* Skill bars */}
            <div className="space-y-5 mb-8">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-[var(--text-primary)]">
                      {skill.name}
                    </span>
                    <span className="text-[var(--accent-emerald)]">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="tag cursor-default">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
