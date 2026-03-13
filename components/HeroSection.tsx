import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center py-20 px-4 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Photo */}
        <div className="mb-8">
          <Image
            src="/thewalk.jpg"
            alt="Hadi Cherkaoui"
            width={80}
            height={80}
            className="rounded-full object-cover border-2 border-(--accent-amber)"
            style={{ objectPosition: "top" }}
            priority
          />
        </div>

        {/* Role label */}
        <div className="mb-6 flex items-center gap-3">
          <span className="pulse-dot" />
          <span className="font-tech text-(--accent-amber) text-sm tracking-widest uppercase">
            Platform Developer · Zurich
          </span>
        </div>

        {/* Name */}
        <h1 className="font-headline text-6xl md:text-8xl lg:text-[100px] leading-[0.9] mb-10 tracking-tighter">
          Hadi{" "}
          <span className="amber-accent">Cherkaoui</span>
        </h1>

        {/* Opening claim */}
        <p className="text-xl md:text-2xl font-light text-(--text-secondary) max-w-2xl leading-relaxed mb-12">
          I write{" "}
          <span className="text-(--accent-amber) font-medium">Rust</span>
          . Building Scolx — a full-stack SaaS — while operating the
          infrastructure it runs on. OSS advocate, AI/ML enthusiast, homelab
          operator, and competing in ICT Championships Switzerland.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-6 flex-wrap">
          {/* GitHub */}
          <a
            href="https://github.com/HadiCherkaoui"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-(--text-muted) hover:text-(--accent-amber) transition-all duration-500"
            style={{ transitionTimingFunction: "var(--ease-signature)" }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          {/* GitLab */}
          <a
            href="https://gitlab.cherkaoui.ch/HadiCherkaoui"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitLab"
            className="text-(--text-muted) hover:text-(--accent-amber) transition-all duration-500"
            style={{ transitionTimingFunction: "var(--ease-signature)" }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.955 13.587l-1.342-4.135-2.664-8.189c-.135-.423-.73-.423-.867 0L16.418 9.45H7.582L4.918 1.263c-.135-.423-.73-.423-.867 0L1.387 9.452.045 13.587c-.121.375.014.789.331 1.023L12 23.054l11.624-8.443c.318-.235.452-.648.331-1.024" />
            </svg>
          </a>
          {/* Docs */}
          <a
            href="https://docs.cherkaoui.ch"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Documentation"
            className="text-(--text-muted) hover:text-(--accent-amber) transition-all duration-500"
            style={{ transitionTimingFunction: "var(--ease-signature)" }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>
          {/* Email */}
          <a
            href="mailto:contact@hadi.cherkaoui.ch"
            aria-label="Email"
            className="text-(--text-muted) hover:text-(--accent-amber) transition-all duration-500"
            style={{ transitionTimingFunction: "var(--ease-signature)" }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
            </svg>
          </a>
          {/* TryHackMe */}
          <a
            href="https://tryhackme.com/p/HadiCherkaoui"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TryHackMe"
            className="text-(--text-muted) hover:text-(--accent-amber) transition-all duration-500"
            style={{ transitionTimingFunction: "var(--ease-signature)" }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
              <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 80c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56zm80 304H176c-8.8 0-16-7.2-16-16v-16c0-44.2 35.8-80 80-80h32c44.2 0 80 35.8 80 80v16c0 8.8-7.2 16-16 16z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50">
        <div
          className="w-6 h-6 border-r-2 border-b-2 border-(--accent-amber) rotate-45 animate-bounce"
          style={{ animationDuration: "2s" }}
        />
      </div>
    </section>
  );
}
