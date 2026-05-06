// Preview layout — hides site nav/footer/cookie banner so components render clean.
// Uses CSS to suppress the site chrome without restructuring the app into route groups.

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Component Preview",
  robots: { index: false, follow: false },
};

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Hide site chrome on the preview page */}
      <style>{`
        header, footer, [role="alert"] { display: none !important; }
        #main-content { margin: 0; padding: 0; }
        .sr-only[href="#main-content"] { display: none !important; }
      `}</style>
      {children}
    </>
  );
}
