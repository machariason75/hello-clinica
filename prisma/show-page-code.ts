/**
 * SHOW PAGE CODE — read-only. Prints the files that render the question bank.
 *
 * Every diagnosis so far has been inferred from the database, because that is
 * all my scripts could see. The blank Pathology dashboard is a RENDERING
 * problem, and the database cannot explain it. This prints the actual page
 * code so the cause can be read rather than guessed at.
 *
 * It looks for the route that renders a category page — typically
 * app/question-bank/[category]/page.tsx — along with any data-fetching helper
 * and card component it uses, and prints each in full.
 *
 * Run:  npx tsx prisma/show-page-code.ts
 */

import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();

const SKIP = new Set([
  "node_modules",
  ".next",
  ".git",
  ".vercel",
  "dist",
  "build",
  "out",
  "coverage",
]);

function walk(dir: string, found: string[] = []): string[] {
  let entries: string[];
  try {
    entries = readdirSync(dir);
  } catch {
    return found;
  }
  for (const entry of entries) {
    if (entry.startsWith(".")) continue;
    const full = join(dir, entry);
    let s;
    try {
      s = statSync(full);
    } catch {
      continue;
    }
    if (s.isDirectory()) {
      if (SKIP.has(entry)) continue;
      walk(full, found);
    } else if (/\.(tsx|ts)$/.test(entry) && !entry.includes(".backup-")) {
      found.push(full);
    }
  }
  return found;
}

/* Files whose PATH suggests they render the question bank. */
const PATH_HINTS = [/question-bank/i, /quiz/i, /categor/i];

/* Files whose CONTENT suggests they query categories or quizzes for display. */
const CONTENT_HINTS = [
  /quizCategory\.find/,
  /quiz\.findMany/,
  /findUnique\(\{\s*where:\s*\{\s*slug/,
  /categorySlug/,
];

const all = walk(ROOT);

const pageFiles = all.filter(
  (f) =>
    /[/\\](page|layout)\.tsx$/.test(f) && PATH_HINTS.some((h) => h.test(relative(ROOT, f)))
);

const dataFiles = all.filter((f) => {
  if (pageFiles.includes(f)) return false;
  if (/[/\\]prisma[/\\]/.test(f)) return false;
  let text: string;
  try {
    text = readFileSync(f, "utf8");
  } catch {
    return false;
  }
  if (!CONTENT_HINTS.some((h) => h.test(text))) return false;
  return PATH_HINTS.some((h) => h.test(relative(ROOT, f))) || /lib[/\\]/.test(f);
});

function dump(label: string, files: string[], limit = 400) {
  console.log(`\n${"═".repeat(70)}`);
  console.log(`${label}  (${files.length} file${files.length === 1 ? "" : "s"})`);
  console.log("═".repeat(70));

  if (!files.length) {
    console.log("\n  none found\n");
    return;
  }

  for (const f of files) {
    const rel = relative(ROOT, f);
    const lines = readFileSync(f, "utf8").split(/\r?\n/);
    console.log(`\n──────── ${rel}  (${lines.length} lines) ────────\n`);
    const shown = lines.slice(0, limit);
    shown.forEach((l, i) => console.log(`${String(i + 1).padStart(4)} | ${l}`));
    if (lines.length > limit) {
      console.log(`\n  … ${lines.length - limit} further lines not shown`);
    }
  }
}

console.log("\n════════ QUESTION BANK PAGE CODE ════════");
console.log(`\nScanned ${all.length} source files under ${ROOT}\n`);

dump("PAGE / LAYOUT FILES", pageFiles);
dump("DATA-FETCHING FILES", dataFiles, 250);

if (!pageFiles.length && !dataFiles.length) {
  console.log("\nNothing matched. Paths searched for: question-bank, quiz, category.");
  console.log("If your route is named differently, tell me the folder name and");
  console.log("I will widen the search.\n");
} else {
  console.log("\n\nSend this output. The cause will be readable in it.\n");
}
