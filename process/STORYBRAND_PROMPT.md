# StoryBrand Research Prompt

> Replace the variables in [BRACKETS] with your client's information.
> The AI will return a complete Movements Doc + website copy direction.
>
> **Recommended workflow:**
> 1. Run **Industry Research Prompt** first via Gemini Deep Research (Step 1b) —
>    it needs live web crawling for competitor sites, pricing, and local market data.
> 2. Save results as `industry-research.md` in the project folder.
> 3. Run **this StoryBrand prompt in Claude Code** — it does NOT need web access.
>    Claude cross-references the industry research results + StoryBrand framework
>    + business context gathered in conversation. No Gemini needed for this step.
>
> **Why this order?** The industry research sharpens the Movements Doc — competitor
> positioning, buyer behavior, and market gaps make the Problem/Guide/Success
> elements more specific. StoryBrand is a messaging framework exercise, not a
> research task.
>
> **Fallback:** If no industry research is available yet, Claude can still run
> this prompt with just the business context from discovery. The Movements Doc
> will be less market-aware but still usable — refine after research returns.
>
> This prompt assumes the AI already understands StoryBrand fundamentals.
> For your own reference, see `STORYBRAND_REFERENCE.md`.

---

## The Prompt

```
You are a StoryBrand-certified messaging strategist. I'm building a website
for a local service business and I need you to develop a complete Movements Doc
and website copy direction using the StoryBrand 7-part framework.

## Business Information

- Business name: [CLIENT_NAME]
- Trade / niche: [CLIENT_TRADE]
- Location: [CLIENT_CITY], [CLIENT_STATE]
- Service area: [CLIENT_SERVICE_AREA]
- Owner name: [CLIENT_OWNER_NAME]
- Owner background: [BRIEF OWNER BIO — years of experience, certifications, what makes them credible]
- Target customer: [WHO IS THE IDEAL CUSTOMER — homeowner, property manager, business owner, etc.]
- Primary services: [LIST 3-5 MAIN SERVICES]
- What makes this business different from competitors: [1-2 SENTENCES]
- Current online reviews / reputation: [GOOGLE RATING, NUMBER OF REVIEWS, OR "new business"]

## What I Need

### Part 1: Complete Movements Doc

Fill out each element of the StoryBrand framework for this specific business:

1. **Character** — What does the customer want? (one clear desire related to this trade)
2. **Problem**
   - External: The tangible problem they face. Consider BOTH the traditional angle (outdated website, poor mobile experience) AND the AI/zero-click angle (the way people search has changed — over 80% of searches end without a click, AI answers questions directly, the map pack decides who gets the call). Blend both — the old website is a symptom, the shifting search landscape is the root cause.
   - Internal: How the problem makes them feel (frustration, anxiety, embarrassment, confusion about changing technology)
   - Philosophical: Why this problem is fundamentally wrong ("A homeowner shouldn't have to...")
   - **Villain** — The specific thing, person, or system the customer is up against. Ask: "What does the customer hate encountering?" The villain is the most concrete version of the external problem. It should be nameable in 1–5 words. Four levels to consider:
     1. **The object** — a physical artifact of the bad experience ("the binder," "the template," "the lowest bid")
     2. **The type** — a category of bad provider ("the contractor who ghosts after the deposit")
     3. **The feeling** — internal experience of being mistreated ("being handed a price sheet instead of a conversation")
     4. **The system** — structural problem ("an industry that optimizes for volume, not you")
   > **Don't write the villain until the client names it.** Ask: "What do your customers complain about when they come to you? What were they expecting that they didn't get somewhere else?" Their answer is the villain statement. The best villain is always one the client has said out loud.
3. **Guide** — How does this business demonstrate:
   - Empathy (understanding the customer's frustration)
   - Authority (credentials, experience, proof they can solve it)
4. **Plan** — A simple 3-step process plan for engaging this business
5. **Call to Action**
   - Direct CTA: The primary action (e.g., "Get a Free Quote")
   - Transitional CTA: A lower-commitment action (e.g., "See Our Work")
6. **Failure** — What happens if the customer does NOT act? (consequences of inaction)
7. **Success** — What does the customer's life look like after? (the transformation)

### Part 2: Website Copy Direction

Using the Movements Doc above, provide specific copy recommendations for each
website section. Write actual headline and body copy — not descriptions of
what to write.

For each section below, give me:
- A recommended headline (H1 or H2)
- A sub-headline or supporting sentence
- Body copy (2-3 sentences max)

**Sections:**
1. Hero (above the fold — headline, sub-headline, CTA button text)
2. Villain Statement (one line, big type — see villain framework above)
3. Problem / Stakes (optional — only if villain statement alone doesn't establish enough stakes)
3. Services overview (3 service cards with titles and one-liners)
4. How It Works (3-step process with titles and descriptions)
5. Why Us / Trust (guide positioning — empathy + authority)
6. Testimonial framing (what a great testimonial would sound like if we need to coach the client)
7. FAQ (6 questions a prospective customer would actually ask, with answers that use StoryBrand language)
8. Contact / Final CTA (closing section headline + CTA)

### Part 3: One-Liner

Create a StoryBrand one-liner for this business using the formula:
"[Problem] + [Solution] + [Result]"

This should be a single sentence that could be used as an elevator pitch,
social media bio, or Google Business Profile description.

### Formatting

- Use clear headers for each section
- Write in second person ("you" / "your") for customer-facing copy
- Keep headlines under 10 words
- Keep body copy sentences short and scannable
- Avoid jargon — write at an 8th grade reading level
- Do not use generic filler — every sentence should be specific to this trade and location
```

---

## After Running the Prompt

1. Save the full AI output as `storybrand-research.md` in the project folder
2. **Compose the Movements Doc:** Open `MOVEMENTS.md` and distill the research into the 7-element template. Each element = one clear sentence.
3. Fill in the Section Mapping table, Brand Soundbytes, Lead Generator concept, and Nurture Email outline
4. Save the composed Movements Doc as `movements.md` in the project folder
5. **Draft Website Copy:** Open `WEBSITE_COPY.md` and write actual headlines, body copy, CTAs, and answer-first blocks for every section. Pull from `movements.md`.
6. Save as `website-copy.md` in the project folder
7. Now open `DESIGN_BRIEF.md` — Phase 3 pastes copy from `website-copy.md`

---

## Tips

- **Run this BEFORE the Design Brief.** The Movements Doc informs your copy
  decisions in Phase 3. Without it, you're guessing at headlines.
- **You can iterate.** If the first output feels generic, reply with:
  "Make the internal problem more specific to [TRADE] customers in [CITY]"
  or "The hero headline is too generic — give me 5 alternatives that are
  more direct and specific."
- **Cross-reference with competitors.** If you already filled out Phase 1
  (Visual References) in the Design Brief, share competitor URLs with the
  AI and ask: "How should our messaging differentiate from these sites?"
- **Include the AI/zero-click angle.** The Problem element should blend
  traditional pain (outdated website, bad mobile) with the bigger shift
  (80%+ searches end without a click, AI answers directly, map pack decides).
  The old website is the *symptom*; the changing search landscape is the
  *root cause*. This makes AI Visibility a natural solution, not an upsell.
  Source: 83% zero-click rate when AI Overviews trigger (click-vision.com).
