/**
 * Removes the "Request a Consultation" page references from lib/site-config.ts:
 *  - the searchablePages entry (so it stops appearing in Search)
 *  - repoints primaryCta to the contact page ("Get in touch")
 * Delete the page files separately with git rm (see instructions).
 * Run from project root:  node scripts/remove-request-consultation.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
const p = "lib/site-config.ts";
let s = readFileSync(p, "utf8");
const before = s;
// drop the searchable page entry (whole line)
s = s.replace(/\n[ \t]*\{\s*title:\s*"Request a Consultation",[\s\S]*?\},/, "");
// repoint the primary CTA to contact
s = s.replace(/export const primaryCta = \{[\s\S]*?\};/,
              'export const primaryCta = { label: "Get in touch", href: "/contact" };');
if (s === before) console.log("No change (already removed?).");
else { writeFileSync(p, s, "utf8"); console.log("Removed Request-a-Consultation from search + repointed primaryCta to /contact."); }
