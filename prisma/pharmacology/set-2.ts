/**
 * PHARMACOLOGY — PRACTICE SET 2
 * Autonomic Pharmacology
 *
 * Difficulty: Foundational-Intermediate. The set that makes cardiovascular and
 * CNS pharmacology comprehensible rather than memorized: receptor subtype,
 * tissue effect, and the drug that exploits it.
 *
 * 92 questions across 12 topics:
 *   Autonomic Anatomy & Transmitters · Cholinergic Receptors · Cholinergic
 *   Agonists · Anticholinesterases · Muscarinic Antagonists · Neuromuscular
 *   Blockers · Adrenergic Receptors · Adrenergic Agonists · Alpha & Beta
 *   Blockers · Indirect Sympathomimetics & Sympatholytics · Toxidromes &
 *   Antidotes · Clinical Application
 *
 * Item mix: 68 single-answer vignettes, 12 select-all-that-apply, 12 true/false.
 * US generic drug names and conventional units throughout.
 */

import type { Q } from "../_lib/qbank";

export const PHARMACOLOGY_SET_2: Q[] = [
  /* ══════════════ AUTONOMIC ANATOMY & TRANSMITTERS ══════════════ */
  {
    stem: "Which neurotransmitter is released at ALL autonomic ganglia, sympathetic and parasympathetic alike, and at which receptor does it act?",
    topic: "Autonomic Anatomy & Transmitters",
    explanation:
      "Acetylcholine acts at nicotinic receptors in every autonomic ganglion, which is why ganglionic blockers affect both divisions indiscriminately. The divisions differ only at the postganglionic terminal, where sympathetic fibers mostly release norepinephrine.",
    choices: [
      { text: "Acetylcholine at nicotinic receptors", isCorrect: true },
      { text: "Norepinephrine at alpha-1 receptors" },
      { text: "Acetylcholine at muscarinic receptors" },
      { text: "Dopamine at D1 receptors" },
      { text: "Epinephrine at beta-2 receptors" },
    ],
  },
  {
    stem: "Which sympathetic postganglionic fibers are exceptional in releasing acetylcholine rather than norepinephrine?",
    topic: "Autonomic Anatomy & Transmitters",
    explanation:
      "Sympathetic fibers to thermoregulatory sweat glands are cholinergic, acting on muscarinic receptors. This is why anticholinergic drugs cause dry, hot skin — the sympathetic sweat pathway is blocked despite being sympathetic.",
    choices: [
      { text: "Fibers to thermoregulatory sweat glands", isCorrect: true },
      { text: "Fibers to cardiac muscle" },
      { text: "Fibers to bronchial smooth muscle" },
      { text: "Fibers to renal vasculature" },
      { text: "Fibers to the radial muscle of the iris" },
    ],
  },
  {
    stem: "The adrenal medulla is best described as which structure, and what does it release?",
    topic: "Autonomic Anatomy & Transmitters",
    explanation:
      "It is a modified sympathetic ganglion whose chromaffin cells are innervated directly by preganglionic cholinergic fibers, releasing roughly 80% epinephrine and 20% norepinephrine into the blood. Having no postganglionic axon is what makes its output hormonal rather than neural.",
    choices: [
      { text: "A modified sympathetic ganglion releasing mostly epinephrine into blood", isCorrect: true },
      { text: "A parasympathetic ganglion releasing acetylcholine" },
      { text: "A postganglionic sympathetic neuron releasing only norepinephrine" },
      { text: "An endocrine gland releasing only dopamine" },
      { text: "A somatic motor structure releasing acetylcholine at nicotinic receptors" },
    ],
  },
  {
    stem: "Which of the following are true of norepinephrine synthesis and disposal? Select all that apply.",
    type: "MULTI",
    topic: "Autonomic Anatomy & Transmitters",
    explanation:
      "Synthesis runs tyrosine → DOPA → dopamine → norepinephrine, with tyrosine hydroxylase rate-limiting, and the transmitter is chiefly cleared by reuptake into the nerve terminal rather than by enzymatic breakdown. MAO and COMT degrade what escapes. Acetylcholinesterase has no role, and norepinephrine is not converted to epinephrine except in the adrenal medulla.",
    choices: [
      { text: "Tyrosine hydroxylase is the rate-limiting enzyme", isCorrect: true },
      { text: "Reuptake into the presynaptic terminal is the main termination mechanism", isCorrect: true },
      { text: "MAO and COMT degrade norepinephrine that escapes reuptake", isCorrect: true },
      { text: "Acetylcholinesterase terminates its action in the synapse" },
      { text: "It is routinely converted to epinephrine at sympathetic nerve terminals" },
    ],
  },
  {
    stem: "True or False: Acetylcholine action in the synapse is terminated by enzymatic hydrolysis rather than by reuptake.",
    type: "TRUE_FALSE",
    topic: "Autonomic Anatomy & Transmitters",
    explanation:
      "True. Acetylcholinesterase hydrolyzes acetylcholine within milliseconds, and choline is then recaptured for resynthesis. This is why inhibiting the enzyme produces such dramatic cholinergic excess — the only off-switch has been removed.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which anatomic feature distinguishes the sympathetic from the parasympathetic outflow?",
    topic: "Autonomic Anatomy & Transmitters",
    explanation:
      "Sympathetic fibers leave the thoracolumbar cord with short preganglionic and long postganglionic axons, allowing divergent, widespread activation. Parasympathetic craniosacral outflow has long preganglionic and short postganglionic fibers, giving discrete organ-specific effects.",
    choices: [
      { text: "Sympathetic is thoracolumbar with short pre- and long postganglionic fibers", isCorrect: true },
      { text: "Sympathetic is craniosacral with long preganglionic fibers" },
      { text: "Parasympathetic is thoracolumbar with short postganglionic fibers" },
      { text: "Both have identical fiber lengths and origins" },
      { text: "Parasympathetic fibers have no ganglia" },
    ],
  },
  {
    stem: "Which cranial nerve carries the majority of parasympathetic outflow to thoracic and abdominal viscera?",
    topic: "Autonomic Anatomy & Transmitters",
    explanation:
      "The vagus nerve carries roughly 75% of parasympathetic fibers, supplying heart, lungs and the gut as far as the distal transverse colon. Beyond that point, sacral fibers take over — the anatomic boundary that explains vagal effects on some organs and not others.",
    choices: [
      { text: "Vagus (CN X)", isCorrect: true },
      { text: "Oculomotor (CN III)" },
      { text: "Facial (CN VII)" },
      { text: "Glossopharyngeal (CN IX)" },
      { text: "Trigeminal (CN V)" },
    ],
  },
  {
    stem: "Baroreceptor reflex activation following a fall in blood pressure produces which response?",
    topic: "Autonomic Anatomy & Transmitters",
    explanation:
      "Reduced carotid sinus stretch decreases afferent firing, releasing vagal tone and increasing sympathetic outflow, so heart rate and vascular resistance rise. Understanding this reflex explains the compensatory tachycardia seen with vasodilator drugs.",
    choices: [
      { text: "Increased sympathetic outflow with reduced vagal tone, raising heart rate", isCorrect: true },
      { text: "Increased vagal tone with bradycardia" },
      { text: "Reduced sympathetic outflow with vasodilation" },
      { text: "No change, since baroreceptors respond only to hypertension" },
      { text: "Direct adrenal release of acetylcholine" },
    ],
  },

  /* ══════════════ CHOLINERGIC RECEPTORS ══════════════ */
  {
    stem: "Which receptor type mediates parasympathetic effects at target organs, and what kind of receptor is it?",
    topic: "Cholinergic Receptors",
    explanation:
      "Muscarinic receptors are G-protein coupled, giving responses over seconds. Nicotinic receptors are ligand-gated ion channels acting in milliseconds at ganglia and the neuromuscular junction — the speed difference follows directly from the receptor class.",
    choices: [
      { text: "Muscarinic — G-protein coupled", isCorrect: true },
      { text: "Nicotinic — G-protein coupled" },
      { text: "Muscarinic — ligand-gated ion channel" },
      { text: "Nicotinic — intracellular nuclear receptor" },
      { text: "Adrenergic — enzyme-linked receptor" },
    ],
  },
  {
    stem: "Match each muscarinic subtype to its principal location. Which pairings are correct? Select all that apply.",
    type: "MULTI",
    topic: "Cholinergic Receptors",
    explanation:
      "M1 is in CNS and enteric neurons, M2 in the heart where it slows rate, and M3 in smooth muscle and glands producing contraction and secretion. M2 is not the bronchial constrictor — that is M3 — and M1 is not a cardiac receptor.",
    choices: [
      { text: "M1 — CNS and enteric nervous system", isCorrect: true },
      { text: "M2 — cardiac, slowing rate and conduction", isCorrect: true },
      { text: "M3 — smooth muscle and exocrine glands", isCorrect: true },
      { text: "M2 — bronchial smooth muscle constriction" },
      { text: "M1 — sinoatrial node rate control" },
    ],
  },
  {
    stem: "Muscarinic stimulation of the eye produces which combination of effects?",
    topic: "Cholinergic Receptors",
    explanation:
      "Contraction of the circular sphincter muscle causes miosis, and ciliary muscle contraction produces accommodation for near vision while opening the trabecular meshwork to improve aqueous outflow. That outflow effect is why pilocarpine lowers intraocular pressure.",
    choices: [
      { text: "Miosis with accommodation and improved aqueous outflow", isCorrect: true },
      { text: "Mydriasis with cycloplegia and reduced outflow" },
      { text: "Miosis with cycloplegia and reduced outflow" },
      { text: "Mydriasis with accommodation for near vision" },
      { text: "No ocular effect at all" },
    ],
  },
  {
    stem: "Which nicotinic receptor subtype is found at the skeletal neuromuscular junction?",
    topic: "Cholinergic Receptors",
    explanation:
      "The Nm subtype sits at the motor endplate, while Nn subtypes are at autonomic ganglia and the adrenal medulla. This distinction allows neuromuscular blockers to paralyze skeletal muscle without producing ganglionic blockade.",
    choices: [
      { text: "Nm at the motor endplate", isCorrect: true },
      { text: "Nn at the motor endplate" },
      { text: "M3 at the motor endplate" },
      { text: "M2 at the motor endplate" },
      { text: "Alpha-1 at the motor endplate" },
    ],
  },
  {
    stem: "True or False: Muscarinic M2 receptors in the heart act through Gi, reducing cAMP and slowing the sinoatrial node.",
    type: "TRUE_FALSE",
    topic: "Cholinergic Receptors",
    explanation:
      "True. Gi coupling reduces cAMP and increases potassium conductance, hyperpolarizing nodal tissue. This is the mechanism of vagally mediated bradycardia and the reason atropine reverses it.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "M3 receptor activation in bronchial smooth muscle produces which effect and by which second messenger pathway?",
    topic: "Cholinergic Receptors",
    explanation:
      "M3 couples to Gq, activating phospholipase C to raise IP3 and intracellular calcium, causing bronchoconstriction and mucus secretion. Blocking it is how ipratropium and tiotropium relieve airflow obstruction.",
    choices: [
      { text: "Bronchoconstriction via Gq, IP3 and rising intracellular calcium", isCorrect: true },
      { text: "Bronchodilation via Gs and rising cAMP" },
      { text: "Bronchoconstriction via Gi and falling cAMP" },
      { text: "No effect on airway tone" },
      { text: "Bronchodilation via direct potassium channel opening" },
    ],
  },
  {
    stem: "Which effects would you expect from generalized muscarinic stimulation?",
    topic: "Cholinergic Receptors",
    explanation:
      "The DUMBBELS pattern — diarrhea, urination, miosis, bronchospasm, bradycardia, emesis, lacrimation, salivation — captures it. Recognizing the cluster rather than individual symptoms is what identifies organophosphate poisoning quickly.",
    choices: [
      { text: "Diarrhea, urination, miosis, bronchospasm, bradycardia, lacrimation and salivation", isCorrect: true },
      { text: "Constipation, urinary retention, mydriasis and dry mouth" },
      { text: "Tachycardia, hypertension and diaphoresis only" },
      { text: "Fever, flushing and delirium with dry skin" },
      { text: "Hypoglycemia with tremor and anxiety" },
    ],
  },
  {
    stem: "Why does bethanechol act selectively on the bladder and gut with little cardiac effect?",
    topic: "Cholinergic Receptors",
    explanation:
      "Bethanechol is relatively selective for muscarinic receptors of smooth muscle and resists acetylcholinesterase, so it produces sustained gut and bladder stimulation with comparatively little cardiac action. Resistance to hydrolysis is what makes it useful orally.",
    choices: [
      { text: "Relative muscarinic selectivity for smooth muscle plus resistance to cholinesterase", isCorrect: true },
      { text: "It is a nicotinic agonist without muscarinic action" },
      { text: "It is rapidly destroyed before reaching the heart" },
      { text: "It blocks rather than stimulates muscarinic receptors" },
      { text: "It acts only on beta-2 adrenergic receptors" },
    ],
  },

  /* ══════════════ CHOLINERGIC AGONISTS ══════════════ */
  {
    stem: "A patient with postoperative urinary retention and no obstruction is given bethanechol. What is the expected effect?",
    topic: "Cholinergic Agonists",
    explanation:
      "Detrusor contraction with internal sphincter relaxation promotes voiding. It must never be given when there is mechanical obstruction, since contracting against a blocked outlet risks bladder rupture — the contraindication matters more than the indication.",
    choices: [
      { text: "Detrusor contraction with sphincter relaxation promoting voiding", isCorrect: true },
      { text: "Detrusor relaxation with urine retention" },
      { text: "Increased sphincter tone preventing leakage" },
      { text: "Reduced urine production by the kidney" },
      { text: "No effect on bladder function" },
    ],
  },
  {
    stem: "Pilocarpine is used in acute angle-closure glaucoma for which reason?",
    topic: "Cholinergic Agonists",
    explanation:
      "Contraction of the ciliary muscle and pupillary sphincter opens the trabecular meshwork and pulls the iris away from the angle, improving aqueous outflow. It is also used for xerostomia in Sjögren syndrome through glandular M3 stimulation.",
    choices: [
      { text: "Miosis and ciliary contraction open the angle, improving aqueous outflow", isCorrect: true },
      { text: "Mydriasis widens the angle mechanically" },
      { text: "It reduces aqueous production by the ciliary epithelium" },
      { text: "It paralyzes accommodation, relieving spasm" },
      { text: "It has no role in glaucoma management" },
    ],
  },
  {
    stem: "Which cholinergic agonists are correctly matched to their clinical use? Select all that apply.",
    type: "MULTI",
    topic: "Cholinergic Agonists",
    explanation:
      "Bethanechol treats urinary retention and postoperative ileus, pilocarpine treats glaucoma and xerostomia, and methacholine is used diagnostically to provoke bronchoconstriction in suspected asthma. Carbachol is not used for hypertension, and nicotine is not a treatment for myasthenia gravis.",
    choices: [
      { text: "Bethanechol — urinary retention and postoperative ileus", isCorrect: true },
      { text: "Pilocarpine — glaucoma and xerostomia", isCorrect: true },
      { text: "Methacholine — bronchial provocation testing", isCorrect: true },
      { text: "Carbachol — first-line treatment for hypertension" },
      { text: "Nicotine — treatment of myasthenia gravis" },
    ],
  },
  {
    stem: "Why is a methacholine challenge test performed under close supervision with a bronchodilator available?",
    topic: "Cholinergic Agonists",
    explanation:
      "It deliberately provokes bronchoconstriction to demonstrate airway hyperreactivity, so severe bronchospasm is a real risk requiring immediate albuterol. The test is diagnostic precisely because it causes the problem it is looking for.",
    choices: [
      { text: "It deliberately provokes bronchoconstriction, which may become severe", isCorrect: true },
      { text: "It causes profound hypertension requiring nitroprusside" },
      { text: "It reliably causes anaphylaxis in most patients" },
      { text: "It causes hyperglycemia needing insulin" },
      { text: "It has no risk and needs no supervision" },
    ],
  },
  {
    stem: "True or False: Cholinergic agonists are contraindicated in patients with asthma, peptic ulcer disease and bladder outlet obstruction.",
    type: "TRUE_FALSE",
    topic: "Cholinergic Agonists",
    explanation:
      "True. They worsen bronchospasm, increase gastric acid secretion, and risk bladder rupture against an obstructed outlet. Each contraindication follows directly from the receptor effects rather than needing separate memorization.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which effect explains why cholinergic agonists cause hypotension despite the heart having M2 receptors?",
    topic: "Cholinergic Agonists",
    explanation:
      "Vascular endothelium carries M3 receptors that release nitric oxide, causing vasodilation even though blood vessels lack direct parasympathetic innervation. Bradycardia from M2 compounds the fall in pressure.",
    choices: [
      { text: "Endothelial M3 receptors release nitric oxide, causing vasodilation", isCorrect: true },
      { text: "Direct parasympathetic innervation of arterioles" },
      { text: "Blockade of alpha-1 receptors on vascular smooth muscle" },
      { text: "Reduced circulating blood volume" },
      { text: "Direct inhibition of the sinoatrial node only" },
    ],
  },
  {
    stem: "Nicotine's cardiovascular effects at low doses result from which mechanism?",
    topic: "Cholinergic Agonists",
    explanation:
      "Ganglionic nicotinic stimulation activates both divisions, but sympathetic and adrenal medullary effects dominate at the cardiovascular level, producing tachycardia and hypertension. At high doses persistent depolarization causes ganglionic blockade instead.",
    choices: [
      { text: "Ganglionic stimulation with sympathetic and adrenal predominance", isCorrect: true },
      { text: "Selective muscarinic stimulation causing bradycardia" },
      { text: "Direct beta-1 receptor agonism" },
      { text: "Alpha-1 receptor blockade" },
      { text: "Inhibition of norepinephrine synthesis" },
    ],
  },
  {
    stem: "Why does high-dose nicotine cause paralysis rather than continued stimulation?",
    topic: "Cholinergic Agonists",
    explanation:
      "Persistent receptor occupancy keeps the channel depolarized, so the membrane cannot repolarize and further impulses fail — depolarizing blockade. The same principle explains the phase I block of succinylcholine.",
    choices: [
      { text: "Sustained depolarization prevents repolarization, producing depolarizing blockade", isCorrect: true },
      { text: "Nicotine becomes a competitive antagonist at high doses" },
      { text: "Acetylcholine stores become depleted immediately" },
      { text: "Nicotine inhibits acetylcholinesterase at high doses" },
      { text: "Receptors are destroyed irreversibly" },
    ],
  },

  /* ══════════════ ANTICHOLINESTERASES ══════════════ */
  {
    stem: "A patient with myasthenia gravis is treated with pyridostigmine. Why is this drug preferred over physostigmine for maintenance therapy?",
    topic: "Anticholinesterases",
    explanation:
      "Pyridostigmine carries a quaternary ammonium group, so it does not cross the blood-brain barrier and avoids central cholinergic effects. Physostigmine is tertiary and does enter the CNS, which is precisely why it is reserved for central antimuscarinic toxicity.",
    choices: [
      { text: "It is quaternary and does not enter the CNS", isCorrect: true },
      { text: "It is tertiary and enters the CNS readily" },
      { text: "It irreversibly inhibits acetylcholinesterase" },
      { text: "It acts directly on nicotinic receptors" },
      { text: "It has a shorter duration of action" },
    ],
  },
  {
    stem: "Which anticholinesterases are correctly matched to their use? Select all that apply.",
    type: "MULTI",
    topic: "Anticholinesterases",
    explanation:
      "Neostigmine reverses non-depolarizing neuromuscular blockade and treats ileus, pyridostigmine maintains myasthenia gravis, physostigmine treats central antimuscarinic toxicity, and donepezil is used in Alzheimer disease. Echothiophate is not used for myasthenia, and edrophonium is diagnostic rather than a maintenance therapy.",
    choices: [
      { text: "Neostigmine — reversal of non-depolarizing neuromuscular blockade", isCorrect: true },
      { text: "Physostigmine — central antimuscarinic toxicity", isCorrect: true },
      { text: "Donepezil — Alzheimer disease", isCorrect: true },
      { text: "Echothiophate — maintenance therapy for myasthenia gravis" },
      { text: "Edrophonium — long-term maintenance in myasthenia gravis" },
    ],
  },
  {
    stem: "Why is glycopyrrolate given alongside neostigmine when reversing neuromuscular blockade?",
    topic: "Anticholinesterases",
    explanation:
      "Neostigmine raises acetylcholine at both nicotinic and muscarinic sites, so glycopyrrolate blocks the unwanted muscarinic effects — bradycardia, secretions and bronchospasm — while leaving the nicotinic reversal intact. Glycopyrrolate is quaternary, so it does not cause central confusion.",
    choices: [
      { text: "To block muscarinic effects such as bradycardia while preserving nicotinic reversal", isCorrect: true },
      { text: "To potentiate the neuromuscular blockade" },
      { text: "To prevent nicotinic receptor stimulation at the endplate" },
      { text: "To inhibit acetylcholinesterase further" },
      { text: "To provide sedation during reversal" },
    ],
  },
  {
    stem: "A farm worker presents with pinpoint pupils, copious secretions, bradycardia, vomiting and muscle fasciculations. What is the diagnosis and the two-drug treatment?",
    topic: "Anticholinesterases",
    explanation:
      "Organophosphate poisoning is treated with atropine to reverse muscarinic effects and pralidoxime to reactivate acetylcholinesterase before aging occurs. Atropine alone does not address the nicotinic features, which is why fasciculations and weakness persist without pralidoxime.",
    choices: [
      { text: "Organophosphate poisoning — atropine plus pralidoxime", isCorrect: true },
      { text: "Anticholinergic poisoning — physostigmine plus benzodiazepine" },
      { text: "Opioid overdose — naloxone plus oxygen" },
      { text: "Sympathomimetic toxicity — labetalol plus fluids" },
      { text: "Serotonin syndrome — cyproheptadine plus cooling" },
    ],
  },
  {
    stem: "What is 'aging' in the context of organophosphate poisoning, and why does it matter?",
    topic: "Anticholinesterases",
    explanation:
      "Aging is the irreversible covalent bond formed between the organophosphate and the enzyme, after which pralidoxime can no longer reactivate it. Recovery then depends on synthesizing new enzyme over weeks, which is why pralidoxime must be given early.",
    choices: [
      { text: "Irreversible covalent binding after which pralidoxime cannot reactivate the enzyme", isCorrect: true },
      { text: "Gradual loss of drug potency in storage" },
      { text: "Spontaneous recovery of enzyme function within hours" },
      { text: "Development of tolerance to atropine" },
      { text: "Conversion of the organophosphate to a harmless metabolite" },
    ],
  },
  {
    stem: "True or False: The endpoint for atropine dosing in organophosphate poisoning is drying of respiratory secretions rather than a target heart rate.",
    type: "TRUE_FALSE",
    topic: "Anticholinesterases",
    explanation:
      "True. Bronchorrhea and bronchospasm are what kill these patients, so secretions guide titration, and very large cumulative atropine doses are often required. Stopping at a normal heart rate leaves the lethal problem untreated.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Edrophonium has historically been used diagnostically in myasthenia gravis. What property makes it suitable for that role?",
    topic: "Anticholinesterases",
    explanation:
      "Its very short duration of action allows a transient improvement in strength to be observed and to resolve quickly. It has largely been replaced by antibody testing and electrophysiology, but the pharmacologic logic remains instructive.",
    choices: [
      { text: "Very rapid onset with a duration of only a few minutes", isCorrect: true },
      { text: "A duration of action lasting several days" },
      { text: "Irreversible inhibition of acetylcholinesterase" },
      { text: "Selective action at muscarinic receptors only" },
      { text: "Ability to cross the blood-brain barrier" },
    ],
  },
  {
    stem: "A patient with myasthenia gravis becomes weaker. How would you distinguish a myasthenic crisis from a cholinergic crisis?",
    topic: "Anticholinesterases",
    explanation:
      "Cholinergic crisis from excess anticholinesterase shows muscarinic overactivity — miosis, secretions, cramping, diarrhea — alongside weakness, whereas myasthenic crisis shows weakness without those features. Both threaten respiration, so the immediate priority is ventilation regardless of which it is.",
    choices: [
      { text: "Cholinergic crisis adds muscarinic features such as miosis and secretions", isCorrect: true },
      { text: "Myasthenic crisis causes miosis and copious secretions" },
      { text: "The two are clinically indistinguishable by any means" },
      { text: "Cholinergic crisis causes mydriasis and dry skin" },
      { text: "Only cholinergic crisis affects respiratory muscles" },
    ],
  },

  /* ══════════════ MUSCARINIC ANTAGONISTS ══════════════ */
  {
    stem: "Atropine is given for symptomatic bradycardia. Which receptor action produces the effect?",
    topic: "Muscarinic Antagonists",
    explanation:
      "Blocking cardiac M2 receptors removes vagal restraint on the sinoatrial node, allowing the intrinsic rate to rise. Very low doses can paradoxically slow the heart through central and presynaptic effects, which is why adequate dosing matters.",
    choices: [
      { text: "M2 blockade removing vagal restraint on the sinoatrial node", isCorrect: true },
      { text: "Beta-1 agonism increasing sinoatrial firing" },
      { text: "M3 blockade in vascular endothelium" },
      { text: "Nicotinic blockade at autonomic ganglia" },
      { text: "Direct calcium channel opening in nodal tissue" },
    ],
  },
  {
    stem: "Which muscarinic antagonists are matched correctly to their principal use? Select all that apply.",
    type: "MULTI",
    topic: "Muscarinic Antagonists",
    explanation:
      "Ipratropium and tiotropium treat COPD, oxybutynin treats overactive bladder, and scopolamine prevents motion sickness. Tropicamide is used for pupil dilation rather than glaucoma — where antimuscarinics are contraindicated in angle-closure — and benztropine treats drug-induced parkinsonism rather than myasthenia.",
    choices: [
      { text: "Ipratropium — COPD and acute bronchospasm", isCorrect: true },
      { text: "Oxybutynin — overactive bladder", isCorrect: true },
      { text: "Scopolamine — motion sickness", isCorrect: true },
      { text: "Tropicamide — treatment of angle-closure glaucoma" },
      { text: "Benztropine — treatment of myasthenia gravis" },
    ],
  },
  {
    stem: "An elderly patient started on oxybutynin becomes confused. Which property of the drug explains this?",
    topic: "Muscarinic Antagonists",
    explanation:
      "Oxybutynin is a tertiary amine that crosses the blood-brain barrier, and central muscarinic blockade impairs cognition — a particular risk in older patients. Quaternary alternatives such as trospium, or more M3-selective agents, reduce that risk.",
    choices: [
      { text: "It is a tertiary amine crossing into the CNS", isCorrect: true },
      { text: "It is a quaternary compound excluded from the CNS" },
      { text: "It stimulates rather than blocks central muscarinic receptors" },
      { text: "It acts primarily on nicotinic receptors" },
      { text: "It causes confusion only through hypotension" },
    ],
  },
  {
    stem: "Which mnemonic pattern describes antimuscarinic toxicity?",
    topic: "Muscarinic Antagonists",
    explanation:
      "Hot as a hare, dry as a bone, red as a beet, blind as a bat, mad as a hatter — hyperthermia, dry skin, flushing, blurred vision and delirium, with urinary retention. Dry skin is what distinguishes it from sympathomimetic toxicity, where the patient is drenched.",
    choices: [
      { text: "Hyperthermia, dry flushed skin, mydriasis, urinary retention and delirium", isCorrect: true },
      { text: "Hypothermia, sweating, miosis and bradycardia" },
      { text: "Diarrhea, salivation and bronchorrhea" },
      { text: "Hypotension with bradycardia and hypoglycemia" },
      { text: "Muscle rigidity with hyperreflexia and clonus" },
    ],
  },
  {
    stem: "True or False: Antimuscarinic drugs are contraindicated in narrow-angle glaucoma because mydriasis can precipitate acute angle closure.",
    type: "TRUE_FALSE",
    topic: "Muscarinic Antagonists",
    explanation:
      "True. Pupillary dilation crowds the iris into the angle, blocking aqueous outflow and raising intraocular pressure abruptly. This is why the ocular history matters before prescribing anything with antimuscarinic activity, including many antihistamines and antidepressants.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Why is glycopyrrolate often chosen over atropine as an antisialagogue before airway procedures?",
    topic: "Muscarinic Antagonists",
    explanation:
      "Glycopyrrolate is quaternary, so it dries secretions without crossing into the CNS to cause confusion or delirium, and it has less tachycardic effect. Charge, not potency, drives the choice.",
    choices: [
      { text: "Being quaternary, it dries secretions without central effects", isCorrect: true },
      { text: "It crosses the blood-brain barrier for added sedation" },
      { text: "It is a cholinergic agonist that thins secretions" },
      { text: "It produces greater tachycardia, which is desirable" },
      { text: "It acts at nicotinic rather than muscarinic receptors" },
    ],
  },
  {
    stem: "Scopolamine patches for motion sickness act at which site?",
    topic: "Muscarinic Antagonists",
    explanation:
      "Central muscarinic blockade in the vestibular nuclei and vomiting center interrupts the pathway generating motion-induced nausea. Transdermal delivery gives a sustained low level, minimizing peripheral antimuscarinic effects.",
    choices: [
      { text: "Central muscarinic receptors in vestibular pathways", isCorrect: true },
      { text: "Peripheral nicotinic receptors in the gut wall" },
      { text: "5-HT3 receptors in the chemoreceptor trigger zone" },
      { text: "Dopamine D2 receptors in the area postrema" },
      { text: "Histamine H2 receptors in gastric mucosa" },
    ],
  },
  {
    stem: "Which patient group is at greatest risk of urinary retention from an antimuscarinic drug?",
    topic: "Muscarinic Antagonists",
    explanation:
      "An older man with benign prostatic hyperplasia already has outflow resistance, and blocking detrusor contraction can tip him into acute retention. This is why antimuscarinic burden is reviewed carefully in that group.",
    choices: [
      { text: "An older man with benign prostatic hyperplasia", isCorrect: true },
      { text: "A young woman with asthma" },
      { text: "A child with otitis media" },
      { text: "An adult with well-controlled hypertension" },
      { text: "A patient with iron deficiency anemia" },
    ],
  },

  /* ══════════════ NEUROMUSCULAR BLOCKERS ══════════════ */
  {
    stem: "How does succinylcholine differ mechanistically from rocuronium?",
    topic: "Neuromuscular Blockers",
    explanation:
      "Succinylcholine is a depolarizing agent that persistently activates the nicotinic receptor, causing initial fasciculations then flaccid paralysis. Rocuronium is a competitive non-depolarizing antagonist producing paralysis without fasciculation and reversible by anticholinesterase or sugammadex.",
    choices: [
      { text: "Succinylcholine depolarizes persistently; rocuronium competitively blocks", isCorrect: true },
      { text: "Succinylcholine competitively blocks; rocuronium depolarizes" },
      { text: "Both act by competitive antagonism" },
      { text: "Both act by persistent depolarization" },
      { text: "Succinylcholine acts at muscarinic receptors" },
    ],
  },
  {
    stem: "Why does neostigmine fail to reverse phase I succinylcholine blockade, and may worsen it?",
    topic: "Neuromuscular Blockers",
    explanation:
      "Raising acetylcholine adds to the depolarization that is already causing the block, deepening rather than reversing it. Anticholinesterase reversal works only for competitive non-depolarizing agents, where more acetylcholine can outcompete the blocker.",
    choices: [
      { text: "Extra acetylcholine deepens the existing depolarizing block", isCorrect: true },
      { text: "Neostigmine destroys succinylcholine chemically" },
      { text: "Succinylcholine is not affected by acetylcholine levels" },
      { text: "Neostigmine acts only at muscarinic receptors" },
      { text: "Phase I block resolves only with sugammadex" },
    ],
  },
  {
    stem: "Which complications are associated with succinylcholine? Select all that apply.",
    type: "MULTI",
    topic: "Neuromuscular Blockers",
    explanation:
      "Hyperkalemia — dangerous in burns, crush injury and denervation — malignant hyperthermia, bradycardia especially in children, and prolonged paralysis in pseudocholinesterase deficiency are all recognized. It does not cause hypokalemia, and it is not reversed by sugammadex, which binds aminosteroid non-depolarizing agents.",
    choices: [
      { text: "Hyperkalemia, hazardous in burns and crush injury", isCorrect: true },
      { text: "Malignant hyperthermia in susceptible patients", isCorrect: true },
      { text: "Prolonged paralysis in pseudocholinesterase deficiency", isCorrect: true },
      { text: "Profound hypokalemia" },
      { text: "Rapid reversal by sugammadex" },
    ],
  },
  {
    stem: "A patient develops masseter rigidity, rising end-tidal CO2 and hyperthermia after succinylcholine and a volatile anesthetic. What is the diagnosis and specific treatment?",
    topic: "Neuromuscular Blockers",
    explanation:
      "Malignant hyperthermia from uncontrolled calcium release through the ryanodine receptor is treated with dantrolene, which blocks that release, alongside cooling and stopping the triggering agents. Rising end-tidal CO2 is often the earliest sign.",
    choices: [
      { text: "Malignant hyperthermia — dantrolene with cooling and removal of triggers", isCorrect: true },
      { text: "Neuroleptic malignant syndrome — bromocriptine" },
      { text: "Serotonin syndrome — cyproheptadine" },
      { text: "Thyroid storm — propylthiouracil" },
      { text: "Sepsis — broad-spectrum antibiotics alone" },
    ],
  },
  {
    stem: "True or False: Sugammadex reverses rocuronium by encapsulating the drug molecule rather than by acting on the receptor.",
    type: "TRUE_FALSE",
    topic: "Neuromuscular Blockers",
    explanation:
      "True. It is a modified cyclodextrin that binds aminosteroid blockers in plasma, drawing them away from the junction. Because it does not raise acetylcholine, it avoids the muscarinic effects that require glycopyrrolate alongside neostigmine.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which muscle group is typically affected first and recovers last with non-depolarizing blockade?",
    topic: "Neuromuscular Blockers",
    explanation:
      "Small rapidly moving muscles such as those of the eye and face are affected first, and the diaphragm is relatively resistant but recovers earliest. Monitoring the adductor pollicis with a nerve stimulator gives a practical index of overall blockade.",
    choices: [
      { text: "Small facial and ocular muscles first; the diaphragm is resistant and recovers early", isCorrect: true },
      { text: "The diaphragm first, recovering last" },
      { text: "All muscles simultaneously and equally" },
      { text: "Only limb muscles are affected at any time" },
      { text: "Cardiac muscle is affected first" },
    ],
  },
  {
    stem: "Why is succinylcholine still used for rapid sequence intubation despite its risks?",
    topic: "Neuromuscular Blockers",
    explanation:
      "Onset within about 45 seconds and offset within minutes give unmatched control when the airway is uncertain. High-dose rocuronium offers comparable onset with a much longer duration, so the choice depends on whether rapid offset matters.",
    choices: [
      { text: "Rapid onset and rapid spontaneous offset", isCorrect: true },
      { text: "It provides prolonged paralysis for lengthy surgery" },
      { text: "It has no significant adverse effects" },
      { text: "It provides analgesia as well as paralysis" },
      { text: "It is the only agent that can be reversed" },
    ],
  },
  {
    stem: "A crucial safety point about neuromuscular blockers is which of the following?",
    topic: "Neuromuscular Blockers",
    explanation:
      "They cause paralysis without any sedation, amnesia or analgesia, so a paralyzed patient may be fully aware and in pain. Concurrent sedation is mandatory, and accidental administration without it is a recognized catastrophic error.",
    choices: [
      { text: "They provide no sedation or analgesia, so concurrent sedation is mandatory", isCorrect: true },
      { text: "They provide deep anesthesia on their own" },
      { text: "They reliably produce amnesia for the procedure" },
      { text: "They have analgesic properties at higher doses" },
      { text: "They can safely be used without airway support" },
    ],
  },

  /* ══════════════ ADRENERGIC RECEPTORS ══════════════ */
  {
    stem: "Match each adrenergic receptor to its principal effect. Which pairings are correct? Select all that apply.",
    type: "MULTI",
    topic: "Adrenergic Receptors",
    explanation:
      "Alpha-1 causes vasoconstriction and pupillary dilation, beta-1 increases cardiac rate and contractility and stimulates renin release, and beta-2 causes bronchodilation and vasodilation in skeletal muscle. Alpha-2 is presynaptic and inhibitory, reducing sympathetic outflow, and beta-3 acts on bladder detrusor relaxation and lipolysis rather than cardiac conduction.",
    choices: [
      { text: "Alpha-1 — vasoconstriction and mydriasis", isCorrect: true },
      { text: "Beta-1 — increased heart rate, contractility and renin release", isCorrect: true },
      { text: "Beta-2 — bronchodilation and skeletal muscle vasodilation", isCorrect: true },
      { text: "Alpha-2 — postsynaptic vasoconstriction increasing sympathetic outflow" },
      { text: "Beta-3 — acceleration of atrioventricular conduction" },
    ],
  },
  {
    stem: "Alpha-2 receptor stimulation produces which net effect, and why?",
    topic: "Adrenergic Receptors",
    explanation:
      "Presynaptic alpha-2 receptors inhibit further norepinephrine release, so agonists such as clonidine reduce central sympathetic outflow and lower blood pressure. It is a negative feedback receptor, which is why an agonist produces a sympatholytic result.",
    choices: [
      { text: "Reduced norepinephrine release and lower sympathetic outflow", isCorrect: true },
      { text: "Increased norepinephrine release with hypertension" },
      { text: "Direct vasoconstriction identical to alpha-1" },
      { text: "Bronchodilation through airway smooth muscle" },
      { text: "Increased cardiac contractility" },
    ],
  },
  {
    stem: "Which second messenger pathway does beta receptor activation use?",
    topic: "Adrenergic Receptors",
    explanation:
      "Beta receptors couple to Gs, activating adenylyl cyclase and raising cAMP, which increases cardiac contractility and relaxes bronchial and vascular smooth muscle. Alpha-1 uses Gq and IP3-calcium, alpha-2 uses Gi to lower cAMP.",
    choices: [
      { text: "Gs, raising cAMP", isCorrect: true },
      { text: "Gq, raising IP3 and calcium" },
      { text: "Gi, lowering cAMP" },
      { text: "Direct ligand-gated ion channel opening" },
      { text: "Nuclear receptor gene transcription" },
    ],
  },
  {
    stem: "Why does epinephrine raise systolic pressure while sometimes lowering diastolic pressure at low doses?",
    topic: "Adrenergic Receptors",
    explanation:
      "Beta-1 effects raise cardiac output and systolic pressure, while beta-2 mediated vasodilation in skeletal muscle can lower diastolic pressure at low doses. At higher doses alpha-1 vasoconstriction dominates and both rise.",
    choices: [
      { text: "Beta-1 raises output while beta-2 vasodilation lowers diastolic pressure at low dose", isCorrect: true },
      { text: "Alpha-1 blockade lowers diastolic pressure" },
      { text: "Beta-2 blockade raises systolic pressure only" },
      { text: "Epinephrine has no dose-dependent receptor selectivity" },
      { text: "Alpha-2 stimulation raises systolic pressure exclusively" },
    ],
  },
  {
    stem: "True or False: Beta-1 receptors predominate in the heart while beta-2 predominate in the lungs, which is the basis of cardioselective beta blockade.",
    type: "TRUE_FALSE",
    topic: "Adrenergic Receptors",
    explanation:
      "True, though selectivity is relative and lost at higher doses — a useful reminder that metoprolol is safer than propranolol in asthma but not entirely safe. Receptor distribution explains both the therapeutic effect and the adverse one.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Dopamine receptors in the renal vasculature produce which effect when stimulated at low doses?",
    topic: "Adrenergic Receptors",
    explanation:
      "D1 stimulation dilates renal and mesenteric vessels, increasing perfusion. The historical practice of low-dose dopamine for renal protection was abandoned because improved flow did not translate into better renal outcomes — a useful lesson about mechanism versus benefit.",
    choices: [
      { text: "D1-mediated renal and mesenteric vasodilation", isCorrect: true },
      { text: "Alpha-1 mediated renal vasoconstriction" },
      { text: "Beta-2 mediated renal vasoconstriction" },
      { text: "Direct tubular sodium reabsorption" },
      { text: "Reduced glomerular filtration rate" },
    ],
  },
  {
    stem: "Which receptor mediates uterine relaxation, exploited by tocolytic therapy?",
    topic: "Adrenergic Receptors",
    explanation:
      "Beta-2 stimulation relaxes uterine smooth muscle, which is why terbutaline can be used acutely for tocolysis. The same receptor explains its bronchodilator action — one receptor, several tissues, several uses.",
    choices: [
      { text: "Beta-2", isCorrect: true },
      { text: "Alpha-1" },
      { text: "Beta-1" },
      { text: "Alpha-2" },
      { text: "Muscarinic M3" },
    ],
  },
  {
    stem: "Beta-2 agonists can cause hypokalemia. What is the mechanism?",
    topic: "Adrenergic Receptors",
    explanation:
      "Beta-2 stimulation drives potassium into cells via the Na+/K+ ATPase, lowering serum potassium. This is exploited deliberately in the emergency treatment of hyperkalemia using nebulized albuterol.",
    choices: [
      { text: "Intracellular potassium shift through Na+/K+ ATPase stimulation", isCorrect: true },
      { text: "Increased renal potassium excretion only" },
      { text: "Reduced dietary potassium absorption" },
      { text: "Potassium loss through sweat" },
      { text: "Destruction of potassium in plasma" },
    ],
  },
  {
    stem: "Which effect explains why alpha-1 agonists such as phenylephrine cause reflex bradycardia?",
    topic: "Adrenergic Receptors",
    explanation:
      "Vasoconstriction raises blood pressure, and baroreceptors respond by increasing vagal tone, slowing the heart. The bradycardia is reflex rather than a direct cardiac action, since phenylephrine has minimal beta activity.",
    choices: [
      { text: "Baroreceptor-mediated vagal response to the rise in pressure", isCorrect: true },
      { text: "Direct M2 receptor stimulation in the heart" },
      { text: "Beta-1 receptor blockade" },
      { text: "Direct inhibition of the sinoatrial node" },
      { text: "Reduced circulating catecholamine levels" },
    ],
  },

  /* ══════════════ ADRENERGIC AGONISTS ══════════════ */
  {
    stem: "A patient in anaphylaxis is given intramuscular epinephrine. Which combination of receptor actions treats the emergency?",
    topic: "Adrenergic Agonists",
    explanation:
      "Alpha-1 vasoconstriction reverses hypotension and mucosal edema, beta-1 supports cardiac output, and beta-2 relieves bronchospasm and reduces further mediator release. No other single drug covers all four problems, which is why epinephrine is first-line and antihistamines are adjuncts.",
    choices: [
      { text: "Alpha-1 vasoconstriction, beta-1 inotropy and beta-2 bronchodilation", isCorrect: true },
      { text: "Alpha-2 stimulation reducing sympathetic outflow" },
      { text: "Beta blockade reducing myocardial oxygen demand" },
      { text: "Muscarinic blockade drying secretions" },
      { text: "Histamine receptor blockade alone" },
    ],
  },
  {
    stem: "For anaphylaxis in an adult, which epinephrine concentration and route are correct?",
    topic: "Adrenergic Agonists",
    explanation:
      "Intramuscular 1:1,000 (1 mg/mL), 0.3 to 0.5 mg into the anterolateral thigh, is standard. The 1:10,000 concentration is for intravenous use in cardiac arrest — confusing the two is a recognized and dangerous error.",
    choices: [
      { text: "1:1,000 (1 mg/mL), 0.3–0.5 mg intramuscularly into the thigh", isCorrect: true },
      { text: "1:10,000 (0.1 mg/mL), 0.3 mg intramuscularly" },
      { text: "1:1,000 given as an intravenous bolus" },
      { text: "1:100,000 given subcutaneously" },
      { text: "1:10,000 given orally" },
    ],
  },
  {
    stem: "Which adrenergic agonists are matched correctly to their clinical use? Select all that apply.",
    type: "MULTI",
    topic: "Adrenergic Agonists",
    explanation:
      "Dobutamine provides beta-1 inotropy in cardiogenic shock, phenylephrine is an alpha-1 agonist used for hypotension and as a decongestant, and albuterol is a beta-2 agonist for bronchospasm. Norepinephrine is not primarily a bronchodilator, and clonidine is an alpha-2 agonist that lowers rather than raises blood pressure.",
    choices: [
      { text: "Dobutamine — beta-1 inotropy in cardiogenic shock", isCorrect: true },
      { text: "Phenylephrine — alpha-1 vasoconstriction for hypotension", isCorrect: true },
      { text: "Albuterol — beta-2 bronchodilation in asthma", isCorrect: true },
      { text: "Norepinephrine — first-line bronchodilator in asthma" },
      { text: "Clonidine — alpha-1 agonist raising blood pressure" },
    ],
  },
  {
    stem: "Norepinephrine is preferred over dopamine as first-line vasopressor in septic shock for which reason?",
    topic: "Adrenergic Agonists",
    explanation:
      "Norepinephrine achieves target pressure with fewer arrhythmias, and trials showed higher arrhythmia rates and worse outcomes in some subgroups with dopamine. Potent alpha-1 effect with modest beta-1 activity suits the vasodilated physiology of sepsis.",
    choices: [
      { text: "Comparable efficacy with fewer arrhythmias", isCorrect: true },
      { text: "It has no alpha-1 activity, avoiding vasoconstriction" },
      { text: "It is a pure beta-2 agonist" },
      { text: "It reliably improves renal perfusion at low dose" },
      { text: "It can be given orally, unlike dopamine" },
    ],
  },
  {
    stem: "True or False: Extravasation of norepinephrine can cause tissue necrosis, and phentolamine is used to treat it.",
    type: "TRUE_FALSE",
    topic: "Adrenergic Agonists",
    explanation:
      "True. Intense local alpha-1 vasoconstriction causes ischemic necrosis, and local infiltration of the alpha blocker phentolamine restores perfusion. This is why vasopressors are given through central access where possible.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Why does isoproterenol lower diastolic blood pressure while raising heart rate?",
    topic: "Adrenergic Agonists",
    explanation:
      "It is a non-selective beta agonist with no alpha activity, so beta-2 vasodilation lowers peripheral resistance while beta-1 stimulation raises rate and contractility. The absence of alpha effect is what distinguishes its hemodynamic profile from epinephrine.",
    choices: [
      { text: "Beta-2 vasodilation without any alpha vasoconstriction", isCorrect: true },
      { text: "Alpha-1 blockade with beta-1 stimulation" },
      { text: "Alpha-2 agonism reducing sympathetic outflow" },
      { text: "Muscarinic agonism causing vasodilation" },
      { text: "Direct calcium channel blockade" },
    ],
  },
  {
    stem: "A patient using albuterol frequently develops tremor and palpitations. Which receptors account for these effects?",
    topic: "Adrenergic Agonists",
    explanation:
      "Beta-2 receptors in skeletal muscle cause tremor, and at higher doses spillover to cardiac beta-1 plus reflex effects cause palpitations. These are on-target consequences of the same selectivity that makes the drug useful.",
    choices: [
      { text: "Beta-2 in skeletal muscle, with beta-1 spillover at higher doses", isCorrect: true },
      { text: "Alpha-1 receptors in vascular smooth muscle" },
      { text: "Muscarinic receptors in the heart" },
      { text: "Alpha-2 receptors presynaptically" },
      { text: "Dopamine D1 receptors in the kidney" },
    ],
  },
  {
    stem: "Which agent would you choose to raise blood pressure in a patient with hypotension and tachycardia where further heart rate increase is undesirable?",
    topic: "Adrenergic Agonists",
    explanation:
      "Phenylephrine is a pure alpha-1 agonist, raising pressure by vasoconstriction with reflex slowing rather than direct stimulation of rate. Agents with beta-1 activity would worsen the tachycardia.",
    choices: [
      { text: "Phenylephrine", isCorrect: true },
      { text: "Dobutamine" },
      { text: "Isoproterenol" },
      { text: "Epinephrine" },
      { text: "Dopamine at high dose" },
    ],
  },
  {
    stem: "Midodrine is used in orthostatic hypotension. What is its mechanism, and what is its main limitation?",
    topic: "Adrenergic Agonists",
    explanation:
      "It is a prodrug converted to an alpha-1 agonist, raising standing blood pressure. Supine hypertension is the principal limitation, so the last dose is given several hours before lying down.",
    choices: [
      { text: "Alpha-1 agonist prodrug, limited by supine hypertension", isCorrect: true },
      { text: "Beta-1 agonist limited by bradycardia" },
      { text: "Alpha-2 agonist limited by rebound hypertension" },
      { text: "Beta-2 agonist limited by bronchospasm" },
      { text: "Muscarinic antagonist limited by urinary retention" },
    ],
  },

  /* ══════════════ ALPHA & BETA BLOCKERS ══════════════ */
  {
    stem: "A man with benign prostatic hyperplasia is prescribed tamsulosin. Which receptor is targeted and why does this help?",
    topic: "Alpha & Beta Blockers",
    explanation:
      "Alpha-1A blockade relaxes prostatic and bladder neck smooth muscle, improving urinary flow. Relative selectivity for the 1A subtype gives less orthostatic hypotension than non-selective agents such as terazosin.",
    choices: [
      { text: "Alpha-1A blockade relaxing prostatic and bladder neck smooth muscle", isCorrect: true },
      { text: "Beta-2 agonism relaxing the detrusor" },
      { text: "Muscarinic agonism contracting the bladder" },
      { text: "Alpha-2 agonism reducing sympathetic outflow" },
      { text: "5-alpha-reductase inhibition shrinking the gland" },
    ],
  },
  {
    stem: "Which beta blockers are correctly matched to a distinguishing property? Select all that apply.",
    type: "MULTI",
    topic: "Alpha & Beta Blockers",
    explanation:
      "Metoprolol is beta-1 selective, carvedilol and labetalol have additional alpha-1 blockade, and esmolol is ultra-short-acting for intravenous titration. Propranolol is non-selective rather than cardioselective, and atenolol is renally cleared rather than extensively hepatically metabolized.",
    choices: [
      { text: "Metoprolol — beta-1 selective", isCorrect: true },
      { text: "Carvedilol — combined beta and alpha-1 blockade", isCorrect: true },
      { text: "Esmolol — ultra-short-acting intravenous agent", isCorrect: true },
      { text: "Propranolol — highly beta-1 selective" },
      { text: "Atenolol — cleared almost entirely by hepatic metabolism" },
    ],
  },
  {
    stem: "Why must alpha blockade precede beta blockade when preparing a patient with pheochromocytoma for surgery?",
    topic: "Alpha & Beta Blockers",
    explanation:
      "Blocking beta-2 mediated vasodilation while alpha-1 vasoconstriction is unopposed causes a dangerous hypertensive crisis. Phenoxybenzamine is therefore started first, with a beta blocker added later for tachycardia — sequence, not choice of drug, is the safety point.",
    choices: [
      { text: "Unopposed alpha stimulation would cause hypertensive crisis", isCorrect: true },
      { text: "Beta blockade would cause immediate hypotension" },
      { text: "Alpha blockers are ineffective once beta blockers are given" },
      { text: "The order makes no clinical difference" },
      { text: "Beta blockade prevents catecholamine synthesis entirely" },
    ],
  },
  {
    stem: "A patient with asthma is prescribed propranolol for migraine prophylaxis. What is the concern?",
    topic: "Alpha & Beta Blockers",
    explanation:
      "Non-selective beta blockade removes beta-2 mediated bronchodilation and can precipitate severe bronchospasm. A cardioselective agent is preferred if a beta blocker is required, though even selectivity is only relative.",
    choices: [
      { text: "Beta-2 blockade may precipitate severe bronchospasm", isCorrect: true },
      { text: "Beta-1 blockade may cause bronchodilation and air trapping" },
      { text: "Propranolol raises blood pressure dangerously" },
      { text: "It interacts with inhaled corticosteroids" },
      { text: "There is no concern, as propranolol is cardioselective" },
    ],
  },
  {
    stem: "True or False: Beta blockers can mask the adrenergic warning signs of hypoglycemia while sweating is preserved.",
    type: "TRUE_FALSE",
    topic: "Alpha & Beta Blockers",
    explanation:
      "True. Tremor and palpitations are blocked, but sweating is cholinergically mediated and persists. Diabetic patients on beta blockers should be counseled that sweating may be their only warning.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which beta blocker property makes esmolol suited to intraoperative use?",
    topic: "Alpha & Beta Blockers",
    explanation:
      "Hydrolysis by red cell esterases gives a half-life of about nine minutes, so the effect can be titrated and withdrawn rapidly. Independence from hepatic and renal clearance also makes it predictable in organ dysfunction.",
    choices: [
      { text: "Rapid esterase hydrolysis giving a half-life of about nine minutes", isCorrect: true },
      { text: "A half-life of 24 hours allowing once-daily dosing" },
      { text: "Irreversible receptor binding" },
      { text: "Exclusive renal clearance" },
      { text: "Oral administration with high bioavailability" },
    ],
  },
  {
    stem: "Which finding suggests beta blocker overdose rather than calcium channel blocker overdose?",
    topic: "Alpha & Beta Blockers",
    explanation:
      "Beta blocker overdose typically causes hypoglycemia, whereas non-dihydropyridine calcium channel blocker overdose causes hyperglycemia by impairing insulin release. Both produce bradycardia and hypotension, so glucose is the discriminator.",
    choices: [
      { text: "Hypoglycemia, whereas calcium channel blockers cause hyperglycemia", isCorrect: true },
      { text: "Hyperglycemia, whereas calcium channel blockers cause hypoglycemia" },
      { text: "Tachycardia with hypertension" },
      { text: "Mydriasis with dry skin" },
      { text: "Hyperthermia with rigidity" },
    ],
  },
  {
    stem: "Which antidote is used for severe beta blocker overdose refractory to atropine and fluids?",
    topic: "Alpha & Beta Blockers",
    explanation:
      "Glucagon activates cardiac adenylyl cyclase through its own receptor, bypassing the blocked beta receptor to raise cAMP. High-dose insulin with glucose is also used, particularly when calcium channel blocker co-ingestion is suspected.",
    choices: [
      { text: "Glucagon, which raises cardiac cAMP independently of beta receptors", isCorrect: true },
      { text: "Naloxone, which reverses receptor blockade" },
      { text: "Flumazenil, which reverses sedation" },
      { text: "Pralidoxime, which reactivates the receptor" },
      { text: "Physostigmine, which increases acetylcholine" },
    ],
  },
  {
    stem: "Why is carvedilol favored in heart failure with reduced ejection fraction?",
    topic: "Alpha & Beta Blockers",
    explanation:
      "Beta blockade reduces the sympathetic overdrive that drives remodeling and arrhythmia, and additional alpha-1 blockade reduces afterload. Carvedilol, metoprolol succinate and bisoprolol are the agents with mortality evidence in this setting.",
    choices: [
      { text: "Beta blockade limits sympathetic remodeling while alpha-1 blockade reduces afterload", isCorrect: true },
      { text: "It increases contractility directly through beta agonism" },
      { text: "It raises heart rate to improve cardiac output" },
      { text: "It acts as a positive inotrope through calcium influx" },
      { text: "It has no effect on mortality but improves symptoms only" },
    ],
  },

  /* ══════════════ INDIRECT SYMPATHOMIMETICS & SYMPATHOLYTICS ══════════════ */
  {
    stem: "How does amphetamine differ mechanistically from a direct adrenergic agonist?",
    topic: "Indirect Sympathomimetics",
    explanation:
      "Amphetamine enters the nerve terminal and displaces stored catecholamines into the synapse while blocking reuptake, so it acts indirectly through endogenous transmitter. Depleting those stores explains tachyphylaxis with repeated dosing.",
    choices: [
      { text: "It displaces stored catecholamines and blocks reuptake rather than binding the receptor", isCorrect: true },
      { text: "It binds directly to alpha and beta receptors" },
      { text: "It inhibits catecholamine synthesis" },
      { text: "It blocks postsynaptic receptors competitively" },
      { text: "It acts exclusively at muscarinic receptors" },
    ],
  },
  {
    stem: "Cocaine produces sympathomimetic effects by which mechanism, and why is a pure beta blocker traditionally avoided in cocaine-associated chest pain?",
    topic: "Indirect Sympathomimetics",
    explanation:
      "Cocaine blocks norepinephrine reuptake, and blocking beta receptors leaves alpha-mediated coronary vasoconstriction unopposed, potentially worsening ischemia. Benzodiazepines, nitrates and phentolamine are used instead, with combined alpha-beta agents considered acceptable by some.",
    choices: [
      { text: "Reuptake blockade; beta blockade leaves alpha coronary vasoconstriction unopposed", isCorrect: true },
      { text: "Direct beta-1 agonism; beta blockade is fully protective" },
      { text: "Muscarinic blockade; beta blockers have no interaction" },
      { text: "Catecholamine depletion; beta blockade restores stores" },
      { text: "Alpha-2 agonism; beta blockade causes hypotension" },
    ],
  },
  {
    stem: "Clonidine lowers blood pressure through which mechanism, and what is the danger of abrupt withdrawal?",
    topic: "Indirect Sympathomimetics",
    explanation:
      "Central alpha-2 agonism reduces sympathetic outflow, and stopping abruptly produces rebound hypertension that can be severe. Tapering is essential, and the risk is worse if a beta blocker is also present.",
    choices: [
      { text: "Central alpha-2 agonism; abrupt withdrawal causes rebound hypertension", isCorrect: true },
      { text: "Peripheral alpha-1 blockade; withdrawal causes hypotension" },
      { text: "Beta-1 blockade; withdrawal causes bradycardia" },
      { text: "Direct vasodilation; withdrawal has no consequence" },
      { text: "Diuresis; withdrawal causes fluid overload only" },
    ],
  },
  {
    stem: "Which drugs act by reducing catecholamine availability rather than blocking receptors? Select all that apply.",
    type: "MULTI",
    topic: "Indirect Sympathomimetics",
    explanation:
      "Reserpine depletes vesicular stores by blocking VMAT, metyrosine inhibits tyrosine hydroxylase to reduce synthesis, and guanethidine displaces and prevents release. Propranolol and prazosin block receptors rather than affecting transmitter availability.",
    choices: [
      { text: "Reserpine — blocks vesicular monoamine transport", isCorrect: true },
      { text: "Metyrosine — inhibits tyrosine hydroxylase", isCorrect: true },
      { text: "Guanethidine — prevents norepinephrine release", isCorrect: true },
      { text: "Propranolol — blocks beta receptors" },
      { text: "Prazosin — blocks alpha-1 receptors" },
    ],
  },
  {
    stem: "True or False: A patient taking an MAO inhibitor who eats aged cheese may develop a hypertensive crisis because tyramine displaces stored norepinephrine.",
    type: "TRUE_FALSE",
    topic: "Indirect Sympathomimetics",
    explanation:
      "True. Tyramine is normally destroyed by intestinal MAO; when that is inhibited, it reaches nerve terminals and releases a surge of norepinephrine. Dietary counseling is therefore essential with these drugs.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Why does ephedrine show tachyphylaxis with repeated dosing?",
    topic: "Indirect Sympathomimetics",
    explanation:
      "As an indirect-acting agent it depends on releasable catecholamine stores, which deplete with repeated administration. A directly acting agent such as phenylephrine does not lose effect this way.",
    choices: [
      { text: "Releasable catecholamine stores become depleted", isCorrect: true },
      { text: "Receptors are irreversibly destroyed" },
      { text: "The drug is metabolized progressively faster" },
      { text: "It converts to an antagonist over time" },
      { text: "Tachyphylaxis does not occur with ephedrine" },
    ],
  },
  {
    stem: "Alpha-methyldopa is used in hypertension during pregnancy. What is its mechanism?",
    topic: "Indirect Sympathomimetics",
    explanation:
      "It is converted to alpha-methylnorepinephrine, a central alpha-2 agonist that reduces sympathetic outflow. Its long safety record in pregnancy rather than superior efficacy is why it persists in use.",
    choices: [
      { text: "Conversion to a false transmitter acting as a central alpha-2 agonist", isCorrect: true },
      { text: "Direct alpha-1 blockade in the periphery" },
      { text: "Beta-1 selective blockade" },
      { text: "Calcium channel blockade in vascular smooth muscle" },
      { text: "Angiotensin converting enzyme inhibition" },
    ],
  },

  /* ══════════════ TOXIDROMES & ANTIDOTES ══════════════ */
  {
    stem: "A patient is agitated with dilated pupils, hyperthermia, tachycardia, hypertension and profuse sweating. Which toxidrome, and what distinguishes it from the anticholinergic pattern?",
    topic: "Toxidromes & Antidotes",
    explanation:
      "Sympathomimetic toxicity shares most features with anticholinergic toxicity, but the skin is wet with sweat rather than hot and dry. That single finding is the most reliable bedside discriminator between the two.",
    choices: [
      { text: "Sympathomimetic — diaphoresis, whereas anticholinergic skin is dry", isCorrect: true },
      { text: "Anticholinergic — diaphoresis is characteristic" },
      { text: "Cholinergic — pupils are dilated" },
      { text: "Opioid — pupils are dilated with hyperthermia" },
      { text: "Sedative-hypnotic — hypertension is typical" },
    ],
  },
  {
    stem: "Which toxidromes and antidotes are correctly paired? Select all that apply.",
    type: "MULTI",
    topic: "Toxidromes & Antidotes",
    explanation:
      "Organophosphate poisoning is treated with atropine and pralidoxime, opioid toxicity with naloxone, and severe antimuscarinic delirium with physostigmine. Benzodiazepine reversal uses flumazenil rather than naloxone, and beta blocker overdose uses glucagon rather than atropine alone.",
    choices: [
      { text: "Organophosphate — atropine plus pralidoxime", isCorrect: true },
      { text: "Opioid — naloxone", isCorrect: true },
      { text: "Severe antimuscarinic delirium — physostigmine", isCorrect: true },
      { text: "Benzodiazepine — naloxone" },
      { text: "Beta blocker overdose — atropine as definitive therapy" },
    ],
  },
  {
    stem: "A patient has pinpoint pupils, respiratory depression and reduced consciousness. Which toxidrome and immediate action?",
    topic: "Toxidromes & Antidotes",
    explanation:
      "Opioid toxicity is treated with airway support and naloxone titrated to restore respiration rather than full consciousness, since abrupt reversal precipitates withdrawal and agitation. Naloxone's short half-life means re-sedation must be anticipated.",
    choices: [
      { text: "Opioid toxicity — support ventilation and titrate naloxone to breathing", isCorrect: true },
      { text: "Cholinergic toxicity — give atropine and pralidoxime" },
      { text: "Anticholinergic toxicity — give physostigmine" },
      { text: "Sympathomimetic toxicity — give a benzodiazepine" },
      { text: "Beta blocker overdose — give glucagon" },
    ],
  },
  {
    stem: "Why is physostigmine used cautiously in antimuscarinic toxicity?",
    topic: "Toxidromes & Antidotes",
    explanation:
      "It can cause seizures, bradycardia and asystole, particularly with tricyclic antidepressant co-ingestion where sodium channel blockade is present. It is reserved for pure antimuscarinic delirium, with sodium bicarbonate and supportive care used for tricyclic toxicity.",
    choices: [
      { text: "Risk of seizures and asystole, especially with tricyclic co-ingestion", isCorrect: true },
      { text: "It has no effect on central symptoms" },
      { text: "It worsens the antimuscarinic effect" },
      { text: "It causes prolonged paralysis" },
      { text: "It cannot cross the blood-brain barrier" },
    ],
  },
  {
    stem: "True or False: Naloxone has a shorter duration of action than many opioids, so patients require observation for re-sedation.",
    type: "TRUE_FALSE",
    topic: "Toxidromes & Antidotes",
    explanation:
      "True. A patient who wakes after naloxone can become apneic again as it wears off, which is why discharge immediately after reversal is unsafe. Long-acting opioids such as methadone may require an infusion.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which finding differentiates cholinergic from opioid toxicity, given both cause miosis?",
    topic: "Toxidromes & Antidotes",
    explanation:
      "Cholinergic toxicity adds secretions, bronchorrhea, vomiting, diarrhea and fasciculations, whereas opioid toxicity produces quiet respiratory depression without those features. The wet, noisy patient is cholinergic; the quiet one is opioid.",
    choices: [
      { text: "Copious secretions, diarrhea and fasciculations point to cholinergic toxicity", isCorrect: true },
      { text: "Dry skin and ileus point to cholinergic toxicity" },
      { text: "Both present identically in every respect" },
      { text: "Opioid toxicity causes bronchorrhea and salivation" },
      { text: "Cholinergic toxicity causes mydriasis" },
    ],
  },
  {
    stem: "Which class of drug is first-line for agitation and hyperthermia in sympathomimetic toxicity?",
    topic: "Toxidromes & Antidotes",
    explanation:
      "Benzodiazepines reduce central sympathetic drive, controlling agitation, tachycardia, hypertension and hyperthermia simultaneously. Physical restraint alone worsens hyperthermia and rhabdomyolysis, and antipsychotics lower the seizure threshold.",
    choices: [
      { text: "Benzodiazepines", isCorrect: true },
      { text: "Non-selective beta blockers" },
      { text: "Antipsychotics as monotherapy" },
      { text: "Anticholinergics" },
      { text: "Physical restraint without sedation" },
    ],
  },
  {
    stem: "A patient with atropine toxicity has a heart rate of 140/min, temperature 103°F and dry flushed skin. Beyond antidotal therapy, which supportive measure is most important?",
    topic: "Toxidromes & Antidotes",
    explanation:
      "Active cooling is critical because anticholinergic hyperthermia results from lost sweating, and untreated it causes rhabdomyolysis and organ injury. Antipyretics are ineffective since the set point is not raised.",
    choices: [
      { text: "Active external cooling, since sweating is abolished", isCorrect: true },
      { text: "Antipyretics such as acetaminophen, which correct the set point" },
      { text: "Warming blankets to prevent shivering" },
      { text: "Fluid restriction to limit edema" },
      { text: "Beta blockade to reduce heart rate first" },
    ],
  },
  {
    stem: "Which principle applies to all toxidrome management before antidotes are considered?",
    topic: "Toxidromes & Antidotes",
    explanation:
      "Airway, breathing and circulation come first, since most poisoning deaths result from airway loss, hypoventilation or arrhythmia rather than from the absence of an antidote. Supportive care alone is sufficient in the majority of poisonings.",
    choices: [
      { text: "Secure airway, breathing and circulation first — supportive care saves more lives than antidotes", isCorrect: true },
      { text: "Give the specific antidote before any assessment" },
      { text: "Induce vomiting in every case" },
      { text: "Withhold all treatment until toxicology results return" },
      { text: "Administer activated charcoal to every poisoned patient" },
    ],
  },

  /* ══════════════ CLINICAL APPLICATION ══════════════ */
  {
    stem: "An adult in anaphylaxis weighs 70 kg. Using 1:1,000 epinephrine, what volume delivers 0.5 mg?",
    topic: "Clinical Application",
    explanation:
      "1:1,000 is 1 mg/mL, so 0.5 mg is 0.5 mL. Confusing this with 1:10,000 — where 0.5 mg would be 5 mL — is a recognized error, which is why the concentration must be read aloud before administration.",
    choices: [
      { text: "0.5 mL", isCorrect: true },
      { text: "5 mL" },
      { text: "0.05 mL" },
      { text: "1 mL" },
      { text: "50 mL" },
    ],
  },
  {
    stem: "A norepinephrine infusion is ordered at 0.1 mcg/kg/min for an 80 kg patient. The bag contains 4 mg in 250 mL. What rate in mL/hour is required?",
    topic: "Clinical Application",
    explanation:
      "0.1 mcg/kg/min × 80 kg = 8 mcg/min = 480 mcg/hour. The concentration is 4,000 mcg ÷ 250 mL = 16 mcg/mL, so 480 ÷ 16 = 30 mL/hour. Establish concentration first, then convert the ordered rate to the same time unit.",
    choices: [
      { text: "30 mL/hour", isCorrect: true },
      { text: "3 mL/hour" },
      { text: "300 mL/hour" },
      { text: "8 mL/hour" },
      { text: "48 mL/hour" },
    ],
  },
  {
    stem: "Which of the following would you expect after a single therapeutic dose of atropine? Select all that apply.",
    type: "MULTI",
    topic: "Clinical Application",
    explanation:
      "Tachycardia, dry mouth, mydriasis with blurred near vision and reduced sweating all follow directly from muscarinic blockade. Bradycardia and increased salivation are cholinergic effects, the opposite of what atropine produces.",
    choices: [
      { text: "Tachycardia", isCorrect: true },
      { text: "Dry mouth", isCorrect: true },
      { text: "Mydriasis with blurred near vision", isCorrect: true },
      { text: "Bradycardia" },
      { text: "Increased salivation" },
    ],
  },
  {
    stem: "A patient on a beta blocker develops anaphylaxis and responds poorly to epinephrine. Which agent should be considered?",
    topic: "Clinical Application",
    explanation:
      "Glucagon bypasses blocked beta receptors by activating cardiac adenylyl cyclase through its own receptor, restoring inotropy and chronotropy. This is the same mechanism used in beta blocker overdose.",
    choices: [
      { text: "Glucagon", isCorrect: true },
      { text: "A higher dose of the same beta blocker" },
      { text: "Atropine as the definitive treatment" },
      { text: "Phenylephrine to increase bronchodilation" },
      { text: "Naloxone" },
    ],
  },
  {
    stem: "True or False: Understanding which receptor a drug targets predicts both its therapeutic effect and its main adverse effects.",
    type: "TRUE_FALSE",
    topic: "Clinical Application",
    explanation:
      "True. Beta-2 agonism relieves bronchospasm and causes tremor; antimuscarinic action relieves bladder overactivity and causes dry mouth and confusion. Learning receptor distribution replaces memorizing separate lists of indications and side effects.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which autonomic drug would you avoid in a patient with untreated narrow-angle glaucoma, benign prostatic hyperplasia and dementia?",
    topic: "Clinical Application",
    explanation:
      "An antimuscarinic such as oxybutynin risks acute angle closure, urinary retention and worsened cognition simultaneously. Recognizing cumulative anticholinergic burden across a medication list is one of the highest-value reviews in geriatric practice.",
    choices: [
      { text: "Oxybutynin", isCorrect: true },
      { text: "Metoprolol" },
      { text: "Albuterol" },
      { text: "Lisinopril" },
      { text: "Atorvastatin" },
    ],
  },
  {
    stem: "A patient develops bradycardia at 38 beats/min with hypotension after an overdose. Atropine has failed. Which finding would direct you toward glucagon?",
    topic: "Clinical Application",
    explanation:
      "Hypoglycemia alongside bradycardia points to beta blocker overdose, for which glucagon is the specific measure. Hyperglycemia would suggest calcium channel blocker toxicity, where high-dose insulin with glucose and calcium are favored.",
    choices: [
      { text: "Accompanying hypoglycemia, suggesting beta blocker overdose", isCorrect: true },
      { text: "Accompanying hyperglycemia, suggesting beta blocker overdose" },
      { text: "Mydriasis with dry skin" },
      { text: "Copious secretions and fasciculations" },
      { text: "Pinpoint pupils with apnea" },
    ],
  },
];
