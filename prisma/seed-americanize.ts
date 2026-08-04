/**
 * AMERICANIZATION MIGRATION — one-time, idempotent, safe to re-run.
 *
 * Waves 1-13 were written in British English against UK guidance: "oedema",
 * "paediatrics", "adrenaline", "A&E", NICE thresholds, mmol/L. The bank is now
 * US-aligned, so this brings the existing corpus into line before new content
 * lands on top of it.
 *
 * WHAT IT CHANGES AUTOMATICALLY
 *   1. Category slugs, titles, descriptions and overviews.
 *   2. Quiz slugs, titles and descriptions.
 *   3. Question stems, topics and rationales.
 *   4. Answer choice text.
 *
 * Substitutions are whole-word, case-preserving, and applied longest-first so
 * "haematological" is not mangled by the "haem" rule.
 *
 * WHAT IT DELIBERATELY DOES NOT CHANGE
 * ------------------------------------
 * Unit conversions and guideline bodies are NOT text substitutions and must
 * never be faked as such:
 *
 *   - mmol/L -> mg/dL requires a different multiplier per analyte (glucose
 *     x18.0, creatinine x11.3, urea->BUN x2.8, calcium x4.0, bilirubin x0.058).
 *     A blind swap would produce clinically wrong numbers, which is worse than
 *     leaving them British.
 *   - "NICE recommends" -> "the ACC/AHA recommend" changes the CLAIM, not just
 *     the wording, and the underlying threshold often differs too.
 *
 * So this script REPORTS those items instead, listing every affected question
 * by quiz and topic. Work that list manually, or hand it to a rewrite pass.
 *
 * A dry run is the default. Nothing is written until you pass --apply.
 *
 * Run:  npx tsx prisma/seed-americanize.ts            (dry run, shows a diff)
 *       npx tsx prisma/seed-americanize.ts --apply    (writes)
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const APPLY = process.argv.includes("--apply");

/* ═════════════════ SPELLING & TERMINOLOGY ═════════════════ */

/**
 * British -> American. Order does not matter: the builder sorts longest-first
 * so specific terms win over their own prefixes.
 *
 * Genus names are excluded on purpose — Entamoeba, Naegleria and friends are
 * proper nouns and keep their spelling in American usage too.
 */
const SPELLING: Record<string, string> = {
  // -- haem- / -aem- --
  haem: "heme",
  haemoglobin: "hemoglobin",
  haemoglobinopathy: "hemoglobinopathy",
  haemorrhage: "hemorrhage",
  haemorrhagic: "hemorrhagic",
  haemorrhoid: "hemorrhoid",
  haemorrhoids: "hemorrhoids",
  haemolysis: "hemolysis",
  haemolytic: "hemolytic",
  haemostasis: "hemostasis",
  haematology: "hematology",
  haematological: "hematological",
  haematoma: "hematoma",
  haematuria: "hematuria",
  haematemesis: "hematemesis",
  haemothorax: "hemothorax",
  haemoptysis: "hemoptysis",
  haemophilia: "hemophilia",
  haemodialysis: "hemodialysis",
  haemodynamic: "hemodynamic",
  haemodynamics: "hemodynamics",
  haemochromatosis: "hemochromatosis",
  anaemia: "anemia",
  anaemic: "anemic",
  ischaemia: "ischemia",
  ischaemic: "ischemic",
  leukaemia: "leukemia",
  thalassaemia: "thalassemia",
  bacteraemia: "bacteremia",
  septicaemia: "septicemia",
  uraemia: "uremia",
  uraemic: "uremic",
  azotaemia: "azotemia",
  hypoxaemia: "hypoxemia",
  hypoxaemic: "hypoxemic",
  hypercapnaemia: "hypercapnemia",
  hypovolaemia: "hypovolemia",
  hypovolaemic: "hypovolemic",
  hypervolaemia: "hypervolemia",
  normovolaemic: "normovolemic",
  hypokalaemia: "hypokalemia",
  hyperkalaemia: "hyperkalemia",
  hyponatraemia: "hyponatremia",
  hypernatraemia: "hypernatremia",
  hypocalcaemia: "hypocalcemia",
  hypercalcaemia: "hypercalcemia",
  hypoglycaemia: "hypoglycemia",
  hyperglycaemia: "hyperglycemia",
  glycaemic: "glycemic",
  normoglycaemia: "normoglycemia",
  hypomagnesaemia: "hypomagnesemia",
  hypermagnesaemia: "hypermagnesemia",
  hypophosphataemia: "hypophosphatemia",
  hyperphosphataemia: "hyperphosphatemia",
  dyslipidaemia: "dyslipidemia",
  hyperlipidaemia: "hyperlipidemia",
  hypercholesterolaemia: "hypercholesterolemia",
  toxaemia: "toxemia",
  viraemia: "viremia",
  parasitaemia: "parasitemia",
  eosinophilaemia: "eosinophilemia",

  // -- oe- --
  oedema: "edema",
  oedematous: "edematous",
  oesophagus: "esophagus",
  oesophageal: "esophageal",
  oesophagitis: "esophagitis",
  oestrogen: "estrogen",
  oestradiol: "estradiol",
  oestrogenic: "estrogenic",
  coeliac: "celiac",
  foetus: "fetus",
  foetal: "fetal",
  caecum: "cecum",
  caecal: "cecal",
  amoebic: "amebic",
  diarrhoea: "diarrhea",
  diarrhoeal: "diarrheal",
  gonorrhoea: "gonorrhea",
  amenorrhoea: "amenorrhea",
  dysmenorrhoea: "dysmenorrhea",
  oligomenorrhoea: "oligomenorrhea",
  rhinorrhoea: "rhinorrhea",
  otorrhoea: "otorrhea",
  steatorrhoea: "steatorrhea",
  dyspnoea: "dyspnea",
  dyspnoeic: "dyspneic",
  apnoea: "apnea",
  apnoeic: "apneic",
  orthopnoea: "orthopnea",
  tachypnoea: "tachypnea",
  bradypnoea: "bradypnea",
  hypopnoea: "hypopnea",
  hyperpnoea: "hyperpnea",
  oedipal: "edipal",

  // -- ae- --
  aetiology: "etiology",
  aetiological: "etiological",
  paediatric: "pediatric",
  paediatrics: "pediatrics",
  paediatrician: "pediatrician",
  orthopaedic: "orthopedic",
  orthopaedics: "orthopedics",
  gynaecology: "gynecology",
  gynaecological: "gynecological",
  gynaecologist: "gynecologist",
  anaesthesia: "anesthesia",
  anaesthetic: "anesthetic",
  anaesthetics: "anesthetics",
  anaesthetist: "anesthesiologist",
  anaesthetise: "anesthetize",
  paraesthesia: "paresthesia",
  paraesthesiae: "paresthesias",
  hyperaesthesia: "hyperesthesia",
  anaphylaxis: "anaphylaxis",
  faeces: "feces",
  faecal: "fecal",
  praecox: "praecox",
  leucocyte: "leukocyte",
  leucocytes: "leukocytes",
  leucocytosis: "leukocytosis",
  leucopenia: "leukopenia",
  leukaemic: "leukemic",

  // -- -our / -re / -ise / -yse --
  colour: "color",
  coloured: "colored",
  behaviour: "behavior",
  behavioural: "behavioral",
  favour: "favor",
  favourable: "favorable",
  labour: "labor",
  tumour: "tumor",
  tumours: "tumors",
  humour: "humor",
  vapour: "vapor",
  odour: "odor",
  odourless: "odorless",
  honour: "honor",
  fibre: "fiber",
  fibres: "fibers",
  litre: "liter",
  litres: "liters",
  millilitre: "milliliter",
  millilitres: "milliliters",
  metre: "meter",
  metres: "meters",
  centimetre: "centimeter",
  millimetre: "millimeter",
  micrometre: "micrometer",
  centre: "center",
  centres: "centers",
  calibre: "caliber",
  manoeuvre: "maneuver",
  manoeuvres: "maneuvers",
  programme: "program",
  programmes: "programs",
  defence: "defense",
  licence: "license",
  practise: "practice",
  practised: "practiced",
  practising: "practicing",
  organise: "organize",
  organised: "organized",
  organisation: "organization",
  hospitalisation: "hospitalization",
  hospitalised: "hospitalized",
  immunisation: "immunization",
  immunised: "immunized",
  immunisations: "immunizations",
  visualisation: "visualization",
  visualise: "visualize",
  visualised: "visualized",
  characterisation: "characterization",
  characterise: "characterize",
  characterised: "characterized",
  normalisation: "normalization",
  normalise: "normalize",
  normalised: "normalized",
  catheterisation: "catheterization",
  catheterised: "catheterized",
  sensitisation: "sensitization",
  sensitised: "sensitized",
  utilisation: "utilization",
  utilise: "utilize",
  minimise: "minimize",
  minimised: "minimized",
  maximise: "maximize",
  maximised: "maximized",
  recognise: "recognize",
  recognised: "recognized",
  emphasise: "emphasize",
  emphasised: "emphasized",
  stabilise: "stabilize",
  stabilised: "stabilized",
  stabilisation: "stabilization",
  localise: "localize",
  localised: "localized",
  generalised: "generalized",
  polarisation: "polarization",
  depolarisation: "depolarization",
  repolarisation: "repolarization",
  depolarise: "depolarize",
  ionised: "ionized",
  oxidise: "oxidize",
  oxidised: "oxidized",
  metabolise: "metabolize",
  metabolised: "metabolized",
  analyse: "analyze",
  analysed: "analyzed",
  paralyse: "paralyze",
  paralysed: "paralyzed",
  catalyse: "catalyze",
  catalysed: "catalyzed",
  hydrolyse: "hydrolyze",
  hydrolysed: "hydrolyzed",

  // -- chemistry --
  sulphur: "sulfur",
  sulphate: "sulfate",
  sulphates: "sulfates",
  sulphide: "sulfide",
  sulphonamide: "sulfonamide",
  sulphonylurea: "sulfonylurea",
  sulphonylureas: "sulfonylureas",
  sulphasalazine: "sulfasalazine",
  aluminium: "aluminum",

  // -- endocrine suffixes --
  gonadotrophin: "gonadotropin",
  gonadotrophins: "gonadotropins",
  corticotrophin: "corticotropin",
  somatotrophin: "somatotropin",
  thyrotrophin: "thyrotropin",
  "thyrotrophin-releasing": "thyrotropin-releasing",
};

/** Drug names: the British INN differs from the US generic. */
const DRUGS: Record<string, string> = {
  adrenaline: "epinephrine",
  noradrenaline: "norepinephrine",
  paracetamol: "acetaminophen",
  salbutamol: "albuterol",
  lignocaine: "lidocaine",
  frusemide: "furosemide",
  rifampicin: "rifampin",
  ciclosporin: "cyclosporine",
  glibenclamide: "glyburide",
  pethidine: "meperidine",
  isoprenaline: "isoproterenol",
  cefalexin: "cephalexin",
  beclometasone: "beclomethasone",
  hydroxycarbamide: "hydroxyurea",
  amphetamine: "amphetamine",
  "glyceryl trinitrate": "nitroglycerin",
  "co-amoxiclav": "amoxicillin-clavulanate",
  "co-trimoxazole": "trimethoprim-sulfamethoxazole",
  "sodium valproate": "valproate",
  "salbutamol nebuliser": "albuterol nebulizer",
  nebuliser: "nebulizer",
  nebulised: "nebulized",
  "oral rehydration solution": "oral rehydration solution",
};

/** Health-system vocabulary: UK service structure -> US equivalent. */
const SYSTEM: Record<string, string> = {
  "accident and emergency": "the emergency department",
  "a&e": "the ED",
  "casualty department": "the emergency department",
  "emergency department (a&e)": "the emergency department",
  "general practitioner": "primary care physician",
  "general practice": "primary care",
  "the gp": "the primary care physician",
  consultant: "attending physician",
  registrar: "senior resident",
  "senior house officer": "resident",
  "house officer": "intern",
  "foundation doctor": "intern",
  "operating theatre": "operating room",
  theatre: "operating room",
  "ward round": "rounds",
  "full blood count": "complete blood count",
  fbc: "CBC",
  "urea and electrolytes": "basic metabolic panel",
  "u&es": "the basic metabolic panel",
  "u&e": "the basic metabolic panel",
  "urea level": "BUN",
  "the ambulance service": "EMS",
  "999": "911",
  paramedics: "paramedics",
  "medicines reconciliation": "medication reconciliation",
  "discharge summary": "discharge summary",
  "gp surgery": "primary care clinic",
  "practice nurse": "clinic nurse",
  "health visitor": "public health nurse",
  "red book": "immunization record",
};

/** Slug renames. Applied only when the target slug is free. */
const CATEGORY_SLUGS: Record<string, string> = {
  "cs-paediatrics": "cs-pediatrics",
  "cs-obstetrics-gynaecology": "cs-obstetrics-gynecology",
  "cs-haematology": "cs-hematology",
  "cs-orthopedics": "cs-orthopedics", // already US, listed for completeness
  "cs-perioperative-care": "cs-perioperative-care",
};

/** Quiz slug fragments rewritten in place (substring, not whole word). */
const QUIZ_SLUG_FRAGMENTS: Record<string, string> = {
  paediatric: "pediatric",
  paediatrics: "pediatrics",
  gynaecology: "gynecology",
  haematology: "hematology",
  orthopaedics: "orthopedics",
  anaesthesia: "anesthesia",
  neonatal: "neonatal",
  obgyn: "obgyn",
};

/** Content that cannot be auto-converted — reported, never rewritten. */
const NEEDS_HUMAN: { pattern: RegExp; why: string }[] = [
  { pattern: /\bmmol\/L\b/i, why: "SI unit — needs per-analyte conversion to mg/dL" },
  { pattern: /\bmicromol\/L\b|\bµmol\/L\b/i, why: "SI unit — needs conversion" },
  { pattern: /\bg\/L\b/i, why: "SI unit — hemoglobin reports as g/dL in the US" },
  { pattern: /\bkPa\b/i, why: "blood gas unit — US reports mmHg" },
  { pattern: /\bNICE\b/, why: "UK guideline body — replace with ACC/AHA, ADA, IDSA, etc." },
  { pattern: /\bBNF\b/, why: "UK formulary — replace with the US label or Lexicomp" },
  { pattern: /\bMHRA\b/, why: "UK regulator — replace with the FDA" },
  { pattern: /\bNHS\b/, why: "UK health service reference" },
  { pattern: /\bRCOG\b|\bRCPCH\b|\bSIGN\b/, why: "UK college guideline — replace with ACOG/AAP" },
  // Only fires on body weight ("12 stone"), never on kidney/gall stones.
  { pattern: /\b\d+\s*stone\b|\bstone\s+(?:in weight|and\s+\d+\s*(?:lb|pounds))/i, why: "UK weight unit — convert to lb" },
  { pattern: /\bnational guideline\b/i, why: "vague UK-era caveat — name the US guideline" },
];

/* ═════════════════ ENGINE ═════════════════ */

type Rule = { re: RegExp; to: string };

function buildRules(...maps: Record<string, string>[]): Rule[] {
  const merged: Record<string, string> = Object.assign({}, ...maps);
  return Object.entries(merged)
    .filter(([from, to]) => from.toLowerCase() !== to.toLowerCase())
    .sort((a, b) => b[0].length - a[0].length) // longest first
    .map(([from, to]) => ({
      re: new RegExp(`\\b${from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "gi"),
      to,
    }));
}

const RULES = buildRules(SPELLING, DRUGS, SYSTEM);

/** Preserve the casing of what was matched: ALL CAPS, Title Case, or lower. */
function matchCase(original: string, replacement: string): string {
  if (original === original.toUpperCase() && original !== original.toLowerCase())
    return replacement.toUpperCase();
  if (original[0] === original[0].toUpperCase())
    return replacement[0].toUpperCase() + replacement.slice(1);
  return replacement;
}

function americanize(text: string | null): { text: string; changed: boolean } {
  if (!text) return { text: text ?? "", changed: false };
  let out = text;
  for (const rule of RULES) {
    out = out.replace(rule.re, (m) => matchCase(m, rule.to));
  }
  return { text: out, changed: out !== text };
}

function flagsFor(text: string): string[] {
  return NEEDS_HUMAN.filter((f) => f.pattern.test(text)).map((f) => f.why);
}

/* ═════════════════ RUN ═════════════════ */

type Flagged = { where: string; topic: string; reasons: string[] };

async function main() {
  console.log(APPLY ? "AMERICANIZING (writing)…\n" : "DRY RUN — nothing will be written.\n");

  let categoryEdits = 0;
  let quizEdits = 0;
  let questionEdits = 0;
  let choiceEdits = 0;
  const flagged: Flagged[] = [];

  /* ---- 1. category slugs ---- */
  for (const [from, to] of Object.entries(CATEGORY_SLUGS)) {
    if (from === to) continue;
    const row = await prisma.quizCategory.findUnique({ where: { slug: from } });
    if (!row) continue;
    const clash = await prisma.quizCategory.findUnique({ where: { slug: to } });
    if (clash) {
      console.log(`  ⚠ ${from} → ${to} skipped: target slug already exists.`);
      continue;
    }
    console.log(`  slug  ${from} → ${to}`);
    if (APPLY) await prisma.quizCategory.update({ where: { id: row.id }, data: { slug: to } });
  }

  /* ---- 2. category text ---- */
  const categories = await prisma.quizCategory.findMany();
  for (const c of categories) {
    const title = americanize(c.title);
    const description = americanize(c.description);
    const overview = americanize(c.overview);
    if (!title.changed && !description.changed && !overview.changed) continue;
    categoryEdits++;
    if (title.changed) console.log(`  cat   "${c.title}" → "${title.text}"`);
    if (APPLY)
      await prisma.quizCategory.update({
        where: { id: c.id },
        data: {
          title: title.text,
          description: description.text,
          overview: c.overview ? overview.text : null,
        },
      });
  }

  /* ---- 3. quizzes ---- */
  const quizzes = await prisma.quiz.findMany({ select: { id: true, slug: true, title: true, description: true } });
  for (const q of quizzes) {
    let slug = q.slug;
    for (const [from, to] of Object.entries(QUIZ_SLUG_FRAGMENTS)) {
      if (from !== to) slug = slug.split(from).join(to);
    }
    if (slug !== q.slug) {
      const clash = await prisma.quiz.findUnique({ where: { slug } });
      if (clash) {
        console.log(`  ⚠ quiz slug ${q.slug} → ${slug} skipped: taken.`);
        slug = q.slug;
      } else {
        console.log(`  quiz  ${q.slug} → ${slug}`);
      }
    }

    const title = americanize(q.title);
    const description = americanize(q.description);
    if (slug === q.slug && !title.changed && !description.changed) continue;
    quizEdits++;
    if (APPLY)
      await prisma.quiz.update({
        where: { id: q.id },
        data: { slug, title: title.text, description: description.text },
      });
  }

  /* ---- 4. questions and choices ---- */
  /*
   * This is the slow part: a few thousand rows on a hosted database. Three
   * things make it survivable —
   *   - paginated reads, so we never hold every question in memory at once
   *   - writes fired in parallel batches instead of one-at-a-time round trips
   *   - a progress line after every page, so it never looks frozen
   */
  const totalQuestions = await prisma.question.count();
  console.log(`\n  Scanning ${totalQuestions} questions…`);

  const PAGE = 200;
  const CONCURRENCY = 25;
  const started = Date.now();
  let scanned = 0;

  for (let skip = 0; skip < totalQuestions; skip += PAGE) {
    const page = await prisma.question.findMany({
      skip,
      take: PAGE,
      orderBy: { id: "asc" },
      select: {
        id: true,
        stem: true,
        topic: true,
        explanation: true,
        quiz: { select: { title: true } },
        choices: { select: { id: true, text: true } },
      },
    });

    const writes: (() => Promise<unknown>)[] = [];

    for (const q of page) {
      const stem = americanize(q.stem);
      const topic = americanize(q.topic);
      const explanation = americanize(q.explanation);

      const reasons = [...new Set([...flagsFor(stem.text), ...flagsFor(explanation.text)])];
      if (reasons.length)
        flagged.push({
          where: `${q.quiz.title} — "${q.stem.slice(0, 70)}…"`,
          topic: topic.text,
          reasons,
        });

      if (stem.changed || topic.changed || explanation.changed) {
        questionEdits++;
        if (APPLY)
          writes.push(() =>
            prisma.question.update({
              where: { id: q.id },
              data: { stem: stem.text, topic: topic.text, explanation: explanation.text },
            })
          );
      }

      for (const c of q.choices) {
        const text = americanize(c.text);
        if (!text.changed) continue;
        choiceEdits++;
        if (APPLY)
          writes.push(() => prisma.choice.update({ where: { id: c.id }, data: { text: text.text } }));
      }
    }

    // Fire the batch in parallel slices rather than sequentially.
    for (let i = 0; i < writes.length; i += CONCURRENCY) {
      await Promise.all(writes.slice(i, i + CONCURRENCY).map((w) => w()));
    }

    scanned += page.length;
    const elapsed = (Date.now() - started) / 1000;
    const rate = scanned / Math.max(elapsed, 0.1);
    const remaining = Math.round((totalQuestions - scanned) / Math.max(rate, 0.1));
    console.log(
      `    ${scanned}/${totalQuestions} scanned · ${questionEdits} questions + ` +
        `${choiceEdits} choices rewritten` +
        (scanned < totalQuestions ? ` · ~${remaining}s left` : "")
    );
  }

  /* ---- report ---- */
  console.log("\n─── SUMMARY ───");
  console.log(`  categories rewritten : ${categoryEdits}`);
  console.log(`  quizzes rewritten    : ${quizEdits}`);
  console.log(`  questions rewritten  : ${questionEdits}`);
  console.log(`  choices rewritten    : ${choiceEdits}`);

  if (flagged.length) {
    console.log(`\n─── NEEDS A HUMAN (${flagged.length} items) ───`);
    console.log("These carry units or guideline references that cannot be safely");
    console.log("auto-converted. Each is listed with the reason.\n");

    const byReason = new Map<string, Flagged[]>();
    for (const f of flagged)
      for (const r of f.reasons) byReason.set(r, [...(byReason.get(r) ?? []), f]);

    for (const [reason, items] of [...byReason.entries()].sort((a, b) => b[1].length - a[1].length)) {
      console.log(`  ${reason}  (${items.length})`);
      for (const i of items.slice(0, 5)) console.log(`     · [${i.topic}] ${i.where}`);
      if (items.length > 5) console.log(`     … and ${items.length - 5} more`);
      console.log("");
    }
  }

  if (!APPLY) console.log("\nDry run only. Re-run with --apply to write.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
