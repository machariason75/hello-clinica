/** Adds a SiteSetting key/value table. Then: npx prisma db push && npx prisma generate */
import { readFileSync, writeFileSync } from "node:fs";
const p = "prisma/schema.prisma";
let s = readFileSync(p, "utf8");
if (/model SiteSetting /.test(s)) { console.log("SiteSetting already present."); process.exit(0); }
s += `

model SiteSetting {
  key   String @id
  value String
  @@map("site_settings")
}
`;
writeFileSync(p, s, "utf8");
console.log("Added SiteSetting model.");
