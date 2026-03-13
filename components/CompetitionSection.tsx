"use client";

import SectionWrapper from "./SectionWrapper";
import useSpotlight from "../hooks/useSpotlight";

export default function CompetitionSection() {
  const { ref, spotlightProps } = useSpotlight<HTMLDivElement>();

  return (
    <SectionWrapper id="competition">
      <div className="py-24 px-4 relative">
        <div className="container mx-auto max-w-4xl relative z-10">

          {/* Claim header — purple for competition/security theme */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-[var(--accent-purple)]" />
              <span
                className="font-tech text-xs tracking-widest uppercase"
                style={{ color: "var(--accent-purple)" }}
              >
                Competition
              </span>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl tracking-tight">
              I{" "}
              <span className="purple-accent">compete.</span>
            </h2>
          </div>

          {/* Proof card */}
          <div
            ref={ref}
            onMouseMove={spotlightProps.onMouseMove}
            className="glass-card spotlight-card p-8 md:p-10"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4 text-[var(--text-primary)]">
                  ICT Championships Switzerland
                </h3>
                <p className="text-(--text-secondary) text-lg leading-relaxed">
                  I&apos;m competing in the ICT Championships Switzerland in
                  the Cloud and Cybersecurity track — a regional-level
                  technical competition that covers infrastructure, cloud
                  platforms, and offensive security under pressure.
                </p>
              </div>
              <div className="flex flex-col gap-4 md:min-w-[140px] shrink-0">
                {[
                  { label: "Track", value: "Cloud & Cyber" },
                  { label: "Level", value: "Regional" },
                  { label: "Country", value: "Switzerland" },
                ].map((item) => (
                  <div key={item.label} className="md:text-right">
                    <div className="font-tech text-xs tracking-wider uppercase text-[var(--text-muted)] mb-1">
                      {item.label}
                    </div>
                    <div
                      className="font-medium text-sm"
                      style={{ color: "var(--accent-purple)" }}
                    >
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
