/**
 * Removes the "Contact" NAV LINK from every navigation list in
 * lib/site-config.ts (desktop primaryNav, mobile sidebarNav, and the footer's
 * "Explore" column). It leaves the footer's CONTACT info block (the email)
 * untouched, and it's safe to run repeatedly.
 *
 * Run from project root:  node scripts/remove-contact-everywhere.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
const p = "lib/site-config.ts";
let s = readFileSync(p, "utf8");
const before = s;
// Only the nav-link objects match this exact shape; the CONTACT email block does not.
s = s.split(/\n[ \t]*\{\s*label:\s*"Contact",\s*href:\s*"\/contact"\s*\},/).join("");
if (s === before) console.log("No Contact nav links found (already removed).");
else { writeFileSync(p, s, "utf8"); console.log("Removed Contact from all nav lists (footer email kept)."); }
