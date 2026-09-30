/**
 * DRY RUN — READ ONLY. Writes NOTHING to the database.
 * Shows exactly what the Phase 1b+2 migration WOULD do so you can approve first.
 * Put in scripts/ and run:  node scripts/dry-run-migration.mjs
 * Writes a full report to Downloads\dry-run-report.txt
 */
import { PrismaClient } from "@prisma/client";
import fs from "node:fs";
const prisma = new PrismaClient();
const out = [];
const log = (...a) => { const line = a.join(" "); console.log(line); out.push(line); };

/* ---- taxonomy keyword matchers (first match wins; order = specificity) ---- */
function nursingSub(title) {
  const t = title.toLowerCase();
  if (/dosage|calc|dimensional|\bmath\b/.test(t)) return "Dosage & Calculations";
  if (/nclex|klimek|uworld|u-world|u world|yellow book|blue book|saunders|lippincott/.test(t)) return "NCLEX & Board Review";
  if (/teas|hesi|kaplan/.test(t)) return "TEAS / HESI Entrance Exams";
  if (/pharm|drug|herbal/.test(t)) return "Pharmacology";
  if (/anatom|physiolog|patho|cranial|renal|micro|a ?& ?p|chemistry|\bbio\b/.test(t)) return "Anatomy, Physiology & Patho";
  if (/med-surg|medical-surgical|brunner|shock|neuro|endocrine|mental health|psych|maternity|\bob\b|pediatric|\bpeds\b|fundamental|clinical|colostomy|vealchop|gas exchange/.test(t)) return "Clinical & Specialties";
  return "Study Skills & Bundles"; // catch-all
}
function studySub(title) {
  const t = title.toLowerCase();
  if (/ortho|fracture|trauma|traction|joint|netter|apley|mcrae/.test(t)) return "Orthopaedics & Trauma";
  if (/atls|acls|life support|critical/.test(t)) return "Emergency & Critical Care";
  if (/surgery|surgical|okell/.test(t)) return "Surgery";
  return "Internal Medicine";
}

log("================ DRY RUN — no data will be changed ================\n");

/* 1) Nursing Resources -> Nursing Books (with sub-section) */
const nursing = await prisma.resource.findMany({ where: { category: "NURSING_RESOURCES" }, select: { title: true, resourceFile: true } });
const nCount = {};
log(`1) NURSING RESOURCES -> NURSING BOOKS  (${nursing.length} items)`);
for (const r of nursing) { const sub = nursingSub(r.title); nCount[sub] = (nCount[sub] || 0) + 1; log(`   • ${r.title.slice(0,55).padEnd(55)} -> ${sub}${r.resourceFile ? "" : "   [NO FILE!]"}`); }
log("   sub-section totals: " + JSON.stringify(nCount) + "\n");

/* 2) Study Resources -> Books "Study Resources" (medical sub-sections) */
const sres = await prisma.resource.findMany({ where: { category: "STUDY_RESOURCES" }, select: { title: true, resourceFile: true } });
log(`2) FREE "STUDY RESOURCES" -> BOOKS  (${sres.length} items) [becomes premium]`);
for (const r of sres) log(`   • ${r.title.slice(0,55).padEnd(55)} -> ${studySub(r.title)}`);
log("");

/* 3) Books "Study Guides" -> Free Resources "Study Guides" */
const sg = await prisma.book.findMany({ where: { category: "STUDY_GUIDES" }, select: { title: true } });
log(`3) BOOKS "STUDY GUIDES" -> FREE RESOURCES  (${sg.length} items) [becomes free]`);
for (const b of sg) log(`   • ${b.title}`);
log("");

/* 4) NCLEX Books -> nested under Nursing Books */
const nclex = await prisma.book.findMany({ where: { category: "NCLEX_BOOKS" }, select: { title: true } });
log(`4) NCLEX BOOKS -> NURSING BOOKS / sub-section "NCLEX & Board Review"  (${nclex.length} items)`);
for (const b of nclex) log(`   • ${b.title}`);
log("");

/* 5) Digital Downloads -> Free Resources */
const dd = await prisma.book.findMany({ where: { category: "DIGITAL_DOWNLOADS" }, select: { title: true } });
log(`5) DIGITAL DOWNLOADS -> FREE RESOURCES, then category removed  (${dd.length} items)`);
for (const b of dd) {
  const dest = /personal statement/i.test(b.title) ? "Personal Statement Guide" : "Medical School Admissions";
  log(`   • ${b.title}  ->  ${dest}`);
}
log("");

/* 6) Recommended -> relocate, then becomes user Bookmarks */
const rec = await prisma.book.findMany({ where: { category: "RECOMMENDED_BOOKS" }, select: { title: true } });
log(`6) RECOMMENDED BOOKS -> relocated (then "Recommended" becomes "Bookmarks")  (${rec.length} items)`);
for (const b of rec) {
  const t = b.title.toLowerCase();
  const dest = /premed|playbook|personal statement/.test(t) ? "Study Guides" :
               /neuro|anatomy/.test(t) ? "Medical School Books / anatomy" :
               /guyton|physiolog/.test(t) ? "Medical School Books / physiology" :
               "Medical School Books / clinical-medicine";
  log(`   • ${b.title.slice(0,50).padEnd(50)} -> ${dest}`);
}

log("\n================ END DRY RUN — nothing was written ================");
fs.writeFileSync(process.env.USERPROFILE + "\\Downloads\\dry-run-report.txt", out.join("\n"));
console.log("\nFull report saved to Downloads\\dry-run-report.txt");
await prisma.$disconnect();
