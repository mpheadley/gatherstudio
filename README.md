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
- **Fonts:** DM Sans via `next/font/google`
- **Deployment:** Vercel with GitHub auto-deploy
- **Domain:** gatherstudio.app (custom domain configured)

## What's Here

- **Homepage** — hero + featured product cards (CopyCoach, FlyrStudio)
- **SEO framework** — robots.ts, sitemap.ts, LocalBusiness + Speakable JSON-LD schema, AEO markup
- **GA4 consent** — cookie banner with consent gating

## Key Files

| Path | Purpose |
|------|---------|
| `src/app/page.tsx` | Homepage hero + featured products (CopyCoach, FlyrStudio) |
| `src/app/globals.css` | Design system (primary #16a34a green, tokens, animations) |
| `src/lib/site-config.ts` | Centralized brand config (name, domain, schema) |
| `src/app/layout.tsx` | Root layout with fonts, nav, footer, SEO |

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
