# Portfolio Phase 2 — Aurora, Photo, Lockbox, Security

**Date:** 2026-03-13
**Branch:** `feature/direction-c-redesign`
**Approach:** A (Integrated additions)

---

## Overview

Four additions to the Direction C portfolio redesign:

1. **Aurora background** — animated gradient fills empty viewport sides
2. **Photo in hero** — personal touch, circular avatar
3. **LockboxSection** — new claim section for the k8s secrets manager project
4. **Security card in InfraSection** — Authentik SSO + Proton privacy practices

---

## 1. Aurora Background

### What
Replace the 3 blob divs in `app/layout.tsx` with a new `.aurora-bg` container. Two large blurred radial gradient layers — amber (top-left origin) and purple (bottom-right origin) — that slowly drift across the viewport.

**Prerequisite:** `/public/thewalk.jpg` already confirmed present in the worktree.

### Implementation
- **Files:** `app/globals.css` (add CSS) + `app/layout.tsx` (swap markup)

**In `layout.tsx` — remove these 3 lines:**
```tsx
<div className="blob blob-1" />
<div className="blob blob-2" />
<div className="blob blob-3" />
```

**Replace with:**
```tsx
<div className="aurora-bg">
  <div className="aurora-amber" />
  <div className="aurora-purple" />
</div>
```

**Keep the grid pattern div unchanged** (the `fixed inset-0 z-[-1]` div with the linear-gradient grid). The `.aurora-bg` div should be placed **before** the grid pattern div in the markup — aurora sits behind the grid.

### CSS spec

Add to `app/globals.css`:

```css
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

**Note:** `animation:` properties are placed exclusively inside the `prefers-reduced-motion: no-preference` media query. The base `.aurora-amber` and `.aurora-purple` rules contain no `animation:` property — static gradients show on reduced-motion systems.

---

## 2. Photo in Hero

### What
Small circular avatar above the role label in `components/HeroSection.tsx`.

### Implementation
- Use Next.js `<Image>` component from `next/image` — fully compatible with RSC (App Router)
- Source: `/thewalk.jpg` (full-body walking shot — face in upper ~25% of frame)
- Size: 80×80px rendered, `priority` prop (above the fold)
- Classes: `rounded-full object-cover border-2 border-[var(--accent-amber)]`
- `objectPosition: "top"` via inline style to crop on face

**Markup** — add before the role label `<div className="mb-6 flex items-center gap-3">`:

```tsx
import Image from "next/image";

// ...

<div className="mb-8">
  <Image
    src="/thewalk.jpg"
    alt="Hadi Cherkaoui"
    width={80}
    height={80}
    className="rounded-full object-cover border-2 border-[var(--accent-amber)]"
    style={{ objectPosition: "top" }}
    priority
  />
</div>
```

**Note:** `HeroSection` is a static RSC (no `"use client"`, no `import React`). Adding `<Image>` does not change this — `next/image` is RSC-compatible. Do NOT add `"use client"`.

---

## 3. LockboxSection

### What
New `components/LockboxSection.tsx`. Claim: **"I build tools I actually use."**

Lockbox is a k8s-native E2EE secrets manager (Rust, Hadi's first Rust project) with a companion controller (Go) that syncs secrets directly into the cluster as native k8s Secrets.

**Context:**
- Ed25519 keypair auth — no master password, SSH-style
- AES-256-GCM encryption, delta-sync API
- Go controller uses kubebuilder/controller-runtime
- Controller tags managed secrets `lockbox.io/managed: true`
- No secrets in git, no manual `kubectl apply`

### Component patterns (follow exactly)
- `"use client"` — YES (uses `useSpotlight`)
- `import React` — NO (modern JSX transform)
- `<SectionWrapper id="lockbox">` — inner content in `<div>`, not `<section>`
- Spotlight: `onMouseMove={spotlightProps.onMouseMove}` + `className="glass-card spotlight-card p-8 md:p-10"`

### Claim heading split
```tsx
<h2 className="font-headline text-4xl md:text-5xl lg:text-6xl tracking-tight">
  I build tools{" "}
  <span className="amber-accent">I actually use.</span>
</h2>
```

### Two-link markup (below description, flex row)
```tsx
<div className="mt-6 flex flex-wrap gap-4">
  <a
    href="https://gitlab.cherkaoui.ch/HadiCherkaoui/lockbox"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-[var(--accent-amber)] hover:text-[var(--text-primary)] transition-colors font-medium"
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
    className="inline-flex items-center gap-2 text-[var(--accent-amber)] hover:text-[var(--text-primary)] transition-colors font-medium"
  >
    <span>Controller on GitLab</span>
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </a>
</div>
```

### Description copy
```
Lockbox is my first Rust project — an E2EE secrets manager built for k8s and automation.
Ed25519 keypair auth (no master password, SSH-style), AES-256-GCM encryption, and a
delta-sync API designed for controllers.

The companion Go controller watches your cluster, pulls changed secrets from Lockbox,
decrypts them, and injects them as native k8s Secrets tagged lockbox.io/managed.
No secrets in git. No manual kubectl apply. Use lbx to add, update, or remove a secret
and the cluster syncs automatically.
```

### Stack list (right column, same pattern as ScolxSection)
| Name | Description |
|------|-------------|
| Rust | Core language |
| Ed25519 | Keypair auth |
| AES-256-GCM | Encryption |
| Go | Controller |
| kubebuilder | k8s API |

---

## 4. Security Card in InfraSection

### What
Third `glass-card` added to `components/InfraSection.tsx`.

### Layout — 2+1 structure
The existing `grid md:grid-cols-2 gap-8 mb-8` div stays unchanged (Network + Cluster cards). The third card is placed **as a sibling div** after the closing `</div>` of the grid, with `mb-8` added between them. Do NOT put it inside the grid div.

```tsx
{/* Existing grid — unchanged */}
<div className="grid md:grid-cols-2 gap-8 mb-8">
  {/* Network card */}
  {/* Cluster card */}
</div>

{/* Third card — full width, below grid */}
<div className="glass-card p-6 hover-lift mb-8">
  {/* Security card content */}
</div>
```

**Interaction style:** `hover-lift` only — same as the existing two cards. Do NOT add `spotlight-card` or `useSpotlight`. InfraSection stays a static RSC (no `"use client"`).

### Content
**Heading (font-tech, amber — same pattern as other two cards):**
```tsx
<h3 className="font-tech text-xs tracking-widest uppercase text-[var(--accent-amber)] mb-4">
  Identity & Privacy
</h3>
```

**Prose:**
```
I don't extend trust by convention. Every self-hosted service authenticates through
Authentik — my self-hosted SSO. For cloud I use Proton: Swiss jurisdiction, open-source,
E2EE by default. Proton Pass for passwords. Proton Drive for offsite backups. Nothing
sensitive touches a vendor I can't audit.
```

**Tags — same token style as existing cards** (`bg-[var(--accent-emerald-subtle)] text-[var(--accent-emerald)]`):
```tsx
{["Authentik", "SSO", "Proton", "E2EE", "Zero-trust"].map((t) => (
  <span
    key={t}
    className="px-2 py-1 bg-[var(--accent-emerald-subtle)] text-[var(--accent-emerald)] rounded-full text-xs font-medium"
  >
    {t}
  </span>
))}
```

---

## 5. Page & Footer Updates

### app/page.tsx — add LockboxSection
```tsx
import LockboxSection from "@/components/LockboxSection";

// In JSX, after <ScolxSection />:
<ScolxSection />
<LockboxSection />
<InfraSection />
```

### components/Footer.tsx — Quick Links final array
Replace the existing Quick Links array with this complete ordered list:
```tsx
[
  { label: "Home", href: "#hero" },
  { label: "Scolx", href: "#scolx" },
  { label: "Lockbox", href: "#lockbox" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Tools", href: "#tools" },
  { label: "Competition", href: "#competition" },
  { label: "Security", href: "#offense" },
  { label: "Contact", href: "#contact" },
]
```

---

## Files Changed Summary

| File | Change |
|------|--------|
| `app/globals.css` | Add `.aurora-bg`, `.aurora-amber`, `.aurora-purple`, keyframes with `prefers-reduced-motion` guard |
| `app/layout.tsx` | Replace 3 blob divs with aurora markup (keep grid div) |
| `components/HeroSection.tsx` | Add `<Image>` avatar (80px, `object-position: top`) above role label |
| `components/LockboxSection.tsx` | **CREATE** — client component, useSpotlight, SectionWrapper id="lockbox" |
| `components/InfraSection.tsx` | Add third card (2+1 layout, hover-lift, no spotlight, no use client) |
| `app/page.tsx` | Add `<LockboxSection />` after `<ScolxSection />` |
| `components/Footer.tsx` | Replace Quick Links array with 8-item list (includes Lockbox) |

---

## Non-Goals

- No changes to ContactSection, ToolsSection, CompetitionSection, OffenseSection
- No new dependencies (no canvas, no particle libraries)
- No changes to the color system (tokens already set in Phase 1)
- No changes to the form/webhook logic in ContactSection
