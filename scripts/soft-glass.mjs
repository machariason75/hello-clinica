/**
 * SOFT GLASS PASS — makes surfaces feel continuous & glassy instead of boxed.
 * Softens the near-universal `.surface-card` (faint edge, translucent fill, gentle
 * blur, diffuse shadow) in light AND dark, and softens hairline dividers.
 * CSS-only (appended to globals.css) — cannot break the build. Fully reversible.
 *   Apply:  node scripts/soft-glass.mjs
 *   Revert: delete the block between the SOFT GLASS PASS markers in app/globals.css
 *   Dial:   edit the three values marked ★ (edge alpha, blur px, shadow strength)
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
const p = "app/globals.css";
if (!existsSync(p)) { console.log("MISSING " + p); process.exit(0); }
let s = readFileSync(p, "utf8");
if (s.includes("SOFT GLASS PASS")) { console.log("Soft glass already applied. Edit or remove the block to change it."); process.exit(0); }

s += `

/* ===== SOFT GLASS PASS (start) ============================================= */
/* Continuous, glass-mirror feel: near-invisible edges + translucent fill +    */
/* gentle blur + soft diffuse shadow. Dial the ★ values to taste.              */
@layer components {
  .surface-card {
    border-color: hsl(var(--border) / 0.28) !important;                 /* ★ edge visibility (0 = none) */
    background-color: hsl(0 0% 100% / 0.68) !important;                 /* translucency */
    backdrop-filter: saturate(118%) blur(10px);                        /* ★ glass blur */
    -webkit-backdrop-filter: saturate(118%) blur(10px);
    box-shadow: 0 14px 44px -24px rgba(12, 60, 76, 0.20),               /* ★ soft diffuse shadow */
                0 1px 2px rgba(12, 60, 76, 0.03) !important;
  }
  .surface-card-interactive:hover {
    box-shadow: 0 22px 54px -26px rgba(12, 60, 76, 0.28) !important;
  }
  /* let sections flow: soften horizontal hairline dividers */
  .border-t, .border-b { border-color: hsl(var(--border) / 0.45); }
}

/* Dark mode: translucent dark glass rather than hard boxes */
.dark .surface-card {
  border-color: hsl(var(--border) / 0.32) !important;
  background-color: hsl(var(--card) / 0.55) !important;
  backdrop-filter: saturate(120%) blur(10px);
  -webkit-backdrop-filter: saturate(120%) blur(10px);
  box-shadow: 0 16px 46px -26px rgba(0, 0, 0, 0.55) !important;
}
/* ===== SOFT GLASS PASS (end) =============================================== */
`;
writeFileSync(p, s, "utf8");
console.log("Soft glass pass applied.");
