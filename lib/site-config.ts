/**
 * Hello Clinica — central site configuration.
 * Single source of truth for brand metadata and navigation, derived from the
 * FROZEN Content Structure + System Architecture route map. Navigation order
 * and labels must not change without owner authorization.
 */

export const siteConfig = {
  name: "Hello Clinica",
  shortName: "Hello Clinica",
  tagline: "Navigate Your Medical School Journey With Confidence",
  description:
    "Hello Clinica provides expert advising, free resources, and curated books for future healthcare professionals — from pre-med through residency.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: {
    primary: "helloqlinica@gmail.com",
    secondary: "helloqlinica@outlook.com",
  },
  locale: "en_US",
} as const;

/** Primary sidebar navigation (frozen order). */
export const sidebarNav: { label: string; href: string; isSearch?: boolean }[] = [
  { label: "Search", href: "/search", isSearch: true },
  { label: "Free Resources", href: "/resources" },
  { label: "Advising Services", href: "/advising" },
  { label: "Books", href: "/books" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Footer navigation columns. */
export const footerNav = {
  explore: [
    { label: "Free Resources", href: "/resources" },
    { label: "Advising Services", href: "/advising" },
    { label: "Books", href: "/books" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
} as const;

/**
 * Pages that exist in Phase 1 and are safe to surface in the search modal.
 * Later phases extend the index with resources, books, FAQs and testimonials.
 */
export const searchablePages: { title: string; href: string; type: string; keywords: string }[] = [
  { title: "Home", href: "/", type: "Page", keywords: "homepage start advising resources books" },
  { title: "About Hello Clinica", href: "/about", type: "Page", keywords: "mission vision story team values" },
  { title: "Free Resources", href: "/resources", type: "Section", keywords: "guides admissions interview personal statement timeline study" },
  { title: "Advising Services", href: "/advising", type: "Section", keywords: "admissions advising application review interview coaching packages" },
  { title: "Books", href: "/books", type: "Section", keywords: "recommended medical school study guides digital downloads" },
  { title: "Contact", href: "/contact", type: "Page", keywords: "email phone message support questions" },
  { title: "Privacy Policy", href: "/privacy-policy", type: "Legal", keywords: "privacy data" },
  { title: "Terms of Service", href: "/terms-of-service", type: "Legal", keywords: "terms conditions" },
  { title: "Cookie Policy", href: "/cookie-policy", type: "Legal", keywords: "cookies tracking" },
];

export type SidebarNavItem = (typeof sidebarNav)[number];
