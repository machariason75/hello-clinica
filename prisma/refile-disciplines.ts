/**
 * Auto-files existing "Medical School Books" into disciplines by matching
 * keywords in each title/author. Books in other categories are left alone.
 *
 * SAFE BY DEFAULT: DRY RUN — writes ./discipline-plan.txt and changes nothing.
 * Review it, then apply with:  CONFIRM_DISCIPLINE=YES npx tsx prisma/refile-disciplines.ts
 *
 * By default it only fills in books that don't yet have a discipline. Add
 * FORCE=YES to also re-file books that already have one. You can always change
 * any book's discipline later from the admin panel.
 */
import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";

const CONFIRM = process.env.CONFIRM_DISCIPLINE === "YES";
const FORCE = process.env.FORCE === "YES";

// First match wins. Patterns favour discipline words and well-known texts;
// anything unmatched becomes "reference-other" for you to adjust.
const RULES: Array<[RegExp, string]> = [
  [/anatomy|anatomic|netter|gray'?s|histolog|embryolog|dissect/i, "anatomy"],
  [/physiolog|guyton|ganong|berne\s*&?\s*levy|vander/i, "physiology"],
  [/biochem|metabolism|molecular biolog|harper|lehninger|lippincott.*biochem/i, "biochemistry"],
  [/pharmacolog|pharmac|katzung|rang\s*&?\s*dale|goodman\s*&?\s*gilman|lippincott.*pharm/i, "pharmacology"],
  [/patholog|robbins|pathophysiolog|mechanisms? of disease|neoplas/i, "pathology"],
  [/microbiolog|microb|immunolog|infectious|sherris|jawetz|levinson|virolog|bacteriolog/i, "microbiology-immunology"],
  [/behavior|behaviour|psychiatr|psycholog|ethics|sociolog/i, "behavioral-science"],
  [/clinical medicine|internal medicine|harrison|davidson|kumar\s*&?\s*clark|cecil|physical exam|diagnosis|history taking|macleod/i, "clinical-medicine"],
];

function classify(title: string, author: string): string {
  const hay = `${title} ${author}`;
  for (const [re, slug] of RULES) if (re.test(hay)) return slug;
  return "reference-other";
}

async function main() {
  const prisma = new PrismaClient();
  const out: string[] = [];
  const log = (s = "") => out.push(s);
  try {
    const books = await prisma.book.findMany({
      where: { category: "MEDICAL_SCHOOL_BOOKS" as any },
      select: { id: true, title: true, author: true, discipline: true } as any,
      orderBy: { title: "asc" },
    }) as Array<{ id: string; title: string; author: string; discipline: string | null }>;

    log("=".repeat(78));
    log("DISCIPLINE AUTO-FILE PLAN" + (CONFIRM ? "  (CONFIRM — will write)" : "  (DRY RUN — no changes)") + (FORCE ? "  [FORCE: re-file all]" : ""));
    log("=".repeat(78));
    log(`Medical School Books found: ${books.length}`);
    log("");

    const updates: Array<{ id: string; to: string }> = [];
    const byDisc: Record<string, number> = {};

    for (const b of books) {
      const already = b.discipline ?? null;
      const target = classify(b.title, b.author ?? "");
      const willSet = FORCE ? target : already ?? target;
      byDisc[willSet] = (byDisc[willSet] || 0) + 1;
      const change = already !== willSet;
      if (change) updates.push({ id: b.id, to: willSet });
      log(`${change ? "SET " : "keep"}  [${(willSet).padEnd(24)}]  ${b.title}${already ? `   (was: ${already})` : ""}`);
    }

    log("");
    log("-".repeat(78));
    log("Tally by discipline:");
    Object.entries(byDisc).sort().forEach(([k, v]) => log(`   ${k.padEnd(26)} ${v}`));
    log("-".repeat(78));
    log(`${updates.length} book(s) would be updated.`);

    if (updates.length && CONFIRM) {
      let n = 0;
      for (const u of updates) {
        await prisma.book.update({ where: { id: u.id }, data: { discipline: u.to } as any });
        n++;
      }
      log("");
      log(`APPLIED — updated ${n} book(s).`);
    } else if (updates.length) {
      log("");
      log("DRY RUN — nothing written. Re-run with CONFIRM_DISCIPLINE=YES to apply.");
    } else {
      log("");
      log("Nothing to update.");
    }

    const outPath = path.join(process.cwd(), "discipline-plan.txt");
    fs.writeFileSync(outPath, out.join("\n"), "utf8");
    console.log("Wrote " + outPath + (CONFIRM ? " (applied)." : " (dry run) — upload it to review."));
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => { console.error("FAILED:", e); process.exit(1); });
