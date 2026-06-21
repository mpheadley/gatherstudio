# GatherStudio Hub — Feature Inventory

## Shipped Features

### Homepage (`/`)
- Hero: "The Gather Suite — AI Studio Tools for Creatives"
- Subheadline: "Captions, graphics, proposals, and more. All in one place."
- Featured products section: 2 main apps (CopyCoach for captions, FlyrStudio for graphics)
- Per-card: icon, title, description, CTA link
- CTA buttons: primary "Explore CopyCoach", secondary "See All Products"
- ScrollReveal animations on hero and product cards
- SEO: LocalBusiness schema, Speakable markup for AI engines

### SEO & Schema
- `robots.ts` — allows all, specifies canonical
- `sitemap.ts` — hardcoded pages: /, /products, /pricing, /about, /contact, /privacy (priorities 1.0–0.3)
- `localBusinessSchema()` — Organization schema with brand descriptor
- `speakableSchema()` — AEO markup for AI answer engines (hero descriptor, Speakable wrapper on key content)
- Open Graph image: og-image.webp (1200x630, generated, brand orange + white text)
- Assets: favicon.ico (32x32, orange G), apple-icon.png (180x180, iOS home screen)

### GA4 Integration
- Cookie banner: consent gate with localStorage tracking
- Event tracking via `src/lib/ga4.ts`: pageview, link click, form submit
- Measurement ID: `NEXT_PUBLIC_GA4_ID` (optional, GA disabled if unset)

### Navigation & Layout
- Sticky header (Nav.tsx): logo, nav items (Products, Pricing, About), mobile hamburger menu
- Footer: "Made by Headley Web" rotating attribution link
- Privacy policy link in footer
- Skip-to-content link (sr-only, keyboard accessible)
- 404 fallback page (not shipped, would render on 404)

## Architecture Notes

### Components (pre-built, not recreated)
- `Nav` — sticky header with mobile menu
- `Footer` — footer with attribution rotation
- `CookieBanner` — GA4 consent management
- `ScrollReveal` — global scroll observer
- `AnimateOnScroll` — per-element scroll wrapper
- `JsonLd` — renders JSON-LD `<script>` tags

### Styling
- **Colors:** primary #16a34a (green), dark #111827, light #f3f4f6, neutrals gray scale
- **Typography:** DM Sans (system font for headings and body)
- **Design tokens:** CSS custom properties in globals.css
- **Spacing:** Tailwind scale (8px base unit)
- **Animations:** fade-up on scroll, slide transitions, button hover states
- **Responsive:** mobile (375px), tablet, desktop

### Performance
- Static generation: all pages prerendered at build time
- Image format: WebP (next/image compatible)
- CSS animations only (no JavaScript-heavy libraries)
- Vercel CDN caching for images
- Lighthouse: 90+ all categories (A11y 91, BP 100, SEO 100, Agentic Browsing 100)

## Not Included (Intentional)

- No authentication (public marketing hub)
- No database (static content, site-config driven)
- No blog (would dilute positioning — future post-launch)
- No case studies (launch with proof of concept, add after user testimonials)
- No video embeds (launch with cards, add per-app after review)
- No Clerk middleware (removed to align with marketing-hub-only direction)

## Architecture Decisions

- **Clerk removed:** Site was simplified from authenticated dashboard hub to marketing hub (commit 8430ae5). Auth infrastructure (proxy.ts, /auth routes) was removed — not needed.
- **Sitemap hardcoded:** Removed tier-based conditional logic (siteConfig.tier check). All pages listed explicitly: /, /products, /pricing, /about, /contact, /privacy.
- **No dynamic product loading:** 15+ apps are hardcoded in products/page.tsx. Future: seed from Turso if the hub becomes a customer-facing admin hub later.

## Next Phase (Post-Launch)

When the hub has proven traction (>50 visits/week, >2% conversion to product signup):
- Add secondary product cards (current: 15 main apps only)
- Customer testimonials carousel (vendor success stories)
- Blog feed integration (Southern Legends or CopyCoach posts)
- Video demo embeds per app
- Affiliate/partner tier for ecosystem integrations
