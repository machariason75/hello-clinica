/**
 * CONTENT WAVE 3 — Cardiovascular (physiology → cardiology → pharmacology)
 *
 * 45 original exam-style questions, delivered as three linked sets that fill
 * three different sections of the taxonomy:
 *
 *   fs-cardiovascular-physiology   15 questions
 *   cs-cardiology                  15 questions
 *   fs-cardiovascular-drugs        15 questions
 *
 * Written as a deliberate ARC rather than three unrelated sets. The physiology
 * questions establish preload, afterload and the cardiac cycle; the cardiology
 * questions apply them to real presentations; the drug questions explain why each
 * agent works by referring back to the same mechanisms. A student who fails a
 * drug question can trace the reasoning back two steps.
 *
 * ⚠ Clinical thresholds and first-line agents vary by national guideline and are
 * periodically revised. These questions test mechanism and principle, which
 * travel well — but review against your local guidance before promoting any of it
 * as definitive. Everything is editable in Admin → Question Bank.
 *
 * Run:  npx tsx prisma/seed-cardiovascular.ts
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Q = {
  stem: string;
  topic: string;
  explanation: string;
  choices: { text: string; isCorrect: boolean }[];
};

/* ═══════════════ PHYSIOLOGY ═══════════════ */

const PHYSIOLOGY: Q[] = [
  {
    stem: "Cardiac output is the product of which two variables?",
    topic: "Cardiac Output",
    explanation:
      "Heart rate multiplied by stroke volume. Almost every cardiovascular drug and every form of shock acts by changing one of these two, so it is worth holding onto: if output is falling, ask which term has changed and why.",
    choices: [
      { text: "Heart rate and stroke volume", isCorrect: true },
      { text: "Blood pressure and systemic vascular resistance", isCorrect: false },
      { text: "Preload and afterload", isCorrect: false },
      { text: "Ejection fraction and end-diastolic volume", isCorrect: false },
    ],
  },
  {
    stem: "What does the Frank-Starling relationship describe?",
    topic: "Cardiac Mechanics",
    explanation:
      "Increasing ventricular filling stretches the myocardium and increases the force of the next contraction, so stroke volume rises with preload. It is the mechanism by which the heart automatically matches output to venous return — and its failure is what makes a fluid bolus harmful in decompensated heart failure.",
    choices: [
      { text: "Greater ventricular filling produces a stronger contraction", isCorrect: true },
      { text: "Heart rate rises as blood pressure falls", isCorrect: false },
      { text: "Coronary flow increases during systole", isCorrect: false },
      { text: "Afterload determines end-diastolic volume", isCorrect: false },
    ],
  },
  {
    stem: "Which factor is the principal determinant of left ventricular afterload?",
    topic: "Cardiac Mechanics",
    explanation:
      "Systemic vascular resistance — the pressure the ventricle must overcome to eject. Raising afterload reduces stroke volume for any given contractility, which is why vasodilators improve output in a failing ventricle while vasoconstrictors can worsen it.",
    choices: [
      { text: "Systemic vascular resistance", isCorrect: true },
      { text: "Venous return", isCorrect: false },
      { text: "End-diastolic volume", isCorrect: false },
      { text: "Heart rate", isCorrect: false },
    ],
  },
  {
    stem: "During which phase of the cardiac cycle does the left ventricle receive most of its coronary blood flow?",
    topic: "Coronary Circulation",
    explanation:
      "Diastole. Left ventricular wall tension during systole compresses the intramural vessels, so perfusion happens mainly when the muscle relaxes. This explains why tachycardia — which shortens diastole disproportionately — provokes ischaemia, and why slowing the rate is therapeutic in angina.",
    choices: [
      { text: "Diastole", isCorrect: true },
      { text: "Systole", isCorrect: false },
      { text: "Equally throughout the cycle", isCorrect: false },
      { text: "Isovolumetric contraction", isCorrect: false },
    ],
  },
  {
    stem: "What generates the first heart sound (S1)?",
    topic: "Cardiac Cycle",
    explanation:
      "Closure of the mitral and tricuspid valves at the start of systole. S2 is closure of the aortic and pulmonary valves at the end of systole. Physiological splitting of S2 on inspiration occurs because increased venous return delays pulmonary valve closure.",
    choices: [
      { text: "Closure of the mitral and tricuspid valves", isCorrect: true },
      { text: "Closure of the aortic and pulmonary valves", isCorrect: false },
      { text: "Opening of the mitral valve", isCorrect: false },
      { text: "Rapid ventricular filling", isCorrect: false },
    ],
  },
  {
    stem: "Which structure normally acts as the pacemaker of the heart?",
    topic: "Conduction",
    explanation:
      "The sinoatrial node, which has the fastest intrinsic rate at roughly 60 to 100 per minute. If it fails, the AV node takes over at about 40 to 60, and ventricular tissue at 20 to 40 — which is why escape rhythms are progressively slower the lower they originate.",
    choices: [
      { text: "The sinoatrial node", isCorrect: true },
      { text: "The atrioventricular node", isCorrect: false },
      { text: "The bundle of His", isCorrect: false },
      { text: "Purkinje fibres", isCorrect: false },
    ],
  },
  {
    stem: "Why does the atrioventricular node delay conduction between atria and ventricles?",
    topic: "Conduction",
    explanation:
      "The delay allows atrial contraction to complete ventricular filling before systole begins. Losing this atrial contribution — as happens in atrial fibrillation — reduces cardiac output by roughly a fifth, and considerably more in a stiff, poorly compliant ventricle.",
    choices: [
      { text: "To allow atrial contraction to complete ventricular filling", isCorrect: true },
      { text: "To slow the overall heart rate", isCorrect: false },
      { text: "To protect the coronary arteries from high pressure", isCorrect: false },
      { text: "To allow the ventricles to depolarise simultaneously", isCorrect: false },
    ],
  },
  {
    stem: "Baroreceptors in the carotid sinus respond to a fall in blood pressure by producing which reflex?",
    topic: "Blood Pressure Regulation",
    explanation:
      "Reduced baroreceptor firing removes inhibition of sympathetic outflow, so heart rate, contractility and vasoconstriction all increase. It is the fastest blood-pressure control mechanism the body has — acting within seconds, long before hormonal systems respond.",
    choices: [
      { text: "Increased sympathetic outflow, raising rate, contractility and vascular tone", isCorrect: true },
      { text: "Increased vagal tone, slowing the heart", isCorrect: false },
      { text: "Immediate renin suppression", isCorrect: false },
      { text: "Peripheral vasodilatation to improve flow", isCorrect: false },
    ],
  },
  {
    stem: "What triggers renin release from the juxtaglomerular apparatus?",
    topic: "Blood Pressure Regulation",
    explanation:
      "Reduced renal perfusion pressure, reduced sodium delivery to the macula densa, and sympathetic stimulation. Renin initiates the angiotensin cascade, producing vasoconstriction and aldosterone-driven sodium retention — the system that ACE inhibitors and ARBs interrupt.",
    choices: [
      { text: "Reduced renal perfusion, low sodium at the macula densa, or sympathetic drive", isCorrect: true },
      { text: "High serum potassium alone", isCorrect: false },
      { text: "Elevated blood pressure", isCorrect: false },
      { text: "Increased atrial natriuretic peptide", isCorrect: false },
    ],
  },
  {
    stem: "Which effect does angiotensin II produce?",
    topic: "Blood Pressure Regulation",
    explanation:
      "Potent arteriolar vasoconstriction, aldosterone release, ADH release, and thirst — all raising blood pressure and volume. It also drives cardiac and vascular remodelling over time, which is why blocking this axis improves long-term outcomes in heart failure rather than simply lowering pressure.",
    choices: [
      { text: "Vasoconstriction, aldosterone release and sodium retention", isCorrect: true },
      { text: "Vasodilatation and natriuresis", isCorrect: false },
      { text: "Reduced sympathetic activity", isCorrect: false },
      { text: "Direct negative inotropy", isCorrect: false },
    ],
  },
  {
    stem: "What is the normal left ventricular ejection fraction?",
    topic: "Cardiac Output",
    explanation:
      "Approximately 55 to 70%. Ejection fraction is stroke volume divided by end-diastolic volume. A value below 40% defines heart failure with reduced ejection fraction — but note that a normal figure does not exclude heart failure, since HFpEF has preserved ejection fraction with impaired filling.",
    choices: [
      { text: "About 55–70%", isCorrect: true },
      { text: "About 25–35%", isCorrect: false },
      { text: "About 85–95%", isCorrect: false },
      { text: "About 40–45%", isCorrect: false },
    ],
  },
  {
    stem: "Which ion movement is principally responsible for the plateau phase of the ventricular action potential?",
    topic: "Cardiac Electrophysiology",
    explanation:
      "Calcium influx through L-type channels, balanced against potassium efflux. This plateau prolongs the refractory period and prevents tetany — a heart that could tetanise would not fill. It is also the target of calcium channel blockers.",
    choices: [
      { text: "Calcium influx through L-type channels", isCorrect: true },
      { text: "Rapid sodium influx", isCorrect: false },
      { text: "Chloride efflux", isCorrect: false },
      { text: "Sodium-potassium ATPase activity", isCorrect: false },
    ],
  },
  {
    stem: "On the ECG, what does the PR interval represent?",
    topic: "Cardiac Electrophysiology",
    explanation:
      "The time from the onset of atrial depolarisation to the onset of ventricular depolarisation — essentially conduction through the AV node. Prolongation beyond 200 ms indicates first-degree AV block, and the way the interval behaves distinguishes the two types of second-degree block.",
    choices: [
      { text: "Atrial depolarisation plus AV nodal conduction time", isCorrect: true },
      { text: "Ventricular depolarisation", isCorrect: false },
      { text: "Ventricular repolarisation", isCorrect: false },
      { text: "Total atrial and ventricular systole", isCorrect: false },
    ],
  },
  {
    stem: "A patient in septic shock has warm peripheries and a low blood pressure. Which haemodynamic pattern fits?",
    topic: "Shock Physiology",
    explanation:
      "Low systemic vascular resistance with a high or normal cardiac output — distributive shock. This contrasts with cardiogenic and hypovolaemic shock, where output falls and resistance rises, producing cold peripheries. The distinction determines whether vasopressors or inotropes are the priority.",
    choices: [
      { text: "Low systemic vascular resistance with high or normal cardiac output", isCorrect: true },
      { text: "High vascular resistance with low cardiac output", isCorrect: false },
      { text: "Low preload with high resistance and cold peripheries", isCorrect: false },
      { text: "Normal resistance with normal output", isCorrect: false },
    ],
  },
  {
    stem: "Why does a stiff, poorly compliant left ventricle cause symptoms despite a normal ejection fraction?",
    topic: "Cardiac Mechanics",
    explanation:
      "Impaired relaxation raises filling pressures, which are transmitted back to the pulmonary circulation and cause congestion. The ventricle still ejects a normal fraction of what it holds — it simply cannot fill without high pressure. This is heart failure with preserved ejection fraction.",
    choices: [
      { text: "Impaired filling raises left atrial and pulmonary pressures", isCorrect: true },
      { text: "Contractility is severely reduced", isCorrect: false },
      { text: "Coronary flow is obstructed in systole", isCorrect: false },
      { text: "Afterload falls excessively", isCorrect: false },
    ],
  },
];

/* ═══════════════ CARDIOLOGY ═══════════════ */

const CARDIOLOGY: Q[] = [
  {
    stem: "A patient has crushing central chest pain and the ECG shows ST elevation in leads II, III and aVF. Which territory is affected?",
    topic: "Acute Coronary Syndrome",
    explanation:
      "The inferior wall, usually supplied by the right coronary artery. Inferior infarction warrants a right-sided ECG, because coexisting right ventricular infarction changes management — those patients are preload-dependent, and nitrates can cause profound hypotension.",
    choices: [
      { text: "Inferior — typically the right coronary artery", isCorrect: true },
      { text: "Anterior — the left anterior descending artery", isCorrect: false },
      { text: "Lateral — the circumflex artery", isCorrect: false },
      { text: "Posterior wall only", isCorrect: false },
    ],
  },
  {
    stem: "ST elevation in leads V1 to V4 indicates infarction in which territory?",
    topic: "Acute Coronary Syndrome",
    explanation:
      "The anteroseptal wall, supplied by the left anterior descending artery. Anterior infarcts involve more myocardium than inferior ones and carry a higher risk of cardiogenic shock and of ventricular arrhythmia.",
    choices: [
      { text: "Anteroseptal — the left anterior descending artery", isCorrect: true },
      { text: "Inferior — the right coronary artery", isCorrect: false },
      { text: "Lateral — the circumflex artery", isCorrect: false },
      { text: "Right ventricle", isCorrect: false },
    ],
  },
  {
    stem: "Which biomarker is most specific for myocardial injury?",
    topic: "Acute Coronary Syndrome",
    explanation:
      "Cardiac troponin, which rises within a few hours and stays elevated for days. It is specific to myocardial injury but not to infarction — sepsis, pulmonary embolism, renal failure and myocarditis all raise it. The clinical context and the trend matter as much as the number.",
    choices: [
      { text: "Cardiac troponin", isCorrect: true },
      { text: "Creatine kinase (total)", isCorrect: false },
      { text: "Lactate dehydrogenase", isCorrect: false },
      { text: "Myoglobin", isCorrect: false },
    ],
  },
  {
    stem: "A patient presents with STEMI 90 minutes from onset at a hospital with a catheter laboratory. What is the preferred reperfusion strategy?",
    topic: "Acute Coronary Syndrome",
    explanation:
      "Primary percutaneous coronary intervention, where it can be delivered promptly. It achieves better vessel patency and lower rates of reinfarction and intracranial haemorrhage than thrombolysis. Thrombolysis remains the alternative when timely PCI is not available.",
    choices: [
      { text: "Primary percutaneous coronary intervention", isCorrect: true },
      { text: "Thrombolysis, even where PCI is immediately available", isCorrect: false },
      { text: "Anticoagulation alone with observation", isCorrect: false },
      { text: "Elective angiography in 48 hours", isCorrect: false },
    ],
  },
  {
    stem: "An elderly patient has an irregularly irregular pulse with no discernible P waves on the ECG. What is the rhythm?",
    topic: "Arrhythmias",
    explanation:
      "Atrial fibrillation. The absence of organised atrial activity produces chaotic AV conduction, hence the irregular irregularity. The clinical significance is thromboembolic — stasis in the fibrillating atrium forms thrombus, and stroke risk is assessed formally rather than by intuition.",
    choices: [
      { text: "Atrial fibrillation", isCorrect: true },
      { text: "Atrial flutter with fixed block", isCorrect: false },
      { text: "Sinus arrhythmia", isCorrect: false },
      { text: "Third-degree heart block", isCorrect: false },
    ],
  },
  {
    stem: "What is the principal reason for anticoagulating patients with atrial fibrillation?",
    topic: "Arrhythmias",
    explanation:
      "To prevent thromboembolic stroke. Stasis in the fibrillating left atrium — particularly the appendage — allows thrombus to form and embolise. Anticoagulation reduces stroke risk substantially, and the decision is guided by a formal risk score rather than by symptoms or heart rate.",
    choices: [
      { text: "To prevent thromboembolic stroke from atrial thrombus", isCorrect: true },
      { text: "To restore sinus rhythm", isCorrect: false },
      { text: "To control the ventricular rate", isCorrect: false },
      { text: "To reduce myocardial oxygen demand", isCorrect: false },
    ],
  },
  {
    stem: "An ECG shows progressive PR lengthening followed by a dropped QRS complex. What is this?",
    topic: "Arrhythmias",
    explanation:
      "Mobitz type I (Wenckebach) second-degree AV block. It usually reflects AV nodal disease, is often benign, and rarely needs pacing if asymptomatic. Mobitz type II — dropped beats without PR lengthening — is infranodal, unpredictable, and frequently requires a pacemaker.",
    choices: [
      { text: "Mobitz type I (Wenckebach) second-degree block", isCorrect: true },
      { text: "Mobitz type II second-degree block", isCorrect: false },
      { text: "First-degree AV block", isCorrect: false },
      { text: "Complete heart block", isCorrect: false },
    ],
  },
  {
    stem: "A patient has orthopnoea, paroxysmal nocturnal dyspnoea, raised JVP and bilateral basal crackles. What is the likely diagnosis?",
    topic: "Heart Failure",
    explanation:
      "Congestive heart failure with both pulmonary and systemic congestion. Orthopnoea and PND reflect redistribution of fluid when lying flat; the raised JVP indicates elevated right-sided filling pressure. BNP and echocardiography confirm and characterise it.",
    choices: [
      { text: "Congestive heart failure", isCorrect: true },
      { text: "Community-acquired pneumonia", isCorrect: false },
      { text: "Pulmonary embolism", isCorrect: false },
      { text: "Acute asthma", isCorrect: false },
    ],
  },
  {
    stem: "What does an elevated BNP indicate?",
    topic: "Heart Failure",
    explanation:
      "Ventricular wall stretch from raised filling pressures, supporting a diagnosis of heart failure. Its greatest value is the negative predictive value — a normal BNP in an untreated breathless patient makes heart failure unlikely, which is often the more useful piece of information.",
    choices: [
      { text: "Ventricular wall stretch from elevated filling pressures", isCorrect: true },
      { text: "Myocardial cell necrosis", isCorrect: false },
      { text: "Coronary artery occlusion", isCorrect: false },
      { text: "Valvular calcification", isCorrect: false },
    ],
  },
  {
    stem: "A patient has an ejection systolic murmur radiating to the carotids, with exertional syncope and angina. What is the likely lesion?",
    topic: "Valvular Disease",
    explanation:
      "Aortic stenosis. The triad of angina, syncope and dyspnoea marks the onset of symptoms, after which prognosis without intervention deteriorates sharply. Vasodilators such as nitrates should be used with great caution — a fixed obstruction cannot increase output to compensate for a fall in resistance.",
    choices: [
      { text: "Aortic stenosis", isCorrect: true },
      { text: "Mitral regurgitation", isCorrect: false },
      { text: "Aortic regurgitation", isCorrect: false },
      { text: "Mitral stenosis", isCorrect: false },
    ],
  },
  {
    stem: "A pansystolic murmur at the apex radiating to the axilla suggests which valve lesion?",
    topic: "Valvular Disease",
    explanation:
      "Mitral regurgitation. Blood escapes into the left atrium throughout systole, hence the pansystolic quality, and the radiation follows the direction of the regurgitant jet toward the axilla. Chronic regurgitation causes progressive left atrial and ventricular dilatation.",
    choices: [
      { text: "Mitral regurgitation", isCorrect: true },
      { text: "Aortic stenosis", isCorrect: false },
      { text: "Tricuspid stenosis", isCorrect: false },
      { text: "Pulmonary stenosis", isCorrect: false },
    ],
  },
  {
    stem: "A patient with chest pain has ECG changes that improve when sitting forward, with a pericardial rub. What is the diagnosis?",
    topic: "Pericardial Disease",
    explanation:
      "Acute pericarditis. Pain that is pleuritic and relieved by sitting forward, a friction rub, and widespread saddle-shaped ST elevation with PR depression distinguish it from infarction — where ST elevation follows a coronary territory and is accompanied by reciprocal change.",
    choices: [
      { text: "Acute pericarditis", isCorrect: true },
      { text: "ST-elevation myocardial infarction", isCorrect: false },
      { text: "Aortic dissection", isCorrect: false },
      { text: "Oesophageal spasm", isCorrect: false },
    ],
  },
  {
    stem: "A hypotensive patient has raised JVP, muffled heart sounds and pulsus paradoxus. What is the diagnosis?",
    topic: "Pericardial Disease",
    explanation:
      "Cardiac tamponade — Beck's triad with pulsus paradoxus. Pericardial fluid under pressure prevents ventricular filling. It is a reversible cause of PEA arrest, and treatment is pericardiocentesis; fluids are a temporising measure only.",
    choices: [
      { text: "Cardiac tamponade", isCorrect: true },
      { text: "Tension pneumothorax", isCorrect: false },
      { text: "Massive pulmonary embolism", isCorrect: false },
      { text: "Septic shock", isCorrect: false },
    ],
  },
  {
    stem: "A patient describes sudden tearing chest pain radiating to the back, with unequal blood pressures between arms. What must be excluded urgently?",
    topic: "Vascular Emergencies",
    explanation:
      "Aortic dissection. It matters enormously because the management is opposite to that of acute coronary syndrome — anticoagulation and thrombolysis are catastrophic here. Blood pressure and heart rate are lowered aggressively, and imaging is urgent.",
    choices: [
      { text: "Aortic dissection", isCorrect: true },
      { text: "Anterior STEMI", isCorrect: false },
      { text: "Acute pericarditis", isCorrect: false },
      { text: "Pneumothorax", isCorrect: false },
    ],
  },
  {
    stem: "Which finding suggests infective endocarditis in a patient with fever and a new murmur?",
    topic: "Infective Endocarditis",
    explanation:
      "Peripheral stigmata such as splinter haemorrhages, Janeway lesions, Osler nodes and Roth spots, alongside positive blood cultures and vegetations on echocardiography. Fever with a new regurgitant murmur should prompt several sets of blood cultures before antibiotics are started.",
    choices: [
      { text: "Splinter haemorrhages, Janeway lesions and Osler nodes", isCorrect: true },
      { text: "Bilateral pitting oedema alone", isCorrect: false },
      { text: "Finger clubbing in isolation", isCorrect: false },
      { text: "A raised JVP alone", isCorrect: false },
    ],
  },
];

/* ═══════════════ PHARMACOLOGY ═══════════════ */

const DRUGS: Q[] = [
  {
    stem: "By what mechanism do ACE inhibitors lower blood pressure?",
    topic: "RAAS Agents",
    explanation:
      "They block conversion of angiotensin I to angiotensin II, reducing vasoconstriction and aldosterone-driven sodium retention. They also reduce cardiac remodelling, which is why they improve survival in heart failure rather than merely lowering pressure — the outcome benefit exceeds the haemodynamic effect.",
    choices: [
      { text: "They prevent formation of angiotensin II", isCorrect: true },
      { text: "They block beta-1 receptors in the heart", isCorrect: false },
      { text: "They inhibit L-type calcium channels", isCorrect: false },
      { text: "They block the sodium-potassium-chloride co-transporter", isCorrect: false },
    ],
  },
  {
    stem: "A patient on an ACE inhibitor develops a persistent dry cough. What explains this, and what is the alternative?",
    topic: "RAAS Agents",
    explanation:
      "ACE also degrades bradykinin, so inhibition allows bradykinin to accumulate in the airways and provoke cough. An angiotensin receptor blocker achieves similar benefit without affecting bradykinin, and is the standard substitution. The same mechanism underlies ACE inhibitor angioedema.",
    choices: [
      { text: "Bradykinin accumulation — switch to an ARB", isCorrect: true },
      { text: "Direct airway irritation — reduce the dose", isCorrect: false },
      { text: "Pulmonary oedema — add a diuretic", isCorrect: false },
      { text: "Hypokalaemia — supplement potassium", isCorrect: false },
    ],
  },
  {
    stem: "Which electrolyte abnormality should be monitored after starting an ACE inhibitor?",
    topic: "RAAS Agents",
    explanation:
      "Hyperkalaemia, because reduced aldosterone lowers potassium excretion. Creatinine should be checked at the same time, as ACE inhibitors reduce efferent arteriolar tone and can precipitate a rise — particularly in bilateral renal artery stenosis, where they are contraindicated.",
    choices: [
      { text: "Hyperkalaemia, alongside a rise in creatinine", isCorrect: true },
      { text: "Hypokalaemia", isCorrect: false },
      { text: "Hypercalcaemia", isCorrect: false },
      { text: "Hypernatraemia", isCorrect: false },
    ],
  },
  {
    stem: "How do beta-blockers reduce myocardial oxygen demand in angina?",
    topic: "Beta-Blockers",
    explanation:
      "By reducing heart rate and contractility. The slower rate also lengthens diastole, which is when the left ventricle is actually perfused — so beta-blockers both reduce demand and improve supply. That dual action is why they are first-line for stable angina.",
    choices: [
      { text: "They slow the heart and reduce contractility, also lengthening diastole", isCorrect: true },
      { text: "They dilate the coronary arteries directly", isCorrect: false },
      { text: "They reduce blood viscosity", isCorrect: false },
      { text: "They increase preload", isCorrect: false },
    ],
  },
  {
    stem: "Why must beta-blockers be introduced at a low dose and titrated slowly in chronic heart failure?",
    topic: "Beta-Blockers",
    explanation:
      "Their immediate negative inotropic effect can worsen failure, even though long-term they improve survival by reducing harmful sympathetic activation and remodelling. Starting low and going slow allows the beneficial adaptation without acute decompensation. They should not be started during acute decompensation.",
    choices: [
      { text: "The acute negative inotropic effect can worsen failure before benefit accrues", isCorrect: true },
      { text: "They cause immediate hyperkalaemia", isCorrect: false },
      { text: "They are nephrotoxic at high doses", isCorrect: false },
      { text: "They interact with all diuretics", isCorrect: false },
    ],
  },
  {
    stem: "Which class of calcium channel blocker is most cardioselective and slows AV conduction?",
    topic: "Calcium Channel Blockers",
    explanation:
      "The non-dihydropyridines — verapamil and diltiazem — act on cardiac tissue, slowing rate and AV conduction. Dihydropyridines such as amlodipine act mainly on vascular smooth muscle. Combining verapamil with a beta-blocker risks profound bradycardia and heart block.",
    choices: [
      { text: "Non-dihydropyridines (verapamil, diltiazem)", isCorrect: true },
      { text: "Dihydropyridines (amlodipine, nifedipine)", isCorrect: false },
      { text: "Both classes act identically on the AV node", isCorrect: false },
      { text: "Neither affects AV conduction", isCorrect: false },
    ],
  },
  {
    stem: "How does glyceryl trinitrate relieve anginal pain?",
    topic: "Nitrates",
    explanation:
      "Nitric oxide donation causes venodilatation, reducing preload and therefore ventricular wall tension and oxygen demand. The dominant effect is on veins rather than coronary arteries. Tolerance develops with continuous exposure, which is why a nitrate-free interval is built into long-acting regimens.",
    choices: [
      { text: "Venodilatation reduces preload and myocardial oxygen demand", isCorrect: true },
      { text: "It directly increases contractility", isCorrect: false },
      { text: "It blocks beta-1 receptors", isCorrect: false },
      { text: "It dissolves coronary thrombus", isCorrect: false },
    ],
  },
  {
    stem: "Which combination with nitrates is contraindicated because of the risk of profound hypotension?",
    topic: "Nitrates",
    explanation:
      "Phosphodiesterase-5 inhibitors such as sildenafil. Both potentiate the nitric oxide–cGMP pathway, and together they can cause catastrophic hypotension. Asking about these agents before giving nitrates for chest pain is a routine safety step that is easily forgotten.",
    choices: [
      { text: "Phosphodiesterase-5 inhibitors (e.g. sildenafil)", isCorrect: true },
      { text: "Aspirin", isCorrect: false },
      { text: "Atorvastatin", isCorrect: false },
      { text: "Metformin", isCorrect: false },
    ],
  },
  {
    stem: "Where in the nephron do loop diuretics act?",
    topic: "Diuretics",
    explanation:
      "The thick ascending limb of the loop of Henle, inhibiting the sodium-potassium-chloride co-transporter. This produces the most powerful diuresis available, at the cost of losing potassium, magnesium and calcium. Thiazides act more distally and are less potent.",
    choices: [
      { text: "The thick ascending limb, blocking the Na-K-2Cl co-transporter", isCorrect: true },
      { text: "The proximal convoluted tubule", isCorrect: false },
      { text: "The distal convoluted tubule", isCorrect: false },
      { text: "The collecting duct", isCorrect: false },
    ],
  },
  {
    stem: "A patient on furosemide develops muscle cramps and the ECG shows flattened T waves with U waves. What is the likely cause?",
    topic: "Diuretics",
    explanation:
      "Hypokalaemia from urinary potassium loss. It matters particularly in patients taking digoxin, since low potassium potentiates digoxin toxicity. Magnesium should also be checked — hypokalaemia is often refractory to replacement until magnesium is corrected.",
    choices: [
      { text: "Hypokalaemia", isCorrect: true },
      { text: "Hyperkalaemia", isCorrect: false },
      { text: "Hypercalcaemia", isCorrect: false },
      { text: "Hypernatraemia", isCorrect: false },
    ],
  },
  {
    stem: "Why does spironolactone improve survival in heart failure beyond its diuretic effect?",
    topic: "Diuretics",
    explanation:
      "Aldosterone antagonism reduces myocardial fibrosis and adverse remodelling. The survival benefit is attributed to these structural effects rather than to diuresis. Because it is potassium-sparing, potassium and renal function must be monitored, especially alongside an ACE inhibitor.",
    choices: [
      { text: "Aldosterone antagonism reduces myocardial fibrosis and remodelling", isCorrect: true },
      { text: "It produces a far greater diuresis than loop diuretics", isCorrect: false },
      { text: "It directly increases contractility", isCorrect: false },
      { text: "It lowers cholesterol", isCorrect: false },
    ],
  },
  {
    stem: "What is the mechanism of digoxin's positive inotropic effect?",
    topic: "Inotropes",
    explanation:
      "It inhibits the sodium-potassium ATPase, raising intracellular sodium and so reducing calcium extrusion through the sodium-calcium exchanger. The resulting rise in intracellular calcium strengthens contraction. It also increases vagal tone, which slows AV conduction — useful in atrial fibrillation.",
    choices: [
      { text: "Inhibition of Na-K ATPase, indirectly raising intracellular calcium", isCorrect: true },
      { text: "Beta-1 receptor agonism", isCorrect: false },
      { text: "Phosphodiesterase inhibition", isCorrect: false },
      { text: "Calcium channel blockade", isCorrect: false },
    ],
  },
  {
    stem: "Which finding suggests digoxin toxicity?",
    topic: "Inotropes",
    explanation:
      "Nausea, visual disturbance with yellow-green haloes, confusion, and arrhythmias — classically atrial tachycardia with AV block. Hypokalaemia, hypomagnesaemia and renal impairment all predispose, which is why diuretic co-prescription demands attention to electrolytes.",
    choices: [
      { text: "Nausea, yellow-green visual haloes and arrhythmia", isCorrect: true },
      { text: "Hypertension and tachycardia", isCorrect: false },
      { text: "Peripheral oedema and weight gain", isCorrect: false },
      { text: "Dry cough and angioedema", isCorrect: false },
    ],
  },
  {
    stem: "How does aspirin reduce thrombotic risk in coronary disease?",
    topic: "Antiplatelets & Anticoagulants",
    explanation:
      "It irreversibly inhibits cyclo-oxygenase-1 in platelets, blocking thromboxane A2 production and therefore aggregation. Because platelets cannot regenerate the enzyme, the effect lasts their entire lifespan of about a week — which is why aspirin is stopped well before surgery.",
    choices: [
      { text: "Irreversible COX-1 inhibition, blocking thromboxane A2", isCorrect: true },
      { text: "Direct thrombin inhibition", isCorrect: false },
      { text: "Vitamin K antagonism", isCorrect: false },
      { text: "Factor Xa inhibition", isCorrect: false },
    ],
  },
  {
    stem: "Which statin adverse effect requires urgent attention if a patient reports severe muscle pain with dark urine?",
    topic: "Lipid-Lowering Agents",
    explanation:
      "Rhabdomyolysis. Creatine kinase should be measured and the statin stopped, since myoglobinuria can cause acute kidney injury. Risk rises with high doses, with fibrates, and with CYP3A4 inhibitors such as macrolides — a genuinely common and avoidable interaction.",
    choices: [
      { text: "Rhabdomyolysis — stop the statin and check creatine kinase", isCorrect: true },
      { text: "Simple benign myalgia — continue unchanged", isCorrect: false },
      { text: "Peripheral neuropathy — add vitamin B6", isCorrect: false },
      { text: "Gout — start allopurinol", isCorrect: false },
    ],
  },
];

/* ═══════════════ SEED ═══════════════ */

async function seedSet(opts: {
  categorySlug: string;
  slug: string;
  title: string;
  description: string;
  kind: string;
  timeLimitSeconds: number | null;
  difficulty: string;
  questions: Q[];
}) {
  const category = await prisma.quizCategory.findUnique({ where: { slug: opts.categorySlug } });
  if (!category) {
    console.log(`  ✗ Category "${opts.categorySlug}" not found — run seed-medical-taxonomy.ts first.`);
    return;
  }

  const quiz = await prisma.quiz.upsert({
    where: { slug: opts.slug },
    create: {
      slug: opts.slug,
      title: opts.title,
      description: opts.description,
      categoryId: category.id,
      kind: opts.kind,
      timeLimitSeconds: opts.timeLimitSeconds,
      passThreshold: 70,
      difficulty: opts.difficulty,
      published: true,
    },
    update: {
      title: opts.title,
      description: opts.description,
      categoryId: category.id,
      kind: opts.kind,
      timeLimitSeconds: opts.timeLimitSeconds,
    },
  });

  await prisma.question.deleteMany({ where: { quizId: quiz.id } });

  let order = 0;
  for (const q of opts.questions) {
    await prisma.question.create({
      data: {
        quizId: quiz.id,
        type: "SINGLE",
        stem: q.stem,
        topic: q.topic,
        explanation: q.explanation,
        points: 1,
        order: order++,
        choices: { create: q.choices.map((c, i) => ({ text: c.text, isCorrect: c.isCorrect, order: i })) },
      },
    });
  }

  console.log(`  ✓ ${opts.title} — ${opts.questions.length} questions`);
}

async function main() {
  console.log("Seeding Cardiovascular (physiology → cardiology → drugs)…\n");

  await seedSet({
    categorySlug: "fs-cardiovascular-physiology",
    slug: "cardiovascular-physiology-set-1",
    title: "Cardiovascular Physiology — Practice Set 1",
    description:
      "Fifteen questions on cardiac output, the Frank-Starling relationship, preload and afterload, the cardiac cycle, conduction, and blood pressure regulation. The foundation the cardiology and drug sets build on.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Foundational",
    questions: PHYSIOLOGY,
  });

  await seedSet({
    categorySlug: "cs-cardiology",
    slug: "cardiology-clinical-set-1",
    title: "Cardiology — Clinical Practice Set 1",
    description:
      "Fifteen questions applying cardiovascular physiology to real presentations: acute coronary syndrome and ECG territories, arrhythmias, heart failure, valvular disease, pericardial disease and vascular emergencies.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Intermediate",
    questions: CARDIOLOGY,
  });

  await seedSet({
    categorySlug: "fs-cardiovascular-drugs",
    slug: "cardiovascular-drugs-set-1",
    title: "Cardiovascular Drugs — Practice Set 1",
    description:
      "Fifteen questions on the agents you will actually prescribe: ACE inhibitors and ARBs, beta-blockers, calcium channel blockers, nitrates, diuretics, digoxin, antiplatelets and statins — with the mechanism behind each.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Intermediate",
    questions: DRUGS,
  });

  await seedSet({
    categorySlug: "cs-cardiology",
    slug: "cardiovascular-comprehensive-exam-1",
    title: "Cardiovascular — Comprehensive Timed Exam",
    description:
      "All forty-five items across physiology, cardiology and pharmacology under exam conditions: 55 minutes, feedback withheld until you submit. Sit this once the three practice sets feel comfortable.",
    kind: "EXAM",
    timeLimitSeconds: 55 * 60,
    difficulty: "Advanced",
    questions: [...PHYSIOLOGY, ...CARDIOLOGY, ...DRUGS],
  });

  console.log("\nDone. Editable in Admin → Question Bank.");
  console.log("⚠ Review clinical thresholds against your local guideline.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
