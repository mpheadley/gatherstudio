// Site footer — contact info, links, attribution with anchor text rotation.

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { getAttributionLink } from "@/lib/attribution";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-dark section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3
              className="text-xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {siteConfig.nameShort}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {siteConfig.brandDescriptor}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.phone.href}`}
                  className="hover:text-[var(--primary)] transition-colors"
                  data-cta="phone"
                >
                  {siteConfig.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-[var(--primary)] transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.hours}</li>
              <li>
                {siteConfig.address.city}, {siteConfig.address.stateAbbr}{" "}
                {siteConfig.address.zip}
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[var(--primary)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-[var(--primary)] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
            {siteConfig.footerDisclaimer && (
              <span className="block md:inline md:ml-2">
                {siteConfig.footerDisclaimer}
              </span>
            )}
          </p>
          <p>
            Built by{" "}
            <a
              href="https://headleyweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--primary)] hover:underline"
            >
              {getAttributionLink()}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
