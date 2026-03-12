import SectionWrapper from "./SectionWrapper";

export default function InfraSection() {
  return (
    <SectionWrapper id="infrastructure">
      <div className="py-24 px-4 relative">
        <div className="container mx-auto max-w-4xl relative z-10">

          {/* Claim header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-[var(--accent-amber)]" />
              <span className="font-tech text-[var(--accent-amber)] text-xs tracking-widest uppercase">
                Infrastructure
              </span>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl tracking-tight">
              I run my own{" "}
              <span className="amber-accent">infrastructure.</span>
            </h2>
          </div>

          {/* Two-column proof */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Network */}
            <div className="glass-card p-6 hover-lift">
              <h3 className="font-tech text-xs tracking-widest uppercase text-[var(--accent-amber)] mb-4">
                Network
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-5">
                Custom OpnSense router with a 10Gig NIC between the ISP and my
                network. Managed switch: 10Gig uplink, 8×2.5Gig downstream.
                VLAN segmentation between home and lab environments. WiFi 7 via
                UniFi U7 Lite.
              </p>
              <div className="flex flex-wrap gap-2">
                {["OpnSense", "10Gig", "VLAN", "WiFi 7", "UniFi"].map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 bg-[var(--accent-emerald-subtle)] text-[var(--accent-emerald)] rounded-full text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Cluster */}
            <div className="glass-card p-6 hover-lift">
              <h3 className="font-tech text-xs tracking-widest uppercase text-[var(--accent-amber)] mb-4">
                Cluster & GitOps
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-5">
                AMD Ryzen 5 7600X, 64GB DDR5 RAM, k0s on Ubuntu Server.
                Deployments go through FluxCD, pulling manifests from a
                self-hosted GitLab instance. I wrote the CI pipelines.
                Everything is GitOps — no manual kubectl apply in production.
              </p>
              <div className="flex flex-wrap gap-2">
                {["k0s", "FluxCD", "GitOps", "GitLab CI", "Docker"].map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 bg-[var(--accent-emerald-subtle)] text-[var(--accent-emerald)] rounded-full text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://docs.cherkaoui.ch/homelab/network-architecture/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-5 py-2.5 inline-flex items-center gap-2 hover-lift text-[var(--text-secondary)] hover:text-[var(--accent-amber)] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Homelab Documentation
            </a>
            <a
              href="https://gitlab.cherkaoui.ch/HadiCherkaoui"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-5 py-2.5 inline-flex items-center gap-2 hover-lift text-[var(--text-secondary)] hover:text-[var(--accent-amber)] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.955 13.587l-1.342-4.135-2.664-8.189c-.135-.423-.73-.423-.867 0L16.418 9.45H7.582L4.918 1.263c-.135-.423-.73-.423-.867 0L1.387 9.452.045 13.587c-.121.375.014.789.331 1.023L12 23.054l11.624-8.443c.318-.235.452-.648.331-1.024" />
              </svg>
              GitLab
            </a>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
