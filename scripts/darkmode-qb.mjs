/**
 * Dark Mode — Question Bank & soft-patch visibility. Darkens the light gray
 * panels (stat cards, "Why" boxes, correct-answer highlights, rings) that read
 * poorly in dark. CSS-only (globals.css).  node scripts/darkmode-qb.mjs
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
const p = "app/globals.css";
if (!existsSync(p)) { console.log("MISSING " + p); process.exit(0); }
let s = readFileSync(p, "utf8");
if (s.includes("DARK MODE QUESTION BANK")) { console.log("Already applied."); process.exit(0); }

s += `

/* DARK MODE QUESTION BANK — soft patch visibility ========================== */
.dark .bg-black\\/5,
.dark .bg-black\\/10 { background-color: hsl(200 22% 15%) !important; }
.dark .bg-muted { background-color: hsl(200 20% 15%) !important; }
.dark .bg-muted\\/50,
.dark .bg-muted\\/40,
.dark .bg-muted\\/30 { background-color: hsl(200 20% 15% / 0.65) !important; }
.dark .bg-slate-50, .dark .bg-slate-100,
.dark .bg-gray-50,  .dark .bg-gray-100 { background-color: hsl(200 20% 15%) !important; }
.dark .bg-white\\/80, .dark .bg-white\\/90, .dark .bg-white\\/95 { background-color: hsl(var(--card)) !important; }

/* correct-answer highlight → readable dark green */
.dark .bg-emerald-50, .dark .bg-green-50, .dark .bg-emerald-100 {
  background-color: hsl(152 42% 15%) !important;
  border-color: hsl(152 40% 32%) !important;
}
.dark .bg-emerald-50 *, .dark .bg-green-50 * { color: hsl(152 55% 80%) !important; }

/* hairline rings that used black */
.dark .ring-black\\/5, .dark .ring-black\\/10 { --tw-ring-color: hsl(var(--border)) !important; }
`;
writeFileSync(p, s, "utf8");
console.log("Question Bank dark visibility applied.");
