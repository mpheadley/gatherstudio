// Custom 404 page — noindex, friendly message with link back to home.

import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="section min-h-[60vh] flex items-center justify-center">
      <div className="container mx-auto px-4 text-center max-w-lg">
        <h1 className="text-6xl font-bold text-[var(--primary)] mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-[var(--text-muted)] mb-8">
          Sorry, we couldn&apos;t find what you&apos;re looking for. The page may
          have been moved or no longer exists.
        </p>
        <Link href="/" className="btn-primary">
          Back to {siteConfig.nameShort}
        </Link>
      </div>
    </section>
  );
}
