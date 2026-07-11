/**
 * Consultation & premium packages seed — idempotent (safe to re-run).
 *
 * Seeds three packages whose benefits reflect everything now on the platform:
 * the full Question Bank, practice + real exams with history/review, the
 * in-browser reader, premium downloads, and one-on-one advising. Fixed ids mean
 * re-running updates in place. Edit prices and features anytime in
 * Admin -> Packages. Prices are examples (USD) — adjust to your pricing.
 *
 * Run:  npx tsx prisma/seed-packages.ts     (after `npx prisma db push`)
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const PACKAGES = [
  {
    id: "seed-pkg-premium",
    packageName: "Premium Study Access",
    description: "Everything you need to prepare — the full Question Bank and study tools, self-paced.",
    totalHours: 0,
    totalCost: 29,
    buttonText: "Get premium",
    sortOrder: 1,
    features: [
      "Full Question Bank access — NCLEX, TEAS & HESI",
      "Unlimited practice quizzes and real exams",
      "Results history with US letter grades",
      "Full answer review with rationales",
      "In-browser reading mode for books & resources",
      "Download materials to your device",
      "Course-specific revision requests",
    ],
  },
  {
    id: "seed-pkg-premium-advising",
    packageName: "Premium + Advising",
    description: "All of Premium, plus one-on-one guidance to sharpen your applications and interviews.",
    totalHours: 2,
    totalCost: 99,
    buttonText: "Book advising",
    sortOrder: 2,
    features: [
      "Everything in Premium Study Access",
      "2 hours of one-on-one advising",
      "Application & personal-statement review",
      "Interview coaching",
      "Personalized study recommendations",
    ],
  },
  {
    id: "seed-pkg-mentorship",
    packageName: "Complete Mentorship",
    description: "End-to-end support: premium content plus a mentor in your corner throughout the journey.",
    totalHours: 6,
    totalCost: 249,
    buttonText: "Start mentorship",
    sortOrder: 3,
    features: [
      "Everything in Premium + Advising",
      "6 hours of one-on-one advising",
      "A personalized study plan",
      "Mock interviews with feedback",
      "Priority support",
    ],
  },
];

async function main() {
  for (const p of PACKAGES) {
    await prisma.package.upsert({
      where: { id: p.id },
      update: {
        packageName: p.packageName, description: p.description, totalHours: p.totalHours,
        totalCost: p.totalCost, features: p.features, buttonText: p.buttonText,
        sortOrder: p.sortOrder, published: true, archived: false,
      },
      create: {
        id: p.id, packageName: p.packageName, description: p.description, totalHours: p.totalHours,
        totalCost: p.totalCost, features: p.features, buttonText: p.buttonText,
        sortOrder: p.sortOrder, published: true,
      },
    });
  }
  console.log(`Seeded ${PACKAGES.length} packages.`);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
