import React from "react";
import useSpotlight from "../hooks/useSpotlight";

export default function HomelabSection() {
  const { ref: serverRef, spotlightProps: serverSpotlight } = useSpotlight<HTMLDivElement>();

  return (
    <section id="homelab" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="font-tech text-[var(--accent-emerald)] mb-4 block">
            Infrastructure
          </span>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl mb-6">
            Homelab{" "}
            <span className="emerald-accent">Setup</span>
          </h2>
          <div className="w-20 h-0.5 bg-[var(--accent-emerald)] mx-auto mb-6" />
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto mb-6">
            A self-built bare-metal infrastructure showcasing enterprise-grade
            Kubernetes deployment at home
          </p>
          <a
            href="https://docs.cherkaoui.ch/homelab/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            View Documentation
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Server Specs */}
          <div
            ref={serverRef}
            {...serverSpotlight}
            className="glass-card p-8 hover-lift"
          >
            <h3 className="font-headline text-2xl mb-6 text-[var(--accent-emerald)]">
              Server Specifications
            </h3>

            <div className="space-y-6">
              {/* CPU */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--accent-emerald-subtle)] flex items-center justify-center text-[var(--accent-emerald)]"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <rect x="9" y="9" width="6" height="6" />
                    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
                  </svg>
                </div>
                <div>
                  <p className="font-tech text-[var(--text-muted)]">Processor</p>
                  <p className="text-lg font-medium text-[var(--text-primary)]">
                    AMD Ryzen 5 7600X
                  </p>
                </div>
              </div>

              {/* RAM */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--accent-emerald-subtle)] flex items-center justify-center text-[var(--accent-emerald)]"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M6 8v8M10 8v8M14 8v8M18 8v8" />
                  </svg>
                </div>
                <div>
                  <p className="font-tech text-[var(--text-muted)]">Memory</p>
                  <p className="text-lg font-medium text-[var(--text-primary)]">
                    64GB DDR5 RAM
                  </p>
                </div>
              </div>

              {/* OS */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--accent-emerald-subtle)] flex items-center justify-center text-[var(--accent-emerald)]"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <p className="font-tech text-[var(--text-muted)]">Operating System</p>
                  <p className="text-lg font-medium text-[var(--text-primary)]">
                    Ubuntu Server (Bare Metal)
                  </p>
                </div>
              </div>

              {/* Kubernetes */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--accent-emerald-subtle)] flex items-center justify-center text-[var(--accent-emerald)]"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10.5 1.5a1.5 1.5 0 013 0v1.5a1.5 1.5 0 01-3 0V1.5zm-5 5a1.5 1.5 0 012.12 0l1.06 1.06a1.5 1.5 0 01-2.12 2.12L5.38 8.62a1.5 1.5 0 010-2.12zm12.72 0a1.5 1.5 0 010 2.12l-1.06 1.06a1.5 1.5 0 01-2.12-2.12l1.06-1.06a1.5 1.5 0 012.12 0zM12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm-9 4.5a1.5 1.5 0 011.5-1.5h1.5a1.5 1.5 0 010 3H4.5A1.5 1.5 0 013 12zm16.5 0a1.5 1.5 0 01-1.5 1.5h-1.5a1.5 1.5 0 010-3h1.5a1.5 1.5 0 011.5 1.5zM8.62 17.62a1.5 1.5 0 012.12 2.12l-1.06 1.06a1.5 1.5 0 01-2.12-2.12l1.06-1.06zm6.76 0l1.06 1.06a1.5 1.5 0 01-2.12 2.12l-1.06-1.06a1.5 1.5 0 012.12-2.12zM12 19.5a1.5 1.5 0 011.5 1.5v1.5a1.5 1.5 0 01-3 0v-1.5a1.5 1.5 0 011.5-1.5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-tech text-[var(--text-muted)]">Orchestration</p>
                  <p className="text-lg font-medium text-[var(--text-primary)]">
                    k0s (Vanilla Kubernetes)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Evolution Timeline */}
          <div className="glass-card p-8">
            <h3 className="font-headline text-2xl mb-6 text-[var(--accent-emerald)]">
              Evolution Timeline
            </h3>

            <div className="space-y-8">
              <div className="timeline-item">
                <p className="font-tech text-[var(--text-muted)] mb-1">Phase 1</p>
                <h4 className="text-lg font-medium text-[var(--text-primary)]">
                  TrueNAS
                </h4>
                <p className="text-[var(--text-secondary)]">
                  Started with TrueNAS for storage-focused homelab
                </p>
              </div>

              <div className="timeline-item">
                <p className="font-tech text-[var(--text-muted)] mb-1">Phase 2</p>
                <h4 className="text-lg font-medium text-[var(--text-primary)]">
                  Proxmox + kubeadm
                </h4>
                <p className="text-[var(--text-secondary)]">
                  Moved to Proxmox virtualization with kubeadm Kubernetes
                </p>
              </div>

              <div className="timeline-item">
                <p className="font-tech text-[var(--text-muted)] mb-1">Phase 3</p>
                <h4 className="text-lg font-medium text-[var(--text-primary)]">
                  Ubuntu + k0s
                </h4>
                <p className="text-[var(--text-secondary)]">
                  Bare-metal Ubuntu Server with k0s for simplified vanilla
                  Kubernetes deployment
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[var(--border-subtle)]">
              <h4 className="font-medium mb-3 text-[var(--text-primary)]">
                Key Features
              </h4>
              <ul className="space-y-2 text-[var(--text-secondary)]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-emerald)]" />
                  Self-built server hardware
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-emerald)]" />
                  Bare-metal deployment (no virtualization overhead)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-emerald)]" />
                  Vanilla Kubernetes via k0s
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-emerald)]" />
                  Media, backups, and self-hosted services
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
