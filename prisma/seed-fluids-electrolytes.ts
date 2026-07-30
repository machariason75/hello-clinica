/**
 * CONTENT WAVE — Fluids & Electrolytes
 *
 * Creates the section as well as filling it:
 *
 *   Clinical Specialties → Internal Medicine → Fluids & Electrolytes
 *   (slug: cs-fluids-electrolytes)
 *
 * WHY HERE AND NOT UNDER FOUNDATIONAL SCIENCES
 *
 * fs-renal-physiology already exists as "Renal & Fluid Balance" and owns the
 * physiology — filtration, homeostasis, the mechanisms. A second fluids folder
 * beside it would leave a student unable to tell which to open. This section is
 * deliberately the CLINICAL counterpart: what to hang, how much, how fast, and
 * what to do when the number on the report is dangerous. The two are
 * complementary rather than overlapping.
 *
 *   Practice Set 1 (30)  → compartments, IV fluid choice, sodium and water,
 *                          volume assessment, fluids in special situations
 *   Practice Set 2 (30)  → potassium, calcium/magnesium/phosphate, acid-base
 *                          principles and clinical, paediatric and diarrhoeal loss
 *   Timed Exam 1   (30)  → Set 1 under exam conditions, 40 minutes
 *   Timed Exam 2   (60)  → everything, 75 minutes
 *
 * A DELIBERATE EMPHASIS: oral rehydration and paediatric diarrhoeal illness get
 * proper coverage rather than a passing mention. In this region that is not a
 * footnote to fluid management — it is the commonest life-threatening fluid
 * problem a graduate will meet, and ORS is among the highest-impact
 * interventions in medicine.
 *
 * Answers are SHUFFLED on insert — the correct choice is written first below for
 * readability, and inserting in that order would put it at position 1 every time.
 *
 * ⚠ THIS IS THE MOST GUIDELINE-SENSITIVE SET SO FAR. Correction rates,
 * maintenance volumes and first-line fluids differ between national guidelines
 * and are revised periodically. The questions are written to test PRINCIPLE —
 * why slow correction, why balanced crystalloid, why glucose is needed in ORS —
 * because principles travel and numbers do not. Review anything numerical
 * against your local guidance before publishing. All editable in Admin.
 *
 * Run:  npx tsx prisma/seed-fluids-electrolytes.ts
 * Safe to re-run — reuses the section, upserts by quiz slug.
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Q = {
  stem: string;
  topic: string;
  explanation: string;
  choices: { text: string; isCorrect: boolean }[];
};

/* ═══════════════ PRACTICE SET 1 ═══════════════ */

const SET1: Q[] = [
  /* ---- Body Fluid Compartments ---- */
  {
    stem: "Approximately what proportion of total body water is intracellular?",
    topic: "Body Fluid Compartments",
    explanation:
      "About two thirds, with the remaining third extracellular. Of that extracellular third, roughly three quarters is interstitial and only one quarter is plasma. This distribution is why a litre of isotonic fluid expands the circulation far less than expected — most of it ends up outside the vessels.",
    choices: [
      { text: "Two thirds", isCorrect: true },
      { text: "One third", isCorrect: false },
      { text: "One half", isCorrect: false },
      { text: "Nine tenths", isCorrect: false },
    ],
  },
  {
    stem: "Where does 5% dextrose distribute once infused, and why?",
    topic: "Body Fluid Compartments",
    explanation:
      "Throughout total body water. The glucose is metabolised, leaving free water that crosses all membranes freely, so only a small fraction remains intravascular. That makes it a poor resuscitation fluid — giving it to a shocked patient wastes time while barely expanding the circulation.",
    choices: [
      { text: "Throughout total body water, since the glucose is metabolised leaving free water", isCorrect: true },
      { text: "Entirely within the plasma compartment", isCorrect: false },
      { text: "Only into the interstitial space", isCorrect: false },
      { text: "Only into cells, never the extracellular space", isCorrect: false },
    ],
  },
  {
    stem: "Which compartment does isotonic saline principally expand?",
    topic: "Body Fluid Compartments",
    explanation:
      "The extracellular compartment, because its sodium content keeps it outside cells. Only about a quarter stays intravascular, the rest moving into the interstitium — which is why large volumes cause oedema, and why the amount needed for resuscitation exceeds the deficit measured in blood.",
    choices: [
      { text: "The extracellular compartment, with only about a quarter staying intravascular", isCorrect: true },
      { text: "The intracellular compartment", isCorrect: false },
      { text: "Only the plasma, entirely", isCorrect: false },
      { text: "It distributes evenly through total body water", isCorrect: false },
    ],
  },
  {
    stem: "What determines the movement of water between the intracellular and extracellular compartments?",
    topic: "Body Fluid Compartments",
    explanation:
      "The osmotic gradient, which in practice means the effective osmoles — chiefly sodium — that cannot cross the membrane freely. Urea distributes across membranes and so contributes little to water shifts despite raising measured osmolality, which is why a uraemic patient is not thereby dehydrated at cell level.",
    choices: [
      { text: "The gradient of effective osmoles, chiefly sodium", isCorrect: true },
      { text: "Hydrostatic pressure alone", isCorrect: false },
      { text: "Total measured osmolality including urea", isCorrect: false },
      { text: "The plasma albumin concentration", isCorrect: false },
    ],
  },
  {
    stem: "What governs fluid movement between plasma and interstitium across the capillary wall?",
    topic: "Body Fluid Compartments",
    explanation:
      "The balance of hydrostatic and oncotic pressures — the Starling forces. Raised hydrostatic pressure as in heart failure, or reduced oncotic pressure as in hypoalbuminaemia, both push fluid outward and cause oedema, which is why the two very different conditions produce a similar sign.",
    choices: [
      { text: "The balance of hydrostatic and oncotic pressures", isCorrect: true },
      { text: "Sodium concentration gradients alone", isCorrect: false },
      { text: "Active transport of water by pumps", isCorrect: false },
      { text: "Blood pH", isCorrect: false },
    ],
  },
  {
    stem: "Why does serum sodium concentration report water balance rather than sodium content?",
    topic: "Body Fluid Compartments",
    explanation:
      "It is a ratio of sodium to water, so it changes when either alters. A patient can be hyponatraemic while total body sodium is high — as in oedematous heart failure, where water is retained in greater excess than sodium. Reading sodium as a measure of salt is one of the commonest errors in fluid management.",
    choices: [
      { text: "It is a ratio, so it reflects water relative to sodium, not total sodium", isCorrect: true },
      { text: "It measures total body sodium directly", isCorrect: false },
      { text: "It is unaffected by hydration status", isCorrect: false },
      { text: "It reflects only renal sodium excretion", isCorrect: false },
    ],
  },

  /* ---- IV Fluid Choice & Prescribing ---- */
  {
    stem: "Why does large-volume 0.9% sodium chloride cause a metabolic acidosis?",
    topic: "IV Fluid Choice & Prescribing",
    explanation:
      "Its chloride concentration is considerably higher than plasma, and the resulting hyperchloraemia reduces the strong ion difference, lowering bicarbonate. This is a hyperchloraemic normal-anion-gap acidosis produced by the treatment itself — and mistaking it for worsening lactic acidosis leads to giving still more of the same fluid.",
    choices: [
      { text: "Its supraphysiological chloride content causes a hyperchloraemic acidosis", isCorrect: true },
      { text: "It contains lactate that is metabolised to acid", isCorrect: false },
      { text: "It is hypotonic and causes cell lysis", isCorrect: false },
      { text: "It directly inhibits renal bicarbonate reabsorption", isCorrect: false },
    ],
  },
  {
    stem: "What is meant by a balanced crystalloid?",
    topic: "IV Fluid Choice & Prescribing",
    explanation:
      "A solution whose electrolyte composition more closely resembles plasma, with lower chloride and a metabolisable anion such as lactate or acetate that generates bicarbonate. Hartmann's and Ringer's lactate are the familiar examples, and they avoid the hyperchloraemic acidosis of large-volume saline.",
    choices: [
      { text: "A solution resembling plasma, with less chloride and a metabolisable anion", isCorrect: true },
      { text: "A solution containing equal sodium and potassium", isCorrect: false },
      { text: "Any fluid given at a constant rate", isCorrect: false },
      { text: "A fluid with no electrolytes at all", isCorrect: false },
    ],
  },
  {
    stem: "What are the four purposes for which intravenous fluid is prescribed?",
    topic: "IV Fluid Choice & Prescribing",
    explanation:
      "Resuscitation, routine maintenance, replacement of ongoing losses, and redistribution. Naming which one applies determines the fluid, the rate and the endpoint — the commonest prescribing error is running maintenance fluid at resuscitation volumes, or resuscitating with a maintenance fluid.",
    choices: [
      { text: "Resuscitation, maintenance, replacement of losses, and redistribution", isCorrect: true },
      { text: "Only resuscitation and maintenance", isCorrect: false },
      { text: "Only to keep a cannula patent", isCorrect: false },
      { text: "Nutrition and analgesia", isCorrect: false },
    ],
  },
  {
    stem: "Why must a fluid prescription be reviewed and reassessed rather than set and continued?",
    topic: "IV Fluid Choice & Prescribing",
    explanation:
      "Because the patient's state changes, and fluid that was appropriate yesterday may now be causing overload. Accumulated positive balance worsens outcomes through pulmonary and tissue oedema and delayed wound healing. Fluid is a drug with a dose, a duration and toxicity, and it deserves the same daily review as any other.",
    choices: [
      { text: "Needs change, and accumulated fluid overload causes real harm", isCorrect: true },
      { text: "The fluid degrades chemically in the bag", isCorrect: false },
      { text: "It is purely an administrative requirement", isCorrect: false },
      { text: "Excess fluid is always excreted harmlessly", isCorrect: false },
    ],
  },
  {
    stem: "Why is potassium never given as a rapid intravenous bolus?",
    topic: "IV Fluid Choice & Prescribing",
    explanation:
      "A sudden rise in plasma potassium can cause fatal arrhythmia, so it must be diluted and infused at a controlled rate, with cardiac monitoring for faster rates and central access for higher concentrations. This is one of the few genuinely absolute rules in fluid prescribing.",
    choices: [
      { text: "A sudden rise in plasma potassium can cause fatal arrhythmia", isCorrect: true },
      { text: "It causes immediate renal failure", isCorrect: false },
      { text: "It is inactivated unless given slowly", isCorrect: false },
      { text: "Rapid administration is painless but ineffective", isCorrect: false },
    ],
  },
  {
    stem: "In a patient with normal renal function, what does routine maintenance fluid need to supply?",
    topic: "IV Fluid Choice & Prescribing",
    explanation:
      "Water, sodium, potassium and chloride sufficient for daily obligatory losses, with some glucose to limit ketosis — not to provide nutrition, which it cannot. Maintenance volumes are considerably smaller than resuscitation volumes, and prescribing maintenance fluid at resuscitation rates is a frequent cause of iatrogenic overload.",
    choices: [
      { text: "Daily water, sodium, potassium and chloride, with some glucose to limit ketosis", isCorrect: true },
      { text: "Full nutritional requirements including protein", isCorrect: false },
      { text: "Sodium only, in large quantities", isCorrect: false },
      { text: "As much volume as the patient will tolerate", isCorrect: false },
    ],
  },
  {
    stem: "Why is albumin not routinely preferred over crystalloid for resuscitation?",
    topic: "IV Fluid Choice & Prescribing",
    explanation:
      "Trials have not shown a consistent survival benefit over crystalloid for general resuscitation, and it costs far more. It has specific roles — in some patients with cirrhosis, for example — but its theoretical oncotic advantage has not translated into better outcomes in unselected patients.",
    choices: [
      { text: "It has not shown a consistent outcome benefit over crystalloid and costs much more", isCorrect: true },
      { text: "It cannot be given intravenously", isCorrect: false },
      { text: "It always causes anaphylaxis", isCorrect: false },
      { text: "It has no effect on plasma volume at all", isCorrect: false },
    ],
  },

  /* ---- Sodium & Water Balance ---- */
  {
    stem: "Why must chronic hyponatraemia be corrected slowly?",
    topic: "Sodium & Water Balance",
    explanation:
      "Brain cells adapt to chronic hypotonicity by extruding osmoles, so raising serum sodium too quickly draws water out and causes osmotic demyelination — often irreversible and sometimes devastating. The tragedy is that it is caused by the treatment, and it appears days after the sodium has been 'corrected'.",
    choices: [
      { text: "Rapid correction causes osmotic demyelination, which is often irreversible", isCorrect: true },
      { text: "Rapid correction causes immediate renal failure", isCorrect: false },
      { text: "Slow correction is merely a matter of convenience", isCorrect: false },
      { text: "Fast correction has no adverse consequences", isCorrect: false },
    ],
  },
  {
    stem: "What is the first step in working out the cause of hyponatraemia?",
    topic: "Sodium & Water Balance",
    explanation:
      "Assess volume status — hypovolaemic, euvolaemic or hypervolaemic — because that single distinction separates the major causes and determines whether the patient needs salt and water, water restriction, or treatment of the underlying oedematous state. Urine sodium and osmolality then refine it.",
    choices: [
      { text: "Assess volume status: hypovolaemic, euvolaemic or hypervolaemic", isCorrect: true },
      { text: "Give hypertonic saline immediately in all cases", isCorrect: false },
      { text: "Restrict fluid in every patient", isCorrect: false },
      { text: "Measure the serum potassium first", isCorrect: false },
    ],
  },
  {
    stem: "What is the biochemical picture of SIADH?",
    topic: "Sodium & Water Balance",
    explanation:
      "Euvolaemic hyponatraemia with inappropriately concentrated urine and a high urine sodium, in a patient who is neither oedematous nor dry, with normal thyroid and adrenal function. The kidney is retaining water it should be excreting — hence water restriction rather than salt replacement is the usual approach.",
    choices: [
      { text: "Euvolaemic hyponatraemia with concentrated urine and high urine sodium", isCorrect: true },
      { text: "Hypovolaemic hyponatraemia with dilute urine", isCorrect: false },
      { text: "Hypernatraemia with concentrated urine", isCorrect: false },
      { text: "Oedema with low urine sodium", isCorrect: false },
    ],
  },
  {
    stem: "When is hypertonic saline indicated in hyponatraemia?",
    topic: "Sodium & Water Balance",
    explanation:
      "In severe symptomatic hyponatraemia with seizures or reduced consciousness, where cerebral oedema threatens life. It is given in small controlled aliquots to raise sodium just enough to relieve symptoms, not to normalise the value — the aim is to buy safety, then correct slowly.",
    choices: [
      { text: "Severe symptomatic hyponatraemia with seizures or reduced consciousness", isCorrect: true },
      { text: "Any hyponatraemia below the reference range", isCorrect: false },
      { text: "Asymptomatic chronic hyponatraemia", isCorrect: false },
      { text: "Hypernatraemia", isCorrect: false },
    ],
  },
  {
    stem: "What usually causes hypernatraemia?",
    topic: "Sodium & Water Balance",
    explanation:
      "A water deficit rather than excess salt — most often inadequate intake in someone who cannot access or ask for water, such as an infant, a frail elderly patient or someone with impaired consciousness. Because thirst normally protects against it, hypernatraemia usually signals that the patient could not drink.",
    choices: [
      { text: "A water deficit, usually because the patient could not access or request water", isCorrect: true },
      { text: "Excess dietary salt in almost every case", isCorrect: false },
      { text: "Overtreatment with diuretics only", isCorrect: false },
      { text: "Excess free water intake", isCorrect: false },
    ],
  },
  {
    stem: "Why must hypernatraemia also be corrected gradually?",
    topic: "Sodium & Water Balance",
    explanation:
      "Brain cells have accumulated osmoles to match the hypertonic environment, so rapid lowering of serum sodium draws water into them and causes cerebral oedema and seizures. The principle mirrors hyponatraemia: the brain adapts over time, and undoing that faster than it adapted is what causes harm.",
    choices: [
      { text: "Rapid lowering draws water into adapted brain cells, causing cerebral oedema", isCorrect: true },
      { text: "It causes osmotic demyelination, as in hyponatraemia", isCorrect: false },
      { text: "Rapid correction has no risk", isCorrect: false },
      { text: "It precipitates immediate hyperkalaemia", isCorrect: false },
    ],
  },

  /* ---- Volume Assessment & Resuscitation ---- */
  {
    stem: "Which findings suggest significant hypovolaemia at the bedside?",
    topic: "Volume Assessment & Resuscitation",
    explanation:
      "Tachycardia, postural hypotension, prolonged capillary refill, cool peripheries, reduced skin turgor, dry mucosae and falling urine output. No single sign is reliable alone — the assessment is a composite, and in a young patient blood pressure may be maintained until compensation fails abruptly.",
    choices: [
      { text: "Tachycardia, postural drop, prolonged capillary refill, cool peripheries and low urine output", isCorrect: true },
      { text: "Raised jugular venous pressure with peripheral oedema", isCorrect: false },
      { text: "Bradycardia with warm peripheries", isCorrect: false },
      { text: "Normal observations exclude hypovolaemia entirely", isCorrect: false },
    ],
  },
  {
    stem: "Why can blood pressure remain normal in a substantially hypovolaemic young adult?",
    topic: "Volume Assessment & Resuscitation",
    explanation:
      "Compensatory vasoconstriction and tachycardia maintain pressure until a large volume has been lost, at which point decompensation is abrupt. Waiting for hypotension before treating is therefore waiting for the last sign — tachycardia, capillary refill and mental state change earlier.",
    choices: [
      { text: "Compensation maintains pressure until a large loss, then fails abruptly", isCorrect: true },
      { text: "Young adults do not develop hypovolaemia", isCorrect: false },
      { text: "Blood pressure falls at the very first loss of volume", isCorrect: false },
      { text: "Compensation is absent in young people", isCorrect: false },
    ],
  },
  {
    stem: "What is the purpose of a fluid challenge?",
    topic: "Volume Assessment & Resuscitation",
    explanation:
      "To give a defined small volume rapidly and observe the physiological response, so that fluid responsiveness is tested rather than assumed. It converts a guess into a measurement, and the reassessment afterwards is the essential part — a challenge given without reviewing the response is simply an infusion.",
    choices: [
      { text: "To give a defined volume quickly and reassess, testing fluid responsiveness", isCorrect: true },
      { text: "To correct the entire deficit in one go", isCorrect: false },
      { text: "To keep the cannula from blocking", isCorrect: false },
      { text: "To provide daily maintenance requirements", isCorrect: false },
    ],
  },
  {
    stem: "Which markers suggest resuscitation is succeeding?",
    topic: "Volume Assessment & Resuscitation",
    explanation:
      "Improving mental state, warming peripheries with shortening capillary refill, falling heart rate, restored urine output and a falling lactate. Perfusion markers matter more than blood pressure alone — a normal pressure maintained by intense vasoconstriction is not adequate perfusion.",
    choices: [
      { text: "Improving mental state, perfusion, urine output and falling lactate", isCorrect: true },
      { text: "Blood pressure alone, regardless of perfusion", isCorrect: false },
      { text: "Rising lactate", isCorrect: false },
      { text: "Increasing heart rate", isCorrect: false },
    ],
  },
  {
    stem: "What harm follows excessive fluid resuscitation?",
    topic: "Volume Assessment & Resuscitation",
    explanation:
      "Pulmonary oedema and worsening gas exchange, tissue and gut oedema impairing healing and absorption, raised intra-abdominal pressure, and a prolonged stay. Positive fluid balance is independently associated with worse outcomes — which is why the resuscitation phase should end deliberately rather than drift on.",
    choices: [
      { text: "Pulmonary and tissue oedema, impaired healing and worse outcomes", isCorrect: true },
      { text: "No harm — excess fluid is always excreted", isCorrect: false },
      { text: "Only a minor risk of bruising at the cannula", isCorrect: false },
      { text: "It improves outcomes regardless of volume", isCorrect: false },
    ],
  },
  {
    stem: "In haemorrhagic shock, what is the limitation of crystalloid resuscitation?",
    topic: "Volume Assessment & Resuscitation",
    explanation:
      "It restores volume but carries no oxygen and no clotting factors, and in quantity it dilutes those that remain, worsening coagulopathy. Crystalloid is a bridge while blood products and definitive haemostasis are arranged — it is not treatment for bleeding.",
    choices: [
      { text: "It carries no oxygen or clotting factors and dilutes those present", isCorrect: true },
      { text: "It cannot expand the circulation at all", isCorrect: false },
      { text: "It is contraindicated in any bleeding patient", isCorrect: false },
      { text: "It fully replaces the need for transfusion", isCorrect: false },
    ],
  },

  /* ---- Fluids in Special Situations ---- */
  {
    stem: "Why does fluid management require particular care in heart failure?",
    topic: "Fluids in Special Situations",
    explanation:
      "The failing ventricle tolerates preload poorly, so volumes that would be unremarkable otherwise can precipitate pulmonary oedema. Yet these patients can still be genuinely hypovolaemic — after over-diuresis, for instance — so fluid is not forbidden, it is given cautiously in small aliquots with reassessment between.",
    choices: [
      { text: "The failing ventricle tolerates preload poorly, so small aliquots with reassessment are needed", isCorrect: true },
      { text: "Fluid is absolutely contraindicated in heart failure", isCorrect: false },
      { text: "These patients can never be hypovolaemic", isCorrect: false },
      { text: "Normal volumes carry no additional risk", isCorrect: false },
    ],
  },
  {
    stem: "What is refeeding syndrome, and which electrolyte change defines it?",
    topic: "Fluids in Special Situations",
    explanation:
      "Reintroducing nutrition after prolonged starvation triggers insulin release, driving phosphate, potassium and magnesium into cells. Falling phosphate is the hallmark, and it can cause cardiac and respiratory failure. Prevention means starting feeding slowly with electrolyte monitoring and thiamine, in anyone identified as at risk beforehand.",
    choices: [
      { text: "Insulin-driven intracellular shift after refeeding, with falling phosphate as the hallmark", isCorrect: true },
      { text: "A rise in phosphate after starvation", isCorrect: false },
      { text: "Sodium overload from feeding", isCorrect: false },
      { text: "An allergic reaction to feed", isCorrect: false },
    ],
  },
  {
    stem: "Why does diabetic ketoacidosis involve a large total body deficit despite hyperglycaemia?",
    topic: "Fluids in Special Situations",
    explanation:
      "Glucose exceeding the renal threshold causes an osmotic diuresis, losing water and electrolytes over hours to days. Total body potassium is markedly depleted even when the measured value looks normal or high, because acidosis and insulin deficiency have shifted it out of cells — which is why potassium falls sharply once insulin starts.",
    choices: [
      { text: "Osmotic diuresis depletes water and electrolytes, with total body potassium low despite the measured value", isCorrect: true },
      { text: "Hyperglycaemia causes fluid retention, not loss", isCorrect: false },
      { text: "Potassium is always genuinely high and must never be replaced", isCorrect: false },
      { text: "There is no significant fluid deficit in DKA", isCorrect: false },
    ],
  },
  {
    stem: "What is third space loss?",
    topic: "Fluids in Special Situations",
    explanation:
      "Fluid sequestered into a compartment where it is not circulating and not available — bowel lumen in obstruction, peritoneum in pancreatitis, or oedematous injured tissue. The patient can be intravascularly depleted while appearing oedematous and having gained weight, which is why an oedematous patient may still need fluid.",
    choices: [
      { text: "Fluid sequestered where it is not circulating, so the patient may be dry despite oedema", isCorrect: true },
      { text: "Fluid lost from the body entirely through the skin", isCorrect: false },
      { text: "A synonym for excessive urine output", isCorrect: false },
      { text: "Fluid retained inside cells only", isCorrect: false },
    ],
  },
  {
    stem: "What should guide fluid replacement in extensive burns?",
    topic: "Fluids in Special Situations",
    explanation:
      "A formula based on burn surface area and body weight gives a STARTING estimate, which is then titrated against urine output and perfusion. Formulae are a beginning, not a prescription — under-resuscitation risks shock and acute kidney injury, while rigidly following the calculation risks oedema and compartment syndrome.",
    choices: [
      { text: "An area-and-weight formula as a starting estimate, then titrated to urine output and perfusion", isCorrect: true },
      { text: "A fixed volume for every patient", isCorrect: false },
      { text: "Oral intake alone in all cases", isCorrect: false },
      { text: "Blood pressure as the only endpoint", isCorrect: false },
    ],
  },
];

/* ═══════════════ PRACTICE SET 2 ═══════════════ */

const SET2: Q[] = [
  /* ---- Potassium Disorders ---- */
  {
    stem: "What ECG changes suggest significant hyperkalaemia?",
    topic: "Potassium Disorders",
    explanation:
      "Tall peaked T waves early, then flattening of P waves, PR prolongation and QRS widening, progressing to a sine wave pattern and arrest. The ECG reflects the risk better than the number does, so it is obtained immediately — a modestly raised potassium with QRS widening is more urgent than a higher value with a normal trace.",
    choices: [
      { text: "Peaked T waves, then P wave loss and QRS widening toward a sine wave", isCorrect: true },
      { text: "Prominent U waves with a long QT", isCorrect: false },
      { text: "Deep Q waves in all leads", isCorrect: false },
      { text: "No ECG change ever occurs", isCorrect: false },
    ],
  },
  {
    stem: "Why is intravenous calcium given in hyperkalaemia with ECG changes?",
    topic: "Potassium Disorders",
    explanation:
      "It stabilises the cardiac membrane against the arrhythmogenic effect of potassium, buying time. Critically, it does NOT lower the potassium — so it must always be followed by measures that shift potassium into cells and then remove it from the body, or the patient deteriorates once its brief effect wears off.",
    choices: [
      { text: "It stabilises the myocardium but does not lower potassium", isCorrect: true },
      { text: "It rapidly removes potassium from the body", isCorrect: false },
      { text: "It shifts potassium into cells", isCorrect: false },
      { text: "It reverses the underlying renal failure", isCorrect: false },
    ],
  },
  {
    stem: "Which treatments shift potassium into cells rather than removing it?",
    topic: "Potassium Disorders",
    explanation:
      "Insulin with glucose, and nebulised salbutamol. Both act within minutes but are temporary — the potassium returns to the circulation as the effect wears off. Definitive removal requires renal excretion, a binding agent, or dialysis, and forgetting that distinction leads to rebound.",
    choices: [
      { text: "Insulin with glucose, and nebulised salbutamol", isCorrect: true },
      { text: "Dialysis and potassium binders", isCorrect: false },
      { text: "Intravenous calcium gluconate", isCorrect: false },
      { text: "Intravenous saline alone", isCorrect: false },
    ],
  },
  {
    stem: "Which drugs commonly cause hyperkalaemia?",
    topic: "Potassium Disorders",
    explanation:
      "ACE inhibitors and angiotensin receptor blockers, potassium-sparing diuretics such as spironolactone, NSAIDs and trimethoprim. The risk multiplies when they are combined or when renal function falls — so a medication review is part of managing hyperkalaemia, not an afterthought.",
    choices: [
      { text: "ACE inhibitors, ARBs, spironolactone, NSAIDs and trimethoprim", isCorrect: true },
      { text: "Loop diuretics and beta-2 agonists", isCorrect: false },
      { text: "Paracetamol and antihistamines", isCorrect: false },
      { text: "Inhaled corticosteroids", isCorrect: false },
    ],
  },
  {
    stem: "Why might a potassium result be spuriously high?",
    topic: "Potassium Disorders",
    explanation:
      "Haemolysis during sampling releases intracellular potassium into the specimen — from a difficult venepuncture, prolonged tourniquet, fist clenching or delayed processing. A high value that fits neither the clinical picture nor the ECG should be repeated carefully before acting on it.",
    choices: [
      { text: "Haemolysis in the sample from difficult venepuncture or delayed processing", isCorrect: true },
      { text: "Taking the sample while the patient is fasting", isCorrect: false },
      { text: "Using too large a volume of blood", isCorrect: false },
      { text: "Spurious results are impossible for potassium", isCorrect: false },
    ],
  },
  {
    stem: "Why must magnesium be checked when hypokalaemia proves resistant to replacement?",
    topic: "Potassium Disorders",
    explanation:
      "Magnesium depletion promotes renal potassium wasting, so potassium cannot be retained until magnesium is corrected. Repeated potassium infusions in an unrecognised magnesium deficiency simply pass through the kidney — checking magnesium resolves what otherwise looks like inexplicable failure.",
    choices: [
      { text: "Magnesium depletion drives renal potassium wasting, so potassium cannot be retained", isCorrect: true },
      { text: "Magnesium binds potassium in the gut", isCorrect: false },
      { text: "Magnesium has no relationship to potassium handling", isCorrect: false },
      { text: "High magnesium is the cause of hypokalaemia", isCorrect: false },
    ],
  },
  {
    stem: "What ECG features suggest hypokalaemia?",
    topic: "Potassium Disorders",
    explanation:
      "Flattened T waves, ST depression and prominent U waves, with an apparently long QT. The risk is ventricular arrhythmia, and it is greatly increased in a patient on digoxin — which is why hypokalaemia in that setting is treated with particular urgency.",
    choices: [
      { text: "Flat T waves, ST depression and prominent U waves", isCorrect: true },
      { text: "Tall peaked T waves", isCorrect: false },
      { text: "Widened QRS progressing to a sine wave", isCorrect: false },
      { text: "Complete absence of any change", isCorrect: false },
    ],
  },

  /* ---- Calcium, Magnesium & Phosphate ---- */
  {
    stem: "Why is measured calcium corrected for albumin?",
    topic: "Calcium, Magnesium & Phosphate",
    explanation:
      "About half of plasma calcium is bound to albumin and is not biologically active. A low albumin therefore lowers total calcium while ionised calcium remains normal — so an unadjusted result in a hypoalbuminaemic patient suggests hypocalcaemia that does not exist, prompting unnecessary treatment.",
    choices: [
      { text: "Much of it is albumin-bound and inactive, so low albumin lowers total calcium falsely", isCorrect: true },
      { text: "Albumin destroys calcium in the sample", isCorrect: false },
      { text: "Calcium is entirely protein-bound", isCorrect: false },
      { text: "Correction is a formality with no clinical effect", isCorrect: false },
    ],
  },
  {
    stem: "Which signs suggest hypocalcaemia?",
    topic: "Calcium, Magnesium & Phosphate",
    explanation:
      "Perioral and peripheral paraesthesiae, muscle cramps, carpopedal spasm, and the Chvostek and Trousseau signs — reflecting increased neuromuscular excitability. Severe hypocalcaemia can cause laryngospasm, seizures and prolonged QT with arrhythmia, so it is not a purely biochemical finding.",
    choices: [
      { text: "Paraesthesiae, cramps, carpopedal spasm and positive Chvostek or Trousseau signs", isCorrect: true },
      { text: "Constipation, polyuria and confusion", isCorrect: false },
      { text: "Bradycardia with warm peripheries", isCorrect: false },
      { text: "No clinical signs are ever present", isCorrect: false },
    ],
  },
  {
    stem: "How does hypercalcaemia typically present?",
    topic: "Calcium, Magnesium & Phosphate",
    explanation:
      "Polyuria and thirst, constipation, nausea, abdominal pain, bone pain, confusion and low mood — summarised as stones, bones, groans and psychic moans. The polyuria causes dehydration which concentrates calcium further, which is why rehydration is the first step in management.",
    choices: [
      { text: "Polyuria, thirst, constipation, abdominal and bone pain, and confusion", isCorrect: true },
      { text: "Carpopedal spasm and perioral tingling", isCorrect: false },
      { text: "Peaked T waves on the ECG", isCorrect: false },
      { text: "Isolated hypotension with no other feature", isCorrect: false },
    ],
  },
  {
    stem: "What are the two commonest causes of hypercalcaemia?",
    topic: "Calcium, Magnesium & Phosphate",
    explanation:
      "Primary hyperparathyroidism and malignancy, between them accounting for the large majority. Parathyroid hormone distinguishes them: it is raised or inappropriately normal in hyperparathyroidism, and suppressed in malignancy-associated hypercalcaemia. That one test directs the whole subsequent workup.",
    choices: [
      { text: "Primary hyperparathyroidism and malignancy", isCorrect: true },
      { text: "Vitamin D deficiency and chronic kidney disease", isCorrect: false },
      { text: "Diuretic use and dehydration alone", isCorrect: false },
      { text: "Hypoalbuminaemia and starvation", isCorrect: false },
    ],
  },
  {
    stem: "Why is magnesium described as a silent electrolyte?",
    topic: "Calcium, Magnesium & Phosphate",
    explanation:
      "It is not on most routine panels, so depletion goes unmeasured while causing arrhythmia, tremor, weakness and refractory hypokalaemia and hypocalcaemia. It must be requested deliberately — most commonly in alcohol dependence, malnutrition, diarrhoea, diuretic use and after prolonged intravenous feeding.",
    choices: [
      { text: "It is not on routine panels, so depletion is missed while causing arrhythmia and refractory hypokalaemia", isCorrect: true },
      { text: "It produces no physiological effects at all", isCorrect: false },
      { text: "Its level never changes in illness", isCorrect: false },
      { text: "It cannot be measured in blood", isCorrect: false },
    ],
  },
  {
    stem: "In which situations is hypophosphataemia particularly dangerous?",
    topic: "Calcium, Magnesium & Phosphate",
    explanation:
      "Refeeding after starvation, recovery from diabetic ketoacidosis, and alcohol dependence. Phosphate is needed for ATP, so severe depletion causes respiratory muscle weakness, cardiac dysfunction, rhabdomyolysis and confusion — an energy failure at cellular level rather than a laboratory abnormality.",
    choices: [
      { text: "Refeeding, recovery from DKA, and alcohol dependence — causing ATP failure", isCorrect: true },
      { text: "Only in chronic kidney disease", isCorrect: false },
      { text: "It is never clinically significant", isCorrect: false },
      { text: "Only in the immediate postoperative period", isCorrect: false },
    ],
  },

  /* ---- Acid-Base: Principles ---- */
  {
    stem: "What is the systematic first step in interpreting an arterial blood gas?",
    topic: "Acid-Base: Principles",
    explanation:
      "Look at the pH to establish acidaemia or alkalaemia, then decide whether the primary disturbance is respiratory or metabolic from the carbon dioxide and bicarbonate, then assess compensation, then calculate the anion gap. Following that order every time prevents the common error of reading the numbers in isolation.",
    choices: [
      { text: "pH first, then identify the primary disturbance, then compensation, then anion gap", isCorrect: true },
      { text: "Read the oxygen saturation and stop there", isCorrect: false },
      { text: "Calculate the anion gap before anything else", isCorrect: false },
      { text: "Assume it is always a respiratory problem", isCorrect: false },
    ],
  },
  {
    stem: "How is the anion gap calculated, and what does a raised value indicate?",
    topic: "Acid-Base: Principles",
    explanation:
      "Sodium minus the sum of chloride and bicarbonate. A raised gap means unmeasured acid anions are present — lactate, ketones, toxins, or the retained anions of renal failure. It converts 'there is a metabolic acidosis' into a short, specific list of causes.",
    choices: [
      { text: "Na minus (Cl + HCO3); a raised gap indicates unmeasured acid anions", isCorrect: true },
      { text: "Cl minus Na; a raised gap indicates alkalosis", isCorrect: false },
      { text: "The difference between arterial and venous pH", isCorrect: false },
      { text: "Bicarbonate minus carbon dioxide", isCorrect: false },
    ],
  },
  {
    stem: "What causes a NORMAL anion gap metabolic acidosis?",
    topic: "Acid-Base: Principles",
    explanation:
      "Loss of bicarbonate with retention of chloride — diarrhoea above all, plus renal tubular acidosis and large-volume saline infusion. The gap stays normal because chloride replaces the lost bicarbonate one for one, whereas added acid would introduce a new unmeasured anion.",
    choices: [
      { text: "Bicarbonate loss with chloride retention: diarrhoea, RTA, large-volume saline", isCorrect: true },
      { text: "Lactic acidosis", isCorrect: false },
      { text: "Diabetic ketoacidosis", isCorrect: false },
      { text: "Salicylate poisoning", isCorrect: false },
    ],
  },
  {
    stem: "Why does compensation for an acid-base disturbance never fully normalise the pH?",
    topic: "Acid-Base: Principles",
    explanation:
      "Compensation is driven by the abnormal pH itself, so it moderates but cannot abolish the deviation. A completely normal pH with grossly abnormal bicarbonate and carbon dioxide therefore suggests two opposing primary disorders rather than perfect compensation — a genuinely useful diagnostic rule.",
    choices: [
      { text: "Compensation is driven by the abnormal pH, so a normal pH suggests a mixed disorder", isCorrect: true },
      { text: "Compensation always overcorrects past normal", isCorrect: false },
      { text: "Compensation does not affect pH at all", isCorrect: false },
      { text: "The kidney cannot compensate for anything", isCorrect: false },
    ],
  },
  {
    stem: "How quickly do respiratory and renal compensation act?",
    topic: "Acid-Base: Principles",
    explanation:
      "Respiratory compensation begins within minutes by altering ventilation, while renal compensation takes hours to days as bicarbonate handling adjusts. That difference in speed is itself informative — a fully compensated metabolic picture implies the problem has been present for some time.",
    choices: [
      { text: "Respiratory within minutes; renal over hours to days", isCorrect: true },
      { text: "Both act within seconds", isCorrect: false },
      { text: "Renal within minutes; respiratory over days", isCorrect: false },
      { text: "Neither acts until the disturbance is treated", isCorrect: false },
    ],
  },
  {
    stem: "What produces a metabolic alkalosis?",
    topic: "Acid-Base: Principles",
    explanation:
      "Loss of acid or gain of bicarbonate — prolonged vomiting or nasogastric aspiration, diuretics, or excessive alkali. Vomiting is the classic example and typically comes with hypokalaemia and hypochloraemia, which is why treating it means giving chloride and potassium rather than acid.",
    choices: [
      { text: "Acid loss or bicarbonate gain: vomiting, NG aspiration, diuretics, alkali excess", isCorrect: true },
      { text: "Diarrhoea with bicarbonate loss", isCorrect: false },
      { text: "Retention of carbon dioxide", isCorrect: false },
      { text: "Accumulation of lactate", isCorrect: false },
    ],
  },

  /* ---- Acid-Base: Clinical ---- */
  {
    stem: "What does a rising lactate indicate in a shocked patient?",
    topic: "Acid-Base: Clinical",
    explanation:
      "Inadequate tissue oxygen delivery driving anaerobic metabolism — a marker of severity and of the adequacy of resuscitation. A falling lactate is among the more reliable signs of improvement, while a persistently rising one signals that current treatment is not working.",
    choices: [
      { text: "Inadequate tissue oxygen delivery; the trend tracks resuscitation adequacy", isCorrect: true },
      { text: "Excessive oxygen delivery to the tissues", isCorrect: false },
      { text: "A purely respiratory problem", isCorrect: false },
      { text: "Successful resuscitation", isCorrect: false },
    ],
  },
  {
    stem: "A patient with severe COPD has a raised carbon dioxide with near-normal pH and high bicarbonate. How is this interpreted?",
    topic: "Acid-Base: Clinical",
    explanation:
      "Chronic respiratory acidosis with renal compensation — the raised bicarbonate takes days to develop and indicates this is the patient's established baseline. Treating the carbon dioxide value as an acute emergency risks over-ventilating them into an alkalosis; what matters is change from their norm.",
    choices: [
      { text: "Chronic respiratory acidosis with renal compensation — an established baseline", isCorrect: true },
      { text: "Acute respiratory failure requiring immediate intubation on this basis alone", isCorrect: false },
      { text: "A primary metabolic alkalosis", isCorrect: false },
      { text: "A normal blood gas needing no interpretation", isCorrect: false },
    ],
  },
  {
    stem: "Why does an anxious hyperventilating patient develop tingling and carpopedal spasm?",
    topic: "Acid-Base: Clinical",
    explanation:
      "Respiratory alkalosis increases calcium binding to albumin, lowering ionised calcium and raising neuromuscular excitability — despite a normal total calcium. Recognising the mechanism prevents both unnecessary calcium administration and the assumption that the symptoms are purely psychological.",
    choices: [
      { text: "Alkalosis increases calcium binding to albumin, lowering ionised calcium", isCorrect: true },
      { text: "Total calcium falls sharply", isCorrect: false },
      { text: "Potassium rises acutely", isCorrect: false },
      { text: "It is entirely psychological with no biochemical basis", isCorrect: false },
    ],
  },
  {
    stem: "Why is bicarbonate not routinely given to correct the acidosis of diabetic ketoacidosis?",
    topic: "Acid-Base: Clinical",
    explanation:
      "Because insulin and fluid stop ketone production and let the acidosis resolve on its own, while bicarbonate risks worsening hypokalaemia, paradoxical central nervous system acidosis and cerebral oedema in children. Treating the number rather than the cause is what makes it harmful.",
    choices: [
      { text: "Insulin and fluid correct it; bicarbonate risks hypokalaemia and cerebral oedema", isCorrect: true },
      { text: "Bicarbonate is unavailable in most hospitals", isCorrect: false },
      { text: "The acidosis in DKA is harmless and needs no attention", isCorrect: false },
      { text: "Bicarbonate would raise blood glucose dangerously", isCorrect: false },
    ],
  },
  {
    stem: "A patient with prolonged vomiting has a metabolic alkalosis with low potassium and low chloride. What does treatment require?",
    topic: "Acid-Base: Clinical",
    explanation:
      "Chloride-containing fluid with potassium replacement. The kidney cannot excrete the excess bicarbonate while chloride and potassium are depleted, so the alkalosis persists until they are replaced — which is why this is one of the few situations where 0.9% saline is exactly the right choice.",
    choices: [
      { text: "Chloride-containing fluid with potassium replacement", isCorrect: true },
      { text: "Intravenous bicarbonate", isCorrect: false },
      { text: "Free water restriction alone", isCorrect: false },
      { text: "Dextrose without electrolytes", isCorrect: false },
    ],
  },
  {
    stem: "Why can a normal pH conceal a serious disturbance?",
    topic: "Acid-Base: Clinical",
    explanation:
      "Two opposing primary disorders can offset each other — a metabolic acidosis with a respiratory alkalosis, as in salicylate poisoning or sepsis with hyperventilation. Reading only the pH misses both, which is why the bicarbonate, carbon dioxide and anion gap are examined even when the pH looks reassuring.",
    choices: [
      { text: "Opposing primary disorders can offset each other, as in salicylate poisoning", isCorrect: true },
      { text: "A normal pH always means the patient is well", isCorrect: false },
      { text: "pH is the only value that matters", isCorrect: false },
      { text: "Mixed disorders do not occur in practice", isCorrect: false },
    ],
  },

  /* ---- Paediatric & Diarrhoeal Fluid Loss ---- */
  {
    stem: "Why does oral rehydration solution contain glucose as well as sodium?",
    topic: "Paediatric & Diarrhoeal Fluid Loss",
    explanation:
      "Because sodium-glucose co-transport in the small intestine remains intact during most diarrhoeal illness, and glucose actively drives sodium — and therefore water — absorption. Salt water alone works poorly; the glucose is what makes ORS effective, and it is why the ratio matters rather than the sweetness.",
    choices: [
      { text: "Glucose drives sodium absorption via intact sodium-glucose co-transport", isCorrect: true },
      { text: "Glucose is included only to improve the taste", isCorrect: false },
      { text: "Glucose provides the child's full nutrition", isCorrect: false },
      { text: "Glucose slows intestinal motility", isCorrect: false },
    ],
  },
  {
    stem: "Why is low-osmolarity ORS preferred over the older formulation?",
    topic: "Paediatric & Diarrhoeal Fluid Loss",
    explanation:
      "It reduces stool output, vomiting and the need for unscheduled intravenous fluid, without increasing the risk of hyponatraemia. The older higher-osmolarity solution drew water into the gut lumen, working against the very absorption it was meant to promote.",
    choices: [
      { text: "It reduces stool output, vomiting and the need for IV fluid", isCorrect: true },
      { text: "It tastes better and nothing more", isCorrect: false },
      { text: "It contains no sodium at all", isCorrect: false },
      { text: "It is simply cheaper to produce", isCorrect: false },
    ],
  },
  {
    stem: "Which signs indicate SEVERE dehydration in a child?",
    topic: "Paediatric & Diarrhoeal Fluid Loss",
    explanation:
      "Lethargy or unconsciousness, sunken eyes, inability to drink or drinking poorly, and a skin pinch returning very slowly. This combination mandates immediate intravenous fluid — the oral route is inadequate at this stage, and recognising it correctly is what determines whether the child lives.",
    choices: [
      { text: "Lethargy or unconsciousness, sunken eyes, unable to drink, very slow skin pinch", isCorrect: true },
      { text: "Thirst with normal alertness and a brisk skin pinch", isCorrect: false },
      { text: "Mild irritability alone", isCorrect: false },
      { text: "Normal examination with a single loose stool", isCorrect: false },
    ],
  },
  {
    stem: "Why is zinc supplementation given alongside ORS in childhood diarrhoea?",
    topic: "Paediatric & Diarrhoeal Fluid Loss",
    explanation:
      "It shortens the episode, reduces its severity, and lowers the risk of further episodes over the following months. It is a cheap intervention with a meaningful mortality benefit, which is why it is recommended as standard with ORS rather than as an optional extra.",
    choices: [
      { text: "It shortens the illness and reduces recurrence over subsequent months", isCorrect: true },
      { text: "It replaces the need for rehydration entirely", isCorrect: false },
      { text: "It kills the causative organism directly", isCorrect: false },
      { text: "It has no proven benefit and is given by tradition", isCorrect: false },
    ],
  },
  {
    stem: "Why should feeding continue during a child's diarrhoeal illness?",
    topic: "Paediatric & Diarrhoeal Fluid Loss",
    explanation:
      "Withholding food does not shorten the diarrhoea but does worsen nutritional status, delaying recovery of the gut mucosa and increasing the risk of the illness tipping a marginally nourished child into malnutrition. Breastfeeding in particular should continue throughout.",
    choices: [
      { text: "Withholding food worsens nutrition and delays mucosal recovery without shortening the illness", isCorrect: true },
      { text: "Feeding shortens the diarrhoea by half in every case", isCorrect: false },
      { text: "Food should be stopped until stools are formed", isCorrect: false },
      { text: "Breastfeeding must be suspended during diarrhoea", isCorrect: false },
    ],
  },
];

/* ═══════════════ SEED ═══════════════ */

/** Fisher-Yates. The correct answer is written first above; without this it would insert at position 1 every time. */
function shuffled<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Retries a write when the pooled connection drops. Real errors re-throw at once. */
async function withRetry<T>(fn: () => Promise<T>, label: string): Promise<T> {
  const attempts = 3;
  for (let i = 1; i <= attempts; i++) {
    try {
      return await fn();
    } catch (e) {
      const transient =
        e instanceof Error &&
        (e.message.includes("P1001") ||
          e.message.includes("Can't reach database") ||
          e.message.includes("Connection") ||
          e.message.includes("ECONNRESET"));
      if (!transient || i === attempts) throw e;
      const wait = i * 2000;
      console.log(`    … connection hiccup on ${label}, retrying in ${wait / 1000}s`);
      await new Promise((r) => setTimeout(r, wait));
    }
  }
  throw new Error("unreachable");
}

/**
 * Finds or creates Internal Medicine → Fluids & Electrolytes.
 * Reuses an existing section rather than duplicating, so this seed is safe to
 * run more than once.
 */
async function ensureCategory(): Promise<string | null> {
  const existing = await withRetry(
    () => prisma.quizCategory.findUnique({ where: { slug: "cs-fluids-electrolytes" } }),
    "find fluids"
  );
  if (existing) {
    console.log("  · Section already exists: Internal Medicine → Fluids & Electrolytes");
    return existing.id;
  }

  const parent = await withRetry(
    () => prisma.quizCategory.findUnique({ where: { slug: "cs-internal-medicine" } }),
    "find parent"
  );
  if (!parent) {
    console.log('  ✗ Parent "cs-internal-medicine" not found — run seed-medical-taxonomy.ts first.');
    return null;
  }

  const created = await withRetry(
    () =>
      prisma.quizCategory.create({
        data: {
          slug: "cs-fluids-electrolytes",
          title: "Fluids & Electrolytes",
          description:
            "Prescribing intravenous fluid, sodium and potassium disorders, calcium and magnesium, acid-base interpretation, and rehydration in diarrhoeal illness.",
          overview:
            "The clinical counterpart to Renal & Fluid Balance: not how the kidney works, but what to hang, how much, how fast, and what to do when a result is dangerous. Fluid is prescribed more often than almost any drug and reviewed far less, and these sections treat it accordingly — including sustained attention to oral rehydration, which remains among the highest-impact interventions in medicine.",
          icon: "Droplet",
          parentId: parent.id,
          order: 8,
          published: true,
        },
      }),
    "create fluids"
  );
  console.log("  + Created section: Clinical Specialties → Internal Medicine → Fluids & Electrolytes");
  return created.id;
}

async function seedSet(o: {
  categoryId: string;
  slug: string;
  title: string;
  description: string;
  kind: string;
  timeLimitSeconds: number | null;
  difficulty: string;
  questions: Q[];
}) {
  const quiz = await withRetry(
    () =>
      prisma.quiz.upsert({
        where: { slug: o.slug },
        create: {
          slug: o.slug,
          title: o.title,
          description: o.description,
          categoryId: o.categoryId,
          kind: o.kind,
          timeLimitSeconds: o.timeLimitSeconds,
          passThreshold: 70,
          difficulty: o.difficulty,
          published: true,
        },
        update: {
          title: o.title,
          description: o.description,
          categoryId: o.categoryId,
          kind: o.kind,
          timeLimitSeconds: o.timeLimitSeconds,
        },
      }),
    `quiz ${o.slug}`
  );

  await withRetry(() => prisma.question.deleteMany({ where: { quizId: quiz.id } }), "clear questions");

  let order = 0;
  for (const q of o.questions) {
    const n = order++;
    const opts = shuffled(q.choices);
    await withRetry(
      () =>
        prisma.question.create({
          data: {
            quizId: quiz.id,
            type: "SINGLE",
            stem: q.stem,
            topic: q.topic,
            explanation: q.explanation,
            points: 1,
            order: n,
            choices: { create: opts.map((c, i) => ({ text: c.text, isCorrect: c.isCorrect, order: i })) },
          },
        }),
      `question ${n + 1} of ${o.title}`
    );
  }

  console.log(`  ✓ ${o.title} — ${o.questions.length} questions (answers shuffled)`);
}

async function main() {
  console.log("Seeding Fluids & Electrolytes…\n");
  const categoryId = await ensureCategory();
  if (!categoryId) return;

  await seedSet({
    categoryId,
    slug: "fluids-electrolytes-practice-set-1",
    title: "Fluids & Electrolytes — Practice Set 1",
    description:
      "Thirty questions on body fluid compartments, choosing and prescribing intravenous fluid, sodium and water disorders, bedside volume assessment and resuscitation, and fluid management in heart failure, DKA, refeeding and burns. Untimed.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Intermediate",
    questions: SET1,
  });

  await seedSet({
    categoryId,
    slug: "fluids-electrolytes-practice-set-2",
    title: "Fluids & Electrolytes — Practice Set 2",
    description:
      "Thirty fresh questions — no overlap with Set 1 — on potassium emergencies, calcium, magnesium and phosphate, systematic acid-base interpretation and its clinical application, and rehydration in childhood diarrhoeal illness. Untimed.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Intermediate",
    questions: SET2,
  });

  await seedSet({
    categoryId,
    slug: "fluids-electrolytes-exam-1",
    title: "Fluids & Electrolytes — Timed Exam 1",
    description:
      "Thirty questions in 40 minutes on compartments, fluid prescribing, sodium disorders and resuscitation. Feedback withheld until you submit.",
    kind: "EXAM",
    timeLimitSeconds: 40 * 60,
    difficulty: "Intermediate",
    questions: SET1,
  });

  await seedSet({
    categoryId,
    slug: "fluids-electrolytes-exam-2",
    title: "Fluids & Electrolytes — Timed Exam 2 (Comprehensive)",
    description:
      "All sixty questions in 75 minutes, covering fluid prescribing, every major electrolyte disorder, acid-base and rehydration. Sit this once both practice sets feel comfortable.",
    kind: "EXAM",
    timeLimitSeconds: 75 * 60,
    difficulty: "Advanced",
    questions: [...SET1, ...SET2],
  });

  console.log("\nDone. Editable in Admin → Question Bank.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
