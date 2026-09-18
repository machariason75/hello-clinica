/**
 * Fixes a duplicated lucide import name on the account page
 * (e.g. "StickyNote, ... , StickyNote"). Safe to run once.
 * Run from project root:  node scripts/fix-dupe-imports.mjs
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
const p = "app/account/page.tsx";
if (!existsSync(p)) { console.log("MISSING " + p); process.exit(0); }
let s = readFileSync(p, "utf8");
const before = s;

s = s.replace(/import \{([^}]*)\} from "lucide-react";/, (m, inner) => {
  const seen = new Set();
  const names = inner.split(",").map((x) => x.trim()).filter(Boolean);
  const unique = [];
  for (const n of names) { if (!seen.has(n)) { seen.add(n); unique.push(n); } }
  return `import { ${unique.join(", ")} } from "lucide-react";`;
});

if (s === before) console.log("No duplicates found (already clean).");
else { writeFileSync(p, s, "utf8"); console.log("De-duplicated the lucide import on the account page."); }
