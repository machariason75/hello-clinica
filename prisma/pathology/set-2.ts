/**
 * PATHOLOGY — PRACTICE SET 2
 * Acute & Chronic Inflammation
 *
 * Difficulty: Foundational-Intermediate. One rung harder than Set 1: more
 * multi-step vignettes, more "predict the consequence" stems, more lab data.
 *
 * 96 questions across 12 topics:
 *   Vascular Changes & Edema · Leukocyte Recruitment · Phagocytosis & Killing ·
 *   Vasoactive Amines & Kinins · Arachidonic Acid Metabolites · Complement ·
 *   Cytokines & Acute Phase Response · Outcomes of Acute Inflammation ·
 *   Chronic Inflammation & Macrophages · Granulomatous Inflammation ·
 *   Leukocyte Adhesion & Function Disorders · Inflammatory Marker Interpretation
 *
 * Item mix: 66 single-answer vignettes, 18 select-all-that-apply, 12 true/false.
 * US conventional units throughout.
 */

import type { Q } from "../_lib/qbank";

export const PATHOLOGY_SET_2: Q[] = [
  /* ══════════════ VASCULAR CHANGES & EDEMA ══════════════ */
  {
    stem: "A 28-year-old woman scalds her forearm. Within minutes the area is red, warm and swollen. Which sequence of vascular events produced these three signs?",
    topic: "Vascular Changes & Edema",
    explanation:
      "Transient vasoconstriction is followed rapidly by arteriolar vasodilation, which produces redness and warmth, and then by increased vascular permeability, which produces swelling. Vasodilation alone cannot explain edema — permeability must rise for protein-rich fluid to escape.",
    choices: [
      { text: "Brief vasoconstriction, then vasodilation, then increased permeability", isCorrect: true },
      { text: "Sustained vasoconstriction with reduced capillary hydrostatic pressure" },
      { text: "Vasodilation with intact endothelial barrier function" },
      { text: "Lymphatic dilation preceding any arteriolar change" },
      { text: "Platelet aggregation causing capillary occlusion and stasis" },
    ],
  },
  {
    stem: "A patient has pleural fluid with protein 1.8 g/dL, serum protein 7.0 g/dL, and fluid LDH 90 U/L against serum LDH 350 U/L. Which conclusion follows?",
    topic: "Vascular Changes & Edema",
    explanation:
      "Both ratios fall below the Light criteria thresholds (protein 0.26 and LDH 0.26, versus cutoffs of 0.5 and 0.6), identifying a transudate caused by altered hydrostatic or oncotic pressure rather than inflammation. An exudate would exceed those ratios and would indicate increased vascular permeability.",
    choices: [
      { text: "Transudate — driven by hydrostatic or oncotic imbalance, not inflammation", isCorrect: true },
      { text: "Exudate — driven by increased vascular permeability" },
      { text: "Empyema requiring immediate drainage" },
      { text: "Chylothorax from thoracic duct injury" },
      { text: "Hemothorax from vascular disruption" },
    ],
  },
  {
    stem: "Which of the following mechanisms increase vascular permeability in acute inflammation? Select all that apply.",
    type: "MULTI",
    topic: "Vascular Changes & Edema",
    explanation:
      "Endothelial contraction from histamine and bradykinin, direct endothelial injury from burns or toxins, leukocyte-mediated endothelial damage, and increased transcytosis via VEGF all raise permeability. Increased plasma oncotic pressure and lymphatic hypertrophy would oppose edema rather than cause it.",
    choices: [
      { text: "Histamine-induced endothelial cell contraction with interendothelial gaps", isCorrect: true },
      { text: "Direct endothelial necrosis from a severe thermal burn", isCorrect: true },
      { text: "VEGF-driven increase in transcytosis across endothelium", isCorrect: true },
      { text: "Rise in plasma oncotic pressure" },
      { text: "Hypertrophy of draining lymphatics" },
    ],
  },
  {
    stem: "Immediate transient permeability after a mild injury occurs mainly at which vessel type?",
    topic: "Vascular Changes & Edema",
    explanation:
      "Histamine acts on postcapillary venules, whose endothelial cells carry the receptors and contract to open interendothelial junctions. Arterioles regulate flow rather than leak, and capillary leak in the immediate response is comparatively minor.",
    choices: [
      { text: "Postcapillary venules", isCorrect: true },
      { text: "Terminal arterioles" },
      { text: "Muscular arteries" },
      { text: "Lymphatic capillaries" },
      { text: "Large veins" },
    ],
  },
  {
    stem: "True or False: An exudate has a specific gravity above 1.020 and is rich in protein and cells.",
    type: "TRUE_FALSE",
    topic: "Vascular Changes & Edema",
    explanation:
      "True. Exudates form when permeability rises, allowing protein and cells to escape, giving a high specific gravity. Transudates are protein-poor ultrafiltrates with specific gravity below 1.012.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Following injury, blood flow slows and erythrocytes aggregate. What is the functional purpose of this stasis?",
    topic: "Vascular Changes & Edema",
    explanation:
      "Stasis pushes leukocytes out of the central axial stream toward the endothelium — margination — which is the prerequisite for rolling and adhesion. Without slowed flow, leukocytes cannot make sustained endothelial contact.",
    choices: [
      { text: "It permits leukocyte margination against the endothelium", isCorrect: true },
      { text: "It increases oxygen delivery to injured tissue" },
      { text: "It reduces the concentration of local mediators" },
      { text: "It flushes bacteria toward draining lymphatics" },
      { text: "It prevents platelet activation at the injury site" },
    ],
  },
  {
    stem: "A patient with nephrotic syndrome has generalized edema. Serum albumin is 1.8 g/dL. Which Starling force change is primarily responsible?",
    topic: "Vascular Changes & Edema",
    explanation:
      "Hypoalbuminemia reduces plasma oncotic pressure, so fluid is not drawn back into the capillary at the venous end. This produces a protein-poor transudate distinct from inflammatory exudate, which is why nephrotic edema is not accompanied by redness or warmth.",
    choices: [
      { text: "Reduced plasma oncotic pressure", isCorrect: true },
      { text: "Increased capillary permeability to protein" },
      { text: "Increased interstitial oncotic pressure from inflammation" },
      { text: "Lymphatic obstruction by tumor" },
      { text: "Reduced capillary hydrostatic pressure" },
    ],
  },
  {
    stem: "Lymphatic obstruction after axillary node dissection produces which type of swelling?",
    topic: "Vascular Changes & Edema",
    explanation:
      "Blocked lymphatic drainage causes protein-rich lymphedema, since interstitial protein normally returns via lymphatics. Over time this stimulates fibrosis and the skin thickening described as peau d'orange. It is not an inflammatory exudate despite the high protein content.",
    choices: [
      { text: "Protein-rich lymphedema with eventual dermal fibrosis", isCorrect: true },
      { text: "Protein-poor transudate that resolves spontaneously" },
      { text: "Purulent exudate requiring drainage" },
      { text: "Fibrinous exudate over serosal surfaces" },
      { text: "Hemorrhagic effusion from vessel rupture" },
    ],
  },

  /* ══════════════ LEUKOCYTE RECRUITMENT ══════════════ */
  {
    stem: "Place the leukocyte recruitment cascade in correct order.",
    topic: "Leukocyte Recruitment",
    explanation:
      "Margination brings leukocytes to the vessel wall, selectins mediate rolling, chemokines activate integrins, integrins bind ICAM-1 and VCAM-1 for firm adhesion, and the cell then transmigrates and follows a chemotactic gradient. Firm adhesion cannot precede rolling because integrins require chemokine activation first.",
    choices: [
      { text: "Margination → rolling → activation → firm adhesion → transmigration → chemotaxis", isCorrect: true },
      { text: "Rolling → margination → transmigration → firm adhesion → chemotaxis" },
      { text: "Firm adhesion → rolling → margination → chemotaxis → transmigration" },
      { text: "Chemotaxis → margination → rolling → transmigration → firm adhesion" },
      { text: "Transmigration → rolling → firm adhesion → margination → chemotaxis" },
    ],
  },
  {
    stem: "Which adhesion molecule pair mediates the ROLLING phase specifically?",
    topic: "Leukocyte Recruitment",
    explanation:
      "Selectins binding sialyl-Lewis X glycoproteins mediate the low-affinity, reversible interactions of rolling. Integrin–ICAM binding produces the high-affinity firm adhesion that follows, and PECAM-1 mediates transmigration.",
    choices: [
      { text: "E-selectin and P-selectin with sialyl-Lewis X", isCorrect: true },
      { text: "LFA-1 with ICAM-1" },
      { text: "VLA-4 with VCAM-1" },
      { text: "PECAM-1 (CD31) homophilic binding" },
      { text: "Mac-1 with fibrinogen" },
    ],
  },
  {
    stem: "P-selectin is stored preformed and mobilized within minutes of stimulation. From which structure?",
    topic: "Leukocyte Recruitment",
    explanation:
      "Weibel-Palade bodies of endothelial cells store P-selectin along with von Willebrand factor, allowing surface expression within minutes of histamine or thrombin exposure. E-selectin, by contrast, requires new transcription driven by TNF and IL-1, so appears hours later.",
    choices: [
      { text: "Weibel-Palade bodies of endothelial cells", isCorrect: true },
      { text: "Neutrophil azurophilic granules" },
      { text: "Mast cell secretory granules" },
      { text: "Platelet dense granules" },
      { text: "Endothelial caveolae" },
    ],
  },
  {
    stem: "A 3-year-old boy has had delayed umbilical cord separation, recurrent bacterial infections, and no pus at infection sites. Neutrophil count is 34,000/µL. Which defect is most likely?",
    topic: "Leukocyte Adhesion & Function Disorders",
    explanation:
      "Leukocyte adhesion deficiency type 1 results from defective CD18 integrin, so neutrophils cannot adhere firmly or transmigrate. They accumulate in the circulation, producing marked neutrophilia while tissue sites remain free of pus. Chronic granulomatous disease produces pus but poor killing.",
    choices: [
      { text: "CD18 integrin deficiency (LAD type 1)", isCorrect: true },
      { text: "NADPH oxidase deficiency" },
      { text: "Lysosomal trafficking regulator (LYST) mutation" },
      { text: "Myeloperoxidase deficiency" },
      { text: "Terminal complement component deficiency" },
    ],
  },
  {
    stem: "Which are recognized chemotactic agents for neutrophils? Select all that apply.",
    type: "MULTI",
    topic: "Leukocyte Recruitment",
    explanation:
      "C5a, leukotriene B4, IL-8 and bacterial N-formylmethionine peptides are the classic neutrophil chemoattractants. Prostaglandin E2 contributes to vasodilation and pain rather than chemotaxis, and IL-10 is anti-inflammatory.",
    choices: [
      { text: "C5a", isCorrect: true },
      { text: "Leukotriene B4", isCorrect: true },
      { text: "Interleukin-8 (CXCL8)", isCorrect: true },
      { text: "Prostaglandin E2" },
      { text: "Interleukin-10" },
    ],
  },
  {
    stem: "True or False: Neutrophils predominate in the first 6 to 24 hours of acute inflammation, with monocytes predominating thereafter.",
    type: "TRUE_FALSE",
    topic: "Leukocyte Recruitment",
    explanation:
      "True. Neutrophils are more numerous, respond faster and are short-lived, undergoing apoptosis within about a day; monocytes survive longer and their chemokine signals persist, so they dominate from 24 to 48 hours onward.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which inflammatory infiltrate would you expect within 8 hours of a Pseudomonas wound infection?",
    topic: "Leukocyte Recruitment",
    explanation:
      "Neutrophils dominate the early bacterial response. Lymphocyte predominance suggests viral infection or chronic inflammation, and eosinophil predominance suggests parasitic or allergic disease — the infiltrate is a diagnostic clue in its own right.",
    choices: [
      { text: "Predominantly neutrophils", isCorrect: true },
      { text: "Predominantly lymphocytes" },
      { text: "Predominantly eosinophils" },
      { text: "Predominantly plasma cells" },
      { text: "Predominantly epithelioid macrophages" },
    ],
  },
  {
    stem: "In which infection do NEUTROPHILS characteristically persist for days rather than being replaced by mononuclear cells?",
    topic: "Leukocyte Recruitment",
    explanation:
      "Pseudomonas infection is the classic exception in which neutrophils continue to dominate for several days. Viral infections favor lymphocytes, and hypersensitivity reactions favor eosinophils or lymphocytes depending on type.",
    choices: [
      { text: "Pseudomonas aeruginosa infection", isCorrect: true },
      { text: "Influenza pneumonitis" },
      { text: "Mycobacterium tuberculosis infection" },
      { text: "Strongyloides hyperinfection" },
      { text: "Cytomegalovirus colitis" },
    ],
  },
  {
    stem: "Transmigration of leukocytes between endothelial cells is mediated principally by which molecule?",
    topic: "Leukocyte Recruitment",
    explanation:
      "PECAM-1 (CD31) engages in homophilic binding between leukocyte and endothelial cell, guiding diapedesis through the junction. Selectins act earlier in rolling and integrins in firm adhesion; each stage uses a different molecular family.",
    choices: [
      { text: "PECAM-1 (CD31)", isCorrect: true },
      { text: "E-selectin" },
      { text: "VCAM-1" },
      { text: "Sialyl-Lewis X" },
      { text: "L-selectin" },
    ],
  },
  {
    stem: "A patient on high-dose corticosteroids has a white cell count of 16,000/µL with 88% neutrophils. Which mechanism best explains the neutrophilia?",
    topic: "Leukocyte Recruitment",
    explanation:
      "Corticosteroids impair neutrophil adhesion and margination and mobilize the marginated pool into circulation, producing demargination neutrophilia. The patient is not better defended — tissue delivery of neutrophils is in fact reduced, which is why steroid users are more prone to infection despite a high count.",
    choices: [
      { text: "Demargination with impaired adhesion, so neutrophils remain circulating", isCorrect: true },
      { text: "Increased neutrophil transmigration into tissues" },
      { text: "Accelerated granulopoiesis driven by IL-8" },
      { text: "Reduced neutrophil apoptosis in the tissues" },
      { text: "Splenic sequestration of lymphocytes" },
    ],
  },

  /* ══════════════ PHAGOCYTOSIS & KILLING ══════════════ */
  {
    stem: "Which two molecules are the principal opsonins facilitating phagocytosis?",
    topic: "Phagocytosis & Killing",
    explanation:
      "IgG Fc and complement C3b are the dominant opsonins, recognized by FcγR and CR1/CR3 on phagocytes. Mannose-binding lectin also opsonizes but is less important quantitatively; IgE and C5a serve other roles — allergy and chemotaxis respectively.",
    choices: [
      { text: "IgG and C3b", isCorrect: true },
      { text: "IgE and C5a" },
      { text: "IgM and C9" },
      { text: "IgA and factor B" },
      { text: "Fibrinogen and C1q" },
    ],
  },
  {
    stem: "The respiratory burst generates hypochlorite. Which enzyme catalyzes this final step, and from what substrate?",
    topic: "Phagocytosis & Killing",
    explanation:
      "Myeloperoxidase converts hydrogen peroxide and chloride into hypochlorous acid, the most potent bactericidal product of the neutrophil. NADPH oxidase generates the upstream superoxide, and superoxide dismutase converts superoxide to peroxide.",
    choices: [
      { text: "Myeloperoxidase, from hydrogen peroxide and chloride", isCorrect: true },
      { text: "NADPH oxidase, from molecular oxygen and NADPH" },
      { text: "Superoxide dismutase, from superoxide" },
      { text: "Catalase, from hydrogen peroxide alone" },
      { text: "Nitric oxide synthase, from arginine" },
    ],
  },
  {
    stem: "Which of the following are oxygen-INDEPENDENT antimicrobial mechanisms? Select all that apply.",
    type: "MULTI",
    explanation:
      "Lysozyme, lactoferrin, defensins and bactericidal permeability-increasing protein all kill without oxygen. The respiratory burst and hypochlorite generation are oxygen-dependent, which is why anaerobic abscesses still contain functional killing mechanisms.",
    topic: "Phagocytosis & Killing",
    choices: [
      { text: "Lysozyme degrading peptidoglycan", isCorrect: true },
      { text: "Lactoferrin sequestering iron", isCorrect: true },
      { text: "Defensins disrupting microbial membranes", isCorrect: true },
      { text: "Myeloperoxidase-generated hypochlorite" },
      { text: "NADPH oxidase-generated superoxide" },
    ],
  },
  {
    stem: "A child has recurrent infections, partial albinism, peripheral neuropathy, and giant granules in leukocytes on smear. Which process is defective?",
    topic: "Leukocyte Adhesion & Function Disorders",
    explanation:
      "Chédiak-Higashi syndrome results from a LYST mutation impairing lysosomal trafficking, so phagosome-lysosome fusion fails and giant granules form. Albinism and neuropathy follow from the same trafficking defect in melanocytes and neurons. Adhesion and respiratory burst are intact.",
    choices: [
      { text: "Phagolysosome fusion", isCorrect: true },
      { text: "Integrin-mediated adhesion" },
      { text: "NADPH oxidase respiratory burst" },
      { text: "Complement C3 convertase assembly" },
      { text: "Immunoglobulin class switching" },
    ],
  },
  {
    stem: "True or False: Neutrophil extracellular traps (NETs) are formed from released nuclear chromatin studded with granule proteins.",
    type: "TRUE_FALSE",
    topic: "Phagocytosis & Killing",
    explanation:
      "True. NETosis extrudes decondensed chromatin bearing elastase and histones, trapping and killing extracellular organisms. The process also exposes nuclear antigens, which is one proposed link between neutrophil activity and lupus autoimmunity.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Why are catalase-positive organisms particularly dangerous in chronic granulomatous disease?",
    topic: "Leukocyte Adhesion & Function Disorders",
    explanation:
      "CGD neutrophils cannot generate their own hydrogen peroxide, but they can borrow peroxide produced by catalase-NEGATIVE microbes. Catalase-positive organisms destroy their own peroxide, denying the phagocyte that substrate. Staphylococcus aureus, Serratia, Nocardia and Aspergillus are the classic culprits.",
    choices: [
      { text: "They destroy the microbial peroxide the phagocyte would otherwise borrow", isCorrect: true },
      { text: "They resist lysozyme by thickening their peptidoglycan" },
      { text: "They inhibit phagolysosome fusion directly" },
      { text: "They cleave IgA at the hinge region" },
      { text: "They inactivate complement C3b on their surface" },
    ],
  },
  {
    stem: "Which cell surface receptor recognizes bacterial lipopolysaccharide and initiates NF-kB signaling?",
    topic: "Phagocytosis & Killing",
    explanation:
      "TLR4 with its co-receptors MD2 and CD14 recognizes LPS and triggers NF-kB-mediated transcription of inflammatory cytokines. TLR3 recognizes double-stranded RNA and TLR9 unmethylated CpG DNA; each pattern receptor is tuned to a different microbial signature.",
    choices: [
      { text: "TLR4", isCorrect: true },
      { text: "TLR3" },
      { text: "TLR9" },
      { text: "Mannose receptor" },
      { text: "FcγRIII (CD16)" },
    ],
  },
  {
    stem: "Neutrophil azurophilic (primary) granules contain which characteristic enzyme?",
    topic: "Phagocytosis & Killing",
    explanation:
      "Myeloperoxidase defines the azurophilic granule and gives pus its greenish tinge. Lactoferrin and alkaline phosphatase are markers of specific (secondary) granules, and gelatinase of tertiary granules.",
    choices: [
      { text: "Myeloperoxidase", isCorrect: true },
      { text: "Lactoferrin" },
      { text: "Alkaline phosphatase" },
      { text: "Gelatinase" },
      { text: "Histaminase" },
    ],
  },

  /* ══════════════ VASOACTIVE AMINES & KININS ══════════════ */
  {
    stem: "A patient develops flushing, wheeze and hypotension minutes after a bee sting. Which preformed mediator accounts for the immediate reaction?",
    topic: "Vasoactive Amines & Kinins",
    explanation:
      "Mast cell histamine is preformed and released within seconds of IgE cross-linking, producing vasodilation, increased permeability and bronchoconstriction. Leukotrienes contribute to the later and more sustained phase because they require synthesis from membrane arachidonic acid.",
    choices: [
      { text: "Histamine from mast cell granules", isCorrect: true },
      { text: "Leukotriene C4 synthesized de novo" },
      { text: "Prostaglandin I2 from endothelium" },
      { text: "Interleukin-1 from macrophages" },
      { text: "C-reactive protein from hepatocytes" },
    ],
  },
  {
    stem: "Bradykinin is generated by which enzyme acting on which precursor?",
    topic: "Vasoactive Amines & Kinins",
    explanation:
      "Kallikrein cleaves high-molecular-weight kininogen to release bradykinin, which causes vasodilation, increased permeability and pain. It is degraded by ACE, which explains the dry cough and angioedema associated with ACE inhibitors.",
    choices: [
      { text: "Kallikrein acting on high-molecular-weight kininogen", isCorrect: true },
      { text: "Thrombin acting on fibrinogen" },
      { text: "Plasmin acting on fibrin" },
      { text: "Renin acting on angiotensinogen" },
      { text: "Tryptase acting on C3" },
    ],
  },
  {
    stem: "A 62-year-old man on lisinopril develops lip and tongue swelling without urticaria. Which mediator accumulates?",
    topic: "Vasoactive Amines & Kinins",
    explanation:
      "ACE normally degrades bradykinin, so inhibition allows it to accumulate and produce angioedema. The absence of urticaria and itch points away from a histamine-mediated allergic reaction, which is why antihistamines are typically ineffective here.",
    choices: [
      { text: "Bradykinin", isCorrect: true },
      { text: "Histamine" },
      { text: "Serotonin" },
      { text: "Leukotriene D4" },
      { text: "Thromboxane A2" },
    ],
  },
  {
    stem: "Which of the following stimulate mast cell degranulation? Select all that apply.",
    type: "MULTI",
    topic: "Vasoactive Amines & Kinins",
    explanation:
      "IgE cross-linking, the anaphylatoxins C3a and C5a, physical injury including heat and cold, and neuropeptides such as substance P all trigger degranulation. Cromolyn stabilizes mast cells and IL-10 is anti-inflammatory, so both oppose release.",
    choices: [
      { text: "Cross-linking of surface IgE by antigen", isCorrect: true },
      { text: "Complement fragments C3a and C5a", isCorrect: true },
      { text: "Physical stimuli such as cold or trauma", isCorrect: true },
      { text: "Cromolyn sodium" },
      { text: "Interleukin-10" },
    ],
  },
  {
    stem: "True or False: Serotonin is a vasoactive amine released from platelet dense granules.",
    type: "TRUE_FALSE",
    topic: "Vasoactive Amines & Kinins",
    explanation:
      "True. Platelet dense granules store serotonin, released on aggregation, contributing to vasoconstriction and permeability changes. It is also a mediator of the flushing seen in carcinoid syndrome.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Hageman factor (factor XII) activation links coagulation to inflammation. Which four systems does it engage?",
    topic: "Vasoactive Amines & Kinins",
    explanation:
      "Factor XIIa drives the kinin, coagulation, fibrinolytic and complement systems, which is why these cascades amplify one another in sepsis and DIC. The arachidonic acid pathway is triggered by membrane phospholipase rather than by factor XII.",
    choices: [
      { text: "Kinin, coagulation, fibrinolytic and complement systems", isCorrect: true },
      { text: "Kinin, arachidonic acid, complement and renin-angiotensin systems" },
      { text: "Coagulation, arachidonic acid, fibrinolytic and renin systems" },
      { text: "Complement, arachidonic acid, kinin and cholinergic systems" },
      { text: "Coagulation, fibrinolytic, cholinergic and adrenergic systems" },
    ],
  },
  {
    stem: "Which mediator pair is chiefly responsible for the PAIN of acute inflammation?",
    topic: "Vasoactive Amines & Kinins",
    explanation:
      "Bradykinin and prostaglandin E2 sensitize and stimulate nociceptors; PGE2 lowers the firing threshold so that bradykinin and other stimuli produce pain more readily. This is the basis of NSAID analgesia, which acts by removing the prostaglandin component.",
    choices: [
      { text: "Bradykinin and prostaglandin E2", isCorrect: true },
      { text: "Histamine and C3a" },
      { text: "Leukotriene B4 and IL-8" },
      { text: "Thromboxane A2 and serotonin" },
      { text: "IL-1 and TNF-alpha" },
    ],
  },
  {
    stem: "Hereditary angioedema results from deficiency of which regulator, and what accumulates?",
    topic: "Vasoactive Amines & Kinins",
    explanation:
      "C1 esterase inhibitor deficiency permits unchecked kallikrein activity and bradykinin generation, causing recurrent non-pruritic angioedema. Because it is bradykinin-driven rather than histamine-driven, antihistamines and epinephrine are ineffective and C1-INH concentrate or icatibant is used instead.",
    choices: [
      { text: "C1 esterase inhibitor deficiency with bradykinin accumulation", isCorrect: true },
      { text: "C3 deficiency with anaphylatoxin accumulation" },
      { text: "Decay accelerating factor deficiency with C5a accumulation" },
      { text: "Alpha-1 antitrypsin deficiency with elastase accumulation" },
      { text: "Antithrombin III deficiency with thrombin accumulation" },
    ],
  },

  /* ══════════════ ARACHIDONIC ACID METABOLITES ══════════════ */
  {
    stem: "Which enzyme releases arachidonic acid from membrane phospholipids, and which drug class inhibits it?",
    topic: "Arachidonic Acid Metabolites",
    explanation:
      "Phospholipase A2 liberates arachidonic acid, and corticosteroids inhibit it indirectly by inducing lipocortin/annexin. Because this blocks the pathway at its source, steroids suppress both prostaglandins and leukotrienes, whereas NSAIDs block only the cyclooxygenase arm.",
    choices: [
      { text: "Phospholipase A2 — inhibited by corticosteroids", isCorrect: true },
      { text: "Cyclooxygenase-1 — inhibited by aspirin" },
      { text: "5-lipoxygenase — inhibited by zileuton" },
      { text: "Thromboxane synthase — inhibited by clopidogrel" },
      { text: "Prostacyclin synthase — inhibited by celecoxib" },
    ],
  },
  {
    stem: "A patient with asthma develops severe bronchospasm after taking aspirin. Which mechanism explains this?",
    topic: "Arachidonic Acid Metabolites",
    explanation:
      "Blocking cyclooxygenase shunts arachidonic acid down the 5-lipoxygenase pathway, increasing cysteinyl leukotrienes C4, D4 and E4, which are potent bronchoconstrictors. This is why leukotriene modifiers such as montelukast or zileuton are used in aspirin-exacerbated respiratory disease.",
    choices: [
      { text: "Shunting of arachidonic acid toward cysteinyl leukotrienes", isCorrect: true },
      { text: "IgE-mediated mast cell degranulation against aspirin" },
      { text: "Increased thromboxane A2 causing airway smooth muscle contraction" },
      { text: "Direct histamine release from basophils" },
      { text: "Complement activation via the alternative pathway" },
    ],
  },
  {
    stem: "Match each eicosanoid to its dominant action. Which pairings are correct? Select all that apply.",
    type: "MULTI",
    topic: "Arachidonic Acid Metabolites",
    explanation:
      "Thromboxane A2 promotes platelet aggregation and vasoconstriction; prostacyclin does the opposite; LTB4 is a neutrophil chemoattractant; LTC4, D4 and E4 cause bronchoconstriction and increased permeability. Prostaglandin E2 causes vasodilation and fever, not vasoconstriction.",
    choices: [
      { text: "Thromboxane A2 — platelet aggregation and vasoconstriction", isCorrect: true },
      { text: "Prostacyclin (PGI2) — vasodilation and inhibition of aggregation", isCorrect: true },
      { text: "Leukotriene B4 — neutrophil chemotaxis", isCorrect: true },
      { text: "Prostaglandin E2 — vasoconstriction and platelet activation" },
      { text: "Leukotriene D4 — bronchodilation" },
    ],
  },
  {
    stem: "Low-dose aspirin protects against thrombosis. What is the mechanistic basis for the dose-dependence?",
    topic: "Arachidonic Acid Metabolites",
    explanation:
      "Aspirin irreversibly acetylates COX-1. Anucleate platelets cannot resynthesize the enzyme, so thromboxane suppression lasts the platelet lifespan, while endothelial cells regenerate COX and resume prostacyclin production. Low doses exploit this asymmetry.",
    choices: [
      { text: "Platelets cannot resynthesize COX-1 while endothelium can", isCorrect: true },
      { text: "Low doses selectively inhibit COX-2 in endothelium" },
      { text: "Low doses inhibit 5-lipoxygenase preferentially" },
      { text: "Platelets express only COX-2, which aspirin spares" },
      { text: "Endothelial cells lack cyclooxygenase entirely" },
    ],
  },
  {
    stem: "True or False: Selective COX-2 inhibitors reduce gastric ulceration relative to nonselective NSAIDs because COX-1 maintains gastric mucosal prostaglandins.",
    type: "TRUE_FALSE",
    topic: "Arachidonic Acid Metabolites",
    explanation:
      "True. COX-1 is constitutively expressed in gastric mucosa and produces the prostaglandins that maintain mucus, bicarbonate and blood flow. Sparing it reduces ulcer risk, though at the cost of a relative increase in thrombotic risk from unopposed platelet thromboxane.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which mediator is the principal endogenous pyrogen acting on the hypothalamus?",
    topic: "Arachidonic Acid Metabolites",
    explanation:
      "IL-1 and TNF induce hypothalamic COX-2, raising PGE2, which resets the thermoregulatory set point — PGE2 is the final common mediator of fever. Antipyretics work by blocking that prostaglandin step rather than by blocking the cytokines.",
    choices: [
      { text: "Prostaglandin E2 acting on the hypothalamic set point", isCorrect: true },
      { text: "Leukotriene B4 acting on the anterior hypothalamus" },
      { text: "Thromboxane A2 acting on the median eminence" },
      { text: "Histamine acting on H1 receptors centrally" },
      { text: "Bradykinin acting on circumventricular organs" },
    ],
  },
  {
    stem: "Zileuton and montelukast act at different points of the same pathway. Which statement is accurate?",
    topic: "Arachidonic Acid Metabolites",
    explanation:
      "Zileuton inhibits 5-lipoxygenase, preventing leukotriene synthesis altogether, while montelukast blocks the CysLT1 receptor, preventing the action of leukotrienes already made. Neither affects prostaglandin production.",
    choices: [
      { text: "Zileuton blocks synthesis; montelukast blocks the receptor", isCorrect: true },
      { text: "Zileuton blocks the receptor; montelukast blocks synthesis" },
      { text: "Both inhibit cyclooxygenase-2 selectively" },
      { text: "Both are phospholipase A2 inhibitors" },
      { text: "Both inhibit thromboxane synthase" },
    ],
  },
  {
    stem: "Lipoxins have which role in inflammation?",
    topic: "Arachidonic Acid Metabolites",
    explanation:
      "Lipoxins are arachidonic acid derivatives that inhibit neutrophil recruitment and promote resolution — an active braking signal rather than passive decay. Aspirin paradoxically increases production of aspirin-triggered lipoxins, contributing to its anti-inflammatory effect.",
    choices: [
      { text: "They inhibit neutrophil chemotaxis and promote resolution", isCorrect: true },
      { text: "They amplify neutrophil recruitment in the late phase" },
      { text: "They act as the principal endogenous pyrogen" },
      { text: "They mediate bronchoconstriction in asthma" },
      { text: "They activate the alternative complement pathway" },
    ],
  },
  {
    stem: "Which eicosanoid maintains patency of the ductus arteriosus, and which drug is used to close it?",
    topic: "Arachidonic Acid Metabolites",
    explanation:
      "PGE1 and PGE2 keep the ductus open, so indomethacin — a COX inhibitor — is used to close a patent ductus. Conversely, prostaglandin E1 infusion is given to maintain patency in duct-dependent congenital heart lesions.",
    choices: [
      { text: "Prostaglandin E — closed with indomethacin", isCorrect: true },
      { text: "Thromboxane A2 — closed with aspirin" },
      { text: "Leukotriene D4 — closed with montelukast" },
      { text: "Prostacyclin — closed with zileuton" },
      { text: "Prostaglandin F2-alpha — closed with celecoxib" },
    ],
  },
  {
    stem: "A patient taking a nonselective NSAID for arthritis develops acute kidney injury. Which prostaglandin action was lost?",
    topic: "Arachidonic Acid Metabolites",
    explanation:
      "Prostaglandins dilate the afferent arteriole, preserving glomerular filtration when renal perfusion is threatened. NSAIDs remove that compensation, and in a volume-depleted or heart failure patient GFR falls sharply. Efferent tone is the domain of angiotensin II and ACE inhibitors.",
    choices: [
      { text: "Afferent arteriolar vasodilation maintaining glomerular filtration", isCorrect: true },
      { text: "Efferent arteriolar vasoconstriction maintaining filtration pressure" },
      { text: "Direct tubular sodium reabsorption" },
      { text: "Mesangial cell contraction increasing filtration surface" },
      { text: "Stimulation of renin release from the macula densa" },
    ],
  },

  /* ══════════════ COMPLEMENT ══════════════ */
  {
    stem: "Which complement fragments are the anaphylatoxins, and what is their principal action?",
    topic: "Complement",
    explanation:
      "C3a and C5a trigger mast cell degranulation and increase vascular permeability; C5a is additionally a powerful neutrophil chemoattractant. C3b is the major opsonin and C5b initiates membrane attack complex assembly — different fragments, different jobs.",
    choices: [
      { text: "C3a and C5a — mast cell degranulation and increased permeability", isCorrect: true },
      { text: "C3b and C5b — mast cell degranulation" },
      { text: "C1q and C4b — neutrophil chemotaxis" },
      { text: "C6 and C7 — increased vascular permeability" },
      { text: "C8 and C9 — opsonization of bacteria" },
    ],
  },
  {
    stem: "A young man has had three episodes of Neisseria meningitidis meningitis. Which deficiency should be suspected?",
    topic: "Complement",
    explanation:
      "Terminal complement deficiency (C5 through C9) prevents membrane attack complex formation, and Neisseria species are uniquely vulnerable to MAC-mediated lysis because of their thin cell wall. Recurrent neisserial infection is close to pathognomonic for this defect.",
    choices: [
      { text: "Terminal complement components C5-C9", isCorrect: true },
      { text: "C1 esterase inhibitor" },
      { text: "Decay accelerating factor (CD55)" },
      { text: "Mannose-binding lectin" },
      { text: "Properdin-independent C3 deficiency alone" },
    ],
  },
  {
    stem: "Which of the following activate the classical complement pathway? Select all that apply.",
    type: "MULTI",
    topic: "Complement",
    explanation:
      "The classical pathway is initiated by C1q binding antigen-bound IgG or IgM, and by C-reactive protein bound to phosphocholine. Microbial surfaces without antibody activate the alternative pathway, and mannose residues activate the lectin pathway.",
    choices: [
      { text: "IgM bound to antigen", isCorrect: true },
      { text: "IgG bound to antigen", isCorrect: true },
      { text: "C-reactive protein bound to bacterial phosphocholine", isCorrect: true },
      { text: "Mannose residues on a yeast cell wall" },
      { text: "Spontaneous hydrolysis of C3 on a microbial surface" },
    ],
  },
  {
    stem: "Paroxysmal nocturnal hemoglobinuria results from loss of GPI-anchored proteins. Which two complement regulators are lost, and what is the consequence?",
    topic: "Complement",
    explanation:
      "CD55 (decay accelerating factor) and CD59 (MAC inhibitory protein) are GPI-anchored, so their loss leaves red cells vulnerable to complement-mediated lysis. Eculizumab, which blocks C5, is effective precisely because it prevents MAC assembly downstream.",
    choices: [
      { text: "CD55 and CD59 — complement-mediated hemolysis", isCorrect: true },
      { text: "C1 inhibitor and factor H — recurrent angioedema" },
      { text: "CR1 and CR3 — failure of opsonization" },
      { text: "Factor B and properdin — recurrent neisserial infection" },
      { text: "MBL and ficolin — impaired lectin pathway activation" },
    ],
  },
  {
    stem: "True or False: All three complement pathways converge on the formation of C3 convertase.",
    type: "TRUE_FALSE",
    topic: "Complement",
    explanation:
      "True. Classical, lectin and alternative pathways each generate a C3 convertase, after which the terminal sequence is identical. This convergence is why C3 deficiency produces the most severe phenotype of any single complement defect.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "A patient with active lupus nephritis has C3 of 42 mg/dL and C4 of 6 mg/dL (both low). Which interpretation is best?",
    topic: "Complement",
    explanation:
      "Consumption of both C3 and C4 indicates classical pathway activation by immune complexes, a hallmark of active lupus nephritis and a useful marker of disease activity. Isolated C3 depression with normal C4 would instead suggest alternative pathway activation.",
    choices: [
      { text: "Immune complex consumption via the classical pathway", isCorrect: true },
      { text: "Alternative pathway activation with C4 sparing" },
      { text: "Hereditary C1 inhibitor deficiency" },
      { text: "Terminal pathway deficiency" },
      { text: "Laboratory artifact from sample hemolysis" },
    ],
  },
  {
    stem: "Which complement component is the most potent chemotactic factor for neutrophils?",
    topic: "Complement",
    explanation:
      "C5a combines anaphylatoxin activity with powerful chemotaxis and leukocyte activation. C3a shares the anaphylatoxin role but is a far weaker chemoattractant, and C3b is an opsonin rather than a chemoattractant.",
    choices: [
      { text: "C5a", isCorrect: true },
      { text: "C3a" },
      { text: "C3b" },
      { text: "C4b" },
      { text: "C9" },
    ],
  },
  {
    stem: "Which structure does the membrane attack complex form, and which component polymerizes to create it?",
    topic: "Complement",
    explanation:
      "C9 polymerizes into a transmembrane pore after C5b-8 inserts, causing osmotic lysis. C3b remains an opsonin and never participates in pore formation, which is why C3-deficient patients get pyogenic rather than neisserial infections.",
    choices: [
      { text: "A transmembrane pore formed by polymerized C9", isCorrect: true },
      { text: "A transmembrane pore formed by polymerized C3b" },
      { text: "An enzymatic complex cleaving bacterial peptidoglycan" },
      { text: "A lattice of cross-linked IgM on the microbial surface" },
      { text: "A phospholipase complex hydrolyzing membrane lipid" },
    ],
  },

  /* ══════════════ CYTOKINES & ACUTE PHASE RESPONSE ══════════════ */
  {
    stem: "Which cytokines are principally responsible for the systemic acute phase response?",
    topic: "Cytokines & Acute Phase Response",
    explanation:
      "IL-1, IL-6 and TNF-alpha drive fever, hepatic acute phase protein synthesis, leukocytosis and the anorexia and somnolence of illness. IL-6 in particular is the dominant inducer of CRP synthesis by hepatocytes.",
    choices: [
      { text: "IL-1, IL-6 and TNF-alpha", isCorrect: true },
      { text: "IL-4, IL-5 and IL-13" },
      { text: "IL-10 and TGF-beta" },
      { text: "IL-2 and interferon-gamma alone" },
      { text: "IL-17 and IL-22 alone" },
    ],
  },
  {
    stem: "Which of the following are POSITIVE acute phase reactants? Select all that apply.",
    type: "MULTI",
    topic: "Cytokines & Acute Phase Response",
    explanation:
      "CRP, ferritin, fibrinogen, hepcidin and serum amyloid A all rise in inflammation. Albumin and transferrin are NEGATIVE reactants that fall — which is why a low albumin in an acutely ill patient may reflect inflammation rather than nutrition.",
    choices: [
      { text: "C-reactive protein", isCorrect: true },
      { text: "Ferritin", isCorrect: true },
      { text: "Fibrinogen", isCorrect: true },
      { text: "Albumin" },
      { text: "Transferrin" },
    ],
  },
  {
    stem: "A patient with rheumatoid arthritis has hemoglobin 10.2 g/dL, MCV 84 fL, ferritin 380 ng/mL, and low serum iron. Which mechanism explains the anemia?",
    topic: "Cytokines & Acute Phase Response",
    explanation:
      "IL-6 drives hepcidin production, which blocks ferroportin and traps iron in macrophages and enterocytes — anemia of chronic disease. Ferritin is high because it is both an iron store and an acute phase reactant, which distinguishes this from iron deficiency where ferritin is low.",
    choices: [
      { text: "Hepcidin-mediated sequestration of iron in macrophages", isCorrect: true },
      { text: "True iron deficiency from occult blood loss" },
      { text: "Vitamin B12 deficiency from ileal disease" },
      { text: "Autoimmune hemolysis with warm antibodies" },
      { text: "Bone marrow infiltration by lymphoma" },
    ],
  },
  {
    stem: "Why does the erythrocyte sedimentation rate rise in inflammation?",
    topic: "Cytokines & Acute Phase Response",
    explanation:
      "Increased fibrinogen and other acute phase proteins reduce the negative surface charge that normally keeps erythrocytes apart, allowing rouleaux formation and faster settling. ESR is therefore an indirect marker, which is why it lags behind CRP by days.",
    choices: [
      { text: "Fibrinogen promotes rouleaux formation by reducing red cell repulsion", isCorrect: true },
      { text: "Red cell membranes become more rigid and sink faster" },
      { text: "Neutrophil count rises, increasing plasma viscosity" },
      { text: "Plasma albumin rises, increasing red cell aggregation" },
      { text: "Hemoglobin oxygen affinity increases, altering cell density" },
    ],
  },
  {
    stem: "True or False: CRP rises and falls more rapidly than ESR, making it more useful for tracking response to therapy.",
    type: "TRUE_FALSE",
    topic: "Cytokines & Acute Phase Response",
    explanation:
      "True. CRP has a half-life of about 19 hours and responds within 6 to 8 hours, whereas ESR reflects fibrinogen levels and changes over days to weeks. CRP is therefore the better serial marker in an acutely changing illness.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "In septic shock, TNF-alpha contributes to hypotension chiefly through which mechanism?",
    topic: "Cytokines & Acute Phase Response",
    explanation:
      "TNF induces inducible nitric oxide synthase in endothelium and smooth muscle, and the resulting nitric oxide causes profound vasodilation refractory to catecholamines. Myocardial depression contributes, but vasodilation is the dominant hemodynamic mechanism early on.",
    choices: [
      { text: "Induction of nitric oxide synthase with widespread vasodilation", isCorrect: true },
      { text: "Direct destruction of the adrenal cortex" },
      { text: "Massive hemorrhage from platelet destruction" },
      { text: "Increased systemic vascular resistance with afterload mismatch" },
      { text: "Osmotic diuresis from hyperglycemia" },
    ],
  },
  {
    stem: "A patient started on infliximab for Crohn disease should be screened for which infection first, and why?",
    topic: "Cytokines & Acute Phase Response",
    explanation:
      "TNF-alpha maintains granuloma integrity, so blocking it can reactivate latent tuberculosis. Screening with an interferon-gamma release assay or tuberculin test before starting is standard practice with all TNF inhibitors.",
    choices: [
      { text: "Latent tuberculosis, because TNF maintains granulomas", isCorrect: true },
      { text: "Hepatitis A, because TNF drives viral clearance" },
      { text: "Streptococcal pharyngitis, because TNF drives opsonization" },
      { text: "Candidiasis, because TNF maintains mucosal barriers" },
      { text: "Neisseria meningitidis, because TNF drives MAC assembly" },
    ],
  },
  {
    stem: "Which cytokine is the principal driver of hepatic C-reactive protein synthesis?",
    topic: "Cytokines & Acute Phase Response",
    explanation:
      "IL-6 is the dominant inducer of CRP and other acute phase proteins by hepatocytes. This underpins the use of IL-6 receptor blockade, such as tocilizumab, where CRP falls even when the underlying process persists — a point worth remembering when interpreting labs on that drug.",
    choices: [
      { text: "Interleukin-6", isCorrect: true },
      { text: "Interleukin-4" },
      { text: "Interleukin-10" },
      { text: "Transforming growth factor-beta" },
      { text: "Interferon-alpha" },
    ],
  },

  /* ══════════════ OUTCOMES OF ACUTE INFLAMMATION ══════════════ */
  {
    stem: "Which four outcomes are possible after acute inflammation?",
    topic: "Outcomes of Acute Inflammation",
    explanation:
      "Complete resolution, healing by fibrosis, abscess formation, and progression to chronic inflammation are the recognized outcomes. Malignant transformation is not a direct outcome of acute inflammation, though chronic inflammation can predispose to it over years.",
    choices: [
      { text: "Resolution, fibrosis, abscess formation, or chronic inflammation", isCorrect: true },
      { text: "Resolution, malignant transformation, necrosis, or calcification" },
      { text: "Fibrosis, metaplasia, dysplasia, or carcinoma" },
      { text: "Resolution, amyloidosis, atrophy, or infarction" },
      { text: "Abscess, granuloma, thrombosis, or embolism" },
    ],
  },
  {
    stem: "Complete resolution requires which conditions? Select all that apply.",
    type: "MULTI",
    topic: "Outcomes of Acute Inflammation",
    explanation:
      "Resolution requires minimal tissue destruction, an intact tissue framework including basement membrane, a regenerative (labile or stable) cell population, and clearance of the injurious agent and debris. Extensive necrosis or destruction of the stromal scaffold forces healing by scar instead.",
    choices: [
      { text: "An intact stromal framework and basement membrane", isCorrect: true },
      { text: "A labile or stable cell population capable of regeneration", isCorrect: true },
      { text: "Clearance of the injurious agent and necrotic debris", isCorrect: true },
      { text: "Extensive destruction of the parenchymal architecture" },
      { text: "A permanent cell population such as cardiac myocytes" },
    ],
  },
  {
    stem: "A patient has a walled-off collection of pus in the liver. Which cell type dominates the central cavity, and what forms the wall?",
    topic: "Outcomes of Acute Inflammation",
    explanation:
      "An abscess has a central core of necrotic neutrophils and liquefied tissue, surrounded by a pyogenic membrane of granulation tissue and later fibrosis. That fibrous wall is what limits antibiotic penetration and explains why drainage is usually required.",
    choices: [
      { text: "Necrotic neutrophils centrally, with a granulation tissue and fibrous wall", isCorrect: true },
      { text: "Epithelioid macrophages centrally, with a lymphocyte cuff" },
      { text: "Plasma cells centrally, with a collagenous capsule" },
      { text: "Eosinophils centrally, with a Charcot-Leyden crystal rim" },
      { text: "Multinucleate giant cells centrally, with caseous debris" },
    ],
  },
  {
    stem: "Fibrinous inflammation on a serosal surface classically produces which clinical sign?",
    topic: "Outcomes of Acute Inflammation",
    explanation:
      "Fibrin deposition on pericardium or pleura produces a friction rub as roughened surfaces move against each other. If the fibrin is not lysed it organizes into fibrous adhesions, which is how constrictive pericarditis develops.",
    choices: [
      { text: "A friction rub, with risk of subsequent adhesions", isCorrect: true },
      { text: "Stony dullness with absent breath sounds" },
      { text: "A continuous machinery murmur" },
      { text: "Fluctuance with overlying erythema" },
      { text: "Subcutaneous crepitus" },
    ],
  },
  {
    stem: "True or False: Serous inflammation is characterized by an outpouring of protein-poor fluid, as in a skin blister.",
    type: "TRUE_FALSE",
    topic: "Outcomes of Acute Inflammation",
    explanation:
      "True. Serous inflammation produces thin, relatively cell-poor fluid derived from plasma or mesothelial secretion — the blister after a burn is the classic example. Increasing severity moves the picture toward fibrinous then suppurative patterns.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "A chronic draining sinus tract forms from an osteomyelitis focus to the skin. What does this indicate about resolution?",
    topic: "Outcomes of Acute Inflammation",
    explanation:
      "A persistent tract signals that the inciting focus has not been cleared — usually necrotic bone (sequestrum) or a foreign body — so inflammation continues indefinitely. Definitive treatment requires removing that nidus, not simply extending antibiotics.",
    choices: [
      { text: "An undrained nidus such as sequestrum persists, preventing resolution", isCorrect: true },
      { text: "The infection has been cleared and the tract is healing" },
      { text: "The lesion has undergone malignant transformation" },
      { text: "The patient has developed a complement deficiency" },
      { text: "Granulation tissue has failed to form entirely" },
    ],
  },

  /* ══════════════ CHRONIC INFLAMMATION & MACROPHAGES ══════════════ */
  {
    stem: "Which cell is the central orchestrator of chronic inflammation, and what is its circulating precursor?",
    topic: "Chronic Inflammation & Macrophages",
    explanation:
      "Tissue macrophages, derived from circulating blood monocytes, dominate chronic inflammation by secreting cytokines, presenting antigen and driving fibrosis. Neutrophils are the hallmark of acute rather than chronic inflammation.",
    choices: [
      { text: "The macrophage, derived from the blood monocyte", isCorrect: true },
      { text: "The neutrophil, derived from the myeloblast" },
      { text: "The plasma cell, derived from the T lymphocyte" },
      { text: "The mast cell, derived from the basophil" },
      { text: "The fibroblast, derived from the pericyte" },
    ],
  },
  {
    stem: "Classically activated (M1) macrophages differ from alternatively activated (M2) macrophages in which way?",
    topic: "Chronic Inflammation & Macrophages",
    explanation:
      "M1 macrophages are induced by interferon-gamma and microbial products and are microbicidal and pro-inflammatory. M2 macrophages are induced by IL-4 and IL-13 and promote tissue repair and fibrosis while dampening inflammation — the same cell lineage doing opposite jobs.",
    choices: [
      { text: "M1 is IFN-gamma driven and microbicidal; M2 is IL-4/IL-13 driven and reparative", isCorrect: true },
      { text: "M1 is IL-4 driven and reparative; M2 is IFN-gamma driven and microbicidal" },
      { text: "M1 secretes collagen; M2 secretes reactive oxygen species" },
      { text: "M1 arises from lymphocytes; M2 arises from monocytes" },
      { text: "M1 is found only in granulomas; M2 only in abscesses" },
    ],
  },
  {
    stem: "Which findings characterize chronic inflammation histologically? Select all that apply.",
    type: "MULTI",
    topic: "Chronic Inflammation & Macrophages",
    explanation:
      "Chronic inflammation shows mononuclear infiltrate of lymphocytes, plasma cells and macrophages, tissue destruction proceeding alongside repair, and angiogenesis with fibrosis. A dense neutrophil infiltrate with fibrin exudate is the acute picture.",
    choices: [
      { text: "Infiltration by lymphocytes, plasma cells and macrophages", isCorrect: true },
      { text: "Simultaneous tissue destruction and attempted repair", isCorrect: true },
      { text: "Angiogenesis with progressive fibrosis", isCorrect: true },
      { text: "Dense neutrophilic exudate with fibrin" },
      { text: "Prominent serous blister formation" },
    ],
  },
  {
    stem: "Plasma cells in a chronic inflammatory infiltrate indicate which process?",
    topic: "Chronic Inflammation & Macrophages",
    explanation:
      "Plasma cells are terminally differentiated B lymphocytes producing antigen-specific antibody, so their presence indicates a sustained humoral response. Their perinuclear hof and clock-face chromatin make them recognizable on routine sections.",
    choices: [
      { text: "Sustained antibody production by differentiated B cells", isCorrect: true },
      { text: "Cytotoxic T cell killing of infected cells" },
      { text: "Innate recognition of pathogen-associated molecular patterns" },
      { text: "Mast cell degranulation with histamine release" },
      { text: "Complement-mediated microbial lysis" },
    ],
  },
  {
    stem: "True or False: Chronic inflammation may begin insidiously without any preceding acute phase.",
    type: "TRUE_FALSE",
    topic: "Chronic Inflammation & Macrophages",
    explanation:
      "True. Autoimmune disease, prolonged exposure to toxic agents such as silica, and infection with organisms of low virulence such as Mycobacterium tuberculosis can all produce chronic inflammation from the outset without an acute prelude.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which cytokine axis links the T lymphocyte to the macrophage in chronic inflammation, and in which direction?",
    topic: "Chronic Inflammation & Macrophages",
    explanation:
      "T cells secrete interferon-gamma, which activates macrophages, and activated macrophages secrete IL-12, which drives further Th1 differentiation. This bidirectional loop sustains chronic inflammation and is the engine of granuloma formation.",
    choices: [
      { text: "T cell IFN-gamma activates macrophages; macrophage IL-12 drives Th1 cells", isCorrect: true },
      { text: "T cell IL-10 activates macrophages; macrophage IL-4 drives Th2 cells" },
      { text: "Macrophage IFN-gamma activates T cells; T cell IL-12 drives macrophages" },
      { text: "T cell TGF-beta activates macrophages; macrophage IL-5 drives eosinophils" },
      { text: "Macrophage IL-8 activates T cells; T cell TNF drives neutrophils" },
    ],
  },
  {
    stem: "Eosinophil-rich chronic inflammation should prompt consideration of which two categories of disease?",
    topic: "Chronic Inflammation & Macrophages",
    explanation:
      "Eosinophils are recruited by IL-5 and eotaxin in parasitic (helminth) infection and in IgE-mediated allergic disease. Their granules contain major basic protein, which is toxic to helminths but also damages host epithelium in asthma.",
    choices: [
      { text: "Helminth infection and IgE-mediated allergy", isCorrect: true },
      { text: "Mycobacterial infection and sarcoidosis" },
      { text: "Viral hepatitis and autoimmune thyroiditis" },
      { text: "Pyogenic abscess and cellulitis" },
      { text: "Amyloidosis and hemochromatosis" },
    ],
  },
  {
    stem: "Long-standing chronic inflammation may lead to deposition of which protein, producing organ dysfunction?",
    topic: "Chronic Inflammation & Macrophages",
    explanation:
      "Serum amyloid A, an acute phase reactant, is deposited as AA amyloid in secondary (reactive) amyloidosis complicating rheumatoid arthritis, chronic infection or inflammatory bowel disease. AL amyloid derives from immunoglobulin light chains in plasma cell dyscrasias instead.",
    choices: [
      { text: "AA amyloid derived from serum amyloid A", isCorrect: true },
      { text: "AL amyloid derived from immunoglobulin light chains" },
      { text: "Transthyretin amyloid from a hepatic point mutation" },
      { text: "Beta-2 microglobulin amyloid from dialysis" },
      { text: "Beta-amyloid from APP cleavage" },
    ],
  },

  /* ══════════════ GRANULOMATOUS INFLAMMATION ══════════════ */
  {
    stem: "Which cell type defines a granuloma histologically?",
    topic: "Granulomatous Inflammation",
    explanation:
      "The epithelioid macrophage — an activated macrophage with abundant pink cytoplasm resembling epithelium — is the defining cell. Multinucleate giant cells form by fusion of these cells and are supportive but not required for the diagnosis.",
    choices: [
      { text: "Epithelioid macrophages", isCorrect: true },
      { text: "Neutrophils" },
      { text: "Plasma cells" },
      { text: "Eosinophils" },
      { text: "Mast cells" },
    ],
  },
  {
    stem: "Which cytokines are essential for granuloma formation and maintenance?",
    topic: "Granulomatous Inflammation",
    explanation:
      "Interferon-gamma from Th1 cells activates macrophages into epithelioid cells, and TNF-alpha holds the granuloma together. Blocking TNF therapeutically causes granulomas to break down, which is why latent tuberculosis reactivates on those drugs.",
    choices: [
      { text: "Interferon-gamma and TNF-alpha", isCorrect: true },
      { text: "IL-4 and IL-5" },
      { text: "IL-10 and TGF-beta" },
      { text: "IL-8 and leukotriene B4" },
      { text: "IL-6 and IL-1 alone" },
    ],
  },
  {
    stem: "Which of the following typically produce CASEATING granulomas? Select all that apply.",
    type: "MULTI",
    topic: "Granulomatous Inflammation",
    explanation:
      "Mycobacterium tuberculosis and the endemic fungi Histoplasma and Coccidioides characteristically caseate. Sarcoidosis and Crohn disease produce non-caseating granulomas, a distinction that matters greatly at the point of diagnosis.",
    choices: [
      { text: "Mycobacterium tuberculosis", isCorrect: true },
      { text: "Histoplasma capsulatum", isCorrect: true },
      { text: "Coccidioides immitis", isCorrect: true },
      { text: "Sarcoidosis" },
      { text: "Crohn disease" },
    ],
  },
  {
    stem: "A 34-year-old African American woman has bilateral hilar lymphadenopathy, non-caseating granulomas on biopsy, and serum calcium of 11.4 mg/dL. Which mechanism explains the hypercalcemia?",
    topic: "Granulomatous Inflammation",
    explanation:
      "Activated macrophages within sarcoid granulomas express 1-alpha-hydroxylase, converting 25-hydroxyvitamin D to the active 1,25 form independently of PTH. PTH is therefore suppressed — a useful discriminator from primary hyperparathyroidism.",
    choices: [
      { text: "Macrophage 1-alpha-hydroxylase producing 1,25-dihydroxyvitamin D", isCorrect: true },
      { text: "Autonomous parathyroid hormone secretion from an adenoma" },
      { text: "PTH-related peptide from an occult carcinoma" },
      { text: "Extensive osteolytic bone destruction" },
      { text: "Excess dietary calcium intake" },
    ],
  },
  {
    stem: "Langhans giant cells are distinguished from foreign body giant cells by which feature?",
    topic: "Granulomatous Inflammation",
    explanation:
      "Langhans giant cells arrange their nuclei peripherally in a horseshoe or ring, typical of infectious and immune granulomas. Foreign body giant cells scatter their nuclei haphazardly through the cytoplasm around indigestible material such as suture or talc.",
    choices: [
      { text: "Peripheral horseshoe arrangement of nuclei", isCorrect: true },
      { text: "Randomly scattered nuclei throughout the cytoplasm" },
      { text: "A single large hyperchromatic nucleus" },
      { text: "Absence of cytoplasmic organelles" },
      { text: "Presence of intranuclear viral inclusions" },
    ],
  },
  {
    stem: "True or False: A negative acid-fast stain excludes tuberculosis as the cause of a caseating granuloma.",
    type: "TRUE_FALSE",
    topic: "Granulomatous Inflammation",
    explanation:
      "False. Organism burden in a well-formed granuloma is often low, so acid-fast stains are frequently negative even in confirmed disease. Culture or nucleic acid amplification is required before tuberculosis can be excluded.",
    choices: [{ text: "True" }, { text: "False", isCorrect: true }],
  },
  {
    stem: "Which noninfectious exposures classically cause granulomatous lung disease? Select all that apply.",
    type: "MULTI",
    topic: "Granulomatous Inflammation",
    explanation:
      "Beryllium exposure produces granulomas essentially indistinguishable from sarcoidosis, silica produces nodular fibrotic lesions with granulomatous features, and hypersensitivity pneumonitis from organic antigens produces loose granulomas. Asbestos causes fibrosis and plaques without granulomas, and coal dust causes macular lesions and progressive massive fibrosis.",
    choices: [
      { text: "Beryllium", isCorrect: true },
      { text: "Silica", isCorrect: true },
      { text: "Thermophilic actinomycete antigens in hypersensitivity pneumonitis", isCorrect: true },
      { text: "Asbestos" },
      { text: "Coal dust" },
    ],
  },
  {
    stem: "A patient with Crohn disease has a bowel biopsy. Which granuloma feature would you expect?",
    topic: "Granulomatous Inflammation",
    explanation:
      "Crohn disease produces sparse, non-caseating granulomas that may be found anywhere in the bowel wall — they are helpful when present but absent in the majority of biopsies. Caseation would instead raise the possibility of intestinal tuberculosis or Yersinia.",
    choices: [
      { text: "Non-caseating granulomas, present in a minority of biopsies", isCorrect: true },
      { text: "Caseating granulomas in every biopsy" },
      { text: "Granulomas confined strictly to the mucosa" },
      { text: "Granulomas with central abscess formation" },
      { text: "Granulomas containing Charcot-Leyden crystals" },
    ],
  },
  {
    stem: "Which stain would you request first to look for fungal organisms within a granuloma?",
    topic: "Granulomatous Inflammation",
    explanation:
      "Gomori methenamine silver stains fungal cell walls black and is the standard first-line stain; PAS is a useful alternative. Ziehl-Neelsen and auramine target mycobacteria, and Congo red targets amyloid.",
    choices: [
      { text: "Gomori methenamine silver", isCorrect: true },
      { text: "Ziehl-Neelsen" },
      { text: "Congo red" },
      { text: "Prussian blue" },
      { text: "Masson trichrome" },
    ],
  },
  {
    stem: "Foreign body granulomas differ from immune granulomas in which key respect?",
    topic: "Granulomatous Inflammation",
    explanation:
      "Foreign body granulomas form around inert indigestible material without T cell sensitization, so they do not require antigen-specific immunity. Immune granulomas depend on Th1 sensitization and IFN-gamma, which is why immunosuppression affects the two differently.",
    choices: [
      { text: "They form without T cell-mediated sensitization to an antigen", isCorrect: true },
      { text: "They always caseate centrally" },
      { text: "They contain only neutrophils and no macrophages" },
      { text: "They require interferon-gamma for formation" },
      { text: "They resolve spontaneously within 48 hours" },
    ],
  },

  /* ══════════════ INFLAMMATORY MARKER INTERPRETATION ══════════════ */
  {
    stem: "A patient has WBC 18,400/µL with 82% neutrophils, 9% bands, and toxic granulation on smear. Which term describes this picture and what does it suggest?",
    topic: "Inflammatory Marker Interpretation",
    explanation:
      "A left shift with increased band forms and toxic granulation indicates accelerated marrow release in response to bacterial infection. Leukemoid reaction is reserved for counts above roughly 50,000/µL with a high leukocyte alkaline phosphatase.",
    choices: [
      { text: "Left shift — accelerated marrow release in bacterial infection", isCorrect: true },
      { text: "Leukemoid reaction — counts above 50,000/µL" },
      { text: "Chronic myeloid leukemia — low leukocyte alkaline phosphatase" },
      { text: "Leukoerythroblastic reaction — marrow infiltration" },
      { text: "Viral lymphocytosis with atypical lymphocytes" },
    ],
  },
  {
    stem: "A patient's labs show CRP 142 mg/L, ESR 88 mm/hr, procalcitonin 6.4 ng/mL, WBC 19,000/µL. Which conclusion is best supported?",
    topic: "Inflammatory Marker Interpretation",
    explanation:
      "Procalcitonin rises preferentially in bacterial infection because bacterial toxins induce it while interferon-gamma from viral infection suppresses it. A markedly elevated procalcitonin alongside CRP and neutrophilia therefore favors bacterial sepsis over a viral or purely inflammatory cause.",
    choices: [
      { text: "Bacterial infection is favored, given the markedly elevated procalcitonin", isCorrect: true },
      { text: "Viral infection is favored, since procalcitonin rises with interferon" },
      { text: "The pattern is diagnostic of an autoimmune flare" },
      { text: "The pattern indicates laboratory error, as these markers move oppositely" },
      { text: "Malignancy is the only explanation for this combination" },
    ],
  },
  {
    stem: "Which of the following would lower an ESR despite active inflammation? Select all that apply.",
    type: "MULTI",
    topic: "Inflammatory Marker Interpretation",
    explanation:
      "Polycythemia, sickle cell disease, spherocytosis and heart failure all reduce rouleaux formation or red cell settling, falsely lowering ESR. Anemia and pregnancy raise ESR independently of inflammation, which is why ESR must always be read against the hematocrit.",
    choices: [
      { text: "Polycythemia with hematocrit 62%", isCorrect: true },
      { text: "Sickle cell disease", isCorrect: true },
      { text: "Hereditary spherocytosis", isCorrect: true },
      { text: "Iron deficiency anemia with hemoglobin 8.1 g/dL" },
      { text: "Third-trimester pregnancy" },
    ],
  },
  {
    stem: "A hospitalized patient has ferritin 1,850 ng/mL, triglycerides 480 mg/dL, fibrinogen 90 mg/dL, and pancytopenia. Which syndrome should be considered urgently?",
    topic: "Inflammatory Marker Interpretation",
    explanation:
      "Extreme hyperferritinemia with hypertriglyceridemia, hypofibrinogenemia and cytopenias suggests hemophagocytic lymphohistiocytosis, a hyperinflammatory syndrome of unrestrained macrophage activation. The LOW fibrinogen is the key discriminator — it falls despite being an acute phase reactant, because it is consumed.",
    choices: [
      { text: "Hemophagocytic lymphohistiocytosis", isCorrect: true },
      { text: "Uncomplicated bacterial pneumonia" },
      { text: "Iron overload from hereditary hemochromatosis" },
      { text: "Acute viral hepatitis" },
      { text: "Nephrotic syndrome" },
    ],
  },
  {
    stem: "True or False: A normal CRP reliably excludes any significant inflammatory process.",
    type: "TRUE_FALSE",
    topic: "Inflammatory Marker Interpretation",
    explanation:
      "False. CRP may be normal in the first 6 to 8 hours of an acute process, in some localized infections, and characteristically in active systemic lupus erythematosus without serositis or infection. Markers support clinical judgment rather than replacing it.",
    choices: [{ text: "True" }, { text: "False", isCorrect: true }],
  },
  {
    stem: "A patient with pneumonia has WBC 2,100/µL with 76% neutrophils. Which interpretation carries the greatest concern?",
    topic: "Inflammatory Marker Interpretation",
    explanation:
      "Leukopenia in the face of serious bacterial infection reflects marrow exhaustion or overwhelming sepsis and carries a worse prognosis than leukocytosis. It is a recognized adverse marker in pneumonia severity scoring and should raise rather than lower concern.",
    choices: [
      { text: "Leukopenia in sepsis indicates marrow exhaustion and a worse prognosis", isCorrect: true },
      { text: "A normal response indicating mild infection" },
      { text: "Evidence the infection is viral rather than bacterial" },
      { text: "Laboratory error, since infection always raises the count" },
      { text: "An expected finding indicating recovery" },
    ],
  },
];
