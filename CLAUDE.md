# GatherStudio Hub — Project Instructions

## Read First — Before Touching Anything

In a new session, read these files in this order before writing any code:

1. **`src/lib/site-config.ts`** — all client data. Never hardcode anything from here.
2. **`src/app/globals.css`** — all design tokens and component classes.
3. **`process/MOVEMENTS.md`** — client positioning: hero statement, villain, guide, CTA.
4. **`process/WEBSITE_COPY.md`** — all copy. Never invent copy.
5. **This file** — conventions and do-not rules.

---

## Stack
- **Next.js 16** (App Router, `src/` directory)
- **React 19** with TypeScript
- **Tailwind CSS v4** via `@tailwindcss/postcss` (no tailwind.config — theme in `globals.css @theme` block)
- **Deployed to Vercel** — buy domain through Vercel for instant DNS + SSL

---

## Component Inventory — Do Not Recreate These

These components already exist. Check here before building anything new.

| Component | Path | Purpose |
|-----------|------|---------|
| `Nav` | `src/app/components/Nav.tsx` | Site navigation with mobile menu |
| `Footer` | `src/app/components/Footer.tsx` | Site footer with attribution |
| `CookieBanner` | `src/app/components/CookieBanner.tsx` | GA4 consent gate (localStorage) |
| `ScrollReveal` | `src/app/components/ScrollReveal.tsx` | Global scroll observer — already wired in layout.tsx. Add classes to elements, not imports. |
| `LenisProvider` | `src/app/components/LenisProvider.tsx` | Momentum scroll inertia. **Opt-in** — not wired by default. Import and wrap body children in layout.tsx if this is a content, editorial, or portfolio site. Skip for utility/service sites. If adding GSAP ScrollTrigger, use the GSAP ticker variant instead of the RAF loop (see Southern Legends for the pattern). |
| `AnimateOnScroll` | `src/app/components/ui/AnimateOnScroll.tsx` | Per-element scroll wrapper. Use when ScrollReveal isn't enough. |
| `PhotoCarousel` | `src/app/components/PhotoCarousel.tsx` | Multi-image carousel with thumbnails |
| `VideoLoop` | `src/app/components/VideoLoop.tsx` | Muted autoplay background video |
| `ArticleImage` | `src/app/components/ArticleImage.tsx` | Blog/prose images with caption |
| `JsonLd` | `src/app/components/seo/JsonLd.tsx` | Renders JSON-LD `<script>` tags in page head |
| `Speakable` | `src/app/components/seo/Speakable.tsx` | Marks content for voice/AI citation |
| `AnswerBlock` | `src/app/components/seo/AnswerBlock.tsx` | AEO Q&A block with speakable markup |

### Section Components — Compose Pages From These

Import from `@/app/components/sections`. These are the building blocks for page layouts.

| Component | Variants | Purpose |
|-----------|----------|---------|
| `PageHero` | centered, split, minimal | Page hero section. `minimal` for inner pages, `centered`/`split` for homepage. |
| `SectionHeader` | center, left | Eyebrow + title + subtitle. Used inside other sections or standalone. |
| `ServicesGrid` | 2/3/4 columns | Service cards with optional icons and feature lists. |
| `FAQ` | — | Accordion with auto-generated FAQPage JSON-LD schema. |
| `ContactForm` | — | Formspree form with honeypot, GA4 tracking, success/error states. Client component. |
| `CTABanner` | dark, light | Call-to-action section with heading + CTAs. |
| `Testimonials` | 1/2/3 columns | Blockquote cards with name, role, location. |
| `StorySection` | normal, reverse | Image + text side by side. Use `reverse` to flip layout. |
| `StatStrip` | dark, light | Horizontal stats bar with large numbers. |
| `ValuesGrid` | 2/3/4 columns | Icon + title + description card grid. |
| `ContactInfo` | toggle fields | Reads from siteConfig. Phone, email, hours, address, service area. |
| `PortfolioGrid` | 2/3 columns | Image cards with title, description, optional link. |
| `ProcessSteps` | grid, timeline | Numbered steps — grid layout or vertical timeline. |

**Sample data** for preview route: `src/data/sample-data.ts`

**Design tools (do not copy to production):**
- `/preview` route — live component browser with all kit sections rendered with sample data. Open during Design Brief Phase 2 to pick layouts.
- `widgets/` folder (project root) — standalone HTML previews for hero variants, process layouts, social proof, before/after, comparison table, stats/gauges. Open in browser during Design Brief to pick section styles before building.

**Lib utilities** (also already exist — check before writing):
- `src/lib/site-config.ts` — client data (name, phone, email, schema, nav items)
- `src/lib/schema.ts` — JSON-LD generators (localBusinessSchema, faqPageSchema, breadcrumbSchema, serviceSchema, speakableSchema, personSchema, contactPointSchema)
- `src/lib/metadata.ts` — `generatePageMetadata()` helper for per-page SEO
- `src/lib/ga4.ts` — GA4 event tracking functions (consent-gated)
- `src/lib/attribution.ts` — footer "Built by" anchor text rotation

---

## CSS Class Inventory — Use These Before Writing New Styles

These classes already exist in `src/app/globals.css`.

| If you need... | Use this |
|----------------|----------|
| Fade-up on scroll | `.animate-on-scroll` on the element |
| Slide in from side | `.animate-from-left` / `.animate-from-right` |
| Slide in from below | `.animate-from-bottom` |
| Slide in from above | `.animate-from-top` |
| Stagger delay | `style={{ "--stagger-delay": "100ms" } as React.CSSProperties}` |
| Hero entrance | `.animate-hero` with `style={{ "--hero-delay": "200ms" }}` for stagger |
| FAQ accordion | `<details className="faq-item"><summary>Q</summary><div className="faq-answer">A</div></details>` |
| Form focus glow | `.form-input` / `.form-textarea` — focus glow + user-invalid styles built in |
| Form error shake | Add `.form-shake` class on submit failure, remove after animation |
| Cookie banner animation | `.animate-slide-up` — already used by `CookieBanner.tsx` |
| Slow image zoom | `.ken-burns` (12s infinite alternate) |
| Scrolling text strip | `.marquee-track` wrapping duplicated content |
| Eyebrow / label text | `.eyebrow` + color at call site: `className="eyebrow text-[var(--primary)]"` |
| Dark-bg headings | `.section-dark` or `.bg-navy` on parent — `--heading-color` auto-flips to white |
| Tactile card | `.card` |
| Section padding | `.section` / `.section-dark` / `.section-light` |
| Max-width centering | `.container` |
| Long-form text | `.prose` |

**Buttons — three classes, pick by context, never override manually:**
- `.btn-primary` — solid filled. Main CTA. Works on any background.
- `.btn-outline` — outline → fills on hover. Light/white backgrounds only.
- `.btn-outline-white` — white outline → fills white. Dark backgrounds only.
- `btn-secondary` does not exist — retired, caused z-index bugs. Do not add it back.

---

## Rules

### Never
- NEVER hardcode business name, phone, email, or domain — import from `src/lib/site-config.ts`
- NEVER use raw `<img>` — always `next/image` `<Image />`
- NEVER use `<link>` tags for Google Fonts — already loaded in `layout.tsx` via `next/font/google`
- NEVER use CSS `background-image` for hero or any LCP-eligible element — use `<Image fill priority>` instead (browser can't discover `background-image` URLs until after CSS parse + layout, adding seconds of render delay)
- NEVER use daisyUI — class conflicts override custom CSS
- NEVER add per-heading color overrides — set `.section-dark` on the parent container, headings flip automatically via `--heading-color`
- NEVER invent copy — pull all copy from `process/WEBSITE_COPY.md`
- NEVER use inline SVG paths for icons — install `@heroicons/react` or `lucide-react`
- NEVER use GSAP `pin: true` in React — use CSS `position: sticky` + a tall wrapper div instead (GSAP pin moves elements out of React's fiber tree, crashes on navigation)

### Always
- ALWAYS `.trim()` every `process.env` read — Vercel adds trailing whitespace to env vars
- ALWAYS add `<input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />` to every Formspree form (bot honeypot)
- ALWAYS run `/audit-page src/app/[page]/page.tsx` before marking a page done
- ALWAYS check `src/app/globals.css` before writing a new CSS class — it likely already exists

---

## Patterns

### Icon system
```tsx
// Large card/section icons — Heroicons outline
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
<WrenchScrewdriverIcon className="w-10 h-10" />

// Small indicators — Heroicons solid
import { CheckCircleIcon } from "@heroicons/react/24/solid";
<CheckCircleIcon className="w-5 h-5" />

// Gaps only — Lucide React
import { CalendarX } from "lucide-react";
```
Never size via `width`/`height` props — always `className`.

### Dynamic route params (Next.js 16)
```tsx
type Params = Promise<{ slug: string }>;
export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  // ...
}
```

### Data pattern
Multi-page shared content lives in `src/data/` as typed arrays:
- `src/data/projects.ts` — portfolio items (title, description, screenshots, URL, stats)
- `src/data/pricing.ts` — tier names, prices, features
- `src/data/testimonials.ts` — client quotes, names, photos
- `src/data/faqs.ts` — FAQ items that appear on multiple pages

Business data (name, phone, address) always goes in `src/lib/site-config.ts` — never in `src/data/`.

### Image conversion (pre-optimize before `next/image`)
```bash
python3 ~/Developer/webdev/tools/convert.py      # whole catalog
cwebp -q 80 input.png -o output.webp             # single file
```

### Quick site audit after deploy
```bash
# Copy to project root, set TARGET_URL, then:
python3 ~/Developer/webdev/tools/fetch-site-audit.py
```

### GA4 env var
```tsx
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID?.trim();  // always trim
```

---

## Contrast Rules — Check During Build, Not After

- Set `:root` tokens first. Drop the client's brand hex into `--primary` in `globals.css`. Check against `--btn-text` (white by default) before writing any component. If it fails 4.5:1, darken the token — not individual components.
- `.btn-primary` inherits `--primary` + `--btn-text`. If `--primary` fails with white text, change `--btn-text` to `var(--dark)` in `:root` — one fix covers every button in the project.
- Muted text on dark backgrounds: Tailwind opacity utilities (`text-white/40`) fail WCAG AA at low values. Stay at `/60` or above unless verified.
- Global heading `color` rule hazard: a global `h1-h6 { color: ... }` rule in globals.css WILL silently override Tailwind text-color utilities on headings inside footers and dark sections. The `--heading-color` custom property in this project avoids this — don't replace it with a direct `color` rule.
- Run `/audit-page` on every page before committing. Verify with Lighthouse (Incognito → DevTools → Lighthouse) after any color token change.

---

## SEO

- Every page needs `generateMetadata()` or `export const metadata`
- Use `generatePageMetadata()` from `src/lib/metadata.ts` for consistent OG/Twitter tags
- For MDX content pages (blog, profiles, case studies), use `generateContentMetadata()` from `src/lib/metadata.ts` — handles the `metaDescription ?? excerpt` fallback and `name/title` split automatically

### MDX frontmatter SEO fields

Two patterns to apply to every MDX content page:

**1. `metaDescription` field (always add this)**
The `excerpt` field does double duty — it shows on card grids AND becomes the meta description. These are different jobs. A good lede is literary; a good meta description is factual, 150–160 chars, and keyword-first. Add both:
```yaml
excerpt: "The literary lede shown on card grids — can run long."
metaDescription: "The 150–160 char search version. Front-load the keyword. Hard cap at 160."
```
`generateContentMetadata()` uses `metaDescription ?? excerpt` as the fallback — existing content without `metaDescription` won't break.

**2. `name` vs `title` split (for creative headlines)**
Use when the H1 is literary but the `<title>` tag needs to be findable:
```yaml
title: "The Burning Bus"                          # H1 on the page
name: "Freedom Riders National Monument"          # <title> tag + schema
```
Pass `name` as `entityName` and `title` as `ogTitle` in `generateContentMetadata()`. If there's no creative/literary headline, omit `name` and just use `title` for everything.
- Add `<JsonLd data={localBusinessSchema()} />` on homepage
- Add `<JsonLd data={serviceSchema(...)} />` on service pages
- Add `<JsonLd data={faqPageSchema(...)} />` on FAQ pages
- `BreadcrumbList` on all inner pages
- Schema type: `Organization`
- Brand descriptor: "The unified platform for event and community organizers across 15 verticals."
- Canonical URLs on every page (via `generatePageMetadata()`)

## AEO (Answer Engine Optimization)

AI answer engines (ChatGPT, Perplexity, Google AI Overviews) are already built into this scaffold.

### What's pre-wired
- **`public/llms.txt`** — AI crawler brief. Update services list after filling in WEBSITE_COPY.md.
- **`speakableSchema()`** — on homepage, services, about. Targets `[data-speakable="true"]` + `h1`.
- **`data-speakable="true"`** — on hero brand descriptor and sr-only brand block (homepage).
- **`AnswerBlockSection`** — visible Q&A section on services page with matching FAQPage schema.
- **`personSchema()`** — on about page (owner entity for E-E-A-T signals).
- **`contactPointSchema()`** — on contact page (phone, email, hours).

### After scaffolding — required edits
1. **`public/llms.txt`** — Replace placeholder services with real offerings and pricing from WEBSITE_COPY.md
2. **`src/app/services/page.tsx`** — Edit `serviceFaqs` array with real Q&As targeting "People Also Ask" queries
3. **`data-speakable="true"`** — Add to key content on any new pages (hero sub-headlines, trust statements)

### Components
| Component | Path | Purpose |
|-----------|------|---------|
| `Speakable` | `src/app/components/seo/Speakable.tsx` | Wrapper that adds `data-speakable="true"` |
| `AnswerBlock` | `src/app/components/seo/AnswerBlock.tsx` | Single Q&A block with speakable markup |
| `AnswerBlockSection` | `src/app/components/seo/AnswerBlock.tsx` | Full section with eyebrow, heading, and Q&A list |

### Schema generators (`src/lib/schema.ts`)
| Function | Used On | Purpose |
|----------|---------|---------|
| `speakableSchema(pageName)` | Homepage, Services, About | Tells AI which content to quote |
| `personSchema()` | About | Owner entity for E-E-A-T |
| `contactPointSchema()` | Contact | Business contact details for AI |
| `faqPageSchema(faqs)` | Services, any FAQ page | FAQPage schema for featured snippets |

---

## Forms

- Formspree ID in `site-config.ts` — submit to `https://formspree.io/f/{siteConfig.formspreeId}`
- Always include `_gotcha` honeypot input (hidden, `display: none`)
- Call `trackFormSubmit()` from `src/lib/ga4.ts` on successful submit
- Form states: idle → submitting → success / error

---

## Attribution

- HTML comment in layout.tsx (already present)
- `<meta name="author">` in layout metadata (already present)
- Footer "Built by" link with rotating anchor text from `attribution.ts`
- `creator` field in LocalBusiness JSON-LD schema

---

## Tier: professional

This project was scaffolded as a **professional** tier site. See `process/LAUNCH_CHECKLIST.md` for the full pre-launch process.

Content comes from `process/WEBSITE_COPY.md`. Design tokens come from the completed Design Brief.
