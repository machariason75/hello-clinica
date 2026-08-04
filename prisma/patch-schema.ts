/**
 * SCHEMA PATCHER — edits prisma/schema.prisma for you. Idempotent.
 *
 * One change is needed before the expanded question bank can land:
 *
 *   `model Question` has no image columns, so pictorial items (EKG strips,
 *      blood smears, growth charts, imaging) cannot be stored at all.
 *      Adds: imageUrl String?  /  imageAlt String?
 *
 * This change is ADDITIVE. No column is dropped, renamed or retyped, so no
 * existing data is at risk.
 *
 * NOTE: an earlier version of this script also added FILL_BLANK to the
 * QuestionType enum. That broke the production build — the quiz player's
 * QuizQuestion type accepts only SINGLE, MULTI and TRUE_FALSE, so widening the
 * database enum let an unrenderable question type reach it. That part has been
 * removed. See prisma/fix-fillblank.ts.
 *
 * SAFETY
 * ------
 * - Writes a timestamped backup of schema.prisma before touching it.
 * - Re-running is harmless: it detects work already done and exits quietly.
 * - Refuses to guess. If the file doesn't look the way it expects, it stops
 *   and prints exactly what it couldn't find rather than writing something
 *   half-correct.
 *
 * Run:  npx tsx prisma/patch-schema.ts
 */

import { readFileSync, writeFileSync, copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const SCHEMA = resolve(process.cwd(), "prisma", "schema.prisma");

function fail(message: string): never {
  console.error(`\n✗ ${message}\n`);
  console.error("  Nothing was changed. Send this message to your developer.\n");
  process.exit(1);
}

if (!existsSync(SCHEMA)) {
  fail(
    `Could not find prisma/schema.prisma.\n` +
      `  Are you running this from inside the hello-clinica folder?\n` +
      `  Current folder: ${process.cwd()}`
  );
}

let schema = readFileSync(SCHEMA, "utf8");
const original = schema;
const done: string[] = [];
const skipped: string[] = [];

/* ─────────────── 1. Question.imageUrl / imageAlt ─────────────── */

const questionBlock = schema.match(/model Question \{[^}]*\}/);
if (!questionBlock) {
  fail("Could not locate `model Question` in schema.prisma.");
}

if (/^\s*imageUrl\s/m.test(questionBlock[0])) {
  skipped.push("Question.imageUrl / imageAlt already present");
} else {
  // Anchor on the `order` field, which every version of this model has.
  const orderLine = questionBlock[0].match(/^([ \t]*)order\s+Int.*$/m);
  if (!orderLine) {
    fail("Found `model Question` but not its `order` field — the model has changed shape.");
  }

  const indent = orderLine[1];
  const patchedBlock = questionBlock[0].replace(
    orderLine[0],
    `${orderLine[0]}\n` +
      `${indent}imageUrl    String?      // figure: EKG strip, smear, chart, imaging\n` +
      `${indent}imageAlt    String?      // required when imageUrl is set — accessibility`
  );

  schema = schema.replace(questionBlock[0], patchedBlock);
  done.push("Added imageUrl and imageAlt to model Question");
}

/* ─────────────── write ─────────────── */

if (schema === original) {
  console.log("\n✓ schema.prisma is already up to date. Nothing to do.\n");
  for (const s of skipped) console.log(`  · ${s}`);
  console.log("");
  process.exit(0);
}

const stamp = new Date().toISOString().replace(/[:.]/g, "-");
const backup = `${SCHEMA}.backup-${stamp}`;
copyFileSync(SCHEMA, backup);
writeFileSync(SCHEMA, schema, "utf8");

console.log("\n✓ schema.prisma patched.\n");
for (const d of done) console.log(`  · ${d}`);
for (const s of skipped) console.log(`  · ${s} (skipped)`);
console.log(`\n  Backup saved: ${backup.split("/").pop()}`);
console.log("\n  Next command:  npx prisma db push\n");
