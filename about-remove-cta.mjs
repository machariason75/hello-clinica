/**
 * Remove the "Get in touch" CTA from the bottom of the About page entirely
 * (whether it's the boxed CtaSection or the floating button added earlier).
 * Cleans up any imports that become unused. Edits app/about/page.tsx in place.
 * Run from project root:  node scripts/about-remove-cta.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
const p = "app/about/page.tsx";
let s = readFileSync(p, "utf8");
const before = s;

// remove the floating-button Section (added by about-cta.mjs)
s = s.replace(/\n[ \t]*<Section>\s*<div className="flex justify-center">[\s\S]*?Get in touch[\s\S]*?<\/Section>/, "");
// or remove a leftover boxed <CtaSection ... />
s = s.replace(/\n[ \t]*<CtaSection[\s\S]*?\/>/, "");

// drop imports that are now unused (only if they no longer appear in the body)
function dropImportIfUnused(symbol, importLineRegex) {
  const body = s.replace(importLineRegex, "");
  // count uses of the symbol outside its own import line
  const uses = (body.match(new RegExp("\\b" + symbol + "\\b", "g")) || []).length;
  if (uses === 0) s = s.replace(importLineRegex, "");
}
dropImportIfUnused("CtaSection", /import \{ CtaSection \} from "@\/components\/sections\/CtaSection";\r?\n/);
dropImportIfUnused("Button", /import \{ Button \} from "@\/components\/ui\/button";\r?\n/);
dropImportIfUnused("Link", /import Link from "next\/link";\r?\n/);
// ArrowRight lives inside the lucide import; remove just that name if unused elsewhere
if (!/\bArrowRight\b/.test(s.replace(/, ArrowRight \} from "lucide-react";/, '} from "lucide-react";').replace(/import[\s\S]*?from "lucide-react";/, ""))) {
  s = s.replace(/, ArrowRight \} from "lucide-react";/, ' } from "lucide-react";');
}

writeFileSync(p, s, "utf8");
console.log(before === s ? "No CTA found to remove." : "Removed the 'Get in touch' CTA from About.");
