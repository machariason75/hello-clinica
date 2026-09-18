/**
 * Removes the duplicate "My notes" card on the account overview (keeps the first).
 * Safe to run once. Run from project root:  node scripts/dedupe-account-cards.mjs
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
const p = "app/account/page.tsx";
if (!existsSync(p)) { console.log("MISSING " + p); process.exit(0); }
let s = readFileSync(p, "utf8");
const before = s;
let seen = 0;
s = s.replace(/\n[ \t]*<Link href="\/account\/notes"[\s\S]*?<\/Link>/g, (m) => {
  seen++;
  return seen === 1 ? m : "";
});
if (s === before) console.log("No change (nothing to de-dupe).");
else console.log(`Kept 1 "My notes" card, removed ${seen - 1} duplicate(s).`), writeFileSync(p, s, "utf8");
