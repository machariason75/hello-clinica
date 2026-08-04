/**
 * PATHOLOGY — PRACTICE SET 3
 * Tissue Repair, Regeneration & Wound Healing
 *
 * Difficulty: Intermediate. The set where pathology starts paying off clinically
 * — surgical complications, chronic wounds, organ fibrosis.
 *
 * 90 questions across 12 topics:
 *   Regeneration & Cell Cycle · Growth Factors · Extracellular Matrix &
 *   Collagen · Angiogenesis & Granulation Tissue · Phases of Wound Healing ·
 *   Primary vs Secondary Intention · Wound Strength & Scar Maturation ·
 *   Factors Impairing Healing · Abnormal Healing · Organ Fibrosis ·
 *   Nutrition & Micronutrients · Clinical Wound Assessment
 *
 * Item mix: 66 single-answer vignettes, 13 select-all-that-apply, 11 true/false.
 * US conventional units throughout.
 */

import type { Q } from "../_lib/qbank";

export const PATHOLOGY_SET_3: Q[] = [
  /* ══════════════ REGENERATION & CELL CYCLE ══════════════ */
  {
    stem: "A patient undergoes resection of 60% of the liver for a solitary metastasis. Within weeks the liver mass has largely returned. Which statement best describes what occurred?",
    topic: "Regeneration & Cell Cycle",
    explanation:
      "Residual hepatocytes re-enter the cell cycle from G0 and proliferate — compensatory hyperplasia. The original lobes do not regrow anatomically; the remaining liver enlarges. Stem cell (oval cell) activation only becomes important when hepatocyte proliferation is itself blocked.",
    choices: [
      { text: "Existing hepatocytes left G0 and proliferated, enlarging the remnant", isCorrect: true },
      { text: "The resected lobes regrew to their original anatomic shape" },
      { text: "Oval stem cells generated the entire new parenchyma" },
      { text: "Fibroblasts transdifferentiated into hepatocytes" },
      { text: "Hepatocytes enlarged without dividing" },
    ],
  },
  {
    stem: "Which tissues are LABILE, dividing continuously throughout life? Select all that apply.",
    type: "MULTI",
    topic: "Regeneration & Cell Cycle",
    explanation:
      "Surface epithelia, gastrointestinal crypt cells and hematopoietic marrow divide continuously from a stem cell pool, which is why they are the tissues most damaged by chemotherapy. Hepatocytes are stable and cardiac myocytes permanent.",
    choices: [
      { text: "Epidermal basal keratinocytes", isCorrect: true },
      { text: "Intestinal crypt epithelium", isCorrect: true },
      { text: "Hematopoietic bone marrow cells", isCorrect: true },
      { text: "Hepatocytes" },
      { text: "Cardiac myocytes" },
    ],
  },
  {
    stem: "Which checkpoint prevents a cell with damaged DNA from entering S phase, and which protein enforces it?",
    topic: "Regeneration & Cell Cycle",
    explanation:
      "The G1/S checkpoint is enforced by p53, which induces p21 to inhibit cyclin-dependent kinases and arrest the cycle. Loss of p53 allows damaged DNA to be replicated, which is why it is the most commonly mutated gene in human cancer.",
    choices: [
      { text: "G1/S checkpoint, enforced by p53 via p21", isCorrect: true },
      { text: "G2/M checkpoint, enforced by BRCA1 via cyclin D" },
      { text: "Spindle assembly checkpoint, enforced by RB" },
      { text: "G0 exit checkpoint, enforced by telomerase" },
      { text: "S phase checkpoint, enforced by BCL-2" },
    ],
  },
  {
    stem: "Retinoblastoma protein (RB) in its hypophosphorylated state does what?",
    topic: "Regeneration & Cell Cycle",
    explanation:
      "Hypophosphorylated RB binds and sequesters E2F, holding the cell in G1. Cyclin D–CDK4/6 phosphorylation releases E2F and permits S phase entry — the reason CDK4/6 inhibitors such as palbociclib arrest tumor cells in G1.",
    choices: [
      { text: "Binds E2F and blocks progression from G1 into S phase", isCorrect: true },
      { text: "Releases E2F and drives entry into S phase" },
      { text: "Activates caspase-9 to initiate apoptosis" },
      { text: "Repairs double-stranded DNA breaks directly" },
      { text: "Elongates telomeres in dividing cells" },
    ],
  },
  {
    stem: "True or False: Regeneration restores both the structure and the function of the injured tissue, whereas repair by scar restores neither fully.",
    type: "TRUE_FALSE",
    topic: "Regeneration & Cell Cycle",
    explanation:
      "True. Regeneration reconstitutes native parenchyma and function; scar provides mechanical continuity only. This distinction explains why a myocardial infarct leaves permanent contractile deficit while a superficial skin abrasion heals invisibly.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Why does severe alcoholic hepatitis progress to cirrhosis rather than regenerating normally?",
    topic: "Regeneration & Cell Cycle",
    explanation:
      "Regeneration requires an intact reticulin and basement membrane framework to guide hepatocytes into normal lobular architecture. When that scaffold is destroyed, hepatocytes proliferate into disorganized nodules separated by fibrous septa — cirrhosis. Hepatocyte proliferative capacity itself is preserved.",
    choices: [
      { text: "The stromal framework is destroyed, so regrowth is nodular and disorganized", isCorrect: true },
      { text: "Hepatocytes permanently lose the capacity to divide" },
      { text: "The liver becomes a permanent rather than stable tissue" },
      { text: "All hepatic stem cells are eliminated by alcohol" },
      { text: "Collagen synthesis ceases entirely in the injured liver" },
    ],
  },
  {
    stem: "Which cell provides the stem cell reservoir for epidermal regeneration after a partial-thickness burn?",
    topic: "Regeneration & Cell Cycle",
    explanation:
      "Keratinocyte stem cells in the hair follicle bulge and in the basal layer of adnexal structures repopulate the epidermis, which is why partial-thickness burns re-epithelialize without grafting. Full-thickness burns destroy the adnexa, removing that reservoir.",
    choices: [
      { text: "Keratinocyte stem cells in the hair follicle bulge and adnexa", isCorrect: true },
      { text: "Circulating hematopoietic stem cells" },
      { text: "Dermal fibroblasts transdifferentiating to keratinocytes" },
      { text: "Melanocytes in the basal layer" },
      { text: "Langerhans cells in the stratum spinosum" },
    ],
  },
  {
    stem: "A peripheral nerve is transected. Which regenerative process occurs, and at what approximate rate?",
    topic: "Regeneration & Cell Cycle",
    explanation:
      "Wallerian degeneration distal to the injury is followed by axonal sprouting that advances roughly 1 mm per day along Schwann cell tubes. This rate is what allows a surgeon to predict recovery timing after repair. CNS axons do not regenerate comparably, owing to inhibitory myelin signals and glial scar.",
    choices: [
      { text: "Axonal regrowth along Schwann cell tubes at about 1 mm per day", isCorrect: true },
      { text: "Neuronal cell body division producing replacement neurons" },
      { text: "Oligodendrocyte-guided regrowth at about 1 cm per day" },
      { text: "Complete functional recovery within 48 hours" },
      { text: "Regeneration only if the endoneurial tube is destroyed" },
    ],
  },

  /* ══════════════ GROWTH FACTORS ══════════════ */
  {
    stem: "Which growth factor is the principal stimulus for fibroblast migration and proliferation in a healing wound, and which cell is its main early source?",
    topic: "Growth Factors",
    explanation:
      "Platelet-derived growth factor is released from platelet alpha granules at the moment of injury and recruits fibroblasts and smooth muscle cells. VEGF drives angiogenesis and EGF drives epithelial regrowth — each growth factor has a distinct principal target.",
    choices: [
      { text: "PDGF from platelet alpha granules", isCorrect: true },
      { text: "VEGF from hypoxic endothelium" },
      { text: "EGF from keratinocytes" },
      { text: "Erythropoietin from renal interstitial cells" },
      { text: "G-CSF from marrow stromal cells" },
    ],
  },
  {
    stem: "Which of the following are actions of TGF-beta in wound healing? Select all that apply.",
    type: "MULTI",
    topic: "Growth Factors",
    explanation:
      "TGF-beta stimulates fibroblast collagen and fibronectin synthesis, inhibits matrix metalloproteinases, promotes tissue inhibitors of metalloproteinases, and suppresses lymphocyte proliferation. It is the most potent fibrogenic cytokine, which is why excess TGF-beta drives pathologic fibrosis. It does not stimulate epithelial proliferation — it inhibits it.",
    choices: [
      { text: "Stimulates fibroblast collagen synthesis", isCorrect: true },
      { text: "Inhibits matrix metalloproteinase activity", isCorrect: true },
      { text: "Suppresses lymphocyte proliferation", isCorrect: true },
      { text: "Stimulates epithelial cell proliferation" },
      { text: "Promotes degradation of extracellular matrix" },
    ],
  },
  {
    stem: "Bevacizumab impairs surgical wound healing. Which growth factor does it target, and which step of healing suffers most?",
    topic: "Growth Factors",
    explanation:
      "Bevacizumab is an anti-VEGF antibody, so angiogenesis in granulation tissue is impaired and wounds heal poorly or dehisce. Surgery is typically deferred for weeks around bevacizumab dosing for this reason.",
    choices: [
      { text: "VEGF — angiogenesis within granulation tissue", isCorrect: true },
      { text: "PDGF — fibroblast recruitment" },
      { text: "EGF — re-epithelialization" },
      { text: "TGF-beta — collagen cross-linking" },
      { text: "FGF-7 — keratinocyte migration" },
    ],
  },
  {
    stem: "Hypoxia within a wound bed drives angiogenesis primarily through which transcriptional mechanism?",
    topic: "Growth Factors",
    explanation:
      "Low oxygen stabilizes hypoxia-inducible factor-1 alpha, which would otherwise be hydroxylated and degraded; stabilized HIF-1a transactivates VEGF. This is the same pathway exploited by von Hippel-Lindau tumors, where failure to degrade HIF causes constitutive VEGF production.",
    choices: [
      { text: "Stabilization of HIF-1 alpha driving VEGF transcription", isCorrect: true },
      { text: "Degradation of HIF-1 alpha releasing VEGF from inhibition" },
      { text: "Direct activation of the VEGF receptor by low oxygen" },
      { text: "NF-kB mediated suppression of angiostatin" },
      { text: "p53-driven transcription of endostatin" },
    ],
  },
  {
    stem: "True or False: Epidermal growth factor and transforming growth factor-alpha share the same receptor.",
    type: "TRUE_FALSE",
    topic: "Growth Factors",
    explanation:
      "True. Both bind EGFR (ERBB1), which explains their overlapping mitogenic effects on epithelium. EGFR is the target of cetuximab and erlotinib in oncology, and the skin rash those drugs cause reflects the receptor's normal role in keratinocytes.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which growth factor signaling defect underlies achondroplasia, and what is the functional consequence?",
    topic: "Growth Factors",
    explanation:
      "A constitutively active FGFR3 mutation persistently INHIBITS chondrocyte proliferation at the growth plate, producing short limbs with a normal trunk. The counterintuitive point is that a gain-of-function mutation causes a loss of growth, because FGFR3 is a negative regulator here.",
    choices: [
      { text: "Constitutive FGFR3 activation inhibiting growth plate chondrocytes", isCorrect: true },
      { text: "Loss of FGFR3 function removing inhibition of chondrocytes" },
      { text: "VEGF deficiency preventing epiphyseal vascular invasion" },
      { text: "Excess growth hormone acting on the growth plate" },
      { text: "Type I collagen mutation weakening the bone matrix" },
    ],
  },
  {
    stem: "Becaplermin, a topical agent for diabetic foot ulcers, is a recombinant form of which growth factor?",
    topic: "Growth Factors",
    explanation:
      "Becaplermin is recombinant PDGF-BB, applied to stimulate fibroblast recruitment and granulation in chronic wounds where endogenous growth factor signaling is deficient. It targets the step most often impaired in diabetic ulceration.",
    choices: [
      { text: "Platelet-derived growth factor", isCorrect: true },
      { text: "Vascular endothelial growth factor" },
      { text: "Epidermal growth factor" },
      { text: "Transforming growth factor-beta" },
      { text: "Insulin-like growth factor-1" },
    ],
  },
  {
    stem: "Which cell secretes the growth factors that dominate the PROLIFERATIVE phase of healing, days 3 to 14?",
    topic: "Growth Factors",
    explanation:
      "The macrophage is the central conductor of the proliferative phase, secreting PDGF, VEGF, FGF and TGF-beta. Depleting macrophages experimentally severely impairs healing — platelets matter only in the first hours, and fibroblasts respond rather than direct.",
    choices: [
      { text: "The macrophage", isCorrect: true },
      { text: "The platelet" },
      { text: "The neutrophil" },
      { text: "The mast cell" },
      { text: "The plasma cell" },
    ],
  },

  /* ══════════════ EXTRACELLULAR MATRIX & COLLAGEN ══════════════ */
  {
    stem: "Which collagen type predominates in early granulation tissue, and which replaces it during scar maturation?",
    topic: "Extracellular Matrix & Collagen",
    explanation:
      "Type III collagen dominates early, providing a pliable provisional matrix, and is progressively replaced by stronger type I collagen as the scar matures. That substitution is the main reason wound tensile strength continues rising for months after the wound looks healed.",
    choices: [
      { text: "Type III early, replaced by type I", isCorrect: true },
      { text: "Type I early, replaced by type III" },
      { text: "Type IV early, replaced by type II" },
      { text: "Type II early, replaced by type I" },
      { text: "Type VII early, replaced by type IV" },
    ],
  },
  {
    stem: "Which vitamin is required for hydroxylation of proline and lysine residues in procollagen?",
    topic: "Extracellular Matrix & Collagen",
    explanation:
      "Vitamin C is the cofactor for prolyl and lysyl hydroxylase; without it the triple helix is unstable and collagen degrades. This is why scurvy produces bleeding gums, poor wound healing and perifollicular hemorrhage — all failures of collagen-dependent structures.",
    choices: [
      { text: "Vitamin C", isCorrect: true },
      { text: "Vitamin K" },
      { text: "Vitamin A" },
      { text: "Vitamin D" },
      { text: "Vitamin B12" },
    ],
  },
  {
    stem: "Which enzyme cross-links collagen fibrils, and which trace element does it require?",
    topic: "Extracellular Matrix & Collagen",
    explanation:
      "Lysyl oxidase is a copper-dependent enzyme that forms covalent cross-links between collagen and elastin molecules. Copper deficiency, as in Menkes disease, therefore produces vascular fragility and connective tissue weakness.",
    choices: [
      { text: "Lysyl oxidase — copper", isCorrect: true },
      { text: "Prolyl hydroxylase — iron" },
      { text: "Transglutaminase — calcium" },
      { text: "Matrix metalloproteinase-2 — zinc" },
      { text: "Sulfotransferase — molybdenum" },
    ],
  },
  {
    stem: "Match each collagen type to its main location. Which pairings are correct? Select all that apply.",
    type: "MULTI",
    topic: "Extracellular Matrix & Collagen",
    explanation:
      "Type I is in bone, skin and tendon; type II in cartilage and vitreous; type IV in basement membrane. Type III is in reticular fibers, blood vessels and granulation tissue rather than cornea, and type V is not the principal collagen of bone.",
    choices: [
      { text: "Type I — bone, skin, tendon, mature scar", isCorrect: true },
      { text: "Type II — hyaline cartilage and vitreous humor", isCorrect: true },
      { text: "Type IV — basement membrane", isCorrect: true },
      { text: "Type III — corneal stroma" },
      { text: "Type V — the principal collagen of cortical bone" },
    ],
  },
  {
    stem: "A patient has hyperextensible skin, hypermobile joints and a history of arterial rupture. Which collagen defect is most likely?",
    topic: "Extracellular Matrix & Collagen",
    explanation:
      "Vascular Ehlers-Danlos syndrome results from a type III collagen (COL3A1) defect, and arterial, bowel and uterine rupture are its feared complications. Type I defects produce osteogenesis imperfecta with fractures and blue sclerae instead.",
    choices: [
      { text: "Type III collagen (COL3A1)", isCorrect: true },
      { text: "Type I collagen (COL1A1)" },
      { text: "Type IV collagen (COL4A5)" },
      { text: "Fibrillin-1 (FBN1)" },
      { text: "Elastin (ELN)" },
    ],
  },
  {
    stem: "True or False: Matrix metalloproteinases require zinc and are inhibited by TIMPs.",
    type: "TRUE_FALSE",
    topic: "Extracellular Matrix & Collagen",
    explanation:
      "True. MMPs are zinc-dependent endopeptidases that remodel matrix, and tissue inhibitors of metalloproteinases regulate them. The MMP–TIMP balance determines whether a wound remodels productively or degrades into a chronic non-healing ulcer.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which matrix component provides the provisional scaffold that cells migrate along in the first days after injury?",
    topic: "Extracellular Matrix & Collagen",
    explanation:
      "Fibronectin, deposited within the fibrin clot, binds integrins and guides fibroblast and keratinocyte migration into the wound. Mature collagen and elastin are laid down later and are not the early migratory substrate.",
    choices: [
      { text: "Fibronectin within the fibrin clot", isCorrect: true },
      { text: "Mature type I collagen bundles" },
      { text: "Elastin microfibrils" },
      { text: "Hydroxyapatite crystals" },
      { text: "Keratin intermediate filaments" },
    ],
  },
  {
    stem: "Osteogenesis imperfecta most commonly results from which molecular abnormality?",
    topic: "Extracellular Matrix & Collagen",
    explanation:
      "A glycine substitution in the type I collagen triple helix disrupts assembly, producing fragile bone, blue sclerae and hearing loss. Because glycine must occupy every third position for the helix to pack, even a single substitution is disruptive — a dominant negative effect.",
    choices: [
      { text: "Glycine substitution disrupting the type I collagen triple helix", isCorrect: true },
      { text: "Complete absence of type II collagen" },
      { text: "Failure of vitamin C dependent hydroxylation" },
      { text: "Copper deficiency impairing lysyl oxidase" },
      { text: "Fibrillin-1 mutation weakening elastic fibers" },
    ],
  },

  /* ══════════════ ANGIOGENESIS & GRANULATION TISSUE ══════════════ */
  {
    stem: "Which combination of features defines granulation tissue histologically?",
    topic: "Angiogenesis & Granulation Tissue",
    explanation:
      "Granulation tissue is proliferating fibroblasts with new thin-walled capillaries in a loose edematous matrix containing macrophages. The name refers to its granular gross appearance, not to granulomas — a confusion worth avoiding.",
    choices: [
      { text: "Proliferating fibroblasts, new capillaries, loose matrix and macrophages", isCorrect: true },
      { text: "Epithelioid macrophages surrounded by a lymphocyte cuff" },
      { text: "Dense acellular collagen with few vessels" },
      { text: "Necrotic neutrophils within a fibrous wall" },
      { text: "Multinucleate giant cells around foreign material" },
    ],
  },
  {
    stem: "At approximately what day after injury does granulation tissue become maximal in a clean surgical wound?",
    topic: "Angiogenesis & Granulation Tissue",
    explanation:
      "Granulation tissue peaks around day 5 to 7, when neovascularization and fibroblast proliferation are most active. It then regresses as vessels involute during remodeling, which is why a young scar is red and an old one is pale.",
    choices: [
      { text: "Day 5 to 7", isCorrect: true },
      { text: "Day 1 to 2" },
      { text: "Day 14 to 21" },
      { text: "Day 30 to 45" },
      { text: "Day 60 to 90" },
    ],
  },
  {
    stem: "Which of the following are steps in angiogenesis from pre-existing vessels? Select all that apply.",
    type: "MULTI",
    topic: "Angiogenesis & Granulation Tissue",
    explanation:
      "Angiogenesis requires vasodilation with increased permeability, degradation of basement membrane by MMPs, endothelial migration and proliferation, and pericyte recruitment to stabilize the new vessel. Recruitment of circulating hepatocytes plays no part, and basement membrane must be broken down rather than thickened.",
    choices: [
      { text: "Nitric oxide mediated vasodilation with increased permeability", isCorrect: true },
      { text: "Proteolytic degradation of basement membrane by MMPs", isCorrect: true },
      { text: "Pericyte recruitment to stabilize the new vessel", isCorrect: true },
      { text: "Thickening of the parent vessel basement membrane" },
      { text: "Recruitment of circulating hepatocytes" },
    ],
  },
  {
    stem: "Newly formed capillaries in granulation tissue are leaky. What is the clinical consequence?",
    topic: "Angiogenesis & Granulation Tissue",
    explanation:
      "Immature vessels lack complete pericyte coverage and tight junctions, so the wound bed is edematous and bleeds easily on contact. This explains both the swelling of a fresh wound and the friability of exuberant granulation tissue.",
    choices: [
      { text: "Wound edema and easy bleeding on contact", isCorrect: true },
      { text: "Ischemia of the wound bed from vessel occlusion" },
      { text: "Impaired leukocyte access to the wound" },
      { text: "Excessive scar contraction in the first 48 hours" },
      { text: "Immediate restoration of normal tensile strength" },
    ],
  },
  {
    stem: "True or False: Exuberant granulation tissue, sometimes called proud flesh, can block re-epithelialization.",
    type: "TRUE_FALSE",
    topic: "Angiogenesis & Granulation Tissue",
    explanation:
      "True. Granulation tissue rising above the wound margin prevents keratinocytes from migrating across, so the wound stays open. Treatment is cautery or excision of the excess tissue to restore a flat surface for epithelial advance.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which cell differentiates from the fibroblast to generate wound contraction, and which marker identifies it?",
    topic: "Angiogenesis & Granulation Tissue",
    explanation:
      "The myofibroblast expresses alpha-smooth muscle actin and generates the contractile force that draws wound edges together. TGF-beta drives this differentiation, which is why excessive TGF-beta signaling produces contractures.",
    choices: [
      { text: "The myofibroblast, expressing alpha-smooth muscle actin", isCorrect: true },
      { text: "The pericyte, expressing desmin only" },
      { text: "The macrophage, expressing CD68" },
      { text: "The endothelial cell, expressing CD31" },
      { text: "The mast cell, expressing tryptase" },
    ],
  },
  {
    stem: "A pyogenic granuloma on the gingiva of a pregnant woman is best described as which lesion?",
    topic: "Angiogenesis & Granulation Tissue",
    explanation:
      "Despite its name it is neither pyogenic nor a granuloma — it is a lobular capillary hemangioma, an exuberant proliferation of granulation-type tissue. It commonly arises in pregnancy and often regresses postpartum.",
    choices: [
      { text: "A lobular capillary hemangioma of granulation-type tissue", isCorrect: true },
      { text: "A true granuloma with epithelioid macrophages" },
      { text: "A pyogenic abscess requiring drainage" },
      { text: "A squamous cell carcinoma variant" },
      { text: "An amyloid deposit within the gingiva" },
    ],
  },
  {
    stem: "Which endogenous inhibitors oppose angiogenesis?",
    topic: "Angiogenesis & Granulation Tissue",
    explanation:
      "Angiostatin, endostatin and thrombospondin-1 are endogenous antiangiogenic factors that counterbalance VEGF and FGF. The balance between these opposing sets determines whether a wound vascularizes or a tumor establishes its blood supply.",
    choices: [
      { text: "Angiostatin, endostatin and thrombospondin-1", isCorrect: true },
      { text: "VEGF, FGF-2 and angiopoietin-1" },
      { text: "PDGF, TGF-beta and IL-8" },
      { text: "HIF-1 alpha, nitric oxide and bradykinin" },
      { text: "MMP-2, MMP-9 and plasmin" },
    ],
  },

  /* ══════════════ PHASES OF WOUND HEALING ══════════════ */
  {
    stem: "Place the phases of cutaneous wound healing in order, with approximate timing.",
    topic: "Phases of Wound Healing",
    explanation:
      "Hemostasis occupies the first minutes, inflammation days 1 to 3, proliferation days 3 to 14, and remodeling from about week 3 onward for up to a year or more. Remodeling is by far the longest phase, which is why final scar appearance cannot be judged early.",
    choices: [
      { text: "Hemostasis → inflammation → proliferation → remodeling", isCorrect: true },
      { text: "Inflammation → hemostasis → remodeling → proliferation" },
      { text: "Proliferation → hemostasis → inflammation → remodeling" },
      { text: "Hemostasis → proliferation → inflammation → remodeling" },
      { text: "Remodeling → inflammation → hemostasis → proliferation" },
    ],
  },
  {
    stem: "At approximately what time after injury does re-epithelialization of a sutured surgical incision typically complete?",
    topic: "Phases of Wound Healing",
    explanation:
      "Keratinocytes migrate across an approximated incision and restore a continuous epithelial layer within 24 to 48 hours, which is the basis for allowing showering at that point. Tensile strength, by contrast, remains minimal for weeks.",
    choices: [
      { text: "24 to 48 hours", isCorrect: true },
      { text: "6 to 8 hours" },
      { text: "5 to 7 days" },
      { text: "2 to 3 weeks" },
      { text: "6 to 8 weeks" },
    ],
  },
  {
    stem: "Which events characterize day 1 to 3 of healing? Select all that apply.",
    type: "MULTI",
    topic: "Phases of Wound Healing",
    explanation:
      "The early inflammatory phase features neutrophil infiltration, fibrin clot formation with scab, keratinocyte migration beginning, and macrophage arrival toward day 2 to 3. Collagen cross-linking and myofibroblast contraction belong to later phases.",
    choices: [
      { text: "Neutrophil infiltration of the wound margin", isCorrect: true },
      { text: "Fibrin clot and scab formation", isCorrect: true },
      { text: "Macrophage arrival beginning around day 2 to 3", isCorrect: true },
      { text: "Maximal collagen cross-linking" },
      { text: "Peak myofibroblast-mediated contraction" },
    ],
  },
  {
    stem: "Neutrophil depletion experimentally has little effect on wound healing, but macrophage depletion is devastating. What does this indicate?",
    topic: "Phases of Wound Healing",
    explanation:
      "The macrophage is indispensable because it both clears debris and orchestrates the proliferative phase through PDGF, VEGF, FGF and TGF-beta. Neutrophils are largely redundant for healing in a clean wound, though they matter for controlling contamination.",
    choices: [
      { text: "Macrophages both debride and direct the proliferative phase", isCorrect: true },
      { text: "Neutrophils are the primary source of collagen" },
      { text: "Macrophages are required only for hemostasis" },
      { text: "Neutrophils drive angiogenesis through VEGF" },
      { text: "Healing depends chiefly on lymphocyte cytokines" },
    ],
  },
  {
    stem: "True or False: The remodeling phase can continue for up to a year or more after the wound appears closed.",
    type: "TRUE_FALSE",
    topic: "Phases of Wound Healing",
    explanation:
      "True. Collagen is continually degraded and re-synthesized with progressive cross-linking and reorientation along stress lines, so scars keep changing in strength and appearance for many months. This is why definitive scar revision is usually deferred at least a year.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "By day 5 of healing, which histologic feature is most prominent at the incision site?",
    topic: "Phases of Wound Healing",
    explanation:
      "By day 5 the incisional space is filled with granulation tissue and neovascularization is maximal, with collagen beginning to bridge the incision. Neutrophils have largely given way to macrophages, and dense collagen deposition comes later.",
    choices: [
      { text: "Granulation tissue filling the incisional space with peak neovascularity", isCorrect: true },
      { text: "A dense neutrophilic infiltrate with fibrin" },
      { text: "Mature type I collagen bundles aligned along stress lines" },
      { text: "Complete regression of all capillaries" },
      { text: "Epithelioid granuloma formation" },
    ],
  },
  {
    stem: "Hemostasis after injury involves which sequence?",
    topic: "Phases of Wound Healing",
    explanation:
      "Vasoconstriction is followed by platelet adhesion via von Willebrand factor, aggregation, and fibrin clot formation through the coagulation cascade. The clot both stops bleeding and provides the provisional matrix for cell migration.",
    choices: [
      { text: "Vasoconstriction → platelet adhesion → aggregation → fibrin clot", isCorrect: true },
      { text: "Vasodilation → fibrinolysis → platelet adhesion → clot" },
      { text: "Platelet aggregation → vasodilation → collagen deposition" },
      { text: "Fibrin clot → vasoconstriction → platelet adhesion" },
      { text: "Neutrophil influx → vasoconstriction → clot formation" },
    ],
  },
  {
    stem: "Which phase is most impaired by systemic corticosteroid therapy, and by what mechanism?",
    topic: "Phases of Wound Healing",
    explanation:
      "Corticosteroids suppress the inflammatory phase and inhibit TGF-beta driven collagen synthesis and fibroblast proliferation, weakening the scar. Vitamin A can partially reverse the effect, which is a recognized adjunct in steroid-dependent surgical patients.",
    choices: [
      { text: "Inflammation and collagen synthesis, via suppressed TGF-beta and fibroblast activity", isCorrect: true },
      { text: "Hemostasis, via impaired platelet aggregation" },
      { text: "Re-epithelialization only, via keratinocyte death" },
      { text: "Remodeling only, via excessive MMP inhibition" },
      { text: "Angiogenesis only, via VEGF receptor blockade" },
    ],
  },

  /* ══════════════ PRIMARY VS SECONDARY INTENTION ══════════════ */
  {
    stem: "Which features characterize healing by SECONDARY intention compared with primary intention?",
    topic: "Primary vs Secondary Intention",
    explanation:
      "Secondary intention involves a large tissue defect, so there is more inflammation, far more granulation tissue, substantial wound contraction by myofibroblasts, and a larger scar. Primary intention closes a narrow approximated incision with minimal granulation and negligible contraction.",
    choices: [
      { text: "More granulation tissue, marked contraction, larger scar", isCorrect: true },
      { text: "Less granulation tissue and negligible contraction" },
      { text: "Faster complete closure than primary intention" },
      { text: "No requirement for re-epithelialization" },
      { text: "Absence of myofibroblast activity" },
    ],
  },
  {
    stem: "A wound heals by secondary intention and reduces to 20% of its original area within 6 weeks. Which cell is responsible?",
    topic: "Primary vs Secondary Intention",
    explanation:
      "Myofibroblasts generate contraction, and in large open wounds they can reduce area dramatically. The same mechanism becomes pathologic across a joint or in the esophagus, where it produces a disabling contracture or stricture.",
    choices: [
      { text: "The myofibroblast", isCorrect: true },
      { text: "The keratinocyte" },
      { text: "The macrophage" },
      { text: "The endothelial cell" },
      { text: "The neutrophil" },
    ],
  },
  {
    stem: "Delayed primary closure (tertiary intention) is chosen in which situation?",
    topic: "Primary vs Secondary Intention",
    explanation:
      "A contaminated wound is left open for several days to allow debridement and control of infection before it is surgically closed, combining the safety of open management with the cosmetic benefit of closure. Immediate closure of a contaminated wound risks abscess formation.",
    choices: [
      { text: "A contaminated wound left open then closed after several days", isCorrect: true },
      { text: "A clean surgical incision closed immediately" },
      { text: "A superficial abrasion left to epithelialize" },
      { text: "A full-thickness burn requiring immediate grafting" },
      { text: "A chronic venous ulcer managed with compression" },
    ],
  },
  {
    stem: "True or False: Wound contraction and wound contracture describe the same process, one physiologic and one pathologic.",
    type: "TRUE_FALSE",
    topic: "Primary vs Secondary Intention",
    explanation:
      "True. Both are myofibroblast-driven. Contraction is the useful reduction in open wound area; contracture is the same force producing deformity and restricted movement, typically across a joint or over the anterior neck after a burn.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which of the following favor healing by primary intention? Select all that apply.",
    type: "MULTI",
    topic: "Primary vs Secondary Intention",
    explanation:
      "Clean, sharply incised wounds with approximated edges, minimal tissue loss and no infection heal by primary intention. Extensive tissue loss and established infection both force secondary intention.",
    choices: [
      { text: "Clean sharply incised edges", isCorrect: true },
      { text: "Minimal tissue loss", isCorrect: true },
      { text: "Absence of bacterial infection", isCorrect: true },
      { text: "Extensive avulsion of skin and subcutaneous tissue" },
      { text: "Established purulent infection in the wound bed" },
    ],
  },
  {
    stem: "A patient has a full-thickness burn to the anterior neck. Which late complication should be anticipated and planned for?",
    topic: "Primary vs Secondary Intention",
    explanation:
      "Myofibroblast-mediated contracture across the anterior neck restricts extension and can compromise the airway and swallowing. Early grafting, splinting and physical therapy are used specifically to prevent it, so anticipating it changes management from the outset.",
    choices: [
      { text: "Contracture limiting neck extension", isCorrect: true },
      { text: "Excessive wound dehiscence at day 3" },
      { text: "Failure of any epithelialization to occur" },
      { text: "Malignant transformation within 6 weeks" },
      { text: "Progressive wound enlargement from contraction failure" },
    ],
  },
  {
    stem: "Why does a sutured incision have only about 10% of normal skin tensile strength at one week?",
    topic: "Primary vs Secondary Intention",
    explanation:
      "At one week the wound holds mainly by sutures and immature type III collagen with few cross-links. Strength rises as type I collagen replaces type III and cross-linking progresses, reaching roughly 70 to 80% of normal at three months and never fully returning to baseline.",
    choices: [
      { text: "Collagen is immature type III with minimal cross-linking", isCorrect: true },
      { text: "No collagen has been deposited at all by one week" },
      { text: "Epithelialization has not yet begun" },
      { text: "Myofibroblasts have degraded the existing collagen" },
      { text: "Wound strength is maximal at one week and then declines" },
    ],
  },

  /* ══════════════ WOUND STRENGTH & SCAR MATURATION ══════════════ */
  {
    stem: "Approximately what proportion of original tensile strength does a mature scar ultimately achieve?",
    topic: "Wound Strength & Scar Maturation",
    explanation:
      "A mature scar plateaus at roughly 70 to 80% of unwounded skin strength and never reaches 100%, because collagen fiber architecture is never fully restored to the original basketweave pattern. This is why previously operated abdominal walls remain a hernia risk.",
    choices: [
      { text: "About 70 to 80%", isCorrect: true },
      { text: "About 10 to 20%" },
      { text: "About 40 to 50%" },
      { text: "About 95 to 100%" },
      { text: "Greater than the original strength" },
    ],
  },
  {
    stem: "During remodeling, net collagen content stays roughly constant while strength rises. How?",
    topic: "Wound Strength & Scar Maturation",
    explanation:
      "Synthesis and MMP-mediated degradation proceed in balance while fibers are reoriented along lines of stress and cross-linking increases. Strength therefore comes from better organization rather than more collagen — an important conceptual point.",
    choices: [
      { text: "Fibers reorient along stress lines and cross-linking increases", isCorrect: true },
      { text: "Total collagen mass increases fivefold" },
      { text: "Type I collagen is replaced by type III" },
      { text: "Myofibroblasts deposit elastin in place of collagen" },
      { text: "Capillary density progressively increases" },
    ],
  },
  {
    stem: "When are abdominal skin sutures typically removed, and what governs the timing?",
    topic: "Wound Strength & Scar Maturation",
    explanation:
      "Around 7 to 10 days, balancing sufficient early collagen strength against the suture track marks that develop with longer retention. Face sutures come out sooner at 3 to 5 days for cosmesis, and areas under tension such as the back stay longer.",
    choices: [
      { text: "7 to 10 days, balancing early strength against suture marks", isCorrect: true },
      { text: "24 hours, once epithelialization is complete" },
      { text: "3 weeks, once maximal tensile strength is reached" },
      { text: "6 weeks, once remodeling is complete" },
      { text: "Timing is arbitrary and not related to healing biology" },
    ],
  },
  {
    stem: "True or False: A scar continues to remodel and typically becomes paler and flatter over 6 to 12 months.",
    type: "TRUE_FALSE",
    topic: "Wound Strength & Scar Maturation",
    explanation:
      "True. Capillary regression accounts for the fading of redness, and collagen reorganization for the flattening. This natural course is why scar revision surgery is generally deferred for at least a year.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which factors increase the risk of an unsightly widened scar? Select all that apply.",
    type: "MULTI",
    topic: "Wound Strength & Scar Maturation",
    explanation:
      "Wound tension, movement across a joint, orientation across rather than along relaxed skin tension lines, and infection all widen scars. Careful eversion of edges and closure along tension lines reduce it.",
    choices: [
      { text: "Closure under tension", isCorrect: true },
      { text: "Location across a mobile joint", isCorrect: true },
      { text: "Orientation perpendicular to relaxed skin tension lines", isCorrect: true },
      { text: "Meticulous eversion of the wound edges" },
      { text: "Closure parallel to relaxed skin tension lines" },
    ],
  },
  {
    stem: "Which suture-related factor most increases the risk of wound infection?",
    topic: "Wound Strength & Scar Maturation",
    explanation:
      "Braided multifilament sutures have interstices that harbor bacteria and shield them from phagocytes, raising infection risk relative to monofilament. Absorbability and color are not the operative variables here.",
    choices: [
      { text: "Braided multifilament construction", isCorrect: true },
      { text: "Monofilament construction" },
      { text: "Dyed rather than undyed material" },
      { text: "Synthetic rather than natural origin" },
      { text: "Absorbable rather than nonabsorbable material" },
    ],
  },
  {
    stem: "An abdominal fascial closure is at greatest risk of dehiscence at approximately which postoperative day?",
    topic: "Wound Strength & Scar Maturation",
    explanation:
      "Days 5 to 8 represent the trough between loss of the initial fibrin and suture-dependent strength and the arrival of meaningful collagen strength. Classic teaching links dehiscence to a sudden serosanguinous discharge in that window.",
    choices: [
      { text: "Day 5 to 8", isCorrect: true },
      { text: "Day 1 to 2" },
      { text: "Day 14 to 21" },
      { text: "Day 30 to 40" },
      { text: "Day 90 or later" },
    ],
  },

  /* ══════════════ FACTORS IMPAIRING HEALING ══════════════ */
  {
    stem: "A 62-year-old man with type 2 diabetes has a non-healing plantar ulcer. Hemoglobin A1c is 10.8%. Which combination of mechanisms best explains impaired healing?",
    topic: "Factors Impairing Healing",
    explanation:
      "Diabetes impairs healing through microvascular disease reducing perfusion, neuropathy removing protective sensation and allowing repeated trauma, and hyperglycemia impairing neutrophil chemotaxis and phagocytosis. It is a multifactorial failure, which is why single interventions rarely suffice.",
    choices: [
      { text: "Microangiopathy, neuropathy and impaired neutrophil function", isCorrect: true },
      { text: "Excess collagen synthesis producing a rigid wound bed" },
      { text: "Accelerated re-epithelialization outpacing the dermis" },
      { text: "Complement overactivation destroying granulation tissue" },
      { text: "Isolated vitamin K deficiency" },
    ],
  },
  {
    stem: "Which of the following impair wound healing? Select all that apply.",
    type: "MULTI",
    topic: "Factors Impairing Healing",
    explanation:
      "Ischemia, infection, foreign bodies, corticosteroids and protein-calorie malnutrition all impair healing. Moist wound environments and adequate zinc actually promote it, so dry dressings and zinc deficiency are the problems rather than their opposites.",
    choices: [
      { text: "Local tissue ischemia from peripheral arterial disease", isCorrect: true },
      { text: "Retained foreign body such as suture or glass", isCorrect: true },
      { text: "Systemic corticosteroid therapy", isCorrect: true },
      { text: "A moist wound environment" },
      { text: "Adequate dietary zinc intake" },
    ],
  },
  {
    stem: "Why does infection impair healing even when the organism is of low virulence?",
    topic: "Factors Impairing Healing",
    explanation:
      "Persistent bacteria prolong the inflammatory phase, and neutrophil proteases and MMPs degrade the extracellular matrix as fast as fibroblasts deposit it. The wound stalls in inflammation rather than progressing to proliferation — the defining feature of a chronic wound.",
    choices: [
      { text: "It traps the wound in a prolonged, matrix-degrading inflammatory phase", isCorrect: true },
      { text: "It accelerates the wound directly into remodeling" },
      { text: "It causes excessive myofibroblast contraction" },
      { text: "It stimulates premature epithelial closure over infected tissue" },
      { text: "It increases collagen cross-linking beyond normal" },
    ],
  },
  {
    stem: "A patient is on chronic prednisone and requires elective surgery. Which supplement has evidence for partially reversing steroid-impaired healing?",
    topic: "Factors Impairing Healing",
    explanation:
      "Vitamin A counteracts the corticosteroid block on the inflammatory phase and collagen synthesis, and is used perioperatively in steroid-dependent patients. Vitamin K addresses coagulation rather than healing, and vitamin D has no comparable role here.",
    choices: [
      { text: "Vitamin A", isCorrect: true },
      { text: "Vitamin K" },
      { text: "Vitamin D" },
      { text: "Vitamin B6" },
      { text: "Vitamin E" },
    ],
  },
  {
    stem: "True or False: Smoking impairs wound healing chiefly through nicotine-induced vasoconstriction and carbon monoxide reducing oxygen delivery.",
    type: "TRUE_FALSE",
    topic: "Factors Impairing Healing",
    explanation:
      "True. Nicotine causes cutaneous vasoconstriction while carboxyhemoglobin reduces oxygen-carrying capacity, and both impair the oxygen-dependent steps of collagen hydroxylation and neutrophil killing. Four weeks of cessation before elective surgery measurably improves outcomes.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Radiation therapy to a surgical field impairs healing primarily through which mechanism?",
    topic: "Factors Impairing Healing",
    explanation:
      "Radiation produces obliterative endarteritis with progressive fibrosis and hypovascularity, so the tissue is hypoxic and hypocellular indefinitely. This is why irradiated fields heal poorly years after treatment and often require vascularized flap coverage.",
    choices: [
      { text: "Obliterative endarteritis producing chronic hypoxic hypocellular tissue", isCorrect: true },
      { text: "Transient neutropenia lasting a few days" },
      { text: "Excessive myofibroblast proliferation" },
      { text: "Increased local VEGF production" },
      { text: "Direct inhibition of hemostasis" },
    ],
  },
  {
    stem: "Which local factor is the single most important determinant of whether a wound heals?",
    topic: "Factors Impairing Healing",
    explanation:
      "Adequate tissue oxygenation underpins collagen hydroxylation, neutrophil oxidative killing and angiogenesis, so perfusion is the dominant local variable. This is the rationale for revascularization before attempting to heal an ischemic ulcer.",
    choices: [
      { text: "Tissue perfusion and oxygenation", isCorrect: true },
      { text: "Ambient room temperature" },
      { text: "The color of the dressing used" },
      { text: "The patient's blood type" },
      { text: "Time of day the wound occurred" },
    ],
  },
  {
    stem: "An elderly patient's wounds heal more slowly. Which change best accounts for this?",
    topic: "Factors Impairing Healing",
    explanation:
      "Aging reduces fibroblast proliferative capacity, slows angiogenesis and diminishes the inflammatory response, so every phase proceeds more slowly. Final scar quality is often comparable or even better cosmetically; it is the rate that changes most.",
    choices: [
      { text: "Reduced fibroblast proliferation and slower angiogenesis", isCorrect: true },
      { text: "Complete absence of macrophage function" },
      { text: "Excessive collagen deposition causing keloids" },
      { text: "Loss of all epidermal stem cells" },
      { text: "Permanent inability to form granulation tissue" },
    ],
  },

  /* ══════════════ ABNORMAL HEALING ══════════════ */
  {
    stem: "A 26-year-old woman of African descent develops a raised, firm lesion extending well beyond the margins of a healed ear piercing. Which lesion is this, and which collagen predominates?",
    topic: "Abnormal Healing",
    explanation:
      "A keloid extends beyond the original wound boundary and is composed of thick, disorganized type III collagen bundles. A hypertrophic scar, by contrast, stays within the wound margins and tends to regress spontaneously — the boundary is the discriminator.",
    choices: [
      { text: "Keloid — excess type III collagen extending beyond the wound", isCorrect: true },
      { text: "Hypertrophic scar — excess type I collagen within the wound" },
      { text: "Contracture — myofibroblast overactivity across a joint" },
      { text: "Dermatofibroma — benign fibrohistiocytic proliferation" },
      { text: "Dehiscence — mechanical failure of wound closure" },
    ],
  },
  {
    stem: "Which features distinguish a hypertrophic scar from a keloid? Select all that apply.",
    type: "MULTI",
    topic: "Abnormal Healing",
    explanation:
      "Hypertrophic scars remain confined to the original wound, often regress over months, and typically follow a clear precipitant such as a burn or tension. Keloids extend beyond the margin, rarely regress, and recur commonly after excision alone.",
    choices: [
      { text: "Confined within the original wound margins", isCorrect: true },
      { text: "Often regresses partially over months", isCorrect: true },
      { text: "Lower recurrence rate after excision", isCorrect: true },
      { text: "Characteristically extends beyond the wound boundary" },
      { text: "Almost never regresses spontaneously" },
    ],
  },
  {
    stem: "A patient develops sudden serosanguinous drainage from an abdominal wound on postoperative day 6, and the fascia is found to be separated. What is this called, and what is the immediate concern?",
    topic: "Abnormal Healing",
    explanation:
      "Fascial dehiscence risks evisceration and demands urgent operative closure. The classic warning sign is a sudden gush of salmon-colored serosanguinous fluid, which should never be dismissed as ordinary drainage.",
    choices: [
      { text: "Dehiscence — risk of evisceration requiring urgent repair", isCorrect: true },
      { text: "Seroma — requires simple aspiration" },
      { text: "Keloid formation — requires steroid injection" },
      { text: "Superficial surgical site infection — requires oral antibiotics" },
      { text: "Normal postoperative drainage — requires observation only" },
    ],
  },
  {
    stem: "Incisional hernia is best understood as which type of healing failure?",
    topic: "Abnormal Healing",
    explanation:
      "An incisional hernia is a late failure of fascial healing in which the scar is present but mechanically inadequate, allowing gradual protrusion. It differs from dehiscence, which is an early, acute separation before meaningful collagen strength has developed.",
    choices: [
      { text: "Late mechanical inadequacy of the fascial scar", isCorrect: true },
      { text: "Early acute separation before collagen deposition" },
      { text: "Excessive collagen deposition narrowing the abdominal wall" },
      { text: "Failure of re-epithelialization of the skin" },
      { text: "Myofibroblast-driven contracture of the fascia" },
    ],
  },
  {
    stem: "True or False: Keloids have a recognized genetic predisposition and occur more commonly in darkly pigmented skin.",
    type: "TRUE_FALSE",
    topic: "Abnormal Healing",
    explanation:
      "True. Keloid formation is markedly more frequent in people of African and Asian descent and clusters in families. This is why anticipating keloid risk should influence incision placement and closure technique before surgery, not after.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which treatment is first-line for a symptomatic keloid, and why is excision alone avoided?",
    topic: "Abnormal Healing",
    explanation:
      "Intralesional corticosteroid suppresses fibroblast activity and collagen synthesis and is first-line. Excision alone commonly produces a larger keloid because the new wound is itself a stimulus, so surgery is combined with steroid, pressure or radiation.",
    choices: [
      { text: "Intralesional corticosteroid; excision alone often produces a larger keloid", isCorrect: true },
      { text: "Wide excision alone, which is curative in most cases" },
      { text: "Systemic antibiotics to eliminate colonizing bacteria" },
      { text: "Topical vitamin K to reduce vascularity" },
      { text: "Observation alone, as all keloids regress within months" },
    ],
  },
  {
    stem: "Chronic non-healing wounds may undergo malignant transformation. What is this called, and which malignancy results?",
    topic: "Abnormal Healing",
    explanation:
      "A Marjolin ulcer is squamous cell carcinoma arising in a chronic wound, burn scar or sinus tract, typically after many years. Any chronic ulcer with rolled everted edges or sudden change warrants biopsy rather than continued dressing.",
    choices: [
      { text: "Marjolin ulcer — squamous cell carcinoma", isCorrect: true },
      { text: "Marjolin ulcer — basal cell carcinoma" },
      { text: "Kaposi sarcoma — from HHV-8 in granulation tissue" },
      { text: "Dermatofibrosarcoma protuberans — from myofibroblasts" },
      { text: "Melanoma — from displaced melanocytes" },
    ],
  },
  {
    stem: "A venous leg ulcer sits above the medial malleolus with surrounding hemosiderin staining. Which mechanism drives the ulceration?",
    topic: "Abnormal Healing",
    explanation:
      "Venous hypertension from valvular incompetence causes capillary leak, red cell extravasation with hemosiderin deposition, and a fibrin cuff impairing oxygen diffusion. Compression therapy is the mainstay precisely because it addresses the hypertension.",
    choices: [
      { text: "Venous hypertension with capillary leak and pericapillary fibrin cuffing", isCorrect: true },
      { text: "Large artery occlusion producing tissue infarction" },
      { text: "Peripheral neuropathy with repetitive unnoticed trauma" },
      { text: "Vasculitic occlusion of dermal arterioles" },
      { text: "Pressure necrosis over a bony prominence" },
    ],
  },

  /* ══════════════ ORGAN FIBROSIS ══════════════ */
  {
    stem: "Which hepatic cell is the principal source of collagen in cirrhosis, and what activates it?",
    topic: "Organ Fibrosis",
    explanation:
      "Hepatic stellate (Ito) cells, normally vitamin A storing, transform into collagen-producing myofibroblasts under TGF-beta from Kupffer cells and injured hepatocytes. Hepatocytes themselves do not produce the fibrous septa.",
    choices: [
      { text: "The hepatic stellate cell, activated by TGF-beta", isCorrect: true },
      { text: "The hepatocyte, activated by PDGF" },
      { text: "The Kupffer cell, activated by IL-10" },
      { text: "The cholangiocyte, activated by VEGF" },
      { text: "The sinusoidal endothelial cell, activated by histamine" },
    ],
  },
  {
    stem: "Idiopathic pulmonary fibrosis shows which characteristic histologic pattern?",
    topic: "Organ Fibrosis",
    explanation:
      "Usual interstitial pneumonia shows patchy, temporally heterogeneous subpleural fibrosis with fibroblastic foci and honeycombing. Temporal heterogeneity — old and new fibrosis side by side — is the defining feature and distinguishes it from more uniform patterns.",
    choices: [
      { text: "Usual interstitial pneumonia with temporal heterogeneity and fibroblastic foci", isCorrect: true },
      { text: "Uniform cellular interstitial infiltrate without fibrosis" },
      { text: "Non-caseating granulomas along lymphatic routes" },
      { text: "Diffuse alveolar damage with hyaline membranes only" },
      { text: "Intra-alveolar plugs of loose connective tissue only" },
    ],
  },
  {
    stem: "Which of the following are recognized profibrotic mediators? Select all that apply.",
    type: "MULTI",
    topic: "Organ Fibrosis",
    explanation:
      "TGF-beta is the master fibrogenic cytokine, with PDGF recruiting fibroblasts, connective tissue growth factor amplifying TGF-beta, and IL-13 driving fibrosis in Th2-dominated disease. Interferon-gamma and hepatocyte growth factor are broadly antifibrotic.",
    choices: [
      { text: "TGF-beta", isCorrect: true },
      { text: "Platelet-derived growth factor", isCorrect: true },
      { text: "Interleukin-13", isCorrect: true },
      { text: "Interferon-gamma" },
      { text: "Hepatocyte growth factor" },
    ],
  },
  {
    stem: "After a large anterior myocardial infarction the ventricle dilates and thins over months. What is this process called?",
    topic: "Organ Fibrosis",
    explanation:
      "Ventricular remodeling involves expansion of the infarct scar and hypertrophy with dilation of non-infarcted myocardium, progressing toward heart failure. ACE inhibitors and beta blockers are given specifically to limit it.",
    choices: [
      { text: "Ventricular remodeling", isCorrect: true },
      { text: "Ventricular hypertrophy without dilation" },
      { text: "Constrictive pericarditis" },
      { text: "Dressler syndrome" },
      { text: "Papillary muscle rupture" },
    ],
  },
  {
    stem: "True or False: Fibrosis is essentially scar formation occurring in internal organs in response to chronic injury.",
    type: "TRUE_FALSE",
    topic: "Organ Fibrosis",
    explanation:
      "True. The same cellular machinery that makes a cutaneous scar — myofibroblasts, TGF-beta and collagen deposition — produces cirrhosis, pulmonary fibrosis and cardiac remodeling when injury persists. Recognizing the shared mechanism explains why antifibrotic strategies generalize across organs.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which renal lesion represents the common final pathway of chronic kidney disease regardless of the initial insult?",
    topic: "Organ Fibrosis",
    explanation:
      "Tubulointerstitial fibrosis with glomerulosclerosis is the shared endpoint, and the degree of interstitial fibrosis correlates with renal function better than glomerular changes do. This is why biopsy reporting emphasizes it for prognosis.",
    choices: [
      { text: "Tubulointerstitial fibrosis with glomerulosclerosis", isCorrect: true },
      { text: "Acute tubular necrosis with granular casts" },
      { text: "Crescent formation in Bowman space" },
      { text: "Papillary necrosis" },
      { text: "Renal artery fibromuscular dysplasia" },
    ],
  },
  {
    stem: "Pirfenidone and nintedanib are used in pulmonary fibrosis. What do they achieve?",
    topic: "Organ Fibrosis",
    explanation:
      "Both slow the rate of decline in lung function but do not reverse established fibrosis, since collagen deposition with architectural destruction is largely irreversible. Setting that expectation accurately matters for patient counseling.",
    choices: [
      { text: "They slow progression without reversing established fibrosis", isCorrect: true },
      { text: "They fully reverse honeycomb change within 6 months" },
      { text: "They eliminate the need for lung transplantation" },
      { text: "They act by stimulating myofibroblast proliferation" },
      { text: "They restore normal alveolar architecture" },
    ],
  },
  {
    stem: "Which mechanism best explains why cirrhosis produces portal hypertension?",
    topic: "Organ Fibrosis",
    explanation:
      "Fibrous septa and regenerative nodules distort the vascular architecture and increase sinusoidal resistance, while stellate cell contraction adds a dynamic component. This is why both structural and vasoactive interventions are used clinically.",
    choices: [
      { text: "Fibrous septa and nodules increase sinusoidal resistance", isCorrect: true },
      { text: "Portal vein thrombosis is present in all cases" },
      { text: "Hepatic arterial inflow is completely obstructed" },
      { text: "Splenic vein flow reverses spontaneously" },
      { text: "Sinusoidal capacity increases beyond portal supply" },
    ],
  },

  /* ══════════════ NUTRITION & MICRONUTRIENTS ══════════════ */
  {
    stem: "A patient with a poor diet has perifollicular hemorrhages, corkscrew hairs, bleeding gums and a wound that has reopened. Which deficiency is present, and what is the biochemical defect?",
    topic: "Nutrition & Micronutrients",
    explanation:
      "Scurvy from vitamin C deficiency blocks prolyl and lysyl hydroxylation, destabilizing the collagen triple helix. Existing collagen degrades faster than it is replaced, so old wounds can reopen — a distinctive clinical clue.",
    choices: [
      { text: "Vitamin C deficiency impairing collagen hydroxylation", isCorrect: true },
      { text: "Vitamin K deficiency impairing gamma-carboxylation" },
      { text: "Zinc deficiency impairing metalloproteinase function" },
      { text: "Copper deficiency impairing lysyl oxidase" },
      { text: "Vitamin A deficiency impairing epithelial differentiation" },
    ],
  },
  {
    stem: "Which trace element deficiency impairs wound healing through loss of metalloenzyme and collagenase function, and also causes a perioral rash and hypogeusia?",
    topic: "Nutrition & Micronutrients",
    explanation:
      "Zinc is a cofactor for over 100 metalloenzymes including those involved in matrix remodeling and DNA synthesis. Deficiency produces poor healing, acrodermatitis-like rash, altered taste and diarrhea. It is common after bariatric surgery and in chronic diarrhea.",
    choices: [
      { text: "Zinc", isCorrect: true },
      { text: "Selenium" },
      { text: "Iodine" },
      { text: "Manganese" },
      { text: "Chromium" },
    ],
  },
  {
    stem: "Which nutrients are required specifically for collagen synthesis and cross-linking? Select all that apply.",
    type: "MULTI",
    topic: "Nutrition & Micronutrients",
    explanation:
      "Vitamin C is needed for hydroxylation, copper for lysyl oxidase cross-linking, zinc for matrix metalloenzymes, and adequate protein supplies the amino acid substrate. Vitamin K serves coagulation factor carboxylation and vitamin B12 DNA synthesis, neither specific to collagen.",
    choices: [
      { text: "Vitamin C", isCorrect: true },
      { text: "Copper", isCorrect: true },
      { text: "Adequate dietary protein", isCorrect: true },
      { text: "Vitamin K" },
      { text: "Vitamin B12" },
    ],
  },
  {
    stem: "A malnourished patient has serum albumin 2.1 g/dL and prealbumin 8 mg/dL. Why is prealbumin the more useful marker for monitoring nutritional repletion?",
    topic: "Nutrition & Micronutrients",
    explanation:
      "Prealbumin has a half-life of about 2 days versus roughly 20 days for albumin, so it responds quickly to nutritional change. Both are negative acute phase reactants, so both fall with inflammation — a caveat that applies to either marker.",
    choices: [
      { text: "Its 2-day half-life responds far faster than albumin's 20 days", isCorrect: true },
      { text: "It is unaffected by inflammation, unlike albumin" },
      { text: "It has a longer half-life giving a more stable average" },
      { text: "It is synthesized by muscle rather than liver" },
      { text: "It rises as a positive acute phase reactant" },
    ],
  },
  {
    stem: "True or False: Arginine and glutamine supplementation have been studied as adjuncts to wound healing in surgical patients.",
    type: "TRUE_FALSE",
    topic: "Nutrition & Micronutrients",
    explanation:
      "True. Arginine is a nitric oxide precursor supporting perfusion and collagen deposition, and glutamine fuels rapidly dividing cells including enterocytes and lymphocytes. Evidence for benefit is mixed, so they are adjuncts rather than established therapy.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Protein-calorie malnutrition impairs healing chiefly by which mechanism?",
    topic: "Nutrition & Micronutrients",
    explanation:
      "Insufficient amino acid substrate limits collagen and structural protein synthesis, while impaired immune function raises infection risk. Both act at the proliferative phase, which is why nutritional optimization before elective surgery measurably improves outcomes.",
    choices: [
      { text: "Inadequate amino acid substrate for collagen and immune protein synthesis", isCorrect: true },
      { text: "Excess collagen deposition from unregulated fibroblasts" },
      { text: "Accelerated angiogenesis outpacing epithelialization" },
      { text: "Direct inhibition of matrix metalloproteinases" },
      { text: "Overactivation of the complement cascade" },
    ],
  },

  /* ══════════════ CLINICAL WOUND ASSESSMENT ══════════════ */
  {
    stem: "A pressure injury shows full-thickness skin loss with visible subcutaneous fat but no exposed bone, tendon or muscle. Which stage applies?",
    topic: "Clinical Wound Assessment",
    explanation:
      "Stage 3 pressure injury involves full-thickness skin loss with fat visible but without exposed bone, tendon or muscle. Stage 4 exposes those deeper structures, and stage 2 is partial-thickness loss with a shallow open ulcer.",
    choices: [
      { text: "Stage 3", isCorrect: true },
      { text: "Stage 1" },
      { text: "Stage 2" },
      { text: "Stage 4" },
      { text: "Unstageable" },
    ],
  },
  {
    stem: "A wound base is covered by adherent yellow-brown slough obscuring the depth. How should it be classified and managed?",
    topic: "Clinical Wound Assessment",
    explanation:
      "It is unstageable until the slough or eschar is removed, because depth cannot be assessed through it. Debridement is required both to stage and to remove the barrier to healing — except over a stable dry heel eschar, which is left intact.",
    choices: [
      { text: "Unstageable — debride to determine depth, except stable heel eschar", isCorrect: true },
      { text: "Stage 2 — apply a hydrocolloid and observe" },
      { text: "Stage 4 — proceed directly to flap coverage" },
      { text: "Deep tissue injury — offload only, never debride" },
      { text: "Stage 1 — reposition and reassess in a week" },
    ],
  },
  {
    stem: "Which findings suggest that a chronic wound has become infected rather than merely colonized? Select all that apply.",
    type: "MULTI",
    topic: "Clinical Wound Assessment",
    explanation:
      "Increasing pain, friable or absent granulation, spreading erythema with warmth, malodor and new undermining all suggest infection. All chronic wounds carry bacteria, so a positive surface swab alone does not distinguish colonization from infection — which is why swabs are a poor diagnostic test here.",
    choices: [
      { text: "Increasing pain with spreading periwound erythema and warmth", isCorrect: true },
      { text: "Friable or deteriorating granulation tissue", isCorrect: true },
      { text: "New undermining or tunneling with malodor", isCorrect: true },
      { text: "Any bacterial growth on a surface swab" },
      { text: "Presence of a moist wound surface" },
    ],
  },
  {
    stem: "An ankle-brachial index of 0.45 in a patient with a leg ulcer has which implication for management?",
    topic: "Clinical Wound Assessment",
    explanation:
      "An ABI below 0.5 indicates severe arterial insufficiency, so compression therapy is contraindicated and revascularization should be considered. Applying compression to an ischemic limb can precipitate tissue loss — this is a genuine safety decision, not a nuance.",
    choices: [
      { text: "Compression is contraindicated; assess for revascularization", isCorrect: true },
      { text: "Apply high-compression bandaging immediately" },
      { text: "The ulcer is certainly venous in origin" },
      { text: "The value is normal and requires no action" },
      { text: "Proceed directly to skin grafting without vascular assessment" },
    ],
  },
  {
    stem: "True or False: A moist wound environment promotes faster epithelialization than allowing a wound to dry and form a scab.",
    type: "TRUE_FALSE",
    topic: "Clinical Wound Assessment",
    explanation:
      "True. Keratinocytes migrate more readily across a moist surface than beneath a dry scab, which they must burrow under. This finding underpins modern occlusive and semi-occlusive dressing practice and overturned the older belief in letting wounds air-dry.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Negative pressure wound therapy improves healing through which combination of effects?",
    topic: "Clinical Wound Assessment",
    explanation:
      "Subatmospheric pressure removes exudate and reduces edema, applies mechanical stress that stimulates granulation, and draws wound edges together. It does not sterilize the wound, so infected tissue must still be debrided before it is applied.",
    choices: [
      { text: "Exudate and edema removal, mechanical stimulation of granulation, edge approximation", isCorrect: true },
      { text: "Sterilization of the wound bed, removing the need for debridement" },
      { text: "Direct delivery of growth factors into tissue" },
      { text: "Increased wound desiccation promoting scab formation" },
      { text: "Reduction of tissue perfusion to limit inflammation" },
    ],
  },
];
