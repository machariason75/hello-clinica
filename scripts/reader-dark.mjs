/**
 * Reader night mode: dark reader background + invert the PDF page canvases so
 * long documents are readable throughout in dark mode (uniform, no color breaks).
 * Images (non-canvas) are left alone. CSS-only. node scripts/reader-dark.mjs
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
const p = "app/globals.css";
if (!existsSync(p)) { console.log("MISSING " + p); process.exit(0); }
let s = readFileSync(p, "utf8");
if (s.includes("READER DARK MODE")) { console.log("Reader dark mode already applied."); process.exit(0); }
s += `

/* ===== READER DARK MODE (start) =========================================== */
/* Dark chrome behind the document */
.dark [class*="3a4a5a"] { background-color: #0b1620 !important; }
/* Invert rendered PDF page canvases so white pages -> dark, black text -> light.
   hue-rotate keeps colored elements roughly correct; scoped to the reader only. */
.dark [class*="3a4a5a"] canvas {
  filter: invert(0.92) hue-rotate(180deg) brightness(0.97) contrast(1.03);
  border-radius: 4px;
  background: #0b1620;
}
/* keep the page labels / chrome legible */
.dark [class*="3a4a5a"] .text-muted-foreground { color: hsl(200 12% 68%) !important; }
/* ===== READER DARK MODE (end) ============================================= */
`;
writeFileSync(p, s, "utf8");
console.log("Reader dark mode applied.");
