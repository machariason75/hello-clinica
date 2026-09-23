/** Adds Engagement + EngagementStep + EngagementMessage. Then: npx prisma db push && npx prisma generate */
import { readFileSync, writeFileSync } from "node:fs";
const p = "prisma/schema.prisma";
let s = readFileSync(p, "utf8");
if (/model Engagement /.test(s)) { console.log("Engagement models already present."); process.exit(0); }
s = s.replace("  subscriptions Subscription[]", "  subscriptions Subscription[]\n  engagements   Engagement[]");
s += `

model Engagement {
  id        String   @id @default(cuid())
  studentId String
  student   Student  @relation(fields: [studentId], references: [id], onDelete: Cascade)
  service   String
  title     String
  status    String   @default("active") // active | completed | paused
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  steps    EngagementStep[]
  messages EngagementMessage[]

  @@index([studentId, createdAt])
  @@map("engagements")
}

model EngagementStep {
  id           String    @id @default(cuid())
  engagementId String
  engagement   Engagement @relation(fields: [engagementId], references: [id], onDelete: Cascade)
  label        String
  status       String     @default("pending") // pending | in_progress | done
  order        Int        @default(0)
  dueAt        DateTime?
  createdAt    DateTime   @default(now())

  @@index([engagementId, order])
  @@map("engagement_steps")
}

model EngagementMessage {
  id           String     @id @default(cuid())
  engagementId String
  engagement   Engagement @relation(fields: [engagementId], references: [id], onDelete: Cascade)
  sender       String     // student | admin
  body         String
  createdAt    DateTime   @default(now())

  @@index([engagementId, createdAt])
  @@map("engagement_messages")
}
`;
writeFileSync(p, s, "utf8");
console.log("Added Engagement, EngagementStep, EngagementMessage + Student relation.");
