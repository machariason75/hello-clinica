/**
 * PATHOLOGY — PRACTICE SET 6
 * Neoplasia II — Clinical Oncology
 *
 * Difficulty: Advanced. Where tumor biology meets the patient in front of you:
 * markers, screening, staging decisions, treatment principles, and the
 * emergencies that kill people faster than their cancer would.
 *
 * 94 questions across 12 topics:
 *   Tumor Markers · Paraneoplastic Syndromes · Cancer Epidemiology & Risk ·
 *   Screening Programs · Staging & Prognosis · Principles of Chemotherapy ·
 *   Targeted & Immunotherapy · Radiation Therapy · Oncologic Emergencies ·
 *   Cachexia & Supportive Care · Metastatic Patterns & Unknown Primary ·
 *   Histologic & Molecular Diagnostics
 *
 * Item mix: 70 single-answer vignettes, 12 select-all-that-apply, 12 true/false.
 * US conventional units and US screening guidance (USPSTF, ACS) throughout.
 */

import type { Q } from "../_lib/qbank";

export const PATHOLOGY_SET_6: Q[] = [
  /* ══════════════ TUMOR MARKERS ══════════════ */
  {
    stem: "A 62-year-old man has a PSA of 6.8 ng/mL on a screening test. Which statement best describes the appropriate interpretation?",
    topic: "Tumor Markers",
    explanation:
      "PSA is prostate-specific but not cancer-specific: benign hyperplasia, prostatitis, recent instrumentation and even ejaculation raise it. An elevated value indicates the need for further evaluation, not a diagnosis, which is why tissue diagnosis remains essential.",
    choices: [
      { text: "It indicates further evaluation is needed, not that cancer is present", isCorrect: true },
      { text: "It is diagnostic of prostate adenocarcinoma" },
      { text: "It excludes prostate cancer if below 10 ng/mL" },
      { text: "It is specific to malignant prostatic epithelium only" },
      { text: "It should prompt immediate radical prostatectomy" },
    ],
  },
  {
    stem: "Which tumor marker is most useful for MONITORING rather than for diagnosis in colorectal cancer?",
    topic: "Tumor Markers",
    explanation:
      "CEA lacks the sensitivity and specificity for diagnosis, but a level that falls after resection and later rises is a reliable signal of recurrence. This is the general principle of tumor markers — their value lies in tracking a known cancer rather than finding an unknown one.",
    choices: [
      { text: "Carcinoembryonic antigen (CEA)", isCorrect: true },
      { text: "CA 19-9" },
      { text: "Alpha-fetoprotein" },
      { text: "Beta-hCG" },
      { text: "CA 125" },
    ],
  },
  {
    stem: "Match each tumor marker to its associated malignancy. Which pairings are correct? Select all that apply.",
    type: "MULTI",
    topic: "Tumor Markers",
    explanation:
      "AFP is raised in hepatocellular carcinoma and non-seminomatous germ cell tumors, CA 19-9 in pancreatic adenocarcinoma, and calcitonin in medullary thyroid carcinoma. CA 125 is associated with ovarian rather than gastric cancer, and beta-hCG with gestational trophoblastic disease and germ cell tumors rather than renal cell carcinoma.",
    choices: [
      { text: "Alpha-fetoprotein — hepatocellular carcinoma", isCorrect: true },
      { text: "CA 19-9 — pancreatic adenocarcinoma", isCorrect: true },
      { text: "Calcitonin — medullary thyroid carcinoma", isCorrect: true },
      { text: "CA 125 — gastric adenocarcinoma" },
      { text: "Beta-hCG — renal cell carcinoma" },
    ],
  },
  {
    stem: "A 24-year-old man has a testicular mass. AFP is 480 ng/mL and beta-hCG is mildly elevated. Which conclusion follows?",
    topic: "Tumor Markers",
    explanation:
      "Pure seminoma does not produce AFP, so an elevated AFP indicates a non-seminomatous component regardless of what the histology report says. This changes management substantially, since treatment differs between the two — a marker overriding a histologic impression.",
    choices: [
      { text: "A non-seminomatous component is present, since pure seminoma never raises AFP", isCorrect: true },
      { text: "This confirms pure seminoma" },
      { text: "AFP elevation excludes germ cell tumor entirely" },
      { text: "Beta-hCG elevation excludes seminoma" },
      { text: "The markers indicate a benign teratoma" },
    ],
  },
  {
    stem: "True or False: Tumor markers are generally unsuitable for population screening because of low positive predictive value in low-prevalence groups.",
    type: "TRUE_FALSE",
    topic: "Tumor Markers",
    explanation:
      "True. Even a highly specific test generates mostly false positives when disease prevalence is low, leading to unnecessary investigation and anxiety. CA 125 for general ovarian cancer screening is the classic demonstration of this failure.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "A woman treated for ovarian cancer has CA 125 rising over three months while imaging remains normal. What does this most likely represent?",
    topic: "Tumor Markers",
    explanation:
      "A rising marker often precedes radiologic evidence of recurrence by months. It signals biochemical relapse and prompts closer surveillance, though whether to start treatment before symptoms appear remains debated.",
    choices: [
      { text: "Biochemical recurrence preceding radiologic detection", isCorrect: true },
      { text: "Certain laboratory error requiring no action" },
      { text: "Successful response to prior therapy" },
      { text: "Development of a second unrelated primary" },
      { text: "Definitive proof of chemotherapy resistance" },
    ],
  },
  {
    stem: "Which marker is used to monitor treatment response in gestational trophoblastic disease?",
    topic: "Tumor Markers",
    explanation:
      "Beta-hCG tracks disease burden closely in trophoblastic disease, and serial measurement guides both treatment duration and detection of relapse. It is one of the few markers accurate enough to drive treatment decisions on its own.",
    choices: [
      { text: "Beta-hCG", isCorrect: true },
      { text: "CA 125" },
      { text: "Alpha-fetoprotein" },
      { text: "CEA" },
      { text: "Lactate dehydrogenase alone" },
    ],
  },
  {
    stem: "Elevated lactate dehydrogenase in lymphoma reflects what, and why does it matter?",
    topic: "Tumor Markers",
    explanation:
      "LDH reflects tumor bulk and cell turnover, and it is incorporated into prognostic indices such as the IPI. It is entirely non-specific — raised in hemolysis, infarction and liver disease — so its value is prognostic rather than diagnostic.",
    choices: [
      { text: "Tumor burden and cell turnover, used prognostically", isCorrect: true },
      { text: "Specific evidence of lymphomatous transformation" },
      { text: "Response to rituximab specifically" },
      { text: "Bone marrow infiltration exclusively" },
      { text: "Presence of a translocation involving MYC" },
    ],
  },

  /* ══════════════ PARANEOPLASTIC SYNDROMES ══════════════ */
  {
    stem: "A 68-year-old smoker has serum sodium of 118 mEq/L, low serum osmolality, and inappropriately concentrated urine. Which tumor and mechanism are most likely?",
    topic: "Paraneoplastic Syndromes",
    explanation:
      "Small cell lung carcinoma commonly secretes ADH ectopically, producing SIADH with euvolemic hyponatremia. Its neuroendocrine origin explains why this histology causes so many paraneoplastic syndromes.",
    choices: [
      { text: "Small cell lung carcinoma secreting ADH", isCorrect: true },
      { text: "Squamous cell lung carcinoma secreting PTHrP" },
      { text: "Renal cell carcinoma secreting erythropoietin" },
      { text: "Hepatocellular carcinoma secreting insulin-like factor" },
      { text: "Thymoma producing acetylcholine receptor antibodies" },
    ],
  },
  {
    stem: "A patient with lung cancer has calcium of 13.2 mg/dL, low phosphorus and suppressed PTH. Which mechanism is responsible?",
    topic: "Paraneoplastic Syndromes",
    explanation:
      "PTH-related peptide from squamous cell carcinoma mimics PTH at its receptor, raising calcium while feedback suppresses true PTH. Measuring PTH is what distinguishes this from primary hyperparathyroidism, where PTH would be inappropriately high.",
    choices: [
      { text: "PTH-related peptide from squamous cell carcinoma", isCorrect: true },
      { text: "Autonomous PTH secretion from a parathyroid adenoma" },
      { text: "Extensive osteolytic metastases alone" },
      { text: "Ectopic ADH secretion" },
      { text: "Vitamin D toxicity from supplementation" },
    ],
  },
  {
    stem: "Which paraneoplastic syndromes are correctly paired with their tumor? Select all that apply.",
    type: "MULTI",
    topic: "Paraneoplastic Syndromes",
    explanation:
      "Lambert-Eaton myasthenic syndrome and ectopic ACTH both associate with small cell lung carcinoma, and polycythemia with renal cell carcinoma secreting erythropoietin. Acanthosis nigricans associates with gastric adenocarcinoma rather than melanoma, and carcinoid syndrome with neuroendocrine tumors rather than prostate cancer.",
    choices: [
      { text: "Lambert-Eaton myasthenic syndrome — small cell lung carcinoma", isCorrect: true },
      { text: "Ectopic ACTH with Cushing syndrome — small cell lung carcinoma", isCorrect: true },
      { text: "Polycythemia — renal cell carcinoma", isCorrect: true },
      { text: "Acanthosis nigricans — melanoma" },
      { text: "Carcinoid syndrome — prostate adenocarcinoma" },
    ],
  },
  {
    stem: "Lambert-Eaton myasthenic syndrome differs from myasthenia gravis in which way?",
    topic: "Paraneoplastic Syndromes",
    explanation:
      "In Lambert-Eaton, antibodies target presynaptic voltage-gated calcium channels, and strength IMPROVES briefly with repeated use as calcium accumulates. Myasthenia gravis targets postsynaptic acetylcholine receptors and worsens with use — the opposite pattern on examination.",
    choices: [
      { text: "Strength improves with repeated use; antibodies target presynaptic calcium channels", isCorrect: true },
      { text: "Strength worsens with use; antibodies target postsynaptic receptors" },
      { text: "It responds fully to acetylcholinesterase inhibitors" },
      { text: "It never has an underlying malignancy" },
      { text: "It affects only ocular muscles" },
    ],
  },
  {
    stem: "True or False: A paraneoplastic syndrome may be the first manifestation of an occult malignancy, appearing before the tumor is detectable.",
    type: "TRUE_FALSE",
    topic: "Paraneoplastic Syndromes",
    explanation:
      "True. Paraneoplastic neurologic syndromes in particular may precede diagnosis by months, and their recognition should prompt a search for an underlying tumor rather than treatment of the syndrome alone.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "A patient with small cell lung cancer has hypokalemia, hypertension, hyperglycemia and metabolic alkalosis, but lacks the typical cushingoid habitus. Why?",
    topic: "Paraneoplastic Syndromes",
    explanation:
      "Ectopic ACTH produces a rapid, severe cortisol excess that causes profound metabolic derangement before the slow physical changes of Cushing syndrome can develop. The absence of the classic body habitus is therefore expected, not reassuring.",
    choices: [
      { text: "Ectopic ACTH causes rapid metabolic effects before physical changes develop", isCorrect: true },
      { text: "Ectopic ACTH does not raise cortisol levels" },
      { text: "The tumor secretes aldosterone rather than ACTH" },
      { text: "Cortisol receptors are absent in these patients" },
      { text: "The findings indicate primary hyperaldosteronism instead" },
    ],
  },
  {
    stem: "Trousseau syndrome in a patient with weight loss and epigastric pain should prompt which action?",
    topic: "Paraneoplastic Syndromes",
    explanation:
      "Migratory superficial thrombophlebitis is a paraneoplastic hypercoagulable state most associated with pancreatic and other mucin-producing adenocarcinomas, so evaluation for occult malignancy is warranted. Treating the thrombosis alone misses the point.",
    choices: [
      { text: "Evaluation for occult visceral malignancy, particularly pancreatic", isCorrect: true },
      { text: "Antibiotics for presumed infective phlebitis" },
      { text: "Reassurance, as it is a benign self-limited condition" },
      { text: "Immediate testing for factor V Leiden only" },
      { text: "Compression stockings alone with no further workup" },
    ],
  },
  {
    stem: "Which dermatologic sign is most associated with underlying gastric adenocarcinoma?",
    topic: "Paraneoplastic Syndromes",
    explanation:
      "Acanthosis nigricans — velvety hyperpigmented plaques in flexural areas — can be paraneoplastic, classically with gastric adenocarcinoma, particularly when it appears abruptly in a non-obese adult. In younger obese patients it usually reflects insulin resistance instead.",
    choices: [
      { text: "Acanthosis nigricans", isCorrect: true },
      { text: "Erythema nodosum" },
      { text: "Pyoderma gangrenosum" },
      { text: "Dermatitis herpetiformis" },
      { text: "Necrolytic migratory erythema" },
    ],
  },
  {
    stem: "Necrolytic migratory erythema with diabetes and weight loss suggests which tumor?",
    topic: "Paraneoplastic Syndromes",
    explanation:
      "Glucagonoma produces this characteristic rash alongside hyperglycemia, weight loss and often a normocytic anemia. The rash frequently precedes diagnosis, so recognizing it shortens a long diagnostic delay.",
    choices: [
      { text: "Glucagonoma", isCorrect: true },
      { text: "Insulinoma" },
      { text: "Gastrinoma" },
      { text: "VIPoma" },
      { text: "Somatostatinoma" },
    ],
  },

  /* ══════════════ CANCER EPIDEMIOLOGY & RISK ══════════════ */
  {
    stem: "In the United States, which cancer causes the most deaths in both men and women?",
    topic: "Cancer Epidemiology & Risk",
    explanation:
      "Lung cancer causes the most cancer deaths in both sexes despite prostate and breast being more commonly diagnosed. The gap between incidence and mortality reflects lung cancer's late presentation and poor survival.",
    choices: [
      { text: "Lung cancer", isCorrect: true },
      { text: "Prostate cancer in men, breast cancer in women" },
      { text: "Colorectal cancer" },
      { text: "Pancreatic cancer" },
      { text: "Melanoma" },
    ],
  },
  {
    stem: "Which is the most commonly DIAGNOSED cancer in US women, and how does that differ from the leading cause of cancer death?",
    topic: "Cancer Epidemiology & Risk",
    explanation:
      "Breast cancer is diagnosed most often, but lung cancer kills more women, because breast cancer is frequently detected early and treated successfully. Incidence and mortality rankings answer different questions and should not be conflated.",
    choices: [
      { text: "Breast is most diagnosed; lung causes most deaths", isCorrect: true },
      { text: "Lung is most diagnosed; breast causes most deaths" },
      { text: "Both rankings are led by colorectal cancer" },
      { text: "Both rankings are led by breast cancer" },
      { text: "Cervical cancer leads both rankings" },
    ],
  },
  {
    stem: "Which modifiable factors account for the largest share of preventable cancer in the US? Select all that apply.",
    type: "MULTI",
    topic: "Cancer Epidemiology & Risk",
    explanation:
      "Tobacco use, excess body weight, alcohol, physical inactivity and ultraviolet exposure together account for a substantial fraction of preventable cancers, with tobacco the single largest contributor. Blood type is not modifiable and is not a meaningful risk factor.",
    choices: [
      { text: "Tobacco use", isCorrect: true },
      { text: "Excess body weight", isCorrect: true },
      { text: "Alcohol consumption", isCorrect: true },
      { text: "ABO blood group" },
      { text: "Height at adulthood" },
    ],
  },
  {
    stem: "True or False: Cancer incidence rises steeply with age largely because mutations accumulate over a lifetime.",
    type: "TRUE_FALSE",
    topic: "Cancer Epidemiology & Risk",
    explanation:
      "True. Multistep carcinogenesis requires several driver mutations, and the probability of accumulating them rises with time, compounded by declining immune surveillance and DNA repair. Age is the strongest single risk factor for most cancers.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which cancer has shown the most dramatic decline in US incidence and mortality due to a screening program?",
    topic: "Cancer Epidemiology & Risk",
    explanation:
      "Cervical cancer fell dramatically following widespread Pap screening, because it detects a treatable precursor lesion rather than early cancer. That is what makes cervical screening unusually effective compared with screening that finds established disease.",
    choices: [
      { text: "Cervical cancer, following Pap screening", isCorrect: true },
      { text: "Pancreatic cancer, following CA 19-9 screening" },
      { text: "Ovarian cancer, following CA 125 screening" },
      { text: "Brain glioma, following MRI screening" },
      { text: "Renal cell carcinoma, following urinalysis screening" },
    ],
  },
  {
    stem: "Lead-time bias in cancer screening refers to what?",
    topic: "Cancer Epidemiology & Risk",
    explanation:
      "Earlier detection makes survival time from diagnosis appear longer even when death occurs at the same moment it would have anyway. This is why screening trials must measure disease-specific mortality rather than survival from diagnosis.",
    choices: [
      { text: "Survival appears longer only because diagnosis was made earlier", isCorrect: true },
      { text: "Screening preferentially detects fast-growing tumors" },
      { text: "Healthier people are more likely to attend screening" },
      { text: "Screening tests become less accurate over time" },
      { text: "Tumors regress spontaneously after detection" },
    ],
  },
  {
    stem: "Length-time bias describes which distortion?",
    topic: "Cancer Epidemiology & Risk",
    explanation:
      "Screening preferentially detects slow-growing tumors, which spend longer in a detectable preclinical phase, making screen-detected cancers look more favorable than they are. Its extreme form is overdiagnosis — finding tumors that would never have caused harm.",
    choices: [
      { text: "Screening preferentially finds slow-growing, better-prognosis tumors", isCorrect: true },
      { text: "Survival is measured from an earlier point in the disease" },
      { text: "Volunteers for screening are healthier than the general population" },
      { text: "Recall bias affects reported symptom onset" },
      { text: "Tumor grade changes after biopsy" },
    ],
  },
  {
    stem: "Which infection accounts for the largest global burden of infection-attributable cancer?",
    topic: "Cancer Epidemiology & Risk",
    explanation:
      "Helicobacter pylori causes the largest number of infection-attributable cancers worldwide through gastric adenocarcinoma, followed by HPV and the hepatitis viruses. Infection accounts for a substantial share of the global cancer burden, much of it preventable.",
    choices: [
      { text: "Helicobacter pylori", isCorrect: true },
      { text: "Cytomegalovirus" },
      { text: "Herpes simplex virus type 1" },
      { text: "Influenza A" },
      { text: "Streptococcus pneumoniae" },
    ],
  },

  /* ══════════════ SCREENING PROGRAMS ══════════════ */
  {
    stem: "Which principle best explains why a screening test must have high sensitivity in a low-prevalence population?",
    topic: "Screening Programs",
    explanation:
      "Screening aims to rule out disease in a mostly healthy population, so missing cases is the greater harm at that stage; specificity is recovered through confirmatory testing. This is why screening tests are deliberately set to over-refer.",
    choices: [
      { text: "Missing cases is worse than over-referring, since confirmation follows", isCorrect: true },
      { text: "High sensitivity guarantees a high positive predictive value" },
      { text: "Specificity is irrelevant in any screening context" },
      { text: "Prevalence does not affect predictive values" },
      { text: "Screening tests are always diagnostic on their own" },
    ],
  },
  {
    stem: "Colorectal cancer screening in average-risk US adults is currently recommended to begin at what age?",
    topic: "Screening Programs",
    explanation:
      "Screening now begins at 45 for average-risk adults, lowered from 50 in response to rising incidence in younger adults. Earlier initiation applies to those with a family history or predisposing syndrome.",
    choices: [
      { text: "45", isCorrect: true },
      { text: "30" },
      { text: "55" },
      { text: "60" },
      { text: "65" },
    ],
  },
  {
    stem: "Which of the following are accepted colorectal screening modalities in the US? Select all that apply.",
    type: "MULTI",
    topic: "Screening Programs",
    explanation:
      "Colonoscopy, fecal immunochemical testing, multitarget stool DNA testing and CT colonography are all accepted options with differing intervals. Serum CEA is not a screening test, and barium enema is no longer recommended.",
    choices: [
      { text: "Colonoscopy every 10 years", isCorrect: true },
      { text: "Fecal immunochemical test annually", isCorrect: true },
      { text: "Multitarget stool DNA testing every 3 years", isCorrect: true },
      { text: "Serum CEA annually" },
      { text: "Double-contrast barium enema every 2 years" },
    ],
  },
  {
    stem: "Lung cancer screening with low-dose CT is offered to which group in the US?",
    topic: "Screening Programs",
    explanation:
      "Adults aged 50 to 80 with at least a 20 pack-year history who currently smoke or quit within 15 years qualify. Restricting to high-risk groups is what makes the positive predictive value acceptable — screening everyone would produce overwhelming false positives.",
    choices: [
      { text: "Adults 50-80 with a 20 pack-year history, currently smoking or quit within 15 years", isCorrect: true },
      { text: "All adults over 40 regardless of smoking history" },
      { text: "Only patients with an existing lung nodule" },
      { text: "Anyone with a family history of any cancer" },
      { text: "Adults over 65 who have never smoked" },
    ],
  },
  {
    stem: "True or False: Cervical cancer screening detects a treatable precursor lesion rather than early invasive cancer, which is why it is unusually effective.",
    type: "TRUE_FALSE",
    topic: "Screening Programs",
    explanation:
      "True. Identifying and treating cervical intraepithelial neoplasia prevents cancer from developing at all, rather than finding it earlier. Most other screening programs detect established cancer, which is why their mortality benefit is more modest.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "What is overdiagnosis in cancer screening, and which cancer is most cited as an example?",
    topic: "Screening Programs",
    explanation:
      "Overdiagnosis is detecting a cancer that would never have caused symptoms or death in the patient's lifetime, exposing them to treatment harms with no benefit. Indolent thyroid papillary carcinoma is the most cited example, particularly in countries with intensive ultrasound screening.",
    choices: [
      { text: "Detecting cancer that would never have caused harm — thyroid papillary carcinoma", isCorrect: true },
      { text: "Missing cancers that are present — pancreatic carcinoma" },
      { text: "Diagnosing cancer at a later stage — ovarian carcinoma" },
      { text: "Confusing benign with malignant on imaging — hepatic hemangioma" },
      { text: "Failure of a test to detect a precursor lesion — cervical carcinoma" },
    ],
  },
  {
    stem: "A woman with a known BRCA1 mutation should have breast surveillance beginning at what age, and with which modality added?",
    topic: "Screening Programs",
    explanation:
      "Surveillance typically begins around age 25 with annual MRI, adding mammography from about age 30. MRI is added because it is more sensitive in the dense breast tissue of younger women, where mammography performs poorly.",
    choices: [
      { text: "About 25, with annual MRI added to mammography from 30", isCorrect: true },
      { text: "Age 50, with mammography alone as for average risk" },
      { text: "Age 40, with ultrasound only" },
      { text: "Age 65, matching the general population" },
      { text: "No surveillance is required if prophylactic surgery is declined" },
    ],
  },
  {
    stem: "Why is CA 125 with pelvic ultrasound not recommended for general ovarian cancer screening?",
    topic: "Screening Programs",
    explanation:
      "Trials showed no mortality reduction while generating substantial false positives leading to unnecessary surgery with its own complications. It is a clear demonstration that a plausible test can fail when tested properly.",
    choices: [
      { text: "No mortality benefit, with harm from false positives leading to surgery", isCorrect: true },
      { text: "The test is too expensive to deploy widely" },
      { text: "Ovarian cancer has no detectable preclinical phase at all" },
      { text: "CA 125 is undetectable in most ovarian cancers" },
      { text: "Ultrasound cannot visualize the ovaries" },
    ],
  },

  /* ══════════════ STAGING & PROGNOSIS ══════════════ */
  {
    stem: "A breast cancer is 3 cm with two positive axillary nodes and no distant disease. Which factor most strongly determines prognosis?",
    topic: "Staging & Prognosis",
    explanation:
      "Nodal status is the single most powerful prognostic factor in breast cancer, outweighing tumor size within a given stage. This is why axillary assessment remains central to staging despite the morbidity of full dissection.",
    choices: [
      { text: "Axillary nodal involvement", isCorrect: true },
      { text: "Tumor size alone" },
      { text: "Patient age at diagnosis" },
      { text: "Laterality of the tumor" },
      { text: "Time from symptom onset to presentation" },
    ],
  },
  {
    stem: "Sentinel lymph node biopsy is based on which principle?",
    topic: "Staging & Prognosis",
    explanation:
      "Lymphatic drainage is orderly, so the first node receiving drainage predicts the status of the rest of the basin. A negative sentinel node allows the remaining nodes to be spared, avoiding the lymphedema of full dissection.",
    choices: [
      { text: "Orderly lymphatic drainage means the first node predicts the basin", isCorrect: true },
      { text: "Tumor cells spread randomly to any node with equal probability" },
      { text: "The largest node always contains metastasis" },
      { text: "Lymph nodes filter tumor cells only after distant spread" },
      { text: "Sentinel nodes are identified by size on imaging alone" },
    ],
  },
  {
    stem: "Which statements about grading and staging are correct? Select all that apply.",
    type: "MULTI",
    topic: "Staging & Prognosis",
    explanation:
      "Stage generally outweighs grade prognostically, staging uses clinical and pathologic information, and pathologic staging after resection is more accurate than clinical staging. Grade is assessed microscopically rather than radiologically, and stage is not determined by mitotic count.",
    choices: [
      { text: "Stage generally carries more prognostic weight than grade", isCorrect: true },
      { text: "Pathologic staging after resection is more accurate than clinical staging", isCorrect: true },
      { text: "Grade is determined by microscopic appearance", isCorrect: true },
      { text: "Stage is determined by mitotic count per high-power field" },
      { text: "Grade is assessed from imaging characteristics" },
    ],
  },
  {
    stem: "True or False: A tumor's stage at diagnosis is fixed and does not change even if the disease later progresses.",
    type: "TRUE_FALSE",
    topic: "Staging & Prognosis",
    explanation:
      "True. Stage is recorded at diagnosis and used for prognosis and comparison across patients; later progression is described separately as recurrent or progressive disease. Restaging informs treatment but does not rewrite the original stage.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "In breast cancer, which molecular subtype carries the worst prognosis and fewest targeted options?",
    topic: "Staging & Prognosis",
    explanation:
      "Triple-negative disease lacks estrogen and progesterone receptors and HER2 amplification, so neither endocrine therapy nor trastuzumab applies, leaving chemotherapy as the mainstay. It is also more common in BRCA1 carriers and in younger patients.",
    choices: [
      { text: "Triple-negative", isCorrect: true },
      { text: "Luminal A (ER positive, low grade)" },
      { text: "HER2 positive with hormone receptor positivity" },
      { text: "Luminal B" },
      { text: "Mucinous carcinoma" },
    ],
  },
  {
    stem: "What does the Gleason score describe in prostate cancer?",
    topic: "Staging & Prognosis",
    explanation:
      "It sums the two most prevalent architectural patterns of glandular differentiation, so it is a grading rather than a staging system. Higher scores indicate more disordered architecture and worse behavior.",
    choices: [
      { text: "The sum of the two most prevalent glandular architectural patterns", isCorrect: true },
      { text: "The anatomic extent of spread beyond the capsule" },
      { text: "The number of positive lymph nodes" },
      { text: "The PSA doubling time" },
      { text: "The percentage of cells in mitosis" },
    ],
  },
  {
    stem: "Why does the same TNM stage carry different prognoses across tumor types?",
    topic: "Staging & Prognosis",
    explanation:
      "Staging criteria are defined separately for each tumor type and reflect that tumor's biology, so a stage III colon cancer and a stage III pancreatic cancer describe very different situations. Stage is a within-tumor comparison, not a cross-tumor one.",
    choices: [
      { text: "TNM criteria are tumor-specific and reflect each tumor's biology", isCorrect: true },
      { text: "Staging is applied inconsistently between institutions" },
      { text: "TNM stage measures the same anatomic extent in every tumor" },
      { text: "Prognosis depends only on patient age, not stage" },
      { text: "Stage is assigned arbitrarily by the treating physician" },
    ],
  },
  {
    stem: "Neoadjuvant therapy is given before surgery for which principal purposes?",
    topic: "Staging & Prognosis",
    explanation:
      "It shrinks the tumor to permit less extensive or newly feasible surgery, treats micrometastatic disease early, and provides a direct in-vivo test of tumor sensitivity. A pathologic complete response is itself a strong prognostic indicator.",
    choices: [
      { text: "Downstage the tumor, treat micrometastases, and test chemosensitivity in vivo", isCorrect: true },
      { text: "Replace the need for surgery entirely in all cases" },
      { text: "Reduce the cost of the operation" },
      { text: "Allow staging to be omitted" },
      { text: "Prevent the tumor from being graded" },
    ],
  },

  /* ══════════════ PRINCIPLES OF CHEMOTHERAPY ══════════════ */
  {
    stem: "Why is combination chemotherapy generally preferred over single agents?",
    topic: "Principles of Chemotherapy",
    explanation:
      "Combining drugs with different mechanisms and non-overlapping toxicities attacks resistant subclones and permits full dosing of each agent. Single-agent therapy selects for resistance more readily, which is the same logic that governs combination antimicrobial therapy in tuberculosis.",
    choices: [
      { text: "Different mechanisms attack resistant subclones with non-overlapping toxicity", isCorrect: true },
      { text: "Combinations are cheaper than single agents" },
      { text: "Combining drugs eliminates all toxicity" },
      { text: "Single agents cannot enter tumor cells" },
      { text: "Combinations avoid the need for dose calculation" },
    ],
  },
  {
    stem: "Which chemotherapy agents are matched correctly to their characteristic toxicity? Select all that apply.",
    type: "MULTI",
    topic: "Principles of Chemotherapy",
    explanation:
      "Doxorubicin causes dose-dependent cardiomyopathy, bleomycin pulmonary fibrosis, cisplatin nephrotoxicity and ototoxicity, and vincristine peripheral neuropathy. Methotrexate causes mucositis and hepatotoxicity rather than hemorrhagic cystitis, which belongs to cyclophosphamide.",
    choices: [
      { text: "Doxorubicin — dilated cardiomyopathy", isCorrect: true },
      { text: "Bleomycin — pulmonary fibrosis", isCorrect: true },
      { text: "Cisplatin — nephrotoxicity and ototoxicity", isCorrect: true },
      { text: "Methotrexate — hemorrhagic cystitis" },
      { text: "Vincristine — cardiomyopathy" },
    ],
  },
  {
    stem: "A patient receiving cyclophosphamide develops hematuria. Which agent prevents this, and by what mechanism?",
    topic: "Principles of Chemotherapy",
    explanation:
      "Acrolein, a cyclophosphamide metabolite, irritates the bladder urothelium; mesna binds it in the urine and neutralizes it. Aggressive hydration helps by dilution but mesna addresses the toxic metabolite directly.",
    choices: [
      { text: "Mesna, by binding the toxic metabolite acrolein in urine", isCorrect: true },
      { text: "Leucovorin, by rescuing normal cells from folate blockade" },
      { text: "Dexrazoxane, by chelating iron in cardiac myocytes" },
      { text: "Amifostine, by scavenging free radicals in the kidney" },
      { text: "Allopurinol, by reducing uric acid production" },
    ],
  },
  {
    stem: "Leucovorin rescue after high-dose methotrexate works by which mechanism?",
    topic: "Principles of Chemotherapy",
    explanation:
      "Leucovorin is reduced folate that bypasses the dihydrofolate reductase block, restoring normal cell function. Because tumor cells take it up less efficiently, the rescue is relatively selective for host tissue.",
    choices: [
      { text: "It supplies reduced folate that bypasses the blocked enzyme", isCorrect: true },
      { text: "It inhibits methotrexate excretion, prolonging its effect" },
      { text: "It directly binds and inactivates methotrexate in plasma" },
      { text: "It increases dihydrofolate reductase activity in tumor cells" },
      { text: "It prevents methotrexate from entering any cell" },
    ],
  },
  {
    stem: "True or False: Most conventional cytotoxic chemotherapy preferentially harms rapidly dividing cells, which explains its characteristic toxicities.",
    type: "TRUE_FALSE",
    topic: "Principles of Chemotherapy",
    explanation:
      "True. Marrow, gastrointestinal mucosa and hair follicles divide rapidly, giving myelosuppression, mucositis and alopecia. It also explains why slow-growing tumors often respond poorly to cytotoxic agents.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which agent is given with doxorubicin to reduce cardiotoxicity, and how does it work?",
    topic: "Principles of Chemotherapy",
    explanation:
      "Dexrazoxane chelates iron, limiting the iron-dependent free radical generation that damages cardiac myocytes. Cumulative dose monitoring and baseline ejection fraction assessment remain necessary regardless.",
    choices: [
      { text: "Dexrazoxane, by chelating iron and limiting free radical formation", isCorrect: true },
      { text: "Mesna, by binding acrolein" },
      { text: "Leucovorin, by supplying reduced folate" },
      { text: "Filgrastim, by stimulating neutrophil production" },
      { text: "Ondansetron, by blocking 5-HT3 receptors" },
    ],
  },
  {
    stem: "The nadir of the neutrophil count after conventional chemotherapy typically occurs at approximately what interval?",
    topic: "Principles of Chemotherapy",
    explanation:
      "Neutrophils reach their lowest point around 7 to 14 days after a cycle, which is when febrile neutropenia most often presents. Knowing the timing shapes both patient counseling and the index of suspicion when someone calls with fever.",
    choices: [
      { text: "7 to 14 days after administration", isCorrect: true },
      { text: "Within 6 hours" },
      { text: "24 to 48 hours" },
      { text: "4 to 6 weeks" },
      { text: "3 months" },
    ],
  },
  {
    stem: "Why does chemotherapy resistance often emerge despite an initially excellent response?",
    topic: "Principles of Chemotherapy",
    explanation:
      "Tumors are genetically heterogeneous, so treatment kills sensitive clones and selects for pre-existing resistant ones, which then repopulate. Resistance mechanisms include drug efflux pumps, altered targets and enhanced DNA repair.",
    choices: [
      { text: "Selection of pre-existing resistant subclones from a heterogeneous tumor", isCorrect: true },
      { text: "The drug loses chemical potency inside the body over time" },
      { text: "All tumor cells simultaneously acquire the same new mutation" },
      { text: "The immune system begins protecting tumor cells" },
      { text: "Resistance is always present from the outset in every cell" },
    ],
  },
  {
    stem: "Which principle explains why chemotherapy is given in cycles rather than continuously?",
    topic: "Principles of Chemotherapy",
    explanation:
      "Intervals allow normal tissues — especially marrow — to recover, while the tumor recovers less completely, producing net cell kill over successive cycles. Continuous dosing would exhaust host tissue before the tumor.",
    choices: [
      { text: "Normal tissue recovers between cycles more completely than tumor does", isCorrect: true },
      { text: "The drug requires time to be synthesized in the body" },
      { text: "Tumors only divide on specific days" },
      { text: "Continuous dosing would eliminate the tumor too quickly" },
      { text: "Cycling prevents any toxicity from occurring" },
    ],
  },

  /* ══════════════ TARGETED & IMMUNOTHERAPY ══════════════ */
  {
    stem: "Imatinib in chronic myeloid leukemia illustrates which therapeutic principle?",
    topic: "Targeted & Immunotherapy",
    explanation:
      "Inhibiting a specific driver protein — the BCR-ABL fusion kinase — produces high efficacy with limited toxicity to normal cells that lack the target. It became the template for targeted therapy across oncology.",
    choices: [
      { text: "Inhibiting a specific oncogenic driver present only in tumor cells", isCorrect: true },
      { text: "Non-selective killing of all rapidly dividing cells" },
      { text: "Stimulating the immune system to recognize tumor antigens" },
      { text: "Blocking angiogenesis to starve the tumor" },
      { text: "Inducing terminal differentiation of leukemic cells" },
    ],
  },
  {
    stem: "Checkpoint inhibitors such as pembrolizumab cause a distinctive toxicity profile. Which pattern is characteristic?",
    topic: "Targeted & Immunotherapy",
    explanation:
      "Releasing immune inhibition produces autoimmune-type toxicities — colitis, hepatitis, pneumonitis, thyroiditis, hypophysitis and dermatitis — often requiring corticosteroids. These are on-target consequences rather than off-target effects, which is why they are so predictable across the class.",
    choices: [
      { text: "Autoimmune inflammation of multiple organs, often steroid-responsive", isCorrect: true },
      { text: "Myelosuppression with neutropenic fever" },
      { text: "Alopecia and mucositis" },
      { text: "Cumulative dose-dependent cardiomyopathy" },
      { text: "Hemorrhagic cystitis" },
    ],
  },
  {
    stem: "All-trans retinoic acid in acute promyelocytic leukemia works by which mechanism?",
    topic: "Targeted & Immunotherapy",
    explanation:
      "ATRA overcomes the PML-RARA block, allowing promyelocytes to differentiate into mature neutrophils rather than being killed. Differentiation therapy also resolves the associated DIC, which is why it is started on clinical suspicion.",
    choices: [
      { text: "Inducing terminal differentiation by overcoming the PML-RARA block", isCorrect: true },
      { text: "Directly killing promyelocytes by DNA crosslinking" },
      { text: "Inhibiting a constitutively active tyrosine kinase" },
      { text: "Blocking the PD-1 checkpoint" },
      { text: "Preventing angiogenesis in the marrow" },
    ],
  },
  {
    stem: "Which are recognized mechanisms of targeted cancer therapy? Select all that apply.",
    type: "MULTI",
    topic: "Targeted & Immunotherapy",
    explanation:
      "Small molecule kinase inhibition, monoclonal antibodies against surface receptors, antibody-drug conjugates delivering cytotoxin to marked cells, and CAR-T cells engineered to recognize tumor antigen are all established. Non-selective alkylation is conventional cytotoxic chemotherapy, and radioisotope brachytherapy is radiation therapy.",
    choices: [
      { text: "Small molecule tyrosine kinase inhibition", isCorrect: true },
      { text: "Monoclonal antibodies against surface receptors", isCorrect: true },
      { text: "Chimeric antigen receptor T cell therapy", isCorrect: true },
      { text: "Non-selective DNA alkylation" },
      { text: "Interstitial radioisotope implantation" },
    ],
  },
  {
    stem: "True or False: Tumor lysis syndrome can be precipitated by highly effective targeted therapy as well as by conventional chemotherapy.",
    type: "TRUE_FALSE",
    topic: "Targeted & Immunotherapy",
    explanation:
      "True. Any treatment causing rapid cell death can trigger it — venetoclax in CLL is a well-recognized example requiring careful dose ramp-up. Effectiveness, not drug class, determines the risk.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "CAR-T cell therapy carries which distinctive acute toxicity?",
    topic: "Targeted & Immunotherapy",
    explanation:
      "Cytokine release syndrome produces fever, hypotension and hypoxia from massive cytokine release, treated with tocilizumab targeting IL-6. Neurotoxicity, termed ICANS, is the other characteristic complication.",
    choices: [
      { text: "Cytokine release syndrome, treated with IL-6 blockade", isCorrect: true },
      { text: "Cumulative anthracycline cardiomyopathy" },
      { text: "Hemorrhagic cystitis from acrolein" },
      { text: "Pulmonary fibrosis from cumulative dose" },
      { text: "Peripheral neuropathy from microtubule disruption" },
    ],
  },
  {
    stem: "Why must HER2 status be tested before prescribing trastuzumab?",
    topic: "Targeted & Immunotherapy",
    explanation:
      "The antibody works by binding the HER2 receptor, so a tumor without HER2 overexpression cannot respond and the patient would be exposed to cardiotoxicity for no benefit. Companion diagnostic testing is intrinsic to targeted therapy.",
    choices: [
      { text: "Without the target, there can be no benefit and only risk of cardiotoxicity", isCorrect: true },
      { text: "HER2 testing determines the correct dose only" },
      { text: "Trastuzumab works regardless of HER2 status" },
      { text: "HER2 status predicts response to endocrine therapy" },
      { text: "Testing is a billing requirement without clinical relevance" },
    ],
  },
  {
    stem: "Which tumors are most likely to respond to checkpoint inhibition, and why?",
    topic: "Targeted & Immunotherapy",
    explanation:
      "Tumors with high mutational burden — melanoma, lung cancer in smokers, and mismatch repair deficient tumors — present abundant neoantigens that T cells can recognize once inhibition is lifted. Low-mutation tumors give the immune system little to see.",
    choices: [
      { text: "High mutational burden tumors, which present abundant neoantigens", isCorrect: true },
      { text: "Low mutational burden tumors, which are less immunogenic" },
      { text: "Tumors with intact p53 exclusively" },
      { text: "Tumors lacking any PD-L1 expression" },
      { text: "Slowly proliferating tumors only" },
    ],
  },

  /* ══════════════ RADIATION THERAPY ══════════════ */
  {
    stem: "Radiation therapy kills tumor cells principally through which mechanism?",
    topic: "Radiation Therapy",
    explanation:
      "Ionizing radiation generates free radicals that produce double-strand DNA breaks, which are lethal when unrepaired at mitosis. Oxygen is required to fix that damage, which is why hypoxic tumor regions are relatively radioresistant.",
    choices: [
      { text: "Free radical mediated double-strand DNA breaks", isCorrect: true },
      { text: "Direct thermal coagulation of tumor protein" },
      { text: "Induction of terminal differentiation" },
      { text: "Blockade of tumor blood supply" },
      { text: "Competitive inhibition of DNA polymerase" },
    ],
  },
  {
    stem: "Why is radiotherapy given in fractions rather than as a single large dose?",
    topic: "Radiation Therapy",
    explanation:
      "Fractionation exploits differences between normal and tumor tissue: normal cells repair sublethal damage and repopulate between fractions, while hypoxic tumor regions reoxygenate and cells redistribute into sensitive cycle phases. Those four Rs are the basis of the whole schedule.",
    choices: [
      { text: "Normal tissue repairs and repopulates while tumor reoxygenates and redistributes", isCorrect: true },
      { text: "Equipment cannot deliver a large dose at once" },
      { text: "Tumor cells only divide on treatment days" },
      { text: "Fractionation eliminates the need for shielding" },
      { text: "Single doses have no biological effect" },
    ],
  },
  {
    stem: "Which are recognized late complications of therapeutic radiation? Select all that apply.",
    type: "MULTI",
    topic: "Radiation Therapy",
    explanation:
      "Fibrosis with obliterative endarteritis, secondary malignancy within the field, and organ-specific injury such as radiation pneumonitis progressing to fibrosis are all late effects. Acute mucositis and marrow suppression are early rather than late complications.",
    choices: [
      { text: "Tissue fibrosis with obliterative endarteritis", isCorrect: true },
      { text: "Secondary malignancy arising within the treated field", isCorrect: true },
      { text: "Radiation pneumonitis progressing to pulmonary fibrosis", isCorrect: true },
      { text: "Acute oral mucositis during the treatment course" },
      { text: "Nadir neutropenia in the second week" },
    ],
  },
  {
    stem: "Brachytherapy differs from external beam radiotherapy in which respect?",
    topic: "Radiation Therapy",
    explanation:
      "Placing the source within or adjacent to the tumor delivers a very high local dose that falls off steeply with distance, sparing surrounding tissue. This makes it well suited to cervical and prostate cancer where the target is accessible.",
    choices: [
      { text: "The source is placed within or beside the tumor, with steep dose falloff", isCorrect: true },
      { text: "It uses only alpha particles rather than photons" },
      { text: "It delivers a lower dose over a much longer period externally" },
      { text: "It requires no shielding or radiation safety measures" },
      { text: "It targets systemic micrometastatic disease" },
    ],
  },
  {
    stem: "True or False: Tissue oxygenation substantially influences the effectiveness of radiation therapy.",
    type: "TRUE_FALSE",
    topic: "Radiation Therapy",
    explanation:
      "True. Oxygen fixes radiation-induced DNA damage into a permanent lesion, so well-oxygenated tissue is two to three times more radiosensitive than hypoxic tissue. Reoxygenation between fractions is one reason fractionated schedules work.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which normal tissue toxicity limits the total dose deliverable to a thoracic field?",
    topic: "Radiation Therapy",
    explanation:
      "Lung tissue tolerance limits thoracic dosing because radiation pneumonitis and subsequent fibrosis are irreversible and can be fatal. Every anatomic site has an organ at risk that sets the ceiling.",
    choices: [
      { text: "Lung, through pneumonitis and irreversible fibrosis", isCorrect: true },
      { text: "Skin, through transient erythema" },
      { text: "Bone marrow, through reversible neutropenia" },
      { text: "Hair follicles, through alopecia" },
      { text: "Salivary glands, through xerostomia" },
    ],
  },
  {
    stem: "Palliative radiotherapy for painful bone metastasis differs from curative treatment how?",
    topic: "Radiation Therapy",
    explanation:
      "Palliative schedules use fewer, larger fractions over days rather than weeks, prioritizing rapid symptom relief and convenience over long-term normal tissue sparing. In a patient with limited life expectancy, late toxicity matters less than time spent in treatment.",
    choices: [
      { text: "Fewer, larger fractions prioritizing rapid relief over late tissue sparing", isCorrect: true },
      { text: "More fractions over a longer period for maximum tumor kill" },
      { text: "Higher total dose than curative treatment" },
      { text: "It is given only after chemotherapy has failed entirely" },
      { text: "It uses brachytherapy exclusively" },
    ],
  },

  /* ══════════════ ONCOLOGIC EMERGENCIES ══════════════ */
  {
    stem: "A patient with metastatic prostate cancer reports mid-back pain and new leg weakness with urinary retention. What is the immediate priority?",
    topic: "Oncologic Emergencies",
    explanation:
      "Metastatic spinal cord compression demands urgent MRI of the whole spine and immediate high-dose corticosteroids, followed by radiotherapy or surgery. Neurologic function at the time of treatment is the strongest predictor of recovery, so delay directly costs the patient the ability to walk.",
    choices: [
      { text: "Urgent whole-spine MRI with immediate corticosteroids", isCorrect: true },
      { text: "Plain radiographs of the lumbar spine and outpatient review" },
      { text: "Physical therapy and analgesia with reassessment in a week" },
      { text: "Bone scan scheduled for the next available slot" },
      { text: "Await the result of a PSA level before imaging" },
    ],
  },
  {
    stem: "Which laboratory pattern defines tumor lysis syndrome?",
    topic: "Oncologic Emergencies",
    explanation:
      "Massive cell death releases potassium, phosphate and nucleic acids, giving hyperkalemia, hyperphosphatemia and hyperuricemia, with hypocalcemia as phosphate binds calcium. That inverse calcium-phosphate relationship is the internal check that the pattern is genuine.",
    choices: [
      { text: "High potassium, high phosphate, high uric acid, LOW calcium", isCorrect: true },
      { text: "Low potassium, low phosphate, low uric acid, high calcium" },
      { text: "High calcium, low phosphate, normal potassium" },
      { text: "High sodium, low potassium, high bicarbonate" },
      { text: "Normal electrolytes with isolated anemia" },
    ],
  },
  {
    stem: "Which measures prevent or treat tumor lysis syndrome? Select all that apply.",
    type: "MULTI",
    topic: "Oncologic Emergencies",
    explanation:
      "Aggressive intravenous hydration, allopurinol to reduce urate formation, rasburicase to degrade existing urate, and close electrolyte monitoring are standard. Calcium is given only for symptomatic hypocalcemia, since replacing it in the presence of high phosphate risks precipitation, and urinary alkalinization is no longer routinely recommended.",
    choices: [
      { text: "Aggressive intravenous hydration", isCorrect: true },
      { text: "Allopurinol to reduce uric acid formation", isCorrect: true },
      { text: "Rasburicase to degrade existing uric acid", isCorrect: true },
      { text: "Routine calcium replacement regardless of symptoms" },
      { text: "Routine urinary alkalinization with bicarbonate" },
    ],
  },
  {
    stem: "A patient with lung cancer has facial swelling, distended neck veins and dyspnea worse when lying flat. What is the diagnosis?",
    topic: "Oncologic Emergencies",
    explanation:
      "Superior vena cava syndrome results from obstruction of venous return, most often by a right-sided mediastinal tumor. It is usually subacute rather than immediately life-threatening, but airway compromise or cerebral edema make it an emergency.",
    choices: [
      { text: "Superior vena cava syndrome", isCorrect: true },
      { text: "Cardiac tamponade" },
      { text: "Tension pneumothorax" },
      { text: "Acute pulmonary embolism" },
      { text: "Anaphylaxis" },
    ],
  },
  {
    stem: "A neutropenic patient on chemotherapy develops a temperature of 101.5°F. What is the correct immediate action?",
    topic: "Oncologic Emergencies",
    explanation:
      "Febrile neutropenia requires blood cultures followed immediately by broad-spectrum antibiotics, ideally within an hour, because a single fever may be the only sign before rapid deterioration. Waiting for culture results or for a localizing sign costs lives.",
    choices: [
      { text: "Blood cultures then broad-spectrum antibiotics within the hour", isCorrect: true },
      { text: "Observe for 24 hours to see whether a source emerges" },
      { text: "Give antipyretics alone and reassess in the morning" },
      { text: "Withhold antibiotics until culture results are available" },
      { text: "Arrange outpatient review within 48 hours" },
    ],
  },
  {
    stem: "True or False: Hypercalcemia of malignancy is most often mediated by PTH-related peptide rather than by bone metastases alone.",
    type: "TRUE_FALSE",
    topic: "Oncologic Emergencies",
    explanation:
      "True. Humoral hypercalcemia from PTHrP accounts for the majority of cases, with local osteolysis and rarely calcitriol production making up the rest. Treatment is hydration followed by a bisphosphonate or denosumab.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "A patient with breast cancer has calcium of 14.6 mg/dL, confusion and dehydration. What is the first treatment step?",
    topic: "Oncologic Emergencies",
    explanation:
      "Aggressive isotonic saline restores intravascular volume and increases calcium excretion, and must precede a bisphosphonate, which takes 48 hours to work. Loop diuretics are used only after volume repletion, if at all.",
    choices: [
      { text: "Aggressive isotonic saline rehydration", isCorrect: true },
      { text: "Immediate loop diuretic before fluid replacement" },
      { text: "Oral calcium restriction alone" },
      { text: "Bisphosphonate as sole initial therapy" },
      { text: "Calcium supplementation to correct the confusion" },
    ],
  },
  {
    stem: "Malignant pericardial effusion with tamponade presents with which triad?",
    topic: "Oncologic Emergencies",
    explanation:
      "Beck's triad of hypotension, distended neck veins and muffled heart sounds indicates tamponade, with pulsus paradoxus often present. Pericardiocentesis is both diagnostic and immediately therapeutic.",
    choices: [
      { text: "Hypotension, distended neck veins, muffled heart sounds", isCorrect: true },
      { text: "Hypertension, flat neck veins, loud heart sounds" },
      { text: "Fever, cough, pleuritic pain" },
      { text: "Facial swelling, headache, plethora" },
      { text: "Back pain, leg weakness, urinary retention" },
    ],
  },
  {
    stem: "Which feature of back pain in a cancer patient most strongly suggests spinal cord compression rather than mechanical pain?",
    topic: "Oncologic Emergencies",
    explanation:
      "Pain worse when lying flat or at night, often with a band-like radiation, suggests epidural involvement, particularly alongside any neurologic sign. Mechanical pain characteristically eases with rest — the opposite pattern.",
    choices: [
      { text: "Pain worse when lying flat and at night", isCorrect: true },
      { text: "Pain relieved completely by lying down" },
      { text: "Pain only on exertion, resolving with rest" },
      { text: "Pain localized to a single muscle after lifting" },
      { text: "Pain improving steadily over several weeks" },
    ],
  },

  /* ══════════════ CACHEXIA & SUPPORTIVE CARE ══════════════ */
  {
    stem: "Cancer cachexia differs from simple starvation in which important respect?",
    topic: "Cachexia & Supportive Care",
    explanation:
      "Cachexia is driven by inflammatory cytokines including TNF-alpha and IL-6, causing loss of skeletal muscle alongside fat and a raised metabolic rate. It is not reversed by nutritional supplementation alone, which distinguishes it fundamentally from starvation.",
    choices: [
      { text: "It is cytokine-driven, causes muscle loss, and resists nutritional repletion", isCorrect: true },
      { text: "It spares skeletal muscle entirely" },
      { text: "It reverses completely with increased calorie intake" },
      { text: "It is associated with a reduced metabolic rate" },
      { text: "It occurs only in the final week of life" },
    ],
  },
  {
    stem: "Which cytokine is most implicated in cancer cachexia, historically earning a descriptive alternative name?",
    topic: "Cachexia & Supportive Care",
    explanation:
      "TNF-alpha was originally called cachectin because of this role, acting alongside IL-1, IL-6 and interferon-gamma. Its dual naming captures how the same mediator drives both tumor necrosis and host wasting.",
    choices: [
      { text: "TNF-alpha, historically called cachectin", isCorrect: true },
      { text: "IL-4, historically called reaginic factor" },
      { text: "IL-10, historically called suppressor factor" },
      { text: "TGF-beta, historically called scarring factor" },
      { text: "IL-2, historically called T cell growth factor" },
    ],
  },
  {
    stem: "Which statements about cancer pain management are correct? Select all that apply.",
    type: "MULTI",
    topic: "Cachexia & Supportive Care",
    explanation:
      "Opioids have no ceiling dose for pure agonists, breakthrough doses should be provided alongside the regular schedule, neuropathic pain often needs adjuvants such as gabapentinoids or antidepressants, and laxatives should be started with opioids since tolerance to constipation does not develop. Addiction risk in cancer pain is not a reason to withhold analgesia, and around-the-clock dosing is preferred to as-needed dosing for persistent pain.",
    choices: [
      { text: "Pure opioid agonists have no ceiling dose", isCorrect: true },
      { text: "Breakthrough doses should accompany a regular schedule", isCorrect: true },
      { text: "Laxatives should begin with the opioid, not after constipation develops", isCorrect: true },
      { text: "As-needed dosing is preferred for persistent cancer pain" },
      { text: "Tolerance to opioid-induced constipation develops within days" },
    ],
  },
  {
    stem: "True or False: Early palliative care alongside active treatment has been shown to improve quality of life in advanced cancer.",
    type: "TRUE_FALSE",
    topic: "Cachexia & Supportive Care",
    explanation:
      "True. Trials in metastatic lung cancer showed better quality of life and mood with early integrated palliative care, and in some analyses longer survival despite less aggressive end-of-life treatment. Palliative care is not the same as end-of-life care.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Chemotherapy-induced nausea has an acute and a delayed phase. Which agent class specifically addresses the delayed phase?",
    topic: "Cachexia & Supportive Care",
    explanation:
      "NK1 receptor antagonists such as aprepitant target substance P mediated delayed emesis occurring beyond 24 hours. 5-HT3 antagonists are most effective in the acute phase, which is why highly emetogenic regimens use both plus dexamethasone.",
    choices: [
      { text: "NK1 receptor antagonists such as aprepitant", isCorrect: true },
      { text: "5-HT3 antagonists such as ondansetron alone" },
      { text: "Antihistamines such as diphenhydramine" },
      { text: "Proton pump inhibitors" },
      { text: "Anticholinergics such as hyoscine" },
    ],
  },
  {
    stem: "Which supportive measure reduces skeletal-related events in patients with bone metastases?",
    topic: "Cachexia & Supportive Care",
    explanation:
      "Bisphosphonates or denosumab reduce fractures, cord compression and the need for radiation to bone. Dental assessment beforehand is important because osteonecrosis of the jaw is a recognized complication of both.",
    choices: [
      { text: "Bisphosphonates or denosumab", isCorrect: true },
      { text: "Calcium supplementation alone" },
      { text: "Bed rest to reduce mechanical load" },
      { text: "Prophylactic antibiotics" },
      { text: "Erythropoietin-stimulating agents" },
    ],
  },
  {
    stem: "Why is anemia common in advanced cancer even without bleeding or marrow infiltration?",
    topic: "Cachexia & Supportive Care",
    explanation:
      "Inflammatory cytokines drive hepcidin production, which sequesters iron and blunts erythropoietin response — anemia of chronic disease. Ferritin is high while serum iron is low, distinguishing it from true iron deficiency.",
    choices: [
      { text: "Cytokine-driven hepcidin sequesters iron and blunts erythropoietin response", isCorrect: true },
      { text: "True iron deficiency from dietary inadequacy alone" },
      { text: "Vitamin K deficiency impairing red cell production" },
      { text: "Autoimmune destruction of red cells in all cases" },
      { text: "Excessive erythropoietin production by the tumor" },
    ],
  },

  /* ══════════════ METASTATIC PATTERNS & UNKNOWN PRIMARY ══════════════ */
  {
    stem: "Which primary tumors most commonly metastasize to bone?",
    topic: "Metastatic Patterns & Unknown Primary",
    explanation:
      "Prostate, breast, lung, kidney and thyroid account for the majority of bone metastases. Prostate characteristically produces osteoblastic lesions, while most others are osteolytic — a distinction visible on plain imaging.",
    choices: [
      { text: "Prostate, breast, lung, kidney and thyroid", isCorrect: true },
      { text: "Pancreas, esophagus, brain and skin" },
      { text: "Ovary, cervix, testis and bladder" },
      { text: "Stomach, gallbladder, adrenal and spleen" },
      { text: "Liver, colon, larynx and parotid" },
    ],
  },
  {
    stem: "A bone metastasis that appears sclerotic (osteoblastic) on radiograph most suggests which primary?",
    topic: "Metastatic Patterns & Unknown Primary",
    explanation:
      "Prostate carcinoma characteristically produces osteoblastic lesions, and breast cancer can produce mixed lesions. Most other primaries produce lytic lesions, so the radiographic pattern narrows the search for an unknown primary.",
    choices: [
      { text: "Prostate carcinoma", isCorrect: true },
      { text: "Renal cell carcinoma" },
      { text: "Multiple myeloma" },
      { text: "Thyroid follicular carcinoma" },
      { text: "Lung squamous carcinoma" },
    ],
  },
  {
    stem: "A woman has an enlarged left supraclavicular node. Which primary sites should be considered, and what is the node called?",
    topic: "Metastatic Patterns & Unknown Primary",
    explanation:
      "Virchow's node drains via the thoracic duct and classically signals abdominal malignancy, particularly gastric, but also pancreatic, ovarian or testicular. Its location makes it accessible for biopsy, often providing the tissue diagnosis.",
    choices: [
      { text: "Virchow's node — gastric and other abdominal primaries", isCorrect: true },
      { text: "Sister Mary Joseph node — cutaneous melanoma" },
      { text: "Sentinel node — ipsilateral breast only" },
      { text: "Delphian node — thyroid exclusively" },
      { text: "Rotter's node — pulmonary primaries only" },
    ],
  },
  {
    stem: "Which of the following are classic named metastatic findings correctly matched? Select all that apply.",
    type: "MULTI",
    topic: "Metastatic Patterns & Unknown Primary",
    explanation:
      "Krukenberg tumor is ovarian metastasis from gastric signet-ring carcinoma, Sister Mary Joseph nodule is periumbilical metastasis from abdominal or pelvic malignancy, and Blumer shelf is a rectal shelf from peritoneal deposits. A Virchow node is left supraclavicular rather than right axillary, and a Pancoast tumor is a primary apical lung tumor rather than a metastasis.",
    choices: [
      { text: "Krukenberg tumor — ovarian metastasis from gastric carcinoma", isCorrect: true },
      { text: "Sister Mary Joseph nodule — periumbilical metastasis", isCorrect: true },
      { text: "Blumer shelf — rectal shelf from peritoneal deposits", isCorrect: true },
      { text: "Virchow node — right axillary metastasis" },
      { text: "Pancoast tumor — apical metastasis from breast carcinoma" },
    ],
  },
  {
    stem: "In carcinoma of unknown primary, which immunohistochemical marker pair helps distinguish adenocarcinoma of lung from that of colon?",
    topic: "Metastatic Patterns & Unknown Primary",
    explanation:
      "TTF-1 positivity supports lung origin while CDX2 supports gastrointestinal origin, and cytokeratin 7 and 20 patterns refine it further. Immunohistochemistry can identify a likely primary even when imaging cannot.",
    choices: [
      { text: "TTF-1 for lung and CDX2 for colon", isCorrect: true },
      { text: "CD20 for lung and CD3 for colon" },
      { text: "S100 for lung and HMB-45 for colon" },
      { text: "Chromogranin for lung and synaptophysin for colon" },
      { text: "Vimentin for lung and desmin for colon" },
    ],
  },
  {
    stem: "True or False: Identifying the likely primary in carcinoma of unknown primary matters because treatment differs substantially between tumor types.",
    type: "TRUE_FALSE",
    topic: "Metastatic Patterns & Unknown Primary",
    explanation:
      "True. Certain favorable subsets — such as women with isolated axillary nodal adenocarcinoma treated as breast cancer, or midline germ cell tumors — have markedly better outcomes when treated according to the presumed primary rather than empirically.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },

  /* ══════════════ HISTOLOGIC & MOLECULAR DIAGNOSTICS ══════════════ */
  {
    stem: "Which immunohistochemical marker confirms a tumor is of lymphoid rather than epithelial origin?",
    topic: "Histologic & Molecular Diagnostics",
    explanation:
      "Leukocyte common antigen (CD45) identifies hematolymphoid cells, while cytokeratins identify epithelium. Distinguishing lymphoma from carcinoma is one of the commonest and most consequential uses of immunohistochemistry.",
    choices: [
      { text: "CD45 (leukocyte common antigen)", isCorrect: true },
      { text: "Cytokeratin AE1/AE3" },
      { text: "S100 protein" },
      { text: "Desmin" },
      { text: "Chromogranin A" },
    ],
  },
  {
    stem: "Match each immunohistochemical marker to the lineage it identifies. Which pairings are correct? Select all that apply.",
    type: "MULTI",
    topic: "Histologic & Molecular Diagnostics",
    explanation:
      "S100 and HMB-45 identify melanocytic lesions, chromogranin and synaptophysin neuroendocrine tumors, and desmin and vimentin muscle and mesenchymal tissue respectively. Cytokeratin marks epithelium rather than lymphoid tissue, and CD117 marks GIST rather than melanoma.",
    choices: [
      { text: "S100 and HMB-45 — melanocytic", isCorrect: true },
      { text: "Chromogranin and synaptophysin — neuroendocrine", isCorrect: true },
      { text: "Desmin — muscle", isCorrect: true },
      { text: "Cytokeratin — lymphoid" },
      { text: "CD117 — melanoma" },
    ],
  },
  {
    stem: "Why is a core needle biopsy generally preferred over fine needle aspiration for diagnosing lymphoma?",
    topic: "Histologic & Molecular Diagnostics",
    explanation:
      "Lymphoma classification depends on architectural pattern as well as cell morphology, and aspiration yields dispersed cells without architecture. Excisional biopsy remains preferable where feasible for the same reason.",
    choices: [
      { text: "Architecture is needed for classification and aspiration destroys it", isCorrect: true },
      { text: "Aspiration cannot obtain any lymphoid cells" },
      { text: "Core biopsy is less painful in every case" },
      { text: "Aspiration is unable to reach lymph nodes" },
      { text: "Lymphoma cannot be diagnosed by any biopsy technique" },
    ],
  },
  {
    stem: "Frozen section during surgery is used principally for which purpose?",
    topic: "Histologic & Molecular Diagnostics",
    explanation:
      "It gives rapid intraoperative information — usually margin status or whether a lesion is malignant — so the surgeon can decide how to proceed. Its accuracy is lower than permanent sections because of freezing artifact, so definitive diagnosis waits for permanents.",
    choices: [
      { text: "Rapid intraoperative assessment of margins or malignancy to guide surgery", isCorrect: true },
      { text: "Definitive final diagnosis replacing permanent sections" },
      { text: "Molecular profiling for targeted therapy" },
      { text: "Long-term tissue storage" },
      { text: "Assessment of hormone receptor status" },
    ],
  },
  {
    stem: "True or False: Next-generation sequencing of a tumor can identify actionable mutations that change treatment even when histology is unchanged.",
    type: "TRUE_FALSE",
    topic: "Histologic & Molecular Diagnostics",
    explanation:
      "True. Two morphologically identical lung adenocarcinomas may carry EGFR mutation, ALK rearrangement or neither, and each leads to a different first-line therapy. Molecular profiling now sits alongside histology rather than after it.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Flow cytometry contributes to hematologic malignancy diagnosis by doing what?",
    topic: "Histologic & Molecular Diagnostics",
    explanation:
      "It measures surface antigen expression on individual cells in suspension, defining immunophenotype and detecting clonal populations such as light chain restriction. It is fast and quantitative but provides no architectural information.",
    choices: [
      { text: "Defining immunophenotype and clonality on individual cells in suspension", isCorrect: true },
      { text: "Showing tissue architecture in intact sections" },
      { text: "Sequencing the entire tumor genome" },
      { text: "Measuring serum tumor markers" },
      { text: "Imaging metabolic activity in vivo" },
    ],
  },
  {
    stem: "Fluorescence in situ hybridization is most useful for detecting which abnormality?",
    topic: "Histologic & Molecular Diagnostics",
    explanation:
      "FISH detects specific translocations, gene amplifications and deletions using labeled probes, such as HER2 amplification in breast cancer or BCR-ABL in CML. It answers a targeted question rather than surveying the genome broadly.",
    choices: [
      { text: "Specific translocations, amplifications and deletions using labeled probes", isCorrect: true },
      { text: "Global gene expression across the transcriptome" },
      { text: "Protein post-translational modification" },
      { text: "Serum antibody titers" },
      { text: "Tissue oxygenation levels" },
    ],
  },
];
