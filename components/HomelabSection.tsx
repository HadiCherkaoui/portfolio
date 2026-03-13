import useSpotlight from "../hooks/useSpotlight";

export default function HomelabSection() {
  const { ref: networkRef, spotlightProps: networkSpotlight } = useSpotlight<HTMLDivElement>();
  const { ref: featuresRef, spotlightProps: featuresSpotlight } = useSpotlight<HTMLDivElement>();

  return (
    <section id="homelab" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="font-tech text-(--accent-emerald) mb-4 block">
            Infrastructure
          </span>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl mb-6">
            Homelab{" "}
            <span className="emerald-accent">Network</span>
          </h2>
          <div className="w-20 h-0.5 bg-(--accent-emerald) mx-auto mb-6" />
          <p className="text-lg text-(--text-secondary) max-w-3xl mx-auto mb-6">
            A fully self-built network infrastructure showcasing enterprise-grade networking at home
          </p>
          <a
            href="https://docs.cherkaoui.ch/homelab/network-architecture/"
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
            View Detailed Documentation
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Network Diagram */}
          <div
            ref={networkRef}
            {...networkSpotlight}
            className="glass-card p-8 hover-lift"
          >
            <h3 className="font-headline text-2xl mb-6 text-(--accent-emerald)">
              Network Architecture
            </h3>

            {/* ISP Router */}
            <div className="mb-4 p-4 bg-(--accent-emerald)/5 rounded-lg border-l-4 border-(--accent-emerald)">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-5 h-5 text-(--accent-emerald)" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <h4 className="font-medium text-(--text-primary)">ISP Router (DMZ Mode)</h4>
              </div>
              <p className="text-sm text-(--text-secondary)">Entry point with DMZ configuration for true passthrough</p>
            </div>

            {/* OpnSense Router */}
            <div className="mb-4 p-4 bg-(--accent-emerald)/10 rounded-lg border-l-4 border-(--accent-emerald)">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-5 h-5 text-(--accent-emerald)" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <h4 className="font-medium text-(--text-primary)">DIY OpnSense Router</h4>
              </div>
              <p className="text-sm text-(--text-secondary)">Custom-built firewall with 10Gig NIC for high-speed routing</p>
            </div>

            {/* Managed Switch */}
            <div className="mb-4 p-4 bg-(--accent-emerald)/10 rounded-lg border-l-4 border-(--accent-emerald)">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-5 h-5 text-(--accent-emerald)" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm0-4H9V5h10v2z"/>
                </svg>
                <h4 className="font-medium text-(--text-primary)">Managed Switch</h4>
              </div>
              <p className="text-sm text-(--text-secondary)">10Gig uplink + 8x 2.5Gig ports with VLAN segmentation</p>
            </div>

            {/* VLANs */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="p-3 bg-(--accent-emerald)/10 rounded-lg border border-(--accent-emerald)/20">
                <h5 className="font-medium text-(--accent-emerald) mb-1 text-sm">Home Network VLAN</h5>
                <p className="text-xs text-(--text-muted)">Main network for devices</p>
              </div>
              <div className="p-3 bg-(--accent-emerald)/5 rounded-lg border border-(--accent-emerald)/10">
                <h5 className="font-medium text-(--accent-emerald) mb-1 text-sm">Homelab VLAN</h5>
                <p className="text-xs text-(--text-muted)">Isolated lab environment</p>
              </div>
            </div>

            {/* Access Point */}
            <div className="p-4 bg-(--accent-emerald)/5 rounded-lg border-l-4 border-(--accent-emerald)">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-5 h-5 text-(--accent-emerald)" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
                </svg>
                <h4 className="font-medium text-(--text-primary)">UniFi U7 Lite AP</h4>
              </div>
              <p className="text-sm text-(--text-secondary)">WiFi 7 access point for wireless connectivity</p>
            </div>
          </div>

          {/* Features & Benefits */}
          <div
            ref={featuresRef}
            {...featuresSpotlight}
            className="glass-card p-8 hover-lift"
          >
            <h3 className="font-headline text-2xl mb-6 text-(--accent-emerald)">
              Key Features
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-(--accent-emerald-subtle) flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-(--accent-emerald)" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-(--text-primary) mb-1">10Gig Backbone</h4>
                  <p className="text-sm text-(--text-secondary)">High-speed connectivity throughout the network</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-(--accent-emerald-subtle) flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-(--accent-emerald)" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-(--text-primary) mb-1">VLAN Segmentation</h4>
                  <p className="text-sm text-(--text-secondary)">Isolated networks for security and performance</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-(--accent-emerald-subtle) flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-(--accent-emerald)" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-(--text-primary) mb-1">Enterprise Firewall</h4>
                  <p className="text-sm text-(--text-secondary)">OpnSense providing advanced security features</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-(--accent-emerald-subtle) flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-(--accent-emerald)" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-(--text-primary) mb-1">WiFi 7 Ready</h4>
                  <p className="text-sm text-(--text-secondary)">Latest wireless technology with UniFi management</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-(--accent-emerald-subtle) flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-(--accent-emerald)" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-(--text-primary) mb-1">Kubernetes Cluster</h4>
                  <p className="text-sm text-(--text-secondary)">Bare-metal k0s deployment for container orchestration</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-(--border-subtle)">
              <h4 className="font-medium mb-3 text-(--text-primary)">
                Server Specs
              </h4>
              <ul className="space-y-2 text-(--text-secondary) text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-(--accent-emerald)" />
                  AMD Ryzen 5 7600X
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-(--accent-emerald)" />
                  64GB DDR5 RAM
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-(--accent-emerald)" />
                  Ubuntu Server + k0s
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
