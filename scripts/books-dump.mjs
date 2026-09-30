/** Read-only. Lists every book (title + category) so we can auto-assign MPJE/USMLE,
 *  and see the Digital Downloads + NCLEX rows exactly. Put in scripts/ and run:
 *    node scripts/books-dump.mjs      (writes Downloads\books-rows.txt) */
import { PrismaClient } from "@prisma/client";
import fs from "node:fs";
const prisma = new PrismaClient();
const books = await prisma.book.findMany({
  select: { id: true, title: true, author: true, category: true, discipline: true, fileUrl: true, published: true },
  orderBy: { category: "asc" },
});
const byCat = {};
for (const b of books) byCat[b.category] = (byCat[b.category] || 0) + 1;
console.log("Total books:", books.length);
console.log("By category:", JSON.stringify(byCat, null, 2));
fs.writeFileSync(process.env.USERPROFILE + "\\Downloads\\books-rows.txt", JSON.stringify(books, null, 2));
console.log("Wrote Downloads\\books-rows.txt");
await prisma.$disconnect();
