/**
 * CONTENT WAVE 11 — Endocrinology
 *
 * 75 original questions in the REVISED structure:
 *
 *   PRACTICE  Set 1 (25) · Set 2 (25) · Set 3 (25)   — larger sets
 *   EXAMS     Exam 1 (50, from Sets 1+2) · Exam 2 (75, everything)
 *
 * Bigger practice sets and exactly two exams, per the revised brief.
 *
 * Endocrinology rewards understanding feedback loops rather than memorising
 * lists: almost every disorder is a loop broken in one of three places — the
 * hypothalamus, the pituitary, or the end organ. The rationales point back to
 * that structure repeatedly.
 *
 * Every write retries on a dropped connection.
 *
 * Run:  npx tsx prisma/seed-endocrinology.ts
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Q = {
  stem: string;
  topic: string;
  explanation: string;
  choices: { text: string; isCorrect: boolean }[];
};

/* ═══════════ SET 1 — Thyroid, Parathyroid, Adrenal ═══════════ */

const SET1: Q[] = [
  {
    stem: "Which pattern of thyroid function tests indicates PRIMARY hypothyroidism?",
    topic: "Thyroid",
    explanation:
      "High TSH with low free T4. The gland has failed, so the pituitary drives it harder and TSH rises — the raised TSH is the pituitary working correctly. Secondary hypothyroidism shows LOW or inappropriately normal TSH with low T4, because the pituitary itself is the problem.",
    choices: [
      { text: "High TSH with low free T4", isCorrect: true },
      { text: "Low TSH with low free T4", isCorrect: false },
      { text: "High TSH with high free T4", isCorrect: false },
      { text: "Low TSH with high free T4", isCorrect: false },
    ],
  },
  {
    stem: "A patient has low TSH with high free T4. Which diagnosis fits?",
    topic: "Thyroid",
    explanation:
      "Primary hyperthyroidism. Excess thyroid hormone suppresses TSH through negative feedback. Graves' disease is the commonest cause, where TSH receptor antibodies stimulate the gland — the antibody bypasses the feedback loop entirely, which is why TSH is fully suppressed.",
    choices: [
      { text: "Primary hyperthyroidism", isCorrect: true },
      { text: "Primary hypothyroidism", isCorrect: false },
      { text: "Secondary hypothyroidism", isCorrect: false },
      { text: "Sick euthyroid syndrome", isCorrect: false },
    ],
  },
  {
    stem: "Which features distinguish Graves' disease from other causes of hyperthyroidism?",
    topic: "Thyroid",
    explanation:
      "Eye signs — proptosis, lid lag, ophthalmoplegia — and pretibial myxoedema, neither of which occurs in toxic nodular disease. They arise because TSH receptor antibodies also target retro-orbital and dermal fibroblasts, so the pathology is not confined to the thyroid.",
    choices: [
      { text: "Orbitopathy and pretibial myxoedema, from antibodies acting outside the thyroid", isCorrect: true },
      { text: "Weight loss and tremor", isCorrect: false },
      { text: "A palpable goitre", isCorrect: false },
      { text: "Atrial fibrillation", isCorrect: false },
    ],
  },
  {
    stem: "What is the mechanism of carbimazole in hyperthyroidism, and which adverse effect must patients be warned about?",
    topic: "Thyroid",
    explanation:
      "It inhibits thyroid peroxidase, blocking hormone synthesis. The critical warning is agranulocytosis — any sore throat or fever requires an urgent full blood count and stopping the drug. It is rare but potentially fatal, and patients who are not warned present too late.",
    choices: [
      { text: "Blocks thyroid peroxidase — warn about agranulocytosis with sore throat or fever", isCorrect: true },
      { text: "Destroys thyroid tissue — warn about permanent hypothyroidism only", isCorrect: false },
      { text: "Blocks peripheral conversion — warn about hypotension", isCorrect: false },
      { text: "Blocks TSH release — warn about weight gain", isCorrect: false },
    ],
  },
  {
    stem: "Why is a beta-blocker often given alongside antithyroid drugs at the start of treatment?",
    topic: "Thyroid",
    explanation:
      "Antithyroid drugs block synthesis but do not touch hormone already stored in the gland, so symptoms persist for weeks. A beta-blocker controls the adrenergic symptoms — tremor, palpitations, anxiety — in the meantime. Propranolol additionally reduces peripheral T4 to T3 conversion.",
    choices: [
      { text: "Antithyroid drugs take weeks to work, so it controls adrenergic symptoms meanwhile", isCorrect: true },
      { text: "It blocks thyroid hormone synthesis directly", isCorrect: false },
      { text: "It prevents agranulocytosis", isCorrect: false },
      { text: "It is required lifelong in all patients", isCorrect: false },
    ],
  },
  {
    stem: "A patient with hyperthyroidism becomes febrile, agitated and tachycardic with heart failure after an infection. What is the diagnosis?",
    topic: "Thyroid",
    explanation:
      "Thyroid storm — decompensated thyrotoxicosis, usually precipitated by infection, surgery or iodine load. It carries significant mortality and needs beta-blockade, antithyroid drugs, iodine (given AFTER the antithyroid drug), corticosteroids and treatment of the precipitant. Order matters: iodine given first would fuel hormone synthesis.",
    choices: [
      { text: "Thyroid storm — iodine must be given after the antithyroid drug, not before", isCorrect: true },
      { text: "Simple anxiety with fever", isCorrect: false },
      { text: "Myxoedema coma", isCorrect: false },
      { text: "Phaeochromocytoma", isCorrect: false },
    ],
  },
  {
    stem: "Which thyroid cancer arises from parafollicular C cells and secretes calcitonin?",
    topic: "Thyroid",
    explanation:
      "Medullary carcinoma. It does not take up iodine, so radioiodine is ineffective — surgery is the treatment. It can be part of MEN 2, which is why a phaeochromocytoma must be excluded BEFORE thyroid surgery; operating on an undiagnosed phaeo can precipitate a hypertensive crisis.",
    choices: [
      { text: "Medullary carcinoma — exclude phaeochromocytoma before operating", isCorrect: true },
      { text: "Papillary carcinoma", isCorrect: false },
      { text: "Follicular carcinoma", isCorrect: false },
      { text: "Anaplastic carcinoma", isCorrect: false },
    ],
  },
  {
    stem: "A patient has hypercalcaemia with an inappropriately normal or raised PTH. What is the diagnosis?",
    topic: "Parathyroid",
    explanation:
      "Primary hyperparathyroidism — usually a single adenoma. The key word is INAPPROPRIATE: a normal PTH is abnormal when calcium is high, because it should be fully suppressed. Malignancy-associated hypercalcaemia shows a suppressed PTH, which separates the two immediately.",
    choices: [
      { text: "Primary hyperparathyroidism — a normal PTH is inappropriate when calcium is high", isCorrect: true },
      { text: "Hypercalcaemia of malignancy", isCorrect: false },
      { text: "Vitamin D toxicity", isCorrect: false },
      { text: "Sarcoidosis", isCorrect: false },
    ],
  },
  {
    stem: "Which symptoms characterise hypercalcaemia?",
    topic: "Parathyroid",
    explanation:
      "Bones, stones, abdominal groans and psychic moans — bone pain, renal stones, constipation and abdominal pain, plus confusion and depression. Polyuria and polydipsia occur because calcium impairs the renal concentrating mechanism, causing a nephrogenic diabetes insipidus picture.",
    choices: [
      { text: "Bone pain, renal stones, abdominal pain, confusion, polyuria", isCorrect: true },
      { text: "Tetany, perioral tingling and carpopedal spasm", isCorrect: false },
      { text: "Hypotension with bradycardia only", isCorrect: false },
      { text: "Weight gain and cold intolerance", isCorrect: false },
    ],
  },
  {
    stem: "A patient develops perioral tingling and carpopedal spasm after thyroid surgery. What has happened?",
    topic: "Parathyroid",
    explanation:
      "Hypocalcaemia from parathyroid damage or removal. Chvostek's and Trousseau's signs confirm neuromuscular irritability. Calcium must be checked and replaced — severe hypocalcaemia causes laryngospasm and seizures, so this is not a finding to observe overnight.",
    choices: [
      { text: "Hypocalcaemia from parathyroid injury during surgery", isCorrect: true },
      { text: "Hypercalcaemia from parathyroid stimulation", isCorrect: false },
      { text: "Recurrent laryngeal nerve palsy", isCorrect: false },
      { text: "Thyroid storm", isCorrect: false },
    ],
  },
  {
    stem: "Which biochemical pattern indicates primary adrenal insufficiency (Addison's disease)?",
    topic: "Adrenal",
    explanation:
      "Low cortisol with HIGH ACTH, plus hyponatraemia and hyperkalaemia. Because the whole adrenal cortex fails, aldosterone is lost too — hence the hyperkalaemia. High ACTH also explains the hyperpigmentation, since its precursor stimulates melanocytes.",
    choices: [
      { text: "Low cortisol, high ACTH, hyponatraemia and hyperkalaemia", isCorrect: true },
      { text: "Low cortisol with low ACTH and normal potassium", isCorrect: false },
      { text: "High cortisol with suppressed ACTH", isCorrect: false },
      { text: "Normal cortisol with high aldosterone", isCorrect: false },
    ],
  },
  {
    stem: "Why does secondary adrenal insufficiency NOT cause hyperkalaemia?",
    topic: "Adrenal",
    explanation:
      "Aldosterone is regulated chiefly by the renin-angiotensin system rather than ACTH, so pituitary failure spares it. Potassium therefore stays normal, and hyperpigmentation is absent because ACTH is low. Those two differences distinguish it from Addison's at the bedside.",
    choices: [
      { text: "Aldosterone is controlled by renin-angiotensin, not ACTH, so it is preserved", isCorrect: true },
      { text: "Potassium is excreted by a different mechanism entirely", isCorrect: false },
      { text: "It always causes hypokalaemia instead", isCorrect: false },
      { text: "There is no difference between primary and secondary", isCorrect: false },
    ],
  },
  {
    stem: "A patient on long-term prednisolone develops vomiting and hypotension during a severe infection. What must be done?",
    topic: "Adrenal",
    explanation:
      "Give stress-dose hydrocortisone — this is an adrenal crisis. Chronic steroids suppress the axis, so the adrenal cannot mount the surge that illness demands. Treatment must not wait for a cortisol result; sick-day rules exist precisely to prevent this and are frequently not taught to patients.",
    choices: [
      { text: "Give immediate parenteral hydrocortisone — do not wait for cortisol results", isCorrect: true },
      { text: "Stop the steroid abruptly", isCorrect: false },
      { text: "Halve the usual steroid dose", isCorrect: false },
      { text: "Await a random cortisol before acting", isCorrect: false },
    ],
  },
  {
    stem: "Which test is used to screen for Cushing's syndrome?",
    topic: "Adrenal",
    explanation:
      "The overnight low-dose dexamethasone suppression test, late-night salivary cortisol, or 24-hour urinary free cortisol. A random cortisol is useless because of diurnal variation. Failure to suppress with dexamethasone demonstrates loss of normal negative feedback, which is the defining abnormality.",
    choices: [
      { text: "Overnight dexamethasone suppression, late-night salivary cortisol or 24-hour urinary cortisol", isCorrect: true },
      { text: "A single random morning cortisol", isCorrect: false },
      { text: "Serum ACTH alone", isCorrect: false },
      { text: "Adrenal ultrasound", isCorrect: false },
    ],
  },
  {
    stem: "What is the commonest cause of Cushing's SYNDROME overall?",
    topic: "Adrenal",
    explanation:
      "Exogenous corticosteroid therapy — by a wide margin. Cushing's DISEASE specifically means a pituitary ACTH-secreting adenoma. The distinction matters: iatrogenic Cushing's shows suppressed ACTH and suppressed endogenous cortisol, and the treatment is careful dose reduction rather than investigation.",
    choices: [
      { text: "Exogenous corticosteroid treatment", isCorrect: true },
      { text: "Pituitary adenoma (Cushing's disease)", isCorrect: false },
      { text: "Adrenal carcinoma", isCorrect: false },
      { text: "Ectopic ACTH from small cell lung cancer", isCorrect: false },
    ],
  },
  {
    stem: "A patient has hypertension with hypokalaemia and a raised aldosterone-to-renin ratio. What is the diagnosis?",
    topic: "Adrenal",
    explanation:
      "Primary hyperaldosteronism. Autonomous aldosterone secretion suppresses renin, so the RATIO is what identifies it — a high aldosterone with a low renin. It is among the commonest treatable causes of secondary hypertension and is substantially under-diagnosed.",
    choices: [
      { text: "Primary hyperaldosteronism (Conn's syndrome)", isCorrect: true },
      { text: "Renal artery stenosis", isCorrect: false },
      { text: "Phaeochromocytoma", isCorrect: false },
      { text: "Essential hypertension", isCorrect: false },
    ],
  },
  {
    stem: "A patient has episodic headache, sweating and palpitations with severe paroxysmal hypertension. What should be excluded?",
    topic: "Adrenal",
    explanation:
      "Phaeochromocytoma. Diagnosis is by plasma or urinary metanephrines. Crucially, alpha-blockade must be established BEFORE beta-blockade — giving a beta-blocker first leaves alpha-mediated vasoconstriction unopposed and can precipitate a hypertensive crisis.",
    choices: [
      { text: "Phaeochromocytoma — alpha-blockade must precede beta-blockade", isCorrect: true },
      { text: "Panic disorder — reassure", isCorrect: false },
      { text: "Essential hypertension — start a beta-blocker", isCorrect: false },
      { text: "Hyperthyroidism only", isCorrect: false },
    ],
  },
  {
    stem: "Which enzyme deficiency accounts for most congenital adrenal hyperplasia?",
    topic: "Adrenal",
    explanation:
      "21-hydroxylase deficiency. Cortisol and aldosterone synthesis is blocked so precursors are shunted into androgens — producing virilisation, and salt-wasting crisis in severe forms. Loss of cortisol feedback drives ACTH up, which causes the adrenal hyperplasia the condition is named for.",
    choices: [
      { text: "21-hydroxylase deficiency", isCorrect: true },
      { text: "11-beta-hydroxylase deficiency", isCorrect: false },
      { text: "17-alpha-hydroxylase deficiency", isCorrect: false },
      { text: "Aldosterone synthase deficiency", isCorrect: false },
    ],
  },
  {
    stem: "Which finding on an incidentally discovered adrenal mass would most concern you?",
    topic: "Adrenal",
    explanation:
      "Large size with irregular margins and heterogeneous imaging characteristics, suggesting malignancy. Every adrenal incidentaloma needs two questions answered: is it functioning, and is it malignant. Functional assessment must include excluding phaeochromocytoma before any biopsy or surgery.",
    choices: [
      { text: "Large size with irregular, heterogeneous features suggesting malignancy", isCorrect: true },
      { text: "Small size with smooth margins and low density", isCorrect: false },
      { text: "Bilateral small nodules only", isCorrect: false },
      { text: "Any adrenal mass is benign by definition", isCorrect: false },
    ],
  },
  {
    stem: "What does the short Synacthen test assess?",
    topic: "Adrenal",
    explanation:
      "The adrenal cortex's ability to produce cortisol in response to synthetic ACTH. An inadequate rise indicates adrenal insufficiency. In long-standing secondary insufficiency the adrenal atrophies from lack of stimulation, so the test can be abnormal there too — it demonstrates the gland can't respond, not why.",
    choices: [
      { text: "Whether the adrenal cortex can produce cortisol in response to ACTH", isCorrect: true },
      { text: "Whether the pituitary can produce ACTH", isCorrect: false },
      { text: "Aldosterone production only", isCorrect: false },
      { text: "Thyroid reserve", isCorrect: false },
    ],
  },
  {
    stem: "Which electrolyte abnormality would you expect in untreated Addison's disease?",
    topic: "Adrenal",
    explanation:
      "Hyponatraemia with hyperkalaemia. Aldosterone deficiency causes sodium loss and potassium retention, while cortisol deficiency contributes to hyponatraemia through impaired free water excretion. Hypoglycaemia and a mild metabolic acidosis may also occur.",
    choices: [
      { text: "Hyponatraemia with hyperkalaemia", isCorrect: true },
      { text: "Hypernatraemia with hypokalaemia", isCorrect: false },
      { text: "Hypernatraemia with hyperkalaemia", isCorrect: false },
      { text: "Normal electrolytes throughout", isCorrect: false },
    ],
  },
  {
    stem: "A patient with severe illness has low T3, normal or low TSH and normal T4. What is this?",
    topic: "Thyroid",
    explanation:
      "Sick euthyroid syndrome — an adaptive response to serious illness, not thyroid disease. Peripheral conversion of T4 to T3 falls. It should NOT be treated with thyroxine, and thyroid function is best rechecked after recovery, since testing during acute illness produces misleading results.",
    choices: [
      { text: "Sick euthyroid syndrome — do not treat, recheck after recovery", isCorrect: true },
      { text: "Primary hypothyroidism requiring thyroxine", isCorrect: false },
      { text: "Secondary hypothyroidism requiring investigation now", isCorrect: false },
      { text: "Subclinical hyperthyroidism", isCorrect: false },
    ],
  },
  {
    stem: "Which drug commonly causes both hypothyroidism AND hyperthyroidism?",
    topic: "Thyroid",
    explanation:
      "Amiodarone, because of its very high iodine content and direct thyroid toxicity. It can cause either, sometimes in the same patient over time, and its long half-life means effects persist for months after stopping. Thyroid function must be monitored regularly during treatment.",
    choices: [
      { text: "Amiodarone", isCorrect: true },
      { text: "Atenolol", isCorrect: false },
      { text: "Amlodipine", isCorrect: false },
      { text: "Aspirin", isCorrect: false },
    ],
  },
  {
    stem: "Why should thyroxine be taken on an empty stomach, separated from certain other medications?",
    topic: "Thyroid",
    explanation:
      "Absorption is impaired by food, calcium, iron, proton pump inhibitors and some antacids. Patients whose TSH remains high despite adequate doses are often taking it with breakfast or alongside iron — checking HOW they take it is more useful than escalating the dose.",
    choices: [
      { text: "Food, calcium, iron and PPIs all impair its absorption", isCorrect: true },
      { text: "It causes nausea if taken with food", isCorrect: false },
      { text: "It is destroyed by gastric acid", isCorrect: false },
      { text: "Timing makes no difference to absorption", isCorrect: false },
    ],
  },
  {
    stem: "How should thyroxine be initiated in an elderly patient with ischaemic heart disease?",
    topic: "Thyroid",
    explanation:
      "At a low dose with slow titration. Restoring metabolic rate increases myocardial oxygen demand, and a full replacement dose can precipitate angina or infarction. Starting low and increasing gradually with symptom review is the safe approach — the hypothyroidism has usually been present for months already.",
    choices: [
      { text: "Start low and titrate slowly to avoid precipitating angina", isCorrect: true },
      { text: "Start at full replacement dose immediately", isCorrect: false },
      { text: "Withhold thyroxine entirely", isCorrect: false },
      { text: "Give intravenous thyroxine first", isCorrect: false },
    ],
  },
];

/* ═══════════ SET 2 — Diabetes ═══════════ */

const SET2: Q[] = [
  {
    stem: "What distinguishes type 1 from type 2 diabetes pathologically?",
    topic: "Diabetes Classification",
    explanation:
      "Type 1 is autoimmune destruction of beta cells producing absolute insulin deficiency; type 2 is insulin resistance with progressive relative insulin deficiency. This is why type 1 requires insulin from diagnosis and cannot be managed with oral agents, and why it presents with ketoacidosis while type 2 more often presents with hyperosmolar states.",
    choices: [
      { text: "Type 1 is autoimmune beta cell destruction; type 2 is insulin resistance", isCorrect: true },
      { text: "Type 1 is insulin resistance; type 2 is autoimmune", isCorrect: false },
      { text: "Both are caused by insulin resistance", isCorrect: false },
      { text: "Type 1 only occurs in children", isCorrect: false },
    ],
  },
  {
    stem: "Which criteria establish a diagnosis of diabetes?",
    topic: "Diabetes Classification",
    explanation:
      "Fasting glucose at or above 7.0 mmol/L, a 2-hour OGTT value at or above 11.1, random glucose at or above 11.1 with symptoms, or HbA1c at or above 48 mmol/mol. In an asymptomatic person a single abnormal result must be repeated — one reading is not a diagnosis.",
    choices: [
      { text: "Fasting ≥7.0, OGTT ≥11.1, random ≥11.1 with symptoms, or HbA1c ≥48 mmol/mol", isCorrect: true },
      { text: "A single random glucose above 6.0 mmol/L", isCorrect: false },
      { text: "Any glycosuria on dipstick", isCorrect: false },
      { text: "Fasting glucose above 5.0 mmol/L", isCorrect: false },
    ],
  },
  {
    stem: "In which situations is HbA1c unreliable for diagnosis or monitoring?",
    topic: "Diabetes Monitoring",
    explanation:
      "Anything altering red cell lifespan — haemoglobinopathies, haemolysis, recent transfusion, iron or B12 deficiency, pregnancy, and significant renal or liver disease. HbA1c reflects average glycaemia over red cell lifespan, so if that lifespan is abnormal the number is meaningless.",
    choices: [
      { text: "Conditions altering red cell lifespan — haemolysis, haemoglobinopathy, recent transfusion, pregnancy", isCorrect: true },
      { text: "It is reliable in every clinical situation", isCorrect: false },
      { text: "Only in patients over 80", isCorrect: false },
      { text: "Only in type 1 diabetes", isCorrect: false },
    ],
  },
  {
    stem: "What is the mechanism of metformin, and why does it not cause hypoglycaemia alone?",
    topic: "Diabetes Pharmacology",
    explanation:
      "It reduces hepatic gluconeogenesis and improves peripheral insulin sensitivity. Because it does not stimulate insulin secretion, it does not drive glucose below normal on its own. That safety profile, plus weight neutrality and cardiovascular data, is why it remains first line.",
    choices: [
      { text: "It reduces hepatic glucose output without stimulating insulin secretion", isCorrect: true },
      { text: "It stimulates pancreatic insulin release", isCorrect: false },
      { text: "It blocks intestinal glucose absorption entirely", isCorrect: false },
      { text: "It replaces endogenous insulin", isCorrect: false },
    ],
  },
  {
    stem: "When must metformin be reviewed or withheld?",
    topic: "Diabetes Pharmacology",
    explanation:
      "In significant renal impairment — typically reduced below eGFR 45 and stopped below 30 — and withheld during acute illness, dehydration and around iodinated contrast. Accumulation raises lactic acidosis risk. The absolute risk is low, but the consequence is severe.",
    choices: [
      { text: "In renal impairment, acute illness, dehydration and around contrast studies", isCorrect: true },
      { text: "Only if the patient is over 70", isCorrect: false },
      { text: "It never needs adjustment", isCorrect: false },
      { text: "Only in type 1 diabetes", isCorrect: false },
    ],
  },
  {
    stem: "Which diabetes drug class causes hypoglycaemia by stimulating insulin release regardless of glucose level?",
    topic: "Diabetes Pharmacology",
    explanation:
      "Sulfonylureas, which close the beta cell potassium channel and drive insulin release whether or not glucose is high. That glucose-independence is precisely why they cause hypoglycaemia — and why it can be prolonged in the elderly or in renal impairment, sometimes requiring admission.",
    choices: [
      { text: "Sulfonylureas", isCorrect: true },
      { text: "Metformin", isCorrect: false },
      { text: "SGLT2 inhibitors", isCorrect: false },
      { text: "DPP-4 inhibitors", isCorrect: false },
    ],
  },
  {
    stem: "How do GLP-1 receptor agonists work, and what is their notable additional effect?",
    topic: "Diabetes Pharmacology",
    explanation:
      "They enhance glucose-DEPENDENT insulin secretion, suppress glucagon, slow gastric emptying and increase satiety — producing substantial weight loss alongside glycaemic benefit. Glucose-dependence means minimal hypoglycaemia risk when used alone. Nausea is the commonest limiting effect.",
    choices: [
      { text: "Glucose-dependent insulin secretion plus appetite suppression and weight loss", isCorrect: true },
      { text: "Glucose-independent insulin release causing frequent hypoglycaemia", isCorrect: false },
      { text: "Increased urinary glucose excretion", isCorrect: false },
      { text: "Direct insulin replacement", isCorrect: false },
    ],
  },
  {
    stem: "Why do SGLT2 inhibitors benefit the heart and kidneys beyond glucose lowering?",
    topic: "Diabetes Pharmacology",
    explanation:
      "Blocking proximal sodium-glucose reabsorption increases sodium delivery to the macula densa, restoring tubuloglomerular feedback and relieving glomerular hyperfiltration, while natriuresis reduces preload. These mechanical effects explain why they help in heart failure and CKD even without diabetes.",
    choices: [
      { text: "Restored tubuloglomerular feedback reduces hyperfiltration, and natriuresis reduces preload", isCorrect: true },
      { text: "They directly strengthen cardiac contractility", isCorrect: false },
      { text: "They repair damaged nephrons", isCorrect: false },
      { text: "The benefit is entirely from glucose lowering", isCorrect: false },
    ],
  },
  {
    stem: "What is euglycaemic diabetic ketoacidosis, and which drug class is associated with it?",
    topic: "Diabetes Emergencies",
    explanation:
      "Ketoacidosis with a near-normal glucose, associated with SGLT2 inhibitors. Urinary glucose loss keeps the reading low while ketosis proceeds, so it is easily missed if ketones are not checked. Sick-day rules — holding the drug during acute illness, fasting or surgery — are the main preventive measure.",
    choices: [
      { text: "Ketoacidosis with near-normal glucose, associated with SGLT2 inhibitors", isCorrect: true },
      { text: "Ketoacidosis with very high glucose from insulin omission", isCorrect: false },
      { text: "Hypoglycaemia with ketosis from sulfonylureas", isCorrect: false },
      { text: "A benign finding requiring no action", isCorrect: false },
    ],
  },
  {
    stem: "What are the three biochemical criteria defining diabetic ketoacidosis?",
    topic: "Diabetes Emergencies",
    explanation:
      "Hyperglycaemia (or known diabetes), ketonaemia, and metabolic acidosis. All three are required — hyperglycaemia alone is not DKA, and as euglycaemic DKA shows, the glucose need not be dramatically raised. Ketones and pH are what define it.",
    choices: [
      { text: "Hyperglycaemia or known diabetes, ketonaemia, and acidosis", isCorrect: true },
      { text: "Hyperglycaemia alone", isCorrect: false },
      { text: "Ketonuria alone", isCorrect: false },
      { text: "Dehydration with a raised urea", isCorrect: false },
    ],
  },
  {
    stem: "Why does potassium fall sharply after starting insulin in DKA, despite a normal or high initial level?",
    topic: "Diabetes Emergencies",
    explanation:
      "Insulin drives potassium into cells, unmasking a profound total-body deficit that acidosis had been concealing by shifting potassium out. Potassium replacement therefore begins early — usually once the level is below the upper normal range — and is monitored hourly. Failing to anticipate this causes fatal arrhythmia.",
    choices: [
      { text: "Insulin shifts potassium intracellularly, revealing a large total-body deficit", isCorrect: true },
      { text: "Insulin increases renal potassium excretion", isCorrect: false },
      { text: "Potassium is consumed in ketone metabolism", isCorrect: false },
      { text: "The initial level is usually a laboratory error", isCorrect: false },
    ],
  },
  {
    stem: "How does hyperosmolar hyperglycaemic state differ from DKA?",
    topic: "Diabetes Emergencies",
    explanation:
      "Much higher glucose and osmolality with profound dehydration but minimal ketosis and no significant acidosis, because residual insulin is enough to suppress ketogenesis. It occurs in type 2 diabetes, develops over days, and carries higher mortality. Fluid replacement is more gradual than in DKA.",
    choices: [
      { text: "Higher glucose and osmolality, marked dehydration, but minimal ketosis and acidosis", isCorrect: true },
      { text: "Lower glucose with severe ketoacidosis", isCorrect: false },
      { text: "It occurs only in type 1 diabetes", isCorrect: false },
      { text: "It develops within hours and resolves quickly", isCorrect: false },
    ],
  },
  {
    stem: "What is the immediate treatment for hypoglycaemia in a conscious patient who can swallow?",
    topic: "Diabetes Emergencies",
    explanation:
      "Fast-acting oral carbohydrate, followed by a longer-acting carbohydrate once glucose recovers — the second step prevents rebound, especially with sulfonylureas or long-acting insulin. If unconscious, intramuscular glucagon or intravenous glucose is used, then oral carbohydrate on waking.",
    choices: [
      { text: "Fast-acting carbohydrate, then longer-acting carbohydrate to prevent recurrence", isCorrect: true },
      { text: "Intravenous insulin", isCorrect: false },
      { text: "Wait and recheck in one hour", isCorrect: false },
      { text: "Intramuscular glucagon is required in all cases", isCorrect: false },
    ],
  },
  {
    stem: "What is hypoglycaemia unawareness, and why does it matter?",
    topic: "Diabetes Complications",
    explanation:
      "Loss of the adrenergic warning symptoms, so the first sign becomes confusion or unconsciousness. Recurrent hypoglycaemia causes it, and it can be partially reversed by deliberately avoiding hypoglycaemia for several weeks. It has major implications for driving and for glycaemic targets.",
    choices: [
      { text: "Loss of warning symptoms, caused by recurrent hypoglycaemia and partly reversible", isCorrect: true },
      { text: "An inability to measure blood glucose", isCorrect: false },
      { text: "A permanent, untreatable condition", isCorrect: false },
      { text: "A sign of good glycaemic control", isCorrect: false },
    ],
  },
  {
    stem: "Which is the earliest detectable sign of diabetic nephropathy?",
    topic: "Diabetes Complications",
    explanation:
      "Moderately increased albuminuria on urine albumin-to-creatinine ratio, which precedes any rise in creatinine by years. That long silent window is exactly why annual screening is recommended — waiting for creatinine to rise means waiting until significant damage is done.",
    choices: [
      { text: "Moderately increased albuminuria on ACR", isCorrect: true },
      { text: "A rising serum creatinine", isCorrect: false },
      { text: "Visible haematuria", isCorrect: false },
      { text: "Reduced kidney size on ultrasound", isCorrect: false },
    ],
  },
  {
    stem: "Which pattern of neuropathy is most typical of diabetes?",
    topic: "Diabetes Complications",
    explanation:
      "A symmetrical distal sensory polyneuropathy in a glove-and-stocking distribution, longest nerves affected first. Loss of protective sensation is what allows foot ulceration to develop unnoticed, which is why annual foot examination with a monofilament is a core part of care.",
    choices: [
      { text: "Symmetrical distal sensory polyneuropathy, longest nerves first", isCorrect: true },
      { text: "Asymmetrical pure motor weakness", isCorrect: false },
      { text: "Isolated cranial nerve palsy only", isCorrect: false },
      { text: "Proximal weakness with normal sensation", isCorrect: false },
    ],
  },
  {
    stem: "Why do diabetic foot ulcers develop and progress silently?",
    topic: "Diabetes Complications",
    explanation:
      "Neuropathy removes protective pain sensation, peripheral arterial disease impairs healing, and hyperglycaemia impairs immune function — three deficits combining. The patient does not feel the injury, so it progresses. Annual screening plus prompt referral is what prevents amputation.",
    choices: [
      { text: "Neuropathy removes pain, vascular disease impairs healing, hyperglycaemia impairs immunity", isCorrect: true },
      { text: "Diabetes causes unusually thick skin", isCorrect: false },
      { text: "Patients simply neglect their feet", isCorrect: false },
      { text: "Ulcers are always painful but ignored", isCorrect: false },
    ],
  },
  {
    stem: "Which retinal finding indicates PROLIFERATIVE diabetic retinopathy?",
    topic: "Diabetes Complications",
    explanation:
      "New vessel formation (neovascularisation), driven by retinal ischaemia. These vessels are fragile and bleed, causing vitreous haemorrhage and tractional detachment. It requires urgent ophthalmology referral for laser or anti-VEGF treatment — vision can be lost rapidly at this stage.",
    choices: [
      { text: "New vessel formation, requiring urgent ophthalmology referral", isCorrect: true },
      { text: "Microaneurysms only", isCorrect: false },
      { text: "Hard exudates alone", isCorrect: false },
      { text: "A normal-appearing retina", isCorrect: false },
    ],
  },
  {
    stem: "Why is blood pressure control as important as glycaemic control in diabetes?",
    topic: "Diabetes Management",
    explanation:
      "Hypertension accelerates both microvascular and macrovascular complications, and blood pressure lowering produces at least comparable reductions in outcomes — with effects that appear sooner. Cardiovascular disease, not hyperglycaemia itself, is what most people with type 2 diabetes die of.",
    choices: [
      { text: "It reduces micro- and macrovascular complications at least as much as glucose lowering", isCorrect: true },
      { text: "It has no proven effect in diabetes", isCorrect: false },
      { text: "It only matters once nephropathy is established", isCorrect: false },
      { text: "It matters only in type 1 diabetes", isCorrect: false },
    ],
  },
  {
    stem: "A patient with type 1 diabetes becomes unwell with vomiting and cannot eat. What must they NOT do?",
    topic: "Diabetes Management",
    explanation:
      "They must not stop their insulin. Illness raises counter-regulatory hormones and insulin requirements INCREASE even when eating stops — omitting insulin precipitates DKA. Sick-day rules involve continuing insulin, checking ketones, and maintaining carbohydrate and fluid intake.",
    choices: [
      { text: "Stop their insulin — requirements rise during illness even without eating", isCorrect: true },
      { text: "Check ketones", isCorrect: false },
      { text: "Maintain fluid intake", isCorrect: false },
      { text: "Seek advice if ketones rise", isCorrect: false },
    ],
  },
  {
    stem: "What is the dawn phenomenon?",
    topic: "Diabetes Management",
    explanation:
      "An early-morning rise in glucose from overnight surges of growth hormone and cortisol increasing hepatic glucose output. It differs from the Somogyi effect, where nocturnal hypoglycaemia triggers rebound hyperglycaemia — distinguishing them matters because one needs MORE overnight insulin and the other LESS.",
    choices: [
      { text: "Morning hyperglycaemia from overnight counter-regulatory hormone surges", isCorrect: true },
      { text: "Morning hypoglycaemia from excess overnight insulin", isCorrect: false },
      { text: "Glucose variability caused by breakfast", isCorrect: false },
      { text: "A laboratory artefact of fasting samples", isCorrect: false },
    ],
  },
  {
    stem: "Which insulin regimen best mimics physiological secretion?",
    topic: "Insulin Therapy",
    explanation:
      "Basal-bolus — a long-acting insulin for background needs plus rapid-acting insulin with meals. It reproduces the normal pattern of continuous basal secretion with prandial surges, giving flexibility in meal timing and content. Fixed twice-daily mixtures are simpler but demand rigid routines.",
    choices: [
      { text: "Basal-bolus: long-acting background with rapid-acting at meals", isCorrect: true },
      { text: "A single daily dose of rapid-acting insulin", isCorrect: false },
      { text: "Long-acting insulin alone in type 1 diabetes", isCorrect: false },
      { text: "Rapid-acting insulin only when glucose is high", isCorrect: false },
    ],
  },
  {
    stem: "Why must injection sites be rotated?",
    topic: "Insulin Therapy",
    explanation:
      "Repeated injection into the same site causes lipohypertrophy, and insulin absorbed from those lumpy areas is erratic — producing unexplained variability and hypoglycaemia. Examining injection sites should be routine when control is unstable, and is very often omitted.",
    choices: [
      { text: "To prevent lipohypertrophy, which makes absorption erratic", isCorrect: true },
      { text: "To reduce pain only", isCorrect: false },
      { text: "To prevent infection at the site", isCorrect: false },
      { text: "Rotation makes no difference to absorption", isCorrect: false },
    ],
  },
  {
    stem: "Which advice should be given about driving to a person taking insulin?",
    topic: "Diabetes Management",
    explanation:
      "Check glucose before driving and at regular intervals on long journeys, carry fast-acting carbohydrate, and do not drive if glucose is below the safe threshold — waiting until it has recovered and stabilised before setting off. Hypoglycaemia unawareness may mean they must not drive at all.",
    choices: [
      { text: "Check before and during driving, carry carbohydrate, and do not drive when low", isCorrect: true },
      { text: "No specific precautions are needed", isCorrect: false },
      { text: "Drive only after skipping insulin", isCorrect: false },
      { text: "Aim to run glucose deliberately high at all times", isCorrect: false },
    ],
  },
  {
    stem: "Which intervention has the strongest evidence for preventing progression from prediabetes to type 2 diabetes?",
    topic: "Diabetes Prevention",
    explanation:
      "Intensive lifestyle modification — dietary change with sustained physical activity and modest weight loss. It outperformed metformin in the major prevention trials. Around 5–7% body weight reduction produces a substantial risk reduction, which is a more achievable target than patients often assume.",
    choices: [
      { text: "Structured lifestyle change with modest sustained weight loss", isCorrect: true },
      { text: "Metformin alone, which outperforms lifestyle change", isCorrect: false },
      { text: "Insulin started early", isCorrect: false },
      { text: "No intervention alters progression", isCorrect: false },
    ],
  },
];

/* ═══════════ SET 3 — Pituitary, Bone, Reproductive & Metabolic ═══════════ */

const SET3: Q[] = [
  {
    stem: "Which hormones are secreted by the ANTERIOR pituitary?",
    topic: "Pituitary",
    explanation:
      "ACTH, TSH, LH, FSH, growth hormone and prolactin. The posterior pituitary stores and releases ADH and oxytocin, which are actually made in the hypothalamus. That distinction explains why posterior pituitary function is often preserved in anterior pituitary disease.",
    choices: [
      { text: "ACTH, TSH, LH, FSH, growth hormone and prolactin", isCorrect: true },
      { text: "ADH and oxytocin", isCorrect: false },
      { text: "Cortisol and aldosterone", isCorrect: false },
      { text: "Insulin and glucagon", isCorrect: false },
    ],
  },
  {
    stem: "Which pituitary hormone is under predominantly INHIBITORY hypothalamic control?",
    topic: "Pituitary",
    explanation:
      "Prolactin, restrained by dopamine. This explains two things at once: dopamine antagonists such as antipsychotics and metoclopramide cause hyperprolactinaemia, and dopamine AGONISTS are the treatment for prolactinoma — often shrinking the tumour without surgery.",
    choices: [
      { text: "Prolactin, inhibited by dopamine", isCorrect: true },
      { text: "Growth hormone, inhibited by GHRH", isCorrect: false },
      { text: "TSH, inhibited by TRH", isCorrect: false },
      { text: "ACTH, inhibited by CRH", isCorrect: false },
    ],
  },
  {
    stem: "A pituitary macroadenoma compressing the optic chiasm produces which visual defect?",
    topic: "Pituitary",
    explanation:
      "Bitemporal hemianopia, from interruption of the crossing nasal retinal fibres. Because the tumour grows upward from below, the defect typically starts in the UPPER temporal quadrants. Visual fields should be assessed in anyone with a suspected pituitary lesion.",
    choices: [
      { text: "Bitemporal hemianopia, often starting in the upper quadrants", isCorrect: true },
      { text: "Homonymous hemianopia", isCorrect: false },
      { text: "Central scotoma", isCorrect: false },
      { text: "Complete monocular blindness", isCorrect: false },
    ],
  },
  {
    stem: "A patient has coarse facial features, enlarging hands and feet, and sweating. Which test confirms the diagnosis?",
    topic: "Pituitary",
    explanation:
      "An oral glucose tolerance test with growth hormone measurement — failure of GH to suppress confirms acromegaly. IGF-1 is the best screening test because GH is pulsatile and a random level is uninterpretable. Untreated acromegaly raises cardiovascular and colorectal cancer risk.",
    choices: [
      { text: "Failure of growth hormone to suppress during an oral glucose tolerance test", isCorrect: true },
      { text: "A single random growth hormone level", isCorrect: false },
      { text: "A dexamethasone suppression test", isCorrect: false },
      { text: "A short Synacthen test", isCorrect: false },
    ],
  },
  {
    stem: "A patient has polyuria with dilute urine that does NOT concentrate after water deprivation but DOES after desmopressin. What is the diagnosis?",
    topic: "Pituitary",
    explanation:
      "Cranial (central) diabetes insipidus — ADH is deficient, so giving it works. In nephrogenic DI the kidney cannot respond, so desmopressin makes no difference. That single step in the water deprivation test separates the two.",
    choices: [
      { text: "Cranial diabetes insipidus", isCorrect: true },
      { text: "Nephrogenic diabetes insipidus", isCorrect: false },
      { text: "Primary polydipsia", isCorrect: false },
      { text: "SIADH", isCorrect: false },
    ],
  },
  {
    stem: "Which drug is a well-recognised cause of nephrogenic diabetes insipidus?",
    topic: "Pituitary",
    explanation:
      "Lithium, which impairs the collecting duct's response to ADH. The effect can persist after stopping. Hypercalcaemia and hypokalaemia also cause nephrogenic DI — which is why electrolytes are checked before assuming a primary renal defect.",
    choices: [
      { text: "Lithium", isCorrect: true },
      { text: "Metformin", isCorrect: false },
      { text: "Levothyroxine", isCorrect: false },
      { text: "Amlodipine", isCorrect: false },
    ],
  },
  {
    stem: "A patient has hyponatraemia with concentrated urine, euvolaemia, and normal thyroid and adrenal function. What is the diagnosis and treatment?",
    topic: "Pituitary",
    explanation:
      "SIADH — water retention despite low plasma osmolality, so urine remains inappropriately concentrated. Fluid restriction is first line. Correction must be gradual: raising sodium too quickly risks osmotic demyelination, which is irreversible.",
    choices: [
      { text: "SIADH — fluid restriction, correcting sodium slowly", isCorrect: true },
      { text: "Diabetes insipidus — give desmopressin", isCorrect: false },
      { text: "Hypovolaemic hyponatraemia — give rapid saline", isCorrect: false },
      { text: "Addison's disease — give fludrocortisone", isCorrect: false },
    ],
  },
  {
    stem: "A patient collapses with sudden severe headache, visual loss and hypotension, with a known pituitary tumour. What has happened?",
    topic: "Pituitary",
    explanation:
      "Pituitary apoplexy — haemorrhage or infarction into the tumour. It causes acute adrenal insufficiency alongside mass effect, so hydrocortisone must be given immediately, before imaging and before any surgical decision. Treating the visual problem while missing the cortisol deficiency is the fatal error.",
    choices: [
      { text: "Pituitary apoplexy — give hydrocortisone immediately", isCorrect: true },
      { text: "Migraine with aura", isCorrect: false },
      { text: "Subarachnoid haemorrhage only", isCorrect: false },
      { text: "Simple tumour growth", isCorrect: false },
    ],
  },
  {
    stem: "Which hormone deficiency is typically lost FIRST in progressive anterior pituitary failure?",
    topic: "Pituitary",
    explanation:
      "Growth hormone, followed by gonadotrophins, then TSH and ACTH — with prolactin often preserved or even raised from stalk compression. This predictable sequence means loss of libido or amenorrhoea can be the earliest clinical clue, long before adrenal features appear.",
    choices: [
      { text: "Growth hormone, then gonadotrophins, then TSH and ACTH", isCorrect: true },
      { text: "ACTH first, then growth hormone", isCorrect: false },
      { text: "All are lost simultaneously", isCorrect: false },
      { text: "Prolactin is always lost first", isCorrect: false },
    ],
  },
  {
    stem: "Which biochemical picture is typical of osteoporosis?",
    topic: "Bone",
    explanation:
      "Normal calcium, phosphate and alkaline phosphatase — the bone is normally mineralised, there is simply less of it. Osteomalacia shows low calcium and phosphate with raised alkaline phosphatase, and Paget's disease shows an isolated markedly raised alkaline phosphatase.",
    choices: [
      { text: "Normal calcium, phosphate and alkaline phosphatase", isCorrect: true },
      { text: "Low calcium and phosphate with raised alkaline phosphatase", isCorrect: false },
      { text: "High calcium with low PTH", isCorrect: false },
      { text: "Isolated markedly raised alkaline phosphatase", isCorrect: false },
    ],
  },
  {
    stem: "How do bisphosphonates work, and what advice must accompany them?",
    topic: "Bone",
    explanation:
      "They inhibit osteoclast-mediated bone resorption. Oral bisphosphonates must be taken on an empty stomach with plain water, remaining upright for 30 minutes, because they are poorly absorbed and can cause oesophagitis. Poor adherence to these instructions is a common reason treatment appears to fail.",
    choices: [
      { text: "They inhibit osteoclasts — take fasting, with water, staying upright afterwards", isCorrect: true },
      { text: "They stimulate osteoblasts — take with food", isCorrect: false },
      { text: "They replace calcium directly — take at bedtime", isCorrect: false },
      { text: "Timing and posture make no difference", isCorrect: false },
    ],
  },
  {
    stem: "Which patient group most needs assessment for glucocorticoid-induced osteoporosis?",
    topic: "Bone",
    explanation:
      "Anyone on long-term systemic corticosteroids, particularly older patients. Steroids reduce bone formation and calcium absorption while increasing resorption, and bone loss is fastest in the first months — so assessment and bone protection should be considered at the START of treatment, not years later.",
    choices: [
      { text: "Anyone starting long-term corticosteroids — bone loss is fastest early", isCorrect: true },
      { text: "Only those already fractured", isCorrect: false },
      { text: "Only patients over 80", isCorrect: false },
      { text: "Steroids do not affect bone", isCorrect: false },
    ],
  },
  {
    stem: "A patient has isolated markedly raised alkaline phosphatase with bone pain and skull enlargement. What is the likely diagnosis?",
    topic: "Bone",
    explanation:
      "Paget's disease of bone — disordered, excessive remodelling with structurally weak new bone. Calcium and phosphate are typically normal. Complications include deafness from skull involvement, high-output cardiac failure, and rarely osteosarcoma.",
    choices: [
      { text: "Paget's disease of bone", isCorrect: true },
      { text: "Osteoporosis", isCorrect: false },
      { text: "Osteomalacia", isCorrect: false },
      { text: "Multiple myeloma", isCorrect: false },
    ],
  },
  {
    stem: "Which hormone lowers serum calcium, and where is it produced?",
    topic: "Bone",
    explanation:
      "Calcitonin, from thyroid parafollicular C cells. Its physiological role in humans is modest — thyroidectomy does not cause hypercalcaemia — but it is clinically useful as a tumour marker for medullary thyroid carcinoma.",
    choices: [
      { text: "Calcitonin, from thyroid C cells", isCorrect: true },
      { text: "PTH, from the parathyroid glands", isCorrect: false },
      { text: "Vitamin D, from the kidney", isCorrect: false },
      { text: "Cortisol, from the adrenal cortex", isCorrect: false },
    ],
  },
  {
    stem: "A man has reduced libido, gynaecomastia and small testes with low testosterone and HIGH LH and FSH. Where is the problem?",
    topic: "Reproductive Endocrine",
    explanation:
      "The testes — primary (hypergonadotrophic) hypogonadism. High gonadotrophins mean the pituitary is working and driving hard against a failing gonad. Low or normal LH/FSH with low testosterone would instead indicate a pituitary or hypothalamic cause.",
    choices: [
      { text: "Primary testicular failure — high gonadotrophins indicate the pituitary is responding", isCorrect: true },
      { text: "The pituitary — this is secondary hypogonadism", isCorrect: false },
      { text: "The hypothalamus", isCorrect: false },
      { text: "The adrenal gland", isCorrect: false },
    ],
  },
  {
    stem: "Which chromosomal abnormality causes tall stature, small firm testes, gynaecomastia and infertility?",
    topic: "Reproductive Endocrine",
    explanation:
      "Klinefelter syndrome, 47,XXY. Seminiferous tubule dysgenesis causes infertility and low testosterone with raised gonadotrophins. It is often diagnosed late, during infertility assessment, because the features can be subtle before puberty.",
    choices: [
      { text: "Klinefelter syndrome (47,XXY)", isCorrect: true },
      { text: "Turner syndrome (45,X)", isCorrect: false },
      { text: "Down syndrome (trisomy 21)", isCorrect: false },
      { text: "Fragile X syndrome", isCorrect: false },
    ],
  },
  {
    stem: "A girl has short stature, primary amenorrhoea, webbed neck and coarctation of the aorta. What is the diagnosis?",
    topic: "Reproductive Endocrine",
    explanation:
      "Turner syndrome, 45,X. Streak ovaries cause primary ovarian insufficiency with raised gonadotrophins. Cardiac and renal anomalies must be screened for — bicuspid aortic valve and coarctation carry real risk, so this is more than an endocrine diagnosis.",
    choices: [
      { text: "Turner syndrome (45,X)", isCorrect: true },
      { text: "Klinefelter syndrome", isCorrect: false },
      { text: "Congenital adrenal hyperplasia", isCorrect: false },
      { text: "Polycystic ovary syndrome", isCorrect: false },
    ],
  },
  {
    stem: "Which condition should be considered in a woman with hirsutism, oligomenorrhoea and insulin resistance?",
    topic: "Reproductive Endocrine",
    explanation:
      "Polycystic ovary syndrome. Insulin resistance drives ovarian androgen production and reduces sex hormone binding globulin, raising free testosterone. It carries long-term metabolic risk, so the consultation should cover diabetes screening as well as symptoms.",
    choices: [
      { text: "Polycystic ovary syndrome", isCorrect: true },
      { text: "Cushing's syndrome only", isCorrect: false },
      { text: "Primary ovarian insufficiency", isCorrect: false },
      { text: "Hypothyroidism", isCorrect: false },
    ],
  },
  {
    stem: "What is the metabolic syndrome, and why does it matter?",
    topic: "Metabolic",
    explanation:
      "A cluster of central obesity, insulin resistance, dyslipidaemia (high triglycerides, low HDL) and hypertension. Its significance is that the components multiply rather than add cardiovascular risk, so identifying one should prompt looking for the others.",
    choices: [
      { text: "Central obesity, insulin resistance, dyslipidaemia and hypertension, multiplying cardiovascular risk", isCorrect: true },
      { text: "A single genetic disorder of metabolism", isCorrect: false },
      { text: "Any two abnormal blood test results", isCorrect: false },
      { text: "A condition with no cardiovascular implications", isCorrect: false },
    ],
  },
  {
    stem: "Which lipid abnormality responds best to fibrates rather than statins?",
    topic: "Metabolic",
    explanation:
      "Markedly raised triglycerides. Statins mainly lower LDL cholesterol; fibrates act on PPAR-alpha and are more effective for triglycerides — which matters because very high triglycerides cause acute pancreatitis. Combining the two increases myopathy risk.",
    choices: [
      { text: "Markedly raised triglycerides, which risk pancreatitis", isCorrect: true },
      { text: "Isolated high LDL cholesterol", isCorrect: false },
      { text: "Low HDL alone", isCorrect: false },
      { text: "Normal lipids", isCorrect: false },
    ],
  },
  {
    stem: "A young patient has tendon xanthomata, corneal arcus and very high LDL cholesterol with a strong family history of early cardiac death. What is the diagnosis?",
    topic: "Metabolic",
    explanation:
      "Familial hypercholesterolaemia — usually autosomal dominant LDL receptor dysfunction. It needs high-intensity statin treatment and cascade screening of relatives, because identifying one case allows several others to be treated before they present with infarction.",
    choices: [
      { text: "Familial hypercholesterolaemia — treat and cascade screen relatives", isCorrect: true },
      { text: "Simple dietary hypercholesterolaemia", isCorrect: false },
      { text: "Familial hypertriglyceridaemia", isCorrect: false },
      { text: "Secondary dyslipidaemia from hypothyroidism", isCorrect: false },
    ],
  },
  {
    stem: "Which endocrine cause of secondary dyslipidaemia should be excluded before starting a statin?",
    topic: "Metabolic",
    explanation:
      "Hypothyroidism, which raises LDL and also increases statin-associated myopathy risk. Nephrotic syndrome, cholestasis and poorly controlled diabetes are other secondary causes. Treating the underlying cause may correct the lipids without needing a statin at all.",
    choices: [
      { text: "Hypothyroidism", isCorrect: true },
      { text: "Hyperthyroidism", isCorrect: false },
      { text: "Addison's disease", isCorrect: false },
      { text: "Acromegaly", isCorrect: false },
    ],
  },
  {
    stem: "Which combination defines multiple endocrine neoplasia type 1?",
    topic: "MEN Syndromes",
    explanation:
      "Parathyroid, pancreatic islet and pituitary tumours — the three Ps. MEN 2A involves medullary thyroid carcinoma, phaeochromocytoma and parathyroid disease. Recognising the pattern matters because it triggers genetic testing and surveillance of family members.",
    choices: [
      { text: "Parathyroid, pancreatic and pituitary tumours", isCorrect: true },
      { text: "Medullary thyroid, phaeochromocytoma and parathyroid", isCorrect: false },
      { text: "Adrenal, thyroid and ovarian tumours", isCorrect: false },
      { text: "Pituitary and testicular tumours only", isCorrect: false },
    ],
  },
  {
    stem: "Why must phaeochromocytoma be excluded before thyroid surgery in suspected MEN 2?",
    topic: "MEN Syndromes",
    explanation:
      "Anaesthesia and surgical manipulation can trigger catastrophic catecholamine release and hypertensive crisis in an undiagnosed phaeochromocytoma. The phaeo is therefore treated first, with alpha-blockade established beforehand. Sequence is the whole point of the question.",
    choices: [
      { text: "Undiagnosed phaeochromocytoma can cause a fatal hypertensive crisis under anaesthesia", isCorrect: true },
      { text: "It would make the thyroid surgery technically harder", isCorrect: false },
      { text: "Thyroid surgery cures phaeochromocytoma", isCorrect: false },
      { text: "There is no interaction between them", isCorrect: false },
    ],
  },
  {
    stem: "Which principle underlies most endocrine dynamic function testing?",
    topic: "Endocrine Testing",
    explanation:
      "Suspected EXCESS is tested by attempting to suppress it; suspected DEFICIENCY is tested by attempting to stimulate it. Dexamethasone suppression for Cushing's, glucose suppression for acromegaly, Synacthen stimulation for Addison's — one principle explaining the whole family of tests.",
    choices: [
      { text: "Suppress to confirm excess; stimulate to confirm deficiency", isCorrect: true },
      { text: "Stimulate to confirm excess; suppress to confirm deficiency", isCorrect: false },
      { text: "Random single measurements are always sufficient", isCorrect: false },
      { text: "Imaging replaces the need for biochemistry", isCorrect: false },
    ],
  },
];

/* ═══════════ SEED ═══════════ */

/** Retries a write when the connection drops. Genuine errors re-throw at once. */
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

async function seedSet(o: {
  categorySlug: string; slug: string; title: string; description: string;
  kind: string; timeLimitSeconds: number | null; difficulty: string; questions: Q[];
}) {
  const category = await withRetry(
    () => prisma.quizCategory.findUnique({ where: { slug: o.categorySlug } }),
    "find category"
  );
  if (!category) {
    console.log(`  ✗ Category "${o.categorySlug}" not found — run seed-medical-taxonomy.ts first.`);
    return;
  }
  const quiz = await withRetry(
    () =>
      prisma.quiz.upsert({
        where: { slug: o.slug },
        create: {
          slug: o.slug, title: o.title, description: o.description, categoryId: category.id,
          kind: o.kind, timeLimitSeconds: o.timeLimitSeconds, passThreshold: 70,
          difficulty: o.difficulty, published: true,
        },
        update: {
          title: o.title, description: o.description, categoryId: category.id,
          kind: o.kind, timeLimitSeconds: o.timeLimitSeconds,
        },
      }),
    `quiz ${o.slug}`
  );
  await withRetry(() => prisma.question.deleteMany({ where: { quizId: quiz.id } }), "clear questions");

  let order = 0;
  for (const q of o.questions) {
    const n = order++;
    await withRetry(
      () =>
        prisma.question.create({
          data: {
            quizId: quiz.id, type: "SINGLE", stem: q.stem, topic: q.topic,
            explanation: q.explanation, points: 1, order: n,
            choices: { create: q.choices.map((c, i) => ({ text: c.text, isCorrect: c.isCorrect, order: i })) },
          },
        }),
      `question ${n + 1} of ${o.title}`
    );
  }
  console.log(`  ✓ ${o.title} — ${o.questions.length} questions`);
}

async function main() {
  console.log("Seeding Endocrinology…\n");
  const CLIN = "cs-endocrinology";
  const PHYS = "fs-endocrine-physiology";

  await seedSet({
    categorySlug: CLIN, slug: "endocrinology-practice-set-1",
    title: "Endocrinology — Practice Set 1",
    description: "Twenty-five questions on thyroid, parathyroid and adrenal disease — interpreting function tests, recognising the emergencies, and the drug safety points that matter. Untimed.",
    kind: "PRACTICE", timeLimitSeconds: null, difficulty: "Intermediate", questions: SET1,
  });

  await seedSet({
    categorySlug: CLIN, slug: "endocrinology-practice-set-2",
    title: "Endocrinology — Practice Set 2",
    description: "Twenty-five questions on diabetes: classification and diagnosis, the drug classes and how they differ, the emergencies, complications and day-to-day management. Untimed.",
    kind: "PRACTICE", timeLimitSeconds: null, difficulty: "Intermediate", questions: SET2,
  });

  await seedSet({
    categorySlug: PHYS, slug: "endocrinology-practice-set-3",
    title: "Endocrinology — Practice Set 3",
    description: "Twenty-five questions on pituitary disease, bone and calcium, reproductive endocrinology, metabolic and lipid disorders, and the MEN syndromes. Untimed.",
    kind: "PRACTICE", timeLimitSeconds: null, difficulty: "Intermediate", questions: SET3,
  });

  await seedSet({
    categorySlug: CLIN, slug: "endocrinology-exam-1",
    title: "Endocrinology — Timed Exam 1",
    description: "Fifty questions in 60 minutes, drawn from Practice Sets 1 and 2 — thyroid, parathyroid, adrenal and diabetes. Feedback withheld until you submit.",
    kind: "EXAM", timeLimitSeconds: 60 * 60, difficulty: "Intermediate", questions: [...SET1, ...SET2],
  });

  await seedSet({
    categorySlug: CLIN, slug: "endocrinology-exam-2",
    title: "Endocrinology — Timed Exam 2 (Comprehensive)",
    description: "All seventy-five questions in 90 minutes, covering every area of the subject. Sit this once the three practice sets feel comfortable.",
    kind: "EXAM", timeLimitSeconds: 90 * 60, difficulty: "Advanced", questions: [...SET1, ...SET2, ...SET3],
  });

  console.log("\nDone. Editable in Admin → Question Bank.");
}

main().catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
