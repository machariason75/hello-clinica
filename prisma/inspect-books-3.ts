/**
 * READ-ONLY. Gathers exactly what's needed to (a) build the download-proof
 * reader and (b) plan the discipline-category migration. Writes
 * ./books-report-3.txt. Changes nothing.
 */
import * as fs from "fs";
import * as path from "path";

const ROOT = process.cwd();
const OUT: string[] = [];
const log = (s = "") => OUT.push(s);
const rule = (t: string) => { log(""); log("=".repeat(78)); log(t); log("=".repeat(78)); };
const rel = (f: string) => path.relative(ROOT, f).replace(/\\/g, "/");
const IGNORE = /node_modules|\.next|\.git|dist|build|coverage|\.turbo/;

function walk(dir: string, acc: string[] = []): string[] {
  let entries: fs.Dirent[] = [];
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return acc; }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (IGNORE.test(full)) continue;
    if (e.isDirectory()) walk(full, acc);
    else acc.push(full);
  }
  return acc;
}
function dumpFile(relPath: string, cap = 400) {
  const full = path.join(ROOT, relPath);
  log(""); log("-".repeat(78)); log("FILE: " + relPath); log("-".repeat(78));
  try {
    const lines = fs.readFileSync(full, "utf8").split(/\r?\n/);
    lines.slice(0, cap).forEach((l, i) => log(String(i + 1).padStart(4) + "  " + l));
    if (lines.length > cap) log(`... (${lines.length - cap} more lines truncated)`);
  } catch (e: any) { log("(not found: " + e.message + ")"); }
}

const allFiles = walk(ROOT);
const codeExt = /\.(ts|tsx|js|jsx|mjs|cjs)$/;
const codeFiles = allFiles.filter((f) => codeExt.test(f));

// 1) Known files we need in full
rule("SECTION 1 — Reader / download / config files (full contents)");
["components/common/DownloadButton.tsx",
 "app/api/download/route.ts",
 "next.config.ts", "next.config.js", "next.config.mjs",
].forEach((f) => dumpFile(f));

// 2) Find any existing PDF viewer / reader component by content
rule("SECTION 2 — Files that look like a PDF reader/viewer (by content)");
const pdfRe = /pdfjs|pdfjs-dist|react-pdf|pdf\.worker|GlobalWorkerOptions|getDocument|<Document\b|PdfViewer|pdf-viewer|renderPage|canvas\.getContext|useReader|ReaderShell|\/api\/read-file/i;
const viewerFiles: string[] = [];
for (const f of codeFiles) {
  let t = ""; try { t = fs.readFileSync(f, "utf8"); } catch { continue; }
  if (pdfRe.test(t)) viewerFiles.push(f);
}
if (!viewerFiles.length) log("No PDF-viewer-looking files found (reading may just open /api/read-file directly).");
for (const f of viewerFiles) {
  const first = fs.readFileSync(f, "utf8").split(/\r?\n/).findIndex((l) => pdfRe.test(l)) + 1;
  log("  " + rel(f) + "   (first match ~line " + first + ")");
}
// Print the full contents of the most likely viewer files (path hints)
rule("SECTION 2b — Full contents of likely reader/viewer files");
const likely = viewerFiles.filter((f) => /read|reader|viewer|pdf/i.test(rel(f))).slice(0, 6);
for (const f of likely) dumpFile(rel(f));
if (!likely.length) log("(none matched a read/reader/viewer/pdf path — the list in Section 2 is what to go on)");

// 3) package.json — deps + scripts (is a PDF lib installed? migrate vs db push?)
rule("SECTION 3 — package.json (dependencies + scripts)");
try {
  const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, "package.json"), "utf8"));
  log("dependencies:"); log(JSON.stringify(pkg.dependencies ?? {}, null, 2));
  log(""); log("devDependencies:"); log(JSON.stringify(pkg.devDependencies ?? {}, null, 2));
  log(""); log("scripts:"); log(JSON.stringify(pkg.scripts ?? {}, null, 2));
} catch (e: any) { log("Could not read package.json: " + e.message); }

// 4) Prisma migration setup (decides how the discipline column is added)
rule("SECTION 4 — Prisma migration setup");
const migDir = path.join(ROOT, "prisma", "migrations");
try {
  const subs = fs.readdirSync(migDir, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);
  log(`prisma/migrations exists with ${subs.length} migration folder(s):`);
  subs.slice(-15).forEach((s) => log("  " + s));
  log("→ This project uses Prisma MIGRATIONS (we'll ship a migration file).");
} catch {
  log("No prisma/migrations folder found.");
  log("→ This project likely uses `prisma db push` (schema synced directly; no migration files).");
}

const outPath = path.join(ROOT, "books-report-3.txt");
fs.writeFileSync(outPath, OUT.join("\n"), "utf8");
console.log("Wrote " + outPath + ". Please upload books-report-3.txt.");
