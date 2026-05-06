# StoryBrand Framework Reference

> This is a universal reference document. It does not change per project.
> Use it alongside `STORYBRAND_PROMPT.md` (which is project-specific).

---

## The 7-Part Framework

Every brand message follows the same narrative arc. The customer is the
hero — the business is the guide.

### 1. Character (the customer)

The story starts with what the customer wants. Not what the business
sells — what the customer is trying to achieve. This must be a single,
concrete desire related to the business's offering.

**Website application:** The hero headline states or implies this desire.
The visitor should immediately think "yes, that's what I want."

### 2. Problem

The customer has a problem standing between them and what they want.
StoryBrand defines three layers:

| Layer | Definition | Example (plumber) |
|-------|-----------|-------------------|
| **External** | The tangible, surface-level problem | "My kitchen faucet is leaking" |
| **Internal** | How the problem makes the customer feel | "I feel stressed not knowing if it's getting worse" |
| **Philosophical** | Why this problem is fundamentally wrong | "A homeowner shouldn't have to worry about water damage" |

Most businesses only talk about the external problem. The internal and
philosophical problems are what create emotional resonance and urgency.

**Website application:** The sub-headline or "problem" section names the
internal frustration. The philosophical wrong can appear in the "why us"
or mission statement.

### 3. Guide (the business)

The business enters the story not as the hero, but as the guide — the
experienced mentor who has helped others through this same problem.

A guide demonstrates two qualities:
- **Empathy** — "We understand what you're going through"
- **Authority** — "We've solved this before" (credentials, experience, reviews, certifications)

**Website application:** The "why us" or "about" section leads with
empathy before listing credentials. Testimonials serve as third-party
authority. Avoid leading with "we are the best" — lead with "we
understand your situation."

### 4. Plan

The guide gives the customer a simple plan that removes confusion and
reduces risk. Plans should have 3–4 steps maximum.

Two types of plans:
- **Process plan** — Steps to engage ("1. Call us, 2. We assess, 3. We fix it")
- **Agreement plan** — Promises that remove fear ("Licensed & insured, upfront pricing, satisfaction guaranteed")

**Website application:** The "how it works" section. Always 3 steps.
Each step has a short title and one sentence. The plan makes the path
forward obvious and low-risk.

### 5. Call to Action

Two types:
- **Direct CTA** — The primary action ("Get a Free Quote", "Book Now", "Call Today"). Bold, repeated, impossible to miss.
- **Transitional CTA** — A lower-commitment action for visitors not ready to buy ("See Our Work", "Download the Guide", "View Pricing"). Captures interest without pressure.

**Website application:** The primary CTA button appears in the nav, the
hero, mid-page, and the contact section. A transitional CTA appears as
a secondary/ghost button alongside the primary CTA in the hero.

### 6. Failure (stakes)

What happens if the customer does NOT act? StoryBrand calls this
"painting the picture of failure." Without stakes, there is no urgency.

This is NOT fear-mongering — it is honestly naming the consequences of
inaction that the customer already knows but hasn't articulated.

**Website application:** A brief "don't let X become Y" section or a
sentence in the problem section. Subtle but present.

### 7. Success (transformation)

What does the customer's life look like after engaging the guide? This
is the aspirational end state — the resolution of the external, internal,
and philosophical problems.

**Website application:** The section after the plan or near the CTA.
Paint the picture: "Imagine coming home to..." or use before/after
framing. Testimonials that describe outcomes (not just praise) serve
this function.

---

## Website Wireframe Principles

StoryBrand recommends a specific information hierarchy for websites:

1. **Above the fold (hero):** What you offer + how it makes life better + CTA
2. **Stakes:** What's at risk if they don't act
3. **Value proposition / services:** What you do (3 cards max)
4. **Guide credentials:** Why you (empathy first, then authority)
5. **Plan:** How it works (3 steps)
6. **Explanatory paragraph:** Deeper detail for visitors who scroll
7. **CTA repeat:** Final call to action with success vision

### Copy Principles

- **Clarity over cleverness.** If the visitor can't understand the headline
  in 5 seconds, rewrite it.
- **Talk about the customer's problem, not your product.** Features are
  supporting evidence, not the headline.
- **One CTA, repeated.** Don't give the visitor 5 different actions to
  choose from. Pick the primary one and repeat it.
- **Use "you" more than "we."** The customer is the hero.
- **Short sentences. Short paragraphs.** People scan, they don't read.

---

## BrandScript Template (for reference)

When filling out the per-project prompt, the AI will generate a
BrandScript with these fields:

```
CHARACTER:     [What the customer wants]
PROBLEM:       External: [tangible issue]
               Internal: [emotional frustration]
               Philosophical: [why it shouldn't be this way]
GUIDE:         Empathy: [we understand...]
               Authority: [credentials, proof]
PLAN:          1. [Step]  2. [Step]  3. [Step]
CTA:           Direct: [primary action]
               Transitional: [secondary action]
FAILURE:       [What happens if they don't act]
SUCCESS:       [What life looks like after]
```

---

## Mapping BrandScript to Website Sections

| BrandScript Element | Website Section | Design Brief Phase |
|---------------------|----------------|-------------------|
| Character desire | Hero headline | Phase 3 — Hero |
| External problem | Hero sub-headline or problem section | Phase 3 — Hero |
| Internal problem | Problem section, testimonial framing | Phase 3 — Why Us |
| Philosophical wrong | Mission statement, about page | Phase 3 — Why Us |
| Guide empathy | Why Us intro, about page lead | Phase 3 — Why Us |
| Guide authority | Credentials, reviews, certifications | Phase 3 — Why Us |
| Plan | How It Works (3 steps) | Phase 3 — Services |
| Direct CTA | Nav button, hero CTA, contact section | Phase 3 — Hero, Contact |
| Transitional CTA | Hero secondary button, mid-page link | Phase 3 — Hero |
| Failure | Stakes sentence in problem section | Phase 3 — Hero |
| Success | Transformation section, testimonial outcomes | Phase 3 — Why Us |

---

> This file is a reference. It stays in the starter kit and gets copied
> to each project for context. You do not need to re-research this
> framework — just apply it via `STORYBRAND_PROMPT.md`.
