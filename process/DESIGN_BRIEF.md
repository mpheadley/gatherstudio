# Design Brief — [Client Name]

> Complete this document before opening any HTML file or running `create-site.sh`.
> The goal is to make every visual decision intentionally, not reactively.
> A filled-out brief means you go into the build already knowing what the site
> looks like — you are executing a plan, not discovering it as you go.
>
> **When to stop planning and start building:** Lock in the big structural
> decisions (palette, fonts, buttons, card style, hero layout, nav behavior)
> in the brief. But smaller choices like effects, animations, and section
> divider styles are better decided *during the build* — you need to feel them
> in context. If you've completed Phases 1–3 and have your CSS tokens, start
> building. Decide the rest per-section as you go.

---

## Phase 0 — Project Context

**Client name:**
**Trade / niche:**
**City, State:**
**Target customer** (who is the person landing on this site):
**Primary action we want visitors to take:**
**One sentence describing what makes this business different from competitors:**

---

## Pre-Phase: Research (StoryBrand + Industry)

Before filling out this brief, run both research prompts. The BrandScript
feeds directly into Phase 3 copy. The industry research feeds into Phase 1
competitor sites and `marketing-notes.md`.

**Step 1a — StoryBrand Research:**
1. Open `STORYBRAND_PROMPT.md` and fill in the `[BRACKET]` variables
2. Run in Claude Code (preferred) or paste into Gemini
3. Review the research output — iterate if headlines feel generic
4. Save the full output as `storybrand-research.md` in this project folder

**Step 1a-ii — Compose the BrandScript:**
1. Open `BRANDSCRIPT.md` and distill the research into the 7-element template
2. Each element should be ONE clear sentence — not a paragraph
3. Fill in the Section Mapping table so every page section traces back to the script
4. Fill in Brand Soundbytes, Lead Generator concept, and Nurture Email outline
5. Save as `brandscript.md` in the project folder

**CRITICAL GATE — Identify the Story's Hero (before any visual direction):**

Look at your completed BrandScript. **Who is the hero of this story?**
- Is it the customer (bride, homeowner, patient, business owner)?
- Is it the product or service itself?
- Is it the business founder?
- Is it an abstract concept or transformation?

Write one sentence: _"The hero of this story is **[X]**, so the hero image will feature **[composition/visual/figure direction]**."_

**Why this matters:** All visual composition decisions flow from the story's hero. If the hero is the customer, the hero image must center that person. If the hero is a concept, the image reflects that. Confusion here causes hero images that don't match the message.

Examples:
- **Bride/Groom (customer as hero):** "The hero is the couple. The image will be an Art Deco illustration of the bride and groom centered, stylized and elegant."
- **Product as hero:** "The hero is the [product]. The image will showcase it as the focal point with supporting context around it."
- **Business owner as hero:** "The hero is [name]. The image will feature them in context, showing their craft/work."
- **Transformation as hero:** "The hero is the transformation [problem → solution]. The image will visualize that journey or the before/after state."

**Once you've written this sentence, proceed to Phase 1 with full clarity on who the hero is and what role they play in the visual composition.**

---

**Step 1a-iii — Draft Website Copy + Visual Direction:**
1. Open `WEBSITE_COPY.md` and write actual headlines, body copy, and CTAs for every section
2. Pull from `brandscript.md` — each section maps to a BrandScript element
3. **For each section, also fill in the Visual Direction block** — layout pattern, visual element, source, and mood. This requires Phase 1b (photography) and Phase 2 (brand identity) to be complete first.
4. Include answer-first content blocks for AEO (100-200 words per key page)
5. Save as `website-copy.md` in the project folder
6. Section-level design intent is now captured here — Phase 3 below is a verification step, not a separate writing pass

**Step 1b — Industry & Marketing Research (can run in parallel):**
1. Open `INDUSTRY_RESEARCH_PROMPT.md` and fill in the `[BRACKET]` variables
2. Run in Gemini Deep Research (recommended — needs live web crawling)
3. Save the full output as `industry-research.md` in this project folder
4. Save the filled prompt as `industry-research-prompt.md` for the record
5. Pull competitor URLs into Phase 1 below, marketing issues into `marketing-notes.md`

> See `STORYBRAND_REFERENCE.md` for framework fundamentals (read once, reuse
> across all projects).

- [ ] StoryBrand prompt completed and research output saved
- [ ] BrandScript composed — all 7 elements + soundbytes + lead gen + nurture emails (`brandscript.md`)
- [ ] One-liner and brand descriptor saved for GBP / social bios / directories
- [ ] Industry research completed and output saved
- [ ] Competitor URLs pulled into Phase 1
- [ ] Marketing issues and quick wins pulled into `marketing-notes.md`
- [ ] Website copy + visual direction drafted AFTER Phase 1b and Phase 2 (`website-copy.md`)

---

## Phase 1 — Visual References / Moodboard

Study 3–5 real sites in this trade or adjacent trades. Look at national brands,
local competitors, and aspirational examples from other industries that feel right
for this client. For each site, record what to borrow and what to avoid.

> Tip: Look at both the desktop and mobile experience. Note the hero layout,
> the card style, the button shape, the font personality, and the overall
> "weight" of the page — is it heavy and bold or light and minimal?

| # | URL | What to borrow | What to avoid |
|---|-----|----------------|---------------|
| 1 |     |                |               |
| 2 |     |                |               |
| 3 |     |                |               |
| 4 |     |                |               |
| 5 |     |                |               |

**Optional: v0 quick mockup.** If you want to explore a visual direction before
committing, paste a prompt like "modern [trade] website, dark theme, warm accent"
into v0.dev. Use the result as a visual reference only — screenshot it for the
moodboard. Do NOT use v0 output as production code. It lacks SEO infrastructure,
schema, analytics, attribution, and your token system. Build with the starter kit.

**Visual direction in one sentence** (e.g. "Bold, dark, industrial with a single
warm accent color" or "Clean, airy, professional-services with strong photography"):

---

## Phase 1b — Brand Photography Direction

Professional photography is the single biggest visual differentiator between a
$2,000 site and a $7,500 site. Do not skip this section — even if the client
doesn't have photos yet, define what they need so they can hire a local
photographer with a clear shot list.

> Send this shot list to the client (or their photographer) as a deliverable.
> Frame it as: "These are the 8–10 photos your website needs to convert visitors
> into customers." This positions you as a creative director, not just a coder.

### Required Shots (map to StoryBrand)

| # | Shot | StoryBrand Role | Where It's Used | Status |
|---|------|-----------------|-----------------|--------|
| 1 | Owner looking into camera, confident, approachable | The Guide | About page hero, trust section | ☐ Have it ☐ Need it |
| 2 | Owner/team at work — mid-process, action shot | The Guide in action | Services page, process section | ☐ Have it ☐ Need it |
| 3 | Happy customer in finished space / with completed result | Success (transformation) | Testimonial section, hero alt | ☐ Have it ☐ Need it |
| 4 | The "problem" — the mess, the pain point, the before | Failure / Stakes | Problem section, before/after | ☐ Have it ☐ Need it |
| 5 | Wide establishing shot with negative space for text overlay | Hero background | Homepage hero | ☐ Have it ☐ Need it |
| 6 | Detail / craftsmanship close-up | Authority / quality proof | Services cards, portfolio | ☐ Have it ☐ Need it |
| 7 | Team photo or workspace / storefront | The Guide's world | About page, footer | ☐ Have it ☐ Need it |
| 8 | Finished project — portfolio-quality showcase shot | Success | Portfolio section, OG image | ☐ Have it ☐ Need it |

### Photography Guidelines for the Client

- **Lighting:** Natural light or well-lit interiors — no harsh flash shadows
- **Orientation:** Provide both landscape (hero/banner) and portrait (cards/about)
- **Negative space:** At least 2 shots with open space on one side for headline text overlay
- **Resolution:** Minimum 2000px on the long edge (we'll convert to WebP and resize)
- **No stock photos:** Real people, real projects, real locations — this is what clients pay premium for
- **Clothing:** Clean, branded if possible (logo shirt/hat), consistent across shots

### Photo Status Summary

- [ ] Shot list sent to client
- [ ] Client has a photographer lined up (or will use phone + our guidance)
- [ ] Photos received and reviewed for quality
- [ ] At least hero photo and owner headshot confirmed before build starts
- [ ] Remaining photos have a timeline (ok to launch with placeholders if noted)

### Image Treatment & Styling

Define how photos will be processed for the website. These decisions should be
consistent across all images — pick a treatment and apply it everywhere.

- **Warm overlay:** `filter: sepia(0.05) brightness(1.02)` — subtle cream tint, suits farmhouse/wellness brands
- **Cool overlay:** `filter: saturate(0.9) brightness(1.05)` — slightly desaturated, suits modern/clinical brands
- **No filter:** Clean, as-shot — suits photography-forward brands where color accuracy matters
- **Duotone:** Map to two brand colors — suits bold, graphic brands

**Corner radius:** `border-radius: 16px` (soft, modern) / `8px` (subtle) / `0` (editorial, sharp)
**Shadow:** `shadow-lg` (lifted, premium) / `shadow-sm` (subtle depth) / none (flat, modern)

**Chosen treatment for this project:**
- Filter:
- Corner radius:
- Shadow:

**Fallback plan if no photos at launch:**
*(e.g., "Use 2 real project photos client has on phone + solid color hero with
strong typography until professional photos arrive in 2 weeks")*

---

## Phase 2 — Brand Identity

Answer every field before touching CSS. These decisions feed directly into
`:root` tokens. Do not leave a field blank — make a choice and justify it.

### Draft Layout — Visual Comparison Page

After filling in sections 2a–2f below, generate a `draft-layout.html` in the
project folder using the starter-kit template (`starter-kit/draft-layout.html`).

**What it does:** Shows side-by-side visual comparisons for each design decision
(buttons, steps, footer, animations, etc.) with the client's actual tokens,
fonts, and colors applied. Each comparison point has a radio-button picker so
the user can select options in the browser and click "Copy Decisions" to paste
their choices back into the chat.

**How to build it:**
1. Copy `starter-kit/draft-layout.html` into the project folder
2. Replace all `{{PLACEHOLDER}}` tokens with the client's actual values
3. Add, remove, or modify comparison points to match what's actually different
   or worth deciding for this project (not every project needs all points)
4. For each point, include 2-column (A vs B) or 3-column (A vs B vs daisyUI)
   grids with live demos using the client's real design tokens
5. Write a recommendation in each verdict box explaining the trade-offs
6. Update the `points` JS array at the bottom to match the radio group names

**Interactivity requirements:**
- All buttons must have hover (lift + brightness), active (press down + scale), and transition states — the user needs to feel how they'll behave on the real site
- All cards (service cards, option cards, etc.) must have hover lift (`translateY(-4px)` + box-shadow + border-color shift) — static cards look dead and don't represent the final product
- Ghost/outline buttons should get a subtle background tint on hover

**Cascading live preview:**
- After the individual comparison points (palette, font, buttons), add a "Live Preview"
  section that auto-builds a hero mockup + service cards from the current selections
- Use JS config objects for each palette/font/button option, then update the preview
  elements on every radio change — this lets the user see how their choices combine
  without pre-building every permutation
- The live preview replaces static "Hero Direction" and "Card Style" points — those
  are now dynamically composed from the choices above
- See `headleyweb-rebuild/draft-layout.html` for the reference implementation

**Common comparison points** (pick what applies):
- Color palette (current vs evolved options with swatches)
- Button shapes (pill vs soft-rounded vs daisyUI btn)
- Typography / heading treatment (transform, tracking, case)
- Hero layout (img srcset vs CSS background, split vs centered)
- Section transitions (hard edge vs SVG wave divider)
- Process/steps (dark cards vs light cards vs daisyUI steps)
- Scroll animations (fade-only vs slide-up + fade)
- Footer style (plain vs textured vs daisyUI footer)
- Problem section (skip vs custom cards vs daisyUI alerts)
- Card/services layout (icon cards vs photo cards vs daisyUI cards)
- Texture / background treatment (clean vs grain vs photo accent vs full texture)

**After the user reviews:** They select options in-browser, copy decisions, and
paste them back. Use their selections to finalize Phase 2 choices and proceed
to Phase 4 (CSS token block).

---

### 2a. Logo / Wordmark

- [ ] Client has an existing logo file (SVG or high-res PNG)
- [ ] Client has a text wordmark / business name to render in a font
- [ ] No existing identity — we are setting the visual brand from scratch

**Logo notes** (file location, colors in logo, constraints on placement):

**Nav logo treatment** (wordmark text only / SVG icon + text / image file):

---

### 2b. Color Palette

Define every color before writing a single line of CSS. The primary color
drives all interactive elements — buttons, links, active states, icon accents.
Everything else serves and supports it.

> Tip: Start with the primary color and derive the others. The hover should be
> 10–15% darker. The tint is the primary at ~8% opacity. The glow is ~30–35%
> opacity (used for button box-shadow and focus rings).

| Token | Hex | Usage / Notes |
|-------|-----|---------------|
| `--primary` | `#______` | Brand accent — all CTAs, icon color, active nav |
| `--primary-hover` | `#______` | ~10–15% darker than primary — button hover state |
| `--primary-tint` | `rgba(_,_,_, 0.08)` | Low-opacity wash — pill backgrounds, tinted cards |
| `--primary-glow` | `rgba(_,_,_, 0.30)` | Button box-shadow glow |
| `--dark` | `#______` | Dark section backgrounds, page base |
| `--dark-2` | `#______` | Heading text on light backgrounds |
| `--light` | `#______` | Light section backgrounds |
| `--light-grey` | `#______` | Alternating light bg, card backgrounds |
| `--white` | `#FFFFFF` | White elements — usually leave as-is |
| `--text-body` | `#______` | Body copy on light backgrounds |
| `--text-light` | `#______` | Body copy on dark backgrounds |
| `--text-muted` | `#______` | Secondary / supporting text |

**Palette rationale** (why these colors suit this client and trade):

---

### 2c. Typography

The heading font sets the personality. The body font carries all the information.
They should work together — a bold display serif pairs with a clean geometric
sans; a modern sans heading pairs well with a neutral body sans.

> Tip: Limit to two font families. Test at large sizes (60–80px for H1) and
> small sizes (15px body) before committing.

**Heading font:**
- Name:
- Weights needed: (700, 800 minimum — add 900 if bold display is needed)
- Google Fonts URL:
- Why this font:

**Body font:**
- Name:
- Weights needed: (400, 600 minimum)
- Google Fonts URL:
- Why this font:

**Typography scale:**

| Element | Target Size | Notes |
|---------|------------|-------|
| H1 (hero) | `clamp(__, __, __)` | |
| H2 (section title) | `clamp(__, __, __)` | |
| H3 (card title) | `__px` | |
| Body copy | `17px` | adjust if needed |
| Small / caption | `13–14px` | |
| Eyebrow label | `12px, all-caps, tracked` | |

**Accent font (optional — adds personality to 1-2 elements per page):**
- Name:
- Weight needed: (400, 700)
- Google Fonts URL:
- Why this font:
- Where to use it: *(e.g., hero accent word, "Most Popular" badge, footer tagline, CTA heading accent)*

> Tip: Script/cursive fonts (Caveat, Dancing Script, Sacramento, Satisfy) work well
> as accent fonts. Use sparingly — 1-2 words per headline, max 3-4 instances per page.
> The accent font should contrast with the heading font (e.g., Playfair Display + Dancing Script).
> If adding an accent font, create a `--font-accent` CSS token and `.font-accent` utility class.

---

### 2d. Button Style

The default template uses `border-radius: 8px` with a lifted inset shadow.
Override here if the brand calls for something different.

- [ ] Keep default rounded rectangle (`border-radius: 8px`) — suits most trades
- [ ] Pill-shaped (`border-radius: 50px`) — suits modern/lifestyle brands
- [ ] Sharp corners (`border-radius: 0–4px`) — suits industrial/technical brands
- [ ] Custom: ___

**Button font weight:** 600 / 700 / 800 (circle one)
**Primary button label text** (e.g. "Get a Free Quote", "Book a Consultation"):
**Ghost/secondary button label text** (e.g. "See Our Work", "Learn More"):

---

### 2e. Spacing Rhythm

The template uses `100px` top/bottom section padding. Adjust here if needed.

- [ ] Tight (80px) — suits content-dense or B2B sites
- [ ] Standard (100px) — default, works for most trades
- [ ] Open (120px) — suits premium / luxury positioning

**Container max-width:** 1200px (default) / 1100px / 1400px (circle one or write custom)

### 2f. Structural Differentiation

The starter kit has a default skeleton: fixed nav, full-bleed hero, 3-column
card grid, 3-step process with dividers, FAQ accordion, 3-column footer.
If you build every project with these same bones, the sites will look alike
regardless of color and font changes. **Pick at least 3 structural variations
below** to break the template feeling.

- [ ] **Nav layout:** sticky instead of fixed / centered logo / transparent-to-solid on scroll / no hamburger (always visible links)
- [ ] **Hero layout:** split two-column (text + image side by side) / asymmetric grid / text-only color block / stacked centered / video
- [ ] **Card column count:** 2-column instead of 3 / 4-column masonry / single full-width cards / alternating left-right rows
- [ ] **Card hover effect:** no lift (flat) / border glow / scale-up / background color shift / no hover at all
- [ ] **Process/steps layout:** vertical timeline instead of 3-column grid / horizontal scrolling strip / numbered list (no cards) / 4+ steps
- [ ] **Section dividers:** no dividers / angled clip-path / SVG wave / color-block alternation / full-bleed image break
- [ ] **FAQ style:** all answers visible (no accordion) / two-column Q&A grid / separate FAQ page only
- [ ] **Footer layout:** 2-column instead of 3 / centered single-column / minimal one-liner / 4-column with social icons
- [ ] **Animation style:** no scroll animations / fade-in only (no translateY) / slide-from-left / longer/shorter stagger intervals / scale-up reveals
- [ ] **Other:** ___

**Structural choices made (list the 3+ you checked above):**

---

### 2g. Section-Order Wireframe

Every site in the starter kit gets the same sections in the same order by default.
That's the single biggest reason sites start feeling like templates — even when colors,
fonts, and structural choices are different. **Before filling in Phase 3, decide
which sections appear on each page and in what order.**

> This is a 5-minute exercise, not a design comp. You're making a numbered list,
> not drawing boxes. But the impact is huge — it forces you to think about the
> visitor's journey instead of defaulting to the scaffold's order.

**Homepage section order:**

| # | Section | Variant / Notes |
|---|---------|-----------------|
| 1 | Hero | *(which hero variant? split, video, bold-type, default)* |
| 2 | | |
| 3 | | |
| 4 | | |
| 5 | | |
| 6 | | |
| 7 | | |
| 8 | Final CTA | |

**Default scaffold order** (for reference — deviate from this):
Hero → Answer-First Block → Pain Points → Services → How It Works → Why Us → Testimonials → FAQ → Contact CTA

**Common reorders that work well:**
- Lead with social proof: Hero → Testimonials → Pain Points → Services → How It Works → CTA
- Lead with authority: Hero → Why Us → Services → How It Works → Testimonials → FAQ → CTA
- Lead with stakes: Hero → Pain Points → Services → How It Works → Why Us → Testimonials → CTA
- Minimal/premium: Hero → Services → Portfolio → CTA (skip pain points, FAQ on separate page)

**Sections to skip or move to inner pages:**
*(Not every section belongs on the homepage. FAQ might work better on a services page.
Pain points might be redundant if your hero already names the problem. Be intentional.)*

-

**Variant selections** (reference `widgets/hero-variants.html` and `widgets/process-variants.html`):
- Hero variant: *(default / split / video / bold-type)*
- Process variant: *(default / craftsman-grid / tactical-cards / circle-steps / vertical-timeline / horizontal-stepper / zigzag / icon-forward)*

**Available widgets** (check what applies — each is a drop-in HTML snippet):
- [ ] Before/After slider — visual transformations: pressure washing, painting, remodeling, landscaping (`widgets/before-after.html`, `ba-` prefix)
- [ ] Comparison table — "Us vs Them" positioning, service tiers, Pro vs DIY (`widgets/comparison-table.html`, `ct-` prefix)
- [ ] Stats gauges — circular number displays: jobs completed, star rating, years, satisfaction (`widgets/stats-gauges.html`, `sg-` prefix)
- [ ] Social proof: logo strip — client/partner logos below hero (`widgets/social-proof.html` §1, `sp-` prefix)
- [ ] Social proof: process steps — 3-step "How It Works" with connectors (`widgets/social-proof.html` §2, `sp-` prefix)
- [ ] Social proof: trust badges — compact pill strip with icons (`widgets/social-proof.html` §3, `sp-` prefix)
- [ ] Social proof: values quote — blockquote for About page (`widgets/social-proof.html` §4, `sp-` prefix)
- [ ] Gallery carousel — photo gallery with thumbnail strip (`widgets/gallery-carousel/`)

**Widget placement** (for each checked widget, note which page and after which section):
-

**Inner pages** (if Professional tier — wireframe each page that isn't just the default template):

| Page | Sections (in order) |
|------|---------------------|
| Services | |
| About | |
| Portfolio | |
| Contact | |

---

### 2h. Effects & Interactions

Pick opt-in effects from `widgets/effects.css` (18 available). These add motion, polish, and
interactivity beyond the base scroll animations. Don't add everything — pick what serves the
design. More isn't better; intentional is.

> Reference: `~/Developer/webdev/starter-kit/widgets/effects.css` — each effect is
> documented with usage instructions, HTML snippets, and JS requirements.

**Tier recommendations** (starting points, not rules):

| Effect | Kickstart | Starter | Professional |
|--------|:---------:|:-------:|:------------:|
| 1. Gentle zoom (hero bg) | x | x | x |
| 2. Hover accent line (cards) | | x | x |
| 3. Stretched link (full-card click) | | x | x |
| 4. Card image zoom | | x | x |
| 5. Process step hover | | | x |
| 6. Link arrow nudge | | x | x |
| 7. Logo marquee | | | x |
| 8. Stat counter (scroll-triggered) | | x | x |
| 9. Sticky mobile CTA bar | x | x | x |
| 10. Back to top button | | x | x |
| 11. Text gradient (hero accent) | | | x |
| 12. Glassmorphism card | | | x |
| 13. Sticky shrinking nav | | | x |
| 14. Smooth FAQ accordion | | x | x |
| 15. CSS scroll-driven animations | x | x | x |
| 16. View transitions (page nav) | | | x |
| 17. Form micro-interactions | | x | x |
| 18. Bento grid layout | | | x |
| 19. Noise texture overlay | | x | x |
| 20. Section background texture | | x | x |
| Accent font + letter reveal | | optional | x |

**Selected effects for this project:**

- [ ] *(list chosen effects here — copy relevant CSS into style.css during Step 4)*
-
-
-

**Notes / customizations:**
*(e.g., "stat counter on Trust section only", "glassmorphism on pricing cards", "bento grid for services")*

---

## Phase 3 — Section-by-Section Design Intent (Verification)

> **Note:** The primary section-level design decisions (layout pattern, visual
> elements, mood, photo sourcing) are now captured in `website-copy.md` alongside
> the copy for each section. This phase is a verification pass — confirm the
> choices are consistent, nothing was missed, and the StoryBrand flow holds.

For each section, verify the design question was answered: **"What does this
content need to accomplish?"** — not "What does the template have here?"

> Reminder: The template's default structure (3-column cards, 3-step process
> grid, FAQ accordion, etc.) should be a starting point you modify — not a
> constraint you accept. Reference your Phase 2f choices here.

### StoryBrand Section-Flow Checklist

Before diving into individual sections, verify the homepage follows the
StoryBrand 7-part framework in order. This is a quick yes/no audit — if
any section is missing or out of order, fix it before building.

| # | StoryBrand Element | Homepage Section | Present? | Notes |
|---|---|---|---|---|
| 1 | **Hero** (Character + Desire) | Hero — headline states what the customer wants | [ ] Yes / [ ] No | |
| 2 | **Stakes** (What's at risk) | Trust strip or stat bar — what they lose by waiting | [ ] Yes / [ ] No | |
| 3 | **Problem** (External + Internal + Philosophical) | Pain points / "Sound familiar?" section | [ ] Yes / [ ] No | |
| 4 | **Guide** (Empathy + Authority) | About / Why Us — you understand + you're qualified | [ ] Yes / [ ] No | |
| 5 | **Plan** (3 simple steps) | How It Works / Process section | [ ] Yes / [ ] No | |
| 6 | **CTA** (Direct + Transitional) | Primary CTA button + secondary option (call, learn more) | [ ] Yes / [ ] No | |
| 7 | **Success** (Transformation) | Testimonials / Results / Before-After | [ ] Yes / [ ] No | |

**Section order matters.** The visitor's emotional journey should be:
1. "This is what I want" (Hero)
2. "I can't afford to wait" (Stakes)
3. "They understand my problem" (Problem)
4. "They can help me" (Guide)
5. "It's easy to get started" (Plan)
6. "I'm ready to act" (CTA)
7. "This is what my life looks like after" (Success)

**Common mistakes:**
- Putting the Plan before the Problem (they don't care how until they feel understood)
- Skipping Stakes entirely (no urgency = no action)
- Leading with Guide/Authority before Problem (feels braggy, not empathetic)
- CTA only at the bottom (repeat it — hero + mid-page + footer)

---

### Hero Section

**What does the hero need to accomplish?**

**Headline (write it out now — not placeholder text):**
*(Pull from website-copy.md — Hero Section)*

**Sub-headline (write it out now):**
*(Pull from website-copy.md — Hero Section)*

**Primary CTA text and destination:**

**Hero visual approach:**
- [ ] Full-bleed photograph with dark overlay and text on top
- [ ] Split layout — text left, image right
- [ ] Typography-first — strong color block, no photo
- [ ] Video background
- [ ] Other:

**Do we have a real hero photo?** Yes / No / Pending
**If no — placeholder plan:**

**Notes / anything unusual:**

---

### Services Section

**What does the visitor need to understand after reading this section?**

**Services to feature at launch** (3 is the default — list name + one-liner):
*(Pull from website-copy.md — Services Overview)*
1.
2.
3.

**Card style:**
- [ ] Icon + title + short description (default)
- [ ] Icon + title only (minimal)
- [ ] Photo + title + description (visual trades)
- [ ] Numbered process steps

**Icons:** Custom / Heroicons / Feather / Other:

---

### Portfolio / Work Section

**Do we have real project photos?** Yes / No / Will get after launch

**Number of projects to feature at launch:**

**What should the visitor feel after seeing this section?**
- [ ] "These people do high-quality work" — emphasize craftsmanship
- [ ] "These people handle big projects" — emphasize scale
- [ ] Skip at launch — add later

**Layout:**
- [ ] Full-width scrolling cards
- [ ] 2–3 column grid
- [ ] Featured large + smaller thumbnails

---

### Why Us / Trust Section

**Three most credible things about this business:**
1.
2.
3.

**Owner on-site?**
- [ ] Yes — headshot with personal quote
- [ ] Yes — headshot only
- [ ] No — brand-first, no personal photo

**Social proof available at launch:**
- [ ] Testimonials (how many?):
- [ ] Google rating: ___/5 (___ reviews)
- [ ] Certifications / badges to display
- [ ] None yet — placeholder plan:

---

### FAQ Section

**Who is the visitor with a question?**

**4–6 real questions this type of client asks:**
*(Pull from website-copy.md — FAQ Section)*
1.
2.
3.
4.
5.
6.

---

### Location Pages (Local SEO)

**Does this business serve multiple cities beyond their primary location?** Yes / No

If yes, location pages are strongly recommended for local SEO. Each page targets
"[service] in [city], [state]" and gives Google a dedicated URL to rank for that
city. The starter kit includes `location.html` as a template.

**Cities to target at launch** (list 3–8 nearby cities the business actually serves):
1.
2.
3.
4.
5.

**Important:** Each location page must have unique content — not just a city name
swap. Include local landmarks, neighborhoods, drive time from primary location,
and ideally a testimonial from a client in that city. Google penalizes thin
duplicate location pages.

**Naming convention:** `{{city-slug}}.html` — e.g. `oxford-al.html`, `jacksonville-al.html`

**Add to nav?**
- [ ] No — keep nav clean, link from footer or a "Service Areas" section on homepage
- [ ] Yes — add a "Service Areas" dropdown in the nav
- [ ] Create a `/locations.html` index page that links to all city pages

---

### Contact / CTA Section

**Primary conversion action:**
- [ ] Phone call
- [ ] Form submission
- [ ] Calendly booking
- [ ] Email

**Form fields needed** (remove unnecessary ones):
Name / Phone / Email / Service type / Message

**Trust element near the form** (hours, response promise, guarantee, testimonial):

**Section background:**
- [ ] Dark (default — creates separation from rest of page)
- [ ] Light

### Effects & Micro-Interactions

Reference: `starter-kit/widgets/effects.css` — a library of opt-in CSS/JS
effects. Check the ones this project should use. Don't check everything —
pick what serves the design. Effects not checked here should not be added.

**Visual polish:**
- [ ] Gentle zoom on hero/CTA background images (#1)
- [ ] Hover accent line on cards (#2)
- [ ] Card image zoom on hover (#4)
- [ ] Process step hover effects (#5)
- [ ] Link arrow nudge on hover (#6)
- [ ] Text gradient on hero accent word (#11)
- [ ] Glassmorphism card for testimonials or stats (#12)

**Interactive elements:**
- [ ] Stretched link — full-card clickable area (#3)
- [ ] Logo marquee — auto-scrolling client strip (#7)
- [ ] Stat counter — numbers count up on scroll (#8)
- [ ] Sticky mobile CTA bar — fixed phone/contact at bottom (#9)
- [ ] Back-to-top button (#10)
- [ ] Gallery carousel (separate widget: `widgets/gallery-carousel/`)

**Notes on effects choices:**

---

## Phase 4 — CSS Token Block

Transfer your Phase 2 decisions here as ready-to-paste CSS. When you open
`style.css`, this is the block you copy-paste to replace the `:root` defaults.

```css
/* ─── [CLIENT NAME] — Design Tokens ─── */
:root {
  --primary:        #______;
  --primary-hover:  #______;
  --primary-tint:   rgba(___, ___, ___, 0.08);
  --primary-glow:   rgba(___, ___, ___, 0.30);
  --dark:           #______;
  --dark-2:         #______;
  --light:          #______;
  --light-grey:     #______;
  --white:          #FFFFFF;
  --text-body:      #______;
  --text-light:     #______;
  --text-muted:     #______;
  --btn-text:       #______;  /* Text on --primary buttons: #FFFFFF for dark accents, var(--dark) or var(--dark-2) for light/mid accents (gold, orange, yellow). Use the site's own dark color, not generic black. Must pass 4.5:1 vs --primary. */
  --primary-text:   #______;  /* Accent as text on light bg. Same as --primary if it passes 4.5:1 on --light; otherwise darken until it does. */
  --font-heading:   'Font Name', serif;
  --font-body:      'Font Name', sans-serif;
  --font-accent:    'Font Name', cursive;  /* Optional — script/cursive for badges, hero accent word, tagline. Omit if not using. */
}
```

**Google Fonts `<link>` tag to paste into every HTML `<head>`:**
```html

```

**Any CSS overrides beyond tokens** (button border-radius, section padding, etc.):
```css

```

---

## Phase 5 — Go / No-Go Checklist

Do not run `create-site.sh` or open any HTML file until every item is checked.

### StoryBrand Research, BrandScript & Copy + Visual Direction
- [ ] StoryBrand prompt run and research output saved (`storybrand-research.md`)
- [ ] BrandScript composed — all 7 elements + soundbytes + lead gen + nurture emails (`brandscript.md`)
- [ ] Website copy drafted — all section headlines, body copy, CTAs (`website-copy.md`)
- [ ] Visual direction filled in for every section in `website-copy.md`
- [ ] Answer-first content blocks written for homepage and services page
- [ ] Phase 3 verification pass complete — StoryBrand flow confirmed, visual choices consistent

### Brand Identity
- [ ] Primary color chosen and justified
- [ ] All 12 CSS token hex values filled in (no `#______` blanks)
- [ ] Heading font chosen, tested at large size, Google Fonts URL confirmed
- [ ] Body font chosen, tested at body size, Google Fonts URL confirmed
- [ ] Accent font chosen (optional) — if using, `--font-accent` token and placement plan defined
- [ ] Button shape decided, CTA label text written out
- [ ] Button text contrast verified — `--btn-text` on `--primary` passes 4.5:1 (use dark text for gold/orange/yellow/cyan accents)
- [ ] Accent text contrast verified — `--primary-text` on `--light` passes 4.5:1 (darken accent if needed for text on light backgrounds)
- [ ] At least 3 structural variations chosen in Phase 2f (to avoid template sameness)
- [ ] Section-order wireframe completed (Phase 2g) — homepage sections listed with order and variants
- [ ] Effects & interactions selected (Phase 2h) — at least base tier effects chosen
- [ ] Hero variant selected (default, split, video, or bold-type)
- [ ] Process variant selected (default or one of 7 widget variants)

### Content Readiness
- [ ] Hero headline written out (not placeholder text)
- [ ] Hero sub-headline written out
- [ ] Primary CTA label and destination confirmed
- [ ] All service names and one-liners written
- [ ] At least 4 real FAQ questions listed

### Effects & Interactions
- [ ] Effects checklist reviewed (`widgets/effects.css` reference)
- [ ] At least one interactive element chosen (sticky CTA, counter, carousel, etc.)
- [ ] No unchecked effects will be added during the build

### Visual Assets & Photography
- [ ] Shot list sent to client (Phase 1b)
- [ ] Hero image exists or a concrete fallback plan is noted in Phase 1b
- [ ] Owner headshot confirmed (have it or scheduled)
- [ ] Logo file status confirmed (not left as TBD)
- [ ] Image treatment defined (filter, corner radius, shadow) — will be applied consistently to all photos
- [ ] Remaining photo timeline documented (ok to launch with placeholders if noted)

### CSS Token Block
- [ ] Phase 4 block is fully filled in — no `#______` blanks
- [ ] Google Fonts `<link>` tag is written out

**Verification command** — run this before scaffolding:
```bash
grep '#______' DESIGN_BRIEF.md
# Output should be empty
```

---

**Signed off by:** _________________________ **Date:** _________

> Only after signing off here should you run `create-site.sh` and begin building HTML.
