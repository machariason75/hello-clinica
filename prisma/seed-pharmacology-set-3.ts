/**
 * PHARMACOLOGY — SET 3 of 7  ·  TIER 3: APPLIED THERAPEUTICS
 *
 * SIXTY questions — larger than the 50 minimum because applied therapeutics is
 * where pharmacology gets broad. Ten areas, six questions each.
 *
 * Tier 1 gave the principles, Tier 2 the classes. Tier 3 puts them to work on a
 * straightforward patient: which agent, what to check first, what to tell them,
 * when to review. It assumes both earlier sets and re-tests neither.
 *
 * Non-destructive (uses _seedkit) — a re-run refreshes only what it owns and
 * keeps anything you added through Admin.
 *
 * ⚠ First-line choices and targets vary by national guideline. These test
 * reasoning and mechanism, which travel. Review anything numerical against
 * Kenyan guidance before publishing.
 *
 * Run:  npx tsx prisma/seed-pharmacology-set-3.ts
 */

import { type Q, findCategory, seedSet, done, REPLACE_MODE } from "./_seedkit";

const SET3: Q[] = [
  /* ── Hypertension in Practice ── */
  {
    stem: "Why is a single high blood pressure reading in clinic not enough to diagnose hypertension?",
    topic: "Hypertension in Practice",
    explanation:
      "Blood pressure varies with anxiety, pain, posture and time of day, and white-coat elevation is common. Confirming with repeated readings or ambulatory monitoring avoids committing someone to lifelong treatment on the basis of one anxious afternoon.",
    choices: [
      { text: "Readings vary and white-coat elevation is common, so confirmation is needed", isCorrect: true },
      { text: "A single reading is always sufficient", isCorrect: false },
      { text: "Clinic machines are never accurate", isCorrect: false },
      { text: "Treatment should start before any measurement", isCorrect: false },
    ],
  },
  {
    stem: "A patient of African ancestry needs first-line treatment for hypertension. Which class is generally favoured?",
    topic: "Hypertension in Practice",
    explanation:
      "A calcium channel blocker, or a thiazide-like diuretic. Response to renin-angiotensin blockade tends to be smaller in this group, which typically has lower renin activity — so ACE inhibitors and ARBs are usually not the first choice when used alone.",
    choices: [
      { text: "A calcium channel blocker or thiazide-like diuretic", isCorrect: true },
      { text: "An ACE inhibitor as monotherapy", isCorrect: false },
      { text: "A beta blocker as monotherapy", isCorrect: false },
      { text: "An alpha blocker first-line", isCorrect: false },
    ],
  },
  {
    stem: "Which antihypertensive classes must be avoided in pregnancy?",
    topic: "Hypertension in Practice",
    explanation:
      "ACE inhibitors and angiotensin receptor blockers, which cause fetal renal damage, oligohydramnios and skull defects. A woman of childbearing potential on either should know this before she conceives, not after — the counselling belongs at the point of prescribing.",
    choices: [
      { text: "ACE inhibitors and angiotensin receptor blockers", isCorrect: true },
      { text: "Labetalol and methyldopa", isCorrect: false },
      { text: "Nifedipine", isCorrect: false },
      { text: "All antihypertensives are contraindicated", isCorrect: false },
    ],
  },
  {
    stem: "What should be checked after starting or increasing an ACE inhibitor?",
    topic: "Hypertension in Practice",
    explanation:
      "Renal function and potassium, typically within one to two weeks. A modest rise in creatinine is expected and acceptable; a large rise suggests renovascular disease or volume depletion and needs the drug stopped and the cause found.",
    choices: [
      { text: "Renal function and potassium within one to two weeks", isCorrect: true },
      { text: "Liver enzymes only", isCorrect: false },
      { text: "A full blood count monthly", isCorrect: false },
      { text: "Nothing needs checking", isCorrect: false },
    ],
  },
  {
    stem: "A patient's blood pressure remains high on three drugs including a diuretic. What should be considered before adding a fourth?",
    topic: "Hypertension in Practice",
    explanation:
      "Adherence, accurate measurement technique, and secondary causes such as primary aldosteronism, renal artery stenosis or sleep apnoea — along with contributors like NSAIDs, alcohol and salt intake. Adding a fourth agent to an unaddressed cause rarely works.",
    choices: [
      { text: "Adherence, measurement technique, secondary causes and contributing drugs", isCorrect: true },
      { text: "Nothing — simply add a fourth agent", isCorrect: false },
      { text: "Stop all treatment and restart from zero", isCorrect: false },
      { text: "Assume the readings are false and ignore them", isCorrect: false },
    ],
  },
  {
    stem: "Why does treating hypertension matter when the patient feels entirely well?",
    topic: "Hypertension in Practice",
    explanation:
      "Because the harm is silent and cumulative — stroke, heart failure, renal impairment and retinopathy develop over years without symptoms. That asymptomatic nature is exactly why adherence is poor, and why explaining the reasoning matters more here than in conditions that hurt.",
    choices: [
      { text: "The damage is silent and cumulative, so symptoms appear only after harm is done", isCorrect: true },
      { text: "Treatment relieves symptoms immediately", isCorrect: false },
      { text: "Untreated hypertension always causes headache", isCorrect: false },
      { text: "It does not matter if the patient feels well", isCorrect: false },
    ],
  },

  /* ── Diabetes in Practice ── */
  {
    stem: "When must metformin be reviewed or withheld?",
    topic: "Diabetes in Practice",
    explanation:
      "When renal function falls significantly, and temporarily during acute illness, dehydration, sepsis or before contrast imaging — all situations where lactic acidosis risk rises. Sick-day guidance should be given at the outset rather than improvised during the illness.",
    choices: [
      { text: "In significant renal impairment and during acute illness, dehydration or contrast imaging", isCorrect: true },
      { text: "Only if the patient develops a rash", isCorrect: false },
      { text: "It never needs withholding", isCorrect: false },
      { text: "Whenever blood glucose is normal for a day", isCorrect: false },
    ],
  },
  {
    stem: "Why does an SGLT2 inhibitor increase the risk of genital infection?",
    topic: "Diabetes in Practice",
    explanation:
      "It works by increasing urinary glucose excretion, and that glucose supports candidal and bacterial growth. The mechanism and the side effect are inseparable — so patients are warned about it, and about hygiene, when the drug is started.",
    choices: [
      { text: "It deliberately increases urinary glucose, which feeds candidal growth", isCorrect: true },
      { text: "It suppresses the immune system", isCorrect: false },
      { text: "It causes urinary retention", isCorrect: false },
      { text: "The association is coincidental", isCorrect: false },
    ],
  },
  {
    stem: "What should a patient on insulin be told about illness days?",
    topic: "Diabetes in Practice",
    explanation:
      "Never to stop insulin, to monitor glucose and ketones more often, and to maintain fluid and carbohydrate intake. Insulin requirement usually RISES during illness even when appetite falls — and stopping it because of poor eating is a common route into ketoacidosis.",
    choices: [
      { text: "Never stop insulin; monitor more often and maintain fluids, as requirements usually rise", isCorrect: true },
      { text: "Stop insulin whenever appetite is poor", isCorrect: false },
      { text: "Halve the dose routinely during any illness", isCorrect: false },
      { text: "No change is ever needed", isCorrect: false },
    ],
  },
  {
    stem: "Which features of hypoglycaemia should a patient on a sulfonylurea recognise?",
    topic: "Diabetes in Practice",
    explanation:
      "Sweating, tremor, palpitations and hunger initially, progressing to confusion, slurred speech and reduced consciousness. Beta blockers can mask the early adrenergic warning signs, which is worth knowing when both are prescribed to the same patient.",
    choices: [
      { text: "Sweating, tremor and hunger, then confusion — with early signs masked by beta blockers", isCorrect: true },
      { text: "Polyuria and thirst", isCorrect: false },
      { text: "A widespread rash", isCorrect: false },
      { text: "Gradual weight gain only", isCorrect: false },
    ],
  },
  {
    stem: "Why is an ACE inhibitor or ARB often used in diabetes even when blood pressure is normal?",
    topic: "Diabetes in Practice",
    explanation:
      "For renal protection where albuminuria is present, by reducing intraglomerular pressure. The benefit is on progression of nephropathy rather than blood pressure alone, which is why the indication is checked against urine albumin rather than the blood pressure reading.",
    choices: [
      { text: "Renal protection in albuminuria, by lowering intraglomerular pressure", isCorrect: true },
      { text: "To improve glycaemic control directly", isCorrect: false },
      { text: "To prevent retinopathy specifically", isCorrect: false },
      { text: "There is no indication outside hypertension", isCorrect: false },
    ],
  },
  {
    stem: "What does HbA1c measure, and what limits its usefulness?",
    topic: "Diabetes in Practice",
    explanation:
      "Average glycaemia over roughly the preceding two to three months, reflecting red cell lifespan. That dependence makes it unreliable where red cell turnover is abnormal — haemolysis, recent transfusion, significant anaemia, pregnancy and some haemoglobinopathies.",
    choices: [
      { text: "Average glycaemia over 2–3 months; unreliable where red cell turnover is abnormal", isCorrect: true },
      { text: "Glucose at the exact moment of sampling", isCorrect: false },
      { text: "Insulin production by the pancreas", isCorrect: false },
      { text: "It is reliable in every clinical situation", isCorrect: false },
    ],
  },

  /* ── Choosing an Antimicrobial ── */
  {
    stem: "What should guide the choice of empirical antibiotic before culture results return?",
    topic: "Choosing an Antimicrobial",
    explanation:
      "The likely site and organism, local resistance patterns, the patient's allergies and renal function, and severity of illness. Local resistance data matters most and is the part most often skipped — an agent that works elsewhere may be useless in your own hospital.",
    choices: [
      { text: "Likely organism and site, local resistance data, allergies, renal function and severity", isCorrect: true },
      { text: "Whichever agent is cheapest that day", isCorrect: false },
      { text: "The broadest available agent in every case", isCorrect: false },
      { text: "Patient preference alone", isCorrect: false },
    ],
  },
  {
    stem: "A patient reports a childhood penicillin allergy described as a mild rash. What is the appropriate approach?",
    topic: "Choosing an Antimicrobial",
    explanation:
      "Take a proper history of what happened, since most such labels do not reflect true IgE-mediated allergy and are outgrown or misattributed. Accepting the label unexamined pushes patients onto broader, less effective and more toxic alternatives for life; formal assessment can remove it.",
    choices: [
      { text: "Take a detailed history — most such labels are not true allergy and can be removed", isCorrect: true },
      { text: "Permanently avoid all beta-lactams without question", isCorrect: false },
      { text: "Ignore the report entirely and prescribe penicillin", isCorrect: false },
      { text: "Give penicillin with adrenaline drawn up as routine", isCorrect: false },
    ],
  },
  {
    stem: "Why is a longer antibiotic course not automatically safer than a shorter one?",
    topic: "Choosing an Antimicrobial",
    explanation:
      "Beyond the effective duration, extra days add toxicity, Clostridioides difficile risk and selection pressure for resistance without improving cure. Evidence for many infections now supports shorter courses than were traditional, so duration is an active decision rather than a default.",
    choices: [
      { text: "Extra days add toxicity, C. difficile risk and resistance without improving cure", isCorrect: true },
      { text: "Longer courses are always more effective", isCorrect: false },
      { text: "Duration has no effect on outcome", isCorrect: false },
      { text: "Shorter courses always cause relapse", isCorrect: false },
    ],
  },
  {
    stem: "Why is nitrofurantoin unsuitable for pyelonephritis despite being effective in cystitis?",
    topic: "Choosing an Antimicrobial",
    explanation:
      "It concentrates in urine but achieves poor tissue and blood levels, so it cannot treat infection that has invaded the renal parenchyma. It is also avoided in significant renal impairment, where it fails to reach useful urinary concentrations at all.",
    choices: [
      { text: "It concentrates in urine but reaches poor tissue levels", isCorrect: true },
      { text: "It is inactive against all urinary organisms", isCorrect: false },
      { text: "It is too broad-spectrum for the kidney", isCorrect: false },
      { text: "It cannot be given orally", isCorrect: false },
    ],
  },
  {
    stem: "What does an antibiotic sensitivity report allow you to do that empirical prescribing does not?",
    topic: "Choosing an Antimicrobial",
    explanation:
      "Narrow to the most targeted effective agent, which reduces collateral damage to the microbiome, resistance pressure and often cost and toxicity. The report is only useful if someone acts on it — an unreviewed culture result is a wasted test.",
    choices: [
      { text: "Narrow to the most targeted effective agent", isCorrect: true },
      { text: "Justify continuing broad-spectrum treatment", isCorrect: false },
      { text: "Extend the course indefinitely", isCorrect: false },
      { text: "Nothing — it is for records only", isCorrect: false },
    ],
  },
  {
    stem: "Why does a patient with a viral sore throat sometimes leave with an antibiotic prescription?",
    topic: "Choosing an Antimicrobial",
    explanation:
      "Diagnostic uncertainty, time pressure and perceived patient expectation — the last of which is usually overestimated. Explaining the reasoning takes about as long as writing the prescription, and delayed or back-up prescribing is a workable middle path when uncertainty is genuine.",
    choices: [
      { text: "Uncertainty, time pressure and an overestimated expectation of antibiotics", isCorrect: true },
      { text: "Because antibiotics do treat viruses", isCorrect: false },
      { text: "Because guidelines recommend it", isCorrect: false },
      { text: "Because it shortens viral illness reliably", isCorrect: false },
    ],
  },

  /* ── Pain Management ── */
  {
    stem: "What is the principle behind the analgesic ladder?",
    topic: "Pain Management",
    explanation:
      "Step up from simple analgesia to weak then strong opioids according to severity and response, keeping the simple agents running underneath rather than replacing them. Regular paracetamol continued alongside an opioid genuinely reduces the opioid requirement.",
    choices: [
      { text: "Step up by severity while keeping simple analgesia running underneath", isCorrect: true },
      { text: "Replace each drug entirely with the next step up", isCorrect: false },
      { text: "Start with the strongest agent in every case", isCorrect: false },
      { text: "Use only one analgesic at any time", isCorrect: false },
    ],
  },
  {
    stem: "Which patients are at highest risk from NSAIDs?",
    topic: "Pain Management",
    explanation:
      "Older adults, and anyone with renal impairment, heart failure, previous peptic ulcer, or on anticoagulants, ACE inhibitors or diuretics. The combination of an ACE inhibitor, a diuretic and an NSAID is particularly dangerous for the kidney.",
    choices: [
      { text: "Older adults and those with renal impairment, heart failure, ulcer history or on anticoagulants", isCorrect: true },
      { text: "Young healthy adults", isCorrect: false },
      { text: "Only people with asthma", isCorrect: false },
      { text: "NSAIDs carry equal risk for everyone", isCorrect: false },
    ],
  },
  {
    stem: "Why is neuropathic pain treated differently from nociceptive pain?",
    topic: "Pain Management",
    explanation:
      "It arises from nerve damage or dysfunction rather than tissue injury, so it responds poorly to conventional analgesia and better to agents that modulate nerve signalling — certain antidepressants and antiepileptics. Escalating opioids for neuropathic pain often adds harm without relief.",
    choices: [
      { text: "It arises from nerve dysfunction and responds to neuromodulating agents rather than standard analgesia", isCorrect: true },
      { text: "It always responds best to high-dose opioids", isCorrect: false },
      { text: "It requires no treatment", isCorrect: false },
      { text: "It is identical to nociceptive pain in management", isCorrect: false },
    ],
  },
  {
    stem: "What must be considered when converting a patient between opioids or routes?",
    topic: "Pain Management",
    explanation:
      "Equianalgesic dose conversion with a deliberate reduction for incomplete cross-tolerance, and the fact that parenteral doses are substantially lower than oral for the same effect. Conversion errors are a recognised cause of fatal overdose, so the calculation is checked rather than estimated.",
    choices: [
      { text: "Equianalgesic conversion with a reduction for incomplete cross-tolerance", isCorrect: true },
      { text: "Doses are identical across all opioids and routes", isCorrect: false },
      { text: "Always double the dose when switching", isCorrect: false },
      { text: "Conversion is unnecessary", isCorrect: false },
    ],
  },
  {
    stem: "Why is a laxative prescribed at the same time as a regular opioid?",
    topic: "Pain Management",
    explanation:
      "Opioid-induced constipation is near-universal, does not improve with time, and is a major reason patients stop effective analgesia. Prescribing the laxative alongside rather than waiting for the problem prevents a predictable and avoidable complication.",
    choices: [
      { text: "Constipation is near-universal, persists, and drives patients to stop the opioid", isCorrect: true },
      { text: "Laxatives improve the analgesic effect", isCorrect: false },
      { text: "It is required by law", isCorrect: false },
      { text: "Constipation resolves on its own within days", isCorrect: false },
    ],
  },
  {
    stem: "What does it mean to review analgesia rather than simply continue it?",
    topic: "Pain Management",
    explanation:
      "Asking whether the pain is still present, whether the current regimen is achieving function rather than just a score, whether side effects are tolerable, and whether anything can be stepped down. Analgesia continued unreviewed after the cause has resolved is a common route into long-term opioid use.",
    choices: [
      { text: "Reassessing benefit, function, side effects and whether anything can be stepped down", isCorrect: true },
      { text: "Reordering the same prescription automatically", isCorrect: false },
      { text: "Increasing the dose at every visit", isCorrect: false },
      { text: "Reviewing only if the patient complains", isCorrect: false },
    ],
  },

  /* ── Asthma & COPD in Practice ── */
  {
    stem: "A patient with asthma is using their reliever inhaler most days. What does this indicate?",
    topic: "Asthma & COPD in Practice",
    explanation:
      "Poorly controlled disease requiring review of preventer treatment, inhaler technique, adherence and triggers — not simply a repeat prescription for the reliever. High reliever use is one of the strongest predictors of a life-threatening attack.",
    choices: [
      { text: "Poor control needing preventer, technique and adherence review", isCorrect: true },
      { text: "Good control, since the reliever is working", isCorrect: false },
      { text: "That the reliever dose should simply be increased", isCorrect: false },
      { text: "Nothing of significance", isCorrect: false },
    ],
  },
  {
    stem: "Why is inhaler technique checked at every review?",
    topic: "Asthma & COPD in Practice",
    explanation:
      "Because a large proportion of patients use their device incorrectly, so the drug never reaches the airway — and escalating treatment on the assumption it has failed adds side effects without benefit. Technique is checked before the dose is changed.",
    choices: [
      { text: "Poor technique means the drug never reaches the airway, and escalating masks that", isCorrect: true },
      { text: "It is purely a training exercise", isCorrect: false },
      { text: "Technique has no effect on delivery", isCorrect: false },
      { text: "Only new patients need checking", isCorrect: false },
    ],
  },
  {
    stem: "What is the role of a spacer device?",
    topic: "Asthma & COPD in Practice",
    explanation:
      "It reduces the coordination needed between actuation and inhalation, improves drug delivery to the lower airway and cuts oropharyngeal deposition. In an acute attack a spacer with a metered dose inhaler can be as effective as a nebuliser, which is useful where nebulisers are not available.",
    choices: [
      { text: "It removes the need for precise coordination and improves lower airway delivery", isCorrect: true },
      { text: "It increases the drug dose delivered beyond the canister content", isCorrect: false },
      { text: "It is only for cosmetic convenience", isCorrect: false },
      { text: "It reduces the effectiveness of the inhaler", isCorrect: false },
    ],
  },
  {
    stem: "Why does smoking cessation matter more than any drug in COPD?",
    topic: "Asthma & COPD in Practice",
    explanation:
      "It is the only intervention that alters the rate of lung function decline. Drugs relieve symptoms and reduce exacerbations but do not change the underlying trajectory, so cessation support is treatment rather than lifestyle advice appended to the consultation.",
    choices: [
      { text: "It is the only intervention that slows the decline in lung function", isCorrect: true },
      { text: "It has no measurable effect on progression", isCorrect: false },
      { text: "Drugs alter the trajectory more effectively", isCorrect: false },
      { text: "Cessation only matters before diagnosis", isCorrect: false },
    ],
  },
  {
    stem: "Why is a short course of oral corticosteroid used in an exacerbation without tapering?",
    topic: "Asthma & COPD in Practice",
    explanation:
      "A brief course does not suppress the adrenal axis meaningfully, so it can be stopped outright. Tapering is required after prolonged or repeated courses — applying a taper to every short course adds complexity and confusion for no benefit.",
    choices: [
      { text: "A short course does not meaningfully suppress the adrenal axis", isCorrect: true },
      { text: "Tapering makes steroids ineffective", isCorrect: false },
      { text: "Adrenal suppression occurs within one day", isCorrect: false },
      { text: "All steroid courses require a taper", isCorrect: false },
    ],
  },
  {
    stem: "What should a written asthma action plan contain?",
    topic: "Asthma & COPD in Practice",
    explanation:
      "What to take daily, how to recognise deterioration, what to do about it, and exactly when to seek urgent help. Patients with a written plan have fewer emergency presentations — it converts a vague instruction to be careful into specific actions at specific thresholds.",
    choices: [
      { text: "Daily treatment, how to recognise deterioration, what to do, and when to seek urgent help", isCorrect: true },
      { text: "A list of medication prices", isCorrect: false },
      { text: "Only the diagnosis and the prescriber's name", isCorrect: false },
      { text: "Instructions to attend hospital for any symptom", isCorrect: false },
    ],
  },

  /* ── Anticoagulation in Practice ── */
  {
    stem: "What does a CHA2DS2-VASc score inform?",
    topic: "Anticoagulation in Practice",
    explanation:
      "Stroke risk in atrial fibrillation, guiding whether anticoagulation is indicated. It is weighed against bleeding risk, but bleeding risk is used to identify and modify risk factors rather than to withhold anticoagulation from someone who clearly needs it.",
    choices: [
      { text: "Stroke risk in atrial fibrillation, guiding whether to anticoagulate", isCorrect: true },
      { text: "Bleeding risk on warfarin only", isCorrect: false },
      { text: "The likelihood of heart failure developing", isCorrect: false },
      { text: "Which antibiotic to choose", isCorrect: false },
    ],
  },
  {
    stem: "A patient on warfarin has an INR far above target with no bleeding. What determines the response?",
    topic: "Anticoagulation in Practice",
    explanation:
      "How high the INR is, whether there is bleeding, and the underlying indication and thrombotic risk. Options range from omitting doses to giving vitamin K, and the cause matters too — a new interacting drug or intercurrent illness usually explains it.",
    choices: [
      { text: "The INR level, presence of bleeding, thrombotic risk and the cause of the rise", isCorrect: true },
      { text: "Always give the same fixed dose of vitamin K", isCorrect: false },
      { text: "Always stop warfarin permanently", isCorrect: false },
      { text: "No action is needed without bleeding", isCorrect: false },
    ],
  },
  {
    stem: "Why does renal function need checking before and during DOAC treatment?",
    topic: "Anticoagulation in Practice",
    explanation:
      "These agents are cleared renally to varying degrees, so declining function causes accumulation and bleeding. Dose depends on renal function, and function changes over time — which is why it is monitored rather than checked once at initiation.",
    choices: [
      { text: "They are renally cleared, so falling function causes accumulation and bleeding", isCorrect: true },
      { text: "They damage the kidney directly", isCorrect: false },
      { text: "Renal function has no bearing on dosing", isCorrect: false },
      { text: "Only the initial check matters", isCorrect: false },
    ],
  },
  {
    stem: "What should a patient starting any anticoagulant be told to report?",
    topic: "Anticoagulation in Practice",
    explanation:
      "Unusual bruising, prolonged bleeding, blood in urine or stool, black tarry stools, and any head injury however minor it seems. Intracranial bleeding after a modest head injury is the complication where early presentation changes outcome most.",
    choices: [
      { text: "Unusual bruising, bleeding, dark stools and any head injury however minor", isCorrect: true },
      { text: "Only bleeding that will not stop after an hour", isCorrect: false },
      { text: "Nothing; anticoagulants are entirely safe", isCorrect: false },
      { text: "Only symptoms occurring in the first week", isCorrect: false },
    ],
  },
  {
    stem: "Why does an anticoagulated patient need a plan before any procedure?",
    topic: "Anticoagulation in Practice",
    explanation:
      "Both continuing and stopping carry risk — bleeding on one side, thrombosis or stroke on the other. The plan depends on the procedure's bleeding risk and the indication for anticoagulation, and it needs deciding in advance rather than on the morning of the list.",
    choices: [
      { text: "Both stopping and continuing carry risk, so it must be balanced in advance", isCorrect: true },
      { text: "Anticoagulants are always simply stopped the day before", isCorrect: false },
      { text: "No procedure is safe on anticoagulation", isCorrect: false },
      { text: "The decision can safely be left to the day", isCorrect: false },
    ],
  },
  {
    stem: "Why is anticoagulation often under-prescribed in older patients with atrial fibrillation?",
    topic: "Anticoagulation in Practice",
    explanation:
      "Fear of bleeding and falls leads to withholding it — yet absolute stroke risk rises steeply with age, so older patients usually gain MORE net benefit, not less. Fall risk alone rarely outweighs the benefit at the rates falls actually occur.",
    choices: [
      { text: "Fear of falls and bleeding, though older patients usually gain more net benefit", isCorrect: true },
      { text: "Because stroke risk falls with age", isCorrect: false },
      { text: "Because anticoagulants do not work in older people", isCorrect: false },
      { text: "It is correctly withheld in everyone over 75", isCorrect: false },
    ],
  },

  /* ── Mental Health Prescribing ── */
  {
    stem: "What should be discussed before starting an antidepressant?",
    topic: "Mental Health Prescribing",
    explanation:
      "That benefit takes weeks while side effects appear sooner, the expected duration of treatment, the need to taper rather than stop abruptly, and what to do if things worsen. Setting these expectations at the start substantially improves the chance the course is completed.",
    choices: [
      { text: "Delayed benefit, early side effects, expected duration, and not stopping abruptly", isCorrect: true },
      { text: "Only the cost of the medication", isCorrect: false },
      { text: "That it will work within two days", isCorrect: false },
      { text: "Nothing needs discussing beforehand", isCorrect: false },
    ],
  },
  {
    stem: "Why should an SSRI be tapered rather than stopped suddenly?",
    topic: "Mental Health Prescribing",
    explanation:
      "Abrupt cessation causes a discontinuation syndrome with dizziness, electric-shock sensations, irritability and flu-like symptoms. It is frequently mistaken for relapse, leading to the drug being restarted unnecessarily — so patients should be warned before it happens.",
    choices: [
      { text: "Abrupt stopping causes a discontinuation syndrome often mistaken for relapse", isCorrect: true },
      { text: "The drug becomes toxic if stopped quickly", isCorrect: false },
      { text: "Tapering is a purely administrative convention", isCorrect: false },
      { text: "There are no effects from stopping suddenly", isCorrect: false },
    ],
  },
  {
    stem: "Why are benzodiazepines prescribed only for short periods?",
    topic: "Mental Health Prescribing",
    explanation:
      "Tolerance and dependence develop within weeks, withdrawal can be prolonged and includes seizures, and they contribute to falls and cognitive impairment in older people. Short defined courses with a clear stop date are the usual approach, agreed at the point of prescribing.",
    choices: [
      { text: "Tolerance and dependence develop quickly and withdrawal can be severe", isCorrect: true },
      { text: "They lose all effect after two days", isCorrect: false },
      { text: "They are prohibitively expensive", isCorrect: false },
      { text: "Long-term use carries no risk", isCorrect: false },
    ],
  },
  {
    stem: "What baseline assessment is needed before starting an antipsychotic?",
    topic: "Mental Health Prescribing",
    explanation:
      "Weight, blood pressure, glucose or HbA1c, lipids, and an ECG where QT prolongation is a concern. These agents carry substantial metabolic risk, and without baseline values there is no way to detect the change that develops over the following months.",
    choices: [
      { text: "Weight, blood pressure, glucose, lipids and ECG where QT is a concern", isCorrect: true },
      { text: "A full blood count alone", isCorrect: false },
      { text: "No baseline assessment is needed", isCorrect: false },
      { text: "Only a mental state examination", isCorrect: false },
    ],
  },
  {
    stem: "Why does a patient on long-term psychotropic medication need physical health monitoring?",
    topic: "Mental Health Prescribing",
    explanation:
      "People with severe mental illness die considerably earlier than the general population, mostly from cardiovascular and metabolic disease rather than from their psychiatric condition — and psychotropics contribute. Monitoring and treating physical health is part of psychiatric care, not separate from it.",
    choices: [
      { text: "Cardiovascular and metabolic disease drive the mortality gap, and psychotropics contribute", isCorrect: true },
      { text: "Physical health is unrelated to psychiatric treatment", isCorrect: false },
      { text: "Monitoring is required only in the first month", isCorrect: false },
      { text: "Psychotropics have no physical effects", isCorrect: false },
    ],
  },
  {
    stem: "What should prompt particular caution when prescribing to someone at risk of self-harm?",
    topic: "Mental Health Prescribing",
    explanation:
      "The toxicity of the drug in overdose and the quantity supplied at once. Choosing an agent that is safer in overdose and limiting the quantity dispensed are practical measures that reduce risk without withholding treatment the person needs.",
    choices: [
      { text: "Toxicity in overdose and the quantity dispensed at one time", isCorrect: true },
      { text: "The colour and shape of the tablet", isCorrect: false },
      { text: "Whether the drug is branded or generic", isCorrect: false },
      { text: "Nothing needs to change", isCorrect: false },
    ],
  },

  /* ── Prescribing in Renal & Liver Impairment ── */
  {
    stem: "Which two adjustments does renal impairment typically require?",
    topic: "Prescribing in Organ Impairment",
    explanation:
      "A reduced maintenance dose or extended interval for renally cleared drugs, and avoidance of nephrotoxic agents. Loading doses generally do not change, because they depend on volume of distribution rather than clearance — a distinction that is regularly got wrong.",
    choices: [
      { text: "Reduced maintenance dose or longer interval, and avoiding nephrotoxins — loading doses usually unchanged", isCorrect: true },
      { text: "Reduced loading dose with unchanged maintenance", isCorrect: false },
      { text: "Doubling every dose", isCorrect: false },
      { text: "No adjustment is ever needed", isCorrect: false },
    ],
  },
  {
    stem: "Why is prescribing in liver impairment harder to standardise than in renal impairment?",
    topic: "Prescribing in Organ Impairment",
    explanation:
      "There is no equivalent of estimated GFR — no single measure reliably predicts metabolic capacity, and liver tests can be near-normal in significant dysfunction. Judgement is based on the clinical picture including albumin, INR, bilirubin and encephalopathy rather than a formula.",
    choices: [
      { text: "There is no reliable measure of metabolic capacity equivalent to eGFR", isCorrect: true },
      { text: "The liver plays no role in drug handling", isCorrect: false },
      { text: "Liver enzymes predict drug clearance precisely", isCorrect: false },
      { text: "Liver impairment never affects dosing", isCorrect: false },
    ],
  },
  {
    stem: "Which analgesic requires particular caution in significant liver disease?",
    topic: "Prescribing in Organ Impairment",
    explanation:
      "Paracetamol, where reduced glutathione reserves lower the threshold for toxicity — often requiring a reduced maximum daily dose. NSAIDs are also hazardous in cirrhosis, precipitating renal impairment and variceal bleeding, so options narrow considerably.",
    choices: [
      { text: "Paracetamol, because glutathione reserves are reduced", isCorrect: true },
      { text: "Topical local anaesthetic", isCorrect: false },
      { text: "Inhaled analgesia only", isCorrect: false },
      { text: "No analgesic requires caution", isCorrect: false },
    ],
  },
  {
    stem: "Why do older patients often need lower doses even with normal-looking blood tests?",
    topic: "Prescribing in Organ Impairment",
    explanation:
      "Renal function declines with age while reduced muscle mass keeps creatinine deceptively normal, body composition shifts, and sensitivity to sedatives and anticholinergics rises. Estimated GFR is more informative than creatinine, and starting low is the safer default.",
    choices: [
      { text: "Renal function falls while creatinine stays deceptively normal, and sensitivity rises", isCorrect: true },
      { text: "Older patients absorb nothing from the gut", isCorrect: false },
      { text: "Normal blood tests exclude any need for adjustment", isCorrect: false },
      { text: "Age has no pharmacological relevance", isCorrect: false },
    ],
  },
  {
    stem: "Why does a patient on dialysis need drug timing considered as well as dose?",
    topic: "Prescribing in Organ Impairment",
    explanation:
      "Dialysis removes some drugs, so a dose given before a session may be cleared before it has acted. Whether a drug is dialysable determines both the dosing schedule and whether dialysis is useful in overdose of that drug.",
    choices: [
      { text: "Dialysis removes some drugs, so a dose given beforehand may be cleared before acting", isCorrect: true },
      { text: "Dialysis has no effect on drug levels", isCorrect: false },
      { text: "All drugs must be given during dialysis", isCorrect: false },
      { text: "Timing matters only for antibiotics", isCorrect: false },
    ],
  },
  {
    stem: "What is the safest general approach when prescribing an unfamiliar drug in organ impairment?",
    topic: "Prescribing in Organ Impairment",
    explanation:
      "Check the reference source before prescribing rather than after, start at the lower end and titrate, and arrange earlier review. Nobody remembers every adjustment, and looking it up is a sign of safe practice rather than of inexperience.",
    choices: [
      { text: "Look it up first, start low, titrate, and review earlier than usual", isCorrect: true },
      { text: "Prescribe the standard dose and observe", isCorrect: false },
      { text: "Avoid all drugs entirely", isCorrect: false },
      { text: "Rely on memory to avoid appearing uncertain", isCorrect: false },
    ],
  },

  /* ── Monitoring & Review ── */
  {
    stem: "What is the purpose of therapeutic drug monitoring?",
    topic: "Monitoring & Review",
    explanation:
      "To keep concentration within a range where a drug is effective but not toxic — worth doing only where the therapeutic index is narrow, levels correlate with effect, and there is no easier clinical endpoint. Monitoring a drug that meets none of these adds cost without safety.",
    choices: [
      { text: "Keeping concentration in range where the index is narrow and no simpler endpoint exists", isCorrect: true },
      { text: "Confirming the patient collected their prescription", isCorrect: false },
      { text: "It should be done for every drug", isCorrect: false },
      { text: "Establishing the diagnosis", isCorrect: false },
    ],
  },
  {
    stem: "Why does the timing of a drug level sample matter?",
    topic: "Monitoring & Review",
    explanation:
      "Reference ranges are defined relative to the dose — usually a trough immediately before the next dose, or a peak at a specified interval after. A sample taken at the wrong time produces a number that looks meaningful and leads to the wrong dose change.",
    choices: [
      { text: "Ranges are defined relative to dosing, so a mistimed sample misleads", isCorrect: true },
      { text: "Timing is irrelevant to interpretation", isCorrect: false },
      { text: "Samples are only valid in the morning", isCorrect: false },
      { text: "Any time gives the same result", isCorrect: false },
    ],
  },
  {
    stem: "What should happen when a patient reports a side effect from a new drug?",
    topic: "Monitoring & Review",
    explanation:
      "Establish the timing relative to starting the drug, judge whether it is dose-related and manageable or requires stopping, consider alternatives, and report serious or unexpected reactions to the relevant pharmacovigilance scheme. Dismissing it usually results in the patient stopping the drug themselves without telling anyone.",
    choices: [
      { text: "Assess timing and severity, decide whether to adjust or stop, and report serious reactions", isCorrect: true },
      { text: "Reassure and continue unchanged in every case", isCorrect: false },
      { text: "Stop every drug the patient is taking", isCorrect: false },
      { text: "Ignore it unless it appears in the leaflet", isCorrect: false },
    ],
  },
  {
    stem: "Why is polypharmacy itself treated as a clinical problem?",
    topic: "Monitoring & Review",
    explanation:
      "Interaction risk rises steeply with the number of drugs, adherence falls, and the cumulative burden causes falls, confusion and admissions independent of any single agent. Beyond a certain point the total number of medicines is a risk factor in its own right.",
    choices: [
      { text: "Interaction risk and cumulative burden cause harm independent of any single drug", isCorrect: true },
      { text: "More drugs always mean better control", isCorrect: false },
      { text: "It matters only for cost reasons", isCorrect: false },
      { text: "The number of drugs is irrelevant to risk", isCorrect: false },
    ],
  },
  {
    stem: "What is a structured medication review?",
    topic: "Monitoring & Review",
    explanation:
      "A planned discussion covering every medicine — whether each still has an indication, whether it is working, whether it is causing harm, whether the patient is actually taking it, and what could stop. It works best with the patient's own priorities included rather than as a checklist done about them.",
    choices: [
      { text: "A planned review of every medicine for indication, benefit, harm and adherence, with the patient", isCorrect: true },
      { text: "Reprinting the repeat prescription list", isCorrect: false },
      { text: "A pharmacy stock check", isCorrect: false },
      { text: "Reviewing only newly started drugs", isCorrect: false },
    ],
  },
  {
    stem: "Why is it important to ask what a patient is actually taking rather than reading the record?",
    topic: "Monitoring & Review",
    explanation:
      "Records show what was prescribed, not what is swallowed. Patients stop drugs, halve doses, run out, share medication and take over-the-counter and herbal products that never reach the record — and treating from the record alone means treating a fiction.",
    choices: [
      { text: "Records show what was prescribed, not what is taken, and omit over-the-counter and herbal use", isCorrect: true },
      { text: "Records are always completely accurate", isCorrect: false },
      { text: "Patients cannot reliably report anything", isCorrect: false },
      { text: "Only the prescribed list matters clinically", isCorrect: false },
    ],
  },

  /* ── Spotting Interactions in Practice ── */
  {
    stem: "A patient stable on warfarin is prescribed a course of an antibiotic and their INR rises sharply. What is the likely explanation?",
    topic: "Spotting Interactions in Practice",
    explanation:
      "Many antibiotics inhibit warfarin metabolism, displace it from protein binding, or reduce gut flora that produce vitamin K — and the infection itself raises INR. Any new antibiotic in an anticoagulated patient is a reason to check INR sooner rather than at the usual interval.",
    choices: [
      { text: "The antibiotic has raised warfarin effect, and the illness contributes too", isCorrect: true },
      { text: "Antibiotics have no effect on anticoagulation", isCorrect: false },
      { text: "The INR rise proves warfarin was stopped", isCorrect: false },
      { text: "It indicates the antibiotic is not working", isCorrect: false },
    ],
  },
  {
    stem: "Why does adding a macrolide or azole to a patient on a statin warrant caution?",
    topic: "Spotting Interactions in Practice",
    explanation:
      "Both inhibit CYP3A4, raising statin levels and the risk of myopathy and rhabdomyolysis. A short course can cause muscle pain and dark urine in someone who has taken the statin uneventfully for years — so the statin is often held for the duration.",
    choices: [
      { text: "CYP3A4 inhibition raises statin levels, risking myopathy and rhabdomyolysis", isCorrect: true },
      { text: "They make the statin ineffective", isCorrect: false },
      { text: "The combination causes hypoglycaemia", isCorrect: false },
      { text: "There is no meaningful interaction", isCorrect: false },
    ],
  },
  {
    stem: "A patient on an ACE inhibitor and a diuretic starts regular NSAIDs and develops acute kidney injury. What happened?",
    topic: "Spotting Interactions in Practice",
    explanation:
      "The so-called triple whammy: the NSAID constricts the afferent arteriole, the ACE inhibitor dilates the efferent, and the diuretic reduces volume — together collapsing glomerular filtration pressure. Each drug alone is usually tolerated; the combination is a recognised cause of avoidable renal failure.",
    choices: [
      { text: "The triple whammy — the three together collapse glomerular filtration pressure", isCorrect: true },
      { text: "The NSAID is directly toxic to tubules in all patients", isCorrect: false },
      { text: "The diuretic alone caused it", isCorrect: false },
      { text: "The combination is entirely safe and something else is responsible", isCorrect: false },
    ],
  },
  {
    stem: "Why must a woman starting rifampicin be counselled about contraception?",
    topic: "Spotting Interactions in Practice",
    explanation:
      "Rifampicin is a potent enzyme inducer and substantially reduces the effectiveness of hormonal contraception, including some long-acting methods. Alternative or additional contraception is needed during treatment and for a period afterwards, and the consequence of missing this conversation is irreversible.",
    choices: [
      { text: "It induces metabolism and can make hormonal contraception fail", isCorrect: true },
      { text: "It makes contraception more effective", isCorrect: false },
      { text: "It has no effect on hormonal methods", isCorrect: false },
      { text: "Only barrier methods are affected", isCorrect: false },
    ],
  },
  {
    stem: "A patient on an SSRI is prescribed tramadol for back pain. What should be considered?",
    topic: "Spotting Interactions in Practice",
    explanation:
      "Both raise serotonergic activity, so the combination risks serotonin syndrome; tramadol also lowers the seizure threshold. It is a frequent pairing because both are prescribed for common problems by different people — which is exactly why the full medication list is checked before adding analgesia.",
    choices: [
      { text: "Risk of serotonin syndrome, and tramadol lowers the seizure threshold", isCorrect: true },
      { text: "Tramadol blocks the SSRI's absorption", isCorrect: false },
      { text: "The combination is inert", isCorrect: false },
      { text: "The SSRI makes tramadol ineffective", isCorrect: false },
    ],
  },
  {
    stem: "Why should herbal and over-the-counter products be asked about specifically?",
    topic: "Spotting Interactions in Practice",
    explanation:
      "Patients rarely consider them medicines and so do not mention them, yet several interact significantly — St John's wort induces enzymes and can cause contraceptive and antiretroviral failure, and over-the-counter NSAIDs carry the same renal and bleeding risks as prescribed ones.",
    choices: [
      { text: "Patients do not think of them as medicines, yet several interact significantly", isCorrect: true },
      { text: "They are inherently safe and need no consideration", isCorrect: false },
      { text: "They always appear on the prescription record", isCorrect: false },
      { text: "Only prescribed drugs can interact", isCorrect: false },
    ],
  },
];

async function main() {
  console.log(`Seeding Pharmacology — Set 3 (Tier 3: Applied Therapeutics)${REPLACE_MODE ? "  [REPLACE MODE]" : ""}…\n`);

  const categoryId = await findCategory("fs-pharmacology");
  if (!categoryId) return;

  await seedSet({
    categoryId,
    slug: "pharmacology-set-3-applied",
    title: "Pharmacology — Set 3: Applied Therapeutics",
    description:
      "Sixty questions on using drugs in practice: hypertension and diabetes management, choosing an antimicrobial, pain, asthma and COPD, anticoagulation, mental health prescribing, prescribing in renal and liver impairment, and monitoring and review. Assumes Sets 1 and 2. Untimed.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Intermediate",
    questions: SET3,
  });

  await done();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
