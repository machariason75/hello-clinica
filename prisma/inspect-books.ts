/**
 * READ-ONLY inspector for (a) the Books section and (b) the Question-bank
 * duplicate audit. It writes a plain-text report to ./books-report.txt and
 * changes NOTHING in the database or the site. Safe to run any time.
 *
 * Run from the project root:  npx tsx prisma/inspect-books.ts
 * Then upload the generated books-report.txt.
 */
import { PrismaClient, Prisma } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";

const ROOT = process.cwd();
const OUT: string[] = [];
const log = (s = "") => OUT.push(s);
const rule = (t: string) => { log(""); log("=".repeat(74)); log(t); log("=".repeat(74)); };
const IGNORE = /node_modules|\.next|\.git|dist|build|coverage|\.turbo/;
const rel = (f: string) => path.relative(ROOT, f).replace(/\\/g, "/");

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

const codeExt = /\.(ts|tsx|js|jsx|mjs|cjs)$/;
const allFiles = walk(ROOT);
const codeFiles = allFiles.filter((f) => codeExt.test(f));

// ---------- SECTION 1: where the error string lives ----------
rule('SECTION 1  —  Where does {"error":"Not available"} come from?');
{
  const needle = "Not available";
  let hits = 0;
  for (const f of codeFiles) {
    let text = "";
    try { text = fs.readFileSync(f, "utf8"); } catch { continue; }
    if (!text.includes(needle)) continue;
    const lines = text.split(/\r?\n/);
    lines.forEach((ln, i) => {
      if (!ln.includes(needle)) return;
      hits++;
      log("");
      log(`FILE: ${rel(f)}  (line ${i + 1})`);
      const from = Math.max(0, i - 10), to = Math.min(lines.length, i + 5);
      for (let j = from; j < to; j++) log(`  ${j === i ? ">>" : "  "} ${j + 1}\t${lines[j]}`);
    });
  }
  if (!hits) log(`No literal "${needle}" found in source — it may be built dynamically or come from a dependency. (Also searching for just "available" would help; tell me if this is blank.)`);
}

// ---------- SECTION 2: book-related source files ----------
rule("SECTION 2  —  Book-related source files (paths)");
const bookFiles = codeFiles.filter((f) => /book/i.test(rel(f)));
if (!bookFiles.length) log("No files with 'book' in their path were found. Books may live under another word (library, resource, ebook, material, document).");
for (const f of bookFiles) log("  " + rel(f));

rule("SECTION 2b  —  Full contents of the book route/handler/upload files");
{
  const routeLike = bookFiles.filter((f) => /(api|route|handler|read|download|stream|file|upload|admin)/i.test(rel(f)));
  const toPrint = (routeLike.length ? routeLike : bookFiles).slice(0, 20);
  for (const f of toPrint) {
    let text = "";
    try { text = fs.readFileSync(f, "utf8"); } catch { continue; }
    const lines = text.split(/\r?\n/);
    log("");
    log(`----- ${rel(f)}  (${lines.length} lines) -----`);
    const cap = 240;
    lines.slice(0, cap).forEach((ln, i) => log(String(i + 1).padStart(4) + "  " + ln));
    if (lines.length > cap) log(`... (${lines.length - cap} more lines truncated)`);
  }
}

// ---------- SECTION 3: schema models ----------
rule("SECTION 3  —  Prisma schema (Book / Quiz / Category / Question / File-like models)");
try {
  const schema = fs.readFileSync(path.join(ROOT, "prisma", "schema.prisma"), "utf8");
  const blocks = schema.match(/(model|enum)\s+\w+\s*\{[\s\S]*?\n\}/g) || [];
  const wanted = /book|ebook|library|quiz|categor|question|file|upload|asset|document|material|resource|storage/i;
  let printed = 0;
  for (const b of blocks) {
    const name = (b.match(/(model|enum)\s+(\w+)/) || [])[2] || "";
    if (wanted.test(name) || wanted.test(b)) { log(""); log(b.trim()); printed++; }
  }
  if (!printed) log("No matching models found; dumping ALL model names:\n" + (blocks.map(b => (b.match(/(model|enum)\s+(\w+)/) || [])[2]).join(", ")));
} catch (e: any) { log("Could not read prisma/schema.prisma: " + e.message); }

// ---------- DB sections ----------
async function main() {
  const prisma = new PrismaClient();
  try {
    const models: string[] = (((Prisma as any)?.dmmf?.datamodel?.models) || []).map((m: any) => m.name);
    rule("SECTION 4  —  All database models discovered at runtime");
    log(models.length ? models.join(", ") : "(none — Prisma.dmmf unavailable in this version)");

    // Section 5: book-like records
    const bookModels = models.filter((n) => /book|ebook|library|material|resource|document/i.test(n));
    rule("SECTION 5  —  Records in book-like tables (fields truncated to 200 chars)");
    if (!bookModels.length) log("No book-like model name matched. Check SECTION 4's list and tell me which one holds books.");
    for (const mName of bookModels) {
      const delegate = mName[0].toLowerCase() + mName.slice(1);
      log(""); log(`### Model: ${mName}`);
      try {
        const rows: any[] = await (prisma as any)[delegate].findMany({ take: 100 });
        log(`records shown: ${rows.length}`);
        rows.forEach((r, idx) => {
          log(`  --- record ${idx + 1} ---`);
          for (const [k, v] of Object.entries(r)) {
            let val = v == null ? "null" : typeof v === "object" ? JSON.stringify(v) : String(v);
            if (val.length > 200) val = val.slice(0, 200) + `…(+${val.length - 200} chars)`;
            log(`    ${k}: ${val}`);
          }
        });
      } catch (e: any) { log("  query failed: " + e.message); }
    }

    // Section 6: quiz duplicate audit
    rule("SECTION 6  —  Question-bank duplicate audit (two 'Set 1'/'Exam 1' in one category)");
    try {
      const cats: any[] = await prisma.quizCategory.findMany({ select: { id: true, slug: true, title: true } });
      const catById: Record<string, any> = {};
      cats.forEach((c) => (catById[c.id] = c));
      const quizzes: any[] = await prisma.quiz.findMany({
        select: { id: true, slug: true, title: true, kind: true, categoryId: true, order: true, published: true },
      });
      const counts: Record<string, number> = {};
      try {
        const grouped: any[] = await (prisma as any).question.groupBy({ by: ["quizId"], _count: { _all: true } });
        grouped.forEach((g) => (counts[g.quizId] = g._count._all));
      } catch { /* counts stay unknown */ }

      const numOf = (q: any): string => {
        let m = /(?:practice-set|exam|set|paper|test)-(\d+)/i.exec(q.slug || "");
        if (m) return m[1];
        m = /(?:set|exam|paper|test)\s*#?\s*(\d+)/i.exec(q.title || "");
        if (m) return m[1];
        return q.order != null ? "order:" + q.order : "?";
      };

      const groups: Record<string, any[]> = {};
      for (const q of quizzes) {
        const key = `${q.categoryId}|${q.kind}|${numOf(q)}`;
        (groups[key] = groups[key] || []).push(q);
      }
      let dupCount = 0;
      for (const [key, arr] of Object.entries(groups)) {
        if (arr.length < 2) continue;
        dupCount++;
        const [catId, kind, num] = key.split("|");
        const cat = catById[catId];
        log("");
        log(`DUPLICATE — category "${cat ? cat.title : catId}" [${cat ? cat.slug : "?"}], ${kind}, number ${num}:`);
        arr.forEach((q) => log(`   • id=${q.id}  q=${counts[q.id] ?? "?"}  slug=${q.slug}  title="${q.title}"  order=${q.order}  published=${q.published}`));
      }
      if (!dupCount) log("No same-number duplicates detected by slug/title/order. If you still see doubles on the site, naming differs — the full list below will show it.");

      rule("SECTION 6b  —  EVERY quiz grouped by category (so nothing is hidden)");
      const byCat: Record<string, any[]> = {};
      quizzes.forEach((q) => (byCat[q.categoryId] = byCat[q.categoryId] || []).push(q));
      const catOrder = Object.keys(byCat).sort((a, b) => ((catById[a]?.slug || "") < (catById[b]?.slug || "") ? -1 : 1));
      for (const catId of catOrder) {
        const arr = byCat[catId];
        const cat = catById[catId];
        log("");
        log(`CATEGORY: ${cat ? cat.title : "(unknown)"}  [${cat ? cat.slug : catId}] — ${arr.length} quizzes`);
        arr.sort((a, b) => (a.kind === b.kind ? (a.order ?? 0) - (b.order ?? 0) : String(a.kind).localeCompare(String(b.kind))));
        arr.forEach((q) => log(`   ${q.kind}  #${numOf(q)}  q=${counts[q.id] ?? "?"}  ${q.slug}  (id ${q.id}, pub ${q.published})`));
      }
    } catch (e: any) { log("Quiz audit failed: " + e.message); }
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((e) => log("FATAL: " + (e?.stack || e)))
  .finally(() => {
    const outPath = path.join(ROOT, "books-report.txt");
    fs.writeFileSync(outPath, OUT.join("\n"), "utf8");
    console.log("Wrote " + outPath + " (" + OUT.length + " lines). Please upload books-report.txt.");
  });
