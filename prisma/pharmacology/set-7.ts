/**
 * PHARMACOLOGY — PRACTICE SET 7
 * Endocrine, Gastrointestinal, Analgesic & Toxicologic Pharmacology
 *
 * Difficulty: Intermediate-Advanced. The capstone set. It closes out the
 * remaining major prescribing domains — the hormones and their modulators, the
 * gut, pain and inflammation — and ends on toxicology and antidotes, where every
 * earlier mechanism reappears as a poisoning and its reversal. Completing this
 * set unlocks the final four exams, including the Comprehensive Final.
 *
 * 76 questions across 12 topics:
 *   Diabetes — Insulin · Diabetes — Non-Insulin Agents · Thyroid & Antithyroid
 *   Drugs · Corticosteroids & Adrenal · Bone, Calcium & Sex Hormones · Acid-
 *   Peptic Disease · GI Motility, Antiemetics & Bowel · NSAIDs & Acetaminophen ·
 *   Gout & Immunomodulators · Toxicology — Antidotes · Toxicology — Specific
 *   Poisons · Clinical Application
 *
 * Item mix: single-answer vignettes, select-all-that-apply, and true/false.
 * US generic drug names and conventional units throughout.
 */

import type { Q } from "../_lib/qbank";

export const PHARMACOLOGY_SET_7: Q[] = [
  /* ══════════════ DIABETES — INSULIN ══════════════ */
  {
    stem: "A patient with type 1 diabetes uses insulin lispro at meals. Compared with regular insulin, lispro is designed to:",
    topic: "Diabetes — Insulin",
    explanation:
      "Lispro, aspart and glulisine are rapid-acting analogs engineered to dissociate into monomers quickly, giving faster onset and shorter duration that better match the mealtime glucose rise. This lowers post-meal spikes and late hypoglycemia compared with regular insulin.",
    choices: [
      { text: "Act faster and for a shorter time to cover meals", isCorrect: true },
      { text: "Provide a flat 24-hour basal level" },
      { text: "Be given only intravenously" },
      { text: "Lower glucose over several days" },
      { text: "Replace the need for basal insulin entirely" },
    ],
  },
  {
    stem: "Insulin glargine is used as a basal insulin because it:",
    topic: "Diabetes — Insulin",
    explanation:
      "Glargine precipitates at physiologic pH after injection and is absorbed slowly, giving a relatively peakless profile lasting about 24 hours that mimics basal secretion. Its long, flat action contrasts with the sharp mealtime peak of rapid-acting analogs.",
    choices: [
      { text: "Provides a long, relatively peakless basal level", isCorrect: true },
      { text: "Peaks sharply within 15 minutes" },
      { text: "Is used only to treat ketoacidosis acutely" },
      { text: "Works for only 2 hours" },
      { text: "Must be mixed with rapid insulin in one syringe" },
    ],
  },
  {
    stem: "The single most important acute risk of any insulin therapy is:",
    topic: "Diabetes — Insulin",
    explanation:
      "Hypoglycemia is the principal acute danger of insulin, presenting with tremor, sweating, confusion and, if severe, seizures or coma; it is treated with oral glucose or, if unconscious, glucagon or IV dextrose. Recognizing and treating it promptly is essential.",
    choices: [
      { text: "Hypoglycemia", isCorrect: true },
      { text: "Hyperkalemia" },
      { text: "Metabolic alkalosis" },
      { text: "Tendon rupture" },
      { text: "Optic neuritis" },
    ],
  },
  {
    stem: "Besides lowering glucose, insulin drives potassium into cells, which is why it is used acutely to treat:",
    topic: "Diabetes — Insulin",
    explanation:
      "Insulin (given with glucose to prevent hypoglycemia) shifts potassium intracellularly and is a standard temporizing treatment for hyperkalemia. This same effect explains the hypokalemia that can accompany treatment of diabetic ketoacidosis.",
    choices: [
      { text: "Hyperkalemia", isCorrect: true },
      { text: "Hypokalemia" },
      { text: "Hypernatremia" },
      { text: "Hypocalcemia" },
      { text: "Hyperphosphatemia" },
    ],
  },
  {
    stem: "Which insulins are appropriate for mealtime (bolus) coverage? Select all that apply.",
    type: "MULTI",
    topic: "Diabetes — Insulin",
    explanation:
      "Rapid-acting lispro, aspart and glulisine, and short-acting regular insulin, all cover meals; regular insulin is also the form used intravenously in ketoacidosis. Glargine and detemir are long-acting basal insulins and are not used as mealtime boluses.",
    choices: [
      { text: "Insulin lispro", isCorrect: true },
      { text: "Insulin aspart", isCorrect: true },
      { text: "Regular insulin", isCorrect: true },
      { text: "Insulin glargine" },
      { text: "Insulin detemir" },
    ],
  },
  {
    stem: "True or False: Regular insulin is the preferred form for intravenous infusion in diabetic ketoacidosis.",
    type: "TRUE_FALSE",
    topic: "Diabetes — Insulin",
    explanation:
      "True. Regular (short-acting) insulin is the standard for intravenous infusion in diabetic ketoacidosis because its pharmacology is well characterized for IV titration; potassium and glucose are monitored closely during treatment. Rapid analogs are generally given subcutaneously.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "A patient with well-controlled diabetes on a beta-blocker should be counseled that the beta-blocker may:",
    topic: "Diabetes — Insulin",
    explanation:
      "Non-selective beta-blockers can blunt the adrenergic warning signs of hypoglycemia, such as tremor and palpitations, so a low glucose may go unrecognized; sweating is preserved. This interaction warrants extra vigilance in insulin-treated patients.",
    choices: [
      { text: "Mask the adrenergic warning symptoms of hypoglycemia", isCorrect: true },
      { text: "Cause insulin to stop working" },
      { text: "Raise glucose to dangerous levels directly" },
      { text: "Prevent all hypoglycemia" },
      { text: "Convert type 1 to type 2 diabetes" },
    ],
  },
  /* ══════════════ DIABETES — NON-INSULIN AGENTS ══════════════ */
  {
    stem: "Metformin, first-line for type 2 diabetes, lowers glucose primarily by:",
    topic: "Diabetes — Non-Insulin Agents",
    explanation:
      "Metformin decreases hepatic gluconeogenesis and improves insulin sensitivity without stimulating insulin secretion, so it does not by itself cause hypoglycemia. Its main serious risk is lactic acidosis, especially in renal impairment, and it is held around iodinated contrast.",
    choices: [
      { text: "Reducing hepatic glucose production", isCorrect: true },
      { text: "Stimulating pancreatic insulin release" },
      { text: "Blocking intestinal glucose absorption entirely" },
      { text: "Increasing renal glucose excretion" },
      { text: "Replacing endogenous insulin" },
    ],
  },
  {
    stem: "Sulfonylureas such as glipizide lower glucose by:",
    topic: "Diabetes — Non-Insulin Agents",
    explanation:
      "Sulfonylureas close ATP-sensitive potassium channels on the beta cell, depolarizing it and stimulating insulin release; because this is glucose-independent, they can cause hypoglycemia and weight gain. They require functioning beta cells to work.",
    choices: [
      { text: "Stimulating insulin secretion from pancreatic beta cells", isCorrect: true },
      { text: "Reducing hepatic gluconeogenesis" },
      { text: "Blocking renal glucose reabsorption" },
      { text: "Slowing gastric emptying" },
      { text: "Inhibiting alpha-glucosidase" },
    ],
  },
  {
    stem: "GLP-1 receptor agonists such as semaglutide provide which combination of effects?",
    topic: "Diabetes — Non-Insulin Agents",
    explanation:
      "GLP-1 agonists enhance glucose-dependent insulin secretion, suppress glucagon, slow gastric emptying and promote satiety, so they lower glucose and weight with low hypoglycemia risk. Nausea is common early, and some agents show cardiovascular benefit.",
    choices: [
      { text: "Glucose-dependent insulin release, appetite suppression, and weight loss", isCorrect: true },
      { text: "Insulin-independent glucose lowering by diuresis only" },
      { text: "Strong stimulation of appetite and weight gain" },
      { text: "Direct replacement of insulin" },
      { text: "Blockade of the insulin receptor" },
    ],
  },
  {
    stem: "SGLT2 inhibitors such as empagliflozin lower glucose by a mechanism independent of insulin. They:",
    topic: "Diabetes — Non-Insulin Agents",
    explanation:
      "SGLT2 inhibitors block glucose reabsorption in the proximal tubule, causing glucosuria that lowers blood glucose and provides cardiorenal benefit; risks include genital mycotic infections and euglycemic ketoacidosis. Their action does not require insulin.",
    choices: [
      { text: "Promote urinary glucose excretion in the kidney", isCorrect: true },
      { text: "Stimulate beta-cell insulin release" },
      { text: "Reduce hepatic gluconeogenesis primarily" },
      { text: "Replace insulin at the receptor" },
      { text: "Inhibit intestinal disaccharidases" },
    ],
  },
  {
    stem: "Pioglitazone, a thiazolidinedione, improves insulin sensitivity by activating which target?",
    topic: "Diabetes — Non-Insulin Agents",
    explanation:
      "Thiazolidinediones activate the nuclear receptor PPAR-gamma, altering transcription to improve peripheral insulin sensitivity; onset is slow. They can cause fluid retention and weight gain and are avoided in heart failure, and they carry a risk of fractures.",
    choices: [
      { text: "PPAR-gamma nuclear receptor", isCorrect: true },
      { text: "The sulfonylurea receptor on beta cells" },
      { text: "SGLT2 in the kidney" },
      { text: "The GLP-1 receptor" },
      { text: "Alpha-glucosidase in the gut" },
    ],
  },
  {
    stem: "Which non-insulin agents carry a LOW intrinsic risk of causing hypoglycemia when used alone? Select all that apply.",
    type: "MULTI",
    topic: "Diabetes — Non-Insulin Agents",
    explanation:
      "Metformin, GLP-1 receptor agonists and SGLT2 inhibitors do not force insulin release regardless of glucose, so alone they rarely cause hypoglycemia. Sulfonylureas and meglitinides stimulate insulin secretion independently of glucose and can cause hypoglycemia.",
    choices: [
      { text: "Metformin", isCorrect: true },
      { text: "GLP-1 receptor agonists", isCorrect: true },
      { text: "SGLT2 inhibitors", isCorrect: true },
      { text: "Sulfonylureas" },
      { text: "Meglitinides" },
    ],
  },
  {
    stem: "DPP-4 inhibitors such as sitagliptin work by:",
    topic: "Diabetes — Non-Insulin Agents",
    explanation:
      "DPP-4 inhibitors block the enzyme that degrades endogenous incretins (GLP-1 and GIP), so incretin levels rise and glucose-dependent insulin secretion improves. They are weight-neutral and well tolerated, with modest efficacy compared with GLP-1 agonists.",
    choices: [
      { text: "Preventing breakdown of endogenous incretin hormones", isCorrect: true },
      { text: "Directly activating the insulin receptor" },
      { text: "Blocking renal glucose reabsorption" },
      { text: "Closing beta-cell potassium channels" },
      { text: "Inhibiting hepatic glucose output as the main effect" },
    ],
  },
  /* ══════════════ THYROID & ANTITHYROID DRUGS ══════════════ */
  {
    stem: "Levothyroxine is the standard treatment for hypothyroidism because it:",
    topic: "Thyroid & Antithyroid Drugs",
    explanation:
      "Levothyroxine is synthetic T4 that is converted peripherally to the active T3, giving stable physiologic replacement with once-daily dosing owing to its long half-life. Dose is titrated to TSH, and over-replacement risks atrial fibrillation and osteoporosis.",
    choices: [
      { text: "Supplies T4 that is converted peripherally to active T3", isCorrect: true },
      { text: "Blocks thyroid hormone synthesis" },
      { text: "Destroys thyroid tissue" },
      { text: "Provides only T3 with a very short action" },
      { text: "Suppresses the pituitary directly without hormone effect" },
    ],
  },
  {
    stem: "Methimazole treats hyperthyroidism by inhibiting which step?",
    topic: "Thyroid & Antithyroid Drugs",
    explanation:
      "Thioamides inhibit thyroid peroxidase, blocking iodination and coupling of tyrosines and thus new hormone synthesis; effect is delayed until stored hormone is depleted. Methimazole is preferred except in the first trimester, where propylthiouracil is used.",
    choices: [
      { text: "Thyroid peroxidase–mediated hormone synthesis", isCorrect: true },
      { text: "Peripheral conversion only, with no effect on synthesis" },
      { text: "TSH secretion from the pituitary" },
      { text: "Iodine uptake by blocking the sodium-iodide symporter" },
      { text: "Thyroid hormone binding to its receptor" },
    ],
  },
  {
    stem: "Propylthiouracil has one action methimazole lacks, which is useful in thyroid storm:",
    topic: "Thyroid & Antithyroid Drugs",
    explanation:
      "In addition to blocking synthesis, propylthiouracil inhibits peripheral conversion of T4 to the more active T3, an advantage in severe thyrotoxicosis. It is otherwise second-line because of hepatotoxicity, except in the first trimester of pregnancy.",
    choices: [
      { text: "It blocks peripheral T4-to-T3 conversion", isCorrect: true },
      { text: "It destroys the thyroid gland" },
      { text: "It provides thyroid hormone" },
      { text: "It stimulates TSH" },
      { text: "It has no effect on hormone synthesis" },
    ],
  },
  {
    stem: "A patient on amiodarone develops abnormal thyroid function tests. This occurs because amiodarone:",
    topic: "Thyroid & Antithyroid Drugs",
    explanation:
      "Amiodarone is rich in iodine and can cause either hypothyroidism or hyperthyroidism, and it also inhibits peripheral T4-to-T3 conversion; thyroid function is monitored during therapy. This links its earlier cardiovascular role to endocrine toxicity.",
    choices: [
      { text: "Contains large amounts of iodine and can cause hypo- or hyperthyroidism", isCorrect: true },
      { text: "Directly replaces thyroid hormone" },
      { text: "Destroys the pituitary" },
      { text: "Blocks all iodine absorption permanently" },
      { text: "Has no effect on the thyroid" },
    ],
  },
  {
    stem: "True or False: A high dose of iodide (the Wolff-Chaikoff effect) transiently inhibits thyroid hormone synthesis and can be used before thyroid surgery.",
    type: "TRUE_FALSE",
    topic: "Thyroid & Antithyroid Drugs",
    explanation:
      "True. Pharmacologic iodide transiently suppresses hormone synthesis and reduces gland vascularity, which is useful preoperatively and in thyroid storm. The effect is temporary because the gland eventually escapes, so it is not a long-term therapy.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "A beta-blocker such as propranolol is added in severe hyperthyroidism mainly to:",
    topic: "Thyroid & Antithyroid Drugs",
    explanation:
      "Beta-blockers rapidly control the adrenergic symptoms of thyrotoxicosis — tachycardia, tremor, anxiety — while the thioamides slowly reduce hormone; propranolol also modestly blocks peripheral T4-to-T3 conversion. They do not reduce hormone synthesis themselves.",
    choices: [
      { text: "Control adrenergic symptoms like tachycardia and tremor", isCorrect: true },
      { text: "Block thyroid hormone synthesis" },
      { text: "Destroy thyroid tissue" },
      { text: "Replace thyroid hormone" },
      { text: "Increase TSH secretion" },
    ],
  },
  /* ══════════════ CORTICOSTEROIDS & ADRENAL ══════════════ */
  {
    stem: "Long-term systemic corticosteroid therapy characteristically causes which cluster of effects?",
    topic: "Corticosteroids & Adrenal",
    explanation:
      "Chronic glucocorticoids produce a Cushingoid picture — central obesity, hyperglycemia, hypertension, osteoporosis, thin skin, muscle wasting and immunosuppression. These predictable effects drive efforts to use the lowest effective dose for the shortest time.",
    choices: [
      { text: "Cushingoid features with hyperglycemia and osteoporosis", isCorrect: true },
      { text: "Hypoglycemia and weight loss" },
      { text: "Hyperkalemia and hypotension" },
      { text: "Bradycardia and hypothermia" },
      { text: "Bleeding and anemia as primary effects" },
    ],
  },
  {
    stem: "Why must chronic corticosteroids be tapered rather than stopped abruptly?",
    topic: "Corticosteroids & Adrenal",
    explanation:
      "Prolonged exogenous steroids suppress the hypothalamic-pituitary-adrenal axis, so the adrenal glands atrophy; abrupt withdrawal can precipitate an adrenal crisis because endogenous cortisol production cannot resume immediately. Gradual tapering allows the axis to recover.",
    choices: [
      { text: "The HPA axis is suppressed and needs time to recover", isCorrect: true },
      { text: "They accumulate and cause immediate toxicity" },
      { text: "Abrupt stopping causes hyperkalemia only" },
      { text: "They cause rebound hypertension like clonidine" },
      { text: "Tapering prevents an allergic reaction" },
    ],
  },
  {
    stem: "Fludrocortisone is used chiefly for its:",
    topic: "Corticosteroids & Adrenal",
    explanation:
      "Fludrocortisone has strong mineralocorticoid activity, promoting sodium retention and potassium excretion, and is used to replace aldosterone in primary adrenal insufficiency and to treat some forms of orthostatic hypotension. Its glucocorticoid effect is comparatively minor.",
    choices: [
      { text: "Mineralocorticoid (sodium-retaining) activity", isCorrect: true },
      { text: "Pure anti-inflammatory action with no salt effect" },
      { text: "Thyroid replacement" },
      { text: "Insulin-sensitizing action" },
      { text: "Antiandrogen activity" },
    ],
  },
  {
    stem: "A patient with adrenal insufficiency undergoing major surgery requires 'stress-dose' steroids because:",
    topic: "Corticosteroids & Adrenal",
    explanation:
      "Physiologic stress normally raises cortisol several-fold; a patient who cannot mount this response needs supplemental glucocorticoid to avoid adrenal crisis with hypotension and shock. Anticipating stress and dosing accordingly is a key safety principle.",
    choices: [
      { text: "They cannot mount the normal cortisol surge needed for stress", isCorrect: true },
      { text: "Surgery destroys the adrenal glands" },
      { text: "Steroids prevent anesthesia complications directly" },
      { text: "They need mineralocorticoid only" },
      { text: "It prevents malignant hyperthermia" },
    ],
  },
  {
    stem: "Which are recognized adverse effects of chronic glucocorticoid use? Select all that apply.",
    type: "MULTI",
    topic: "Corticosteroids & Adrenal",
    explanation:
      "Chronic glucocorticoids raise blood glucose, reduce bone density (osteoporosis), increase infection risk through immunosuppression, and can cause cataracts and mood changes. They do not typically cause hypoglycemia, which is the opposite of their metabolic effect.",
    choices: [
      { text: "Hyperglycemia", isCorrect: true },
      { text: "Osteoporosis", isCorrect: true },
      { text: "Increased infection risk", isCorrect: true },
      { text: "Hypoglycemia" },
      { text: "Increased bone density" },
    ],
  },
  /* ══════════════ BONE, CALCIUM & SEX HORMONES ══════════════ */
  {
    stem: "Bisphosphonates such as alendronate reduce fracture risk in osteoporosis by:",
    topic: "Bone, Calcium & Sex Hormones",
    explanation:
      "Bisphosphonates are taken up into bone and inhibit osteoclast-mediated resorption, increasing bone density. Oral forms must be taken with water while upright to avoid esophagitis, and rare risks include osteonecrosis of the jaw and atypical femoral fractures.",
    choices: [
      { text: "Inhibiting osteoclastic bone resorption", isCorrect: true },
      { text: "Stimulating osteoclasts" },
      { text: "Replacing calcium directly in bone" },
      { text: "Blocking vitamin D" },
      { text: "Increasing renal calcium loss" },
    ],
  },
  {
    stem: "What counseling is essential for a patient starting oral alendronate?",
    topic: "Bone, Calcium & Sex Hormones",
    explanation:
      "Oral bisphosphonates should be taken on an empty stomach with a full glass of water, remaining upright for at least 30 minutes, to ensure absorption and prevent esophageal irritation. Food, calcium and other drugs impair their absorption.",
    choices: [
      { text: "Take with water and stay upright for at least 30 minutes", isCorrect: true },
      { text: "Take with milk at bedtime" },
      { text: "Take lying down to reduce dizziness" },
      { text: "Take with an antacid for absorption" },
      { text: "Crush and take with food" },
    ],
  },
  {
    stem: "Raloxifene, a selective estrogen receptor modulator, benefits bone while reducing breast cancer risk because it:",
    topic: "Bone, Calcium & Sex Hormones",
    explanation:
      "Raloxifene acts as an estrogen agonist in bone (preserving density) but an antagonist in breast tissue, lowering breast cancer risk; like estrogen it raises venous thromboembolism risk. This tissue-selective action defines the SERM class.",
    choices: [
      { text: "Acts as an estrogen agonist in bone but antagonist in breast", isCorrect: true },
      { text: "Blocks estrogen receptors everywhere equally" },
      { text: "Stimulates all estrogen receptors equally" },
      { text: "Has no effect on clotting risk" },
      { text: "Works only by adding calcium to bone" },
    ],
  },
  {
    stem: "Finasteride is used for benign prostatic hyperplasia and male-pattern hair loss because it inhibits:",
    topic: "Bone, Calcium & Sex Hormones",
    explanation:
      "Finasteride inhibits 5-alpha-reductase, reducing conversion of testosterone to the more potent dihydrotestosterone, which shrinks the prostate and slows androgenic hair loss. It lowers PSA and is teratogenic, so pregnant women avoid handling crushed tablets.",
    choices: [
      { text: "5-alpha-reductase, lowering dihydrotestosterone", isCorrect: true },
      { text: "Aromatase, lowering estrogen" },
      { text: "The androgen receptor directly" },
      { text: "Luteinizing hormone release" },
      { text: "Testosterone synthesis in the testis" },
    ],
  },
  {
    stem: "Leuprolide, a GnRH analog, can be used to suppress sex hormone production, but this depends on:",
    topic: "Bone, Calcium & Sex Hormones",
    explanation:
      "Given continuously, leuprolide desensitizes pituitary GnRH receptors and suppresses gonadotropins and sex steroids (used in prostate cancer and endometriosis); given in a pulsatile fashion it stimulates them. The initial surge can transiently flare hormone-dependent disease.",
    choices: [
      { text: "Continuous dosing, which desensitizes the pituitary", isCorrect: true },
      { text: "A single dose that permanently ablates the pituitary" },
      { text: "Pulsatile dosing, which suppresses hormones" },
      { text: "Blocking the androgen receptor directly" },
      { text: "Inhibiting 5-alpha-reductase" },
    ],
  },
  {
    stem: "True or False: Combined oral contraceptives increase the risk of venous thromboembolism, a risk heightened in smokers over 35.",
    type: "TRUE_FALSE",
    topic: "Bone, Calcium & Sex Hormones",
    explanation:
      "True. The estrogen component raises clotting-factor synthesis and venous thromboembolism risk, and this is compounded by smoking, especially over age 35, which is a relative contraindication. Progestin-only methods are alternatives when estrogen is unsafe.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  /* ══════════════ ACID-PEPTIC DISEASE ══════════════ */
  {
    stem: "Proton pump inhibitors such as omeprazole suppress gastric acid by:",
    topic: "Acid-Peptic Disease",
    explanation:
      "PPIs irreversibly inhibit the H/K-ATPase (proton pump) of gastric parietal cells, the final step of acid secretion, giving profound and durable acid suppression. They are prodrugs activated in the acidic canaliculus and are most effective taken before meals.",
    choices: [
      { text: "Irreversibly inhibiting the parietal cell H/K-ATPase", isCorrect: true },
      { text: "Blocking histamine H2 receptors" },
      { text: "Neutralizing acid chemically" },
      { text: "Coating ulcers physically" },
      { text: "Blocking gastrin release only" },
    ],
  },
  {
    stem: "Which concern is associated with long-term proton pump inhibitor use?",
    topic: "Acid-Peptic Disease",
    explanation:
      "Prolonged acid suppression can impair absorption of vitamin B12, magnesium, calcium and iron, and is associated with increased risk of enteric infections such as C. difficile and possibly fractures. These considerations prompt using the lowest effective dose.",
    choices: [
      { text: "Reduced absorption of B12, magnesium, and calcium", isCorrect: true },
      { text: "Excess gastric acid production" },
      { text: "Hyperkalemia" },
      { text: "Tooth staining" },
      { text: "Tendon rupture" },
    ],
  },
  {
    stem: "Histamine H2-receptor antagonists such as famotidine reduce acid by:",
    topic: "Acid-Peptic Disease",
    explanation:
      "H2 blockers competitively block histamine at the parietal cell H2 receptor, reducing acid secretion, especially nocturnal output; they act faster but less completely than PPIs. Cimetidine additionally inhibits CYP enzymes and has antiandrogen effects.",
    choices: [
      { text: "Blocking histamine at the parietal cell H2 receptor", isCorrect: true },
      { text: "Irreversibly blocking the proton pump" },
      { text: "Neutralizing acid directly" },
      { text: "Killing Helicobacter pylori" },
      { text: "Coating the ulcer base" },
    ],
  },
  {
    stem: "Misoprostol protects the gastric mucosa, especially against NSAID injury, because it:",
    topic: "Acid-Peptic Disease",
    explanation:
      "Misoprostol is a prostaglandin E1 analog that restores the mucosal protection NSAIDs remove, increasing mucus and bicarbonate and reducing acid. It causes diarrhea and stimulates uterine contractions, so it is contraindicated in pregnancy.",
    choices: [
      { text: "Replaces protective prostaglandins", isCorrect: true },
      { text: "Blocks the proton pump" },
      { text: "Is an antibiotic against H. pylori" },
      { text: "Neutralizes acid as an antacid" },
      { text: "Blocks H2 receptors" },
    ],
  },
  {
    stem: "Which agents are components of a typical regimen to eradicate Helicobacter pylori? Select all that apply.",
    type: "MULTI",
    topic: "Acid-Peptic Disease",
    explanation:
      "Standard triple therapy combines a proton pump inhibitor with two antibiotics such as clarithromycin and amoxicillin (or metronidazole); bismuth-based quadruple therapy is an alternative. An H2 blocker alone or an antacid alone does not eradicate the organism.",
    choices: [
      { text: "A proton pump inhibitor", isCorrect: true },
      { text: "Clarithromycin", isCorrect: true },
      { text: "Amoxicillin", isCorrect: true },
      { text: "An antacid alone" },
      { text: "An H2 blocker as the sole agent" },
    ],
  },
  {
    stem: "Sucralfate promotes ulcer healing by a mechanism distinct from acid suppression. It:",
    topic: "Acid-Peptic Disease",
    explanation:
      "Sucralfate polymerizes in the acidic stomach and binds to the ulcer base, forming a physical protective barrier against acid and pepsin; it requires an acidic environment to work and can bind other drugs, reducing their absorption. It does not itself lower acid.",
    choices: [
      { text: "Forms a protective barrier over the ulcer", isCorrect: true },
      { text: "Blocks the proton pump" },
      { text: "Neutralizes acid systemically" },
      { text: "Eradicates H. pylori" },
      { text: "Blocks H2 receptors" },
    ],
  },
  /* ══════════════ GI MOTILITY, ANTIEMETICS & BOWEL ══════════════ */
  {
    stem: "Ondansetron controls chemotherapy-induced nausea by blocking which receptor?",
    topic: "GI Motility, Antiemetics & Bowel",
    explanation:
      "Ondansetron antagonizes serotonin 5-HT3 receptors on vagal afferents and in the chemoreceptor trigger zone, making it highly effective for chemotherapy and postoperative nausea. It can prolong the QT interval, and constipation and headache are common.",
    choices: [
      { text: "The 5-HT3 serotonin receptor", isCorrect: true },
      { text: "The dopamine D2 receptor" },
      { text: "The histamine H1 receptor" },
      { text: "The muscarinic receptor" },
      { text: "The neurokinin NK1 receptor" },
    ],
  },
  {
    stem: "Metoclopramide relieves nausea and gastroparesis but can cause extrapyramidal effects because it:",
    topic: "GI Motility, Antiemetics & Bowel",
    explanation:
      "Metoclopramide is a dopamine D2 antagonist that is both prokinetic and antiemetic; central D2 blockade can cause dystonia, parkinsonism and, with chronic use, tardive dyskinesia. This links its GI use to the movement disorders seen with antipsychotics.",
    choices: [
      { text: "Blocks central dopamine D2 receptors", isCorrect: true },
      { text: "Blocks 5-HT3 receptors only" },
      { text: "Is an anticholinergic" },
      { text: "Stimulates opioid receptors" },
      { text: "Blocks histamine exclusively" },
    ],
  },
  {
    stem: "Loperamide reduces diarrhea by:",
    topic: "GI Motility, Antiemetics & Bowel",
    explanation:
      "Loperamide is a peripherally acting mu-opioid agonist that slows intestinal motility without meaningful central effects at normal doses; it is avoided in invasive bacterial diarrhea where slowing transit could be harmful. Very high misuse doses can cause cardiac toxicity.",
    choices: [
      { text: "Activating peripheral opioid receptors to slow gut motility", isCorrect: true },
      { text: "Blocking 5-HT3 receptors" },
      { text: "Drawing water into the bowel" },
      { text: "Killing enteric bacteria" },
      { text: "Stimulating peristalsis" },
    ],
  },
  {
    stem: "Which laxative works by osmotically drawing water into the bowel lumen?",
    topic: "GI Motility, Antiemetics & Bowel",
    explanation:
      "Polyethylene glycol and lactulose are osmotic laxatives that retain water in the lumen to soften stool and promote evacuation; lactulose also lowers ammonia and is used in hepatic encephalopathy. Bulk, stimulant and lubricant laxatives act by other mechanisms.",
    choices: [
      { text: "Polyethylene glycol", isCorrect: true },
      { text: "Docusate" },
      { text: "Senna" },
      { text: "Psyllium" },
      { text: "Loperamide" },
    ],
  },
  {
    stem: "Lactulose benefits patients with hepatic encephalopathy specifically because it:",
    topic: "GI Motility, Antiemetics & Bowel",
    explanation:
      "Lactulose is metabolized by colonic bacteria to acids that trap ammonia as ammonium and speed its excretion, lowering blood ammonia; its laxative effect also clears nitrogenous waste. This dual action targets the ammonia that drives encephalopathy.",
    choices: [
      { text: "Traps and eliminates ammonia from the gut", isCorrect: true },
      { text: "Directly sedates the brain" },
      { text: "Kills all gut bacteria" },
      { text: "Replaces clotting factors" },
      { text: "Blocks ammonia production in muscle" },
    ],
  },
  {
    stem: "True or False: A 5-HT3 antagonist like ondansetron and an NK1 antagonist like aprepitant target different pathways and are often combined for highly emetogenic chemotherapy.",
    type: "TRUE_FALSE",
    topic: "GI Motility, Antiemetics & Bowel",
    explanation:
      "True. Because they block distinct emetic pathways — serotonin versus substance P at neurokinin-1 receptors — combining them (often with dexamethasone) gives superior control of highly emetogenic chemotherapy. Multimodal blockade is the standard approach.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which antiemetic class is most useful for motion sickness by blocking muscarinic or H1 receptors in the vestibular pathway?",
    topic: "GI Motility, Antiemetics & Bowel",
    explanation:
      "Antimuscarinics such as scopolamine and antihistamines such as meclizine act on the vestibular and central pathways that drive motion sickness; drowsiness and anticholinergic effects are common. 5-HT3 and D2 blockers are better suited to chemotherapy or gastroparesis.",
    choices: [
      { text: "Antimuscarinics and antihistamines (e.g., scopolamine, meclizine)", isCorrect: true },
      { text: "5-HT3 antagonists" },
      { text: "NK1 antagonists" },
      { text: "Proton pump inhibitors" },
      { text: "Opioid agonists" },
    ],
  },
  /* ══════════════ NSAIDS & ACETAMINOPHEN ══════════════ */
  {
    stem: "Nonsteroidal anti-inflammatory drugs produce analgesia and anti-inflammatory effects by inhibiting:",
    topic: "NSAIDs & Acetaminophen",
    explanation:
      "NSAIDs inhibit cyclooxygenase (COX-1 and COX-2), reducing prostaglandin synthesis and thereby pain, inflammation and fever. COX-1 inhibition also removes gastric protection and platelet thromboxane, explaining ulcer and bleeding risks.",
    choices: [
      { text: "Cyclooxygenase enzymes, reducing prostaglandin synthesis", isCorrect: true },
      { text: "Lipoxygenase only" },
      { text: "Phospholipase A2 directly" },
      { text: "The opioid receptor" },
      { text: "Cyclooxygenase synthesis at the gene level" },
    ],
  },
  {
    stem: "The gastrointestinal ulcer risk of traditional NSAIDs stems mainly from inhibition of:",
    topic: "NSAIDs & Acetaminophen",
    explanation:
      "COX-1 generates the prostaglandins that maintain gastric mucus, bicarbonate and mucosal blood flow, so inhibiting it predisposes to ulcers and bleeding. Selective COX-2 inhibitors spare this to a degree but raise cardiovascular risk.",
    choices: [
      { text: "COX-1", isCorrect: true },
      { text: "COX-2 exclusively" },
      { text: "Lipoxygenase" },
      { text: "Thromboxane synthase alone" },
      { text: "Phospholipase C" },
    ],
  },
  {
    stem: "Celecoxib, a selective COX-2 inhibitor, was developed to spare the stomach but carries which trade-off?",
    topic: "NSAIDs & Acetaminophen",
    explanation:
      "By sparing COX-1, celecoxib causes fewer ulcers, but selective COX-2 inhibition shifts the prostacyclin-thromboxane balance toward clotting, increasing cardiovascular thrombotic risk. This trade-off shapes when a coxib is appropriate.",
    choices: [
      { text: "Increased cardiovascular thrombotic risk", isCorrect: true },
      { text: "Greater ulcer risk than nonselective NSAIDs" },
      { text: "Loss of all anti-inflammatory effect" },
      { text: "Severe hypoglycemia" },
      { text: "Tooth discoloration" },
    ],
  },
  {
    stem: "Acetaminophen differs from NSAIDs in that it:",
    topic: "NSAIDs & Acetaminophen",
    explanation:
      "Acetaminophen has analgesic and antipyretic effects with little peripheral anti-inflammatory action and does not cause the gastric or antiplatelet effects of NSAIDs, so it is preferred when those must be avoided. Its danger is dose-dependent hepatotoxicity in overdose.",
    choices: [
      { text: "Provides analgesia and antipyresis with minimal anti-inflammatory or antiplatelet effect", isCorrect: true },
      { text: "Strongly inhibits platelet function" },
      { text: "Is the most potent anti-inflammatory available" },
      { text: "Causes gastric ulcers readily" },
      { text: "Works by opioid receptor agonism" },
    ],
  },
  {
    stem: "The hepatotoxicity of acetaminophen overdose is due to accumulation of which reactive metabolite?",
    topic: "NSAIDs & Acetaminophen",
    explanation:
      "In overdose, excess acetaminophen is converted by CYP2E1 to NAPQI, which depletes glutathione and damages hepatocytes; N-acetylcysteine replenishes glutathione and is the antidote. Timely administration prevents fulminant liver failure.",
    choices: [
      { text: "NAPQI (N-acetyl-p-benzoquinone imine)", isCorrect: true },
      { text: "Normeperidine" },
      { text: "Acetaldehyde" },
      { text: "Oxalate" },
      { text: "Methemoglobin" },
    ],
  },
  {
    stem: "Which effects are shared by traditional nonselective NSAIDs? Select all that apply.",
    type: "MULTI",
    topic: "NSAIDs & Acetaminophen",
    explanation:
      "Nonselective NSAIDs relieve pain, reduce fever, and lower inflammation, but they also predispose to gastric ulcers and can impair renal perfusion, causing acute kidney injury in susceptible patients. They do not reliably improve renal blood flow — the opposite is true.",
    choices: [
      { text: "Analgesia and antipyresis", isCorrect: true },
      { text: "Anti-inflammatory effect", isCorrect: true },
      { text: "Risk of gastric ulceration", isCorrect: true },
      { text: "Risk of acute kidney injury in susceptible patients", isCorrect: true },
      { text: "Reliable improvement in renal blood flow" },
    ],
  },
  {
    stem: "True or False: Aspirin is generally avoided in children with viral illness because of its association with Reye syndrome.",
    type: "TRUE_FALSE",
    topic: "NSAIDs & Acetaminophen",
    explanation:
      "True. Aspirin use during viral infections in children is linked to Reye syndrome, a serious condition with encephalopathy and hepatic failure, so acetaminophen or ibuprofen is used instead. This is a longstanding pediatric safety rule.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  /* ══════════════ GOUT & IMMUNOMODULATORS ══════════════ */
  {
    stem: "Allopurinol lowers uric acid for chronic gout by inhibiting:",
    topic: "Gout & Immunomodulators",
    explanation:
      "Allopurinol inhibits xanthine oxidase, reducing uric acid production; it is used for long-term prevention, not acute attacks, and starting it can transiently precipitate a flare, so prophylaxis is co-prescribed. It interacts with azathioprine, whose metabolism depends on the same enzyme.",
    choices: [
      { text: "Xanthine oxidase", isCorrect: true },
      { text: "Cyclooxygenase" },
      { text: "Uricase" },
      { text: "The renal urate transporter, increasing production" },
      { text: "Dihydrofolate reductase" },
    ],
  },
  {
    stem: "Colchicine relieves an acute gout flare by:",
    topic: "Gout & Immunomodulators",
    explanation:
      "Colchicine binds tubulin and inhibits microtubule polymerization, impairing neutrophil migration and the inflammatory response to urate crystals. Its narrow therapeutic index means gastrointestinal toxicity (diarrhea) is common and overdose is dangerous.",
    choices: [
      { text: "Inhibiting microtubule-dependent neutrophil migration", isCorrect: true },
      { text: "Blocking xanthine oxidase" },
      { text: "Increasing uric acid excretion" },
      { text: "Blocking cyclooxygenase" },
      { text: "Dissolving urate crystals chemically" },
    ],
  },
  {
    stem: "Probenecid lowers serum uric acid by a mechanism different from allopurinol. It:",
    topic: "Gout & Immunomodulators",
    explanation:
      "Probenecid is a uricosuric that blocks renal tubular reabsorption of uric acid, increasing its excretion; adequate hydration reduces the risk of urate stones. It is chosen for under-excretors and is ineffective in significant renal impairment.",
    choices: [
      { text: "Increases renal uric acid excretion", isCorrect: true },
      { text: "Blocks uric acid production" },
      { text: "Inhibits microtubules" },
      { text: "Destroys urate crystals" },
      { text: "Blocks cyclooxygenase" },
    ],
  },
  {
    stem: "Methotrexate, used in rheumatoid arthritis and as an immunosuppressant, acts by inhibiting:",
    topic: "Gout & Immunomodulators",
    explanation:
      "Methotrexate inhibits dihydrofolate reductase, impairing folate-dependent DNA synthesis in rapidly dividing cells and modulating inflammation; folic acid supplementation reduces toxicity. Its adverse effects include myelosuppression, hepatotoxicity and mucositis.",
    choices: [
      { text: "Dihydrofolate reductase", isCorrect: true },
      { text: "Xanthine oxidase" },
      { text: "Cyclooxygenase" },
      { text: "Tumor necrosis factor" },
      { text: "The proton pump" },
    ],
  },
  {
    stem: "Biologic agents such as the TNF-alpha inhibitors (e.g., infliximab, etanercept) require screening for which infection before use?",
    topic: "Gout & Immunomodulators",
    explanation:
      "TNF-alpha inhibitors impair granuloma maintenance, so latent tuberculosis can reactivate; screening (and treating) latent TB before starting is mandatory. They also raise the risk of other serious and opportunistic infections.",
    choices: [
      { text: "Latent tuberculosis", isCorrect: true },
      { text: "Latent influenza" },
      { text: "Latent malaria" },
      { text: "Latent candidiasis" },
      { text: "Latent pinworm" },
    ],
  },
  {
    stem: "True or False: Allopurinol should not be started during an acute gout attack without anti-inflammatory cover because it can worsen or prolong the flare.",
    type: "TRUE_FALSE",
    topic: "Gout & Immunomodulators",
    explanation:
      "True. Abrupt changes in urate levels can mobilize crystals and intensify an acute attack, so urate-lowering therapy is begun with anti-inflammatory prophylaxis (such as low-dose colchicine or an NSAID). Timing is a key management principle.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  /* ══════════════ TOXICOLOGY — ANTIDOTES ══════════════ */
  {
    stem: "The antidote for acetaminophen (paracetamol) poisoning is:",
    topic: "Toxicology — Antidotes",
    explanation:
      "N-acetylcysteine restores hepatic glutathione, detoxifying the reactive metabolite NAPQI, and is most effective when given early after acetaminophen overdose. Dosing is guided by the timed serum level plotted on a treatment nomogram.",
    choices: [
      { text: "N-acetylcysteine", isCorrect: true },
      { text: "Naloxone" },
      { text: "Flumazenil" },
      { text: "Deferoxamine" },
      { text: "Atropine" },
    ],
  },
  {
    stem: "A patient with organophosphate (cholinergic) poisoning is treated with atropine plus which second agent to reactivate acetylcholinesterase?",
    topic: "Toxicology — Antidotes",
    explanation:
      "Pralidoxime reactivates acetylcholinesterase if given before the enzyme-inhibitor bond 'ages,' while atropine blocks the muscarinic effects; together they counter organophosphate toxicity. The cholinergic crisis features salivation, lacrimation, and bronchorrhea.",
    choices: [
      { text: "Pralidoxime", isCorrect: true },
      { text: "Physostigmine" },
      { text: "Neostigmine" },
      { text: "Naloxone" },
      { text: "Flumazenil" },
    ],
  },
  {
    stem: "Which antidote is correctly paired with its poisoning?",
    topic: "Toxicology — Antidotes",
    explanation:
      "Digoxin toxicity is reversed with digoxin-specific antibody fragments (Fab). Naloxone treats opioids, not benzodiazepines; deferoxamine chelates iron, not lead; and vitamin K reverses warfarin, not heparin — so those pairings are wrong. Matching toxin to antidote is essential in emergencies.",
    choices: [
      { text: "Digoxin toxicity — digoxin immune Fab", isCorrect: true },
      { text: "Benzodiazepine overdose — naloxone" },
      { text: "Lead poisoning — deferoxamine" },
      { text: "Heparin overdose — vitamin K" },
      { text: "Opioid overdose — flumazenil" },
    ],
  },
  {
    stem: "Methanol or ethylene glycol poisoning is treated with fomepizole because it:",
    topic: "Toxicology — Antidotes",
    explanation:
      "Fomepizole inhibits alcohol dehydrogenase, preventing formation of the toxic metabolites (formic acid, oxalate) responsible for organ injury; ethanol is an older alternative acting the same way. Definitive treatment may still require dialysis.",
    choices: [
      { text: "Inhibits alcohol dehydrogenase, blocking toxic metabolite formation", isCorrect: true },
      { text: "Chelates the alcohol directly" },
      { text: "Speeds conversion to formic acid" },
      { text: "Reactivates acetylcholinesterase" },
      { text: "Binds opioid receptors" },
    ],
  },
  {
    stem: "Which toxin-antidote pairs are correct? Select all that apply.",
    type: "MULTI",
    topic: "Toxicology — Antidotes",
    explanation:
      "Opioids are reversed by naloxone, benzodiazepines by flumazenil (used cautiously), iron by deferoxamine, and cyanide by hydroxocobalamin (or the cyanide antidote kit). Warfarin is reversed by vitamin K, not protamine, so that pairing is incorrect.",
    choices: [
      { text: "Opioids — naloxone", isCorrect: true },
      { text: "Benzodiazepines — flumazenil", isCorrect: true },
      { text: "Iron — deferoxamine", isCorrect: true },
      { text: "Cyanide — hydroxocobalamin", isCorrect: true },
      { text: "Warfarin — protamine" },
    ],
  },
  {
    stem: "Lead poisoning in a symptomatic patient is treated with chelators such as:",
    topic: "Toxicology — Antidotes",
    explanation:
      "Chelating agents such as dimercaprol, EDTA (edetate calcium disodium) and oral succimer bind lead and enhance its excretion; the choice depends on severity. Removing ongoing exposure is equally important to prevent re-accumulation.",
    choices: [
      { text: "Succimer or EDTA", isCorrect: true },
      { text: "N-acetylcysteine" },
      { text: "Naloxone" },
      { text: "Fomepizole" },
      { text: "Pralidoxime" },
    ],
  },
  {
    stem: "True or False: Activated charcoal can reduce absorption of many ingested toxins but is ineffective for substances like iron, lithium, and alcohols.",
    type: "TRUE_FALSE",
    topic: "Toxicology — Antidotes",
    explanation:
      "True. Activated charcoal adsorbs many organic toxins if given early, but it binds metals such as iron and lithium and small alcohols poorly, so it is not useful for those. Knowing its limits guides decontamination decisions.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  /* ══════════════ TOXICOLOGY — SPECIFIC POISONS ══════════════ */
  {
    stem: "Carbon monoxide poisoning causes tissue hypoxia because it:",
    topic: "Toxicology — Specific Poisons",
    explanation:
      "Carbon monoxide binds hemoglobin with much higher affinity than oxygen, forming carboxyhemoglobin that cannot carry oxygen and shifts the dissociation curve leftward. Treatment is high-flow or hyperbaric oxygen; pulse oximetry can read falsely normal.",
    choices: [
      { text: "Binds hemoglobin far more avidly than oxygen", isCorrect: true },
      { text: "Destroys red cells directly" },
      { text: "Blocks the proton pump" },
      { text: "Inhibits acetylcholinesterase" },
      { text: "Chelates iron in the blood" },
    ],
  },
  {
    stem: "Cyanide is lethal because it inhibits which cellular process?",
    topic: "Toxicology — Specific Poisons",
    explanation:
      "Cyanide binds cytochrome c oxidase (complex IV), halting the electron transport chain and aerobic ATP production, forcing anaerobic metabolism and lactic acidosis. Antidotes include hydroxocobalamin and agents that induce methemoglobin to bind cyanide.",
    choices: [
      { text: "Mitochondrial cytochrome c oxidase in the electron transport chain", isCorrect: true },
      { text: "The sodium-potassium ATPase" },
      { text: "Acetylcholinesterase" },
      { text: "DNA polymerase" },
      { text: "The proton pump" },
    ],
  },
  {
    stem: "A patient who overdosed on a tricyclic antidepressant with a widened QRS is treated with:",
    topic: "Toxicology — Specific Poisons",
    explanation:
      "Sodium bicarbonate narrows the QRS in tricyclic overdose by overcoming sodium-channel blockade and alkalinizing the serum, reducing free drug. This ties the cardiotoxicity of TCAs back to their sodium-channel effect covered in CNS pharmacology.",
    choices: [
      { text: "Sodium bicarbonate", isCorrect: true },
      { text: "Naloxone" },
      { text: "Flumazenil" },
      { text: "Deferoxamine" },
      { text: "Pralidoxime" },
    ],
  },
  {
    stem: "Aspirin (salicylate) overdose classically produces which acid-base picture?",
    topic: "Toxicology — Specific Poisons",
    explanation:
      "Salicylate toxicity causes an early respiratory alkalosis from direct stimulation of the respiratory center, followed by a metabolic acidosis with elevated anion gap; alkalinizing the urine enhances salicylate elimination. Tinnitus is an early clue.",
    choices: [
      { text: "Mixed respiratory alkalosis and anion-gap metabolic acidosis", isCorrect: true },
      { text: "Isolated respiratory acidosis" },
      { text: "Isolated metabolic alkalosis" },
      { text: "Normal acid-base status" },
      { text: "Non-anion-gap acidosis only" },
    ],
  },
  {
    stem: "Which feature suggests opioid rather than another toxidrome?",
    topic: "Toxicology — Specific Poisons",
    explanation:
      "The opioid toxidrome combines pinpoint pupils (miosis), depressed respirations and reduced consciousness, reversed by naloxone. Dilated pupils with agitation would instead suggest a sympathomimetic or anticholinergic pattern, so pupil size helps distinguish them.",
    choices: [
      { text: "Pinpoint pupils with respiratory depression", isCorrect: true },
      { text: "Dilated pupils with hypertension and agitation" },
      { text: "Dry flushed skin with urinary retention" },
      { text: "Excess salivation and bronchorrhea" },
      { text: "Fever with muscular rigidity from dopamine blockade" },
    ],
  },
  {
    stem: "True or False: A sympathomimetic toxidrome (as with cocaine or amphetamines) typically presents with hypertension, tachycardia, hyperthermia, dilated pupils, and agitation.",
    type: "TRUE_FALSE",
    topic: "Toxicology — Specific Poisons",
    explanation:
      "True. Excess catecholamine activity produces hypertension, tachycardia, hyperthermia, mydriasis, diaphoresis and agitation. Recognizing this pattern, and distinguishing it from the anticholinergic toxidrome (which has dry skin), guides emergency management.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  /* ══════════════ CLINICAL APPLICATION ══════════════ */
  {
    stem: "A patient in diabetic ketoacidosis is treated with IV fluids, insulin, and careful attention to potassium because insulin therapy:",
    topic: "Clinical Application",
    explanation:
      "Insulin drives potassium into cells, so serum potassium can fall sharply during treatment even when it starts normal or high; potassium is repleted and monitored to prevent dangerous hypokalemia. This is a core safety point in ketoacidosis management.",
    choices: [
      { text: "Shifts potassium into cells, risking hypokalemia", isCorrect: true },
      { text: "Causes hyperkalemia that needs no monitoring" },
      { text: "Raises glucose further" },
      { text: "Has no effect on electrolytes" },
      { text: "Replaces the need for fluids" },
    ],
  },
  {
    stem: "An elderly patient on an NSAID, an ACE inhibitor, and a diuretic is at particular risk of acute kidney injury because this 'triple whammy':",
    topic: "Clinical Application",
    explanation:
      "The NSAID reduces prostaglandin-mediated afferent dilation, the ACE inhibitor dilates the efferent arteriole, and the diuretic lowers volume; together they can sharply reduce glomerular filtration. Recognizing this combination prevents avoidable renal injury.",
    choices: [
      { text: "Simultaneously undermines the three main defenses of glomerular perfusion", isCorrect: true },
      { text: "Causes direct tubular toxicity from the diuretic alone" },
      { text: "Precipitates crystals in the tubule" },
      { text: "Blocks potassium excretion only" },
      { text: "Has no meaningful interaction" },
    ],
  },
  {
    stem: "A patient starting long-term prednisone should also be considered for which preventive measure?",
    topic: "Clinical Application",
    explanation:
      "Because chronic glucocorticoids cause bone loss, calcium, vitamin D and often a bisphosphonate are considered to prevent steroid-induced osteoporosis; glucose and blood pressure are also monitored. Anticipating predictable toxicities is good chronic-care practice.",
    choices: [
      { text: "Bone protection with calcium, vitamin D, and possibly a bisphosphonate", isCorrect: true },
      { text: "Routine anticoagulation" },
      { text: "Prophylactic insulin for everyone" },
      { text: "Empiric antibiotics indefinitely" },
      { text: "Thyroid hormone replacement" },
    ],
  },
  {
    stem: "Which combination illustrates a rational, mechanism-based pairing to reduce a drug's harm?",
    topic: "Clinical Application",
    explanation:
      "Adding misoprostol or a proton pump inhibitor to an NSAID replaces or protects the prostaglandin-dependent gastric defenses the NSAID removes, reducing ulcer risk. Pairing two ulcerogenic drugs, or ignoring the risk, would not achieve this protective logic.",
    choices: [
      { text: "An NSAID plus a proton pump inhibitor for gastric protection", isCorrect: true },
      { text: "Two NSAIDs together for more effect" },
      { text: "A sulfonylurea plus insulin to prevent hypoglycemia" },
      { text: "A beta-blocker plus verapamil for safety" },
      { text: "An ACE inhibitor plus potassium supplement routinely" },
    ],
  },
  {
    stem: "Which principles of managing a poisoned patient are sound? Select all that apply.",
    type: "MULTI",
    topic: "Clinical Application",
    explanation:
      "Good practice stabilizes airway, breathing and circulation first, identifies the toxidrome to guide therapy, gives a specific antidote when one exists, and considers decontamination or enhanced elimination when appropriate. Giving every patient the same antidote regardless of the toxin is unsafe and irrational.",
    choices: [
      { text: "Stabilize airway, breathing, and circulation first", isCorrect: true },
      { text: "Identify the toxidrome to guide treatment", isCorrect: true },
      { text: "Use a specific antidote when one exists", isCorrect: true },
      { text: "Consider decontamination or enhanced elimination when appropriate", isCorrect: true },
      { text: "Give the same antidote to every poisoned patient" },
    ],
  },
  {
    stem: "True or False: Because it lacks meaningful anti-inflammatory and antiplatelet effects, acetaminophen is often preferred over NSAIDs for simple pain in patients with peptic ulcer disease or on anticoagulants.",
    type: "TRUE_FALSE",
    topic: "Clinical Application",
    explanation:
      "True. Acetaminophen spares the gastric mucosa and platelet function, making it a safer analgesic choice when NSAID-related bleeding or ulceration would be dangerous, provided the dose stays within hepatic limits. This integrates its pharmacology with clinical decision-making.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
];
