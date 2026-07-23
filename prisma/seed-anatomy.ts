/**
 * CONTENT WAVE 7 — Anatomy (gross · neuro · embryology)
 *
 * 75 original questions as EIGHT quizzes, matching the expanded Wave 5/6 shape:
 *
 *   Gross Anatomy  Set 1 (15) · Set 2 (15)   → fs-gross-anatomy
 *   Neuroanatomy   Set 1 (15) · Set 2 (15)   → fs-neuroanatomy
 *   Embryology     Set 1 (15)                → fs-embryology
 *   Exams          Gross (30) · Neuro (30) · Comprehensive (75)
 *
 * Written clinically throughout. Anatomy taught as a list of names is forgotten;
 * anatomy taught through the lesion, the block or the fracture is remembered —
 * so nearly every question anchors a structure to something that goes wrong.
 *
 * Run:  npx tsx prisma/seed-anatomy.ts
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Q = {
  stem: string;
  topic: string;
  explanation: string;
  choices: { text: string; isCorrect: boolean }[];
};

/* ═══════════ GROSS ANATOMY SET 1 ═══════════ */

const GROSS1: Q[] = [
  {
    stem: "A patient cannot abduct the arm beyond 15 degrees after shoulder trauma. Which nerve is most likely injured?",
    topic: "Upper Limb",
    explanation:
      "The axillary nerve, which supplies deltoid and teres minor. It winds around the surgical neck of the humerus, so it is vulnerable to fracture there and to anterior shoulder dislocation. Sensation over the 'regimental badge' area of the lateral shoulder is also lost — a quick bedside check.",
    choices: [
      { text: "Axillary nerve", isCorrect: true },
      { text: "Radial nerve", isCorrect: false },
      { text: "Musculocutaneous nerve", isCorrect: false },
      { text: "Long thoracic nerve", isCorrect: false },
    ],
  },
  {
    stem: "A mid-shaft humeral fracture is complicated by wrist drop. Which nerve has been injured?",
    topic: "Upper Limb",
    explanation:
      "The radial nerve, which runs in the spiral groove against the humeral shaft. It supplies the extensor compartment, so its loss produces wrist drop and inability to extend the fingers and thumb. Sensation is lost over the dorsal first web space.",
    choices: [
      { text: "Radial nerve", isCorrect: true },
      { text: "Ulnar nerve", isCorrect: false },
      { text: "Median nerve", isCorrect: false },
      { text: "Axillary nerve", isCorrect: false },
    ],
  },
  {
    stem: "Which structures pass through the carpal tunnel?",
    topic: "Upper Limb",
    explanation:
      "The median nerve and nine flexor tendons — four flexor digitorum superficialis, four profundus, and flexor pollicis longus. The ulnar nerve passes OUTSIDE the tunnel in Guyon's canal, which is why carpal tunnel syndrome spares the little finger and why that distribution helps distinguish it.",
    choices: [
      { text: "The median nerve and nine flexor tendons", isCorrect: true },
      { text: "The median and ulnar nerves together", isCorrect: false },
      { text: "The radial nerve and extensor tendons", isCorrect: false },
      { text: "The ulnar nerve and artery only", isCorrect: false },
    ],
  },
  {
    stem: "A patient has clawing of the fourth and fifth fingers with loss of finger abduction. Which nerve is affected?",
    topic: "Upper Limb",
    explanation:
      "The ulnar nerve, which supplies most intrinsic hand muscles including the interossei. Loss of the lumbricals to the medial two fingers unopposes the long extensors and flexors, producing the claw. It is commonly injured at the medial epicondyle — the 'funny bone'.",
    choices: [
      { text: "Ulnar nerve", isCorrect: true },
      { text: "Median nerve", isCorrect: false },
      { text: "Radial nerve", isCorrect: false },
      { text: "Anterior interosseous nerve", isCorrect: false },
    ],
  },
  {
    stem: "Which artery is most commonly used to assess pulse at the wrist, and which side is it on?",
    topic: "Upper Limb",
    explanation:
      "The radial artery, on the lateral (thumb) side, lying between the flexor carpi radialis tendon and the radius. Allen's test checks ulnar collateral supply before cannulating it — important, because the hand depends on the palmar arches for redundancy.",
    choices: [
      { text: "The radial artery, on the lateral (thumb) side", isCorrect: true },
      { text: "The ulnar artery, on the lateral side", isCorrect: false },
      { text: "The brachial artery at the wrist", isCorrect: false },
      { text: "The radial artery, on the medial side", isCorrect: false },
    ],
  },
  {
    stem: "A patient cannot dorsiflex the foot after a fibular neck fracture. Which nerve is injured?",
    topic: "Lower Limb",
    explanation:
      "The common fibular (peroneal) nerve, which wraps around the fibular neck with almost no soft tissue protection. Injury causes foot drop and loss of sensation over the dorsum of the foot. It is also at risk from tight plaster casts and prolonged leg crossing.",
    choices: [
      { text: "Common fibular (peroneal) nerve", isCorrect: true },
      { text: "Tibial nerve", isCorrect: false },
      { text: "Femoral nerve", isCorrect: false },
      { text: "Obturator nerve", isCorrect: false },
    ],
  },
  {
    stem: "Which nerve is at risk during an incorrectly sited intramuscular gluteal injection?",
    topic: "Lower Limb",
    explanation:
      "The sciatic nerve. It is why injections are given in the upper outer quadrant of the buttock — the nerve runs through the lower medial region. Injury causes weakness below the knee and sensory loss, and can be permanent.",
    choices: [
      { text: "Sciatic nerve", isCorrect: true },
      { text: "Femoral nerve", isCorrect: false },
      { text: "Obturator nerve", isCorrect: false },
      { text: "Pudendal nerve", isCorrect: false },
    ],
  },
  {
    stem: "Why is a femoral neck fracture in an elderly patient at risk of avascular necrosis of the head?",
    topic: "Lower Limb",
    explanation:
      "The femoral head is supplied mainly by retinacular branches of the medial circumflex femoral artery, which run proximally along the neck. A displaced intracapsular fracture tears them, leaving the head without supply. This is why such fractures are often replaced rather than fixed.",
    choices: [
      { text: "The blood supply runs along the neck and is torn by the fracture", isCorrect: true },
      { text: "The head has no blood supply at any age", isCorrect: false },
      { text: "The joint capsule compresses the artery", isCorrect: false },
      { text: "Venous drainage is obstructed", isCorrect: false },
    ],
  },
  {
    stem: "Which structures make up the contents of the femoral triangle, from lateral to medial?",
    topic: "Lower Limb",
    explanation:
      "Femoral nerve, artery, vein — remembered as NAVY moving medially, with the Y for the lymphatics and femoral canal. The order matters clinically: the vein is medial to the artery, which is where you aim when taking femoral venous blood or placing a line.",
    choices: [
      { text: "Nerve, artery, vein — lateral to medial", isCorrect: true },
      { text: "Vein, artery, nerve — lateral to medial", isCorrect: false },
      { text: "Artery, nerve, vein — lateral to medial", isCorrect: false },
      { text: "Nerve, vein, artery — lateral to medial", isCorrect: false },
    ],
  },
  {
    stem: "At which vertebral level does the spinal cord typically end in an adult?",
    topic: "Back & Spine",
    explanation:
      "Around L1/L2, at the conus medullaris. Below that the cauda equina occupies the canal. This is precisely why lumbar puncture is performed at L3/L4 or L4/L5 — the needle enters below the cord, where mobile nerve roots move aside rather than being pierced.",
    choices: [
      { text: "L1/L2", isCorrect: true },
      { text: "T12", isCorrect: false },
      { text: "L4/L5", isCorrect: false },
      { text: "S1", isCorrect: false },
    ],
  },
  {
    stem: "Which landmark identifies the level for lumbar puncture?",
    topic: "Back & Spine",
    explanation:
      "The intercristal (Tuffier's) line joining the highest points of the iliac crests, which crosses roughly at L4. Working from a fixed bony landmark rather than counting vertebrae reduces the risk of going too high and reaching the cord.",
    choices: [
      { text: "The line between the iliac crests, at about L4", isCorrect: true },
      { text: "The inferior angle of the scapula", isCorrect: false },
      { text: "The lowest rib", isCorrect: false },
      { text: "The sacral hiatus", isCorrect: false },
    ],
  },
  {
    stem: "Which layers does a needle traverse during a midline lumbar puncture, in order?",
    topic: "Back & Spine",
    explanation:
      "Skin, subcutaneous fat, supraspinous ligament, interspinous ligament, ligamentum flavum, epidural space, dura and arachnoid into the subarachnoid space. The characteristic 'give' as ligamentum flavum is pierced is the tactile landmark experienced operators rely on.",
    choices: [
      { text: "Skin → supraspinous → interspinous → ligamentum flavum → epidural → dura/arachnoid", isCorrect: true },
      { text: "Skin → dura → ligamentum flavum → epidural space", isCorrect: false },
      { text: "Skin → muscle → periosteum → cord", isCorrect: false },
      { text: "Skin → pleura → epidural space", isCorrect: false },
    ],
  },
  {
    stem: "Where should a needle be inserted relative to the rib during chest drain or thoracocentesis?",
    topic: "Thorax",
    explanation:
      "Just ABOVE the upper border of the rib below. The neurovascular bundle — intercostal vein, artery and nerve — runs in the groove on the inferior border of each rib, so passing over the top of the lower rib avoids it. Going under a rib risks bleeding and neuralgia.",
    choices: [
      { text: "Above the upper border of the rib below, avoiding the neurovascular bundle", isCorrect: true },
      { text: "Directly beneath the rib above", isCorrect: false },
      { text: "Through the centre of the intercostal space at any angle", isCorrect: false },
      { text: "Through the rib itself", isCorrect: false },
    ],
  },
  {
    stem: "What are the boundaries of the 'safe triangle' for chest drain insertion?",
    topic: "Thorax",
    explanation:
      "Anterior border of latissimus dorsi, lateral border of pectoralis major, a line above the level of the nipple (roughly the fifth intercostal space), and the apex below the axilla. It keeps the drain away from the diaphragm, liver, spleen and heart — the structures injured when drains are placed too low.",
    choices: [
      { text: "Latissimus dorsi, pectoralis major, and a line at about the fifth intercostal space", isCorrect: true },
      { text: "The sternum, clavicle and second rib", isCorrect: false },
      { text: "The scapula, spine and twelfth rib", isCorrect: false },
      { text: "Anywhere in the mid-axillary line at any level", isCorrect: false },
    ],
  },
  {
    stem: "Which structure lies immediately posterior to the left atrium, explaining dysphagia in mitral stenosis?",
    topic: "Thorax",
    explanation:
      "The oesophagus. An enlarged left atrium can compress it, producing dysphagia — and this relationship is why a barium swallow historically demonstrated left atrial enlargement. It also explains why transoesophageal echo gives such a clear view of the atrium and mitral valve.",
    choices: [
      { text: "The oesophagus", isCorrect: true },
      { text: "The trachea", isCorrect: false },
      { text: "The descending aorta only", isCorrect: false },
      { text: "The superior vena cava", isCorrect: false },
    ],
  },
];

/* ═══════════ GROSS ANATOMY SET 2 ═══════════ */

const GROSS2: Q[] = [
  {
    stem: "At which point does appendicitis pain classically become localised, and what is the landmark?",
    topic: "Abdomen",
    explanation:
      "McBurney's point, one-third of the way from the right anterior superior iliac spine to the umbilicus. Pain begins periumbilically as visceral referred pain from the midgut, then localises once the inflamed appendix irritates the parietal peritoneum — a migration that is itself diagnostically useful.",
    choices: [
      { text: "McBurney's point — one-third from the ASIS to the umbilicus", isCorrect: true },
      { text: "Directly over the umbilicus", isCorrect: false },
      { text: "The left iliac fossa", isCorrect: false },
      { text: "The epigastrium", isCorrect: false },
    ],
  },
  {
    stem: "Why does midgut pain refer to the periumbilical region?",
    topic: "Abdomen",
    explanation:
      "Visceral afferents from the midgut enter the spinal cord around T10, which is also the dermatome of the umbilicus — so the brain localises the pain to the body wall at that level. Foregut refers to the epigastrium (T5–T9) and hindgut to the suprapubic region (L1–L2).",
    choices: [
      { text: "Midgut visceral afferents enter at T10, the umbilical dermatome", isCorrect: true },
      { text: "The appendix physically touches the umbilicus", isCorrect: false },
      { text: "Referred pain is random and unpredictable", isCorrect: false },
      { text: "The vagus nerve supplies the umbilicus", isCorrect: false },
    ],
  },
  {
    stem: "Which structures form the portal vein?",
    topic: "Abdomen",
    explanation:
      "The superior mesenteric and splenic veins, joining behind the neck of the pancreas. Portal hypertension therefore backs up into portosystemic anastomoses — oesophageal varices, caput medusae and rectal varices — which is where the clinical consequences appear.",
    choices: [
      { text: "The superior mesenteric and splenic veins", isCorrect: true },
      { text: "The inferior vena cava and hepatic veins", isCorrect: false },
      { text: "The renal and gonadal veins", isCorrect: false },
      { text: "The hepatic artery and bile duct", isCorrect: false },
    ],
  },
  {
    stem: "Which three structures make up the portal triad within the hepatoduodenal ligament?",
    topic: "Abdomen",
    explanation:
      "Portal vein, hepatic artery proper and common bile duct. Compressing this ligament between finger and thumb — the Pringle manoeuvre — controls hepatic inflow bleeding during surgery, which is the practical reason the relationship is worth knowing.",
    choices: [
      { text: "Portal vein, hepatic artery and common bile duct", isCorrect: true },
      { text: "Hepatic vein, splenic artery and pancreatic duct", isCorrect: false },
      { text: "Aorta, IVC and thoracic duct", isCorrect: false },
      { text: "Cystic duct, cystic artery and gallbladder", isCorrect: false },
    ],
  },
  {
    stem: "A patient has a hernia passing medial to the inferior epigastric vessels. What type is it?",
    topic: "Abdomen",
    explanation:
      "A direct inguinal hernia, pushing through a weakness in the posterior wall of the inguinal canal (Hesselbach's triangle). Indirect hernias pass LATERAL to the vessels, through the deep ring, following the path of testicular descent — which is why they are commoner in the young.",
    choices: [
      { text: "Direct inguinal hernia", isCorrect: true },
      { text: "Indirect inguinal hernia", isCorrect: false },
      { text: "Femoral hernia", isCorrect: false },
      { text: "Umbilical hernia", isCorrect: false },
    ],
  },
  {
    stem: "Why are femoral hernias more likely to strangulate than inguinal hernias?",
    topic: "Abdomen",
    explanation:
      "The femoral ring is narrow and bounded by rigid structures — the inguinal ligament, lacunar ligament and pectineal ligament — so bowel entering it is easily constricted. They are commoner in women and more often present as an emergency, which is why they are repaired promptly.",
    choices: [
      { text: "The femoral ring is narrow and bounded by rigid ligaments", isCorrect: true },
      { text: "They contain more bowel", isCorrect: false },
      { text: "They lack a peritoneal sac", isCorrect: false },
      { text: "They occur only in men", isCorrect: false },
    ],
  },
  {
    stem: "Which nerve supplies the diaphragm, and from which spinal levels?",
    topic: "Thorax",
    explanation:
      "The phrenic nerve, from C3, C4 and C5 — 'C3, 4, 5 keeps the diaphragm alive'. This explains why a cervical cord injury above C3 abolishes spontaneous breathing, and why diaphragmatic irritation from blood or infection refers pain to the shoulder tip, which shares those dermatomes.",
    choices: [
      { text: "The phrenic nerve, C3–C5", isCorrect: true },
      { text: "The vagus nerve, cranial", isCorrect: false },
      { text: "The intercostal nerves, T1–T12", isCorrect: false },
      { text: "The long thoracic nerve, C5–C7", isCorrect: false },
    ],
  },
  {
    stem: "Which openings in the diaphragm transmit the aorta, oesophagus and inferior vena cava, and at what levels?",
    topic: "Thorax",
    explanation:
      "IVC at T8, oesophagus at T10, aorta at T12 — remembered as the vowels: I ate (8) ten (10) eggs at twelve. The oesophageal hiatus is the site of hiatus hernia, and the aortic hiatus is technically behind the diaphragm rather than through it.",
    choices: [
      { text: "IVC T8, oesophagus T10, aorta T12", isCorrect: true },
      { text: "Aorta T8, oesophagus T10, IVC T12", isCorrect: false },
      { text: "All three at T10", isCorrect: false },
      { text: "Oesophagus T8, IVC T10, aorta T12", isCorrect: false },
    ],
  },
  {
    stem: "Which lymph nodes drain the testis, and why does this matter clinically?",
    topic: "Pelvis & Perineum",
    explanation:
      "Para-aortic nodes, because the testis develops on the posterior abdominal wall and descends, taking its lymphatics with it. Scrotal SKIN drains to inguinal nodes instead. So testicular cancer spreads to the abdomen, not the groin — and inguinal nodes in scrotal disease point to a skin lesion.",
    choices: [
      { text: "Para-aortic nodes, reflecting its abdominal embryological origin", isCorrect: true },
      { text: "Inguinal nodes, like the scrotal skin", isCorrect: false },
      { text: "Iliac nodes only", isCorrect: false },
      { text: "The testis has no lymphatic drainage", isCorrect: false },
    ],
  },
  {
    stem: "Which nerve provides sensory supply to the perineum and is targeted in a pudendal block?",
    topic: "Pelvis & Perineum",
    explanation:
      "The pudendal nerve (S2, S3, S4 — 'keep the pelvis off the floor'). It is blocked via the ischial spine for perineal procedures and instrumental delivery. It also supplies the external anal and urethral sphincters, so damage affects continence as well as sensation.",
    choices: [
      { text: "Pudendal nerve, S2–S4", isCorrect: true },
      { text: "Obturator nerve, L2–L4", isCorrect: false },
      { text: "Femoral nerve, L2–L4", isCorrect: false },
      { text: "Sciatic nerve, L4–S3", isCorrect: false },
    ],
  },
  {
    stem: "Why is the right main bronchus the commoner site for an inhaled foreign body?",
    topic: "Thorax",
    explanation:
      "It is wider, shorter and more vertical than the left, so aspirated material tends to follow it. This anatomy also explains why aspiration pneumonia most often affects the right lower lobe, and why a right-sided collapse is the usual finding after aspiration.",
    choices: [
      { text: "It is wider, shorter and more vertical", isCorrect: true },
      { text: "It is narrower and traps objects", isCorrect: false },
      { text: "It lies closer to the oesophagus", isCorrect: false },
      { text: "It has no cartilage rings", isCorrect: false },
    ],
  },
  {
    stem: "Which nerve is at risk during thyroid surgery, and what is the consequence of injury?",
    topic: "Head & Neck",
    explanation:
      "The recurrent laryngeal nerve, which runs in the tracheo-oesophageal groove near the inferior thyroid artery. Unilateral injury causes hoarseness; bilateral injury can obstruct the airway. Its course also explains hoarseness as a sign of mediastinal malignancy.",
    choices: [
      { text: "Recurrent laryngeal nerve — hoarseness, or airway obstruction if bilateral", isCorrect: true },
      { text: "Facial nerve — facial droop", isCorrect: false },
      { text: "Hypoglossal nerve — tongue deviation", isCorrect: false },
      { text: "Phrenic nerve — diaphragm paralysis", isCorrect: false },
    ],
  },
  {
    stem: "Which structure is most likely damaged if the parathyroid glands are removed inadvertently during thyroidectomy?",
    topic: "Head & Neck",
    explanation:
      "Nothing is 'damaged' as such — but losing the parathyroids causes acute hypocalcaemia, presenting with perioral tingling, carpopedal spasm, and positive Chvostek and Trousseau signs. Calcium must be monitored after thyroid surgery precisely because of this anatomical proximity.",
    choices: [
      { text: "Calcium regulation is lost, causing acute hypocalcaemia", isCorrect: true },
      { text: "Thyroid hormone production stops immediately", isCorrect: false },
      { text: "The airway becomes obstructed", isCorrect: false },
      { text: "Adrenaline secretion fails", isCorrect: false },
    ],
  },
  {
    stem: "Which triangle of the neck contains the carotid sheath, and what does the sheath contain?",
    topic: "Head & Neck",
    explanation:
      "The anterior triangle. The carotid sheath contains the common carotid artery, internal jugular vein and vagus nerve — with the vein lateral and the nerve posterior between them. That arrangement guides internal jugular central line placement.",
    choices: [
      { text: "Anterior triangle — carotid artery, internal jugular vein and vagus nerve", isCorrect: true },
      { text: "Posterior triangle — subclavian artery and brachial plexus only", isCorrect: false },
      { text: "Submental triangle — lymph nodes only", isCorrect: false },
      { text: "Anterior triangle — trachea and oesophagus", isCorrect: false },
    ],
  },
  {
    stem: "Which anatomical feature explains why a scaphoid fracture risks avascular necrosis of its proximal pole?",
    topic: "Upper Limb",
    explanation:
      "The scaphoid is supplied in a retrograde fashion, entering distally. A waist fracture therefore cuts off the proximal fragment. This is also why anatomical snuffbox tenderness is taken seriously even when initial radiographs look normal — the consequence of missing it is non-union.",
    choices: [
      { text: "Its blood supply enters distally and runs retrograde", isCorrect: true },
      { text: "It has no blood supply at all", isCorrect: false },
      { text: "It is supplied only by the ulnar artery", isCorrect: false },
      { text: "Venous drainage is obstructed by the fracture", isCorrect: false },
    ],
  },
];

/* ═══════════ NEUROANATOMY SET 1 ═══════════ */

const NEURO1: Q[] = [
  {
    stem: "Which artery supplies the medial surface of the cerebral hemisphere, and what deficit does its occlusion cause?",
    topic: "Cerebral Circulation",
    explanation:
      "The anterior cerebral artery. Because the medial motor and sensory strip represents the leg, occlusion causes contralateral leg weakness and sensory loss with relative arm and face sparing — the mirror image of a middle cerebral artery stroke.",
    choices: [
      { text: "Anterior cerebral artery — contralateral leg weakness", isCorrect: true },
      { text: "Middle cerebral artery — contralateral face and arm weakness", isCorrect: false },
      { text: "Posterior cerebral artery — homonymous hemianopia", isCorrect: false },
      { text: "Basilar artery — locked-in syndrome", isCorrect: false },
    ],
  },
  {
    stem: "A patient has right-sided face and arm weakness with expressive dysphasia. Which vessel is affected?",
    topic: "Cerebral Circulation",
    explanation:
      "The left middle cerebral artery. It supplies the lateral hemisphere, where face and arm are represented, and in most people the dominant hemisphere containing Broca's and Wernicke's areas. Dysphasia therefore localises the side as well as the territory.",
    choices: [
      { text: "Left middle cerebral artery", isCorrect: true },
      { text: "Right middle cerebral artery", isCorrect: false },
      { text: "Left anterior cerebral artery", isCorrect: false },
      { text: "Right posterior cerebral artery", isCorrect: false },
    ],
  },
  {
    stem: "What is the function of the circle of Willis?",
    topic: "Cerebral Circulation",
    explanation:
      "It provides collateral circulation between the anterior and posterior systems and across the midline, so gradual occlusion of one vessel may be compensated. It is also the commonest site of berry aneurysms — particularly at the anterior communicating artery.",
    choices: [
      { text: "Collateral circulation between anterior and posterior systems", isCorrect: true },
      { text: "Venous drainage of the brain", isCorrect: false },
      { text: "Production of cerebrospinal fluid", isCorrect: false },
      { text: "Regulation of intracranial pressure", isCorrect: false },
    ],
  },
  {
    stem: "A patient has a fixed dilated pupil with the eye deviated 'down and out' after head injury. Which nerve is compressed?",
    topic: "Cranial Nerves",
    explanation:
      "The oculomotor nerve (CN III), compressed by uncal herniation. Parasympathetic fibres run superficially so they fail first, giving the dilated unreactive pupil. The remaining unopposed lateral rectus and superior oblique produce the down-and-out position. This is a neurosurgical emergency.",
    choices: [
      { text: "Oculomotor nerve (CN III) from uncal herniation", isCorrect: true },
      { text: "Trochlear nerve (CN IV)", isCorrect: false },
      { text: "Abducens nerve (CN VI)", isCorrect: false },
      { text: "Optic nerve (CN II)", isCorrect: false },
    ],
  },
  {
    stem: "Which cranial nerve has the longest intracranial course and is often the first affected by raised intracranial pressure?",
    topic: "Cranial Nerves",
    explanation:
      "The abducens nerve (CN VI). Its long course makes it vulnerable to stretching, so a sixth nerve palsy with failure of abduction is a 'false localising sign' — it indicates raised pressure without telling you where the lesion is.",
    choices: [
      { text: "Abducens nerve (CN VI)", isCorrect: true },
      { text: "Olfactory nerve (CN I)", isCorrect: false },
      { text: "Facial nerve (CN VII)", isCorrect: false },
      { text: "Vagus nerve (CN X)", isCorrect: false },
    ],
  },
  {
    stem: "How can an upper motor neurone facial weakness be distinguished from a lower motor neurone one?",
    topic: "Cranial Nerves",
    explanation:
      "Forehead sparing. The forehead receives bilateral cortical input, so a stroke affecting one hemisphere spares it and the patient can still wrinkle their brow. A lower motor neurone lesion such as Bell's palsy affects the whole hemiface including the forehead.",
    choices: [
      { text: "Upper motor neurone lesions spare the forehead", isCorrect: true },
      { text: "Lower motor neurone lesions spare the forehead", isCorrect: false },
      { text: "Both affect the forehead equally", isCorrect: false },
      { text: "Only taste is affected in upper motor neurone lesions", isCorrect: false },
    ],
  },
  {
    stem: "Which cranial nerve is responsible for the afferent limb of the corneal reflex, and which for the efferent?",
    topic: "Cranial Nerves",
    explanation:
      "Afferent is the ophthalmic division of trigeminal (CN V1); efferent is facial (CN VII) causing blink. Testing it examines two nerves and their brainstem connection at once, which is why it is a standard part of brainstem assessment in the unconscious patient.",
    choices: [
      { text: "Afferent CN V1, efferent CN VII", isCorrect: true },
      { text: "Afferent CN VII, efferent CN V1", isCorrect: false },
      { text: "Both limbs are CN V", isCorrect: false },
      { text: "Afferent CN II, efferent CN III", isCorrect: false },
    ],
  },
  {
    stem: "A lesion at the optic chiasm produces which visual field defect?",
    topic: "Visual Pathway",
    explanation:
      "Bitemporal hemianopia. Fibres from the nasal retina — which carry the temporal visual fields — decussate at the chiasm, so a central compressive lesion such as a pituitary adenoma takes out both temporal fields. Patients often describe bumping into things on both sides.",
    choices: [
      { text: "Bitemporal hemianopia", isCorrect: true },
      { text: "Homonymous hemianopia", isCorrect: false },
      { text: "Complete monocular blindness", isCorrect: false },
      { text: "Central scotoma", isCorrect: false },
    ],
  },
  {
    stem: "A lesion of the left optic tract produces which defect?",
    topic: "Visual Pathway",
    explanation:
      "Right homonymous hemianopia — loss of the right half of the visual field in both eyes. Behind the chiasm, each tract carries the contralateral visual field from both eyes, so any retrochiasmal lesion produces a homonymous defect. The rule: monocular means in front of the chiasm.",
    choices: [
      { text: "Right homonymous hemianopia", isCorrect: true },
      { text: "Left homonymous hemianopia", isCorrect: false },
      { text: "Bitemporal hemianopia", isCorrect: false },
      { text: "Left monocular blindness", isCorrect: false },
    ],
  },
  {
    stem: "Which tract carries pain and temperature, and where does it decussate?",
    topic: "Spinal Tracts",
    explanation:
      "The spinothalamic tract, decussating within one or two segments of entering the cord. Because it crosses almost immediately, a cord lesion causes CONTRALATERAL loss of pain and temperature — in contrast to the dorsal columns, which cross in the medulla.",
    choices: [
      { text: "Spinothalamic tract — decussates at or near the level of entry", isCorrect: true },
      { text: "Dorsal columns — decussates at the level of entry", isCorrect: false },
      { text: "Corticospinal tract — decussates in the medulla", isCorrect: false },
      { text: "Spinocerebellar tract — does not decussate", isCorrect: false },
    ],
  },
  {
    stem: "Which modalities travel in the dorsal columns?",
    topic: "Spinal Tracts",
    explanation:
      "Fine touch, vibration and proprioception. They ascend ipsilaterally and decussate in the medulla, so a cord lesion causes IPSILATERAL loss — the opposite pattern to spinothalamic. That dissociation is what makes Brown-Séquard syndrome recognisable.",
    choices: [
      { text: "Fine touch, vibration and proprioception", isCorrect: true },
      { text: "Pain and temperature", isCorrect: false },
      { text: "Motor commands to skeletal muscle", isCorrect: false },
      { text: "Autonomic outflow", isCorrect: false },
    ],
  },
  {
    stem: "A hemisection of the spinal cord produces which combination of findings?",
    topic: "Spinal Tracts",
    explanation:
      "Brown-Séquard syndrome: ipsilateral motor weakness and loss of proprioception and vibration, with contralateral loss of pain and temperature beginning a segment or two below. The dissociation follows directly from where each tract decussates.",
    choices: [
      { text: "Ipsilateral weakness and proprioceptive loss, contralateral pain and temperature loss", isCorrect: true },
      { text: "Complete bilateral loss of all modalities", isCorrect: false },
      { text: "Contralateral weakness with ipsilateral pain loss", isCorrect: false },
      { text: "Isolated bladder dysfunction", isCorrect: false },
    ],
  },
  {
    stem: "Where is cerebrospinal fluid produced, and where is it absorbed?",
    topic: "CSF & Ventricles",
    explanation:
      "Produced by the choroid plexus in the ventricles, absorbed through arachnoid granulations into the dural venous sinuses. Obstruction anywhere along the path causes hydrocephalus — non-communicating if the block is within the ventricular system, communicating if absorption fails.",
    choices: [
      { text: "Produced by choroid plexus, absorbed at arachnoid granulations", isCorrect: true },
      { text: "Produced by the dura, absorbed by the choroid plexus", isCorrect: false },
      { text: "Produced by the pituitary, absorbed by the pineal", isCorrect: false },
      { text: "Produced and absorbed entirely in the spinal canal", isCorrect: false },
    ],
  },
  {
    stem: "Which vessel is torn in an extradural haematoma, and what is the classic history?",
    topic: "Intracranial Haemorrhage",
    explanation:
      "The middle meningeal artery, usually from a temporal bone fracture. The classic pattern is brief loss of consciousness, a lucid interval, then rapid deterioration as arterial bleeding expands. CT shows a biconvex (lens-shaped) collection limited by suture lines.",
    choices: [
      { text: "Middle meningeal artery — lucid interval then rapid deterioration", isCorrect: true },
      { text: "Bridging veins — gradual decline over weeks", isCorrect: false },
      { text: "Berry aneurysm — thunderclap headache", isCorrect: false },
      { text: "Internal carotid — immediate coma", isCorrect: false },
    ],
  },
  {
    stem: "An elderly patient on anticoagulants has gradual confusion over weeks after a minor fall. CT shows a crescent-shaped collection. What is it?",
    topic: "Intracranial Haemorrhage",
    explanation:
      "A subdural haematoma from torn bridging veins. Cerebral atrophy stretches these veins, so minor trauma tears them, and venous bleeding accumulates slowly. The crescent shape crosses suture lines because the subdural space is not limited by them — the opposite of an extradural.",
    choices: [
      { text: "Subdural haematoma from torn bridging veins", isCorrect: true },
      { text: "Extradural haematoma", isCorrect: false },
      { text: "Subarachnoid haemorrhage", isCorrect: false },
      { text: "Intracerebral haemorrhage", isCorrect: false },
    ],
  },
];

/* ═══════════ NEUROANATOMY SET 2 ═══════════ */

const NEURO2: Q[] = [
  {
    stem: "Which structure connects the two cerebral hemispheres?",
    topic: "Cerebral Structure",
    explanation:
      "The corpus callosum, the largest white matter commissure. Its section — historically for epilepsy — produces disconnection syndromes where information in one hemisphere cannot be reported by the language centres in the other.",
    choices: [
      { text: "The corpus callosum", isCorrect: true },
      { text: "The internal capsule", isCorrect: false },
      { text: "The thalamus", isCorrect: false },
      { text: "The brainstem", isCorrect: false },
    ],
  },
  {
    stem: "Why does a small lesion in the internal capsule cause such a dense hemiplegia?",
    topic: "Cerebral Structure",
    explanation:
      "Motor and sensory fibres from the whole hemisphere are packed tightly together there, so a tiny infarct interrupts a great deal. This is why lacunar strokes in the capsule cause pure motor hemiparesis affecting face, arm and leg equally.",
    choices: [
      { text: "All the descending motor fibres are compressed into a small area", isCorrect: true },
      { text: "It is the only region containing motor neurones", isCorrect: false },
      { text: "It has no collateral blood supply from any source", isCorrect: false },
      { text: "It contains the cerebellum", isCorrect: false },
    ],
  },
  {
    stem: "Which functions localise to the frontal lobe?",
    topic: "Cerebral Structure",
    explanation:
      "Motor control, expressive language (Broca's area in the dominant hemisphere), and executive function including planning, judgement and social behaviour. Frontal lesions therefore produce personality change and disinhibition as well as weakness — the behavioural change often being the more disabling.",
    choices: [
      { text: "Motor control, expressive language and executive function", isCorrect: true },
      { text: "Vision and visual association", isCorrect: false },
      { text: "Hearing and receptive language only", isCorrect: false },
      { text: "Balance and coordination", isCorrect: false },
    ],
  },
  {
    stem: "A patient has fluent but meaningless speech with impaired comprehension. Which area is affected?",
    topic: "Language",
    explanation:
      "Wernicke's area in the superior temporal gyrus of the dominant hemisphere. Speech remains fluent because motor output is intact, but content is disordered and comprehension is lost — and patients characteristically lack insight into the deficit.",
    choices: [
      { text: "Wernicke's area — receptive dysphasia", isCorrect: true },
      { text: "Broca's area — expressive dysphasia", isCorrect: false },
      { text: "The arcuate fasciculus", isCorrect: false },
      { text: "The cerebellum", isCorrect: false },
    ],
  },
  {
    stem: "Which structure is the principal relay for sensory information heading to the cortex?",
    topic: "Deep Structures",
    explanation:
      "The thalamus. All sensory modalities except olfaction relay there before reaching the cortex. Thalamic lesions can therefore cause dense contralateral sensory loss and, characteristically, a severe central post-stroke pain syndrome.",
    choices: [
      { text: "The thalamus", isCorrect: true },
      { text: "The hypothalamus", isCorrect: false },
      { text: "The basal ganglia", isCorrect: false },
      { text: "The hippocampus", isCorrect: false },
    ],
  },
  {
    stem: "Degeneration of which structure causes the motor features of Parkinson's disease?",
    topic: "Deep Structures",
    explanation:
      "The substantia nigra pars compacta, whose dopaminergic projection to the striatum is lost. That produces bradykinesia, rigidity and resting tremor. Symptoms typically appear only after substantial cell loss, which is why the disease is well established by diagnosis.",
    choices: [
      { text: "Substantia nigra pars compacta", isCorrect: true },
      { text: "Cerebellar vermis", isCorrect: false },
      { text: "Hippocampus", isCorrect: false },
      { text: "Corpus callosum", isCorrect: false },
    ],
  },
  {
    stem: "Which structure is critical for the formation of new episodic memories?",
    topic: "Deep Structures",
    explanation:
      "The hippocampus. Bilateral damage produces anterograde amnesia with relatively preserved older memories and intact procedural learning. It is also among the most hypoxia-sensitive regions, which is why memory is often affected after cardiac arrest.",
    choices: [
      { text: "The hippocampus", isCorrect: true },
      { text: "The amygdala", isCorrect: false },
      { text: "The cerebellum", isCorrect: false },
      { text: "The thalamus", isCorrect: false },
    ],
  },
  {
    stem: "Which signs characterise a cerebellar hemisphere lesion?",
    topic: "Cerebellum",
    explanation:
      "IPSILATERAL ataxia, intention tremor, dysdiadochokinesia, nystagmus and dysarthria. The cerebellum influences the same side because its output crosses twice. Midline (vermis) lesions cause truncal ataxia instead, with the patient unable to sit or stand steadily.",
    choices: [
      { text: "Ipsilateral limb ataxia and intention tremor", isCorrect: true },
      { text: "Contralateral hemiplegia", isCorrect: false },
      { text: "Bilateral sensory loss", isCorrect: false },
      { text: "Resting tremor with rigidity", isCorrect: false },
    ],
  },
  {
    stem: "What distinguishes a cerebellar tremor from a Parkinsonian tremor?",
    topic: "Cerebellum",
    explanation:
      "Cerebellar tremor is an INTENTION tremor, worsening as the hand approaches a target. Parkinsonian tremor is present at REST and typically improves with movement. Asking the patient to reach for something separates them immediately at the bedside.",
    choices: [
      { text: "Cerebellar tremor worsens on approaching a target; Parkinsonian tremor occurs at rest", isCorrect: true },
      { text: "Cerebellar tremor occurs only at rest", isCorrect: false },
      { text: "They are clinically indistinguishable", isCorrect: false },
      { text: "Parkinsonian tremor worsens with intention", isCorrect: false },
    ],
  },
  {
    stem: "Which brainstem region contains the cardiovascular and respiratory centres?",
    topic: "Brainstem",
    explanation:
      "The medulla oblongata. This is why brainstem lesions and coning are rapidly fatal — the centres controlling breathing and circulation are compressed. It also contains the nuclei of cranial nerves IX to XII.",
    choices: [
      { text: "The medulla oblongata", isCorrect: true },
      { text: "The midbrain", isCorrect: false },
      { text: "The thalamus", isCorrect: false },
      { text: "The cerebellum", isCorrect: false },
    ],
  },
  {
    stem: "Which finding suggests a lesion of the reticular activating system?",
    topic: "Brainstem",
    explanation:
      "Reduced consciousness. The ascending reticular activating system in the brainstem maintains arousal, so damage produces coma even when the cortex is structurally intact. Coma therefore implies either bilateral hemisphere dysfunction or a brainstem lesion — never a single hemispheric stroke alone.",
    choices: [
      { text: "Reduced level of consciousness", isCorrect: true },
      { text: "Isolated leg weakness", isCorrect: false },
      { text: "Loss of smell only", isCorrect: false },
      { text: "Bitemporal hemianopia", isCorrect: false },
    ],
  },
  {
    stem: "Where does the corticospinal tract decussate, and what does this imply?",
    topic: "Motor Pathways",
    explanation:
      "At the pyramidal decussation in the lower medulla. So a lesion ABOVE it causes contralateral weakness, and one below causes ipsilateral weakness. This is why a hemisphere stroke weakens the opposite side while a cord lesion weakens the same side.",
    choices: [
      { text: "The medullary pyramids — lesions above cause contralateral weakness", isCorrect: true },
      { text: "The spinal cord at each segment", isCorrect: false },
      { text: "The internal capsule", isCorrect: false },
      { text: "It does not decussate at all", isCorrect: false },
    ],
  },
  {
    stem: "How do upper and lower motor neurone lesions differ on examination?",
    topic: "Motor Pathways",
    explanation:
      "Upper motor neurone lesions give increased tone, hyperreflexia, an extensor plantar response and little wasting. Lower motor neurone lesions give reduced tone, hyporeflexia, wasting and fasciculations. Distinguishing them localises the lesion before any imaging.",
    choices: [
      { text: "UMN: increased tone and reflexes; LMN: wasting, fasciculation and reduced reflexes", isCorrect: true },
      { text: "UMN: wasting and fasciculation; LMN: spasticity", isCorrect: false },
      { text: "Both produce identical findings", isCorrect: false },
      { text: "UMN lesions abolish all reflexes permanently", isCorrect: false },
    ],
  },
  {
    stem: "Which spinal levels contribute to the brachial plexus?",
    topic: "Peripheral Nervous System",
    explanation:
      "C5 to T1. Upper trunk (C5–C6) injury produces Erb's palsy with the arm adducted and internally rotated — the 'waiter's tip' posture. Lower trunk (C8–T1) injury produces Klumpke's palsy affecting the intrinsic hand muscles.",
    choices: [
      { text: "C5–T1", isCorrect: true },
      { text: "C1–C4", isCorrect: false },
      { text: "T1–T6", isCorrect: false },
      { text: "L1–L5", isCorrect: false },
    ],
  },
  {
    stem: "A patient has saddle anaesthesia, urinary retention and bilateral leg weakness. What is the diagnosis and why does it matter?",
    topic: "Peripheral Nervous System",
    explanation:
      "Cauda equina syndrome — compression of the lumbosacral nerve roots below the conus. It is a surgical emergency: delay in decompression risks permanent incontinence and paralysis. Urinary retention with overflow and reduced anal tone are the findings that must never be dismissed.",
    choices: [
      { text: "Cauda equina syndrome — a surgical emergency requiring urgent decompression", isCorrect: true },
      { text: "Simple mechanical back pain", isCorrect: false },
      { text: "Peripheral neuropathy", isCorrect: false },
      { text: "Multiple sclerosis relapse requiring steroids only", isCorrect: false },
    ],
  },
];

/* ═══════════ EMBRYOLOGY ═══════════ */

const EMBRYO: Q[] = [
  {
    stem: "Which three germ layers arise during gastrulation, and what does ectoderm form?",
    topic: "Early Development",
    explanation:
      "Ectoderm, mesoderm and endoderm. Ectoderm forms the nervous system and epidermis — which is why neural and skin disorders often coexist in the neurocutaneous syndromes such as neurofibromatosis and tuberous sclerosis.",
    choices: [
      { text: "Ectoderm, mesoderm, endoderm — ectoderm forms nervous system and skin", isCorrect: true },
      { text: "Ectoderm forms the gut lining", isCorrect: false },
      { text: "Mesoderm forms the nervous system", isCorrect: false },
      { text: "Endoderm forms the skeleton", isCorrect: false },
    ],
  },
  {
    stem: "Failure of neural tube closure at the cranial end produces which condition?",
    topic: "Neural Development",
    explanation:
      "Anencephaly, which is incompatible with life. Failure at the caudal end produces spina bifida. Periconceptual folic acid substantially reduces both, which is why supplementation is recommended before conception rather than after a pregnancy is confirmed — closure occurs by around day 28.",
    choices: [
      { text: "Anencephaly", isCorrect: true },
      { text: "Spina bifida", isCorrect: false },
      { text: "Hydrocephalus", isCorrect: false },
      { text: "Microcephaly", isCorrect: false },
    ],
  },
  {
    stem: "Which structure allows fetal blood to bypass the lungs, and what happens to it at birth?",
    topic: "Fetal Circulation",
    explanation:
      "The ductus arteriosus, connecting pulmonary artery to aorta. At birth, rising oxygen and falling prostaglandins cause it to constrict and become the ligamentum arteriosum. Prostaglandin maintains patency in duct-dependent congenital heart disease; indomethacin closes a persistent one.",
    choices: [
      { text: "Ductus arteriosus — closes to become the ligamentum arteriosum", isCorrect: true },
      { text: "Foramen ovale — becomes the ligamentum teres", isCorrect: false },
      { text: "Ductus venosus — becomes the ligamentum arteriosum", isCorrect: false },
      { text: "Umbilical vein — remains patent", isCorrect: false },
    ],
  },
  {
    stem: "What is the function of the foramen ovale in fetal circulation?",
    topic: "Fetal Circulation",
    explanation:
      "It shunts oxygenated blood from right atrium to left atrium, bypassing the non-functioning lungs. At birth, rising left atrial pressure closes it functionally, and it later seals as the fossa ovalis. Failure to seal leaves a patent foramen ovale — usually harmless but implicated in paradoxical embolism.",
    choices: [
      { text: "It shunts blood from right atrium to left, bypassing the lungs", isCorrect: true },
      { text: "It connects the aorta to the pulmonary artery", isCorrect: false },
      { text: "It bypasses the fetal liver", isCorrect: false },
      { text: "It drains the umbilical vein", isCorrect: false },
    ],
  },
  {
    stem: "Which structure allows umbilical venous blood to bypass the fetal liver?",
    topic: "Fetal Circulation",
    explanation:
      "The ductus venosus, connecting umbilical vein to inferior vena cava. It closes after birth to become the ligamentum venosum. This shunt delivers the most oxygenated blood preferentially toward the heart and brain — the fetus prioritises the same organs an adult does in shock.",
    choices: [
      { text: "Ductus venosus", isCorrect: true },
      { text: "Ductus arteriosus", isCorrect: false },
      { text: "Foramen ovale", isCorrect: false },
      { text: "Umbilical artery", isCorrect: false },
    ],
  },
  {
    stem: "Failure of the pleuroperitoneal membrane to close produces which condition?",
    topic: "Organ Development",
    explanation:
      "Congenital diaphragmatic hernia, usually left-sided through the foramen of Bochdalek. Abdominal viscera enter the chest and compress the developing lung, so the lethal problem is pulmonary hypoplasia rather than the hernia itself — which is why repair alone does not guarantee survival.",
    choices: [
      { text: "Congenital diaphragmatic hernia with pulmonary hypoplasia", isCorrect: true },
      { text: "Tracheo-oesophageal fistula", isCorrect: false },
      { text: "Omphalocele", isCorrect: false },
      { text: "Gastroschisis", isCorrect: false },
    ],
  },
  {
    stem: "A newborn has choking and cyanosis on feeding, and a nasogastric tube will not pass. What is the likely anomaly?",
    topic: "Organ Development",
    explanation:
      "Oesophageal atresia, usually with a tracheo-oesophageal fistula, from abnormal separation of the foregut into trachea and oesophagus. Polyhydramnios is often noted antenatally because the fetus cannot swallow amniotic fluid — a clue available before delivery.",
    choices: [
      { text: "Oesophageal atresia with tracheo-oesophageal fistula", isCorrect: true },
      { text: "Pyloric stenosis", isCorrect: false },
      { text: "Duodenal atresia", isCorrect: false },
      { text: "Hirschsprung disease", isCorrect: false },
    ],
  },
  {
    stem: "A neonate has bilious vomiting and a 'double bubble' on abdominal radiograph. Which anomaly and which association?",
    topic: "Organ Development",
    explanation:
      "Duodenal atresia, from failure of recanalisation. The double bubble is gas in the stomach and proximal duodenum. It is strongly associated with Down syndrome, so the finding should prompt consideration of trisomy 21 and a search for cardiac anomalies.",
    choices: [
      { text: "Duodenal atresia — associated with Down syndrome", isCorrect: true },
      { text: "Pyloric stenosis — associated with Turner syndrome", isCorrect: false },
      { text: "Malrotation — associated with Marfan syndrome", isCorrect: false },
      { text: "Hirschsprung disease — no associations", isCorrect: false },
    ],
  },
  {
    stem: "Failure of neural crest cell migration into the distal colon causes which condition?",
    topic: "Organ Development",
    explanation:
      "Hirschsprung disease. Absent ganglion cells leave the segment permanently contracted, causing functional obstruction, delayed passage of meconium and abdominal distension. Diagnosis is by suction rectal biopsy showing aganglionosis — the affected segment is the narrow one, not the dilated one.",
    choices: [
      { text: "Hirschsprung disease", isCorrect: true },
      { text: "Meconium ileus", isCorrect: false },
      { text: "Necrotising enterocolitis", isCorrect: false },
      { text: "Intussusception", isCorrect: false },
    ],
  },
  {
    stem: "Persistence of the vitelline duct remnant causes which anomaly?",
    topic: "Organ Development",
    explanation:
      "Meckel's diverticulum — the rule of 2s: 2% of people, 2 feet from the ileocaecal valve, 2 inches long, often presenting before age 2. Ectopic gastric mucosa can ulcerate and bleed, making it a cause of painless rectal bleeding in children.",
    choices: [
      { text: "Meckel's diverticulum", isCorrect: true },
      { text: "Omphalocele", isCorrect: false },
      { text: "Urachal cyst", isCorrect: false },
      { text: "Gastroschisis", isCorrect: false },
    ],
  },
  {
    stem: "What distinguishes gastroschisis from omphalocele?",
    topic: "Abdominal Wall Defects",
    explanation:
      "Gastroschisis is a defect lateral to the umbilicus with NO covering membrane and few associated anomalies. Omphalocele is a midline defect where herniated bowel IS covered by peritoneum, and is strongly associated with chromosomal and cardiac abnormalities — so it warrants a much broader workup.",
    choices: [
      { text: "Gastroschisis has no covering membrane; omphalocele is covered and has associated anomalies", isCorrect: true },
      { text: "Omphalocele has no covering membrane", isCorrect: false },
      { text: "Both are always midline and identical", isCorrect: false },
      { text: "Gastroschisis is strongly linked to trisomies", isCorrect: false },
    ],
  },
  {
    stem: "Which pharyngeal pouch gives rise to the inferior parathyroid glands and thymus?",
    topic: "Pharyngeal Development",
    explanation:
      "The third pouch. The fourth gives the superior parathyroids. Failure of third and fourth pouch development causes DiGeorge syndrome — thymic aplasia with T cell deficiency, hypoparathyroidism with hypocalcaemia, and conotruncal cardiac defects.",
    choices: [
      { text: "The third pharyngeal pouch", isCorrect: true },
      { text: "The first pharyngeal pouch", isCorrect: false },
      { text: "The fourth pharyngeal pouch", isCorrect: false },
      { text: "The sixth pharyngeal arch", isCorrect: false },
    ],
  },
  {
    stem: "A thyroglossal cyst moves upward on tongue protrusion. What explains this?",
    topic: "Pharyngeal Development",
    explanation:
      "The thyroid descends from the foramen caecum at the tongue base, and the thyroglossal duct remnant remains attached to the hyoid and tongue base. So the cyst is dragged upward when the tongue protrudes — a physical sign that follows directly from the embryology.",
    choices: [
      { text: "The duct remnant remains attached to the hyoid and tongue base", isCorrect: true },
      { text: "The cyst is attached to the strap muscles", isCorrect: false },
      { text: "It is fixed to the trachea", isCorrect: false },
      { text: "Movement is coincidental and not diagnostic", isCorrect: false },
    ],
  },
  {
    stem: "Failure of the urogenital sinus and paramesonephric ducts to develop normally in a female can produce which condition?",
    topic: "Urogenital Development",
    explanation:
      "Müllerian agenesis, with an absent or rudimentary uterus and upper vagina — a cause of primary amenorrhoea with normal secondary sexual characteristics, since the ovaries develop separately and function normally. Renal anomalies frequently coexist because of the shared developmental origin.",
    choices: [
      { text: "Müllerian agenesis, causing primary amenorrhoea with normal ovarian function", isCorrect: true },
      { text: "Polycystic ovary syndrome", isCorrect: false },
      { text: "Turner syndrome", isCorrect: false },
      { text: "Congenital adrenal hyperplasia", isCorrect: false },
    ],
  },
  {
    stem: "Why does an undescended testis carry an increased risk of malignancy even after surgical correction?",
    topic: "Urogenital Development",
    explanation:
      "The intrinsic abnormality of the gonad, and exposure to higher intra-abdominal temperature during development, cause changes that orchidopexy does not reverse. Surgery improves fertility and makes examination possible — so a tumour can be detected — but does not return the risk to baseline.",
    choices: [
      { text: "The gonad is intrinsically abnormal; surgery aids detection but doesn't remove the risk", isCorrect: true },
      { text: "Surgery itself causes the malignancy", isCorrect: false },
      { text: "The risk is entirely eliminated by early surgery", isCorrect: false },
      { text: "There is no increased malignancy risk", isCorrect: false },
    ],
  },
];

/* ═══════════ SEED ═══════════ */

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
  const category = await prisma.quizCategory.findUnique({ where: { slug: o.categorySlug } });
  if (!category) {
    console.log(`  ✗ Category "${o.categorySlug}" not found — run seed-medical-taxonomy.ts first.`);
    return;
  }

  const quiz = await prisma.quiz.upsert({
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
  });

  await prisma.question.deleteMany({ where: { quizId: quiz.id } });

  let order = 0;
  for (const q of o.questions) {
    await prisma.question.create({
      data: {
        quizId: quiz.id,
        type: "SINGLE",
        stem: q.stem,
        topic: q.topic,
        explanation: q.explanation,
        points: 1,
        order: order++,
        choices: { create: q.choices.map((c, i) => ({ text: c.text, isCorrect: c.isCorrect, order: i })) },
      },
    });
  }

  console.log(`  ✓ ${o.title} — ${o.questions.length} questions`);
}

async function main() {
  console.log("Seeding Anatomy…\n");

  await seedSet({
    categorySlug: "fs-gross-anatomy",
    slug: "gross-anatomy-set-1",
    title: "Gross Anatomy — Practice Set 1",
    description:
      "Upper and lower limb nerve injuries, the back and spine, and thoracic anatomy — anchored to the fractures, blocks and procedures that make them matter. Fifteen questions.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Foundational",
    questions: GROSS1,
  });

  await seedSet({
    categorySlug: "fs-gross-anatomy",
    slug: "gross-anatomy-set-2",
    title: "Gross Anatomy — Practice Set 2",
    description:
      "Abdomen, hernias, pelvis and perineum, head and neck. Fifteen fresh questions — no overlap with Set 1.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Intermediate",
    questions: GROSS2,
  });

  await seedSet({
    categorySlug: "fs-neuroanatomy",
    slug: "neuroanatomy-set-1",
    title: "Neuroanatomy — Practice Set 1",
    description:
      "Cerebral circulation and stroke territories, cranial nerves, the visual pathway, spinal tracts and intracranial haemorrhage. Fifteen questions.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Foundational",
    questions: NEURO1,
  });

  await seedSet({
    categorySlug: "fs-neuroanatomy",
    slug: "neuroanatomy-set-2",
    title: "Neuroanatomy — Practice Set 2",
    description:
      "Cerebral structure and localisation, language, deep structures, cerebellum, brainstem, motor pathways and the peripheral nervous system. Fifteen fresh questions.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Intermediate",
    questions: NEURO2,
  });

  await seedSet({
    categorySlug: "fs-embryology",
    slug: "embryology-set-1",
    title: "Embryology — Practice Set 1",
    description:
      "Germ layers, neural tube defects, fetal circulation and its shunts, congenital gut and diaphragm anomalies, pharyngeal pouches and urogenital development. Fifteen questions.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Foundational",
    questions: EMBRYO,
  });

  await seedSet({
    categorySlug: "fs-gross-anatomy",
    slug: "gross-anatomy-exam-1",
    title: "Gross Anatomy — Timed Exam",
    description: "Both gross anatomy sets combined: thirty questions in 35 minutes, feedback withheld until you submit.",
    kind: "EXAM",
    timeLimitSeconds: 35 * 60,
    difficulty: "Intermediate",
    questions: [...GROSS1, ...GROSS2],
  });

  await seedSet({
    categorySlug: "fs-neuroanatomy",
    slug: "neuroanatomy-exam-1",
    title: "Neuroanatomy — Timed Exam",
    description: "Both neuroanatomy sets combined: thirty questions in 35 minutes, feedback withheld until you submit.",
    kind: "EXAM",
    timeLimitSeconds: 35 * 60,
    difficulty: "Intermediate",
    questions: [...NEURO1, ...NEURO2],
  });

  await seedSet({
    categorySlug: "fs-anatomy",
    slug: "anatomy-comprehensive-exam-1",
    title: "Anatomy — Comprehensive Timed Exam",
    description:
      "All seventy-five items across gross anatomy, neuroanatomy and embryology: 90 minutes. Sit this once the five practice sets feel comfortable.",
    kind: "EXAM",
    timeLimitSeconds: 90 * 60,
    difficulty: "Advanced",
    questions: [...GROSS1, ...GROSS2, ...NEURO1, ...NEURO2, ...EMBRYO],
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
