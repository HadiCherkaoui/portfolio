import SectionWrapper from "./SectionWrapper";

export default function ToolsSection() {
  return (
    <SectionWrapper id="tools">
      <div className="py-24 px-4 relative">
        <div className="container mx-auto max-w-4xl relative z-10">

          {/* Claim header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-[var(--accent-amber)]" />
              <span className="font-tech text-[var(--accent-amber)] text-xs tracking-widest uppercase">
                Tools
              </span>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl tracking-tight">
              I use my tools{" "}
              <span className="amber-accent">on purpose.</span>
            </h2>
          </div>

          {/* Two-column proof */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Arch Linux */}
            <div className="glass-card p-6 hover-lift">
              <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">
                Arch Linux
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                I daily-drive Arch Linux — not for the aesthetic, but because I
                got tired of not understanding what my OS was doing. Rolling
                releases, KDE Plasma with Kvantum theming, and shell scripts for
                anything repetitive.
              </p>
              <a
                href="https://docs.cherkaoui.ch/setup/os-setup"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm text-[var(--accent-amber)] hover:text-[var(--text-primary)] transition-colors"
              >
                Setup documentation
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Go & TypeScript */}
            <div className="glass-card p-6 hover-lift">
              <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">
                Go & TypeScript
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                I write Go when Rust is overkill: tooling, scripts, things that
                need to compile fast and get out of the way. I know TypeScript
                and React — but I reach for Leptos when the project shares a
                codebase with the server.
              </p>
              <a
                href="https://github.com/HadiCherkaoui"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm text-[var(--accent-amber)] hover:text-[var(--text-primary)] transition-colors"
              >
                GitHub
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
