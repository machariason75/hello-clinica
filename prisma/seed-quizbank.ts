/**
 * Question Bank structure seed — idempotent (safe to run repeatedly).
 *
 * Builds the nested category tree (Nursing Exams, TEAS, HESI A2 Certifications,
 * Nursing Certifications, Colleges & Universities) with rich placeholder
 * descriptions and a few tagged external links to legitimate public educational
 * sites. Fixed ids mean re-running updates in place — never duplicates.
 *
 * It also re-parents the Drop-1 "NCLEX-RN" category under "Nursing
 * Certifications" so the sample quiz keeps working inside the new tree.
 *
 * All copy here is original; category names are generic exam names. Nothing is
 * copied from any third-party site. Replace/expand freely from the admin.
 *
 * Run:  npx tsx prisma/seed-quizbank.ts     (after `npx prisma db push`)
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Cat = {
  id: string;
  slug: string;
  title: string;
  description: string;
  overview?: string;
  icon?: string;
  parentId?: string;
  order?: number;
  featured?: boolean;
  premium?: boolean;
};

// Ordered root → leaf so parents exist before children are attached.
const CATEGORIES: Cat[] = [
  // ---- Top level ----
  { id: "qbc-nursing-exams", slug: "nursing-exams", title: "Nursing Exams", icon: "ClipboardList", order: 1, featured: true, premium: true,
    description: "Course-style practice across the core nursing subjects.",
    overview: "Practice by subject — fundamentals, med-surg, pharmacology, maternal and pediatric care, mental health and more. Each subject holds timed practice tests, study sets, and hand-picked resources." },
  { id: "qbc-teas", slug: "teas", title: "TEAS", icon: "BookA", order: 2, featured: true, premium: true,
    description: "ATI TEAS 7 practice across all four sections.",
    overview: "Get ready for the ATI TEAS Version 7 with section-by-section practice in Reading, Mathematics, Science, and English & Language Usage." },
  { id: "qbc-hesi-a2", slug: "hesi-a2-certifications", title: "HESI A2 Certifications", icon: "FlaskConical", order: 3, featured: true, premium: true,
    description: "HESI A2 admission-assessment practice by topic.",
    overview: "Prepare for the HESI A2 admission assessment with focused practice in each tested area, from reading and vocabulary to biology, chemistry, and anatomy & physiology." },
  { id: "qbc-nursing-cert", slug: "nursing-certifications", title: "Nursing Certifications", icon: "Stethoscope", order: 4, featured: true,
    description: "Licensure-style practice — NCLEX-RN and NCLEX-PN.",
    overview: "Licensure-exam-style practice with instant scoring, topic breakdowns, and full rationales." },
  { id: "qbc-colleges", slug: "colleges-universities", title: "Colleges & Universities", icon: "GraduationCap", order: 5,
    description: "Course-specific revision for your school — request access.",
    overview: "Studying a specific course at your college or university? Tell us your school and course and we'll set you up with tailored revision and course access. Sign in and submit a request, and our team will reach out shortly. (Request form coming in the next update — meanwhile, browse the sample sections below.)" },

  // ---- Nursing Exams children ----
  { id: "qbc-ne-fundamentals", slug: "ne-fundamentals-of-nursing", parentId: "qbc-nursing-exams", order: 1, icon: "ListChecks",
    title: "Fundamentals of Nursing", description: "Safety, basic care, and core nursing concepts." },
  { id: "qbc-ne-medsurg", slug: "ne-medical-surgical", parentId: "qbc-nursing-exams", order: 2, icon: "Stethoscope",
    title: "Medical-Surgical Nursing", description: "Adult health across body systems." },
  { id: "qbc-ne-pharm", slug: "ne-pharmacology", parentId: "qbc-nursing-exams", order: 3, icon: "Pill",
    title: "Pharmacology", description: "Drug classes, safety, and administration." },
  { id: "qbc-ne-maternal", slug: "ne-maternal-newborn", parentId: "qbc-nursing-exams", order: 4, icon: "HeartPulse",
    title: "Maternal & Newborn", description: "Prenatal, labor, postpartum, and newborn care." },
  { id: "qbc-ne-peds", slug: "ne-pediatric-nursing", parentId: "qbc-nursing-exams", order: 5, icon: "Activity",
    title: "Pediatric Nursing", description: "Growth, development, and childhood conditions." },
  { id: "qbc-ne-mental", slug: "ne-mental-health", parentId: "qbc-nursing-exams", order: 6, icon: "Brain",
    title: "Mental Health Nursing", description: "Psychiatric conditions and therapeutic care." },
  { id: "qbc-ne-community", slug: "ne-community-health", parentId: "qbc-nursing-exams", order: 7, icon: "Users",
    title: "Community & Public Health", description: "Population health and prevention." },

  // ---- TEAS branch ----
  { id: "qbc-teas-v7", slug: "ati-teas-version-7", parentId: "qbc-teas", order: 1, icon: "BookA",
    title: "ATI TEAS Version 7", description: "The four TEAS 7 sections.",
    overview: "Practice each section of the ATI TEAS Version 7 exam." },
  { id: "qbc-teas-reading", slug: "teas-reading", parentId: "qbc-teas-v7", order: 1, icon: "BookA",
    title: "Reading", description: "Comprehension, key ideas, and craft & structure." },
  { id: "qbc-teas-math", slug: "teas-mathematics", parentId: "qbc-teas-v7", order: 2, icon: "Calculator",
    title: "Mathematics", description: "Numbers, algebra, measurement, and data." },
  { id: "qbc-teas-science", slug: "teas-science", parentId: "qbc-teas-v7", order: 3, icon: "FlaskConical",
    title: "Science", description: "Anatomy & physiology, biology, chemistry, scientific reasoning." },
  { id: "qbc-teas-english", slug: "teas-english", parentId: "qbc-teas-v7", order: 4, icon: "BookA",
    title: "English & Language Usage", description: "Grammar, punctuation, and vocabulary." },

  // ---- HESI A2 children ----
  { id: "qbc-hesi-reading", slug: "hesi-reading-comprehension", parentId: "qbc-hesi-a2", order: 1, icon: "BookA",
    title: "Reading Comprehension", description: "Main idea, inference, and passage analysis." },
  { id: "qbc-hesi-vocab", slug: "hesi-vocabulary", parentId: "qbc-hesi-a2", order: 2, icon: "BookA",
    title: "Vocabulary", description: "General and health-related vocabulary." },
  { id: "qbc-hesi-math", slug: "hesi-mathematics", parentId: "qbc-hesi-a2", order: 3, icon: "Calculator",
    title: "Mathematics", description: "Basic operations, ratios, and dosage-relevant math." },
  { id: "qbc-hesi-bio", slug: "hesi-biology", parentId: "qbc-hesi-a2", order: 4, icon: "Dna",
    title: "Biology", description: "Cells, genetics, and biological molecules." },
  { id: "qbc-hesi-chem", slug: "hesi-chemistry", parentId: "qbc-hesi-a2", order: 5, icon: "FlaskConical",
    title: "Chemistry", description: "Atomic structure, reactions, and solutions." },
  { id: "qbc-hesi-anatomy", slug: "hesi-anatomy-physiology", parentId: "qbc-hesi-a2", order: 6, icon: "Activity",
    title: "Anatomy & Physiology", description: "Body systems and how they work together." },
  { id: "qbc-hesi-grammar", slug: "hesi-grammar", parentId: "qbc-hesi-a2", order: 7, icon: "BookA",
    title: "Grammar", description: "Parts of speech, sentence structure, and usage." },

  // ---- Nursing Certifications children (NCLEX-RN re-parented below) ----
  { id: "qbc-nclex-pn", slug: "nclex-pn", parentId: "qbc-nursing-cert", order: 2, icon: "Stethoscope",
    title: "NCLEX-PN", description: "Practical/vocational licensure-style practice." },
];

type Link = {
  id: string;
  categoryId: string;
  title: string;
  url: string;
  description?: string;
  source?: string;
  order?: number;
};

const LINKS: Link[] = [
  { id: "qbl-pharm-khan", categoryId: "qbc-ne-pharm", order: 1,
    title: "Khan Academy — Pharmacology", url: "https://www.khanacademy.org/science/health-and-medicine/pharmacology",
    source: "khanacademy.org", description: "Free video lessons on how drugs work in the body." },
  { id: "qbl-pharm-medline", categoryId: "qbc-ne-pharm", order: 2,
    title: "MedlinePlus — Drugs & Supplements", url: "https://medlineplus.gov/druginformation.html",
    source: "medlineplus.gov", description: "Reliable drug information from the U.S. National Library of Medicine." },
  { id: "qbl-teas-sci-khan", categoryId: "qbc-teas-science", order: 1,
    title: "Khan Academy — Anatomy & Physiology", url: "https://www.khanacademy.org/science/health-and-medicine/human-anatomy-and-physiology",
    source: "khanacademy.org", description: "Body-systems lessons that map well to the TEAS science section." },
  { id: "qbl-hesi-anat-inner", categoryId: "qbc-hesi-anatomy", order: 1,
    title: "InnerBody — Interactive Anatomy", url: "https://www.innerbody.com/",
    source: "innerbody.com", description: "Explore body systems with interactive diagrams." },
  { id: "qbl-nclex-ncsbn", categoryId: "qbc-nursing-cert", order: 1,
    title: "NCSBN — About the NCLEX", url: "https://www.ncsbn.org/exams.htm",
    source: "ncsbn.org", description: "Official overview of the NCLEX from the licensing body." },
  { id: "qbl-teas-math-khan", categoryId: "qbc-teas-math", order: 1,
    title: "Khan Academy — Arithmetic & Pre-algebra", url: "https://www.khanacademy.org/math/arithmetic",
    source: "khanacademy.org", description: "Brush up the math foundations tested on the TEAS." },
];

async function main() {
  for (const c of CATEGORIES) {
    await prisma.quizCategory.upsert({
      where: { id: c.id },
      update: {
        slug: c.slug, title: c.title, description: c.description, overview: c.overview ?? null,
        icon: c.icon ?? null, parentId: c.parentId ?? null, order: c.order ?? 0,
        featured: c.featured ?? false, premium: c.premium ?? false, published: true,
      },
      create: {
        id: c.id, slug: c.slug, title: c.title, description: c.description, overview: c.overview ?? null,
        icon: c.icon ?? null, parentId: c.parentId ?? null, order: c.order ?? 0,
        featured: c.featured ?? false, premium: c.premium ?? false, published: true,
      },
    });
  }
  console.log(`Upserted ${CATEGORIES.length} categories.`);

  // Re-parent the Drop-1 NCLEX-RN category under Nursing Certifications (if present).
  const nclex = await prisma.quizCategory.findUnique({ where: { id: "seed-quizcat-nclex-rn" } });
  if (nclex) {
    await prisma.quizCategory.update({
      where: { id: "seed-quizcat-nclex-rn" },
      data: { parentId: "qbc-nursing-cert", order: 1 },
    });
    console.log("Re-parented NCLEX-RN under Nursing Certifications.");
  }

  for (const l of LINKS) {
    await prisma.quizExternalLink.upsert({
      where: { id: l.id },
      update: { categoryId: l.categoryId, title: l.title, url: l.url, description: l.description ?? null, source: l.source ?? null, order: l.order ?? 0, published: true },
      create: { id: l.id, categoryId: l.categoryId, title: l.title, url: l.url, description: l.description ?? null, source: l.source ?? null, order: l.order ?? 0, published: true },
    });
  }
  console.log(`Upserted ${LINKS.length} external links.`);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
