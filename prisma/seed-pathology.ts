/**
 * CONTENT WAVE 8 — Pathology
 *
 * 75 original questions as EIGHT quizzes, matching the expanded shape:
 *
 *   General Pathology  Set 1 (15) · Set 2 (15)   → fs-pathology
 *   Neoplasia          Set 1 (15) · Set 2 (15)   → fs-pathology
 *   Systemic Pathology Set 1 (15)                → fs-pathology
 *   Exams  General (30) · Neoplasia (30) · Comprehensive (75)
 *
 * Pathology is the bridge between the basic sciences and every clinical
 * specialty — it explains WHY disease produces the findings you examine for.
 * These questions are written to connect mechanism to observable consequence
 * rather than to test definitions.
 *
 * Run:  npx tsx prisma/seed-pathology.ts
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Q = {
  stem: string;
  topic: string;
  explanation: string;
  choices: { text: string; isCorrect: boolean }[];
};

/* ═══════════ GENERAL PATHOLOGY SET 1 ═══════════ */

const GEN1: Q[] = [
  {
    stem: "What distinguishes reversible from irreversible cell injury?",
    topic: "Cell Injury",
    explanation:
      "Membrane integrity and mitochondrial function. Reversible injury shows cell swelling and fatty change — restore the insult and the cell recovers. Irreversible injury involves membrane rupture and severe mitochondrial damage, and it is membrane rupture that releases enzymes such as troponin and transaminases into blood, which is why those markers indicate cell death rather than mere stress.",
    choices: [
      { text: "Loss of membrane integrity and irreparable mitochondrial damage", isCorrect: true },
      { text: "The presence of any cell swelling", isCorrect: false },
      { text: "Whether inflammation is present", isCorrect: false },
      { text: "The duration of the insult alone", isCorrect: false },
    ],
  },
  {
    stem: "How does apoptosis differ from necrosis?",
    topic: "Cell Death",
    explanation:
      "Apoptosis is energy-dependent, programmed, affects single cells, keeps the membrane intact and provokes NO inflammation. Necrosis is passive, affects groups of cells, ruptures membranes and releases contents that trigger inflammation. The absence of inflammation in apoptosis is the practical distinction.",
    choices: [
      { text: "Apoptosis is programmed, membrane-intact and non-inflammatory", isCorrect: true },
      { text: "Apoptosis always causes marked inflammation", isCorrect: false },
      { text: "Necrosis requires ATP and is tightly regulated", isCorrect: false },
      { text: "They are indistinguishable microscopically", isCorrect: false },
    ],
  },
  {
    stem: "Which type of necrosis is characteristic of the brain following infarction?",
    topic: "Cell Death",
    explanation:
      "Liquefactive necrosis. The brain has little supporting connective tissue and abundant hydrolytic enzymes, so infarcted tissue liquefies into a cystic cavity. Most other organs undergo coagulative necrosis, where the tissue architecture is preserved as a ghost outline.",
    choices: [
      { text: "Liquefactive necrosis", isCorrect: true },
      { text: "Coagulative necrosis", isCorrect: false },
      { text: "Caseous necrosis", isCorrect: false },
      { text: "Fibrinoid necrosis", isCorrect: false },
    ],
  },
  {
    stem: "Caseous necrosis is characteristically seen in which condition?",
    topic: "Cell Death",
    explanation:
      "Tuberculosis, where granulomas develop a cheese-like centre from lipid-rich mycobacterial cell walls and dead macrophages. Its presence in a granuloma is a strong pointer to TB — non-caseating granulomas suggest sarcoidosis or Crohn's disease instead.",
    choices: [
      { text: "Tuberculosis", isCorrect: true },
      { text: "Myocardial infarction", isCorrect: false },
      { text: "Acute pancreatitis", isCorrect: false },
      { text: "Cerebral infarction", isCorrect: false },
    ],
  },
  {
    stem: "Which necrosis type occurs in acute pancreatitis, and what causes it?",
    topic: "Cell Death",
    explanation:
      "Fat necrosis. Released pancreatic lipases digest surrounding adipose tissue, and the liberated fatty acids bind calcium to form chalky saponified deposits. This consumption of calcium is why hypocalcaemia occurs in severe pancreatitis and forms part of the severity scoring.",
    choices: [
      { text: "Fat necrosis, from released lipases saponifying adipose tissue", isCorrect: true },
      { text: "Coagulative necrosis from ischaemia", isCorrect: false },
      { text: "Caseous necrosis from granuloma formation", isCorrect: false },
      { text: "Gangrenous necrosis from infection", isCorrect: false },
    ],
  },
  {
    stem: "What are the cardinal signs of acute inflammation, and what causes the redness and heat?",
    topic: "Acute Inflammation",
    explanation:
      "Rubor, calor, tumor, dolor and functio laesa. Redness and heat come from vasodilatation increasing blood flow; swelling from increased vascular permeability allowing protein-rich exudate to escape; pain from mediators such as bradykinin and prostaglandins acting on nerve endings.",
    choices: [
      { text: "Vasodilatation increases blood flow, producing redness and heat", isCorrect: true },
      { text: "Vasoconstriction concentrates blood in the tissue", isCorrect: false },
      { text: "Neutrophils generate heat metabolically", isCorrect: false },
      { text: "Lymphatic obstruction causes both", isCorrect: false },
    ],
  },
  {
    stem: "Which cell is the first responder in acute bacterial inflammation?",
    topic: "Acute Inflammation",
    explanation:
      "The neutrophil, arriving within hours through margination, rolling, adhesion and transmigration. Their short lifespan means they dominate early and are replaced by macrophages after a day or two — which is why a neutrophil-predominant picture suggests acute bacterial infection while lymphocytes suggest viral or chronic processes.",
    choices: [
      { text: "The neutrophil", isCorrect: true },
      { text: "The plasma cell", isCorrect: false },
      { text: "The eosinophil", isCorrect: false },
      { text: "The fibroblast", isCorrect: false },
    ],
  },
  {
    stem: "What is a granuloma, and which cells define it?",
    topic: "Chronic Inflammation",
    explanation:
      "A focal collection of activated macrophages transformed into epithelioid cells, often with multinucleate giant cells and a lymphocyte rim. It forms when the immune system cannot eliminate an agent and instead walls it off — hence its association with TB, fungi, sarcoidosis, Crohn's disease and foreign material.",
    choices: [
      { text: "Epithelioid macrophages with giant cells and surrounding lymphocytes", isCorrect: true },
      { text: "A collection of neutrophils and necrotic debris", isCorrect: false },
      { text: "A cluster of proliferating fibroblasts only", isCorrect: false },
      { text: "An aggregate of red cells and platelets", isCorrect: false },
    ],
  },
  {
    stem: "Which cell type predominates in chronic inflammation?",
    topic: "Chronic Inflammation",
    explanation:
      "Macrophages, alongside lymphocytes and plasma cells. Their persistence drives tissue destruction and simultaneous repair, which is why chronic inflammation causes fibrosis. That simultaneous damage-and-repair explains why chronic inflammatory disease scars while acute inflammation usually resolves cleanly.",
    choices: [
      { text: "Macrophages, with lymphocytes and plasma cells", isCorrect: true },
      { text: "Neutrophils exclusively", isCorrect: false },
      { text: "Eosinophils exclusively", isCorrect: false },
      { text: "Platelets", isCorrect: false },
    ],
  },
  {
    stem: "What is the difference between healing by primary and secondary intention?",
    topic: "Wound Healing",
    explanation:
      "Primary intention applies to clean, apposed wound edges — minimal tissue loss, little granulation tissue and a fine scar. Secondary intention applies where there is significant tissue loss, so the defect fills with granulation tissue and contracts, giving a larger scar and a longer healing time.",
    choices: [
      { text: "Primary has apposed edges and minimal scarring; secondary fills a defect with granulation tissue", isCorrect: true },
      { text: "Primary heals more slowly than secondary", isCorrect: false },
      { text: "Secondary requires no inflammation", isCorrect: false },
      { text: "There is no clinical difference", isCorrect: false },
    ],
  },
  {
    stem: "Which vitamin deficiency notably impairs wound healing through defective collagen synthesis?",
    topic: "Wound Healing",
    explanation:
      "Vitamin C, required for hydroxylation of proline and lysine in collagen. Without it collagen is unstable, giving poor wound strength, bleeding gums and perifollicular haemorrhage — scurvy. Zinc deficiency and corticosteroids also impair healing, by different mechanisms.",
    choices: [
      { text: "Vitamin C", isCorrect: true },
      { text: "Vitamin B12", isCorrect: false },
      { text: "Vitamin K", isCorrect: false },
      { text: "Vitamin D", isCorrect: false },
    ],
  },
  {
    stem: "What is a keloid scar, and how does it differ from a hypertrophic scar?",
    topic: "Wound Healing",
    explanation:
      "A keloid extends BEYOND the original wound margins and rarely regresses; a hypertrophic scar stays within them and often improves with time. Keloids are commoner in darker skin and at sites of tension, and excision alone tends to make them recur larger.",
    choices: [
      { text: "A keloid extends beyond the original wound margins; a hypertrophic scar does not", isCorrect: true },
      { text: "A keloid stays within the wound and resolves quickly", isCorrect: false },
      { text: "They are the same entity with different names", isCorrect: false },
      { text: "A hypertrophic scar always requires excision", isCorrect: false },
    ],
  },
  {
    stem: "What is the difference between hypertrophy and hyperplasia?",
    topic: "Cellular Adaptation",
    explanation:
      "Hypertrophy is an increase in cell SIZE; hyperplasia is an increase in cell NUMBER. Tissues of permanent cells such as cardiac and skeletal muscle can only hypertrophy, since they cannot divide — which is why the heart responds to load by thickening rather than by growing more myocytes.",
    choices: [
      { text: "Hypertrophy increases cell size; hyperplasia increases cell number", isCorrect: true },
      { text: "Hypertrophy increases cell number; hyperplasia increases size", isCorrect: false },
      { text: "Both refer to increased cell number", isCorrect: false },
      { text: "Both are always pathological", isCorrect: false },
    ],
  },
  {
    stem: "Barrett's oesophagus is an example of which cellular adaptation, and why does it matter?",
    topic: "Cellular Adaptation",
    explanation:
      "Metaplasia — a reversible change from one differentiated cell type to another, here squamous to columnar in response to acid reflux. It matters because metaplastic epithelium can progress to dysplasia and then adenocarcinoma, which is why Barrett's is kept under surveillance.",
    choices: [
      { text: "Metaplasia, which can progress to dysplasia and adenocarcinoma", isCorrect: true },
      { text: "Hyperplasia, which never progresses", isCorrect: false },
      { text: "Atrophy, which is always benign", isCorrect: false },
      { text: "Anaplasia, which is already malignant", isCorrect: false },
    ],
  },
  {
    stem: "Which change is considered pre-malignant rather than adaptive?",
    topic: "Cellular Adaptation",
    explanation:
      "Dysplasia — disordered growth with nuclear atypia, loss of polarity and increased mitoses. Unlike metaplasia it is not a normal adaptive response, and severe dysplasia frequently progresses to carcinoma in situ. Recognising the step from metaplasia to dysplasia is what surveillance programmes exist to catch.",
    choices: [
      { text: "Dysplasia", isCorrect: true },
      { text: "Hypertrophy", isCorrect: false },
      { text: "Atrophy", isCorrect: false },
      { text: "Physiological hyperplasia", isCorrect: false },
    ],
  },
];

/* ═══════════ GENERAL PATHOLOGY SET 2 ═══════════ */

const GEN2: Q[] = [
  {
    stem: "Which components make up Virchow's triad?",
    topic: "Thrombosis",
    explanation:
      "Endothelial injury, abnormal blood flow (stasis or turbulence) and hypercoagulability. Nearly every clinical risk factor for thrombosis maps onto one of the three — surgery to endothelial injury, immobility to stasis, malignancy and pregnancy to hypercoagulability. It turns a long risk list into three mechanisms.",
    choices: [
      { text: "Endothelial injury, abnormal flow and hypercoagulability", isCorrect: true },
      { text: "Anaemia, infection and malnutrition", isCorrect: false },
      { text: "Hypertension, hyperlipidaemia and diabetes", isCorrect: false },
      { text: "Inflammation, necrosis and fibrosis", isCorrect: false },
    ],
  },
  {
    stem: "How does an arterial thrombus differ in composition from a venous one?",
    topic: "Thrombosis",
    explanation:
      "Arterial thrombi form under high flow and are platelet-rich and pale; venous thrombi form in stasis and are fibrin- and red-cell-rich. This is why ANTIPLATELET drugs are used for arterial disease and ANTICOAGULANTS for venous thromboembolism — the composition dictates the treatment.",
    choices: [
      { text: "Arterial are platelet-rich and pale; venous are fibrin and red-cell rich", isCorrect: true },
      { text: "Arterial are red-cell rich; venous are platelet-rich", isCorrect: false },
      { text: "Both have identical composition", isCorrect: false },
      { text: "Venous thrombi contain no fibrin", isCorrect: false },
    ],
  },
  {
    stem: "A patient develops sudden breathlessness days after hip surgery. Which embolus type is most likely?",
    topic: "Embolism",
    explanation:
      "A thromboembolus from a deep vein thrombosis, travelling to the pulmonary arteries. Fat embolism is also possible after long-bone fracture, presenting characteristically with the triad of respiratory distress, neurological change and a petechial rash — usually 24 to 72 hours after injury.",
    choices: [
      { text: "Thromboembolus from a lower limb deep vein thrombosis", isCorrect: true },
      { text: "Air embolus", isCorrect: false },
      { text: "Amniotic fluid embolus", isCorrect: false },
      { text: "Septic embolus from endocarditis", isCorrect: false },
    ],
  },
  {
    stem: "Why do infarcts in the lung and intestine tend to be haemorrhagic (red) rather than pale?",
    topic: "Infarction",
    explanation:
      "Both have a dual blood supply or extensive collaterals, so blood continues to seep into the infarcted area from the second source. Organs with a single end-arterial supply — heart, kidney, spleen — produce pale white infarcts instead. The vascular anatomy determines the appearance.",
    choices: [
      { text: "They have dual supply or collaterals allowing blood to seep in", isCorrect: true },
      { text: "They contain more red cells at baseline", isCorrect: false },
      { text: "They have no arterial supply at all", isCorrect: false },
      { text: "They always become infected", isCorrect: false },
    ],
  },
  {
    stem: "What is the earliest histological change detectable in a myocardial infarct?",
    topic: "Infarction",
    explanation:
      "Coagulative necrosis with wavy fibres and contraction bands within the first several hours, followed by neutrophil infiltration over the first day. This time course explains why very early infarcts can appear macroscopically normal at post-mortem despite being clinically fatal.",
    choices: [
      { text: "Coagulative necrosis with wavy fibres in the first hours", isCorrect: true },
      { text: "Dense collagenous scar within one hour", isCorrect: false },
      { text: "Granuloma formation within six hours", isCorrect: false },
      { text: "Complete healing within 24 hours", isCorrect: false },
    ],
  },
  {
    stem: "What distinguishes an exudate from a transudate?",
    topic: "Oedema",
    explanation:
      "An exudate is protein-rich and results from increased vascular permeability during inflammation; a transudate is protein-poor and results from altered hydrostatic or oncotic pressure. Light's criteria formalise the distinction in pleural fluid, and it separates infection or malignancy from heart failure or cirrhosis.",
    choices: [
      { text: "An exudate is protein-rich from increased permeability; a transudate is protein-poor from pressure changes", isCorrect: true },
      { text: "A transudate is protein-rich", isCorrect: false },
      { text: "Both contain identical protein levels", isCorrect: false },
      { text: "Exudates only occur in the pleural space", isCorrect: false },
    ],
  },
  {
    stem: "Why does nephrotic syndrome cause peripheral oedema?",
    topic: "Oedema",
    explanation:
      "Heavy urinary protein loss lowers plasma albumin, reducing plasma oncotic pressure so fluid escapes into the interstitium. Renal sodium retention compounds it. The mechanism is oncotic rather than hydrostatic, which is why albumin infusion alone gives only transient benefit.",
    choices: [
      { text: "Loss of albumin lowers plasma oncotic pressure", isCorrect: true },
      { text: "Raised capillary hydrostatic pressure from heart failure", isCorrect: false },
      { text: "Lymphatic obstruction", isCorrect: false },
      { text: "Increased vascular permeability from inflammation", isCorrect: false },
    ],
  },
  {
    stem: "What is the initiating event in atherosclerosis?",
    topic: "Atherosclerosis",
    explanation:
      "Endothelial injury or dysfunction, from hypertension, smoking, dyslipidaemia or hyperglycaemia. Lipid enters the intima, is oxidised, and recruits macrophages that become foam cells — the fatty streak. Smooth muscle proliferation and a fibrous cap follow, and it is the cap's rupture that causes acute events.",
    choices: [
      { text: "Endothelial injury allowing lipid entry and macrophage recruitment", isCorrect: true },
      { text: "Primary calcification of the media", isCorrect: false },
      { text: "Thrombus formation preceding any plaque", isCorrect: false },
      { text: "Bacterial infection of the intima", isCorrect: false },
    ],
  },
  {
    stem: "Why does plaque rupture cause acute coronary syndrome rather than gradual narrowing?",
    topic: "Atherosclerosis",
    explanation:
      "Rupture exposes thrombogenic lipid core and collagen, triggering rapid platelet aggregation and thrombosis that can occlude the vessel within minutes. Critically, the plaques that rupture are often NOT the most stenotic — a lipid-rich plaque with a thin cap is more dangerous than a heavily calcified severe stenosis.",
    choices: [
      { text: "Exposed thrombogenic core triggers acute occlusive thrombosis", isCorrect: true },
      { text: "The plaque physically swells to block the lumen", isCorrect: false },
      { text: "Rupture causes immediate vasospasm only", isCorrect: false },
      { text: "Only the largest plaques ever rupture", isCorrect: false },
    ],
  },
  {
    stem: "What is amyloid, and how is it identified histologically?",
    topic: "Deposition Disorders",
    explanation:
      "Misfolded protein in beta-pleated sheet configuration, deposited extracellularly. It stains with Congo red and shows apple-green birefringence under polarised light — a pathognomonic finding. Deposition disrupts organ architecture, producing restrictive cardiomyopathy, nephrotic syndrome or neuropathy depending on site.",
    choices: [
      { text: "Misfolded beta-pleated sheet protein, showing apple-green birefringence with Congo red", isCorrect: true },
      { text: "Intracellular lipid, staining with oil red O", isCorrect: false },
      { text: "Calcium deposits, staining with von Kossa", isCorrect: false },
      { text: "Iron deposits, staining with Perls stain", isCorrect: false },
    ],
  },
  {
    stem: "What distinguishes dystrophic from metastatic calcification?",
    topic: "Deposition Disorders",
    explanation:
      "Dystrophic calcification occurs in ALREADY DAMAGED tissue with normal serum calcium — as in atheroma or old TB. Metastatic calcification occurs in normal tissue because serum calcium is high, as in hyperparathyroidism or malignancy. The serum calcium is what separates them.",
    choices: [
      { text: "Dystrophic occurs in damaged tissue with normal calcium; metastatic in normal tissue with high calcium", isCorrect: true },
      { text: "Dystrophic requires hypercalcaemia", isCorrect: false },
      { text: "Metastatic calcification only occurs in tumours", isCorrect: false },
      { text: "They are histologically indistinguishable and clinically identical", isCorrect: false },
    ],
  },
  {
    stem: "Which hypersensitivity type underlies anaphylaxis?",
    topic: "Immunopathology",
    explanation:
      "Type I — IgE-mediated mast cell degranulation on re-exposure to antigen, releasing histamine and other mediators within minutes. Type II is antibody-mediated cytotoxicity, type III immune complex deposition, and type IV delayed T-cell mediated, as in contact dermatitis and the tuberculin response.",
    choices: [
      { text: "Type I (IgE-mediated)", isCorrect: true },
      { text: "Type II (antibody-mediated cytotoxicity)", isCorrect: false },
      { text: "Type III (immune complex)", isCorrect: false },
      { text: "Type IV (delayed, T-cell mediated)", isCorrect: false },
    ],
  },
  {
    stem: "Which hypersensitivity mechanism causes serum sickness and post-streptococcal glomerulonephritis?",
    topic: "Immunopathology",
    explanation:
      "Type III, immune complex deposition. Antigen-antibody complexes lodge in vessel walls and glomeruli, activating complement and recruiting neutrophils that damage the tissue. The delay of one to three weeks reflects the time needed to generate antibody and form complexes.",
    choices: [
      { text: "Type III immune complex deposition", isCorrect: true },
      { text: "Type I IgE-mediated", isCorrect: false },
      { text: "Type II cytotoxic antibody", isCorrect: false },
      { text: "Type IV delayed hypersensitivity", isCorrect: false },
    ],
  },
  {
    stem: "A tuberculin skin test reaction peaking at 48 to 72 hours illustrates which mechanism?",
    topic: "Immunopathology",
    explanation:
      "Type IV delayed hypersensitivity, mediated by sensitised T cells and macrophages rather than antibody. The delay reflects the time needed for T cells to migrate and recruit macrophages — which is also why granulomas, contact dermatitis and transplant rejection share this mechanism.",
    choices: [
      { text: "Type IV, T-cell mediated delayed hypersensitivity", isCorrect: true },
      { text: "Type I immediate hypersensitivity", isCorrect: false },
      { text: "Type II cytotoxic reaction", isCorrect: false },
      { text: "Type III immune complex reaction", isCorrect: false },
    ],
  },
  {
    stem: "Which mechanism explains the tissue damage in systemic lupus erythematosus?",
    topic: "Immunopathology",
    explanation:
      "Predominantly type III immune complex deposition, with anti-nuclear and anti-double-stranded-DNA antibodies forming complexes that deposit in kidney, skin, joints and serosal surfaces. Complement is consumed in the process, which is why low C3 and C4 track disease activity.",
    choices: [
      { text: "Immune complex deposition with complement consumption", isCorrect: true },
      { text: "IgE-mediated mast cell degranulation", isCorrect: false },
      { text: "Direct T-cell cytotoxicity alone", isCorrect: false },
      { text: "Deficiency of immunoglobulin production", isCorrect: false },
    ],
  },
];

/* ═══════════ NEOPLASIA SET 1 ═══════════ */

const NEO1: Q[] = [
  {
    stem: "Which feature most reliably distinguishes a malignant from a benign tumour?",
    topic: "Tumour Biology",
    explanation:
      "Invasion of surrounding tissue and the capacity to metastasise. Benign tumours may grow large and compress structures but remain encapsulated and local. Rapid growth and atypia support malignancy but neither is definitive on its own — invasion is.",
    choices: [
      { text: "Invasion of adjacent tissue with capacity to metastasise", isCorrect: true },
      { text: "Large size at presentation", isCorrect: false },
      { text: "Rapid growth alone", isCorrect: false },
      { text: "The presence of any mitotic figures", isCorrect: false },
    ],
  },
  {
    stem: "What does anaplasia mean?",
    topic: "Tumour Biology",
    explanation:
      "Complete lack of differentiation — cells bear no resemblance to their tissue of origin, with marked pleomorphism, hyperchromatic nuclei, high nuclear-to-cytoplasmic ratio and abnormal mitoses. It marks the most aggressive end of the spectrum, and anaplastic tumours generally carry the worst prognosis.",
    choices: [
      { text: "Complete loss of differentiation with marked cellular atypia", isCorrect: true },
      { text: "Reversible change from one cell type to another", isCorrect: false },
      { text: "An increase in cell number", isCorrect: false },
      { text: "Programmed cell death", isCorrect: false },
    ],
  },
  {
    stem: "What is the function of a tumour suppressor gene, and how many alleles must be lost?",
    topic: "Cancer Genetics",
    explanation:
      "It restrains cell division or promotes apoptosis, so BOTH alleles must be inactivated for loss of function — Knudson's two-hit hypothesis. This is why inherited cancer syndromes present younger: the person begins with one hit already present in every cell, so only one further mutation is needed.",
    choices: [
      { text: "It restrains proliferation, and both alleles must be lost", isCorrect: true },
      { text: "It promotes proliferation, and one mutated allele suffices", isCorrect: false },
      { text: "It repairs DNA, and no mutation affects it", isCorrect: false },
      { text: "It is only present in cancer cells", isCorrect: false },
    ],
  },
  {
    stem: "Why is p53 called the 'guardian of the genome'?",
    topic: "Cancer Genetics",
    explanation:
      "It arrests the cell cycle after DNA damage to allow repair, and triggers apoptosis if damage is irreparable. Losing it lets damaged cells continue dividing and accumulating mutations, which is why p53 is the most commonly mutated gene in human cancer.",
    choices: [
      { text: "It halts the cycle for DNA repair and triggers apoptosis if repair fails", isCorrect: true },
      { text: "It directly repairs every DNA break itself", isCorrect: false },
      { text: "It prevents all mutations from occurring", isCorrect: false },
      { text: "It stimulates cell division after damage", isCorrect: false },
    ],
  },
  {
    stem: "How does an oncogene differ from a proto-oncogene?",
    topic: "Cancer Genetics",
    explanation:
      "A proto-oncogene is a normal gene promoting growth; an oncogene is its mutated, constitutively active form. Because the mutation is gain-of-function, a SINGLE allele suffices — behaving dominantly, unlike tumour suppressors which need both hits.",
    choices: [
      { text: "An oncogene is a gain-of-function mutant needing only one allele affected", isCorrect: true },
      { text: "An oncogene requires both alleles to be mutated", isCorrect: false },
      { text: "A proto-oncogene is found only in tumours", isCorrect: false },
      { text: "They are unrelated genes", isCorrect: false },
    ],
  },
  {
    stem: "What does tumour grade describe, in contrast to stage?",
    topic: "Staging & Grading",
    explanation:
      "Grade describes how differentiated the tumour looks microscopically — how closely it resembles normal tissue. Stage describes how far it has spread anatomically. Stage generally predicts prognosis more strongly, which is why treatment decisions hinge on it.",
    choices: [
      { text: "Grade is microscopic differentiation; stage is anatomical extent of spread", isCorrect: true },
      { text: "Grade is the extent of spread; stage is differentiation", isCorrect: false },
      { text: "They measure the same thing", isCorrect: false },
      { text: "Grade refers to tumour size only", isCorrect: false },
    ],
  },
  {
    stem: "In the TNM system, what does the N component describe?",
    topic: "Staging & Grading",
    explanation:
      "Regional lymph node involvement — number and location of involved nodes. T is the primary tumour's size and local extent, M distant metastasis. Nodal status is frequently the strongest single prognostic factor and often determines whether adjuvant therapy is offered.",
    choices: [
      { text: "Regional lymph node involvement", isCorrect: true },
      { text: "The number of distant metastases", isCorrect: false },
      { text: "The nuclear grade of the tumour", isCorrect: false },
      { text: "The necrosis fraction", isCorrect: false },
    ],
  },
  {
    stem: "Which route of spread do carcinomas typically favour, compared with sarcomas?",
    topic: "Metastasis",
    explanation:
      "Carcinomas typically spread first via lymphatics to regional nodes; sarcomas favour haematogenous spread, often to lung. This difference is why sentinel node biopsy is central to carcinoma staging but far less useful in sarcoma.",
    choices: [
      { text: "Carcinomas spread lymphatically; sarcomas haematogenously", isCorrect: true },
      { text: "Carcinomas spread haematogenously; sarcomas lymphatically", isCorrect: false },
      { text: "Both spread exclusively by direct invasion", isCorrect: false },
      { text: "Neither metastasises", isCorrect: false },
    ],
  },
  {
    stem: "Which organs are the most common sites of haematogenous metastasis?",
    topic: "Metastasis",
    explanation:
      "Liver and lung, because they are the first capillary beds encountered by portal and systemic venous drainage respectively. Bone and brain follow. This filtering effect explains why colorectal cancer metastasises to liver first — its venous drainage goes there directly.",
    choices: [
      { text: "Liver and lung", isCorrect: true },
      { text: "Spleen and thyroid", isCorrect: false },
      { text: "Skeletal muscle and skin", isCorrect: false },
      { text: "Pancreas and adrenal only", isCorrect: false },
    ],
  },
  {
    stem: "Why does angiogenesis matter for tumour growth?",
    topic: "Tumour Biology",
    explanation:
      "A tumour cannot exceed about 1–2 mm by diffusion alone; beyond that it needs its own blood supply. Tumours secrete VEGF to induce vessel formation, and the resulting vessels are leaky and disorganised. This dependence is why anti-angiogenic drugs became a therapeutic strategy.",
    choices: [
      { text: "Tumours cannot grow beyond 1–2 mm without recruiting a blood supply", isCorrect: true },
      { text: "Angiogenesis only occurs after metastasis", isCorrect: false },
      { text: "Tumours rely entirely on diffusion at any size", isCorrect: false },
      { text: "New vessels prevent further tumour growth", isCorrect: false },
    ],
  },
  {
    stem: "What is a paraneoplastic syndrome?",
    topic: "Paraneoplastic Syndromes",
    explanation:
      "Clinical effects caused by a tumour that are not due to local mass effect or metastasis — usually from ectopic hormone secretion or an immune cross-reaction. They matter because they can be the FIRST presentation, sometimes preceding any detectable tumour.",
    choices: [
      { text: "Tumour effects not caused by mass effect or metastasis, often hormonal or immune", isCorrect: true },
      { text: "Symptoms caused purely by tumour compression", isCorrect: false },
      { text: "Side effects of chemotherapy", isCorrect: false },
      { text: "Metastatic deposits in distant organs", isCorrect: false },
    ],
  },
  {
    stem: "Which malignancy classically causes SIADH through ectopic ADH secretion?",
    topic: "Paraneoplastic Syndromes",
    explanation:
      "Small cell lung cancer, which is of neuroendocrine origin and secretes a range of peptides. It also causes ectopic ACTH producing Cushing's, and Lambert-Eaton myasthenic syndrome. Unexplained hyponatraemia in a smoker warrants a chest film.",
    choices: [
      { text: "Small cell lung cancer", isCorrect: true },
      { text: "Basal cell carcinoma of skin", isCorrect: false },
      { text: "Colonic adenocarcinoma", isCorrect: false },
      { text: "Papillary thyroid carcinoma", isCorrect: false },
    ],
  },
  {
    stem: "Hypercalcaemia of malignancy is most often caused by which mechanism?",
    topic: "Paraneoplastic Syndromes",
    explanation:
      "Secretion of parathyroid hormone-related peptide, classically by squamous cell carcinoma, which mimics PTH at its receptor. Osteolytic bone metastases are the other main route. Distinguishing them matters because PTHrP-driven disease has no bone lesions to find.",
    choices: [
      { text: "Tumour secretion of PTH-related peptide", isCorrect: true },
      { text: "Excess dietary calcium intake", isCorrect: false },
      { text: "Increased renal calcium reabsorption from dehydration alone", isCorrect: false },
      { text: "Vitamin D deficiency", isCorrect: false },
    ],
  },
  {
    stem: "Which tumour marker is associated with hepatocellular carcinoma and germ cell tumours?",
    topic: "Tumour Markers",
    explanation:
      "Alpha-fetoprotein. Tumour markers are generally poor screening tests because of limited sensitivity and specificity — they are more useful for monitoring treatment response and detecting recurrence in a patient with a known diagnosis.",
    choices: [
      { text: "Alpha-fetoprotein", isCorrect: true },
      { text: "CA 19-9", isCorrect: false },
      { text: "PSA", isCorrect: false },
      { text: "CA 125", isCorrect: false },
    ],
  },
  {
    stem: "Why are most tumour markers unsuitable for population screening?",
    topic: "Tumour Markers",
    explanation:
      "They lack sensitivity and specificity — rising in benign conditions and remaining normal in some cancers. In a low-prevalence population, most positives would be false, generating anxiety and unnecessary investigation. They perform far better for monitoring known disease.",
    choices: [
      { text: "Poor sensitivity and specificity give too many false positives in low-prevalence populations", isCorrect: true },
      { text: "They are too expensive to perform", isCorrect: false },
      { text: "They only become positive after death", isCorrect: false },
      { text: "They are perfectly accurate but not widely available", isCorrect: false },
    ],
  },
];

/* ═══════════ NEOPLASIA SET 2 ═══════════ */

const NEO2: Q[] = [
  {
    stem: "Which virus is causally linked to cervical carcinoma, and by what mechanism?",
    topic: "Oncogenic Agents",
    explanation:
      "Human papillomavirus, particularly types 16 and 18. Its E6 protein degrades p53 and E7 inactivates Rb, disabling two key cell-cycle brakes simultaneously. Vaccination against these types is therefore genuine primary cancer prevention.",
    choices: [
      { text: "HPV — E6 degrades p53 and E7 inactivates Rb", isCorrect: true },
      { text: "HIV — by direct oncogene insertion", isCorrect: false },
      { text: "Hepatitis B — through chronic inflammation of cervix", isCorrect: false },
      { text: "Cytomegalovirus — by immunosuppression", isCorrect: false },
    ],
  },
  {
    stem: "Chronic hepatitis B and C infection predispose to which malignancy?",
    topic: "Oncogenic Agents",
    explanation:
      "Hepatocellular carcinoma. Chronic inflammation with repeated cycles of hepatocyte death and regeneration increases mutation opportunity, and cirrhosis compounds it. Hepatitis B can also integrate its DNA directly, which is why it causes HCC even without cirrhosis.",
    choices: [
      { text: "Hepatocellular carcinoma", isCorrect: true },
      { text: "Gastric adenocarcinoma", isCorrect: false },
      { text: "Renal cell carcinoma", isCorrect: false },
      { text: "Pancreatic carcinoma", isCorrect: false },
    ],
  },
  {
    stem: "Which bacterium is classified as a carcinogen, and which cancers does it cause?",
    topic: "Oncogenic Agents",
    explanation:
      "Helicobacter pylori, causing gastric adenocarcinoma and gastric MALT lymphoma. Chronic inflammation drives atrophic gastritis, intestinal metaplasia, dysplasia and then carcinoma. Notably, eradicating the organism can cause early MALT lymphoma to regress — treating an infection to treat a cancer.",
    choices: [
      { text: "Helicobacter pylori — gastric adenocarcinoma and MALT lymphoma", isCorrect: true },
      { text: "Escherichia coli — colonic carcinoma", isCorrect: false },
      { text: "Streptococcus pyogenes — pharyngeal carcinoma", isCorrect: false },
      { text: "Staphylococcus aureus — skin carcinoma", isCorrect: false },
    ],
  },
  {
    stem: "Which type of radiation damage most directly causes malignant transformation?",
    topic: "Oncogenic Agents",
    explanation:
      "DNA double-strand breaks, which are error-prone to repair and can produce translocations and deletions. Ionising radiation also generates free radicals causing indirect damage. This mechanism underlies the leukaemias and thyroid cancers seen after radiation exposure.",
    choices: [
      { text: "DNA double-strand breaks leading to translocations and deletions", isCorrect: true },
      { text: "Reversible protein denaturation", isCorrect: false },
      { text: "Cell membrane thinning", isCorrect: false },
      { text: "Depletion of cytoplasmic enzymes only", isCorrect: false },
    ],
  },
  {
    stem: "What is the most common malignancy of the skin, and how does it behave?",
    topic: "Systemic Neoplasia",
    explanation:
      "Basal cell carcinoma. It is locally invasive — classically a pearly nodule with rolled edges and telangiectasia — but almost never metastasises. Squamous cell carcinoma metastasises occasionally; melanoma does so readily, which is why the distinction drives management entirely.",
    choices: [
      { text: "Basal cell carcinoma — locally invasive, rarely metastasising", isCorrect: true },
      { text: "Melanoma — the commonest and least aggressive", isCorrect: false },
      { text: "Squamous cell carcinoma — never invades locally", isCorrect: false },
      { text: "Kaposi sarcoma", isCorrect: false },
    ],
  },
  {
    stem: "Which feature of a pigmented skin lesion is most concerning for melanoma?",
    topic: "Systemic Neoplasia",
    explanation:
      "Change — in size, shape or colour — captured by the ABCDE criteria: asymmetry, border irregularity, colour variation, diameter over 6 mm and evolution. Breslow thickness is the strongest prognostic factor, which is why early excision matters so much.",
    choices: [
      { text: "Recent change in size, shape or colour", isCorrect: true },
      { text: "Uniform brown colour throughout", isCorrect: false },
      { text: "Perfectly symmetrical outline", isCorrect: false },
      { text: "Presence since birth without change", isCorrect: false },
    ],
  },
  {
    stem: "Which histological type accounts for most colorectal cancers, and what precedes them?",
    topic: "Systemic Neoplasia",
    explanation:
      "Adenocarcinoma, arising through the adenoma-carcinoma sequence over years. That slow, visible precursor stage is exactly why colonoscopic screening works — removing an adenomatous polyp prevents a cancer rather than merely detecting one early.",
    choices: [
      { text: "Adenocarcinoma, arising from adenomatous polyps", isCorrect: true },
      { text: "Squamous cell carcinoma, arising de novo", isCorrect: false },
      { text: "Small cell carcinoma from neuroendocrine cells", isCorrect: false },
      { text: "Lymphoma from Peyer's patches", isCorrect: false },
    ],
  },
  {
    stem: "Which inherited syndrome causes hundreds of colonic polyps and near-certain colorectal cancer?",
    topic: "Cancer Genetics",
    explanation:
      "Familial adenomatous polyposis, from APC gene mutation. Cancer is essentially inevitable without prophylactic colectomy, usually in early adulthood. Lynch syndrome, by contrast, involves mismatch repair defects with far fewer polyps but accelerated progression.",
    choices: [
      { text: "Familial adenomatous polyposis (APC mutation)", isCorrect: true },
      { text: "Lynch syndrome", isCorrect: false },
      { text: "Peutz-Jeghers syndrome", isCorrect: false },
      { text: "Li-Fraumeni syndrome", isCorrect: false },
    ],
  },
  {
    stem: "BRCA1 and BRCA2 mutations increase risk of which cancers, and what is their normal function?",
    topic: "Cancer Genetics",
    explanation:
      "Breast and ovarian cancer primarily, with raised prostate and pancreatic risk. Normally they repair DNA double-strand breaks by homologous recombination. Their loss creates a repair vulnerability that PARP inhibitors exploit — a case of the mutation itself becoming the treatment target.",
    choices: [
      { text: "Breast and ovarian — they repair DNA double-strand breaks", isCorrect: true },
      { text: "Colorectal only — they regulate cell adhesion", isCorrect: false },
      { text: "Lung only — they detoxify carcinogens", isCorrect: false },
      { text: "They are oncogenes promoting proliferation", isCorrect: false },
    ],
  },
  {
    stem: "Which leukaemia is associated with the Philadelphia chromosome, and why does that matter?",
    topic: "Haematological Malignancy",
    explanation:
      "Chronic myeloid leukaemia, with the t(9;22) translocation producing the BCR-ABL fusion tyrosine kinase. It matters enormously because imatinib targets that kinase directly, transforming CML from fatal to manageable — the archetype of targeted cancer therapy.",
    choices: [
      { text: "Chronic myeloid leukaemia — BCR-ABL is targetable with imatinib", isCorrect: true },
      { text: "Acute lymphoblastic leukaemia — untreatable", isCorrect: false },
      { text: "Chronic lymphocytic leukaemia — no genetic basis", isCorrect: false },
      { text: "Hodgkin lymphoma", isCorrect: false },
    ],
  },
  {
    stem: "Which cell is pathognomonic of Hodgkin lymphoma?",
    topic: "Haematological Malignancy",
    explanation:
      "The Reed-Sternberg cell — large and binucleate with prominent nucleoli, giving an 'owl-eye' appearance. Hodgkin lymphoma spreads contiguously between nodal groups and generally carries a better prognosis than non-Hodgkin lymphoma, which spreads unpredictably.",
    choices: [
      { text: "The Reed-Sternberg cell", isCorrect: true },
      { text: "The Auer rod", isCorrect: false },
      { text: "The smudge cell", isCorrect: false },
      { text: "The Bence-Jones cell", isCorrect: false },
    ],
  },
  {
    stem: "A patient has bone pain, anaemia, hypercalcaemia and renal impairment with a monoclonal band. What is the diagnosis?",
    topic: "Haematological Malignancy",
    explanation:
      "Multiple myeloma — a plasma cell malignancy. The CRAB features (hyperCalcaemia, Renal impairment, Anaemia, Bone lesions) define end-organ damage. Light chains cause the renal failure, and lytic lesions arise from osteoclast activation.",
    choices: [
      { text: "Multiple myeloma", isCorrect: true },
      { text: "Chronic lymphocytic leukaemia", isCorrect: false },
      { text: "Hodgkin lymphoma", isCorrect: false },
      { text: "Aplastic anaemia", isCorrect: false },
    ],
  },
  {
    stem: "What is tumour lysis syndrome, and which electrolyte abnormality is most dangerous?",
    topic: "Oncological Emergencies",
    explanation:
      "Massive cell breakdown after starting treatment for a bulky, rapidly dividing tumour, releasing potassium, phosphate and uric acid. HYPERKALAEMIA is the most immediately life-threatening because of arrhythmia. Prevention with hydration and allopurinol or rasburicase is far better than treatment.",
    choices: [
      { text: "Cell lysis releasing potassium, phosphate and urate — hyperkalaemia is most dangerous", isCorrect: true },
      { text: "Hypokalaemia from renal wasting", isCorrect: false },
      { text: "Hypocalcaemia is the immediate threat", isCorrect: false },
      { text: "It occurs only before treatment begins", isCorrect: false },
    ],
  },
  {
    stem: "A cancer patient develops back pain with leg weakness and urinary retention. What must be excluded urgently?",
    topic: "Oncological Emergencies",
    explanation:
      "Metastatic spinal cord compression. Urgent MRI of the whole spine, high-dose corticosteroid and consideration of radiotherapy or surgery are needed. Neurological function at the time of treatment strongly predicts the final outcome — once someone loses the ability to walk, it rarely returns.",
    choices: [
      { text: "Metastatic spinal cord compression", isCorrect: true },
      { text: "Simple mechanical back pain", isCorrect: false },
      { text: "Urinary tract infection", isCorrect: false },
      { text: "Peripheral neuropathy from chemotherapy", isCorrect: false },
    ],
  },
  {
    stem: "Why is neutropenic sepsis a medical emergency in a patient receiving chemotherapy?",
    topic: "Oncological Emergencies",
    explanation:
      "Without neutrophils the usual inflammatory signs are blunted, so infection progresses to overwhelming sepsis with few localising features. Fever may be the only sign. Empirical broad-spectrum antibiotics within an hour, before results return, is the standard — waiting for confirmation costs lives.",
    choices: [
      { text: "Absent neutrophils blunt the signs while infection progresses rapidly", isCorrect: true },
      { text: "Chemotherapy makes antibiotics ineffective", isCorrect: false },
      { text: "It only occurs after treatment is complete", isCorrect: false },
      { text: "Fever always indicates tumour progression instead", isCorrect: false },
    ],
  },
];

/* ═══════════ SYSTEMIC PATHOLOGY ═══════════ */

const SYS1: Q[] = [
  {
    stem: "What is the pathological hallmark of cirrhosis?",
    topic: "Hepatic Pathology",
    explanation:
      "Diffuse fibrosis with regenerative nodules replacing normal architecture. That distorted architecture obstructs portal flow, causing portal hypertension with varices, ascites and splenomegaly, while loss of functioning hepatocytes causes jaundice and coagulopathy. Both consequences follow from the same structural change.",
    choices: [
      { text: "Diffuse fibrosis with regenerative nodules replacing normal architecture", isCorrect: true },
      { text: "Fatty infiltration without fibrosis", isCorrect: false },
      { text: "Acute hepatocyte necrosis alone", isCorrect: false },
      { text: "Granuloma formation throughout the liver", isCorrect: false },
    ],
  },
  {
    stem: "Why does liver failure cause a bleeding tendency?",
    topic: "Hepatic Pathology",
    explanation:
      "The liver synthesises most clotting factors, so failure prolongs the prothrombin time — which makes PT a sensitive marker of synthetic function. Thrombocytopenia from hypersplenism and reduced thrombopoietin compounds it. Vitamin K corrects deficiency but not synthetic failure.",
    choices: [
      { text: "Reduced synthesis of clotting factors, prolonging the prothrombin time", isCorrect: true },
      { text: "Excess production of anticoagulant proteins only", isCorrect: false },
      { text: "Direct destruction of platelets by hepatocytes", isCorrect: false },
      { text: "Increased fibrinogen production", isCorrect: false },
    ],
  },
  {
    stem: "What distinguishes Crohn's disease from ulcerative colitis pathologically?",
    topic: "Gastrointestinal Pathology",
    explanation:
      "Crohn's is transmural with skip lesions, can affect anywhere from mouth to anus, and shows non-caseating granulomas. Ulcerative colitis is mucosal only, continuous from the rectum, and confined to the colon. Transmural involvement is why Crohn's causes fistulae and strictures while UC does not.",
    choices: [
      { text: "Crohn's is transmural with skip lesions; UC is mucosal and continuous", isCorrect: true },
      { text: "Crohn's is mucosal and continuous; UC is transmural", isCorrect: false },
      { text: "Both are confined to the colon", isCorrect: false },
      { text: "Neither shows granulomas", isCorrect: false },
    ],
  },
  {
    stem: "Which pathological process underlies coeliac disease?",
    topic: "Gastrointestinal Pathology",
    explanation:
      "An immune-mediated reaction to gluten causing villous atrophy, crypt hyperplasia and intraepithelial lymphocytosis in the small bowel. Loss of villous surface area causes malabsorption. Biopsy must be taken while the patient is still eating gluten, or the changes resolve and the diagnosis is missed.",
    choices: [
      { text: "Immune-mediated villous atrophy with crypt hyperplasia", isCorrect: true },
      { text: "Bacterial overgrowth destroying villi", isCorrect: false },
      { text: "Enzyme deficiency at the brush border only", isCorrect: false },
      { text: "Ischaemic injury to the small bowel", isCorrect: false },
    ],
  },
  {
    stem: "What is the pathological basis of emphysema?",
    topic: "Respiratory Pathology",
    explanation:
      "Destruction of alveolar walls without fibrosis, enlarging airspaces distal to the terminal bronchiole. Loss of elastic recoil causes airway collapse on expiration and air trapping, while loss of surface area reduces gas transfer. A protease-antiprotease imbalance drives it — hence alpha-1 antitrypsin deficiency.",
    choices: [
      { text: "Alveolar wall destruction with loss of elastic recoil and surface area", isCorrect: true },
      { text: "Thickening of alveolar walls by fibrosis", isCorrect: false },
      { text: "Excess mucus production alone", isCorrect: false },
      { text: "Bronchial smooth muscle hypertrophy only", isCorrect: false },
    ],
  },
  {
    stem: "What defines chronic bronchitis clinically?",
    topic: "Respiratory Pathology",
    explanation:
      "A productive cough on most days for at least three months in each of two consecutive years. Pathologically there is mucous gland hypertrophy — quantified by the Reid index — with goblet cell hyperplasia. Unlike emphysema, it is defined by clinical history rather than by tissue appearance.",
    choices: [
      { text: "Productive cough for three months in each of two consecutive years", isCorrect: true },
      { text: "Any cough lasting two weeks", isCorrect: false },
      { text: "Alveolar destruction on CT", isCorrect: false },
      { text: "A reduced FEV1 alone", isCorrect: false },
    ],
  },
  {
    stem: "Which pathological change underlies diabetic nephropathy?",
    topic: "Renal Pathology",
    explanation:
      "Glomerular basement membrane thickening and mesangial expansion, progressing to nodular glomerulosclerosis — Kimmelstiel-Wilson lesions. Hyperglycaemia drives non-enzymatic glycation and hyperfiltration injury, which is why glycaemic and blood pressure control alter the trajectory.",
    choices: [
      { text: "Basement membrane thickening with nodular glomerulosclerosis", isCorrect: true },
      { text: "Acute tubular necrosis", isCorrect: false },
      { text: "Granulomatous interstitial nephritis", isCorrect: false },
      { text: "Amyloid deposition", isCorrect: false },
    ],
  },
  {
    stem: "What is the histological hallmark of Alzheimer's disease?",
    topic: "Neuropathology",
    explanation:
      "Extracellular amyloid-beta plaques and intracellular neurofibrillary tangles of hyperphosphorylated tau, with cortical atrophy most marked in the hippocampus and temporal lobes. Hippocampal involvement is why short-term memory fails first — anatomy predicting the clinical picture.",
    choices: [
      { text: "Amyloid plaques and neurofibrillary tangles with hippocampal atrophy", isCorrect: true },
      { text: "Lewy bodies in the substantia nigra", isCorrect: false },
      { text: "Demyelinating plaques in white matter", isCorrect: false },
      { text: "Spongiform change with prion deposition", isCorrect: false },
    ],
  },
  {
    stem: "What characterises the plaques of multiple sclerosis?",
    topic: "Neuropathology",
    explanation:
      "Focal demyelination with relative axonal preservation, typically periventricular and disseminated in time and space. Preserved axons early on explain why function can recover between relapses; progressive axonal loss later explains why disability eventually accumulates.",
    choices: [
      { text: "Focal demyelination with relative axonal preservation", isCorrect: true },
      { text: "Axonal destruction with intact myelin", isCorrect: false },
      { text: "Amyloid deposition in white matter", isCorrect: false },
      { text: "Granuloma formation around vessels", isCorrect: false },
    ],
  },
  {
    stem: "Which pathological process causes the joint damage in rheumatoid arthritis?",
    topic: "Musculoskeletal Pathology",
    explanation:
      "Synovial inflammation forming a pannus — hypertrophied, invasive synovium that erodes cartilage and bone. It is an autoimmune, symmetrical, small-joint disease with systemic features. Osteoarthritis differs fundamentally: cartilage loss without primary inflammation.",
    choices: [
      { text: "Inflammatory pannus eroding cartilage and bone", isCorrect: true },
      { text: "Cartilage wear without inflammation", isCorrect: false },
      { text: "Urate crystal deposition", isCorrect: false },
      { text: "Bacterial invasion of the joint", isCorrect: false },
    ],
  },
  {
    stem: "Which crystals are found in gout, and how do they appear under polarised light?",
    topic: "Musculoskeletal Pathology",
    explanation:
      "Monosodium urate — needle-shaped and negatively birefringent. Pseudogout involves calcium pyrophosphate crystals, which are rhomboid and positively birefringent. Joint aspiration distinguishes them and also excludes septic arthritis, which can look identical clinically.",
    choices: [
      { text: "Monosodium urate — needle-shaped, negatively birefringent", isCorrect: true },
      { text: "Calcium pyrophosphate — rhomboid, positively birefringent", isCorrect: false },
      { text: "Cholesterol crystals — plate-shaped", isCorrect: false },
      { text: "No crystals are present in gout", isCorrect: false },
    ],
  },
  {
    stem: "What is the pathological difference between osteoporosis and osteomalacia?",
    topic: "Musculoskeletal Pathology",
    explanation:
      "Osteoporosis is reduced bone QUANTITY with normal mineralisation — normal biochemistry, low density. Osteomalacia is defective MINERALISATION of normal osteoid, usually from vitamin D deficiency, with low calcium and phosphate and raised alkaline phosphatase. The biochemistry separates them.",
    choices: [
      { text: "Osteoporosis: less bone, normally mineralised. Osteomalacia: normal osteoid, poorly mineralised", isCorrect: true },
      { text: "Osteoporosis involves defective mineralisation", isCorrect: false },
      { text: "Both show identical biochemistry", isCorrect: false },
      { text: "Osteomalacia only occurs in children", isCorrect: false },
    ],
  },
  {
    stem: "Which thyroid pathology is characterised by lymphocytic infiltration and antithyroid antibodies?",
    topic: "Endocrine Pathology",
    explanation:
      "Hashimoto's thyroiditis — autoimmune destruction with lymphocytic infiltration, germinal centres and Hürthle cell change, causing hypothyroidism. It is the commonest cause of hypothyroidism where iodine is sufficient, and carries a small increased risk of thyroid lymphoma.",
    choices: [
      { text: "Hashimoto's thyroiditis", isCorrect: true },
      { text: "Graves' disease", isCorrect: false },
      { text: "Papillary carcinoma", isCorrect: false },
      { text: "Multinodular goitre", isCorrect: false },
    ],
  },
  {
    stem: "Which thyroid malignancy is the most common and has the best prognosis?",
    topic: "Endocrine Pathology",
    explanation:
      "Papillary carcinoma, recognised by nuclear features — 'Orphan Annie' clear nuclei and psammoma bodies. It spreads lymphatically but carries an excellent prognosis. Anaplastic carcinoma sits at the opposite extreme, being rapidly fatal.",
    choices: [
      { text: "Papillary carcinoma", isCorrect: true },
      { text: "Anaplastic carcinoma", isCorrect: false },
      { text: "Medullary carcinoma", isCorrect: false },
      { text: "Follicular carcinoma", isCorrect: false },
    ],
  },
  {
    stem: "What pathological change occurs in the pancreas in type 1 diabetes?",
    topic: "Endocrine Pathology",
    explanation:
      "Autoimmune destruction of beta cells in the islets, with insulitis and eventual near-total insulin deficiency. This is fundamentally different from type 2, where islets persist but insulin resistance predominates — which is why type 1 requires insulin from diagnosis and cannot be managed with oral agents.",
    choices: [
      { text: "Autoimmune destruction of islet beta cells", isCorrect: true },
      { text: "Amyloid deposition with preserved beta cells", isCorrect: false },
      { text: "Fibrosis of the exocrine pancreas only", isCorrect: false },
      { text: "Beta cell hyperplasia", isCorrect: false },
    ],
  },
];

/* ═══════════ SEED ═══════════ */

async function seedSet(o: {
  categorySlug: string; slug: string; title: string; description: string;
  kind: string; timeLimitSeconds: number | null; difficulty: string; questions: Q[];
}) {
  const category = await prisma.quizCategory.findUnique({ where: { slug: o.categorySlug } });
  if (!category) {
    console.log(`  ✗ Category "${o.categorySlug}" not found — run seed-medical-taxonomy.ts first.`);
    return;
  }
  const quiz = await prisma.quiz.upsert({
    where: { slug: o.slug },
    create: {
      slug: o.slug, title: o.title, description: o.description, categoryId: category.id,
      kind: o.kind, timeLimitSeconds: o.timeLimitSeconds, passThreshold: 70,
      difficulty: o.difficulty, published: true,
    },
    update: {
      title: o.title, description: o.description, categoryId: category.id,
      kind: o.kind, timeLimitSeconds: o.timeLimitSeconds,
    },
  });
  await prisma.question.deleteMany({ where: { quizId: quiz.id } });
  let order = 0;
  for (const q of o.questions) {
    await prisma.question.create({
      data: {
        quizId: quiz.id, type: "SINGLE", stem: q.stem, topic: q.topic,
        explanation: q.explanation, points: 1, order: order++,
        choices: { create: q.choices.map((c, i) => ({ text: c.text, isCorrect: c.isCorrect, order: i })) },
      },
    });
  }
  console.log(`  ✓ ${o.title} — ${o.questions.length} questions`);
}

async function main() {
  console.log("Seeding Pathology…\n");

  await seedSet({
    categorySlug: "fs-pathology", slug: "general-pathology-set-1",
    title: "General Pathology — Practice Set 1",
    description: "Cell injury and death, acute and chronic inflammation, wound healing and cellular adaptation. Fifteen questions, untimed.",
    kind: "PRACTICE", timeLimitSeconds: null, difficulty: "Foundational", questions: GEN1,
  });

  await seedSet({
    categorySlug: "fs-pathology", slug: "general-pathology-set-2",
    title: "General Pathology — Practice Set 2",
    description: "Thrombosis and embolism, infarction, oedema, atherosclerosis, deposition disorders and the hypersensitivity reactions. Fifteen fresh questions.",
    kind: "PRACTICE", timeLimitSeconds: null, difficulty: "Intermediate", questions: GEN2,
  });

  await seedSet({
    categorySlug: "fs-pathology", slug: "neoplasia-set-1",
    title: "Neoplasia — Practice Set 1",
    description: "Tumour biology, cancer genetics, staging and grading, metastasis, paraneoplastic syndromes and tumour markers. Fifteen questions.",
    kind: "PRACTICE", timeLimitSeconds: null, difficulty: "Intermediate", questions: NEO1,
  });

  await seedSet({
    categorySlug: "fs-pathology", slug: "neoplasia-set-2",
    title: "Neoplasia — Practice Set 2",
    description: "Oncogenic viruses and bacteria, radiation, inherited cancer syndromes, haematological malignancy and the oncological emergencies. Fifteen fresh questions.",
    kind: "PRACTICE", timeLimitSeconds: null, difficulty: "Intermediate", questions: NEO2,
  });

  await seedSet({
    categorySlug: "fs-pathology", slug: "systemic-pathology-set-1",
    title: "Systemic Pathology — Practice Set 1",
    description: "Organ-by-organ pathology: liver, gastrointestinal tract, lung, kidney, nervous system, musculoskeletal and endocrine. Fifteen questions.",
    kind: "PRACTICE", timeLimitSeconds: null, difficulty: "Intermediate", questions: SYS1,
  });

  await seedSet({
    categorySlug: "fs-pathology", slug: "general-pathology-exam-1",
    title: "General Pathology — Timed Exam",
    description: "Both general pathology sets combined: thirty questions in 35 minutes, feedback withheld until you submit.",
    kind: "EXAM", timeLimitSeconds: 35 * 60, difficulty: "Intermediate", questions: [...GEN1, ...GEN2],
  });

  await seedSet({
    categorySlug: "fs-pathology", slug: "neoplasia-exam-1",
    title: "Neoplasia — Timed Exam",
    description: "Both neoplasia sets combined: thirty questions in 35 minutes, feedback withheld until you submit.",
    kind: "EXAM", timeLimitSeconds: 35 * 60, difficulty: "Intermediate", questions: [...NEO1, ...NEO2],
  });

  await seedSet({
    categorySlug: "fs-pathology", slug: "pathology-comprehensive-exam-1",
    title: "Pathology — Comprehensive Timed Exam",
    description: "All seventy-five items across general pathology, neoplasia and systemic pathology: 90 minutes.",
    kind: "EXAM", timeLimitSeconds: 90 * 60, difficulty: "Advanced",
    questions: [...GEN1, ...GEN2, ...NEO1, ...NEO2, ...SYS1],
  });

  console.log("\nDone. Editable in Admin → Question Bank.");
}

main().catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
