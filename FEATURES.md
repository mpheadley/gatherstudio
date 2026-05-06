# Gather Hub — Feature Inventory

## Shipped Features

### Homepage (`/`)
- Hero section with brand messaging
- Product card grid (2 columns, responsive to 1 on mobile)
- CopyCoach card: links to copystudio-smoky.vercel.app
- FlyrStudio card: links to copystudio-smoky.vercel.app/design
- Smooth scroll animations on all sections
- Call-to-action buttons with hover states

### SEO & Schema
- `robots.ts` — allows all, specifies canonical
- `sitemap.ts` — dynamic sitemap.xml
- `localBusinessSchema()` — Organization schema
- `speakableSchema()` — AEO markup for AI answer engines
- Open Graph images via og-image.png fallback
- Meta description + viewport tags

### GA4 Integration
- Cookie banner with consent gate (`CookieBanner.tsx`)
- Event tracking via `src/lib/ga4.ts` (pageview, link click)
- Measurement ID: stored in `NEXT_PUBLIC_GA4_ID`

### Navigation & Layout
- Sticky header with logo and mobile menu
- Footer with attribution rotation
- Privacy policy page (placeholder)
- 404 fallback page

## Architecture Notes

### Components
- `AnimateOnScroll` — per-element scroll reveal with stagger delays
- `JsonLd` — renders JSON-LD schema blocks in page head
- `CookieBanner` — GA4 consent management
- Standard Tailwind grid layout with CSS custom properties

### Design System
- Colors: green primary (#16a34a), neutrals, semantic tokens
- Typography: DM Sans (body + display)
- Spacing: 8px base unit, Tailwind scale
- Animations: fade-up on scroll, color transitions on hover
- Responsive breakpoints: mobile (375px), tablet, desktop

### Performance
- `next/image` for all hero images (if added)
- CSS animations, no JS-heavy libraries
- Static generation for all pages (prerendered at build time)
- Cached images via Vercel CDN

## Not Included (Intentional)

- No contact form (CopyCoach/FlyrStudio handle support)
- No pricing page (refer to product sites for tiers)
- No blog or case studies (Kickstart tier scope)
- No authentication (hub is public)
- No database (static marketing site)

## Next Phase (Post-Launch)

When the hub has proven traffic >50/week and conversion >2%:
- Add secondary products to grid (PetalStudio, Marketday, etc.)
- Case study carousel for successful vendor users
- Blog feed pulled from CopyCoach or Southern Legends
- Video demo embeds for each product
