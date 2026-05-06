# GatherStudio Hub — The Unified Platform for Organizers

Marketing hub for the Gather suite: 15+ specialized SaaS applications across wedding studios, market & vendor tools, and coaching/community verticals.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 + CSS custom properties
- **Fonts:** Fraunces (headings), Outfit (body) via `next/font/google`
- **Deployment:** Vercel with GitHub auto-deploy
- **Domain:** gatherstudio.app (custom domain configured)

## What's Here

- **Homepage** — hero + all 15+ studio app cards organized by vertical
- **Products page** — full directory of all Gather apps with tier pricing, features, CTAs
- **Pricing page** — 3-tier founding member model (Essential/$19→$29, Professional/$49→$69, Bundle/$99→$149)
- **About page** — founder story + 6 core values
- **Contact page** — Formspree form
- **Privacy page** — policy placeholder
- **SEO framework** — robots.ts, sitemap.ts, LocalBusiness + Speakable JSON-LD schema, AEO markup
- **GA4 consent** — cookie banner with consent gating

## Key Files

| Path | Purpose |
|------|---------|
| `src/app/page.tsx` | Homepage with 15+ product cards by vertical |
| `src/app/products/page.tsx` | Product directory with tier/pricing/features per app |
| `src/app/pricing/page.tsx` | Founding member pricing + FAQ |
| `src/app/about/page.tsx` | Founder story + values grid |
| `src/app/globals.css` | Design system (primary #E8722A, tokens, animations) |
| `src/lib/site-config.ts` | Centralized brand config (name, domain, nav items, schema) |
| `src/lib/site-config.ts` | All client data — single source of truth |

## Environment Variables

- `NEXT_PUBLIC_GA4_ID` — Google Analytics 4 measurement ID (optional)

## Accounts Wired

- Vercel: deployed, auto-deploy via GitHub
- GitHub: mpheadley/gather (private monorepo)
- Custom domain: gatherstudio.app → Vercel (configured May 6, 2026)

## Live URLs

- **Production:** https://gatherstudio.app ✓ (custom domain, May 6, 2026)
- **Preview:** https://gatherstudio.vercel.app (auto-deployed from main)
- **Lighthouse:** All categories 90+ (Accessibility 91, Best Practices 100, SEO 100, Agentic Browsing 100)

## Architecture Notes

- **No authentication** — public marketing hub (all routes accessible)
- **No database** — static content, site-config driven
- **No Clerk** — removed in commit 8430ae5, not needed for marketing-only direction
- **CSS-first animations** — ScrollReveal, AnimateOnScroll components (no GSAP)
- **Image optimization** — WebP format, responsive design (375px mobile target)
- **Schema:** Organization + LocalBusiness + Speakable for AI engines + AEO FAQPage
