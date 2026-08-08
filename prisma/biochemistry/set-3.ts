/**
 * BIOCHEMISTRY — PRACTICE SET 3
 * Carbohydrate Metabolism
 *
 * Difficulty: Intermediate. Storage and release of glucose (glycogen), making
 * glucose from scratch (gluconeogenesis), the pentose phosphate pathway, the
 * special sugars fructose and galactose, hormonal blood-glucose control, and the
 * biochemistry of diabetes. Pairs with Set 4 (Lipid Metabolism) to build Exam 2.
 *
 * Item mix: single-best-answer, select-all-that-apply, and true/false, with
 * lab panels and ward scenarios. Option counts vary from four to seven, as on
 * real US board exams. Correct-answer position is randomized at seed time by the
 * engine, so no positional pattern is exploitable.
 * US conventional units and nomenclature throughout.
 */

import type { Q } from "../_lib/qbank";

export const BIOCHEMISTRY_SET_3: Q[] = [
  {
    stem: "The enzyme that adds glucose units to a growing glycogen chain in alpha-1,4 linkage, using UDP-glucose as the activated donor, is:",
    topic: "Glycogen Metabolism",
    explanation:
      "Glycogen synthase transfers glucose from UDP-glucose to the nonreducing end of a glycogen chain, forming alpha-1,4 bonds; it is the rate-limiting, regulated step of glycogen synthesis.",
    choices: [
      { text: "Glycogen synthase", isCorrect: true },
      { text: "Glycogen phosphorylase" },
      { text: "Branching enzyme" },
      { text: "Debranching enzyme" },
      { text: "Glucokinase" },
    ],
  },
  {
    stem: "Branching enzyme creates the alpha-1,6 branch points of glycogen. What advantage do these branches provide?",
    topic: "Glycogen Metabolism",
    explanation:
      "Branches multiply the nonreducing ends available to synthase and phosphorylase, so both storage and mobilization proceed faster, and they increase glycogen solubility.",
    choices: [
      { text: "More nonreducing ends for rapid synthesis and breakdown", isCorrect: true },
      { text: "They allow glycogen to enter mitochondria" },
      { text: "They convert glycogen into starch" },
      { text: "They remove the need for UDP-glucose" },
    ],
  },
  {
    stem: "UDP-glucose, the activated glucose donor for glycogen synthesis, is formed from glucose-1-phosphate and UTP by:",
    topic: "Glycogen Metabolism",
    explanation:
      "UDP-glucose pyrophosphorylase joins glucose-1-phosphate to UTP, releasing pyrophosphate; hydrolysis of that pyrophosphate makes the reaction effectively irreversible.",
    choices: [
      { text: "UDP-glucose pyrophosphorylase", isCorrect: true },
      { text: "Phosphoglucomutase" },
      { text: "Hexokinase" },
      { text: "Glycogen synthase" },
      { text: "Enolase" },
    ],
  },
  {
    stem: "True or False: Phosphoglucomutase interconverts glucose-6-phosphate and glucose-1-phosphate, linking glycogen metabolism with glycolysis and the rest of glucose metabolism.",
    type: "TRUE_FALSE",
    topic: "Glycogen Metabolism",
    explanation:
      "True. Phosphoglucomutase moves the phosphate between the 1 and 6 positions, connecting glucose-1-phosphate (from glycogenolysis) to glucose-6-phosphate used elsewhere.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Glycogen phosphorylase releases glucose-1-phosphate from glycogen. Which cofactor does it require for catalysis?",
    topic: "Glycogenolysis & Regulation",
    explanation:
      "Phosphorylase uses pyridoxal phosphate (from vitamin B6) as an essential cofactor to carry out phosphorolysis of the alpha-1,4 bonds, yielding glucose-1-phosphate.",
    choices: [
      { text: "Pyridoxal phosphate (vitamin B6)", isCorrect: true },
      { text: "Biotin" },
      { text: "Thiamine pyrophosphate" },
      { text: "Tetrahydrofolate" },
      { text: "Cobalamin" },
    ],
  },
  {
    stem: "In the liver, glucagon triggers glycogen breakdown through a cascade. Place the signaling steps in the correct order.",
    topic: "Glycogenolysis & Regulation",
    explanation:
      "Glucagon binds its receptor, activating adenylate cyclase to raise cAMP, which activates protein kinase A; PKA phosphorylates phosphorylase kinase, which activates glycogen phosphorylase.",
    choices: [
      { text: "Glucagon → cAMP → PKA → phosphorylase kinase → phosphorylase", isCorrect: true },
      { text: "Glucagon → phosphorylase → PKA → cAMP" },
      { text: "Insulin → cAMP → phosphorylase kinase" },
      { text: "Glucagon → cGMP → protein phosphatase → synthase" },
      { text: "Epinephrine → IP3 → glycogen synthase" },
    ],
  },
  {
    stem: "Phosphorylation has opposite effects on the two key glycogen enzymes. In the phosphorylated state:",
    topic: "Glycogenolysis & Regulation",
    explanation:
      "Protein kinase A-driven phosphorylation activates glycogen phosphorylase while inactivating glycogen synthase, so a single signal turns breakdown on and synthesis off simultaneously.",
    choices: [
      { text: "Phosphorylase is active and synthase is inactive", isCorrect: true },
      { text: "Both enzymes are active" },
      { text: "Phosphorylase is inactive and synthase is active" },
      { text: "Both enzymes are inactive" },
      { text: "Only glucokinase changes activity" },
    ],
  },
  {
    stem: "Which signals promote hepatic glycogen breakdown (glycogenolysis)? Select all that apply.",
    type: "MULTI",
    topic: "Glycogenolysis & Regulation",
    explanation:
      "Glucagon and epinephrine both raise cAMP and activate phosphorylase, and a high AMP level signals low energy in muscle; insulin instead promotes glycogen synthesis, and high glucose-6-phosphate favors synthase.",
    choices: [
      { text: "Glucagon", isCorrect: true },
      { text: "Epinephrine", isCorrect: true },
      { text: "Rising AMP in muscle", isCorrect: true },
      { text: "Insulin" },
      { text: "High glucose-6-phosphate" },
    ],
  },
  {
    stem: "Why can hepatocytes release free glucose from glycogen into the blood, while skeletal muscle cannot?",
    topic: "Glycogenolysis & Regulation",
    explanation:
      "Liver expresses glucose-6-phosphatase, which removes the phosphate so glucose can leave the cell; muscle lacks this enzyme, so its glucose-6-phosphate is trapped and used locally.",
    choices: [
      { text: "Liver has glucose-6-phosphatase; muscle does not", isCorrect: true },
      { text: "Muscle has glucokinase; liver does not" },
      { text: "Liver lacks phosphorylase" },
      { text: "Muscle glycogen has no branch points" },
      { text: "Only liver expresses hexokinase" },
    ],
  },
  {
    stem: "An infant has severe fasting hypoglycemia, hepatomegaly, lactic acidosis, hyperuricemia, and hyperlipidemia. Which enzyme deficiency explains von Gierke disease (type I)?",
    topic: "Glycogen Storage Diseases",
    explanation:
      "Glucose-6-phosphatase deficiency blocks the final step of both glycogenolysis and gluconeogenesis, so the liver cannot release glucose, causing fasting hypoglycemia with lactate, urate, and lipid accumulation.",
    choices: [
      { text: "Glucose-6-phosphatase", isCorrect: true },
      { text: "Lysosomal acid alpha-glucosidase" },
      { text: "Debranching enzyme" },
      { text: "Muscle phosphorylase" },
      { text: "Branching enzyme" },
      { text: "Liver phosphorylase kinase" },
    ],
  },
  {
    stem: "A floppy infant has cardiomegaly and dies of heart failure; glycogen accumulates in lysosomes. This describes Pompe disease, caused by deficiency of:",
    topic: "Glycogen Storage Diseases",
    explanation:
      "Pompe disease (type II) results from deficient lysosomal acid alpha-glucosidase (acid maltase), so glycogen accumulates in lysosomes of heart and muscle, causing cardiomegaly and hypotonia.",
    choices: [
      { text: "Lysosomal acid alpha-glucosidase (acid maltase)", isCorrect: true },
      { text: "Glucose-6-phosphatase" },
      { text: "Debranching enzyme" },
      { text: "Myophosphorylase" },
      { text: "Branching enzyme" },
    ],
  },
  {
    stem: "A young adult has exercise intolerance, muscle cramps, and myoglobinuria after exertion, with a 'second-wind' phenomenon and no rise in blood lactate during ischemic exercise. The deficient enzyme is:",
    topic: "Glycogen Storage Diseases",
    explanation:
      "McArdle disease (type V) is muscle glycogen phosphorylase (myophosphorylase) deficiency; muscle cannot mobilize its glycogen, so exercise causes cramps and myoglobinuria without the expected lactate rise.",
    choices: [
      { text: "Muscle glycogen phosphorylase (myophosphorylase)", isCorrect: true },
      { text: "Glucose-6-phosphatase" },
      { text: "Acid alpha-glucosidase" },
      { text: "Aldolase B" },
      { text: "Galactose-1-phosphate uridyltransferase" },
    ],
  },
  {
    stem: "Which features fit von Gierke disease (glucose-6-phosphatase deficiency)? Select all that apply.",
    type: "MULTI",
    topic: "Glycogen Storage Diseases",
    explanation:
      "Because glucose cannot be released, patients have severe fasting hypoglycemia and hepatomegaly; the diverted glucose-6-phosphate raises lactate, urate, and triglycerides. The heart is not primarily affected, unlike Pompe disease.",
    choices: [
      { text: "Severe fasting hypoglycemia", isCorrect: true },
      { text: "Hepatomegaly", isCorrect: true },
      { text: "Lactic acidosis and hyperuricemia", isCorrect: true },
      { text: "Hyperlipidemia", isCorrect: true },
      { text: "Prominent cardiomegaly as the main feature" },
    ],
  },
  {
    stem: "Gluconeogenesis bypasses the irreversible pyruvate kinase step using two enzymes. Which pair converts pyruvate to phosphoenolpyruvate?",
    topic: "Gluconeogenesis",
    explanation:
      "Pyruvate carboxylase (mitochondrial, biotin-dependent) makes oxaloacetate, then PEP carboxykinase converts oxaloacetate to phosphoenolpyruvate, bypassing pyruvate kinase.",
    choices: [
      { text: "Pyruvate carboxylase and PEP carboxykinase", isCorrect: true },
      { text: "Hexokinase and phosphofructokinase-1" },
      { text: "Aldolase and enolase" },
      { text: "Glucose-6-phosphatase and fructose-1,6-bisphosphatase" },
      { text: "Lactate dehydrogenase and pyruvate dehydrogenase" },
    ],
  },
  {
    stem: "Which cofactor does pyruvate carboxylase require, linking gluconeogenesis to a specific vitamin?",
    topic: "Gluconeogenesis",
    explanation:
      "Pyruvate carboxylase is a biotin-dependent carboxylase; biotin (vitamin B7) carries the activated CO2 added to pyruvate to form oxaloacetate.",
    choices: [
      { text: "Biotin", isCorrect: true },
      { text: "Thiamine pyrophosphate" },
      { text: "Pyridoxal phosphate" },
      { text: "Tetrahydrofolate" },
      { text: "Lipoic acid" },
    ],
  },
  {
    stem: "In which organs does gluconeogenesis primarily occur to maintain blood glucose during fasting?",
    topic: "Gluconeogenesis",
    explanation:
      "The liver is the main gluconeogenic organ, with the renal cortex contributing significantly during prolonged fasting; both possess the full set of bypass enzymes including glucose-6-phosphatase.",
    choices: [
      { text: "Liver and, to a lesser extent, kidney cortex", isCorrect: true },
      { text: "Skeletal muscle and brain" },
      { text: "Red blood cells and adipose" },
      { text: "Heart and lung" },
      { text: "Spleen and skin" },
    ],
  },
  {
    stem: "True or False: Because pyruvate dehydrogenase is irreversible, the acetyl-CoA derived from fatty acids cannot be used for net synthesis of glucose in humans.",
    type: "TRUE_FALSE",
    topic: "Gluconeogenesis",
    explanation:
      "True. Acetyl-CoA cannot be converted back to pyruvate, so even-chain fatty acids provide no net carbon for gluconeogenesis; only glycerol, lactate, and glucogenic amino acids do.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Which substrates can serve as carbon sources for net gluconeogenesis? Select all that apply.",
    type: "MULTI",
    topic: "Gluconeogenesis",
    explanation:
      "Lactate (via pyruvate), glycerol (from triglyceride), and glucogenic amino acids such as alanine feed gluconeogenesis; acetyl-CoA from even-chain fatty acids cannot, and ketone bodies are not glucogenic.",
    choices: [
      { text: "Lactate", isCorrect: true },
      { text: "Glycerol", isCorrect: true },
      { text: "Alanine", isCorrect: true },
      { text: "Acetyl-CoA from even-chain fatty acids" },
      { text: "Ketone bodies" },
    ],
  },
  {
    stem: "Fructose-1,6-bisphosphatase, a key gluconeogenic enzyme, is inhibited by which signal of high energy charge and abundant glycolytic flux?",
    topic: "Gluconeogenesis",
    explanation:
      "Fructose-2,6-bisphosphate and AMP inhibit fructose-1,6-bisphosphatase while activating PFK-1; low levels of these (fasting) relieve the inhibition and favor gluconeogenesis.",
    choices: [
      { text: "Fructose-2,6-bisphosphate (and AMP)", isCorrect: true },
      { text: "Citrate" },
      { text: "Acetyl-CoA" },
      { text: "ATP" },
      { text: "NADH" },
    ],
  },
  {
    stem: "The oxidative branch of the pentose phosphate pathway generates two key products. They are:",
    topic: "Pentose Phosphate Pathway",
    explanation:
      "The oxidative reactions produce NADPH for reductive biosynthesis and antioxidant defense, plus ribose-5-phosphate for nucleotide synthesis; the rate-limiting enzyme is glucose-6-phosphate dehydrogenase.",
    choices: [
      { text: "NADPH and ribose-5-phosphate", isCorrect: true },
      { text: "ATP and NADH" },
      { text: "FADH2 and GTP" },
      { text: "Lactate and NAD+" },
      { text: "Acetyl-CoA and CO2" },
    ],
  },
  {
    stem: "The rate-limiting enzyme of the pentose phosphate pathway, strongly inhibited by NADPH, is:",
    topic: "Pentose Phosphate Pathway",
    explanation:
      "Glucose-6-phosphate dehydrogenase catalyzes the committed, rate-limiting step; a high NADPH-to-NADP+ ratio feedback-inhibits it, matching flux to the cell's need for reducing power.",
    choices: [
      { text: "Glucose-6-phosphate dehydrogenase", isCorrect: true },
      { text: "Transketolase" },
      { text: "6-phosphogluconate dehydrogenase" },
      { text: "Transaldolase" },
      { text: "Phosphofructokinase-1" },
    ],
  },
  {
    stem: "For which purposes is the NADPH generated by the pentose phosphate pathway used? Select all that apply.",
    type: "MULTI",
    topic: "Pentose Phosphate Pathway",
    explanation:
      "NADPH powers fatty acid and cholesterol synthesis, maintains reduced glutathione against oxidative stress, and supplies the respiratory burst of phagocytes; it is not used by ATP synthase or the TCA cycle for energy.",
    choices: [
      { text: "Fatty acid and cholesterol synthesis", isCorrect: true },
      { text: "Regenerating reduced glutathione", isCorrect: true },
      { text: "The oxidative burst in neutrophils", isCorrect: true },
      { text: "Driving ATP synthase directly" },
      { text: "Serving as the main electron donor to the TCA cycle" },
    ],
  },
  {
    stem: "A patient develops hemolysis and Heinz bodies after taking primaquine. G6PD deficiency causes hemolysis under oxidative stress because:",
    topic: "Pentose Phosphate Pathway",
    explanation:
      "Without adequate NADPH, red cells cannot keep glutathione reduced, so oxidants damage hemoglobin (forming Heinz bodies) and the membrane; red cells are vulnerable because the PPP is their only NADPH source.",
    choices: [
      { text: "Too little NADPH to maintain reduced glutathione", isCorrect: true },
      { text: "Excess ATP production damages the membrane" },
      { text: "Iron cannot be absorbed" },
      { text: "Hemoglobin cannot bind 2,3-BPG" },
      { text: "Pyruvate kinase is overactive" },
    ],
  },
  {
    stem: "Fructose entering the liver is phosphorylated by fructokinase and then split by which enzyme, whose deficiency causes hereditary fructose intolerance?",
    topic: "Fructose Metabolism",
    explanation:
      "Aldolase B cleaves fructose-1-phosphate; its deficiency traps fructose-1-phosphate, depleting phosphate and causing hypoglycemia, vomiting, and liver damage after fructose or sucrose ingestion.",
    choices: [
      { text: "Aldolase B", isCorrect: true },
      { text: "Aldolase A" },
      { text: "Fructokinase" },
      { text: "Galactokinase" },
      { text: "Hexokinase" },
    ],
  },
  {
    stem: "Essential fructosuria is a benign condition. Which enzyme deficiency causes it?",
    topic: "Fructose Metabolism",
    explanation:
      "Fructokinase deficiency leaves fructose unphosphorylated, so it simply spills into the urine without toxic fructose-1-phosphate accumulation, making the condition harmless.",
    choices: [
      { text: "Fructokinase", isCorrect: true },
      { text: "Aldolase B" },
      { text: "Aldose reductase" },
      { text: "Sucrase-isomaltase" },
      { text: "Glucose-6-phosphatase" },
    ],
  },
  {
    stem: "True or False: In hereditary fructose intolerance, accumulated fructose-1-phosphate sequesters inorganic phosphate and inhibits both glycogenolysis and gluconeogenesis, producing hypoglycemia.",
    type: "TRUE_FALSE",
    topic: "Fructose Metabolism",
    explanation:
      "True. Phosphate trapping lowers available Pi and ATP, impairing glucose production, which is why affected patients become hypoglycemic and must avoid fructose and sucrose.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "A neonate develops jaundice, hepatomegaly, cataracts, and E. coli sepsis after starting milk feeds; a reducing substance is present in urine. Classic galactosemia is caused by deficiency of:",
    topic: "Galactose Metabolism",
    explanation:
      "Galactose-1-phosphate uridyltransferase deficiency causes toxic accumulation of galactose-1-phosphate, producing liver disease, cataracts, and susceptibility to E. coli sepsis in the newborn.",
    choices: [
      { text: "Galactose-1-phosphate uridyltransferase", isCorrect: true },
      { text: "Galactokinase" },
      { text: "Aldolase B" },
      { text: "Lactase" },
      { text: "UDP-galactose-4-epimerase" },
    ],
  },
  {
    stem: "Cataracts in galactosemia and in galactokinase deficiency form because excess galactose is reduced by aldose reductase to:",
    topic: "Galactose Metabolism",
    explanation:
      "Aldose reductase converts galactose to galactitol, an osmotically active sugar alcohol that accumulates in the lens, drawing in water and causing cataracts.",
    choices: [
      { text: "Galactitol, which accumulates in the lens", isCorrect: true },
      { text: "Sorbitol, which is exported to blood" },
      { text: "Glucose, which is harmless" },
      { text: "Lactate, which lowers pH" },
      { text: "Fructose, which feeds glycolysis" },
    ],
  },
  {
    stem: "Isolated galactokinase deficiency is milder than classic galactosemia, presenting mainly with cataracts. Why is it less severe?",
    topic: "Galactose Metabolism",
    explanation:
      "Because the block is at the first step, toxic galactose-1-phosphate does not accumulate; only galactose and galactitol build up, sparing the liver and kidneys while still causing lens cataracts.",
    choices: [
      { text: "Toxic galactose-1-phosphate does not accumulate", isCorrect: true },
      { text: "Galactose cannot be absorbed at all" },
      { text: "The liver compensates by making extra glucose" },
      { text: "Aldose reductase is also deficient" },
    ],
  },
  {
    stem: "After a carbohydrate meal, insulin lowers blood glucose largely by promoting glucose uptake into muscle and adipose via which transporter?",
    topic: "Blood Glucose Regulation",
    explanation:
      "Insulin recruits GLUT4 to the membranes of muscle and adipose tissue, increasing glucose uptake; GLUT2 (liver, beta cells) and GLUT1 (ubiquitous) are not insulin-dependent.",
    choices: [
      { text: "GLUT4", isCorrect: true },
      { text: "GLUT1" },
      { text: "GLUT2" },
      { text: "GLUT5" },
      { text: "SGLT1" },
    ],
  },
  {
    stem: "Pancreatic beta cells sense glucose using GLUT2 and which low-affinity, high-Km glucose-phosphorylating enzyme that acts as the glucose sensor?",
    topic: "Blood Glucose Regulation",
    explanation:
      "Glucokinase has a high Km, so its activity rises with glucose concentration, letting beta cells and liver respond proportionally; this makes glucokinase the physiologic glucose sensor.",
    choices: [
      { text: "Glucokinase", isCorrect: true },
      { text: "Hexokinase I" },
      { text: "Phosphofructokinase-1" },
      { text: "Pyruvate kinase" },
      { text: "Glucose-6-phosphatase" },
    ],
  },
  {
    stem: "Which hormones raise blood glucose (counter-regulatory to insulin)? Select all that apply.",
    type: "MULTI",
    topic: "Blood Glucose Regulation",
    explanation:
      "Glucagon, epinephrine, cortisol, and growth hormone all raise blood glucose by promoting glycogenolysis, gluconeogenesis, or insulin resistance; insulin alone lowers it.",
    choices: [
      { text: "Glucagon", isCorrect: true },
      { text: "Epinephrine", isCorrect: true },
      { text: "Cortisol", isCorrect: true },
      { text: "Growth hormone", isCorrect: true },
      { text: "Insulin" },
    ],
  },
  {
    stem: "In the glucose-alanine (Cahill) cycle, muscle exports nitrogen to the liver in the form of alanine. What is alanine converted to in the liver for gluconeogenesis?",
    topic: "Blood Glucose Regulation",
    explanation:
      "Liver transaminates alanine to pyruvate, using its carbon skeleton for gluconeogenesis while channeling the amino nitrogen into the urea cycle for disposal.",
    choices: [
      { text: "Pyruvate", isCorrect: true },
      { text: "Acetyl-CoA" },
      { text: "Lactate" },
      { text: "Oxaloacetate directly" },
      { text: "Glutamate only" },
    ],
  },
  {
    stem: "The three irreversible, regulated steps of glycolysis are catalyzed by hexokinase/glucokinase, phosphofructokinase-1, and:",
    topic: "Glycolysis Integration",
    explanation:
      "Pyruvate kinase catalyzes the third irreversible step; along with hexokinase and PFK-1 it is a control point, and each is bypassed by a distinct enzyme in gluconeogenesis.",
    choices: [
      { text: "Pyruvate kinase", isCorrect: true },
      { text: "Enolase" },
      { text: "Aldolase" },
      { text: "Phosphoglycerate kinase" },
      { text: "Triose phosphate isomerase" },
    ],
  },
  {
    stem: "In the Cori cycle, lactate made by anaerobic tissues travels to the liver, where it is used to make glucose. What is the net ATP cost to the liver per glucose regenerated?",
    topic: "Glycolysis Integration",
    explanation:
      "Gluconeogenesis consumes 6 ATP equivalents to build one glucose from two lactate, more than the 2 ATP the muscle gained, so the cycle shifts the energy burden to the liver.",
    choices: [
      { text: "6 ATP consumed by the liver", isCorrect: true },
      { text: "2 ATP consumed" },
      { text: "No net ATP cost" },
      { text: "4 ATP produced" },
      { text: "38 ATP produced" },
    ],
  },
  {
    stem: "Red blood cells shunt some 1,3-bisphosphoglycerate to make 2,3-BPG instead of ATP. What is the functional benefit of this Rapoport-Luebering shunt?",
    topic: "Glycolysis Integration",
    explanation:
      "2,3-BPG binds deoxyhemoglobin and lowers oxygen affinity, promoting oxygen unloading in tissues; the trade-off is one less ATP made per molecule diverted.",
    choices: [
      { text: "2,3-BPG promotes oxygen unloading from hemoglobin", isCorrect: true },
      { text: "It doubles ATP yield" },
      { text: "It regenerates NADPH" },
      { text: "It prevents lactate formation" },
      { text: "It allows the cell to use fatty acids" },
    ],
  },
  {
    stem: "A patient with uncontrolled type 1 diabetes has this panel: glucose 480 mg/dL, arterial pH 7.24, HCO3- 12 mEq/L, positive serum ketones, anion gap 22. The disturbance is:",
    topic: "Diabetes Biochemistry",
    explanation:
      "Insulin deficiency unleashes lipolysis and hepatic ketogenesis, producing acetoacetate and beta-hydroxybutyrate; the result is a high-anion-gap metabolic acidosis with hyperglycemia — diabetic ketoacidosis.",
    choices: [
      { text: "Diabetic ketoacidosis", isCorrect: true },
      { text: "Hyperosmolar hyperglycemic state without acidosis" },
      { text: "Lactic acidosis from exercise" },
      { text: "Respiratory alkalosis" },
      { text: "Metabolic alkalosis" },
    ],
  },
  {
    stem: "Chronic hyperglycemia raises hemoglobin A1c because glucose attaches to hemoglobin by:",
    topic: "Diabetes Biochemistry",
    explanation:
      "Nonenzymatic glycation covalently attaches glucose to the N-terminus of the beta chain; because it reflects average glucose over the red cell lifespan, HbA1c gauges 2–3 months of control.",
    choices: [
      { text: "Nonenzymatic glycation of hemoglobin", isCorrect: true },
      { text: "Enzymatic phosphorylation" },
      { text: "Oxidation of heme iron" },
      { text: "Binding to 2,3-BPG" },
      { text: "Disulfide bond formation" },
    ],
  },
  {
    stem: "The polyol (sorbitol) pathway contributes to diabetic complications. Which tissues are damaged because they trap sorbitol made by aldose reductase?",
    topic: "Diabetes Biochemistry",
    explanation:
      "Tissues such as lens, retina, kidney, and nerve take up glucose independently of insulin and convert it to sorbitol, which accumulates osmotically and causes cataracts, retinopathy, and neuropathy.",
    choices: [
      { text: "Lens, retina, nerve, and kidney", isCorrect: true },
      { text: "Skeletal muscle only" },
      { text: "Red blood cells only" },
      { text: "Cardiac muscle only" },
      { text: "Adipose tissue only" },
    ],
  },
  {
    stem: "True or False: In the hyperosmolar hyperglycemic state, enough insulin is present to suppress ketogenesis, so marked hyperglycemia occurs without significant ketoacidosis.",
    type: "TRUE_FALSE",
    topic: "Diabetes Biochemistry",
    explanation:
      "True. Residual insulin restrains lipolysis and ketone formation, so patients develop extreme hyperglycemia and dehydration but little ketosis, distinguishing it from diabetic ketoacidosis.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "A patient has bloating and osmotic diarrhea after dairy. Lactase deficiency causes symptoms because undigested lactose:",
    topic: "Carbohydrate Digestion",
    explanation:
      "Unhydrolyzed lactose stays in the gut lumen, drawing water osmotically and being fermented by colonic bacteria to gas and acids, producing bloating and diarrhea.",
    choices: [
      { text: "Draws water into the gut and is fermented by bacteria", isCorrect: true },
      { text: "Is absorbed and raises blood galactose" },
      { text: "Is converted to sorbitol in enterocytes" },
      { text: "Blocks glucose transporters" },
      { text: "Is stored as glycogen in the colon" },
    ],
  },
  {
    stem: "Dietary glucose and galactose are absorbed across the intestinal brush border against a gradient using which sodium-coupled transporter?",
    topic: "Carbohydrate Digestion",
    explanation:
      "SGLT1 co-transports glucose or galactose with sodium into enterocytes; GLUT2 then moves them into blood at the basolateral surface. Fructose uses GLUT5 instead.",
    choices: [
      { text: "SGLT1", isCorrect: true },
      { text: "GLUT5" },
      { text: "GLUT4" },
      { text: "GLUT2" },
      { text: "SGLT2" },
    ],
  },
  {
    stem: "Which enzyme begins starch digestion in the mouth and continues it in the small intestine?",
    topic: "Carbohydrate Digestion",
    explanation:
      "Alpha-amylase (salivary and pancreatic) hydrolyzes internal alpha-1,4 bonds of starch to maltose and dextrins; brush-border disaccharidases then finish the job.",
    choices: [
      { text: "Alpha-amylase", isCorrect: true },
      { text: "Lactase" },
      { text: "Sucrase" },
      { text: "Pepsin" },
      { text: "Trypsin" },
    ],
  },
  {
    stem: "A 6-month-old, weaned onto fruit juice, develops vomiting, hypoglycemia, and jaundice whenever fed; symptoms resolve on a fructose- and sucrose-free diet. The most likely diagnosis is:",
    topic: "Clinical Application",
    explanation:
      "Hereditary fructose intolerance (aldolase B deficiency) causes fructose-1-phosphate accumulation with hypoglycemia and liver injury after fructose/sucrose; removing these sugars is curative.",
    choices: [
      { text: "Hereditary fructose intolerance", isCorrect: true },
      { text: "Von Gierke disease" },
      { text: "Classic galactosemia" },
      { text: "McArdle disease" },
      { text: "Essential fructosuria" },
      { text: "Pompe disease" },
    ],
  },
  {
    stem: "A neonatal screening program flags a reducing substance in the urine that is not glucose, and the infant has cataracts and hepatomegaly on milk feeds. The best immediate management is to:",
    topic: "Clinical Application",
    explanation:
      "These findings indicate galactosemia; removing galactose (and lactose) from the diet halts galactose-1-phosphate and galactitol accumulation and prevents further liver and lens injury.",
    choices: [
      { text: "Remove galactose/lactose from the diet", isCorrect: true },
      { text: "Give a high-fructose formula" },
      { text: "Start insulin therapy" },
      { text: "Increase dietary protein only" },
      { text: "Restrict all carbohydrate permanently" },
    ],
  },
  {
    stem: "A patient with von Gierke disease (glucose-6-phosphatase deficiency) has fasting hypoglycemia. Which laboratory abnormalities are expected? Select all that apply.",
    type: "MULTI",
    topic: "Clinical Application",
    explanation:
      "Diverted glucose-6-phosphate feeds glycolysis and the pentose pathway, raising lactate, urate (via increased purine turnover), and triglycerides, alongside the fasting hypoglycemia. Ketones are typically low-to-normal because glucose-6-phosphate is abundant intracellularly.",
    choices: [
      { text: "Fasting hypoglycemia", isCorrect: true },
      { text: "Lactic acidosis", isCorrect: true },
      { text: "Hyperuricemia", isCorrect: true },
      { text: "Hypertriglyceridemia", isCorrect: true },
      { text: "Markedly low serum triglycerides" },
    ],
  },
  {
    stem: "During the first 12–18 hours of a fast, the liver maintains blood glucose mainly by:",
    topic: "Clinical Application",
    explanation:
      "Early fasting relies on hepatic glycogenolysis; as glycogen stores fall over roughly a day, gluconeogenesis takes over as the dominant source of blood glucose.",
    choices: [
      { text: "Glycogenolysis", isCorrect: true },
      { text: "Gluconeogenesis exclusively from the start" },
      { text: "Ketone body oxidation" },
      { text: "Dietary glucose absorption" },
      { text: "Muscle glucose export" },
    ],
  },
  {
    stem: "A marathon runner 'hits the wall' as muscle and liver glycogen deplete. Which fuel does the body increasingly rely on to spare glucose during prolonged exercise and fasting?",
    topic: "Clinical Application",
    explanation:
      "As glycogen falls, adipose lipolysis supplies free fatty acids that muscle oxidizes, and the liver makes ketone bodies, both sparing glucose for the brain and red cells.",
    choices: [
      { text: "Free fatty acids and ketone bodies", isCorrect: true },
      { text: "Dietary sucrose" },
      { text: "Stored galactose" },
      { text: "Muscle protein exclusively" },
      { text: "Blood 2,3-BPG" },
    ],
  },
  {
    stem: "Debranching enzyme has two activities needed to fully mobilize glycogen. They are:",
    topic: "Glycogen Metabolism",
    explanation:
      "Debranching enzyme has a 4-alpha-glucanotransferase activity that moves a short chain and an alpha-1,6-glucosidase activity that releases the branch glucose as free glucose, letting phosphorylase continue.",
    choices: [
      { text: "A transferase and an alpha-1,6-glucosidase", isCorrect: true },
      { text: "A kinase and a phosphatase" },
      { text: "A synthase and a phosphorylase" },
      { text: "Two separate epimerases" },
    ],
  },
  {
    stem: "Which glycolytic intermediate is shared as the entry point where glycerol, after phosphorylation and oxidation, joins gluconeogenesis?",
    topic: "Gluconeogenesis",
    explanation:
      "Glycerol is phosphorylated to glycerol-3-phosphate and oxidized to dihydroxyacetone phosphate, a triose phosphate that feeds directly into gluconeogenesis.",
    choices: [
      { text: "Dihydroxyacetone phosphate", isCorrect: true },
      { text: "Pyruvate" },
      { text: "Phosphoenolpyruvate" },
      { text: "Glucose-6-phosphate" },
      { text: "2,3-BPG" },
      { text: "Citrate" },
    ],
  },
  {
    stem: "The non-oxidative branch of the pentose phosphate pathway is reversible and interconverts sugars using transketolase and transaldolase. Transketolase requires which cofactor?",
    topic: "Pentose Phosphate Pathway",
    explanation:
      "Transketolase uses thiamine pyrophosphate; its activity in red cells is a functional test of thiamine status, transferring two-carbon units among sugar phosphates.",
    choices: [
      { text: "Thiamine pyrophosphate", isCorrect: true },
      { text: "Biotin" },
      { text: "Pyridoxal phosphate" },
      { text: "NADPH" },
      { text: "Lipoic acid" },
    ],
  },
  {
    stem: "Which single hormone is the only one that lowers blood glucose, and is therefore the key to preventing hyperglycemia?",
    topic: "Blood Glucose Regulation",
    explanation:
      "Insulin is the sole hypoglycemic hormone; it promotes glucose uptake and storage and suppresses hepatic glucose output, opposing the several counter-regulatory hormones.",
    choices: [
      { text: "Insulin", isCorrect: true },
      { text: "Glucagon" },
      { text: "Cortisol" },
      { text: "Epinephrine" },
      { text: "Growth hormone" },
    ],
  },
  {
    stem: "True or False: Hexokinase is inhibited by its product glucose-6-phosphate, whereas hepatic glucokinase is not, allowing the liver to keep taking up glucose when it is plentiful.",
    type: "TRUE_FALSE",
    topic: "Glycolysis Integration",
    explanation:
      "True. Product inhibition of hexokinase protects most tissues from over-accumulating glucose-6-phosphate, while glucokinase's lack of such inhibition lets the liver buffer blood glucose after meals.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Advanced glycation end-products (AGEs) contribute to diabetic vascular disease. They form when glucose:",
    topic: "Diabetes Biochemistry",
    explanation:
      "Persistent nonenzymatic glycation of proteins matures into irreversible advanced glycation end-products that cross-link matrix proteins and engage RAGE receptors, promoting inflammation and vascular injury.",
    choices: [
      { text: "Irreversibly cross-links long-lived proteins after glycation", isCorrect: true },
      { text: "Is phosphorylated by hexokinase" },
      { text: "Is reduced to sorbitol only" },
      { text: "Binds insulin receptors" },
      { text: "Is stored as glycogen in vessels" },
    ],
  },
  {
    stem: "A hydrogen breath test rises sharply after a lactose load in a patient with bloating and diarrhea. This supports:",
    topic: "Carbohydrate Digestion",
    explanation:
      "Colonic bacteria ferment malabsorbed lactose to hydrogen, which is exhaled; a rise in breath hydrogen after a lactose load is diagnostic of lactase deficiency.",
    choices: [
      { text: "Lactase deficiency (lactose malabsorption)", isCorrect: true },
      { text: "Sucrase excess" },
      { text: "Galactosemia" },
      { text: "Pancreatic amylase excess" },
      { text: "Fructokinase deficiency" },
    ],
  },
  {
    stem: "Which mechanisms link chronic hyperglycemia to long-term tissue damage? Select all that apply.",
    type: "MULTI",
    topic: "Diabetes Biochemistry",
    explanation:
      "Sorbitol (polyol) accumulation, advanced glycation end-product formation, and increased flux through protein kinase C and the hexosamine pathway all contribute; simply raising ATP synthesis does not.",
    choices: [
      { text: "Sorbitol (polyol pathway) accumulation", isCorrect: true },
      { text: "Advanced glycation end-product formation", isCorrect: true },
      { text: "Protein kinase C activation", isCorrect: true },
      { text: "Increased mitochondrial ATP export lowering glucose" },
      { text: "Depletion of all cellular glucose transporters" },
    ],
  },
  {
    stem: "Cortisol supports prolonged fasting partly by inducing gluconeogenic enzymes and by mobilizing which substrate from muscle?",
    topic: "Gluconeogenesis",
    explanation:
      "Cortisol drives proteolysis, releasing glucogenic amino acids (notably alanine) that the liver uses for gluconeogenesis, while also inducing PEP carboxykinase and other enzymes.",
    choices: [
      { text: "Glucogenic amino acids from muscle protein", isCorrect: true },
      { text: "Ketone bodies from brain" },
      { text: "Free fatty acids for glucose synthesis" },
      { text: "Lactate from red cells only" },
    ],
  },
  {
    stem: "Cori disease (type III) resembles a milder von Gierke disease but with normal lactate and less severe hypoglycemia. The deficient enzyme is:",
    topic: "Glycogen Storage Diseases",
    explanation:
      "Debranching enzyme deficiency (type III) leaves limit dextrins; because gluconeogenesis is intact, hypoglycemia is milder and blood lactate is not elevated, unlike von Gierke disease.",
    choices: [
      { text: "Debranching enzyme", isCorrect: true },
      { text: "Glucose-6-phosphatase" },
      { text: "Branching enzyme" },
      { text: "Acid maltase" },
      { text: "Muscle phosphorylase" },
    ],
  },
  {
    stem: "Why does fructose enter glycolysis in the liver in a way that bypasses the main regulated PFK-1 step, potentially promoting lipogenesis?",
    topic: "Fructose Metabolism",
    explanation:
      "Fructokinase and aldolase B feed fructose in below PFK-1 as trioses, so intake is not restrained by the energy-sensing PFK-1 step, allowing excess to be converted toward fat.",
    choices: [
      { text: "Fructose enters as trioses below the PFK-1 control point", isCorrect: true },
      { text: "Fructose is a direct PFK-1 activator" },
      { text: "Fructose is stored only as glycogen" },
      { text: "Fructose cannot be phosphorylated" },
      { text: "Fructose inhibits glucokinase" },
    ],
  },
  {
    stem: "A 4-year-old has a protuberant abdomen from massive hepatomegaly, a 'doll-like' face, fasting hypoglycemia, and blood tests showing high lactate, uric acid, and triglycerides. Which enzyme is deficient?",
    topic: "Glycogen Storage Diseases",
    explanation:
      "This is von Gierke disease (type I): glucose-6-phosphatase deficiency prevents glucose release from both glycogenolysis and gluconeogenesis, giving fasting hypoglycemia with lactate, urate, and lipid elevations.",
    choices: [
      { text: "Glucose-6-phosphatase", isCorrect: true },
      { text: "Acid alpha-glucosidase" },
      { text: "Debranching enzyme" },
      { text: "Branching enzyme" },
      { text: "Muscle phosphorylase" },
      { text: "Liver phosphorylase" },
      { text: "Aldolase B" },
    ],
  },
  {
    stem: "Which enzyme defect produces abnormal glycogen with very long outer chains and few branches, presenting with cirrhosis and liver failure in infancy (Andersen disease, type IV)?",
    topic: "Glycogen Storage Diseases",
    explanation:
      "Branching enzyme deficiency yields poorly branched, nearly amylopectin-like glycogen that damages the liver, causing cirrhosis and early liver failure.",
    choices: [
      { text: "Branching enzyme", isCorrect: true },
      { text: "Debranching enzyme" },
      { text: "Glucose-6-phosphatase" },
      { text: "Acid maltase" },
      { text: "Muscle phosphorylase" },
      { text: "Glycogen synthase" },
      { text: "Aldolase B" },
    ],
  },
  {
    stem: "The immediate activated donor of glucose for glycogen synthesis is:",
    topic: "Glycogen Metabolism",
    explanation:
      "UDP-glucose is the activated donor used by glycogen synthase; it is made from glucose-1-phosphate and UTP.",
    choices: [
      { text: "UDP-glucose", isCorrect: true },
      { text: "Glucose-6-phosphate" },
      { text: "ADP-glucose" },
      { text: "Free glucose" },
    ],
  },
  {
    stem: "How many high-energy phosphate bonds are consumed to synthesize one glucose from two pyruvate?",
    topic: "Gluconeogenesis",
    explanation:
      "Gluconeogenesis spends 6 high-energy phosphates per glucose (4 ATP and 2 GTP), making it energetically costly compared with the 2 ATP glycolysis yields.",
    choices: [
      { text: "6", isCorrect: true },
      { text: "2" },
      { text: "4" },
      { text: "8" },
    ],
  },
  {
    stem: "The pentose phosphate pathway occurs in which cellular compartment?",
    topic: "Pentose Phosphate Pathway",
    explanation:
      "All reactions of the pentose phosphate pathway occur in the cytosol, where the NADPH it produces is used for biosynthesis and antioxidant defense.",
    choices: [
      { text: "Cytosol", isCorrect: true },
      { text: "Mitochondrial matrix" },
      { text: "Lysosome" },
      { text: "Nucleus" },
    ],
  },
  {
    stem: "True or False: The oxidative reactions of the pentose phosphate pathway are irreversible, whereas the non-oxidative reactions are reversible and can supply ribose-5-phosphate when NADPH is not needed.",
    type: "TRUE_FALSE",
    topic: "Pentose Phosphate Pathway",
    explanation:
      "True. The oxidative branch commits glucose-6-phosphate to NADPH production, while the reversible non-oxidative branch flexibly makes or consumes ribose-5-phosphate according to demand.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "In normal galactose metabolism, galactose-1-phosphate is converted to glucose-1-phosphate by galactose-1-phosphate uridyltransferase, which also produces:",
    topic: "Galactose Metabolism",
    explanation:
      "The uridyltransferase swaps UDP between galactose-1-phosphate and glucose-1-phosphate, generating UDP-galactose and glucose-1-phosphate; UDP-galactose is later epimerized back to UDP-glucose.",
    choices: [
      { text: "UDP-galactose", isCorrect: true },
      { text: "UDP-glucuronate" },
      { text: "Galactitol" },
      { text: "Ribose-5-phosphate" },
      { text: "Fructose-1-phosphate" },
    ],
  },
  {
    stem: "UDP-galactose-4-epimerase interconverts UDP-galactose and UDP-glucose. Why is this reaction important even for someone on a galactose-free diet?",
    topic: "Galactose Metabolism",
    explanation:
      "The epimerase lets cells synthesize UDP-galactose from glucose for making glycoproteins and glycolipids, so galactose can be produced endogenously when none is eaten.",
    choices: [
      { text: "It lets cells make galactose from glucose for glycoconjugates", isCorrect: true },
      { text: "It is required to absorb dietary fructose" },
      { text: "It generates NADPH" },
      { text: "It detoxifies galactitol" },
    ],
  },
  {
    stem: "Which statements about insulin's metabolic actions after a meal are correct? Select all that apply.",
    type: "MULTI",
    topic: "Blood Glucose Regulation",
    explanation:
      "Insulin promotes GLUT4-mediated glucose uptake, glycogen and fat synthesis, and it suppresses gluconeogenesis, glycogenolysis, and lipolysis; it does not stimulate ketogenesis, which it restrains.",
    choices: [
      { text: "Recruits GLUT4 to muscle and adipose membranes", isCorrect: true },
      { text: "Stimulates glycogen and triglyceride synthesis", isCorrect: true },
      { text: "Suppresses hepatic gluconeogenesis", isCorrect: true },
      { text: "Stimulates hepatic ketogenesis" },
      { text: "Activates hormone-sensitive lipase" },
    ],
  },
  {
    stem: "Somatostatin from pancreatic delta cells affects glucose homeostasis by:",
    topic: "Blood Glucose Regulation",
    explanation:
      "Somatostatin inhibits secretion of both insulin and glucagon (and other GI hormones), dampening the islet response and slowing nutrient absorption.",
    choices: [
      { text: "Inhibiting release of both insulin and glucagon", isCorrect: true },
      { text: "Stimulating only insulin release" },
      { text: "Stimulating only glucagon release" },
      { text: "Directly lowering blood glucose like insulin" },
      { text: "Activating glycogen phosphorylase in muscle" },
    ],
  },
  {
    stem: "Which ketone body predominates in severe diabetic ketoacidosis and may be underestimated by nitroprusside urine tests that mainly detect acetoacetate?",
    topic: "Diabetes Biochemistry",
    explanation:
      "Beta-hydroxybutyrate predominates when the NADH/NAD+ ratio is high, yet nitroprusside strips detect acetoacetate, so ketosis can be underestimated early in diabetic ketoacidosis.",
    choices: [
      { text: "Beta-hydroxybutyrate", isCorrect: true },
      { text: "Acetoacetate" },
      { text: "Acetone" },
      { text: "Acetyl-CoA" },
      { text: "Citrate" },
    ],
  },
  {
    stem: "A hemoglobin A1c of 9% reflects average blood glucose over approximately:",
    topic: "Diabetes Biochemistry",
    explanation:
      "Because HbA1c reflects cumulative nonenzymatic glycation over the red cell lifespan, it indicates average glycemia over the preceding 2–3 months, guiding chronic management.",
    choices: [
      { text: "The prior 2–3 months", isCorrect: true },
      { text: "The prior 24 hours" },
      { text: "The prior 1–2 weeks" },
      { text: "The prior year" },
      { text: "Only the fasting state" },
    ],
  },
  {
    stem: "Acetyl-CoA accumulating from fatty acid oxidation during fasting supports gluconeogenesis by allosterically activating which enzyme?",
    topic: "Gluconeogenesis",
    explanation:
      "Acetyl-CoA activates pyruvate carboxylase, pushing pyruvate toward oxaloacetate for gluconeogenesis; this couples fat breakdown to glucose production during fasting.",
    choices: [
      { text: "Pyruvate carboxylase", isCorrect: true },
      { text: "Pyruvate kinase" },
      { text: "Phosphofructokinase-1" },
      { text: "Glycogen synthase" },
      { text: "Pyruvate dehydrogenase" },
    ],
  },
  {
    stem: "PEP carboxykinase converts oxaloacetate to phosphoenolpyruvate using which nucleotide as the phosphate/energy source?",
    topic: "Gluconeogenesis",
    explanation:
      "PEP carboxykinase uses GTP to phosphorylate and decarboxylate oxaloacetate into phosphoenolpyruvate, one of the ATP-equivalent costs of gluconeogenesis.",
    choices: [
      { text: "GTP", isCorrect: true },
      { text: "ATP" },
      { text: "UTP" },
      { text: "CTP" },
      { text: "NADPH" },
    ],
  },
  {
    stem: "Chronic granulomatous disease impairs the neutrophil respiratory burst. Which NADPH-dependent enzyme is defective?",
    topic: "Pentose Phosphate Pathway",
    explanation:
      "NADPH oxidase is deficient, so phagocytes cannot generate superoxide to kill catalase-positive organisms; the NADPH substrate itself comes from the pentose phosphate pathway.",
    choices: [
      { text: "NADPH oxidase", isCorrect: true },
      { text: "Glucose-6-phosphate dehydrogenase" },
      { text: "Myeloperoxidase" },
      { text: "Catalase" },
      { text: "Superoxide dismutase" },
    ],
  },
  {
    stem: "In skeletal muscle, calcium released during contraction accelerates glycogen breakdown by activating phosphorylase kinase through:",
    topic: "Glycogenolysis & Regulation",
    explanation:
      "Calcium binds calmodulin, a subunit of phosphorylase kinase, partially activating it during contraction so glycogenolysis is coupled to muscle activity even before hormonal signals arrive.",
    choices: [
      { text: "Binding calmodulin, a subunit of phosphorylase kinase", isCorrect: true },
      { text: "Directly phosphorylating glycogen synthase" },
      { text: "Raising cAMP independently of hormones" },
      { text: "Inhibiting glucose-6-phosphatase" },
    ],
  },
  {
    stem: "Insulin promotes glycogen synthesis in part by activating protein phosphatase-1, which:",
    topic: "Glycogen Metabolism",
    explanation:
      "Protein phosphatase-1 dephosphorylates the glycogen enzymes, activating glycogen synthase and inactivating phosphorylase, so insulin shifts the balance toward storage.",
    choices: [
      { text: "Dephosphorylates the enzymes, activating synthase and inhibiting phosphorylase", isCorrect: true },
      { text: "Phosphorylates and activates phosphorylase" },
      { text: "Raises cAMP" },
      { text: "Degrades glycogen synthase" },
    ],
  },
  {
    stem: "The sorbitol (polyol) pathway converts glucose to sorbitol and then to fructose using aldose reductase and sorbitol dehydrogenase. Tissue damage occurs in cells that:",
    topic: "Fructose Metabolism",
    explanation:
      "Cells rich in aldose reductase but low in sorbitol dehydrogenase (lens, retina, nerve, kidney) trap osmotically active sorbitol, causing the cataracts and neuropathy of chronic hyperglycemia.",
    choices: [
      { text: "Make sorbitol but cannot readily convert or export it", isCorrect: true },
      { text: "Lack aldose reductase entirely" },
      { text: "Have abundant sorbitol dehydrogenase" },
      { text: "Do not take up glucose" },
    ],
  },
  {
    stem: "Which enzymes or transporters are correctly matched to their role in carbohydrate handling? Select all that apply.",
    type: "MULTI",
    topic: "Carbohydrate Digestion",
    explanation:
      "Salivary/pancreatic amylase splits starch, brush-border lactase splits lactose, SGLT1 absorbs glucose/galactose with sodium, and GLUT5 absorbs fructose. Pepsin is a protease and has no carbohydrate role.",
    choices: [
      { text: "Amylase — hydrolyzes starch", isCorrect: true },
      { text: "Lactase — hydrolyzes lactose", isCorrect: true },
      { text: "SGLT1 — sodium-coupled glucose/galactose uptake", isCorrect: true },
      { text: "GLUT5 — fructose uptake", isCorrect: true },
      { text: "Pepsin — hydrolyzes sucrose" },
    ],
  },
  {
    stem: "An acarbose-treated diabetic has reduced postprandial glucose spikes. Acarbose works by inhibiting:",
    topic: "Carbohydrate Digestion",
    explanation:
      "Acarbose inhibits intestinal alpha-glucosidases (and pancreatic amylase), slowing breakdown of complex carbohydrates and blunting the postprandial glucose rise.",
    choices: [
      { text: "Intestinal alpha-glucosidases", isCorrect: true },
      { text: "SGLT2 in the kidney" },
      { text: "Hepatic glucokinase" },
      { text: "Pancreatic lipase" },
      { text: "GLUT4 translocation" },
    ],
  },
  {
    stem: "A newborn screened positive for galactosemia. Beyond dietary galactose restriction, these infants are at particular risk for sepsis from which organism?",
    topic: "Clinical Application",
    explanation:
      "Galactosemic neonates are classically prone to Escherichia coli sepsis; prompt galactose restriction and vigilance for infection are essential in management.",
    choices: [
      { text: "Escherichia coli", isCorrect: true },
      { text: "Group A streptococcus" },
      { text: "Listeria via cheese only" },
      { text: "Pseudomonas exclusively" },
      { text: "Clostridium tetani" },
    ],
  },
  {
    stem: "A patient with type 2 diabetes is started on a drug that blocks renal glucose reabsorption, causing glucosuria. Which transporter does it inhibit?",
    topic: "Clinical Application",
    explanation:
      "SGLT2 inhibitors block sodium-glucose cotransporter 2 in the proximal tubule, lowering the renal threshold for glucose and increasing urinary glucose loss to reduce hyperglycemia.",
    choices: [
      { text: "SGLT2", isCorrect: true },
      { text: "SGLT1" },
      { text: "GLUT4" },
      { text: "GLUT2" },
      { text: "GLUT5" },
      { text: "Glucokinase" },
    ],
  },
  {
    stem: "True or False: During the transition from the fed to the fasted state, falling insulin and rising glucagon shift the liver from glycogen synthesis and glycolysis toward glycogenolysis and gluconeogenesis.",
    type: "TRUE_FALSE",
    topic: "Clinical Application",
    explanation:
      "True. The insulin-to-glucagon ratio governs hepatic direction; as it falls with fasting, storage pathways switch off and glucose-producing pathways switch on to defend blood glucose.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "A 3-week-old with poor feeding, vomiting, and cataracts has galactose-1-phosphate uridyltransferase deficiency. The cataracts are due to accumulation of:",
    topic: "Clinical Application",
    explanation:
      "In galactosemia, excess galactose is reduced by aldose reductase to galactitol, which accumulates osmotically in the lens and produces early cataracts.",
    choices: [
      { text: "Galactitol", isCorrect: true },
      { text: "Sorbitol from glucose only" },
      { text: "Galactose-1-phosphate in the lens directly" },
      { text: "Glucose-6-phosphate" },
      { text: "Fructose-1-phosphate" },
    ],
  },
  {
    stem: "Epinephrine acting on hepatic alpha-1 receptors mobilizes glycogen through a cAMP-independent route by generating which second messengers?",
    topic: "Glycogenolysis & Regulation",
    explanation:
      "Alpha-1 stimulation activates phospholipase C, producing IP3 and diacylglycerol; IP3 releases calcium that activates phosphorylase kinase, complementing the beta-receptor/cAMP pathway.",
    choices: [
      { text: "IP3 and diacylglycerol (raising intracellular calcium)", isCorrect: true },
      { text: "cAMP and PKA only" },
      { text: "cGMP and PKG" },
      { text: "NADPH and glutathione" },
      { text: "Ceramide and sphingosine" },
    ],
  },
  {
    stem: "Which best explains why rapidly dividing cells upregulate the pentose phosphate pathway?",
    topic: "Pentose Phosphate Pathway",
    explanation:
      "Dividing cells need ribose-5-phosphate for nucleotide synthesis and NADPH for reductive biosynthesis, both supplied by the pentose phosphate pathway.",
    choices: [
      { text: "They need ribose-5-phosphate and NADPH for biosynthesis", isCorrect: true },
      { text: "They need extra ATP from the pathway" },
      { text: "They need lactate for energy" },
      { text: "They need FADH2 for the electron transport chain" },
    ],
  },
  {
    stem: "Why must oxaloacetate be shuttled out of the mitochondrion as malate before gluconeogenesis can continue in the cytosol?",
    topic: "Gluconeogenesis",
    explanation:
      "Oxaloacetate cannot cross the inner mitochondrial membrane, so it is reduced to malate, exported, and re-oxidized to oxaloacetate in the cytosol where PEP carboxykinase acts.",
    choices: [
      { text: "Oxaloacetate cannot cross the inner mitochondrial membrane", isCorrect: true },
      { text: "Malate is the substrate for PEP carboxykinase" },
      { text: "The cytosol lacks pyruvate carboxylase's product" },
      { text: "Mitochondria lack all gluconeogenic enzymes" },
    ],
  },
  {
    stem: "A fasting patient with very poorly controlled diabetes has heavy ketonuria. The primary driver of this ketogenesis is:",
    topic: "Diabetes Biochemistry",
    explanation:
      "Insulin deficiency with glucagon excess drives adipose lipolysis, flooding the liver with fatty acids whose beta-oxidation yields acetyl-CoA that is converted to ketone bodies faster than tissues can use them.",
    choices: [
      { text: "Unrestrained lipolysis delivering fatty acids to the liver", isCorrect: true },
      { text: "Excess dietary carbohydrate" },
      { text: "Overactive glycogen synthesis" },
      { text: "High insulin levels" },
      { text: "Increased renal glucose reabsorption" },
    ],
  },
  {
    stem: "The incretin hormone GLP-1 lowers postprandial glucose mainly by:",
    topic: "Blood Glucose Regulation",
    explanation:
      "GLP-1 enhances glucose-dependent insulin secretion, suppresses glucagon, slows gastric emptying, and promotes satiety; its glucose-dependence limits hypoglycemia risk.",
    choices: [
      { text: "Enhancing glucose-dependent insulin release and suppressing glucagon", isCorrect: true },
      { text: "Directly inhibiting glucokinase" },
      { text: "Blocking SGLT2" },
      { text: "Activating hormone-sensitive lipase" },
      { text: "Stimulating hepatic gluconeogenesis" },
    ],
  },
  {
    stem: "Which glycogen storage diseases predominantly affect skeletal muscle with exercise intolerance rather than causing fasting hypoglycemia? Select all that apply.",
    type: "MULTI",
    topic: "Glycogen Storage Diseases",
    explanation:
      "McArdle disease (muscle phosphorylase) and Tarui disease (muscle PFK-1) impair muscle glycogen use, causing exercise intolerance and cramps; von Gierke and Cori disease instead cause fasting hypoglycemia.",
    choices: [
      { text: "McArdle disease (type V)", isCorrect: true },
      { text: "Tarui disease (type VII, PFK-1)", isCorrect: true },
      { text: "Von Gierke disease (type I)" },
      { text: "Cori disease (type III)" },
      { text: "Pompe disease (type II)" },
    ],
  },
  {
    stem: "High dietary fructose can promote hepatic fat accumulation because fructose:",
    topic: "Fructose Metabolism",
    explanation:
      "Fructose is rapidly taken up and metabolized to trioses that bypass PFK-1 regulation, providing unregulated substrate for lipogenesis and raising hepatic triglyceride.",
    choices: [
      { text: "Provides unregulated carbon for lipogenesis", isCorrect: true },
      { text: "Cannot be metabolized by the liver" },
      { text: "Directly inhibits fatty acid synthase" },
      { text: "Is stored only as muscle glycogen" },
    ],
  },
  {
    stem: "A tissue that lacks mitochondria depends on which regeneration reaction to sustain glycolytic NAD+ and continuous ATP production?",
    topic: "Glycolysis Integration",
    explanation:
      "Red blood cells regenerate NAD+ by reducing pyruvate to lactate via lactate dehydrogenase, allowing glycolysis (their only ATP source) to continue.",
    choices: [
      { text: "Reduction of pyruvate to lactate (lactate dehydrogenase)", isCorrect: true },
      { text: "The malate-aspartate shuttle" },
      { text: "Oxidative phosphorylation" },
      { text: "The pentose phosphate pathway" },
      { text: "Ketone body oxidation" },
    ],
  },
  {
    stem: "A patient with G6PD deficiency is most at risk of hemolysis after exposure to which combination?",
    topic: "Clinical Application",
    explanation:
      "Oxidative stressors — certain drugs (primaquine, dapsone, sulfonamides), fava beans, and infection — overwhelm the limited NADPH-dependent antioxidant capacity, precipitating hemolysis.",
    choices: [
      { text: "Oxidant drugs, fava beans, or infection", isCorrect: true },
      { text: "A high-carbohydrate meal" },
      { text: "Vitamin C supplementation alone" },
      { text: "Prolonged fasting only" },
      { text: "Excess dietary protein" },
    ],
  },
  {
    stem: "True or False: Metformin lowers blood glucose largely by reducing hepatic gluconeogenesis rather than by stimulating insulin secretion.",
    type: "TRUE_FALSE",
    topic: "Diabetes Biochemistry",
    explanation:
      "True. Metformin acts mainly in the liver to suppress gluconeogenesis (partly via AMPK activation) and does not directly stimulate insulin release, so it rarely causes hypoglycemia by itself.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Glycogenin is required to begin glycogen synthesis because it:",
    topic: "Glycogen Metabolism",
    explanation:
      "Glycogenin autoglucosylates to form a short primer chain on which glycogen synthase can then extend, since synthase cannot start a chain from nothing.",
    choices: [
      { text: "Provides the initial primer by autoglucosylation", isCorrect: true },
      { text: "Adds branch points" },
      { text: "Releases glucose-1-phosphate" },
      { text: "Dephosphorylates synthase" },
    ],
  },
];
