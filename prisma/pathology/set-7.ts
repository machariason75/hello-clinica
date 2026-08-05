/**
 * PATHOLOGY — PRACTICE SET 7
 * Systemic & Integrated Pathology
 *
 * Difficulty: Advanced. The capstone set. Organ-by-organ disease, but written to
 * pull the previous six sets together — a question about glomerulonephritis
 * expects you to remember complement, and one about cirrhosis expects you to
 * remember fibrosis.
 *
 * 95 questions across 12 topics:
 *   Cardiovascular · Respiratory · Gastrointestinal · Hepatobiliary ·
 *   Renal & Urinary · Endocrine · Neuropathology · Musculoskeletal ·
 *   Hematolymphoid · Breast & Female Genital · Dermatopathology ·
 *   Integrated Clinicopathologic Reasoning
 *
 * Item mix: 71 single-answer vignettes, 12 select-all-that-apply, 12 true/false.
 * US conventional units throughout.
 */

import type { Q } from "../_lib/qbank";

export const PATHOLOGY_SET_7: Q[] = [
  /* ══════════════ CARDIOVASCULAR ══════════════ */
  {
    stem: "A 58-year-old man dies suddenly. At autopsy a coronary artery shows a ruptured fibrous cap overlying a lipid-rich core with superimposed thrombus. Which plaque feature best predicted this event?",
    topic: "Cardiovascular Pathology",
    explanation:
      "Vulnerability depends on a thin fibrous cap over a large lipid core with dense macrophage infiltration, not on the degree of luminal narrowing. This is why a 40% stenosis can kill while a 90% stenosis causes only stable angina — plaque composition, not size, drives acute events.",
    choices: [
      { text: "A thin fibrous cap over a large lipid core with macrophage infiltration", isCorrect: true },
      { text: "The percentage of luminal stenosis" },
      { text: "The total calcium content of the plaque" },
      { text: "The length of the plaque along the vessel" },
      { text: "The presence of a thick collagenous cap" },
    ],
  },
  {
    stem: "Which findings would you expect in a heart 3 weeks after a transmural myocardial infarction?",
    topic: "Cardiovascular Pathology",
    explanation:
      "By 3 weeks granulation tissue is being replaced by early collagen, giving a grey-white appearance with well-developed vascularization. Neutrophils dominate at days 1 to 3, macrophage debridement at days 5 to 10, and dense fibrous scar takes 2 months or more.",
    choices: [
      { text: "Granulation tissue maturing into early collagenous scar", isCorrect: true },
      { text: "Dense neutrophilic infiltration with coagulative necrosis" },
      { text: "Macrophage-rich debridement with maximal wall thinning" },
      { text: "Fully mature dense fibrous scar" },
      { text: "Normal myocardium with no residual change" },
    ],
  },
  {
    stem: "A patient has a systolic murmur, syncope on exertion and left ventricular hypertrophy. The aortic valve shows calcification of a bicuspid valve. Which type of calcification is this?",
    topic: "Cardiovascular Pathology",
    explanation:
      "Dystrophic calcification occurs in the abnormal, mechanically stressed bicuspid valve at normal serum calcium. Bicuspid valves calcify decades earlier than tricuspid ones because of accelerated wear — the mechanism links back to cell injury in Set 1.",
    choices: [
      { text: "Dystrophic calcification of an abnormally stressed valve", isCorrect: true },
      { text: "Metastatic calcification from hypercalcemia" },
      { text: "Amyloid deposition within the cusps" },
      { text: "Rheumatic commissural fusion" },
      { text: "Infective vegetation with secondary calcification" },
    ],
  },
  {
    stem: "Which features distinguish rheumatic mitral disease from infective endocarditis on gross examination? Select all that apply.",
    type: "MULTI",
    topic: "Cardiovascular Pathology",
    explanation:
      "Rheumatic disease produces commissural fusion, thickened fused chordae and a fish-mouth orifice, with Aschoff bodies microscopically. Infective endocarditis produces friable destructive vegetations that may perforate a cusp, and is not characterized by chordal fusion.",
    choices: [
      { text: "Commissural fusion producing a fish-mouth orifice", isCorrect: true },
      { text: "Thickening and fusion of chordae tendineae", isCorrect: true },
      { text: "Aschoff bodies on microscopy", isCorrect: true },
      { text: "Friable vegetations that destroy and perforate the cusp" },
      { text: "Septic emboli to the spleen and kidney" },
    ],
  },
  {
    stem: "A 24-year-old athlete dies suddenly. The heart shows asymmetric septal hypertrophy with myocyte disarray on histology. Which diagnosis?",
    topic: "Cardiovascular Pathology",
    explanation:
      "Hypertrophic cardiomyopathy from sarcomeric protein mutations produces asymmetric septal thickening and characteristic myofiber disarray. Outflow obstruction and arrhythmia explain sudden death during exertion, which is why screening matters in athletes.",
    choices: [
      { text: "Hypertrophic cardiomyopathy", isCorrect: true },
      { text: "Dilated cardiomyopathy" },
      { text: "Restrictive cardiomyopathy from amyloid" },
      { text: "Arrhythmogenic right ventricular cardiomyopathy" },
      { text: "Hypertensive heart disease" },
    ],
  },
  {
    stem: "True or False: Left ventricular hypertrophy from hypertension increases oxygen demand while capillary density fails to keep pace, predisposing to subendocardial ischemia.",
    type: "TRUE_FALSE",
    topic: "Cardiovascular Pathology",
    explanation:
      "True. This is the same mechanism covered in the adaptation set: pathologic hypertrophy outgrows its blood supply. It explains angina in hypertensive patients with entirely normal coronary arteries.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Giant cell arteritis characteristically involves which vessel size and produces which feared complication?",
    topic: "Cardiovascular Pathology",
    explanation:
      "It is a large vessel granulomatous vasculitis of the aorta and its major branches, and involvement of the ophthalmic artery causes irreversible blindness. This is why corticosteroids are started on clinical suspicion rather than after biopsy.",
    choices: [
      { text: "Large vessels — irreversible vision loss from ophthalmic artery involvement", isCorrect: true },
      { text: "Small vessels — pulmonary-renal syndrome" },
      { text: "Medium vessels — coronary aneurysms in children" },
      { text: "Capillaries — palpable purpura only" },
      { text: "Venules — superficial thrombophlebitis" },
    ],
  },
  {
    stem: "An abdominal aortic aneurysm ruptures. Which structural change underlies aneurysm formation?",
    topic: "Cardiovascular Pathology",
    explanation:
      "Degradation of medial elastin and collagen by matrix metalloproteinases, driven by chronic inflammation and atherosclerosis, weakens the wall. Laplace's law then makes dilation self-perpetuating — wall tension rises with radius.",
    choices: [
      { text: "MMP-mediated degradation of medial elastin and collagen", isCorrect: true },
      { text: "Excessive collagen deposition thickening the media" },
      { text: "Calcification of the intima alone" },
      { text: "Thrombosis of the vasa vasorum only" },
      { text: "Hypertrophy of medial smooth muscle" },
    ],
  },
  {
    stem: "Aortic dissection most commonly originates where, and which underlying medial change predisposes to it?",
    topic: "Cardiovascular Pathology",
    explanation:
      "Most dissections begin within a few centimeters of the aortic valve, where wall stress is greatest, and cystic medial degeneration weakens the media. Marfan syndrome accelerates this through defective fibrillin-1.",
    choices: [
      { text: "Ascending aorta near the valve — cystic medial degeneration", isCorrect: true },
      { text: "Distal abdominal aorta — atherosclerotic plaque rupture" },
      { text: "Aortic arch — giant cell arteritis" },
      { text: "Iliac bifurcation — fibromuscular dysplasia" },
      { text: "Renal artery ostium — dystrophic calcification" },
    ],
  },

  /* ══════════════ RESPIRATORY ══════════════ */
  {
    stem: "A 64-year-old smoker has airflow limitation with alveolar wall destruction most marked in the upper lobes. Which type of emphysema and mechanism?",
    topic: "Respiratory Pathology",
    explanation:
      "Centriacinar emphysema from smoking predominates in upper lobes, driven by protease-antiprotease imbalance as neutrophil elastase overwhelms alpha-1 antitrypsin. Alpha-1 antitrypsin deficiency instead causes panacinar disease with lower lobe predominance.",
    choices: [
      { text: "Centriacinar — neutrophil elastase overwhelming antiprotease defense", isCorrect: true },
      { text: "Panacinar — alpha-1 antitrypsin deficiency" },
      { text: "Paraseptal — congenital connective tissue defect" },
      { text: "Irregular — scarring from prior granulomatous disease" },
      { text: "Compensatory — following lobectomy" },
    ],
  },
  {
    stem: "A patient with sepsis develops refractory hypoxemia with bilateral infiltrates and normal cardiac filling pressures. Lung histology shows hyaline membranes. Which diagnosis and phase?",
    topic: "Respiratory Pathology",
    explanation:
      "Diffuse alveolar damage in the exudative phase produces hyaline membranes of protein-rich fluid and necrotic epithelium. It is the histologic correlate of ARDS, and the normal filling pressures exclude cardiogenic edema.",
    choices: [
      { text: "Diffuse alveolar damage, exudative phase (ARDS)", isCorrect: true },
      { text: "Usual interstitial pneumonia, fibrotic phase" },
      { text: "Cardiogenic pulmonary edema" },
      { text: "Organizing pneumonia with intraluminal plugs" },
      { text: "Hypersensitivity pneumonitis" },
    ],
  },
  {
    stem: "Which occupational lung diseases are correctly matched to their radiographic or histologic hallmark? Select all that apply.",
    type: "MULTI",
    topic: "Respiratory Pathology",
    explanation:
      "Asbestosis produces lower zone fibrosis with ferruginous bodies and pleural plaques, silicosis upper zone nodules with eggshell hilar calcification, and coal worker's pneumoconiosis macules progressing to massive fibrosis. Berylliosis produces non-caseating granulomas rather than ferruginous bodies, and byssinosis is an airway rather than fibrotic disease.",
    choices: [
      { text: "Asbestosis — lower zone fibrosis with ferruginous bodies", isCorrect: true },
      { text: "Silicosis — upper zone nodules with eggshell hilar calcification", isCorrect: true },
      { text: "Coal worker's pneumoconiosis — macules with progressive massive fibrosis", isCorrect: true },
      { text: "Berylliosis — ferruginous bodies in alveolar septa" },
      { text: "Byssinosis — dense pleural plaques" },
    ],
  },
  {
    stem: "Why does asbestos exposure increase the risk of bronchogenic carcinoma far more in smokers than the sum of either risk alone?",
    topic: "Respiratory Pathology",
    explanation:
      "The two carcinogens interact multiplicatively, with impaired mucociliary clearance in smokers increasing fiber retention alongside additive DNA damage. This synergy does not apply to mesothelioma, where smoking adds little.",
    choices: [
      { text: "Multiplicative interaction, partly through impaired fiber clearance in smokers", isCorrect: true },
      { text: "Smoking directly converts asbestos into a stronger carcinogen chemically" },
      { text: "Asbestos protects against tobacco carcinogens in non-smokers" },
      { text: "The interaction is purely additive rather than multiplicative" },
      { text: "The same synergy applies equally to mesothelioma" },
    ],
  },
  {
    stem: "A hilar lung mass in a smoker shows keratin pearls and intercellular bridges. Which tumor and which paraneoplastic syndrome should be anticipated?",
    topic: "Respiratory Pathology",
    explanation:
      "Squamous cell carcinoma is typically central and produces PTH-related peptide, causing hypercalcemia with suppressed PTH. Small cell carcinoma, also central, instead causes SIADH and ectopic ACTH.",
    choices: [
      { text: "Squamous cell carcinoma — hypercalcemia from PTHrP", isCorrect: true },
      { text: "Small cell carcinoma — SIADH" },
      { text: "Adenocarcinoma — hypertrophic osteoarthropathy" },
      { text: "Large cell carcinoma — beta-hCG secretion" },
      { text: "Carcinoid — serotonin secretion" },
    ],
  },
  {
    stem: "True or False: Adenocarcinoma is the most common lung cancer in never-smokers and tends to be peripheral.",
    type: "TRUE_FALSE",
    topic: "Respiratory Pathology",
    explanation:
      "True. It also carries the actionable EGFR, ALK and ROS1 alterations that make molecular testing standard in lung adenocarcinoma. Location and histology together predict which mutations to look for.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Secondary tuberculosis characteristically localizes to the lung apices. Why?",
    topic: "Respiratory Pathology",
    explanation:
      "Higher oxygen tension in the apices favors the obligate aerobe Mycobacterium tuberculosis, and lymphatic drainage there is relatively poor. Primary infection instead affects the lower lobes where ventilation is greatest.",
    choices: [
      { text: "Higher apical oxygen tension favors this obligate aerobe", isCorrect: true },
      { text: "Greater ventilation delivers more organisms to the apex" },
      { text: "Apical alveolar macrophages are absent" },
      { text: "Apical blood flow is greatest in the upright lung" },
      { text: "The apex lacks lymphatic drainage entirely" },
    ],
  },
  {
    stem: "A patient with long-standing asthma has a mucus plug containing Charcot-Leyden crystals. What are these derived from?",
    topic: "Respiratory Pathology",
    explanation:
      "Charcot-Leyden crystals are formed from galectin-10 in eosinophil granules, reflecting the eosinophilic inflammation of asthma. Curschmann spirals in the same plugs are shed epithelial casts of small airways.",
    choices: [
      { text: "Eosinophil granule protein (galectin-10)", isCorrect: true },
      { text: "Neutrophil myeloperoxidase" },
      { text: "Degraded surfactant protein" },
      { text: "Mast cell tryptase crystals" },
      { text: "Precipitated fibrin from plasma exudate" },
    ],
  },
  {
    stem: "Pulmonary hypertension from chronic hypoxia involves which vascular change?",
    topic: "Respiratory Pathology",
    explanation:
      "Sustained hypoxic vasoconstriction leads to medial hypertrophy and intimal fibrosis of pulmonary arterioles, raising resistance and eventually causing cor pulmonale. Unlike systemic vessels, pulmonary arteries constrict rather than dilate in hypoxia.",
    choices: [
      { text: "Medial hypertrophy and intimal fibrosis from sustained hypoxic vasoconstriction", isCorrect: true },
      { text: "Medial thinning from chronic vasodilation" },
      { text: "Fibrinoid necrosis of pulmonary venules" },
      { text: "Amyloid deposition in the arterial wall" },
      { text: "Complete loss of the pulmonary arterial media" },
    ],
  },

  /* ══════════════ GASTROINTESTINAL ══════════════ */
  {
    stem: "A patient with chronic reflux has esophageal biopsy showing intestinal-type columnar epithelium with goblet cells and, in one focus, nuclear crowding with loss of polarity confined above the basement membrane. What has developed?",
    topic: "Gastrointestinal Pathology",
    explanation:
      "Barrett metaplasia has progressed to dysplasia — the transition that changes surveillance to intervention. Metaplasia alone is adaptive; dysplasia is the step toward adenocarcinoma, and the basement membrane remains intact so it is not yet invasive.",
    choices: [
      { text: "Dysplasia arising in Barrett esophagus", isCorrect: true },
      { text: "Uncomplicated metaplasia without dysplasia" },
      { text: "Invasive adenocarcinoma" },
      { text: "Squamous cell carcinoma in situ" },
      { text: "Eosinophilic esophagitis" },
    ],
  },
  {
    stem: "Which features distinguish Crohn disease from ulcerative colitis? Select all that apply.",
    type: "MULTI",
    topic: "Gastrointestinal Pathology",
    explanation:
      "Crohn disease shows skip lesions, transmural inflammation, fistulas and strictures, and non-caseating granulomas in a minority. Ulcerative colitis is continuous from the rectum, mucosal only, and characteristically features crypt abscesses with pseudopolyps.",
    choices: [
      { text: "Skip lesions with intervening normal mucosa", isCorrect: true },
      { text: "Transmural inflammation with fistula formation", isCorrect: true },
      { text: "Non-caseating granulomas in a minority of biopsies", isCorrect: true },
      { text: "Continuous involvement extending proximally from the rectum" },
      { text: "Inflammation confined strictly to mucosa and submucosa" },
    ],
  },
  {
    stem: "A gastric biopsy shows chronic active gastritis with intestinal metaplasia and Helicobacter pylori organisms. What are the two malignant risks?",
    topic: "Gastrointestinal Pathology",
    explanation:
      "Chronic H. pylori gastritis predisposes to intestinal-type gastric adenocarcinoma via the metaplasia-dysplasia sequence, and to MALT lymphoma through sustained B cell stimulation. Early MALT lymphoma can regress with eradication alone.",
    choices: [
      { text: "Gastric adenocarcinoma and MALT lymphoma", isCorrect: true },
      { text: "Gastrointestinal stromal tumor and carcinoid" },
      { text: "Squamous carcinoma and leiomyosarcoma" },
      { text: "Signet-ring carcinoma and hepatoblastoma" },
      { text: "Neither — H. pylori is not oncogenic" },
    ],
  },
  {
    stem: "A colonic adenoma with which features carries the highest risk of harboring carcinoma?",
    topic: "Gastrointestinal Pathology",
    explanation:
      "Large size, villous architecture and high-grade dysplasia together carry the greatest risk. A small tubular adenoma with low-grade dysplasia has minimal malignant potential — the three features are assessed together rather than individually.",
    choices: [
      { text: "Large, villous, with high-grade dysplasia", isCorrect: true },
      { text: "Small, tubular, with low-grade dysplasia" },
      { text: "Pedunculated with a long stalk and no dysplasia" },
      { text: "Hyperplastic polyp of the rectosigmoid" },
      { text: "Inflammatory pseudopolyp in colitis" },
    ],
  },
  {
    stem: "True or False: The adenoma-carcinoma sequence in colorectal cancer typically begins with APC loss and accumulates KRAS and TP53 alterations over years.",
    type: "TRUE_FALSE",
    topic: "Gastrointestinal Pathology",
    explanation:
      "True. APC loss initiates, KRAS drives adenoma growth, and TP53 loss accompanies the transition to carcinoma. The multi-year timeline is what makes screening colonoscopy effective — there is a long window to intervene.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "A patient has acute severe epigastric pain, lipase 2,100 U/L, and calcium of 7.1 mg/dL. Which pathologic process explains the low calcium?",
    topic: "Gastrointestinal Pathology",
    explanation:
      "Enzymatic fat necrosis consumes calcium as insoluble soaps form in peripancreatic and omental fat — saponification. Hypocalcemia is therefore a marker of severity rather than a separate problem.",
    choices: [
      { text: "Saponification of fat consuming calcium as insoluble soaps", isCorrect: true },
      { text: "Metastatic calcification from hypercalcemia" },
      { text: "Renal loss of calcium from tubular injury" },
      { text: "Parathyroid infarction reducing PTH" },
      { text: "Dilution from aggressive fluid resuscitation alone" },
    ],
  },
  {
    stem: "Ischemic colitis most commonly affects which region, and why?",
    topic: "Gastrointestinal Pathology",
    explanation:
      "The splenic flexure is a watershed between superior and inferior mesenteric artery territories, so it has the least perfusion reserve during hypotension. The rectosigmoid junction is a second watershed for the same reason.",
    choices: [
      { text: "Splenic flexure — a watershed between SMA and IMA territories", isCorrect: true },
      { text: "Cecum — because of its rich dual blood supply" },
      { text: "Rectum — because it has only one arterial source" },
      { text: "Transverse colon mid-portion — because of portal drainage" },
      { text: "Appendix — because of lymphoid tissue density" },
    ],
  },
  {
    stem: "Celiac disease produces which characteristic small bowel histology, and in which region is it most marked?",
    topic: "Gastrointestinal Pathology",
    explanation:
      "Villous atrophy with crypt hyperplasia and intraepithelial lymphocytosis is most marked in the duodenum and proximal jejunum, where gluten exposure is greatest. Distal disease is milder, which is why duodenal biopsy is the standard sampling site.",
    choices: [
      { text: "Villous atrophy with crypt hyperplasia and intraepithelial lymphocytes, duodenum", isCorrect: true },
      { text: "Transmural granulomas, terminal ileum" },
      { text: "Crypt abscesses with pseudopolyps, colon" },
      { text: "Signet-ring cell infiltration, stomach" },
      { text: "Amyloid deposition, jejunum" },
    ],
  },

  /* ══════════════ HEPATOBILIARY ══════════════ */
  {
    stem: "A liver biopsy shows regenerative nodules surrounded by fibrous septa with distorted vasculature. Which functional consequence follows most directly?",
    topic: "Hepatobiliary Pathology",
    explanation:
      "Cirrhosis raises sinusoidal resistance, producing portal hypertension with varices, ascites and splenomegaly. This ties back to the fibrosis mechanisms in the repair set — the stellate cell is the common thread.",
    choices: [
      { text: "Portal hypertension from increased sinusoidal resistance", isCorrect: true },
      { text: "Increased hepatic arterial resistance with hepatic ischemia" },
      { text: "Reduced splanchnic blood flow with mesenteric ischemia" },
      { text: "Portal vein thrombosis in every case" },
      { text: "Reversal of hepatic venous drainage into the vena cava" },
    ],
  },
  {
    stem: "Which findings indicate hepatocellular rather than cholestatic liver injury?",
    topic: "Hepatobiliary Pathology",
    explanation:
      "Transaminases raised far out of proportion to alkaline phosphatase indicate hepatocellular injury. A cholestatic pattern shows the reverse, with alkaline phosphatase and GGT dominant — the ratio, not the absolute values, makes the distinction.",
    choices: [
      { text: "ALT and AST markedly raised with only mild alkaline phosphatase elevation", isCorrect: true },
      { text: "Alkaline phosphatase and GGT markedly raised with mild transaminase rise" },
      { text: "Isolated unconjugated hyperbilirubinemia" },
      { text: "Low albumin with normal transaminases" },
      { text: "Isolated prolonged prothrombin time" },
    ],
  },
  {
    stem: "Which liver conditions are matched correctly to their characteristic histologic finding? Select all that apply.",
    type: "MULTI",
    topic: "Hepatobiliary Pathology",
    explanation:
      "Alcoholic hepatitis shows Mallory-Denk bodies, hemochromatosis iron staining blue with Prussian blue, and alpha-1 antitrypsin deficiency PAS-positive diastase-resistant globules. Wilson disease involves copper rather than iron, and primary biliary cholangitis targets small bile ducts rather than producing hyaline membranes.",
    choices: [
      { text: "Alcoholic hepatitis — Mallory-Denk bodies", isCorrect: true },
      { text: "Hereditary hemochromatosis — Prussian blue positive granules", isCorrect: true },
      { text: "Alpha-1 antitrypsin deficiency — PAS-positive diastase-resistant globules", isCorrect: true },
      { text: "Wilson disease — Prussian blue positive iron deposits" },
      { text: "Primary biliary cholangitis — alveolar hyaline membranes" },
    ],
  },
  {
    stem: "A patient with cirrhosis develops a rising alpha-fetoprotein and a new arterially enhancing hepatic lesion. What is the most likely diagnosis, and what is the main risk factor?",
    topic: "Hepatobiliary Pathology",
    explanation:
      "Hepatocellular carcinoma arises on a background of cirrhosis from any cause, with chronic hepatitis B and C the leading contributors worldwide. Arterial enhancement with washout reflects its arterial rather than portal blood supply.",
    choices: [
      { text: "Hepatocellular carcinoma — cirrhosis from chronic viral hepatitis", isCorrect: true },
      { text: "Cholangiocarcinoma — primary sclerosing cholangitis" },
      { text: "Hepatic adenoma — oral contraceptive use" },
      { text: "Metastatic colorectal carcinoma — portal spread" },
      { text: "Hepatic hemangioma — no risk factor" },
    ],
  },
  {
    stem: "True or False: Hepatitis B can cause hepatocellular carcinoma without preceding cirrhosis, whereas hepatitis C rarely does.",
    type: "TRUE_FALSE",
    topic: "Hepatobiliary Pathology",
    explanation:
      "True. HBV integrates into the host genome and the HBx protein interferes with p53, giving a direct oncogenic mechanism independent of cirrhosis. HCV acts predominantly through chronic inflammation and fibrosis.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Centrilobular (zone 3) necrosis is characteristic of which two insults, and why the same zone?",
    topic: "Hepatobiliary Pathology",
    explanation:
      "Acetaminophen toxicity and ischemic hepatitis both strike zone 3 because it is farthest from the portal supply and richest in cytochrome P450 — least oxygenated and most efficient at generating toxic metabolites simultaneously.",
    choices: [
      { text: "Acetaminophen toxicity and ischemia — least oxygenated, most P450", isCorrect: true },
      { text: "Viral hepatitis and autoimmune hepatitis — highest antigen density" },
      { text: "Biliary obstruction and cholangitis — highest bile concentration" },
      { text: "Hemochromatosis and Wilson disease — highest metal deposition" },
      { text: "Amyloidosis and sarcoidosis — highest macrophage density" },
    ],
  },
  {
    stem: "Which mechanism explains ascites in cirrhosis beyond portal hypertension alone?",
    topic: "Hepatobiliary Pathology",
    explanation:
      "Reduced albumin synthesis lowers plasma oncotic pressure, and splanchnic vasodilation triggers renin-angiotensin-aldosterone activation with sodium and water retention. Portal hypertension provides the hydrostatic component but all three act together.",
    choices: [
      { text: "Hypoalbuminemia plus RAAS activation causing sodium and water retention", isCorrect: true },
      { text: "Increased plasma oncotic pressure drawing fluid outward" },
      { text: "Lymphatic hypertrophy exceeding production" },
      { text: "Reduced splanchnic blood flow" },
      { text: "Suppression of aldosterone secretion" },
    ],
  },
  {
    stem: "A patient with ulcerative colitis develops cholestatic liver enzymes and a beaded appearance of bile ducts on imaging. Which diagnosis and which malignancy risk?",
    topic: "Hepatobiliary Pathology",
    explanation:
      "Primary sclerosing cholangitis is strongly associated with ulcerative colitis and carries a substantially increased risk of cholangiocarcinoma. It also raises colorectal cancer risk beyond that of colitis alone, so surveillance intensifies.",
    choices: [
      { text: "Primary sclerosing cholangitis — cholangiocarcinoma", isCorrect: true },
      { text: "Primary biliary cholangitis — hepatocellular carcinoma" },
      { text: "Autoimmune hepatitis — hepatic adenoma" },
      { text: "Choledocholithiasis — gallbladder carcinoma" },
      { text: "Caroli disease — pancreatic carcinoma" },
    ],
  },

  /* ══════════════ RENAL & URINARY ══════════════ */
  {
    stem: "A child develops cola-colored urine, hypertension and periorbital edema two weeks after streptococcal pharyngitis. Which mechanism and biopsy finding?",
    topic: "Renal & Urinary Pathology",
    explanation:
      "Post-streptococcal glomerulonephritis is immune complex mediated with subepithelial humps on electron microscopy and granular immunofluorescence. Complement is consumed, so C3 is low — linking directly to the complement material in Set 2.",
    choices: [
      { text: "Immune complex deposition with subepithelial humps and low C3", isCorrect: true },
      { text: "Anti-GBM antibody with linear immunofluorescence" },
      { text: "Pauci-immune crescentic disease with ANCA positivity" },
      { text: "Podocyte effacement with no immune deposits" },
      { text: "Amyloid deposition with apple-green birefringence" },
    ],
  },
  {
    stem: "Which glomerular diseases are matched correctly to their defining finding? Select all that apply.",
    type: "MULTI",
    topic: "Renal & Urinary Pathology",
    explanation:
      "Minimal change disease shows podocyte effacement with normal light microscopy, Goodpasture disease linear anti-GBM immunofluorescence, and membranous nephropathy subepithelial deposits with a spike and dome pattern. IgA nephropathy shows mesangial rather than subendothelial IgA, and diabetic nephropathy Kimmelstiel-Wilson nodules rather than crescents.",
    choices: [
      { text: "Minimal change disease — podocyte effacement, normal light microscopy", isCorrect: true },
      { text: "Goodpasture disease — linear anti-GBM immunofluorescence", isCorrect: true },
      { text: "Membranous nephropathy — subepithelial deposits, spike and dome", isCorrect: true },
      { text: "IgA nephropathy — subendothelial IgA deposits only" },
      { text: "Diabetic nephropathy — cellular crescents in most glomeruli" },
    ],
  },
  {
    stem: "A patient in shock develops oliguria with muddy brown granular casts in the urine. Which pathology and which nephron segment is most vulnerable?",
    topic: "Renal & Urinary Pathology",
    explanation:
      "Acute tubular necrosis from ischemia affects the proximal tubule straight segment and thick ascending limb most, both in the hypoxic outer medulla. The granular casts are sloughed tubular epithelium — a watershed injury inside the kidney.",
    choices: [
      { text: "Acute tubular necrosis — proximal straight tubule and thick ascending limb", isCorrect: true },
      { text: "Acute interstitial nephritis — collecting duct" },
      { text: "Crescentic glomerulonephritis — Bowman capsule" },
      { text: "Papillary necrosis — renal cortex" },
      { text: "Renal vein thrombosis — glomerular capillaries" },
    ],
  },
  {
    stem: "Diabetic nephropathy shows which characteristic glomerular lesion?",
    topic: "Renal & Urinary Pathology",
    explanation:
      "Kimmelstiel-Wilson nodular glomerulosclerosis develops with mesangial expansion and basement membrane thickening from non-enzymatic glycation. Microalbuminuria precedes it and is the target for early intervention.",
    choices: [
      { text: "Kimmelstiel-Wilson nodular glomerulosclerosis", isCorrect: true },
      { text: "Crescents filling Bowman space" },
      { text: "Wire-loop capillary thickening" },
      { text: "Tram-track basement membrane splitting" },
      { text: "Apple-green birefringence with Congo red" },
    ],
  },
  {
    stem: "True or False: Nephrotic syndrome features proteinuria above 3.5 g per day with hypoalbuminemia, edema and hyperlipidemia, while nephritic syndrome features hematuria with hypertension.",
    type: "TRUE_FALSE",
    topic: "Renal & Urinary Pathology",
    explanation:
      "True. The distinction directs the differential: nephrotic points to podocyte and basement membrane disease, nephritic to inflammatory glomerular injury. Some conditions can present with features of both.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "A 62-year-old man has painless gross hematuria. Cystoscopy shows a papillary bladder lesion. Which occupational exposure is most relevant to ask about?",
    topic: "Renal & Urinary Pathology",
    explanation:
      "Aromatic amines such as beta-naphthylamine, historically used in dye, rubber and leather industries, cause urothelial carcinoma after long latency. Smoking remains the strongest overall risk factor.",
    choices: [
      { text: "Aromatic amines in the dye, rubber or leather industry", isCorrect: true },
      { text: "Asbestos in shipbuilding" },
      { text: "Silica in mining" },
      { text: "Vinyl chloride in plastics manufacture" },
      { text: "Beryllium in aerospace" },
    ],
  },
  {
    stem: "Renal cell carcinoma classically shows which histology, and which syndrome should prompt suspicion if bilateral?",
    topic: "Renal & Urinary Pathology",
    explanation:
      "Clear cell histology reflects lipid and glycogen dissolved during processing, and bilateral disease suggests von Hippel-Lindau syndrome. VHL loss stabilizes HIF and drives the hypervascularity typical of these tumors.",
    choices: [
      { text: "Clear cell histology — von Hippel-Lindau syndrome", isCorrect: true },
      { text: "Papillary histology — Li-Fraumeni syndrome" },
      { text: "Chromophobe histology — Lynch syndrome" },
      { text: "Sarcomatoid histology — neurofibromatosis type 1" },
      { text: "Clear cell histology — familial adenomatous polyposis" },
    ],
  },
  {
    stem: "Which stone type is most common in the US, and what dietary advice reduces recurrence?",
    topic: "Renal & Urinary Pathology",
    explanation:
      "Calcium oxalate stones predominate. Counterintuitively, dietary calcium should be maintained rather than restricted, because calcium binds oxalate in the gut; sodium and oxalate intake should fall and fluid intake rise substantially.",
    choices: [
      { text: "Calcium oxalate — maintain dietary calcium, reduce sodium and oxalate, increase fluids", isCorrect: true },
      { text: "Calcium oxalate — restrict dietary calcium strictly" },
      { text: "Uric acid — increase animal protein intake" },
      { text: "Struvite — increase urinary pH further" },
      { text: "Cystine — restrict fluid intake overnight" },
    ],
  },

  /* ══════════════ ENDOCRINE ══════════════ */
  {
    stem: "A woman has a firm thyroid gland, high TSH, low free T4, and biopsy showing lymphocytic infiltration with germinal centers and Hürthle cell change. Which diagnosis and which malignancy risk?",
    topic: "Endocrine Pathology",
    explanation:
      "Hashimoto thyroiditis is an autoimmune lymphocytic thyroiditis carrying an increased risk of thyroid MALT lymphoma. The chronic antigenic stimulation mechanism mirrors that of H. pylori and gastric MALT lymphoma.",
    choices: [
      { text: "Hashimoto thyroiditis — thyroid MALT lymphoma", isCorrect: true },
      { text: "Graves disease — anaplastic carcinoma" },
      { text: "Subacute granulomatous thyroiditis — papillary carcinoma" },
      { text: "Riedel thyroiditis — follicular carcinoma" },
      { text: "Toxic multinodular goiter — medullary carcinoma" },
    ],
  },
  {
    stem: "Which thyroid carcinoma shows nuclear grooves, Orphan Annie nuclei and psammoma bodies, and how does it spread?",
    topic: "Endocrine Pathology",
    explanation:
      "Papillary carcinoma is diagnosed on nuclear features rather than architecture, and spreads via lymphatics, which is why cervical nodes are commonly involved. Follicular carcinoma spreads hematogenously instead.",
    choices: [
      { text: "Papillary carcinoma — lymphatic spread", isCorrect: true },
      { text: "Follicular carcinoma — lymphatic spread" },
      { text: "Medullary carcinoma — hematogenous spread only" },
      { text: "Anaplastic carcinoma — no metastatic potential" },
      { text: "Papillary carcinoma — hematogenous spread only" },
    ],
  },
  {
    stem: "A patient has hypertension, episodic headache, palpitations and sweating. Plasma free metanephrines are markedly elevated. Which tumor and which associated syndromes? Select all that apply.",
    type: "MULTI",
    topic: "Endocrine Pathology",
    explanation:
      "Pheochromocytoma associates with MEN2A and MEN2B through RET mutation, von Hippel-Lindau, and neurofibromatosis type 1. It is not a feature of MEN1 or familial adenomatous polyposis.",
    choices: [
      { text: "MEN2A", isCorrect: true },
      { text: "Von Hippel-Lindau syndrome", isCorrect: true },
      { text: "Neurofibromatosis type 1", isCorrect: true },
      { text: "MEN1" },
      { text: "Familial adenomatous polyposis" },
    ],
  },
  {
    stem: "Primary hyperparathyroidism most commonly results from what, and produces which classic tetrad of symptoms?",
    topic: "Endocrine Pathology",
    explanation:
      "A single parathyroid adenoma accounts for most cases, producing stones, bones, abdominal groans and psychiatric moans. PTH is inappropriately high alongside hypercalcemia, distinguishing it from malignancy-associated hypercalcemia where PTH is suppressed.",
    choices: [
      { text: "A solitary adenoma — stones, bones, abdominal groans, psychiatric moans", isCorrect: true },
      { text: "Four-gland hyperplasia — hypocalcemic tetany" },
      { text: "Parathyroid carcinoma in most cases — hypotension" },
      { text: "Ectopic PTH from lung cancer — suppressed native PTH" },
      { text: "Vitamin D deficiency — osteomalacia only" },
    ],
  },
  {
    stem: "True or False: In Cushing syndrome due to an adrenal adenoma, ACTH is suppressed, whereas in Cushing disease from a pituitary adenoma it is raised or inappropriately normal.",
    type: "TRUE_FALSE",
    topic: "Endocrine Pathology",
    explanation:
      "True. Measuring ACTH is the pivotal step in localizing the source, since autonomous cortisol from the adrenal suppresses pituitary output while a pituitary source drives it. Ectopic ACTH gives the highest levels of all.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Type 1 diabetes differs from type 2 in which pathologic respect?",
    topic: "Endocrine Pathology",
    explanation:
      "Type 1 involves autoimmune destruction of beta cells with insulitis and absolute insulin deficiency, while type 2 features insulin resistance with amyloid deposition in islets and relative deficiency. That difference explains why ketoacidosis is characteristic of type 1.",
    choices: [
      { text: "Autoimmune beta cell destruction with insulitis, versus resistance with islet amyloid", isCorrect: true },
      { text: "Insulin resistance with islet amyloid, versus autoimmune destruction" },
      { text: "Both result from identical autoimmune mechanisms" },
      { text: "Type 1 involves glucagon excess exclusively" },
      { text: "Type 2 involves complete absence of insulin from onset" },
    ],
  },
  {
    stem: "Sheehan syndrome results from which pathologic event?",
    topic: "Endocrine Pathology",
    explanation:
      "Postpartum hemorrhage causes ischemic necrosis of the pituitary, which is enlarged and vulnerable in pregnancy while supplied by a low-pressure portal system. Failure of lactation is often the first clue.",
    choices: [
      { text: "Ischemic pituitary necrosis after postpartum hemorrhage", isCorrect: true },
      { text: "Autoimmune destruction of the anterior pituitary" },
      { text: "Hemorrhage into a pre-existing pituitary adenoma" },
      { text: "Infiltration of the pituitary by amyloid" },
      { text: "Metastatic carcinoma to the pituitary stalk" },
    ],
  },
  {
    stem: "Which adrenal pathology causes hypotension, hyperkalemia, hyponatremia and hyperpigmentation?",
    topic: "Endocrine Pathology",
    explanation:
      "Primary adrenal insufficiency destroys the cortex, so cortisol and aldosterone both fall while ACTH rises — and the shared precursor peptide causes hyperpigmentation. Secondary insufficiency from pituitary failure spares aldosterone and causes no pigmentation.",
    choices: [
      { text: "Primary adrenal insufficiency with raised ACTH", isCorrect: true },
      { text: "Secondary adrenal insufficiency from pituitary failure" },
      { text: "Primary hyperaldosteronism" },
      { text: "Pheochromocytoma" },
      { text: "Cushing syndrome from an adrenal adenoma" },
    ],
  },

  /* ══════════════ NEUROPATHOLOGY ══════════════ */
  {
    stem: "A brain at autopsy shows cortical atrophy with neuritic plaques of extracellular amyloid and intracellular neurofibrillary tangles. Which protein forms each?",
    topic: "Neuropathology",
    explanation:
      "Plaques are extracellular beta-amyloid from APP cleavage; tangles are intracellular hyperphosphorylated tau. Down syndrome patients develop this early because APP sits on chromosome 21 — three copies, earlier accumulation.",
    choices: [
      { text: "Beta-amyloid in plaques; hyperphosphorylated tau in tangles", isCorrect: true },
      { text: "Tau in plaques; beta-amyloid in tangles" },
      { text: "Alpha-synuclein in plaques; prion protein in tangles" },
      { text: "Huntingtin in plaques; TDP-43 in tangles" },
      { text: "Both are formed from alpha-synuclein" },
    ],
  },
  {
    stem: "Lewy bodies are composed of which protein, and their presence in the substantia nigra causes which clinical picture?",
    topic: "Neuropathology",
    explanation:
      "Alpha-synuclein aggregates form Lewy bodies, and loss of nigral dopaminergic neurons produces resting tremor, rigidity and bradykinesia. Depigmentation of the substantia nigra is visible to the naked eye at autopsy.",
    choices: [
      { text: "Alpha-synuclein — parkinsonism from dopaminergic neuron loss", isCorrect: true },
      { text: "Tau — frontotemporal dementia with behavioral change" },
      { text: "Beta-amyloid — progressive memory loss" },
      { text: "Prion protein — rapidly progressive dementia with myoclonus" },
      { text: "Huntingtin — chorea with caudate atrophy" },
    ],
  },
  {
    stem: "Which brain regions are most vulnerable to global ischemia, and after how long? Select all that apply.",
    type: "MULTI",
    topic: "Neuropathology",
    explanation:
      "Hippocampal CA1 pyramidal cells, cerebellar Purkinje cells and cortical layers 3, 5 and 6 are selectively vulnerable within about 5 minutes. White matter and the brainstem reticular formation tolerate ischemia comparatively well.",
    choices: [
      { text: "Hippocampal CA1 pyramidal neurons", isCorrect: true },
      { text: "Cerebellar Purkinje cells", isCorrect: true },
      { text: "Cortical pyramidal neurons in layers 3, 5 and 6", isCorrect: true },
      { text: "Subcortical white matter oligodendrocytes" },
      { text: "Brainstem reticular formation" },
    ],
  },
  {
    stem: "Why does a cerebral infarct liquefy while a renal infarct remains firm?",
    topic: "Neuropathology",
    explanation:
      "The CNS is rich in hydrolytic enzymes from microglia and low in collagenous stroma, so digestion outpaces protein denaturation. This produces liquefactive necrosis and eventually a fluid-filled cyst rimmed by gliosis rather than a fibrous scar.",
    choices: [
      { text: "Abundant hydrolytic enzymes and scant supporting stroma in the CNS", isCorrect: true },
      { text: "Higher collagen content in brain than in kidney" },
      { text: "Absence of any blood supply to the brain after infarction" },
      { text: "Neurons resist proteolysis better than tubular cells" },
      { text: "The kidney lacks lysosomal enzymes entirely" },
    ],
  },
  {
    stem: "True or False: Glial scarring rather than fibroblastic scarring is the repair mechanism in the central nervous system.",
    type: "TRUE_FALSE",
    topic: "Neuropathology",
    explanation:
      "True. Astrocytes proliferate to form a gliotic scar, since fibroblasts are largely confined to meninges and perivascular spaces. The glial scar also inhibits axonal regrowth, which is one reason CNS axons regenerate so poorly.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "An elderly patient on anticoagulation has a slowly progressive headache and confusion weeks after a minor fall. Which lesion and which vessel?",
    topic: "Neuropathology",
    explanation:
      "Subdural hematoma results from tearing of bridging veins, and cerebral atrophy in the elderly stretches those veins, making them vulnerable to trivial trauma. The venous source explains the slow onset, unlike arterial epidural bleeding.",
    choices: [
      { text: "Subdural hematoma — bridging veins", isCorrect: true },
      { text: "Epidural hematoma — middle meningeal artery" },
      { text: "Subarachnoid hemorrhage — berry aneurysm" },
      { text: "Intraparenchymal hemorrhage — lenticulostriate arteries" },
      { text: "Cerebral venous sinus thrombosis" },
    ],
  },
  {
    stem: "A glioblastoma shows which histologic features that define it as WHO grade 4?",
    topic: "Neuropathology",
    explanation:
      "Microvascular proliferation and pseudopalisading necrosis define grade 4 astrocytoma. The butterfly appearance across the corpus callosum on imaging reflects its infiltrative spread along white matter tracts.",
    choices: [
      { text: "Microvascular proliferation with pseudopalisading necrosis", isCorrect: true },
      { text: "Rosenthal fibers with eosinophilic granular bodies" },
      { text: "Perinuclear halos in a fried-egg pattern only" },
      { text: "Psammoma bodies with whorled architecture" },
      { text: "Homer Wright rosettes" },
    ],
  },
  {
    stem: "Multiple sclerosis produces which pathologic lesion, and where are plaques characteristically located?",
    topic: "Neuropathology",
    explanation:
      "Demyelinating plaques with relative axonal preservation occur in periventricular white matter, optic nerves, brainstem and spinal cord. Preserved axons early on explain why function can recover between relapses.",
    choices: [
      { text: "Demyelinating plaques with relative axonal sparing, periventricular white matter", isCorrect: true },
      { text: "Axonal loss with preserved myelin, in gray matter" },
      { text: "Neurofibrillary tangles in the entorhinal cortex" },
      { text: "Spongiform change throughout the cortex" },
      { text: "Amyloid angiopathy in leptomeningeal vessels" },
    ],
  },

  /* ══════════════ MUSCULOSKELETAL ══════════════ */
  {
    stem: "An adolescent has knee pain and a destructive metaphyseal lesion with a Codman triangle and sunburst periosteal reaction. Which tumor and which gene is commonly implicated?",
    topic: "Musculoskeletal Pathology",
    explanation:
      "Osteosarcoma arises at the metaphysis of long bones in adolescents, and RB and TP53 mutations are frequently involved. Hereditary retinoblastoma survivors carry a markedly increased osteosarcoma risk for this reason.",
    choices: [
      { text: "Osteosarcoma — RB and TP53", isCorrect: true },
      { text: "Ewing sarcoma — EWS-FLI1" },
      { text: "Chondrosarcoma — IDH1" },
      { text: "Giant cell tumor — H3F3A" },
      { text: "Osteoid osteoma — COX-2 overexpression" },
    ],
  },
  {
    stem: "Which features distinguish osteoarthritis from rheumatoid arthritis? Select all that apply.",
    type: "MULTI",
    topic: "Musculoskeletal Pathology",
    explanation:
      "Osteoarthritis is degenerative with cartilage loss, subchondral sclerosis, osteophytes and Heberden nodes at the distal interphalangeal joints. Rheumatoid arthritis is an inflammatory synovitis with pannus, symmetric small joint involvement sparing the DIPs, and marked morning stiffness.",
    choices: [
      { text: "Osteophyte formation with subchondral sclerosis", isCorrect: true },
      { text: "Heberden nodes at the distal interphalangeal joints", isCorrect: true },
      { text: "Asymmetric distribution related to mechanical load", isCorrect: true },
      { text: "Pannus formation eroding cartilage and bone" },
      { text: "Prolonged morning stiffness lasting over an hour" },
    ],
  },
  {
    stem: "A patient has a painful first metatarsophalangeal joint. Aspirate shows needle-shaped negatively birefringent crystals. Which crystal and which condition?",
    topic: "Musculoskeletal Pathology",
    explanation:
      "Monosodium urate crystals are needle-shaped and negatively birefringent, confirming gout. Calcium pyrophosphate crystals are rhomboid and positively birefringent, indicating pseudogout — the shape and birefringence together make the call.",
    choices: [
      { text: "Monosodium urate — gout", isCorrect: true },
      { text: "Calcium pyrophosphate — pseudogout" },
      { text: "Hydroxyapatite — calcific tendinitis" },
      { text: "Cholesterol — chronic effusion" },
      { text: "Calcium oxalate — oxalosis" },
    ],
  },
  {
    stem: "Osteoporosis differs from osteomalacia in which fundamental respect?",
    topic: "Musculoskeletal Pathology",
    explanation:
      "Osteoporosis is loss of bone mass with normal mineralization, whereas osteomalacia is defective mineralization of normal osteoid, usually from vitamin D deficiency. Calcium, phosphate and alkaline phosphatase are normal in osteoporosis but deranged in osteomalacia.",
    choices: [
      { text: "Reduced bone mass with normal mineralization, versus defective mineralization", isCorrect: true },
      { text: "Defective mineralization, versus reduced bone mass" },
      { text: "Both feature identical laboratory abnormalities" },
      { text: "Osteoporosis is always caused by vitamin D deficiency" },
      { text: "Osteomalacia occurs only in postmenopausal women" },
    ],
  },
  {
    stem: "True or False: Paget disease of bone features disorganized bone remodeling with a characteristic mosaic pattern of cement lines and a raised alkaline phosphatase.",
    type: "TRUE_FALSE",
    topic: "Musculoskeletal Pathology",
    explanation:
      "True. Excessive osteoclastic resorption followed by disordered formation produces thick but structurally weak bone. Osteosarcoma developing in a Paget bone is a rare but grave complication.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Avascular necrosis of the femoral head is associated with which combination of risk factors?",
    topic: "Musculoskeletal Pathology",
    explanation:
      "Corticosteroid use, alcohol excess, sickle cell disease, trauma and decompression sickness all cause it, converging on impaired blood supply to the femoral head. The end result is subchondral coagulative necrosis with collapse.",
    choices: [
      { text: "Corticosteroids, alcohol, sickle cell disease, trauma and decompression sickness", isCorrect: true },
      { text: "Vitamin C deficiency and hypothyroidism" },
      { text: "Hyperparathyroidism and hyperthyroidism only" },
      { text: "Obesity and repetitive low-impact exercise alone" },
      { text: "Iron deficiency and chronic renal failure only" },
    ],
  },
  {
    stem: "Duchenne muscular dystrophy shows which pathologic finding on muscle biopsy, and which protein is absent?",
    topic: "Musculoskeletal Pathology",
    explanation:
      "Absent dystrophin destabilizes the sarcolemma during contraction, producing cycles of necrosis and regeneration with eventual fibrofatty replacement. Becker dystrophy has reduced but present dystrophin, giving a milder course.",
    choices: [
      { text: "Necrosis and regeneration with fibrofatty replacement — absent dystrophin", isCorrect: true },
      { text: "Ragged red fibers — mitochondrial DNA mutation" },
      { text: "Perifascicular atrophy — dermatomyositis" },
      { text: "Rimmed vacuoles — inclusion body myositis" },
      { text: "Type 2 fiber atrophy — corticosteroid myopathy" },
    ],
  },

  /* ══════════════ HEMATOLYMPHOID ══════════════ */
  {
    stem: "A lymph node biopsy shows large binucleate cells with prominent eosinophilic nucleoli in a mixed inflammatory background. Which diagnosis and which cell?",
    topic: "Hematolymphoid Pathology",
    explanation:
      "Reed-Sternberg cells define Hodgkin lymphoma, and the surrounding infiltrate is reactive rather than neoplastic — the malignant cells are a minority of the mass. Contiguous nodal spread distinguishes it clinically from non-Hodgkin lymphoma.",
    choices: [
      { text: "Hodgkin lymphoma — Reed-Sternberg cells", isCorrect: true },
      { text: "Burkitt lymphoma — starry sky macrophages" },
      { text: "Follicular lymphoma — centrocytes" },
      { text: "Mantle cell lymphoma — cyclin D1 positive cells" },
      { text: "Anaplastic large cell lymphoma — hallmark cells" },
    ],
  },
  {
    stem: "A child has a rapidly enlarging jaw mass. Biopsy shows a starry sky pattern with a very high proliferation index. Which lymphoma and translocation?",
    topic: "Hematolymphoid Pathology",
    explanation:
      "Burkitt lymphoma with t(8;14) deregulates MYC, giving one of the highest proliferation rates of any human tumor. The starry sky appearance comes from macrophages clearing rapid apoptotic debris, and tumor lysis risk is correspondingly high.",
    choices: [
      { text: "Burkitt lymphoma — t(8;14) involving MYC", isCorrect: true },
      { text: "Follicular lymphoma — t(14;18) involving BCL2" },
      { text: "Mantle cell lymphoma — t(11;14) involving cyclin D1" },
      { text: "CML — t(9;22) involving BCR-ABL" },
      { text: "APL — t(15;17) involving PML-RARA" },
    ],
  },
  {
    stem: "Which peripheral smear findings are matched correctly? Select all that apply.",
    type: "MULTI",
    topic: "Hematolymphoid Pathology",
    explanation:
      "Schistocytes indicate microangiopathic hemolysis, Howell-Jolly bodies hyposplenism, and basophilic stippling lead poisoning or thalassemia. Target cells suggest liver disease, thalassemia or hyposplenism rather than iron overload specifically, and spherocytes point to immune hemolysis or hereditary spherocytosis rather than B12 deficiency.",
    choices: [
      { text: "Schistocytes — microangiopathic hemolysis", isCorrect: true },
      { text: "Howell-Jolly bodies — hyposplenism", isCorrect: true },
      { text: "Basophilic stippling — lead poisoning or thalassemia", isCorrect: true },
      { text: "Target cells — hereditary hemochromatosis" },
      { text: "Spherocytes — vitamin B12 deficiency" },
    ],
  },
  {
    stem: "A 68-year-old man has back pain, anemia, calcium of 11.9 mg/dL, creatinine 2.4 mg/dL and lytic skull lesions. Which diagnosis and which protein deposits in the kidney?",
    topic: "Hematolymphoid Pathology",
    explanation:
      "Multiple myeloma produces monoclonal light chains that form casts in tubules, causing myeloma kidney. The CRAB features — calcium, renal, anemia, bone — define the end-organ damage that distinguishes myeloma from smoldering disease.",
    choices: [
      { text: "Multiple myeloma — monoclonal free light chains", isCorrect: true },
      { text: "Waldenström macroglobulinemia — IgM pentamers" },
      { text: "Chronic lymphocytic leukemia — CD5 positive B cells" },
      { text: "Amyloidosis — serum amyloid A protein" },
      { text: "Metastatic prostate carcinoma — PSA deposits" },
    ],
  },
  {
    stem: "True or False: Acute leukemia is defined by 20% or more blasts in blood or marrow, while chronic leukemias show more mature cells.",
    type: "TRUE_FALSE",
    topic: "Hematolymphoid Pathology",
    explanation:
      "True. The blast threshold separates acute from chronic disease and drives urgency, since acute leukemia causes marrow failure within weeks. Auer rods, when present, indicate myeloid lineage.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Why does chronic myeloid leukemia have a LOW leukocyte alkaline phosphatase while a leukemoid reaction has a high one?",
    topic: "Hematolymphoid Pathology",
    explanation:
      "CML neutrophils are clonal and functionally abnormal with reduced LAP, whereas a leukemoid reaction consists of normal neutrophils responding to infection with high LAP. This distinguishes the two despite similar white cell counts.",
    choices: [
      { text: "CML neutrophils are clonal and functionally abnormal", isCorrect: true },
      { text: "CML neutrophils are more mature than reactive neutrophils" },
      { text: "Leukemoid reaction neutrophils are clonal" },
      { text: "LAP measures only lymphocyte enzyme content" },
      { text: "The difference reflects platelet count rather than neutrophil function" },
    ],
  },
  {
    stem: "Splenomegaly with hypersplenism produces which hematologic consequence?",
    topic: "Hematolymphoid Pathology",
    explanation:
      "An enlarged spleen sequesters and destroys circulating cells, causing cytopenias affecting any or all lineages despite an active marrow. Portal hypertension from cirrhosis is a common cause, tying back to hepatic pathology.",
    choices: [
      { text: "Cytopenias from sequestration and destruction despite active marrow", isCorrect: true },
      { text: "Polycythemia from increased red cell release" },
      { text: "Thrombocytosis from platelet mobilization" },
      { text: "Neutrophilia from marginated pool release" },
      { text: "No hematologic effect" },
    ],
  },
  {
    stem: "Amyloid deposits show which staining property, and how does AL amyloid differ in origin from AA amyloid?",
    topic: "Hematolymphoid Pathology",
    explanation:
      "Congo red staining gives apple-green birefringence under polarized light regardless of subtype. AL amyloid derives from immunoglobulin light chains in plasma cell dyscrasias, while AA derives from serum amyloid A in chronic inflammation.",
    choices: [
      { text: "Apple-green birefringence with Congo red; AL from light chains, AA from serum amyloid A", isCorrect: true },
      { text: "Prussian blue positivity; AL from iron, AA from copper" },
      { text: "PAS positivity; both derive from immunoglobulin" },
      { text: "Silver positivity; AL from collagen, AA from elastin" },
      { text: "No special stain distinguishes amyloid from collagen" },
    ],
  },

  /* ══════════════ BREAST & FEMALE GENITAL ══════════════ */
  {
    stem: "A breast mass is hard and fixed with skin dimpling. Histology shows infiltrating cells in cords within dense fibrous stroma. Which feature explains the clinical texture?",
    topic: "Breast & Female Genital Pathology",
    explanation:
      "Desmoplasia — tumor-induced fibrous stroma — makes the mass hard and fixed and causes the skin retraction as Cooper ligaments are tethered. The firmness comes from the host response rather than the tumor cells themselves.",
    choices: [
      { text: "Desmoplastic stromal reaction tethering Cooper ligaments", isCorrect: true },
      { text: "Central necrosis softening the tumor" },
      { text: "Mucin production by the tumor cells" },
      { text: "Lymphocytic infiltration of the tumor bed" },
      { text: "Calcification of the tumor capsule" },
    ],
  },
  {
    stem: "Which breast lesion is characterized by loss of E-cadherin and a single-file infiltrative pattern?",
    topic: "Breast & Female Genital Pathology",
    explanation:
      "Invasive lobular carcinoma loses E-cadherin, so cells fail to adhere and infiltrate in single file. This also makes it harder to detect on mammography and more often bilateral or multifocal.",
    choices: [
      { text: "Invasive lobular carcinoma", isCorrect: true },
      { text: "Invasive ductal carcinoma of no special type" },
      { text: "Medullary carcinoma" },
      { text: "Mucinous carcinoma" },
      { text: "Tubular carcinoma" },
    ],
  },
  {
    stem: "Which are recognized features of high-grade cervical intraepithelial neoplasia? Select all that apply.",
    type: "MULTI",
    topic: "Breast & Female Genital Pathology",
    explanation:
      "High-grade CIN shows atypia occupying more than the lower third of the epithelium, mitoses above the basal layer, and is driven by persistent high-risk HPV with E6 and E7 activity. The basement membrane remains intact — breaching it defines invasion — and koilocytes are more typical of low-grade change.",
    choices: [
      { text: "Atypia extending above the lower third of the epithelium", isCorrect: true },
      { text: "Mitotic figures above the basal layer", isCorrect: true },
      { text: "Persistent high-risk HPV with E6 and E7 expression", isCorrect: true },
      { text: "Invasion through the basement membrane" },
      { text: "Prominent koilocytosis as the defining feature" },
    ],
  },
  {
    stem: "Endometrial hyperplasia with atypia carries what significance?",
    topic: "Breast & Female Genital Pathology",
    explanation:
      "Atypical hyperplasia is a direct precursor of endometrioid adenocarcinoma, with a substantial rate of progression and frequent coexisting carcinoma at hysterectomy. Unopposed estrogen is the usual driver, so the risk factors mirror those of endometrial cancer.",
    choices: [
      { text: "A direct precursor to endometrioid adenocarcinoma", isCorrect: true },
      { text: "A benign finding with no malignant potential" },
      { text: "A marker of ovarian rather than endometrial disease" },
      { text: "An indication of progesterone excess" },
      { text: "A normal variant in postmenopausal women" },
    ],
  },
  {
    stem: "True or False: A Krukenberg tumor is a bilateral ovarian metastasis, classically from gastric signet-ring cell carcinoma.",
    type: "TRUE_FALSE",
    topic: "Breast & Female Genital Pathology",
    explanation:
      "True. Mucin-filled signet-ring cells within ovarian stroma are the defining finding, and bilateral ovarian masses should always prompt a search for a gastrointestinal primary rather than assuming ovarian origin.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which ovarian tumor type is most common overall, and which marker is used for monitoring?",
    topic: "Breast & Female Genital Pathology",
    explanation:
      "Surface epithelial tumors, particularly serous, account for most ovarian neoplasms, and CA 125 is used for monitoring rather than screening. Psammoma bodies are characteristic of serous tumors.",
    choices: [
      { text: "Surface epithelial (serous) — CA 125 for monitoring", isCorrect: true },
      { text: "Germ cell — AFP for screening" },
      { text: "Sex cord stromal — inhibin for population screening" },
      { text: "Metastatic — CEA for diagnosis" },
      { text: "Surface epithelial — beta-hCG for monitoring" },
    ],
  },
  {
    stem: "A woman has heavy menstrual bleeding and a well-circumscribed whorled uterine mass. Which tumor, and what distinguishes it from its malignant counterpart?",
    topic: "Breast & Female Genital Pathology",
    explanation:
      "Leiomyoma is well circumscribed with a whorled cut surface and low mitotic activity. Leiomyosarcoma shows infiltrative margins, necrosis, cytologic atypia and high mitotic count — the three features assessed together.",
    choices: [
      { text: "Leiomyoma — circumscribed with low mitotic activity and no necrosis", isCorrect: true },
      { text: "Leiomyosarcoma — circumscribed with low mitotic activity" },
      { text: "Endometrial polyp — infiltrative margins" },
      { text: "Adenomyosis — discrete encapsulated mass" },
      { text: "Endometrial stromal sarcoma — whorled and benign" },
    ],
  },
  {
    stem: "Ductal carcinoma in situ differs from invasive ductal carcinoma in which crucial respect?",
    topic: "Breast & Female Genital Pathology",
    explanation:
      "DCIS is confined by the basement membrane, so it cannot metastasize; invasion through it confers metastatic potential. This is why DCIS does not require axillary staging in the same way — the entire prognosis hinges on that membrane.",
    choices: [
      { text: "DCIS is confined by the basement membrane and cannot metastasize", isCorrect: true },
      { text: "DCIS has already spread to axillary nodes by definition" },
      { text: "DCIS shows greater nuclear atypia than invasive disease" },
      { text: "DCIS is never detected on mammography" },
      { text: "DCIS requires no treatment or follow-up" },
    ],
  },

  /* ══════════════ DERMATOPATHOLOGY ══════════════ */
  {
    stem: "Which histologic feature most strongly predicts prognosis in cutaneous melanoma?",
    topic: "Dermatopathology",
    explanation:
      "Breslow depth — vertical thickness in millimeters — is the strongest predictor and drives both staging and surgical margins. Diameter and color guide clinical suspicion but do not determine prognosis.",
    choices: [
      { text: "Breslow depth in millimeters", isCorrect: true },
      { text: "Maximum surface diameter" },
      { text: "Degree of pigmentation" },
      { text: "Anatomic site alone" },
      { text: "Presence of surrounding erythema" },
    ],
  },
  {
    stem: "Basal cell carcinoma differs from squamous cell carcinoma of skin in which important respect?",
    topic: "Dermatopathology",
    explanation:
      "Basal cell carcinoma is locally invasive with pearly rolled borders and telangiectasia but rarely metastasizes, whereas cutaneous squamous cell carcinoma carries a real if modest metastatic risk. That difference shapes how aggressively each is treated.",
    choices: [
      { text: "BCC is locally destructive but rarely metastasizes; SCC can metastasize", isCorrect: true },
      { text: "BCC metastasizes commonly; SCC never does" },
      { text: "Both metastasize at identical rates" },
      { text: "BCC arises only on non-sun-exposed skin" },
      { text: "SCC never arises in chronic wounds" },
    ],
  },
  {
    stem: "Which skin lesions are correctly matched to their association? Select all that apply.",
    type: "MULTI",
    topic: "Dermatopathology",
    explanation:
      "Actinic keratosis is a precursor of squamous cell carcinoma, seborrheic keratosis is benign with a stuck-on appearance, and the abrupt appearance of many seborrheic keratoses — the Leser-Trélat sign — may be paraneoplastic. Dysplastic nevi are melanoma precursors rather than benign, and pyogenic granuloma is a vascular proliferation rather than an infection.",
    choices: [
      { text: "Actinic keratosis — precursor of squamous cell carcinoma", isCorrect: true },
      { text: "Seborrheic keratosis — benign, stuck-on appearance", isCorrect: true },
      { text: "Sudden eruption of seborrheic keratoses — possible internal malignancy", isCorrect: true },
      { text: "Dysplastic nevus — no relationship to melanoma" },
      { text: "Pyogenic granuloma — bacterial infection requiring antibiotics" },
    ],
  },
  {
    stem: "Psoriasis shows which histologic triad?",
    topic: "Dermatopathology",
    explanation:
      "Acanthosis with parakeratosis, elongated rete ridges and Munro microabscesses of neutrophils in the stratum corneum define psoriasis. Thinning of the suprapapillary plate over dilated capillaries explains the pinpoint bleeding of the Auspitz sign.",
    choices: [
      { text: "Acanthosis with parakeratosis, elongated rete ridges, Munro microabscesses", isCorrect: true },
      { text: "Spongiosis with eosinophils and intact granular layer" },
      { text: "Interface dermatitis with sawtooth rete ridges" },
      { text: "Subepidermal blister with linear IgA" },
      { text: "Granulomatous inflammation of the dermis" },
    ],
  },
  {
    stem: "True or False: Pemphigus vulgaris produces intraepidermal blisters from antibodies against desmoglein, while bullous pemphigoid produces subepidermal blisters from antibodies against hemidesmosomes.",
    type: "TRUE_FALSE",
    topic: "Dermatopathology",
    explanation:
      "True. The level of the split explains the clinical difference: pemphigus blisters are flaccid and rupture easily with a positive Nikolsky sign, while pemphigoid blisters are tense because the roof is full-thickness epidermis.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "A patient develops widespread skin sloughing with mucosal involvement two weeks after starting a new anticonvulsant. Which pathology?",
    topic: "Dermatopathology",
    explanation:
      "Toxic epidermal necrolysis involves full-thickness keratinocyte apoptosis with dermoepidermal separation, and the loss of barrier function makes it a medical emergency comparable to a large burn. Immediate withdrawal of the drug is the critical step.",
    choices: [
      { text: "Full-thickness keratinocyte apoptosis with epidermal detachment", isCorrect: true },
      { text: "Intraepidermal acantholysis from desmoglein antibodies" },
      { text: "Spongiotic dermatitis with eosinophils" },
      { text: "Granulomatous panniculitis" },
      { text: "Vasculitis of dermal venules with palpable purpura" },
    ],
  },
  {
    stem: "Why does chronic sun exposure predispose to skin cancer at a molecular level?",
    topic: "Dermatopathology",
    explanation:
      "UVB generates pyrimidine dimers repaired by nucleotide excision repair, and accumulated unrepaired damage produces driver mutations including in TP53. Xeroderma pigmentosum, where that repair pathway fails, proves the mechanism clinically.",
    choices: [
      { text: "Pyrimidine dimers accumulating when nucleotide excision repair is overwhelmed", isCorrect: true },
      { text: "Double-strand breaks repaired by homologous recombination" },
      { text: "Direct thermal denaturation of keratinocyte proteins" },
      { text: "Depletion of melanin from the basal layer" },
      { text: "Vitamin D toxicity within the epidermis" },
    ],
  },

  /* ══════════════ INTEGRATED REASONING ══════════════ */
  {
    stem: "A 58-year-old woman with rheumatoid arthritis of 20 years develops proteinuria of 6 g/day. Renal biopsy shows Congo red positive deposits. Which amyloid type and what does this illustrate?",
    topic: "Integrated Clinicopathologic Reasoning",
    explanation:
      "AA amyloid derives from serum amyloid A, an acute phase reactant produced continuously in chronic inflammation. It illustrates how a process from the inflammation set produces organ failure decades later — the same mediator, a different timescale.",
    choices: [
      { text: "AA amyloid from sustained serum amyloid A production", isCorrect: true },
      { text: "AL amyloid from a plasma cell clone" },
      { text: "Transthyretin amyloid from a hepatic mutation" },
      { text: "Beta-2 microglobulin amyloid from dialysis" },
      { text: "Beta-amyloid from APP cleavage" },
    ],
  },
  {
    stem: "A patient with metastatic small cell lung cancer starting chemotherapy develops potassium 6.4 mEq/L, phosphorus 7.8 mg/dL, uric acid 14 mg/dL and calcium 6.9 mg/dL. What has happened and what is the immediate priority?",
    topic: "Integrated Clinicopathologic Reasoning",
    explanation:
      "Tumor lysis syndrome from massive cell death releases intracellular contents, and hyperkalemia is the immediate threat to life through arrhythmia. Aggressive hydration with rasburicase follows, but the potassium is treated first.",
    choices: [
      { text: "Tumor lysis syndrome — treat hyperkalemia first, then hydrate and give rasburicase", isCorrect: true },
      { text: "Tumor lysis syndrome — replace calcium first" },
      { text: "Acute kidney injury from contrast — withhold fluids" },
      { text: "Hypercalcemia of malignancy — give a bisphosphonate" },
      { text: "SIADH — restrict fluids" },
    ],
  },
  {
    stem: "Which mechanisms link chronic inflammation to malignancy? Select all that apply.",
    type: "MULTI",
    topic: "Integrated Clinicopathologic Reasoning",
    explanation:
      "Sustained proliferation increases replication errors, reactive oxygen species damage DNA directly, growth factors and cytokines provide survival signals, and metaplasia may progress through dysplasia. Reduced cell turnover and enhanced DNA repair would lower risk, not raise it.",
    choices: [
      { text: "Sustained proliferation increasing the chance of replication errors", isCorrect: true },
      { text: "Reactive oxygen species causing direct DNA damage", isCorrect: true },
      { text: "Metaplasia progressing through dysplasia to carcinoma", isCorrect: true },
      { text: "Reduced cell turnover in inflamed tissue" },
      { text: "Enhanced DNA repair capacity during inflammation" },
    ],
  },
  {
    stem: "A patient with cirrhosis has hemoglobin 7.8 g/dL, platelets 62,000/µL, INR 1.9 and albumin 2.4 g/dL. Which single organ failure explains all four abnormalities?",
    topic: "Integrated Clinicopathologic Reasoning",
    explanation:
      "The liver synthesizes clotting factors and albumin, while portal hypertension causes splenic sequestration of platelets and variceal bleeding causes anemia. One failing organ produces an apparently scattered panel — recognizing that prevents four separate investigations.",
    choices: [
      { text: "Hepatic failure with portal hypertension", isCorrect: true },
      { text: "Primary bone marrow failure" },
      { text: "Isolated autoimmune hemolysis" },
      { text: "Disseminated intravascular coagulation alone" },
      { text: "Vitamin K deficiency alone" },
    ],
  },
  {
    stem: "True or False: Recognizing that a lesion is metaplastic rather than dysplastic changes management from intervention to surveillance.",
    type: "TRUE_FALSE",
    topic: "Integrated Clinicopathologic Reasoning",
    explanation:
      "True. Metaplasia is an adaptive response carrying elevated but not immediate risk, whereas dysplasia is a genuine precursor warranting treatment. Barrett esophagus with and without dysplasia is the clearest example of that fork in management.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "A 70-year-old man has a large anterior myocardial infarction and, on day 7, sudden hypotension with distended neck veins and muffled heart sounds. Which complication, and why at this moment?",
    topic: "Integrated Clinicopathologic Reasoning",
    explanation:
      "Free wall rupture with tamponade peaks at 5 to 10 days, when macrophages have cleared necrotic myocardium but granulation tissue has not yet provided strength. It is the same mechanical trough that governs wound dehiscence — one principle, two organs.",
    choices: [
      { text: "Free wall rupture with tamponade, during the trough in wall strength", isCorrect: true },
      { text: "Ventricular aneurysm from mature scar" },
      { text: "Reinfarction from stent thrombosis" },
      { text: "Dressler syndrome from autoimmune pericarditis" },
      { text: "Papillary muscle rupture causing aortic regurgitation" },
    ],
  },
  {
    stem: "A patient with poorly controlled diabetes has a non-healing foot ulcer, proteinuria, and reduced sensation to monofilament testing. Which single pathologic process underlies all three?",
    topic: "Integrated Clinicopathologic Reasoning",
    explanation:
      "Chronic hyperglycemia drives non-enzymatic glycation and microvascular disease, damaging nerves, glomeruli and the wound bed alike. Understanding it as one process explains why glycemic control affects all three rather than requiring separate treatments.",
    choices: [
      { text: "Hyperglycemia-driven microvascular disease and protein glycation", isCorrect: true },
      { text: "Three independent coincidental conditions" },
      { text: "Autoimmune destruction of multiple organs" },
      { text: "Amyloid deposition in nerve, kidney and skin" },
      { text: "Chronic infection seeding multiple sites" },
    ],
  },
];
