"use client";

import React from "react";
import SectionWrapper from "./SectionWrapper";
import useSpotlight from "../hooks/useSpotlight";

export default function ScolxSection() {
  const { ref, spotlightProps } = useSpotlight<HTMLDivElement>();

  return (
    <SectionWrapper>
      <section id="scolx" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-4xl relative z-10">

          {/* Claim header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-[var(--accent-amber)]" />
              <span className="font-tech text-[var(--accent-amber)] text-xs tracking-widest uppercase">
                Builds
              </span>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl tracking-tight">
              I build full-stack{" "}
              <span className="amber-accent">in Rust.</span>
            </h2>
          </div>

          {/* Proof card */}
          <div
            ref={ref}
            {...spotlightProps}
            className="glass-card p-8 md:p-10"
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              {/* Description */}
              <div className="md:w-3/5">
                <h3 className="text-2xl font-semibold mb-4 text-[var(--text-primary)]">
                  Scolx
                </h3>
                <div className="space-y-4 text-[var(--text-secondary)] text-lg leading-relaxed">
                  <p>
                    Scolx is a SaaS platform built entirely in Rust. Axum
                    handles HTTP routing and authentication on the server;{" "}
                    <span className="text-[var(--accent-amber)]">Leptos</span>{" "}
                    compiles to WebAssembly for the UI — one language from
                    server to browser, no polyglot hot path.
                  </p>
                  <p>
                    It runs on a k0s cluster I built and operate myself.
                    PostgreSQL for storage. The deployment pipeline is fully
                    automated through FluxCD and a self-hosted GitLab instance.
                  </p>
                </div>
                <a
                  href="https://scolx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-[var(--accent-amber)] hover:text-[var(--text-primary)] transition-colors font-medium"
                >
                  <span>scolx.com</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              {/* Stack list */}
              <div className="md:w-2/5">
                <h4 className="font-tech text-xs tracking-widest uppercase text-[var(--text-muted)] mb-4">
                  Stack
                </h4>
                <div className="space-y-0">
                  {[
                    { name: "Rust", desc: "Primary language" },
                    { name: "Axum", desc: "HTTP layer" },
                    { name: "Leptos", desc: "UI / WebAssembly" },
                    { name: "PostgreSQL", desc: "Storage" },
                    { name: "k0s", desc: "Production cluster" },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between py-3 border-b border-[var(--border-subtle)] last:border-0"
                    >
                      <span className="font-medium text-[var(--accent-amber)]">
                        {item.name}
                      </span>
                      <span className="text-sm text-[var(--text-muted)]">
                        {item.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </SectionWrapper>
  );
}
