// Contact info sidebar — reads from siteConfig, no content props needed.

import { siteConfig } from "@/lib/site-config";

interface ContactInfoProps {
  showPhone?: boolean;
  showEmail?: boolean;
  showHours?: boolean;
  showAddress?: boolean;
  showServiceArea?: boolean;
}

export default function ContactInfo({
  showPhone = true,
  showEmail = true,
  showHours = true,
  showAddress = false,
  showServiceArea = true,
}: ContactInfoProps) {
  return (
    <div className="space-y-8">
      {showPhone && (
        <div>
          <h3 className="text-lg font-bold mb-2">Call Us</h3>
          <a
            href={`tel:${siteConfig.phone.href}`}
            className="text-[var(--primary)] font-medium hover:underline"
            data-cta="phone"
          >
            {siteConfig.phone.display}
          </a>
        </div>
      )}
      {showEmail && (
        <div>
          <h3 className="text-lg font-bold mb-2">Email</h3>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-[var(--primary)] hover:underline"
          >
            {siteConfig.email}
          </a>
        </div>
      )}
      {showHours && (
        <div>
          <h3 className="text-lg font-bold mb-2">Hours</h3>
          <p className="text-[var(--text-muted)]">{siteConfig.hours}</p>
        </div>
      )}
      {showAddress && siteConfig.address.street && (
        <div>
          <h3 className="text-lg font-bold mb-2">Location</h3>
          <p className="text-[var(--text-muted)]">
            {siteConfig.address.street}<br />
            {siteConfig.address.city}, {siteConfig.address.stateAbbr} {siteConfig.address.zip}
          </p>
        </div>
      )}
      {showServiceArea && (
        <div>
          <h3 className="text-lg font-bold mb-2">Service Area</h3>
          <p className="text-[var(--text-muted)]">{siteConfig.serviceArea}</p>
        </div>
      )}
    </div>
  );
}
