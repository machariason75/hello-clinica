/**
 * READ-ONLINE AUDIT — checks that every book and resource opens in the
 * in-browser reader instead of downloading.
 *
 *   npx tsx scripts/audit-reader-files.ts
 *   npx tsx scripts/audit-reader-files.ts --live https://your-site.com
 *
 * Three checks:
 *  1. CODE   — scans app/ and components/ for any link that points straight at a
 *              stored file, or uses the `download` attribute, instead of /read/….
 *  2. FILES  — for every book/resource in the database, reads the start of the
 *              stored file, works out its real type, and says which in-app viewer
 *              will show it. Anything with no viewer is flagged.
 *  3. LIVE   — (with --live) requests each item's /read page and /api/read-file
 *              on the deployed site and confirms the file is served "inline" with
 *              a type the reader can display — never as a download.
 *
 * Writes a full report to reader-audit.csv. Read-only: changes nothing.
 */

import { PrismaClient } from "@prisma/client";
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";
import { detectFileKind, readHead, classify, type DocKind } from "../lib/reader/file-kind";

const prisma = new PrismaClient();
const liveIdx = process.argv.indexOf("--live");
const LIVE = liveIdx > -1 ? (process.argv[liveIdx + 1] || "").replace(/\/+$/, "") : "";

const VIEWER: Record<DocKind, string> = {
  pdf: "PDF reader (in-app)",
  image: "Image view (in-app)",
  audio: "Audio player (in-app)",
  video: "Video player (in-app)",
  excel: "Spreadsheet view (in-app)",
  word: "Word view (in-app)",
  powerpoint: "Online document viewer (embedded)",
  "office-legacy": "Online document viewer (embedded)",
  epub: "EPUB reader (in-app)",
  text: "Text view (in-app)",
  other: "NONE",
};

type Row = {
  type: "book" | "resource";
  id: string;
  title: string;
  published: boolean;
  status: string;
  kind: DocKind | "";
  reportedType: string;
  viewer: string;
  live: string;
  verdict: "OK" | "PROBLEM" | "NO FILE";
  note: string;
};

// ── 1. CODE ────────────────────────────────────────────────────────────────
function walk(dir: string, out: string[] = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(tsx|ts|jsx|js)$/.test(name) && !name.includes(".backup")) out.push(p);
  }
  return out;
}

function codeCheck() {
  const root = process.cwd();
  const files = [...walk(join(root, "app")), ...walk(join(root, "components"))];
  const hits: string[] = [];
  const patterns: [RegExp, string][] = [
    [/href=\{[^}]*\b(resourceFile|fileUrl)\b[^}]*\}/, "link points at the raw stored file"],
    [/href=["'`][^"'`]*(utfs\.io|ufs\.sh)/, "link points at UploadThing storage"],
    [/<a\b[^>]*\sdownload(\s|=|>)/, "<a download> forces a download"],
    [/href=\{?[`"']\/api\/read-file/, "link opens the raw file proxy (downloads non-PDF files)"],
  ];
  for (const f of files) {
    const rel = relative(root, f).replace(/\\/g, "/");
    // Chat attachments are intentionally downloadable; the admin upload field previews uploads.
    if (/EngagementView|EngagementsAdmin|admin\/ui\/UploadField|api\/read-file/.test(rel)) continue;
    const lines = readFileSync(f, "utf8").split("\n");
    lines.forEach((line, i) => {
      for (const [re, why] of patterns) if (re.test(line)) hits.push(`  ${rel}:${i + 1}  — ${why}`);
    });
  }
  return hits;
}

// ── 3. LIVE ────────────────────────────────────────────────────────────────
async function liveCheck(type: string, id: string): Promise<{ ok: boolean; note: string }> {
  try {
    const page = await fetch(`${LIVE}/read/${type}/${id}`, { redirect: "manual" });
    if (page.status >= 400) return { ok: false, note: `/read page returned ${page.status}` };
    const res = await fetch(`${LIVE}/api/read-file?type=${type}&id=${encodeURIComponent(id)}`);
    const ct = (res.headers.get("content-type") || "").toLowerCase();
    const cd = (res.headers.get("content-disposition") || "").toLowerCase();
    const head = await readHead(res, 16384);
    if (!res.ok) return { ok: false, note: `file proxy returned ${res.status}` };
    if (cd.startsWith("attachment")) return { ok: false, note: "served as attachment (downloads)" };
    const { kind } = classify(head, ct, "");
    const servedGeneric = /octet-stream/.test(ct) && kind !== "office-legacy";
    if (servedGeneric) return { ok: false, note: `served as ${ct} — browser downloads it (deploy the read-file fix)` };
    return { ok: true, note: `inline, ${ct || "no type"}` };
  } catch (e) {
    return { ok: false, note: `could not reach site: ${(e as Error).message}` };
  }
}

async function pool<T, R>(items: T[], n: number, fn: (t: T, i: number) => Promise<R>) {
  const out: R[] = new Array(items.length);
  let next = 0;
  await Promise.all(
    Array.from({ length: n }, async () => {
      while (next < items.length) {
        const i = next++;
        out[i] = await fn(items[i], i);
        process.stdout.write(`\r  checked ${i + 1}/${items.length}   `);
      }
    })
  );
  process.stdout.write("\n");
  return out;
}

async function main() {
  console.log("\n━━ 1. CODE: links that bypass the reader ━━━━━━━━━━━━━━━━━━━━━━━");
  const hits = codeCheck();
  console.log(hits.length ? hits.join("\n") : "  ✓ None. Every read button goes to /read/<type>/<id>.");

  console.log("\n━━ 2. FILES: can every stored file be shown in the reader? ━━━━━━━");
  const [books, resources] = await Promise.all([
    prisma.book.findMany({ select: { id: true, title: true, fileUrl: true, published: true } }),
    prisma.resource.findMany({ select: { id: true, title: true, resourceFile: true, published: true } }),
  ]);
  const items = [
    ...books.map((b) => ({ type: "book" as const, id: b.id, title: b.title, url: b.fileUrl, published: b.published })),
    ...resources.map((r) => ({ type: "resource" as const, id: r.id, title: r.title, url: r.resourceFile, published: r.published })),
  ];
  console.log(`  ${books.length} books, ${resources.length} resources`);

  const rows = await pool(items, 6, async (it): Promise<Row> => {
    const base = { type: it.type, id: it.id, title: it.title, published: it.published, live: "" };
    if (!it.url) return { ...base, status: "", kind: "", reportedType: "", viewer: "", verdict: "NO FILE", note: "no file uploaded" };
    const d = await detectFileKind(it.url);
    let verdict: Row["verdict"] = "OK";
    let note = "";
    if (d.status === 0 || d.status >= 400) { verdict = "PROBLEM"; note = `file unreachable (HTTP ${d.status || "error"})`; }
    else if (d.kind === "other") { verdict = "PROBLEM"; note = "unknown format — no viewer; re-upload as PDF"; }
    const row: Row = { ...base, status: String(d.status), kind: d.kind, reportedType: d.reportedType, viewer: VIEWER[d.kind], verdict, note };
    if (LIVE && it.published && verdict === "OK") {
      const l = await liveCheck(it.type, it.id);
      row.live = l.ok ? "OK" : "FAIL";
      if (!l.ok) { row.verdict = "PROBLEM"; row.note = l.note; } else row.note = l.note;
    }
    return row;
  });

  // Summary
  const byKind = new Map<string, number>();
  for (const r of rows) if (r.kind) byKind.set(r.kind, (byKind.get(r.kind) ?? 0) + 1);
  console.log("\n  File types found:");
  for (const [k, n] of [...byKind].sort((a, b) => b[1] - a[1])) console.log(`    ${k.padEnd(14)} ${String(n).padStart(4)}  → ${VIEWER[k as DocKind]}`);

  const problems = rows.filter((r) => r.verdict === "PROBLEM");
  const missing = rows.filter((r) => r.verdict === "NO FILE");
  if (LIVE) console.log(`\n━━ 3. LIVE: checked against ${LIVE} ━━━━━━━━━━━━━━━━━━━━━━━━━━`);

  console.log(`\n━━ RESULT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`  ✓ open in the reader : ${rows.filter((r) => r.verdict === "OK").length}`);
  console.log(`  ✗ problems           : ${problems.length}`);
  console.log(`  – no file uploaded   : ${missing.length}`);
  if (problems.length) {
    console.log("\n  Problems:");
    for (const r of problems) console.log(`    [${r.type}] ${r.title}${r.published ? "" : " (unpublished)"}\n        ${r.note}\n        /read/${r.type}/${r.id}`);
  }

  const esc = (v: unknown) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  const csv = [
    "type,title,published,verdict,kind,viewer,reported_type,http,live,note,reader_url",
    ...rows.map((r) => [r.type, r.title, r.published, r.verdict, r.kind, r.viewer, r.reportedType, r.status, r.live, r.note, `/read/${r.type}/${r.id}`].map(esc).join(",")),
  ].join("\n");
  writeFileSync("reader-audit.csv", csv);
  console.log("\n  Full report → reader-audit.csv\n");

  if (hits.length || problems.length) process.exitCode = 1;
}

main()
  .catch((e) => { console.error(e); process.exitCode = 1; })
  .finally(() => prisma.$disconnect());
