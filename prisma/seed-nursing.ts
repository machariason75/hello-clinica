/**
 * Nursing example content seed — idempotent (safe to run more than once).
 *
 * Inserts EXAMPLE books (Nursing + NCLEX) and 3 placeholder items in each of the
 * 12 Nursing Resource topic folders, so the new sections aren't empty. Every row
 * uses a fixed "seed-..." id, so re-running updates in place and never duplicates.
 *
 * The admin can edit titles and upload real files later (these point to a sample
 * PDF as a placeholder). Delete any of them from the admin panel anytime.
 *
 * Run:  npx tsx prisma/seed-nursing.ts      (after `npx prisma db push`)
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const SAMPLE_PDF = "https://pdfobject.com/pdf/sample.pdf";

const BOOKS: { id: string; title: string; author: string; category: string }[] = [
  // Nursing Books
  { id: "seed-book-nursing-1", title: "Fundamentals of Nursing", author: "Potter & Perry", category: "NURSING_BOOKS" },
  { id: "seed-book-nursing-2", title: "Medical-Surgical Nursing", author: "Ignatavicius & Workman", category: "NURSING_BOOKS" },
  { id: "seed-book-nursing-3", title: "Nursing Health Assessment", author: "Sharon Jensen", category: "NURSING_BOOKS" },
  // NCLEX Books
  { id: "seed-book-nclex-1", title: "Saunders Comprehensive Review for the NCLEX-RN", author: "Linda Anne Silvestri", category: "NCLEX_BOOKS" },
  { id: "seed-book-nclex-2", title: "Lippincott Q&A Review for NCLEX-RN", author: "Diane M. Billings", category: "NCLEX_BOOKS" },
  { id: "seed-book-nclex-3", title: "NCLEX-RN Prep Plus", author: "Kaplan Nursing", category: "NCLEX_BOOKS" },
];

const TOPICS: { enum: string; items: string[] }[] = [
  { enum: "NURSING_ANATOMY", items: ["Skeletal System Overview", "Muscular System Quick Review", "Major Organ Systems Map"] },
  { enum: "NURSING_PHYSIOLOGY", items: ["Cardiac Cycle Basics", "Respiratory Physiology Overview", "Renal Function Essentials"] },
  { enum: "NURSING_PHARMACOLOGY", items: ["Drug Classifications Cheat Sheet", "Common Medication Suffixes", "Pharmacokinetics Basics"] },
  { enum: "NURSING_DOSAGE", items: ["Dimensional Analysis Practice", "IV Drip Rate Formulas", "Pediatric Dosage Worksheet"] },
  { enum: "NURSING_NCLEX_SHEETS", items: ["Lab Values Quick Sheet", "Priority & Delegation Tips", "Pharmacology Hot Spots"] },
  { enum: "NURSING_LAB_VALUES", items: ["Common Lab Values Reference", "ABG Interpretation Guide", "Electrolyte Ranges Chart"] },
  { enum: "NURSING_MED_TERMINOLOGY", items: ["Common Prefixes & Suffixes", "Body System Terminology", "Root Words Reference"] },
  { enum: "NURSING_ABBREVIATIONS", items: ["Approved Abbreviations List", "Do-Not-Use Abbreviations", "Charting Shorthand Guide"] },
  { enum: "NURSING_ASSESSMENT", items: ["Head-to-Toe Assessment Checklist", "Normal vs Abnormal Findings", "Assessment Documentation Template"] },
  { enum: "NURSING_VITAL_SIGNS", items: ["Normal Vital Sign Ranges", "Pediatric Vital Signs", "Vital Signs Documentation Guide"] },
  { enum: "NURSING_ECG", items: ["Reading an ECG Strip", "Common Rhythms Guide", "ECG Interpretation Practice"] },
  { enum: "NURSING_MED_ADMIN", items: ["Rights of Medication Administration", "Injection Sites Guide", "Safe Med Administration Checklist"] },
];

async function main() {
  // Example books
  for (const b of BOOKS) {
    await prisma.book.upsert({
      where: { id: b.id },
      update: { title: b.title, author: b.author, category: b.category as never, published: true },
      create: {
        id: b.id,
        title: b.title,
        author: b.author,
        description: "Example entry — upload the file and edit the details from the admin panel.",
        category: b.category as never,
        published: true,
      },
    });
  }
  console.log(`Seeded ${BOOKS.length} example books.`);

  // 3 example items per nursing topic folder
  let count = 0;
  for (const t of TOPICS) {
    for (let i = 0; i < t.items.length; i++) {
      const id = `seed-nrs-${t.enum.toLowerCase()}-${i + 1}`;
      await prisma.resource.upsert({
        where: { id },
        update: { title: t.items[i], category: t.enum as never, published: true },
        create: {
          id,
          title: t.items[i],
          description: "Example item — upload the file and edit the details from the admin panel.",
          category: t.enum as never,
          resourceFile: SAMPLE_PDF,
          published: true,
        },
      });
      count++;
    }
  }
  console.log(`Seeded ${count} example nursing resource items across ${TOPICS.length} folders.`);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
