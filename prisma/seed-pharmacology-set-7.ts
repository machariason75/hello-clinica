/**
 * PHARMACOLOGY — SET 7 of 7  ·  TIER 7: EXPERT & EDGE CASES
 *
 * SEVENTY questions. Ten areas, seven each. This completes the section.
 *
 * WHAT THIS TIER IS FOR
 *
 * Two things the earlier sets could not do.
 *
 * First, the EXCEPTIONS. Sets 1–6 taught rules — start low and go slow, narrow
 * the antibiotic, reduce the dose in renal impairment. Every one of those rules
 * has a situation where following it causes harm, and knowing where a rule stops
 * applying is a different kind of knowledge from knowing the rule.
 *
 * Second, the material a strong candidate has and an adequate one does not:
 * pharmacogenomics, receptor subtleties, how to read the evidence behind a drug,
 * resistance mechanisms, and the therapeutics that did not exist when most
 * textbooks were written.
 *
 * Non-destructive (uses _seedkit) — a re-run refreshes only what it owns and
 * keeps anything you added through Admin.
 *
 * ⚠ Availability of genotyping, biologics and newer agents varies enormously by
 * setting. These test understanding rather than access. Review anything
 * numerical against Kenyan guidance before publishing.
 *
 * Run:  npx tsx prisma/seed-pharmacology-set-7.ts
 */

import { type Q, findCategory, seedSet, done, REPLACE_MODE } from "./_seedkit";

const SET7: Q[] = [
  /* ── Pharmacogenomics ── */
  {
    stem: "What is the consequence of being a CYP2C19 poor metaboliser for someone prescribed clopidogrel?",
    topic: "Pharmacogenomics",
    explanation:
      "Clopidogrel is a prodrug requiring CYP2C19 for activation, so a poor metaboliser generates less active drug and gets less antiplatelet effect — with a measurably higher rate of stent thrombosis. It is one of the clearest examples of genotype changing a clinical outcome rather than merely a concentration.",
    choices: [
      { text: "Reduced activation of the prodrug, so less antiplatelet effect and higher thrombotic risk", isCorrect: true },
      { text: "Excessive activation with dangerous bleeding", isCorrect: false },
      { text: "No effect, since clopidogrel is active as given", isCorrect: false },
      { text: "Complete inability to absorb the drug", isCorrect: false },
    ],
  },
  {
    stem: "Why is HLA-B*57:01 tested for before starting abacavir?",
    topic: "Pharmacogenomics",
    explanation:
      "Carriers have a high risk of a severe systemic hypersensitivity reaction that can be fatal on rechallenge. Screening virtually eliminates it, and it stands as the model case for pharmacogenomic testing: a single allele, a severe outcome, and a clear action.",
    choices: [
      { text: "Carriers are at high risk of severe, potentially fatal hypersensitivity", isCorrect: true },
      { text: "Carriers metabolise the drug too quickly", isCorrect: false },
      { text: "It predicts virological response only", isCorrect: false },
      { text: "It determines the correct dose", isCorrect: false },
    ],
  },
  {
    stem: "Why is HLA-B*15:02 screening recommended before carbamazepine in people of Han Chinese or Southeast Asian ancestry?",
    topic: "Pharmacogenomics",
    explanation:
      "That allele carries a markedly increased risk of Stevens-Johnson syndrome and toxic epidermal necrolysis with carbamazepine, and it is far more prevalent in those populations. It illustrates that pharmacogenomic risk is not evenly distributed, so a screening recommendation can be population-specific.",
    choices: [
      { text: "It carries a much higher risk of severe cutaneous reaction, and is prevalent in those populations", isCorrect: true },
      { text: "It predicts seizure control rather than safety", isCorrect: false },
      { text: "It affects only the drug's half-life", isCorrect: false },
      { text: "The allele is equally common in all populations", isCorrect: false },
    ],
  },
  {
    stem: "What does DPYD deficiency mean for a patient about to receive fluorouracil or capecitabine?",
    topic: "Pharmacogenomics",
    explanation:
      "Dihydropyrimidine dehydrogenase clears these drugs, so deficiency causes severe and sometimes fatal toxicity — profound myelosuppression, mucositis and diarrhoea — at standard doses. Testing before treatment allows dose reduction or an alternative regimen.",
    choices: [
      { text: "Impaired clearance causing severe, potentially fatal toxicity at standard doses", isCorrect: true },
      { text: "Reduced efficacy requiring higher doses", isCorrect: false },
      { text: "An increased risk of allergy only", isCorrect: false },
      { text: "No clinical consequence", isCorrect: false },
    ],
  },
  {
    stem: "What is the practical significance of being a slow acetylator?",
    topic: "Pharmacogenomics",
    explanation:
      "NAT2 activity determines how fast isoniazid, hydralazine and some sulfonamides are cleared. Slow acetylators accumulate the parent drug and are more prone to isoniazid peripheral neuropathy and to drug-induced lupus with hydralazine; fast acetylators may under-respond at standard doses.",
    choices: [
      { text: "Slower clearance of isoniazid, hydralazine and sulfonamides, raising toxicity risk", isCorrect: true },
      { text: "Faster clearance of all drugs", isCorrect: false },
      { text: "An inability to absorb oral medication", isCorrect: false },
      { text: "It affects only anaesthetic agents", isCorrect: false },
    ],
  },
  {
    stem: "Why has warfarin pharmacogenomic dosing not replaced INR monitoring, despite CYP2C9 and VKORC1 being well characterised?",
    topic: "Pharmacogenomics",
    explanation:
      "Genotype explains only part of the variability — diet, adherence, illness and interacting drugs account for much of the rest — and monitoring captures all of it directly and cheaply. Where a simple, sensitive measure of the actual effect exists, genotyping adds little.",
    choices: [
      { text: "Genotype explains only part of the variability, and INR measures the actual effect directly", isCorrect: true },
      { text: "The genes involved were never identified", isCorrect: false },
      { text: "Genotyping is more accurate but unavailable anywhere", isCorrect: false },
      { text: "Warfarin response is entirely genetic", isCorrect: false },
    ],
  },
  {
    stem: "Which factors determine whether a pharmacogenomic test is worth doing routinely?",
    topic: "Pharmacogenomics",
    explanation:
      "Whether the variant is common enough to matter, the consequence severe enough to justify testing, and — most importantly — whether the result changes what you would actually do. A test that identifies a real risk you cannot act on informs nobody usefully.",
    choices: [
      { text: "Variant frequency, severity of consequence, and whether the result changes management", isCorrect: true },
      { text: "Only whether the test is technically possible", isCorrect: false },
      { text: "Only the cost of the test", isCorrect: false },
      { text: "All identified variants should be tested for routinely", isCorrect: false },
    ],
  },

  /* ── Exceptions to the Rules ── */
  {
    stem: "Sepsis in a young burns patient sometimes needs HIGHER antibiotic doses than standard. What explains this?",
    topic: "Exceptions to the Rules",
    explanation:
      "Augmented renal clearance — a hyperdynamic state in young patients with sepsis, burns or major trauma raises glomerular filtration well above normal, clearing renally excreted drugs faster. Standard doses can be sub-therapeutic in exactly the patients who can least afford it, so this is the mirror image of the usual renal-impairment reasoning.",
    choices: [
      { text: "Augmented renal clearance in the hyperdynamic state clears drug faster than normal", isCorrect: true },
      { text: "Burns destroy antibiotics chemically", isCorrect: false },
      { text: "Renal function is always reduced in these patients", isCorrect: false },
      { text: "Higher doses are given purely as a precaution", isCorrect: false },
    ],
  },
  {
    stem: "When is de-escalating to a narrow-spectrum agent after sensitivities NOT appropriate?",
    topic: "Exceptions to the Rules",
    explanation:
      "In polymicrobial infection where the culture reflects only part of the picture, in profound neutropenia where cover cannot safely be narrowed, and where combination therapy is used deliberately for synergy — some endocarditis regimens, for instance. The general rule is sound; these are the recognised exceptions.",
    choices: [
      { text: "Polymicrobial infection, profound neutropenia, and where combinations are used for synergy", isCorrect: true },
      { text: "Whenever the patient is improving", isCorrect: false },
      { text: "De-escalation is never appropriate", isCorrect: false },
      { text: "Only when the organism is Gram-positive", isCorrect: false },
    ],
  },
  {
    stem: "Under what circumstances might a drug normally avoided in pregnancy still be given?",
    topic: "Exceptions to the Rules",
    explanation:
      "When the maternal condition is itself life-threatening and no acceptable alternative exists — treating a serious maternal illness protects the pregnancy too. The decision is made explicitly with the woman, with specialist input and clear documentation, rather than by defaulting to avoidance.",
    choices: [
      { text: "When the maternal condition is life-threatening and no acceptable alternative exists", isCorrect: true },
      { text: "Never, under any circumstance", isCorrect: false },
      { text: "Whenever the patient requests it", isCorrect: false },
      { text: "Routinely, since pregnancy warnings are precautionary", isCorrect: false },
    ],
  },
  {
    stem: "Which infections traditionally resist the usual intravenous-to-oral switch, and why is that position changing?",
    topic: "Exceptions to the Rules",
    explanation:
      "Endocarditis, bone and joint infection and central nervous system infection, where sustained tissue concentrations matter. Trial evidence has since shown oral completion is acceptable in selected patients with suitable agents — a good example of a rule that was reasonable but is being revised by data.",
    choices: [
      { text: "Endocarditis, bone and joint, and CNS infection — though trials now support oral completion in selected cases", isCorrect: true },
      { text: "Simple urinary tract infection", isCorrect: false },
      { text: "All infections must complete intravenously", isCorrect: false },
      { text: "The rule has never been questioned", isCorrect: false },
    ],
  },
  {
    stem: "A patient develops a mild rash on antituberculous therapy. Why is stopping all treatment not automatically correct?",
    topic: "Exceptions to the Rules",
    explanation:
      "Interrupting therapy risks treatment failure and resistance, so mild reactions are often managed through — with symptomatic treatment and close observation, and sequential reintroduction if a drug must be withdrawn. Severe reactions still mean stopping immediately; the judgement is about severity, not about whether a reaction occurred.",
    choices: [
      { text: "Interruption risks failure and resistance, so mild reactions are often treated through with monitoring", isCorrect: true },
      { text: "Rashes on antituberculous therapy are never drug-related", isCorrect: false },
      { text: "All treatment should be stopped permanently at any reaction", isCorrect: false },
      { text: "The regimen should be doubled to compensate", isCorrect: false },
    ],
  },
  {
    stem: "Why is 'beta blockers are contraindicated in asthma' too absolute a statement?",
    topic: "Exceptions to the Rules",
    explanation:
      "Cardioselective agents are tolerated by many patients with mild to moderate asthma, and the mortality benefit after myocardial infarction or in heart failure can outweigh the respiratory risk. It calls for a considered trial with monitoring rather than blanket avoidance — while severe or brittle asthma remains a genuine contraindication.",
    choices: [
      { text: "Cardioselective agents are often tolerated, and the cardiac benefit can outweigh the risk", isCorrect: true },
      { text: "Beta blockers have no respiratory effect at all", isCorrect: false },
      { text: "All beta blockers are safe in all asthma", isCorrect: false },
      { text: "The contraindication is absolute in every case", isCorrect: false },
    ],
  },
  {
    stem: "When does 'start low and go slow' become the wrong approach?",
    topic: "Exceptions to the Rules",
    explanation:
      "When the condition is immediately dangerous and delay costs more than the adverse effects — sepsis, status epilepticus, severe pain, anaphylaxis. Cautious titration in a time-critical illness is not caution; it is under-treatment with a reassuring name.",
    choices: [
      { text: "When the condition is immediately dangerous and delay costs more than the risk", isCorrect: true },
      { text: "It is never wrong in any situation", isCorrect: false },
      { text: "Only in young patients", isCorrect: false },
      { text: "Only when the drug is inexpensive", isCorrect: false },
    ],
  },

  /* ── Receptor & Mechanism Subtleties ── */
  {
    stem: "What distinguishes an inverse agonist from a neutral antagonist?",
    topic: "Receptor & Mechanism Subtleties",
    explanation:
      "A neutral antagonist blocks the receptor without altering its baseline activity; an inverse agonist actively reduces constitutive activity below baseline. The distinction only matters where a receptor has meaningful activity in the absence of ligand — which several do, including some histamine and cannabinoid receptors.",
    choices: [
      { text: "An inverse agonist reduces constitutive activity below baseline; an antagonist merely blocks", isCorrect: true },
      { text: "They are two names for the same thing", isCorrect: false },
      { text: "An inverse agonist activates the receptor more strongly", isCorrect: false },
      { text: "A neutral antagonist lowers baseline activity", isCorrect: false },
    ],
  },
  {
    stem: "What is biased agonism, and why is it of interest in drug development?",
    topic: "Receptor & Mechanism Subtleties",
    explanation:
      "A ligand can preferentially activate one downstream pathway from a receptor while leaving another relatively untouched. The hope is separating benefit from harm at the same receptor — analgesia without respiratory depression at the opioid receptor being the most pursued example, with results so far more modest than predicted.",
    choices: [
      { text: "Preferential activation of one downstream pathway, raising the possibility of separating benefit from harm", isCorrect: true },
      { text: "A drug binding two entirely different receptors", isCorrect: false },
      { text: "Bias introduced by trial design", isCorrect: false },
      { text: "Preferential absorption by one organ", isCorrect: false },
    ],
  },
  {
    stem: "Why does buprenorphine complicate management of a patient who then needs strong analgesia?",
    topic: "Receptor & Mechanism Subtleties",
    explanation:
      "It is a high-affinity partial agonist, so it occupies the receptor tightly while producing a submaximal effect — and it blunts the response to a full agonist given alongside. Its ceiling on respiratory depression makes it safer in maintenance, but that same property makes acute pain harder to treat.",
    choices: [
      { text: "High-affinity partial agonism occupies the receptor and blunts the response to full agonists", isCorrect: true },
      { text: "It has no affinity for opioid receptors", isCorrect: false },
      { text: "It potentiates every other opioid given", isCorrect: false },
      { text: "It is a pure antagonist", isCorrect: false },
    ],
  },
  {
    stem: "Why can abruptly stopping a beta blocker cause rebound tachycardia and ischaemia?",
    topic: "Receptor & Mechanism Subtleties",
    explanation:
      "Chronic blockade upregulates beta receptors, so removing the antagonist leaves an unusually sensitive system exposed to circulating catecholamines. The same principle of receptor adaptation explains rebound phenomena across several classes, and it is why tapering is not merely conventional.",
    choices: [
      { text: "Chronic blockade upregulates receptors, leaving a hypersensitive system when the drug is removed", isCorrect: true },
      { text: "The drug accumulates and is released later", isCorrect: false },
      { text: "Receptors are permanently destroyed by blockade", isCorrect: false },
      { text: "Rebound is a myth with no mechanism", isCorrect: false },
    ],
  },
  {
    stem: "Benzodiazepines are positive allosteric modulators at the GABA-A receptor. What does that imply about their safety profile?",
    topic: "Receptor & Mechanism Subtleties",
    explanation:
      "They enhance the effect of GABA but cannot open the channel without it, so their action has a natural ceiling. Barbiturates can activate the channel directly, which is precisely why they are far more dangerous in overdose — the mechanism explains the difference in lethality.",
    choices: [
      { text: "They enhance GABA rather than acting alone, giving a ceiling that barbiturates lack", isCorrect: true },
      { text: "They open the channel directly, like barbiturates", isCorrect: false },
      { text: "They block GABA entirely", isCorrect: false },
      { text: "The mechanism has no bearing on overdose risk", isCorrect: false },
    ],
  },
  {
    stem: "Why does an irreversible enzyme inhibitor's duration of action not follow its plasma half-life?",
    topic: "Receptor & Mechanism Subtleties",
    explanation:
      "The effect lasts until new enzyme or new cells are synthesised, regardless of how quickly the drug is cleared. Aspirin is the everyday example — a short plasma half-life with an antiplatelet effect lasting the platelet's lifetime — and the same logic applies to proton pump inhibitors and MAO inhibitors.",
    choices: [
      { text: "The effect persists until new enzyme is synthesised, independent of drug clearance", isCorrect: true },
      { text: "Irreversible inhibitors have extremely long half-lives", isCorrect: false },
      { text: "Duration always matches plasma half-life", isCorrect: false },
      { text: "They are cleared more slowly by the kidney", isCorrect: false },
    ],
  },
  {
    stem: "Which mechanisms can underlie tolerance to a drug?",
    topic: "Receptor & Mechanism Subtleties",
    explanation:
      "Receptor desensitisation or downregulation, induction of the enzymes that metabolise the drug, and physiological adaptation in the systems it affects. They develop over different timescales and have different consequences, so identifying which is operating determines whether a dose increase, a drug holiday or a switch is the right response.",
    choices: [
      { text: "Receptor desensitisation, enzyme induction, and physiological adaptation", isCorrect: true },
      { text: "Only reduced absorption from the gut", isCorrect: false },
      { text: "Only psychological factors", isCorrect: false },
      { text: "Tolerance has a single universal mechanism", isCorrect: false },
    ],
  },

  /* ── Rare but Recognisable Reactions ── */
  {
    stem: "A patient develops rapidly rising temperature, masseter spasm and rigidity during general anaesthesia. What is the diagnosis and treatment?",
    topic: "Rare but Recognisable Reactions",
    explanation:
      "Malignant hyperthermia, an inherited disorder of skeletal muscle calcium handling triggered by volatile anaesthetics and suxamethonium. Dantrolene is the specific treatment alongside stopping the trigger and aggressive cooling, and the family must be told because the trait is inherited.",
    choices: [
      { text: "Malignant hyperthermia — stop the trigger, cool aggressively, give dantrolene", isCorrect: true },
      { text: "Neuroleptic malignant syndrome — give bromocriptine", isCorrect: false },
      { text: "Sepsis — give antibiotics", isCorrect: false },
      { text: "Thyroid storm — give beta blockade only", isCorrect: false },
    ],
  },
  {
    stem: "Which drugs classically cause drug-induced lupus, and how does it differ from idiopathic SLE?",
    topic: "Rare but Recognisable Reactions",
    explanation:
      "Hydralazine, procainamide and isoniazid among others. It typically spares the kidney and central nervous system, features anti-histone antibodies, and resolves after the drug is stopped — which is the key practical difference from idiopathic disease.",
    choices: [
      { text: "Hydralazine, procainamide, isoniazid — spares kidney and CNS, anti-histone positive, resolves on stopping", isCorrect: true },
      { text: "It is indistinguishable from idiopathic lupus in every respect", isCorrect: false },
      { text: "It causes severe renal disease characteristically", isCorrect: false },
      { text: "It persists permanently after the drug is stopped", isCorrect: false },
    ],
  },
  {
    stem: "A patient develops tongue and lip swelling after four years on an ACE inhibitor. What is important to understand about this?",
    topic: "Rare but Recognisable Reactions",
    explanation:
      "ACE inhibitor angioedema is bradykinin-mediated rather than histamine-mediated, so it can appear years after starting and responds poorly to antihistamines, steroids and adrenaline. The airway is the immediate concern, and the drug — and the whole class — must be stopped permanently.",
    choices: [
      { text: "It is bradykinin-mediated, can occur years in, and responds poorly to antihistamines and adrenaline", isCorrect: true },
      { text: "It is histamine-mediated and responds well to antihistamines", isCorrect: false },
      { text: "It only ever occurs in the first week", isCorrect: false },
      { text: "The drug may be safely continued at a lower dose", isCorrect: false },
    ],
  },
  {
    stem: "Which medications are recognised causes of acute pancreatitis?",
    topic: "Rare but Recognisable Reactions",
    explanation:
      "Azathioprine, sodium valproate, some antiretrovirals and certain diuretics among others. Drug causes are easily overlooked when gallstones and alcohol are the assumed explanations, so the medication history belongs in the assessment of any pancreatitis without an obvious cause.",
    choices: [
      { text: "Azathioprine, sodium valproate, some antiretrovirals and certain diuretics", isCorrect: true },
      { text: "Only alcohol and gallstones cause pancreatitis", isCorrect: false },
      { text: "Paracetamol and antihistamines", isCorrect: false },
      { text: "No drug causes pancreatitis", isCorrect: false },
    ],
  },
  {
    stem: "How does tardive dyskinesia differ from an acute dystonic reaction?",
    topic: "Rare but Recognisable Reactions",
    explanation:
      "Tardive dyskinesia appears after months or years of dopamine blockade, produces repetitive involuntary movements often of the face and tongue, and may be irreversible even after the drug stops. Acute dystonia occurs within hours to days and reverses quickly with an anticholinergic — which does not help tardive dyskinesia and may worsen it.",
    choices: [
      { text: "It appears after prolonged exposure, may be irreversible, and anticholinergics do not help", isCorrect: true },
      { text: "It occurs within hours and reverses with procyclidine", isCorrect: false },
      { text: "The two conditions are identical", isCorrect: false },
      { text: "It always resolves within days of stopping the drug", isCorrect: false },
    ],
  },
  {
    stem: "What is drug fever, and why is it frequently missed?",
    topic: "Rare but Recognisable Reactions",
    explanation:
      "Fever caused by a medication rather than by infection, often with a relatively well patient and sometimes eosinophilia. It is missed because a fever prompts a search for infection and an escalation of antibiotics — and the antibiotic may itself be the cause, so the treatment appears to fail while it is actually driving the sign.",
    choices: [
      { text: "Medication-caused fever, missed because fever prompts more antibiotics — which may be the cause", isCorrect: true },
      { text: "Fever that only occurs with intravenous drugs", isCorrect: false },
      { text: "A myth with no established basis", isCorrect: false },
      { text: "Fever that always accompanies a rash", isCorrect: false },
    ],
  },
  {
    stem: "Why is gadolinium contrast avoided in severe renal impairment?",
    topic: "Rare but Recognisable Reactions",
    explanation:
      "Impaired clearance is associated with nephrogenic systemic fibrosis — progressive fibrosis of skin and internal organs that is disabling and largely untreatable. Newer agents carry substantially lower risk, but renal function is still established before administration.",
    choices: [
      { text: "Risk of nephrogenic systemic fibrosis, which is disabling and largely untreatable", isCorrect: true },
      { text: "It causes immediate anaphylaxis in renal failure", isCorrect: false },
      { text: "It is simply ineffective in renal impairment", isCorrect: false },
      { text: "There is no concern with gadolinium", isCorrect: false },
    ],
  },

  /* ── Evidence & Statistics ── */
  {
    stem: "A drug is reported to reduce risk by 50%. Why is that figure insufficient on its own?",
    topic: "Evidence & Statistics",
    explanation:
      "A relative reduction says nothing about how much risk there was to begin with. Halving a 2% risk saves 1 person in 100; halving a 0.02% risk saves 1 in 10,000 — the same headline, entirely different value. Absolute risk reduction is what tells you whether treating is worthwhile.",
    choices: [
      { text: "It is relative — the absolute benefit depends entirely on the baseline risk", isCorrect: true },
      { text: "Relative reductions are always exaggerated by fraud", isCorrect: false },
      { text: "It fully describes the benefit to an individual", isCorrect: false },
      { text: "Percentages cannot be used in medicine", isCorrect: false },
    ],
  },
  {
    stem: "What does the number needed to treat depend on, and why does it vary between populations?",
    topic: "Evidence & Statistics",
    explanation:
      "It is the reciprocal of the absolute risk reduction, so it depends on baseline risk. The same drug has a much lower NNT in a high-risk population than a low-risk one — which is why a treatment can be clearly worthwhile in secondary prevention and marginal in primary prevention.",
    choices: [
      { text: "Baseline risk — the same drug has a lower NNT in higher-risk populations", isCorrect: true },
      { text: "Only the drug's potency", isCorrect: false },
      { text: "The size of the trial alone", isCorrect: false },
      { text: "It is fixed for a given drug", isCorrect: false },
    ],
  },
  {
    stem: "Why can a drug that improves a surrogate marker still fail to help patients?",
    topic: "Evidence & Statistics",
    explanation:
      "A surrogate is assumed to sit on the causal path to the outcome, and that assumption is sometimes wrong — the marker moves while mortality does not, or worsens. Antiarrhythmics that suppressed post-infarction ectopics while increasing death are the classic cautionary example.",
    choices: [
      { text: "The marker may not lie on the causal path to the outcome that matters", isCorrect: true },
      { text: "Surrogate markers are always fabricated", isCorrect: false },
      { text: "Improving a marker guarantees improved outcomes", isCorrect: false },
      { text: "Surrogates are never used in drug approval", isCorrect: false },
    ],
  },
  {
    stem: "What does a non-inferiority trial claim, and what does it not?",
    topic: "Evidence & Statistics",
    explanation:
      "That the new treatment is not worse than the comparator by more than a pre-specified margin — usually justified by an advantage in safety, cost or convenience. It does not claim superiority, and a poorly chosen margin can make a genuinely inferior drug appear acceptable.",
    choices: [
      { text: "That it is not worse by more than a set margin — not that it is better", isCorrect: true },
      { text: "That the new drug is superior", isCorrect: false },
      { text: "That the two drugs are exactly identical", isCorrect: false },
      { text: "That the comparator is ineffective", isCorrect: false },
    ],
  },
  {
    stem: "Why are some serious adverse effects only identified after a drug is licensed?",
    topic: "Evidence & Statistics",
    explanation:
      "Trials enrol a few thousand relatively selected patients for a limited period, so an effect occurring in one in ten thousand, or after years, will not appear. Post-marketing surveillance across millions of real patients is the only way such signals emerge — which is why reporting matters.",
    choices: [
      { text: "Trials are too small, too short and too selected to detect rare or delayed effects", isCorrect: true },
      { text: "Regulators deliberately conceal them", isCorrect: false },
      { text: "Such effects are invented after marketing", isCorrect: false },
      { text: "Trials detect all possible adverse effects", isCorrect: false },
    ],
  },
  {
    stem: "How can a composite endpoint make a treatment look better than it is?",
    topic: "Evidence & Statistics",
    explanation:
      "If the components differ in severity, a reduction driven mostly by the least important one — a hospitalisation or a repeat procedure — can be reported as a benefit on a composite that includes death. The individual components need examining before the headline result means anything.",
    choices: [
      { text: "A benefit driven by the least important component is reported alongside serious ones", isCorrect: true },
      { text: "Composites always understate benefit", isCorrect: false },
      { text: "Composite endpoints are never used", isCorrect: false },
      { text: "Every component contributes equally by definition", isCorrect: false },
    ],
  },
  {
    stem: "Why should number needed to harm be considered alongside number needed to treat?",
    topic: "Evidence & Statistics",
    explanation:
      "A treatment benefiting one in fifty while harming one in twenty is a poor bargain, and the benefit figure alone conceals that. Presenting both, in the same units, is also what makes a genuinely informed conversation with the patient possible.",
    choices: [
      { text: "Benefit alone conceals the balance; both are needed to judge worth and to inform the patient", isCorrect: true },
      { text: "Harm is irrelevant if benefit exists", isCorrect: false },
      { text: "NNH cannot be calculated", isCorrect: false },
      { text: "They always have the same value", isCorrect: false },
    ],
  },

  /* ── Formulation & Bioequivalence ── */
  {
    stem: "What does bioequivalence between a generic and the originator actually require?",
    topic: "Formulation & Bioequivalence",
    explanation:
      "That rate and extent of absorption fall within an accepted range of the reference product — usually assessed by peak concentration and area under the curve. It does not require identical excipients, appearance or release characteristics, which is why formulations can differ while remaining bioequivalent.",
    choices: [
      { text: "Rate and extent of absorption within an accepted range of the reference product", isCorrect: true },
      { text: "Chemically identical excipients and appearance", isCorrect: false },
      { text: "Proof of identical clinical outcomes in a trial", isCorrect: false },
      { text: "Only that the active ingredient is the same", isCorrect: false },
    ],
  },
  {
    stem: "Why can two modified-release products containing the same drug behave differently even when each is bioequivalent to a reference?",
    topic: "Formulation & Bioequivalence",
    explanation:
      "The release mechanism differs, so the concentration profile through the day differs even when total exposure matches. This is why modified-release preparations are often prescribed by brand while immediate-release equivalents of the same drug are freely interchangeable.",
    choices: [
      { text: "Different release mechanisms give different profiles even at matched total exposure", isCorrect: true },
      { text: "They contain different active ingredients", isCorrect: false },
      { text: "Bioequivalence guarantees identical behaviour in all cases", isCorrect: false },
      { text: "Modified-release products are all identical", isCorrect: false },
    ],
  },
  {
    stem: "What is an enteric coating for, and what defeats it?",
    topic: "Formulation & Bioequivalence",
    explanation:
      "It protects the drug from gastric acid or the stomach from the drug, dissolving only at intestinal pH. Crushing it, or taking it with something that raises gastric pH substantially, removes that protection — which is why 'do not crush' on an enteric-coated tablet is a pharmacological instruction rather than a preference.",
    choices: [
      { text: "It delays release until intestinal pH; crushing or high gastric pH defeats it", isCorrect: true },
      { text: "It improves the taste only", isCorrect: false },
      { text: "It slows release over 24 hours", isCorrect: false },
      { text: "It has no functional purpose", isCorrect: false },
    ],
  },
  {
    stem: "Which practical hazards are specific to transdermal patches?",
    topic: "Formulation & Bioequivalence",
    explanation:
      "Heat — a hot bath, fever or heat pad — increases absorption and can cause toxicity; old patches left on while a new one is applied cause cumulative dosing; and metal-containing patches must be removed before MRI or defibrillation. Patches are easy to forget precisely because they are not swallowed.",
    choices: [
      { text: "Heat increases absorption, old patches accumulate if not removed, and some must come off before MRI", isCorrect: true },
      { text: "They cannot deliver a therapeutic dose", isCorrect: false },
      { text: "They are unaffected by temperature", isCorrect: false },
      { text: "They carry no specific hazards", isCorrect: false },
    ],
  },
  {
    stem: "What is the principal drawback of a depot injection?",
    topic: "Formulation & Bioequivalence",
    explanation:
      "If an adverse effect occurs, the drug cannot be withdrawn — it continues releasing for weeks. That is the trade-off against its main advantage of guaranteed adherence, and it is why an oral trial usually precedes a first depot.",
    choices: [
      { text: "It cannot be withdrawn if an adverse effect occurs", isCorrect: true },
      { text: "It requires daily administration", isCorrect: false },
      { text: "It is absorbed unpredictably in everyone", isCorrect: false },
      { text: "It has no disadvantages", isCorrect: false },
    ],
  },
  {
    stem: "Why can excipients matter when taking an allergy history?",
    topic: "Formulation & Bioequivalence",
    explanation:
      "Reactions attributed to the active drug are sometimes caused by lactose, gelatin, sulfites or a colouring agent instead — meaning a different brand of the same drug may be entirely tolerated. Assuming the active ingredient is responsible can remove a whole class unnecessarily.",
    choices: [
      { text: "The reaction may be to an excipient, so another brand of the same drug may be tolerated", isCorrect: true },
      { text: "Excipients are always pharmacologically inert", isCorrect: false },
      { text: "Only the active ingredient can cause reactions", isCorrect: false },
      { text: "Excipients are identical across all manufacturers", isCorrect: false },
    ],
  },
  {
    stem: "Why does the choice of inhaler device affect how much drug reaches the lung?",
    topic: "Formulation & Bioequivalence",
    explanation:
      "Particle size and the inspiratory effort a device requires determine how much reaches the small airways rather than depositing in the mouth and throat. A dry powder device needs a forceful inhalation that a breathless or frail patient may not manage, so device choice must match the patient.",
    choices: [
      { text: "Particle size and required inspiratory effort determine lung deposition", isCorrect: true },
      { text: "All devices deliver identically regardless of technique", isCorrect: false },
      { text: "Only the drug dose printed on the box matters", isCorrect: false },
      { text: "Device choice is purely a cost decision", isCorrect: false },
    ],
  },

  /* ── Timing, Tolerance & Dosing Intervals ── */
  {
    stem: "Why is a nitrate-free interval built into long-term nitrate regimens?",
    topic: "Timing, Tolerance & Dosing Intervals",
    explanation:
      "Continuous exposure produces tolerance within about a day, so the drug stops working. A daily period without nitrate allows the response to be restored, which is why asymmetric dosing schedules exist rather than even spacing through the day.",
    choices: [
      { text: "Continuous exposure causes tolerance within a day; a drug-free period restores the response", isCorrect: true },
      { text: "To reduce the cost of treatment", isCorrect: false },
      { text: "To prevent physical dependence", isCorrect: false },
      { text: "It is a scheduling convenience only", isCorrect: false },
    ],
  },
  {
    stem: "What is the difference between time-dependent and concentration-dependent antibiotic killing, and how does it change dosing?",
    topic: "Timing, Tolerance & Dosing Intervals",
    explanation:
      "Time-dependent agents such as beta-lactams work best when the concentration stays above the MIC for as long as possible, favouring frequent dosing or extended infusion. Concentration-dependent agents such as aminoglycosides depend on peak height, favouring larger, less frequent doses.",
    choices: [
      { text: "Time-dependent favours frequent dosing or infusion; concentration-dependent favours large infrequent doses", isCorrect: true },
      { text: "Both are optimised by the same dosing pattern", isCorrect: false },
      { text: "Beta-lactams are concentration-dependent", isCorrect: false },
      { text: "The distinction has no practical consequence", isCorrect: false },
    ],
  },
  {
    stem: "What is the rationale for once-daily aminoglycoside dosing?",
    topic: "Timing, Tolerance & Dosing Intervals",
    explanation:
      "It exploits concentration-dependent killing and a post-antibiotic effect while allowing a low trough, which reduces the accumulation in renal tubular and cochlear cells that drives toxicity. Higher peaks with a proper washout is a better trade than steady moderate levels.",
    choices: [
      { text: "It exploits concentration-dependent killing while allowing a low trough to limit toxicity", isCorrect: true },
      { text: "It maintains a constant level throughout the day", isCorrect: false },
      { text: "It is purely for nursing convenience", isCorrect: false },
      { text: "It increases the trough deliberately", isCorrect: false },
    ],
  },
  {
    stem: "Why are corticosteroids for replacement or long-term use generally given in the morning?",
    topic: "Timing, Tolerance & Dosing Intervals",
    explanation:
      "It mirrors the natural cortisol peak, which reduces suppression of the hypothalamic-pituitary-adrenal axis and limits insomnia. Aligning a drug with the body's own rhythm can change both its tolerability and its consequences without changing the dose.",
    choices: [
      { text: "It matches the natural cortisol peak, reducing HPA suppression and insomnia", isCorrect: true },
      { text: "Absorption only occurs in the morning", isCorrect: false },
      { text: "It is arbitrary and has no rationale", isCorrect: false },
      { text: "Evening dosing increases the therapeutic effect", isCorrect: false },
    ],
  },
  {
    stem: "Why is amiodarone loaded before maintenance dosing?",
    topic: "Timing, Tolerance & Dosing Intervals",
    explanation:
      "Its half-life runs to weeks, so reaching steady state on maintenance dosing alone would take months. Loading fills the very large volume of distribution first — and the same property means that stopping it does not end its effects for a long time afterwards.",
    choices: [
      { text: "Its half-life is weeks, so steady state on maintenance alone would take months", isCorrect: true },
      { text: "It has a very short half-life", isCorrect: false },
      { text: "Loading reduces the total dose required", isCorrect: false },
      { text: "It is poorly absorbed without a loading dose", isCorrect: false },
    ],
  },
  {
    stem: "Why does missing one dose of a drug with a very long half-life matter less than missing one with a short half-life?",
    topic: "Timing, Tolerance & Dosing Intervals",
    explanation:
      "With a long half-life the concentration falls only slightly over a single dosing interval, so a missed dose barely moves it. With a short half-life the level can drop below the therapeutic range before the next dose — which is why adherence matters more for some drugs than others.",
    choices: [
      { text: "Concentration falls only slightly over one interval when the half-life is long", isCorrect: true },
      { text: "Long half-life drugs are less important clinically", isCorrect: false },
      { text: "Missed doses matter equally for all drugs", isCorrect: false },
      { text: "Short half-life drugs accumulate when a dose is missed", isCorrect: false },
    ],
  },
  {
    stem: "Which drugs are dosed to effect rather than to a fixed schedule, and what does that require?",
    topic: "Timing, Tolerance & Dosing Intervals",
    explanation:
      "Anticoagulants, insulin, opioids in palliative care, thyroid replacement and antihypertensives — where the target is a measurable response rather than a set dose. It requires a defined endpoint, a monitoring plan and someone responsible for acting on the result, or titration becomes drift.",
    choices: [
      { text: "Those with a measurable target — requiring a defined endpoint, monitoring, and someone acting on it", isCorrect: true },
      { text: "All drugs should be dosed to effect", isCorrect: false },
      { text: "Only intravenous drugs can be titrated", isCorrect: false },
      { text: "Titration removes the need for monitoring", isCorrect: false },
    ],
  },

  /* ── Antimicrobial Resistance Mechanisms ── */
  {
    stem: "What does an extended-spectrum beta-lactamase producing organism mean for treatment?",
    topic: "Antimicrobial Resistance Mechanisms",
    explanation:
      "The enzyme hydrolyses penicillins and most cephalosporins, so those agents fail regardless of what the disc test suggests in vitro. Carbapenems are usually the reliable option, which is why ESBL prevalence directly drives carbapenem use and, in turn, carbapenem resistance.",
    choices: [
      { text: "Penicillins and most cephalosporins are inactivated, so carbapenems are usually needed", isCorrect: true },
      { text: "Only penicillins are affected", isCorrect: false },
      { text: "The organism is resistant to all antibiotics", isCorrect: false },
      { text: "It has no treatment implications", isCorrect: false },
    ],
  },
  {
    stem: "Why is carbapenemase production particularly serious?",
    topic: "Antimicrobial Resistance Mechanisms",
    explanation:
      "It removes the agents held in reserve for resistant Gram-negative infection, leaving older, more toxic or less effective options such as colistin. The genes are often carried on plasmids alongside other resistance determinants, so these organisms tend to be resistant to several classes at once.",
    choices: [
      { text: "It defeats the reserve agents, leaving older and more toxic options, and the genes travel with others", isCorrect: true },
      { text: "It affects only Gram-positive organisms", isCorrect: false },
      { text: "It is easily overcome by higher doses", isCorrect: false },
      { text: "It confers resistance to a single agent only", isCorrect: false },
    ],
  },
  {
    stem: "How do efflux pumps and porin loss produce resistance?",
    topic: "Antimicrobial Resistance Mechanisms",
    explanation:
      "Efflux pumps expel the drug before it reaches an effective intracellular concentration; loss of outer membrane porins stops it entering. Neither destroys the antibiotic, and both frequently affect several unrelated classes at once, so a single change can produce broad resistance.",
    choices: [
      { text: "They keep the drug out or expel it, often affecting several unrelated classes at once", isCorrect: true },
      { text: "They destroy the antibiotic enzymatically", isCorrect: false },
      { text: "They alter the drug's target site", isCorrect: false },
      { text: "They affect only one antibiotic each", isCorrect: false },
    ],
  },
  {
    stem: "What are the four broad mechanisms by which bacteria resist antibiotics?",
    topic: "Antimicrobial Resistance Mechanisms",
    explanation:
      "Enzymatic inactivation of the drug, modification of its target, reduced uptake or increased efflux, and bypassing the affected pathway altogether. Knowing which is operating predicts whether an inhibitor combination, a higher dose or a different class will help.",
    choices: [
      { text: "Enzymatic inactivation, target modification, reduced uptake or efflux, and pathway bypass", isCorrect: true },
      { text: "Only enzymatic destruction of the antibiotic", isCorrect: false },
      { text: "Only spontaneous mutation", isCorrect: false },
      { text: "Resistance has a single universal mechanism", isCorrect: false },
    ],
  },
  {
    stem: "Why does horizontal gene transfer make resistance spread faster than mutation alone would?",
    topic: "Antimicrobial Resistance Mechanisms",
    explanation:
      "Resistance genes carried on plasmids and transposons move between organisms — including between species — so a determinant that arose once can spread across an entire population and beyond it. Resistance therefore does not have to evolve independently in each organism that ends up carrying it.",
    choices: [
      { text: "Genes on plasmids move between organisms and species, so resistance need not arise independently", isCorrect: true },
      { text: "Mutation is the only mechanism of spread", isCorrect: false },
      { text: "Genes can only pass to daughter cells", isCorrect: false },
      { text: "Transfer occurs only within a single species", isCorrect: false },
    ],
  },
  {
    stem: "Why do biofilm-associated infections respond poorly to antibiotics that work in vitro?",
    topic: "Antimicrobial Resistance Mechanisms",
    explanation:
      "The matrix impedes penetration, and organisms within it are metabolically slow, which protects them from agents requiring active growth. This is why prosthetic joint and line infections so often need the device removed rather than more antibiotic.",
    choices: [
      { text: "The matrix impedes penetration and slow-growing organisms resist agents needing active growth", isCorrect: true },
      { text: "Biofilm organisms are always genetically resistant", isCorrect: false },
      { text: "Antibiotics are destroyed by the biofilm matrix", isCorrect: false },
      { text: "Biofilms have no effect on treatment", isCorrect: false },
    ],
  },
  {
    stem: "Why does a large abscess respond poorly to antibiotics despite a sensitive organism?",
    topic: "Antimicrobial Resistance Mechanisms",
    explanation:
      "Poor penetration into pus, an acidic and anaerobic environment that impairs several agents, slow bacterial growth, and a very high organism density that overwhelms the achievable concentration. It is the pharmacological explanation for why source control is treatment rather than an adjunct.",
    choices: [
      { text: "Poor penetration, an acidic anaerobic environment, slow growth and a very high organism load", isCorrect: true },
      { text: "The organism becomes genetically resistant inside the abscess", isCorrect: false },
      { text: "Antibiotics are inactivated by pus enzymatically", isCorrect: false },
      { text: "Abscesses respond normally to antibiotics", isCorrect: false },
    ],
  },

  /* ── Regulation, Pharmacovigilance & Access ── */
  {
    stem: "What does each phase of clinical trial establish?",
    topic: "Regulation, Pharmacovigilance & Access",
    explanation:
      "Phase I examines safety and pharmacokinetics in small numbers, phase II explores efficacy and dose, phase III compares against standard treatment in large numbers, and phase IV is post-marketing surveillance in real-world use. Rare harms usually surface only in phase IV, because the earlier phases are too small to see them.",
    choices: [
      { text: "I safety and kinetics, II efficacy and dose, III comparison at scale, IV post-marketing surveillance", isCorrect: true },
      { text: "All phases test efficacy equally", isCorrect: false },
      { text: "Phase I establishes efficacy in patients", isCorrect: false },
      { text: "Phase IV occurs before licensing", isCorrect: false },
    ],
  },
  {
    stem: "What is the main limitation of spontaneous adverse-reaction reporting schemes?",
    topic: "Regulation, Pharmacovigilance & Access",
    explanation:
      "Substantial under-reporting, and no denominator — you cannot calculate a rate from reports alone. They remain valuable because they detect signals no trial could, particularly rare and delayed reactions, but a signal needs confirming by other means before it becomes a conclusion.",
    choices: [
      { text: "Under-reporting and no denominator, so rates cannot be calculated from reports alone", isCorrect: true },
      { text: "They generate too many accurate reports to process", isCorrect: false },
      { text: "They can establish causation definitively", isCorrect: false },
      { text: "They have no value whatsoever", isCorrect: false },
    ],
  },
  {
    stem: "What typically leads to a drug being withdrawn after licensing?",
    topic: "Regulation, Pharmacovigilance & Access",
    explanation:
      "A serious adverse effect emerging in wider use that shifts the benefit-risk balance — rare hepatotoxicity, cardiovascular harm or severe skin reactions. Withdrawal is a judgement about that balance rather than proof the drug never helped anyone, which is why alternatives matter to the decision.",
    choices: [
      { text: "A serious effect emerging in wider use that shifts the benefit-risk balance", isCorrect: true },
      { text: "Loss of patent protection", isCorrect: false },
      { text: "Proof the drug never worked at all", isCorrect: false },
      { text: "Drugs are never withdrawn once licensed", isCorrect: false },
    ],
  },
  {
    stem: "Why are substandard and falsified medicines a serious clinical problem, not just a regulatory one?",
    topic: "Regulation, Pharmacovigilance & Access",
    explanation:
      "A product with too little active ingredient produces apparent treatment failure and drives resistance, while one with none at all lets a treatable illness progress. It is a particular concern for antimicrobials and antimalarials, and it should be considered when a patient fails to respond to a regimen that should have worked.",
    choices: [
      { text: "Sub-potent products cause apparent failure and drive resistance; absent active ingredient lets illness progress", isCorrect: true },
      { text: "They are merely a commercial concern", isCorrect: false },
      { text: "They are always obvious on inspection", isCorrect: false },
      { text: "They have no effect on resistance", isCorrect: false },
    ],
  },
  {
    stem: "What is the purpose of an essential medicines list?",
    topic: "Regulation, Pharmacovigilance & Access",
    explanation:
      "To identify the medicines that meet the priority health needs of a population, selected on evidence of efficacy, safety and cost-effectiveness, so that procurement and supply can be concentrated where they matter most. It is a tool for making finite resources go furthest rather than a limit on what may be prescribed.",
    choices: [
      { text: "To identify the medicines meeting priority health needs so limited resources are used best", isCorrect: true },
      { text: "To prohibit all other medicines", isCorrect: false },
      { text: "To list only the newest available drugs", isCorrect: false },
      { text: "To rank drugs by manufacturer", isCorrect: false },
    ],
  },
  {
    stem: "What is the difference between off-label and unlicensed use?",
    topic: "Regulation, Pharmacovigilance & Access",
    explanation:
      "Off-label means a licensed product used outside its approved indication, age or route. Unlicensed means the product itself has no marketing authorisation in that country — an imported or specially prepared item. Both may be justified, but the responsibility and the documentation required differ.",
    choices: [
      { text: "Off-label is a licensed product used outside its terms; unlicensed has no authorisation at all", isCorrect: true },
      { text: "They mean the same thing", isCorrect: false },
      { text: "Off-label use is illegal everywhere", isCorrect: false },
      { text: "Unlicensed products are always counterfeit", isCorrect: false },
    ],
  },
  {
    stem: "Why is a biosimilar not simply a generic version of a biologic?",
    topic: "Regulation, Pharmacovigilance & Access",
    explanation:
      "Biologics are large, complex proteins produced in living cells and cannot be copied exactly, so a biosimilar is highly similar rather than identical. Approval therefore requires comparative analytical, pharmacokinetic and often clinical data, and immunogenicity is assessed rather than assumed.",
    choices: [
      { text: "Biologics cannot be copied exactly, so approval needs comparative data including immunogenicity", isCorrect: true },
      { text: "Biosimilars are chemically identical to the originator", isCorrect: false },
      { text: "They require no testing before approval", isCorrect: false },
      { text: "They are unrelated to the original product", isCorrect: false },
    ],
  },

  /* ── Frontier Therapeutics ── */
  {
    stem: "Why must monoclonal antibodies be given by injection or infusion rather than orally?",
    topic: "Frontier Therapeutics",
    explanation:
      "They are large proteins that would be digested in the gastrointestinal tract and are far too big to be absorbed intact. The same size explains their long half-lives and their limited penetration into the central nervous system.",
    choices: [
      { text: "They are large proteins that would be digested and cannot be absorbed intact", isCorrect: true },
      { text: "They are destroyed by light rather than by digestion", isCorrect: false },
      { text: "Oral forms exist and are preferred", isCorrect: false },
      { text: "They are too small to survive the stomach", isCorrect: false },
    ],
  },
  {
    stem: "What is immunogenicity in the context of biologic therapy, and why does it matter?",
    topic: "Frontier Therapeutics",
    explanation:
      "The patient forms anti-drug antibodies against the biologic, which can neutralise it or accelerate its clearance — producing loss of response after an initially good result, and sometimes infusion reactions. It is one reason a biologic that worked for a year may stop working without any change in the disease.",
    choices: [
      { text: "Anti-drug antibodies that neutralise or clear the biologic, causing secondary loss of response", isCorrect: true },
      { text: "The drug's ability to suppress immunity", isCorrect: false },
      { text: "An allergy to the injection site only", isCorrect: false },
      { text: "It has no effect on efficacy", isCorrect: false },
    ],
  },
  {
    stem: "How do immune checkpoint inhibitors work, and what characterises their adverse effects?",
    topic: "Frontier Therapeutics",
    explanation:
      "They release the brakes on T cells so the immune system can attack tumour cells — and the same release causes autoimmune-type toxicity in any organ: colitis, hepatitis, thyroiditis, pneumonitis, hypophysitis. These immune-related effects are treated with corticosteroids rather than by supportive care alone, which is the opposite of the instinct for chemotherapy toxicity.",
    choices: [
      { text: "They release T cell inhibition, causing autoimmune-type organ toxicity treated with steroids", isCorrect: true },
      { text: "They kill tumour cells directly, with typical chemotherapy side effects", isCorrect: false },
      { text: "They suppress the immune system, causing infection only", isCorrect: false },
      { text: "They have no significant adverse effects", isCorrect: false },
    ],
  },
  {
    stem: "What is cytokine release syndrome, and in which therapy is it characteristic?",
    topic: "Frontier Therapeutics",
    explanation:
      "A massive systemic inflammatory response with fever, hypotension and organ dysfunction, characteristic of CAR-T cell therapy and some T-cell engaging antibodies. It is managed with supportive care and IL-6 blockade, and its severity is what confines these treatments to specialist centres.",
    choices: [
      { text: "A massive inflammatory response seen with CAR-T therapy, managed with support and IL-6 blockade", isCorrect: true },
      { text: "An allergic reaction to the infusion diluent", isCorrect: false },
      { text: "A form of tumour lysis syndrome only", isCorrect: false },
      { text: "A late complication appearing years afterwards", isCorrect: false },
    ],
  },
  {
    stem: "What distinguishes gene therapy from conventional drug treatment?",
    topic: "Frontier Therapeutics",
    explanation:
      "It aims to correct or replace the underlying genetic defect, potentially with a single administration and a durable effect, rather than modulating a process repeatedly. That creates unfamiliar issues: how long the benefit lasts, immune responses to the vector, and how a very high one-off cost is judged against lifelong alternative treatment.",
    choices: [
      { text: "It corrects the underlying defect, raising questions of durability, vector immunity and one-off cost", isCorrect: true },
      { text: "It works identically to conventional drugs", isCorrect: false },
      { text: "It requires daily administration", isCorrect: false },
      { text: "It has no immunological considerations", isCorrect: false },
    ],
  },
  {
    stem: "What is the principle behind an antibody-drug conjugate?",
    topic: "Frontier Therapeutics",
    explanation:
      "An antibody targeting a tumour antigen carries a highly potent cytotoxic payload, delivering it preferentially to cells expressing that target. The aim is a wider therapeutic window, though off-target release and the toxicity of the payload itself still occur.",
    choices: [
      { text: "A targeting antibody delivers a potent cytotoxic payload preferentially to antigen-expressing cells", isCorrect: true },
      { text: "Two antibodies given together", isCorrect: false },
      { text: "An antibody that is itself cytotoxic", isCorrect: false },
      { text: "A vaccine against tumour antigens", isCorrect: false },
    ],
  },
  {
    stem: "Why does the arrival of very high-cost therapies raise questions beyond the individual patient?",
    topic: "Frontier Therapeutics",
    explanation:
      "Funding one treatment displaces others from a finite budget, so the decision affects patients who will never be identified. That is why explicit, transparent criteria for such decisions are preferable to case-by-case judgements, however uncomfortable making them explicit feels.",
    choices: [
      { text: "Funding one displaces others from a finite budget, so explicit criteria are preferable to ad hoc decisions", isCorrect: true },
      { text: "Cost is never a legitimate clinical consideration", isCorrect: false },
      { text: "Budgets expand to accommodate any new therapy", isCorrect: false },
      { text: "Such decisions affect only the individual patient", isCorrect: false },
    ],
  },
];

async function main() {
  console.log(`Seeding Pharmacology — Set 7 (Tier 7: Expert & Edge Cases)${REPLACE_MODE ? "  [REPLACE MODE]" : ""}…\n`);

  const categoryId = await findCategory("fs-pharmacology");
  if (!categoryId) return;

  await seedSet({
    categoryId,
    slug: "pharmacology-set-7-expert",
    title: "Pharmacology — Set 7: Expert & Edge Cases",
    description:
      "Seventy questions on the exceptions and the depth: pharmacogenomics, where the standard rules stop applying, receptor and mechanism subtleties, rare but recognisable reactions, reading the evidence behind a drug, formulation and bioequivalence, dosing intervals and tolerance, resistance mechanisms, regulation and access, and the newer therapeutic modalities. Assumes Sets 1–6. Untimed.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Advanced",
    questions: SET7,
  });

  await done();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
