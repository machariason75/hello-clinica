/**
 * Read-only. Lists all nursing resources so we can plan the migration safely.
 * Put this in your project's scripts/ folder and run:  node scripts/dump-nursing.mjs
 * It prints a summary and writes the full data to Downloads\mig-rows.txt
 */
import { PrismaClient } from "@prisma/client";
import fs from "node:fs";
const prisma = new PrismaClient();

const NURSING = [
  "NURSING_RESOURCES", "NURSING_ANATOMY", "NURSING_PHYSIOLOGY", "NURSING_PHARMACOLOGY",
  "NURSING_DOSAGE", "NURSING_NCLEX_SHEETS", "NURSING_LAB_VALUES", "NURSING_MED_TERMINOLOGY",
  "NURSING_ABBREVIATIONS", "NURSING_ASSESSMENT", "NURSING_VITAL_SIGNS", "NURSING_ECG", "NURSING_MED_ADMIN",
];

const rows = await prisma.resource.findMany({
  where: { category: { in: NURSING } },
  select: { id: true, title: true, category: true, description: true, body: true, thumbnail: true, resourceFile: true, published: true, featured: true },
  orderBy: { category: "asc" },
});

const summary = rows.map((r) => ({
  title: r.title,
  category: r.category,
  hasFile: !!r.resourceFile,     // -> becomes a book fileUrl
  hasArticleBody: !!r.body,      // -> written article; books have no body field
  published: r.published,
}));

const byCat = {};
for (const r of rows) byCat[r.category] = (byCat[r.category] || 0) + 1;

console.log("Total nursing resources:", rows.length);
console.log("By category:", JSON.stringify(byCat, null, 2));
console.log("With a downloadable file (file-based -> clean book):", rows.filter((r) => r.resourceFile).length);
console.log("Article-only (body, no file -> can't be a plain book):", rows.filter((r) => r.body && !r.resourceFile).length);
console.log("\nSummary:\n", JSON.stringify(summary, null, 2));

fs.writeFileSync(process.env.USERPROFILE + "\\Downloads\\mig-rows.txt", JSON.stringify(rows, null, 2));
console.log("\nFull data written to Downloads\\mig-rows.txt");
await prisma.$disconnect();
