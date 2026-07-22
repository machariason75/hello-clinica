/**
 * CONTENT WAVE 1 — Basic Life Support & Advanced Cardiac Life Support
 *
 * Two complete practice sets, 30 questions each, with full rationales.
 *
 * These are ORIGINAL questions written in exam style. They follow the widely
 * taught resuscitation sequences (compression rate and depth, the shockable /
 * non-shockable split, drug timing, post-arrest care). Resuscitation guidelines
 * are revised periodically — review this content against your current national
 * guideline before relying on it for certification, and edit anything that has
 * moved. Everything here is editable in Admin → Question Bank → the quiz editor.
 *
 * Run:  npx tsx prisma/seed-acls-bls.ts
 * Safe to re-run — upserts by slug, never duplicates.
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Q = {
  stem: string;
  topic: string;
  explanation: string;
  choices: { text: string; isCorrect: boolean }[];
};

/* ══════════════════════════ BLS ══════════════════════════ */

const BLS: Q[] = [
  {
    stem: "You find an adult collapsed and unresponsive in a corridor. After confirming the scene is safe and the person does not respond, what should you do next?",
    topic: "Initial Assessment",
    explanation:
      "Activate emergency response and get a defibrillator before starting compressions. In adults, the commonest cause of sudden collapse is a shockable cardiac rhythm, and survival falls with every minute defibrillation is delayed. Checking a pulse first, or starting compressions before calling for help, both delay the one intervention most likely to restore circulation.",
    choices: [
      { text: "Activate the emergency response system and send for an AED", isCorrect: true },
      { text: "Begin rescue breathing immediately", isCorrect: false },
      { text: "Check for a carotid pulse for a full 30 seconds", isCorrect: false },
      { text: "Move the person to a bed before assessing further", isCorrect: false },
    ],
  },
  {
    stem: "What is the recommended rate of chest compressions for an adult in cardiac arrest?",
    topic: "Compressions",
    explanation:
      "100 to 120 compressions per minute. Slower than this produces inadequate coronary and cerebral perfusion; faster than this shortens diastole so the heart does not refill, and compression depth tends to deteriorate. The window is narrow on purpose.",
    choices: [
      { text: "100 to 120 per minute", isCorrect: true },
      { text: "60 to 80 per minute", isCorrect: false },
      { text: "80 to 100 per minute", isCorrect: false },
      { text: "As fast as physically possible", isCorrect: false },
    ],
  },
  {
    stem: "What is the correct compression depth for an average adult?",
    topic: "Compressions",
    explanation:
      "At least 2 inches (5 cm) but not more than 2.4 inches (6 cm). Shallow compressions fail to generate perfusion pressure. Excessive depth increases the risk of injury without improving outcome, which is why an upper bound is specified rather than 'as deep as possible'.",
    choices: [
      { text: "At least 2 inches (5 cm), not exceeding 2.4 inches (6 cm)", isCorrect: true },
      { text: "About 1 inch (2.5 cm)", isCorrect: false },
      { text: "At least 3 inches (7.5 cm)", isCorrect: false },
      { text: "Depth does not matter provided the rate is correct", isCorrect: false },
    ],
  },
  {
    stem: "A single rescuer is performing CPR on an adult. What compression-to-ventilation ratio should be used?",
    topic: "CPR Ratios",
    explanation:
      "30 compressions to 2 breaths. This ratio maximises the proportion of time spent compressing while still providing ventilation. Adults in sudden arrest usually have oxygenated blood in circulation initially, so perfusion matters more than ventilation in the early minutes.",
    choices: [
      { text: "30:2", isCorrect: true },
      { text: "15:2", isCorrect: false },
      { text: "5:1", isCorrect: false },
      { text: "50:2", isCorrect: false },
    ],
  },
  {
    stem: "Two rescuers are performing CPR on a child who has not reached puberty. What ratio should they use?",
    topic: "CPR Ratios",
    explanation:
      "15:2 for two-rescuer paediatric CPR. Paediatric arrest is far more often respiratory in origin than cardiac, so more frequent ventilation is beneficial. A single rescuer still uses 30:2, because switching hand position constantly for one person costs more than the extra breaths gain.",
    choices: [
      { text: "15:2", isCorrect: true },
      { text: "30:2", isCorrect: false },
      { text: "10:2", isCorrect: false },
      { text: "20:2", isCorrect: false },
    ],
  },
  {
    stem: "Why is full chest recoil between compressions important?",
    topic: "Compressions",
    explanation:
      "Recoil allows the chest to expand, generating the negative intrathoracic pressure that draws blood back into the heart. Leaning on the chest between compressions prevents refilling, so the next compression ejects less blood. It is one of the commonest and most correctable CPR faults.",
    choices: [
      { text: "It allows venous return, so the heart refills before the next compression", isCorrect: true },
      { text: "It prevents rib fractures", isCorrect: false },
      { text: "It gives the rescuer time to rest", isCorrect: false },
      { text: "It improves the accuracy of the pulse check", isCorrect: false },
    ],
  },
  {
    stem: "How long should a pulse check take in an unresponsive adult who is not breathing normally?",
    topic: "Initial Assessment",
    explanation:
      "No more than 10 seconds. Pulse checks are unreliable even among trained clinicians, and time spent searching is time without compressions. If you are not certain a pulse is present within 10 seconds, start CPR — the harm of compressing a beating heart is far less than the harm of not compressing an arrested one.",
    choices: [
      { text: "No more than 10 seconds", isCorrect: true },
      { text: "At least 30 seconds to be certain", isCorrect: false },
      { text: "A full 60 seconds", isCorrect: false },
      { text: "Until a pulse is definitely felt", isCorrect: false },
    ],
  },
  {
    stem: "An AED arrives during CPR on an adult. What should happen?",
    topic: "Defibrillation",
    explanation:
      "Use it as soon as it is available. Compressions should continue while pads are applied, pausing only for rhythm analysis and shock delivery. Every minute without defibrillation in a shockable rhythm reduces survival substantially, so the AED does not wait for a convenient moment.",
    choices: [
      { text: "Apply the pads and use it immediately, minimising interruption to compressions", isCorrect: true },
      { text: "Finish five full cycles of CPR before applying it", isCorrect: false },
      { text: "Wait until advanced providers arrive to use it", isCorrect: false },
      { text: "Only use it if the person is known to have heart disease", isCorrect: false },
    ],
  },
  {
    stem: "Which of the following is a shockable rhythm?",
    topic: "Defibrillation",
    explanation:
      "Ventricular fibrillation is shockable, as is pulseless ventricular tachycardia. Both represent disorganised or ineffective electrical activity that defibrillation can terminate. Asystole and pulseless electrical activity are not shockable — there is no chaotic rhythm to reset, so the treatment is compressions and adrenaline while the cause is sought.",
    choices: [
      { text: "Ventricular fibrillation", isCorrect: true },
      { text: "Asystole", isCorrect: false },
      { text: "Pulseless electrical activity", isCorrect: false },
      { text: "Sinus bradycardia with a pulse", isCorrect: false },
    ],
  },
  {
    stem: "How often should rescuers swap the role of compressor during prolonged CPR?",
    topic: "CPR Quality",
    explanation:
      "About every 2 minutes, ideally during rhythm analysis so no additional pause is created. Compression quality measurably declines within a couple of minutes, usually before the rescuer feels tired. Swapping on a fixed schedule protects quality rather than waiting for someone to notice fatigue.",
    choices: [
      { text: "Every 2 minutes, ideally during rhythm analysis", isCorrect: true },
      { text: "Every 10 minutes", isCorrect: false },
      { text: "Only when the compressor says they are tired", isCorrect: false },
      { text: "Swapping is not recommended once CPR has started", isCorrect: false },
    ],
  },
  {
    stem: "An adult is choking, coughing forcefully, and able to speak. What is the correct action?",
    topic: "Choking",
    explanation:
      "Encourage them to keep coughing and stay with them. A forceful cough moves more air than any manoeuvre you can perform. Intervening during effective coughing risks converting a partial obstruction into a complete one. Act only if the cough becomes weak, they cannot speak, or they stop breathing.",
    choices: [
      { text: "Encourage continued coughing and monitor closely", isCorrect: true },
      { text: "Begin abdominal thrusts immediately", isCorrect: false },
      { text: "Perform a blind finger sweep", isCorrect: false },
      { text: "Lay them flat and start chest compressions", isCorrect: false },
    ],
  },
  {
    stem: "A choking adult becomes unresponsive. What should you do?",
    topic: "Choking",
    explanation:
      "Lower them to the ground and begin CPR, checking the mouth for a visible object each time you open the airway to give breaths. Chest compressions generate airway pressure that can dislodge an obstruction. Blind finger sweeps are avoided because they can push the object further in.",
    choices: [
      { text: "Begin CPR, looking in the mouth before each set of breaths", isCorrect: true },
      { text: "Continue abdominal thrusts on the floor", isCorrect: false },
      { text: "Perform a blind finger sweep to find the object", isCorrect: false },
      { text: "Wait for advanced help before touching them", isCorrect: false },
    ],
  },
  {
    stem: "What is the correct hand position for chest compressions in an adult?",
    topic: "Compressions",
    explanation:
      "The heel of one hand on the lower half of the sternum, with the second hand on top. Too high wastes force on the manubrium; too low risks the xiphoid and abdominal organs. The lower sternum sits directly over the ventricles.",
    choices: [
      { text: "Heel of the hand on the lower half of the sternum", isCorrect: true },
      { text: "Over the upper third of the sternum", isCorrect: false },
      { text: "Directly over the xiphoid process", isCorrect: false },
      { text: "On the left side of the chest over the apex beat", isCorrect: false },
    ],
  },
  {
    stem: "How is the compression technique modified for an infant when a single rescuer is present?",
    topic: "Paediatric BLS",
    explanation:
      "Two fingers just below the nipple line, compressing about one third of the chest depth. The two-thumb encircling technique is preferred when two rescuers are present because it generates better pressure, but it is impractical alone since it occupies both hands.",
    choices: [
      { text: "Two fingers just below the nipple line, one third of chest depth", isCorrect: true },
      { text: "Two hands as for an adult, to a depth of 5 cm", isCorrect: false },
      { text: "One hand on the upper sternum", isCorrect: false },
      { text: "Compressions are not performed on infants", isCorrect: false },
    ],
  },
  {
    stem: "What does 'compression fraction' mean, and what should it be?",
    topic: "CPR Quality",
    explanation:
      "It is the proportion of resuscitation time actually spent compressing, and it should be at least 60% — higher is better. Every pause allows coronary perfusion pressure to fall, and it takes several compressions to build it back up. Minimising interruptions is one of the strongest predictors of survival.",
    choices: [
      { text: "The proportion of time spent compressing; aim for at least 60%", isCorrect: true },
      { text: "The percentage of compressions delivered at the correct depth", isCorrect: false },
      { text: "The ratio of compressions to breaths", isCorrect: false },
      { text: "The fraction of rescuers trained in CPR", isCorrect: false },
    ],
  },
  {
    stem: "An unresponsive adult is taking occasional slow gasping breaths. How should this be interpreted?",
    topic: "Initial Assessment",
    explanation:
      "Agonal gasping is a sign of cardiac arrest, not of breathing. It is a brainstem reflex and does not provide effective ventilation. Mistaking it for breathing is a well-recognised cause of delayed CPR, both by bystanders and over the phone.",
    choices: [
      { text: "As cardiac arrest — begin CPR", isCorrect: true },
      { text: "As adequate breathing — place in the recovery position", isCorrect: false },
      { text: "As a sign of recovery — continue to observe", isCorrect: false },
      { text: "As airway obstruction — perform abdominal thrusts", isCorrect: false },
    ],
  },
  {
    stem: "Where should AED pads be placed on an adult?",
    topic: "Defibrillation",
    explanation:
      "Anterolateral placement: one pad below the right clavicle, the other on the left mid-axillary line below the armpit. This positions the heart between the pads so current passes through the myocardium. Placing both pads close together on the front wastes current across the chest wall.",
    choices: [
      { text: "Below the right clavicle and on the left mid-axillary line", isCorrect: true },
      { text: "Both pads side by side on the upper chest", isCorrect: false },
      { text: "One on the abdomen and one on the back", isCorrect: false },
      { text: "Both pads over the left chest", isCorrect: false },
    ],
  },
  {
    stem: "A patient in cardiac arrest has a visible transdermal medication patch where an AED pad must go. What should you do?",
    topic: "Defibrillation",
    explanation:
      "Remove the patch, wipe the area, and place the pad. A patch can block current transmission and may cause arcing or a small burn. Removal takes seconds and is done with a gloved hand to avoid absorbing the drug yourself.",
    choices: [
      { text: "Remove the patch, wipe the skin dry, then apply the pad", isCorrect: true },
      { text: "Place the pad directly over the patch", isCorrect: false },
      { text: "Place both pads on the back instead", isCorrect: false },
      { text: "Withhold defibrillation entirely", isCorrect: false },
    ],
  },
  {
    stem: "An adult in cardiac arrest is lying on a wet floor. What is the priority before defibrillation?",
    topic: "Safety",
    explanation:
      "Move them to a dry surface or dry the chest, because water conducts current away from the heart and creates a hazard for rescuers. This is a brief, deliberate pause — not a reason to withhold defibrillation, which remains time-critical.",
    choices: [
      { text: "Move them to a dry area or dry the chest before applying pads", isCorrect: true },
      { text: "Defibrillate immediately regardless of the water", isCorrect: false },
      { text: "Withhold defibrillation and give compressions only", isCorrect: false },
      { text: "Wait for the floor to dry naturally", isCorrect: false },
    ],
  },
  {
    stem: "What is the first link in the adult out-of-hospital chain of survival?",
    topic: "Chain of Survival",
    explanation:
      "Recognition of arrest and activation of the emergency response system. Nothing else in the chain can begin until someone identifies that an arrest is occurring and summons help. The remaining links — early CPR, rapid defibrillation, advanced care, and post-arrest care — all depend on it.",
    choices: [
      { text: "Recognition of cardiac arrest and activation of emergency response", isCorrect: true },
      { text: "Advanced airway placement", isCorrect: false },
      { text: "Administration of adrenaline", isCorrect: false },
      { text: "Transport to hospital", isCorrect: false },
    ],
  },
  {
    stem: "A rescuer is untrained or unwilling to give rescue breaths to an adult in cardiac arrest. What should they do?",
    topic: "CPR Quality",
    explanation:
      "Perform compression-only CPR. In adult sudden cardiac arrest, compression-only CPR by a bystander produces outcomes comparable to conventional CPR in the first minutes, and it is vastly better than doing nothing. Removing the barrier of mouth-to-mouth increases the number of people willing to act.",
    choices: [
      { text: "Perform continuous compressions without breaths", isCorrect: true },
      { text: "Do nothing until trained help arrives", isCorrect: false },
      { text: "Give breaths only, without compressions", isCorrect: false },
      { text: "Perform abdominal thrusts instead", isCorrect: false },
    ],
  },
  {
    stem: "How long should each rescue breath take, and what is the endpoint?",
    topic: "Ventilation",
    explanation:
      "About one second per breath, delivering just enough volume to produce visible chest rise. Larger or faster breaths raise intrathoracic pressure, reducing venous return and cardiac output, and increase gastric inflation with its risk of regurgitation and aspiration.",
    choices: [
      { text: "About 1 second, enough to make the chest visibly rise", isCorrect: true },
      { text: "3 to 4 seconds, as forcefully as possible", isCorrect: false },
      { text: "As fast as possible to minimise the pause", isCorrect: false },
      { text: "Until the abdomen visibly distends", isCorrect: false },
    ],
  },
  {
    stem: "Once an advanced airway is in place during adult CPR, how should compressions and ventilations be delivered?",
    topic: "Ventilation",
    explanation:
      "Compressions become continuous, with ventilation delivered separately at roughly one breath every 6 seconds (about 10 per minute). A cuffed advanced airway protects against gastric inflation, so there is no longer a reason to pause compressions for breaths.",
    choices: [
      { text: "Continuous compressions with one breath about every 6 seconds", isCorrect: true },
      { text: "Continue with 30:2 exactly as before", isCorrect: false },
      { text: "Stop ventilation entirely", isCorrect: false },
      { text: "Give one breath every 2 seconds", isCorrect: false },
    ],
  },
  {
    stem: "A patient is unresponsive but breathing normally with a palpable pulse. What is the appropriate action?",
    topic: "Initial Assessment",
    explanation:
      "Place them in the recovery position, monitor breathing continuously, and get help. The recovery position maintains a patent airway and allows secretions to drain. Starting CPR on a perfusing patient is inappropriate, but they must be watched closely in case they deteriorate.",
    choices: [
      { text: "Place them in the recovery position and monitor breathing", isCorrect: true },
      { text: "Begin chest compressions", isCorrect: false },
      { text: "Apply an AED and deliver a shock", isCorrect: false },
      { text: "Perform abdominal thrusts", isCorrect: false },
    ],
  },
  {
    stem: "Why is minimising pre-shock pause important?",
    topic: "Defibrillation",
    explanation:
      "Coronary perfusion pressure falls rapidly the moment compressions stop, and a well-perfused myocardium is far more likely to respond to a shock. Keeping the pause between the last compression and shock delivery as short as possible measurably improves the chance of successful defibrillation.",
    choices: [
      { text: "Coronary perfusion falls when compressions stop, reducing shock success", isCorrect: true },
      { text: "It reduces the risk of damaging the defibrillator", isCorrect: false },
      { text: "It conserves battery life", isCorrect: false },
      { text: "It prevents the rhythm from changing", isCorrect: false },
    ],
  },
  {
    stem: "Immediately after a shock is delivered, what should happen?",
    topic: "Defibrillation",
    explanation:
      "Resume compressions immediately for 2 minutes before reassessing the rhythm. Even when a shock is successful, the heart rarely produces a perfusing output straight away. Pausing to check for a pulse wastes the crucial post-shock minutes when compressions support the recovering myocardium.",
    choices: [
      { text: "Resume compressions immediately and continue for 2 minutes", isCorrect: true },
      { text: "Check for a pulse for 30 seconds before doing anything", isCorrect: false },
      { text: "Deliver two further shocks in quick succession", isCorrect: false },
      { text: "Wait for the AED to re-analyse before touching the patient", isCorrect: false },
    ],
  },
  {
    stem: "An adult collapses in a public place and a bystander begins CPR before the ambulance arrives. What is the principal benefit?",
    topic: "Chain of Survival",
    explanation:
      "Bystander CPR maintains some coronary and cerebral perfusion, roughly doubling or tripling the chance of survival. It buys time — keeping the rhythm shockable and the brain viable — until a defibrillator arrives.",
    choices: [
      { text: "It maintains perfusion and substantially increases survival", isCorrect: true },
      { text: "It usually restarts the heart on its own", isCorrect: false },
      { text: "It replaces the need for defibrillation", isCorrect: false },
      { text: "It has no proven benefit before professional help arrives", isCorrect: false },
    ],
  },
  {
    stem: "Which finding most reliably indicates the need to begin CPR in an adult?",
    topic: "Initial Assessment",
    explanation:
      "Unresponsiveness together with absent or abnormal breathing. These two findings are quick, reliable and can be assessed by anyone. Waiting for pulse confirmation, ECG changes or pupil signs delays treatment for no diagnostic gain.",
    choices: [
      { text: "Unresponsive with absent or abnormal breathing", isCorrect: true },
      { text: "Dilated pupils", isCorrect: false },
      { text: "Cold peripheries", isCorrect: false },
      { text: "A documented history of heart disease", isCorrect: false },
    ],
  },
  {
    stem: "During two-rescuer adult CPR, what is the role of the second rescuer while the first compresses?",
    topic: "Team Dynamics",
    explanation:
      "Manage the airway and deliver ventilations, operate the AED, and prepare to take over compressions at the next 2-minute cycle. Clear role allocation prevents both rescuers doing the same task while something essential goes unattended.",
    choices: [
      { text: "Manage the airway, ventilate, operate the AED, and prepare to swap", isCorrect: true },
      { text: "Take a radial pulse continuously throughout", isCorrect: false },
      { text: "Record observations and take no active part", isCorrect: false },
      { text: "Perform simultaneous abdominal compressions", isCorrect: false },
    ],
  },
  {
    stem: "A pregnant woman in the third trimester is in cardiac arrest. What modification improves the effectiveness of CPR?",
    topic: "Special Situations",
    explanation:
      "Manual left uterine displacement relieves aortocaval compression by the gravid uterus, improving venous return and therefore cardiac output during compressions. Compression technique and defibrillation are otherwise unchanged — and defibrillation is safe in pregnancy.",
    choices: [
      { text: "Manual left uterine displacement during compressions", isCorrect: true },
      { text: "Reduce compression depth by half", isCorrect: false },
      { text: "Avoid defibrillation because of risk to the fetus", isCorrect: false },
      { text: "Perform compressions on the upper sternum only", isCorrect: false },
    ],
  },
];

/* ══════════════════════════ ACLS ══════════════════════════ */

const ACLS: Q[] = [
  {
    stem: "A monitored patient develops ventricular fibrillation. After confirming arrest and starting compressions, what is the single most important next intervention?",
    topic: "Cardiac Arrest Algorithm",
    explanation:
      "Immediate defibrillation. Ventricular fibrillation is a shockable rhythm and the probability of successful conversion falls with every minute of delay. No drug in the algorithm substitutes for early defibrillation — adrenaline and antiarrhythmics support it rather than replace it.",
    choices: [
      { text: "Defibrillate as soon as the device is ready", isCorrect: true },
      { text: "Give adrenaline 1 mg IV first", isCorrect: false },
      { text: "Secure an advanced airway before anything else", isCorrect: false },
      { text: "Obtain a 12-lead ECG to confirm the rhythm", isCorrect: false },
    ],
  },
  {
    stem: "What is the recommended adult dose and interval for adrenaline (epinephrine) in cardiac arrest?",
    topic: "Pharmacology",
    explanation:
      "1 mg IV or IO every 3 to 5 minutes. Its alpha-adrenergic vasoconstriction raises aortic diastolic pressure and therefore coronary perfusion during compressions. In non-shockable rhythms it is given as early as feasible; in shockable rhythms it follows the initial shocks.",
    choices: [
      { text: "1 mg IV/IO every 3 to 5 minutes", isCorrect: true },
      { text: "10 mg IV once only", isCorrect: false },
      { text: "1 mg IV every 30 seconds", isCorrect: false },
      { text: "0.1 mg IV every 10 minutes", isCorrect: false },
    ],
  },
  {
    stem: "A patient remains in ventricular fibrillation after three shocks and adrenaline. Which antiarrhythmic is indicated, and at what first dose?",
    topic: "Pharmacology",
    explanation:
      "Amiodarone 300 mg IV/IO as the first dose, with 150 mg available as a second. Lidocaine is an acceptable alternative where amiodarone is unavailable. These agents are for shock-refractory VF or pulseless VT — they are not first-line, and they do not replace defibrillation.",
    choices: [
      { text: "Amiodarone 300 mg IV/IO", isCorrect: true },
      { text: "Amiodarone 50 mg IV/IO", isCorrect: false },
      { text: "Atropine 1 mg IV/IO", isCorrect: false },
      { text: "Adenosine 6 mg IV/IO", isCorrect: false },
    ],
  },
  {
    stem: "The monitor shows asystole. What is the correct management?",
    topic: "Non-Shockable Rhythms",
    explanation:
      "High-quality CPR, adrenaline as soon as possible, and an active search for reversible causes. Asystole is not shockable — there is no organised electrical activity for a shock to terminate, and defibrillating it causes harm without benefit. Confirm it is genuine by checking leads and gain.",
    choices: [
      { text: "Continue CPR, give adrenaline, and search for reversible causes", isCorrect: true },
      { text: "Defibrillate immediately at maximum energy", isCorrect: false },
      { text: "Give amiodarone 300 mg then shock", isCorrect: false },
      { text: "Perform synchronised cardioversion", isCorrect: false },
    ],
  },
  {
    stem: "A patient has an organised rhythm on the monitor but no palpable pulse. What is this, and how is it treated?",
    topic: "Non-Shockable Rhythms",
    explanation:
      "Pulseless electrical activity. It is treated with CPR and adrenaline while the underlying cause is identified and corrected. PEA almost always has a reversible cause, so the search — hypoxia, hypovolaemia, tamponade, tension pneumothorax and the rest — is the treatment, not an afterthought.",
    choices: [
      { text: "Pulseless electrical activity — CPR, adrenaline, and treat the cause", isCorrect: true },
      { text: "Ventricular fibrillation — defibrillate", isCorrect: false },
      { text: "Normal sinus rhythm — no action needed", isCorrect: false },
      { text: "Asystole — withhold all drugs", isCorrect: false },
    ],
  },
  {
    stem: "Which of the following is a reversible cause of cardiac arrest classified among the 'Hs'?",
    topic: "Reversible Causes",
    explanation:
      "Hypovolaemia. The Hs are hypovolaemia, hypoxia, hydrogen ion excess (acidosis), hypo- or hyperkalaemia, and hypothermia. The Ts are tension pneumothorax, tamponade, toxins, and thrombosis (coronary or pulmonary). Working through both lists systematically is what turns a PEA arrest around.",
    choices: [
      { text: "Hypovolaemia", isCorrect: true },
      { text: "Tension pneumothorax", isCorrect: false },
      { text: "Cardiac tamponade", isCorrect: false },
      { text: "Pulmonary thrombosis", isCorrect: false },
    ],
  },
  {
    stem: "During CPR, end-tidal CO2 is persistently below 10 mmHg. What does this suggest?",
    topic: "Monitoring",
    explanation:
      "Compression quality is inadequate. End-tidal CO2 reflects pulmonary blood flow, which during arrest depends almost entirely on compressions. A persistently low value should prompt you to check depth, rate, recoil and leaning before assuming the situation is hopeless.",
    choices: [
      { text: "Compression quality is poor and should be reassessed", isCorrect: true },
      { text: "The patient has achieved return of spontaneous circulation", isCorrect: false },
      { text: "The airway is correctly positioned and all is well", isCorrect: false },
      { text: "Adrenaline should be withheld", isCorrect: false },
    ],
  },
  {
    stem: "During CPR, end-tidal CO2 suddenly rises from 12 to 40 mmHg. What is the most likely explanation?",
    topic: "Monitoring",
    explanation:
      "Return of spontaneous circulation. Restored cardiac output increases pulmonary blood flow, so far more CO2 is delivered to the lungs and exhaled. An abrupt sustained rise is a strong early indicator of ROSC — check for a pulse at the next rhythm analysis rather than interrupting compressions immediately.",
    choices: [
      { text: "Return of spontaneous circulation", isCorrect: true },
      { text: "Oesophageal intubation", isCorrect: false },
      { text: "Worsening compression quality", isCorrect: false },
      { text: "Development of asystole", isCorrect: false },
    ],
  },
  {
    stem: "A stable patient has a narrow-complex regular tachycardia at 180 beats per minute. Vagal manoeuvres have failed. What is the next step?",
    topic: "Tachycardia",
    explanation:
      "Adenosine 6 mg by rapid IV push, followed by a 12 mg dose if needed. Its very short half-life means it must be given fast into a large vein and flushed immediately. It transiently blocks the AV node, terminating re-entrant SVT or revealing the underlying atrial rhythm.",
    choices: [
      { text: "Adenosine 6 mg rapid IV push with an immediate flush", isCorrect: true },
      { text: "Immediate unsynchronised defibrillation", isCorrect: false },
      { text: "Adrenaline 1 mg IV", isCorrect: false },
      { text: "Atropine 1 mg IV", isCorrect: false },
    ],
  },
  {
    stem: "A patient with a tachyarrhythmia is hypotensive, confused, and has ischaemic chest pain. What is the appropriate management?",
    topic: "Tachycardia",
    explanation:
      "Immediate synchronised cardioversion. Hypotension, altered mental state, ischaemic chest pain, and signs of shock or heart failure define an unstable tachyarrhythmia. Electricity works faster and more reliably than drugs once a patient is compromised.",
    choices: [
      { text: "Synchronised cardioversion without delay", isCorrect: true },
      { text: "A trial of oral beta-blockade", isCorrect: false },
      { text: "Observation with repeat ECG in one hour", isCorrect: false },
      { text: "Adenosine followed by reassessment in 20 minutes", isCorrect: false },
    ],
  },
  {
    stem: "What distinguishes synchronised cardioversion from defibrillation?",
    topic: "Electrical Therapy",
    explanation:
      "Synchronised cardioversion times the shock to the R wave, avoiding the relative refractory period of the T wave. An unsynchronised shock landing on the T wave can precipitate ventricular fibrillation — the 'R on T' phenomenon. Defibrillation is deliberately unsynchronised because in VF there is no R wave to synchronise with.",
    choices: [
      { text: "Cardioversion delivers the shock timed to the R wave", isCorrect: true },
      { text: "Cardioversion always uses higher energy", isCorrect: false },
      { text: "Defibrillation is only used in conscious patients", isCorrect: false },
      { text: "There is no practical difference between them", isCorrect: false },
    ],
  },
  {
    stem: "A patient has symptomatic bradycardia at 38 beats per minute with hypotension. What is the first-line drug?",
    topic: "Bradycardia",
    explanation:
      "Atropine 1 mg IV, repeated every 3 to 5 minutes to a maximum of 3 mg. It blocks vagal tone at the AV node. If atropine fails, the next steps are transcutaneous pacing or an infusion of dopamine or adrenaline. Atropine is often ineffective in high-degree block, where pacing should not be delayed.",
    choices: [
      { text: "Atropine 1 mg IV, repeatable to a maximum of 3 mg", isCorrect: true },
      { text: "Adenosine 6 mg rapid IV push", isCorrect: false },
      { text: "Amiodarone 300 mg IV", isCorrect: false },
      { text: "Synchronised cardioversion", isCorrect: false },
    ],
  },
  {
    stem: "A patient with third-degree (complete) heart block remains hypotensive after 3 mg of atropine. What is the next step?",
    topic: "Bradycardia",
    explanation:
      "Transcutaneous pacing, with an adrenaline or dopamine infusion as an alternative, and arrangements for transvenous pacing. In complete heart block the escape rhythm arises below the AV node, so vagal blockade with atropine has little effect — which is why pacing should not be delayed by repeated doses.",
    choices: [
      { text: "Transcutaneous pacing, or a chronotropic infusion", isCorrect: true },
      { text: "A further 3 mg of atropine", isCorrect: false },
      { text: "Adenosine 12 mg IV", isCorrect: false },
      { text: "Observation alone", isCorrect: false },
    ],
  },
  {
    stem: "Which route is preferred for drug administration during cardiac arrest when intravenous access cannot be obtained quickly?",
    topic: "Vascular Access",
    explanation:
      "Intraosseous access. It is fast, reliable in shock when veins have collapsed, and accepts all resuscitation drugs at standard doses. The endotracheal route is a distant last resort with erratic absorption and is no longer routinely recommended.",
    choices: [
      { text: "Intraosseous", isCorrect: true },
      { text: "Endotracheal", isCorrect: false },
      { text: "Intramuscular", isCorrect: false },
      { text: "Subcutaneous", isCorrect: false },
    ],
  },
  {
    stem: "After return of spontaneous circulation, what oxygen target is appropriate?",
    topic: "Post-Arrest Care",
    explanation:
      "Titrate oxygen to a saturation of about 92 to 98%, avoiding sustained hyperoxia. Excess oxygen after arrest increases oxidative injury to the reperfused brain and myocardium. The instinct to leave the patient on 100% is understandable but should be corrected as soon as saturations allow.",
    choices: [
      { text: "Titrate to about 92–98%, avoiding prolonged hyperoxia", isCorrect: true },
      { text: "Maintain 100% oxygen indefinitely", isCorrect: false },
      { text: "Target a saturation of 85%", isCorrect: false },
      { text: "Remove all supplemental oxygen immediately", isCorrect: false },
    ],
  },
  {
    stem: "A patient remains comatose after return of spontaneous circulation. Which intervention improves neurological outcome?",
    topic: "Post-Arrest Care",
    explanation:
      "Targeted temperature management — actively controlling temperature in the region of 32 to 36°C and, crucially, preventing fever. Reducing cerebral metabolic demand during reperfusion limits secondary injury. It applies to patients who do not follow commands after ROSC.",
    choices: [
      { text: "Targeted temperature management", isCorrect: true },
      { text: "Routine high-dose corticosteroids", isCorrect: false },
      { text: "Immediate active rewarming to 39°C", isCorrect: false },
      { text: "Prophylactic barbiturate coma for all patients", isCorrect: false },
    ],
  },
  {
    stem: "Following ROSC in a patient whose arrest was likely of cardiac origin, which investigation should be obtained promptly?",
    topic: "Post-Arrest Care",
    explanation:
      "A 12-lead ECG, to identify ST-elevation myocardial infarction and trigger urgent coronary angiography. Acute coronary occlusion is a leading cause of adult cardiac arrest, and it is directly treatable — missing it wastes the survival the resuscitation just bought.",
    choices: [
      { text: "A 12-lead ECG looking for ST elevation", isCorrect: true },
      { text: "An outpatient echocardiogram in two weeks", isCorrect: false },
      { text: "A routine chest radiograph only", isCorrect: false },
      { text: "No investigation until the patient wakes", isCorrect: false },
    ],
  },
  {
    stem: "How long should the pause in compressions for rhythm analysis ideally last?",
    topic: "CPR Quality",
    explanation:
      "Less than 10 seconds. Coronary perfusion pressure decays quickly once compressions stop and takes several compressions to rebuild. Every unnecessary second of pause reduces the likelihood of successful defibrillation and of survival.",
    choices: [
      { text: "Less than 10 seconds", isCorrect: true },
      { text: "About 30 seconds", isCorrect: false },
      { text: "One full minute", isCorrect: false },
      { text: "As long as the team needs to discuss", isCorrect: false },
    ],
  },
  {
    stem: "A patient in cardiac arrest is found to have a serum potassium of 7.8 mmol/L. Which treatment addresses the cardiac effect most rapidly?",
    topic: "Reversible Causes",
    explanation:
      "Intravenous calcium (chloride or gluconate). It does not lower potassium, but it rapidly stabilises the myocardial membrane against the arrhythmogenic effect of hyperkalaemia. Insulin with glucose, and salbutamol, shift potassium intracellularly but act more slowly — both are given, in that order of urgency.",
    choices: [
      { text: "Intravenous calcium to stabilise the myocardium", isCorrect: true },
      { text: "Oral potassium binders", isCorrect: false },
      { text: "Intravenous potassium chloride", isCorrect: false },
      { text: "Withholding all treatment until levels are repeated", isCorrect: false },
    ],
  },
  {
    stem: "An arrest is suspected to be due to opioid overdose in a patient with no pulse. What is the priority?",
    topic: "Special Situations",
    explanation:
      "Standard ACLS with high-quality CPR takes priority. Naloxone may be given, but in confirmed cardiac arrest it is an adjunct — it reverses respiratory depression, not an arrested circulation. Delaying compressions to find and draw up naloxone is the error to avoid.",
    choices: [
      { text: "High-quality CPR and standard ACLS, with naloxone as an adjunct", isCorrect: true },
      { text: "Naloxone alone, withholding compressions until it takes effect", isCorrect: false },
      { text: "Immediate synchronised cardioversion", isCorrect: false },
      { text: "Withhold resuscitation entirely", isCorrect: false },
    ],
  },
  {
    stem: "Why should hyperventilation be avoided during cardiac arrest?",
    topic: "Ventilation",
    explanation:
      "Excessive ventilation raises intrathoracic pressure, which impedes venous return and therefore reduces the cardiac output generated by compressions. It also increases gastric inflation and aspiration risk. Under stress, rescuers ventilate far too fast unless the rate is actively controlled.",
    choices: [
      { text: "It raises intrathoracic pressure and reduces venous return", isCorrect: true },
      { text: "It causes dangerous hyperoxia within seconds", isCorrect: false },
      { text: "It has no effect and is simply unnecessary", isCorrect: false },
      { text: "It makes the rhythm unshockable", isCorrect: false },
    ],
  },
  {
    stem: "What is the role of the team leader during a resuscitation attempt?",
    topic: "Team Dynamics",
    explanation:
      "To coordinate: assign clear roles, monitor CPR quality, keep the algorithm on track, and maintain situational awareness. A leader who takes on a hands-on task loses the overview, and it is that overview which catches the missed reversible cause or the drifting compression rate.",
    choices: [
      { text: "Assign roles, monitor quality, and keep an overview of the algorithm", isCorrect: true },
      { text: "Perform all compressions personally", isCorrect: false },
      { text: "Remain silent so as not to distract the team", isCorrect: false },
      { text: "Focus solely on documentation", isCorrect: false },
    ],
  },
  {
    stem: "A team member is asked to give a drug and repeats the order back before administering it. Why does this matter?",
    topic: "Team Dynamics",
    explanation:
      "Closed-loop communication confirms that the instruction was heard correctly and that it has been carried out. In a noisy, high-pressure resuscitation, unacknowledged orders are a well-documented source of drug errors and of tasks everyone assumed someone else had done.",
    choices: [
      { text: "It confirms the order was heard correctly and is being actioned", isCorrect: true },
      { text: "It is a formality with no measurable benefit", isCorrect: false },
      { text: "It slows the team down and should be discouraged", isCorrect: false },
      { text: "It is only required for controlled drugs", isCorrect: false },
    ],
  },
  {
    stem: "Which energy setting is appropriate for the first defibrillation attempt using a biphasic device in an adult?",
    topic: "Electrical Therapy",
    explanation:
      "Follow the manufacturer's recommendation, typically 120 to 200 joules. If the recommended setting is unknown, use the maximum available. Biphasic waveforms achieve defibrillation at lower energies than the older monophasic devices, which required 360 joules.",
    choices: [
      { text: "120–200 J, per the device manufacturer's recommendation", isCorrect: true },
      { text: "Always exactly 360 J regardless of device", isCorrect: false },
      { text: "50 J for the first attempt in all adults", isCorrect: false },
      { text: "10 J, increasing only if unsuccessful", isCorrect: false },
    ],
  },
  {
    stem: "A patient is in cardiac arrest following major trauma with suspected tension pneumothorax. What intervention is time-critical?",
    topic: "Reversible Causes",
    explanation:
      "Immediate chest decompression on the affected side. A tension pneumothorax obstructs venous return, and no amount of CPR or adrenaline will restore output until the pressure is relieved. This is a clinical diagnosis in arrest — do not wait for imaging.",
    choices: [
      { text: "Immediate needle or finger decompression of the chest", isCorrect: true },
      { text: "Chest radiograph before any intervention", isCorrect: false },
      { text: "A further dose of adrenaline and reassessment", isCorrect: false },
      { text: "Synchronised cardioversion", isCorrect: false },
    ],
  },
  {
    stem: "Which arrest presentation should raise suspicion of pulmonary embolism as the cause?",
    topic: "Reversible Causes",
    explanation:
      "PEA arrest in a patient with risk factors such as recent surgery, immobility, malignancy or known deep vein thrombosis, often preceded by sudden dyspnoea. Recognising it matters because thrombolysis during CPR is an option, and prolonged resuscitation may be justified afterwards.",
    choices: [
      { text: "PEA arrest with thrombotic risk factors and preceding sudden dyspnoea", isCorrect: true },
      { text: "Ventricular fibrillation in a young athlete during exertion", isCorrect: false },
      { text: "Asystole following a prolonged unwitnessed downtime", isCorrect: false },
      { text: "Bradycardic arrest following a vagal episode", isCorrect: false },
    ],
  },
  {
    stem: "A patient has wide-complex tachycardia at 190 beats per minute but is alert with a blood pressure of 128/76. What is the appropriate initial approach?",
    topic: "Tachycardia",
    explanation:
      "Obtain a 12-lead ECG, seek expert help, and consider an antiarrhythmic infusion such as amiodarone or procainamide. Because the patient is stable there is time to characterise the rhythm properly. Wide-complex tachycardia should be treated as ventricular in origin until proven otherwise.",
    choices: [
      { text: "12-lead ECG, expert consultation, and consider an antiarrhythmic infusion", isCorrect: true },
      { text: "Immediate unsynchronised defibrillation", isCorrect: false },
      { text: "Adrenaline 1 mg IV push", isCorrect: false },
      { text: "Discharge with outpatient follow-up", isCorrect: false },
    ],
  },
  {
    stem: "What is the purpose of waveform capnography after an advanced airway is placed?",
    topic: "Monitoring",
    explanation:
      "It confirms and continuously monitors correct tube placement, and it tracks CPR quality and possible ROSC. A flat trace after intubation strongly suggests oesophageal placement. Continuous monitoring also detects displacement during movement, which auscultation alone would miss.",
    choices: [
      { text: "To confirm tube placement and monitor CPR quality and ROSC", isCorrect: true },
      { text: "To measure arterial oxygen saturation", isCorrect: false },
      { text: "To determine the defibrillation energy required", isCorrect: false },
      { text: "To measure serum potassium indirectly", isCorrect: false },
    ],
  },
  {
    stem: "During a resuscitation, a junior team member believes the leader has missed a reversible cause. What should they do?",
    topic: "Team Dynamics",
    explanation:
      "Speak up clearly and respectfully. Effective resuscitation teams depend on every member being willing to raise concerns, and on leaders being willing to hear them. Hierarchy-driven silence is a recognised contributor to preventable harm in emergencies.",
    choices: [
      { text: "Voice the concern clearly and directly to the team leader", isCorrect: true },
      { text: "Stay silent to avoid undermining the leader", isCorrect: false },
      { text: "Act on it independently without telling anyone", isCorrect: false },
      { text: "Raise it only in the debrief afterwards", isCorrect: false },
    ],
  },
  {
    stem: "Which factor most strongly predicts survival with good neurological outcome after out-of-hospital cardiac arrest?",
    topic: "Chain of Survival",
    explanation:
      "Early high-quality bystander CPR with early defibrillation. The interventions delivered in the first minutes, before professional help arrives, matter more than anything that happens later. This is why public access defibrillation and bystander training have such a measurable effect on survival.",
    choices: [
      { text: "Early bystander CPR combined with early defibrillation", isCorrect: true },
      { text: "The total dose of adrenaline administered", isCorrect: false },
      { text: "How quickly an advanced airway is placed", isCorrect: false },
      { text: "The distance to the nearest hospital", isCorrect: false },
    ],
  },
];

/* ══════════════════════════ SEED ══════════════════════════ */

async function seedQuiz(opts: {
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
      difficulty: opts.difficulty,
    },
  });

  // Replace questions wholesale so re-running never duplicates.
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
        choices: {
          create: q.choices.map((c, i) => ({ text: c.text, isCorrect: c.isCorrect, order: i })),
        },
      },
    });
  }

  console.log(`  ✓ ${opts.title} — ${opts.questions.length} questions`);
}

async function main() {
  console.log("Seeding BLS & ACLS content…\n");

  await seedQuiz({
    categorySlug: "els-bls",
    slug: "bls-provider-practice-set-1",
    title: "BLS Provider — Practice Set 1",
    description:
      "Thirty questions covering the adult and paediatric BLS sequence: recognition, compression quality, ventilation, AED use, choking, and the chain of survival.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Foundational",
    questions: BLS,
  });

  await seedQuiz({
    categorySlug: "els-acls",
    slug: "acls-provider-practice-set-1",
    title: "ACLS Provider — Practice Set 1",
    description:
      "Thirty questions across the ACLS algorithms: shockable and non-shockable arrest, tachycardia and bradycardia management, drugs and doses, reversible causes, capnography, post-arrest care, and team dynamics.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Intermediate",
    questions: ACLS,
  });

  await seedQuiz({
    categorySlug: "els-acls",
    slug: "acls-timed-exam-1",
    title: "ACLS — Timed Exam 1",
    description:
      "The same thirty ACLS items under exam conditions: 35 minutes, no feedback until you submit. Use this once the practice set feels comfortable.",
    kind: "EXAM",
    timeLimitSeconds: 35 * 60,
    difficulty: "Intermediate",
    questions: ACLS,
  });

  console.log("\nDone. Everything above is editable in Admin → Question Bank.");
  console.log(
    "⚠ Review against your current national resuscitation guideline before using\n" +
      "  it for certification — protocols are revised periodically."
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
