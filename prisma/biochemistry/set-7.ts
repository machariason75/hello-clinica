/**
 * BIOCHEMISTRY — PRACTICE SET 7
 * Vitamins, Nutrition & Integrated Metabolism (Capstone)
 *
 * Difficulty: Advanced capstone. Fat- and water-soluble vitamins and their
 * deficiency syndromes, vitamin C and the trace minerals, energy balance and
 * protein-energy malnutrition, and the integration of metabolism across the fed,
 * fasting, and starvation states, hormonal control, ethanol, and diabetes. This
 * set ties together every earlier set and completes the subject.
 *
 * Item mix: single-best-answer, select-all-that-apply, and true/false, with lab
 * panels and integrated clinical scenarios. Option counts vary from four to
 * seven, as on real US board exams. Correct-answer position is randomized at
 * seed time by the engine, so no positional pattern is exploitable.
 * US conventional units and nomenclature throughout.
 */

import type { Q } from "../_lib/qbank";

export const BIOCHEMISTRY_SET_7: Q[] = [
  {
    stem: "A child in a low-resource setting develops night blindness and dry, keratinized conjunctivae (xerophthalmia). The deficient vitamin and its visual role are:",
    topic: "Fat-Soluble Vitamins",
    explanation:
      "Vitamin A (retinol) deficiency causes night blindness and xerophthalmia; 11-cis-retinal is the chromophore of rhodopsin needed for low-light vision, and retinoic acid regulates epithelial differentiation.",
    choices: [
      { text: "Vitamin A; retinal is the visual pigment chromophore", isCorrect: true },
      { text: "Vitamin D; it forms the visual pigment" },
      { text: "Vitamin E; it powers phototransduction" },
      { text: "Vitamin K; it activates rhodopsin" },
      { text: "Vitamin C; it regenerates retinal" },
    ],
  },
  {
    stem: "An exclusively breastfed infant with little sun exposure develops bowed legs and widened wrists. The vitamin deficiency and its mechanism are:",
    topic: "Fat-Soluble Vitamins",
    explanation:
      "Vitamin D deficiency causes rickets; active 1,25-dihydroxyvitamin D promotes intestinal calcium and phosphate absorption, and its lack impairs bone mineralization, producing rickets in children and osteomalacia in adults.",
    choices: [
      { text: "Vitamin D; impaired calcium/phosphate absorption and bone mineralization", isCorrect: true },
      { text: "Vitamin A; defective collagen" },
      { text: "Vitamin K; impaired clotting in bone" },
      { text: "Vitamin C; failed hydroxylation of collagen" },
      { text: "Vitamin E; oxidative bone damage" },
    ],
  },
  {
    stem: "The active hormonal form of vitamin D, 1,25-dihydroxycholecalciferol (calcitriol), is produced by a final hydroxylation in the:",
    topic: "Fat-Soluble Vitamins",
    explanation:
      "Skin makes cholecalciferol, the liver 25-hydroxylates it, and the kidney performs the final 1-alpha-hydroxylation to calcitriol; renal failure therefore impairs activation and contributes to metabolic bone disease.",
    choices: [
      { text: "Kidney", isCorrect: true },
      { text: "Skin" },
      { text: "Liver" },
      { text: "Small intestine" },
      { text: "Parathyroid gland" },
    ],
  },
  {
    stem: "Vitamin K is required for the gamma-carboxylation of glutamate residues on certain clotting factors. Which factors and proteins depend on this modification? Select all that apply.",
    type: "MULTI",
    topic: "Fat-Soluble Vitamins",
    explanation:
      "Vitamin K-dependent gamma-carboxylation activates factors II, VII, IX, and X and anticoagulant proteins C and S. Factor V is not vitamin K-dependent, and warfarin acts by blocking vitamin K recycling.",
    choices: [
      { text: "Factor II (prothrombin)", isCorrect: true },
      { text: "Factor VII", isCorrect: true },
      { text: "Factors IX and X", isCorrect: true },
      { text: "Proteins C and S", isCorrect: true },
      { text: "Factor V" },
    ],
  },
  {
    stem: "A newborn who did not receive vitamin K prophylaxis is at risk of hemorrhagic disease of the newborn because:",
    topic: "Fat-Soluble Vitamins",
    explanation:
      "Neonates have low vitamin K stores, immature gut flora, and low placental transfer, so vitamin K-dependent clotting factors are deficient; a prophylactic vitamin K injection prevents bleeding.",
    choices: [
      { text: "Low stores and sterile gut limit vitamin K-dependent clotting factors", isCorrect: true },
      { text: "They overproduce vitamin K" },
      { text: "They lack all platelets" },
      { text: "They cannot absorb any fat" },
      { text: "They have excess protein C activity" },
    ],
  },
  {
    stem: "Vitamin E functions chiefly as a:",
    topic: "Fat-Soluble Vitamins",
    explanation:
      "Vitamin E (alpha-tocopherol) is a lipid-soluble antioxidant that protects polyunsaturated fatty acids in membranes from peroxidation; deficiency can cause hemolysis and neurologic problems, especially in fat-malabsorption states.",
    choices: [
      { text: "Lipid-soluble antioxidant protecting membranes", isCorrect: true },
      { text: "Coenzyme for carboxylation" },
      { text: "Visual pigment precursor" },
      { text: "Cofactor for prolyl hydroxylase" },
      { text: "Calcium-absorption hormone" },
    ],
  },
  {
    stem: "True or False: Because vitamins A, D, E, and K are fat-soluble, they can accumulate to toxic levels and their deficiencies are common in fat-malabsorption syndromes.",
    type: "TRUE_FALSE",
    topic: "Fat-Soluble Vitamins",
    explanation:
      "True. Fat-soluble vitamins are stored in fat and the liver, so excess (especially A and D) can be toxic, and conditions like cystic fibrosis, cholestasis, or celiac disease that impair fat absorption cause their deficiency.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Excess intake of which fat-soluble vitamin is classically associated with hypercalcemia, and of which with teratogenicity and pseudotumor cerebri? Select the correctly matched pair.",
    topic: "Fat-Soluble Vitamins",
    explanation:
      "Vitamin D excess causes hypercalcemia through enhanced calcium absorption, while vitamin A excess is teratogenic and can cause pseudotumor cerebri and hepatotoxicity; isotretinoin therefore requires strict pregnancy precautions.",
    choices: [
      { text: "Vitamin D — hypercalcemia; Vitamin A — teratogenicity", isCorrect: true },
      { text: "Vitamin A — hypercalcemia; Vitamin D — teratogenicity" },
      { text: "Vitamin E — hypercalcemia; Vitamin K — teratogenicity" },
      { text: "Vitamin K — hypercalcemia; Vitamin E — teratogenicity" },
    ],
  },
  {
    stem: "A patient with a long history of heavy alcohol use presents with confusion, ophthalmoplegia, and ataxia. The deficient vitamin and its coenzyme role are:",
    topic: "Thiamine, Riboflavin & Niacin",
    explanation:
      "Thiamine (B1) deficiency causes Wernicke encephalopathy; thiamine pyrophosphate is the coenzyme for pyruvate dehydrogenase, alpha-ketoglutarate dehydrogenase, branched-chain keto acid dehydrogenase, and transketolase.",
    choices: [
      { text: "Thiamine; coenzyme for pyruvate and alpha-ketoglutarate dehydrogenases", isCorrect: true },
      { text: "Niacin; component of NAD" },
      { text: "Riboflavin; component of FAD" },
      { text: "Folate; one-carbon transfer" },
      { text: "Cobalamin; methylmalonyl-CoA mutase" },
    ],
  },
  {
    stem: "Giving glucose to a thiamine-deficient alcoholic before thiamine can precipitate acute Wernicke encephalopathy because:",
    topic: "Thiamine, Riboflavin & Niacin",
    explanation:
      "A glucose load increases demand for thiamine-dependent enzymes (pyruvate dehydrogenase, transketolase); if thiamine is already depleted, this can acutely worsen the deficiency, so thiamine is given before or with glucose.",
    choices: [
      { text: "Glucose metabolism increases demand for thiamine-dependent enzymes", isCorrect: true },
      { text: "Glucose destroys thiamine chemically" },
      { text: "Glucose blocks thiamine absorption in the gut" },
      { text: "Glucose inactivates transketolase permanently" },
      { text: "Glucose raises ammonia" },
    ],
  },
  {
    stem: "Niacin (B3) is the precursor of NAD+ and NADP+ and can be synthesized in limited amounts from which amino acid?",
    topic: "Thiamine, Riboflavin & Niacin",
    explanation:
      "Tryptophan can be converted to niacin, so pellagra can occur when both dietary niacin and tryptophan are low, as in maize-based diets or Hartnup disease, giving dermatitis, diarrhea, and dementia.",
    choices: [
      { text: "Tryptophan", isCorrect: true },
      { text: "Tyrosine" },
      { text: "Histidine" },
      { text: "Glycine" },
      { text: "Methionine" },
    ],
  },
  {
    stem: "The classic triad of pellagra from niacin deficiency is:",
    topic: "Thiamine, Riboflavin & Niacin",
    explanation:
      "Pellagra presents with the three D's: dermatitis (photosensitive), diarrhea, and dementia, progressing to death if untreated; NAD/NADP are needed for countless redox reactions.",
    choices: [
      { text: "Dermatitis, diarrhea, dementia", isCorrect: true },
      { text: "Neuropathy, anemia, glossitis" },
      { text: "Night blindness, xerophthalmia, keratomalacia" },
      { text: "Bleeding, bruising, poor healing" },
      { text: "Ataxia, ophthalmoplegia, confusion" },
    ],
  },
  {
    stem: "Riboflavin (B2) is the precursor of which two redox coenzymes central to the electron transport chain and many dehydrogenases? Select all that apply.",
    type: "MULTI",
    topic: "Thiamine, Riboflavin & Niacin",
    explanation:
      "Riboflavin gives rise to FAD and FMN, flavin coenzymes used by succinate dehydrogenase, the ETC, and numerous oxidoreductases; deficiency causes cheilosis, glossitis, and corneal vascularization. NAD and NADP derive from niacin, not riboflavin.",
    choices: [
      { text: "FAD (flavin adenine dinucleotide)", isCorrect: true },
      { text: "FMN (flavin mononucleotide)", isCorrect: true },
      { text: "NAD+" },
      { text: "NADP+" },
      { text: "Coenzyme A" },
    ],
  },
  {
    stem: "Isoniazid therapy for tuberculosis can cause a peripheral neuropathy that is prevented by supplementing which vitamin?",
    topic: "B6, Biotin & Pantothenate",
    explanation:
      "Isoniazid depletes pyridoxal phosphate (vitamin B6), impairing neurotransmitter and heme synthesis and causing peripheral neuropathy; routine B6 supplementation prevents this.",
    choices: [
      { text: "Vitamin B6 (pyridoxine)", isCorrect: true },
      { text: "Vitamin B1 (thiamine)" },
      { text: "Vitamin B12 (cobalamin)" },
      { text: "Folate" },
      { text: "Niacin" },
    ],
  },
  {
    stem: "Biotin is the covalently bound coenzyme for carboxylation reactions. Which enzymes require biotin? Select all that apply.",
    type: "MULTI",
    topic: "B6, Biotin & Pantothenate",
    explanation:
      "Biotin is the CO2 carrier for pyruvate carboxylase, acetyl-CoA carboxylase, and propionyl-CoA carboxylase. Glucose-6-phosphatase and pyruvate dehydrogenase are not biotin-dependent (PDH uses thiamine, lipoate, FAD, NAD, and CoA).",
    choices: [
      { text: "Pyruvate carboxylase", isCorrect: true },
      { text: "Acetyl-CoA carboxylase", isCorrect: true },
      { text: "Propionyl-CoA carboxylase", isCorrect: true },
      { text: "Glucose-6-phosphatase" },
      { text: "Pyruvate dehydrogenase" },
    ],
  },
  {
    stem: "Raw egg-white consumption over long periods can cause biotin deficiency because egg white contains:",
    topic: "B6, Biotin & Pantothenate",
    explanation:
      "Avidin in raw egg white binds biotin tightly and blocks its absorption; cooking denatures avidin. Biotin deficiency causes dermatitis, alopecia, and lactic acidosis from impaired carboxylases.",
    choices: [
      { text: "Avidin, which binds biotin", isCorrect: true },
      { text: "Excess biotin that causes toxicity" },
      { text: "An enzyme that destroys thiamine" },
      { text: "A folate antagonist" },
      { text: "A vitamin K analog" },
    ],
  },
  {
    stem: "Pantothenate (B5) is a component of which essential cofactor of acyl-group transfer?",
    topic: "B6, Biotin & Pantothenate",
    explanation:
      "Pantothenic acid is incorporated into coenzyme A and the acyl carrier protein, so it is required for fatty-acid synthesis and oxidation and for the many acyl transfers of central metabolism.",
    choices: [
      { text: "Coenzyme A", isCorrect: true },
      { text: "Tetrahydrofolate" },
      { text: "Biotin" },
      { text: "Pyridoxal phosphate" },
      { text: "Thiamine pyrophosphate" },
    ],
  },
  {
    stem: "A patient with a diet devoid of fruits and vegetables develops bleeding gums, perifollicular hemorrhages, poor wound healing, and corkscrew hairs. The deficiency impairs:",
    topic: "Vitamin C & Trace Minerals",
    explanation:
      "Vitamin C (ascorbate) is a cofactor for prolyl and lysyl hydroxylases in collagen synthesis; deficiency (scurvy) weakens collagen, causing bleeding, poor healing, and the classic perifollicular findings.",
    choices: [
      { text: "Hydroxylation of proline and lysine in collagen synthesis", isCorrect: true },
      { text: "Gamma-carboxylation of clotting factors" },
      { text: "Calcium absorption in the gut" },
      { text: "Fatty-acid synthesis" },
      { text: "Methylation of DNA" },
    ],
  },
  {
    stem: "Vitamin C also aids iron absorption in the gut by:",
    topic: "Vitamin C & Trace Minerals",
    explanation:
      "Ascorbate reduces dietary ferric iron (Fe3+) to the more absorbable ferrous form (Fe2+), enhancing non-heme iron uptake; this is why vitamin C is often taken with iron supplements.",
    choices: [
      { text: "Reducing ferric iron to the absorbable ferrous form", isCorrect: true },
      { text: "Oxidizing ferrous iron to ferric" },
      { text: "Binding iron for excretion" },
      { text: "Blocking hepcidin" },
      { text: "Converting heme to bilirubin" },
    ],
  },
  {
    stem: "A vegetarian teenager has microcytic, hypochromic anemia with low ferritin. The deficient mineral and its key role are:",
    topic: "Vitamin C & Trace Minerals",
    explanation:
      "Iron deficiency causes microcytic hypochromic anemia; iron is central to hemoglobin and myoglobin heme and to iron-sulfur clusters of the electron transport chain, and low ferritin indicates depleted stores.",
    choices: [
      { text: "Iron; heme and electron-transport iron-sulfur centers", isCorrect: true },
      { text: "Zinc; DNA polymerase" },
      { text: "Copper; superoxide dismutase" },
      { text: "Iodine; thyroid hormone" },
      { text: "Selenium; glutathione peroxidase" },
    ],
  },
  {
    stem: "Match each trace mineral to a key function. Which pairings are correct? Select all that apply.",
    type: "MULTI",
    topic: "Vitamin C & Trace Minerals",
    explanation:
      "Iodine is required for thyroid hormone synthesis, selenium for glutathione peroxidase, copper for cytochrome c oxidase and lysyl oxidase, and zinc for numerous zinc-finger transcription factors and metalloenzymes. Iron's role is in heme, not as the thyroid-hormone core.",
    choices: [
      { text: "Iodine — thyroid hormone synthesis", isCorrect: true },
      { text: "Selenium — glutathione peroxidase", isCorrect: true },
      { text: "Copper — cytochrome c oxidase and lysyl oxidase", isCorrect: true },
      { text: "Zinc — zinc-finger transcription factors", isCorrect: true },
      { text: "Iron — the central atom of thyroid hormone" },
    ],
  },
  {
    stem: "A child with a genetic copper-transport defect (Menkes disease) has kinky, brittle hair and connective-tissue and vascular problems. This reflects loss of the copper enzyme:",
    topic: "Vitamin C & Trace Minerals",
    explanation:
      "Menkes disease impairs copper absorption/transport, reducing lysyl oxidase activity needed to cross-link collagen and elastin; the result is fragile connective tissue, vascular tortuosity, and the characteristic kinky hair.",
    choices: [
      { text: "Lysyl oxidase", isCorrect: true },
      { text: "Superoxide dismutase only" },
      { text: "Glutathione peroxidase" },
      { text: "Prolyl hydroxylase" },
      { text: "Thyroid peroxidase" },
    ],
  },
  {
    stem: "A child with adequate calories but very low protein intake develops edema, a swollen (fatty) liver, and skin changes. This form of protein-energy malnutrition is:",
    topic: "Energy Balance & Malnutrition",
    explanation:
      "Kwashiorkor results from protein deficiency with relatively preserved calories; low plasma proteins reduce oncotic pressure, causing edema, and impaired lipoprotein export causes hepatic steatosis. Marasmus is total calorie deficiency with wasting.",
    choices: [
      { text: "Kwashiorkor", isCorrect: true },
      { text: "Marasmus" },
      { text: "Refeeding syndrome" },
      { text: "Beriberi" },
      { text: "Pellagra" },
    ],
  },
  {
    stem: "Severe generalized calorie deficiency producing extreme muscle wasting, loss of subcutaneous fat, and a shrunken appearance without edema is:",
    topic: "Energy Balance & Malnutrition",
    explanation:
      "Marasmus is total energy (and protein) deprivation, mobilizing fat and muscle for fuel and causing severe wasting; unlike kwashiorkor, edema is typically absent.",
    choices: [
      { text: "Marasmus", isCorrect: true },
      { text: "Kwashiorkor" },
      { text: "Obesity" },
      { text: "Metabolic syndrome" },
      { text: "Refeeding syndrome" },
    ],
  },
  {
    stem: "When a severely malnourished patient is fed too aggressively, refeeding syndrome can occur. The hallmark and its cause are:",
    topic: "Energy Balance & Malnutrition",
    explanation:
      "Refeeding syndrome features a dangerous drop in phosphate (also potassium and magnesium) as an insulin surge from carbohydrate drives these ions and glucose into cells for phosphorylation; slow refeeding and electrolyte repletion prevent it.",
    choices: [
      { text: "Hypophosphatemia from insulin-driven cellular uptake", isCorrect: true },
      { text: "Hyperphosphatemia from cell death" },
      { text: "Hypercalcemia from bone release" },
      { text: "Hyperkalemia from acidosis" },
      { text: "Hyperglycemia with ketosis only" },
    ],
  },
  {
    stem: "True or False: The respiratory quotient (RQ) is about 1.0 for pure carbohydrate oxidation and about 0.7 for pure fat oxidation, so a lower RQ suggests greater reliance on fat.",
    type: "TRUE_FALSE",
    topic: "Energy Balance & Malnutrition",
    explanation:
      "True. RQ (CO2 produced divided by O2 consumed) is near 1.0 for carbohydrate and about 0.7 for fat, so measuring RQ indicates which fuel predominates, a useful concept in nutrition and exercise physiology.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Shortly after a carbohydrate-rich meal, the high insulin-to-glucagon ratio in the liver promotes:",
    topic: "The Fed (Absorptive) State",
    explanation:
      "In the fed state, insulin drives glucose uptake and storage: glycogen synthesis, glycolysis, and fatty-acid synthesis are favored, while gluconeogenesis and glycogenolysis are suppressed, storing incoming fuel.",
    choices: [
      { text: "Glycogen and fatty-acid synthesis with suppressed gluconeogenesis", isCorrect: true },
      { text: "Glycogenolysis and gluconeogenesis" },
      { text: "Ketogenesis and lipolysis" },
      { text: "Proteolysis for glucose" },
      { text: "Uninhibited fat breakdown" },
    ],
  },
  {
    stem: "Insulin release from pancreatic beta cells after a meal is triggered when glucose metabolism raises ATP and:",
    topic: "The Fed (Absorptive) State",
    explanation:
      "Rising ATP closes ATP-sensitive potassium channels, depolarizing the beta cell, opening voltage-gated calcium channels, and triggering insulin exocytosis; sulfonylureas exploit this by closing the same channels.",
    choices: [
      { text: "Closes ATP-sensitive potassium channels, depolarizing the cell", isCorrect: true },
      { text: "Opens potassium channels to hyperpolarize the cell" },
      { text: "Blocks all calcium entry" },
      { text: "Inhibits glucokinase" },
      { text: "Activates glucagon secretion" },
    ],
  },
  {
    stem: "Which metabolic activities are promoted by insulin in the fed state? Select all that apply.",
    type: "MULTI",
    topic: "The Fed (Absorptive) State",
    explanation:
      "Insulin stimulates GLUT4-mediated glucose uptake in muscle and fat, glycogen synthesis, and lipogenesis, and it inhibits lipolysis. It does not stimulate hepatic gluconeogenesis, which it suppresses.",
    choices: [
      { text: "GLUT4-mediated glucose uptake in muscle and adipose", isCorrect: true },
      { text: "Glycogen synthesis", isCorrect: true },
      { text: "Lipogenesis and triglyceride storage", isCorrect: true },
      { text: "Hepatic gluconeogenesis" },
      { text: "Adipose lipolysis" },
    ],
  },
  {
    stem: "During an overnight fast, blood glucose is maintained first by glycogenolysis and then increasingly by gluconeogenesis. The dominant hormonal signal is:",
    topic: "Fasting & Starvation",
    explanation:
      "Falling insulin and rising glucagon shift the liver to break down glycogen and then to make glucose from lactate, glycerol, and amino acids, keeping blood glucose stable for the brain and red cells.",
    choices: [
      { text: "A low insulin-to-glucagon ratio", isCorrect: true },
      { text: "A high insulin-to-glucagon ratio" },
      { text: "High insulin with low glucagon" },
      { text: "Elevated calcitonin" },
      { text: "Suppressed cortisol" },
    ],
  },
  {
    stem: "After several days of starvation, the brain reduces its glucose use by adapting to oxidize:",
    topic: "Fasting & Starvation",
    explanation:
      "In prolonged starvation the liver produces ketone bodies (beta-hydroxybutyrate and acetoacetate) from fatty acids; the brain adapts to use them, sparing glucose and reducing the need to break down muscle protein.",
    choices: [
      { text: "Ketone bodies", isCorrect: true },
      { text: "Free fatty acids directly" },
      { text: "Lactate only" },
      { text: "Branched-chain amino acids" },
      { text: "Glycerol" },
    ],
  },
  {
    stem: "Why can the brain not use free fatty acids directly as fuel, making ketone bodies important during starvation?",
    topic: "Fasting & Starvation",
    explanation:
      "Long-chain fatty acids are albumin-bound and do not cross the blood-brain barrier efficiently, so the brain relies on glucose and, during fasting, on water-soluble ketone bodies that cross readily.",
    choices: [
      { text: "Fatty acids do not efficiently cross the blood-brain barrier", isCorrect: true },
      { text: "The brain lacks all mitochondria" },
      { text: "Fatty acids cannot be oxidized by any tissue" },
      { text: "The brain cannot use glucose either" },
      { text: "Ketones are toxic to neurons" },
    ],
  },
  {
    stem: "Which tissues rely on anaerobic glycolysis for essentially all their ATP because they lack mitochondria, and therefore always need glucose? Select all that apply.",
    type: "MULTI",
    topic: "Fasting & Starvation",
    explanation:
      "Mature red blood cells lack mitochondria and depend entirely on glycolysis; the renal medulla and lens/cornea are also heavily glycolytic. The heart and liver are rich in mitochondria and are not obligate glycolytic tissues.",
    choices: [
      { text: "Mature red blood cells", isCorrect: true },
      { text: "Renal medulla", isCorrect: true },
      { text: "Lens and cornea of the eye", isCorrect: true },
      { text: "Cardiac muscle" },
      { text: "Liver" },
    ],
  },
  {
    stem: "The liver is central to fuel homeostasis partly because it possesses glucose-6-phosphatase, which allows it to:",
    topic: "Integrated Tissue Metabolism",
    explanation:
      "Glucose-6-phosphatase lets the liver (and kidney) release free glucose into blood from glycogenolysis and gluconeogenesis; muscle lacks this enzyme, so muscle glycogen serves only the muscle itself.",
    choices: [
      { text: "Release free glucose into the blood", isCorrect: true },
      { text: "Trap glucose irreversibly like muscle" },
      { text: "Synthesize ketone bodies" },
      { text: "Take up glucose without insulin only" },
      { text: "Store glucose as fat exclusively" },
    ],
  },
  {
    stem: "Skeletal muscle cannot directly contribute glucose to the blood during fasting. Instead, it supports blood glucose by exporting:",
    topic: "Integrated Tissue Metabolism",
    explanation:
      "Muscle exports lactate (recycled to glucose in the liver via the Cori cycle) and alanine (glucose-alanine cycle), providing gluconeogenic substrates; it cannot release glucose because it lacks glucose-6-phosphatase.",
    choices: [
      { text: "Lactate and alanine as gluconeogenic substrates", isCorrect: true },
      { text: "Free glucose from glycogen" },
      { text: "Ketone bodies" },
      { text: "Cholesterol" },
      { text: "Urea" },
    ],
  },
  {
    stem: "Adipose tissue in the fasting state provides fuel to the rest of the body mainly by:",
    topic: "Integrated Tissue Metabolism",
    explanation:
      "Hormone-sensitive lipase releases free fatty acids and glycerol from stored triglyceride during fasting; fatty acids fuel muscle and liver, and glycerol is a gluconeogenic substrate.",
    choices: [
      { text: "Releasing free fatty acids and glycerol via lipolysis", isCorrect: true },
      { text: "Releasing glucose from glycogen" },
      { text: "Synthesizing ketone bodies for export" },
      { text: "Producing urea" },
      { text: "Storing more triglyceride" },
    ],
  },
  {
    stem: "Match each tissue to its characteristic metabolic feature. Which pairings are correct? Select all that apply.",
    type: "MULTI",
    topic: "Integrated Tissue Metabolism",
    explanation:
      "The liver uniquely makes ketone bodies but cannot use them (it lacks thiophorase); red cells depend on glycolysis; the brain normally uses glucose and adapts to ketones in starvation. Muscle does release glucose to blood is false, since it lacks glucose-6-phosphatase.",
    choices: [
      { text: "Liver — produces ketones but cannot use them", isCorrect: true },
      { text: "Red blood cell — relies entirely on glycolysis", isCorrect: true },
      { text: "Brain — uses glucose, adapts to ketones in starvation", isCorrect: true },
      { text: "Skeletal muscle — releases free glucose into blood" },
      { text: "Adipose — is the main site of gluconeogenesis" },
    ],
  },
  {
    stem: "The Cori cycle and the glucose-alanine cycle both recycle carbon from muscle to liver. They differ in that the glucose-alanine cycle additionally:",
    topic: "Integrated Tissue Metabolism",
    explanation:
      "The glucose-alanine cycle carries nitrogen (as alanine's amino group) from muscle to liver for urea synthesis, whereas the Cori cycle returns only carbon as lactate; both regenerate glucose in the liver.",
    choices: [
      { text: "Transports amino nitrogen from muscle to liver", isCorrect: true },
      { text: "Produces ketone bodies in muscle" },
      { text: "Occurs only in the fed state" },
      { text: "Requires no ATP in the liver" },
      { text: "Bypasses the liver entirely" },
    ],
  },
  {
    stem: "Glucagon raises blood glucose through the liver primarily by a signaling cascade that:",
    topic: "Hormonal Integration",
    explanation:
      "Glucagon binds a Gs-coupled receptor, raising cAMP and activating protein kinase A, which stimulates glycogenolysis and gluconeogenesis and inhibits glycogen synthesis, releasing glucose during fasting.",
    choices: [
      { text: "Raises cAMP and activates protein kinase A", isCorrect: true },
      { text: "Lowers cAMP to activate glycogen synthase" },
      { text: "Opens GLUT4 channels in muscle" },
      { text: "Stimulates insulin-like glucose uptake" },
      { text: "Blocks all gluconeogenesis" },
    ],
  },
  {
    stem: "Epinephrine during acute stress mobilizes fuel by acting on multiple tissues. Which effects occur? Select all that apply.",
    type: "MULTI",
    topic: "Hormonal Integration",
    explanation:
      "Epinephrine stimulates hepatic and muscle glycogenolysis, adipose lipolysis, and glucagon-like effects to raise blood glucose and fatty acids for the fight-or-flight response, while suppressing insulin release. It does not stimulate insulin secretion.",
    choices: [
      { text: "Hepatic glycogenolysis", isCorrect: true },
      { text: "Adipose lipolysis", isCorrect: true },
      { text: "Muscle glycogenolysis", isCorrect: true },
      { text: "Increased insulin secretion" },
      { text: "Net glycogen synthesis in liver" },
    ],
  },
  {
    stem: "Cortisol, a glucocorticoid, supports prolonged stress and fasting by:",
    topic: "Hormonal Integration",
    explanation:
      "Cortisol promotes proteolysis and gluconeogenesis and induces gluconeogenic enzymes, providing sustained glucose; chronic excess (Cushing) causes hyperglycemia, central obesity, and muscle wasting.",
    choices: [
      { text: "Stimulating proteolysis and gluconeogenesis", isCorrect: true },
      { text: "Enhancing insulin-mediated glucose uptake" },
      { text: "Blocking all gluconeogenic enzymes" },
      { text: "Promoting glycogen synthesis in muscle" },
      { text: "Lowering blood glucose" },
    ],
  },
  {
    stem: "Insulin and glucagon have opposing effects on a key regulatory enzyme pair in the liver. Insulin (via dephosphorylation) favors glycogen synthesis by activating glycogen synthase and inactivating:",
    topic: "Hormonal Integration",
    explanation:
      "Insulin promotes dephosphorylation, which activates glycogen synthase and inactivates glycogen phosphorylase, storing glucose; glucagon and epinephrine (via phosphorylation) do the reverse to release it.",
    choices: [
      { text: "Glycogen phosphorylase", isCorrect: true },
      { text: "Glucokinase" },
      { text: "Pyruvate kinase" },
      { text: "Acetyl-CoA carboxylase only" },
      { text: "Glycogen synthase itself" },
    ],
  },
  {
    stem: "Ethanol is oxidized by alcohol dehydrogenase and aldehyde dehydrogenase, both of which generate large amounts of:",
    topic: "Ethanol Metabolism",
    explanation:
      "Ethanol oxidation produces excess NADH, raising the NADH/NAD+ ratio; this drives pyruvate to lactate and oxaloacetate to malate, inhibiting gluconeogenesis and favoring fat accumulation.",
    choices: [
      { text: "NADH, raising the NADH/NAD+ ratio", isCorrect: true },
      { text: "NADPH for biosynthesis" },
      { text: "FADH2 only" },
      { text: "ATP directly" },
      { text: "Ketone bodies exclusively" },
    ],
  },
  {
    stem: "The high NADH/NAD+ ratio from heavy ethanol intake explains which acute metabolic consequences? Select all that apply.",
    type: "MULTI",
    topic: "Ethanol Metabolism",
    explanation:
      "Excess NADH pushes pyruvate to lactate (lactic acidosis, and hypoglycemia from blocked gluconeogenesis) and favors fatty-acid synthesis and reduced fat oxidation (hepatic steatosis). It does not enhance gluconeogenesis; it inhibits it.",
    choices: [
      { text: "Fasting hypoglycemia from impaired gluconeogenesis", isCorrect: true },
      { text: "Lactic acidosis", isCorrect: true },
      { text: "Hepatic steatosis (fatty liver)", isCorrect: true },
      { text: "Enhanced gluconeogenesis" },
      { text: "Increased fatty-acid oxidation" },
    ],
  },
  {
    stem: "Disulfiram, used to deter drinking, works by inhibiting aldehyde dehydrogenase, causing the accumulation of:",
    topic: "Ethanol Metabolism",
    explanation:
      "Blocking aldehyde dehydrogenase makes acetaldehyde accumulate, producing flushing, nausea, and palpitations; the unpleasant reaction discourages alcohol use. Some individuals have a genetic variant with the same effect.",
    choices: [
      { text: "Acetaldehyde", isCorrect: true },
      { text: "Ethanol itself" },
      { text: "Acetate" },
      { text: "Lactate" },
      { text: "Methanol" },
    ],
  },
  {
    stem: "Diabetic ketoacidosis in type 1 diabetes arises because a near-total lack of insulin with high counter-regulatory hormones leads to:",
    topic: "Diabetes & Metabolic Syndrome",
    explanation:
      "Without insulin, unrestrained lipolysis floods the liver with fatty acids that are converted to ketone bodies, producing a high-anion-gap metabolic acidosis with hyperglycemia and osmotic diuresis.",
    choices: [
      { text: "Unrestrained lipolysis and hepatic ketogenesis", isCorrect: true },
      { text: "Excess insulin causing hypoglycemia" },
      { text: "Pure respiratory alkalosis" },
      { text: "Glycogen overstorage" },
      { text: "Suppressed gluconeogenesis" },
    ],
  },
  {
    stem: "Chronic hyperglycemia damages tissues partly through nonenzymatic glycation of proteins. The clinical test that reflects average glucose over the prior 2 to 3 months by measuring glycated hemoglobin is:",
    topic: "Diabetes & Metabolic Syndrome",
    explanation:
      "Hemoglobin A1c reflects average glycemia over the red-cell lifespan (about 2 to 3 months) because glucose slowly and irreversibly glycates hemoglobin; it guides long-term diabetes control.",
    choices: [
      { text: "Hemoglobin A1c", isCorrect: true },
      { text: "Fasting insulin level" },
      { text: "Random glucose only" },
      { text: "Serum ketones" },
      { text: "C-peptide alone" },
    ],
  },
  {
    stem: "Which components are part of the metabolic syndrome cluster that raises cardiovascular and diabetes risk? Select all that apply.",
    type: "MULTI",
    topic: "Diabetes & Metabolic Syndrome",
    explanation:
      "Metabolic syndrome includes central (abdominal) obesity, hypertension, elevated fasting glucose (insulin resistance), high triglycerides, and low HDL cholesterol. A low body-mass index with high HDL is not a component.",
    choices: [
      { text: "Central (abdominal) obesity", isCorrect: true },
      { text: "Elevated blood pressure", isCorrect: true },
      { text: "Elevated fasting glucose", isCorrect: true },
      { text: "High triglycerides with low HDL", isCorrect: true },
      { text: "Low BMI with high HDL" },
    ],
  },
  {
    stem: "The polyol (sorbitol) pathway contributes to diabetic complications in tissues like the lens and nerves because aldose reductase converts glucose to sorbitol, which:",
    topic: "Diabetes & Metabolic Syndrome",
    explanation:
      "In hyperglycemia, aldose reductase makes sorbitol that is trapped intracellularly, drawing in water osmotically and depleting NADPH; this contributes to cataracts, neuropathy, and other complications.",
    choices: [
      { text: "Accumulates and causes osmotic and oxidative damage", isCorrect: true },
      { text: "Is rapidly exported and harmless" },
      { text: "Provides extra ATP to nerves" },
      { text: "Prevents protein glycation" },
      { text: "Lowers intracellular glucose safely" },
    ],
  },
  {
    stem: "A malnourished alcoholic is admitted with confusion. Before giving intravenous dextrose, the single most important vitamin to administer is:",
    topic: "Clinical Application",
    explanation:
      "Thiamine must be given before or with glucose in a malnourished alcoholic to prevent precipitating or worsening Wernicke encephalopathy, since glucose metabolism consumes thiamine-dependent enzymes.",
    choices: [
      { text: "Thiamine", isCorrect: true },
      { text: "Vitamin C" },
      { text: "Vitamin D" },
      { text: "Folate alone" },
      { text: "Vitamin K" },
    ],
  },
  {
    stem: "This basic metabolic panel is obtained in a vomiting type 1 diabetic:\n\n| Test | Result | Reference |\n|---|---|---|\n| Glucose | 480 mg/dL | 70-99 |\n| Bicarbonate | 8 mmol/L | 22-28 |\n| Anion gap | 26 | 8-12 |\n| Beta-hydroxybutyrate | High | Low |\n\nThe picture is most consistent with:",
    topic: "Clinical Application",
    explanation:
      "Marked hyperglycemia with a high-anion-gap metabolic acidosis and elevated ketones defines diabetic ketoacidosis; treatment is insulin, fluids, and careful electrolyte (especially potassium) management.",
    choices: [
      { text: "Diabetic ketoacidosis", isCorrect: true },
      { text: "Hypoglycemia from insulin excess" },
      { text: "Simple dehydration only" },
      { text: "Respiratory alkalosis" },
      { text: "Lactic acidosis from metformin" },
    ],
  },
  {
    stem: "A patient with chronic fat malabsorption from cystic fibrosis is most at risk for deficiency of which group of vitamins?",
    topic: "Clinical Application",
    explanation:
      "Fat malabsorption impairs uptake of the fat-soluble vitamins A, D, E, and K, so patients need monitoring and supplementation; deficiencies can cause night blindness, bone disease, hemolysis/neuropathy, and bleeding.",
    choices: [
      { text: "The fat-soluble vitamins A, D, E, and K", isCorrect: true },
      { text: "Only vitamin C" },
      { text: "Only the B vitamins" },
      { text: "Only folate and B12" },
      { text: "No vitamins are affected" },
    ],
  },
  {
    stem: "A strict vegan with no supplementation is at particular risk of deficiency in which vitamin, given its animal-source origin?",
    topic: "Clinical Application",
    explanation:
      "Vitamin B12 is found almost exclusively in animal products, so unsupplemented vegans risk deficiency, producing megaloblastic anemia and, if prolonged, irreversible neurologic damage.",
    choices: [
      { text: "Vitamin B12 (cobalamin)", isCorrect: true },
      { text: "Vitamin C" },
      { text: "Niacin" },
      { text: "Vitamin K" },
      { text: "Biotin" },
    ],
  },
  {
    stem: "Which integrated statements about the transition from the fed to the fasted state are correct? Select all that apply.",
    type: "MULTI",
    topic: "Clinical Application",
    explanation:
      "As fasting begins, the insulin-to-glucagon ratio falls, hepatic glycogenolysis then gluconeogenesis maintain glucose, adipose lipolysis supplies fatty acids, and prolonged fasting raises ketones to spare glucose. Insulin does not rise during fasting.",
    choices: [
      { text: "The insulin-to-glucagon ratio falls", isCorrect: true },
      { text: "Gluconeogenesis becomes increasingly important", isCorrect: true },
      { text: "Adipose lipolysis supplies fatty acids", isCorrect: true },
      { text: "Ketone bodies rise to spare glucose", isCorrect: true },
      { text: "Circulating insulin rises steadily" },
    ],
  },
  {
    stem: "A patient on long-term isoniazid and a poor diet develops a sideroblastic-type anemia and peripheral neuropathy. The shared underlying deficiency affects a coenzyme needed for both heme synthesis and transamination, namely:",
    topic: "Clinical Application",
    explanation:
      "Pyridoxal phosphate (vitamin B6) is required by ALA synthase (heme synthesis) and by aminotransferases; isoniazid-induced B6 deficiency can therefore cause both sideroblastic anemia and neuropathy, prevented by supplementation.",
    choices: [
      { text: "Pyridoxal phosphate (vitamin B6)", isCorrect: true },
      { text: "Thiamine pyrophosphate" },
      { text: "Cobalamin" },
      { text: "Biotin" },
      { text: "Ascorbate" },
    ],
  },
  {
    stem: "True or False: In the well-fed state the liver favors glucose storage and fatty-acid synthesis, whereas in fasting it switches to glucose production and ketone-body synthesis, illustrating its role as the body's metabolic hub.",
    type: "TRUE_FALSE",
    topic: "Clinical Application",
    explanation:
      "True. The liver reciprocally regulates these pathways according to hormonal signals, storing fuel after meals and exporting glucose and ketones during fasting, coordinating whole-body metabolism.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "A postoperative patient on prolonged broad-spectrum antibiotics with poor intake develops easy bruising and a prolonged prothrombin time that corrects with vitamin administration. The deficient vitamin is:",
    topic: "Clinical Application",
    explanation:
      "Broad-spectrum antibiotics kill vitamin K-producing gut flora, and poor intake compounds the deficiency; the resulting drop in factors II, VII, IX, and X prolongs the prothrombin time, corrected by vitamin K.",
    choices: [
      { text: "Vitamin K", isCorrect: true },
      { text: "Vitamin C" },
      { text: "Vitamin B12" },
      { text: "Folate" },
      { text: "Vitamin E" },
    ],
  },
  {
    stem: "An endurance athlete 'hits the wall' after about 90 minutes of hard exercise. The biochemical basis is largely:",
    topic: "Clinical Application",
    explanation:
      "Prolonged intense exercise depletes muscle and liver glycogen; once glycogen is exhausted the athlete must rely more on slower fat oxidation, and blood glucose can fall, causing fatigue. Carbohydrate loading and intake delay this.",
    choices: [
      { text: "Depletion of muscle and liver glycogen stores", isCorrect: true },
      { text: "Complete loss of all fat stores" },
      { text: "Vitamin C deficiency" },
      { text: "Acute B12 deficiency" },
      { text: "Excess insulin secretion during exercise" },
    ],
  },
  {
    stem: "Warfarin is an anticoagulant that inhibits vitamin K epoxide reductase. This lowers clotting-factor activity because the enzyme normally:",
    topic: "Fat-Soluble Vitamins",
    explanation:
      "Vitamin K epoxide reductase regenerates reduced vitamin K needed for gamma-carboxylation of factors II, VII, IX, and X; blocking it leaves these factors under-carboxylated and inactive, producing anticoagulation.",
    choices: [
      { text: "Regenerates reduced vitamin K for gamma-carboxylation", isCorrect: true },
      { text: "Directly degrades clotting factors" },
      { text: "Synthesizes vitamin K from scratch" },
      { text: "Activates protein C only" },
      { text: "Carboxylates factor V" },
    ],
  },
  {
    stem: "True or False: Vitamin A derivatives (retinoids) are used to treat severe acne but are strongly teratogenic, so pregnancy must be excluded and prevented during therapy.",
    type: "TRUE_FALSE",
    topic: "Fat-Soluble Vitamins",
    explanation:
      "True. Isotretinoin and related retinoids are highly effective for severe acne but cause serious birth defects, so strict contraception and pregnancy testing are mandatory during and after treatment.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Beyond bone, active vitamin D also acts to:",
    topic: "Fat-Soluble Vitamins",
    explanation:
      "Calcitriol increases both intestinal calcium and phosphate absorption and works with parathyroid hormone to regulate calcium; it also has roles in immune modulation. It does not decrease calcium absorption.",
    choices: [
      { text: "Increase intestinal absorption of both calcium and phosphate", isCorrect: true },
      { text: "Decrease calcium absorption" },
      { text: "Directly clot blood" },
      { text: "Serve as an antioxidant in membranes" },
      { text: "Form the visual pigment" },
    ],
  },
  {
    stem: "Wet beriberi from thiamine deficiency differs from dry beriberi in that wet beriberi prominently features:",
    topic: "Thiamine, Riboflavin & Niacin",
    explanation:
      "Wet beriberi involves high-output cardiac failure and edema, whereas dry beriberi is chiefly a symmetric peripheral neuropathy; both stem from thiamine deficiency impairing energy metabolism.",
    choices: [
      { text: "High-output heart failure and edema", isCorrect: true },
      { text: "Only peripheral neuropathy" },
      { text: "Photosensitive dermatitis" },
      { text: "Bleeding gums" },
      { text: "Night blindness" },
    ],
  },
  {
    stem: "Carcinoid syndrome can cause a pellagra-like picture because the tumor diverts which niacin precursor into serotonin?",
    topic: "Thiamine, Riboflavin & Niacin",
    explanation:
      "Carcinoid tumors consume large amounts of tryptophan to make serotonin, leaving less available for niacin synthesis and producing pellagra-like dermatitis and diarrhea in some patients.",
    choices: [
      { text: "Tryptophan", isCorrect: true },
      { text: "Tyrosine" },
      { text: "Phenylalanine" },
      { text: "Glutamate" },
      { text: "Histidine" },
    ],
  },
  {
    stem: "Which vitamin-deficiency and clinical-finding pairs are correctly matched? Select all that apply.",
    type: "MULTI",
    topic: "Thiamine, Riboflavin & Niacin",
    explanation:
      "Thiamine deficiency causes Wernicke-Korsakoff and beriberi; niacin deficiency causes pellagra (the three D's); riboflavin deficiency causes cheilosis and angular stomatitis. Scurvy is vitamin C, not riboflavin, deficiency.",
    choices: [
      { text: "Thiamine — Wernicke-Korsakoff and beriberi", isCorrect: true },
      { text: "Niacin — pellagra", isCorrect: true },
      { text: "Riboflavin — cheilosis and angular stomatitis", isCorrect: true },
      { text: "Riboflavin — scurvy" },
      { text: "Niacin — night blindness" },
    ],
  },
  {
    stem: "Vitamin B6 (pyridoxal phosphate) is required for the synthesis of several neurotransmitters and of heme. A deficiency can therefore cause:",
    topic: "B6, Biotin & Pantothenate",
    explanation:
      "B6 deficiency can cause a sideroblastic anemia (impaired ALA synthase), peripheral neuropathy, and seizures from reduced GABA synthesis; it is a cofactor for decarboxylases and transaminases broadly.",
    choices: [
      { text: "Sideroblastic anemia, neuropathy, and seizures", isCorrect: true },
      { text: "Megaloblastic anemia only" },
      { text: "Night blindness" },
      { text: "Bleeding disorders" },
      { text: "Rickets" },
    ],
  },
  {
    stem: "True or False: Because most B vitamins act as coenzymes in energy metabolism and are water-soluble with limited storage, their deficiencies tend to appear relatively quickly compared with fat-soluble vitamins.",
    type: "TRUE_FALSE",
    topic: "B6, Biotin & Pantothenate",
    explanation:
      "True. Water-soluble vitamins (except B12, which is stored substantially in the liver) have limited body stores and are excreted in urine, so inadequate intake produces deficiency more rapidly than for stored fat-soluble vitamins.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Zinc deficiency, seen in acrodermatitis enteropathica or with poor intake, characteristically causes:",
    topic: "Vitamin C & Trace Minerals",
    explanation:
      "Zinc deficiency causes a perioral and acral dermatitis, impaired wound healing, hypogonadism, and altered taste and smell; zinc is a cofactor for many metalloenzymes and zinc-finger transcription factors.",
    choices: [
      { text: "Dermatitis, poor wound healing, and impaired taste", isCorrect: true },
      { text: "Night blindness and xerophthalmia" },
      { text: "Bleeding gums and corkscrew hairs" },
      { text: "Goiter and hypothyroidism" },
      { text: "Megaloblastic anemia" },
    ],
  },
  {
    stem: "Dietary iodine deficiency leads to goiter and hypothyroidism because iodine is required to:",
    topic: "Vitamin C & Trace Minerals",
    explanation:
      "Iodine is incorporated into tyrosine residues of thyroglobulin to form thyroid hormones T3 and T4; deficiency lowers hormone output, raising TSH and enlarging the thyroid (goiter).",
    choices: [
      { text: "Synthesize thyroid hormones T3 and T4", isCorrect: true },
      { text: "Build hemoglobin" },
      { text: "Cross-link collagen" },
      { text: "Act as an antioxidant" },
      { text: "Absorb calcium" },
    ],
  },
  {
    stem: "Copper deficiency can produce an anemia and neutropenia and, importantly, may mimic B12 deficiency neurologically. Copper is a cofactor for which enzymes? Select all that apply.",
    type: "MULTI",
    topic: "Vitamin C & Trace Minerals",
    explanation:
      "Copper-dependent enzymes include cytochrome c oxidase (ETC complex IV), lysyl oxidase (collagen/elastin cross-linking), superoxide dismutase (cytosolic), and ceruloplasmin/ferroxidase for iron handling. Glutathione peroxidase is selenium-dependent, not copper-dependent.",
    choices: [
      { text: "Cytochrome c oxidase", isCorrect: true },
      { text: "Lysyl oxidase", isCorrect: true },
      { text: "Superoxide dismutase (Cu/Zn form)", isCorrect: true },
      { text: "Ceruloplasmin (ferroxidase)", isCorrect: true },
      { text: "Glutathione peroxidase" },
    ],
  },
  {
    stem: "Basal metabolic rate is the energy expended:",
    topic: "Energy Balance & Malnutrition",
    explanation:
      "BMR is the energy used at complete rest, in a post-absorptive, thermoneutral state, to maintain vital functions; it is the largest component of daily expenditure in most people and scales with lean body mass.",
    choices: [
      { text: "At rest to maintain basic vital functions", isCorrect: true },
      { text: "Only during vigorous exercise" },
      { text: "Only while digesting a meal" },
      { text: "During sleep exclusively after eating" },
      { text: "Only in cold environments" },
    ],
  },
  {
    stem: "Which single feature most distinguishes kwashiorkor from marasmus on examination?",
    topic: "Energy Balance & Malnutrition",
    explanation:
      "Edema (from hypoalbuminemia) is the hallmark that separates kwashiorkor (protein deficiency with some calories) from marasmus (global calorie deprivation with severe wasting and no edema).",
    choices: [
      { text: "Presence of edema in kwashiorkor", isCorrect: true },
      { text: "Severe wasting only in kwashiorkor" },
      { text: "Edema only in marasmus" },
      { text: "Obesity in kwashiorkor" },
      { text: "Normal albumin in kwashiorkor" },
    ],
  },
  {
    stem: "True or False: An essential nutrient is one the body cannot synthesize in adequate amounts and must obtain from the diet, which is why the essential amino acids and essential fatty acids must be consumed.",
    type: "TRUE_FALSE",
    topic: "Energy Balance & Malnutrition",
    explanation:
      "True. Essential nutrients, including the essential amino acids (e.g., leucine, lysine) and essential fatty acids (linoleic and alpha-linolenic acid), cannot be made in sufficient quantity and are required in the diet.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "After a mixed meal, dietary triglycerides packaged by intestinal cells are transported in the blood as:",
    topic: "The Fed (Absorptive) State",
    explanation:
      "Enterocytes package absorbed dietary fat into chylomicrons, which carry triglyceride through lymph and blood to tissues, where lipoprotein lipase releases fatty acids; this is the fed-state lipid transport route.",
    choices: [
      { text: "Chylomicrons", isCorrect: true },
      { text: "VLDL made by muscle" },
      { text: "LDL from the liver" },
      { text: "Free fatty acids bound to albumin only" },
      { text: "HDL exclusively" },
    ],
  },
  {
    stem: "In the fed state, elevated insulin activates acetyl-CoA carboxylase, increasing malonyl-CoA. Malonyl-CoA both drives fatty-acid synthesis and:",
    topic: "The Fed (Absorptive) State",
    explanation:
      "Malonyl-CoA inhibits carnitine palmitoyltransferase I, blocking fatty-acid entry into mitochondria for oxidation; this prevents simultaneous synthesis and breakdown of fatty acids in the fed state.",
    choices: [
      { text: "Inhibits carnitine palmitoyltransferase I to block fat oxidation", isCorrect: true },
      { text: "Activates beta-oxidation strongly" },
      { text: "Stimulates ketogenesis" },
      { text: "Blocks glycolysis" },
      { text: "Promotes gluconeogenesis" },
    ],
  },
  {
    stem: "Glycerol released from adipose lipolysis contributes to fasting blood glucose because it can enter:",
    topic: "Fasting & Starvation",
    explanation:
      "Glycerol is phosphorylated (mainly in the liver) and enters gluconeogenesis as dihydroxyacetone phosphate; fatty acids, by contrast, cannot be converted to glucose in humans.",
    choices: [
      { text: "Gluconeogenesis", isCorrect: true },
      { text: "Ketone-body synthesis only" },
      { text: "The urea cycle" },
      { text: "Glycogen synthesis in muscle" },
      { text: "Protein synthesis" },
    ],
  },
  {
    stem: "True or False: Humans cannot convert fatty acids to glucose because the pyruvate dehydrogenase reaction is irreversible, so acetyl-CoA from even-chain fatty acids cannot become net glucose.",
    type: "TRUE_FALSE",
    topic: "Fasting & Starvation",
    explanation:
      "True. Since pyruvate dehydrogenase is irreversible, acetyl-CoA from fatty-acid oxidation cannot be turned into pyruvate for gluconeogenesis, so even-chain fatty acids provide no net glucose; only glycerol and odd-chain propionyl-CoA contribute.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "During prolonged starvation the kidney becomes an important gluconeogenic organ and also:",
    topic: "Fasting & Starvation",
    explanation:
      "In prolonged starvation the kidney contributes substantially to gluconeogenesis and uses ammonia from glutamine to buffer the acids produced by ketone bodies, helping preserve acid-base balance.",
    choices: [
      { text: "Excretes ammonium to buffer ketoacid load", isCorrect: true },
      { text: "Stops all metabolic activity" },
      { text: "Synthesizes ketone bodies for export" },
      { text: "Becomes the main site of urea synthesis" },
      { text: "Releases stored glycogen as glucose" },
    ],
  },
  {
    stem: "Which fuel does the heart preferentially use under normal aerobic conditions?",
    topic: "Integrated Tissue Metabolism",
    explanation:
      "Cardiac muscle is highly oxidative and prefers fatty acids as its main fuel at rest, though it flexibly uses glucose, lactate, and ketones; its dense mitochondria support continuous aerobic ATP production.",
    choices: [
      { text: "Fatty acids", isCorrect: true },
      { text: "Only glucose" },
      { text: "Only ketone bodies" },
      { text: "Only lactate" },
      { text: "It cannot oxidize fatty acids" },
    ],
  },
  {
    stem: "Which statements about brain fuel use are correct? Select all that apply.",
    type: "MULTI",
    topic: "Integrated Tissue Metabolism",
    explanation:
      "The brain normally depends on glucose, cannot use long-chain fatty acids (they do not cross the blood-brain barrier well), and adapts to ketone bodies during prolonged starvation to reduce glucose (and thus protein) breakdown. It is not fueled mainly by fatty acids day to day.",
    choices: [
      { text: "It normally relies on glucose", isCorrect: true },
      { text: "It cannot use long-chain fatty acids well", isCorrect: true },
      { text: "It adapts to ketone bodies in prolonged starvation", isCorrect: true },
      { text: "It is normally fueled mainly by fatty acids" },
      { text: "It uses only lactate at rest" },
    ],
  },
  {
    stem: "The insulin-to-glucagon ratio is the master switch of fuel metabolism. A high ratio after a meal signals the liver to:",
    topic: "Hormonal Integration",
    explanation:
      "A high insulin-to-glucagon ratio signals fuel abundance, so the liver stores glucose as glycogen, runs glycolysis, and makes fatty acids, while suppressing glucose output; the reverse ratio signals fasting.",
    choices: [
      { text: "Store fuel: glycogen and fat synthesis", isCorrect: true },
      { text: "Release glucose by glycogenolysis" },
      { text: "Maximize ketogenesis" },
      { text: "Break down muscle protein" },
      { text: "Halt all glycolysis" },
    ],
  },
  {
    stem: "Somatostatin, secreted by pancreatic delta cells, contributes to fuel regulation by:",
    topic: "Hormonal Integration",
    explanation:
      "Somatostatin inhibits the secretion of both insulin and glucagon (and other GI hormones), acting as a general dampener of nutrient absorption and endocrine output.",
    choices: [
      { text: "Inhibiting secretion of both insulin and glucagon", isCorrect: true },
      { text: "Stimulating insulin only" },
      { text: "Stimulating glucagon only" },
      { text: "Raising blood glucose directly" },
      { text: "Acting as the main fed-state hormone" },
    ],
  },
  {
    stem: "Methanol and ethylene glycol poisoning are treated with fomepizole (or ethanol) because these agents:",
    topic: "Ethanol Metabolism",
    explanation:
      "Fomepizole inhibits alcohol dehydrogenase, and ethanol competes for it, slowing the conversion of methanol and ethylene glycol into their toxic acid metabolites (formic acid, oxalate) and allowing safe elimination.",
    choices: [
      { text: "Inhibit or compete for alcohol dehydrogenase, blocking toxic metabolites", isCorrect: true },
      { text: "Directly neutralize the acids in blood" },
      { text: "Speed conversion to toxic metabolites" },
      { text: "Enhance renal reabsorption of the toxins" },
      { text: "Chelate the parent alcohols" },
    ],
  },
  {
    stem: "True or False: Chronic heavy alcohol use can induce the microsomal ethanol-oxidizing system (CYP2E1), increasing tolerance and also the toxicity of some drugs metabolized by that system.",
    type: "TRUE_FALSE",
    topic: "Ethanol Metabolism",
    explanation:
      "True. Induction of CYP2E1 with chronic alcohol use raises ethanol clearance (tolerance) and can increase generation of toxic metabolites, notably the hepatotoxic metabolite of acetaminophen, raising overdose risk.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Metformin, a first-line drug for type 2 diabetes, lowers blood glucose mainly by:",
    topic: "Diabetes & Metabolic Syndrome",
    explanation:
      "Metformin decreases hepatic gluconeogenesis (and improves insulin sensitivity) without stimulating insulin secretion, so it does not by itself cause hypoglycemia; a rare risk is lactic acidosis.",
    choices: [
      { text: "Reducing hepatic gluconeogenesis", isCorrect: true },
      { text: "Stimulating insulin release like a sulfonylurea" },
      { text: "Blocking intestinal fat absorption" },
      { text: "Increasing ketone production" },
      { text: "Inhibiting glucagon completely" },
    ],
  },
  {
    stem: "Which laboratory value best distinguishes type 1 from type 2 diabetes by reflecting endogenous insulin production?",
    topic: "Diabetes & Metabolic Syndrome",
    explanation:
      "C-peptide, co-secreted with insulin, is low or absent in type 1 diabetes (beta-cell destruction) and normal or high in type 2 (insulin resistance), helping classify the disease.",
    choices: [
      { text: "C-peptide", isCorrect: true },
      { text: "Hemoglobin A1c" },
      { text: "Random glucose" },
      { text: "Serum sodium" },
      { text: "Anion gap" },
    ],
  },
  {
    stem: "A patient with total parenteral nutrition lacking trace elements develops a skin rash, poor healing, and taste changes. The most likely deficiency is:",
    topic: "Clinical Application",
    explanation:
      "Zinc deficiency during inadequately supplemented parenteral nutrition causes dermatitis, impaired wound healing, and dysgeusia; trace-element repletion resolves it.",
    choices: [
      { text: "Zinc", isCorrect: true },
      { text: "Vitamin A" },
      { text: "Calcium" },
      { text: "Vitamin K" },
      { text: "Folate" },
    ],
  },
  {
    stem: "A 3-week-old exclusively breastfed infant presents with bleeding. The most likely deficiency, preventable by a routine newborn injection, is:",
    topic: "Clinical Application",
    explanation:
      "Breast milk is low in vitamin K, so exclusively breastfed infants who missed prophylaxis can develop vitamin K deficiency bleeding; the newborn vitamin K injection prevents this.",
    choices: [
      { text: "Vitamin K", isCorrect: true },
      { text: "Vitamin D" },
      { text: "Vitamin C" },
      { text: "Iron" },
      { text: "Thiamine" },
    ],
  },
  {
    stem: "Which set of changes correctly describes well-controlled early fasting (overnight) in a healthy adult? Select all that apply.",
    type: "MULTI",
    topic: "Clinical Application",
    explanation:
      "Overnight fasting lowers insulin and raises glucagon, so hepatic glycogenolysis maintains glucose with gluconeogenesis increasing, and mild lipolysis begins; ketones remain low this early. Blood glucose does not rise above the fed range.",
    choices: [
      { text: "Insulin falls and glucagon rises", isCorrect: true },
      { text: "Hepatic glycogenolysis maintains blood glucose", isCorrect: true },
      { text: "Gluconeogenesis begins to contribute", isCorrect: true },
      { text: "Blood glucose rises well above the fed range" },
      { text: "Large ketone accumulation occurs within a few hours" },
    ],
  },
  {
    stem: "A patient with pernicious anemia lacks intrinsic factor. The resulting vitamin B12 deficiency causes a megaloblastic anemia and, characteristically, which neurologic complication?",
    topic: "Clinical Application",
    explanation:
      "B12 deficiency causes subacute combined degeneration of the dorsal columns and corticospinal tracts, producing sensory ataxia and weakness; intrinsic-factor loss from autoimmune gastritis prevents B12 absorption.",
    choices: [
      { text: "Subacute combined degeneration of the spinal cord", isCorrect: true },
      { text: "Acute cerebellar hemorrhage" },
      { text: "Optic-nerve glioma" },
      { text: "Peripheral edema" },
      { text: "Bitemporal hemianopia" },
    ],
  },
  {
    stem: "True or False: A capstone principle of metabolism is that pathways of synthesis and breakdown are reciprocally regulated and often separated in location or timing, preventing wasteful futile cycles.",
    type: "TRUE_FALSE",
    topic: "Clinical Application",
    explanation:
      "True. Opposing pathways such as glycolysis/gluconeogenesis and fatty-acid synthesis/oxidation are reciprocally controlled by hormones and allosteric signals, and sometimes compartmentalized, so the cell does not simultaneously build and destroy the same molecule.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "An obese patient with insulin resistance has high fasting triglycerides and low HDL. The elevated triglycerides largely reflect overproduction by the liver of:",
    topic: "Clinical Application",
    explanation:
      "Insulin resistance increases hepatic very-low-density lipoprotein (VLDL) output, raising serum triglycerides, while HDL falls; this atherogenic pattern is typical of metabolic syndrome and type 2 diabetes.",
    choices: [
      { text: "Very-low-density lipoprotein (VLDL)", isCorrect: true },
      { text: "Chylomicrons from the gut" },
      { text: "LDL only" },
      { text: "HDL" },
      { text: "Free glycerol" },
    ],
  },
];
