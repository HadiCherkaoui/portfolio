# Portfolio Phase 2 Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add aurora animated background, circular photo in hero, LockboxSection, InfraSection security card, OSS/AI/ML content mentions, and migrate all components to Tailwind v4 shorthand with balanced amber+purple usage.

**Architecture:** All changes are targeted edits and one new component (`LockboxSection`). No new dependencies. Aurora is pure CSS. Purple accent used for all security/crypto sections (Lockbox, Competition, Offense, Identity card). Amber used for builder sections (Scolx, Infra, Tools, Hero). LockboxSection follows the identical `"use client"` + `SectionWrapper` + `useSpotlight` pattern as ScolxSection.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript 5.9, Tailwind CSS v4, pnpm

---

## Tailwind v4 Shorthand Reference

Replace all `[var(--x)]` patterns with `(--x)` shorthand throughout every file touched:

| v3 | v4 |
|----|-----|
| `text-[var(--accent-amber)]` | `text-(--accent-amber)` |
| `bg-[var(--accent-purple)]` | `bg-(--accent-purple)` |
| `border-[var(--border-subtle)]` | `border-(--border-subtle)` |
| `hover:text-[var(--accent-amber)]` | `hover:text-(--accent-amber)` |

**Keep** inline `style={{ color: "var(--accent-purple)" }}` where Tailwind can't express a dynamic property (e.g., on elements that need `color` set without a Tailwind utility matching exactly — rare, but present on a few links in CompetitionSection and OffenseSection).

**Keep** arbitrary values that are NOT CSS variables as-is: `bg-[linear-gradient(...)]`, `bg-[size:64px_64px]`, `[mask-image:...]`, `text-[100px]`.

---

## Files Changed

| File | Change |
|------|--------|
| `app/globals.css` | Add `.aurora-bg`, `.aurora-amber`, `.aurora-purple`, keyframes |
| `app/layout.tsx` | Replace blob divs with aurora markup; v4 shorthand; updated metadata |
| `components/HeroSection.tsx` | Add photo; OSS/AI mention in copy; v4 shorthand |
| `components/ScolxSection.tsx` | Remove `import React`; v4 shorthand |
| `components/LockboxSection.tsx` | **CREATE** — purple, useSpotlight, OSS E2EE secrets manager |
| `components/InfraSection.tsx` | Add Identity & Privacy card (purple); v4 shorthand on link classes |
| `components/ToolsSection.tsx` | AI/ML sentence in Go card; v4 shorthand |
| `components/OffenseSection.tsx` | v4 shorthand |
| `components/Footer.tsx` | Add Lockbox to Quick Links; v4 shorthand |
| `app/page.tsx` | Add `<LockboxSection />` after `<ScolxSection />` |

**Unchanged:** `components/ContactSection.tsx` (already v4), `components/CompetitionSection.tsx` (already v4), `components/SectionWrapper.tsx`, `hooks/useSpotlight.ts`

---

## Chunk 1: Aurora Background

### Task 1: Add aurora CSS to globals.css

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Append aurora CSS to the end of `app/globals.css`**

Add this block at the very end of the file (after the last rule):

```css
/* Aurora background */
.aurora-bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
}

.aurora-amber {
  position: absolute;
  top: -10%;
  left: -15%;
  width: 70vw;
  height: 65vh;
  background: radial-gradient(ellipse at center, rgba(232, 133, 42, 0.15) 0%, transparent 70%);
  filter: blur(60px);
}

.aurora-purple {
  position: absolute;
  bottom: -15%;
  right: -10%;
  width: 75vw;
  height: 70vh;
  background: radial-gradient(ellipse at center, rgba(167, 139, 250, 0.12) 0%, transparent 70%);
  filter: blur(80px);
}

@media (prefers-reduced-motion: no-preference) {
  .aurora-amber {
    animation: aurora-drift-1 30s ease-in-out infinite alternate;
  }
  .aurora-purple {
    animation: aurora-drift-2 38s ease-in-out infinite alternate;
  }
}

@keyframes aurora-drift-1 {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(12vw, 18vh) scale(1.15); }
}

@keyframes aurora-drift-2 {
  from { transform: translate(0, 0) scale(1.1); }
  to   { transform: translate(-10vw, -12vh) scale(0.92); }
}
```

**Note:** Animation is inside `prefers-reduced-motion: no-preference` only. The base rules have no `animation:` property — static gradients show on reduced-motion systems.

- [ ] **Step 2: Verify build**

```bash
cd C:/CMI-Github/portfolio/.worktrees/direction-c
pnpm build
```

Expected: Build passes, no errors.

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "feat: add aurora background CSS (amber + purple, prefers-reduced-motion guard)"
```

---

### Task 2: Update layout.tsx

**Files:**
- Modify: `app/layout.tsx`

**Changes:** Replace 3 blob divs with aurora markup; v4 shorthand on body className; update metadata description to be accurate.

**Aurora placement:** `.aurora-bg` div goes BEFORE the grid pattern div. Order in JSX:
1. `<div className="aurora-bg">` (aurora — z-index: -1)
2. `<div className="fixed inset-0 z-[-1]...">` (grid pattern — also z-index: -1 but later in DOM)

- [ ] **Step 1: Replace `app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import { Inter, Newsreader, Space_Grotesk } from "next/font/google";
import Footer from "../components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hadi Cherkaoui | Platform Developer",
  description:
    "Platform Developer apprentice based in Switzerland. Building in Rust and Go, running k0s on bare metal, and competing in ICT Championships Switzerland.",
  keywords: [
    "Hadi Cherkaoui",
    "Platform Developer",
    "Rust",
    "Go",
    "Kubernetes",
    "Open Source",
    "Switzerland",
    "k0s",
  ],
  authors: [{ name: "Hadi Cherkaoui" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${inter.variable} ${newsreader.variable} ${spaceGrotesk.variable} antialiased bg-(--bg-primary) text-(--text-primary) selection:bg-(--accent-amber-subtle) selection:text-(--text-primary)`}
      >
        {/* Aurora animated background */}
        <div className="aurora-bg">
          <div className="aurora-amber" />
          <div className="aurora-purple" />
        </div>

        {/* Subtle grid pattern — no background fill; body provides the dark bg, aurora shows through */}
        <div className="fixed inset-0 z-[-1]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]" />
        </div>

        {children}
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
pnpm build
```

Expected: Build passes.

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: replace blob divs with aurora background, update metadata, v4 shorthand"
```

---

## Chunk 2: Hero Photo + Content

### Task 3: Update HeroSection

**Files:**
- Modify: `components/HeroSection.tsx`

**Changes:**
1. Add circular 80×80px photo above role label — Next.js `<Image>` with `objectPosition: "top"` to crop `/thewalk.jpg` on face
2. Update opening claim: add "OSS advocate, AI/ML enthusiast"
3. Migrate all `[var(--...)]` → `(--...)` v4 shorthand

**RSC note:** HeroSection is a static RSC — no `"use client"`, no `import React`. `next/image` is RSC-compatible. Do NOT add `"use client"`.

- [ ] **Step 1: Replace `components/HeroSection.tsx`**

```tsx
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
```

- [ ] **Step 2: Verify build**

```bash
pnpm build
```

Expected: Build passes. `next/image` resolves correctly (RSC-compatible).

- [ ] **Step 3: Commit**

```bash
git add components/HeroSection.tsx
git commit -m "feat: add circular photo to hero, add OSS/AI mention, v4 shorthand"
```

---

## Chunk 3: LockboxSection

### Task 4: Create LockboxSection.tsx

**Files:**
- Create: `components/LockboxSection.tsx`

**Design decisions:**
- Purple heading — Lockbox is a security/crypto tool (E2EE, Ed25519), consistent with Competition + Offense purple theme
- `"use client"` required by `useSpotlight`
- No `import React` (modern JSX transform — `"use client"` alone is sufficient)
- `<SectionWrapper id="lockbox">` with inner `<div>` (not `<section>`)
- Spotlight: extract `onMouseMove`, manually compose `className="glass-card spotlight-card p-8 md:p-10"` — do NOT spread `spotlightProps` directly (it would overwrite className)
- OSS called out explicitly in the description copy ("open-source")
- All Tailwind in v4 `(--...)` shorthand

- [ ] **Step 1: Create `components/LockboxSection.tsx`**

```tsx
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
                    className="inline-flex items-center gap-2 text-(--accent-purple) hover:text-(--text-primary) transition-colors font-medium"
                  >
                    <span>Lockbox on GitLab</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <a
                    href="https://gitlab.cherkaoui.ch/HadiCherkaoui/lockbox-k8s-controller"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-(--accent-purple) hover:text-(--text-primary) transition-colors font-medium"
                  >
                    <span>Controller on GitLab</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
```

- [ ] **Step 2: Verify build**

```bash
pnpm build
```

Expected: Build passes. No TypeScript errors. `useSpotlight` resolves correctly.

- [ ] **Step 3: Commit**

```bash
git add components/LockboxSection.tsx
git commit -m "feat: add LockboxSection — purple, OSS E2EE secrets manager + k8s controller"
```

---

## Chunk 4: InfraSection Security Card

### Task 5: Add Identity & Privacy card to InfraSection

**Files:**
- Modify: `components/InfraSection.tsx`

**Changes:**
1. Add third card (Identity & Privacy) as sibling div **after** the closing `</div>` of the `grid md:grid-cols-2` — NOT inside the grid
2. Security card uses purple heading and purple tags (consistent with security theme)
3. Migrate remaining v3 patterns on link classes (the two `glass-card` links at the bottom still had v3 `hover:text-[var(...)]` — now `hover:text-(--accent-amber)`)

**Layout structure:**
```
<div className="grid md:grid-cols-2 gap-8 mb-8">  ← existing grid, add mb-8
  {/* Network card */}
  {/* Cluster card */}
</div>

<div className="glass-card p-6 hover-lift mb-8">  ← NEW third card, sibling
  {/* Identity & Privacy */}
</div>

<div className="flex flex-wrap gap-4">  ← existing links, unchanged
```

- [ ] **Step 1: Replace `components/InfraSection.tsx`**

```tsx
import SectionWrapper from "./SectionWrapper";

export default function InfraSection() {
  return (
    <SectionWrapper id="infrastructure">
      <div className="py-24 px-4 relative">
        <div className="container mx-auto max-w-4xl relative z-10">

          {/* Claim header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-(--accent-amber)" />
              <span className="font-tech text-(--accent-amber) text-xs tracking-widest uppercase">
                Infrastructure
              </span>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl tracking-tight">
              I run my own{" "}
              <span className="amber-accent">infrastructure.</span>
            </h2>
          </div>

          {/* Two-column proof grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Network */}
            <div className="glass-card p-6 hover-lift">
              <h3 className="font-tech text-xs tracking-widest uppercase text-(--accent-amber) mb-4">
                Network
              </h3>
              <p className="text-(--text-secondary) leading-relaxed mb-5">
                Custom OpnSense router with a 10Gig NIC between the ISP and my
                network. Managed switch: 10Gig uplink, 8×2.5Gig downstream.
                VLAN segmentation between home and lab environments. WiFi 7 via
                UniFi U7 Lite.
              </p>
              <div className="flex flex-wrap gap-2">
                {["OpnSense", "10Gig", "VLAN", "WiFi 7", "UniFi"].map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 bg-(--accent-emerald-subtle) text-(--accent-emerald) rounded-full text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Cluster */}
            <div className="glass-card p-6 hover-lift">
              <h3 className="font-tech text-xs tracking-widest uppercase text-(--accent-amber) mb-4">
                Cluster & GitOps
              </h3>
              <p className="text-(--text-secondary) leading-relaxed mb-5">
                AMD Ryzen 5 7600X, 64GB DDR5 RAM, k0s on Ubuntu Server.
                Deployments go through FluxCD, pulling manifests from a
                self-hosted GitLab instance. I wrote the CI pipelines.
                Everything is GitOps — no manual kubectl apply in production.
              </p>
              <div className="flex flex-wrap gap-2">
                {["k0s", "FluxCD", "GitOps", "GitLab CI", "Docker"].map((t) => (
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

          {/* Third card — full width, Identity & Privacy (purple) */}
          <div className="glass-card p-6 hover-lift mb-8">
            <h3 className="font-tech text-xs tracking-widest uppercase text-(--accent-purple) mb-4">
              Identity & Privacy
            </h3>
            <p className="text-(--text-secondary) leading-relaxed mb-5">
              I don&apos;t extend trust by convention. Every self-hosted service
              authenticates through Authentik — my self-hosted SSO. For cloud I
              use Proton: Swiss jurisdiction, open-source, E2EE by default.
              Proton Pass for passwords. Proton Drive for offsite backups.
              Nothing sensitive touches a vendor I can&apos;t audit.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Authentik", "SSO", "Proton", "E2EE", "Zero-trust"].map((t) => (
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
              href="https://docs.cherkaoui.ch/homelab/network-architecture/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-5 py-2.5 inline-flex items-center gap-2 hover-lift text-(--text-secondary) hover:text-(--accent-amber) transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Homelab Documentation
            </a>
            <a
              href="https://gitlab.cherkaoui.ch/HadiCherkaoui/homelab-k8s-fluxcd"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-5 py-2.5 inline-flex items-center gap-2 hover-lift text-(--text-secondary) hover:text-(--accent-amber) transition-colors"
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
```

- [ ] **Step 2: Verify build**

```bash
pnpm build
```

- [ ] **Step 3: Commit**

```bash
git add components/InfraSection.tsx
git commit -m "feat: add Identity & Privacy card to InfraSection (purple, Authentik + Proton)"
```

---

## Chunk 5: V4 Migrations + ToolsSection AI/ML

### Task 6: Update ToolsSection — AI/ML + v4 shorthand

**Files:**
- Modify: `components/ToolsSection.tsx`

**Changes:**
- Rename "Go & TypeScript" card to "Go, TypeScript & AI"
- Add one sentence about AI/ML tooling and LLM APIs to that card's paragraph
- Migrate all `[var(--...)]` → `(--...)` v4 shorthand

- [ ] **Step 1: Replace `components/ToolsSection.tsx`**

```tsx
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
          <div className="grid md:grid-cols-2 gap-8">
            {/* Arch Linux */}
            <div className="glass-card p-6 hover-lift">
              <h3 className="text-xl font-semibold mb-4 text-(--text-primary)">
                Arch Linux
              </h3>
              <p className="text-(--text-secondary) leading-relaxed">
                I daily-drive Arch Linux — not for the aesthetic, but because I
                got tired of not understanding what my OS was doing. Rolling
                releases, KDE Plasma with Kvantum theming, and shell scripts for
                anything repetitive.
              </p>
              <a
                href="https://docs.cherkaoui.ch/setup/os-setup"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm text-(--accent-amber) hover:text-(--text-primary) transition-colors"
              >
                Setup documentation
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Go, TypeScript & AI */}
            <div className="glass-card p-6 hover-lift">
              <h3 className="text-xl font-semibold mb-4 text-(--text-primary)">
                Go, TypeScript & AI
              </h3>
              <p className="text-(--text-secondary) leading-relaxed">
                I write Go when Rust is overkill: tooling, scripts, things that
                need to compile fast and get out of the way. I know TypeScript
                and React — but I reach for Leptos when the project shares a
                codebase with the server. I&apos;m also exploring AI/ML tooling
                and building with LLM APIs.
              </p>
              <a
                href="https://github.com/HadiCherkaoui"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm text-(--accent-amber) hover:text-(--text-primary) transition-colors"
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
```

- [ ] **Step 2: Verify build**

```bash
pnpm build
```

- [ ] **Step 3: Commit**

```bash
git add components/ToolsSection.tsx
git commit -m "feat: add AI/ML mention to ToolsSection, rename card, v4 shorthand"
```

---

### Task 7: Migrate ScolxSection to v4 shorthand + remove import React

**Files:**
- Modify: `components/ScolxSection.tsx`

**Changes:** Remove `import React` (modern JSX transform — `"use client"` alone is sufficient); migrate all `[var(--...)]` → `(--...)`.

- [ ] **Step 1: Replace `components/ScolxSection.tsx`**

```tsx
"use client";

import SectionWrapper from "./SectionWrapper";
import useSpotlight from "../hooks/useSpotlight";

export default function ScolxSection() {
  const { ref, spotlightProps } = useSpotlight<HTMLDivElement>();

  return (
    <SectionWrapper id="scolx">
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
              I build full-stack{" "}
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
                  Scolx
                </h3>
                <div className="space-y-4 text-(--text-secondary) text-lg leading-relaxed">
                  <p>
                    Scolx is a SaaS platform built entirely in Rust. Axum
                    handles HTTP routing and authentication on the server;{" "}
                    <span className="text-(--accent-amber)">Leptos</span>{" "}
                    compiles to WebAssembly for the UI — one language from
                    server to browser, no polyglot hot path.
                  </p>
                  <p>
                    It runs on a k0s cluster I built and operate myself.
                    PostgreSQL for storage. The deployment pipeline is fully
                    automated through FluxCD and a self-hosted GitLab instance.
                  </p>
                </div>
                <a
                  href="https://scolx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-(--accent-amber) hover:text-(--text-primary) transition-colors font-medium"
                >
                  <span>scolx.com</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    { name: "Leptos", desc: "UI / WebAssembly" },
                    { name: "PostgreSQL", desc: "Storage" },
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
```

- [ ] **Step 2: Verify build**

```bash
pnpm build
```

- [ ] **Step 3: Commit**

```bash
git add components/ScolxSection.tsx
git commit -m "chore: remove import React, v4 shorthand in ScolxSection"
```

---

### Task 8: Migrate OffenseSection to v4 shorthand

**Files:**
- Modify: `components/OffenseSection.tsx`

**Changes:** `[var(--...)]` → `(--...)`. Keep `style={{ color: "var(--accent-purple)" }}` inline on the link element (hover state can't be expressed as Tailwind without a class).

- [ ] **Step 1: Replace `components/OffenseSection.tsx`**

```tsx
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
```

- [ ] **Step 2: Verify build**

```bash
pnpm build
```

- [ ] **Step 3: Commit**

```bash
git add components/OffenseSection.tsx
git commit -m "chore: v4 shorthand migration in OffenseSection"
```

---

## Chunk 6: Footer + Page Composition

### Task 9: Update Footer — add Lockbox Quick Link, v4 shorthand

**Files:**
- Modify: `components/Footer.tsx`

**Changes:**
1. Add `{ label: "Lockbox", href: "#lockbox" }` to Quick Links array — between "Scolx" and "Infrastructure"
2. Migrate all `[var(--...)]` → `(--...)` v4 shorthand

- [ ] **Step 1: Replace `components/Footer.tsx`**

```tsx
export default function Footer() {
  return (
    <footer className="py-12 px-4 relative overflow-hidden border-t border-(--border-subtle)">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-headline text-xl mb-4 text-(--accent-emerald)">
              Hadi Cherkaoui
            </h3>
            <p className="text-(--text-muted) mb-4">
              Platform Developer · Zurich · Building in Rust and Go · k0s on bare metal.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/HadiCherkaoui"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-(--text-muted) hover:text-(--accent-emerald) transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://gitlab.cherkaoui.ch/HadiCherkaoui"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitLab"
                className="text-(--text-muted) hover:text-(--accent-emerald) transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.955 13.587l-1.342-4.135-2.664-8.189c-.135-.423-.73-.423-.867 0L16.418 9.45H7.582L4.918 1.263c-.135-.423-.73-.423-.867 0L1.387 9.452.045 13.587c-.121.375.014.789.331 1.023L12 23.054l11.624-8.443c.318-.235.452-.648.331-1.024" />
                </svg>
              </a>
              <a
                href="https://cherkaoui.ch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="PC Services"
                className="text-(--text-muted) hover:text-(--accent-emerald) transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-2M3 4h6l4 4v8a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
                </svg>
              </a>
              <a
                href="https://docs.cherkaoui.ch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Documentation"
                className="text-(--text-muted) hover:text-(--accent-emerald) transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </a>
              {/* TryHackMe */}
              <a
                href="https://tryhackme.com/p/HadiCherkaoui"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TryHackMe"
                className="text-(--text-muted) hover:text-(--accent-emerald) transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 80c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56zm80 304H176c-8.8 0-16-7.2-16-16v-16c0-44.2 35.8-80 80-80h32c44.2 0 80 35.8 80 80v16c0 8.8-7.2 16-16 16z" />
                </svg>
              </a>
              {/* Scolx */}
              <a
                href="https://scolx.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Scolx"
                className="text-(--text-muted) hover:text-(--accent-emerald) transition-colors font-tech text-xs tracking-wider"
              >
                Scolx
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-headline text-xl mb-4 text-(--accent-emerald)">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#hero" },
                { label: "Scolx", href: "#scolx" },
                { label: "Lockbox", href: "#lockbox" },
                { label: "Infrastructure", href: "#infrastructure" },
                { label: "Tools", href: "#tools" },
                { label: "Competition", href: "#competition" },
                { label: "Security", href: "#offense" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-(--text-muted) hover:text-(--accent-emerald) transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-headline text-xl mb-4 text-(--accent-emerald)">
              Contact
            </h3>
            <p className="text-(--text-muted) mb-4">
              Reach out for Rust, infrastructure, or collaboration.
            </p>
            <a
              href="mailto:contact@hadi.cherkaoui.ch"
              className="inline-flex items-center gap-2 text-(--text-muted) hover:text-(--accent-emerald) transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
              </svg>
              contact@hadi.cherkaoui.ch
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-(--border-subtle) text-center">
          <p className="text-(--text-muted)">
            &copy; {new Date().getFullYear()} Hadi Cherkaoui - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
pnpm build
```

- [ ] **Step 3: Commit**

```bash
git add components/Footer.tsx
git commit -m "feat: add Lockbox to footer Quick Links (8-item), v4 shorthand"
```

---

### Task 10: Update page.tsx — add LockboxSection

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace `app/page.tsx`**

```tsx
import HeroSection from "@/components/HeroSection";
import ScolxSection from "@/components/ScolxSection";
import LockboxSection from "@/components/LockboxSection";
import InfraSection from "@/components/InfraSection";
import ToolsSection from "@/components/ToolsSection";
import CompetitionSection from "@/components/CompetitionSection";
import OffenseSection from "@/components/OffenseSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ScolxSection />
      <LockboxSection />
      <InfraSection />
      <ToolsSection />
      <CompetitionSection />
      <OffenseSection />
      <ContactSection />
    </main>
  );
}
```

- [ ] **Step 2: Final build verification**

```bash
pnpm build
```

Expected: Clean build. All 8 section imports resolve. No TypeScript errors.

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add LockboxSection to page composition (8 sections total)"
```

---

## Verification Checklist

After all tasks complete:

```bash
# Final clean build
pnpm build

# TypeScript strict check
npx tsc --noEmit

# Dev server visual check
pnpm dev
```

**Visual checklist at localhost:3000:**
- [ ] Aurora gradient visible on left/right sides (amber top-left, purple bottom-right)
- [ ] Aurora animates slowly on reduced-motion OFF systems; static on reduced-motion ON
- [ ] Hero: circular photo (cropped at face) above role label
- [ ] Hero copy: "OSS advocate, AI/ML enthusiast" visible
- [ ] Scolx: amber accent, Rust/Axum/Leptos/PostgreSQL/k0s stack
- [ ] Lockbox: purple heading, "I build tools I actually use.", both GitLab links
- [ ] InfraSection: Network + Cluster cards (amber), Identity & Privacy card (purple)
- [ ] Identity & Privacy: purple tags (Authentik, SSO, Proton, E2EE, Zero-trust)
- [ ] ToolsSection: "Go, TypeScript & AI" card with AI/ML sentence
- [ ] CompetitionSection: purple, Regional level
- [ ] OffenseSection: purple, TryHackMe link
- [ ] Footer Quick Links: 8 items (includes Lockbox between Scolx and Infrastructure)
- [ ] No `[var(--...)]` v3 syntax in any modified component
- [ ] No console errors
- [ ] Mobile (375px): all sections render cleanly
