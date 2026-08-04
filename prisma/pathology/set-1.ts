/**
 * PATHOLOGY — PRACTICE SET 1
 * Cell Injury, Cell Death & Cellular Adaptation
 *
 * Difficulty: Foundational (the entry rung of the seven-set ladder, but written
 * at US board standard — vignettes, five options, second-order reasoning).
 *
 * 90 questions across 12 topics:
 *   Reversible Cell Injury · Irreversible Injury & Necrosis · Ischemia &
 *   Reperfusion · Free Radical Injury · Apoptosis · Hypertrophy & Hyperplasia ·
 *   Atrophy & Autophagy · Metaplasia & Dysplasia · Intracellular Accumulations ·
 *   Pathologic Calcification · Cellular Aging · Injury Marker Interpretation
 *
 * Item mix: 62 single-answer vignettes, 16 select-all-that-apply, 12 true/false.
 * Units are US conventional throughout (mg/dL, mEq/L, mmHg, °F, lb).
 *
 * Every rationale states why the key is right AND why the tempting distractor
 * fails, because on a board exam the distractor is the thing that costs marks.
 */

import type { Q } from "../_lib/qbank";

export const PATHOLOGY_SET_1: Q[] = [
  /* ══════════════ REVERSIBLE CELL INJURY ══════════════ */
  {
    stem: "A 58-year-old man undergoes cross-clamping of the aorta during repair of an abdominal aortic aneurysm. A renal biopsy taken 20 minutes after clamping shows swollen proximal tubular cells with small clear vacuoles in the cytoplasm. Nuclei appear intact. Which cellular event most directly explains the vacuoles?",
    topic: "Reversible Cell Injury",
    explanation:
      "Failure of the ATP-dependent Na+/K+ pump lets sodium and water accumulate intracellularly, distending the endoplasmic reticulum into clear vacuoles — the hallmark of hydropic change. Intact nuclei confirm the injury is still reversible. Mitochondrial permeability transition and nuclear pyknosis mark the irreversible threshold, which has not been crossed at 20 minutes.",
    choices: [
      { text: "Failure of the Na+/K+ ATPase with influx of sodium and water", isCorrect: true },
      { text: "Formation of high-amplitude mitochondrial permeability transition pores" },
      { text: "Activation of caspase-3 with cytoplasmic budding" },
      { text: "Lysosomal rupture releasing acid hydrolases into the cytosol" },
      { text: "Covalent binding of a reactive metabolite to tubular membrane proteins" },
    ],
  },
  {
    stem: "Which of the following are features of REVERSIBLE cell injury? Select all that apply.",
    type: "MULTI",
    topic: "Reversible Cell Injury",
    explanation:
      "Reversible injury is defined by cell and organelle swelling, blebbing, ribosomal detachment from the rough ER, and clumping of nuclear chromatin — all restorable if the insult is removed. Membrane rupture with enzyme leak and karyorrhexis indicate the point of no return has passed.",
    choices: [
      { text: "Cellular swelling with plasma membrane blebs", isCorrect: true },
      { text: "Detachment of ribosomes from the rough endoplasmic reticulum", isCorrect: true },
      { text: "Mitochondrial swelling with small amorphous densities", isCorrect: true },
      { text: "Rupture of lysosomes with digestion of cytoplasmic contents" },
      { text: "Karyorrhexis with fragmentation of the nucleus" },
    ],
  },
  {
    stem: "A liver biopsy from a patient with acute hepatitis shows hepatocytes with pale, swollen cytoplasm. The pathologist calls this 'hydropic change.' Which structure accumulates the water?",
    topic: "Reversible Cell Injury",
    explanation:
      "Water follows sodium into the cisternae of the endoplasmic reticulum, which distend and appear as cytoplasmic clearing on light microscopy. The nucleus and Golgi do not accumulate significant water in this process, and glycogen depletion causes clearing by a different mechanism entirely.",
    choices: [
      { text: "Cisternae of the endoplasmic reticulum", isCorrect: true },
      { text: "The nucleolus" },
      { text: "Golgi vesicles destined for secretion" },
      { text: "Peroxisomal matrix" },
      { text: "Intercellular tight junction spaces" },
    ],
  },
  {
    stem: "True or False: Cell membrane blebbing always signifies irreversible cell injury.",
    type: "TRUE_FALSE",
    topic: "Reversible Cell Injury",
    explanation:
      "False. Blebbing reflects cytoskeletal detachment from the membrane and is a classic feature of REVERSIBLE injury. Irreversibility is marked by frank membrane rupture, severe mitochondrial damage, and nuclear dissolution — not blebbing alone.",
    choices: [{ text: "True" }, { text: "False", isCorrect: true }],
  },
  {
    stem: "A 44-year-old woman is resuscitated after 4 minutes of hypotension during surgery. Which subcellular change would be the FIRST to appear in her hepatocytes?",
    topic: "Reversible Cell Injury",
    explanation:
      "Decreased oxidative phosphorylation with ATP depletion precedes every morphologic change; it is the biochemical trigger from which swelling, ribosomal detachment and glycolytic shift all follow. Morphologic findings such as swelling take minutes more to become visible.",
    choices: [
      { text: "Decreased oxidative phosphorylation with ATP depletion", isCorrect: true },
      { text: "Cell swelling visible on light microscopy" },
      { text: "Detachment of ribosomes from the rough ER" },
      { text: "Nuclear chromatin clumping" },
      { text: "Influx of calcium into mitochondria" },
    ],
  },
  {
    stem: "During ATP depletion, anaerobic glycolysis increases. Which downstream consequence most directly damages the cell?",
    topic: "Reversible Cell Injury",
    explanation:
      "Lactate accumulation lowers intracellular pH, and the resulting acidosis causes chromatin clumping and inhibits many enzymes. Glycogen is consumed rather than accumulated, and glycolysis produces too little ATP to restore pump function.",
    choices: [
      { text: "Lactate accumulation with a fall in intracellular pH", isCorrect: true },
      { text: "Excess glycogen deposition within the cytoplasm" },
      { text: "Complete restoration of Na+/K+ ATPase activity" },
      { text: "Increased mitochondrial membrane potential" },
      { text: "Depletion of intracellular calcium stores" },
    ],
  },
  {
    stem: "Which of the following would you expect to find in a reversibly injured cell? Select all that apply.",
    type: "MULTI",
    topic: "Reversible Cell Injury",
    explanation:
      "Reversibly injured cells show decreased ATP, increased anaerobic glycolysis with lactate, intracellular sodium and water accumulation, and myelin figures from membrane phospholipid degradation. Cytochrome c in the cytosol and elevated serum troponin both indicate that membrane integrity has already been lost.",
    choices: [
      { text: "Reduced intracellular ATP", isCorrect: true },
      { text: "Increased intracellular sodium and water", isCorrect: true },
      { text: "Myelin figures derived from damaged membranes", isCorrect: true },
      { text: "Cytochrome c free within the cytosol" },
      { text: "Serum troponin I of 8.4 ng/mL" },
    ],
  },
  {
    stem: "A pathologist notes 'fatty change' in a liver biopsy from a patient with chronic alcohol use. Which mechanism best explains the accumulation?",
    topic: "Reversible Cell Injury",
    explanation:
      "Alcohol metabolism raises the NADH:NAD+ ratio, which shunts substrate toward triglyceride synthesis while impairing fatty acid oxidation and lipoprotein export. Fatty change is a reversible injury pattern. Impaired protein folding and lysosomal enzyme deficiency produce different storage patterns.",
    choices: [
      { text: "Increased NADH:NAD+ ratio favoring triglyceride synthesis", isCorrect: true },
      { text: "Deficiency of a lysosomal acid hydrolase" },
      { text: "Misfolding of secretory proteins in the ER" },
      { text: "Excess hepatic uptake of chylomicron remnants alone" },
      { text: "Failure of peroxisomal beta-oxidation of very-long-chain fats" },
    ],
  },

  /* ══════════════ IRREVERSIBLE INJURY & NECROSIS ══════════════ */
  {
    stem: "A 67-year-old man dies 3 days after an untreated myocardial infarction. Sections of the infarcted myocardium show preserved cell outlines with intensely eosinophilic cytoplasm and loss of nuclei. Which pattern of necrosis is this?",
    topic: "Irreversible Injury & Necrosis",
    explanation:
      "Coagulative necrosis preserves the structural outline because ischemia denatures both the structural proteins and the lysosomal enzymes that would otherwise digest the cell. It is the pattern of infarction in every solid organ except the brain. Liquefactive necrosis would show complete dissolution into a soft mass.",
    choices: [
      { text: "Coagulative necrosis", isCorrect: true },
      { text: "Liquefactive necrosis" },
      { text: "Caseous necrosis" },
      { text: "Fat necrosis" },
      { text: "Fibrinoid necrosis" },
    ],
  },
  {
    stem: "A 71-year-old woman has a large left middle cerebral artery infarct. Two weeks later, imaging shows a fluid-filled cavity. Why does the brain liquefy while the heart does not?",
    topic: "Irreversible Injury & Necrosis",
    explanation:
      "The CNS is rich in hydrolytic enzymes from resident microglia and low in supportive collagenous stroma, so digestion outpaces protein denaturation and the tissue liquefies into a cystic cavity. Neuronal fat content and blood-brain barrier status are not the operative factors.",
    choices: [
      { text: "Abundant hydrolytic enzymes and scant collagenous stroma in the CNS", isCorrect: true },
      { text: "Higher intracellular calcium in neurons than in myocytes" },
      { text: "The blood-brain barrier prevents neutrophil entry entirely" },
      { text: "Neurons lack mitochondria capable of anaerobic metabolism" },
      { text: "Cerebral tissue has a higher collagen content than myocardium" },
    ],
  },
  {
    stem: "Match the clinical setting to the expected necrosis pattern. Which of the following pairings are correct? Select all that apply.",
    type: "MULTI",
    topic: "Irreversible Injury & Necrosis",
    explanation:
      "Tuberculosis produces caseous necrosis; acute pancreatitis produces enzymatic fat necrosis with saponification; malignant hypertension and vasculitis produce fibrinoid necrosis in vessel walls. Renal infarction gives coagulative, not liquefactive, necrosis, and gas gangrene is a form of liquefactive necrosis rather than caseous.",
    choices: [
      { text: "Pulmonary tuberculosis — caseous necrosis", isCorrect: true },
      { text: "Acute pancreatitis — fat necrosis", isCorrect: true },
      { text: "Malignant hypertension — fibrinoid necrosis", isCorrect: true },
      { text: "Renal artery embolus — liquefactive necrosis" },
      { text: "Clostridial gas gangrene — caseous necrosis" },
    ],
  },
  {
    stem: "A 52-year-old man with alcohol use disorder presents with severe epigastric pain radiating to the back. Lipase is 1,840 U/L. At laparotomy the surgeon sees chalky white plaques on the omentum. What is the chemical basis of these plaques?",
    topic: "Irreversible Injury & Necrosis",
    explanation:
      "Released pancreatic lipases hydrolyze adipocyte triglycerides, and the liberated fatty acids bind calcium to form insoluble soaps — saponification, seen grossly as chalky white deposits. This is dystrophic calcification in normocalcemic tissue, not a consequence of high serum calcium; serum calcium typically FALLS as it is consumed.",
    choices: [
      { text: "Fatty acids released by lipase binding calcium to form soaps", isCorrect: true },
      { text: "Deposition of urate crystals in fatty tissue" },
      { text: "Precipitation of cholesterol esters from ruptured plaques" },
      { text: "Metastatic calcification driven by hypercalcemia" },
      { text: "Fibrin polymerization within necrotic adipose tissue" },
    ],
  },
  {
    stem: "In the patient above with extensive fat necrosis, which serum abnormality would you most expect?",
    topic: "Irreversible Injury & Necrosis",
    explanation:
      "Calcium is consumed forming soaps, so hypocalcemia develops and is a recognized marker of severe pancreatitis. Expecting hypercalcemia inverts the mechanism — a common trap, since calcium is visibly depositing in tissue.",
    choices: [
      { text: "Calcium 7.2 mg/dL", isCorrect: true },
      { text: "Calcium 11.8 mg/dL" },
      { text: "Potassium 2.4 mEq/L" },
      { text: "Sodium 158 mEq/L" },
      { text: "Phosphorus 1.1 mg/dL" },
    ],
  },
  {
    stem: "A 34-year-old man from a TB-endemic region has a lung nodule. Biopsy shows granulomas with central amorphous, friable material and loss of all cellular architecture. Which necrosis pattern is described?",
    topic: "Irreversible Injury & Necrosis",
    explanation:
      "Caseous necrosis combines features of coagulative and liquefactive necrosis: architecture is obliterated, leaving cheese-like debris surrounded by granulomatous inflammation. Coagulative necrosis would preserve ghost outlines; fibrinoid necrosis is confined to vessel walls.",
    choices: [
      { text: "Caseous necrosis", isCorrect: true },
      { text: "Coagulative necrosis" },
      { text: "Fibrinoid necrosis" },
      { text: "Gangrenous necrosis" },
      { text: "Fat necrosis" },
    ],
  },
  {
    stem: "True or False: Necrosis always elicits an inflammatory response, whereas apoptosis typically does not.",
    type: "TRUE_FALSE",
    topic: "Irreversible Injury & Necrosis",
    explanation:
      "True. Necrosis releases intracellular contents that act as damage-associated molecular patterns, recruiting neutrophils and macrophages. Apoptotic cells retain membrane integrity and are cleared by phagocytes after externalizing phosphatidylserine, so inflammation is not triggered.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which nuclear change is characterized by shrinkage and increased basophilia of the nucleus?",
    topic: "Irreversible Injury & Necrosis",
    explanation:
      "Pyknosis is nuclear condensation into a small dense basophilic mass. Karyorrhexis is the subsequent fragmentation, and karyolysis is the fading of basophilia as DNase digests chromatin. The sequence is pyknosis, then karyorrhexis, then karyolysis.",
    choices: [
      { text: "Pyknosis", isCorrect: true },
      { text: "Karyorrhexis" },
      { text: "Karyolysis" },
      { text: "Anisonucleosis" },
      { text: "Nuclear molding" },
    ],
  },
  {
    stem: "A diabetic patient has a black, shriveled, mummified great toe with a sharp line of demarcation and no purulent discharge. Which term best applies?",
    topic: "Irreversible Injury & Necrosis",
    explanation:
      "Dry gangrene is coagulative necrosis of a limb following arterial insufficiency, without superimposed bacterial liquefaction. Wet gangrene implies bacterial infection with liquefactive change and purulence; gas gangrene implies clostridial infection with crepitus.",
    choices: [
      { text: "Dry gangrene", isCorrect: true },
      { text: "Wet gangrene" },
      { text: "Gas gangrene" },
      { text: "Fibrinoid necrosis" },
      { text: "Caseous necrosis" },
    ],
  },
  {
    stem: "Which findings distinguish irreversible from reversible injury at the ultrastructural level? Select all that apply.",
    type: "MULTI",
    topic: "Irreversible Injury & Necrosis",
    explanation:
      "Irreversibility is marked by large amorphous mitochondrial densities, frank plasma membrane defects, lysosomal rupture, and nuclear dissolution. Mild mitochondrial swelling and ER dilation are compatible with recovery if the insult is withdrawn.",
    choices: [
      { text: "Large amorphous densities within mitochondria", isCorrect: true },
      { text: "Discontinuities in the plasma membrane", isCorrect: true },
      { text: "Rupture of lysosomes with autodigestion", isCorrect: true },
      { text: "Dilation of endoplasmic reticulum cisternae" },
      { text: "Detachment of ribosomes from the rough ER" },
    ],
  },
  {
    stem: "A patient with systemic lupus erythematosus has a renal biopsy showing bright pink, smudgy material within arteriolar walls. Which necrosis pattern is this, and what is the material?",
    topic: "Irreversible Injury & Necrosis",
    explanation:
      "Fibrinoid necrosis occurs when immune complexes deposit in vessel walls together with plasma fibrin, producing a bright eosinophilic smudgy appearance. It is a vascular pattern seen in immune-mediated vasculitis and malignant hypertension, not in solid organ infarction.",
    choices: [
      { text: "Fibrinoid necrosis — immune complexes plus fibrin", isCorrect: true },
      { text: "Coagulative necrosis — denatured structural proteins" },
      { text: "Caseous necrosis — mycobacterial lipid" },
      { text: "Fat necrosis — calcium soaps" },
      { text: "Liquefactive necrosis — hydrolytic enzymes" },
    ],
  },
  {
    stem: "Which enzyme released during necrosis is responsible for karyolysis?",
    topic: "Irreversible Injury & Necrosis",
    explanation:
      "Lysosomal DNase degrades nuclear chromatin, causing basophilia to fade — karyolysis. RNase, protease and lipase contribute to cytoplasmic digestion but do not produce this specific nuclear change.",
    choices: [
      { text: "DNase", isCorrect: true },
      { text: "RNase" },
      { text: "Cathepsin D" },
      { text: "Phospholipase A2" },
      { text: "Myeloperoxidase" },
    ],
  },
  {
    stem: "True or False: In coagulative necrosis, the injured tissue retains its gross architecture for several days.",
    type: "TRUE_FALSE",
    topic: "Irreversible Injury & Necrosis",
    explanation:
      "True. Denaturation of lysosomal enzymes by the acidic ischemic environment blocks autolysis, so the tissue outline persists until leukocytes arrive to digest it — typically over days to weeks.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },

  /* ══════════════ ISCHEMIA & REPERFUSION ══════════════ */
  {
    stem: "A 61-year-old man receives percutaneous coronary intervention 90 minutes after symptom onset. Cardiac injury paradoxically worsens in the hours after flow is restored. Which mechanism best explains reperfusion injury?",
    topic: "Ischemia & Reperfusion",
    explanation:
      "Restored oxygen delivery to cells with damaged mitochondria generates a burst of reactive oxygen species, and returning blood brings neutrophils and complement that amplify the damage. The paradox is that oxygen is required for the injury — which is why it appears only on reperfusion.",
    choices: [
      { text: "Reactive oxygen species generated on reoxygenation, plus neutrophil influx", isCorrect: true },
      { text: "Continued anaerobic glycolysis with worsening acidosis" },
      { text: "Sustained depletion of intracellular calcium" },
      { text: "Reduced expression of adhesion molecules on endothelium" },
      { text: "Complete arrest of complement activation" },
    ],
  },
  {
    stem: "Which cell type is MOST vulnerable to a 5-minute period of global ischemia?",
    topic: "Ischemia & Reperfusion",
    explanation:
      "Neurons, particularly hippocampal CA1 pyramidal cells and cerebellar Purkinje cells, are irreversibly injured within 3–5 minutes because of high metabolic demand and negligible glycogen reserve. Cardiac myocytes tolerate roughly 20–30 minutes, and fibroblasts and skeletal muscle far longer.",
    choices: [
      { text: "Hippocampal neurons", isCorrect: true },
      { text: "Cardiac myocytes" },
      { text: "Proximal renal tubular cells" },
      { text: "Skeletal myocytes" },
      { text: "Dermal fibroblasts" },
    ],
  },
  {
    stem: "Which regions are classically described as watershed areas vulnerable to hypoperfusion? Select all that apply.",
    type: "MULTI",
    topic: "Ischemia & Reperfusion",
    explanation:
      "Watershed zones sit at the border between two arterial territories, where perfusion pressure is lowest: the splenic flexure of the colon, the ACA-MCA cortical border, and the renal outer medulla including the straight segment of the proximal tubule. The gastric fundus and hepatic zone 1 enjoy generous dual or first-pass supply.",
    choices: [
      { text: "Splenic flexure of the colon", isCorrect: true },
      { text: "Cortical border between anterior and middle cerebral artery territories", isCorrect: true },
      { text: "Outer medulla of the kidney", isCorrect: true },
      { text: "Gastric fundus" },
      { text: "Periportal hepatocytes (zone 1)" },
    ],
  },
  {
    stem: "During ischemia, intracellular calcium rises. Which consequence contributes MOST directly to membrane damage?",
    topic: "Ischemia & Reperfusion",
    explanation:
      "Calcium activates phospholipase A2, which cleaves membrane phospholipids and directly degrades the plasma and organelle membranes. Calcium also activates proteases, endonucleases and ATPases, but phospholipase action is the most direct route to membrane failure.",
    choices: [
      { text: "Activation of phospholipases degrading membrane phospholipids", isCorrect: true },
      { text: "Activation of DNA polymerase with hyperreplication" },
      { text: "Inhibition of caspase-9 activity" },
      { text: "Increased synthesis of membrane cholesterol" },
      { text: "Stabilization of the mitochondrial outer membrane" },
    ],
  },
  {
    stem: "A patient is found down after a suspected overdose and has rhabdomyolysis. Creatine kinase is 42,000 U/L and creatinine has risen from 0.9 to 3.4 mg/dL. Which mechanism links muscle necrosis to the kidney injury?",
    topic: "Ischemia & Reperfusion",
    explanation:
      "Myoglobin released from necrotic muscle is filtered, precipitates in tubules and is directly toxic to tubular epithelium, while heme iron drives free radical generation. Direct complement-mediated glomerular injury and urate crystal deposition are not the operative mechanisms here.",
    choices: [
      { text: "Myoglobin cast formation with direct tubular toxicity and heme-iron radical injury", isCorrect: true },
      { text: "Immune complex deposition along the glomerular basement membrane" },
      { text: "Urate crystal precipitation within collecting ducts" },
      { text: "Renal vein thrombosis from muscle-derived tissue factor" },
      { text: "Osmotic nephrosis from filtered creatine kinase" },
    ],
  },
  {
    stem: "True or False: Cells adapted to chronic hypoxia, such as those distal to a slowly narrowing coronary stenosis, tolerate acute ischemia better than unadapted cells.",
    type: "TRUE_FALSE",
    topic: "Ischemia & Reperfusion",
    explanation:
      "True. Ischemic preconditioning and the development of collateral circulation increase tolerance, which is why a gradually occluding vessel often causes less infarction than a sudden thrombotic occlusion of the same artery.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which of the following distinguishes hypoxia from ischemia?",
    topic: "Ischemia & Reperfusion",
    explanation:
      "Ischemia is loss of blood flow, so it removes oxygen AND substrate delivery while allowing metabolic waste to accumulate. Hypoxia alone preserves perfusion, so glycolysis can continue on delivered glucose. That is why ischemia injures tissue faster than equivalent hypoxia.",
    choices: [
      { text: "Ischemia also removes substrate delivery and waste clearance", isCorrect: true },
      { text: "Hypoxia causes more rapid cell death than ischemia" },
      { text: "Hypoxia is always irreversible whereas ischemia is not" },
      { text: "Ischemia spares mitochondrial function entirely" },
      { text: "Hypoxia does not affect oxidative phosphorylation" },
    ],
  },
  {
    stem: "Which intervention has the strongest mechanistic rationale for limiting reperfusion injury?",
    topic: "Ischemia & Reperfusion",
    explanation:
      "Blocking neutrophil adhesion limits the leukocyte-mediated second wave of injury that follows restored flow. Raising inspired oxygen would increase radical generation, and delaying reperfusion increases infarct size — the goal is to reperfuse early and blunt the consequences.",
    choices: [
      { text: "Blocking leukocyte adhesion molecules during reperfusion", isCorrect: true },
      { text: "Delaying reperfusion by several hours" },
      { text: "Administering supraphysiologic inspired oxygen" },
      { text: "Increasing intracellular calcium loading before reflow" },
      { text: "Inhibiting superoxide dismutase activity" },
    ],
  },

  /* ══════════════ FREE RADICAL INJURY ══════════════ */
  {
    stem: "Which reaction generates the highly destructive hydroxyl radical from hydrogen peroxide in the presence of ferrous iron?",
    topic: "Free Radical Injury",
    explanation:
      "The Fenton reaction converts hydrogen peroxide to the hydroxyl radical using Fe2+, which is why iron overload states amplify oxidative tissue damage. The Haber-Weiss reaction also yields hydroxyl radical but uses superoxide, and dismutation produces hydrogen peroxide rather than consuming it.",
    choices: [
      { text: "The Fenton reaction", isCorrect: true },
      { text: "Superoxide dismutation" },
      { text: "Glutathione peroxidase reduction" },
      { text: "Catalase decomposition" },
      { text: "Myeloperoxidase halogenation" },
    ],
  },
  {
    stem: "Which of the following are endogenous antioxidant defenses? Select all that apply.",
    type: "MULTI",
    topic: "Free Radical Injury",
    explanation:
      "Superoxide dismutase, catalase, glutathione peroxidase and iron-binding proteins such as ferritin and transferrin all limit radical injury. NADPH oxidase and myeloperoxidase are radical-GENERATING enzymes used by phagocytes to kill microbes.",
    choices: [
      { text: "Superoxide dismutase", isCorrect: true },
      { text: "Glutathione peroxidase", isCorrect: true },
      { text: "Ferritin and transferrin sequestering free iron", isCorrect: true },
      { text: "NADPH oxidase" },
      { text: "Myeloperoxidase" },
    ],
  },
  {
    stem: "A 24-year-old woman ingests a large quantity of acetaminophen. Which mechanism accounts for the hepatocellular necrosis that follows?",
    topic: "Free Radical Injury",
    explanation:
      "Cytochrome P450 converts acetaminophen to NAPQI, which depletes glutathione and then binds covalently to hepatocyte proteins, producing centrilobular necrosis. N-acetylcysteine works by replenishing glutathione stores. Direct mitochondrial uncoupling and immune-mediated injury are not the primary mechanisms.",
    choices: [
      { text: "P450-generated NAPQI depleting glutathione and binding proteins", isCorrect: true },
      { text: "Direct uncoupling of oxidative phosphorylation by the parent drug" },
      { text: "Immune complex deposition within sinusoids" },
      { text: "Competitive inhibition of hepatic fatty acid oxidation" },
      { text: "Osmotic swelling from unmetabolized drug accumulation" },
    ],
  },
  {
    stem: "Why is centrilobular (zone 3) hepatocyte necrosis characteristic of both acetaminophen toxicity and ischemic hepatitis?",
    topic: "Free Radical Injury",
    explanation:
      "Zone 3 sits farthest from the portal triad, so it receives the least-oxygenated blood, and it carries the highest concentration of cytochrome P450. That combination makes it simultaneously the most hypoxia-prone and the most efficient at generating toxic metabolites.",
    choices: [
      { text: "Zone 3 is least oxygenated and richest in cytochrome P450", isCorrect: true },
      { text: "Zone 3 receives the highest oxygen tension in the lobule" },
      { text: "Zone 3 hepatocytes lack mitochondria" },
      { text: "Zone 1 is protected by a complete lack of blood supply" },
      { text: "Zone 3 has the greatest glutathione reserve of the lobule" },
    ],
  },
  {
    stem: "Free radical damage to lipids produces which measurable product?",
    topic: "Free Radical Injury",
    explanation:
      "Lipid peroxidation generates malondialdehyde, a widely used marker of oxidative stress. Carbonyl adducts reflect protein oxidation and 8-oxo-guanine reflects DNA oxidation — each maps to a different macromolecule.",
    choices: [
      { text: "Malondialdehyde", isCorrect: true },
      { text: "8-oxo-deoxyguanosine" },
      { text: "Protein carbonyl adducts" },
      { text: "Lipofuscin granules" },
      { text: "Advanced glycation end products" },
    ],
  },
  {
    stem: "True or False: Reactive oxygen species are exclusively harmful and serve no physiologic role.",
    type: "TRUE_FALSE",
    topic: "Free Radical Injury",
    explanation:
      "False. Phagocytes deliberately generate superoxide and hypochlorite through the respiratory burst to kill ingested organisms, and ROS also serve as intracellular signaling molecules. Chronic granulomatous disease demonstrates what happens when that capacity is lost.",
    choices: [{ text: "True" }, { text: "False", isCorrect: true }],
  },
  {
    stem: "A 4-year-old boy has recurrent infections with catalase-positive organisms. Neutrophil dihydrorhodamine testing is abnormal. Which enzyme is deficient?",
    topic: "Free Radical Injury",
    explanation:
      "Chronic granulomatous disease results from NADPH oxidase deficiency, so neutrophils cannot mount a respiratory burst. Catalase-positive organisms are especially dangerous because they destroy their own hydrogen peroxide, denying the host a borrowed substrate. Myeloperoxidase deficiency is usually far milder.",
    choices: [
      { text: "NADPH oxidase", isCorrect: true },
      { text: "Myeloperoxidase" },
      { text: "Glucose-6-phosphate dehydrogenase" },
      { text: "Superoxide dismutase" },
      { text: "Catalase" },
    ],
  },
  {
    stem: "Which mechanisms terminate free radical reactions in vivo? Select all that apply.",
    type: "MULTI",
    topic: "Free Radical Injury",
    explanation:
      "Radicals decay spontaneously, are scavenged by vitamins E, A and C and by glutathione, are dismutated or degraded by enzymes, and are limited by sequestration of transition metals. Increasing free iron would accelerate rather than terminate radical chains.",
    choices: [
      { text: "Scavenging by vitamin E and glutathione", isCorrect: true },
      { text: "Enzymatic breakdown by catalase and superoxide dismutase", isCorrect: true },
      { text: "Binding of free iron and copper by storage proteins", isCorrect: true },
      { text: "Increasing the pool of free ferrous iron" },
      { text: "Upregulating NADPH oxidase activity" },
    ],
  },

  /* ══════════════ APOPTOSIS ══════════════ */
  {
    stem: "Which morphologic feature most reliably distinguishes apoptosis from necrosis on light microscopy?",
    topic: "Apoptosis",
    explanation:
      "Apoptotic cells shrink, become intensely eosinophilic, and fragment into membrane-bound bodies without surrounding inflammation. Necrosis shows swelling, membrane rupture and an inflammatory infiltrate. Absence of inflammation is the single most useful discriminator at low power.",
    choices: [
      { text: "Cell shrinkage with fragmentation and no surrounding inflammation", isCorrect: true },
      { text: "Cell swelling with neutrophilic infiltration" },
      { text: "Preservation of tissue architecture with ghost outlines" },
      { text: "Deposition of calcium soaps in adjacent fat" },
      { text: "Bright eosinophilic material within vessel walls" },
    ],
  },
  {
    stem: "Cytochrome c release from mitochondria initiates which pathway, and which protein does it directly activate?",
    topic: "Apoptosis",
    explanation:
      "Cytochrome c release marks the intrinsic (mitochondrial) pathway; it binds APAF-1 to form the apoptosome, which activates caspase-9. Caspase-8 belongs to the extrinsic death-receptor pathway, and caspase-3 is the executioner activated downstream of both.",
    choices: [
      { text: "Intrinsic pathway — caspase-9 via APAF-1", isCorrect: true },
      { text: "Extrinsic pathway — caspase-8 via FADD" },
      { text: "Intrinsic pathway — caspase-8 via TRADD" },
      { text: "Extrinsic pathway — caspase-9 via APAF-1" },
      { text: "Perforin-granzyme pathway — caspase-1" },
    ],
  },
  {
    stem: "Which of the following are pro-apoptotic? Select all that apply.",
    type: "MULTI",
    topic: "Apoptosis",
    explanation:
      "BAX, BAK, BAD, BIM and p53 all promote apoptosis, largely by permeabilizing the mitochondrial outer membrane. BCL-2 and BCL-XL are anti-apoptotic and act by sequestering the pro-apoptotic effectors.",
    choices: [
      { text: "BAX", isCorrect: true },
      { text: "BAK", isCorrect: true },
      { text: "p53", isCorrect: true },
      { text: "BCL-2" },
      { text: "BCL-XL" },
    ],
  },
  {
    stem: "A follicular lymphoma carries a t(14;18) translocation. What is the functional consequence?",
    topic: "Apoptosis",
    explanation:
      "The translocation places BCL-2 under the immunoglobulin heavy chain promoter, causing overexpression of an anti-apoptotic protein. The neoplastic B cells accumulate because they fail to die, not because they proliferate rapidly — a distinction that explains the indolent clinical course.",
    choices: [
      { text: "BCL-2 overexpression with failure of apoptosis", isCorrect: true },
      { text: "BAX overexpression with excessive apoptosis" },
      { text: "Loss of p53 with unchecked DNA damage" },
      { text: "Constitutive activation of caspase-3" },
      { text: "Deletion of the FAS death receptor" },
    ],
  },
  {
    stem: "Which signal on the surface of an apoptotic cell marks it for phagocytosis?",
    topic: "Apoptosis",
    explanation:
      "Phosphatidylserine flips from the inner to the outer leaflet of the plasma membrane and is recognized by macrophage receptors — the basis of the annexin V assay. Its externalization also explains why apoptosis is silent: the cell is removed before its contents spill.",
    choices: [
      { text: "Externalized phosphatidylserine", isCorrect: true },
      { text: "Surface-expressed cytochrome c" },
      { text: "Membrane-bound caspase-3" },
      { text: "Loss of all surface glycoproteins" },
      { text: "Externalized cardiolipin from the inner mitochondrial membrane" },
    ],
  },
  {
    stem: "True or False: The extrinsic apoptotic pathway is triggered by FAS ligand binding to FAS (CD95).",
    type: "TRUE_FALSE",
    topic: "Apoptosis",
    explanation:
      "True. FASL–FAS engagement recruits FADD, which activates caspase-8 and then the executioner caspases. TNF binding TNFR1 works analogously. Defects in this pathway underlie autoimmune lymphoproliferative syndrome.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "A cytotoxic T lymphocyte kills a virus-infected cell. Which mechanism directly activates caspases within the target?",
    topic: "Apoptosis",
    explanation:
      "Granzyme B delivered through perforin pores cleaves and activates caspases directly inside the target cell. Perforin alone forms the pore; it does not itself activate caspases. Antibody-mediated complement lysis produces necrosis rather than apoptosis.",
    choices: [
      { text: "Granzyme B entering via perforin pores", isCorrect: true },
      { text: "Perforin alone causing osmotic lysis" },
      { text: "Complement membrane attack complex formation" },
      { text: "Interferon-gamma inhibiting viral replication" },
      { text: "Antibody-dependent neutrophil degranulation" },
    ],
  },
  {
    stem: "Which of the following are physiologic examples of apoptosis? Select all that apply.",
    type: "MULTI",
    topic: "Apoptosis",
    explanation:
      "Interdigital web involution, endometrial shedding, negative selection of autoreactive thymocytes and postlactational breast involution are all programmed. Neutrophil killing of bacteria and myocardial infarction represent inflammation and necrosis respectively.",
    choices: [
      { text: "Loss of interdigital webs during limb development", isCorrect: true },
      { text: "Endometrial shedding during menstruation", isCorrect: true },
      { text: "Deletion of self-reactive thymocytes", isCorrect: true },
      { text: "Myocardial cell death after coronary occlusion" },
      { text: "Bacterial killing within a neutrophil phagolysosome" },
    ],
  },
  {
    stem: "DNA laddering on gel electrophoresis of a dying cell population indicates which process?",
    topic: "Apoptosis",
    explanation:
      "Endonucleases cleave DNA between nucleosomes, producing fragments in multiples of roughly 180 base pairs — the characteristic ladder of apoptosis. Necrosis produces random degradation seen as a smear rather than discrete bands.",
    choices: [
      { text: "Apoptosis with internucleosomal DNA cleavage", isCorrect: true },
      { text: "Necrosis with random DNA degradation" },
      { text: "Autophagy with lysosomal sequestration" },
      { text: "Mitotic catastrophe with chromosome bridging" },
      { text: "Senescence with telomere shortening" },
    ],
  },
  {
    stem: "p53 detects irreparable DNA damage. Which sequence of events follows?",
    topic: "Apoptosis",
    explanation:
      "p53 arrests the cell in G1 to permit repair, and when damage is beyond repair it transactivates BAX and other pro-apoptotic genes, driving the intrinsic pathway. Loss of p53 is the commonest genetic abnormality in human cancer precisely because both arms fail together.",
    choices: [
      { text: "G1 arrest, attempted repair, then BAX-mediated intrinsic apoptosis", isCorrect: true },
      { text: "Direct activation of caspase-8 through FADD" },
      { text: "Immediate mitotic entry to dilute the damage" },
      { text: "Upregulation of BCL-2 to protect the cell" },
      { text: "Induction of autophagy with complete DNA recycling" },
    ],
  },

  /* ══════════════ HYPERTROPHY & HYPERPLASIA ══════════════ */
  {
    stem: "A 55-year-old man with untreated hypertension has a left ventricular wall thickness of 16 mm. Which adaptation has occurred, and why does this cell type use it?",
    topic: "Hypertrophy & Hyperplasia",
    explanation:
      "Cardiac myocytes are permanent cells that cannot divide, so they respond to increased load only by hypertrophy — increased cell size through added sarcomeres. Hyperplasia is impossible in permanent tissue, which is also why myocardial infarcts heal by scar rather than regeneration.",
    choices: [
      { text: "Hypertrophy, because cardiac myocytes are permanent cells", isCorrect: true },
      { text: "Hyperplasia, because myocytes divide readily under stress" },
      { text: "Metaplasia to skeletal muscle phenotype" },
      { text: "Dysplasia with disordered myocyte maturation" },
      { text: "Hypertrophy with concurrent myocyte hyperplasia" },
    ],
  },
  {
    stem: "Which of the following are examples of physiologic hyperplasia? Select all that apply.",
    type: "MULTI",
    topic: "Hypertrophy & Hyperplasia",
    explanation:
      "Breast proliferation in pregnancy, endometrial growth under estrogen, and hepatocyte proliferation after partial hepatectomy are all physiologic and self-limited. Endometrial hyperplasia from unopposed estrogen and prostatic hyperplasia are pathologic, the former carrying real malignant potential.",
    choices: [
      { text: "Breast glandular proliferation during pregnancy", isCorrect: true },
      { text: "Endometrial proliferation during the follicular phase", isCorrect: true },
      { text: "Hepatocyte proliferation after partial hepatectomy", isCorrect: true },
      { text: "Endometrial hyperplasia from unopposed estrogen therapy" },
      { text: "Benign prostatic hyperplasia in a 70-year-old man" },
    ],
  },
  {
    stem: "A bodybuilder's skeletal muscle enlarges with resistance training. Which molecular change underlies this?",
    topic: "Hypertrophy & Hyperplasia",
    explanation:
      "Mechanical load activates signaling that increases synthesis of contractile proteins and assembly of additional sarcomeres within existing fibers. Satellite cells contribute nuclei but the dominant change is increased protein synthesis per fiber, not an increase in fiber number.",
    choices: [
      { text: "Increased synthesis of contractile proteins with new sarcomere assembly", isCorrect: true },
      { text: "Division of mature myofibers into daughter fibers" },
      { text: "Conversion of fibroblasts into myocytes" },
      { text: "Accumulation of intracellular water within fibers" },
      { text: "Deposition of glycogen replacing myofibrils" },
    ],
  },
  {
    stem: "True or False: Hyperplasia and hypertrophy can occur simultaneously in the same organ.",
    type: "TRUE_FALSE",
    topic: "Hypertrophy & Hyperplasia",
    explanation:
      "True. The pregnant uterus is the classic example: smooth muscle cells both enlarge and increase in number under estrogen stimulation. Labile and stable tissues can use both mechanisms; only permanent tissues are restricted to hypertrophy alone.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which stimulus drives the pathologic hyperplasia seen in benign prostatic hyperplasia?",
    topic: "Hypertrophy & Hyperplasia",
    explanation:
      "Dihydrotestosterone, produced from testosterone by 5-alpha-reductase, drives stromal and glandular proliferation in the transition zone. This is why 5-alpha-reductase inhibitors such as finasteride reduce prostate volume. Estrogen has a permissive role but is not the principal driver.",
    choices: [
      { text: "Dihydrotestosterone acting on the transition zone", isCorrect: true },
      { text: "Luteinizing hormone acting directly on prostatic glands" },
      { text: "Prolactin from a pituitary adenoma" },
      { text: "Insulin-like growth factor deficiency" },
      { text: "Chronic bacterial prostatitis with scarring" },
    ],
  },
  {
    stem: "After unilateral nephrectomy, the remaining kidney enlarges. Which combination of processes accounts for this?",
    topic: "Hypertrophy & Hyperplasia",
    explanation:
      "Compensatory renal enlargement in the adult is predominantly hypertrophy of existing nephrons, with limited tubular cell hyperplasia; no new nephrons form after birth. Expecting substantial new nephron formation misreads the regenerative capacity of the adult kidney.",
    choices: [
      { text: "Hypertrophy of existing nephrons with limited tubular hyperplasia", isCorrect: true },
      { text: "Formation of large numbers of new nephrons" },
      { text: "Metaplasia of tubular to glomerular epithelium" },
      { text: "Interstitial edema without cellular change" },
      { text: "Fatty replacement of the renal sinus" },
    ],
  },
  {
    stem: "Which tissue type is best described as 'stable,' entering the cell cycle only when stimulated?",
    topic: "Hypertrophy & Hyperplasia",
    explanation:
      "Hepatocytes are quiescent in G0 but re-enter the cycle vigorously after injury or resection — the definition of a stable tissue. Intestinal crypt and epidermal basal cells are labile and divide continuously; neurons and cardiac myocytes are permanent.",
    choices: [
      { text: "Hepatocytes", isCorrect: true },
      { text: "Intestinal crypt cells" },
      { text: "Epidermal basal keratinocytes" },
      { text: "Cardiac myocytes" },
      { text: "Cerebral cortical neurons" },
    ],
  },
  {
    stem: "Which of the following are true of pathologic hypertrophy of the left ventricle? Select all that apply.",
    type: "MULTI",
    topic: "Hypertrophy & Hyperplasia",
    explanation:
      "Pathologic hypertrophy increases oxygen demand while capillary density fails to keep pace, re-expresses fetal gene programs such as beta-myosin heavy chain and ANP, and eventually decompensates to dilation and failure. It does not improve diastolic compliance — stiffness worsens — and it is not accompanied by myocyte division.",
    choices: [
      { text: "Oxygen demand rises faster than capillary supply", isCorrect: true },
      { text: "Fetal gene programs are re-expressed", isCorrect: true },
      { text: "It may progress to dilation and heart failure", isCorrect: true },
      { text: "Diastolic compliance improves" },
      { text: "Myocyte number increases substantially" },
    ],
  },

  /* ══════════════ ATROPHY & AUTOPHAGY ══════════════ */
  {
    stem: "A patient's leg is immobilized in a cast for 8 weeks. The calf muscle is visibly smaller. Which proteolytic system is chiefly responsible?",
    topic: "Atrophy & Autophagy",
    explanation:
      "Disuse atrophy proceeds mainly through the ubiquitin-proteasome pathway, which tags and degrades cytoskeletal and contractile proteins. Autophagy contributes but is secondary. Caspase-mediated apoptosis would reduce fiber number rather than fiber size.",
    choices: [
      { text: "Ubiquitin-proteasome degradation of contractile proteins", isCorrect: true },
      { text: "Caspase-3 mediated apoptosis of all fibers" },
      { text: "Complement-mediated lysis of myocytes" },
      { text: "Extracellular matrix metalloproteinase digestion" },
      { text: "Osmotic shrinkage from sodium loss" },
    ],
  },
  {
    stem: "Which of the following are recognized causes of atrophy? Select all that apply.",
    type: "MULTI",
    topic: "Atrophy & Autophagy",
    explanation:
      "Reduced workload, loss of innervation, diminished blood supply, inadequate nutrition and loss of trophic hormonal stimulation all cause atrophy. Chronic mechanical overload causes hypertrophy, and persistent irritation of a mucosal surface typically causes metaplasia.",
    choices: [
      { text: "Denervation after peripheral nerve transection", isCorrect: true },
      { text: "Chronic ischemia from arterial narrowing", isCorrect: true },
      { text: "Loss of estrogen stimulation after menopause", isCorrect: true },
      { text: "Sustained pressure overload on the ventricle" },
      { text: "Chronic acid reflux onto squamous mucosa" },
    ],
  },
  {
    stem: "During starvation, cells sequester organelles within double-membraned vesicles for lysosomal degradation. What is this process called, and what is its principal purpose?",
    topic: "Atrophy & Autophagy",
    explanation:
      "Autophagy recycles the cell's own components to supply amino acids and fatty acids for survival during nutrient deprivation. It is a survival mechanism first; only when overwhelmed does it contribute to cell death. Phagocytosis involves ingestion of external material.",
    choices: [
      { text: "Autophagy — recycling components to sustain metabolism", isCorrect: true },
      { text: "Phagocytosis — ingestion of extracellular debris" },
      { text: "Pinocytosis — nonspecific fluid uptake" },
      { text: "Apoptosis — programmed dismantling of the cell" },
      { text: "Necroptosis — regulated inflammatory cell death" },
    ],
  },
  {
    stem: "True or False: Atrophic cells are dead cells.",
    type: "TRUE_FALSE",
    topic: "Atrophy & Autophagy",
    explanation:
      "False. Atrophic cells are alive but have reduced their size and metabolic demand to match a diminished supply or workload. They retain the capacity to regrow if the stimulus returns, which is why muscle recovers after a cast is removed.",
    choices: [{ text: "True" }, { text: "False", isCorrect: true }],
  },
  {
    stem: "An elderly patient's brain shows narrowed gyri and widened sulci. Which change accounts for the appearance?",
    topic: "Atrophy & Autophagy",
    explanation:
      "Senile cerebral atrophy reflects loss of neuronal volume and processes with reduced neuropil, producing shrunken gyri and compensatory ventricular and sulcal enlargement. Hydrocephalus with raised pressure would compress rather than widen the sulci.",
    choices: [
      { text: "Reduced neuronal size and neuropil volume", isCorrect: true },
      { text: "Obstructive hydrocephalus with raised intracranial pressure" },
      { text: "Diffuse cerebral edema" },
      { text: "Neuronal hyperplasia with cortical thickening" },
      { text: "Meningeal fibrosis compressing the cortex" },
    ],
  },
  {
    stem: "Which residual pigment accumulates in atrophic cardiac myocytes and hepatocytes of elderly patients, giving 'brown atrophy'?",
    topic: "Atrophy & Autophagy",
    explanation:
      "Lipofuscin is the undigested polymer of peroxidized lipid within residual bodies — a wear-and-tear pigment that is a marker of prior free radical injury rather than a cause of harm. Hemosiderin is iron-derived and melanin is produced by melanocytes.",
    choices: [
      { text: "Lipofuscin", isCorrect: true },
      { text: "Hemosiderin" },
      { text: "Melanin" },
      { text: "Bilirubin" },
      { text: "Anthracotic carbon" },
    ],
  },

  /* ══════════════ METAPLASIA & DYSPLASIA ══════════════ */
  {
    stem: "A 49-year-old man with 12 years of heartburn undergoes endoscopy. Biopsy of the distal esophagus shows intestinal-type columnar epithelium with goblet cells. What has occurred?",
    topic: "Metaplasia & Dysplasia",
    explanation:
      "Barrett esophagus is metaplasia of stratified squamous to intestinal columnar epithelium, an adaptive response to chronic acid exposure that trades one differentiated cell type for a more resilient one. It carries increased risk of adenocarcinoma, but metaplasia alone is not dysplasia and not malignant.",
    choices: [
      { text: "Metaplasia from squamous to intestinal columnar epithelium", isCorrect: true },
      { text: "Dysplasia with loss of nuclear polarity" },
      { text: "Carcinoma in situ confined by the basement membrane" },
      { text: "Hyperplasia of native squamous epithelium" },
      { text: "Atrophy of the esophageal mucosa" },
    ],
  },
  {
    stem: "A long-term smoker's bronchial biopsy shows stratified squamous epithelium replacing ciliated pseudostratified columnar epithelium. What is the most important functional consequence?",
    topic: "Metaplasia & Dysplasia",
    explanation:
      "Loss of cilia and mucus-secreting cells abolishes the mucociliary escalator, impairing clearance and predisposing to infection. The metaplastic epithelium is more durable against smoke but functionally inferior — the trade-off that defines metaplasia.",
    choices: [
      { text: "Loss of mucociliary clearance with increased infection risk", isCorrect: true },
      { text: "Increased surfactant production by the airway" },
      { text: "Improved gas exchange across the bronchial wall" },
      { text: "Enhanced ciliary beat frequency" },
      { text: "Reduced risk of subsequent malignancy" },
    ],
  },
  {
    stem: "Which of the following statements about dysplasia are correct? Select all that apply.",
    type: "MULTI",
    topic: "Metaplasia & Dysplasia",
    explanation:
      "Dysplasia features loss of uniformity, nuclear enlargement and hyperchromasia, increased mitotic figures including above the basal layer, and loss of architectural orientation. It is potentially reversible if the inciting stimulus is removed, and it does not by definition breach the basement membrane — that would be invasive carcinoma.",
    choices: [
      { text: "Nuclear enlargement with hyperchromasia and pleomorphism", isCorrect: true },
      { text: "Mitotic figures appearing above the basal layer", isCorrect: true },
      { text: "It may regress if the inciting stimulus is removed", isCorrect: true },
      { text: "Invasion through the basement membrane is required" },
      { text: "It is by definition irreversible" },
    ],
  },
  {
    stem: "A cervical biopsy shows full-thickness atypia of the squamous epithelium with an intact basement membrane. Which term applies?",
    topic: "Metaplasia & Dysplasia",
    explanation:
      "Full-thickness dysplasia with an intact basement membrane is carcinoma in situ. Once the basement membrane is breached the lesion becomes invasive carcinoma with metastatic potential — the single most consequential distinction in the sequence.",
    choices: [
      { text: "Carcinoma in situ", isCorrect: true },
      { text: "Mild dysplasia" },
      { text: "Invasive squamous cell carcinoma" },
      { text: "Squamous metaplasia" },
      { text: "Reactive atypia" },
    ],
  },
  {
    stem: "True or False: Metaplasia is a direct transformation of one mature differentiated cell into another mature cell type.",
    type: "TRUE_FALSE",
    topic: "Metaplasia & Dysplasia",
    explanation:
      "False. Mature cells do not transdifferentiate. Metaplasia arises from reprogramming of local stem or reserve cells, which then differentiate along a new lineage. The distinction matters because it explains why removing the stimulus can allow the original epithelium to return.",
    choices: [{ text: "True" }, { text: "False", isCorrect: true }],
  },
  {
    stem: "Vitamin A deficiency classically produces which metaplastic change?",
    topic: "Metaplasia & Dysplasia",
    explanation:
      "Retinoic acid is required to maintain columnar and glandular differentiation, so deficiency causes squamous metaplasia of the conjunctiva, respiratory tract and urinary tract. Conjunctival keratinization produces the Bitot spots and xerophthalmia of deficiency.",
    choices: [
      { text: "Squamous metaplasia of conjunctival and respiratory epithelium", isCorrect: true },
      { text: "Intestinal metaplasia of gastric mucosa" },
      { text: "Osseous metaplasia of skeletal muscle" },
      { text: "Columnar metaplasia of epidermis" },
      { text: "Transitional metaplasia of alveolar lining" },
    ],
  },
  {
    stem: "Chronic Helicobacter pylori gastritis leads to intestinal metaplasia of gastric mucosa. What is the principal clinical significance?",
    topic: "Metaplasia & Dysplasia",
    explanation:
      "Intestinal metaplasia is a recognized precursor lesion in the pathway toward gastric adenocarcinoma of intestinal type, which is why it prompts surveillance. It does not reduce cancer risk, and it is a mucosal change rather than a cause of perforation.",
    choices: [
      { text: "It is a precursor lesion for gastric adenocarcinoma", isCorrect: true },
      { text: "It confers protection against gastric malignancy" },
      { text: "It predicts imminent gastric perforation" },
      { text: "It indicates resolution of the infection" },
      { text: "It is diagnostic of MALT lymphoma" },
    ],
  },
  {
    stem: "Which sequence correctly orders the progression toward invasive carcinoma in a chronically irritated epithelium?",
    topic: "Metaplasia & Dysplasia",
    explanation:
      "Chronic irritation drives metaplasia, which under continued injury may progress through dysplasia to carcinoma in situ and then invasive carcinoma. Placing dysplasia before metaplasia inverts the adaptive-then-disordered logic of the sequence.",
    choices: [
      { text: "Metaplasia → dysplasia → carcinoma in situ → invasive carcinoma", isCorrect: true },
      { text: "Dysplasia → metaplasia → carcinoma in situ → invasive carcinoma" },
      { text: "Hyperplasia → atrophy → dysplasia → invasive carcinoma" },
      { text: "Metaplasia → carcinoma in situ → dysplasia → invasive carcinoma" },
      { text: "Atrophy → metaplasia → invasive carcinoma → carcinoma in situ" },
    ],
  },

  /* ══════════════ INTRACELLULAR ACCUMULATIONS ══════════════ */
  {
    stem: "A 45-year-old man with a BMI of 38 has hepatomegaly. Biopsy shows large clear cytoplasmic vacuoles displacing hepatocyte nuclei to the periphery. Which substance has accumulated?",
    topic: "Intracellular Accumulations",
    explanation:
      "Macrovesicular steatosis reflects triglyceride accumulation, which dissolves during routine processing to leave clear vacuoles that push the nucleus aside. Glycogen accumulation produces a paler, more finely granular cytoplasm with centrally placed nuclei.",
    choices: [
      { text: "Triglyceride", isCorrect: true },
      { text: "Glycogen" },
      { text: "Cholesterol ester" },
      { text: "Alpha-1 antitrypsin polymer" },
      { text: "Hemosiderin" },
    ],
  },
  {
    stem: "A patient with hereditary hemochromatosis has iron deposition in the liver, pancreas and heart. Which stain confirms the pigment, and what color is the reaction?",
    topic: "Intracellular Accumulations",
    explanation:
      "Prussian blue (Perls) stain turns hemosiderin blue, confirming iron. Congo red identifies amyloid with apple-green birefringence, and PAS highlights glycogen and certain glycoproteins — each answers a different question.",
    choices: [
      { text: "Prussian blue — blue", isCorrect: true },
      { text: "Congo red — apple-green birefringence" },
      { text: "Periodic acid-Schiff — magenta" },
      { text: "Oil red O — red" },
      { text: "Masson trichrome — blue collagen" },
    ],
  },
  {
    stem: "Which of the following pairings of accumulated substance and mechanism are correct? Select all that apply.",
    type: "MULTI",
    topic: "Intracellular Accumulations",
    explanation:
      "Fatty liver reflects a metabolic derangement in triglyceride handling; alpha-1 antitrypsin deficiency reflects a folding defect causing ER retention; lysosomal storage diseases reflect absent catabolic enzymes; anthracosis reflects an indigestible exogenous pigment. Lipofuscin is not a defect of secretion but a residue of lipid peroxidation.",
    choices: [
      { text: "Hepatic steatosis — abnormal triglyceride metabolism", isCorrect: true },
      { text: "Alpha-1 antitrypsin globules — defective protein folding and export", isCorrect: true },
      { text: "Tay-Sachs ganglioside — deficient lysosomal enzyme", isCorrect: true },
      { text: "Anthracotic pigment — deficient lysosomal enzyme" },
      { text: "Lipofuscin — failure of protein secretion" },
    ],
  },
  {
    stem: "PAS-positive, diastase-resistant globules are found in periportal hepatocytes of a 40-year-old man with early-onset emphysema. What is the diagnosis?",
    topic: "Intracellular Accumulations",
    explanation:
      "Alpha-1 antitrypsin deficiency causes misfolded protein to accumulate in the hepatocyte ER as PAS-positive, diastase-resistant globules, while unopposed neutrophil elastase destroys alveolar walls. Diastase resistance excludes glycogen, which would be digested by the enzyme.",
    choices: [
      { text: "Alpha-1 antitrypsin deficiency", isCorrect: true },
      { text: "Glycogen storage disease type I" },
      { text: "Wilson disease" },
      { text: "Hereditary hemochromatosis" },
      { text: "Nonalcoholic steatohepatitis" },
    ],
  },
  {
    stem: "True or False: Anthracosis in the lungs of an urban dweller is generally harmless.",
    type: "TRUE_FALSE",
    topic: "Intracellular Accumulations",
    explanation:
      "True. Carbon pigment phagocytosed by alveolar macrophages accumulates without provoking a fibrotic reaction in ordinary urban exposure. Heavy occupational exposure, as in coal workers, is different and can produce progressive massive fibrosis.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "A patient with a hematoma shows color change from purple to green to yellow-brown over two weeks. Which sequence of pigment breakdown explains this?",
    topic: "Intracellular Accumulations",
    explanation:
      "Hemoglobin is degraded to biliverdin, which is green, then to bilirubin, which is yellow, and residual iron is stored as golden-brown hemosiderin. Melanin plays no part in bruise evolution.",
    choices: [
      { text: "Hemoglobin → biliverdin → bilirubin → hemosiderin", isCorrect: true },
      { text: "Hemoglobin → melanin → lipofuscin → hemosiderin" },
      { text: "Bilirubin → biliverdin → hemoglobin → ferritin" },
      { text: "Hemosiderin → bilirubin → biliverdin → hemoglobin" },
      { text: "Myoglobin → melanin → biliverdin → bilirubin" },
    ],
  },
  {
    stem: "Which accumulation is characteristic of Wilson disease, and in which structures does it produce a visible clinical sign?",
    topic: "Intracellular Accumulations",
    explanation:
      "Copper accumulates because biliary excretion fails; deposition in Descemet membrane of the cornea produces Kayser-Fleischer rings, and basal ganglia deposition produces movement disorder. Iron deposition in the cornea would not produce this ring, and ceruloplasmin is characteristically low rather than accumulated.",
    choices: [
      { text: "Copper — Kayser-Fleischer rings in Descemet membrane", isCorrect: true },
      { text: "Iron — Kayser-Fleischer rings in the lens" },
      { text: "Ceruloplasmin — corneal arcus" },
      { text: "Cholesterol — xanthelasma of the eyelids" },
      { text: "Melanin — conjunctival pigmentation" },
    ],
  },
  {
    stem: "Foam cells in an atherosclerotic plaque are macrophages engorged with which substance?",
    topic: "Intracellular Accumulations",
    explanation:
      "Macrophages take up oxidized LDL through scavenger receptors and accumulate cholesterol esters, producing the foamy cytoplasm that defines the fatty streak. Triglyceride accumulation characterizes hepatic steatosis, not plaque foam cells.",
    choices: [
      { text: "Cholesterol esters from oxidized LDL", isCorrect: true },
      { text: "Triglyceride from circulating chylomicrons" },
      { text: "Glycogen from insulin stimulation" },
      { text: "Hemosiderin from prior hemorrhage" },
      { text: "Immunoglobulin light chains" },
    ],
  },

  /* ══════════════ PATHOLOGIC CALCIFICATION ══════════════ */
  {
    stem: "A 68-year-old woman has a calcified aortic valve. Serum calcium is 9.4 mg/dL and phosphorus 3.5 mg/dL. Which type of calcification is this?",
    topic: "Pathologic Calcification",
    explanation:
      "Dystrophic calcification occurs in damaged or degenerating tissue despite normal serum calcium — as in aging or bicuspid aortic valves. Metastatic calcification requires hypercalcemia and deposits in otherwise normal tissue, which the normal chemistry here excludes.",
    choices: [
      { text: "Dystrophic calcification", isCorrect: true },
      { text: "Metastatic calcification" },
      { text: "Heterotopic ossification" },
      { text: "Amyloid deposition" },
      { text: "Hyaline arteriolosclerosis" },
    ],
  },
  {
    stem: "Which of the following cause metastatic calcification? Select all that apply.",
    type: "MULTI",
    topic: "Pathologic Calcification",
    explanation:
      "Metastatic calcification follows hypercalcemia from primary hyperparathyroidism, PTH-related peptide secreted by tumors, extensive bone destruction by metastases or myeloma, and vitamin D excess. Chronic valve degeneration and old tuberculous granulomas calcify dystrophically at normal serum calcium.",
    choices: [
      { text: "Primary hyperparathyroidism", isCorrect: true },
      { text: "Squamous cell carcinoma secreting PTH-related peptide", isCorrect: true },
      { text: "Multiple myeloma with extensive bone destruction", isCorrect: true },
      { text: "A healed tuberculous granuloma" },
      { text: "Degenerative calcific aortic stenosis" },
    ],
  },
  {
    stem: "Metastatic calcification shows a predilection for which tissues, and why?",
    topic: "Pathologic Calcification",
    explanation:
      "Gastric mucosa, kidney, lung and systemic arteries all lose acid or otherwise maintain a relatively alkaline internal environment, which favors calcium salt precipitation. Skeletal muscle and subcutaneous fat are not preferentially involved.",
    choices: [
      { text: "Gastric mucosa, kidneys and lungs, because of their relative alkalinity", isCorrect: true },
      { text: "Skeletal muscle, because of its high metabolic rate" },
      { text: "Subcutaneous fat, because of low vascularity" },
      { text: "Peripheral nerves, because of high lipid content" },
      { text: "Cartilage, because it is avascular" },
    ],
  },
  {
    stem: "Laminated concentric calcified structures found in papillary thyroid carcinoma and serous ovarian tumors are called what?",
    topic: "Pathologic Calcification",
    explanation:
      "Psammoma bodies are concentric lamellated calcifications seen in papillary thyroid carcinoma, serous papillary ovarian tumors, meningioma and mesothelioma. Their presence in an aspirate is a useful diagnostic clue, though not by itself diagnostic of malignancy.",
    choices: [
      { text: "Psammoma bodies", isCorrect: true },
      { text: "Schaumann bodies" },
      { text: "Asteroid bodies" },
      { text: "Mallory bodies" },
      { text: "Councilman bodies" },
    ],
  },
  {
    stem: "True or False: Dystrophic calcification requires an elevated serum calcium level.",
    type: "TRUE_FALSE",
    topic: "Pathologic Calcification",
    explanation:
      "False. Dystrophic calcification occurs in necrotic or damaged tissue at entirely normal serum calcium — it is driven by local tissue conditions, notably membrane phospholipid exposure in dying cells. Only metastatic calcification requires hypercalcemia.",
    choices: [{ text: "True" }, { text: "False", isCorrect: true }],
  },
  {
    stem: "Which local factor initiates dystrophic calcification within necrotic tissue?",
    topic: "Pathologic Calcification",
    explanation:
      "Membrane-derived vesicles from dying cells concentrate calcium via acidic phospholipids and then nucleate hydroxyapatite crystal formation. Circulating calcium levels are irrelevant; it is the exposed phospholipid that provides the nidus.",
    choices: [
      { text: "Membrane vesicles rich in acidic phospholipids nucleating hydroxyapatite", isCorrect: true },
      { text: "Elevated circulating parathyroid hormone" },
      { text: "Systemic vitamin D toxicity" },
      { text: "Local alkalosis from bacterial urease" },
      { text: "Deposition of urate crystals as a nidus" },
    ],
  },

  /* ══════════════ CELLULAR AGING ══════════════ */
  {
    stem: "Which mechanism most directly limits the number of divisions a normal somatic cell can undergo?",
    topic: "Cellular Aging",
    explanation:
      "Progressive telomere shortening with each division eventually triggers a DNA damage response and replicative senescence — the Hayflick limit. Germ cells and most cancers evade this by expressing telomerase, which is why telomerase activity is a near-universal feature of malignancy.",
    choices: [
      { text: "Progressive telomere shortening triggering replicative senescence", isCorrect: true },
      { text: "Exhaustion of mitochondrial DNA copy number" },
      { text: "Depletion of cytoplasmic ribosomes" },
      { text: "Irreversible inactivation of telomerase in germ cells" },
      { text: "Accumulation of lipofuscin blocking mitosis" },
    ],
  },
  {
    stem: "Which of the following contribute to cellular aging? Select all that apply.",
    type: "MULTI",
    topic: "Cellular Aging",
    explanation:
      "Accumulated DNA damage, progressive protein misfolding with declining chaperone and proteasome capacity, mitochondrial dysfunction with rising ROS, and reduced autophagy all drive senescence. Increased telomerase activity and enhanced DNA repair oppose aging rather than cause it.",
    choices: [
      { text: "Accumulated unrepaired DNA damage", isCorrect: true },
      { text: "Declining proteasome and chaperone function", isCorrect: true },
      { text: "Mitochondrial dysfunction with increased reactive oxygen species", isCorrect: true },
      { text: "Increased telomerase expression in somatic cells" },
      { text: "Enhanced nucleotide excision repair capacity" },
    ],
  },
  {
    stem: "Caloric restriction extends lifespan in several model organisms. Which pathway is most implicated?",
    topic: "Cellular Aging",
    explanation:
      "Reduced insulin/IGF-1 signaling with downstream sirtuin activation and mTOR inhibition is the pathway most consistently implicated. Increasing mTOR signaling has the opposite effect, promoting growth and reducing autophagy.",
    choices: [
      { text: "Reduced insulin/IGF-1 signaling with sirtuin activation", isCorrect: true },
      { text: "Increased mTOR signaling with enhanced protein synthesis" },
      { text: "Constitutive activation of NF-kB inflammation" },
      { text: "Telomerase suppression in stem cells" },
      { text: "Increased NADPH oxidase activity" },
    ],
  },
  {
    stem: "Progeria (Hutchinson-Gilford syndrome) results from a defect in which structural protein?",
    topic: "Cellular Aging",
    explanation:
      "Mutation in LMNA produces defective lamin A, destabilizing the nuclear envelope and accelerating senescence. Collagen and elastin defects produce Ehlers-Danlos and cutis laxa phenotypes respectively, not progeria.",
    choices: [
      { text: "Lamin A", isCorrect: true },
      { text: "Type I collagen" },
      { text: "Elastin" },
      { text: "Fibrillin-1" },
      { text: "Keratin 14" },
    ],
  },

  /* ══════════════ INJURY MARKER INTERPRETATION ══════════════ */
  {
    stem: "A 59-year-old man presents 4 hours after chest pain onset. Troponin I is 6.8 ng/mL (reference <0.04), CK-MB 44 ng/mL, and the EKG shows ST elevation in leads II, III and aVF. Which statement best interprets these findings?",
    topic: "Injury Marker Interpretation",
    explanation:
      "Troponin leaks only after the sarcolemma is breached, so its elevation confirms irreversible myocyte injury; the inferior lead distribution localizes it to the right coronary territory in most people. Reversible injury does not release troponin, which is precisely what makes it useful.",
    choices: [
      { text: "Irreversible myocyte injury with loss of membrane integrity, inferior territory", isCorrect: true },
      { text: "Reversible ischemic injury without membrane disruption" },
      { text: "Skeletal muscle injury with cross-reactive assay interference" },
      { text: "Pericarditis without myocardial necrosis" },
      { text: "Chronic kidney disease causing isolated troponin retention" },
    ],
  },
  {
    stem: "A patient presents with jaundice. AST is 980 U/L, ALT 1,240 U/L, alkaline phosphatase 130 U/L, total bilirubin 4.8 mg/dL. Which pattern of injury is indicated?",
    topic: "Injury Marker Interpretation",
    explanation:
      "Transaminases elevated far out of proportion to alkaline phosphatase indicate a hepatocellular rather than cholestatic pattern, consistent with acute hepatocyte necrosis such as viral or toxic hepatitis. A cholestatic picture would show alkaline phosphatase disproportionately raised.",
    choices: [
      { text: "Hepatocellular injury with hepatocyte necrosis", isCorrect: true },
      { text: "Cholestatic injury from biliary obstruction" },
      { text: "Isolated hemolysis without hepatic injury" },
      { text: "Infiltrative liver disease such as amyloidosis" },
      { text: "Gilbert syndrome with impaired conjugation" },
    ],
  },
  {
    stem: "Which enzyme elevations reflect loss of cell membrane integrity rather than altered cell function? Select all that apply.",
    type: "MULTI",
    topic: "Injury Marker Interpretation",
    explanation:
      "Troponin, transaminases, lactate dehydrogenase and creatine kinase are intracellular contents that appear in serum only when membranes fail. Albumin and prothrombin time reflect hepatic synthetic FUNCTION and fall or prolong with impaired synthesis rather than with membrane rupture.",
    choices: [
      { text: "Serum troponin I", isCorrect: true },
      { text: "Serum alanine aminotransferase", isCorrect: true },
      { text: "Serum creatine kinase", isCorrect: true },
      { text: "Serum albumin" },
      { text: "Prothrombin time" },
    ],
  },
  {
    stem: "A patient with an alcohol use disorder has AST 210 U/L and ALT 88 U/L. Which interpretation is best supported?",
    topic: "Injury Marker Interpretation",
    explanation:
      "An AST:ALT ratio above 2 is characteristic of alcohol-related liver injury, reflecting both mitochondrial AST release and pyridoxine deficiency that limits ALT synthesis. Viral hepatitis characteristically shows ALT exceeding AST.",
    choices: [
      { text: "Alcohol-related liver injury, given the AST:ALT ratio above 2", isCorrect: true },
      { text: "Acute hepatitis A infection" },
      { text: "Extrahepatic biliary obstruction" },
      { text: "Acetaminophen toxicity in the first 12 hours" },
      { text: "Hereditary hemochromatosis with iron overload" },
    ],
  },
];
