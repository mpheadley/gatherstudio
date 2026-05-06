# Industry & Marketing Research Prompt

> Replace the variables in [BRACKETS] with your client's information.
> The AI will return competitive intelligence and marketing strategy for the client's industry.
>
> **Two ways to run this:**
> 1. **Gemini Deep Research (recommended)** — crawls live competitor sites, pulls
>    real pricing, Google review counts, and local market data. Best for this prompt.
> 2. **Claude Code** — can run this if business context is already gathered, but
>    won't have access to live competitor data. Better for StoryBrand than this.
>
> Run this ALONGSIDE or RIGHT AFTER the StoryBrand prompt — it does not block
> the Design Brief, but the findings will inform Phase 1 (competitor sites)
> and feed into `marketing-notes.md` for retainer upsell conversations.
>
> **Save the filled prompt** in the project folder as `industry-research-prompt.md`
> so there's a record of exactly what was sent.

---

## The Prompt

```
You are a marketing strategy researcher. I'm a freelance marketing consultant
who builds websites, manages local SEO, and provides ongoing growth strategy
for small, local service businesses. I'm onboarding a new client and need to
deeply understand their industry's marketing landscape so I can advise them
on the full picture — not just a website, but their competitive positioning,
customer acquisition channels, and growth opportunities.

## Business Context

- Company: [CLIENT_NAME]
- Owner: [CLIENT_OWNER_NAME]
- Location: [CLIENT_CITY], [CLIENT_STATE] ([CLIENT_COUNTY] County)
- Services: [LIST PRIMARY SERVICES]
- Size: [BRIEF DESCRIPTION — family-owned, # employees, years in business]
- Current marketing: [DESCRIBE CURRENT WEBSITE, SOCIAL MEDIA PRESENCE, GOOGLE REVIEWS, ETC.]
- Known issues: [ANY MARKETING PROBLEMS ALREADY IDENTIFIED — e.g. same-name competitor, abandoned social accounts, no GBP]

## What I Need You to Research

### 1. Competitive Landscape ([CLIENT_CITY] / [CLIENT_COUNTY] County, [CLIENT_STATE])
- Who are the main [CLIENT_TRADE] providers in [CLIENT_COUNTY] County?
- What do they charge? (pricing if findable)
- How do they market themselves? (websites, social media, Google reviews, offline, etc.)
- What do their websites look like? What are they doing well or poorly?
- Are there any national chains or large competitors in this specific area?

### 2. Industry Marketing Channels That Actually Work
For small, local [CLIENT_TRADE] companies specifically:
- What marketing channels have the highest ROI? (Google Business Profile, Nextdoor, door hangers, yard signs, referral programs, Facebook community groups, etc.)
- What does Google search demand look like for "[CLIENT_TRADE] [city]" type queries in small markets?
- How important are Google reviews for this industry?
- Are there industry-specific directories or listing sites that matter?
- What role does social media play (if any) for a local [CLIENT_TRADE] company?

### 3. Customer Acquisition & Retention Patterns
- How do customers typically find and choose a [CLIENT_TRADE] provider? (new to area? Switching from a bad provider? Referral? HOA contract?)
- What causes customers to switch providers? (price, service quality, customer service?)
- What's the typical customer lifetime value?
- What retention strategies work? (referral discounts, loyalty pricing, seasonal promos?)

### 4. Growth Opportunities Beyond Current Services
- What adjacent services do similar companies commonly add?
- Are there partnership opportunities? (builders, property managers, real estate agents, HOAs?)
- What's the typical path from small local operator to $1M+ revenue in this industry?

### 5. Google Business Profile & Local SEO
- How should a [CLIENT_TRADE] company optimize their GBP?
- What categories should they use?
- What local SEO signals matter most for this industry?
- [IF APPLICABLE: How do they differentiate from the same-name competitor in [OTHER_LOCATION] in search results?]

### 6. Seasonal Patterns & Timing
- Are there seasonal peaks or slow periods in this industry? (spring cleaning, holidays, moving season, etc.)
- What marketing should align with those cycles? (promos, content, outreach)
- Are there local events, community moments, or calendar triggers that create natural marketing opportunities?

### 7. Regulatory & Market Structure
- Are there municipal contracts, franchise agreements, or licensing requirements that affect competition in this market?
- Are there barriers to entry or switching costs that shape customer behavior?
- Any industry associations, certifications, or memberships that build credibility?

### 8. Actionable Quick Wins
Based on your research, what are the top 5 things this company should do in the
next 30 days to improve their marketing — assuming they're getting a new
professional website built right now?

## Formatting
- Use clear headers for each section
- Include specific examples, competitor names, and data where possible
- Cite sources or explain where data comes from
- Be specific to this geographic market — I don't need generic "small business marketing" advice
- If you can't find specific data for [CLIENT_COUNTY] County, use comparable small-market examples and say so
```

---

## After Running the Prompt

1. Save the full output as `industry-research.md` in the project folder
2. Pull competitor website URLs into **DESIGN_BRIEF.md Phase 1 — Visual References**
3. Pull marketing issues and quick wins into `marketing-notes.md`
4. Use growth opportunities and retention strategies as retainer conversation talking points
5. Reference SEO findings when writing meta tags and JSON-LD schema during the build

---

## Tips

- **Gemini Deep Research mode is ideal** — it will crawl competitor sites, pull pricing,
  and find real local data that a standard LLM prompt can't access.
- **Claude can also run this prompt** if you already have all the business context and
  don't need live web crawling for competitor data.
- **This is a consulting deliverable.** The research itself has value — it shows the
  client you understand their market, not just their website. Consider sharing a
  summary with the client as part of your onboarding conversation.
- **Feed findings into the StoryBrand copy.** If competitors all lead with price,
  you differentiate on reliability. If they all look corporate, you lean into
  family-owned warmth. The research makes the BrandScript sharper.
