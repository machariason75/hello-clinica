/**
 * PATHOLOGY — PRACTICE SET 5
 * Neoplasia I — Tumor Biology & Carcinogenesis
 *
 * Difficulty: Advanced. Molecular mechanism and genetics, with the clinical
 * consequence attached to each — the pairing boards actually test.
 *
 * 93 questions across 12 topics:
 *   Nomenclature & Classification · Benign vs Malignant · Hallmarks of Cancer ·
 *   Oncogenes · Tumor Suppressor Genes · Evasion of Apoptosis & Senescence ·
 *   Invasion & Metastasis · Tumor Angiogenesis · Chemical Carcinogenesis ·
 *   Radiation & Physical Carcinogens · Oncogenic Viruses & Microbes ·
 *   Inherited Cancer Syndromes
 *
 * Item mix: 69 single-answer vignettes, 12 select-all-that-apply, 12 true/false.
 */

import type { Q } from "../_lib/qbank";

export const PATHOLOGY_SET_5: Q[] = [
  /* ══════════════ NOMENCLATURE & CLASSIFICATION ══════════════ */
  {
    stem: "A benign tumor of smooth muscle in the uterus is correctly named which of the following?",
    topic: "Nomenclature & Classification",
    explanation:
      "Benign mesenchymal tumors take the tissue of origin plus the suffix -oma, giving leiomyoma. The malignant counterpart is leiomyosarcoma; rhabdomyoma denotes skeletal muscle origin, a different lineage entirely.",
    choices: [
      { text: "Leiomyoma", isCorrect: true },
      { text: "Leiomyosarcoma" },
      { text: "Rhabdomyoma" },
      { text: "Fibroadenoma" },
      { text: "Myxoma" },
    ],
  },
  {
    stem: "Which malignant tumors are named misleadingly, using the benign -oma suffix despite being malignant? Select all that apply.",
    type: "MULTI",
    topic: "Nomenclature & Classification",
    explanation:
      "Melanoma, lymphoma, mesothelioma, seminoma and hepatoma are all malignant despite the -oma suffix, and glioblastoma likewise. Lipoma and leiomyoma are genuinely benign, so the suffix means what it says in those cases.",
    choices: [
      { text: "Melanoma", isCorrect: true },
      { text: "Lymphoma", isCorrect: true },
      { text: "Mesothelioma", isCorrect: true },
      { text: "Lipoma" },
      { text: "Leiomyoma" },
    ],
  },
  {
    stem: "A tumor containing tissue from all three germ layers within an ovary is called what?",
    topic: "Nomenclature & Classification",
    explanation:
      "A teratoma derives from germ cells and contains derivatives of ectoderm, mesoderm and endoderm. In the ovary it is usually mature and benign; in the postpubertal testis, teratomas are treated as malignant.",
    choices: [
      { text: "Teratoma", isCorrect: true },
      { text: "Hamartoma" },
      { text: "Choristoma" },
      { text: "Adenoma" },
      { text: "Carcinosarcoma" },
    ],
  },
  {
    stem: "What distinguishes a hamartoma from a choristoma?",
    topic: "Nomenclature & Classification",
    explanation:
      "A hamartoma is disorganized but native tissue in its correct location, whereas a choristoma is normal tissue in an ectopic site — such as gastric mucosa in a Meckel diverticulum. Both are non-neoplastic malformations rather than true tumors.",
    choices: [
      { text: "Hamartoma is disorganized native tissue in situ; choristoma is normal tissue ectopically", isCorrect: true },
      { text: "Hamartoma is ectopic tissue; choristoma is disorganized native tissue" },
      { text: "Hamartoma is malignant; choristoma is benign" },
      { text: "Both are malignant germ cell tumors" },
      { text: "Hamartoma arises from germ cells; choristoma from stem cells" },
    ],
  },
  {
    stem: "True or False: Carcinoma denotes malignancy of epithelial origin, while sarcoma denotes malignancy of mesenchymal origin.",
    type: "TRUE_FALSE",
    topic: "Nomenclature & Classification",
    explanation:
      "True. The distinction matters clinically because carcinomas spread preferentially through lymphatics while sarcomas favor hematogenous spread — the naming carries a prediction about behavior.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "A mixed tumor of the salivary gland (pleomorphic adenoma) contains epithelial and mesenchymal-appearing elements. What is their origin?",
    topic: "Nomenclature & Classification",
    explanation:
      "Both components arise from a single clone of myoepithelial and ductal origin showing divergent differentiation, not from two separate tumors. Its high recurrence rate after incomplete excision reflects finger-like extensions beyond the apparent capsule.",
    choices: [
      { text: "A single clone showing divergent epithelial and mesenchymal differentiation", isCorrect: true },
      { text: "Two independent tumors arising simultaneously" },
      { text: "Germ cells differentiating along three lineages" },
      { text: "Metastases from two separate primaries" },
      { text: "A reactive stromal response to an epithelial tumor" },
    ],
  },
  {
    stem: "Which term describes a malignancy with no discernible differentiation, requiring immunohistochemistry to assign lineage?",
    topic: "Nomenclature & Classification",
    explanation:
      "Anaplastic tumors lack differentiation entirely and show marked pleomorphism, giant cells and bizarre mitoses. Anaplasia correlates with aggressive behavior, so it is a grading feature rather than merely a descriptive one.",
    choices: [
      { text: "Anaplastic", isCorrect: true },
      { text: "Well differentiated" },
      { text: "Metaplastic" },
      { text: "Desmoplastic" },
      { text: "Hyperplastic" },
    ],
  },
  {
    stem: "Desmoplasia in an infiltrating breast carcinoma refers to what, and what is its clinical consequence?",
    topic: "Nomenclature & Classification",
    explanation:
      "Desmoplasia is abundant fibrous stroma induced by the tumor, which makes the mass hard and fixed on examination and produces the classic irregular mammographic density. It is a host response rather than tumor tissue itself.",
    choices: [
      { text: "Tumor-induced fibrous stroma, producing a hard fixed mass", isCorrect: true },
      { text: "Necrosis within the tumor center, producing softening" },
      { text: "Calcification of the tumor capsule" },
      { text: "Lymphocytic infiltration of the tumor bed" },
      { text: "Mucin production by tumor cells" },
    ],
  },

  /* ══════════════ BENIGN VS MALIGNANT ══════════════ */
  {
    stem: "Which single feature most reliably establishes malignancy?",
    topic: "Benign vs Malignant",
    explanation:
      "Invasion through the basement membrane into surrounding tissue is the definitive criterion, and metastasis proves it beyond doubt. Mitotic rate, pleomorphism and size all correlate with malignancy but each occurs in benign lesions too.",
    choices: [
      { text: "Invasion through the basement membrane", isCorrect: true },
      { text: "A high mitotic rate" },
      { text: "Large tumor size" },
      { text: "Nuclear pleomorphism" },
      { text: "Rapid growth over months" },
    ],
  },
  {
    stem: "Which features favor a BENIGN tumor? Select all that apply.",
    type: "MULTI",
    topic: "Benign vs Malignant",
    explanation:
      "Benign tumors are well circumscribed or encapsulated, slow growing, well differentiated with cells resembling the tissue of origin, and non-metastasizing. Infiltrative margins and marked nuclear pleomorphism point toward malignancy.",
    choices: [
      { text: "A well-defined capsule with a pushing border", isCorrect: true },
      { text: "Close resemblance to the tissue of origin", isCorrect: true },
      { text: "Absence of metastasis", isCorrect: true },
      { text: "Infiltrative margins invading adjacent fat" },
      { text: "Marked nuclear pleomorphism with abnormal mitoses" },
    ],
  },
  {
    stem: "What is the essential difference between tumor GRADE and tumor STAGE?",
    topic: "Benign vs Malignant",
    explanation:
      "Grade describes how differentiated the tumor appears microscopically; stage describes how far it has spread anatomically. Stage is generally the stronger prognostic determinant, which is why staging drives treatment decisions.",
    choices: [
      { text: "Grade is degree of differentiation; stage is anatomic extent of spread", isCorrect: true },
      { text: "Grade is anatomic extent; stage is degree of differentiation" },
      { text: "Grade applies to carcinomas and stage to sarcomas" },
      { text: "Grade predicts survival better than stage in all tumors" },
      { text: "They are interchangeable terms" },
    ],
  },
  {
    stem: "In the TNM system, what does each letter denote?",
    topic: "Benign vs Malignant",
    explanation:
      "T describes primary tumor size and local extent, N regional lymph node involvement, and M distant metastasis. Node status is often the single most powerful prognostic variable in solid tumors, which is why sentinel node sampling matters so much.",
    choices: [
      { text: "Tumor extent, Nodal involvement, Metastasis", isCorrect: true },
      { text: "Type, Necrosis, Mitoses" },
      { text: "Thickness, Number, Margin" },
      { text: "Tissue, Nucleus, Membrane" },
      { text: "Time, Nodularity, Multiplicity" },
    ],
  },
  {
    stem: "True or False: A well-differentiated malignant tumor generally carries a better prognosis than a poorly differentiated one of the same stage.",
    type: "TRUE_FALSE",
    topic: "Benign vs Malignant",
    explanation:
      "True. Better differentiation reflects retained regulatory control and correlates with slower growth and less aggressive behavior. Stage still dominates prognosis, but grade adds independent information within a stage.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which nuclear features suggest malignancy on cytology?",
    topic: "Benign vs Malignant",
    explanation:
      "Malignant nuclei show a high nuclear-to-cytoplasmic ratio, hyperchromasia, irregular contours and prominent nucleoli. A uniformly low nuclear-to-cytoplasmic ratio with smooth contours is reassuring rather than concerning.",
    choices: [
      { text: "High nuclear-to-cytoplasmic ratio with hyperchromasia and prominent nucleoli", isCorrect: true },
      { text: "Low nuclear-to-cytoplasmic ratio with pale even chromatin" },
      { text: "Uniform small nuclei with smooth contours" },
      { text: "Absent nucleoli with abundant cytoplasm" },
      { text: "Binucleation alone in every cell" },
    ],
  },
  {
    stem: "Why do benign tumors sometimes kill?",
    topic: "Benign vs Malignant",
    explanation:
      "Location and function matter as much as biology: a benign meningioma can compress the brainstem, a pituitary adenoma can secrete hormone, and an insulinoma can cause fatal hypoglycemia. Benign is a statement about invasion, not about danger.",
    choices: [
      { text: "Through critical location, mass effect, or hormone secretion", isCorrect: true },
      { text: "By metastasizing late in their course" },
      { text: "By invading the basement membrane slowly" },
      { text: "By transforming into sarcomas in all cases" },
      { text: "Benign tumors are never fatal" },
    ],
  },
  {
    stem: "Which growth pattern is characteristic of malignancy on gross examination?",
    topic: "Benign vs Malignant",
    explanation:
      "Irregular infiltrative borders with crab-like extensions and no capsule are typical, often with central necrosis and hemorrhage because growth outstrips blood supply. A smooth encapsulated nodule that shells out easily suggests a benign lesion.",
    choices: [
      { text: "Irregular infiltrative margins with central necrosis", isCorrect: true },
      { text: "A smooth capsule that shells out easily" },
      { text: "Uniform pale tissue with no hemorrhage" },
      { text: "A pedunculated polyp with a narrow stalk only" },
      { text: "Cystic change with clear serous fluid only" },
    ],
  },

  /* ══════════════ HALLMARKS OF CANCER ══════════════ */
  {
    stem: "Which of the following are recognized hallmarks of cancer? Select all that apply.",
    type: "MULTI",
    topic: "Hallmarks of Cancer",
    explanation:
      "Self-sufficiency in growth signals, insensitivity to growth inhibition, evasion of apoptosis, limitless replicative potential, sustained angiogenesis, invasion and metastasis, altered metabolism and immune evasion are the accepted hallmarks. Increased dependence on external growth factors and enhanced contact inhibition are the opposite of what tumors do.",
    choices: [
      { text: "Self-sufficiency in growth signals", isCorrect: true },
      { text: "Evasion of apoptosis", isCorrect: true },
      { text: "Limitless replicative potential", isCorrect: true },
      { text: "Increased dependence on external growth factors" },
      { text: "Enhanced contact inhibition of growth" },
    ],
  },
  {
    stem: "The Warburg effect describes which metabolic feature of tumors?",
    topic: "Hallmarks of Cancer",
    explanation:
      "Tumor cells favor aerobic glycolysis even when oxygen is available, generating ATP inefficiently but supplying carbon skeletons for biosynthesis. This avidity for glucose is what makes FDG-PET imaging work.",
    choices: [
      { text: "Aerobic glycolysis despite adequate oxygen, supporting biosynthesis", isCorrect: true },
      { text: "Exclusive reliance on oxidative phosphorylation" },
      { text: "Complete cessation of glucose uptake" },
      { text: "Preferential beta-oxidation of fatty acids only" },
      { text: "Absence of any metabolic difference from normal cells" },
    ],
  },
  {
    stem: "How do most cancers achieve limitless replicative potential?",
    topic: "Hallmarks of Cancer",
    explanation:
      "Reactivation of telomerase maintains telomere length and bypasses replicative senescence, and it is detectable in the large majority of human cancers. A minority use alternative lengthening of telomeres through recombination.",
    choices: [
      { text: "Telomerase reactivation maintaining telomere length", isCorrect: true },
      { text: "Complete loss of all telomeric DNA" },
      { text: "Permanent arrest in G0 with periodic escape" },
      { text: "Increased mitochondrial DNA copy number" },
      { text: "Loss of centromeric function" },
    ],
  },
  {
    stem: "Tumors evade immune destruction partly through PD-L1 expression. What does PD-L1 do?",
    topic: "Hallmarks of Cancer",
    explanation:
      "PD-L1 on tumor cells engages PD-1 on T cells, delivering an inhibitory signal that switches off the cytotoxic response. Checkpoint inhibitors such as pembrolizumab block this interaction and restore T cell killing — the mechanism behind a whole drug class.",
    choices: [
      { text: "Engages PD-1 on T cells, inhibiting the cytotoxic response", isCorrect: true },
      { text: "Activates T cells to attack the tumor" },
      { text: "Blocks tumor angiogenesis directly" },
      { text: "Promotes apoptosis of the tumor cell itself" },
      { text: "Prevents metastatic spread through lymphatics" },
    ],
  },
  {
    stem: "True or False: Genomic instability is considered an enabling characteristic that accelerates acquisition of the other hallmarks.",
    type: "TRUE_FALSE",
    topic: "Hallmarks of Cancer",
    explanation:
      "True. Defective DNA repair and chromosomal instability raise the mutation rate, making acquisition of driver mutations far more likely. This is why mismatch repair deficient tumors accumulate mutations rapidly — and why they respond well to immunotherapy.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Tumor-promoting inflammation contributes to carcinogenesis by which mechanism?",
    topic: "Hallmarks of Cancer",
    explanation:
      "Chronic inflammation supplies growth factors, survival signals, proangiogenic factors and reactive oxygen species that damage DNA. This links ulcerative colitis to colorectal cancer and chronic hepatitis to hepatocellular carcinoma.",
    choices: [
      { text: "Supplying growth and survival signals plus DNA-damaging reactive species", isCorrect: true },
      { text: "Directly killing all transformed cells" },
      { text: "Preventing angiogenesis in the tumor bed" },
      { text: "Restoring contact inhibition to epithelium" },
      { text: "Increasing telomere shortening in tumor cells" },
    ],
  },
  {
    stem: "Which observation supports the clonal origin of most cancers?",
    topic: "Hallmarks of Cancer",
    explanation:
      "Tumors in women show a uniform pattern of X-chromosome inactivation and share identical genetic alterations across cells, indicating descent from a single transformed progenitor. Mixed inactivation patterns would indicate polyclonal hyperplasia instead.",
    choices: [
      { text: "Uniform X-inactivation pattern and shared driver mutations across tumor cells", isCorrect: true },
      { text: "Random X-inactivation across the tumor mass" },
      { text: "Presence of multiple distinct histologic types in one nodule" },
      { text: "Absence of any shared genetic change between tumor cells" },
      { text: "Equal contribution from maternal and paternal alleles in all cells" },
    ],
  },
  {
    stem: "The concept of cancer stem cells has which therapeutic implication?",
    topic: "Hallmarks of Cancer",
    explanation:
      "A small self-renewing subpopulation can regenerate the tumor, so therapy that debulks the mass but spares these cells permits relapse. This helps explain why tumors shrink impressively yet recur, and why stem-cell-directed strategies are pursued.",
    choices: [
      { text: "Sparing a self-renewing subpopulation permits relapse despite tumor shrinkage", isCorrect: true },
      { text: "All tumor cells have equal capacity to regenerate the tumor" },
      { text: "Debulking surgery is always curative" },
      { text: "Chemotherapy preferentially kills stem cells first" },
      { text: "Cancer stem cells are more differentiated than the bulk tumor" },
    ],
  },

  /* ══════════════ ONCOGENES ══════════════ */
  {
    stem: "Which statement correctly describes the difference between a proto-oncogene and an oncogene?",
    topic: "Oncogenes",
    explanation:
      "A proto-oncogene is a normal gene promoting growth; gain-of-function mutation converts it to an oncogene with constitutive activity. A single mutated allele suffices, which is why oncogenes act dominantly — the contrast with tumor suppressors requiring both hits.",
    choices: [
      { text: "Proto-oncogene is normal; gain-of-function mutation makes it a dominant oncogene", isCorrect: true },
      { text: "Proto-oncogene is mutated; loss of function makes it an oncogene" },
      { text: "Both alleles must be lost for an oncogene to act" },
      { text: "Oncogenes act recessively at the cellular level" },
      { text: "Proto-oncogenes inhibit the cell cycle normally" },
    ],
  },
  {
    stem: "A patient with chronic myeloid leukemia has t(9;22). Which fusion protein results, and what is its function?",
    topic: "Oncogenes",
    explanation:
      "The Philadelphia chromosome creates BCR-ABL, a constitutively active tyrosine kinase driving unregulated proliferation. Imatinib inhibits it directly, which transformed CML from a fatal disease to a chronic one — the model targeted therapy.",
    choices: [
      { text: "BCR-ABL, a constitutively active tyrosine kinase", isCorrect: true },
      { text: "PML-RARA, a blocked retinoic acid receptor" },
      { text: "MYC-IgH, a dysregulated transcription factor" },
      { text: "EWS-FLI1, an aberrant transcription factor" },
      { text: "BCL2-IgH, an anti-apoptotic protein" },
    ],
  },
  {
    stem: "Match each oncogene to its associated tumor. Which pairings are correct? Select all that apply.",
    type: "MULTI",
    topic: "Oncogenes",
    explanation:
      "HER2/neu amplification occurs in breast cancer, KRAS mutation in pancreatic and colorectal cancer, and N-MYC amplification in neuroblastoma where it signals poor prognosis. BCR-ABL belongs to CML rather than Burkitt lymphoma, and RET is associated with MEN2 rather than retinoblastoma.",
    choices: [
      { text: "HER2/neu — breast carcinoma", isCorrect: true },
      { text: "KRAS — pancreatic and colorectal carcinoma", isCorrect: true },
      { text: "N-MYC — neuroblastoma", isCorrect: true },
      { text: "BCR-ABL — Burkitt lymphoma" },
      { text: "RET — retinoblastoma" },
    ],
  },
  {
    stem: "Burkitt lymphoma carries t(8;14). What is the mechanism of oncogene activation?",
    topic: "Oncogenes",
    explanation:
      "MYC is translocated to the immunoglobulin heavy chain locus, where a powerful constitutively active promoter drives massive overexpression of an otherwise normal transcription factor. The protein is normal; its quantity and timing are not.",
    choices: [
      { text: "MYC placed under the immunoglobulin heavy chain promoter, causing overexpression", isCorrect: true },
      { text: "MYC point mutation producing a hyperactive protein" },
      { text: "MYC deletion removing a growth inhibitor" },
      { text: "Fusion of MYC to ABL producing a kinase" },
      { text: "Amplification of MYC to hundreds of copies" },
    ],
  },
  {
    stem: "RAS proteins are GTPases. Which mutation type activates them oncogenically?",
    topic: "Oncogenes",
    explanation:
      "Point mutations impair intrinsic GTPase activity so RAS remains GTP-bound and constitutively signals. The protein is locked in the on position rather than being overproduced — which is why RAS proved so hard to drug directly for decades.",
    choices: [
      { text: "Point mutation impairing GTP hydrolysis, locking RAS in the active state", isCorrect: true },
      { text: "Deletion of the GTP binding domain" },
      { text: "Translocation to an immunoglobulin promoter" },
      { text: "Loss of both alleles by chromosomal deletion" },
      { text: "Methylation silencing of the promoter" },
    ],
  },
  {
    stem: "True or False: HER2 amplification in breast cancer predicts response to trastuzumab.",
    type: "TRUE_FALSE",
    topic: "Oncogenes",
    explanation:
      "True. Trastuzumab is a monoclonal antibody against the HER2 receptor, so benefit requires the tumor to overexpress the target. This is why HER2 status is tested on every new breast cancer — the result determines whether the drug is offered at all.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Gene amplification as a mechanism of oncogene activation is exemplified by which finding on cytogenetics?",
    topic: "Oncogenes",
    explanation:
      "Double minutes and homogeneously staining regions represent amplified DNA, classically seen with N-MYC in neuroblastoma. They indicate copy number gain rather than a structural rearrangement such as translocation.",
    choices: [
      { text: "Double minutes and homogeneously staining regions", isCorrect: true },
      { text: "A reciprocal balanced translocation" },
      { text: "A ring chromosome with a single centromere" },
      { text: "Uniparental disomy" },
      { text: "Loss of an entire chromosome arm" },
    ],
  },
  {
    stem: "Which oncogene mutation predicts LACK of response to anti-EGFR antibodies such as cetuximab in colorectal cancer?",
    topic: "Oncogenes",
    explanation:
      "KRAS lies downstream of EGFR, so an activating KRAS mutation keeps the pathway on regardless of receptor blockade. Testing KRAS before prescribing cetuximab avoids treating patients who cannot benefit.",
    choices: [
      { text: "KRAS mutation, which activates the pathway downstream of the receptor", isCorrect: true },
      { text: "HER2 amplification, which bypasses the receptor upstream" },
      { text: "BCL2 overexpression, which blocks apoptosis" },
      { text: "TP53 mutation, which removes cell cycle arrest" },
      { text: "RB loss, which releases E2F" },
    ],
  },
  {
    stem: "A gastrointestinal stromal tumor is driven by which receptor tyrosine kinase mutation, and which drug targets it?",
    topic: "Oncogenes",
    explanation:
      "GIST is driven by activating c-KIT (CD117) mutations, and imatinib inhibits KIT as well as ABL. CD117 immunostaining is the diagnostic marker, tying the histologic diagnosis directly to a treatment decision.",
    choices: [
      { text: "c-KIT (CD117) — imatinib", isCorrect: true },
      { text: "HER2 — trastuzumab" },
      { text: "EGFR — erlotinib" },
      { text: "ALK — crizotinib" },
      { text: "BRAF — vemurafenib" },
    ],
  },

  /* ══════════════ TUMOR SUPPRESSOR GENES ══════════════ */
  {
    stem: "Knudson's two-hit hypothesis explains which observation about retinoblastoma?",
    topic: "Tumor Suppressor Genes",
    explanation:
      "Hereditary cases inherit one defective RB allele and need only one somatic hit, so tumors appear early and are often bilateral. Sporadic cases require two somatic hits in the same cell, so they are later and unilateral — the statistics of the disease follow directly from the genetics.",
    choices: [
      { text: "Inherited cases need one somatic hit, so they are earlier and bilateral", isCorrect: true },
      { text: "Inherited cases need two somatic hits, so they are later and unilateral" },
      { text: "Sporadic cases are always bilateral" },
      { text: "One hit suffices in sporadic cases" },
      { text: "RB acts as a dominant oncogene requiring a single mutation" },
    ],
  },
  {
    stem: "TP53 is described as the guardian of the genome. Which functions justify this? Select all that apply.",
    type: "MULTI",
    topic: "Tumor Suppressor Genes",
    explanation:
      "p53 arrests the cycle in G1 to allow repair, induces DNA repair genes, and triggers apoptosis when damage is irreparable; it also contributes to senescence. It does not promote telomerase expression or drive angiogenesis — those are pro-tumor activities it opposes.",
    choices: [
      { text: "Induces G1 arrest via p21 to allow repair", isCorrect: true },
      { text: "Upregulates DNA repair genes", isCorrect: true },
      { text: "Triggers apoptosis when damage is irreparable", isCorrect: true },
      { text: "Promotes telomerase expression" },
      { text: "Drives tumor angiogenesis through VEGF" },
    ],
  },
  {
    stem: "A family has early-onset sarcomas, breast cancer, brain tumors and adrenocortical carcinoma across generations. Which syndrome and gene?",
    topic: "Tumor Suppressor Genes",
    explanation:
      "Li-Fraumeni syndrome results from germline TP53 mutation and produces this characteristic constellation at unusually young ages. Recognizing the pattern matters because surveillance protocols differ substantially from the general population.",
    choices: [
      { text: "Li-Fraumeni syndrome — germline TP53 mutation", isCorrect: true },
      { text: "Lynch syndrome — mismatch repair mutation" },
      { text: "Familial adenomatous polyposis — APC mutation" },
      { text: "Von Hippel-Lindau — VHL mutation" },
      { text: "MEN1 — menin mutation" },
    ],
  },
  {
    stem: "APC loss initiates colorectal carcinogenesis by which molecular mechanism?",
    topic: "Tumor Suppressor Genes",
    explanation:
      "APC normally promotes degradation of beta-catenin; its loss allows beta-catenin to accumulate, enter the nucleus and drive transcription of MYC and cyclin D1. This is the first step of the adenoma-carcinoma sequence.",
    choices: [
      { text: "Beta-catenin accumulates and drives MYC and cyclin D1 transcription", isCorrect: true },
      { text: "Beta-catenin is degraded excessively, arresting the cycle" },
      { text: "RAS is directly activated by APC loss" },
      { text: "Telomerase is silenced, causing crisis" },
      { text: "Mismatch repair is abolished, causing microsatellite instability" },
    ],
  },
  {
    stem: "True or False: Tumor suppressor genes generally require inactivation of both alleles to contribute to tumorigenesis.",
    type: "TRUE_FALSE",
    topic: "Tumor Suppressor Genes",
    explanation:
      "True as a general rule, though haploinsufficiency and dominant-negative effects create exceptions — mutant p53 can inactivate the wild-type protein in a tetramer. The two-hit rule is the framework, not an absolute law.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "BRCA1 and BRCA2 normally function in which cellular process, and how do PARP inhibitors exploit their loss?",
    topic: "Tumor Suppressor Genes",
    explanation:
      "BRCA proteins repair double-strand breaks by homologous recombination. When that pathway is lost, blocking PARP-mediated single-strand repair leaves the cell with no viable repair route — synthetic lethality, which spares normal cells retaining BRCA function.",
    choices: [
      { text: "Homologous recombination repair; PARP inhibition creates synthetic lethality", isCorrect: true },
      { text: "Mismatch repair; PARP inhibition restores it" },
      { text: "Nucleotide excision repair; PARP inhibition bypasses it" },
      { text: "Telomere maintenance; PARP inhibition lengthens telomeres" },
      { text: "Cell cycle arrest; PARP inhibition induces arrest" },
    ],
  },
  {
    stem: "Loss of function of the VHL gene leads to which downstream consequence?",
    topic: "Tumor Suppressor Genes",
    explanation:
      "VHL normally targets HIF-1 alpha for degradation, so its loss allows HIF to accumulate and drive VEGF-mediated angiogenesis. This explains the characteristic hypervascular clear cell renal carcinomas and hemangioblastomas of the syndrome.",
    choices: [
      { text: "HIF-1 alpha accumulates and drives VEGF-mediated angiogenesis", isCorrect: true },
      { text: "HIF-1 alpha is degraded excessively, blocking angiogenesis" },
      { text: "Beta-catenin accumulates and drives proliferation" },
      { text: "p53 is stabilized, causing widespread apoptosis" },
      { text: "Telomerase is activated in all tissues" },
    ],
  },
  {
    stem: "Which mechanism silences tumor suppressor genes WITHOUT altering the DNA sequence?",
    topic: "Tumor Suppressor Genes",
    explanation:
      "Promoter hypermethylation is an epigenetic mechanism that silences transcription while leaving the sequence intact, as with MLH1 in sporadic microsatellite-unstable colorectal cancer. Because it is reversible in principle, it is a target for demethylating agents.",
    choices: [
      { text: "Promoter CpG island hypermethylation", isCorrect: true },
      { text: "Frameshift insertion in the coding region" },
      { text: "Nonsense point mutation creating a stop codon" },
      { text: "Whole gene deletion" },
      { text: "Reciprocal translocation splitting the gene" },
    ],
  },
  {
    stem: "PTEN loss activates which signaling pathway, and what is the consequence?",
    topic: "Tumor Suppressor Genes",
    explanation:
      "PTEN normally dephosphorylates PIP3, restraining PI3K/AKT/mTOR signaling; its loss leaves the pathway constitutively active, promoting growth and survival. This underlies the use of mTOR inhibitors in tumors with PTEN loss.",
    choices: [
      { text: "PI3K/AKT/mTOR — constitutive growth and survival signaling", isCorrect: true },
      { text: "RAS/MAPK — through direct RAS activation" },
      { text: "WNT/beta-catenin — through APC degradation" },
      { text: "JAK/STAT — through cytokine receptor mutation" },
      { text: "Hedgehog — through PTCH1 loss" },
    ],
  },

  /* ══════════════ EVASION OF APOPTOSIS & SENESCENCE ══════════════ */
  {
    stem: "Follicular lymphoma overexpresses BCL-2 through t(14;18). Why does this produce a slowly accumulating tumor rather than a rapidly proliferating one?",
    topic: "Evasion of Apoptosis & Senescence",
    explanation:
      "BCL-2 blocks apoptosis rather than driving proliferation, so cells accumulate because they fail to die. This explains the indolent course and the paradox that indolent lymphomas respond less durably to chemotherapy, which works partly by inducing apoptosis.",
    choices: [
      { text: "Cells accumulate by failing to die rather than by dividing faster", isCorrect: true },
      { text: "Cells divide far more rapidly than normal lymphocytes" },
      { text: "The tumor recruits normal lymphocytes into the mass" },
      { text: "Telomerase drives unlimited rapid division" },
      { text: "Angiogenesis expands the tumor volume without cell increase" },
    ],
  },
  {
    stem: "Which mechanisms allow tumor cells to evade apoptosis? Select all that apply.",
    type: "MULTI",
    topic: "Evasion of Apoptosis & Senescence",
    explanation:
      "Overexpression of BCL-2 family antiapoptotic proteins, loss of p53, reduced CD95 (FAS) death receptor expression, and inactivation of pro-apoptotic BAX all block apoptosis. Increased BAX expression and enhanced cytochrome c release would promote apoptosis instead.",
    choices: [
      { text: "Overexpression of BCL-2 or BCL-XL", isCorrect: true },
      { text: "Loss of functional p53", isCorrect: true },
      { text: "Reduced CD95 death receptor expression", isCorrect: true },
      { text: "Increased BAX expression" },
      { text: "Enhanced cytochrome c release from mitochondria" },
    ],
  },
  {
    stem: "Autophagy has a dual role in cancer. Which statement captures it?",
    topic: "Evasion of Apoptosis & Senescence",
    explanation:
      "Early on, autophagy suppresses tumorigenesis by removing damaged organelles and limiting genomic instability; in established tumors it supports survival under nutrient and hypoxic stress. Whether to inhibit or induce it therefore depends on context.",
    choices: [
      { text: "Tumor-suppressive early, but supports survival of established tumors under stress", isCorrect: true },
      { text: "Purely tumor-promoting at every stage" },
      { text: "Purely tumor-suppressive at every stage" },
      { text: "It has no established role in cancer biology" },
      { text: "It exclusively causes tumor cell death" },
    ],
  },
  {
    stem: "True or False: Oncogene-induced senescence acts as an early barrier to tumor progression.",
    type: "TRUE_FALSE",
    topic: "Evasion of Apoptosis & Senescence",
    explanation:
      "True. Strong oncogenic signaling in a normal cell triggers p16 and p53 dependent senescence, which is why benign nevi carrying BRAF mutations usually remain benign for decades. Escaping that barrier is a required step toward malignancy.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Loss of p16 (CDKN2A) contributes to cancer through which mechanism?",
    topic: "Evasion of Apoptosis & Senescence",
    explanation:
      "p16 inhibits CDK4/6, keeping RB hypophosphorylated and the cell in G1. Its loss releases that brake, allowing unchecked S phase entry — the same node targeted therapeutically by CDK4/6 inhibitors.",
    choices: [
      { text: "Loss of CDK4/6 inhibition, allowing RB phosphorylation and S phase entry", isCorrect: true },
      { text: "Direct activation of RAS signaling" },
      { text: "Stabilization of p53 causing apoptosis" },
      { text: "Silencing of telomerase" },
      { text: "Blockade of angiogenesis" },
    ],
  },
  {
    stem: "Why are mismatch repair deficient tumors particularly responsive to immune checkpoint inhibitors?",
    topic: "Evasion of Apoptosis & Senescence",
    explanation:
      "Defective mismatch repair produces a very high mutational burden, generating abundant neoantigens that make the tumor visible to T cells once checkpoint inhibition is released. This is why microsatellite instability status now guides immunotherapy decisions across tumor types.",
    choices: [
      { text: "High mutational burden generates neoantigens recognizable by T cells", isCorrect: true },
      { text: "They have unusually low mutational burden" },
      { text: "They lack PD-L1 expression entirely" },
      { text: "They cannot proliferate without checkpoint signaling" },
      { text: "They are uniformly avascular" },
    ],
  },
  {
    stem: "Telomere crisis in a cell that has bypassed senescence but lacks telomerase produces what?",
    topic: "Evasion of Apoptosis & Senescence",
    explanation:
      "Critically short telomeres are recognized as double-strand breaks, leading to end-to-end fusion, breakage-fusion-bridge cycles and massive chromosomal instability. Most cells die, but a rare survivor reactivating telomerase emerges with a grossly abnormal genome.",
    choices: [
      { text: "Chromosome end fusions with breakage-fusion-bridge cycles and instability", isCorrect: true },
      { text: "Orderly cell cycle arrest with no genomic change" },
      { text: "Immediate telomerase reactivation in every cell" },
      { text: "Complete loss of all chromosomes" },
      { text: "Reversion to a normal differentiated phenotype" },
    ],
  },

  /* ══════════════ INVASION & METASTASIS ══════════════ */
  {
    stem: "Place the steps of the metastatic cascade in correct sequence.",
    topic: "Invasion & Metastasis",
    explanation:
      "Loosening of cell-cell contacts precedes matrix degradation, attachment to matrix components, migration, intravasation, survival in circulation, extravasation and colonization. Colonization is the least efficient step, which is why most circulating tumor cells never form metastases.",
    choices: [
      { text: "Detachment → matrix degradation → migration → intravasation → survival → extravasation → colonization", isCorrect: true },
      { text: "Intravasation → detachment → colonization → matrix degradation → migration" },
      { text: "Colonization → extravasation → intravasation → detachment" },
      { text: "Migration → colonization → detachment → matrix degradation" },
      { text: "Matrix degradation → colonization → intravasation → migration" },
    ],
  },
  {
    stem: "Loss of which adhesion molecule is a key early event in epithelial tumor invasion?",
    topic: "Invasion & Metastasis",
    explanation:
      "E-cadherin maintains epithelial cell-cell adhesion, and its loss frees cells to detach and invade. Germline CDH1 mutation causes hereditary diffuse gastric cancer and lobular breast cancer, tying the molecule directly to a clinical syndrome.",
    choices: [
      { text: "E-cadherin", isCorrect: true },
      { text: "Integrin beta-1" },
      { text: "Laminin receptor" },
      { text: "CD44" },
      { text: "Selectin" },
    ],
  },
  {
    stem: "Which enzymes degrade basement membrane type IV collagen to permit invasion?",
    topic: "Invasion & Metastasis",
    explanation:
      "Matrix metalloproteinases, particularly MMP-2 and MMP-9 (the gelatinases), cleave type IV collagen. Tumors often induce stromal cells to produce them, so the invasive machinery is partly borrowed from the host.",
    choices: [
      { text: "MMP-2 and MMP-9", isCorrect: true },
      { text: "Lysyl oxidase and prolyl hydroxylase" },
      { text: "Caspase-3 and caspase-9" },
      { text: "Telomerase and reverse transcriptase" },
      { text: "Superoxide dismutase and catalase" },
    ],
  },
  {
    stem: "The 'seed and soil' hypothesis explains which observation? Select all that apply.",
    type: "MULTI",
    topic: "Invasion & Metastasis",
    explanation:
      "Organ tropism reflects compatibility between tumor cells and the target microenvironment, explaining why prostate cancer favors bone, breast cancer bone, lung and brain, and why some organs such as skeletal muscle and spleen are rarely involved despite abundant blood flow. It is not simply a matter of which capillary bed is encountered first.",
    choices: [
      { text: "Prostate carcinoma metastasizes preferentially to bone", isCorrect: true },
      { text: "Skeletal muscle is rarely a metastatic site despite rich blood supply", isCorrect: true },
      { text: "Chemokine receptor expression influences destination organ", isCorrect: true },
      { text: "Metastasis is determined solely by the first capillary bed encountered" },
      { text: "All organs are colonized with equal frequency" },
    ],
  },
  {
    stem: "Why do colorectal carcinomas metastasize to the liver first?",
    topic: "Invasion & Metastasis",
    explanation:
      "Venous drainage of the colon passes through the portal vein, making the liver the first capillary bed encountered — mechanical rather than tropic. Rectal tumors below the dentate line may bypass this via systemic drainage and present with lung metastases instead.",
    choices: [
      { text: "Portal venous drainage makes the liver the first capillary bed", isCorrect: true },
      { text: "Hepatocytes secrete chemokines specific for colonic cells" },
      { text: "The liver lacks any immune surveillance" },
      { text: "Colonic tumors spread exclusively through lymphatics to the liver" },
      { text: "Hepatic arterial supply carries tumor cells from the colon" },
    ],
  },
  {
    stem: "True or False: Carcinomas typically spread first by lymphatics while sarcomas typically spread hematogenously.",
    type: "TRUE_FALSE",
    topic: "Invasion & Metastasis",
    explanation:
      "True as a general rule, which is why sentinel node biopsy is central in breast cancer and melanoma but less so in sarcoma. Exceptions exist — renal cell and hepatocellular carcinoma invade veins directly and spread hematogenously.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Epithelial-mesenchymal transition contributes to metastasis by which change?",
    topic: "Invasion & Metastasis",
    explanation:
      "Tumor cells downregulate E-cadherin and epithelial markers while upregulating vimentin and N-cadherin, acquiring motility and invasiveness. The reverse transition at the metastatic site allows the cell to re-establish an epithelial colony.",
    choices: [
      { text: "Loss of epithelial markers and gain of mesenchymal motility phenotype", isCorrect: true },
      { text: "Gain of E-cadherin and tighter cell-cell adhesion" },
      { text: "Complete loss of all cytoskeletal elements" },
      { text: "Terminal differentiation into fibroblasts permanently" },
      { text: "Induction of senescence in the invading cells" },
    ],
  },
  {
    stem: "Renal cell carcinoma characteristically invades which structure, producing a distinctive route of spread?",
    topic: "Invasion & Metastasis",
    explanation:
      "It grows into the renal vein and may extend up the inferior vena cava, sometimes reaching the right atrium. This direct venous invasion explains the hematogenous pattern with lung metastases and influences surgical planning substantially.",
    choices: [
      { text: "The renal vein with extension into the inferior vena cava", isCorrect: true },
      { text: "The renal artery with retrograde aortic extension" },
      { text: "The ureter with extension to the bladder trigone" },
      { text: "The renal pelvis lymphatics exclusively" },
      { text: "The perinephric fat without vascular involvement" },
    ],
  },

  /* ══════════════ TUMOR ANGIOGENESIS ══════════════ */
  {
    stem: "Beyond approximately what size can a tumor not grow without inducing its own blood supply?",
    topic: "Tumor Angiogenesis",
    explanation:
      "Diffusion supports a tumor only to roughly 1 to 2 mm, beyond which hypoxia and nutrient limitation halt growth unless angiogenesis is switched on. This threshold is why the angiogenic switch is a critical early event rather than a late one.",
    choices: [
      { text: "1 to 2 mm", isCorrect: true },
      { text: "1 to 2 cm" },
      { text: "5 to 10 cm" },
      { text: "100 µm" },
      { text: "There is no size limit" },
    ],
  },
  {
    stem: "Tumor vessels differ from normal vasculature in which ways? Select all that apply.",
    type: "MULTI",
    topic: "Tumor Angiogenesis",
    explanation:
      "Tumor vessels are tortuous, leaky, irregularly branched and lack complete pericyte coverage, producing heterogeneous perfusion and areas of hypoxia. They are not uniformly organized, and their abnormality impairs rather than improves drug delivery.",
    choices: [
      { text: "Tortuous and irregularly branched", isCorrect: true },
      { text: "Leaky with incomplete pericyte coverage", isCorrect: true },
      { text: "Produce heterogeneous perfusion with hypoxic regions", isCorrect: true },
      { text: "Organized into regular arteriole-capillary-venule units" },
      { text: "Deliver chemotherapy more efficiently than normal vessels" },
    ],
  },
  {
    stem: "Why does tumor hypoxia reduce the efficacy of radiotherapy?",
    topic: "Tumor Angiogenesis",
    explanation:
      "Radiation kills largely by generating oxygen-dependent free radicals that fix DNA damage permanently. Without oxygen the damage is more readily repaired, so hypoxic regions are relatively radioresistant — a major reason for fractionation and reoxygenation strategies.",
    choices: [
      { text: "Oxygen is required to fix radiation-induced DNA damage permanently", isCorrect: true },
      { text: "Hypoxic cells divide faster and outpace the radiation" },
      { text: "Hypoxia increases delivery of radioprotective drugs" },
      { text: "Radiation requires carbon dioxide rather than oxygen" },
      { text: "Hypoxic cells have more efficient telomerase" },
    ],
  },
  {
    stem: "True or False: Antiangiogenic therapy can transiently normalize tumor vasculature and improve chemotherapy delivery.",
    type: "TRUE_FALSE",
    topic: "Tumor Angiogenesis",
    explanation:
      "True. Pruning immature vessels can produce a window in which the remaining vasculature is more organized and perfusion improves, which is the rationale for combining antiangiogenic agents with cytotoxic chemotherapy rather than using them alone.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which factor is the principal driver of tumor angiogenesis?",
    topic: "Tumor Angiogenesis",
    explanation:
      "VEGF, induced by HIF-1 alpha under hypoxia, is the dominant proangiogenic factor and the target of bevacizumab and several tyrosine kinase inhibitors. FGF-2 contributes but is secondary in most tumors.",
    choices: [
      { text: "VEGF", isCorrect: true },
      { text: "Angiostatin" },
      { text: "Endostatin" },
      { text: "Thrombospondin-1" },
      { text: "TGF-beta alone" },
    ],
  },
  {
    stem: "Which clinical toxicities are characteristic of anti-VEGF therapy?",
    topic: "Tumor Angiogenesis",
    explanation:
      "Hypertension, proteinuria, impaired wound healing, bleeding and arterial thromboembolism reflect VEGF's normal roles in endothelial and glomerular function. Recognizing them as on-target effects explains why they are predictable across the drug class.",
    choices: [
      { text: "Hypertension, proteinuria, impaired wound healing and bleeding", isCorrect: true },
      { text: "Peripheral neuropathy and ototoxicity" },
      { text: "Pulmonary fibrosis and gynecomastia" },
      { text: "Hemorrhagic cystitis and alopecia" },
      { text: "Cardiomyopathy and hand-foot syndrome only" },
    ],
  },

  /* ══════════════ CHEMICAL CARCINOGENESIS ══════════════ */
  {
    stem: "Chemical carcinogenesis classically proceeds through initiation and promotion. Which statement about these stages is correct?",
    topic: "Chemical Carcinogenesis",
    explanation:
      "Initiation causes permanent irreversible DNA damage, while promotion drives clonal expansion and is reversible if the promoter is withdrawn. Promoters alone are not carcinogenic and the order matters — promotion before initiation does not produce tumors.",
    choices: [
      { text: "Initiation is irreversible DNA damage; promotion is reversible clonal expansion", isCorrect: true },
      { text: "Initiation is reversible; promotion is irreversible" },
      { text: "Promoters alone are sufficient to cause cancer" },
      { text: "The order of exposure does not matter" },
      { text: "Both stages require direct-acting carcinogens" },
    ],
  },
  {
    stem: "Which carcinogens are correctly matched to the malignancy they cause? Select all that apply.",
    type: "MULTI",
    topic: "Chemical Carcinogenesis",
    explanation:
      "Aflatoxin B1 causes hepatocellular carcinoma via a TP53 codon 249 mutation, vinyl chloride causes hepatic angiosarcoma, and aromatic amines from the dye industry cause bladder urothelial carcinoma. Asbestos causes mesothelioma and bronchogenic carcinoma rather than gastric cancer, and arsenic is linked to skin and lung cancer rather than osteosarcoma.",
    choices: [
      { text: "Aflatoxin B1 — hepatocellular carcinoma", isCorrect: true },
      { text: "Vinyl chloride — hepatic angiosarcoma", isCorrect: true },
      { text: "Beta-naphthylamine — bladder urothelial carcinoma", isCorrect: true },
      { text: "Asbestos — gastric adenocarcinoma" },
      { text: "Arsenic — osteosarcoma" },
    ],
  },
  {
    stem: "Aflatoxin B1 produces a characteristic mutation. Where, and why is this forensically useful?",
    topic: "Chemical Carcinogenesis",
    explanation:
      "It causes a G to T transversion at codon 249 of TP53, a signature mutation that identifies aflatoxin as the likely cause in a hepatocellular carcinoma. Signature mutations let epidemiologists attribute tumors to specific exposures.",
    choices: [
      { text: "TP53 codon 249 G-to-T transversion, a signature of aflatoxin exposure", isCorrect: true },
      { text: "KRAS codon 12 mutation, a signature of tobacco exposure" },
      { text: "RB deletion, a signature of radiation exposure" },
      { text: "BRCA1 frameshift, a signature of chemical exposure" },
      { text: "APC truncation, a signature of dietary fat" },
    ],
  },
  {
    stem: "Why do many chemical carcinogens require metabolic activation, and by which enzyme system?",
    topic: "Chemical Carcinogenesis",
    explanation:
      "Procarcinogens such as benzo[a]pyrene are converted by cytochrome P450 monooxygenases into highly reactive electrophilic epoxides that bind DNA. Genetic variation in P450 activity therefore contributes to differing individual susceptibility.",
    choices: [
      { text: "They are procarcinogens converted to reactive electrophiles by cytochrome P450", isCorrect: true },
      { text: "They are direct-acting and need no activation" },
      { text: "They require conjugation by glutathione to become active" },
      { text: "They are activated by lysosomal hydrolases" },
      { text: "They require phosphorylation by protein kinases" },
    ],
  },
  {
    stem: "True or False: Alkylating agents used in chemotherapy carry a risk of causing secondary malignancy.",
    type: "TRUE_FALSE",
    topic: "Chemical Carcinogenesis",
    explanation:
      "True. Alkylating agents damage DNA directly and are associated with therapy-related myelodysplastic syndrome and acute myeloid leukemia years later. This risk is weighed against benefit, especially in young patients with curable disease.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "A worker in a shipyard for 30 years develops a pleural tumor. Which additional exposure multiplies his risk of bronchogenic carcinoma most dramatically?",
    topic: "Chemical Carcinogenesis",
    explanation:
      "Asbestos and tobacco interact multiplicatively for bronchogenic carcinoma, raising risk far beyond the sum of either alone. Notably, this synergy does not apply to mesothelioma, where smoking adds little — a distinction worth holding.",
    choices: [
      { text: "Cigarette smoking, which interacts multiplicatively", isCorrect: true },
      { text: "Alcohol consumption, which interacts multiplicatively" },
      { text: "Dietary fat intake" },
      { text: "Ultraviolet light exposure" },
      { text: "Chronic aspirin use" },
    ],
  },
  {
    stem: "Which occupational exposure is most associated with angiosarcoma of the liver?",
    topic: "Chemical Carcinogenesis",
    explanation:
      "Vinyl chloride, used in PVC manufacture, is the classic cause along with arsenic and thorotrast. Hepatic angiosarcoma is rare enough that its appearance should prompt a detailed occupational history.",
    choices: [
      { text: "Vinyl chloride", isCorrect: true },
      { text: "Benzene" },
      { text: "Cadmium" },
      { text: "Nickel" },
      { text: "Chromium" },
    ],
  },
  {
    stem: "Benzene exposure is most strongly associated with which malignancy?",
    topic: "Chemical Carcinogenesis",
    explanation:
      "Benzene causes marrow toxicity and is linked to acute myeloid leukemia and aplastic anemia. It does not have the epithelial tumor associations of the aromatic amines or asbestos.",
    choices: [
      { text: "Acute myeloid leukemia", isCorrect: true },
      { text: "Bladder urothelial carcinoma" },
      { text: "Mesothelioma" },
      { text: "Hepatocellular carcinoma" },
      { text: "Osteosarcoma" },
    ],
  },

  /* ══════════════ RADIATION & PHYSICAL CARCINOGENS ══════════════ */
  {
    stem: "Ionizing radiation causes cancer principally through which molecular lesion?",
    topic: "Radiation & Physical Carcinogens",
    explanation:
      "Double-strand DNA breaks, generated directly and through hydroxyl radicals from water radiolysis, are the critical lesion because they are error-prone to repair. Misrepair produces translocations and deletions that can activate oncogenes or delete suppressors.",
    choices: [
      { text: "Double-strand DNA breaks with error-prone repair", isCorrect: true },
      { text: "Pyrimidine dimer formation" },
      { text: "Direct protein denaturation only" },
      { text: "Membrane lipid peroxidation alone" },
      { text: "Mitochondrial swelling" },
    ],
  },
  {
    stem: "Ultraviolet B radiation causes which characteristic DNA lesion, and which repair pathway removes it?",
    topic: "Radiation & Physical Carcinogens",
    explanation:
      "UVB creates pyrimidine dimers repaired by nucleotide excision repair. Xeroderma pigmentosum results from defective NER, producing extreme photosensitivity and early skin cancers — the clinical proof of the mechanism.",
    choices: [
      { text: "Pyrimidine dimers — nucleotide excision repair", isCorrect: true },
      { text: "Double-strand breaks — homologous recombination" },
      { text: "Base mismatches — mismatch repair" },
      { text: "Alkylated bases — direct reversal by MGMT" },
      { text: "Interstrand crosslinks — Fanconi pathway" },
    ],
  },
  {
    stem: "Which malignancies are associated with prior therapeutic or accidental radiation exposure? Select all that apply.",
    type: "MULTI",
    topic: "Radiation & Physical Carcinogens",
    explanation:
      "Thyroid papillary carcinoma, leukemia, sarcoma in the radiation field and breast cancer after mantle radiation for Hodgkin lymphoma are all recognized. Thyroid tissue in children is especially radiosensitive, which is why iodine prophylaxis is used after nuclear accidents.",
    choices: [
      { text: "Papillary thyroid carcinoma", isCorrect: true },
      { text: "Acute and chronic myeloid leukemia", isCorrect: true },
      { text: "Breast carcinoma after mantle field irradiation", isCorrect: true },
      { text: "Prion disease" },
      { text: "Hemophilia A" },
    ],
  },
  {
    stem: "Why is radon exposure a public health concern in some homes?",
    topic: "Radiation & Physical Carcinogens",
    explanation:
      "Radon decay products emit alpha particles that are inhaled and irradiate bronchial epithelium, making radon the second leading cause of lung cancer after smoking in several countries. Basement accumulation in certain geologies drives testing recommendations.",
    choices: [
      { text: "Inhaled alpha-emitting decay products irradiate bronchial epithelium", isCorrect: true },
      { text: "It is a direct-acting chemical carcinogen absorbed through skin" },
      { text: "It causes cancer through pyrimidine dimer formation" },
      { text: "It acts as a tumor promoter without initiating" },
      { text: "It causes only benign pulmonary nodules" },
    ],
  },
  {
    stem: "True or False: Alpha particles have low tissue penetration but high linear energy transfer, making them dangerous when internalized.",
    type: "TRUE_FALSE",
    topic: "Radiation & Physical Carcinogens",
    explanation:
      "True. Alpha particles are stopped by skin or paper, so external exposure is relatively harmless, but once inhaled or ingested they deposit dense ionization over a short track and cause severe local DNA damage. Route of exposure dominates the risk.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Chronic irritation from an indwelling foreign body or chronic osteomyelitis sinus tract predisposes to which malignancy?",
    topic: "Radiation & Physical Carcinogens",
    explanation:
      "Squamous cell carcinoma arising in a chronic wound or sinus is termed a Marjolin ulcer. The mechanism is sustained proliferation with repeated DNA replication errors over years, and any long-standing sinus with changing appearance warrants biopsy.",
    choices: [
      { text: "Squamous cell carcinoma (Marjolin ulcer)", isCorrect: true },
      { text: "Basal cell carcinoma" },
      { text: "Osteosarcoma" },
      { text: "Ewing sarcoma" },
      { text: "Lymphoma" },
    ],
  },

  /* ══════════════ ONCOGENIC VIRUSES & MICROBES ══════════════ */
  {
    stem: "High-risk HPV types 16 and 18 transform cells through which two viral proteins, and what do they inactivate?",
    topic: "Oncogenic Viruses & Microbes",
    explanation:
      "E6 promotes degradation of p53 and E7 binds and inactivates RB, disabling both major tumor suppressor pathways simultaneously. This dual hit explains the efficiency of HPV as a carcinogen and underpins cervical screening and vaccination programs.",
    choices: [
      { text: "E6 degrades p53; E7 inactivates RB", isCorrect: true },
      { text: "E6 inactivates RB; E7 degrades p53" },
      { text: "E1 and E2 activate RAS directly" },
      { text: "L1 and L2 integrate into the MYC locus" },
      { text: "E5 and E6 both amplify HER2" },
    ],
  },
  {
    stem: "Match each virus to its associated malignancy. Which pairings are correct? Select all that apply.",
    type: "MULTI",
    topic: "Oncogenic Viruses & Microbes",
    explanation:
      "EBV causes Burkitt lymphoma and nasopharyngeal carcinoma, HBV and HCV cause hepatocellular carcinoma, HTLV-1 causes adult T cell leukemia/lymphoma, and HHV-8 causes Kaposi sarcoma. HPV is not associated with gastric adenocarcinoma, and CMV is not established as oncogenic.",
    choices: [
      { text: "Epstein-Barr virus — nasopharyngeal carcinoma", isCorrect: true },
      { text: "HTLV-1 — adult T cell leukemia/lymphoma", isCorrect: true },
      { text: "HHV-8 — Kaposi sarcoma", isCorrect: true },
      { text: "HPV — gastric adenocarcinoma" },
      { text: "Cytomegalovirus — colorectal carcinoma" },
    ],
  },
  {
    stem: "Hepatitis B causes hepatocellular carcinoma by which combination of mechanisms?",
    topic: "Oncogenic Viruses & Microbes",
    explanation:
      "HBV acts through chronic inflammation with regeneration, integration of viral DNA causing insertional mutagenesis, and the HBx protein which disrupts p53 function. Because integration matters, HBV can cause carcinoma without established cirrhosis — unlike HCV.",
    choices: [
      { text: "Chronic inflammation, viral DNA integration, and HBx interference with p53", isCorrect: true },
      { text: "Direct cytolysis of hepatocytes only" },
      { text: "Production of a viral tyrosine kinase" },
      { text: "Degradation of RB by a viral E7 homolog" },
      { text: "Telomerase inhibition in hepatocytes" },
    ],
  },
  {
    stem: "Helicobacter pylori is associated with which two gastric malignancies?",
    topic: "Oncogenic Viruses & Microbes",
    explanation:
      "It causes gastric adenocarcinoma through chronic gastritis with intestinal metaplasia, and MALT lymphoma through sustained antigenic stimulation of B cells. Early MALT lymphoma can regress with eradication therapy alone — a remarkable example of treating a cancer with antibiotics.",
    choices: [
      { text: "Gastric adenocarcinoma and MALT lymphoma", isCorrect: true },
      { text: "Gastric adenocarcinoma and gastrointestinal stromal tumor" },
      { text: "MALT lymphoma and carcinoid tumor" },
      { text: "Squamous cell carcinoma and leiomyosarcoma" },
      { text: "Hepatocellular carcinoma and cholangiocarcinoma" },
    ],
  },
  {
    stem: "True or False: Schistosoma haematobium infection predisposes to squamous cell carcinoma of the bladder.",
    type: "TRUE_FALSE",
    topic: "Oncogenic Viruses & Microbes",
    explanation:
      "True. Chronic inflammation from egg deposition drives squamous metaplasia and then carcinoma, which is why bladder cancer in endemic regions is more often squamous than urothelial. Geography changes the expected histology.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Epstein-Barr virus contributes to Burkitt lymphoma alongside which genetic event?",
    topic: "Oncogenic Viruses & Microbes",
    explanation:
      "EBV drives B cell proliferation, and the t(8;14) translocation placing MYC under the immunoglobulin promoter is the transforming event. Neither alone is sufficient in most cases, illustrating multistep carcinogenesis.",
    choices: [
      { text: "t(8;14) translocation deregulating MYC", isCorrect: true },
      { text: "t(9;22) producing BCR-ABL" },
      { text: "t(14;18) overexpressing BCL-2" },
      { text: "t(15;17) producing PML-RARA" },
      { text: "Trisomy 12" },
    ],
  },
  {
    stem: "Which malignancy is most characteristically associated with HHV-8 in immunosuppressed patients?",
    topic: "Oncogenic Viruses & Microbes",
    explanation:
      "Kaposi sarcoma is a vascular tumor driven by HHV-8, seen in advanced HIV infection and transplant recipients. Its regression on restoring immune function demonstrates the role of immune surveillance in controlling virally driven tumors.",
    choices: [
      { text: "Kaposi sarcoma", isCorrect: true },
      { text: "Hairy cell leukemia" },
      { text: "Osteosarcoma" },
      { text: "Renal cell carcinoma" },
      { text: "Medullary thyroid carcinoma" },
    ],
  },
  {
    stem: "Why does HPV vaccination target types 16 and 18 in particular?",
    topic: "Oncogenic Viruses & Microbes",
    explanation:
      "These two high-risk types account for roughly 70% of cervical cancers worldwide, so covering them yields the largest reduction in disease. Newer nonavalent vaccines extend protection to additional high-risk types and the wart-causing types 6 and 11.",
    choices: [
      { text: "They cause approximately 70% of cervical cancers", isCorrect: true },
      { text: "They are the only types that infect humans" },
      { text: "They cause genital warts but not cancer" },
      { text: "They are the only types detectable by screening" },
      { text: "They exclusively infect immunosuppressed patients" },
    ],
  },

  /* ══════════════ INHERITED CANCER SYNDROMES ══════════════ */
  {
    stem: "A 24-year-old man has hundreds of colonic adenomatous polyps. Which syndrome, gene and inheritance pattern?",
    topic: "Inherited Cancer Syndromes",
    explanation:
      "Familial adenomatous polyposis results from autosomal dominant APC mutation on chromosome 5q, and colorectal cancer is essentially inevitable without prophylactic colectomy. The certainty of progression is what drives the surgical recommendation.",
    choices: [
      { text: "FAP — APC on 5q — autosomal dominant", isCorrect: true },
      { text: "Lynch syndrome — MLH1 — autosomal dominant" },
      { text: "Peutz-Jeghers — STK11 — autosomal recessive" },
      { text: "Juvenile polyposis — SMAD4 — X-linked" },
      { text: "MYH-associated polyposis — APC — autosomal dominant" },
    ],
  },
  {
    stem: "Lynch syndrome differs from FAP in which important respect?",
    topic: "Inherited Cancer Syndromes",
    explanation:
      "Lynch syndrome involves mismatch repair defects producing few polyps that progress rapidly, often right-sided, with extracolonic risks including endometrial cancer. FAP produces hundreds of polyps progressing conventionally, so surveillance strategies differ fundamentally.",
    choices: [
      { text: "Few rapidly progressing right-sided lesions with extracolonic risk, especially endometrial", isCorrect: true },
      { text: "Hundreds of polyps requiring prophylactic colectomy" },
      { text: "Exclusively left-sided disease with no extracolonic tumors" },
      { text: "Autosomal recessive inheritance" },
      { text: "No increased cancer risk over the general population" },
    ],
  },
  {
    stem: "Which tumors occur in MEN type 2A? Select all that apply.",
    type: "MULTI",
    topic: "Inherited Cancer Syndromes",
    explanation:
      "MEN2A comprises medullary thyroid carcinoma, pheochromocytoma and parathyroid hyperplasia, driven by RET mutation. Pituitary adenoma and pancreatic islet tumors belong to MEN1, and mucosal neuromas to MEN2B.",
    choices: [
      { text: "Medullary thyroid carcinoma", isCorrect: true },
      { text: "Pheochromocytoma", isCorrect: true },
      { text: "Parathyroid hyperplasia", isCorrect: true },
      { text: "Pituitary adenoma" },
      { text: "Mucosal neuromas with marfanoid habitus" },
    ],
  },
  {
    stem: "A patient with a RET germline mutation is advised to undergo prophylactic thyroidectomy in childhood. What is the rationale?",
    topic: "Inherited Cancer Syndromes",
    explanation:
      "Medullary thyroid carcinoma develops with very high penetrance and can metastasize early, so removing the gland before malignancy arises is preventive rather than therapeutic. Timing is guided by the specific codon mutated, since risk varies by genotype.",
    choices: [
      { text: "Near-certain development of medullary thyroid carcinoma with early metastatic potential", isCorrect: true },
      { text: "The thyroid becomes non-functional in these patients" },
      { text: "It prevents pheochromocytoma from developing" },
      { text: "It is required before any genetic testing" },
      { text: "Medullary carcinoma is benign but causes compression" },
    ],
  },
  {
    stem: "Von Hippel-Lindau syndrome predisposes to which characteristic combination?",
    topic: "Inherited Cancer Syndromes",
    explanation:
      "VHL causes cerebellar and retinal hemangioblastomas, bilateral clear cell renal carcinoma, and pheochromocytoma, all reflecting unopposed HIF-driven angiogenesis. Bilaterality and multiplicity are the clue that a germline syndrome is present.",
    choices: [
      { text: "Hemangioblastoma, bilateral clear cell renal carcinoma and pheochromocytoma", isCorrect: true },
      { text: "Medullary thyroid carcinoma and parathyroid hyperplasia" },
      { text: "Colonic polyposis and desmoid tumors" },
      { text: "Optic glioma and cutaneous neurofibromas" },
      { text: "Cardiac rhabdomyoma and renal angiomyolipoma" },
    ],
  },
  {
    stem: "True or False: Inherited cancer syndromes typically present at younger age and with bilateral or multifocal tumors compared with sporadic cases.",
    type: "TRUE_FALSE",
    topic: "Inherited Cancer Syndromes",
    explanation:
      "True. A germline first hit means every cell is one step closer to transformation, so tumors appear earlier and in multiple sites. Young age, bilaterality and a positive family history are the practical triggers for genetic referral.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Neurofibromatosis type 1 results from mutation in NF1, whose product neurofibromin does what?",
    topic: "Inherited Cancer Syndromes",
    explanation:
      "Neurofibromin is a GTPase-activating protein that inactivates RAS, so its loss leaves RAS signaling persistently on. This places NF1 among the tumor suppressors whose loss mimics an activating oncogene mutation.",
    choices: [
      { text: "Acts as a GTPase-activating protein inactivating RAS", isCorrect: true },
      { text: "Degrades beta-catenin in the destruction complex" },
      { text: "Targets HIF-1 alpha for proteasomal degradation" },
      { text: "Repairs double-strand breaks by homologous recombination" },
      { text: "Inhibits CDK4/6 to maintain G1 arrest" },
    ],
  },
  {
    stem: "A woman with a germline BRCA1 mutation asks about her risk profile. Which cancers is she at substantially increased risk of?",
    topic: "Inherited Cancer Syndromes",
    explanation:
      "BRCA1 carries high lifetime risk of breast and ovarian carcinoma, with BRCA1 tumors often triple-negative and higher grade. BRCA2 adds male breast, pancreatic and prostate cancer risk, so the two genes are counseled differently.",
    choices: [
      { text: "Breast and ovarian carcinoma, with breast tumors often triple-negative", isCorrect: true },
      { text: "Medullary thyroid carcinoma and pheochromocytoma" },
      { text: "Colorectal and endometrial carcinoma exclusively" },
      { text: "Renal cell carcinoma and hemangioblastoma" },
      { text: "Osteosarcoma and retinoblastoma only" },
    ],
  },
];
