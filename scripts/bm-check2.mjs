/** Read-only. Simulates EXACTLY what the Bookmarks page query does for the
 *  student who owns the bookmark, to see if it returns the flashcards book. */
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const STUDENT = "cmrbufx410000qos3v0ght5hx"; // from the earlier diagnostic

// mirror getBookmarkedBooks():
const rows = await prisma.bookmark.findMany({ where: { studentId: STUDENT, itemType: "book" } });
console.log(`bookmark rows for this student (itemType=book): ${rows.length}`);
console.log(JSON.stringify(rows.map(r => r.itemId), null, 2));

const ids = rows.map(r => r.itemId);
const books = await prisma.book.findMany({ where: { id: { in: ids }, published: true, archived: false }, select: { id: true, title: true } });
console.log(`\nbooks the page would show: ${books.length}`);
console.log(JSON.stringify(books, null, 2));

// also show the student record so we can compare identity
const student = await prisma.student.findUnique({ where: { id: STUDENT }, select: { id: true, email: true } }).catch(() => null);
console.log("\nowning student:", JSON.stringify(student));
await prisma.$disconnect();
