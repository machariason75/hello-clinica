/**
 * CONTENT WAVE — Infectious Diseases
 *
 * Shaped exactly like Haematology, which is the pattern to copy:
 *
 *   Practice Set 1 (30)  → sepsis, HIV, TB, malaria, stewardship
 *   Practice Set 2 (30)  → bacterial, viral, tropical/parasitic, HAI, immunisation
 *   Timed Exam 1   (30)  → Set 1 under exam conditions, 40 minutes
 *   Timed Exam 2   (60)  → everything, 75 minutes
 *
 * Two practice sets rather than one large one is the point: a student who has
 * worked through Set 1 can sit Set 2 on the same specialty without meeting
 * questions they have already memorised, and the exams then recombine them under
 * time pressure.
 *
 * Answers are SHUFFLED on insert. Without that the correct choice lands at
 * order 0 every time, because it is written first in the data below — and
 * students spot that pattern faster than you would like.
 *
 * ⚠ Clinical thresholds, first-line agents and regimens vary by national
 * guideline and are revised periodically. These questions test mechanism and
 * principle, which travel — but review anything numerical against local
 * guidance. Everything here is editable in Admin → Question Bank.
 *
 * Run:  npx tsx prisma/seed-infectious-diseases.ts
 * Safe to re-run — upserts by quiz slug and rewrites that quiz's questions.
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Q = {
  stem: string;
  topic: string;
  explanation: string;
  choices: { text: string; isCorrect: boolean }[];
};

/* ═══════════════ PRACTICE SET 1 ═══════════════ */

const SET1: Q[] = [
  /* ---- Sepsis & Severe Infection ---- */
  {
    stem: "What is the single most time-critical intervention in septic shock once recognised?",
    topic: "Sepsis & Severe Infection",
    explanation:
      "Effective antimicrobials, given as early as possible. Mortality rises measurably with each hour of delay, which is why guidelines put antibiotics inside the first hour of recognition. Cultures should be taken first if that causes no meaningful delay, but a missing culture is never a reason to withhold treatment.",
    choices: [
      { text: "Early effective antimicrobials", isCorrect: true },
      { text: "A CT scan to locate the source", isCorrect: false },
      { text: "Transfer to a specialist centre before treatment", isCorrect: false },
      { text: "Awaiting culture and sensitivity results", isCorrect: false },
    ],
  },
  {
    stem: "Why is blood taken for culture BEFORE the first dose of antibiotic where possible?",
    topic: "Sepsis & Severe Infection",
    explanation:
      "Even one dose can sterilise the blood enough to turn the culture negative, losing the organism and its sensitivities. That matters later: without an isolate the patient stays on broad empirical cover instead of being narrowed to a targeted agent. The rule is 'before, if it does not delay' — not 'before, whatever the wait'.",
    choices: [
      { text: "A single dose can render the culture negative and lose the isolate", isCorrect: true },
      { text: "Antibiotics interfere with the laboratory's staining process", isCorrect: false },
      { text: "It is a billing requirement rather than a clinical one", isCorrect: false },
      { text: "Cultures taken afterwards grow faster and confuse timing", isCorrect: false },
    ],
  },
  {
    stem: "What does a raised serum lactate indicate in suspected sepsis?",
    topic: "Sepsis & Severe Infection",
    explanation:
      "Tissue hypoperfusion — cells respiring anaerobically because oxygen delivery is inadequate. It is a marker of severity rather than of infection, so it both identifies the patient who looks deceptively stable and gives a number to follow as resuscitation proceeds. A falling lactate is one of the more reliable signs that treatment is working.",
    choices: [
      { text: "Tissue hypoperfusion, marking severity and guiding resuscitation", isCorrect: true },
      { text: "The specific organism responsible", isCorrect: false },
      { text: "That the infection is viral rather than bacterial", isCorrect: false },
      { text: "Adequate oxygen delivery to the tissues", isCorrect: false },
    ],
  },
  {
    stem: "A patient with sepsis from an obstructed, infected urinary system is given antibiotics and fluids but does not improve. What has been missed?",
    topic: "Sepsis & Severe Infection",
    explanation:
      "Source control. Pus or infected material behind an obstruction is not reached by systemic antibiotics in useful concentrations, so drainage or decompression is part of the treatment rather than an optional extra. The same principle governs empyema, abscess and infected collections everywhere in the body.",
    choices: [
      { text: "Source control — the obstruction needs drainage", isCorrect: true },
      { text: "A higher dose of the same antibiotic", isCorrect: false },
      { text: "Addition of an antifungal agent", isCorrect: false },
      { text: "Corticosteroids to reduce inflammation", isCorrect: false },
    ],
  },
  {
    stem: "Why can a septic patient be normothermic or even hypothermic?",
    topic: "Sepsis & Severe Infection",
    explanation:
      "Fever is a regulated host response, and the very old, the immunosuppressed and the profoundly unwell may fail to mount it. Hypothermia in sepsis carries a WORSE prognosis than fever, so the absence of a temperature is reassuring only to the unwary — it is the physiology and the perfusion that should be read.",
    choices: [
      { text: "The febrile response can fail, and hypothermia carries a worse prognosis", isCorrect: true },
      { text: "It means the infection has resolved spontaneously", isCorrect: false },
      { text: "Only viral infections cause a normal temperature", isCorrect: false },
      { text: "Hypothermia excludes bacterial infection", isCorrect: false },
    ],
  },
  {
    stem: "What is the purpose of a rapid bedside score such as qSOFA or NEWS in suspected infection?",
    topic: "Sepsis & Severe Infection",
    explanation:
      "To flag the patient at risk of deterioration quickly, using observations available at the bedside without waiting for laboratory results. These are screening and escalation triggers, not diagnostic tests — a low score in a patient who looks unwell does not overrule clinical judgement, and treating the score instead of the patient is the classic error.",
    choices: [
      { text: "Rapid identification of patients at risk of deterioration, to trigger escalation", isCorrect: true },
      { text: "To establish the causative organism", isCorrect: false },
      { text: "To replace clinical assessment entirely", isCorrect: false },
      { text: "To determine the exact antibiotic required", isCorrect: false },
    ],
  },

  /* ---- HIV ---- */
  {
    stem: "What does the CD4 count indicate in a person living with HIV?",
    topic: "HIV",
    explanation:
      "The degree of immune damage, and therefore which opportunistic infections the person is vulnerable to. Viral load measures how much virus is present and how well treatment is suppressing it; the two answer different questions, which is why both are followed. CD4 predicts risk, viral load monitors control.",
    choices: [
      { text: "The degree of immunosuppression and susceptibility to opportunistic infection", isCorrect: true },
      { text: "How much virus is circulating", isCorrect: false },
      { text: "Whether antiretroviral resistance has developed", isCorrect: false },
      { text: "The duration of infection in years", isCorrect: false },
    ],
  },
  {
    stem: "Below roughly which CD4 count does Pneumocystis jirovecii pneumonia become a significant risk, prompting prophylaxis?",
    topic: "HIV",
    explanation:
      "About 200 cells/µL. This threshold is why co-trimoxazole prophylaxis is started at that point and continued until the count recovers on treatment. It is the most commonly applied CD4 threshold in practice, and knowing it changes management directly.",
    choices: [
      { text: "200 cells/µL", isCorrect: true },
      { text: "800 cells/µL", isCorrect: false },
      { text: "600 cells/µL", isCorrect: false },
      { text: "20 cells/µL", isCorrect: false },
    ],
  },
  {
    stem: "When should antiretroviral therapy be started in a newly diagnosed adult?",
    topic: "HIV",
    explanation:
      "As soon as the person is ready, regardless of CD4 count. Waiting for a threshold was abandoned because early treatment improves individual outcomes AND, by suppressing viral load, prevents onward transmission. The main exceptions concern timing around certain opportunistic infections, notably cryptococcal and tuberculous meningitis, where immediate initiation can worsen outcomes.",
    choices: [
      { text: "As soon as possible, whatever the CD4 count", isCorrect: true },
      { text: "Only once the CD4 falls below 350", isCorrect: false },
      { text: "Only when symptoms of AIDS appear", isCorrect: false },
      { text: "After a year of observation", isCorrect: false },
    ],
  },
  {
    stem: "A patient starts antiretrovirals and days later develops worsening fever and enlarging lymph nodes. What has most likely happened?",
    topic: "HIV",
    explanation:
      "Immune reconstitution inflammatory syndrome — a recovering immune system mounting a vigorous response against an infection that was already present but unopposed. It is a sign that treatment is working, not failing, so antiretrovirals are usually continued while the underlying infection is treated and inflammation is managed. Mistaking it for treatment failure leads to unnecessary regimen changes.",
    choices: [
      { text: "Immune reconstitution inflammatory syndrome", isCorrect: true },
      { text: "Antiretroviral treatment failure", isCorrect: false },
      { text: "Complete drug resistance to all agents", isCorrect: false },
      { text: "Reinfection with a second strain", isCorrect: false },
    ],
  },
  {
    stem: "What does an undetectable viral load on sustained treatment mean for transmission?",
    topic: "HIV",
    explanation:
      "Sustained viral suppression means the virus is not transmitted sexually — the basis of 'undetectable equals untransmittable'. It depends on maintained adherence and confirmed suppression, and it does not protect against other sexually transmitted infections. This is one of the most consequential facts to convey accurately, because it transforms how people live with the diagnosis.",
    choices: [
      { text: "Sexual transmission does not occur while suppression is maintained", isCorrect: true },
      { text: "The virus has been eradicated and treatment can stop", isCorrect: false },
      { text: "Transmission risk is unchanged", isCorrect: false },
      { text: "Other sexually transmitted infections are also prevented", isCorrect: false },
    ],
  },
  {
    stem: "Why is a negative HIV antibody test soon after a high-risk exposure not reassuring?",
    topic: "HIV",
    explanation:
      "Antibodies take weeks to become detectable, so a test taken inside that window period can be negative in someone who has just been infected — and who is highly infectious at that stage. Repeat testing after the window, or a test detecting antigen or nucleic acid, is what settles the question.",
    choices: [
      { text: "Antibodies take weeks to appear — the window period", isCorrect: true },
      { text: "Antibody tests are inherently unreliable", isCorrect: false },
      { text: "The virus does not provoke antibodies at all", isCorrect: false },
      { text: "A negative result confirms immunity", isCorrect: false },
    ],
  },
  {
    stem: "What is the purpose of antiretroviral treatment in pregnancy for a woman living with HIV?",
    topic: "HIV",
    explanation:
      "To suppress viral load and so prevent transmission to the infant, alongside treating the mother. With effective treatment, appropriate delivery planning and infant prophylaxis, vertical transmission falls to very low levels — one of the clearest public-health successes in the field. Untreated, transmission risk is substantial.",
    choices: [
      { text: "Suppress viral load to prevent vertical transmission while treating the mother", isCorrect: true },
      { text: "It is contraindicated throughout pregnancy", isCorrect: false },
      { text: "It is started only after delivery", isCorrect: false },
      { text: "It replaces the need for any infant follow-up", isCorrect: false },
    ],
  },
  {
    stem: "Which infection is the leading cause of death among people living with HIV worldwide?",
    topic: "HIV",
    explanation:
      "Tuberculosis. HIV markedly increases the risk of latent TB reactivating, and TB in turn accelerates HIV progression, so the two are managed together — everyone with HIV is screened for TB and vice versa. This interaction is the reason TB and HIV programmes are integrated in most high-burden settings.",
    choices: [
      { text: "Tuberculosis", isCorrect: true },
      { text: "Influenza", isCorrect: false },
      { text: "Hepatitis A", isCorrect: false },
      { text: "Dental abscess", isCorrect: false },
    ],
  },

  /* ---- Tuberculosis ---- */
  {
    stem: "What staining property defines Mycobacterium tuberculosis on microscopy?",
    topic: "Tuberculosis",
    explanation:
      "It is acid-fast: the mycolic-acid-rich cell wall retains carbol fuchsin through acid decolourisation, which is why Ziehl-Neelsen rather than Gram staining is used. That same waxy wall explains the organism's slow growth and its resistance to many antibiotics and to drying, and is why treatment takes months rather than days.",
    choices: [
      { text: "Acid-fast — it resists acid decolourisation", isCorrect: true },
      { text: "Gram-positive with a thick peptidoglycan wall", isCorrect: false },
      { text: "Gram-negative with an outer lipopolysaccharide membrane", isCorrect: false },
      { text: "It cannot be visualised by any stain", isCorrect: false },
    ],
  },
  {
    stem: "What is the advantage of a rapid molecular test such as Xpert MTB/RIF over smear microscopy?",
    topic: "Tuberculosis",
    explanation:
      "It is considerably more sensitive than smear and simultaneously detects rifampicin resistance, in hours rather than the weeks culture requires. Detecting resistance up front is the decisive part: it prevents a patient with resistant disease being started on a regimen that will fail, and prevents that failure being mistaken for non-adherence.",
    choices: [
      { text: "Higher sensitivity and rapid detection of rifampicin resistance", isCorrect: true },
      { text: "It removes any need for treatment", isCorrect: false },
      { text: "It is cheaper than microscopy in every setting", isCorrect: false },
      { text: "It distinguishes latent from active infection", isCorrect: false },
    ],
  },
  {
    stem: "Which antituberculous drug causes peripheral neuropathy, preventable with pyridoxine?",
    topic: "Tuberculosis",
    explanation:
      "Isoniazid, which interferes with pyridoxine (vitamin B6) metabolism. Co-prescribing pyridoxine prevents the neuropathy at negligible cost, which is why it is routine — particularly in pregnancy, malnutrition, alcohol dependence, diabetes and HIV, where the risk is highest.",
    choices: [
      { text: "Isoniazid", isCorrect: true },
      { text: "Rifampicin", isCorrect: false },
      { text: "Ethambutol", isCorrect: false },
      { text: "Pyrazinamide", isCorrect: false },
    ],
  },
  {
    stem: "A patient on tuberculosis treatment reports orange-red urine and tears. What is the correct response?",
    topic: "Tuberculosis",
    explanation:
      "Reassure them — this is rifampicin's harmless discolouration of body fluids, and warning patients in advance prevents them stopping treatment in alarm. It also stains soft contact lenses permanently, which is worth mentioning. The genuinely important rifampicin problem is different: it is a potent enzyme inducer and accelerates the metabolism of many drugs, including hormonal contraceptives.",
    choices: [
      { text: "Reassure — rifampicin harmlessly discolours secretions", isCorrect: true },
      { text: "Stop all treatment immediately", isCorrect: false },
      { text: "Treat as acute kidney injury", isCorrect: false },
      { text: "Transfuse for suspected haemolysis", isCorrect: false },
    ],
  },
  {
    stem: "Which antituberculous drug requires monitoring of visual acuity and colour vision?",
    topic: "Tuberculosis",
    explanation:
      "Ethambutol, which can cause a dose-related optic neuropathy affecting acuity and red-green discrimination. It is largely reversible if caught early and stopped, and permanent if it is not — hence baseline and interval testing, and clear instructions to report any visual change at once.",
    choices: [
      { text: "Ethambutol", isCorrect: true },
      { text: "Isoniazid", isCorrect: false },
      { text: "Rifampicin", isCorrect: false },
      { text: "Streptomycin", isCorrect: false },
    ],
  },
  {
    stem: "Why is tuberculosis treated with four drugs initially rather than one?",
    topic: "Tuberculosis",
    explanation:
      "Because spontaneous resistant mutants exist within any large bacterial population, and a single agent simply selects for them. Multiple drugs with different targets make it improbable that one organism is resistant to all of them at once. This is exactly why monotherapy — including a well-meaning single drug added to a failing regimen — is the classic route to creating resistant disease.",
    choices: [
      { text: "To prevent selection of pre-existing resistant mutants", isCorrect: true },
      { text: "To shorten treatment to a single week", isCorrect: false },
      { text: "Because each drug treats a different organ", isCorrect: false },
      { text: "To reduce the total cost of therapy", isCorrect: false },
    ],
  },
  {
    stem: "What distinguishes latent tuberculosis infection from active disease?",
    topic: "Tuberculosis",
    explanation:
      "In latent infection the organism is contained and dormant: the person is asymptomatic, not infectious, and has no radiological or bacteriological evidence of disease, but retains immunological memory of it. Treatment of latent infection prevents future reactivation and uses fewer drugs for a shorter time than active disease — so distinguishing the two decides the entire regimen.",
    choices: [
      { text: "Latent infection is contained and non-infectious, with no active disease", isCorrect: true },
      { text: "Latent infection is more contagious than active disease", isCorrect: false },
      { text: "Latent infection always progresses within a month", isCorrect: false },
      { text: "There is no clinical difference between them", isCorrect: false },
    ],
  },
  {
    stem: "Why does supporting adherence matter so much in tuberculosis programmes?",
    topic: "Tuberculosis",
    explanation:
      "Because interrupted or partial treatment is how drug resistance is manufactured, and multidrug-resistant disease is far longer, more toxic and more expensive to treat. Adherence support — including directly observed therapy where appropriate — protects the individual's cure and the community from resistant strains at the same time.",
    choices: [
      { text: "Interrupted treatment generates drug resistance", isCorrect: true },
      { text: "The drugs are ineffective if taken with food", isCorrect: false },
      { text: "It shortens treatment to two weeks", isCorrect: false },
      { text: "Resistance cannot develop during treatment", isCorrect: false },
    ],
  },

  /* ---- Malaria ---- */
  {
    stem: "Which Plasmodium species causes the great majority of severe and fatal malaria?",
    topic: "Malaria",
    explanation:
      "Plasmodium falciparum. It reaches very high parasite densities and its infected red cells adhere to and obstruct capillaries, producing cerebral malaria, severe anaemia and organ failure. Species identification therefore changes urgency, not just choice of drug — falciparum is a medical emergency.",
    choices: [
      { text: "Plasmodium falciparum", isCorrect: true },
      { text: "Plasmodium vivax", isCorrect: false },
      { text: "Plasmodium ovale", isCorrect: false },
      { text: "Plasmodium malariae", isCorrect: false },
    ],
  },
  {
    stem: "A traveller returning from an endemic area has fever. What must be excluded urgently?",
    topic: "Malaria",
    explanation:
      "Malaria, by blood film or rapid diagnostic test — repeated if the first is negative, because a single negative film does not exclude it. Falciparum malaria can deteriorate from mild to fatal within a day, so fever in a returning traveller is investigated for malaria before comfortable alternative diagnoses are accepted.",
    choices: [
      { text: "Malaria — tested for at once, and repeated if negative", isCorrect: true },
      { text: "Nothing urgent; review in a week", isCorrect: false },
      { text: "Only a viral upper respiratory infection", isCorrect: false },
      { text: "Malaria is excluded by a single negative film", isCorrect: false },
    ],
  },
  {
    stem: "What is the treatment of choice for severe falciparum malaria?",
    topic: "Malaria",
    explanation:
      "Intravenous artesunate, which clears parasites faster than quinine and reduces mortality significantly in both adults and children. Oral therapy is inappropriate in severe disease because absorption is unreliable in a shocked or vomiting patient — the route matters as much as the agent.",
    choices: [
      { text: "Intravenous artesunate", isCorrect: true },
      { text: "Oral chloroquine", isCorrect: false },
      { text: "Oral paracetamol alone", isCorrect: false },
      { text: "A single dose of oral primaquine", isCorrect: false },
    ],
  },
  {
    stem: "Why can Plasmodium vivax relapse months after apparently successful treatment?",
    topic: "Malaria",
    explanation:
      "It forms hypnozoites — dormant liver stages that standard blood-stage treatment does not touch. Clearing them requires an 8-aminoquinoline such as primaquine, which is why G6PD status must be considered first: these drugs cause haemolysis in G6PD deficiency. Treating the blood stage alone leaves the relapse waiting.",
    choices: [
      { text: "Dormant liver hypnozoites survive blood-stage treatment", isCorrect: true },
      { text: "The parasite hides inside neurons", isCorrect: false },
      { text: "It is transmitted only by blood transfusion", isCorrect: false },
      { text: "Relapse indicates antimalarial resistance in every case", isCorrect: false },
    ],
  },
  {
    stem: "Why is malaria in pregnancy managed with particular urgency?",
    topic: "Malaria",
    explanation:
      "Pregnancy increases susceptibility and severity, and the parasite sequesters in the placenta — causing maternal anaemia, low birth weight, prematurity and stillbirth. Both mother and fetus are at risk, so prevention and prompt treatment are prioritised, with drug choice adjusted for the stage of pregnancy.",
    choices: [
      { text: "Severity is increased and the placenta is affected, endangering both", isCorrect: true },
      { text: "Pregnancy is protective against malaria", isCorrect: false },
      { text: "Treatment must always be deferred until after delivery", isCorrect: false },
      { text: "Only the mother is at risk", isCorrect: false },
    ],
  },

  /* ---- Antimicrobial Stewardship ---- */
  {
    stem: "What does de-escalation mean in antimicrobial prescribing?",
    topic: "Antimicrobial Stewardship",
    explanation:
      "Narrowing from broad empirical cover to a targeted agent once culture and sensitivity results are available. Broad cover is appropriate while the organism is unknown and inappropriate once it is known — continuing it drives resistance, Clostridioides difficile infection and avoidable toxicity. The review at 48 to 72 hours is where this decision belongs.",
    choices: [
      { text: "Narrowing to a targeted agent once sensitivities are known", isCorrect: true },
      { text: "Reducing the dose while keeping the same broad agent", isCorrect: false },
      { text: "Adding further agents to broaden cover", isCorrect: false },
      { text: "Stopping all antibiotics at 48 hours regardless", isCorrect: false },
    ],
  },
  {
    stem: "Why is a defined stop or review date recorded with every antimicrobial prescription?",
    topic: "Antimicrobial Stewardship",
    explanation:
      "Because without one, courses continue by inertia long past the point of benefit — accumulating toxicity, cost and selection pressure for no clinical gain. Recording the indication, the intended duration and the review date turns the prescription into a decision that someone must actively renew rather than one that quietly persists.",
    choices: [
      { text: "Courses otherwise continue by default, adding harm without benefit", isCorrect: true },
      { text: "Longer courses are always more effective", isCorrect: false },
      { text: "It is required only for intravenous agents", isCorrect: false },
      { text: "Duration has no bearing on resistance", isCorrect: false },
    ],
  },
  {
    stem: "A patient on intravenous antibiotics is improving, eating and haemodynamically stable. What does good practice suggest?",
    topic: "Antimicrobial Stewardship",
    explanation:
      "Switch to an oral agent. Intravenous access carries thrombophlebitis and bloodstream infection risk, costs more and prolongs admission, while many oral antibiotics achieve excellent bioavailability. Once absorption is reliable, the intravenous route has no advantage to justify its risks.",
    choices: [
      { text: "Switch to oral therapy", isCorrect: true },
      { text: "Continue intravenously for the full course regardless", isCorrect: false },
      { text: "Add a second intravenous agent", isCorrect: false },
      { text: "Stop antibiotics immediately on first improvement", isCorrect: false },
    ],
  },
];

/* ═══════════════ PRACTICE SET 2 ═══════════════ */

const SET2: Q[] = [
  /* ---- Bacterial Infections ---- */
  {
    stem: "A patient has a spreading, painful area of erythema with rapidly worsening pain out of proportion to the skin findings, and systemic toxicity. What must be excluded?",
    topic: "Bacterial Infections",
    explanation:
      "Necrotising fasciitis. Pain disproportionate to visible signs, rapid progression and systemic toxicity distinguish it from simple cellulitis, and the diagnosis is surgical — urgent exploration and debridement alongside antibiotics. Imaging that delays theatre costs limbs and lives, which is why clinical suspicion drives the referral.",
    choices: [
      { text: "Necrotising fasciitis, requiring urgent surgical exploration", isCorrect: true },
      { text: "Simple cellulitis for oral antibiotics at home", isCorrect: false },
      { text: "Contact dermatitis", isCorrect: false },
      { text: "Superficial thrombophlebitis", isCorrect: false },
    ],
  },
  {
    stem: "What makes meticillin-resistant Staphylococcus aureus resistant to standard beta-lactams?",
    topic: "Bacterial Infections",
    explanation:
      "An altered penicillin-binding protein encoded by mecA, which beta-lactams bind poorly. Because the target itself has changed, the resistance covers the whole beta-lactam class rather than one drug, and adding a beta-lactamase inhibitor does not help — the mechanism is not enzymatic destruction of the antibiotic.",
    choices: [
      { text: "An altered penicillin-binding protein encoded by mecA", isCorrect: true },
      { text: "A thicker capsule preventing drug entry", isCorrect: false },
      { text: "Beta-lactamase alone, reversible with an inhibitor", isCorrect: false },
      { text: "Active pumping of the drug out of the cell only", isCorrect: false },
    ],
  },
  {
    stem: "A young adult presents with fever, headache, neck stiffness and a non-blanching purpuric rash. What is the immediate priority?",
    topic: "Bacterial Infections",
    explanation:
      "Immediate parenteral antibiotics for suspected meningococcal disease, before transfer or imaging. This illness can progress to death within hours, and the non-blanching rash signals meningococcaemia rather than meningitis alone. Lumbar puncture and imaging follow when safe; they never precede treatment.",
    choices: [
      { text: "Immediate parenteral antibiotics", isCorrect: true },
      { text: "Await lumbar puncture results before treating", isCorrect: false },
      { text: "Oral antibiotics and review the next day", isCorrect: false },
      { text: "CT head before any antibiotic is given", isCorrect: false },
    ],
  },
  {
    stem: "Which infection classically follows recent antibiotic use with profuse diarrhoea and colitis?",
    topic: "Bacterial Infections",
    explanation:
      "Clostridioides difficile. Antibiotics disturb the protective colonic flora, allowing this toxin-producing organism to overgrow. Management includes stopping the precipitating antibiotic where possible, specific therapy, and strict contact precautions with soap-and-water handwashing — alcohol gel does not kill the spores.",
    choices: [
      { text: "Clostridioides difficile colitis", isCorrect: true },
      { text: "Cholera", isCorrect: false },
      { text: "Giardiasis", isCorrect: false },
      { text: "Viral gastroenteritis exclusively", isCorrect: false },
    ],
  },
  {
    stem: "A patient develops a sustained fever, abdominal discomfort and relative bradycardia after travel, with initially normal stool. What should be considered?",
    topic: "Bacterial Infections",
    explanation:
      "Enteric (typhoid) fever from Salmonella Typhi. It is a systemic illness rather than a diarrhoeal one, which is why early presentations lack diarrhoea and are misread as a viral illness. Blood culture is the key investigation, and untreated disease risks intestinal perforation and haemorrhage.",
    choices: [
      { text: "Enteric (typhoid) fever", isCorrect: true },
      { text: "Simple travellers' diarrhoea", isCorrect: false },
      { text: "Lactose intolerance", isCorrect: false },
      { text: "Appendicitis in every case", isCorrect: false },
    ],
  },
  {
    stem: "Why is a deep, dirty puncture wound a particular tetanus risk?",
    topic: "Bacterial Infections",
    explanation:
      "Clostridium tetani is an obligate anaerobe whose spores germinate in the low-oxygen conditions of deep, devitalised, contaminated tissue. Superficial clean wounds are far less favourable. This is why management combines wound cleaning and debridement with assessment of immunisation status, rather than relying on either alone.",
    choices: [
      { text: "Anaerobic conditions in deep devitalised tissue allow spores to germinate", isCorrect: true },
      { text: "The organism requires high oxygen concentrations", isCorrect: false },
      { text: "Tetanus is transmitted person to person", isCorrect: false },
      { text: "Wound depth has no bearing on risk", isCorrect: false },
    ],
  },
  {
    stem: "What is the significance of finding Staphylococcus aureus in the bloodstream?",
    topic: "Bacterial Infections",
    explanation:
      "It is never dismissed as a contaminant: S. aureus bacteraemia seeds distant sites, causing endocarditis, vertebral osteomyelitis and deep abscesses. It therefore demands a search for a source and for metastatic foci, echocardiography, line removal where relevant, and a prolonged targeted course — not a short empirical one.",
    choices: [
      { text: "It requires a source search and prolonged targeted treatment, never dismissal", isCorrect: true },
      { text: "It is almost always a harmless contaminant", isCorrect: false },
      { text: "A three-day oral course is sufficient", isCorrect: false },
      { text: "It never seeds to distant sites", isCorrect: false },
    ],
  },

  /* ---- Viral Infections ---- */
  {
    stem: "Why does the influenza vaccine need reformulating each year?",
    topic: "Viral Infections",
    explanation:
      "The virus changes continuously through antigenic drift — accumulating mutations in its surface proteins — so previous immunity and last season's vaccine become progressively mismatched. The larger, abrupt reassortments known as antigenic shift are what generate pandemic strains, against which population immunity may be minimal.",
    choices: [
      { text: "Antigenic drift continually changes its surface proteins", isCorrect: true },
      { text: "The vaccine expires chemically within weeks", isCorrect: false },
      { text: "Immunity to influenza is lifelong once acquired", isCorrect: false },
      { text: "The virus has no surface antigens", isCorrect: false },
    ],
  },
  {
    stem: "In dengue, when does the patient most often deteriorate?",
    topic: "Viral Infections",
    explanation:
      "Around the time the fever settles — the critical phase, when plasma leakage causes haemoconcentration, effusions and shock. It is a genuine trap: the patient appears to be improving as the temperature falls, and that is precisely when fluid status and haematocrit need closest attention.",
    choices: [
      { text: "As the fever subsides, during the plasma-leakage critical phase", isCorrect: true },
      { text: "Only during the first hours of fever", isCorrect: false },
      { text: "Never — dengue is uniformly mild", isCorrect: false },
      { text: "Several months after recovery", isCorrect: false },
    ],
  },
  {
    stem: "What does the presence of hepatitis B surface antigen indicate?",
    topic: "Viral Infections",
    explanation:
      "Current infection, whether acute or chronic — the person carries the virus and is potentially infectious. Surface ANTIBODY, by contrast, indicates immunity from vaccination or resolved infection, while core antibody points to past or present natural infection. Confusing antigen with antibody reverses the clinical meaning entirely.",
    choices: [
      { text: "Current infection, acute or chronic", isCorrect: true },
      { text: "Immunity following vaccination", isCorrect: false },
      { text: "Complete clearance of the virus", isCorrect: false },
      { text: "Immunity to hepatitis C as well", isCorrect: false },
    ],
  },
  {
    stem: "Why is rabies post-exposure treatment started without waiting for symptoms?",
    topic: "Viral Infections",
    explanation:
      "Because once clinical rabies develops it is effectively always fatal, whereas prompt wound washing, vaccination and — where indicated — immunoglobulin during the incubation period prevent the disease almost entirely. This is one of the few infections where the entire therapeutic opportunity lies before any symptom appears.",
    choices: [
      { text: "Established rabies is almost invariably fatal; prophylaxis works only beforehand", isCorrect: true },
      { text: "Symptoms make the vaccine more effective", isCorrect: false },
      { text: "Rabies resolves spontaneously in most people", isCorrect: false },
      { text: "Treatment is equally effective after symptoms begin", isCorrect: false },
    ],
  },
  {
    stem: "A child has fever, coryza, conjunctivitis and a spreading rash, with white spots on the buccal mucosa. What is the likely diagnosis?",
    topic: "Viral Infections",
    explanation:
      "Measles — the enanthem described is Koplik spots, which precede the rash. It matters because measles is intensely contagious, requires airborne precautions and public-health notification, and carries real risks of pneumonia and encephalitis. Vitamin A supplementation reduces mortality in children.",
    choices: [
      { text: "Measles", isCorrect: true },
      { text: "Chickenpox", isCorrect: false },
      { text: "Hand, foot and mouth disease", isCorrect: false },
      { text: "Scarlet fever", isCorrect: false },
    ],
  },
  {
    stem: "Why do antibiotics not treat viral upper respiratory infections?",
    topic: "Viral Infections",
    explanation:
      "Antibiotics act on bacterial structures and processes — cell wall synthesis, bacterial ribosomes, bacterial enzymes — none of which viruses possess. Prescribing them anyway offers no benefit while causing adverse effects, Clostridioides difficile risk and resistance, and it teaches patients to expect antibiotics for the next viral illness.",
    choices: [
      { text: "Viruses lack the bacterial targets antibiotics act on", isCorrect: true },
      { text: "The doses used are simply too low", isCorrect: false },
      { text: "Viruses are inherently resistant to all antibiotics through mutation", isCorrect: false },
      { text: "They work but too slowly to be useful", isCorrect: false },
    ],
  },

  /* ---- Tropical & Parasitic ---- */
  {
    stem: "A patient who has swum in fresh water in an endemic region develops haematuria, and later bladder changes. Which infection is implicated?",
    topic: "Tropical & Parasitic",
    explanation:
      "Schistosoma haematobium, acquired through skin contact with fresh water containing cercariae released by snails. Chronic urinary schistosomiasis causes fibrosis, obstruction and an increased risk of squamous cell bladder carcinoma — so the exposure history changes both the investigation and the long-term follow-up.",
    choices: [
      { text: "Urinary schistosomiasis", isCorrect: true },
      { text: "Ascariasis", isCorrect: false },
      { text: "Threadworm infestation", isCorrect: false },
      { text: "Scabies", isCorrect: false },
    ],
  },
  {
    stem: "How does chronic hookworm infection typically present?",
    topic: "Tropical & Parasitic",
    explanation:
      "As iron deficiency anaemia, from chronic intestinal blood loss as the worms attach to the mucosa. In children the resulting anaemia and protein loss impair growth and school performance. Unexplained iron deficiency in someone from an endemic area is a reason to consider stool examination rather than only investigating the gut for bleeding lesions.",
    choices: [
      { text: "Iron deficiency anaemia from chronic intestinal blood loss", isCorrect: true },
      { text: "Acute haemolysis within days", isCorrect: false },
      { text: "Macrocytic anaemia from B12 deficiency", isCorrect: false },
      { text: "Polycythaemia", isCorrect: false },
    ],
  },
  {
    stem: "A patient has a solitary liver abscess and a history of dysentery. Which organism should be considered alongside bacterial causes?",
    topic: "Tropical & Parasitic",
    explanation:
      "Entamoeba histolytica, which reaches the liver via the portal circulation to form an amoebic abscess — classically single and in the right lobe. It responds to appropriate antiamoebic therapy, often without drainage, so distinguishing it from a pyogenic abscess changes management substantially. A luminal agent is added to clear intestinal carriage.",
    choices: [
      { text: "Entamoeba histolytica", isCorrect: true },
      { text: "Giardia lamblia", isCorrect: false },
      { text: "Enterobius vermicularis", isCorrect: false },
      { text: "Plasmodium malariae", isCorrect: false },
    ],
  },
  {
    stem: "Which parasite classically causes prolonged non-bloody diarrhoea with bloating, flatulence and fat malabsorption?",
    topic: "Tropical & Parasitic",
    explanation:
      "Giardia, which colonises the upper small intestine and disrupts absorption without invading. The clinical signature is a persistent, greasy, malodorous diarrhoea with bloating rather than the bloody dysentery of invasive organisms — and it lasts long enough that people often present weeks after exposure.",
    choices: [
      { text: "Giardia lamblia", isCorrect: true },
      { text: "Shigella dysenteriae", isCorrect: false },
      { text: "Entamoeba histolytica", isCorrect: false },
      { text: "Vibrio cholerae", isCorrect: false },
    ],
  },
  {
    stem: "Why must Strongyloides infection be considered before starting corticosteroids in someone from an endemic area?",
    topic: "Tropical & Parasitic",
    explanation:
      "Because it can persist asymptomatically for decades through autoinfection, and immunosuppression allows it to disseminate — a hyperinfection syndrome with high mortality, often complicated by Gram-negative bacteraemia. Screening or empirical treatment before planned immunosuppression prevents a catastrophe that is very hard to reverse once established.",
    choices: [
      { text: "Immunosuppression can trigger fatal hyperinfection", isCorrect: true },
      { text: "Steroids cure the infection outright", isCorrect: false },
      { text: "The parasite is eliminated within days naturally", isCorrect: false },
      { text: "It only ever causes a transient rash", isCorrect: false },
    ],
  },
  {
    stem: "What is the main principle of vector control in preventing mosquito-borne disease?",
    topic: "Tropical & Parasitic",
    explanation:
      "Interrupting transmission by reducing contact between vector and host and by reducing the vector population — insecticide-treated nets, indoor residual spraying, removal of breeding sites and personal protection. Because it protects everyone regardless of individual treatment-seeking, it complements rather than competes with case management.",
    choices: [
      { text: "Interrupting transmission by reducing vector contact and vector numbers", isCorrect: true },
      { text: "Treating cases only, once they present", isCorrect: false },
      { text: "Isolating infected patients from each other", isCorrect: false },
      { text: "Vaccinating the mosquito population", isCorrect: false },
    ],
  },

  /* ---- Healthcare-Associated Infection ---- */
  {
    stem: "What is the single most effective measure for preventing healthcare-associated infection?",
    topic: "Healthcare-Associated Infection",
    explanation:
      "Hand hygiene, performed at the right moments. It is unglamorous and consistently under-performed, yet no other single intervention prevents as much transmission. Note the exception worth remembering: alcohol gel does not kill Clostridioides difficile spores or norovirus, so soap and water are required there.",
    choices: [
      { text: "Hand hygiene at the appropriate moments", isCorrect: true },
      { text: "Routine prophylactic antibiotics for all inpatients", isCorrect: false },
      { text: "Annual deep cleaning alone", isCorrect: false },
      { text: "Restricting all visiting", isCorrect: false },
    ],
  },
  {
    stem: "How is catheter-associated urinary tract infection most reliably prevented?",
    topic: "Healthcare-Associated Infection",
    explanation:
      "By avoiding unnecessary catheterisation and removing the catheter as soon as it is no longer needed. Risk accumulates with every day in situ, so duration is the dominant modifiable factor — more so than the type of catheter, and certainly more than prophylactic antibiotics, which select resistance without preventing infection.",
    choices: [
      { text: "Avoiding unnecessary catheters and removing them promptly", isCorrect: true },
      { text: "Routine antibiotic prophylaxis for the catheter's duration", isCorrect: false },
      { text: "Changing the catheter daily", isCorrect: false },
      { text: "Routine weekly urine cultures", isCorrect: false },
    ],
  },
  {
    stem: "Why is asymptomatic bacteriuria generally NOT treated with antibiotics?",
    topic: "Healthcare-Associated Infection",
    explanation:
      "Because treating it does not improve outcomes but does cause adverse effects, Clostridioides difficile infection and resistance. Bacteria in the urine are not by themselves an infection requiring treatment. The recognised exceptions are pregnancy and before certain urological procedures, where treatment does change outcomes.",
    choices: [
      { text: "Treatment causes harm without benefit, outside pregnancy and some urological procedures", isCorrect: true },
      { text: "Antibiotics cannot reach the urine", isCorrect: false },
      { text: "It always progresses to pyelonephritis regardless", isCorrect: false },
      { text: "Cultures are unreliable in all cases", isCorrect: false },
    ],
  },
  {
    stem: "A patient with suspected pulmonary tuberculosis is admitted. Which precautions are required?",
    topic: "Healthcare-Associated Infection",
    explanation:
      "Airborne precautions — a single room with appropriate ventilation and a fitted respirator for staff, since the organism is transmitted in droplet nuclei that remain suspended. A surgical mask on the carer is insufficient. Placing such a patient in an open bay before the diagnosis is considered is a common and consequential error.",
    choices: [
      { text: "Airborne precautions with a respirator and appropriate room ventilation", isCorrect: true },
      { text: "Standard precautions alone in an open bay", isCorrect: false },
      { text: "Contact precautions with gloves only", isCorrect: false },
      { text: "No precautions once treatment has begun", isCorrect: false },
    ],
  },
  {
    stem: "When should surgical antibiotic prophylaxis be given for maximum benefit?",
    topic: "Healthcare-Associated Infection",
    explanation:
      "Shortly before incision, so that tissue concentrations are adequate at the moment of contamination. Given too early or after closure it achieves little, and continuing it for days afterwards adds resistance and toxicity without reducing surgical site infection. Timing, not duration, is what makes prophylaxis work.",
    choices: [
      { text: "Shortly before incision, so tissue levels are adequate during surgery", isCorrect: true },
      { text: "Several days before the operation", isCorrect: false },
      { text: "Only after the wound is closed", isCorrect: false },
      { text: "Continued for a week postoperatively as standard", isCorrect: false },
    ],
  },
  {
    stem: "What is the immediate first step after a needlestick injury from a used device?",
    topic: "Healthcare-Associated Infection",
    explanation:
      "Encourage bleeding, wash the site with soap and water, then report it at once so risk can be assessed and any post-exposure prophylaxis started within the window in which it works. Time is the limiting factor, so the injury is reported immediately rather than at the end of the shift.",
    choices: [
      { text: "Encourage bleeding, wash the site, and report immediately for risk assessment", isCorrect: true },
      { text: "Apply a plaster and report at the end of the shift", isCorrect: false },
      { text: "Squeeze out as much tissue fluid as possible and take no further action", isCorrect: false },
      { text: "Start a full antibiotic course and nothing else", isCorrect: false },
    ],
  },

  /* ---- Immunisation & Prophylaxis ---- */
  {
    stem: "Why are live attenuated vaccines generally avoided in significant immunosuppression?",
    topic: "Immunisation & Prophylaxis",
    explanation:
      "Because the attenuated organism can replicate unchecked and cause disease in someone unable to contain it. Inactivated and subunit vaccines carry no such risk and are preferred, though the immune response to them may be blunted. Timing vaccination before planned immunosuppression is therefore worth arranging where possible.",
    choices: [
      { text: "The attenuated organism may replicate and cause disease", isCorrect: true },
      { text: "They are always completely ineffective", isCorrect: false },
      { text: "They contain live bacteria only, never viruses", isCorrect: false },
      { text: "They provoke an excessive antibody response", isCorrect: false },
    ],
  },
  {
    stem: "What is herd immunity?",
    topic: "Immunisation & Prophylaxis",
    explanation:
      "Indirect protection of the unvaccinated that arises when enough of a population is immune to interrupt sustained transmission. It is what shields those who cannot be vaccinated — infants, the immunosuppressed — and it collapses once coverage falls below the threshold, which is why declining uptake produces outbreaks in previously controlled diseases.",
    choices: [
      { text: "Indirect protection of the unvaccinated once enough of the population is immune", isCorrect: true },
      { text: "Immunity inherited genetically within a population", isCorrect: false },
      { text: "Protection lasting exactly one year", isCorrect: false },
      { text: "Immunity conferred by a single vaccinated individual", isCorrect: false },
    ],
  },
  {
    stem: "Why does the cold chain matter for vaccine programmes?",
    topic: "Immunisation & Prophylaxis",
    explanation:
      "Because vaccines lose potency if stored outside their temperature range, and a degraded vaccine looks identical to a good one. The result is a course that is documented as given but confers no protection — a silent failure that only becomes visible as an outbreak among the apparently vaccinated.",
    choices: [
      { text: "Temperature excursions silently destroy potency while the vaccine looks unchanged", isCorrect: true },
      { text: "Cold storage is only a legal formality", isCorrect: false },
      { text: "Freezing improves the potency of all vaccines", isCorrect: false },
      { text: "Vaccines are chemically indestructible", isCorrect: false },
    ],
  },
  {
    stem: "In managing a wound, what determines whether tetanus immunoglobulin is given in addition to vaccine?",
    topic: "Immunisation & Prophylaxis",
    explanation:
      "The combination of wound risk and the patient's immunisation history. Immunoglobulin supplies immediate passive protection for a high-risk wound in someone incompletely immunised or of unknown status, because the vaccine takes time to generate a response. A fully immunised patient with a clean minor wound needs neither.",
    choices: [
      { text: "Wound risk together with immunisation history", isCorrect: true },
      { text: "The patient's age alone", isCorrect: false },
      { text: "It is given to everyone with any wound", isCorrect: false },
      { text: "It is never used alongside vaccine", isCorrect: false },
    ],
  },
  {
    stem: "What is the principle behind post-exposure prophylaxis for HIV?",
    topic: "Immunisation & Prophylaxis",
    explanation:
      "Starting antiretrovirals as soon as possible after a significant exposure — ideally within hours and not beyond about 72 hours — to prevent the virus establishing infection, then continuing for the full recommended course. Effectiveness falls sharply with delay, so it is an urgent assessment rather than a routine clinic referral.",
    choices: [
      { text: "Antiretrovirals started urgently after exposure to prevent infection establishing", isCorrect: true },
      { text: "A vaccine given after exposure", isCorrect: false },
      { text: "Treatment begun only once seroconversion is confirmed", isCorrect: false },
      { text: "A single dose of antibiotic", isCorrect: false },
    ],
  },
];

/* ═══════════════ SEED ═══════════════ */

/**
 * Fisher-Yates. Needed because the correct answer is written first in every
 * question above — readable to author, obvious to a student if inserted in that
 * order.
 */
function shuffled<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Retries a write when the pooled connection drops. Real errors re-throw at once. */
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
  categorySlug: string;
  slug: string;
  title: string;
  description: string;
  kind: string;
  timeLimitSeconds: number | null;
  difficulty: string;
  questions: Q[];
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
            quizId: quiz.id,
            type: "SINGLE",
            stem: q.stem,
            topic: q.topic,
            explanation: q.explanation,
            points: 1,
            order: n,
            choices: { create: opts.map((c, i) => ({ text: c.text, isCorrect: c.isCorrect, order: i })) },
          },
        }),
      `question ${n + 1} of ${o.title}`
    );
  }

  console.log(`  ✓ ${o.title} — ${o.questions.length} questions (answers shuffled)`);
}

async function main() {
  console.log("Seeding Infectious Diseases…\n");
  const CAT = "cs-infectious-diseases";

  await seedSet({
    categorySlug: CAT,
    slug: "infectious-diseases-practice-set-1",
    title: "Infectious Diseases — Practice Set 1",
    description:
      "Thirty questions on recognising and resuscitating sepsis, HIV and its opportunistic infections, tuberculosis diagnosis and drug toxicity, malaria, and the principles of antimicrobial stewardship. Untimed, with a full rationale on every question.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Intermediate",
    questions: SET1,
  });

  await seedSet({
    categorySlug: CAT,
    slug: "infectious-diseases-practice-set-2",
    title: "Infectious Diseases — Practice Set 2",
    description:
      "Thirty fresh questions — no overlap with Set 1 — on the major bacterial and viral infections, tropical and parasitic disease, healthcare-associated infection and infection control, and immunisation and prophylaxis. Untimed.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Intermediate",
    questions: SET2,
  });

  await seedSet({
    categorySlug: CAT,
    slug: "infectious-diseases-exam-1",
    title: "Infectious Diseases — Timed Exam 1",
    description:
      "Thirty questions in 40 minutes covering sepsis, HIV, tuberculosis, malaria and stewardship. Feedback withheld until you submit.",
    kind: "EXAM",
    timeLimitSeconds: 40 * 60,
    difficulty: "Intermediate",
    questions: SET1,
  });

  await seedSet({
    categorySlug: CAT,
    slug: "infectious-diseases-exam-2",
    title: "Infectious Diseases — Timed Exam 2 (Comprehensive)",
    description:
      "All sixty questions in 75 minutes, covering the whole specialty. Sit this once both practice sets feel comfortable.",
    kind: "EXAM",
    timeLimitSeconds: 75 * 60,
    difficulty: "Advanced",
    questions: [...SET1, ...SET2],
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
