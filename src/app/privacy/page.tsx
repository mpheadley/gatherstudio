// Privacy policy page — boilerplate template populated from site-config.ts.

import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}. How we collect, use, and protect your information.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="section pt-32">
      <div className="container mx-auto px-4 max-w-3xl prose">
        <h1>Privacy Policy</h1>
        <p className="text-[var(--text-muted)]">
          Effective date: May 06, 2026
        </p>

        <h2>Information We Collect</h2>
        <p>
          When you visit {siteConfig.name} ({siteConfig.domain}), we may collect
          certain information automatically, including your IP address, browser
          type, and pages visited. If you fill out a contact form, we collect the
          information you provide (name, email, phone number, and message).
        </p>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your inquiries and provide customer service</li>
          <li>Improve our website and services</li>
          <li>Analyze website traffic and usage patterns</li>
          <li>Send you information you&apos;ve requested</li>
        </ul>

        <h2>Cookies and Analytics</h2>
        <p>
          We use Google Analytics (GA4) to understand how visitors interact with
          our website. Analytics cookies are only set after you accept cookies via
          our consent banner. You can decline cookies, and no tracking data will
          be collected.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          Form submissions are processed by Formspree. Their privacy policy is
          available at{" "}
          <a
            href="https://formspree.io/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            formspree.io/legal/privacy-policy
          </a>
          .
        </p>

        <h2>Data Sharing</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal information
          to third parties. This does not include trusted third parties who assist
          us in operating our website, conducting our business, or serving you, as
          long as those parties agree to keep this information confidential.
        </p>

        <h2>Contact</h2>
        <p>
          If you have any questions about this Privacy Policy, contact us at{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or call{" "}
          <a href={`tel:${siteConfig.phone.href}`}>{siteConfig.phone.display}</a>.
        </p>
      </div>
    </section>
  );
}
