"use client";

import SectionWrapper from "./SectionWrapper";
import useSpotlight from "../hooks/useSpotlight";

export default function AnvilSection() {
  const { ref, spotlightProps } = useSpotlight<HTMLDivElement>();

  return (
    <SectionWrapper id="anvil">
      <div className="py-24 px-4 relative">
        <div className="container mx-auto max-w-4xl relative z-10">

          {/* Claim header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-(--accent-amber)" />
              <span className="font-tech text-(--accent-amber) text-xs tracking-widest uppercase">
                Builds
              </span>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl tracking-tight">
              I build Kubernetes-native{" "}
              <span className="amber-accent">in Rust.</span>
            </h2>
          </div>

          {/* Proof card */}
          <div
            ref={ref}
            onMouseMove={spotlightProps.onMouseMove}
            className="glass-card spotlight-card p-8 md:p-10"
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              {/* Description */}
              <div className="md:w-3/5">
                <h3 className="text-2xl font-semibold mb-4 text-(--text-primary)">
                  Anvil
                </h3>
                <div className="space-y-4 text-(--text-secondary) text-lg leading-relaxed">
                  <p>
                    Existing panels (Crafty, Pterodactyl) treat Kubernetes as
                    an afterthought — they assume Docker on a single host.
                    Anvil flips it: the cluster is the runtime, and a
                    Minecraft server is just a shape of{" "}
                    <span className="text-(--accent-amber)">StatefulSet + PVC + Service</span>.
                    Scale-to-zero is <code className="font-tech text-(--accent-amber)">replicas: 0</code>;
                    per-server PVCs are free.
                  </p>
                  <p>
                    One Axum binary drives it via{" "}
                    <span className="text-(--accent-amber)">kube-rs</span>{" "}
                    typed APIs — no CRDs, no controller, no reconciliation
                    loop. The Next.js frontend ships as a static export
                    embedded with <span className="text-(--accent-amber)">rust-embed</span>:
                    one distroless image, ~30 MB, no Node runtime in
                    production. Runs on the k0s cluster I operate myself.
                    AGPL, v1.0.0.
                  </p>
                </div>
                <a
                  href="https://gitlab.cherkaoui.ch/HadiCherkaoui/anvil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-(--accent-amber) hover:text-[var(--text-primary)] transition-colors font-medium"
                >
                  <span>gitlab.cherkaoui.ch/HadiCherkaoui/anvil</span>
                  <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              {/* Stack list */}
              <div className="md:w-2/5">
                <h4 className="font-tech text-xs tracking-widest uppercase text-(--text-muted) mb-4">
                  Stack
                </h4>
                <div>
                  {[
                    { name: "Rust", desc: "Primary language" },
                    { name: "Axum", desc: "HTTP layer" },
                    { name: "kube-rs", desc: "Typed k8s API" },
                    { name: "SQLite", desc: "Metadata + audit" },
                    { name: "k0s", desc: "Production cluster" },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between py-3 border-b border-(--border-subtle) last:border-0"
                    >
                      <span className="font-medium text-(--accent-amber)">
                        {item.name}
                      </span>
                      <span className="text-sm text-(--text-muted)">
                        {item.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
