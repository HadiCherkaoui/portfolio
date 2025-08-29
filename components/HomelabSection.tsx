'use client';

import React from 'react';

export default function HomelabSection() {
  return (
    <section id="homelab" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Homelab Network
          </h2>
          <p className="text-xl text-[var(--foreground)]/80 max-w-3xl mx-auto mb-6">
            A fully self-built network infrastructure showcasing enterprise-grade networking at home
          </p>
          <a 
            href="https://docs.cherkaoui.ch/homelab/network-architecture/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary-color)] text-white rounded-full font-medium 
                      border-2 border-transparent transition-all duration-300 hover-lift
                      hover:bg-[var(--primary-color)]/90 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            View Detailed Documentation
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Network Diagram */}
          <div className="space-y-6">
            <div className="bg-[var(--card-background)] rounded-xl p-6 border border-[var(--border-color)]">
              <h3 className="text-2xl font-bold mb-4 text-[var(--primary-color)]">Network Architecture</h3>
              
              {/* ISP Router */}
              <div className="mb-4 p-4 bg-[var(--secondary-color)]/10 rounded-lg border-l-4 border-[var(--secondary-color)]">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-5 h-5 text-[var(--secondary-color)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <h4 className="font-semibold">ISP Router (DMZ Mode)</h4>
                </div>
                <p className="text-sm text-[var(--foreground)]/70">Entry point with DMZ configuration for true passthrough</p>
              </div>

              {/* OpnSense Router */}
              <div className="mb-4 p-4 bg-[var(--primary-color)]/10 rounded-lg border-l-4 border-[var(--primary-color)]">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-5 h-5 text-[var(--primary-color)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <h4 className="font-semibold">DIY OpnSense Router</h4>
                </div>
                <p className="text-sm text-[var(--foreground)]/70">Custom-built firewall with 10Gig NIC for high-speed routing</p>
              </div>

              {/* Managed Switch */}
              <div className="mb-4 p-4 bg-[var(--accent-color)]/10 rounded-lg border-l-4 border-[var(--accent-color)]">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-5 h-5 text-[var(--accent-color)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm0-4H9V5h10v2z"/>
                  </svg>
                  <h4 className="font-semibold">Managed Switch</h4>
                </div>
                <p className="text-sm text-[var(--foreground)]/70">10Gig uplink + 8x 2.5Gig ports with VLAN segmentation</p>
              </div>

              {/* VLANs */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                  <h5 className="font-medium text-green-400 mb-1">Home Network VLAN</h5>
                  <p className="text-xs text-[var(--foreground)]/60">Main network for devices</p>
                </div>
                <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <h5 className="font-medium text-blue-400 mb-1">Homelab VLAN</h5>
                  <p className="text-xs text-[var(--foreground)]/60">Isolated lab environment</p>
                </div>
              </div>

              {/* Access Point */}
              <div className="p-4 bg-purple-500/10 rounded-lg border-l-4 border-purple-500">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
                  </svg>
                  <h4 className="font-semibold">UniFi U7 Lite AP</h4>
                </div>
                <p className="text-sm text-[var(--foreground)]/70">WiFi 7 access point for wireless connectivity</p>
              </div>
            </div>
          </div>

          {/* Features & Benefits */}
          <div className="space-y-6">
            <div className="bg-[var(--card-background)] rounded-xl p-6 border border-[var(--border-color)]">
              <h3 className="text-2xl font-bold mb-6 text-[var(--primary-color)]">Key Features</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[var(--primary-color)]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[var(--primary-color)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">10Gig Backbone</h4>
                    <p className="text-sm text-[var(--foreground)]/70">High-speed connectivity throughout the network</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[var(--primary-color)]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[var(--primary-color)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">VLAN Segmentation</h4>
                    <p className="text-sm text-[var(--foreground)]/70">Isolated networks for security and performance</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[var(--primary-color)]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[var(--primary-color)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Enterprise Firewall</h4>
                    <p className="text-sm text-[var(--foreground)]/70">OpnSense providing advanced security features</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[var(--primary-color)]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[var(--primary-color)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">WiFi 7 Ready</h4>
                    <p className="text-sm text-[var(--foreground)]/70">Latest wireless technology with UniFi management</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[var(--primary-color)]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[var(--primary-color)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Scalable Design</h4>
                    <p className="text-sm text-[var(--foreground)]/70">Built for future expansion and upgrades</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Network Stats */}
            <div className="bg-[var(--card-background)] rounded-xl p-6 border border-[var(--border-color)]">
              <h3 className="text-xl font-bold mb-4">Network Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-[var(--primary-color)]/10 rounded-lg">
                  <div className="text-2xl font-bold text-[var(--primary-color)]">10Gb/s</div>
                  <div className="text-sm text-[var(--foreground)]/70">Backbone Speed</div>
                </div>
                <div className="text-center p-3 bg-[var(--secondary-color)]/10 rounded-lg">
                  <div className="text-2xl font-bold text-[var(--secondary-color)]">2.5Gb/s</div>
                  <div className="text-sm text-[var(--foreground)]/70">Client Ports</div>
                </div>
                <div className="text-center p-3 bg-[var(--accent-color)]/10 rounded-lg">
                  <div className="text-2xl font-bold text-[var(--accent-color)]">2</div>
                  <div className="text-sm text-[var(--foreground)]/70">VLANs</div>
                </div>
                <div className="text-center p-3 bg-purple-500/10 rounded-lg">
                  <div className="text-2xl font-bold text-purple-500">WiFi 7</div>
                  <div className="text-sm text-[var(--foreground)]/70">Wireless</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
