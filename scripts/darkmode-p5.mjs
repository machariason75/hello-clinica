/**
 * Dark Mode Phase 5 — the gray-patch ROOT CAUSE.
 * The notes / quiz-stat / QOTD-explanation / advising-quote panels use
 * `bg-brand-bg/60` and cream hexes at opacity. `brand-bg` is a fixed color (not a
 * token), so it never darkened -> gray patches. This darkens all those variants.
 * CSS-only.  node scripts/darkmode-p5.mjs
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
const p = "app/globals.css";
if (!existsSync(p)) { console.log("MISSING " + p); process.exit(0); }
let s = readFileSync(p, "utf8");
if (s.includes("DARK MODE PHASE 5")) { console.log("Phase 5 already applied."); process.exit(0); }
s += `

/* DARK MODE PHASE 5 — cream surfaces at any opacity -> dark (gray-patch fix) = */
/* exact-token match so hover:bg-brand-bg (nav) is NOT permanently filled */
.dark [class~="bg-brand-bg"],
.dark [class~="bg-brand-bg/70"],
.dark [class~="bg-brand-bg/60"],
.dark [class~="bg-brand-bg/50"],
.dark [class~="bg-brand-bg/40"],
.dark [class~="bg-brand-bg/30"] { background-color: hsl(200 22% 15%) !important; }

/* hard-coded cream hexes used as panels/gradients (any opacity) */
.dark [class*="F3E9DD"],
.dark [class*="F1E8DC"],
.dark [class*="F5ECE1"],
.dark [class*="FBF7F2"],
.dark [class*="FBF5EF"] { background-color: hsl(200 22% 15%) !important; background-image: none !important; }

/* the QOTD header gradient (from-[#F3E9DD]/80 to-white) -> flat dark */
.dark [class*="from-[#F3E9DD]"] { background-image: none !important; background-color: hsl(200 24% 13%) !important; }

/* make sure text on those panels is legible */
.dark [class~="bg-brand-bg/60"], .dark [class~="bg-brand-bg/50"],
.dark [class*="F3E9DD"] { color: hsl(var(--foreground)); }
`;
writeFileSync(p, s, "utf8");
console.log("Phase 5 applied — gray patches darkened at the root.");
