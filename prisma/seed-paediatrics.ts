/**
 * CONTENT WAVE 10 — Paediatrics
 *
 * 75 original questions as EIGHT quizzes:
 *
 *   Neonatology              Set 1 (15)
 *   Growth & Development     Set 1 (15)
 *   Paediatric Clinical      Set 1 (15) · Set 2 (15)
 *   Paediatric Emergencies   Set 1 (15)
 *   Exams  Clinical (30) · Neonatal & Development (30) · Comprehensive (75)
 *
 * The organising idea: children are not small adults. Nearly every question
 * turns on something that is genuinely DIFFERENT in a child — different
 * physiology, different normal ranges, different presentation of the same
 * disease, or a condition that only exists at this age.
 *
 * Every database write is wrapped in a retry, since long seeds on hosted
 * free-tier databases occasionally drop a connection.
 *
 * ⚠ Paediatric practice is protocol-driven and varies by national guideline.
 * Review anything numerical against local guidance before relying on it.
 *
 * Run:  npx tsx prisma/seed-paediatrics.ts
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Q = {
  stem: string;
  topic: string;
  explanation: string;
  choices: { text: string; isCorrect: boolean }[];
};

/* ═══════════ NEONATOLOGY ═══════════ */

const NEO: Q[] = [
  {
    stem: "What does the Apgar score assess, and when is it recorded?",
    topic: "Newborn Assessment",
    explanation:
      "Appearance, pulse, grimace, activity and respiration, scored at one and five minutes. It describes the newborn's condition and response to resuscitation — it does not predict long-term outcome, and it is not used to decide whether to start resuscitation. That decision rests on breathing, tone and heart rate immediately.",
    choices: [
      { text: "Colour, pulse, reflex irritability, tone and respiration, at 1 and 5 minutes", isCorrect: true },
      { text: "Blood gases and electrolytes at 10 minutes", isCorrect: false },
      { text: "Neurological outcome at one year", isCorrect: false },
      { text: "Whether resuscitation should be started", isCorrect: false },
    ],
  },
  {
    stem: "Jaundice appearing within the first 24 hours of life is significant. Why?",
    topic: "Neonatal Jaundice",
    explanation:
      "It is always pathological and suggests haemolysis — rhesus or ABO incompatibility, G6PD deficiency, spherocytosis — or congenital infection. Physiological jaundice does not appear before 24 hours. Unconjugated bilirubin crosses the blood-brain barrier, so untreated severe jaundice risks kernicterus.",
    choices: [
      { text: "It is always pathological, usually haemolytic, and risks kernicterus", isCorrect: true },
      { text: "It is the normal physiological pattern", isCorrect: false },
      { text: "It indicates breastfeeding is established", isCorrect: false },
      { text: "It requires no investigation before 48 hours", isCorrect: false },
    ],
  },
  {
    stem: "How does physiological neonatal jaundice arise?",
    topic: "Neonatal Jaundice",
    explanation:
      "Increased red cell breakdown with a shorter fetal red cell lifespan, combined with immature hepatic glucuronyl transferase and increased enterohepatic circulation. It appears after 24 hours, peaks around days 3–5, and resolves within about two weeks — a timeline that itself helps distinguish it from pathological causes.",
    choices: [
      { text: "High red cell turnover with immature hepatic conjugation", isCorrect: true },
      { text: "Biliary obstruction present from birth", isCorrect: false },
      { text: "Maternal antibodies crossing the placenta", isCorrect: false },
      { text: "Hepatitis acquired during delivery", isCorrect: false },
    ],
  },
  {
    stem: "Jaundice persisting beyond two weeks with pale stools and dark urine demands which urgent consideration?",
    topic: "Neonatal Jaundice",
    explanation:
      "Biliary atresia, causing conjugated hyperbilirubinaemia. Surgery has far better outcomes when performed early — outcomes deteriorate substantially with delay. Any prolonged jaundice must have a SPLIT bilirubin measured; a conjugated fraction is never physiological.",
    choices: [
      { text: "Biliary atresia — needs a split bilirubin and urgent referral", isCorrect: true },
      { text: "Prolonged physiological jaundice — reassure", isCorrect: false },
      { text: "Breast milk jaundice only — no action", isCorrect: false },
      { text: "Dehydration — increase feeds and review in a month", isCorrect: false },
    ],
  },
  {
    stem: "A preterm infant develops progressive respiratory distress shortly after birth with a ground-glass chest film. What is the cause?",
    topic: "Neonatal Respiratory",
    explanation:
      "Surfactant deficiency causing respiratory distress syndrome. Without surfactant, alveolar surface tension causes widespread collapse. Antenatal corticosteroids accelerate fetal lung maturation, and exogenous surfactant is given after birth — a clear example of physiology directly dictating treatment.",
    choices: [
      { text: "Surfactant deficiency (respiratory distress syndrome)", isCorrect: true },
      { text: "Meconium aspiration", isCorrect: false },
      { text: "Congenital pneumonia", isCorrect: false },
      { text: "Transient tachypnoea of the newborn", isCorrect: false },
    ],
  },
  {
    stem: "A term infant born by elective caesarean has mild tachypnoea resolving within 48 hours. What is the likely diagnosis?",
    topic: "Neonatal Respiratory",
    explanation:
      "Transient tachypnoea of the newborn — delayed clearance of fetal lung fluid. Labour normally triggers absorption, which is why elective caesarean without labour is the classic setting. It is self-limiting, but sepsis must still be considered before attributing tachypnoea to it.",
    choices: [
      { text: "Transient tachypnoea of the newborn", isCorrect: true },
      { text: "Respiratory distress syndrome", isCorrect: false },
      { text: "Congenital diaphragmatic hernia", isCorrect: false },
      { text: "Pneumothorax", isCorrect: false },
    ],
  },
  {
    stem: "Which organism is the most important cause of early-onset neonatal sepsis?",
    topic: "Neonatal Sepsis",
    explanation:
      "Group B streptococcus, acquired from maternal genital tract colonisation during delivery. E. coli is the other major cause. Neonatal sepsis presents non-specifically — poor feeding, temperature instability, lethargy — so the threshold for investigation and empirical antibiotics is deliberately very low.",
    choices: [
      { text: "Group B streptococcus", isCorrect: true },
      { text: "Staphylococcus epidermidis", isCorrect: false },
      { text: "Pseudomonas aeruginosa", isCorrect: false },
      { text: "Candida albicans", isCorrect: false },
    ],
  },
  {
    stem: "Why is hypothermia dangerous in a newborn, particularly if preterm?",
    topic: "Neonatal Care",
    explanation:
      "A high surface-area-to-mass ratio, thin skin and limited fat mean rapid heat loss, while cold stress raises oxygen consumption and drives hypoglycaemia and acidosis. It independently worsens outcomes, which is why drying, warming and skin-to-skin contact are immediate priorities at delivery.",
    choices: [
      { text: "Rapid heat loss with cold stress driving hypoglycaemia, acidosis and higher oxygen demand", isCorrect: true },
      { text: "It causes immediate hyperthermia on rewarming", isCorrect: false },
      { text: "It has no clinical consequence if brief", isCorrect: false },
      { text: "It only matters in term infants", isCorrect: false },
    ],
  },
  {
    stem: "A preterm infant develops abdominal distension, bloody stools and pneumatosis intestinalis on radiograph. What is the diagnosis?",
    topic: "Neonatal Emergencies",
    explanation:
      "Necrotising enterocolitis — bowel wall inflammation and necrosis, mainly in preterm infants. Intramural gas (pneumatosis) is characteristic. Feeds are stopped, antibiotics started, and surgery is needed if perforation occurs. Breast milk substantially reduces the risk compared with formula.",
    choices: [
      { text: "Necrotising enterocolitis", isCorrect: true },
      { text: "Intussusception", isCorrect: false },
      { text: "Hirschsprung disease", isCorrect: false },
      { text: "Pyloric stenosis", isCorrect: false },
    ],
  },
  {
    stem: "Which screening test detects congenital hypothyroidism, and why does timing matter so much?",
    topic: "Newborn Screening",
    explanation:
      "The newborn blood spot test. Untreated congenital hypothyroidism causes irreversible intellectual disability, but thyroxine started within the first weeks prevents it almost entirely. It is the archetype of screening: the condition is silent at birth, and treatment is only effective if started before symptoms appear.",
    choices: [
      { text: "The newborn blood spot — early thyroxine prevents irreversible impairment", isCorrect: true },
      { text: "Cord blood gas at delivery", isCorrect: false },
      { text: "Ultrasound of the neck at six months", isCorrect: false },
      { text: "Screening is done only if symptoms develop", isCorrect: false },
    ],
  },
  {
    stem: "Why is vitamin K given to all newborns?",
    topic: "Neonatal Care",
    explanation:
      "To prevent haemorrhagic disease of the newborn. Placental transfer of vitamin K is poor, breast milk contains little, and the gut is not yet colonised by vitamin K-producing bacteria — three deficits at once. Bleeding can be intracranial and catastrophic, and prophylaxis is highly effective.",
    choices: [
      { text: "To prevent vitamin K deficiency bleeding, which can be intracranial", isCorrect: true },
      { text: "To prevent neonatal jaundice", isCorrect: false },
      { text: "To promote bone mineralisation", isCorrect: false },
      { text: "To prevent infection", isCorrect: false },
    ],
  },
  {
    stem: "A newborn is noted to have a weak femoral pulse compared with the brachial. What must be excluded?",
    topic: "Congenital Heart Disease",
    explanation:
      "Coarctation of the aorta. Narrowing distal to the arch reduces lower limb perfusion, producing a brachiofemoral delay and a blood pressure difference between arms and legs. It can present with collapse when the ductus arteriosus closes, which is why pre- and post-ductal saturations are checked.",
    choices: [
      { text: "Coarctation of the aorta", isCorrect: true },
      { text: "Ventricular septal defect", isCorrect: false },
      { text: "Atrial septal defect", isCorrect: false },
      { text: "Innocent murmur", isCorrect: false },
    ],
  },
  {
    stem: "Which drug maintains ductal patency in duct-dependent congenital heart disease?",
    topic: "Congenital Heart Disease",
    explanation:
      "Prostaglandin E. In duct-dependent lesions the ductus arteriosus is the only route for pulmonary or systemic flow, so allowing it to close causes collapse. Conversely, indomethacin or ibuprofen close a persistent duct — the same physiology used in both directions.",
    choices: [
      { text: "Prostaglandin E", isCorrect: true },
      { text: "Indomethacin", isCorrect: false },
      { text: "Adenosine", isCorrect: false },
      { text: "Furosemide", isCorrect: false },
    ],
  },
  {
    stem: "Which congenital heart defect is the most common overall?",
    topic: "Congenital Heart Disease",
    explanation:
      "Ventricular septal defect. Small defects often close spontaneously and paradoxically produce LOUDER murmurs than large ones, because a small orifice generates more turbulence. Large defects cause heart failure and pulmonary over-circulation with a quieter murmur — murmur intensity is a poor guide to severity here.",
    choices: [
      { text: "Ventricular septal defect", isCorrect: true },
      { text: "Tetralogy of Fallot", isCorrect: false },
      { text: "Transposition of the great arteries", isCorrect: false },
      { text: "Hypoplastic left heart syndrome", isCorrect: false },
    ],
  },
  {
    stem: "Which four features make up tetralogy of Fallot?",
    topic: "Congenital Heart Disease",
    explanation:
      "Ventricular septal defect, pulmonary stenosis, overriding aorta and right ventricular hypertrophy. Pulmonary stenosis determines severity by driving right-to-left shunting and cyanosis. 'Tet spells' are relieved by knee-to-chest positioning, which raises systemic resistance and reduces the shunt.",
    choices: [
      { text: "VSD, pulmonary stenosis, overriding aorta and right ventricular hypertrophy", isCorrect: true },
      { text: "ASD, aortic stenosis, patent duct and left ventricular hypertrophy", isCorrect: false },
      { text: "Coarctation, VSD, ASD and patent duct", isCorrect: false },
      { text: "Transposition with VSD and two atrial defects", isCorrect: false },
    ],
  },
];

/* ═══════════ GROWTH & DEVELOPMENT ═══════════ */

const DEV: Q[] = [
  {
    stem: "By what age should a child normally be able to sit without support?",
    topic: "Developmental Milestones",
    explanation:
      "Around 6 to 8 months. Gross motor milestones follow a broadly predictable sequence — head control, rolling, sitting, crawling, walking — because they depend on progressive cortical control and myelination. Failure to sit by 9 months warrants assessment.",
    choices: [
      { text: "About 6–8 months", isCorrect: true },
      { text: "About 2 months", isCorrect: false },
      { text: "About 14 months", isCorrect: false },
      { text: "About 18 months", isCorrect: false },
    ],
  },
  {
    stem: "At what age do most children walk independently, and when does delay warrant referral?",
    topic: "Developmental Milestones",
    explanation:
      "Most walk between 12 and 15 months. Not walking by 18 months is the accepted red flag requiring assessment — and creatine kinase should be checked in boys, because Duchenne muscular dystrophy can present as delayed walking long before weakness is obvious.",
    choices: [
      { text: "12–15 months, with referral if not walking by 18 months", isCorrect: true },
      { text: "6 months, with referral at 9 months", isCorrect: false },
      { text: "24 months, with referral at 36 months", isCorrect: false },
      { text: "There is no age at which delay matters", isCorrect: false },
    ],
  },
  {
    stem: "Which developmental finding is a red flag at ANY age?",
    topic: "Developmental Milestones",
    explanation:
      "Regression — loss of previously acquired skills. Isolated delay in one domain is often benign, but losing skills suggests a neurodegenerative, metabolic or acquired process and always needs urgent assessment. Persistent hand preference before 12 months is another red flag, suggesting hemiplegia.",
    choices: [
      { text: "Loss of previously acquired skills (regression)", isCorrect: true },
      { text: "Walking at 15 months", isCorrect: false },
      { text: "Speaking single words at 12 months", isCorrect: false },
      { text: "Sitting unsupported at 7 months", isCorrect: false },
    ],
  },
  {
    stem: "A child's growth chart shows height crossing downward through two centile lines. What does this indicate?",
    topic: "Growth",
    explanation:
      "Faltering growth requiring investigation. A single measurement on a low centile may simply reflect a small family; CROSSING centiles indicates a change in growth trajectory. Serial measurement is what makes growth charts valuable — the direction matters more than the position.",
    choices: [
      { text: "Faltering growth needing investigation — the trend matters more than the centile", isCorrect: true },
      { text: "Normal variation requiring no action", isCorrect: false },
      { text: "Certain endocrine disease", isCorrect: false },
      { text: "Measurement error in all cases", isCorrect: false },
    ],
  },
  {
    stem: "A child is short but growing along a consistent low centile with normal growth velocity and delayed bone age. What is the likely explanation?",
    topic: "Growth",
    explanation:
      "Constitutional delay of growth and puberty — a normal variant where the child grows more slowly but for longer, reaching a normal final height. Delayed bone age is the reassuring feature; pathological short stature usually shows falling velocity and crossed centiles.",
    choices: [
      { text: "Constitutional delay — normal velocity with delayed bone age", isCorrect: true },
      { text: "Growth hormone deficiency requiring treatment", isCorrect: false },
      { text: "Hypothyroidism", isCorrect: false },
      { text: "Coeliac disease", isCorrect: false },
    ],
  },
  {
    stem: "Which single measurement is most useful in a child with suspected failure to thrive?",
    topic: "Growth",
    explanation:
      "Serial weight, height and head circumference plotted over time. The PATTERN of which parameter falls first is informative: weight falling first suggests inadequate intake or malabsorption, while head circumference being affected implies a longstanding or intrauterine cause.",
    choices: [
      { text: "Serial weight, height and head circumference plotted over time", isCorrect: true },
      { text: "A single weight at presentation", isCorrect: false },
      { text: "Bone age alone", isCorrect: false },
      { text: "Parental height only", isCorrect: false },
    ],
  },
  {
    stem: "What is the first sign of puberty in girls, and in boys?",
    topic: "Puberty",
    explanation:
      "Breast budding (thelarche) in girls, typically from around 8–13 years; testicular enlargement in boys, from around 9–14. Knowing the first sign matters because it dates the onset — pubic hair can be adrenal in origin and is not a reliable marker of true puberty.",
    choices: [
      { text: "Breast budding in girls; testicular enlargement in boys", isCorrect: true },
      { text: "Pubic hair in both sexes", isCorrect: false },
      { text: "Growth spurt in both sexes", isCorrect: false },
      { text: "Voice change in both sexes", isCorrect: false },
    ],
  },
  {
    stem: "Why is precocious puberty more concerning in boys than in girls?",
    topic: "Puberty",
    explanation:
      "Central precocious puberty in girls is often idiopathic, whereas in boys it is far more likely to have an identifiable pathological cause — commonly a CNS lesion. The difference in pre-test probability is why boys are investigated more aggressively, usually including brain imaging.",
    choices: [
      { text: "It is much more likely to have an underlying pathological cause, often intracranial", isCorrect: true },
      { text: "It progresses more slowly in boys", isCorrect: false },
      { text: "It has no consequences in girls", isCorrect: false },
      { text: "Boys reach a taller final height", isCorrect: false },
    ],
  },
  {
    stem: "Which vaccine type is contraindicated in significantly immunocompromised children?",
    topic: "Immunisation",
    explanation:
      "Live attenuated vaccines — MMR, varicella, BCG, live oral typhoid and rotavirus — because attenuated organisms can cause disease without an intact immune response. Inactivated vaccines are safe, though the response may be weaker. Vaccinating household contacts helps protect the child.",
    choices: [
      { text: "Live attenuated vaccines", isCorrect: true },
      { text: "Inactivated vaccines", isCorrect: false },
      { text: "Toxoid vaccines", isCorrect: false },
      { text: "All vaccines are contraindicated", isCorrect: false },
    ],
  },
  {
    stem: "A parent reports their child had a fever and irritability for 24 hours after a routine vaccination. What does this represent?",
    topic: "Immunisation",
    explanation:
      "A normal immune response, not an adverse reaction or contraindication. Distinguishing expected reactogenicity from genuine adverse events matters because incorrectly labelling it as an allergy or reaction can lead to a child missing subsequent doses entirely.",
    choices: [
      { text: "A normal immune response, not a contraindication to future doses", isCorrect: true },
      { text: "An allergic reaction requiring permanent avoidance", isCorrect: false },
      { text: "Vaccine failure", isCorrect: false },
      { text: "Evidence the vaccine was contaminated", isCorrect: false },
    ],
  },
  {
    stem: "Which feeding is recommended exclusively for approximately the first six months?",
    topic: "Nutrition",
    explanation:
      "Breast milk, which provides immunological protection through secretory IgA, reduces gastroenteritis and respiratory infection, and lowers necrotising enterocolitis risk in preterm infants. Vitamin D supplementation is generally advised for breastfed infants, since breast milk is low in it.",
    choices: [
      { text: "Exclusive breastfeeding, with vitamin D supplementation", isCorrect: true },
      { text: "Formula milk with early solids from three months", isCorrect: false },
      { text: "Cow's milk as the main drink from birth", isCorrect: false },
      { text: "Water with glucose", isCorrect: false },
    ],
  },
  {
    stem: "Which nutritional deficiency causes rickets, and what are the classic findings?",
    topic: "Nutrition",
    explanation:
      "Vitamin D deficiency, impairing mineralisation of growing bone. Findings include bowed legs, widened wrists, rachitic rosary and delayed fontanelle closure, with low calcium and phosphate and raised alkaline phosphatase. Risk is higher with dark skin, limited sun exposure and exclusive breastfeeding without supplementation.",
    choices: [
      { text: "Vitamin D — bowed legs, widened wrists, raised alkaline phosphatase", isCorrect: true },
      { text: "Vitamin C — bleeding gums and petechiae", isCorrect: false },
      { text: "Vitamin A — night blindness", isCorrect: false },
      { text: "Vitamin K — bruising", isCorrect: false },
    ],
  },
  {
    stem: "Which features suggest autism spectrum disorder in a toddler?",
    topic: "Neurodevelopment",
    explanation:
      "Reduced social communication — limited eye contact, absent pointing to share interest, not responding to name — with restricted, repetitive behaviours. Absence of pointing to share by 18 months is a well-recognised early marker. Early identification matters because early intervention improves outcomes.",
    choices: [
      { text: "Reduced social communication with restricted, repetitive behaviours", isCorrect: true },
      { text: "Delayed walking with normal social interaction", isCorrect: false },
      { text: "Isolated speech delay with normal social engagement", isCorrect: false },
      { text: "Hyperactivity alone", isCorrect: false },
    ],
  },
  {
    stem: "A boy has delayed walking, calf pseudohypertrophy and uses his hands to climb up his legs when rising. What is the diagnosis?",
    topic: "Neurodevelopment",
    explanation:
      "Duchenne muscular dystrophy — Gowers' sign reflects proximal muscle weakness. It is X-linked recessive from dystrophin mutation, and creatine kinase is markedly raised. Any boy with delayed walking should have a CK checked, because early diagnosis changes management and family counselling.",
    choices: [
      { text: "Duchenne muscular dystrophy", isCorrect: true },
      { text: "Cerebral palsy", isCorrect: false },
      { text: "Spinal muscular atrophy", isCorrect: false },
      { text: "Constitutional delay", isCorrect: false },
    ],
  },
  {
    stem: "What defines cerebral palsy?",
    topic: "Neurodevelopment",
    explanation:
      "A permanent, NON-progressive disorder of movement and posture from an insult to the developing brain. Non-progressive is the key word — the lesion is static, though its clinical expression changes as the child grows. Progressive deterioration means a different diagnosis entirely.",
    choices: [
      { text: "A permanent, non-progressive motor disorder from injury to the developing brain", isCorrect: true },
      { text: "A progressive degenerative neurological disease", isCorrect: false },
      { text: "A purely genetic muscle disorder", isCorrect: false },
      { text: "A temporary delay that resolves by school age", isCorrect: false },
    ],
  },
];

/* ═══════════ PAEDIATRIC CLINICAL SET 1 ═══════════ */

const CLIN1: Q[] = [
  {
    stem: "A 6-month-old has coryza followed by wheeze, tachypnoea and poor feeding in winter. What is the likely diagnosis?",
    topic: "Respiratory",
    explanation:
      "Bronchiolitis, usually respiratory syncytial virus. Management is supportive — oxygen and feeding support. Bronchodilators, steroids and antibiotics are not routinely effective, which is one of the most consistently misapplied points in paediatrics. Apnoea is a recognised presentation in young infants.",
    choices: [
      { text: "Bronchiolitis — supportive management only", isCorrect: true },
      { text: "Asthma requiring inhaled steroids", isCorrect: false },
      { text: "Bacterial pneumonia requiring antibiotics", isCorrect: false },
      { text: "Croup requiring dexamethasone", isCorrect: false },
    ],
  },
  {
    stem: "A 2-year-old has a barking cough and inspiratory stridor, worse at night. What is the diagnosis and treatment?",
    topic: "Respiratory",
    explanation:
      "Croup — viral laryngotracheobronchitis, usually parainfluenza. A single dose of oral dexamethasone is effective even in mild cases, with nebulised adrenaline for severe obstruction. The child should be kept calm, since distress worsens the obstruction.",
    choices: [
      { text: "Croup — treat with oral dexamethasone", isCorrect: true },
      { text: "Epiglottitis — intubate immediately", isCorrect: false },
      { text: "Bronchiolitis — supportive care only", isCorrect: false },
      { text: "Asthma — give salbutamol", isCorrect: false },
    ],
  },
  {
    stem: "A child is drooling, sitting forward, toxic-looking with a muffled voice and soft stridor. What must NOT be done?",
    topic: "Respiratory",
    explanation:
      "Do not examine the throat or distress the child — this is epiglottitis, and provoking distress can precipitate complete airway obstruction. The priority is calm transfer to theatre with senior anaesthetic and ENT involvement for a controlled airway. It has become rare where Hib vaccination is established.",
    choices: [
      { text: "Do not examine the throat or upset the child — secure the airway with senior help", isCorrect: true },
      { text: "Examine the throat immediately with a tongue depressor", isCorrect: false },
      { text: "Send home with oral antibiotics", isCorrect: false },
      { text: "Give nebulised salbutamol and observe", isCorrect: false },
    ],
  },
  {
    stem: "Which feature distinguishes asthma from viral wheeze in a preschool child?",
    topic: "Respiratory",
    explanation:
      "Interval symptoms — wheeze, cough or breathlessness BETWEEN infections, especially at night or with exercise, plus atopy and family history. Viral-induced wheeze occurs only with infections and often resolves with age. The distinction determines whether preventer treatment is justified.",
    choices: [
      { text: "Symptoms between infections, with atopy and family history", isCorrect: true },
      { text: "Wheeze occurring only during colds", isCorrect: false },
      { text: "Age under two years", isCorrect: false },
      { text: "Response to salbutamol, which is diagnostic", isCorrect: false },
    ],
  },
  {
    stem: "A 4-week-old boy has projectile non-bilious vomiting after feeds and remains hungry. What is the diagnosis and biochemical finding?",
    topic: "Gastrointestinal",
    explanation:
      "Pyloric stenosis, causing a hypochloraemic hypokalaemic METABOLIC ALKALOSIS from loss of gastric acid. A test feed may reveal a palpable olive-shaped mass. Fluid and electrolyte correction must precede surgery — this is a medical emergency first and a surgical one second.",
    choices: [
      { text: "Pyloric stenosis — hypochloraemic hypokalaemic metabolic alkalosis", isCorrect: true },
      { text: "Gastro-oesophageal reflux — normal biochemistry", isCorrect: false },
      { text: "Malrotation — metabolic acidosis", isCorrect: false },
      { text: "Duodenal atresia — respiratory alkalosis", isCorrect: false },
    ],
  },
  {
    stem: "BILIOUS vomiting in a neonate must be assumed to represent what until proven otherwise?",
    topic: "Gastrointestinal",
    explanation:
      "Intestinal obstruction, particularly malrotation with volvulus. Bile below the ampulla means obstruction distal to it, and midgut volvulus can infarct the entire small bowel within hours. It requires urgent surgical assessment and contrast study — never observation.",
    choices: [
      { text: "Intestinal obstruction, especially malrotation with volvulus", isCorrect: true },
      { text: "Simple reflux", isCorrect: false },
      { text: "Overfeeding", isCorrect: false },
      { text: "Pyloric stenosis", isCorrect: false },
    ],
  },
  {
    stem: "A 9-month-old has episodic screaming with drawing up of legs, vomiting and redcurrant jelly stool. What is the diagnosis?",
    topic: "Gastrointestinal",
    explanation:
      "Intussusception — telescoping of bowel, most often ileocolic. A sausage-shaped abdominal mass may be felt, and ultrasound shows a target sign. Air or contrast enema reduction is both diagnostic and therapeutic in most cases, with surgery reserved for failure or perforation.",
    choices: [
      { text: "Intussusception", isCorrect: true },
      { text: "Gastroenteritis", isCorrect: false },
      { text: "Appendicitis", isCorrect: false },
      { text: "Constipation", isCorrect: false },
    ],
  },
  {
    stem: "Which sign most reliably indicates significant dehydration in a young child with gastroenteritis?",
    topic: "Gastrointestinal",
    explanation:
      "Prolonged capillary refill with reduced skin turgor and sunken eyes — and weight loss compared with a recent weight is the most objective measure. Children compensate well and then deteriorate abruptly, so blood pressure is a LATE sign and its normality is falsely reassuring.",
    choices: [
      { text: "Prolonged capillary refill, reduced turgor and measured weight loss", isCorrect: true },
      { text: "A fall in blood pressure, which occurs early", isCorrect: false },
      { text: "Presence of any vomiting", isCorrect: false },
      { text: "Number of stools per day alone", isCorrect: false },
    ],
  },
  {
    stem: "A child has a non-blanching purpuric rash, fever and looks unwell. What must be assumed?",
    topic: "Infection",
    explanation:
      "Meningococcal sepsis until proven otherwise. A non-blanching rash with fever demands immediate parenteral antibiotics before transfer or investigation — delay to obtain imaging or cultures costs lives. The rash may be sparse or appear late, so its absence never excludes the diagnosis.",
    choices: [
      { text: "Meningococcal sepsis — give parenteral antibiotics immediately", isCorrect: true },
      { text: "Simple viral exanthem — reassure", isCorrect: false },
      { text: "Henoch-Schönlein purpura in all cases", isCorrect: false },
      { text: "Idiopathic thrombocytopenic purpura", isCorrect: false },
    ],
  },
  {
    stem: "Why are the classic signs of meningitis often absent in infants?",
    topic: "Infection",
    explanation:
      "Neck stiffness and photophobia require a degree of neurological maturity, so infants instead show non-specific signs — poor feeding, irritability, lethargy, a high-pitched cry or a bulging fontanelle. The absence of classic signs in an unwell infant should raise suspicion rather than lower it.",
    choices: [
      { text: "Infants show non-specific signs; classic meningism requires greater maturity", isCorrect: true },
      { text: "Infants rarely develop meningitis", isCorrect: false },
      { text: "Infant meningitis is always mild", isCorrect: false },
      { text: "The blood-brain barrier is impermeable in infancy", isCorrect: false },
    ],
  },
  {
    stem: "A child has fever for more than five days, conjunctivitis, cracked lips, rash, cervical lymphadenopathy and peeling hands. What is the diagnosis and why does it matter?",
    topic: "Infection",
    explanation:
      "Kawasaki disease. It matters because untreated it causes coronary artery aneurysms in a substantial minority. Intravenous immunoglobulin within the first ten days markedly reduces that risk, so recognising the pattern early is what protects the heart.",
    choices: [
      { text: "Kawasaki disease — risks coronary aneurysms, treat with IVIG early", isCorrect: true },
      { text: "Scarlet fever — treat with penicillin only", isCorrect: false },
      { text: "Measles — supportive care", isCorrect: false },
      { text: "Viral exanthem — no treatment needed", isCorrect: false },
    ],
  },
  {
    stem: "A child develops a purpuric rash on the legs and buttocks with joint pain, abdominal pain and haematuria. What is the diagnosis?",
    topic: "Infection",
    explanation:
      "Henoch-Schönlein purpura — an IgA small-vessel vasculitis, often following an upper respiratory infection. The rash is characteristically on extensor surfaces and buttocks. Renal involvement determines long-term outcome, so urinalysis and blood pressure monitoring continue for months after recovery.",
    choices: [
      { text: "Henoch-Schönlein purpura, with follow-up for renal involvement", isCorrect: true },
      { text: "Meningococcal sepsis", isCorrect: false },
      { text: "Idiopathic thrombocytopenic purpura", isCorrect: false },
      { text: "Kawasaki disease", isCorrect: false },
    ],
  },
  {
    stem: "A previously well child has widespread bruising and petechiae after a viral illness, with isolated thrombocytopenia and a normal blood film otherwise. What is the likely diagnosis?",
    topic: "Haematology",
    explanation:
      "Immune thrombocytopenic purpura — usually self-limiting in children. The reassuring features are isolated thrombocytopenia with an otherwise normal count and film, and a well child. Anaemia, neutropenia, bone pain or organomegaly would instead point toward leukaemia and demand urgent investigation.",
    choices: [
      { text: "Immune thrombocytopenic purpura, usually self-limiting", isCorrect: true },
      { text: "Acute leukaemia", isCorrect: false },
      { text: "Haemophilia", isCorrect: false },
      { text: "Non-accidental injury in all cases", isCorrect: false },
    ],
  },
  {
    stem: "Which features in a child with bruising should raise concern about acute leukaemia?",
    topic: "Haematology",
    explanation:
      "Pallor, persistent fever, bone or joint pain, lymphadenopathy, hepatosplenomegaly, and abnormalities in more than one cell line. Bone pain causing a limp or refusal to walk is a classic under-recognised presentation. Marrow failure affecting several lineages is what separates it from ITP.",
    choices: [
      { text: "Pallor, bone pain, organomegaly and more than one cell line affected", isCorrect: true },
      { text: "Isolated low platelets in a well child", isCorrect: false },
      { text: "Bruising confined to the shins", isCorrect: false },
      { text: "A recent viral illness alone", isCorrect: false },
    ],
  },
  {
    stem: "What is the commonest cause of anaemia in young children, and what dietary factor contributes?",
    topic: "Haematology",
    explanation:
      "Iron deficiency, frequently from excessive cow's milk intake — it is low in iron, can cause occult gastrointestinal blood loss, and displaces iron-rich foods. It is microcytic and hypochromic. Where deficiency is severe or refractory, coeliac disease should be considered.",
    choices: [
      { text: "Iron deficiency, often with excessive cow's milk intake", isCorrect: true },
      { text: "Vitamin B12 deficiency from vegetarian diet", isCorrect: false },
      { text: "Folate deficiency from overcooked vegetables", isCorrect: false },
      { text: "Chronic blood loss from menstruation", isCorrect: false },
    ],
  },
];

/* ═══════════ PAEDIATRIC CLINICAL SET 2 ═══════════ */

const CLIN2: Q[] = [
  {
    stem: "A child presents with polyuria, polydipsia, weight loss and lethargy. What must be excluded immediately?",
    topic: "Endocrine",
    explanation:
      "Type 1 diabetes, and specifically diabetic ketoacidosis. A capillary glucose and ketone measurement takes seconds. Children can deteriorate rapidly, and DKA at presentation is common — often after symptoms have been attributed to a urinary infection or viral illness for days.",
    choices: [
      { text: "Type 1 diabetes with possible ketoacidosis — check glucose and ketones now", isCorrect: true },
      { text: "Urinary tract infection — send urine and await culture", isCorrect: false },
      { text: "Psychogenic polydipsia — reassure", isCorrect: false },
      { text: "Normal growth spurt", isCorrect: false },
    ],
  },
  {
    stem: "Why must fluids be given cautiously in paediatric diabetic ketoacidosis?",
    topic: "Endocrine",
    explanation:
      "Rapid fluid shifts risk cerebral oedema, which is the leading cause of death in paediatric DKA. Rehydration is therefore deliberately slower than adult protocols, insulin is started after fluids rather than immediately, and any deterioration in conscious level is treated as cerebral oedema until proven otherwise.",
    choices: [
      { text: "Rapid correction risks cerebral oedema, the leading cause of death", isCorrect: true },
      { text: "Fluids worsen the acidosis directly", isCorrect: false },
      { text: "Children cannot tolerate intravenous access", isCorrect: false },
      { text: "It causes immediate hyperkalaemia", isCorrect: false },
    ],
  },
  {
    stem: "Which finding suggests congenital adrenal hyperplasia in a neonate?",
    topic: "Endocrine",
    explanation:
      "Ambiguous genitalia in a female infant, or salt-wasting crisis with vomiting, hyponatraemia, hyperkalaemia and shock in the second week of life. 21-hydroxylase deficiency blocks cortisol and aldosterone while shunting precursors into androgens — explaining both the virilisation and the salt loss.",
    choices: [
      { text: "Virilisation of a female infant, or salt-wasting crisis in week two", isCorrect: true },
      { text: "Isolated jaundice at 24 hours", isCorrect: false },
      { text: "Delayed passage of meconium", isCorrect: false },
      { text: "A single palpable testis", isCorrect: false },
    ],
  },
  {
    stem: "A child has facial oedema, frothy urine and heavy proteinuria with hypoalbuminaemia. What is the most likely underlying pathology?",
    topic: "Renal",
    explanation:
      "Minimal change disease, which accounts for most childhood nephrotic syndrome and usually responds well to corticosteroids. Biopsy is generally reserved for atypical features — age under one or over ten, haematuria, hypertension, renal impairment or steroid resistance.",
    choices: [
      { text: "Minimal change disease, usually steroid-responsive", isCorrect: true },
      { text: "Post-streptococcal glomerulonephritis", isCorrect: false },
      { text: "IgA nephropathy", isCorrect: false },
      { text: "Membranous nephropathy", isCorrect: false },
    ],
  },
  {
    stem: "Why does a urinary tract infection in a young child warrant more concern than in an adult?",
    topic: "Renal",
    explanation:
      "It may indicate underlying structural abnormality such as vesicoureteric reflux, and recurrent pyelonephritis in a growing kidney causes permanent scarring, hypertension and chronic kidney disease. Imaging is therefore considered after UTI in young children, particularly if atypical or recurrent.",
    choices: [
      { text: "It may signal structural abnormality, and scarring causes lasting damage", isCorrect: true },
      { text: "Children cannot tolerate antibiotics", isCorrect: false },
      { text: "It is always caused by resistant organisms", isCorrect: false },
      { text: "It has no long-term consequences", isCorrect: false },
    ],
  },
  {
    stem: "A boy has an acutely painful, swollen scrotum of sudden onset with a high-riding testis. What is the diagnosis?",
    topic: "Surgical",
    explanation:
      "Testicular torsion — a surgical emergency. Salvage rates fall sharply after about six hours, so exploration should not wait for imaging when suspicion is high. Any acute scrotum in a boy is torsion until proven otherwise, whatever the alternative explanations on offer.",
    choices: [
      { text: "Testicular torsion — immediate surgical exploration", isCorrect: true },
      { text: "Epididymitis — treat with antibiotics", isCorrect: false },
      { text: "Hydrocele — reassure", isCorrect: false },
      { text: "Inguinal hernia — elective repair", isCorrect: false },
    ],
  },
  {
    stem: "Why should an undescended testis be corrected in early childhood?",
    topic: "Surgical",
    explanation:
      "To preserve fertility and allow examination for malignancy, since the higher intra-abdominal temperature impairs spermatogenesis and the testis carries an increased cancer risk. Orchidopexy reduces but does not eliminate that risk — the point is that a descended testis can at least be examined.",
    choices: [
      { text: "To preserve fertility and allow surveillance for malignancy", isCorrect: true },
      { text: "Purely for cosmetic reasons", isCorrect: false },
      { text: "To prevent hernia formation only", isCorrect: false },
      { text: "It never requires correction", isCorrect: false },
    ],
  },
  {
    stem: "A limping child has a fever, refuses to weight-bear and holds the hip flexed and externally rotated. What must be excluded urgently?",
    topic: "Musculoskeletal",
    explanation:
      "Septic arthritis, which destroys cartilage within days and requires urgent aspiration and washout. Transient synovitis is far commoner but the child is usually afebrile and will weight-bear. Fever with refusal to weight-bear is the combination that should never be observed overnight.",
    choices: [
      { text: "Septic arthritis of the hip", isCorrect: true },
      { text: "Transient synovitis — observe at home", isCorrect: false },
      { text: "Growing pains", isCorrect: false },
      { text: "Muscle strain", isCorrect: false },
    ],
  },
  {
    stem: "An overweight adolescent has hip or knee pain with an externally rotated leg and reduced internal rotation. What is the likely diagnosis?",
    topic: "Musculoskeletal",
    explanation:
      "Slipped upper femoral epiphysis. Crucially, it often presents with KNEE pain — referred from the hip — so a limping adolescent with knee pain needs the hip examined and imaged, or the diagnosis is missed until the slip worsens.",
    choices: [
      { text: "Slipped upper femoral epiphysis — often presenting as knee pain", isCorrect: true },
      { text: "Perthes disease", isCorrect: false },
      { text: "Osgood-Schlatter disease", isCorrect: false },
      { text: "Simple knee sprain", isCorrect: false },
    ],
  },
  {
    stem: "Which features of an injury should raise concern about non-accidental injury?",
    topic: "Safeguarding",
    explanation:
      "Injuries inconsistent with the history or the child's developmental stage, delayed presentation, changing explanations, injuries in unusual sites, and multiple injuries of different ages. 'Those who don't cruise rarely bruise' — bruising in a non-mobile infant always warrants careful assessment.",
    choices: [
      { text: "History inconsistent with the injury or developmental stage, delayed or changing accounts", isCorrect: true },
      { text: "A single bruise on the shin of a walking toddler", isCorrect: false },
      { text: "A graze on the knee after a fall in the park", isCorrect: false },
      { text: "Any injury occurring at home", isCorrect: false },
    ],
  },
  {
    stem: "A previously well infant is found unresponsive with no identifiable cause after full investigation. What reduces the risk of this outcome?",
    topic: "Safeguarding",
    explanation:
      "Safe sleep practice — supine sleeping position, avoiding parental smoking, avoiding co-sleeping on sofas or after alcohol, and keeping the cot clear of soft bedding. The 'back to sleep' campaign produced one of the largest reductions in infant mortality achieved by public health advice.",
    choices: [
      { text: "Supine sleep position, smoke-free environment, safe sleep surface", isCorrect: true },
      { text: "Prone sleeping to prevent aspiration", isCorrect: false },
      { text: "Heavy bedding to maintain warmth", isCorrect: false },
      { text: "Nothing modifiable is known", isCorrect: false },
    ],
  },
  {
    stem: "Which skin condition in infancy presents with itchy, dry, flexural eczema and a personal or family history of atopy?",
    topic: "Dermatology",
    explanation:
      "Atopic eczema. Emollients are the cornerstone — used generously and continuously, not just during flares — with topical corticosteroids for flares. Fear of steroids leading to under-treatment is a very common reason for poor control.",
    choices: [
      { text: "Atopic eczema", isCorrect: true },
      { text: "Psoriasis", isCorrect: false },
      { text: "Scabies", isCorrect: false },
      { text: "Seborrhoeic dermatitis", isCorrect: false },
    ],
  },
  {
    stem: "A child has an intensely itchy rash worse at night with burrows in the finger webs, and siblings are affected. What is the diagnosis and management?",
    topic: "Dermatology",
    explanation:
      "Scabies. The entire household must be treated simultaneously whether or not they have symptoms, and bedding and clothing washed hot. Itch persists for weeks after successful treatment because it is an allergic response to mite antigen — patients often think treatment has failed.",
    choices: [
      { text: "Scabies — treat the whole household simultaneously", isCorrect: true },
      { text: "Eczema — emollients alone", isCorrect: false },
      { text: "Chickenpox — supportive care", isCorrect: false },
      { text: "Contact dermatitis — avoid the trigger", isCorrect: false },
    ],
  },
  {
    stem: "How does the paediatric airway differ anatomically, and what is the practical consequence?",
    topic: "Airway Differences",
    explanation:
      "A relatively large head and tongue, a higher and more anterior larynx, a floppy epiglottis and a narrow cricoid region. Small absolute diameters mean minor swelling causes disproportionate obstruction — resistance rises steeply as radius falls — which is why mild croup in an infant is far more significant than in an adult.",
    choices: [
      { text: "Smaller diameters mean small amounts of swelling cause major obstruction", isCorrect: true },
      { text: "The paediatric airway is proportionally wider and more forgiving", isCorrect: false },
      { text: "The larynx sits lower than in adults", isCorrect: false },
      { text: "There are no clinically relevant differences", isCorrect: false },
    ],
  },
  {
    stem: "Why is hypotension a late and ominous sign in a shocked child?",
    topic: "Recognition of the Sick Child",
    explanation:
      "Children maintain blood pressure by increasing heart rate and systemic vascular resistance, so pressure stays normal until compensation fails — then it falls abruptly. Tachycardia, prolonged capillary refill, cool peripheries and altered behaviour are the earlier signs that should prompt action.",
    choices: [
      { text: "Children compensate by tachycardia and vasoconstriction until they decompensate suddenly", isCorrect: true },
      { text: "Blood pressure falls earliest in children", isCorrect: false },
      { text: "Children do not develop shock", isCorrect: false },
      { text: "Hypotension is a normal finding in children", isCorrect: false },
    ],
  },
];

/* ═══════════ PAEDIATRIC EMERGENCIES ═══════════ */

const EMERG: Q[] = [
  {
    stem: "What compression-to-ventilation ratio is used for two-rescuer CPR in a child?",
    topic: "Paediatric Resuscitation",
    explanation:
      "15:2, compared with 30:2 for a single rescuer or for adults. Paediatric arrest is far more often respiratory than cardiac in origin, so more frequent ventilation matters. Paediatric resuscitation also begins with rescue breaths before compressions, for the same reason.",
    choices: [
      { text: "15:2", isCorrect: true },
      { text: "30:2", isCorrect: false },
      { text: "5:1", isCorrect: false },
      { text: "10:2", isCorrect: false },
    ],
  },
  {
    stem: "Why is paediatric cardiac arrest usually preceded by respiratory failure rather than a primary arrhythmia?",
    topic: "Paediatric Resuscitation",
    explanation:
      "Children have healthy hearts but limited respiratory reserve, so arrest typically follows progressive hypoxia. This is why the emphasis is on oxygenation and ventilation, why shockable rhythms are uncommon, and — most importantly — why recognising the deteriorating child BEFORE arrest is where outcomes are actually determined.",
    choices: [
      { text: "Healthy hearts but limited respiratory reserve, so hypoxia precedes arrest", isCorrect: true },
      { text: "Children commonly have undiagnosed coronary disease", isCorrect: false },
      { text: "Ventricular fibrillation is the usual initial rhythm", isCorrect: false },
      { text: "Their conduction system is unstable", isCorrect: false },
    ],
  },
  {
    stem: "What is the first-line treatment for anaphylaxis in a child?",
    topic: "Anaphylaxis",
    explanation:
      "Intramuscular adrenaline into the anterolateral thigh, dosed by age or weight, repeated after five minutes if needed. Antihistamines and steroids are adjuncts and must never delay adrenaline. Lying the child flat with legs raised also matters — sitting or standing up suddenly can precipitate cardiac arrest.",
    choices: [
      { text: "Intramuscular adrenaline to the anterolateral thigh", isCorrect: true },
      { text: "Oral antihistamine first", isCorrect: false },
      { text: "Intravenous hydrocortisone first", isCorrect: false },
      { text: "Nebulised salbutamol alone", isCorrect: false },
    ],
  },
  {
    stem: "A child has a generalised seizure lasting more than five minutes. What is the immediate management?",
    topic: "Seizures",
    explanation:
      "Airway, oxygen, check glucose, then a benzodiazepine — buccal midazolam or rectal diazepam if there is no access. A second dose follows if needed before escalating. Hypoglycaemia is a readily reversible cause that is easy to overlook in the urgency of managing the seizure itself.",
    choices: [
      { text: "Support the airway, give oxygen, check glucose and give a benzodiazepine", isCorrect: true },
      { text: "Restrain the child and insert an oral airway", isCorrect: false },
      { text: "Wait 30 minutes before any treatment", isCorrect: false },
      { text: "Give intravenous phenytoin as first line", isCorrect: false },
    ],
  },
  {
    stem: "What characterises a simple febrile convulsion, and what is the prognosis?",
    topic: "Seizures",
    explanation:
      "A generalised seizure lasting under 15 minutes, not recurring within 24 hours, in a child aged roughly six months to five years with a fever and no CNS infection. The prognosis is excellent, with only a slightly raised risk of later epilepsy. Parental reassurance is a genuine part of the treatment.",
    choices: [
      { text: "Generalised, under 15 minutes, non-recurrent in 24 hours — excellent prognosis", isCorrect: true },
      { text: "Focal, prolonged, and predictive of epilepsy in most cases", isCorrect: false },
      { text: "Occurring in children over ten years", isCorrect: false },
      { text: "Requiring lifelong anticonvulsant treatment", isCorrect: false },
    ],
  },
  {
    stem: "Which feature of a febrile seizure suggests it is COMPLEX and requires further assessment?",
    topic: "Seizures",
    explanation:
      "Focal features, duration beyond 15 minutes, or recurrence within the same febrile illness. Complex features raise the possibility of underlying pathology and warrant closer evaluation — and any child with a seizure and reduced conscious level needs meningitis actively excluded.",
    choices: [
      { text: "Focal features, duration over 15 minutes, or recurrence within 24 hours", isCorrect: true },
      { text: "Any fever above 38 degrees", isCorrect: false },
      { text: "Occurrence in a child aged two", isCorrect: false },
      { text: "A family history of febrile seizures", isCorrect: false },
    ],
  },
  {
    stem: "How are burns assessed differently in children compared with adults?",
    topic: "Trauma",
    explanation:
      "Body surface area proportions differ — the head is relatively larger and the legs smaller — so adult 'rule of nines' overestimates limb burns and underestimates head burns. Paediatric charts are used instead. Children also lose heat and fluid faster, so warming and fluid calculation are more critical.",
    choices: [
      { text: "Different body proportions require paediatric-specific surface area charts", isCorrect: true },
      { text: "The adult rule of nines applies unchanged", isCorrect: false },
      { text: "Burn size does not affect management in children", isCorrect: false },
      { text: "Children need less fluid than adults for equivalent burns", isCorrect: false },
    ],
  },
  {
    stem: "Which pattern of burn should raise safeguarding concern?",
    topic: "Safeguarding",
    explanation:
      "Sharply demarcated 'glove and stocking' immersion burns, symmetrical burns without splash marks, and cigarette-shaped circular burns. Accidental scalds typically show irregular splash patterns. Any burn inconsistent with the history or the child's developmental ability warrants safeguarding assessment.",
    choices: [
      { text: "Sharply demarcated immersion burns without splash marks", isCorrect: true },
      { text: "Irregular splash burns on the chest of a toddler", isCorrect: false },
      { text: "A small burn on the hand of a school-age child", isCorrect: false },
      { text: "Sunburn after a day outdoors", isCorrect: false },
    ],
  },
  {
    stem: "A toddler is suspected of swallowing a button battery. Why is this an emergency?",
    topic: "Poisoning & Ingestion",
    explanation:
      "A battery lodged in the oesophagus generates a local current causing liquefactive necrosis within hours, risking perforation and fistula into the aorta. It requires immediate imaging and urgent endoscopic removal — this is one of the few ingestions where delay of even a few hours is dangerous.",
    choices: [
      { text: "It causes rapid caustic injury and needs urgent removal", isCorrect: true },
      { text: "It usually passes harmlessly — observe at home", isCorrect: false },
      { text: "It only matters if the child is symptomatic", isCorrect: false },
      { text: "It causes heavy metal poisoning over months", isCorrect: false },
    ],
  },
  {
    stem: "Which household substance ingestion is particularly dangerous in small children because a small volume can be fatal?",
    topic: "Poisoning & Ingestion",
    explanation:
      "Several — but iron tablets are a classic example, since adult-strength supplements are attractive and a modest number can be lethal in a toddler. Small body weight means a small absolute dose is a large dose per kilogram, which is the general principle behind paediatric poisoning risk.",
    choices: [
      { text: "Iron tablets — small body weight makes a modest quantity a large dose per kilogram", isCorrect: true },
      { text: "Oral rehydration salts", isCorrect: false },
      { text: "Paracetamol suspension at recommended doses", isCorrect: false },
      { text: "Vitamin C tablets", isCorrect: false },
    ],
  },
  {
    stem: "Why does hypoglycaemia occur more readily in young children during illness?",
    topic: "Metabolic Emergencies",
    explanation:
      "Limited glycogen stores relative to a high metabolic rate, so fasting during illness depletes them quickly. This is why glucose is checked early in any unwell or drowsy child, and why prolonged fasting is avoided. Recurrent hypoglycaemia should prompt consideration of a metabolic disorder.",
    choices: [
      { text: "Limited glycogen stores with a high metabolic rate", isCorrect: true },
      { text: "Excess insulin production in all children", isCorrect: false },
      { text: "Impaired intestinal glucose absorption", isCorrect: false },
      { text: "Children cannot use ketones as fuel", isCorrect: false },
    ],
  },
  {
    stem: "Which route of drug administration is preferred in a shocked child when intravenous access fails after a short attempt?",
    topic: "Vascular Access",
    explanation:
      "Intraosseous access. It is rapid, reliable when peripheral veins have collapsed, and accepts all resuscitation drugs and fluids at standard doses. Persisting with repeated failed cannulation attempts wastes the time that matters most in a deteriorating child.",
    choices: [
      { text: "Intraosseous", isCorrect: true },
      { text: "Subcutaneous", isCorrect: false },
      { text: "Repeated peripheral attempts until successful", isCorrect: false },
      { text: "Oral", isCorrect: false },
    ],
  },
  {
    stem: "How are paediatric drug doses generally calculated, and what is the safeguard?",
    topic: "Paediatric Prescribing",
    explanation:
      "By body weight, in milligrams per kilogram, but never exceeding the adult dose. Weight-based calculation is error-prone — a misplaced decimal is a tenfold error — which is why independent double-checking of paediatric calculations is standard practice rather than a formality.",
    choices: [
      { text: "By weight in mg/kg, capped at the adult dose, with independent double-checking", isCorrect: true },
      { text: "By age alone, using standard adult doses", isCorrect: false },
      { text: "By height only", isCorrect: false },
      { text: "Always half the adult dose", isCorrect: false },
    ],
  },
  {
    stem: "Which analgesic is contraindicated in children under 16 because of the risk of Reye's syndrome?",
    topic: "Paediatric Prescribing",
    explanation:
      "Aspirin. Its use during viral illness is associated with Reye's syndrome — acute encephalopathy with fatty liver, often fatal. The exception is specific indications such as Kawasaki disease, where the benefit outweighs the risk under specialist supervision.",
    choices: [
      { text: "Aspirin", isCorrect: true },
      { text: "Paracetamol", isCorrect: false },
      { text: "Ibuprofen", isCorrect: false },
      { text: "Codeine at any age", isCorrect: false },
    ],
  },
  {
    stem: "What is the single most useful thing in recognising the seriously ill child early?",
    topic: "Recognition of the Sick Child",
    explanation:
      "A structured ABCDE assessment combined with taking parental concern seriously — a parent saying the child is 'not themselves' is a genuinely useful predictor. Objective early warning scores help, but the combination of a systematic look and listening to the person who knows the child best is what catches deterioration soonest.",
    choices: [
      { text: "Structured ABCDE assessment, taking parental concern seriously", isCorrect: true },
      { text: "Blood pressure measurement alone", isCorrect: false },
      { text: "Waiting for laboratory results before acting", isCorrect: false },
      { text: "Temperature reading in isolation", isCorrect: false },
    ],
  },
];

/* ═══════════ SEED ═══════════ */

/**
 * Retries a database write when the connection drops.
 * Long seeds make hundreds of sequential round trips, and hosted free-tier
 * databases occasionally drop one. Genuine errors are re-thrown immediately.
 */
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
  categorySlug: string; slug: string; title: string; description: string;
  kind: string; timeLimitSeconds: number | null; difficulty: string; questions: Q[];
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
          slug: o.slug, title: o.title, description: o.description, categoryId: category.id,
          kind: o.kind, timeLimitSeconds: o.timeLimitSeconds, passThreshold: 70,
          difficulty: o.difficulty, published: true,
        },
        update: {
          title: o.title, description: o.description, categoryId: category.id,
          kind: o.kind, timeLimitSeconds: o.timeLimitSeconds,
        },
      }),
    `quiz ${o.slug}`
  );
  await withRetry(() => prisma.question.deleteMany({ where: { quizId: quiz.id } }), "clear questions");

  let order = 0;
  for (const q of o.questions) {
    const n = order++;
    await withRetry(
      () =>
        prisma.question.create({
          data: {
            quizId: quiz.id, type: "SINGLE", stem: q.stem, topic: q.topic,
            explanation: q.explanation, points: 1, order: n,
            choices: { create: q.choices.map((c, i) => ({ text: c.text, isCorrect: c.isCorrect, order: i })) },
          },
        }),
      `question ${n + 1} of ${o.title}`
    );
  }
  console.log(`  ✓ ${o.title} — ${o.questions.length} questions`);
}

async function main() {
  console.log("Seeding Paediatrics…\n");
  const CAT = "cs-paediatrics";

  await seedSet({
    categorySlug: CAT, slug: "neonatology-set-1",
    title: "Neonatology — Practice Set 1",
    description: "Newborn assessment, jaundice, respiratory distress, sepsis, neonatal emergencies, screening and congenital heart disease. Fifteen questions, untimed.",
    kind: "PRACTICE", timeLimitSeconds: null, difficulty: "Intermediate", questions: NEO,
  });

  await seedSet({
    categorySlug: CAT, slug: "growth-development-set-1",
    title: "Growth & Development — Practice Set 1",
    description: "Developmental milestones and red flags, growth charts, puberty, immunisation, nutrition and neurodevelopmental conditions. Fifteen questions.",
    kind: "PRACTICE", timeLimitSeconds: null, difficulty: "Foundational", questions: DEV,
  });

  await seedSet({
    categorySlug: CAT, slug: "paediatric-clinical-set-1",
    title: "Paediatric Clinical — Practice Set 1",
    description: "Respiratory presentations, surgical abdomen, gastroenteritis, serious infection and haematology in childhood. Fifteen questions.",
    kind: "PRACTICE", timeLimitSeconds: null, difficulty: "Intermediate", questions: CLIN1,
  });

  await seedSet({
    categorySlug: CAT, slug: "paediatric-clinical-set-2",
    title: "Paediatric Clinical — Practice Set 2",
    description: "Endocrine, renal, surgical and musculoskeletal presentations, safeguarding, dermatology and the ways children differ physiologically. Fifteen fresh questions.",
    kind: "PRACTICE", timeLimitSeconds: null, difficulty: "Intermediate", questions: CLIN2,
  });

  await seedSet({
    categorySlug: CAT, slug: "paediatric-emergencies-set-1",
    title: "Paediatric Emergencies — Practice Set 1",
    description: "Paediatric resuscitation, anaphylaxis, seizures, trauma and burns, poisoning, metabolic emergencies and safe prescribing. Fifteen questions.",
    kind: "PRACTICE", timeLimitSeconds: null, difficulty: "Intermediate", questions: EMERG,
  });

  await seedSet({
    categorySlug: CAT, slug: "paediatric-clinical-exam-1",
    title: "Paediatric Clinical — Timed Exam",
    description: "Both clinical sets combined: thirty questions in 35 minutes, feedback withheld until you submit.",
    kind: "EXAM", timeLimitSeconds: 35 * 60, difficulty: "Intermediate", questions: [...CLIN1, ...CLIN2],
  });

  await seedSet({
    categorySlug: CAT, slug: "neonatal-development-exam-1",
    title: "Neonatology & Development — Timed Exam",
    description: "Neonatology and growth & development combined: thirty questions in 35 minutes.",
    kind: "EXAM", timeLimitSeconds: 35 * 60, difficulty: "Intermediate", questions: [...NEO, ...DEV],
  });

  await seedSet({
    categorySlug: CAT, slug: "paediatrics-comprehensive-exam-1",
    title: "Paediatrics — Comprehensive Timed Exam",
    description: "All seventy-five items across neonatology, development, clinical paediatrics and emergencies: 90 minutes.",
    kind: "EXAM", timeLimitSeconds: 90 * 60, difficulty: "Advanced",
    questions: [...NEO, ...DEV, ...CLIN1, ...CLIN2, ...EMERG],
  });

  console.log("\nDone. Editable in Admin → Question Bank.");
  console.log("⚠ Paediatric protocols vary by national guideline — review locally.");
}

main().catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
