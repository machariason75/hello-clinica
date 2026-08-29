/**
 * Warms the "blue tinge" on icon chips, pills, book covers, and progress tracks
 * so they blend with the cream background instead of reading cold/AI-generated.
 *
 * It swaps two color fragments everywhere they appear in app/, components/, lib/:
 *   bg-medical-blue/10   ->  bg-[#F1E8DC]   (warm sand that blends with the cream)
 *   ring-medical-blue/15 ->  ring-black/5   (subtle neutral outline)
 *
 * The teal ICONS and text are left as-is (brand accent) — only the cold wash
 * behind them changes. Safe and reversible: review with `git diff`, undo with
 * `git checkout .` if you don't like it. Running it twice does nothing extra.
 *
 * Run from your project root:  node warm-icons.mjs
 */
import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const ROOTS = ["app", "components", "lib"];
const EXTS = new Set([".ts", ".tsx", ".css"]);
const SUBS = [
  [/bg-medical-blue\/10/g, "bg-[#F1E8DC]"],
  [/ring-medical-blue\/15/g, "ring-black/5"],
];

let filesChanged = 0, totalReplacements = 0;

function walk(dir) {
  let entries;
  try { entries = readdirSync(dir); } catch { return; }
  for (const name of entries) {
    if (name === "node_modules" || name === ".next" || name.startsWith(".")) continue;
    const p = join(dir, name);
    let st;
    try { st = statSync(p); } catch { continue; }
    if (st.isDirectory()) walk(p);
    else if (EXTS.has(extname(name))) processFile(p);
  }
}

function processFile(p) {
  let text;
  try { text = readFileSync(p, "utf8"); } catch { return; }
  let changed = text, count = 0;
  for (const [re, to] of SUBS) {
    changed = changed.replace(re, () => { count++; return to; });
  }
  if (count > 0) {
    writeFileSync(p, changed, "utf8");
    filesChanged++; totalReplacements += count;
    console.log(`  ${p}  (${count})`);
  }
}

console.log("Warming icon chips…");
for (const r of ROOTS) walk(r);
console.log(`\nDone. ${totalReplacements} replacement(s) across ${filesChanged} file(s).`);
if (totalReplacements === 0) console.log("(Nothing to change — either already warmed, or run me from the project root.)");
