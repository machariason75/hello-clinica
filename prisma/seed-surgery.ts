/**
 * CONTENT WAVE 12 — Surgery & Orthopaedics
 *
 * 75 original questions in the current structure:
 *
 *   PRACTICE  Set 1 (25) general surgery · Set 2 (25) orthopaedics & trauma
 *             Set 3 (25) perioperative care & neurosurgery
 *   EXAMS     Exam 1 (50, Sets 1+2, 60 min) · Exam 2 (75, everything, 90 min)
 *
 * Surgery is taught here as decision-making rather than operative technique:
 * which presentations are time-critical, what must be excluded before acting,
 * and why the sequence of steps matters. That is what is actually examined and
 * what actually protects patients.
 *
 * Run:  npx tsx prisma/seed-surgery.ts
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Q = {
  stem: string;
  topic: string;
  explanation: string;
  choices: { text: string; isCorrect: boolean }[];
};

/* ═══════════ SET 1 — General Surgery ═══════════ */

const SET1: Q[] = [
  {
    stem: "A patient has central abdominal pain migrating to the right iliac fossa with anorexia and low-grade fever. What is the most likely diagnosis?",
    topic: "Acute Abdomen",
    explanation:
      "Acute appendicitis. The migration is diagnostic: early visceral midgut pain refers to T10 periumbilically, then localises once inflammation reaches the parietal peritoneum. Anorexia is so consistent that a genuinely hungry patient makes the diagnosis less likely.",
    choices: [
      { text: "Acute appendicitis", isCorrect: true },
      { text: "Acute cholecystitis", isCorrect: false },
      { text: "Perforated duodenal ulcer", isCorrect: false },
      { text: "Renal colic", isCorrect: false },
    ],
  },
  {
    stem: "A patient has sudden severe epigastric pain with a rigid, board-like abdomen and free air under the diaphragm. What has happened?",
    topic: "Acute Abdomen",
    explanation:
      "A perforated viscus, most often a peptic ulcer. Gastric contents cause chemical peritonitis, hence the rigidity. Free air on an erect chest film confirms it. This needs resuscitation, antibiotics and urgent surgery — it is not a diagnosis to observe.",
    choices: [
      { text: "Perforated viscus with peritonitis", isCorrect: true },
      { text: "Acute pancreatitis", isCorrect: false },
      { text: "Small bowel obstruction", isCorrect: false },
      { text: "Biliary colic", isCorrect: false },
    ],
  },
  {
    stem: "Which features distinguish small bowel from large bowel obstruction?",
    topic: "Bowel Obstruction",
    explanation:
      "Small bowel obstruction causes early vomiting with less distension; large bowel obstruction causes marked distension with late vomiting and absolute constipation. Radiographs differ too — valvulae conniventes cross the full bowel width in small bowel, haustra do not in large.",
    choices: [
      { text: "Small bowel: early vomiting, less distension. Large bowel: marked distension, late vomiting", isCorrect: true },
      { text: "Small bowel: late vomiting with gross distension", isCorrect: false },
      { text: "Both present identically", isCorrect: false },
      { text: "Large bowel obstruction never causes distension", isCorrect: false },
    ],
  },
  {
    stem: "What is the commonest cause of small bowel obstruction in a patient with previous abdominal surgery?",
    topic: "Bowel Obstruction",
    explanation:
      "Adhesions. Many settle with conservative management — nil by mouth, nasogastric decompression and fluids, the 'drip and suck' approach. Surgery is needed for strangulation, perforation or failure to resolve, and the difficulty is recognising strangulation before it declares itself.",
    choices: [
      { text: "Adhesions from previous surgery", isCorrect: true },
      { text: "Colorectal carcinoma", isCorrect: false },
      { text: "Volvulus", isCorrect: false },
      { text: "Gallstone ileus", isCorrect: false },
    ],
  },
  {
    stem: "Which features suggest that a bowel obstruction has become STRANGULATED?",
    topic: "Bowel Obstruction",
    explanation:
      "Constant rather than colicky pain, localised tenderness with peritonism, fever, tachycardia and a rising lactate or white count. Strangulation means compromised blood supply, so the bowel will infarct — it converts a condition that could be managed conservatively into an emergency laparotomy.",
    choices: [
      { text: "Constant pain with peritonism, fever, tachycardia and rising lactate", isCorrect: true },
      { text: "Purely colicky pain with a soft abdomen", isCorrect: false },
      { text: "Vomiting alone", isCorrect: false },
      { text: "Absence of bowel sounds only", isCorrect: false },
    ],
  },
  {
    stem: "A patient has right upper quadrant pain, fever and a positive Murphy's sign. What is the diagnosis?",
    topic: "Biliary Disease",
    explanation:
      "Acute cholecystitis — inflammation of an obstructed gallbladder. Murphy's sign is arrest of inspiration on palpating the right upper quadrant. Biliary colic differs by being self-limiting and afebrile; the fever and inflammatory markers indicate that this has progressed beyond simple colic.",
    choices: [
      { text: "Acute cholecystitis", isCorrect: true },
      { text: "Uncomplicated biliary colic", isCorrect: false },
      { text: "Acute hepatitis", isCorrect: false },
      { text: "Right lower lobe pneumonia", isCorrect: false },
    ],
  },
  {
    stem: "A patient has right upper quadrant pain, jaundice and rigors. What does this triad indicate?",
    topic: "Biliary Disease",
    explanation:
      "Ascending cholangitis — Charcot's triad. Infection in an obstructed biliary tree can progress rapidly to septic shock, so it requires urgent antibiotics and biliary DECOMPRESSION, usually by ERCP. Adding hypotension and confusion gives Reynolds' pentad and a much worse outlook.",
    choices: [
      { text: "Ascending cholangitis — needs urgent antibiotics and biliary decompression", isCorrect: true },
      { text: "Acute cholecystitis — antibiotics alone", isCorrect: false },
      { text: "Viral hepatitis — supportive care", isCorrect: false },
      { text: "Pancreatic carcinoma — elective referral", isCorrect: false },
    ],
  },
  {
    stem: "Which two causes account for most acute pancreatitis?",
    topic: "Pancreatitis",
    explanation:
      "Gallstones and alcohol. Identifying which matters because gallstone pancreatitis needs the gallbladder removed to prevent recurrence, ideally during the same admission. Other causes include hypertriglyceridaemia, hypercalcaemia, ERCP and drugs.",
    choices: [
      { text: "Gallstones and alcohol", isCorrect: true },
      { text: "Trauma and infection", isCorrect: false },
      { text: "Autoimmune disease and malignancy", isCorrect: false },
      { text: "Diet and smoking", isCorrect: false },
    ],
  },
  {
    stem: "Why does severe acute pancreatitis cause hypocalcaemia?",
    topic: "Pancreatitis",
    explanation:
      "Released lipases digest peripancreatic fat, and the liberated fatty acids bind calcium as insoluble soaps — saponification consumes it. Hypocalcaemia is one of the severity markers, which is why calcium is measured as part of scoring rather than as an incidental test.",
    choices: [
      { text: "Calcium is consumed saponifying fat digested by released lipases", isCorrect: true },
      { text: "The pancreas normally secretes calcium", isCorrect: false },
      { text: "Vitamin D is destroyed by pancreatic enzymes", isCorrect: false },
      { text: "It is caused by the intravenous fluids given", isCorrect: false },
    ],
  },
  {
    stem: "Which hernia has the highest risk of strangulation and should generally be repaired promptly?",
    topic: "Hernias",
    explanation:
      "A femoral hernia. The femoral canal is narrow and bounded by rigid structures, so a hernia entering it is easily compressed. It is commoner in women and lies BELOW and lateral to the pubic tubercle — an inguinal hernia lies above and medial.",
    choices: [
      { text: "Femoral hernia — the narrow rigid canal readily strangulates", isCorrect: true },
      { text: "Direct inguinal hernia", isCorrect: false },
      { text: "Umbilical hernia in an adult", isCorrect: false },
      { text: "Incisional hernia", isCorrect: false },
    ],
  },
  {
    stem: "What distinguishes an incarcerated from a strangulated hernia?",
    topic: "Hernias",
    explanation:
      "Incarcerated means irreducible but with intact blood supply; strangulated means the blood supply is compromised, so the contents will necrose. Strangulation is signalled by severe pain, tenderness, overlying erythema and systemic upset — and requires immediate surgery.",
    choices: [
      { text: "Incarcerated is irreducible with intact blood supply; strangulated has compromised supply", isCorrect: true },
      { text: "Strangulated simply means larger", isCorrect: false },
      { text: "They are interchangeable terms", isCorrect: false },
      { text: "Incarcerated hernias are always painless", isCorrect: false },
    ],
  },
  {
    stem: "A patient over 50 has iron deficiency anaemia and a change in bowel habit. What must be excluded?",
    topic: "Colorectal",
    explanation:
      "Colorectal carcinoma. Right-sided tumours typically present with occult blood loss and anaemia because the caecum is capacious and stool is liquid; left-sided tumours obstruct earlier and cause visible bleeding and altered habit. Unexplained iron deficiency in this age group warrants investigation of both upper and lower tracts.",
    choices: [
      { text: "Colorectal carcinoma", isCorrect: true },
      { text: "Irritable bowel syndrome", isCorrect: false },
      { text: "Haemorrhoids alone", isCorrect: false },
      { text: "Dietary iron deficiency", isCorrect: false },
    ],
  },
  {
    stem: "A patient has left iliac fossa pain, fever and altered bowel habit. What is the likely diagnosis?",
    topic: "Colorectal",
    explanation:
      "Acute diverticulitis. Diverticula are commonest in the sigmoid colon, hence the left-sided pain — sometimes called 'left-sided appendicitis'. CT confirms and grades it, and complications include abscess, perforation, fistula and stricture.",
    choices: [
      { text: "Acute diverticulitis", isCorrect: true },
      { text: "Acute appendicitis", isCorrect: false },
      { text: "Ulcerative colitis", isCorrect: false },
      { text: "Renal colic", isCorrect: false },
    ],
  },
  {
    stem: "Which anorectal condition causes severe pain on defaecation with bright red bleeding and is often diagnosed on history alone?",
    topic: "Anorectal",
    explanation:
      "An anal fissure. Pain is characteristically severe and lasts long after defaecation, causing fear of opening the bowels and worsening constipation — a self-perpetuating cycle. Examination is often too painful; treatment addresses the constipation and sphincter spasm.",
    choices: [
      { text: "Anal fissure", isCorrect: true },
      { text: "Internal haemorrhoids", isCorrect: false },
      { text: "Rectal carcinoma", isCorrect: false },
      { text: "Perianal abscess", isCorrect: false },
    ],
  },
  {
    stem: "A patient has a tender, fluctuant perianal swelling with fever. What is the treatment?",
    topic: "Anorectal",
    explanation:
      "Surgical incision and drainage. Antibiotics alone will not resolve a collection — pus needs a route out. This is a general surgical principle worth internalising: antibiotics treat cellulitis, drainage treats abscess. Recurrence suggests an underlying fistula.",
    choices: [
      { text: "Incision and drainage — antibiotics alone will not resolve an abscess", isCorrect: true },
      { text: "Oral antibiotics and review in a week", isCorrect: false },
      { text: "Topical steroid cream", isCorrect: false },
      { text: "Stool softeners alone", isCorrect: false },
    ],
  },
  {
    stem: "Which investigation is contraindicated in a patient with suspected perforation and free intraperitoneal air?",
    topic: "Surgical Investigation",
    explanation:
      "Barium studies, because barium leaking into the peritoneum causes severe chemical peritonitis and is very difficult to remove. Water-soluble contrast is used instead when contrast studies are needed. CT is generally the investigation of choice.",
    choices: [
      { text: "Barium contrast studies — use water-soluble contrast instead", isCorrect: true },
      { text: "CT of the abdomen", isCorrect: false },
      { text: "Erect chest radiograph", isCorrect: false },
      { text: "Abdominal ultrasound", isCorrect: false },
    ],
  },
  {
    stem: "Why is a raised serum lactate significant in the acute abdomen?",
    topic: "Surgical Investigation",
    explanation:
      "It suggests tissue hypoperfusion — potentially bowel ischaemia or infarction — and correlates with severity. In mesenteric ischaemia the classic picture is pain out of proportion to examination findings with a raised lactate, and delay in that diagnosis is a major cause of mortality.",
    choices: [
      { text: "It suggests tissue hypoperfusion, potentially bowel ischaemia", isCorrect: true },
      { text: "It confirms infection specifically", isCorrect: false },
      { text: "It indicates dehydration only", isCorrect: false },
      { text: "It has no surgical relevance", isCorrect: false },
    ],
  },
  {
    stem: "An elderly patient with atrial fibrillation has severe abdominal pain out of proportion to a soft abdomen. What must be considered?",
    topic: "Vascular Surgery",
    explanation:
      "Acute mesenteric ischaemia, often embolic from atrial fibrillation. Pain markedly out of proportion to examination findings is the hallmark, and by the time peritonism appears the bowel has infarcted. Early CT angiography is what changes the outcome.",
    choices: [
      { text: "Acute mesenteric ischaemia", isCorrect: true },
      { text: "Gastroenteritis", isCorrect: false },
      { text: "Constipation", isCorrect: false },
      { text: "Musculoskeletal pain", isCorrect: false },
    ],
  },
  {
    stem: "A patient over 60 has sudden back and abdominal pain with hypotension and a pulsatile mass. What is the diagnosis?",
    topic: "Vascular Surgery",
    explanation:
      "Ruptured abdominal aortic aneurysm. This is an immediate surgical emergency — imaging must not delay transfer in an unstable patient. It is frequently misdiagnosed as renal colic, so any first presentation of 'renal colic' in an older patient deserves scepticism.",
    choices: [
      { text: "Ruptured abdominal aortic aneurysm", isCorrect: true },
      { text: "Renal colic", isCorrect: false },
      { text: "Perforated ulcer", isCorrect: false },
      { text: "Pancreatitis", isCorrect: false },
    ],
  },
  {
    stem: "Which feature distinguishes critical limb ischaemia from intermittent claudication?",
    topic: "Vascular Surgery",
    explanation:
      "Rest pain — typically in the forefoot at night, relieved by hanging the leg down — with or without tissue loss or ulceration. Claudication occurs only on exertion and resolves with rest. Critical ischaemia threatens the limb and requires urgent vascular assessment.",
    choices: [
      { text: "Rest pain, often nocturnal, with or without tissue loss", isCorrect: true },
      { text: "Pain only on walking a fixed distance", isCorrect: false },
      { text: "Absent pulses alone", isCorrect: false },
      { text: "Cold feet in winter", isCorrect: false },
    ],
  },
  {
    stem: "What are the six features of acute limb ischaemia?",
    topic: "Vascular Surgery",
    explanation:
      "Pain, pallor, pulselessness, perishing cold, paraesthesia and paralysis. The last two are the critical ones — sensory and motor loss indicate that nerve and muscle are dying, so the limb is threatened and revascularisation becomes urgent within hours.",
    choices: [
      { text: "Pain, pallor, pulselessness, perishing cold, paraesthesia, paralysis", isCorrect: true },
      { text: "Pain, swelling, redness, warmth, fever, malaise", isCorrect: false },
      { text: "Pallor, pruritus, pigmentation, pain, pulses, pyrexia", isCorrect: false },
      { text: "Only pain and pulselessness matter", isCorrect: false },
    ],
  },
  {
    stem: "A patient develops a swollen, tense, painful limb after a fracture, with pain on passive stretch. What must be excluded?",
    topic: "Surgical Emergencies",
    explanation:
      "Compartment syndrome. Pain out of proportion and pain on passive stretch of the compartment are the earliest signs — pulselessness is a very LATE finding and its presence means the limb is probably already lost. Treatment is urgent fasciotomy; removing the cast is not enough.",
    choices: [
      { text: "Compartment syndrome — pulses are present until very late", isCorrect: true },
      { text: "Deep vein thrombosis", isCorrect: false },
      { text: "Simple post-injury swelling", isCorrect: false },
      { text: "Cellulitis", isCorrect: false },
    ],
  },
  {
    stem: "A patient has rapidly spreading skin necrosis, severe pain, crepitus and systemic toxicity. What is the diagnosis?",
    topic: "Surgical Emergencies",
    explanation:
      "Necrotising fasciitis. Pain disproportionate to visible signs is the early clue, before skin changes develop. It requires immediate surgical debridement alongside broad-spectrum antibiotics — antibiotics alone do not penetrate necrotic tissue and the patient will die without surgery.",
    choices: [
      { text: "Necrotising fasciitis — needs immediate surgical debridement", isCorrect: true },
      { text: "Simple cellulitis — oral antibiotics", isCorrect: false },
      { text: "Contact dermatitis", isCorrect: false },
      { text: "Deep vein thrombosis", isCorrect: false },
    ],
  },
  {
    stem: "Which finding in a patient with a breast lump is most concerning for malignancy?",
    topic: "Breast Surgery",
    explanation:
      "A hard, irregular, fixed lump with skin tethering or nipple retraction. Triple assessment — clinical examination, imaging and biopsy — is the standard approach because no single modality is reliable alone. Age is itself a major risk factor.",
    choices: [
      { text: "A hard, irregular, fixed lump with skin tethering", isCorrect: true },
      { text: "A smooth, mobile, rubbery lump in a young woman", isCorrect: false },
      { text: "Bilateral tenderness before menstruation", isCorrect: false },
      { text: "A lump that fluctuates with the cycle", isCorrect: false },
    ],
  },
  {
    stem: "What does 'triple assessment' of a breast lump involve?",
    topic: "Breast Surgery",
    explanation:
      "Clinical examination, imaging (mammography and/or ultrasound depending on age) and needle biopsy. All three are combined because each alone has a false negative rate — a normal mammogram does not exclude cancer in the presence of a suspicious lump.",
    choices: [
      { text: "Clinical examination, imaging and needle biopsy", isCorrect: true },
      { text: "Three separate clinical examinations", isCorrect: false },
      { text: "Mammography, CT and MRI", isCorrect: false },
      { text: "Examination and blood tumour markers", isCorrect: false },
    ],
  },
];

/* ═══════════ SET 2 — Orthopaedics & Trauma ═══════════ */

const SET2: Q[] = [
  {
    stem: "An elderly patient falls and has a shortened, externally rotated leg. What is the diagnosis?",
    topic: "Hip Fractures",
    explanation:
      "A fractured neck of femur. Muscle pull produces the classic shortening and external rotation. It matters far beyond the bone — one-year mortality is substantial, so early surgery, analgesia, and treating the reason they fell are all part of management.",
    choices: [
      { text: "Fractured neck of femur", isCorrect: true },
      { text: "Posterior hip dislocation", isCorrect: false },
      { text: "Fractured pubic ramus", isCorrect: false },
      { text: "Lumbar radiculopathy", isCorrect: false },
    ],
  },
  {
    stem: "Why does the treatment of a femoral neck fracture depend on whether it is intracapsular or extracapsular?",
    topic: "Hip Fractures",
    explanation:
      "The blood supply to the femoral head runs proximally along the neck, so a displaced INTRAcapsular fracture disrupts it and risks avascular necrosis — favouring replacement. Extracapsular fractures leave the supply intact and are fixed. Anatomy dictates the operation.",
    choices: [
      { text: "Intracapsular fractures disrupt the femoral head blood supply, risking avascular necrosis", isCorrect: true },
      { text: "Extracapsular fractures never heal", isCorrect: false },
      { text: "The distinction is purely radiological with no bearing on treatment", isCorrect: false },
      { text: "Intracapsular fractures are always managed conservatively", isCorrect: false },
    ],
  },
  {
    stem: "A patient falls on an outstretched hand and has a 'dinner fork' wrist deformity. Which fracture is this?",
    topic: "Upper Limb Fractures",
    explanation:
      "A Colles fracture — distal radius with dorsal displacement. A Smith fracture is the reverse, with volar displacement, usually from a fall onto a flexed wrist. Median nerve function must be assessed, since carpal tunnel compression is a recognised complication.",
    choices: [
      { text: "Colles fracture — distal radius with dorsal displacement", isCorrect: true },
      { text: "Smith fracture — volar displacement", isCorrect: false },
      { text: "Scaphoid fracture", isCorrect: false },
      { text: "Monteggia fracture", isCorrect: false },
    ],
  },
  {
    stem: "A patient has anatomical snuffbox tenderness after a fall, with normal initial radiographs. What should be done?",
    topic: "Upper Limb Fractures",
    explanation:
      "Treat as a scaphoid fracture despite normal films — immobilise and re-image or obtain further imaging. Scaphoid fractures are frequently occult initially, and missing one risks avascular necrosis and non-union because its blood supply enters distally and runs retrograde.",
    choices: [
      { text: "Immobilise and re-image — scaphoid fractures are often radiographically occult", isCorrect: true },
      { text: "Discharge with a normal radiograph", isCorrect: false },
      { text: "Arrange routine outpatient review in six weeks", isCorrect: false },
      { text: "No imaging is needed at all", isCorrect: false },
    ],
  },
  {
    stem: "Why is the scaphoid prone to avascular necrosis after fracture?",
    topic: "Upper Limb Fractures",
    explanation:
      "Its blood supply enters distally and runs retrograde, so a fracture across the waist cuts off the proximal pole. The same retrograde-supply principle explains avascular necrosis in the femoral head and the talus — one concept explaining three classic sites.",
    choices: [
      { text: "Its blood supply enters distally and runs retrograde, isolating the proximal pole", isCorrect: true },
      { text: "It has no blood supply at all", isCorrect: false },
      { text: "It is surrounded by synovial fluid which prevents healing", isCorrect: false },
      { text: "It is a purely cartilaginous structure", isCorrect: false },
    ],
  },
  {
    stem: "Which nerve is most at risk in a mid-shaft humeral fracture, and what deficit results?",
    topic: "Nerve Injuries",
    explanation:
      "The radial nerve, which runs in the spiral groove against the bone. Injury causes wrist drop with loss of finger and thumb extension, plus sensory loss over the dorsal first web space. Most are neurapraxias that recover, so observation is usually appropriate initially.",
    choices: [
      { text: "Radial nerve — wrist drop", isCorrect: true },
      { text: "Ulnar nerve — clawing", isCorrect: false },
      { text: "Median nerve — thenar wasting", isCorrect: false },
      { text: "Axillary nerve — loss of abduction", isCorrect: false },
    ],
  },
  {
    stem: "A child has a supracondylar humeral fracture. Which structures must be assessed urgently?",
    topic: "Paediatric Trauma",
    explanation:
      "The brachial artery and the median nerve — particularly its anterior interosseous branch. Vascular compromise threatens the limb and can lead to Volkmann's ischaemic contracture. Pulses and neurology must be documented before AND after any manipulation.",
    choices: [
      { text: "Brachial artery and median nerve, documented before and after manipulation", isCorrect: true },
      { text: "The axillary nerve only", isCorrect: false },
      { text: "No neurovascular assessment is needed in children", isCorrect: false },
      { text: "The ulnar artery alone", isCorrect: false },
    ],
  },
  {
    stem: "Why do children's fractures differ from adults', and what is a greenstick fracture?",
    topic: "Paediatric Trauma",
    explanation:
      "Children's bones are more elastic with a thick periosteum, so they bend and buckle rather than snapping — a greenstick fracture breaks one cortex only. They also remodel far better, so some angulation is acceptable. Growth plate involvement is the specific concern.",
    choices: [
      { text: "More elastic bone with thick periosteum — one cortex breaks while the other bends", isCorrect: true },
      { text: "Children's bones are more brittle than adults'", isCorrect: false },
      { text: "Children's fractures never remodel", isCorrect: false },
      { text: "Growth plates are irrelevant to management", isCorrect: false },
    ],
  },
  {
    stem: "Why does a fracture involving the growth plate need particular care?",
    topic: "Paediatric Trauma",
    explanation:
      "Damage to the physis can cause growth arrest or angular deformity as the child grows. The Salter-Harris classification grades this risk, with higher grades more likely to affect growth. Follow-up must extend long enough to detect deformity developing later.",
    choices: [
      { text: "It risks growth arrest or progressive angular deformity", isCorrect: true },
      { text: "It heals more slowly but has no long-term effect", isCorrect: false },
      { text: "Growth plate fractures never occur before puberty", isCorrect: false },
      { text: "They always require internal fixation", isCorrect: false },
    ],
  },
  {
    stem: "A patient with a shoulder dislocation cannot feel the skin over the lateral deltoid. Which nerve is affected?",
    topic: "Nerve Injuries",
    explanation:
      "The axillary nerve, which winds around the surgical neck of the humerus. The 'regimental badge' area of sensory loss should be tested and documented BEFORE reduction, otherwise any deficit found afterwards will be attributed to the reduction itself.",
    choices: [
      { text: "Axillary nerve — test and document before reduction", isCorrect: true },
      { text: "Radial nerve", isCorrect: false },
      { text: "Musculocutaneous nerve", isCorrect: false },
      { text: "Suprascapular nerve", isCorrect: false },
    ],
  },
  {
    stem: "In which direction do most shoulder dislocations occur, and what is the mechanism?",
    topic: "Dislocations",
    explanation:
      "Anterior, typically from abduction with external rotation and extension. Posterior dislocations are rare but classically follow seizures or electric shock, and are frequently missed on a single anteroposterior film — which is why seizure plus shoulder pain warrants careful imaging.",
    choices: [
      { text: "Anterior — from abduction, external rotation and extension", isCorrect: true },
      { text: "Posterior — the commonest by far", isCorrect: false },
      { text: "Inferior in most cases", isCorrect: false },
      { text: "Direction cannot be determined clinically", isCorrect: false },
    ],
  },
  {
    stem: "A patient with a posterior hip dislocation has a shortened, adducted and internally rotated leg. Which nerve must be assessed?",
    topic: "Dislocations",
    explanation:
      "The sciatic nerve, which lies immediately posterior to the hip joint. Posterior dislocation also risks avascular necrosis of the femoral head, so it is reduced urgently — the longer the head is out, the higher the risk.",
    choices: [
      { text: "Sciatic nerve — and reduce urgently to limit avascular necrosis risk", isCorrect: true },
      { text: "Femoral nerve", isCorrect: false },
      { text: "Obturator nerve", isCorrect: false },
      { text: "No nerve is at risk", isCorrect: false },
    ],
  },
  {
    stem: "Which criteria help decide whether an ankle injury needs radiography?",
    topic: "Trauma Assessment",
    explanation:
      "The Ottawa ankle rules — bony tenderness at the posterior edge or tip of either malleolus, or inability to weight-bear for four steps both immediately and at assessment. They are highly sensitive, so they safely reduce unnecessary imaging without missing significant fractures.",
    choices: [
      { text: "The Ottawa ankle rules — malleolar tenderness or inability to weight-bear four steps", isCorrect: true },
      { text: "Any ankle swelling requires imaging", isCorrect: false },
      { text: "Radiography is never needed for ankle injuries", isCorrect: false },
      { text: "Only if the patient is over 65", isCorrect: false },
    ],
  },
  {
    stem: "What does the ABCDE approach in trauma prioritise, and why that order?",
    topic: "Trauma Assessment",
    explanation:
      "Airway with cervical spine control, breathing, circulation, disability, exposure — in that order because it treats what kills soonest first. An obstructed airway kills in minutes; a missed fracture does not. Reassessment after each intervention is as important as the sequence itself.",
    choices: [
      { text: "It addresses problems in the order in which they kill", isCorrect: true },
      { text: "It is alphabetical for convenience only", isCorrect: false },
      { text: "It prioritises the most obvious injury first", isCorrect: false },
      { text: "The order is not important", isCorrect: false },
    ],
  },
  {
    stem: "A trauma patient is hypotensive with distended neck veins and a hyper-resonant chest on one side. What is the immediate action?",
    topic: "Trauma Assessment",
    explanation:
      "Immediate chest decompression for tension pneumothorax. It obstructs venous return, so it is a form of obstructive shock. This is a CLINICAL diagnosis — waiting for a chest radiograph to confirm it can be fatal.",
    choices: [
      { text: "Immediate needle or finger decompression, without waiting for imaging", isCorrect: true },
      { text: "Urgent chest radiograph first", isCorrect: false },
      { text: "Fluid resuscitation alone", isCorrect: false },
      { text: "CT of the chest", isCorrect: false },
    ],
  },
  {
    stem: "Why is a pelvic binder applied in a haemodynamically unstable patient with suspected pelvic fracture?",
    topic: "Trauma Assessment",
    explanation:
      "It reduces pelvic volume and tamponades venous bleeding, which is the major source of haemorrhage. It is applied at the level of the GREATER TROCHANTERS, not the iliac crests — a common error that renders it ineffective. Repeated 'springing' of the pelvis should be avoided as it disrupts early clot.",
    choices: [
      { text: "It reduces pelvic volume to tamponade bleeding — applied at the greater trochanters", isCorrect: true },
      { text: "It immobilises the spine", isCorrect: false },
      { text: "It should be applied at the iliac crests", isCorrect: false },
      { text: "It is purely for pain relief", isCorrect: false },
    ],
  },
  {
    stem: "What is the definition of an open fracture and the key management principles?",
    topic: "Fracture Management",
    explanation:
      "A fracture communicating with the external environment through a skin breach. Management is antibiotics early, tetanus cover, photograph and cover the wound, splint, and urgent surgical debridement. Infection risk drives everything — the wound is not repeatedly uncovered for inspection.",
    choices: [
      { text: "Bone communicating with the environment — early antibiotics, cover, splint, urgent debridement", isCorrect: true },
      { text: "Any displaced fracture regardless of skin integrity", isCorrect: false },
      { text: "A fracture requiring surgery", isCorrect: false },
      { text: "A fracture in an elderly patient", isCorrect: false },
    ],
  },
  {
    stem: "What factors impair fracture healing?",
    topic: "Fracture Management",
    explanation:
      "Smoking, poor blood supply, infection, inadequate immobilisation, gap at the fracture site, diabetes, NSAIDs and corticosteroids. Smoking is the single most modifiable — nicotine causes vasoconstriction and measurably increases non-union rates, which is worth telling patients explicitly.",
    choices: [
      { text: "Smoking, poor blood supply, infection, movement at the site and certain drugs", isCorrect: true },
      { text: "Only the patient's age matters", isCorrect: false },
      { text: "Nothing modifiable affects fracture healing", isCorrect: false },
      { text: "Weight-bearing always prevents healing", isCorrect: false },
    ],
  },
  {
    stem: "A patient has knee locking and giving way after a twisting injury with delayed swelling. What is the likely injury?",
    topic: "Soft Tissue Injury",
    explanation:
      "A meniscal tear. Locking occurs when a torn fragment obstructs movement, and swelling is delayed because the meniscus is largely avascular. An ACL rupture, by contrast, produces immediate haemarthrosis within hours because it bleeds.",
    choices: [
      { text: "Meniscal tear — delayed swelling because the meniscus is largely avascular", isCorrect: true },
      { text: "Anterior cruciate ligament rupture", isCorrect: false },
      { text: "Patellar dislocation", isCorrect: false },
      { text: "Tibial plateau fracture", isCorrect: false },
    ],
  },
  {
    stem: "A footballer feels a 'pop' in the knee with immediate swelling and instability. Which structure is likely injured?",
    topic: "Soft Tissue Injury",
    explanation:
      "The anterior cruciate ligament. Immediate haemarthrosis within hours indicates a vascular structure has torn. The Lachman test is more sensitive than the anterior drawer. Management depends on activity level — not every ACL rupture needs reconstruction.",
    choices: [
      { text: "Anterior cruciate ligament — immediate haemarthrosis", isCorrect: true },
      { text: "Medial meniscus with delayed effusion", isCorrect: false },
      { text: "Posterior cruciate ligament", isCorrect: false },
      { text: "Iliotibial band", isCorrect: false },
    ],
  },
  {
    stem: "Which features distinguish osteoarthritis from rheumatoid arthritis clinically?",
    topic: "Arthritis",
    explanation:
      "Osteoarthritis: asymmetrical, large weight-bearing joints and DIP joints, brief morning stiffness, worse with use. Rheumatoid: symmetrical small joints sparing the DIPs, prolonged morning stiffness over an hour, better with use, with systemic features.",
    choices: [
      { text: "OA is asymmetrical with brief stiffness worse on use; RA is symmetrical with prolonged morning stiffness", isCorrect: true },
      { text: "OA is symmetrical with prolonged morning stiffness", isCorrect: false },
      { text: "Both affect identical joint distributions", isCorrect: false },
      { text: "RA spares the hands entirely", isCorrect: false },
    ],
  },
  {
    stem: "A hot, swollen, exquisitely painful single joint with fever requires which investigation before anything else?",
    topic: "Joint Infection",
    explanation:
      "Joint aspiration for urgent Gram stain, culture and crystal microscopy — before antibiotics if at all possible, since antibiotics sterilise the sample. Septic arthritis destroys cartilage within days. Gout can look identical, which is exactly why aspiration rather than assumption is required.",
    choices: [
      { text: "Joint aspiration for Gram stain, culture and crystals, ideally before antibiotics", isCorrect: true },
      { text: "Start antibiotics and review in 48 hours", isCorrect: false },
      { text: "MRI before any aspiration", isCorrect: false },
      { text: "Serum urate alone", isCorrect: false },
    ],
  },
  {
    stem: "Which organism most commonly causes septic arthritis in adults?",
    topic: "Joint Infection",
    explanation:
      "Staphylococcus aureus. In sexually active young adults, Neisseria gonorrhoeae should also be considered, often with a migratory polyarthritis and skin lesions. Prosthetic joint infection more often involves coagulase-negative staphylococci forming biofilm.",
    choices: [
      { text: "Staphylococcus aureus", isCorrect: true },
      { text: "Escherichia coli", isCorrect: false },
      { text: "Streptococcus pneumoniae", isCorrect: false },
      { text: "Candida albicans", isCorrect: false },
    ],
  },
  {
    stem: "A patient has back pain with fever and focal spinal tenderness, plus new neurology. What must be excluded urgently?",
    topic: "Spinal Emergencies",
    explanation:
      "Spinal epidural abscess or discitis with cord compression. Risk factors include intravenous drug use, diabetes, immunosuppression and recent bacteraemia. Urgent MRI is required — delay costs neurological function permanently, and back pain with fever should never be treated as mechanical.",
    choices: [
      { text: "Spinal infection with cord compression — urgent MRI", isCorrect: true },
      { text: "Mechanical back pain — analgesia and mobilise", isCorrect: false },
      { text: "Lumbar spondylosis — physiotherapy", isCorrect: false },
      { text: "Muscle strain — rest", isCorrect: false },
    ],
  },
  {
    stem: "Which red flags in back pain suggest serious underlying pathology?",
    topic: "Spinal Emergencies",
    explanation:
      "Age under 20 or over 55 at onset, thoracic pain, night pain, fever, weight loss, cancer history, trauma, steroid use, and neurological features including saddle anaesthesia or bladder dysfunction. Most back pain is benign — red flags identify the minority where it is not.",
    choices: [
      { text: "Night pain, fever, weight loss, cancer history, neurology or bladder dysfunction", isCorrect: true },
      { text: "Pain worse after activity in a young adult", isCorrect: false },
      { text: "Pain relieved by rest", isCorrect: false },
      { text: "Any back pain lasting more than a day", isCorrect: false },
    ],
  },
];

/* ═══════════ SET 3 — Perioperative Care & Neurosurgery ═══════════ */

const SET3: Q[] = [
  {
    stem: "What does the ASA grade describe?",
    topic: "Preoperative Assessment",
    explanation:
      "The patient's physical status and systemic disease burden before surgery, from ASA 1 (healthy) to ASA 5 (moribund). It predicts perioperative risk and guides anaesthetic planning. It describes the PATIENT, not the complexity of the operation — a common misunderstanding.",
    choices: [
      { text: "The patient's physical status and systemic disease, predicting perioperative risk", isCorrect: true },
      { text: "The complexity of the planned operation", isCorrect: false },
      { text: "The urgency of surgery", isCorrect: false },
      { text: "The anaesthetist's experience level", isCorrect: false },
    ],
  },
  {
    stem: "Why are patients fasted before elective surgery, and what are typical intervals?",
    topic: "Preoperative Assessment",
    explanation:
      "To reduce gastric volume and the risk of aspiration on induction, when protective airway reflexes are lost. Typically six hours for solid food and two for clear fluids. Excessive fasting is harmful — it causes dehydration and discomfort without added safety.",
    choices: [
      { text: "To reduce aspiration risk — about 6 hours for food, 2 for clear fluids", isCorrect: true },
      { text: "To empty the bowel before surgery", isCorrect: false },
      { text: "To reduce anaesthetic drug requirements", isCorrect: false },
      { text: "Prolonged fasting of 24 hours is safest", isCorrect: false },
    ],
  },
  {
    stem: "Which medication should generally be CONTINUED through the perioperative period rather than stopped?",
    topic: "Perioperative Medicines",
    explanation:
      "Beta-blockers — abrupt withdrawal risks rebound tachycardia, hypertension and ischaemia. Steroids must also continue with stress dosing. By contrast, some antiplatelets, anticoagulants, ACE inhibitors on the morning of surgery, and metformin around contrast are commonly held.",
    choices: [
      { text: "Beta-blockers — abrupt withdrawal risks rebound ischaemia", isCorrect: true },
      { text: "Warfarin before major surgery", isCorrect: false },
      { text: "Metformin around contrast studies", isCorrect: false },
      { text: "All medications should be stopped", isCorrect: false },
    ],
  },
  {
    stem: "Why must long-term corticosteroids be given in higher doses around surgery?",
    topic: "Perioperative Medicines",
    explanation:
      "Chronic steroids suppress the hypothalamic-pituitary-adrenal axis, so the adrenal cannot produce the cortisol surge that surgical stress demands. Without supplementation the patient risks an adrenal crisis with unexplained hypotension unresponsive to fluids and vasopressors.",
    choices: [
      { text: "The suppressed HPA axis cannot mount a stress response — risking adrenal crisis", isCorrect: true },
      { text: "Steroids are metabolised faster during anaesthesia", isCorrect: false },
      { text: "Higher doses prevent surgical infection", isCorrect: false },
      { text: "Steroids should simply be stopped before surgery", isCorrect: false },
    ],
  },
  {
    stem: "Which patient factor most increases the risk of postoperative venous thromboembolism?",
    topic: "Perioperative Risk",
    explanation:
      "Major surgery combined with immobility, active malignancy, previous VTE or thrombophilia. Every element of Virchow's triad is present perioperatively — endothelial injury from surgery, stasis from immobility, and a hypercoagulable inflammatory state. Risk assessment on admission is standard for this reason.",
    choices: [
      { text: "Major surgery with immobility, malignancy or previous VTE", isCorrect: true },
      { text: "Being under 30 years old", isCorrect: false },
      { text: "Early mobilisation", isCorrect: false },
      { text: "Regional rather than general anaesthesia", isCorrect: false },
    ],
  },
  {
    stem: "A patient becomes hypoxic and febrile with reduced breath sounds 24 to 48 hours after abdominal surgery. What is the commonest cause?",
    topic: "Postoperative Complications",
    explanation:
      "Atelectasis, from shallow breathing due to pain, supine positioning and reduced cough. It is the commonest cause of early postoperative fever. Treatment is analgesia enabling deep breathing, chest physiotherapy and mobilisation — not antibiotics.",
    choices: [
      { text: "Atelectasis — treat with analgesia, physiotherapy and mobilisation", isCorrect: true },
      { text: "Pulmonary embolism", isCorrect: false },
      { text: "Wound infection", isCorrect: false },
      { text: "Anastomotic leak", isCorrect: false },
    ],
  },
  {
    stem: "Postoperative fever on day 5 to 7 after bowel surgery with abdominal pain and rising inflammatory markers suggests what?",
    topic: "Postoperative Complications",
    explanation:
      "An anastomotic leak. The timing is characteristic. Presentation can be subtle — tachycardia, ileus, or simply 'not doing well' — and a low threshold for CT is appropriate, because delayed diagnosis carries high mortality.",
    choices: [
      { text: "Anastomotic leak", isCorrect: true },
      { text: "Atelectasis", isCorrect: false },
      { text: "Deep vein thrombosis", isCorrect: false },
      { text: "Drug fever", isCorrect: false },
    ],
  },
  {
    stem: "A postoperative patient has not passed urine for 8 hours with a palpable bladder. What is the management?",
    topic: "Postoperative Complications",
    explanation:
      "Catheterisation for urinary retention — common after anaesthesia, opioids and pelvic surgery. Distinguish retention (palpable bladder, needing drainage) from oliguria due to hypovolaemia or acute kidney injury (empty bladder, needing fluid assessment). The examination separates them.",
    choices: [
      { text: "Catheterise — this is retention, not oliguria", isCorrect: true },
      { text: "Give a fluid bolus without examining", isCorrect: false },
      { text: "Start a diuretic", isCorrect: false },
      { text: "Observe for a further 12 hours", isCorrect: false },
    ],
  },
  {
    stem: "What is postoperative ileus and how is it managed?",
    topic: "Postoperative Complications",
    explanation:
      "Transient impairment of bowel motility after surgery, causing distension, nausea and absent bowel sounds. Management is supportive — correct electrolytes (especially potassium), minimise opioids, mobilise early. The key task is distinguishing it from mechanical obstruction or a leak.",
    choices: [
      { text: "Transient bowel dysmotility — correct electrolytes, reduce opioids, mobilise", isCorrect: true },
      { text: "Mechanical obstruction requiring immediate surgery", isCorrect: false },
      { text: "Treated with laxatives and enemas alone", isCorrect: false },
      { text: "Always indicates an anastomotic leak", isCorrect: false },
    ],
  },
  {
    stem: "Which wound classification carries the highest infection risk?",
    topic: "Surgical Site Infection",
    explanation:
      "Dirty or infected wounds — established infection or perforated viscus present before surgery. The gradient runs clean, clean-contaminated, contaminated, dirty. The classification determines antibiotic strategy: prophylaxis for clean cases, therapeutic treatment for dirty ones.",
    choices: [
      { text: "Dirty/infected — established infection or perforation already present", isCorrect: true },
      { text: "Clean wounds", isCorrect: false },
      { text: "Clean-contaminated wounds", isCorrect: false },
      { text: "Classification does not predict infection", isCorrect: false },
    ],
  },
  {
    stem: "When should prophylactic antibiotics be given relative to a surgical incision?",
    topic: "Surgical Site Infection",
    explanation:
      "Within about 60 minutes BEFORE incision, so tissue concentrations are adequate when contamination occurs. Given after incision they are far less effective, and prolonged postoperative courses add toxicity and resistance without further reducing infection.",
    choices: [
      { text: "Within about 60 minutes before incision", isCorrect: true },
      { text: "Immediately after the operation finishes", isCorrect: false },
      { text: "24 hours before surgery", isCorrect: false },
      { text: "Only if infection develops", isCorrect: false },
    ],
  },
  {
    stem: "What is the WHO surgical safety checklist designed to prevent?",
    topic: "Surgical Safety",
    explanation:
      "Never events and avoidable harm — wrong site or wrong patient surgery, retained instruments, missed allergies and unanticipated equipment problems. Its effectiveness comes from structured team communication as much as from the checks themselves, which is why it is performed aloud as a team.",
    choices: [
      { text: "Wrong-site surgery, retained items and other avoidable harm, through team communication", isCorrect: true },
      { text: "Purely administrative record-keeping", isCorrect: false },
      { text: "Anaesthetic drug shortages", isCorrect: false },
      { text: "It has no measurable effect on outcomes", isCorrect: false },
    ],
  },
  {
    stem: "A patient develops a rapidly rising temperature, muscle rigidity and rising end-tidal CO2 during general anaesthesia. What is happening?",
    topic: "Anaesthetic Emergencies",
    explanation:
      "Malignant hyperthermia — a pharmacogenetic reaction to volatile agents or suxamethonium causing uncontrolled skeletal muscle calcium release. Dantrolene is the specific treatment alongside stopping the trigger and active cooling. Rising end-tidal CO2 is often the earliest sign.",
    choices: [
      { text: "Malignant hyperthermia — stop the trigger and give dantrolene", isCorrect: true },
      { text: "Sepsis from the surgical site", isCorrect: false },
      { text: "Thyroid storm", isCorrect: false },
      { text: "Simple postoperative shivering", isCorrect: false },
    ],
  },
  {
    stem: "Which local anaesthetic complication presents with perioral tingling, tinnitus and then seizures or cardiac arrest?",
    topic: "Anaesthetic Emergencies",
    explanation:
      "Local anaesthetic systemic toxicity, from inadvertent intravascular injection or exceeding the maximum dose. Treatment is stopping injection, supportive care and intravenous lipid emulsion. Bupivacaine is particularly cardiotoxic, which is why maximum doses are strictly observed.",
    choices: [
      { text: "Local anaesthetic systemic toxicity — treat with lipid emulsion", isCorrect: true },
      { text: "Anaphylaxis to the anaesthetic", isCorrect: false },
      { text: "Vasovagal syncope", isCorrect: false },
      { text: "Malignant hyperthermia", isCorrect: false },
    ],
  },
  {
    stem: "Which analgesic approach is described by the WHO analgesic ladder?",
    topic: "Perioperative Analgesia",
    explanation:
      "Stepwise escalation from non-opioid, to weak opioid, to strong opioid, with adjuvants at every step. Modern practice adds multimodal analgesia — combining paracetamol, NSAIDs where safe, regional techniques and opioids — which improves pain control while reducing opioid requirement.",
    choices: [
      { text: "Stepwise escalation with adjuvants, now combined with multimodal analgesia", isCorrect: true },
      { text: "Strong opioids first in every case", isCorrect: false },
      { text: "Analgesia given only when pain becomes severe", isCorrect: false },
      { text: "A single agent at maximum dose", isCorrect: false },
    ],
  },
  {
    stem: "Why is a Glasgow Coma Scale of 8 or below significant?",
    topic: "Neurosurgery",
    explanation:
      "It indicates the patient cannot protect their own airway, so intubation is generally required — 'GCS 8, intubate'. GCS also tracks deterioration, and a drop of 2 or more points is a serious sign demanding immediate reassessment and imaging.",
    choices: [
      { text: "The airway is unprotected — intubation is generally required", isCorrect: true },
      { text: "It indicates brain death", isCorrect: false },
      { text: "It is a normal finding under sedation only", isCorrect: false },
      { text: "It has no bearing on airway management", isCorrect: false },
    ],
  },
  {
    stem: "A head injury patient has a lucid interval then rapid deterioration with a fixed dilated pupil. What is the likely lesion?",
    topic: "Neurosurgery",
    explanation:
      "An extradural haematoma from middle meningeal artery tear beneath the pterion. Arterial bleeding strips dura from bone, hence the delay then rapid decline. The dilated pupil reflects uncal herniation compressing the third nerve — a neurosurgical emergency measured in minutes.",
    choices: [
      { text: "Extradural haematoma with uncal herniation", isCorrect: true },
      { text: "Chronic subdural haematoma", isCorrect: false },
      { text: "Subarachnoid haemorrhage", isCorrect: false },
      { text: "Diffuse axonal injury", isCorrect: false },
    ],
  },
  {
    stem: "An elderly patient on anticoagulants has fluctuating confusion weeks after a minor fall. What should be suspected?",
    topic: "Neurosurgery",
    explanation:
      "Chronic subdural haematoma from torn bridging veins. Cerebral atrophy stretches these veins so minor trauma tears them, and the venous bleeding is slow — hence the delayed, fluctuating presentation. It is highly treatable, and easily dismissed as dementia or delirium.",
    choices: [
      { text: "Chronic subdural haematoma", isCorrect: true },
      { text: "Extradural haematoma", isCorrect: false },
      { text: "Progressive dementia only", isCorrect: false },
      { text: "Normal ageing", isCorrect: false },
    ],
  },
  {
    stem: "What is Cushing's reflex, and what does it indicate?",
    topic: "Neurosurgery",
    explanation:
      "Hypertension, bradycardia and irregular respiration — a response to critically raised intracranial pressure as the body attempts to maintain cerebral perfusion. It is a LATE and ominous sign indicating imminent herniation, so it demands immediate action rather than observation.",
    choices: [
      { text: "Hypertension, bradycardia and irregular breathing — a late sign of critically raised ICP", isCorrect: true },
      { text: "Hypotension with tachycardia in early head injury", isCorrect: false },
      { text: "A normal response to anaesthesia", isCorrect: false },
      { text: "An early, reassuring finding", isCorrect: false },
    ],
  },
  {
    stem: "Which measures reduce raised intracranial pressure acutely?",
    topic: "Neurosurgery",
    explanation:
      "Head elevation to about 30 degrees, ensuring venous drainage is not obstructed, adequate oxygenation and normocapnia, osmotic therapy with mannitol or hypertonic saline, and treating pain, fever and seizures. Prolonged hyperventilation is avoided because vasoconstriction reduces cerebral perfusion.",
    choices: [
      { text: "Head elevation, unobstructed venous drainage, normocapnia and osmotic therapy", isCorrect: true },
      { text: "Prolonged aggressive hyperventilation", isCorrect: false },
      { text: "Lying the patient completely flat", isCorrect: false },
      { text: "Large volumes of hypotonic fluid", isCorrect: false },
    ],
  },
  {
    stem: "Why is a lumbar puncture dangerous in a patient with raised intracranial pressure and a focal mass?",
    topic: "Neurosurgery",
    explanation:
      "Removing CSF from below creates a pressure gradient that can precipitate herniation of the cerebellar tonsils through the foramen magnum, compressing the medulla. This is why imaging precedes lumbar puncture where focal signs, seizures or reduced consciousness are present.",
    choices: [
      { text: "It can precipitate herniation through the foramen magnum", isCorrect: true },
      { text: "It causes uncontrollable bleeding", isCorrect: false },
      { text: "It introduces infection in every case", isCorrect: false },
      { text: "It has no particular risk", isCorrect: false },
    ],
  },
  {
    stem: "A patient describes the worst headache of their life, sudden in onset. What is the diagnostic pathway?",
    topic: "Neurosurgery",
    explanation:
      "Non-contrast CT first — highly sensitive within the first several hours. If negative but suspicion persists, lumbar puncture after 12 hours looks for xanthochromia, which takes time to develop. Subarachnoid haemorrhage is the diagnosis being excluded.",
    choices: [
      { text: "CT first; if negative, lumbar puncture after 12 hours for xanthochromia", isCorrect: true },
      { text: "Lumbar puncture immediately, before any imaging", isCorrect: false },
      { text: "MRI as the first-line investigation", isCorrect: false },
      { text: "Discharge with analgesia if CT is normal within one hour", isCorrect: false },
    ],
  },
  {
    stem: "Which spinal injury pattern causes ipsilateral motor loss with contralateral pain and temperature loss?",
    topic: "Spinal Injury",
    explanation:
      "Brown-Séquard syndrome from cord hemisection. The dissociation follows from where each tract crosses — dorsal columns decussate in the medulla so loss is ipsilateral, while spinothalamic fibres cross within a segment or two of entry so loss is contralateral.",
    choices: [
      { text: "Brown-Séquard syndrome (cord hemisection)", isCorrect: true },
      { text: "Central cord syndrome", isCorrect: false },
      { text: "Anterior cord syndrome", isCorrect: false },
      { text: "Complete cord transection", isCorrect: false },
    ],
  },
  {
    stem: "An elderly patient with a hyperextension neck injury has weakness worse in the arms than the legs. Which syndrome is this?",
    topic: "Spinal Injury",
    explanation:
      "Central cord syndrome, typically from hyperextension in a spondylotic cervical spine. Upper limb fibres run more centrally in the corticospinal tract, so central damage affects arms disproportionately. It often occurs without any fracture, which is why mechanism matters as much as imaging.",
    choices: [
      { text: "Central cord syndrome — upper limb fibres lie more centrally", isCorrect: true },
      { text: "Brown-Séquard syndrome", isCorrect: false },
      { text: "Anterior cord syndrome", isCorrect: false },
      { text: "Cauda equina syndrome", isCorrect: false },
    ],
  },
  {
    stem: "What distinguishes neurogenic shock from spinal shock?",
    topic: "Spinal Injury",
    explanation:
      "Neurogenic shock is a HAEMODYNAMIC state — hypotension with bradycardia from loss of sympathetic tone in high cord injury. Spinal shock is a NEUROLOGICAL state — transient flaccidity and areflexia below the injury. Confusing them matters: neurogenic shock needs vasopressors, and fluids alone will not correct it.",
    choices: [
      { text: "Neurogenic shock is haemodynamic with bradycardia; spinal shock is transient areflexia", isCorrect: true },
      { text: "They are the same phenomenon", isCorrect: false },
      { text: "Neurogenic shock causes tachycardia like other shock states", isCorrect: false },
      { text: "Spinal shock refers to psychological distress", isCorrect: false },
    ],
  },
];

/* ═══════════ SEED ═══════════ */

/** Retries a write when the connection drops. Genuine errors re-throw at once. */
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
  console.log("Seeding Surgery & Orthopaedics…\n");
  const GEN = "cs-general-surgery";
  const ORT = "cs-orthopedics";
  const PER = "cs-perioperative-care";

  await seedSet({
    categorySlug: GEN, slug: "general-surgery-practice-set-1",
    title: "General Surgery — Practice Set 1",
    description: "Twenty-five questions on the acute abdomen, bowel obstruction, biliary disease, pancreatitis, hernias, colorectal and anorectal conditions, vascular emergencies and breast assessment. Untimed.",
    kind: "PRACTICE", timeLimitSeconds: null, difficulty: "Intermediate", questions: SET1,
  });

  await seedSet({
    categorySlug: ORT, slug: "orthopaedics-practice-set-1",
    title: "Orthopaedics & Trauma — Practice Set 1",
    description: "Twenty-five questions on fractures and their complications, nerve injuries, paediatric trauma, dislocations, the ABCDE approach, soft tissue injury, arthritis, joint infection and spinal red flags. Untimed.",
    kind: "PRACTICE", timeLimitSeconds: null, difficulty: "Intermediate", questions: SET2,
  });

  await seedSet({
    categorySlug: PER, slug: "perioperative-neurosurgery-practice-set-1",
    title: "Perioperative Care & Neurosurgery — Practice Set 1",
    description: "Twenty-five questions on preoperative assessment, perioperative medicines, postoperative complications, surgical safety, anaesthetic emergencies, head injury, raised intracranial pressure and spinal injury. Untimed.",
    kind: "PRACTICE", timeLimitSeconds: null, difficulty: "Intermediate", questions: SET3,
  });

  await seedSet({
    categorySlug: GEN, slug: "surgery-exam-1",
    title: "Surgery & Orthopaedics — Timed Exam 1",
    description: "Fifty questions in 60 minutes, drawn from Practice Sets 1 and 2 — general surgery, orthopaedics and trauma. Feedback withheld until you submit.",
    kind: "EXAM", timeLimitSeconds: 60 * 60, difficulty: "Intermediate", questions: [...SET1, ...SET2],
  });

  await seedSet({
    categorySlug: GEN, slug: "surgery-exam-2",
    title: "Surgery & Orthopaedics — Timed Exam 2 (Comprehensive)",
    description: "All seventy-five questions in 90 minutes, adding perioperative care and neurosurgery. Sit this once the three practice sets feel comfortable.",
    kind: "EXAM", timeLimitSeconds: 90 * 60, difficulty: "Advanced", questions: [...SET1, ...SET2, ...SET3],
  });

  console.log("\nDone. Editable in Admin → Question Bank.");
}

main().catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
