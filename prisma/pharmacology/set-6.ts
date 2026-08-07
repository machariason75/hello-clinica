/**
 * PHARMACOLOGY — PRACTICE SET 6
 * Antimicrobials II — Antivirals, Antifungals & Antiparasitics
 *
 * Difficulty: Intermediate. The non-bacterial antimicrobials, organized so that
 * the pathogen's biology explains the drug target: viral polymerases and
 * proteases, the fungal membrane and cell wall, and the metabolic quirks of
 * protozoa and helminths. Pairs with Set 5 (Antibacterials) to build Exam 3,
 * the Antimicrobials Block.
 *
 * 71 questions across 12 topics:
 *   Anti-Herpesvirus Agents · Anti-Influenza Agents · HIV — Reverse
 *   Transcriptase Inhibitors · HIV — Protease & Integrase Inhibitors ·
 *   Hepatitis Antivirals · Polyene & Azole Antifungals · Echinocandins & Other
 *   Antifungals · Antimalarials · Antiprotozoals · Anthelmintics · Antimicrobial
 *   Principles · Clinical Application
 *
 * Item mix: single-answer vignettes, select-all-that-apply, and true/false.
 * US generic drug names and conventional units throughout.
 */

import type { Q } from "../_lib/qbank";

export const PHARMACOLOGY_SET_6: Q[] = [
  /* ══════════════ ANTI-HERPESVIRUS AGENTS ══════════════ */
  {
    stem: "Acyclovir is selectively toxic to herpes-infected cells because its activation requires:",
    topic: "Anti-Herpesvirus Agents",
    explanation:
      "Acyclovir must first be monophosphorylated by viral thymidine kinase, a step that occurs mainly in infected cells, before host kinases complete activation; the triphosphate then inhibits viral DNA polymerase and terminates the chain. This dependence on a viral enzyme gives its selectivity.",
    choices: [
      { text: "Initial phosphorylation by viral thymidine kinase", isCorrect: true },
      { text: "Activation by host reverse transcriptase" },
      { text: "Cleavage by a viral protease" },
      { text: "Binding to the viral envelope" },
      { text: "Integration into host DNA" },
    ],
  },
  {
    stem: "Acyclovir resistance in herpes simplex virus most commonly results from:",
    topic: "Anti-Herpesvirus Agents",
    explanation:
      "Most acyclovir resistance stems from mutations in viral thymidine kinase, so the drug is never activated; such strains are treated with foscarnet, which inhibits the viral DNA polymerase directly and needs no viral kinase. This logic explains the choice of salvage therapy.",
    choices: [
      { text: "Mutated viral thymidine kinase", isCorrect: true },
      { text: "Loss of the viral envelope" },
      { text: "Beta-lactamase production" },
      { text: "Altered ribosomal RNA" },
      { text: "Efflux pump overexpression" },
    ],
  },
  {
    stem: "Ganciclovir is preferred over acyclovir for cytomegalovirus disease because it:",
    topic: "Anti-Herpesvirus Agents",
    explanation:
      "Ganciclovir has much greater activity against cytomegalovirus, in which it is activated by the viral kinase UL97; its main toxicity is myelosuppression. Acyclovir has little useful anti-CMV activity, which is why ganciclovir or valganciclovir is used for CMV.",
    choices: [
      { text: "Has substantially greater anti-cytomegalovirus activity", isCorrect: true },
      { text: "Is less toxic to the bone marrow" },
      { text: "Does not require any phosphorylation" },
      { text: "Is active only against bacteria" },
      { text: "Is taken up only by uninfected cells" },
    ],
  },
  {
    stem: "Foscarnet does not require activation by a viral kinase because it:",
    topic: "Anti-Herpesvirus Agents",
    explanation:
      "Foscarnet is a pyrophosphate analog that directly inhibits viral DNA polymerase (and HIV reverse transcriptase) without phosphorylation, so it works against thymidine-kinase-deficient, acyclovir-resistant strains. Its major toxicity is nephrotoxicity and electrolyte disturbances, especially hypocalcemia.",
    choices: [
      { text: "Directly inhibits viral DNA polymerase as a pyrophosphate analog", isCorrect: true },
      { text: "Blocks the viral protease" },
      { text: "Inhibits neuraminidase" },
      { text: "Binds ergosterol" },
      { text: "Inhibits the ribosome" },
    ],
  },
  {
    stem: "True or False: Valacyclovir is a prodrug of acyclovir that offers better oral bioavailability and less frequent dosing.",
    type: "TRUE_FALSE",
    topic: "Anti-Herpesvirus Agents",
    explanation:
      "True. Valacyclovir is the L-valyl ester prodrug of acyclovir, absorbed better from the gut and converted to acyclovir, allowing less frequent dosing. This improves adherence while retaining the same mechanism and selectivity.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  /* ══════════════ ANTI-INFLUENZA AGENTS ══════════════ */
  {
    stem: "Oseltamivir treats influenza by inhibiting which viral enzyme?",
    topic: "Anti-Influenza Agents",
    explanation:
      "Oseltamivir and zanamivir inhibit neuraminidase, the enzyme that releases newly formed virions from the host cell, so viral spread is curtailed; benefit is greatest when started within about 48 hours of symptom onset. They are active against influenza A and B.",
    choices: [
      { text: "Neuraminidase", isCorrect: true },
      { text: "Reverse transcriptase" },
      { text: "DNA polymerase" },
      { text: "Protease" },
      { text: "Thymidine kinase" },
    ],
  },
  {
    stem: "The clinical benefit of neuraminidase inhibitors depends heavily on:",
    topic: "Anti-Influenza Agents",
    explanation:
      "Because these drugs limit ongoing viral replication rather than reversing established disease, starting them early — ideally within 48 hours of symptom onset — is essential for meaningful benefit. Late initiation offers little advantage.",
    choices: [
      { text: "Early initiation, within about 48 hours of symptoms", isCorrect: true },
      { text: "Concurrent antibiotic use" },
      { text: "Waiting until symptoms peak" },
      { text: "Administration only intravenously" },
      { text: "Combining with acyclovir" },
    ],
  },
  {
    stem: "Baloxavir marboxil offers a different mechanism against influenza by inhibiting:",
    topic: "Anti-Influenza Agents",
    explanation:
      "Baloxavir inhibits the viral cap-dependent endonuclease (polymerase acidic protein), blocking initiation of viral mRNA synthesis, and is given as a single oral dose. Its distinct target complements the neuraminidase inhibitors.",
    choices: [
      { text: "The viral cap-dependent endonuclease", isCorrect: true },
      { text: "Neuraminidase" },
      { text: "Reverse transcriptase" },
      { text: "The fungal cell wall" },
      { text: "Bacterial gyrase" },
    ],
  },
  /* ══════════════ HIV — REVERSE TRANSCRIPTASE INHIBITORS ══════════════ */
  {
    stem: "Nucleoside reverse transcriptase inhibitors (NRTIs) such as tenofovir and emtricitabine suppress HIV by:",
    topic: "HIV — Reverse Transcriptase Inhibitors",
    explanation:
      "NRTIs are incorporated into the growing viral DNA and, lacking a 3'-hydroxyl, terminate the chain, blocking reverse transcription; they require intracellular phosphorylation to become active. They form the backbone of most combination regimens.",
    choices: [
      { text: "Causing DNA chain termination during reverse transcription", isCorrect: true },
      { text: "Blocking viral entry at the CD4 receptor" },
      { text: "Inhibiting the viral protease" },
      { text: "Inhibiting integrase" },
      { text: "Blocking neuraminidase" },
    ],
  },
  {
    stem: "Zidovudine, an older NRTI, is particularly associated with which toxicity?",
    topic: "HIV — Reverse Transcriptase Inhibitors",
    explanation:
      "Zidovudine commonly causes bone marrow suppression with anemia and neutropenia; the NRTI class as a whole can cause mitochondrial toxicity, including lactic acidosis and lipodystrophy. Recognizing class and drug-specific toxicities guides monitoring.",
    choices: [
      { text: "Bone marrow suppression", isCorrect: true },
      { text: "Tendon rupture" },
      { text: "Optic neuritis" },
      { text: "Gingival hyperplasia" },
      { text: "Ototoxicity" },
    ],
  },
  {
    stem: "Non-nucleoside reverse transcriptase inhibitors (NNRTIs) such as efavirenz differ from NRTIs because they:",
    topic: "HIV — Reverse Transcriptase Inhibitors",
    explanation:
      "NNRTIs bind a distinct allosteric site on reverse transcriptase and do not require phosphorylation, but a single point mutation can confer resistance; efavirenz is noted for CNS and neuropsychiatric side effects. Their different binding site is a key contrast with NRTIs.",
    choices: [
      { text: "Bind an allosteric site and need no phosphorylation", isCorrect: true },
      { text: "Cause chain termination like NRTIs" },
      { text: "Inhibit the protease" },
      { text: "Require viral thymidine kinase" },
      { text: "Block viral fusion" },
    ],
  },
  {
    stem: "Before starting abacavir, testing for which genetic marker is recommended to avoid a hypersensitivity reaction?",
    topic: "HIV — Reverse Transcriptase Inhibitors",
    explanation:
      "Abacavir can cause a potentially fatal hypersensitivity reaction strongly linked to the HLA-B*57:01 allele, so screening for it before use is standard; positive patients avoid the drug. This is a landmark example of pharmacogenomic-guided prescribing.",
    choices: [
      { text: "HLA-B*57:01", isCorrect: true },
      { text: "G6PD deficiency" },
      { text: "CYP2C19 poor-metabolizer status" },
      { text: "BRCA1 mutation" },
      { text: "Rh blood type" },
    ],
  },
  /* ══════════════ HIV — PROTEASE & INTEGRASE INHIBITORS ══════════════ */
  {
    stem: "HIV protease inhibitors (drugs ending in '-navir') suppress the virus by:",
    topic: "HIV — Protease & Integrase Inhibitors",
    explanation:
      "Protease inhibitors block the viral protease that cleaves polyprotein precursors into functional proteins, so immature, non-infectious virions are produced. Many are boosted with ritonavir, a CYP3A4 inhibitor, and the class is linked to metabolic effects such as hyperglycemia and dyslipidemia.",
    choices: [
      { text: "Preventing cleavage of viral polyproteins into mature proteins", isCorrect: true },
      { text: "Terminating the DNA chain" },
      { text: "Blocking integrase" },
      { text: "Inhibiting neuraminidase" },
      { text: "Binding ergosterol" },
    ],
  },
  {
    stem: "Ritonavir is frequently added in low dose to other protease inhibitors as a 'booster' because it:",
    topic: "HIV — Protease & Integrase Inhibitors",
    explanation:
      "Ritonavir strongly inhibits CYP3A4, slowing metabolism of the partner protease inhibitor and raising its levels, which allows lower doses and less frequent dosing. This deliberate pharmacokinetic boosting is a key concept, but it also causes many drug interactions.",
    choices: [
      { text: "Inhibits CYP3A4, raising levels of the partner drug", isCorrect: true },
      { text: "Induces CYP3A4, lowering partner levels" },
      { text: "Blocks renal excretion of all drugs" },
      { text: "Adds antibacterial coverage" },
      { text: "Prevents viral entry" },
    ],
  },
  {
    stem: "Integrase strand transfer inhibitors such as dolutegravir act by:",
    topic: "HIV — Protease & Integrase Inhibitors",
    explanation:
      "These agents block integrase, the enzyme that inserts viral DNA into the host genome, halting a step unique to retroviruses. They are well tolerated with rapid viral suppression and are now common backbones of first-line therapy.",
    choices: [
      { text: "Preventing viral DNA from integrating into host DNA", isCorrect: true },
      { text: "Inhibiting reverse transcriptase" },
      { text: "Blocking the protease" },
      { text: "Inhibiting neuraminidase" },
      { text: "Disrupting the fungal membrane" },
    ],
  },
  {
    stem: "Which of the following are established uses of combination antiretroviral principles in HIV care? Select all that apply.",
    type: "MULTI",
    topic: "HIV — Protease & Integrase Inhibitors",
    explanation:
      "Combination therapy uses at least two drug classes to suppress virus and prevent resistance; pre-exposure prophylaxis reduces acquisition risk in high-risk individuals; and post-exposure prophylaxis after a significant exposure can prevent infection. Monotherapy is avoided because resistance emerges rapidly, and antiretrovirals do not cure or eradicate latent virus.",
    choices: [
      { text: "Using multiple drug classes together to prevent resistance", isCorrect: true },
      { text: "Pre-exposure prophylaxis in high-risk individuals", isCorrect: true },
      { text: "Post-exposure prophylaxis after a significant exposure", isCorrect: true },
      { text: "Long-term single-drug therapy as the standard" },
      { text: "Complete eradication of latent provirus with current drugs" },
    ],
  },
  /* ══════════════ HEPATITIS ANTIVIRALS ══════════════ */
  {
    stem: "Modern direct-acting antivirals for hepatitis C, such as sofosbuvir, achieve high cure rates by targeting:",
    topic: "Hepatitis Antivirals",
    explanation:
      "Sofosbuvir inhibits the NS5B RNA-dependent RNA polymerase, and it is combined with agents targeting NS5A or NS3/4A protease to produce cure (sustained virologic response) in most patients. These oral regimens have replaced interferon-based therapy.",
    choices: [
      { text: "The viral NS5B RNA polymerase", isCorrect: true },
      { text: "Neuraminidase" },
      { text: "Host thymidine kinase" },
      { text: "The fungal cell wall" },
      { text: "Bacterial gyrase" },
    ],
  },
  {
    stem: "Tenofovir and entecavir are first-line agents for chronic hepatitis B because they:",
    topic: "Hepatitis Antivirals",
    explanation:
      "Both are nucleos(t)ide analogs that inhibit hepatitis B viral polymerase (reverse transcriptase), suppressing replication with a high barrier to resistance. They control but do not typically eradicate the virus, so long-term therapy is often needed.",
    choices: [
      { text: "Inhibit hepatitis B polymerase with a high barrier to resistance", isCorrect: true },
      { text: "Cure the infection in a single dose" },
      { text: "Act by inhibiting neuraminidase" },
      { text: "Are antifungal agents repurposed for the liver" },
      { text: "Work only against hepatitis C" },
    ],
  },
  {
    stem: "True or False: Curing hepatitis C with direct-acting antivirals is defined by a sustained virologic response, meaning undetectable virus after completing therapy.",
    type: "TRUE_FALSE",
    topic: "Hepatitis Antivirals",
    explanation:
      "True. A sustained virologic response — undetectable HCV RNA weeks after finishing treatment — is considered a virologic cure and is achieved in the large majority of treated patients. This endpoint reflects the transformative efficacy of these regimens.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  /* ══════════════ POLYENE & AZOLE ANTIFUNGALS ══════════════ */
  {
    stem: "Amphotericin B exerts its antifungal effect by:",
    topic: "Polyene & Azole Antifungals",
    explanation:
      "Amphotericin B binds ergosterol in the fungal membrane and forms pores that leak ions, killing the cell; because it also has some affinity for human cholesterol, it causes infusion reactions and nephrotoxicity. Lipid formulations reduce this toxicity.",
    choices: [
      { text: "Binding ergosterol and forming membrane pores", isCorrect: true },
      { text: "Inhibiting ergosterol synthesis" },
      { text: "Blocking the fungal cell wall glucan" },
      { text: "Inhibiting fungal DNA polymerase" },
      { text: "Blocking microtubule assembly" },
    ],
  },
  {
    stem: "A patient receiving amphotericin B must be monitored most closely for which toxicity?",
    topic: "Polyene & Azole Antifungals",
    explanation:
      "Nephrotoxicity is the major dose-limiting toxicity of amphotericin B, along with electrolyte wasting (potassium and magnesium) and infusion-related fevers and rigors. Adequate hydration and lipid formulations mitigate renal injury.",
    choices: [
      { text: "Nephrotoxicity with electrolyte wasting", isCorrect: true },
      { text: "Tendon rupture" },
      { text: "Optic neuritis" },
      { text: "Gray baby syndrome" },
      { text: "Aplastic anemia" },
    ],
  },
  {
    stem: "Azole antifungals such as fluconazole inhibit fungal growth by:",
    topic: "Polyene & Azole Antifungals",
    explanation:
      "Azoles inhibit the fungal cytochrome P450 enzyme 14-alpha-demethylase, blocking conversion of lanosterol to ergosterol and impairing the membrane. Because they inhibit human CYP enzymes too, they cause many drug interactions and can be hepatotoxic.",
    choices: [
      { text: "Inhibiting ergosterol synthesis via 14-alpha-demethylase", isCorrect: true },
      { text: "Binding preformed ergosterol to make pores" },
      { text: "Inhibiting beta-glucan synthase" },
      { text: "Blocking fungal protein synthesis" },
      { text: "Inhibiting reverse transcriptase" },
    ],
  },
  {
    stem: "Which azole is the preferred agent for many invasive Aspergillus infections?",
    topic: "Polyene & Azole Antifungals",
    explanation:
      "Voriconazole is first-line for invasive aspergillosis; it can cause transient visual disturbances and, like other azoles, significant CYP-mediated interactions and hepatotoxicity. Matching azole spectrum to the pathogen is essential.",
    choices: [
      { text: "Voriconazole", isCorrect: true },
      { text: "Fluconazole" },
      { text: "Nystatin" },
      { text: "Griseofulvin" },
      { text: "Terbinafine" },
    ],
  },
  {
    stem: "Which statements about azole antifungals are correct? Select all that apply.",
    type: "MULTI",
    topic: "Polyene & Azole Antifungals",
    explanation:
      "Azoles inhibit human CYP450 enzymes, causing many drug interactions, can be hepatotoxic, and fluconazole penetrates the CNS well, making it useful for cryptococcal meningitis maintenance. They do not act by binding preformed ergosterol — that is amphotericin's mechanism — and they are not devoid of interactions.",
    choices: [
      { text: "They inhibit human CYP enzymes, causing drug interactions", isCorrect: true },
      { text: "They can be hepatotoxic", isCorrect: true },
      { text: "Fluconazole penetrates the CNS well", isCorrect: true },
      { text: "They kill fungi by binding preformed ergosterol" },
      { text: "They have essentially no drug interactions" },
    ],
  },
  /* ══════════════ ECHINOCANDINS & OTHER ANTIFUNGALS ══════════════ */
  {
    stem: "Echinocandins such as caspofungin act on a fungal target absent in human cells by inhibiting:",
    topic: "Echinocandins & Other Antifungals",
    explanation:
      "Echinocandins inhibit beta-1,3-glucan synthase, disrupting the fungal cell wall; because human cells lack this wall, they are well tolerated. They are first-line for many invasive Candida infections, including azole-resistant strains.",
    choices: [
      { text: "Beta-1,3-glucan synthase in the cell wall", isCorrect: true },
      { text: "Ergosterol in the membrane" },
      { text: "Fungal DNA polymerase" },
      { text: "The 30S ribosome" },
      { text: "Reverse transcriptase" },
    ],
  },
  {
    stem: "Terbinafine, used for dermatophyte nail infections, inhibits which enzyme in ergosterol synthesis?",
    topic: "Echinocandins & Other Antifungals",
    explanation:
      "Terbinafine inhibits squalene epoxidase, causing toxic squalene accumulation and ergosterol depletion; it is concentrated in keratin, making it effective for onychomycosis. Liver function is monitored during prolonged courses.",
    choices: [
      { text: "Squalene epoxidase", isCorrect: true },
      { text: "14-alpha-demethylase" },
      { text: "Beta-glucan synthase" },
      { text: "DNA polymerase" },
      { text: "Neuraminidase" },
    ],
  },
  {
    stem: "Nystatin is used almost exclusively as a topical or oral agent for local candidiasis because it:",
    topic: "Echinocandins & Other Antifungals",
    explanation:
      "Nystatin is a polyene like amphotericin B but is too toxic for systemic use and poorly absorbed from the gut, so it is applied topically or 'swish and swallow' for oral or esophageal thrush. Its local action defines its niche.",
    choices: [
      { text: "Is too toxic systemically and poorly absorbed orally", isCorrect: true },
      { text: "Is only active against bacteria" },
      { text: "Requires viral thymidine kinase" },
      { text: "Penetrates the CNS well" },
      { text: "Cures dermatophyte nail disease in one dose" },
    ],
  },
  {
    stem: "Flucytosine is usually combined with amphotericin B (for example in cryptococcal meningitis) rather than used alone because:",
    topic: "Echinocandins & Other Antifungals",
    explanation:
      "Flucytosine is converted to 5-fluorouracil inside fungi to inhibit nucleic acid synthesis, but resistance develops rapidly with monotherapy, so it is paired with amphotericin B for synergy. It can cause bone marrow suppression, requiring monitoring.",
    choices: [
      { text: "Resistance develops rapidly when it is used alone", isCorrect: true },
      { text: "It has no antifungal activity by itself" },
      { text: "It only works against bacteria" },
      { text: "It cannot enter fungal cells" },
      { text: "It is inactivated by amphotericin" },
    ],
  },
  /* ══════════════ ANTIMALARIALS ══════════════ */
  {
    stem: "Chloroquine treats malaria by acting within which structure of the parasite?",
    topic: "Antimalarials",
    explanation:
      "Chloroquine concentrates in the parasite's food vacuole and blocks detoxification of heme into hemozoin, so toxic heme accumulates and kills the parasite. Resistance, common in Plasmodium falciparum, involves reduced drug accumulation in the vacuole.",
    choices: [
      { text: "The food vacuole, by blocking heme detoxification", isCorrect: true },
      { text: "The mitochondrial electron transport chain only" },
      { text: "The ribosome" },
      { text: "The cell wall" },
      { text: "Reverse transcriptase" },
    ],
  },
  {
    stem: "Primaquine is added to malaria therapy for Plasmodium vivax and ovale specifically to:",
    topic: "Antimalarials",
    explanation:
      "Primaquine eradicates the dormant liver hypnozoites of P. vivax and P. ovale, preventing relapse; other blood-stage agents do not reach these forms. Because it causes hemolysis in G6PD deficiency, patients are screened first.",
    choices: [
      { text: "Eliminate dormant hepatic hypnozoites and prevent relapse", isCorrect: true },
      { text: "Kill only the blood-stage parasites" },
      { text: "Block neuraminidase" },
      { text: "Inhibit the fungal wall" },
      { text: "Provide antibacterial coverage" },
    ],
  },
  {
    stem: "Before prescribing primaquine or dapsone, testing for which enzyme deficiency is important to avoid hemolysis?",
    topic: "Antimalarials",
    explanation:
      "Glucose-6-phosphate dehydrogenase (G6PD) deficiency predisposes to oxidative hemolysis with primaquine, dapsone, and sulfonamides, so screening is done before use. This pharmacogenetic precaution prevents a serious adverse event.",
    choices: [
      { text: "Glucose-6-phosphate dehydrogenase (G6PD)", isCorrect: true },
      { text: "Aldehyde dehydrogenase" },
      { text: "Dihydrofolate reductase" },
      { text: "Thymidine kinase" },
      { text: "Squalene epoxidase" },
    ],
  },
  {
    stem: "Artemisinin-based combination therapy is favored for falciparum malaria because artemisinins:",
    topic: "Antimalarials",
    explanation:
      "Artemisinins act rapidly against blood-stage parasites by generating reactive free radicals, and pairing them with a longer-acting partner drug clears residual parasites and limits resistance. This combination approach is the global standard for uncomplicated falciparum malaria.",
    choices: [
      { text: "Act rapidly and are paired with a partner drug to limit resistance", isCorrect: true },
      { text: "Only kill dormant liver forms" },
      { text: "Work by inhibiting neuraminidase" },
      { text: "Are antifungal agents" },
      { text: "Require viral thymidine kinase" },
    ],
  },
  /* ══════════════ ANTIPROTOZOALS ══════════════ */
  {
    stem: "Metronidazole is first-line therapy for infections caused by which organisms?",
    topic: "Antiprotozoals",
    explanation:
      "Metronidazole treats anaerobic protozoa such as Giardia lamblia, Entamoeba histolytica and Trichomonas vaginalis, as well as anaerobic bacteria; it is activated to reactive intermediates in anaerobic conditions. Alcohol must be avoided because of a disulfiram-like reaction.",
    choices: [
      { text: "Giardia, Entamoeba, and Trichomonas", isCorrect: true },
      { text: "Plasmodium falciparum only" },
      { text: "Aspergillus species" },
      { text: "Influenza virus" },
      { text: "Mycobacterium tuberculosis" },
    ],
  },
  {
    stem: "Toxoplasmosis in an immunocompromised patient is typically treated with pyrimethamine plus sulfadiazine, which act by:",
    topic: "Antiprotozoals",
    explanation:
      "This combination blocks sequential steps of folate synthesis in the parasite, and leucovorin (folinic acid) is added to protect the patient's bone marrow. The strategy mirrors the synergistic folate blockade used against bacteria.",
    choices: [
      { text: "Inhibiting parasite folate synthesis at two steps", isCorrect: true },
      { text: "Binding ergosterol" },
      { text: "Inhibiting neuraminidase" },
      { text: "Blocking the viral protease" },
      { text: "Disrupting the bacterial wall" },
    ],
  },
  {
    stem: "True or False: Both sexual partners are typically treated for trichomoniasis to prevent reinfection, and alcohol is avoided during metronidazole therapy.",
    type: "TRUE_FALSE",
    topic: "Antiprotozoals",
    explanation:
      "True. Treating partners prevents 'ping-pong' reinfection with Trichomonas, and metronidazole's inhibition of aldehyde dehydrogenase means alcohol causes an unpleasant disulfiram-like reaction. Both points are standard counseling.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  /* ══════════════ ANTHELMINTICS ══════════════ */
  {
    stem: "Benzimidazoles such as albendazole and mebendazole kill helminths by:",
    topic: "Anthelmintics",
    explanation:
      "These drugs bind parasite beta-tubulin and inhibit microtubule polymerization, impairing glucose uptake and immobilizing the worm; they are broadly active against intestinal nematodes. Their selectivity comes from higher affinity for parasite tubulin.",
    choices: [
      { text: "Inhibiting microtubule formation by binding beta-tubulin", isCorrect: true },
      { text: "Binding ergosterol" },
      { text: "Inhibiting neuraminidase" },
      { text: "Blocking folate synthesis" },
      { text: "Depolarizing neuromuscular junctions" },
    ],
  },
  {
    stem: "Praziquantel is the treatment of choice for schistosomiasis and many other fluke and tapeworm infections. It acts by:",
    topic: "Anthelmintics",
    explanation:
      "Praziquantel increases calcium permeability of the parasite's membrane, causing sustained muscle contraction and paralysis and disrupting its protective tegument, so the immune system can clear it. Its broad activity against trematodes and cestodes makes it a key anthelmintic.",
    choices: [
      { text: "Increasing parasite membrane calcium permeability, causing paralysis", isCorrect: true },
      { text: "Inhibiting microtubules" },
      { text: "Blocking ergosterol synthesis" },
      { text: "Inhibiting reverse transcriptase" },
      { text: "Blocking the bacterial ribosome" },
    ],
  },
  {
    stem: "Ivermectin, used for strongyloidiasis and onchocerciasis, paralyzes parasites by:",
    topic: "Anthelmintics",
    explanation:
      "Ivermectin activates glutamate-gated chloride channels in the parasite's nerve and muscle, causing hyperpolarization and paralysis; these channels are absent in mammals, and the drug is largely excluded from the mammalian CNS, giving selectivity. It is also used in some ectoparasite infestations.",
    choices: [
      { text: "Activating parasite glutamate-gated chloride channels", isCorrect: true },
      { text: "Inhibiting the fungal wall" },
      { text: "Blocking viral entry" },
      { text: "Inhibiting folate synthesis" },
      { text: "Binding ergosterol" },
    ],
  },
  /* ══════════════ ANTIMICROBIAL PRINCIPLES ══════════════ */
  {
    stem: "Selective toxicity — the guiding principle of antimicrobial therapy — means a drug:",
    topic: "Antimicrobial Principles",
    explanation:
      "Selective toxicity is the ability to harm the pathogen while sparing the host, achieved by targeting structures or pathways unique to microbes, such as the bacterial wall, fungal ergosterol, or viral enzymes. The narrower the shared biology, the safer the drug.",
    choices: [
      { text: "Harms the microbe while largely sparing host cells", isCorrect: true },
      { text: "Kills all rapidly dividing cells equally" },
      { text: "Works only outside the body" },
      { text: "Targets host mitochondria preferentially" },
      { text: "Requires toxicity to the host to be effective" },
    ],
  },
  {
    stem: "Antiviral drugs are generally harder to develop than antibacterials mainly because viruses:",
    topic: "Antimicrobial Principles",
    explanation:
      "Viruses replicate using host cellular machinery, so there are fewer uniquely viral targets to attack without harming the host, unlike bacteria with their distinct walls and ribosomes. This limited selective-toxicity margin explains the narrower antiviral arsenal.",
    choices: [
      { text: "Rely on host cell machinery, leaving few unique targets", isCorrect: true },
      { text: "Have a thick peptidoglycan wall" },
      { text: "Possess 70S ribosomes" },
      { text: "Synthesize their own ergosterol" },
      { text: "Are too large to enter cells" },
    ],
  },
  {
    stem: "Which pairing of pathogen structure and the drug class that targets it is correct?",
    topic: "Antimicrobial Principles",
    explanation:
      "Fungal ergosterol is the target of polyenes and azoles, mapping membrane biology to drug class. Beta-lactams target the bacterial wall, and neuraminidase inhibitors target influenza, so those would be different pairings; matching structure to class is the unifying theme of antimicrobial pharmacology.",
    choices: [
      { text: "Fungal ergosterol — polyenes and azoles", isCorrect: true },
      { text: "Bacterial wall — neuraminidase inhibitors" },
      { text: "Viral protease — echinocandins" },
      { text: "Fungal glucan — fluoroquinolones" },
      { text: "Helminth tubulin — beta-lactams" },
    ],
  },
  {
    stem: "Which are examples of targets that give antimicrobials their selective toxicity? Select all that apply.",
    type: "MULTI",
    topic: "Antimicrobial Principles",
    explanation:
      "The bacterial peptidoglycan wall, fungal ergosterol and cell wall, and virus-specific enzymes such as reverse transcriptase and neuraminidase are all absent or distinct in human cells, allowing selective attack. The human ribosome and human DNA polymerase are host structures and are not selective antimicrobial targets.",
    choices: [
      { text: "The bacterial peptidoglycan cell wall", isCorrect: true },
      { text: "Fungal ergosterol and cell wall", isCorrect: true },
      { text: "Virus-specific enzymes like reverse transcriptase", isCorrect: true },
      { text: "The human 80S ribosome" },
      { text: "Human DNA polymerase" },
    ],
  },
  /* ══════════════ CLINICAL APPLICATION ══════════════ */
  {
    stem: "A febrile neutropenic patient with prolonged fever despite broad antibacterial therapy is often started empirically on an antifungal because:",
    topic: "Clinical Application",
    explanation:
      "Persistent fever in prolonged neutropenia raises concern for invasive fungal infection such as Candida or Aspergillus, so empiric antifungal therapy is added while workup continues. Recognizing this at-risk scenario is an important clinical integration.",
    choices: [
      { text: "Invasive fungal infection becomes increasingly likely", isCorrect: true },
      { text: "Antifungals treat resistant bacteria" },
      { text: "Fever always means a viral cause" },
      { text: "Antibacterials cause fungal infection to resolve" },
      { text: "Antifungals reduce the neutrophil count further to help" },
    ],
  },
  {
    stem: "A pregnant patient with HIV is treated with antiretroviral therapy primarily to:",
    topic: "Clinical Application",
    explanation:
      "Effective maternal antiretroviral therapy suppresses viral load and greatly reduces the risk of mother-to-child transmission, in addition to benefiting the mother's own health. This is a cornerstone of perinatal HIV management.",
    choices: [
      { text: "Suppress viral load and reduce perinatal transmission", isCorrect: true },
      { text: "Cure the mother's infection permanently" },
      { text: "Treat a concurrent bacterial pneumonia" },
      { text: "Prevent influenza" },
      { text: "Eradicate latent provirus before delivery" },
    ],
  },
  {
    stem: "A returning traveler with fever should be evaluated urgently for malaria because:",
    topic: "Clinical Application",
    explanation:
      "Plasmodium falciparum malaria can progress rapidly to severe, life-threatening disease, so fever in a traveler from an endemic area is a medical emergency requiring prompt diagnosis and treatment. Delay can be fatal, which is why urgency is stressed.",
    choices: [
      { text: "Falciparum malaria can rapidly become life-threatening", isCorrect: true },
      { text: "Malaria is always self-limited and mild" },
      { text: "Antibiotics reliably cure it without diagnosis" },
      { text: "Fever in travelers is never infectious" },
      { text: "Only antifungals are needed empirically" },
    ],
  },
  {
    stem: "True or False: Post-exposure prophylaxis against HIV is most effective when started as soon as possible after exposure, ideally within hours.",
    type: "TRUE_FALSE",
    topic: "Clinical Application",
    explanation:
      "True. HIV post-exposure prophylaxis works best when begun promptly, ideally within hours and no later than about 72 hours after exposure, and is continued for a set course. Early initiation is critical to prevent established infection.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Which combination best illustrates rational synergy in antimicrobial therapy?",
    topic: "Clinical Application",
    explanation:
      "Amphotericin B plus flucytosine for cryptococcal meningitis is a classic synergistic pairing, as the membrane damage from amphotericin enhances flucytosine entry. Combining two drugs of the same class or with overlapping toxicity is generally not the goal of synergy.",
    choices: [
      { text: "Amphotericin B plus flucytosine for cryptococcal meningitis", isCorrect: true },
      { text: "Two nephrotoxic drugs to increase potency" },
      { text: "Two macrolides together" },
      { text: "An antibiotic plus an antacid for absorption" },
      { text: "Clindamycin plus more clindamycin" },
    ],
  },
  /* ══════════════ ADDITIONAL ITEMS ══════════════ */
  {
    stem: "The '-ovir' antivirals such as acyclovir and ganciclovir all ultimately act by:",
    topic: "Anti-Herpesvirus Agents",
    explanation:
      "As activated triphosphates, these guanosine analogs inhibit viral DNA polymerase and cause chain termination, halting herpesvirus DNA replication. Their shared naming reflects this common polymerase-directed mechanism among anti-herpesvirus agents.",
    choices: [
      { text: "Inhibiting viral DNA polymerase and terminating the DNA chain", isCorrect: true },
      { text: "Inhibiting neuraminidase" },
      { text: "Blocking the fungal cell wall" },
      { text: "Inhibiting the bacterial ribosome" },
      { text: "Blocking integrase" },
    ],
  },
  {
    stem: "Which anti-herpesvirus toxicities are correctly matched to their drugs? Select all that apply.",
    type: "MULTI",
    topic: "Anti-Herpesvirus Agents",
    explanation:
      "Ganciclovir is limited by myelosuppression, foscarnet by nephrotoxicity and electrolyte disturbances such as hypocalcemia, and acyclovir can cause crystalline nephropathy if given rapidly without hydration. Acyclovir is not primarily hepatotoxic, and ganciclovir is not chiefly ototoxic.",
    choices: [
      { text: "Ganciclovir — bone marrow suppression", isCorrect: true },
      { text: "Foscarnet — nephrotoxicity and electrolyte changes", isCorrect: true },
      { text: "Acyclovir — crystalline nephropathy if under-hydrated", isCorrect: true },
      { text: "Acyclovir — severe hepatotoxicity as the main risk" },
      { text: "Ganciclovir — ototoxicity as the main risk" },
    ],
  },
  {
    stem: "True or False: Neuraminidase inhibitors treat influenza but do not act against herpesviruses or HIV.",
    type: "TRUE_FALSE",
    topic: "Anti-Influenza Agents",
    explanation:
      "True. Oseltamivir and zanamivir specifically inhibit influenza neuraminidase and have no activity against herpesviruses or HIV, which are targeted by entirely different agents. Matching the drug to the correct virus is essential.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "A patient with severe influenza and pneumonia is most likely to benefit from oseltamivir when it is:",
    topic: "Anti-Influenza Agents",
    explanation:
      "Even in severe or hospitalized influenza, earlier initiation improves outcomes, and treatment is still recommended in severe disease even beyond 48 hours; the greatest benefit remains with prompt therapy. Waiting for full recovery would defeat the purpose.",
    choices: [
      { text: "Started as early as possible in the course", isCorrect: true },
      { text: "Delayed until symptoms fully resolve" },
      { text: "Given only after antibiotics fail" },
      { text: "Reserved for the recovery phase" },
      { text: "Combined with acyclovir for synergy" },
    ],
  },
  {
    stem: "The standard structure of a first-line HIV regimen is:",
    topic: "HIV — Protease & Integrase Inhibitors",
    explanation:
      "Most initial regimens combine two NRTIs as a backbone with a third agent from another class — commonly an integrase strand transfer inhibitor. Using multiple classes suppresses replication and prevents resistance, the core of combination antiretroviral therapy.",
    choices: [
      { text: "Two NRTIs plus a third agent from another class", isCorrect: true },
      { text: "A single NRTI alone" },
      { text: "Two drugs from the same class" },
      { text: "An antifungal plus an antibacterial" },
      { text: "A neuraminidase inhibitor plus acyclovir" },
    ],
  },
  {
    stem: "Enfuvirtide, a fusion inhibitor, blocks HIV at which stage of its life cycle?",
    topic: "HIV — Reverse Transcriptase Inhibitors",
    explanation:
      "Enfuvirtide binds the viral gp41 protein and prevents fusion of the viral envelope with the host cell membrane, blocking entry before any reverse transcription occurs. It is reserved for resistant cases and given by injection.",
    choices: [
      { text: "Entry, by blocking fusion with the host membrane", isCorrect: true },
      { text: "Integration into host DNA" },
      { text: "Protease cleavage of polyproteins" },
      { text: "Neuraminidase-mediated release" },
      { text: "DNA polymerase activity" },
    ],
  },
  {
    stem: "Which class-typical metabolic effects are associated with HIV protease inhibitors? Select all that apply.",
    type: "MULTI",
    topic: "HIV — Protease & Integrase Inhibitors",
    explanation:
      "Protease inhibitors are linked to hyperglycemia and insulin resistance, dyslipidemia, and fat redistribution (lipodystrophy). They do not typically improve insulin sensitivity, and they are not known for causing the tendon rupture characteristic of fluoroquinolones.",
    choices: [
      { text: "Hyperglycemia and insulin resistance", isCorrect: true },
      { text: "Dyslipidemia", isCorrect: true },
      { text: "Fat redistribution (lipodystrophy)", isCorrect: true },
      { text: "Improved insulin sensitivity" },
      { text: "Tendon rupture" },
    ],
  },
  {
    stem: "Interferon-based regimens have largely been replaced for hepatitis C because direct-acting antivirals:",
    topic: "Hepatitis Antivirals",
    explanation:
      "Direct-acting antivirals are oral, better tolerated, of shorter duration, and cure the large majority of patients, whereas interferon caused flu-like and psychiatric side effects with lower cure rates. This shift transformed hepatitis C care.",
    choices: [
      { text: "Are oral, better tolerated, and cure most patients", isCorrect: true },
      { text: "Are cheaper but less effective" },
      { text: "Must be given intravenously for years" },
      { text: "Only suppress the virus temporarily" },
      { text: "Work by boosting interferon toxicity" },
    ],
  },
  {
    stem: "A key counseling point for a patient starting rifampin who is also on an azole antifungal or oral contraceptive is that rifampin:",
    topic: "Hepatitis Antivirals",
    explanation:
      "Although rifampin is an antimycobacterial, its potent induction of hepatic CYP enzymes markedly lowers levels of many co-administered drugs, including azoles and hormonal contraceptives. Recognizing enzyme induction is central to avoiding therapeutic failures — a principle that also applies when combining antivirals with interacting drugs.",
    choices: [
      { text: "Induces hepatic enzymes and can lower partner-drug levels", isCorrect: true },
      { text: "Inhibits hepatic enzymes and raises partner-drug levels" },
      { text: "Has no effect on other drugs" },
      { text: "Blocks renal excretion of all drugs" },
      { text: "Only interacts with food" },
    ],
  },
  {
    stem: "Fluconazole is a preferred agent for which infection because of its excellent oral absorption and CNS penetration?",
    topic: "Polyene & Azole Antifungals",
    explanation:
      "Fluconazole is used for many Candida infections and, importantly, for consolidation and maintenance therapy of cryptococcal meningitis after initial amphotericin-based induction, owing to its good CNS penetration and oral bioavailability. Spectrum limits (e.g., against molds) still apply.",
    choices: [
      { text: "Cryptococcal meningitis maintenance and candidiasis", isCorrect: true },
      { text: "Invasive aspergillosis as sole therapy" },
      { text: "Tuberculosis" },
      { text: "Influenza" },
      { text: "Bacterial endocarditis" },
    ],
  },
  {
    stem: "Which antifungal mechanism is correctly paired with its drug?",
    topic: "Echinocandins & Other Antifungals",
    explanation:
      "Echinocandins such as caspofungin inhibit beta-1,3-glucan synthase in the cell wall. Azoles inhibit ergosterol synthesis and polyenes bind ergosterol, so pairing those with a glucan or polymerase target would be incorrect. Matching mechanism to drug is the recurring theme.",
    choices: [
      { text: "Caspofungin — beta-glucan synthase inhibition", isCorrect: true },
      { text: "Fluconazole — binding preformed ergosterol" },
      { text: "Amphotericin B — beta-glucan synthase inhibition" },
      { text: "Terbinafine — DNA polymerase inhibition" },
      { text: "Nystatin — squalene epoxidase inhibition" },
    ],
  },
  {
    stem: "Griseofulvin, used for certain dermatophyte infections, works by:",
    topic: "Echinocandins & Other Antifungals",
    explanation:
      "Griseofulvin disrupts fungal microtubules and is deposited in newly formed keratin, so it treats hair and nail dermatophytoses over prolonged courses as healthy keratin replaces infected tissue. It induces hepatic enzymes and can cause a disulfiram-like reaction.",
    choices: [
      { text: "Disrupting fungal microtubules and depositing in keratin", isCorrect: true },
      { text: "Binding ergosterol to form pores" },
      { text: "Inhibiting beta-glucan synthase" },
      { text: "Blocking neuraminidase" },
      { text: "Inhibiting reverse transcriptase" },
    ],
  },
  {
    stem: "True or False: Echinocandins are generally well tolerated because human cells lack the fungal cell-wall target they inhibit.",
    type: "TRUE_FALSE",
    topic: "Echinocandins & Other Antifungals",
    explanation:
      "True. Because beta-1,3-glucan synthase and the fungal cell wall have no human counterpart, echinocandins have a favorable safety profile and few serious toxicities, which supports their first-line use for many invasive Candida infections.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "Mefloquine is used for malaria prophylaxis in some regions but is limited by which adverse effects?",
    topic: "Antimalarials",
    explanation:
      "Mefloquine can cause neuropsychiatric effects such as vivid dreams, anxiety, and rarely psychosis or seizures, so it is avoided in patients with certain psychiatric or seizure histories. Weekly dosing aids adherence where it is appropriate.",
    choices: [
      { text: "Neuropsychiatric effects", isCorrect: true },
      { text: "Tendon rupture" },
      { text: "Gray baby syndrome" },
      { text: "Permanent tooth staining" },
      { text: "Optic neuritis" },
    ],
  },
  {
    stem: "Atovaquone-proguanil is a commonly used combination for malaria prophylaxis and treatment because it:",
    topic: "Antimalarials",
    explanation:
      "Atovaquone inhibits the parasite mitochondrial electron transport chain and proguanil adds antifolate activity, giving effective, generally well-tolerated coverage against chloroquine-resistant falciparum malaria. Daily dosing and cost are its main practical limitations.",
    choices: [
      { text: "Targets the parasite mitochondrion and folate pathway together", isCorrect: true },
      { text: "Eliminates only liver hypnozoites" },
      { text: "Acts by binding ergosterol" },
      { text: "Inhibits neuraminidase" },
      { text: "Works only against bacteria" },
    ],
  },
  {
    stem: "Which antiparasitic and its use are correctly paired? Select all that apply.",
    type: "MULTI",
    topic: "Antiprotozoals",
    explanation:
      "Metronidazole treats giardiasis, amebiasis and trichomoniasis; pyrimethamine-sulfadiazine treats toxoplasmosis; and trimethoprim-sulfamethoxazole treats Pneumocystis. Praziquantel targets flukes and tapeworms, not malaria, and amphotericin B is an antifungal, not an antimalarial.",
    choices: [
      { text: "Metronidazole — giardiasis", isCorrect: true },
      { text: "Pyrimethamine-sulfadiazine — toxoplasmosis", isCorrect: true },
      { text: "Trimethoprim-sulfamethoxazole — Pneumocystis", isCorrect: true },
      { text: "Praziquantel — malaria" },
      { text: "Amphotericin B — malaria" },
    ],
  },
  {
    stem: "Nitazoxanide is used to treat which parasitic gastrointestinal infection?",
    topic: "Antiprotozoals",
    explanation:
      "Nitazoxanide interferes with anaerobic energy metabolism and is used for Cryptosporidium and Giardia infections, including in immunocompetent patients. Its activity against these protozoa defines its niche.",
    choices: [
      { text: "Cryptosporidiosis", isCorrect: true },
      { text: "Malaria" },
      { text: "Toxoplasmosis" },
      { text: "Aspergillosis" },
      { text: "Influenza" },
    ],
  },
  {
    stem: "Pinworm (Enterobius vermicularis) infection is typically treated with a benzimidazole or with:",
    topic: "Anthelmintics",
    explanation:
      "Pyrantel pamoate, a depolarizing neuromuscular blocker of the worm, paralyzes the parasite so it is expelled; albendazole or mebendazole are alternatives, often with a repeat dose in two weeks to catch newly hatched worms. Household treatment reduces reinfection.",
    choices: [
      { text: "Pyrantel pamoate", isCorrect: true },
      { text: "Fluconazole" },
      { text: "Acyclovir" },
      { text: "Vancomycin" },
      { text: "Oseltamivir" },
    ],
  },
  {
    stem: "True or False: Ivermectin's selectivity arises partly because its target chloride channels are absent in mammals and it is largely kept out of the mammalian CNS.",
    type: "TRUE_FALSE",
    topic: "Anthelmintics",
    explanation:
      "True. Glutamate-gated chloride channels are found in invertebrates but not mammals, and P-glycoprotein normally limits ivermectin's entry into the mammalian brain, together giving a wide safety margin. This explains its favorable tolerability.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  {
    stem: "The reason antibacterial drugs have so many more targets than antivirals ultimately comes down to:",
    topic: "Antimicrobial Principles",
    explanation:
      "Bacteria are independent cells with many unique structures — a peptidoglycan wall, 70S ribosomes, distinct folate synthesis — offering numerous selective targets, whereas viruses borrow host machinery. This difference in biology shapes the size of each drug arsenal.",
    choices: [
      { text: "Bacteria have many unique cellular structures viruses lack", isCorrect: true },
      { text: "Viruses are larger and easier to target" },
      { text: "Bacteria use host ribosomes" },
      { text: "Antivirals are simply understudied" },
      { text: "Viruses have thick cell walls" },
    ],
  },
  {
    stem: "A patient with suspected bacterial meningitis should receive antibiotics:",
    topic: "Clinical Application",
    explanation:
      "In suspected bacterial meningitis, empiric antibiotics (and dexamethasone where indicated) are given without delay, even before or immediately after obtaining cultures and imaging, because outcomes worsen rapidly with any delay. Speed is the priority.",
    choices: [
      { text: "As soon as possible, without delaying for every test result", isCorrect: true },
      { text: "Only after full susceptibility testing returns" },
      { text: "Only if the patient is afebrile" },
      { text: "After a week of observation" },
      { text: "Only if antifungals have failed" },
    ],
  },
  {
    stem: "An organ transplant recipient on chronic immunosuppression is given prophylaxis against several opportunistic infections. Which pairing of prophylaxis and target is correct?",
    topic: "Clinical Application",
    explanation:
      "Trimethoprim-sulfamethoxazole prevents Pneumocystis jirovecii pneumonia, a standard prophylaxis in significant immunosuppression. Acyclovir or valganciclovir targets herpesviruses/CMV, not Pneumocystis, so matching each agent to its target is the key clinical skill.",
    choices: [
      { text: "Trimethoprim-sulfamethoxazole — Pneumocystis jirovecii", isCorrect: true },
      { text: "Trimethoprim-sulfamethoxazole — cytomegalovirus" },
      { text: "Acyclovir — Pneumocystis jirovecii" },
      { text: "Fluconazole — influenza" },
      { text: "Oseltamivir — Candida" },
    ],
  },
  {
    stem: "Amphotericin B infusion reactions (fever, chills, rigors) can often be reduced by:",
    topic: "Polyene & Azole Antifungals",
    explanation:
      "Premedication (for example with antipyretics or antihistamines), adequate hydration, and use of lipid formulations reduce the infusion reactions and nephrotoxicity of amphotericin B. These practical measures make necessary therapy more tolerable.",
    choices: [
      { text: "Premedication, hydration, and lipid formulations", isCorrect: true },
      { text: "Rapid bolus administration" },
      { text: "Withholding all fluids" },
      { text: "Adding a second polyene" },
      { text: "Giving it only orally" },
    ],
  },
  {
    stem: "Which statement about antiviral therapy for chronic viral infections such as HIV and hepatitis B is most accurate?",
    topic: "Clinical Application",
    explanation:
      "For HIV and hepatitis B, current antivirals suppress viral replication and control disease but do not eradicate latent or integrated virus, so long-term or lifelong therapy is often required. Hepatitis C is the notable exception, where direct-acting antivirals achieve cure.",
    choices: [
      { text: "They usually suppress rather than eradicate, often needing long-term use", isCorrect: true },
      { text: "A single course always eradicates the virus" },
      { text: "They are curative in one dose for HIV" },
      { text: "They work by killing all host cells" },
      { text: "They are interchangeable with antibiotics" },
    ],
  },
];
