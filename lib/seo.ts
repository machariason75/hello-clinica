import type { Metadata } from "next";
import { siteConfig } from "./site-config";

/**
 * Build page-level metadata consistently (Open Graph + Twitter + canonical).
 * Satisfies the Constitution SEO requirements: dynamic metadata, Open Graph,
 * canonical URLs. Schema markup is emitted via <JsonLd /> where relevant.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
}: {
  title: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const desc = description ?? siteConfig.description;
  const fullTitle =
    path === "/" ? `${siteConfig.name} — ${siteConfig.tagline}` : `${title} · ${siteConfig.name}`;

  return {
    title: fullTitle,
    description: desc,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
    },
  };
}

/** Organization JSON-LD for the homepage. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email.primary,
  };
}

/* ------------------------------------------------------------------ */
/* Structured data (schema.org)                                        */
/*                                                                     */
/* These produce RICH RESULTS in Google — the FAQ dropdowns, course     */
/* cards and breadcrumb trails that make a listing take up more of the  */
/* page and get clicked more often. Previously only the site-level      */
/* Organization schema was emitted, so no content page could earn one.  */
/* ------------------------------------------------------------------ */

/** A quiz/practice set, described as a learning resource. */
export function quizJsonLd(opts: {
  title: string;
  description: string;
  path: string;
  questionCount: number;
  isFree: boolean;
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Quiz",
    name: opts.title,
    description: opts.description,
    url: `${siteConfig.url}${opts.path}`,
    educationalLevel: "Professional",
    learningResourceType: "Practice problem set",
    numberOfQuestions: opts.questionCount,
    ...(opts.category ? { about: { "@type": "Thing", name: opts.category } } : {}),
    isAccessibleForFree: opts.isFree,
    provider: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

/** A Question Bank section, described as a course. */
export function courseJsonLd(opts: {
  title: string;
  description: string;
  path: string;
  isFree: boolean;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: opts.title,
    description: opts.description,
    url: `${siteConfig.url}${opts.path}`,
    isAccessibleForFree: opts.isFree,
    provider: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    // Google requires this on Course markup; without it the rich result is
    // rejected silently.
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "PT1H",
    },
  };
}

/** A book in the library. */
export function bookJsonLd(opts: {
  title: string;
  author: string;
  description: string;
  path: string;
  image?: string | null;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: opts.title,
    author: { "@type": "Person", name: opts.author },
    description: opts.description,
    url: `${siteConfig.url}${opts.path}`,
    ...(opts.image ? { image: opts.image } : {}),
  };
}

/**
 * FAQ markup — the highest-value schema type on this site.
 * Google renders these as expandable questions directly in the results, which
 * dramatically increases the space a listing occupies.
 */
export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };
}

/** Breadcrumb trail — shows the site hierarchy under a search result. */
export function breadcrumbJsonLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${siteConfig.url}${t.path}`,
    })),
  };
}
