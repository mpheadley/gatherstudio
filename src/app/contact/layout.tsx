// Contact layout — metadata lives here because contact/page.tsx is a client component.

import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, contactPointSchema } from "@/lib/schema";
import JsonLd from "@/app/components/seo/JsonLd";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}. Call ${siteConfig.phone.display} or send a message. ${siteConfig.brandDescriptor}`,
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ])}
      />
      <JsonLd data={contactPointSchema()} />
      {children}
    </>
  );
}
