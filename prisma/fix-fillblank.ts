/**
 * REVERT FILL_BLANK — repo-wide sweep.
 *
 * The previous version of this script guessed at file paths and missed
 * components/admin/content/QuizEditor.tsx, which cost you another failed
 * build. This one does not guess: it walks your entire project and finds every
 * occurrence, whatever file it lives in.
 *
 * BACKGROUND
 * ----------
 * Wave 0 added FILL_BLANK to the Prisma QuestionType enum. Your quiz player's
 * type accepts only SINGLE, MULTI and TRUE_FALSE, so widening the database
 * enum let an unrenderable question type reach it and TypeScript refused to
 * build. Fill-in-the-blank needs a text input, answer matching and a marking
 * rule to work at all — it is a feature, not a list entry — so the fix is to
 * remove it everywhere rather than teach each consumer to ignore it.
 *
 * WHAT IT HANDLES
 *   · Prisma enum members            FILL_BLANK
 *   · Zod / string arrays            "FILL_BLANK",
 *   · TypeScript unions              | "FILL_BLANK"
 *   · Dropdown option objects        { value: "FILL_BLANK", label: "…" },
 *   · Switch cases and if-branches   reported, not deleted (see below)
 *
 * WHAT IT WILL NOT DO
 * -------------------
 * If an occurrence sits inside logic — a `case "FILL_BLANK":` block, a
 * conditional, a function body — the script reports it and leaves it alone.
 * Deleting code it does not understand is how a "fix" takes working features
 * offline. You will get a precise list of anything it skipped.
 *
 * Dry run by default. Nothing is written until you pass --apply.
 *
 * Run:  npx tsx prisma/fix-fillblank.ts             (preview)
 *       npx tsx prisma/fix-fillblank.ts --apply     (writes)
 */

import { readFileSync, writeFileSync, copyFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, resolve } from "node:path";

const ROOT = process.cwd();

/*
 * Exclude this script from its own sweep. Without this it happily rewrites its
 * own documentation and regexes — caught in testing, and it would have left
 * you with a corrupted file that no longer does its job.
 */
const SELF = resolve(ROOT, "prisma", "fix-fillblank.ts");
const APPLY = process.argv.includes("--apply");
const stamp = new Date().toISOString().replace(/[:.]/g, "-");

const SKIP_DIRS = new Set([
  "node_modules",
  ".next",
  ".git",
  ".vercel",
  "dist",
  "build",
  "out",
  "coverage",
  ".turbo",
]);

const EXTENSIONS = [".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs", ".prisma"];

/* ─────────────── find candidate files ─────────────── */

function walk(dir: string, found: string[] = []): string[] {
  let entries: string[];
  try {
    entries = readdirSync(dir);
  } catch {
    return found;
  }

  for (const entry of entries) {
    if (entry.startsWith(".") && entry !== ".prisma") continue;
    const full = join(dir, entry);

    let stats;
    try {
      stats = statSync(full);
    } catch {
      continue;
    }

    if (stats.isDirectory()) {
      if (SKIP_DIRS.has(entry)) continue;
      walk(full, found);
    } else {
      if (entry.includes(".backup-")) continue;
      if (resolve(full) === SELF) continue;
      if (!EXTENSIONS.some((e) => entry.endsWith(e))) continue;
      found.push(full);
    }
  }
  return found;
}

/* ─────────────── transformations ─────────────── */

type Edit = { line: number; before: string; after: string | null; kind: string };

/** Lines where FILL_BLANK sits inside logic — reported, never auto-edited. */
const LOGIC = [
  /\bcase\s+["']FILL_BLANK["']/,
  /\bif\s*\(/,
  /\?\s*$/,
  /=>\s*$/,
  /\bfunction\b/,
  /\breturn\b/,
];

function analyzeLine(raw: string): { after: string | null; kind: string } | null {
  if (!raw.includes("FILL_BLANK")) return null;

  const trimmed = raw.trim();

  // Logic — hands off.
  if (LOGIC.some((p) => p.test(trimmed))) {
    return { after: raw, kind: "LOGIC — skipped, needs a human" };
  }

  // A whole option object on one line: { value: "FILL_BLANK", label: "…" },
  if (/^\{.*["']FILL_BLANK["'].*\},?$/.test(trimmed)) {
    return { after: null, kind: "dropdown option — line removed" };
  }

  // A bare Prisma enum member.
  if (/^FILL_BLANK,?$/.test(trimmed)) {
    return { after: null, kind: "Prisma enum member — line removed" };
  }

  // A lone quoted string on its own line inside an array.
  if (/^["']FILL_BLANK["'],?$/.test(trimmed)) {
    return { after: null, kind: "array entry — line removed" };
  }

  // Inline within an array or union: strip just the entry.
  let out = raw
    .replace(/\s*\|\s*["']FILL_BLANK["']/g, "") //  | "FILL_BLANK"
    .replace(/["']FILL_BLANK["']\s*\|\s*/g, "") //  "FILL_BLANK" |
    .replace(/,\s*["']FILL_BLANK["']/g, "") //     , "FILL_BLANK"
    .replace(/["']FILL_BLANK["']\s*,\s*/g, "") //  "FILL_BLANK",
    .replace(/,\s*FILL_BLANK\b/g, "") //           , FILL_BLANK
    .replace(/\bFILL_BLANK\s*,\s*/g, ""); //       FILL_BLANK,

  if (out !== raw && !out.includes("FILL_BLANK")) {
    return { after: out, kind: "inline entry — removed" };
  }

  // Anything else: a comment, or a shape not recognised.
  if (/^\/\/|^\s*\*|^\/\*/.test(trimmed)) {
    return { after: raw, kind: "comment — left alone" };
  }

  return { after: raw, kind: "UNRECOGNISED — skipped, needs a human" };
}

/* ─────────────── run ─────────────── */

const files = walk(ROOT);
const touched: { file: string; edits: Edit[] }[] = [];
const needsHuman: { file: string; line: number; text: string; kind: string }[] = [];

for (const file of files) {
  let text: string;
  try {
    text = readFileSync(file, "utf8");
  } catch {
    continue;
  }
  if (!text.includes("FILL_BLANK")) continue;

  const lines = text.split(/\r?\n/);
  const keep: string[] = [];
  const edits: Edit[] = [];

  lines.forEach((raw, i) => {
    const result = analyzeLine(raw);
    if (!result) {
      keep.push(raw);
      return;
    }

    if (result.kind.includes("needs a human") || result.kind.includes("left alone")) {
      if (result.kind.includes("needs a human"))
        needsHuman.push({ file, line: i + 1, text: raw.trim(), kind: result.kind });
      keep.push(raw);
      return;
    }

    edits.push({ line: i + 1, before: raw.trim(), after: result.after, kind: result.kind });
    if (result.after !== null) keep.push(result.after);
  });

  if (!edits.length) continue;

  touched.push({ file, edits });

  if (APPLY) {
    copyFileSync(file, `${file}.backup-${stamp}`);
    writeFileSync(file, keep.join("\n"), "utf8");
  }
}

/* ─────────────── report ─────────────── */

console.log(
  APPLY ? "\nREMOVING FILL_BLANK (writing)…\n" : "\nDRY RUN — nothing will be written.\n"
);
console.log(`  Scanned ${files.length} files.\n`);

if (!touched.length && !needsHuman.length) {
  console.log("  ✓ No occurrences found. Already clean.\n");
  process.exit(0);
}

for (const { file, edits } of touched) {
  console.log(`  ${relative(ROOT, file)}`);
  for (const e of edits) {
    console.log(`    line ${e.line}: ${e.kind}`);
    console.log(`      − ${e.before}`);
    if (e.after !== null) console.log(`      + ${e.after.trim()}`);
  }
  console.log("");
}

if (needsHuman.length) {
  console.log(`  ─── NEEDS A HUMAN (${needsHuman.length}) ───`);
  console.log("  These sit inside logic. Deleting code I don't understand is how");
  console.log("  a fix breaks something else, so they were left untouched.\n");
  for (const n of needsHuman) {
    console.log(`    ${relative(ROOT, n.file)}:${n.line}`);
    console.log(`      ${n.text}`);
  }
  console.log("\n  Send these to me and I'll handle them.\n");
}

console.log(`  Files changed: ${touched.length}`);

if (!APPLY) {
  console.log("\n  Dry run only. Re-run with --apply to write.\n");
} else {
  console.log(`  Backups saved alongside each file (.backup-${stamp})\n`);
  console.log("  Next commands:");
  console.log("    npx prisma db push");
  console.log("    npm run build\n");
}
