/** Adds Vercel Web Analytics (visitors, unique visitors, top pages, countries).
 *  Run:  npm i @vercel/analytics   then   node scripts/add-vercel-analytics.mjs
 *  Then enable Analytics in the Vercel dashboard (Project → Analytics → Enable). */
import { readFileSync, writeFileSync } from "node:fs";
const p = "app/layout.tsx";
let s = readFileSync(p, "utf8");
if (!s.includes("@vercel/analytics")) {
  s = s.replace('import { SpeedInsights } from "@vercel/speed-insights/next";',
                'import { SpeedInsights } from "@vercel/speed-insights/next";\nimport { Analytics } from "@vercel/analytics/react";');
}
if (!s.includes("<Analytics")) {
  s = s.replace("<SpeedInsights />", "<SpeedInsights />\n        <Analytics />");
}
writeFileSync(p, s, "utf8");
console.log("Added <Analytics /> to layout.");
