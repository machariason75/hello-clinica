/**
 * Removes 4 redundant Free Resources categories from lib/data/resource-categories.ts:
 * Application Timeline, Clinical Experience, Volunteer Guide, Shadowing Guide.
 * Uses brace-counting (objects contain nested faqs arrays). The dropdown, hub,
 * and category pages all read this file. Run:  node scripts/remove-resource-categories.mjs
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
const p = "lib/data/resource-categories.ts";
if (!existsSync(p)) { console.log("MISSING " + p); process.exit(0); }
let s = readFileSync(p, "utf8");
const before = s;

function removeBySlug(src, slug) {
  const mi = src.indexOf(`slug: "${slug}"`);
  if (mi === -1) return src;
  const open = src.lastIndexOf("{", mi);
  let depth = 0, end = -1;
  for (let i = open; i < src.length; i++) {
    if (src[i] === "{") depth++;
    else if (src[i] === "}") { depth--; if (depth === 0) { end = i; break; } }
  }
  if (end === -1) return src;
  let after = end + 1;
  if (src[after] === ",") after++;
  let start = open;
  while (start > 0 && (src[start - 1] === " " || src[start - 1] === "\t")) start--;
  if (src[start - 1] === "\n") start--;
  return src.slice(0, start) + src.slice(after);
}

for (const slug of ["application-timeline", "clinical-experience", "volunteer-guide", "shadowing-guide"]) {
  s = removeBySlug(s, slug);
}
if (s === before) console.log("No change (already removed).");
else { writeFileSync(p, s, "utf8"); console.log("Removed the 4 redundant categories."); }
