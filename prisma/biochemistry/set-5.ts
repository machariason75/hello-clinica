/**
 * BIOCHEMISTRY — PRACTICE SET 5
 * Nitrogen Metabolism & Nucleotides
 *
 * Difficulty: Advanced. Amino-acid nitrogen removal, the full urea cycle and
 * its disorders, ammonia transport and toxicity, amino-acid catabolic diseases,
 * one-carbon/folate metabolism, heme synthesis and degradation, and purine and
 * pyrimidine metabolism through to gout. Pairs with Set 6 to build Exam 3.
 *
 * Item mix: single-best-answer, select-all-that-apply, and true/false, with lab
 * panels and clinical scenarios. Option counts vary from four to seven, as on
 * real US board exams. Correct-answer position is randomized at seed time by the
 * engine, so no positional pattern is exploitable.
 * The urea cycle is named correctly throughout (not "BUN cycle").
 */

import type { Q } from "../_lib/qbank";

export const BIOCHEMISTRY_SET_5: Q[] = [
  {
    stem: "The first step in the catabolism of most amino acids is the transfer of the alpha-amino group to alpha-ketoglutarate, forming glutamate. This reaction is catalyzed by:",
    topic: "Amino Acid Nitrogen Removal",
    explanation:
      "Aminotransferases (transaminases) move the alpha-amino group to alpha-ketoglutarate, generating glutamate and the corresponding alpha-keto acid; they use pyridoxal phosphate (vitamin B6) as coenzyme. This funnels nitrogen from many amino acids into a single pool.",
    choices: [
      { text: "Aminotransferases (transaminases)", isCorrect: true },
      { text: "Glutamate dehydrogenase" },
      { text: "Glutaminase" },
      { text: "Arginase" },
      { text: "Carbamoyl phosphate synthetase I" },
    ],
  },
  {
    stem: "Aminotransferases require which cofactor, derived from vitamin B6, to shuttle the amino group during transamination?",
    topic: "Amino Acid Nitrogen Removal",
    explanation:
      "Pyridoxal phosphate (PLP), the active form of vitamin B6, forms a Schiff base with the amino acid and is essential for transamination, deamination, and decarboxylation of amino acids.",
    choices: [
      { text: "Pyridoxal phosphate", isCorrect: true },
      { text: "Thiamine pyrophosphate" },
      { text: "Biotin" },
      { text: "Tetrahydrofolate" },
      { text: "Cobalamin" },
    ],
  },
  {
    stem: "Glutamate dehydrogenase occupies a central place in nitrogen metabolism because it:",
    topic: "Amino Acid Nitrogen Removal",
    explanation:
      "Glutamate dehydrogenase oxidatively deaminates glutamate to alpha-ketoglutarate and free ammonia, releasing the nitrogen that transamination had collected into glutamate. It is the main enzyme that liberates ammonia for urea synthesis.",
    choices: [
      { text: "Releases free ammonia from glutamate for disposal", isCorrect: true },
      { text: "Adds ammonia directly to urea" },
      { text: "Transfers nitrogen only to pyruvate" },
      { text: "Synthesizes pyridoxal phosphate" },
      { text: "Degrades uric acid" },
    ],
  },
  {
    stem: "Which serum enzymes are aminotransferases used clinically to detect hepatocellular injury? Select all that apply.",
    type: "MULTI",
    topic: "Amino Acid Nitrogen Removal",
    explanation:
      "Alanine aminotransferase (ALT) and aspartate aminotransferase (AST) are the transaminases measured to assess liver-cell injury. Alkaline phosphatase and gamma-glutamyl transferase reflect cholestasis, and amylase reflects the pancreas.",
    choices: [
      { text: "Alanine aminotransferase (ALT)", isCorrect: true },
      { text: "Aspartate aminotransferase (AST)", isCorrect: true },
      { text: "Alkaline phosphatase" },
      { text: "Gamma-glutamyl transferase" },
      { text: "Amylase" },
    ],
  },
  {
    stem: "True or False: Transamination reactions typically create no net loss of nitrogen from the amino-acid pool, because the amino group is transferred rather than removed as ammonia.",
    type: "TRUE_FALSE",
    topic: "Amino Acid Nitrogen Removal",
    explanation:
      "True. Transamination interconverts amino acids and keto acids without releasing free ammonia; the nitrogen is merely moved onto alpha-ketoglutarate to form glutamate. Net removal occurs later, chiefly through glutamate dehydrogenase.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The urea cycle disposes of excess nitrogen as urea. The two nitrogen atoms of each urea molecule come from:",
    topic: "Urea Cycle",
    explanation:
      "One urea nitrogen derives from free ammonia (incorporated by carbamoyl phosphate synthetase I) and the other from aspartate (added by argininosuccinate synthetase). The carbon comes from bicarbonate/CO2.",
    choices: [
      { text: "Free ammonia and the amino group of aspartate", isCorrect: true },
      { text: "Two molecules of free ammonia" },
      { text: "Glutamine and glutamate" },
      { text: "Aspartate and alanine" },
      { text: "Two molecules of aspartate" },
    ],
  },
  {
    stem: "The committed, rate-limiting step of the urea cycle forms carbamoyl phosphate from ammonia and bicarbonate. Which mitochondrial enzyme catalyzes it, and what is its essential allosteric activator?",
    topic: "Urea Cycle",
    explanation:
      "Carbamoyl phosphate synthetase I (CPS I), located in the mitochondrial matrix, is rate-limiting and absolutely requires N-acetylglutamate as an allosteric activator, linking urea synthesis to the availability of amino acids.",
    choices: [
      { text: "Carbamoyl phosphate synthetase I; N-acetylglutamate", isCorrect: true },
      { text: "Carbamoyl phosphate synthetase II; PRPP" },
      { text: "Ornithine transcarbamylase; biotin" },
      { text: "Argininosuccinate lyase; aspartate" },
      { text: "Arginase; manganese" },
    ],
  },
  {
    stem: "Put the urea-cycle intermediates in the correct order beginning with ornithine. Which sequence is correct?",
    topic: "Urea Cycle",
    explanation:
      "Ornithine combines with carbamoyl phosphate to form citrulline; citrulline plus aspartate yields argininosuccinate; this is cleaved to arginine and fumarate; arginase then hydrolyzes arginine to urea, regenerating ornithine.",
    choices: [
      { text: "Ornithine to citrulline to argininosuccinate to arginine to ornithine", isCorrect: true },
      { text: "Ornithine to arginine to citrulline to argininosuccinate" },
      { text: "Citrulline to ornithine to arginine to urea" },
      { text: "Arginine to citrulline to ornithine to aspartate" },
      { text: "Ornithine to argininosuccinate to citrulline to arginine" },
    ],
  },
  {
    stem: "Which urea-cycle reaction directly produces fumarate, providing a link to the TCA cycle?",
    topic: "Urea Cycle",
    explanation:
      "Argininosuccinate lyase cleaves argininosuccinate into arginine and fumarate; the fumarate can enter the TCA cycle, connecting nitrogen disposal to central energy metabolism (the aspartate-argininosuccinate shunt).",
    choices: [
      { text: "Cleavage of argininosuccinate by argininosuccinate lyase", isCorrect: true },
      { text: "Formation of citrulline by ornithine transcarbamylase" },
      { text: "Hydrolysis of arginine by arginase" },
      { text: "Synthesis of carbamoyl phosphate by CPS I" },
      { text: "Condensation by argininosuccinate synthetase" },
    ],
  },
  {
    stem: "Arginase catalyzes the final urea-cycle step. Its two products are:",
    topic: "Urea Cycle",
    explanation:
      "Arginase hydrolyzes arginine into urea and ornithine; the urea is excreted and the ornithine re-enters the mitochondrion to begin another turn of the cycle.",
    choices: [
      { text: "Urea and ornithine", isCorrect: true },
      { text: "Urea and citrulline" },
      { text: "Urea and arginine" },
      { text: "Ammonia and aspartate" },
      { text: "Fumarate and ornithine" },
    ],
  },
  {
    stem: "Which statements about the compartmentalization and energetics of the urea cycle are correct? Select all that apply.",
    type: "MULTI",
    topic: "Urea Cycle",
    explanation:
      "The first two steps (CPS I, ornithine transcarbamylase) occur in the mitochondrial matrix; the remaining steps are cytosolic. The cycle consumes 4 high-energy phosphate bonds per urea. Ornithine and citrulline are transported across the mitochondrial membrane. It does not occur entirely in the cytosol.",
    choices: [
      { text: "CPS I and ornithine transcarbamylase are mitochondrial", isCorrect: true },
      { text: "The later steps occur in the cytosol", isCorrect: true },
      { text: "Four high-energy phosphate bonds are spent per urea", isCorrect: true },
      { text: "The entire cycle occurs in the cytosol" },
      { text: "No ATP is required" },
    ],
  },
  {
    stem: "N-Acetylglutamate, the obligate activator of CPS I, is synthesized in response to rising levels of which amino acid, signaling a nitrogen load?",
    topic: "Urea Cycle",
    explanation:
      "N-Acetylglutamate synthase makes N-acetylglutamate from glutamate and acetyl-CoA, and its activity rises with arginine and with amino-acid (glutamate) abundance, matching urea-cycle flux to protein intake.",
    choices: [
      { text: "Glutamate (stimulated by arginine)", isCorrect: true },
      { text: "Aspartate" },
      { text: "Alanine" },
      { text: "Glutamine" },
      { text: "Ornithine" },
    ],
  },
  {
    stem: "A male infant becomes lethargic and tachypneic after feeds begin, with markedly elevated ammonia, low BUN, and high urinary orotic acid but no megaloblastic anemia. The most likely enzyme deficiency is:",
    topic: "Urea Cycle Disorders",
    explanation:
      "Ornithine transcarbamylase (OTC) deficiency is X-linked and the most common urea-cycle disorder. Blocked citrulline synthesis diverts carbamoyl phosphate into pyrimidine synthesis, raising orotic acid; there is no megaloblastic anemia (unlike orotic aciduria from UMP synthase deficiency).",
    choices: [
      { text: "Ornithine transcarbamylase deficiency", isCorrect: true },
      { text: "Carbamoyl phosphate synthetase I deficiency" },
      { text: "UMP synthase deficiency" },
      { text: "Argininosuccinate lyase deficiency" },
      { text: "Arginase deficiency" },
      { text: "Adenosine deaminase deficiency" },
    ],
  },
  {
    stem: "Hyperammonemia is neurotoxic largely because excess ammonia:",
    topic: "Urea Cycle Disorders",
    explanation:
      "Ammonia is consumed by combining alpha-ketoglutarate and glutamate to form glutamate and glutamine; depleting alpha-ketoglutarate impairs the TCA cycle in the brain, and glutamine-driven osmotic swelling contributes to cerebral edema.",
    choices: [
      { text: "Depletes alpha-ketoglutarate and impairs the TCA cycle in the brain", isCorrect: true },
      { text: "Directly dissolves myelin" },
      { text: "Blocks the sodium-potassium ATPase irreversibly" },
      { text: "Prevents glucose absorption in the gut" },
      { text: "Oxidizes hemoglobin to methemoglobin" },
    ],
  },
  {
    stem: "Which measures are rational in the acute management of a urea-cycle-disorder crisis with high ammonia? Select all that apply.",
    type: "MULTI",
    topic: "Urea Cycle Disorders",
    explanation:
      "Restricting dietary protein reduces nitrogen load; nitrogen-scavenging drugs (sodium benzoate, sodium phenylbutyrate) provide alternate excretion routes; dialysis removes ammonia rapidly in severe cases; arginine or citrulline may be supplemented depending on the defect. A high-protein diet would worsen the crisis.",
    choices: [
      { text: "Restrict dietary protein", isCorrect: true },
      { text: "Give nitrogen-scavenging agents such as sodium benzoate", isCorrect: true },
      { text: "Use hemodialysis for severe hyperammonemia", isCorrect: true },
      { text: "Increase dietary protein to boost urea output" },
      { text: "Withhold all fluids" },
    ],
  },
  {
    stem: "True or False: In urea-cycle disorders, blood urea nitrogen (BUN) is characteristically low because the cycle cannot convert ammonia to urea.",
    type: "TRUE_FALSE",
    topic: "Urea Cycle Disorders",
    explanation:
      "True. A defective urea cycle makes less urea, so BUN tends to be low while ammonia climbs, the opposite of what renal failure produces.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Skeletal muscle exports amino-group nitrogen safely to the liver mainly as which amino acid, in a pathway that also delivers a gluconeogenic carbon skeleton?",
    topic: "Ammonia Transport & Toxicity",
    explanation:
      "In the glucose-alanine cycle, muscle transaminates pyruvate to alanine, which travels to the liver; there alanine is converted back to pyruvate (for gluconeogenesis) and its nitrogen enters the urea cycle.",
    choices: [
      { text: "Alanine", isCorrect: true },
      { text: "Glutamine" },
      { text: "Aspartate" },
      { text: "Arginine" },
      { text: "Ornithine" },
    ],
  },
  {
    stem: "Most tissues transport ammonia to the liver and kidney in a nontoxic form by attaching it to glutamate, forming:",
    topic: "Ammonia Transport & Toxicity",
    explanation:
      "Glutamine synthetase adds ammonia to glutamate to make glutamine, the principal nontoxic carrier of ammonia in blood; the kidney and liver later release it via glutaminase.",
    choices: [
      { text: "Glutamine", isCorrect: true },
      { text: "Alanine" },
      { text: "Urea" },
      { text: "Uric acid" },
      { text: "Creatinine" },
    ],
  },
  {
    stem: "A patient with cirrhosis develops confusion, asterixis, and a high blood ammonia. Lactulose helps by:",
    topic: "Ammonia Transport & Toxicity",
    explanation:
      "Lactulose is fermented in the colon to acids that trap ammonia as ammonium (NH4+), which is poorly absorbed and excreted in stool; it also speeds transit, lowering ammonia in hepatic encephalopathy.",
    choices: [
      { text: "Acidifying the colon so ammonia is trapped as ammonium and excreted", isCorrect: true },
      { text: "Directly inhibiting glutaminase in the brain" },
      { text: "Stimulating the urea cycle enzymes" },
      { text: "Chelating ammonia in the blood" },
      { text: "Blocking intestinal amino-acid absorption completely" },
    ],
  },
  {
    stem: "A neonate with a musty or mousy body odor, fair skin, and developmental delay if untreated most likely has a deficiency of:",
    topic: "Amino Acid Catabolism & Disorders",
    explanation:
      "Phenylketonuria results from phenylalanine hydroxylase deficiency (or its BH4 cofactor), so phenylalanine accumulates; phenylacetate gives the musty odor and tyrosine becomes essential, explaining hypopigmentation. Treatment restricts phenylalanine.",
    choices: [
      { text: "Phenylalanine hydroxylase", isCorrect: true },
      { text: "Homogentisate oxidase" },
      { text: "Branched-chain alpha-keto acid dehydrogenase" },
      { text: "Cystathionine beta-synthase" },
      { text: "Tyrosinase" },
    ],
  },
  {
    stem: "An asymptomatic adult is noted to have urine that turns black on standing; joint pigmentation appears later in life. The deficient enzyme is:",
    topic: "Amino Acid Catabolism & Disorders",
    explanation:
      "Alkaptonuria is caused by homogentisate oxidase deficiency in tyrosine catabolism; homogentisic acid accumulates and oxidizes to a dark pigment, darkening urine and depositing in connective tissue (ochronosis).",
    choices: [
      { text: "Homogentisate oxidase", isCorrect: true },
      { text: "Phenylalanine hydroxylase" },
      { text: "Cystathionine beta-synthase" },
      { text: "Branched-chain alpha-keto acid dehydrogenase" },
      { text: "Fumarylacetoacetate hydrolase" },
    ],
  },
  {
    stem: "An infant's urine smells like maple syrup, and plasma shows elevated branched-chain amino acids. The defective enzyme complex is:",
    topic: "Amino Acid Catabolism & Disorders",
    explanation:
      "Maple syrup urine disease results from deficient branched-chain alpha-keto acid dehydrogenase, so leucine, isoleucine, and valine and their keto acids accumulate; the thiamine-dependent complex resembles pyruvate dehydrogenase.",
    choices: [
      { text: "Branched-chain alpha-keto acid dehydrogenase", isCorrect: true },
      { text: "Phenylalanine hydroxylase" },
      { text: "Homogentisate oxidase" },
      { text: "Cystathionine beta-synthase" },
      { text: "Propionyl-CoA carboxylase" },
    ],
  },
  {
    stem: "A tall young man with downward lens dislocation, thromboembolism, and intellectual disability has elevated plasma homocysteine and methionine. The most likely deficiency is:",
    topic: "Amino Acid Catabolism & Disorders",
    explanation:
      "Classic homocystinuria stems from cystathionine beta-synthase deficiency, elevating homocysteine and methionine; downward (inferonasal) lens dislocation, vascular thrombosis, and marfanoid habitus are typical, and some cases respond to vitamin B6.",
    choices: [
      { text: "Cystathionine beta-synthase", isCorrect: true },
      { text: "Fibrillin-1 (Marfan)" },
      { text: "Phenylalanine hydroxylase" },
      { text: "Homogentisate oxidase" },
      { text: "Methionine synthase only" },
    ],
  },
  {
    stem: "Which amino acids are classified as purely ketogenic (their carbon skeletons yield only acetyl-CoA or acetoacetate, not glucose)? Select all that apply.",
    type: "MULTI",
    topic: "Amino Acid Catabolism & Disorders",
    explanation:
      "Leucine and lysine are exclusively ketogenic. Isoleucine, phenylalanine, tyrosine, and tryptophan are both glucogenic and ketogenic; alanine and most others are glucogenic. So only leucine and lysine belong in the purely ketogenic group.",
    choices: [
      { text: "Leucine", isCorrect: true },
      { text: "Lysine", isCorrect: true },
      { text: "Alanine" },
      { text: "Methionine" },
      { text: "Isoleucine" },
    ],
  },
  {
    stem: "True or False: In phenylketonuria, tyrosine becomes a conditionally essential amino acid because it can no longer be synthesized from phenylalanine.",
    type: "TRUE_FALSE",
    topic: "Amino Acid Catabolism & Disorders",
    explanation:
      "True. Because phenylalanine hydroxylase normally makes tyrosine, its deficiency means tyrosine must be supplied in the diet, and reduced melanin synthesis contributes to the light pigmentation seen in untreated patients.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The universal methyl-group donor for most methylation reactions, including DNA and neurotransmitter methylation, is:",
    topic: "One-Carbon Metabolism & Folate",
    explanation:
      "S-Adenosylmethionine (SAM), formed from methionine and ATP, donates its methyl group in numerous reactions and becomes S-adenosylhomocysteine, which is hydrolyzed to homocysteine.",
    choices: [
      { text: "S-Adenosylmethionine (SAM)", isCorrect: true },
      { text: "Tetrahydrofolate" },
      { text: "Biotin" },
      { text: "Pyridoxal phosphate" },
      { text: "NADPH" },
    ],
  },
  {
    stem: "Regeneration of methionine from homocysteine by methionine synthase requires which two cofactors?",
    topic: "One-Carbon Metabolism & Folate",
    explanation:
      "Methionine synthase transfers a methyl group from N5-methyltetrahydrofolate to homocysteine using methylcobalamin (vitamin B12); a deficiency of either folate or B12 raises homocysteine and traps folate as the methyl form.",
    choices: [
      { text: "N5-methyltetrahydrofolate and vitamin B12", isCorrect: true },
      { text: "Biotin and CO2" },
      { text: "Thiamine and lipoic acid" },
      { text: "SAM and ATP" },
      { text: "PLP and alpha-ketoglutarate" },
    ],
  },
  {
    stem: "Which laboratory finding pattern helps distinguish vitamin B12 deficiency from folate deficiency?",
    topic: "One-Carbon Metabolism & Folate",
    explanation:
      "Both raise homocysteine and cause megaloblastic anemia, but only B12 deficiency elevates methylmalonic acid, because B12 is also required for methylmalonyl-CoA mutase; folate deficiency leaves methylmalonic acid normal.",
    choices: [
      { text: "Methylmalonic acid is elevated in B12 but not folate deficiency", isCorrect: true },
      { text: "Homocysteine is elevated only in folate deficiency" },
      { text: "Both elevate uric acid selectively" },
      { text: "Only folate deficiency raises methylmalonic acid" },
      { text: "Neither affects the blood smear" },
    ],
  },
  {
    stem: "The rate-limiting, committed step of heme synthesis in the liver combines succinyl-CoA and glycine and is catalyzed by:",
    topic: "Heme Synthesis",
    explanation:
      "ALA synthase (delta-aminolevulinate synthase) condenses succinyl-CoA and glycine to form delta-aminolevulinic acid in the mitochondrion; it is rate-limiting and is feedback-inhibited by heme, and its hepatic form requires pyridoxal phosphate.",
    choices: [
      { text: "ALA synthase", isCorrect: true },
      { text: "Ferrochelatase" },
      { text: "Porphobilinogen deaminase" },
      { text: "ALA dehydratase" },
      { text: "Heme oxygenase" },
    ],
  },
  {
    stem: "A patient presents with recurrent acute attacks of severe abdominal pain, tachycardia, and neuropsychiatric symptoms, with dark urine, but no photosensitivity. Elevated urinary porphobilinogen suggests:",
    topic: "Heme Synthesis",
    explanation:
      "Acute intermittent porphyria results from porphobilinogen deaminase deficiency; attacks feature abdominal pain, autonomic and neuropsychiatric signs, and elevated ALA and porphobilinogen, but no skin photosensitivity because the accumulating precursors are not photoreactive porphyrins.",
    choices: [
      { text: "Acute intermittent porphyria", isCorrect: true },
      { text: "Porphyria cutanea tarda" },
      { text: "Lead poisoning alone" },
      { text: "Gilbert syndrome" },
      { text: "Iron-deficiency anemia" },
    ],
  },
  {
    stem: "Lead poisoning causes anemia partly by inhibiting two enzymes of heme synthesis. Which enzymes are they?",
    topic: "Heme Synthesis",
    explanation:
      "Lead inhibits ALA dehydratase and ferrochelatase, so ALA accumulates and iron cannot be inserted into protoporphyrin; free protoporphyrin and, classically, basophilic stippling result.",
    choices: [
      { text: "ALA dehydratase and ferrochelatase", isCorrect: true },
      { text: "ALA synthase and heme oxygenase" },
      { text: "Porphobilinogen deaminase and uroporphyrinogen decarboxylase" },
      { text: "Biliverdin reductase and UDP-glucuronosyltransferase" },
      { text: "Xanthine oxidase and HGPRT" },
    ],
  },
  {
    stem: "Which features fit porphyria cutanea tarda? Select all that apply.",
    type: "MULTI",
    topic: "Heme Synthesis",
    explanation:
      "Porphyria cutanea tarda, the most common porphyria, is due to uroporphyrinogen decarboxylase deficiency; it causes blistering photosensitivity on sun-exposed skin, tea-colored urine with elevated uroporphyrins, and is often linked to hepatitis C or alcohol. It does not present with the acute neurovisceral attacks of AIP.",
    choices: [
      { text: "Uroporphyrinogen decarboxylase deficiency", isCorrect: true },
      { text: "Blistering photosensitivity of sun-exposed skin", isCorrect: true },
      { text: "Tea-colored urine with elevated uroporphyrins", isCorrect: true },
      { text: "Recurrent acute neurovisceral attacks without skin findings" },
      { text: "Deficiency of ferrochelatase as the primary defect" },
    ],
  },
  {
    stem: "Senescent red cells are degraded and heme is converted to biliverdin and then bilirubin. The initial ring-opening step releasing carbon monoxide is catalyzed by:",
    topic: "Heme Degradation",
    explanation:
      "Heme oxygenase opens the porphyrin ring, producing biliverdin, releasing iron, and generating carbon monoxide; biliverdin reductase then reduces biliverdin to bilirubin. This is the source of endogenous CO.",
    choices: [
      { text: "Heme oxygenase", isCorrect: true },
      { text: "Biliverdin reductase" },
      { text: "UDP-glucuronosyltransferase" },
      { text: "Ferrochelatase" },
      { text: "ALA synthase" },
    ],
  },
  {
    stem: "Unconjugated bilirubin is made water-soluble for excretion in bile by conjugation with glucuronic acid. The hepatic enzyme responsible is:",
    topic: "Heme Degradation",
    explanation:
      "UDP-glucuronosyltransferase conjugates bilirubin with glucuronate in hepatocytes, forming water-soluble (direct) bilirubin; deficiency underlies Gilbert and Crigler-Najjar syndromes and contributes to neonatal jaundice.",
    choices: [
      { text: "UDP-glucuronosyltransferase", isCorrect: true },
      { text: "Heme oxygenase" },
      { text: "Biliverdin reductase" },
      { text: "Glucose-6-phosphatase" },
      { text: "Bilirubin oxidase" },
    ],
  },
  {
    stem: "A well-appearing young adult has mild, fluctuating unconjugated hyperbilirubinemia that worsens with fasting or illness, with otherwise normal liver tests. The most likely diagnosis is:",
    topic: "Heme Degradation",
    explanation:
      "Gilbert syndrome is a benign, common condition of reduced UDP-glucuronosyltransferase activity, producing mild unconjugated hyperbilirubinemia that rises with stress, fasting, or illness and requires no treatment.",
    choices: [
      { text: "Gilbert syndrome", isCorrect: true },
      { text: "Crigler-Najjar type I" },
      { text: "Dubin-Johnson syndrome" },
      { text: "Biliary obstruction" },
      { text: "Hemolytic anemia with hepatic failure" },
    ],
  },
  {
    stem: "A jaundiced patient has this panel:\n\n| Test | Result | Reference |\n|---|---|---|\n| Total bilirubin | 6.2 mg/dL | 0.1-1.2 |\n| Direct (conjugated) | 4.8 mg/dL | 0.0-0.3 |\n| ALP | 590 U/L | 44-147 |\n| ALT | 60 U/L | 7-56 |\n\nThe pattern indicates:",
    topic: "Heme Degradation",
    explanation:
      "A predominantly conjugated (direct) hyperbilirubinemia with a disproportionately high alkaline phosphatase points to cholestasis or biliary obstruction, in which conjugated bilirubin cannot reach the gut and refluxes into blood.",
    choices: [
      { text: "Conjugated hyperbilirubinemia from cholestasis/obstruction", isCorrect: true },
      { text: "Unconjugated hyperbilirubinemia from hemolysis" },
      { text: "Gilbert syndrome" },
      { text: "Normal neonatal physiology" },
      { text: "Isolated hepatocellular necrosis" },
    ],
  },
  {
    stem: "Which statements about neonatal physiologic jaundice are correct? Select all that apply.",
    type: "MULTI",
    topic: "Heme Degradation",
    explanation:
      "Newborns have immature UDP-glucuronosyltransferase and a high red-cell turnover, producing unconjugated hyperbilirubinemia; severe cases risk kernicterus from bilirubin crossing the immature blood-brain barrier, and phototherapy isomerizes bilirubin to a water-excretable form. It is predominantly unconjugated, not conjugated.",
    choices: [
      { text: "It reflects immature UDP-glucuronosyltransferase activity", isCorrect: true },
      { text: "The bilirubin rise is mainly unconjugated", isCorrect: true },
      { text: "Phototherapy converts bilirubin to a water-excretable isomer", isCorrect: true },
      { text: "It is mainly a conjugated hyperbilirubinemia" },
      { text: "Kernicterus is caused by conjugated bilirubin in the brain" },
    ],
  },
  {
    stem: "De novo purine synthesis builds the purine ring stepwise on which activated sugar-phosphate, the committed regulatory intermediate?",
    topic: "Purine Synthesis & Salvage",
    explanation:
      "5-Phosphoribosyl-1-pyrophosphate (PRPP) is the activated ribose donor; glutamine-PRPP amidotransferase adds the first nitrogen in the committed, regulated step, ultimately building inosine monophosphate (IMP).",
    choices: [
      { text: "Phosphoribosyl pyrophosphate (PRPP)", isCorrect: true },
      { text: "Glucose-6-phosphate" },
      { text: "Fructose-1,6-bisphosphate" },
      { text: "Orotate" },
      { text: "Carbamoyl phosphate" },
    ],
  },
  {
    stem: "A boy has intellectual disability, dystonia, hyperuricemia, and compulsive self-mutilation. The deficient salvage enzyme is:",
    topic: "Purine Synthesis & Salvage",
    explanation:
      "Lesch-Nyhan syndrome is X-linked HGPRT deficiency; failure to salvage hypoxanthine and guanine raises uric acid and PRPP-driven de novo synthesis, producing hyperuricemia and the characteristic neurologic and self-injurious features.",
    choices: [
      { text: "Hypoxanthine-guanine phosphoribosyltransferase (HGPRT)", isCorrect: true },
      { text: "Adenosine deaminase" },
      { text: "Xanthine oxidase" },
      { text: "Adenine phosphoribosyltransferase" },
      { text: "PRPP synthetase" },
    ],
  },
  {
    stem: "Which nucleotides or molecules feed back to inhibit early steps of de novo purine synthesis? Select all that apply.",
    type: "MULTI",
    topic: "Purine Synthesis & Salvage",
    explanation:
      "AMP, GMP, and IMP inhibit glutamine-PRPP amidotransferase, matching purine output to demand, while high PRPP activates the pathway. Uric acid, the degradation end product, does not regulate the committed step.",
    choices: [
      { text: "AMP", isCorrect: true },
      { text: "GMP", isCorrect: true },
      { text: "IMP", isCorrect: true },
      { text: "PRPP (it activates instead)" },
      { text: "Uric acid" },
    ],
  },
  {
    stem: "Unlike purine synthesis, the pyrimidine ring is assembled first and then attached to ribose phosphate. Its synthesis begins with carbamoyl phosphate made by which cytosolic enzyme?",
    topic: "Pyrimidine Synthesis",
    explanation:
      "Pyrimidine synthesis starts with cytosolic carbamoyl phosphate synthetase II (activated by ATP and PRPP), distinct from mitochondrial CPS I of the urea cycle; the ring is built through orotate to UMP.",
    choices: [
      { text: "Carbamoyl phosphate synthetase II", isCorrect: true },
      { text: "Carbamoyl phosphate synthetase I" },
      { text: "HGPRT" },
      { text: "Xanthine oxidase" },
      { text: "Ornithine transcarbamylase" },
    ],
  },
  {
    stem: "A child has failure to thrive and a megaloblastic anemia unresponsive to B12 or folate, plus orotic acid in the urine. The defect is in:",
    topic: "Pyrimidine Synthesis",
    explanation:
      "Hereditary orotic aciduria results from UMP synthase deficiency, blocking conversion of orotate to UMP; pyrimidine deficiency causes a megaloblastic anemia not corrected by B12 or folate, and treatment with uridine bypasses the block. (Contrast OTC deficiency, which raises orotate but also raises ammonia and lacks megaloblastic anemia.)",
    choices: [
      { text: "UMP synthase", isCorrect: true },
      { text: "Ornithine transcarbamylase" },
      { text: "HGPRT" },
      { text: "Adenosine deaminase" },
      { text: "Dihydrofolate reductase" },
    ],
  },
  {
    stem: "The final enzyme of purine degradation in humans, which converts hypoxanthine and xanthine to uric acid, is:",
    topic: "Nucleotide Degradation & Gout",
    explanation:
      "Xanthine oxidase oxidizes hypoxanthine to xanthine and xanthine to uric acid, the end product humans excrete; it is the target of allopurinol and febuxostat in gout.",
    choices: [
      { text: "Xanthine oxidase", isCorrect: true },
      { text: "HGPRT" },
      { text: "Adenosine deaminase" },
      { text: "Uricase" },
      { text: "PRPP synthetase" },
    ],
  },
  {
    stem: "A man has an acutely painful, swollen great-toe joint; aspiration shows negatively birefringent needle-shaped crystals. Which agents lower uric acid by inhibiting its production? Select all that apply.",
    type: "MULTI",
    topic: "Nucleotide Degradation & Gout",
    explanation:
      "Allopurinol and febuxostat inhibit xanthine oxidase, reducing uric acid synthesis. Probenecid is uricosuric (increases excretion) rather than a production inhibitor, and colchicine treats inflammation without lowering urate; NSAIDs likewise treat the attack, not the urate level.",
    choices: [
      { text: "Allopurinol", isCorrect: true },
      { text: "Febuxostat", isCorrect: true },
      { text: "Probenecid" },
      { text: "Colchicine" },
      { text: "Indomethacin" },
    ],
  },
  {
    stem: "An infant with severe combined immunodeficiency (absent T and B cells) is found to have a deficiency of adenosine deaminase. The immunodeficiency arises because:",
    topic: "Nucleotide Degradation & Gout",
    explanation:
      "Adenosine deaminase deficiency causes accumulation of deoxyadenosine and dATP, which inhibits ribonucleotide reductase and is especially toxic to lymphocytes, producing an autosomal-recessive form of SCID.",
    choices: [
      { text: "Deoxyadenosine/dATP accumulates and is toxic to lymphocytes", isCorrect: true },
      { text: "Uric acid crystallizes in the thymus" },
      { text: "Purine salvage is overactive" },
      { text: "Heme synthesis fails in marrow" },
      { text: "Ammonia poisons T cells directly" },
    ],
  },
  {
    stem: "True or False: Because birds and reptiles excrete nitrogen mainly as uric acid rather than urea, humans who overproduce uric acid can develop gout, reflecting the human end point of purine catabolism.",
    type: "TRUE_FALSE",
    topic: "Nucleotide Degradation & Gout",
    explanation:
      "True. Humans lack the uricase that many other animals use to degrade uric acid further, so uric acid is the human end product of purine breakdown and can crystallize in joints as gout when overproduced or underexcreted.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "A previously well toddler becomes comatose during a viral illness; labs show ammonia 320 micromol/L, low BUN, respiratory alkalosis, and high urinary orotic acid without anemia. The single best explanation is:",
    topic: "Clinical Application",
    explanation:
      "This is the classic picture of ornithine transcarbamylase deficiency unmasked by catabolic stress: hyperammonemia with low BUN, early respiratory alkalosis from ammonia-driven hyperventilation, and elevated orotic acid without megaloblastic anemia.",
    choices: [
      { text: "Ornithine transcarbamylase deficiency", isCorrect: true },
      { text: "Hereditary orotic aciduria (UMP synthase deficiency)" },
      { text: "Medium-chain acyl-CoA dehydrogenase deficiency" },
      { text: "Lesch-Nyhan syndrome" },
      { text: "Acute intermittent porphyria" },
    ],
  },
  {
    stem: "A vegan patient with numbness and a megaloblastic anemia has elevated homocysteine AND elevated methylmalonic acid. The deficiency and its biochemical basis are:",
    topic: "Clinical Application",
    explanation:
      "Both markers rising indicates vitamin B12 deficiency: B12 is needed by methionine synthase (so homocysteine rises) and by methylmalonyl-CoA mutase (so methylmalonic acid rises). Folate deficiency would raise homocysteine but not methylmalonic acid.",
    choices: [
      { text: "Vitamin B12 deficiency affecting methionine synthase and methylmalonyl-CoA mutase", isCorrect: true },
      { text: "Folate deficiency" },
      { text: "Vitamin B6 deficiency" },
      { text: "Iron deficiency" },
      { text: "Copper deficiency" },
    ],
  },
  {
    stem: "A patient started on a chemotherapy regimen that rapidly lyses tumor cells develops hyperuricemia, hyperkalemia, and acute kidney injury. The uric acid rise reflects:",
    topic: "Clinical Application",
    explanation:
      "Tumor lysis syndrome releases large amounts of nucleic acids, and purine catabolism through xanthine oxidase floods the blood with uric acid; rasburicase (recombinant uricase) or allopurinol is used to prevent urate nephropathy.",
    choices: [
      { text: "Massive purine turnover degraded to uric acid", isCorrect: true },
      { text: "Impaired urea-cycle function" },
      { text: "Excess heme oxygenase activity" },
      { text: "Folate trapping" },
      { text: "Deficient PRPP synthesis" },
    ],
  },
  {
    stem: "In a transamination reaction, the amino acid donates its amino group and is itself converted to:",
    topic: "Amino Acid Nitrogen Removal",
    explanation:
      "Losing its amino group turns the amino acid into the corresponding alpha-keto acid; for example alanine becomes pyruvate and aspartate becomes oxaloacetate, feeding carbon skeletons into central metabolism.",
    choices: [
      { text: "The corresponding alpha-keto acid", isCorrect: true },
      { text: "Urea" },
      { text: "A fatty acid" },
      { text: "Glucose directly" },
      { text: "Ammonia gas" },
    ],
  },
  {
    stem: "An elevated AST-to-ALT ratio greater than 2, with only modestly elevated transaminases, classically suggests:",
    topic: "Amino Acid Nitrogen Removal",
    explanation:
      "An AST:ALT ratio above 2 is characteristic of alcoholic liver disease, partly because alcohol depletes pyridoxal phosphate, which ALT needs more than AST, lowering ALT relatively.",
    choices: [
      { text: "Alcoholic liver disease", isCorrect: true },
      { text: "Acute viral hepatitis A" },
      { text: "Biliary obstruction" },
      { text: "Acetaminophen toxicity in the first hours" },
    ],
  },
  {
    stem: "How many high-energy phosphate bonds are consumed to synthesize one molecule of urea?",
    topic: "Urea Cycle",
    explanation:
      "Four high-energy phosphate bonds are used: two ATP to make carbamoyl phosphate and one ATP cleaved to AMP plus pyrophosphate (equivalent to two bonds) in the argininosuccinate synthetase step.",
    choices: [
      { text: "Four", isCorrect: true },
      { text: "One" },
      { text: "Two" },
      { text: "Six" },
      { text: "Zero" },
    ],
  },
  {
    stem: "The aspartate that donates the second urea nitrogen is regenerated by linking to the TCA cycle. The fumarate released is converted, via malate and oxaloacetate, back to aspartate by:",
    topic: "Urea Cycle",
    explanation:
      "Fumarate is hydrated to malate, oxidized to oxaloacetate, then transaminated back to aspartate, tying urea synthesis to the TCA cycle and to the aspartate-argininosuccinate shunt.",
    choices: [
      { text: "Transamination of oxaloacetate", isCorrect: true },
      { text: "Arginase" },
      { text: "Direct reduction of fumarate to aspartate" },
      { text: "Glutamine synthetase" },
      { text: "Carbamoyl phosphate synthetase I" },
    ],
  },
  {
    stem: "Which enzyme forms citrulline by combining ornithine with carbamoyl phosphate inside the mitochondrion?",
    topic: "Urea Cycle",
    explanation:
      "Ornithine transcarbamylase joins carbamoyl phosphate to ornithine to make citrulline, which is then exported to the cytosol; its deficiency is the most common urea-cycle disorder.",
    choices: [
      { text: "Ornithine transcarbamylase", isCorrect: true },
      { text: "Argininosuccinate synthetase" },
      { text: "Argininosuccinate lyase" },
      { text: "Arginase" },
      { text: "CPS I" },
    ],
  },
  {
    stem: "True or False: Carbamoyl phosphate synthetase I of the urea cycle uses free ammonia, whereas carbamoyl phosphate synthetase II of pyrimidine synthesis uses the amide nitrogen of glutamine.",
    type: "TRUE_FALSE",
    topic: "Urea Cycle",
    explanation:
      "True. CPS I (mitochondrial, urea cycle) fixes free ammonia and needs N-acetylglutamate, while CPS II (cytosolic, pyrimidine synthesis) uses glutamine as its nitrogen source. This distinction is a classic exam point.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Which laboratory clues point toward a urea-cycle defect rather than an organic acidemia in a hyperammonemic infant? Select all that apply.",
    type: "MULTI",
    topic: "Urea Cycle Disorders",
    explanation:
      "Urea-cycle defects typically show hyperammonemia with a respiratory alkalosis, low BUN, and a normal anion gap (no ketoacidosis early), whereas organic acidemias produce a high-anion-gap metabolic acidosis with ketosis. Elevated orotic acid suggests a specific block at ornithine transcarbamylase.",
    choices: [
      { text: "Respiratory alkalosis early in the course", isCorrect: true },
      { text: "Low blood urea nitrogen", isCorrect: true },
      { text: "Normal anion gap without ketoacidosis", isCorrect: true },
      { text: "High-anion-gap metabolic acidosis with ketosis" },
      { text: "Markedly low ammonia" },
    ],
  },
  {
    stem: "Citrulline levels help localize urea-cycle defects. Very high citrulline with hyperammonemia most suggests a block at:",
    topic: "Urea Cycle Disorders",
    explanation:
      "Citrullinemia results from argininosuccinate synthetase deficiency: citrulline cannot be converted to argininosuccinate, so it accumulates markedly. Low citrulline instead suggests a proximal block (CPS I or OTC).",
    choices: [
      { text: "Argininosuccinate synthetase", isCorrect: true },
      { text: "Ornithine transcarbamylase" },
      { text: "Carbamoyl phosphate synthetase I" },
      { text: "Arginase" },
      { text: "N-acetylglutamate synthase" },
    ],
  },
  {
    stem: "In the glucose-alanine cycle, the pyruvate produced in the liver from alanine is used mainly to:",
    topic: "Ammonia Transport & Toxicity",
    explanation:
      "Hepatic pyruvate from alanine feeds gluconeogenesis, exporting glucose back to muscle, while the alanine-derived nitrogen enters the urea cycle. The cycle thus disposes of nitrogen and recycles carbon for fuel.",
    choices: [
      { text: "Make glucose by gluconeogenesis", isCorrect: true },
      { text: "Form ketone bodies" },
      { text: "Synthesize cholesterol" },
      { text: "Enter beta-oxidation" },
      { text: "Build purine rings" },
    ],
  },
  {
    stem: "Which amino acids are the two principal nontoxic carriers of ammonia between tissues and the liver or kidney? Select all that apply.",
    type: "MULTI",
    topic: "Ammonia Transport & Toxicity",
    explanation:
      "Glutamine (via glutamine synthetase) is the main blood ammonia carrier for most tissues, and alanine (via the glucose-alanine cycle) carries nitrogen from muscle. Arginine, ornithine, and lysine are not the principal inter-organ ammonia carriers.",
    choices: [
      { text: "Glutamine", isCorrect: true },
      { text: "Alanine", isCorrect: true },
      { text: "Arginine" },
      { text: "Ornithine" },
      { text: "Lysine" },
    ],
  },
  {
    stem: "The kidney releases ammonia from glutamine to buffer urinary acid. The enzyme that liberates this ammonia is:",
    topic: "Ammonia Transport & Toxicity",
    explanation:
      "Renal glutaminase hydrolyzes glutamine to glutamate and ammonia; the ammonia is secreted as ammonium to buffer protons, an adaptation that increases during chronic metabolic acidosis.",
    choices: [
      { text: "Glutaminase", isCorrect: true },
      { text: "Glutamine synthetase" },
      { text: "Arginase" },
      { text: "Carbonic anhydrase" },
      { text: "Xanthine oxidase" },
    ],
  },
  {
    stem: "A patient with untreated classic homocystinuria may benefit from high-dose vitamin B6 because pyridoxal phosphate is the coenzyme for:",
    topic: "Amino Acid Catabolism & Disorders",
    explanation:
      "Cystathionine beta-synthase uses pyridoxal phosphate; some mutations respond to pharmacologic B6, lowering homocysteine. This links a vitamin cofactor directly to a treatable inborn error.",
    choices: [
      { text: "Cystathionine beta-synthase", isCorrect: true },
      { text: "Homogentisate oxidase" },
      { text: "Phenylalanine hydroxylase" },
      { text: "Branched-chain alpha-keto acid dehydrogenase" },
      { text: "Arginase" },
    ],
  },
  {
    stem: "Which amino acids are strictly glucogenic, contributing only to gluconeogenesis? Select all that apply.",
    type: "MULTI",
    topic: "Amino Acid Catabolism & Disorders",
    explanation:
      "Alanine, methionine, and valine are glucogenic only. Leucine and lysine are purely ketogenic, so they do not belong in the glucogenic-only group.",
    choices: [
      { text: "Alanine", isCorrect: true },
      { text: "Methionine", isCorrect: true },
      { text: "Valine", isCorrect: true },
      { text: "Leucine" },
      { text: "Lysine" },
    ],
  },
  {
    stem: "Tetrahydrobiopterin (BH4) deficiency can cause a hyperphenylalaninemia resembling PKU. BH4 is required as a cofactor for:",
    topic: "Amino Acid Catabolism & Disorders",
    explanation:
      "BH4 is the cofactor for phenylalanine, tyrosine, and tryptophan hydroxylases; its deficiency raises phenylalanine and also impairs neurotransmitter (dopamine, serotonin) synthesis, so it is treated differently from classic PKU.",
    choices: [
      { text: "Phenylalanine hydroxylase and the aromatic amino-acid hydroxylases", isCorrect: true },
      { text: "Homogentisate oxidase" },
      { text: "Cystathionine beta-synthase" },
      { text: "Xanthine oxidase" },
      { text: "ALA synthase" },
    ],
  },
  {
    stem: "A newborn screen flags elevated phenylalanine. Dietary management of classic PKU centers on:",
    topic: "Amino Acid Catabolism & Disorders",
    explanation:
      "Treatment restricts dietary phenylalanine (limiting protein and avoiding aspartame) while supplying tyrosine, preventing the intellectual disability of untreated disease. Lifelong control, especially in pregnancy, is important.",
    choices: [
      { text: "Restricting phenylalanine and supplementing tyrosine", isCorrect: true },
      { text: "High-protein diet with extra phenylalanine" },
      { text: "Avoiding all carbohydrates" },
      { text: "Giving large doses of vitamin C" },
      { text: "Restricting branched-chain amino acids only" },
    ],
  },
  {
    stem: "Folate is required to regenerate which nucleotide precursor, explaining why folate deficiency and methotrexate impair DNA synthesis?",
    topic: "One-Carbon Metabolism & Folate",
    explanation:
      "Thymidylate synthase uses N5,N10-methylene-tetrahydrofolate to make dTMP; folate deficiency or dihydrofolate reductase inhibition (methotrexate, trimethoprim) blocks dTMP and thus DNA synthesis, hitting rapidly dividing cells.",
    choices: [
      { text: "dTMP (thymidylate)", isCorrect: true },
      { text: "Uric acid" },
      { text: "Heme" },
      { text: "Cholesterol" },
      { text: "Creatine" },
    ],
  },
  {
    stem: "Trapping of folate as N5-methyltetrahydrofolate during vitamin B12 deficiency worsens the anemia. This methyl-folate trap occurs because:",
    topic: "One-Carbon Metabolism & Folate",
    explanation:
      "Without B12, methionine synthase cannot use N5-methyl-THF, so folate is stuck in that form and unavailable for dTMP synthesis; this functional folate deficiency explains the megaloblastic anemia of B12 deficiency.",
    choices: [
      { text: "Methionine synthase cannot release folate from its methyl form", isCorrect: true },
      { text: "Folate is oxidized to uric acid" },
      { text: "B12 destroys folate directly" },
      { text: "Thymidylate synthase makes excess folate" },
      { text: "Homocysteine is depleted" },
    ],
  },
  {
    stem: "True or False: Adequate folate around conception reduces the risk of neural tube defects, a public-health basis for food fortification.",
    type: "TRUE_FALSE",
    topic: "One-Carbon Metabolism & Folate",
    explanation:
      "True. Folate supports the rapid DNA synthesis of early development, and periconceptional folate lowers neural tube defect risk, which is why many countries fortify grains with folic acid.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Hepatic ALA synthase is feedback-inhibited by the pathway's end product. Drugs that induce cytochrome P450 can precipitate porphyria attacks because they:",
    topic: "Heme Synthesis",
    explanation:
      "By consuming heme to build P450 enzymes, inducing drugs lower the heme that normally represses ALA synthase, so ALA synthase rises and precursors accumulate, triggering attacks in acute intermittent porphyria.",
    choices: [
      { text: "Deplete heme and de-repress ALA synthase", isCorrect: true },
      { text: "Directly activate ferrochelatase" },
      { text: "Inhibit xanthine oxidase" },
      { text: "Increase bilirubin conjugation" },
      { text: "Block glutaminase" },
    ],
  },
  {
    stem: "Which statements about acute intermittent porphyria are correct? Select all that apply.",
    type: "MULTI",
    topic: "Heme Synthesis",
    explanation:
      "Acute intermittent porphyria features neurovisceral attacks (abdominal pain, autonomic and psychiatric symptoms) without photosensitivity, elevated urinary ALA and porphobilinogen, and precipitation by P450-inducing drugs, fasting, or hormones; giving heme (hemin) or glucose suppresses ALA synthase. It is not primarily a photosensitive skin disorder.",
    choices: [
      { text: "Attacks include abdominal pain and neuropsychiatric symptoms", isCorrect: true },
      { text: "Urinary ALA and porphobilinogen are elevated", isCorrect: true },
      { text: "Hemin or glucose can abort attacks by suppressing ALA synthase", isCorrect: true },
      { text: "Blistering photosensitivity is the dominant feature" },
      { text: "It is caused by ferrochelatase deficiency" },
    ],
  },
  {
    stem: "A child with anemia has basophilic stippling on the blood smear and a history of living in an old, deteriorating house. The most likely cause is:",
    topic: "Heme Synthesis",
    explanation:
      "Lead poisoning inhibits ALA dehydratase and ferrochelatase, causing microcytic anemia with basophilic stippling; old lead-based paint is a classic exposure. Elevated blood lead and free erythrocyte protoporphyrin confirm it.",
    choices: [
      { text: "Lead poisoning", isCorrect: true },
      { text: "Acute intermittent porphyria" },
      { text: "Iron overload" },
      { text: "Gilbert syndrome" },
      { text: "Vitamin B12 deficiency" },
    ],
  },
  {
    stem: "After conjugation, bilirubin is excreted in bile and converted by gut bacteria to urobilinogen; the brown color of stool comes largely from:",
    topic: "Heme Degradation",
    explanation:
      "Gut bacteria reduce bilirubin to urobilinogen, which is oxidized to stercobilin (brown, in stool) and urobilin (yellow, in urine); some urobilinogen is reabsorbed and re-excreted. Pale stools suggest impaired bile flow.",
    choices: [
      { text: "Stercobilin", isCorrect: true },
      { text: "Biliverdin" },
      { text: "Unconjugated bilirubin" },
      { text: "Protoporphyrin" },
      { text: "Hemosiderin" },
    ],
  },
  {
    stem: "A patient with brisk hemolysis develops jaundice. The expected pattern is a rise chiefly in:",
    topic: "Heme Degradation",
    explanation:
      "Hemolysis floods the liver with heme-derived bilirubin faster than it can be conjugated, so unconjugated (indirect) bilirubin rises; urine bilirubin stays negative because unconjugated bilirubin is albumin-bound and not filtered.",
    choices: [
      { text: "Unconjugated (indirect) bilirubin", isCorrect: true },
      { text: "Conjugated (direct) bilirubin" },
      { text: "Alkaline phosphatase" },
      { text: "Urine bilirubin" },
      { text: "Conjugated bilirubin with pale stools" },
    ],
  },
  {
    stem: "Crigler-Najjar syndrome type I is more severe than Gilbert syndrome because it involves:",
    topic: "Heme Degradation",
    explanation:
      "Crigler-Najjar type I is a near-total absence of UDP-glucuronosyltransferase, causing severe unconjugated hyperbilirubinemia and kernicterus risk from birth, whereas Gilbert syndrome is a mild partial reduction that is benign.",
    choices: [
      { text: "Near-complete absence of UDP-glucuronosyltransferase", isCorrect: true },
      { text: "Blocked bile ducts" },
      { text: "Excess hemolysis alone" },
      { text: "Deficient heme oxygenase" },
      { text: "A defect in biliverdin reductase" },
    ],
  },
  {
    stem: "Which molecules donate atoms to the purine ring during de novo synthesis? Select all that apply.",
    type: "MULTI",
    topic: "Purine Synthesis & Salvage",
    explanation:
      "The purine ring is built from glycine, aspartate, glutamine (two nitrogens), CO2, and one-carbon units from tetrahydrofolate. Ornithine is a urea-cycle intermediate and contributes no atoms to the purine ring.",
    choices: [
      { text: "Glycine", isCorrect: true },
      { text: "Aspartate", isCorrect: true },
      { text: "Glutamine", isCorrect: true },
      { text: "Tetrahydrofolate one-carbon units", isCorrect: true },
      { text: "Ornithine" },
    ],
  },
  {
    stem: "Ribonucleotide reductase converts ribonucleotides to deoxyribonucleotides for DNA synthesis. In adenosine deaminase deficiency, this enzyme is inhibited by accumulating:",
    topic: "Purine Synthesis & Salvage",
    explanation:
      "dATP accumulates in ADA deficiency and allosterically inhibits ribonucleotide reductase, starving cells of the other dNTPs; lymphocytes are especially sensitive, producing SCID.",
    choices: [
      { text: "dATP", isCorrect: true },
      { text: "Uric acid" },
      { text: "PRPP" },
      { text: "Hypoxanthine" },
      { text: "Orotate" },
    ],
  },
  {
    stem: "The salvage enzyme adenine phosphoribosyltransferase (APRT) recycles adenine using which activated donor also used by HGPRT?",
    topic: "Purine Synthesis & Salvage",
    explanation:
      "Both HGPRT and APRT attach free purine bases to PRPP to regenerate nucleotides, conserving energy compared with de novo synthesis. Loss of HGPRT causes Lesch-Nyhan; APRT defects cause a stone disease.",
    choices: [
      { text: "PRPP (phosphoribosyl pyrophosphate)", isCorrect: true },
      { text: "SAM" },
      { text: "ATP alone" },
      { text: "Carbamoyl phosphate" },
      { text: "Tetrahydrofolate" },
    ],
  },
  {
    stem: "Which anticancer or antimicrobial agents act by blocking thymidylate (dTMP) or folate-dependent nucleotide synthesis? Select all that apply.",
    type: "MULTI",
    topic: "Pyrimidine Synthesis",
    explanation:
      "5-Fluorouracil inhibits thymidylate synthase; methotrexate and trimethoprim inhibit dihydrofolate reductase (human and bacterial, respectively). Allopurinol acts on xanthine oxidase in purine degradation, not on dTMP synthesis.",
    choices: [
      { text: "5-Fluorouracil", isCorrect: true },
      { text: "Methotrexate", isCorrect: true },
      { text: "Trimethoprim", isCorrect: true },
      { text: "Allopurinol" },
      { text: "Colchicine" },
    ],
  },
  {
    stem: "Orotic acid can be elevated in two very different disorders. Which distinguishes ornithine transcarbamylase deficiency from hereditary orotic aciduria?",
    topic: "Pyrimidine Synthesis",
    explanation:
      "Both raise orotic acid, but OTC deficiency also causes hyperammonemia (a urea-cycle problem) without megaloblastic anemia, whereas hereditary orotic aciduria (UMP synthase deficiency) causes megaloblastic anemia with normal ammonia.",
    choices: [
      { text: "Hyperammonemia occurs in OTC deficiency but not in hereditary orotic aciduria", isCorrect: true },
      { text: "Only hereditary orotic aciduria raises ammonia" },
      { text: "Both cause identical megaloblastic anemia" },
      { text: "Neither elevates orotic acid" },
      { text: "OTC deficiency causes megaloblastic anemia" },
    ],
  },
  {
    stem: "Colchicine relieves an acute gout attack primarily by:",
    topic: "Nucleotide Degradation & Gout",
    explanation:
      "Colchicine inhibits microtubule polymerization in neutrophils, blunting the inflammatory response to urate crystals; it does not lower uric acid, distinguishing it from allopurinol and probenecid.",
    choices: [
      { text: "Inhibiting neutrophil microtubules and inflammation", isCorrect: true },
      { text: "Inhibiting xanthine oxidase" },
      { text: "Increasing renal uric-acid excretion" },
      { text: "Degrading uric acid to allantoin" },
      { text: "Blocking purine salvage" },
    ],
  },
  {
    stem: "Rasburicase treats severe hyperuricemia (e.g., tumor lysis) by a mechanism unavailable to humans naturally:",
    topic: "Nucleotide Degradation & Gout",
    explanation:
      "Rasburicase is a recombinant urate oxidase (uricase) that converts uric acid to soluble allantoin; humans lack functional uricase, so this provides a degradation route the body cannot otherwise use.",
    choices: [
      { text: "Enzymatically degrading uric acid to soluble allantoin", isCorrect: true },
      { text: "Inhibiting xanthine oxidase" },
      { text: "Blocking tubular reabsorption of urate" },
      { text: "Inhibiting purine synthesis" },
      { text: "Chelating calcium urate" },
    ],
  },
  {
    stem: "A patient on allopurinol should have concurrent 6-mercaptopurine or azathioprine doses reduced because:",
    topic: "Nucleotide Degradation & Gout",
    explanation:
      "Allopurinol inhibits xanthine oxidase, which also inactivates 6-mercaptopurine/azathioprine; without dose reduction their levels rise, risking severe toxicity. This is a classic clinically important drug interaction.",
    choices: [
      { text: "Xanthine oxidase inhibition slows their breakdown, raising toxicity", isCorrect: true },
      { text: "Allopurinol speeds their metabolism" },
      { text: "They compete for renal secretion only" },
      { text: "Allopurinol activates them into toxic metabolites via HGPRT" },
      { text: "There is no meaningful interaction" },
    ],
  },
  {
    stem: "A 6-month-old has hepatosplenomegaly, hypoglycemia after fasting, and this newborn-screen-derived amino-acid pattern is not the issue; instead recurrent hyperammonemia after high-protein meals with elevated glutamine and low citrulline points to a defect at which step?",
    topic: "Clinical Application",
    explanation:
      "Low citrulline with hyperammonemia localizes the block proximal to citrulline synthesis, at carbamoyl phosphate synthetase I or ornithine transcarbamylase; elevated glutamine reflects ammonia buffered onto glutamate. High citrulline would instead indicate a distal block.",
    choices: [
      { text: "A proximal urea-cycle step (CPS I or OTC)", isCorrect: true },
      { text: "Argininosuccinate synthetase (would raise citrulline)" },
      { text: "Arginase (would raise arginine)" },
      { text: "Xanthine oxidase" },
      { text: "Thymidylate synthase" },
    ],
  },
  {
    stem: "A malnourished alcoholic presents with a macrocytic anemia. Which single set of findings best indicates folate rather than B12 deficiency as the cause?",
    topic: "Clinical Application",
    explanation:
      "Elevated homocysteine with normal methylmalonic acid indicates folate deficiency, since only B12 is needed for methylmalonyl-CoA mutase. Neurologic signs and elevated methylmalonic acid would instead favor B12 deficiency.",
    choices: [
      { text: "High homocysteine, normal methylmalonic acid, no neuropathy", isCorrect: true },
      { text: "High methylmalonic acid with neuropathy" },
      { text: "Low homocysteine with high uric acid" },
      { text: "Normal homocysteine and normal smear" },
      { text: "Elevated ammonia with low BUN" },
    ],
  },
  {
    stem: "A man with recurrent uric-acid kidney stones and gout has a very acidic urine. Beyond urate-lowering therapy, a rational adjunct is:",
    topic: "Clinical Application",
    explanation:
      "Uric-acid stones form in acidic urine, so alkalinizing the urine (e.g., potassium citrate) increases urate solubility and helps dissolve and prevent stones, complementing xanthine oxidase inhibition.",
    choices: [
      { text: "Alkalinizing the urine to increase urate solubility", isCorrect: true },
      { text: "Acidifying the urine further" },
      { text: "Restricting all fluids" },
      { text: "Adding a uricase inhibitor" },
      { text: "Giving high-dose vitamin C to acidify urine" },
    ],
  },
  {
    stem: "Which clinical-biochemical pairings are correctly matched? Select all that apply.",
    type: "MULTI",
    topic: "Clinical Application",
    explanation:
      "Lesch-Nyhan reflects HGPRT deficiency; SCID can result from adenosine deaminase deficiency; acute intermittent porphyria from porphobilinogen deaminase deficiency; alkaptonuria from homogentisate oxidase deficiency. Gilbert syndrome is a UDP-glucuronosyltransferase problem, not a xanthine oxidase one.",
    choices: [
      { text: "Lesch-Nyhan — HGPRT deficiency", isCorrect: true },
      { text: "ADA deficiency — severe combined immunodeficiency", isCorrect: true },
      { text: "Acute intermittent porphyria — porphobilinogen deaminase deficiency", isCorrect: true },
      { text: "Alkaptonuria — homogentisate oxidase deficiency", isCorrect: true },
      { text: "Gilbert syndrome — xanthine oxidase deficiency" },
    ],
  },
  {
    stem: "The creatine used by muscle for rapid ATP buffering is synthesized from arginine, glycine, and a methyl group donated by:",
    topic: "Clinical Application",
    explanation:
      "Creatine synthesis uses arginine and glycine, then a methyl group from S-adenosylmethionine; creatine phosphate buffers ATP in muscle and its breakdown product creatinine is a marker of renal function.",
    choices: [
      { text: "S-adenosylmethionine", isCorrect: true },
      { text: "Tetrahydrofolate" },
      { text: "Biotin" },
      { text: "Pyridoxal phosphate" },
      { text: "Carbamoyl phosphate" },
    ],
  },
  {
    stem: "True or False: Measuring blood ammonia is important in evaluating altered mental status in liver disease, because the failing liver cannot efficiently convert ammonia to urea.",
    type: "TRUE_FALSE",
    topic: "Clinical Application",
    explanation:
      "True. When hepatic urea-cycle capacity falls, ammonia accumulates and contributes to hepatic encephalopathy, so ammonia is a useful, though imperfect, marker in that setting.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "A patient with gout is counseled on diet. Which dietary factors raise uric acid and can worsen gout? Select all that apply.",
    type: "MULTI",
    topic: "Clinical Application",
    explanation:
      "Purine-rich meats and seafood, heavy alcohol (especially beer), and fructose-sweetened drinks all raise serum urate. Dairy and coffee are generally associated with lower urate, so they are not aggravators.",
    choices: [
      { text: "Purine-rich red meat and seafood", isCorrect: true },
      { text: "Heavy alcohol intake, especially beer", isCorrect: true },
      { text: "Fructose-sweetened beverages", isCorrect: true },
      { text: "Low-fat dairy products" },
      { text: "Coffee" },
    ],
  },
  {
    stem: "Nitrogen balance is negative when nitrogen excretion exceeds intake. This state is expected in:",
    topic: "Amino Acid Nitrogen Removal",
    explanation:
      "Negative nitrogen balance, where losses exceed intake, occurs with severe illness, trauma, burns, starvation, and uncontrolled catabolic states, reflecting net breakdown of body protein. Growth and recovery instead produce positive balance.",
    choices: [
      { text: "Severe burns and catabolic illness", isCorrect: true },
      { text: "Normal childhood growth" },
      { text: "Pregnancy" },
      { text: "Recovery and tissue repair" },
      { text: "A healthy adult in steady state" },
    ],
  },
  {
    stem: "The immediate mitochondrial fate of the ammonia released by glutamate dehydrogenase in the liver is:",
    topic: "Ammonia Transport & Toxicity",
    explanation:
      "Liver mitochondrial ammonia is captured by carbamoyl phosphate synthetase I to begin the urea cycle, keeping free ammonia low. This tight coupling protects against ammonia toxicity.",
    choices: [
      { text: "Incorporation into carbamoyl phosphate by CPS I", isCorrect: true },
      { text: "Direct conversion to uric acid" },
      { text: "Export as free ammonia gas" },
      { text: "Attachment to PRPP" },
      { text: "Conjugation with glucuronate" },
    ],
  },
  {
    stem: "A drug that inhibits dihydrofolate reductase in bacteria but spares human enzyme at usual doses is:",
    topic: "One-Carbon Metabolism & Folate",
    explanation:
      "Trimethoprim selectively inhibits bacterial dihydrofolate reductase, blocking folate-dependent nucleotide synthesis in bacteria; it is often paired with sulfamethoxazole, which blocks an earlier folate-synthesis step.",
    choices: [
      { text: "Trimethoprim", isCorrect: true },
      { text: "Methotrexate" },
      { text: "Allopurinol" },
      { text: "5-Fluorouracil" },
      { text: "Rasburicase" },
    ],
  },
  {
    stem: "Which statements correctly contrast purine and pyrimidine synthesis? Select all that apply.",
    type: "MULTI",
    topic: "Pyrimidine Synthesis",
    explanation:
      "Purines are built on PRPP as the ring is assembled, while the pyrimidine ring is built first and then joined to ribose phosphate; purine synthesis uses mitochondrial-independent CPS-not-required steps, whereas pyrimidines use cytosolic CPS II. Both are regulated end products. Purine synthesis does not begin from orotate.",
    choices: [
      { text: "Purine rings are assembled directly on PRPP", isCorrect: true },
      { text: "Pyrimidine rings are built before attachment to ribose phosphate", isCorrect: true },
      { text: "Pyrimidine synthesis uses cytosolic carbamoyl phosphate synthetase II", isCorrect: true },
      { text: "Purine synthesis begins from orotate" },
      { text: "Neither pathway is regulated" },
    ],
  },
  {
    stem: "Severe hyperammonemia can be lowered acutely by giving phenylbutyrate, which is converted to phenylacetate. Phenylacetate removes nitrogen by:",
    topic: "Urea Cycle Disorders",
    explanation:
      "Phenylacetate conjugates with glutamine to form phenylacetylglutamine, which is excreted in urine, carrying two nitrogen atoms out of the body per molecule and bypassing the defective urea cycle.",
    choices: [
      { text: "Conjugating with glutamine for urinary excretion", isCorrect: true },
      { text: "Directly activating CPS I" },
      { text: "Inhibiting glutaminase in the gut" },
      { text: "Chelating ammonia in blood" },
      { text: "Converting ammonia to uric acid" },
    ],
  },
  {
    stem: "True or False: In healthy adults, the majority of the body's daily nitrogen excretion leaves as urea in the urine.",
    type: "TRUE_FALSE",
    topic: "Clinical Application",
    explanation:
      "True. Urea is the principal nitrogenous excretory product in humans, accounting for most urinary nitrogen, with smaller contributions from ammonium, uric acid, and creatinine.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
];
