// Attribution anchor text rotation — SEO diversity for "Built by" footer link.
// Returns a different anchor text variant based on the current page path.

const ANCHOR_TEXTS = [
  "Headley Web & SEO",
  "Local Business Website Builder",
  "Small Business Web Design",
  "Websites for Local Businesses",
  "Professional Web Design",
  "Local SEO & Web Design",
  "Headley Web Design",
  "Web Design & SEO in Alabama",
];

/** Get a rotated attribution anchor text. Call with no args for random, or pass a page index. */
export function getAttributionLink(pageIndex?: number): string {
  if (pageIndex !== undefined) {
    return ANCHOR_TEXTS[pageIndex % ANCHOR_TEXTS.length];
  }
  // Default: use a stable rotation based on current date (changes daily, not per-render)
  const day = new Date().getDate();
  return ANCHOR_TEXTS[day % ANCHOR_TEXTS.length];
}
