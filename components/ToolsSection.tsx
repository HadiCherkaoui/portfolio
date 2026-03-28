import SectionWrapper from "./SectionWrapper";

export default function ToolsSection() {
  return (
    <SectionWrapper id="tools">
      <div className="py-24 px-4 relative">
        <div className="container mx-auto max-w-4xl relative z-10">

          {/* Claim header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-(--accent-amber)" />
              <span className="font-tech text-(--accent-amber) text-xs tracking-widest uppercase">
                Tools
              </span>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl tracking-tight">
              I use my tools{" "}
              <span className="amber-accent">on purpose.</span>
            </h2>
          </div>

          {/* Two-column proof */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Artix Linux */}
            <div className="glass-card p-6 hover-lift">
              <h3 className="font-tech text-xs tracking-widest uppercase text-(--accent-amber) mb-4">
                Operating System
              </h3>
              <p className="text-(--text-secondary) leading-relaxed mb-5">
                I daily-drive Artix Linux — not for the aesthetic, but because I
                want every layer of my system to match what I mean. dinit instead
                of systemd, doas instead of sudo, Catppuccin Macchiato across
                the entire stack. Rolling releases, deliberate choices.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Artix", "dinit", "doas", "KDE Plasma", "Catppuccin"].map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 bg-(--accent-emerald-subtle) text-(--accent-emerald) rounded-full text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages & AI */}
            <div className="glass-card p-6 hover-lift">
              <h3 className="font-tech text-xs tracking-widest uppercase text-(--accent-amber) mb-4">
                Languages & AI
              </h3>
              <p className="text-(--text-secondary) leading-relaxed mb-5">
                I write Go when Rust is overkill: tooling, scripts, things that
                need to compile fast and get out of the way. I know TypeScript
                and React — but I reach for Leptos when the project shares a
                codebase with the server. I&apos;m also exploring AI/ML tooling
                and building with LLM APIs.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Rust", "Go", "TypeScript", "Leptos", "LLM APIs"].map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 bg-(--accent-emerald-subtle) text-(--accent-emerald) rounded-full text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Third card — full width, Dev Environment (purple) */}
          <div className="glass-card p-6 hover-lift mb-8">
            <h3 className="font-tech text-xs tracking-widest uppercase text-(--accent-purple) mb-4">
              Dev Environment
            </h3>
            <p className="text-(--text-secondary) leading-relaxed mb-5">
              Alacritty terminal running Zsh with Powerlevel10k, Tmux for session
              management, JetBrains Mono everywhere code is displayed. Every
              tool is chosen, nothing is default.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Alacritty", "Zsh", "Powerlevel10k", "Tmux", "JetBrains Mono"].map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 bg-(--accent-purple-subtle) text-(--accent-purple) rounded-full text-xs font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://docs.cherkaoui.ch/setup/os-setup"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-5 py-2.5 inline-flex items-center gap-2 hover-lift text-(--text-secondary) hover:text-[var(--accent-amber)] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Setup Documentation
            </a>
            <a
              href="https://github.com/HadiCherkaoui"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-5 py-2.5 inline-flex items-center gap-2 hover-lift text-(--text-secondary) hover:text-[var(--accent-amber)] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
