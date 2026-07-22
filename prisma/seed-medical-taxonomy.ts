/**
 * Medical & health-sciences taxonomy.
 *
 * DESIGN PRINCIPLE — the top level stays small.
 *
 * The instinct with a request like "add anatomy, physiology, pathology,
 * microbiology, surgery, ACLS..." is to create thirty top-level cards. That
 * produces a wall nobody can scan, and the Question Bank landing page stops
 * being usable.
 *
 * Instead this adds FOUR new top-level branches that map to how clinicians
 * actually think about their training:
 *
 *   Foundational Sciences   — what you learn before the wards
 *   Clinical Specialties    — the rotations
 *   Emergency & Life Support— the certifications everyone renews
 *   Clinical Skills         — the things you're examined doing
 *
 * Everything else nests underneath. The landing page gains four cards; the depth
 * is there when someone goes looking for it.
 *
 * Run:  npx tsx prisma/seed-medical-taxonomy.ts
 * Safe to re-run — upserts by slug, never duplicates.
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Node = {
  slug: string;
  title: string;
  description: string;
  overview?: string;
  icon?: string;
  premium?: boolean;
  featured?: boolean;
  children?: Node[];
};

const TAXONOMY: Node[] = [
  {
    slug: "foundational-sciences",
    title: "Foundational Sciences",
    description: "The pre-clinical core — anatomy through pharmacology.",
    overview:
      "Everything the wards assume you already know. These sections cover the basic sciences that underpin clinical reasoning, organised the way they're taught rather than alphabetically.",
    icon: "Microscope",
    featured: true,
    children: [
      {
        slug: "fs-anatomy",
        title: "Anatomy",
        description: "Structure, from gross dissection to the microscope.",
        icon: "Bone",
        children: [
          { slug: "fs-gross-anatomy", title: "Gross Anatomy", description: "Regional and systemic anatomy — the anatomy of the dissection room.", icon: "Bone" },
          { slug: "fs-neuroanatomy", title: "Neuroanatomy", description: "Central and peripheral nervous system structure, tracts and blood supply.", icon: "Brain" },
          { slug: "fs-embryology", title: "Embryology", description: "Development from fertilisation to birth, and where it goes wrong.", icon: "Baby" },
          { slug: "fs-histology", title: "Histology", description: "Tissue architecture under the microscope.", icon: "Microscope" },
        ],
      },
      {
        slug: "fs-physiology",
        title: "Physiology",
        description: "How the systems actually work — and fail.",
        icon: "Activity",
        children: [
          { slug: "fs-cardiovascular-physiology", title: "Cardiovascular", description: "Cardiac cycle, haemodynamics, and regulation of blood pressure.", icon: "HeartPulse" },
          { slug: "fs-respiratory-physiology", title: "Respiratory", description: "Ventilation, gas exchange, and acid-base balance.", icon: "Wind" },
          { slug: "fs-renal-physiology", title: "Renal & Fluid Balance", description: "Filtration, electrolytes, and the kidney's role in homeostasis.", icon: "Droplets" },
          { slug: "fs-endocrine-physiology", title: "Endocrine", description: "Hormonal axes, feedback loops, and metabolic control.", icon: "Zap" },
        ],
      },
      {
        slug: "fs-biochemistry",
        title: "Biochemistry",
        description: "Metabolism, enzymes, and molecular medicine.",
        icon: "FlaskConical",
      },
      {
        slug: "fs-microbiology",
        title: "Microbiology",
        description: "The organisms that cause disease.",
        icon: "Bug",
        children: [
          { slug: "fs-bacteriology", title: "Bacteriology", description: "Gram staining, classification, and clinically important bacteria.", icon: "Bug" },
          { slug: "fs-virology", title: "Virology", description: "Viral structure, replication, and the viruses that matter clinically.", icon: "Bug" },
          { slug: "fs-parasitology", title: "Parasitology", description: "Protozoa, helminths, vectors, and tropical disease.", icon: "Bug" },
          { slug: "fs-mycology", title: "Mycology", description: "Fungal infections, superficial through systemic.", icon: "Bug" },
        ],
      },
      {
        slug: "fs-pathology",
        title: "Pathology",
        description: "Mechanisms of disease, from cell injury to neoplasia.",
        icon: "Slice",
      },
      {
        slug: "fs-pharmacology",
        title: "Pharmacology",
        description: "Drug classes, mechanisms, and the ones you'll actually give.",
        icon: "Pill",
        children: [
          { slug: "fs-antibiotics", title: "Antibiotics & Antimicrobials", description: "Mechanisms, spectrum, resistance, and rational prescribing.", icon: "Pill" },
          { slug: "fs-cardiovascular-drugs", title: "Cardiovascular Drugs", description: "Antihypertensives, antiarrhythmics, anticoagulants and heart failure therapy.", icon: "HeartPulse" },
          { slug: "fs-cns-drugs", title: "CNS & Analgesia", description: "Analgesics, anaesthetics, antiepileptics and psychotropics.", icon: "Brain" },
          { slug: "fs-drug-calculations", title: "Drug Calculations", description: "Dosage, infusion rates, and the arithmetic that must never be wrong.", icon: "Calculator" },
        ],
      },
      {
        slug: "fs-chemistry",
        title: "Chemistry",
        description: "The chemistry required for entrance exams and pharmacology.",
        icon: "Atom",
        children: [
          { slug: "fs-organic-chemistry", title: "Organic Chemistry", description: "Functional groups, reactions, and structures relevant to drugs and biomolecules.", icon: "Atom" },
          { slug: "fs-inorganic-chemistry", title: "Inorganic Chemistry", description: "Periodicity, bonding, and the ions that matter physiologically.", icon: "Atom" },
          { slug: "fs-physical-chemistry", title: "Physical Chemistry", description: "Thermodynamics, kinetics, equilibria and solution behaviour.", icon: "Atom" },
        ],
      },
    ],
  },

  {
    slug: "clinical-specialties",
    title: "Clinical Specialties",
    description: "The rotations — medicine, surgery, and everything between.",
    overview:
      "Specialty-by-specialty practice built around the presentations you actually meet on the wards and in clinic, with rationales that explain the reasoning rather than just naming the answer.",
    icon: "Stethoscope",
    featured: true,
    children: [
      {
        slug: "cs-internal-medicine",
        title: "Internal Medicine",
        description: "The bread and butter of adult medicine.",
        icon: "Stethoscope",
        children: [
          { slug: "cs-cardiology", title: "Cardiology", description: "Ischaemic heart disease, arrhythmias, heart failure and valvular disease.", icon: "HeartPulse" },
          { slug: "cs-respiratory-medicine", title: "Respiratory Medicine", description: "Asthma, COPD, pneumonia, TB and pleural disease.", icon: "Wind" },
          { slug: "cs-gastroenterology", title: "Gastroenterology & Hepatology", description: "GI bleeding, liver disease, IBD and malabsorption.", icon: "Soup" },
          { slug: "cs-nephrology", title: "Nephrology", description: "Acute kidney injury, chronic kidney disease, and electrolyte emergencies.", icon: "Droplets" },
          { slug: "cs-neurology", title: "Neurology", description: "Stroke, seizures, headache, and neuromuscular disease.", icon: "Brain" },
          { slug: "cs-endocrinology", title: "Endocrinology", description: "Diabetes, thyroid disease, and adrenal disorders.", icon: "Zap" },
        ],
      },
      {
        slug: "cs-surgery",
        title: "Surgery",
        description: "Operative and peri-operative care.",
        icon: "Scissors",
        children: [
          { slug: "cs-general-surgery", title: "General Surgery", description: "The acute abdomen, hernias, biliary and colorectal disease.", icon: "Scissors" },
          { slug: "cs-orthopedics", title: "Orthopaedics & Trauma", description: "Fractures, joint disease, and musculoskeletal trauma.", icon: "Bone" },
          { slug: "cs-neurosurgery", title: "Neurosurgery", description: "Head injury, raised intracranial pressure, and spinal emergencies.", icon: "Brain" },
          { slug: "cs-perioperative-care", title: "Peri-operative Care", description: "Pre-op assessment, anaesthesia principles, and post-op complications.", icon: "ClipboardCheck" },
        ],
      },
      { slug: "cs-obstetrics-gynaecology", title: "Obstetrics & Gynaecology", description: "Pregnancy, labour, and gynaecological disease.", icon: "Baby" },
      { slug: "cs-paediatrics", title: "Paediatrics", description: "The unwell child, development, and paediatric emergencies.", icon: "Baby" },
      { slug: "cs-psychiatry", title: "Psychiatry & Mental Health", description: "Assessment, major disorders, risk, and psychotropic management.", icon: "Brain" },
      { slug: "cs-infectious-diseases", title: "Infectious Diseases", description: "Sepsis, HIV, TB, malaria, and antimicrobial stewardship.", icon: "Bug" },
      { slug: "cs-critical-care", title: "Critical & Intensive Care", description: "Shock, ventilation, sedation, and organ support.", icon: "MonitorDot" },
      { slug: "cs-outpatient-primary-care", title: "Outpatient & Primary Care", description: "Common presentations in clinic, screening, and chronic disease review.", icon: "ClipboardList" },
    ],
  },

  {
    slug: "emergency-life-support",
    title: "Emergency & Life Support",
    description: "BLS, ACLS, PALS and first aid — the certifications everyone renews.",
    overview:
      "Algorithm-driven practice for the resuscitation certifications. These are the sections where getting the sequence right matters more than recall, so the rationales walk through the decision points rather than simply naming a drug.",
    icon: "HeartPulse",
    featured: true,
    children: [
      { slug: "els-bls", title: "Basic Life Support (BLS/BCLS)", description: "Chest compressions, rescue breathing, AED use, and choking.", icon: "HeartPulse" },
      { slug: "els-acls", title: "Advanced Cardiac Life Support (ACLS)", description: "Rhythm recognition, the cardiac arrest algorithms, and post-arrest care.", icon: "Activity" },
      { slug: "els-pals", title: "Paediatric Advanced Life Support (PALS)", description: "Paediatric arrest, shock recognition, and weight-based dosing.", icon: "Baby" },
      { slug: "els-first-aid", title: "First Aid Essentials", description: "Bleeding, burns, fractures, anaphylaxis, and the primary survey.", icon: "BriefcaseMedical" },
      { slug: "els-trauma", title: "Trauma & Primary Survey", description: "ABCDE assessment, triage, and the first ten minutes.", icon: "Siren" },
    ],
  },

  {
    slug: "clinical-skills",
    title: "Clinical Skills & Procedures",
    description: "The things you're examined doing, not just describing.",
    overview:
      "Practical competence — examination sequences, sterile technique, and the procedures you'll be signed off on. Useful for OSCEs and for the first week of any placement.",
    icon: "HandHeart",
    children: [
      { slug: "cks-physical-examination", title: "Physical Examination", description: "System-by-system examination sequences and the signs that matter.", icon: "Stethoscope" },
      { slug: "cks-surgical-skills", title: "Surgical Skills", description: "Scrubbing, sterile field, suturing, knots, and instrument handling.", icon: "Scissors" },
      { slug: "cks-common-procedures", title: "Common Procedures", description: "Cannulation, catheterisation, NG tubes, injections and blood sampling.", icon: "Syringe" },
      { slug: "cks-infection-control", title: "Infection Prevention & Control", description: "Hand hygiene, PPE, isolation precautions and sharps safety.", icon: "ShieldCheck" },
      { slug: "cks-documentation", title: "Documentation & Handover", description: "Clear notes, SBAR handover, and the medico-legal basics.", icon: "FileText" },
    ],
  },
];

async function upsertTree(nodes: Node[], parentId: string | null, depth = 0) {
  let order = 0;
  for (const node of nodes) {
    const row = await prisma.quizCategory.upsert({
      where: { slug: node.slug },
      create: {
        slug: node.slug,
        title: node.title,
        description: node.description,
        overview: node.overview ?? null,
        icon: node.icon ?? null,
        parentId,
        order: order++,
        premium: node.premium ?? false,
        featured: node.featured ?? false,
        published: true,
      },
      update: {
        title: node.title,
        description: node.description,
        overview: node.overview ?? null,
        icon: node.icon ?? null,
        parentId,
        premium: node.premium ?? false,
        featured: node.featured ?? false,
      },
    });

    console.log(`${"  ".repeat(depth)}✓ ${node.title}`);

    if (node.children?.length) {
      await upsertTree(node.children, row.id, depth + 1);
    }
  }
}

async function main() {
  console.log("Seeding medical & health-sciences taxonomy…\n");
  await upsertTree(TAXONOMY, null);

  const total = await prisma.quizCategory.count();
  console.log(`\nDone. ${total} categories now exist in total.`);
  console.log(
    "\nSections are published but EMPTY until quizzes are added. Add them from\n" +
      "Admin → Question Bank, or wait for the content waves."
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
