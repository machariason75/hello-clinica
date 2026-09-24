/** Adds replyToId to EngagementMessage (for WhatsApp-style replies). Then db push + generate */
import { readFileSync, writeFileSync } from "node:fs";
const p = "prisma/schema.prisma";
let s = readFileSync(p, "utf8");
if (/model EngagementMessage \{[^}]*replyToId/.test(s)) { console.log("Already present."); process.exit(0); }
s = s.replace(/model EngagementMessage \{/, 'model EngagementMessage {\n  replyToId String?');
writeFileSync(p, s, "utf8");
console.log("Added replyToId to EngagementMessage.");
