// Contact page — form with Formspree integration + contact info sidebar.
// Uses ContactForm (client component) and ContactInfo (server component).

"use client";

import { PageHero, ContactForm, ContactInfo } from "@/app/components/sections";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        description="We'd love to hear from you. Fill out the form or give us a call."
        variant="minimal"
      />

      <section className="section">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <ContactForm />
            </div>
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
}
