import React from "react";
import useSpotlight from "../hooks/useSpotlight";

export default function ProjectsSection() {
  const { ref: card1Ref, spotlightProps: card1Spotlight } = useSpotlight<HTMLDivElement>();
  const { ref: card2Ref, spotlightProps: card2Spotlight } = useSpotlight<HTMLDivElement>();
  const { ref: card3Ref, spotlightProps: card3Spotlight } = useSpotlight<HTMLDivElement>();

  const projects = [
    {
      title: "Scolx - Student Platform SaaS",
      description:
        "Modern SaaS platform for students built with Go backend and Next.js frontend, leveraging AI features and PostgreSQL",
      tags: ["Go", "Next.js", "AI", "PostgreSQL"],
      link: "https://scolx.com",
    },
    {
      title: "Production k0s Cluster",
      description:
        "Production-grade vanilla Kubernetes cluster deployed with k0s on custom-built Ryzen 5 7600X server with 64GB RAM, managing media, backups, and self-hosted services",
      tags: ["Kubernetes", "k0s", "FluxCD", "Ubuntu"],
      link: "https://docs.cherkaoui.ch/homelab",
    },
    {
      title: "Automated Life with GitLab",
      description:
        "Complete automation setup using self-hosted GitLab CI/CD and FluxCD for GitOps-driven infrastructure",
      tags: ["GitLab", "FluxCD", "Automation", "Self-hosted"],
      link: "https://gitlab.cherkaoui.ch/HadiCherkaoui",
    },
  ];

  const highlights = [
    "Built a self-hostable AI search engine alternative",
    "Designed and deployed a production-grade k0s cluster on bare metal",
    "Automated daily workflows using self-hosted GitLab and FluxCD",
  ];

  return (
    <section id="projects" className="pt-65 pb-24 px-4 relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-tech text-[var(--accent-emerald)] mb-4 block">
            My Work
          </span>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl mb-6">
            Featured{" "}
            <span className="emerald-accent">Projects</span>
          </h2>
          <div className="w-20 h-0.5 bg-[var(--accent-emerald)] mx-auto mb-6" />
          <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Here are some of my recent projects. I&apos;m passionate about
            building tools that solve real problems and contribute to the
            open-source community.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Project cards */}
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="space-y-8">
              {projects.map((project, index) => {
                const cardRefs = [card1Ref, card2Ref, card3Ref];
                const cardSpotlights = [
                  card1Spotlight,
                  card2Spotlight,
                  card3Spotlight,
                ];
                return (
                  <div
                    key={index}
                    ref={cardRefs[index]}
                    {...cardSpotlights[index]}
                    className="glass-card p-6 hover-lift"
                  >
                    <h3 className="text-xl font-medium mb-3 text-[var(--text-primary)]">
                      {project.title}
                    </h3>

                    <p className="text-[var(--text-secondary)] mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-[var(--accent-emerald-subtle)] text-[var(--accent-emerald)] rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[var(--accent-emerald)] hover:text-[var(--text-primary)] transition-colors font-medium"
                    >
                      <span>View Project</span>
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
                );
              })}
            </div>
          </div>

          {/* Project info */}
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="sticky top-24">
              <div className="mb-8">
                <h3 className="font-headline text-2xl md:text-3xl mb-6 text-[var(--text-primary)]">
                  What I Build
                </h3>

                <p className="text-lg leading-relaxed text-[var(--text-secondary)] mb-6">
                  I focus on creating practical solutions that leverage modern
                  technologies. My projects range from web applications to
                  infrastructure automation and knowledge sharing.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://github.com/HadiCherkaoui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                  <a
                    href="https://gitlab.cherkaoui.ch/HadiCherkaoui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card px-6 py-3 inline-flex items-center gap-2 hover-lift text-[var(--text-secondary)] hover:text-[var(--accent-emerald)]"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.955 13.587l-1.342-4.135-2.664-8.189c-.135-.423-.73-.423-.867 0L16.418 9.45H7.582L4.918 1.263c-.135-.423-.73-.423-.867 0L1.387 9.452.045 13.587c-.121.375.014.789.331 1.023L12 23.054l11.624-8.443c.318-.235.452-.648.331-1.024" />
                    </svg>
                    GitLab
                  </a>
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-headline text-xl mb-6 text-[var(--text-primary)]"
                >
                  Project Highlights
                </h3>

                <ul className="space-y-4">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--accent-emerald-subtle)] flex items-center justify-center text-[var(--accent-emerald)]">
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
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-[var(--text-secondary)]">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-[var(--border-subtle)]">
                  <h4 className="font-medium mb-3 text-[var(--text-primary)]">
                    Technologies I frequently use:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Kubernetes",
                      "Docker",
                      "Go",
                      "TypeScript",
                      "React",
                      "Next.js",
                      "GitLab",
                      "FluxCD",
                      "k0s",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[var(--accent-emerald-subtle)] text-[var(--accent-emerald)] rounded-full text-xs font-medium"
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
