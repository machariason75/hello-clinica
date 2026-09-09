/**
 * Removes the "Contact" item from the DESKTOP top nav (primaryNav) and the
 * MOBILE nav (sidebarNav) in lib/site-config.ts, while LEAVING it in the footer.
 * "Get in touch" buttons still reach /contact, so the top-nav item is redundant.
 *
 * Edits your current file in place (preserves the Academic Support rename etc.).
 * Safe & reversible: review with `git diff`, undo with `git checkout .`.
 * Run from project root:  node scripts/remove-contact-nav.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";

const p = "lib/site-config.ts";
let s = readFileSync(p, "utf8");
const before = s;
const CONTACT = /\n[ \t]*\{\s*label:\s*"Contact",\s*href:\s*"\/contact"\s*\},/;

// remove the first Contact that appears after each nav declaration (its own),
// leaving the footer's Contact untouched.
s = s.replace(new RegExp('(export const sidebarNav[\\s\\S]*?)' + CONTACT.source), "$1");
s = s.replace(new RegExp('(export const primaryNav[\\s\\S]*?)' + CONTACT.source), "$1");

if (s === before) {
  console.log("No change — either already removed, or run me from the project root.");
} else {
  writeFileSync(p, s, "utf8");
  console.log("Removed Contact from the top nav (desktop + mobile). Footer link kept.");
}
