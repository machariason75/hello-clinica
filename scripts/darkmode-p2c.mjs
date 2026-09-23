/**
 * Dark Mode Phase 2c: fix the nav + footer "gray" bug and tone down bright pill
 * buttons, using element/attribute selectors (no class knowledge needed).
 * CSS-only (globals.css) — cannot break the build.  node scripts/darkmode-p2c.mjs
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
const p = "app/globals.css";
if (!existsSync(p)) { console.log("MISSING " + p); process.exit(0); }
let s = readFileSync(p, "utf8");
if (s.includes("DARK MODE PHASE 2c")) { console.log("Phase 2c already applied."); process.exit(0); }

s += `

/* DARK MODE PHASE 2c — nav, footer, bright buttons ========================= */

/* Top nav: dark translucent glass instead of the light bar */
.dark header {
  background-color: rgba(10, 20, 29, 0.82) !important;
  border-color: hsl(var(--border)) !important;
  backdrop-filter: saturate(140%) blur(10px);
}
/* the sticky "Back" sub-bar that sits under the nav */
.dark header + div,
.dark .sticky.top-0 { background-color: rgba(10, 20, 29, 0.7) !important; }

/* Footer: solid dark, hairline divider on the border token */
.dark footer { background-color: #0a141d !important; background-image: none !important; }
.dark footer hr,
.dark footer .border-t { border-color: hsl(var(--border)) !important; }

/* Bright cream/white PILL buttons -> dark surface, teal-accented (aurora-like) */
.dark a[class*="bg-brand-bg"],
.dark button[class*="bg-brand-bg"],
.dark a[class*="bg-white"]:not([class*="/"]),
.dark button[class*="bg-white"]:not([class*="/"]) {
  background-color: hsl(200 24% 16%) !important;
  color: hsl(var(--foreground)) !important;
  border: 1px solid hsl(188 60% 40% / 0.5) !important;
  box-shadow: 0 0 0 1px hsl(16 76% 52% / 0.18) inset !important;
}
.dark a[class*="bg-brand-bg"] *,
.dark button[class*="bg-brand-bg"] * { color: hsl(var(--foreground)) !important; }
`;
writeFileSync(p, s, "utf8");
console.log("Phase 2c applied — nav/footer/buttons darkened.");
