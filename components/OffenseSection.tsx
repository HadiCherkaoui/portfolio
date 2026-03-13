import SectionWrapper from "./SectionWrapper";

export default function OffenseSection() {
  return (
    <SectionWrapper id="offense">
      <div className="py-24 px-4 relative">
        <div className="container mx-auto max-w-4xl relative z-10">

          {/* Claim header — purple */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-(--accent-purple)" />
              <span
                className="font-tech text-xs tracking-widest uppercase"
                style={{ color: "var(--accent-purple)" }}
              >
                Security
              </span>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl tracking-tight">
              I learn{" "}
              <span className="purple-accent">offense.</span>
            </h2>
          </div>

          {/* Proof */}
          <div className="glass-card p-8 max-w-2xl">
            <p className="text-(--text-secondary) text-lg leading-relaxed mb-6">
              I&apos;m working through TryHackMe&apos;s ethical hacking path —
              hands-on labs covering penetration testing, network exploitation,
              and security tooling. You don&apos;t really understand how to
              defend a system until you&apos;ve tried to break one.
            </p>
            <a
              href="https://tryhackme.com/p/HadiCherkaoui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium transition-colors"
              style={{ color: "var(--accent-purple)" }}
            >
              <span>TryHackMe profile</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
