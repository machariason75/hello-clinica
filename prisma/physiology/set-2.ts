/**
 * PHYSIOLOGY — PRACTICE SET 2
 * Cardiovascular Physiology
 *
 * Guyton & Hall / Ganong depth. Cardiac electrophysiology and pacemaking, the
 * cardiac cycle and pressure-volume loop, cardiac output and its regulation,
 * hemodynamics and the microcirculation, and the neural and hormonal control of
 * arterial pressure. 100 questions.
 *
 * Options are length-matched (the correct answer is not perceptibly the longest)
 * and every distractor is a defensible near-miss. Positions randomized by engine.
 */

import type { Q } from "../_lib/qbank";

export const PHYSIOLOGY_SET_2: Q[] = [
  {
    stem: "The upstroke of the sinoatrial node action potential is carried mainly by calcium rather than sodium because nodal cells:",
    topic: "Cardiac Electrophysiology",
    explanation:
      "Nodal cells have few functional fast sodium channels and rest at a relatively depolarized potential that inactivates them, so the slow upstroke depends on L-type calcium current; this gives the node its slower conduction and pacemaker behavior.",
    choices: [
      { text: "possess an abundance of fast sodium channels at rest" },
      { text: "have few available fast sodium channels at their potential", isCorrect: true },
      { text: "lack any voltage-gated calcium channels in the membrane" },
      { text: "are hyperpolarized far below the sodium activation range" },
      { text: "depend on chloride current for the rising phase" },
    ],
  },
  {
    stem: "The slope of phase 4 (diastolic depolarization) in the sinoatrial node sets the heart rate. Sympathetic stimulation raises the rate by making this slope:",
    topic: "Cardiac Electrophysiology",
    explanation:
      "Norepinephrine increases the funny (If) and calcium currents, steepening phase-4 depolarization so threshold is reached sooner and the rate rises; vagal stimulation flattens the slope and slows the rate.",
    choices: [
      { text: "shallower, so threshold is reached later each cycle" },
      { text: "steeper, so threshold is reached sooner each cycle", isCorrect: true },
      { text: "flat, so the node stops depolarizing between beats" },
      { text: "negative, driving the membrane away from threshold" },
      { text: "irrelevant to the timing of the next action potential" },
    ],
  },
  {
    stem: "The atrioventricular node imposes a conduction delay between atrial and ventricular activation. The physiological value of this delay is that it:",
    topic: "Cardiac Electrophysiology",
    explanation:
      "The AV nodal delay lets the atria finish emptying into the ventricles before ventricular contraction, optimizing filling; it also limits how fast atrial impulses reach the ventricles, protecting them during atrial tachyarrhythmias.",
    choices: [
      { text: "speeds ventricular activation ahead of the atria" },
      { text: "lets the atria empty into the ventricles before they contract", isCorrect: true },
      { text: "synchronizes the two atria with each other only" },
      { text: "prevents the sinoatrial node from firing too quickly" },
      { text: "allows the ventricles to contract before the atria" },
    ],
  },
  {
    stem: "The rapid conduction of the His-Purkinje system ensures that the ventricles:",
    topic: "Cardiac Electrophysiology",
    explanation:
      "The His-Purkinje network conducts very fast, so the ventricular myocardium is activated almost synchronously, producing an efficient, coordinated contraction; slow spread instead would give a weak, uncoordinated squeeze.",
    choices: [
      { text: "contract slowly from base to apex over time" },
      { text: "are activated nearly synchronously for an efficient contraction", isCorrect: true },
      { text: "depolarize one cell at a time along the wall" },
      { text: "contract before the atrioventricular node fires" },
      { text: "repolarize before the impulse reaches the apex" },
    ],
  },
  {
    stem: "Which ionic currents are correctly matched to their phase of the ventricular action potential? Select all that apply.",
    type: "MULTI",
    topic: "Cardiac Electrophysiology",
    explanation:
      "Phase 0 is the fast sodium influx, phase 2 (plateau) is calcium influx balanced by potassium efflux, and phase 3 is potassium efflux driving repolarization. Phase 4 is the stable resting potential in ventricular cells, not a calcium-driven depolarization.",
    choices: [
      { text: "phase 0 is a rapid influx of sodium ions", isCorrect: true },
      { text: "phase 2 balances calcium influx against potassium efflux", isCorrect: true },
      { text: "phase 3 is repolarizing potassium efflux", isCorrect: true },
      { text: "phase 0 is carried by calcium rather than sodium" },
      { text: "phase 4 in ventricular cells is a calcium-driven upstroke" },
    ],
  },
  {
    stem: "A drug that blocks the funny current (If) in the sinoatrial node would be expected to:",
    topic: "Cardiac Electrophysiology",
    explanation:
      "The funny current contributes to phase-4 depolarization; blocking it slows the pacemaker and reduces heart rate without affecting contractility, the mechanism of the rate-lowering drug ivabradine.",
    choices: [
      { text: "increase the heart rate by steepening phase 4" },
      { text: "slow the heart rate by flattening phase 4 depolarization", isCorrect: true },
      { text: "prolong the plateau of the ventricular action potential" },
      { text: "increase the force of ventricular contraction directly" },
      { text: "block conduction through the His-Purkinje network" },
    ],
  },
  {
    stem: "The long refractory period of ventricular myocytes is set mainly by the:",
    topic: "Cardiac Electrophysiology",
    explanation:
      "The plateau prolongs depolarization so that sodium channels remain inactivated for most of the contraction, giving a long refractory period that prevents tetanic contraction and re-excitation until the cell has largely repolarized.",
    choices: [
      { text: "brief duration of the sodium current alone" },
      { text: "prolonged plateau keeping sodium channels inactivated", isCorrect: true },
      { text: "rapid closure of all potassium channels early" },
      { text: "activity of the sodium-potassium pump between beats" },
      { text: "speed of conduction in the Purkinje fibers" },
    ],
  },
  {
    stem: "Vagal (parasympathetic) stimulation of the heart slows the rate primarily by acetylcholine acting on nodal cells to:",
    topic: "Cardiac Electrophysiology",
    explanation:
      "Acetylcholine opens potassium channels and reduces the funny and calcium currents, hyperpolarizing nodal cells and flattening phase 4, so the sinoatrial rate falls and atrioventricular conduction slows.",
    choices: [
      { text: "close potassium channels and depolarize the node" },
      { text: "open potassium channels and flatten phase-4 depolarization", isCorrect: true },
      { text: "increase calcium current during the upstroke" },
      { text: "speed conduction through the atrioventricular node" },
      { text: "shorten the refractory period of the ventricle" },
    ],
  },
  {
    stem: "Isovolumetric ventricular contraction occurs during the interval when:",
    topic: "Cardiac Cycle & Pressure-Volume Loop",
    explanation:
      "After the mitral valve closes and before the aortic valve opens, the ventricle contracts with all valves shut, so pressure rises steeply while volume is unchanged; this is isovolumetric contraction.",
    choices: [
      { text: "the aortic valve is open and blood is ejected" },
      { text: "all four valves are closed and volume stays constant", isCorrect: true },
      { text: "the mitral valve is open and the ventricle fills" },
      { text: "the ventricle is relaxing and pressure is falling" },
      { text: "atrial contraction is topping off the ventricle" },
    ],
  },
  {
    stem: "On the left ventricular pressure-volume loop, the width of the loop corresponds to the:",
    topic: "Cardiac Cycle & Pressure-Volume Loop",
    explanation:
      "The horizontal width of the loop is the difference between end-diastolic and end-systolic volume, which is the stroke volume; the area enclosed represents the stroke work performed by the ventricle.",
    choices: [
      { text: "end-diastolic pressure of the ventricle" },
      { text: "stroke volume ejected during systole", isCorrect: true },
      { text: "total peripheral resistance of the circulation" },
      { text: "heart rate over one minute of activity" },
      { text: "compliance of the aorta during ejection" },
    ],
  },
  {
    stem: "The 'a' wave of the jugular venous pulse corresponds to:",
    topic: "Cardiac Cycle & Pressure-Volume Loop",
    explanation:
      "The 'a' wave reflects atrial contraction, which briefly raises right atrial pressure; it is lost in atrial fibrillation and becomes large ('cannon' a wave) when the atrium contracts against a closed tricuspid valve.",
    choices: [
      { text: "ventricular ejection into the pulmonary artery" },
      { text: "right atrial contraction raising venous pressure", isCorrect: true },
      { text: "closure of the pulmonary and aortic valves" },
      { text: "rapid ventricular filling in early diastole" },
      { text: "opening of the tricuspid valve in diastole" },
    ],
  },
  {
    stem: "The first heart sound (S1) is produced by:",
    topic: "Cardiac Cycle & Pressure-Volume Loop",
    explanation:
      "S1 marks the closure of the mitral and tricuspid (atrioventricular) valves at the onset of ventricular systole; S2 marks closure of the aortic and pulmonary (semilunar) valves at the end of systole.",
    choices: [
      { text: "closure of the aortic and pulmonary valves" },
      { text: "closure of the mitral and tricuspid valves", isCorrect: true },
      { text: "opening of the aortic and pulmonary valves" },
      { text: "rapid filling of the ventricles in diastole" },
      { text: "contraction of the atria before systole" },
    ],
  },
  {
    stem: "A pathological third heart sound (S3) in an adult most often indicates:",
    topic: "Cardiac Cycle & Pressure-Volume Loop",
    explanation:
      "An S3 arises from rapid early-diastolic filling into a dilated, poorly compliant ventricle and is a sign of volume overload or systolic heart failure; it is normal in children and young athletes but abnormal in older adults.",
    choices: [
      { text: "a stiff, hypertrophied but small ventricle" },
      { text: "rapid filling into a dilated failing ventricle", isCorrect: true },
      { text: "closure of a stenotic aortic valve" },
      { text: "atrial contraction against a stiff ventricle" },
      { text: "normal semilunar valve closure during systole" },
    ],
  },
  {
    stem: "During which phase of the cardiac cycle is left ventricular volume at its maximum (end-diastolic volume)?",
    topic: "Cardiac Cycle & Pressure-Volume Loop",
    explanation:
      "End-diastolic volume is reached just after atrial contraction completes filling and just before the mitral valve closes at the start of isovolumetric contraction; this is the ventricle's largest volume in the cycle.",
    choices: [
      { text: "at the end of the ejection phase" },
      { text: "just before the mitral valve closes at systole onset", isCorrect: true },
      { text: "during isovolumetric relaxation of the ventricle" },
      { text: "at the moment the aortic valve opens" },
      { text: "midway through rapid ventricular ejection" },
    ],
  },
  {
    stem: "Which changes would shift the end-systolic pressure-volume relationship to reflect increased contractility? Select all that apply.",
    type: "MULTI",
    topic: "Cardiac Cycle & Pressure-Volume Loop",
    explanation:
      "Increased contractility steepens the end-systolic pressure-volume relationship, lowering end-systolic volume and raising stroke volume and ejection fraction at a given preload and afterload. It does not raise end-systolic volume or lower ejection fraction.",
    choices: [
      { text: "a steeper end-systolic pressure-volume line", isCorrect: true },
      { text: "a smaller end-systolic volume at the same afterload", isCorrect: true },
      { text: "a higher ejection fraction at the same preload", isCorrect: true },
      { text: "a larger end-systolic volume at the same afterload" },
      { text: "a reduced stroke volume at the same filling pressure" },
    ],
  },
  {
    stem: "A widened, fixed splitting of the second heart sound that does not vary with respiration is characteristic of:",
    topic: "Cardiac Cycle & Pressure-Volume Loop",
    explanation:
      "An atrial septal defect equalizes the respiratory variation in filling between the two sides, so the split of S2 is wide and fixed; normal splitting widens with inspiration and narrows with expiration.",
    choices: [
      { text: "a normal heart during quiet respiration" },
      { text: "an atrial septal defect equalizing filling variation", isCorrect: true },
      { text: "aortic stenosis limiting ventricular ejection" },
      { text: "mitral regurgitation during ventricular systole" },
      { text: "a stiff, non-compliant left ventricle" },
    ],
  },
  {
    stem: "The Frank-Starling relationship states that, within limits, an increase in ventricular end-diastolic volume leads to:",
    topic: "Cardiac Output & Its Regulation",
    explanation:
      "Greater diastolic stretch improves the overlap of thick and thin filaments and myofilament calcium sensitivity, so the ventricle contracts more forcefully and ejects a larger stroke volume; this intrinsically matches output to venous return.",
    choices: [
      { text: "a smaller stroke volume on the next beat" },
      { text: "a larger stroke volume on the next beat", isCorrect: true },
      { text: "no change in the force of contraction" },
      { text: "a fall in the force the ventricle develops" },
      { text: "a slower intrinsic heart rate at the node" },
    ],
  },
  {
    stem: "Cardiac output equals the product of heart rate and stroke volume. If stroke volume falls but heart rate rises proportionally, cardiac output:",
    topic: "Cardiac Output & Its Regulation",
    explanation:
      "Because output is the product of the two, a proportional fall in stroke volume offset by a rise in heart rate leaves cardiac output roughly unchanged; this is how the body defends output when stroke volume is limited.",
    choices: [
      { text: "falls in proportion to the drop in stroke volume" },
      { text: "stays roughly constant as the two changes offset", isCorrect: true },
      { text: "rises in proportion to the increase in heart rate" },
      { text: "becomes impossible to determine from these data" },
      { text: "depends only on the heart rate, not stroke volume" },
    ],
  },
  {
    stem: "Afterload on the left ventricle is best represented by the:",
    topic: "Cardiac Output & Its Regulation",
    explanation:
      "Afterload is the load the ventricle must overcome to eject, approximated by aortic (arterial) pressure or wall stress during ejection; raising afterload reduces stroke volume unless contractility or preload rise to compensate.",
    choices: [
      { text: "volume of blood in the ventricle before contraction" },
      { text: "aortic pressure the ventricle must overcome to eject", isCorrect: true },
      { text: "pressure in the right atrium during diastole" },
      { text: "stretch of the ventricle at end-diastole" },
      { text: "intrinsic contractile state of the myocardium" },
    ],
  },
  {
    stem: "Increasing afterload while preload and contractility are held constant will, on the pressure-volume loop:",
    topic: "Cardiac Output & Its Regulation",
    explanation:
      "A higher afterload means the aortic valve opens at a higher pressure, so ejection stops sooner at a larger end-systolic volume, reducing stroke volume; the loop becomes taller and narrower.",
    choices: [
      { text: "increase stroke volume and lower end-systolic volume" },
      { text: "reduce stroke volume and raise end-systolic volume", isCorrect: true },
      { text: "leave stroke volume completely unchanged" },
      { text: "lower the pressure at which the aortic valve opens" },
      { text: "shift end-diastolic volume markedly to the left" },
    ],
  },
  {
    stem: "A positive inotropic agent increases stroke volume at a given preload and afterload chiefly by:",
    topic: "Cardiac Output & Its Regulation",
    explanation:
      "Positive inotropes raise cytosolic calcium available to the myofilaments, increasing the force of contraction; this ejects more blood and lowers end-systolic volume without necessarily changing preload or afterload.",
    choices: [
      { text: "increasing the end-diastolic filling volume" },
      { text: "raising the calcium available to the contractile machinery", isCorrect: true },
      { text: "reducing the aortic pressure during ejection" },
      { text: "slowing the heart to allow more filling time" },
      { text: "stiffening the ventricle during diastole" },
    ],
  },
  {
    stem: "Ejection fraction is calculated as stroke volume divided by:",
    topic: "Cardiac Output & Its Regulation",
    explanation:
      "Ejection fraction is stroke volume divided by end-diastolic volume, the fraction of the filled ventricle that is ejected each beat; a normal value is about 55–70%, and a low value indicates systolic dysfunction.",
    choices: [
      { text: "end-systolic volume of the ventricle" },
      { text: "end-diastolic volume of the ventricle", isCorrect: true },
      { text: "cardiac output over one full minute" },
      { text: "the total blood volume of the body" },
      { text: "mean arterial pressure during ejection" },
    ],
  },
  {
    stem: "According to the Fick principle, cardiac output can be calculated from oxygen consumption divided by the:",
    topic: "Cardiac Output & Its Regulation",
    explanation:
      "The Fick principle computes cardiac output as whole-body oxygen consumption divided by the arteriovenous oxygen content difference; a larger extraction difference at a given consumption means a lower output.",
    choices: [
      { text: "mean arterial pressure of the systemic circulation" },
      { text: "arteriovenous oxygen content difference across the body", isCorrect: true },
      { text: "total peripheral resistance of the vasculature" },
      { text: "heart rate multiplied by the stroke volume" },
      { text: "oxygen saturation of the arterial blood alone" },
    ],
  },
  {
    stem: "Which interventions increase venous return to the heart? Select all that apply.",
    type: "MULTI",
    topic: "Cardiac Output & Its Regulation",
    explanation:
      "Increased blood volume, venoconstriction, and the skeletal-muscle pump during exercise all raise venous return, as does a more negative intrathoracic pressure with inspiration. Standing up quietly from lying instead pools blood in the legs and reduces venous return.",
    choices: [
      { text: "an increase in circulating blood volume", isCorrect: true },
      { text: "sympathetic venoconstriction of the venous reservoir", isCorrect: true },
      { text: "the skeletal muscle pump during rhythmic exercise", isCorrect: true },
      { text: "standing up quietly from a supine position" },
      { text: "a rise in central venous pressure toward the mean" },
    ],
  },
  {
    stem: "If the radius of a small artery falls to one-half while its length and blood viscosity stay the same, resistance to flow through it rises by a factor of about:",
    topic: "Hemodynamics & the Microcirculation",
    explanation:
      "By Poiseuille's law resistance varies inversely with the fourth power of the radius, so halving the radius multiplies resistance by two to the fourth power, a sixteen-fold increase; this steep dependence makes radius the dominant control of flow.",
    choices: [
      { text: "two" },
      { text: "four" },
      { text: "eight" },
      { text: "sixteen", isCorrect: true },
      { text: "thirty-two" },
    ],
  },
  {
    stem: "Because the major systemic organs are arranged largely in parallel, opening an additional parallel vascular bed to the circulation will:",
    topic: "Hemodynamics & the Microcirculation",
    explanation:
      "Adding resistances in parallel always lowers the combined resistance, so recruiting another parallel bed reduces total peripheral resistance and lets each organ be perfused at the shared arterial pressure independently.",
    choices: [
      { text: "raise total peripheral resistance markedly" },
      { text: "lower the total peripheral resistance", isCorrect: true },
      { text: "leave the total resistance unchanged" },
      { text: "halt flow through the other beds" },
      { text: "double the resistance of each bed" },
    ],
  },
  {
    stem: "By the law of Laplace, at a given internal pressure the wall tension that a vessel must bear is greatest in the:",
    topic: "Hemodynamics & the Microcirculation",
    explanation:
      "Laplace's law states that wall tension equals pressure times radius, so at a shared pressure the vessel with the largest radius bears the most tension; the aorta therefore needs the thickest, most elastic wall of the circulation.",
    choices: [
      { text: "aorta, which has the largest radius", isCorrect: true },
      { text: "capillary with its tiny radius" },
      { text: "terminal arteriole feeding a bed" },
      { text: "postcapillary venule wall" },
    ],
  },
  {
    stem: "Net movement of fluid outward across a capillary wall (filtration) is favored whenever:",
    topic: "Hemodynamics & the Microcirculation",
    explanation:
      "Starling's principle balances hydrostatic and oncotic forces; filtration occurs when the outward capillary hydrostatic pressure exceeds the inward pull of plasma oncotic pressure, as it classically does toward the arterial end of the capillary.",
    choices: [
      { text: "plasma oncotic pressure exceeds the hydrostatic" },
      { text: "capillary hydrostatic exceeds oncotic pressure", isCorrect: true },
      { text: "interstitial and capillary pressures are equal" },
      { text: "the capillary wall becomes impermeable" },
    ],
  },
  {
    stem: "True or False: In the classic Starling model, capillary hydrostatic pressure falls along the vessel so that filtration tends to predominate at the arterial end and reabsorption at the venous end.",
    type: "TRUE_FALSE",
    topic: "Hemodynamics & the Microcirculation",
    explanation:
      "True. In the traditional teaching model the declining hydrostatic pressure crosses below the roughly constant oncotic pressure partway along the capillary, shifting the balance from net filtration proximally to net reabsorption distally.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Which of the following changes tend to promote interstitial edema? Select all that apply.",
    type: "MULTI",
    topic: "Hemodynamics & the Microcirculation",
    explanation:
      "Edema forms when Starling balance shifts toward net filtration or when drainage fails: raised capillary hydrostatic pressure, low plasma albumin, increased permeability, and blocked lymphatics all favor fluid accumulation, whereas a higher plasma albumin actually pulls fluid back in.",
    choices: [
      { text: "a rise in capillary hydrostatic pressure", isCorrect: true },
      { text: "a fall in plasma albumin concentration", isCorrect: true },
      { text: "increased capillary wall permeability", isCorrect: true },
      { text: "obstruction of lymphatic drainage", isCorrect: true },
      { text: "a rise in plasma albumin concentration" },
      { text: "brisk unobstructed lymphatic flow" },
    ],
  },
  {
    stem: "Blood moves most slowly through the capillaries, and this low velocity results from the fact that capillaries:",
    topic: "Hemodynamics & the Microcirculation",
    explanation:
      "Flow velocity varies inversely with total cross-sectional area; although each capillary is tiny, their enormous combined cross-sectional area makes velocity lowest there, which conveniently maximizes time for exchange with the tissues.",
    choices: [
      { text: "have the largest total cross-sectional area", isCorrect: true },
      { text: "carry the highest local blood pressure" },
      { text: "possess the thinnest single-cell walls" },
      { text: "contain numerous one-way venous valves" },
      { text: "have the smallest individual diameter" },
    ],
  },
  {
    stem: "Turbulent rather than smooth laminar flow becomes more likely in a vessel when:",
    topic: "Hemodynamics & the Microcirculation",
    explanation:
      "The Reynolds number rises with velocity, diameter, and density and falls with viscosity; higher velocity and diameter with lower viscosity (as in anemia) push flow past the critical value into turbulence, producing audible bruits and murmurs.",
    choices: [
      { text: "velocity and diameter rise while viscosity falls", isCorrect: true },
      { text: "velocity falls and viscosity rises together" },
      { text: "the vessel narrows and the flow slows" },
      { text: "viscosity rises with a high hematocrit" },
    ],
  },
  {
    stem: "The single largest physiological determinant of whole-blood viscosity is the:",
    topic: "Hemodynamics & the Microcirculation",
    explanation:
      "Viscosity climbs steeply with the fraction of red cells; hematocrit is by far its dominant determinant, so polycythemia thickens the blood and raises resistance while anemia thins it and lowers viscosity.",
    choices: [
      { text: "plasma sodium concentration" },
      { text: "hematocrit of the blood", isCorrect: true },
      { text: "arterial oxygen saturation" },
      { text: "mean arterial pressure level" },
      { text: "total plasma protein content" },
    ],
  },
  {
    stem: "At rest the systemic veins hold roughly two-thirds of the blood volume at low pressure because, compared with arteries, they are:",
    topic: "Hemodynamics & the Microcirculation",
    explanation:
      "The veins are far more compliant, accommodating large volumes with little rise in pressure, which makes them the body's main blood reservoir; sympathetic venoconstriction can shift this stored volume back toward the heart when needed.",
    choices: [
      { text: "much stiffer and thicker walled" },
      { text: "far more compliant and distensible", isCorrect: true },
      { text: "held at a higher internal pressure" },
      { text: "richer in elastic recoil tissue" },
    ],
  },
  {
    stem: "Arterial pulse pressure, the difference between systolic and diastolic pressure, widens when:",
    topic: "Hemodynamics & the Microcirculation",
    explanation:
      "Pulse pressure rises when stroke volume increases or when arterial compliance falls, as in the stiff aortas of the elderly; both push systolic higher and diastolic lower, which is why isolated systolic hypertension is common with aging.",
    choices: [
      { text: "stroke volume rises or arterial compliance falls", isCorrect: true },
      { text: "stroke volume falls and compliance rises" },
      { text: "heart rate rises with a fixed output" },
      { text: "peripheral resistance alone increases" },
    ],
  },
  {
    stem: "The high-pressure arterial baroreceptors that buffer beat-to-beat changes in pressure are located in the walls of the:",
    topic: "Arterial Pressure: Short-Term Regulation",
    explanation:
      "The stretch-sensitive baroreceptors sit in the carotid sinus and the aortic arch, where they sample systemic arterial pressure directly and feed the medullary cardiovascular centers that adjust heart rate and vascular tone.",
    choices: [
      { text: "carotid sinus and the aortic arch", isCorrect: true },
      { text: "venae cavae and the right atrium" },
      { text: "pulmonary veins and left atrium" },
      { text: "small arterioles of each organ" },
    ],
  },
  {
    stem: "A sudden rise in arterial pressure stretches the baroreceptors and increases their firing, which reflexly:",
    topic: "Arterial Pressure: Short-Term Regulation",
    explanation:
      "Greater baroreceptor traffic inhibits the medullary sympathetic outflow and augments vagal tone, so heart rate slows and arterioles dilate; the fall in cardiac output and resistance buffers the pressure back toward normal within seconds.",
    choices: [
      { text: "lowers the heart rate and dilates arterioles", isCorrect: true },
      { text: "raises the heart rate and constricts vessels" },
      { text: "increases sympathetic outflow to vessels" },
      { text: "has little effect on the heart or vessels" },
    ],
  },
  {
    stem: "Afferent signals from the carotid sinus baroreceptors reach the medulla by way of the:",
    topic: "Arterial Pressure: Short-Term Regulation",
    explanation:
      "Carotid sinus afferents run in the sinus nerve of Hering, a branch of the glossopharyngeal nerve, to the nucleus tractus solitarius; aortic arch afferents by contrast travel in the vagus, a distinction worth remembering.",
    choices: [
      { text: "glossopharyngeal nerve", isCorrect: true },
      { text: "hypoglossal nerve" },
      { text: "trigeminal nerve" },
      { text: "phrenic nerve" },
      { text: "facial nerve" },
    ],
  },
  {
    stem: "During sustained hypertension the baroreflex is a poor guardian of long-term pressure because over a few days it will:",
    topic: "Arterial Pressure: Short-Term Regulation",
    explanation:
      "The baroreflex resets: its threshold shifts toward the prevailing pressure, so it stops opposing a chronically elevated level and instead defends the new, higher operating point, which is why it cannot set long-term pressure.",
    choices: [
      { text: "reset toward the prevailing pressure", isCorrect: true },
      { text: "fire ever more strongly without limit" },
      { text: "permanently silence its afferent output" },
      { text: "switch to raising the pressure further" },
    ],
  },
  {
    stem: "On standing up, gravity pools blood in the legs and venous return falls; this is normally corrected within seconds by:",
    topic: "Arterial Pressure: Short-Term Regulation",
    explanation:
      "The baroreflex detects the transient drop and drives reflex tachycardia together with arteriolar and venous constriction, restoring venous return and pressure; failure of this response produces the dizziness of orthostatic hypotension.",
    choices: [
      { text: "reflex tachycardia and arteriolar constriction", isCorrect: true },
      { text: "reflex bradycardia and vasodilation" },
      { text: "a slow rise in renal salt retention" },
      { text: "increased secretion of natriuretic peptide" },
    ],
  },
  {
    stem: "The carotid and aortic bodies differ from the carotid sinus baroreceptors in that they primarily sense the arterial:",
    topic: "Arterial Pressure: Short-Term Regulation",
    explanation:
      "The peripheral chemoreceptors of the carotid and aortic bodies monitor arterial oxygen, carbon dioxide, and pH rather than pressure, and they drive ventilation and, when strongly stimulated, sympathetic cardiovascular responses.",
    choices: [
      { text: "oxygen, carbon dioxide, and pH", isCorrect: true },
      { text: "pressure and pulsatile stretch" },
      { text: "temperature of the flowing blood" },
      { text: "glucose and electrolyte content" },
    ],
  },
  {
    stem: "The most powerful of all activators of the sympathetic vasoconstrictor system, triggered when blood flow to the brain falls, is the:",
    topic: "Arterial Pressure: Short-Term Regulation",
    explanation:
      "When cerebral perfusion drops severely, medullary neurons sense the resulting ischemia and unleash an intense, last-ditch sympathetic discharge; this central ischemic response can drive arterial pressure to extreme levels to protect the brain.",
    choices: [
      { text: "central nervous system ischemic response", isCorrect: true },
      { text: "arterial baroreceptor reflex" },
      { text: "peripheral chemoreceptor reflex" },
      { text: "Bainbridge atrial stretch reflex" },
    ],
  },
  {
    stem: "True or False: A steep rise in intracranial pressure can drive arterial pressure upward while slowing the heart, a combination known as the Cushing reflex.",
    type: "TRUE_FALSE",
    topic: "Arterial Pressure: Short-Term Regulation",
    explanation:
      "True. Rising intracranial pressure compromises brainstem perfusion, triggering a strong sympathetic pressor response; the resulting hypertension then activates baroreceptors that reflexly slow the heart, giving the classic Cushing pattern.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Baseline sympathetic vasoconstrictor tone keeps the systemic arterioles partly constricted, acting on them chiefly through:",
    topic: "Arterial Pressure: Short-Term Regulation",
    explanation:
      "Tonic sympathetic firing releases norepinephrine onto vascular alpha-1 adrenergic receptors, holding arterioles in partial constriction; raising or lowering this tone is the fastest way the nervous system adjusts peripheral resistance.",
    choices: [
      { text: "beta-2 adrenergic receptors" },
      { text: "alpha-1 adrenergic receptors", isCorrect: true },
      { text: "muscarinic cholinergic receptors" },
      { text: "nicotinic cholinergic receptors" },
    ],
  },
  {
    stem: "Parasympathetic (vagal) fibers slow the heart mainly by acting on the:",
    topic: "Arterial Pressure: Short-Term Regulation",
    explanation:
      "Vagal innervation is dense at the sinoatrial and atrioventricular nodes, where acetylcholine slows pacemaker depolarization and nodal conduction; ventricular muscle receives little vagal supply, so vagal tone chiefly lowers rate.",
    choices: [
      { text: "sinoatrial and atrioventricular nodes", isCorrect: true },
      { text: "bulk of the ventricular myocardium" },
      { text: "coronary arterial smooth muscle" },
      { text: "Purkinje fibers of the ventricles" },
    ],
  },
  {
    stem: "Renin release from the juxtaglomerular cells of the kidney is stimulated by:",
    topic: "Arterial Pressure: Long-Term Regulation",
    explanation:
      "The juxtaglomerular cells secrete renin in response to a fall in renal perfusion pressure, reduced sodium delivery to the macula densa, and sympathetic beta-1 stimulation; renin then launches the cascade that defends pressure.",
    choices: [
      { text: "a fall in renal perfusion pressure", isCorrect: true },
      { text: "a rise in plasma sodium load" },
      { text: "increased arterial oxygen tension" },
      { text: "stretch of the great atrial veins" },
      { text: "withdrawal of sympathetic tone" },
    ],
  },
  {
    stem: "Angiotensin-converting enzyme, present in high amounts on the pulmonary endothelium, catalyzes the conversion of:",
    topic: "Arterial Pressure: Long-Term Regulation",
    explanation:
      "ACE cleaves the relatively inactive angiotensin I into the potent vasoconstrictor angiotensin II and also degrades bradykinin; the lung's vast endothelial surface makes it the main site of this conversion in the body.",
    choices: [
      { text: "angiotensin I into angiotensin II", isCorrect: true },
      { text: "angiotensinogen into angiotensin I" },
      { text: "angiotensin II into aldosterone" },
      { text: "renin into active angiotensin I" },
    ],
  },
  {
    stem: "Angiotensin II raises arterial pressure through which of the following actions? Select all that apply.",
    type: "MULTI",
    topic: "Arterial Pressure: Long-Term Regulation",
    explanation:
      "Angiotensin II is broadly pressor: it constricts arterioles, stimulates adrenal aldosterone release, enhances proximal tubular sodium reabsorption, and drives thirst and vasopressin; it constricts rather than dilates the efferent arteriole and promotes sodium retention rather than loss.",
    choices: [
      { text: "direct constriction of systemic arterioles", isCorrect: true },
      { text: "stimulation of aldosterone secretion", isCorrect: true },
      { text: "increased proximal sodium reabsorption", isCorrect: true },
      { text: "stimulation of thirst and vasopressin", isCorrect: true },
      { text: "marked dilation of the efferent arteriole" },
      { text: "promotion of urinary sodium loss" },
    ],
  },
  {
    stem: "Aldosterone raises blood pressure over hours to days by increasing sodium reabsorption in the:",
    topic: "Arterial Pressure: Long-Term Regulation",
    explanation:
      "Aldosterone acts on the principal cells of the late distal tubule and collecting duct, inserting sodium channels and pumps so that sodium (and water) are retained while potassium is secreted; the retained volume supports arterial pressure.",
    choices: [
      { text: "principal cells of the collecting duct", isCorrect: true },
      { text: "thick ascending limb of Henle's loop" },
      { text: "proximal convoluted tubule cells" },
      { text: "glomerular filtration barrier" },
    ],
  },
  {
    stem: "In Guyton's analysis of circulatory control, the long-term set point of arterial pressure is determined mainly by the:",
    topic: "Arterial Pressure: Long-Term Regulation",
    explanation:
      "Guyton argued that because the kidney can adjust salt and water balance without limit, renal-body-fluid handling has effectively infinite gain and dominates the long-term set point of pressure, overriding the neural reflexes that act acutely.",
    choices: [
      { text: "renal handling of salt and water", isCorrect: true },
      { text: "tone of the arterial baroreceptors" },
      { text: "overall compliance of the vasculature" },
      { text: "strength of ventricular contraction" },
      { text: "resistance of skeletal-muscle beds" },
    ],
  },
  {
    stem: "The pressure-natriuresis mechanism helps stabilize arterial pressure over the long term by:",
    topic: "Arterial Pressure: Long-Term Regulation",
    explanation:
      "When arterial pressure rises, the kidney excretes more sodium and water (pressure natriuresis and diuresis), shrinking blood volume until pressure returns toward normal; a rightward shift of this relationship underlies sustained hypertension.",
    choices: [
      { text: "excreting more salt and water as pressure rises", isCorrect: true },
      { text: "retaining salt and water as pressure rises" },
      { text: "constricting the renal afferent arteriole" },
      { text: "raising renin output when pressure rises" },
    ],
  },
  {
    stem: "Antidiuretic hormone (vasopressin) helps defend both osmolality and pressure chiefly by:",
    topic: "Arterial Pressure: Long-Term Regulation",
    explanation:
      "Vasopressin inserts aquaporin channels in the collecting duct so that water is reabsorbed, concentrating the urine and expanding volume; at high concentrations it also constricts vessels, adding a direct pressor effect during hypovolemia.",
    choices: [
      { text: "reabsorbing water in the collecting duct", isCorrect: true },
      { text: "promoting free-water loss in the urine" },
      { text: "blocking sodium uptake in the tubule" },
      { text: "dilating the systemic arterioles widely" },
    ],
  },
  {
    stem: "Atrial natriuretic peptide, released when the cardiac atria are stretched by volume expansion, tends to:",
    topic: "Arterial Pressure: Long-Term Regulation",
    explanation:
      "Atrial stretch releases ANP, which promotes glomerular filtration and sodium excretion and relaxes vascular smooth muscle; the net effect lowers blood volume and pressure, opposing the salt-retaining actions of the renin system.",
    choices: [
      { text: "lower pressure by promoting sodium loss", isCorrect: true },
      { text: "raise pressure by retaining sodium" },
      { text: "stimulate renin and aldosterone output" },
      { text: "constrict the renal afferent arteriole" },
    ],
  },
  {
    stem: "True or False: Because the kidneys can go on adjusting salt and water balance indefinitely, they exert a dominant long-term control over the level of arterial pressure.",
    type: "TRUE_FALSE",
    topic: "Arterial Pressure: Long-Term Regulation",
    explanation:
      "True. The renal-body-fluid feedback has effectively infinite gain over time, so unless the kidney's pressure-natriuresis curve is shifted, it will keep correcting any lasting deviation and thereby set the long-term arterial pressure.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Blood flow to the left ventricular muscle occurs mainly during diastole, and this timing is explained by the fact that during systole the:",
    topic: "Coronary & Special Circulations",
    explanation:
      "Left ventricular contraction compresses the intramural coronary vessels so forcefully that systolic flow is throttled; most perfusion therefore occurs in diastole, which is why tachycardia (shortening diastole) can threaten the subendocardium.",
    choices: [
      { text: "contraction compresses the intramural vessels", isCorrect: true },
      { text: "aortic valve blocks the coronary openings" },
      { text: "coronary arteries actively constrict wide" },
      { text: "venous pressure exceeds arterial pressure" },
    ],
  },
  {
    stem: "The dominant local chemical signal that matches coronary blood flow to the metabolic work of the heart is:",
    topic: "Coronary & Special Circulations",
    explanation:
      "Working myocardium releases adenosine from ATP breakdown, and this potent vasodilator relaxes coronary arterioles in proportion to metabolic demand; this metabolic coupling keeps supply matched to the heart's oxygen consumption.",
    choices: [
      { text: "adenosine released by active myocardium", isCorrect: true },
      { text: "histamine from local mast cell stores" },
      { text: "a rise in local oxygen tension" },
      { text: "a fall in local carbon dioxide" },
      { text: "norepinephrine from cardiac nerves" },
    ],
  },
  {
    stem: "Because the heart already extracts most of the oxygen from coronary blood even at rest, any rise in myocardial demand must be met chiefly by:",
    topic: "Coronary & Special Circulations",
    explanation:
      "Cardiac oxygen extraction is near-maximal at rest, leaving little reserve in the venous blood; the heart therefore meets increased demand almost entirely by increasing coronary blood flow rather than by extracting more oxygen per unit.",
    choices: [
      { text: "increasing the coronary blood flow", isCorrect: true },
      { text: "extracting still more oxygen per beat" },
      { text: "switching the muscle to anaerobic use" },
      { text: "lowering the resting heart rate" },
    ],
  },
  {
    stem: "Cerebral blood flow is held nearly constant across a wide range of arterial pressures, and it is powerfully increased by a rise in arterial:",
    topic: "Coronary & Special Circulations",
    explanation:
      "The cerebral vessels autoregulate flow over a broad pressure range and are exquisitely sensitive to carbon dioxide, which is a potent dilator; hyperventilation lowers carbon dioxide and constricts cerebral vessels, a fact used clinically.",
    choices: [
      { text: "carbon dioxide tension", isCorrect: true },
      { text: "oxygen partial pressure" },
      { text: "glucose concentration" },
      { text: "sodium concentration" },
    ],
  },
  {
    stem: "Unlike systemic arterioles, the arterioles of the pulmonary circulation respond to alveolar hypoxia by:",
    topic: "Coronary & Special Circulations",
    explanation:
      "Pulmonary vessels constrict in poorly ventilated regions (hypoxic pulmonary vasoconstriction), diverting blood toward better-aerated alveoli to improve matching; generalized alveolar hypoxia, however, raises pulmonary arterial pressure overall.",
    choices: [
      { text: "constricting to divert flow toward aerated lung", isCorrect: true },
      { text: "dilating to increase flow through the region" },
      { text: "becoming completely unresponsive to oxygen" },
      { text: "opening arteriovenous shunts in the lung" },
    ],
  },
  {
    stem: "During exercise the large rise in blood flow through active skeletal muscle is driven mainly by:",
    topic: "Coronary & Special Circulations",
    explanation:
      "Contracting muscle accumulates local metabolites such as adenosine, potassium, carbon dioxide, and hydrogen ions, which relax the arterioles; this active hyperemia is the dominant mechanism, far outweighing any circulating hormonal effect.",
    choices: [
      { text: "accumulation of local vasodilator metabolites", isCorrect: true },
      { text: "a large rise in mean arterial pressure" },
      { text: "circulating epinephrine acting on the beds" },
      { text: "complete withdrawal of all sympathetic tone" },
    ],
  },
  {
    stem: "True or False: The skin circulation is regulated largely for temperature control, and sympathetic tone can nearly shut off skin blood flow to conserve body heat.",
    type: "TRUE_FALSE",
    topic: "Coronary & Special Circulations",
    explanation:
      "True. Cutaneous vessels serve thermoregulation more than local metabolism; in the cold, sympathetic vasoconstriction diverts blood away from the skin to retain heat, while warming triggers vasodilation and, over apocrine regions, sweating.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "During hemorrhage the sympathetic constriction of the splanchnic and cutaneous vascular beds serves to:",
    topic: "Coronary & Special Circulations",
    explanation:
      "The gut and skin beds are sacrificed first: constricting them both raises resistance and mobilizes their large stored volume, redirecting the limited blood toward the heart and brain, whose flow is defended until shock becomes severe.",
    choices: [
      { text: "redirect blood toward the heart and brain", isCorrect: true },
      { text: "increase blood flow to the intestines" },
      { text: "cool the body by opening skin vessels" },
      { text: "lower the total peripheral resistance" },
    ],
  },
  {
    stem: "On the surface electrocardiogram the P wave represents:",
    topic: "Cardiac Cellular Basis & Arrhythmia",
    explanation:
      "The P wave marks atrial depolarization spreading from the sinoatrial node across both atria; atrial repolarization is small and buried within the much larger QRS complex, so it is not normally seen as a separate deflection.",
    choices: [
      { text: "depolarization of the atria", isCorrect: true },
      { text: "depolarization of the ventricles" },
      { text: "repolarization of the ventricles" },
      { text: "delay within the atrioventricular node" },
      { text: "repolarization of the two atria" },
    ],
  },
  {
    stem: "The PR interval measured on the electrocardiogram chiefly reflects the time required for:",
    topic: "Cardiac Cellular Basis & Arrhythmia",
    explanation:
      "The PR interval spans the onset of atrial depolarization to the onset of ventricular depolarization, and most of that time is the deliberate conduction delay in the atrioventricular node, which lets the atria empty before the ventricles fire.",
    choices: [
      { text: "conduction through the atrioventricular node", isCorrect: true },
      { text: "depolarization of the ventricular muscle" },
      { text: "repolarization of the whole heart" },
      { text: "spread of the impulse across the atria" },
    ],
  },
  {
    stem: "The QRS complex is narrow in the healthy heart because ventricular depolarization spreads very rapidly through the:",
    topic: "Cardiac Cellular Basis & Arrhythmia",
    explanation:
      "The Purkinje fibers conduct the impulse swiftly and simultaneously to the ventricular myocardium, so the ventricles depolarize almost together and the QRS is narrow; a bundle branch block slows this spread and widens the complex.",
    choices: [
      { text: "Purkinje conduction system", isCorrect: true },
      { text: "slow atrioventricular node" },
      { text: "working atrial myocardium" },
      { text: "compact sinoatrial node" },
    ],
  },
  {
    stem: "A markedly prolonged QT interval predisposes the ventricle to the polymorphic arrhythmia known as:",
    topic: "Cardiac Cellular Basis & Arrhythmia",
    explanation:
      "Prolonged repolarization allows early afterdepolarizations that can trigger torsades de pointes, a polymorphic ventricular tachycardia; many drugs and electrolyte disturbances lengthen the QT and raise this risk, so the interval is watched closely.",
    choices: [
      { text: "torsades de pointes", isCorrect: true },
      { text: "first-degree heart block" },
      { text: "sinus bradycardia" },
      { text: "atrial flutter waves" },
    ],
  },
  {
    stem: "True or False: The atrioventricular node deliberately delays the impulse between atria and ventricles so the atria can finish emptying before the ventricles contract.",
    type: "TRUE_FALSE",
    topic: "Cardiac Cellular Basis & Arrhythmia",
    explanation:
      "True. The slow calcium-dependent conduction of the AV node imposes a delay of about a tenth of a second, timing atrial contribution to ventricular filling; it also limits how fast atrial impulses can reach the ventricles.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The unusually long plateau and refractory period of the ventricular action potential are physiologically important because they:",
    topic: "Cardiac Cellular Basis & Arrhythmia",
    explanation:
      "The prolonged refractory period keeps the ventricle from being re-excited until it has relaxed, preventing summation into a sustained tetanus; this guarantees that the chambers alternately fill and eject rather than seizing in contraction.",
    choices: [
      { text: "prevent summation into a tetanic contraction", isCorrect: true },
      { text: "allow very rapid repetitive firing" },
      { text: "speed conduction through the ventricle" },
      { text: "shorten the time available for filling" },
    ],
  },
  {
    stem: "Which conditions favor the development of a reentrant arrhythmia? Select all that apply.",
    type: "MULTI",
    topic: "Cardiac Cellular Basis & Arrhythmia",
    explanation:
      "Reentry needs a circuit in which an impulse can circulate: a unidirectional block, slowed conduction around the loop, a shortened refractory period, and an available anatomic or functional pathway all promote it, whereas uniform fast conduction and long refractoriness prevent it.",
    choices: [
      { text: "a unidirectional block in one pathway", isCorrect: true },
      { text: "slowed conduction around the circuit", isCorrect: true },
      { text: "a shortened tissue refractory period", isCorrect: true },
      { text: "an anatomic or functional conduction loop", isCorrect: true },
      { text: "uniform rapid conduction everywhere" },
      { text: "a long refractory period throughout" },
    ],
  },
  {
    stem: "If the sinoatrial node fails to fire, the heart is usually rescued from standstill by:",
    topic: "Cardiac Cellular Basis & Arrhythmia",
    explanation:
      "Lower elements of the conduction system have their own slower intrinsic pacemaker rhythmicity; an escape pacemaker in the AV junction or ventricle takes over, keeping the heart beating, though at a slower rate than the sinus node set.",
    choices: [
      { text: "a slower escape pacemaker lower in the system", isCorrect: true },
      { text: "a faster ectopic focus in the atria" },
      { text: "reversal of conduction in the bundle" },
      { text: "direct stimulation by the vagus nerve" },
    ],
  },
  {
    stem: "An increase in contractility, or inotropy, means the ventricle develops more force of contraction:",
    topic: "Contractility & Heart Failure",
    explanation:
      "Contractility is the intrinsic strength of contraction independent of loading; a positive inotropic state raises developed force at any given end-diastolic fiber length, shifting the whole Frank-Starling curve upward rather than moving along it.",
    choices: [
      { text: "at any given end-diastolic fiber length", isCorrect: true },
      { text: "only when the preload is also raised" },
      { text: "only when the afterload is lowered" },
      { text: "solely because the heart rate rises" },
    ],
  },
  {
    stem: "Catecholamines such as norepinephrine increase myocardial contractility mainly by:",
    topic: "Contractility & Heart Failure",
    explanation:
      "Beta-1 stimulation raises cyclic AMP and phosphorylates calcium-handling proteins, increasing the cytosolic calcium delivered to the myofilaments each beat; more calcium bound to troponin means stronger cross-bridge cycling and greater force.",
    choices: [
      { text: "raising cytosolic calcium at the myofilaments", isCorrect: true },
      { text: "lengthening the resting sarcomere spacing" },
      { text: "reducing the afterload on the ventricle" },
      { text: "slowing the intrinsic pacemaker rate" },
    ],
  },
  {
    stem: "In systolic heart failure the ventricular function (Frank-Starling) curve is best described as:",
    topic: "Contractility & Heart Failure",
    explanation:
      "In systolic failure the curve is depressed and flattened, so at any given filling pressure the ventricle ejects a smaller stroke volume; the body then raises filling pressure to compensate, which contributes to congestion behind the heart.",
    choices: [
      { text: "shifted downward, so each preload yields less output", isCorrect: true },
      { text: "shifted upward, so each preload yields more output" },
      { text: "unchanged from the normal healthy ventricle" },
      { text: "steeper than normal at every filling pressure" },
    ],
  },
  {
    stem: "A reduced ejection fraction, with a dilated poorly contracting ventricle, is the hallmark of:",
    topic: "Contractility & Heart Failure",
    explanation:
      "Systolic (reduced ejection fraction) heart failure reflects impaired contraction, so a smaller fraction of the enlarged end-diastolic volume is ejected; diastolic failure by contrast preserves ejection fraction but stiffens filling.",
    choices: [
      { text: "systolic reduced-ejection-fraction failure", isCorrect: true },
      { text: "diastolic preserved-fraction failure" },
      { text: "acute pericardial tamponade alone" },
      { text: "isolated mitral valve stenosis" },
    ],
  },
  {
    stem: "Which compensatory changes typically appear as heart failure develops? Select all that apply.",
    type: "MULTI",
    topic: "Contractility & Heart Failure",
    explanation:
      "The failing heart triggers neurohormonal compensation: sympathetic activation, renin-angiotensin-aldosterone activation, renal salt and water retention, and ventricular remodeling with dilation and hypertrophy; catecholamines rise rather than fall, and the kidney retains rather than dumps sodium.",
    choices: [
      { text: "sympathetic activation raising rate and tone", isCorrect: true },
      { text: "activation of the renin-angiotensin system", isCorrect: true },
      { text: "renal retention of salt and water", isCorrect: true },
      { text: "ventricular dilation and hypertrophy", isCorrect: true },
      { text: "a fall in circulating catecholamines" },
      { text: "brisk renal excretion of sodium" },
    ],
  },
  {
    stem: "Dilation of a failing ventricle is a mixed blessing because, by the law of Laplace, the larger radius:",
    topic: "Contractility & Heart Failure",
    explanation:
      "Laplace's law makes wall tension rise with radius at a given pressure, so a dilated chamber must generate more wall stress and consume more oxygen to eject; this added burden can worsen ischemia and drive further deterioration.",
    choices: [
      { text: "raises wall stress and oxygen demand", isCorrect: true },
      { text: "lowers wall stress and oxygen demand" },
      { text: "has no effect on the wall tension" },
      { text: "reduces the preload on the muscle" },
    ],
  },
  {
    stem: "True or False: Lowering afterload can raise stroke volume in a failing ventricle by reducing the resistance against which the heart must eject.",
    type: "TRUE_FALSE",
    topic: "Contractility & Heart Failure",
    explanation:
      "True. Because the impaired ventricle is sensitive to the load opposing ejection, reducing afterload with a vasodilator lets it empty more completely and raises stroke volume; this is a rationale for afterload-reducing therapy in failure.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "A raised plasma level of B-type natriuretic peptide in suspected heart failure is released mainly in response to:",
    topic: "Contractility & Heart Failure",
    explanation:
      "BNP is secreted by ventricular myocardium when it is stretched by pressure or volume overload; its plasma level therefore rises with ventricular wall stress and serves as a useful marker to support the diagnosis of heart failure.",
    choices: [
      { text: "stretch of the overloaded ventricle", isCorrect: true },
      { text: "a fall in the coronary blood flow" },
      { text: "sympathetic stimulation of the node" },
      { text: "a drop in circulating blood volume" },
    ],
  },
  {
    stem: "The mean systemic filling pressure, the pressure everywhere in the circulation when the heart is momentarily stopped, is set mainly by the:",
    topic: "Venous Return & Circulatory Shock",
    explanation:
      "Mean systemic filling pressure reflects how tightly the blood volume fills the vascular space, so it rises with greater blood volume and with venoconstriction that reduces venous compliance; it is the upstream pressure that drives venous return.",
    choices: [
      { text: "blood volume and the venous compliance", isCorrect: true },
      { text: "force of the ventricular contraction" },
      { text: "resistance of the systemic arterioles" },
      { text: "heart rate multiplied by stroke volume" },
    ],
  },
  {
    stem: "The pressure gradient that actually drives blood back to the heart as venous return is the difference between:",
    topic: "Venous Return & Circulatory Shock",
    explanation:
      "Venous return is proportional to mean systemic filling pressure minus right atrial pressure, divided by the resistance to venous return; anything that lowers filling pressure or raises atrial pressure narrows this gradient and reduces return.",
    choices: [
      { text: "mean systemic filling and right atrial pressure", isCorrect: true },
      { text: "systolic and diastolic arterial pressures" },
      { text: "arterial and capillary hydrostatic pressures" },
      { text: "pulmonary and systemic arterial pressures" },
    ],
  },
  {
    stem: "Raising the right atrial pressure, with all else held constant, will:",
    topic: "Venous Return & Circulatory Shock",
    explanation:
      "A higher right atrial pressure reduces the gradient for venous return, so return and hence output fall; this is why the venous return curve slopes downward as atrial pressure rises, an idea central to Guyton's circulatory analysis.",
    choices: [
      { text: "reduce the venous return to the heart", isCorrect: true },
      { text: "increase the venous return to the heart" },
      { text: "leave venous return entirely unchanged" },
      { text: "raise the mean systemic filling pressure" },
    ],
  },
  {
    stem: "In Guyton's graphical analysis, the cardiac output curve and the venous return curve cross at the point that defines the:",
    topic: "Venous Return & Circulatory Shock",
    explanation:
      "The intersection is the only pressure at which the heart pumps exactly what the circulation returns, so it fixes the steady-state cardiac output and right atrial pressure; shifting either curve moves this operating point predictably.",
    choices: [
      { text: "steady-state output and right atrial pressure", isCorrect: true },
      { text: "maximum possible output of the heart" },
      { text: "mean arterial pressure of the body" },
      { text: "total peripheral resistance of the beds" },
    ],
  },
  {
    stem: "A transfusion that expands the blood volume shifts the venous return curve in a way that:",
    topic: "Venous Return & Circulatory Shock",
    explanation:
      "Added volume raises the mean systemic filling pressure, shifting the venous return curve to the right so it intersects the cardiac output curve at a higher output; this is how volume loading increases cardiac output in a responsive heart.",
    choices: [
      { text: "raises filling pressure and cardiac output", isCorrect: true },
      { text: "lowers filling pressure and cardiac output" },
      { text: "leaves both filling pressure and output fixed" },
      { text: "steepens the cardiac output curve sharply" },
    ],
  },
  {
    stem: "Which factors normally increase venous return to the heart? Select all that apply.",
    type: "MULTI",
    topic: "Venous Return & Circulatory Shock",
    explanation:
      "Venous return rises with the skeletal-muscle pump during movement, sympathetic venoconstriction of the reservoir, the negative intrathoracic pressure of inspiration, and expansion of blood volume; quiet standing instead pools blood in the legs and venodilation enlarges the reservoir, both reducing return.",
    choices: [
      { text: "the skeletal-muscle pump during walking", isCorrect: true },
      { text: "sympathetic venoconstriction of the reservoir", isCorrect: true },
      { text: "the negative intrathoracic pressure of inspiration", isCorrect: true },
      { text: "an increase in circulating blood volume", isCorrect: true },
      { text: "quiet standing that pools blood in the legs" },
      { text: "venodilation that enlarges the reservoir" },
    ],
  },
  {
    stem: "Circulatory shock, whatever its cause, is fundamentally a state of:",
    topic: "Venous Return & Circulatory Shock",
    explanation:
      "Shock is defined by tissue perfusion inadequate to meet metabolic demand, leading to cellular hypoxia; blood pressure may initially be maintained by compensation, so shock is a failure of perfusion rather than simply a low blood pressure.",
    choices: [
      { text: "perfusion inadequate for metabolic needs", isCorrect: true },
      { text: "an always severely low arterial pressure" },
      { text: "a primary failure of lung oxygen uptake" },
      { text: "uncontrolled bleeding from a large vessel" },
    ],
  },
  {
    stem: "In early hypovolemic shock the arterial pressure may still be nearly normal, and this is chiefly because of:",
    topic: "Venous Return & Circulatory Shock",
    explanation:
      "Baroreflex-driven compensation raises heart rate and constricts arterioles and veins, defending pressure despite a falling volume; a normal pressure with tachycardia and cool skin is therefore an early warning rather than reassurance.",
    choices: [
      { text: "reflex tachycardia and vasoconstriction", isCorrect: true },
      { text: "a rapid refilling of the lost blood volume" },
      { text: "a fall in the systemic vascular resistance" },
      { text: "increased release of natriuretic peptide" },
    ],
  },
  {
    stem: "Which findings would you expect in a patient with early septic (distributive) shock? Select all that apply.",
    type: "MULTI",
    topic: "Venous Return & Circulatory Shock",
    explanation:
      "Early septic shock is a vasodilated, high-output state: the extremities are often warm and well perfused, systemic vascular resistance is low, cardiac output is high or normal, and the pulse pressure is wide; cold clamped skin and a high resistance are features of later or hypovolemic shock instead.",
    choices: [
      { text: "warm well-perfused extremities early on", isCorrect: true },
      { text: "a low systemic vascular resistance", isCorrect: true },
      { text: "a high or normal cardiac output", isCorrect: true },
      { text: "a widened arterial pulse pressure", isCorrect: true },
      { text: "cold clamped extremities from the outset" },
      { text: "a high systemic vascular resistance" },
    ],
  },
  {
    stem: "Cardiogenic shock differs from hypovolemic shock in that the cardiac filling pressures are typically:",
    topic: "Venous Return & Circulatory Shock",
    explanation:
      "In cardiogenic shock the pump fails while the veins remain full, so filling pressures are elevated and the lungs may become congested; in hypovolemic shock the tank is empty, so filling pressures are low, a key bedside distinction.",
    choices: [
      { text: "elevated rather than reduced", isCorrect: true },
      { text: "reduced rather than elevated" },
      { text: "identical to the normal range" },
      { text: "unrelated to the underlying cause" },
    ],
  },
  {
    stem: "True or False: If perfusion falls low enough, shock can enter a progressive stage in which the deterioration itself further reduces perfusion, forming a vicious cycle.",
    type: "TRUE_FALSE",
    topic: "Venous Return & Circulatory Shock",
    explanation:
      "True. Severe shock damages the heart and vessels, so falling perfusion begets still lower cardiac output and pressure; without intervention this positive-feedback spiral can pass into an irreversible stage despite later treatment.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "After moderate hemorrhage a shift of interstitial fluid into the capillaries helps restore blood volume, and this occurs because the capillary hydrostatic pressure has:",
    topic: "Venous Return & Circulatory Shock",
    explanation:
      "Hemorrhage lowers arterial and capillary pressures, so the Starling balance tips toward reabsorption and interstitial fluid moves into the plasma, partially refilling the vascular space; this autotransfusion dilutes the blood over hours.",
    choices: [
      { text: "fallen, favoring net reabsorption of fluid", isCorrect: true },
      { text: "risen, favoring net filtration of fluid" },
      { text: "stayed constant despite the blood loss" },
      { text: "exceeded the plasma oncotic pressure" },
    ],
  },
  {
    stem: "Which findings at the bedside suggest significant hypovolemia? Select all that apply.",
    type: "MULTI",
    topic: "Venous Return & Circulatory Shock",
    explanation:
      "Compensated volume loss produces sympathetic signs: a fast heart rate, cool pale skin from vasoconstriction, a narrowed pulse pressure as diastolic rises toward systolic, and delayed capillary refill; bounding warm pulses and a widened pulse pressure point the other way.",
    choices: [
      { text: "a rapid resting heart rate", isCorrect: true },
      { text: "cool and pale peripheral skin", isCorrect: true },
      { text: "a narrowed arterial pulse pressure", isCorrect: true },
      { text: "a delayed capillary refill time", isCorrect: true },
      { text: "bounding warm peripheral pulses" },
      { text: "a widened arterial pulse pressure" },
    ],
  },
  {
    stem: "During sustained dynamic aerobic exercise, which cardiovascular changes normally occur? Select all that apply.",
    type: "MULTI",
    topic: "Clinical Application",
    explanation:
      "Aerobic exercise raises cardiac output through faster rate and greater contractility, dilates the active muscle beds by local metabolites, and raises systolic pressure while mean pressure rises modestly; output climbs rather than falls, and pressure is defended rather than collapsing.",
    choices: [
      { text: "a large rise in cardiac output", isCorrect: true },
      { text: "increased heart rate and contractility", isCorrect: true },
      { text: "vasodilation within the active muscle beds", isCorrect: true },
      { text: "a rise in the systolic arterial pressure", isCorrect: true },
      { text: "a marked fall in cardiac output" },
      { text: "a collapse of mean pressure toward shock" },
    ],
  },
  {
    stem: "The blood-pressure overshoot and reflex slowing of the heart seen just after releasing a Valsalva strain demonstrate the action of the:",
    topic: "Clinical Application",
    explanation:
      "On release, trapped venous blood surges into the heart and output rebounds, overshooting pressure; the arterial baroreflex senses the surge and reflexly slows the heart, so an intact overshoot-and-bradycardia sequence signals a working reflex.",
    choices: [
      { text: "arterial baroreceptor reflex", isCorrect: true },
      { text: "central ischemic pressor response" },
      { text: "peripheral chemoreceptor reflex" },
      { text: "renin-angiotensin-aldosterone axis" },
    ],
  },
  {
    stem: "Lightheadedness on standing up quickly in a dehydrated person reflects a brief fall in:",
    topic: "Clinical Application",
    explanation:
      "Standing pools blood in the legs and lowers venous return, momentarily dropping cardiac output and cerebral perfusion before the baroreflex compensates; dehydration blunts the reserve, so the transient hypoperfusion is felt as dizziness.",
    choices: [
      { text: "cerebral perfusion from reduced venous return", isCorrect: true },
      { text: "arterial oxygen content of the blood" },
      { text: "blood glucose delivery to the brain" },
      { text: "intracranial pressure within the skull" },
    ],
  },
  {
    stem: "Orthopnea, breathlessness on lying flat in heart failure, worsens in the recumbent position because lying down:",
    topic: "Clinical Application",
    explanation:
      "Recumbency shifts pooled blood from the legs and splanchnic bed back to the central circulation, raising venous return; the failing left heart cannot handle the extra preload, so pulmonary capillary pressure rises and congestion produces breathlessness.",
    choices: [
      { text: "increases venous return and lung congestion", isCorrect: true },
      { text: "decreases venous return to the right heart" },
      { text: "lowers the pulmonary capillary pressure" },
      { text: "improves the emptying of the left ventricle" },
    ],
  },
  {
    stem: "Gentle pressure over the carotid sinus can slow a rapid supraventricular heart rate because the maneuver:",
    topic: "Clinical Application",
    explanation:
      "Carotid sinus pressure mimics a pressure rise, increasing baroreceptor firing; this augments vagal outflow to the AV node, slowing conduction and rate, which can terminate or unmask certain supraventricular tachycardias at the bedside.",
    choices: [
      { text: "increases baroreceptor firing and vagal tone", isCorrect: true },
      { text: "decreases baroreceptor firing to the medulla" },
      { text: "blocks conduction in the bundle branches" },
      { text: "stimulates the sympathetic outflow sharply" },
    ],
  },
  {
    stem: "Chronic aortic stenosis imposes a sustained pressure load on the left ventricle, which characteristically responds by developing:",
    topic: "Clinical Application",
    explanation:
      "A pressure overload drives sarcomeres to be added in parallel, thickening the wall as concentric hypertrophy; this normalizes wall stress for a time but stiffens the ventricle and raises its oxygen demand, eventually risking failure.",
    choices: [
      { text: "concentric hypertrophy of the wall", isCorrect: true },
      { text: "eccentric dilation of the chamber" },
      { text: "thinning and atrophy of the muscle" },
      { text: "fatty replacement of the myocardium" },
    ],
  },
  {
    stem: "Severe chronic anemia can produce a high-output circulatory state largely because the low viscosity and tissue hypoxia together:",
    topic: "Clinical Application",
    explanation:
      "Reduced red-cell mass lowers blood viscosity and delivers less oxygen, so peripheral resistance falls and the heart compensates with a higher output; a chronically high-output load can eventually strain the heart despite the thin blood.",
    choices: [
      { text: "lower resistance and raise cardiac output", isCorrect: true },
      { text: "raise resistance and lower cardiac output" },
      { text: "constrict the arterioles and slow the heart" },
      { text: "thicken the blood and impede its flow" },
    ],
  },
  {
    stem: "Sustained isometric exercise, such as a hard handgrip, raises arterial pressure mainly through a pressor reflex rather than by a large rise in cardiac output; the pressure rises because of:",
    topic: "Clinical Application",
    explanation:
      "Isometric effort triggers a reflex that increases sympathetic outflow, raising heart rate somewhat but chiefly increasing vascular resistance; the result is a pressure load on the heart, in contrast to the volume load of dynamic exercise.",
    choices: [
      { text: "increased sympathetic vascular resistance", isCorrect: true },
      { text: "a large fall in peripheral resistance" },
      { text: "a great rise in venous return alone" },
      { text: "withdrawal of resting sympathetic tone" },
    ],
  },
  {
    stem: "A drug that blocks cardiac beta-1 adrenergic receptors lowers the heart rate chiefly by:",
    topic: "Clinical Application",
    explanation:
      "Beta-1 blockade removes catecholamine drive on the sinoatrial node, flattening its phase-4 depolarization so threshold is reached later; the pacemaker fires less often and rate falls, which also lengthens diastole and coronary filling time.",
    choices: [
      { text: "slowing sinoatrial pacemaker depolarization", isCorrect: true },
      { text: "speeding conduction through the AV node" },
      { text: "increasing calcium entry into the node" },
      { text: "raising the funny current in the pacemaker" },
    ],
  },
];
