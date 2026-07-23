/**
 * CONTENT WAVE 5 — Respiratory
 *
 * 75 original questions, arranged as EIGHT quizzes rather than one large set:
 *
 *   Physiology  Set 1 (15) · Set 2 (15)          → fs-respiratory-physiology
 *   Clinical    Set 1 (15) · Set 2 (15)          → cs-respiratory-medicine
 *   Drugs       Set 1 (15)                       → fs-pharmacology
 *   Exams       Physiology (30) · Clinical (30) · Comprehensive (75)
 *
 * The point of splitting into multiple sets is retesting. A student who finishes
 * Set 1 can sit Set 2 on the same material without meeting questions they have
 * already memorised, and the exams then recombine them under time pressure.
 *
 * ⚠ Clinical thresholds and first-line agents vary by national guideline and are
 * revised periodically. These test mechanism and principle, which travel — but
 * review anything numerical against local guidance. All editable in Admin.
 *
 * Run:  npx tsx prisma/seed-respiratory.ts
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Q = {
  stem: string;
  topic: string;
  explanation: string;
  choices: { text: string; isCorrect: boolean }[];
};

/* ═══════════ PHYSIOLOGY — SET 1 ═══════════ */

const PHYS1: Q[] = [
  {
    stem: "What is the principal muscle of quiet inspiration?",
    topic: "Mechanics of Breathing",
    explanation:
      "The diaphragm, responsible for roughly 70% of tidal volume at rest. Its contraction lowers the dome, expanding the thorax vertically and creating the negative pressure that draws air in. Expiration at rest is passive, driven by elastic recoil — accessory muscles are recruited only when work of breathing rises.",
    choices: [
      { text: "The diaphragm", isCorrect: true },
      { text: "The internal intercostals", isCorrect: false },
      { text: "Sternocleidomastoid", isCorrect: false },
      { text: "Rectus abdominis", isCorrect: false },
    ],
  },
  {
    stem: "What does lung compliance describe?",
    topic: "Mechanics of Breathing",
    explanation:
      "The change in lung volume per unit change in pressure — essentially how easily the lung distends. Fibrosis reduces compliance, making the lung stiff and hard to inflate. Emphysema increases it through loss of elastic tissue, so the lung inflates easily but recoils poorly, trapping air.",
    choices: [
      { text: "The change in volume per unit change in pressure", isCorrect: true },
      { text: "The resistance of the conducting airways", isCorrect: false },
      { text: "The rate of gas diffusion across the membrane", isCorrect: false },
      { text: "The total lung capacity", isCorrect: false },
    ],
  },
  {
    stem: "What is the function of pulmonary surfactant?",
    topic: "Mechanics of Breathing",
    explanation:
      "It reduces alveolar surface tension, preventing collapse at end-expiration and reducing the work of breathing. By Laplace's law small alveoli would otherwise empty into large ones; surfactant disproportionately lowers tension in smaller alveoli, stabilising them. Its deficiency causes neonatal respiratory distress syndrome.",
    choices: [
      { text: "It lowers alveolar surface tension and prevents collapse", isCorrect: true },
      { text: "It increases surface tension to aid expiration", isCorrect: false },
      { text: "It traps inhaled particles for clearance", isCorrect: false },
      { text: "It transports oxygen across the alveolar wall", isCorrect: false },
    ],
  },
  {
    stem: "Which lung volume cannot be measured by simple spirometry?",
    topic: "Lung Volumes",
    explanation:
      "Residual volume — the air remaining after maximal expiration — because it is never exhaled. It requires helium dilution, nitrogen washout or body plethysmography. Consequently any capacity that includes it, such as functional residual capacity and total lung capacity, also cannot be obtained by spirometry alone.",
    choices: [
      { text: "Residual volume", isCorrect: true },
      { text: "Tidal volume", isCorrect: false },
      { text: "Inspiratory reserve volume", isCorrect: false },
      { text: "Expiratory reserve volume", isCorrect: false },
    ],
  },
  {
    stem: "What is anatomical dead space?",
    topic: "Lung Volumes",
    explanation:
      "The volume of the conducting airways — roughly 150 mL in an adult — where no gas exchange occurs. It explains why rapid shallow breathing is inefficient: at a tidal volume of 200 mL, most of each breath merely refills dead space, so alveolar ventilation collapses even though minute ventilation looks adequate.",
    choices: [
      { text: "The conducting airway volume where no gas exchange occurs", isCorrect: true },
      { text: "Alveoli that are ventilated but not perfused", isCorrect: false },
      { text: "The volume remaining after maximal expiration", isCorrect: false },
      { text: "Air trapped behind collapsed airways", isCorrect: false },
    ],
  },
  {
    stem: "What distinguishes physiological dead space from anatomical dead space?",
    topic: "Ventilation & Perfusion",
    explanation:
      "Physiological dead space includes the anatomical airways plus alveoli that are ventilated but not perfused — as in pulmonary embolism. In healthy lungs the two are nearly equal. A large discrepancy indicates significant V/Q mismatch, which is why dead space fraction rises in embolism and severe lung disease.",
    choices: [
      { text: "It also includes ventilated but unperfused alveoli", isCorrect: true },
      { text: "It is always smaller than anatomical dead space", isCorrect: false },
      { text: "It only applies during exercise", isCorrect: false },
      { text: "It excludes the trachea and bronchi", isCorrect: false },
    ],
  },
  {
    stem: "In an upright lung, where is ventilation greatest?",
    topic: "Ventilation & Perfusion",
    explanation:
      "At the base. Gravity means basal alveoli begin expiration smaller and sit on a steeper part of the compliance curve, so they expand more per breath. Perfusion is also greatest at the base and increases more steeply, so the V/Q ratio is lower at the base and higher at the apex.",
    choices: [
      { text: "At the base", isCorrect: true },
      { text: "At the apex", isCorrect: false },
      { text: "Uniformly throughout", isCorrect: false },
      { text: "In the mid-zones only", isCorrect: false },
    ],
  },
  {
    stem: "What is hypoxic pulmonary vasoconstriction, and why is it useful?",
    topic: "Ventilation & Perfusion",
    explanation:
      "Pulmonary arterioles constrict in response to low alveolar oxygen — the opposite of systemic vessels. This diverts blood away from poorly ventilated regions toward better ones, improving V/Q matching. In global hypoxia such as altitude it becomes maladaptive, raising pulmonary pressures throughout the lung.",
    choices: [
      { text: "Pulmonary vessels constrict in hypoxia, diverting flow to better-ventilated lung", isCorrect: true },
      { text: "Pulmonary vessels dilate in hypoxia to increase flow", isCorrect: false },
      { text: "Bronchi constrict to reduce dead space", isCorrect: false },
      { text: "Systemic vessels constrict to raise blood pressure", isCorrect: false },
    ],
  },
  {
    stem: "Which form accounts for the majority of oxygen carried in blood?",
    topic: "Gas Transport",
    explanation:
      "Bound to haemoglobin — around 98%. Only about 2% is dissolved in plasma, which is what the PaO2 measures. This distinction matters clinically: in severe anaemia the PaO2 can be entirely normal while oxygen delivery is dangerously low, because content depends on haemoglobin, not partial pressure.",
    choices: [
      { text: "Bound to haemoglobin", isCorrect: true },
      { text: "Dissolved in plasma", isCorrect: false },
      { text: "As bicarbonate", isCorrect: false },
      { text: "Bound to plasma albumin", isCorrect: false },
    ],
  },
  {
    stem: "A rightward shift of the oxyhaemoglobin dissociation curve indicates what?",
    topic: "Gas Transport",
    explanation:
      "Reduced affinity, so haemoglobin releases oxygen more readily to tissues. It is caused by acidosis, hypercapnia, pyrexia and raised 2,3-DPG — precisely the conditions of actively metabolising tissue. The physiology is elegant: the tissues that need oxygen most create the conditions that release it.",
    choices: [
      { text: "Reduced affinity — oxygen is released more readily to tissues", isCorrect: true },
      { text: "Increased affinity — oxygen is held more tightly", isCorrect: false },
      { text: "Reduced total oxygen-carrying capacity", isCorrect: false },
      { text: "Impaired carbon dioxide transport", isCorrect: false },
    ],
  },
  {
    stem: "In what form is most carbon dioxide transported in blood?",
    topic: "Gas Transport",
    explanation:
      "As bicarbonate, around 70%, formed within red cells by carbonic anhydrase and exchanged for chloride. About 23% travels as carbamino compounds on haemoglobin and only 7% dissolved. This is why the respiratory and renal systems are jointly responsible for acid-base balance.",
    choices: [
      { text: "As bicarbonate", isCorrect: true },
      { text: "Dissolved in plasma", isCorrect: false },
      { text: "Bound to albumin", isCorrect: false },
      { text: "As carbonic acid in plasma", isCorrect: false },
    ],
  },
  {
    stem: "Which chemoreceptors provide the principal drive to ventilation in health?",
    topic: "Control of Breathing",
    explanation:
      "Central chemoreceptors in the medulla, responding to CSF pH changes driven by arterial CO2. Peripheral chemoreceptors in the carotid and aortic bodies respond mainly to hypoxia and only contribute substantially once PaO2 falls below about 60 mmHg — which is why CO2, not oxygen, normally sets ventilation.",
    choices: [
      { text: "Central medullary chemoreceptors responding to CO2 via CSF pH", isCorrect: true },
      { text: "Carotid body receptors responding to oxygen", isCorrect: false },
      { text: "Pulmonary stretch receptors", isCorrect: false },
      { text: "Aortic baroreceptors", isCorrect: false },
    ],
  },
  {
    stem: "Why does carbon monoxide poisoning produce tissue hypoxia despite a normal PaO2?",
    topic: "Gas Transport",
    explanation:
      "CO binds haemoglobin with roughly 240 times the affinity of oxygen, reducing carrying capacity, and it also shifts the dissociation curve left so the remaining oxygen is released less readily. Dissolved oxygen is unchanged, so PaO2 and standard pulse oximetry both read normal — which is exactly what makes it dangerous.",
    choices: [
      { text: "CO occupies haemoglobin and shifts the curve left, impairing delivery", isCorrect: true },
      { text: "It prevents oxygen crossing the alveolar membrane", isCorrect: false },
      { text: "It causes bronchospasm", isCorrect: false },
      { text: "It destroys red blood cells", isCorrect: false },
    ],
  },
  {
    stem: "What is the normal V/Q ratio for the lung as a whole?",
    topic: "Ventilation & Perfusion",
    explanation:
      "About 0.8 — roughly 4 L/min of alveolar ventilation against 5 L/min of pulmonary blood flow. A ratio approaching zero represents shunt, where blood passes unventilated alveoli; a ratio approaching infinity represents dead space, where alveoli are ventilated but unperfused. Most lung disease sits somewhere between.",
    choices: [
      { text: "About 0.8", isCorrect: true },
      { text: "About 1.5", isCorrect: false },
      { text: "About 0.2", isCorrect: false },
      { text: "Exactly 1.0", isCorrect: false },
    ],
  },
  {
    stem: "Why does hypoxaemia caused by shunt respond poorly to supplemental oxygen?",
    topic: "Ventilation & Perfusion",
    explanation:
      "Shunted blood bypasses ventilated alveoli entirely, so enriching the inspired gas never reaches it. Blood from normal alveoli is already nearly fully saturated and cannot compensate. This is why refractory hypoxaemia on high-flow oxygen points to shunt physiology — consolidation, collapse, or ARDS.",
    choices: [
      { text: "Shunted blood never contacts ventilated alveoli", isCorrect: true },
      { text: "Oxygen causes reflex bronchoconstriction", isCorrect: false },
      { text: "Haemoglobin is saturated at room air already", isCorrect: false },
      { text: "Shunt increases carbon dioxide preferentially", isCorrect: false },
    ],
  },
];

/* ═══════════ PHYSIOLOGY — SET 2 ═══════════ */

const PHYS2: Q[] = [
  {
    stem: "An arterial blood gas shows pH 7.28, PaCO2 62 mmHg, HCO3 26 mmol/L. What is the disturbance?",
    topic: "Acid-Base",
    explanation:
      "Acute respiratory acidosis. The pH is low and the CO2 is high, identifying a respiratory cause. Bicarbonate remains near normal because renal compensation takes two to three days — so a normal bicarbonate in a marked respiratory acidosis tells you this is acute rather than chronic.",
    choices: [
      { text: "Acute respiratory acidosis", isCorrect: true },
      { text: "Chronic respiratory acidosis", isCorrect: false },
      { text: "Metabolic acidosis", isCorrect: false },
      { text: "Respiratory alkalosis", isCorrect: false },
    ],
  },
  {
    stem: "A gas shows pH 7.36, PaCO2 60 mmHg, HCO3 34 mmol/L. What does this indicate?",
    topic: "Acid-Base",
    explanation:
      "Chronic respiratory acidosis with renal compensation, typical of long-standing COPD. The kidney has retained bicarbonate over days, pulling the pH back toward normal. Recognising this matters — attempting to normalise the CO2 in such a patient risks post-hypercapnic alkalosis and loss of respiratory drive.",
    choices: [
      { text: "Chronic respiratory acidosis with renal compensation", isCorrect: true },
      { text: "Acute respiratory acidosis", isCorrect: false },
      { text: "Metabolic alkalosis", isCorrect: false },
      { text: "A normal blood gas", isCorrect: false },
    ],
  },
  {
    stem: "A gas shows pH 7.50, PaCO2 28 mmHg, HCO3 22 mmol/L. What is the likely clinical scenario?",
    topic: "Acid-Base",
    explanation:
      "Acute respiratory alkalosis from hyperventilation — anxiety, pain, early sepsis, pulmonary embolism or salicylate toxicity. Blowing off CO2 raises pH. Note that hyperventilation is a sign, not a diagnosis: in a breathless patient the priority is finding why they are hyperventilating.",
    choices: [
      { text: "Acute respiratory alkalosis from hyperventilation", isCorrect: true },
      { text: "Metabolic acidosis with compensation", isCorrect: false },
      { text: "Respiratory acidosis", isCorrect: false },
      { text: "Chronic metabolic alkalosis", isCorrect: false },
    ],
  },
  {
    stem: "How does the anion gap help in evaluating metabolic acidosis?",
    topic: "Acid-Base",
    explanation:
      "A raised anion gap indicates unmeasured anions — lactate, ketones, toxins, uraemic acids. A normal gap points instead to bicarbonate loss, as in diarrhoea or renal tubular acidosis. It splits a broad diagnosis into two much shorter lists, which is why it is calculated routinely.",
    choices: [
      { text: "A raised gap indicates added acid; a normal gap indicates bicarbonate loss", isCorrect: true },
      { text: "It measures the severity of hypoxaemia", isCorrect: false },
      { text: "It distinguishes respiratory from metabolic causes", isCorrect: false },
      { text: "It quantifies renal compensation", isCorrect: false },
    ],
  },
  {
    stem: "What does an FEV1/FVC ratio below 0.7 indicate?",
    topic: "Spirometry",
    explanation:
      "An obstructive pattern — airflow limitation as in asthma or COPD. Restrictive disease reduces both FEV1 and FVC proportionally, so the ratio is preserved or even raised. The ratio is therefore the first thing to read on any spirometry report.",
    choices: [
      { text: "An obstructive ventilatory defect", isCorrect: true },
      { text: "A restrictive ventilatory defect", isCorrect: false },
      { text: "Normal spirometry", isCorrect: false },
      { text: "Impaired gas transfer", isCorrect: false },
    ],
  },
  {
    stem: "Spirometry shows FEV1 60% predicted, FVC 58% predicted, ratio 0.82. What pattern is this?",
    topic: "Spirometry",
    explanation:
      "Restrictive. Both volumes are reduced proportionally so the ratio is preserved. Causes divide into intrinsic lung disease such as fibrosis, and extrapulmonary causes — obesity, kyphoscoliosis, neuromuscular weakness, pleural disease. Gas transfer helps separate them: low in fibrosis, normal in chest wall causes.",
    choices: [
      { text: "Restrictive", isCorrect: true },
      { text: "Obstructive", isCorrect: false },
      { text: "Mixed obstructive and restrictive", isCorrect: false },
      { text: "Normal", isCorrect: false },
    ],
  },
  {
    stem: "What does significant bronchodilator reversibility on spirometry suggest?",
    topic: "Spirometry",
    explanation:
      "Asthma. A substantial improvement in FEV1 after a bronchodilator indicates variable airflow obstruction, which is the defining feature. COPD shows fixed or minimally reversible obstruction — though the two overlap, and some patients have features of both.",
    choices: [
      { text: "Asthma, with variable airflow obstruction", isCorrect: true },
      { text: "Pulmonary fibrosis", isCorrect: false },
      { text: "Established emphysema only", isCorrect: false },
      { text: "Neuromuscular weakness", isCorrect: false },
    ],
  },
  {
    stem: "Why is transfer factor (DLCO) reduced in emphysema but normal or raised in asthma?",
    topic: "Spirometry",
    explanation:
      "Emphysema destroys alveolar walls and the capillary bed, so the surface area available for diffusion falls. Asthma is an airway disease with an intact alveolar-capillary membrane, so transfer is preserved. This single measurement often separates the two when spirometry alone is ambiguous.",
    choices: [
      { text: "Emphysema destroys alveolar surface area; asthma spares the membrane", isCorrect: true },
      { text: "Asthma thickens the alveolar membrane", isCorrect: false },
      { text: "Emphysema increases pulmonary blood volume", isCorrect: false },
      { text: "The two conditions cannot be distinguished this way", isCorrect: false },
    ],
  },
  {
    stem: "What is the A-a gradient used to determine?",
    topic: "Oxygenation",
    explanation:
      "Whether hypoxaemia arises from the lung itself. A normal gradient with hypoxaemia points to hypoventilation or low inspired oxygen — the lung is working but receiving too little air. A widened gradient indicates V/Q mismatch, shunt or diffusion impairment. It converts 'why is this patient hypoxic' into two distinct pathways.",
    choices: [
      { text: "Whether hypoxaemia is due to lung pathology or to hypoventilation", isCorrect: true },
      { text: "The severity of respiratory acidosis", isCorrect: false },
      { text: "Total lung capacity", isCorrect: false },
      { text: "The degree of airway obstruction", isCorrect: false },
    ],
  },
  {
    stem: "A patient overdoses on opioids and becomes hypoxic with a raised PaCO2 and a NORMAL A-a gradient. What is the mechanism?",
    topic: "Oxygenation",
    explanation:
      "Pure hypoventilation. Reduced respiratory drive lowers alveolar ventilation, so alveolar oxygen falls and CO2 rises — but the lung parenchyma is normal, hence the normal gradient. Treatment is to restore ventilation, with naloxone and support; oxygen alone corrects the saturation while the CO2 continues to climb.",
    choices: [
      { text: "Hypoventilation with normal lungs", isCorrect: true },
      { text: "Intrapulmonary shunt", isCorrect: false },
      { text: "Diffusion impairment", isCorrect: false },
      { text: "V/Q mismatch from embolism", isCorrect: false },
    ],
  },
  {
    stem: "Why can uncontrolled high-flow oxygen be hazardous in some patients with chronic hypercapnic COPD?",
    topic: "Oxygen Therapy",
    explanation:
      "Chiefly by worsening V/Q matching — oxygen abolishes hypoxic pulmonary vasoconstriction, so blood is redistributed to poorly ventilated lung and dead space rises. The Haldane effect contributes. Loss of 'hypoxic drive' is the traditional explanation but is a smaller factor than usually taught. Targeted oxygen, not withheld oxygen, is the answer.",
    choices: [
      { text: "It worsens V/Q matching by abolishing hypoxic vasoconstriction", isCorrect: true },
      { text: "It directly damages alveolar tissue within minutes", isCorrect: false },
      { text: "It causes immediate bronchoconstriction", isCorrect: false },
      { text: "Oxygen should simply never be given in COPD", isCorrect: false },
    ],
  },
  {
    stem: "What target oxygen saturation is generally appropriate for a patient at risk of hypercapnic respiratory failure?",
    topic: "Oxygen Therapy",
    explanation:
      "Around 88–92%, rather than the 94–98% used for most acutely unwell patients. The aim is enough oxygen to protect tissues without provoking CO2 retention. Note the priority order: in a peri-arrest situation, hypoxia is the immediate threat and oxygen is given freely.",
    choices: [
      { text: "88–92%", isCorrect: true },
      { text: "94–98%", isCorrect: false },
      { text: "Above 99%", isCorrect: false },
      { text: "Below 80%", isCorrect: false },
    ],
  },
  {
    stem: "What limits gas exchange in a normal lung at rest — perfusion or diffusion?",
    topic: "Gas Exchange",
    explanation:
      "Perfusion. Oxygen equilibrates across the alveolar membrane within about a third of the capillary transit time, so exchange is limited by how much blood flows, not by diffusion. Diffusion limitation appears only with thickened membranes, as in fibrosis, or with very short transit times during heavy exercise.",
    choices: [
      { text: "Perfusion — equilibration is complete well before the end of the capillary", isCorrect: true },
      { text: "Diffusion — the membrane is the bottleneck at rest", isCorrect: false },
      { text: "Airway resistance", isCorrect: false },
      { text: "Haemoglobin concentration", isCorrect: false },
    ],
  },
  {
    stem: "Why does pulmonary fibrosis cause hypoxaemia that worsens markedly on exertion?",
    topic: "Gas Exchange",
    explanation:
      "The thickened membrane slows diffusion, and exercise shortens capillary transit time, so equilibration becomes incomplete. At rest there is still just enough time. This is why exertional desaturation testing can reveal significant interstitial disease in someone whose resting saturation looks reassuring.",
    choices: [
      { text: "A thickened membrane plus shortened transit time prevents equilibration", isCorrect: true },
      { text: "Airway obstruction worsens with exercise", isCorrect: false },
      { text: "Haemoglobin affinity increases on exertion", isCorrect: false },
      { text: "Dead space falls during exercise", isCorrect: false },
    ],
  },
  {
    stem: "What happens to the pulmonary circulation during exercise in a healthy person?",
    topic: "Pulmonary Circulation",
    explanation:
      "Previously closed apical capillaries are recruited and existing vessels distend, so pulmonary vascular resistance FALLS even as cardiac output rises several-fold. This is why pulmonary artery pressure increases only modestly. Loss of this reserve is what produces exertional pulmonary hypertension in lung disease.",
    choices: [
      { text: "Capillary recruitment and distension lower pulmonary vascular resistance", isCorrect: true },
      { text: "Pulmonary vascular resistance rises sharply", isCorrect: false },
      { text: "Blood flow becomes uniform apex to base", isCorrect: false },
      { text: "Pulmonary pressure doubles immediately", isCorrect: false },
    ],
  },
];

/* ═══════════ CLINICAL — SET 1 ═══════════ */

const CLIN1: Q[] = [
  {
    stem: "A patient with asthma has a silent chest, exhaustion and a normal PaCO2. How should this be interpreted?",
    topic: "Acute Asthma",
    explanation:
      "As life-threatening asthma. A silent chest means airflow is too poor to generate wheeze, and a normalising CO2 in an exhausted asthmatic signals impending respiratory failure, not improvement — they should be hyperventilating. This patient needs urgent senior and critical care input.",
    choices: [
      { text: "Life-threatening asthma with impending respiratory failure", isCorrect: true },
      { text: "Improving asthma — reduce treatment", isCorrect: false },
      { text: "Mild exacerbation suitable for discharge", isCorrect: false },
      { text: "Likely anxiety rather than asthma", isCorrect: false },
    ],
  },
  {
    stem: "What is the immediate first-line treatment for acute severe asthma?",
    topic: "Acute Asthma",
    explanation:
      "High-flow oxygen with nebulised short-acting beta-2 agonist, adding ipratropium and systemic corticosteroid. Steroids take hours to act, which is precisely why they are given early rather than late. Magnesium and critical care involvement follow if response is poor.",
    choices: [
      { text: "Oxygen, nebulised salbutamol, ipratropium and systemic steroid", isCorrect: true },
      { text: "Oral antibiotics and observation", isCorrect: false },
      { text: "Inhaled corticosteroid alone", isCorrect: false },
      { text: "Immediate intubation in all cases", isCorrect: false },
    ],
  },
  {
    stem: "Which feature best distinguishes COPD from asthma on history?",
    topic: "COPD",
    explanation:
      "A substantial smoking history with progressive, largely fixed breathlessness from middle age. Asthma tends to begin younger, varies markedly day to day and overnight, and is associated with atopy. The distinction matters because inhaled steroids are central in asthma but more selectively used in COPD.",
    choices: [
      { text: "Smoking history with progressive, largely fixed breathlessness", isCorrect: true },
      { text: "Nocturnal cough in childhood", isCorrect: false },
      { text: "Complete reversibility with bronchodilators", isCorrect: false },
      { text: "Associated eczema and hay fever", isCorrect: false },
    ],
  },
  {
    stem: "A COPD patient presents with increased breathlessness, increased sputum volume and purulent sputum. What does this suggest?",
    topic: "COPD",
    explanation:
      "An infective exacerbation — the three cardinal Anthonisen criteria. Presence of all three, particularly sputum purulence, is the usual trigger for antibiotics alongside bronchodilators and corticosteroids. Purulence is the single most useful predictor of bacterial involvement.",
    choices: [
      { text: "An infective exacerbation warranting antibiotics", isCorrect: true },
      { text: "Pulmonary embolism", isCorrect: false },
      { text: "Left ventricular failure", isCorrect: false },
      { text: "Pneumothorax", isCorrect: false },
    ],
  },
  {
    stem: "A tall thin young man develops sudden pleuritic chest pain and breathlessness, with reduced breath sounds on one side. What is the likely diagnosis?",
    topic: "Pneumothorax",
    explanation:
      "Primary spontaneous pneumothorax, typically from rupture of an apical bleb. The classic demographic is a tall thin young male smoker. Management depends on size and symptoms — observation, aspiration, or a chest drain.",
    choices: [
      { text: "Primary spontaneous pneumothorax", isCorrect: true },
      { text: "Lobar pneumonia", isCorrect: false },
      { text: "Pulmonary embolism", isCorrect: false },
      { text: "Pleural effusion", isCorrect: false },
    ],
  },
  {
    stem: "A trauma patient is hypotensive with tracheal deviation away from a hyper-resonant side and distended neck veins. What is required immediately?",
    topic: "Pneumothorax",
    explanation:
      "Immediate needle or finger decompression — this is tension pneumothorax. Air trapped under pressure shifts the mediastinum and obstructs venous return, so it is an obstructive shock. It is a CLINICAL diagnosis; waiting for a chest radiograph can be fatal.",
    choices: [
      { text: "Immediate chest decompression without waiting for imaging", isCorrect: true },
      { text: "Urgent chest radiograph before any intervention", isCorrect: false },
      { text: "CT of the chest", isCorrect: false },
      { text: "Intravenous antibiotics", isCorrect: false },
    ],
  },
  {
    stem: "Which organism most commonly causes community-acquired pneumonia?",
    topic: "Pneumonia",
    explanation:
      "Streptococcus pneumoniae, classically with rapid onset, high fever, rusty sputum and lobar consolidation. Atypical organisms such as Mycoplasma and Legionella present more insidiously with prominent extrapulmonary features, which is why empirical regimens often cover both patterns.",
    choices: [
      { text: "Streptococcus pneumoniae", isCorrect: true },
      { text: "Pseudomonas aeruginosa", isCorrect: false },
      { text: "Staphylococcus epidermidis", isCorrect: false },
      { text: "Candida albicans", isCorrect: false },
    ],
  },
  {
    stem: "A patient has pneumonia with hyponatraemia, deranged liver enzymes and diarrhoea after staying in a hotel. Which organism is suggested?",
    topic: "Pneumonia",
    explanation:
      "Legionella pneumophila, which spreads through contaminated water systems such as air conditioning. The combination of pneumonia with hyponatraemia, hepatitis and gastrointestinal symptoms is characteristic, and it requires a macrolide or fluoroquinolone rather than a beta-lactam.",
    choices: [
      { text: "Legionella pneumophila", isCorrect: true },
      { text: "Streptococcus pneumoniae", isCorrect: false },
      { text: "Klebsiella pneumoniae", isCorrect: false },
      { text: "Haemophilus influenzae", isCorrect: false },
    ],
  },
  {
    stem: "What does the CURB-65 score assess?",
    topic: "Pneumonia",
    explanation:
      "Severity of community-acquired pneumonia, guiding whether treatment can be at home or requires admission or critical care. It scores confusion, urea, respiratory rate, blood pressure and age 65 or over. Its value is turning a subjective impression into a defensible, reproducible decision.",
    choices: [
      { text: "Severity of community-acquired pneumonia and the need for admission", isCorrect: true },
      { text: "Probability of pulmonary embolism", isCorrect: false },
      { text: "Degree of airflow obstruction", isCorrect: false },
      { text: "Risk of lung cancer", isCorrect: false },
    ],
  },
  {
    stem: "A patient becomes acutely breathless and hypoxic after prolonged immobility, with a clear chest radiograph. What must be considered?",
    topic: "Pulmonary Embolism",
    explanation:
      "Pulmonary embolism. A normal chest radiograph in a hypoxic, tachypnoeic patient is characteristic — the lung parenchyma is intact, the problem is perfusion. Risk factors include immobility, surgery, malignancy, pregnancy and hormonal therapy.",
    choices: [
      { text: "Pulmonary embolism", isCorrect: true },
      { text: "Lobar pneumonia", isCorrect: false },
      { text: "Pulmonary fibrosis", isCorrect: false },
      { text: "Acute asthma", isCorrect: false },
    ],
  },
  {
    stem: "What is the value of a negative D-dimer in suspected pulmonary embolism?",
    topic: "Pulmonary Embolism",
    explanation:
      "In a patient already assessed as LOW clinical probability, a negative D-dimer reliably excludes PE and avoids imaging. It is sensitive but not specific — it rises in infection, malignancy, pregnancy and after surgery — so in high-probability patients a negative result does not exclude anything and imaging proceeds regardless.",
    choices: [
      { text: "It excludes PE only when pre-test probability is already low", isCorrect: true },
      { text: "It excludes PE regardless of clinical probability", isCorrect: false },
      { text: "A positive result confirms PE", isCorrect: false },
      { text: "It is specific for thrombosis and rises in no other condition", isCorrect: false },
    ],
  },
  {
    stem: "A patient with massive PE is hypotensive and peri-arrest. What treatment should be considered?",
    topic: "Pulmonary Embolism",
    explanation:
      "Systemic thrombolysis. In haemodynamically unstable PE the immediate mortality risk outweighs the bleeding risk, so thrombolysis is indicated where there is no absolute contraindication. Stable patients are anticoagulated instead — the distinction is haemodynamic, not radiological.",
    choices: [
      { text: "Systemic thrombolysis", isCorrect: true },
      { text: "Oral anticoagulation alone as an outpatient", isCorrect: false },
      { text: "Antibiotics and observation", isCorrect: false },
      { text: "Inhaled bronchodilators", isCorrect: false },
    ],
  },
  {
    stem: "Which pleural fluid finding indicates an exudate by Light's criteria?",
    topic: "Pleural Disease",
    explanation:
      "A pleural-to-serum protein ratio above 0.5, or pleural-to-serum LDH above 0.6, or pleural LDH above two-thirds the upper limit of normal serum LDH. Exudates arise from inflammation, infection or malignancy; transudates from heart failure, cirrhosis or nephrotic syndrome. It directs the entire subsequent workup.",
    choices: [
      { text: "Pleural:serum protein ratio above 0.5", isCorrect: true },
      { text: "Pleural:serum protein ratio below 0.3", isCorrect: false },
      { text: "Pleural glucose above 10 mmol/L", isCorrect: false },
      { text: "Clear straw-coloured appearance alone", isCorrect: false },
    ],
  },
  {
    stem: "A patient with pneumonia develops a pleural effusion with pH 7.0 and low glucose. What does this indicate?",
    topic: "Pleural Disease",
    explanation:
      "A complicated parapneumonic effusion or empyema, which requires chest drainage as well as antibiotics. Bacterial metabolism within the pleural space consumes glucose and generates acid. Antibiotics alone will not resolve an infected collection — this is a drainage decision.",
    choices: [
      { text: "An infected effusion requiring chest tube drainage", isCorrect: true },
      { text: "A simple transudate needing no intervention", isCorrect: false },
      { text: "Malignant effusion requiring chemotherapy only", isCorrect: false },
      { text: "Normal pleural fluid", isCorrect: false },
    ],
  },
  {
    stem: "A long-term smoker has weight loss, haemoptysis and a new hoarse voice. What does the hoarseness suggest?",
    topic: "Lung Cancer",
    explanation:
      "Recurrent laryngeal nerve involvement by tumour, indicating mediastinal spread. It is one of several local-invasion signs alongside superior vena cava obstruction, Horner's syndrome from sympathetic chain involvement, and phrenic nerve palsy — each pointing to specific anatomy.",
    choices: [
      { text: "Recurrent laryngeal nerve involvement from mediastinal spread", isCorrect: true },
      { text: "Simple smoker's laryngitis", isCorrect: false },
      { text: "Vocal cord polyp", isCorrect: false },
      { text: "Gastro-oesophageal reflux", isCorrect: false },
    ],
  },
];

/* ═══════════ CLINICAL — SET 2 ═══════════ */

const CLIN2: Q[] = [
  {
    stem: "Which lung cancer subtype is most strongly associated with paraneoplastic syndromes such as SIADH and Cushing's?",
    topic: "Lung Cancer",
    explanation:
      "Small cell lung cancer, which is of neuroendocrine origin and secretes peptide hormones. It is strongly smoking-related, typically central, disseminates early, and is treated primarily with chemotherapy and radiotherapy rather than surgery.",
    choices: [
      { text: "Small cell carcinoma", isCorrect: true },
      { text: "Adenocarcinoma", isCorrect: false },
      { text: "Squamous cell carcinoma", isCorrect: false },
      { text: "Large cell carcinoma", isCorrect: false },
    ],
  },
  {
    stem: "Which lung cancer subtype classically causes hypercalcaemia through PTH-related peptide?",
    topic: "Lung Cancer",
    explanation:
      "Squamous cell carcinoma. It is typically central and cavitating, and strongly smoking-related. Adenocarcinoma, by contrast, is the commonest type in non-smokers and tends to be peripheral — a distinction that matters for both suspicion and biopsy approach.",
    choices: [
      { text: "Squamous cell carcinoma", isCorrect: true },
      { text: "Small cell carcinoma", isCorrect: false },
      { text: "Adenocarcinoma", isCorrect: false },
      { text: "Carcinoid tumour", isCorrect: false },
    ],
  },
  {
    stem: "A patient has progressive breathlessness, fine bibasal inspiratory crackles and finger clubbing. Which diagnosis fits?",
    topic: "Interstitial Lung Disease",
    explanation:
      "Idiopathic pulmonary fibrosis. Fine 'velcro' crackles with clubbing and a restrictive pattern with reduced gas transfer is the classic combination. High-resolution CT showing basal subpleural honeycombing supports it, and prognosis is poor without antifibrotic therapy.",
    choices: [
      { text: "Idiopathic pulmonary fibrosis", isCorrect: true },
      { text: "Chronic obstructive pulmonary disease", isCorrect: false },
      { text: "Bronchial asthma", isCorrect: false },
      { text: "Recurrent pulmonary embolism", isCorrect: false },
    ],
  },
  {
    stem: "A young adult has bilateral hilar lymphadenopathy, erythema nodosum and a raised serum ACE. What is the likely diagnosis?",
    topic: "Interstitial Lung Disease",
    explanation:
      "Sarcoidosis — a multisystem granulomatous disease. The combination with fever and arthralgia is Löfgren's syndrome, which carries a good prognosis and often resolves spontaneously. Non-caseating granulomas on biopsy confirm it; caseation would suggest tuberculosis instead.",
    choices: [
      { text: "Sarcoidosis", isCorrect: true },
      { text: "Tuberculosis", isCorrect: false },
      { text: "Lymphoma", isCorrect: false },
      { text: "Silicosis", isCorrect: false },
    ],
  },
  {
    stem: "Which occupational exposure is associated with pleural plaques and mesothelioma?",
    topic: "Occupational Lung Disease",
    explanation:
      "Asbestos. Pleural plaques indicate exposure rather than disease, but the same exposure carries risk of asbestosis, bronchial carcinoma and mesothelioma — with latency often exceeding thirty years. Smoking multiplies the bronchial carcinoma risk substantially.",
    choices: [
      { text: "Asbestos", isCorrect: true },
      { text: "Coal dust", isCorrect: false },
      { text: "Silica", isCorrect: false },
      { text: "Cotton dust", isCorrect: false },
    ],
  },
  {
    stem: "A patient has recurrent cough with large volumes of purulent sputum and CT shows dilated, thick-walled airways. What is the diagnosis?",
    topic: "Bronchiectasis",
    explanation:
      "Bronchiectasis — permanent bronchial dilatation from chronic infection and inflammation. Causes include prior severe infection, cystic fibrosis, immunodeficiency and ciliary dyskinesia. Management centres on airway clearance and prompt treatment of exacerbations rather than on bronchodilators alone.",
    choices: [
      { text: "Bronchiectasis", isCorrect: true },
      { text: "Chronic asthma", isCorrect: false },
      { text: "Emphysema", isCorrect: false },
      { text: "Pulmonary fibrosis", isCorrect: false },
    ],
  },
  {
    stem: "Which inherited condition causes thick secretions, recurrent respiratory infection and pancreatic insufficiency?",
    topic: "Cystic Fibrosis",
    explanation:
      "Cystic fibrosis, an autosomal recessive defect in the CFTR chloride channel. Impaired chloride and water transport produces viscid secretions across multiple organs. The sweat chloride test remains the diagnostic mainstay, and Pseudomonas colonisation is a major determinant of prognosis.",
    choices: [
      { text: "Cystic fibrosis", isCorrect: true },
      { text: "Alpha-1 antitrypsin deficiency", isCorrect: false },
      { text: "Primary ciliary dyskinesia", isCorrect: false },
      { text: "Asthma", isCorrect: false },
    ],
  },
  {
    stem: "A young non-smoker develops basal emphysema and abnormal liver enzymes. Which deficiency should be excluded?",
    topic: "COPD",
    explanation:
      "Alpha-1 antitrypsin deficiency. Without this protease inhibitor, neutrophil elastase destroys alveolar tissue — producing emphysema that is basal rather than apical and appears decades early. Abnormal protein accumulating in hepatocytes explains the accompanying liver disease.",
    choices: [
      { text: "Alpha-1 antitrypsin deficiency", isCorrect: true },
      { text: "Cystic fibrosis", isCorrect: false },
      { text: "Immunoglobulin A deficiency", isCorrect: false },
      { text: "Complement deficiency", isCorrect: false },
    ],
  },
  {
    stem: "A patient has daytime somnolence, loud snoring and witnessed apnoeas. What is the underlying mechanism?",
    topic: "Sleep-Disordered Breathing",
    explanation:
      "Repeated collapse of the upper airway during sleep, causing intermittent hypoxia and fragmented sleep. Obesity is the dominant risk factor. Untreated it carries cardiovascular risk and driving hazard, and CPAP is highly effective — making it one of the most rewarding diagnoses to catch.",
    choices: [
      { text: "Repeated upper airway collapse during sleep", isCorrect: true },
      { text: "Reduced central respiratory drive alone", isCorrect: false },
      { text: "Progressive alveolar destruction", isCorrect: false },
      { text: "Pulmonary vascular obstruction", isCorrect: false },
    ],
  },
  {
    stem: "Which finding suggests type 2 rather than type 1 respiratory failure?",
    topic: "Respiratory Failure",
    explanation:
      "A raised PaCO2. Type 1 is hypoxaemia with normal or low CO2 from V/Q mismatch or shunt — pneumonia, oedema, embolism. Type 2 adds hypercapnia from alveolar hypoventilation — severe COPD, neuromuscular weakness, chest wall disease, sedative overdose. The distinction determines whether ventilatory support is needed.",
    choices: [
      { text: "A raised PaCO2", isCorrect: true },
      { text: "A low PaO2 alone", isCorrect: false },
      { text: "A normal chest radiograph", isCorrect: false },
      { text: "Raised respiratory rate", isCorrect: false },
    ],
  },
  {
    stem: "Which patient is most likely to benefit from non-invasive ventilation?",
    topic: "Respiratory Failure",
    explanation:
      "A COPD exacerbation with persistent respiratory acidosis despite optimal medical therapy — the strongest evidence base for NIV. It reduces intubation rates and mortality. It is unsuitable where the airway is unprotected, the patient is unable to cooperate, or there is haemodynamic instability.",
    choices: [
      { text: "COPD exacerbation with persisting respiratory acidosis after medical therapy", isCorrect: true },
      { text: "A patient with a reduced conscious level and unprotected airway", isCorrect: false },
      { text: "Untreated tension pneumothorax", isCorrect: false },
      { text: "Cardiac arrest", isCorrect: false },
    ],
  },
  {
    stem: "What defines acute respiratory distress syndrome?",
    topic: "Respiratory Failure",
    explanation:
      "Acute onset within a week of a known insult, bilateral infiltrates, hypoxaemia with a reduced PaO2/FiO2 ratio, and respiratory failure not explained by cardiac failure or fluid overload. It is a syndrome of increased permeability oedema — the lung reacting to systemic insult rather than a primary lung disease.",
    choices: [
      { text: "Acute onset, bilateral infiltrates, hypoxaemia not explained by cardiac failure", isCorrect: true },
      { text: "Chronic breathlessness with a restrictive pattern", isCorrect: false },
      { text: "Unilateral consolidation with fever", isCorrect: false },
      { text: "Hypercapnia with a normal chest radiograph", isCorrect: false },
    ],
  },
  {
    stem: "Which ventilation strategy improves survival in ARDS?",
    topic: "Respiratory Failure",
    explanation:
      "Low tidal volume ventilation — around 6 mL/kg predicted body weight — with limited plateau pressure. Large tidal volumes overdistend the remaining aerated lung and cause ventilator-induced injury. Accepting a higher CO2 (permissive hypercapnia) is preferable to injurious pressures.",
    choices: [
      { text: "Low tidal volume ventilation with limited plateau pressure", isCorrect: true },
      { text: "High tidal volumes to recruit collapsed lung", isCorrect: false },
      { text: "Maintaining a normal PaCO2 at any cost", isCorrect: false },
      { text: "Avoiding all positive end-expiratory pressure", isCorrect: false },
    ],
  },
  {
    stem: "A patient with active pulmonary tuberculosis has a persistent cough. Which infection control measure is essential?",
    topic: "Tuberculosis",
    explanation:
      "Airborne precautions with a negative-pressure room and fitted respirator masks. TB is transmitted by droplet nuclei that remain suspended for hours, so surgical masks and standard side-rooms are inadequate. Precautions continue until sputum smears are negative or treatment response is established.",
    choices: [
      { text: "Airborne precautions with negative pressure and respirator masks", isCorrect: true },
      { text: "Standard precautions alone", isCorrect: false },
      { text: "Contact precautions with gloves and gown only", isCorrect: false },
      { text: "No precautions once treatment has started", isCorrect: false },
    ],
  },
  {
    stem: "A patient on TB treatment develops painful red-green colour discrimination loss. Which drug is responsible?",
    topic: "Tuberculosis",
    explanation:
      "Ethambutol, which causes dose-related optic neuritis. Visual acuity and colour vision should be checked before and during treatment, and the drug stopped promptly if affected — the change is usually reversible if caught early. Isoniazid causes peripheral neuropathy instead, prevented with pyridoxine.",
    choices: [
      { text: "Ethambutol", isCorrect: true },
      { text: "Isoniazid", isCorrect: false },
      { text: "Rifampicin", isCorrect: false },
      { text: "Pyrazinamide", isCorrect: false },
    ],
  },
];

/* ═══════════ DRUGS ═══════════ */

const DRUGS: Q[] = [
  {
    stem: "How do short-acting beta-2 agonists such as salbutamol relieve bronchospasm?",
    topic: "Bronchodilators",
    explanation:
      "They stimulate beta-2 receptors on bronchial smooth muscle, raising cyclic AMP and causing relaxation within minutes. The beta-2 selectivity limits cardiac effects, though tremor and tachycardia still occur at higher doses — and beta-2 stimulation also drives potassium intracellularly, causing hypokalaemia after repeated nebulisers.",
    choices: [
      { text: "Beta-2 receptor stimulation raises cAMP and relaxes bronchial smooth muscle", isCorrect: true },
      { text: "They block muscarinic receptors", isCorrect: false },
      { text: "They inhibit leukotriene synthesis", isCorrect: false },
      { text: "They act as direct anti-inflammatories", isCorrect: false },
    ],
  },
  {
    stem: "Why should a long-acting beta-2 agonist never be prescribed alone in asthma?",
    topic: "Bronchodilators",
    explanation:
      "LABA monotherapy relieves symptoms while leaving airway inflammation untreated, and is associated with increased asthma mortality. It must always be combined with an inhaled corticosteroid — which is precisely why combination inhalers exist, to make separation impossible.",
    choices: [
      { text: "It relieves symptoms while leaving inflammation untreated, increasing mortality", isCorrect: true },
      { text: "It causes immediate tolerance within days", isCorrect: false },
      { text: "It is ineffective without a spacer", isCorrect: false },
      { text: "It causes irreversible bronchoconstriction", isCorrect: false },
    ],
  },
  {
    stem: "What is the mechanism of ipratropium in COPD?",
    topic: "Bronchodilators",
    explanation:
      "Muscarinic antagonism blocks vagally-mediated bronchoconstriction. Cholinergic tone is the main reversible component of airflow obstruction in COPD, which is why antimuscarinics are often more effective there than in asthma. Long-acting agents such as tiotropium extend the same principle.",
    choices: [
      { text: "It blocks muscarinic receptors, reducing vagal bronchoconstriction", isCorrect: true },
      { text: "It stimulates beta-2 receptors", isCorrect: false },
      { text: "It inhibits phosphodiesterase", isCorrect: false },
      { text: "It is a topical corticosteroid", isCorrect: false },
    ],
  },
  {
    stem: "Why must patients rinse their mouth after using an inhaled corticosteroid?",
    topic: "Anti-Inflammatory Agents",
    explanation:
      "To reduce oropharyngeal candidiasis and dysphonia from local steroid deposition. A spacer also reduces oropharyngeal deposition while improving lung delivery. It is a small counselling point that prevents a common and avoidable side effect.",
    choices: [
      { text: "To reduce oral candidiasis and hoarseness", isCorrect: true },
      { text: "To prevent systemic absorption entirely", isCorrect: false },
      { text: "To improve the taste of the next dose", isCorrect: false },
      { text: "To prevent dental caries from the propellant", isCorrect: false },
    ],
  },
  {
    stem: "What is the principal action of inhaled corticosteroids in asthma?",
    topic: "Anti-Inflammatory Agents",
    explanation:
      "Suppression of airway inflammation — reducing eosinophilic infiltration, mucosal oedema and bronchial hyperresponsiveness. They are preventers, not relievers, taking days to weeks for full effect. Patients who expect immediate relief often stop them, which is a major cause of poor control.",
    choices: [
      { text: "They suppress airway inflammation and hyperresponsiveness over days to weeks", isCorrect: true },
      { text: "They produce immediate bronchodilatation", isCorrect: false },
      { text: "They thin airway secretions", isCorrect: false },
      { text: "They block histamine receptors", isCorrect: false },
    ],
  },
  {
    stem: "Which patients are most likely to benefit from a leukotriene receptor antagonist such as montelukast?",
    topic: "Anti-Inflammatory Agents",
    explanation:
      "Those with exercise-induced symptoms, allergic rhinitis, or aspirin-sensitive asthma, where leukotrienes drive a large part of the response. It is taken orally, which helps adherence in children, but it is an adjunct rather than a replacement for inhaled corticosteroid.",
    choices: [
      { text: "Exercise-induced, allergic or aspirin-sensitive asthma", isCorrect: true },
      { text: "Acute severe asthma in the emergency department", isCorrect: false },
      { text: "Established emphysema", isCorrect: false },
      { text: "Pulmonary fibrosis", isCorrect: false },
    ],
  },
  {
    stem: "Why does aspirin trigger bronchospasm in some asthmatics?",
    topic: "Anti-Inflammatory Agents",
    explanation:
      "COX inhibition shunts arachidonic acid down the lipoxygenase pathway, increasing leukotriene production and causing bronchoconstriction. The association with nasal polyps and asthma is Samter's triad. Leukotriene antagonists are logically effective in these patients.",
    choices: [
      { text: "COX inhibition diverts arachidonic acid toward leukotriene production", isCorrect: true },
      { text: "It is a true IgE-mediated allergy in all cases", isCorrect: false },
      { text: "It directly irritates the bronchial mucosa", isCorrect: false },
      { text: "It causes histamine release from mast cells", isCorrect: false },
    ],
  },
  {
    stem: "Theophylline has a narrow therapeutic index. Which drug interaction raises its level dangerously?",
    topic: "Methylxanthines",
    explanation:
      "CYP450 inhibitors such as macrolides, ciprofloxacin and cimetidine raise theophylline levels toward toxicity — arrhythmia and seizures. Smoking and rifampicin induce metabolism and lower levels, so stopping smoking can precipitate toxicity on an unchanged dose.",
    choices: [
      { text: "Macrolides and ciprofloxacin, through CYP450 inhibition", isCorrect: true },
      { text: "Rifampicin, through enzyme induction", isCorrect: false },
      { text: "Inhaled salbutamol", isCorrect: false },
      { text: "Paracetamol", isCorrect: false },
    ],
  },
  {
    stem: "Which class of drug can precipitate bronchospasm and should be used cautiously in asthma?",
    topic: "Drugs to Avoid",
    explanation:
      "Non-selective beta-blockers, which antagonise beta-2 receptors in the airway. Cardioselective agents are safer and are not absolutely contraindicated where there is a strong cardiac indication, but caution and monitoring are required. Adenosine and NSAIDs are other recognised triggers.",
    choices: [
      { text: "Non-selective beta-blockers", isCorrect: true },
      { text: "ACE inhibitors", isCorrect: false },
      { text: "Statins", isCorrect: false },
      { text: "Proton pump inhibitors", isCorrect: false },
    ],
  },
  {
    stem: "Which respiratory adverse effect is characteristic of ACE inhibitors?",
    topic: "Drugs to Avoid",
    explanation:
      "A persistent dry cough, caused by bradykinin accumulation in the airways since ACE normally degrades it. It affects a substantial minority, is not dose-related, and resolves on switching to an ARB. It is frequently misattributed to a respiratory cause and investigated unnecessarily.",
    choices: [
      { text: "Persistent dry cough from bradykinin accumulation", isCorrect: true },
      { text: "Bronchospasm from beta-2 blockade", isCorrect: false },
      { text: "Pulmonary fibrosis", isCorrect: false },
      { text: "Increased sputum production", isCorrect: false },
    ],
  },
  {
    stem: "What is the role of nebulised hypertonic saline in cystic fibrosis?",
    topic: "Mucoactive Agents",
    explanation:
      "It draws water onto the airway surface by osmosis, rehydrating the periciliary layer so mucus can be cleared. It treats the consequence of the CFTR defect — dehydrated secretions — rather than the defect itself, and is used alongside physiotherapy.",
    choices: [
      { text: "It osmotically rehydrates airway surface liquid, aiding mucus clearance", isCorrect: true },
      { text: "It kills bacteria directly", isCorrect: false },
      { text: "It dilates the bronchi", isCorrect: false },
      { text: "It suppresses the cough reflex", isCorrect: false },
    ],
  },
  {
    stem: "Why is oxygen described as a drug requiring prescription and a target range?",
    topic: "Oxygen Therapy",
    explanation:
      "Because both too little and too much cause harm — hypoxia damages tissue, while excess worsens V/Q matching in hypercapnic patients and increases oxidative injury after cardiac arrest. Prescribing a target saturation range makes the intended endpoint explicit rather than leaving it to whoever adjusts the flow meter.",
    choices: [
      { text: "Both insufficient and excessive oxygen cause harm, so a target range is needed", isCorrect: true },
      { text: "Oxygen has no adverse effects but is expensive", isCorrect: false },
      { text: "It is a controlled drug legally", isCorrect: false },
      { text: "Only to record cylinder usage", isCorrect: false },
    ],
  },
  {
    stem: "Which agent is used for smoking cessation and acts as a partial nicotinic receptor agonist?",
    topic: "Smoking Cessation",
    explanation:
      "Varenicline. Partial agonism reduces craving while blunting the reward from smoking. Nicotine replacement and bupropion are alternatives. Smoking cessation remains the single most effective intervention in COPD — the only one that alters the rate of lung function decline.",
    choices: [
      { text: "Varenicline", isCorrect: true },
      { text: "Salbutamol", isCorrect: false },
      { text: "Montelukast", isCorrect: false },
      { text: "Theophylline", isCorrect: false },
    ],
  },
  {
    stem: "Why does a spacer device improve inhaler effectiveness?",
    topic: "Delivery Devices",
    explanation:
      "It slows the aerosol and allows the propellant to evaporate, reducing oropharyngeal impaction and increasing the fraction reaching the lower airway. It also removes the need to coordinate actuation with inhalation — the commonest reason inhalers fail in children and older patients.",
    choices: [
      { text: "It improves lung deposition and removes the need for coordination", isCorrect: true },
      { text: "It increases the drug dose delivered per actuation", isCorrect: false },
      { text: "It humidifies the drug", isCorrect: false },
      { text: "It prevents the drug from degrading", isCorrect: false },
    ],
  },
  {
    stem: "A patient with COPD asks which intervention will most improve their long-term survival. What is the answer?",
    topic: "Smoking Cessation",
    explanation:
      "Stopping smoking. It is the only intervention shown to slow the accelerated decline in FEV1. Long-term oxygen therapy improves survival in selected hypoxaemic patients, and pulmonary rehabilitation improves symptoms and quality of life — but cessation remains the single most powerful measure.",
    choices: [
      { text: "Stopping smoking", isCorrect: true },
      { text: "Adding a second bronchodilator", isCorrect: false },
      { text: "Regular antibiotic courses", isCorrect: false },
      { text: "Increasing inhaled corticosteroid dose", isCorrect: false },
    ],
  },
];

/* ═══════════ SEED ═══════════ */

async function seedSet(o: {
  categorySlug: string;
  slug: string;
  title: string;
  description: string;
  kind: string;
  timeLimitSeconds: number | null;
  difficulty: string;
  questions: Q[];
}) {
  const category = await prisma.quizCategory.findUnique({ where: { slug: o.categorySlug } });
  if (!category) {
    console.log(`  ✗ Category "${o.categorySlug}" not found — run seed-medical-taxonomy.ts first.`);
    return;
  }

  const quiz = await prisma.quiz.upsert({
    where: { slug: o.slug },
    create: {
      slug: o.slug,
      title: o.title,
      description: o.description,
      categoryId: category.id,
      kind: o.kind,
      timeLimitSeconds: o.timeLimitSeconds,
      passThreshold: 70,
      difficulty: o.difficulty,
      published: true,
    },
    update: {
      title: o.title,
      description: o.description,
      categoryId: category.id,
      kind: o.kind,
      timeLimitSeconds: o.timeLimitSeconds,
    },
  });

  await prisma.question.deleteMany({ where: { quizId: quiz.id } });

  let order = 0;
  for (const q of o.questions) {
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

  console.log(`  ✓ ${o.title} — ${o.questions.length} questions`);
}

async function main() {
  console.log("Seeding Respiratory…\n");

  await seedSet({
    categorySlug: "fs-respiratory-physiology",
    slug: "respiratory-physiology-set-1",
    title: "Respiratory Physiology — Practice Set 1",
    description:
      "Mechanics of breathing, lung volumes, ventilation and perfusion, gas transport and the control of breathing. Fifteen questions, untimed.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Foundational",
    questions: PHYS1,
  });

  await seedSet({
    categorySlug: "fs-respiratory-physiology",
    slug: "respiratory-physiology-set-2",
    title: "Respiratory Physiology — Practice Set 2",
    description:
      "Acid-base interpretation, spirometry patterns, the A-a gradient, oxygen therapy and gas exchange. Fifteen fresh questions — no overlap with Set 1.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Intermediate",
    questions: PHYS2,
  });

  await seedSet({
    categorySlug: "cs-respiratory-medicine",
    slug: "respiratory-clinical-set-1",
    title: "Respiratory Medicine — Practice Set 1",
    description:
      "Acute asthma, COPD, pneumothorax, pneumonia, pulmonary embolism, pleural disease and lung cancer. Fifteen questions, untimed.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Intermediate",
    questions: CLIN1,
  });

  await seedSet({
    categorySlug: "cs-respiratory-medicine",
    slug: "respiratory-clinical-set-2",
    title: "Respiratory Medicine — Practice Set 2",
    description:
      "Lung cancer subtypes, interstitial and occupational lung disease, bronchiectasis, cystic fibrosis, sleep-disordered breathing, respiratory failure and tuberculosis. Fifteen fresh questions.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Intermediate",
    questions: CLIN2,
  });

  await seedSet({
    categorySlug: "fs-pharmacology",
    slug: "respiratory-drugs-set-1",
    title: "Respiratory Drugs — Practice Set 1",
    description:
      "Bronchodilators, inhaled corticosteroids, leukotriene antagonists, theophylline, oxygen as a drug, delivery devices and smoking cessation. Fifteen questions.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Intermediate",
    questions: DRUGS,
  });

  await seedSet({
    categorySlug: "fs-respiratory-physiology",
    slug: "respiratory-physiology-exam-1",
    title: "Respiratory Physiology — Timed Exam",
    description: "Both physiology sets combined: thirty questions in 35 minutes, feedback withheld until you submit.",
    kind: "EXAM",
    timeLimitSeconds: 35 * 60,
    difficulty: "Intermediate",
    questions: [...PHYS1, ...PHYS2],
  });

  await seedSet({
    categorySlug: "cs-respiratory-medicine",
    slug: "respiratory-clinical-exam-1",
    title: "Respiratory Medicine — Timed Exam",
    description: "Both clinical sets combined: thirty questions in 35 minutes, feedback withheld until you submit.",
    kind: "EXAM",
    timeLimitSeconds: 35 * 60,
    difficulty: "Intermediate",
    questions: [...CLIN1, ...CLIN2],
  });

  await seedSet({
    categorySlug: "cs-respiratory-medicine",
    slug: "respiratory-comprehensive-exam-1",
    title: "Respiratory — Comprehensive Timed Exam",
    description:
      "All seventy-five items across physiology, clinical medicine and pharmacology: 90 minutes. Sit this once the five practice sets feel comfortable.",
    kind: "EXAM",
    timeLimitSeconds: 90 * 60,
    difficulty: "Advanced",
    questions: [...PHYS1, ...PHYS2, ...CLIN1, ...CLIN2, ...DRUGS],
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
