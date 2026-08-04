/**
 * REVERT FILL_BLANK — unblocks the Vercel build.
 *
 * WHAT WENT WRONG
 * ---------------
 * Wave 0 added FILL_BLANK to the Prisma `QuestionType` enum, because
 * lib/admin/content-schemas.ts already offered that option while the database
 * did not recognise it. Closing that gap from the database side was the wrong
 * direction: it widened the type that flows into the quiz player, whose
 * `QuizQuestion` type accepts only SINGLE, MULTI and TRUE_FALSE. TypeScript
 * correctly refused to build a page that could be handed a question it has no
 * way to render.
 *
 * THE RIGHT FIX
 * -------------
 * Close the gap from the other side. Remove FILL_BLANK from BOTH the database
 * enum and the admin validator, so nothing anywhere offers a question type the
 * player cannot display.
 *
 * Fill-in-the-blank is worth having eventually — it is a real NCLEX item type
 * and the natural fit for pharmacy dose calculations. But it needs an input
 * field, answer matching (case, whitespace, significant figures, alternative
 * spellings) and a marking rule. That is a feature, not an enum value.
 *
 * SAFETY
 * ------
 * Removing an unused enum value is safe: no question in your database has
 * type FILL_BLANK, because the admin screen could never successfully save one.
 * Every file is backed up before it is touched, and re-running does nothing.
 *
 * Run:  npx tsx prisma/fix-fillblank.ts
 */

import { readFileSync, writeFileSync, copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const stamp = new Date().toISOString().replace(/[:.]/g, "-");
const done: string[] = [];
const skipped: string[] = [];

function patch(relPath: string, transform: (text: string) => string | null, label: string) {
  const path = resolve(process.cwd(), relPath);
  if (!existsSync(path)) {
    skipped.push(`${relPath} not found — nothing to do`);
    return;
  }

  const before = readFileSync(path, "utf8");
  const after = transform(before);

  if (after === null || after === before) {
    skipped.push(`${relPath} already clean`);
    return;
  }

  copyFileSync(path, `${path}.backup-${stamp}`);
  writeFileSync(path, after, "utf8");
  done.push(label);
}

/* ─────── 1. the Prisma enum ─────── */

patch(
  "prisma/schema.prisma",
  (text) => {
    const block = text.match(/enum QuestionType \{[^}]*\}/);
    if (!block || !/\bFILL_BLANK\b/.test(block[0])) return null;
    // Drop the whole line, including its indentation and newline.
    const cleaned = block[0].replace(/^[ \t]*FILL_BLANK[ \t]*\r?\n/m, "");
    return text.replace(block[0], cleaned);
  },
  "Removed FILL_BLANK from enum QuestionType"
);

/* ─────── 2. the admin validator ─────── */

const ADMIN_FILES = [
  "lib/admin/content-schemas.ts",
  "lib/admin/content-schema.ts",
  "lib/admin/schemas.ts",
];

for (const file of ADMIN_FILES) {
  patch(
    file,
    (text) => {
      if (!/\bFILL_BLANK\b/.test(text)) return null;
      // Handles "FILL_BLANK" whether it sits first, last or mid-list.
      return text
        .replace(/,\s*["']FILL_BLANK["']/g, "")
        .replace(/["']FILL_BLANK["']\s*,\s*/g, "")
        .replace(/["']FILL_BLANK["']/g, "");
    },
    `Removed FILL_BLANK from ${file}`
  );
}

/* ─────── report ─────── */

if (!done.length) {
  console.log("\n✓ Nothing to change — FILL_BLANK is already gone.\n");
  for (const s of skipped) console.log(`  · ${s}`);
  console.log("");
  process.exit(0);
}

console.log("\n✓ Reverted.\n");
for (const d of done) console.log(`  · ${d}`);
for (const s of skipped) console.log(`  · ${s}`);
console.log(`\n  Backups saved alongside each file (.backup-${stamp})`);
console.log("\n  Next commands:");
console.log("    npx prisma db push");
console.log("    npm run build\n");
