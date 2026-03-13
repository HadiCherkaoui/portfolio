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
Replace the 3 small blob divs in `app/layout.tsx` with a new `.aurora-bg` container. Two large blurred radial gradient layers — amber (top-left origin) and purple (bottom-right origin) — that slowly drift across the viewport.

### Implementation
- **Location:** `app/globals.css` (new CSS classes) + `app/layout.tsx` (markup swap)
- Remove: `<div className="blob blob-1" />`, `<div className="blob blob-2" />`, `<div className="blob blob-3" />`
- Add: `<div className="aurora-bg"><div className="aurora-amber" /><div className="aurora-purple" /></div>`

### CSS spec
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
  animation: aurora-drift-1 30s ease-in-out infinite alternate;
}

.aurora-purple {
  position: absolute;
  bottom: -15%;
  right: -10%;
  width: 75vw;
  height: 70vh;
  background: radial-gradient(ellipse at center, rgba(167, 139, 250, 0.12) 0%, transparent 70%);
  filter: blur(80px);
  animation: aurora-drift-2 38s ease-in-out infinite alternate;
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

### Constraints
- No new JS/dependencies — pure CSS
- Must not affect `z-index` of content (content is `z-10` or higher)
- `pointer-events: none` so aurora never blocks clicks
- `prefers-reduced-motion`: wrap animations in `@media (prefers-reduced-motion: no-preference)`

---

## 2. Photo in Hero

### What
Small circular avatar above the role label in `components/HeroSection.tsx`.

### Implementation
- Use Next.js `<Image>` component (`next/image`)
- Source: `/thewalk.jpg` (portrait, full-body walking shot — face in upper 25%)
- Size: 80×80px
- Classes: `rounded-full object-cover border-2 border-[var(--accent-amber)]`
- `object-position: top` to crop on face
- Placed above the role-label `<div>` in the existing layout

### Markup
```tsx
import Image from "next/image";

// Above role label:
<div className="mb-6">
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

---

## 3. LockboxSection

### What
New `components/LockboxSection.tsx`. Claim: **"I build tools I actually use."**

Lockbox is a k8s-native E2EE secrets manager (Rust) with a companion controller (Go) that syncs secrets directly into the cluster as native k8s Secrets.

**Context:**
- Lockbox is Hadi's first Rust project
- Ed25519 keypair auth — no master password, SSH-style
- AES-256-GCM encryption, delta-sync API designed for automation
- The Go controller (`lockbox-k8s-controller`) uses kubebuilder/controller-runtime
- Controller watches Lockbox via delta-sync, decrypts secrets, creates/updates/deletes k8s `Secret` objects tagged `lockbox.io/managed`
- Result: no secrets in git, no manual `kubectl apply`, use `lbx` CLI to manage

### Structure
Follows the same pattern as `ScolxSection.tsx`:
- `<SectionWrapper id="lockbox">`
- Amber claim header with "Builds" category label
- Single `glass-card spotlight-card` proof card with `useSpotlight`
- Two-column layout: description left (3/5 width), stack list right (2/5 width)

### Copy (description)
```
Lockbox is my first Rust project — an E2EE secrets manager built for k8s and automation.
Ed25519 keypair auth (no master password, SSH-style), AES-256-GCM encryption, and a
delta-sync API designed for controllers.

The companion Go controller watches your cluster, pulls changed secrets from Lockbox,
decrypts them, and injects them as native k8s Secrets tagged lockbox.io/managed.
No secrets in git. No manual kubectl apply. Use lbx to add, update, or remove a secret
and the cluster syncs automatically.
```

### Stack list
| Name | Description |
|------|-------------|
| Rust | Core language |
| Ed25519 | Keypair auth |
| AES-256-GCM | Encryption |
| Go | Controller |
| kubebuilder | k8s API |

### Links
- `https://gitlab.cherkaoui.ch/HadiCherkaoui/lockbox` — "Lockbox on GitLab"
- `https://gitlab.cherkaoui.ch/HadiCherkaoui/lockbox-k8s-controller` — "Controller on GitLab"

### Page placement
- `app/page.tsx`: add `<LockboxSection />` after `<ScolxSection />`
- `components/Footer.tsx`: add `{ label: "Lockbox", href: "#lockbox" }` to Quick Links after Scolx

---

## 4. Security Card in InfraSection

### What
Third `glass-card` added to `components/InfraSection.tsx`. The existing two-card grid becomes a three-card layout (`md:grid-cols-3` or `md:grid-cols-2` with the third card spanning full width below).

**Preferred layout:** Keep `md:grid-cols-2` for the top row (Network + Cluster), third card full-width below. This avoids cramping the three cards.

### Content
**Heading (font-tech, amber):** `Identity & Privacy`

**Prose:**
```
I don't extend trust by convention. Every self-hosted service authenticates through
Authentik — my self-hosted SSO. For cloud I use Proton: Swiss jurisdiction, open-source,
E2EE by default. Proton Pass for passwords. Proton Drive for offsite backups. Nothing
sensitive touches a vendor I can't audit.
```

**Tags:** `["Authentik", "SSO", "Proton", "E2EE", "Zero-trust"]`

---

## Files Changed

| File | Change |
|------|--------|
| `app/globals.css` | Add `.aurora-bg`, `.aurora-amber`, `.aurora-purple`, keyframes |
| `app/layout.tsx` | Replace 3 blob divs with aurora markup |
| `components/HeroSection.tsx` | Add `<Image>` avatar above role label |
| `components/LockboxSection.tsx` | **CREATE** — new claim section |
| `components/InfraSection.tsx` | Add third security card |
| `app/page.tsx` | Add `<LockboxSection />` after `<ScolxSection />` |
| `components/Footer.tsx` | Add Lockbox to Quick Links |

---

## Non-Goals

- No changes to ContactSection, ToolsSection, CompetitionSection, OffenseSection
- No new dependencies (no canvas, no particle libraries)
- No changes to the color system (tokens already set in Phase 1)
- No changes to the form/webhook logic in ContactSection
