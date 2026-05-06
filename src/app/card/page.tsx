import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, ArrowRight } from "lucide-react";
import CardScanTracker from "./CardScanTracker";

export const metadata: Metadata = {
  title: "Matt Headley | GatherStudio Hub",
  description:
    "GatherStudio Hub — Anniston, Alabama. Call (256) 317-0000 or visit our website.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CardPage() {
  return (
    <main
      id="main-content"
      className="min-h-[80vh] flex items-center justify-center px-4 py-12"
    >
      <CardScanTracker />

      <div className="w-full max-w-sm text-center">
        {/* Headshot */}
        <div className="mx-auto mb-6 w-32 h-32 rounded-full overflow-hidden border-4 border-secondary shadow-lg">
          <Image
            src="/images/headshot.webp"
            alt="Matt Headley, owner of GatherStudio Hub"
            width={128}
            height={128}
            quality={80}
            priority
            className="object-cover w-full h-full"
          />
        </div>

        {/* Name & tagline */}
        <h1 className="text-2xl font-bold text-dark mb-1">
          Thanks for connecting
        </h1>
        <p className="text-text-light text-sm mb-1">Matt Headley</p>
        <p className="text-text text-base mb-8 leading-relaxed">
          One platform. Every organizer.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col gap-3 mb-8">
          <a
            href="/"
            className="btn-primary flex items-center justify-center gap-2 w-full"
          >
            See Our Work
            <ArrowRight size={18} />
          </a>

          <a
            href="/contact"
            className="btn-secondary flex items-center justify-center gap-2 w-full"
          >
            Get in Touch
          </a>
        </div>

        {/* Contact info */}
        <div className="flex items-center justify-center gap-4 text-sm text-text-light mb-4">
          <a
            href="tel:+12563170000"
            className="flex items-center gap-1.5 hover:text-secondary transition-colors"
          >
            <Phone size={14} />
            (256) 317-0000
          </a>
          <span>&middot;</span>
          <a
            href="mailto:hello@gatherstudio.app"
            className="flex items-center gap-1.5 hover:text-secondary transition-colors"
          >
            <Mail size={14} />
            Email
          </a>
        </div>

        {/* Location */}
        <p className="text-text-light text-xs">
          Anniston, Alabama
        </p>
      </div>
    </main>
  );
}
