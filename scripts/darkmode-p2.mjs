/**
 * Dark Mode Phase 2: under .dark, remap the hard-coded brand colors used across
 * components to dark equivalents. CSS-only (appended to globals.css) — cannot
 * break the build. Run from project root:  node scripts/darkmode-p2.mjs
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
const p = "app/globals.css";
if (!existsSync(p)) { console.log("MISSING " + p); process.exit(0); }
let s = readFileSync(p, "utf8");
if (s.includes("DARK MODE PHASE 2")) { console.log("Phase 2 already applied."); process.exit(0); }

s += `

/* DARK MODE PHASE 2 — remap hard-coded brand colors under .dark ============ */
@layer utilities {
  /* Surfaces */
  .dark .bg-white { background-color: hsl(var(--card)) !important; }
  .dark .bg-brand-bg { background-color: hsl(var(--muted)) !important; }
  .dark .bg-\\[\\#FBF5EF\\],
  .dark .bg-\\[\\#F5ECE1\\],
  .dark .bg-\\[\\#F3E9DD\\],
  .dark .bg-\\[\\#FBF7F2\\],
  .dark .bg-\\[\\#F1E8DC\\] { background-color: hsl(var(--muted)) !important; }

  /* Hero + section washes */
  .dark .bg-warm-hero {
    background-image: linear-gradient(135deg, #0e1b22 0%, #10222b 50%, #0c1a22 100%) !important;
  }

  /* Text — deep blue (ink) becomes the light foreground */
  .dark .text-deep-blue { color: hsl(var(--foreground)) !important; }
  .dark .text-deep-blue\\/90 { color: hsl(var(--foreground) / 0.90) !important; }
  .dark .text-deep-blue\\/85 { color: hsl(var(--foreground) / 0.85) !important; }
  .dark .text-deep-blue\\/80 { color: hsl(var(--foreground) / 0.80) !important; }
  .dark .text-deep-blue\\/75 { color: hsl(var(--foreground) / 0.75) !important; }
  .dark .text-deep-blue\\/70 { color: hsl(var(--foreground) / 0.70) !important; }
  .dark .text-deep-blue\\/60 { color: hsl(var(--foreground) / 0.60) !important; }
  .dark .text-deep-blue\\/40 { color: hsl(var(--foreground) / 0.40) !important; }

  /* Teal accents read brighter on dark */
  .dark .text-medical-blue { color: hsl(188 72% 62%) !important; }

  /* Hair-line borders that used the ink color */
  .dark .border-deep-blue\\/10,
  .dark .border-deep-blue\\/5 { border-color: hsl(var(--border)) !important; }
}
`;
writeFileSync(p, s, "utf8");
console.log("Dark Mode Phase 2 applied (globals.css).");
