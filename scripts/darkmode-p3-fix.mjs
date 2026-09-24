/**
 * Undo the over-applied aurora. Bright CTA pills -> subtle dark pill (attachment 4).
 * Aurora is kept ONLY on buttons that render it in light mode (the NeonButton
 * component paints its own gradient border, so we exclude neon/aurora and never
 * touch it). Nav tabs go back to plain links. CSS-only.  node scripts/darkmode-p3-fix.mjs
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
const p = "app/globals.css";
if (!existsSync(p)) { console.log("MISSING " + p); process.exit(0); }
let s = readFileSync(p, "utf8");

const startMark = "/* 1) Bright PILL buttons";
const endMark = "/* 2) Bright gradient PANELS";
const si = s.indexOf(startMark);
const ei = s.indexOf(endMark);

const NEW = `/* 1) Bright CTA pills -> SUBTLE dark pill (attachment-4 look).
      Aurora is intentionally NOT applied here; it stays only on buttons that are
      aurora in light mode (the NeonButton renders its own gradient border and is
      excluded via :not below). Scoped to main so nav tabs are untouched. */
.dark main a[class*="bg-white"]:not([class*="neon"]):not([class*="aurora"]),
.dark main button[class*="bg-white"]:not([class*="neon"]):not([class*="aurora"]),
.dark main a[class*="bg-brand-bg"]:not([class*="neon"]):not([class*="aurora"]),
.dark main button[class*="bg-brand-bg"]:not([class*="neon"]):not([class*="aurora"]) {
  background-image: none !important;
  background-color: hsl(200 24% 15%) !important;
  color: hsl(188 74% 66%) !important;
  border: 1px solid hsl(200 16% 26%) !important;
  box-shadow: none !important;
}
.dark main a[class*="bg-white"]:not([class*="neon"]) *,
.dark main button[class*="bg-white"]:not([class*="neon"]) *,
.dark main a[class*="bg-brand-bg"]:not([class*="neon"]) *,
.dark main button[class*="bg-brand-bg"]:not([class*="neon"]) * { color: inherit !important; }

/* Nav tabs: plain links in dark — never pills, never bordered */
.dark header nav a,
.dark header nav button:not([aria-haspopup="menu"]) {
  background-image: none !important;
  background-color: transparent !important;
  border-color: transparent !important;
  box-shadow: none !important;
}

`;

if (si !== -1 && ei !== -1) {
  s = s.slice(0, si) + NEW + s.slice(ei);
  writeFileSync(p, s, "utf8");
  console.log("Reverted aurora overreach -> subtle pills + plain nav.");
} else {
  // Phase 3 block not found in that shape; append an override that wins by order
  s += "\n\n/* DARK MODE PHASE 3 FIX (append) */\n" + NEW;
  writeFileSync(p, s, "utf8");
  console.log("Appended subtle-pill override (original aurora block not found to replace).");
}
