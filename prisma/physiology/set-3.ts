/**
 * PHYSIOLOGY — PRACTICE SET 3
 * Respiratory Physiology
 *
 * Guyton & Hall / Ganong depth. Lung volumes and capacities, the mechanics of
 * breathing and surfactant, airway resistance and flow, alveolar ventilation and
 * dead space, diffusion and gas exchange, ventilation-perfusion matching, oxygen
 * and carbon-dioxide transport, the control of breathing, and the responses to
 * exercise and altitude. 100 questions.
 *
 * Options are length-matched (the correct answer is not perceptibly the longest)
 * and every distractor is a defensible near-miss. Positions randomized by engine.
 */

import type { Q } from "../_lib/qbank";

export const PHYSIOLOGY_SET_3: Q[] = [
  {
    stem: "The functional residual capacity is the volume of gas that remains in the lungs after a:",
    topic: "Lung Volumes & Capacities",
    explanation:
      "Functional residual capacity is the resting end-expiratory volume, the gas left after a normal quiet expiration; it equals expiratory reserve volume plus residual volume and represents the point where lung and chest-wall recoil balance.",
    choices: [
      { text: "normal quiet tidal expiration", isCorrect: true },
      { text: "maximal forced expiration effort" },
      { text: "maximal full inspiration effort" },
      { text: "normal quiet tidal inspiration" },
    ],
  },
  {
    stem: "Which lung volume cannot be measured directly by simple spirometry?",
    topic: "Lung Volumes & Capacities",
    explanation:
      "Spirometry records only air that moves in and out, so it misses the residual volume, the gas that stays behind after maximal expiration; residual volume (and any capacity containing it) needs helium dilution or plethysmography instead.",
    choices: [
      { text: "the residual volume", isCorrect: true },
      { text: "the tidal volume" },
      { text: "inspiratory reserve volume" },
      { text: "expiratory reserve volume" },
      { text: "the inspiratory capacity" },
    ],
  },
  {
    stem: "Vital capacity equals the sum of the tidal volume, the inspiratory reserve volume, and the:",
    topic: "Lung Volumes & Capacities",
    explanation:
      "Vital capacity is the largest volume that can be moved in one breath, from full inspiration to full expiration; it is the sum of tidal volume, inspiratory reserve, and expiratory reserve, but it excludes the residual volume left behind.",
    choices: [
      { text: "expiratory reserve volume", isCorrect: true },
      { text: "residual lung volume" },
      { text: "functional residual capacity" },
      { text: "anatomic dead space volume" },
    ],
  },
  {
    stem: "Total lung capacity is best expressed as the sum of the:",
    topic: "Lung Volumes & Capacities",
    explanation:
      "Total lung capacity is all the gas the lungs can hold at full inspiration; it equals vital capacity plus residual volume, so it can only be known once residual volume has been measured by an indirect method rather than by spirometry.",
    choices: [
      { text: "vital capacity and residual volume", isCorrect: true },
      { text: "tidal volume and vital capacity" },
      { text: "inspiratory and expiratory reserves" },
      { text: "functional residual and tidal volume" },
    ],
  },
  {
    stem: "Residual volume and functional residual capacity are typically measured by helium dilution or by:",
    topic: "Lung Volumes & Capacities",
    explanation:
      "Because these volumes contain gas that never leaves the lung, they are found indirectly: helium dilution measures the gas that dilutes an inert tracer, while whole-body plethysmography uses Boyle's law to measure all thoracic gas, trapped or not.",
    choices: [
      { text: "whole-body plethysmography", isCorrect: true },
      { text: "a standard peak-flow meter" },
      { text: "simple bedside spirometry" },
      { text: "a single-breath nitrogen washout" },
    ],
  },
  {
    stem: "In a purely restrictive disorder such as pulmonary fibrosis, the total lung capacity is characteristically:",
    topic: "Lung Volumes & Capacities",
    explanation:
      "Restrictive disease stiffens the lungs or limits expansion, so every volume including total lung capacity falls; the FEV1 and FVC drop together, which keeps their ratio normal or even high despite the reduced absolute volumes.",
    choices: [
      { text: "reduced below the normal range", isCorrect: true },
      { text: "increased above the normal range" },
      { text: "unchanged from the normal value" },
      { text: "variable but usually raised" },
    ],
  },
  {
    stem: "In obstructive disease such as emphysema, the residual volume characteristically:",
    topic: "Lung Volumes & Capacities",
    explanation:
      "Obstruction and loss of elastic recoil let air become trapped behind collapsing airways during expiration, so residual volume and functional residual capacity rise; the hyperinflated chest works at a mechanical disadvantage as a result.",
    choices: [
      { text: "rises because of air trapping", isCorrect: true },
      { text: "falls because of lung stiffening" },
      { text: "stays exactly at the normal level" },
      { text: "drops toward the tidal volume" },
    ],
  },
  {
    stem: "True or False: The residual volume cannot be exhaled from the lungs and therefore cannot be measured by spirometry alone.",
    type: "TRUE_FALSE",
    topic: "Lung Volumes & Capacities",
    explanation:
      "True. By definition residual volume is the gas remaining after a maximal expiration, so no spirometer that only tracks exhaled air can capture it; it must be obtained indirectly by gas dilution or body plethysmography.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "A reduced FEV1/FVC ratio on spirometry is the hallmark of:",
    topic: "Lung Volumes & Capacities",
    explanation:
      "The ratio of forced expiratory volume in one second to forced vital capacity falls when airflow is obstructed, because FEV1 drops more than FVC; in restriction both fall together, so the ratio there is preserved or increased.",
    choices: [
      { text: "obstructive lung disease", isCorrect: true },
      { text: "restrictive lung disease" },
      { text: "a normal healthy lung" },
      { text: "pure anemia of the blood" },
    ],
  },
  {
    stem: "The inspiratory capacity is the maximum volume that can be inhaled from the resting end-expiratory level and equals the:",
    topic: "Lung Volumes & Capacities",
    explanation:
      "Inspiratory capacity is measured from functional residual capacity to total lung capacity; it is the sum of the tidal volume and the inspiratory reserve volume, representing how much more can be drawn in beyond a normal quiet breath.",
    choices: [
      { text: "tidal plus inspiratory reserve volume", isCorrect: true },
      { text: "tidal plus expiratory reserve volume" },
      { text: "vital capacity minus tidal volume" },
      { text: "residual plus expiratory reserve volume" },
    ],
  },
  {
    stem: "Functional residual capacity is the sum of the residual volume and the:",
    topic: "Lung Volumes & Capacities",
    explanation:
      "At the resting end of a quiet breath, the gas remaining is the residual volume plus the expiratory reserve volume that could still be forced out; together these make the functional residual capacity where recoil forces are balanced.",
    choices: [
      { text: "expiratory reserve volume", isCorrect: true },
      { text: "inspiratory reserve volume" },
      { text: "tidal breathing volume" },
      { text: "inspiratory capacity value" },
    ],
  },
  {
    stem: "During quiet breathing at rest, expiration is normally:",
    topic: "Mechanics of Breathing",
    explanation:
      "Quiet inspiration is active work by the diaphragm and external intercostals, but quiet expiration is passive: the stretched elastic tissue of the lungs and chest wall simply recoils, pushing air out without muscular effort.",
    choices: [
      { text: "passive, driven by elastic recoil", isCorrect: true },
      { text: "active, driven by the diaphragm" },
      { text: "active, using the internal intercostals" },
      { text: "driven by contraction of the abdomen" },
    ],
  },
  {
    stem: "At the end of a quiet expiration, the pressure in the intrapleural space is:",
    topic: "Mechanics of Breathing",
    explanation:
      "The chest wall pulls outward while the lungs recoil inward, and this tug of war keeps the fluid-filled pleural space at a slightly subatmospheric pressure at rest; that negativity is what holds the lungs expanded against their recoil.",
    choices: [
      { text: "slightly negative to atmosphere", isCorrect: true },
      { text: "equal to the atmospheric pressure" },
      { text: "well above the atmospheric pressure" },
      { text: "equal to the alveolar gas pressure" },
    ],
  },
  {
    stem: "The transpulmonary pressure that holds the alveoli open is the difference between the:",
    topic: "Mechanics of Breathing",
    explanation:
      "Transpulmonary pressure is alveolar pressure minus intrapleural pressure; this distending pressure across the lung wall keeps alveoli inflated, and if it is lost, as when air enters the pleural space, the lung collapses.",
    choices: [
      { text: "alveolar and intrapleural pressures", isCorrect: true },
      { text: "atmospheric and alveolar pressures" },
      { text: "arterial and venous gas pressures" },
      { text: "airway and mouth opening pressures" },
    ],
  },
  {
    stem: "Lung compliance is defined as the change in lung volume produced per unit change in:",
    topic: "Mechanics of Breathing",
    explanation:
      "Compliance measures the distensibility of the lung, the volume gained for each increment of distending pressure; a highly compliant lung inflates easily, while a stiff, low-compliance lung needs a large pressure for a small volume.",
    choices: [
      { text: "transpulmonary distending pressure", isCorrect: true },
      { text: "airway flow resistance" },
      { text: "alveolar oxygen tension" },
      { text: "pleural surface tension" },
    ],
  },
  {
    stem: "Compared with a normal lung, lung compliance is characteristically increased in:",
    topic: "Mechanics of Breathing",
    explanation:
      "Emphysema destroys elastic tissue, so the lung becomes floppy and over-compliant, inflating easily but recoiling poorly; fibrosis and surfactant loss do the opposite, stiffening the lung and lowering its compliance.",
    choices: [
      { text: "emphysema of the lung", isCorrect: true },
      { text: "pulmonary fibrosis" },
      { text: "surfactant deficiency" },
      { text: "alveolar edema" },
    ],
  },
  {
    stem: "Pulmonary surfactant raises lung compliance and stabilizes the alveoli mainly by:",
    topic: "Mechanics of Breathing",
    explanation:
      "Surfactant is a phospholipid film that reduces the surface tension at the air-liquid interface; this lowers the pressure needed to inflate alveoli, prevents small ones from emptying into large ones, and keeps them from collapsing at end-expiration.",
    choices: [
      { text: "lowering alveolar surface tension", isCorrect: true },
      { text: "thickening the alveolar wall" },
      { text: "raising the airway resistance" },
      { text: "increasing alveolar surface tension" },
    ],
  },
  {
    stem: "Pulmonary surfactant is synthesized and secreted by the:",
    topic: "Mechanics of Breathing",
    explanation:
      "The type II alveolar cells manufacture and release surfactant and also serve as the progenitors that repair the epithelium; the flat type I cells, by contrast, form the thin surface across which gas actually diffuses.",
    choices: [
      { text: "type II alveolar cells", isCorrect: true },
      { text: "type I alveolar cells" },
      { text: "alveolar macrophages" },
      { text: "bronchial goblet cells" },
    ],
  },
  {
    stem: "By the law of Laplace, in the absence of surfactant the smaller alveoli would tend to:",
    topic: "Mechanics of Breathing",
    explanation:
      "Laplace's law gives collapsing pressure as twice the surface tension over the radius, so at equal tension a smaller alveolus has a higher pressure and empties into larger ones; surfactant lowers tension more in small alveoli, equalizing this.",
    choices: [
      { text: "empty into the larger alveoli", isCorrect: true },
      { text: "expand at the expense of large ones" },
      { text: "remain perfectly stable in size" },
      { text: "develop a lower internal pressure" },
    ],
  },
  {
    stem: "The respiratory distress syndrome of a premature newborn arises chiefly from a deficiency of:",
    topic: "Mechanics of Breathing",
    explanation:
      "Surfactant production by type II cells matures late in gestation, so premature infants may lack it; the resulting high surface tension causes widespread alveolar collapse, stiff lungs, and severe difficulty in expanding the lungs with each breath.",
    choices: [
      { text: "pulmonary surfactant", isCorrect: true },
      { text: "circulating hemoglobin" },
      { text: "bronchial cartilage" },
      { text: "respiratory muscle mass" },
    ],
  },
  {
    stem: "At the functional residual capacity, the inward elastic recoil of the lungs is balanced by the:",
    topic: "Mechanics of Breathing",
    explanation:
      "At the resting volume the lung's tendency to recoil inward is exactly opposed by the chest wall's tendency to spring outward; this equilibrium sets the functional residual capacity, and it is the pleural link that couples the two.",
    choices: [
      { text: "outward recoil of the chest wall", isCorrect: true },
      { text: "inward pull of the diaphragm" },
      { text: "positive pressure in the alveoli" },
      { text: "surface tension of the airways" },
    ],
  },
  {
    stem: "True or False: In stiff, low-compliance lungs the elastic work of breathing is increased, which favors rapid shallow breaths over slow deep ones.",
    type: "TRUE_FALSE",
    topic: "Mechanics of Breathing",
    explanation:
      "True. When the lung is stiff, large tidal volumes demand disproportionate elastic work, so the pattern that minimizes total work shifts toward smaller, faster breaths; this is why fibrosis patients often breathe rapidly and shallowly.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The greatest share of resistance to airflow in the normal respiratory tract is offered by the:",
    topic: "Airway Resistance & Flow",
    explanation:
      "Although each small bronchiole is narrow, they are so numerous and arranged in parallel that their combined cross-section is huge, giving low resistance; the medium-sized bronchi, fewer and not yet hugely branched, carry the most resistance.",
    choices: [
      { text: "medium-sized bronchi", isCorrect: true },
      { text: "smallest terminal bronchioles" },
      { text: "respiratory bronchioles" },
      { text: "alveolar ducts and sacs" },
    ],
  },
  {
    stem: "Parasympathetic (vagal) stimulation of the airway smooth muscle causes:",
    topic: "Airway Resistance & Flow",
    explanation:
      "Vagal cholinergic tone contracts bronchial smooth muscle, narrowing the airways and raising resistance; sympathetic and circulating catecholamines acting on beta-2 receptors do the reverse, relaxing the muscle and widening the airways.",
    choices: [
      { text: "bronchoconstriction and narrowing", isCorrect: true },
      { text: "bronchodilation and widening" },
      { text: "no change in airway caliber" },
      { text: "collapse of the alveolar walls" },
    ],
  },
  {
    stem: "During a maximal forced expiration, airflow becomes effort-independent because of:",
    topic: "Airway Resistance & Flow",
    explanation:
      "Beyond a point, harder effort raises pleural pressure that compresses the airways as much as it drives flow, so the equal-pressure point limits flow; this dynamic compression makes maximal expiratory flow depend on recoil and resistance, not effort.",
    choices: [
      { text: "dynamic compression of airways", isCorrect: true },
      { text: "a rise in the lung compliance" },
      { text: "relaxation of the airway muscle" },
      { text: "an increase in surfactant release" },
    ],
  },
  {
    stem: "A scooped-out, concave expiratory limb on the flow-volume loop is a signature of:",
    topic: "Airway Resistance & Flow",
    explanation:
      "In obstruction, airways narrow and collapse during expiration so flow falls disproportionately at low lung volumes, carving a concave scoop into the expiratory limb; restriction instead shrinks the whole loop while keeping its shape.",
    choices: [
      { text: "airflow obstruction", isCorrect: true },
      { text: "lung restriction" },
      { text: "a normal healthy lung" },
      { text: "a fixed upper-airway block" },
    ],
  },
  {
    stem: "Airway resistance falls as lung volume rises, chiefly because higher lung volumes:",
    topic: "Airway Resistance & Flow",
    explanation:
      "The airways are tethered to surrounding lung tissue, so as the lung inflates the radial traction pulls the airways open, widening them; this is why resistance is lowest near total lung capacity and rises as the lung empties.",
    choices: [
      { text: "widen the airways by radial traction", isCorrect: true },
      { text: "increase the airway smooth-muscle tone" },
      { text: "thicken the mucus lining the airways" },
      { text: "raise the pleural surface tension" },
    ],
  },
  {
    stem: "True or False: Because the many small airways are arranged in parallel, their large combined cross-sectional area makes them a site of low rather than high airway resistance.",
    type: "TRUE_FALSE",
    topic: "Airway Resistance & Flow",
    explanation:
      "True. Resistance in parallel adds reciprocally, so the enormous number of small airways together present a vast cross-section and little resistance; this is why early small-airway disease can be present yet hard to detect on ordinary spirometry.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "In an acute asthma attack, airway resistance rises mainly through a combination of bronchial smooth-muscle contraction and:",
    topic: "Airway Resistance & Flow",
    explanation:
      "Asthma narrows airways both by bronchospasm and by mucosal inflammation with edema and mucus, all of which shrink the lumen; the increased resistance is most pronounced in expiration, producing wheeze and prolonged expiratory flow.",
    choices: [
      { text: "mucosal inflammation and edema", isCorrect: true },
      { text: "loss of alveolar surfactant" },
      { text: "stiffening of the chest wall" },
      { text: "weakening of the diaphragm" },
    ],
  },
  {
    stem: "The peak expiratory flow rate measured with a handheld meter is most useful for monitoring:",
    topic: "Airway Resistance & Flow",
    explanation:
      "Peak flow reflects the maximal effort-dependent flow early in expiration and tracks large-airway caliber; because it falls when airways narrow, it is a simple way for asthmatics to monitor obstruction and response to treatment at home.",
    choices: [
      { text: "day-to-day airway obstruction", isCorrect: true },
      { text: "the total lung capacity value" },
      { text: "the alveolar diffusing capacity" },
      { text: "the strength of the diaphragm" },
    ],
  },
  {
    stem: "Airway resistance, like resistance in a tube, is extremely sensitive to caliber because it varies with the airway radius raised to the:",
    topic: "Airway Resistance & Flow",
    explanation:
      "By Poiseuille's relationship for laminar flow, resistance is inversely proportional to the fourth power of the radius, so even small changes in airway caliber cause large changes in resistance; this is why modest bronchoconstriction has big effects.",
    choices: [
      { text: "fourth power inversely", isCorrect: true },
      { text: "second power inversely" },
      { text: "first power directly" },
      { text: "third power directly" },
    ],
  },
  {
    stem: "Sympathetic and circulating catecholamines dilate the bronchi by acting on:",
    topic: "Airway Resistance & Flow",
    explanation:
      "Beta-2 adrenergic receptors on airway smooth muscle relax it when stimulated, which is why inhaled beta-2 agonists are front-line bronchodilators; this relaxation widens the airways and lowers the resistance to airflow during an attack.",
    choices: [
      { text: "beta-2 adrenergic receptors", isCorrect: true },
      { text: "alpha-1 adrenergic receptors" },
      { text: "muscarinic cholinergic receptors" },
      { text: "nicotinic cholinergic receptors" },
    ],
  },
  {
    stem: "Which findings are characteristic of an obstructive ventilatory pattern? Select all that apply.",
    type: "MULTI",
    topic: "Airway Resistance & Flow",
    explanation:
      "Obstruction impairs emptying, so the FEV1/FVC ratio falls, residual volume and functional residual capacity rise with air trapping, and the expiratory flow-volume limb is scooped; a reduced total lung capacity and a preserved ratio instead point to restriction.",
    choices: [
      { text: "a reduced FEV1/FVC ratio", isCorrect: true },
      { text: "an increased residual volume", isCorrect: true },
      { text: "air trapping that raises the FRC", isCorrect: true },
      { text: "a scooped expiratory flow curve", isCorrect: true },
      { text: "a reduced total lung capacity" },
      { text: "a normal or raised FEV1/FVC ratio" },
    ],
  },
  {
    stem: "Alveolar ventilation per minute is calculated as the respiratory rate multiplied by the:",
    topic: "Alveolar Ventilation & Dead Space",
    explanation:
      "Only the gas reaching perfused alveoli takes part in exchange, so alveolar ventilation uses the tidal volume minus the dead space; multiplying that effective breath by the rate gives the volume of fresh gas actually available for exchange each minute.",
    choices: [
      { text: "tidal volume minus the dead space", isCorrect: true },
      { text: "tidal volume plus the dead space" },
      { text: "full tidal volume of each breath" },
      { text: "vital capacity of the lungs" },
    ],
  },
  {
    stem: "The anatomic dead space is the volume of the conducting airways that:",
    topic: "Alveolar Ventilation & Dead Space",
    explanation:
      "The nose, pharynx, trachea, and bronchi conduct air but have no alveoli, so the roughly 150 milliliters they hold is ventilated yet takes no part in gas exchange; this wasted volume is the anatomic dead space of the lung.",
    choices: [
      { text: "is ventilated but exchanges no gas", isCorrect: true },
      { text: "is both ventilated and perfused" },
      { text: "is perfused but never ventilated" },
      { text: "holds the residual volume of gas" },
    ],
  },
  {
    stem: "Physiologic dead space equals the anatomic dead space plus the:",
    topic: "Alveolar Ventilation & Dead Space",
    explanation:
      "Physiologic dead space adds to the conducting airways any alveoli that are ventilated but poorly perfused and so cannot exchange gas; in healthy lungs the two dead spaces are nearly equal, but disease can greatly enlarge the alveolar portion.",
    choices: [
      { text: "alveolar dead space of the lung", isCorrect: true },
      { text: "residual volume of the lung" },
      { text: "total shunt fraction of blood" },
      { text: "expiratory reserve volume" },
    ],
  },
  {
    stem: "For a given minute ventilation, rapid shallow breathing lowers the alveolar ventilation because it:",
    topic: "Alveolar Ventilation & Dead Space",
    explanation:
      "Each breath must first refill the fixed dead space before fresh gas reaches the alveoli, so small breaths waste a larger fraction on dead space; the same minute volume delivered in shallow rapid breaths therefore ventilates the alveoli less effectively.",
    choices: [
      { text: "wastes more of each breath on dead space", isCorrect: true },
      { text: "reduces the total minute ventilation" },
      { text: "increases the effective tidal volume" },
      { text: "lowers the anatomic dead space volume" },
    ],
  },
  {
    stem: "According to the alveolar gas equation, the alveolar oxygen tension falls when the:",
    topic: "Alveolar Ventilation & Dead Space",
    explanation:
      "The alveolar gas equation shows alveolar oxygen as inspired oxygen minus the alveolar carbon dioxide divided by the respiratory quotient; so as carbon dioxide accumulates with hypoventilation, it displaces oxygen and the alveolar oxygen tension drops.",
    choices: [
      { text: "alveolar carbon dioxide tension rises", isCorrect: true },
      { text: "respiratory quotient rises sharply" },
      { text: "inspired oxygen fraction increases" },
      { text: "barometric pressure is increased" },
    ],
  },
  {
    stem: "Arterial carbon-dioxide tension, for a given rate of carbon-dioxide production, is inversely proportional to the:",
    topic: "Alveolar Ventilation & Dead Space",
    explanation:
      "The kidneys set bicarbonate but the lungs set carbon dioxide: arterial PCO2 rises when alveolar ventilation falls and falls when ventilation rises, an inverse relationship that makes PCO2 the clinical index of the adequacy of alveolar ventilation.",
    choices: [
      { text: "alveolar ventilation rate", isCorrect: true },
      { text: "cardiac output of the heart" },
      { text: "inspired oxygen fraction" },
      { text: "total dead-space volume" },
    ],
  },
  {
    stem: "Pure alveolar hypoventilation, with otherwise normal lungs, characteristically produces:",
    topic: "Alveolar Ventilation & Dead Space",
    explanation:
      "When ventilation fails to keep pace with metabolism, carbon dioxide accumulates and, through the alveolar gas equation, oxygen falls; the hallmark is therefore a rising PCO2 with a falling PO2 while the alveolar-arterial gradient stays normal.",
    choices: [
      { text: "a rise in PCO2 with a fall in PO2", isCorrect: true },
      { text: "a fall in PCO2 with a rise in PO2" },
      { text: "a rise in both PO2 and PCO2" },
      { text: "a fall in both PO2 and PCO2" },
    ],
  },
  {
    stem: "True or False: Doubling the alveolar ventilation while carbon-dioxide production stays constant will roughly halve the arterial PCO2.",
    type: "TRUE_FALSE",
    topic: "Alveolar Ventilation & Dead Space",
    explanation:
      "True. Arterial PCO2 is inversely proportional to alveolar ventilation at a fixed production rate, so a doubling of effective ventilation approximately halves the PCO2; this inverse law underlies the effect of hyper- and hypoventilation on blood gases.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The Bohr equation estimates the dead-space fraction of a breath from the difference between arterial and expired:",
    topic: "Alveolar Ventilation & Dead Space",
    explanation:
      "The Bohr method compares the carbon dioxide in arterial blood with that in mixed expired gas; because dead-space gas contributes no carbon dioxide, the dilution of expired carbon dioxide reveals what fraction of each tidal breath was wasted.",
    choices: [
      { text: "carbon-dioxide tensions", isCorrect: true },
      { text: "oxygen tensions" },
      { text: "nitrogen tensions" },
      { text: "water-vapor tensions" },
    ],
  },
  {
    stem: "Minute ventilation is the volume of air moved per minute and equals the respiratory rate times the:",
    topic: "Alveolar Ventilation & Dead Space",
    explanation:
      "Minute ventilation is the total gas breathed each minute, the simple product of tidal volume and breathing frequency; unlike alveolar ventilation it does not subtract the dead space, so it overstates the gas actually reaching the alveoli.",
    choices: [
      { text: "full tidal volume per breath", isCorrect: true },
      { text: "tidal volume minus dead space" },
      { text: "alveolar volume per breath" },
      { text: "vital capacity per breath" },
    ],
  },
  {
    stem: "A patient breathing at 20 breaths per minute with a 400 mL tidal volume and 150 mL dead space has an alveolar ventilation of about:",
    topic: "Alveolar Ventilation & Dead Space",
    explanation:
      "Alveolar ventilation is the effective breath, tidal volume minus dead space, times the rate: 400 minus 150 is 250 milliliters, and 250 times 20 breaths gives about 5000 milliliters, or five liters, of fresh alveolar gas per minute.",
    choices: [
      { text: "5.0 liters per minute", isCorrect: true },
      { text: "8.0 liters per minute" },
      { text: "3.0 liters per minute" },
      { text: "2.5 liters per minute" },
    ],
  },
  {
    stem: "By Fick's law of diffusion, the rate of gas transfer across the alveolar membrane is increased by:",
    topic: "Gas Exchange & Diffusion",
    explanation:
      "Fick's law makes diffusion proportional to surface area and the partial-pressure difference and inversely proportional to membrane thickness; a large thin membrane with a steep gradient therefore maximizes transfer, as the healthy lung provides.",
    choices: [
      { text: "a larger area and thinner membrane", isCorrect: true },
      { text: "a smaller area and thicker membrane" },
      { text: "a lower partial-pressure gradient" },
      { text: "a longer diffusion path length" },
    ],
  },
  {
    stem: "In the normal lung at rest, the uptake of oxygen into the blood is best described as:",
    topic: "Gas Exchange & Diffusion",
    explanation:
      "Oxygen equilibrates across the healthy membrane within the first third of the capillary transit, so the amount taken up depends on how much blood flows past, not on diffusion; oxygen uptake is therefore normally perfusion-limited.",
    choices: [
      { text: "perfusion-limited", isCorrect: true },
      { text: "diffusion-limited" },
      { text: "ventilation-limited" },
      { text: "essentially unlimited" },
    ],
  },
  {
    stem: "Carbon monoxide is used to measure the diffusing capacity of the lung because its uptake is:",
    topic: "Gas Exchange & Diffusion",
    explanation:
      "Carbon monoxide binds hemoglobin so avidly that its capillary partial pressure stays near zero, so its transfer never reaches equilibrium and is limited purely by diffusion; this makes it an ideal probe of the membrane's diffusing capacity.",
    choices: [
      { text: "diffusion-limited throughout transit", isCorrect: true },
      { text: "perfusion-limited throughout transit" },
      { text: "limited by the alveolar ventilation" },
      { text: "independent of membrane thickness" },
    ],
  },
  {
    stem: "The alveolar-arterial oxygen gradient is the difference between the:",
    topic: "Gas Exchange & Diffusion",
    explanation:
      "The A-a gradient subtracts the measured arterial oxygen from the calculated alveolar oxygen; a normal small gradient means the membrane and matching are intact, while a widened gradient points to shunt, mismatch, or a diffusion barrier.",
    choices: [
      { text: "alveolar and arterial oxygen tensions", isCorrect: true },
      { text: "arterial and venous oxygen tensions" },
      { text: "inspired and alveolar oxygen tensions" },
      { text: "arterial oxygen and carbon-dioxide tensions" },
    ],
  },
  {
    stem: "Which cause of hypoxemia is characteristically associated with a normal alveolar-arterial oxygen gradient?",
    topic: "Gas Exchange & Diffusion",
    explanation:
      "Hypoventilation lowers alveolar and arterial oxygen equally, so the gradient between them stays normal even as both fall; shunt, ventilation-perfusion mismatch, and diffusion impairment all widen the gradient by adding poorly oxygenated blood.",
    choices: [
      { text: "alveolar hypoventilation", isCorrect: true },
      { text: "a right-to-left shunt" },
      { text: "ventilation-perfusion mismatch" },
      { text: "a diffusion impairment" },
    ],
  },
  {
    stem: "A thickened alveolar-capillary membrane, as in interstitial fibrosis or pulmonary edema, impairs gas exchange by:",
    topic: "Gas Exchange & Diffusion",
    explanation:
      "Fick's law makes transfer inversely proportional to membrane thickness, so a thickened barrier slows diffusion; oxygen, which has less diffusion reserve than carbon dioxide, is affected first, which is why such patients desaturate especially on exertion.",
    choices: [
      { text: "increasing the diffusion path length", isCorrect: true },
      { text: "increasing the alveolar surface area" },
      { text: "raising the oxygen partial-pressure gradient" },
      { text: "reducing the pulmonary blood flow" },
    ],
  },
  {
    stem: "Carbon dioxide crosses the alveolar-capillary membrane far more readily than oxygen chiefly because it is:",
    topic: "Gas Exchange & Diffusion",
    explanation:
      "Carbon dioxide is about twenty times more soluble in the membrane than oxygen, so despite a smaller partial-pressure gradient it diffuses much faster; this is why diffusion problems cause hypoxemia long before they cause carbon-dioxide retention.",
    choices: [
      { text: "much more soluble in the membrane", isCorrect: true },
      { text: "a substantially smaller molecule" },
      { text: "carried by a specific transporter" },
      { text: "under a far larger pressure gradient" },
    ],
  },
  {
    stem: "Which changes would reduce the lung's measured diffusing capacity? Select all that apply.",
    type: "MULTI",
    topic: "Gas Exchange & Diffusion",
    explanation:
      "Diffusing capacity falls when the barrier thickens, when surface area is lost, when alveoli fill with fluid, or when there is less hemoglobin to bind the gas; recruiting more capillaries in exercise or raising hemoglobin instead increases it.",
    choices: [
      { text: "thickening of the alveolar membrane", isCorrect: true },
      { text: "loss of alveolar surface area", isCorrect: true },
      { text: "anemia lowering the hemoglobin", isCorrect: true },
      { text: "fluid filling the alveoli in edema", isCorrect: true },
      { text: "capillary recruitment during exercise" },
      { text: "a rise in the blood hemoglobin" },
    ],
  },
  {
    stem: "A red cell normally spends about three-quarters of a second in the pulmonary capillary, and oxygen equilibration is normally complete by about:",
    topic: "Gas Exchange & Diffusion",
    explanation:
      "At rest the red cell transit is roughly 0.75 seconds, yet oxygen equilibrates within the first 0.25 seconds, leaving a large safety margin; this reserve is why diffusion limitation appears only in disease or when transit shortens in heavy exercise.",
    choices: [
      { text: "one-quarter of a second", isCorrect: true },
      { text: "the full transit time" },
      { text: "two seconds of transit" },
      { text: "the last third of transit" },
    ],
  },
  {
    stem: "Emphysema lowers the diffusing capacity for carbon monoxide mainly by:",
    topic: "Gas Exchange & Diffusion",
    explanation:
      "Emphysema destroys alveolar walls and the capillaries within them, so the surface area available for diffusion shrinks; a reduced diffusing capacity in a patient with airflow obstruction therefore points toward emphysema rather than asthma.",
    choices: [
      { text: "destroying alveolar surface area", isCorrect: true },
      { text: "thickening the alveolar membrane" },
      { text: "filling the alveoli with fluid" },
      { text: "raising the pulmonary blood volume" },
    ],
  },
  {
    stem: "The overall ventilation-perfusion ratio of the normal whole lung is approximately:",
    topic: "Ventilation-Perfusion Matching",
    explanation:
      "Resting alveolar ventilation is about four liters per minute and pulmonary blood flow about five, giving a whole-lung ventilation-perfusion ratio near 0.8; regional values vary widely around this average from the apex to the base of the lung.",
    choices: [
      { text: "zero point eight", isCorrect: true },
      { text: "two point zero" },
      { text: "zero point three" },
      { text: "five point zero" },
    ],
  },
  {
    stem: "In the upright lung the ventilation-perfusion ratio is highest at the:",
    topic: "Ventilation-Perfusion Matching",
    explanation:
      "Gravity reduces blood flow toward the apex more than it reduces ventilation, so the apex has the highest ventilation-perfusion ratio; the base, richly perfused, has the lowest, and this regional spread contributes a small gradient even in health.",
    choices: [
      { text: "apex of the lung", isCorrect: true },
      { text: "base of the lung" },
      { text: "central hilar region" },
      { text: "posterior lung margin" },
    ],
  },
  {
    stem: "In lung zone 1, which may appear at the apex when arterial pressure is low, alveolar pressure exceeds:",
    topic: "Ventilation-Perfusion Matching",
    explanation:
      "Zone 1 exists where alveolar pressure is greater than both pulmonary arterial and venous pressures, so the capillaries are squeezed shut and no flow occurs; it behaves as alveolar dead space and normally appears only with hypotension or high alveolar pressure.",
    choices: [
      { text: "both arterial and venous pressures", isCorrect: true },
      { text: "only the venous pressure" },
      { text: "only the arterial pressure" },
      { text: "neither vascular pressure" },
    ],
  },
  {
    stem: "Both ventilation and blood flow are greater at the base of the upright lung, yet the base has the lower ventilation-perfusion ratio because moving downward:",
    topic: "Ventilation-Perfusion Matching",
    explanation:
      "Both increase from apex to base, but perfusion rises more steeply than ventilation under gravity, so their ratio falls toward the base; this uneven change is why the well-perfused base is relatively underventilated compared with the apex.",
    choices: [
      { text: "perfusion increases more than ventilation", isCorrect: true },
      { text: "ventilation increases more than perfusion" },
      { text: "only the ventilation actually increases" },
      { text: "both fall equally toward the base" },
    ],
  },
  {
    stem: "A lung unit with a very high ventilation-perfusion ratio, ventilated but scarcely perfused, behaves physiologically like:",
    topic: "Ventilation-Perfusion Matching",
    explanation:
      "When ventilation greatly exceeds perfusion, the gas exchanges with little blood and its composition approaches inspired air; such a unit wastes ventilation and behaves like dead space, the extreme case being a unit with no perfusion at all.",
    choices: [
      { text: "alveolar dead space", isCorrect: true },
      { text: "a right-to-left shunt" },
      { text: "a normal exchanging unit" },
      { text: "a diffusion-limited unit" },
    ],
  },
  {
    stem: "A lung unit that is well perfused but poorly ventilated, with a low ventilation-perfusion ratio, behaves like:",
    topic: "Ventilation-Perfusion Matching",
    explanation:
      "When perfusion exceeds ventilation, blood leaves incompletely oxygenated and the composition approaches mixed venous blood; such low-ratio units act like a shunt, and the extreme case of perfusion without any ventilation is a true shunt.",
    choices: [
      { text: "a shunt adding venous blood", isCorrect: true },
      { text: "physiologic dead space" },
      { text: "a normal exchanging unit" },
      { text: "a zone 1 lung region" },
    ],
  },
  {
    stem: "Local alveolar hypoxia in a poorly ventilated lung region triggers a vascular response that:",
    topic: "Ventilation-Perfusion Matching",
    explanation:
      "Unlike systemic vessels, pulmonary arterioles constrict in response to alveolar hypoxia; this hypoxic vasoconstriction diverts blood away from underventilated regions toward better-ventilated ones, improving the overall matching of ventilation and perfusion.",
    choices: [
      { text: "diverts blood to better-ventilated regions", isCorrect: true },
      { text: "increases flow to the hypoxic region" },
      { text: "has no effect on the local flow" },
      { text: "opens shunts across the lung" },
    ],
  },
  {
    stem: "Which changes tend to push a lung region toward dead-space (high ventilation-perfusion) behavior? Select all that apply.",
    type: "MULTI",
    topic: "Ventilation-Perfusion Matching",
    explanation:
      "A region acts like dead space when perfusion falls relative to ventilation: a pulmonary embolus, capillary compression by over-inflation, systemic hypotension, and the naturally under-perfused apex all raise the ratio, whereas airway obstruction or alveolar flooding lower it toward shunt.",
    choices: [
      { text: "a pulmonary embolus cutting perfusion", isCorrect: true },
      { text: "over-inflation compressing capillaries", isCorrect: true },
      { text: "hypotension lowering lung perfusion", isCorrect: true },
      { text: "the naturally under-perfused apex", isCorrect: true },
      { text: "airway obstruction cutting ventilation" },
      { text: "alveolar flooding by edema fluid" },
    ],
  },
  {
    stem: "True or False: A true right-to-left shunt is the extreme of a low ventilation-perfusion ratio and does not fully correct when the patient breathes 100 percent oxygen.",
    type: "TRUE_FALSE",
    topic: "Ventilation-Perfusion Matching",
    explanation:
      "True. Shunted blood bypasses ventilated alveoli entirely, so enriching alveolar oxygen cannot reach it; adding pure oxygen barely raises arterial oxygen, which is the classic way a shunt is distinguished from ordinary mismatch at the bedside.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Ventilation-perfusion mismatch, rather than pure shunt or hypoventilation, is clinically important because it is:",
    topic: "Ventilation-Perfusion Matching",
    explanation:
      "Regional mismatching of ventilation and perfusion is the most common cause of hypoxemia in lung disease; because most units are only relatively, not absolutely, mismatched, the resulting hypoxemia usually improves substantially with supplemental oxygen.",
    choices: [
      { text: "the commonest cause of hypoxemia", isCorrect: true },
      { text: "a rare cause of hypoxemia" },
      { text: "unresponsive to added oxygen" },
      { text: "associated with a normal A-a gradient" },
    ],
  },
  {
    stem: "The great majority of the oxygen carried in arterial blood is transported:",
    topic: "Oxygen Transport",
    explanation:
      "Only a tiny fraction of oxygen dissolves in plasma; almost all is bound reversibly to hemoglobin inside the red cells, each gram of which can carry about 1.34 milliliters, so hemoglobin concentration largely sets how much oxygen the blood holds.",
    choices: [
      { text: "bound to hemoglobin in red cells", isCorrect: true },
      { text: "dissolved freely in the plasma" },
      { text: "as bicarbonate ion in plasma" },
      { text: "bound to plasma albumin protein" },
    ],
  },
  {
    stem: "The total oxygen content of arterial blood depends mainly on the hemoglobin concentration and the:",
    topic: "Oxygen Transport",
    explanation:
      "Oxygen content is chiefly the hemoglobin times its saturation times the carrying constant, plus a small dissolved amount; so both anemia and desaturation cut content even when the arterial oxygen tension of the plasma looks acceptable.",
    choices: [
      { text: "arterial oxygen saturation", isCorrect: true },
      { text: "arterial carbon-dioxide level" },
      { text: "plasma bicarbonate level" },
      { text: "cardiac output per minute" },
    ],
  },
  {
    stem: "The sigmoid, S-shaped oxygen-hemoglobin dissociation curve reflects:",
    topic: "Oxygen Transport",
    explanation:
      "Each of hemoglobin's four subunits binds oxygen more readily once its neighbors have, a cooperativity that produces the S-shaped curve; this steepens unloading in the tissues while the flat top preserves loading despite modest falls in lung oxygen.",
    choices: [
      { text: "cooperative binding among the subunits", isCorrect: true },
      { text: "simple linear binding at each site" },
      { text: "competition with carbon dioxide" },
      { text: "the dissolved oxygen in plasma" },
    ],
  },
  {
    stem: "The P50 of hemoglobin is defined as the oxygen tension at which hemoglobin is:",
    topic: "Oxygen Transport",
    explanation:
      "P50 marks the oxygen partial pressure giving half-saturation and indexes affinity: a higher P50 means lower affinity and easier unloading (a right shift), while a lower P50 means higher affinity and tighter holding of oxygen (a left shift).",
    choices: [
      { text: "half saturated with oxygen", isCorrect: true },
      { text: "fully saturated with oxygen" },
      { text: "completely free of oxygen" },
      { text: "bound to carbon monoxide" },
    ],
  },
  {
    stem: "Which changes shift the oxygen-hemoglobin dissociation curve to the right, favoring oxygen unloading? Select all that apply.",
    type: "MULTI",
    topic: "Oxygen Transport",
    explanation:
      "The Bohr effect shifts the curve rightward when tissues are metabolically active: a rise in temperature, a fall in pH, a rise in carbon dioxide, and a rise in 2,3-BPG all lower affinity and release oxygen, whereas cooling and alkalosis shift it left.",
    choices: [
      { text: "a rise in the blood temperature", isCorrect: true },
      { text: "a fall in the blood pH (acidosis)", isCorrect: true },
      { text: "a rise in the carbon-dioxide level", isCorrect: true },
      { text: "a rise in red-cell 2,3-BPG", isCorrect: true },
      { text: "a fall in the blood temperature" },
      { text: "a rise in the blood pH (alkalosis)" },
    ],
  },
  {
    stem: "Which statements about the oxygen-hemoglobin dissociation curve are correct? Select all that apply.",
    type: "MULTI",
    topic: "Oxygen Transport",
    explanation:
      "The curve is sigmoid because of subunit cooperativity; its flat upper portion safeguards loading in the lung despite falls in alveolar oxygen, its steep lower portion aids unloading in the tissues, and a right shift raises the P50; it is not a straight line.",
    choices: [
      { text: "it is sigmoid from binding cooperativity", isCorrect: true },
      { text: "the flat top protects loading in the lung", isCorrect: true },
      { text: "the steep part aids tissue unloading", isCorrect: true },
      { text: "a right shift raises the P50 value", isCorrect: true },
      { text: "it is a straight line with tension" },
      { text: "higher affinity means a higher P50" },
    ],
  },
  {
    stem: "Fetal hemoglobin has a higher oxygen affinity than adult hemoglobin chiefly because it:",
    topic: "Oxygen Transport",
    explanation:
      "Fetal hemoglobin's gamma chains bind 2,3-BPG poorly, so the phosphate that normally lowers affinity has little effect; the resulting left-shifted curve lets fetal blood pull oxygen from the maternal circulation across the placenta.",
    choices: [
      { text: "binds 2,3-BPG only weakly", isCorrect: true },
      { text: "carries far more subunits" },
      { text: "lacks any heme iron atoms" },
      { text: "binds carbon dioxide tightly" },
    ],
  },
  {
    stem: "Carbon monoxide impairs oxygen delivery both by occupying binding sites and by:",
    topic: "Oxygen Transport",
    explanation:
      "Carbon monoxide binds hemoglobin over two hundred times more avidly than oxygen, reducing the sites available, and it also shifts the curve left so the remaining oxygen is released less readily; the arterial oxygen tension, however, stays deceptively normal.",
    choices: [
      { text: "shifting the curve to the left", isCorrect: true },
      { text: "shifting the curve to the right" },
      { text: "raising the dissolved oxygen" },
      { text: "increasing the blood 2,3-BPG" },
    ],
  },
  {
    stem: "In a patient with anemia but healthy lungs, the arterial oxygen tension and saturation are normal, yet the:",
    topic: "Oxygen Transport",
    explanation:
      "Anemia lowers the number of carriers, so although each remaining hemoglobin is fully saturated at a normal oxygen tension, the total oxygen content of the blood is reduced; delivery therefore depends on raising cardiac output to compensate.",
    choices: [
      { text: "oxygen content of blood is reduced", isCorrect: true },
      { text: "oxygen tension of blood is reduced" },
      { text: "hemoglobin saturation is reduced" },
      { text: "dissolved oxygen is greatly raised" },
    ],
  },
  {
    stem: "The largest fraction of carbon dioxide is carried in the blood as:",
    topic: "Carbon Dioxide Transport",
    explanation:
      "Most carbon dioxide entering the blood is hydrated in the red cell to carbonic acid, which dissociates to bicarbonate that then moves into the plasma; a smaller share rides on hemoglobin as carbamino compounds and only a little travels dissolved.",
    choices: [
      { text: "bicarbonate ion in the plasma", isCorrect: true },
      { text: "gas dissolved in the plasma" },
      { text: "carbaminohemoglobin only" },
      { text: "carbonic acid in the plasma" },
    ],
  },
  {
    stem: "The rapid hydration of carbon dioxide to carbonic acid inside the red cell is catalyzed by the enzyme:",
    topic: "Carbon Dioxide Transport",
    explanation:
      "Carbonic anhydrase in the red cell accelerates the otherwise slow reaction of carbon dioxide with water enormously, allowing bicarbonate to form during the brief capillary transit; without it, carbon-dioxide transport as bicarbonate could not keep pace.",
    choices: [
      { text: "carbonic anhydrase", isCorrect: true },
      { text: "lactate dehydrogenase" },
      { text: "carboxypeptidase" },
      { text: "carbamoyl synthetase" },
    ],
  },
  {
    stem: "As bicarbonate formed in the red cell moves out into the plasma, chloride moves in to preserve electrical balance, a process called the:",
    topic: "Carbon Dioxide Transport",
    explanation:
      "The electroneutral exchange of bicarbonate leaving the cell for chloride entering it is the chloride, or Hamburger, shift; it lets the plasma carry most of the bicarbonate load while keeping the red-cell membrane potential from being disturbed.",
    choices: [
      { text: "chloride shift into the cell", isCorrect: true },
      { text: "sodium pump exchange" },
      { text: "proton leak across the cell" },
      { text: "bicarbonate reabsorption step" },
    ],
  },
  {
    stem: "The Haldane effect describes the observation that deoxygenated hemoglobin, compared with oxygenated hemoglobin:",
    topic: "Carbon Dioxide Transport",
    explanation:
      "Removing oxygen from hemoglobin makes it a better carbon-dioxide carrier and a better proton buffer, so venous blood picks up more carbon dioxide precisely where oxygen is unloaded; oxygenation in the lung reverses this and promotes carbon-dioxide release.",
    choices: [
      { text: "carries more carbon dioxide", isCorrect: true },
      { text: "carries less carbon dioxide" },
      { text: "binds oxygen more tightly" },
      { text: "cannot buffer any protons" },
    ],
  },
  {
    stem: "Which statements about carbon-dioxide transport in blood are correct? Select all that apply.",
    type: "MULTI",
    topic: "Carbon Dioxide Transport",
    explanation:
      "Carbon dioxide travels mostly as plasma bicarbonate formed with the help of carbonic anhydrase, accompanied by a chloride shift, and deoxyhemoglobin carries extra carbon dioxide by the Haldane effect; only a minority is carried dissolved, and oxygenation lowers rather than raises carbon-dioxide binding.",
    choices: [
      { text: "most is carried as plasma bicarbonate", isCorrect: true },
      { text: "carbonic anhydrase speeds its hydration", isCorrect: true },
      { text: "deoxyhemoglobin carries extra carbon dioxide", isCorrect: true },
      { text: "a chloride shift accompanies bicarbonate", isCorrect: true },
      { text: "most is carried as dissolved gas" },
      { text: "oxygenation increases carbon-dioxide binding" },
    ],
  },
  {
    stem: "True or False: Over the physiologic range, the carbon-dioxide content of blood varies more nearly linearly with its partial pressure than the oxygen content does with oxygen tension.",
    type: "TRUE_FALSE",
    topic: "Carbon Dioxide Transport",
    explanation:
      "True. The carbon-dioxide dissociation relationship is steeper and much more linear than the sigmoid oxygen curve, so changes in ventilation move carbon-dioxide content in a fairly proportional way, which helps make PCO2 a reliable index of ventilation.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The central chemoreceptors in the medulla adjust breathing in response most directly to:",
    topic: "Control of Breathing",
    explanation:
      "The central chemoreceptors sense hydrogen-ion concentration in the brain extracellular fluid; because carbon dioxide crosses the blood-brain barrier and is hydrated there, a rise in arterial carbon dioxide acidifies this fluid and powerfully stimulates ventilation.",
    choices: [
      { text: "hydrogen ions in the brain fluid", isCorrect: true },
      { text: "oxygen dissolved in the plasma" },
      { text: "bicarbonate in arterial blood" },
      { text: "the arterial blood pressure level" },
    ],
  },
  {
    stem: "Under normal resting conditions, the single most important stimulus setting the drive to breathe is the arterial:",
    topic: "Control of Breathing",
    explanation:
      "Minute-to-minute ventilation is governed chiefly by arterial carbon dioxide acting through the central chemoreceptors; even small rises sharply increase ventilation, which is why carbon dioxide, not oxygen, is the dominant everyday respiratory stimulus.",
    choices: [
      { text: "carbon-dioxide partial pressure", isCorrect: true },
      { text: "oxygen partial pressure" },
      { text: "bicarbonate concentration" },
      { text: "hydrogen-ion concentration" },
    ],
  },
  {
    stem: "The peripheral chemoreceptors begin to drive ventilation strongly through hypoxia only when the arterial oxygen tension falls below roughly:",
    topic: "Control of Breathing",
    explanation:
      "The carotid and aortic bodies respond little until arterial oxygen drops below about sixty millimeters of mercury, the shoulder of the dissociation curve; below that their firing rises steeply, providing an emergency hypoxic backup to the usual carbon-dioxide drive.",
    choices: [
      { text: "60 millimeters of mercury", isCorrect: true },
      { text: "90 millimeters of mercury" },
      { text: "100 millimeters of mercury" },
      { text: "40 millimeters of mercury" },
    ],
  },
  {
    stem: "In a patient with long-standing carbon-dioxide retention, the everyday stimulus to breathe may come to depend more on:",
    topic: "Control of Breathing",
    explanation:
      "When carbon dioxide is chronically high, the central drive it provides is blunted by renal bicarbonate compensation, so the hypoxic drive from the peripheral chemoreceptors becomes relatively more important; giving too much oxygen can then reduce ventilation.",
    choices: [
      { text: "the hypoxic peripheral drive", isCorrect: true },
      { text: "a rising blood pressure" },
      { text: "stretch of the lung tissue" },
      { text: "the falling body temperature" },
    ],
  },
  {
    stem: "The basic automatic rhythm of breathing is generated by neuron groups located in the:",
    topic: "Control of Breathing",
    explanation:
      "The dorsal and ventral respiratory groups of the medulla generate the fundamental breathing rhythm, while pontine centers and reflex inputs modulate its pattern; damage to these medullary centers, not to the cortex, abolishes automatic breathing.",
    choices: [
      { text: "medullary respiratory centers", isCorrect: true },
      { text: "cerebral motor cortex" },
      { text: "cervical spinal cord" },
      { text: "cerebellar vermis region" },
    ],
  },
  {
    stem: "The Hering-Breuer inflation reflex, mediated by stretch receptors in the airways, acts to:",
    topic: "Control of Breathing",
    explanation:
      "Pulmonary stretch receptors fire as the lungs inflate and, through the vagus, inhibit further inspiration to prevent overdistension; prominent in infants and during large tidal volumes, it helps set the depth at which inspiration switches to expiration.",
    choices: [
      { text: "inhibit further inspiration when stretched", isCorrect: true },
      { text: "prolong and deepen each inspiration" },
      { text: "trigger a cough on lung stretch" },
      { text: "increase the airway smooth-muscle tone" },
    ],
  },
  {
    stem: "The ventilatory response to rising arterial carbon dioxide is best described as:",
    topic: "Control of Breathing",
    explanation:
      "Ventilation increases steeply and almost linearly as arterial carbon dioxide rises, so the carbon-dioxide response curve is steep; anesthetics and opioids flatten it, blunting the protective rise in breathing that carbon-dioxide accumulation should trigger.",
    choices: [
      { text: "steep and nearly linear", isCorrect: true },
      { text: "flat and unresponsive" },
      { text: "sigmoid and delayed" },
      { text: "inverted at high levels" },
    ],
  },
  {
    stem: "Which stimuli increase ventilation by acting on the chemoreceptors? Select all that apply.",
    type: "MULTI",
    topic: "Control of Breathing",
    explanation:
      "Ventilation is driven up by a rise in arterial carbon dioxide, a fall in pH, a marked fall in arterial oxygen, and a rise in brain-fluid hydrogen ions; a rise in pH or a modest rise in oxygen instead tend to reduce the chemoreceptor drive.",
    choices: [
      { text: "a rise in arterial carbon dioxide", isCorrect: true },
      { text: "a fall in the arterial pH", isCorrect: true },
      { text: "a marked fall in arterial oxygen", isCorrect: true },
      { text: "a rise in brain-fluid hydrogen ions", isCorrect: true },
      { text: "a rise in the arterial pH value" },
      { text: "a modest rise in arterial oxygen" },
    ],
  },
  {
    stem: "During moderate steady-state exercise, alveolar ventilation increases in near-proportion to the:",
    topic: "Respiratory Responses",
    explanation:
      "In moderate exercise ventilation rises almost exactly with carbon-dioxide production, so arterial carbon dioxide, oxygen, and pH stay remarkably constant; only at heavy work, when lactic acid appears, does ventilation climb out of proportion to carbon dioxide.",
    choices: [
      { text: "carbon-dioxide production rate", isCorrect: true },
      { text: "arterial oxygen tension level" },
      { text: "resting metabolic rate alone" },
      { text: "blood pressure during effort" },
    ],
  },
  {
    stem: "Oxygen delivery to exercising muscle is enhanced because the local rise in temperature, carbon dioxide, and acidity:",
    topic: "Respiratory Responses",
    explanation:
      "Active muscle is warm, acidic, and carbon-dioxide rich, all of which shift the dissociation curve rightward and lower hemoglobin's affinity locally; this Bohr effect unloads more oxygen exactly where the metabolic demand is greatest.",
    choices: [
      { text: "shifts the curve right to unload oxygen", isCorrect: true },
      { text: "shifts the curve left to hold oxygen" },
      { text: "raises hemoglobin's oxygen affinity" },
      { text: "has no effect on oxygen unloading" },
    ],
  },
  {
    stem: "The immediate ventilatory response to rapid ascent to high altitude is:",
    topic: "Respiratory Responses",
    explanation:
      "The low barometric pressure at altitude lowers inspired oxygen, and the resulting hypoxemia stimulates the peripheral chemoreceptors to hyperventilate; blowing off carbon dioxide then produces a respiratory alkalosis that initially restrains the very drive that caused it.",
    choices: [
      { text: "hyperventilation from the hypoxic drive", isCorrect: true },
      { text: "hypoventilation from a low oxygen" },
      { text: "no change in the breathing pattern" },
      { text: "a fall in the respiratory rate" },
    ],
  },
  {
    stem: "Which changes develop during acclimatization to high altitude over days to weeks? Select all that apply.",
    type: "MULTI",
    topic: "Respiratory Responses",
    explanation:
      "Acclimatization raises oxygen-carrying capacity and restores the hypoxic drive: erythropoietin lifts red-cell mass, the kidney excretes bicarbonate to correct the respiratory alkalosis and unmask the drive, red-cell 2,3-BPG rises, and hyperventilation is sustained; the hematocrit rises rather than falls.",
    choices: [
      { text: "increased erythropoietin and red-cell mass", isCorrect: true },
      { text: "renal excretion of bicarbonate", isCorrect: true },
      { text: "a rise in red-cell 2,3-BPG", isCorrect: true },
      { text: "a sustained increase in ventilation", isCorrect: true },
      { text: "a fall in the blood hematocrit" },
      { text: "renal retention of bicarbonate" },
    ],
  },
  {
    stem: "Chronic hypoxia at high altitude can raise pulmonary arterial pressure and strain the right heart because alveolar hypoxia causes:",
    topic: "Respiratory Responses",
    explanation:
      "Sustained alveolar hypoxia constricts pulmonary arterioles throughout both lungs, and this widespread hypoxic vasoconstriction raises pulmonary vascular resistance; the chronically elevated pressure loads the right ventricle and can lead to its hypertrophy and failure.",
    choices: [
      { text: "widespread pulmonary vasoconstriction", isCorrect: true },
      { text: "widespread pulmonary vasodilation" },
      { text: "a fall in pulmonary resistance" },
      { text: "closure of the systemic shunts" },
    ],
  },
  {
    stem: "An unconscious patient with an opioid overdose shows a high arterial carbon dioxide, a low oxygen, and a normal alveolar-arterial gradient. The picture is that of:",
    topic: "Clinical Application",
    explanation:
      "Opioids depress the medullary carbon-dioxide response, causing pure hypoventilation; carbon dioxide rises and oxygen falls together while the gradient between alveolar and arterial oxygen stays normal, distinguishing it from shunt or mismatch that would widen it.",
    choices: [
      { text: "alveolar hypoventilation", isCorrect: true },
      { text: "a right-to-left shunt" },
      { text: "a diffusion impairment" },
      { text: "ventilation-perfusion mismatch" },
    ],
  },
  {
    stem: "Which causes of hypoxemia correct well with supplemental oxygen? Select all that apply.",
    type: "MULTI",
    topic: "Clinical Application",
    explanation:
      "Hypoxemia from hypoventilation, ventilation-perfusion mismatch, diffusion impairment, or low inspired oxygen all improve markedly with added oxygen, because raising alveolar oxygen reaches the blood; a true right-to-left or anatomic cardiac shunt bypasses ventilated alveoli and responds poorly.",
    choices: [
      { text: "alveolar hypoventilation", isCorrect: true },
      { text: "ventilation-perfusion mismatch", isCorrect: true },
      { text: "a diffusion impairment barrier", isCorrect: true },
      { text: "low inspired oxygen at altitude", isCorrect: true },
      { text: "a large right-to-left shunt" },
      { text: "an anatomic cardiac shunt" },
    ],
  },
  {
    stem: "Which findings fit the acute respiratory distress syndrome? Select all that apply.",
    type: "MULTI",
    topic: "Clinical Application",
    explanation:
      "Acute respiratory distress syndrome floods alveoli with protein-rich fluid, producing a large shunt with hypoxemia that responds poorly to oxygen, stiff low-compliance lungs, and diffuse bilateral infiltrates; high compliance and oxygen-responsive hypoxemia would argue against it.",
    choices: [
      { text: "hypoxemia poorly responsive to oxygen", isCorrect: true },
      { text: "reduced lung compliance", isCorrect: true },
      { text: "diffuse alveolar infiltrates", isCorrect: true },
      { text: "a large intrapulmonary shunt", isCorrect: true },
      { text: "a high lung compliance" },
      { text: "hypoxemia fully corrected by oxygen" },
    ],
  },
  {
    stem: "A patient with stable chronic obstructive disease has a high carbon dioxide with a near-normal pH and a raised bicarbonate. This blood gas indicates:",
    topic: "Clinical Application",
    explanation:
      "Chronic carbon-dioxide retention is buffered over time as the kidney retains bicarbonate, returning the pH toward normal; the raised bicarbonate with a high carbon dioxide and near-normal pH is the signature of a compensated chronic respiratory acidosis.",
    choices: [
      { text: "a compensated respiratory acidosis", isCorrect: true },
      { text: "an acute respiratory acidosis" },
      { text: "a primary metabolic alkalosis" },
      { text: "a compensated metabolic acidosis" },
    ],
  },
  {
    stem: "Which changes are expected in acute respiratory acidosis from sudden hypoventilation? Select all that apply.",
    type: "MULTI",
    topic: "Clinical Application",
    explanation:
      "Sudden hypoventilation raises carbon dioxide and lowers pH at once, and it heightens the drive to breathe; renal compensation with a rise in bicarbonate develops only over hours to days, so an immediate large bicarbonate rise or a falling carbon dioxide would not fit.",
    choices: [
      { text: "a rise in arterial carbon dioxide", isCorrect: true },
      { text: "a fall in the arterial pH", isCorrect: true },
      { text: "increased drive to breathe", isCorrect: true },
      { text: "a slow compensatory bicarbonate rise", isCorrect: true },
      { text: "an immediate large bicarbonate rise" },
      { text: "a fall in arterial carbon dioxide" },
    ],
  },
  {
    stem: "A large pulmonary embolus impairs gas exchange chiefly by creating a region that is:",
    topic: "Clinical Application",
    explanation:
      "An embolus blocks perfusion to still-ventilated alveoli, creating high ventilation-perfusion units that behave as dead space; the patient hyperventilates and hypoxemia arises from redistribution and mismatch, with a raised alveolar-arterial gradient.",
    choices: [
      { text: "ventilated but no longer perfused", isCorrect: true },
      { text: "perfused but no longer ventilated" },
      { text: "neither ventilated nor perfused" },
      { text: "both over-ventilated and over-perfused" },
    ],
  },
  {
    stem: "True or False: In a chronic carbon-dioxide retainer, a large increase in inspired oxygen can blunt the hypoxic drive and worsen carbon-dioxide retention.",
    type: "TRUE_FALSE",
    topic: "Clinical Application",
    explanation:
      "True. When the everyday drive has come to rely on hypoxia, abolishing that hypoxia with generous oxygen can reduce ventilation and let carbon dioxide climb further; oxygen is still given, but titrated carefully to a modest target saturation.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Central cyanosis, a bluish discoloration of the lips and tongue, becomes visible when the concentration of deoxygenated hemoglobin in the blood rises above roughly:",
    topic: "Clinical Application",
    explanation:
      "Cyanosis depends on the absolute amount of deoxygenated hemoglobin, appearing near five grams per deciliter; because it is an absolute threshold, a polycythemic patient may look cyanotic while an anemic one stays pink despite worse hypoxemia.",
    choices: [
      { text: "5 grams per deciliter", isCorrect: true },
      { text: "2 grams per deciliter" },
      { text: "10 grams per deciliter" },
      { text: "15 grams per deciliter" },
    ],
  },
];
