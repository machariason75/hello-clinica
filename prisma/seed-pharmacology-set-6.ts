/**
 * PHARMACOLOGY — SET 6 of 7  ·  TIER 6: CLINICAL REASONING
 *
 * SEVENTY questions. Ten areas, seven each.
 *
 * THIS SET IS WRITTEN DIFFERENTLY FROM THE OTHERS.
 *
 * Sets 1–5 test whether a fact is known. This set tests whether facts can be
 * combined under uncertainty. Every question is a situation rather than a
 * definition, and the correct answer requires holding two or three things at
 * once — the drug, the patient, and what else could explain what you are seeing.
 *
 * The distractors are written to be genuinely tempting. Several are what a
 * competent person would do if they stopped thinking one step too early, which
 * is the failure mode this tier exists to catch.
 *
 * Non-destructive (uses _seedkit) — a re-run refreshes only what it owns and
 * keeps anything you added through Admin.
 *
 * ⚠ Local availability, formulary and guideline specifics vary. These test the
 * reasoning process, which travels. Review anything numerical against Kenyan
 * guidance before publishing.
 *
 * Run:  npx tsx prisma/seed-pharmacology-set-6.ts
 */

import { type Q, findCategory, seedSet, done, REPLACE_MODE } from "./_seedkit";

const SET6: Q[] = [
  /* ── Is This the Drug? ── */
  {
    stem: "An 82-year-old becomes confused four days after admission. She takes eleven regular medicines, three of which were started this week. What is the most useful first step?",
    topic: "Is This the Drug?",
    explanation:
      "Establish what changed and when, and line the timeline of the confusion up against the timeline of the drug changes. A new symptom appearing days after a new drug is a drug reaction until proven otherwise — but the reasoning only works if you know the sequence, which means reading the chart rather than examining her again.",
    choices: [
      { text: "Map the onset of confusion against exactly when each new drug was started", isCorrect: true },
      { text: "Request a CT head before anything else", isCorrect: false },
      { text: "Start an antipsychotic to settle her", isCorrect: false },
      { text: "Stop all eleven medicines at once", isCorrect: false },
    ],
  },
  {
    stem: "A man on amlodipine develops bilateral ankle oedema. Which finding would point away from the drug and towards heart failure?",
    topic: "Is This the Drug?",
    explanation:
      "Raised jugular venous pressure, orthopnoea or breathlessness indicate a cardiac cause. Calcium channel blocker oedema is a local vascular effect — it is not accompanied by raised filling pressures, does not respond to diuretics, and resolves on stopping the drug. Reaching for a diuretic instead is the classic prescribing cascade.",
    choices: [
      { text: "Raised JVP with orthopnoea and breathlessness", isCorrect: true },
      { text: "Oedema that is worse by the end of the day", isCorrect: false },
      { text: "Oedema affecting both ankles equally", isCorrect: false },
      { text: "Absence of any response to a diuretic", isCorrect: false },
    ],
  },
  {
    stem: "A patient develops a rash three days after starting two new drugs on the same day. How is the culprit best identified?",
    topic: "Is This the Drug?",
    explanation:
      "Stop both if the reaction is significant, then reintroduce one at a time only if genuinely needed and if the reaction was mild. Guessing which is responsible risks continuing the wrong one, and a severe reaction is never a candidate for rechallenge at all.",
    choices: [
      { text: "Stop both, then reintroduce singly only if needed and the reaction was mild", isCorrect: true },
      { text: "Guess based on which drug more commonly causes rash and stop only that", isCorrect: false },
      { text: "Continue both and add an antihistamine", isCorrect: false },
      { text: "Rechallenge with both simultaneously to confirm", isCorrect: false },
    ],
  },
  {
    stem: "A patient with heart failure on an ACE inhibitor develops a new dry cough. What best distinguishes drug-induced cough from cardiac decompensation?",
    topic: "Is This the Drug?",
    explanation:
      "Decompensation brings breathlessness, orthopnoea, weight gain and worsening oedema alongside the cough; ACE inhibitor cough occurs in a patient who is otherwise stable and unchanged. Assuming the drug and switching to an ARB in someone who is actually decompensating delays the treatment they need.",
    choices: [
      { text: "Accompanying breathlessness, orthopnoea, weight gain and worsening oedema", isCorrect: true },
      { text: "The cough being dry rather than productive", isCorrect: false },
      { text: "The cough being worse at night", isCorrect: false },
      { text: "How long the patient has taken the ACE inhibitor", isCorrect: false },
    ],
  },
  {
    stem: "A symptom the patient attributes to a new drug turns out to have started two weeks before it was prescribed. What does this indicate?",
    topic: "Is This the Drug?",
    explanation:
      "The drug cannot be the cause, and the real explanation is still outstanding. Accepting the patient's attribution stops the search and can lead to a useful drug being abandoned while the actual problem goes uninvestigated — establishing the timeline matters more than the plausibility of the attribution.",
    choices: [
      { text: "The drug is not responsible and the real cause is still unexplained", isCorrect: true },
      { text: "The drug caused it retrospectively", isCorrect: false },
      { text: "The timing is irrelevant if the drug is known to cause it", isCorrect: false },
      { text: "The patient must be mistaken about the symptom", isCorrect: false },
    ],
  },
  {
    stem: "A patient's symptoms resolved when a drug was stopped and returned when it was restarted. What does this sequence establish?",
    topic: "Is This the Drug?",
    explanation:
      "A positive dechallenge and rechallenge, which is the strongest clinical evidence of causation available outside a trial. It is why the sequence is worth documenting explicitly — it converts a suspicion into a finding that should follow the patient in their record.",
    choices: [
      { text: "Strong evidence of causation — a positive dechallenge and rechallenge", isCorrect: true },
      { text: "Coincidence, since two events prove nothing", isCorrect: false },
      { text: "That the patient has developed an allergy", isCorrect: false },
      { text: "That the dose was simply too high", isCorrect: false },
    ],
  },
  {
    stem: "An older patient has had three falls since discharge. She takes eight medicines. Which approach is most likely to help?",
    topic: "Is This the Drug?",
    explanation:
      "Identify the drugs most likely to contribute — sedating, anticholinergic and blood-pressure-lowering — and change one at a time with review. Stopping several together makes it impossible to tell what helped or what caused a new problem, and stopping nothing leaves the cause in place.",
    choices: [
      { text: "Change one likely contributor at a time, with review between changes", isCorrect: true },
      { text: "Stop all eight and see what happens", isCorrect: false },
      { text: "Accept falls as inevitable at her age", isCorrect: false },
      { text: "Add a bone protection agent and change nothing else", isCorrect: false },
    ],
  },

  /* ── The Deteriorating Patient on Treatment ── */
  {
    stem: "A septic patient is 48 hours into appropriate antibiotics and has not improved. What should be considered before changing the antibiotic?",
    topic: "The Deteriorating Patient on Treatment",
    explanation:
      "Undrained source, a resistant or unexpected organism, an entirely different diagnosis, or a complication such as a new collection. Escalating the antibiotic is the reflex, but an abscess or an obstructed system will not respond to any agent — the question is whether something needs draining, not what to prescribe next.",
    choices: [
      { text: "Undrained source, resistant organism, wrong diagnosis or a new complication", isCorrect: true },
      { text: "Nothing — simply broaden the antibiotic", isCorrect: false },
      { text: "Whether the patient is exaggerating symptoms", isCorrect: false },
      { text: "Stopping antibiotics entirely and observing", isCorrect: false },
    ],
  },
  {
    stem: "A patient with asthma remains poorly controlled despite two treatment escalations. Which should be checked before a third?",
    topic: "The Deteriorating Patient on Treatment",
    explanation:
      "Inhaler technique, adherence, ongoing trigger exposure, and whether the diagnosis is right at all. Escalating past an unrecognised technique problem adds side effects without benefit, and a proportion of apparently refractory asthma turns out not to be asthma.",
    choices: [
      { text: "Technique, adherence, trigger exposure and whether the diagnosis is correct", isCorrect: true },
      { text: "Nothing — escalate as the guideline directs", isCorrect: false },
      { text: "Only the reliever dose", isCorrect: false },
      { text: "Whether the patient wants to continue treatment", isCorrect: false },
    ],
  },
  {
    stem: "A patient with heart failure feels worse two weeks after a beta blocker was started at low dose. Observations are stable. What is usually correct?",
    topic: "The Deteriorating Patient on Treatment",
    explanation:
      "Continue at the current dose and reassess, having warned the patient this can happen. The early negative inotropic effect precedes the long-term benefit, and stopping at this point forfeits a mortality gain — though genuine decompensation with fluid overload is a different matter and does need action.",
    choices: [
      { text: "Continue at the current dose and reassess, having explained the expected course", isCorrect: true },
      { text: "Stop the beta blocker permanently", isCorrect: false },
      { text: "Double the dose immediately to get past it", isCorrect: false },
      { text: "Add a second beta blocker", isCorrect: false },
    ],
  },
  {
    stem: "A patient on insulin has a rising HbA1c despite several dose increases. Their capillary readings are mostly normal. What does this discrepancy suggest?",
    topic: "The Deteriorating Patient on Treatment",
    explanation:
      "The readings and the HbA1c disagree, so one of them is not telling the truth — most often because readings are only taken at favourable times, or are not being taken at all. It can also indicate unrecognised nocturnal hypoglycaemia with rebound. Increasing the dose again without resolving the discrepancy risks harm.",
    choices: [
      { text: "The readings may be unrepresentative or unreliable, or there is unrecognised nocturnal hypoglycaemia", isCorrect: true },
      { text: "The HbA1c is always wrong when readings are normal", isCorrect: false },
      { text: "The insulin dose is definitely too low", isCorrect: false },
      { text: "The patient has developed type 1 diabetes", isCorrect: false },
    ],
  },
  {
    stem: "A patient on warfarin has an INR that swings widely between visits. Which explanation should be pursued first?",
    topic: "The Deteriorating Patient on Treatment",
    explanation:
      "Inconsistent dosing or missed doses, changes in diet, alcohol, or intercurrent illness, and any new or stopped medicine including over-the-counter and herbal products. Adjusting the dose against a fluctuating cause simply moves the fluctuation, so the cause is found first.",
    choices: [
      { text: "Inconsistent dosing, dietary or alcohol change, illness, or a new interacting medicine", isCorrect: true },
      { text: "Laboratory error on every occasion", isCorrect: false },
      { text: "That warfarin is unsuitable and should be abandoned", isCorrect: false },
      { text: "Nothing — variability is expected and needs no explanation", isCorrect: false },
    ],
  },
  {
    stem: "A post-operative patient develops acute kidney injury on day two. Which medication review is most urgent?",
    topic: "The Deteriorating Patient on Treatment",
    explanation:
      "Identify nephrotoxins and drugs that must now be dose-adjusted or held — NSAIDs, ACE inhibitors or ARBs, diuretics, aminoglycosides, and anything renally cleared that will now accumulate. Continuing a renally cleared drug at the previous dose turns one problem into two.",
    choices: [
      { text: "Hold nephrotoxins and adjust or stop renally cleared drugs", isCorrect: true },
      { text: "No change — the injury will resolve on its own", isCorrect: false },
      { text: "Increase the diuretic to improve urine output", isCorrect: false },
      { text: "Stop only the analgesia", isCorrect: false },
    ],
  },
  {
    stem: "Creatinine rises by a small amount after an ACE inhibitor is started in a patient with heart failure. When is this acceptable?",
    topic: "The Deteriorating Patient on Treatment",
    explanation:
      "A modest, stable rise is expected and does not require stopping, because the drug reduces intraglomerular pressure by design. A large or progressive rise suggests volume depletion or renovascular disease and does need the drug held and the cause investigated. The size and trajectory decide it, not the fact of a rise.",
    choices: [
      { text: "When the rise is modest and stabilises — a large or progressive rise needs investigation", isCorrect: true },
      { text: "Any rise means the drug must be stopped permanently", isCorrect: false },
      { text: "Any rise can be ignored regardless of size", isCorrect: false },
      { text: "Creatinine should never change on an ACE inhibitor", isCorrect: false },
    ],
  },

  /* ── Treatment Failure or Non-Adherence? ── */
  {
    stem: "How should a clinician ask about adherence to get a truthful answer?",
    topic: "Treatment Failure or Non-Adherence?",
    explanation:
      "Ask in a way that makes admitting it easy and normal — acknowledging that most people miss doses, and asking how many were missed in the last week rather than whether any were. A question phrased as an accusation reliably produces reassurance rather than information.",
    choices: [
      { text: "Normalise it first, then ask how many doses were missed recently", isCorrect: true },
      { text: "Ask directly whether they always take it as prescribed", isCorrect: false },
      { text: "Assume adherence unless the patient volunteers otherwise", isCorrect: false },
      { text: "Rely on the prescription collection record alone", isCorrect: false },
    ],
  },
  {
    stem: "A patient collects every prescription on time but their condition remains uncontrolled. What does this tell you?",
    topic: "Treatment Failure or Non-Adherence?",
    explanation:
      "Only that the medicine was dispensed — not that it was taken, taken correctly, or absorbed. Collection data excludes one explanation and leaves several open, including technique, timing, an interaction, and genuine treatment failure.",
    choices: [
      { text: "Only that it was dispensed — not that it was taken correctly or is working", isCorrect: true },
      { text: "That the patient is definitely adherent", isCorrect: false },
      { text: "That the drug has failed and must be changed", isCorrect: false },
      { text: "That the diagnosis is certainly wrong", isCorrect: false },
    ],
  },
  {
    stem: "Which cause of non-adherence is most often missed because clinicians do not ask?",
    topic: "Treatment Failure or Non-Adherence?",
    explanation:
      "Cost. Patients rarely volunteer that they cannot afford a medicine, and instead ration it, take it intermittently or stop. Asking directly and without embarrassment often reveals a solvable problem — a cheaper equivalent or a different regimen — that no dose escalation would ever have fixed.",
    choices: [
      { text: "Cost, which patients rarely volunteer and instead manage by rationing", isCorrect: true },
      { text: "Forgetting, which is always asked about", isCorrect: false },
      { text: "Side effects, which patients always report", isCorrect: false },
      { text: "Non-adherence has no hidden causes", isCorrect: false },
    ],
  },
  {
    stem: "What distinguishes intentional from unintentional non-adherence, and why does it matter?",
    topic: "Treatment Failure or Non-Adherence?",
    explanation:
      "Unintentional is a practical problem — forgetting, complexity, dexterity — solved with reminders, simplification or a different formulation. Intentional reflects a belief or an experience: a side effect, a doubt about need, a fear of dependence. Applying a dosette box to a belief problem achieves nothing.",
    choices: [
      { text: "One is practical and needs practical solutions; the other reflects beliefs and needs discussion", isCorrect: true },
      { text: "They are the same and respond to the same measures", isCorrect: false },
      { text: "Intentional non-adherence cannot be addressed", isCorrect: false },
      { text: "Only unintentional non-adherence is common", isCorrect: false },
    ],
  },
  {
    stem: "A patient quietly stopped a medicine months ago because of a side effect they never mentioned. What does this most commonly reflect?",
    topic: "Treatment Failure or Non-Adherence?",
    explanation:
      "That they were not told what to expect, or did not feel able to raise it. Warning patients about likely side effects and explicitly inviting them to report rather than stop converts a silent discontinuation into a conversation — and often into a manageable adjustment.",
    choices: [
      { text: "They were not warned, or did not feel able to raise it", isCorrect: true },
      { text: "Deliberate concealment for its own sake", isCorrect: false },
      { text: "That the side effect was imaginary", isCorrect: false },
      { text: "That the drug was ineffective", isCorrect: false },
    ],
  },
  {
    stem: "Why is escalating the dose dangerous in a patient assumed to be adherent but who is not?",
    topic: "Treatment Failure or Non-Adherence?",
    explanation:
      "If they later resume taking the medicine as prescribed, they receive the escalated dose in full and can become toxic. The risk is highest with narrow-index drugs, and it means confirming adherence before escalating is a safety step rather than an accusation.",
    choices: [
      { text: "If they later take it fully, they receive the escalated dose and may become toxic", isCorrect: true },
      { text: "There is no risk; the extra dose is simply wasted", isCorrect: false },
      { text: "The drug becomes permanently ineffective", isCorrect: false },
      { text: "Escalation always overcomes non-adherence", isCorrect: false },
    ],
  },
  {
    stem: "In which situation is supervised or directly observed therapy most justified?",
    topic: "Treatment Failure or Non-Adherence?",
    explanation:
      "Where non-adherence creates a public health consequence beyond the individual — tuberculosis being the standard example, since interrupted treatment generates resistant disease. It is a substantial imposition on the patient, so it needs a reason of that weight rather than mere convenience.",
    choices: [
      { text: "Where non-adherence carries a public health consequence, as in tuberculosis", isCorrect: true },
      { text: "For every patient on long-term treatment", isCorrect: false },
      { text: "Whenever a clinician doubts the patient", isCorrect: false },
      { text: "It is never justified in any circumstance", isCorrect: false },
    ],
  },

  /* ── Competing Risks & Trade-offs ── */
  {
    stem: "An 85-year-old with atrial fibrillation falls roughly monthly. How should anticoagulation be approached?",
    topic: "Competing Risks & Trade-offs",
    explanation:
      "Weigh the stroke risk, which is high and rises with age, against the actual bleeding risk from falls, which is lower than intuition suggests at realistic fall frequencies. Falls are a reason to address the falls, not usually a reason to withhold anticoagulation.",
    choices: [
      { text: "Weigh both explicitly — falls usually do not outweigh the stroke benefit, and the falls should be addressed", isCorrect: true },
      { text: "Withhold anticoagulation automatically because of the falls", isCorrect: false },
      { text: "Anticoagulate without considering bleeding risk at all", isCorrect: false },
      { text: "Use aspirin instead as a safer compromise", isCorrect: false },
    ],
  },
  {
    stem: "A patient with chronic kidney disease has painful osteoarthritis. What is the most defensible approach?",
    topic: "Competing Risks & Trade-offs",
    explanation:
      "Use the alternatives first — paracetamol, topical agents, physical measures and, where appropriate, cautious opioid use — reserving any systemic NSAID for short courses with monitoring if genuinely unavoidable. Leaving pain untreated is not the safe option either; it has its own consequences.",
    choices: [
      { text: "Exhaust non-NSAID options first, and if NSAIDs are unavoidable use them briefly with monitoring", isCorrect: true },
      { text: "Prescribe a regular NSAID as first-line", isCorrect: false },
      { text: "Leave the pain untreated as the safest course", isCorrect: false },
      { text: "Start a strong opioid immediately", isCorrect: false },
    ],
  },
  {
    stem: "A patient with dementia is agitated and distressing to their family. What should precede considering an antipsychotic?",
    topic: "Competing Risks & Trade-offs",
    explanation:
      "Look for a treatable cause — pain, constipation, infection, retention, a new drug — and try non-pharmacological approaches. Antipsychotics in dementia increase stroke and mortality risk, so they need a specific indication, a low dose, and a planned review, not an open-ended prescription.",
    choices: [
      { text: "Search for a treatable cause and try non-drug measures, given the raised stroke and mortality risk", isCorrect: true },
      { text: "Start an antipsychotic immediately at full dose", isCorrect: false },
      { text: "Antipsychotics carry no additional risk in dementia", isCorrect: false },
      { text: "Sedation is the only available approach", isCorrect: false },
    ],
  },
  {
    stem: "A septic patient's records list a penicillin allergy with no detail, and the best empirical agent is a beta-lactam. How should this be handled?",
    topic: "Competing Risks & Trade-offs",
    explanation:
      "Take whatever history is obtainable quickly, and if the reaction was clearly not anaphylaxis a cephalosporin or the indicated agent can usually be given with monitoring. Substituting an inferior antibiotic in sepsis carries its own mortality — the safe-looking choice is not always the safe one.",
    choices: [
      { text: "Get a rapid history; if the reaction was not anaphylactic, use the indicated agent with monitoring", isCorrect: true },
      { text: "Always avoid all beta-lactams whatever the history", isCorrect: false },
      { text: "Give the beta-lactam without any history at all", isCorrect: false },
      { text: "Delay antibiotics until allergy testing is available", isCorrect: false },
    ],
  },
  {
    stem: "A patient with a history of opioid dependence has severe post-operative pain. What is the correct approach?",
    topic: "Competing Risks & Trade-offs",
    explanation:
      "Treat the pain properly, recognising that tolerance means requirements are often higher, while using multimodal analgesia and a clear plan with review. Under-treating on the grounds of a dependence history is both ineffective and a recognised source of harm and distrust.",
    choices: [
      { text: "Treat the pain adequately with multimodal analgesia and a clear plan, expecting higher requirements", isCorrect: true },
      { text: "Withhold opioids entirely because of the history", isCorrect: false },
      { text: "Use the standard dose and refuse any increase", isCorrect: false },
      { text: "Assume all reported pain is drug-seeking", isCorrect: false },
    ],
  },
  {
    stem: "Immunosuppression is indicated in a patient found to have latent tuberculosis. What is the usual sequence?",
    topic: "Competing Risks & Trade-offs",
    explanation:
      "Treat the latent infection first, or at least start it, before beginning immunosuppression — because reactivation under immunosuppression can be disseminated and severe. The underlying condition rarely cannot wait the short period this requires.",
    choices: [
      { text: "Treat the latent infection before starting immunosuppression", isCorrect: true },
      { text: "Start immunosuppression and monitor for symptoms", isCorrect: false },
      { text: "Abandon immunosuppression permanently", isCorrect: false },
      { text: "Treat both only if symptoms appear", isCorrect: false },
    ],
  },
  {
    stem: "A statin is due for review in a patient with metastatic cancer and a prognosis of a few months. What reasoning applies?",
    topic: "Competing Risks & Trade-offs",
    explanation:
      "The benefit accrues over years while the burden — tablets, cost, side effects, interactions — is immediate. Stopping is usually appropriate, and framing it as removing something no longer useful rather than giving up is what makes the conversation acceptable to the patient.",
    choices: [
      { text: "Benefit takes years while burden is immediate, so stopping is usually appropriate", isCorrect: true },
      { text: "Continue indefinitely regardless of prognosis", isCorrect: false },
      { text: "Increase the dose to gain benefit faster", isCorrect: false },
      { text: "The decision has no relationship to prognosis", isCorrect: false },
    ],
  },

  /* ── The Confused Older Patient ── */
  {
    stem: "Which drug groups should be reviewed first in a patient with new delirium?",
    topic: "The Confused Older Patient",
    explanation:
      "Anticholinergics, opioids, benzodiazepines and other sedatives, and anything recently started or increased. Medication is among the commonest reversible contributors to delirium, and reviewing it costs nothing while imaging and lumbar puncture are being arranged.",
    choices: [
      { text: "Anticholinergics, opioids, sedatives, and anything recently started or increased", isCorrect: true },
      { text: "Only antibiotics", isCorrect: false },
      { text: "Topical preparations and vitamins", isCorrect: false },
      { text: "Medication is rarely relevant to delirium", isCorrect: false },
    ],
  },
  {
    stem: "A previously stable inpatient becomes agitated and tremulous on the third day of admission. What should be considered alongside infection?",
    topic: "The Confused Older Patient",
    explanation:
      "Withdrawal — from alcohol, benzodiazepines or nicotine — since admission enforces abrupt cessation of whatever the patient took at home. The timing fits alcohol withdrawal particularly well, and it is missed whenever the alcohol history was never taken.",
    choices: [
      { text: "Withdrawal from alcohol, benzodiazepines or nicotine following abrupt cessation on admission", isCorrect: true },
      { text: "Only progression of underlying dementia", isCorrect: false },
      { text: "An allergic reaction to hospital food", isCorrect: false },
      { text: "Nothing beyond infection needs considering", isCorrect: false },
    ],
  },
  {
    stem: "How can delirium be distinguished from progressive dementia in a patient who also started a new drug recently?",
    topic: "The Confused Older Patient",
    explanation:
      "Delirium comes on over hours to days, fluctuates through the day, and impairs attention prominently; dementia progresses over months without that fluctuation. A recent drug change fitting the onset makes delirium considerably more likely — and unlike dementia, it is reversible if the cause is found.",
    choices: [
      { text: "Rapid onset, fluctuation and impaired attention — and a drug change matching the timing", isCorrect: true },
      { text: "Delirium always progresses slowly over months", isCorrect: false },
      { text: "They cannot be distinguished clinically", isCorrect: false },
      { text: "Only imaging can distinguish them", isCorrect: false },
    ],
  },
  {
    stem: "An older patient is confused with a sodium of 121. Which medications are the likely contributors?",
    topic: "The Confused Older Patient",
    explanation:
      "Thiazide diuretics, SSRIs and carbamazepine are the common culprits, often in combination. It is a good example of a drug problem presenting as a general medical one — the confusion, the falls and the sodium all have a single explanation sitting on the prescription chart.",
    choices: [
      { text: "Thiazides, SSRIs and carbamazepine", isCorrect: true },
      { text: "Inhaled corticosteroids and antihistamines", isCorrect: false },
      { text: "Statins and proton pump inhibitors", isCorrect: false },
      { text: "No medication causes hyponatraemia", isCorrect: false },
    ],
  },
  {
    stem: "An agitated older patient is found to be in urinary retention and constipated. Which drug property most likely links these findings?",
    topic: "The Confused Older Patient",
    explanation:
      "Cumulative anticholinergic effect from several drugs together — producing retention, constipation and confusion at once. Treating each symptom separately, with a catheter and a laxative, leaves the cause untouched and the agitation unexplained.",
    choices: [
      { text: "Cumulative anticholinergic burden across several drugs", isCorrect: true },
      { text: "Excessive beta-2 agonist use", isCorrect: false },
      { text: "Statin-induced myopathy", isCorrect: false },
      { text: "The findings are unrelated to medication", isCorrect: false },
    ],
  },
  {
    stem: "Why can sedating a delirious patient make matters worse?",
    topic: "The Confused Older Patient",
    explanation:
      "Sedatives can deepen the confusion, prolong the delirium, increase fall and aspiration risk, and obscure the deterioration you are monitoring for. They have a place where the patient is a danger to themselves or others, at low dose and briefly — but they treat the observer's problem more reliably than the patient's.",
    choices: [
      { text: "They can prolong delirium, add falls and aspiration risk, and mask deterioration", isCorrect: true },
      { text: "They reliably shorten every episode of delirium", isCorrect: false },
      { text: "They have no effect either way", isCorrect: false },
      { text: "They should be first-line in all delirium", isCorrect: false },
    ],
  },
  {
    stem: "A patient on a sulfonylurea is found confused and sweaty. What must be excluded immediately?",
    topic: "The Confused Older Patient",
    explanation:
      "Hypoglycaemia — checked with a glucose measurement before anything else, because it is instantly reversible and rapidly damaging if missed. Sulfonylurea hypoglycaemia can also be prolonged and recur after initial correction, so the patient needs observation rather than discharge once glucose is restored.",
    choices: [
      { text: "Hypoglycaemia — check glucose immediately, and observe because it can recur", isCorrect: true },
      { text: "Stroke, with imaging before any glucose measurement", isCorrect: false },
      { text: "Infection, treated empirically first", isCorrect: false },
      { text: "Nothing urgent; review in the morning", isCorrect: false },
    ],
  },

  /* ── Interpreting the Number ── */
  {
    stem: "A drug level was taken at an unknown time relative to the dose and is reported as low. How should it be used?",
    topic: "Interpreting the Number",
    explanation:
      "It cannot be interpreted, and should be repeated correctly timed. Acting on an untimed level risks increasing a dose that was actually adequate — the number looks like information but is not, which is more dangerous than having no result at all.",
    choices: [
      { text: "Do not act on it; repeat the sample correctly timed", isCorrect: true },
      { text: "Increase the dose based on the low value", isCorrect: false },
      { text: "Assume the timing was probably close enough", isCorrect: false },
      { text: "Stop the drug because the level is low", isCorrect: false },
    ],
  },
  {
    stem: "A patient with hypoalbuminaemia has a total phenytoin level in the therapeutic range but clear signs of toxicity. What explains this?",
    topic: "Interpreting the Number",
    explanation:
      "The reported total is mostly bound drug, and with low albumin the free active fraction is higher than the total suggests. The patient is toxic despite a reassuring number, which is why the clinical picture overrides the level rather than the other way round.",
    choices: [
      { text: "Low albumin raises the free active fraction, so the total under-represents it", isCorrect: true },
      { text: "The laboratory result must be erroneous", isCorrect: false },
      { text: "Phenytoin cannot cause toxicity within range", isCorrect: false },
      { text: "The symptoms must have another cause entirely", isCorrect: false },
    ],
  },
  {
    stem: "Why is a single abnormal result usually less informative than a trend?",
    topic: "Interpreting the Number",
    explanation:
      "One value may reflect timing, technique, hydration or laboratory variation, whereas a direction of travel across several results is far harder to explain away. A creatinine of 140 means something quite different if last month's was 90 rather than 145.",
    choices: [
      { text: "A single value has many innocent explanations; a trend is much harder to explain away", isCorrect: true },
      { text: "Single results are always more accurate than trends", isCorrect: false },
      { text: "Trends are irrelevant once a value is abnormal", isCorrect: false },
      { text: "Previous results should not be consulted", isCorrect: false },
    ],
  },
  {
    stem: "A patient on a statin has a mildly raised creatine kinase after a weekend of heavy physical work. What is the appropriate interpretation?",
    topic: "Interpreting the Number",
    explanation:
      "Exercise raises CK independently of any drug, so the result needs repeating after a period of rest before attributing it to the statin. Stopping an effective statin on a confounded result removes a real benefit for a reason that may not exist.",
    choices: [
      { text: "Repeat after rest before attributing it to the statin, since exercise raises CK", isCorrect: true },
      { text: "Stop the statin permanently on this result", isCorrect: false },
      { text: "Ignore the result entirely regardless of symptoms", isCorrect: false },
      { text: "Exercise does not affect creatine kinase", isCorrect: false },
    ],
  },
  {
    stem: "Why can estimated GFR mislead in a very frail patient with low muscle mass?",
    topic: "Interpreting the Number",
    explanation:
      "The estimate is derived from creatinine, which depends on muscle bulk — so a frail patient generates little creatinine and the calculation overestimates their true renal function. Doses look acceptable while the kidney is doing less than the number implies.",
    choices: [
      { text: "Low muscle mass produces little creatinine, so the estimate is too optimistic", isCorrect: true },
      { text: "It underestimates function in frail patients", isCorrect: false },
      { text: "Muscle mass does not affect creatinine", isCorrect: false },
      { text: "eGFR is exact in every patient", isCorrect: false },
    ],
  },
  {
    stem: "A digoxin level is within the reference range, but the patient has nausea, confusion and a new arrhythmia. What should guide management?",
    topic: "Interpreting the Number",
    explanation:
      "The clinical picture. Reference ranges describe populations, and factors such as hypokalaemia increase toxicity at any given concentration — so a patient can be genuinely toxic within range. Treating the number rather than the person is the error being tested here.",
    choices: [
      { text: "The clinical picture, since toxicity can occur within range, especially with hypokalaemia", isCorrect: true },
      { text: "The level alone — toxicity is excluded", isCorrect: false },
      { text: "Increase the dose since the level is not high", isCorrect: false },
      { text: "Repeat the level and take no action meanwhile", isCorrect: false },
    ],
  },
  {
    stem: "Why should a result that does not fit the clinical picture prompt a repeat rather than immediate action?",
    topic: "Interpreting the Number",
    explanation:
      "Sampling error, contamination, mislabelling and delayed processing all produce plausible but wrong numbers — a haemolysed potassium being the everyday example. Acting on a spurious result can cause direct harm, so when the number and the patient disagree, both are checked.",
    choices: [
      { text: "Sampling and handling errors produce plausible wrong values, and acting on them causes harm", isCorrect: true },
      { text: "Laboratory results are never wrong", isCorrect: false },
      { text: "The clinical picture should always be disregarded", isCorrect: false },
      { text: "Repeating tests is never justified", isCorrect: false },
    ],
  },

  /* ── Handover, Transitions & Error ── */
  {
    stem: "Which point in a patient's journey carries the highest risk of medication error?",
    topic: "Handover, Transitions & Error",
    explanation:
      "Transitions of care — admission, transfer between teams or wards, and discharge — where responsibility changes hands and information is copied rather than reconsidered. Most unintentional omissions and duplications originate at these points rather than at the moment of prescribing.",
    choices: [
      { text: "Transitions of care: admission, transfer and discharge", isCorrect: true },
      { text: "Routine outpatient review", isCorrect: false },
      { text: "The moment a stable drug is dispensed", isCorrect: false },
      { text: "Risk is spread evenly across the journey", isCorrect: false },
    ],
  },
  {
    stem: "A discharge summary omits that a long-term drug was deliberately stopped in hospital. What typically follows?",
    topic: "Handover, Transitions & Error",
    explanation:
      "It is restarted in the community, because the community team has no reason to know it was stopped on purpose. Recording not just what changed but why is what prevents this, and the reasoning is the part most often left out.",
    choices: [
      { text: "It is restarted in the community, because the reason for stopping was never communicated", isCorrect: true },
      { text: "It remains stopped, since omission implies discontinuation", isCorrect: false },
      { text: "The community team always contacts the hospital to check", isCorrect: false },
      { text: "Nothing happens; the omission is harmless", isCorrect: false },
    ],
  },
  {
    stem: "A patient is admitted taking fourteen medicines. What is the most useful first task?",
    topic: "Handover, Transitions & Error",
    explanation:
      "Establish what they are genuinely taking, from more than one source — the patient, their own supply, the community record and any carer. Everything afterwards depends on that list being real, and reconciling an inaccurate list simply propagates the errors more confidently.",
    choices: [
      { text: "Establish the true current list from more than one source", isCorrect: true },
      { text: "Immediately stop half of them to simplify", isCorrect: false },
      { text: "Copy the electronic record without checking", isCorrect: false },
      { text: "Continue everything unchanged for the admission", isCorrect: false },
    ],
  },
  {
    stem: "Why are drugs with similar-looking or similar-sounding names a recognised safety problem?",
    topic: "Handover, Transitions & Error",
    explanation:
      "Selection errors occur in prescribing, dispensing and administration, and the wrong drug may be entirely inappropriate for that patient. Writing generic names clearly, including the indication, and using electronic systems with alerts all reduce it — and reading back verbal orders catches what remains.",
    choices: [
      { text: "They cause selection errors at prescribing, dispensing and administration", isCorrect: true },
      { text: "They are chemically related and therefore interchangeable", isCorrect: false },
      { text: "The problem is theoretical rather than real", isCorrect: false },
      { text: "Only handwriting causes such errors", isCorrect: false },
    ],
  },
  {
    stem: "What makes a verbal medication order safer?",
    topic: "Handover, Transitions & Error",
    explanation:
      "The recipient reads the whole order back — drug, dose, route, frequency and patient — and it is documented as soon as possible. Verbal orders should be reserved for genuine urgency, because the read-back is the only check that exists.",
    choices: [
      { text: "The recipient reads the full order back and it is documented promptly", isCorrect: true },
      { text: "Speaking loudly and clearly is sufficient", isCorrect: false },
      { text: "Verbal orders are as safe as written ones", isCorrect: false },
      { text: "Documentation can wait until the next shift", isCorrect: false },
    ],
  },
  {
    stem: "You realise you prescribed a drug at ten times the intended dose and it has already been given. What should happen first?",
    topic: "Handover, Transitions & Error",
    explanation:
      "Attend to the patient — assess, monitor, and treat or seek advice on any consequence — then tell them and their team, and report it. The instinct to establish blame or complete paperwork first delays the only action that changes the outcome.",
    choices: [
      { text: "Assess and manage the patient, then be open with them and the team, then report it", isCorrect: true },
      { text: "Complete an incident form before seeing the patient", isCorrect: false },
      { text: "Say nothing unless harm becomes apparent", isCorrect: false },
      { text: "Amend the chart so the error is not visible", isCorrect: false },
    ],
  },
  {
    stem: "You are asked to prescribe overnight for a patient you have not met, and their records are incomplete. What most reduces the risk?",
    topic: "Handover, Transitions & Error",
    explanation:
      "Prescribe only what is needed until the records are available, check allergies and renal function, and document the uncertainty and the plan for review. Deferring a non-urgent decision to daylight and better information is a legitimate clinical choice, not indecision.",
    choices: [
      { text: "Prescribe only what is needed now, check allergies and renal function, and document the uncertainty", isCorrect: true },
      { text: "Reconstruct the full regimen from memory and assumption", isCorrect: false },
      { text: "Prescribe nothing at all until morning regardless of need", isCorrect: false },
      { text: "Copy the last similar patient's chart", isCorrect: false },
    ],
  },

  /* ── Emergency Decisions Under Uncertainty ── */
  {
    stem: "A patient collapses after an injection. Which feature most supports anaphylaxis over a vasovagal episode?",
    topic: "Emergency Decisions Under Uncertainty",
    explanation:
      "Airway or breathing involvement — stridor, wheeze, swelling — or urticaria with hypotension. A vasovagal episode gives pallor, bradycardia and rapid recovery when supine, without respiratory compromise or rash. When genuinely uncertain, adrenaline is the safer error.",
    choices: [
      { text: "Airway or breathing involvement, or urticaria with hypotension", isCorrect: true },
      { text: "Pallor and rapid recovery when lying flat", isCorrect: false },
      { text: "Bradycardia with a normal airway", isCorrect: false },
      { text: "Anxiety reported before the collapse", isCorrect: false },
    ],
  },
  {
    stem: "An unresponsive patient is brought in after an unknown overdose. What is the correct sequence?",
    topic: "Emergency Decisions Under Uncertainty",
    explanation:
      "Airway, breathing and circulation, then glucose, then a rapid look for a toxidrome and an ECG — treating what is found while the history is gathered from other sources. Waiting to identify the substance before beginning is how patients deteriorate in the corridor.",
    choices: [
      { text: "ABC, then glucose, then toxidrome and ECG, treating as you go", isCorrect: true },
      { text: "Identify the substance before any intervention", isCorrect: false },
      { text: "Give activated charcoal immediately regardless of airway", isCorrect: false },
      { text: "Await toxicology results before treating", isCorrect: false },
    ],
  },
  {
    stem: "A patient is seizing and the cause is unknown. Alongside a benzodiazepine, what must be checked immediately?",
    topic: "Emergency Decisions Under Uncertainty",
    explanation:
      "Blood glucose — hypoglycaemia is a common, instantly reversible cause, and thiamine is given first where alcohol dependence or malnutrition is possible. Treating the seizure without checking glucose can leave the cause running while the fit is suppressed.",
    choices: [
      { text: "Blood glucose, with thiamine first if alcohol dependence or malnutrition is possible", isCorrect: true },
      { text: "Serum calcium only", isCorrect: false },
      { text: "Nothing needs checking until the seizure stops", isCorrect: false },
      { text: "A full toxicology screen before any treatment", isCorrect: false },
    ],
  },
  {
    stem: "A patient is profoundly bradycardic and takes a beta blocker, diltiazem and digoxin. What does management require?",
    topic: "Emergency Decisions Under Uncertainty",
    explanation:
      "Treat the bradycardia while recognising that several drugs are contributing and that reversal differs for each — atropine, then consideration of glucagon, calcium and digoxin-specific antibody fragments depending on which agent predominates. Assuming a single culprit leads to the wrong antidote.",
    choices: [
      { text: "Treat the bradycardia while recognising several contributors with different reversal agents", isCorrect: true },
      { text: "Assume digoxin alone and give antibody fragments only", isCorrect: false },
      { text: "Give atropine and take no further action if it fails", isCorrect: false },
      { text: "Withhold treatment until levels return", isCorrect: false },
    ],
  },
  {
    stem: "A patient on a direct oral anticoagulant presents with a suspected major bleed. What must be established quickly?",
    topic: "Emergency Decisions Under Uncertainty",
    explanation:
      "Which agent, when the last dose was taken, and the renal function — since clearance and therefore the remaining effect depend on all three. That information determines whether a specific reversal agent is indicated and how long the effect will persist without one.",
    choices: [
      { text: "Which agent, the timing of the last dose, and renal function", isCorrect: true },
      { text: "The INR, which reliably reflects DOAC effect", isCorrect: false },
      { text: "Nothing — management is identical for all anticoagulants", isCorrect: false },
      { text: "Only the patient's weight", isCorrect: false },
    ],
  },
  {
    stem: "A patient with hypoglycaemia is drowsy and combative, and intravenous access has failed. What is the appropriate alternative?",
    topic: "Emergency Decisions Under Uncertainty",
    explanation:
      "Intramuscular glucagon, which mobilises hepatic glycogen and buys time for access and oral carbohydrate. It works less well in the malnourished, in liver disease and in prolonged fasting, where glycogen stores are depleted — so it is a bridge rather than the definitive treatment.",
    choices: [
      { text: "Intramuscular glucagon, recognising it works poorly if glycogen stores are depleted", isCorrect: true },
      { text: "Wait for successful intravenous access", isCorrect: false },
      { text: "Force oral glucose into a drowsy patient", isCorrect: false },
      { text: "Give intramuscular insulin", isCorrect: false },
    ],
  },
  {
    stem: "In a peri-arrest situation the allergy status is unknown and a needed drug carries a small allergy risk. What is the reasoning?",
    topic: "Emergency Decisions Under Uncertainty",
    explanation:
      "The immediate threat to life outweighs an unquantified allergy risk, so the drug is given with resuscitation facilities immediately available. Withholding necessary treatment because of an unknown is a decision with its own consequences, and in this setting those are larger.",
    choices: [
      { text: "The immediate threat outweighs an unknown risk; give it with resuscitation available", isCorrect: true },
      { text: "Never give any drug when allergy status is unknown", isCorrect: false },
      { text: "Delay until the family can be contacted", isCorrect: false },
      { text: "Give a half dose as a compromise", isCorrect: false },
    ],
  },

  /* ── Stopping, Switching or Continuing ── */
  {
    stem: "A patient reports nausea in the first week of a new antidepressant. What is usually appropriate?",
    topic: "Stopping, Switching or Continuing",
    explanation:
      "Explain that it commonly settles within a week or two, offer practical measures, and arrange review — since stopping now means the patient never reaches the point where the drug could help. A side effect that is transient is managed differently from one that will persist, and knowing which is which is the point.",
    choices: [
      { text: "Explain it usually settles, support the patient through it, and review", isCorrect: true },
      { text: "Stop immediately and switch class", isCorrect: false },
      { text: "Double the dose to overcome it", isCorrect: false },
      { text: "Add an antiemetic indefinitely without review", isCorrect: false },
    ],
  },
  {
    stem: "A drug has failed to control symptoms at an adequate dose and duration. When is switching within the same class reasonable?",
    topic: "Stopping, Switching or Continuing",
    explanation:
      "When failure relates to tolerability or to individual variation rather than to the mechanism — since agents within a class differ in side effects and kinetics. Where the mechanism itself has failed, another drug of the same class is likely to fail in the same way.",
    choices: [
      { text: "When the problem was tolerability or individual variation, not the mechanism", isCorrect: true },
      { text: "Always, since within-class agents are interchangeable", isCorrect: false },
      { text: "Never — always change class after any failure", isCorrect: false },
      { text: "Only if the second drug is more expensive", isCorrect: false },
    ],
  },
  {
    stem: "A patient reports that a newly started antibiotic 'isn't working' after two days. How should this be assessed?",
    topic: "Stopping, Switching or Continuing",
    explanation:
      "Establish whether enough time has passed for a response, and whether the trajectory is improving even if symptoms remain. Many infections take several days to turn around, and switching at 48 hours in a patient who is actually improving abandons an effective agent for no reason.",
    choices: [
      { text: "Judge the trajectory against the expected time to respond before concluding failure", isCorrect: true },
      { text: "Switch antibiotic immediately on the patient's report", isCorrect: false },
      { text: "Add a second antibiotic to the first", isCorrect: false },
      { text: "Stop treatment altogether", isCorrect: false },
    ],
  },
  {
    stem: "A patient is on a long-term drug and neither they nor the record explains why. What is the appropriate response?",
    topic: "Stopping, Switching or Continuing",
    explanation:
      "Investigate the original indication before deciding — old records, the original prescriber, and the clinical context. Stopping blind risks removing something important, while continuing blind perpetuates a prescription nobody can justify; the unsatisfying answer is that it takes a little work.",
    choices: [
      { text: "Find the original indication before deciding either way", isCorrect: true },
      { text: "Stop it immediately since no indication is documented", isCorrect: false },
      { text: "Continue it indefinitely without question", isCorrect: false },
      { text: "Ask the patient to decide alone", isCorrect: false },
    ],
  },
  {
    stem: "After an adverse reaction, when might rechallenge with the same drug be reasonable?",
    topic: "Stopping, Switching or Continuing",
    explanation:
      "When the reaction was mild and predictable, the drug is genuinely important, no good alternative exists, and the patient consents with monitoring in place. Rechallenge is never reasonable after anaphylaxis or a severe cutaneous reaction — those are absolute.",
    choices: [
      { text: "Mild predictable reaction, important drug, no alternative, with consent and monitoring", isCorrect: true },
      { text: "After any reaction, including anaphylaxis", isCorrect: false },
      { text: "Never, under any circumstances", isCorrect: false },
      { text: "Whenever the patient requests it", isCorrect: false },
    ],
  },
  {
    stem: "Which consideration determines whether a drug should be stopped before surgery?",
    topic: "Stopping, Switching or Continuing",
    explanation:
      "The bleeding or physiological risk of continuing weighed against the risk of stopping — which for anticoagulants, antiplatelets after recent stenting, and long-term steroids can be substantial in both directions. It is a planned decision made in advance with the surgical and anaesthetic teams.",
    choices: [
      { text: "The risk of continuing weighed against the risk of stopping, decided in advance with the team", isCorrect: true },
      { text: "All regular medication should be stopped before any surgery", isCorrect: false },
      { text: "Nothing should ever be stopped", isCorrect: false },
      { text: "The decision can be left to the morning of surgery", isCorrect: false },
    ],
  },
  {
    stem: "A patient wants to stop a medicine you believe they need. What is the most constructive approach?",
    topic: "Stopping, Switching or Continuing",
    explanation:
      "Find out why — a side effect, cost, a belief about the drug, or simply the burden of taking it — and address that specifically, offering alternatives. A patient who stops without telling you is worse off than one who negotiates a plan you both understand.",
    choices: [
      { text: "Explore the specific reason and address it, offering alternatives", isCorrect: true },
      { text: "Insist they continue and record refusal", isCorrect: false },
      { text: "Agree immediately without discussion", isCorrect: false },
      { text: "Discharge them from your care", isCorrect: false },
    ],
  },

  /* ── When Guidelines Don't Fit ── */
  {
    stem: "The guideline first-line drug is unavailable in your setting. What is the correct reasoning?",
    topic: "When Guidelines Don't Fit",
    explanation:
      "Identify what the recommended agent achieves — its mechanism, spectrum or target — and choose the closest available alternative on that basis, documenting the reason. A guideline is a route to an objective, and understanding the objective is what lets you reach it by another road.",
    choices: [
      { text: "Work out what the recommended drug achieves and choose the nearest available equivalent, documenting why", isCorrect: true },
      { text: "Abandon treatment since the guideline cannot be followed", isCorrect: false },
      { text: "Substitute any drug from a different class at random", isCorrect: false },
      { text: "Wait indefinitely for the recommended agent", isCorrect: false },
    ],
  },
  {
    stem: "A guideline is updated and now recommends a different first-line agent. What should happen to stable patients on the previous one?",
    topic: "When Guidelines Don't Fit",
    explanation:
      "Usually nothing immediately — a change in first-line recommendation applies to new starts, and a patient doing well on an older agent may be worse off for a switch. The question is whether this individual would benefit, considered at their next review rather than by a blanket sweep.",
    choices: [
      { text: "Usually continue, reviewing individually — new recommendations apply mainly to new starts", isCorrect: true },
      { text: "Switch every patient immediately", isCorrect: false },
      { text: "Ignore the update entirely", isCorrect: false },
      { text: "Stop treatment until the guidance settles", isCorrect: false },
    ],
  },
  {
    stem: "A patient's stated priority conflicts with the guideline's treatment goal. How should this be handled?",
    topic: "When Guidelines Don't Fit",
    explanation:
      "Explain the trade-off clearly, agree a plan that respects what they value, and document the reasoning. Guidelines describe what is best on average for a population; the person in front of you may reasonably weigh the same outcomes differently, and recording that reasoning protects everyone.",
    choices: [
      { text: "Explain the trade-off, agree a plan reflecting their priorities, and document the reasoning", isCorrect: true },
      { text: "Follow the guideline regardless of the patient's view", isCorrect: false },
      { text: "Abandon treatment altogether", isCorrect: false },
      { text: "Record the patient as non-compliant", isCorrect: false },
    ],
  },
  {
    stem: "A guideline is based on trials in a population unlike your patient. What follows?",
    topic: "When Guidelines Don't Fit",
    explanation:
      "It remains the best available evidence but its applicability is uncertain, so it informs the decision without settling it. That uncertainty argues for closer monitoring and a lower threshold for reassessment, rather than for either blind adherence or dismissal.",
    choices: [
      { text: "It still informs the decision but does not settle it, so monitor more closely", isCorrect: true },
      { text: "It should be followed exactly regardless", isCorrect: false },
      { text: "It should be disregarded completely", isCorrect: false },
      { text: "Treatment should be withheld until better evidence exists", isCorrect: false },
    ],
  },
  {
    stem: "No guideline addresses your patient's particular combination of problems. What is the reasonable approach?",
    topic: "When Guidelines Don't Fit",
    explanation:
      "Reason from mechanism and first principles, seek specialist advice where available, agree a plan with the patient, and document the reasoning and the review point. The absence of a guideline is common in multimorbidity and is not a reason to default to doing everything or nothing.",
    choices: [
      { text: "Reason from mechanism, seek advice, agree with the patient, and document the plan and review", isCorrect: true },
      { text: "Apply the nearest guideline unchanged", isCorrect: false },
      { text: "Treat every condition maximally", isCorrect: false },
      { text: "Withhold all treatment", isCorrect: false },
    ],
  },
  {
    stem: "Why does a decision that departs from guideline need documenting particularly clearly?",
    topic: "When Guidelines Don't Fit",
    explanation:
      "So the next clinician understands it was considered rather than overlooked, and does not reverse it without knowing why. Undocumented departures get corrected back by someone acting in good faith — and the record is also what demonstrates the decision was reasoned if it is ever questioned.",
    choices: [
      { text: "So the next clinician knows it was deliberate and does not reverse it unknowingly", isCorrect: true },
      { text: "Purely to protect the clinician legally", isCorrect: false },
      { text: "Departures from guideline are never acceptable", isCorrect: false },
      { text: "Documentation makes no practical difference", isCorrect: false },
    ],
  },
  {
    stem: "The guideline recommends a drug your patient genuinely cannot tolerate. What is the next step?",
    topic: "When Guidelines Don't Fit",
    explanation:
      "Move to the next best option for that indication and monitor, recording why the first-line agent was not used. Repeatedly rechallenging with an agent the patient cannot tolerate, or leaving the condition untreated because the recommended drug is unusable, are both worse than a documented second choice.",
    choices: [
      { text: "Use the next best option and record why the first-line agent was unsuitable", isCorrect: true },
      { text: "Insist on the first-line agent regardless of tolerance", isCorrect: false },
      { text: "Leave the condition untreated", isCorrect: false },
      { text: "Rechallenge repeatedly until it is tolerated", isCorrect: false },
    ],
  },
];

async function main() {
  console.log(`Seeding Pharmacology — Set 6 (Tier 6: Clinical Reasoning)${REPLACE_MODE ? "  [REPLACE MODE]" : ""}…\n`);

  const categoryId = await findCategory("fs-pharmacology");
  if (!categoryId) return;

  await seedSet({
    categoryId,
    slug: "pharmacology-set-6-clinical-reasoning",
    title: "Pharmacology — Set 6: Clinical Reasoning",
    description:
      "Seventy vignette questions where the answer requires combining facts rather than recalling one: attributing a presentation to a drug, the patient who is not improving, adherence versus treatment failure, competing risks, the confused older patient, interpreting a number that does not fit, handover and error, emergency decisions under uncertainty, stopping or continuing, and what to do when the guideline does not fit. Assumes Sets 1–5. Untimed.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Advanced",
    questions: SET6,
  });

  await done();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
