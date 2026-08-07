/**
 * PHARMACOLOGY — PRACTICE SET 3
 * Cardiovascular Drugs
 *
 * Difficulty: Foundational-Intermediate. The largest prescribing domain in
 * medicine, organized so that mechanism predicts both the therapeutic effect
 * and the adverse effect: where in the nephron a diuretic acts, which arm of
 * the RAAS a drug blocks, which phase of the action potential an antiarrhythmic
 * touches. Pairs with Set 4 (CNS Drugs) to build Exam 2, the Mechanisms Block.
 *
 * 80 questions across 12 topics:
 *   Diuretics · RAAS Inhibitors · Calcium Channel Blockers · Sympatholytics &
 *   Vasodilators · Antianginals · Heart Failure Pharmacotherapy · Cardiac
 *   Glycosides & Digoxin Toxicity · Antiarrhythmics I & III · Antiarrhythmics
 *   II, IV & Other · Antihyperlipidemics · Anticoagulants, Antiplatelets &
 *   Thrombolytics · Clinical Application
 *
 * Item mix: 60 single-answer vignettes, 10 select-all-that-apply, 10 true/false.
 * US generic drug names and conventional units throughout.
 */

import type { Q } from "../_lib/qbank";

export const PHARMACOLOGY_SET_3: Q[] = [
  /* ══════════════ DIURETICS ══════════════ */
  {
    stem: "A patient with acute decompensated heart failure and pulmonary edema needs rapid diuresis. Which drug acts at the thick ascending limb and produces the greatest natriuresis?",
    topic: "Diuretics",
    explanation:
      "Furosemide, a loop diuretic, inhibits the Na-K-2Cl cotransporter in the thick ascending limb, the site that reclaims up to 25% of filtered sodium, giving it the highest diuretic ceiling. Thiazides act more distally on a smaller sodium load, and spironolactone and acetazolamide are weaker still.",
    choices: [
      { text: "Furosemide", isCorrect: true },
      { text: "Hydrochlorothiazide" },
      { text: "Spironolactone" },
      { text: "Acetazolamide" },
      { text: "Amiloride" },
    ],
  },
  {
    stem: "Which electrolyte disturbance is most characteristic of loop diuretic therapy and shared, by a different mechanism, with thiazides?",
    topic: "Diuretics",
    explanation:
      "Both loops and thiazides increase distal sodium delivery, driving potassium and hydrogen secretion, so hypokalemia and metabolic alkalosis are common to both. Loops are distinguished by calcium wasting, whereas thiazides retain calcium — a contrast worth memorizing.",
    choices: [
      { text: "Hypokalemia with metabolic alkalosis", isCorrect: true },
      { text: "Hyperkalemia with metabolic acidosis" },
      { text: "Hypernatremia with respiratory alkalosis" },
      { text: "Hypocalcemia with metabolic acidosis" },
      { text: "Hyperkalemia with respiratory acidosis" },
    ],
  },
  {
    stem: "A patient on high-dose intravenous furosemide reports new hearing loss and tinnitus. This adverse effect is best explained by which property of loop diuretics?",
    topic: "Diuretics",
    explanation:
      "Loop diuretics are ototoxic because they inhibit the same Na-K-2Cl transporter in the stria vascularis of the inner ear; the risk rises with rapid IV infusion and concurrent aminoglycosides. Slowing the infusion rate mitigates it. It is unrelated to sulfa allergy or potassium loss.",
    choices: [
      { text: "Inhibition of the Na-K-2Cl transporter in the inner ear", isCorrect: true },
      { text: "Direct cochlear hemorrhage" },
      { text: "Potassium depletion of hair cells" },
      { text: "Cross-reaction with an aminoglycoside binding site" },
      { text: "Calcium deposition in the cochlea" },
    ],
  },
  {
    stem: "Thiazide diuretics are the preferred agents for reducing recurrent calcium-containing kidney stones because they:",
    topic: "Diuretics",
    explanation:
      "Thiazides enhance distal tubular calcium reabsorption, lowering urinary calcium and reducing stone formation. This is the mirror image of loop diuretics, which raise urinary calcium and are used in hypercalcemia. The effect is independent of their action on sodium.",
    choices: [
      { text: "Reduce urinary calcium excretion", isCorrect: true },
      { text: "Increase urinary calcium excretion" },
      { text: "Alkalinize the urine" },
      { text: "Increase urinary oxalate" },
      { text: "Raise serum phosphate" },
    ],
  },
  {
    stem: "Which diuretic is a carbonic anhydrase inhibitor useful for acute mountain sickness and open-angle glaucoma?",
    topic: "Diuretics",
    explanation:
      "Acetazolamide inhibits carbonic anhydrase in the proximal tubule, producing a self-limited bicarbonate diuresis; the resulting metabolic acidosis drives the ventilatory acclimatization used in altitude sickness, and reduced aqueous humor formation lowers intraocular pressure. It is a weak diuretic overall.",
    choices: [
      { text: "Acetazolamide", isCorrect: true },
      { text: "Mannitol" },
      { text: "Chlorthalidone" },
      { text: "Triamterene" },
      { text: "Bumetanide" },
    ],
  },
  {
    stem: "Mannitol produces diuresis by which mechanism, and in which setting is it specifically indicated?",
    topic: "Diuretics",
    explanation:
      "Mannitol is a freely filtered, non-reabsorbed osmotic agent that holds water in the tubular lumen; it is used to reduce elevated intracranial or intraocular pressure. Because it expands intravascular volume before diuresis, it is contraindicated in established pulmonary edema and heart failure.",
    choices: [
      { text: "Osmotic retention of water in the tubule; used to lower intracranial pressure", isCorrect: true },
      { text: "Blockade of the Na-K-2Cl transporter; used in heart failure" },
      { text: "Aldosterone antagonism; used in cirrhosis" },
      { text: "Carbonic anhydrase inhibition; used in glaucoma" },
      { text: "Sodium channel blockade; used in hypertension" },
    ],
  },
  {
    stem: "Which statements about potassium-sparing diuretics are correct? Select all that apply.",
    type: "MULTI",
    topic: "Diuretics",
    explanation:
      "Spironolactone and eplerenone competitively antagonize the aldosterone receptor, while amiloride and triamterene block the epithelial sodium channel directly; all act in the collecting duct and reduce potassium loss. Spironolactone's affinity for androgen and progesterone receptors causes gynecomastia, which eplerenone largely avoids. None act in the thick ascending limb.",
    choices: [
      { text: "Spironolactone competitively blocks the mineralocorticoid receptor", isCorrect: true },
      { text: "Amiloride blocks the epithelial sodium channel in the collecting duct", isCorrect: true },
      { text: "Spironolactone can cause gynecomastia; eplerenone is more selective", isCorrect: true },
      { text: "They are the strongest diuretics available" },
      { text: "They act primarily in the thick ascending limb" },
    ],
  },
  {
    stem: "True or False: Combining a potassium-sparing diuretic with an ACE inhibitor markedly increases the risk of hyperkalemia.",
    type: "TRUE_FALSE",
    topic: "Diuretics",
    explanation:
      "True. Both classes raise serum potassium — the diuretic by blocking distal potassium secretion and the ACE inhibitor by reducing aldosterone — so the combination can cause dangerous hyperkalemia, especially in renal impairment. Potassium and renal function must be monitored.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  /* ══════════════ RAAS INHIBITORS ══════════════ */
  {
    stem: "A patient started on lisinopril develops a persistent dry cough. Which mediator best explains this effect?",
    topic: "RAAS Inhibitors",
    explanation:
      "ACE also degrades bradykinin, so inhibiting it lets bradykinin (and substance P) accumulate in the airway, producing the classic dry cough and, rarely, angioedema. Switching to an ARB avoids this because ARBs do not affect bradykinin metabolism.",
    choices: [
      { text: "Accumulation of bradykinin", isCorrect: true },
      { text: "Excess angiotensin II" },
      { text: "Increased aldosterone" },
      { text: "Depletion of nitric oxide" },
      { text: "Histamine release from mast cells" },
    ],
  },
  {
    stem: "Why are ACE inhibitors and ARBs contraindicated in pregnancy?",
    topic: "RAAS Inhibitors",
    explanation:
      "Angiotensin II is required for fetal renal development; blocking it causes oligohydramnios, renal dysgenesis, skull hypoplasia and fetal death, particularly in the second and third trimesters. They must be stopped as soon as pregnancy is recognized.",
    choices: [
      { text: "They cause fetal renal malformation and oligohydramnios", isCorrect: true },
      { text: "They cause maternal hyperglycemia" },
      { text: "They induce fetal tachyarrhythmia" },
      { text: "They cross-react with progesterone receptors" },
      { text: "They cause neural tube defects" },
    ],
  },
  {
    stem: "A patient with bilateral renal artery stenosis is at particular risk of acute kidney injury on an ACE inhibitor because:",
    topic: "RAAS Inhibitors",
    explanation:
      "In renal artery stenosis, glomerular filtration depends on angiotensin II-mediated constriction of the efferent arteriole; an ACE inhibitor dilates that arteriole, dropping filtration pressure and precipitating acute kidney injury. This is why a rise in creatinine after starting therapy prompts evaluation.",
    choices: [
      { text: "It dilates the efferent arteriole and reduces glomerular filtration pressure", isCorrect: true },
      { text: "It constricts the afferent arteriole" },
      { text: "It causes direct tubular toxicity" },
      { text: "It precipitates crystals in the tubule" },
      { text: "It blocks renal potassium excretion, damaging the tubule" },
    ],
  },
  {
    stem: "Sacubitril is combined with valsartan in heart failure. What is sacubitril's mechanism?",
    topic: "RAAS Inhibitors",
    explanation:
      "Sacubitril inhibits neprilysin, the enzyme that degrades natriuretic peptides, so beneficial vasodilatory and natriuretic peptides accumulate; valsartan simultaneously blocks the angiotensin II receptor. Because neprilysin inhibition also raises bradykinin, this ARNI must never be combined with an ACE inhibitor.",
    choices: [
      { text: "Neprilysin inhibition, raising natriuretic peptide levels", isCorrect: true },
      { text: "Direct renin inhibition" },
      { text: "Aldosterone receptor blockade" },
      { text: "Beta-1 receptor blockade" },
      { text: "Calcium channel blockade" },
    ],
  },
  {
    stem: "Which drug directly inhibits renin, blocking the first and rate-limiting step of the RAAS cascade?",
    topic: "RAAS Inhibitors",
    explanation:
      "Aliskiren binds renin and prevents conversion of angiotensinogen to angiotensin I, acting upstream of both ACE inhibitors and ARBs. It carries the same fetal and hyperkalemia risks as the rest of the class and should not be combined with them in diabetics.",
    choices: [
      { text: "Aliskiren", isCorrect: true },
      { text: "Captopril" },
      { text: "Losartan" },
      { text: "Spironolactone" },
      { text: "Valsartan" },
    ],
  },
  {
    stem: "Compared with ACE inhibitors, angiotensin receptor blockers (ARBs) are chosen mainly because they:",
    topic: "RAAS Inhibitors",
    explanation:
      "ARBs block the AT1 receptor without affecting bradykinin metabolism, so they rarely cause the cough that limits ACE inhibitors and less often cause angioedema. Their efficacy in hypertension and heart failure is comparable, and they share the hyperkalemia and pregnancy risks.",
    choices: [
      { text: "Do not cause bradykinin-mediated cough", isCorrect: true },
      { text: "Are safe in pregnancy" },
      { text: "Never cause hyperkalemia" },
      { text: "Raise blood pressure less reliably" },
      { text: "Increase aldosterone secretion" },
    ],
  },
  {
    stem: "Which effects are expected when angiotensin II signaling is blocked? Select all that apply.",
    type: "MULTI",
    topic: "RAAS Inhibitors",
    explanation:
      "Blocking angiotensin II reduces aldosterone (raising potassium), dilates the efferent arteriole (reducing intraglomerular pressure and slowing diabetic nephropathy), and lowers systemic vascular resistance. It does not raise blood pressure or increase sodium reabsorption — those are the actions being opposed.",
    choices: [
      { text: "Reduced aldosterone secretion", isCorrect: true },
      { text: "Efferent arteriolar dilation with lower intraglomerular pressure", isCorrect: true },
      { text: "Reduced systemic vascular resistance", isCorrect: true },
      { text: "Increased proximal sodium reabsorption" },
      { text: "A rise in blood pressure" },
    ],
  },
  {
    stem: "True or False: Angioedema is an absolute contraindication to switching from an ACE inhibitor to any other RAAS-active drug.",
    type: "TRUE_FALSE",
    topic: "RAAS Inhibitors",
    explanation:
      "False. A history of ACE-inhibitor angioedema is a caution but ARBs can often be used, since angioedema recurs only in a minority; sacubitril/valsartan, however, is contraindicated for 36 hours after an ACE inhibitor and in anyone with prior angioedema. The nuance is what makes this a false blanket statement.",
    choices: [{ text: "True" }, { text: "False", isCorrect: true }],
  },
  /* ══════════════ CALCIUM CHANNEL BLOCKERS ══════════════ */
  {
    stem: "A patient with hypertension is prescribed amlodipine. As a dihydropyridine, its predominant action is on:",
    topic: "Calcium Channel Blockers",
    explanation:
      "Dihydropyridines such as amlodipine and nifedipine act preferentially on vascular smooth muscle L-type channels, producing arterial vasodilation with little direct cardiac effect. This selectivity explains their use in hypertension and the reflex tachycardia and peripheral edema they can cause.",
    choices: [
      { text: "Vascular smooth muscle, causing arterial vasodilation", isCorrect: true },
      { text: "The SA and AV nodes, slowing conduction" },
      { text: "Ventricular contractility only" },
      { text: "Venous capacitance vessels" },
      { text: "Bronchial smooth muscle" },
    ],
  },
  {
    stem: "Verapamil and diltiazem differ from dihydropyridines chiefly in that they:",
    topic: "Calcium Channel Blockers",
    explanation:
      "The non-dihydropyridines verapamil and diltiazem act on cardiac L-type channels, slowing SA node firing and AV nodal conduction and reducing contractility, which makes them useful for rate control in atrial fibrillation. This cardiac depression is why they are avoided with beta-blockers and in systolic heart failure.",
    choices: [
      { text: "Slow AV nodal conduction and reduce heart rate", isCorrect: true },
      { text: "Cause more reflex tachycardia" },
      { text: "Have no effect on the heart" },
      { text: "Are pure arterial vasodilators" },
      { text: "Increase cardiac contractility" },
    ],
  },
  {
    stem: "A common dose-limiting adverse effect of dihydropyridine calcium channel blockers is:",
    topic: "Calcium Channel Blockers",
    explanation:
      "Preferential dilation of precapillary arterioles raises capillary hydrostatic pressure, producing dose-dependent peripheral edema that does not respond well to diuretics. Flushing, headache and reflex tachycardia arise from the same vasodilation. It is not a sign of heart failure.",
    choices: [
      { text: "Peripheral edema", isCorrect: true },
      { text: "Bradycardia" },
      { text: "Hyperkalemia" },
      { text: "Dry cough" },
      { text: "Hypoglycemia" },
    ],
  },
  {
    stem: "Which calcium channel blocker is used specifically to prevent cerebral vasospasm after subarachnoid hemorrhage?",
    topic: "Calcium Channel Blockers",
    explanation:
      "Nimodipine is a dihydropyridine with relative selectivity for cerebral vasculature and is given to reduce vasospasm-related ischemic deficits after aneurysmal subarachnoid hemorrhage. Its benefit there is neuroprotective rather than simply antihypertensive.",
    choices: [
      { text: "Nimodipine", isCorrect: true },
      { text: "Amlodipine" },
      { text: "Verapamil" },
      { text: "Diltiazem" },
      { text: "Felodipine" },
    ],
  },
  {
    stem: "Combining verapamil with a beta-blocker is hazardous mainly because both drugs:",
    topic: "Calcium Channel Blockers",
    explanation:
      "Verapamil and beta-blockers each depress SA node automaticity and AV conduction and reduce contractility, so together they can precipitate profound bradycardia, heart block or cardiogenic shock. The additive negative chronotropic and inotropic effect is the danger.",
    choices: [
      { text: "Depress AV conduction and contractility, risking heart block", isCorrect: true },
      { text: "Cause severe reflex tachycardia" },
      { text: "Induce hyperkalemia" },
      { text: "Cause coronary steal" },
      { text: "Dilate the efferent arteriole" },
    ],
  },
  {
    stem: "Which features are true of the non-dihydropyridine calcium channel blockers? Select all that apply.",
    type: "MULTI",
    topic: "Calcium Channel Blockers",
    explanation:
      "Verapamil and diltiazem slow AV nodal conduction (useful for rate control and some supraventricular tachycardias), are negatively inotropic, and verapamil commonly causes constipation. They should be avoided in reduced-ejection-fraction heart failure. They are not preferred for pure arterial vasodilation, which is the dihydropyridine niche.",
    choices: [
      { text: "They slow AV nodal conduction", isCorrect: true },
      { text: "They are negatively inotropic", isCorrect: true },
      { text: "Verapamil commonly causes constipation", isCorrect: true },
      { text: "They are first-line for reflex-free arterial vasodilation" },
      { text: "They are preferred in systolic heart failure" },
    ],
  },
  {
    stem: "True or False: Grapefruit juice can raise plasma levels of many dihydropyridines by inhibiting intestinal CYP3A4.",
    type: "TRUE_FALSE",
    topic: "Calcium Channel Blockers",
    explanation:
      "True. Grapefruit juice inhibits intestinal CYP3A4, reducing first-pass metabolism of dihydropyridines like felodipine and increasing their bioavailability, which can cause excessive hypotension. This is a frequently tested food-drug interaction.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  /* ══════════════ SYMPATHOLYTICS & VASODILATORS ══════════════ */
  {
    stem: "A patient with hypertension and benign prostatic hyperplasia is given prazosin. Its antihypertensive action results from:",
    topic: "Sympatholytics & Vasodilators",
    explanation:
      "Prazosin selectively blocks alpha-1 receptors, relaxing arterial and venous smooth muscle to lower blood pressure, and relaxing prostatic and bladder-neck smooth muscle to relieve urinary obstruction. The first-dose orthostatic hypotension it can cause reflects this vasodilation.",
    choices: [
      { text: "Selective alpha-1 adrenergic blockade", isCorrect: true },
      { text: "Beta-1 blockade" },
      { text: "Central alpha-2 agonism" },
      { text: "Calcium channel blockade" },
      { text: "Direct arterial dilation via nitric oxide" },
    ],
  },
  {
    stem: "Clonidine lowers blood pressure by which central mechanism?",
    topic: "Sympatholytics & Vasodilators",
    explanation:
      "Clonidine is a central alpha-2 agonist that reduces sympathetic outflow from the brainstem, lowering peripheral resistance and heart rate. Abrupt withdrawal removes this suppression and causes rebound hypertension, a classic and dangerous effect.",
    choices: [
      { text: "Central alpha-2 agonism reducing sympathetic outflow", isCorrect: true },
      { text: "Peripheral alpha-1 blockade" },
      { text: "Beta-2 agonism" },
      { text: "Ganglionic blockade" },
      { text: "Direct venodilation" },
    ],
  },
  {
    stem: "Hydralazine is a direct arteriolar vasodilator. Which adverse effect is most characteristic with prolonged use?",
    topic: "Sympatholytics & Vasodilators",
    explanation:
      "Hydralazine can induce a lupus-like syndrome with antihistone antibodies, more common in slow acetylators; reflex tachycardia and fluid retention also occur, so it is often paired with a beta-blocker and a diuretic. The drug-induced lupus resolves on stopping the drug.",
    choices: [
      { text: "Drug-induced lupus", isCorrect: true },
      { text: "Cinchonism" },
      { text: "Pulmonary fibrosis" },
      { text: "Hypothyroidism" },
      { text: "Gingival hyperplasia" },
    ],
  },
  {
    stem: "Which vasodilator opens ATP-sensitive potassium channels in vascular smooth muscle and is notable for causing hypertrichosis?",
    topic: "Sympatholytics & Vasodilators",
    explanation:
      "Minoxidil opens K-ATP channels, hyperpolarizing and relaxing arteriolar smooth muscle; its hair-growth side effect led to a topical formulation for alopecia. Systemically it causes marked reflex tachycardia and fluid retention, so it is reserved for refractory hypertension.",
    choices: [
      { text: "Minoxidil", isCorrect: true },
      { text: "Hydralazine" },
      { text: "Nitroprusside" },
      { text: "Prazosin" },
      { text: "Fenoldopam" },
    ],
  },
  {
    stem: "Sodium nitroprusside is used for hypertensive emergencies. Prolonged high-dose infusion risks toxicity from which metabolite?",
    topic: "Sympatholytics & Vasodilators",
    explanation:
      "Nitroprusside releases nitric oxide but also liberates cyanide, which is normally detoxified to thiocyanate; in high doses or renal impairment, cyanide or thiocyanate accumulates, causing metabolic acidosis and altered mental status. Co-administration of thiosulfate reduces the risk.",
    choices: [
      { text: "Cyanide", isCorrect: true },
      { text: "Methemoglobin only" },
      { text: "Carbon monoxide" },
      { text: "Ammonia" },
      { text: "Oxalate" },
    ],
  },
  {
    stem: "True or False: Beta-blockers should generally be avoided as monotherapy for a patient with pheochromocytoma before adequate alpha blockade is established.",
    type: "TRUE_FALSE",
    topic: "Sympatholytics & Vasodilators",
    explanation:
      "True. Blocking beta-2-mediated vasodilation while alpha-1 vasoconstriction is unopposed can precipitate a hypertensive crisis, so alpha blockade (e.g., phenoxybenzamine) must precede any beta-blocker. This sequencing is a classic tested principle.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  /* ══════════════ ANTIANGINALS ══════════════ */
  {
    stem: "Nitroglycerin relieves angina primarily by which hemodynamic mechanism?",
    topic: "Antianginals",
    explanation:
      "Nitrates are metabolized to nitric oxide, which raises cyclic GMP and relaxes smooth muscle; at usual doses the dominant effect is venodilation, reducing preload and myocardial wall stress and thus oxygen demand. Coronary dilation contributes but preload reduction is the main antianginal action.",
    choices: [
      { text: "Venodilation reducing preload and oxygen demand", isCorrect: true },
      { text: "Increasing heart rate and contractility" },
      { text: "Arterial constriction to raise perfusion pressure" },
      { text: "Blocking calcium entry into myocytes" },
      { text: "Slowing AV nodal conduction" },
    ],
  },
  {
    stem: "Why must patients on long-acting nitrates observe a daily nitrate-free interval?",
    topic: "Antianginals",
    explanation:
      "Continuous nitrate exposure depletes the sulfhydryl groups needed to generate nitric oxide, producing tolerance and loss of effect; an 8-12 hour nitrate-free interval each day restores responsiveness. This is why the patch is removed overnight in stable angina.",
    choices: [
      { text: "To prevent tolerance from developing", isCorrect: true },
      { text: "To avoid hyperkalemia" },
      { text: "To reduce hepatic accumulation" },
      { text: "To prevent rebound hypertension" },
      { text: "To allow renal clearance of metabolites" },
    ],
  },
  {
    stem: "Combining a nitrate with a phosphodiesterase-5 inhibitor such as sildenafil is contraindicated because:",
    topic: "Antianginals",
    explanation:
      "Both raise cyclic GMP — nitrates increase its production and PDE-5 inhibitors block its breakdown — so together they cause profound, potentially fatal hypotension. This interaction is an absolute contraindication and a frequent exam and clinical safety point.",
    choices: [
      { text: "Their additive effect on cyclic GMP causes severe hypotension", isCorrect: true },
      { text: "They cause additive QT prolongation" },
      { text: "They compete for renal excretion" },
      { text: "They both raise potassium" },
      { text: "They cause coronary vasospasm together" },
    ],
  },
  {
    stem: "Ranolazine is used for chronic angina refractory to standard therapy. Its principal mechanism is:",
    topic: "Antianginals",
    explanation:
      "Ranolazine inhibits the late inward sodium current, reducing intracellular calcium overload and diastolic wall tension without meaningfully changing heart rate or blood pressure. It can prolong the QT interval, which is its main safety caution.",
    choices: [
      { text: "Inhibition of the late sodium current", isCorrect: true },
      { text: "Beta-1 receptor blockade" },
      { text: "Nitric oxide donation" },
      { text: "L-type calcium channel blockade" },
      { text: "Funny-current (If) inhibition" },
    ],
  },
  {
    stem: "In Prinzmetal (vasospastic) angina, which drug classes are preferred and which should be avoided?",
    topic: "Antianginals",
    explanation:
      "Vasospastic angina is treated with calcium channel blockers and nitrates to relieve coronary spasm; non-selective beta-blockers can worsen spasm by leaving alpha-mediated vasoconstriction unopposed and are avoided. Recognizing this reversal from classic angina management is key.",
    choices: [
      { text: "Calcium channel blockers and nitrates are preferred; non-selective beta-blockers are avoided", isCorrect: true },
      { text: "Beta-blockers are preferred; calcium channel blockers are avoided" },
      { text: "Only aspirin is used" },
      { text: "Thrombolytics are first-line" },
      { text: "Diuretics are preferred; nitrates are avoided" },
    ],
  },
  {
    stem: "Which actions reduce myocardial oxygen demand and can therefore relieve angina? Select all that apply.",
    type: "MULTI",
    topic: "Antianginals",
    explanation:
      "Oxygen demand falls with reduced heart rate (beta-blockers), reduced preload (nitrates), and reduced afterload/contractility (calcium channel blockers). Increasing contractility or heart rate raises demand and would worsen angina, so those are not therapeutic here.",
    choices: [
      { text: "Reducing heart rate", isCorrect: true },
      { text: "Reducing preload", isCorrect: true },
      { text: "Reducing afterload", isCorrect: true },
      { text: "Increasing contractility" },
      { text: "Increasing heart rate" },
    ],
  },
  /* ══════════════ HEART FAILURE PHARMACOTHERAPY ══════════════ */
  {
    stem: "Which four drug classes form the guideline-directed foundation of therapy for heart failure with reduced ejection fraction?",
    topic: "Heart Failure Pharmacotherapy",
    explanation:
      "The four pillars are an ARNI or ACE inhibitor/ARB, an evidence-based beta-blocker, a mineralocorticoid receptor antagonist, and an SGLT2 inhibitor; each independently reduces mortality. Diuretics relieve congestion but do not improve survival, which is why they are not counted among the pillars.",
    choices: [
      { text: "ARNI/ACE-ARB, beta-blocker, MRA, and SGLT2 inhibitor", isCorrect: true },
      { text: "Loop diuretic, digoxin, nitrate, and aspirin" },
      { text: "Calcium channel blocker, statin, nitrate, and diuretic" },
      { text: "Digoxin, hydralazine, thiazide, and aspirin" },
      { text: "Beta-blocker, verapamil, nitrate, and warfarin" },
    ],
  },
  {
    stem: "Only certain beta-blockers are proven to reduce mortality in heart failure. Which is one of them?",
    topic: "Heart Failure Pharmacotherapy",
    explanation:
      "Carvedilol, metoprolol succinate and bisoprolol are the three beta-blockers with mortality benefit in HFrEF; they are started at low dose in euvolemic patients and uptitrated slowly because acute beta blockade can transiently worsen failure. Not all beta-blockers share this evidence.",
    choices: [
      { text: "Carvedilol", isCorrect: true },
      { text: "Atenolol" },
      { text: "Propranolol" },
      { text: "Esmolol" },
      { text: "Nadolol" },
    ],
  },
  {
    stem: "SGLT2 inhibitors reduce heart failure hospitalizations. Which is a recognized benefit or caution of this class?",
    topic: "Heart Failure Pharmacotherapy",
    explanation:
      "SGLT2 inhibitors such as dapagliflozin provide a mild osmotic diuresis and cardiorenal benefit independent of diabetes, but they increase the risk of genital mycotic infections and, rarely, euglycemic diabetic ketoacidosis. Their mortality benefit is why they are a pillar of therapy.",
    choices: [
      { text: "They can cause euglycemic ketoacidosis and genital mycotic infections", isCorrect: true },
      { text: "They routinely cause severe hyperglycemia" },
      { text: "They increase mortality in heart failure" },
      { text: "They cause profound hyperkalemia" },
      { text: "They are contraindicated in all non-diabetics" },
    ],
  },
  {
    stem: "The combination of hydralazine and isosorbide dinitrate has a specific mortality benefit in which heart failure population?",
    topic: "Heart Failure Pharmacotherapy",
    explanation:
      "This combination reduces mortality particularly in self-identified Black patients with HFrEF and is also used when ACE inhibitors and ARBs are not tolerated, for example in renal impairment or hyperkalemia. It works by balanced reduction of preload and afterload.",
    choices: [
      { text: "Self-identified Black patients and those intolerant of RAAS inhibitors", isCorrect: true },
      { text: "All patients regardless of tolerance to other agents" },
      { text: "Patients with preserved ejection fraction only" },
      { text: "Patients with acute pulmonary edema only" },
      { text: "Patients already on maximal digoxin" },
    ],
  },
  {
    stem: "A patient in acute cardiogenic shock needs inotropic support. Dobutamine improves output primarily by:",
    topic: "Heart Failure Pharmacotherapy",
    explanation:
      "Dobutamine is a beta-1 agonist that increases contractility and, to a lesser degree, heart rate, raising cardiac output in decompensated failure. Its use is short-term because chronic inotrope exposure increases mortality and arrhythmia. It also mildly reduces afterload via beta-2 effects.",
    choices: [
      { text: "Beta-1 agonism increasing contractility", isCorrect: true },
      { text: "Alpha-1 agonism increasing afterload" },
      { text: "Muscarinic agonism slowing the heart" },
      { text: "Phosphodiesterase inhibition in the vasculature only" },
      { text: "Blocking sodium-potassium ATPase" },
    ],
  },
  {
    stem: "Milrinone supports the failing heart through which mechanism?",
    topic: "Heart Failure Pharmacotherapy",
    explanation:
      "Milrinone inhibits phosphodiesterase-3, raising cyclic AMP in cardiac and vascular smooth muscle to produce positive inotropy plus vasodilation — an 'inodilator.' Because it bypasses beta-receptors, it remains effective in patients on beta-blockers, but it can cause hypotension and arrhythmia.",
    choices: [
      { text: "Phosphodiesterase-3 inhibition raising cyclic AMP", isCorrect: true },
      { text: "Beta-1 receptor agonism" },
      { text: "Sodium-potassium ATPase inhibition" },
      { text: "Calcium channel blockade" },
      { text: "Nitric oxide donation only" },
    ],
  },
  {
    stem: "Which drugs reduce mortality in heart failure with reduced ejection fraction rather than only relieving symptoms? Select all that apply.",
    type: "MULTI",
    topic: "Heart Failure Pharmacotherapy",
    explanation:
      "Beta-blockers such as carvedilol, mineralocorticoid antagonists such as spironolactone, and SGLT2 inhibitors such as dapagliflozin each independently lower mortality. Loop diuretics and digoxin improve symptoms and reduce hospitalization but have no proven mortality benefit.",
    choices: [
      { text: "Carvedilol", isCorrect: true },
      { text: "Spironolactone", isCorrect: true },
      { text: "Dapagliflozin", isCorrect: true },
      { text: "Furosemide" },
      { text: "Digoxin" },
    ],
  },
  {
    stem: "True or False: Non-dihydropyridine calcium channel blockers such as verapamil are recommended to improve outcomes in systolic heart failure.",
    type: "TRUE_FALSE",
    topic: "Heart Failure Pharmacotherapy",
    explanation:
      "False. Their negative inotropic effect can worsen systolic heart failure, so they are avoided in reduced ejection fraction; they have a role in rate control or in heart failure with preserved ejection fraction, but not for improving systolic outcomes.",
    choices: [{ text: "True" }, { text: "False", isCorrect: true }],
  },
  /* ══════════════ CARDIAC GLYCOSIDES & DIGOXIN TOXICITY ══════════════ */
  {
    stem: "Digoxin increases cardiac contractility by inhibiting which membrane protein?",
    topic: "Cardiac Glycosides & Digoxin Toxicity",
    explanation:
      "Digoxin inhibits the sodium-potassium ATPase, raising intracellular sodium; this reduces the gradient driving the sodium-calcium exchanger, so intracellular calcium rises and contractility increases. Its vagal effect on the AV node also slows ventricular rate in atrial fibrillation.",
    choices: [
      { text: "The sodium-potassium ATPase", isCorrect: true },
      { text: "The L-type calcium channel" },
      { text: "The Na-K-2Cl cotransporter" },
      { text: "The funny (If) channel" },
      { text: "The beta-1 adrenergic receptor" },
    ],
  },
  {
    stem: "Which electrolyte abnormality most predisposes a patient to digoxin toxicity?",
    topic: "Cardiac Glycosides & Digoxin Toxicity",
    explanation:
      "Potassium and digoxin compete for the same site on the sodium-potassium ATPase, so hypokalemia increases digoxin binding and toxicity — a dangerous interaction because diuretics used alongside digoxin lower potassium. Maintaining normal potassium is central to safe use.",
    choices: [
      { text: "Hypokalemia", isCorrect: true },
      { text: "Hypernatremia" },
      { text: "Hyperkalemia" },
      { text: "Hyperphosphatemia" },
      { text: "Hypochloremia" },
    ],
  },
  {
    stem: "A patient on digoxin reports seeing yellow-green halos around lights, with nausea and confusion. This presentation suggests:",
    topic: "Cardiac Glycosides & Digoxin Toxicity",
    explanation:
      "Visual disturbances with a yellow-green tint (xanthopsia), along with nausea, anorexia and confusion, are classic features of digoxin toxicity. Toxicity also produces arrhythmias, and severe cases are treated with digoxin-specific antibody fragments.",
    choices: [
      { text: "Digoxin toxicity", isCorrect: true },
      { text: "Nitrate tolerance" },
      { text: "Beta-blocker overdose" },
      { text: "Statin myopathy" },
      { text: "ACE-inhibitor cough" },
    ],
  },
  {
    stem: "What is the specific antidote for life-threatening digoxin toxicity?",
    topic: "Cardiac Glycosides & Digoxin Toxicity",
    explanation:
      "Digoxin-specific antibody fragments (digoxin immune Fab) bind circulating digoxin and are used for severe toxicity with life-threatening arrhythmia or hyperkalemia. Supportive measures include correcting potassium and magnesium; calcium is avoided because it can worsen the arrhythmia.",
    choices: [
      { text: "Digoxin-specific antibody fragments (Fab)", isCorrect: true },
      { text: "Intravenous calcium gluconate" },
      { text: "Atropine alone" },
      { text: "Sodium bicarbonate" },
      { text: "Flumazenil" },
    ],
  },
  {
    stem: "True or False: Amiodarone, verapamil and quinidine can each raise serum digoxin levels and precipitate toxicity.",
    type: "TRUE_FALSE",
    topic: "Cardiac Glycosides & Digoxin Toxicity",
    explanation:
      "True. These agents reduce digoxin clearance or displace it from tissue binding (in part via P-glycoprotein inhibition), raising its serum concentration; the digoxin dose is typically reduced when they are co-prescribed. This is a well-known set of interactions.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  /* ══════════════ ANTIARRHYTHMICS I & III ══════════════ */
  {
    stem: "In the Vaughan Williams classification, Class I antiarrhythmics share which primary action?",
    topic: "Antiarrhythmics I & III",
    explanation:
      "Class I drugs block fast sodium channels, slowing phase 0 depolarization and conduction; subclasses differ by how strongly they bind and their effect on repolarization. Class IA prolongs, IB shortens, and IC has little effect on action potential duration.",
    choices: [
      { text: "Sodium channel blockade slowing phase 0", isCorrect: true },
      { text: "Potassium channel blockade prolonging repolarization" },
      { text: "Beta-adrenergic blockade" },
      { text: "Calcium channel blockade" },
      { text: "Muscarinic agonism" },
    ],
  },
  {
    stem: "Quinidine, a Class IA agent, can cause a distinctive cluster of adverse effects known as:",
    topic: "Antiarrhythmics I & III",
    explanation:
      "Cinchonism — tinnitus, headache, blurred vision and gastrointestinal upset — is characteristic of quinidine; the drug also prolongs the QT interval and can cause torsades de pointes. Its many interactions and toxicity have limited its modern use.",
    choices: [
      { text: "Cinchonism", isCorrect: true },
      { text: "Serotonin syndrome" },
      { text: "Neuroleptic malignant syndrome" },
      { text: "Disulfiram reaction" },
      { text: "Gray baby syndrome" },
    ],
  },
  {
    stem: "Lidocaine, a Class IB antiarrhythmic, is particularly useful for which arrhythmias?",
    topic: "Antiarrhythmics I & III",
    explanation:
      "Class IB agents bind preferentially to ischemic, depolarized ventricular tissue, making lidocaine effective for ventricular arrhythmias, especially post-myocardial-infarction. It has little effect on atrial tissue and is given intravenously because of extensive first-pass metabolism.",
    choices: [
      { text: "Ventricular arrhythmias, especially in ischemia", isCorrect: true },
      { text: "Atrial fibrillation only" },
      { text: "Sinus bradycardia" },
      { text: "AV nodal reentry only" },
      { text: "Wolff-Parkinson-White with rapid atrial fibrillation" },
    ],
  },
  {
    stem: "Flecainide (Class IC) is contraindicated in patients with structural heart disease or prior myocardial infarction because:",
    topic: "Antiarrhythmics I & III",
    explanation:
      "In diseased myocardium, the strong conduction slowing of Class IC drugs is proarrhythmic and increases mortality, as shown in the CAST trial. Flecainide is therefore reserved for arrhythmias in structurally normal hearts, such as paroxysmal atrial fibrillation.",
    choices: [
      { text: "It is proarrhythmic and increases mortality in that setting", isCorrect: true },
      { text: "It causes pulmonary fibrosis" },
      { text: "It provokes coronary vasospasm" },
      { text: "It causes profound bradycardia in normal hearts" },
      { text: "It is inactivated by ischemic tissue" },
    ],
  },
  {
    stem: "Amiodarone is classified as Class III but is unusual because it:",
    topic: "Antiarrhythmics I & III",
    explanation:
      "Amiodarone prolongs repolarization by blocking potassium channels but also has sodium-channel, beta-blocking and calcium-channel actions, spanning all four Vaughan Williams classes. This broad activity underlies both its efficacy and its extensive organ toxicity.",
    choices: [
      { text: "Exhibits properties of all four antiarrhythmic classes", isCorrect: true },
      { text: "Has no effect on the QT interval" },
      { text: "Acts only on atrial tissue" },
      { text: "Is a pure beta-blocker" },
      { text: "Shortens the action potential" },
    ],
  },
  {
    stem: "Which organ toxicities are associated with long-term amiodarone use? Select all that apply.",
    type: "MULTI",
    topic: "Antiarrhythmics I & III",
    explanation:
      "Amiodarone contains iodine and is highly lipophilic, causing thyroid dysfunction (hypo- or hyper-), pulmonary fibrosis, hepatotoxicity, corneal deposits and blue-gray skin discoloration. It does not cause the drug-induced lupus that characterizes hydralazine and procainamide.",
    choices: [
      { text: "Thyroid dysfunction", isCorrect: true },
      { text: "Pulmonary fibrosis", isCorrect: true },
      { text: "Hepatotoxicity", isCorrect: true },
      { text: "Corneal microdeposits", isCorrect: true },
      { text: "Drug-induced lupus indistinguishable from procainamide" },
    ],
  },
  {
    stem: "True or False: Class IA and Class III antiarrhythmics can both prolong the QT interval and cause torsades de pointes.",
    type: "TRUE_FALSE",
    topic: "Antiarrhythmics I & III",
    explanation:
      "True. Class IA agents (via potassium-channel effects) and Class III agents both prolong repolarization and the QT interval, creating a risk of torsades de pointes, particularly with hypokalemia or hypomagnesemia. Monitoring the QT is standard with these drugs.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  /* ══════════════ ANTIARRHYTHMICS II, IV & OTHER ══════════════ */
  {
    stem: "Beta-blockers (Class II) exert their antiarrhythmic effect mainly by:",
    topic: "Antiarrhythmics II, IV & Other",
    explanation:
      "By blocking beta-1 receptors, Class II drugs reduce SA node automaticity and slow AV nodal conduction, useful for rate control and preventing recurrent ischemic arrhythmias. They lower the risk of sudden cardiac death after myocardial infarction, unlike Class IC agents.",
    choices: [
      { text: "Slowing SA node firing and AV nodal conduction", isCorrect: true },
      { text: "Blocking fast sodium channels" },
      { text: "Prolonging repolarization via potassium channels" },
      { text: "Opening potassium channels in vascular muscle" },
      { text: "Inhibiting the sodium-potassium ATPase" },
    ],
  },
  {
    stem: "Adenosine is the drug of choice for terminating acute paroxysmal supraventricular tachycardia because it:",
    topic: "Antiarrhythmics II, IV & Other",
    explanation:
      "Adenosine transiently blocks AV nodal conduction by activating potassium channels and inhibiting calcium currents, interrupting reentrant circuits; its half-life is only seconds, so the effect and any brief asystole resolve quickly. Flushing and chest tightness are common transient effects.",
    choices: [
      { text: "Transiently blocks AV nodal conduction with a very short half-life", isCorrect: true },
      { text: "Prolongs the QT interval for hours" },
      { text: "Blocks sodium channels in the ventricle" },
      { text: "Increases sympathetic tone" },
      { text: "Irreversibly slows the SA node" },
    ],
  },
  {
    stem: "Which agent is first-line for terminating stable torsades de pointes?",
    topic: "Antiarrhythmics II, IV & Other",
    explanation:
      "Intravenous magnesium sulfate suppresses the early afterdepolarizations that drive torsades de pointes, even when the serum magnesium is normal. Correcting potassium and removing QT-prolonging drugs are also essential; unstable rhythm requires defibrillation.",
    choices: [
      { text: "Magnesium sulfate", isCorrect: true },
      { text: "Amiodarone" },
      { text: "Flecainide" },
      { text: "Digoxin" },
      { text: "Adenosine" },
    ],
  },
  {
    stem: "Ivabradine lowers heart rate in heart failure by a mechanism distinct from beta-blockers. It acts by:",
    topic: "Antiarrhythmics II, IV & Other",
    explanation:
      "Ivabradine selectively inhibits the funny current (If) in the SA node, slowing the rate of spontaneous depolarization and reducing heart rate without affecting contractility or blood pressure. It is used when heart rate stays elevated despite maximal beta blockade.",
    choices: [
      { text: "Inhibiting the SA node funny current (If)", isCorrect: true },
      { text: "Blocking beta-1 receptors" },
      { text: "Blocking AV nodal calcium channels" },
      { text: "Prolonging repolarization" },
      { text: "Inhibiting the sodium-potassium ATPase" },
    ],
  },
  {
    stem: "For acute rate control of atrial fibrillation with rapid ventricular response, which agents act at the AV node? Select all that apply.",
    type: "MULTI",
    topic: "Antiarrhythmics II, IV & Other",
    explanation:
      "Beta-blockers such as metoprolol, non-dihydropyridine calcium channel blockers such as diltiazem, and digoxin all slow AV nodal conduction to control ventricular rate. Adenosine also blocks the node but is too short-acting for sustained control. Nifedipine acts on vessels, not the AV node.",
    choices: [
      { text: "Metoprolol", isCorrect: true },
      { text: "Diltiazem", isCorrect: true },
      { text: "Digoxin", isCorrect: true },
      { text: "Nifedipine" },
      { text: "Hydralazine" },
    ],
  },
  /* ══════════════ ANTIHYPERLIPIDEMICS ══════════════ */
  {
    stem: "Statins lower LDL cholesterol chiefly by inhibiting which enzyme?",
    topic: "Antihyperlipidemics",
    explanation:
      "Statins competitively inhibit HMG-CoA reductase, the rate-limiting enzyme of hepatic cholesterol synthesis; the fall in intracellular cholesterol upregulates LDL receptors, increasing LDL clearance from blood. They produce the largest LDL reduction of the oral agents.",
    choices: [
      { text: "HMG-CoA reductase", isCorrect: true },
      { text: "Lipoprotein lipase" },
      { text: "Cholesterol ester transfer protein" },
      { text: "Intestinal cholesterol transporter NPC1L1" },
      { text: "PCSK9" },
    ],
  },
  {
    stem: "A patient on a statin develops muscle pain with elevated creatine kinase. This risk is increased by concurrent use of:",
    topic: "Antihyperlipidemics",
    explanation:
      "Statin myopathy and rare rhabdomyolysis are dose-related and worsened by drugs that raise statin levels, notably fibrates (especially gemfibrozil) and CYP3A4 inhibitors. Monitoring symptoms and avoiding these combinations reduces risk. Liver enzymes should also be watched.",
    choices: [
      { text: "Gemfibrozil", isCorrect: true },
      { text: "Aspirin" },
      { text: "Metformin" },
      { text: "Furosemide" },
      { text: "Amlodipine" },
    ],
  },
  {
    stem: "Ezetimibe lowers cholesterol by which mechanism?",
    topic: "Antihyperlipidemics",
    explanation:
      "Ezetimibe blocks the intestinal cholesterol transporter NPC1L1, reducing absorption of dietary and biliary cholesterol; it adds a modest further LDL reduction when combined with a statin. It is well tolerated and does not cause the muscle toxicity of statins.",
    choices: [
      { text: "Blocking intestinal cholesterol absorption via NPC1L1", isCorrect: true },
      { text: "Inhibiting HMG-CoA reductase" },
      { text: "Activating lipoprotein lipase" },
      { text: "Binding bile acids in the gut" },
      { text: "Inhibiting PCSK9" },
    ],
  },
  {
    stem: "PCSK9 inhibitors such as evolocumab produce large LDL reductions because they:",
    topic: "Antihyperlipidemics",
    explanation:
      "PCSK9 normally targets hepatic LDL receptors for degradation; blocking it with a monoclonal antibody preserves and increases LDL receptors, dramatically enhancing LDL clearance. They are injectable and reserved for high-risk patients not at goal on statins.",
    choices: [
      { text: "Increase LDL receptor recycling on hepatocytes", isCorrect: true },
      { text: "Inhibit HMG-CoA reductase" },
      { text: "Block cholesterol absorption in the gut" },
      { text: "Bind bile acids" },
      { text: "Activate PPAR-alpha" },
    ],
  },
  {
    stem: "Fibrates such as fenofibrate are most effective at lowering which lipid fraction?",
    topic: "Antihyperlipidemics",
    explanation:
      "Fibrates activate PPAR-alpha, increasing lipoprotein lipase activity and markedly lowering triglycerides while modestly raising HDL; they are first-line for severe hypertriglyceridemia to prevent pancreatitis. Their main cautions are myopathy (with statins) and gallstones.",
    choices: [
      { text: "Triglycerides", isCorrect: true },
      { text: "LDL cholesterol predominantly" },
      { text: "Lipoprotein(a)" },
      { text: "Total cholesterol only" },
      { text: "HDL exclusively" },
    ],
  },
  {
    stem: "Bile acid sequestrants such as cholestyramine lower LDL by which action, and what is a notable drawback?",
    topic: "Antihyperlipidemics",
    explanation:
      "They bind bile acids in the gut, preventing reabsorption and forcing the liver to use cholesterol to make more, which upregulates LDL receptors; however, they can raise triglycerides and impair absorption of fat-soluble vitamins and other drugs. Gastrointestinal bloating limits adherence.",
    choices: [
      { text: "They bind intestinal bile acids and can impair absorption of other drugs", isCorrect: true },
      { text: "They inhibit HMG-CoA reductase and cause myopathy" },
      { text: "They block cholesterol synthesis and cause flushing" },
      { text: "They activate PPAR-alpha and cause gallstones" },
      { text: "They inhibit PCSK9 and cause injection reactions" },
    ],
  },
  {
    stem: "Which statements about niacin as a lipid-lowering agent are correct? Select all that apply.",
    type: "MULTI",
    topic: "Antihyperlipidemics",
    explanation:
      "Niacin raises HDL and lowers triglycerides and LDL, and its prostaglandin-mediated cutaneous flushing can be blunted by aspirin taken beforehand. It can worsen glycemic control and raise uric acid, precipitating gout. It does not act by inhibiting HMG-CoA reductase.",
    choices: [
      { text: "It raises HDL cholesterol", isCorrect: true },
      { text: "Flushing is prostaglandin-mediated and reduced by aspirin", isCorrect: true },
      { text: "It can worsen hyperglycemia and hyperuricemia", isCorrect: true },
      { text: "It inhibits HMG-CoA reductase" },
      { text: "It has no effect on triglycerides" },
    ],
  },
  {
    stem: "True or False: Icosapent ethyl, a purified eicosapentaenoic acid product, reduces cardiovascular events in selected patients with elevated triglycerides on statin therapy.",
    type: "TRUE_FALSE",
    topic: "Antihyperlipidemics",
    explanation:
      "True. In statin-treated patients with high triglycerides and cardiovascular risk, icosapent ethyl reduced ischemic events in the REDUCE-IT trial; it also lowers triglycerides. This distinguishes it from many other omega-3 formulations, which lack proven event reduction.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  /* ══════════════ ANTICOAGULANTS, ANTIPLATELETS & THROMBOLYTICS ══════════════ */
  {
    stem: "Unfractionated heparin produces its anticoagulant effect by:",
    topic: "Anticoagulants, Antiplatelets & Thrombolytics",
    explanation:
      "Heparin binds antithrombin and accelerates its inactivation of thrombin (factor IIa) and factor Xa; its effect is monitored with the aPTT and rapidly reversed with protamine sulfate. Its immediate action makes it useful when rapid anticoagulation is required.",
    choices: [
      { text: "Enhancing antithrombin's inactivation of thrombin and factor Xa", isCorrect: true },
      { text: "Inhibiting vitamin K epoxide reductase" },
      { text: "Directly binding thrombin's active site" },
      { text: "Blocking the platelet P2Y12 receptor" },
      { text: "Chelating calcium in the coagulation cascade" },
    ],
  },
  {
    stem: "Warfarin inhibits which step of coagulation, and why is its onset delayed?",
    topic: "Anticoagulants, Antiplatelets & Thrombolytics",
    explanation:
      "Warfarin blocks vitamin K epoxide reductase, impairing synthesis of factors II, VII, IX and X and proteins C and S; the delay reflects the time for existing clotting factors to be cleared. Because protein C falls first, a transient hypercoagulable state can occur early.",
    choices: [
      { text: "Vitamin K epoxide reductase, with delayed onset as existing factors are cleared", isCorrect: true },
      { text: "Antithrombin activation, with immediate onset" },
      { text: "Direct factor Xa inhibition, with immediate onset" },
      { text: "Platelet cyclooxygenase, with delayed onset" },
      { text: "Fibrin cross-linking, with immediate onset" },
    ],
  },
  {
    stem: "A patient on heparin develops a falling platelet count and new thrombosis after five days. The most likely diagnosis is:",
    topic: "Anticoagulants, Antiplatelets & Thrombolytics",
    explanation:
      "Heparin-induced thrombocytopenia is an immune reaction to heparin-platelet factor 4 complexes that paradoxically causes thrombosis; heparin must be stopped and a non-heparin anticoagulant such as argatroban started. Warfarin alone is deferred until platelets recover.",
    choices: [
      { text: "Heparin-induced thrombocytopenia", isCorrect: true },
      { text: "Warfarin skin necrosis" },
      { text: "Disseminated intravascular coagulation from sepsis" },
      { text: "Thrombotic thrombocytopenic purpura" },
      { text: "Immune thrombocytopenic purpura" },
    ],
  },
  {
    stem: "Which oral anticoagulant directly inhibits factor Xa and does not require routine coagulation monitoring?",
    topic: "Anticoagulants, Antiplatelets & Thrombolytics",
    explanation:
      "Rivaroxaban and apixaban are direct factor Xa inhibitors with predictable pharmacokinetics, so routine monitoring is unnecessary; andexanet alfa can reverse them. Dabigatran, by contrast, is a direct thrombin inhibitor reversed by idarucizumab.",
    choices: [
      { text: "Rivaroxaban", isCorrect: true },
      { text: "Warfarin" },
      { text: "Dabigatran" },
      { text: "Enoxaparin" },
      { text: "Argatroban" },
    ],
  },
  {
    stem: "Aspirin's antiplatelet effect is due to:",
    topic: "Anticoagulants, Antiplatelets & Thrombolytics",
    explanation:
      "Aspirin irreversibly acetylates cyclooxygenase-1 in platelets, blocking thromboxane A2 synthesis; because platelets cannot regenerate the enzyme, the effect lasts their lifespan of about a week. This irreversibility distinguishes it from reversible NSAIDs.",
    choices: [
      { text: "Irreversible inhibition of platelet cyclooxygenase-1", isCorrect: true },
      { text: "Reversible P2Y12 receptor blockade" },
      { text: "Glycoprotein IIb/IIIa blockade" },
      { text: "Phosphodiesterase inhibition" },
      { text: "Antithrombin activation" },
    ],
  },
  {
    stem: "Clopidogrel prevents platelet aggregation by blocking which receptor?",
    topic: "Anticoagulants, Antiplatelets & Thrombolytics",
    explanation:
      "Clopidogrel is a prodrug whose active metabolite irreversibly blocks the platelet P2Y12 ADP receptor, preventing the ADP-dependent activation of glycoprotein IIb/IIIa. Because it requires CYP2C19 activation, poor metabolizers may respond inadequately.",
    choices: [
      { text: "The P2Y12 ADP receptor", isCorrect: true },
      { text: "Cyclooxygenase-1" },
      { text: "The glycoprotein IIb/IIIa receptor" },
      { text: "The thrombin receptor PAR-1" },
      { text: "The thromboxane receptor" },
    ],
  },
  {
    stem: "Which statements about thrombolytic agents such as alteplase are correct? Select all that apply.",
    type: "MULTI",
    topic: "Anticoagulants, Antiplatelets & Thrombolytics",
    explanation:
      "Tissue plasminogen activators convert plasminogen to plasmin, which dissolves fibrin clots, and are used in acute ischemic stroke and selected myocardial infarction within tight time windows. Their major risk is hemorrhage, so active bleeding and recent hemorrhagic stroke are contraindications. They do not inhibit platelet aggregation.",
    choices: [
      { text: "They convert plasminogen to plasmin to lyse fibrin", isCorrect: true },
      { text: "Their major adverse effect is bleeding", isCorrect: true },
      { text: "They are time-window dependent in acute ischemic stroke", isCorrect: true },
      { text: "They act by blocking the P2Y12 receptor" },
      { text: "They are safe in active intracranial hemorrhage" },
    ],
  },
  {
    stem: "True or False: Protamine sulfate fully reverses unfractionated heparin but only partially reverses low-molecular-weight heparin.",
    type: "TRUE_FALSE",
    topic: "Anticoagulants, Antiplatelets & Thrombolytics",
    explanation:
      "True. Protamine neutralizes unfractionated heparin completely but reverses only part of the anti-Xa activity of low-molecular-weight heparins such as enoxaparin, because it binds the longer chains more effectively. This limits reversal options in LMWH bleeding.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  /* ══════════════ CLINICAL APPLICATION ══════════════ */
  {
    stem: "A 62-year-old with hypertension, diabetes and albuminuria needs a first-line antihypertensive that also protects the kidney. The best initial choice is:",
    topic: "Clinical Application",
    explanation:
      "An ACE inhibitor or ARB is preferred in diabetic patients with albuminuria because efferent arteriolar dilation lowers intraglomerular pressure and slows nephropathy progression, a benefit beyond blood-pressure control. Potassium and creatinine are checked after starting.",
    choices: [
      { text: "Lisinopril", isCorrect: true },
      { text: "Amlodipine" },
      { text: "Hydrochlorothiazide" },
      { text: "Atenolol" },
      { text: "Doxazosin" },
    ],
  },
  {
    stem: "A patient with asthma and hypertension should generally avoid which class because of the risk of bronchoconstriction?",
    topic: "Clinical Application",
    explanation:
      "Non-selective beta-blockers block beta-2 receptors that mediate bronchodilation and can provoke bronchospasm in asthma; if a beta-blocker is truly needed, a cardioselective agent at low dose is preferred. This is a classic contraindication to weigh in comorbid disease.",
    choices: [
      { text: "Non-selective beta-blockers", isCorrect: true },
      { text: "ACE inhibitors" },
      { text: "Thiazide diuretics" },
      { text: "Calcium channel blockers" },
      { text: "Alpha-1 blockers" },
    ],
  },
  {
    stem: "A patient presents with a hypertensive emergency and acute pulmonary edema. Which intravenous agent is most appropriate?",
    topic: "Clinical Application",
    explanation:
      "Intravenous nitroglycerin (or nitroprusside) reduces preload and afterload rapidly, relieving pulmonary congestion while lowering blood pressure in a titratable way. A loop diuretic is added for volume. Agents that increase cardiac workload would be inappropriate here.",
    choices: [
      { text: "Intravenous nitroglycerin", isCorrect: true },
      { text: "Intravenous dobutamine" },
      { text: "Oral clonidine" },
      { text: "Intravenous phenylephrine" },
      { text: "Oral verapamil" },
    ],
  },
  {
    stem: "A patient stabilized after an acute myocardial infarction should typically be discharged on which combination for secondary prevention?",
    topic: "Clinical Application",
    explanation:
      "Guideline secondary prevention includes a high-intensity statin, an antiplatelet agent (often dual therapy initially), a beta-blocker, and an ACE inhibitor, each with independent mortality or event benefit. This bundle is a frequently tested integration of cardiovascular pharmacology.",
    choices: [
      { text: "Statin, antiplatelet, beta-blocker, and ACE inhibitor", isCorrect: true },
      { text: "Calcium channel blocker, nitrate, and digoxin" },
      { text: "Thiazide, alpha-blocker, and warfarin" },
      { text: "Fibrate, verapamil, and hydralazine" },
      { text: "Niacin, clonidine, and aspirin only" },
    ],
  },
  {
    stem: "Which pairings of cardiovascular drug and its classic monitoring or safety parameter are correct? Select all that apply.",
    type: "MULTI",
    topic: "Clinical Application",
    explanation:
      "Warfarin is monitored by the INR, unfractionated heparin by the aPTT, and digoxin requires attention to serum potassium given the risk of toxicity with hypokalemia. Statins are followed by symptoms and liver enzymes, not the INR, so that pairing is incorrect.",
    choices: [
      { text: "Warfarin — INR", isCorrect: true },
      { text: "Unfractionated heparin — aPTT", isCorrect: true },
      { text: "Digoxin — serum potassium", isCorrect: true },
      { text: "Statin — INR" },
      { text: "Amlodipine — serum digoxin level" },
    ],
  },
  {
    stem: "True or False: A rise in serum creatinine of up to about 30% after starting an ACE inhibitor is often acceptable and does not by itself require stopping the drug.",
    type: "TRUE_FALSE",
    topic: "Clinical Application",
    explanation:
      "True. A modest creatinine rise reflects the expected fall in intraglomerular pressure and stabilizes; a larger or progressive rise, or hyperkalemia, prompts reassessment for renal artery stenosis or volume depletion. Understanding this prevents unnecessary discontinuation.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
];
