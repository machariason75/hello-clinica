/**
 * PHARMACOLOGY — SET 2 of 7  ·  TIER 2: CORE DRUG CLASSES
 *
 * Fifty questions, none appearing anywhere else in the bank.
 *
 * Tier 1 established the principles — half-life, first-pass, therapeutic index,
 * agonism. Tier 2 works through the classes themselves: which agent, why that
 * one over its neighbour in the same class, and what each class is known for.
 * It assumes Tier 1 and deliberately does not re-test it.
 *
 * Non-destructive (uses _seedkit) — a re-run refreshes only what it owns and
 * keeps anything you added through Admin.
 *
 * ⚠ First-line choices and monitoring intervals vary by formulary. These test
 * class behaviour and mechanism, which travel. Review anything numerical
 * against Kenyan guidance before publishing.
 *
 * Run:  npx tsx prisma/seed-pharmacology-set-2.ts
 */

import { type Q, findCategory, seedSet, done, REPLACE_MODE } from "./_seedkit";

const SET2: Q[] = [
  /* ── Antihypertensives ── */
  {
    stem: "A patient on an ACE inhibitor develops a persistent dry cough. What is the usual next step?",
    topic: "Antihypertensives",
    explanation:
      "Switch to an angiotensin receptor blocker. ARBs act at the receptor rather than on the converting enzyme, so bradykinin is not accumulated and the cough does not occur, while the blood-pressure and renal-protective benefits are broadly retained. Adding a cough suppressant treats a side effect that has a clean solution.",
    choices: [
      { text: "Switch to an angiotensin receptor blocker", isCorrect: true },
      { text: "Add a cough suppressant and continue", isCorrect: false },
      { text: "Double the ACE inhibitor dose", isCorrect: false },
      { text: "Stop all antihypertensive treatment", isCorrect: false },
    ],
  },
  {
    stem: "How do dihydropyridine calcium channel blockers such as amlodipine differ from verapamil and diltiazem?",
    topic: "Antihypertensives",
    explanation:
      "Dihydropyridines act mainly on vascular smooth muscle, giving vasodilation with ankle oedema and reflex tachycardia. Verapamil and diltiazem act substantially on the heart, slowing conduction and reducing contractility — which is why combining them with a beta blocker risks profound bradycardia and heart block.",
    choices: [
      { text: "Dihydropyridines act on vessels; verapamil and diltiazem also act on the heart", isCorrect: true },
      { text: "Dihydropyridines slow atrioventricular conduction most", isCorrect: false },
      { text: "They are pharmacologically identical", isCorrect: false },
      { text: "Verapamil acts only on peripheral vessels", isCorrect: false },
    ],
  },
  {
    stem: "Which metabolic adverse effects are characteristic of thiazide diuretics?",
    topic: "Antihypertensives",
    explanation:
      "Hyponatraemia, hypokalaemia, hyperuricaemia with gout, hypercalcaemia and worsened glycaemic control. The sodium disturbance is the one most likely to cause an admission, particularly in older patients — which is why electrolytes are checked after starting or increasing the dose.",
    choices: [
      { text: "Hyponatraemia, hypokalaemia, hyperuricaemia and hypercalcaemia", isCorrect: true },
      { text: "Hyperkalaemia and hypocalcaemia", isCorrect: false },
      { text: "Hypernatraemia with hypouricaemia", isCorrect: false },
      { text: "No metabolic effects of any kind", isCorrect: false },
    ],
  },
  {
    stem: "Why is a non-selective beta blocker used with caution in asthma?",
    topic: "Antihypertensives",
    explanation:
      "Beta-2 blockade in the airway can precipitate bronchospasm. Cardioselective agents are considerably safer because they favour beta-1, but selectivity is relative and lost at higher doses — so caution and monitoring remain, rather than a blanket assumption of safety.",
    choices: [
      { text: "Beta-2 blockade in the airway can precipitate bronchospasm", isCorrect: true },
      { text: "Beta blockers directly damage lung tissue", isCorrect: false },
      { text: "They prevent absorption of inhaled drugs", isCorrect: false },
      { text: "They have no respiratory effect at all", isCorrect: false },
    ],
  },
  {
    stem: "Which class combination should be avoided because it markedly increases the risk of hyperkalaemia and renal injury?",
    topic: "Antihypertensives",
    explanation:
      "An ACE inhibitor together with an angiotensin receptor blocker. Dual blockade of the same axis adds little blood-pressure benefit while substantially increasing hyperkalaemia, hypotension and acute kidney injury — a combination that was once common and is now avoided.",
    choices: [
      { text: "ACE inhibitor plus angiotensin receptor blocker", isCorrect: true },
      { text: "ACE inhibitor plus a calcium channel blocker", isCorrect: false },
      { text: "Thiazide plus a calcium channel blocker", isCorrect: false },
      { text: "Beta blocker plus a statin", isCorrect: false },
    ],
  },

  /* ── Heart Failure & Antiarrhythmics ── */
  {
    stem: "Why are beta blockers started at low dose and increased slowly in heart failure?",
    topic: "Heart Failure & Antiarrhythmics",
    explanation:
      "Their immediate negative inotropic effect can worsen symptoms before the long-term benefit on remodelling and mortality appears. Starting low and titrating over weeks lets the heart adapt — and it is why a beta blocker is not started during an acute decompensation.",
    choices: [
      { text: "The initial negative inotropic effect can worsen symptoms before benefit appears", isCorrect: true },
      { text: "They are absorbed erratically at high starting doses", isCorrect: false },
      { text: "Rapid titration causes permanent kidney damage", isCorrect: false },
      { text: "Low doses are used only to reduce cost", isCorrect: false },
    ],
  },
  {
    stem: "What monitoring does spironolactone require in heart failure?",
    topic: "Heart Failure & Antiarrhythmics",
    explanation:
      "Potassium and renal function, because it is potassium-sparing and the patient is usually already on an ACE inhibitor or ARB. Together these can produce dangerous hyperkalaemia, particularly if renal function declines or an NSAID is added.",
    choices: [
      { text: "Potassium and renal function", isCorrect: true },
      { text: "Liver enzymes only", isCorrect: false },
      { text: "Full blood count weekly", isCorrect: false },
      { text: "No monitoring is required", isCorrect: false },
    ],
  },
  {
    stem: "Which organ toxicities are amiodarone specifically known for?",
    topic: "Heart Failure & Antiarrhythmics",
    explanation:
      "Thyroid disease in both directions, pulmonary fibrosis, hepatotoxicity, corneal deposits and skin photosensitivity with slate-grey discolouration. Its very long half-life means toxicity develops insidiously and persists for months after stopping, which is why baseline and interval thyroid, liver and lung assessment are standard.",
    choices: [
      { text: "Thyroid, lung, liver, cornea and skin", isCorrect: true },
      { text: "Kidney and bone marrow only", isCorrect: false },
      { text: "Pancreas exclusively", isCorrect: false },
      { text: "It has no significant organ toxicity", isCorrect: false },
    ],
  },
  {
    stem: "Why must the patient be warned before adenosine is given?",
    topic: "Heart Failure & Antiarrhythmics",
    explanation:
      "It causes a brief but intense sensation of chest tightness, flushing and impending doom as it transiently blocks the atrioventricular node. The effect lasts only seconds because of its extremely short half-life, but an unwarned patient finds it frightening and may refuse a repeat dose that is needed.",
    choices: [
      { text: "It causes brief but intense chest tightness, flushing and a sense of doom", isCorrect: true },
      { text: "It causes prolonged pain lasting several hours", isCorrect: false },
      { text: "It permanently alters the heart rhythm", isCorrect: false },
      { text: "It has no perceptible effect on the patient", isCorrect: false },
    ],
  },
  {
    stem: "Which features suggest digoxin toxicity?",
    topic: "Heart Failure & Antiarrhythmics",
    explanation:
      "Nausea and vomiting, confusion, disturbed colour vision with yellow-green haloes, and bradycardia or new arrhythmia. Hypokalaemia, renal impairment and older age all increase susceptibility, so toxicity can develop on a dose the patient tolerated for years.",
    choices: [
      { text: "Nausea, confusion, yellow-green visual disturbance and arrhythmia", isCorrect: true },
      { text: "Severe hypertension with headache", isCorrect: false },
      { text: "Persistent cough and wheeze", isCorrect: false },
      { text: "A widespread itchy rash only", isCorrect: false },
    ],
  },

  /* ── Anticoagulants & Antiplatelets ── */
  {
    stem: "How does low molecular weight heparin differ practically from unfractionated heparin?",
    topic: "Anticoagulants & Antiplatelets",
    explanation:
      "It has a predictable response allowing weight-based subcutaneous dosing without routine monitoring, and a lower risk of heparin-induced thrombocytopenia. Unfractionated heparin's short half-life and reversibility make it preferable where bleeding risk is high or renal function is poor.",
    choices: [
      { text: "Predictable dosing without routine monitoring, and less heparin-induced thrombocytopenia", isCorrect: true },
      { text: "It requires more frequent laboratory monitoring", isCorrect: false },
      { text: "It is safer in severe renal impairment", isCorrect: false },
      { text: "It cannot be given subcutaneously", isCorrect: false },
    ],
  },
  {
    stem: "How does aspirin's antiplatelet effect last for the platelet's whole lifespan?",
    topic: "Anticoagulants & Antiplatelets",
    explanation:
      "It irreversibly acetylates cyclo-oxygenase, and platelets have no nucleus so cannot synthesise replacement enzyme. Function returns only as new platelets are produced — which is why aspirin is stopped around a week before surgery where bleeding risk matters.",
    choices: [
      { text: "It irreversibly inhibits COX in a cell that cannot make new enzyme", isCorrect: true },
      { text: "It binds to platelets and is slowly released", isCorrect: false },
      { text: "It has a very long plasma half-life", isCorrect: false },
      { text: "It destroys platelets permanently", isCorrect: false },
    ],
  },
  {
    stem: "What practical advantage do direct oral anticoagulants have over warfarin?",
    topic: "Anticoagulants & Antiplatelets",
    explanation:
      "Fixed dosing with no routine INR monitoring and far fewer food and drug interactions. The trade-offs are cost, dependence on renal function for clearance, and the need for a specific reversal agent — so warfarin remains preferred in mechanical valves and severe renal impairment.",
    choices: [
      { text: "Fixed dosing without routine monitoring and fewer interactions", isCorrect: true },
      { text: "They are safe at any level of renal function", isCorrect: false },
      { text: "They are preferred in mechanical heart valves", isCorrect: false },
      { text: "They are always cheaper than warfarin", isCorrect: false },
    ],
  },
  {
    stem: "What reverses the effect of unfractionated heparin in significant bleeding?",
    topic: "Anticoagulants & Antiplatelets",
    explanation:
      "Protamine sulfate, which binds heparin directly. It only partially reverses low molecular weight heparin, and it is ineffective against fondaparinux — so knowing which heparin the patient received changes what can be done about the bleeding.",
    choices: [
      { text: "Protamine sulfate", isCorrect: true },
      { text: "Vitamin K", isCorrect: false },
      { text: "Tranexamic acid alone", isCorrect: false },
      { text: "Naloxone", isCorrect: false },
    ],
  },
  {
    stem: "Why is dual antiplatelet therapy given for a defined period after coronary stenting rather than indefinitely?",
    topic: "Anticoagulants & Antiplatelets",
    explanation:
      "The stent needs time to endothelialise, after which stent thrombosis risk falls sharply while bleeding risk continues to accumulate. Duration therefore balances two risks that move in opposite directions over time — and stopping early is as dangerous as continuing too long.",
    choices: [
      { text: "Thrombosis risk falls once the stent endothelialises while bleeding risk keeps accumulating", isCorrect: true },
      { text: "The drugs stop working after a few months", isCorrect: false },
      { text: "Indefinite treatment carries no bleeding risk", isCorrect: false },
      { text: "It is purely a cost decision", isCorrect: false },
    ],
  },

  /* ── Antibiotic Classes ── */
  {
    stem: "What generally changes as you move from first to third generation cephalosporins?",
    topic: "Antibiotic Classes",
    explanation:
      "Gram-negative cover broadens while Gram-positive activity, particularly against staphylococci, tends to narrow. Third generation agents also penetrate cerebrospinal fluid better, which is why they feature in meningitis regimens — but the broader spectrum carries a higher risk of Clostridioides difficile.",
    choices: [
      { text: "Gram-negative cover broadens while Gram-positive activity narrows", isCorrect: true },
      { text: "Gram-positive cover broadens while Gram-negative narrows", isCorrect: false },
      { text: "The spectrum narrows in both directions", isCorrect: false },
      { text: "Nothing changes except the price", isCorrect: false },
    ],
  },
  {
    stem: "Which adverse effect is characteristic of fluoroquinolones?",
    topic: "Antibiotic Classes",
    explanation:
      "Tendinopathy and tendon rupture, especially of the Achilles, with risk raised by older age and concurrent corticosteroids. They also lower the seizure threshold, prolong the QT interval and can cause aortic complications — which is why they are reserved rather than used first-line for common infections.",
    choices: [
      { text: "Tendinopathy and tendon rupture", isCorrect: true },
      { text: "Irreversible hearing loss as the main risk", isCorrect: false },
      { text: "Pulmonary fibrosis", isCorrect: false },
      { text: "Permanent dental staining in adults", isCorrect: false },
    ],
  },
  {
    stem: "Why must alcohol be avoided with metronidazole?",
    topic: "Antibiotic Classes",
    explanation:
      "It produces a disulfiram-like reaction with flushing, severe nausea, vomiting, headache and tachycardia. The warning is worth giving explicitly and extending for a short period after the course, because patients otherwise assume it is a general caution rather than a specific chemical reaction.",
    choices: [
      { text: "It causes a disulfiram-like reaction with flushing and severe vomiting", isCorrect: true },
      { text: "Alcohol inactivates the antibiotic entirely", isCorrect: false },
      { text: "The combination causes permanent liver failure in most people", isCorrect: false },
      { text: "There is no genuine interaction", isCorrect: false },
    ],
  },
  {
    stem: "Why is vancomycin infused slowly rather than as a rapid injection?",
    topic: "Antibiotic Classes",
    explanation:
      "Rapid infusion causes direct histamine release producing flushing of the face and upper body with hypotension — an infusion-rate reaction, not an allergy. Recognising the difference matters, because labelling it an allergy needlessly removes a key agent for resistant Gram-positive infection.",
    choices: [
      { text: "Rapid infusion causes histamine-mediated flushing and hypotension, which is not an allergy", isCorrect: true },
      { text: "It crystallises in the vein if given quickly", isCorrect: false },
      { text: "Fast infusion makes it completely ineffective", isCorrect: false },
      { text: "It is a legal requirement without clinical basis", isCorrect: false },
    ],
  },
  {
    stem: "Which patient group should generally avoid tetracyclines, and why?",
    topic: "Antibiotic Classes",
    explanation:
      "Young children and pregnant women, because tetracyclines bind calcium in developing teeth and bone, causing permanent discolouration and affecting growth. They also chelate with dairy, antacids and iron, which reduces absorption substantially if taken together.",
    choices: [
      { text: "Young children and pregnant women, because of binding to developing teeth and bone", isCorrect: true },
      { text: "Older adults, because of tendon rupture", isCorrect: false },
      { text: "Patients with asthma, because of bronchospasm", isCorrect: false },
      { text: "There are no restricted groups", isCorrect: false },
    ],
  },

  /* ── Antivirals, Antifungals & Antiparasitics ── */
  {
    stem: "Why does aciclovir act selectively on infected cells?",
    topic: "Antivirals, Antifungals & Antiparasitics",
    explanation:
      "It requires viral thymidine kinase for its first phosphorylation step, so it is only activated inside cells the virus has infected. That dependence is the entire basis of its safety, and it explains why the drug is inactive against viruses lacking that enzyme.",
    choices: [
      { text: "It needs viral thymidine kinase to be activated, so only infected cells convert it", isCorrect: true },
      { text: "It is physically taken up only by infected cells", isCorrect: false },
      { text: "It destroys all rapidly dividing cells equally", isCorrect: false },
      { text: "Selectivity comes from the dose used", isCorrect: false },
    ],
  },
  {
    stem: "Why must oseltamivir be started early in influenza to be worthwhile?",
    topic: "Antivirals, Antifungals & Antiparasitics",
    explanation:
      "It inhibits neuraminidase and so limits release of new virions, which only helps while viral replication is still driving the illness. Started late, replication has largely finished and symptoms are being sustained by the inflammatory response instead.",
    choices: [
      { text: "It limits release of new virions, which only helps while replication is ongoing", isCorrect: true },
      { text: "It becomes toxic if started after 48 hours", isCorrect: false },
      { text: "The virus develops resistance within a day in everyone", isCorrect: false },
      { text: "Late treatment is equally effective", isCorrect: false },
    ],
  },
  {
    stem: "What is the principal interaction concern with azole antifungals?",
    topic: "Antivirals, Antifungals & Antiparasitics",
    explanation:
      "They inhibit cytochrome P450 enzymes, raising levels of many co-prescribed drugs including statins, warfarin and some immunosuppressants. A short antifungal course can therefore precipitate bleeding or rhabdomyolysis from drugs the patient had tolerated for years.",
    choices: [
      { text: "They inhibit cytochrome P450, raising levels of many co-prescribed drugs", isCorrect: true },
      { text: "They induce metabolism, making other drugs fail", isCorrect: false },
      { text: "They prevent absorption of all oral drugs", isCorrect: false },
      { text: "They have no clinically relevant interactions", isCorrect: false },
    ],
  },
  {
    stem: "What limits the use of amphotericin B despite its broad antifungal activity?",
    topic: "Antivirals, Antifungals & Antiparasitics",
    explanation:
      "Nephrotoxicity with electrolyte wasting, plus infusion-related fevers and rigors — severe enough to have earned it the nickname amphoterrible. Lipid formulations reduce renal toxicity considerably but cost far more, which is the practical trade-off in most settings.",
    choices: [
      { text: "Nephrotoxicity with electrolyte wasting and infusion reactions", isCorrect: true },
      { text: "It is only available as a tablet", isCorrect: false },
      { text: "It has an extremely narrow spectrum", isCorrect: false },
      { text: "It is inactivated by food", isCorrect: false },
    ],
  },
  {
    stem: "How do benzimidazoles such as albendazole act against helminths?",
    topic: "Antivirals, Antifungals & Antiparasitics",
    explanation:
      "They bind parasite tubulin and disrupt microtubule formation, impairing glucose uptake so the worm is starved of energy. Selectivity comes from much higher affinity for parasite than human tubulin, which is why single-dose treatment is generally well tolerated.",
    choices: [
      { text: "They disrupt parasite microtubules, impairing glucose uptake", isCorrect: true },
      { text: "They paralyse the worm by blocking acetylcholine receptors", isCorrect: false },
      { text: "They dissolve the cuticle chemically", isCorrect: false },
      { text: "They act only on the eggs, not the adult worm", isCorrect: false },
    ],
  },

  /* ── Respiratory Drugs ── */
  {
    stem: "What is the role of an inhaled corticosteroid in asthma, as distinct from a short-acting beta agonist?",
    topic: "Respiratory Drugs",
    explanation:
      "The steroid treats the underlying airway inflammation and prevents exacerbations; the beta agonist only relieves bronchospasm once it has occurred. Heavy reliever use with little preventer use is the pattern most associated with asthma deaths, which is why it is asked about specifically.",
    choices: [
      { text: "The steroid treats underlying inflammation and prevents attacks; the reliever only treats symptoms", isCorrect: true },
      { text: "The steroid provides faster symptom relief", isCorrect: false },
      { text: "They have identical mechanisms", isCorrect: false },
      { text: "The steroid is used only during acute attacks", isCorrect: false },
    ],
  },
  {
    stem: "Why should a patient rinse their mouth after using an inhaled corticosteroid?",
    topic: "Respiratory Drugs",
    explanation:
      "To reduce oral candidiasis and hoarseness from steroid deposited in the mouth and pharynx. It is a small instruction that markedly improves tolerability, and its omission is a common reason patients quietly stop using their preventer.",
    choices: [
      { text: "To reduce oral candidiasis and hoarseness", isCorrect: true },
      { text: "To improve absorption into the lungs", isCorrect: false },
      { text: "To prevent tooth decay from the propellant", isCorrect: false },
      { text: "It makes no difference and is optional", isCorrect: false },
    ],
  },
  {
    stem: "Why is theophylline rarely used first-line now?",
    topic: "Respiratory Drugs",
    explanation:
      "It has a narrow therapeutic index with arrhythmia and seizures in toxicity, and its metabolism is affected by many drugs, smoking status and infection. Safer and more effective inhaled options exist, so the monitoring burden is no longer justified for most patients.",
    choices: [
      { text: "Narrow therapeutic index with many interactions, and safer alternatives exist", isCorrect: true },
      { text: "It has no bronchodilator effect", isCorrect: false },
      { text: "It cannot be given orally", isCorrect: false },
      { text: "It is more expensive than any inhaler", isCorrect: false },
    ],
  },
  {
    stem: "Why is uncontrolled high-flow oxygen a hazard in some patients with chronic COPD?",
    topic: "Respiratory Drugs",
    explanation:
      "In those who chronically retain carbon dioxide, high inspired oxygen can worsen hypercapnia — largely by increasing ventilation-perfusion mismatch and reducing hypoxic drive. Oxygen is titrated to a target saturation range, and this is one of the few places where more is genuinely not better.",
    choices: [
      { text: "It can worsen carbon dioxide retention, so oxygen is titrated to a target range", isCorrect: true },
      { text: "Oxygen is toxic to bronchial epithelium immediately", isCorrect: false },
      { text: "It causes bronchoconstriction directly", isCorrect: false },
      { text: "There is no risk in any circumstance", isCorrect: false },
    ],
  },
  {
    stem: "What is the mechanism of montelukast?",
    topic: "Respiratory Drugs",
    explanation:
      "Leukotriene receptor antagonism, reducing bronchoconstriction and inflammation — useful as an add-on, particularly in exercise-induced symptoms and where allergic rhinitis coexists. Neuropsychiatric effects including mood change and sleep disturbance are recognised and worth asking about at review.",
    choices: [
      { text: "Leukotriene receptor antagonism", isCorrect: true },
      { text: "Beta-2 receptor agonism", isCorrect: false },
      { text: "Muscarinic receptor antagonism", isCorrect: false },
      { text: "Direct corticosteroid action", isCorrect: false },
    ],
  },

  /* ── Gastrointestinal Drugs ── */
  {
    stem: "How do proton pump inhibitors differ from H2 receptor antagonists?",
    topic: "Gastrointestinal Drugs",
    explanation:
      "PPIs irreversibly inhibit the gastric proton pump, the final common step of acid secretion, giving greater and more sustained suppression. H2 blockers act on one of several stimulatory pathways, so acid secretion continues through the others — which is why PPIs are preferred for healing ulcers and severe reflux.",
    choices: [
      { text: "PPIs block the final common step irreversibly, giving stronger and longer suppression", isCorrect: true },
      { text: "H2 antagonists suppress acid more completely", isCorrect: false },
      { text: "They act on the same receptor", isCorrect: false },
      { text: "PPIs work only when taken after food", isCorrect: false },
    ],
  },
  {
    stem: "Which risks are associated with long-term proton pump inhibitor use?",
    topic: "Gastrointestinal Drugs",
    explanation:
      "Reduced absorption of vitamin B12, magnesium, calcium and iron, an increased risk of Clostridioides difficile and other enteric infection, and an association with fracture. None of these forbids long-term use where it is indicated — they argue for periodic review of whether it still is.",
    choices: [
      { text: "Impaired B12, magnesium, calcium and iron absorption, and increased enteric infection", isCorrect: true },
      { text: "Permanent loss of all gastric function", isCorrect: false },
      { text: "Guaranteed development of gastric cancer", isCorrect: false },
      { text: "No recognised long-term risks", isCorrect: false },
    ],
  },
  {
    stem: "Which antiemetic acts principally at 5-HT3 receptors, and what must be considered before giving it?",
    topic: "Gastrointestinal Drugs",
    explanation:
      "Ondansetron, which is highly effective for chemotherapy and postoperative nausea but prolongs the QT interval and commonly causes constipation. QT should be considered where other QT-prolonging drugs or electrolyte disturbance are present.",
    choices: [
      { text: "Ondansetron — consider QT prolongation and constipation", isCorrect: true },
      { text: "Metoclopramide — consider hyperkalaemia", isCorrect: false },
      { text: "Cyclizine — consider tendon rupture", isCorrect: false },
      { text: "Domperidone — consider hearing loss", isCorrect: false },
    ],
  },
  {
    stem: "Why is metoclopramide used with caution, particularly in younger patients?",
    topic: "Gastrointestinal Drugs",
    explanation:
      "It is a dopamine antagonist and can cause extrapyramidal effects including acute dystonic reactions, which are more common in the young. These are frightening and often misread as a seizure or a psychiatric event, though they respond quickly to an anticholinergic.",
    choices: [
      { text: "Dopamine antagonism can cause acute dystonic reactions, especially in young patients", isCorrect: true },
      { text: "It causes irreversible hearing loss", isCorrect: false },
      { text: "It is a potent respiratory depressant", isCorrect: false },
      { text: "It prevents absorption of all other oral drugs", isCorrect: false },
    ],
  },
  {
    stem: "How do osmotic laxatives differ from stimulant laxatives?",
    topic: "Gastrointestinal Drugs",
    explanation:
      "Osmotic agents draw water into the bowel to soften stool and are suitable for regular use; stimulants increase peristalsis directly, act faster and cause cramping. Choosing between them depends on whether the problem is hard stool or slow transit — a distinction that changes which one works.",
    choices: [
      { text: "Osmotic agents draw water in; stimulants increase peristalsis directly", isCorrect: true },
      { text: "Osmotic agents work by increasing peristalsis", isCorrect: false },
      { text: "Stimulants soften the stool without affecting motility", isCorrect: false },
      { text: "They are interchangeable in every situation", isCorrect: false },
    ],
  },

  /* ── Psychotropic Drugs ── */
  {
    stem: "Why is a therapeutic response to an SSRI not expected within the first few days?",
    topic: "Psychotropic Drugs",
    explanation:
      "Synaptic serotonin rises immediately but the antidepressant effect depends on slower receptor adaptation, typically taking two to four weeks. Meanwhile side effects appear at once — so patients need warning, or they conclude it is not working and stop.",
    choices: [
      { text: "Benefit depends on slower receptor adaptation while side effects appear immediately", isCorrect: true },
      { text: "Absorption takes several weeks", isCorrect: false },
      { text: "The dose is deliberately subtherapeutic at first", isCorrect: false },
      { text: "Benefit is in fact immediate", isCorrect: false },
    ],
  },
  {
    stem: "What makes tricyclic antidepressants dangerous in overdose?",
    topic: "Psychotropic Drugs",
    explanation:
      "Sodium channel blockade causing broad-complex arrhythmia and seizures, along with profound antimuscarinic effects and hypotension. The narrow margin between therapeutic and lethal dose is why they are prescribed cautiously to anyone at risk of self-harm.",
    choices: [
      { text: "Sodium channel blockade causing arrhythmia and seizures", isCorrect: true },
      { text: "Irreversible liver necrosis as the primary mechanism", isCorrect: false },
      { text: "Renal failure from crystal deposition", isCorrect: false },
      { text: "They are entirely safe in overdose", isCorrect: false },
    ],
  },
  {
    stem: "What is serotonin syndrome, and what precipitates it?",
    topic: "Psychotropic Drugs",
    explanation:
      "Excess serotonergic activity producing agitation, autonomic instability, hyperthermia, clonus and hyperreflexia. It follows combinations such as an SSRI with tramadol, linezolid, triptans or an MAO inhibitor — which is why an apparently minor addition to an antidepressant needs checking.",
    choices: [
      { text: "Excess serotonergic activity with agitation, clonus, hyperreflexia and autonomic instability", isCorrect: true },
      { text: "Complete serotonin depletion causing sedation", isCorrect: false },
      { text: "An allergic reaction to antidepressants", isCorrect: false },
      { text: "A withdrawal syndrome only", isCorrect: false },
    ],
  },
  {
    stem: "What monitoring does lithium require, and why?",
    topic: "Psychotropic Drugs",
    explanation:
      "Lithium levels, renal function and thyroid function, because the therapeutic index is narrow and it is renally cleared. Dehydration, NSAIDs, ACE inhibitors and thiazides all raise levels — so an intercurrent illness or a new prescription can tip a stable patient into toxicity.",
    choices: [
      { text: "Levels plus renal and thyroid function, because of a narrow index and renal clearance", isCorrect: true },
      { text: "Liver function alone", isCorrect: false },
      { text: "No monitoring once the dose is stable", isCorrect: false },
      { text: "Full blood count weekly indefinitely", isCorrect: false },
    ],
  },
  {
    stem: "Which adverse effects distinguish typical from atypical antipsychotics?",
    topic: "Psychotropic Drugs",
    explanation:
      "Typicals cause more extrapyramidal effects — parkinsonism, dystonia, akathisia and tardive dyskinesia — through stronger dopamine blockade. Atypicals cause more metabolic effects, with weight gain, dyslipidaemia and diabetes, so both need monitoring but for different things.",
    choices: [
      { text: "Typicals cause more extrapyramidal effects; atypicals more metabolic ones", isCorrect: true },
      { text: "Atypicals cause more extrapyramidal effects", isCorrect: false },
      { text: "Neither group has significant adverse effects", isCorrect: false },
      { text: "The adverse effect profiles are identical", isCorrect: false },
    ],
  },

  /* ── Antiepileptics ── */
  {
    stem: "Why is sodium valproate avoided in women of childbearing potential wherever possible?",
    topic: "Antiepileptics",
    explanation:
      "It is highly teratogenic, causing neural tube defects and a recognised pattern of developmental disorder in exposed children. This is why its use in this group is governed by strict pregnancy-prevention requirements and requires documented counselling rather than a routine prescription.",
    choices: [
      { text: "It is highly teratogenic, causing neural tube and neurodevelopmental harm", isCorrect: true },
      { text: "It reduces the effectiveness of all contraception", isCorrect: false },
      { text: "It causes infertility permanently", isCorrect: false },
      { text: "It is simply less effective in women", isCorrect: false },
    ],
  },
  {
    stem: "Why is lamotrigine titrated upward slowly?",
    topic: "Antiepileptics",
    explanation:
      "Rapid escalation markedly increases the risk of serious rash, including Stevens-Johnson syndrome. Slow titration greatly reduces it, which is why a patient restarting after a break must begin the titration again rather than resuming their previous dose.",
    choices: [
      { text: "Rapid escalation raises the risk of serious rash including Stevens-Johnson syndrome", isCorrect: true },
      { text: "Fast titration causes immediate renal failure", isCorrect: false },
      { text: "The drug is poorly absorbed at higher doses", isCorrect: false },
      { text: "Titration speed has no bearing on safety", isCorrect: false },
    ],
  },
  {
    stem: "Which drug class is first-line for terminating a prolonged seizure?",
    topic: "Antiepileptics",
    explanation:
      "Benzodiazepines, given by whichever route is available — intravenous, buccal, intranasal or rectal. Longer-acting agents follow if seizures continue, but the immediate priority is stopping the seizure alongside airway, breathing, circulation and checking glucose.",
    choices: [
      { text: "Benzodiazepines", isCorrect: true },
      { text: "Sodium valproate as the immediate first agent", isCorrect: false },
      { text: "Carbamazepine", isCorrect: false },
      { text: "Lamotrigine", isCorrect: false },
    ],
  },
  {
    stem: "Why is levetiracetam often chosen where interactions are a concern?",
    topic: "Antiepileptics",
    explanation:
      "It is largely renally excreted with minimal hepatic metabolism, so it has few significant drug interactions. That makes it useful in patients on complex regimens — though behavioural and mood changes, particularly irritability, are a recognised limitation worth asking about.",
    choices: [
      { text: "It is renally cleared with minimal hepatic metabolism, so few interactions", isCorrect: true },
      { text: "It strongly induces liver enzymes", isCorrect: false },
      { text: "It has no adverse effects at all", isCorrect: false },
      { text: "It is not absorbed orally", isCorrect: false },
    ],
  },
  {
    stem: "Why should antiepileptic brands generally not be switched freely for some drugs?",
    topic: "Antiepileptics",
    explanation:
      "Small differences in bioavailability between formulations can matter where the therapeutic window is narrow, risking either breakthrough seizures or toxicity. For certain agents, consistency of supply is treated as part of the treatment rather than a pharmacy preference.",
    choices: [
      { text: "Small bioavailability differences can cause breakthrough seizures or toxicity", isCorrect: true },
      { text: "Different brands contain different active drugs", isCorrect: false },
      { text: "Generic versions are always ineffective", isCorrect: false },
      { text: "It is purely a commercial arrangement", isCorrect: false },
    ],
  },

  /* ── Immunosuppressants & Biologics ── */
  {
    stem: "Why is methotrexate for inflammatory disease prescribed weekly rather than daily?",
    topic: "Immunosuppressants & Biologics",
    explanation:
      "Daily administration causes severe bone marrow suppression and mucositis. Accidental daily prescribing is a recognised fatal error, which is why the weekly frequency is written explicitly with the day named, and folic acid is co-prescribed on a different day.",
    choices: [
      { text: "Daily dosing causes severe marrow suppression and has proved fatal", isCorrect: true },
      { text: "Weekly dosing is simply more convenient", isCorrect: false },
      { text: "The drug is inactive if given daily", isCorrect: false },
      { text: "Frequency makes no difference to safety", isCorrect: false },
    ],
  },
  {
    stem: "Why is TPMT activity checked before starting azathioprine?",
    topic: "Immunosuppressants & Biologics",
    explanation:
      "Low thiopurine methyltransferase activity means the drug is not metabolised normally and accumulates, causing profound myelosuppression at standard doses. Testing beforehand identifies those needing a reduced dose or a different agent, preventing a predictable and dangerous reaction.",
    choices: [
      { text: "Low TPMT activity causes drug accumulation and profound myelosuppression", isCorrect: true },
      { text: "High TPMT activity causes liver failure", isCorrect: false },
      { text: "It predicts the therapeutic response only", isCorrect: false },
      { text: "It is a research test with no clinical use", isCorrect: false },
    ],
  },
  {
    stem: "What must be excluded before starting a TNF inhibitor?",
    topic: "Immunosuppressants & Biologics",
    explanation:
      "Latent tuberculosis, along with hepatitis B, because TNF is central to keeping granulomas intact and blocking it can allow reactivation with disseminated disease. Screening and treating latent infection first is standard, and skipping it has caused serious harm.",
    choices: [
      { text: "Latent tuberculosis and hepatitis B, because of reactivation risk", isCorrect: true },
      { text: "Iron deficiency anaemia", isCorrect: false },
      { text: "Recent influenza vaccination", isCorrect: false },
      { text: "Nothing needs excluding beforehand", isCorrect: false },
    ],
  },
  {
    stem: "Why does ciclosporin require careful level monitoring?",
    topic: "Immunosuppressants & Biologics",
    explanation:
      "Its therapeutic index is narrow — too little risks graft rejection, too much causes nephrotoxicity, hypertension and neurotoxicity. It is also metabolised by CYP3A4, so azoles, macrolides and grapefruit push levels up while enzyme inducers drop them.",
    choices: [
      { text: "Narrow index between rejection and nephrotoxicity, with major CYP3A4 interactions", isCorrect: true },
      { text: "It is eliminated unchanged by the kidney with no interactions", isCorrect: false },
      { text: "Levels have no relationship to effect", isCorrect: false },
      { text: "Monitoring is required only in the first week", isCorrect: false },
    ],
  },
  {
    stem: "What should any patient on immunosuppression be told to report urgently?",
    topic: "Immunosuppressants & Biologics",
    explanation:
      "Fever, sore throat, unexplained bruising or bleeding, or any sign of infection — because infection may progress rapidly and marrow suppression can be silent until it is severe. Presentations are often blunted, so a modest fever in this group carries more weight than it would otherwise.",
    choices: [
      { text: "Fever, sore throat, bruising or any sign of infection", isCorrect: true },
      { text: "Only a rash lasting more than a month", isCorrect: false },
      { text: "Nothing; they should wait for routine review", isCorrect: false },
      { text: "Mild tiredness alone", isCorrect: false },
    ],
  },
];

async function main() {
  console.log(`Seeding Pharmacology — Set 2 (Tier 2: Core Drug Classes)${REPLACE_MODE ? "  [REPLACE MODE]" : ""}…\n`);

  const categoryId = await findCategory("fs-pharmacology");
  if (!categoryId) return;

  await seedSet({
    categoryId,
    slug: "pharmacology-set-2-core-classes",
    title: "Pharmacology — Set 2: Core Drug Classes",
    description:
      "Fifty questions working through the major classes: antihypertensives, heart failure and antiarrhythmic agents, anticoagulants and antiplatelets, the antibiotic classes, antivirals and antifungals, respiratory and gastrointestinal drugs, psychotropics, antiepileptics, and immunosuppressants. Assumes Set 1. Untimed.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Foundational",
    questions: SET2,
  });

  await done();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
