/** Adds MPJE_BOOKS + USMLE_BOOKS to the BookCategory enum (additive/safe).
 *  Then: npx prisma db push && npx prisma generate */
import { readFileSync, writeFileSync } from "node:fs";
const p = "prisma/schema.prisma";
let s = readFileSync(p, "utf8");
let added = [];
if (!/enum BookCategory[^}]*MPJE_BOOKS/s.test(s)) { s = s.replace(/(enum BookCategory \{[^}]*?)\n\}/s, "$1\n  MPJE_BOOKS\n}"); added.push("MPJE_BOOKS"); }
if (!/enum BookCategory[^}]*USMLE_BOOKS/s.test(s)) { s = s.replace(/(enum BookCategory \{[^}]*?)\n\}/s, "$1\n  USMLE_BOOKS\n}"); added.push("USMLE_BOOKS"); }
writeFileSync(p, s, "utf8");
console.log(added.length ? "Added: " + added.join(", ") : "Already present.");
