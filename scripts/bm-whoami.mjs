/** Read-only. Lists EVERY book-bookmark grouped by student, so we can see which
 *  account id actually owns them and cross-check against who you log in as. */
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const rows = await prisma.bookmark.findMany({ where: { itemType: "book" } });
const byStudent = {};
for (const r of rows) (byStudent[r.studentId] ||= []).push(r.itemId);

console.log("Book-bookmarks grouped by studentId:\n");
for (const [sid, ids] of Object.entries(byStudent)) {
  const s = await prisma.student.findUnique({ where: { id: sid }, select: { email: true, name: true } }).catch(() => null);
  console.log(`student ${sid}  (${s?.email ?? "??"})  -> ${ids.length} book bookmark(s)`);
}

// Show all students named/like admin, to compare ids
const admins = await prisma.student.findMany({ where: { email: { contains: "admin" } }, select: { id: true, email: true } }).catch(() => []);
console.log("\nStudent rows with 'admin' in email:", JSON.stringify(admins, null, 2));
await prisma.$disconnect();
