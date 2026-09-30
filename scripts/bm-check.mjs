/** Read-only. Shows how "A & P I Flashcards" is bookmarked vs where it now lives. */
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const title = "A & P I Flashcards";
const books = await prisma.book.findMany({ where: { title: { contains: "A & P I Flashcards" } }, select: { id: true, title: true, category: true, published: true, archived: true } });
const resources = await prisma.resource.findMany({ where: { title: { contains: "A & P I Flashcards" } }, select: { id: true, title: true, category: true, published: true, archived: true } });
console.log("BOOK rows:", JSON.stringify(books, null, 2));
console.log("RESOURCE rows:", JSON.stringify(resources, null, 2));

const allIds = [...books, ...resources].map((r) => r.id);
const bms = await prisma.bookmark.findMany({ where: { itemId: { in: allIds } }, select: { studentId: true, itemType: true, itemId: true } });
console.log("BOOKMARK rows pointing at those ids:", JSON.stringify(bms, null, 2));

// what the Bookmarks page would match (itemType=book AND live book)
for (const bm of bms) {
  const liveBook = books.find((b) => b.id === bm.itemId && b.published && !b.archived);
  console.log(`bookmark itemType=${bm.itemType} itemId=${bm.itemId} -> ${bm.itemType === "book" && liveBook ? "WOULD SHOW" : "WON'T SHOW (mismatch)"}`);
}
await prisma.$disconnect();
