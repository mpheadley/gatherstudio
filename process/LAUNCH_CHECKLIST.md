# Launch Checklist — Headley Web & SEO

Work through this list **in order** before sending the site live. Phase 0 must be complete before Phase 1 begins.

---

## 0. Design Brief (Complete Before Any Building)

This phase happens before `create-site.sh` is run and before any HTML is opened.
Its purpose is to prevent the bottom-up trap: guessing at colors, fonts, and layout
while building instead of deciding them intentionally upfront.

- [ ] StoryBrand research completed — `STORYBRAND_PROMPT.md` run through AI, output saved as `storybrand-research.md`
- [ ] Industry & marketing research completed — `INDUSTRY_RESEARCH_PROMPT.md` run through Gemini Deep Research (or Claude), output saved as `industry-research.md`
- [ ] Competitor URLs from industry research pulled into Phase 1 visual references
- [ ] Marketing issues and quick wins pulled into `marketing-notes.md`
- [ ] Hero headline, service one-liners, and FAQ questions pulled from BrandScript into Design Brief Phase 3
- [ ] `DESIGN_BRIEF.md` exists in the project folder (copied by `create-site.sh`)
- [ ] Phase 1 complete — at least 3 competitor/inspiration URLs recorded with borrow/avoid notes
- [ ] Phase 2a complete — logo status confirmed (file / font-based / pending)
- [ ] Phase 2b complete — all CSS token hex values filled in, no `#______` blanks (including `--btn-text`)
- [ ] Phase 2c complete — heading and body fonts confirmed, Google Fonts URLs tested in browser
- [ ] Phase 2d complete — button shape and primary CTA label text decided
- [ ] Phase 3 complete — hero headline and sub-headline written out in full (not placeholder)
- [ ] Phase 3 complete — all service names and one-liners written
- [ ] Phase 3 complete — at least 4 real FAQ questions listed
- [ ] Phase 4 complete — CSS token block fully filled in and pasted into `style.css :root`
- [ ] Phase 5 signed off — all go/no-go items checked, brief dated and initialed
- [ ] **Client agreement signed** — testimonial required at completion + care plan commitment after 3-month grace period
- [ ] **Domain registered** — you register and manage the domain (cost included in your service). Transfer to client if they leave — unlock + auth code, 5 minutes.
- [ ] **Baseline metrics started** — Copy `BASELINE_METRICS.md` into project folder. Ask the 4 baseline questions (traffic, leads, revenue, rank). If client has an existing site, the "Existing Website Snapshot" section gets filled in Phase 12 right before the domain swap.

**Verification command:**
```bash
grep '#______' DESIGN_BRIEF.md   # must return empty
```

---

## 1. Content & Copy

- [ ] **Existing site content audit** — if replacing an old site, review every page for content that must carry over:
  - Service descriptions, pricing, specialty callouts
  - Testimonials and client quotes
  - Team bios, certifications, license numbers
  - Service area details, hours, holiday schedules
  - Blog posts or articles worth preserving
  - Legal copy (terms, disclaimers, warranty info)
  - Photos and videos — download originals, note which pages they appear on
  - Social media accounts and links (Facebook, Instagram, YouTube, etc.)
  - Save a full-page screenshot or PDF of each old page as reference before building
- [ ] All `{{PLACEHOLDER}}` tokens replaced in every HTML file
  - Run: `grep -r '{{' *.html` — output should be empty
- [ ] Each page has a unique `<title>` with service + city keywords
- [ ] Each page has a unique `<meta name="description">` under 160 characters with a CTA
- [ ] `<h1>` appears exactly once per page
- [ ] All phone numbers, email, address, and hours are correct
- [ ] Service area copy matches what the client actually covers
- [ ] Pricing (if displayed) confirmed with client

---

## 2. Images

- [ ] All images converted to WebP format (use `cwebp` or squoosh.app)
- [ ] Hero image: `loading="eager"`, all others: `loading="lazy"`
- [ ] Every `<img>` has `width` and `height` attributes set
- [ ] Large images (>300px wide) have `srcset` with at least two sizes

**Generating WebP srcset variants with cwebp:**
```bash
# Full-size (keep original as largest srcset source)
cwebp -q 82 input.jpg -o hero-bg.webp

# 1600w variant
sips -Z 1600 hero-bg.webp --out hero-bg-1600w.webp

# 800w variant
sips -Z 800 hero-bg.webp --out hero-bg-800w.webp
```

**Required image files:**
- [ ] `images/hero-bg.webp` + srcset variants
- [ ] `images/og-image.webp` (1200×630px)
- [ ] `images/brand-mark.webp` (footer logo)
- [ ] `images/footer-bg.webp` (dark CTA section background)
- [ ] `images/favicon.ico`
- [ ] `images/apple-touch-icon.png` (180×180px)
- [ ] `images/owner-photo.webp` + srcset (about page)
- [ ] `images/about-photo-2.webp` + srcset (about page second section)
- [ ] `images/project-1-desktop.webp` + srcset (portfolio)
- [ ] `images/project-1-mobile.webp` + srcset (portfolio)

---

## 3. SEO Tags (every page)

- [ ] `<meta name="robots" content="index, follow">`
- [ ] `<meta name="author" content="Headley Web & SEO | headleyweb.com">`
- [ ] `<link rel="author" href="https://headleyweb.com">`
- [ ] `<link rel="canonical" href="https://DOMAIN/page.html">` — correct URL per page
- [ ] Open Graph tags present: `og:type`, `og:site_name`, `og:title`, `og:description`, `og:image`, `og:url`, `og:locale`
- [ ] Twitter Card tags present: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- [ ] `og:image` and `twitter:image` point to a real 1200×630 WebP image
- [ ] `og:image:width` (1200) and `og:image:height` (630) present on every page
- [ ] If previewing on GitHub Pages, `og:image` and `twitter:image` use the staging URL (swap to production later with `swap-domain.sh`)

---

## 4. Homepage JSON-LD Schema

- [ ] `@type: LocalBusiness` (or appropriate subtype: Plumber, Electrician, RoofingContractor, etc.)
- [ ] `name`, `telephone`, `email` filled in
- [ ] `address` with full PostalAddress block
- [ ] `areaServed` lists all service cities/regions
- [ ] `openingHoursSpecification` matches actual business hours
- [ ] `sameAs` array includes GBP URL + any social profiles
- [ ] `creator` block present:
  ```json
  "creator": {
    "@type": "Organization",
    "name": "Headley Web & SEO",
    "url": "https://headleyweb.com"
  }
  ```
- [ ] Validate at: https://search.google.com/test/rich-results

### Inner Page Schema (all pages except homepage)

- [ ] `BreadcrumbList` JSON-LD present on every inner page (services, about, portfolio, contact, privacy)
- [ ] Breadcrumb `"item"` URLs use the correct live domain
- [ ] Breadcrumb `"name"` values match the page's nav label

---

## 5. Attribution (every page)

- [ ] HTML comment `<!-- Built by Headley Web & SEO | headleyweb.com | ... -->` at top of every file
- [ ] Footer `Built by` link present on every page
- [ ] Anchor text rotated across pages (not the same text on every page):

| Page | Anchor Text |
|------|-------------|
| index.html | `Headley Web & SEO` (brand) |
| services.html | `Web Design [State]` (geo) |
| about.html | `Headley Web & SEO` (brand) |
| contact.html | `Local SEO & Web Design` (service) |
| portfolio.html | `Contractor Website Design` (niche) |

---

## 6. Forms & Integrations

- [ ] Formspree ID correct in `contact.html` form `action` attribute
- [ ] Formspree form verified at formspree.io — test submission goes through
- [ ] Calendly URL is correct and resolves
- [ ] Google Business Profile URL is correct
- [ ] Contact form select options match actual services offered

---

## 7. Functionality QA

- [ ] Open `index.html` in browser — no console errors
- [ ] All nav links work on every page
- [ ] Mobile hamburger menu opens and closes
- [ ] Mobile nav links close the menu on click
- [ ] Scroll down: nav gets background/shadow at 40px
- [ ] Scroll-animated sections (`.animate-on-scroll`) fade in on scroll
- [ ] FAQ accordion opens and closes (chevron rotates)
- [ ] All CTA buttons link to the correct destination
- [ ] Phone `tel:` links dial correctly on mobile
- [ ] Email `mailto:` links open mail client
- [ ] All external links open in a new tab (`target="_blank" rel="noopener noreferrer"`)
- [ ] Cookie banner appears automatically during local development (file:// clears localStorage)
- [ ] Cookie banner styling matches site design (colors, font, spacing, mobile layout)
- [ ] Set `data-ga4` to a real GA4 ID (even temporarily) and verify:
  - Accept → DevTools Network tab shows `gtag/js` request
  - Decline → no `gtag/js` request fires
  - After accept, phone/form/CTA click events fire in Network tab (`collect?` requests)

---

## 8. Performance & Polish

- [ ] CSS and JS version query strings bumped: `style.css?v=1`, `script.js?v=1`
- [ ] All pages tested at mobile width (375px) and desktop (1280px)
- [ ] No horizontal scroll on mobile
- [ ] Page loads in under 3 seconds on a simulated 4G connection (Chrome DevTools)
- [ ] Run Lighthouse audit — aim for 90+ Performance, 100 Accessibility, 100 Best Practices, 90+ SEO
- [ ] All `alt` text is descriptive (no empty alt on content images)
- [ ] Button text readable on hover — `--btn-text` contrasts with both `--primary` and `--primary-hover` at 4.5:1

### Page Audit (`/audit-page`)

Run `/audit-page` on each page at two stages:

1. **During local dev:** `/audit-page path/to/file.html` — reads the file directly and checks meta tags, OG tags, JSON-LD, attribution, image attributes, and infrastructure. Also run Lighthouse in Chrome DevTools against localhost for performance + accessibility scores.
2. **After deploy:** `/audit-page https://live-domain.com/page` — fetches the live page via WebFetch for a final check. Catches issues that only appear in production (wrong canonical URLs, broken OG images, missing redirects).

Note: `/audit-page` cannot reach localhost URLs (WebFetch limitation). Always use file paths for local dev, live URLs for deployed sites.

---

## 9. Infrastructure Files

- [ ] `privacy.html` exists and all tokens replaced
- [ ] Footer on every page links to `privacy.html`
- [ ] `robots.txt` exists in project root with correct domain in Sitemap line
- [ ] `sitemap.xml` exists with correct domain and all page URLs listed
- [ ] If pages were added or removed, update `sitemap.xml` to match
- [ ] `404.html` exists with correct logo and brand name
- [ ] 404 page has `<meta name="robots" content="noindex, follow">`
- [ ] 404 page is NOT listed in `sitemap.xml`

---

## 10. Cookie Consent & Analytics

The starter kit ships with a cookie consent banner and GA4 integration on every page.
GA4 only fires after the user clicks "Accept." If the GA4 Measurement ID was set to
`NONE` in the wizard, the banner stays hidden — no tracking means no consent needed.

- [ ] `{{GA4_MEASUREMENT_ID}}` replaced with the real GA4 ID (e.g. `G-XXXXXXXXXX`)
- [ ] Cookie banner appears on first visit (check in incognito)
- [ ] Clicking "Accept" loads GA4 (verify in DevTools Network tab: `gtag/js` request fires)
- [ ] Clicking "Decline" does NOT load GA4 (no `gtag/js` request)
- [ ] After accepting, refreshing the page does NOT show the banner again (stored in localStorage)
- [ ] `privacy.html` Cookies & Tracking section accurately describes GA4 usage

**If Facebook Pixel or other tracking is added later:**
- [ ] Gate the pixel behind the same consent check in `script.js`
- [ ] Update the Cookies & Tracking section in `privacy.html` to disclose the new tracker

---

## 11. Domain Strategy (Before Purchase)

- [ ] Walk through `DOMAIN_STRATEGY.md` with the client
- [ ] Check availability for brand, SEO, and hybrid options
- [ ] Grab the `.com` brand domain at minimum
- [ ] Ensure the `<title>` tag does the SEO heavy lifting — don't rely on the domain name alone
- [ ] Confirm Google Business Profile is claimed and linked to the correct domain

---

## 12. Go-Live Steps

### STOP — Existing Website Snapshot (do BEFORE domain swap)

**If the client has an existing site, capture everything NOW. Once you swap the domain, the old site is gone forever.**

- [ ] Complete the "Existing Website Snapshot" section in `baseline-metrics.md`
- [ ] Screenshots saved: homepage (desktop + mobile), SERP results, Google Maps listing
- [ ] PageSpeed scores recorded (mobile + desktop)
- [ ] Google Analytics / Search Console data exported (if client granted access)
- [ ] Notes on old site issues documented (this becomes case study ammunition)

### Domain Swap (staging → production)

If the site was previewed on GitHub Pages or another staging URL, all internal URLs
must point to the production domain before going live. This affects OG images, Twitter
cards, canonical links, JSON-LD schema, sitemap, and robots.txt.

```bash
# From the project root:
bash ~/Documents/Web\ Development/starter-kit/swap-domain.sh OLD_DOMAIN NEW_DOMAIN

# Example — GitHub Pages → production:
bash ~/Documents/Web\ Development/starter-kit/swap-domain.sh \
  mpheadley.github.io/top-notch-sanitation topnotchrockmart.com
```

The script shows a preview of every match and asks for confirmation before replacing.

- [ ] Run `swap-domain.sh` to replace staging URLs with production domain
- [ ] Verify `og:image` and `twitter:image` URLs point to production domain (all pages)
- [ ] Verify `og:url` points to production domain (all pages)
- [ ] Verify `<link rel="canonical">` points to production domain (all pages)
- [ ] Verify JSON-LD `url` and BreadcrumbList `item` URLs use production domain
- [ ] Verify `sitemap.xml` `<loc>` entries use production domain
- [ ] Verify `robots.txt` Sitemap line uses production domain
- [ ] After deploying, paste live URL into [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) and click "Scrape Again" to clear any cached preview from the staging URL

### Deploy

- [ ] Domain purchased — **buy through Netlify** (Domain management → Add domain → Register). DNS + SSL auto-configure instantly. Avoids nameserver changes, propagation delays, and manual SSL provisioning.
  - If domain was already purchased externally (Namecheap, GoDaddy): add as custom domain in Netlify → set up Netlify DNS → copy 4 nameservers → paste into registrar's Custom DNS → wait for propagation (up to 48 hours) → SSL auto-provisions after DNS resolves
- [ ] SSL / HTTPS enabled (automatic when domain is purchased through Netlify)
- [ ] If replacing an old site, set up 301 redirects from old URLs to new pages
- [ ] Upload all files to hosting (Netlify drag-and-drop, cPanel, etc.)
- [ ] Verify live URL loads without errors
- [ ] Confirm client email address works (test send/receive)
- [ ] Test contact form on live site — end-to-end, confirm Formspree delivery
- [ ] Submit sitemap to Google Search Console
- [ ] Verify domain ownership in Google Search Console
- [ ] Request Indexing (URL Inspection) for homepage + top 2-3 pages (services, key location page, blog index). Don't wait for Google to discover them — new domains sit in "Discovered - currently not indexed" for weeks without this.
- [ ] Add site to GSC auto-sync: add `{"name": "clientsite.com", "property": "sc-domain:clientsite.com"}` to `SITES` list in `~/Developer/webdev/tools/gsc-metrics-sync.py`
- [ ] Check canonical URLs resolve correctly on live domain
- [ ] Configure hosting to serve `404.html` for missing pages:
  - **Netlify**: auto-detects `404.html` in root — no config needed
  - **Cloudflare Pages**: auto-detects `404.html` in root — no config needed
  - **Apache (.htaccess)**: `ErrorDocument 404 /404.html`
  - **Nginx**: `error_page 404 /404.html;` inside the `server` block

### Security Headers (hosting-level)

For static HTML sites, security is mostly handled at the hosting/server level.
These headers should be set in the hosting provider's config (not in HTML):

- [ ] `X-Content-Type-Options: nosniff`
- [ ] `X-Frame-Options: SAMEORIGIN`
- [ ] `Referrer-Policy: strict-origin-when-cross-origin`

**Netlify** — add a `_headers` file to the project root:
```
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin
```

**Cloudflare Pages** — add the same `_headers` file (same format).

**Apache** — add to `.htaccess`:
```
Header set X-Content-Type-Options "nosniff"
Header set X-Frame-Options "SAMEORIGIN"
Header set Referrer-Policy "strict-origin-when-cross-origin"
```

---

## 13. Marketing Audit (During Build)

Capture these observations as you build — they become retainer upsell talking points.
Save findings in `marketing-notes.md` in the project folder.

- [ ] **Google Business Profile:** Is it claimed and optimized? Correct categories, hours, photos?
- [ ] **Reviews:** How many Google reviews? Is there a review generation strategy?
- [ ] **Social media:** Active or abandoned accounts? Consistent branding across platforms?
- [ ] **Brand confusion:** Any same-name competitors in other markets diluting search results?
- [ ] **Competitor check:** Who ranks above them for "[service] [city]"? What are competitors doing better?
- [ ] **Email/communication:** Any customer touchpoints beyond invoices? Newsletter? Seasonal promos?
- [ ] **Missed opportunities:** Unused features on current site? Services not being promoted?
- [ ] Present findings to client — position as Grow ($149/mo) or Accelerate ($349/mo) retainer value

---

## 14. Launch Day Push (Client Deliverable)

Hand the client `LAUNCH_DAY_PUSH.md` (filled in with their info) on launch day.
This is a 15-minute checklist they complete to accelerate Google discovery.

- [ ] Fill in `[CLIENT_NAME]`, `[CLIENT_DOMAIN]`, `[DATE]`, `[GOOGLE_REVIEW_LINK]` in the template
- [ ] Send to client (email, print, or walk through on a call)
- [ ] Confirm client has shared the link on at least one social platform
- [ ] Confirm client has requested at least 2 Google reviews

---

## 15. Lead Magnet & Nurture Setup

Set up after the site is live and domain is confirmed. Uses one Mailchimp account (yours)
across all clients — each client gets their own Audience.

- [ ] **Lead magnet identified** — from `brandscript.md` Lead Generator section (checklist, guide, quiz, etc.)
- [ ] **Lead magnet created** — PDF, downloadable resource, or gated content
- [ ] **Lead magnet linked on site** — hero CTA, footer, or dedicated landing section
- [ ] **Mailchimp Audience created** for this client (named: `[Client Name] — [Domain]`)
- [ ] **Email capture form** embedded on site — gates the lead magnet download
- [ ] **3-email nurture automation built** in Mailchimp (from `brandscript.md` Nurture Sequence):
  - Email 1 (Day 0): Deliver the resource + establish authority
  - Email 2 (Day 3): Address the problem + build trust
  - Email 3 (Day 7): Direct CTA (call/book/quote)
- [ ] **Sending domain verified** in Mailchimp (client's domain, e.g. `info@clientdomain.com`)
- [ ] **Test the full flow** — submit form, receive resource, get all 3 emails
- [ ] **Notify client** — "Your site now automatically follows up with leads who download [resource]"

---

## 16. Post-Launch (Business Development)

- [ ] Ask client for a Google review after launch
- [ ] Ask client for a testimonial quote for headleyweb.com portfolio
- [ ] Add finished site as a case study page on headleyweb.com
  - Targets: niche + location keywords (e.g. "plumber website design Austin TX")
- [ ] When client posts about the new site on social, ask them to tag Headley Web & SEO
- [ ] Document the project: niche, city, key features, live URL → add to CRM/notes
- [ ] **Baseline metrics check-ins** (from `baseline-metrics.md`):
  - [ ] 30-day check-in: traffic, leads, rank, revenue
  - [ ] 60-day check-in + request testimonial quote
  - [ ] 90-day check-in + write case study with before/after stats
- [ ] Use before/after data in sales conversations and headleyweb.com portfolio
