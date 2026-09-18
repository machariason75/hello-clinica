/**
 * Premium gating for the reader: gate BOOK reading (premium), leave free
 * RESOURCES open — matching the model (Books + Question Bank are premium; free
 * resources + advising are open). Edits app/read/[type]/[id]/page.tsx in place.
 * Run from project root:  node scripts/flip-book-gate.mjs
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
const p = "app/read/[type]/[id]/page.tsx";
if (!existsSync(p)) { console.log("MISSING " + p); process.exit(0); }
let s = readFileSync(p, "utf8");
const before = s;
s = s.replace('type === "resource" && !student?.hasAccess', 'type === "book" && !student?.hasAccess');
s = s.replace("Reading this guide is a premium feature", "Reading this book is a premium feature");
if (s === before) console.log("No change (already flipped, or wording differs).");
else { writeFileSync(p, s, "utf8"); console.log("Reader now gates BOOK reading; resources are open."); }
