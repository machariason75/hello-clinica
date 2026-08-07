/**
 * PHARMACOLOGY — PRACTICE SET 5
 * Antimicrobials I — Antibacterials
 *
 * Difficulty: Intermediate. The antibacterial armamentarium organized so that
 * mechanism predicts spectrum, resistance, and toxicity: which step of cell-wall
 * or protein synthesis a drug blocks, how bacteria evade it, and the adverse
 * effect that names the class. Pairs with Set 6 (Antivirals, Antifungals,
 * Antiparasitics) to build Exam 3, the Antimicrobials Block.
 *
 * 73 questions across 12 topics:
 *   Penicillins · Cephalosporins · Other Cell-Wall Agents · Aminoglycosides ·
 *   Tetracyclines & Glycylcyclines · Macrolides & Lincosamides · Other Protein-
 *   Synthesis Inhibitors · Fluoroquinolones · Folate Antagonists ·
 *   Antimycobacterials · Resistance Mechanisms · Clinical Application
 *
 * Item mix: single-answer vignettes, select-all-that-apply, and true/false.
 * US generic drug names and conventional units throughout.
 */

import type { Q } from "../_lib/qbank";

export const PHARMACOLOGY_SET_5: Q[] = [
  /* ══════════════ PENICILLINS ══════════════ */
  {
    stem: "Penicillins and other beta-lactams kill bacteria by inhibiting which enzymatic step of cell-wall synthesis?",
    topic: "Penicillins",
    explanation:
      "Beta-lactams bind penicillin-binding proteins (transpeptidases) that cross-link peptidoglycan, so the wall cannot be completed and autolysins weaken it, killing dividing cells. Because human cells have no peptidoglycan wall, the target is selective. This is the basis of their bactericidal action.",
    choices: [
      { text: "Cross-linking of peptidoglycan by transpeptidases", isCorrect: true },
      { text: "Synthesis of the 30S ribosomal subunit" },
      { text: "DNA gyrase supercoiling" },
      { text: "Folate synthesis" },
      { text: "Beta-lactamase production" },
    ],
  },
  {
    stem: "A patient with a streptococcal infection is treated with penicillin G. This drug's spectrum is best described as:",
    topic: "Penicillins",
    explanation:
      "Penicillin G is most active against gram-positive organisms and some gram-negative cocci such as Neisseria, plus spirochetes like Treponema pallidum; it is degraded by beta-lactamases and by gastric acid, so it is given parenterally. Its narrow spectrum makes it ideal when the organism is susceptible.",
    choices: [
      { text: "Mainly gram-positive organisms, Neisseria, and spirochetes", isCorrect: true },
      { text: "Exclusively anaerobes" },
      { text: "Broad gram-negative rods including Pseudomonas" },
      { text: "Only atypical organisms like Mycoplasma" },
      { text: "Only methicillin-resistant staphylococci" },
    ],
  },
  {
    stem: "Why is nafcillin (an antistaphylococcal penicillin) resistant to many staphylococcal beta-lactamases?",
    topic: "Penicillins",
    explanation:
      "A bulky side chain sterically shields the beta-lactam ring from staphylococcal penicillinase, so nafcillin, oxacillin and dicloxacillin retain activity against penicillinase-producing staphylococci. They are inactive, however, against MRSA, which resists them via an altered penicillin-binding protein.",
    choices: [
      { text: "A bulky side chain blocks penicillinase access to the beta-lactam ring", isCorrect: true },
      { text: "They lack a beta-lactam ring" },
      { text: "They inhibit folate synthesis instead" },
      { text: "They are given only intravenously" },
      { text: "They bind the 50S ribosome" },
    ],
  },
  {
    stem: "Amoxicillin is often combined with clavulanate. What does clavulanate contribute?",
    topic: "Penicillins",
    explanation:
      "Clavulanate is a beta-lactamase inhibitor that protects amoxicillin from enzymatic destruction, extending its spectrum to many beta-lactamase-producing organisms. It has little antibacterial activity of its own; its role is to preserve the partner drug.",
    choices: [
      { text: "It inhibits beta-lactamase, protecting amoxicillin", isCorrect: true },
      { text: "It is a second antibiotic targeting the ribosome" },
      { text: "It improves oral absorption of amoxicillin" },
      { text: "It reduces renal clearance of amoxicillin" },
      { text: "It blocks efflux pumps" },
    ],
  },
  {
    stem: "Piperacillin is frequently chosen when coverage of which organism is required?",
    topic: "Penicillins",
    explanation:
      "Piperacillin is an antipseudomonal penicillin with extended gram-negative activity, and combined with tazobactam it covers many resistant gram-negatives plus anaerobes. Pseudomonas aeruginosa coverage is its defining feature among the penicillins.",
    choices: [
      { text: "Pseudomonas aeruginosa", isCorrect: true },
      { text: "Methicillin-resistant Staphylococcus aureus" },
      { text: "Mycobacterium tuberculosis" },
      { text: "Clostridioides difficile" },
      { text: "Candida albicans" },
    ],
  },
  {
    stem: "Which statements about penicillin hypersensitivity are correct? Select all that apply.",
    type: "MULTI",
    topic: "Penicillins",
    explanation:
      "Penicillin allergy ranges from a benign maculopapular rash to IgE-mediated anaphylaxis, and there is a small but real cross-reactivity with cephalosporins, greatest for first-generation agents. A documented anaphylactic reaction is a strong reason to avoid the whole beta-lactam class unless testing clarifies it. Penicillin allergy does not confer immunity to infection.",
    choices: [
      { text: "Reactions range from rash to anaphylaxis", isCorrect: true },
      { text: "There is partial cross-reactivity with cephalosporins", isCorrect: true },
      { text: "Prior anaphylaxis warrants avoiding the drug and caution with related beta-lactams", isCorrect: true },
      { text: "Allergy makes the patient immune to the target infection" },
      { text: "Allergy guarantees safe use of all carbapenems" },
    ],
  },
  {
    stem: "True or False: Penicillins are generally bactericidal and most effective against actively dividing bacteria.",
    type: "TRUE_FALSE",
    topic: "Penicillins",
    explanation:
      "True. Because they block cell-wall cross-linking, penicillins kill organisms that are actively building wall during division; dormant, non-dividing bacteria are relatively spared. This is why they are classed as bactericidal and time-dependent in their killing.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  /* ══════════════ CEPHALOSPORINS ══════════════ */
  {
    stem: "As cephalosporin generations advance from first to third, the general trend in spectrum is:",
    topic: "Cephalosporins",
    explanation:
      "Moving from first to later generations, gram-negative coverage broadens while some gram-positive activity is traded away, and later agents better resist many beta-lactamases and penetrate the CNS. Knowing this trend lets you predict a drug's role from its generation.",
    choices: [
      { text: "Increasing gram-negative coverage, with some loss of gram-positive activity", isCorrect: true },
      { text: "Increasing gram-positive coverage only" },
      { text: "Complete loss of all activity" },
      { text: "A shift toward antifungal activity" },
      { text: "Loss of the beta-lactam ring" },
    ],
  },
  {
    stem: "Cefazolin, a first-generation cephalosporin, is commonly used for which purpose?",
    topic: "Cephalosporins",
    explanation:
      "Cefazolin provides reliable activity against methicillin-susceptible staphylococci and streptococci and is a standard choice for surgical prophylaxis and skin infections. Its predictable gram-positive coverage and good tissue levels make it a workhorse first-generation agent.",
    choices: [
      { text: "Surgical prophylaxis and skin infections", isCorrect: true },
      { text: "Pseudomonas bloodstream infection" },
      { text: "Tuberculosis" },
      { text: "Meningitis caused by resistant pneumococcus" },
      { text: "Candidemia" },
    ],
  },
  {
    stem: "Ceftriaxone, a third-generation cephalosporin, is a first-line agent for which infection because it penetrates the CNS?",
    topic: "Cephalosporins",
    explanation:
      "Ceftriaxone achieves therapeutic cerebrospinal fluid levels and covers common meningeal pathogens, making it central to empiric bacterial meningitis therapy; it is also used for gonorrhea. Its once-daily dosing reflects a long half-life.",
    choices: [
      { text: "Bacterial meningitis", isCorrect: true },
      { text: "Dermatophyte infection" },
      { text: "Latent tuberculosis" },
      { text: "Oral candidiasis" },
      { text: "Pinworm infestation" },
    ],
  },
  {
    stem: "Which cephalosporin is notable for reliable antipseudomonal activity?",
    topic: "Cephalosporins",
    explanation:
      "Ceftazidime (and the newer ceftolozane-tazobactam) provides dependable Pseudomonas aeruginosa coverage; cefepime, a fourth-generation agent, also covers Pseudomonas while retaining gram-positive activity. Recognizing which cephalosporins reach Pseudomonas guides empiric therapy in at-risk patients.",
    choices: [
      { text: "Ceftazidime", isCorrect: true },
      { text: "Cefazolin" },
      { text: "Cephalexin" },
      { text: "Cefuroxime" },
      { text: "Cefadroxil" },
    ],
  },
  {
    stem: "Ceftaroline is distinctive among cephalosporins because it:",
    topic: "Cephalosporins",
    explanation:
      "Ceftaroline binds the altered penicillin-binding protein PBP2a, giving it activity against MRSA — unusual for a beta-lactam. This makes it an option for resistant gram-positive infections while retaining broad activity typical of the class.",
    choices: [
      { text: "Has activity against MRSA", isCorrect: true },
      { text: "Is an antifungal cephalosporin" },
      { text: "Inhibits the ribosome rather than the cell wall" },
      { text: "Is only active against anaerobes" },
      { text: "Cannot be given to adults" },
    ],
  },
  {
    stem: "True or False: Certain cephalosporins with a methylthiotetrazole side chain can cause a disulfiram-like reaction with alcohol and increase bleeding risk.",
    type: "TRUE_FALSE",
    topic: "Cephalosporins",
    explanation:
      "True. Agents such as cefotetan carry a methylthiotetrazole group that inhibits aldehyde dehydrogenase (disulfiram-like reaction with alcohol) and interferes with vitamin K-dependent clotting, raising bleeding risk. Patients are counseled to avoid alcohol during and shortly after therapy.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  /* ══════════════ OTHER CELL-WALL AGENTS ══════════════ */
  {
    stem: "Carbapenems such as meropenem are valued clinically because they:",
    topic: "Other Cell-Wall Agents",
    explanation:
      "Carbapenems have an extremely broad spectrum, including many resistant gram-negative rods, anaerobes and gram-positives, and resist most beta-lactamases, so they are reserved for serious or multidrug-resistant infections. Overuse drives carbapenem resistance, which is why they are protected agents.",
    choices: [
      { text: "Have very broad activity and resist most beta-lactamases", isCorrect: true },
      { text: "Are narrow-spectrum agents for streptococci only" },
      { text: "Are antifungal drugs" },
      { text: "Inhibit protein synthesis" },
      { text: "Are used mainly for tuberculosis" },
    ],
  },
  {
    stem: "Imipenem is administered with cilastatin. What is the role of cilastatin?",
    topic: "Other Cell-Wall Agents",
    explanation:
      "Cilastatin inhibits renal dehydropeptidase I, which would otherwise degrade imipenem in the kidney, so it preserves the drug's level and reduces a nephrotoxic metabolite. It has no antibacterial activity itself. Imipenem can also lower the seizure threshold at high doses.",
    choices: [
      { text: "It inhibits renal dehydropeptidase that degrades imipenem", isCorrect: true },
      { text: "It is a second antibiotic for gram-positives" },
      { text: "It blocks beta-lactamase" },
      { text: "It improves oral absorption" },
      { text: "It prevents allergic reactions" },
    ],
  },
  {
    stem: "Aztreonam is a monobactam useful in a penicillin-allergic patient needing gram-negative coverage because it:",
    topic: "Other Cell-Wall Agents",
    explanation:
      "Aztreonam is active only against aerobic gram-negative rods, including Pseudomonas, and has negligible cross-reactivity with penicillins, so it is a safe beta-lactam option in penicillin-allergic patients. It has no gram-positive or anaerobic activity.",
    choices: [
      { text: "Covers aerobic gram-negatives with little penicillin cross-reactivity", isCorrect: true },
      { text: "Covers only gram-positive cocci" },
      { text: "Is a broad-spectrum antifungal" },
      { text: "Works by inhibiting the ribosome" },
      { text: "Is identical in structure to penicillin G" },
    ],
  },
  {
    stem: "Vancomycin inhibits cell-wall synthesis by a mechanism distinct from beta-lactams. It acts by:",
    topic: "Other Cell-Wall Agents",
    explanation:
      "Vancomycin binds the terminal D-alanyl-D-alanine of peptidoglycan precursors, blocking their incorporation into the wall; resistance arises when organisms change the terminus to D-alanyl-D-lactate. It is a mainstay for MRSA and other resistant gram-positives.",
    choices: [
      { text: "Binding the D-alanyl-D-alanine terminus of peptidoglycan precursors", isCorrect: true },
      { text: "Inhibiting transpeptidase directly like penicillin" },
      { text: "Blocking the 30S ribosome" },
      { text: "Inhibiting DNA gyrase" },
      { text: "Disrupting folate metabolism" },
    ],
  },
  {
    stem: "A rapid intravenous infusion of vancomycin can cause flushing of the upper body. This reaction is:",
    topic: "Other Cell-Wall Agents",
    explanation:
      "The infusion reaction (historically 'red man syndrome') is a non-allergic, histamine-mediated flushing that occurs with rapid infusion and resolves when the rate is slowed and antihistamines given. It is not a true IgE allergy, distinguishing it from anaphylaxis.",
    choices: [
      { text: "A non-allergic histamine release from rapid infusion", isCorrect: true },
      { text: "IgE-mediated anaphylaxis requiring lifelong avoidance" },
      { text: "A sign of hepatic failure" },
      { text: "Caused by beta-lactamase" },
      { text: "A dermatophyte infection" },
    ],
  },
  {
    stem: "Which agents disrupt or inhibit the bacterial cell wall or membrane rather than protein synthesis? Select all that apply.",
    type: "MULTI",
    topic: "Other Cell-Wall Agents",
    explanation:
      "Vancomycin (wall precursor binding), daptomycin (a lipopeptide that depolarizes the gram-positive membrane), and carbapenems (transpeptidase inhibition) all target the wall or membrane. Gentamicin and doxycycline instead inhibit the ribosome, so they are protein-synthesis inhibitors, not cell-wall agents.",
    choices: [
      { text: "Vancomycin", isCorrect: true },
      { text: "Daptomycin", isCorrect: true },
      { text: "Meropenem", isCorrect: true },
      { text: "Gentamicin" },
      { text: "Doxycycline" },
    ],
  },
  {
    stem: "Daptomycin should not be used to treat pneumonia because it:",
    topic: "Other Cell-Wall Agents",
    explanation:
      "Pulmonary surfactant inactivates daptomycin, so it is ineffective for pneumonia despite good activity against gram-positives elsewhere, such as in bacteremia and endocarditis. It can also raise creatine kinase, so myopathy is monitored.",
    choices: [
      { text: "Is inactivated by pulmonary surfactant", isCorrect: true },
      { text: "Cannot reach the bloodstream" },
      { text: "Only works against gram-negatives" },
      { text: "Is destroyed by gastric acid" },
      { text: "Has no activity against staphylococci" },
    ],
  },
  /* ══════════════ AMINOGLYCOSIDES ══════════════ */
  {
    stem: "Aminoglycosides such as gentamicin inhibit protein synthesis by binding which ribosomal subunit?",
    topic: "Aminoglycosides",
    explanation:
      "Aminoglycosides bind the 30S subunit, causing misreading of mRNA and blocking initiation; their uptake requires oxygen-dependent transport, so they are inactive against anaerobes. They are bactericidal and often combined with a cell-wall agent for synergy.",
    choices: [
      { text: "The 30S subunit, causing mRNA misreading", isCorrect: true },
      { text: "The 50S subunit, blocking translocation" },
      { text: "DNA gyrase" },
      { text: "RNA polymerase" },
      { text: "The cell wall" },
    ],
  },
  {
    stem: "The two dose-limiting toxicities characteristic of aminoglycosides are:",
    topic: "Aminoglycosides",
    explanation:
      "Nephrotoxicity (usually reversible acute tubular injury) and ototoxicity (which can be irreversible, affecting hearing and balance) are the hallmark aminoglycoside toxicities; risk rises with prolonged use, high troughs and other nephrotoxins. Levels are monitored to limit these effects.",
    choices: [
      { text: "Nephrotoxicity and ototoxicity", isCorrect: true },
      { text: "Hepatotoxicity and pancreatitis" },
      { text: "Gingival hyperplasia and lupus" },
      { text: "Pulmonary fibrosis and thyroid disease" },
      { text: "Photosensitivity and tendon rupture" },
    ],
  },
  {
    stem: "Aminoglycosides are frequently combined with a beta-lactam because:",
    topic: "Aminoglycosides",
    explanation:
      "The beta-lactam disrupts the cell wall, enhancing aminoglycoside uptake, so the combination is synergistic and bactericidal, useful in serious infections such as enterococcal endocarditis. This synergy is a classic principle of antibiotic combination therapy.",
    choices: [
      { text: "Cell-wall disruption enhances aminoglycoside entry, giving synergy", isCorrect: true },
      { text: "The beta-lactam prevents ototoxicity" },
      { text: "They share the same target, doubling potency" },
      { text: "The beta-lactam blocks renal excretion" },
      { text: "It converts the aminoglycoside to an oral drug" },
    ],
  },
  {
    stem: "Once-daily (extended-interval) aminoglycoside dosing is used partly because the drugs exhibit:",
    topic: "Aminoglycosides",
    explanation:
      "Aminoglycosides show concentration-dependent killing and a prolonged post-antibiotic effect, so a single high daily dose maximizes killing while a longer trough interval reduces toxic accumulation. This pharmacodynamic profile underlies extended-interval dosing.",
    choices: [
      { text: "Concentration-dependent killing with a post-antibiotic effect", isCorrect: true },
      { text: "Time-dependent killing requiring constant levels" },
      { text: "No relationship between concentration and effect" },
      { text: "Rapid development of tolerance within hours" },
      { text: "Activity only against anaerobes" },
    ],
  },
  /* ══════════════ TETRACYCLINES & GLYCYLCYCLINES ══════════════ */
  {
    stem: "Doxycycline inhibits bacterial protein synthesis by:",
    topic: "Tetracyclines & Glycylcyclines",
    explanation:
      "Tetracyclines bind the 30S subunit and block the aminoacyl-tRNA from entering the ribosomal A site, halting elongation; they are bacteriostatic and broad-spectrum, covering atypicals, rickettsiae and spirochetes. Bacterial efflux pumps are a common resistance route.",
    choices: [
      { text: "Blocking aminoacyl-tRNA binding to the 30S A site", isCorrect: true },
      { text: "Binding the 50S subunit to block translocation" },
      { text: "Inhibiting DNA gyrase" },
      { text: "Cross-linking peptidoglycan" },
      { text: "Inhibiting folate synthesis" },
    ],
  },
  {
    stem: "Why are tetracyclines avoided in young children and pregnancy?",
    topic: "Tetracyclines & Glycylcyclines",
    explanation:
      "Tetracyclines chelate calcium and deposit in developing bones and teeth, causing permanent tooth discoloration and possible growth effects, so they are avoided in pregnancy and in children under eight. This chelation also underlies interactions with dairy and antacids.",
    choices: [
      { text: "They deposit in developing teeth and bone, causing discoloration", isCorrect: true },
      { text: "They cause fetal deafness" },
      { text: "They are inactivated by fetal enzymes" },
      { text: "They trigger neural tube defects" },
      { text: "They cause maternal hyperkalemia" },
    ],
  },
  {
    stem: "A patient taking doxycycline should be counseled about which common adverse effect?",
    topic: "Tetracyclines & Glycylcyclines",
    explanation:
      "Photosensitivity is common with tetracyclines, so patients should use sun protection; gastrointestinal upset and esophageal irritation also occur, so the drug is taken with water and while upright. Absorption is reduced by calcium, iron and antacids.",
    choices: [
      { text: "Photosensitivity", isCorrect: true },
      { text: "Blue-gray skin from iodine" },
      { text: "Gingival hyperplasia" },
      { text: "Tendon rupture" },
      { text: "Gray baby syndrome" },
    ],
  },
  {
    stem: "Tigecycline, a glycylcycline, was developed to overcome which problem seen with older tetracyclines?",
    topic: "Tetracyclines & Glycylcyclines",
    explanation:
      "Tigecycline resists the efflux and ribosomal-protection mechanisms that cause tetracycline resistance, giving it broad activity against many multidrug-resistant organisms. It achieves low blood levels, however, so it is not used for bloodstream infections.",
    choices: [
      { text: "Common tetracycline resistance mechanisms", isCorrect: true },
      { text: "Poor gram-positive coverage" },
      { text: "Inactivation by gastric acid" },
      { text: "Lack of any anaerobic activity" },
      { text: "An inability to inhibit the ribosome" },
    ],
  },
  /* ══════════════ MACROLIDES & LINCOSAMIDES ══════════════ */
  {
    stem: "Macrolides such as azithromycin inhibit protein synthesis by binding:",
    topic: "Macrolides & Lincosamides",
    explanation:
      "Macrolides bind the 50S subunit and block translocation of the growing peptide, an action they share with clindamycin and chloramphenicol at overlapping sites. They are bacteriostatic and cover atypicals, making them useful in community-acquired pneumonia.",
    choices: [
      { text: "The 50S subunit, blocking translocation", isCorrect: true },
      { text: "The 30S subunit, causing misreading" },
      { text: "DNA gyrase" },
      { text: "The cell wall" },
      { text: "Dihydrofolate reductase" },
    ],
  },
  {
    stem: "A patient on a macrolide develops a prolonged QT interval. This class effect is important because:",
    topic: "Macrolides & Lincosamides",
    explanation:
      "Macrolides can prolong the QT interval and, combined with other QT-prolonging drugs or electrolyte disturbances, raise the risk of torsades de pointes. Erythromycin and clarithromycin also inhibit CYP3A4, causing many drug interactions, whereas azithromycin has fewer.",
    choices: [
      { text: "It can predispose to torsades de pointes", isCorrect: true },
      { text: "It causes permanent hearing loss" },
      { text: "It leads to tendon rupture" },
      { text: "It causes gray baby syndrome" },
      { text: "It always causes anaphylaxis" },
    ],
  },
  {
    stem: "Clindamycin is particularly useful for anaerobic infections above the diaphragm but carries a notable risk of:",
    topic: "Macrolides & Lincosamides",
    explanation:
      "Clindamycin is strongly associated with Clostridioides difficile colitis because it disrupts colonic flora; it also suppresses toxin production in severe streptococcal and staphylococcal infections. The C. difficile risk shapes its cautious use.",
    choices: [
      { text: "Clostridioides difficile colitis", isCorrect: true },
      { text: "Nephrolithiasis" },
      { text: "Optic neuritis" },
      { text: "Pulmonary fibrosis" },
      { text: "Hemolysis in G6PD deficiency" },
    ],
  },
  {
    stem: "True or False: Azithromycin has a long tissue half-life that allows short courses, such as a five-day regimen, to remain effective.",
    type: "TRUE_FALSE",
    topic: "Macrolides & Lincosamides",
    explanation:
      "True. Azithromycin concentrates in tissues and is released slowly, giving a prolonged half-life that supports short or single-dose regimens for certain infections. This pharmacokinetic feature improves adherence and distinguishes it from erythromycin.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  /* ══════════════ OTHER PROTEIN-SYNTHESIS INHIBITORS ══════════════ */
  {
    stem: "Linezolid, an oxazolidinone, is valuable against resistant gram-positives including MRSA and VRE because it:",
    topic: "Other Protein-Synthesis Inhibitors",
    explanation:
      "Linezolid binds the 50S subunit and prevents formation of the initiation complex, a unique step that avoids cross-resistance with other ribosomal inhibitors. Prolonged use risks myelosuppression and, with serotonergic drugs, serotonin syndrome, since it weakly inhibits monoamine oxidase.",
    choices: [
      { text: "Blocks formation of the ribosomal initiation complex", isCorrect: true },
      { text: "Inhibits DNA gyrase" },
      { text: "Cross-links peptidoglycan" },
      { text: "Blocks folate synthesis" },
      { text: "Depolarizes the cell membrane" },
    ],
  },
  {
    stem: "Chloramphenicol is now rarely used because of which serious toxicity?",
    topic: "Other Protein-Synthesis Inhibitors",
    explanation:
      "Chloramphenicol can cause dose-independent, potentially fatal aplastic anemia, and in neonates who cannot glucuronidate it, gray baby syndrome. These toxicities restrict it to situations with few alternatives despite its broad spectrum.",
    choices: [
      { text: "Aplastic anemia", isCorrect: true },
      { text: "Tendon rupture" },
      { text: "Nephrolithiasis" },
      { text: "Gingival hyperplasia" },
      { text: "Pulmonary fibrosis" },
    ],
  },
  {
    stem: "A newborn given chloramphenicol develops ashen-gray skin, hypotension and cyanosis. This reflects:",
    topic: "Other Protein-Synthesis Inhibitors",
    explanation:
      "Gray baby syndrome results from immature neonatal hepatic glucuronidation and reduced renal excretion, causing drug accumulation and cardiovascular collapse. It illustrates how developmental pharmacokinetics can turn an ordinary dose toxic.",
    choices: [
      { text: "Gray baby syndrome from impaired drug metabolism", isCorrect: true },
      { text: "An allergic reaction to the beta-lactam ring" },
      { text: "Serotonin syndrome" },
      { text: "Disulfiram-like reaction" },
      { text: "Red man syndrome" },
    ],
  },
  {
    stem: "Linezolid can interact dangerously with serotonergic drugs because it also:",
    topic: "Other Protein-Synthesis Inhibitors",
    explanation:
      "Linezolid has weak, nonselective monoamine oxidase inhibition, so combining it with SSRIs or other serotonergic agents can precipitate serotonin syndrome. This interaction requires caution and sometimes a washout, echoing the MAO-inhibitor rules from CNS pharmacology.",
    choices: [
      { text: "Weakly inhibits monoamine oxidase", isCorrect: true },
      { text: "Blocks dopamine reuptake" },
      { text: "Inhibits acetylcholinesterase" },
      { text: "Antagonizes GABA receptors" },
      { text: "Blocks sodium channels" },
    ],
  },
  /* ══════════════ FLUOROQUINOLONES ══════════════ */
  {
    stem: "Fluoroquinolones such as ciprofloxacin kill bacteria by inhibiting which enzymes?",
    topic: "Fluoroquinolones",
    explanation:
      "Fluoroquinolones inhibit DNA gyrase (topoisomerase II) and topoisomerase IV, blocking DNA supercoiling and replication; they are bactericidal and broad-spectrum. Ciprofloxacin is notably active against gram-negatives including Pseudomonas.",
    choices: [
      { text: "DNA gyrase and topoisomerase IV", isCorrect: true },
      { text: "The 30S ribosomal subunit" },
      { text: "Transpeptidase" },
      { text: "Dihydrofolate reductase" },
      { text: "RNA polymerase" },
    ],
  },
  {
    stem: "A characteristic and serious adverse effect of fluoroquinolones is:",
    topic: "Fluoroquinolones",
    explanation:
      "Fluoroquinolones can cause tendinopathy and tendon rupture, particularly of the Achilles and in older patients or those on corticosteroids; they also carry warnings for QT prolongation, aortic aneurysm, and CNS effects. These risks restrict them to when benefits outweigh harms.",
    choices: [
      { text: "Tendon rupture", isCorrect: true },
      { text: "Gingival hyperplasia" },
      { text: "Aplastic anemia" },
      { text: "Gray baby syndrome" },
      { text: "Red man syndrome" },
    ],
  },
  {
    stem: "Oral fluoroquinolone absorption is markedly reduced by concurrent intake of:",
    topic: "Fluoroquinolones",
    explanation:
      "Divalent and trivalent cations in antacids, dairy, iron and multivitamins chelate fluoroquinolones and impair their absorption, so these are separated in time from the antibiotic. This chelation interaction parallels that of the tetracyclines.",
    choices: [
      { text: "Antacids or supplements containing calcium, magnesium, or iron", isCorrect: true },
      { text: "Acidic fruit juices only" },
      { text: "A high-protein meal" },
      { text: "Caffeine" },
      { text: "Water taken with the dose" },
    ],
  },
  {
    stem: "Which fluoroquinolones have enhanced activity against Streptococcus pneumoniae and are called 'respiratory' fluoroquinolones? Select all that apply.",
    type: "MULTI",
    topic: "Fluoroquinolones",
    explanation:
      "Levofloxacin and moxifloxacin have improved gram-positive and atypical coverage and are used for respiratory infections such as community-acquired pneumonia. Ciprofloxacin has weaker pneumococcal activity and is favored for gram-negative and urinary infections. Nitrofurantoin is not a fluoroquinolone.",
    choices: [
      { text: "Levofloxacin", isCorrect: true },
      { text: "Moxifloxacin", isCorrect: true },
      { text: "Ciprofloxacin" },
      { text: "Nitrofurantoin" },
      { text: "Gentamicin" },
    ],
  },
  /* ══════════════ FOLATE ANTAGONISTS ══════════════ */
  {
    stem: "Trimethoprim-sulfamethoxazole blocks bacterial folate synthesis at two sequential steps. Sulfamethoxazole inhibits:",
    topic: "Folate Antagonists",
    explanation:
      "Sulfamethoxazole is a PABA analog that inhibits dihydropteroate synthase, while trimethoprim inhibits dihydrofolate reductase; blocking two sequential steps gives synergy and reduces resistance. Bacteria must synthesize folate, whereas humans obtain it from the diet, giving selectivity.",
    choices: [
      { text: "Dihydropteroate synthase", isCorrect: true },
      { text: "Dihydrofolate reductase" },
      { text: "DNA gyrase" },
      { text: "The 50S ribosome" },
      { text: "Transpeptidase" },
    ],
  },
  {
    stem: "A patient with G6PD deficiency is at particular risk from sulfonamides because they can cause:",
    topic: "Folate Antagonists",
    explanation:
      "Sulfonamides can precipitate oxidative hemolysis in G6PD-deficient patients; they also cause hypersensitivity reactions, including Stevens-Johnson syndrome, and can displace bilirubin, so they are avoided in late pregnancy and neonates. Adequate hydration reduces crystalluria.",
    choices: [
      { text: "Hemolytic anemia", isCorrect: true },
      { text: "Tendon rupture" },
      { text: "Optic neuritis" },
      { text: "Gray baby syndrome" },
      { text: "Disulfiram-like reaction" },
    ],
  },
  {
    stem: "Trimethoprim-sulfamethoxazole is the drug of choice for prophylaxis and treatment of which opportunistic infection?",
    topic: "Folate Antagonists",
    explanation:
      "Trimethoprim-sulfamethoxazole is first-line for Pneumocystis jirovecii pneumonia in immunocompromised patients, both for prophylaxis and treatment. It also covers many urinary and skin pathogens, but its role against Pneumocystis is a key tested fact.",
    choices: [
      { text: "Pneumocystis jirovecii pneumonia", isCorrect: true },
      { text: "Tuberculosis" },
      { text: "Candidemia" },
      { text: "Herpes encephalitis" },
      { text: "Malaria" },
    ],
  },
  {
    stem: "True or False: Trimethoprim can raise serum potassium and creatinine, effects worth noting when combined with other drugs that increase potassium.",
    type: "TRUE_FALSE",
    topic: "Folate Antagonists",
    explanation:
      "True. Trimethoprim blocks epithelial sodium channels like amiloride, causing hyperkalemia, and competitively inhibits creatinine secretion, raising measured creatinine without true renal injury. These effects matter alongside ACE inhibitors or potassium-sparing diuretics.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  /* ══════════════ ANTIMYCOBACTERIALS ══════════════ */
  {
    stem: "Isoniazid, a cornerstone of tuberculosis therapy, is associated with which vitamin deficiency and its neurologic effect?",
    topic: "Antimycobacterials",
    explanation:
      "Isoniazid increases excretion of pyridoxine (vitamin B6), causing peripheral neuropathy that is prevented by supplemental B6. It can also cause hepatotoxicity and a lupus-like reaction, and its metabolism varies with acetylator status.",
    choices: [
      { text: "Pyridoxine (B6) deficiency causing peripheral neuropathy", isCorrect: true },
      { text: "Vitamin K deficiency causing bleeding" },
      { text: "Vitamin D deficiency causing rickets" },
      { text: "Folate deficiency causing anemia" },
      { text: "Thiamine deficiency causing beriberi" },
    ],
  },
  {
    stem: "Rifampin frequently causes which harmless but alarming effect that patients must be warned about?",
    topic: "Antimycobacterials",
    explanation:
      "Rifampin turns body fluids — urine, sweat and tears — orange-red, which is harmless but startling; it is also a potent inducer of hepatic enzymes, reducing levels of many drugs including oral contraceptives. Counseling prevents alarm and unintended contraceptive failure.",
    choices: [
      { text: "Orange-red discoloration of body fluids", isCorrect: true },
      { text: "Blue-gray skin pigmentation" },
      { text: "Permanent tooth staining" },
      { text: "Yellow vision" },
      { text: "Black hairy tongue that is permanent" },
    ],
  },
  {
    stem: "Ethambutol requires monitoring for which specific toxicity during tuberculosis treatment?",
    topic: "Antimycobacterials",
    explanation:
      "Ethambutol can cause dose-related optic neuritis with reduced visual acuity and red-green color discrimination, so vision is checked during therapy. The effect is usually reversible if the drug is stopped promptly, making early detection important.",
    choices: [
      { text: "Optic neuritis with color vision changes", isCorrect: true },
      { text: "Tendon rupture" },
      { text: "Ototoxicity" },
      { text: "Aplastic anemia" },
      { text: "Nephrolithiasis" },
    ],
  },
  {
    stem: "Which drugs make up the standard initial four-drug regimen for active tuberculosis (the RIPE regimen)? Select all that apply.",
    type: "MULTI",
    topic: "Antimycobacterials",
    explanation:
      "The initial regimen is rifampin, isoniazid, pyrazinamide and ethambutol, given together to prevent resistance during the intensive phase. Vancomycin and azithromycin are not part of standard tuberculosis therapy.",
    choices: [
      { text: "Rifampin", isCorrect: true },
      { text: "Isoniazid", isCorrect: true },
      { text: "Pyrazinamide", isCorrect: true },
      { text: "Ethambutol", isCorrect: true },
      { text: "Vancomycin" },
    ],
  },
  /* ══════════════ RESISTANCE MECHANISMS ══════════════ */
  {
    stem: "The most common mechanism by which bacteria resist penicillins is:",
    topic: "Resistance Mechanisms",
    explanation:
      "Production of beta-lactamase enzymes that hydrolyze the beta-lactam ring is the predominant penicillin-resistance mechanism, countered by beta-lactamase inhibitors or stable agents. MRSA differs by using an altered penicillin-binding protein instead.",
    choices: [
      { text: "Enzymatic destruction by beta-lactamase", isCorrect: true },
      { text: "Ribosomal methylation" },
      { text: "Altered DNA gyrase" },
      { text: "Reduced folate uptake" },
      { text: "Efflux of aminoglycosides" },
    ],
  },
  {
    stem: "Methicillin-resistant Staphylococcus aureus (MRSA) resists nearly all beta-lactams because it:",
    topic: "Resistance Mechanisms",
    explanation:
      "MRSA carries the mecA gene encoding an altered penicillin-binding protein, PBP2a, with low affinity for beta-lactams, so ordinary penicillins and cephalosporins fail. This is why MRSA requires agents such as vancomycin, linezolid, daptomycin or ceftaroline.",
    choices: [
      { text: "Expresses an altered penicillin-binding protein (PBP2a)", isCorrect: true },
      { text: "Produces beta-lactamase only" },
      { text: "Pumps the drug out via efflux" },
      { text: "Methylates its ribosome" },
      { text: "Lacks a cell wall entirely" },
    ],
  },
  {
    stem: "Vancomycin resistance in enterococci (VRE) arises when the organism:",
    topic: "Resistance Mechanisms",
    explanation:
      "VRE alters the peptidoglycan terminus from D-alanyl-D-alanine to D-alanyl-D-lactate, drastically lowering vancomycin's binding affinity. Because vancomycin can no longer anchor to the precursor, wall synthesis proceeds despite the drug.",
    choices: [
      { text: "Changes its peptidoglycan terminus to D-alanyl-D-lactate", isCorrect: true },
      { text: "Produces beta-lactamase" },
      { text: "Methylates the 50S ribosome" },
      { text: "Deletes its cell wall" },
      { text: "Mutates DNA gyrase" },
    ],
  },
  {
    stem: "Which are recognized general mechanisms of antibiotic resistance? Select all that apply.",
    type: "MULTI",
    topic: "Resistance Mechanisms",
    explanation:
      "Bacteria resist antibiotics by enzymatic inactivation (beta-lactamases, aminoglycoside-modifying enzymes), modification of the drug target (altered PBPs, ribosomal methylation, gyrase mutations), and active efflux or decreased uptake. Increasing their own metabolic rate to outpace the drug is not a resistance mechanism.",
    choices: [
      { text: "Enzymatic inactivation of the drug", isCorrect: true },
      { text: "Modification of the drug target", isCorrect: true },
      { text: "Efflux pumps or decreased permeability", isCorrect: true },
      { text: "Increasing their metabolic rate to outgrow the drug" },
      { text: "Converting the antibiotic into a nutrient for growth" },
    ],
  },
  {
    stem: "True or False: Using combination therapy in tuberculosis is intended largely to prevent the emergence of resistant organisms.",
    type: "TRUE_FALSE",
    topic: "Resistance Mechanisms",
    explanation:
      "True. Multidrug regimens reduce the chance that spontaneously resistant mutants survive, because an organism resistant to one drug is usually killed by another. This principle drives combination therapy in tuberculosis and some other serious infections.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  /* ══════════════ CLINICAL APPLICATION ══════════════ */
  {
    stem: "Empiric therapy is best described as antibiotic treatment that is:",
    topic: "Clinical Application",
    explanation:
      "Empiric therapy is started before the causative organism and susceptibilities are known, based on the likely pathogens and local resistance patterns, and is then narrowed once cultures return (de-escalation). This sequence balances prompt treatment with stewardship.",
    choices: [
      { text: "Started before culture results, based on likely pathogens", isCorrect: true },
      { text: "Chosen only after full susceptibility testing" },
      { text: "Reserved for viral infections" },
      { text: "Always a single narrow-spectrum drug" },
      { text: "Given only as prophylaxis" },
    ],
  },
  {
    stem: "A patient develops watery diarrhea and colitis after a course of clindamycin. Which agents are appropriate treatment for Clostridioides difficile infection? Select all that apply.",
    type: "MULTI",
    topic: "Clinical Application",
    explanation:
      "Oral vancomycin and fidaxomicin are first-line for C. difficile colitis; oral metronidazole is an alternative in mild disease when preferred agents are unavailable. Intravenous vancomycin does not reach the colonic lumen and is ineffective, and clindamycin would worsen the condition.",
    choices: [
      { text: "Oral vancomycin", isCorrect: true },
      { text: "Fidaxomicin", isCorrect: true },
      { text: "Oral metronidazole", isCorrect: true },
      { text: "Intravenous vancomycin" },
      { text: "More clindamycin" },
    ],
  },
  {
    stem: "A time-dependent (rather than concentration-dependent) antibiotic such as a beta-lactam is dosed to maximize:",
    topic: "Clinical Application",
    explanation:
      "Beta-lactams kill best when the drug concentration stays above the minimum inhibitory concentration for a large fraction of the dosing interval, so frequent dosing or extended infusions are used. This contrasts with concentration-dependent aminoglycosides dosed for high peaks.",
    choices: [
      { text: "The time the concentration remains above the MIC", isCorrect: true },
      { text: "The single peak concentration" },
      { text: "The trough concentration only" },
      { text: "The rate of renal excretion" },
      { text: "The post-antibiotic effect alone" },
    ],
  },
  {
    stem: "Which oral antibiotic is preferred for an uncomplicated lower urinary tract infection because it concentrates in the urine with minimal systemic effect?",
    topic: "Clinical Application",
    explanation:
      "Nitrofurantoin achieves high urinary concentrations and is a first-line agent for uncomplicated cystitis; it is avoided in pyelonephritis and significant renal impairment because it does not reach adequate tissue or serum levels. Its niche is bladder infection.",
    choices: [
      { text: "Nitrofurantoin", isCorrect: true },
      { text: "Azithromycin" },
      { text: "Vancomycin" },
      { text: "Rifampin" },
      { text: "Clindamycin" },
    ],
  },
  {
    stem: "True or False: Metronidazole is effective against anaerobic bacteria and certain protozoa and can cause a disulfiram-like reaction with alcohol.",
    type: "TRUE_FALSE",
    topic: "Clinical Application",
    explanation:
      "True. Metronidazole covers anaerobes and protozoa such as Giardia and Trichomonas, and it inhibits aldehyde dehydrogenase, so alcohol causes an unpleasant disulfiram-like reaction. Patients are told to avoid alcohol during and shortly after therapy.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "The core principle of antibiotic stewardship most directly aims to:",
    topic: "Clinical Application",
    explanation:
      "Stewardship promotes using the right drug, dose and duration and narrowing therapy once cultures allow, in order to preserve effectiveness and slow resistance. It does not mean always using the broadest agent, which would accelerate resistance.",
    choices: [
      { text: "Optimize appropriate use to limit resistance and harm", isCorrect: true },
      { text: "Always use the broadest available antibiotic" },
      { text: "Treat every fever with antibiotics" },
      { text: "Extend therapy as long as possible" },
      { text: "Avoid culturing before treatment" },
    ],
  },
  /* ══════════════ ADDITIONAL ITEMS ══════════════ */
  {
    stem: "A bacteriostatic antibiotic differs from a bactericidal one in that it:",
    topic: "Resistance Mechanisms",
    explanation:
      "Bacteriostatic drugs inhibit growth and replication, relying on host immunity to clear the organism, whereas bactericidal drugs kill it directly. In immunocompromised patients or infections such as endocarditis and meningitis, bactericidal agents are generally preferred.",
    choices: [
      { text: "Inhibits growth, relying on host defenses to clear the organism", isCorrect: true },
      { text: "Always kills faster than bactericidal drugs" },
      { text: "Works only against fungi" },
      { text: "Cannot be used with any other antibiotic" },
      { text: "Has no role in immunocompetent patients" },
    ],
  },
  {
    stem: "The minimum inhibitory concentration (MIC) reported on a susceptibility panel represents:",
    topic: "Clinical Application",
    explanation:
      "The MIC is the lowest antibiotic concentration that visibly inhibits growth of the organism in vitro; it is interpreted against breakpoints to classify the isolate as susceptible, intermediate or resistant. A lower MIC alone does not always mean a clinically better drug.",
    choices: [
      { text: "The lowest concentration that inhibits visible growth in vitro", isCorrect: true },
      { text: "The dose that cures every patient" },
      { text: "The concentration that is always toxic to the host" },
      { text: "The maximum safe blood level" },
      { text: "The rate of renal clearance" },
    ],
  },
  {
    stem: "Which penicillin is combined with tazobactam to broaden coverage against beta-lactamase-producing organisms and Pseudomonas?",
    topic: "Penicillins",
    explanation:
      "Piperacillin-tazobactam pairs an antipseudomonal penicillin with a beta-lactamase inhibitor, giving very broad coverage of gram-negatives (including Pseudomonas), many gram-positives and anaerobes. It is a common empiric choice for serious hospital infections.",
    choices: [
      { text: "Piperacillin", isCorrect: true },
      { text: "Penicillin G" },
      { text: "Nafcillin" },
      { text: "Cephalexin" },
      { text: "Vancomycin" },
    ],
  },
  {
    stem: "A patient on vancomycin for MRSA bacteremia has therapy guided by drug levels because vancomycin:",
    topic: "Other Cell-Wall Agents",
    explanation:
      "Vancomycin has a relatively narrow therapeutic window and variable clearance, so levels (or an AUC target) are monitored to ensure efficacy while limiting nephrotoxicity, especially with concurrent nephrotoxins. This monitoring is standard for serious infections.",
    choices: [
      { text: "Has a narrow window and variable clearance with nephrotoxic potential", isCorrect: true },
      { text: "Is completely nontoxic at any dose" },
      { text: "Is only ever given orally" },
      { text: "Has no effect on the kidney" },
      { text: "Works by inhibiting the ribosome" },
    ],
  },
  {
    stem: "Streptomycin, an aminoglycoside, also has a role as a second-line agent against which organism?",
    topic: "Aminoglycosides",
    explanation:
      "Streptomycin is used in some drug-resistant tuberculosis regimens and historically for plague and tularemia. Its aminoglycoside toxicities — ototoxicity and nephrotoxicity — still apply, so it requires monitoring during prolonged use.",
    choices: [
      { text: "Mycobacterium tuberculosis", isCorrect: true },
      { text: "Candida albicans" },
      { text: "Influenza virus" },
      { text: "Aspergillus fumigatus" },
      { text: "Plasmodium falciparum" },
    ],
  },
  {
    stem: "Which antibiotic class is most appropriate for an atypical pneumonia caused by Mycoplasma pneumoniae?",
    topic: "Macrolides & Lincosamides",
    explanation:
      "Atypical organisms such as Mycoplasma lack a conventional cell wall, so cell-wall agents like penicillins are ineffective; macrolides (or tetracyclines and respiratory fluoroquinolones) that inhibit protein synthesis are used instead. This is a frequently tested mismatch of drug to pathogen.",
    choices: [
      { text: "Macrolides", isCorrect: true },
      { text: "Penicillins" },
      { text: "Cephalosporins" },
      { text: "Glycopeptides such as vancomycin" },
      { text: "Carbapenems" },
    ],
  },
  {
    stem: "Doxycycline is a first-line treatment for which tick-borne infection?",
    topic: "Tetracyclines & Glycylcyclines",
    explanation:
      "Doxycycline is first-line for Rocky Mountain spotted fever and other rickettsial diseases, as well as early Lyme disease and ehrlichiosis; it is used even in children for suspected Rocky Mountain spotted fever because the disease is life-threatening. Its broad activity against intracellular organisms explains this role.",
    choices: [
      { text: "Rocky Mountain spotted fever", isCorrect: true },
      { text: "Oral candidiasis" },
      { text: "Tuberculosis" },
      { text: "Pseudomonas pneumonia" },
      { text: "Influenza" },
    ],
  },
  {
    stem: "Which agents are considered reliable options for a serious MRSA infection? Select all that apply.",
    type: "MULTI",
    topic: "Resistance Mechanisms",
    explanation:
      "Vancomycin, linezolid, daptomycin (for non-pulmonary infection) and ceftaroline all retain activity against MRSA. Nafcillin and ordinary cephalosporins like cefazolin are inactivated by the altered penicillin-binding protein of MRSA, so they are not appropriate.",
    choices: [
      { text: "Vancomycin", isCorrect: true },
      { text: "Linezolid", isCorrect: true },
      { text: "Daptomycin", isCorrect: true },
      { text: "Nafcillin" },
      { text: "Cefazolin" },
    ],
  },
  {
    stem: "Metronidazole's antibacterial activity is limited to anaerobic organisms because it:",
    topic: "Other Protein-Synthesis Inhibitors",
    explanation:
      "Metronidazole must be reduced to reactive intermediates by anaerobic metabolism to damage microbial DNA, so it works only where oxygen is absent. This explains its use for anaerobic infections and certain protozoa, and its lack of aerobic activity.",
    choices: [
      { text: "Requires anaerobic reduction to form its active, DNA-damaging species", isCorrect: true },
      { text: "Only diffuses into aerobic cells" },
      { text: "Binds the 30S ribosome of aerobes" },
      { text: "Is inactivated by carbon dioxide" },
      { text: "Chelates oxygen directly" },
    ],
  },
  {
    stem: "A patient with a simple streptococcal pharyngitis and no allergies is best treated with:",
    topic: "Clinical Application",
    explanation:
      "Group A streptococcus remains uniformly susceptible to penicillin, so a narrow-spectrum penicillin (or amoxicillin) is first-line, sparing broader agents. Choosing the narrowest effective drug is a core stewardship principle.",
    choices: [
      { text: "Penicillin or amoxicillin", isCorrect: true },
      { text: "Vancomycin" },
      { text: "Meropenem" },
      { text: "Ciprofloxacin" },
      { text: "Linezolid" },
    ],
  },
  {
    stem: "True or False: Bacteriostatic drugs are generally preferred over bactericidal drugs for treating meningitis and endocarditis.",
    type: "TRUE_FALSE",
    topic: "Clinical Application",
    explanation:
      "False. In infections at sites with limited immune access, such as meningitis and endocarditis, bactericidal drugs are preferred because host defenses cannot be relied upon to clear a merely inhibited organism. This is the opposite of the statement.",
    choices: [{ text: "True" }, { text: "False", isCorrect: true }],
  },
  {
    stem: "Sulfonamides can displace which substance from albumin, an interaction important in neonates and patients on warfarin?",
    topic: "Folate Antagonists",
    explanation:
      "Sulfonamides displace bilirubin (risking kernicterus in neonates) and warfarin from albumin, raising free warfarin and bleeding risk. These protein-binding displacement interactions are a classic teaching point for the class.",
    choices: [
      { text: "Bilirubin and warfarin", isCorrect: true },
      { text: "Calcium and magnesium" },
      { text: "Sodium and potassium" },
      { text: "Glucose" },
      { text: "Iron" },
    ],
  },
  {
    stem: "Which cephalosporin generation most reliably crosses the blood-brain barrier for treating meningitis?",
    topic: "Cephalosporins",
    explanation:
      "Third-generation cephalosporins such as ceftriaxone and cefotaxime achieve therapeutic cerebrospinal fluid concentrations and are central to meningitis therapy; earlier generations penetrate the CNS poorly. This links generation to clinical use.",
    choices: [
      { text: "Third generation", isCorrect: true },
      { text: "First generation" },
      { text: "Only topical cephalosporins" },
      { text: "None can enter the CNS" },
      { text: "Only oral first-generation agents" },
    ],
  },
  {
    stem: "Rifampin is often avoided as monotherapy for active infection because:",
    topic: "Antimycobacterials",
    explanation:
      "Resistance to rifampin emerges rapidly when it is used alone due to single-step mutations in RNA polymerase, so it is combined with other agents. It may be used briefly as monotherapy only for specific prophylaxis situations, not for treating active disease alone.",
    choices: [
      { text: "Resistance develops rapidly with single-step mutations", isCorrect: true },
      { text: "It has no antibacterial activity alone" },
      { text: "It is inactivated by gastric acid" },
      { text: "It cannot enter bacteria" },
      { text: "It only works against fungi" },
    ],
  },
];
