// Global scroll-triggered animation observer.
// Renders null — place in layout.tsx so it runs on every page.
// Adds `.visible` class to any element with an animate-* class when it enters the viewport.
// Re-runs on route change via usePathname() so newly rendered elements are observed.

"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Respect reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document
        .querySelectorAll(
          ".animate-on-scroll, .animate-from-left, .animate-from-right, .animate-from-bottom, .animate-from-top"
        )
        .forEach((el) => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    document
      .querySelectorAll(
        ".animate-on-scroll:not(.visible), .animate-from-left:not(.visible), .animate-from-right:not(.visible), .animate-from-bottom:not(.visible), .animate-from-top:not(.visible)"
      )
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
