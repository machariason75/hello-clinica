/**
 * PATHOLOGY — SET 1 of 7  ·  TIER 1: FOUNDATIONS
 *
 * SIXTY questions. Ten topics, six each. First instalment of the Pathology
 * ladder, following the shape proven in Pharmacology.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * IMPORTANT: THIS SECTION ALREADY HAS CONTENT
 * ─────────────────────────────────────────────────────────────────────────
 *
 * fs-pathology already holds 75 questions in five older 15-question sets
 * (general-pathology-set-1 and 2, neoplasia-set-1 and 2, systemic-pathology-set-1).
 * Every stem in this file was checked against them.
 *
 * Those sets cover their ground at overview level — reversible versus
 * irreversible injury, apoptosis versus necrosis, Virchow's triad, benign versus
 * malignant. This set therefore goes DEEPER on the same territory rather than
 * restating it: the mechanisms underneath those distinctions.
 *
 * So: the old set asks what distinguishes apoptosis from necrosis. This one asks
 * how the intrinsic and extrinsic apoptotic pathways differ and what p53 does
 * when DNA damage is irreparable. No overlap, and a student who has done the
 * older set is not being asked the same thing twice.
 *
 * See START_HERE.md for what happens to those five older sets once this ladder
 * is complete.
 *
 * Non-destructive (uses _seedkit) — a re-run refreshes only what it owns and
 * keeps anything you added through Admin.
 *
 * Run:  npx tsx prisma/seed-pathology-set-1.ts
 */

import { type Q, findCategory, seedSet, done, REPLACE_MODE } from "./_seedkit";

const SET1: Q[] = [
  /* ── Mechanisms of Cell Injury ── */
  {
    stem: "What is the difference between hypoxia and ischaemia, and why does ischaemia cause more damage?",
    topic: "Mechanisms of Cell Injury",
    explanation:
      "Hypoxia is reduced oxygen delivery; ischaemia is reduced blood flow, which removes oxygen AND substrate while allowing metabolites to accumulate. A hypoxic cell can still generate some ATP by glycolysis using delivered glucose; an ischaemic one cannot, which is why ischaemic injury is faster and more severe.",
    choices: [
      { text: "Ischaemia removes substrate as well as oxygen and lets waste accumulate, so glycolysis cannot continue", isCorrect: true },
      { text: "Hypoxia is always the more damaging of the two", isCorrect: false },
      { text: "They are interchangeable terms", isCorrect: false },
      { text: "Ischaemia affects only venous drainage", isCorrect: false },
    ],
  },
  {
    stem: "What is the first major consequence of ATP depletion in an injured cell?",
    topic: "Mechanisms of Cell Injury",
    explanation:
      "Failure of the sodium-potassium ATPase, so sodium and water enter and the cell swells — the earliest morphological change of reversible injury. Cellular swelling therefore reflects a pump that has run out of energy rather than damage to the membrane itself.",
    choices: [
      { text: "The sodium pump fails, so sodium and water enter and the cell swells", isCorrect: true },
      { text: "The nucleus fragments immediately", isCorrect: false },
      { text: "Lysosomes rupture as the first event", isCorrect: false },
      { text: "Protein synthesis increases", isCorrect: false },
    ],
  },
  {
    stem: "How do free radicals damage cells?",
    topic: "Mechanisms of Cell Injury",
    explanation:
      "By lipid peroxidation of membranes, oxidation of proteins, and DNA strand breaks — and because each reaction generates further radicals, the damage is autocatalytic. Glutathione, catalase and superoxide dismutase exist specifically to interrupt that chain.",
    choices: [
      { text: "Lipid peroxidation, protein oxidation and DNA breaks, propagating as a chain reaction", isCorrect: true },
      { text: "By blocking the cell membrane physically", isCorrect: false },
      { text: "By reducing intracellular calcium", isCorrect: false },
      { text: "They cause no cellular damage", isCorrect: false },
    ],
  },
  {
    stem: "Why can restoring blood flow to ischaemic tissue paradoxically worsen the injury?",
    topic: "Mechanisms of Cell Injury",
    explanation:
      "Reperfusion delivers oxygen to cells with damaged mitochondria, generating a burst of reactive oxygen species, while complement activation and neutrophil influx add further damage. It is why reperfusion injury is a recognised entity after thrombolysis, revascularisation and transplantation.",
    choices: [
      { text: "Returning oxygen generates reactive species, with complement and neutrophil-mediated damage", isCorrect: true },
      { text: "Reperfusion always reduces total injury", isCorrect: false },
      { text: "The returning blood is chemically abnormal", isCorrect: false },
      { text: "Reperfusion injury is a theoretical concept only", isCorrect: false },
    ],
  },
  {
    stem: "Why is a sustained rise in intracellular calcium so damaging?",
    topic: "Mechanisms of Cell Injury",
    explanation:
      "It activates phospholipases that degrade membranes, proteases that break down cytoskeleton, endonucleases that fragment DNA, and ATPases that consume remaining energy. One ion switches on four destructive enzyme families at once, which is why calcium influx marks the transition towards irreversibility.",
    choices: [
      { text: "It activates phospholipases, proteases, endonucleases and ATPases simultaneously", isCorrect: true },
      { text: "It physically precipitates within the cytoplasm", isCorrect: false },
      { text: "It blocks glucose uptake only", isCorrect: false },
      { text: "Raised calcium is protective", isCorrect: false },
    ],
  },
  {
    stem: "What is the significance of mitochondrial permeability transition in cell injury?",
    topic: "Mechanisms of Cell Injury",
    explanation:
      "Formation of a high-conductance pore collapses the mitochondrial membrane potential, so ATP generation stops irreversibly and cytochrome c escapes into the cytosol. It is a point of no return, and the released cytochrome c also triggers apoptosis — linking the two forms of cell death mechanistically.",
    choices: [
      { text: "It collapses ATP generation irreversibly and releases cytochrome c, triggering apoptosis", isCorrect: true },
      { text: "It improves mitochondrial efficiency", isCorrect: false },
      { text: "It is fully reversible in all circumstances", isCorrect: false },
      { text: "It has no relationship to apoptosis", isCorrect: false },
    ],
  },

  /* ── Patterns of Necrosis ── */
  {
    stem: "Why does coagulative necrosis preserve tissue outline for days after infarction?",
    topic: "Patterns of Necrosis",
    explanation:
      "Denaturation of structural proteins outpaces enzymatic digestion, so the architecture persists as a ghost outline while the cells are dead. It is the pattern in most solid organ infarcts, and the reason a myocardial infarct is recognisable microscopically before it has been cleared away.",
    choices: [
      { text: "Protein denaturation outpaces enzymatic digestion, so architecture persists", isCorrect: true },
      { text: "The tissue is not actually dead", isCorrect: false },
      { text: "Enzymes are released faster than proteins denature", isCorrect: false },
      { text: "Fibrosis replaces the tissue instantly", isCorrect: false },
    ],
  },
  {
    stem: "What produces the cheesy appearance of caseous necrosis, and what does it indicate?",
    topic: "Patterns of Necrosis",
    explanation:
      "A mixture of dead cells and lipid-rich mycobacterial cell wall material, giving an amorphous granular debris within a granuloma. It points strongly to tuberculosis, and to some fungal infections — so the pattern itself narrows the differential before any stain is done.",
    choices: [
      { text: "Amorphous lipid-rich debris within a granuloma, pointing to tuberculosis or fungal infection", isCorrect: true },
      { text: "Liquefied tissue from neutrophil enzymes", isCorrect: false },
      { text: "Calcium deposition in dead tissue", isCorrect: false },
      { text: "Fibrin deposition in a vessel wall", isCorrect: false },
    ],
  },
  {
    stem: "Where does fat necrosis characteristically occur, and what causes the appearance?",
    topic: "Patterns of Necrosis",
    explanation:
      "In acute pancreatitis, where released lipases digest peritoneal fat, and after breast trauma. The liberated fatty acids bind calcium to form chalky white deposits — saponification — which is also why calcium falls in severe pancreatitis.",
    choices: [
      { text: "Pancreatitis and breast trauma — lipases release fatty acids that bind calcium", isCorrect: true },
      { text: "In the brain after infarction", isCorrect: false },
      { text: "In tuberculous lymph nodes", isCorrect: false },
      { text: "Only in subcutaneous tissue after burns", isCorrect: false },
    ],
  },
  {
    stem: "What does fibrinoid necrosis in a vessel wall indicate?",
    topic: "Patterns of Necrosis",
    explanation:
      "Immune-mediated vascular damage, with immune complexes and fibrin deposited in the wall giving a bright eosinophilic appearance. It is seen in vasculitis and in malignant hypertension — so the finding directs attention to an immune or severe hypertensive process rather than a local one.",
    choices: [
      { text: "Immune complex and fibrin deposition, as in vasculitis or malignant hypertension", isCorrect: true },
      { text: "Bacterial invasion of the vessel", isCorrect: false },
      { text: "Normal ageing of arteries", isCorrect: false },
      { text: "Lipid deposition in atherosclerosis", isCorrect: false },
    ],
  },
  {
    stem: "What distinguishes wet from dry gangrene?",
    topic: "Patterns of Necrosis",
    explanation:
      "Dry gangrene is coagulative necrosis following arterial occlusion, with a clear demarcation and mummified tissue. Wet gangrene adds bacterial infection and liquefaction, spreads rapidly with systemic toxicity, and is a surgical emergency rather than something to observe.",
    choices: [
      { text: "Wet gangrene adds bacterial infection and liquefaction, spreading rapidly with systemic toxicity", isCorrect: true },
      { text: "Dry gangrene is the more urgent of the two", isCorrect: false },
      { text: "They differ only in appearance, not management", isCorrect: false },
      { text: "Wet gangrene has no infective component", isCorrect: false },
    ],
  },
  {
    stem: "Why is the pattern of necrosis clinically useful rather than merely descriptive?",
    topic: "Patterns of Necrosis",
    explanation:
      "The pattern reflects the mechanism, so it narrows the cause — caseous suggests mycobacteria, fibrinoid suggests immune vascular damage, fat necrosis suggests pancreatic enzyme release. A pathologist reporting the pattern is reporting a mechanism, not a description.",
    choices: [
      { text: "The pattern reflects the mechanism, so it narrows the likely cause", isCorrect: true },
      { text: "It only affects how the report is worded", isCorrect: false },
      { text: "All necrosis has the same cause", isCorrect: false },
      { text: "Pattern is determined by the organ alone", isCorrect: false },
    ],
  },

  /* ── Apoptosis & Its Regulation ── */
  {
    stem: "How does the intrinsic apoptotic pathway differ from the extrinsic one?",
    topic: "Apoptosis & Its Regulation",
    explanation:
      "The intrinsic pathway is triggered from within — DNA damage, growth factor withdrawal — and works through mitochondrial cytochrome c release. The extrinsic pathway is triggered from outside by death receptor ligation, such as Fas or TNF. Both converge on the executioner caspases.",
    choices: [
      { text: "Intrinsic starts within the cell via mitochondria; extrinsic starts at death receptors — both converge on caspases", isCorrect: true },
      { text: "Intrinsic is receptor-mediated and extrinsic mitochondrial", isCorrect: false },
      { text: "They use entirely separate final pathways", isCorrect: false },
      { text: "Only the extrinsic pathway exists in humans", isCorrect: false },
    ],
  },
  {
    stem: "What is the role of the Bcl-2 protein family?",
    topic: "Apoptosis & Its Regulation",
    explanation:
      "It regulates mitochondrial outer membrane permeability — Bcl-2 and Bcl-xL are anti-apoptotic, Bax and Bak pro-apoptotic, and the balance determines whether cytochrome c is released. Overexpression of Bcl-2 in follicular lymphoma is a cancer caused by failure to die rather than excessive division.",
    choices: [
      { text: "It sets the balance controlling mitochondrial permeability and cytochrome c release", isCorrect: true },
      { text: "It degrades DNA directly", isCorrect: false },
      { text: "It is the receptor for TNF", isCorrect: false },
      { text: "It has no role in apoptosis", isCorrect: false },
    ],
  },
  {
    stem: "What does p53 do when DNA damage is detected?",
    topic: "Apoptosis & Its Regulation",
    explanation:
      "It arrests the cell cycle to allow repair, and if the damage is irreparable it triggers apoptosis. Losing p53 therefore allows damaged cells to survive and divide, which is why it is the most commonly mutated gene in human cancer — the guardian of the genome.",
    choices: [
      { text: "Arrests the cycle for repair, and triggers apoptosis if the damage cannot be repaired", isCorrect: true },
      { text: "Accelerates division to dilute the damage", isCorrect: false },
      { text: "Repairs DNA directly by itself", isCorrect: false },
      { text: "It has no role in damaged cells", isCorrect: false },
    ],
  },
  {
    stem: "What are caspases and why are they described as executioners?",
    topic: "Apoptosis & Its Regulation",
    explanation:
      "Proteases held as inactive precursors and activated by cleavage, forming a cascade that dismantles the cell — degrading cytoskeleton and activating the endonuclease that fragments DNA. Being pre-made and requiring only cleavage is why apoptosis can proceed rapidly without new protein synthesis.",
    choices: [
      { text: "Pre-formed proteases activated by cleavage that dismantle the cell in a cascade", isCorrect: true },
      { text: "Membrane channels that let calcium in", isCorrect: false },
      { text: "Transcription factors that switch on repair genes", isCorrect: false },
      { text: "Enzymes that repair damaged DNA", isCorrect: false },
    ],
  },
  {
    stem: "Give an example of apoptosis serving a normal physiological purpose.",
    topic: "Apoptosis & Its Regulation",
    explanation:
      "Removal of the webbing between developing digits, deletion of self-reactive lymphocytes during thymic selection, and endometrial shedding in the menstrual cycle. Apoptosis is not a form of damage — it is a normal sculpting and quality-control process that becomes pathological only when dysregulated.",
    choices: [
      { text: "Digit separation in development, lymphocyte selection, and endometrial shedding", isCorrect: true },
      { text: "Apoptosis is always pathological", isCorrect: false },
      { text: "It occurs only in response to toxins", isCorrect: false },
      { text: "It has no physiological role", isCorrect: false },
    ],
  },
  {
    stem: "How can too little apoptosis contribute to disease?",
    topic: "Apoptosis & Its Regulation",
    explanation:
      "Cells that should die survive — allowing tumours to accumulate mutations, and autoreactive lymphocytes to persist and cause autoimmunity. Too much apoptosis produces the opposite problem, contributing to neurodegeneration and to cell loss in ischaemic injury.",
    choices: [
      { text: "Cells that should die survive, allowing tumour growth and autoimmunity", isCorrect: true },
      { text: "Reduced apoptosis is always beneficial", isCorrect: false },
      { text: "It causes only neurodegeneration", isCorrect: false },
      { text: "The amount of apoptosis has no disease relevance", isCorrect: false },
    ],
  },

  /* ── Cellular Accumulations & Pigments ── */
  {
    stem: "Why does the liver accumulate fat in alcohol excess and in obesity?",
    topic: "Cellular Accumulations & Pigments",
    explanation:
      "Triglyceride accumulates when input or synthesis exceeds export — from increased fatty acid delivery, increased synthesis, or impaired assembly and secretion of lipoprotein. Steatosis is reversible; the concern is progression to steatohepatitis and then fibrosis.",
    choices: [
      { text: "Triglyceride input or synthesis exceeds the cell's capacity to export it", isCorrect: true },
      { text: "The liver actively imports fat for storage as its normal function", isCorrect: false },
      { text: "Fat is deposited only after fibrosis develops", isCorrect: false },
      { text: "Steatosis is always irreversible", isCorrect: false },
    ],
  },
  {
    stem: "What is lipofuscin, and what does its presence indicate?",
    topic: "Cellular Accumulations & Pigments",
    explanation:
      "A yellow-brown granular pigment of indigestible lipid peroxidation products, accumulating in long-lived cells — heart, liver, neurons. It is a marker of cumulative free radical damage over time, hence its name as the wear-and-tear pigment, and it is not itself injurious.",
    choices: [
      { text: "Indigestible lipid peroxidation residue marking cumulative oxidative damage with age", isCorrect: true },
      { text: "An iron-containing pigment from haemorrhage", isCorrect: false },
      { text: "A sign of acute cell injury", isCorrect: false },
      { text: "A toxic pigment that destroys the cell", isCorrect: false },
    ],
  },
  {
    stem: "What does haemosiderin deposition indicate, and how is it demonstrated?",
    topic: "Cellular Accumulations & Pigments",
    explanation:
      "Iron storage in excess of ferritin capacity — locally after haemorrhage, or systemically in haemochromatosis and repeated transfusion. Perls' Prussian blue stain demonstrates it, and the distinction between harmless local deposition and organ-damaging systemic overload is the clinically important one.",
    choices: [
      { text: "Excess iron, local after haemorrhage or systemic in overload — shown by Perls' Prussian blue", isCorrect: true },
      { text: "Excess copper, shown by rhodanine", isCorrect: false },
      { text: "Lipid accumulation, shown by oil red O", isCorrect: false },
      { text: "It is a normal finding in all tissues", isCorrect: false },
    ],
  },
  {
    stem: "What is anthracosis, and why does it matter?",
    topic: "Cellular Accumulations & Pigments",
    explanation:
      "Accumulation of inhaled carbon in pulmonary macrophages and hilar lymph nodes, blackening the tissue. It is essentially harmless in itself, but heavy exposure — including from indoor cooking smoke — accompanies the particulate burden that causes genuine lung disease.",
    choices: [
      { text: "Inhaled carbon in lung macrophages — harmless alone, but marking a particulate exposure that is not", isCorrect: true },
      { text: "Iron accumulation in the lung", isCorrect: false },
      { text: "A form of lung cancer", isCorrect: false },
      { text: "Bacterial pigment production", isCorrect: false },
    ],
  },
  {
    stem: "How does jaundice from bilirubin accumulation differ in mechanism between prehepatic, hepatic and posthepatic causes?",
    topic: "Cellular Accumulations & Pigments",
    explanation:
      "Prehepatic reflects excess production from haemolysis with unconjugated bilirubin; hepatic reflects impaired uptake, conjugation or excretion; posthepatic reflects obstruction with conjugated bilirubin backing up. The conjugated fraction and the urine and stool findings separate them.",
    choices: [
      { text: "Overproduction, impaired hepatocyte handling, or obstruction — distinguished by the conjugated fraction", isCorrect: true },
      { text: "All three produce identical unconjugated hyperbilirubinaemia", isCorrect: false },
      { text: "Only obstruction causes jaundice", isCorrect: false },
      { text: "The conjugated fraction is never useful", isCorrect: false },
    ],
  },
  {
    stem: "What causes the intracellular protein accumulation seen in alpha-1 antitrypsin deficiency?",
    topic: "Cellular Accumulations & Pigments",
    explanation:
      "The abnormal protein misfolds and cannot be secreted, so it accumulates within hepatocytes as PAS-positive diastase-resistant globules. The disease is therefore double-sided: liver damage from what is retained, and emphysema from what never reaches the lung.",
    choices: [
      { text: "Misfolded protein cannot be secreted and accumulates in hepatocytes, while the lung lacks it", isCorrect: true },
      { text: "The protein is produced in excess and stored deliberately", isCorrect: false },
      { text: "It accumulates only in the lung", isCorrect: false },
      { text: "No accumulation occurs in this condition", isCorrect: false },
    ],
  },

  /* ── Calcification & Amyloid ── */
  {
    stem: "What distinguishes dystrophic from metastatic calcification?",
    topic: "Calcification & Amyloid",
    explanation:
      "Dystrophic calcification occurs in damaged or dead tissue with normal serum calcium — atheroma, old tuberculous nodes, damaged valves. Metastatic calcification occurs in normal tissue because serum calcium is raised, as in hyperparathyroidism or malignancy. The serum calcium separates them.",
    choices: [
      { text: "Dystrophic occurs in damaged tissue with normal calcium; metastatic in normal tissue with raised calcium", isCorrect: true },
      { text: "Dystrophic requires hypercalcaemia", isCorrect: false },
      { text: "Metastatic calcification means cancer has spread there", isCorrect: false },
      { text: "They cannot be distinguished", isCorrect: false },
    ],
  },
  {
    stem: "Why is the term metastatic calcification potentially misleading?",
    topic: "Calcification & Amyloid",
    explanation:
      "It has nothing to do with tumour metastasis — it describes calcium deposition in normal tissues because the serum level is high, whatever the cause. Malignancy is one cause of that hypercalcaemia, which is probably how the confusing name arose.",
    choices: [
      { text: "It refers to calcium deposition from hypercalcaemia, not to tumour spread", isCorrect: true },
      { text: "It means calcification within a metastasis", isCorrect: false },
      { text: "It only occurs in cancer patients", isCorrect: false },
      { text: "The term is entirely accurate", isCorrect: false },
    ],
  },
  {
    stem: "How is amyloid identified histologically?",
    topic: "Calcification & Amyloid",
    explanation:
      "Congo red staining with apple-green birefringence under polarised light — the birefringence is what confirms it, since the red colour alone is not specific. Whatever the precursor protein, all amyloid shares a beta-pleated sheet structure, which is what produces that optical property.",
    choices: [
      { text: "Congo red with apple-green birefringence under polarised light", isCorrect: true },
      { text: "Perls' Prussian blue", isCorrect: false },
      { text: "Ziehl-Neelsen staining", isCorrect: false },
      { text: "It cannot be identified histologically", isCorrect: false },
    ],
  },
  {
    stem: "What is the difference between AL and AA amyloidosis?",
    topic: "Calcification & Amyloid",
    explanation:
      "AL derives from immunoglobulin light chains and is associated with plasma cell dyscrasia such as myeloma. AA derives from serum amyloid A, an acute phase protein, and follows chronic inflammation — rheumatoid arthritis, chronic infection, tuberculosis. The underlying disease differs entirely, so identifying the type directs the investigation.",
    choices: [
      { text: "AL from immunoglobulin light chains in plasma cell disease; AA from serum amyloid A in chronic inflammation", isCorrect: true },
      { text: "AL follows chronic infection and AA follows myeloma", isCorrect: false },
      { text: "They derive from the same precursor protein", isCorrect: false },
      { text: "Neither is associated with any underlying disease", isCorrect: false },
    ],
  },
  {
    stem: "Why does amyloid deposition impair organ function?",
    topic: "Calcification & Amyloid",
    explanation:
      "It accumulates extracellularly between cells and vessels, physically separating them and causing pressure atrophy while stiffening the tissue. In the heart this produces a restrictive picture, in the kidney nephrotic-range proteinuria — the mechanism is architectural rather than toxic.",
    choices: [
      { text: "Extracellular deposition separates cells from their blood supply and stiffens the tissue", isCorrect: true },
      { text: "It is directly toxic to cell nuclei", isCorrect: false },
      { text: "It triggers acute inflammation", isCorrect: false },
      { text: "It has no effect on organ function", isCorrect: false },
    ],
  },
  {
    stem: "Why is chronic untreated inflammatory disease a cause of amyloidosis?",
    topic: "Calcification & Amyloid",
    explanation:
      "Sustained production of serum amyloid A as an acute phase protein provides the precursor, which over years is deposited as AA amyloid. It means that controlling the underlying inflammation is also the prevention — and it is why AA amyloidosis is now less common where inflammatory disease is well treated.",
    choices: [
      { text: "Sustained serum amyloid A production supplies the precursor, so controlling inflammation prevents it", isCorrect: true },
      { text: "Chronic inflammation destroys the kidney directly", isCorrect: false },
      { text: "The link is coincidental", isCorrect: false },
      { text: "Only infections cause amyloidosis", isCorrect: false },
    ],
  },

  /* ── The Cells of Acute Inflammation ── */
  {
    stem: "What is the sequence by which a neutrophil leaves the circulation and reaches tissue?",
    topic: "The Cells of Acute Inflammation",
    explanation:
      "Margination as flow slows, rolling on selectins, firm adhesion via integrins to ICAM, transmigration between endothelial cells, then chemotaxis along a gradient. Defects at specific steps cause the leucocyte adhesion deficiencies, which is why the sequence is worth knowing as steps rather than as a summary.",
    choices: [
      { text: "Margination, selectin-mediated rolling, integrin adhesion, transmigration, then chemotaxis", isCorrect: true },
      { text: "Direct diffusion through the vessel wall", isCorrect: false },
      { text: "Chemotaxis first, then adhesion", isCorrect: false },
      { text: "Neutrophils are produced within the tissue itself", isCorrect: false },
    ],
  },
  {
    stem: "What is the respiratory burst, and which condition results from its failure?",
    topic: "The Cells of Acute Inflammation",
    explanation:
      "NADPH oxidase generates superoxide and downstream reactive species inside the phagosome to kill ingested organisms. Failure causes chronic granulomatous disease, where phagocytes ingest organisms but cannot kill them — producing recurrent infection with catalase-positive organisms and granuloma formation.",
    choices: [
      { text: "NADPH oxidase generates reactive species to kill ingested organisms; failure causes chronic granulomatous disease", isCorrect: true },
      { text: "Increased oxygen consumption by the lungs during infection", isCorrect: false },
      { text: "The release of histamine from mast cells", isCorrect: false },
      { text: "A process with no clinical correlate", isCorrect: false },
    ],
  },
  {
    stem: "What roles does the macrophage play beyond phagocytosis?",
    topic: "The Cells of Acute Inflammation",
    explanation:
      "Antigen presentation to T cells, cytokine secretion that drives both inflammation and its resolution, and orchestration of repair through growth factors that recruit fibroblasts and promote angiogenesis. It is the pivotal cell in deciding whether inflammation resolves, becomes chronic, or scars.",
    choices: [
      { text: "Antigen presentation, cytokine secretion, and orchestrating repair and fibrosis", isCorrect: true },
      { text: "Phagocytosis is its only function", isCorrect: false },
      { text: "Production of antibody", isCorrect: false },
      { text: "Direct destruction of collagen only", isCorrect: false },
    ],
  },
  {
    stem: "In which situations does an eosinophil predominance point the diagnosis?",
    topic: "The Cells of Acute Inflammation",
    explanation:
      "Parasitic infection, particularly tissue-invasive helminths, allergic and atopic disease, and certain drug reactions. Eosinophilia in a patient from an endemic area with unexplained symptoms should prompt consideration of helminth infection before it is attributed to allergy.",
    choices: [
      { text: "Tissue-invasive helminth infection, allergic disease, and some drug reactions", isCorrect: true },
      { text: "Acute bacterial infection", isCorrect: false },
      { text: "Viral infection specifically", isCorrect: false },
      { text: "Eosinophil numbers carry no diagnostic information", isCorrect: false },
    ],
  },
  {
    stem: "What is the functional consequence of mast cell degranulation?",
    topic: "The Cells of Acute Inflammation",
    explanation:
      "Immediate release of preformed histamine and proteases causing vasodilation, increased permeability and bronchoconstriction, followed by newly synthesised leukotrienes and prostaglandins sustaining the response. The two-phase pattern explains why an allergic reaction can recur hours after it appeared to settle.",
    choices: [
      { text: "Immediate preformed mediator release, then a delayed synthesised phase — hence biphasic reactions", isCorrect: true },
      { text: "A single brief release with no later phase", isCorrect: false },
      { text: "Release of antibody into tissue", isCorrect: false },
      { text: "Direct phagocytosis of allergens", isCorrect: false },
    ],
  },
  {
    stem: "Why does pus form, and what is it composed of?",
    topic: "The Cells of Acute Inflammation",
    explanation:
      "Dead and dying neutrophils, liquefied tissue debris, organisms and oedema fluid — the product of enzymatic digestion by neutrophil granule contents. Because pus is walled off and avascular, antibiotics penetrate it poorly, which is the pathological basis for drainage as treatment.",
    choices: [
      { text: "Dead neutrophils, liquefied debris and organisms — poorly penetrated by antibiotics, hence drainage", isCorrect: true },
      { text: "Clotted blood within tissue", isCorrect: false },
      { text: "Lymphocytes and plasma cells predominantly", isCorrect: false },
      { text: "Sterile fluid requiring no intervention", isCorrect: false },
    ],
  },

  /* ── Chemical Mediators ── */
  {
    stem: "What are the immediate vascular effects of histamine release?",
    topic: "Chemical Mediators",
    explanation:
      "Arteriolar dilation and increased venular permeability, producing the redness, heat and swelling of acute inflammation within seconds. Being preformed in mast cell granules is what makes it the first mediator to act, before anything has to be synthesised.",
    choices: [
      { text: "Arteriolar dilation with increased venular permeability, acting within seconds", isCorrect: true },
      { text: "Vasoconstriction with reduced permeability", isCorrect: false },
      { text: "Effects appearing only after several hours", isCorrect: false },
      { text: "No vascular effect at all", isCorrect: false },
    ],
  },
  {
    stem: "How do the two arms of the arachidonic acid pathway differ?",
    topic: "Chemical Mediators",
    explanation:
      "Cyclo-oxygenase produces prostaglandins and thromboxane, mediating vasodilation, pain and fever; lipoxygenase produces leukotrienes, mediating bronchoconstriction and chemotaxis. Blocking only cyclo-oxygenase can shunt substrate towards leukotrienes, which is one explanation for aspirin-exacerbated respiratory disease.",
    choices: [
      { text: "COX gives prostaglandins and thromboxane; lipoxygenase gives leukotrienes — blocking one can shunt to the other", isCorrect: true },
      { text: "Both produce identical mediators", isCorrect: false },
      { text: "Lipoxygenase produces prostaglandins", isCorrect: false },
      { text: "Neither pathway has clinical relevance", isCorrect: false },
    ],
  },
  {
    stem: "What are the actions of complement fragments C3a and C5a?",
    topic: "Chemical Mediators",
    explanation:
      "Both are anaphylatoxins causing mast cell degranulation and increased permeability; C5a is additionally a powerful neutrophil chemoattractant. C3b opsonises for phagocytosis and the terminal components form the membrane attack complex — three distinct functions from one cascade.",
    choices: [
      { text: "Both are anaphylatoxins; C5a is also a potent neutrophil chemoattractant", isCorrect: true },
      { text: "They form the membrane attack complex", isCorrect: false },
      { text: "They opsonise bacteria for phagocytosis", isCorrect: false },
      { text: "They inhibit inflammation", isCorrect: false },
    ],
  },
  {
    stem: "What do TNF-alpha and IL-1 do in acute inflammation?",
    topic: "Chemical Mediators",
    explanation:
      "They activate endothelium to express adhesion molecules, induce fever and the acute phase response, and drive the systemic features of sepsis. Their central position is why TNF inhibitors work in inflammatory disease — and why blocking them impairs the granuloma that contains tuberculosis.",
    choices: [
      { text: "Activate endothelium, induce fever and the acute phase response, and drive systemic sepsis features", isCorrect: true },
      { text: "Act only locally with no systemic effect", isCorrect: false },
      { text: "Suppress inflammation", isCorrect: false },
      { text: "Function purely as chemoattractants", isCorrect: false },
    ],
  },
  {
    stem: "What is the role of bradykinin in inflammation?",
    topic: "Chemical Mediators",
    explanation:
      "Vasodilation, increased permeability and — distinctively — pain. Its degradation by angiotensin-converting enzyme is why ACE inhibitors allow it to accumulate, producing cough and angioedema as side effects that are mechanistically inseparable from the drug's action.",
    choices: [
      { text: "Vasodilation, permeability and pain — and it accumulates when ACE is inhibited", isCorrect: true },
      { text: "It causes vasoconstriction", isCorrect: false },
      { text: "It has no relationship to any drug class", isCorrect: false },
      { text: "It is a chemoattractant only", isCorrect: false },
    ],
  },
  {
    stem: "How does nitric oxide contribute to inflammation and to septic shock?",
    topic: "Chemical Mediators",
    explanation:
      "It causes vasodilation and has antimicrobial activity within macrophages. In sepsis, inducible nitric oxide synthase generates it in large quantities, producing the profound vasodilation and hypotension that characterise the shock — a normal mediator becoming harmful through sheer scale.",
    choices: [
      { text: "Vasodilation and antimicrobial action — but in sepsis its excess causes profound hypotension", isCorrect: true },
      { text: "Vasoconstriction that raises blood pressure in sepsis", isCorrect: false },
      { text: "It has no role in inflammation", isCorrect: false },
      { text: "It acts only in the lungs", isCorrect: false },
    ],
  },

  /* ── Chronic Inflammation & Granulomas ── */
  {
    stem: "Which cells characterise chronic inflammation, and what do they indicate?",
    topic: "Chronic Inflammation & Granulomas",
    explanation:
      "Lymphocytes, plasma cells and macrophages, with tissue destruction and repair proceeding at the same time. Their presence indicates a persistent stimulus that acute inflammation failed to clear — so the finding raises the question of what is still there rather than what happened.",
    choices: [
      { text: "Lymphocytes, plasma cells and macrophages, indicating a persistent unresolved stimulus", isCorrect: true },
      { text: "Neutrophils predominantly", isCorrect: false },
      { text: "Eosinophils exclusively", isCorrect: false },
      { text: "No inflammatory cells are present", isCorrect: false },
    ],
  },
  {
    stem: "What is a granuloma, and why does the body form one?",
    topic: "Chronic Inflammation & Granulomas",
    explanation:
      "A focal collection of activated macrophages, often with epithelioid and multinucleate giant cells, surrounded by lymphocytes. It forms when an agent cannot be eliminated, so the body walls it off instead — containment as an alternative to clearance.",
    choices: [
      { text: "A collection of activated macrophages walling off an agent that cannot be eliminated", isCorrect: true },
      { text: "A collection of neutrophils around dead tissue", isCorrect: false },
      { text: "A benign tumour of macrophages", isCorrect: false },
      { text: "A collection of fibroblasts alone", isCorrect: false },
    ],
  },
  {
    stem: "What distinguishes a caseating from a non-caseating granuloma, and what does each suggest?",
    topic: "Chronic Inflammation & Granulomas",
    explanation:
      "Caseating granulomas have central necrosis and suggest tuberculosis or fungal infection; non-caseating granulomas lack it and suggest sarcoidosis, Crohn's disease or a foreign body reaction. The distinction is the first branch point in interpreting granulomatous inflammation.",
    choices: [
      { text: "Central necrosis suggests TB or fungal; its absence suggests sarcoidosis, Crohn's or foreign body", isCorrect: true },
      { text: "Caseation suggests sarcoidosis", isCorrect: false },
      { text: "The distinction has no diagnostic value", isCorrect: false },
      { text: "All granulomas caseate eventually", isCorrect: false },
    ],
  },
  {
    stem: "How does a foreign body giant cell differ from a Langhans giant cell?",
    topic: "Chronic Inflammation & Granulomas",
    explanation:
      "Foreign body giant cells have nuclei scattered randomly through the cytoplasm; Langhans giant cells arrange theirs in a peripheral horseshoe and are associated with tuberculosis and other immune granulomas. Both are fused macrophages tackling something too large to phagocytose.",
    choices: [
      { text: "Randomly scattered nuclei versus a peripheral horseshoe arrangement in Langhans cells", isCorrect: true },
      { text: "Foreign body giant cells contain no nuclei", isCorrect: false },
      { text: "Langhans cells are neutrophil-derived", isCorrect: false },
      { text: "They are morphologically identical", isCorrect: false },
    ],
  },
  {
    stem: "Why does chronic inflammation lead to fibrosis?",
    topic: "Chronic Inflammation & Granulomas",
    explanation:
      "Persistently activated macrophages secrete growth factors that recruit fibroblasts and drive collagen deposition, while destruction and repair proceed simultaneously. The result is scar replacing functioning tissue — which is the final common pathway of cirrhosis, pulmonary fibrosis and chronic renal disease alike.",
    choices: [
      { text: "Activated macrophages drive fibroblast recruitment and collagen deposition while damage continues", isCorrect: true },
      { text: "Fibrosis occurs independently of inflammation", isCorrect: false },
      { text: "Neutrophils lay down collagen directly", isCorrect: false },
      { text: "Chronic inflammation prevents fibrosis", isCorrect: false },
    ],
  },
  {
    stem: "Why can chronic inflammation predispose to malignancy?",
    topic: "Chronic Inflammation & Granulomas",
    explanation:
      "Repeated cycles of injury and regeneration increase the number of cell divisions and therefore mutation opportunities, while reactive oxygen species from inflammatory cells damage DNA directly. It is the mechanism linking chronic gastritis to gastric cancer and chronic colitis to colorectal cancer.",
    choices: [
      { text: "Repeated regeneration multiplies mutation opportunities while reactive species damage DNA", isCorrect: true },
      { text: "Inflammatory cells transform into tumour cells", isCorrect: false },
      { text: "Chronic inflammation is protective against cancer", isCorrect: false },
      { text: "The association is entirely coincidental", isCorrect: false },
    ],
  },

  /* ── Systemic Effects of Inflammation ── */
  {
    stem: "By what mechanism does infection cause fever?",
    topic: "Systemic Effects of Inflammation",
    explanation:
      "Exogenous pyrogens trigger release of IL-1, IL-6 and TNF, which raise prostaglandin E2 production in the hypothalamus and reset the thermoregulatory set point upward. Antipyretics work by inhibiting that prostaglandin synthesis, which is why they lower fever but not normal temperature.",
    choices: [
      { text: "Cytokines raise hypothalamic prostaglandin E2, resetting the temperature set point upward", isCorrect: true },
      { text: "Bacteria physically generate heat in the tissues", isCorrect: false },
      { text: "Increased muscle activity alone raises temperature", isCorrect: false },
      { text: "The hypothalamus is bypassed entirely", isCorrect: false },
    ],
  },
  {
    stem: "How do CRP and ESR differ as markers of inflammation?",
    topic: "Systemic Effects of Inflammation",
    explanation:
      "CRP is an acute phase protein that rises within hours and falls quickly as inflammation resolves. ESR reflects plasma protein changes affecting red cell aggregation, rises and falls over days to weeks, and is influenced by anaemia, age and immunoglobulin levels — so it lags and is less specific.",
    choices: [
      { text: "CRP rises and falls within hours; ESR changes over days and is affected by anaemia and immunoglobulins", isCorrect: true },
      { text: "ESR responds faster than CRP", isCorrect: false },
      { text: "They measure the same thing identically", isCorrect: false },
      { text: "Neither is affected by anything but inflammation", isCorrect: false },
    ],
  },
  {
    stem: "What does a left shift in the white cell differential indicate?",
    topic: "Systemic Effects of Inflammation",
    explanation:
      "Release of immature neutrophils — band forms — from the marrow because mature cells are being consumed faster than they can be replaced. It indicates an intense demand, typically bacterial infection, and is more informative than the total white count alone.",
    choices: [
      { text: "Immature band forms released because demand exceeds the supply of mature neutrophils", isCorrect: true },
      { text: "A fall in the total white cell count", isCorrect: false },
      { text: "Predominance of lymphocytes", isCorrect: false },
      { text: "A laboratory artefact with no meaning", isCorrect: false },
    ],
  },
  {
    stem: "Which white cell pattern would suggest a viral rather than bacterial illness?",
    topic: "Systemic Effects of Inflammation",
    explanation:
      "Lymphocytosis, sometimes with atypical lymphocytes, and often a normal or low total count. Bacterial infection typically produces neutrophilia with a left shift. The pattern is a useful pointer but never decisive on its own — severe bacterial sepsis can present with leucopenia.",
    choices: [
      { text: "Lymphocytosis with a normal or low total count — though severe sepsis can cause leucopenia", isCorrect: true },
      { text: "Marked neutrophilia with band forms", isCorrect: false },
      { text: "Eosinophilia", isCorrect: false },
      { text: "The differential cannot distinguish them at all", isCorrect: false },
    ],
  },
  {
    stem: "Why does chronic inflammatory disease cause anaemia even when iron stores are adequate?",
    topic: "Systemic Effects of Inflammation",
    explanation:
      "Inflammatory cytokines raise hepcidin, which locks iron inside macrophages and blocks intestinal absorption, while also blunting erythropoietin response and shortening red cell survival. Iron is present but unavailable — which is why ferritin is normal or high in anaemia of chronic disease.",
    choices: [
      { text: "Hepcidin sequesters iron and blunts erythropoiesis, so iron is present but unavailable", isCorrect: true },
      { text: "Iron stores are always depleted in chronic disease", isCorrect: false },
      { text: "The marrow is replaced by inflammatory cells", isCorrect: false },
      { text: "Chronic inflammation does not affect haemoglobin", isCorrect: false },
    ],
  },
  {
    stem: "What underlies the weight loss and muscle wasting of chronic disease and malignancy?",
    topic: "Systemic Effects of Inflammation",
    explanation:
      "Cachexia — a cytokine-driven catabolic state involving TNF and IL-6 that increases resting energy expenditure and breaks down muscle, distinct from simple starvation. It responds poorly to feeding alone, which is why nutritional support does not reverse it while the underlying process continues.",
    choices: [
      { text: "Cytokine-driven cachexia, a catabolic state distinct from starvation and not reversed by feeding alone", isCorrect: true },
      { text: "Simple reduced food intake", isCorrect: false },
      { text: "Malabsorption in every case", isCorrect: false },
      { text: "It is fully reversible with nutritional supplements", isCorrect: false },
    ],
  },

  /* ── Tissue Repair ── */
  {
    stem: "How does the regenerative capacity of labile, stable and permanent tissues differ?",
    topic: "Tissue Repair",
    explanation:
      "Labile tissues such as gut epithelium and marrow divide continuously and regenerate well. Stable tissues such as liver and kidney divide when stimulated. Permanent tissues such as cardiac muscle and neurons cannot, so injury there is repaired by scar rather than replacement — which is why a myocardial infarct leaves fibrous tissue.",
    choices: [
      { text: "Labile divide continuously, stable divide when stimulated, permanent cannot — so they scar instead", isCorrect: true },
      { text: "All tissues regenerate equally", isCorrect: false },
      { text: "Permanent tissues regenerate the fastest", isCorrect: false },
      { text: "Only labile tissues exist in adults", isCorrect: false },
    ],
  },
  {
    stem: "What is granulation tissue composed of, and why is it important?",
    topic: "Tissue Repair",
    explanation:
      "New capillaries, proliferating fibroblasts and loose extracellular matrix with inflammatory cells, giving a pink granular surface. It is the scaffold on which healing proceeds, and its absence in a chronic wound signals that healing has stalled rather than that the wound is clean.",
    choices: [
      { text: "New capillaries, fibroblasts and loose matrix — the scaffold on which healing proceeds", isCorrect: true },
      { text: "Dead tissue requiring debridement", isCorrect: false },
      { text: "A granuloma of activated macrophages", isCorrect: false },
      { text: "Mature collagen scar", isCorrect: false },
    ],
  },
  {
    stem: "What distinguishes healing by primary from secondary intention?",
    topic: "Tissue Repair",
    explanation:
      "Primary intention applies to a clean wound with apposed edges — minimal granulation tissue and a fine scar. Secondary intention applies where there is tissue loss or infection: the defect fills with granulation tissue and contracts, producing a larger scar over a longer period.",
    choices: [
      { text: "Apposed edges heal with minimal granulation and a fine scar; an open defect fills, contracts and scars more", isCorrect: true },
      { text: "Secondary intention is faster and leaves less scar", isCorrect: false },
      { text: "They describe different anatomical sites", isCorrect: false },
      { text: "There is no practical difference", isCorrect: false },
    ],
  },
  {
    stem: "Which factors most commonly impair wound healing?",
    topic: "Tissue Repair",
    explanation:
      "Poor perfusion and oxygenation, infection, diabetes, malnutrition — particularly protein and vitamin C deficiency — corticosteroids, and mechanical movement of the wound. Most are modifiable, which is why a non-healing wound prompts a search for the cause rather than a change of dressing.",
    choices: [
      { text: "Poor perfusion, infection, diabetes, malnutrition, corticosteroids and wound movement", isCorrect: true },
      { text: "Only the size of the original wound", isCorrect: false },
      { text: "Age alone, which is unmodifiable", isCorrect: false },
      { text: "Nothing reliably impairs healing", isCorrect: false },
    ],
  },
  {
    stem: "Why does a scar continue to change for months after a wound appears healed?",
    topic: "Tissue Repair",
    explanation:
      "Remodelling replaces type III collagen with stronger type I and reorganises fibres along lines of stress, with tensile strength increasing over months. A scar never regains full original strength, which matters for advice about activity after abdominal surgery.",
    choices: [
      { text: "Collagen is remodelled from type III to type I and realigned, gaining strength over months", isCorrect: true },
      { text: "The scar is fully mature within a week", isCorrect: false },
      { text: "Scars regain full original tissue strength", isCorrect: false },
      { text: "No further change occurs after closure", isCorrect: false },
    ],
  },
  {
    stem: "What is wound contraction, and when does it become a problem?",
    topic: "Tissue Repair",
    explanation:
      "Myofibroblasts draw the wound edges together, usefully reducing the defect that must be filled. Across a joint or on the neck it can produce a contracture that restricts movement — a normal repair mechanism causing disability through its location, and a major issue after burns.",
    choices: [
      { text: "Myofibroblasts pull edges together — useful, but across a joint it causes a restricting contracture", isCorrect: true },
      { text: "It is always pathological", isCorrect: false },
      { text: "It occurs only in infected wounds", isCorrect: false },
      { text: "It plays no role in healing", isCorrect: false },
    ],
  },
];

async function main() {
  console.log(`Seeding Pathology — Set 1 (Tier 1: Foundations)${REPLACE_MODE ? "  [REPLACE MODE]" : ""}…\n`);

  const categoryId = await findCategory("fs-pathology");
  if (!categoryId) return;

  await seedSet({
    categoryId,
    slug: "pathology-set-1-foundations",
    title: "Pathology — Set 1: Foundations",
    description:
      "Sixty questions on the mechanisms underneath disease: how cells are injured and die, the patterns of necrosis and what each indicates, apoptosis and its regulation, cellular accumulations and pigments, calcification and amyloid, the cells and chemical mediators of inflammation, granulomas, the systemic effects of inflammation, and tissue repair. Untimed, with a full rationale on every question.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Foundational",
    questions: SET1,
  });

  await done();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
