/**
 * CONTENT WAVE — Biochemistry
 *
 * Same shape as Haematology and Infectious Diseases:
 *
 *   Practice Set 1 (30)  → enzymes, carbohydrate, lipid, amino acid, vitamins
 *   Practice Set 2 (30)  → molecular biology, nucleotides, bioenergetics,
 *                          metabolic integration, inherited metabolic disease
 *   Timed Exam 1   (30)  → Set 1 under exam conditions, 40 minutes
 *   Timed Exam 2   (60)  → everything, 75 minutes
 *
 * Two non-overlapping practice sets so a student who has worked through Set 1 can
 * sit Set 2 on the same subject without meeting questions they have memorised.
 *
 * Answers are SHUFFLED on insert — the correct choice is written first below for
 * readability, and inserting in that order would put it at position 1 every time.
 *
 * Biochemistry is the one foundational subject where the questions age well:
 * pathways and mechanisms don't get revised the way clinical thresholds do. The
 * few clinically-anchored items here (drug targets, deficiency states) are worth
 * a glance against local guidance, but the mechanisms travel.
 *
 * Run:  npx tsx prisma/seed-biochemistry.ts
 * Safe to re-run — upserts by quiz slug and rewrites only that quiz's questions.
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
  /* ---- Enzymes & Kinetics ---- */
  {
    stem: "What does the Michaelis constant (Km) of an enzyme represent?",
    topic: "Enzymes & Kinetics",
    explanation:
      "The substrate concentration at which the reaction runs at half its maximum velocity. It is an inverse measure of affinity — a LOW Km means the enzyme is saturated at low substrate concentrations, so it binds tightly. Vmax, by contrast, reflects how much enzyme is present and how fast it can turn over once saturated.",
    choices: [
      { text: "The substrate concentration giving half-maximal velocity", isCorrect: true },
      { text: "The maximum reaction velocity achievable", isCorrect: false },
      { text: "The total amount of enzyme present", isCorrect: false },
      { text: "The energy of activation of the reaction", isCorrect: false },
    ],
  },
  {
    stem: "How does a competitive inhibitor alter an enzyme's kinetics?",
    topic: "Enzymes & Kinetics",
    explanation:
      "It raises the apparent Km while leaving Vmax unchanged. Because it competes for the active site, adding enough substrate outcompetes it and full velocity is still reachable — which is exactly why it looks like reduced affinity rather than reduced capacity. A non-competitive inhibitor does the opposite: Vmax falls and Km is unaffected.",
    choices: [
      { text: "Km rises, Vmax unchanged", isCorrect: true },
      { text: "Vmax falls, Km unchanged", isCorrect: false },
      { text: "Both Km and Vmax fall", isCorrect: false },
      { text: "Neither is affected", isCorrect: false },
    ],
  },
  {
    stem: "Why do enzymes speed up reactions?",
    topic: "Enzymes & Kinetics",
    explanation:
      "They lower the activation energy by stabilising the transition state. Note what they do NOT do: the equilibrium position and the overall free energy change are untouched, so an enzyme accelerates a reaction in both directions equally. A thermodynamically unfavourable reaction stays unfavourable no matter which enzyme is present.",
    choices: [
      { text: "They lower activation energy by stabilising the transition state", isCorrect: true },
      { text: "They change the equilibrium position in favour of product", isCorrect: false },
      { text: "They make the overall free energy change more negative", isCorrect: false },
      { text: "They supply energy directly to the reactants", isCorrect: false },
    ],
  },
  {
    stem: "What characterises an allosteric enzyme?",
    topic: "Enzymes & Kinetics",
    explanation:
      "Regulation through binding at a site distinct from the active site, producing a conformational change and a sigmoidal rather than hyperbolic velocity curve. This is what allows a pathway's output to feed back on its own first committed step — the basis of nearly all metabolic control, and the reason such enzymes sit at pathway branch points.",
    choices: [
      { text: "Regulation via a site separate from the active site, giving sigmoidal kinetics", isCorrect: true },
      { text: "Absolute irreversibility of catalysis", isCorrect: false },
      { text: "Complete independence from any regulation", isCorrect: false },
      { text: "An inability to bind cofactors", isCorrect: false },
    ],
  },
  {
    stem: "What is the difference between a cofactor and a coenzyme?",
    topic: "Enzymes & Kinetics",
    explanation:
      "Cofactor is the broader term for any non-protein helper an enzyme requires; coenzymes are the organic subset, most of them vitamin-derived. That derivation is why the clinical consequence of a vitamin deficiency is predictable: lose the vitamin and every enzyme depending on its coenzyme slows, which is why deficiency syndromes affect multiple systems at once.",
    choices: [
      { text: "Coenzymes are the organic subset of cofactors, usually vitamin-derived", isCorrect: true },
      { text: "Coenzymes are always metal ions", isCorrect: false },
      { text: "They are entirely unrelated concepts", isCorrect: false },
      { text: "Cofactors are proteins and coenzymes are not", isCorrect: false },
    ],
  },
  {
    stem: "Why is the rate-limiting step of a pathway the usual point of regulation?",
    topic: "Enzymes & Kinetics",
    explanation:
      "Because it is the slowest step, so controlling it controls flux through the whole sequence — regulating a fast downstream step achieves little when the bottleneck is upstream. It is typically the first committed, irreversible step, which also means regulation happens before substrate has been spent on a pathway the cell no longer needs.",
    choices: [
      { text: "It is the bottleneck, so controlling it controls flux through the whole pathway", isCorrect: true },
      { text: "It is always the final step of the pathway", isCorrect: false },
      { text: "It is the only reversible step", isCorrect: false },
      { text: "It consumes no energy", isCorrect: false },
    ],
  },

  /* ---- Carbohydrate Metabolism ---- */
  {
    stem: "Which enzyme catalyses the rate-limiting step of glycolysis?",
    topic: "Carbohydrate Metabolism",
    explanation:
      "Phosphofructokinase-1, converting fructose-6-phosphate to fructose-1,6-bisphosphate. It is inhibited by ATP and citrate — signals that energy is plentiful — and activated by AMP and fructose-2,6-bisphosphate. That makes it the point at which the cell decides whether to burn glucose at all.",
    choices: [
      { text: "Phosphofructokinase-1", isCorrect: true },
      { text: "Hexokinase", isCorrect: false },
      { text: "Pyruvate kinase", isCorrect: false },
      { text: "Aldolase", isCorrect: false },
    ],
  },
  {
    stem: "What is the net ATP yield of anaerobic glycolysis per molecule of glucose?",
    topic: "Carbohydrate Metabolism",
    explanation:
      "Two. Four ATP are produced but two are invested in the early phosphorylation steps. It is a small yield compared with the roughly thirty from complete oxidation, but it needs no oxygen and no mitochondria — which is why the red cell and exercising muscle depend on it.",
    choices: [
      { text: "2 ATP", isCorrect: true },
      { text: "38 ATP", isCorrect: false },
      { text: "12 ATP", isCorrect: false },
      { text: "0 ATP", isCorrect: false },
    ],
  },
  {
    stem: "Why must pyruvate be converted to lactate when oxygen is scarce?",
    topic: "Carbohydrate Metabolism",
    explanation:
      "To regenerate NAD+. Glycolysis consumes NAD+ at glyceraldehyde-3-phosphate dehydrogenase, and without oxidative phosphorylation to recycle it the pathway would halt within seconds. Lactate dehydrogenase is therefore not a waste step but the mechanism that keeps anaerobic glycolysis running.",
    choices: [
      { text: "To regenerate NAD+ so glycolysis can continue", isCorrect: true },
      { text: "To generate additional ATP directly", isCorrect: false },
      { text: "To consume excess oxygen", isCorrect: false },
      { text: "To synthesise glucose", isCorrect: false },
    ],
  },
  {
    stem: "How does hepatic glucokinase differ from hexokinase in other tissues?",
    topic: "Carbohydrate Metabolism",
    explanation:
      "Glucokinase has a high Km and is not inhibited by its product, so it only becomes active when portal glucose is high — after a meal. That makes the liver a glucose buffer rather than a competitor: it takes up glucose when there is plenty and leaves it for the brain when there is not.",
    choices: [
      { text: "High Km and no product inhibition, so it acts only when glucose is abundant", isCorrect: true },
      { text: "Low Km, so it works at all glucose concentrations", isCorrect: false },
      { text: "It phosphorylates fructose rather than glucose", isCorrect: false },
      { text: "It is found only in muscle", isCorrect: false },
    ],
  },
  {
    stem: "Why can fatty acids not be used for net glucose synthesis in humans?",
    topic: "Carbohydrate Metabolism",
    explanation:
      "Because the pyruvate dehydrogenase reaction is irreversible, so acetyl-CoA cannot be converted back to pyruvate. Acetyl-CoA entering the TCA cycle loses two carbons as CO2, leaving no net carbon for gluconeogenesis. Glycerol from the triglyceride backbone and the odd-chain propionyl-CoA route are the exceptions, and neither is quantitatively significant.",
    choices: [
      { text: "Pyruvate dehydrogenase is irreversible, so acetyl-CoA cannot return to pyruvate", isCorrect: true },
      { text: "Fatty acids cannot enter mitochondria at all", isCorrect: false },
      { text: "Fatty acid oxidation produces no usable intermediates", isCorrect: false },
      { text: "Gluconeogenesis does not occur in humans", isCorrect: false },
    ],
  },
  {
    stem: "What is the principal function of the pentose phosphate pathway?",
    topic: "Carbohydrate Metabolism",
    explanation:
      "Producing NADPH and ribose-5-phosphate — reducing power for biosynthesis and antioxidant defence, and the sugar backbone for nucleotides. It generates no ATP. Its importance is clearest in the red cell, where NADPH maintains reduced glutathione, and where losing it causes oxidative haemolysis.",
    choices: [
      { text: "Generating NADPH and ribose-5-phosphate", isCorrect: true },
      { text: "Producing large amounts of ATP", isCorrect: false },
      { text: "Synthesising fatty acids directly", isCorrect: false },
      { text: "Breaking down amino acids", isCorrect: false },
    ],
  },
  {
    stem: "Which enzyme deficiency causes von Gierke disease, with severe fasting hypoglycaemia and hepatomegaly?",
    topic: "Carbohydrate Metabolism",
    explanation:
      "Glucose-6-phosphatase. Without it the liver can neither release glucose from glycogen nor from gluconeogenesis, so glucose-6-phosphate accumulates and no glucose reaches the circulation. That explains the combination of a large glycogen-loaded liver alongside profound hypoglycaemia — the fuel is present but cannot leave the cell.",
    choices: [
      { text: "Glucose-6-phosphatase", isCorrect: true },
      { text: "Muscle glycogen phosphorylase", isCorrect: false },
      { text: "Lysosomal acid maltase", isCorrect: false },
      { text: "Branching enzyme", isCorrect: false },
    ],
  },

  /* ---- Lipid Metabolism ---- */
  {
    stem: "Which enzyme is the rate-limiting step of cholesterol synthesis, and the target of statins?",
    topic: "Lipid Metabolism",
    explanation:
      "HMG-CoA reductase. Inhibiting it lowers intracellular cholesterol, which upregulates hepatic LDL receptors — and it is that receptor upregulation, more than reduced synthesis itself, that clears LDL from the plasma. It also explains why statins work poorly in homozygous familial hypercholesterolaemia, where functional receptors are absent.",
    choices: [
      { text: "HMG-CoA reductase", isCorrect: true },
      { text: "Lipoprotein lipase", isCorrect: false },
      { text: "Acetyl-CoA carboxylase", isCorrect: false },
      { text: "Carnitine palmitoyltransferase I", isCorrect: false },
    ],
  },
  {
    stem: "What is the role of carnitine in fatty acid oxidation?",
    topic: "Lipid Metabolism",
    explanation:
      "It shuttles long-chain fatty acyl groups across the inner mitochondrial membrane, which they cannot cross as CoA esters. Carnitine deficiency therefore causes accumulation of long-chain fats with hypoketotic hypoglycaemia and muscle weakness — the fat is available but cannot reach the site of oxidation.",
    choices: [
      { text: "Transporting long-chain fatty acyl groups into mitochondria", isCorrect: true },
      { text: "Activating fatty acids in the cytosol", isCorrect: false },
      { text: "Synthesising cholesterol from acetyl-CoA", isCorrect: false },
      { text: "Emulsifying dietary fat in the gut", isCorrect: false },
    ],
  },
  {
    stem: "Where and when are ketone bodies produced?",
    topic: "Lipid Metabolism",
    explanation:
      "In liver mitochondria, when acetyl-CoA from fatty acid oxidation exceeds the TCA cycle's capacity to process it — typically prolonged fasting, a very low carbohydrate intake, or insulin deficiency. The liver makes them but cannot use them, because it lacks the transferase needed; they are fuel exported for brain, heart and muscle.",
    choices: [
      { text: "In liver mitochondria, when acetyl-CoA exceeds TCA capacity", isCorrect: true },
      { text: "In muscle cytosol immediately after eating", isCorrect: false },
      { text: "In the brain, continuously", isCorrect: false },
      { text: "In adipose tissue during the fed state", isCorrect: false },
    ],
  },
  {
    stem: "What does lipoprotein lipase do, and where does it act?",
    topic: "Lipid Metabolism",
    explanation:
      "It sits on capillary endothelium and hydrolyses triglycerides in circulating chylomicrons and VLDL, releasing fatty acids for uptake by muscle and adipose tissue. Deficiency causes severe hypertriglyceridaemia with milky plasma and a risk of pancreatitis, because the triglyceride-rich particles are never unloaded.",
    choices: [
      { text: "Hydrolyses triglycerides in chylomicrons and VLDL at the capillary endothelium", isCorrect: true },
      { text: "Synthesises triglycerides inside adipocytes", isCorrect: false },
      { text: "Converts cholesterol to bile acids in the liver", isCorrect: false },
      { text: "Transports cholesterol from tissues back to the liver", isCorrect: false },
    ],
  },
  {
    stem: "Why is HDL described as performing reverse cholesterol transport?",
    topic: "Lipid Metabolism",
    explanation:
      "It collects cholesterol from peripheral tissues and returns it to the liver for excretion in bile — the opposite direction to LDL, which delivers cholesterol outward. This is the mechanistic basis for the epidemiological association between higher HDL and lower cardiovascular risk, though raising HDL pharmacologically has not reliably reproduced that benefit.",
    choices: [
      { text: "It returns cholesterol from peripheral tissues to the liver", isCorrect: true },
      { text: "It delivers cholesterol from liver to tissues", isCorrect: false },
      { text: "It converts cholesterol into triglyceride", isCorrect: false },
      { text: "It prevents all cholesterol absorption from the gut", isCorrect: false },
    ],
  },
  {
    stem: "Why are linoleic and alpha-linolenic acid described as essential fatty acids?",
    topic: "Lipid Metabolism",
    explanation:
      "Humans lack the desaturases needed to introduce double bonds at those positions, so these fatty acids must come from the diet. They are precursors for longer-chain polyunsaturates and for eicosanoids, which is why prolonged fat-free feeding produces dermatitis and poor wound healing.",
    choices: [
      { text: "Humans lack the desaturases to make them, so they must be eaten", isCorrect: true },
      { text: "They are the only fatty acids that yield ATP", isCorrect: false },
      { text: "They cannot be absorbed from the diet", isCorrect: false },
      { text: "They are synthesised only in the brain", isCorrect: false },
    ],
  },

  /* ---- Amino Acids & Protein ---- */
  {
    stem: "What is the purpose of transamination in amino acid metabolism?",
    topic: "Amino Acids & Protein",
    explanation:
      "Transferring an amino group to a keto acid, so the carbon skeleton can enter metabolism while nitrogen is funnelled towards disposal. The transaminases require pyridoxal phosphate from vitamin B6 — which is why B6 deficiency disturbs amino acid handling broadly, and why ALT and AST rise when hepatocytes are damaged.",
    choices: [
      { text: "Transferring an amino group to a keto acid, separating nitrogen from carbon skeleton", isCorrect: true },
      { text: "Adding a carboxyl group to an amino acid", isCorrect: false },
      { text: "Breaking peptide bonds in dietary protein", isCorrect: false },
      { text: "Converting glucose directly into protein", isCorrect: false },
    ],
  },
  {
    stem: "What is the main function of the urea cycle?",
    topic: "Amino Acids & Protein",
    explanation:
      "Converting ammonia — neurotoxic, especially to the central nervous system — into urea for renal excretion. Defects at any step, or liver failure, cause hyperammonaemia with encephalopathy. This is why protein restriction and measures to reduce ammonia production are central to managing both inherited urea cycle disorders and hepatic encephalopathy.",
    choices: [
      { text: "Converting toxic ammonia into urea for excretion", isCorrect: true },
      { text: "Synthesising amino acids from glucose", isCorrect: false },
      { text: "Generating ATP for hepatocytes", isCorrect: false },
      { text: "Producing ammonia from urea", isCorrect: false },
    ],
  },
  {
    stem: "Which enzyme is deficient in classical phenylketonuria?",
    topic: "Amino Acids & Protein",
    explanation:
      "Phenylalanine hydroxylase, so phenylalanine accumulates and tyrosine becomes conditionally essential. Untreated it causes severe intellectual disability, which is entirely preventable by dietary restriction from birth — the reason it is on newborn screening programmes worldwide. A minority of cases instead reflect defective tetrahydrobiopterin, the cofactor.",
    choices: [
      { text: "Phenylalanine hydroxylase", isCorrect: true },
      { text: "Homogentisate oxidase", isCorrect: false },
      { text: "Branched-chain ketoacid dehydrogenase", isCorrect: false },
      { text: "Cystathionine beta-synthase", isCorrect: false },
    ],
  },
  {
    stem: "What distinguishes an essential from a non-essential amino acid?",
    topic: "Amino Acids & Protein",
    explanation:
      "Essential amino acids cannot be synthesised by the body and must be supplied by the diet. Some become 'conditionally essential' when synthesis fails or demand rises — tyrosine in phenylketonuria, for instance. This is why protein quality, not just quantity, determines nutritional adequacy.",
    choices: [
      { text: "Essential ones cannot be synthesised and must come from the diet", isCorrect: true },
      { text: "Essential ones are needed in larger absolute amounts", isCorrect: false },
      { text: "Non-essential ones have no metabolic role", isCorrect: false },
      { text: "Only essential amino acids can form peptide bonds", isCorrect: false },
    ],
  },
  {
    stem: "What level of protein structure is stabilised primarily by hydrogen bonding within the backbone?",
    topic: "Amino Acids & Protein",
    explanation:
      "Secondary structure — the alpha helices and beta sheets, held by hydrogen bonds between backbone amide and carbonyl groups. Tertiary structure depends on side-chain interactions including hydrophobic packing and disulphide bridges, and quaternary on assembly of separate subunits.",
    choices: [
      { text: "Secondary structure", isCorrect: true },
      { text: "Primary structure", isCorrect: false },
      { text: "Tertiary structure", isCorrect: false },
      { text: "Quaternary structure", isCorrect: false },
    ],
  },
  {
    stem: "Why does denaturation abolish enzyme activity without breaking peptide bonds?",
    topic: "Amino Acids & Protein",
    explanation:
      "Because catalysis depends on the precise three-dimensional shape of the active site, and denaturation disrupts the non-covalent interactions holding that shape while leaving the amino acid sequence intact. Heat, extremes of pH and certain solutes all do this — the sequence survives, the function does not.",
    choices: [
      { text: "The three-dimensional shape of the active site is lost while sequence remains", isCorrect: true },
      { text: "Peptide bonds are hydrolysed by heat", isCorrect: false },
      { text: "The amino acid sequence is rearranged", isCorrect: false },
      { text: "Cofactors are chemically destroyed first", isCorrect: false },
    ],
  },

  /* ---- Vitamins & Cofactors ---- */
  {
    stem: "Which vitamin is the cofactor for pyruvate dehydrogenase, and what happens when it is deficient?",
    topic: "Vitamins & Cofactors",
    explanation:
      "Thiamine (B1), as thiamine pyrophosphate. Deficiency blocks entry of pyruvate into the TCA cycle, so lactate accumulates and ATP production falls — most damagingly in the brain and heart, giving Wernicke encephalopathy and wet beriberi. Glucose given before thiamine can precipitate Wernicke's, which is why thiamine comes first in the at-risk patient.",
    choices: [
      { text: "Thiamine — deficiency blocks pyruvate entry to the TCA cycle", isCorrect: true },
      { text: "Vitamin C — deficiency causes bleeding gums only", isCorrect: false },
      { text: "Vitamin K — deficiency prolongs the prothrombin time", isCorrect: false },
      { text: "Vitamin D — deficiency causes rickets", isCorrect: false },
    ],
  },
  {
    stem: "Why does vitamin C deficiency weaken connective tissue?",
    topic: "Vitamins & Cofactors",
    explanation:
      "Ascorbate is required for the hydroxylation of proline and lysine residues in collagen, and without it the triple helix cannot cross-link properly. The resulting fragile collagen explains scurvy's picture: bleeding gums, poor wound healing, perifollicular haemorrhage and loose teeth.",
    choices: [
      { text: "Collagen proline and lysine hydroxylation fails, so cross-linking is defective", isCorrect: true },
      { text: "Collagen genes are mutated by the deficiency", isCorrect: false },
      { text: "Calcium cannot be absorbed at all", isCorrect: false },
      { text: "Elastin replaces collagen entirely", isCorrect: false },
    ],
  },
  {
    stem: "What role does vitamin K play in coagulation?",
    topic: "Vitamins & Cofactors",
    explanation:
      "It is the cofactor for gamma-carboxylation of glutamate residues on factors II, VII, IX and X, which is what lets those factors bind calcium and phospholipid surfaces. Warfarin blocks the recycling of vitamin K, which is why its effect takes days — existing carboxylated factors must first be cleared.",
    choices: [
      { text: "Gamma-carboxylation of factors II, VII, IX and X", isCorrect: true },
      { text: "Direct activation of platelets", isCorrect: false },
      { text: "Synthesis of fibrinogen from amino acids", isCorrect: false },
      { text: "Breakdown of formed clots", isCorrect: false },
    ],
  },
  {
    stem: "Both vitamin B12 and folate deficiency cause megaloblastic anaemia. What distinguishes them biochemically?",
    topic: "Vitamins & Cofactors",
    explanation:
      "Methylmalonic acid is raised in B12 deficiency but normal in folate deficiency, because B12 is additionally required by methylmalonyl-CoA mutase. Homocysteine rises in both. The distinction matters clinically: giving folate alone to someone B12-deficient corrects the anaemia while the neurological damage continues.",
    choices: [
      { text: "Methylmalonic acid is raised only in B12 deficiency", isCorrect: true },
      { text: "Homocysteine rises only in folate deficiency", isCorrect: false },
      { text: "Only folate deficiency affects the blood film", isCorrect: false },
      { text: "There is no biochemical difference", isCorrect: false },
    ],
  },
  {
    stem: "Which vitamin is the precursor of NAD+ and NADP+?",
    topic: "Vitamins & Cofactors",
    explanation:
      "Niacin (B3), which can also be made in limited amounts from tryptophan. Because NAD+ participates in a vast number of oxidation-reduction reactions, deficiency affects the tissues with the highest turnover — giving pellagra's dermatitis, diarrhoea and dementia.",
    choices: [
      { text: "Niacin", isCorrect: true },
      { text: "Riboflavin", isCorrect: false },
      { text: "Biotin", isCorrect: false },
      { text: "Pantothenic acid", isCorrect: false },
    ],
  },
];

/* ═══════════════ PRACTICE SET 2 ═══════════════ */

const SET2: Q[] = [
  /* ---- Molecular Biology ---- */
  {
    stem: "What does semiconservative DNA replication mean?",
    topic: "Molecular Biology",
    explanation:
      "Each daughter molecule retains one parental strand and one newly synthesised strand. The parental strand acts as the template, which is what makes replication accurate and allows mismatch repair to identify which strand is new — and therefore which base is the error.",
    choices: [
      { text: "Each new molecule keeps one parental and one new strand", isCorrect: true },
      { text: "Both strands of each new molecule are newly made", isCorrect: false },
      { text: "The original molecule is destroyed and rebuilt", isCorrect: false },
      { text: "Only one strand is ever copied", isCorrect: false },
    ],
  },
  {
    stem: "In which direction does DNA polymerase synthesise a new strand?",
    topic: "Molecular Biology",
    explanation:
      "5′ to 3′ only, adding nucleotides to the free 3′ hydroxyl. This single constraint explains the whole architecture of the replication fork: one strand is copied continuously while the other must be made in short segments and joined, and it is why a primer is always required.",
    choices: [
      { text: "5′ to 3′", isCorrect: true },
      { text: "3′ to 5′", isCorrect: false },
      { text: "Either direction, depending on the template", isCorrect: false },
      { text: "From the middle of the strand outwards", isCorrect: false },
    ],
  },
  {
    stem: "What is meant by the degeneracy of the genetic code?",
    topic: "Molecular Biology",
    explanation:
      "Several codons can specify the same amino acid, most often differing at the third base. This is why many single-base substitutions are silent and have no effect on the protein, and it provides a genuine buffer against mutation rather than being a quirk of the code.",
    choices: [
      { text: "Several codons can code for the same amino acid", isCorrect: true },
      { text: "One codon can code for several different amino acids", isCorrect: false },
      { text: "Some codons code for nothing at all", isCorrect: false },
      { text: "The code differs between human tissues", isCorrect: false },
    ],
  },
  {
    stem: "Why is a frameshift mutation usually more damaging than a missense mutation?",
    topic: "Molecular Biology",
    explanation:
      "Inserting or deleting a number of bases not divisible by three shifts the reading frame, so every downstream codon is misread and a premature stop is likely. A missense mutation changes one amino acid; a frameshift typically destroys the entire remainder of the protein.",
    choices: [
      { text: "The reading frame shifts, so all downstream codons are misread", isCorrect: true },
      { text: "It always deletes the whole gene", isCorrect: false },
      { text: "It only affects the first amino acid", isCorrect: false },
      { text: "It prevents transcription from starting", isCorrect: false },
    ],
  },
  {
    stem: "What is the purpose of splicing in eukaryotic gene expression?",
    topic: "Molecular Biology",
    explanation:
      "Removing introns and joining exons to produce mature mRNA. Alternative splicing lets one gene generate several proteins, which is part of why the human protein repertoire greatly exceeds the gene count. Mutations at splice sites can be as damaging as those in coding sequence.",
    choices: [
      { text: "Removing introns and joining exons to form mature mRNA", isCorrect: true },
      { text: "Adding introns to increase protein diversity", isCorrect: false },
      { text: "Translating mRNA into protein", isCorrect: false },
      { text: "Copying DNA into a complementary strand", isCorrect: false },
    ],
  },
  {
    stem: "What does the polymerase chain reaction achieve?",
    topic: "Molecular Biology",
    explanation:
      "Exponential amplification of a specific DNA sequence defined by the primers, through repeated cycles of denaturation, annealing and extension. Because amplification is exponential, tiny starting amounts become detectable — which is the basis of molecular diagnostics and also why contamination causes false positives.",
    choices: [
      { text: "Exponential amplification of a specific DNA sequence", isCorrect: true },
      { text: "Direct sequencing of a whole genome in one step", isCorrect: false },
      { text: "Separation of proteins by size", isCorrect: false },
      { text: "Translation of RNA into protein in vitro", isCorrect: false },
    ],
  },
  {
    stem: "A Western blot detects which type of molecule?",
    topic: "Molecular Biology",
    explanation:
      "Protein, using antibodies after electrophoretic separation. Southern blotting detects DNA and Northern detects RNA — a distinction worth fixing, because the choice of technique reveals what question is being asked of the sample.",
    choices: [
      { text: "Protein", isCorrect: true },
      { text: "DNA", isCorrect: false },
      { text: "RNA", isCorrect: false },
      { text: "Carbohydrate", isCorrect: false },
    ],
  },

  /* ---- Nucleotide Metabolism ---- */
  {
    stem: "Which enzyme is deficient in Lesch-Nyhan syndrome?",
    topic: "Nucleotide Metabolism",
    explanation:
      "Hypoxanthine-guanine phosphoribosyltransferase, the purine salvage enzyme. Losing salvage forces reliance on de novo synthesis and diverts purines to uric acid, giving hyperuricaemia with gout and renal stones alongside the neurological features. It is X-linked recessive.",
    choices: [
      { text: "Hypoxanthine-guanine phosphoribosyltransferase (HGPRT)", isCorrect: true },
      { text: "Xanthine oxidase", isCorrect: false },
      { text: "Adenosine deaminase", isCorrect: false },
      { text: "Dihydrofolate reductase", isCorrect: false },
    ],
  },
  {
    stem: "How does allopurinol lower uric acid?",
    topic: "Nucleotide Metabolism",
    explanation:
      "By inhibiting xanthine oxidase, so hypoxanthine and xanthine are not converted to uric acid. Those precursors are more soluble and more readily excreted. It is prophylactic rather than a treatment for acute gout — starting it during an attack can prolong it.",
    choices: [
      { text: "It inhibits xanthine oxidase", isCorrect: true },
      { text: "It increases renal uric acid reabsorption", isCorrect: false },
      { text: "It converts uric acid into purines", isCorrect: false },
      { text: "It blocks purine absorption from the diet", isCorrect: false },
    ],
  },
  {
    stem: "How does methotrexate interfere with nucleotide synthesis?",
    topic: "Nucleotide Metabolism",
    explanation:
      "It inhibits dihydrofolate reductase, depleting tetrahydrofolate and so blocking thymidine and purine synthesis. Rapidly dividing cells suffer first, which accounts for both the antineoplastic effect and the toxicity to marrow and gut mucosa. Folinic acid rescue bypasses the blocked step.",
    choices: [
      { text: "It inhibits dihydrofolate reductase, depleting tetrahydrofolate", isCorrect: true },
      { text: "It inhibits xanthine oxidase", isCorrect: false },
      { text: "It cross-links DNA strands directly", isCorrect: false },
      { text: "It blocks the ribosome", isCorrect: false },
    ],
  },
  {
    stem: "Which enzyme does 5-fluorouracil inhibit?",
    topic: "Nucleotide Metabolism",
    explanation:
      "Thymidylate synthase, so dTMP cannot be made and DNA synthesis stalls. As with methotrexate the effect falls hardest on rapidly dividing tissue, explaining the characteristic mucositis, diarrhoea and myelosuppression.",
    choices: [
      { text: "Thymidylate synthase", isCorrect: true },
      { text: "Ribonucleotide reductase", isCorrect: false },
      { text: "DNA ligase", isCorrect: false },
      { text: "Topoisomerase II", isCorrect: false },
    ],
  },
  {
    stem: "Why does adenosine deaminase deficiency cause severe combined immunodeficiency?",
    topic: "Nucleotide Metabolism",
    explanation:
      "Deoxyadenosine and its nucleotides accumulate and are particularly toxic to lymphocytes, which cannot tolerate the resulting imbalance in deoxynucleotide pools. Both T and B cell lineages fail, hence the combined defect — and it was the first condition treated by gene therapy.",
    choices: [
      { text: "Toxic deoxyadenosine metabolites accumulate and destroy lymphocytes", isCorrect: true },
      { text: "Antibodies are structurally abnormal", isCorrect: false },
      { text: "The thymus is absent from birth", isCorrect: false },
      { text: "Complement proteins are not synthesised", isCorrect: false },
    ],
  },

  /* ---- Bioenergetics ---- */
  {
    stem: "What does the chemiosmotic theory propose about ATP synthesis?",
    topic: "Bioenergetics",
    explanation:
      "That electron transport pumps protons across the inner mitochondrial membrane, and the resulting electrochemical gradient drives ATP synthase as protons flow back. The gradient — not a chemical intermediate — is the stored energy, which is why anything that makes the membrane leaky abolishes ATP synthesis while electron transport continues.",
    choices: [
      { text: "A proton gradient across the inner membrane drives ATP synthase", isCorrect: true },
      { text: "ATP is made directly by the electron transport complexes", isCorrect: false },
      { text: "Substrate-level phosphorylation supplies all mitochondrial ATP", isCorrect: false },
      { text: "Oxygen is not required at any stage", isCorrect: false },
    ],
  },
  {
    stem: "How does an uncoupling agent such as 2,4-dinitrophenol affect mitochondria?",
    topic: "Bioenergetics",
    explanation:
      "It carries protons across the membrane, dissipating the gradient. Electron transport and oxygen consumption accelerate while ATP synthesis falls, and the energy appears as heat — which is why uncouplers cause dangerous hyperthermia. Brown adipose tissue uses the same principle physiologically via thermogenin.",
    choices: [
      { text: "It dissipates the proton gradient, so energy is released as heat instead of ATP", isCorrect: true },
      { text: "It blocks electron transport completely", isCorrect: false },
      { text: "It increases ATP yield per glucose molecule", isCorrect: false },
      { text: "It prevents oxygen consumption entirely", isCorrect: false },
    ],
  },
  {
    stem: "Where does cyanide act in oxidative phosphorylation?",
    topic: "Bioenergetics",
    explanation:
      "At complex IV, cytochrome c oxidase, blocking the transfer of electrons to oxygen. Cells cannot use oxygen even though it is delivered normally, so venous oxygen content stays high and lactate rises steeply. That mismatch — adequate oxygenation with profound lactic acidosis — is the diagnostic clue.",
    choices: [
      { text: "Complex IV, cytochrome c oxidase", isCorrect: true },
      { text: "Complex I only", isCorrect: false },
      { text: "ATP synthase", isCorrect: false },
      { text: "The carnitine shuttle", isCorrect: false },
    ],
  },
  {
    stem: "What is the metabolic role of the TCA cycle beyond energy production?",
    topic: "Bioenergetics",
    explanation:
      "It supplies intermediates for biosynthesis — oxaloacetate for gluconeogenesis and aspartate, alpha-ketoglutarate for glutamate, succinyl-CoA for haem. Because intermediates are withdrawn, they must be replenished by anaplerotic reactions such as pyruvate carboxylase, or the cycle grinds down.",
    choices: [
      { text: "It provides biosynthetic intermediates, replenished by anaplerotic reactions", isCorrect: true },
      { text: "It has no function other than making ATP", isCorrect: false },
      { text: "It synthesises fatty acids directly", isCorrect: false },
      { text: "It operates only under anaerobic conditions", isCorrect: false },
    ],
  },
  {
    stem: "Why does the red blood cell depend entirely on glycolysis for ATP?",
    topic: "Bioenergetics",
    explanation:
      "It has no mitochondria, so oxidative phosphorylation is unavailable despite the cell being full of oxygen. Its energy needs are met by anaerobic glycolysis alone, which is why glycolytic enzyme defects such as pyruvate kinase deficiency present as haemolytic anaemia.",
    choices: [
      { text: "It has no mitochondria", isCorrect: true },
      { text: "It cannot take up glucose", isCorrect: false },
      { text: "Oxygen is toxic to its enzymes", isCorrect: false },
      { text: "It lacks all glycolytic enzymes", isCorrect: false },
    ],
  },
  {
    stem: "What does a respiratory quotient of approximately 1.0 indicate about substrate use?",
    topic: "Bioenergetics",
    explanation:
      "Predominantly carbohydrate oxidation, because glucose oxidation produces roughly one molecule of CO2 per molecule of O2 consumed. Fat oxidation gives a lower value near 0.7, since fatty acids are more reduced and need proportionally more oxygen — so the ratio reports which fuel is being burnt.",
    choices: [
      { text: "Mainly carbohydrate oxidation", isCorrect: true },
      { text: "Mainly fat oxidation", isCorrect: false },
      { text: "Mainly protein oxidation", isCorrect: false },
      { text: "No metabolism is occurring", isCorrect: false },
    ],
  },

  /* ---- Metabolic Integration ---- */
  {
    stem: "What are insulin's principal metabolic effects after a meal?",
    topic: "Metabolic Integration",
    explanation:
      "It promotes storage: glucose uptake into muscle and adipose tissue, glycogen and triglyceride synthesis, and protein synthesis, while suppressing gluconeogenesis, glycogenolysis and lipolysis. Every one of those actions is anabolic, which is why insulin deficiency produces simultaneous hyperglycaemia, ketosis and wasting.",
    choices: [
      { text: "It promotes storage and suppresses gluconeogenesis, glycogenolysis and lipolysis", isCorrect: true },
      { text: "It stimulates glycogen breakdown and lipolysis", isCorrect: false },
      { text: "It acts only on the liver", isCorrect: false },
      { text: "It raises blood glucose", isCorrect: false },
    ],
  },
  {
    stem: "Which fuel does the brain use during prolonged starvation, and why does that matter?",
    topic: "Metabolic Integration",
    explanation:
      "It shifts substantially to ketone bodies. This spares glucose and therefore spares muscle protein, since gluconeogenesis would otherwise consume amino acids. The adaptation is what allows survival for weeks rather than days — the brain cannot use fatty acids directly, so ketones are the only alternative.",
    choices: [
      { text: "Ketone bodies, which spare glucose and therefore muscle protein", isCorrect: true },
      { text: "Fatty acids taken up directly across the blood-brain barrier", isCorrect: false },
      { text: "Only glucose, in all circumstances", isCorrect: false },
      { text: "Lactate exclusively", isCorrect: false },
    ],
  },
  {
    stem: "What is the Cori cycle?",
    topic: "Metabolic Integration",
    explanation:
      "Lactate produced by anaerobic glycolysis in muscle travels to the liver, is converted back to glucose by gluconeogenesis, and returns to muscle. The liver bears the ATP cost so muscle can keep contracting — an inter-organ division of labour rather than a futile loop.",
    choices: [
      { text: "Muscle lactate is converted to glucose in the liver and returned to muscle", isCorrect: true },
      { text: "Muscle glucose is converted to fat in adipose tissue", isCorrect: false },
      { text: "Liver ketones are converted to glucose in the brain", isCorrect: false },
      { text: "Amino acids are converted to urea in muscle", isCorrect: false },
    ],
  },
  {
    stem: "Why does insulin deficiency cause ketoacidosis?",
    topic: "Metabolic Integration",
    explanation:
      "Unopposed lipolysis floods the liver with fatty acids, and their oxidation generates acetyl-CoA far in excess of TCA capacity, so ketone bodies accumulate as acids. Glucose is abundant in the blood but cannot enter cells, so the body behaves as though starving — starvation in the midst of plenty.",
    choices: [
      { text: "Unrestrained lipolysis floods the liver with fatty acids, overwhelming TCA capacity", isCorrect: true },
      { text: "Excess glucose is directly converted into acid", isCorrect: false },
      { text: "The kidneys stop excreting all acid", isCorrect: false },
      { text: "Protein synthesis produces acidic by-products", isCorrect: false },
    ],
  },
  {
    stem: "What does glucagon do to hepatic metabolism during fasting?",
    topic: "Metabolic Integration",
    explanation:
      "It stimulates glycogenolysis and gluconeogenesis and promotes ketogenesis, raising blood glucose. It acts principally on the liver, since muscle lacks glucagon receptors — which is why muscle glycogen cannot contribute directly to blood glucose and must go through the Cori cycle instead.",
    choices: [
      { text: "Stimulates glycogenolysis, gluconeogenesis and ketogenesis, mainly in liver", isCorrect: true },
      { text: "Stimulates glycogen synthesis in muscle", isCorrect: false },
      { text: "Promotes glucose uptake into adipose tissue", isCorrect: false },
      { text: "Lowers blood glucose", isCorrect: false },
    ],
  },
  {
    stem: "Why does the liver, not muscle, regulate blood glucose despite muscle holding more glycogen?",
    topic: "Metabolic Integration",
    explanation:
      "Muscle lacks glucose-6-phosphatase, so it cannot release free glucose into the circulation — its glycogen serves only the muscle itself. The liver has the enzyme, and so is the only tissue that can export stored glucose to the rest of the body.",
    choices: [
      { text: "Muscle lacks glucose-6-phosphatase, so it cannot export free glucose", isCorrect: true },
      { text: "Muscle glycogen is chemically different", isCorrect: false },
      { text: "Muscle has no glycogen phosphorylase", isCorrect: false },
      { text: "Muscle glycogen is inaccessible to any enzyme", isCorrect: false },
    ],
  },

  /* ---- Inherited Metabolic Disease ---- */
  {
    stem: "Why is newborn screening for metabolic disease worth doing?",
    topic: "Inherited Metabolic Disease",
    explanation:
      "Because several of these conditions cause irreversible damage before symptoms appear, and dietary or pharmacological treatment started presymptomatically prevents it almost entirely. Phenylketonuria is the model case: detected at birth the outcome is normal, detected on symptoms the damage is permanent.",
    choices: [
      { text: "Damage is irreversible but preventable if treatment starts before symptoms", isCorrect: true },
      { text: "The conditions are untreatable but worth documenting", isCorrect: false },
      { text: "It replaces the need for any family history", isCorrect: false },
      { text: "The conditions only appear in adulthood", isCorrect: false },
    ],
  },
  {
    stem: "Why does G6PD deficiency cause haemolysis on oxidative stress?",
    topic: "Inherited Metabolic Disease",
    explanation:
      "The pentose phosphate pathway cannot generate enough NADPH to keep glutathione reduced, so haemoglobin oxidises and precipitates as Heinz bodies and the red cell membrane is damaged. Infections, fava beans and certain drugs precipitate it — and the red cell is uniquely vulnerable because it has no alternative NADPH source.",
    choices: [
      { text: "Insufficient NADPH to maintain reduced glutathione", isCorrect: true },
      { text: "Failure of haemoglobin synthesis", isCorrect: false },
      { text: "An abnormal beta-globin chain", isCorrect: false },
      { text: "Absent glycolytic enzymes", isCorrect: false },
    ],
  },
  {
    stem: "What is the biochemical problem in classical galactosaemia?",
    topic: "Inherited Metabolic Disease",
    explanation:
      "Deficiency of galactose-1-phosphate uridyltransferase, so galactose-1-phosphate accumulates and is toxic to liver, brain and lens. Removing lactose and galactose from the diet prevents the acute crisis, which is why it must be recognised in the first days of life.",
    choices: [
      { text: "Galactose-1-phosphate uridyltransferase deficiency, with toxic accumulation", isCorrect: true },
      { text: "Inability to absorb any dietary sugar", isCorrect: false },
      { text: "Excess galactose synthesis by the liver", isCorrect: false },
      { text: "Deficiency of lactase in the gut only", isCorrect: false },
    ],
  },
  {
    stem: "Why is maple syrup urine disease a metabolic emergency in the newborn?",
    topic: "Inherited Metabolic Disease",
    explanation:
      "Branched-chain ketoacid dehydrogenase deficiency lets leucine and its ketoacid accumulate to neurotoxic levels within days, causing encephalopathy and death if untreated. Management is urgent removal of the accumulated metabolites and restriction of branched-chain amino acid intake — a delay of hours matters.",
    choices: [
      { text: "Branched-chain amino acids accumulate rapidly to neurotoxic levels", isCorrect: true },
      { text: "It causes gradual liver fibrosis over years", isCorrect: false },
      { text: "It presents only in adolescence", isCorrect: false },
      { text: "It affects skin pigmentation alone", isCorrect: false },
    ],
  },
  {
    stem: "What underlies the lysosomal storage disorders as a group?",
    topic: "Inherited Metabolic Disease",
    explanation:
      "Deficiency of a lysosomal hydrolase, so its substrate accumulates progressively inside lysosomes and the cell enlarges and fails. Which substrate accumulates determines which organs suffer — hence the very different pictures of Gaucher, Tay-Sachs and Fabry disease despite a shared underlying mechanism.",
    choices: [
      { text: "A deficient lysosomal enzyme, so its substrate accumulates progressively", isCorrect: true },
      { text: "Overproduction of lysosomal enzymes", isCorrect: false },
      { text: "Absence of lysosomes altogether", isCorrect: false },
      { text: "Failure of mitochondrial replication", isCorrect: false },
    ],
  },
  {
    stem: "Why does mitochondrial disease show maternal inheritance?",
    topic: "Inherited Metabolic Disease",
    explanation:
      "Mitochondrial DNA is inherited almost entirely from the oocyte, so an affected mother can transmit to all her children while an affected father transmits to none. Variable heteroplasmy — the proportion of mutant mitochondria differing between tissues and between siblings — explains why severity varies so widely within one family.",
    choices: [
      { text: "Mitochondrial DNA is inherited from the oocyte", isCorrect: true },
      { text: "The genes involved are all X-linked", isCorrect: false },
      { text: "Paternal mitochondria replicate faster", isCorrect: false },
      { text: "Mitochondria contain no DNA of their own", isCorrect: false },
    ],
  },
];

/* ═══════════════ SEED ═══════════════ */

/** Fisher-Yates. The correct answer is written first above; without this it would insert at position 1 every time. */
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
  console.log("Seeding Biochemistry…\n");
  const CAT = "fs-biochemistry";

  await seedSet({
    categorySlug: CAT,
    slug: "biochemistry-practice-set-1",
    title: "Biochemistry — Practice Set 1",
    description:
      "Thirty questions on enzyme kinetics and regulation, carbohydrate metabolism, lipids and lipoproteins, amino acid and nitrogen handling, and the vitamin-derived cofactors. Untimed, with a full rationale on every question.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Foundational",
    questions: SET1,
  });

  await seedSet({
    categorySlug: CAT,
    slug: "biochemistry-practice-set-2",
    title: "Biochemistry — Practice Set 2",
    description:
      "Thirty fresh questions — no overlap with Set 1 — on molecular biology and laboratory technique, nucleotide metabolism and its drug targets, bioenergetics, whole-body metabolic integration, and inherited metabolic disease. Untimed.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Intermediate",
    questions: SET2,
  });

  await seedSet({
    categorySlug: CAT,
    slug: "biochemistry-exam-1",
    title: "Biochemistry — Timed Exam 1",
    description:
      "Thirty questions in 40 minutes covering enzymes, carbohydrate and lipid metabolism, amino acids and vitamins. Feedback withheld until you submit.",
    kind: "EXAM",
    timeLimitSeconds: 40 * 60,
    difficulty: "Intermediate",
    questions: SET1,
  });

  await seedSet({
    categorySlug: CAT,
    slug: "biochemistry-exam-2",
    title: "Biochemistry — Timed Exam 2 (Comprehensive)",
    description:
      "All sixty questions in 75 minutes, covering the whole subject. Sit this once both practice sets feel comfortable.",
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
