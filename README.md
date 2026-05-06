# Gather Hub — AI Studio Tools Hub

Unified marketing hub for the Gather suite of creative SaaS applications.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Deployment:** Vercel
- **Domain:** gatherstudio.app

## What's Here

- Homepage showcasing CopyCoach (AI captions) and FlyrStudio (AI design)
- Minimal landing page tier (Kickstart)
- Navigation to copystudio-smoky.vercel.app for the actual tools
- SEO framework (robots.ts, sitemap.ts, JSON-LD schema)
- Cookie banner for GA4 consent

## Key Files

| Path | Purpose |
|------|---------|
| `src/app/page.tsx` | Homepage with hero + product cards |
| `src/app/globals.css` | Design system (colors, typography, animations) |
| `src/lib/site-config.ts` | Centralized config (brand name, schema type, GA4 ID) |
| `src/lib/metadata.ts` | SEO metadata helpers |

## Environment Variables

- `NEXT_PUBLIC_GA4_ID` — Google Analytics 4 measurement ID (optional)

## Live URL

https://gatherstudio.app

## Design Brief

Full design specifications in `DESIGN_BRIEF.md` (Phases 1-5 complete).

- Primary color: green (#16a34a)
- Typography: DM Sans (body and display)
- Products: CopyCoach + FlyrStudio featured on hero
