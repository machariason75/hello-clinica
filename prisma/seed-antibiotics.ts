/**
 * CONTENT WAVE 2 — Antibiotics & Antimicrobials
 *
 * 39 original exam-style questions with full rationales, covering mechanisms of
 * action, drug classes, resistance, adverse effects, and rational selection.
 *
 * Pharmacology is consistently where candidates score worst, and antimicrobials
 * are the highest-yield slice of it across NCLEX, USMLE and the pharmacy boards.
 *
 * ⚠ Antimicrobial guidance is local. Spectrum, resistance patterns and first-line
 * choices vary by country, by hospital, and over time. These questions test
 * principles that travel well (mechanism, class effects, characteristic toxicity)
 * rather than institution-specific protocols — but review against your local
 * formulary before promoting any of it as definitive. Everything is editable in
 * Admin → Question Bank.
 *
 * Run:  npx tsx prisma/seed-antibiotics.ts
 * Safe to re-run — replaces questions rather than duplicating them.
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Q = {
  stem: string;
  topic: string;
  explanation: string;
  choices: { text: string; isCorrect: boolean }[];
};

const ANTIBIOTICS: Q[] = [
  /* ---------- Mechanisms of action ---------- */
  {
    stem: "By what mechanism do penicillins and cephalosporins kill bacteria?",
    topic: "Mechanisms of Action",
    explanation:
      "Beta-lactams bind penicillin-binding proteins and inhibit the transpeptidase enzymes that cross-link peptidoglycan, so the cell wall cannot be completed. The result is osmotic lysis, which is why they are bactericidal and why they only work against organisms that are actively dividing and building wall.",
    choices: [
      { text: "They inhibit cross-linking of peptidoglycan in the cell wall", isCorrect: true },
      { text: "They bind the 30S ribosomal subunit and block protein synthesis", isCorrect: false },
      { text: "They inhibit DNA gyrase", isCorrect: false },
      { text: "They disrupt folate synthesis", isCorrect: false },
    ],
  },
  {
    stem: "Which antibiotic class acts on the 30S ribosomal subunit and is bactericidal?",
    topic: "Mechanisms of Action",
    explanation:
      "Aminoglycosides bind the 30S subunit, causing misreading of mRNA and irreversible inhibition of protein synthesis — which is why they are bactericidal despite targeting the ribosome. Tetracyclines also bind 30S but block tRNA attachment reversibly, making them bacteriostatic.",
    choices: [
      { text: "Aminoglycosides", isCorrect: true },
      { text: "Tetracyclines", isCorrect: false },
      { text: "Macrolides", isCorrect: false },
      { text: "Sulfonamides", isCorrect: false },
    ],
  },
  {
    stem: "Macrolides, clindamycin and linezolid share which broad mechanism?",
    topic: "Mechanisms of Action",
    explanation:
      "All three act on the 50S ribosomal subunit. Because they occupy overlapping sites, combining them offers no advantage and can be antagonistic. It also explains cross-resistance patterns — the erm gene that methylates the 50S binding site confers resistance to macrolides and clindamycin together.",
    choices: [
      { text: "Inhibition of protein synthesis at the 50S subunit", isCorrect: true },
      { text: "Inhibition of cell wall synthesis", isCorrect: false },
      { text: "Inhibition of DNA gyrase", isCorrect: false },
      { text: "Disruption of the cell membrane", isCorrect: false },
    ],
  },
  {
    stem: "Fluoroquinolones exert their antibacterial effect by inhibiting which targets?",
    topic: "Mechanisms of Action",
    explanation:
      "DNA gyrase (topoisomerase II) and topoisomerase IV. Blocking them prevents the supercoiling and separation required for DNA replication. Gyrase is the primary target in Gram-negative organisms, topoisomerase IV in Gram-positives.",
    choices: [
      { text: "DNA gyrase and topoisomerase IV", isCorrect: true },
      { text: "The 50S ribosomal subunit", isCorrect: false },
      { text: "Dihydrofolate reductase", isCorrect: false },
      { text: "Penicillin-binding proteins", isCorrect: false },
    ],
  },
  {
    stem: "Trimethoprim-sulfamethoxazole works by sequential blockade of which pathway?",
    topic: "Mechanisms of Action",
    explanation:
      "Folate synthesis. Sulfamethoxazole inhibits dihydropteroate synthase and trimethoprim inhibits dihydrofolate reductase — two consecutive steps, which is why the combination is synergistic. Humans obtain folate from the diet rather than synthesising it, which is what gives the drugs selectivity.",
    choices: [
      { text: "Bacterial folate synthesis, at two sequential steps", isCorrect: true },
      { text: "Cell wall peptidoglycan cross-linking", isCorrect: false },
      { text: "RNA polymerase", isCorrect: false },
      { text: "The 30S ribosomal subunit", isCorrect: false },
    ],
  },
  {
    stem: "Vancomycin prevents cell wall synthesis by binding which structure?",
    topic: "Mechanisms of Action",
    explanation:
      "It binds the D-alanyl-D-alanine terminus of the peptidoglycan precursor, physically blocking the transpeptidase from reaching its substrate. This differs from beta-lactams, which inhibit the enzyme itself — and it explains VRE resistance, where the terminus is altered to D-alanyl-D-lactate so vancomycin can no longer bind.",
    choices: [
      { text: "The D-alanyl-D-alanine terminus of the peptidoglycan precursor", isCorrect: true },
      { text: "Penicillin-binding protein 2a", isCorrect: false },
      { text: "The 50S ribosomal subunit", isCorrect: false },
      { text: "Bacterial RNA polymerase", isCorrect: false },
    ],
  },
  {
    stem: "Rifampicin acts on which bacterial target?",
    topic: "Mechanisms of Action",
    explanation:
      "DNA-dependent RNA polymerase, blocking transcription. Resistance arises rapidly through a single point mutation in the rpoB gene, which is why rifampicin is essentially never used alone for an established infection — it is combined with other agents.",
    choices: [
      { text: "DNA-dependent RNA polymerase", isCorrect: true },
      { text: "DNA gyrase", isCorrect: false },
      { text: "The 30S ribosomal subunit", isCorrect: false },
      { text: "Mycolic acid synthesis", isCorrect: false },
    ],
  },

  /* ---------- Resistance ---------- */
  {
    stem: "What is the molecular basis of methicillin resistance in Staphylococcus aureus?",
    topic: "Resistance",
    explanation:
      "The mecA gene encodes an altered penicillin-binding protein, PBP2a, which has very low affinity for beta-lactams. Because the target itself is changed rather than the drug being destroyed, adding a beta-lactamase inhibitor does not help — MRSA is resistant to essentially all beta-lactams.",
    choices: [
      { text: "The mecA gene encoding an altered PBP (PBP2a) with low beta-lactam affinity", isCorrect: true },
      { text: "Production of extended-spectrum beta-lactamase", isCorrect: false },
      { text: "An efflux pump that removes beta-lactams", isCorrect: false },
      { text: "Loss of outer membrane porins", isCorrect: false },
    ],
  },
  {
    stem: "Why does adding clavulanic acid restore the activity of amoxicillin against some resistant organisms?",
    topic: "Resistance",
    explanation:
      "Clavulanic acid is a beta-lactamase inhibitor. It has negligible antibacterial activity itself but binds and inactivates the enzyme that would otherwise hydrolyse the amoxicillin beta-lactam ring. It cannot overcome resistance caused by an altered target, which is why it is useless against MRSA.",
    choices: [
      { text: "It inhibits beta-lactamase, protecting amoxicillin from hydrolysis", isCorrect: true },
      { text: "It increases amoxicillin absorption from the gut", isCorrect: false },
      { text: "It broadens amoxicillin's binding to additional PBPs", isCorrect: false },
      { text: "It prevents renal excretion, raising drug levels", isCorrect: false },
    ],
  },
  {
    stem: "An organism is reported as an ESBL producer. What does this imply for treatment?",
    topic: "Resistance",
    explanation:
      "Extended-spectrum beta-lactamases hydrolyse penicillins, most cephalosporins and aztreonam, so these agents should not be relied on even where the laboratory reports apparent in-vitro susceptibility. Carbapenems are the usual treatment of choice for serious ESBL infection.",
    choices: [
      { text: "Penicillins and most cephalosporins are unreliable; carbapenems are usually preferred", isCorrect: true },
      { text: "Only vancomycin will be effective", isCorrect: false },
      { text: "The organism is resistant to all antibiotic classes", isCorrect: false },
      { text: "Standard cephalosporins remain fully reliable", isCorrect: false },
    ],
  },
  {
    stem: "Vancomycin-resistant enterococci achieve resistance by which change?",
    topic: "Resistance",
    explanation:
      "The peptidoglycan precursor terminus is altered from D-alanyl-D-alanine to D-alanyl-D-lactate, reducing vancomycin binding roughly a thousand-fold. The target has changed shape, so no amount of extra drug overcomes it — treatment requires a different class such as linezolid or daptomycin.",
    choices: [
      { text: "The precursor terminus changes from D-ala-D-ala to D-ala-D-lactate", isCorrect: true },
      { text: "Production of a vancomycin-hydrolysing enzyme", isCorrect: false },
      { text: "Acquisition of the mecA gene", isCorrect: false },
      { text: "Thickening of the outer membrane", isCorrect: false },
    ],
  },
  {
    stem: "Which prescribing practice most directly drives antimicrobial resistance?",
    topic: "Stewardship",
    explanation:
      "Unnecessarily broad-spectrum therapy continued when a narrower agent would do. Broad agents exert selection pressure across many organisms including commensals. Good stewardship means starting broad when the patient is unwell and unknown, then de-escalating promptly once cultures return.",
    choices: [
      { text: "Continuing broad-spectrum therapy when culture results allow narrowing", isCorrect: true },
      { text: "Taking cultures before the first antibiotic dose", isCorrect: false },
      { text: "Using the shortest effective course length", isCorrect: false },
      { text: "Switching from IV to oral once the patient improves", isCorrect: false },
    ],
  },
  {
    stem: "Why should blood cultures ideally be taken before the first dose of antibiotics in suspected sepsis?",
    topic: "Stewardship",
    explanation:
      "Antibiotics can sterilise cultures within a very short time, losing the chance to identify the organism and its sensitivities. That said, obtaining cultures must not delay antibiotics in sepsis — the sequence is to draw cultures and give antibiotics with minimal delay, not to postpone treatment.",
    choices: [
      { text: "Antibiotics can sterilise the sample, losing the organism and sensitivities", isCorrect: true },
      { text: "Antibiotics cause false-positive culture results", isCorrect: false },
      { text: "Cultures cannot be processed if any drug is present", isCorrect: false },
      { text: "It is a documentation requirement with no clinical impact", isCorrect: false },
    ],
  },

  /* ---------- Adverse effects ---------- */
  {
    stem: "A patient on gentamicin develops rising creatinine and reports ringing in the ears. Which toxicities does this represent?",
    topic: "Adverse Effects",
    explanation:
      "Nephrotoxicity and ototoxicity — the two characteristic aminoglycoside toxicities. Nephrotoxicity is usually reversible; ototoxicity often is not, because the damage is to cochlear and vestibular hair cells. This is why levels and renal function are monitored, and why courses are kept short.",
    choices: [
      { text: "Nephrotoxicity and ototoxicity", isCorrect: true },
      { text: "Hepatotoxicity and photosensitivity", isCorrect: false },
      { text: "Bone marrow suppression and neuropathy", isCorrect: false },
      { text: "Tendon rupture and QT prolongation", isCorrect: false },
    ],
  },
  {
    stem: "Which antibiotic class is associated with tendinopathy and tendon rupture, particularly of the Achilles?",
    topic: "Adverse Effects",
    explanation:
      "Fluoroquinolones. The risk is higher in older patients, in those on corticosteroids, and after organ transplantation. It can occur early in treatment and even after stopping, which is part of why routine fluoroquinolone use for uncomplicated infection is now discouraged.",
    choices: [
      { text: "Fluoroquinolones", isCorrect: true },
      { text: "Macrolides", isCorrect: false },
      { text: "Cephalosporins", isCorrect: false },
      { text: "Nitrofurantoin", isCorrect: false },
    ],
  },
  {
    stem: "Why are tetracyclines avoided in children under eight and in pregnancy?",
    topic: "Adverse Effects",
    explanation:
      "They chelate calcium and deposit in developing teeth and bone, causing permanent dental discolouration and potentially affecting bone growth. The same chelation explains why dairy products, antacids and iron reduce their absorption and should be separated from dosing.",
    choices: [
      { text: "They deposit in developing teeth and bone, causing permanent discolouration", isCorrect: true },
      { text: "They cause irreversible hearing loss in children", isCorrect: false },
      { text: "They are inactivated by fetal circulation", isCorrect: false },
      { text: "They cause neonatal hypoglycaemia", isCorrect: false },
    ],
  },
  {
    stem: "A patient develops profuse watery diarrhoea days after starting clindamycin. What is the most likely diagnosis?",
    topic: "Adverse Effects",
    explanation:
      "Clostridioides difficile colitis. Clindamycin is classically implicated, though broad-spectrum agents including cephalosporins and fluoroquinolones are now more common causes by volume. Treatment is oral vancomycin or fidaxomicin — and notably, intravenous vancomycin does not work, because it does not reach the colonic lumen.",
    choices: [
      { text: "Clostridioides difficile colitis", isCorrect: true },
      { text: "Simple antibiotic-associated osmotic diarrhoea", isCorrect: false },
      { text: "Drug-induced coeliac disease", isCorrect: false },
      { text: "Salmonella gastroenteritis", isCorrect: false },
    ],
  },
  {
    stem: "A patient taking metronidazole drinks alcohol and becomes flushed, nauseated and tachycardic. What has occurred?",
    topic: "Adverse Effects",
    explanation:
      "A disulfiram-like reaction. Metronidazole inhibits aldehyde dehydrogenase, so acetaldehyde accumulates. Patients should be told to avoid alcohol during treatment and for a couple of days afterwards — this is a counselling point that is frequently missed.",
    choices: [
      { text: "A disulfiram-like reaction from aldehyde dehydrogenase inhibition", isCorrect: true },
      { text: "An anaphylactic reaction to metronidazole", isCorrect: false },
      { text: "Serotonin syndrome", isCorrect: false },
      { text: "Acute alcohol poisoning unrelated to the drug", isCorrect: false },
    ],
  },
  {
    stem: "A patient on isoniazid develops numbness and tingling in the feet. Which supplement prevents this?",
    topic: "Adverse Effects",
    explanation:
      "Pyridoxine (vitamin B6). Isoniazid increases pyridoxine excretion, and deficiency produces a peripheral neuropathy. Prophylactic pyridoxine is given routinely to those at higher risk — including patients with diabetes, alcohol dependence, malnutrition, HIV, and in pregnancy.",
    choices: [
      { text: "Pyridoxine (vitamin B6)", isCorrect: true },
      { text: "Folic acid", isCorrect: false },
      { text: "Vitamin B12", isCorrect: false },
      { text: "Thiamine", isCorrect: false },
    ],
  },
  {
    stem: "A patient on rifampicin reports that their urine and tears have turned orange. What is the appropriate response?",
    topic: "Adverse Effects",
    explanation:
      "Reassure them — this is an expected, harmless effect of rifampicin. It is worth warning patients in advance, and specifically that soft contact lenses can be permanently stained. Stopping treatment for this reason would be a significant and avoidable error.",
    choices: [
      { text: "Reassure them; it is harmless and expected, but warn about contact lenses", isCorrect: true },
      { text: "Stop rifampicin immediately, as this indicates hepatotoxicity", isCorrect: false },
      { text: "Halve the dose and recheck in a week", isCorrect: false },
      { text: "Treat with intravenous fluids for rhabdomyolysis", isCorrect: false },
    ],
  },
  {
    stem: "Which antibiotic requires particular caution when combined with an SSRI because of serotonin syndrome risk?",
    topic: "Adverse Effects",
    explanation:
      "Linezolid, which is a weak monoamine oxidase inhibitor. Combined with serotonergic drugs it can precipitate serotonin syndrome. Linezolid also causes reversible myelosuppression — particularly thrombocytopenia — with courses beyond about two weeks.",
    choices: [
      { text: "Linezolid", isCorrect: true },
      { text: "Ceftriaxone", isCorrect: false },
      { text: "Nitrofurantoin", isCorrect: false },
      { text: "Amoxicillin", isCorrect: false },
    ],
  },
  {
    stem: "Which class carries a recognised risk of QT prolongation and requires care with other QT-prolonging drugs?",
    topic: "Adverse Effects",
    explanation:
      "Macrolides, and fluoroquinolones share this risk. Macrolides are also potent CYP3A4 inhibitors, so they raise levels of statins, warfarin and several others. Both effects make them a common source of clinically important interactions.",
    choices: [
      { text: "Macrolides", isCorrect: true },
      { text: "Penicillins", isCorrect: false },
      { text: "Aminoglycosides", isCorrect: false },
      { text: "Tetracyclines", isCorrect: false },
    ],
  },
  {
    stem: "A patient on trimethoprim-sulfamethoxazole develops hyperkalaemia. What explains this?",
    topic: "Adverse Effects",
    explanation:
      "Trimethoprim blocks epithelial sodium channels in the distal nephron, an action structurally similar to amiloride, which reduces potassium excretion. The risk is greatest in renal impairment and with ACE inhibitors, ARBs or potassium-sparing diuretics.",
    choices: [
      { text: "Trimethoprim blocks distal tubular sodium channels, like amiloride", isCorrect: true },
      { text: "Sulfamethoxazole causes acute tubular necrosis in all patients", isCorrect: false },
      { text: "The drug directly releases potassium from red cells", isCorrect: false },
      { text: "It stimulates aldosterone secretion", isCorrect: false },
    ],
  },
  {
    stem: "Which serious cutaneous reaction is classically associated with sulfonamides?",
    topic: "Adverse Effects",
    explanation:
      "Stevens-Johnson syndrome and toxic epidermal necrolysis. Any new rash with mucosal involvement, blistering, or systemic upset in a patient on a sulfonamide should prompt immediate cessation and urgent assessment — early recognition materially changes the outcome.",
    choices: [
      { text: "Stevens-Johnson syndrome / toxic epidermal necrolysis", isCorrect: true },
      { text: "Acanthosis nigricans", isCorrect: false },
      { text: "Seborrhoeic dermatitis", isCorrect: false },
      { text: "Lichen planus", isCorrect: false },
    ],
  },

  /* ---------- Clinical selection ---------- */
  {
    stem: "A patient has confirmed MRSA bacteraemia. Which agent is appropriate first-line?",
    topic: "Clinical Selection",
    explanation:
      "Vancomycin, with daptomycin as an alternative. MRSA is resistant to all beta-lactams because of the altered PBP2a target, so no penicillin or cephalosporin will work regardless of beta-lactamase inhibitors. Note that daptomycin must not be used for pneumonia — pulmonary surfactant inactivates it.",
    choices: [
      { text: "Vancomycin", isCorrect: true },
      { text: "Amoxicillin-clavulanate", isCorrect: false },
      { text: "Ceftriaxone", isCorrect: false },
      { text: "Flucloxacillin", isCorrect: false },
    ],
  },
  {
    stem: "Which agent should NOT be used to treat MRSA pneumonia, because it is inactivated in the lung?",
    topic: "Clinical Selection",
    explanation:
      "Daptomycin is bound and inactivated by pulmonary surfactant, so it fails in pneumonia despite good activity elsewhere against MRSA. Vancomycin or linezolid are used instead. This is a favourite exam point precisely because the drug is otherwise appropriate for MRSA.",
    choices: [
      { text: "Daptomycin", isCorrect: true },
      { text: "Linezolid", isCorrect: false },
      { text: "Vancomycin", isCorrect: false },
      { text: "Ceftaroline", isCorrect: false },
    ],
  },
  {
    stem: "Which agent has reliable anti-pseudomonal activity?",
    topic: "Clinical Selection",
    explanation:
      "Piperacillin-tazobactam. Ceftazidime, cefepime, meropenem, ciprofloxacin and the aminoglycosides also cover Pseudomonas. Note the exception among carbapenems: ertapenem does NOT cover Pseudomonas, which is a common and clinically consequential trap.",
    choices: [
      { text: "Piperacillin-tazobactam", isCorrect: true },
      { text: "Ertapenem", isCorrect: false },
      { text: "Amoxicillin", isCorrect: false },
      { text: "Cefazolin", isCorrect: false },
    ],
  },
  {
    stem: "A patient with severe C. difficile colitis needs treatment. Which route and agent are appropriate?",
    topic: "Clinical Selection",
    explanation:
      "Oral vancomycin (or fidaxomicin). Vancomycin is not absorbed from the gut, which is precisely why it works here — it reaches high concentrations in the colonic lumen where the organism is. Intravenous vancomycin does not reach the lumen and is ineffective for C. difficile.",
    choices: [
      { text: "Oral vancomycin, because it stays in the gut lumen", isCorrect: true },
      { text: "Intravenous vancomycin", isCorrect: false },
      { text: "Oral gentamicin", isCorrect: false },
      { text: "Intravenous clindamycin", isCorrect: false },
    ],
  },
  {
    stem: "Which antibiotic is appropriate for anaerobic infection below the diaphragm, such as intra-abdominal sepsis?",
    topic: "Clinical Selection",
    explanation:
      "Metronidazole has excellent activity against obligate anaerobes including Bacteroides fragilis. It is usually combined with an agent covering aerobic Gram-negatives, since intra-abdominal infection is typically polymicrobial.",
    choices: [
      { text: "Metronidazole", isCorrect: true },
      { text: "Gentamicin", isCorrect: false },
      { text: "Nitrofurantoin", isCorrect: false },
      { text: "Azithromycin", isCorrect: false },
    ],
  },
  {
    stem: "Why is nitrofurantoin suitable for uncomplicated lower urinary tract infection but not for pyelonephritis?",
    topic: "Clinical Selection",
    explanation:
      "It concentrates in urine but achieves poor tissue and serum levels, so it cannot treat infection that has invaded renal parenchyma or entered the blood. It should also be avoided in significant renal impairment, where urinary concentrations become inadequate.",
    choices: [
      { text: "It concentrates in urine but achieves poor tissue and blood levels", isCorrect: true },
      { text: "It is inactivated by renal enzymes", isCorrect: false },
      { text: "It only covers Gram-positive organisms", isCorrect: false },
      { text: "It is too nephrotoxic for upper tract infection", isCorrect: false },
    ],
  },
  {
    stem: "A patient reports a childhood penicillin 'allergy' consisting of a mild non-blistering rash. How should this influence prescribing?",
    topic: "Clinical Selection",
    explanation:
      "Most reported penicillin allergy is not true IgE-mediated allergy, and label removal after assessment is encouraged because unnecessary avoidance leads to broader, less effective and more toxic alternatives. Cross-reactivity with modern cephalosporins is low. A history of anaphylaxis, however, mandates strict avoidance and specialist input.",
    choices: [
      { text: "Assess the history — most such labels are not true allergy and can often be delabelled", isCorrect: true },
      { text: "Avoid all beta-lactams permanently without further assessment", isCorrect: false },
      { text: "Ignore the history entirely and prescribe penicillin", isCorrect: false },
      { text: "Give penicillin with prophylactic adrenaline drawn up", isCorrect: false },
    ],
  },
  {
    stem: "A patient with anaphylaxis to penicillin needs treatment for a serious Gram-negative infection. Which beta-lactam has minimal cross-reactivity?",
    topic: "Clinical Selection",
    explanation:
      "Aztreonam, a monobactam. Its monocyclic structure means it does not share the side-chain determinants responsible for cross-reactivity with penicillins, so it can generally be used even in severe penicillin allergy. Its spectrum is limited to aerobic Gram-negatives.",
    choices: [
      { text: "Aztreonam", isCorrect: true },
      { text: "Meropenem", isCorrect: false },
      { text: "Cefepime", isCorrect: false },
      { text: "Piperacillin-tazobactam", isCorrect: false },
    ],
  },
  {
    stem: "Which agent is first-line for uncomplicated Streptococcus pyogenes pharyngitis in a non-allergic patient?",
    topic: "Clinical Selection",
    explanation:
      "Penicillin V. Group A streptococcus has never developed meaningful penicillin resistance, so the narrowest effective agent remains appropriate — a good illustration of the stewardship principle that broader is not better. Macrolides are reserved for genuine penicillin allergy.",
    choices: [
      { text: "Penicillin V", isCorrect: true },
      { text: "Vancomycin", isCorrect: false },
      { text: "Meropenem", isCorrect: false },
      { text: "Ciprofloxacin", isCorrect: false },
    ],
  },
  {
    stem: "Why is ceftriaxone useful for bacterial meningitis?",
    topic: "Clinical Selection",
    explanation:
      "Third-generation cephalosporins penetrate the inflamed meninges well and cover the common pathogens, including Streptococcus pneumoniae and Neisseria meningitidis. Vancomycin is often added for possible resistant pneumococcus, and amoxicillin where Listeria is a concern — in the very young, elderly, or immunocompromised.",
    choices: [
      { text: "It crosses inflamed meninges and covers the common pathogens", isCorrect: true },
      { text: "It is the only antibiotic active against Neisseria", isCorrect: false },
      { text: "It is not renally excreted", isCorrect: false },
      { text: "It reliably covers Listeria monocytogenes", isCorrect: false },
    ],
  },
  {
    stem: "Which organism must be specifically considered in suspected meningitis at the extremes of age or in immunosuppression, requiring added cover?",
    topic: "Clinical Selection",
    explanation:
      "Listeria monocytogenes, which is not covered by cephalosporins. Amoxicillin or ampicillin is added for neonates, adults over about 50, pregnant women and the immunocompromised. Forgetting this is a classic and serious omission.",
    choices: [
      { text: "Listeria monocytogenes", isCorrect: true },
      { text: "Streptococcus pneumoniae", isCorrect: false },
      { text: "Neisseria meningitidis", isCorrect: false },
      { text: "Haemophilus influenzae", isCorrect: false },
    ],
  },

  /* ---------- Pharmacokinetics & monitoring ---------- */
  {
    stem: "Why are vancomycin levels monitored during treatment?",
    topic: "Monitoring",
    explanation:
      "It has a narrow therapeutic index: too little fails to treat, too much causes nephrotoxicity. Trough levels (or AUC-guided dosing) balance the two, and renal function must be tracked because clearance is almost entirely renal.",
    choices: [
      { text: "It has a narrow therapeutic index with a real risk of nephrotoxicity", isCorrect: true },
      { text: "It is not absorbed orally", isCorrect: false },
      { text: "It causes irreversible hearing loss at any dose", isCorrect: false },
      { text: "Levels predict the emergence of MRSA", isCorrect: false },
    ],
  },
  {
    stem: "What is the rationale for once-daily rather than divided aminoglycoside dosing in most patients?",
    topic: "Monitoring",
    explanation:
      "Aminoglycosides are concentration-dependent killers with a prolonged post-antibiotic effect, so a single high peak maximises bacterial kill. The longer trough interval also allows renal tubular cells to clear accumulated drug, reducing nephrotoxicity.",
    choices: [
      { text: "Concentration-dependent killing with a post-antibiotic effect, plus lower toxicity", isCorrect: true },
      { text: "It is simply cheaper to administer", isCorrect: false },
      { text: "They are bacteriostatic and need only intermittent exposure", isCorrect: false },
      { text: "It avoids the need for any monitoring", isCorrect: false },
    ],
  },
  {
    stem: "Beta-lactam efficacy depends principally on which pharmacokinetic parameter?",
    topic: "Monitoring",
    explanation:
      "Time above the minimum inhibitory concentration. Beta-lactams kill in a time-dependent manner, so keeping the concentration above the MIC for a sufficient proportion of the dosing interval matters more than achieving a high peak. This is the reasoning behind extended or continuous infusions in severe infection.",
    choices: [
      { text: "The time the concentration remains above the MIC", isCorrect: true },
      { text: "The peak concentration achieved", isCorrect: false },
      { text: "The total daily dose regardless of interval", isCorrect: false },
      { text: "The volume of distribution", isCorrect: false },
    ],
  },
  {
    stem: "A patient improving on intravenous antibiotics is tolerating oral intake and haemodynamically stable. What does good practice suggest?",
    topic: "Stewardship",
    explanation:
      "Switch to an oral agent. Intravenous access carries infection and thrombophlebitis risk, costs more, and prolongs admission. Many oral antibiotics achieve excellent bioavailability, so IV therapy has no advantage once the patient can absorb reliably.",
    choices: [
      { text: "Switch to oral therapy once the patient is stable and absorbing", isCorrect: true },
      { text: "Complete the entire course intravenously regardless", isCorrect: false },
      { text: "Add a second intravenous agent for cover", isCorrect: false },
      { text: "Stop antibiotics entirely as soon as improvement begins", isCorrect: false },
    ],
  },
];

async function main() {
  console.log("Seeding Antibiotics & Antimicrobials…\n");

  const category = await prisma.quizCategory.findUnique({ where: { slug: "fs-antibiotics" } });
  if (!category) {
    console.log('✗ Category "fs-antibiotics" not found.');
    console.log("  Run this first:  npx tsx prisma/seed-medical-taxonomy.ts");
    return;
  }

  const sets = [
    {
      slug: "antibiotics-practice-set-1",
      title: "Antibiotics & Antimicrobials — Practice Set 1",
      description:
        "Thirty-nine questions on mechanisms of action, resistance, characteristic adverse effects, rational drug selection, and stewardship. Untimed, with a full rationale on every question.",
      kind: "PRACTICE",
      timeLimitSeconds: null,
      difficulty: "Intermediate",
    },
    {
      slug: "antibiotics-timed-exam-1",
      title: "Antibiotics & Antimicrobials — Timed Exam 1",
      description:
        "The same thirty-nine items under exam conditions: 45 minutes, feedback withheld until you submit.",
      kind: "EXAM",
      timeLimitSeconds: 45 * 60,
      difficulty: "Intermediate",
    },
  ];

  for (const set of sets) {
    const quiz = await prisma.quiz.upsert({
      where: { slug: set.slug },
      create: {
        slug: set.slug,
        title: set.title,
        description: set.description,
        categoryId: category.id,
        kind: set.kind,
        timeLimitSeconds: set.timeLimitSeconds,
        passThreshold: 70,
        difficulty: set.difficulty,
        published: true,
      },
      update: {
        title: set.title,
        description: set.description,
        categoryId: category.id,
        kind: set.kind,
        timeLimitSeconds: set.timeLimitSeconds,
      },
    });

    await prisma.question.deleteMany({ where: { quizId: quiz.id } });

    let order = 0;
    for (const q of ANTIBIOTICS) {
      await prisma.question.create({
        data: {
          quizId: quiz.id,
          type: "SINGLE",
          stem: q.stem,
          topic: q.topic,
          explanation: q.explanation,
          points: 1,
          order: order++,
          choices: {
            create: q.choices.map((c, i) => ({ text: c.text, isCorrect: c.isCorrect, order: i })),
          },
        },
      });
    }

    console.log(`  ✓ ${set.title} — ${ANTIBIOTICS.length} questions`);
  }

  console.log("\nDone. Editable in Admin → Question Bank.");
  console.log("⚠ Antimicrobial guidance is local — review against your formulary.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
