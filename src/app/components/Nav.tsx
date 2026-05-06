// Site navigation — desktop nav + mobile hamburger menu.
// Reads nav items from site-config.ts. Handles scroll state and active page.

"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Header scroll behavior — adds visual weight after 40px
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    if (mobileOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-xl font-bold"
          style={{
            fontFamily: "var(--font-heading)",
            color: scrolled ? "var(--dark)" : "#ffffff",
          }}
        >
          {siteConfig.nameShort}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors"
              style={{
                color: pathname === item.href
                  ? "var(--primary)"
                  : scrolled ? "var(--text-body)" : "rgba(255,255,255,0.9)",
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary text-sm">
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-[var(--dark)] transition-transform ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--dark)] transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--dark)] transition-transform ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setMobileOpen(false)}
          />
          <nav
            className="fixed top-0 right-0 bottom-0 w-72 bg-white z-50 p-8 shadow-xl flex flex-col gap-6"
            aria-label="Mobile"
          >
            <button
              className="self-end text-2xl"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-lg font-medium ${
                  pathname === item.href
                    ? "text-[var(--primary)]"
                    : "text-[var(--dark)]"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary text-center mt-4"
              onClick={() => setMobileOpen(false)}
            >
              Get a Quote
            </Link>
          </nav>
        </>
      )}
    </header>
  );
}
