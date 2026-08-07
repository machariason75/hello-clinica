/**
 * PHARMACOLOGY — PRACTICE SET 4
 * Central Nervous System Drugs
 *
 * Difficulty: Foundational-Intermediate. The second of the two largest
 * prescribing domains. Organized so that neurotransmitter mechanism predicts
 * both effect and toxidrome: which receptor a sedative enhances, how an
 * antidepressant shifts monoamines, why an antipsychotic causes movement
 * disorders. Pairs with Set 3 (Cardiovascular Drugs) to build Exam 2, the
 * Mechanisms Block.
 *
 * 80 questions across 12 topics:
 *   Sedative-Hypnotics & Anxiolytics · Antiepileptic Drugs · General
 *   Anesthetics · Local Anesthetics · Antidepressants · Mood Stabilizers ·
 *   Antipsychotics · Antiparkinsonian Drugs · Neurodegenerative Disease Drugs ·
 *   Opioid Analgesics · Drugs of Abuse & Stimulants · Clinical Application
 *
 * Item mix: 60 single-answer vignettes, 10 select-all-that-apply, 10 true/false.
 * US generic drug names and conventional units throughout.
 */

import type { Q } from "../_lib/qbank";

export const PHARMACOLOGY_SET_4: Q[] = [
  /* ══════════════ SEDATIVE-HYPNOTICS & ANXIOLYTICS ══════════════ */
  {
    stem: "Benzodiazepines enhance inhibitory neurotransmission by acting at which receptor?",
    topic: "Sedative-Hypnotics & Anxiolytics",
    explanation:
      "Benzodiazepines bind an allosteric site on the GABA-A receptor and increase the frequency of chloride channel opening, potentiating GABA's inhibitory effect. Because they require GABA to be present, they have a ceiling that makes them safer in overdose than barbiturates.",
    choices: [
      { text: "The GABA-A receptor, increasing chloride channel opening frequency", isCorrect: true },
      { text: "The NMDA glutamate receptor" },
      { text: "The GABA-B receptor" },
      { text: "The nicotinic acetylcholine receptor" },
      { text: "The 5-HT2A serotonin receptor" },
    ],
  },
  {
    stem: "How do barbiturates differ from benzodiazepines in their action at the GABA-A receptor?",
    topic: "Sedative-Hypnotics & Anxiolytics",
    explanation:
      "Barbiturates increase the duration of chloride channel opening and at high doses open the channel independently of GABA, which is why they lack a ceiling and cause fatal respiratory depression more readily. Benzodiazepines only increase opening frequency and need GABA present.",
    choices: [
      { text: "They increase the duration of chloride channel opening and can act without GABA", isCorrect: true },
      { text: "They only increase the frequency of channel opening" },
      { text: "They block the receptor entirely" },
      { text: "They act on GABA-B receptors instead" },
      { text: "They have no effect on chloride flux" },
    ],
  },
  {
    stem: "What is the specific antidote for benzodiazepine overdose, and why is it used cautiously?",
    topic: "Sedative-Hypnotics & Anxiolytics",
    explanation:
      "Flumazenil is a competitive GABA-A benzodiazepine-site antagonist that reverses sedation, but it can precipitate seizures in chronically dependent patients or in mixed overdoses with proconvulsants. This risk means it is not given routinely for every overdose.",
    choices: [
      { text: "Flumazenil, because it can precipitate withdrawal seizures", isCorrect: true },
      { text: "Naloxone, because it can cause hypertension" },
      { text: "Naltrexone, because it is long-acting" },
      { text: "Physostigmine, because it crosses the blood-brain barrier" },
      { text: "Atropine, because it blocks muscarinic receptors" },
    ],
  },
  {
    stem: "Which anxiolytic is a partial 5-HT1A agonist that is non-sedating, non-addictive, and takes weeks to work?",
    topic: "Sedative-Hypnotics & Anxiolytics",
    explanation:
      "Buspirone acts as a partial agonist at 5-HT1A receptors rather than on GABA, so it does not cause sedation, dependence, or additive central depression with alcohol; its delayed onset makes it unsuitable for acute anxiety. It is useful for generalized anxiety disorder.",
    choices: [
      { text: "Buspirone", isCorrect: true },
      { text: "Diazepam" },
      { text: "Zolpidem" },
      { text: "Phenobarbital" },
      { text: "Lorazepam" },
    ],
  },
  {
    stem: "The 'Z-drugs' such as zolpidem are used for insomnia because they:",
    topic: "Sedative-Hypnotics & Anxiolytics",
    explanation:
      "Zolpidem selectively targets the alpha-1 subunit of the GABA-A receptor, producing hypnotic effects with less anxiolytic or muscle-relaxant activity; it is reversed by flumazenil. Complex sleep behaviors such as sleep-driving are a recognized adverse effect.",
    choices: [
      { text: "Selectively act on the GABA-A alpha-1 subunit for a hypnotic effect", isCorrect: true },
      { text: "Block histamine H1 receptors only" },
      { text: "Agonize melatonin receptors" },
      { text: "Antagonize orexin receptors" },
      { text: "Enhance NMDA transmission" },
    ],
  },
  {
    stem: "Which benzodiazepines are preferred in a patient with significant liver disease because they lack oxidative hepatic metabolism? Select all that apply.",
    type: "MULTI",
    topic: "Sedative-Hypnotics & Anxiolytics",
    explanation:
      "Lorazepam, oxazepam and temazepam undergo only glucuronidation (the LOT drugs), which is relatively preserved in liver disease, so they accumulate less than diazepam or chlordiazepoxide, which require oxidative CYP metabolism. This makes the LOT agents safer in hepatic impairment and the elderly.",
    choices: [
      { text: "Lorazepam", isCorrect: true },
      { text: "Oxazepam", isCorrect: true },
      { text: "Temazepam", isCorrect: true },
      { text: "Diazepam" },
      { text: "Chlordiazepoxide" },
    ],
  },
  {
    stem: "True or False: Combining a benzodiazepine with an opioid substantially increases the risk of fatal respiratory depression.",
    type: "TRUE_FALSE",
    topic: "Sedative-Hypnotics & Anxiolytics",
    explanation:
      "True. Both classes depress the central respiratory drive, and together their effect is synergistic, markedly raising overdose mortality; this combination carries a boxed warning. Co-prescribing is minimized and patients are counseled on the risk.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  /* ══════════════ ANTIEPILEPTIC DRUGS ══════════════ */
  {
    stem: "Phenytoin controls seizures primarily by which mechanism?",
    topic: "Antiepileptic Drugs",
    explanation:
      "Phenytoin blocks voltage-gated sodium channels in their inactivated state, preventing high-frequency repetitive firing without affecting normal transmission. Its metabolism is saturable (zero-order at therapeutic doses), so small dose changes can cause large level swings.",
    choices: [
      { text: "Use-dependent blockade of voltage-gated sodium channels", isCorrect: true },
      { text: "Enhancement of GABA-A chloride currents" },
      { text: "Blockade of T-type calcium channels" },
      { text: "NMDA receptor antagonism" },
      { text: "Inhibition of glutamate release only" },
    ],
  },
  {
    stem: "Chronic phenytoin therapy is classically associated with which adverse effect?",
    topic: "Antiepileptic Drugs",
    explanation:
      "Gingival hyperplasia is a hallmark of long-term phenytoin, along with hirsutism, coarsening of facial features, and megaloblastic anemia from folate interference. It is also a teratogen (fetal hydantoin syndrome). These recognizable effects are frequently tested.",
    choices: [
      { text: "Gingival hyperplasia", isCorrect: true },
      { text: "Pulmonary fibrosis" },
      { text: "Nephrogenic diabetes insipidus" },
      { text: "Corneal deposits" },
      { text: "Hyperthyroidism" },
    ],
  },
  {
    stem: "Ethosuximide is the drug of choice for which seizure type, and by what mechanism?",
    topic: "Antiepileptic Drugs",
    explanation:
      "Ethosuximide blocks T-type calcium channels in thalamic neurons, the pacemakers of the 3-Hz spike-and-wave discharge of absence seizures, making it first-line for that seizure type. It is not effective against tonic-clonic or focal seizures.",
    choices: [
      { text: "Absence seizures, by blocking thalamic T-type calcium channels", isCorrect: true },
      { text: "Status epilepticus, by enhancing GABA" },
      { text: "Focal seizures, by blocking sodium channels" },
      { text: "Myoclonic seizures, by NMDA antagonism" },
      { text: "Tonic-clonic seizures, by calcium influx" },
    ],
  },
  {
    stem: "Valproate is broadly effective across seizure types but carries which serious risks?",
    topic: "Antiepileptic Drugs",
    explanation:
      "Valproate can cause hepatotoxicity, pancreatitis, and is a potent teratogen linked to neural tube defects, so it is avoided in pregnancy when possible. It acts by multiple mechanisms including sodium channel blockade and increased GABA. It also inhibits hepatic enzymes, raising other drug levels.",
    choices: [
      { text: "Hepatotoxicity, pancreatitis, and neural tube defects in pregnancy", isCorrect: true },
      { text: "Nephrolithiasis and glaucoma" },
      { text: "Aplastic anemia and cardiac conduction block only" },
      { text: "Gingival hyperplasia and hirsutism" },
      { text: "Pulmonary fibrosis and thyroid disease" },
    ],
  },
  {
    stem: "First-line pharmacologic treatment to abort an episode of status epilepticus is:",
    topic: "Antiepileptic Drugs",
    explanation:
      "A benzodiazepine such as intravenous lorazepam rapidly enhances GABA-A inhibition to stop ongoing seizure activity; a longer-acting agent such as fosphenytoin or levetiracetam is then loaded to prevent recurrence. Speed of GABAergic action is what makes benzodiazepines first-line.",
    choices: [
      { text: "Intravenous lorazepam", isCorrect: true },
      { text: "Oral ethosuximide" },
      { text: "Intravenous valproate as monotherapy first" },
      { text: "Oral lamotrigine" },
      { text: "Intramuscular phenobarbital as first agent" },
    ],
  },
  {
    stem: "Lamotrigine requires slow dose titration primarily to reduce the risk of:",
    topic: "Antiepileptic Drugs",
    explanation:
      "Rapid lamotrigine escalation increases the risk of Stevens-Johnson syndrome and toxic epidermal necrolysis, so the dose is raised gradually; this risk is higher when combined with valproate, which inhibits its metabolism. Any spreading rash prompts immediate discontinuation.",
    choices: [
      { text: "Stevens-Johnson syndrome", isCorrect: true },
      { text: "Gingival hyperplasia" },
      { text: "Torsades de pointes" },
      { text: "Serotonin syndrome" },
      { text: "Neuroleptic malignant syndrome" },
    ],
  },
  {
    stem: "Which mechanisms are used by antiepileptic drugs to reduce neuronal excitability? Select all that apply.",
    type: "MULTI",
    topic: "Antiepileptic Drugs",
    explanation:
      "Antiepileptics work by blocking voltage-gated sodium channels (phenytoin, carbamazepine), enhancing GABAergic inhibition (benzodiazepines, phenobarbital), and blocking thalamic T-type calcium channels (ethosuximide). Increasing glutamate release or activating NMDA receptors would raise excitability and provoke seizures, not prevent them.",
    choices: [
      { text: "Blocking voltage-gated sodium channels", isCorrect: true },
      { text: "Enhancing GABAergic inhibition", isCorrect: true },
      { text: "Blocking T-type calcium channels", isCorrect: true },
      { text: "Increasing glutamate release" },
      { text: "Activating NMDA receptors" },
    ],
  },
  /* ══════════════ GENERAL ANESTHETICS ══════════════ */
  {
    stem: "The potency of an inhaled anesthetic is expressed as its minimum alveolar concentration (MAC). A drug with a low MAC is:",
    topic: "General Anesthetics",
    explanation:
      "MAC is the alveolar concentration that prevents movement in 50% of patients to a surgical stimulus, so a low MAC means high potency. MAC correlates with lipid solubility (the Meyer-Overton relationship). It falls with age, hypothermia and other CNS depressants.",
    choices: [
      { text: "More potent", isCorrect: true },
      { text: "Less potent" },
      { text: "More water-soluble" },
      { text: "Faster in onset regardless of solubility" },
      { text: "Less lipid-soluble" },
    ],
  },
  {
    stem: "The speed of induction and recovery with an inhaled anesthetic depends most on its:",
    topic: "General Anesthetics",
    explanation:
      "The blood-gas partition coefficient governs onset: a low coefficient (low blood solubility, as with nitrous oxide or desflurane) means the alveolar partial pressure rises quickly, giving rapid induction and emergence. High blood solubility slows both.",
    choices: [
      { text: "Blood-gas partition coefficient", isCorrect: true },
      { text: "Molecular weight" },
      { text: "Color" },
      { text: "Renal clearance" },
      { text: "Protein binding in plasma" },
    ],
  },
  {
    stem: "Propofol is favored for induction and short procedures because it:",
    topic: "General Anesthetics",
    explanation:
      "Propofol has a rapid onset and short duration from quick redistribution, and it has antiemetic properties; it does, however, cause dose-dependent hypotension and respiratory depression and lacks analgesia. Its lipid emulsion supports bacterial growth, requiring strict asepsis.",
    choices: [
      { text: "Has rapid onset and offset with antiemetic properties", isCorrect: true },
      { text: "Provides profound analgesia" },
      { text: "Raises blood pressure reliably" },
      { text: "Has a very long duration of action" },
      { text: "Is a potent bronchoconstrictor" },
    ],
  },
  {
    stem: "Ketamine produces 'dissociative' anesthesia through which primary mechanism?",
    topic: "General Anesthetics",
    explanation:
      "Ketamine antagonizes NMDA glutamate receptors, producing dissociation, analgesia and amnesia while maintaining airway reflexes and increasing sympathetic tone. It is useful in hypotensive trauma but can cause emergence hallucinations. It is unusual in providing analgesia among anesthetics.",
    choices: [
      { text: "NMDA receptor antagonism", isCorrect: true },
      { text: "GABA-A receptor potentiation" },
      { text: "Opioid receptor agonism" },
      { text: "Dopamine receptor blockade" },
      { text: "Sodium channel blockade" },
    ],
  },
  {
    stem: "A patient develops a rapid rise in temperature, muscle rigidity and hypercarbia after receiving a volatile anesthetic and succinylcholine. The treatment is:",
    topic: "General Anesthetics",
    explanation:
      "This is malignant hyperthermia, a genetic ryanodine-receptor disorder causing uncontrolled calcium release; dantrolene, which blocks that release, is the specific antidote along with stopping triggering agents and cooling. Recognizing the trigger drugs is essential to prompt treatment.",
    choices: [
      { text: "Dantrolene", isCorrect: true },
      { text: "Flumazenil" },
      { text: "Naloxone" },
      { text: "Physostigmine" },
      { text: "Neostigmine" },
    ],
  },
  {
    stem: "True or False: Nitrous oxide has a very low potency (high MAC) but a very rapid onset because of its low blood solubility.",
    type: "TRUE_FALSE",
    topic: "General Anesthetics",
    explanation:
      "True. Nitrous oxide is weak (its MAC exceeds 100%, so it cannot produce surgical anesthesia alone) yet its low blood-gas solubility gives a fast onset and offset, which is why it is used as an adjunct. This dissociation of potency from speed is a common point of confusion.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  /* ══════════════ LOCAL ANESTHETICS ══════════════ */
  {
    stem: "Local anesthetics block nerve conduction by acting on which target?",
    topic: "Local Anesthetics",
    explanation:
      "Local anesthetics bind the inner pore of voltage-gated sodium channels, preventing the depolarization needed to propagate an action potential; they preferentially block rapidly firing, small unmyelinated fibers, so pain is lost before motor function. The block is use-dependent.",
    choices: [
      { text: "Voltage-gated sodium channels", isCorrect: true },
      { text: "GABA-A chloride channels" },
      { text: "Potassium channels" },
      { text: "NMDA receptors" },
      { text: "Nicotinic receptors" },
    ],
  },
  {
    stem: "Local anesthetics are often co-injected with epinephrine because it:",
    topic: "Local Anesthetics",
    explanation:
      "Epinephrine causes local vasoconstriction that slows systemic absorption, prolonging the anesthetic effect and reducing toxicity and bleeding. It is avoided in tissues supplied by end arteries (fingers, toes, nose, ear, penis) where vasoconstriction risks ischemia.",
    choices: [
      { text: "Causes vasoconstriction that prolongs the block and limits systemic toxicity", isCorrect: true },
      { text: "Increases the pH of the tissue" },
      { text: "Blocks sodium channels itself" },
      { text: "Speeds systemic absorption for faster onset" },
      { text: "Prevents allergic reactions" },
    ],
  },
  {
    stem: "Why do local anesthetics work poorly in infected, acidic tissue?",
    topic: "Local Anesthetics",
    explanation:
      "Local anesthetics are weak bases; in acidic infected tissue more of the drug is ionized and cannot cross the lipid membrane to reach the intracellular channel site. The uncharged form must enter the cell, so acidosis reduces efficacy — a practical clinical point.",
    choices: [
      { text: "Acidosis increases the ionized fraction that cannot cross the membrane", isCorrect: true },
      { text: "Infection destroys sodium channels" },
      { text: "The drug binds bacteria instead of nerves" },
      { text: "Acidosis speeds hepatic metabolism" },
      { text: "Inflammation blocks all nerve conduction already" },
    ],
  },
  {
    stem: "Which class of local anesthetic is more likely to cause allergic reactions, and why?",
    topic: "Local Anesthetics",
    explanation:
      "Ester local anesthetics (e.g., procaine) are metabolized to para-aminobenzoic acid, a known allergen, so allergy is more common than with amides (e.g., lidocaine). A simple mnemonic is that amides contain two 'i's in the name. Amides are metabolized hepatically.",
    choices: [
      { text: "Esters, because they are metabolized to PABA", isCorrect: true },
      { text: "Amides, because they are metabolized in the liver" },
      { text: "Esters, because they block potassium channels" },
      { text: "Amides, because they contain epinephrine" },
      { text: "Both classes are equally allergenic" },
    ],
  },
  {
    stem: "Systemic local anesthetic toxicity, such as from inadvertent intravascular bupivacaine, characteristically causes:",
    topic: "Local Anesthetics",
    explanation:
      "Local anesthetic systemic toxicity progresses from perioral numbness and tinnitus to seizures and, with bupivacaine especially, refractory cardiac arrhythmias and arrest; intravenous lipid emulsion is the specific rescue therapy. Bupivacaine is the most cardiotoxic of the amides.",
    choices: [
      { text: "CNS excitation then seizures and cardiac arrhythmias, treated with lipid emulsion", isCorrect: true },
      { text: "Immediate hepatic failure" },
      { text: "Malignant hyperthermia" },
      { text: "Isolated renal failure" },
      { text: "A cholinergic crisis" },
    ],
  },
  /* ══════════════ ANTIDEPRESSANTS ══════════════ */
  {
    stem: "Selective serotonin reuptake inhibitors (SSRIs) are first-line for depression mainly because they:",
    topic: "Antidepressants",
    explanation:
      "SSRIs block the presynaptic serotonin transporter, raising synaptic serotonin, and are favored for a safer overdose profile and fewer anticholinergic and cardiac effects than older agents. Therapeutic benefit takes several weeks despite the immediate biochemical effect.",
    choices: [
      { text: "Block serotonin reuptake with a safer overdose profile than older agents", isCorrect: true },
      { text: "Block dopamine reuptake selectively" },
      { text: "Inhibit monoamine oxidase" },
      { text: "Have strong anticholinergic activity" },
      { text: "Work within hours of the first dose" },
    ],
  },
  {
    stem: "Combining an SSRI with an MAO inhibitor or other serotonergic drug risks serotonin syndrome, which presents with:",
    topic: "Antidepressants",
    explanation:
      "Serotonin syndrome features the triad of neuromuscular hyperactivity (clonus, hyperreflexia), autonomic instability (hyperthermia, tachycardia) and altered mental status; treatment is supportive with cyproheptadine as an antidote. A washout period between these drugs prevents it.",
    choices: [
      { text: "Clonus, hyperreflexia, hyperthermia, and altered mental status", isCorrect: true },
      { text: "Bradycardia and flaccid paralysis" },
      { text: "Gingival hyperplasia and hirsutism" },
      { text: "Isolated hepatic failure" },
      { text: "Photosensitivity rash only" },
    ],
  },
  {
    stem: "Tricyclic antidepressant overdose is dangerous chiefly because of:",
    topic: "Antidepressants",
    explanation:
      "TCAs block cardiac sodium channels, causing QRS widening and life-threatening arrhythmias in overdose, along with anticholinergic and seizure effects; sodium bicarbonate is given to narrow the QRS. This cardiotoxicity is why TCAs are avoided in patients at risk of overdose.",
    choices: [
      { text: "Sodium-channel blockade causing QRS widening and arrhythmia", isCorrect: true },
      { text: "Serotonin depletion" },
      { text: "Direct hepatotoxicity" },
      { text: "Renal tubular necrosis" },
      { text: "Pulmonary fibrosis" },
    ],
  },
  {
    stem: "A patient taking a nonselective MAO inhibitor eats aged cheese and develops a severe headache and hypertensive crisis. This occurred because:",
    topic: "Antidepressants",
    explanation:
      "MAO inhibitors prevent breakdown of dietary tyramine, which then releases stored norepinephrine and causes a hypertensive crisis; patients must avoid tyramine-rich foods such as aged cheeses and cured meats. This 'cheese reaction' is a classic tested interaction.",
    choices: [
      { text: "Unmetabolized tyramine triggered a norepinephrine surge", isCorrect: true },
      { text: "Serotonin syndrome from the cheese" },
      { text: "An allergic reaction to dairy" },
      { text: "Hypoglycemia from the meal" },
      { text: "Direct histamine release" },
    ],
  },
  {
    stem: "Bupropion is a useful antidepressant option in specific situations because it:",
    topic: "Antidepressants",
    explanation:
      "Bupropion inhibits norepinephrine and dopamine reuptake, lacks sexual side effects, aids smoking cessation, and can be activating; however, it lowers the seizure threshold and is avoided in eating disorders and seizure history. Its distinct profile makes it a common second-line choice.",
    choices: [
      { text: "Lacks sexual side effects and aids smoking cessation but lowers the seizure threshold", isCorrect: true },
      { text: "Is the safest choice in patients with a seizure history" },
      { text: "Strongly increases appetite and weight" },
      { text: "Inhibits monoamine oxidase" },
      { text: "Blocks serotonin reuptake exclusively" },
    ],
  },
  {
    stem: "Which antidepressant is often chosen at bedtime for a depressed patient with insomnia and poor appetite because of its sedating and appetite-stimulating effects?",
    topic: "Antidepressants",
    explanation:
      "Mirtazapine antagonizes central alpha-2 receptors (increasing norepinephrine and serotonin release) and blocks H1 histamine and 5-HT2/5-HT3 receptors, producing sedation, weight gain and antiemetic effects useful in selected patients. These properties guide its niche use.",
    choices: [
      { text: "Mirtazapine", isCorrect: true },
      { text: "Fluoxetine" },
      { text: "Bupropion" },
      { text: "Venlafaxine" },
      { text: "Phenelzine" },
    ],
  },
  {
    stem: "Which statements about SSRIs are correct? Select all that apply.",
    type: "MULTI",
    topic: "Antidepressants",
    explanation:
      "SSRIs commonly cause sexual dysfunction and initial gastrointestinal upset, take about 4-6 weeks for full antidepressant effect, and can cause a discontinuation syndrome if stopped abruptly (least with long-half-life fluoxetine). They are not free of overdose risk when combined with other serotonergic agents, and they are not immediate in effect.",
    choices: [
      { text: "They commonly cause sexual dysfunction", isCorrect: true },
      { text: "Full antidepressant effect takes several weeks", isCorrect: true },
      { text: "Abrupt discontinuation can cause a withdrawal syndrome", isCorrect: true },
      { text: "They produce full mood benefit within 24 hours" },
      { text: "They cannot contribute to serotonin syndrome" },
    ],
  },
  {
    stem: "True or False: There is a boxed warning that antidepressants may increase suicidal ideation in children, adolescents and young adults, especially early in treatment.",
    type: "TRUE_FALSE",
    topic: "Antidepressants",
    explanation:
      "True. A boxed warning notes increased suicidal thinking and behavior in patients under 25 during the initial weeks, so close monitoring is advised after starting or changing dose. Overall the drugs reduce suicide risk in the broader population, but early vigilance is important.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  /* ══════════════ MOOD STABILIZERS ══════════════ */
  {
    stem: "Lithium requires careful monitoring because it has:",
    topic: "Mood Stabilizers",
    explanation:
      "Lithium has a narrow therapeutic index, so serum levels must be checked regularly; it is renally cleared and its level rises with dehydration, NSAIDs, thiazides and ACE inhibitors. Toxicity causes tremor, confusion, ataxia and seizures.",
    choices: [
      { text: "A narrow therapeutic index with renal clearance sensitive to volume status", isCorrect: true },
      { text: "A very wide therapeutic index" },
      { text: "Purely hepatic metabolism" },
      { text: "No known drug interactions" },
      { text: "Rapid onset within hours" },
    ],
  },
  {
    stem: "Long-term lithium therapy is associated with which endocrine and renal effects?",
    topic: "Mood Stabilizers",
    explanation:
      "Lithium can cause hypothyroidism and nephrogenic diabetes insipidus by impairing the renal response to ADH, so thyroid and renal function are monitored. It is also a teratogen (Ebstein anomaly). These chronic effects distinguish it from other mood stabilizers.",
    choices: [
      { text: "Hypothyroidism and nephrogenic diabetes insipidus", isCorrect: true },
      { text: "Hyperthyroidism and central diabetes insipidus" },
      { text: "Adrenal insufficiency and hyperkalemia" },
      { text: "Hyperparathyroidism resolving on stopping the drug within hours" },
      { text: "Cushing syndrome" },
    ],
  },
  {
    stem: "Besides lithium, which agents are commonly used as mood stabilizers in bipolar disorder?",
    topic: "Mood Stabilizers",
    explanation:
      "Valproate, carbamazepine and lamotrigine are anticonvulsants with established mood-stabilizing roles; lamotrigine is particularly useful for the depressive phase. Several second-generation antipsychotics are also used. SSRIs alone can precipitate mania and are not mood stabilizers.",
    choices: [
      { text: "Valproate, carbamazepine, and lamotrigine", isCorrect: true },
      { text: "Phenytoin and ethosuximide" },
      { text: "Benzodiazepines alone" },
      { text: "SSRIs used as monotherapy" },
      { text: "Beta-blockers" },
    ],
  },
  {
    stem: "Which factors can precipitate lithium toxicity by raising its serum level? Select all that apply.",
    type: "MULTI",
    topic: "Mood Stabilizers",
    explanation:
      "Because lithium is cleared like sodium by the kidney, dehydration, thiazide diuretics, NSAIDs and ACE inhibitors all reduce its excretion and raise its level. Increasing dietary sodium and fluid intake, by contrast, promotes lithium excretion and lowers the level.",
    choices: [
      { text: "Dehydration", isCorrect: true },
      { text: "Thiazide diuretics", isCorrect: true },
      { text: "NSAIDs", isCorrect: true },
      { text: "ACE inhibitors", isCorrect: true },
      { text: "High dietary sodium and fluid intake" },
    ],
  },
  /* ══════════════ ANTIPSYCHOTICS ══════════════ */
  {
    stem: "The antipsychotic effect of typical (first-generation) agents is attributed mainly to blockade of which receptor?",
    topic: "Antipsychotics",
    explanation:
      "Typical antipsychotics block dopamine D2 receptors, especially in the mesolimbic pathway, reducing positive symptoms; blockade in the nigrostriatal pathway produces extrapyramidal side effects. Their potency correlates with D2 affinity.",
    choices: [
      { text: "Dopamine D2 receptors", isCorrect: true },
      { text: "Serotonin 5-HT1A receptors" },
      { text: "GABA-A receptors" },
      { text: "Muscarinic M1 receptors only" },
      { text: "NMDA receptors" },
    ],
  },
  {
    stem: "A young man given haloperidol develops sustained involuntary muscle contraction of the neck and eyes within hours. This acute dystonia is treated with:",
    topic: "Antipsychotics",
    explanation:
      "Acute dystonic reactions from D2 blockade shift the striatal dopamine-acetylcholine balance toward cholinergic excess; an anticholinergic such as benztropine or the antihistamine diphenhydramine reverses it rapidly. Recognizing this early extrapyramidal effect prevents distress.",
    choices: [
      { text: "Benztropine or diphenhydramine", isCorrect: true },
      { text: "Dantrolene" },
      { text: "Naloxone" },
      { text: "Flumazenil" },
      { text: "Physostigmine" },
    ],
  },
  {
    stem: "A patient on an antipsychotic develops high fever, 'lead-pipe' rigidity, altered mental status and markedly elevated creatine kinase. This is:",
    topic: "Antipsychotics",
    explanation:
      "Neuroleptic malignant syndrome is a rare, life-threatening reaction to dopamine blockade; management is to stop the drug and provide supportive care, with dantrolene or bromocriptine in severe cases. It resembles malignant hyperthermia but follows dopamine antagonists.",
    choices: [
      { text: "Neuroleptic malignant syndrome", isCorrect: true },
      { text: "Serotonin syndrome" },
      { text: "Anticholinergic toxidrome" },
      { text: "Acute dystonia" },
      { text: "Tardive dyskinesia" },
    ],
  },
  {
    stem: "Tardive dyskinesia differs from acute extrapyramidal effects in that it:",
    topic: "Antipsychotics",
    explanation:
      "Tardive dyskinesia is a late-onset disorder of repetitive involuntary movements (often orofacial) from chronic D2 blockade and receptor upregulation; it may be irreversible, so prevention and early recognition matter. Anticholinergics can worsen rather than help it.",
    choices: [
      { text: "Appears after prolonged use and may be irreversible", isCorrect: true },
      { text: "Occurs within hours and reverses with anticholinergics" },
      { text: "Is caused by serotonin excess" },
      { text: "Always resolves quickly when the drug is stopped" },
      { text: "Is a feature of NMDA antagonism" },
    ],
  },
  {
    stem: "Clozapine is reserved for treatment-resistant schizophrenia and requires regular blood monitoring because of the risk of:",
    topic: "Antipsychotics",
    explanation:
      "Clozapine can cause agranulocytosis, mandating regular absolute neutrophil count monitoring; it also carries risks of myocarditis, seizures and metabolic effects. Despite this, it is uniquely effective in resistant cases and reduces suicidality.",
    choices: [
      { text: "Agranulocytosis", isCorrect: true },
      { text: "Aplastic anemia from folate loss" },
      { text: "Hemolytic anemia" },
      { text: "Polycythemia" },
      { text: "Isolated thrombocytosis" },
    ],
  },
  {
    stem: "Second-generation (atypical) antipsychotics are distinguished from typical agents by:",
    topic: "Antipsychotics",
    explanation:
      "Atypicals block 5-HT2A in addition to D2 receptors, which lessens extrapyramidal effects and may help negative symptoms, but they cause metabolic side effects such as weight gain, hyperglycemia and dyslipidemia. Monitoring weight, glucose and lipids is standard.",
    choices: [
      { text: "Additional 5-HT2A blockade, fewer EPS, but more metabolic effects", isCorrect: true },
      { text: "Pure dopamine agonism" },
      { text: "No effect on serotonin receptors" },
      { text: "A complete absence of any side effects" },
      { text: "Greater extrapyramidal effects than typicals" },
    ],
  },
  {
    stem: "Which adverse effects are associated with dopamine D2 blockade by antipsychotics? Select all that apply.",
    type: "MULTI",
    topic: "Antipsychotics",
    explanation:
      "D2 blockade in the nigrostriatal pathway causes extrapyramidal symptoms, in the tuberoinfundibular pathway raises prolactin (causing galactorrhea and menstrual changes), and can precipitate neuroleptic malignant syndrome. Improved insulin sensitivity is not a consequence; atypicals in fact impair glucose handling.",
    choices: [
      { text: "Extrapyramidal symptoms", isCorrect: true },
      { text: "Hyperprolactinemia", isCorrect: true },
      { text: "Neuroleptic malignant syndrome", isCorrect: true },
      { text: "Improved insulin sensitivity" },
      { text: "Reduced prolactin secretion" },
    ],
  },
  /* ══════════════ ANTIPARKINSONIAN DRUGS ══════════════ */
  {
    stem: "Levodopa is combined with carbidopa in Parkinson disease because carbidopa:",
    topic: "Antiparkinsonian Drugs",
    explanation:
      "Carbidopa inhibits peripheral DOPA decarboxylase but does not cross the blood-brain barrier, so more levodopa reaches the brain and peripheral side effects such as nausea and hypotension are reduced. This lets a lower levodopa dose achieve the same central effect.",
    choices: [
      { text: "Blocks peripheral conversion of levodopa, increasing central delivery", isCorrect: true },
      { text: "Is itself a dopamine agonist in the brain" },
      { text: "Blocks central dopamine metabolism" },
      { text: "Prevents dopamine receptor downregulation" },
      { text: "Crosses the blood-brain barrier to make dopamine centrally" },
    ],
  },
  {
    stem: "Why does levodopa cross the blood-brain barrier when dopamine itself cannot?",
    topic: "Antiparkinsonian Drugs",
    explanation:
      "Levodopa is an amino acid transported across the blood-brain barrier by the large neutral amino acid carrier, then decarboxylated to dopamine centrally; dopamine lacks this transport and cannot enter the brain. A high-protein meal can compete for the carrier and reduce the effect.",
    choices: [
      { text: "It is carried across by an amino acid transporter and converted centrally", isCorrect: true },
      { text: "It is highly lipid-soluble and diffuses freely" },
      { text: "It is actively pumped by P-glycoprotein" },
      { text: "It binds albumin that carries it across" },
      { text: "It is converted to dopamine in the blood" },
    ],
  },
  {
    stem: "Which drug is a dopamine agonist used, sometimes as monotherapy, in early Parkinson disease?",
    topic: "Antiparkinsonian Drugs",
    explanation:
      "Pramipexole and ropinirole directly stimulate dopamine receptors and can delay levodopa use, though they may cause impulse-control disorders and sudden sleep attacks. Directly agonizing the receptor bypasses the need for dopamine synthesis.",
    choices: [
      { text: "Pramipexole", isCorrect: true },
      { text: "Carbidopa" },
      { text: "Entacapone" },
      { text: "Benztropine" },
      { text: "Donepezil" },
    ],
  },
  {
    stem: "Entacapone extends the effect of levodopa by inhibiting which enzyme?",
    topic: "Antiparkinsonian Drugs",
    explanation:
      "Entacapone inhibits catechol-O-methyltransferase (COMT), reducing peripheral breakdown of levodopa and prolonging its plasma level and central availability. It is given with each levodopa dose to smooth out end-of-dose wearing off.",
    choices: [
      { text: "Catechol-O-methyltransferase (COMT)", isCorrect: true },
      { text: "Monoamine oxidase A" },
      { text: "DOPA decarboxylase in the brain" },
      { text: "Acetylcholinesterase" },
      { text: "Tyrosine hydroxylase" },
    ],
  },
  {
    stem: "True or False: Selegiline is a selective MAO-B inhibitor that increases central dopamine and is used in Parkinson disease.",
    type: "TRUE_FALSE",
    topic: "Antiparkinsonian Drugs",
    explanation:
      "True. At usual doses selegiline selectively inhibits MAO-B, which preferentially metabolizes dopamine in the brain, so it raises dopamine without the tyramine reaction of nonselective MAO inhibitors. Selectivity can be lost at high doses.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  /* ══════════════ NEURODEGENERATIVE DISEASE DRUGS ══════════════ */
  {
    stem: "The cholinesterase inhibitors donepezil, rivastigmine and galantamine are used in Alzheimer disease to:",
    topic: "Neurodegenerative Disease Drugs",
    explanation:
      "By inhibiting acetylcholinesterase, these drugs raise synaptic acetylcholine to partly offset the cholinergic deficit of Alzheimer disease, giving modest symptomatic benefit. Cholinergic side effects (nausea, diarrhea, bradycardia) are common. They do not halt neurodegeneration.",
    choices: [
      { text: "Increase synaptic acetylcholine to give modest symptomatic benefit", isCorrect: true },
      { text: "Block NMDA receptors" },
      { text: "Increase dopamine synthesis" },
      { text: "Dissolve amyloid plaques directly" },
      { text: "Block acetylcholine release" },
    ],
  },
  {
    stem: "Memantine provides benefit in moderate-to-severe Alzheimer disease through which mechanism?",
    topic: "Neurodegenerative Disease Drugs",
    explanation:
      "Memantine is an NMDA receptor antagonist that dampens pathologic glutamate-mediated excitotoxicity while permitting normal signaling, offering modest benefit and often combined with a cholinesterase inhibitor. Its mechanism is distinct from the cholinergic agents.",
    choices: [
      { text: "NMDA receptor antagonism reducing excitotoxicity", isCorrect: true },
      { text: "Acetylcholinesterase inhibition" },
      { text: "Dopamine reuptake inhibition" },
      { text: "GABA-A potentiation" },
      { text: "Serotonin reuptake inhibition" },
    ],
  },
  {
    stem: "Riluzole, used in amyotrophic lateral sclerosis, is thought to act mainly by:",
    topic: "Neurodegenerative Disease Drugs",
    explanation:
      "Riluzole reduces glutamate-mediated excitotoxicity, in part by inhibiting glutamate release and blocking sodium channels, and modestly prolongs survival in ALS. It does not reverse the disease but slows progression, illustrating the excitotoxicity theme in neurodegeneration.",
    choices: [
      { text: "Reducing glutamate excitotoxicity", isCorrect: true },
      { text: "Increasing acetylcholine" },
      { text: "Replacing dopamine" },
      { text: "Enhancing GABA release" },
      { text: "Blocking amyloid formation" },
    ],
  },
  {
    stem: "A patient starting a cholinesterase inhibitor for dementia should be counseled about which class-typical adverse effects?",
    topic: "Neurodegenerative Disease Drugs",
    explanation:
      "Raising acetylcholine produces cholinergic effects: nausea, vomiting, diarrhea, and bradycardia, which can cause syncope and falls. These effects are dose-related and are the main reason for gradual titration and caution in patients with conduction disease.",
    choices: [
      { text: "Nausea, diarrhea, and bradycardia", isCorrect: true },
      { text: "Dry mouth and urinary retention" },
      { text: "Hyperthermia and rigidity" },
      { text: "Mydriasis and tachycardia" },
      { text: "Hyperglycemia and weight gain" },
    ],
  },
  /* ══════════════ OPIOID ANALGESICS ══════════════ */
  {
    stem: "Opioids produce analgesia mainly through agonism at which receptor?",
    topic: "Opioid Analgesics",
    explanation:
      "The mu-opioid receptor mediates most analgesia as well as euphoria, respiratory depression, sedation, and constipation; these effects travel together because they share the receptor. Understanding this explains why potent analgesia and respiratory risk are linked.",
    choices: [
      { text: "The mu-opioid receptor", isCorrect: true },
      { text: "The GABA-B receptor" },
      { text: "The NMDA receptor" },
      { text: "The alpha-2 adrenergic receptor" },
      { text: "The dopamine D2 receptor" },
    ],
  },
  {
    stem: "The most dangerous acute effect of opioid overdose is:",
    topic: "Opioid Analgesics",
    explanation:
      "Opioids depress the brainstem respiratory drive, and respiratory failure is the usual cause of death in overdose; the classic triad is coma, pinpoint pupils and respiratory depression. Naloxone rapidly reverses it. Constipation, though common, is not the lethal effect.",
    choices: [
      { text: "Respiratory depression", isCorrect: true },
      { text: "Mydriasis" },
      { text: "Severe hypertension" },
      { text: "Diarrhea" },
      { text: "Seizures as the first sign" },
    ],
  },
  {
    stem: "Naloxone reverses opioid toxicity, but its short duration relative to many opioids means:",
    topic: "Opioid Analgesics",
    explanation:
      "Naloxone is a competitive mu-antagonist with a shorter half-life than most opioids, so re-sedation can occur and patients require monitoring or repeat dosing. In dependent patients it can precipitate acute withdrawal, which is distressing but not usually life-threatening.",
    choices: [
      { text: "Re-sedation can occur, requiring repeat dosing and observation", isCorrect: true },
      { text: "A single dose provides permanent reversal" },
      { text: "It should never be repeated" },
      { text: "It causes fatal withdrawal in all patients" },
      { text: "It also reverses benzodiazepines" },
    ],
  },
  {
    stem: "Tramadol carries an added risk of seizures and serotonin syndrome because, beyond weak mu-agonism, it:",
    topic: "Opioid Analgesics",
    explanation:
      "Tramadol also inhibits serotonin and norepinephrine reuptake, so it can lower the seizure threshold and contribute to serotonin syndrome when combined with other serotonergic drugs. This dual mechanism distinguishes it from pure opioids.",
    choices: [
      { text: "Inhibits serotonin and norepinephrine reuptake", isCorrect: true },
      { text: "Blocks dopamine reuptake strongly" },
      { text: "Is a potent GABA antagonist" },
      { text: "Directly blocks sodium channels" },
      { text: "Inhibits monoamine oxidase" },
    ],
  },
  {
    stem: "Which opioid is a partial mu-agonist used in maintenance treatment of opioid use disorder, often combined with naloxone to deter injection?",
    topic: "Opioid Analgesics",
    explanation:
      "Buprenorphine is a high-affinity partial mu-agonist with a ceiling on respiratory depression, making overdose less likely; combined with naloxone (which is inert orally but active if injected), it discourages misuse. Methadone, a full agonist, is the other maintenance option.",
    choices: [
      { text: "Buprenorphine", isCorrect: true },
      { text: "Fentanyl" },
      { text: "Morphine" },
      { text: "Codeine" },
      { text: "Meperidine" },
    ],
  },
  {
    stem: "Which effects are expected features of opioid agonism? Select all that apply.",
    type: "MULTI",
    topic: "Opioid Analgesics",
    explanation:
      "Opioids cause miosis, constipation (little tolerance develops, so it persists), and respiratory depression, all via mu-receptor effects. They do not cause mydriasis, and tolerance develops to most effects except miosis and constipation, so those two remain reliable clinical clues.",
    choices: [
      { text: "Miosis", isCorrect: true },
      { text: "Constipation", isCorrect: true },
      { text: "Respiratory depression", isCorrect: true },
      { text: "Mydriasis" },
      { text: "Reliable tolerance to constipation over time" },
    ],
  },
  {
    stem: "True or False: Meperidine can accumulate a neurotoxic metabolite (normeperidine) that lowers the seizure threshold, especially in renal impairment.",
    type: "TRUE_FALSE",
    topic: "Opioid Analgesics",
    explanation:
      "True. Normeperidine accumulates with repeated dosing or reduced renal clearance and can cause tremor and seizures, which is why meperidine is avoided for chronic pain and in renal impairment. This metabolite risk sets it apart from other opioids.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  /* ══════════════ DRUGS OF ABUSE & STIMULANTS ══════════════ */
  {
    stem: "Cocaine produces its stimulant and sympathomimetic effects mainly by:",
    topic: "Drugs of Abuse & Stimulants",
    explanation:
      "Cocaine blocks reuptake of dopamine, norepinephrine and serotonin, prolonging their synaptic action; the norepinephrine effect causes vasoconstriction, hypertension and risk of myocardial infarction. Because of unopposed alpha effects, beta-blockers are traditionally avoided in acute toxicity.",
    choices: [
      { text: "Blocking reuptake of dopamine, norepinephrine, and serotonin", isCorrect: true },
      { text: "Directly agonizing dopamine receptors" },
      { text: "Inhibiting monoamine oxidase" },
      { text: "Enhancing GABA release" },
      { text: "Blocking NMDA receptors" },
    ],
  },
  {
    stem: "The stimulants used in ADHD, such as methylphenidate and amphetamines, act by:",
    topic: "Drugs of Abuse & Stimulants",
    explanation:
      "These agents increase synaptic dopamine and norepinephrine — methylphenidate by blocking reuptake and amphetamines additionally by promoting release — improving attention. Their abuse potential and cardiovascular and appetite-suppressant effects require monitoring.",
    choices: [
      { text: "Raising synaptic dopamine and norepinephrine", isCorrect: true },
      { text: "Blocking acetylcholine receptors" },
      { text: "Enhancing GABA-A currents" },
      { text: "Blocking serotonin release" },
      { text: "Agonizing opioid receptors" },
    ],
  },
  {
    stem: "A patient in alcohol withdrawal at risk of seizures and delirium tremens is best treated with:",
    topic: "Drugs of Abuse & Stimulants",
    explanation:
      "Benzodiazepines are first-line for alcohol withdrawal because they substitute for alcohol's GABA effect, preventing seizures and delirium tremens; long-acting agents give a smoother course, with lorazepam preferred in liver disease. Thiamine is given to prevent Wernicke encephalopathy.",
    choices: [
      { text: "Benzodiazepines", isCorrect: true },
      { text: "Naltrexone" },
      { text: "Haloperidol as monotherapy" },
      { text: "Flumazenil" },
      { text: "Bupropion" },
    ],
  },
  {
    stem: "Disulfiram deters alcohol use by inhibiting which enzyme, and what results if alcohol is consumed?",
    topic: "Drugs of Abuse & Stimulants",
    explanation:
      "Disulfiram inhibits aldehyde dehydrogenase, so acetaldehyde accumulates after drinking, causing flushing, nausea, vomiting and tachycardia — a deliberately aversive reaction. Patients must avoid even small hidden sources of alcohol. Adherence limits its effectiveness.",
    choices: [
      { text: "Aldehyde dehydrogenase, causing an aversive acetaldehyde reaction", isCorrect: true },
      { text: "Alcohol dehydrogenase, causing intoxication" },
      { text: "CYP2E1, causing sedation" },
      { text: "Monoamine oxidase, causing hypertension" },
      { text: "Acetylcholinesterase, causing a cholinergic crisis" },
    ],
  },
  {
    stem: "Which medications are used to support long-term abstinence in alcohol use disorder? Select all that apply.",
    type: "MULTI",
    topic: "Drugs of Abuse & Stimulants",
    explanation:
      "Naltrexone (an opioid antagonist that reduces reward), acamprosate (which modulates glutamate/GABA balance), and disulfiram (an aversive agent) are approved to support abstinence. Flumazenil and bupropion are not used for maintaining alcohol abstinence.",
    choices: [
      { text: "Naltrexone", isCorrect: true },
      { text: "Acamprosate", isCorrect: true },
      { text: "Disulfiram", isCorrect: true },
      { text: "Flumazenil" },
      { text: "Bupropion" },
    ],
  },
  /* ══════════════ CLINICAL APPLICATION ══════════════ */
  {
    stem: "An elderly patient becomes confused, hot, dry and flushed with dilated pupils and urinary retention after starting a medication. This anticholinergic toxidrome is best reversed by:",
    topic: "Clinical Application",
    explanation:
      "Physostigmine, a cholinesterase inhibitor that crosses the blood-brain barrier, reverses central and peripheral antimuscarinic toxicity; it is used cautiously given its own cholinergic risks. The dry, hot, flushed, dilated-pupil picture ('mad as a hatter, dry as a bone') identifies the syndrome.",
    choices: [
      { text: "Physostigmine", isCorrect: true },
      { text: "Atropine" },
      { text: "Naloxone" },
      { text: "Flumazenil" },
      { text: "Dantrolene" },
    ],
  },
  {
    stem: "A depressed patient with neuropathic pain might benefit from a single agent that treats both. A reasonable choice is:",
    topic: "Clinical Application",
    explanation:
      "Serotonin-norepinephrine reuptake inhibitors such as duloxetine, and tricyclics such as amitriptyline, relieve neuropathic pain and treat depression, so one drug can address both conditions. This dual benefit is a common integrative prescribing point.",
    choices: [
      { text: "Duloxetine", isCorrect: true },
      { text: "Zolpidem" },
      { text: "Haloperidol" },
      { text: "Lithium" },
      { text: "Buspirone" },
    ],
  },
  {
    stem: "Which drug interaction poses the greatest risk of serotonin syndrome and should prompt a washout period?",
    topic: "Clinical Application",
    explanation:
      "Combining a monoamine oxidase inhibitor with an SSRI (or other strong serotonergic agent) can cause life-threatening serotonin syndrome, so a washout — typically two weeks, or five weeks after fluoxetine — is required between them. This is a high-yield safety rule.",
    choices: [
      { text: "An MAO inhibitor combined with an SSRI", isCorrect: true },
      { text: "A statin combined with amlodipine" },
      { text: "Metformin combined with an SSRI" },
      { text: "A beta-blocker combined with a thiazide" },
      { text: "Aspirin combined with acetaminophen" },
    ],
  },
  {
    stem: "A pregnant woman with a seizure disorder needs counseling because several antiepileptics are teratogenic. Which agent is most strongly linked to neural tube defects?",
    topic: "Clinical Application",
    explanation:
      "Valproate carries the highest risk of neural tube defects and adverse neurodevelopmental outcomes, so it is avoided in pregnancy when alternatives exist, with folate supplementation advised. Preconception planning to switch agents is standard care.",
    choices: [
      { text: "Valproate", isCorrect: true },
      { text: "Levetiracetam" },
      { text: "Lamotrigine" },
      { text: "Gabapentin" },
      { text: "Ethosuximide" },
    ],
  },
  {
    stem: "Which pairings of central nervous system toxidrome or reaction and its antidote are correct? Select all that apply.",
    type: "MULTI",
    topic: "Clinical Application",
    explanation:
      "Opioid toxicity is reversed by naloxone, benzodiazepine toxicity by flumazenil (used cautiously), and malignant hyperthermia by dantrolene. Serotonin syndrome is managed supportively with cyproheptadine, not with naloxone, so that pairing is incorrect.",
    choices: [
      { text: "Opioid overdose — naloxone", isCorrect: true },
      { text: "Benzodiazepine overdose — flumazenil", isCorrect: true },
      { text: "Malignant hyperthermia — dantrolene", isCorrect: true },
      { text: "Serotonin syndrome — naloxone" },
      { text: "Acute dystonia — dantrolene" },
    ],
  },
  {
    stem: "True or False: When starting an antipsychotic in a patient with dementia-related psychosis, the increased risk of death in elderly dementia patients must be weighed, as these agents carry a boxed warning for that use.",
    type: "TRUE_FALSE",
    topic: "Clinical Application",
    explanation:
      "True. Antipsychotics carry a boxed warning for increased mortality in elderly patients with dementia-related psychosis, so they are used only when non-drug measures fail and benefits outweigh risks. This shapes cautious prescribing in that population.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
];
