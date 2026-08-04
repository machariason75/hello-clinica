/**
 * FILL_BLANK — dead comparison cleanup.
 *
 * The previous sweep removed FILL_BLANK from every list and type union, and
 * deliberately left alone the places where it appears inside logic. Those are
 * now dead comparisons: `qForm.type === "FILL_BLANK"` can never be true, and
 * TypeScript reports comparing two types with no overlap as an error rather
 * than a warning.
 *
 * HOW THIS WORKS — two passes, in order
 * ------------------------------------
 * PASS 1 — neutralise. Every comparison against "FILL_BLANK" is replaced with
 * the boolean it must always evaluate to:
 *
 *     qForm.type === "FILL_BLANK"   ->  false
 *     qForm.type !== "FILL_BLANK"   ->  true
 *
 * This alone is enough to make the project compile, and it cannot change
 * behaviour: the expression already always evaluated that way at runtime.
 *
 * PASS 2 — tidy. Where the result is now an obviously dead branch on a single
 * line, it collapses to the branch that actually runs:
 *
 *     false ? "Accepted answers" : "Choices"   ->  "Choices"
 *     true  ? A : B                            ->  A
 *
 * If the expression spans several lines, contains a nested ternary, or is
 * otherwise ambiguous, pass 2 leaves it as `false ? … : …`. That is slightly
 * untidy but perfectly valid TypeScript, and it builds. Correctness first.
 *
 * WHAT IT STILL WON'T TOUCH
 * -------------------------
 * `case "FILL_BLANK":` inside a switch, and any multi-line `if` block. Those
 * need a judgement about which surrounding code to delete, and guessing is how
 * a fix breaks a working screen. They are reported precisely instead.
 *
 * Dry run by default.
 *
 * Run:  npx tsx prisma/fix-fillblank-logic.ts             (preview)
 *       npx tsx prisma/fix-fillblank-logic.ts --apply     (writes)
 */

import { readFileSync, writeFileSync, copyFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, resolve } from "node:path";

const ROOT = process.cwd();
const APPLY = process.argv.includes("--apply");
const stamp = new Date().toISOString().replace(/[:.]/g, "-");
const SELF = resolve(ROOT, "prisma", "fix-fillblank-logic.ts");

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
const EXTENSIONS = [".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs"];

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

/* ═════════ PASS 1 — neutralise comparisons ═════════ */

/** An expression like `qForm.type`, `q?.type`, `row["type"]`. */
const EXPR = String.raw`[A-Za-z_$][\w$]*(?:\s*[?!]?\.\s*[A-Za-z_$][\w$]*|\s*\[[^\]]*\])*`;

const COMPARISONS: [RegExp, (op: string) => string][] = [
  // expr === "FILL_BLANK"
  [
    new RegExp(String.raw`${EXPR}\s*(===|!==|==|!=)\s*["']FILL_BLANK["']`, "g"),
    (op) => (op.startsWith("!") ? "true" : "false"),
  ],
  // "FILL_BLANK" === expr
  [
    new RegExp(String.raw`["']FILL_BLANK["']\s*(===|!==|==|!=)\s*${EXPR}`, "g"),
    (op) => (op.startsWith("!") ? "true" : "false"),
  ],
];

function neutralise(line: string): string {
  let out = line;
  for (const [pattern, decide] of COMPARISONS) {
    out = out.replace(pattern, (match) => {
      const op = match.match(/(===|!==|==|!=)/)?.[1] ?? "===";
      return decide(op);
    });
  }
  return out;
}

/* ═════════ PASS 2 — collapse dead ternaries ═════════ */

const OPENERS: Record<string, string> = { "(": ")", "[": "]", "{": "}" };

/**
 * Given a line containing `false ? A : B`, return the line with that whole
 * expression replaced by B. Returns null when the shape can't be parsed with
 * confidence — in which case the caller leaves the line alone.
 */
function collapseTernary(line: string): string | null {
  const start = line.search(/\b(false|true)\s*\?/);
  if (start === -1) return null;

  const literalMatch = line.slice(start).match(/^(false|true)\s*\?/);
  if (!literalMatch) return null;
  const takeTrueBranch = literalMatch[1] === "true";

  let i = start + literalMatch[0].length;
  const stack: string[] = [];
  let quote: string | null = null;
  let colonAt = -1;

  // Walk to the `:` that belongs to this ternary.
  for (; i < line.length; i++) {
    const ch = line[i];

    if (quote) {
      if (ch === "\\") i++;
      else if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === "`") {
      quote = ch;
      continue;
    }
    if (OPENERS[ch]) {
      stack.push(OPENERS[ch]);
      continue;
    }
    if (ch === stack[stack.length - 1]) {
      stack.pop();
      continue;
    }
    if (stack.length) continue;

    // A nested ternary before our colon — too ambiguous to touch.
    if (ch === "?") return null;
    if (ch === ":") {
      colonAt = i;
      break;
    }
  }
  if (colonAt === -1) return null;

  // Walk to the end of the false branch.
  let j = colonAt + 1;
  quote = null;
  const stack2: string[] = [];
  for (; j < line.length; j++) {
    const ch = line[j];
    if (quote) {
      if (ch === "\\") j++;
      else if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === "`") {
      quote = ch;
      continue;
    }
    if (OPENERS[ch]) {
      stack2.push(OPENERS[ch]);
      continue;
    }
    if (ch === stack2[stack2.length - 1]) {
      stack2.pop();
      continue;
    }
    if (stack2.length) continue;
    if (ch === "}" || ch === ")" || ch === "]" || ch === "," || ch === ";") break;
    if (ch === "?") return null;
  }

  const trueBranch = line.slice(start + literalMatch[0].length, colonAt).trim();
  const falseBranch = line.slice(colonAt + 1, j).trim();
  const chosen = takeTrueBranch ? trueBranch : falseBranch;
  if (!chosen) return null;

  return line.slice(0, start) + chosen + line.slice(j);
}

/* ═════════ run ═════════ */

type Change = { line: number; before: string; after: string; pass: string };

const NEEDS_HUMAN = [/\bcase\s+["']FILL_BLANK["']\s*:/];

const files = walk(ROOT);
const touched: { file: string; changes: Change[] }[] = [];
const manual: { file: string; line: number; text: string }[] = [];

for (const file of files) {
  let text: string;
  try {
    text = readFileSync(file, "utf8");
  } catch {
    continue;
  }
  if (!text.includes("FILL_BLANK") && !/\b(false|true)\s*\?/.test(text)) continue;
  if (!text.includes("FILL_BLANK")) continue;

  const lines = text.split(/\r?\n/);
  const changes: Change[] = [];

  const updated = lines.map((raw, idx) => {
    if (NEEDS_HUMAN.some((p) => p.test(raw))) {
      manual.push({ file, line: idx + 1, text: raw.trim() });
      return raw;
    }
    if (!raw.includes("FILL_BLANK")) return raw;

    const step1 = neutralise(raw);
    if (step1 === raw) {
      // Contains FILL_BLANK but not as a comparison we recognise.
      if (!/^\s*(\/\/|\*|\/\*)/.test(raw)) manual.push({ file, line: idx + 1, text: raw.trim() });
      return raw;
    }

    let final = step1;
    let pass = "neutralised";
    const step2 = collapseTernary(step1);
    if (step2 !== null) {
      final = step2;
      pass = "neutralised + collapsed";
    }

    changes.push({ line: idx + 1, before: raw.trim(), after: final.trim(), pass });
    return final;
  });

  if (!changes.length) continue;
  touched.push({ file, changes });

  if (APPLY) {
    copyFileSync(file, `${file}.backup-${stamp}`);
    writeFileSync(file, updated.join("\n"), "utf8");
  }
}

/* ═════════ report ═════════ */

console.log(APPLY ? "\nCLEANING DEAD COMPARISONS (writing)…\n" : "\nDRY RUN — nothing will be written.\n");
console.log(`  Scanned ${files.length} files.\n`);

if (!touched.length && !manual.length) {
  console.log("  ✓ Nothing left to clean.\n");
  process.exit(0);
}

for (const { file, changes } of touched) {
  console.log(`  ${relative(ROOT, file)}`);
  for (const c of changes) {
    console.log(`    line ${c.line} — ${c.pass}`);
    console.log(`      − ${c.before}`);
    console.log(`      + ${c.after}`);
  }
  console.log("");
}

if (manual.length) {
  console.log(`  ─── STILL NEEDS A HUMAN (${manual.length}) ───`);
  console.log("  Switch cases and shapes I can't rewrite safely.\n");
  for (const m of manual) {
    console.log(`    ${relative(ROOT, m.file)}:${m.line}`);
    console.log(`      ${m.text}`);
  }
  console.log("\n  Send these to me.\n");
}

console.log(`  Files changed: ${touched.length}`);
if (!APPLY) console.log("\n  Dry run only. Re-run with --apply to write.\n");
else console.log(`\n  Backups saved (.backup-${stamp})\n\n  Next:  npm run build\n`);
