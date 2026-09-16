/**
 * About page: replace the boxed "Let's find your next step" CtaSection with just
 * a "Get in touch" button floating on the page background (no card, no wording).
 * Edits app/about/page.tsx in place (preserves your file's exact text/encoding).
 * Run from project root:  node scripts/about-cta.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
const p = "app/about/page.tsx";
let s = readFileSync(p, "utf8");
const before = s;

// add ArrowRight to the lucide import first (check only the import line)
const lucideLine = s.split("\n").find((l) => l.includes('from "lucide-react"')) || "";
if (!/\bArrowRight\b/.test(lucideLine)) {
  s = s.replace(/,?\s*\}\s*from "lucide-react";/, ', ArrowRight } from "lucide-react";');
}

// swap the whole <CtaSection ... /> element for a centered floating button
const button = `<Section>
        <div className="flex justify-center">
          <Button asChild size="lg">
            <Link href="/contact">
              Get in touch
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Section>`;
s = s.replace(/<CtaSection[\s\S]*?\/>/, button);

// remove the now-unused CtaSection import (handles CRLF or LF)
s = s.replace(/import \{ CtaSection \} from "@\/components\/sections\/CtaSection";\r?\n/, "");

// add Link + Button imports if missing
if (!/from "next\/link"/.test(s)) {
  s = s.replace('import type { Metadata } from "next";',
                'import type { Metadata } from "next";\nimport Link from "next/link";');
}
if (!/@\/components\/ui\/button/.test(s)) {
  s = s.replace('import { PageTransition } from "@/components/motion/PageTransition";',
                'import { PageTransition } from "@/components/motion/PageTransition";\nimport { Button } from "@/components/ui/button";');
}

writeFileSync(p, s, "utf8");
console.log(before === s ? "No change (already done?)" : "About CTA replaced with a floating 'Get in touch' button.");
