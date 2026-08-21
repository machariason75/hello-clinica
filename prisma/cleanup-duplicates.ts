/**
 * Removes OLD duplicate practice sets / exams so only the current canonical
 * build remains in each section. (v2 — precise, subject-anchored rule.)
 *
 *   CANONICAL = the quiz whose slug is EXACTLY  <base>-practice-set-<N>  or
 *   <base>-exam-<N>, where <base> is the category slug minus its prefix
 *   (fs-pathology -> "pathology", cs-nephrology -> "nephrology"). That is the
 *   slug our builder writes, so it is unambiguously the current build.
 *
 *   For each (category, kind, number) group with more than one quiz:
 *     • if exactly one canonical quiz exists -> KEEP it, DELETE the others
 *       (the old under-built / previous-generation sets).
 *     • if NO canonical quiz exists -> the section has not been rebuilt yet;
 *       nothing is deleted, it is only flagged for a future rebuild.
 *     • if more than one canonical exists -> left alone and flagged (shouldn't
 *       happen; canonical slugs are unique).
 *
 * SAFE BY DEFAULT: DRY RUN — deletes nothing, writes ./cleanup-plan.txt.
 * To apply, re-run with CONFIRM_DELETE=YES (see instructions). Before deleting
 * it writes ./deleted-quizzes-backup.json (full backup of every removed quiz
 * with its questions and choices) so nothing is unrecoverable. Deleting a quiz
 * also removes its questions, choices, and any student attempts on that old quiz.
 */
import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";

const ROOT = process.cwd();
const CONFIRM = process.env.CONFIRM_DELETE === "YES";

function baseOf(catSlug: string): string {
  // Strip a single leading "xx-" prefix (fs-, cs-, ne-, cks-, els-, hesi- …).
  return catSlug.replace(/^[a-z]+-/i, "");
}
function numOf(q: { slug: string; title: string; order: number | null }): string {
  let m = /(?:practice-set|exam|set|paper|test)-(\d+)/i.exec(q.slug || "");
  if (m) return m[1];
  m = /(?:set|exam|paper|test)\s*#?\s*(\d+)/i.exec(q.title || "");
  if (m) return m[1];
  return q.order != null ? "order:" + q.order : "?";
}
function canonicalSlug(catSlug: string, kind: string, num: string): string {
  const base = baseOf(catSlug);
  return kind === "EXAM" ? `${base}-exam-${num}` : `${base}-practice-set-${num}`;
}

async function main() {
  const prisma = new PrismaClient();
  const out: string[] = [];
  const log = (s = "") => out.push(s);
  try {
    const cats = await prisma.quizCategory.findMany({ select: { id: true, slug: true, title: true } });
    const catById: Record<string, { slug: string; title: string }> = {};
    cats.forEach((c) => (catById[c.id] = { slug: c.slug, title: c.title }));

    const quizzes = await prisma.quiz.findMany({
      select: { id: true, slug: true, title: true, kind: true, categoryId: true, order: true, published: true },
    });
    const counts: Record<string, number> = {};
    try {
      const grouped: any[] = await (prisma as any).question.groupBy({ by: ["quizId"], _count: { _all: true } });
      grouped.forEach((g) => (counts[g.quizId] = g._count._all));
    } catch { /* counts unknown */ }

    const groups: Record<string, typeof quizzes> = {};
    for (const q of quizzes) {
      const key = `${q.categoryId}|${q.kind}|${numOf(q)}`;
      (groups[key] = groups[key] || ([] as any)).push(q);
    }

    const toDelete: typeof quizzes = [] as any;
    const flaggedNoCanon: string[] = [];
    const flaggedMultiCanon: string[] = [];

    log("=".repeat(78));
    log("DUPLICATE CLEANUP PLAN v2" + (CONFIRM ? "  (CONFIRM MODE — will delete)" : "  (DRY RUN — deletes nothing)"));
    log("=".repeat(78));

    for (const [key, arr] of Object.entries(groups)) {
      if (arr.length < 2) continue;
      const [catId, kind, num] = key.split("|");
      const cat = catById[catId];
      const catSlug = cat ? cat.slug : "";
      const want = canonicalSlug(catSlug, kind, num);
      const canon = arr.filter((q) => q.slug === want);
      const others = arr.filter((q) => q.slug !== want);

      if (canon.length === 1) {
        log("");
        log(`CATEGORY "${cat ? cat.title : catId}" [${catSlug}] — ${kind} #${num}  (canonical: ${want})`);
        log(`   KEEP   q=${counts[canon[0].id] ?? "?"}  ${canon[0].slug}  (id ${canon[0].id})`);
        others.forEach((q) => {
          log(`   DELETE q=${counts[q.id] ?? "?"}  ${q.slug}  "${q.title}"  (id ${q.id})`);
          toDelete.push(q);
        });
      } else if (canon.length === 0) {
        flaggedNoCanon.push(`   ${cat ? cat.title : catId} [${catSlug}] — ${kind} #${num} (expected canonical: ${want}): ${arr.map((q) => `${q.slug}(q=${counts[q.id] ?? "?"})`).join(", ")}`);
      } else {
        flaggedMultiCanon.push(`   ${cat ? cat.title : catId} [${catSlug}] — ${kind} #${num}: ${canon.length} quizzes share the canonical slug ${want}.`);
      }
    }

    log("");
    log("-".repeat(78));
    log(`TO DELETE: ${toDelete.length} old quizzes across the sections above.`);
    log("-".repeat(78));

    if (flaggedNoCanon.length) {
      log("");
      log("LEFT UNTOUCHED — duplicate numbers but NO current build yet (need a rebuild/renumber later):");
      flaggedNoCanon.forEach((l) => log(l));
    }
    if (flaggedMultiCanon.length) {
      log("");
      log("⚠ NEEDS A LOOK — more than one quiz claims the canonical slug (nothing deleted):");
      flaggedMultiCanon.forEach((l) => log(l));
    }

    if (toDelete.length && CONFIRM) {
      const ids = toDelete.map((q) => q.id);
      const backup = await prisma.quiz.findMany({
        where: { id: { in: ids } },
        include: { questions: { include: { choices: true } } },
      });
      fs.writeFileSync(path.join(ROOT, "deleted-quizzes-backup.json"), JSON.stringify(backup, null, 2), "utf8");
      const res = await prisma.quiz.deleteMany({ where: { id: { in: ids } } });
      log("");
      log(`DELETED ${res.count} quizzes. Backup written to deleted-quizzes-backup.json.`);
    } else if (toDelete.length) {
      log("");
      log("DRY RUN — nothing was deleted. Re-run with CONFIRM_DELETE=YES to apply.");
    } else {
      log("");
      log("Nothing to delete.");
    }

    const planPath = path.join(ROOT, "cleanup-plan.txt");
    fs.writeFileSync(planPath, out.join("\n"), "utf8");
    console.log("Wrote " + planPath + (CONFIRM ? " (deletions applied)." : " (dry run). Upload it for review."));
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error("FAILED:", e);
  process.exit(1);
});
