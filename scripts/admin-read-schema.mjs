import { readFileSync, writeFileSync } from "node:fs";
const p = "prisma/schema.prisma";
let s = readFileSync(p, "utf8");
if (/model Engagement \{[^}]*adminReadAt/.test(s)) { console.log("adminReadAt already present."); process.exit(0); }
s = s.replace(/model Engagement \{/, 'model Engagement {\n  adminReadAt DateTime?');
writeFileSync(p, s, "utf8");
console.log("Added adminReadAt to Engagement.");
