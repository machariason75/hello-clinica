/**
 * Dark Mode Phase 2b: force a real dark canvas so content becomes readable.
 * Root cause of "text light but page still light": the AmbientBackground blobs
 * and page washes stayed light. CSS-only (globals.css) — cannot break the build.
 * Run:  node scripts/darkmode-p2b.mjs
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
const p = "app/globals.css";
if (!existsSync(p)) { console.log("MISSING " + p); process.exit(0); }
let s = readFileSync(p, "utf8");
if (s.includes("DARK MODE PHASE 2b")) { console.log("Phase 2b already applied."); process.exit(0); }

s += `

/* DARK MODE PHASE 2b — dark canvas + neutralize light background layers ===== */
html.dark,
.dark body { background-color: #0b1620 !important; }

/* the ambient blobs are the light page wash — hide them in dark */
.dark .ambient-blob { display: none !important; opacity: 0 !important; }

/* common translucent-white surfaces (glass cards, chips) */
.dark .bg-white\\/70,
.dark .bg-white\\/60,
.dark .bg-white\\/55,
.dark .bg-white\\/50 { background-color: hsl(var(--card) / 0.75) !important; }

/* petrol/teal brand fills used as page/section backgrounds keep their contrast;
   soft coral/teal tint overlays are dimmed so they don't wash out on dark */
.dark .bg-coral\\/15,
.dark .bg-coral\\/10,
.dark .bg-medical-blue\\/10,
.dark .bg-accent-blue\\/12 { opacity: 0.5; }

/* generic gradient page-tops that used near-white stops */
.dark [class*="from-[#fff"],
.dark [class*="via-[#fde"],
.dark [class*="to-[#eaf"] { background-image: linear-gradient(135deg,#0e1b22 0%,#10222b 55%,#0c1a22 100%) !important; }
`;
writeFileSync(p, s, "utf8");
console.log("Phase 2b applied — dark canvas + ambient/washes neutralized.");
