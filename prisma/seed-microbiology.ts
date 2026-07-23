/**
 * CONTENT WAVE 4 — Microbiology
 *
 * 44 original exam-style questions across four sections:
 *
 *   fs-bacteriology   14
 *   fs-virology       12
 *   fs-parasitology   10
 *   fs-mycology        8
 *
 * Deliberately paired with Wave 2 (Antibiotics). The rationales point forward to
 * treatment wherever it is useful — so a student moves from "which organism" to
 * "which drug, and why that one" in a single line of reasoning rather than
 * learning the two as unconnected lists.
 *
 * ⚠ Epidemiology and first-line treatment vary by region and change over time.
 * These questions test organism biology, identification and mechanism, which
 * travel well — but review anything specific against local guidance before
 * promoting it as definitive. Everything is editable in Admin → Question Bank.
 *
 * Run:  npx tsx prisma/seed-microbiology.ts
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Q = {
  stem: string;
  topic: string;
  explanation: string;
  choices: { text: string; isCorrect: boolean }[];
};

/* ═══════════════ BACTERIOLOGY ═══════════════ */

const BACTERIOLOGY: Q[] = [
  {
    stem: "Why do Gram-positive bacteria retain the crystal violet stain while Gram-negative bacteria do not?",
    topic: "Staining & Identification",
    explanation:
      "Gram-positives have a thick peptidoglycan layer that traps the crystal violet–iodine complex when decolourised. Gram-negatives have a thin peptidoglycan layer beneath an outer membrane, which the alcohol dissolves, releasing the stain so they take up the counterstain. That outer membrane also explains why many Gram-negatives resist drugs that cannot cross it.",
    choices: [
      { text: "A thick peptidoglycan layer traps the stain complex", isCorrect: true },
      { text: "They possess an additional outer membrane", isCorrect: false },
      { text: "They lack a cell wall entirely", isCorrect: false },
      { text: "They produce a decolourising enzyme", isCorrect: false },
    ],
  },
  {
    stem: "A wound swab grows Gram-positive cocci in clusters that are catalase positive and coagulase positive. What is the organism?",
    topic: "Staining & Identification",
    explanation:
      "Staphylococcus aureus. Clusters plus catalase positivity places it among the staphylococci; coagulase positivity distinguishes S. aureus from the coagulase-negative staphylococci such as S. epidermidis. Streptococci, by contrast, form chains and are catalase negative.",
    choices: [
      { text: "Staphylococcus aureus", isCorrect: true },
      { text: "Staphylococcus epidermidis", isCorrect: false },
      { text: "Streptococcus pyogenes", isCorrect: false },
      { text: "Enterococcus faecalis", isCorrect: false },
    ],
  },
  {
    stem: "Which organism is the classic cause of acute rheumatic fever following untreated pharyngitis?",
    topic: "Gram-Positive Organisms",
    explanation:
      "Streptococcus pyogenes (group A strep). Antibodies to streptococcal M protein cross-react with cardiac tissue — molecular mimicry — producing carditis, arthritis and chorea weeks after the sore throat. Treating the pharyngitis with penicillin prevents it, which is the whole reason for treating a self-limiting infection.",
    choices: [
      { text: "Streptococcus pyogenes", isCorrect: true },
      { text: "Streptococcus pneumoniae", isCorrect: false },
      { text: "Staphylococcus aureus", isCorrect: false },
      { text: "Haemophilus influenzae", isCorrect: false },
    ],
  },
  {
    stem: "A patient develops meningitis. CSF Gram stain shows Gram-positive diplococci. Which organism is most likely?",
    topic: "Gram-Positive Organisms",
    explanation:
      "Streptococcus pneumoniae, the commonest cause of bacterial meningitis in adults. Neisseria meningitidis appears as Gram-NEGATIVE diplococci — the stain result distinguishes them immediately, and both are covered empirically by a third-generation cephalosporin.",
    choices: [
      { text: "Streptococcus pneumoniae", isCorrect: true },
      { text: "Neisseria meningitidis", isCorrect: false },
      { text: "Listeria monocytogenes", isCorrect: false },
      { text: "Haemophilus influenzae", isCorrect: false },
    ],
  },
  {
    stem: "Which organism produces a toxin that causes flaccid paralysis by blocking acetylcholine release?",
    topic: "Bacterial Toxins",
    explanation:
      "Clostridium botulinum. Botulinum toxin cleaves SNARE proteins, preventing acetylcholine release at the neuromuscular junction, so paralysis is flaccid and descending. Tetanus toxin from C. tetani does the opposite — it blocks inhibitory neurotransmitters, producing spastic paralysis.",
    choices: [
      { text: "Clostridium botulinum", isCorrect: true },
      { text: "Clostridium tetani", isCorrect: false },
      { text: "Corynebacterium diphtheriae", isCorrect: false },
      { text: "Bacillus cereus", isCorrect: false },
    ],
  },
  {
    stem: "What distinguishes an exotoxin from an endotoxin?",
    topic: "Bacterial Toxins",
    explanation:
      "Exotoxins are proteins actively secreted by living bacteria, often highly potent and specific, and they can be inactivated into toxoids for vaccines. Endotoxin is lipopolysaccharide in the Gram-negative outer membrane, released on lysis, causing the generalised inflammatory cascade of septic shock — and it cannot be made into a toxoid.",
    choices: [
      { text: "Exotoxins are secreted proteins; endotoxin is Gram-negative LPS released on lysis", isCorrect: true },
      { text: "Exotoxins come only from Gram-negatives", isCorrect: false },
      { text: "Endotoxins are always more potent", isCorrect: false },
      { text: "There is no meaningful difference", isCorrect: false },
    ],
  },
  {
    stem: "A patient develops watery diarrhoea after travel, with profuse 'rice-water' stool. Which mechanism is responsible?",
    topic: "Gram-Negative Organisms",
    explanation:
      "Vibrio cholerae toxin permanently activates adenylate cyclase via Gs, raising cyclic AMP and driving massive chloride and water secretion into the lumen. The organism is non-invasive, which is why the stool is watery rather than bloody, and why rehydration rather than antibiotics is the priority.",
    choices: [
      { text: "Cholera toxin raises cAMP, driving chloride and water secretion", isCorrect: true },
      { text: "Direct invasion and destruction of the mucosa", isCorrect: false },
      { text: "Neurotoxin-mediated ileus", isCorrect: false },
      { text: "Endotoxin-induced vasodilatation", isCorrect: false },
    ],
  },
  {
    stem: "Which organism is a urease producer strongly associated with peptic ulcer disease and gastric malignancy?",
    topic: "Gram-Negative Organisms",
    explanation:
      "Helicobacter pylori. Urease splits urea to ammonia, neutralising gastric acid locally and allowing survival in the stomach — which is also the basis of the urea breath test. It is classified as a carcinogen because of its link with gastric adenocarcinoma and MALT lymphoma.",
    choices: [
      { text: "Helicobacter pylori", isCorrect: true },
      { text: "Campylobacter jejuni", isCorrect: false },
      { text: "Escherichia coli", isCorrect: false },
      { text: "Salmonella typhi", isCorrect: false },
    ],
  },
  {
    stem: "Which organism is the commonest bacterial cause of gastroenteritis preceding Guillain-Barré syndrome?",
    topic: "Gram-Negative Organisms",
    explanation:
      "Campylobacter jejuni. Molecular mimicry between its lipo-oligosaccharide and peripheral nerve gangliosides triggers an autoimmune demyelinating neuropathy days to weeks later. It is the same principle as rheumatic fever after strep — the infection resolves, the antibody response does the damage.",
    choices: [
      { text: "Campylobacter jejuni", isCorrect: true },
      { text: "Shigella dysenteriae", isCorrect: false },
      { text: "Vibrio cholerae", isCorrect: false },
      { text: "Clostridioides difficile", isCorrect: false },
    ],
  },
  {
    stem: "A ventilated ICU patient develops pneumonia with a Gram-negative rod that is oxidase positive and produces a green pigment. Which organism?",
    topic: "Gram-Negative Organisms",
    explanation:
      "Pseudomonas aeruginosa. Oxidase positivity and pyocyanin pigment are characteristic. It thrives in moist hospital environments, is intrinsically resistant to many agents, and requires specifically anti-pseudomonal therapy — notably NOT ertapenem, which lacks pseudomonal cover despite being a carbapenem.",
    choices: [
      { text: "Pseudomonas aeruginosa", isCorrect: true },
      { text: "Klebsiella pneumoniae", isCorrect: false },
      { text: "Escherichia coli", isCorrect: false },
      { text: "Proteus mirabilis", isCorrect: false },
    ],
  },
  {
    stem: "Why does Mycobacterium tuberculosis stain poorly with Gram stain and require Ziehl-Neelsen instead?",
    topic: "Mycobacteria",
    explanation:
      "Its cell wall is rich in mycolic acid, a waxy lipid that resists conventional staining and acid-alcohol decolourisation — hence 'acid-fast'. That same waxy wall makes the organism slow-growing, resistant to drying and disinfectants, and explains why treatment takes months rather than days.",
    choices: [
      { text: "A waxy mycolic acid cell wall resists conventional staining", isCorrect: true },
      { text: "It lacks a cell wall entirely", isCorrect: false },
      { text: "It is an obligate intracellular organism", isCorrect: false },
      { text: "It produces a stain-degrading enzyme", isCorrect: false },
    ],
  },
  {
    stem: "Why is tuberculosis always treated with multiple drugs simultaneously?",
    topic: "Mycobacteria",
    explanation:
      "Spontaneous resistance mutations arise at a predictable rate, and the bacterial load in active TB is large enough that resistant organisms to any single drug already exist. The chance of an organism being simultaneously resistant to several unrelated drugs is vanishingly small, so combination therapy suppresses resistance. Monotherapy reliably creates resistance.",
    choices: [
      { text: "To prevent selection of pre-existing resistant mutants", isCorrect: true },
      { text: "Because each drug alone is completely inactive", isCorrect: false },
      { text: "To shorten treatment to under two weeks", isCorrect: false },
      { text: "To reduce the cost of therapy", isCorrect: false },
    ],
  },
  {
    stem: "A patient with a prosthetic joint infection grows a coagulase-negative staphylococcus. What virulence property makes this hard to eradicate?",
    topic: "Virulence Factors",
    explanation:
      "Biofilm formation on the prosthetic surface. Bacteria within a biofilm are metabolically slowed and physically shielded, so they tolerate antibiotic concentrations many times higher than the planktonic MIC. This is why device infections usually require removal of the hardware alongside antibiotics.",
    choices: [
      { text: "Biofilm formation on the prosthetic surface", isCorrect: true },
      { text: "Production of exotoxin A", isCorrect: false },
      { text: "Acid-fast cell wall", isCorrect: false },
      { text: "Spore formation", isCorrect: false },
    ],
  },
  {
    stem: "Which structure allows Clostridioides difficile and Bacillus species to survive alcohol hand rub and prolonged environmental exposure?",
    topic: "Virulence Factors",
    explanation:
      "The endospore — a dormant, dehydrated, highly resistant form. Alcohol gels do not kill spores, which is why soap-and-water handwashing and chlorine-based cleaning are required for C. difficile. Getting this wrong is a genuine cause of ward outbreaks.",
    choices: [
      { text: "The endospore", isCorrect: true },
      { text: "The polysaccharide capsule", isCorrect: false },
      { text: "Flagella", isCorrect: false },
      { text: "Pili", isCorrect: false },
    ],
  },
];

/* ═══════════════ VIROLOGY ═══════════════ */

const VIROLOGY: Q[] = [
  {
    stem: "Why are antibiotics ineffective against viral infections?",
    topic: "Viral Structure",
    explanation:
      "Antibiotics target structures and processes unique to bacteria — cell wall synthesis, bacterial ribosomes, bacterial enzymes. Viruses have none of these; they replicate using host cell machinery. Prescribing antibiotics for a viral illness offers no benefit while driving resistance and exposing the patient to adverse effects.",
    choices: [
      { text: "Viruses lack the bacterial structures antibiotics target", isCorrect: true },
      { text: "Viruses are too small for antibiotics to reach", isCorrect: false },
      { text: "Viruses rapidly develop antibiotic resistance", isCorrect: false },
      { text: "Antibiotics are inactivated by viral enzymes", isCorrect: false },
    ],
  },
  {
    stem: "Which enzyme, unique to retroviruses, converts viral RNA into DNA?",
    topic: "Viral Replication",
    explanation:
      "Reverse transcriptase. It transcribes the RNA genome into DNA, which integrase then inserts into the host genome — making infection permanent. It is also error-prone, generating the diversity behind HIV drug resistance, and it is the target of the NRTI and NNRTI drug classes.",
    choices: [
      { text: "Reverse transcriptase", isCorrect: true },
      { text: "DNA polymerase", isCorrect: false },
      { text: "Neuraminidase", isCorrect: false },
      { text: "Protease", isCorrect: false },
    ],
  },
  {
    stem: "Which cell does HIV principally infect, and what is the consequence?",
    topic: "HIV",
    explanation:
      "The CD4+ T helper cell, using CD4 as receptor with CCR5 or CXCR4 as co-receptor. Progressive CD4 depletion cripples cell-mediated immunity, which is why the opportunistic infections of AIDS are those normally controlled by T cells — Pneumocystis, cryptococcus, mycobacteria, CMV.",
    choices: [
      { text: "CD4+ T helper cells, causing loss of cell-mediated immunity", isCorrect: true },
      { text: "B lymphocytes, causing antibody deficiency", isCorrect: false },
      { text: "Neutrophils, causing bacterial susceptibility", isCorrect: false },
      { text: "Erythrocytes, causing anaemia", isCorrect: false },
    ],
  },
  {
    stem: "At which CD4 count does Pneumocystis jirovecii pneumonia prophylaxis become indicated in HIV?",
    topic: "HIV",
    explanation:
      "Below roughly 200 cells/µL. Co-trimoxazole is used, and it conveniently also covers toxoplasmosis. The CD4 count predicts which opportunistic infections become likely, which is why it guides prophylaxis while the viral load guides treatment response.",
    choices: [
      { text: "Below about 200 cells/µL", isCorrect: true },
      { text: "Below 800 cells/µL", isCorrect: false },
      { text: "Below 50 cells/µL only", isCorrect: false },
      { text: "Prophylaxis is never indicated", isCorrect: false },
    ],
  },
  {
    stem: "Which hepatitis virus is transmitted by the faecal-oral route and does not cause chronic infection?",
    topic: "Hepatitis Viruses",
    explanation:
      "Hepatitis A. It is self-limiting and confers lifelong immunity, with a vaccine available. Hepatitis B and C are blood-borne and can become chronic, carrying risk of cirrhosis and hepatocellular carcinoma. Hepatitis E is also faecal-oral and is particularly dangerous in pregnancy.",
    choices: [
      { text: "Hepatitis A", isCorrect: true },
      { text: "Hepatitis B", isCorrect: false },
      { text: "Hepatitis C", isCorrect: false },
      { text: "Hepatitis D", isCorrect: false },
    ],
  },
  {
    stem: "A patient is HBsAg negative, anti-HBs positive and anti-HBc negative. What does this indicate?",
    topic: "Hepatitis Viruses",
    explanation:
      "Vaccination. The vaccine contains surface antigen only, so it generates anti-HBs without anti-HBc. Past natural infection would show anti-HBc positive as well, because core antigen is only encountered during real infection. That single marker distinguishes vaccine immunity from resolved infection.",
    choices: [
      { text: "Immunity from vaccination", isCorrect: true },
      { text: "Chronic active hepatitis B", isCorrect: false },
      { text: "Resolved natural infection", isCorrect: false },
      { text: "Acute hepatitis B infection", isCorrect: false },
    ],
  },
  {
    stem: "Why does influenza require a new vaccine each year?",
    topic: "Influenza",
    explanation:
      "Antigenic drift — gradual point mutations in haemagglutinin and neuraminidase mean prior antibodies bind less well each season. Antigenic shift, the reassortment of whole gene segments between strains, is a separate and rarer event that can produce a pandemic strain against which there is little population immunity.",
    choices: [
      { text: "Antigenic drift progressively alters surface proteins", isCorrect: true },
      { text: "The vaccine loses potency in storage", isCorrect: false },
      { text: "Immunity from vaccination lasts only four weeks", isCorrect: false },
      { text: "The virus develops resistance to the vaccine", isCorrect: false },
    ],
  },
  {
    stem: "Which virus establishes latency in dorsal root ganglia and reactivates as shingles?",
    topic: "Herpesviruses",
    explanation:
      "Varicella-zoster virus. Primary infection is chickenpox; the virus then persists in sensory ganglia and reactivates decades later in a dermatomal distribution. Reactivation is commoner with age and immunosuppression, reflecting waning cell-mediated immunity.",
    choices: [
      { text: "Varicella-zoster virus", isCorrect: true },
      { text: "Epstein-Barr virus", isCorrect: false },
      { text: "Cytomegalovirus", isCorrect: false },
      { text: "Human herpesvirus 6", isCorrect: false },
    ],
  },
  {
    stem: "A teenager has fever, pharyngitis, lymphadenopathy and atypical lymphocytes on film. Which virus is responsible?",
    topic: "Herpesviruses",
    explanation:
      "Epstein-Barr virus causing infectious mononucleosis. The atypical lymphocytes are reactive CD8+ T cells responding to infected B cells. Splenic rupture is the feared complication, hence advice to avoid contact sport — and giving amoxicillin classically produces a florid rash.",
    choices: [
      { text: "Epstein-Barr virus", isCorrect: true },
      { text: "Influenza A", isCorrect: false },
      { text: "Measles virus", isCorrect: false },
      { text: "Parvovirus B19", isCorrect: false },
    ],
  },
  {
    stem: "Which viral infection in early pregnancy carries a high risk of congenital deafness, cataracts and cardiac defects?",
    topic: "Congenital Infections",
    explanation:
      "Rubella. First-trimester infection carries the greatest teratogenic risk, producing the classic triad of sensorineural deafness, cataracts and patent ductus arteriosus. It is entirely vaccine-preventable, which is why rubella immunity is checked in antenatal screening.",
    choices: [
      { text: "Rubella", isCorrect: true },
      { text: "Influenza B", isCorrect: false },
      { text: "Hepatitis A", isCorrect: false },
      { text: "Rotavirus", isCorrect: false },
    ],
  },
  {
    stem: "Which virus is the principal cause of cervical carcinoma, and by what mechanism?",
    topic: "Oncogenic Viruses",
    explanation:
      "Human papillomavirus, particularly types 16 and 18. Its E6 and E7 proteins degrade p53 and inactivate Rb, removing two key tumour suppressor controls on the cell cycle. Vaccination against these types is therefore genuine cancer prevention.",
    choices: [
      { text: "HPV — E6 and E7 proteins inactivate p53 and Rb", isCorrect: true },
      { text: "Herpes simplex virus 2 — direct oncogene insertion", isCorrect: false },
      { text: "Cytomegalovirus — chronic inflammation", isCorrect: false },
      { text: "Epstein-Barr virus — B cell transformation", isCorrect: false },
    ],
  },
  {
    stem: "Why is rabies post-exposure prophylaxis given even days after a bite?",
    topic: "Viral Pathogenesis",
    explanation:
      "The virus travels slowly along peripheral nerves toward the CNS, so there is a window before it reaches the brain during which vaccine and immunoglobulin can still prevent disease. Once clinical rabies develops it is almost universally fatal — which is why prophylaxis is never delayed for testing.",
    choices: [
      { text: "Slow axonal transport to the CNS leaves a window for intervention", isCorrect: true },
      { text: "The virus remains dormant in the wound indefinitely", isCorrect: false },
      { text: "Antibodies can reverse established encephalitis", isCorrect: false },
      { text: "The vaccine treats symptoms rather than infection", isCorrect: false },
    ],
  },
];

/* ═══════════════ PARASITOLOGY ═══════════════ */

const PARASITOLOGY: Q[] = [
  {
    stem: "Which Plasmodium species causes the most severe malaria, including cerebral malaria?",
    topic: "Malaria",
    explanation:
      "Plasmodium falciparum. It infects erythrocytes of all ages, achieving very high parasitaemia, and infected cells adhere to capillary endothelium — the sequestration that produces cerebral and placental malaria. P. vivax and P. ovale cause relapse from dormant liver hypnozoites but are rarely fatal.",
    choices: [
      { text: "Plasmodium falciparum", isCorrect: true },
      { text: "Plasmodium vivax", isCorrect: false },
      { text: "Plasmodium ovale", isCorrect: false },
      { text: "Plasmodium malariae", isCorrect: false },
    ],
  },
  {
    stem: "Why must primaquine be added to treat Plasmodium vivax infection?",
    topic: "Malaria",
    explanation:
      "It eradicates dormant liver hypnozoites, which standard blood-stage treatment does not touch. Without it the infection relapses weeks or months later. G6PD deficiency must be excluded first, since primaquine causes severe haemolysis in deficient patients.",
    choices: [
      { text: "To clear dormant liver hypnozoites and prevent relapse", isCorrect: true },
      { text: "To kill circulating ring forms faster", isCorrect: false },
      { text: "To prevent mosquito transmission only", isCorrect: false },
      { text: "To treat the anaemia of malaria", isCorrect: false },
    ],
  },
  {
    stem: "How does sickle cell trait confer protection against malaria?",
    topic: "Malaria",
    explanation:
      "Parasitised red cells containing haemoglobin S sickle more readily and are removed by the spleen, and the intracellular environment is less favourable to the parasite. This survival advantage in endemic regions explains why the sickle allele persists despite the severity of homozygous disease — a classic example of balanced polymorphism.",
    choices: [
      { text: "Parasitised sickle cells are cleared early, limiting parasitaemia", isCorrect: true },
      { text: "Haemoglobin S prevents mosquito bites", isCorrect: false },
      { text: "It produces antibodies against the parasite", isCorrect: false },
      { text: "It blocks hepatocyte invasion entirely", isCorrect: false },
    ],
  },
  {
    stem: "A pregnant woman is advised to avoid cat litter and undercooked meat. Which parasite is the concern?",
    topic: "Protozoa",
    explanation:
      "Toxoplasma gondii. Primary infection in pregnancy can cross the placenta, causing chorioretinitis, hydrocephalus and intracranial calcification. In HIV with low CD4 counts, reactivation produces ring-enhancing cerebral lesions — a different presentation of the same organism.",
    choices: [
      { text: "Toxoplasma gondii", isCorrect: true },
      { text: "Giardia lamblia", isCorrect: false },
      { text: "Entamoeba histolytica", isCorrect: false },
      { text: "Trichomonas vaginalis", isCorrect: false },
    ],
  },
  {
    stem: "A traveller returns with prolonged greasy, foul-smelling diarrhoea and bloating after drinking stream water. Which organism is most likely?",
    topic: "Protozoa",
    explanation:
      "Giardia lamblia. It adheres to the duodenal mucosa causing malabsorption, hence the steatorrhoea and bloating. It is non-invasive, so there is no blood in the stool and no systemic illness — the contrast with amoebic dysentery is the point being tested.",
    choices: [
      { text: "Giardia lamblia", isCorrect: true },
      { text: "Entamoeba histolytica", isCorrect: false },
      { text: "Cryptosporidium parvum", isCorrect: false },
      { text: "Plasmodium falciparum", isCorrect: false },
    ],
  },
  {
    stem: "Which parasite causes bloody dysentery and can produce liver abscess?",
    topic: "Protozoa",
    explanation:
      "Entamoeba histolytica. Unlike Giardia it invades the colonic mucosa, producing flask-shaped ulcers and bloody stool, and can spread through the portal circulation to form a liver abscess classically containing 'anchovy paste' material. Treatment is metronidazole followed by a luminal agent.",
    choices: [
      { text: "Entamoeba histolytica", isCorrect: true },
      { text: "Giardia lamblia", isCorrect: false },
      { text: "Toxoplasma gondii", isCorrect: false },
      { text: "Leishmania donovani", isCorrect: false },
    ],
  },
  {
    stem: "Which helminth infection is associated with iron deficiency anaemia through intestinal blood loss?",
    topic: "Helminths",
    explanation:
      "Hookworm — Ancylostoma duodenale and Necator americanus. The adult worms attach to intestinal mucosa and feed on blood, producing chronic occult loss. In endemic regions it is a leading cause of iron deficiency, particularly in children and pregnant women.",
    choices: [
      { text: "Hookworm", isCorrect: true },
      { text: "Enterobius vermicularis (pinworm)", isCorrect: false },
      { text: "Taenia saginata", isCorrect: false },
      { text: "Ascaris lumbricoides", isCorrect: false },
    ],
  },
  {
    stem: "A child has perianal itching, worse at night. Which parasite and which diagnostic test?",
    topic: "Helminths",
    explanation:
      "Enterobius vermicularis (pinworm), diagnosed with the adhesive tape test applied in the morning before washing. Female worms migrate to the perianal skin at night to lay eggs, which is why the itch is nocturnal and why stool microscopy usually misses it. Household contacts are treated together.",
    choices: [
      { text: "Pinworm — adhesive tape test", isCorrect: true },
      { text: "Hookworm — stool microscopy", isCorrect: false },
      { text: "Ascaris — serology", isCorrect: false },
      { text: "Schistosoma — urine microscopy", isCorrect: false },
    ],
  },
  {
    stem: "Which parasite is acquired through skin contact with fresh water and causes haematuria in endemic regions?",
    topic: "Helminths",
    explanation:
      "Schistosoma haematobium. Cercariae penetrate intact skin during freshwater contact, and adult worms lodge in the vesical venous plexus. Eggs deposited in the bladder wall cause haematuria and chronic inflammation, with a recognised link to squamous cell carcinoma of the bladder.",
    choices: [
      { text: "Schistosoma haematobium", isCorrect: true },
      { text: "Schistosoma mansoni", isCorrect: false },
      { text: "Wuchereria bancrofti", isCorrect: false },
      { text: "Onchocerca volvulus", isCorrect: false },
    ],
  },
  {
    stem: "Why does eating undercooked pork risk neurocysticercosis?",
    topic: "Helminths",
    explanation:
      "Ingesting Taenia solium EGGS — not the larval cysts — allows larvae to migrate and encyst in tissue including brain, causing seizures. Eating cysts in undercooked pork gives intestinal tapeworm instead. The distinction matters: the human is an accidental intermediate host in cysticercosis.",
    choices: [
      { text: "Ingested T. solium eggs allow larvae to encyst in brain tissue", isCorrect: true },
      { text: "Adult tapeworms migrate directly to the brain", isCorrect: false },
      { text: "The pork itself contains a neurotoxin", isCorrect: false },
      { text: "It causes an autoimmune encephalitis", isCorrect: false },
    ],
  },
];

/* ═══════════════ MYCOLOGY ═══════════════ */

const MYCOLOGY: Q[] = [
  {
    stem: "Which component of the fungal cell membrane is the target of azole antifungals?",
    topic: "Antifungal Targets",
    explanation:
      "Ergosterol. Azoles inhibit lanosterol 14-alpha-demethylase, blocking its synthesis and destabilising the membrane. Human membranes use cholesterol instead, which is what gives the drugs selectivity — though the same enzyme family explains azole interference with human steroid synthesis and cytochrome P450 interactions.",
    choices: [
      { text: "Ergosterol", isCorrect: true },
      { text: "Cholesterol", isCorrect: false },
      { text: "Peptidoglycan", isCorrect: false },
      { text: "Chitin", isCorrect: false },
    ],
  },
  {
    stem: "Amphotericin B is effective but toxic. What is its principal dose-limiting adverse effect?",
    topic: "Antifungal Targets",
    explanation:
      "Nephrotoxicity, alongside infusion reactions with fever and rigors. It binds ergosterol but has some affinity for cholesterol too, which underlies the host toxicity. Liposomal formulations reduce this substantially, which is why they are preferred despite higher cost.",
    choices: [
      { text: "Nephrotoxicity", isCorrect: true },
      { text: "Hepatic failure", isCorrect: false },
      { text: "Optic neuritis", isCorrect: false },
      { text: "Tendon rupture", isCorrect: false },
    ],
  },
  {
    stem: "An immunocompromised patient has meningitis. India ink staining of CSF shows encapsulated yeasts. What is the organism?",
    topic: "Systemic Mycoses",
    explanation:
      "Cryptococcus neoformans. Its thick polysaccharide capsule is the key virulence factor, excluding the ink and producing the classic halo. It typically affects patients with advanced HIV, and raised intracranial pressure often requires therapeutic lumbar punctures alongside antifungal therapy.",
    choices: [
      { text: "Cryptococcus neoformans", isCorrect: true },
      { text: "Candida albicans", isCorrect: false },
      { text: "Aspergillus fumigatus", isCorrect: false },
      { text: "Histoplasma capsulatum", isCorrect: false },
    ],
  },
  {
    stem: "A neutropenic patient develops fever with a lung cavity showing a 'halo sign' on CT. Which fungus is most likely?",
    topic: "Systemic Mycoses",
    explanation:
      "Aspergillus fumigatus causing invasive aspergillosis. Its hyphae are angioinvasive, causing infarction and haemorrhage into surrounding tissue — that is what produces the halo. Prolonged neutropenia is the major risk factor, and mortality is high without prompt treatment.",
    choices: [
      { text: "Aspergillus fumigatus", isCorrect: true },
      { text: "Candida glabrata", isCorrect: false },
      { text: "Cryptococcus neoformans", isCorrect: false },
      { text: "Pneumocystis jirovecii", isCorrect: false },
    ],
  },
  {
    stem: "An HIV patient with a CD4 count of 90 has dry cough, exertional dyspnoea and marked desaturation with normal-sounding chest. Which organism?",
    topic: "Opportunistic Fungi",
    explanation:
      "Pneumocystis jirovecii. The disproportion between severe hypoxia and unremarkable examination is characteristic. Treatment is high-dose co-trimoxazole, with corticosteroids added in severe hypoxia — one of the few infections where steroids clearly improve outcome.",
    choices: [
      { text: "Pneumocystis jirovecii", isCorrect: true },
      { text: "Mycobacterium tuberculosis", isCorrect: false },
      { text: "Streptococcus pneumoniae", isCorrect: false },
      { text: "Aspergillus fumigatus", isCorrect: false },
    ],
  },
  {
    stem: "Which factor most commonly predisposes to oral or vaginal candidiasis?",
    topic: "Opportunistic Fungi",
    explanation:
      "Disruption of normal flora or of immunity — broad-spectrum antibiotics, inhaled or systemic corticosteroids, diabetes, and immunosuppression. Candida is a commensal, so disease reflects a change in host conditions rather than new acquisition. Recurrent oral candidiasis in an adult should prompt consideration of undiagnosed diabetes or HIV.",
    choices: [
      { text: "Antibiotics, corticosteroids, diabetes or immunosuppression", isCorrect: true },
      { text: "Recent travel to a tropical region", isCorrect: false },
      { text: "Contact with contaminated soil", isCorrect: false },
      { text: "Consumption of undercooked meat", isCorrect: false },
    ],
  },
  {
    stem: "Why is fluconazole ineffective against Aspergillus?",
    topic: "Antifungal Targets",
    explanation:
      "Fluconazole's spectrum covers yeasts such as Candida and Cryptococcus but not moulds. Aspergillus requires voriconazole, isavuconazole, or amphotericin. Choosing the wrong azole is a common and consequential error, because it looks like appropriate therapy while the infection progresses.",
    choices: [
      { text: "Fluconazole covers yeasts, not moulds like Aspergillus", isCorrect: true },
      { text: "Aspergillus lacks ergosterol", isCorrect: false },
      { text: "Fluconazole is inactivated in lung tissue", isCorrect: false },
      { text: "Aspergillus is a bacterium, not a fungus", isCorrect: false },
    ],
  },
  {
    stem: "A patient with poorly controlled diabetic ketoacidosis develops rapidly progressive facial pain, black nasal eschar and orbital swelling. What must be excluded urgently?",
    topic: "Systemic Mycoses",
    explanation:
      "Mucormycosis. These moulds are angioinvasive and thrive in acidotic, iron-rich conditions, so diabetic ketoacidosis is the classic setting. It progresses over hours to days and requires urgent surgical debridement alongside amphotericin — antifungals alone are rarely sufficient.",
    choices: [
      { text: "Mucormycosis (rhino-orbital-cerebral)", isCorrect: true },
      { text: "Bacterial sinusitis", isCorrect: false },
      { text: "Oral candidiasis", isCorrect: false },
      { text: "Allergic fungal rhinitis", isCorrect: false },
    ],
  },
];

/* ═══════════════ SEED ═══════════════ */

async function seedSet(opts: {
  categorySlug: string;
  slug: string;
  title: string;
  description: string;
  kind: string;
  timeLimitSeconds: number | null;
  difficulty: string;
  questions: Q[];
}) {
  const category = await prisma.quizCategory.findUnique({ where: { slug: opts.categorySlug } });
  if (!category) {
    console.log(`  ✗ Category "${opts.categorySlug}" not found — run seed-medical-taxonomy.ts first.`);
    return;
  }

  const quiz = await prisma.quiz.upsert({
    where: { slug: opts.slug },
    create: {
      slug: opts.slug,
      title: opts.title,
      description: opts.description,
      categoryId: category.id,
      kind: opts.kind,
      timeLimitSeconds: opts.timeLimitSeconds,
      passThreshold: 70,
      difficulty: opts.difficulty,
      published: true,
    },
    update: {
      title: opts.title,
      description: opts.description,
      categoryId: category.id,
      kind: opts.kind,
      timeLimitSeconds: opts.timeLimitSeconds,
    },
  });

  await prisma.question.deleteMany({ where: { quizId: quiz.id } });

  let order = 0;
  for (const q of opts.questions) {
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

  console.log(`  ✓ ${opts.title} — ${opts.questions.length} questions`);
}

async function main() {
  console.log("Seeding Microbiology…\n");

  await seedSet({
    categorySlug: "fs-bacteriology",
    slug: "bacteriology-practice-set-1",
    title: "Bacteriology — Practice Set 1",
    description:
      "Fourteen questions on Gram staining and identification, the major Gram-positive and Gram-negative pathogens, toxins, mycobacteria, and the virulence factors that make infections hard to treat.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Foundational",
    questions: BACTERIOLOGY,
  });

  await seedSet({
    categorySlug: "fs-virology",
    slug: "virology-practice-set-1",
    title: "Virology — Practice Set 1",
    description:
      "Twelve questions on viral replication, HIV, the hepatitis viruses and their serology, influenza, herpesviruses, congenital infection, and oncogenic viruses.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Foundational",
    questions: VIROLOGY,
  });

  await seedSet({
    categorySlug: "fs-parasitology",
    slug: "parasitology-practice-set-1",
    title: "Parasitology — Practice Set 1",
    description:
      "Ten questions on malaria, the clinically important protozoa, and the helminths — including the distinctions that are examined most often.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Foundational",
    questions: PARASITOLOGY,
  });

  await seedSet({
    categorySlug: "fs-mycology",
    slug: "mycology-practice-set-1",
    title: "Mycology — Practice Set 1",
    description:
      "Eight questions on antifungal targets, systemic mycoses, and the opportunistic fungal infections that define immunosuppression.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Foundational",
    questions: MYCOLOGY,
  });

  await seedSet({
    categorySlug: "fs-microbiology",
    slug: "microbiology-comprehensive-exam-1",
    title: "Microbiology — Comprehensive Timed Exam",
    description:
      "All forty-four items across bacteriology, virology, parasitology and mycology under exam conditions: 55 minutes, feedback withheld until you submit.",
    kind: "EXAM",
    timeLimitSeconds: 55 * 60,
    difficulty: "Intermediate",
    questions: [...BACTERIOLOGY, ...VIROLOGY, ...PARASITOLOGY, ...MYCOLOGY],
  });

  console.log("\nDone. Editable in Admin → Question Bank.");
  console.log("⚠ Epidemiology and first-line treatment vary by region — review locally.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
