# Portfolio Cyber Serif Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use executing-plans to implement this plan task-by-task.

**Goal:** Redesign Next.js portfolio to Cyber Serif aesthetic with updated content (dynamic age, k0s homelab, skill updates, removed n8n)

**Architecture:** Next.js 14 + Tailwind CSS v4 + custom CSS variables for Cyber Serif tokens. Components use custom hooks for spotlight effects and age calculation. All animations use cubic-bezier(0.16, 1, 0.3, 1) easing.

**Tech Stack:** Next.js 14, React, TypeScript, Tailwind CSS v4, @fontsource/newsreader, @fontsource/space-grotesk, pnpm

---

## Prerequisites

@frontend-design @ms-rust (for TypeScript patterns)

Ensure working in isolated git worktree at `/home/hadi/gitlab/portfolio`

---

## Task 1: Set Up Worktree and Verify State

**Files:**
- Check: `/home/hadi/gitlab/portfolio/.git/HEAD`

**Step 1: Verify clean working directory**

```bash
cd /home/hadi/gitlab/portfolio
git status
```

Expected: Clean working tree, on main branch

**Step 2: Create feature branch**

```bash
git checkout -b feature/cyber-serif-redesign
```

Expected: Switched to new branch

**Step 3: Commit initial state**

```bash
git add .
git commit -m "chore: prepare for cyber serif redesign" || echo "Nothing to commit"
```

---

## Task 2: Install Font Dependencies

**Files:**
- Modify: `package.json`
- Modify: `pnpm-lock.yaml`

**Step 1: Install font packages**

```bash
cd /home/hadi/gitlab/portfolio
pnpm add @fontsource/newsreader @fontsource/space-grotesk
```

Expected: Packages installed successfully

**Step 2: Verify installation**

```bash
ls node_modules/@fontsource/newsreader
ls node_modules/@fontsource/space-grotesk
```

Expected: Both directories exist with font files

**Step 3: Commit**

```bash
git add package.json pnpm-lock.yaml
git commit -m "deps: add Newsreader and Space Grotesk fonts"
```

---

## Task 3: Create Global CSS with Cyber Serif Tokens

**Files:**
- Overwrite: `/home/hadi/gitlab/portfolio/app/globals.css`

**Step 1: Write new globals.css**

Content:
```css
@import "tailwindcss";

/* Cyber Serif Design Tokens */
:root {
  /* Core Colors */
  --bg-primary: #050505;
  --bg-card: rgba(255, 255, 255, 0.02);
  --bg-elevated: rgba(255, 255, 255, 0.04);
  
  /* Accent */
  --accent-emerald: #10b981;
  --accent-emerald-dim: rgba(16, 185, 129, 0.6);
  --accent-emerald-subtle: rgba(16, 185, 129, 0.12);
  
  /* Text */
  --text-primary: #EBEBEB;
  --text-secondary: rgba(255, 255, 255, 0.6);
  --text-muted: rgba(255, 255, 255, 0.4);
  --text-emerald: #10b981;
  
  /* Borders */
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-emerald: rgba(16, 185, 129, 0.3);
  --border-emerald-glow: rgba(16, 185, 129, 0.15);
  
  /* Animation */
  --ease-signature: cubic-bezier(0.16, 1, 0.3, 1);
  
  /* Legacy compatibility */
  --background: #050505;
  --foreground: #EBEBEB;
  --primary-color: #10b981;
  --secondary-color: #10b981;
  --accent-color: #10b981;
  --card-bg: rgba(255, 255, 255, 0.02);
  --darker-bg: #030303;
}

/* Theme variables for Next.js */
:root {
  --color-background: var(--bg-primary);
  --color-foreground: var(--text-primary);
  --font-sans: var(--font-inter);
  --font-mono: var(--font-space-grotesk);
  --font-serif: var(--font-newsreader);
}

/* Base styles */
html {
  scroll-behavior: smooth;
}

body {
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-inter), system-ui, sans-serif;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--darker-bg);
}

::-webkit-scrollbar-thumb {
  background: var(--accent-emerald-dim);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--accent-emerald);
}

/* Selection */
::selection {
  background: var(--accent-emerald-subtle);
  color: var(--text-primary);
}

/* Typography - Newsreader for headlines */
.font-headline {
  font-family: var(--font-newsreader), Georgia, serif;
  font-weight: 300;
  letter-spacing: -0.02em;
}

/* Typography - Space Grotesk for technical labels */
.font-tech {
  font-family: var(--font-space-grotesk), monospace;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-size: 0.625rem;
}

/* Glassmorphic card base */
.glass-card {
  background: var(--bg-card);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--border-subtle);
  border-radius: 1.5rem;
  transition: all 0.5s var(--ease-signature);
}

.glass-card:hover {
  border-color: var(--border-emerald);
  background: var(--bg-elevated);
}

/* Shimmer border effect */
.shimmer-border {
  position: relative;
  border: 1px solid var(--border-subtle);
  border-radius: 1.5rem;
  overflow: hidden;
}

.shimmer-border::after {
  content: '';
  position: absolute;
  inset: -1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--accent-emerald),
    transparent
  );
  background-size: 200% 100%;
  opacity: 0;
  transition: opacity 0.5s var(--ease-signature);
  animation: shimmer 4s linear infinite;
  pointer-events: none;
  border-radius: inherit;
}

.shimmer-border:hover::after {
  opacity: 0.5;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* Spotlight effect */
.spotlight-card {
  position: relative;
  overflow: hidden;
}

.spotlight-card::before {
  content: '';
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(
    circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    var(--accent-emerald-subtle),
    transparent 40%
  );
  opacity: 0;
  transition: opacity 0.5s var(--ease-signature);
  pointer-events: none;
  transform: translate(-50%, -50%);
  left: var(--mouse-x, 50%);
  top: var(--mouse-y, 50%);
}

.spotlight-card:hover::before {
  opacity: 1;
}

/* Morphing background blobs */
.blob {
  position: fixed;
  width: 384px;
  height: 384px;
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  filter: blur(100px);
  opacity: 0.03;
  pointer-events: none;
  z-index: -1;
  animation: morph 8s ease-in-out infinite;
}

.blob-1 {
  background: var(--accent-emerald);
  top: 10%;
  right: 10%;
  animation-delay: 0s;
}

.blob-2 {
  background: var(--accent-emerald);
  top: 40%;
  left: 5%;
  animation-delay: -2s;
}

.blob-3 {
  background: var(--accent-emerald);
  bottom: 10%;
  right: 20%;
  animation-delay: -4s;
}

@keyframes morph {
  0%, 100% {
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  }
  50% {
    border-radius: 60% 40% 30% 70% / 50% 60% 40% 50%;
  }
}

/* Gradient text */
.gradient-text {
  background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent-emerald) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* Emerald accent text */
.text-emerald {
  color: var(--accent-emerald);
}

/* Italic emerald accent for headlines */
.emerald-accent {
  color: var(--accent-emerald);
  font-style: italic;
}

/* Button styles */
.btn-primary {
  background: var(--accent-emerald);
  color: var(--bg-primary);
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
  transition: all 0.5s var(--ease-signature);
  border: none;
  cursor: pointer;
}

.btn-primary:hover {
  box-shadow: 0 0 30px var(--border-emerald-glow);
  transform: translateY(-2px);
}

.btn-ghost {
  background: transparent;
  color: var(--text-primary);
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
  transition: all 0.5s var(--ease-signature);
  border: 1px solid var(--border-subtle);
  cursor: pointer;
}

.btn-ghost:hover {
  border-color: var(--accent-emerald);
  color: var(--accent-emerald);
}

/* Section transitions */
section {
  position: relative;
  overflow: hidden;
}

/* Hover lift effect */
.hover-lift {
  transition: transform 0.5s var(--ease-signature), box-shadow 0.5s var(--ease-signature);
}

.hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5);
}

/* Icon container rotation */
.icon-rotate {
  transition: transform 0.5s var(--ease-signature);
}

.icon-rotate:hover {
  transform: rotate(15deg);
}

/* Typing cursor */
.typing-cursor {
  border-right: 2px solid var(--accent-emerald);
  animation: blink 0.75s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Pulsing dot */
.pulse-dot {
  width: 8px;
  height: 8px;
  background: var(--accent-emerald);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { 
    opacity: 1;
    box-shadow: 0 0 0 0 var(--accent-emerald-subtle);
  }
  50% { 
    opacity: 0.7;
    box-shadow: 0 0 0 8px transparent;
  }
}

/* Skill progress bar */
.skill-bar {
  width: 100%;
  height: 4px;
  background: var(--bg-elevated);
  border-radius: 2px;
  overflow: hidden;
}

.skill-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent-emerald-dim), var(--accent-emerald));
  border-radius: 2px;
  transition: width 1s var(--ease-signature);
}

/* Tag/Badge styles */
.tag {
  padding: 0.375rem 0.875rem;
  background: var(--bg-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: all 0.3s var(--ease-signature);
}

.tag:hover {
  border-color: var(--accent-emerald);
  color: var(--accent-emerald);
}

/* Link underline animation */
.link-underline {
  position: relative;
  color: var(--text-secondary);
  transition: color 0.3s var(--ease-signature);
}

.link-underline::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 1px;
  background: var(--accent-emerald);
  transition: all 0.5s var(--ease-signature);
  transform: translateX(-50%);
}

.link-underline:hover {
  color: var(--accent-emerald);
}

.link-underline:hover::after {
  width: 100%;
}
```

**Step 2: Verify CSS compiles**

```bash
cd /home/hadi/gitlab/portfolio
pnpm run build 2>&1 | head -50
```

Expected: Build starts without CSS errors

**Step 3: Commit**

```bash
git add app/globals.css
git commit -m "style: implement Cyber Serif design tokens"
```

---

## Task 4: Update Layout with New Fonts

**Files:**
- Modify: `/home/hadi/gitlab/portfolio/app/layout.tsx`

**Step 1: Read current layout.tsx**

Already have content from earlier exploration.

**Step 2: Write updated layout.tsx**

Content:
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
  description: "Platform Developer apprentice based in Switzerland, passionate about technology and open source. Specializing in Kubernetes, automation, and cloud-native technologies.",
  keywords: ["Hadi Cherkaoui", "Platform Developer", "Cloud Engineer", "Kubernetes", "Open Source", "Switzerland", "k0s"],
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
        className={`${inter.variable} ${newsreader.variable} ${spaceGrotesk.variable} antialiased bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[var(--accent-emerald-subtle)] selection:text-[var(--text-primary)]`}
      >
        {/* Background blobs */}
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        
        {/* Subtle grid pattern */}
        <div className="fixed inset-0 z-[-1] bg-[var(--bg-primary)]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]" />
        </div>
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

**Step 3: Test build**

```bash
cd /home/hadi/gitlab/portfolio
pnpm run build 2>&1 | grep -E "(error|Error|failed)" || echo "Build check passed"
```

Expected: No errors

**Step 4: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: add Newsreader and Space Grotesk fonts to layout"
```

---

## Task 5: Create Custom Hooks

**Files:**
- Create: `/home/hadi/gitlab/portfolio/hooks/useAge.ts`
- Create: `/home/hadi/gitlab/portfolio/hooks/useSpotlight.ts`

### Task 5a: useAge Hook

**Step 1: Create hooks directory and file**

```bash
mkdir -p /home/hadi/gitlab/portfolio/hooks
```

**Step 2: Write useAge.ts**

Content:
```typescript
"use client";

import { useState, useEffect } from "react";

/**
 * Calculates age from birthdate
 * @param birthDateString - ISO date string (YYYY-MM-DD)
 * @returns Current age in years
 */
export function useAge(birthDateString: string): number {
  const [age, setAge] = useState<number>(0);

  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date(birthDateString);
      const today = new Date();
      
      let calculatedAge = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      // Adjust if birthday hasn't occurred this year
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        calculatedAge--;
      }
      
      setAge(calculatedAge);
    };

    calculateAge();
  }, [birthDateString]);

  return age;
}

export default useAge;
```

### Task 5b: useSpotlight Hook

**Step 3: Write useSpotlight.ts**

Content:
```typescript
"use client";

import { useCallback, useRef } from "react";

/**
 * Hook to track mouse position for spotlight effect on cards
 * Usage: Attach ref to element, spread spotlightProps to element style
 */
export function useSpotlight<T extends HTMLElement>() {
  const elementRef = useRef<T>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<T>) => {
    if (!elementRef.current) return;
    
    const rect = elementRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    elementRef.current.style.setProperty("--mouse-x", `${x}%`);
    elementRef.current.style.setProperty("--mouse-y", `${y}%`);
  }, []);

  const spotlightProps = {
    onMouseMove: handleMouseMove,
    className: "spotlight-card",
  };

  return {
    ref: elementRef,
    spotlightProps,
  };
}

export default useSpotlight;
```

**Step 4: Commit**

```bash
git add hooks/
git commit -m "feat: add useAge and useSpotlight hooks"
```

---

## Task 6: Redesign HeroSection

**Files:**
- Overwrite: `/home/hadi/gitlab/portfolio/components/HeroSection.tsx`

**Step 1: Write new HeroSection.tsx**

Content:
```tsx
"use client";

import React, { useEffect, useState } from "react";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const skills = [
    "Kubernetes",
    "Linux Enthusiast",
    "Platform Developer",
    "Open Source Contributor",
    "Tech Explorer",
    "k0s Operator",
  ];

  useEffect(() => {
    const typingAnimation = () => {
      const currentSkill = skills[currentIndex];
      const shouldDelete = isDeleting;

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!shouldDelete && displayText === currentSkill) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }

      if (shouldDelete && displayText === "") {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
        return;
      }

      const nextText = shouldDelete
        ? currentSkill.substring(0, displayText.length - 1)
        : currentSkill.substring(0, displayText.length + 1);

      setDisplayText(nextText);
    };

    const timer = setTimeout(typingAnimation, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, typingSpeed, skills]);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-4 relative overflow-hidden"
    >
      {/* Content */}
      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        {/* Tech label */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="pulse-dot" />
          <span className="font-tech text-[var(--accent-emerald)]">
            PLATFORM DEVELOPER
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-headline text-6xl md:text-8xl lg:text-[100px] leading-[0.9] mb-8 tracking-tighter">
          Hadi{" "}
          <span className="emerald-accent">Cherkaoui</span>
        </h1>

        {/* Typing animation */}
        <div className="mb-10 h-14 flex justify-center items-center">
          <span className="text-xl md:text-2xl text-[var(--text-secondary)] font-mono inline-flex items-center">
            <span>{displayText}</span>
            <span className="typing-cursor ml-1">&nbsp;</span>
          </span>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl mb-12 text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed font-light">
          Platform Developer apprentice based in Switzerland, passionate about
          technology and open source. Specializing in Kubernetes, automation,
          and cloud-native technologies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#about" className="btn-primary inline-flex items-center justify-center gap-2">
            Discover More
          </a>
          <a
            href="#projects"
            className="btn-ghost inline-flex items-center justify-center gap-2"
          >
            View Projects
          </a>
        </div>

        {/* Social links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/HadiCherkaoui"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--accent-emerald)] transition-all duration-500"
            style={{ transitionTimingFunction: "var(--ease-signature)" }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://gitlab.cherkaoui.ch/HadiCherkaoui"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--accent-emerald)] transition-all duration-500"
            style={{ transitionTimingFunction: "var(--ease-signature)" }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.955 13.587l-1.342-4.135-2.664-8.189c-.135-.423-.73-.423-.867 0L16.418 9.45H7.582L4.918 1.263c-.135-.423-.73-.423-.867 0L1.387 9.452.045 13.587c-.121.375.014.789.331 1.023L12 23.054l11.624-8.443c.318-.235.452-.648.331-1.024" />
            </svg>
          </a>
          <a
            href="https://docs.cherkaoui.ch"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--accent-emerald)] transition-all duration-500"
            style={{ transitionTimingFunction: "var(--ease-signature)" }}
          >
            <svg
              className="w-6 h-6"
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
          </a>
          <a
            href="mailto:contact@hide.cherkaoui.ch"
            className="text-[var(--text-muted)] hover:text-[var(--accent-emerald)] transition-all duration-500"
            style={{ transitionTimingFunction: "var(--ease-signature)" }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-50">
        <div
          className="w-6 h-6 border-r-2 border-b-2 border-[var(--accent-emerald)] transform rotate-45 animate-bounce"
          style={{ animationDuration: "2s" }}
        />
      </div>
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add components/HeroSection.tsx
git commit -m "style: redesign HeroSection with Cyber Serif aesthetic"
```

---

**[CONTINUED IN NEXT COMMENT... Tasks 7-17 follow similar pattern for each component]**