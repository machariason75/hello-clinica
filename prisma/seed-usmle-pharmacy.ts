/**
 * USMLE + Pharmacy licensure (NAPLEX / MPJE) sections — idempotent seed.
 *
 * Adds two new top-level Question Bank sections, each with sub-folders:
 *
 *   USMLE Revision
 *     ├─ Step 1            (basic sciences)
 *     ├─ Step 2 CK         (clinical knowledge)
 *     ├─ Step 3            (final licensure step)
 *     └─ Study Strategy    (how to revise, schedules, resources)
 *
 *   Pharmacy Licensure (NAPLEX & MPJE)
 *     ├─ NAPLEX            (the main pharmacist licensure exam)
 *     ├─ MPJE              (pharmacy law / jurisprudence)
 *     ├─ Calculations      (pharmacy maths — a common weak spot)
 *     └─ Study Strategy
 *
 * Everything here is editable afterwards in Admin -> Question Bank: rename
 * folders, add sub-folders, write quizzes, and attach external links.
 *
 * Run:  npx tsx prisma/seed-usmle-pharmacy.ts
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

const CATEGORIES: Cat[] = [
  // ─────────────── USMLE ───────────────
  {
    id: "qbc-usmle",
    slug: "usmle-revision",
    title: "USMLE Revision",
    description: "Structured revision for every step of the US medical licensing pathway.",
    overview:
      "Work through the USMLE step by step. Each section holds practice questions, timed exams, and hand-picked revision material. Start with a practice set to find your weak areas, then use the exams to check you're ready.",
    icon: "Stethoscope",
    order: 6,
    featured: true,
    premium: true,
  },
  {
    id: "qbc-usmle-step1",
    slug: "usmle-step-1",
    title: "Step 1",
    description: "Basic sciences: anatomy, physiology, pathology, pharmacology, biochemistry, microbiology.",
    overview:
      "Step 1 tests whether you can apply the basic sciences to medicine. It is now pass/fail, but the depth of understanding it demands still carries into Step 2. Focus on mechanisms, not memorised lists.",
    icon: "FlaskConical",
    parentId: "qbc-usmle",
    order: 1,
  },
  {
    id: "qbc-usmle-step2",
    slug: "usmle-step-2-ck",
    title: "Step 2 CK",
    description: "Clinical knowledge: internal medicine, surgery, paediatrics, OB/GYN, psychiatry.",
    overview:
      "Step 2 CK is where clinical judgement is tested — diagnosis, next best step, and management. Scored, and increasingly the number residency programmes look at. Practise reasoning through vignettes under time.",
    icon: "ClipboardList",
    parentId: "qbc-usmle",
    order: 2,
  },
  {
    id: "qbc-usmle-step3",
    slug: "usmle-step-3",
    title: "Step 3",
    description: "The final step: patient management, biostatistics, and clinical decision-making over time.",
    overview:
      "Step 3 checks you can practise medicine unsupervised. It adds case simulations (CCS) where you manage a patient as the clock runs. Usually taken during residency.",
    icon: "Activity",
    parentId: "qbc-usmle",
    order: 3,
  },
  {
    id: "qbc-usmle-strategy",
    slug: "usmle-study-strategy",
    title: "Study Strategy",
    description: "How to plan your revision: schedules, question-bank technique, and trusted resources.",
    overview:
      "Preparation beats cramming. This folder collects planning material and the outside resources worth your time — so you spend your energy studying rather than hunting for what to study.",
    icon: "Compass",
    parentId: "qbc-usmle",
    order: 4,
  },

  // ─────────────── PHARMACY ───────────────
  {
    id: "qbc-pharmacy",
    slug: "pharmacy-licensure",
    title: "Pharmacy Licensure (NAPLEX & MPJE)",
    description: "Revision for the US pharmacist licensing exams — NAPLEX and the MPJE law exam.",
    overview:
      "To practise as a pharmacist in the US you pass the NAPLEX (clinical competence) and, in most states, the MPJE (pharmacy law). Work through both here, plus the calculations that trip candidates up most often.",
    icon: "Pill",
    order: 7,
    featured: true,
    premium: true,
  },
  {
    id: "qbc-naplex",
    slug: "naplex",
    title: "NAPLEX",
    description: "North American Pharmacist Licensure Examination — clinical and pharmaceutical competence.",
    overview:
      "The NAPLEX tests whether you can practise pharmacy safely: identifying and solving medication problems, preparing and dispensing correctly, and advising patients. Expect heavy therapeutics and calculations.",
    icon: "Pill",
    parentId: "qbc-pharmacy",
    order: 1,
  },
  {
    id: "qbc-mpje",
    slug: "mpje",
    title: "MPJE",
    description: "Multistate Pharmacy Jurisprudence Examination — federal and state pharmacy law.",
    overview:
      "The MPJE tests pharmacy law. Roughly a third is federal law (which is the same everywhere) and the rest is specific to the state you're licensing in — so always check your state board's requirements alongside this revision.",
    icon: "Scale",
    parentId: "qbc-pharmacy",
    order: 2,
  },
  {
    id: "qbc-pharm-calc",
    slug: "pharmacy-calculations",
    title: "Pharmacy Calculations",
    description: "Doses, concentrations, dilutions, IV rates, and the maths that decides borderline passes.",
    overview:
      "Calculations are where confident candidates lose marks. Practise until the method is automatic — you should be checking your answer, not deriving the method under exam pressure.",
    icon: "Calculator",
    parentId: "qbc-pharmacy",
    order: 3,
  },
  {
    id: "qbc-pharm-strategy",
    slug: "pharmacy-study-strategy",
    title: "Study Strategy",
    description: "Planning your NAPLEX/MPJE preparation, plus trusted external revision material.",
    overview:
      "What to revise, in what order, and where to find reliable material — including your state board, which is the authority on the law you'll be examined on.",
    icon: "Compass",
    parentId: "qbc-pharmacy",
    order: 4,
  },
];

async function main() {
  for (const c of CATEGORIES) {
    await prisma.quizCategory.upsert({
      where: { id: c.id },
      update: {
        slug: c.slug,
        title: c.title,
        description: c.description,
        overview: c.overview ?? null,
        icon: c.icon ?? null,
        parentId: c.parentId ?? null,
        order: c.order ?? 0,
        featured: c.featured ?? false,
        premium: c.premium ?? false,
        published: true,
      },
      create: {
        id: c.id,
        slug: c.slug,
        title: c.title,
        description: c.description,
        overview: c.overview ?? null,
        icon: c.icon ?? null,
        parentId: c.parentId ?? null,
        order: c.order ?? 0,
        featured: c.featured ?? false,
        premium: c.premium ?? false,
        published: true,
      },
    });
  }
  console.log(`Seeded ${CATEGORIES.length} USMLE + pharmacy categories.`);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
