/**
 * Database seed — idempotent.
 *
 * Seeds:
 *   1) Bootstrap Super Admin (ADMIN_EMAIL + ADMIN_PASSWORD_HASH + ADMIN_NAME).
 *   2) The single SiteSettings row.
 *   3) SAMPLE resources (Phase 2) — clearly marked, created only when the
 *      resources table is empty, so re-running never duplicates them. Remove
 *      them later from the admin panel (or `prisma studio`).
 *   4) The SearchIndex (rebuilt every run from current published content).
 *
 * Note: the app uses lib/search-index.ts for indexing, but the seed inlines an
 * equivalent build because the `tsx` runner does not resolve "@/..." path
 * aliases. Keep the two in sync if you change the indexed fields.
 *
 * Run with: npm run db:seed
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const SAMPLE_PDF = "https://pdfobject.com/pdf/sample.pdf";

const CATEGORIES: { enum: string; slug: string; title: string; description: string }[] = [
  { enum: "MEDICAL_SCHOOL_ADMISSIONS", slug: "admissions", title: "Medical School Admissions", description: "Guide students through admissions preparation." },
  { enum: "APPLICATION_TIMELINE", slug: "application-timeline", title: "Application Timeline", description: "The application planning process, month by month." },
  { enum: "PERSONAL_STATEMENT_GUIDE", slug: "personal-statement-guide", title: "Personal Statement Guide", description: "Support essay development from draft to polish." },
  { enum: "INTERVIEW_GUIDE", slug: "interview-guide", title: "Interview Guide", description: "Prepare for every interview format with confidence." },
  { enum: "CLINICAL_EXPERIENCE", slug: "clinical-experience", title: "Clinical Experience", description: "Guide experience acquisition across clinical settings." },
  { enum: "VOLUNTEER_GUIDE", slug: "volunteer-guide", title: "Volunteer Guide", description: "Plan community service that is meaningful and sustained." },
  { enum: "SHADOWING_GUIDE", slug: "shadowing-guide", title: "Shadowing Guide", description: "Support physician shadowing from outreach to follow-up." },
  { enum: "STUDY_RESOURCES", slug: "study-resources", title: "Study Resources", description: "Strengthen academic performance and study habits." },
  { enum: "CAREER_EXPLORATION", slug: "career-exploration", title: "Career Exploration", description: "Discover healthcare careers across disciplines." },
];


const BOOK_CATEGORIES: { enum: string; slug: string; title: string }[] = [
  { enum: "RECOMMENDED_BOOKS", slug: "recommended-books", title: "Recommended Books" },
  { enum: "MEDICAL_SCHOOL_BOOKS", slug: "medical-school-books", title: "Medical School Books" },
  { enum: "STUDY_GUIDES", slug: "study-guides", title: "Study Guides" },
  { enum: "DIGITAL_DOWNLOADS", slug: "digital-downloads", title: "Digital Downloads" },
];

/** Sample books per category. Physical titles have no file; digital ones do. */
function sampleBooks() {
  return [
    { title: "The Premed Playbook: Guide to the Application Process", author: "Sample Author", category: "RECOMMENDED_BOOKS", description: "A practical walkthrough of the application process from start to finish. (Sample listing.)", fileUrl: null as string | null, featured: true, published: true },
    { title: "Guide to the Medical School Personal Statement", author: "Sample Author", category: "RECOMMENDED_BOOKS", description: "How to plan, draft, and refine a compelling personal statement. (Sample listing.)", fileUrl: null as string | null, featured: false, published: true },
    { title: "Guyton and Hall Textbook of Medical Physiology", author: "Hall & Hall", category: "MEDICAL_SCHOOL_BOOKS", description: "A core physiology reference used across medical curricula. (Sample listing.)", fileUrl: null as string | null, featured: true, published: true },
    { title: "Robbins & Cotran Pathologic Basis of Disease", author: "Kumar, Abbas, Aster", category: "MEDICAL_SCHOOL_BOOKS", description: "A foundational pathology text for medical students. (Sample listing.)", fileUrl: null as string | null, featured: false, published: true },
    { title: "High-Yield Study Guide: Foundations", author: "Hello Clinica", category: "STUDY_GUIDES", description: "A concise, high-yield review guide for core concepts. (Sample content.)", fileUrl: SAMPLE_PDF, featured: true, published: true },
    { title: "Exam Strategy Workbook", author: "Hello Clinica", category: "STUDY_GUIDES", description: "Practice strategies and timing drills for test day. (Sample content.)", fileUrl: SAMPLE_PDF, featured: false, published: true },
    { title: "Application Timeline Planner (PDF)", author: "Hello Clinica", category: "DIGITAL_DOWNLOADS", description: "A downloadable planner to map your application cycle. (Sample content.)", fileUrl: SAMPLE_PDF, featured: true, published: true },
    { title: "Personal Statement Worksheet (PDF)", author: "Hello Clinica", category: "DIGITAL_DOWNLOADS", description: "A guided worksheet to brainstorm and outline your essay. (Sample content.)", fileUrl: SAMPLE_PDF, featured: false, published: true },
  ];
}

/** Two sample resources per category. */
function sampleResources() {
  const rows: {
    title: string;
    description: string;
    category: string;
    resourceFile: string;
    featured: boolean;
    published: boolean;
  }[] = [];
  for (const c of CATEGORIES) {
    rows.push({
      title: `${c.title}: Getting Started Guide`,
      description: `A practical introduction to ${c.title.toLowerCase()} — what to focus on first and how to plan your next steps. (Sample content.)`,
      category: c.enum,
      resourceFile: SAMPLE_PDF,
      featured: true,
      published: true,
    });
    rows.push({
      title: `${c.title}: Checklist & Templates`,
      description: `Downloadable checklists and templates to keep your ${c.title.toLowerCase()} organized and on track. (Sample content.)`,
      category: c.enum,
      resourceFile: SAMPLE_PDF,
      featured: false,
      published: true,
    });
  }
  return rows;
}

/** Sample consultation packages. */
function samplePackages() {
  return [
    { packageName: "Essentials", description: "Focused guidance for a specific milestone — ideal if you need targeted help.", totalHours: 3, totalCost: 450, features: ["3 advising hours", "Personal statement review", "Email support between sessions"], buttonText: "Proceed", sortOrder: 1, published: true },
    { packageName: "Comprehensive", description: "End-to-end support across your application, from strategy to submission.", totalHours: 8, totalCost: 1100, features: ["8 advising hours", "Full application review", "School-list strategy", "Two mock interviews", "Priority email support"], buttonText: "Proceed", sortOrder: 2, published: true },
    { packageName: "Premier", description: "Our most complete package for applicants who want guidance at every step.", totalHours: 15, totalCost: 1950, features: ["15 advising hours", "Unlimited essay reviews", "School-list strategy", "Four mock interviews", "Interview coaching", "Priority support"], buttonText: "Proceed", sortOrder: 3, published: true },
  ];
}

async function rebuildSearchIndex() {
  await prisma.searchIndex.deleteMany({});

  const rows: {
    contentType: string;
    contentId: string;
    title: string;
    body: string;
    url: string;
  }[] = [];

  // Static pages
  const pages = [
    { title: "Home", url: "/", type: "Page", keywords: "homepage advising resources books" },
    { title: "About Hello Clinica", url: "/about", type: "Page", keywords: "mission vision story team values" },
    { title: "Free Resources", url: "/resources", type: "Section", keywords: "guides admissions interview essay timeline study" },
    { title: "Advising Services", url: "/advising", type: "Section", keywords: "admissions advising application review interview coaching packages" },
    { title: "Books", url: "/books", type: "Section", keywords: "recommended medical school study guides digital downloads" },
    { title: "Contact", url: "/contact", type: "Page", keywords: "email phone message support questions" },
  ];
  for (const p of pages) {
    rows.push({ contentType: p.type, contentId: p.url, title: p.title, body: p.keywords, url: p.url });
  }

  // Resource categories
  for (const c of CATEGORIES) {
    rows.push({ contentType: "Resource", contentId: `cat:${c.slug}`, title: c.title, body: c.description, url: `/resources/${c.slug}` });
  }

  // Published resources
  const resources = await prisma.resource.findMany({ where: { published: true, archived: false } });
  for (const r of resources) {
    const cat = CATEGORIES.find((c) => c.enum === r.category);
    rows.push({ contentType: "Resource", contentId: r.id, title: r.title, body: r.description, url: cat ? `/resources/${cat.slug}` : "/resources" });
  }

  // Published books
  const books = await prisma.book.findMany({ where: { published: true, archived: false } });
  for (const b of books) {
    const bc = BOOK_CATEGORIES.find((c) => c.enum === b.category);
    rows.push({ contentType: "Book", contentId: b.id, title: b.title, body: `${b.author} ${b.description}`, url: bc ? `/books/${bc.slug}/${b.id}` : "/books" });
  }

  if (rows.length) await prisma.searchIndex.createMany({ data: rows });
  return rows.length;
}

async function main() {
  const email = process.env.ADMIN_EMAIL?.toLowerCase().trim();
  const passwordHash = process.env.ADMIN_PASSWORD_HASH?.trim();
  const name = process.env.ADMIN_NAME?.trim() ?? "Hello Clinica Admin";

  if (!email || !passwordHash) {
    console.warn("[seed] ADMIN_EMAIL or ADMIN_PASSWORD_HASH not set — skipping admin seed.");
  } else {
    const admin = await prisma.admin.upsert({
      where: { email },
      update: { name, passwordHash, role: "SUPER_ADMIN" },
      create: { email, name, passwordHash, role: "SUPER_ADMIN" },
    });
    console.log(`[seed] Admin ready: ${admin.email}`);
  }

  const existingSettings = await prisma.siteSettings.findFirst();
  if (!existingSettings) {
    await prisma.siteSettings.create({ data: {} });
    console.log("[seed] SiteSettings row created.");
  } else {
    console.log("[seed] SiteSettings already present.");
  }

  const resourceCount = await prisma.resource.count();
  if (resourceCount === 0) {
    await prisma.resource.createMany({ data: sampleResources() });
    console.log(`[seed] Inserted ${CATEGORIES.length * 2} SAMPLE resources.`);
  } else {
    console.log(`[seed] Resources already present (${resourceCount}) — skipping sample insert.`);
  }

  const bookCount = await prisma.book.count();
  if (bookCount === 0) {
    await prisma.book.createMany({ data: sampleBooks() });
    console.log(`[seed] Inserted ${sampleBooks().length} SAMPLE books.`);
  } else {
    console.log(`[seed] Books already present (${bookCount}) — skipping sample insert.`);
  }

  const packageCount = await prisma.package.count();
  if (packageCount === 0) {
    await prisma.package.createMany({ data: samplePackages() });
    console.log(`[seed] Inserted ${samplePackages().length} SAMPLE packages.`);
  } else {
    console.log(`[seed] Packages already present (${packageCount}) — skipping sample insert.`);
  }

  const indexed = await rebuildSearchIndex();
  console.log(`[seed] Search index rebuilt: ${indexed} entries.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error("[seed] Failed:", error);
    await prisma.$disconnect();
    process.exit(1);
  });
