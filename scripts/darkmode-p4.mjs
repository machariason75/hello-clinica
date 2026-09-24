/** Small dark-mode cleanups: remove the monochrome logo filter (proper colored
 *  logo swap handled in the Navbar), and let dropdown menu items float (no boxes)
 *  while the top-nav pills keep their borders. CSS-only. node scripts/darkmode-p4.mjs */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
const p = "app/globals.css";
if (!existsSync(p)) { console.log("MISSING " + p); process.exit(0); }
let s = readFileSync(p, "utf8");
if (s.includes("DARK MODE PHASE 4")) { console.log("Phase 4 already applied."); process.exit(0); }
s += `

/* DARK MODE PHASE 4 — logo filter off + dropdown de-clutter ================ */
/* stop forcing the logo to white; the Navbar swaps to the colored dark logo */
.dark header a[href="/"] img,
.dark header img[alt*="Hello Clinica"],
.dark img[alt*="Hello Clinica logo"] { filter: none !important; }

/* dropdown menu items float on the dark bg (no per-item boxes) */
.dark [role="menu"] a,
.dark [role="menu"] button,
.dark [role="menuitem"] {
  border-color: transparent !important;
  background-image: none !important;
  background-color: transparent !important;
  box-shadow: none !important;
}
.dark [role="menu"] a:hover,
.dark [role="menuitem"]:hover { background-color: hsl(200 24% 16%) !important; }
`;
writeFileSync(p, s, "utf8");
console.log("Phase 4 applied.");
