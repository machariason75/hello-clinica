/**
 * SCHEMA PATCHER — edits prisma/schema.prisma for you. Idempotent.
 *
 * Two changes are needed before the expanded question bank can land:
 *
 *   1. `model Question` has no image columns, so pictorial items (EKG strips,
 *      blood smears, growth charts, imaging) cannot be stored at all.
 *      Adds: imageUrl String?  /  imageAlt String?
 *
 *   2. `lib/admin/content-schemas.ts` already offers a FILL_BLANK question
 *      type, but the Prisma `QuestionType` enum doesn't contain it. An admin
 *      selecting it hits a runtime error today.
 *      Adds: FILL_BLANK to the enum.
 *
 * Both are ADDITIVE. No column is dropped, renamed or retyped, so no existing
 * data is at risk.
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

/* ─────────────── 2. QuestionType.FILL_BLANK ─────────────── */

const enumBlock = schema.match(/enum QuestionType \{[^}]*\}/);
if (!enumBlock) {
  fail("Could not locate `enum QuestionType` in schema.prisma.");
}

if (/\bFILL_BLANK\b/.test(enumBlock[0])) {
  skipped.push("QuestionType.FILL_BLANK already present");
} else {
  const lastMember = enumBlock[0].match(/^([ \t]*)TRUE_FALSE\s*$/m);
  if (!lastMember) {
    fail("Found `enum QuestionType` but not its TRUE_FALSE member — the enum has changed shape.");
  }

  const patchedEnum = enumBlock[0].replace(
    lastMember[0],
    `${lastMember[0]}\n${lastMember[1]}FILL_BLANK`
  );

  schema = schema.replace(enumBlock[0], patchedEnum);
  done.push("Added FILL_BLANK to enum QuestionType");
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
