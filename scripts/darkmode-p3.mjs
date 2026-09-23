/**
 * Dark Mode Phase 3 — comprehensive polish:
 *  - bright pill buttons -> aurora (coral->teal gradient border, dark face)
 *  - QOTD / Quick Access bright gradient panels -> dark
 *  - all gray/white/slate/neutral backgrounds (incl. opacity) -> dark surfaces
 *  - stat cards, notes cards, scrollbars, logo visibility
 * CSS-only (globals.css) — cannot break the build.  node scripts/darkmode-p3.mjs
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
const p = "app/globals.css";
if (!existsSync(p)) { console.log("MISSING " + p); process.exit(0); }
let s = readFileSync(p, "utf8");
if (s.includes("DARK MODE PHASE 3")) { console.log("Phase 3 already applied."); process.exit(0); }

s += `

/* DARK MODE PHASE 3 — comprehensive polish ================================= */

/* 1) Bright PILL buttons -> aurora (dark face + coral->teal gradient border) */
.dark a[class*="bg-brand-bg"],
.dark button[class*="bg-brand-bg"],
.dark a[class*="bg-white"],
.dark button[class*="bg-white"] {
  color: hsl(188 74% 64%) !important;
  border: 1.5px solid transparent !important;
  background-image:
    linear-gradient(hsl(200 26% 13%), hsl(200 26% 13%)),
    linear-gradient(95deg, #C2461A 0%, #17A2B8 100%) !important;
  background-origin: border-box !important;
  background-clip: padding-box, border-box !important;
  box-shadow: none !important;
}
.dark a[class*="bg-brand-bg"] *,
.dark button[class*="bg-brand-bg"] *,
.dark a[class*="bg-white"] *,
.dark button[class*="bg-white"] * { color: inherit !important; }

/* 2) Bright gradient PANELS (Question of the Day, Quick Access) -> dark */
.dark [class*="from-white"], .dark [class*="via-white"], .dark [class*="to-white"],
.dark [class*="from-[#fff"], .dark [class*="from-[#FBF"], .dark [class*="from-brand-bg"] {
  background-image: none !important;
  background-color: hsl(200 24% 12%) !important;
}

/* 3) ALL soft light backgrounds -> dark surfaces (catches stat cards, notes) */
.dark .bg-white,
.dark .bg-gray-50,  .dark .bg-gray-100,  .dark .bg-gray-200,
.dark .bg-slate-50, .dark .bg-slate-100, .dark .bg-slate-200,
.dark .bg-neutral-50, .dark .bg-neutral-100, .dark .bg-neutral-200,
.dark .bg-zinc-50, .dark .bg-zinc-100,
.dark .bg-stone-50, .dark .bg-stone-100,
.dark .bg-muted, .dark .bg-secondary { background-color: hsl(200 22% 13%) !important; }

/* opacity variants of white/gray/black used as tints */
.dark [class*="bg-white/"],
.dark [class*="bg-gray-100/"],
.dark [class*="bg-slate-100/"],
.dark [class*="bg-muted/"],
.dark [class*="bg-black/"] { background-color: hsl(200 22% 14% / 0.85) !important; }

/* keep text legible on those surfaces */
.dark .bg-white, .dark .bg-gray-50, .dark .bg-gray-100, .dark .bg-slate-50,
.dark .bg-slate-100, .dark .bg-neutral-100, .dark .bg-muted, .dark .bg-secondary { color: hsl(var(--foreground)); }

/* 4) Correct-answer highlight stays green but dark */
.dark .bg-emerald-50, .dark .bg-green-50, .dark .bg-emerald-100 {
  background-color: hsl(152 42% 15%) !important;
  border-color: hsl(152 40% 32%) !important;
}
.dark .bg-emerald-50 *, .dark .bg-green-50 * { color: hsl(152 55% 82%) !important; }

/* 5) Scrollbars */
.dark ::-webkit-scrollbar { width: 12px; height: 12px; }
.dark ::-webkit-scrollbar-track { background: #0b1620; }
.dark ::-webkit-scrollbar-thumb { background: hsl(200 14% 30%); border-radius: 8px; border: 3px solid #0b1620; }
.dark * { scrollbar-color: hsl(200 14% 30%) #0b1620; }

/* 6) Logo — the color logo's dark text vanishes on dark; render it white */
.dark header a[href="/"] img,
.dark header img[alt*="Hello Clinica"],
.dark img[alt*="Hello Clinica logo"] { filter: brightness(0) invert(1); }

/* 7) rings that used black */
.dark .ring-black\\/5, .dark .ring-black\\/10 { --tw-ring-color: hsl(var(--border)) !important; }
`;
writeFileSync(p, s, "utf8");
console.log("Phase 3 applied.");
