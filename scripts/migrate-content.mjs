/**
 * CONTENT MIGRATION — matches the approved dry-run.
 * SAFE: idempotent (skips items already migrated) and REVERSIBLE (source items are
 * ARCHIVED, never deleted). Runs in preview mode unless you pass "commit".
 *
 *   Preview (no writes):  node scripts/migrate-content.mjs
 *   Apply:                node scripts/migrate-content.mjs commit
 *   Reverse: set archived=false on the sources and delete the created rows (ask me for a rollback script).
 */
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const COMMIT = process.argv.includes("commit");
const AUTHOR = "Hello Clinica";
let created = 0, retagged = 0, archived = 0, skipped = 0;

function nursingSlug(t){t=t.toLowerCase();
  if(/dosage|calc|dimensional|\bmath\b/.test(t))return"dosage-calculations";
  if(/nclex|klimek|uworld|u-world|u world|yellow book|blue book|saunders|lippincott/.test(t))return"nclex-board-review";
  if(/teas|hesi|kaplan/.test(t))return"teas-hesi";
  if(/pharm|drug|herbal/.test(t))return"pharmacology";
  if(/anatom|physiolog|patho|cranial|renal|micro|a ?& ?p|chemistry|\bbio\b/.test(t))return"anatomy-physiology";
  if(/med-surg|medical-surgical|brunner|shock|neuro|endocrine|mental health|psych|maternity|\bob\b|pediatric|\bpeds\b|fundamental|clinical|colostomy|vealchop|gas exchange/.test(t))return"clinical-specialties";
  return"study-skills";}
function studySlug(t){t=t.toLowerCase();
  if(/ortho|fracture|trauma|traction|joint|netter|apley|mcrae/.test(t))return"orthopaedics-trauma";
  if(/atls|acls|life support|critical/.test(t))return"emergency-critical-care";
  if(/surgery|surgical|okell/.test(t))return"surgery";
  return"internal-medicine";}

async function bookExists(title, category){ return !!(await prisma.book.findFirst({ where:{ title, category } })); }
async function resourceExists(title, category){ return !!(await prisma.resource.findFirst({ where:{ title, category } })); }

async function createBook(d){ if(await bookExists(d.title,d.category)){skipped++;return;} created++;
  if(COMMIT) await prisma.book.create({ data:d }); }
async function createResource(d){ if(await resourceExists(d.title,d.category)){skipped++;return;} created++;
  if(COMMIT) await prisma.resource.create({ data:d }); }
async function archiveResource(id){ archived++; if(COMMIT) await prisma.resource.update({ where:{id}, data:{ archived:true, published:false } }); }
async function archiveBook(id){ archived++; if(COMMIT) await prisma.book.update({ where:{id}, data:{ archived:true, published:false } }); }
async function retagBook(id, data){ retagged++; if(COMMIT) await prisma.book.update({ where:{id}, data }); }

console.log(COMMIT ? ">>> COMMIT MODE — writing changes <<<\n" : ">>> PREVIEW (no writes). Pass 'commit' to apply. <<<\n");

// 1) Nursing Resources -> Nursing Books (+ discipline), archive source
for (const r of await prisma.resource.findMany({ where:{ category:"NURSING_RESOURCES", archived:false } })) {
  await createBook({ title:r.title, author:AUTHOR, description:r.description||r.title, category:"NURSING_BOOKS", discipline:nursingSlug(r.title), coverImage:r.thumbnail??null, fileUrl:r.resourceFile??null, published:r.published });
  await archiveResource(r.id);
}
// 2) Free Study Resources -> Books (category STUDY_GUIDES, relabeled "Study Resources" in config), archive source
for (const r of await prisma.resource.findMany({ where:{ category:"STUDY_RESOURCES", archived:false } })) {
  await createBook({ title:r.title, author:AUTHOR, description:r.description||r.title, category:"STUDY_GUIDES", discipline:studySlug(r.title), coverImage:r.thumbnail??null, fileUrl:r.resourceFile??null, published:r.published });
  await archiveResource(r.id);
}
// 3) Books Study Guides -> Free Resources (category STUDY_RESOURCES, relabeled "Study Guides" in config), archive source
for (const b of await prisma.book.findMany({ where:{ category:"STUDY_GUIDES", archived:false, discipline:null } })) {
  await createResource({ title:b.title, description:b.description||b.title, category:"STUDY_RESOURCES", thumbnail:b.coverImage??null, resourceFile:b.fileUrl??null, published:b.published });
  await archiveBook(b.id);
}
// 4) NCLEX Books -> Nursing Books / nclex-board-review (retag in place)
for (const b of await prisma.book.findMany({ where:{ category:"NCLEX_BOOKS", archived:false } })) {
  await retagBook(b.id, { category:"NURSING_BOOKS", discipline:"nclex-board-review" });
}
// 5) Digital Downloads -> Free Resources, archive source
for (const b of await prisma.book.findMany({ where:{ category:"DIGITAL_DOWNLOADS", archived:false } })) {
  const cat = /personal statement/i.test(b.title) ? "PERSONAL_STATEMENT_GUIDE" : "MEDICAL_SCHOOL_ADMISSIONS";
  await createResource({ title:b.title, description:b.description||b.title, category:cat, thumbnail:b.coverImage??null, resourceFile:b.fileUrl??null, published:b.published });
  await archiveBook(b.id);
}
// 6) Recommended -> relocate (retag in place)
for (const b of await prisma.book.findMany({ where:{ category:"RECOMMENDED_BOOKS", archived:false } })) {
  const t=b.title.toLowerCase();
  if(/premed|playbook|personal statement/.test(t)) await retagBook(b.id,{ category:"STUDY_GUIDES", discipline:null });
  else if(/neuro|anatomy/.test(t)) await retagBook(b.id,{ category:"MEDICAL_SCHOOL_BOOKS", discipline:"anatomy" });
  else if(/guyton|physiolog/.test(t)) await retagBook(b.id,{ category:"MEDICAL_SCHOOL_BOOKS", discipline:"physiology" });
  else await retagBook(b.id,{ category:"MEDICAL_SCHOOL_BOOKS", discipline:"clinical-medicine" });
}

console.log(`\nCreated: ${created}  Retagged: ${retagged}  Archived (sources): ${archived}  Skipped (already done): ${skipped}`);
console.log(COMMIT ? "\nDone. Sources are ARCHIVED (reversible), not deleted." : "\nPreview only — re-run with 'commit' to apply.");
await prisma.$disconnect();
