/**
 * Repairs the lucide-react import on given files: removes empty entries
 * (stray double commas) and duplicates, and normalises to a single clean line.
 * Run from project root:  node scripts/fix-lucide-import.mjs
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const files = ["app/admin/dashboard/page.tsx", "app/account/page.tsx"];

for (const p of files) {
  if (!existsSync(p)) { console.log("skip (missing) " + p); continue; }
  let s = readFileSync(p, "utf8");
  const before = s;
  s = s.replace(/import\s*\{([\s\S]*?)\}\s*from\s*"lucide-react";/, (_m, inner) => {
    const seen = new Set();
    const names = inner
      .split(",")
      .map((x) => x.trim())
      .filter((x) => x.length > 0);
    const unique = [];
    for (const n of names) if (!seen.has(n)) { seen.add(n); unique.push(n); }
    return `import { ${unique.join(", ")} } from "lucide-react";`;
  });
  if (s === before) console.log("no change  " + p);
  else { writeFileSync(p, s, "utf8"); console.log("repaired   " + p); }
}
