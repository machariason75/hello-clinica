/**
 * Removes the coloured "chip" behind icons site-wide so icons blend with the
 * page (like the footer socials). It ONLY strips the fill from icon wrappers —
 * spans shaped like  "...items-center justify-center rounded-X bg-brand-bg text-..."
 * — so real cards that merely use bg-brand-bg are untouched.
 * Run from project root:  node scripts/blend-icons.mjs
 */
import { readdirSync, statSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const RE = /(items-center justify-center rounded-[A-Za-z0-9-]+(?:\[[^\]]*\])?) bg-(?:brand-bg|\[#F1E8DC\]) (text-)/g;
let files = 0, hits = 0;

function walk(dir) {
  let entries = [];
  try { entries = readdirSync(dir); } catch { return; }
  for (const e of entries) {
    if (e === "node_modules" || e === ".next" || e === ".git") continue;
    const p = join(dir, e);
    const st = statSync(p);
    if (st.isDirectory()) walk(p);
    else if (p.endsWith(".tsx")) {
      const b = readFileSync(p, "utf8");
      const m = b.match(RE);
      if (m && m.length) {
        writeFileSync(p, b.replace(RE, "$1 $2"), "utf8");
        files++; hits += m.length;
      }
    }
  }
}
for (const r of ["components", "app"]) walk(r);
console.log(`Blended ${hits} icon chip(s) across ${files} file(s).`);
