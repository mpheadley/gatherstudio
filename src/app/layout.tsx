// Root layout — wraps every page with fonts, nav, footer, and global providers.

import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import ScrollReveal from "./components/ScrollReveal";
// LenisProvider available in components/ — wire in if site is content/editorial/portfolio.
// Skip for utility/tool sites. See nextjs-starter-kit/CLAUDE.md for guidance.
import { siteConfig } from "@/lib/site-config";

const headingFont = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const bodyFont = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.brandDescriptor}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.brandDescriptor,
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.brandDescriptor,
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.brandDescriptor,
    images: ["/images/og-image.webp"],
  },
  authors: [
    { name: siteConfig.ownerName },
    { name: "Headley Web & SEO", url: "https://headleyweb.com" },
  ],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        {/* Built by Headley Web & SEO | headleyweb.com */}
        <body
          className={`${headingFont.variable} ${bodyFont.variable} antialiased`}
        >
          <ScrollReveal />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-[var(--primary)] focus:text-[var(--btn-text)] focus:px-4 focus:py-2 focus:rounded"
          >
            Skip to content
          </a>
          <Nav />
          <main id="main-content">{children}</main>
          <Footer />
          <CookieBanner />
        </body>
      </html>
    </ClerkProvider>
  );
}
