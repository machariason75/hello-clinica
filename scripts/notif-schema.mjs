/** Adds the Notification table + Student relation to prisma/schema.prisma.
 *  Then run:  npx prisma db push   &&   npx prisma generate
 *  (db push only ADDS a table — no data loss.) */
import { readFileSync, writeFileSync } from "node:fs";
const p = "prisma/schema.prisma";
let s = readFileSync(p, "utf8");
if (/model Notification /.test(s)) { console.log("Notification model already present."); process.exit(0); }
s = s.replace('  subscriptions Subscription[]\n\n  @@map("students")',
              '  subscriptions Subscription[]\n  notifications Notification[]\n\n  @@map("students")');
s += `

model Notification {
  id            String    @id @default(cuid())
  studentId     String
  student       Student   @relation(fields: [studentId], references: [id], onDelete: Cascade)
  kind          String    @default("system") // system | access | admin
  title         String
  body          String
  actionUrl     String?
  requiresReply Boolean   @default(false)
  reply         String?
  repliedAt     DateTime?
  readAt        DateTime?
  createdAt     DateTime  @default(now())

  @@index([studentId, createdAt])
  @@map("notifications")
}
`;
writeFileSync(p, s, "utf8");
console.log("Added Notification model + Student.notifications relation.");
