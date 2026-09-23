/**
 * Removes the 4 retired categories from the Free Resources dropdown/mobile menu,
 * which are hard-coded as children in lib/site-config.ts (primaryNav).
 * THIS is the source the menu reads from. Run:  node scripts/remove-nav-categories.mjs
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
const p = "lib/site-config.ts";
if (!existsSync(p)) { console.log("MISSING " + p); process.exit(0); }
let s = readFileSync(p, "utf8");
const before = s;
const slugs = ["application-timeline", "clinical-experience", "volunteer-guide", "shadowing-guide"];
let removed = 0;
for (const slug of slugs) {
  // remove the whole child line: { label: "...", href: "/resources/<slug>" },
  const re = new RegExp('\\n\\s*\\{[^\\n]*href:\\s*"/resources/' + slug + '"[^\\n]*\\},?', "g");
  const m = s.match(re);
  if (m) { s = s.replace(re, ""); removed += m.length; }
}
if (s === before) console.log("No change (already removed, or the lines look different — paste me the Free Resources children).");
else { writeFileSync(p, s, "utf8"); console.log(`Removed ${removed} category link(s) from the nav.`); }
