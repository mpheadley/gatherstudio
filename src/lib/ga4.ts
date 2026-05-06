// GA4 event tracking helpers.
// Component-level approach — each trackable component calls these directly.
// Only fires if consent was granted (gtag exists on window).

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function track(eventName: string, params?: Record<string, string>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
}

/** Track phone link clicks — call from onClick on <a href="tel:"> */
export function trackPhoneClick() {
  track("phone_click", { method: "tel_link" });
}

/** Track form submissions — call from onSubmit handler */
export function trackFormSubmit(formName: string = "contact") {
  track("form_submit", { form_name: formName });
}

/** Track CTA button clicks — call from onClick on primary CTAs */
export function trackCtaClick(ctaLabel: string) {
  track("cta_click", { cta_label: ctaLabel });
}
