/**
 * BIOCHEMISTRY — PRACTICE SET 6
 * Molecular Biology & Genetics
 *
 * Difficulty: Advanced. DNA structure, replication and repair; transcription,
 * RNA processing and translation; gene regulation; mutations; laboratory
 * techniques; inheritance patterns; and population and cancer genetics. Pairs
 * with Set 5 to build Exam 3.
 *
 * Item mix: single-best-answer, select-all-that-apply, and true/false, with
 * clinical scenarios. Option counts vary from four to seven, as on real US board
 * exams. Correct-answer position is randomized at seed time by the engine, so no
 * positional pattern is exploitable.
 */

import type { Q } from "../_lib/qbank";

export const BIOCHEMISTRY_SET_6: Q[] = [
  {
    stem: "In double-stranded DNA, adenine pairs with thymine and guanine pairs with cytosine. The G-C pair is more stable than the A-T pair because it has:",
    topic: "DNA Structure",
    explanation:
      "Guanine-cytosine pairs share three hydrogen bonds versus two for adenine-thymine, so GC-rich regions require more energy (higher temperature) to melt.",
    choices: [
      { text: "Three hydrogen bonds instead of two", isCorrect: true },
      { text: "A covalent bond between bases" },
      { text: "An extra phosphate bridge" },
      { text: "Two hydrogen bonds instead of three" },
      { text: "No base stacking" },
    ],
  },
  {
    stem: "The two strands of a DNA double helix are described as antiparallel, meaning:",
    topic: "DNA Structure",
    explanation:
      "One strand runs 5' to 3' while its complement runs 3' to 5'; this antiparallel arrangement is required for proper base pairing and dictates the directionality of replication and transcription.",
    choices: [
      { text: "One strand runs 5' to 3' and the other 3' to 5'", isCorrect: true },
      { text: "Both strands run 5' to 3' in the same direction" },
      { text: "The strands are identical in sequence" },
      { text: "The strands are joined by peptide bonds" },
      { text: "The strands never separate" },
    ],
  },
  {
    stem: "Chargaff's rules state that in double-stranded DNA the amount of adenine equals thymine and guanine equals cytosine. A sample with 30% adenine therefore contains what percentage of guanine?",
    topic: "DNA Structure",
    explanation:
      "If A is 30%, then T is 30% (A=T), leaving 40% for G+C; since G=C, guanine is 20%. Applying Chargaff's rules lets you deduce all base fractions from one.",
    choices: [
      { text: "20%", isCorrect: true },
      { text: "30%" },
      { text: "40%" },
      { text: "10%" },
      { text: "70%" },
    ],
  },
  {
    stem: "Which bonds hold the DNA double helix together and along its backbone? Select all that apply.",
    type: "MULTI",
    topic: "DNA Structure",
    explanation:
      "Hydrogen bonds link complementary bases across the helix, base-stacking (hydrophobic) interactions stabilize the stacked bases, and phosphodiester bonds join nucleotides along each backbone. Peptide bonds and glycosidic links between adjacent nucleotides are not part of this.",
    choices: [
      { text: "Hydrogen bonds between complementary bases", isCorrect: true },
      { text: "Base-stacking hydrophobic interactions", isCorrect: true },
      { text: "Phosphodiester bonds along each backbone", isCorrect: true },
      { text: "Peptide bonds between bases" },
      { text: "Disulfide bonds between strands" },
    ],
  },
  {
    stem: "Purines and pyrimidines differ structurally in that purines (adenine and guanine) have:",
    topic: "DNA Structure",
    explanation:
      "Purines are double-ring (fused five- and six-membered rings), while pyrimidines (cytosine, thymine, uracil) are single six-membered rings; pairing a purine with a pyrimidine keeps the helix a constant width.",
    choices: [
      { text: "A double-ring structure", isCorrect: true },
      { text: "A single-ring structure" },
      { text: "No nitrogen atoms" },
      { text: "A ribose in place of deoxyribose" },
      { text: "Three fused rings" },
    ],
  },
  {
    stem: "True or False: RNA differs from DNA in using ribose instead of deoxyribose and uracil in place of thymine.",
    type: "TRUE_FALSE",
    topic: "DNA Structure",
    explanation:
      "True. RNA contains ribose (with a 2'-hydroxyl) and uses uracil rather than thymine; these differences make RNA less stable and suited to its transient roles.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "DNA replication is described as semiconservative, meaning each daughter molecule contains:",
    topic: "DNA Replication",
    explanation:
      "Semiconservative replication produces two duplexes, each with one parental (template) strand and one newly synthesized strand, as shown by the Meselson-Stahl experiment.",
    choices: [
      { text: "One parental strand and one new strand", isCorrect: true },
      { text: "Two entirely new strands" },
      { text: "Two parental strands" },
      { text: "Only fragments of old DNA" },
      { text: "Randomly mixed old and new pieces in each strand" },
    ],
  },
  {
    stem: "DNA polymerases synthesize new DNA only in the 5' to 3' direction and require a primer because they:",
    topic: "DNA Replication",
    explanation:
      "DNA polymerases add nucleotides to a free 3'-hydroxyl and cannot start a strand de novo, so a short RNA primer laid down by primase provides the initial 3'-OH.",
    choices: [
      { text: "Can only extend an existing 3'-hydroxyl group", isCorrect: true },
      { text: "Read the template 5' to 3'" },
      { text: "Add nucleotides to the 5' phosphate" },
      { text: "Synthesize RNA, not DNA" },
      { text: "Do not need a template" },
    ],
  },
  {
    stem: "Because of the antiparallel template and 5'-to-3' synthesis, one new strand is made continuously and the other in short pieces. The short pieces of the lagging strand are:",
    topic: "DNA Replication",
    explanation:
      "The lagging strand is synthesized discontinuously as Okazaki fragments, each primed separately; primers are later removed and the fragments joined by DNA ligase.",
    choices: [
      { text: "Okazaki fragments", isCorrect: true },
      { text: "Telomeres" },
      { text: "Introns" },
      { text: "Nucleosomes" },
      { text: "Replicons" },
    ],
  },
  {
    stem: "Match each replication protein to its function. Which pairings are correct? Select all that apply.",
    type: "MULTI",
    topic: "DNA Replication",
    explanation:
      "Helicase unwinds the duplex, primase lays down RNA primers, DNA ligase seals nicks between fragments, and topoisomerase relieves supercoiling ahead of the fork. Ribosomes are not part of DNA replication.",
    choices: [
      { text: "Helicase — unwinds the double helix", isCorrect: true },
      { text: "Primase — synthesizes RNA primers", isCorrect: true },
      { text: "DNA ligase — joins Okazaki fragments", isCorrect: true },
      { text: "Topoisomerase — relieves supercoiling", isCorrect: true },
      { text: "Ribosome — synthesizes the new DNA strand" },
    ],
  },
  {
    stem: "Telomeres shorten with each round of replication in most somatic cells. The enzyme that extends telomeres, active in germ cells, stem cells, and many cancers, is:",
    topic: "DNA Replication",
    explanation:
      "Telomerase, a reverse transcriptase carrying its own RNA template, adds repetitive sequence to chromosome ends, offsetting the end-replication problem; its reactivation contributes to cellular immortality in cancer.",
    choices: [
      { text: "Telomerase", isCorrect: true },
      { text: "DNA polymerase III" },
      { text: "Primase" },
      { text: "Topoisomerase II" },
      { text: "DNA ligase" },
    ],
  },
  {
    stem: "Fluoroquinolone antibiotics work by inhibiting bacterial DNA gyrase (a topoisomerase). This blocks replication because gyrase normally:",
    topic: "DNA Replication",
    explanation:
      "DNA gyrase introduces negative supercoils and relieves the torsional strain that builds ahead of the replication fork; inhibiting it stalls unwinding and replication, killing bacteria.",
    choices: [
      { text: "Relieves supercoiling strain ahead of the fork", isCorrect: true },
      { text: "Adds RNA primers" },
      { text: "Joins Okazaki fragments" },
      { text: "Proofreads new DNA" },
      { text: "Synthesizes the leading strand" },
    ],
  },
  {
    stem: "A young patient develops many skin cancers and extreme sensitivity to sunlight due to a defect in removing ultraviolet-induced pyrimidine dimers. The failing repair pathway is:",
    topic: "DNA Repair",
    explanation:
      "Xeroderma pigmentosum results from defective nucleotide excision repair, which normally removes bulky, helix-distorting lesions such as UV pyrimidine dimers; without it, mutations and skin cancers accumulate.",
    choices: [
      { text: "Nucleotide excision repair", isCorrect: true },
      { text: "Mismatch repair" },
      { text: "Base excision repair" },
      { text: "Non-homologous end joining" },
      { text: "Homologous recombination" },
    ],
  },
  {
    stem: "Hereditary nonpolyposis colorectal cancer (Lynch syndrome) arises from defects in the pathway that corrects base-pairing errors escaping polymerase proofreading. That pathway is:",
    topic: "DNA Repair",
    explanation:
      "Lynch syndrome is caused by mismatch repair defects (e.g., MLH1, MSH2), which normally fix replication mispairs and small insertion/deletion loops; failure produces microsatellite instability and colorectal and other cancers.",
    choices: [
      { text: "Mismatch repair", isCorrect: true },
      { text: "Nucleotide excision repair" },
      { text: "Base excision repair" },
      { text: "Direct reversal" },
      { text: "Homologous recombination" },
    ],
  },
  {
    stem: "Spontaneous deamination of cytosine to uracil in DNA is corrected by removing the errant base with a glycosylase. This is the first step of:",
    topic: "DNA Repair",
    explanation:
      "Base excision repair uses a DNA glycosylase to excise a single damaged or inappropriate base (such as uracil), leaving an abasic site that is then repaired; it handles small, non-helix-distorting lesions.",
    choices: [
      { text: "Base excision repair", isCorrect: true },
      { text: "Nucleotide excision repair" },
      { text: "Mismatch repair" },
      { text: "Non-homologous end joining" },
      { text: "Homologous recombination" },
    ],
  },
  {
    stem: "BRCA1 and BRCA2 mutations increase breast and ovarian cancer risk because these proteins participate in:",
    topic: "DNA Repair",
    explanation:
      "BRCA1/2 function in homologous recombination repair of double-strand breaks; their loss forces error-prone repair and genomic instability, and underlies the synthetic-lethal sensitivity to PARP inhibitors.",
    choices: [
      { text: "Homologous recombination repair of double-strand breaks", isCorrect: true },
      { text: "Removal of UV dimers" },
      { text: "Correction of single mispaired bases" },
      { text: "RNA splicing" },
      { text: "Telomere extension" },
    ],
  },
  {
    stem: "Which DNA-repair pathways are correctly matched to the lesion they address? Select all that apply.",
    type: "MULTI",
    topic: "DNA Repair",
    explanation:
      "Nucleotide excision repair handles bulky UV dimers; mismatch repair fixes replication mispairs; base excision repair removes small damaged bases like uracil; homologous recombination repairs double-strand breaks. Translation is not a repair pathway.",
    choices: [
      { text: "Nucleotide excision repair — UV pyrimidine dimers", isCorrect: true },
      { text: "Mismatch repair — replication base-pair mismatches", isCorrect: true },
      { text: "Base excision repair — a single deaminated base", isCorrect: true },
      { text: "Homologous recombination — double-strand breaks", isCorrect: true },
      { text: "Translation — corrects mismatched bases" },
    ],
  },
  {
    stem: "In eukaryotes, the enzyme that transcribes protein-coding genes into messenger RNA is:",
    topic: "Transcription",
    explanation:
      "RNA polymerase II synthesizes mRNA (and some small RNAs) in eukaryotes; polymerase I makes rRNA and polymerase III makes tRNA and 5S rRNA. Alpha-amanitin from death-cap mushrooms potently inhibits pol II.",
    choices: [
      { text: "RNA polymerase II", isCorrect: true },
      { text: "RNA polymerase I" },
      { text: "RNA polymerase III" },
      { text: "DNA polymerase" },
      { text: "Primase" },
    ],
  },
  {
    stem: "RNA polymerase reads the template strand and produces an mRNA identical in sequence (except U for T) to the:",
    topic: "Transcription",
    explanation:
      "The mRNA matches the coding (sense) strand except that uracil replaces thymine, because both are complementary to the template (antisense) strand. Knowing this lets you read off mRNA from the coding strand directly.",
    choices: [
      { text: "Coding (sense) strand", isCorrect: true },
      { text: "Template (antisense) strand" },
      { text: "Lagging strand" },
      { text: "Primer strand" },
      { text: "Okazaki fragment" },
    ],
  },
  {
    stem: "The TATA box found near many eukaryotic promoters functions to:",
    topic: "Transcription",
    explanation:
      "The TATA box, about 25 base pairs upstream of the start, is bound by TATA-binding protein within TFIID to help position RNA polymerase II and assemble the pre-initiation complex.",
    choices: [
      { text: "Position the pre-initiation complex and start site", isCorrect: true },
      { text: "Terminate transcription" },
      { text: "Add the poly-A tail" },
      { text: "Splice out introns" },
      { text: "Encode the first amino acid" },
    ],
  },
  {
    stem: "Which statements about transcription are correct? Select all that apply.",
    type: "MULTI",
    topic: "Transcription",
    explanation:
      "RNA is synthesized 5' to 3', RNA polymerase needs no primer (unlike DNA polymerase), and only one strand serves as template for a given gene. RNA polymerase does not proofread as robustly as DNA polymerase, so it is not error-free.",
    choices: [
      { text: "RNA is synthesized in the 5'-to-3' direction", isCorrect: true },
      { text: "RNA polymerase does not require a primer", isCorrect: true },
      { text: "Only one DNA strand is the template for a given gene", isCorrect: true },
      { text: "RNA polymerase proofreads with the fidelity of DNA polymerase" },
      { text: "Transcription copies both strands into one mRNA" },
    ],
  },
  {
    stem: "Before a eukaryotic mRNA leaves the nucleus, three main modifications occur. Which modification protects the 5' end and aids ribosome binding?",
    topic: "RNA Processing",
    explanation:
      "A 7-methylguanosine cap is added to the 5' end; it protects against exonucleases and is recognized by the translation initiation machinery. The 3' end gains a poly-A tail, and introns are spliced out.",
    choices: [
      { text: "Addition of a 5' 7-methylguanosine cap", isCorrect: true },
      { text: "Addition of the poly-A tail" },
      { text: "Splicing out of exons" },
      { text: "Removal of the start codon" },
      { text: "Attachment of a ribosome" },
    ],
  },
  {
    stem: "Introns are removed and exons joined by a complex of small nuclear ribonucleoproteins called the:",
    topic: "RNA Processing",
    explanation:
      "The spliceosome, built from snRNPs (U1, U2, U4, U5, U6), recognizes splice sites and excises introns as a lariat, ligating exons. Antibodies to snRNPs (anti-Sm) occur in lupus.",
    choices: [
      { text: "Spliceosome", isCorrect: true },
      { text: "Ribosome" },
      { text: "Proteasome" },
      { text: "Replisome" },
      { text: "Nucleosome" },
    ],
  },
  {
    stem: "Alternative splicing increases protein diversity because it allows a single gene to:",
    topic: "RNA Processing",
    explanation:
      "By joining different combinations of exons, alternative splicing lets one gene encode multiple protein isoforms, expanding the proteome well beyond the number of genes.",
    choices: [
      { text: "Produce multiple distinct proteins from one transcript", isCorrect: true },
      { text: "Replicate faster" },
      { text: "Skip transcription entirely" },
      { text: "Avoid needing a promoter" },
      { text: "Convert RNA back to DNA" },
    ],
  },
  {
    stem: "True or False: In eukaryotes, transcription occurs in the nucleus and translation in the cytoplasm, so the two are physically separated, unlike in prokaryotes where they are coupled.",
    type: "TRUE_FALSE",
    topic: "RNA Processing",
    explanation:
      "True. The nuclear envelope separates eukaryotic transcription from translation, allowing extensive RNA processing before export; prokaryotes lack a nucleus, so ribosomes translate mRNA as it is being made.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The genetic code is described as degenerate (redundant), meaning that:",
    topic: "Translation",
    explanation:
      "Most amino acids are specified by more than one codon, so the code is degenerate; this buffers many third-position (wobble) changes, reducing the impact of some mutations.",
    choices: [
      { text: "Most amino acids are encoded by more than one codon", isCorrect: true },
      { text: "Each codon codes for several amino acids" },
      { text: "Codons overlap one another" },
      { text: "The code differs in every species" },
      { text: "Every amino acid has exactly one codon" },
    ],
  },
  {
    stem: "Translation begins at the start codon AUG, which codes for methionine. The three stop codons that terminate translation are:",
    topic: "Translation",
    explanation:
      "UAA, UAG, and UGA are stop codons; they are recognized by release factors rather than tRNAs, ending elongation and releasing the polypeptide.",
    choices: [
      { text: "UAA, UAG, UGA", isCorrect: true },
      { text: "AUG, GUG, UUG" },
      { text: "UAA, AUG, UGG" },
      { text: "UUU, CCC, GGG" },
      { text: "UAC, AUC, UGC" },
    ],
  },
  {
    stem: "The wobble hypothesis explains how fewer than 61 tRNAs can read all sense codons. Wobble occurs at:",
    topic: "Translation",
    explanation:
      "Flexible (wobble) pairing at the third codon position lets a single tRNA anticodon recognize multiple codons that differ only at that position, matching the degeneracy of the code.",
    choices: [
      { text: "The third position of the codon", isCorrect: true },
      { text: "The first position of the codon" },
      { text: "The second position of the codon" },
      { text: "The poly-A tail" },
      { text: "The 5' cap" },
    ],
  },
  {
    stem: "Several antibiotics act by inhibiting bacterial protein synthesis. Which mechanisms are correctly stated? Select all that apply.",
    type: "MULTI",
    topic: "Translation",
    explanation:
      "Aminoglycosides impair initiation and cause misreading at the 30S subunit; tetracyclines block tRNA binding to the 30S A site; macrolides block translocation at the 50S subunit. Fluoroquinolones inhibit DNA gyrase, not the ribosome.",
    choices: [
      { text: "Aminoglycosides cause 30S misreading and block initiation", isCorrect: true },
      { text: "Tetracyclines block aminoacyl-tRNA binding to the 30S A site", isCorrect: true },
      { text: "Macrolides inhibit translocation at the 50S subunit", isCorrect: true },
      { text: "Fluoroquinolones bind the 50S subunit to stop translation" },
      { text: "Penicillins block the ribosomal A site" },
    ],
  },
  {
    stem: "In the bacterial lac operon, lactose (via allolactose) increases transcription of the lac genes by:",
    topic: "Gene Regulation",
    explanation:
      "Allolactose binds the lac repressor and inactivates it, releasing the operator so RNA polymerase can transcribe the genes for lactose metabolism; this is classic negative, inducible control.",
    choices: [
      { text: "Inactivating the repressor so transcription proceeds", isCorrect: true },
      { text: "Activating a repressor to block transcription" },
      { text: "Adding a poly-A tail to the operon" },
      { text: "Splicing the operon mRNA" },
      { text: "Binding the ribosome directly" },
    ],
  },
  {
    stem: "The lac operon is also under positive control: when glucose is low, cyclic AMP rises and CAP (catabolite activator protein) binds to:",
    topic: "Gene Regulation",
    explanation:
      "Low glucose raises cAMP, which binds CAP; the cAMP-CAP complex binds upstream DNA and strongly promotes RNA polymerase binding, so lac genes are maximally expressed only when glucose is scarce and lactose is present.",
    choices: [
      { text: "Enhance RNA polymerase binding to the promoter", isCorrect: true },
      { text: "Block the ribosome" },
      { text: "Degrade lactose directly" },
      { text: "Remove introns from the operon" },
      { text: "Inactivate primase" },
    ],
  },
  {
    stem: "In eukaryotes, enhancers differ from promoters in that enhancers:",
    topic: "Gene Regulation",
    explanation:
      "Enhancers are regulatory sequences that can act at a distance and in either orientation, looping to contact the promoter and boost transcription, whereas the promoter sits at the transcription start site.",
    choices: [
      { text: "Can act at a distance and in either orientation", isCorrect: true },
      { text: "Must sit exactly at the start codon" },
      { text: "Encode the protein product" },
      { text: "Are found only in prokaryotes" },
      { text: "Terminate transcription" },
    ],
  },
  {
    stem: "Which chromatin modifications generally promote gene transcription? Select all that apply.",
    type: "MULTI",
    topic: "Gene Regulation",
    explanation:
      "Histone acetylation loosens chromatin and favors transcription, and certain histone methylation marks are activating. DNA methylation at promoter CpG islands and chromatin condensation (heterochromatin) generally silence genes.",
    choices: [
      { text: "Histone acetylation", isCorrect: true },
      { text: "Certain activating histone methylation marks", isCorrect: true },
      { text: "Promoter CpG-island DNA methylation" },
      { text: "Condensation into heterochromatin" },
      { text: "Loss of all histones from the promoter forever" },
    ],
  },
  {
    stem: "A single base substitution changes a codon from one amino acid to a different amino acid. This is a:",
    topic: "Mutations",
    explanation:
      "A missense mutation swaps one amino acid for another; its effect ranges from silent-like to severe depending on the residue, as in the single missense change of sickle cell disease.",
    choices: [
      { text: "Missense mutation", isCorrect: true },
      { text: "Nonsense mutation" },
      { text: "Silent mutation" },
      { text: "Frameshift mutation" },
      { text: "Splice-site mutation" },
    ],
  },
  {
    stem: "A base substitution that converts an amino-acid codon into a stop codon, truncating the protein, is a:",
    topic: "Mutations",
    explanation:
      "A nonsense mutation creates a premature stop codon, producing a shortened, usually nonfunctional protein; such transcripts are often degraded by nonsense-mediated decay.",
    choices: [
      { text: "Nonsense mutation", isCorrect: true },
      { text: "Missense mutation" },
      { text: "Silent mutation" },
      { text: "Frameshift mutation" },
      { text: "Duplication" },
    ],
  },
  {
    stem: "Insertion or deletion of a number of nucleotides not divisible by three is especially damaging because it:",
    topic: "Mutations",
    explanation:
      "A frameshift shifts the reading frame from the mutation onward, scrambling all downstream codons and usually creating a premature stop, so the protein is grossly altered.",
    choices: [
      { text: "Shifts the reading frame, altering all downstream codons", isCorrect: true },
      { text: "Changes only one amino acid" },
      { text: "Has no effect on the protein" },
      { text: "Only affects the promoter" },
      { text: "Adds a poly-A tail" },
    ],
  },
  {
    stem: "A base change in the third position of a codon that still specifies the same amino acid is called a silent mutation. This tolerance reflects:",
    topic: "Mutations",
    explanation:
      "Silent mutations are possible because the genetic code is degenerate, especially at the wobble (third) position, so many single-base changes there leave the encoded amino acid unchanged.",
    choices: [
      { text: "Degeneracy of the genetic code at the wobble position", isCorrect: true },
      { text: "Overlapping reading frames" },
      { text: "Proofreading by the ribosome" },
      { text: "Alternative splicing" },
      { text: "RNA editing of the codon" },
    ],
  },
  {
    stem: "Which changes are classified as point mutations? Select all that apply.",
    type: "MULTI",
    topic: "Mutations",
    explanation:
      "Point mutations are single-base changes: missense, nonsense, and silent substitutions all qualify. Large deletions of many bases and whole-chromosome aneuploidy are not point mutations.",
    choices: [
      { text: "Missense substitution", isCorrect: true },
      { text: "Nonsense substitution", isCorrect: true },
      { text: "Silent substitution", isCorrect: true },
      { text: "Deletion of an entire exon" },
      { text: "Trisomy of a chromosome" },
    ],
  },
  {
    stem: "The polymerase chain reaction (PCR) amplifies a specific DNA sequence. The step that separates the double-stranded template into single strands is:",
    topic: "Genetic Techniques",
    explanation:
      "Denaturation at about 95 degrees Celsius melts the strands apart; annealing then lets primers bind, and extension by a heat-stable polymerase copies the target. Cycling multiplies the DNA exponentially.",
    choices: [
      { text: "Denaturation by heating to about 95 degrees Celsius", isCorrect: true },
      { text: "Annealing of primers" },
      { text: "Extension by polymerase" },
      { text: "Ligation of fragments" },
      { text: "Gel electrophoresis" },
    ],
  },
  {
    stem: "Gel electrophoresis separates nucleic acid fragments primarily by:",
    topic: "Genetic Techniques",
    explanation:
      "DNA is negatively charged and migrates toward the positive electrode; smaller fragments move faster through the gel, so separation is chiefly by size (length).",
    choices: [
      { text: "Size, with smaller fragments migrating farther", isCorrect: true },
      { text: "Base sequence only" },
      { text: "Hydrophobicity" },
      { text: "Charge differences between fragments" },
      { text: "Melting temperature alone" },
    ],
  },
  {
    stem: "Match each blotting or detection technique to its target. Which pairings are correct? Select all that apply.",
    type: "MULTI",
    topic: "Genetic Techniques",
    explanation:
      "Southern blot detects DNA, Northern blot detects RNA, and Western blot detects protein; ELISA also detects proteins/antigens using antibodies. A Southern blot does not detect protein.",
    choices: [
      { text: "Southern blot — DNA", isCorrect: true },
      { text: "Northern blot — RNA", isCorrect: true },
      { text: "Western blot — protein", isCorrect: true },
      { text: "ELISA — protein/antigen", isCorrect: true },
      { text: "Southern blot — protein" },
    ],
  },
  {
    stem: "Sanger (dideoxy) sequencing determines a DNA sequence by incorporating chain-terminating nucleotides that lack a:",
    topic: "Genetic Techniques",
    explanation:
      "Dideoxynucleotides lack a 3'-hydroxyl, so once incorporated no further nucleotide can be added and the chain terminates; the set of terminated fragments reveals the sequence.",
    choices: [
      { text: "3'-hydroxyl group", isCorrect: true },
      { text: "5'-phosphate group" },
      { text: "Nitrogenous base" },
      { text: "Ribose sugar" },
      { text: "Hydrogen bond" },
    ],
  },
  {
    stem: "CRISPR-Cas9 has become a powerful genome-editing tool. Its specificity for a DNA target comes from:",
    topic: "Genetic Techniques",
    explanation:
      "A guide RNA base-pairs with the complementary DNA target, directing the Cas9 nuclease to cut at that site; changing the guide RNA reprograms the target, enabling precise editing.",
    choices: [
      { text: "A guide RNA that base-pairs with the target DNA", isCorrect: true },
      { text: "Random cutting by Cas9 alone" },
      { text: "An antibody that recognizes the gene" },
      { text: "A restriction enzyme's fixed recognition site" },
      { text: "Heat denaturation of the target" },
    ],
  },
  {
    stem: "Quantitative (real-time) PCR differs from conventional PCR in that it:",
    topic: "Genetic Techniques",
    explanation:
      "qPCR measures product accumulation during each cycle using fluorescence, allowing quantification of the starting template amount, whereas conventional PCR is analyzed only at the end.",
    choices: [
      { text: "Measures product in real time to quantify starting template", isCorrect: true },
      { text: "Uses no primers" },
      { text: "Cannot amplify DNA" },
      { text: "Requires no thermal cycling" },
      { text: "Detects only proteins" },
    ],
  },
  {
    stem: "A disease appears in every generation, affects males and females roughly equally, and an affected parent transmits it to about half of offspring. This pattern is:",
    topic: "Inheritance Patterns",
    explanation:
      "Vertical transmission through generations with roughly 50% of offspring affected and no sex predilection is typical autosomal dominant inheritance (e.g., Huntington disease, familial hypercholesterolemia).",
    choices: [
      { text: "Autosomal dominant", isCorrect: true },
      { text: "Autosomal recessive" },
      { text: "X-linked recessive" },
      { text: "Mitochondrial" },
      { text: "Y-linked" },
    ],
  },
  {
    stem: "A condition affects mainly males, is passed through unaffected carrier mothers, and shows no male-to-male transmission. The inheritance pattern is:",
    topic: "Inheritance Patterns",
    explanation:
      "X-linked recessive disorders (e.g., hemophilia, Duchenne) predominantly affect males, who inherit the affected X from carrier mothers; fathers cannot pass an X to sons, so male-to-male transmission is absent.",
    choices: [
      { text: "X-linked recessive", isCorrect: true },
      { text: "Autosomal dominant" },
      { text: "Autosomal recessive" },
      { text: "Mitochondrial" },
      { text: "X-linked dominant" },
    ],
  },
  {
    stem: "A trait transmitted only from affected mothers to all of their children, but never from affected fathers, indicates:",
    topic: "Inheritance Patterns",
    explanation:
      "Mitochondrial inheritance is maternal: because mitochondria come from the egg, an affected mother can pass the disorder to all children, while an affected father cannot transmit it (e.g., MELAS, LHON).",
    choices: [
      { text: "Mitochondrial (maternal) inheritance", isCorrect: true },
      { text: "Autosomal dominant" },
      { text: "X-linked recessive" },
      { text: "Y-linked" },
      { text: "Autosomal recessive" },
    ],
  },
  {
    stem: "Which features suggest autosomal recessive inheritance? Select all that apply.",
    type: "MULTI",
    topic: "Inheritance Patterns",
    explanation:
      "Autosomal recessive conditions often skip generations, affect both sexes equally, appear more often with consanguinity, and typically arise from two carrier parents. Male-to-male transmission does not exclude it, but appearing in every generation is more typical of dominant traits.",
    choices: [
      { text: "Trait may skip generations", isCorrect: true },
      { text: "Affects males and females equally", isCorrect: true },
      { text: "More common with parental consanguinity", isCorrect: true },
      { text: "Often born to two unaffected carrier parents", isCorrect: true },
      { text: "Appears in every single generation without exception" },
    ],
  },
  {
    stem: "The ABO blood group, in which both A and B alleles are fully expressed in an AB individual, illustrates:",
    topic: "Inheritance Patterns",
    explanation:
      "Codominance means two different alleles are both fully and simultaneously expressed, as in blood type AB where both A and B antigens appear; this differs from incomplete dominance (a blended phenotype).",
    choices: [
      { text: "Codominance", isCorrect: true },
      { text: "Incomplete dominance" },
      { text: "X-linkage" },
      { text: "Anticipation" },
      { text: "Imprinting" },
    ],
  },
  {
    stem: "Some triplet-repeat disorders worsen and appear earlier in successive generations as the repeat expands. This phenomenon is called:",
    topic: "Inheritance Patterns",
    explanation:
      "Anticipation describes earlier onset and greater severity in later generations, seen in trinucleotide-repeat diseases such as Huntington disease and myotonic dystrophy as the unstable repeat lengthens.",
    choices: [
      { text: "Anticipation", isCorrect: true },
      { text: "Codominance" },
      { text: "Pleiotropy" },
      { text: "Imprinting" },
      { text: "Mosaicism" },
    ],
  },
  {
    stem: "Under Hardy-Weinberg equilibrium with allele frequencies p and q, the frequency of heterozygous carriers is:",
    topic: "Population & Cancer Genetics",
    explanation:
      "Heterozygote frequency is 2pq. With the genotype frequencies p^2 + 2pq + q^2 = 1, this lets you estimate carrier frequency from disease prevalence (q^2) in a population.",
    choices: [
      { text: "2pq", isCorrect: true },
      { text: "p^2" },
      { text: "q^2" },
      { text: "p + q" },
      { text: "pq" },
    ],
  },
  {
    stem: "If an autosomal recessive disease affects 1 in 10,000 people, the approximate carrier frequency under Hardy-Weinberg is:",
    topic: "Population & Cancer Genetics",
    explanation:
      "q^2 = 1/10,000 so q = 0.01; carrier frequency 2pq is about 2(0.99)(0.01) which is roughly 0.02, or about 1 in 50. This is the standard board calculation.",
    choices: [
      { text: "About 1 in 50", isCorrect: true },
      { text: "About 1 in 100" },
      { text: "About 1 in 10,000" },
      { text: "About 1 in 5" },
      { text: "About 1 in 200" },
    ],
  },
  {
    stem: "Oncogenes and tumor suppressor genes differ in that, to promote cancer, oncogenes typically require and tumor suppressors typically require:",
    topic: "Population & Cancer Genetics",
    explanation:
      "Oncogenes are activated by gain-of-function changes in a single allele (dominant at the cell level), whereas tumor suppressors usually need loss of both alleles (Knudson two-hit) to remove their protective function.",
    choices: [
      { text: "One activated allele; loss of both alleles", isCorrect: true },
      { text: "Loss of both alleles; one activated allele" },
      { text: "No genetic change; two activating mutations" },
      { text: "Only germline changes; only somatic changes" },
      { text: "Amplification; the same amplification" },
    ],
  },
  {
    stem: "Knudson's two-hit hypothesis explains why inherited retinoblastoma occurs earlier and bilaterally. It states that:",
    topic: "Population & Cancer Genetics",
    explanation:
      "In hereditary cases one mutated RB allele is inherited (the first hit), so only one additional somatic hit is needed, producing earlier, bilateral tumors; sporadic cases require two somatic hits in the same cell.",
    choices: [
      { text: "Both copies of a tumor suppressor must be inactivated", isCorrect: true },
      { text: "A single oncogene mutation is sufficient" },
      { text: "Three separate mutations are always required" },
      { text: "Only germline mutations cause tumors" },
      { text: "Tumor suppressors act like oncogenes" },
    ],
  },
  {
    stem: "Which genes function as tumor suppressors whose loss contributes to cancer? Select all that apply.",
    type: "MULTI",
    topic: "Population & Cancer Genetics",
    explanation:
      "TP53, RB1, and APC are classic tumor suppressors; their inactivation removes growth restraints. RAS and MYC are proto-oncogenes that drive cancer when activated, not tumor suppressors.",
    choices: [
      { text: "TP53", isCorrect: true },
      { text: "RB1", isCorrect: true },
      { text: "APC", isCorrect: true },
      { text: "RAS" },
      { text: "MYC" },
    ],
  },
  {
    stem: "The p53 protein is called the guardian of the genome because, in response to DNA damage, it:",
    topic: "Population & Cancer Genetics",
    explanation:
      "p53 halts the cell cycle to allow repair and triggers apoptosis if damage is severe, preventing propagation of mutations; its loss (as in Li-Fraumeni syndrome) permits genomic instability and cancer.",
    choices: [
      { text: "Arrests the cell cycle and can trigger apoptosis", isCorrect: true },
      { text: "Speeds replication regardless of damage" },
      { text: "Extends telomeres" },
      { text: "Splices pre-mRNA" },
      { text: "Activates oncogenes directly" },
    ],
  },
  {
    stem: "Sickle cell disease results from a single missense mutation replacing glutamate with valine in beta-globin. At the molecular level this substitution:",
    topic: "Clinical Application",
    explanation:
      "Swapping a charged glutamate for hydrophobic valine creates a sticky patch that lets deoxygenated hemoglobin S polymerize, deforming red cells into sickles; it is the textbook example of a point mutation causing disease.",
    choices: [
      { text: "Introduces a hydrophobic residue that promotes HbS polymerization", isCorrect: true },
      { text: "Truncates the beta-globin chain" },
      { text: "Deletes an entire exon" },
      { text: "Shifts the reading frame" },
      { text: "Adds an extra heme group" },
    ],
  },
  {
    stem: "Cystic fibrosis is most commonly caused by the delta-F508 mutation, a three-base deletion. Its consequence is:",
    topic: "Clinical Application",
    explanation:
      "The delta-F508 deletion removes a single phenylalanine, causing the CFTR chloride channel to misfold and be degraded before reaching the membrane; loss of chloride transport thickens secretions in lung and pancreas.",
    choices: [
      { text: "Loss of one amino acid, causing CFTR misfolding and degradation", isCorrect: true },
      { text: "A premature stop codon truncating CFTR" },
      { text: "A frameshift scrambling all downstream codons" },
      { text: "Duplication of the CFTR gene" },
      { text: "A silent change with no effect" },
    ],
  },
  {
    stem: "Huntington disease is caused by expansion of a CAG trinucleotide repeat. Which features follow from this mechanism? Select all that apply.",
    type: "MULTI",
    topic: "Clinical Application",
    explanation:
      "CAG expansion encodes an elongated polyglutamine tract in huntingtin; the disorder is autosomal dominant, shows anticipation as the repeat expands in successive generations, and tends to present earlier with longer repeats. It is not X-linked.",
    choices: [
      { text: "It is inherited in an autosomal dominant pattern", isCorrect: true },
      { text: "It shows anticipation across generations", isCorrect: true },
      { text: "Longer repeats tend to cause earlier onset", isCorrect: true },
      { text: "It is X-linked recessive" },
      { text: "The repeat shortens with each generation" },
    ],
  },
  {
    stem: "Pharmacogenomic testing before starting certain drugs (e.g., checking TPMT before thiopurines or HLA-B*57:01 before abacavir) is useful because genetic variation can:",
    topic: "Clinical Application",
    explanation:
      "Inherited differences in drug-metabolizing enzymes and immune genes alter efficacy and toxicity; testing identifies patients at risk of severe reactions or altered metabolism, guiding safer dosing.",
    choices: [
      { text: "Predict altered drug metabolism or serious adverse reactions", isCorrect: true },
      { text: "Cure the underlying disease" },
      { text: "Replace the need for the drug" },
      { text: "Change the drug's chemical structure" },
      { text: "Eliminate all side effects" },
    ],
  },
  {
    stem: "A gene therapy strategy delivers a functional gene using a viral vector. A key requirement for lasting effect in dividing cells is that the therapeutic gene:",
    topic: "Clinical Application",
    explanation:
      "For durable correction in dividing tissue, the delivered gene must persist, either by integrating into the genome or by using a vector that is maintained through cell division; otherwise expression is lost as cells divide.",
    choices: [
      { text: "Persists through cell division (e.g., by integration)", isCorrect: true },
      { text: "Is rapidly degraded after delivery" },
      { text: "Remains only in the cytoplasm briefly" },
      { text: "Triggers immediate cell death" },
      { text: "Cannot be transcribed" },
    ],
  },
  {
    stem: "True or False: Because the genetic code is essentially universal, a human gene can be expressed in bacteria to manufacture a human protein such as insulin.",
    type: "TRUE_FALSE",
    topic: "Clinical Application",
    explanation:
      "True. The shared code lets bacteria translate a human coding sequence; recombinant DNA technology exploits this to mass-produce human insulin and other proteins, though introns must be removed first.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "A karyotype and molecular tests are ordered for a child with developmental delay. Which technique detects a small submicroscopic deletion too small to see on a routine karyotype?",
    topic: "Clinical Application",
    explanation:
      "Fluorescence in situ hybridization (FISH) uses a labeled probe to detect specific sequences and can reveal microdeletions (e.g., 22q11) that a standard karyotype misses; chromosomal microarray detects them genome-wide.",
    choices: [
      { text: "Fluorescence in situ hybridization (FISH)", isCorrect: true },
      { text: "Standard light-microscope karyotype alone" },
      { text: "Western blot" },
      { text: "ELISA" },
      { text: "Gram stain" },
    ],
  },
  {
    stem: "A researcher wants to measure how much of a specific protein a treatment produces in cultured cells. The most appropriate technique is:",
    topic: "Genetic Techniques",
    explanation:
      "A Western blot (or ELISA) detects and semi-quantifies a specific protein using antibodies; Northern blot would measure its mRNA, and Southern blot its DNA, not the protein itself.",
    choices: [
      { text: "Western blot", isCorrect: true },
      { text: "Southern blot" },
      { text: "PCR of genomic DNA" },
      { text: "Karyotyping" },
      { text: "Gel electrophoresis of DNA" },
    ],
  },
  {
    stem: "Restriction endonucleases are valuable in molecular cloning because they:",
    topic: "Genetic Techniques",
    explanation:
      "Restriction enzymes cut DNA at specific palindromic recognition sequences, often leaving sticky ends that allow fragments from different sources to be joined, enabling recombinant DNA construction.",
    choices: [
      { text: "Cut DNA at specific recognition sequences", isCorrect: true },
      { text: "Synthesize RNA primers" },
      { text: "Add poly-A tails" },
      { text: "Translate mRNA into protein" },
      { text: "Randomly shear DNA" },
    ],
  },
  {
    stem: "The DNA backbone is built from alternating sugar and phosphate groups joined by:",
    topic: "DNA Structure",
    explanation:
      "Phosphodiester bonds link the 3'-hydroxyl of one sugar to the 5'-phosphate of the next, forming the continuous sugar-phosphate backbone; the bases project inward to pair.",
    choices: [
      { text: "Phosphodiester bonds", isCorrect: true },
      { text: "Hydrogen bonds" },
      { text: "Peptide bonds" },
      { text: "Glycosidic bonds between backbones" },
      { text: "Ionic bonds" },
    ],
  },
  {
    stem: "True or False: A DNA sample that is GC-rich will have a higher melting temperature than an AT-rich sample of the same length.",
    type: "TRUE_FALSE",
    topic: "DNA Structure",
    explanation:
      "True. Each G-C pair has three hydrogen bonds versus two for A-T, so GC-rich DNA needs more heat to separate the strands, giving a higher melting temperature.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "In prokaryotes, the enzyme that removes RNA primers and fills the gaps with DNA is:",
    topic: "DNA Replication",
    explanation:
      "DNA polymerase I has 5'-to-3' exonuclease activity to remove RNA primers and fills the gaps with DNA; DNA ligase then seals the remaining nick. DNA polymerase III is the main replicative enzyme.",
    choices: [
      { text: "DNA polymerase I", isCorrect: true },
      { text: "DNA polymerase III" },
      { text: "Primase" },
      { text: "Helicase" },
      { text: "Telomerase" },
    ],
  },
  {
    stem: "The high fidelity of DNA replication owes much to the 3'-to-5' exonuclease activity of DNA polymerase, which provides:",
    topic: "DNA Replication",
    explanation:
      "Proofreading by the 3'-to-5' exonuclease removes a mis-incorporated nucleotide immediately after it is added, lowering the error rate dramatically compared with polymerases lacking this activity.",
    choices: [
      { text: "Proofreading that removes misincorporated nucleotides", isCorrect: true },
      { text: "Primer synthesis" },
      { text: "Unwinding of the helix" },
      { text: "Ligation of fragments" },
      { text: "Supercoil relief" },
    ],
  },
  {
    stem: "Which statements comparing prokaryotic and eukaryotic DNA replication are correct? Select all that apply.",
    type: "MULTI",
    topic: "DNA Replication",
    explanation:
      "Eukaryotic chromosomes have many origins of replication (prokaryotes typically one), eukaryotic DNA is packaged with histones, and eukaryotes must solve the end-replication problem with telomerase. Prokaryotic replication is not slower simply because it has more origins.",
    choices: [
      { text: "Eukaryotes use multiple origins per chromosome", isCorrect: true },
      { text: "Eukaryotic DNA is organized with histones", isCorrect: true },
      { text: "Eukaryotes use telomerase to maintain chromosome ends", isCorrect: true },
      { text: "Prokaryotes use telomerase to extend linear ends" },
      { text: "Eukaryotes replicate from a single origin only" },
    ],
  },
  {
    stem: "True or False: Defects in nucleotide excision repair, as in xeroderma pigmentosum, predispose to skin cancers because ultraviolet-induced dimers go unrepaired.",
    type: "TRUE_FALSE",
    topic: "DNA Repair",
    explanation:
      "True. Nucleotide excision repair removes bulky UV photoproducts; without it, mutations accumulate in sun-exposed skin, causing the early, numerous skin cancers of xeroderma pigmentosum.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Double-strand breaks repaired by non-homologous end joining are more error-prone than homologous recombination because non-homologous end joining:",
    topic: "DNA Repair",
    explanation:
      "Non-homologous end joining directly ligates broken ends without a homologous template, often losing or adding a few bases, whereas homologous recombination copies an intact sister chromatid for accurate repair.",
    choices: [
      { text: "Rejoins ends without a template, sometimes losing bases", isCorrect: true },
      { text: "Copies an intact sister chromatid precisely" },
      { text: "Only repairs single-base mismatches" },
      { text: "Removes UV dimers" },
      { text: "Extends telomeres" },
    ],
  },
  {
    stem: "Alpha-amanitin, the toxin of the death-cap mushroom, is lethal largely because it inhibits:",
    topic: "Transcription",
    explanation:
      "Alpha-amanitin potently blocks RNA polymerase II, halting mRNA synthesis; the liver and other tissues fail as protein synthesis collapses, illustrating pol II's central role.",
    choices: [
      { text: "RNA polymerase II", isCorrect: true },
      { text: "DNA polymerase III" },
      { text: "The ribosome" },
      { text: "RNA polymerase I only" },
      { text: "Reverse transcriptase" },
    ],
  },
  {
    stem: "The template (antisense) strand of a gene is the strand that:",
    topic: "Transcription",
    explanation:
      "RNA polymerase reads the template strand 3' to 5' to build mRNA 5' to 3'; the mRNA sequence therefore matches the coding strand (with U for T). Identifying the template lets you predict the transcript.",
    choices: [
      { text: "Is read by RNA polymerase to make the transcript", isCorrect: true },
      { text: "Has the same sequence as the mRNA" },
      { text: "Is never transcribed" },
      { text: "Carries the poly-A tail" },
      { text: "Contains the ribosome-binding cap" },
    ],
  },
  {
    stem: "The poly-A tail added to the 3' end of eukaryotic mRNA contributes to which functions? Select all that apply.",
    type: "MULTI",
    topic: "RNA Processing",
    explanation:
      "The poly-A tail increases mRNA stability, aids export from the nucleus, and enhances translation efficiency. It does not encode amino acids, and it is not a splice site.",
    choices: [
      { text: "Increased mRNA stability", isCorrect: true },
      { text: "Assistance with nuclear export", isCorrect: true },
      { text: "Enhanced translation efficiency", isCorrect: true },
      { text: "Encoding the C-terminal amino acids" },
      { text: "Serving as an intron splice site" },
    ],
  },
  {
    stem: "True or False: In prokaryotes, transcription and translation can occur simultaneously on the same mRNA because there is no nuclear membrane separating them.",
    type: "TRUE_FALSE",
    topic: "RNA Processing",
    explanation:
      "True. Lacking a nucleus, prokaryotes allow ribosomes to begin translating an mRNA while it is still being transcribed, coupling the two processes; eukaryotes cannot do this.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Aminoacyl-tRNA synthetases are crucial to translational fidelity because each one:",
    topic: "Translation",
    explanation:
      "Each aminoacyl-tRNA synthetase charges its specific tRNA with the correct amino acid, and proofreads to ensure the right pairing; errors here would insert wrong amino acids despite correct codon reading.",
    choices: [
      { text: "Attaches the correct amino acid to its specific tRNA", isCorrect: true },
      { text: "Reads the stop codon" },
      { text: "Splices the mRNA" },
      { text: "Adds the 5' cap" },
      { text: "Unwinds the DNA" },
    ],
  },
  {
    stem: "During elongation, the ribosome forms peptide bonds using peptidyl transferase activity, which resides in:",
    topic: "Translation",
    explanation:
      "Peptidyl transferase is a ribozyme activity of the large-subunit ribosomal RNA, making the ribosome itself catalytic; this is a classic example of RNA acting as an enzyme.",
    choices: [
      { text: "The large-subunit ribosomal RNA (a ribozyme)", isCorrect: true },
      { text: "A separate cytosolic protein enzyme" },
      { text: "The small ribosomal subunit's protein" },
      { text: "Transfer RNA alone" },
      { text: "The 5' cap" },
    ],
  },
  {
    stem: "True or False: The start codon AUG sets the reading frame and codes for methionine, which in bacteria is a formylmethionine.",
    type: "TRUE_FALSE",
    topic: "Translation",
    explanation:
      "True. AUG both initiates translation and establishes the frame; bacteria use N-formylmethionine as the initiator, while eukaryotes use methionine.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The trp operon is repressed when tryptophan is abundant. Tryptophan acts as a corepressor by:",
    topic: "Gene Regulation",
    explanation:
      "When tryptophan is plentiful, it binds and activates the trp repressor, which then binds the operator to switch off the biosynthetic genes; this is negative, repressible control.",
    choices: [
      { text: "Activating the repressor so it binds the operator", isCorrect: true },
      { text: "Inactivating the repressor" },
      { text: "Binding RNA polymerase directly" },
      { text: "Splicing the operon mRNA" },
      { text: "Adding a poly-A tail" },
    ],
  },
  {
    stem: "DNA methylation at promoter CpG islands generally leads to:",
    topic: "Gene Regulation",
    explanation:
      "Methylation of promoter CpG islands typically silences transcription by recruiting repressive proteins and compacting chromatin; aberrant hypermethylation can switch off tumor suppressor genes in cancer.",
    choices: [
      { text: "Gene silencing", isCorrect: true },
      { text: "Increased transcription" },
      { text: "Faster replication" },
      { text: "Removal of introns" },
      { text: "Telomere lengthening" },
    ],
  },
  {
    stem: "A mutation in a splice site can be damaging because it may cause:",
    topic: "Mutations",
    explanation:
      "Splice-site mutations can lead to intron retention or exon skipping, producing an abnormal mRNA and often a nonfunctional or truncated protein; some thalassemias arise this way.",
    choices: [
      { text: "Intron retention or exon skipping", isCorrect: true },
      { text: "A silent change with normal protein" },
      { text: "Telomere shortening" },
      { text: "Extra proofreading" },
      { text: "A new origin of replication" },
    ],
  },
  {
    stem: "Which type of point mutation is generally least likely to affect protein function?",
    topic: "Mutations",
    explanation:
      "A silent (synonymous) mutation changes a codon to another encoding the same amino acid, so the protein sequence is unchanged; it is usually the least consequential, though rare effects on splicing exist.",
    choices: [
      { text: "Silent (synonymous) mutation", isCorrect: true },
      { text: "Nonsense mutation" },
      { text: "Frameshift mutation" },
      { text: "Missense mutation at the active site" },
      { text: "Splice-site mutation" },
    ],
  },
  {
    stem: "A researcher needs to amplify a specific RNA transcript's sequence. The first required step, before PCR, is to:",
    topic: "Genetic Techniques",
    explanation:
      "RNA must first be converted to complementary DNA (cDNA) by reverse transcriptase; this cDNA is then amplified by PCR (RT-PCR). PCR itself cannot amplify RNA directly.",
    choices: [
      { text: "Convert the RNA to cDNA with reverse transcriptase", isCorrect: true },
      { text: "Denature the RNA at 95 degrees only" },
      { text: "Run a Western blot" },
      { text: "Add a poly-A tail" },
      { text: "Perform a karyotype" },
    ],
  },
  {
    stem: "Which laboratory methods can be used to detect a specific known point mutation in a patient's DNA? Select all that apply.",
    type: "MULTI",
    topic: "Genetic Techniques",
    explanation:
      "Sanger sequencing reads the exact sequence, allele-specific PCR can be designed to detect a known variant, and a restriction enzyme assay works when the mutation creates or abolishes a cut site. A Northern blot examines RNA levels and a Gram stain is unrelated to DNA mutation detection.",
    choices: [
      { text: "Sanger sequencing", isCorrect: true },
      { text: "Allele-specific PCR", isCorrect: true },
      { text: "Restriction enzyme digestion when the site is altered", isCorrect: true },
      { text: "Northern blot for total RNA amount" },
      { text: "Gram stain" },
    ],
  },
  {
    stem: "Incomplete penetrance means that:",
    topic: "Inheritance Patterns",
    explanation:
      "With incomplete penetrance, not everyone carrying a disease-causing genotype shows the phenotype, which can make a dominant condition appear to skip a person in a pedigree.",
    choices: [
      { text: "Not all individuals with the genotype express the phenotype", isCorrect: true },
      { text: "The trait is always expressed fully" },
      { text: "Only males are affected" },
      { text: "The gene is on the Y chromosome" },
      { text: "Two alleles are always codominant" },
    ],
  },
  {
    stem: "Genomic imprinting explains why deletions of the same chromosomal region cause different syndromes depending on parental origin, as in:",
    topic: "Inheritance Patterns",
    explanation:
      "Imprinting silences genes based on parent of origin; deletion of 15q11-13 causes Prader-Willi when paternal and Angelman when maternal, showing that the parental source of an allele can determine the phenotype.",
    choices: [
      { text: "Prader-Willi versus Angelman syndrome", isCorrect: true },
      { text: "Sickle cell versus thalassemia" },
      { text: "Down versus Turner syndrome" },
      { text: "Hemophilia A versus B" },
      { text: "PKU versus alkaptonuria" },
    ],
  },
  {
    stem: "True or False: In X-linked dominant inheritance, an affected father transmits the condition to all of his daughters and none of his sons.",
    type: "TRUE_FALSE",
    topic: "Inheritance Patterns",
    explanation:
      "True. A father passes his X to every daughter and his Y to every son, so in X-linked dominant conditions all daughters are affected and no sons are affected from the father.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "A proto-oncogene becomes an oncogene through gain-of-function changes. Which mechanisms can activate a proto-oncogene? Select all that apply.",
    type: "MULTI",
    topic: "Population & Cancer Genetics",
    explanation:
      "Point mutations (e.g., RAS), gene amplification (e.g., HER2/MYC), and chromosomal translocations placing the gene under a strong promoter (e.g., BCR-ABL) can all activate proto-oncogenes. Loss of both alleles inactivates a gene and is the mechanism for tumor suppressors, not oncogene activation.",
    choices: [
      { text: "Activating point mutation", isCorrect: true },
      { text: "Gene amplification", isCorrect: true },
      { text: "Chromosomal translocation to an active promoter", isCorrect: true },
      { text: "Loss of both alleles by deletion" },
      { text: "Silencing by promoter methylation" },
    ],
  },
  {
    stem: "The Philadelphia chromosome, a t(9;22) translocation producing the BCR-ABL fusion, drives chronic myeloid leukemia by creating:",
    topic: "Population & Cancer Genetics",
    explanation:
      "BCR-ABL encodes a constitutively active tyrosine kinase that drives proliferation; it is the target of imatinib, a landmark example of molecularly targeted therapy.",
    choices: [
      { text: "A constitutively active tyrosine kinase", isCorrect: true },
      { text: "A nonfunctional tumor suppressor" },
      { text: "A telomerase inhibitor" },
      { text: "A defective DNA ligase" },
      { text: "A silenced oncogene" },
    ],
  },
  {
    stem: "Antisense oligonucleotide and RNA-based therapies treat some genetic diseases by:",
    topic: "Clinical Application",
    explanation:
      "These therapies base-pair with a target RNA to block its translation, promote its degradation, or modify its splicing, adjusting production of a specific protein; examples include agents that alter splicing in spinal muscular atrophy.",
    choices: [
      { text: "Binding a target RNA to alter its translation or splicing", isCorrect: true },
      { text: "Cutting genomic DNA at random" },
      { text: "Replacing the ribosome" },
      { text: "Inhibiting all transcription globally" },
      { text: "Extending telomeres" },
    ],
  },
  {
    stem: "A couple who are both carriers of an autosomal recessive disease ask the risk in each pregnancy. The chance a child is affected is:",
    topic: "Clinical Application",
    explanation:
      "Two carriers (heterozygotes) have a 1 in 4 chance of an affected (homozygous recessive) child, 1 in 2 chance of a carrier, and 1 in 4 unaffected non-carrier, in each independent pregnancy.",
    choices: [
      { text: "1 in 4", isCorrect: true },
      { text: "1 in 2" },
      { text: "1 in 8" },
      { text: "Zero" },
      { text: "3 in 4" },
    ],
  },
  {
    stem: "True or False: Recombinant DNA technology can insert a human gene into a plasmid vector, which bacteria then replicate and express to produce large amounts of the human protein.",
    type: "TRUE_FALSE",
    topic: "Clinical Application",
    explanation:
      "True. A human coding sequence cloned into a plasmid can be taken up by bacteria, which replicate the plasmid and translate the gene, enabling industrial production of proteins such as insulin and growth hormone.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "A newborn screening panel uses tandem mass spectrometry to detect many inborn errors from a dried blood spot. Its advantage is that it:",
    topic: "Clinical Application",
    explanation:
      "Tandem mass spectrometry measures many metabolites at once, allowing a single blood spot to screen for numerous metabolic disorders (e.g., PKU, MCAD deficiency) early, before symptoms, enabling timely treatment.",
    choices: [
      { text: "Screens for many metabolic disorders simultaneously and early", isCorrect: true },
      { text: "Sequences the entire genome" },
      { text: "Detects only chromosomal aneuploidy" },
      { text: "Requires a muscle biopsy" },
      { text: "Replaces all confirmatory testing" },
    ],
  },
];
