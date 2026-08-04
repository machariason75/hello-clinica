/**
 * LAB UNIT CONVERTER — SI (UK) to conventional (US) units.
 *
 * WHY THIS IS NOT A FIND-AND-REPLACE
 * ----------------------------------
 * "mmol/L -> mg/dL" is not one conversion. It is a different conversion for
 * every analyte, and for several analytes it is not a conversion at all:
 *
 *   potassium 7.8 mmol/L   -> 7.8 mEq/L    (same number, different unit name)
 *   glucose   7.8 mmol/L   -> 140 mg/dL    (x18.0)
 *   calcium   2.1 mmol/L   -> 8.4 mg/dL    (x4.0)
 *   creatinine 180 umol/L  -> 2.0 mg/dL    (/88.4)
 *
 * A blind swap would turn a potassium of 7.8 into a potassium of 140. That is
 * not a typo, it is a fabricated lab value in a question about cardiac arrest.
 *
 * So this script reads BACKWARDS from each measurement to find the analyte
 * that owns it, and applies the rule for that analyte. Anything it cannot
 * confidently attribute is left untouched and REPORTED, never guessed.
 *
 * It also fixes UK clinical phrasing that survives spelling conversion:
 * "loin-to-groin" -> "flank-to-groin", "visible hematuria" -> "gross
 * hematuria", and similar.
 *
 * Dry run by default. Nothing is written until you pass --apply.
 *
 * Run:  npx tsx prisma/fix-units.ts             (preview, shows every change)
 *       npx tsx prisma/fix-units.ts --apply     (writes)
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const APPLY = process.argv.includes("--apply");

/* ═══════════════ CONVERSION TABLE ═══════════════ */

type Rule = {
  /** Words that identify this analyte, searched for before the measurement. */
  keywords: string[];
  /** SI unit this rule applies to. */
  from: RegExp;
  /** Unit to print instead. */
  to: string;
  /** Multiply the SI value by this. 1 = the number does not change. */
  factor: number;
  /** Decimal places in the result. */
  decimals: number;
  /** Optional: also rename the analyte itself (urea -> BUN). */
  rename?: [RegExp, string];
  note?: string;
};

const RULES: Rule[] = [
  /* --- Electrolytes: same number, US reports mEq/L --- */
  {
    keywords: ["potassium", "serum k", "k+"],
    from: /mmol\/L/i,
    to: "mEq/L",
    factor: 1,
    decimals: 1,
    note: "monovalent ion — mmol/L and mEq/L are numerically identical",
  },
  {
    keywords: ["sodium", "serum na", "na+"],
    from: /mmol\/L/i,
    to: "mEq/L",
    factor: 1,
    decimals: 0,
    note: "monovalent ion — numerically identical",
  },
  {
    keywords: ["chloride", "cl-"],
    from: /mmol\/L/i,
    to: "mEq/L",
    factor: 1,
    decimals: 0,
  },
  {
    keywords: ["bicarbonate", "hco3", "hco3-", "co2 content"],
    from: /mmol\/L/i,
    to: "mEq/L",
    factor: 1,
    decimals: 0,
  },
  {
    keywords: ["lactate", "lactic acid"],
    from: /mmol\/L/i,
    to: "mmol/L",
    factor: 1,
    decimals: 1,
    note: "US labs report lactate in mmol/L — no change needed",
  },
  {
    keywords: ["anion gap"],
    from: /mmol\/L/i,
    to: "mEq/L",
    factor: 1,
    decimals: 0,
  },
  {
    keywords: ["ketone", "beta-hydroxybutyrate", "hydroxybutyrate"],
    from: /mmol\/L/i,
    to: "mmol/L",
    factor: 1,
    decimals: 1,
    note: "reported in mmol/L in the US",
  },

  /* --- True conversions --- */
  {
    keywords: ["glucose", "blood sugar", "bm ", "cbg"],
    from: /mmol\/L/i,
    to: "mg/dL",
    factor: 18.0,
    decimals: 0,
  },
  {
    keywords: ["calcium", "ca2+", "corrected calcium", "ionised calcium", "ionized calcium"],
    from: /mmol\/L/i,
    to: "mg/dL",
    factor: 4.0,
    decimals: 1,
  },
  {
    keywords: ["magnesium", "mg2+"],
    from: /mmol\/L/i,
    to: "mg/dL",
    factor: 2.43,
    decimals: 1,
  },
  {
    keywords: ["phosphate", "phosphorus", "po4"],
    from: /mmol\/L/i,
    to: "mg/dL",
    factor: 3.1,
    decimals: 1,
  },
  {
    keywords: ["urea"],
    from: /mmol\/L/i,
    to: "mg/dL",
    factor: 2.8,
    decimals: 0,
    rename: [/\burea\b/gi, "BUN"],
    note: "urea (mmol/L) reports as BUN (mg/dL) in the US",
  },
  {
    keywords: ["cholesterol", "ldl", "hdl", "non-hdl"],
    from: /mmol\/L/i,
    to: "mg/dL",
    factor: 38.67,
    decimals: 0,
  },
  {
    keywords: ["triglyceride", "triglycerides"],
    from: /mmol\/L/i,
    to: "mg/dL",
    factor: 88.57,
    decimals: 0,
  },
  {
    keywords: ["urate", "uric acid"],
    from: /mmol\/L/i,
    to: "mg/dL",
    factor: 16.81,
    decimals: 1,
  },

  /* --- Micromolar --- */
  {
    keywords: ["creatinine"],
    from: /(?:µ|u|micro)mol\/L/i,
    to: "mg/dL",
    factor: 1 / 88.4,
    decimals: 2,
  },
  {
    keywords: ["bilirubin"],
    from: /(?:µ|u|micro)mol\/L/i,
    to: "mg/dL",
    factor: 1 / 17.1,
    decimals: 1,
  },
  {
    keywords: ["ferritin"],
    from: /(?:µ|u|micro)g\/L/i,
    to: "ng/mL",
    factor: 1,
    decimals: 0,
    note: "numerically identical",
  },

  /* --- g/L --- */
  {
    keywords: ["hemoglobin", "haemoglobin", "hb", "hgb"],
    from: /g\/L/,
    to: "g/dL",
    factor: 0.1,
    decimals: 1,
  },
  {
    keywords: ["albumin"],
    from: /g\/L/,
    to: "g/dL",
    factor: 0.1,
    decimals: 1,
  },
  {
    keywords: ["total protein", "protein"],
    from: /g\/L/,
    to: "g/dL",
    factor: 0.1,
    decimals: 1,
  },

  /* --- Blood gas --- */
  {
    keywords: ["pao2", "pa02", "po2", "oxygen tension"],
    from: /kPa/,
    to: "mmHg",
    factor: 7.5,
    decimals: 0,
  },
  {
    keywords: ["paco2", "pac02", "pco2", "carbon dioxide tension"],
    from: /kPa/,
    to: "mmHg",
    factor: 7.5,
    decimals: 0,
  },
];

/* ═══════════════ UK CLINICAL PHRASING ═══════════════ */

const PHRASING: [RegExp, string][] = [
  [/\bloin[- ]to[- ]groin\b/gi, "flank-to-groin"],
  [/\bloin pain\b/gi, "flank pain"],
  [/\bvisible h(?:a)?ematuria\b/gi, "gross hematuria"],
  [/\bnon-visible h(?:a)?ematuria\b/gi, "microscopic hematuria"],
  [/\bfrank h(?:a)?ematuria\b/gi, "gross hematuria"],
  [/\bmicturition\b/gi, "urination"],
  [/\bbeen unwell\b/gi, "been ill"],
  [/\bobservations\b/gi, "vital signs"],
  [/\bbloods\b/gi, "labs"],
  [/\bcannula\b/gi, "IV catheter"],
  [/\bplaster cast\b/gi, "cast"],
  [/\bpyrexia\b/gi, "fever"],
  [/\bpyrexial\b/gi, "febrile"],
  [/\bfits\b/gi, "seizures"],
  [/\bcollapse\?\s*cause\b/gi, "syncope of unclear cause"],
];

/* ═══════════════ ENGINE ═══════════════ */

const MEASUREMENT = /(\d+(?:\.\d+)?)\s*(mmol\/L|(?:µ|u|micro)mol\/L|(?:µ|u|micro)g\/L|g\/L|kPa)/gi;

/** How far back to look for the analyte name that owns a measurement. */
const LOOKBACK = 90;

type Unattributed = { value: string; context: string };

function convertText(
  text: string,
  unattributed: Unattributed[]
): { text: string; changes: string[] } {
  const changes: string[] = [];
  let out = text;

  /* --- measurements --- */
  out = out.replace(MEASUREMENT, (match, rawValue: string, rawUnit: string, offset: number) => {
    const before = out.slice(Math.max(0, offset - LOOKBACK), offset).toLowerCase();

    // Nearest keyword wins, so "sodium 140 mmol/L, potassium 7.8 mmol/L"
    // attributes each number to the right analyte.
    let best: { rule: Rule; distance: number } | null = null;
    for (const rule of RULES) {
      if (!rule.from.test(rawUnit)) continue;
      for (const kw of rule.keywords) {
        const idx = before.lastIndexOf(kw);
        if (idx === -1) continue;
        const distance = before.length - idx;
        if (!best || distance < best.distance) best = { rule, distance };
      }
    }

    if (!best) {
      unattributed.push({
        value: match,
        context: text.slice(Math.max(0, offset - 60), offset + 30).replace(/\s+/g, " "),
      });
      return match;
    }

    const { rule } = best;
    const converted = (parseFloat(rawValue) * rule.factor).toFixed(rule.decimals);
    // Strip a trailing ".0" that adds nothing (140.0 -> 140)
    const tidy = converted.replace(/\.0+$/, "");
    const replacement = `${tidy} ${rule.to}`;

    if (replacement.toLowerCase() !== match.toLowerCase().replace(/\s+/g, " ")) {
      changes.push(`${match.trim()} → ${replacement}`);
    }
    return replacement;
  });

  /* --- analyte renames (urea -> BUN), only where that analyte was converted --- */
  for (const rule of RULES) {
    if (!rule.rename) continue;
    const [pattern, name] = rule.rename;
    if (rule.keywords.some((k) => text.toLowerCase().includes(k)) && pattern.test(out)) {
      const next = out.replace(pattern, name);
      if (next !== out) {
        changes.push(`renamed analyte → ${name}`);
        out = next;
      }
    }
  }

  /* --- UK phrasing --- */
  for (const [pattern, replacement] of PHRASING) {
    const next = out.replace(pattern, replacement);
    if (next !== out) {
      changes.push(`phrasing → "${replacement}"`);
      out = next;
    }
  }

  return { text: out, changes };
}

/* ═══════════════ RUN ═══════════════ */

async function main() {
  console.log(APPLY ? "CONVERTING UNITS (writing)…\n" : "DRY RUN — nothing will be written.\n");

  const questions = await prisma.question.findMany({
    select: {
      id: true,
      stem: true,
      explanation: true,
      topic: true,
      quiz: { select: { title: true } },
      choices: { select: { id: true, text: true } },
    },
  });

  const unattributed: Unattributed[] = [];
  let questionsChanged = 0;
  let choicesChanged = 0;
  const log: string[] = [];

  for (const q of questions) {
    const stem = convertText(q.stem, unattributed);
    const explanation = convertText(q.explanation, unattributed);
    const allChanges = [...stem.changes, ...explanation.changes];

    if (allChanges.length) {
      questionsChanged++;
      log.push(
        `\n  ${q.quiz.title} · [${q.topic}]\n` +
          `    "${q.stem.slice(0, 80)}…"\n` +
          allChanges.map((c) => `      ${c}`).join("\n")
      );
      if (APPLY)
        await prisma.question.update({
          where: { id: q.id },
          data: { stem: stem.text, explanation: explanation.text },
        });
    }

    for (const c of q.choices) {
      const converted = convertText(c.text, unattributed);
      if (!converted.changes.length) continue;
      choicesChanged++;
      log.push(`      choice: ${converted.changes.join(", ")}`);
      if (APPLY) await prisma.choice.update({ where: { id: c.id }, data: { text: converted.text } });
    }
  }

  console.log(log.join("\n"));

  console.log("\n─── SUMMARY ───");
  console.log(`  questions converted : ${questionsChanged}`);
  console.log(`  choices converted   : ${choicesChanged}`);

  if (unattributed.length) {
    const unique = [...new Map(unattributed.map((u) => [u.context, u])).values()];
    console.log(`\n─── COULD NOT ATTRIBUTE (${unique.length}) ───`);
    console.log("A measurement whose analyte could not be identified from the");
    console.log("surrounding text. Left unchanged on purpose. Send these to me.\n");
    for (const u of unique.slice(0, 40)) console.log(`  · ${u.value}  in  "…${u.context}…"`);
    if (unique.length > 40) console.log(`  … and ${unique.length - 40} more`);
  } else {
    console.log("\n  Every measurement was attributed to an analyte. Nothing left over.");
  }

  if (!APPLY) console.log("\nDry run only. Re-run with --apply to write.\n");
  else console.log("");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
