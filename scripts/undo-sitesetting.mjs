/**
 * Removes the DUPLICATE SiteSetting model I added (your schema already has a
 * SiteSettings model). This makes prisma valid again. Run from project root:
 *   node scripts/undo-sitesetting.mjs   then   npx prisma generate
 */
import { readFileSync, writeFileSync } from "node:fs";
const p = "prisma/schema.prisma";
let s = readFileSync(p, "utf8");
const before = s;
// remove exactly the key/value model I appended
s = s.replace(/\n?model SiteSetting \{\s*\n\s*key\s+String\s+@id\s*\n\s*value\s+String\s*\n\s*@@map\("site_settings"\)\s*\n\}\n?/, "\n");
if (s === before) console.log("Nothing removed — paste me the SiteSetting block if it remains.");
else { writeFileSync(p, s, "utf8"); console.log("Removed the duplicate SiteSetting model. Now run: npx prisma generate"); }
