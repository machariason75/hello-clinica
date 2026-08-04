/**
 * REDIRECT WIRING — adds the legacy URL forwards to next.config. Idempotent.
 *
 * The renamed British slugs (cs-paediatrics, haematology-exam-1, and the rest)
 * were live addresses. Without forwarding they now return "page not found" for
 * anyone who bookmarked them, and Google drops the pages entirely rather than
 * carrying their ranking across.
 *
 * The full redirect list lives in lib/legacy-redirects.js. This script only
 * inserts a single line into next.config that points at it, which keeps the
 * edit to your config file as small as possible.
 *
 * SAFETY
 * ------
 * - Backs up next.config before touching it.
 * - Detects work already done and exits quietly on a second run.
 * - If your config already defines its own redirects(), it will NOT merge
 *   blindly. It stops and says so, because silently overwriting existing
 *   redirect rules could take working pages offline.
 *
 * Run:  npx tsx prisma/patch-redirects.ts
 */

import { readFileSync, writeFileSync, copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const CANDIDATES = ["next.config.js", "next.config.mjs", "next.config.ts", "next.config.cjs"];

const path = CANDIDATES.map((f) => resolve(process.cwd(), f)).find((p) => existsSync(p));

if (!path) {
  console.error("\n✗ Could not find next.config.js / .mjs / .ts in this folder.");
  console.error(`  Current folder: ${process.cwd()}`);
  console.error("  Are you running this from inside hello-clinica?\n");
  process.exit(1);
}

const filename = path.split("/").pop()!;
let config = readFileSync(path, "utf8");

/* ─────────────── already done? ─────────────── */

if (config.includes("legacy-redirects")) {
  console.log(`\n✓ ${filename} already points at lib/legacy-redirects.js. Nothing to do.\n`);
  process.exit(0);
}

if (/async\s+redirects\s*\(/.test(config)) {
  console.error(`\n✗ ${filename} already defines its own redirects().`);
  console.error("  Merging automatically could disable rules you rely on, so this");
  console.error("  script stopped instead. Send me your next.config file and I'll");
  console.error("  merge the two lists by hand.\n");
  process.exit(1);
}

/* ─────────────── find the config object ─────────────── */

const isESM = filename.endsWith(".mjs") || filename.endsWith(".ts") || /export default/.test(config);

const IMPORT_LINE = isESM
  ? `import legacyRedirects from "./lib/legacy-redirects.js";\n`
  : `const legacyRedirects = require("./lib/legacy-redirects");\n`;

const REDIRECTS_METHOD =
  `  async redirects() {\n` +
  `    return legacyRedirects;\n` +
  `  },\n`;

// Ordered most specific to least, so a typed config isn't matched by the
// looser pattern first.
const ANCHORS: RegExp[] = [
  /const\s+nextConfig\s*:\s*NextConfig\s*=\s*\{/,
  /const\s+nextConfig\s*=\s*\{/,
  /const\s+config\s*:\s*NextConfig\s*=\s*\{/,
  /const\s+config\s*=\s*\{/,
  /module\.exports\s*=\s*\{/,
  /export\s+default\s*\{/,
];

const anchor = ANCHORS.find((re) => re.test(config));

if (!anchor) {
  console.error(`\n✗ Could not recognise the shape of ${filename}.`);
  console.error("  Nothing was changed. Paste me the contents of that file and");
  console.error("  I'll wire it up for you.\n");
  process.exit(1);
}

/* ─────────────── patch ─────────────── */

const match = config.match(anchor)!;
config = config.replace(match[0], `${match[0]}\n${REDIRECTS_METHOD}`);

// Put the import above the first line of real code.
if (isESM) {
  const lastImport = [...config.matchAll(/^import .*$/gm)].pop();
  config = lastImport
    ? config.replace(lastImport[0], `${lastImport[0]}\n${IMPORT_LINE.trimEnd()}`)
    : IMPORT_LINE + config;
} else {
  config = IMPORT_LINE + config;
}

const stamp = new Date().toISOString().replace(/[:.]/g, "-");
copyFileSync(path, `${path}.backup-${stamp}`);
writeFileSync(path, config, "utf8");

console.log(`\n✓ ${filename} patched.\n`);
console.log(`  · Added redirects() pointing at lib/legacy-redirects.js`);
console.log(`  · 19 forwarding rules covering 3 renamed sections and 13 renamed quizzes`);
console.log(`\n  Backup saved: ${filename}.backup-${stamp}`);
console.log(`\n  Next command:  npm run dev\n`);
