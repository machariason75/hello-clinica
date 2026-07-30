/**
 * apply-drop.mjs — wires this drop into your project automatically.
 *
 * Run once after extracting:   node scripts/apply-drop.mjs
 *
 * What it does:
 *   1. Confirms the zip was extracted into the right place.
 *   2. Finds your homepage file, wherever it lives.
 *   3. Adds the one import line and the one prop that the hero rotation needs.
 *   4. Makes sure the homepage refreshes every 10 minutes in production, so the
 *      photo actually rotates on the live site instead of freezing at build time.
 *   5. Backs up anything it touches, then reports in plain English.
 *
 * Safe to run twice — it detects work already done and skips it.
 * If it can't do something safely, it changes NOTHING and says why.
 */

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const BACKUP_DIR = path.join(ROOT, ".drop-backups");

const green = (s) => `\x1b[32m${s}\x1b[0m`;
const red = (s) => `\x1b[31m${s}\x1b[0m`;
const yellow = (s) => `\x1b[33m${s}\x1b[0m`;
const bold = (s) => `\x1b[1m${s}\x1b[0m`;

const ok = (s) => console.log(`${green("✓")} ${s}`);
const info = (s) => console.log(`  ${s}`);
const warn = (s) => console.log(`${yellow("!")} ${s}`);

function fail(message, advice) {
  console.log(`\n${red("✗ STOPPED — nothing was changed.")}\n`);
  console.log(`  ${message}\n`);
  if (advice) console.log(`  ${advice}\n`);
  console.log("  Copy this whole message into the chat and I'll sort it out.\n");
  process.exit(1);
}

function backup(filePath) {
  fs.mkdirSync(BACKUP_DIR, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const name = path.relative(ROOT, filePath).replace(/[\\/]/g, "_");
  const dest = path.join(BACKUP_DIR, `${name}.${stamp}.bak`);
  fs.copyFileSync(filePath, dest);
  return path.relative(ROOT, dest);
}

console.log(`\n${bold("Applying the drop to your project…")}\n`);

/* ── 1. Did the extraction land in the right place? ───────────────────── */

if (!fs.existsSync(path.join(ROOT, "package.json"))) {
  fail(
    "This doesn't look like your hello-clinica folder — there's no package.json here.",
    "In VS Code use File → Open Folder and choose the hello-clinica folder itself, then try again."
  );
}

const required = ["lib/hero-rotation.ts", "components/sections/Hero.tsx", "components/sections/HeroSlideshow.tsx"];
const missing = required.filter((f) => !fs.existsSync(path.join(ROOT, f)));

if (missing.length) {
  // The classic failure: the zip was extracted into a subfolder.
  const nested = fs
    .readdirSync(ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(ROOT, d.name, "lib", "hero-rotation.ts")))
    .map((d) => d.name);

  if (nested.length) {
    fail(
      `The zip was extracted one level too deep — its files are inside "${nested[0]}" instead of your project.`,
      `Open the "${nested[0]}" folder, select everything inside it, cut it, paste it here (choose Replace), delete the empty "${nested[0]}" folder, then run this command again.`
    );
  }
  fail(
    `These files from the zip aren't here yet:\n     ${missing.join("\n     ")}`,
    "Extract the zip into your hello-clinica folder, choosing Replace when asked, then run this again."
  );
}
ok("Drop files are in the right place.");

/* ── 2. Find the homepage ────────────────────────────────────────────── */

const candidates = [
  "app/page.tsx",
  "src/app/page.tsx",
  "app/(site)/page.tsx",
  "app/(main)/page.tsx",
  "app/(marketing)/page.tsx",
];

let homepage = candidates.map((c) => path.join(ROOT, c)).find((p) => fs.existsSync(p));

// Fall back to searching for whichever page renders <Hero.
if (!homepage) {
  const found = [];
  const walk = (dir, depth = 0) => {
    if (depth > 4) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name === "node_modules" || entry.name.startsWith(".")) continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full, depth + 1);
      else if (entry.name === "page.tsx" && /<Hero[\s/>]/.test(fs.readFileSync(full, "utf8"))) found.push(full);
    }
  };
  const appDir = fs.existsSync(path.join(ROOT, "app")) ? path.join(ROOT, "app") : ROOT;
  walk(appDir);
  if (found.length === 1) homepage = found[0];
  else if (found.length > 1) {
    fail(
      `More than one page renders <Hero>, so I can't tell which is your homepage:\n     ${found
        .map((f) => path.relative(ROOT, f))
        .join("\n     ")}`,
      "Tell me which one is the homepage and I'll target it directly."
    );
  }
}

if (!homepage) {
  fail(
    "I couldn't find your homepage file (the one that renders the <Hero> section).",
    "In VS Code press Ctrl+Shift+F, search for  <Hero  and tell me which file it's in."
  );
}

const rel = path.relative(ROOT, homepage).replace(/\\/g, "/");
ok(`Found your homepage: ${bold(rel)}`);

/* ── 3. Apply the edits ──────────────────────────────────────────────── */

const original = fs.readFileSync(homepage, "utf8");
let source = original;
const done = [];
const skipped = [];

/* 3a. The import line */
const IMPORT_LINE = 'import { heroSlotIndex } from "@/lib/hero-rotation";';

if (source.includes("heroSlotIndex")) {
  skipped.push("import line was already there");
} else {
  const lines = source.split("\n");
  // Insert after the last top-level import, so "use client" and any file
  // comment stay exactly where they are.
  let last = -1;
  for (let i = 0; i < lines.length; i++) {
    if (/^\s*import\s/.test(lines[i])) last = i;
    if (/^\s*(export\s+default|export\s+const|export\s+async)/.test(lines[i])) break;
  }
  if (last === -1) {
    fail(
      `${rel} has no import lines, which is unexpected.`,
      "Paste the file into the chat and I'll write the change for you."
    );
  }
  lines.splice(last + 1, 0, IMPORT_LINE);
  source = lines.join("\n");
  done.push("added the import line");
}

/* 3b. The slotIndex prop on <Hero> */
if (/<Hero[^>]*slotIndex/.test(source)) {
  skipped.push("<Hero> already had slotIndex");
} else {
  const heroTag = /<Hero(\s[^>]*?)?\s*(\/?)>/;
  const match = source.match(heroTag);
  if (!match) {
    fail(
      `I found ${rel} but there's no <Hero> tag in it.`,
      "Press Ctrl+Shift+F in VS Code, search for  <Hero  and tell me which file it's in."
    );
  }
  const existingProps = (match[1] || "").trimEnd();
  const selfClosing = match[2] === "/";
  const replacement = `<Hero slotIndex={heroSlotIndex()}${existingProps ? " " + existingProps.trim() : ""}${
    selfClosing ? " />" : ">"
  }`;
  source = source.replace(heroTag, replacement);
  done.push("added slotIndex={heroSlotIndex()} to <Hero>");
}

/* 3c. Make sure the page isn't frozen at build time.
 *
 * Next.js may pre-render the homepage once and serve that same HTML forever. If
 * it does, the photo is decided at BUILD time and never rotates. Telling Next to
 * regenerate every 600 seconds matches the 10-minute rotation exactly. */
if (/export\s+const\s+(revalidate|dynamic)\s*=/.test(source)) {
  skipped.push("page refresh behaviour was already set — left alone");
} else {
  const lines = source.split("\n");
  let last = -1;
  for (let i = 0; i < lines.length; i++) if (/^\s*import\s/.test(lines[i])) last = i;
  lines.splice(
    last + 1,
    0,
    "",
    "// Regenerate every 10 minutes so the hero photo rotates on the live site.",
    "// Without this Next.js can serve one pre-built copy forever, freezing the photo.",
    "export const revalidate = 600;"
  );
  source = lines.join("\n");
  done.push("set the homepage to refresh every 10 minutes");
}

/* ── 4. Save ─────────────────────────────────────────────────────────── */

if (source === original) {
  console.log(`\n${green("Nothing to do — this drop is already applied.")}`);
  skipped.forEach((s) => info(`· ${s}`));
} else {
  const saved = backup(homepage);
  fs.writeFileSync(homepage, source, "utf8");
  ok(`Edited ${rel}`);
  done.forEach((d) => info(`· ${d}`));
  skipped.forEach((s) => info(`· ${s} (skipped)`));
  info(`Backup of the original: ${saved}`);
}

/* ── 5. What next ────────────────────────────────────────────────────── */

console.log(`\n${bold("Next, run these two commands one at a time:")}\n`);
console.log("    npx tsc --noEmit");
console.log("    npm run dev\n");
console.log("The first should print nothing at all — that means no mistakes.");
console.log("If it prints red text, copy it into the chat and stop there.\n");
