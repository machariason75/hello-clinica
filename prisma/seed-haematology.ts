/**
 * CONTENT WAVE 16 — Haematology
 *
 * 60 original questions:
 *   PRACTICE  Set 1 (30) · Set 2 (30)
 *   EXAMS     Exam 1 (30, 40 min) · Exam 2 (60, 75 min)
 *
 * Answer shuffling built in.
 *
 * NOTE: the taxonomy had no Haematology section, so this seed CREATES one under
 * Clinical Specialties → Internal Medicine before adding the quizzes. That is
 * safe and idempotent — re-running simply finds the existing section.
 *
 * Run:  npx tsx prisma/seed-haematology.ts
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Q = {
  stem: string;
  topic: string;
  explanation: string;
  choices: { text: string; isCorrect: boolean }[];
};

/* ═══════════ SET 1 — Red cells, iron, haemoglobinopathy ═══════════ */

const SET1: Q[] = [
  {
    stem: "Which indices define a microcytic hypochromic anaemia, and what is the commonest cause?",
    topic: "Anaemia",
    explanation:
      "Low MCV with low MCH — most often iron deficiency. Thalassaemia trait and anaemia of chronic disease also produce microcytosis, and sideroblastic anaemia rarely. Classifying by MCV first is what makes the differential manageable.",
    choices: [
      { text: "Low MCV and MCH — usually iron deficiency", isCorrect: true },
      { text: "High MCV — usually B12 deficiency", isCorrect: false },
      { text: "Normal MCV with low reticulocytes", isCorrect: false },
      { text: "High MCV with high reticulocytes", isCorrect: false },
    ],
  },
  {
    stem: "Which single test best confirms iron deficiency, and what limits it?",
    topic: "Iron Metabolism",
    explanation:
      "Serum ferritin — low ferritin is diagnostic. Its limitation is that ferritin is an acute phase reactant, so inflammation, infection or malignancy can raise it into the normal range despite genuine deficiency. Transferrin saturation helps when inflammation is present.",
    choices: [
      { text: "Ferritin — but it rises with inflammation and can mask deficiency", isCorrect: true },
      { text: "Serum iron alone, which is reliable at any time of day", isCorrect: false },
      { text: "Haemoglobin concentration", isCorrect: false },
      { text: "Mean cell volume alone", isCorrect: false },
    ],
  },
  {
    stem: "How does anaemia of chronic disease differ biochemically from iron deficiency?",
    topic: "Iron Metabolism",
    explanation:
      "Both show low serum iron, but chronic disease has NORMAL or raised ferritin with reduced transferrin, whereas iron deficiency has low ferritin and raised transferrin. Hepcidin traps iron in stores during inflammation — the iron is present but unavailable.",
    choices: [
      { text: "Chronic disease has normal or high ferritin with low transferrin; deficiency the reverse", isCorrect: true },
      { text: "Both show identical iron studies", isCorrect: false },
      { text: "Chronic disease shows very low ferritin", isCorrect: false },
      { text: "Iron deficiency shows raised ferritin", isCorrect: false },
    ],
  },
  {
    stem: "A man over 50 has iron deficiency anaemia with no obvious bleeding. What must be arranged?",
    topic: "Anaemia",
    explanation:
      "Investigation of the upper AND lower gastrointestinal tract, because occult malignancy is the concern. Iron replacement without investigation is a serious omission — correcting the number while leaving the cause untreated is what allows a colorectal cancer to progress.",
    choices: [
      { text: "Upper and lower GI endoscopy to exclude malignancy", isCorrect: true },
      { text: "Oral iron and repeat the blood count in a year", isCorrect: false },
      { text: "Dietary advice alone", isCorrect: false },
      { text: "Intravenous iron without investigation", isCorrect: false },
    ],
  },
  {
    stem: "Which two deficiencies cause megaloblastic macrocytic anaemia?",
    topic: "Anaemia",
    explanation:
      "Vitamin B12 and folate — both impair DNA synthesis, so nuclear maturation lags behind cytoplasmic, producing large cells and hypersegmented neutrophils. Non-megaloblastic macrocytosis comes from alcohol, liver disease, hypothyroidism and some drugs.",
    choices: [
      { text: "Vitamin B12 and folate", isCorrect: true },
      { text: "Iron and vitamin C", isCorrect: false },
      { text: "Vitamin D and calcium", isCorrect: false },
      { text: "Vitamin K and zinc", isCorrect: false },
    ],
  },
  {
    stem: "Why must B12 be checked and replaced BEFORE giving folate?",
    topic: "Anaemia",
    explanation:
      "Folate corrects the anaemia but not the neurological damage of B12 deficiency, which can then progress irreversibly — subacute combined degeneration of the cord. The blood count improves while the spinal cord deteriorates, which is precisely why it is dangerous.",
    choices: [
      { text: "Folate corrects the anaemia while allowing B12 neuropathy to progress irreversibly", isCorrect: true },
      { text: "Folate blocks B12 absorption permanently", isCorrect: false },
      { text: "The order makes no clinical difference", isCorrect: false },
      { text: "Folate causes haemolysis in B12 deficiency", isCorrect: false },
    ],
  },
  {
    stem: "What is the mechanism of pernicious anaemia?",
    topic: "Anaemia",
    explanation:
      "Autoimmune destruction of gastric parietal cells and antibodies against intrinsic factor, so B12 cannot be absorbed in the terminal ileum. Because the failure is in absorption, oral replacement is unreliable and parenteral B12 is used. It also raises gastric cancer risk.",
    choices: [
      { text: "Autoimmune loss of intrinsic factor preventing B12 absorption", isCorrect: true },
      { text: "Dietary B12 deficiency alone", isCorrect: false },
      { text: "Failure of folate metabolism", isCorrect: false },
      { text: "Excessive B12 excretion by the kidney", isCorrect: false },
    ],
  },
  {
    stem: "Which findings indicate that an anaemia is haemolytic?",
    topic: "Haemolysis",
    explanation:
      "Raised reticulocytes and unconjugated bilirubin, raised LDH, and low or absent haptoglobin — which binds free haemoglobin and is consumed. The reticulocyte response is what distinguishes haemolysis from marrow failure, where reticulocytes are LOW.",
    choices: [
      { text: "High reticulocytes and LDH, raised unconjugated bilirubin, low haptoglobin", isCorrect: true },
      { text: "Low reticulocytes with high haptoglobin", isCorrect: false },
      { text: "Raised conjugated bilirubin with normal LDH", isCorrect: false },
      { text: "Normal reticulocytes with low LDH", isCorrect: false },
    ],
  },
  {
    stem: "What does a positive direct antiglobulin (Coombs) test indicate?",
    topic: "Haemolysis",
    explanation:
      "Antibody or complement coating the red cells — that is, IMMUNE-mediated haemolysis. A negative test in the presence of haemolysis points to a non-immune cause such as mechanical destruction, membrane defects, enzyme deficiency or a haemoglobinopathy.",
    choices: [
      { text: "Immune-mediated haemolysis, with antibody or complement on the red cells", isCorrect: true },
      { text: "Mechanical destruction of red cells", isCorrect: false },
      { text: "Iron deficiency", isCorrect: false },
      { text: "Bone marrow failure", isCorrect: false },
    ],
  },
  {
    stem: "Which enzyme deficiency causes haemolysis after fava beans, infection or certain drugs?",
    topic: "Haemolysis",
    explanation:
      "Glucose-6-phosphate dehydrogenase deficiency. G6PD maintains glutathione for oxidative defence, so oxidant stress lyses the cells — with bite cells and Heinz bodies on the film. It is X-linked and common in malaria-endemic regions. Primaquine is a classic trigger, which is why G6PD is checked first.",
    choices: [
      { text: "G6PD deficiency", isCorrect: true },
      { text: "Pyruvate kinase deficiency", isCorrect: false },
      { text: "Hexokinase deficiency", isCorrect: false },
      { text: "Adenosine deaminase deficiency", isCorrect: false },
    ],
  },
  {
    stem: "A patient has haemolysis with spherocytes on the film and a NEGATIVE Coombs test. What is the likely diagnosis?",
    topic: "Haemolysis",
    explanation:
      "Hereditary spherocytosis — a red cell membrane defect. The Coombs test is the discriminator: spherocytes with a POSITIVE test indicate autoimmune haemolysis, with a negative test they indicate a membrane disorder. Splenectomy is effective because the spleen is where they are destroyed.",
    choices: [
      { text: "Hereditary spherocytosis", isCorrect: true },
      { text: "Autoimmune haemolytic anaemia", isCorrect: false },
      { text: "G6PD deficiency", isCorrect: false },
      { text: "Iron deficiency", isCorrect: false },
    ],
  },
  {
    stem: "What is the molecular basis of sickle cell disease?",
    topic: "Haemoglobinopathy",
    explanation:
      "A single point mutation replacing glutamic acid with valine at position 6 of the beta globin chain. Deoxygenated HbS polymerises, distorting the cell into a sickle shape that occludes microvessels and haemolyses. One base change explains the entire disease.",
    choices: [
      { text: "A point mutation substituting valine for glutamic acid in beta globin", isCorrect: true },
      { text: "Deletion of the alpha globin genes", isCorrect: false },
      { text: "Reduced beta globin production without structural change", isCorrect: false },
      { text: "Failure of haem synthesis", isCorrect: false },
    ],
  },
  {
    stem: "What precipitates a sickle cell crisis?",
    topic: "Haemoglobinopathy",
    explanation:
      "Hypoxia, dehydration, infection, cold, acidosis and stress — anything promoting deoxygenation or sludging. Management is analgesia (often requiring opioids and frequently under-treated), oxygen, hydration and treating infection. Pain should be taken at face value.",
    choices: [
      { text: "Hypoxia, dehydration, infection, cold and acidosis", isCorrect: true },
      { text: "High oxygen tension", isCorrect: false },
      { text: "Overhydration", isCorrect: false },
      { text: "Warm environments only", isCorrect: false },
    ],
  },
  {
    stem: "Why do patients with sickle cell disease need penicillin prophylaxis and additional vaccination?",
    topic: "Haemoglobinopathy",
    explanation:
      "Repeated splenic infarction causes functional hyposplenism, leaving them vulnerable to encapsulated organisms — pneumococcus, meningococcus, Haemophilus. Overwhelming pneumococcal sepsis is a leading cause of death in childhood, and prophylaxis substantially reduces it.",
    choices: [
      { text: "Functional hyposplenism from splenic infarction leaves them vulnerable to encapsulated organisms", isCorrect: true },
      { text: "The medication itself suppresses immunity", isCorrect: false },
      { text: "They have neutropenia", isCorrect: false },
      { text: "Antibodies are destroyed by haemolysis", isCorrect: false },
    ],
  },
  {
    stem: "How does thalassaemia differ mechanistically from sickle cell disease?",
    topic: "Haemoglobinopathy",
    explanation:
      "Thalassaemia is a QUANTITATIVE defect — reduced production of normal globin chains — whereas sickle cell is QUALITATIVE, a structurally abnormal chain. Chain imbalance causes ineffective erythropoiesis and marrow expansion, hence the skeletal changes seen in severe untreated disease.",
    choices: [
      { text: "Thalassaemia reduces production of normal chains; sickle produces an abnormal chain", isCorrect: true },
      { text: "Thalassaemia produces a structurally abnormal globin", isCorrect: false },
      { text: "Both are qualitative defects", isCorrect: false },
      { text: "Thalassaemia affects only haem synthesis", isCorrect: false },
    ],
  },
  {
    stem: "Why do regularly transfused patients need iron chelation?",
    topic: "Transfusion",
    explanation:
      "The body has no mechanism for excreting excess iron, so repeated transfusion causes overload affecting heart, liver and endocrine organs. Cardiac siderosis is the leading cause of death in transfusion-dependent thalassaemia, and chelation directly changes survival.",
    choices: [
      { text: "There is no route for excreting excess iron, and overload damages heart, liver and endocrine organs", isCorrect: true },
      { text: "Chelation prevents transfusion reactions", isCorrect: false },
      { text: "It improves red cell survival", isCorrect: false },
      { text: "It prevents alloimmunisation", isCorrect: false },
    ],
  },
  {
    stem: "A patient becomes febrile and hypotensive minutes into a transfusion, with back pain and dark urine. What has happened?",
    topic: "Transfusion",
    explanation:
      "Acute haemolytic transfusion reaction — usually ABO incompatibility from a clerical or identification error. Stop the transfusion immediately, resuscitate, and check the patient and unit identity. It is the most feared reaction and is almost always preventable.",
    choices: [
      { text: "Acute haemolytic reaction from ABO incompatibility — stop the transfusion at once", isCorrect: true },
      { text: "Simple febrile non-haemolytic reaction — slow the rate", isCorrect: false },
      { text: "Fluid overload — give a diuretic", isCorrect: false },
      { text: "Mild allergic reaction — give an antihistamine", isCorrect: false },
    ],
  },
  {
    stem: "A patient becomes breathless with raised jugular venous pressure during transfusion. What is the likely complication?",
    topic: "Transfusion",
    explanation:
      "Transfusion-associated circulatory overload — commoner in elderly patients and those with cardiac or renal impairment. It is distinguished from TRALI by fluid overload signs and response to diuretics; TRALI presents with non-cardiogenic pulmonary oedema and normal filling pressures.",
    choices: [
      { text: "Circulatory overload — distinguished from TRALI by fluid overload signs", isCorrect: true },
      { text: "TRALI, which shows raised JVP", isCorrect: false },
      { text: "Acute haemolytic reaction", isCorrect: false },
      { text: "Bacterial contamination", isCorrect: false },
    ],
  },
  {
    stem: "Which patients require irradiated blood products, and why?",
    topic: "Transfusion",
    explanation:
      "Severely immunocompromised patients, including some transplant and chemotherapy recipients, to prevent transfusion-associated graft-versus-host disease. Irradiation inactivates donor lymphocytes which would otherwise engraft and attack the recipient — a condition that is almost always fatal.",
    choices: [
      { text: "The severely immunocompromised — to prevent transfusion-associated graft-versus-host disease", isCorrect: true },
      { text: "All patients over 65", isCorrect: false },
      { text: "Patients with iron overload", isCorrect: false },
      { text: "Anyone receiving more than one unit", isCorrect: false },
    ],
  },
  {
    stem: "What is the significance of a raised reticulocyte count in anaemia?",
    topic: "Anaemia",
    explanation:
      "It indicates the marrow is responding appropriately — pointing toward blood loss or haemolysis rather than production failure. A LOW reticulocyte count with anaemia suggests marrow failure, deficiency states, or chronic disease. It is the first thing to look at after the MCV.",
    choices: [
      { text: "An appropriate marrow response, suggesting blood loss or haemolysis", isCorrect: true },
      { text: "Bone marrow failure", isCorrect: false },
      { text: "Iron deficiency specifically", isCorrect: false },
      { text: "It carries no diagnostic value", isCorrect: false },
    ],
  },
  {
    stem: "A patient has anaemia with low white cells and low platelets. What does pancytopenia suggest?",
    topic: "Marrow Failure",
    explanation:
      "A problem at marrow level — aplastic anaemia, infiltration by leukaemia or metastasis, myelodysplasia, megaloblastic anaemia, or hypersplenism. Affecting all three lineages points to the common precursor, so bone marrow examination is usually needed.",
    choices: [
      { text: "A marrow-level problem — failure, infiltration, dysplasia or hypersplenism", isCorrect: true },
      { text: "Isolated iron deficiency", isCorrect: false },
      { text: "Simple dehydration", isCorrect: false },
      { text: "Acute blood loss", isCorrect: false },
    ],
  },
  {
    stem: "Which features in a child with bruising should raise concern about acute leukaemia rather than ITP?",
    topic: "Marrow Failure",
    explanation:
      "Pallor, persistent fever, bone or joint pain, lymphadenopathy, hepatosplenomegaly, and abnormality in MORE THAN ONE cell line. Bone pain causing a limp is a classic under-recognised presentation. ITP shows isolated thrombocytopenia in an otherwise well child.",
    choices: [
      { text: "Pallor, bone pain, organomegaly and more than one cell line affected", isCorrect: true },
      { text: "Isolated low platelets in a well child", isCorrect: false },
      { text: "Bruising after a recent viral illness", isCorrect: false },
      { text: "Bruising confined to the shins", isCorrect: false },
    ],
  },
  {
    stem: "A patient has fever during chemotherapy-induced neutropenia. What is the required response?",
    topic: "Oncological Emergencies",
    explanation:
      "Empirical broad-spectrum antibiotics within an hour, before culture results. Without neutrophils the usual inflammatory signs are blunted, so infection progresses with few localising features — fever may be the only sign, and waiting for confirmation costs lives.",
    choices: [
      { text: "Broad-spectrum antibiotics within an hour, before results return", isCorrect: true },
      { text: "Await blood culture results before treating", isCorrect: false },
      { text: "Oral antibiotics and outpatient review", isCorrect: false },
      { text: "Antipyretics alone", isCorrect: false },
    ],
  },
  {
    stem: "What is tumour lysis syndrome, and which abnormality is most immediately dangerous?",
    topic: "Oncological Emergencies",
    explanation:
      "Massive cell breakdown after treating a bulky, rapidly dividing tumour, releasing potassium, phosphate and urate. HYPERKALAEMIA is the immediate threat because of arrhythmia. Hypocalcaemia follows phosphate binding. Prevention with hydration and rasburicase or allopurinol beats treatment.",
    choices: [
      { text: "Cell lysis releasing potassium, phosphate and urate — hyperkalaemia is most dangerous", isCorrect: true },
      { text: "Hypokalaemia is the main risk", isCorrect: false },
      { text: "It occurs before treatment begins", isCorrect: false },
      { text: "Hypercalcaemia is the immediate threat", isCorrect: false },
    ],
  },
  {
    stem: "Which leukaemia carries the Philadelphia chromosome, and why does that matter?",
    topic: "Haematological Malignancy",
    explanation:
      "Chronic myeloid leukaemia, with t(9;22) producing the BCR-ABL fusion tyrosine kinase. It matters enormously because imatinib targets that kinase directly — transforming CML from fatal to manageable and becoming the model for targeted cancer therapy.",
    choices: [
      { text: "Chronic myeloid leukaemia — BCR-ABL is directly targetable with imatinib", isCorrect: true },
      { text: "Acute lymphoblastic leukaemia only", isCorrect: false },
      { text: "Chronic lymphocytic leukaemia", isCorrect: false },
      { text: "Hodgkin lymphoma", isCorrect: false },
    ],
  },
  {
    stem: "Which cell is pathognomonic of Hodgkin lymphoma?",
    topic: "Haematological Malignancy",
    explanation:
      "The Reed-Sternberg cell — large and binucleate with prominent nucleoli, giving an owl-eye appearance. Hodgkin spreads contiguously between adjacent nodal groups and generally carries a better prognosis than non-Hodgkin lymphoma, which spreads unpredictably.",
    choices: [
      { text: "The Reed-Sternberg cell", isCorrect: true },
      { text: "The Auer rod", isCorrect: false },
      { text: "The smudge cell", isCorrect: false },
      { text: "The Heinz body", isCorrect: false },
    ],
  },
  {
    stem: "A patient has bone pain, anaemia, hypercalcaemia, renal impairment and a paraprotein. What is the diagnosis?",
    topic: "Haematological Malignancy",
    explanation:
      "Multiple myeloma — a plasma cell malignancy. The CRAB features define end-organ damage: hyperCalcaemia, Renal impairment, Anaemia, Bone lesions. Light chains cause the renal failure, and osteoclast activation produces lytic lesions rather than the sclerosis of metastases.",
    choices: [
      { text: "Multiple myeloma", isCorrect: true },
      { text: "Chronic lymphocytic leukaemia", isCorrect: false },
      { text: "Hodgkin lymphoma", isCorrect: false },
      { text: "Metastatic prostate cancer", isCorrect: false },
    ],
  },
  {
    stem: "Which finding suggests chronic lymphocytic leukaemia on a routine blood count?",
    topic: "Haematological Malignancy",
    explanation:
      "A persistent lymphocytosis, often in an older, asymptomatic patient, with smudge cells on the film. Many are found incidentally and need only monitoring — treatment is reserved for progressive disease, which is why it is often described as a condition to watch rather than treat.",
    choices: [
      { text: "Persistent lymphocytosis with smudge cells, often asymptomatic", isCorrect: true },
      { text: "Neutrophilia with left shift", isCorrect: false },
      { text: "Isolated thrombocytopenia", isCorrect: false },
      { text: "Pancytopenia with blasts", isCorrect: false },
    ],
  },
  {
    stem: "Why does hyperviscosity occur in some haematological malignancies, and how does it present?",
    topic: "Haematological Malignancy",
    explanation:
      "A very high paraprotein or cell count thickens the blood, impairing microcirculation. It presents with visual disturbance, headache, confusion and mucosal bleeding. It is an emergency treated by plasma exchange or leucapheresis, alongside treating the underlying disease.",
    choices: [
      { text: "High paraprotein or cell count impairs microcirculation — visual change, confusion, bleeding", isCorrect: true },
      { text: "Dehydration alone causes it", isCorrect: false },
      { text: "It presents only with fever", isCorrect: false },
      { text: "It resolves without intervention", isCorrect: false },
    ],
  },
  {
    stem: "Why is a blood film still valuable when automated counts are available?",
    topic: "Investigation",
    explanation:
      "It reveals morphology the analyser cannot — blasts, spherocytes, sickle cells, Heinz bodies, hypersegmented neutrophils, schistocytes, and red cell inclusions. Several diagnoses are made on the film alone, and requesting one is often the single most informative next step.",
    choices: [
      { text: "It shows morphology — blasts, schistocytes, spherocytes — that analysers cannot report", isCorrect: true },
      { text: "It measures haemoglobin more accurately", isCorrect: false },
      { text: "It is faster than an automated count", isCorrect: false },
      { text: "It has been superseded entirely", isCorrect: false },
    ],
  },
];

/* ═══════════ SET 2 — Haemostasis, thrombosis, anticoagulation ═══════════ */

const SET2: Q[] = [
  {
    stem: "What does a prolonged prothrombin time with a normal APTT suggest?",
    topic: "Coagulation Testing",
    explanation:
      "A defect in the extrinsic pathway — factor VII, which has the shortest half-life. This is why PT is the earliest abnormality in warfarin therapy, vitamin K deficiency and liver disease. APTT tests the intrinsic pathway; both prolonged suggests a common pathway problem or global failure.",
    choices: [
      { text: "Extrinsic pathway — factor VII, the shortest-lived factor", isCorrect: true },
      { text: "Intrinsic pathway — factors VIII and IX", isCorrect: false },
      { text: "Platelet dysfunction", isCorrect: false },
      { text: "Fibrinogen deficiency alone", isCorrect: false },
    ],
  },
  {
    stem: "A prolonged APTT that CORRECTS on mixing with normal plasma suggests what?",
    topic: "Coagulation Testing",
    explanation:
      "Factor deficiency — the missing factor is supplied by the normal plasma. Failure to correct suggests an INHIBITOR, such as a factor VIII inhibitor or lupus anticoagulant. The mixing study is a simple, elegant way of separating the two possibilities.",
    choices: [
      { text: "Factor deficiency — failure to correct would suggest an inhibitor", isCorrect: true },
      { text: "An inhibitor is present", isCorrect: false },
      { text: "Platelet dysfunction", isCorrect: false },
      { text: "The result is uninterpretable", isCorrect: false },
    ],
  },
  {
    stem: "Which inherited bleeding disorder is the most common overall?",
    topic: "Bleeding Disorders",
    explanation:
      "Von Willebrand disease. Von Willebrand factor mediates platelet adhesion AND carries factor VIII, so patients have both platelet-type bleeding — mucosal, epistaxis, menorrhagia — and sometimes a prolonged APTT. It is autosomal, so unlike haemophilia it affects both sexes equally.",
    choices: [
      { text: "Von Willebrand disease", isCorrect: true },
      { text: "Haemophilia A", isCorrect: false },
      { text: "Haemophilia B", isCorrect: false },
      { text: "Factor V Leiden", isCorrect: false },
    ],
  },
  {
    stem: "How does the bleeding pattern of a platelet disorder differ from a coagulation factor disorder?",
    topic: "Bleeding Disorders",
    explanation:
      "Platelet problems cause immediate MUCOCUTANEOUS bleeding — petechiae, purpura, epistaxis, menorrhagia. Factor deficiencies cause DEEP bleeding into joints and muscles, often delayed after injury. The pattern points to the mechanism before any test is sent.",
    choices: [
      { text: "Platelet: immediate mucocutaneous bleeding. Factor: delayed deep joint and muscle bleeds", isCorrect: true },
      { text: "Platelet disorders cause haemarthroses", isCorrect: false },
      { text: "Both produce identical patterns", isCorrect: false },
      { text: "Factor deficiencies cause petechiae", isCorrect: false },
    ],
  },
  {
    stem: "Which factor is deficient in haemophilia A, and how is it inherited?",
    topic: "Bleeding Disorders",
    explanation:
      "Factor VIII, inherited X-linked recessive — so males are affected and females are usually carriers. Haemophilia B is factor IX deficiency with an identical clinical picture. APTT is prolonged while PT stays normal, since both are intrinsic pathway factors.",
    choices: [
      { text: "Factor VIII, X-linked recessive", isCorrect: true },
      { text: "Factor IX, autosomal dominant", isCorrect: false },
      { text: "Factor VII, X-linked", isCorrect: false },
      { text: "Von Willebrand factor, autosomal", isCorrect: false },
    ],
  },
  {
    stem: "A previously well child develops widespread bruising after a viral illness, with isolated thrombocytopenia. What is the likely diagnosis?",
    topic: "Platelet Disorders",
    explanation:
      "Immune thrombocytopenic purpura, usually self-limiting in children. The reassuring features are isolated thrombocytopenia with an otherwise normal count and film in a well child. Anaemia, neutropenia, bone pain or organomegaly would instead demand urgent leukaemia investigation.",
    choices: [
      { text: "Immune thrombocytopenic purpura", isCorrect: true },
      { text: "Acute leukaemia", isCorrect: false },
      { text: "Haemophilia", isCorrect: false },
      { text: "Disseminated intravascular coagulation", isCorrect: false },
    ],
  },
  {
    stem: "Which condition presents with the pentad of thrombocytopenia, haemolysis, fever, renal impairment and neurological signs?",
    topic: "Platelet Disorders",
    explanation:
      "Thrombotic thrombocytopenic purpura, from ADAMTS13 deficiency leaving large von Willebrand multimers that cause platelet aggregation. It is a haematological emergency treated with plasma exchange. Critically, platelet transfusion is AVOIDED — it fuels further thrombosis.",
    choices: [
      { text: "Thrombotic thrombocytopenic purpura — plasma exchange, and avoid platelet transfusion", isCorrect: true },
      { text: "Immune thrombocytopenic purpura — give platelets", isCorrect: false },
      { text: "Disseminated intravascular coagulation", isCorrect: false },
      { text: "Haemolytic uraemic syndrome only", isCorrect: false },
    ],
  },
  {
    stem: "What characterises disseminated intravascular coagulation biochemically?",
    topic: "Coagulation Disorders",
    explanation:
      "Prolonged PT and APTT, low fibrinogen, low platelets and raised D-dimer. Widespread activation consumes clotting factors and platelets, so the patient BLEEDS while simultaneously thrombosing microvessels. Treatment is directed at the underlying cause — sepsis, malignancy, obstetric catastrophe or trauma.",
    choices: [
      { text: "Prolonged PT and APTT, low fibrinogen and platelets, raised D-dimer", isCorrect: true },
      { text: "Normal clotting with isolated thrombocytosis", isCorrect: false },
      { text: "Raised fibrinogen with normal platelets", isCorrect: false },
      { text: "Isolated prolonged PT only", isCorrect: false },
    ],
  },
  {
    stem: "Which components make up Virchow's triad?",
    topic: "Thrombosis",
    explanation:
      "Endothelial injury, abnormal flow (stasis or turbulence), and hypercoagulability. Nearly every clinical risk factor maps to one of the three — surgery to injury, immobility to stasis, malignancy and pregnancy to hypercoagulability. It turns a long list into three mechanisms.",
    choices: [
      { text: "Endothelial injury, abnormal flow and hypercoagulability", isCorrect: true },
      { text: "Anaemia, infection and malnutrition", isCorrect: false },
      { text: "Hypertension, diabetes and smoking", isCorrect: false },
      { text: "Inflammation, fibrosis and necrosis", isCorrect: false },
    ],
  },
  {
    stem: "Which inherited thrombophilia is the most common?",
    topic: "Thrombosis",
    explanation:
      "Factor V Leiden, causing resistance to activated protein C so factor Va is not inactivated normally. Heterozygotes have a modestly raised risk — enough to matter alongside another factor such as pregnancy or oestrogen, but not usually enough alone to warrant lifelong anticoagulation.",
    choices: [
      { text: "Factor V Leiden — activated protein C resistance", isCorrect: true },
      { text: "Antithrombin deficiency", isCorrect: false },
      { text: "Protein C deficiency", isCorrect: false },
      { text: "Prothrombin gene mutation", isCorrect: false },
    ],
  },
  {
    stem: "When is thrombophilia testing generally NOT useful?",
    topic: "Thrombosis",
    explanation:
      "During acute thrombosis or while on anticoagulation, because both distort the results — and in unselected patients where the result would not change management. Testing rarely alters treatment duration, which is decided mainly on whether the event was provoked and on bleeding risk.",
    choices: [
      { text: "During acute thrombosis or on anticoagulation, and when it would not change management", isCorrect: true },
      { text: "It should be performed in everyone with a first DVT", isCorrect: false },
      { text: "It is most accurate during the acute event", isCorrect: false },
      { text: "It always determines treatment duration", isCorrect: false },
    ],
  },
  {
    stem: "What is the value of a negative D-dimer in suspected venous thromboembolism?",
    topic: "Thrombosis",
    explanation:
      "In a patient already assessed as LOW clinical probability, it reliably excludes VTE and avoids imaging. It is sensitive but not specific — rising in infection, malignancy, pregnancy and after surgery. In high-probability patients a negative result excludes nothing.",
    choices: [
      { text: "It excludes VTE only when pre-test probability is already low", isCorrect: true },
      { text: "It excludes VTE regardless of clinical probability", isCorrect: false },
      { text: "A positive result confirms VTE", isCorrect: false },
      { text: "It is highly specific for thrombosis", isCorrect: false },
    ],
  },
  {
    stem: "How does heparin exert its anticoagulant effect?",
    topic: "Anticoagulation",
    explanation:
      "By potentiating antithrombin, which then inactivates thrombin and factor Xa. Unfractionated heparin inhibits both and is monitored by APTT; low molecular weight heparin acts mainly on Xa with predictable pharmacokinetics, so routine monitoring is unnecessary.",
    choices: [
      { text: "It potentiates antithrombin, which inactivates thrombin and factor Xa", isCorrect: true },
      { text: "It antagonises vitamin K", isCorrect: false },
      { text: "It directly dissolves formed clot", isCorrect: false },
      { text: "It inhibits platelet aggregation", isCorrect: false },
    ],
  },
  {
    stem: "A patient on heparin develops a falling platelet count with new thrombosis after several days. What is happening?",
    topic: "Anticoagulation",
    explanation:
      "Heparin-induced thrombocytopenia — antibodies against platelet factor 4-heparin complexes cause platelet activation. Counterintuitively it causes THROMBOSIS despite low platelets. All heparin must stop and a non-heparin anticoagulant be substituted; platelet transfusion is avoided.",
    choices: [
      { text: "Heparin-induced thrombocytopenia — stop heparin and use an alternative anticoagulant", isCorrect: true },
      { text: "Simple dilutional thrombocytopenia — continue heparin", isCorrect: false },
      { text: "Bleeding from over-anticoagulation", isCorrect: false },
      { text: "Immune thrombocytopenic purpura", isCorrect: false },
    ],
  },
  {
    stem: "How does warfarin work, and why is there a delay before it becomes effective?",
    topic: "Anticoagulation",
    explanation:
      "It inhibits vitamin K epoxide reductase, reducing synthesis of factors II, VII, IX and X. Existing factors must clear first, so the effect takes days. Protein C has a SHORT half-life and falls first, creating a transient prothrombotic state — which is why heparin cover is used initially.",
    choices: [
      { text: "It blocks vitamin K recycling; existing factors must clear, and early protein C fall is prothrombotic", isCorrect: true },
      { text: "It directly inhibits thrombin, acting within minutes", isCorrect: false },
      { text: "It destroys existing clotting factors immediately", isCorrect: false },
      { text: "The delay is due to slow absorption", isCorrect: false },
    ],
  },
  {
    stem: "Which mechanism explains most clinically important warfarin interactions?",
    topic: "Anticoagulation",
    explanation:
      "Cytochrome P450 interaction. Inhibitors — many antibiotics, amiodarone, fluconazole — raise INR and bleeding risk; inducers such as rifampicin and carbamazepine lower it. Any new prescription in a warfarinised patient should trigger an INR check.",
    choices: [
      { text: "Cytochrome P450 induction or inhibition altering warfarin metabolism", isCorrect: true },
      { text: "Competition for renal excretion", isCorrect: false },
      { text: "Displacement from red cells", isCorrect: false },
      { text: "Interactions are not clinically significant", isCorrect: false },
    ],
  },
  {
    stem: "How is major bleeding on warfarin reversed?",
    topic: "Anticoagulation",
    explanation:
      "Stop warfarin, give intravenous vitamin K, and give prothrombin complex concentrate for immediate replacement of factors. Vitamin K alone takes hours to work, which is why PCC is used when bleeding is major — the two are complementary rather than alternatives.",
    choices: [
      { text: "Stop warfarin, give intravenous vitamin K AND prothrombin complex concentrate", isCorrect: true },
      { text: "Vitamin K alone, which acts within minutes", isCorrect: false },
      { text: "Platelet transfusion", isCorrect: false },
      { text: "Simply omit the next dose", isCorrect: false },
    ],
  },
  {
    stem: "What advantages do direct oral anticoagulants have over warfarin, and what limits them?",
    topic: "Anticoagulation",
    explanation:
      "Fixed dosing without routine monitoring, fewer food and drug interactions, and predictable pharmacokinetics. Limitations: they need renal dose adjustment, are avoided in severe renal impairment, are not used in mechanical valves or antiphospholipid syndrome, and adherence cannot be checked by a blood test.",
    choices: [
      { text: "No routine monitoring and fewer interactions — but renal limits, valve restrictions and unverifiable adherence", isCorrect: true },
      { text: "They are safe in all degrees of renal impairment", isCorrect: false },
      { text: "They are preferred for mechanical heart valves", isCorrect: false },
      { text: "They require more frequent monitoring than warfarin", isCorrect: false },
    ],
  },
  {
    stem: "Why is warfarin rather than a DOAC used in antiphospholipid syndrome?",
    topic: "Anticoagulation",
    explanation:
      "Trials showed higher rates of recurrent thrombosis with DOACs in this group, particularly triple-positive patients. It is a good reminder that anticoagulants are not interchangeable — the indication, not just the diagnosis of 'thrombosis', determines the drug.",
    choices: [
      { text: "DOACs showed higher recurrent thrombosis rates in this group", isCorrect: true },
      { text: "DOACs cause more bleeding in these patients", isCorrect: false },
      { text: "Warfarin is simply cheaper", isCorrect: false },
      { text: "The two are entirely interchangeable", isCorrect: false },
    ],
  },
  {
    stem: "Which anticoagulant is preferred in pregnancy, and why?",
    topic: "Anticoagulation",
    explanation:
      "Low molecular weight heparin, because it does not cross the placenta. Warfarin is teratogenic and causes fetal bleeding; DOACs cross the placenta and lack safety data. Molecular size determining placental transfer is the principle to hold onto.",
    choices: [
      { text: "Low molecular weight heparin — it does not cross the placenta", isCorrect: true },
      { text: "Warfarin, which is safe throughout pregnancy", isCorrect: false },
      { text: "A direct oral anticoagulant", isCorrect: false },
      { text: "Aspirin at treatment dose", isCorrect: false },
    ],
  },
  {
    stem: "How does aspirin differ mechanistically from clopidogrel?",
    topic: "Antiplatelets",
    explanation:
      "Aspirin irreversibly inhibits COX-1, blocking thromboxane A2. Clopidogrel irreversibly blocks the P2Y12 ADP receptor. Both last the platelet's lifespan of about a week — which is why both are stopped well before surgery, and why dual therapy raises bleeding risk substantially.",
    choices: [
      { text: "Aspirin blocks COX-1 and thromboxane; clopidogrel blocks the P2Y12 ADP receptor", isCorrect: true },
      { text: "Both act on the same receptor", isCorrect: false },
      { text: "Clopidogrel inhibits COX-2", isCorrect: false },
      { text: "Aspirin acts reversibly over 24 hours", isCorrect: false },
    ],
  },
  {
    stem: "Why are antiplatelets used for arterial disease and anticoagulants for venous thromboembolism?",
    topic: "Thrombosis",
    explanation:
      "Composition. Arterial thrombi form under high flow and are platelet-rich; venous thrombi form in stasis and are fibrin- and red-cell-rich. Matching the drug to what the clot is made of is one of the most transferable ideas in vascular medicine.",
    choices: [
      { text: "Arterial thrombi are platelet-rich; venous thrombi are fibrin-rich", isCorrect: true },
      { text: "Arterial thrombi are fibrin-rich", isCorrect: false },
      { text: "The choice is arbitrary and historical", isCorrect: false },
      { text: "Both clot types have identical composition", isCorrect: false },
    ],
  },
  {
    stem: "Which patients with atrial fibrillation benefit most from anticoagulation?",
    topic: "Thrombosis",
    explanation:
      "Those with additional stroke risk factors — assessed by a formal score including age, hypertension, diabetes, heart failure, prior stroke and vascular disease. Crucially the decision is NOT based on symptoms or heart rate, and paroxysmal AF carries similar risk to persistent.",
    choices: [
      { text: "Those with additional risk factors on a formal score — not based on symptoms or rate", isCorrect: true },
      { text: "Only those with permanent rather than paroxysmal AF", isCorrect: false },
      { text: "Only symptomatic patients", isCorrect: false },
      { text: "Only those with a fast ventricular rate", isCorrect: false },
    ],
  },
  {
    stem: "When should anticoagulation for a first PROVOKED venous thromboembolism generally stop?",
    topic: "Thrombosis",
    explanation:
      "After a defined period once the provoking factor has resolved — surgery, immobility, trauma. Unprovoked events carry higher recurrence risk and may warrant indefinite treatment, balanced against bleeding risk. Whether it was provoked is the single most useful piece of information.",
    choices: [
      { text: "After a defined course once the provoking factor has resolved", isCorrect: true },
      { text: "It must always be lifelong", isCorrect: false },
      { text: "After one week in all cases", isCorrect: false },
      { text: "Duration is unrelated to whether it was provoked", isCorrect: false },
    ],
  },
  {
    stem: "A patient with massive pulmonary embolism is hypotensive. What treatment should be considered?",
    topic: "Thrombosis",
    explanation:
      "Systemic thrombolysis. In haemodynamically unstable PE the immediate mortality risk outweighs bleeding risk, so it is indicated absent absolute contraindication. Stable patients are anticoagulated instead — the distinction is haemodynamic, not radiological.",
    choices: [
      { text: "Systemic thrombolysis — the distinction from stable PE is haemodynamic", isCorrect: true },
      { text: "Oral anticoagulation as an outpatient", isCorrect: false },
      { text: "Antiplatelet therapy", isCorrect: false },
      { text: "Observation with oxygen alone", isCorrect: false },
    ],
  },
  {
    stem: "Which prophylaxis is used for venous thromboembolism in hospitalised medical patients?",
    topic: "Thrombosis",
    explanation:
      "Risk assessment on admission, then low molecular weight heparin unless contraindicated, with mechanical prophylaxis where anticoagulation is unsafe. VTE remains a leading cause of preventable hospital death, which is why formal risk assessment is mandated rather than left to judgement.",
    choices: [
      { text: "Formal risk assessment then LMWH, with mechanical prophylaxis if anticoagulation is unsafe", isCorrect: true },
      { text: "Aspirin for all inpatients", isCorrect: false },
      { text: "No prophylaxis unless surgical", isCorrect: false },
      { text: "Warfarin started on admission", isCorrect: false },
    ],
  },
  {
    stem: "What does a raised INR in liver disease indicate?",
    topic: "Coagulation Testing",
    explanation:
      "Impaired synthetic function — the liver makes most clotting factors, and they have short half-lives, so PT/INR is the most sensitive real-time marker of hepatic synthesis. Importantly it does NOT mean the patient is protected from thrombosis; anticoagulant proteins fall too.",
    choices: [
      { text: "Impaired hepatic synthetic function — and it does not confer protection from thrombosis", isCorrect: true },
      { text: "That the patient cannot form clots anywhere", isCorrect: false },
      { text: "Vitamin K deficiency exclusively", isCorrect: false },
      { text: "Excess anticoagulant effect from medication", isCorrect: false },
    ],
  },
  {
    stem: "Which product replaces fibrinogen specifically?",
    topic: "Blood Products",
    explanation:
      "Cryoprecipitate, which is rich in fibrinogen, factor VIII and von Willebrand factor. Fresh frozen plasma replaces all factors but in dilute form, so large volumes are needed to raise fibrinogen — cryoprecipitate is used when fibrinogen specifically is low, as in DIC or major haemorrhage.",
    choices: [
      { text: "Cryoprecipitate", isCorrect: true },
      { text: "Platelet concentrate", isCorrect: false },
      { text: "Packed red cells", isCorrect: false },
      { text: "Albumin solution", isCorrect: false },
    ],
  },
  {
    stem: "What is the principle of a major haemorrhage protocol?",
    topic: "Blood Products",
    explanation:
      "Early balanced replacement of red cells, plasma and platelets in fixed ratios rather than crystalloid alone, with early tranexamic acid in trauma and correction of calcium, temperature and acidosis. Giving red cells alone dilutes clotting factors and worsens the coagulopathy.",
    choices: [
      { text: "Balanced red cell, plasma and platelet replacement — red cells alone dilute clotting factors", isCorrect: true },
      { text: "Large volumes of crystalloid first", isCorrect: false },
      { text: "Red cells alone until bleeding stops", isCorrect: false },
      { text: "Platelets only", isCorrect: false },
    ],
  },
  {
    stem: "Why are calcium, temperature and acidosis monitored during massive transfusion?",
    topic: "Blood Products",
    explanation:
      "Citrate in stored blood binds calcium, which is essential for clotting; hypothermia impairs enzyme function and platelet activity; acidosis impairs the coagulation cascade. Together they form the lethal triad — and correcting them is as important as replacing the blood itself.",
    choices: [
      { text: "Citrate binds calcium, and hypothermia and acidosis both impair clotting — the lethal triad", isCorrect: true },
      { text: "They have no bearing on coagulation", isCorrect: false },
      { text: "Only calcium matters", isCorrect: false },
      { text: "Warming blood causes haemolysis, so cold is preferred", isCorrect: false },
    ],
  },
];

/* ═══════════ SEED ═══════════ */

function isTransient(e: unknown): boolean {
  if (!(e instanceof Error)) return false;
  const m = e.message.toLowerCase();
  return (
    m.includes("p1001") || m.includes("p1017") ||
    m.includes("can't reach database") || m.includes("closed the connection") ||
    m.includes("connection") || m.includes("econnreset") || m.includes("timed out")
  );
}

async function withRetry<T>(fn: () => Promise<T>, label: string): Promise<T> {
  for (let i = 1; i <= 5; i++) {
    try {
      return await fn();
    } catch (e) {
      if (!isTransient(e) || i === 5) throw e;
      console.log(`    … connection dropped on ${label}, retrying in ${i * 2}s`);
      await new Promise((r) => setTimeout(r, i * 2000));
    }
  }
  throw new Error("unreachable");
}

/** Shuffles choices before writing, so correct answers are never all in one position. */
function shuffled<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * The taxonomy has no Haematology section, so create one under Internal
 * Medicine. Idempotent — a second run finds the existing section.
 */
async function ensureCategory(): Promise<string | null> {
  const existing = await withRetry(
    () => prisma.quizCategory.findUnique({ where: { slug: "cs-haematology" } }),
    "find haematology"
  );
  if (existing) return existing.id;

  const parent = await withRetry(
    () => prisma.quizCategory.findUnique({ where: { slug: "cs-internal-medicine" } }),
    "find internal medicine"
  );
  if (!parent) {
    console.log('  ✗ "cs-internal-medicine" not found — run seed-medical-taxonomy.ts first.');
    return null;
  }

  const created = await withRetry(
    () =>
      prisma.quizCategory.create({
        data: {
          slug: "cs-haematology",
          title: "Haematology",
          description: "Anaemia, haemoglobinopathy, haemostasis, thrombosis and haematological malignancy.",
          overview:
            "Blood is one of the few systems where a single routine test — the full blood count with a film — narrows the differential dramatically. These sections work from that starting point through to anticoagulation and the haematological emergencies.",
          icon: "Droplets",
          parentId: parent.id,
          order: 7,
          published: true,
        },
      }),
    "create haematology"
  );
  console.log("  + Created section: Clinical Specialties → Internal Medicine → Haematology");
  return created.id;
}

async function seedSet(o: {
  categoryId: string; slug: string; title: string; description: string;
  kind: string; timeLimitSeconds: number | null; difficulty: string; questions: Q[];
}) {
  const quiz = await withRetry(
    () =>
      prisma.quiz.upsert({
        where: { slug: o.slug },
        create: {
          slug: o.slug, title: o.title, description: o.description, categoryId: o.categoryId,
          kind: o.kind, timeLimitSeconds: o.timeLimitSeconds, passThreshold: 70,
          difficulty: o.difficulty, published: true,
        },
        update: {
          title: o.title, description: o.description, categoryId: o.categoryId,
          kind: o.kind, timeLimitSeconds: o.timeLimitSeconds,
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
            quizId: quiz.id, type: "SINGLE", stem: q.stem, topic: q.topic,
            explanation: q.explanation, points: 1, order: n,
            choices: { create: opts.map((c, i) => ({ text: c.text, isCorrect: c.isCorrect, order: i })) },
          },
        }),
      `question ${n + 1} of ${o.title}`
    );
  }
  console.log(`  ✓ ${o.title} — ${o.questions.length} questions (answers shuffled)`);
}

async function main() {
  console.log("Seeding Haematology…\n");
  const categoryId = await ensureCategory();
  if (!categoryId) return;

  await seedSet({
    categoryId, slug: "haematology-practice-set-1",
    title: "Haematology — Practice Set 1",
    description: "Thirty questions on anaemia and its classification, iron metabolism, haemolysis, the haemoglobinopathies, transfusion, marrow failure and haematological malignancy. Untimed.",
    kind: "PRACTICE", timeLimitSeconds: null, difficulty: "Intermediate", questions: SET1,
  });

  await seedSet({
    categoryId, slug: "haematology-practice-set-2",
    title: "Haematology — Practice Set 2",
    description: "Thirty fresh questions on interpreting clotting tests, bleeding and platelet disorders, DIC, thrombosis and thrombophilia, anticoagulation and antiplatelets, and blood product use. Untimed.",
    kind: "PRACTICE", timeLimitSeconds: null, difficulty: "Intermediate", questions: SET2,
  });

  await seedSet({
    categoryId, slug: "haematology-exam-1",
    title: "Haematology — Timed Exam 1",
    description: "Thirty questions in 40 minutes covering red cells, haemoglobinopathy and malignancy. Feedback withheld until you submit.",
    kind: "EXAM", timeLimitSeconds: 40 * 60, difficulty: "Intermediate", questions: SET1,
  });

  await seedSet({
    categoryId, slug: "haematology-exam-2",
    title: "Haematology — Timed Exam 2 (Comprehensive)",
    description: "All sixty questions in 75 minutes, covering the whole subject. Sit this once both practice sets feel comfortable.",
    kind: "EXAM", timeLimitSeconds: 75 * 60, difficulty: "Advanced", questions: [...SET1, ...SET2],
  });

  console.log("\nDone. Editable in Admin → Question Bank.");
}

main().catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
