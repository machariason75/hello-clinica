/** Adds archived + blocked flags to Engagement. Then: npx prisma db push && npx prisma generate */
import { readFileSync, writeFileSync } from "node:fs";
const p = "prisma/schema.prisma";
let s = readFileSync(p, "utf8");
if (/model Engagement \{[^}]*archived/.test(s)) { console.log("Already present."); process.exit(0); }
s = s.replace(/model Engagement \{/, 'model Engagement {\n  archived  Boolean @default(false)\n  blocked   Boolean @default(false)');
writeFileSync(p, s, "utf8");
console.log("Added archived + blocked to Engagement.");
