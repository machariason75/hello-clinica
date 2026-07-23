/**
 * CONTENT WAVE 6 — Renal
 *
 * 75 original questions as EIGHT quizzes, matching the expanded Wave 5 shape:
 *
 *   Physiology  Set 1 (15) · Set 2 (15)     → fs-renal-physiology
 *   Clinical    Set 1 (15) · Set 2 (15)     → cs-nephrology
 *   Drugs       Set 1 (15)                  → fs-pharmacology
 *   Exams       Physiology (30) · Clinical (30) · Comprehensive (75)
 *
 * ⚠ Thresholds and first-line agents vary by national guideline and are revised
 * periodically. These test mechanism and principle. Review anything numerical
 * against local guidance. All editable in Admin → Question Bank.
 *
 * Run:  npx tsx prisma/seed-renal.ts
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Q = {
  stem: string;
  topic: string;
  explanation: string;
  choices: { text: string; isCorrect: boolean }[];
};

/* ═══════════ PHYSIOLOGY SET 1 ═══════════ */

const PHYS1: Q[] = [
  {
    stem: "What is the functional unit of the kidney?",
    topic: "Renal Structure",
    explanation:
      "The nephron — glomerulus, proximal tubule, loop of Henle, distal tubule and collecting duct. Each kidney holds around a million. Because nephrons are not replaced, chronic kidney disease reflects permanent loss, which is why prevention matters far more than treatment.",
    choices: [
      { text: "The nephron", isCorrect: true },
      { text: "The renal lobule", isCorrect: false },
      { text: "The collecting duct alone", isCorrect: false },
      { text: "The renal pyramid", isCorrect: false },
    ],
  },
  {
    stem: "Which force principally drives glomerular filtration?",
    topic: "Glomerular Filtration",
    explanation:
      "Glomerular capillary hydrostatic pressure, opposed by capsular hydrostatic pressure and by plasma oncotic pressure. Because the efferent arteriole is narrower than the afferent, pressure stays high enough for filtration along the whole capillary — an arrangement unique to the glomerulus.",
    choices: [
      { text: "Glomerular capillary hydrostatic pressure", isCorrect: true },
      { text: "Plasma oncotic pressure", isCorrect: false },
      { text: "Bowman's capsule hydrostatic pressure", isCorrect: false },
      { text: "Tubular osmotic pressure", isCorrect: false },
    ],
  },
  {
    stem: "How does constriction of the efferent arteriole affect glomerular filtration rate?",
    topic: "Glomerular Filtration",
    explanation:
      "It raises GFR by increasing pressure within the glomerular capillary — flow out is restricted while flow in continues. Angiotensin II does exactly this, which is how GFR is defended in hypovolaemia. It also explains why an ACE inhibitor can drop GFR sharply in renal artery stenosis: remove that constriction and filtration pressure collapses.",
    choices: [
      { text: "It raises GFR by increasing glomerular capillary pressure", isCorrect: true },
      { text: "It lowers GFR by reducing renal blood flow only", isCorrect: false },
      { text: "It has no effect on GFR", isCorrect: false },
      { text: "It abolishes filtration entirely", isCorrect: false },
    ],
  },
  {
    stem: "Why is creatinine used to estimate GFR?",
    topic: "Glomerular Filtration",
    explanation:
      "It is produced at a fairly constant rate from muscle and is freely filtered with only minor tubular secretion. Its limitations follow from that: it depends on muscle mass, so it overestimates function in the frail and elderly, and it rises only after substantial nephron loss — GFR can fall by half before creatinine leaves the normal range.",
    choices: [
      { text: "It is produced at a steady rate and freely filtered", isCorrect: true },
      { text: "It is entirely secreted by the tubule", isCorrect: false },
      { text: "It is completely reabsorbed", isCorrect: false },
      { text: "It is unaffected by muscle mass", isCorrect: false },
    ],
  },
  {
    stem: "Which substance is used for the most accurate measurement of GFR?",
    topic: "Glomerular Filtration",
    explanation:
      "Inulin — freely filtered, neither reabsorbed nor secreted, so its clearance equals GFR exactly. It requires continuous infusion and timed collections, so it is a research standard rather than a clinical test. Creatinine clearance slightly overestimates GFR because of tubular secretion.",
    choices: [
      { text: "Inulin", isCorrect: true },
      { text: "Urea", isCorrect: false },
      { text: "Glucose", isCorrect: false },
      { text: "Para-aminohippuric acid", isCorrect: false },
    ],
  },
  {
    stem: "Where is the majority of filtered sodium reabsorbed?",
    topic: "Tubular Transport",
    explanation:
      "The proximal convoluted tubule, around 65%, along with water, glucose, amino acids and bicarbonate. Reabsorption here is isotonic — solute and water move together, so tubular fluid leaves at roughly plasma osmolality. Concentration and dilution happen further along.",
    choices: [
      { text: "The proximal convoluted tubule", isCorrect: true },
      { text: "The thick ascending limb", isCorrect: false },
      { text: "The distal convoluted tubule", isCorrect: false },
      { text: "The collecting duct", isCorrect: false },
    ],
  },
  {
    stem: "Why does glucose appear in the urine once blood glucose exceeds about 10 mmol/L?",
    topic: "Tubular Transport",
    explanation:
      "The sodium-glucose co-transporters in the proximal tubule are saturable. Below the transport maximum all filtered glucose is reclaimed; above it the excess is excreted, dragging water osmotically — hence the polyuria and thirst of uncontrolled diabetes. SGLT2 inhibitors exploit this deliberately.",
    choices: [
      { text: "Proximal glucose transporters are saturated above their transport maximum", isCorrect: true },
      { text: "Glucose is actively secreted at high concentrations", isCorrect: false },
      { text: "The glomerulus becomes permeable to glucose", isCorrect: false },
      { text: "Insulin blocks tubular reabsorption", isCorrect: false },
    ],
  },
  {
    stem: "What is the function of the thick ascending limb of the loop of Henle?",
    topic: "Tubular Transport",
    explanation:
      "It reabsorbs sodium, potassium and chloride via the Na-K-2Cl co-transporter while remaining impermeable to water — so it dilutes tubular fluid and builds the medullary concentration gradient. That gradient is what allows the collecting duct to concentrate urine, which is why loop diuretics impair concentrating ability so profoundly.",
    choices: [
      { text: "Salt reabsorption without water, generating the medullary gradient", isCorrect: true },
      { text: "Isotonic reabsorption of salt and water together", isCorrect: false },
      { text: "Secretion of hydrogen ions", isCorrect: false },
      { text: "Final concentration of urine", isCorrect: false },
    ],
  },
  {
    stem: "How does the countercurrent mechanism allow the kidney to concentrate urine?",
    topic: "Urine Concentration",
    explanation:
      "The loop of Henle establishes a hyperosmolar medullary interstitium, and the vasa recta preserve it by running countercurrent rather than washing it out. Water then leaves the collecting duct passively down that gradient whenever ADH has inserted aquaporins. Without the gradient, ADH alone could not concentrate anything.",
    choices: [
      { text: "The loop builds a hyperosmolar medulla that draws water from the collecting duct", isCorrect: true },
      { text: "The collecting duct actively pumps water out", isCorrect: false },
      { text: "The glomerulus filters less water when dehydrated", isCorrect: false },
      { text: "Sodium is actively secreted into the medulla", isCorrect: false },
    ],
  },
  {
    stem: "What is the action of antidiuretic hormone on the collecting duct?",
    topic: "Urine Concentration",
    explanation:
      "It inserts aquaporin-2 channels into the apical membrane, making it water-permeable so water follows the medullary gradient. Its absence gives dilute urine — central diabetes insipidus if ADH isn't produced, nephrogenic if the duct cannot respond.",
    choices: [
      { text: "It inserts aquaporin-2 channels, allowing water reabsorption", isCorrect: true },
      { text: "It actively pumps sodium into the interstitium", isCorrect: false },
      { text: "It increases glomerular filtration", isCorrect: false },
      { text: "It stimulates renin release", isCorrect: false },
    ],
  },
  {
    stem: "Which stimulus is the most potent trigger for ADH release?",
    topic: "Urine Concentration",
    explanation:
      "Rising plasma osmolality, detected by hypothalamic osmoreceptors — sensitive to changes of only 1–2%. Significant hypovolaemia also triggers release through baroreceptors, and volume overrides osmolality when the two conflict: the body defends circulating volume even at the cost of hyponatraemia.",
    choices: [
      { text: "Increased plasma osmolality", isCorrect: true },
      { text: "Decreased plasma potassium", isCorrect: false },
      { text: "Increased plasma calcium", isCorrect: false },
      { text: "Decreased plasma glucose", isCorrect: false },
    ],
  },
  {
    stem: "What is the principal action of aldosterone?",
    topic: "Hormonal Control",
    explanation:
      "It increases sodium reabsorption and potassium secretion in the distal nephron and collecting duct, with water following sodium. It also promotes hydrogen ion secretion — which is why excess causes hypokalaemic metabolic alkalosis and hypertension, and deficiency the reverse.",
    choices: [
      { text: "Sodium reabsorption with potassium and hydrogen secretion distally", isCorrect: true },
      { text: "Water reabsorption independent of sodium", isCorrect: false },
      { text: "Increased glomerular filtration rate", isCorrect: false },
      { text: "Calcium reabsorption in the proximal tubule", isCorrect: false },
    ],
  },
  {
    stem: "Which hormone produced by the kidney stimulates red cell production?",
    topic: "Hormonal Control",
    explanation:
      "Erythropoietin, made by peritubular interstitial cells in response to hypoxia. Its loss in chronic kidney disease produces a normochromic normocytic anaemia that iron alone will not correct — which is why erythropoiesis-stimulating agents are used.",
    choices: [
      { text: "Erythropoietin", isCorrect: true },
      { text: "Renin", isCorrect: false },
      { text: "Aldosterone", isCorrect: false },
      { text: "Atrial natriuretic peptide", isCorrect: false },
    ],
  },
  {
    stem: "What is the kidney's role in vitamin D metabolism?",
    topic: "Hormonal Control",
    explanation:
      "It performs the final 1-alpha-hydroxylation, converting 25-hydroxyvitamin D to the active 1,25-dihydroxy form. Losing this step in chronic kidney disease reduces calcium absorption, causing hypocalcaemia and secondary hyperparathyroidism — the basis of renal bone disease.",
    choices: [
      { text: "It carries out 1-alpha-hydroxylation to the active form", isCorrect: true },
      { text: "It synthesises vitamin D from cholesterol", isCorrect: false },
      { text: "It stores vitamin D for later release", isCorrect: false },
      { text: "It degrades excess vitamin D only", isCorrect: false },
    ],
  },
  {
    stem: "How does atrial natriuretic peptide oppose the renin-angiotensin system?",
    topic: "Hormonal Control",
    explanation:
      "Released from atrial myocytes in response to stretch, it promotes sodium and water excretion, dilates the afferent arteriole to raise GFR, and inhibits renin and aldosterone. It is the body's counter-regulatory response to volume overload — and its measurement as BNP is used clinically in heart failure.",
    choices: [
      { text: "It promotes natriuresis and inhibits renin and aldosterone", isCorrect: true },
      { text: "It stimulates aldosterone release", isCorrect: false },
      { text: "It constricts the afferent arteriole", isCorrect: false },
      { text: "It increases ADH secretion", isCorrect: false },
    ],
  },
];

/* ═══════════ PHYSIOLOGY SET 2 ═══════════ */

const PHYS2: Q[] = [
  {
    stem: "How does the kidney reclaim filtered bicarbonate?",
    topic: "Acid-Base Handling",
    explanation:
      "Indirectly, in the proximal tubule. Secreted hydrogen ions combine with filtered bicarbonate to form carbonic acid, which carbonic anhydrase converts to CO2 and water for diffusion into the cell, where bicarbonate is regenerated. Acetazolamide blocks this, causing bicarbonate loss and a metabolic acidosis.",
    choices: [
      { text: "Via hydrogen secretion and carbonic anhydrase in the proximal tubule", isCorrect: true },
      { text: "By direct transport of bicarbonate across the apical membrane", isCorrect: false },
      { text: "By secretion in the collecting duct", isCorrect: false },
      { text: "Bicarbonate is not reclaimed", isCorrect: false },
    ],
  },
  {
    stem: "How does the kidney excrete acid beyond simply losing hydrogen ions?",
    topic: "Acid-Base Handling",
    explanation:
      "By buffering hydrogen with phosphate (titratable acid) and by generating ammonium from glutamine. Free hydrogen would drop urine pH to unsustainable levels long before enough acid was cleared, so buffers do most of the work — and ammonium production increases substantially in chronic acidosis.",
    choices: [
      { text: "By buffering with phosphate and by generating ammonium", isCorrect: true },
      { text: "By excreting free hydrogen ions alone", isCorrect: false },
      { text: "By exhaling carbon dioxide", isCorrect: false },
      { text: "By retaining chloride", isCorrect: false },
    ],
  },
  {
    stem: "A patient has a normal anion gap metabolic acidosis with a urine pH persistently above 5.5. Which condition is suggested?",
    topic: "Acid-Base Handling",
    explanation:
      "Distal (type 1) renal tubular acidosis — the collecting duct cannot secrete hydrogen, so urine cannot be acidified despite systemic acidosis. It is associated with hypokalaemia and calcium phosphate stones. Proximal (type 2) RTA involves bicarbonate wasting and the urine can still acidify once bicarbonate is depleted.",
    choices: [
      { text: "Distal (type 1) renal tubular acidosis", isCorrect: true },
      { text: "Diabetic ketoacidosis", isCorrect: false },
      { text: "Lactic acidosis", isCorrect: false },
      { text: "Respiratory acidosis", isCorrect: false },
    ],
  },
  {
    stem: "Which factor most strongly stimulates potassium secretion in the distal nephron?",
    topic: "Potassium Handling",
    explanation:
      "Aldosterone, alongside increased distal sodium delivery and high tubular flow. This explains several clinical patterns at once: loop and thiazide diuretics cause hypokalaemia by raising distal flow and delivery, while aldosterone antagonists and ACE inhibitors do the opposite.",
    choices: [
      { text: "Aldosterone, with increased distal sodium delivery and flow", isCorrect: true },
      { text: "Reduced tubular flow rate", isCorrect: false },
      { text: "Metabolic acidosis", isCorrect: false },
      { text: "Low plasma potassium", isCorrect: false },
    ],
  },
  {
    stem: "Why does acidosis tend to raise serum potassium?",
    topic: "Potassium Handling",
    explanation:
      "Hydrogen ions move into cells and potassium moves out to maintain electroneutrality. The measured potassium therefore overstates total body stores — a patient in diabetic ketoacidosis often has a normal or high serum potassium despite profound whole-body depletion, which falls sharply once insulin is started.",
    choices: [
      { text: "Hydrogen enters cells and potassium shifts out in exchange", isCorrect: true },
      { text: "The kidney stops excreting potassium entirely", isCorrect: false },
      { text: "Potassium binds to plasma proteins", isCorrect: false },
      { text: "Aldosterone secretion increases", isCorrect: false },
    ],
  },
  {
    stem: "Which ECG change is the earliest sign of hyperkalaemia?",
    topic: "Potassium Handling",
    explanation:
      "Tall, peaked T waves. As potassium rises further the PR interval lengthens, P waves flatten and the QRS widens toward a sine wave and arrest. The ECG matters more than the number — a patient with ECG changes needs calcium immediately, whatever the laboratory value.",
    choices: [
      { text: "Tall, peaked T waves", isCorrect: true },
      { text: "Prominent U waves", isCorrect: false },
      { text: "ST elevation", isCorrect: false },
      { text: "Shortened PR interval", isCorrect: false },
    ],
  },
  {
    stem: "How does the kidney handle calcium in response to parathyroid hormone?",
    topic: "Calcium & Phosphate",
    explanation:
      "PTH increases calcium reabsorption in the distal tubule while reducing phosphate reabsorption proximally, and stimulates 1-alpha-hydroxylase to activate vitamin D. Raising calcium and lowering phosphate simultaneously prevents calcium phosphate precipitating in tissue.",
    choices: [
      { text: "It increases calcium reabsorption and reduces phosphate reabsorption", isCorrect: true },
      { text: "It increases both calcium and phosphate reabsorption", isCorrect: false },
      { text: "It reduces calcium reabsorption", isCorrect: false },
      { text: "It has no renal action", isCorrect: false },
    ],
  },
  {
    stem: "Why does chronic kidney disease cause secondary hyperparathyroidism?",
    topic: "Calcium & Phosphate",
    explanation:
      "Phosphate is retained and active vitamin D production falls, so calcium drops — and the parathyroid responds with sustained PTH secretion. Persistent stimulation drives bone resorption and vascular calcification, which is why phosphate binders and vitamin D analogues are used well before dialysis.",
    choices: [
      { text: "Phosphate retention and reduced vitamin D activation lower calcium", isCorrect: true },
      { text: "The parathyroid glands become malignant", isCorrect: false },
      { text: "Calcium is over-absorbed from the gut", isCorrect: false },
      { text: "PTH is no longer cleared by the kidney", isCorrect: false },
    ],
  },
  {
    stem: "What does a fractional excretion of sodium below 1% suggest in acute kidney injury?",
    topic: "AKI Assessment",
    explanation:
      "A pre-renal cause — the tubules are intact and avidly conserving sodium in response to reduced perfusion. Above 2% suggests tubular injury, where damaged tubules cannot reabsorb sodium. The test is invalid if diuretics have been given, since they force sodium loss regardless.",
    choices: [
      { text: "A pre-renal cause with intact tubular function", isCorrect: true },
      { text: "Acute tubular necrosis", isCorrect: false },
      { text: "Post-renal obstruction", isCorrect: false },
      { text: "Glomerulonephritis", isCorrect: false },
    ],
  },
  {
    stem: "Why does a urea-to-creatinine ratio above 100:1 suggest a pre-renal cause?",
    topic: "AKI Assessment",
    explanation:
      "Urea is passively reabsorbed with sodium and water, so in hypovolaemia it rises disproportionately to creatinine, which is not reabsorbed. Gastrointestinal bleeding raises urea too, through absorbed protein — worth remembering before assuming volume depletion.",
    choices: [
      { text: "Urea is reabsorbed with sodium and water in hypovolaemia; creatinine is not", isCorrect: true },
      { text: "Creatinine production stops in dehydration", isCorrect: false },
      { text: "Urea is actively secreted when volume is low", isCorrect: false },
      { text: "The ratio has no diagnostic value", isCorrect: false },
    ],
  },
  {
    stem: "What is renal autoregulation, and over what pressure range does it operate?",
    topic: "Renal Blood Flow",
    explanation:
      "It maintains near-constant renal blood flow and GFR across a mean arterial pressure of roughly 80–180 mmHg, via a myogenic response and tubuloglomerular feedback. Below that range filtration falls sharply — which is why hypotension causes acute kidney injury, and why the range shifts upward in chronic hypertension.",
    choices: [
      { text: "Constant blood flow and GFR across roughly 80–180 mmHg mean pressure", isCorrect: true },
      { text: "Constant flow at any blood pressure whatsoever", isCorrect: false },
      { text: "It operates only above 200 mmHg", isCorrect: false },
      { text: "It regulates urine output rather than blood flow", isCorrect: false },
    ],
  },
  {
    stem: "What is tubuloglomerular feedback?",
    topic: "Renal Blood Flow",
    explanation:
      "The macula densa senses sodium chloride delivery to the distal tubule and adjusts afferent arteriolar tone accordingly — high delivery causes constriction and reduces GFR. It protects against salt wasting when filtration runs ahead of reabsorptive capacity, and it is one mechanism by which NSAIDs impair renal function.",
    choices: [
      { text: "The macula densa adjusts afferent tone according to distal salt delivery", isCorrect: true },
      { text: "The glomerulus signals the collecting duct to retain water", isCorrect: false },
      { text: "Tubular cells secrete renin directly into the tubule", isCorrect: false },
      { text: "Filtration increases when distal sodium rises", isCorrect: false },
    ],
  },
  {
    stem: "Why do NSAIDs reduce GFR in patients dependent on prostaglandins?",
    topic: "Renal Blood Flow",
    explanation:
      "Prostaglandins dilate the afferent arteriole. In hypovolaemia, heart failure or cirrhosis, that dilatation is what sustains filtration against high angiotensin tone. Blocking it removes the support and GFR falls — which is why NSAIDs with an ACE inhibitor and a diuretic is such a well-recognised hazard.",
    choices: [
      { text: "They block prostaglandin-mediated afferent dilatation", isCorrect: true },
      { text: "They constrict the efferent arteriole", isCorrect: false },
      { text: "They are directly toxic to glomerular cells within hours", isCorrect: false },
      { text: "They increase ADH secretion", isCorrect: false },
    ],
  },
  {
    stem: "What proportion of resting cardiac output does the kidney receive?",
    topic: "Renal Blood Flow",
    explanation:
      "About 20–25%, far beyond its metabolic needs, because the flow exists to support filtration rather than to feed the tissue. That high perfusion is also why the kidney is exposed to any circulating toxin or drug — and why it is among the first organs to suffer in shock.",
    choices: [
      { text: "About 20–25%", isCorrect: true },
      { text: "About 5%", isCorrect: false },
      { text: "About 50%", isCorrect: false },
      { text: "About 60%", isCorrect: false },
    ],
  },
  {
    stem: "Which part of the nephron is most vulnerable to ischaemic injury, and why?",
    topic: "Renal Blood Flow",
    explanation:
      "The proximal tubule and the thick ascending limb in the outer medulla. They perform the most active transport, so oxygen demand is highest, while the medulla is relatively hypoxic even normally because of countercurrent oxygen shunting. That combination makes acute tubular necrosis the commonest intrinsic AKI.",
    choices: [
      { text: "Proximal tubule and outer medullary thick ascending limb — high demand, low oxygen", isCorrect: true },
      { text: "The glomerulus, being first in line", isCorrect: false },
      { text: "The collecting duct, being furthest downstream", isCorrect: false },
      { text: "All parts are affected equally", isCorrect: false },
    ],
  },
];

/* ═══════════ CLINICAL SET 1 ═══════════ */

const CLIN1: Q[] = [
  {
    stem: "An elderly patient on an ACE inhibitor and a diuretic develops vomiting and a rising creatinine. What is the likely mechanism?",
    topic: "Acute Kidney Injury",
    explanation:
      "Pre-renal AKI from volume depletion, compounded by loss of efferent tone from the ACE inhibitor. The 'triple whammy' — ACE inhibitor, diuretic and NSAID — removes both the afferent and efferent adaptations that defend GFR. Withholding these drugs during intercurrent illness prevents a great deal of avoidable injury.",
    choices: [
      { text: "Pre-renal AKI with loss of efferent arteriolar compensation", isCorrect: true },
      { text: "Acute glomerulonephritis", isCorrect: false },
      { text: "Obstructive uropathy", isCorrect: false },
      { text: "Rhabdomyolysis", isCorrect: false },
    ],
  },
  {
    stem: "A patient found on the floor after a long lie has dark urine, a very high creatine kinase and AKI. What is the diagnosis?",
    topic: "Acute Kidney Injury",
    explanation:
      "Rhabdomyolysis. Myoglobin released from damaged muscle is directly tubulotoxic and obstructs tubules, while hyperkalaemia from cell lysis threatens the heart. Aggressive fluid resuscitation is the priority, and dipstick 'blood' without red cells on microscopy is the classic clue.",
    choices: [
      { text: "Rhabdomyolysis with myoglobinuric AKI", isCorrect: true },
      { text: "Haemolytic anaemia", isCorrect: false },
      { text: "Acute interstitial nephritis", isCorrect: false },
      { text: "Post-streptococcal glomerulonephritis", isCorrect: false },
    ],
  },
  {
    stem: "An elderly man has anuria, a palpable bladder and a rising creatinine. What is the immediate management?",
    topic: "Acute Kidney Injury",
    explanation:
      "Urinary catheterisation. This is post-renal AKI from obstruction, and relieving it is both diagnostic and therapeutic. Obstruction should be excluded early in any AKI because it is rapidly reversible — and anticipate a post-obstructive diuresis afterwards requiring careful fluid replacement.",
    choices: [
      { text: "Catheterise to relieve obstruction", isCorrect: true },
      { text: "Start high-dose diuretics", isCorrect: false },
      { text: "Begin urgent dialysis", isCorrect: false },
      { text: "Give intravenous fluids and observe overnight", isCorrect: false },
    ],
  },
  {
    stem: "Which finding is an indication for urgent dialysis in acute kidney injury?",
    topic: "Acute Kidney Injury",
    explanation:
      "Refractory hyperkalaemia, alongside refractory acidosis, refractory fluid overload, uraemic pericarditis or encephalopathy, and certain poisonings. The word that matters is refractory — dialysis is for what medical management has failed to control, not for a number in isolation.",
    choices: [
      { text: "Hyperkalaemia unresponsive to medical treatment", isCorrect: true },
      { text: "A creatinine above any fixed threshold", isCorrect: false },
      { text: "Any degree of oliguria", isCorrect: false },
      { text: "Proteinuria on dipstick", isCorrect: false },
    ],
  },
  {
    stem: "A patient develops AKI with fever, rash and eosinophilia days after starting a new antibiotic. What is the likely diagnosis?",
    topic: "Tubulointerstitial Disease",
    explanation:
      "Acute interstitial nephritis — a hypersensitivity reaction, classically to penicillins, NSAIDs or proton pump inhibitors. White cell casts and sterile pyuria support it. The essential treatment is stopping the offending drug; steroids are sometimes added if recovery stalls.",
    choices: [
      { text: "Acute interstitial nephritis", isCorrect: true },
      { text: "Acute tubular necrosis", isCorrect: false },
      { text: "Rapidly progressive glomerulonephritis", isCorrect: false },
      { text: "Renal artery stenosis", isCorrect: false },
    ],
  },
  {
    stem: "A child develops facial oedema, cola-coloured urine and hypertension two weeks after a sore throat. What is the diagnosis?",
    topic: "Glomerular Disease",
    explanation:
      "Post-streptococcal glomerulonephritis — immune complex deposition following group A streptococcal infection. It produces a nephritic picture: haematuria, hypertension, oedema and mild proteinuria. Complement C3 is low and recovery in children is usually complete.",
    choices: [
      { text: "Post-streptococcal glomerulonephritis", isCorrect: true },
      { text: "Minimal change disease", isCorrect: false },
      { text: "Acute pyelonephritis", isCorrect: false },
      { text: "Henoch-Schönlein nephritis", isCorrect: false },
    ],
  },
  {
    stem: "What distinguishes nephrotic from nephritic syndrome?",
    topic: "Glomerular Disease",
    explanation:
      "Nephrotic syndrome is heavy proteinuria with hypoalbuminaemia, oedema and hyperlipidaemia — a filtration barrier that leaks protein. Nephritic syndrome is haematuria, hypertension and reduced GFR — an inflamed glomerulus. Separating them narrows the differential immediately.",
    choices: [
      { text: "Nephrotic is heavy proteinuria; nephritic is haematuria with hypertension", isCorrect: true },
      { text: "Nephrotic always involves haematuria", isCorrect: false },
      { text: "Nephritic causes greater protein loss", isCorrect: false },
      { text: "They are the same entity", isCorrect: false },
    ],
  },
  {
    stem: "Which is the commonest cause of nephrotic syndrome in young children, and how does it respond to treatment?",
    topic: "Glomerular Disease",
    explanation:
      "Minimal change disease, which responds well to corticosteroids. Light microscopy is normal and electron microscopy shows podocyte foot process effacement — hence the name. In adults the differential is broader, so biopsy is more often required before treating.",
    choices: [
      { text: "Minimal change disease, usually steroid-responsive", isCorrect: true },
      { text: "Membranous nephropathy, requiring dialysis", isCorrect: false },
      { text: "IgA nephropathy, needing transplantation", isCorrect: false },
      { text: "Amyloidosis, treated with antibiotics", isCorrect: false },
    ],
  },
  {
    stem: "A young adult has recurrent visible haematuria occurring within a day or two of upper respiratory infections. What is the likely diagnosis?",
    topic: "Glomerular Disease",
    explanation:
      "IgA nephropathy, the commonest primary glomerulonephritis. The short interval distinguishes it from post-streptococcal disease, where haematuria follows one to three weeks later. Prognosis varies widely, and proteinuria is the strongest predictor of progression.",
    choices: [
      { text: "IgA nephropathy", isCorrect: true },
      { text: "Post-streptococcal glomerulonephritis", isCorrect: false },
      { text: "Minimal change disease", isCorrect: false },
      { text: "Renal cell carcinoma", isCorrect: false },
    ],
  },
  {
    stem: "Which two conditions account for most chronic kidney disease worldwide?",
    topic: "Chronic Kidney Disease",
    explanation:
      "Diabetes and hypertension. Both damage the glomerulus slowly and silently, which is why screening with urine albumin-to-creatinine ratio and eGFR matters — and why blood pressure and glycaemic control are the principal interventions that alter the trajectory.",
    choices: [
      { text: "Diabetes mellitus and hypertension", isCorrect: true },
      { text: "Glomerulonephritis and polycystic disease", isCorrect: false },
      { text: "Recurrent infection and stones", isCorrect: false },
      { text: "NSAID use and dehydration", isCorrect: false },
    ],
  },
  {
    stem: "How is chronic kidney disease staged?",
    topic: "Chronic Kidney Disease",
    explanation:
      "By eGFR category (G1 to G5) combined with albuminuria category (A1 to A3), persisting beyond three months. Albuminuria is included because it predicts progression and cardiovascular risk independently of eGFR — two patients with identical filtration can have very different outlooks.",
    choices: [
      { text: "By eGFR category together with albuminuria, sustained over three months", isCorrect: true },
      { text: "By creatinine alone", isCorrect: false },
      { text: "By urine output over 24 hours", isCorrect: false },
      { text: "By kidney size on ultrasound", isCorrect: false },
    ],
  },
  {
    stem: "Why does anaemia develop in chronic kidney disease?",
    topic: "Chronic Kidney Disease",
    explanation:
      "Reduced erythropoietin production, compounded by absolute or functional iron deficiency, shortened red cell survival and inflammation. It is normochromic and normocytic. Iron status must be corrected before or alongside erythropoiesis-stimulating agents, or they will not work.",
    choices: [
      { text: "Reduced erythropoietin production, often with iron deficiency", isCorrect: true },
      { text: "Vitamin B12 deficiency from dietary restriction", isCorrect: false },
      { text: "Bone marrow infiltration", isCorrect: false },
      { text: "Excess erythropoietin causing exhaustion", isCorrect: false },
    ],
  },
  {
    stem: "A patient with CKD has a phosphate of 2.4 mmol/L. Which intervention is appropriate?",
    topic: "Chronic Kidney Disease",
    explanation:
      "Dietary phosphate restriction with phosphate binders taken WITH meals — the timing matters, because they work by binding phosphate in the gut rather than acting systemically. Uncontrolled hyperphosphataemia drives secondary hyperparathyroidism and vascular calcification.",
    choices: [
      { text: "Dietary restriction plus phosphate binders taken with meals", isCorrect: true },
      { text: "Intravenous calcium gluconate", isCorrect: false },
      { text: "Phosphate supplementation", isCorrect: false },
      { text: "Loop diuretics", isCorrect: false },
    ],
  },
  {
    stem: "A patient presents with loin-to-groin colicky pain and visible haematuria. What is the likely diagnosis?",
    topic: "Urolithiasis",
    explanation:
      "Ureteric colic from a stone. Non-contrast CT of the kidneys, ureters and bladder is the imaging of choice. Most small stones pass with analgesia and fluids — NSAIDs are particularly effective — but fever with obstruction is an emergency requiring urgent decompression.",
    choices: [
      { text: "Ureteric colic from urolithiasis", isCorrect: true },
      { text: "Acute pyelonephritis", isCorrect: false },
      { text: "Renal cell carcinoma", isCorrect: false },
      { text: "Bladder outflow obstruction", isCorrect: false },
    ],
  },
  {
    stem: "Which stone type is the most common, and what dietary advice reduces recurrence?",
    topic: "Urolithiasis",
    explanation:
      "Calcium oxalate. High fluid intake is the single most effective measure. Counterintuitively, calcium should NOT be restricted — dietary calcium binds oxalate in the gut, and restricting it increases oxalate absorption and stone risk. Reducing sodium and oxalate-rich foods helps.",
    choices: [
      { text: "Calcium oxalate — increase fluids, do not restrict dietary calcium", isCorrect: true },
      { text: "Calcium oxalate — restrict all dietary calcium strictly", isCorrect: false },
      { text: "Uric acid — increase protein intake", isCorrect: false },
      { text: "Struvite — restrict fluids", isCorrect: false },
    ],
  },
];

/* ═══════════ CLINICAL SET 2 ═══════════ */

const CLIN2: Q[] = [
  {
    stem: "A woman has dysuria, frequency and suprapubic discomfort without fever or loin pain. What is the diagnosis?",
    topic: "Urinary Tract Infection",
    explanation:
      "Uncomplicated lower urinary tract infection — cystitis. Fever, rigors or loin tenderness would indicate pyelonephritis and a different treatment approach. Short-course nitrofurantoin or trimethoprim is typical, guided by local resistance patterns.",
    choices: [
      { text: "Uncomplicated cystitis", isCorrect: true },
      { text: "Acute pyelonephritis", isCorrect: false },
      { text: "Renal colic", isCorrect: false },
      { text: "Interstitial nephritis", isCorrect: false },
    ],
  },
  {
    stem: "Why is asymptomatic bacteriuria treated in pregnancy but not in most other adults?",
    topic: "Urinary Tract Infection",
    explanation:
      "In pregnancy it carries a substantial risk of progression to pyelonephritis, preterm labour and low birth weight, so treatment is worthwhile. In most other adults, treating it offers no benefit and drives resistance and C. difficile — one of the clearest examples of good stewardship being to do nothing.",
    choices: [
      { text: "In pregnancy it risks pyelonephritis and preterm birth; elsewhere treatment adds no benefit", isCorrect: true },
      { text: "Pregnant women clear bacteria more slowly", isCorrect: false },
      { text: "Antibiotics are safer in pregnancy", isCorrect: false },
      { text: "It should in fact be treated in everyone", isCorrect: false },
    ],
  },
  {
    stem: "A patient with pyelonephritis remains febrile after 72 hours of appropriate antibiotics. What should be done?",
    topic: "Urinary Tract Infection",
    explanation:
      "Image the urinary tract to look for obstruction or abscess. Persistent fever on adequate therapy suggests something antibiotics cannot reach — a collection or an obstructed, infected system, which needs drainage rather than a change of drug.",
    choices: [
      { text: "Imaging to exclude obstruction or abscess", isCorrect: true },
      { text: "Simply extend the same antibiotic course", isCorrect: false },
      { text: "Stop antibiotics and observe", isCorrect: false },
      { text: "Begin dialysis", isCorrect: false },
    ],
  },
  {
    stem: "A young hypertensive patient has an abdominal bruit and a fall in eGFR after starting an ACE inhibitor. What should be suspected?",
    topic: "Renovascular Disease",
    explanation:
      "Renal artery stenosis. The stenotic kidney depends on angiotensin II–mediated efferent constriction to maintain filtration; removing it causes GFR to fall sharply. Bilateral stenosis is a contraindication to ACE inhibitors, and fibromuscular dysplasia is the usual cause in the young.",
    choices: [
      { text: "Renal artery stenosis", isCorrect: true },
      { text: "Essential hypertension", isCorrect: false },
      { text: "Phaeochromocytoma", isCorrect: false },
      { text: "Conn's syndrome", isCorrect: false },
    ],
  },
  {
    stem: "A patient with hypertension and hypokalaemia has a raised aldosterone-to-renin ratio. What is the likely diagnosis?",
    topic: "Secondary Hypertension",
    explanation:
      "Primary hyperaldosteronism (Conn's syndrome). Autonomous aldosterone secretion suppresses renin, so the ratio is high — a low renin with a high aldosterone is the signature. It is one of the commonest treatable causes of secondary hypertension and is frequently missed.",
    choices: [
      { text: "Primary hyperaldosteronism", isCorrect: true },
      { text: "Renal artery stenosis", isCorrect: false },
      { text: "Cushing's syndrome", isCorrect: false },
      { text: "Phaeochromocytoma", isCorrect: false },
    ],
  },
  {
    stem: "A patient has bilateral flank masses, hypertension and a family history of kidney failure. What is the likely diagnosis?",
    topic: "Inherited Kidney Disease",
    explanation:
      "Autosomal dominant polycystic kidney disease. Extrarenal features matter: hepatic cysts, mitral valve prolapse, and intracranial aneurysms — which is why a family history of subarachnoid haemorrhage prompts screening. Tolvaptan can slow progression in selected patients.",
    choices: [
      { text: "Autosomal dominant polycystic kidney disease", isCorrect: true },
      { text: "Bilateral renal cell carcinoma", isCorrect: false },
      { text: "Hydronephrosis", isCorrect: false },
      { text: "Amyloidosis", isCorrect: false },
    ],
  },
  {
    stem: "A young man has haematuria, progressive renal failure and sensorineural deafness. Which condition fits?",
    topic: "Inherited Kidney Disease",
    explanation:
      "Alport syndrome — a defect in type IV collagen affecting the glomerular basement membrane, cochlea and eye. Usually X-linked, so males are affected more severely. The combination of nephritis with deafness is the recognisable pattern.",
    choices: [
      { text: "Alport syndrome", isCorrect: true },
      { text: "Polycystic kidney disease", isCorrect: false },
      { text: "IgA nephropathy", isCorrect: false },
      { text: "Goodpasture disease", isCorrect: false },
    ],
  },
  {
    stem: "A patient has haemoptysis with rapidly progressive glomerulonephritis and anti-GBM antibodies. What is the diagnosis?",
    topic: "Glomerular Disease",
    explanation:
      "Goodpasture disease (anti-glomerular basement membrane disease). Antibodies target type IV collagen shared by glomerular and alveolar basement membranes, hence lung and kidney together. Treatment is plasma exchange with immunosuppression, and delay costs renal function permanently.",
    choices: [
      { text: "Anti-GBM disease (Goodpasture)", isCorrect: true },
      { text: "Granulomatosis with polyangiitis", isCorrect: false },
      { text: "Systemic lupus erythematosus", isCorrect: false },
      { text: "IgA nephropathy", isCorrect: false },
    ],
  },
  {
    stem: "A patient has sinusitis, pulmonary nodules, glomerulonephritis and positive c-ANCA. What is the likely diagnosis?",
    topic: "Glomerular Disease",
    explanation:
      "Granulomatosis with polyangiitis. The upper airway, lung and kidney triad with c-ANCA (anti-PR3) is characteristic. Untreated it progresses rapidly, so immunosuppression is started urgently — this is a diagnosis where speed materially changes the outcome.",
    choices: [
      { text: "Granulomatosis with polyangiitis", isCorrect: true },
      { text: "Anti-GBM disease", isCorrect: false },
      { text: "Minimal change disease", isCorrect: false },
      { text: "Diabetic nephropathy", isCorrect: false },
    ],
  },
  {
    stem: "Which finding is the earliest marker of diabetic nephropathy?",
    topic: "Diabetic Kidney Disease",
    explanation:
      "Moderately increased albuminuria — formerly microalbuminuria — detected by urine albumin-to-creatinine ratio. It precedes any rise in creatinine by years, which is exactly why annual screening is recommended: the window for intervention is before conventional tests become abnormal.",
    choices: [
      { text: "Moderately increased albuminuria on ACR", isCorrect: true },
      { text: "A rising serum creatinine", isCorrect: false },
      { text: "Visible haematuria", isCorrect: false },
      { text: "Reduced kidney size on ultrasound", isCorrect: false },
    ],
  },
  {
    stem: "Which drug class slows progression of diabetic nephropathy beyond blood pressure control?",
    topic: "Diabetic Kidney Disease",
    explanation:
      "ACE inhibitors or ARBs, which reduce intraglomerular pressure by dilating the efferent arteriole and lower proteinuria. SGLT2 inhibitors now add substantial further benefit. The two should not be combined with each other (ACE plus ARB), which increases harm without added benefit.",
    choices: [
      { text: "ACE inhibitors or ARBs", isCorrect: true },
      { text: "Beta-blockers", isCorrect: false },
      { text: "Calcium channel blockers", isCorrect: false },
      { text: "Alpha-blockers", isCorrect: false },
    ],
  },
  {
    stem: "A patient with severe hyperkalaemia and ECG changes needs immediate treatment. What is given first?",
    topic: "Electrolyte Emergencies",
    explanation:
      "Intravenous calcium, to stabilise the myocardium. It does not lower potassium at all — it antagonises the membrane effect while insulin with glucose, and salbutamol, shift potassium into cells over the following minutes. Removal from the body needs binders or dialysis.",
    choices: [
      { text: "Intravenous calcium to stabilise the myocardium", isCorrect: true },
      { text: "Oral potassium binders alone", isCorrect: false },
      { text: "Loop diuretics as the first step", isCorrect: false },
      { text: "Immediate dialysis before any drug", isCorrect: false },
    ],
  },
  {
    stem: "Why must chronic hyponatraemia be corrected slowly?",
    topic: "Electrolyte Emergencies",
    explanation:
      "Rapid correction risks osmotic demyelination syndrome, as brain cells that have adapted by losing osmolytes cannot re-accumulate them quickly. Correction is generally limited to around 8–10 mmol/L in 24 hours. Acute symptomatic hyponatraemia with seizures is the exception, where hypertonic saline is given urgently.",
    choices: [
      { text: "Rapid correction risks osmotic demyelination", isCorrect: true },
      { text: "Rapid correction causes cerebral oedema", isCorrect: false },
      { text: "Sodium cannot be absorbed quickly", isCorrect: false },
      { text: "It has no clinical consequence either way", isCorrect: false },
    ],
  },
  {
    stem: "A patient has hyponatraemia with concentrated urine, euvolaemia and normal thyroid and adrenal function. What is the likely diagnosis?",
    topic: "Electrolyte Emergencies",
    explanation:
      "Syndrome of inappropriate ADH secretion. Water is retained despite low plasma osmolality, so urine remains inappropriately concentrated. Causes include malignancy, lung disease, CNS pathology and drugs. Treatment is fluid restriction, with the underlying cause addressed.",
    choices: [
      { text: "SIADH", isCorrect: true },
      { text: "Diabetes insipidus", isCorrect: false },
      { text: "Hypovolaemic hyponatraemia", isCorrect: false },
      { text: "Primary polydipsia", isCorrect: false },
    ],
  },
  {
    stem: "Which vascular access is preferred for long-term haemodialysis, and why?",
    topic: "Renal Replacement Therapy",
    explanation:
      "An arteriovenous fistula. It has the lowest infection and thrombosis rates and the best long-term patency compared with grafts or tunnelled catheters. It needs weeks to mature, which is why planning access early in advanced CKD matters — a patient who reaches dialysis unprepared starts with a catheter and its higher risks.",
    choices: [
      { text: "An arteriovenous fistula, for lower infection risk and better patency", isCorrect: true },
      { text: "A tunnelled central venous catheter", isCorrect: false },
      { text: "A peripheral cannula", isCorrect: false },
      { text: "A synthetic graft in all cases", isCorrect: false },
    ],
  },
];

/* ═══════════ DRUGS ═══════════ */

const DRUGS: Q[] = [
  {
    stem: "Where do loop diuretics act, and what transporter do they inhibit?",
    topic: "Loop Diuretics",
    explanation:
      "The thick ascending limb, inhibiting the Na-K-2Cl co-transporter. This produces the most powerful diuresis available because it also abolishes the medullary gradient, impairing the ability to concentrate urine. Potassium, magnesium and calcium are all lost alongside sodium.",
    choices: [
      { text: "Thick ascending limb — the Na-K-2Cl co-transporter", isCorrect: true },
      { text: "Distal convoluted tubule — the Na-Cl co-transporter", isCorrect: false },
      { text: "Collecting duct — the epithelial sodium channel", isCorrect: false },
      { text: "Proximal tubule — carbonic anhydrase", isCorrect: false },
    ],
  },
  {
    stem: "Which adverse effect is characteristic of rapid intravenous furosemide?",
    topic: "Loop Diuretics",
    explanation:
      "Ototoxicity — tinnitus and hearing loss, usually reversible but not always. Risk rises with rapid administration, high doses, renal impairment and concurrent aminoglycosides. Slow infusion is the straightforward preventive measure.",
    choices: [
      { text: "Ototoxicity", isCorrect: true },
      { text: "Hepatotoxicity", isCorrect: false },
      { text: "Pulmonary fibrosis", isCorrect: false },
      { text: "Optic neuritis", isCorrect: false },
    ],
  },
  {
    stem: "Where do thiazide diuretics act, and what is their effect on calcium?",
    topic: "Thiazide Diuretics",
    explanation:
      "The distal convoluted tubule, inhibiting the Na-Cl co-transporter. Unlike loop diuretics they REDUCE calcium excretion, which is why they are useful in recurrent calcium stones and osteoporosis — and why they can cause hypercalcaemia. They also cause hyponatraemia, hypokalaemia, hyperuricaemia and hyperglycaemia.",
    choices: [
      { text: "Distal convoluted tubule — and they reduce calcium excretion", isCorrect: true },
      { text: "Thick ascending limb — and they increase calcium excretion", isCorrect: false },
      { text: "Collecting duct — with no effect on calcium", isCorrect: false },
      { text: "Proximal tubule — increasing calcium loss", isCorrect: false },
    ],
  },
  {
    stem: "Why do thiazides commonly cause hyponatraemia while loop diuretics do so less often?",
    topic: "Thiazide Diuretics",
    explanation:
      "Thiazides impair urinary dilution while leaving the medullary concentrating gradient intact, so water is retained relative to sodium. Loop diuretics destroy that gradient, so free water is lost too. Elderly women are at particular risk, and the effect often appears within weeks of starting.",
    choices: [
      { text: "They impair dilution while leaving the concentrating gradient intact", isCorrect: true },
      { text: "They cause greater total sodium loss", isCorrect: false },
      { text: "They stimulate ADH release directly", isCorrect: false },
      { text: "They are given at higher doses", isCorrect: false },
    ],
  },
  {
    stem: "How does spironolactone differ from amiloride in mechanism?",
    topic: "Potassium-Sparing Diuretics",
    explanation:
      "Spironolactone competitively antagonises the mineralocorticoid receptor; amiloride directly blocks the epithelial sodium channel. Both spare potassium, but only spironolactone has the anti-fibrotic effects that improve survival in heart failure — and only spironolactone causes gynaecomastia, through its anti-androgen action.",
    choices: [
      { text: "Spironolactone blocks the aldosterone receptor; amiloride blocks the sodium channel", isCorrect: true },
      { text: "Both block the same receptor at different sites", isCorrect: false },
      { text: "Amiloride is an aldosterone antagonist", isCorrect: false },
      { text: "Spironolactone acts in the proximal tubule", isCorrect: false },
    ],
  },
  {
    stem: "Which combination carries a significant risk of dangerous hyperkalaemia?",
    topic: "Potassium-Sparing Diuretics",
    explanation:
      "An ACE inhibitor with a potassium-sparing diuretic, especially in renal impairment. Both reduce potassium excretion by different routes. Trimethoprim adds further risk by acting like amiloride on the distal sodium channel — a combination easily overlooked when treating a urinary infection.",
    choices: [
      { text: "ACE inhibitor plus spironolactone in renal impairment", isCorrect: true },
      { text: "Furosemide plus a thiazide", isCorrect: false },
      { text: "Beta-blocker plus a statin", isCorrect: false },
      { text: "Amlodipine plus a nitrate", isCorrect: false },
    ],
  },
  {
    stem: "How do SGLT2 inhibitors protect the kidney beyond lowering glucose?",
    topic: "SGLT2 Inhibitors",
    explanation:
      "By restoring tubuloglomerular feedback: blocking proximal sodium-glucose reabsorption increases sodium delivery to the macula densa, causing afferent constriction and relieving glomerular hyperfiltration. That mechanical unloading is why they slow CKD progression even in patients without diabetes.",
    choices: [
      { text: "Increased distal sodium delivery restores tubuloglomerular feedback, reducing hyperfiltration", isCorrect: true },
      { text: "They directly repair damaged podocytes", isCorrect: false },
      { text: "They increase erythropoietin production", isCorrect: false },
      { text: "They block aldosterone", isCorrect: false },
    ],
  },
  {
    stem: "Which adverse effect should patients starting an SGLT2 inhibitor be warned about?",
    topic: "SGLT2 Inhibitors",
    explanation:
      "Genital mycotic infection and urinary infection, from glucose in the urine. Euglycaemic diabetic ketoacidosis is rarer but important — ketoacidosis with a near-normal glucose, which is easily missed. Sick-day rules matter: the drug is held during acute illness or fasting.",
    choices: [
      { text: "Genital and urinary infections, and rarely euglycaemic ketoacidosis", isCorrect: true },
      { text: "Severe hypoglycaemia when used alone", isCorrect: false },
      { text: "Hyperkalaemia", isCorrect: false },
      { text: "Ototoxicity", isCorrect: false },
    ],
  },
  {
    stem: "Which analgesic should generally be avoided in significant chronic kidney disease?",
    topic: "Prescribing in Renal Impairment",
    explanation:
      "NSAIDs, which reduce prostaglandin-mediated afferent dilatation, promote sodium retention and can cause interstitial nephritis. Paracetamol is generally the safest first-line option, and opioids need dose adjustment since several accumulate — morphine metabolites in particular.",
    choices: [
      { text: "NSAIDs", isCorrect: true },
      { text: "Paracetamol", isCorrect: false },
      { text: "Topical capsaicin", isCorrect: false },
      { text: "Local anaesthetic infiltration", isCorrect: false },
    ],
  },
  {
    stem: "Why must metformin be reviewed when eGFR falls?",
    topic: "Prescribing in Renal Impairment",
    explanation:
      "It is renally cleared, and accumulation raises the risk of lactic acidosis. It is usually reduced below an eGFR of 45 and stopped below 30, and withheld around contrast procedures and acute illness. The risk is small but the consequence is severe.",
    choices: [
      { text: "It accumulates and increases lactic acidosis risk", isCorrect: true },
      { text: "It causes hyperkalaemia", isCorrect: false },
      { text: "It directly damages the glomerulus", isCorrect: false },
      { text: "It becomes ineffective at any reduced eGFR", isCorrect: false },
    ],
  },
  {
    stem: "Which antibiotic requires dose adjustment and level monitoring in renal impairment because of nephrotoxicity?",
    topic: "Prescribing in Renal Impairment",
    explanation:
      "Gentamicin, and aminoglycosides generally — nephrotoxic and ototoxic, and renally cleared, so impaired clearance compounds the risk. Vancomycin needs similar attention. Once-daily dosing with level monitoring reduces but does not abolish the hazard.",
    choices: [
      { text: "Gentamicin", isCorrect: true },
      { text: "Amoxicillin", isCorrect: false },
      { text: "Azithromycin", isCorrect: false },
      { text: "Doxycycline", isCorrect: false },
    ],
  },
  {
    stem: "What is the purpose of a phosphate binder, and when must it be taken?",
    topic: "CKD Medications",
    explanation:
      "It binds dietary phosphate in the gut to prevent absorption, so it must be taken WITH food. Taken between meals it does nothing at all — a common reason for apparent treatment failure, and a counselling point worth checking whenever phosphate remains high.",
    choices: [
      { text: "It binds dietary phosphate in the gut and must be taken with meals", isCorrect: true },
      { text: "It removes phosphate from blood and is taken on an empty stomach", isCorrect: false },
      { text: "It increases urinary phosphate excretion", isCorrect: false },
      { text: "It replaces phosphate in deficiency", isCorrect: false },
    ],
  },
  {
    stem: "Before starting an erythropoiesis-stimulating agent in CKD anaemia, what must be checked?",
    topic: "CKD Medications",
    explanation:
      "Iron status. Without adequate iron the marrow cannot respond, and the agent will appear ineffective while the dose is escalated pointlessly. Blood pressure must also be monitored, since ESAs can worsen hypertension, and haemoglobin is targeted to a moderate rather than normal level.",
    choices: [
      { text: "Iron status, replacing iron first if deficient", isCorrect: true },
      { text: "Serum phosphate only", isCorrect: false },
      { text: "Vitamin B12 exclusively", isCorrect: false },
      { text: "Nothing — it can be started immediately", isCorrect: false },
    ],
  },
  {
    stem: "How does allopurinol reduce uric acid, and what caution applies when starting it?",
    topic: "CKD Medications",
    explanation:
      "It inhibits xanthine oxidase, reducing uric acid production. Starting it can precipitate an acute gout flare as urate is mobilised, so cover with an NSAID or colchicine is usual, and it is not begun during an acute attack. Dose is reduced in renal impairment.",
    choices: [
      { text: "Xanthine oxidase inhibition — and it can precipitate an acute flare on starting", isCorrect: true },
      { text: "It increases uric acid excretion and is safe to start mid-attack", isCorrect: false },
      { text: "It dissolves existing tophi within days", isCorrect: false },
      { text: "It has no interaction with renal function", isCorrect: false },
    ],
  },
  {
    stem: "A patient is prescribed a nephrotoxic contrast study. Which measure most reduces the risk of contrast-associated AKI?",
    topic: "Prescribing in Renal Impairment",
    explanation:
      "Adequate intravenous hydration before and after the procedure, alongside using the smallest effective contrast volume and withholding nephrotoxins where possible. Volume expansion maintains renal perfusion and dilutes contrast within the tubule — it remains the intervention with the best evidence.",
    choices: [
      { text: "Intravenous volume expansion before and after the study", isCorrect: true },
      { text: "Prophylactic loop diuretics", isCorrect: false },
      { text: "Fluid restriction to reduce contrast delivery", isCorrect: false },
      { text: "Routine dialysis after the scan", isCorrect: false },
    ],
  },
];

/* ═══════════ SEED ═══════════ */

async function seedSet(o: {
  categorySlug: string;
  slug: string;
  title: string;
  description: string;
  kind: string;
  timeLimitSeconds: number | null;
  difficulty: string;
  questions: Q[];
}) {
  const category = await prisma.quizCategory.findUnique({ where: { slug: o.categorySlug } });
  if (!category) {
    console.log(`  ✗ Category "${o.categorySlug}" not found — run seed-medical-taxonomy.ts first.`);
    return;
  }

  const quiz = await prisma.quiz.upsert({
    where: { slug: o.slug },
    create: {
      slug: o.slug,
      title: o.title,
      description: o.description,
      categoryId: category.id,
      kind: o.kind,
      timeLimitSeconds: o.timeLimitSeconds,
      passThreshold: 70,
      difficulty: o.difficulty,
      published: true,
    },
    update: {
      title: o.title,
      description: o.description,
      categoryId: category.id,
      kind: o.kind,
      timeLimitSeconds: o.timeLimitSeconds,
    },
  });

  await prisma.question.deleteMany({ where: { quizId: quiz.id } });

  let order = 0;
  for (const q of o.questions) {
    await prisma.question.create({
      data: {
        quizId: quiz.id,
        type: "SINGLE",
        stem: q.stem,
        topic: q.topic,
        explanation: q.explanation,
        points: 1,
        order: order++,
        choices: { create: q.choices.map((c, i) => ({ text: c.text, isCorrect: c.isCorrect, order: i })) },
      },
    });
  }

  console.log(`  ✓ ${o.title} — ${o.questions.length} questions`);
}

async function main() {
  console.log("Seeding Renal…\n");

  await seedSet({
    categorySlug: "fs-renal-physiology",
    slug: "renal-physiology-set-1",
    title: "Renal Physiology — Practice Set 1",
    description:
      "Nephron structure, glomerular filtration, tubular transport, urine concentration and the kidney's hormonal roles. Fifteen questions, untimed.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Foundational",
    questions: PHYS1,
  });

  await seedSet({
    categorySlug: "fs-renal-physiology",
    slug: "renal-physiology-set-2",
    title: "Renal Physiology — Practice Set 2",
    description:
      "Acid-base handling, potassium, calcium and phosphate, AKI assessment and the control of renal blood flow. Fifteen fresh questions — no overlap with Set 1.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Intermediate",
    questions: PHYS2,
  });

  await seedSet({
    categorySlug: "cs-nephrology",
    slug: "nephrology-clinical-set-1",
    title: "Nephrology — Practice Set 1",
    description:
      "Acute kidney injury, interstitial and glomerular disease, chronic kidney disease and urolithiasis. Fifteen questions, untimed.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Intermediate",
    questions: CLIN1,
  });

  await seedSet({
    categorySlug: "cs-nephrology",
    slug: "nephrology-clinical-set-2",
    title: "Nephrology — Practice Set 2",
    description:
      "Urinary tract infection, renovascular and secondary hypertension, inherited kidney disease, vasculitis, diabetic nephropathy, electrolyte emergencies and dialysis access. Fifteen fresh questions.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Intermediate",
    questions: CLIN2,
  });

  await seedSet({
    categorySlug: "fs-pharmacology",
    slug: "renal-drugs-set-1",
    title: "Renal & Diuretic Drugs — Practice Set 1",
    description:
      "Loop, thiazide and potassium-sparing diuretics, SGLT2 inhibitors, and safe prescribing in renal impairment. Fifteen questions.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Intermediate",
    questions: DRUGS,
  });

  await seedSet({
    categorySlug: "fs-renal-physiology",
    slug: "renal-physiology-exam-1",
    title: "Renal Physiology — Timed Exam",
    description: "Both physiology sets combined: thirty questions in 35 minutes, feedback withheld until you submit.",
    kind: "EXAM",
    timeLimitSeconds: 35 * 60,
    difficulty: "Intermediate",
    questions: [...PHYS1, ...PHYS2],
  });

  await seedSet({
    categorySlug: "cs-nephrology",
    slug: "nephrology-clinical-exam-1",
    title: "Nephrology — Timed Exam",
    description: "Both clinical sets combined: thirty questions in 35 minutes, feedback withheld until you submit.",
    kind: "EXAM",
    timeLimitSeconds: 35 * 60,
    difficulty: "Intermediate",
    questions: [...CLIN1, ...CLIN2],
  });

  await seedSet({
    categorySlug: "cs-nephrology",
    slug: "renal-comprehensive-exam-1",
    title: "Renal — Comprehensive Timed Exam",
    description:
      "All seventy-five items across physiology, nephrology and pharmacology: 90 minutes. Sit this once the five practice sets feel comfortable.",
    kind: "EXAM",
    timeLimitSeconds: 90 * 60,
    difficulty: "Advanced",
    questions: [...PHYS1, ...PHYS2, ...CLIN1, ...CLIN2, ...DRUGS],
  });

  console.log("\nDone. Editable in Admin → Question Bank.");
  console.log("⚠ Review clinical thresholds against your local guideline.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
