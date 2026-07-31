/**
 * PHARMACOLOGY — SET 5 of 7  ·  TIER 5: TOXICITY & OVERDOSE
 *
 * SEVENTY questions. Ten areas, seven each.
 *
 * Tiers 1–4 covered principles, classes, application and special populations.
 * Tier 5 is what happens when it goes wrong — deliberate overdose, accidental
 * poisoning, adverse drug reactions and withdrawal.
 *
 * ONE AREA IS DELIBERATELY WEIGHTED TOWARDS THIS REGION. Organophosphate
 * pesticide, paraffin ingestion in children, snakebite, methanol in illicit
 * alcohol and traditional remedy toxicity are among the commonest poisonings a
 * graduate here will actually meet, and imported question banks barely mention
 * them. They get a full topic.
 *
 * Non-destructive (uses _seedkit) — a re-run refreshes only what it owns and
 * keeps anything you added through Admin.
 *
 * ⚠ Antidote doses, decontamination thresholds and dialysis criteria vary by
 * national guideline and by what is actually stocked locally. These test
 * recognition and reasoning, which travel. Check specifics against your own
 * poisons service and formulary before publishing.
 *
 * Run:  npx tsx prisma/seed-pharmacology-set-5.ts
 */

import { type Q, findCategory, seedSet, done, REPLACE_MODE } from "./_seedkit";

const SET5: Q[] = [
  /* ── Approach to the Poisoned Patient ── */
  {
    stem: "What accounts for most of the survival benefit in poisoning?",
    topic: "Approach to the Poisoned Patient",
    explanation:
      "Good supportive care — airway, breathing, circulation, glucose, temperature and preventing aspiration. Specific antidotes exist for only a minority of poisons, and a patient who is well supported usually survives to metabolise the toxin, whereas a missed airway kills regardless of what was taken.",
    choices: [
      { text: "Supportive care: airway, breathing, circulation, glucose and temperature", isCorrect: true },
      { text: "Identifying the exact substance before treating", isCorrect: false },
      { text: "Giving an antidote in every case", isCorrect: false },
      { text: "Gastric decontamination for all presentations", isCorrect: false },
    ],
  },
  {
    stem: "What is a toxidrome, and why is the concept useful?",
    topic: "Approach to the Poisoned Patient",
    explanation:
      "A recognisable cluster of signs produced by a class of poison — pupils, heart rate, blood pressure, temperature, sweating, bowel sounds and mental state considered together. It lets you narrow the possibilities and begin treatment when the history is absent or unreliable, which it usually is.",
    choices: [
      { text: "A recognisable cluster of signs pointing to a class of poison", isCorrect: true },
      { text: "The laboratory assay used to identify a toxin", isCorrect: false },
      { text: "A scoring system predicting mortality", isCorrect: false },
      { text: "The legal classification of a poison", isCorrect: false },
    ],
  },
  {
    stem: "A patient has pinpoint pupils, excessive salivation and sweating, bronchial secretions, vomiting, diarrhoea and muscle fasciculation. Which toxidrome is this?",
    topic: "Approach to the Poisoned Patient",
    explanation:
      "Cholinergic — classically organophosphate or carbamate pesticide. The picture is one of secretions everywhere, and death usually comes from the respiratory secretions and weakness rather than from any cardiac effect. It is the opposite of the dry, hot, dilated antimuscarinic picture.",
    choices: [
      { text: "Cholinergic, as in organophosphate poisoning", isCorrect: true },
      { text: "Antimuscarinic", isCorrect: false },
      { text: "Sympathomimetic", isCorrect: false },
      { text: "Opioid", isCorrect: false },
    ],
  },
  {
    stem: "Why is the history from a poisoned patient treated with caution?",
    topic: "Approach to the Poisoned Patient",
    explanation:
      "Consciousness may be impaired, the account may be deliberately incomplete, and in deliberate overdose the amount and timing are often understated. Corroboration from packaging, family, ambulance crew and the scene is more reliable than the patient's own figure.",
    choices: [
      { text: "It is frequently incomplete or understated; corroborate from packets, family and the scene", isCorrect: true },
      { text: "Patients are always deliberately deceptive", isCorrect: false },
      { text: "The history is irrelevant to management", isCorrect: false },
      { text: "Self-reported doses are reliably accurate", isCorrect: false },
    ],
  },
  {
    stem: "In which overdoses does measuring a drug level actually change management?",
    topic: "Approach to the Poisoned Patient",
    explanation:
      "Paracetamol, salicylate, lithium, iron, digoxin, methanol and ethylene glycol — those with a treatment threshold tied to the concentration. For most other drugs the level arrives too late and does not alter what you would do, so it is the clinical picture that guides treatment.",
    choices: [
      { text: "Those with a concentration-linked treatment threshold — paracetamol, salicylate, lithium, iron, digoxin, toxic alcohols", isCorrect: true },
      { text: "All overdoses, without exception", isCorrect: false },
      { text: "Only overdoses of prescribed medicines", isCorrect: false },
      { text: "Levels never influence management", isCorrect: false },
    ],
  },
  {
    stem: "What does a raised osmolar gap suggest in a poisoned patient?",
    topic: "Approach to the Poisoned Patient",
    explanation:
      "The presence of an unmeasured osmotically active substance, classically a toxic alcohol — methanol, ethylene glycol or ethanol itself. A normal gap does not exclude it late on, once the parent alcohol has been metabolised into the acids that then widen the anion gap instead.",
    choices: [
      { text: "An unmeasured osmotically active substance, classically a toxic alcohol", isCorrect: true },
      { text: "Severe dehydration alone", isCorrect: false },
      { text: "Opioid overdose specifically", isCorrect: false },
      { text: "It has no diagnostic value", isCorrect: false },
    ],
  },
  {
    stem: "Why is a staggered overdose harder to assess than a single large ingestion?",
    topic: "Approach to the Poisoned Patient",
    explanation:
      "There is no single time from which to interpret a level or plot a nomogram, so concentration-based thresholds become unreliable. With paracetamol in particular, a staggered or uncertain-timing ingestion is generally treated on the history and risk rather than waiting for a level to justify it.",
    choices: [
      { text: "There is no single ingestion time, so concentration thresholds cannot be applied", isCorrect: true },
      { text: "Staggered overdoses are always harmless", isCorrect: false },
      { text: "Levels become more accurate, not less", isCorrect: false },
      { text: "It makes no difference to assessment", isCorrect: false },
    ],
  },

  /* ── Paracetamol & Salicylate ── */
  {
    stem: "Why is a paracetamol level taken at four hours after ingestion rather than immediately?",
    topic: "Paracetamol & Salicylate",
    explanation:
      "Absorption and distribution are still incomplete before then, so an earlier sample underestimates the peak and can falsely reassure. The treatment nomogram is only validated from four hours, which is why a level drawn at one hour cannot be plotted on it.",
    choices: [
      { text: "Absorption is incomplete earlier, and the nomogram is only valid from four hours", isCorrect: true },
      { text: "The laboratory cannot process samples sooner", isCorrect: false },
      { text: "Earlier levels overestimate the risk", isCorrect: false },
      { text: "Timing has no bearing on interpretation", isCorrect: false },
    ],
  },
  {
    stem: "Which factors increase the risk of hepatotoxicity at a given paracetamol dose?",
    topic: "Paracetamol & Salicylate",
    explanation:
      "Chronic alcohol use, malnutrition or prolonged fasting, eating disorders, and enzyme-inducing drugs — all of which either deplete glutathione or increase production of the toxic metabolite. Such patients can be harmed by ingestions that would be tolerated by others.",
    choices: [
      { text: "Chronic alcohol use, malnutrition, and enzyme-inducing drugs", isCorrect: true },
      { text: "Youth and good nutrition", isCorrect: false },
      { text: "Taking the drug with food", isCorrect: false },
      { text: "Nothing alters individual susceptibility", isCorrect: false },
    ],
  },
  {
    stem: "A patient given acetylcysteine develops flushing, urticaria and wheeze during the infusion. What is happening, and what should be done?",
    topic: "Paracetamol & Salicylate",
    explanation:
      "An anaphylactoid reaction — a direct histamine release related to infusion rate, not a true allergy. It is managed by pausing or slowing the infusion and treating symptoms, then restarting; the antidote is not abandoned, because the alternative is preventable liver failure.",
    choices: [
      { text: "An infusion-rate-related anaphylactoid reaction — slow or pause, treat, then restart", isCorrect: true },
      { text: "True anaphylaxis — never give acetylcysteine again", isCorrect: false },
      { text: "Established liver failure", isCorrect: false },
      { text: "Evidence the antidote is not working", isCorrect: false },
    ],
  },
  {
    stem: "Which findings indicate established liver injury after a late-presenting paracetamol overdose?",
    topic: "Paracetamol & Salicylate",
    explanation:
      "A rising INR or prothrombin time, acidosis, rising lactate, hypoglycaemia and encephalopathy — with INR the most useful early marker of synthetic failure. Transaminases indicate hepatocyte damage but not how much functioning liver remains, which is what determines outcome.",
    choices: [
      { text: "Rising INR, acidosis, lactate, hypoglycaemia and encephalopathy", isCorrect: true },
      { text: "A raised paracetamol level alone", isCorrect: false },
      { text: "Transaminase rise as the sole determinant of outcome", isCorrect: false },
      { text: "Nausea and vomiting only", isCorrect: false },
    ],
  },
  {
    stem: "What acid-base picture is characteristic of significant salicylate poisoning in an adult?",
    topic: "Paracetamol & Salicylate",
    explanation:
      "A mixed disturbance: respiratory alkalosis from direct stimulation of the respiratory centre, together with a raised anion gap metabolic acidosis. The pH may look near-normal because the two oppose each other, which is why the individual components must be examined.",
    choices: [
      { text: "Respiratory alkalosis together with a raised anion gap metabolic acidosis", isCorrect: true },
      { text: "Pure respiratory acidosis", isCorrect: false },
      { text: "Pure metabolic alkalosis", isCorrect: false },
      { text: "Entirely normal acid-base status", isCorrect: false },
    ],
  },
  {
    stem: "Why does urinary alkalinisation help in salicylate poisoning?",
    topic: "Paracetamol & Salicylate",
    explanation:
      "Raising urinary pH keeps salicylate ionised in the tubule, so it cannot be reabsorbed and is excreted instead — ion trapping. Alkalinising the blood also reduces movement of salicylate into the central nervous system, which is where the lethal toxicity lies.",
    choices: [
      { text: "Ion trapping keeps salicylate ionised in the tubule so it is excreted rather than reabsorbed", isCorrect: true },
      { text: "It neutralises salicylate chemically in the blood", isCorrect: false },
      { text: "It blocks salicylate absorption from the gut", isCorrect: false },
      { text: "It has no pharmacological rationale", isCorrect: false },
    ],
  },
  {
    stem: "Which early symptoms suggest salicylate toxicity?",
    topic: "Paracetamol & Salicylate",
    explanation:
      "Tinnitus and deafness, nausea and vomiting, sweating and hyperventilation. Tinnitus is the most distinctive early clue, and the hyperventilation is often misread as anxiety rather than recognised as a direct central effect of the drug.",
    choices: [
      { text: "Tinnitus, vomiting, sweating and hyperventilation", isCorrect: true },
      { text: "Pinpoint pupils and bradycardia", isCorrect: false },
      { text: "Dry mouth and urinary retention", isCorrect: false },
      { text: "There are no early symptoms", isCorrect: false },
    ],
  },

  /* ── Opioid, Sedative & Alcohol Toxicity ── */
  {
    stem: "What is the classic triad of opioid toxicity?",
    topic: "Opioid, Sedative & Alcohol Toxicity",
    explanation:
      "Reduced consciousness, respiratory depression and pinpoint pupils. Respiratory depression is what kills, so it is the sign that determines urgency — a drowsy patient breathing adequately needs observation, while a slow respiratory rate needs intervention now.",
    choices: [
      { text: "Reduced consciousness, respiratory depression and pinpoint pupils", isCorrect: true },
      { text: "Agitation, dilated pupils and tachycardia", isCorrect: false },
      { text: "Fever, rigidity and sweating", isCorrect: false },
      { text: "Bradycardia, dry skin and retention", isCorrect: false },
    ],
  },
  {
    stem: "Why is naloxone titrated in small increments in a dependent patient rather than given as one large dose?",
    topic: "Opioid, Sedative & Alcohol Toxicity",
    explanation:
      "A large dose precipitates acute withdrawal — agitation, vomiting with aspiration risk, and a distressed patient who may leave before the opioid has worn off. The aim is adequate respiration, not full reversal of analgesia and consciousness.",
    choices: [
      { text: "Large doses precipitate acute withdrawal; the aim is adequate breathing, not full reversal", isCorrect: true },
      { text: "Naloxone is toxic at higher doses", isCorrect: false },
      { text: "Small doses last longer in the body", isCorrect: false },
      { text: "Titration makes no practical difference", isCorrect: false },
    ],
  },
  {
    stem: "Why is flumazenil rarely used in benzodiazepine overdose?",
    topic: "Opioid, Sedative & Alcohol Toxicity",
    explanation:
      "It can precipitate seizures, particularly in chronic benzodiazepine users or where a proconvulsant such as a tricyclic has also been taken — and seizures are then very difficult to treat, because the usual first-line drug has just been antagonised. Supportive care is almost always safer.",
    choices: [
      { text: "It can precipitate seizures that are then hard to treat, especially in mixed overdose", isCorrect: true },
      { text: "It is ineffective against benzodiazepines", isCorrect: false },
      { text: "It causes irreversible liver damage", isCorrect: false },
      { text: "It is simply too expensive", isCorrect: false },
    ],
  },
  {
    stem: "Why is a reduced conscious level unsafe to attribute to alcohol alone?",
    topic: "Opioid, Sedative & Alcohol Toxicity",
    explanation:
      "Head injury, hypoglycaemia, co-ingestion, Wernicke's encephalopathy, infection and postictal states all occur in people who have been drinking, and the smell of alcohol tells you nothing about what else is going on. Attributing drowsiness to alcohol without checking glucose and considering injury is a recognised cause of preventable death.",
    choices: [
      { text: "Head injury, hypoglycaemia, co-ingestion and infection all coexist with alcohol", isCorrect: true },
      { text: "Alcohol never causes reduced consciousness", isCorrect: false },
      { text: "The smell reliably indicates the cause", isCorrect: false },
      { text: "Blood alcohol level excludes other causes", isCorrect: false },
    ],
  },
  {
    stem: "Why does treatment of methanol or ethylene glycol poisoning involve blocking alcohol dehydrogenase?",
    topic: "Opioid, Sedative & Alcohol Toxicity",
    explanation:
      "The parent alcohols are relatively harmless; their metabolites — formic acid, and glycolic and oxalic acid — cause blindness, acidosis and renal failure. Fomepizole or ethanol occupy the enzyme so the parent compound is excreted unchanged rather than converted.",
    choices: [
      { text: "The metabolites, not the parent alcohols, cause the damage", isCorrect: true },
      { text: "The parent alcohols are the toxic agents", isCorrect: false },
      { text: "It accelerates metabolism to safe products", isCorrect: false },
      { text: "It has no effect on the toxic process", isCorrect: false },
    ],
  },
  {
    stem: "Why does combining alcohol with a sedative produce more respiratory depression than either alone?",
    topic: "Opioid, Sedative & Alcohol Toxicity",
    explanation:
      "Both depress the central nervous system through overlapping pathways, so the effect is more than additive. Many fatal overdoses involve modest amounts of two or three depressants rather than a large amount of one — which is why the co-ingestion history matters more than the headline drug.",
    choices: [
      { text: "Overlapping CNS depression produces a more than additive effect", isCorrect: true },
      { text: "Alcohol prevents the sedative being metabolised entirely", isCorrect: false },
      { text: "The combination is no more dangerous than either alone", isCorrect: false },
      { text: "Alcohol acts as an antidote to sedatives", isCorrect: false },
    ],
  },
  {
    stem: "Which observation best detects deterioration in a patient given an opioid?",
    topic: "Opioid, Sedative & Alcohol Toxicity",
    explanation:
      "Sedation level and respiratory rate together. Sedation reliably precedes respiratory depression, so a rising sedation score is the earlier warning — and oxygen saturation is a late and unreliable indicator, particularly in a patient receiving supplemental oxygen.",
    choices: [
      { text: "Sedation level with respiratory rate — sedation precedes respiratory depression", isCorrect: true },
      { text: "Oxygen saturation alone", isCorrect: false },
      { text: "Blood pressure alone", isCorrect: false },
      { text: "Pain score only", isCorrect: false },
    ],
  },

  /* ── Cardiovascular Drug Toxicity ── */
  {
    stem: "A patient in beta blocker overdose is bradycardic and hypotensive despite atropine. Which agent is specifically indicated?",
    topic: "Cardiovascular Drug Toxicity",
    explanation:
      "Glucagon, which increases cardiac contractility and rate through a pathway that bypasses the blocked beta receptor entirely. High-dose insulin with glucose is also used in severe cases, and hypoglycaemia should be anticipated because beta blockade impairs the counter-regulatory response.",
    choices: [
      { text: "Glucagon, which acts through a pathway bypassing the beta receptor", isCorrect: true },
      { text: "A further beta blocker", isCorrect: false },
      { text: "Naloxone", isCorrect: false },
      { text: "Flumazenil", isCorrect: false },
    ],
  },
  {
    stem: "Which finding helps distinguish calcium channel blocker from beta blocker overdose?",
    topic: "Cardiovascular Drug Toxicity",
    explanation:
      "Glucose. Calcium channel blockade impairs insulin release, so hyperglycaemia is typical, whereas beta blocker overdose tends towards hypoglycaemia. Both cause bradycardia and hypotension, so the glucose is one of the few readily available discriminators.",
    choices: [
      { text: "Hyperglycaemia suggests calcium channel blocker; hypoglycaemia suggests beta blocker", isCorrect: true },
      { text: "Hypoglycaemia suggests calcium channel blocker", isCorrect: false },
      { text: "Glucose is identical in both", isCorrect: false },
      { text: "Neither affects glucose at all", isCorrect: false },
    ],
  },
  {
    stem: "Why is potassium so important in digoxin toxicity, and how is severe toxicity reversed?",
    topic: "Cardiovascular Drug Toxicity",
    explanation:
      "Digoxin and potassium compete at the sodium-potassium pump, so hypokalaemia worsens toxicity while acute toxicity raises serum potassium as the pump fails. Digoxin-specific antibody fragments reverse it, and calcium is traditionally avoided where digoxin toxicity is the cause of hyperkalaemia.",
    choices: [
      { text: "They compete at the same pump; severe toxicity is reversed with digoxin-specific antibody fragments", isCorrect: true },
      { text: "Potassium is irrelevant; treat with atropine alone", isCorrect: false },
      { text: "Hyperkalaemia protects against digoxin toxicity", isCorrect: false },
      { text: "No specific reversal agent exists", isCorrect: false },
    ],
  },
  {
    stem: "In tricyclic antidepressant overdose, what does a widening QRS indicate and how is it treated?",
    topic: "Cardiovascular Drug Toxicity",
    explanation:
      "Progressive sodium channel blockade, and it predicts both seizures and ventricular arrhythmia. Sodium bicarbonate is given — the sodium load and the alkalinisation together overcome the blockade — and QRS width is followed as the marker of response.",
    choices: [
      { text: "Sodium channel blockade predicting seizures and arrhythmia; treat with sodium bicarbonate", isCorrect: true },
      { text: "A benign finding needing no action", isCorrect: false },
      { text: "Hypokalaemia; treat with potassium", isCorrect: false },
      { text: "Treat with a further antiarrhythmic of the same class", isCorrect: false },
    ],
  },
  {
    stem: "What precipitates torsades de pointes, and what is given acutely?",
    topic: "Cardiovascular Drug Toxicity",
    explanation:
      "QT prolongation from drugs, often compounded by hypokalaemia, hypomagnesaemia or bradycardia. Intravenous magnesium is given even when the serum level is normal, alongside correcting electrolytes and withdrawing every contributing drug.",
    choices: [
      { text: "QT prolongation with electrolyte disturbance; give intravenous magnesium", isCorrect: true },
      { text: "Short QT; give calcium", isCorrect: false },
      { text: "Hyperkalaemia; give insulin and dextrose", isCorrect: false },
      { text: "It occurs spontaneously and needs no treatment", isCorrect: false },
    ],
  },
  {
    stem: "A patient on warfarin has major bleeding with a very high INR. What does treatment require?",
    topic: "Cardiovascular Drug Toxicity",
    explanation:
      "Immediate factor replacement with prothrombin complex concentrate, alongside intravenous vitamin K. Vitamin K alone takes hours to restore factor synthesis, which is too slow when the patient is actively bleeding — so both are given, for different timescales.",
    choices: [
      { text: "Factor replacement with prothrombin complex concentrate plus intravenous vitamin K", isCorrect: true },
      { text: "Oral vitamin K alone", isCorrect: false },
      { text: "Simply omitting the next few doses", isCorrect: false },
      { text: "Protamine sulfate", isCorrect: false },
    ],
  },
  {
    stem: "A patient on a statin reports muscle aches. What determines whether the drug must be stopped?",
    topic: "Cardiovascular Drug Toxicity",
    explanation:
      "The severity of symptoms and the creatine kinase level, together with any dark urine or renal impairment suggesting rhabdomyolysis. Mild aches with a normal CK often allow a dose reduction or a switch, whereas markedly raised CK or renal involvement means stopping immediately.",
    choices: [
      { text: "Symptom severity, creatine kinase level and any sign of rhabdomyolysis", isCorrect: true },
      { text: "Any muscle ache requires permanent avoidance of all statins", isCorrect: false },
      { text: "Muscle symptoms are never statin-related", isCorrect: false },
      { text: "Only the cholesterol response matters", isCorrect: false },
    ],
  },

  /* ── Psychotropic & Neurological Toxicity ── */
  {
    stem: "Which features suggest lithium toxicity?",
    topic: "Psychotropic & Neurological Toxicity",
    explanation:
      "Coarse tremor, ataxia, slurred speech, vomiting and diarrhoea, confusion, and in severe cases seizures and reduced consciousness. A coarse tremor replacing the usual fine one is a useful early sign, and gastrointestinal symptoms often precede the neurological ones.",
    choices: [
      { text: "Coarse tremor, ataxia, vomiting, confusion and in severe cases seizures", isCorrect: true },
      { text: "Pinpoint pupils and respiratory depression", isCorrect: false },
      { text: "Dry mouth with urinary retention only", isCorrect: false },
      { text: "Isolated tachycardia with no other feature", isCorrect: false },
    ],
  },
  {
    stem: "What commonly precipitates lithium toxicity in a patient whose dose has not changed?",
    topic: "Psychotropic & Neurological Toxicity",
    explanation:
      "Anything reducing renal clearance or volume — dehydration, vomiting and diarrhoea, an intercurrent illness, or starting an NSAID, ACE inhibitor or thiazide. Toxicity therefore usually reflects a change in the patient or their other drugs rather than in the lithium itself.",
    choices: [
      { text: "Dehydration, intercurrent illness, or a new NSAID, ACE inhibitor or thiazide", isCorrect: true },
      { text: "Increased fluid intake", isCorrect: false },
      { text: "Stopping other medications", isCorrect: false },
      { text: "Nothing other than a dose increase can cause it", isCorrect: false },
    ],
  },
  {
    stem: "A patient on an antipsychotic develops high fever, severe muscle rigidity, autonomic instability and a very high creatine kinase. What is the diagnosis?",
    topic: "Psychotropic & Neurological Toxicity",
    explanation:
      "Neuroleptic malignant syndrome. It develops over days rather than hours and features lead-pipe rigidity with markedly raised CK — distinct from serotonin syndrome, which comes on faster and features clonus and hyperreflexia instead. The antipsychotic is stopped and supportive cooling and hydration begun.",
    choices: [
      { text: "Neuroleptic malignant syndrome", isCorrect: true },
      { text: "Serotonin syndrome", isCorrect: false },
      { text: "Simple drug fever", isCorrect: false },
      { text: "Acute dystonic reaction", isCorrect: false },
    ],
  },
  {
    stem: "How is an acute dystonic reaction to an antipsychotic or antiemetic treated?",
    topic: "Psychotropic & Neurological Toxicity",
    explanation:
      "An anticholinergic such as procyclidine, which usually relieves it within minutes. The response is dramatic and diagnostic, and recognising it prevents the reaction being mistaken for a seizure, tetanus or a psychiatric presentation.",
    choices: [
      { text: "An anticholinergic such as procyclidine, which relieves it within minutes", isCorrect: true },
      { text: "A further dose of the causative drug", isCorrect: false },
      { text: "Intravenous magnesium", isCorrect: false },
      { text: "No treatment exists", isCorrect: false },
    ],
  },
  {
    stem: "Which signs indicate phenytoin toxicity?",
    topic: "Psychotropic & Neurological Toxicity",
    explanation:
      "Nystagmus, ataxia, slurred speech, and confusion at higher levels — appearing in roughly that order as concentration rises. Because elimination becomes saturated, a small dose increase can move a patient from therapeutic to toxic, so symptoms often develop without any obvious change.",
    choices: [
      { text: "Nystagmus, ataxia, slurred speech and confusion", isCorrect: true },
      { text: "Pinpoint pupils and bradycardia", isCorrect: false },
      { text: "Fever with muscle rigidity", isCorrect: false },
      { text: "There are no recognisable signs", isCorrect: false },
    ],
  },
  {
    stem: "Why does clozapine require regular blood monitoring?",
    topic: "Psychotropic & Neurological Toxicity",
    explanation:
      "It can cause agranulocytosis, which is potentially fatal and gives no warning until the patient presents with infection. Mandatory neutrophil monitoring is the condition of prescribing, and any fever or sore throat in a patient taking it needs an urgent full blood count.",
    choices: [
      { text: "Risk of agranulocytosis, which is silent until infection occurs", isCorrect: true },
      { text: "Risk of liver failure only", isCorrect: false },
      { text: "To confirm the patient is taking it", isCorrect: false },
      { text: "Monitoring is an administrative formality", isCorrect: false },
    ],
  },
  {
    stem: "Which psychotropic and anticonvulsant drugs commonly cause hyponatraemia?",
    topic: "Psychotropic & Neurological Toxicity",
    explanation:
      "Carbamazepine and the SSRIs, both of which can produce a syndrome of inappropriate antidiuresis. It is easily missed because the symptoms — confusion, unsteadiness, falls — are attributed to the underlying illness or to age rather than to the drug.",
    choices: [
      { text: "Carbamazepine and the SSRIs, through inappropriate antidiuresis", isCorrect: true },
      { text: "Lithium, through the same mechanism", isCorrect: false },
      { text: "Benzodiazepines specifically", isCorrect: false },
      { text: "No psychotropic affects sodium", isCorrect: false },
    ],
  },

  /* ── Antidotes & Decontamination ── */
  {
    stem: "When is activated charcoal worth giving, and what does it not adsorb?",
    topic: "Antidotes & Decontamination",
    explanation:
      "Within about an hour of a significant ingestion, in a patient whose airway is protected. It does not bind metals such as iron and lithium, alcohols, or corrosives — and giving it to a drowsy patient risks aspiration, which is worse than the poisoning in many cases.",
    choices: [
      { text: "Early, with a protected airway; it does not bind metals, alcohols or corrosives", isCorrect: true },
      { text: "At any time after ingestion, for any substance", isCorrect: false },
      { text: "Only after twelve hours have passed", isCorrect: false },
      { text: "It binds every known poison equally", isCorrect: false },
    ],
  },
  {
    stem: "Why has gastric lavage largely been abandoned?",
    topic: "Antidotes & Decontamination",
    explanation:
      "It removes little of the ingested drug, and carries real risks of aspiration, oesophageal injury and hypoxia. Evidence of benefit never materialised while the harms were consistent — a good example of a plausible intervention abandoned once it was actually studied.",
    choices: [
      { text: "It removes little drug while risking aspiration and injury", isCorrect: true },
      { text: "It is highly effective but too expensive", isCorrect: false },
      { text: "It has been replaced by an equally invasive procedure", isCorrect: false },
      { text: "It is still first-line for all overdoses", isCorrect: false },
    ],
  },
  {
    stem: "Which poisonings are most amenable to haemodialysis?",
    topic: "Antidotes & Decontamination",
    explanation:
      "Small, water-soluble molecules with low protein binding and a small volume of distribution — lithium, salicylate, methanol, ethylene glycol and metformin-associated lactic acidosis. A drug sitting mostly in tissue rather than plasma cannot be removed usefully however long dialysis runs.",
    choices: [
      { text: "Small, water-soluble, poorly protein-bound drugs with a small volume of distribution", isCorrect: true },
      { text: "Large, highly protein-bound drugs", isCorrect: false },
      { text: "Any drug, regardless of properties", isCorrect: false },
      { text: "Only inhaled poisons", isCorrect: false },
    ],
  },
  {
    stem: "What is the role of intravenous lipid emulsion in poisoning?",
    topic: "Antidotes & Decontamination",
    explanation:
      "It is used in local anaesthetic systemic toxicity, and considered as a rescue in severe cardiotoxicity from other lipophilic drugs. The proposed mechanism is a lipid sink drawing drug out of cardiac tissue — plausible, but the evidence base outside local anaesthetics remains thin.",
    choices: [
      { text: "Local anaesthetic systemic toxicity, and as rescue in severe lipophilic drug cardiotoxicity", isCorrect: true },
      { text: "Routine first-line treatment for all overdoses", isCorrect: false },
      { text: "Reversal of opioid respiratory depression", isCorrect: false },
      { text: "Neutralising corrosive ingestion", isCorrect: false },
    ],
  },
  {
    stem: "Which antidote matches organophosphate poisoning?",
    topic: "Antidotes & Decontamination",
    explanation:
      "Atropine, titrated against secretions rather than heart rate, with pralidoxime to reactivate the enzyme where available. The endpoint is a dry chest, and doses needed can be far larger than those used in any other setting — under-dosing atropine is the usual error.",
    choices: [
      { text: "Atropine titrated to drying of secretions, with pralidoxime", isCorrect: true },
      { text: "Naloxone", isCorrect: false },
      { text: "Flumazenil", isCorrect: false },
      { text: "Activated charcoal alone", isCorrect: false },
    ],
  },
  {
    stem: "Why is an antidote never a substitute for supportive care?",
    topic: "Antidotes & Decontamination",
    explanation:
      "Most antidotes are partial, temporary, or work only within a window — and the patient still needs an airway, circulation and monitoring throughout. Treating the antidote as the definitive intervention leads to under-observation once it has been given.",
    choices: [
      { text: "Antidotes are often partial or temporary; the patient still needs full supportive care", isCorrect: true },
      { text: "Antidotes fully and permanently reverse all effects", isCorrect: false },
      { text: "Supportive care is unnecessary once an antidote is given", isCorrect: false },
      { text: "Antidotes exist for every poison", isCorrect: false },
    ],
  },
  {
    stem: "Why should a poisons information service be consulted even for a familiar overdose?",
    topic: "Antidotes & Decontamination",
    explanation:
      "Thresholds, antidote regimens and observation periods are revised as evidence changes, and co-ingestions alter management. It also documents the case, and provides a second opinion at three in the morning when the alternative is memory under pressure.",
    choices: [
      { text: "Thresholds and regimens change, co-ingestions alter management, and it gives a second opinion", isCorrect: true },
      { text: "It is a legal requirement in all cases", isCorrect: false },
      { text: "Only for poisons never seen before", isCorrect: false },
      { text: "Their advice rarely differs from memory", isCorrect: false },
    ],
  },

  /* ── Drug-Induced Liver & Kidney Injury ── */
  {
    stem: "What distinguishes hepatocellular from cholestatic drug-induced liver injury?",
    topic: "Drug-Induced Liver & Kidney Injury",
    explanation:
      "Hepatocellular injury raises transaminases predominantly, cholestatic raises alkaline phosphatase and bilirubin, and mixed patterns occur. The pattern narrows the list of likely culprits and, with jaundice present, indicates a considerably worse prognosis.",
    choices: [
      { text: "Hepatocellular raises transaminases; cholestatic raises alkaline phosphatase and bilirubin", isCorrect: true },
      { text: "Both raise only bilirubin", isCorrect: false },
      { text: "The patterns are indistinguishable", isCorrect: false },
      { text: "Cholestatic injury raises transaminases predominantly", isCorrect: false },
    ],
  },
  {
    stem: "Which commonly used drugs are recognised causes of liver injury?",
    topic: "Drug-Induced Liver & Kidney Injury",
    explanation:
      "Co-amoxiclav, flucloxacillin, antituberculous drugs, methotrexate, amiodarone and many herbal preparations, alongside paracetamol in overdose. Drug-induced injury is a diagnosis of exclusion, so the medication history — including anything bought or traditional — belongs in every jaundice work-up.",
    choices: [
      { text: "Co-amoxiclav, flucloxacillin, antituberculous drugs, methotrexate and herbal preparations", isCorrect: true },
      { text: "Only paracetamol, and only in overdose", isCorrect: false },
      { text: "Antihistamines and topical emollients", isCorrect: false },
      { text: "Drug-induced liver injury does not occur at therapeutic doses", isCorrect: false },
    ],
  },
  {
    stem: "A patient develops renal impairment with rash, fever and eosinophilia days after starting an antibiotic. What is the likely diagnosis?",
    topic: "Drug-Induced Liver & Kidney Injury",
    explanation:
      "Acute interstitial nephritis, an immune-mediated reaction most often to antibiotics, NSAIDs or proton pump inhibitors. The classic triad is present in only a minority, so the timing relative to a new drug is often the strongest clue. Recovery usually follows stopping the drug.",
    choices: [
      { text: "Acute interstitial nephritis", isCorrect: true },
      { text: "Acute tubular necrosis from hypoperfusion", isCorrect: false },
      { text: "Glomerulonephritis from infection", isCorrect: false },
      { text: "Obstructive uropathy", isCorrect: false },
    ],
  },
  {
    stem: "How do aminoglycosides and contrast media damage the kidney?",
    topic: "Drug-Induced Liver & Kidney Injury",
    explanation:
      "Both cause acute tubular injury — aminoglycosides accumulating in proximal tubular cells, contrast through direct toxicity and medullary vasoconstriction. Risk rises with pre-existing impairment, volume depletion and concurrent nephrotoxins, so hydration and avoiding stacking agents matter more than any specific prophylaxis.",
    choices: [
      { text: "Direct tubular injury, worsened by volume depletion and other nephrotoxins", isCorrect: true },
      { text: "Immune-mediated interstitial inflammation", isCorrect: false },
      { text: "Physical obstruction of the ureters", isCorrect: false },
      { text: "They are not nephrotoxic", isCorrect: false },
    ],
  },
  {
    stem: "Why does rhabdomyolysis cause acute kidney injury?",
    topic: "Drug-Induced Liver & Kidney Injury",
    explanation:
      "Myoglobin released from damaged muscle is directly toxic to tubules and precipitates within them, compounded by the volume depletion that accompanies muscle injury. Statins, prolonged immobility after overdose, and stimulant use are the common drug-related causes; aggressive fluid resuscitation is the mainstay.",
    choices: [
      { text: "Myoglobin is tubulotoxic and precipitates in tubules, with volume depletion compounding it", isCorrect: true },
      { text: "Muscle breakdown blocks the ureters mechanically", isCorrect: false },
      { text: "It causes an immune reaction in the glomerulus", isCorrect: false },
      { text: "It does not affect the kidney", isCorrect: false },
    ],
  },
  {
    stem: "What is crystal nephropathy, and which drugs cause it?",
    topic: "Drug-Induced Liver & Kidney Injury",
    explanation:
      "Drug or metabolite crystals precipitating within tubules and obstructing them — described with aciclovir given rapidly, sulfonamides, methotrexate and some antiretrovirals. Adequate hydration before and during administration is the main preventive measure.",
    choices: [
      { text: "Drug crystals precipitating in tubules — aciclovir, sulfonamides, methotrexate", isCorrect: true },
      { text: "Calcium stones unrelated to medication", isCorrect: false },
      { text: "Immune complex deposition in the glomerulus", isCorrect: false },
      { text: "A form of interstitial nephritis", isCorrect: false },
    ],
  },
  {
    stem: "What renal effects follow long-term lithium use?",
    topic: "Drug-Induced Liver & Kidney Injury",
    explanation:
      "Nephrogenic diabetes insipidus with polyuria and polydipsia, and over years a chronic interstitial nephropathy. This creates a vicious circle — impaired concentrating ability leads to dehydration, which raises lithium levels, which worsens the renal effect.",
    choices: [
      { text: "Nephrogenic diabetes insipidus and, over years, chronic interstitial nephropathy", isCorrect: true },
      { text: "Acute glomerulonephritis within days", isCorrect: false },
      { text: "No renal effects whatsoever", isCorrect: false },
      { text: "Improved concentrating ability", isCorrect: false },
    ],
  },

  /* ── Haematological, Skin & Metabolic Reactions ── */
  {
    stem: "Which drugs are recognised causes of agranulocytosis, and what must the patient be told?",
    topic: "Haematological, Skin & Metabolic Reactions",
    explanation:
      "Carbimazole, clozapine, some antibiotics and antiepileptics among others. The patient must report fever, sore throat or mouth ulcers immediately and have an urgent full blood count — because there is no warning before infection, and by then the neutrophil count may already be zero.",
    choices: [
      { text: "Carbimazole, clozapine and others — report fever or sore throat urgently for a blood count", isCorrect: true },
      { text: "Only cytotoxic chemotherapy causes it", isCorrect: false },
      { text: "It develops slowly with obvious warning signs", isCorrect: false },
      { text: "No patient counselling is needed", isCorrect: false },
    ],
  },
  {
    stem: "Which classes of drug should be avoided in G6PD deficiency?",
    topic: "Haematological, Skin & Metabolic Reactions",
    explanation:
      "Oxidant drugs — primaquine and other 8-aminoquinolines, sulfonamides including co-trimoxazole, nitrofurantoin and dapsone. The list matters clinically in this region, where both G6PD deficiency and the need for antimalarial treatment are common.",
    choices: [
      { text: "Oxidant drugs: primaquine, sulfonamides, nitrofurantoin and dapsone", isCorrect: true },
      { text: "Beta blockers and calcium channel blockers", isCorrect: false },
      { text: "All antibiotics without exception", isCorrect: false },
      { text: "No drug restriction applies", isCorrect: false },
    ],
  },
  {
    stem: "A patient's platelet count falls several days into heparin treatment and they develop a new thrombosis. What has happened and what must not be done?",
    topic: "Haematological, Skin & Metabolic Reactions",
    explanation:
      "Heparin-induced thrombocytopenia — an antibody-mediated reaction that paradoxically causes thrombosis rather than bleeding. All heparin must stop, an alternative non-heparin anticoagulant is started, and platelets are not transfused, which can worsen the thrombosis.",
    choices: [
      { text: "Heparin-induced thrombocytopenia — stop all heparin, anticoagulate differently, do not transfuse platelets", isCorrect: true },
      { text: "Simple dilutional thrombocytopenia — continue heparin", isCorrect: false },
      { text: "Bleeding risk — transfuse platelets urgently", isCorrect: false },
      { text: "An expected effect requiring no change", isCorrect: false },
    ],
  },
  {
    stem: "A cyanosed patient has a normal arterial oxygen tension but low saturation on the oximeter, and dark chocolate-coloured blood. What is the diagnosis?",
    topic: "Haematological, Skin & Metabolic Reactions",
    explanation:
      "Methaemoglobinaemia, in which iron in haemoglobin is oxidised and cannot carry oxygen. The gap between a normal measured oxygen tension and a low saturation is the giveaway, and it is treated with methylene blue — except in G6PD deficiency, where that is ineffective and potentially harmful.",
    choices: [
      { text: "Methaemoglobinaemia, treated with methylene blue except in G6PD deficiency", isCorrect: true },
      { text: "Carbon monoxide poisoning", isCorrect: false },
      { text: "Simple hypoxia from pneumonia", isCorrect: false },
      { text: "Anaemia alone", isCorrect: false },
    ],
  },
  {
    stem: "Which drugs commonly cause photosensitivity?",
    topic: "Haematological, Skin & Metabolic Reactions",
    explanation:
      "Doxycycline, thiazides, amiodarone, some quinolones and NSAIDs. Patients present with what looks like severe sunburn in exposed areas and rarely connect it to their medication, so the eruption's sun-exposed distribution is the clue worth noticing.",
    choices: [
      { text: "Doxycycline, thiazides, amiodarone, quinolones and some NSAIDs", isCorrect: true },
      { text: "Paracetamol and codeine", isCorrect: false },
      { text: "Inhaled corticosteroids", isCorrect: false },
      { text: "No drug causes photosensitivity", isCorrect: false },
    ],
  },
  {
    stem: "What harms accumulate with long-term corticosteroid treatment?",
    topic: "Haematological, Skin & Metabolic Reactions",
    explanation:
      "Osteoporosis, hyperglycaemia, weight gain and fat redistribution, skin thinning and bruising, cataract and glaucoma, muscle wasting, mood disturbance and increased infection risk. Bone protection and glucose monitoring are considered from the outset in anyone expected to need a prolonged course.",
    choices: [
      { text: "Osteoporosis, hyperglycaemia, skin thinning, cataract, myopathy, mood change and infection risk", isCorrect: true },
      { text: "Only weight gain, which is cosmetic", isCorrect: false },
      { text: "Renal failure as the principal risk", isCorrect: false },
      { text: "No cumulative harm occurs", isCorrect: false },
    ],
  },
  {
    stem: "Why is a drug reaction easily missed when it appears weeks after starting the medicine?",
    topic: "Haematological, Skin & Metabolic Reactions",
    explanation:
      "The connection is not obvious once the drug has become routine, and both patient and clinician look for a new cause instead. Reactions with long latency — drug-induced liver injury, DRESS, interstitial nephritis — are regularly attributed to something else for exactly this reason.",
    choices: [
      { text: "The drug is no longer new, so both patient and clinician look elsewhere for a cause", isCorrect: true },
      { text: "Reactions never occur after the first week", isCorrect: false },
      { text: "Late reactions are always mild", isCorrect: false },
      { text: "Laboratory tests always identify the drug responsible", isCorrect: false },
    ],
  },

  /* ── Environmental & Non-Pharmaceutical Poisoning ── */
  {
    stem: "How is atropine dosing judged in organophosphate poisoning?",
    topic: "Environmental & Non-Pharmaceutical Poisoning",
    explanation:
      "Against drying of bronchial secretions and adequate oxygenation — not against heart rate or pupil size. The requirement can be many times the dose used in any other setting, and under-dosing through unfamiliarity with those quantities is the commonest reason patients die.",
    choices: [
      { text: "Titrated to drying of bronchial secretions, often needing very large total doses", isCorrect: true },
      { text: "A single standard dose is sufficient", isCorrect: false },
      { text: "Titrated to pupil dilation alone", isCorrect: false },
      { text: "Atropine has no role", isCorrect: false },
    ],
  },
  {
    stem: "Why can pulse oximetry be falsely reassuring in carbon monoxide poisoning?",
    topic: "Environmental & Non-Pharmaceutical Poisoning",
    explanation:
      "Standard oximeters cannot distinguish carboxyhaemoglobin from oxyhaemoglobin, so the reading stays high while oxygen delivery is severely impaired. Diagnosis needs a carboxyhaemoglobin level and clinical suspicion — headache, nausea and confusion in several people from the same household.",
    choices: [
      { text: "The oximeter cannot distinguish carboxyhaemoglobin from oxyhaemoglobin", isCorrect: true },
      { text: "Carbon monoxide raises the true saturation", isCorrect: false },
      { text: "Oximetry is unaffected and accurate", isCorrect: false },
      { text: "Saturation falls dramatically and obviously", isCorrect: false },
    ],
  },
  {
    stem: "A child has swallowed paraffin. Why must vomiting not be induced?",
    topic: "Environmental & Non-Pharmaceutical Poisoning",
    explanation:
      "Hydrocarbons are of low viscosity and readily aspirated, and the danger is chemical pneumonitis rather than systemic absorption. Inducing vomiting greatly increases aspiration risk, so management is observation for respiratory signs with supportive care.",
    choices: [
      { text: "The danger is aspiration pneumonitis, which vomiting makes far more likely", isCorrect: true },
      { text: "Vomiting removes the poison effectively and should be induced", isCorrect: false },
      { text: "Systemic absorption is the main risk", isCorrect: false },
      { text: "Charcoal should be given instead", isCorrect: false },
    ],
  },
  {
    stem: "What are the correct first aid principles after a snakebite?",
    topic: "Environmental & Non-Pharmaceutical Poisoning",
    explanation:
      "Reassure and keep the patient still, immobilise the limb at heart level, remove rings and tight clothing, and transport urgently for assessment and antivenom if indicated. Incision, suction, tourniquets and ice all cause harm and delay definitive treatment.",
    choices: [
      { text: "Immobilise, keep calm, remove constricting items, transport urgently — no incision or tourniquet", isCorrect: true },
      { text: "Apply a tight tourniquet above the bite", isCorrect: false },
      { text: "Incise and suck out the venom", isCorrect: false },
      { text: "Apply ice and wait for symptoms", isCorrect: false },
    ],
  },
  {
    stem: "After ingestion of a corrosive substance, why must neutralisation and emesis both be avoided?",
    topic: "Environmental & Non-Pharmaceutical Poisoning",
    explanation:
      "Neutralising generates heat and worsens the burn, while vomiting re-exposes the oesophagus and adds perforation and aspiration risk. Management is airway assessment, analgesia, nil by mouth and early endoscopic evaluation.",
    choices: [
      { text: "Neutralising generates heat and vomiting re-exposes the oesophagus", isCorrect: true },
      { text: "Neutralising is the recommended first step", isCorrect: false },
      { text: "Emesis reliably clears the corrosive", isCorrect: false },
      { text: "Neither carries any risk", isCorrect: false },
    ],
  },
  {
    stem: "Why should traditional and herbal remedies be asked about specifically in unexplained organ failure?",
    topic: "Environmental & Non-Pharmaceutical Poisoning",
    explanation:
      "Some contain heavy metals, undeclared pharmaceuticals or intrinsically hepatotoxic and nephrotoxic plant compounds, and content is not standardised between preparations. Patients rarely volunteer them because they are not thought of as medicines, so the question has to be asked directly and without judgement.",
    choices: [
      { text: "They may contain heavy metals, undeclared drugs or toxic plant compounds, and are rarely volunteered", isCorrect: true },
      { text: "They are inert and never relevant", isCorrect: false },
      { text: "Patients always report them without prompting", isCorrect: false },
      { text: "Their content is standardised and predictable", isCorrect: false },
    ],
  },
  {
    stem: "Why does methanol contamination of illicit alcohol cause blindness?",
    topic: "Environmental & Non-Pharmaceutical Poisoning",
    explanation:
      "Methanol is metabolised to formic acid, which is directly toxic to the optic nerve and causes a severe metabolic acidosis. Visual loss may be permanent, and because outbreaks affect many people from a shared source, one case should prompt a search for others.",
    choices: [
      { text: "It is metabolised to formic acid, toxic to the optic nerve, with severe acidosis", isCorrect: true },
      { text: "It causes direct physical injury to the eye", isCorrect: false },
      { text: "The visual loss is always temporary", isCorrect: false },
      { text: "Blindness is unrelated to methanol", isCorrect: false },
    ],
  },

  /* ── Withdrawal Syndromes ── */
  {
    stem: "What is the typical timeline of alcohol withdrawal, and which stage is most dangerous?",
    topic: "Withdrawal Syndromes",
    explanation:
      "Tremor, sweating and anxiety within hours, seizures typically in the first day or two, and delirium tremens from around 48 to 72 hours. Delirium tremens carries significant mortality untreated, so a patient who seems to be settling at 24 hours is not yet past the risk.",
    choices: [
      { text: "Tremor and anxiety early, seizures within a day or two, delirium tremens at 48–72 hours", isCorrect: true },
      { text: "All features occur within the first two hours", isCorrect: false },
      { text: "Withdrawal only begins after a week", isCorrect: false },
      { text: "The first hours carry the highest mortality", isCorrect: false },
    ],
  },
  {
    stem: "Why are benzodiazepines used to manage alcohol withdrawal?",
    topic: "Withdrawal Syndromes",
    explanation:
      "They act on the same GABA receptor system that alcohol has been suppressing, replacing the missing inhibition in a controlled and taperable way. This both relieves symptoms and prevents seizures and delirium, which sedation with an unrelated drug would not.",
    choices: [
      { text: "They substitute at the same GABA system, preventing seizures and delirium as well as symptoms", isCorrect: true },
      { text: "They accelerate alcohol elimination", isCorrect: false },
      { text: "They are used purely for sedation", isCorrect: false },
      { text: "They reverse liver damage", isCorrect: false },
    ],
  },
  {
    stem: "Why is thiamine given before glucose in a malnourished or alcohol-dependent patient?",
    topic: "Withdrawal Syndromes",
    explanation:
      "Glucose metabolism consumes thiamine, so a glucose load in a thiamine-depleted patient can precipitate Wernicke's encephalopathy. Thiamine is cheap and essentially harmless, so it is given first whenever the question arises rather than after confirming deficiency.",
    choices: [
      { text: "Glucose consumes thiamine and can precipitate Wernicke's encephalopathy", isCorrect: true },
      { text: "Glucose destroys thiamine chemically in the vial", isCorrect: false },
      { text: "The order makes no difference", isCorrect: false },
      { text: "Thiamine is dangerous unless given after glucose", isCorrect: false },
    ],
  },
  {
    stem: "How does opioid withdrawal differ in danger from alcohol or benzodiazepine withdrawal?",
    topic: "Withdrawal Syndromes",
    explanation:
      "Opioid withdrawal is intensely unpleasant but rarely life-threatening in an otherwise well adult, whereas alcohol and benzodiazepine withdrawal can cause seizures and death. It still deserves treatment — untreated withdrawal drives patients to leave hospital and to relapse.",
    choices: [
      { text: "Opioid withdrawal is rarely fatal; alcohol and benzodiazepine withdrawal can kill", isCorrect: true },
      { text: "Opioid withdrawal is the most lethal of the three", isCorrect: false },
      { text: "All three carry identical risk", isCorrect: false },
      { text: "None requires any treatment", isCorrect: false },
    ],
  },
  {
    stem: "Why must long-term benzodiazepines be tapered slowly rather than stopped?",
    topic: "Withdrawal Syndromes",
    explanation:
      "Abrupt withdrawal risks seizures, and a protracted syndrome of anxiety, insomnia and perceptual disturbance that can last months. Tapers are measured in months rather than days, and going faster is the usual reason an attempt fails and the drug is restarted.",
    choices: [
      { text: "Abrupt stopping risks seizures and a protracted withdrawal syndrome lasting months", isCorrect: true },
      { text: "Tapering is a formality with no clinical basis", isCorrect: false },
      { text: "Withdrawal resolves within 48 hours regardless", isCorrect: false },
      { text: "They can safely be stopped at any time", isCorrect: false },
    ],
  },
  {
    stem: "Why can stopping smoking raise the level of certain drugs?",
    topic: "Withdrawal Syndromes",
    explanation:
      "Tobacco smoke induces CYP1A2, so stopping removes that induction and levels of clozapine, theophylline and olanzapine can rise into the toxic range. It is the smoke rather than the nicotine, so nicotine replacement does not prevent it — a genuine trap when a smoker is admitted and stops abruptly.",
    choices: [
      { text: "Smoke induces CYP1A2; stopping removes that induction and levels rise", isCorrect: true },
      { text: "Nicotine replacement prevents the change", isCorrect: false },
      { text: "Stopping smoking lowers all drug levels", isCorrect: false },
      { text: "Smoking has no effect on drug metabolism", isCorrect: false },
    ],
  },
  {
    stem: "What is neonatal abstinence syndrome?",
    topic: "Withdrawal Syndromes",
    explanation:
      "Withdrawal in a newborn exposed to opioids or other dependence-forming drugs in utero, with irritability, high-pitched cry, poor feeding, tremor and sometimes seizures. It is managed with supportive care and, where severe, a tapering opioid — and it needs anticipating rather than discovering.",
    choices: [
      { text: "Withdrawal in a newborn exposed in utero, with irritability, poor feeding and tremor", isCorrect: true },
      { text: "An allergic reaction in the newborn", isCorrect: false },
      { text: "A maternal condition after delivery", isCorrect: false },
      { text: "A form of neonatal sepsis", isCorrect: false },
    ],
  },
];

async function main() {
  console.log(`Seeding Pharmacology — Set 5 (Tier 5: Toxicity & Overdose)${REPLACE_MODE ? "  [REPLACE MODE]" : ""}…\n`);

  const categoryId = await findCategory("fs-pharmacology");
  if (!categoryId) return;

  await seedSet({
    categoryId,
    slug: "pharmacology-set-5-toxicity",
    title: "Pharmacology — Set 5: Toxicity & Overdose",
    description:
      "Seventy questions on what happens when it goes wrong: assessing the poisoned patient, paracetamol and salicylate, opioids, sedatives and alcohol, cardiovascular and psychotropic toxicity, antidotes and decontamination, drug-induced organ injury, haematological and skin reactions, environmental and non-pharmaceutical poisoning, and withdrawal syndromes. Assumes Sets 1–4. Untimed.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Advanced",
    questions: SET5,
  });

  await done();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
