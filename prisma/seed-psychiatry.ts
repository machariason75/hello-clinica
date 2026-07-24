/**
 * CONTENT WAVE 13 — Psychiatry & Mental Health
 *
 * 60 original questions in the corrected structure — TWO practice sets per item,
 * and two exams:
 *
 *   PRACTICE  Set 1 (30) · Set 2 (30)
 *   EXAMS     Exam 1 (30, from Set 1, 40 min) · Exam 2 (60, all, 75 min)
 *
 * Written for clinicians assessing and supporting patients. Risk assessment
 * questions focus on RECOGNITION and appropriate response — identifying who is
 * at risk, how to ask, and what to do — since that is what changes outcomes.
 *
 * ⚠ Mental health legislation, service structures and prescribing guidance vary
 * substantially between countries. These test clinical principles rather than
 * any single jurisdiction's law. Review against local guidance.
 *
 * Run:  npx tsx prisma/seed-psychiatry.ts
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Q = {
  stem: string;
  topic: string;
  explanation: string;
  choices: { text: string; isCorrect: boolean }[];
};

/* ═══════════ SET 1 ═══════════ */

const SET1: Q[] = [
  {
    stem: "Which features are required for a diagnosis of a depressive episode?",
    topic: "Mood Disorders",
    explanation:
      "Persistent low mood, loss of interest or pleasure (anhedonia), and reduced energy for at least two weeks, with associated features such as disturbed sleep and appetite, poor concentration, guilt and hopelessness. Duration and functional impact are what separate a depressive episode from ordinary sadness.",
    choices: [
      { text: "Low mood, anhedonia and reduced energy for at least two weeks with functional impact", isCorrect: true },
      { text: "Any period of sadness lasting more than a day", isCorrect: false },
      { text: "Low mood only, without other features", isCorrect: false },
      { text: "Symptoms lasting less than 48 hours", isCorrect: false },
    ],
  },
  {
    stem: "Which biological (somatic) symptoms suggest a more severe depressive episode?",
    topic: "Mood Disorders",
    explanation:
      "Early morning waking, diurnal mood variation with mood worst in the morning, marked appetite and weight loss, psychomotor retardation and loss of libido. Their presence suggests greater severity and predicts better response to biological treatment.",
    choices: [
      { text: "Early morning waking, diurnal variation, weight loss and psychomotor retardation", isCorrect: true },
      { text: "Difficulty getting to sleep only", isCorrect: false },
      { text: "Increased appetite with weight gain in every case", isCorrect: false },
      { text: "Mood worse in the evening only", isCorrect: false },
    ],
  },
  {
    stem: "What distinguishes bipolar affective disorder from recurrent depressive disorder?",
    topic: "Mood Disorders",
    explanation:
      "At least one episode of mania or hypomania. This matters enormously for treatment: antidepressants given without a mood stabiliser can precipitate a manic switch. Asking specifically about periods of elevated mood, reduced need for sleep and uncharacteristic behaviour is therefore essential before prescribing.",
    choices: [
      { text: "A history of at least one manic or hypomanic episode", isCorrect: true },
      { text: "Greater severity of the depressive episodes", isCorrect: false },
      { text: "Earlier age of onset alone", isCorrect: false },
      { text: "Presence of psychotic features", isCorrect: false },
    ],
  },
  {
    stem: "Which features characterise a manic episode as opposed to hypomania?",
    topic: "Mood Disorders",
    explanation:
      "Mania causes severe functional impairment, often requires admission, lasts at least a week, and may include psychotic features. Hypomania is milder, shorter, and does not cause marked impairment or psychosis. The distinction is one of severity and consequence rather than of symptom type.",
    choices: [
      { text: "Marked impairment, possible psychosis, and duration of at least a week", isCorrect: true },
      { text: "Mania is briefer than hypomania", isCorrect: false },
      { text: "Hypomania always includes delusions", isCorrect: false },
      { text: "There is no meaningful distinction", isCorrect: false },
    ],
  },
  {
    stem: "Which monitoring is required for a patient taking lithium?",
    topic: "Psychopharmacology",
    explanation:
      "Lithium levels regularly, plus renal and thyroid function, because lithium is renally cleared and causes hypothyroidism and nephrogenic diabetes insipidus. Its therapeutic index is narrow — dehydration, NSAIDs, ACE inhibitors and thiazides all raise levels toward toxicity.",
    choices: [
      { text: "Lithium levels with renal and thyroid function", isCorrect: true },
      { text: "Liver function alone", isCorrect: false },
      { text: "Full blood count only", isCorrect: false },
      { text: "No monitoring is required", isCorrect: false },
    ],
  },
  {
    stem: "How does lithium toxicity present?",
    topic: "Psychopharmacology",
    explanation:
      "Coarse tremor (in contrast to the fine tremor of therapeutic use), vomiting and diarrhoea, ataxia, slurred speech, confusion, and in severe cases seizures and renal failure. Dehydration from any cause — including the vomiting itself — worsens it, creating a dangerous cycle.",
    choices: [
      { text: "Coarse tremor, vomiting, ataxia, slurred speech and confusion", isCorrect: true },
      { text: "Fine tremor alone, which is always toxic", isCorrect: false },
      { text: "Isolated weight gain", isCorrect: false },
      { text: "Dry mouth and constipation only", isCorrect: false },
    ],
  },
  {
    stem: "Which class of antidepressant is generally first line, and why?",
    topic: "Psychopharmacology",
    explanation:
      "SSRIs, chiefly because of their safety profile — far less dangerous in overdose than tricyclics, with fewer anticholinergic and cardiac effects. Efficacy across antidepressant classes is broadly comparable, so tolerability and safety drive the choice rather than potency.",
    choices: [
      { text: "SSRIs — comparable efficacy with a much better safety profile", isCorrect: true },
      { text: "Tricyclics — significantly more effective", isCorrect: false },
      { text: "MAOIs — fewest interactions", isCorrect: false },
      { text: "Benzodiazepines", isCorrect: false },
    ],
  },
  {
    stem: "How long should a patient be told an antidepressant takes to work?",
    topic: "Psychopharmacology",
    explanation:
      "Two to four weeks for meaningful benefit, sometimes six. Telling patients this at the outset matters, because most who stop early do so believing the drug has failed. Side effects often appear first, so the early experience can be worse before it is better.",
    choices: [
      { text: "Two to four weeks, with side effects often appearing first", isCorrect: true },
      { text: "Within 24 hours", isCorrect: false },
      { text: "At least six months", isCorrect: false },
      { text: "Immediately, like an analgesic", isCorrect: false },
    ],
  },
  {
    stem: "Why must SSRIs be tapered rather than stopped abruptly?",
    topic: "Psychopharmacology",
    explanation:
      "To avoid discontinuation symptoms — dizziness, electric-shock sensations, flu-like symptoms, irritability and vivid dreams. These are commonest with short half-life agents such as paroxetine and are frequently mistaken for relapse, leading to unnecessary re-prescribing.",
    choices: [
      { text: "To avoid discontinuation symptoms, often mistaken for relapse", isCorrect: true },
      { text: "Because abrupt stopping causes addiction", isCorrect: false },
      { text: "Tapering is unnecessary with any antidepressant", isCorrect: false },
      { text: "To prevent immediate relapse of depression", isCorrect: false },
    ],
  },
  {
    stem: "Which combination risks serotonin syndrome?",
    topic: "Psychopharmacology",
    explanation:
      "An SSRI with another serotonergic agent — an MAOI, tramadol, triptans, linezolid or St John's wort. It presents with the triad of altered mental state, autonomic instability and neuromuscular hyperactivity, classically with clonus and hyperreflexia. It can be life-threatening.",
    choices: [
      { text: "An SSRI combined with another serotonergic drug such as tramadol or an MAOI", isCorrect: true },
      { text: "An SSRI with paracetamol", isCorrect: false },
      { text: "An SSRI with a proton pump inhibitor", isCorrect: false },
      { text: "Serotonin syndrome cannot be caused by drug combinations", isCorrect: false },
    ],
  },
  {
    stem: "Which symptoms constitute the 'positive' symptoms of schizophrenia?",
    topic: "Psychosis",
    explanation:
      "Delusions, hallucinations, thought disorder and passivity phenomena — experiences ADDED to normal function. Negative symptoms are those subtracted: blunted affect, poverty of speech, avolition and social withdrawal. Negative symptoms respond less well to medication and often cause more long-term disability.",
    choices: [
      { text: "Delusions, hallucinations, thought disorder and passivity phenomena", isCorrect: true },
      { text: "Blunted affect and social withdrawal", isCorrect: false },
      { text: "Poverty of speech and avolition", isCorrect: false },
      { text: "Low mood and anhedonia", isCorrect: false },
    ],
  },
  {
    stem: "What is a delusion?",
    topic: "Psychosis",
    explanation:
      "A fixed, false belief held with unshakeable conviction despite contradictory evidence, and out of keeping with the person's cultural and educational background. The cultural caveat is essential — beliefs that are normative within someone's community are not delusions.",
    choices: [
      { text: "A fixed false belief held despite contrary evidence, out of keeping with cultural background", isCorrect: true },
      { text: "Any belief the clinician disagrees with", isCorrect: false },
      { text: "A perception without an external stimulus", isCorrect: false },
      { text: "A brief misinterpretation quickly corrected", isCorrect: false },
    ],
  },
  {
    stem: "How does a hallucination differ from an illusion?",
    topic: "Psychosis",
    explanation:
      "A hallucination is a perception in the absence of any external stimulus; an illusion is a MISinterpretation of a real stimulus. Illusions are common in normal experience, particularly in poor light or when anxious, and are not in themselves a sign of psychosis.",
    choices: [
      { text: "A hallucination has no external stimulus; an illusion misinterprets a real one", isCorrect: true },
      { text: "An illusion has no external stimulus", isCorrect: false },
      { text: "They are interchangeable terms", isCorrect: false },
      { text: "Hallucinations occur only in schizophrenia", isCorrect: false },
    ],
  },
  {
    stem: "Which adverse effect requires urgent attention in a patient taking clozapine?",
    topic: "Psychopharmacology",
    explanation:
      "Agranulocytosis — which is why mandatory regular full blood count monitoring is a condition of prescribing. Any sore throat, fever or infection requires immediate assessment. Clozapine also causes myocarditis, severe constipation that can be fatal, and marked sedation.",
    choices: [
      { text: "Agranulocytosis — hence mandatory blood count monitoring", isCorrect: true },
      { text: "Mild dry mouth", isCorrect: false },
      { text: "Increased appetite alone", isCorrect: false },
      { text: "Transient drowsiness only", isCorrect: false },
    ],
  },
  {
    stem: "When is clozapine indicated?",
    topic: "Psychopharmacology",
    explanation:
      "In treatment-resistant schizophrenia — inadequate response to at least two adequate trials of other antipsychotics. It is the most effective agent available for this group, and its restricted use reflects its adverse effect profile rather than any doubt about efficacy.",
    choices: [
      { text: "Treatment-resistant schizophrenia after two adequate antipsychotic trials", isCorrect: true },
      { text: "As first-line treatment for all psychosis", isCorrect: false },
      { text: "For mild anxiety", isCorrect: false },
      { text: "For depression without psychosis", isCorrect: false },
    ],
  },
  {
    stem: "A patient on antipsychotics develops fever, rigidity, autonomic instability and a very high creatine kinase. What is the diagnosis?",
    topic: "Psychiatric Emergencies",
    explanation:
      "Neuroleptic malignant syndrome. The antipsychotic must be stopped immediately with supportive care, cooling and fluids — rhabdomyolysis threatens the kidneys. It differs from serotonin syndrome, which features clonus and hyperreflexia rather than lead-pipe rigidity, and develops faster.",
    choices: [
      { text: "Neuroleptic malignant syndrome — stop the antipsychotic and support urgently", isCorrect: true },
      { text: "Serotonin syndrome", isCorrect: false },
      { text: "Simple drug-induced parkinsonism", isCorrect: false },
      { text: "Catatonia requiring more antipsychotic", isCorrect: false },
    ],
  },
  {
    stem: "Which movement disorder from long-term antipsychotic use is often irreversible?",
    topic: "Psychopharmacology",
    explanation:
      "Tardive dyskinesia — involuntary repetitive movements, typically orofacial. It emerges after prolonged treatment and may persist after stopping. Acute dystonia, akathisia and parkinsonism appear earlier and are generally reversible, which is why early recognition and review matter.",
    choices: [
      { text: "Tardive dyskinesia", isCorrect: true },
      { text: "Acute dystonia", isCorrect: false },
      { text: "Akathisia", isCorrect: false },
      { text: "Drug-induced parkinsonism", isCorrect: false },
    ],
  },
  {
    stem: "A patient reports intense inner restlessness and inability to sit still after starting an antipsychotic. What is this?",
    topic: "Psychopharmacology",
    explanation:
      "Akathisia. It is genuinely distressing and is associated with increased suicide risk, so it should never be dismissed as agitation or anxiety — treating it by INCREASING the antipsychotic makes it worse. Dose reduction or switching, sometimes with propranolol, is the correct response.",
    choices: [
      { text: "Akathisia — distressing, associated with raised suicide risk, and worsened by increasing the dose", isCorrect: true },
      { text: "Anxiety requiring a higher antipsychotic dose", isCorrect: false },
      { text: "Tardive dyskinesia", isCorrect: false },
      { text: "Normal treatment response", isCorrect: false },
    ],
  },
  {
    stem: "Which metabolic effects require monitoring in patients on antipsychotics?",
    topic: "Psychopharmacology",
    explanation:
      "Weight gain, dyslipidaemia, impaired glucose tolerance and diabetes — particularly with olanzapine and clozapine. People with severe mental illness die substantially younger than the general population, largely from cardiovascular disease, so physical health monitoring is a core part of psychiatric care.",
    choices: [
      { text: "Weight, lipids and glucose — cardiovascular disease drives premature mortality", isCorrect: true },
      { text: "Only liver function", isCorrect: false },
      { text: "No physical monitoring is needed", isCorrect: false },
      { text: "Bone density alone", isCorrect: false },
    ],
  },
  {
    stem: "Which anxiety disorder is characterised by recurrent unexpected episodes of intense fear with prominent physical symptoms?",
    topic: "Anxiety Disorders",
    explanation:
      "Panic disorder. Attacks peak within minutes with palpitations, breathlessness, chest tightness and a fear of dying or losing control. Much of the maintenance comes from catastrophic misinterpretation of normal bodily sensations, which is why cognitive therapy is effective.",
    choices: [
      { text: "Panic disorder", isCorrect: true },
      { text: "Generalised anxiety disorder", isCorrect: false },
      { text: "Social anxiety disorder", isCorrect: false },
      { text: "Specific phobia", isCorrect: false },
    ],
  },
  {
    stem: "What must be excluded before diagnosing a primary anxiety disorder?",
    topic: "Anxiety Disorders",
    explanation:
      "Physical causes producing identical symptoms — hyperthyroidism, arrhythmia, phaeochromocytoma, hypoglycaemia — and substances including caffeine, stimulants, salbutamol and withdrawal states. A first presentation of severe anxiety in later life particularly warrants physical assessment.",
    choices: [
      { text: "Physical causes such as hyperthyroidism and arrhythmia, and substance effects", isCorrect: true },
      { text: "Nothing needs excluding", isCorrect: false },
      { text: "Only a family history of anxiety", isCorrect: false },
      { text: "Personality disorder alone", isCorrect: false },
    ],
  },
  {
    stem: "What defines obsessive-compulsive disorder?",
    topic: "Anxiety Disorders",
    explanation:
      "Obsessions — intrusive, unwanted thoughts recognised as one's own and resisted — with compulsions performed to reduce the resulting anxiety. Insight is usually retained, which distinguishes it from psychosis. The compulsions provide brief relief, which is exactly what maintains the cycle.",
    choices: [
      { text: "Intrusive resisted thoughts with compulsions that briefly relieve anxiety, insight retained", isCorrect: true },
      { text: "Fixed false beliefs held without insight", isCorrect: false },
      { text: "Enjoyable repetitive behaviours", isCorrect: false },
      { text: "Perfectionist personality traits alone", isCorrect: false },
    ],
  },
  {
    stem: "Which treatment has the strongest evidence for OCD?",
    topic: "Treatment Approaches",
    explanation:
      "Cognitive behavioural therapy with exposure and response prevention, alone or combined with an SSRI. Response prevention is essential — the compulsion must not be performed, so the anxiety can extinguish naturally. Higher SSRI doses are often needed than for depression.",
    choices: [
      { text: "CBT with exposure and response prevention, with or without an SSRI", isCorrect: true },
      { text: "Benzodiazepines long term", isCorrect: false },
      { text: "Antipsychotics as monotherapy", isCorrect: false },
      { text: "Reassurance alone", isCorrect: false },
    ],
  },
  {
    stem: "Which features characterise post-traumatic stress disorder?",
    topic: "Trauma-Related Disorders",
    explanation:
      "Re-experiencing through flashbacks and nightmares, avoidance of reminders, hyperarousal with hypervigilance and startle, and negative changes in mood and cognition, persisting beyond a month after a traumatic event. Symptoms within the first month may represent an acute stress reaction.",
    choices: [
      { text: "Re-experiencing, avoidance, hyperarousal and negative mood changes beyond one month", isCorrect: true },
      { text: "Low mood alone following any stressful event", isCorrect: false },
      { text: "Symptoms lasting less than 48 hours", isCorrect: false },
      { text: "Complete amnesia for the event in all cases", isCorrect: false },
    ],
  },
  {
    stem: "Which approach is recommended for established PTSD?",
    topic: "Treatment Approaches",
    explanation:
      "Trauma-focused psychological therapy — trauma-focused CBT or EMDR — as first line, with medication considered where therapy is declined or unavailable. Notably, single-session debriefing immediately after trauma is NOT recommended and may worsen outcomes.",
    choices: [
      { text: "Trauma-focused psychological therapy such as trauma-focused CBT or EMDR", isCorrect: true },
      { text: "Immediate single-session debriefing for everyone exposed", isCorrect: false },
      { text: "Long-term benzodiazepines", isCorrect: false },
      { text: "Avoiding all discussion of the event indefinitely", isCorrect: false },
    ],
  },
  {
    stem: "Which features distinguish delirium from dementia?",
    topic: "Organic Disorders",
    explanation:
      "Delirium has acute onset, fluctuating course, impaired ATTENTION and altered conscious level, often with hallucinations and disturbed sleep-wake cycle. Dementia is gradual and progressive with preserved consciousness until late. Attention is the discriminating feature at the bedside.",
    choices: [
      { text: "Delirium: acute, fluctuating, with impaired attention and altered consciousness", isCorrect: true },
      { text: "Delirium develops gradually over years", isCorrect: false },
      { text: "Dementia always fluctuates hour to hour", isCorrect: false },
      { text: "Consciousness is impaired early in dementia", isCorrect: false },
    ],
  },
  {
    stem: "What is the most important step in managing delirium?",
    topic: "Organic Disorders",
    explanation:
      "Identify and treat the underlying cause — infection, pain, constipation, urinary retention, hypoxia, electrolyte disturbance, or medication including anticholinergics and opioids. Delirium is a SYMPTOM, not a diagnosis. Sedation treats the behaviour while the cause continues unaddressed.",
    choices: [
      { text: "Find and treat the underlying cause — delirium is a symptom, not a diagnosis", isCorrect: true },
      { text: "Sedate the patient as the first priority", isCorrect: false },
      { text: "Physical restraint", isCorrect: false },
      { text: "Start an antidepressant", isCorrect: false },
    ],
  },
  {
    stem: "Which non-pharmacological measures reduce delirium risk in hospital?",
    topic: "Organic Disorders",
    explanation:
      "Reorientation, ensuring glasses and hearing aids are available, promoting normal sleep-wake cycles, early mobilisation, adequate hydration, pain control and avoiding unnecessary catheters and ward moves. These multicomponent interventions have better evidence than any drug.",
    choices: [
      { text: "Reorientation, sensory aids, sleep hygiene, mobilisation and hydration", isCorrect: true },
      { text: "Routine sedation at night", isCorrect: false },
      { text: "Keeping the patient in a dark quiet room permanently", isCorrect: false },
      { text: "Restricting family visits", isCorrect: false },
    ],
  },
  {
    stem: "Which type of dementia is characterised by fluctuating cognition, visual hallucinations and parkinsonism?",
    topic: "Organic Disorders",
    explanation:
      "Dementia with Lewy bodies. Crucially, these patients have marked antipsychotic sensitivity — conventional antipsychotics can cause severe reactions. Recognising it therefore directly changes prescribing, which is why the diagnosis is more than academic.",
    choices: [
      { text: "Dementia with Lewy bodies — marked antipsychotic sensitivity", isCorrect: true },
      { text: "Alzheimer's disease", isCorrect: false },
      { text: "Vascular dementia", isCorrect: false },
      { text: "Frontotemporal dementia", isCorrect: false },
    ],
  },
  {
    stem: "Which reversible causes should be excluded in someone presenting with cognitive decline?",
    topic: "Organic Disorders",
    explanation:
      "Hypothyroidism, B12 and folate deficiency, depression (pseudodementia), normal pressure hydrocephalus, subdural haematoma, medication effects and alcohol. They represent a minority of cases, but missing one means missing a treatable condition — which is why screening bloods and imaging are standard.",
    choices: [
      { text: "Hypothyroidism, B12 deficiency, depression, NPH, subdural haematoma and drug effects", isCorrect: true },
      { text: "Nothing is reversible in cognitive decline", isCorrect: false },
      { text: "Only genetic causes need consideration", isCorrect: false },
      { text: "Age alone explains all cognitive decline", isCorrect: false },
    ],
  },
];

/* ═══════════ SET 2 ═══════════ */

const SET2: Q[] = [
  {
    stem: "Which approach is recommended when asking a patient about thoughts of suicide?",
    topic: "Risk Assessment",
    explanation:
      "Ask directly, calmly and without euphemism. Extensive evidence shows that asking does NOT plant the idea — it more often brings relief that someone is willing to hear it. Avoiding the question is the greater risk, because concerns go undetected and unaddressed.",
    choices: [
      { text: "Ask directly and calmly — asking does not increase risk and often brings relief", isCorrect: true },
      { text: "Avoid the subject in case it plants the idea", isCorrect: false },
      { text: "Ask only if the patient raises it first", isCorrect: false },
      { text: "Ask only close relatives, never the patient", isCorrect: false },
    ],
  },
  {
    stem: "Which factors increase the risk of suicide?",
    topic: "Risk Assessment",
    explanation:
      "Previous attempts (the strongest single predictor), mental illness particularly depression and psychosis, substance misuse, chronic pain or illness, recent loss, social isolation, and expressed hopelessness. Risk is dynamic rather than fixed, so it needs reassessment rather than a one-off score.",
    choices: [
      { text: "Previous attempts, mental illness, substance misuse, isolation and hopelessness", isCorrect: true },
      { text: "Only current expressed intent matters", isCorrect: false },
      { text: "Risk is static and needs assessing only once", isCorrect: false },
      { text: "Age and sex alone determine risk", isCorrect: false },
    ],
  },
  {
    stem: "Why are risk assessment scales alone insufficient for predicting suicide?",
    topic: "Risk Assessment",
    explanation:
      "They perform poorly at the individual level — the great majority of people scored 'high risk' will not go on to act, and many who do were scored low. They are aids to structured clinical judgement, not substitutes for it, and should not be used to decide who receives care.",
    choices: [
      { text: "They predict poorly for individuals and cannot replace clinical judgement", isCorrect: true },
      { text: "They are highly accurate and should determine access to care", isCorrect: false },
      { text: "They are only inaccurate in young people", isCorrect: false },
      { text: "They are legally required to be used alone", isCorrect: false },
    ],
  },
  {
    stem: "What is the most useful immediate response when a patient discloses suicidal thoughts?",
    topic: "Risk Assessment",
    explanation:
      "Listen without alarm or judgement, explore the thoughts and what is driving them, ensure immediate safety, and arrange appropriate assessment and support. Conveying that the disclosure is taken seriously but calmly is itself therapeutic — panic or immediate rejection closes the conversation down.",
    choices: [
      { text: "Listen calmly, explore what is driving it, ensure safety and arrange proper assessment", isCorrect: true },
      { text: "End the consultation and refer without discussion", isCorrect: false },
      { text: "Reassure them the feelings will pass and move on", isCorrect: false },
      { text: "Tell them they have a great deal to be grateful for", isCorrect: false },
    ],
  },
  {
    stem: "Why does the period immediately after psychiatric discharge carry elevated risk?",
    topic: "Risk Assessment",
    explanation:
      "Support is abruptly reduced while the person remains vulnerable, and the stressors that led to admission often persist. Risk is highest in the first days to weeks after discharge, which is why prompt follow-up contact — within days rather than weeks — is a recognised safety measure.",
    choices: [
      { text: "Support falls away abruptly while vulnerability persists — early follow-up matters", isCorrect: true },
      { text: "Discharge means the person is fully recovered", isCorrect: false },
      { text: "Risk is lowest at this time", isCorrect: false },
      { text: "Follow-up timing makes no difference", isCorrect: false },
    ],
  },
  {
    stem: "Which principle underlies assessing a patient's capacity to make a decision?",
    topic: "Capacity & Ethics",
    explanation:
      "Capacity is decision-specific and time-specific — a person may have capacity for one decision and not another, and it can fluctuate. It is presumed present unless demonstrated otherwise, and an unwise decision is not in itself evidence of incapacity.",
    choices: [
      { text: "It is decision- and time-specific, presumed present, and an unwise choice is not incapacity", isCorrect: true },
      { text: "It is a global, permanent characteristic of the person", isCorrect: false },
      { text: "Any unwise decision demonstrates lack of capacity", isCorrect: false },
      { text: "A psychiatric diagnosis automatically removes capacity", isCorrect: false },
    ],
  },
  {
    stem: "Which four abilities are generally required to demonstrate capacity for a decision?",
    topic: "Capacity & Ethics",
    explanation:
      "Understanding the information, retaining it long enough to decide, weighing it in the balance, and communicating the decision. Failure of any one means capacity is lacking for that decision — and 'weighing' is where impairment most often lies in severe mental illness.",
    choices: [
      { text: "Understand, retain, weigh, and communicate the decision", isCorrect: true },
      { text: "Agree with the clinician's recommendation", isCorrect: false },
      { text: "Have no psychiatric diagnosis", isCorrect: false },
      { text: "Be over a particular age", isCorrect: false },
    ],
  },
  {
    stem: "What distinguishes alcohol dependence from harmful use?",
    topic: "Substance Misuse",
    explanation:
      "Dependence adds tolerance, withdrawal symptoms, compulsion, loss of control over use, prioritising drinking over other activities, and persistence despite clear harm. Harmful use causes damage without those features. The distinction matters because dependence requires managed withdrawal, not simple advice to stop.",
    choices: [
      { text: "Tolerance, withdrawal, compulsion and loss of control despite harm", isCorrect: true },
      { text: "Simply drinking more than recommended limits", isCorrect: false },
      { text: "Any drinking at all", isCorrect: false },
      { text: "Drinking only in social settings", isCorrect: false },
    ],
  },
  {
    stem: "Why is abrupt alcohol withdrawal potentially dangerous in a dependent patient?",
    topic: "Substance Misuse",
    explanation:
      "It can cause seizures and delirium tremens, which carries appreciable mortality. Chronic alcohol enhances GABA and suppresses glutamate; withdrawal leaves unopposed excitation. Benzodiazepines substitute at the GABA receptor, allowing a controlled taper — this is one withdrawal that can kill.",
    choices: [
      { text: "Unopposed CNS excitation can cause seizures and delirium tremens", isCorrect: true },
      { text: "It causes only mild discomfort", isCorrect: false },
      { text: "The risk is purely psychological", isCorrect: false },
      { text: "Abrupt cessation is always the safest approach", isCorrect: false },
    ],
  },
  {
    stem: "Why is thiamine given before glucose in a patient with suspected alcohol dependence?",
    topic: "Substance Misuse",
    explanation:
      "Glucose administration consumes remaining thiamine as a cofactor, and can precipitate Wernicke's encephalopathy in someone already deplete. Thiamine first prevents this. Wernicke's — confusion, ataxia and ophthalmoplegia — is reversible; untreated it progresses to irreversible Korsakoff syndrome.",
    choices: [
      { text: "Glucose consumes remaining thiamine and can precipitate Wernicke's encephalopathy", isCorrect: true },
      { text: "Thiamine works only on an empty stomach", isCorrect: false },
      { text: "Glucose blocks thiamine absorption permanently", isCorrect: false },
      { text: "The order makes no difference", isCorrect: false },
    ],
  },
  {
    stem: "Which triad characterises Wernicke's encephalopathy?",
    topic: "Substance Misuse",
    explanation:
      "Confusion, ataxia and ophthalmoplegia — though all three are present in a minority, so treatment should not wait for the full picture. It is a medical emergency requiring immediate parenteral thiamine, since the alternative is permanent Korsakoff amnesia.",
    choices: [
      { text: "Confusion, ataxia and ophthalmoplegia — treat without waiting for all three", isCorrect: true },
      { text: "Tremor, sweating and tachycardia", isCorrect: false },
      { text: "Jaundice, ascites and encephalopathy", isCorrect: false },
      { text: "Seizures, fever and rigidity", isCorrect: false },
    ],
  },
  {
    stem: "Which approach to substance misuse has the best evidence for engagement?",
    topic: "Substance Misuse",
    explanation:
      "Motivational interviewing — a collaborative, non-confrontational approach that explores ambivalence and strengthens the person's own reasons for change. Confrontation reliably increases resistance. Harm reduction can be a legitimate goal where abstinence is not currently achievable.",
    choices: [
      { text: "Motivational interviewing, exploring ambivalence rather than confronting", isCorrect: true },
      { text: "Confrontation about the consequences of use", isCorrect: false },
      { text: "Insisting on immediate total abstinence in all cases", isCorrect: false },
      { text: "Withholding care until the person stops using", isCorrect: false },
    ],
  },
  {
    stem: "Which features suggest anorexia nervosa rather than another cause of weight loss?",
    topic: "Eating Disorders",
    explanation:
      "Deliberate restriction driven by an intense fear of weight gain, with a distorted perception of body shape and self-worth judged largely by weight. Physical causes of weight loss must still be excluded — the psychological features are what make the diagnosis, not the weight itself.",
    choices: [
      { text: "Deliberate restriction with fear of weight gain and disturbed body image", isCorrect: true },
      { text: "Weight loss of any cause", isCorrect: false },
      { text: "Reduced appetite due to nausea", isCorrect: false },
      { text: "Weight loss with normal eating patterns", isCorrect: false },
    ],
  },
  {
    stem: "Why does refeeding require careful monitoring in severe malnutrition?",
    topic: "Eating Disorders",
    explanation:
      "Refeeding syndrome — reintroduced carbohydrate triggers insulin release, driving phosphate, potassium and magnesium into cells. The resulting hypophosphataemia can cause cardiac failure, arrhythmia and death. Refeeding therefore starts cautiously with electrolyte monitoring and thiamine.",
    choices: [
      { text: "Refeeding syndrome — insulin drives phosphate intracellularly, risking cardiac collapse", isCorrect: true },
      { text: "Rapid refeeding is always safe", isCorrect: false },
      { text: "The risk is purely psychological distress", isCorrect: false },
      { text: "Only calorie count matters, not electrolytes", isCorrect: false },
    ],
  },
  {
    stem: "Which approach is most helpful when a person with an eating disorder is ambivalent about treatment?",
    topic: "Eating Disorders",
    explanation:
      "A collaborative approach focused on building trust, addressing what the disorder is doing FOR them as well as to them, and involving specialist services early. Focusing solely on weight or issuing ultimatums tends to increase resistance and damage the therapeutic relationship.",
    choices: [
      { text: "Collaborative engagement addressing the function of the disorder, with specialist involvement", isCorrect: true },
      { text: "Focusing exclusively on weight targets", isCorrect: false },
      { text: "Issuing an ultimatum about treatment", isCorrect: false },
      { text: "Waiting until they request help unprompted", isCorrect: false },
    ],
  },
  {
    stem: "What characterises a personality disorder as opposed to a mental illness episode?",
    topic: "Personality Disorders",
    explanation:
      "Enduring, pervasive patterns of inner experience and behaviour beginning by adolescence or early adulthood, deviating markedly from cultural expectation and causing distress or impairment. Episodic illness represents a CHANGE from the person's usual state; personality patterns are the usual state.",
    choices: [
      { text: "Enduring pervasive patterns from early adulthood, rather than a change from baseline", isCorrect: true },
      { text: "A brief episode lasting weeks", isCorrect: false },
      { text: "Any difficult interpersonal behaviour", isCorrect: false },
      { text: "A condition beginning only in later life", isCorrect: false },
    ],
  },
  {
    stem: "Which approach is most appropriate toward someone with emotionally unstable personality disorder in crisis?",
    topic: "Personality Disorders",
    explanation:
      "A calm, consistent, validating approach with clear boundaries, taking distress seriously while avoiding unplanned escalation of care. Repeated crisis admissions can reinforce difficulties, but dismissiveness is both harmful and unjustified — this group has genuinely elevated mortality.",
    choices: [
      { text: "Calm, consistent validation with clear boundaries, taking distress seriously", isCorrect: true },
      { text: "Dismissing presentations as attention-seeking", isCorrect: false },
      { text: "Prolonged admission for every crisis", isCorrect: false },
      { text: "Avoiding any discussion of distress", isCorrect: false },
    ],
  },
  {
    stem: "What is the first-line treatment approach for mild to moderate depression?",
    topic: "Treatment Approaches",
    explanation:
      "Psychological therapy such as CBT, with guided self-help and structured exercise also having evidence. Antidepressants show clearest benefit in moderate to severe depression, so starting with therapy in milder presentations reflects the evidence rather than resource limitation.",
    choices: [
      { text: "Psychological therapy, guided self-help or structured exercise", isCorrect: true },
      { text: "Antidepressants for everyone regardless of severity", isCorrect: false },
      { text: "Benzodiazepines", isCorrect: false },
      { text: "Antipsychotics as first line", isCorrect: false },
    ],
  },
  {
    stem: "Which principle underlies cognitive behavioural therapy?",
    topic: "Treatment Approaches",
    explanation:
      "That thoughts, feelings and behaviours interact, so changing unhelpful thinking patterns and behaviours changes emotional state. It is structured, time-limited and collaborative, with between-session tasks. Its focus is the here and now rather than early experience.",
    choices: [
      { text: "Thoughts, feelings and behaviours interact — changing one changes the others", isCorrect: true },
      { text: "Unconscious childhood conflict must be resolved first", isCorrect: false },
      { text: "Insight alone produces change", isCorrect: false },
      { text: "Medication is required alongside in all cases", isCorrect: false },
    ],
  },
  {
    stem: "When is electroconvulsive therapy considered?",
    topic: "Treatment Approaches",
    explanation:
      "In severe treatment-resistant depression, particularly with life-threatening features such as refusal of food and fluids, severe psychotic depression, or catatonia — where speed of response matters. It is highly effective; the main adverse effect is transient memory disturbance.",
    choices: [
      { text: "Severe or treatment-resistant depression, catatonia, or where rapid response is needed", isCorrect: true },
      { text: "As first-line treatment for mild depression", isCorrect: false },
      { text: "For anxiety disorders", isCorrect: false },
      { text: "It has no place in modern practice", isCorrect: false },
    ],
  },
  {
    stem: "What is catatonia, and why does it matter medically?",
    topic: "Psychiatric Emergencies",
    explanation:
      "A syndrome of psychomotor disturbance — immobility, mutism, posturing, negativism or excitement. It matters because it carries physical risk from dehydration, thromboembolism and pressure damage, and can progress to malignant catatonia with autonomic instability. Benzodiazepines and ECT are effective.",
    choices: [
      { text: "A psychomotor syndrome carrying real physical risk, treatable with benzodiazepines or ECT", isCorrect: true },
      { text: "Deliberate refusal to cooperate", isCorrect: false },
      { text: "A benign condition needing no intervention", isCorrect: false },
      { text: "A form of malingering", isCorrect: false },
    ],
  },
  {
    stem: "Which physical investigations are appropriate at a first presentation of psychosis?",
    topic: "Assessment",
    explanation:
      "Full blood count, biochemistry including calcium, thyroid function, glucose, inflammatory markers, drug screen, and imaging where there are atypical features — late onset, focal neurology or rapid cognitive change. Organic causes are uncommon but must not be missed at first presentation.",
    choices: [
      { text: "Bloods including calcium and thyroid, drug screen, and imaging if atypical features", isCorrect: true },
      { text: "No physical investigation is needed", isCorrect: false },
      { text: "Only a psychiatric interview is required", isCorrect: false },
      { text: "Genetic testing as first line", isCorrect: false },
    ],
  },
  {
    stem: "What is the purpose of a mental state examination?",
    topic: "Assessment",
    explanation:
      "To describe the patient's mental state at the time of assessment — appearance and behaviour, speech, mood, thought content and form, perception, cognition and insight. It is observational and descriptive, analogous to a physical examination, and provides the baseline against which change is measured.",
    choices: [
      { text: "To describe mental state at that moment across defined domains, as a baseline", isCorrect: true },
      { text: "To establish a definitive diagnosis in one interview", isCorrect: false },
      { text: "To assess physical health only", isCorrect: false },
      { text: "To determine legal responsibility", isCorrect: false },
    ],
  },
  {
    stem: "Why is collateral history particularly important in psychiatric assessment?",
    topic: "Assessment",
    explanation:
      "Insight may be impaired, memory affected, or the person may minimise or be unable to describe changes others have noticed. Family or carers often report the earliest changes in behaviour and function. Consent should be sought where possible, but safety concerns may justify contact regardless.",
    choices: [
      { text: "Insight may be impaired and others often notice changes the patient cannot report", isCorrect: true },
      { text: "Patients routinely lie about symptoms", isCorrect: false },
      { text: "It is a legal formality only", isCorrect: false },
      { text: "It replaces the need to speak with the patient", isCorrect: false },
    ],
  },
  {
    stem: "Which factor most improves outcomes in first-episode psychosis?",
    topic: "Service Delivery",
    explanation:
      "Reducing the duration of untreated psychosis. Longer untreated illness predicts poorer symptomatic and functional recovery, which is the rationale for early intervention services offering rapid access, assertive engagement and combined medical, psychological and social support.",
    choices: [
      { text: "Shortening the duration of untreated psychosis through early intervention", isCorrect: true },
      { text: "Higher antipsychotic doses from the outset", isCorrect: false },
      { text: "Prolonged inpatient admission for everyone", isCorrect: false },
      { text: "Delaying treatment to confirm the diagnosis", isCorrect: false },
    ],
  },
  {
    stem: "Why do people with severe mental illness have substantially reduced life expectancy?",
    topic: "Physical Health",
    explanation:
      "Largely from physical illness — cardiovascular disease, respiratory disease, diabetes and cancer — driven by smoking, sedentary lifestyle, medication effects, and diagnostic overshadowing where physical symptoms are attributed to mental illness and not investigated.",
    choices: [
      { text: "Physical illness, worsened by lifestyle, medication effects and diagnostic overshadowing", isCorrect: true },
      { text: "Suicide accounts for nearly all the difference", isCorrect: false },
      { text: "The mental illness itself is directly fatal", isCorrect: false },
      { text: "There is no difference in life expectancy", isCorrect: false },
    ],
  },
  {
    stem: "What is diagnostic overshadowing?",
    topic: "Physical Health",
    explanation:
      "Attributing physical symptoms to a person's known mental illness or learning disability rather than investigating them. It leads to missed and delayed physical diagnoses and contributes materially to premature mortality — and recognising the bias is the first step to avoiding it.",
    choices: [
      { text: "Attributing physical symptoms to known mental illness rather than investigating them", isCorrect: true },
      { text: "Making two diagnoses simultaneously", isCorrect: false },
      { text: "Overlooking a psychiatric diagnosis in a physically ill patient", isCorrect: false },
      { text: "Using too many diagnostic labels", isCorrect: false },
    ],
  },
  {
    stem: "Which factor most reduces stigma-related barriers to seeking mental health care?",
    topic: "Service Delivery",
    explanation:
      "Normalising conversations about mental health within routine clinical contact, and clinicians asking about it as they would any other symptom. Being asked matter-of-factly by a trusted professional makes disclosure far more likely than awareness campaigns alone.",
    choices: [
      { text: "Clinicians asking about mental health routinely and matter-of-factly", isCorrect: true },
      { text: "Waiting for patients to raise it themselves", isCorrect: false },
      { text: "Restricting discussion to specialist settings", isCorrect: false },
      { text: "Avoiding the topic to prevent embarrassment", isCorrect: false },
    ],
  },
  {
    stem: "Which perinatal psychiatric condition is a medical emergency?",
    topic: "Perinatal Psychiatry",
    explanation:
      "Puerperal psychosis — rapid onset within days to weeks of delivery with delusions, hallucinations or severe mood disturbance. It carries real risk to mother and infant and requires urgent specialist assessment, usually admission, ideally to a mother and baby unit.",
    choices: [
      { text: "Puerperal psychosis — urgent specialist assessment required", isCorrect: true },
      { text: "Baby blues in the first week", isCorrect: false },
      { text: "Mild anxiety about parenting", isCorrect: false },
      { text: "Tiredness in the postnatal period", isCorrect: false },
    ],
  },
  {
    stem: "What should guide prescribing decisions for mental illness in pregnancy?",
    topic: "Perinatal Psychiatry",
    explanation:
      "Balancing the risks of medication against the risks of UNTREATED illness — which include self-neglect, poor engagement with antenatal care, and relapse risk that is often greater than the medication risk. Stopping treatment abruptly on discovering pregnancy is a common and potentially harmful reaction.",
    choices: [
      { text: "Weighing medication risk against the substantial risk of untreated illness", isCorrect: true },
      { text: "Stopping all psychiatric medication immediately", isCorrect: false },
      { text: "Continuing all medication without review", isCorrect: false },
      { text: "Medication is always contraindicated in pregnancy", isCorrect: false },
    ],
  },
];

/* ═══════════ SEED ═══════════ */

/** Retries a write when the connection drops. Genuine errors re-throw at once. */
async function withRetry<T>(fn: () => Promise<T>, label: string): Promise<T> {
  const attempts = 3;
  for (let i = 1; i <= attempts; i++) {
    try {
      return await fn();
    } catch (e) {
      const transient =
        e instanceof Error &&
        (e.message.includes("P1001") ||
          e.message.includes("Can't reach database") ||
          e.message.includes("Connection") ||
          e.message.includes("ECONNRESET"));
      if (!transient || i === attempts) throw e;
      const wait = i * 2000;
      console.log(`    … connection hiccup on ${label}, retrying in ${wait / 1000}s`);
      await new Promise((r) => setTimeout(r, wait));
    }
  }
  throw new Error("unreachable");
}

async function seedSet(o: {
  categorySlug: string; slug: string; title: string; description: string;
  kind: string; timeLimitSeconds: number | null; difficulty: string; questions: Q[];
}) {
  const category = await withRetry(
    () => prisma.quizCategory.findUnique({ where: { slug: o.categorySlug } }),
    "find category"
  );
  if (!category) {
    console.log(`  ✗ Category "${o.categorySlug}" not found — run seed-medical-taxonomy.ts first.`);
    return;
  }
  const quiz = await withRetry(
    () =>
      prisma.quiz.upsert({
        where: { slug: o.slug },
        create: {
          slug: o.slug, title: o.title, description: o.description, categoryId: category.id,
          kind: o.kind, timeLimitSeconds: o.timeLimitSeconds, passThreshold: 70,
          difficulty: o.difficulty, published: true,
        },
        update: {
          title: o.title, description: o.description, categoryId: category.id,
          kind: o.kind, timeLimitSeconds: o.timeLimitSeconds,
        },
      }),
    `quiz ${o.slug}`
  );
  await withRetry(() => prisma.question.deleteMany({ where: { quizId: quiz.id } }), "clear questions");

  let order = 0;
  for (const q of o.questions) {
    const n = order++;
    await withRetry(
      () =>
        prisma.question.create({
          data: {
            quizId: quiz.id, type: "SINGLE", stem: q.stem, topic: q.topic,
            explanation: q.explanation, points: 1, order: n,
            choices: { create: q.choices.map((c, i) => ({ text: c.text, isCorrect: c.isCorrect, order: i })) },
          },
        }),
      `question ${n + 1} of ${o.title}`
    );
  }
  console.log(`  ✓ ${o.title} — ${o.questions.length} questions`);
}

async function main() {
  console.log("Seeding Psychiatry & Mental Health…\n");
  const CAT = "cs-psychiatry";

  await seedSet({
    categorySlug: CAT, slug: "psychiatry-practice-set-1",
    title: "Psychiatry — Practice Set 1",
    description: "Thirty questions on mood disorders, psychosis, anxiety and OCD, PTSD, organic disorders including delirium and dementia, and the psychopharmacology that underpins them. Untimed.",
    kind: "PRACTICE", timeLimitSeconds: null, difficulty: "Intermediate", questions: SET1,
  });

  await seedSet({
    categorySlug: CAT, slug: "psychiatry-practice-set-2",
    title: "Psychiatry — Practice Set 2",
    description: "Thirty fresh questions on risk assessment, capacity and ethics, substance misuse, eating disorders, personality disorders, treatment approaches, assessment skills, physical health and perinatal psychiatry. Untimed.",
    kind: "PRACTICE", timeLimitSeconds: null, difficulty: "Intermediate", questions: SET2,
  });

  await seedSet({
    categorySlug: CAT, slug: "psychiatry-exam-1",
    title: "Psychiatry — Timed Exam 1",
    description: "Thirty questions in 40 minutes covering diagnosis, psychopharmacology and organic disorders. Feedback withheld until you submit.",
    kind: "EXAM", timeLimitSeconds: 40 * 60, difficulty: "Intermediate", questions: SET1,
  });

  await seedSet({
    categorySlug: CAT, slug: "psychiatry-exam-2",
    title: "Psychiatry — Timed Exam 2 (Comprehensive)",
    description: "All sixty questions in 75 minutes, covering the whole subject. Sit this once both practice sets feel comfortable.",
    kind: "EXAM", timeLimitSeconds: 75 * 60, difficulty: "Advanced", questions: [...SET1, ...SET2],
  });

  console.log("\nDone. Editable in Admin → Question Bank.");
}

main().catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
