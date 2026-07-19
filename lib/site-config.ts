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
    { label: "Question Bank", href: "/question-bank" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "My Account", href: "/account" },
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
  { title: "Question Bank", href: "/question-bank", type: "Section", keywords: "practice questions quiz nclex hesi teas nursing exam test prep" },
  { title: "Request a Consultation", href: "/request-consultation", type: "Page", keywords: "consultation request advising one-on-one booking appointment talk call" },
  { title: "Privacy Policy", href: "/privacy-policy", type: "Legal", keywords: "privacy data" },
  { title: "Terms of Service", href: "/terms-of-service", type: "Legal", keywords: "terms conditions" },
  { title: "Cookie Policy", href: "/cookie-policy", type: "Legal", keywords: "cookies tracking" },
];

export type SidebarNavItem = (typeof sidebarNav)[number];

/* ---------------------------------------------------------------------------
 * MEGA-MENU NAVIGATION (File 17 — Amendment Register v1.2, owner-authorized).
 * Desktop renders a horizontal mega-menu with dropdown panels; mobile/tablet
 * collapses to the drawer. Top-level items resolve to existing Phase 1 hub
 * routes. Dropdown children point at their parent hub with a section hash so
 * NO route 404s in Phase 1 — later phases repoint each child to its dedicated
 * page (e.g. /resources/personal-statement-guide) as those pages ship.
 * ------------------------------------------------------------------------- */

export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const primaryNav: NavItem[] = [
  {
    label: "Free Resources",
    href: "/resources",
    children: [
      { label: "Medical School Admissions", href: "/resources/admissions" },
      { label: "Application Timeline", href: "/resources/application-timeline" },
      { label: "Personal Statement Guide", href: "/resources/personal-statement-guide" },
      { label: "Interview Guide", href: "/resources/interview-guide" },
      { label: "Clinical Experience", href: "/resources/clinical-experience" },
      { label: "Volunteer Guide", href: "/resources/volunteer-guide" },
      { label: "Shadowing Guide", href: "/resources/shadowing-guide" },
      { label: "Study Resources", href: "/resources/study-resources" },
      { label: "Career Exploration", href: "/resources/career-exploration" },
      { label: "Nursing Resources", href: "/resources/nursing-resources" },
    ],
  },
  {
    label: "Advising Services",
    href: "/advising",
    children: [
      { label: "Admissions Advising", href: "/advising#admissions-advising" },
      { label: "Application Review", href: "/advising#application-review" },
      { label: "Exam Coaching", href: "/advising#exam-coaching" },
      { label: "Consultation Packages", href: "/advising#consultation-packages" },
    ],
  },
  {
    label: "Books",
    href: "/books",
    children: [
      { label: "Recommended Books", href: "/books/recommended-books" },
      { label: "Medical School Books", href: "/books/medical-school-books" },
      { label: "Nursing Books", href: "/books/nursing-books" },
      { label: "NCLEX Books", href: "/books/nclex-books" },
      { label: "Study Guides", href: "/books/study-guides" },
      { label: "Digital Downloads", href: "/books/digital-downloads" },
    ],
  },
  { label: "Question Bank", href: "/question-bank" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/**
 * Persistent header CTA. Points to /contact in Phase 1 (the live intake form);
 * repoint to /request-consultation once the consultation page ships.
 */
export const primaryCta = { label: "Request a Consultation", href: "/request-consultation" };
