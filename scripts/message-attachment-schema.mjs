/** Adds fileUrl + fileName to EngagementMessage. Then: npx prisma db push && npx prisma generate */
import { readFileSync, writeFileSync } from "node:fs";
const p = "prisma/schema.prisma";
let s = readFileSync(p, "utf8");
if (/model EngagementMessage \{[^}]*fileUrl/.test(s)) { console.log("Already present."); process.exit(0); }
s = s.replace(/model EngagementMessage \{/, 'model EngagementMessage {\n  fileUrl  String?\n  fileName String?');
writeFileSync(p, s, "utf8");
console.log("Added fileUrl + fileName to EngagementMessage.");
