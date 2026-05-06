# New Client Site — Starter Kit Workflow

Template system: `~/Developer/webdev/starter-kit/`

**When the user says "build a new client site" or similar, guide them through the full process interactively. Do NOT jump straight to scaffolding or HTML. Follow this sequence:**

**Step 0 — Gather client basics:**
**Before anything else: start a Toggl timer.** Open Toggl Track, create a project for the client if it doesn't exist, and start the timer. Log all discovery, research, design brief, and build time under that project. Add the Toggl project URL to the client's record in the Airtable Projects table (Toggl Project Link field).

Ask the user for: client name, trade/niche, city/state. Tier is selected during the scaffold wizard (Step 3), but ask now if the user already knows — it helps scope the Design Brief.

**Step 0b — Baseline Metrics (do this during discovery or first call):**
- Copy `~/Developer/webdev/starter-kit/BASELINE_METRICS.md` into the project folder
- Ask the 4 baseline questions: traffic, leads, revenue, search rank
- If the client doesn't know, record "No idea" — that's a selling point (you're bringing clarity)
- Schedule 30/60/90 day post-launch check-ins to capture "After" numbers
- This data becomes: portfolio stats, sales proof, case studies, testimonial prompts

**Step 0c — Site Audit (if client has an existing website):**
- Run headleyweb.com/quiz against the client's current URL before the discovery meeting
- This produces: Lighthouse scores (Speed, SEO, Accessibility), Core Web Vitals, and a StoryBrand messaging grade (A–F)
- Save/screenshot the results — bring to the meeting as a visual "before" scorecard
- The audit creates urgency without you having to sell ("Here's where your site stands today")
- Internal view: append `?internal=[key]` for full diagnostic breakdown (failed audits, extracted copy, StoryBrand section-by-section analysis)
- Record scores in `BASELINE_METRICS.md` alongside Lighthouse CLI results
- **Quick programmatic audit:** copy `~/Developer/webdev/tools/fetch-site-audit.py` into the project folder, set `TARGET_URL` to the client's URL, and run `python3 fetch-site-audit.py`. Outputs title, meta description, viewport, canonical, JSON-LD schema blocks, and PageSpeed scores (desktop + mobile). No API key needed.

**Step 0d — Discovery Meeting Prep (before first in-person or video meeting):**
Create three docs and save them in `[project]/docs/`:

- **meeting-cheatsheet.html** — internal only. Meeting agenda, talking points, audit scores, client-specific warnings (domain registrar, Leadpages, unclaimed GBP, etc.). Notes area at bottom for capturing answers.
- **site-proposal.html** — client-facing. Proposed site structure (sitemap tree + what each page does + launch roadmap). *Send in follow-up email after the meeting — not before.*
- **leave-behind.html** — client-facing. "What I need from you" checklist: Google account email, logo, photos, domain registrar, service area, certifications, branding preference. Hand over at the meeting.

Export site-proposal and leave-behind to PDF (`Chrome --headless --print-to-pdf`). Add to the CRM pipeline record:
- ☑ Doc creation checklist (which docs are ready)
- ☐ Meeting hand-off (what to give her at the table vs. email after)
- ☐ Post-meeting follow-up steps (email, pipeline stage update, CRM notes to capture)

**At the meeting:** hand over leave-behind + audit PDF. Hold site proposal for the follow-up email.
**After the meeting:** email thank-you + site proposal PDF. Update CRM: pipeline stage, next action date, and fill in answers captured during the meeting (revenue split, vendor panels, cert level, domain registrar, service area, timeline).

**Scope definition (include in follow-up email, one paragraph):**
- **Included (3-month case study):** Full site build per proposal, GBP setup, minor fixes/tweaks, one round of revisions per page to finish what was started.
- **Not included:** New pages added after launch, ongoing content management, design overhauls, social media management.
- **Trigger for care plan conversation:** Any ongoing work the client requests beyond finishing the original build.
- **Blog (ask during scope):** Does the client want a blog? If yes, add to proposal. Next.js only — use the MDX blog pattern (`[EXTRACT]` in `NEXTJS_KIT_NOTES.md`). Ongoing post publishing is a care plan service — client writes in Google Docs, Matt publishes via Claude Code.
- Template language: "The site build includes everything on the proposal. After 3 months the site is yours — I can hand everything off, or if you'd like someone to handle ongoing updates, care plans start at $49/month."

Templates: `tools/client-meeting/discovery-cheatsheet.html` and `tools/client-meeting/leave-behind.html`. Both use `{{TEMPLATE_VARIABLES}}` — see the HTML comment block at the top of each file for the full variable list. Site proposal template not yet built (templatize from the Between Worlds version when ready).

**Business card landing page:** If the client has business cards with a QR code (or plans to print them), see `tools/client-meeting/CARD_LANDING_PAGE_PROMPT.md` for the decision framework. Default: build a dedicated `/card` or `/welcome` landing page with tracking for Starter/Professional tiers. UTM params only for Kickstart.

**Step 1a — StoryBrand Research (draft the prompt for the user):**
- Read `~/Developer/webdev/starter-kit/STORYBRAND_PROMPT.md`
- Fill in the `[BRACKET]` variables with the client info from Step 0
- Output the completed prompt so the user can paste it into Gemini (recommend Deep Research mode) or another AI — OR run the prompt directly in Claude if all business context is already available
- Tell the user to save the output as `storybrand-research.md` in the project folder
- Wait for the user to come back with the BrandScript results before proceeding (unless Claude ran it directly)
- `STORYBRAND_REFERENCE.md` is the universal framework reference — do not re-research fundamentals

**Step 1a-ii — Compose the BrandScript (all tiers):**
- Open `~/Developer/webdev/starter-kit/BRANDSCRIPT.md` (the template)
- Distill the research output into the 7-element BrandScript — each element should be ONE clear sentence
- Fill in the Section Mapping table so every page section traces back to the script
- **Starter/Professional:** Fill in Brand Soundbytes. Lead Generator and Nurture Emails are **optional** — include if the client has an email platform and wants lead capture; skip if it's out of scope for this engagement.
- **Kickstart:** Fill the 7 elements + one-liner + brand descriptor. Skip soundbytes, lead gen, and nurture emails.
- **Villain statement — ask before writing:** During or after the discovery meeting, ask: "What do your customers complain about when they come to you? What were they expecting that they didn't get somewhere else?" That answer is the villain statement. Do not write it until the client says it out loud. A villain invented by the copywriter is always weaker than one the client already uses in conversation.
- **If client has existing copy:** Map their copy to the BrandScript elements instead of writing from scratch. Use the framework to organize and sequence what they've written — don't replace it. Note where their copy is missing a critical element (empathy, stakes, credibility) and offer an alternate there only.
- Save as `brandscript.md` in the project folder — this is the messaging framework

**Step 1a-iii — Draft Website Copy + Visual Direction:**
- Open `~/Developer/webdev/starter-kit/WEBSITE_COPY.md` (the template)
- Write actual headlines, body copy, and CTAs for every website section
- Pull from `brandscript.md` — each section maps to a BrandScript element
- **For each section, also fill in the Visual Direction block** — layout pattern, visual element (photo/icon/video), source (shot list #, icon library, stock), and mood. Requires Design Brief Phase 1b + Phase 2 to be done first.
- Include answer-first content blocks for AEO (100-200 words per key page)
- **Cognitive load checkpoints before finalizing copy:**
  - FAQ: ≤4 questions on the homepage. Only questions that block the primary CTA. Move everything else to the services or FAQ page.
  - Testimonials: at least one must match the primary service being sold. A wedding florist homepage with only event/birthday testimonials undermines trust at the exact moment of decision.
  - Eyebrows: "What We Offer," "Our Services," "Our Work" are labels, not hooks. Replace every one with something specific to the client's positioning before the page ships.
  - Services on homepage: show only the services relevant to the primary buyer. Don't make a wedding client process workshop offerings on the homepage — that's the services page's job.
- **Before finalizing any copy:** run it against `COPY-VOICE-GUIDE.md`. Apply the AI kill list. No em dashes, no "seamless/robust/navigate/leverage," no hedging, no paragraph uniformity. If it reads like a committee report, rewrite it.
- Save as `website-copy.md` in the project folder
- Section-level design intent lives here now — Design Brief Phase 3 is just verification

**Step 1b — Industry & Marketing Research (run in parallel with 1a):**
- Read `~/Developer/webdev/starter-kit/INDUSTRY_RESEARCH_PROMPT.md`
- Fill in the `[BRACKET]` variables with the client info from Step 0
- **Always run in Gemini Deep Research — do NOT use Claude WebSearch for this step.** Gemini crawls live competitor sites and pulls real local data; Claude WebSearch produces shallower results at higher token cost.
- Save the output as `industry-research.md` in the project folder
- Pull competitor URLs into Design Brief Phase 1, marketing issues into `marketing-notes.md`
- This step does NOT block the Design Brief — it can be done in parallel
- This is also a consulting deliverable: share a summary with the client to demonstrate market understanding

**Step 1b-ii — Keyword Gap Analysis (run after 1b, before copy):**
- Using the competitor URLs from `industry-research.md`, identify bottom-of-funnel keywords the competitors rank for that the client does not
- Focus on high-intent queries: "[service] + [city]", "[service] near me", "[problem] + [solution]", comparison/cost queries
- Tools: Claude Code web search for competitor page titles/H1s, Google autocomplete, "People Also Ask" for the client's trade + location
- Deliverables:
  - `keyword-opportunities.md` in the project folder — organized by priority (high intent first)
  - Tag each keyword: blog post, service page, FAQ addition, or location page
  - Note which competitors own each keyword and what content they used
- **Use during copy (Step 1a-iii):** weave high-priority keywords into headlines, answer-first blocks, and FAQ items — don't stuff, integrate naturally
- **Use at launch:** the keyword list becomes the Accelerate upsell hook. Show the client: "Here are 15-20 keywords your competitors rank for that you don't yet. Your launch posts cover the top 4. Accelerate covers the rest at 2/month."
- **Get Calls/Get Booked only** — skip for Kickstart (no blog, limited pages)

**Step 2 — Design Brief (one phase at a time):**
Read `~/Developer/webdev/starter-kit/DESIGN_BRIEF.md`. Walk through each phase with a pause between — do NOT try to complete the entire brief in one pass.
- **Design preview tool (HTML kit):** Open `~/Developer/webdev/design-playground/` in a browser to browse hero variants, font pairings, color palettes, texture options, and widget comparisons. Use during Phase 2 to make faster visual decisions.
- **Design preview tool (Next.js kit):** After scaffolding, run `npm run dev` and visit `/preview` to browse all React components with sample data — heroes, sections, layout patterns, and design primitives (typography, colors, buttons, cards).
- **Phase 1 — Visual References:** proactively search for 3–5 competitor and inspiration sites in the client's trade and location using WebSearch. Present each with what to borrow and what to avoid. Optionally use v0.dev to generate a quick visual mockup for the moodboard — but v0 output is for inspiration only, never production code (it lacks SEO, schema, analytics, attribution, and our token system).
- **Phase 1b — Photography Direction:** walk through the shot list template with the client. Define which photos they need, map each to a StoryBrand role and page location. Send as a deliverable to the client or their photographer. Don't skip — photography is the #1 visual differentiator at higher price points.
- **Phase 2 — Brand Identity:** propose colors, fonts, button shapes, spacing, and structural choices (hero layout, card style, section flow). Generate a `draft-layout.html` in the project folder using the starter-kit template (`starter-kit/draft-layout.html`) — copy it, replace `{{PLACEHOLDER}}` tokens with the client's values, add/remove comparison points as needed. Each point gets a radio-button decision picker. Pause — let the user review in browser, select options, and paste their "Copy Decisions" output back into the chat.
- **Phase 2f — Accent Font (optional):** if the design calls for a handwritten or decorative accent font (for hero emphasis, section headings, CTAs), copy `starter-kit/widgets/font-preview.html` into the project folder. Replace `{{PLACEHOLDER}}` tokens with the client's colors/copy, update the Google Fonts link and `fontMap` with the accent candidates. Open in browser — client picks font + animation style, hits "Copy My Decision". For Next.js projects, build a similar preview page at `/font-preview` using the same comparison pattern.
- **Phase 2g — Section-Order Wireframe (Starter/Professional only):** before jumping into copy, decide which sections appear on each page and in what order. Pick hero and process variants from `widgets/hero-variants.html` and `widgets/process-variants.html`. This is what prevents every site from feeling like the same template — different section orders create different visitor journeys. 5 minutes here saves hours of rearranging later. Skip for Kickstart — one page, default order is fine.
  Ask for each page: Does the portfolio need to come before the process for this audience? Does trust (testimonials) need to land before services? Does the villain statement come right after the hero or is the hero strong enough to carry it alone? The default order (Hero → Problem → Services → Process → Testimonials → FAQ → CTA) is a starting point, not a prescription.
- **Phase 2h — Effects & Interactions Menu:** present the client with opt-in effects from `widgets/effects.css` (18 effects). Walk through each category and recommend based on the design brief. Typical picks per tier:
  - **Kickstart:** gentle zoom (#1), scroll animations (#15), sticky mobile CTA (#9)
  - **Starter:** above + hover accent line (#2), card hover lift, stat counter (#8), smooth FAQ accordion (#14), form micro-interactions (#17)
  - **Professional:** above + sticky shrinking nav (#13), bento grid (#18), logo marquee (#7), glassmorphism cards (#12), view transitions (#16), accent font + letter reveal
  - Record selected effects in the Design Brief. Copy chosen CSS into `style.css` during Step 4.
  - For Next.js projects: same menu, but effects are built as component classes in `globals.css` or as React components (LetterReveal, StatCounter, etc.).
- **>>> Now do Step 1a-iii (Website Copy + Visual Direction)** — this requires Phase 1b and Phase 2 to be complete so you know your palette, fonts, photo plan, and structural choices before writing section-level copy and visual composition.
- **Phase 2i — Color Palette Collage (send to client):** after Phase 2 color decisions are locked, generate a color palette collage using `~/Developer/webdev/tools/color-palette.html`. Copy the template into the project folder, swap the 5 hex values in `:root`, and update the mockup text. Open in browser and screenshot — send the screenshot (not a link) to the client with one line: "Here's the color direction for your site — let me know if anything feels off." This is a low-stakes visual checkpoint: no layout, no copy, just color. Adjust before building if the client pushes back. The collage uses a weighted grid (largest block = dominant color) so hierarchy is self-evident without explanation.
- **Phase 3 — Verification:** confirm StoryBrand flow holds, visual choices are consistent across sections, and nothing was missed. Section-level design intent now lives in `website-copy.md`, not here.
- **Phase 4 — CSS Token Block:** assemble the `:root` block from Phase 2 decisions. Write it into the brief (pasted into `style.css` later in Step 4).
- **Phase 5 — Go/No-Go:** check all items together.
- Do not skip — building without it causes reactive design decisions and rework.

**Step 3 — Scaffold:**

**If blog is in scope (Next.js only):** add the MDX blog before or immediately after scaffold. Pattern is documented in `headleyweb-rebuild/NEXTJS_KIT_NOTES.md` under "MDX Blog Setup [EXTRACT]". Includes: `src/content/` posts, `src/lib/posts.ts` loader, `/blog` listing page, `/blog/[slug]` post page with reading time + ToC + `BlogPosting` schema + cover image + OG meta. Publish workflow: Google Docs → Docs to Markdown → paste into Claude Code → MDX file written → push. See the Between Worlds `site/CLAUDE.md` for the publish prompt template.

```bash
bash ~/Developer/webdev/starter-kit/create-site.sh
```
The wizard prompts for client info, selects tier, copies the correct pages, and replaces all `{{PLACEHOLDER}}` tokens. It also writes `client-config.json` to the project folder — a single file with all 23 client data fields. If client info changes after scaffolding (new phone number, domain update, etc.), edit `client-config.json` and run:
```bash
bash rebuild.sh
```
This re-applies all tokens across every HTML file without manually hunting through pages.

**Step 3b — Pre-Meeting Design Prep:**
Before the first client design meeting, prepare and send two tools:

- **Mood board** (`[project]/docs/mood-board.html`) — send 2–3 days before the meeting. Host on Vercel (push to a preview branch or deploy the `/docs` folder). No downloads — the client opens it in a browser. Template: `starter-kit/templates/mood-board.html`.
- **Design decisions tool** (`[project]/docs/design-decisions.html`) — open together at the meeting, not before. The client picks options in real time and you apply them live. Template: `starter-kit/templates/design-decisions.html`.

**At the meeting:**
1. Open the design decisions tool together — client picks palette, font, buttons, card hover, animations, hero layout, section backgrounds, decorative elements.
2. Hit "Copy Decisions" when done — paste output into the project notes or CRM.
3. Show the live scaffolded site after design is locked — structure and copy feedback only at this stage, not more design changes.

**After the meeting:**
- Apply the decisions output to `site-config` / CSS token block before the next session.
- Update `client-config.json` with any new info captured during the meeting, then run `bash rebuild.sh`.

**Step 4 — Build (section by section, never from scratch):**
Paste the Phase 4 CSS token block into `style.css :root`. Tell the user to open `color-swatches.html` in a browser to verify the palette looks right. Then edit the scaffolded HTML to match the design.
- **Never rewrite a scaffolded file from scratch.** The scaffold already has nav, footer, meta tags, JSON-LD, cookie banner, animation classes, attribution, and cache-busted links. Edit section content in place.
- **One page at a time.** Finish and verify a page before starting the next. Don't build all pages in one pass.
- **Edit section by section** within each page (e.g. hero, then services grid, then testimonials). After each section, ask the user to check it in the browser before moving on.
- **After editing each page, run `/audit-page path/to/file.html`** to catch missing meta tags, canonical URL, OG/Twitter tags, JSON-LD, cookie banner, attribution, animation classes, `?v=` cache bust params, and image issues. This replaces manual infrastructure checks.
- **Use plan mode for Professional tier** (5+ pages) to track progress across pages.
- **CSS edits go in style.css** — don't add `<style>` blocks or inline styles to HTML unless it's a one-off override (like `--hero-delay` or `--stagger-delay`).
- **Run `bash build.sh`** after editing nav or cookie banner to sync partials across all pages (Starter/Professional tiers).
- **daisyUI usage (HTML starter kit only):** Custom CSS is the default for core components (buttons, cards, FAQ, stats, footers) — our custom patterns are stronger and more brand-specific. Only reach for daisyUI for components we don't already have patterns for (e.g. `steps`, `modal`, `tabs`, `badge`, `chat` bubbles) or for quick prototyping in draft layouts. **Do NOT use daisyUI in Next.js projects** — it causes class conflicts (`.btn-primary`, `.card`, `.hero`, `.navbar`) that override custom CSS. Tailwind v4 utilities + custom CSS classes in globals.css are sufficient.

**Step 4b — Metrics Baseline (before domain swap):**
- Copy `BASELINE_METRICS.md` into the project folder and fill in the pre-launch section (PageSpeed, GSC if available, client-reported traffic/leads/revenue)
- Screenshot old homepage (desktop + mobile) and primary SERP — save as `baseline-*.webp`
- Create 30/60/90 check-in records in the Airtable **Site Metrics** table (base `app1L7KRyKEu8sFe4`, table `tblvqBjsBL0WSYAFU`). Set Due Dates relative to launch date. Add the client to the Site dropdown if not already there.

**Step 4c — Care Plan Proposal (before site reveal):**
After the site is built and before the in-person reveal, create the care plan proposal:
- Copy `~/Developer/webdev/starter-kit/templates/care-plan-proposal.html` into `[project]/docs/`
- Replace template variables: client name, business name, founding rate, included services
- Export to PDF (`Chrome --headless --print-to-pdf`)
- **Send the PDF the morning of the reveal meeting** — not before. The client reads it, then sees the site in person. The site sells the plan, not the document.
- At the meeting: walk through the site first, then reference the proposal. "You saw the two options in the email this morning — which direction feels right?"
- **Do not skip this step.** A free build without a care plan conversation is volunteer work, not a business.

**Step 5 — Launch:**
Work through `~/Developer/webdev/starter-kit/LAUNCH_CHECKLIST.md` before going live. This includes:
- **Domain strategy** (Phase 11): Walk client through `DOMAIN_STRATEGY.md` before purchasing
- **Launch Day Push** (Phase 14): Fill in and hand client `LAUNCH_DAY_PUSH.md` — a 15-minute checklist (share on social, request Google reviews, update links everywhere)

**Step 6 — Post-Launch Retrospective (every project):**
After the site is live and launch tasks are done, run a retrospective before moving on:
- **What broke or surprised us?** (DNS issues, env var bugs, contrast failures, render-blocking resources, missing assets, etc.)
- **What did we fix reactively that should have been caught during build?** (button contrast, favicon, robots.txt, sitemap, etc.)
- **What new patterns or lessons should be captured?** Update:
  - `NEXTJS_KIT_NOTES.md` (for Next.js projects) or `LAUNCH_CHECKLIST.md` (for HTML projects)
  - `~/.claude/CLAUDE.md` global standards (if the lesson applies to all future projects)
  - Memory files (if the lesson is project-specific or client-specific)
- **What should be added to the scaffold/checklist so it's automatic next time?** If we had to manually create something (favicon, robots.ts, sitemap.ts, .gitignore entries), add it to the scaffold template.
- Prompt the user: "Anything else from this build you want captured before we move on?"

**Widgets & Effects (opt-in, not default):**
- `widgets/effects.css` — 12 opt-in CSS/JS effects. Only add what the DESIGN_BRIEF calls for.
- `widgets/gallery-carousel/` — photo carousel with thumbnail strip (separate CSS + JS + HTML).

## Standards Already in Starter Kit Templates
The following are baked into the template HTML/CSS/JS files. Do NOT duplicate them in new code — just follow the existing patterns when adding or editing pages:
- **SEO:** unique `<title>`, `<meta description>`, canonical, robots, OG + Twitter Card tags, JSON-LD schema, BreadcrumbList on inner pages
- **AEO (Answer Engine Optimization):** baked into templates — trade-specific JSON-LD `@type` via `{{CLIENT_SCHEMA_TYPE}}` token (e.g. `Plumber`, `HVACBusiness`), `FAQPage` schema on index.html FAQ section, `{{BRAND_DESCRIPTOR}}` token for consistent business description across schema/GBP/directories. `create-site.sh` prompts for both during scaffolding. Trade pages (`trade.html`) include `Service` + `FAQPage` schemas and answer-first content blocks. When building, add answer-first content (100-200 words) to service pages and ensure `areaServed` lists specific towns.
- **Attribution:** HTML comment, meta author, `<link rel="author">`, footer "Built by" link (anchor text rotated per page for SEO), JSON-LD creator field
- **Animations:** `animate-hero` (CSS keyframe on load), `animate-on-scroll` (IntersectionObserver adds `.visible`), stagger via `--hero-delay` and `--stagger-delay` custom properties, `prefers-reduced-motion` respected
- **Cache busting:** `style.css?v=1` and `script.js?v=1` — bump version on changes
- **Infrastructure:** privacy.html, 404.html (noindex), robots.txt, sitemap.xml, _headers (security), cookie consent + GA4 (gated behind consent), HTML partials system (nav + cookie banner via `build.sh`)
- **GA4 event tracking:** automatic after consent — tracks phone link clicks (`phone_click`), form submissions (`form_submit`), and CTA button clicks (`cta_click`). No setup needed per project beyond setting the GA4 ID. Events appear in GA4 > Reports > Engagement > Events. Use this data for client case studies.
