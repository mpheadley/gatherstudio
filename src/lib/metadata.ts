// Metadata helper — generates per-page metadata from site-config.ts + page props.
// Use in each page's generateMetadata() or export const metadata.

import type { Metadata } from "next";
import { siteConfig } from "./site-config";

interface PageMetaProps {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: PageMetaProps): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      type: "website",
      siteName: siteConfig.name,
      images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: ["/images/og-image.webp"],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}

// MDX content page metadata — for blog posts, profiles, case studies with MDX frontmatter.
//
// Handles two patterns common in content sites:
//
// 1. metaDescription ?? excerpt
//    The excerpt serves as the editorial lede on card grids; metaDescription is the
//    search-optimized version (150–160 chars, keyword-first). If metaDescription is
//    absent, excerpt fires as the fallback — existing content doesn't break.
//
// 2. name vs title field split
//    Use when the H1 is a creative/literary headline ("The Burning Bus") but the
//    <title> tag needs to be findable ("Freedom Riders National Monument — Anniston, AL").
//    Pass the entity name as `entityName` and the literary headline as `ogTitle`.
//    If `entityName` is absent, `title` is used for both.
//
// Frontmatter shape this expects:
//   title: "Literary headline for the H1"
//   name: "Entity name for the <title> tag"       ← optional, falls back to title
//   excerpt: "Editorial lede shown on card grids"
//   metaDescription: "150–160 char SEO version"   ← optional, falls back to excerpt
//   heroImage: "/images/..."                       ← optional OG image override

interface ContentMetaProps {
  title: string;
  excerpt: string;
  path: string;
  entityName?: string;       // e.g. "Freedom Riders National Monument" — used in <title> tag
  ogTitle?: string;          // literary headline for OG/Twitter — defaults to title
  metaDescription?: string;  // SEO-optimized description — falls back to excerpt
  heroImage?: string;        // OG image — falls back to site default
  heroAlt?: string;
  datePublished?: string;
  dateModified?: string;
  tags?: string[];
}

export function generateContentMetadata({
  title,
  excerpt,
  path,
  entityName,
  ogTitle,
  metaDescription,
  heroImage,
  heroAlt,
  datePublished,
  dateModified,
  tags,
}: ContentMetaProps): Metadata {
  const url = `${siteConfig.url}${path}`;
  const pageTitle = entityName ?? title;
  const socialTitle = ogTitle ?? title;
  const seoDescription = metaDescription ?? excerpt;
  const ogImage = heroImage ?? "/images/og-image.webp";

  return {
    title: pageTitle,
    description: seoDescription,
    alternates: { canonical: path },
    keywords: tags,
    openGraph: {
      title: socialTitle,
      description: seoDescription,
      url,
      type: "article",
      siteName: siteConfig.name,
      ...(datePublished && { publishedTime: datePublished }),
      ...(dateModified && { modifiedTime: dateModified }),
      tags,
      images: [{ url: ogImage, width: 1200, height: 630, alt: heroAlt ?? pageTitle }],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: seoDescription,
      images: [ogImage],
    },
  };
}
