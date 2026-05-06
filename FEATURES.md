# GatherStudio Hub — Feature Inventory

## Shipped Features

### Homepage (`/`)
- Hero: "Gather: The unified platform for event and community organizers across 15 verticals"
- All 15+ studio app cards organized by vertical (Wedding Studios, Market & Vendor Tools, Coaching & Community)
- Per-card data: icon, name, tier, price range, description, 2 key features, external link
- ScrollReveal animations on all sections
- CTA buttons with hover states and smooth transitions

### Products Page (`/products`)
- Full app directory: 15+ apps organized into 4 verticals
- Each vertical section: title, intro copy, card grid
- Per-app card: app name, Tier (Essential/Professional/Suite), price range, description, 2 features, direct link
- Verticals: Wedding Studios (7 apps), Market & Vendor Tools (3 apps), Coaching & Community (4 apps), Platform
- Footer CTA: "Get started with Gather"

### Pricing Page (`/pricing`)
- 3-tier founding member pricing model
- Tier 1: Essential ($19→$29/mo) — single studio access
- Tier 2: Professional ($49→$69/mo, highlighted) — up to 5 studios
- Tier 3: Suite Bundle ($99→$149/mo) — unlimited studios
- Pricing rationale: founding members locked forever, price increases after 10 customers
- FAQ section (5 items): defining founding member, tier switching, team members, single app, no contract requirement
- Call-to-action: "Start Free Trial"

### About Page (`/about`)
- Founder story: "Built by operators, for operators"
- Core values grid (6 items): Built by Operators, Fair/Transparent Pricing, You Own Your Data, 15+ Specialized Apps, No Setup Costs, Built to Last

### Contact Page (`/contact`)
- Formspree form with honeypot (_gotcha)
- Fields: name, email, subject, message
- GA4 tracking on submit
- Success/error state handling

### Privacy Page (`/privacy`)
- Placeholder copy with section structure

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
- **Colors:** primary #E8722A (warm orange), dark #111111, light #FAFAFA, neutrals
- **Typography:** Fraunces (headings, serif), Outfit (body, sans-serif)
- **Design tokens:** CSS custom properties via `@theme` block in globals.css
- **Spacing:** 8px base unit, Tailwind scale
- **Animations:** fade-up on scroll, slide transitions, smooth color transitions
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
