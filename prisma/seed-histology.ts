/**
 * CONTENT WAVE — Histology
 *
 * Same shape as Haematology, Infectious Diseases and Biochemistry:
 *
 *   Practice Set 1 (30)  → epithelium, connective tissue, muscle, nerve, blood
 *   Practice Set 2 (30)  → organ systems and laboratory technique
 *   Timed Exam 1   (30)  → Set 1 under exam conditions, 40 minutes
 *   Timed Exam 2   (60)  → everything, 75 minutes
 *
 * Seeds into the existing fs-histology section (Foundational Sciences → Anatomy
 * → Histology). No new taxonomy node.
 *
 * Answers are SHUFFLED on insert — the correct choice is written first below for
 * readability, and inserting in that order would put it at position 1 every time.
 *
 * Histology questions age well: tissue architecture doesn't get revised. The few
 * items touching clinical correlation are principle-level rather than threshold-
 * level, so nothing here needs checking against changing guidance.
 *
 * Run:  npx tsx prisma/seed-histology.ts
 * Safe to re-run — upserts by quiz slug and rewrites only that quiz's questions.
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Q = {
  stem: string;
  topic: string;
  explanation: string;
  choices: { text: string; isCorrect: boolean }[];
};

/* ═══════════════ PRACTICE SET 1 ═══════════════ */

const SET1: Q[] = [
  /* ---- Epithelium ---- */
  {
    stem: "Which epithelium lines the trachea and larger bronchi?",
    topic: "Epithelium",
    explanation:
      "Pseudostratified ciliated columnar epithelium with goblet cells. Every cell touches the basement membrane, but the nuclei sit at different heights, which is what gives the false impression of layering. The cilia and mucus together form the mucociliary escalator that clears inhaled particles upward.",
    choices: [
      { text: "Pseudostratified ciliated columnar with goblet cells", isCorrect: true },
      { text: "Simple squamous", isCorrect: false },
      { text: "Stratified squamous keratinised", isCorrect: false },
      { text: "Transitional", isCorrect: false },
    ],
  },
  {
    stem: "Why is simple squamous epithelium found lining alveoli and capillaries?",
    topic: "Epithelium",
    explanation:
      "Because a single flattened layer offers the shortest possible diffusion distance, which is exactly what gas and fluid exchange require. The trade-off is fragility — it offers almost no mechanical protection, which is why it is never found at surfaces exposed to abrasion.",
    choices: [
      { text: "A single flattened layer minimises diffusion distance for exchange", isCorrect: true },
      { text: "It provides the strongest mechanical protection available", isCorrect: false },
      { text: "It secretes large volumes of mucus", isCorrect: false },
      { text: "It absorbs nutrients most efficiently", isCorrect: false },
    ],
  },
  {
    stem: "What distinguishes transitional epithelium (urothelium) from other stratified epithelia?",
    topic: "Epithelium",
    explanation:
      "Its surface dome-shaped cells flatten as the organ distends, so the epithelium changes apparent thickness with filling. Combined with tight junctions and specialised surface plaques, this lets the bladder stretch substantially while remaining impermeable to urine — an essential barrier, since urine is hypertonic and toxic to underlying tissue.",
    choices: [
      { text: "Its surface cells flatten on distension, allowing stretch while staying impermeable", isCorrect: true },
      { text: "It is only one cell layer thick", isCorrect: false },
      { text: "It is always heavily keratinised", isCorrect: false },
      { text: "It possesses motile cilia on the surface", isCorrect: false },
    ],
  },
  {
    stem: "What is the functional purpose of microvilli on intestinal epithelium?",
    topic: "Epithelium",
    explanation:
      "They vastly increase apical surface area for absorption, appearing under the light microscope as the brush border. They are non-motile actin-cored projections — unlike cilia, which are motile and built on a microtubule axoneme. Confusing the two is a common error with quite different functional implications.",
    choices: [
      { text: "Greatly increasing absorptive surface area", isCorrect: true },
      { text: "Propelling contents along by beating", isCorrect: false },
      { text: "Secreting digestive enzymes into the lumen", isCorrect: false },
      { text: "Anchoring cells to the basement membrane", isCorrect: false },
    ],
  },
  {
    stem: "Which junction forms the impermeable seal between adjacent epithelial cells?",
    topic: "Epithelium",
    explanation:
      "The tight junction, or zonula occludens, which encircles the apical cell and prevents material passing between cells. It is what forces substances to cross THROUGH cells and so be selectively transported, and it also maintains apical-basal polarity by preventing membrane proteins drifting between domains.",
    choices: [
      { text: "Tight junction (zonula occludens)", isCorrect: true },
      { text: "Desmosome", isCorrect: false },
      { text: "Gap junction", isCorrect: false },
      { text: "Hemidesmosome", isCorrect: false },
    ],
  },
  {
    stem: "What is the role of gap junctions?",
    topic: "Epithelium",
    explanation:
      "They form channels allowing ions and small molecules to pass directly between adjacent cells, coupling them electrically and metabolically. This is why cardiac muscle contracts as a functional unit and why smooth muscle in the gut behaves as a syncytium — signal spreads without a synapse.",
    choices: [
      { text: "Direct passage of ions and small molecules between cells", isCorrect: true },
      { text: "Mechanical anchoring against shearing forces", isCorrect: false },
      { text: "Sealing the intercellular space completely", isCorrect: false },
      { text: "Attaching cells to the extracellular matrix", isCorrect: false },
    ],
  },
  {
    stem: "What does the basement membrane separate, and why does that matter in cancer?",
    topic: "Epithelium",
    explanation:
      "It separates epithelium from underlying connective tissue. Its integrity is the histological line between carcinoma in situ and invasive carcinoma — a tumour that has not breached it cannot yet reach vessels and metastasise. This single structure therefore carries much of the prognostic weight in an early cancer biopsy.",
    choices: [
      { text: "Epithelium from connective tissue — breaching it defines invasion", isCorrect: true },
      { text: "Two epithelial layers from each other", isCorrect: false },
      { text: "Muscle from bone, with no cancer relevance", isCorrect: false },
      { text: "Nothing structural; it is an artefact of staining", isCorrect: false },
    ],
  },

  /* ---- Connective Tissue ---- */
  {
    stem: "Which cell produces the collagen and ground substance of ordinary connective tissue?",
    topic: "Connective Tissue",
    explanation:
      "The fibroblast. It synthesises collagen, elastin and the proteoglycans of the ground substance, and it is the cell that proliferates during wound healing to lay down scar. Its activity explains both successful repair and pathological fibrosis — the same process, differing in restraint.",
    choices: [
      { text: "Fibroblast", isCorrect: true },
      { text: "Osteoclast", isCorrect: false },
      { text: "Mast cell", isCorrect: false },
      { text: "Chondrocyte", isCorrect: false },
    ],
  },
  {
    stem: "How does dense regular connective tissue differ from dense irregular, and where is each found?",
    topic: "Connective Tissue",
    explanation:
      "Dense regular has collagen bundles aligned in one direction, giving great tensile strength along a single axis — hence tendons and ligaments. Dense irregular has fibres woven in many directions, resisting force from any angle, which suits the dermis and organ capsules.",
    choices: [
      { text: "Regular has parallel fibres for one-axis strength (tendon); irregular resists force from any direction (dermis)", isCorrect: true },
      { text: "Regular contains no collagen at all", isCorrect: false },
      { text: "Irregular is found only in tendons", isCorrect: false },
      { text: "They are histologically identical", isCorrect: false },
    ],
  },
  {
    stem: "Which type of cartilage is found in the intervertebral discs and pubic symphysis?",
    topic: "Connective Tissue",
    explanation:
      "Fibrocartilage, which contains thick type I collagen bundles alongside cartilage matrix and so resists compression and shear. It lacks a perichondrium. Hyaline cartilage covers articular surfaces, and elastic cartilage — rich in elastic fibres — forms the epiglottis and external ear.",
    choices: [
      { text: "Fibrocartilage", isCorrect: true },
      { text: "Hyaline cartilage", isCorrect: false },
      { text: "Elastic cartilage", isCorrect: false },
      { text: "Osteoid", isCorrect: false },
    ],
  },
  {
    stem: "Why does cartilage heal poorly after injury?",
    topic: "Connective Tissue",
    explanation:
      "It is avascular, receiving nutrients only by diffusion through the matrix from the perichondrium or synovial fluid. Without a blood supply there is no inflammatory influx and little cellular reinforcement, so repair is slow and often incomplete — which underlies the persistence of articular cartilage damage.",
    choices: [
      { text: "It is avascular and depends on diffusion for nutrition", isCorrect: true },
      { text: "It contains no cells whatsoever", isCorrect: false },
      { text: "It is continuously replaced by bone instead", isCorrect: false },
      { text: "Its cells cannot divide at any stage of life", isCorrect: false },
    ],
  },
  {
    stem: "What is the structural unit of compact bone, and what runs at its centre?",
    topic: "Connective Tissue",
    explanation:
      "The osteon, or Haversian system — concentric lamellae of bone around a central canal carrying blood vessels and nerves. Osteocytes sit in lacunae between lamellae and communicate through canaliculi, which is how cells embedded in mineralised matrix stay alive and sense mechanical load.",
    choices: [
      { text: "The osteon, with a central Haversian canal carrying vessels", isCorrect: true },
      { text: "The trabecula, with a hollow marrow core", isCorrect: false },
      { text: "The lacuna, containing a chondrocyte", isCorrect: false },
      { text: "The sarcomere, containing actin and myosin", isCorrect: false },
    ],
  },
  {
    stem: "Which cell resorbs bone, and what is distinctive about its appearance?",
    topic: "Connective Tissue",
    explanation:
      "The osteoclast — large and multinucleated, derived from the monocyte-macrophage lineage rather than from osteoblasts. It sits in a resorption bay and secretes acid and enzymes across a ruffled border. Drugs that treat osteoporosis largely work by suppressing exactly this cell.",
    choices: [
      { text: "Osteoclast — large and multinucleated, from the monocyte lineage", isCorrect: true },
      { text: "Osteoblast — small and mononuclear", isCorrect: false },
      { text: "Osteocyte — trapped within lacunae", isCorrect: false },
      { text: "Fibroblast — spindle-shaped", isCorrect: false },
    ],
  },

  /* ---- Muscle Tissue ---- */
  {
    stem: "What histological feature distinguishes cardiac muscle from skeletal muscle?",
    topic: "Muscle Tissue",
    explanation:
      "Intercalated discs, together with branching fibres and a single central nucleus per cell. Skeletal fibres are unbranched with many peripheral nuclei. The discs contain desmosomes for mechanical coupling and gap junctions for electrical coupling — the structural reason the heart contracts as a unit.",
    choices: [
      { text: "Intercalated discs, branching fibres and central nuclei", isCorrect: true },
      { text: "Absence of any cross-striations", isCorrect: false },
      { text: "Multiple peripheral nuclei per fibre", isCorrect: false },
      { text: "Complete absence of mitochondria", isCorrect: false },
    ],
  },
  {
    stem: "Why does smooth muscle lack visible striations?",
    topic: "Muscle Tissue",
    explanation:
      "Its actin and myosin are not arranged in aligned sarcomeres but anchored obliquely to dense bodies throughout the cell. Contraction still uses the sliding filament mechanism, but without the regular register that produces banding — and the oblique arrangement allows a much greater degree of shortening.",
    choices: [
      { text: "Its filaments attach to dense bodies rather than aligned sarcomeres", isCorrect: true },
      { text: "It contains no actin or myosin", isCorrect: false },
      { text: "It has no contractile function at all", isCorrect: false },
      { text: "Its nuclei obscure the striations", isCorrect: false },
    ],
  },
  {
    stem: "What defines a sarcomere?",
    topic: "Muscle Tissue",
    explanation:
      "The segment between two Z lines — the functional contractile unit. During contraction the A band stays constant in length while the I band and H zone shorten, because the filaments slide past one another rather than shortening themselves. That observation is the whole evidence for the sliding filament model.",
    choices: [
      { text: "The region between two Z lines", isCorrect: true },
      { text: "The region between two A bands", isCorrect: false },
      { text: "A single myosin molecule", isCorrect: false },
      { text: "The junction between two muscle fibres", isCorrect: false },
    ],
  },
  {
    stem: "What is the role of satellite cells in skeletal muscle?",
    topic: "Muscle Tissue",
    explanation:
      "They are quiescent progenitor cells lying beneath the basal lamina that activate after injury to repair or replace fibres. Because mature skeletal muscle fibres are post-mitotic, essentially all regenerative capacity depends on this population — and its decline contributes to age-related loss of muscle.",
    choices: [
      { text: "Quiescent progenitors that regenerate muscle after injury", isCorrect: true },
      { text: "Cells that transmit the nerve impulse to the fibre", isCorrect: false },
      { text: "Phagocytes clearing debris only", isCorrect: false },
      { text: "The contractile units of smooth muscle", isCorrect: false },
    ],
  },
  {
    stem: "Which connective tissue layer surrounds an individual skeletal muscle fibre?",
    topic: "Muscle Tissue",
    explanation:
      "The endomysium. Perimysium surrounds a fascicle — a bundle of fibres — and epimysium invests the whole muscle. These sheaths are continuous with the tendon, which is how the force generated by individual fibres is transmitted collectively to bone.",
    choices: [
      { text: "Endomysium", isCorrect: true },
      { text: "Perimysium", isCorrect: false },
      { text: "Epimysium", isCorrect: false },
      { text: "Periosteum", isCorrect: false },
    ],
  },

  /* ---- Nervous Tissue ---- */
  {
    stem: "Which glial cell myelinates axons in the central nervous system?",
    topic: "Nervous Tissue",
    explanation:
      "The oligodendrocyte, and unlike the Schwann cell of the periphery it myelinates segments of several axons at once. This difference matters clinically: central demyelination as in multiple sclerosis remyelinates poorly, whereas peripheral nerves, supported by Schwann cells and intact basal lamina tubes, regenerate comparatively well.",
    choices: [
      { text: "Oligodendrocyte", isCorrect: true },
      { text: "Schwann cell", isCorrect: false },
      { text: "Astrocyte", isCorrect: false },
      { text: "Microglial cell", isCorrect: false },
    ],
  },
  {
    stem: "What is the principal function of astrocytes?",
    topic: "Nervous Tissue",
    explanation:
      "Structural and metabolic support — contributing end-feet to the blood-brain barrier, buffering extracellular potassium, recycling neurotransmitter and forming glial scar after injury. They are the most numerous glial cell, and that scar is one reason central nervous system injury repairs so poorly.",
    choices: [
      { text: "Metabolic and structural support, including blood-brain barrier end-feet", isCorrect: true },
      { text: "Myelination of central axons", isCorrect: false },
      { text: "Phagocytosis as the resident immune cell", isCorrect: false },
      { text: "Production of cerebrospinal fluid", isCorrect: false },
    ],
  },
  {
    stem: "Which cell is the resident immune cell of the central nervous system?",
    topic: "Nervous Tissue",
    explanation:
      "Microglia, which are of mesodermal rather than neuroectodermal origin — unusual among neural cells. They survey the parenchyma continuously and become phagocytic on injury or infection, and their sustained activation is implicated in chronic neurodegeneration.",
    choices: [
      { text: "Microglia", isCorrect: true },
      { text: "Astrocytes", isCorrect: false },
      { text: "Ependymal cells", isCorrect: false },
      { text: "Oligodendrocytes", isCorrect: false },
    ],
  },
  {
    stem: "What produces cerebrospinal fluid, and which cells line the ventricles?",
    topic: "Nervous Tissue",
    explanation:
      "The choroid plexus produces it, and ependymal cells — ciliated columnar epithelium — line the ventricular system and central canal. Their cilia help circulate the fluid, and obstruction anywhere along this pathway produces hydrocephalus.",
    choices: [
      { text: "Choroid plexus produces it; ependymal cells line the ventricles", isCorrect: true },
      { text: "Astrocytes produce it; microglia line the ventricles", isCorrect: false },
      { text: "The arachnoid produces it; neurons line the ventricles", isCorrect: false },
      { text: "It is filtered directly from blood by capillaries alone", isCorrect: false },
    ],
  },
  {
    stem: "What is the functional significance of nodes of Ranvier?",
    topic: "Nervous Tissue",
    explanation:
      "They are gaps in the myelin sheath where voltage-gated sodium channels cluster, allowing the impulse to jump from node to node. This saltatory conduction is dramatically faster and more energy-efficient than continuous conduction — which is why demyelination slows or blocks transmission even with the axon intact.",
    choices: [
      { text: "They allow saltatory conduction, greatly increasing impulse speed", isCorrect: true },
      { text: "They are sites of synaptic transmission", isCorrect: false },
      { text: "They slow conduction to protect the neuron", isCorrect: false },
      { text: "They are where neurotransmitter is synthesised", isCorrect: false },
    ],
  },
  {
    stem: "What is Nissl substance, and what does its loss indicate?",
    topic: "Nervous Tissue",
    explanation:
      "Rough endoplasmic reticulum and free ribosomes in the neuronal cell body, staining basophilic. Its dispersal — chromatolysis — indicates axonal injury, as the cell reorganises for repair. It is therefore a histological marker that something has happened to the axon some distance away.",
    choices: [
      { text: "Rough ER and ribosomes; its dispersal indicates axonal injury", isCorrect: true },
      { text: "Stored neurotransmitter; its loss indicates ageing", isCorrect: false },
      { text: "Myelin fragments; their loss is normal", isCorrect: false },
      { text: "Lipofuscin pigment with no clinical meaning", isCorrect: false },
    ],
  },

  /* ---- Blood & Bone Marrow ---- */
  {
    stem: "Which leucocyte is most numerous in normal adult peripheral blood?",
    topic: "Blood & Bone Marrow",
    explanation:
      "The neutrophil, typically 40 to 70 percent of the differential, recognisable by its multilobed nucleus and pale granules. It dominates the response to acute bacterial infection — which is why a neutrophilia with left shift points that way, and why neutropenia is the deficit that most reliably predicts serious infection.",
    choices: [
      { text: "Neutrophil", isCorrect: true },
      { text: "Lymphocyte", isCorrect: false },
      { text: "Monocyte", isCorrect: false },
      { text: "Eosinophil", isCorrect: false },
    ],
  },
  {
    stem: "Which cell fragments to produce platelets?",
    topic: "Blood & Bone Marrow",
    explanation:
      "The megakaryocyte — a very large polyploid marrow cell that sheds cytoplasmic fragments into sinusoids. Because platelets are fragments rather than cells they have no nucleus and cannot synthesise new protein, which is why aspirin's inhibition of their cyclo-oxygenase lasts the platelet's entire lifespan.",
    choices: [
      { text: "Megakaryocyte", isCorrect: true },
      { text: "Monocyte", isCorrect: false },
      { text: "Reticulocyte", isCorrect: false },
      { text: "Plasma cell", isCorrect: false },
    ],
  },
  {
    stem: "Why does the mature human red cell lack a nucleus and mitochondria?",
    topic: "Blood & Bone Marrow",
    explanation:
      "Extruding them maximises space for haemoglobin and produces the flexible biconcave disc that squeezes through capillaries. The cost is no protein synthesis and no oxidative phosphorylation, so the cell depends entirely on glycolysis and cannot repair itself — hence its limited lifespan of about 120 days.",
    choices: [
      { text: "To maximise haemoglobin content and deformability", isCorrect: true },
      { text: "To allow it to divide more rapidly", isCorrect: false },
      { text: "To let it carry out oxidative phosphorylation", isCorrect: false },
      { text: "To enable it to synthesise antibodies", isCorrect: false },
    ],
  },
  {
    stem: "What does a raised reticulocyte count indicate?",
    topic: "Blood & Bone Marrow",
    explanation:
      "Active marrow response — reticulocytes are immature red cells retaining residual RNA, so their number reflects the rate of erythropoiesis. A high count in anaemia points to haemolysis or blood loss with an intact marrow; a low count in anaemia points to a marrow that is failing or lacking substrate.",
    choices: [
      { text: "An active marrow response, as in haemolysis or blood loss", isCorrect: true },
      { text: "Marrow failure", isCorrect: false },
      { text: "Iron deficiency specifically", isCorrect: false },
      { text: "An acute bacterial infection", isCorrect: false },
    ],
  },
  {
    stem: "Which cell secretes antibody, and how is it recognised histologically?",
    topic: "Blood & Bone Marrow",
    explanation:
      "The plasma cell, distinguished by an eccentric clock-face nucleus, abundant basophilic cytoplasm and a pale perinuclear Golgi zone. That morphology directly reflects its function: the cytoplasm is packed with rough endoplasmic reticulum devoted to immunoglobulin synthesis.",
    choices: [
      { text: "Plasma cell — eccentric clock-face nucleus with basophilic cytoplasm", isCorrect: true },
      { text: "Neutrophil — multilobed nucleus", isCorrect: false },
      { text: "Megakaryocyte — very large and polyploid", isCorrect: false },
      { text: "Mast cell — filled with metachromatic granules", isCorrect: false },
    ],
  },
  {
    stem: "Where does haematopoiesis occur in a healthy adult?",
    topic: "Blood & Bone Marrow",
    explanation:
      "In the red marrow of axial bones — vertebrae, sternum, ribs, pelvis — and the proximal femora. In the fetus it occurs in yolk sac, then liver and spleen; reversion to hepatic and splenic production in an adult is extramedullary haematopoiesis and signals that the marrow is failing or infiltrated.",
    choices: [
      { text: "Red marrow of the axial skeleton and proximal long bones", isCorrect: true },
      { text: "The liver and spleen, normally", isCorrect: false },
      { text: "The thymus exclusively", isCorrect: false },
      { text: "The peripheral circulation itself", isCorrect: false },
    ],
  },
];

/* ═══════════════ PRACTICE SET 2 ═══════════════ */

const SET2: Q[] = [
  /* ---- Cardiovascular & Lymphoid ---- */
  {
    stem: "Which layer of an artery wall is most responsible for its elasticity and strength?",
    topic: "Cardiovascular & Lymphoid",
    explanation:
      "The tunica media, containing smooth muscle and elastic laminae. It is thickest in large elastic arteries, where recoil during diastole maintains forward flow. Veins have a much thinner media, which is why they collapse when empty and depend on valves and surrounding muscle for return.",
    choices: [
      { text: "Tunica media", isCorrect: true },
      { text: "Tunica intima", isCorrect: false },
      { text: "Tunica adventitia", isCorrect: false },
      { text: "The endothelium alone", isCorrect: false },
    ],
  },
  {
    stem: "What distinguishes a fenestrated capillary from a continuous one, and where is each found?",
    topic: "Cardiovascular & Lymphoid",
    explanation:
      "Fenestrated capillaries have pores in the endothelium permitting rapid exchange of water and small solutes, suiting the renal glomerulus, gut mucosa and endocrine glands. Continuous capillaries have unbroken endothelium with tight junctions and are found in muscle and, most restrictively, the brain.",
    choices: [
      { text: "Fenestrated have endothelial pores for rapid exchange — kidney, gut, endocrine glands", isCorrect: true },
      { text: "Fenestrated capillaries have no endothelium at all", isCorrect: false },
      { text: "Continuous capillaries are found only in the kidney", isCorrect: false },
      { text: "There is no functional difference between them", isCorrect: false },
    ],
  },
  {
    stem: "Which region of a lymph node contains germinal centres, and what happens there?",
    topic: "Cardiovascular & Lymphoid",
    explanation:
      "The cortex, within lymphoid follicles. Germinal centres are sites of B cell proliferation, somatic hypermutation and affinity maturation — so their prominence indicates an active humoral response. T cells occupy the paracortex, and plasma cells accumulate in the medullary cords.",
    choices: [
      { text: "The cortex — B cell proliferation and affinity maturation", isCorrect: true },
      { text: "The medulla — T cell maturation", isCorrect: false },
      { text: "The paracortex — antibody secretion", isCorrect: false },
      { text: "The capsule — antigen filtration", isCorrect: false },
    ],
  },
  {
    stem: "What is the functional difference between red and white pulp in the spleen?",
    topic: "Cardiovascular & Lymphoid",
    explanation:
      "Red pulp filters blood and removes aged or abnormal red cells; white pulp is lymphoid tissue mounting immune responses to blood-borne antigen. Loss of the organ therefore impairs both — which is why the asplenic patient is especially vulnerable to encapsulated bacteria and needs specific vaccination.",
    choices: [
      { text: "Red pulp filters and removes old red cells; white pulp is lymphoid tissue", isCorrect: true },
      { text: "Red pulp makes antibody; white pulp stores iron", isCorrect: false },
      { text: "Both perform identical filtration", isCorrect: false },
      { text: "White pulp destroys platelets; red pulp makes them", isCorrect: false },
    ],
  },
  {
    stem: "What occurs in the thymus, and what happens to it with age?",
    topic: "Cardiovascular & Lymphoid",
    explanation:
      "T lymphocytes mature there, undergoing positive and negative selection so that self-reactive clones are deleted — the basis of central tolerance. It is largest in childhood and involutes progressively after puberty, being gradually replaced by adipose tissue. Hassall's corpuscles in the medulla are its histological signature.",
    choices: [
      { text: "T cell maturation and selection; it involutes and becomes fatty after puberty", isCorrect: true },
      { text: "B cell maturation; it enlarges throughout life", isCorrect: false },
      { text: "Red cell production; it persists unchanged", isCorrect: false },
      { text: "Antibody secretion; it disappears entirely before birth", isCorrect: false },
    ],
  },
  {
    stem: "How do lymphatic capillaries differ structurally from blood capillaries?",
    topic: "Cardiovascular & Lymphoid",
    explanation:
      "They begin blind-ended, have overlapping endothelial cells acting as one-way flaps, and lack a continuous basement membrane. That architecture lets interstitial fluid and even cells enter easily but not leave — which is also why tumour cells access the lymphatics so readily.",
    choices: [
      { text: "Blind-ended with overlapping flap-like endothelium and no continuous basement membrane", isCorrect: true },
      { text: "They form a closed loop with arterioles", isCorrect: false },
      { text: "They have a thicker muscular wall", isCorrect: false },
      { text: "They are lined by stratified squamous epithelium", isCorrect: false },
    ],
  },

  /* ---- Respiratory & Digestive ---- */
  {
    stem: "Which cell produces pulmonary surfactant?",
    topic: "Respiratory & Digestive",
    explanation:
      "The type II pneumocyte, a rounded cell with lamellar bodies. It is also the progenitor that regenerates the alveolar lining after injury. Type I pneumocytes are the thin cells covering most of the alveolar surface where gas exchange actually happens, but they cannot divide.",
    choices: [
      { text: "Type II pneumocyte", isCorrect: true },
      { text: "Type I pneumocyte", isCorrect: false },
      { text: "Alveolar macrophage", isCorrect: false },
      { text: "Goblet cell", isCorrect: false },
    ],
  },
  {
    stem: "At what level does cartilage disappear from the airway wall, and why does that matter?",
    topic: "Respiratory & Digestive",
    explanation:
      "Bronchioles have no cartilage, relying instead on radial traction from surrounding lung tissue to stay open. That is why they collapse during forced expiration in emphysema, where the tethering tissue is destroyed — producing air trapping despite no obstruction within the lumen itself.",
    choices: [
      { text: "At the bronchioles, which stay open only by radial traction from surrounding tissue", isCorrect: true },
      { text: "At the trachea, which has no cartilage", isCorrect: false },
      { text: "Cartilage extends all the way to the alveoli", isCorrect: false },
      { text: "Only the larynx contains cartilage", isCorrect: false },
    ],
  },
  {
    stem: "Which four layers make up the wall of the gastrointestinal tract, from lumen outward?",
    topic: "Respiratory & Digestive",
    explanation:
      "Mucosa, submucosa, muscularis externa and serosa or adventitia. This plan holds from oesophagus to anus with regional modification, which makes it a reliable framework for interpreting any gut histology slide — identify the layers first, then look at what varies.",
    choices: [
      { text: "Mucosa, submucosa, muscularis externa, serosa/adventitia", isCorrect: true },
      { text: "Epidermis, dermis, hypodermis, fascia", isCorrect: false },
      { text: "Intima, media, adventitia, endothelium", isCorrect: false },
      { text: "Cortex, medulla, hilum, capsule", isCorrect: false },
    ],
  },
  {
    stem: "What is the abrupt epithelial change at the gastro-oesophageal junction, and why is it clinically important?",
    topic: "Respiratory & Digestive",
    explanation:
      "Stratified squamous epithelium of the oesophagus meets simple columnar of the stomach. Chronic acid reflux can drive metaplasia of squamous to intestinal-type columnar epithelium — Barrett's oesophagus — which carries an increased risk of adenocarcinoma and is why this junction is biopsied.",
    choices: [
      { text: "Stratified squamous to simple columnar; metaplasia here is Barrett's oesophagus", isCorrect: true },
      { text: "Simple columnar to transitional epithelium", isCorrect: false },
      { text: "There is no epithelial change at this point", isCorrect: false },
      { text: "Keratinised to non-keratinised squamous only", isCorrect: false },
    ],
  },
  {
    stem: "Which gastric cell secretes hydrochloric acid and intrinsic factor?",
    topic: "Respiratory & Digestive",
    explanation:
      "The parietal (oxyntic) cell, strongly eosinophilic with abundant mitochondria. Because it makes intrinsic factor as well as acid, autoimmune destruction of parietal cells causes both achlorhydria and vitamin B12 malabsorption — the mechanism of pernicious anaemia. Chief cells secrete pepsinogen.",
    choices: [
      { text: "Parietal cell", isCorrect: true },
      { text: "Chief cell", isCorrect: false },
      { text: "Goblet cell", isCorrect: false },
      { text: "Enteroendocrine G cell", isCorrect: false },
    ],
  },
  {
    stem: "Which features maximise absorptive surface area in the small intestine?",
    topic: "Respiratory & Digestive",
    explanation:
      "Plicae circulares, villi and microvilli acting together, amplifying the surface several hundredfold. Loss of villi — as in coeliac disease, where they flatten — causes malabsorption precisely because that amplification collapses, and villous height is what the biopsy is assessing.",
    choices: [
      { text: "Plicae circulares, villi and microvilli in combination", isCorrect: true },
      { text: "Gastric rugae alone", isCorrect: false },
      { text: "Haustra of the colon", isCorrect: false },
      { text: "Peyer's patches only", isCorrect: false },
    ],
  },
  {
    stem: "How does colonic mucosa differ from that of the small intestine?",
    topic: "Respiratory & Digestive",
    explanation:
      "The colon has no villi — a flat surface with straight tubular crypts and abundant goblet cells. That reflects its role: water absorption and lubrication of increasingly solid contents rather than nutrient uptake. Absence of villi is the quickest way to identify colon on a slide.",
    choices: [
      { text: "No villi; flat surface with straight crypts and many goblet cells", isCorrect: true },
      { text: "Taller villi than the small intestine", isCorrect: false },
      { text: "Stratified squamous epithelium throughout", isCorrect: false },
      { text: "Complete absence of goblet cells", isCorrect: false },
    ],
  },

  /* ---- Liver, Pancreas & Kidney ---- */
  {
    stem: "What three structures make up the hepatic portal triad?",
    topic: "Liver, Pancreas & Kidney",
    explanation:
      "A branch of the hepatic portal vein, a branch of the hepatic artery, and a bile duct — plus lymphatics. Blood flows from the triad at the periphery towards the central vein, while bile flows the opposite way, which is why zone 3 nearest the central vein is most vulnerable to hypoxic injury.",
    choices: [
      { text: "Portal vein branch, hepatic artery branch and bile duct", isCorrect: true },
      { text: "Central vein, sinusoid and canaliculus", isCorrect: false },
      { text: "Two hepatic veins and a lymphatic", isCorrect: false },
      { text: "Hepatocyte, Kupffer cell and stellate cell", isCorrect: false },
    ],
  },
  {
    stem: "What is the function of Kupffer cells?",
    topic: "Liver, Pancreas & Kidney",
    explanation:
      "They are the resident macrophages of the hepatic sinusoids, clearing bacteria and debris arriving from the gut via portal blood and phagocytosing senescent red cells. Positioned at the first vascular bed after the intestine, they are a major line of defence against gut-derived organisms.",
    choices: [
      { text: "Resident sinusoidal macrophages clearing gut-derived bacteria and old red cells", isCorrect: true },
      { text: "Bile secretion into canaliculi", isCorrect: false },
      { text: "Storage of vitamin A in the space of Disse", isCorrect: false },
      { text: "Synthesis of plasma albumin", isCorrect: false },
    ],
  },
  {
    stem: "Which pancreatic structure is endocrine, and what does it secrete?",
    topic: "Liver, Pancreas & Kidney",
    explanation:
      "The islets of Langerhans — pale-staining clusters scattered among the darker exocrine acini — secreting insulin from beta cells, glucagon from alpha cells and somatostatin from delta cells. The exocrine acini secrete digestive enzymes into ducts, an entirely separate route.",
    choices: [
      { text: "Islets of Langerhans, secreting insulin, glucagon and somatostatin", isCorrect: true },
      { text: "Acini, secreting insulin into ducts", isCorrect: false },
      { text: "Centroacinar cells, secreting glucagon", isCorrect: false },
      { text: "Ducts, secreting digestive enzymes into blood", isCorrect: false },
    ],
  },
  {
    stem: "What are podocytes, and what is their role?",
    topic: "Liver, Pancreas & Kidney",
    explanation:
      "Specialised visceral epithelial cells wrapping glomerular capillaries with interdigitating foot processes; the slit diaphragms between them form the final size- and charge-selective barrier. Foot process effacement is the characteristic finding in minimal change disease and explains the heavy proteinuria.",
    choices: [
      { text: "Epithelial cells whose foot processes and slit diaphragms form the filtration barrier", isCorrect: true },
      { text: "Endothelial cells of the efferent arteriole", isCorrect: false },
      { text: "Cells secreting renin into the bloodstream", isCorrect: false },
      { text: "Macrophages of the renal medulla", isCorrect: false },
    ],
  },
  {
    stem: "Which nephron segment has a prominent brush border, and what does that indicate?",
    topic: "Liver, Pancreas & Kidney",
    explanation:
      "The proximal convoluted tubule, whose dense microvilli reflect its role in bulk reabsorption of most filtered water, sodium, glucose and amino acids. Its high metabolic demand also makes it the segment most susceptible to ischaemic and toxic injury in acute tubular necrosis.",
    choices: [
      { text: "Proximal convoluted tubule — the site of bulk reabsorption", isCorrect: true },
      { text: "Distal convoluted tubule", isCorrect: false },
      { text: "Collecting duct", isCorrect: false },
      { text: "Thin descending limb of the loop of Henle", isCorrect: false },
    ],
  },
  {
    stem: "What is the juxtaglomerular apparatus, and what does it do?",
    topic: "Liver, Pancreas & Kidney",
    explanation:
      "The macula densa of the distal tubule together with juxtaglomerular granular cells of the afferent arteriole. It senses distal sodium delivery and adjusts renin release and afferent arteriolar tone — the structural basis of tubuloglomerular feedback and of blood pressure regulation by the kidney.",
    choices: [
      { text: "Macula densa plus granular cells, sensing sodium and controlling renin release", isCorrect: true },
      { text: "A cluster of podocytes filtering plasma", isCorrect: false },
      { text: "The collecting duct's response to aldosterone", isCorrect: false },
      { text: "A capillary network with no regulatory role", isCorrect: false },
    ],
  },

  /* ---- Endocrine & Reproductive ---- */
  {
    stem: "How does the anterior pituitary differ in origin and structure from the posterior?",
    topic: "Endocrine & Reproductive",
    explanation:
      "The anterior lobe is glandular epithelium derived from Rathke's pouch and synthesises its own hormones; the posterior lobe is neural tissue, essentially axon terminals of hypothalamic neurons storing and releasing hormones made elsewhere. That is why the posterior lobe contains no secretory glandular cells.",
    choices: [
      { text: "Anterior is glandular epithelium making its own hormones; posterior is neural tissue releasing hypothalamic hormones", isCorrect: true },
      { text: "Both are glandular and synthesise their own hormones", isCorrect: false },
      { text: "Anterior is neural, posterior is glandular", isCorrect: false },
      { text: "Both are derived from neural crest", isCorrect: false },
    ],
  },
  {
    stem: "Which thyroid cell secretes calcitonin?",
    topic: "Endocrine & Reproductive",
    explanation:
      "The parafollicular or C cell, lying between follicles rather than lining them. Follicular cells produce thyroid hormone and store it as colloid. This distinction matters because medullary thyroid carcinoma arises from C cells and is monitored by calcitonin rather than thyroid function tests.",
    choices: [
      { text: "Parafollicular (C) cell", isCorrect: true },
      { text: "Follicular cell", isCorrect: false },
      { text: "Chief cell of the parathyroid", isCorrect: false },
      { text: "Oxyphil cell", isCorrect: false },
    ],
  },
  {
    stem: "Which adrenal cortical zone produces aldosterone?",
    topic: "Endocrine & Reproductive",
    explanation:
      "The zona glomerulosa, the outermost layer. Fasciculata produces cortisol and reticularis the adrenal androgens; the medulla, of neural crest origin, produces catecholamines. The layered arrangement makes the adrenal one of the more readable endocrine slides.",
    choices: [
      { text: "Zona glomerulosa", isCorrect: true },
      { text: "Zona fasciculata", isCorrect: false },
      { text: "Zona reticularis", isCorrect: false },
      { text: "The medulla", isCorrect: false },
    ],
  },
  {
    stem: "Which testicular cells support developing sperm and form the blood-testis barrier?",
    topic: "Endocrine & Reproductive",
    explanation:
      "Sertoli cells, joined by tight junctions within the seminiferous tubules. The barrier they create isolates developing germ cells — necessary because those cells express antigens the immune system never learned to tolerate. Leydig cells lie outside the tubules and secrete testosterone.",
    choices: [
      { text: "Sertoli cells", isCorrect: true },
      { text: "Leydig cells", isCorrect: false },
      { text: "Spermatogonia", isCorrect: false },
      { text: "Myoid cells", isCorrect: false },
    ],
  },
  {
    stem: "What becomes of the ovarian follicle after ovulation?",
    topic: "Endocrine & Reproductive",
    explanation:
      "It becomes the corpus luteum, secreting progesterone to sustain the endometrium. Without implantation it regresses into the fibrous corpus albicans and progesterone falls, triggering menstruation. The whole sequence is visible histologically as distinct, datable structures.",
    choices: [
      { text: "The corpus luteum, which secretes progesterone then regresses to corpus albicans", isCorrect: true },
      { text: "A primordial follicle again", isCorrect: false },
      { text: "It is shed intact with the ovum", isCorrect: false },
      { text: "It becomes permanent glandular tissue", isCorrect: false },
    ],
  },
  {
    stem: "How does the endometrium change between the proliferative and secretory phases?",
    topic: "Endocrine & Reproductive",
    explanation:
      "In the proliferative phase, oestrogen drives regrowth with straight tubular glands. After ovulation, progesterone converts the glands to a tortuous, coiled form with secretory activity and spiral arteries — the appearance that lets a pathologist date an endometrial biopsy within the cycle.",
    choices: [
      { text: "Straight glands under oestrogen become coiled and secretory under progesterone", isCorrect: true },
      { text: "Glands disappear entirely in the secretory phase", isCorrect: false },
      { text: "The epithelium becomes stratified squamous", isCorrect: false },
      { text: "There is no histological difference between phases", isCorrect: false },
    ],
  },

  /* ---- Microscopy & Technique ---- */
  {
    stem: "In a routine H&E section, what do haematoxylin and eosin each stain?",
    topic: "Microscopy & Technique",
    explanation:
      "Haematoxylin is basic and binds acidic structures — chiefly nuclear DNA and ribosomal RNA — staining them blue-purple. Eosin is acidic and binds basic proteins in cytoplasm and collagen, staining them pink. Everything described as basophilic or eosinophilic refers to this pairing.",
    choices: [
      { text: "Haematoxylin stains acidic structures such as nuclei blue; eosin stains cytoplasm pink", isCorrect: true },
      { text: "Haematoxylin stains fat; eosin stains carbohydrate", isCorrect: false },
      { text: "Both stain only the nucleus", isCorrect: false },
      { text: "Haematoxylin stains cytoplasm pink; eosin stains nuclei blue", isCorrect: false },
    ],
  },
  {
    stem: "What does the periodic acid-Schiff (PAS) stain demonstrate?",
    topic: "Microscopy & Technique",
    explanation:
      "Carbohydrate-rich structures — glycogen, mucin, basement membranes and fungal cell walls — staining magenta. It is therefore useful for demonstrating glomerular basement membrane thickening and for identifying fungi in tissue, where an H&E alone may show very little.",
    choices: [
      { text: "Carbohydrate-rich material: glycogen, mucin, basement membrane, fungal walls", isCorrect: true },
      { text: "Iron deposits in tissue", isCorrect: false },
      { text: "Elastic fibres exclusively", isCorrect: false },
      { text: "Acid-fast bacilli", isCorrect: false },
    ],
  },
  {
    stem: "Why is tissue fixed in formalin before sectioning?",
    topic: "Microscopy & Technique",
    explanation:
      "To cross-link proteins, halting autolysis and bacterial decomposition while preserving architecture. Delayed or inadequate fixation produces artefact that can mimic or obscure disease — which is why specimen handling in theatre affects what the pathologist can report.",
    choices: [
      { text: "To cross-link proteins, preventing autolysis and preserving architecture", isCorrect: true },
      { text: "To dissolve unwanted lipid from the specimen", isCorrect: false },
      { text: "To stain the nuclei before embedding", isCorrect: false },
      { text: "To soften the tissue for easier cutting", isCorrect: false },
    ],
  },
  {
    stem: "What does immunohistochemistry add to routine histology?",
    topic: "Microscopy & Technique",
    explanation:
      "It uses labelled antibodies to detect specific proteins, identifying cell lineage or marker expression that morphology alone cannot resolve. This is how an undifferentiated tumour is assigned an origin, and how markers guiding targeted treatment — such as receptor status in breast cancer — are determined.",
    choices: [
      { text: "Antibody-based detection of specific proteins, revealing lineage and treatment targets", isCorrect: true },
      { text: "Higher magnification than light microscopy", isCorrect: false },
      { text: "Detection of DNA sequence mutations directly", isCorrect: false },
      { text: "Live imaging of cells within the patient", isCorrect: false },
    ],
  },
  {
    stem: "When is a frozen section used instead of routine processing?",
    topic: "Microscopy & Technique",
    explanation:
      "Intraoperatively, when a rapid answer changes what the surgeon does next — assessing a margin or confirming a diagnosis within minutes. The trade-off is inferior morphology and freezing artefact, so a frozen section is a provisional answer that the definitive paraffin section later confirms.",
    choices: [
      { text: "During surgery, when a rapid provisional answer guides the operation", isCorrect: true },
      { text: "Whenever the highest quality morphology is required", isCorrect: false },
      { text: "Only for post-mortem specimens", isCorrect: false },
      { text: "When immunohistochemistry is impossible on any other preparation", isCorrect: false },
    ],
  },
];

/* ═══════════════ SEED ═══════════════ */

/** Fisher-Yates. The correct answer is written first above; without this it would insert at position 1 every time. */
function shuffled<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Retries a write when the pooled connection drops. Real errors re-throw at once. */
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
  categorySlug: string;
  slug: string;
  title: string;
  description: string;
  kind: string;
  timeLimitSeconds: number | null;
  difficulty: string;
  questions: Q[];
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
      }),
    `quiz ${o.slug}`
  );

  await withRetry(() => prisma.question.deleteMany({ where: { quizId: quiz.id } }), "clear questions");

  let order = 0;
  for (const q of o.questions) {
    const n = order++;
    const opts = shuffled(q.choices);
    await withRetry(
      () =>
        prisma.question.create({
          data: {
            quizId: quiz.id,
            type: "SINGLE",
            stem: q.stem,
            topic: q.topic,
            explanation: q.explanation,
            points: 1,
            order: n,
            choices: { create: opts.map((c, i) => ({ text: c.text, isCorrect: c.isCorrect, order: i })) },
          },
        }),
      `question ${n + 1} of ${o.title}`
    );
  }

  console.log(`  ✓ ${o.title} — ${o.questions.length} questions (answers shuffled)`);
}

async function main() {
  console.log("Seeding Histology…\n");
  const CAT = "fs-histology";

  await seedSet({
    categorySlug: CAT,
    slug: "histology-practice-set-1",
    title: "Histology — Practice Set 1",
    description:
      "Thirty questions on the four basic tissues: epithelium and its junctions, connective tissue including cartilage and bone, the three muscle types, nervous tissue and glia, and blood and marrow. Untimed, with a full rationale on every question.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Foundational",
    questions: SET1,
  });

  await seedSet({
    categorySlug: CAT,
    slug: "histology-practice-set-2",
    title: "Histology — Practice Set 2",
    description:
      "Thirty fresh questions — no overlap with Set 1 — on organ histology: cardiovascular and lymphoid, respiratory and digestive, liver, pancreas and kidney, endocrine and reproductive, plus stains and laboratory technique. Untimed.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Intermediate",
    questions: SET2,
  });

  await seedSet({
    categorySlug: CAT,
    slug: "histology-exam-1",
    title: "Histology — Timed Exam 1",
    description:
      "Thirty questions in 40 minutes on the four basic tissues. Feedback withheld until you submit.",
    kind: "EXAM",
    timeLimitSeconds: 40 * 60,
    difficulty: "Intermediate",
    questions: SET1,
  });

  await seedSet({
    categorySlug: CAT,
    slug: "histology-exam-2",
    title: "Histology — Timed Exam 2 (Comprehensive)",
    description:
      "All sixty questions in 75 minutes, covering basic tissues and organ histology. Sit this once both practice sets feel comfortable.",
    kind: "EXAM",
    timeLimitSeconds: 75 * 60,
    difficulty: "Advanced",
    questions: [...SET1, ...SET2],
  });

  console.log("\nDone. Editable in Admin → Question Bank.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
