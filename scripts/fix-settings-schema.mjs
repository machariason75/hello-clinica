/**
 * 1) Removes the duplicate SiteSetting (singular) model I added by mistake.
 * 2) Adds a `whatsappNumber` field to your existing SiteSettings model.
 * Then:  npx prisma db push  &&  npx prisma generate
 */
import { readFileSync, writeFileSync } from "node:fs";
const p = "prisma/schema.prisma";
let s = readFileSync(p, "utf8");

// remove the duplicate key/value model if present
s = s.replace(/\n?model SiteSetting \{\s*\n\s*key\s+String\s+@id\s*\n\s*value\s+String\s*\n\s*@@map\("site_settings"\)\s*\n\}\n?/, "\n");

// add whatsappNumber to SiteSettings (once)
if (!/whatsappNumber/.test(s)) {
  s = s.replace('  socialLinks   Json     @default("{}")',
                '  socialLinks   Json     @default("{}")\n  whatsappNumber String? @default("17178137793")');
}
writeFileSync(p, s, "utf8");
console.log("Schema fixed: removed duplicate model, added SiteSettings.whatsappNumber.");
