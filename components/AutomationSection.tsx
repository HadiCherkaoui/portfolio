import React from "react";
import useSpotlight from "../hooks/useSpotlight";

export default function AutomationSection() {
  const { ref: gitlabRef, spotlightProps: gitlabSpotlight } = useSpotlight<HTMLDivElement>();
  const { ref: fluxRef, spotlightProps: fluxSpotlight } = useSpotlight<HTMLDivElement>();

  const automationExamples = [
    "Automated home media server management and content organization",
    "Smart home integration with custom sensors and notifications",
    "Automatic checking of new versions of deployed services and updating them",
    "Development environment provisioning and configuration",
    "Monitoring and alerting for all self-hosted services",
    "Automated security updates and system maintenance",
  ];

  return (
    <section id="automation" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-tech text-[var(--accent-emerald)] mb-4 block">
            Automation & DevOps
          </span>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl mb-6">
            Automating{" "}
            <span className="emerald-accent">Everything</span>
          </h2>
          <div className="w-20 h-0.5 bg-[var(--accent-emerald)] mx-auto mb-6" />
          <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
            I&apos;ve built a complete self-hosted automation ecosystem using
            GitLab and FluxCD to streamline my entire digital life. From
            development workflows to infrastructure management, everything runs
            automatically.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Automation tools */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="space-y-8">
              {/* Self-Hosted GitLab */}
              <div
                ref={gitlabRef}
                {...gitlabSpotlight}
                className="glass-card p-6 hover-lift"
              >
                <div className="flex items-start gap-4">
                  <div className="text-[var(--accent-emerald)] flex-shrink-0">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.955 13.587l-1.342-4.135-2.664-8.189c-.135-.423-.73-.423-.867 0L16.418 9.45H7.582L4.918 1.263c-.135-.423-.73-.423-.867 0L1.387 9.452.045 13.587c-.121.375.014.789.331 1.023L12 23.054l11.624-8.443c.318-.235.452-.648.331-1.024" />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-medium mb-3 text-[var(--text-primary)]">
                      Self-Hosted GitLab
                    </h3>

                    <p className="text-[var(--text-secondary)] mb-4">
                      Complete DevOps platform with CI/CD pipelines, container
                      registry, and project management
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {[
                        "Private repositories",
                        "CI/CD automation",
                        "Container registry",
                        "Issue tracking",
                      ].map((item) => (
                        <span key={item} className="tag">{item}</span>
                      ))}
                    </div>

                    <a
                      href="https://gitlab.cherkaoui.ch/HadiCherkaoui"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[var(--accent-emerald)] hover:text-[var(--text-primary)] transition-colors font-medium"
                    >
                      <span>Explore</span>
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
              </div>

              {/* FluxCD GitOps */}
              <div
                ref={fluxRef}
                {...fluxSpotlight}
                className="glass-card p-6 hover-lift"
              >
                <div className="flex items-start gap-4">
                  <div className="text-[var(--accent-emerald)] flex-shrink-0">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-medium mb-3 text-[var(--text-primary)]">
                      FluxCD GitOps
                    </h3>

                    <p className="text-[var(--text-secondary)] mb-4">
                      GitOps-driven infrastructure with FluxCD managing
                      Kubernetes and application deployments
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {["FluxCD", "Kubernetes manifests", "GitOps workflows"].map(
                        (item) => (
                          <span key={item} className="tag">{item}</span>
                        )
                      )}
                    </div>

                    <a
                      href="https://gitlab.cherkaoui.ch/HadiCherkaoui/homelab-k8s-fluxcd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[var(--accent-emerald)] hover:text-[var(--text-primary)] transition-colors font-medium"
                    >
                      <span>Explore</span>
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
              </div>
            </div>
          </div>

          {/* Automation examples */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="sticky top-24">
              <h3 className="font-headline text-2xl md:text-3xl mb-6 text-[var(--text-primary)]">
                What Gets Automated
              </h3>

              <p className="text-lg leading-relaxed text-[var(--text-secondary)] mb-8">
                My automation setup handles everything from code deployment to
                smart home management. Here&apos;s what runs automatically in my
                digital ecosystem:
              </p>

              <ul className="space-y-4 mb-8">
                {automationExamples.map((example, index) => (
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
                    <span className="text-[var(--text-secondary)]">{example}</span>
                  </li>
                ))}
              </ul>

              <div className="glass-card p-6">
                <h4 className="font-medium mb-4 text-[var(--text-primary)]">
                  The Result
                </h4>
                <p className="text-[var(--text-secondary)] mb-4">
                  A fully automated digital life where repetitive tasks are
                  eliminated, systems self-maintain, and I can focus on what
                  matters most - building and creating.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["GitLab CI/CD", "Kubernetes", "k0s", "FluxCD"].map(
                    (tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
