/** Adds the Bookmark table + Student relation. Then: npx prisma db push && npx prisma generate */
import { readFileSync, writeFileSync } from "node:fs";
const p = "prisma/schema.prisma";
let s = readFileSync(p, "utf8");
if (/model Bookmark /.test(s)) { console.log("Bookmark model already present."); process.exit(0); }
s = s.replace("  subscriptions Subscription[]", "  subscriptions Subscription[]\n  bookmarks     Bookmark[]");
s += `

model Bookmark {
  id        String   @id @default(cuid())
  studentId String
  student   Student  @relation(fields: [studentId], references: [id], onDelete: Cascade)
  itemType  String   // book | resource
  itemId    String
  createdAt DateTime @default(now())

  @@unique([studentId, itemType, itemId])
  @@index([studentId, createdAt])
  @@map("bookmarks")
}
`;
writeFileSync(p, s, "utf8");
console.log("Added Bookmark model + Student.bookmarks relation.");
