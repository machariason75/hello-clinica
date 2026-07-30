/**
 * PHARMACOLOGY — SET 1 of 7  ·  TIER 1: FOUNDATIONS
 *
 * First instalment of the rebuilt Pharmacology library. Fifty questions, all
 * unique to this set, none appearing in any other quiz in the bank.
 *
 * THE LADDER (see LIBRARY_STANDARD.md for the full specification):
 *
 *   Set 1  Foundations      ← this file
 *   Set 2  Core Classes
 *   Set 3  Applied Therapeutics
 *   Set 4  Special Populations
 *   Set 5  Toxicity & Interactions
 *   Set 6  Clinical Reasoning
 *   Set 7  Expert / Edge Cases
 *
 * Tier 1 tests whether a student holds the concepts the rest of pharmacology is
 * built on — what a half-life actually implies, why first-pass matters, what
 * makes a therapeutic index narrow. Every later set assumes these and does not
 * re-test them, which is what makes the sets genuinely independent.
 *
 * NON-DESTRUCTIVE: uses _seedkit, so re-running refreshes only the questions it
 * owns. Anything you add through Admin is preserved. Pass --replace to force a
 * clean rebuild.
 *
 * ⚠ Doses, monitoring intervals and first-line choices vary by national
 * formulary. These test mechanism and principle, which travel. Review anything
 * numerical against Kenyan guidance before publishing.
 *
 * Run:  npx tsx prisma/seed-pharmacology-set-1.ts
 */

import { type Q, findCategory, seedSet, done, REPLACE_MODE } from "./_seedkit";

const SET1: Q[] = [
  /* ── Pharmacokinetics: Absorption & Distribution ── */
  {
    stem: "What does bioavailability describe?",
    topic: "Absorption & Distribution",
    explanation:
      "The fraction of an administered dose reaching the systemic circulation unchanged. Intravenous administration is 100% by definition; oral is lower because of incomplete absorption and first-pass metabolism. It is why the oral and intravenous doses of the same drug often differ substantially.",
    choices: [
      { text: "The fraction of a dose reaching the systemic circulation unchanged", isCorrect: true },
      { text: "The proportion of a dose excreted by the kidney", isCorrect: false },
      { text: "The speed at which a drug crosses the blood-brain barrier", isCorrect: false },
      { text: "The strength of binding to its receptor", isCorrect: false },
    ],
  },
  {
    stem: "What is first-pass metabolism?",
    topic: "Absorption & Distribution",
    explanation:
      "Metabolism of an orally absorbed drug by gut wall and liver before it reaches the systemic circulation. Extensive first-pass effect is why some drugs are useless orally, and why routes bypassing the portal circulation — sublingual, rectal, transdermal, parenteral — exist for them.",
    choices: [
      { text: "Metabolism by gut wall and liver before the drug reaches the circulation", isCorrect: true },
      { text: "The first dose of a course being metabolised faster than later doses", isCorrect: false },
      { text: "Renal clearance of a drug on its first pass through the kidney", isCorrect: false },
      { text: "Binding of drug to plasma protein on absorption", isCorrect: false },
    ],
  },
  {
    stem: "Why does a drug with a large volume of distribution respond poorly to dialysis?",
    topic: "Absorption & Distribution",
    explanation:
      "A large volume of distribution means most of the drug sits in tissues rather than plasma, and dialysis only clears plasma. Removing the small circulating fraction achieves little because tissue stores immediately re-equilibrate — which is why dialysis helps in lithium or salicylate poisoning but not in tricyclic overdose.",
    choices: [
      { text: "Most of the drug is in tissue, not plasma, and dialysis only clears plasma", isCorrect: true },
      { text: "The drug is too small to cross the dialysis membrane", isCorrect: false },
      { text: "Dialysis destroys the drug chemically", isCorrect: false },
      { text: "A large volume of distribution means the drug is not absorbed", isCorrect: false },
    ],
  },
  {
    stem: "Why does hypoalbuminaemia matter for a highly protein-bound drug?",
    topic: "Absorption & Distribution",
    explanation:
      "Only unbound drug is pharmacologically active, so less albumin means a higher free fraction at the same total concentration. Toxicity can occur despite a total level that reads within range — a trap with phenytoin in particular, where the reported level is total, not free.",
    choices: [
      { text: "The free, active fraction rises even though total measured level looks normal", isCorrect: true },
      { text: "The drug is not absorbed from the gut", isCorrect: false },
      { text: "Renal excretion stops completely", isCorrect: false },
      { text: "Protein binding has no clinical relevance", isCorrect: false },
    ],
  },
  {
    stem: "Which property most determines whether a drug crosses the blood-brain barrier?",
    topic: "Absorption & Distribution",
    explanation:
      "Lipid solubility, along with molecular size and whether it is a substrate for efflux transporters. This explains why some antihistamines sedate and others do not, and why certain antibiotics are useless in meningitis despite excellent activity against the organism in vitro.",
    choices: [
      { text: "Lipid solubility, with size and efflux transport also mattering", isCorrect: true },
      { text: "The colour of the formulation", isCorrect: false },
      { text: "Whether it is given before or after food", isCorrect: false },
      { text: "Its cost per dose", isCorrect: false },
    ],
  },

  /* ── Pharmacokinetics: Metabolism & Excretion ── */
  {
    stem: "What does a drug's half-life tell you?",
    topic: "Metabolism & Excretion",
    explanation:
      "The time for plasma concentration to fall by half. It determines both how long a drug takes to clear and how long to reach steady state on repeated dosing — roughly four to five half-lives for each. So it answers 'when will this work?' and 'when will this be gone?' at the same time.",
    choices: [
      { text: "How long the concentration takes to halve, governing both clearance and time to steady state", isCorrect: true },
      { text: "How potent the drug is at its receptor", isCorrect: false },
      { text: "The dose needed for a therapeutic effect", isCorrect: false },
      { text: "How completely the drug is absorbed", isCorrect: false },
    ],
  },
  {
    stem: "Why is a loading dose sometimes given?",
    topic: "Metabolism & Excretion",
    explanation:
      "To reach therapeutic concentration quickly rather than waiting the four to five half-lives that regular dosing would require. It is calculated from the volume of distribution, not from clearance — which is why loading doses are unchanged in renal impairment while maintenance doses often are.",
    choices: [
      { text: "To reach therapeutic concentration immediately instead of after several half-lives", isCorrect: true },
      { text: "To saturate the liver enzymes permanently", isCorrect: false },
      { text: "To reduce the total amount of drug given", isCorrect: false },
      { text: "Because the first dose is always poorly absorbed", isCorrect: false },
    ],
  },
  {
    stem: "What is the difference between first-order and zero-order elimination?",
    topic: "Metabolism & Excretion",
    explanation:
      "First-order clears a constant PROPORTION per unit time, so half-life is predictable. Zero-order clears a constant AMOUNT because the enzyme is saturated, so a small dose increase can produce a large, disproportionate rise in concentration — the behaviour of phenytoin, alcohol and salicylate at higher levels.",
    choices: [
      { text: "First-order clears a constant proportion; zero-order clears a constant amount once saturated", isCorrect: true },
      { text: "First-order applies only to intravenous drugs", isCorrect: false },
      { text: "Zero-order means no elimination occurs at all", isCorrect: false },
      { text: "They are two names for the same process", isCorrect: false },
    ],
  },
  {
    stem: "What distinguishes phase I from phase II drug metabolism?",
    topic: "Metabolism & Excretion",
    explanation:
      "Phase I modifies the molecule — oxidation, reduction, hydrolysis, largely by cytochrome P450 — sometimes producing an active or toxic metabolite. Phase II conjugates it, attaching a group such as glucuronide to make it water-soluble for excretion. Phase II almost always inactivates.",
    choices: [
      { text: "Phase I modifies the molecule; phase II conjugates it for excretion", isCorrect: true },
      { text: "Phase I occurs in the kidney and phase II in the liver", isCorrect: false },
      { text: "Phase I always inactivates the drug completely", isCorrect: false },
      { text: "Phase II happens before phase I", isCorrect: false },
    ],
  },
  {
    stem: "Why does renal impairment matter most for renally excreted drugs?",
    topic: "Metabolism & Excretion",
    explanation:
      "They accumulate when clearance falls, so the same dose produces progressively higher concentrations and toxicity. Digoxin, gentamicin, metformin and lithium are the recurring examples — which is why renal function is checked before prescribing them and monitored during.",
    choices: [
      { text: "They accumulate as clearance falls, so the usual dose becomes toxic", isCorrect: true },
      { text: "They are destroyed by the damaged kidney", isCorrect: false },
      { text: "Absorption from the gut stops", isCorrect: false },
      { text: "They become completely ineffective", isCorrect: false },
    ],
  },
  {
    stem: "What is a prodrug?",
    topic: "Metabolism & Excretion",
    explanation:
      "An inactive compound converted to its active form by metabolism. This can improve absorption or targeting — but it also means a patient who metabolises poorly gets little effect, which is the basis of clopidogrel's variable response with CYP2C19 variants.",
    choices: [
      { text: "An inactive compound converted to its active form by metabolism", isCorrect: true },
      { text: "A drug given before surgery", isCorrect: false },
      { text: "The first drug tried in a treatment sequence", isCorrect: false },
      { text: "A drug that has passed its expiry date", isCorrect: false },
    ],
  },

  /* ── Pharmacodynamics ── */
  {
    stem: "What is the difference between an agonist and an antagonist?",
    topic: "Pharmacodynamics",
    explanation:
      "An agonist binds and activates the receptor, producing a response; an antagonist binds without activating, blocking the endogenous ligand. A partial agonist does both depending on context — it activates weakly, and in the presence of a full agonist it behaves as an antagonist by occupying the site.",
    choices: [
      { text: "An agonist binds and activates; an antagonist binds and blocks without activating", isCorrect: true },
      { text: "An agonist is oral and an antagonist intravenous", isCorrect: false },
      { text: "An antagonist activates the receptor more strongly", isCorrect: false },
      { text: "They act on entirely different receptors by definition", isCorrect: false },
    ],
  },
  {
    stem: "What does a narrow therapeutic index mean in practice?",
    topic: "Pharmacodynamics",
    explanation:
      "The gap between the effective and the toxic dose is small, so ordinary variation in absorption, renal function or interactions can push a patient from therapeutic to toxic. It is why digoxin, lithium, warfarin, phenytoin and gentamicin are monitored while paracetamol at normal dose is not.",
    choices: [
      { text: "Effective and toxic doses are close, so small changes cause toxicity", isCorrect: true },
      { text: "The drug works only for a narrow range of conditions", isCorrect: false },
      { text: "It has a short half-life", isCorrect: false },
      { text: "It is available only in one formulation", isCorrect: false },
    ],
  },
  {
    stem: "How does potency differ from efficacy?",
    topic: "Pharmacodynamics",
    explanation:
      "Potency is the dose needed for a given effect; efficacy is the maximum effect achievable. A more potent drug is not a better one — it simply works at a lower dose. A drug of lower potency but higher efficacy is usually preferable when a large effect is required.",
    choices: [
      { text: "Potency is the dose needed; efficacy is the maximum effect achievable", isCorrect: true },
      { text: "They are synonyms", isCorrect: false },
      { text: "Potency is always the more clinically important", isCorrect: false },
      { text: "Efficacy describes how quickly a drug acts", isCorrect: false },
    ],
  },
  {
    stem: "How does a competitive antagonist differ from a non-competitive one?",
    topic: "Pharmacodynamics",
    explanation:
      "A competitive antagonist can be overcome by raising agonist concentration, shifting the dose-response curve right without lowering the maximum. A non-competitive one reduces the maximum achievable response regardless of dose — which is why the clinical response to reversal agents differs so much between the two.",
    choices: [
      { text: "Competitive can be overcome by more agonist; non-competitive lowers the maximum response", isCorrect: true },
      { text: "Competitive antagonists are irreversible", isCorrect: false },
      { text: "Non-competitive antagonists have no clinical use", isCorrect: false },
      { text: "There is no functional difference", isCorrect: false },
    ],
  },
  {
    stem: "What is tachyphylaxis?",
    topic: "Pharmacodynamics",
    explanation:
      "Rapid loss of response after repeated dosing over a short period, from receptor desensitisation or depletion of a mediator. It differs from tolerance, which develops gradually over longer exposure. Nitrate tolerance is the classic example, and it is why a nitrate-free interval is built into dosing.",
    choices: [
      { text: "Rapid loss of response on repeated dosing over a short period", isCorrect: true },
      { text: "An allergic reaction to a drug", isCorrect: false },
      { text: "An increased response with repeated doses", isCorrect: false },
      { text: "A rise in heart rate caused by any drug", isCorrect: false },
    ],
  },

  /* ── Autonomic Pharmacology ── */
  {
    stem: "What is the effect of beta-1 receptor stimulation?",
    topic: "Autonomic Pharmacology",
    explanation:
      "Increased heart rate and contractility, along with renin release from the kidney. Beta-1 is predominantly cardiac and beta-2 predominantly bronchial and vascular — which is exactly why cardioselective beta blockers are preferred, though not guaranteed safe, in asthma.",
    choices: [
      { text: "Increased heart rate and contractility, with renin release", isCorrect: true },
      { text: "Bronchodilation and uterine relaxation", isCorrect: false },
      { text: "Pupillary constriction and increased salivation", isCorrect: false },
      { text: "Vasoconstriction of skin vessels only", isCorrect: false },
    ],
  },
  {
    stem: "Which receptor does salbutamol act on, and what does that achieve?",
    topic: "Autonomic Pharmacology",
    explanation:
      "Beta-2, producing bronchial smooth muscle relaxation. Because beta selectivity is relative rather than absolute, higher doses spill onto beta-1 and beta-2 receptors elsewhere — giving the familiar tremor, tachycardia and fall in potassium seen after repeated nebulisers.",
    choices: [
      { text: "Beta-2 — bronchodilation, with tremor and hypokalaemia at higher doses", isCorrect: true },
      { text: "Alpha-1 — vasoconstriction", isCorrect: false },
      { text: "Muscarinic — reduced secretions", isCorrect: false },
      { text: "Beta-1 — increased cardiac output only", isCorrect: false },
    ],
  },
  {
    stem: "What are the typical antimuscarinic side effects?",
    topic: "Autonomic Pharmacology",
    explanation:
      "Dry mouth, blurred vision, constipation, urinary retention, tachycardia and confusion — summarised as dry as a bone, blind as a bat, mad as a hatter. They accumulate when several drugs with antimuscarinic activity are combined, which is a common and under-recognised cause of confusion in older patients.",
    choices: [
      { text: "Dry mouth, blurred vision, constipation, urinary retention and confusion", isCorrect: true },
      { text: "Excess salivation, diarrhoea and bradycardia", isCorrect: false },
      { text: "Bronchoconstriction and pupillary constriction", isCorrect: false },
      { text: "Hypertension with sweating", isCorrect: false },
    ],
  },
  {
    stem: "Why is adrenaline effective in anaphylaxis?",
    topic: "Autonomic Pharmacology",
    explanation:
      "It acts on several receptors at once: alpha-1 vasoconstriction reverses hypotension and mucosal oedema, beta-1 supports cardiac output, and beta-2 relieves bronchospasm while suppressing further mediator release. No antihistamine or steroid does any of this quickly enough.",
    choices: [
      { text: "Alpha-1 vasoconstriction, beta-1 cardiac support and beta-2 bronchodilation together", isCorrect: true },
      { text: "It blocks histamine receptors directly", isCorrect: false },
      { text: "It acts purely as a corticosteroid", isCorrect: false },
      { text: "It works only on the skin manifestations", isCorrect: false },
    ],
  },
  {
    stem: "What is the effect of alpha-1 receptor blockade?",
    topic: "Autonomic Pharmacology",
    explanation:
      "Vasodilation with a fall in blood pressure, plus relaxation of prostatic and bladder neck smooth muscle. That dual action is why alpha blockers treat both hypertension and benign prostatic obstruction — and why first-dose postural hypotension is the characteristic adverse effect.",
    choices: [
      { text: "Vasodilation with hypotension, plus prostatic smooth muscle relaxation", isCorrect: true },
      { text: "Bronchoconstriction", isCorrect: false },
      { text: "Increased heart rate as the primary effect", isCorrect: false },
      { text: "Reduced gastric acid secretion", isCorrect: false },
    ],
  },

  /* ── Cardiovascular Drugs ── */
  {
    stem: "How do ACE inhibitors lower blood pressure?",
    topic: "Cardiovascular Drugs",
    explanation:
      "By blocking conversion of angiotensin I to angiotensin II, reducing vasoconstriction and aldosterone-driven sodium retention. The same enzyme degrades bradykinin, and its accumulation explains the dry cough that leads many patients to switch to an angiotensin receptor blocker.",
    choices: [
      { text: "They block angiotensin II formation, reducing vasoconstriction and aldosterone", isCorrect: true },
      { text: "They block beta receptors in the heart", isCorrect: false },
      { text: "They increase renin production", isCorrect: false },
      { text: "They act as direct arterial dilators only", isCorrect: false },
    ],
  },
  {
    stem: "Where does a loop diuretic act?",
    topic: "Cardiovascular Drugs",
    explanation:
      "On the sodium-potassium-chloride co-transporter in the thick ascending limb, blocking the most substantial site of sodium reabsorption. That is why loop diuretics are the most powerful class, and why they cause hypokalaemia, hypomagnesaemia and volume depletion so readily.",
    choices: [
      { text: "The Na-K-2Cl co-transporter in the thick ascending limb", isCorrect: true },
      { text: "The distal convoluted tubule", isCorrect: false },
      { text: "The collecting duct aldosterone receptor", isCorrect: false },
      { text: "The glomerulus itself", isCorrect: false },
    ],
  },
  {
    stem: "How do statins reduce LDL cholesterol?",
    topic: "Cardiovascular Drugs",
    explanation:
      "By inhibiting HMG-CoA reductase, lowering intracellular cholesterol and thereby upregulating hepatic LDL receptors. It is that receptor upregulation which clears LDL from plasma — more than the reduction in synthesis itself — and it explains why statins work poorly when receptors are absent.",
    choices: [
      { text: "HMG-CoA reductase inhibition, which upregulates hepatic LDL receptors", isCorrect: true },
      { text: "They bind cholesterol in the gut and prevent absorption", isCorrect: false },
      { text: "They increase biliary cholesterol excretion directly", isCorrect: false },
      { text: "They convert LDL into HDL", isCorrect: false },
    ],
  },
  {
    stem: "Why does warfarin take several days to reach full effect?",
    topic: "Cardiovascular Drugs",
    explanation:
      "It blocks synthesis of new vitamin K-dependent clotting factors but does not remove those already circulating, so the effect appears only as existing factors are cleared. This is also why bridging anticoagulation is needed initially, and why a missed dose does not show up immediately.",
    choices: [
      { text: "It stops new factor synthesis but existing clotting factors must first be cleared", isCorrect: true },
      { text: "It is absorbed very slowly from the gut", isCorrect: false },
      { text: "It must accumulate in fat before working", isCorrect: false },
      { text: "It requires several doses to reach the liver", isCorrect: false },
    ],
  },
  {
    stem: "What is the mechanism of digoxin?",
    topic: "Cardiovascular Drugs",
    explanation:
      "Inhibition of the sodium-potassium ATPase, raising intracellular sodium and thereby calcium, which increases contractility. It also increases vagal tone, slowing atrioventricular conduction. Both effects are worsened by hypokalaemia, since potassium competes with digoxin at the same pump.",
    choices: [
      { text: "Sodium-potassium ATPase inhibition, raising intracellular calcium and increasing vagal tone", isCorrect: true },
      { text: "Beta receptor blockade", isCorrect: false },
      { text: "Calcium channel blockade", isCorrect: false },
      { text: "Direct arterial vasodilation", isCorrect: false },
    ],
  },

  /* ── Antimicrobial Principles ── */
  {
    stem: "How do beta-lactam antibiotics kill bacteria?",
    topic: "Antimicrobial Principles",
    explanation:
      "By binding penicillin-binding proteins and disrupting cell wall peptidoglycan cross-linking, so the cell lyses under its own osmotic pressure. Because human cells have no cell wall, the class is inherently selective — which is why beta-lactams are generally so well tolerated.",
    choices: [
      { text: "They disrupt cell wall cross-linking by binding penicillin-binding proteins", isCorrect: true },
      { text: "They inhibit bacterial DNA gyrase", isCorrect: false },
      { text: "They bind the 30S ribosomal subunit", isCorrect: false },
      { text: "They disrupt folate synthesis", isCorrect: false },
    ],
  },
  {
    stem: "What is the difference between bactericidal and bacteriostatic agents?",
    topic: "Antimicrobial Principles",
    explanation:
      "Bactericidal agents kill; bacteriostatic agents inhibit replication and leave clearance to the immune system. The distinction matters most where host defences are inadequate — endocarditis, meningitis, neutropenia — where a bactericidal agent is preferred.",
    choices: [
      { text: "Bactericidal kills; bacteriostatic inhibits growth and relies on host immunity", isCorrect: true },
      { text: "Bacteriostatic agents are always more effective", isCorrect: false },
      { text: "Bactericidal agents work only against Gram-positives", isCorrect: false },
      { text: "The distinction has no clinical relevance", isCorrect: false },
    ],
  },
  {
    stem: "Why are aminoglycosides monitored with drug levels?",
    topic: "Antimicrobial Principles",
    explanation:
      "They have a narrow therapeutic index with dose-related nephrotoxicity and irreversible ototoxicity, and they are renally cleared so accumulate when function falls. Monitoring targets a peak high enough to be effective and a trough low enough to allow recovery between doses.",
    choices: [
      { text: "Narrow therapeutic index with nephrotoxicity and irreversible ototoxicity", isCorrect: true },
      { text: "They are inactivated unpredictably by food", isCorrect: false },
      { text: "They cause severe allergy in most patients", isCorrect: false },
      { text: "Levels are measured purely for billing", isCorrect: false },
    ],
  },
  {
    stem: "How do macrolides such as azithromycin act?",
    topic: "Antimicrobial Principles",
    explanation:
      "They bind the 50S ribosomal subunit and inhibit protein synthesis. They also inhibit CYP3A4 and can prolong the QT interval, so a macrolide added to an existing regimen is a frequent source of interaction — a point worth checking rather than assuming.",
    choices: [
      { text: "They bind the 50S ribosomal subunit, inhibiting protein synthesis", isCorrect: true },
      { text: "They disrupt the bacterial cell wall", isCorrect: false },
      { text: "They inhibit DNA gyrase", isCorrect: false },
      { text: "They block folate metabolism", isCorrect: false },
    ],
  },
  {
    stem: "Why does antibiotic resistance develop faster with inadequate dosing than with none at all?",
    topic: "Antimicrobial Principles",
    explanation:
      "Sub-therapeutic concentrations kill susceptible organisms while allowing less susceptible ones to survive and multiply — direct selection pressure for resistance. This is why an adequate dose for an adequate duration matters more than caution about total antibiotic exposure.",
    choices: [
      { text: "Sub-therapeutic levels selectively kill susceptible organisms, leaving resistant ones to multiply", isCorrect: true },
      { text: "Low doses cause bacteria to mutate directly", isCorrect: false },
      { text: "Antibiotics create resistance genes in bacteria", isCorrect: false },
      { text: "Resistance is unrelated to dosing", isCorrect: false },
    ],
  },

  /* ── Analgesia & Anaesthesia ── */
  {
    stem: "How do NSAIDs produce both their therapeutic and adverse effects?",
    topic: "Analgesia & Anaesthesia",
    explanation:
      "By inhibiting cyclo-oxygenase and so prostaglandin synthesis. The same inhibition that reduces pain and inflammation removes prostaglandin protection of gastric mucosa and prostaglandin-dependent renal perfusion — which is why the benefits and the gastric and renal risks are inseparable.",
    choices: [
      { text: "Cyclo-oxygenase inhibition, which also removes gastric and renal prostaglandin protection", isCorrect: true },
      { text: "Opioid receptor agonism", isCorrect: false },
      { text: "Direct sodium channel blockade", isCorrect: false },
      { text: "Inhibition of substance P release only", isCorrect: false },
    ],
  },
  {
    stem: "Why is paracetamol overdose dangerous despite the drug's safety at normal doses?",
    topic: "Analgesia & Anaesthesia",
    explanation:
      "Normally a minor metabolite, NAPQI, is neutralised by glutathione. In overdose glutathione is exhausted and NAPQI binds hepatocyte proteins, causing centrilobular necrosis. Acetylcysteine works by replenishing glutathione, which is why it is effective early and much less so once damage is established.",
    choices: [
      { text: "Glutathione is depleted, leaving toxic NAPQI to damage hepatocytes", isCorrect: true },
      { text: "It directly dissolves liver tissue", isCorrect: false },
      { text: "It causes immediate renal failure with no liver effect", isCorrect: false },
      { text: "It blocks all liver enzymes permanently", isCorrect: false },
    ],
  },
  {
    stem: "Which opioid effect does tolerance NOT reliably develop to?",
    topic: "Analgesia & Anaesthesia",
    explanation:
      "Constipation, which persists throughout treatment. Tolerance develops to analgesia, sedation, nausea and respiratory depression, but not to the effect on gut motility — which is why a laxative is prescribed alongside a regular opioid from the outset rather than when problems arise.",
    choices: [
      { text: "Constipation", isCorrect: true },
      { text: "Sedation", isCorrect: false },
      { text: "Nausea", isCorrect: false },
      { text: "Analgesia", isCorrect: false },
    ],
  },
  {
    stem: "Why does naloxone need repeating or an infusion after reversing a long-acting opioid?",
    topic: "Analgesia & Anaesthesia",
    explanation:
      "Its duration of action is shorter than that of many opioids, so the patient can re-sedate once it wears off. A single dose that produces a good response is therefore not the end of treatment — the patient needs observation for as long as the opioid is expected to act.",
    choices: [
      { text: "Naloxone's action is shorter than the opioid's, so re-sedation can occur", isCorrect: true },
      { text: "Naloxone is destroyed by gastric acid", isCorrect: false },
      { text: "It works only on the first dose ever given", isCorrect: false },
      { text: "It has no effect on respiratory depression", isCorrect: false },
    ],
  },
  {
    stem: "How do local anaesthetics work, and why do they fail in infected tissue?",
    topic: "Analgesia & Anaesthesia",
    explanation:
      "They block voltage-gated sodium channels, preventing impulse conduction. They must be in the uncharged form to cross the nerve membrane, and the acidic environment of infected tissue keeps more of the drug ionised — so less crosses and the block is poor.",
    choices: [
      { text: "Sodium channel blockade; acidic infected tissue keeps the drug ionised so it cannot cross", isCorrect: true },
      { text: "They block potassium channels and work better in acid", isCorrect: false },
      { text: "Infection destroys the drug enzymatically", isCorrect: false },
      { text: "They act on opioid receptors in the nerve", isCorrect: false },
    ],
  },

  /* ── Endocrine & Metabolic Drugs ── */
  {
    stem: "What is metformin's principal mechanism?",
    topic: "Endocrine & Metabolic Drugs",
    explanation:
      "Reduced hepatic gluconeogenesis with improved peripheral insulin sensitivity. Because it does not stimulate insulin secretion, it does not cause hypoglycaemia when used alone — which is a large part of why it remains first-line.",
    choices: [
      { text: "Reduced hepatic glucose production and improved insulin sensitivity", isCorrect: true },
      { text: "Stimulation of pancreatic insulin release", isCorrect: false },
      { text: "Blockade of intestinal glucose absorption entirely", isCorrect: false },
      { text: "Direct replacement of insulin", isCorrect: false },
    ],
  },
  {
    stem: "Why do sulfonylureas cause hypoglycaemia when metformin does not?",
    topic: "Endocrine & Metabolic Drugs",
    explanation:
      "They stimulate insulin release from beta cells regardless of the prevailing glucose, so insulin continues to be secreted even when glucose is already low. Metformin works on hepatic output and sensitivity, which are self-limiting mechanisms.",
    choices: [
      { text: "They stimulate insulin release independently of the glucose level", isCorrect: true },
      { text: "They block glucose absorption completely", isCorrect: false },
      { text: "They destroy hepatic glycogen stores", isCorrect: false },
      { text: "They prevent all glucagon release permanently", isCorrect: false },
    ],
  },
  {
    stem: "Why must long-term corticosteroids never be stopped abruptly?",
    topic: "Endocrine & Metabolic Drugs",
    explanation:
      "Prolonged exogenous steroid suppresses the hypothalamic-pituitary-adrenal axis, so the adrenal cannot immediately produce cortisol when the drug stops. Abrupt withdrawal risks adrenal crisis with hypotension and collapse, which is why the dose is tapered.",
    choices: [
      { text: "The HPA axis is suppressed, risking adrenal crisis on sudden withdrawal", isCorrect: true },
      { text: "The drug causes physical dependence like an opioid", isCorrect: false },
      { text: "Stopping causes immediate rebound infection", isCorrect: false },
      { text: "There is no risk; they can be stopped at any time", isCorrect: false },
    ],
  },
  {
    stem: "How does levothyroxine dosing differ from most drugs?",
    topic: "Endocrine & Metabolic Drugs",
    explanation:
      "Its long half-life means steady state takes weeks, so the effect of a dose change cannot be judged for around six weeks and TSH is rechecked at that interval. Adjusting sooner, based on symptoms, leads to overshooting in both directions.",
    choices: [
      { text: "Its long half-life means dose changes take about six weeks to assess", isCorrect: true },
      { text: "It reaches steady state within hours", isCorrect: false },
      { text: "It should be titrated daily against symptoms", isCorrect: false },
      { text: "Blood tests are unnecessary once started", isCorrect: false },
    ],
  },
  {
    stem: "Why are bisphosphonates taken upright on an empty stomach with water?",
    topic: "Endocrine & Metabolic Drugs",
    explanation:
      "Absorption is very poor and is abolished by food, calcium and other cations; remaining upright prevents oesophageal contact, which causes ulceration. These administration instructions are not optional refinements — ignoring them makes the drug both ineffective and harmful.",
    choices: [
      { text: "Absorption is poor and blocked by food; remaining upright prevents oesophageal ulceration", isCorrect: true },
      { text: "They taste unpleasant with food", isCorrect: false },
      { text: "Food increases absorption to toxic levels", isCorrect: false },
      { text: "The posture requirement is arbitrary", isCorrect: false },
    ],
  },

  /* ── Adverse Effects & Interactions ── */
  {
    stem: "What is the difference between a type A and a type B adverse drug reaction?",
    topic: "Adverse Effects & Interactions",
    explanation:
      "Type A reactions are dose-related extensions of the drug's known pharmacology — predictable, common, and usually manageable by dose reduction. Type B are idiosyncratic, not dose-related and not predictable from the mechanism, such as anaphylaxis; these require stopping the drug entirely.",
    choices: [
      { text: "Type A is dose-related and predictable; type B is idiosyncratic and not dose-related", isCorrect: true },
      { text: "Type A occurs only in children", isCorrect: false },
      { text: "Type B is always mild", isCorrect: false },
      { text: "The classification refers to how the drug is given", isCorrect: false },
    ],
  },
  {
    stem: "What is the consequence of taking an enzyme inducer alongside another drug?",
    topic: "Adverse Effects & Interactions",
    explanation:
      "The second drug is metabolised faster, so its levels fall and it may stop working. Rifampicin, carbamazepine and phenytoin are the classic inducers — and the failure of hormonal contraception with rifampicin is the interaction most likely to have irreversible consequences.",
    choices: [
      { text: "The other drug is metabolised faster and may lose effect", isCorrect: true },
      { text: "The other drug accumulates to toxic levels", isCorrect: false },
      { text: "Absorption of both is completely blocked", isCorrect: false },
      { text: "Neither drug is affected", isCorrect: false },
    ],
  },
  {
    stem: "Why is grapefruit juice a recognised interaction risk?",
    topic: "Adverse Effects & Interactions",
    explanation:
      "It inhibits intestinal CYP3A4, so drugs normally subject to that first-pass metabolism reach higher concentrations than intended. With statins and some calcium channel blockers this can produce toxicity from an unchanged dose — a genuine interaction rather than a folk warning.",
    choices: [
      { text: "It inhibits intestinal CYP3A4, raising levels of affected drugs", isCorrect: true },
      { text: "It binds drugs in the stomach and prevents absorption", isCorrect: false },
      { text: "Its acidity destroys tablet coatings", isCorrect: false },
      { text: "It has no genuine pharmacological effect", isCorrect: false },
    ],
  },
  {
    stem: "Which combination most raises the risk of gastrointestinal bleeding?",
    topic: "Adverse Effects & Interactions",
    explanation:
      "An NSAID with an anticoagulant, particularly with a corticosteroid or antiplatelet added. The risks are not simply additive — the NSAID damages mucosa and impairs platelets while the anticoagulant prevents haemostasis, so each amplifies the other.",
    choices: [
      { text: "An NSAID combined with an anticoagulant", isCorrect: true },
      { text: "Paracetamol with an antihistamine", isCorrect: false },
      { text: "A statin with a proton pump inhibitor", isCorrect: false },
      { text: "Levothyroxine with an inhaled steroid", isCorrect: false },
    ],
  },
  {
    stem: "Why is an accurate allergy history essential before prescribing?",
    topic: "Adverse Effects & Interactions",
    explanation:
      "It prevents re-exposure to a drug that caused a serious reaction, and equally prevents unnecessary avoidance of an effective drug because a side effect was recorded as an allergy. Recording nausea as a penicillin allergy pushes patients onto broader, less effective and more expensive alternatives for life.",
    choices: [
      { text: "It prevents both dangerous re-exposure and needless avoidance of a good drug", isCorrect: true },
      { text: "It is purely a documentation requirement", isCorrect: false },
      { text: "Allergies never affect drug choice", isCorrect: false },
      { text: "Any reported reaction should permanently exclude the whole class", isCorrect: false },
    ],
  },

  /* ── Safe Prescribing ── */
  {
    stem: "What must appear on every prescription for it to be safe and legal?",
    topic: "Safe Prescribing",
    explanation:
      "Patient identifiers, the drug name — generic unless there is a reason otherwise — dose, route, frequency, duration or review date, and the prescriber's signature and identification. Omissions here are among the commonest sources of medication error, and they are entirely preventable.",
    choices: [
      { text: "Patient identifiers, drug, dose, route, frequency, duration and prescriber identification", isCorrect: true },
      { text: "The drug name alone is sufficient", isCorrect: false },
      { text: "Only the diagnosis and the patient's age", isCorrect: false },
      { text: "The brand name is always required by law", isCorrect: false },
    ],
  },
  {
    stem: "Why is 'U' never used as an abbreviation for units on a prescription?",
    topic: "Safe Prescribing",
    explanation:
      "It is readily misread as a zero, turning 4U into 40 — a tenfold insulin overdose. The same reasoning bans trailing zeros after a decimal point and requires a leading zero before one. These conventions exist because each has already killed someone.",
    choices: [
      { text: "It can be misread as a zero, causing a tenfold overdose", isCorrect: true },
      { text: "It is too slow to write", isCorrect: false },
      { text: "It has no meaning in pharmacology", isCorrect: false },
      { text: "It is merely a stylistic preference", isCorrect: false },
    ],
  },
  {
    stem: "What is medicines reconciliation, and when does it matter most?",
    topic: "Safe Prescribing",
    explanation:
      "Compiling an accurate list of what the patient is actually taking and comparing it against what is prescribed. It matters most at transitions of care — admission, transfer, discharge — where most unintentional omissions and duplications originate.",
    choices: [
      { text: "Verifying the true medication list against what is prescribed, especially at transitions of care", isCorrect: true },
      { text: "Ordering stock for the ward pharmacy", isCorrect: false },
      { text: "Choosing between two brands of the same drug", isCorrect: false },
      { text: "Calculating the total cost of a prescription", isCorrect: false },
    ],
  },
  {
    stem: "What does deprescribing mean?",
    topic: "Safe Prescribing",
    explanation:
      "The planned, supervised withdrawal of medicines whose harms now outweigh their benefits. It is an active clinical decision, not neglect — particularly relevant in older patients on many drugs, where the burden of polypharmacy itself causes falls, confusion and admissions.",
    choices: [
      { text: "Planned, supervised withdrawal of medicines whose harms now outweigh benefits", isCorrect: true },
      { text: "Refusing to prescribe anything at all", isCorrect: false },
      { text: "Reducing every dose by half automatically", isCorrect: false },
      { text: "Stopping a drug without telling the patient", isCorrect: false },
    ],
  },
  {
    stem: "Why should a patient be told what a drug is for and what to watch for?",
    topic: "Safe Prescribing",
    explanation:
      "Because adherence depends on understanding, and the patient is the first person able to detect an adverse effect. Someone who knows their new drug can cause a rash or dark urine reports it early; someone who does not simply stops taking it — or does not, and comes to harm.",
    choices: [
      { text: "Understanding drives adherence, and the patient detects adverse effects first", isCorrect: true },
      { text: "It is required only for controlled drugs", isCorrect: false },
      { text: "Patients cannot usefully contribute to monitoring", isCorrect: false },
      { text: "It is a formality with no effect on outcomes", isCorrect: false },
    ],
  },
];

async function main() {
  console.log(`Seeding Pharmacology — Set 1 (Tier 1: Foundations)${REPLACE_MODE ? "  [REPLACE MODE]" : ""}…\n`);

  const categoryId = await findCategory("fs-pharmacology");
  if (!categoryId) return;

  await seedSet({
    categoryId,
    slug: "pharmacology-set-1-foundations",
    title: "Pharmacology — Set 1: Foundations",
    description:
      "Fifty questions on the concepts the rest of pharmacology is built on: absorption, distribution, metabolism and excretion; pharmacodynamics; autonomic, cardiovascular, antimicrobial, analgesic and endocrine drug principles; adverse effects, interactions and safe prescribing. Untimed, with a full rationale on every question. Start here.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Foundational",
    questions: SET1,
  });

  await done();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
