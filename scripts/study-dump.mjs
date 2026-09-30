/**
 * Read-only. Dumps the two sets we're swapping so the migration is exact:
 *   - Free-Resources "Study Resources"  (Resource.category = STUDY_RESOURCES)
 *   - Books "Study Guides"              (Book.category    = STUDY_GUIDES)
 * Put in scripts/ and run:  node scripts/study-dump.mjs
 * Writes Downloads\study-rows.txt
 */
import { PrismaClient } from "@prisma/client";
import fs from "node:fs";
const prisma = new PrismaClient();

const studyResources = await prisma.resource.findMany({
  where: { category: "STUDY_RESOURCES" },
  select: { id: true, title: true, description: true, body: true, thumbnail: true, resourceFile: true, published: true, featured: true },
});
const studyGuides = await prisma.book.findMany({
  where: { category: "STUDY_GUIDES" },
  select: { id: true, title: true, author: true, description: true, coverImage: true, fileUrl: true, discipline: true, published: true, featured: true },
});

console.log("Free 'Study Resources' (resources):", studyResources.length);
console.log("  with file:", studyResources.filter((r) => r.resourceFile).length, "| article-only:", studyResources.filter((r) => r.body && !r.resourceFile).length);
console.log("Books 'Study Guides' (books):", studyGuides.length);
console.log("  with file:", studyGuides.filter((b) => b.fileUrl).length);

fs.writeFileSync(process.env.USERPROFILE + "\\Downloads\\study-rows.txt", JSON.stringify({ studyResources, studyGuides }, null, 2));
console.log("\nWrote Downloads\\study-rows.txt");
await prisma.$disconnect();
