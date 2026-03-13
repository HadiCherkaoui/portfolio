"use client";

import SectionWrapper from "./SectionWrapper";
import useSpotlight from "../hooks/useSpotlight";

export default function LockboxSection() {
  const { ref, spotlightProps } = useSpotlight<HTMLDivElement>();

  return (
    <SectionWrapper id="lockbox">
      <div className="py-24 px-4 relative">
        <div className="container mx-auto max-w-4xl relative z-10">

          {/* Claim header — purple (security/crypto tool) */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-(--accent-purple)" />
              <span className="font-tech text-(--accent-purple) text-xs tracking-widest uppercase">
                Tools
              </span>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl tracking-tight">
              I build tools{" "}
              <span className="purple-accent">I actually use.</span>
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
                  Lockbox
                </h3>
                <div className="space-y-4 text-(--text-secondary) text-lg leading-relaxed">
                  <p>
                    Lockbox is my first Rust project — an open-source E2EE
                    secrets manager built for k8s and automation. Ed25519
                    keypair auth (no master password, SSH-style), AES-256-GCM
                    encryption, and a delta-sync API designed for controllers.
                  </p>
                  <p>
                    The companion Go controller watches your cluster, pulls
                    changed secrets from Lockbox, decrypts them, and injects
                    them as native k8s Secrets tagged{" "}
                    <code className="text-(--accent-purple) text-sm">
                      lockbox.io/managed
                    </code>
                    . No secrets in git. No manual{" "}
                    <code className="text-(--accent-purple) text-sm">
                      kubectl apply
                    </code>
                    .
                  </p>
                </div>

                {/* Links */}
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href="https://gitlab.cherkaoui.ch/HadiCherkaoui/lockbox"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-(--accent-purple) hover:text-[var(--text-primary)] transition-colors font-medium"
                  >
                    <span>Lockbox on GitLab</span>
                    <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <a
                    href="https://gitlab.cherkaoui.ch/HadiCherkaoui/lockbox-k8s-controller"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-(--accent-purple) hover:text-[var(--text-primary)] transition-colors font-medium"
                  >
                    <span>Controller on GitLab</span>
                    <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Stack list */}
              <div className="md:w-2/5">
                <h4 className="font-tech text-xs tracking-widest uppercase text-(--text-muted) mb-4">
                  Stack
                </h4>
                <div>
                  {[
                    { name: "Rust", desc: "Core language" },
                    { name: "Ed25519", desc: "Keypair auth" },
                    { name: "AES-256-GCM", desc: "Encryption" },
                    { name: "Go", desc: "Controller" },
                    { name: "kubebuilder", desc: "k8s API" },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between py-3 border-b border-(--border-subtle) last:border-0"
                    >
                      <span className="font-medium text-(--accent-purple)">
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
