// Cookie consent banner — gates GA4 loading behind user consent.
// Stores preference in localStorage. GA4 script only loads after accept.

"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

const CONSENT_KEY = "cookie-consent";

export default function CookieBanner() {
  const [consent, setConsent] = useState<"pending" | "accepted" | "declined">(
    "pending"
  );

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === "accepted" || stored === "declined") {
      setConsent(stored);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setConsent("accepted");
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setConsent("declined");
  };

  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID?.trim();

  return (
    <>
      {/* GA4 — only loads after consent */}
      {consent === "accepted" && ga4Id && ga4Id !== "NONE" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${ga4Id}');
            `}
          </Script>
        </>
      )}

      {/* Banner UI */}
      {consent === "pending" && (
        <div
          className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--dark)] text-white p-4 shadow-lg"
          role="alert"
          aria-live="polite"
        >
          <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-300">
              We use cookies to analyze site traffic and improve your experience.
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={handleDecline}
                className="text-sm text-gray-400 hover:text-white transition-colors px-4 py-2"
              >
                Decline
              </button>
              <button onClick={handleAccept} className="btn-primary text-sm">
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
