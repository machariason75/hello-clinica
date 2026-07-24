/**
 * CONTENT WAVE 15 — Neurology
 *
 * 60 original questions:
 *   PRACTICE  Set 1 (30) · Set 2 (30)
 *   EXAMS     Exam 1 (30, 40 min) · Exam 2 (60, 75 min)
 *
 * Answer shuffling is built into the seed.
 *
 * Neurology rewards a single habit: localise the lesion first, then ask what
 * process could produce it there. Nearly every question here is built around
 * that sequence rather than around pattern-matching a diagnosis.
 *
 * Run:  npx tsx prisma/seed-neurology.ts
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Q = {
  stem: string;
  topic: string;
  explanation: string;
  choices: { text: string; isCorrect: boolean }[];
};

/* ═══════════ SET 1 — Stroke, Headache, Seizures, Localisation ═══════════ */

const SET1: Q[] = [
  {
    stem: "What is the single most important investigation immediately after a suspected stroke, and why?",
    topic: "Stroke",
    explanation:
      "Urgent non-contrast CT of the head — to distinguish ischaemic from haemorrhagic stroke. The distinction is everything: thrombolysis saves lives in one and kills in the other. No treatment decision can be made before that scan.",
    choices: [
      { text: "Non-contrast CT head, to separate ischaemic from haemorrhagic stroke", isCorrect: true },
      { text: "Carotid Doppler ultrasound", isCorrect: false },
      { text: "Echocardiogram", isCorrect: false },
      { text: "Lumbar puncture", isCorrect: false },
    ],
  },
  {
    stem: "A patient has right-sided face and arm weakness with expressive dysphasia. Which vessel is involved?",
    topic: "Stroke",
    explanation:
      "The left middle cerebral artery. It supplies the lateral cortex where face and arm are represented, plus the language areas in the dominant hemisphere. Leg-predominant weakness would instead suggest anterior cerebral territory, since the leg lies medially on the homunculus.",
    choices: [
      { text: "Left middle cerebral artery", isCorrect: true },
      { text: "Right middle cerebral artery", isCorrect: false },
      { text: "Left anterior cerebral artery", isCorrect: false },
      { text: "Left posterior cerebral artery", isCorrect: false },
    ],
  },
  {
    stem: "Why does a lacunar stroke produce pure motor or pure sensory deficit without cortical signs?",
    topic: "Stroke",
    explanation:
      "It affects small perforating arteries supplying deep structures — internal capsule, basal ganglia, pons — where motor and sensory fibres are tightly packed but cortical functions are not represented. So there is no dysphasia, neglect or visual field loss, which is exactly what defines the syndrome.",
    choices: [
      { text: "Small deep perforator occlusion spares cortex, where language and neglect are represented", isCorrect: true },
      { text: "It affects the cortex diffusely but mildly", isCorrect: false },
      { text: "It involves only the cerebellum", isCorrect: false },
      { text: "Lacunar strokes always produce cortical signs", isCorrect: false },
    ],
  },
  {
    stem: "What is a transient ischaemic attack, and why is it urgent?",
    topic: "Stroke",
    explanation:
      "Transient neurological dysfunction from focal ischaemia without infarction. It is urgent because stroke risk is highest in the FIRST FEW DAYS afterwards — it is a warning shot, and rapid assessment with antiplatelet treatment and vascular imaging substantially reduces that risk.",
    choices: [
      { text: "Transient focal ischaemia without infarction — stroke risk is highest in the first days", isCorrect: true },
      { text: "A minor stroke needing routine outpatient review", isCorrect: false },
      { text: "A migraine variant", isCorrect: false },
      { text: "A condition carrying no future stroke risk", isCorrect: false },
    ],
  },
  {
    stem: "Which finding would make thrombolysis inappropriate in acute ischaemic stroke?",
    topic: "Stroke",
    explanation:
      "Intracranial haemorrhage on imaging is absolute. Other contraindications include recent surgery or major trauma, active bleeding, uncontrolled severe hypertension, and presentation beyond the treatment window. Time from onset is critical — 'last seen well', not when symptoms were noticed.",
    choices: [
      { text: "Intracranial haemorrhage on the CT scan", isCorrect: true },
      { text: "Age over 70", isCorrect: false },
      { text: "Presentation within one hour", isCorrect: false },
      { text: "Atrial fibrillation", isCorrect: false },
    ],
  },
  {
    stem: "Why is anticoagulation rather than antiplatelet therapy used for stroke prevention in atrial fibrillation?",
    topic: "Stroke",
    explanation:
      "The mechanism is cardioembolic — stasis in the fibrillating atrium forms fibrin-rich thrombus, which anticoagulants prevent. Antiplatelets act on platelet-rich arterial thrombus and are markedly less effective here. Matching the drug to the clot composition is the principle.",
    choices: [
      { text: "AF causes fibrin-rich cardioembolic thrombus, which anticoagulants prevent", isCorrect: true },
      { text: "Antiplatelets are equally effective but more expensive", isCorrect: false },
      { text: "Anticoagulants dissolve existing clot in the brain", isCorrect: false },
      { text: "There is no evidence favouring either", isCorrect: false },
    ],
  },
  {
    stem: "A patient describes the worst headache of their life, sudden onset, with neck stiffness. What is the diagnostic sequence?",
    topic: "Headache",
    explanation:
      "Urgent non-contrast CT first, which is highly sensitive in the first hours. If negative but suspicion persists, lumbar puncture after 12 hours looks for xanthochromia — which takes that long to develop, so an earlier tap can be falsely reassuring.",
    choices: [
      { text: "CT first; if negative, lumbar puncture after 12 hours for xanthochromia", isCorrect: true },
      { text: "Lumbar puncture immediately, before imaging", isCorrect: false },
      { text: "MRI as the first investigation", isCorrect: false },
      { text: "Discharge with analgesia if the CT is normal", isCorrect: false },
    ],
  },
  {
    stem: "Which headache features are red flags requiring urgent investigation?",
    topic: "Headache",
    explanation:
      "Thunderclap onset, headache worse lying down or on waking, associated fever or neck stiffness, focal neurology, papilloedema, new headache over 50, and headache in the immunosuppressed or those with cancer. Most headaches are benign — red flags identify the minority that are not.",
    choices: [
      { text: "Thunderclap onset, worse on lying flat, fever, focal signs or new onset over 50", isCorrect: true },
      { text: "Bilateral pressing pain relieved by simple analgesia", isCorrect: false },
      { text: "Headache occurring only with menstruation", isCorrect: false },
      { text: "Headache after a late night", isCorrect: false },
    ],
  },
  {
    stem: "An elderly patient has a new temporal headache with jaw claudication and scalp tenderness. What must be done urgently?",
    topic: "Headache",
    explanation:
      "Start high-dose corticosteroid IMMEDIATELY for suspected giant cell arteritis — before biopsy — because untreated it causes irreversible blindness within days. ESR is usually raised, and temporal artery biopsy confirms it but must not delay treatment.",
    choices: [
      { text: "Start high-dose steroids at once, before biopsy — to prevent blindness", isCorrect: true },
      { text: "Arrange biopsy first and treat only if positive", isCorrect: false },
      { text: "Await the ESR result before any treatment", isCorrect: false },
      { text: "Treat as tension headache", isCorrect: false },
    ],
  },
  {
    stem: "Which features characterise migraine with aura?",
    topic: "Headache",
    explanation:
      "Reversible visual, sensory or speech symptoms developing gradually over minutes and lasting under an hour, followed by unilateral throbbing headache with nausea and photophobia. The GRADUAL spread distinguishes aura from the abrupt onset of a TIA — a useful discriminator.",
    choices: [
      { text: "Gradual-onset reversible visual or sensory symptoms, then unilateral throbbing headache", isCorrect: true },
      { text: "Abrupt maximal neurological deficit lasting seconds", isCorrect: false },
      { text: "Constant daily headache with no other features", isCorrect: false },
      { text: "Headache exclusively on waking with vomiting", isCorrect: false },
    ],
  },
  {
    stem: "Which contraceptive advice applies to a woman with migraine WITH aura?",
    topic: "Headache",
    explanation:
      "Combined hormonal contraception should be avoided, because the oestrogen component adds to an already raised ischaemic stroke risk. Progestogen-only methods are acceptable. Asking specifically about aura rather than just 'headaches' is what makes this consultation safe.",
    choices: [
      { text: "Avoid combined hormonal contraception; progestogen-only methods are acceptable", isCorrect: true },
      { text: "Combined contraception is preferred for migraine control", isCorrect: false },
      { text: "All contraception is contraindicated", isCorrect: false },
      { text: "Aura makes no difference to the advice", isCorrect: false },
    ],
  },
  {
    stem: "A patient has severe unilateral orbital pain with lacrimation and nasal congestion, occurring in nightly bouts. What is the diagnosis?",
    topic: "Headache",
    explanation:
      "Cluster headache — strictly unilateral with prominent autonomic features and a striking circadian pattern. Patients are typically restless and pacing, unlike migraine where they seek stillness and darkness. High-flow oxygen and subcutaneous sumatriptan are effective acutely.",
    choices: [
      { text: "Cluster headache", isCorrect: true },
      { text: "Migraine without aura", isCorrect: false },
      { text: "Tension-type headache", isCorrect: false },
      { text: "Trigeminal neuralgia", isCorrect: false },
    ],
  },
  {
    stem: "A patient has brief electric-shock facial pain triggered by touch, chewing or cold air. What is the diagnosis and first-line treatment?",
    topic: "Headache",
    explanation:
      "Trigeminal neuralgia, treated first line with carbamazepine. Attacks are seconds long and stereotyped. Onset in a young person, or bilateral symptoms, should prompt imaging to exclude multiple sclerosis or a structural cause.",
    choices: [
      { text: "Trigeminal neuralgia — carbamazepine first line", isCorrect: true },
      { text: "Cluster headache — verapamil", isCorrect: false },
      { text: "Migraine — triptan", isCorrect: false },
      { text: "Temporomandibular dysfunction — analgesia", isCorrect: false },
    ],
  },
  {
    stem: "What defines status epilepticus, and what is the first drug given?",
    topic: "Seizures",
    explanation:
      "A seizure lasting five minutes or more, or repeated seizures without recovery between. A benzodiazepine is first line — lorazepam intravenously, or buccal midazolam without access. Check glucose early: hypoglycaemia is a readily reversible cause easily missed in the urgency.",
    choices: [
      { text: "Seizure of five minutes or more — give a benzodiazepine and check glucose", isCorrect: true },
      { text: "Any seizure — give phenytoin first", isCorrect: false },
      { text: "Seizures lasting over an hour — give anaesthesia immediately", isCorrect: false },
      { text: "Two seizures in a year — start maintenance treatment", isCorrect: false },
    ],
  },
  {
    stem: "Which features distinguish a generalised tonic-clonic seizure from syncope?",
    topic: "Seizures",
    explanation:
      "Prolonged post-ictal confusion, lateral tongue biting, and incontinence favour seizure. Brief jerking can occur in syncope, so movement alone does not distinguish them — the recovery period does. Syncope typically has rapid, complete recovery.",
    choices: [
      { text: "Prolonged post-ictal confusion and lateral tongue biting", isCorrect: true },
      { text: "Any limb jerking, which occurs only in seizures", isCorrect: false },
      { text: "Rapid complete recovery within seconds", isCorrect: false },
      { text: "Pallor before the event", isCorrect: false },
    ],
  },
  {
    stem: "Which investigation is most important after a FIRST unprovoked seizure in an adult?",
    topic: "Seizures",
    explanation:
      "Brain imaging — MRI preferably — to look for a structural cause, alongside bloods and ECG. EEG helps classify seizure type and estimate recurrence risk but does not exclude epilepsy if normal. ECG matters because cardiac syncope can masquerade as seizure.",
    choices: [
      { text: "Brain imaging, with bloods and ECG; EEG helps classify but cannot exclude epilepsy", isCorrect: true },
      { text: "EEG alone, which is diagnostic", isCorrect: false },
      { text: "No investigation after a single seizure", isCorrect: false },
      { text: "Lumbar puncture in every case", isCorrect: false },
    ],
  },
  {
    stem: "Which antiepileptic is generally avoided in women of childbearing potential, and why?",
    topic: "Seizures",
    explanation:
      "Sodium valproate — it carries a high risk of major congenital malformation and neurodevelopmental impairment. Its use in this group is tightly restricted and requires specialist involvement with pregnancy prevention. Lamotrigine and levetiracetam are generally preferred.",
    choices: [
      { text: "Sodium valproate — high teratogenic and neurodevelopmental risk", isCorrect: true },
      { text: "Levetiracetam — poorly tolerated", isCorrect: false },
      { text: "Lamotrigine — ineffective in women", isCorrect: false },
      { text: "No antiepileptic poses particular risk", isCorrect: false },
    ],
  },
  {
    stem: "What advice about driving applies after a first unprovoked seizure?",
    topic: "Seizures",
    explanation:
      "The patient must stop driving and notify the licensing authority — periods vary by country and licence type. This must be raised at the first consultation and documented. It is frequently omitted, and the consequences of omitting it are serious for the patient and for others.",
    choices: [
      { text: "Stop driving and notify the licensing authority — raise and document it immediately", isCorrect: true },
      { text: "No restriction after a single seizure", isCorrect: false },
      { text: "Driving may continue if treatment is started", isCorrect: false },
      { text: "Only the specialist need discuss it, at follow-up", isCorrect: false },
    ],
  },
  {
    stem: "A patient has ascending symmetrical weakness with areflexia days after a diarrhoeal illness. What is the diagnosis and the critical monitoring?",
    topic: "Neuromuscular Disease",
    explanation:
      "Guillain-Barré syndrome, often following Campylobacter. The critical measurement is forced vital capacity — respiratory failure can develop rapidly and pulse oximetry stays normal until very late. Treatment is IVIG or plasma exchange; steroids do not help.",
    choices: [
      { text: "Guillain-Barré syndrome — monitor forced vital capacity, not oximetry", isCorrect: true },
      { text: "Myasthenia gravis — monitor with oximetry", isCorrect: false },
      { text: "Transverse myelitis — monitor bladder function only", isCorrect: false },
      { text: "Peripheral neuropathy — no monitoring needed", isCorrect: false },
    ],
  },
  {
    stem: "Which feature is most characteristic of myasthenia gravis?",
    topic: "Neuromuscular Disease",
    explanation:
      "Fatigable weakness — worsening with sustained activity and improving with rest — typically affecting ocular, bulbar and proximal muscles. Antibodies target the acetylcholine receptor. A thymoma should be sought, since removing it can improve the disease.",
    choices: [
      { text: "Fatigable weakness that worsens with use and improves with rest", isCorrect: true },
      { text: "Weakness that improves steadily through the day", isCorrect: false },
      { text: "Purely sensory symptoms", isCorrect: false },
      { text: "Fixed weakness unaffected by activity", isCorrect: false },
    ],
  },
  {
    stem: "Why is a myasthenic crisis a medical emergency?",
    topic: "Neuromuscular Disease",
    explanation:
      "Respiratory muscle weakness can progress to ventilatory failure. As in Guillain-Barré, vital capacity is monitored rather than oxygen saturation, because saturations remain normal until decompensation is imminent. Infection and certain drugs are common precipitants.",
    choices: [
      { text: "Respiratory muscle failure — monitor vital capacity, as saturations stay normal until late", isCorrect: true },
      { text: "It causes immediate cardiac arrest", isCorrect: false },
      { text: "Oxygen saturation falls early and reliably", isCorrect: false },
      { text: "It is self-limiting within hours", isCorrect: false },
    ],
  },
  {
    stem: "Which pattern of weakness suggests a myopathy rather than a neuropathy?",
    topic: "Neuromuscular Disease",
    explanation:
      "Symmetrical PROXIMAL weakness — difficulty rising from a chair or lifting arms overhead — with preserved sensation and reflexes until late, and raised creatine kinase. Neuropathies typically cause distal weakness with sensory involvement and early reflex loss.",
    choices: [
      { text: "Symmetrical proximal weakness with normal sensation and raised CK", isCorrect: true },
      { text: "Distal weakness with glove-and-stocking sensory loss", isCorrect: false },
      { text: "Asymmetrical weakness following one nerve territory", isCorrect: false },
      { text: "Weakness with early severe sensory loss", isCorrect: false },
    ],
  },
  {
    stem: "Which features characterise Parkinson's disease?",
    topic: "Movement Disorders",
    explanation:
      "Bradykinesia with rest tremor, rigidity and postural instability, characteristically ASYMMETRICAL at onset. Symmetrical onset, early falls, early autonomic failure or poor levodopa response suggest an atypical parkinsonian syndrome instead.",
    choices: [
      { text: "Asymmetrical bradykinesia with rest tremor and rigidity", isCorrect: true },
      { text: "Symmetrical intention tremor with ataxia", isCorrect: false },
      { text: "Symmetrical onset with early falls", isCorrect: false },
      { text: "Isolated postural tremor of the hands", isCorrect: false },
    ],
  },
  {
    stem: "How does essential tremor differ from parkinsonian tremor?",
    topic: "Movement Disorders",
    explanation:
      "Essential tremor is a postural or action tremor, usually bilateral, often improved by alcohol and with a family history. Parkinsonian tremor occurs at REST and improves with movement. Asking when the tremor is worst separates them quickly.",
    choices: [
      { text: "Essential tremor is postural or on action; parkinsonian tremor occurs at rest", isCorrect: true },
      { text: "Essential tremor occurs at rest", isCorrect: false },
      { text: "Both occur only with movement", isCorrect: false },
      { text: "They cannot be distinguished clinically", isCorrect: false },
    ],
  },
  {
    stem: "Which class of drug commonly causes drug-induced parkinsonism?",
    topic: "Movement Disorders",
    explanation:
      "Dopamine antagonists — antipsychotics and metoclopramide. It is typically symmetrical and develops over weeks after starting the drug, and it is reversible on stopping. Missing this leads to a patient being started on Parkinson's treatment for an entirely iatrogenic problem.",
    choices: [
      { text: "Dopamine antagonists such as antipsychotics and metoclopramide", isCorrect: true },
      { text: "Beta-blockers", isCorrect: false },
      { text: "Proton pump inhibitors", isCorrect: false },
      { text: "Statins", isCorrect: false },
    ],
  },
  {
    stem: "Which pattern of visual field loss localises a lesion to the optic chiasm?",
    topic: "Localisation",
    explanation:
      "Bitemporal hemianopia, from interruption of the crossing nasal retinal fibres. A pituitary adenoma compressing from below is the classic cause, and because it grows upward the defect typically begins in the upper quadrants.",
    choices: [
      { text: "Bitemporal hemianopia", isCorrect: true },
      { text: "Homonymous hemianopia", isCorrect: false },
      { text: "Monocular blindness", isCorrect: false },
      { text: "Central scotoma", isCorrect: false },
    ],
  },
  {
    stem: "How do upper and lower motor neuron signs differ, and why does it matter?",
    topic: "Localisation",
    explanation:
      "Upper motor neuron: spasticity, hyperreflexia, extensor plantar, minimal wasting. Lower motor neuron: flaccidity, hyporeflexia, marked wasting, fasciculation. It matters because it localises the lesion above or below the anterior horn cell before any imaging is requested.",
    choices: [
      { text: "UMN: spasticity and hyperreflexia. LMN: wasting and fasciculation — it localises the lesion", isCorrect: true },
      { text: "UMN causes wasting and fasciculation", isCorrect: false },
      { text: "The distinction has no localising value", isCorrect: false },
      { text: "Both produce identical examination findings", isCorrect: false },
    ],
  },
  {
    stem: "A patient has BOTH upper and lower motor neuron signs with no sensory involvement. Which diagnosis should be considered?",
    topic: "Localisation",
    explanation:
      "Motor neurone disease. The combination of UMN and LMN signs without sensory loss is highly characteristic, since it is a disease of motor neurons specifically. Bulbar involvement and respiratory failure determine prognosis.",
    choices: [
      { text: "Motor neurone disease", isCorrect: true },
      { text: "Multiple sclerosis", isCorrect: false },
      { text: "Guillain-Barré syndrome", isCorrect: false },
      { text: "Diabetic neuropathy", isCorrect: false },
    ],
  },
  {
    stem: "Which cerebellar signs would you look for, and are they ipsilateral or contralateral to the lesion?",
    topic: "Localisation",
    explanation:
      "Dysdiadochokinesia, ataxia, nystagmus, intention tremor, slurred speech and hypotonia — and they are IPSILATERAL, because cerebellar pathways cross twice. Strength and sensation are preserved; the deficit is coordination, not power.",
    choices: [
      { text: "Ataxia, nystagmus and intention tremor — ipsilateral to the lesion", isCorrect: true },
      { text: "Contralateral to the lesion, like cortical signs", isCorrect: false },
      { text: "Bilateral regardless of lesion side", isCorrect: false },
      { text: "Accompanied by profound weakness", isCorrect: false },
    ],
  },
  {
    stem: "A patient has ipsilateral facial pain and temperature loss with contralateral body loss, plus dysphagia and vertigo. Where is the lesion?",
    topic: "Localisation",
    explanation:
      "The lateral medulla — Wallenberg syndrome, usually from posterior inferior cerebellar artery occlusion. The crossed pattern arises because the trigeminal nucleus is affected before its fibres cross, while the spinothalamic tract has already crossed. Anatomy predicts the signs exactly.",
    choices: [
      { text: "Lateral medulla (Wallenberg syndrome)", isCorrect: true },
      { text: "Internal capsule", isCorrect: false },
      { text: "Cervical spinal cord", isCorrect: false },
      { text: "Frontal cortex", isCorrect: false },
    ],
  },
];

/* ═══════════ SET 2 — MS, Infection, Cognition, Spine, Nerve, Emergencies ═══════════ */

const SET2: Q[] = [
  {
    stem: "What is required to diagnose multiple sclerosis?",
    topic: "Demyelinating Disease",
    explanation:
      "Demyelinating lesions disseminated in TIME and SPACE — more than one episode affecting more than one CNS site, supported by MRI and sometimes oligoclonal bands in CSF. A single episode is a clinically isolated syndrome, which may or may not progress.",
    choices: [
      { text: "Lesions disseminated in both time and space", isCorrect: true },
      { text: "A single demyelinating episode", isCorrect: false },
      { text: "Positive serum antibodies alone", isCorrect: false },
      { text: "Any abnormality on brain MRI", isCorrect: false },
    ],
  },
  {
    stem: "A young woman has painful loss of vision in one eye with reduced colour perception. What is the diagnosis?",
    topic: "Demyelinating Disease",
    explanation:
      "Optic neuritis — often the first presentation of multiple sclerosis. Pain on eye movement, reduced colour vision (especially red desaturation) and a relative afferent pupillary defect are characteristic. Vision usually recovers substantially over weeks.",
    choices: [
      { text: "Optic neuritis", isCorrect: true },
      { text: "Acute angle-closure glaucoma", isCorrect: false },
      { text: "Retinal detachment", isCorrect: false },
      { text: "Central retinal artery occlusion", isCorrect: false },
    ],
  },
  {
    stem: "Why do MS symptoms worsen transiently with heat or fever?",
    topic: "Demyelinating Disease",
    explanation:
      "Uhthoff's phenomenon — raised temperature further impairs conduction in already demyelinated axons. It is a transient worsening of existing deficits, not a new relapse, so it does not warrant steroids. Distinguishing it from a true relapse avoids unnecessary treatment.",
    choices: [
      { text: "Uhthoff's phenomenon — heat impairs conduction in demyelinated axons, not a true relapse", isCorrect: true },
      { text: "New demyelinating lesions form when hot", isCorrect: false },
      { text: "It indicates a relapse requiring steroids", isCorrect: false },
      { text: "It is unrelated to MS", isCorrect: false },
    ],
  },
  {
    stem: "A patient has fever, headache, neck stiffness and photophobia. What should happen before lumbar puncture if there are focal signs or reduced consciousness?",
    topic: "CNS Infection",
    explanation:
      "CT imaging first, to exclude a mass lesion or raised pressure that could make lumbar puncture dangerous. Crucially, ANTIBIOTICS MUST NOT WAIT for imaging — they are given immediately, because delay increases mortality far more than a slightly delayed diagnosis does.",
    choices: [
      { text: "CT before LP — but antibiotics given immediately, not delayed for imaging", isCorrect: true },
      { text: "Delay antibiotics until after the lumbar puncture", isCorrect: false },
      { text: "Proceed straight to LP regardless of focal signs", isCorrect: false },
      { text: "Await CSF results before any treatment", isCorrect: false },
    ],
  },
  {
    stem: "Which CSF pattern suggests BACTERIAL rather than viral meningitis?",
    topic: "CNS Infection",
    explanation:
      "Turbid fluid with high neutrophils, high protein and LOW glucose relative to serum — the bacteria consume glucose. Viral meningitis shows lymphocytes with normal glucose. Tuberculous meningitis shows lymphocytes with very low glucose and high protein.",
    choices: [
      { text: "Neutrophils, high protein and low glucose", isCorrect: true },
      { text: "Lymphocytes with normal glucose", isCorrect: false },
      { text: "Normal cell count with high glucose", isCorrect: false },
      { text: "Red cells only", isCorrect: false },
    ],
  },
  {
    stem: "Which additional antibiotic cover is needed for meningitis in the very young, the elderly or the immunocompromised?",
    topic: "CNS Infection",
    explanation:
      "Amoxicillin or ampicillin, to cover Listeria monocytogenes — which cephalosporins do NOT treat. Forgetting this in an older or immunosuppressed patient is a classic and serious omission, because the standard regimen looks complete but leaves a gap.",
    choices: [
      { text: "Amoxicillin for Listeria, which cephalosporins do not cover", isCorrect: true },
      { text: "Vancomycin for MRSA in all cases", isCorrect: false },
      { text: "Metronidazole for anaerobes", isCorrect: false },
      { text: "No additional cover is needed", isCorrect: false },
    ],
  },
  {
    stem: "A patient has fever, confusion and seizures with temporal lobe changes on imaging. What is the likely diagnosis and treatment?",
    topic: "CNS Infection",
    explanation:
      "Herpes simplex encephalitis, treated with intravenous aciclovir started EMPIRICALLY. It has a predilection for the temporal lobes. Waiting for PCR confirmation costs brain tissue — untreated mortality is high and survivors are often severely impaired.",
    choices: [
      { text: "HSV encephalitis — start intravenous aciclovir empirically", isCorrect: true },
      { text: "Bacterial meningitis — antibiotics alone", isCorrect: false },
      { text: "Stroke — thrombolysis", isCorrect: false },
      { text: "Delirium — treat the underlying cause only", isCorrect: false },
    ],
  },
  {
    stem: "Which features distinguish delirium from dementia?",
    topic: "Cognitive Disorders",
    explanation:
      "Delirium has acute onset, a fluctuating course, impaired ATTENTION and altered conscious level. Dementia is gradual and progressive with consciousness preserved until late. Attention is the discriminating feature — and delirium frequently occurs on a background of dementia.",
    choices: [
      { text: "Delirium: acute, fluctuating, with impaired attention and altered consciousness", isCorrect: true },
      { text: "Delirium develops gradually over years", isCorrect: false },
      { text: "Consciousness is impaired early in dementia", isCorrect: false },
      { text: "Attention is normal in delirium", isCorrect: false },
    ],
  },
  {
    stem: "Which dementia is characterised by early personality and behavioural change with relatively preserved memory?",
    topic: "Cognitive Disorders",
    explanation:
      "Frontotemporal dementia. Disinhibition, apathy and loss of social awareness dominate early, while memory is comparatively spared — the opposite of Alzheimer's. It presents younger, and is often mistaken for psychiatric illness for months before the diagnosis is made.",
    choices: [
      { text: "Frontotemporal dementia", isCorrect: true },
      { text: "Alzheimer's disease", isCorrect: false },
      { text: "Vascular dementia", isCorrect: false },
      { text: "Dementia with Lewy bodies", isCorrect: false },
    ],
  },
  {
    stem: "Which triad suggests normal pressure hydrocephalus?",
    topic: "Cognitive Disorders",
    explanation:
      "Gait apraxia, urinary incontinence and cognitive impairment — 'wet, wacky and wobbly'. It matters because it is potentially reversible with shunting, so it must be considered in anyone with cognitive decline and a magnetic, shuffling gait.",
    choices: [
      { text: "Gait disturbance, urinary incontinence and cognitive impairment", isCorrect: true },
      { text: "Tremor, rigidity and bradykinesia", isCorrect: false },
      { text: "Headache, vomiting and papilloedema", isCorrect: false },
      { text: "Fever, confusion and neck stiffness", isCorrect: false },
    ],
  },
  {
    stem: "Which reversible causes should be excluded in someone with cognitive decline?",
    topic: "Cognitive Disorders",
    explanation:
      "Hypothyroidism, B12 and folate deficiency, depression, normal pressure hydrocephalus, chronic subdural haematoma, medication effects and alcohol. They are a minority of cases, but missing one means missing something treatable — which is why screening bloods and imaging are standard.",
    choices: [
      { text: "Hypothyroidism, B12 deficiency, depression, NPH, subdural haematoma and drugs", isCorrect: true },
      { text: "Nothing is reversible in cognitive decline", isCorrect: false },
      { text: "Only genetic causes matter", isCorrect: false },
      { text: "Age fully explains all decline", isCorrect: false },
    ],
  },
  {
    stem: "A patient has saddle anaesthesia, urinary retention and bilateral leg weakness. What is the diagnosis and why is it urgent?",
    topic: "Spinal Disorders",
    explanation:
      "Cauda equina syndrome — a surgical emergency. Delayed decompression risks permanent incontinence and sexual dysfunction. Urinary retention with overflow is the most reliable red flag, and any suspicion warrants urgent MRI rather than a trial of analgesia.",
    choices: [
      { text: "Cauda equina syndrome — urgent MRI and decompression", isCorrect: true },
      { text: "Mechanical back pain — analgesia and mobilise", isCorrect: false },
      { text: "Sciatica — physiotherapy referral", isCorrect: false },
      { text: "Peripheral neuropathy — nerve conduction studies", isCorrect: false },
    ],
  },
  {
    stem: "A patient with known cancer has progressive back pain and leg weakness. What must be excluded urgently?",
    topic: "Spinal Disorders",
    explanation:
      "Metastatic spinal cord compression. Urgent whole-spine MRI, high-dose corticosteroid and consideration of radiotherapy or surgery are needed. Neurological function at the time of treatment strongly predicts final outcome — once walking is lost, it rarely returns.",
    choices: [
      { text: "Metastatic spinal cord compression — urgent MRI and steroids", isCorrect: true },
      { text: "Simple mechanical back pain", isCorrect: false },
      { text: "Osteoporotic collapse needing no action", isCorrect: false },
      { text: "Muscular strain", isCorrect: false },
    ],
  },
  {
    stem: "A patient has sensory loss in a 'cape' distribution over the shoulders with preserved light touch. Which lesion does this suggest?",
    topic: "Spinal Disorders",
    explanation:
      "A central cord lesion such as syringomyelia. The spinothalamic fibres crossing in the central commissure are interrupted bilaterally at that level, while the dorsal columns are spared — producing dissociated sensory loss with pain and temperature affected but touch preserved.",
    choices: [
      { text: "Central cord lesion (syringomyelia) causing dissociated sensory loss", isCorrect: true },
      { text: "Peripheral neuropathy", isCorrect: false },
      { text: "Complete cord transection", isCorrect: false },
      { text: "Cortical stroke", isCorrect: false },
    ],
  },
  {
    stem: "Which pattern of nerve involvement does diabetes most commonly produce?",
    topic: "Peripheral Nerve",
    explanation:
      "Symmetrical distal sensory polyneuropathy in a glove-and-stocking distribution — longest nerves affected first. Loss of protective sensation is what allows foot ulceration to develop unnoticed, which is why annual monofilament testing is a core part of diabetes care.",
    choices: [
      { text: "Symmetrical distal sensory polyneuropathy, longest nerves first", isCorrect: true },
      { text: "Asymmetrical pure motor weakness", isCorrect: false },
      { text: "Isolated cranial neuropathy only", isCorrect: false },
      { text: "Proximal weakness with normal sensation", isCorrect: false },
    ],
  },
  {
    stem: "A patient has numbness in the thumb, index and middle fingers, worse at night. Which nerve is compressed and where?",
    topic: "Peripheral Nerve",
    explanation:
      "The median nerve at the carpal tunnel. Nocturnal symptoms relieved by shaking the hand are characteristic. Thenar SKIN sensation is spared, because the palmar cutaneous branch leaves proximally and passes over the retinaculum — its involvement suggests a more proximal lesion.",
    choices: [
      { text: "Median nerve at the carpal tunnel", isCorrect: true },
      { text: "Ulnar nerve at the elbow", isCorrect: false },
      { text: "Radial nerve in the spiral groove", isCorrect: false },
      { text: "C8 nerve root", isCorrect: false },
    ],
  },
  {
    stem: "Which deficiency causes subacute combined degeneration of the cord?",
    topic: "Peripheral Nerve",
    explanation:
      "Vitamin B12. It affects dorsal columns and corticospinal tracts, producing the unusual combination of absent ankle reflexes with extensor plantars — lower and upper motor neuron signs together. Giving folate alone can worsen the neurology, which is why B12 must be checked first.",
    choices: [
      { text: "Vitamin B12 — absent reflexes with extensor plantars", isCorrect: true },
      { text: "Vitamin C", isCorrect: false },
      { text: "Vitamin D", isCorrect: false },
      { text: "Vitamin K", isCorrect: false },
    ],
  },
  {
    stem: "Which features distinguish a radiculopathy from a peripheral nerve lesion?",
    topic: "Peripheral Nerve",
    explanation:
      "Radiculopathy follows a DERMATOMAL and myotomal pattern with a specific reflex lost, and pain is often provoked by movements that stress the root. A peripheral nerve lesion follows that nerve's own territory, which does not correspond to a dermatome.",
    choices: [
      { text: "Radiculopathy follows a dermatome and myotome with a specific reflex lost", isCorrect: true },
      { text: "Radiculopathy follows a single named nerve's territory", isCorrect: false },
      { text: "They produce identical distributions", isCorrect: false },
      { text: "Reflexes are unaffected in radiculopathy", isCorrect: false },
    ],
  },
  {
    stem: "Which reflex tests the S1 root, and which tests L3–L4?",
    topic: "Localisation",
    explanation:
      "Ankle jerk tests S1; knee jerk tests L3–L4. Reflexes provide objective, patient-independent localisation, which is why they carry more weight than reported sensory symptoms when working out which root is involved.",
    choices: [
      { text: "Ankle jerk for S1; knee jerk for L3–L4", isCorrect: true },
      { text: "Ankle jerk for L3; knee jerk for S1", isCorrect: false },
      { text: "Both test S1", isCorrect: false },
      { text: "Reflexes do not localise nerve roots", isCorrect: false },
    ],
  },
  {
    stem: "A patient has a sudden severe headache with a third nerve palsy including a dilated pupil. What must be excluded urgently?",
    topic: "Neurological Emergencies",
    explanation:
      "A posterior communicating artery aneurysm. The parasympathetic fibres run superficially on the third nerve, so compression affects the pupil early — whereas ischaemic causes such as diabetes typically SPARE it. A painful third nerve palsy with a dilated pupil is an aneurysm until proven otherwise.",
    choices: [
      { text: "Posterior communicating artery aneurysm — compression affects the pupil early", isCorrect: true },
      { text: "Diabetic third nerve palsy, which typically dilates the pupil", isCorrect: false },
      { text: "Migraine with aura", isCorrect: false },
      { text: "Myasthenia gravis", isCorrect: false },
    ],
  },
  {
    stem: "Which signs indicate critically raised intracranial pressure?",
    topic: "Neurological Emergencies",
    explanation:
      "Cushing's reflex — hypertension, bradycardia and irregular respiration — with reduced consciousness, pupillary changes and papilloedema. These are LATE signs indicating imminent herniation, so they demand immediate action rather than further observation.",
    choices: [
      { text: "Hypertension, bradycardia and irregular breathing with falling consciousness", isCorrect: true },
      { text: "Hypotension with tachycardia", isCorrect: false },
      { text: "Isolated headache with normal observations", isCorrect: false },
      { text: "Pupillary constriction with rapid breathing", isCorrect: false },
    ],
  },
  {
    stem: "Why is prolonged hyperventilation avoided when managing raised intracranial pressure?",
    topic: "Neurological Emergencies",
    explanation:
      "Hypocapnia causes cerebral vasoconstriction, which lowers pressure briefly but reduces cerebral blood flow and risks ischaemia. It is reserved as a short-term measure while definitive treatment is arranged, not used as ongoing management.",
    choices: [
      { text: "Vasoconstriction lowers pressure but reduces cerebral perfusion, risking ischaemia", isCorrect: true },
      { text: "It raises intracranial pressure directly", isCorrect: false },
      { text: "It has no physiological effect", isCorrect: false },
      { text: "It should be maintained indefinitely", isCorrect: false },
    ],
  },
  {
    stem: "A patient has sudden painless monocular visual loss described as a curtain descending, lasting minutes. What is this and what does it signify?",
    topic: "Neuro-ophthalmology",
    explanation:
      "Amaurosis fugax — transient retinal ischaemia, usually embolic from carotid disease. It is a form of TIA and carries the same urgency: it warrants prompt assessment, antiplatelet treatment and carotid imaging, because stroke risk is highest in the following days.",
    choices: [
      { text: "Amaurosis fugax — a retinal TIA needing urgent vascular assessment", isCorrect: true },
      { text: "Migraine aura requiring no investigation", isCorrect: false },
      { text: "Retinal detachment", isCorrect: false },
      { text: "Optic neuritis", isCorrect: false },
    ],
  },
  {
    stem: "What does a relative afferent pupillary defect indicate?",
    topic: "Neuro-ophthalmology",
    explanation:
      "Asymmetric optic nerve or extensive retinal disease on the affected side — the swinging light test shows paradoxical dilatation when light moves to the affected eye. It is objective and cannot be feigned, making it one of the most useful signs in ophthalmic examination.",
    choices: [
      { text: "Asymmetric optic nerve or retinal disease — an objective sign that cannot be feigned", isCorrect: true },
      { text: "A lesion of the oculomotor nerve", isCorrect: false },
      { text: "Cataract in the affected eye", isCorrect: false },
      { text: "Normal variation", isCorrect: false },
    ],
  },
  {
    stem: "A patient has ptosis, miosis and reduced sweating on one side of the face. What is the syndrome and what must be excluded?",
    topic: "Neuro-ophthalmology",
    explanation:
      "Horner's syndrome from sympathetic pathway interruption. A Pancoast tumour at the lung apex and carotid artery dissection must be excluded — the latter particularly if there is neck pain, since it is a treatable cause of stroke in younger patients.",
    choices: [
      { text: "Horner's syndrome — exclude Pancoast tumour and carotid dissection", isCorrect: true },
      { text: "Third nerve palsy — exclude aneurysm", isCorrect: false },
      { text: "Bell's palsy — no investigation needed", isCorrect: false },
      { text: "Myasthenia gravis — check antibodies only", isCorrect: false },
    ],
  },
  {
    stem: "How does a facial nerve palsy from Bell's palsy differ from a stroke?",
    topic: "Neuro-ophthalmology",
    explanation:
      "Bell's palsy is a lower motor neuron lesion affecting the WHOLE side including the forehead. A stroke spares the forehead, because the upper face receives bilateral cortical innervation. Asking the patient to raise their eyebrows separates them in seconds.",
    choices: [
      { text: "Bell's palsy involves the forehead; a stroke spares it", isCorrect: true },
      { text: "A stroke involves the forehead; Bell's palsy spares it", isCorrect: false },
      { text: "Both spare the forehead", isCorrect: false },
      { text: "Neither affects the forehead", isCorrect: false },
    ],
  },
  {
    stem: "Which features suggest a peripheral rather than a central cause of vertigo?",
    topic: "Vertigo",
    explanation:
      "Peripheral vertigo is typically severe with prominent nausea, horizontal fatiguable nystagmus, and no other neurological signs. Central causes may have milder vertigo but vertical or direction-changing nystagmus, ataxia out of proportion, and additional brainstem or cerebellar signs.",
    choices: [
      { text: "Severe vertigo with horizontal fatiguable nystagmus and no other neurology", isCorrect: true },
      { text: "Vertical direction-changing nystagmus", isCorrect: false },
      { text: "Prominent limb ataxia with mild vertigo", isCorrect: false },
      { text: "Associated dysarthria and diplopia", isCorrect: false },
    ],
  },
  {
    stem: "A patient has brief vertigo triggered by rolling over in bed, lasting under a minute. What is the diagnosis and treatment?",
    topic: "Vertigo",
    explanation:
      "Benign paroxysmal positional vertigo, from displaced otoliths in a semicircular canal. It is diagnosed with the Dix-Hallpike manoeuvre and treated with a repositioning manoeuvre such as Epley — a mechanical problem with a mechanical solution, and drugs are largely unhelpful.",
    choices: [
      { text: "BPPV — diagnosed by Dix-Hallpike, treated by a repositioning manoeuvre", isCorrect: true },
      { text: "Ménière's disease — treat with diuretics", isCorrect: false },
      { text: "Vestibular neuritis — treat with steroids", isCorrect: false },
      { text: "Posterior circulation stroke", isCorrect: false },
    ],
  },
  {
    stem: "Which triad characterises Ménière's disease?",
    topic: "Vertigo",
    explanation:
      "Episodic vertigo lasting minutes to hours, fluctuating sensorineural hearing loss, and tinnitus, often with aural fullness. The duration distinguishes it — BPPV lasts seconds, vestibular neuritis days. Timing is the most useful single question in vertigo.",
    choices: [
      { text: "Episodic vertigo lasting minutes to hours, hearing loss and tinnitus", isCorrect: true },
      { text: "Vertigo lasting seconds triggered by position", isCorrect: false },
      { text: "Constant vertigo over weeks with no hearing change", isCorrect: false },
      { text: "Vertigo with facial weakness", isCorrect: false },
    ],
  },
  {
    stem: "What is the single most useful question when assessing any neurological symptom?",
    topic: "Clinical Approach",
    explanation:
      "How it evolved over time. Sudden onset suggests vascular; hours to days suggests inflammatory or infective; weeks to months suggests neoplastic or degenerative; and a relapsing-remitting course suggests demyelination. Time course narrows the differential before examination even begins.",
    choices: [
      { text: "How the symptom evolved over time — the time course narrows the differential", isCorrect: true },
      { text: "Whether there is a family history", isCorrect: false },
      { text: "The patient's occupation", isCorrect: false },
      { text: "Which side is affected", isCorrect: false },
    ],
  },
];

/* ═══════════ SEED ═══════════ */

function isTransient(e: unknown): boolean {
  if (!(e instanceof Error)) return false;
  const m = e.message.toLowerCase();
  return (
    m.includes("p1001") || m.includes("p1017") ||
    m.includes("can't reach database") || m.includes("closed the connection") ||
    m.includes("connection") || m.includes("econnreset") || m.includes("timed out")
  );
}

async function withRetry<T>(fn: () => Promise<T>, label: string): Promise<T> {
  for (let i = 1; i <= 5; i++) {
    try {
      return await fn();
    } catch (e) {
      if (!isTransient(e) || i === 5) throw e;
      console.log(`    … connection dropped on ${label}, retrying in ${i * 2}s`);
      await new Promise((r) => setTimeout(r, i * 2000));
    }
  }
  throw new Error("unreachable");
}

/**
 * Shuffles choices before writing.
 *
 * Every earlier wave wrote the correct answer first and never shuffled, so all
 * 788 questions had the answer at position A. Doing this at write time means
 * that fault cannot recur.
 */
function shuffled<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
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
    const opts = shuffled(q.choices); // ← the fix
    await withRetry(
      () =>
        prisma.question.create({
          data: {
            quizId: quiz.id, type: "SINGLE", stem: q.stem, topic: q.topic,
            explanation: q.explanation, points: 1, order: n,
            choices: { create: opts.map((c, i) => ({ text: c.text, isCorrect: c.isCorrect, order: i })) },
          },
        }),
      `question ${n + 1} of ${o.title}`
    );
  }
  console.log(`  ✓ ${o.title} — ${o.questions.length} questions (answers shuffled)`);
}

async function main() {
  console.log("Seeding Neurology…\n");
  const CAT = "cs-neurology";

  await seedSet({
    categorySlug: CAT, slug: "neurology-practice-set-1",
    title: "Neurology — Practice Set 1",
    description: "Thirty questions on stroke and TIA, headache including the red flags, seizures and epilepsy, neuromuscular disease, movement disorders, and localising a lesion from the examination. Untimed.",
    kind: "PRACTICE", timeLimitSeconds: null, difficulty: "Intermediate", questions: SET1,
  });

  await seedSet({
    categorySlug: CAT, slug: "neurology-practice-set-2",
    title: "Neurology — Practice Set 2",
    description: "Thirty fresh questions on multiple sclerosis, CNS infection, cognitive disorders, spinal cord and root problems, peripheral nerve disease, neurological emergencies, neuro-ophthalmology and vertigo. Untimed.",
    kind: "PRACTICE", timeLimitSeconds: null, difficulty: "Intermediate", questions: SET2,
  });

  await seedSet({
    categorySlug: CAT, slug: "neurology-exam-1",
    title: "Neurology — Timed Exam 1",
    description: "Thirty questions in 40 minutes covering stroke, headache, seizures and localisation. Feedback withheld until you submit.",
    kind: "EXAM", timeLimitSeconds: 40 * 60, difficulty: "Intermediate", questions: SET1,
  });

  await seedSet({
    categorySlug: CAT, slug: "neurology-exam-2",
    title: "Neurology — Timed Exam 2 (Comprehensive)",
    description: "All sixty questions in 75 minutes, covering the whole subject. Sit this once both practice sets feel comfortable.",
    kind: "EXAM", timeLimitSeconds: 75 * 60, difficulty: "Advanced", questions: [...SET1, ...SET2],
  });

  console.log("\nDone. Editable in Admin → Question Bank.");
}

main().catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
