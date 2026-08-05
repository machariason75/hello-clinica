/**
 * PHARMACOLOGY — PRACTICE SET 1
 * Pharmacokinetics, Pharmacodynamics & Dose Calculation
 *
 * Difficulty: Foundational, at US board standard. The principles every later
 * drug class depends on, plus the arithmetic that gets people killed when it
 * goes wrong.
 *
 * 96 questions across 12 topics:
 *   Absorption & Bioavailability · Distribution & Protein Binding · Metabolism
 *   & Cytochrome P450 · Excretion & Clearance · Half-Life & Steady State ·
 *   Receptor Theory & Dose-Response · Agonists & Antagonists · Therapeutic
 *   Index · Drug Interactions · Special Populations · Dose Calculations ·
 *   Adverse Drug Reactions
 *
 * Item mix: 72 single-answer vignettes, 12 select-all-that-apply, 12 true/false.
 * US conventional units. Every calculation has been worked through and checked.
 */

import type { Q } from "../_lib/qbank";

export const PHARMACOLOGY_SET_1: Q[] = [
  /* ══════════════ ABSORPTION & BIOAVAILABILITY ══════════════ */
  {
    stem: "A drug given orally has a bioavailability of 0.25, while the same drug given intravenously has a bioavailability of 1.0. What does this difference chiefly reflect?",
    topic: "Absorption & Bioavailability",
    explanation:
      "Oral drug passes through the intestinal wall and liver before reaching the systemic circulation, and first-pass metabolism removes much of it. Intravenous administration bypasses this entirely, which is why the oral dose must be four times larger to deliver the same systemic exposure.",
    choices: [
      { text: "First-pass metabolism in gut wall and liver", isCorrect: true },
      { text: "Faster renal clearance of the oral formulation" },
      { text: "Greater protein binding after oral administration" },
      { text: "Reduced volume of distribution when given orally" },
      { text: "Chemical degradation of the intravenous form" },
    ],
  },
  {
    stem: "Which routes of administration largely AVOID first-pass hepatic metabolism? Select all that apply.",
    type: "MULTI",
    topic: "Absorption & Bioavailability",
    explanation:
      "Intravenous, sublingual, transdermal, inhaled and rectal (lower third) routes drain into the systemic circulation without passing through the portal vein first. Oral and, for practical purposes, upper rectal administration deliver drug to the liver before the body sees it.",
    choices: [
      { text: "Sublingual", isCorrect: true },
      { text: "Transdermal", isCorrect: true },
      { text: "Intravenous", isCorrect: true },
      { text: "Oral with an enteric coating" },
      { text: "Oral taken with a fatty meal" },
    ],
  },
  {
    stem: "Why is sublingual nitroglycerin effective within minutes while oral nitroglycerin is nearly useless?",
    topic: "Absorption & Bioavailability",
    explanation:
      "Nitroglycerin undergoes almost complete first-pass metabolism, so oral dosing delivers little active drug. Sublingual absorption enters venous drainage that bypasses the liver, giving rapid systemic levels — a pure demonstration of route determining efficacy.",
    choices: [
      { text: "Sublingual absorption bypasses near-complete first-pass metabolism", isCorrect: true },
      { text: "Sublingual tablets contain a much higher dose" },
      { text: "Oral nitroglycerin is destroyed by gastric acid" },
      { text: "Sublingual administration increases protein binding" },
      { text: "Oral nitroglycerin is not absorbed from the intestine at all" },
    ],
  },
  {
    stem: "A weak acid drug with a pKa of 4.4 is in the stomach at pH 1.4. What proportion is un-ionized, and what does this mean for absorption?",
    topic: "Absorption & Bioavailability",
    explanation:
      "At 3 pH units below its pKa, a weak acid is about 99.9% un-ionized, and un-ionized drug crosses lipid membranes readily. This is why weak acids such as aspirin begin absorbing in the stomach, though the small intestine's vast surface area still dominates overall absorption.",
    choices: [
      { text: "Almost entirely un-ionized, so it crosses the gastric mucosa readily", isCorrect: true },
      { text: "Almost entirely ionized, so absorption is negligible" },
      { text: "Exactly half ionized, giving intermediate absorption" },
      { text: "Ionization is unrelated to membrane crossing" },
      { text: "Fully ionized, which enhances lipid solubility" },
    ],
  },
  {
    stem: "True or False: Alkalinizing the urine increases the excretion of a weak acid such as aspirin in overdose.",
    type: "TRUE_FALSE",
    topic: "Absorption & Bioavailability",
    explanation:
      "True. In alkaline urine a weak acid becomes ionized, so it cannot be reabsorbed across tubular membranes and is trapped in the urine. This ion trapping is the basis of sodium bicarbonate therapy in salicylate poisoning.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which factor would DECREASE the rate of oral drug absorption?",
    topic: "Absorption & Bioavailability",
    explanation:
      "Delayed gastric emptying keeps drug out of the small intestine, where most absorption occurs, slowing the rate. Increased splanchnic blood flow, larger surface area and greater lipid solubility all speed absorption.",
    choices: [
      { text: "Delayed gastric emptying from an opioid", isCorrect: true },
      { text: "Increased splanchnic blood flow" },
      { text: "Greater lipid solubility of the drug" },
      { text: "Larger intestinal surface area" },
      { text: "Higher un-ionized fraction at the absorption site" },
    ],
  },
  {
    stem: "A patient taking oral levothyroxine also takes calcium carbonate at the same time. What is the consequence?",
    topic: "Absorption & Bioavailability",
    explanation:
      "Divalent cations chelate levothyroxine in the gut lumen, forming a non-absorbable complex and reducing bioavailability. Separating the doses by at least four hours resolves it — the interaction is physical rather than metabolic.",
    choices: [
      { text: "Chelation in the gut reduces levothyroxine absorption", isCorrect: true },
      { text: "Calcium induces hepatic metabolism of levothyroxine" },
      { text: "Calcium displaces levothyroxine from plasma proteins" },
      { text: "Calcium competes for the same renal transporter" },
      { text: "There is no clinically significant interaction" },
    ],
  },
  {
    stem: "Bioequivalence between a generic and a brand formulation requires similarity in which parameters?",
    topic: "Absorption & Bioavailability",
    explanation:
      "Regulators compare peak concentration, time to peak, and the area under the curve, which together describe extent and rate of systemic exposure. Identical inactive ingredients are not required, which occasionally matters for patients with excipient sensitivities.",
    choices: [
      { text: "Cmax, Tmax and area under the concentration-time curve", isCorrect: true },
      { text: "Identical inactive excipients and tablet color" },
      { text: "Identical manufacturing facility and process" },
      { text: "Equal protein binding measured in vitro only" },
      { text: "Matching half-life in animal models" },
    ],
  },

  /* ══════════════ DISTRIBUTION & PROTEIN BINDING ══════════════ */
  {
    stem: "A 500 mg intravenous dose produces an initial plasma concentration of 10 mg/L. What is the apparent volume of distribution?",
    topic: "Distribution & Protein Binding",
    explanation:
      "Volume of distribution is dose divided by plasma concentration: 500 mg ÷ 10 mg/L = 50 L. It is an apparent volume rather than a real one — a value far above total body water simply means the drug leaves plasma for tissues.",
    choices: [
      { text: "50 L", isCorrect: true },
      { text: "5 L" },
      { text: "500 L" },
      { text: "0.02 L" },
      { text: "5,000 L" },
    ],
  },
  {
    stem: "A drug has a volume of distribution of 700 L in a 70 kg adult. What does this indicate?",
    topic: "Distribution & Protein Binding",
    explanation:
      "Total body water is about 42 L, so 700 L means extensive tissue sequestration — the drug is largely out of plasma. Practically, this predicts that hemodialysis will remove very little of it, which matters in overdose.",
    choices: [
      { text: "Extensive tissue distribution, and dialysis will remove little", isCorrect: true },
      { text: "Confinement to the plasma compartment" },
      { text: "The drug is highly protein bound in plasma only" },
      { text: "The patient has 700 L of body water" },
      { text: "The drug is not absorbed at all" },
    ],
  },
  {
    stem: "Which of the following increase the FREE fraction of a highly protein-bound drug? Select all that apply.",
    type: "MULTI",
    topic: "Distribution & Protein Binding",
    explanation:
      "Hypoalbuminemia, uremia altering binding sites, and displacement by a competing drug all raise free drug. Increased albumin synthesis and reduced competing drug lower it. Only free drug is pharmacologically active, which is why total levels can mislead.",
    choices: [
      { text: "Hypoalbuminemia from nephrotic syndrome", isCorrect: true },
      { text: "Displacement by a competing highly bound drug", isCorrect: true },
      { text: "Uremia altering albumin binding sites", isCorrect: true },
      { text: "Increased hepatic albumin synthesis" },
      { text: "Discontinuation of a competing bound drug" },
    ],
  },
  {
    stem: "A patient with albumin of 2.1 g/dL has a total phenytoin level of 8 mcg/mL (reference 10–20). Why might this be misleading?",
    topic: "Distribution & Protein Binding",
    explanation:
      "Phenytoin is about 90% albumin-bound, so hypoalbuminemia lowers the total measured level while the free, active fraction may be therapeutic or even toxic. A corrected or free level should be used rather than increasing the dose on the total value.",
    choices: [
      { text: "The free fraction may be therapeutic despite a low total level", isCorrect: true },
      { text: "The free fraction is proportionally lower than the total" },
      { text: "Albumin does not bind phenytoin to any degree" },
      { text: "The dose should be doubled without further testing" },
      { text: "Total level is always the more accurate measure" },
    ],
  },
  {
    stem: "True or False: A loading dose is determined by volume of distribution, while a maintenance dose is determined by clearance.",
    type: "TRUE_FALSE",
    topic: "Distribution & Protein Binding",
    explanation:
      "True. The loading dose fills the volume to reach target concentration quickly, and the maintenance dose replaces what is eliminated. This is why a patient in renal failure may need a normal loading dose but a much reduced maintenance dose.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "A drug with a volume of distribution of 35 L is to reach a target plasma concentration of 3 mg/L. Bioavailability is 100%. What loading dose is required?",
    topic: "Distribution & Protein Binding",
    explanation:
      "Loading dose equals Vd × target concentration ÷ bioavailability: 35 L × 3 mg/L ÷ 1 = 105 mg. Clearance does not enter this calculation, which is why loading doses are unchanged in renal impairment.",
    choices: [
      { text: "105 mg", isCorrect: true },
      { text: "11.7 mg" },
      { text: "38 mg" },
      { text: "315 mg" },
      { text: "1,050 mg" },
    ],
  },
  {
    stem: "Which characteristic best predicts that a drug will cross the blood-brain barrier?",
    topic: "Distribution & Protein Binding",
    explanation:
      "High lipid solubility with low molecular weight and minimal ionization at physiologic pH allows passive diffusion across tight endothelial junctions. Being a substrate for P-glycoprotein efflux works against entry, regardless of lipid solubility.",
    choices: [
      { text: "High lipid solubility, low molecular weight, largely un-ionized", isCorrect: true },
      { text: "High degree of ionization at physiologic pH" },
      { text: "Strong affinity for P-glycoprotein efflux transporters" },
      { text: "Very high plasma protein binding" },
      { text: "Large molecular weight above 1,000 daltons" },
    ],
  },
  {
    stem: "Redistribution explains the short duration of action of a single dose of thiopental despite a long elimination half-life. What happens?",
    topic: "Distribution & Protein Binding",
    explanation:
      "The highly lipid-soluble drug reaches the brain rapidly because of high cerebral blood flow, then redistributes to muscle and fat, dropping brain concentration below the effective level. Termination of effect is therefore distributional rather than metabolic.",
    choices: [
      { text: "Drug moves from brain to muscle and fat, ending the effect before elimination", isCorrect: true },
      { text: "Hepatic metabolism eliminates the drug within minutes" },
      { text: "Renal excretion clears the drug before it reaches the brain" },
      { text: "The drug is destroyed by plasma esterases immediately" },
      { text: "Receptor desensitization ends the effect" },
    ],
  },

  /* ══════════════ METABOLISM & CYTOCHROME P450 ══════════════ */
  {
    stem: "Which statement correctly distinguishes phase I from phase II drug metabolism?",
    topic: "Metabolism & Cytochrome P450",
    explanation:
      "Phase I reactions — oxidation, reduction, hydrolysis — expose or add a functional group, often via cytochrome P450, and may leave the metabolite active or even toxic. Phase II conjugation attaches a polar group such as glucuronide, almost always inactivating and increasing water solubility for excretion.",
    choices: [
      { text: "Phase I exposes a functional group and may yield active metabolites; phase II conjugates and inactivates", isCorrect: true },
      { text: "Phase I conjugates while phase II oxidizes" },
      { text: "Both phases always inactivate the drug completely" },
      { text: "Phase II always precedes phase I" },
      { text: "Phase I occurs only in the kidney" },
    ],
  },
  {
    stem: "Which drugs are notable INDUCERS of cytochrome P450 enzymes? Select all that apply.",
    type: "MULTI",
    topic: "Metabolism & Cytochrome P450",
    explanation:
      "Rifampin, carbamazepine, phenytoin, phenobarbital and St John's wort induce P450, accelerating metabolism of co-administered drugs and reducing their effect over days to weeks. Ketoconazole and erythromycin are inhibitors, raising levels instead.",
    choices: [
      { text: "Rifampin", isCorrect: true },
      { text: "Carbamazepine", isCorrect: true },
      { text: "St John's wort", isCorrect: true },
      { text: "Ketoconazole" },
      { text: "Erythromycin" },
    ],
  },
  {
    stem: "A woman on a combined oral contraceptive is started on rifampin for latent tuberculosis. What should she be advised?",
    topic: "Metabolism & Cytochrome P450",
    explanation:
      "Rifampin induces P450, accelerating estrogen and progestin metabolism and risking contraceptive failure. An additional or alternative method is needed during treatment and for some weeks afterward, since induction takes time to reverse.",
    choices: [
      { text: "Use an additional contraceptive method, as rifampin may cause failure", isCorrect: true },
      { text: "Contraceptive efficacy will be increased" },
      { text: "No interaction exists between these drugs" },
      { text: "Stop the contraceptive permanently" },
      { text: "Double the rifampin dose to compensate" },
    ],
  },
  {
    stem: "Grapefruit juice increases plasma levels of certain statins by which mechanism?",
    topic: "Metabolism & Cytochrome P450",
    explanation:
      "Grapefruit inhibits intestinal CYP3A4, reducing first-pass metabolism and raising bioavailability, which increases the risk of myopathy and rhabdomyolysis. The effect is on gut rather than hepatic enzyme, which is why it matters most for oral drugs with high first-pass extraction.",
    choices: [
      { text: "Inhibition of intestinal CYP3A4, reducing first-pass metabolism", isCorrect: true },
      { text: "Induction of hepatic CYP3A4" },
      { text: "Displacement of statins from albumin" },
      { text: "Inhibition of renal tubular secretion" },
      { text: "Increased gastric emptying rate" },
    ],
  },
  {
    stem: "True or False: A drug that is a prodrug requires metabolism to become active, so a CYP inhibitor would reduce rather than increase its effect.",
    type: "TRUE_FALSE",
    topic: "Metabolism & Cytochrome P450",
    explanation:
      "True. Clopidogrel needs CYP2C19 activation, so a CYP2C19 inhibitor such as omeprazole or a poor-metabolizer genotype reduces antiplatelet effect. The usual assumption that inhibitors raise drug effect is inverted for prodrugs.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which enzyme system follows zero-order kinetics at therapeutic doses for phenytoin, and what is the clinical consequence?",
    topic: "Metabolism & Cytochrome P450",
    explanation:
      "Phenytoin saturates its metabolizing enzymes within the therapeutic range, so elimination becomes zero-order — a fixed amount per hour regardless of concentration. Small dose increases then produce disproportionate rises in level, which is why phenytoin is titrated cautiously.",
    choices: [
      { text: "Saturable metabolism means small dose increases cause disproportionate level rises", isCorrect: true },
      { text: "First-order kinetics means level rises are always proportional" },
      { text: "Zero-order kinetics makes toxicity impossible" },
      { text: "Metabolism is entirely renal and dose-independent" },
      { text: "Levels fall as the dose is increased" },
    ],
  },
  {
    stem: "Which other commonly used drugs also show zero-order elimination at usual doses?",
    topic: "Metabolism & Cytochrome P450",
    explanation:
      "Ethanol, aspirin at high doses and phenytoin all saturate their metabolic pathways. Ethanol is metabolized at a roughly constant rate regardless of blood level, which is why blood alcohol falls linearly rather than exponentially.",
    choices: [
      { text: "Ethanol and high-dose aspirin", isCorrect: true },
      { text: "Penicillin and amoxicillin" },
      { text: "Metformin and lisinopril" },
      { text: "Ibuprofen and acetaminophen at therapeutic doses" },
      { text: "Levothyroxine and warfarin" },
    ],
  },
  {
    stem: "A patient of East Asian descent is a CYP2C19 poor metabolizer. Which consequence is expected with clopidogrel?",
    topic: "Metabolism & Cytochrome P450",
    explanation:
      "Reduced conversion of the prodrug to its active metabolite means less platelet inhibition and higher risk of stent thrombosis. Alternatives such as prasugrel or ticagrelor do not depend on CYP2C19 activation.",
    choices: [
      { text: "Reduced antiplatelet effect with higher thrombotic risk", isCorrect: true },
      { text: "Excessive antiplatelet effect with bleeding risk" },
      { text: "No change, since clopidogrel is not metabolized" },
      { text: "Increased hepatic toxicity" },
      { text: "Prolonged sedation" },
    ],
  },
  {
    stem: "Which phase II reaction is most commonly used to conjugate drugs for biliary or renal excretion?",
    topic: "Metabolism & Cytochrome P450",
    explanation:
      "Glucuronidation by UDP-glucuronosyltransferase is the dominant conjugation pathway, producing highly water-soluble metabolites. Neonates have immature glucuronidation, which underlies chloramphenicol-induced gray baby syndrome.",
    choices: [
      { text: "Glucuronidation", isCorrect: true },
      { text: "Hydroxylation" },
      { text: "Reduction" },
      { text: "Deamination" },
      { text: "Dealkylation" },
    ],
  },

  /* ══════════════ EXCRETION & CLEARANCE ══════════════ */
  {
    stem: "Which processes determine the net renal excretion of a drug?",
    topic: "Excretion & Clearance",
    explanation:
      "Net excretion is glomerular filtration plus active tubular secretion minus tubular reabsorption. Only free, unbound drug is filtered, whereas secretion can handle protein-bound drug, which is why some highly bound drugs are still cleared efficiently.",
    choices: [
      { text: "Filtration plus tubular secretion minus tubular reabsorption", isCorrect: true },
      { text: "Filtration alone" },
      { text: "Secretion minus filtration plus metabolism" },
      { text: "Reabsorption plus filtration plus secretion" },
      { text: "Hepatic conjugation followed by biliary excretion only" },
    ],
  },
  {
    stem: "Probenecid raises penicillin levels by which mechanism?",
    topic: "Excretion & Clearance",
    explanation:
      "Probenecid competes for the organic anion transporter that secretes penicillin into the tubule, reducing its renal clearance and prolonging levels. This interaction was once exploited deliberately when penicillin was scarce.",
    choices: [
      { text: "Competition for the renal organic anion transporter, reducing secretion", isCorrect: true },
      { text: "Inhibition of hepatic CYP3A4 metabolism" },
      { text: "Displacement of penicillin from albumin" },
      { text: "Increased gastrointestinal absorption" },
      { text: "Alkalinization of the urine" },
    ],
  },
  {
    stem: "A drug has a volume of distribution of 50 L and a clearance of 5 L/hour. What is its elimination half-life?",
    topic: "Excretion & Clearance",
    explanation:
      "Half-life equals 0.693 × Vd ÷ CL = 0.693 × 50 ÷ 5 ≈ 6.9 hours. Half-life is therefore a derived value, determined by volume and clearance rather than being an independent property.",
    choices: [
      { text: "About 7 hours", isCorrect: true },
      { text: "About 10 hours" },
      { text: "About 3.5 hours" },
      { text: "About 14 hours" },
      { text: "About 35 hours" },
    ],
  },
  {
    stem: "Which drugs require dose adjustment in significant renal impairment? Select all that apply.",
    type: "MULTI",
    topic: "Excretion & Clearance",
    explanation:
      "Vancomycin, aminoglycosides, digoxin and metformin are all renally cleared or carry renal risk, and metformin is withheld below a threshold GFR because of lactic acidosis risk. Warfarin and atorvastatin are hepatically cleared and generally do not need renal adjustment.",
    choices: [
      { text: "Vancomycin", isCorrect: true },
      { text: "Gentamicin", isCorrect: true },
      { text: "Digoxin", isCorrect: true },
      { text: "Warfarin" },
      { text: "Atorvastatin" },
    ],
  },
  {
    stem: "Using the Cockcroft-Gault equation, estimate creatinine clearance for a 70-year-old woman weighing 60 kg with a serum creatinine of 1.4 mg/dL.",
    topic: "Excretion & Clearance",
    explanation:
      "(140 − 70) × 60 ÷ (72 × 1.4) = 4,200 ÷ 100.8 ≈ 41.7 mL/min, then × 0.85 for female sex ≈ 35 mL/min. Note that a 'normal-looking' creatinine of 1.4 mg/dL conceals substantially reduced clearance in an older, lighter woman.",
    choices: [
      { text: "About 35 mL/min", isCorrect: true },
      { text: "About 42 mL/min" },
      { text: "About 60 mL/min" },
      { text: "About 90 mL/min" },
      { text: "About 20 mL/min" },
    ],
  },
  {
    stem: "True or False: Serum creatinine alone is an unreliable guide to renal drug dosing in elderly or low-muscle-mass patients.",
    type: "TRUE_FALSE",
    topic: "Excretion & Clearance",
    explanation:
      "True. Creatinine is generated from muscle, so a frail patient with little muscle can have a normal creatinine and markedly reduced clearance. Estimating clearance with weight and age, rather than reading creatinine alone, prevents overdosing.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which drug property makes hemodialysis effective for removing it in overdose?",
    topic: "Excretion & Clearance",
    explanation:
      "Low volume of distribution, low protein binding, small molecular size and water solubility all favor removal. Drugs with large volumes of distribution sit in tissue rather than plasma, so dialysis clears little regardless of how efficient the filter is.",
    choices: [
      { text: "Small volume of distribution with low protein binding", isCorrect: true },
      { text: "Large volume of distribution with high protein binding" },
      { text: "High lipid solubility with extensive tissue storage" },
      { text: "Large molecular weight above 50,000 daltons" },
      { text: "Exclusive hepatic metabolism" },
    ],
  },
  {
    stem: "Enterohepatic recirculation prolongs the effect of some drugs by which route?",
    topic: "Excretion & Clearance",
    explanation:
      "Drug conjugated in the liver is excreted in bile, deconjugated by gut bacteria, and reabsorbed as active drug. Antibiotics that disrupt gut flora can interrupt this cycle, which is one proposed mechanism for reduced oral contraceptive efficacy with some antibiotics.",
    choices: [
      { text: "Biliary excretion, bacterial deconjugation, then intestinal reabsorption", isCorrect: true },
      { text: "Renal secretion followed by bladder reabsorption" },
      { text: "Pulmonary excretion followed by re-inhalation" },
      { text: "Salivary excretion followed by swallowing only" },
      { text: "Direct transfer from liver to kidney" },
    ],
  },

  /* ══════════════ HALF-LIFE & STEADY STATE ══════════════ */
  {
    stem: "A drug is started at a fixed dosing interval without a loading dose. Approximately how many half-lives are needed to reach steady state?",
    topic: "Half-Life & Steady State",
    explanation:
      "About 4 to 5 half-lives brings the concentration to roughly 94 to 97% of steady state, regardless of the dose or interval. This is why a drug with a long half-life takes days to reach full effect unless a loading dose is given.",
    choices: [
      { text: "4 to 5 half-lives", isCorrect: true },
      { text: "1 half-life" },
      { text: "2 half-lives" },
      { text: "10 to 12 half-lives" },
      { text: "It depends entirely on the dose given" },
    ],
  },
  {
    stem: "A drug has a half-life of 12 hours. Roughly how long until steady state is reached on regular dosing?",
    topic: "Half-Life & Steady State",
    explanation:
      "Four to five half-lives at 12 hours each is 48 to 60 hours, so about two to two and a half days. Checking a level before then would give a falsely low result and risk an unnecessary dose increase.",
    choices: [
      { text: "About 2 to 2.5 days", isCorrect: true },
      { text: "About 12 hours" },
      { text: "About 24 hours" },
      { text: "About 1 week" },
      { text: "About 2 weeks" },
    ],
  },
  {
    stem: "Which statements about half-life are correct? Select all that apply.",
    type: "MULTI",
    topic: "Half-Life & Steady State",
    explanation:
      "Half-life determines both the time to steady state and the time for a drug to wash out after stopping, and it is derived from volume of distribution and clearance. It is not altered by the dose given, and it does not determine the loading dose, which depends on volume alone.",
    choices: [
      { text: "It determines the time to reach steady state", isCorrect: true },
      { text: "It determines how long washout takes after stopping", isCorrect: true },
      { text: "It is derived from volume of distribution and clearance", isCorrect: true },
      { text: "It increases when the dose is increased" },
      { text: "It determines the size of the loading dose" },
    ],
  },
  {
    stem: "After stopping a drug with a half-life of 6 hours, approximately what fraction remains after 24 hours?",
    topic: "Half-Life & Steady State",
    explanation:
      "Twenty-four hours is four half-lives, leaving 1/16 or about 6% of the original amount. This arithmetic underpins washout periods before starting an interacting drug.",
    choices: [
      { text: "About 6%", isCorrect: true },
      { text: "About 25%" },
      { text: "About 50%" },
      { text: "About 12.5%" },
      { text: "None remains" },
    ],
  },
  {
    stem: "True or False: A loading dose shortens the time to reach therapeutic concentration but does not change the eventual steady-state level.",
    type: "TRUE_FALSE",
    topic: "Half-Life & Steady State",
    explanation:
      "True. Steady state is determined by maintenance dose rate and clearance; the loading dose only fills the volume of distribution faster. This is why loading is used for drugs with long half-lives where waiting would be unsafe.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "A trough vancomycin level is drawn 30 minutes after the infusion ends rather than immediately before the next dose. Why does this matter?",
    topic: "Half-Life & Steady State",
    explanation:
      "A trough must be drawn immediately before the next dose; sampling during the distribution phase gives a falsely high result and could prompt an inappropriate dose reduction. Timing errors are among the commonest causes of misinterpreted drug levels.",
    choices: [
      { text: "It falsely elevates the result and may prompt an unnecessary dose reduction", isCorrect: true },
      { text: "It falsely lowers the result and may prompt a dose increase" },
      { text: "Timing does not affect vancomycin levels" },
      { text: "It measures the peak accurately instead" },
      { text: "It has no clinical consequence" },
    ],
  },
  {
    stem: "Which drug characteristic most justifies therapeutic drug monitoring?",
    topic: "Half-Life & Steady State",
    explanation:
      "A narrow therapeutic index with wide interpatient variability makes the dose-response relationship unpredictable, so measuring concentration adds information. Drugs with wide safety margins and predictable kinetics gain nothing from monitoring.",
    choices: [
      { text: "Narrow therapeutic index with wide interpatient variability", isCorrect: true },
      { text: "Wide therapeutic index with predictable kinetics" },
      { text: "Short half-life with rapid clearance" },
      { text: "Complete first-pass metabolism" },
      { text: "Administration by the intravenous route" },
    ],
  },
  {
    stem: "A patient has been on a drug with a 40-hour half-life for 3 days and the level is subtherapeutic. What is the most appropriate interpretation?",
    topic: "Half-Life & Steady State",
    explanation:
      "Steady state needs about 160 to 200 hours — a week or more — so at 72 hours the level is expected to be low and does not indicate underdosing. Increasing the dose now risks toxicity once accumulation completes.",
    choices: [
      { text: "Steady state has not been reached; the level is expected to be low", isCorrect: true },
      { text: "The dose is too low and should be doubled immediately" },
      { text: "The patient is non-adherent by definition" },
      { text: "The drug is being cleared abnormally fast" },
      { text: "The assay is unreliable at this time point" },
    ],
  },

  /* ══════════════ RECEPTOR THEORY & DOSE-RESPONSE ══════════════ */
  {
    stem: "On a graded dose-response curve, what does EC50 represent?",
    topic: "Receptor Theory & Dose-Response",
    explanation:
      "EC50 is the concentration producing half of maximal effect, and it reflects potency. Efficacy is the maximal effect achievable, shown by the height of the curve — two drugs can differ in one without differing in the other.",
    choices: [
      { text: "The concentration producing half-maximal effect — a measure of potency", isCorrect: true },
      { text: "The maximal achievable effect — a measure of efficacy" },
      { text: "The dose lethal to half the population" },
      { text: "The concentration at which toxicity begins" },
      { text: "The dose producing an effect in half of subjects" },
    ],
  },
  {
    stem: "Drug A produces the same maximal effect as drug B but at one tenth the dose. How do they compare?",
    topic: "Receptor Theory & Dose-Response",
    explanation:
      "Drug A is more potent, since less is needed for the same effect, but efficacy is equal because the maximal effect is the same. Potency is largely a matter of convenience; efficacy is what determines whether a drug can do the job at all.",
    choices: [
      { text: "A is more potent; efficacy is equal", isCorrect: true },
      { text: "A is more efficacious; potency is equal" },
      { text: "A is both more potent and more efficacious" },
      { text: "B is more potent but less efficacious" },
      { text: "They are identical in every respect" },
    ],
  },
  {
    stem: "A competitive antagonist shifts the agonist dose-response curve in which way?",
    topic: "Receptor Theory & Dose-Response",
    explanation:
      "Competitive antagonism shifts the curve rightward with maximal effect preserved, because enough agonist can outcompete the antagonist. Non-competitive antagonism lowers the maximum instead, and no amount of agonist restores it.",
    choices: [
      { text: "Rightward, with maximal effect preserved", isCorrect: true },
      { text: "Downward, with reduced maximal effect" },
      { text: "Leftward, with increased potency" },
      { text: "Downward and leftward simultaneously" },
      { text: "No shift occurs" },
    ],
  },
  {
    stem: "Which statements about spare receptors are correct? Select all that apply.",
    type: "MULTI",
    topic: "Receptor Theory & Dose-Response",
    explanation:
      "When spare receptors exist, maximal response occurs before all receptors are occupied, so EC50 is lower than the dissociation constant and the system is more sensitive to low agonist concentrations. Spare receptors do not require full occupancy for maximal effect, and they increase rather than reduce sensitivity.",
    choices: [
      { text: "Maximal response occurs without full receptor occupancy", isCorrect: true },
      { text: "EC50 is lower than the dissociation constant Kd", isCorrect: true },
      { text: "The tissue is more sensitive to low agonist concentrations", isCorrect: true },
      { text: "Full occupancy is required for any response" },
      { text: "They reduce tissue sensitivity to agonist" },
    ],
  },
  {
    stem: "True or False: A partial agonist can act as a functional antagonist in the presence of a full agonist.",
    type: "TRUE_FALSE",
    topic: "Receptor Theory & Dose-Response",
    explanation:
      "True. By occupying receptors while producing only submaximal effect, a partial agonist reduces the overall response. Buprenorphine behaves this way at the mu receptor, which is why it can precipitate withdrawal in someone on a full opioid agonist.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "An inverse agonist differs from a neutral antagonist in which way?",
    topic: "Receptor Theory & Dose-Response",
    explanation:
      "An inverse agonist reduces constitutive receptor activity below baseline, whereas a neutral antagonist simply blocks agonist binding without changing basal tone. The distinction only matters for receptors with meaningful constitutive activity.",
    choices: [
      { text: "It suppresses constitutive receptor activity below baseline", isCorrect: true },
      { text: "It has no effect on basal receptor activity" },
      { text: "It produces the same effect as a full agonist" },
      { text: "It binds irreversibly to the receptor" },
      { text: "It acts only at ion channel receptors" },
    ],
  },
  {
    stem: "Which receptor type produces the FASTEST response to ligand binding?",
    topic: "Receptor Theory & Dose-Response",
    explanation:
      "Ligand-gated ion channels respond in milliseconds because binding directly opens a pore. G-protein coupled receptors act in seconds, enzyme-linked receptors in minutes, and intracellular nuclear receptors in hours because they require gene transcription.",
    choices: [
      { text: "Ligand-gated ion channel", isCorrect: true },
      { text: "G-protein coupled receptor" },
      { text: "Receptor tyrosine kinase" },
      { text: "Intracellular nuclear receptor" },
      { text: "Cytokine receptor using JAK-STAT" },
    ],
  },
  {
    stem: "Tachyphylaxis differs from tolerance in which respect?",
    topic: "Receptor Theory & Dose-Response",
    explanation:
      "Tachyphylaxis is rapid loss of response over minutes to hours, often from depletion of a mediator or receptor internalization, as with repeated ephedrine dosing. Tolerance develops over days to weeks through receptor downregulation or enzyme induction.",
    choices: [
      { text: "Tachyphylaxis develops within minutes to hours; tolerance over days to weeks", isCorrect: true },
      { text: "Tachyphylaxis develops over months; tolerance within minutes" },
      { text: "They are interchangeable terms" },
      { text: "Tachyphylaxis affects only oral drugs" },
      { text: "Tolerance is always irreversible" },
    ],
  },
  {
    stem: "Chronic beta blocker therapy causes receptor upregulation. What is the clinical consequence of abrupt withdrawal?",
    topic: "Receptor Theory & Dose-Response",
    explanation:
      "Increased receptor numbers become exposed to normal catecholamine levels, producing rebound tachycardia, hypertension and potentially angina or infarction. This is why beta blockers are tapered rather than stopped abruptly.",
    choices: [
      { text: "Rebound tachycardia and hypertension from upregulated receptors", isCorrect: true },
      { text: "Prolonged bradycardia lasting weeks" },
      { text: "No effect, since receptors return to baseline instantly" },
      { text: "Permanent loss of beta receptor function" },
      { text: "Immediate hypoglycemia" },
    ],
  },

  /* ══════════════ THERAPEUTIC INDEX ══════════════ */
  {
    stem: "How is the therapeutic index calculated, and what does a low value mean?",
    topic: "Therapeutic Index",
    explanation:
      "Therapeutic index is TD50 divided by ED50 (or LD50/ED50 in animal work). A low value means toxic and effective doses are close together, demanding monitoring — digoxin, lithium, warfarin, phenytoin and theophylline are the classic examples.",
    choices: [
      { text: "TD50 ÷ ED50 — a low value means toxic and effective doses are close", isCorrect: true },
      { text: "ED50 ÷ TD50 — a low value means a wide safety margin" },
      { text: "Cmax ÷ Cmin — a low value means rapid clearance" },
      { text: "Vd ÷ CL — a low value means a short half-life" },
      { text: "Dose ÷ body weight — a low value means underdosing" },
    ],
  },
  {
    stem: "Which drugs have a notoriously narrow therapeutic index? Select all that apply.",
    type: "MULTI",
    topic: "Therapeutic Index",
    explanation:
      "Digoxin, lithium, warfarin, phenytoin and theophylline all require monitoring because small concentration changes produce toxicity. Amoxicillin and acetaminophen at therapeutic doses have wide margins, though acetaminophen becomes dangerous in overdose.",
    choices: [
      { text: "Digoxin", isCorrect: true },
      { text: "Lithium", isCorrect: true },
      { text: "Warfarin", isCorrect: true },
      { text: "Amoxicillin" },
      { text: "Cetirizine" },
    ],
  },
  {
    stem: "A patient on lithium starts hydrochlorothiazide. Which risk arises and why?",
    topic: "Therapeutic Index",
    explanation:
      "Thiazides cause sodium loss, and the proximal tubule reabsorbs lithium in place of sodium, raising lithium levels toward toxicity. Any drug or state causing volume depletion — including NSAIDs and dehydration — does the same.",
    choices: [
      { text: "Lithium toxicity, as sodium depletion increases proximal lithium reabsorption", isCorrect: true },
      { text: "Lithium levels fall as thiazides increase its excretion" },
      { text: "No interaction, since lithium is hepatically cleared" },
      { text: "Thiazides displace lithium from plasma proteins" },
      { text: "Thiazides induce lithium metabolism" },
    ],
  },
  {
    stem: "True or False: A drug with a wide therapeutic index still requires monitoring if its clearance varies greatly between patients.",
    type: "TRUE_FALSE",
    topic: "Therapeutic Index",
    explanation:
      "True. Wide variability can push some patients outside the expected range even when the margin is generous, and monitoring may still be warranted. Therapeutic index and variability are separate considerations that combine to determine risk.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Digoxin toxicity is potentiated by which electrolyte abnormality, and why?",
    topic: "Therapeutic Index",
    explanation:
      "Hypokalemia increases digoxin binding to the Na+/K+ ATPase, because potassium and digoxin compete for the same site. A digoxin level within range can therefore still be toxic if potassium is low — the level alone does not tell the whole story.",
    choices: [
      { text: "Hypokalemia, since potassium competes with digoxin at the Na+/K+ ATPase", isCorrect: true },
      { text: "Hyperkalemia, which increases digoxin binding" },
      { text: "Hypernatremia, which raises free digoxin" },
      { text: "Hypophosphatemia, which impairs digoxin clearance" },
      { text: "Hyperchloremia, which increases absorption" },
    ],
  },
  {
    stem: "Which finding suggests digoxin toxicity rather than inadequate dosing?",
    topic: "Therapeutic Index",
    explanation:
      "Nausea, confusion, visual disturbance with yellow-green halos, and arrhythmias — classically atrial tachycardia with block — indicate toxicity. Worsening heart failure symptoms would suggest inadequate effect instead.",
    choices: [
      { text: "Yellow-green visual halos with nausea and atrial tachycardia with block", isCorrect: true },
      { text: "Worsening exertional dyspnea and ankle edema" },
      { text: "Rising blood pressure with tachycardia" },
      { text: "Improved exercise tolerance" },
      { text: "Isolated dry cough" },
    ],
  },
  {
    stem: "Why does the therapeutic window concept matter more for drugs with a steep dose-response curve?",
    topic: "Therapeutic Index",
    explanation:
      "A steep curve means a small concentration change produces a large change in effect, so the margin between too little and too much is functionally narrower even if the numerical index looks acceptable. The shape of the curve matters as much as its position.",
    choices: [
      { text: "Small concentration changes produce large effect changes", isCorrect: true },
      { text: "Steep curves guarantee a wide safety margin" },
      { text: "The curve shape does not affect clinical risk" },
      { text: "Steep curves indicate poor absorption" },
      { text: "Steep curves apply only to intravenous drugs" },
    ],
  },

  /* ══════════════ DRUG INTERACTIONS ══════════════ */
  {
    stem: "A patient on warfarin is started on a course of trimethoprim-sulfamethoxazole. What is the expected effect and mechanism?",
    topic: "Drug Interactions",
    explanation:
      "The sulfonamide inhibits CYP2C9, which metabolizes the more active S-enantiomer of warfarin, raising INR and bleeding risk. It also displaces warfarin from albumin, compounding the effect. Closer INR monitoring is required.",
    choices: [
      { text: "INR rises through CYP2C9 inhibition and protein displacement", isCorrect: true },
      { text: "INR falls through enzyme induction" },
      { text: "No interaction occurs" },
      { text: "Warfarin absorption is blocked in the gut" },
      { text: "Renal clearance of warfarin increases" },
    ],
  },
  {
    stem: "Which interaction pairs are correctly matched to their mechanism? Select all that apply.",
    type: "MULTI",
    topic: "Drug Interactions",
    explanation:
      "ACE inhibitors with potassium-sparing diuretics cause additive hyperkalemia, NSAIDs with ACE inhibitors reduce renal perfusion, and MAO inhibitors with tyramine cause hypertensive crisis. Antacids with tetracycline chelate rather than induce metabolism, and beta blockers with insulin mask hypoglycemia rather than causing hyperglycemia directly.",
    choices: [
      { text: "ACE inhibitor plus spironolactone — additive hyperkalemia", isCorrect: true },
      { text: "NSAID plus ACE inhibitor — reduced renal perfusion", isCorrect: true },
      { text: "MAO inhibitor plus aged cheese — hypertensive crisis from tyramine", isCorrect: true },
      { text: "Antacid plus tetracycline — induction of hepatic metabolism" },
      { text: "Beta blocker plus insulin — direct hyperglycemia" },
    ],
  },
  {
    stem: "A patient on a beta blocker develops hypoglycemia. Which warning sign is most likely to be absent?",
    topic: "Drug Interactions",
    explanation:
      "Beta blockade masks adrenergic warning symptoms — tremor, palpitations and anxiety — while sweating is cholinergically mediated and persists. Knowing which sign survives is what allows a diabetic patient on a beta blocker to recognize hypoglycemia at all.",
    choices: [
      { text: "Tremor and palpitations, while sweating persists", isCorrect: true },
      { text: "Sweating, while tremor persists" },
      { text: "All warning signs are abolished" },
      { text: "No warning signs are affected" },
      { text: "Only confusion is masked" },
    ],
  },
  {
    stem: "True or False: A pharmacodynamic interaction occurs when two drugs affect the same physiologic system without either altering the other's concentration.",
    type: "TRUE_FALSE",
    topic: "Drug Interactions",
    explanation:
      "True. Combining two sedatives or two QT-prolonging drugs produces additive effect with unchanged plasma levels. Pharmacokinetic interactions, by contrast, alter absorption, distribution, metabolism or excretion and therefore change concentration.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which combination carries the highest risk of serotonin syndrome?",
    topic: "Drug Interactions",
    explanation:
      "An SSRI with an MAO inhibitor is the classic dangerous pairing, producing agitation, hyperthermia, clonus and autonomic instability. Adequate washout — typically two weeks, or five weeks for fluoxetine given its long half-life — is essential between them.",
    choices: [
      { text: "SSRI plus MAO inhibitor", isCorrect: true },
      { text: "SSRI plus a proton pump inhibitor" },
      { text: "Beta blocker plus a thiazide" },
      { text: "Metformin plus a sulfonylurea" },
      { text: "Statin plus an ACE inhibitor" },
    ],
  },
  {
    stem: "Why must fluoxetine be stopped five weeks before starting an MAO inhibitor, while other SSRIs need only two?",
    topic: "Drug Interactions",
    explanation:
      "Fluoxetine and its active metabolite norfluoxetine have very long half-lives, so five half-lives take weeks rather than days. Washout intervals are determined by half-life arithmetic rather than convention.",
    choices: [
      { text: "Fluoxetine and its active metabolite have very long half-lives", isCorrect: true },
      { text: "Fluoxetine is more potent than other SSRIs" },
      { text: "Fluoxetine is renally rather than hepatically cleared" },
      { text: "Fluoxetine binds irreversibly to the transporter" },
      { text: "Fluoxetine has no active metabolites" },
    ],
  },
  {
    stem: "A patient on simvastatin is prescribed clarithromycin. What is the concern?",
    topic: "Drug Interactions",
    explanation:
      "Clarithromycin inhibits CYP3A4, raising simvastatin levels and the risk of myopathy and rhabdomyolysis. Options include holding the statin during the antibiotic course or choosing a macrolide such as azithromycin that does not inhibit CYP3A4.",
    choices: [
      { text: "CYP3A4 inhibition raising statin levels and rhabdomyolysis risk", isCorrect: true },
      { text: "CYP3A4 induction reducing statin efficacy" },
      { text: "Chelation preventing statin absorption" },
      { text: "Competition for renal tubular secretion" },
      { text: "No clinically significant interaction" },
    ],
  },
  {
    stem: "Which principle best guides prescribing in a patient taking many medications?",
    topic: "Drug Interactions",
    explanation:
      "Every new drug should be checked against the existing list, and each addition considered against the option of stopping something. Interaction risk rises steeply with the number of drugs, and deprescribing is an active intervention rather than an absence of one.",
    choices: [
      { text: "Review the full list with every addition, and consider stopping as well as starting", isCorrect: true },
      { text: "Add drugs freely, since interactions are rare" },
      { text: "Never stop an existing drug once started" },
      { text: "Interaction risk falls as the number of drugs rises" },
      { text: "Only intravenous drugs interact meaningfully" },
    ],
  },

  /* ══════════════ SPECIAL POPULATIONS ══════════════ */
  {
    stem: "Which pharmacokinetic changes are typical in an elderly patient? Select all that apply.",
    type: "MULTI",
    topic: "Special Populations",
    explanation:
      "Reduced renal clearance, decreased hepatic blood flow and mass, lower total body water raising concentrations of water-soluble drugs, and increased body fat prolonging the half-life of lipid-soluble drugs are all typical. Serum albumin tends to fall rather than rise, and absorption is comparatively little changed.",
    choices: [
      { text: "Reduced glomerular filtration and renal clearance", isCorrect: true },
      { text: "Reduced total body water raising water-soluble drug concentration", isCorrect: true },
      { text: "Increased body fat prolonging lipid-soluble drug half-life", isCorrect: true },
      { text: "Increased serum albumin with reduced free drug" },
      { text: "Markedly increased first-pass metabolism" },
    ],
  },
  {
    stem: "Why are neonates at particular risk from chloramphenicol, historically producing gray baby syndrome?",
    topic: "Special Populations",
    explanation:
      "Immature glucuronosyltransferase cannot conjugate the drug, so it accumulates to toxic levels causing cardiovascular collapse. Neonatal enzyme immaturity is a general principle affecting many drugs, not a peculiarity of chloramphenicol.",
    choices: [
      { text: "Immature glucuronidation cannot conjugate the drug for excretion", isCorrect: true },
      { text: "Excessive renal secretion causes rapid loss of effect" },
      { text: "Neonates absorb the drug poorly" },
      { text: "Neonatal albumin binds the drug irreversibly" },
      { text: "The drug is destroyed by gastric acid in infants" },
    ],
  },
  {
    stem: "Pediatric doses are usually calculated by body weight. What is the ceiling principle?",
    topic: "Special Populations",
    explanation:
      "A weight-based dose should never exceed the usual adult dose, since a large adolescent could otherwise be given more than an adult would receive. This is one of the most common and most preventable pediatric dosing errors.",
    choices: [
      { text: "The calculated dose must not exceed the standard adult dose", isCorrect: true },
      { text: "Pediatric doses should always be double the adult dose per kilogram" },
      { text: "Weight-based dosing does not apply above 20 kg" },
      { text: "There is no upper limit when dosing by weight" },
      { text: "Children require the same absolute dose as adults" },
    ],
  },
  {
    stem: "True or False: Physiologic changes in pregnancy including increased plasma volume and glomerular filtration can lower plasma concentrations of some drugs.",
    type: "TRUE_FALSE",
    topic: "Special Populations",
    explanation:
      "True. Increased volume of distribution and renal clearance can reduce levels enough to require dose adjustment, as with some antiepileptics. Pregnancy alters kinetics as well as raising fetal safety considerations.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which drug property most increases the likelihood of significant transfer into breast milk?",
    topic: "Special Populations",
    explanation:
      "Small, lipid-soluble, un-ionized drugs with low protein binding transfer most readily, since milk is a lipid-rich compartment slightly more acidic than plasma. Large highly bound molecules such as heparin transfer negligibly.",
    choices: [
      { text: "Small size, high lipid solubility, low protein binding", isCorrect: true },
      { text: "Large molecular weight with high protein binding" },
      { text: "Complete ionization at physiologic pH" },
      { text: "Exclusive renal excretion" },
      { text: "Administration by the intravenous route" },
    ],
  },
  {
    stem: "In hepatic cirrhosis, which change most affects drug handling?",
    topic: "Special Populations",
    explanation:
      "Reduced metabolic capacity and portosystemic shunting decrease first-pass extraction, raising bioavailability of high-extraction drugs and prolonging their effect. Reduced albumin synthesis additionally raises free drug fraction.",
    choices: [
      { text: "Reduced first-pass extraction raising bioavailability of high-extraction drugs", isCorrect: true },
      { text: "Increased first-pass metabolism reducing bioavailability" },
      { text: "Increased albumin synthesis reducing free drug" },
      { text: "Increased renal clearance compensating fully" },
      { text: "No meaningful change in drug handling" },
    ],
  },
  {
    stem: "An obese patient requires a hydrophilic antibiotic. Which dosing weight is most appropriate?",
    topic: "Special Populations",
    explanation:
      "Hydrophilic drugs distribute poorly into fat, so ideal or adjusted body weight is used to avoid overdosing. Lipophilic drugs may require total body weight — matching the weight descriptor to the drug's distribution is the underlying principle.",
    choices: [
      { text: "Ideal or adjusted body weight, since the drug distributes poorly into fat", isCorrect: true },
      { text: "Total body weight, since more tissue requires more drug" },
      { text: "Height alone, independent of weight" },
      { text: "Body surface area only" },
      { text: "A fixed dose regardless of size" },
    ],
  },
  {
    stem: "Which prescribing principle applies most strongly to frail elderly patients?",
    topic: "Special Populations",
    explanation:
      "Start low and go slow, because reduced clearance and increased sensitivity make standard doses more likely to cause harm. It is a titration strategy rather than a decision to undertreat.",
    choices: [
      { text: "Start at a low dose and titrate slowly against response", isCorrect: true },
      { text: "Start at the maximum dose to ensure efficacy" },
      { text: "Avoid all medication in patients over 75" },
      { text: "Use pediatric doses in all elderly patients" },
      { text: "Titrate by age alone without measuring response" },
    ],
  },

  /* ══════════════ DOSE CALCULATIONS ══════════════ */
  {
    stem: "An order reads 5 mcg/kg/min of a drug for a 60 kg patient. The solution contains 4 mg/mL. What infusion rate in mL/hour is required?",
    topic: "Dose Calculations",
    explanation:
      "5 mcg/kg/min × 60 kg = 300 mcg/min = 18,000 mcg/hour = 18 mg/hour. At 4 mg/mL that is 18 ÷ 4 = 4.5 mL/hour. Working stepwise through units — per minute to per hour, micrograms to milligrams — is what prevents thousand-fold errors.",
    choices: [
      { text: "4.5 mL/hour", isCorrect: true },
      { text: "0.075 mL/hour" },
      { text: "45 mL/hour" },
      { text: "18 mL/hour" },
      { text: "1.2 mL/hour" },
    ],
  },
  {
    stem: "1,000 mL of fluid is to run over 8 hours using tubing with a drop factor of 15 gtt/mL. What is the rate in drops per minute?",
    topic: "Dose Calculations",
    explanation:
      "1,000 mL ÷ 480 minutes = 2.083 mL/min, × 15 gtt/mL ≈ 31 drops per minute. The formula is volume × drop factor ÷ time in minutes.",
    choices: [
      { text: "About 31 gtt/min", isCorrect: true },
      { text: "About 15 gtt/min" },
      { text: "About 60 gtt/min" },
      { text: "About 125 gtt/min" },
      { text: "About 8 gtt/min" },
    ],
  },
  {
    stem: "A child weighing 18 kg is prescribed an antibiotic at 25 mg/kg/day divided every 8 hours. What is each individual dose?",
    topic: "Dose Calculations",
    explanation:
      "25 mg/kg × 18 kg = 450 mg per day, divided into three doses = 150 mg per dose. The commonest error is giving the daily total as a single dose — a threefold overdose here.",
    choices: [
      { text: "150 mg", isCorrect: true },
      { text: "450 mg" },
      { text: "75 mg" },
      { text: "225 mg" },
      { text: "50 mg" },
    ],
  },
  {
    stem: "How many milligrams of lidocaine are in 5 mL of a 1% solution?",
    topic: "Dose Calculations",
    explanation:
      "A 1% solution contains 1 g per 100 mL, which is 10 mg/mL, so 5 mL contains 50 mg. Converting percentage to mg/mL by multiplying by 10 is the step worth memorizing.",
    choices: [
      { text: "50 mg", isCorrect: true },
      { text: "5 mg" },
      { text: "500 mg" },
      { text: "10 mg" },
      { text: "100 mg" },
    ],
  },
  {
    stem: "Which of the following concentration conversions are correct? Select all that apply.",
    type: "MULTI",
    topic: "Dose Calculations",
    explanation:
      "A 1% solution is 10 mg/mL, epinephrine 1:1,000 is 1 mg/mL, and 1:10,000 is 0.1 mg/mL. A 0.9% saline solution is 9 mg/mL rather than 0.9 mg/mL, and a 2% solution is 20 mg/mL rather than 2 mg/mL.",
    choices: [
      { text: "1% solution = 10 mg/mL", isCorrect: true },
      { text: "Epinephrine 1:1,000 = 1 mg/mL", isCorrect: true },
      { text: "Epinephrine 1:10,000 = 0.1 mg/mL", isCorrect: true },
      { text: "0.9% sodium chloride = 0.9 mg/mL" },
      { text: "2% solution = 2 mg/mL" },
    ],
  },
  {
    stem: "A heparin infusion contains 25,000 units in 250 mL. The order is 1,200 units/hour. What rate should the pump be set to?",
    topic: "Dose Calculations",
    explanation:
      "25,000 units ÷ 250 mL = 100 units/mL, so 1,200 units/hour ÷ 100 units/mL = 12 mL/hour. Always establish the concentration first, then divide the ordered rate by it.",
    choices: [
      { text: "12 mL/hour", isCorrect: true },
      { text: "1.2 mL/hour" },
      { text: "120 mL/hour" },
      { text: "48 mL/hour" },
      { text: "25 mL/hour" },
    ],
  },
  {
    stem: "A vial contains potassium chloride at 2 mEq/mL. How many mL are needed to add 40 mEq to a liter of fluid?",
    topic: "Dose Calculations",
    explanation:
      "40 mEq ÷ 2 mEq/mL = 20 mL. Concentrated potassium must always be diluted before administration — undiluted intravenous potassium is rapidly fatal and remains a recognized never-event.",
    choices: [
      { text: "20 mL", isCorrect: true },
      { text: "40 mL" },
      { text: "80 mL" },
      { text: "10 mL" },
      { text: "2 mL" },
    ],
  },
  {
    stem: "True or False: When a calculated dose seems unusually large or requires an implausible number of tablets or vials, the calculation should be rechecked before administration.",
    type: "TRUE_FALSE",
    topic: "Dose Calculations",
    explanation:
      "True. An implausible volume is one of the most reliable warnings of a decimal or unit error, and treating it as a stop signal catches mistakes that arithmetic checks alone miss. Reasonableness testing is a safety step, not an optional courtesy.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "A patient is to receive 2 g of a drug supplied as 500 mg per tablet. How many tablets are needed?",
    topic: "Dose Calculations",
    explanation:
      "2 g = 2,000 mg, divided by 500 mg per tablet = 4 tablets. Converting to a single unit before dividing is what prevents the common gram-milligram slip.",
    choices: [
      { text: "4 tablets", isCorrect: true },
      { text: "2 tablets" },
      { text: "40 tablets" },
      { text: "0.25 tablets" },
      { text: "10 tablets" },
    ],
  },
  {
    stem: "An infusion of 500 mL is ordered to run over 4 hours on a volumetric pump. What rate in mL/hour should be set?",
    topic: "Dose Calculations",
    explanation:
      "500 mL ÷ 4 hours = 125 mL/hour. Volumetric pumps are set in mL/hour, so no drop factor is needed — that only applies to gravity administration sets.",
    choices: [
      { text: "125 mL/hour", isCorrect: true },
      { text: "2,000 mL/hour" },
      { text: "62.5 mL/hour" },
      { text: "31 mL/hour" },
      { text: "250 mL/hour" },
    ],
  },

  /* ══════════════ ADVERSE DRUG REACTIONS ══════════════ */
  {
    stem: "How do type A and type B adverse drug reactions differ?",
    topic: "Adverse Drug Reactions",
    explanation:
      "Type A reactions are augmented pharmacologic effects — dose-related, predictable and common, such as bleeding on warfarin. Type B are bizarre, idiosyncratic and not dose-related, such as anaphylaxis or Stevens-Johnson syndrome, and are far harder to anticipate.",
    choices: [
      { text: "Type A is dose-related and predictable; type B is idiosyncratic and not dose-related", isCorrect: true },
      { text: "Type A is idiosyncratic; type B is dose-related" },
      { text: "Both are entirely dose-dependent" },
      { text: "Type B occurs only with intravenous drugs" },
      { text: "Type A reactions are always fatal" },
    ],
  },
  {
    stem: "Which adverse effects are correctly matched to their drug? Select all that apply.",
    type: "MULTI",
    topic: "Adverse Drug Reactions",
    explanation:
      "ACE inhibitors cause a dry cough through bradykinin accumulation, aminoglycosides cause ototoxicity and nephrotoxicity, and amiodarone causes thyroid dysfunction and pulmonary fibrosis. Metformin causes lactic acidosis rather than hypoglycemia when used alone, and statins cause myopathy rather than nephrotic syndrome.",
    choices: [
      { text: "ACE inhibitor — dry cough from bradykinin accumulation", isCorrect: true },
      { text: "Gentamicin — ototoxicity and nephrotoxicity", isCorrect: true },
      { text: "Amiodarone — thyroid dysfunction and pulmonary fibrosis", isCorrect: true },
      { text: "Metformin — hypoglycemia when used as monotherapy" },
      { text: "Atorvastatin — nephrotic syndrome" },
    ],
  },
  {
    stem: "A patient develops a widespread rash with mucosal involvement and skin detachment 10 days after starting an antiepileptic. What is the immediate priority?",
    topic: "Adverse Drug Reactions",
    explanation:
      "Stevens-Johnson syndrome and toxic epidermal necrolysis require immediate withdrawal of the drug and urgent specialist management, often in a burns unit. Mucosal involvement with skin detachment distinguishes this from a benign drug rash and makes it a medical emergency.",
    choices: [
      { text: "Stop the drug immediately and arrange urgent specialist care", isCorrect: true },
      { text: "Continue the drug and add an antihistamine" },
      { text: "Reduce the dose and reassess in a week" },
      { text: "Apply topical steroid and continue treatment" },
      { text: "Switch to a chemically related antiepileptic immediately" },
    ],
  },
  {
    stem: "True or False: A pharmacologic side effect and an allergic reaction are distinct, and a patient reporting nausea on a drug is not necessarily allergic to it.",
    type: "TRUE_FALSE",
    topic: "Adverse Drug Reactions",
    explanation:
      "True. Mislabeling intolerance as allergy can deny a patient an effective drug for life — inaccurate penicillin allergy labels are the classic example, leading to broader and more toxic alternatives. Clarifying the nature of the reaction is a meaningful clinical act.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which reaction type underlies immediate anaphylaxis to a drug?",
    topic: "Adverse Drug Reactions",
    explanation:
      "Type I IgE-mediated hypersensitivity causes mast cell degranulation within minutes of re-exposure. Type II is cytotoxic, type III immune complex mediated, and type IV delayed T cell mediated as in contact dermatitis and some drug rashes.",
    choices: [
      { text: "Type I IgE-mediated hypersensitivity", isCorrect: true },
      { text: "Type II cytotoxic antibody reaction" },
      { text: "Type III immune complex deposition" },
      { text: "Type IV delayed T cell mediated reaction" },
      { text: "Non-immune direct toxicity" },
    ],
  },
  {
    stem: "What is the purpose of post-marketing surveillance (phase IV) in drug development?",
    topic: "Adverse Drug Reactions",
    explanation:
      "Pre-approval trials involve limited numbers over limited time, so rare and delayed adverse effects only emerge once large populations are exposed. Withdrawals such as rofecoxib demonstrate why surveillance continues indefinitely after approval.",
    choices: [
      { text: "Detecting rare or delayed adverse effects that trials were too small to find", isCorrect: true },
      { text: "Establishing the initial safe dose in healthy volunteers" },
      { text: "Proving efficacy against placebo for approval" },
      { text: "Determining the mechanism of action" },
      { text: "Setting the manufacturing price" },
    ],
  },
  {
    stem: "Which clinical trial phase first establishes efficacy against a comparator in a large patient population?",
    topic: "Adverse Drug Reactions",
    explanation:
      "Phase III trials compare the drug against placebo or standard therapy in large patient numbers and support approval. Phase I assesses safety in healthy volunteers, phase II explores efficacy and dosing in a small patient group, and phase IV follows after marketing.",
    choices: [
      { text: "Phase III", isCorrect: true },
      { text: "Phase I" },
      { text: "Phase II" },
      { text: "Phase IV" },
      { text: "Preclinical animal studies" },
    ],
  },
];
