/**
 * CONTENT WAVE 9 — Obstetrics & Gynaecology
 *
 * 75 original questions as EIGHT quizzes:
 *
 *   Obstetrics    Set 1 (15) · Set 2 (15)
 *   Gynaecology   Set 1 (15) · Set 2 (15)
 *   Reproductive Endocrinology  Set 1 (15)
 *   Exams  Obstetrics (30) · Gynaecology (30) · Comprehensive (75)
 *
 * ⚠ Obstetric practice is strongly protocol-driven and varies between national
 * guidelines — thresholds for intervention, screening schedules and drug choices
 * differ by country and are revised regularly. These questions test the
 * underlying principles and the emergencies where recognition matters most.
 * Review anything numerical against your local guideline before relying on it.
 *
 * Run:  npx tsx prisma/seed-obgyn.ts
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Q = {
  stem: string;
  topic: string;
  explanation: string;
  choices: { text: string; isCorrect: boolean }[];
};

/* ═══════════ OBSTETRICS SET 1 ═══════════ */

const OB1: Q[] = [
  {
    stem: "Which hormone is detected by a standard pregnancy test, and what produces it?",
    topic: "Early Pregnancy",
    explanation:
      "Beta-hCG, produced by syncytiotrophoblast. It maintains the corpus luteum so progesterone secretion continues until the placenta takes over at around 8–10 weeks. In a normal early intrauterine pregnancy it roughly doubles every 48 hours — a slower rise raises concern for ectopic or failing pregnancy.",
    choices: [
      { text: "Beta-hCG, from syncytiotrophoblast", isCorrect: true },
      { text: "Progesterone, from the corpus luteum", isCorrect: false },
      { text: "Oestradiol, from the ovary", isCorrect: false },
      { text: "Prolactin, from the pituitary", isCorrect: false },
    ],
  },
  {
    stem: "A woman with amenorrhoea, unilateral pelvic pain and a positive pregnancy test has an empty uterus on scan. What must be assumed?",
    topic: "Early Pregnancy",
    explanation:
      "Ectopic pregnancy until proven otherwise. Rupture causes life-threatening haemorrhage, so the threshold for suspicion is deliberately low. Shoulder tip pain suggests diaphragmatic irritation from intraperitoneal blood, and haemodynamic instability demands immediate surgery rather than further imaging.",
    choices: [
      { text: "Ectopic pregnancy until proven otherwise", isCorrect: true },
      { text: "Normal early intrauterine pregnancy — rescan in four weeks", isCorrect: false },
      { text: "Urinary tract infection", isCorrect: false },
      { text: "Ovarian cyst requiring no follow-up", isCorrect: false },
    ],
  },
  {
    stem: "Where do most ectopic pregnancies implant?",
    topic: "Early Pregnancy",
    explanation:
      "The ampulla of the fallopian tube, the commonest site by a wide margin. Previous ectopic, tubal surgery, pelvic inflammatory disease and intrauterine devices in situ all raise the risk — anything that damages tubal ciliary transport. Interstitial (cornual) ectopics are rarer but bleed catastrophically.",
    choices: [
      { text: "The ampulla of the fallopian tube", isCorrect: true },
      { text: "The cervix", isCorrect: false },
      { text: "The ovary", isCorrect: false },
      { text: "The abdominal cavity", isCorrect: false },
    ],
  },
  {
    stem: "Why is folic acid recommended before conception rather than after a pregnancy is confirmed?",
    topic: "Antenatal Care",
    explanation:
      "The neural tube closes by around the fourth week — often before a woman knows she is pregnant. Supplementation must therefore already be established at conception to reduce neural tube defects. A higher dose is used where risk is increased, such as previous affected pregnancy, diabetes or certain antiepileptics.",
    choices: [
      { text: "The neural tube closes by week four, often before pregnancy is recognised", isCorrect: true },
      { text: "Folate is only absorbed before pregnancy begins", isCorrect: false },
      { text: "It prevents nausea in the first trimester", isCorrect: false },
      { text: "It is needed only in the third trimester", isCorrect: false },
    ],
  },
  {
    stem: "A rhesus-negative woman is at risk of alloimmunisation. When is anti-D immunoglobulin indicated?",
    topic: "Antenatal Care",
    explanation:
      "Routinely in the third trimester, after delivery of a rhesus-positive infant, and after any potentially sensitising event — bleeding, trauma, amniocentesis, miscarriage or termination. It prevents maternal antibody formation, protecting FUTURE pregnancies from haemolytic disease. The current pregnancy is rarely the one at risk.",
    choices: [
      { text: "Routinely antenatally and after any potentially sensitising event", isCorrect: true },
      { text: "Only if the woman is already sensitised", isCorrect: false },
      { text: "Only during labour", isCorrect: false },
      { text: "It is never needed if this is a first pregnancy", isCorrect: false },
    ],
  },
  {
    stem: "Which condition is characterised by new hypertension after 20 weeks with proteinuria or end-organ dysfunction?",
    topic: "Hypertensive Disorders",
    explanation:
      "Pre-eclampsia, a placental disorder of abnormal trophoblast invasion causing widespread endothelial dysfunction. That is why it affects kidney, liver, brain and clotting simultaneously. Delivery of the placenta is the only definitive treatment — everything else is temporising.",
    choices: [
      { text: "Pre-eclampsia", isCorrect: true },
      { text: "Chronic hypertension", isCorrect: false },
      { text: "Gestational diabetes", isCorrect: false },
      { text: "Obstetric cholestasis", isCorrect: false },
    ],
  },
  {
    stem: "Which drug is used to prevent and treat eclamptic seizures?",
    topic: "Hypertensive Disorders",
    explanation:
      "Magnesium sulfate, which is superior to conventional anticonvulsants in this setting. Toxicity presents with loss of deep tendon reflexes first, then respiratory depression — which is why reflexes are monitored, and calcium gluconate is the antidote.",
    choices: [
      { text: "Magnesium sulfate", isCorrect: true },
      { text: "Phenytoin", isCorrect: false },
      { text: "Diazepam as first line", isCorrect: false },
      { text: "Levetiracetam", isCorrect: false },
    ],
  },
  {
    stem: "A pregnant woman has right upper quadrant pain, haemolysis, raised liver enzymes and low platelets. What is the diagnosis?",
    topic: "Hypertensive Disorders",
    explanation:
      "HELLP syndrome, a severe variant of pre-eclampsia. It can occur with only mildly raised blood pressure and minimal proteinuria, so a normal-looking blood pressure does not exclude it. Delivery is required, and the platelet count guides anaesthetic options.",
    choices: [
      { text: "HELLP syndrome", isCorrect: true },
      { text: "Acute cholecystitis", isCorrect: false },
      { text: "Obstetric cholestasis", isCorrect: false },
      { text: "Hyperemesis gravidarum", isCorrect: false },
    ],
  },
  {
    stem: "Why does gestational diabetes develop, and when is screening usually performed?",
    topic: "Medical Disorders in Pregnancy",
    explanation:
      "Placental hormones — particularly human placental lactogen — create progressive insulin resistance that peaks in the late second and third trimesters. Screening is therefore timed to around 24–28 weeks, when the physiological challenge is greatest and abnormality will be revealed.",
    choices: [
      { text: "Placental hormones cause insulin resistance; screening around 24–28 weeks", isCorrect: true },
      { text: "Pancreatic destruction; screening at booking only", isCorrect: false },
      { text: "Dietary excess alone; screening at 40 weeks", isCorrect: false },
      { text: "Fetal insulin crossing the placenta; screening at 12 weeks", isCorrect: false },
    ],
  },
  {
    stem: "Which fetal complication is characteristic of poorly controlled maternal diabetes?",
    topic: "Medical Disorders in Pregnancy",
    explanation:
      "Macrosomia, with consequent shoulder dystocia risk. Maternal glucose crosses the placenta but insulin does not, so the fetus produces its own — driving growth. After cord clamping that hyperinsulinaemia persists briefly without the glucose supply, causing neonatal hypoglycaemia.",
    choices: [
      { text: "Macrosomia, with risk of shoulder dystocia and neonatal hypoglycaemia", isCorrect: true },
      { text: "Fetal growth restriction with microcephaly", isCorrect: false },
      { text: "Neonatal hyperglycaemia after birth", isCorrect: false },
      { text: "Post-term delivery is the main risk", isCorrect: false },
    ],
  },
  {
    stem: "A woman at 32 weeks has painless bright red vaginal bleeding. What must be excluded before vaginal examination?",
    topic: "Antepartum Haemorrhage",
    explanation:
      "Placenta praevia. Digital vaginal examination can provoke catastrophic haemorrhage from a low-lying placenta, so ultrasound comes first. Painless bleeding suggests praevia; painful bleeding with a tense, tender uterus suggests abruption.",
    choices: [
      { text: "Placenta praevia — ultrasound before any digital examination", isCorrect: true },
      { text: "Cervical ectropion — examine immediately", isCorrect: false },
      { text: "Vasa praevia only", isCorrect: false },
      { text: "Nothing needs excluding first", isCorrect: false },
    ],
  },
  {
    stem: "How does placental abruption typically present, and why can the bleeding be underestimated?",
    topic: "Antepartum Haemorrhage",
    explanation:
      "With painful bleeding and a tense, tender 'woody' uterus. Blood can be concealed behind the placenta, so the visible loss may be trivial while the woman is in significant shock. Judging severity by what is visible is the classic and dangerous error.",
    choices: [
      { text: "Painful bleeding with a woody uterus — blood may be concealed behind the placenta", isCorrect: true },
      { text: "Painless bleeding with a soft uterus", isCorrect: false },
      { text: "Bleeding is always fully visible externally", isCorrect: false },
      { text: "It never causes fetal compromise", isCorrect: false },
    ],
  },
  {
    stem: "What defines the second stage of labour?",
    topic: "Labour",
    explanation:
      "From full cervical dilatation to delivery of the baby. The first stage runs from established labour to full dilatation; the third from delivery of the baby to delivery of the placenta. Prolonged second stage raises the risk of both fetal compromise and postpartum haemorrhage.",
    choices: [
      { text: "Full dilatation to delivery of the baby", isCorrect: true },
      { text: "Onset of contractions to full dilatation", isCorrect: false },
      { text: "Delivery of the baby to delivery of the placenta", isCorrect: false },
      { text: "Rupture of membranes to full dilatation", isCorrect: false },
    ],
  },
  {
    stem: "What is the most common cause of primary postpartum haemorrhage?",
    topic: "Postpartum Haemorrhage",
    explanation:
      "Uterine atony — the four Ts are tone, trauma, tissue and thrombin, and tone accounts for the majority. The uterus normally contracts to compress the spiral arteries; if it does not, bleeding is rapid. Management begins with uterine massage and uterotonics.",
    choices: [
      { text: "Uterine atony", isCorrect: true },
      { text: "Genital tract trauma", isCorrect: false },
      { text: "Retained placental tissue", isCorrect: false },
      { text: "Coagulopathy", isCorrect: false },
    ],
  },
  {
    stem: "A woman collapses suddenly during labour with hypoxia, hypotension and disseminated intravascular coagulation. What must be considered?",
    topic: "Obstetric Emergencies",
    explanation:
      "Amniotic fluid embolism — rare but frequently fatal. Amniotic fluid entering the maternal circulation provokes an anaphylactoid reaction with cardiorespiratory collapse and DIC. Management is supportive and requires immediate multidisciplinary involvement; there is no specific treatment.",
    choices: [
      { text: "Amniotic fluid embolism", isCorrect: true },
      { text: "Simple vasovagal syncope", isCorrect: false },
      { text: "Postural hypotension", isCorrect: false },
      { text: "Anxiety-related hyperventilation", isCorrect: false },
    ],
  },
];

/* ═══════════ OBSTETRICS SET 2 ═══════════ */

const OB2: Q[] = [
  {
    stem: "Why is aortocaval compression relevant when a pregnant woman lies supine?",
    topic: "Maternal Physiology",
    explanation:
      "The gravid uterus compresses the inferior vena cava, reducing venous return and cardiac output — causing supine hypotensive syndrome. Left lateral tilt or manual uterine displacement relieves it, which is why it is a required modification during resuscitation in later pregnancy.",
    choices: [
      { text: "The uterus compresses the IVC, reducing venous return and cardiac output", isCorrect: true },
      { text: "It compresses the aorta, raising blood pressure dangerously", isCorrect: false },
      { text: "It obstructs the ureters causing renal failure", isCorrect: false },
      { text: "It has no haemodynamic significance", isCorrect: false },
    ],
  },
  {
    stem: "Which haematological change of normal pregnancy explains the apparent anaemia on a full blood count?",
    topic: "Maternal Physiology",
    explanation:
      "Plasma volume increases proportionally more than red cell mass, producing a dilutional fall in haemoglobin — physiological anaemia of pregnancy. Genuine iron deficiency is common too, so the finding still warrants assessment rather than automatic dismissal.",
    choices: [
      { text: "Plasma volume rises more than red cell mass, diluting haemoglobin", isCorrect: true },
      { text: "Red cell production ceases in pregnancy", isCorrect: false },
      { text: "The fetus consumes maternal red cells directly", isCorrect: false },
      { text: "Haemolysis is universal in pregnancy", isCorrect: false },
    ],
  },
  {
    stem: "Why is pregnancy a hypercoagulable state, and what is the practical consequence?",
    topic: "Maternal Physiology",
    explanation:
      "Clotting factors rise and fibrinolysis falls — an adaptation limiting blood loss at delivery. The cost is a several-fold increase in venous thromboembolism risk, extending into the puerperium. It remains a leading cause of direct maternal death, which is why thromboprophylaxis is assessed at every contact.",
    choices: [
      { text: "It limits blood loss at delivery, at the cost of raised thromboembolism risk", isCorrect: true },
      { text: "It prevents fetal bleeding", isCorrect: false },
      { text: "It is pathological and always requires anticoagulation", isCorrect: false },
      { text: "It resolves immediately after delivery", isCorrect: false },
    ],
  },
  {
    stem: "Which anticoagulant is preferred in pregnancy, and why?",
    topic: "Prescribing in Pregnancy",
    explanation:
      "Low molecular weight heparin, because it does not cross the placenta. Warfarin is teratogenic and causes fetal bleeding; direct oral anticoagulants lack safety data and cross the placenta. Molecular size determining placental transfer is the principle worth remembering.",
    choices: [
      { text: "Low molecular weight heparin — it does not cross the placenta", isCorrect: true },
      { text: "Warfarin — it is safest in all trimesters", isCorrect: false },
      { text: "Direct oral anticoagulants — well studied in pregnancy", isCorrect: false },
      { text: "Aspirin at treatment dose", isCorrect: false },
    ],
  },
  {
    stem: "Which antihypertensives are commonly used in pregnancy, and which class is contraindicated?",
    topic: "Prescribing in Pregnancy",
    explanation:
      "Labetalol, nifedipine and methyldopa are commonly used. ACE inhibitors and ARBs are contraindicated: fetal kidneys depend on angiotensin II, so blockade causes renal dysgenesis, oligohydramnios and consequent pulmonary hypoplasia.",
    choices: [
      { text: "Labetalol, nifedipine, methyldopa — ACE inhibitors and ARBs are contraindicated", isCorrect: true },
      { text: "ACE inhibitors are first line in pregnancy", isCorrect: false },
      { text: "No antihypertensive is safe in pregnancy", isCorrect: false },
      { text: "Only diuretics may be used", isCorrect: false },
    ],
  },
  {
    stem: "What does a cardiotocograph showing late decelerations suggest?",
    topic: "Fetal Monitoring",
    explanation:
      "Uteroplacental insufficiency — the deceleration begins after the contraction peak and recovers after it ends, reflecting fetal hypoxia. Early decelerations mirror the contraction and reflect benign head compression; variable decelerations suggest cord compression.",
    choices: [
      { text: "Uteroplacental insufficiency with fetal hypoxia", isCorrect: true },
      { text: "Benign head compression", isCorrect: false },
      { text: "Normal fetal sleep cycling", isCorrect: false },
      { text: "Maternal anxiety", isCorrect: false },
    ],
  },
  {
    stem: "Which CTG feature is the most reassuring indicator of fetal wellbeing?",
    topic: "Fetal Monitoring",
    explanation:
      "Normal baseline variability, which reflects an intact autonomic nervous system and adequate oxygenation. Reduced variability is concerning — though it also occurs normally during fetal sleep cycles and after maternal opioids, so the duration and context matter.",
    choices: [
      { text: "Normal baseline variability", isCorrect: true },
      { text: "A completely flat trace", isCorrect: false },
      { text: "A baseline rate of 180 beats per minute", isCorrect: false },
      { text: "Frequent late decelerations", isCorrect: false },
    ],
  },
  {
    stem: "What is shoulder dystocia, and what is the first manoeuvre usually attempted?",
    topic: "Obstetric Emergencies",
    explanation:
      "Impaction of the anterior shoulder behind the pubic symphysis after delivery of the head. McRoberts manoeuvre — hyperflexing the maternal hips — is first line and resolves most cases, often with suprapubic pressure. Fundal pressure must NOT be used; it worsens impaction.",
    choices: [
      { text: "Shoulder impaction behind the symphysis — McRoberts manoeuvre first", isCorrect: true },
      { text: "Cord prolapse — immediate caesarean first", isCorrect: false },
      { text: "Breech presentation — external version first", isCorrect: false },
      { text: "Fundal pressure is the correct first step", isCorrect: false },
    ],
  },
  {
    stem: "A woman has ruptured membranes and the cord is palpable in the vagina. What is the immediate management?",
    topic: "Obstetric Emergencies",
    explanation:
      "Relieve cord compression — elevate the presenting part, position knee-to-chest or head-down, minimise handling of the cord, and arrange immediate delivery, usually by caesarean. The cord must be kept warm and handled as little as possible because manipulation provokes vasospasm.",
    choices: [
      { text: "Relieve pressure on the cord and deliver immediately", isCorrect: true },
      { text: "Attempt to replace the cord into the uterus and await labour", isCorrect: false },
      { text: "Observe with continuous monitoring only", isCorrect: false },
      { text: "Administer tocolytics and discharge home", isCorrect: false },
    ],
  },
  {
    stem: "Which infection screened for in pregnancy can cause congenital deafness, cataracts and cardiac defects if acquired in the first trimester?",
    topic: "Infection in Pregnancy",
    explanation:
      "Rubella. First-trimester infection carries the highest teratogenic risk, producing sensorineural deafness, cataracts and patent ductus arteriosus. It is vaccine-preventable, but the vaccine is live and so is given before pregnancy or postnatally, not during.",
    choices: [
      { text: "Rubella", isCorrect: true },
      { text: "Influenza", isCorrect: false },
      { text: "Hepatitis A", isCorrect: false },
      { text: "Rotavirus", isCorrect: false },
    ],
  },
  {
    stem: "Why is group B streptococcus screened for or treated intrapartum?",
    topic: "Infection in Pregnancy",
    explanation:
      "It colonises the maternal genital tract harmlessly but can cause severe early-onset neonatal sepsis, pneumonia and meningitis. Intrapartum antibiotic prophylaxis substantially reduces transmission — the timing matters, since treating earlier in pregnancy does not prevent recolonisation.",
    choices: [
      { text: "It can cause severe early-onset neonatal sepsis; intrapartum antibiotics reduce transmission", isCorrect: true },
      { text: "It causes maternal septicaemia in most carriers", isCorrect: false },
      { text: "It is teratogenic in the first trimester", isCorrect: false },
      { text: "Treatment in early pregnancy eradicates it permanently", isCorrect: false },
    ],
  },
  {
    stem: "A woman develops intense generalised itching in the third trimester with raised bile acids but no rash. What is the diagnosis?",
    topic: "Medical Disorders in Pregnancy",
    explanation:
      "Obstetric cholestasis. Itching is typically worst on palms and soles and at night, with no primary rash. It matters because it carries an increased risk of stillbirth, so it prompts closer surveillance and consideration of timing of delivery.",
    choices: [
      { text: "Obstetric cholestasis", isCorrect: true },
      { text: "Pre-eclampsia", isCorrect: false },
      { text: "Contact dermatitis", isCorrect: false },
      { text: "Scabies", isCorrect: false },
    ],
  },
  {
    stem: "What defines hyperemesis gravidarum as opposed to normal pregnancy nausea?",
    topic: "Medical Disorders in Pregnancy",
    explanation:
      "Persistent vomiting with weight loss, dehydration and electrolyte disturbance — often with ketonuria. It requires admission for fluids, antiemetics and thiamine, since Wernicke's encephalopathy is a genuine risk from prolonged vomiting. Nausea alone, however unpleasant, is not hyperemesis.",
    choices: [
      { text: "Vomiting with weight loss, dehydration and electrolyte disturbance", isCorrect: true },
      { text: "Any nausea occurring in the first trimester", isCorrect: false },
      { text: "Vomiting occurring only after 20 weeks", isCorrect: false },
      { text: "Nausea relieved by eating", isCorrect: false },
    ],
  },
  {
    stem: "Which condition should be suspected in a woman with a uterus large for dates, very high hCG and a 'snowstorm' appearance on ultrasound?",
    topic: "Trophoblastic Disease",
    explanation:
      "Molar pregnancy — gestational trophoblastic disease. It requires evacuation and subsequent hCG surveillance, because a small proportion progress to persistent trophoblastic disease or choriocarcinoma. Pregnancy is avoided during follow-up so a rising hCG can be interpreted.",
    choices: [
      { text: "Molar pregnancy (gestational trophoblastic disease)", isCorrect: true },
      { text: "Twin pregnancy with normal physiology", isCorrect: false },
      { text: "Polyhydramnios alone", isCorrect: false },
      { text: "Uterine fibroids", isCorrect: false },
    ],
  },
  {
    stem: "A woman is tearful, low in mood and struggling to bond three weeks after delivery. What must be distinguished from postnatal depression?",
    topic: "Postnatal Care",
    explanation:
      "Puerperal psychosis, a psychiatric emergency with delusions, hallucinations or severe mood disturbance — it carries real risk to mother and infant and needs urgent specialist assessment. 'Baby blues' resolve within about two weeks; persistent symptoms beyond that suggest depression, and psychotic features change the urgency entirely.",
    choices: [
      { text: "Puerperal psychosis, which is a psychiatric emergency", isCorrect: true },
      { text: "Normal baby blues requiring no assessment", isCorrect: false },
      { text: "Simple sleep deprivation only", isCorrect: false },
      { text: "Thyroid disease is the only alternative", isCorrect: false },
    ],
  },
];

/* ═══════════ GYNAECOLOGY SET 1 ═══════════ */

const GY1: Q[] = [
  {
    stem: "Which phase of the menstrual cycle is of relatively constant length?",
    topic: "Menstrual Cycle",
    explanation:
      "The luteal phase, at approximately 14 days, determined by the corpus luteum's lifespan. Cycle length variation therefore comes almost entirely from the follicular phase — which is why ovulation is estimated by counting BACK 14 days from the next expected period rather than forward from the last.",
    choices: [
      { text: "The luteal phase, at about 14 days", isCorrect: true },
      { text: "The follicular phase, at about 14 days", isCorrect: false },
      { text: "Both phases are equally variable", isCorrect: false },
      { text: "Menstruation itself is the fixed phase", isCorrect: false },
    ],
  },
  {
    stem: "What triggers ovulation?",
    topic: "Menstrual Cycle",
    explanation:
      "The LH surge, itself triggered when sustained high oestradiol from the dominant follicle switches negative feedback to POSITIVE. Ovulation follows roughly 36 hours later. That switch from negative to positive feedback is the pivotal event of the cycle.",
    choices: [
      { text: "The LH surge, driven by high oestradiol switching to positive feedback", isCorrect: true },
      { text: "A fall in FSH alone", isCorrect: false },
      { text: "The rise in progesterone from the corpus luteum", isCorrect: false },
      { text: "Onset of menstruation", isCorrect: false },
    ],
  },
  {
    stem: "A woman has oligomenorrhoea, hirsutism and polycystic ovaries on scan. What is the diagnosis and its metabolic significance?",
    topic: "PCOS",
    explanation:
      "Polycystic ovary syndrome, diagnosed on two of three Rotterdam criteria. It matters beyond fertility: insulin resistance underlies much of it, raising lifetime risk of type 2 diabetes, and unopposed oestrogen from anovulation raises endometrial cancer risk.",
    choices: [
      { text: "PCOS — with insulin resistance and endometrial cancer risk", isCorrect: true },
      { text: "Premature ovarian insufficiency", isCorrect: false },
      { text: "Hypothyroidism alone", isCorrect: false },
      { text: "Normal variation requiring no follow-up", isCorrect: false },
    ],
  },
  {
    stem: "Why does anovulation in PCOS increase endometrial cancer risk?",
    topic: "PCOS",
    explanation:
      "Without ovulation there is no corpus luteum and therefore no progesterone to oppose oestrogen. Chronic unopposed oestrogen drives endometrial proliferation, hyperplasia and eventually carcinoma — which is why inducing regular withdrawal bleeds is protective, not merely cosmetic.",
    choices: [
      { text: "Absent progesterone leaves oestrogen unopposed, driving endometrial proliferation", isCorrect: true },
      { text: "Excess progesterone causes hyperplasia", isCorrect: false },
      { text: "Androgens directly cause endometrial cancer", isCorrect: false },
      { text: "The ovarian cysts become malignant", isCorrect: false },
    ],
  },
  {
    stem: "A woman has severe cyclical pelvic pain, dyspareunia and subfertility. Which diagnosis fits?",
    topic: "Endometriosis",
    explanation:
      "Endometriosis — endometrial-like tissue outside the uterus responding to cyclical hormones, causing inflammation and adhesions. Symptom severity correlates poorly with disease extent, and diagnostic delay of years is common because pain is often normalised.",
    choices: [
      { text: "Endometriosis", isCorrect: true },
      { text: "Uncomplicated dysmenorrhoea", isCorrect: false },
      { text: "Urinary tract infection", isCorrect: false },
      { text: "Irritable bowel syndrome alone", isCorrect: false },
    ],
  },
  {
    stem: "What is adenomyosis, and how does it typically present?",
    topic: "Endometriosis",
    explanation:
      "Endometrial tissue within the myometrium, presenting with heavy painful periods and a bulky, tender uterus. It is commoner in parous women in their forties. It differs from endometriosis, where the tissue lies outside the uterus altogether.",
    choices: [
      { text: "Endometrial tissue within the myometrium — heavy painful periods, bulky uterus", isCorrect: true },
      { text: "Endometrial tissue on the ovaries", isCorrect: false },
      { text: "Fibrous tumours of the cervix", isCorrect: false },
      { text: "Endometrial malignancy", isCorrect: false },
    ],
  },
  {
    stem: "Which benign uterine tumour is oestrogen-dependent and commonly causes heavy menstrual bleeding?",
    topic: "Fibroids",
    explanation:
      "Uterine fibroids (leiomyomas), benign smooth muscle tumours. Being oestrogen-dependent, they typically grow during reproductive years and regress after menopause — which is why new growth in a postmenopausal woman is concerning and warrants investigation.",
    choices: [
      { text: "Uterine fibroids (leiomyomas)", isCorrect: true },
      { text: "Endometrial polyps only", isCorrect: false },
      { text: "Ovarian dermoid cysts", isCorrect: false },
      { text: "Cervical ectropion", isCorrect: false },
    ],
  },
  {
    stem: "What is the most important initial investigation for postmenopausal bleeding?",
    topic: "Postmenopausal Bleeding",
    explanation:
      "Transvaginal ultrasound to measure endometrial thickness, with biopsy if it exceeds the threshold or bleeding persists. Postmenopausal bleeding is endometrial cancer until proven otherwise — most cases turn out benign, but the consequence of missing it justifies investigating every one.",
    choices: [
      { text: "Transvaginal ultrasound for endometrial thickness, with biopsy as indicated", isCorrect: true },
      { text: "Reassurance and review in one year", isCorrect: false },
      { text: "A course of hormone replacement therapy", isCorrect: false },
      { text: "Abdominal radiograph", isCorrect: false },
    ],
  },
  {
    stem: "Which HPV types are most strongly associated with cervical cancer, and how does screening work?",
    topic: "Cervical Disease",
    explanation:
      "Types 16 and 18. Screening now typically tests for high-risk HPV first, with cytology performed only if HPV is detected — a more sensitive strategy than cytology alone. Vaccination plus screening is why cervical cancer incidence has fallen where both are established.",
    choices: [
      { text: "HPV 16 and 18 — screening tests for high-risk HPV, then cytology if positive", isCorrect: true },
      { text: "HPV 6 and 11 — cytology only", isCorrect: false },
      { text: "Herpes simplex — annual biopsy", isCorrect: false },
      { text: "No viral cause is established", isCorrect: false },
    ],
  },
  {
    stem: "What is cervical ectropion, and why does it bleed?",
    topic: "Cervical Disease",
    explanation:
      "Columnar endocervical epithelium extending onto the ectocervix, common with oestrogen exposure — pregnancy, combined contraception, adolescence. Being single-layered and fragile it bleeds on contact, causing postcoital bleeding. It is benign, but malignancy must still be excluded.",
    choices: [
      { text: "Fragile columnar epithelium on the ectocervix that bleeds on contact", isCorrect: true },
      { text: "A premalignant lesion requiring excision", isCorrect: false },
      { text: "Infection of the cervical canal", isCorrect: false },
      { text: "A form of cervical carcinoma", isCorrect: false },
    ],
  },
  {
    stem: "Which ovarian tumour marker is used in the assessment of a suspicious adnexal mass, and what limits it?",
    topic: "Ovarian Disease",
    explanation:
      "CA 125. It rises in endometriosis, fibroids, pelvic infection, pregnancy and menstruation, so it is non-specific — particularly in premenopausal women. It is used with ultrasound in a risk index rather than interpreted alone.",
    choices: [
      { text: "CA 125 — raised in many benign conditions, so used with imaging in a risk index", isCorrect: true },
      { text: "Alpha-fetoprotein — completely specific for ovarian cancer", isCorrect: false },
      { text: "PSA", isCorrect: false },
      { text: "Beta-hCG only", isCorrect: false },
    ],
  },
  {
    stem: "Why does ovarian cancer typically present at an advanced stage?",
    topic: "Ovarian Disease",
    explanation:
      "Early symptoms are vague and easily attributed to other causes — bloating, early satiety, urinary frequency, abdominal discomfort. The ovaries sit in the peritoneal cavity with room to grow silently, and no effective screening test exists for the general population.",
    choices: [
      { text: "Symptoms are vague and non-specific, and no effective screening exists", isCorrect: true },
      { text: "It grows extremely slowly over decades", isCorrect: false },
      { text: "Screening exists but is rarely offered", isCorrect: false },
      { text: "It causes no symptoms at any stage", isCorrect: false },
    ],
  },
  {
    stem: "A woman has sudden severe unilateral pelvic pain with vomiting and a known ovarian cyst. What must be excluded?",
    topic: "Gynaecological Emergencies",
    explanation:
      "Ovarian torsion. The ovary twists on its pedicle, compromising blood supply — a surgical emergency, since delay costs the ovary. Doppler flow can be misleading because dual blood supply means flow may persist despite torsion, so clinical suspicion outweighs imaging.",
    choices: [
      { text: "Ovarian torsion — a surgical emergency where imaging can mislead", isCorrect: true },
      { text: "Simple functional cyst needing no action", isCorrect: false },
      { text: "Urinary tract infection", isCorrect: false },
      { text: "Constipation", isCorrect: false },
    ],
  },
  {
    stem: "Which organisms most commonly cause pelvic inflammatory disease, and what is the long-term consequence?",
    topic: "Pelvic Infection",
    explanation:
      "Chlamydia trachomatis and Neisseria gonorrhoeae, often with anaerobes. Tubal scarring causes subfertility, chronic pelvic pain and a markedly raised ectopic pregnancy risk — which is why the threshold for empirical treatment is deliberately low.",
    choices: [
      { text: "Chlamydia and gonorrhoea — causing tubal damage, subfertility and ectopic risk", isCorrect: true },
      { text: "Candida — causing no long-term consequence", isCorrect: false },
      { text: "E. coli — causing renal scarring", isCorrect: false },
      { text: "Group B streptococcus — causing cervical cancer", isCorrect: false },
    ],
  },
  {
    stem: "Which contraceptive method is most effective at typical use?",
    topic: "Contraception",
    explanation:
      "Long-acting reversible contraception — implants and intrauterine devices — because effectiveness does not depend on the user remembering anything. The gap between perfect and typical use is what separates them from pills, patches and barrier methods.",
    choices: [
      { text: "Long-acting reversible contraception (implant or IUD)", isCorrect: true },
      { text: "The combined oral contraceptive pill", isCorrect: false },
      { text: "Male condoms", isCorrect: false },
      { text: "Fertility awareness methods", isCorrect: false },
    ],
  },
];

/* ═══════════ GYNAECOLOGY SET 2 ═══════════ */

const GY2: Q[] = [
  {
    stem: "Which contraceptive is contraindicated in a woman with migraine WITH aura?",
    topic: "Contraception",
    explanation:
      "Combined hormonal contraception, because the oestrogen component compounds an already raised ischaemic stroke risk. Progestogen-only methods are acceptable. Asking specifically about aura rather than just 'headaches' is what makes this a safe consultation.",
    choices: [
      { text: "Combined hormonal contraception", isCorrect: true },
      { text: "The progestogen-only pill", isCorrect: false },
      { text: "The copper intrauterine device", isCorrect: false },
      { text: "Condoms", isCorrect: false },
    ],
  },
  {
    stem: "How does the copper intrauterine device prevent pregnancy, and what makes it useful for emergency contraception?",
    topic: "Contraception",
    explanation:
      "Copper ions are toxic to sperm and ova and provoke a sterile inflammatory reaction preventing fertilisation and implantation. Because it acts on implantation it is the most effective emergency method, and it then continues as ongoing contraception — hormone-free.",
    choices: [
      { text: "Copper is spermicidal and prevents implantation — the most effective emergency method", isCorrect: true },
      { text: "It releases progestogen locally", isCorrect: false },
      { text: "It blocks ovulation via the pituitary", isCorrect: false },
      { text: "It cannot be used for emergency contraception", isCorrect: false },
    ],
  },
  {
    stem: "What defines primary amenorrhoea, and what is a common structural cause?",
    topic: "Amenorrhoea",
    explanation:
      "Absence of menarche by around 15 with normal secondary sexual characteristics, or by 13 with none. Structural causes include imperforate hymen or Müllerian agenesis; endocrine causes include Turner syndrome and hypothalamic dysfunction. Cyclical pain with no bleeding points strongly to outflow obstruction.",
    choices: [
      { text: "No menarche by ~15 with normal development — outflow obstruction is one cause", isCorrect: true },
      { text: "Absent periods for three months in a previously menstruating woman", isCorrect: false },
      { text: "Irregular periods in adolescence", isCorrect: false },
      { text: "Absent periods after menopause", isCorrect: false },
    ],
  },
  {
    stem: "A young athlete with low body weight develops amenorrhoea. What is the mechanism?",
    topic: "Amenorrhoea",
    explanation:
      "Functional hypothalamic amenorrhoea — energy deficiency suppresses GnRH pulsatility, so LH and FSH fall and ovulation ceases. It is a protective adaptation, but prolonged hypo-oestrogenism harms bone density. Restoring energy availability is the treatment, not simply prescribing hormones.",
    choices: [
      { text: "Energy deficiency suppresses GnRH pulsatility", isCorrect: true },
      { text: "Primary ovarian failure", isCorrect: false },
      { text: "Pituitary tumour in all cases", isCorrect: false },
      { text: "Excess oestrogen production", isCorrect: false },
    ],
  },
  {
    stem: "A woman has amenorrhoea, galactorrhoea and a raised prolactin. What should be investigated?",
    topic: "Amenorrhoea",
    explanation:
      "A pituitary prolactinoma, after excluding drugs (antipsychotics, metoclopramide), hypothyroidism and pregnancy. Prolactin suppresses GnRH, causing anovulation. Dopamine agonists usually shrink the tumour effectively, so surgery is rarely first line.",
    choices: [
      { text: "Prolactinoma, after excluding drugs, hypothyroidism and pregnancy", isCorrect: true },
      { text: "Ovarian failure only", isCorrect: false },
      { text: "Endometrial cancer", isCorrect: false },
      { text: "No investigation is needed", isCorrect: false },
    ],
  },
  {
    stem: "What defines premature ovarian insufficiency, and why does it matter beyond fertility?",
    topic: "Menopause",
    explanation:
      "Loss of ovarian function before 40, with raised FSH. Beyond fertility, prolonged oestrogen deficiency at a young age accelerates osteoporosis and cardiovascular risk — which is why hormone replacement is generally recommended at least until the natural age of menopause.",
    choices: [
      { text: "Ovarian failure before 40 — with bone and cardiovascular consequences", isCorrect: true },
      { text: "Menopause occurring before 55", isCorrect: false },
      { text: "Irregular cycles in the forties", isCorrect: false },
      { text: "It has no consequences beyond fertility", isCorrect: false },
    ],
  },
  {
    stem: "Why must a progestogen be included in hormone replacement therapy for a woman with an intact uterus?",
    topic: "Menopause",
    explanation:
      "Unopposed oestrogen causes endometrial hyperplasia and raises endometrial cancer risk. Progestogen protects the endometrium. A woman who has had a hysterectomy needs oestrogen alone — the progestogen exists purely for endometrial protection.",
    choices: [
      { text: "To protect the endometrium from unopposed oestrogen", isCorrect: true },
      { text: "To improve hot flush control specifically", isCorrect: false },
      { text: "To prevent osteoporosis", isCorrect: false },
      { text: "It is optional in all women", isCorrect: false },
    ],
  },
  {
    stem: "Which investigation should be arranged first when assessing a couple with subfertility?",
    topic: "Subfertility",
    explanation:
      "Semen analysis, alongside confirming ovulation with a mid-luteal progesterone. Male factor accounts for a substantial proportion of cases, and semen analysis is simple and non-invasive — investigating the woman extensively while omitting it is a common and avoidable error.",
    choices: [
      { text: "Semen analysis, with mid-luteal progesterone to confirm ovulation", isCorrect: true },
      { text: "Diagnostic laparoscopy immediately", isCorrect: false },
      { text: "Hysterectomy for assessment", isCorrect: false },
      { text: "Genetic karyotyping of both partners first", isCorrect: false },
    ],
  },
  {
    stem: "What does a mid-luteal progesterone above the threshold confirm?",
    topic: "Subfertility",
    explanation:
      "That ovulation has occurred, since progesterone is produced by the corpus luteum. Timing matters — it must be taken about 7 days before the expected period, which is not simply 'day 21' in a woman with an irregular or long cycle.",
    choices: [
      { text: "That ovulation has occurred in that cycle", isCorrect: true },
      { text: "That the fallopian tubes are patent", isCorrect: false },
      { text: "That the sperm count is adequate", isCorrect: false },
      { text: "That implantation has occurred", isCorrect: false },
    ],
  },
  {
    stem: "Which type of urinary incontinence is characterised by leakage on coughing or laughing?",
    topic: "Urogynaecology",
    explanation:
      "Stress incontinence, from urethral sphincter or pelvic floor weakness — commonly after childbirth. Urge incontinence, from detrusor overactivity, presents with sudden urgency instead. Pelvic floor training is first line for stress incontinence and is genuinely effective when done properly.",
    choices: [
      { text: "Stress incontinence", isCorrect: true },
      { text: "Urge incontinence", isCorrect: false },
      { text: "Overflow incontinence", isCorrect: false },
      { text: "Functional incontinence", isCorrect: false },
    ],
  },
  {
    stem: "What is the first-line management of pelvic organ prolapse in a woman who wishes to avoid surgery?",
    topic: "Urogynaecology",
    explanation:
      "Pelvic floor muscle training, with a vaginal pessary as a non-surgical option for symptomatic prolapse. Weight reduction and treating chronic cough or constipation address the contributing pressures. Surgery is reserved for those in whom conservative measures fail.",
    choices: [
      { text: "Pelvic floor training, with a pessary as a non-surgical option", isCorrect: true },
      { text: "Immediate hysterectomy", isCorrect: false },
      { text: "Long-term catheterisation", isCorrect: false },
      { text: "No treatment is available without surgery", isCorrect: false },
    ],
  },
  {
    stem: "Which vaginal infection produces a thin grey discharge with a fishy odour and clue cells?",
    topic: "Vaginal Infection",
    explanation:
      "Bacterial vaginosis — an overgrowth of anaerobes with loss of lactobacilli, raising vaginal pH. It is not a sexually transmitted infection but is associated with preterm birth in pregnancy. Candida gives thick white discharge with itching and a normal pH.",
    choices: [
      { text: "Bacterial vaginosis", isCorrect: true },
      { text: "Vulvovaginal candidiasis", isCorrect: false },
      { text: "Trichomoniasis", isCorrect: false },
      { text: "Chlamydia", isCorrect: false },
    ],
  },
  {
    stem: "A woman has frothy yellow-green discharge and a 'strawberry cervix'. Which organism is responsible?",
    topic: "Vaginal Infection",
    explanation:
      "Trichomonas vaginalis, a flagellated protozoan and a sexually transmitted infection. Partners require treatment, and metronidazole is used. The strawberry cervix — punctate haemorrhages — is characteristic though not always present.",
    choices: [
      { text: "Trichomonas vaginalis", isCorrect: true },
      { text: "Candida albicans", isCorrect: false },
      { text: "Gardnerella vaginalis", isCorrect: false },
      { text: "Neisseria gonorrhoeae", isCorrect: false },
    ],
  },
  {
    stem: "Which gynaecological cancer is most strongly associated with obesity, and why?",
    topic: "Gynaecological Oncology",
    explanation:
      "Endometrial cancer. Adipose tissue converts androgens to oestrogen via aromatase, so obesity produces chronic unopposed oestrogen exposure in postmenopausal women. Nulliparity, late menopause, PCOS and tamoxifen share the same mechanism.",
    choices: [
      { text: "Endometrial cancer — adipose aromatase produces unopposed oestrogen", isCorrect: true },
      { text: "Cervical cancer — through HPV persistence", isCorrect: false },
      { text: "Vulval cancer — through skin changes", isCorrect: false },
      { text: "Ovarian cancer — through ovulation frequency", isCorrect: false },
    ],
  },
  {
    stem: "Which factor is PROTECTIVE against ovarian cancer?",
    topic: "Gynaecological Oncology",
    explanation:
      "Anything reducing lifetime ovulations — combined oral contraception, pregnancy, breastfeeding. The incessant ovulation hypothesis holds that repeated surface epithelial repair increases mutation opportunity, so suppressing ovulation reduces risk. Early menarche and late menopause do the opposite.",
    choices: [
      { text: "Combined oral contraceptive use, which suppresses ovulation", isCorrect: true },
      { text: "Nulliparity", isCorrect: false },
      { text: "Early menarche with late menopause", isCorrect: false },
      { text: "A BRCA1 mutation", isCorrect: false },
    ],
  },
];

/* ═══════════ REPRODUCTIVE ENDOCRINOLOGY ═══════════ */

const REPRO: Q[] = [
  {
    stem: "Which hormone from the hypothalamus drives the reproductive axis, and why must it be pulsatile?",
    topic: "Reproductive Axis",
    explanation:
      "GnRH. Pulsatile release stimulates LH and FSH, but CONTINUOUS exposure downregulates pituitary receptors and suppresses them. This paradox is used therapeutically — continuous GnRH agonists cause chemical castration in prostate cancer and endometriosis.",
    choices: [
      { text: "GnRH — pulsatile stimulates, continuous suppresses", isCorrect: true },
      { text: "GnRH — continuous release is required for stimulation", isCorrect: false },
      { text: "Prolactin — released continuously", isCorrect: false },
      { text: "Oxytocin — released in pulses", isCorrect: false },
    ],
  },
  {
    stem: "What is the role of FSH in the follicular phase?",
    topic: "Reproductive Axis",
    explanation:
      "It recruits and stimulates growth of a cohort of follicles and drives granulosa cell aromatase, converting androgens to oestradiol. Rising oestradiol and inhibin then suppress FSH, so only the most responsive follicle survives — the mechanism that normally produces a single dominant follicle.",
    choices: [
      { text: "It recruits follicles and drives aromatase to produce oestradiol", isCorrect: true },
      { text: "It triggers ovulation directly", isCorrect: false },
      { text: "It maintains the corpus luteum", isCorrect: false },
      { text: "It thickens the endometrium directly", isCorrect: false },
    ],
  },
  {
    stem: "In the two-cell two-gonadotrophin model, which cells produce androgens and which convert them?",
    topic: "Reproductive Axis",
    explanation:
      "Theca cells produce androgens under LH; granulosa cells convert them to oestrogens via aromatase under FSH. This division explains PCOS neatly — excess LH drives thecal androgen production beyond what granulosa aromatase can convert, so androgens accumulate.",
    choices: [
      { text: "Theca cells make androgens under LH; granulosa cells aromatise them under FSH", isCorrect: true },
      { text: "Granulosa cells make androgens; theca cells aromatise them", isCorrect: false },
      { text: "Both are produced by the corpus luteum", isCorrect: false },
      { text: "The adrenal gland performs both steps", isCorrect: false },
    ],
  },
  {
    stem: "What maintains the corpus luteum if conception occurs?",
    topic: "Early Pregnancy Endocrinology",
    explanation:
      "hCG from the trophoblast, which acts on the LH receptor to sustain progesterone production until the placenta takes over at around 8–10 weeks. Without it the corpus luteum regresses, progesterone falls and menstruation occurs — which is why hCG is the pregnancy signal.",
    choices: [
      { text: "hCG from the trophoblast, acting on the LH receptor", isCorrect: true },
      { text: "Continued FSH secretion", isCorrect: false },
      { text: "Rising oestradiol from the ovary", isCorrect: false },
      { text: "Prolactin from the pituitary", isCorrect: false },
    ],
  },
  {
    stem: "What is the principal role of progesterone in the endometrium?",
    topic: "Endometrial Physiology",
    explanation:
      "It converts proliferative endometrium into secretory endometrium, receptive to implantation, and opposes oestrogen-driven proliferation. Its withdrawal when the corpus luteum regresses triggers menstruation — so menstruation is a withdrawal event, not an active process.",
    choices: [
      { text: "It induces secretory change and opposes oestrogenic proliferation", isCorrect: true },
      { text: "It drives endometrial proliferation", isCorrect: false },
      { text: "It causes endometrial atrophy immediately", isCorrect: false },
      { text: "It has no endometrial effect", isCorrect: false },
    ],
  },
  {
    stem: "Which hormone is responsible for milk EJECTION, as opposed to milk production?",
    topic: "Lactation",
    explanation:
      "Oxytocin, causing myoepithelial contraction — the let-down reflex, triggered by suckling and even by hearing the infant. Prolactin drives milk PRODUCTION. Separating the two explains why stress can impair let-down without affecting supply.",
    choices: [
      { text: "Oxytocin", isCorrect: true },
      { text: "Prolactin", isCorrect: false },
      { text: "Oestrogen", isCorrect: false },
      { text: "Progesterone", isCorrect: false },
    ],
  },
  {
    stem: "Why does lactation not begin until after delivery despite high prolactin in pregnancy?",
    topic: "Lactation",
    explanation:
      "High placental oestrogen and progesterone block prolactin's action on the breast. Delivering the placenta removes that inhibition, so milk production begins. This explains why retained placental fragments can delay lactogenesis.",
    choices: [
      { text: "Placental oestrogen and progesterone inhibit prolactin's action until delivery", isCorrect: true },
      { text: "Prolactin is only produced after birth", isCorrect: false },
      { text: "The breast is not developed until delivery", isCorrect: false },
      { text: "Oxytocin is absent during pregnancy", isCorrect: false },
    ],
  },
  {
    stem: "Which condition should be considered in a woman with hirsutism, rapid virilisation and a markedly raised testosterone?",
    topic: "Androgen Excess",
    explanation:
      "An androgen-secreting tumour of ovary or adrenal. PCOS causes mild, gradual hirsutism with modestly raised androgens; RAPID onset with virilisation — clitoromegaly, voice deepening, male-pattern balding — suggests a tumour and warrants urgent imaging.",
    choices: [
      { text: "An androgen-secreting ovarian or adrenal tumour", isCorrect: true },
      { text: "Typical PCOS", isCorrect: false },
      { text: "Hypothyroidism", isCorrect: false },
      { text: "Normal variation", isCorrect: false },
    ],
  },
  {
    stem: "Which enzyme deficiency causes congenital adrenal hyperplasia in most cases?",
    topic: "Androgen Excess",
    explanation:
      "21-hydroxylase deficiency. Cortisol and aldosterone synthesis is blocked, so precursors are shunted into androgen production — causing virilisation, and salt-wasting crisis in severe forms. Loss of cortisol negative feedback drives ACTH up, producing the adrenal hyperplasia.",
    choices: [
      { text: "21-hydroxylase deficiency", isCorrect: true },
      { text: "Aromatase deficiency", isCorrect: false },
      { text: "5-alpha reductase deficiency", isCorrect: false },
      { text: "Aldosterone synthase deficiency", isCorrect: false },
    ],
  },
  {
    stem: "How does the combined oral contraceptive prevent pregnancy?",
    topic: "Hormonal Contraception",
    explanation:
      "Primarily by suppressing the hypothalamic-pituitary axis so no LH surge occurs and ovulation is prevented. It also thickens cervical mucus and thins the endometrium. The multiple mechanisms are why it remains effective even if one is partially overcome.",
    choices: [
      { text: "It suppresses gonadotrophins so ovulation does not occur", isCorrect: true },
      { text: "It prevents implantation only", isCorrect: false },
      { text: "It is spermicidal in the vagina", isCorrect: false },
      { text: "It blocks fertilisation in the tube directly", isCorrect: false },
    ],
  },
  {
    stem: "Why does the combined pill raise venous thromboembolism risk?",
    topic: "Hormonal Contraception",
    explanation:
      "Oestrogen increases hepatic synthesis of clotting factors and induces resistance to activated protein C. The absolute risk remains low in healthy women, but it rises substantially with smoking over 35, obesity, immobility or thrombophilia — which is why those factors are screened for before prescribing.",
    choices: [
      { text: "Oestrogen raises clotting factor synthesis and causes activated protein C resistance", isCorrect: true },
      { text: "Progestogen destroys platelets", isCorrect: false },
      { text: "It causes direct endothelial damage", isCorrect: false },
      { text: "The risk is entirely theoretical", isCorrect: false },
    ],
  },
  {
    stem: "Which hormonal change is responsible for postmenopausal osteoporosis?",
    topic: "Menopause Endocrinology",
    explanation:
      "Oestrogen deficiency. Oestrogen restrains osteoclast activity, so its loss accelerates bone resorption — with the fastest loss in the first few years after menopause. This is why bone density falls sharply then plateaus, and why early menopause carries greater lifetime risk.",
    choices: [
      { text: "Oestrogen deficiency removing restraint on osteoclasts", isCorrect: true },
      { text: "Excess progesterone", isCorrect: false },
      { text: "Raised FSH acting directly on bone", isCorrect: false },
      { text: "Testosterone deficiency alone", isCorrect: false },
    ],
  },
  {
    stem: "Why do FSH and LH rise at menopause?",
    topic: "Menopause Endocrinology",
    explanation:
      "Depletion of ovarian follicles removes oestradiol and inhibin, so negative feedback on the pituitary is lost and gonadotrophins rise — FSH particularly, because inhibin B specifically suppresses it. A raised FSH is therefore the biochemical marker of ovarian failure.",
    choices: [
      { text: "Follicle depletion removes oestradiol and inhibin feedback", isCorrect: true },
      { text: "The pituitary becomes autonomously overactive", isCorrect: false },
      { text: "Oestrogen levels rise, stimulating the pituitary", isCorrect: false },
      { text: "It reflects hypothalamic failure", isCorrect: false },
    ],
  },
  {
    stem: "In assisted reproduction, what is ovarian hyperstimulation syndrome?",
    topic: "Assisted Reproduction",
    explanation:
      "An exaggerated response to ovarian stimulation causing VEGF-mediated increased vascular permeability, with fluid shifting into third spaces — ascites, pleural effusion, haemoconcentration and thrombosis risk. Severe cases require admission. It is largely iatrogenic, so prevention through protocol choice matters.",
    choices: [
      { text: "Excessive stimulation causing vascular leak, ascites and thrombosis risk", isCorrect: true },
      { text: "Failure of the ovaries to respond at all", isCorrect: false },
      { text: "Ovarian torsion following egg collection", isCorrect: false },
      { text: "Infection of the ovarian follicles", isCorrect: false },
    ],
  },
  {
    stem: "Why is single embryo transfer generally preferred in IVF?",
    topic: "Assisted Reproduction",
    explanation:
      "Multiple pregnancy is the single greatest risk of assisted reproduction — carrying higher rates of preterm birth, pre-eclampsia, growth restriction and perinatal mortality. Transferring one good embryo with the option of freezing others achieves comparable cumulative success with far less risk.",
    choices: [
      { text: "It avoids multiple pregnancy, the greatest risk of assisted reproduction", isCorrect: true },
      { text: "It costs less per cycle", isCorrect: false },
      { text: "Multiple embryos never implant", isCorrect: false },
      { text: "It guarantees a higher pregnancy rate per transfer", isCorrect: false },
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
  console.log("Seeding Obstetrics & Gynaecology…\n");
  const CAT = "cs-obstetrics-gynaecology";

  await seedSet({
    categorySlug: CAT, slug: "obstetrics-set-1",
    title: "Obstetrics — Practice Set 1",
    description: "Early pregnancy and ectopic, antenatal care, hypertensive disorders, diabetes, antepartum haemorrhage, labour and postpartum haemorrhage. Fifteen questions, untimed.",
    kind: "PRACTICE", timeLimitSeconds: null, difficulty: "Intermediate", questions: OB1,
  });

  await seedSet({
    categorySlug: CAT, slug: "obstetrics-set-2",
    title: "Obstetrics — Practice Set 2",
    description: "Maternal physiology, prescribing in pregnancy, fetal monitoring, obstetric emergencies, infection, cholestasis, trophoblastic disease and postnatal care. Fifteen fresh questions.",
    kind: "PRACTICE", timeLimitSeconds: null, difficulty: "Intermediate", questions: OB2,
  });

  await seedSet({
    categorySlug: CAT, slug: "gynaecology-set-1",
    title: "Gynaecology — Practice Set 1",
    description: "Menstrual cycle, PCOS, endometriosis, fibroids, postmenopausal bleeding, cervical and ovarian disease, pelvic infection and contraception. Fifteen questions.",
    kind: "PRACTICE", timeLimitSeconds: null, difficulty: "Intermediate", questions: GY1,
  });

  await seedSet({
    categorySlug: CAT, slug: "gynaecology-set-2",
    title: "Gynaecology — Practice Set 2",
    description: "Contraceptive safety, amenorrhoea, menopause and HRT, subfertility, urogynaecology, vaginal infection and gynaecological oncology. Fifteen fresh questions.",
    kind: "PRACTICE", timeLimitSeconds: null, difficulty: "Intermediate", questions: GY2,
  });

  await seedSet({
    categorySlug: CAT, slug: "reproductive-endocrinology-set-1",
    title: "Reproductive Endocrinology — Practice Set 1",
    description: "The reproductive axis, follicular development, early pregnancy endocrinology, lactation, androgen excess, hormonal contraception and assisted reproduction. Fifteen questions.",
    kind: "PRACTICE", timeLimitSeconds: null, difficulty: "Intermediate", questions: REPRO,
  });

  await seedSet({
    categorySlug: CAT, slug: "obstetrics-exam-1",
    title: "Obstetrics — Timed Exam",
    description: "Both obstetrics sets combined: thirty questions in 35 minutes, feedback withheld until you submit.",
    kind: "EXAM", timeLimitSeconds: 35 * 60, difficulty: "Intermediate", questions: [...OB1, ...OB2],
  });

  await seedSet({
    categorySlug: CAT, slug: "gynaecology-exam-1",
    title: "Gynaecology — Timed Exam",
    description: "Both gynaecology sets combined: thirty questions in 35 minutes, feedback withheld until you submit.",
    kind: "EXAM", timeLimitSeconds: 35 * 60, difficulty: "Intermediate", questions: [...GY1, ...GY2],
  });

  await seedSet({
    categorySlug: CAT, slug: "obgyn-comprehensive-exam-1",
    title: "Obstetrics & Gynaecology — Comprehensive Timed Exam",
    description: "All seventy-five items across obstetrics, gynaecology and reproductive endocrinology: 90 minutes.",
    kind: "EXAM", timeLimitSeconds: 90 * 60, difficulty: "Advanced",
    questions: [...OB1, ...OB2, ...GY1, ...GY2, ...REPRO],
  });

  console.log("\nDone. Editable in Admin → Question Bank.");
  console.log("⚠ Obstetric protocols vary by national guideline — review locally.");
}

main().catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
