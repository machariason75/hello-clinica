/**
 * BIOCHEMISTRY — PRACTICE SET 4
 * Lipid Metabolism
 *
 * Difficulty: Intermediate. Digestion and transport of fat, beta-oxidation and
 * the carnitine shuttle, ketone bodies, fatty acid and cholesterol synthesis,
 * lipoproteins and the dyslipidemias, eicosanoids, and the sphingolipid/lysosomal
 * storage diseases. Pairs with Set 3 (Carbohydrate Metabolism) to build Exam 2.
 *
 * Item mix: single-best-answer, select-all-that-apply, and true/false, with a
 * lipid-panel report and ward scenarios. Option counts vary from four to seven,
 * as on real US board exams. Correct-answer position is randomized at seed time
 * by the engine, so no positional pattern is exploitable.
 * US conventional units and nomenclature throughout.
 */

import type { Q } from "../_lib/qbank";

export const BIOCHEMISTRY_SET_4: Q[] = [
  {
    stem: "Dietary triglycerides are emulsified by bile salts and hydrolyzed in the small intestine mainly by:",
    topic: "Fatty Acid Structure & Digestion",
    explanation:
      "Pancreatic lipase, aided by colipase and bile-salt emulsification, hydrolyzes dietary triglyceride to monoglycerides and free fatty acids for absorption.",
    choices: [
      { text: "Pancreatic lipase (with colipase)", isCorrect: true },
      { text: "Lipoprotein lipase" },
      { text: "Hormone-sensitive lipase" },
      { text: "Hepatic lipase" },
      { text: "Phospholipase A2 only" },
    ],
  },
  {
    stem: "After absorption, long-chain fatty acids are packaged by enterocytes into which lipoprotein for delivery via lymph?",
    topic: "Fatty Acid Structure & Digestion",
    explanation:
      "Enterocytes re-esterify absorbed fatty acids into triglyceride and package it into chylomicrons, which enter lymphatics and then blood to deliver dietary fat.",
    choices: [
      { text: "Chylomicrons", isCorrect: true },
      { text: "VLDL" },
      { text: "LDL" },
      { text: "HDL" },
      { text: "IDL" },
    ],
  },
  {
    stem: "Linoleic and alpha-linolenic acids are essential fatty acids because humans:",
    topic: "Fatty Acid Structure & Digestion",
    explanation:
      "Humans lack the desaturases to introduce double bonds beyond carbon 9, so omega-6 and omega-3 fatty acids must be obtained from the diet.",
    choices: [
      { text: "Cannot desaturate beyond carbon 9", isCorrect: true },
      { text: "Cannot absorb them from food" },
      { text: "Cannot elongate any fatty acid" },
      { text: "Break them down too quickly" },
    ],
  },
  {
    stem: "True or False: Medium-chain fatty acids can be absorbed directly into the portal blood and enter mitochondria without the carnitine shuttle.",
    type: "TRUE_FALSE",
    topic: "Fatty Acid Structure & Digestion",
    explanation:
      "True. Medium-chain fatty acids are water-soluble enough to enter portal blood and cross the mitochondrial membrane independently of carnitine, which is why MCT oil is useful in certain fat-malabsorption states.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Each round of beta-oxidation shortens the fatty acyl chain by two carbons and produces:",
    topic: "Fatty Acid Oxidation",
    explanation:
      "One cycle yields one acetyl-CoA, one FADH2, and one NADH; repeated cycles fully degrade the chain, feeding acetyl-CoA to the TCA cycle and reduced coenzymes to the electron transport chain.",
    choices: [
      { text: "One acetyl-CoA, one FADH2, and one NADH", isCorrect: true },
      { text: "Two acetyl-CoA and one ATP" },
      { text: "One acetyl-CoA and one GTP" },
      { text: "Only NADPH" },
      { text: "One malonyl-CoA" },
    ],
  },
  {
    stem: "Beta-oxidation of fatty acids occurs in which compartment for long-chain species?",
    topic: "Fatty Acid Oxidation",
    explanation:
      "Long-chain fatty acid beta-oxidation occurs in the mitochondrial matrix after carnitine-mediated import; very-long-chain fatty acids are handled first in peroxisomes.",
    choices: [
      { text: "Mitochondrial matrix", isCorrect: true },
      { text: "Cytosol" },
      { text: "Endoplasmic reticulum" },
      { text: "Golgi apparatus" },
      { text: "Nucleus" },
    ],
  },
  {
    stem: "Oxidation of odd-chain fatty acids yields propionyl-CoA, which is converted (via a B12-dependent step) to which TCA intermediate, making it glucogenic?",
    topic: "Fatty Acid Oxidation",
    explanation:
      "Propionyl-CoA is carboxylated and rearranged by methylmalonyl-CoA mutase (vitamin B12) to succinyl-CoA, a TCA intermediate; this small glucogenic contribution is unique to odd-chain fatty acids.",
    choices: [
      { text: "Succinyl-CoA", isCorrect: true },
      { text: "Acetyl-CoA" },
      { text: "Citrate" },
      { text: "Oxaloacetate directly" },
      { text: "Malonyl-CoA" },
    ],
  },
  {
    stem: "Which products of fatty acid beta-oxidation feed directly into ATP generation? Select all that apply.",
    type: "MULTI",
    topic: "Fatty Acid Oxidation",
    explanation:
      "Acetyl-CoA enters the TCA cycle, while FADH2 and NADH deliver electrons to the respiratory chain; malonyl-CoA is a synthesis intermediate and inhibitor, not a beta-oxidation product.",
    choices: [
      { text: "Acetyl-CoA (to the TCA cycle)", isCorrect: true },
      { text: "FADH2 (to Complex II/ETF)", isCorrect: true },
      { text: "NADH (to Complex I)", isCorrect: true },
      { text: "Malonyl-CoA" },
      { text: "UDP-glucose" },
    ],
  },
  {
    stem: "The carnitine shuttle imports long-chain fatty acyl groups into mitochondria. Its rate-limiting enzyme, inhibited by malonyl-CoA, is:",
    topic: "Carnitine Shuttle & FAO Disorders",
    explanation:
      "Carnitine palmitoyltransferase I (CPT-I) on the outer mitochondrial membrane is rate-limiting; malonyl-CoA (high when synthesis is active) inhibits it, preventing simultaneous synthesis and oxidation.",
    choices: [
      { text: "Carnitine palmitoyltransferase I (CPT-I)", isCorrect: true },
      { text: "Carnitine palmitoyltransferase II" },
      { text: "Acyl-CoA synthetase" },
      { text: "Carnitine-acylcarnitine translocase" },
      { text: "Acetyl-CoA carboxylase" },
    ],
  },
  {
    stem: "A child develops hypoketotic hypoglycemia, vomiting, and lethargy during fasting or illness; dicarboxylic aciduria is present. The most common fatty acid oxidation defect responsible is:",
    topic: "Carnitine Shuttle & FAO Disorders",
    explanation:
      "Medium-chain acyl-CoA dehydrogenase (MCAD) deficiency blocks beta-oxidation of medium-chain fats, so during fasting the liver cannot make ketones or spare glucose, causing hypoketotic hypoglycemia.",
    choices: [
      { text: "Medium-chain acyl-CoA dehydrogenase (MCAD) deficiency", isCorrect: true },
      { text: "Glucose-6-phosphatase deficiency" },
      { text: "Pyruvate kinase deficiency" },
      { text: "Ornithine transcarbamylase deficiency" },
      { text: "Lactase deficiency" },
      { text: "HMG-CoA reductase deficiency" },
    ],
  },
  {
    stem: "Why is hypoglycemia during fasting worsened in fatty acid oxidation disorders?",
    topic: "Carnitine Shuttle & FAO Disorders",
    explanation:
      "Without fatty acid oxidation, tissues cannot switch to fat-derived energy or ketones, so they keep consuming glucose, and the liver loses the acetyl-CoA that normally activates gluconeogenesis.",
    choices: [
      { text: "Tissues cannot use fat/ketones and keep burning glucose", isCorrect: true },
      { text: "Excess ketones suppress appetite" },
      { text: "Fatty acids are converted to glucose" },
      { text: "Insulin secretion rises" },
    ],
  },
  {
    stem: "True or False: In MCAD deficiency the hypoglycemia is characteristically 'hypoketotic,' because impaired fatty acid oxidation prevents normal ketone body production during fasting.",
    type: "TRUE_FALSE",
    topic: "Carnitine Shuttle & FAO Disorders",
    explanation:
      "True. The inability to oxidize fatty acids blocks hepatic ketogenesis, so affected children become hypoglycemic without the compensatory ketosis that normally accompanies fasting.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Ketone bodies are synthesized in which organ and compartment during prolonged fasting?",
    topic: "Ketone Body Metabolism",
    explanation:
      "The liver mitochondria make acetoacetate and beta-hydroxybutyrate from acetyl-CoA when fat oxidation exceeds TCA capacity; the liver exports them for use by other tissues.",
    choices: [
      { text: "Liver mitochondria", isCorrect: true },
      { text: "Muscle cytosol" },
      { text: "Brain mitochondria" },
      { text: "Adipose cytosol" },
      { text: "Kidney peroxisomes" },
    ],
  },
  {
    stem: "The rate-limiting enzyme of hepatic ketogenesis is:",
    topic: "Ketone Body Metabolism",
    explanation:
      "HMG-CoA synthase (mitochondrial) commits acetyl-CoA to ketone body formation; note this mitochondrial isoform is distinct from the cytosolic HMG-CoA reductase pathway of cholesterol synthesis.",
    choices: [
      { text: "Mitochondrial HMG-CoA synthase", isCorrect: true },
      { text: "HMG-CoA reductase" },
      { text: "Thiolase" },
      { text: "HMG-CoA lyase" },
      { text: "Acetyl-CoA carboxylase" },
    ],
  },
  {
    stem: "Why can the liver make ketone bodies but not use them for energy?",
    topic: "Ketone Body Metabolism",
    explanation:
      "The liver lacks thiophorase (succinyl-CoA:3-ketoacid CoA transferase), the enzyme that activates acetoacetate for oxidation, so it exports ketones for peripheral tissues to consume.",
    choices: [
      { text: "It lacks thiophorase to reactivate acetoacetate", isCorrect: true },
      { text: "It lacks all mitochondria" },
      { text: "It cannot take up ketones" },
      { text: "It converts them straight to glucose" },
      { text: "It stores them as triglyceride" },
    ],
  },
  {
    stem: "Which tissues can use ketone bodies as fuel, especially during prolonged fasting? Select all that apply.",
    type: "MULTI",
    topic: "Ketone Body Metabolism",
    explanation:
      "Brain (after adaptation), cardiac muscle, and skeletal muscle oxidize ketone bodies; red blood cells cannot (no mitochondria) and the liver cannot use them despite making them.",
    choices: [
      { text: "Brain (after several days of fasting)", isCorrect: true },
      { text: "Cardiac muscle", isCorrect: true },
      { text: "Skeletal muscle", isCorrect: true },
      { text: "Red blood cells" },
      { text: "Liver" },
    ],
  },
  {
    stem: "The committed, rate-limiting step of fatty acid synthesis is catalyzed by acetyl-CoA carboxylase, which makes:",
    topic: "Fatty Acid Synthesis",
    explanation:
      "Acetyl-CoA carboxylase (biotin-dependent) converts acetyl-CoA to malonyl-CoA, the two-carbon donor for chain elongation and a key regulator that also inhibits CPT-I.",
    choices: [
      { text: "Malonyl-CoA from acetyl-CoA", isCorrect: true },
      { text: "Acetoacetyl-CoA" },
      { text: "Palmitate directly" },
      { text: "Citrate" },
      { text: "HMG-CoA" },
    ],
  },
  {
    stem: "Fatty acid synthesis occurs in the cytosol and requires NADPH. A major source of that NADPH is:",
    topic: "Fatty Acid Synthesis",
    explanation:
      "The pentose phosphate pathway (and malic enzyme) supply the NADPH used as reducing power for fatty acid synthesis, which is why lipogenic tissues are rich in these pathways.",
    choices: [
      { text: "The pentose phosphate pathway", isCorrect: true },
      { text: "The electron transport chain" },
      { text: "Beta-oxidation" },
      { text: "The urea cycle" },
      { text: "Glycogenolysis" },
    ],
  },
  {
    stem: "Acetyl-CoA generated in mitochondria is exported to the cytosol for fatty acid synthesis in the form of:",
    topic: "Fatty Acid Synthesis",
    explanation:
      "Acetyl-CoA cannot cross the inner membrane directly, so it condenses with oxaloacetate to citrate, which is exported and cleaved by ATP-citrate lyase back to acetyl-CoA in the cytosol.",
    choices: [
      { text: "Citrate", isCorrect: true },
      { text: "Malonyl-CoA" },
      { text: "Acetoacetate" },
      { text: "Carnitine ester" },
      { text: "Pyruvate" },
    ],
  },
  {
    stem: "Acetyl-CoA carboxylase is activated by citrate and inhibited by palmitoyl-CoA and by phosphorylation from which energy-sensing kinase?",
    topic: "Fatty Acid Synthesis",
    explanation:
      "AMP-activated protein kinase phosphorylates and inhibits acetyl-CoA carboxylase when energy is low, halting fatty acid synthesis; citrate (abundant fuel) activates it allosterically.",
    choices: [
      { text: "AMP-activated protein kinase (AMPK)", isCorrect: true },
      { text: "Protein kinase A only" },
      { text: "Pyruvate kinase" },
      { text: "Phosphorylase kinase" },
      { text: "Casein kinase" },
    ],
  },
  {
    stem: "True or False: Malonyl-CoA both supplies two-carbon units for fatty acid synthesis and inhibits carnitine palmitoyltransferase I, preventing simultaneous synthesis and oxidation of fatty acids.",
    type: "TRUE_FALSE",
    topic: "Fatty Acid Synthesis",
    explanation:
      "True. This reciprocal control means that when synthesis is active (high malonyl-CoA), fatty acids are blocked from entering mitochondria for oxidation, avoiding a futile cycle.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "In adipose tissue, hormone-sensitive lipase releases fatty acids from stored triglyceride. Its activity is increased by:",
    topic: "Triglyceride & Phospholipid Metabolism",
    explanation:
      "Catecholamines and glucagon raise cAMP and PKA, which phosphorylate and activate hormone-sensitive lipase; insulin dephosphorylates and inhibits it, restraining lipolysis in the fed state.",
    choices: [
      { text: "Catecholamines/glucagon via cAMP-PKA", isCorrect: true },
      { text: "Insulin" },
      { text: "High glucose alone" },
      { text: "Malonyl-CoA" },
      { text: "Bile salts" },
    ],
  },
  {
    stem: "Lung surfactant that prevents alveolar collapse is composed chiefly of which phospholipid?",
    topic: "Triglyceride & Phospholipid Metabolism",
    explanation:
      "Dipalmitoylphosphatidylcholine (lecithin) is the principal surfactant lipid; its deficiency in premature infants causes neonatal respiratory distress syndrome.",
    choices: [
      { text: "Dipalmitoylphosphatidylcholine (lecithin)", isCorrect: true },
      { text: "Phosphatidylserine" },
      { text: "Cardiolipin" },
      { text: "Sphingomyelin" },
      { text: "Phosphatidylinositol" },
    ],
  },
  {
    stem: "A lecithin-to-sphingomyelin (L/S) ratio greater than 2.0 in amniotic fluid indicates:",
    topic: "Triglyceride & Phospholipid Metabolism",
    explanation:
      "An L/S ratio above 2 signals adequate surfactant and fetal lung maturity, predicting a low risk of neonatal respiratory distress syndrome.",
    choices: [
      { text: "Fetal lung maturity", isCorrect: true },
      { text: "Fetal lung immaturity" },
      { text: "Fetal anemia" },
      { text: "Neural tube defect" },
      { text: "Gestational diabetes" },
    ],
  },
  {
    stem: "The rate-limiting enzyme of cholesterol synthesis, and the target of statin drugs, is:",
    topic: "Cholesterol Synthesis & Regulation",
    explanation:
      "HMG-CoA reductase (cytosolic/ER) catalyzes the committed step, converting HMG-CoA to mevalonate; statins competitively inhibit it, lowering cholesterol and upregulating LDL receptors.",
    choices: [
      { text: "HMG-CoA reductase", isCorrect: true },
      { text: "HMG-CoA synthase" },
      { text: "Squalene synthase" },
      { text: "Acetyl-CoA carboxylase" },
      { text: "Lecithin-cholesterol acyltransferase" },
    ],
  },
  {
    stem: "How do statins lower plasma LDL cholesterol beyond simply reducing synthesis?",
    topic: "Cholesterol Synthesis & Regulation",
    explanation:
      "By lowering intracellular cholesterol, statins increase hepatic LDL-receptor expression, so the liver clears more LDL from the blood, amplifying the cholesterol-lowering effect.",
    choices: [
      { text: "They upregulate hepatic LDL receptors", isCorrect: true },
      { text: "They block intestinal bile-salt reabsorption" },
      { text: "They inhibit lipoprotein lipase" },
      { text: "They increase VLDL secretion" },
      { text: "They convert LDL to HDL" },
    ],
  },
  {
    stem: "Which enzyme esterifies cholesterol within HDL in the plasma, trapping it for reverse cholesterol transport?",
    topic: "Cholesterol Synthesis & Regulation",
    explanation:
      "Lecithin-cholesterol acyltransferase (LCAT), activated by apoA-I, esterifies cholesterol on HDL so it moves into the core, maturing HDL and enabling return of cholesterol to the liver.",
    choices: [
      { text: "Lecithin-cholesterol acyltransferase (LCAT)", isCorrect: true },
      { text: "Acyl-CoA cholesterol acyltransferase (ACAT)" },
      { text: "Cholesteryl ester transfer protein" },
      { text: "HMG-CoA reductase" },
      { text: "Hepatic lipase" },
    ],
  },
  {
    stem: "Lipoprotein lipase, anchored on capillary endothelium, hydrolyzes triglycerides in chylomicrons and VLDL. Which apolipoprotein activates it?",
    topic: "Lipoproteins & Transport",
    explanation:
      "ApoC-II, transferred from HDL, is the required activator of lipoprotein lipase; its deficiency causes severe hypertriglyceridemia from failure to clear chylomicrons and VLDL.",
    choices: [
      { text: "ApoC-II", isCorrect: true },
      { text: "ApoB-100" },
      { text: "ApoE" },
      { text: "ApoA-I" },
      { text: "ApoB-48" },
    ],
  },
  {
    stem: "Which apolipoprotein is the ligand for hepatic uptake of LDL via the LDL receptor?",
    topic: "Lipoproteins & Transport",
    explanation:
      "ApoB-100 on LDL is recognized by the hepatic LDL receptor (which also binds apoE); defects in either the receptor or apoB-100 raise plasma LDL.",
    choices: [
      { text: "ApoB-100", isCorrect: true },
      { text: "ApoB-48" },
      { text: "ApoC-II" },
      { text: "ApoA-I" },
      { text: "ApoA-IV" },
    ],
  },
  {
    stem: "HDL is described as performing reverse cholesterol transport because it:",
    topic: "Lipoproteins & Transport",
    explanation:
      "HDL collects excess cholesterol from peripheral tissues and returns it to the liver for excretion, an atheroprotective role reflected in HDL's inverse association with cardiovascular risk.",
    choices: [
      { text: "Returns cholesterol from tissues to the liver", isCorrect: true },
      { text: "Delivers cholesterol to peripheral tissues" },
      { text: "Carries dietary triglyceride from the gut" },
      { text: "Transports bile directly" },
      { text: "Converts LDL into chylomicrons" },
    ],
  },
  {
    stem: "Match each lipoprotein to its main role. Select all correct pairings.",
    type: "MULTI",
    topic: "Lipoproteins & Transport",
    explanation:
      "Chylomicrons carry dietary (exogenous) triglyceride, VLDL carries hepatic (endogenous) triglyceride, LDL delivers cholesterol to tissues, and HDL performs reverse cholesterol transport. IDL is a VLDL remnant, not the primary dietary-fat carrier.",
    choices: [
      { text: "Chylomicrons — dietary triglyceride transport", isCorrect: true },
      { text: "VLDL — endogenous (hepatic) triglyceride transport", isCorrect: true },
      { text: "LDL — cholesterol delivery to peripheral tissues", isCorrect: true },
      { text: "HDL — reverse cholesterol transport", isCorrect: true },
      { text: "IDL — primary transporter of dietary fat" },
    ],
  },
  {
    stem: "A child has tendon xanthomas, a strong family history of early myocardial infarction, and markedly elevated LDL. Familial hypercholesterolemia most often results from a defect in:",
    topic: "Dyslipidemias",
    explanation:
      "Familial hypercholesterolemia is usually caused by defective or absent LDL receptors (or defective apoB-100), so LDL is poorly cleared, causing very high LDL, xanthomas, and premature atherosclerosis.",
    choices: [
      { text: "The LDL receptor", isCorrect: true },
      { text: "Lipoprotein lipase" },
      { text: "ApoC-II" },
      { text: "HMG-CoA reductase" },
      { text: "LCAT" },
      { text: "Hormone-sensitive lipase" },
    ],
  },
  {
    stem: "A patient with triglycerides over 1000 mg/dL develops acute pancreatitis and eruptive xanthomas; chylomicrons fail to clear. The most likely defect is:",
    topic: "Dyslipidemias",
    explanation:
      "Lipoprotein lipase or apoC-II deficiency prevents clearance of chylomicrons and VLDL, causing extreme hypertriglyceridemia that can precipitate pancreatitis (familial chylomicronemia).",
    choices: [
      { text: "Lipoprotein lipase or apoC-II deficiency", isCorrect: true },
      { text: "LDL receptor deficiency" },
      { text: "HMG-CoA reductase excess" },
      { text: "ApoB-100 overexpression" },
      { text: "LCAT deficiency" },
    ],
  },
  {
    stem: "This fasting lipid panel is obtained:\n\n| Test | Result | Desirable |\n|---|---|---|\n| Total cholesterol | 320 mg/dL | <200 |\n| LDL | 240 mg/dL | <100 |\n| HDL | 45 mg/dL | >40 |\n| Triglycerides | 150 mg/dL | <150 |\n\nThe dominant abnormality best fits:",
    topic: "Dyslipidemias",
    explanation:
      "Markedly elevated LDL and total cholesterol with near-normal triglycerides points to a primary hypercholesterolemia such as familial hypercholesterolemia, driven by impaired LDL clearance.",
    choices: [
      { text: "Elevated LDL cholesterol (hypercholesterolemia)", isCorrect: true },
      { text: "Isolated severe hypertriglyceridemia" },
      { text: "Low HDL as the only problem" },
      { text: "A normal lipid panel" },
      { text: "Chylomicronemia" },
    ],
  },
  {
    stem: "Eicosanoids such as prostaglandins and thromboxanes are synthesized from which 20-carbon fatty acid released by phospholipase A2?",
    topic: "Eicosanoids",
    explanation:
      "Arachidonic acid, freed from membrane phospholipids by phospholipase A2, is the substrate for cyclooxygenase and lipoxygenase pathways that make prostaglandins, thromboxanes, and leukotrienes.",
    choices: [
      { text: "Arachidonic acid", isCorrect: true },
      { text: "Palmitic acid" },
      { text: "Linoleic acid stored as such" },
      { text: "Oleic acid" },
      { text: "Stearic acid" },
    ],
  },
  {
    stem: "Aspirin and other NSAIDs reduce inflammation by inhibiting which enzyme in eicosanoid synthesis?",
    topic: "Eicosanoids",
    explanation:
      "NSAIDs inhibit cyclooxygenase (COX), blocking prostaglandin and thromboxane synthesis; aspirin does so irreversibly by acetylating COX, which underlies its antiplatelet effect.",
    choices: [
      { text: "Cyclooxygenase (COX)", isCorrect: true },
      { text: "Lipoxygenase" },
      { text: "Phospholipase A2" },
      { text: "Thromboxane synthase only" },
      { text: "Prostacyclin synthase only" },
    ],
  },
  {
    stem: "Which statements about thromboxane A2 and prostacyclin (PGI2) are correct? Select all that apply.",
    type: "MULTI",
    topic: "Eicosanoids",
    explanation:
      "Thromboxane A2 (from platelets) promotes platelet aggregation and vasoconstriction, while prostacyclin (from endothelium) inhibits aggregation and causes vasodilation; low-dose aspirin favors the antithrombotic balance by preferentially inhibiting platelet thromboxane.",
    choices: [
      { text: "Thromboxane A2 promotes platelet aggregation", isCorrect: true },
      { text: "Prostacyclin inhibits platelet aggregation", isCorrect: true },
      { text: "Prostacyclin causes vasodilation", isCorrect: true },
      { text: "Thromboxane A2 causes vasodilation" },
      { text: "Prostacyclin is made mainly by platelets" },
    ],
  },
  {
    stem: "An infant of Ashkenazi descent has developmental regression, a cherry-red macula, and no hepatosplenomegaly; hexosaminidase A is deficient. The diagnosis is:",
    topic: "Sphingolipids & Lysosomal Storage",
    explanation:
      "Tay-Sachs disease is hexosaminidase A deficiency, causing GM2 ganglioside accumulation in neurons with a cherry-red spot and neurodegeneration, and characteristically without hepatosplenomegaly.",
    choices: [
      { text: "Tay-Sachs disease", isCorrect: true },
      { text: "Gaucher disease" },
      { text: "Niemann-Pick disease" },
      { text: "Fabry disease" },
      { text: "Krabbe disease" },
      { text: "Hurler syndrome" },
    ],
  },
  {
    stem: "The most common lysosomal storage disease, with glucocerebroside accumulation, hepatosplenomegaly, bone crises, and 'crumpled tissue-paper' macrophages, is:",
    topic: "Sphingolipids & Lysosomal Storage",
    explanation:
      "Gaucher disease results from glucocerebrosidase deficiency; lipid-laden macrophages ('Gaucher cells') infiltrate the spleen, liver, and marrow, causing organomegaly and bone disease.",
    choices: [
      { text: "Gaucher disease (glucocerebrosidase deficiency)", isCorrect: true },
      { text: "Tay-Sachs disease" },
      { text: "Fabry disease" },
      { text: "Metachromatic leukodystrophy" },
      { text: "Niemann-Pick disease" },
    ],
  },
  {
    stem: "An X-linked disorder with painful peripheral neuropathy, angiokeratomas, and renal failure from ceramide trihexoside accumulation is caused by deficiency of:",
    topic: "Sphingolipids & Lysosomal Storage",
    explanation:
      "Fabry disease is X-linked alpha-galactosidase A deficiency; globotriaosylceramide accumulates in vessels and organs, causing acroparesthesias, angiokeratomas, and progressive kidney disease.",
    choices: [
      { text: "Alpha-galactosidase A", isCorrect: true },
      { text: "Hexosaminidase A" },
      { text: "Glucocerebrosidase" },
      { text: "Sphingomyelinase" },
      { text: "Arylsulfatase A" },
      { text: "Galactocerebrosidase" },
    ],
  },
  {
    stem: "Niemann-Pick disease (types A/B), with hepatosplenomegaly and a cherry-red spot, results from deficiency of:",
    topic: "Sphingolipids & Lysosomal Storage",
    explanation:
      "Sphingomyelinase deficiency causes sphingomyelin accumulation, producing hepatosplenomegaly, neurodegeneration, and a cherry-red macula; foamy lipid-laden macrophages are seen.",
    choices: [
      { text: "Sphingomyelinase", isCorrect: true },
      { text: "Hexosaminidase A" },
      { text: "Alpha-galactosidase A" },
      { text: "Glucocerebrosidase" },
      { text: "Iduronidase" },
    ],
  },
  {
    stem: "A previously well toddler becomes lethargic and hypoglycemic after a gastrointestinal illness with poor intake; blood ketones are inappropriately low and urine shows dicarboxylic acids. The best explanation is:",
    topic: "Clinical Application",
    explanation:
      "Hypoketotic hypoglycemia with dicarboxylic aciduria during fasting stress is classic for a fatty acid oxidation defect such as MCAD deficiency, where ketogenesis fails and glucose is rapidly consumed.",
    choices: [
      { text: "A fatty acid oxidation disorder (e.g., MCAD deficiency)", isCorrect: true },
      { text: "Type 1 diabetes" },
      { text: "Von Gierke disease with high lactate" },
      { text: "Simple viral gastroenteritis alone" },
      { text: "Galactosemia" },
    ],
  },
  {
    stem: "A patient on a statin for high LDL develops muscle aches and a rising creatine kinase. This adverse effect reflects statin toxicity to:",
    topic: "Clinical Application",
    explanation:
      "Statin-associated myopathy (rarely rhabdomyolysis) presents with myalgia and elevated creatine kinase; recognizing it prompts dose adjustment or discontinuation to prevent kidney injury.",
    choices: [
      { text: "Skeletal muscle (myopathy)", isCorrect: true },
      { text: "Cardiac conduction only" },
      { text: "The renal glomerulus directly" },
      { text: "Bone marrow" },
      { text: "The retina" },
    ],
  },
  {
    stem: "Which findings would you expect in a patient with untreated familial hypercholesterolemia? Select all that apply.",
    type: "MULTI",
    topic: "Clinical Application",
    explanation:
      "Very high LDL from impaired receptor-mediated clearance produces tendon xanthomas, corneal arcus at a young age, and premature coronary artery disease; triglycerides are typically normal and HDL is not characteristically elevated.",
    choices: [
      { text: "Markedly elevated LDL cholesterol", isCorrect: true },
      { text: "Tendon xanthomas", isCorrect: true },
      { text: "Premature coronary artery disease", isCorrect: true },
      { text: "Very low triglycerides driving symptoms" },
      { text: "Characteristically high HDL" },
    ],
  },
  {
    stem: "During prolonged starvation, the brain reduces its glucose requirement by using which alternative fuel produced by the liver?",
    topic: "Clinical Application",
    explanation:
      "As fasting continues the brain adapts to oxidize ketone bodies (beta-hydroxybutyrate and acetoacetate), sparing glucose and reducing the need to break down muscle protein for gluconeogenesis.",
    choices: [
      { text: "Ketone bodies", isCorrect: true },
      { text: "Free fatty acids directly" },
      { text: "Lactate only" },
      { text: "Galactose" },
      { text: "Branched-chain amino acids only" },
    ],
  },
  {
    stem: "Why can long-chain (but not medium-chain) fatty acids fail to be oxidized when the carnitine shuttle is defective?",
    topic: "Clinical Application",
    explanation:
      "Long-chain fatty acyl-CoA requires the carnitine shuttle to cross the inner mitochondrial membrane, so a shuttle defect blocks their oxidation; medium-chain fatty acids enter independently of carnitine and are spared.",
    choices: [
      { text: "Long-chain species need carnitine to enter mitochondria", isCorrect: true },
      { text: "Medium-chain fatty acids are not oxidized at all" },
      { text: "Long-chain fatty acids cannot be activated to CoA esters" },
      { text: "The shuttle exports acetyl-CoA" },
    ],
  },
  {
    stem: "Approximately how many ATP are produced from the complete oxidation of one 16-carbon palmitate (using contemporary yield estimates)?",
    topic: "Fatty Acid Oxidation",
    explanation:
      "Palmitate yields about 106 ATP by contemporary estimates (roughly 108 minus the 2 invested in activation), reflecting the high energy density of fat compared with carbohydrate.",
    choices: [
      { text: "About 106", isCorrect: true },
      { text: "About 38" },
      { text: "About 12" },
      { text: "About 200" },
      { text: "About 30" },
    ],
  },
  {
    stem: "The multienzyme fatty acid synthase produces which saturated fatty acid as its main end product?",
    topic: "Fatty Acid Synthesis",
    explanation:
      "Fatty acid synthase elongates the chain to 16 carbons, releasing palmitate; further elongation and desaturation occur in the endoplasmic reticulum.",
    choices: [
      { text: "Palmitate (C16)", isCorrect: true },
      { text: "Stearate (C18)" },
      { text: "Oleate (C18:1)" },
      { text: "Arachidonate (C20:4)" },
      { text: "Laurate (C12)" },
    ],
  },
  {
    stem: "True or False: Cholesterol synthesis is highest in the fed state and is suppressed by fasting and by high intracellular cholesterol, which downregulates HMG-CoA reductase.",
    type: "TRUE_FALSE",
    topic: "Cholesterol Synthesis & Regulation",
    explanation:
      "True. Insulin and abundant substrate stimulate synthesis after meals, while sterol-sensing feedback and fasting reduce HMG-CoA reductase activity and expression.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Which enzyme, deficient in some hypertriglyceridemias, normally requires apoC-II to clear circulating triglyceride-rich particles?",
    topic: "Lipoproteins & Transport",
    explanation:
      "Lipoprotein lipase requires apoC-II as a cofactor; deficiency of either causes accumulation of chylomicrons and VLDL with severe hypertriglyceridemia.",
    choices: [
      { text: "Lipoprotein lipase", isCorrect: true },
      { text: "Hepatic lipase" },
      { text: "Hormone-sensitive lipase" },
      { text: "Pancreatic lipase" },
      { text: "LCAT" },
    ],
  },
  {
    stem: "Cardiolipin, a phospholipid essential for the function of the electron transport chain, is located primarily in the:",
    topic: "Triglyceride & Phospholipid Metabolism",
    explanation:
      "Cardiolipin is concentrated in the inner mitochondrial membrane, where it supports the organization and function of respiratory chain complexes and ATP synthase.",
    choices: [
      { text: "Inner mitochondrial membrane", isCorrect: true },
      { text: "Plasma membrane outer leaflet" },
      { text: "Nuclear envelope" },
      { text: "Lysosomal membrane" },
      { text: "Endoplasmic reticulum lumen" },
    ],
  },
  {
    stem: "Leukotrienes, important mediators of bronchoconstriction in asthma, are produced from arachidonic acid by which enzyme?",
    topic: "Eicosanoids",
    explanation:
      "The 5-lipoxygenase pathway converts arachidonic acid to leukotrienes; the cysteinyl leukotrienes cause bronchoconstriction, a target of leukotriene-receptor antagonists in asthma.",
    choices: [
      { text: "5-Lipoxygenase", isCorrect: true },
      { text: "Cyclooxygenase-1" },
      { text: "Cyclooxygenase-2" },
      { text: "Thromboxane synthase" },
      { text: "Phospholipase C" },
    ],
  },
  {
    stem: "Metachromatic leukodystrophy, with progressive demyelination, results from deficiency of which enzyme?",
    topic: "Sphingolipids & Lysosomal Storage",
    explanation:
      "Arylsulfatase A deficiency causes sulfatide accumulation and central and peripheral demyelination, producing progressive motor and cognitive decline.",
    choices: [
      { text: "Arylsulfatase A", isCorrect: true },
      { text: "Galactocerebrosidase" },
      { text: "Hexosaminidase A" },
      { text: "Alpha-galactosidase A" },
      { text: "Sphingomyelinase" },
      { text: "Glucocerebrosidase" },
    ],
  },
  {
    stem: "In a peripheral tissue such as muscle, beta-hydroxybutyrate is first oxidized back to acetoacetate and then activated to acetoacetyl-CoA by:",
    topic: "Ketone Body Metabolism",
    explanation:
      "Thiophorase (succinyl-CoA:3-ketoacid CoA transferase) transfers CoA from succinyl-CoA to acetoacetate, activating it for cleavage to two acetyl-CoA; the liver lacks this enzyme.",
    choices: [
      { text: "Thiophorase (using succinyl-CoA)", isCorrect: true },
      { text: "HMG-CoA synthase" },
      { text: "HMG-CoA lyase" },
      { text: "Acetyl-CoA carboxylase" },
      { text: "Carnitine palmitoyltransferase I" },
    ],
  },
  {
    stem: "Which laboratory or clinical clues suggest a fatty acid oxidation disorder in a fasting child? Select all that apply.",
    type: "MULTI",
    topic: "Carnitine Shuttle & FAO Disorders",
    explanation:
      "Hypoketotic hypoglycemia, dicarboxylic aciduria, and elevated acylcarnitines on newborn screening all point to impaired fatty acid oxidation; a brisk, appropriate ketotic response argues against it.",
    choices: [
      { text: "Hypoketotic hypoglycemia during fasting", isCorrect: true },
      { text: "Dicarboxylic aciduria", isCorrect: true },
      { text: "Abnormal acylcarnitine profile on screening", isCorrect: true },
      { text: "A robust, appropriate rise in ketones with fasting" },
      { text: "Elevated blood galactose" },
    ],
  },
  {
    stem: "Orlistat aids weight loss by inhibiting which enzyme, thereby reducing dietary fat absorption?",
    topic: "Fatty Acid Structure & Digestion",
    explanation:
      "Orlistat inhibits pancreatic (and gastric) lipase, decreasing triglyceride hydrolysis and fat absorption; steatorrhea and fat-soluble vitamin malabsorption are expected effects.",
    choices: [
      { text: "Pancreatic lipase", isCorrect: true },
      { text: "Lipoprotein lipase" },
      { text: "Hormone-sensitive lipase" },
      { text: "HMG-CoA reductase" },
      { text: "Acetyl-CoA carboxylase" },
    ],
  },
  {
    stem: "Bile acids, synthesized from cholesterol, are conjugated and secreted to aid fat digestion. The rate-limiting enzyme of bile acid synthesis is:",
    topic: "Cholesterol Synthesis & Regulation",
    explanation:
      "Cholesterol 7-alpha-hydroxylase (CYP7A1) is rate-limiting for bile acid synthesis; bile-acid sequestrants lower cholesterol by interrupting enterohepatic recycling and driving more cholesterol into bile acids.",
    choices: [
      { text: "Cholesterol 7-alpha-hydroxylase", isCorrect: true },
      { text: "HMG-CoA reductase" },
      { text: "LCAT" },
      { text: "ACAT" },
      { text: "Squalene epoxidase" },
    ],
  },
  {
    stem: "Which drug class lowers LDL by binding bile acids in the gut, interrupting their reabsorption and forcing the liver to convert more cholesterol into bile acids?",
    topic: "Dyslipidemias",
    explanation:
      "Bile-acid sequestrants (e.g., cholestyramine) block enterohepatic bile-acid recycling, so hepatocytes upregulate LDL receptors and cholesterol 7-alpha-hydroxylase, lowering plasma LDL.",
    choices: [
      { text: "Bile-acid sequestrants", isCorrect: true },
      { text: "Statins" },
      { text: "Fibrates" },
      { text: "Niacin" },
      { text: "PCSK9 inhibitors" },
      { text: "Ezetimibe" },
    ],
  },
  {
    stem: "Ezetimibe lowers cholesterol by blocking intestinal cholesterol absorption via which transporter?",
    topic: "Lipoproteins & Transport",
    explanation:
      "Ezetimibe inhibits the NPC1L1 sterol transporter at the intestinal brush border, reducing cholesterol absorption and complementing statins.",
    choices: [
      { text: "NPC1L1", isCorrect: true },
      { text: "SGLT2" },
      { text: "ABCA1 only" },
      { text: "GLUT5" },
      { text: "LDL receptor" },
    ],
  },
  {
    stem: "True or False: Corticosteroids reduce eicosanoid production upstream of NSAIDs by inhibiting phospholipase A2 (via lipocortin/annexin), decreasing release of arachidonic acid.",
    type: "TRUE_FALSE",
    topic: "Eicosanoids",
    explanation:
      "True. By blocking arachidonic acid release, steroids suppress both the cyclooxygenase and lipoxygenase pathways, whereas NSAIDs act only on cyclooxygenase downstream.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "A newborn screening result flags an elevated C8 acylcarnitine. This finding is most consistent with:",
    topic: "Clinical Application",
    explanation:
      "An elevated medium-chain (C8) acylcarnitine is the hallmark of MCAD deficiency on newborn screening, allowing pre-symptomatic diagnosis and prevention of fasting crises.",
    choices: [
      { text: "MCAD deficiency", isCorrect: true },
      { text: "Phenylketonuria" },
      { text: "Galactosemia" },
      { text: "Cystic fibrosis" },
      { text: "Congenital hypothyroidism" },
    ],
  },
  {
    stem: "Insulin promotes fatty acid synthesis in part by activating acetyl-CoA carboxylase. This is an example of which regulatory theme?",
    topic: "Fatty Acid Synthesis",
    explanation:
      "Insulin (the fed-state hormone) stimulates storage pathways, dephosphorylating and activating acetyl-CoA carboxylase to drive malonyl-CoA and fat synthesis, opposite to glucagon and AMPK.",
    choices: [
      { text: "Fed-state hormones drive biosynthesis/storage", isCorrect: true },
      { text: "Fasting hormones drive lipogenesis" },
      { text: "Energy depletion drives fat synthesis" },
      { text: "Synthesis and oxidation run maximally together" },
    ],
  },
  {
    stem: "Before a fatty acid can be oxidized, it must be activated in the cytosol to fatty acyl-CoA by fatty acyl-CoA synthetase at the cost of:",
    topic: "Fatty Acid Oxidation",
    explanation:
      "Activation consumes the equivalent of two high-energy phosphate bonds (ATP → AMP + PPi, with PPi hydrolyzed), forming fatty acyl-CoA before mitochondrial import.",
    choices: [
      { text: "Two high-energy phosphate bonds (ATP to AMP + PPi)", isCorrect: true },
      { text: "One ATP to ADP" },
      { text: "One GTP" },
      { text: "No energy input" },
    ],
  },
  {
    stem: "The four repeating reactions of each beta-oxidation cycle occur in the order:",
    topic: "Fatty Acid Oxidation",
    explanation:
      "Each cycle proceeds oxidation (FAD), hydration, a second oxidation (NAD+), then thiolytic cleavage releasing acetyl-CoA and a chain shortened by two carbons.",
    choices: [
      { text: "Oxidation, hydration, oxidation, thiolysis", isCorrect: true },
      { text: "Hydration, oxidation, thiolysis, oxidation" },
      { text: "Thiolysis, oxidation, hydration, oxidation" },
      { text: "Reduction, dehydration, reduction, cleavage" },
    ],
  },
  {
    stem: "True or False: Peroxisomes carry out the initial oxidation of very-long-chain fatty acids, generating hydrogen peroxide rather than capturing that first oxidation's energy as ATP.",
    type: "TRUE_FALSE",
    topic: "Fatty Acid Oxidation",
    explanation:
      "True. Peroxisomal beta-oxidation shortens very-long-chain fatty acids and produces H2O2 (handled by catalase); defects cause disorders such as adrenoleukodystrophy and Zellweger syndrome.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Primary carnitine deficiency impairs fatty acid oxidation because carnitine is required to:",
    topic: "Carnitine Shuttle & FAO Disorders",
    explanation:
      "Carnitine is needed to transport long-chain fatty acyl groups across the inner mitochondrial membrane; without it, long-chain fats cannot be oxidized, causing weakness, cardiomyopathy, and hypoketotic hypoglycemia.",
    choices: [
      { text: "Carry long-chain fatty acyl groups into mitochondria", isCorrect: true },
      { text: "Activate fatty acids to CoA esters" },
      { text: "Synthesize ketone bodies" },
      { text: "Export citrate for lipogenesis" },
      { text: "Reduce NADP+ to NADPH" },
    ],
  },
  {
    stem: "HMG-CoA lyase cleaves HMG-CoA to release which ketone body directly?",
    topic: "Ketone Body Metabolism",
    explanation:
      "HMG-CoA lyase splits mitochondrial HMG-CoA into acetoacetate and acetyl-CoA; acetoacetate is then partly reduced to beta-hydroxybutyrate for export.",
    choices: [
      { text: "Acetoacetate", isCorrect: true },
      { text: "Beta-hydroxybutyrate directly" },
      { text: "Acetone" },
      { text: "Mevalonate" },
      { text: "Cholesterol" },
    ],
  },
  {
    stem: "The ratio of beta-hydroxybutyrate to acetoacetate rises when the mitochondrial NADH/NAD+ ratio is high. In which situation is this most pronounced?",
    topic: "Ketone Body Metabolism",
    explanation:
      "A high NADH/NAD+ ratio, as in alcoholic ketoacidosis or severe diabetic ketoacidosis, favors beta-hydroxybutyrate, which nitroprusside tests detect poorly, risking underestimation of ketosis.",
    choices: [
      { text: "Alcoholic or severe diabetic ketoacidosis", isCorrect: true },
      { text: "Well-fed resting state" },
      { text: "Immediately after a carbohydrate meal" },
      { text: "During mild exercise only" },
    ],
  },
  {
    stem: "Which cofactor, common to acetyl-CoA carboxylase and pyruvate carboxylase, is required for their carboxylation reactions?",
    topic: "Fatty Acid Synthesis",
    explanation:
      "Both are biotin-dependent carboxylases; biotin (vitamin B7) carries activated CO2. Biotin deficiency therefore impairs both fatty acid synthesis and gluconeogenesis.",
    choices: [
      { text: "Biotin", isCorrect: true },
      { text: "Thiamine pyrophosphate" },
      { text: "Pyridoxal phosphate" },
      { text: "Tetrahydrofolate" },
      { text: "Cobalamin" },
    ],
  },
  {
    stem: "Which conditions favor active fatty acid synthesis (lipogenesis)? Select all that apply.",
    type: "MULTI",
    topic: "Fatty Acid Synthesis",
    explanation:
      "The fed, high-insulin state with abundant citrate and NADPH favors lipogenesis; high AMPK activity, glucagon, and fasting instead inhibit it.",
    choices: [
      { text: "High insulin (fed state)", isCorrect: true },
      { text: "Abundant cytosolic citrate", isCorrect: true },
      { text: "Ample NADPH supply", isCorrect: true },
      { text: "High AMPK activity" },
      { text: "Fasting with high glucagon" },
    ],
  },
  {
    stem: "Phosphatidylinositol 4,5-bisphosphate (PIP2) is cleaved by phospholipase C to generate which two second messengers?",
    topic: "Triglyceride & Phospholipid Metabolism",
    explanation:
      "Phospholipase C splits PIP2 into inositol trisphosphate (IP3), which releases calcium, and diacylglycerol (DAG), which activates protein kinase C.",
    choices: [
      { text: "IP3 and diacylglycerol", isCorrect: true },
      { text: "cAMP and AMP" },
      { text: "Arachidonic acid and thromboxane" },
      { text: "Ceramide and sphingosine" },
      { text: "cGMP and GTP" },
    ],
  },
  {
    stem: "Cholesterol synthesis proceeds through mevalonate to isoprenoid units and then to squalene. In which cellular compartment does most of this synthesis occur?",
    topic: "Cholesterol Synthesis & Regulation",
    explanation:
      "Cholesterol synthesis is cytosolic and endoplasmic-reticulum-associated, using acetyl-CoA and NADPH; HMG-CoA reductase, the regulated ER enzyme, controls flux.",
    choices: [
      { text: "Cytosol and endoplasmic reticulum", isCorrect: true },
      { text: "Mitochondrial matrix" },
      { text: "Lysosome" },
      { text: "Peroxisome" },
      { text: "Nucleus" },
    ],
  },
  {
    stem: "As VLDL loses triglyceride to lipoprotein lipase, it becomes IDL and then which cholesterol-rich particle?",
    topic: "Lipoproteins & Transport",
    explanation:
      "Progressive triglyceride removal converts VLDL to IDL and finally to LDL, the main cholesterol carrier delivered to tissues via the apoB-100/LDL-receptor pathway.",
    choices: [
      { text: "LDL", isCorrect: true },
      { text: "Chylomicron" },
      { text: "HDL" },
      { text: "Chylomicron remnant" },
      { text: "Nascent HDL" },
    ],
  },
  {
    stem: "Which apolipoprotein mediates hepatic uptake of chylomicron remnants and IDL?",
    topic: "Lipoproteins & Transport",
    explanation:
      "ApoE is recognized by hepatic remnant receptors, clearing chylomicron remnants and IDL; apoE variants influence remnant clearance and cardiovascular and Alzheimer risk.",
    choices: [
      { text: "ApoE", isCorrect: true },
      { text: "ApoA-I" },
      { text: "ApoC-II" },
      { text: "ApoB-48 only" },
      { text: "ApoA-IV" },
    ],
  },
  {
    stem: "Dysbetalipoproteinemia (type III), with palmar xanthomas and elevated remnants, is associated with which apolipoprotein abnormality?",
    topic: "Dyslipidemias",
    explanation:
      "Defective apoE (e.g., E2/E2) impairs clearance of chylomicron remnants and IDL, raising both cholesterol and triglyceride and producing characteristic palmar (tuberoeruptive) xanthomas.",
    choices: [
      { text: "Defective apoE", isCorrect: true },
      { text: "Absent apoB-100" },
      { text: "ApoC-II excess" },
      { text: "LCAT deficiency" },
      { text: "Overactive LDL receptor" },
      { text: "ApoA-I duplication" },
    ],
  },
  {
    stem: "Fibrates lower triglycerides mainly by activating PPAR-alpha, which increases the activity of:",
    topic: "Dyslipidemias",
    explanation:
      "PPAR-alpha activation by fibrates upregulates lipoprotein lipase and fatty acid oxidation while lowering apoC-III, enhancing clearance of triglyceride-rich lipoproteins.",
    choices: [
      { text: "Lipoprotein lipase", isCorrect: true },
      { text: "HMG-CoA reductase" },
      { text: "Cholesterol 7-alpha-hydroxylase only" },
      { text: "Hormone-sensitive lipase in adipose" },
      { text: "ACAT" },
    ],
  },
  {
    stem: "PCSK9 inhibitors lower LDL by:",
    topic: "Dyslipidemias",
    explanation:
      "PCSK9 normally targets LDL receptors for degradation; inhibiting it preserves more receptors on hepatocytes, increasing LDL clearance and markedly lowering plasma LDL.",
    choices: [
      { text: "Preventing degradation of hepatic LDL receptors", isCorrect: true },
      { text: "Inhibiting HMG-CoA reductase" },
      { text: "Blocking intestinal cholesterol absorption" },
      { text: "Sequestering bile acids" },
      { text: "Activating lipoprotein lipase" },
    ],
  },
  {
    stem: "Which lipid-lowering drugs are correctly matched to their mechanism? Select all that apply.",
    type: "MULTI",
    topic: "Dyslipidemias",
    explanation:
      "Statins inhibit HMG-CoA reductase, ezetimibe blocks NPC1L1 intestinal absorption, bile-acid sequestrants interrupt enterohepatic bile-acid recycling, and fibrates activate PPAR-alpha. Niacin does not act by inhibiting lipoprotein lipase.",
    choices: [
      { text: "Statins — inhibit HMG-CoA reductase", isCorrect: true },
      { text: "Ezetimibe — block NPC1L1 cholesterol absorption", isCorrect: true },
      { text: "Bile-acid sequestrants — interrupt bile-acid recycling", isCorrect: true },
      { text: "Fibrates — activate PPAR-alpha", isCorrect: true },
      { text: "Niacin — inhibits lipoprotein lipase" },
    ],
  },
  {
    stem: "Selective COX-2 inhibitors were developed to reduce gastric toxicity, but raise cardiovascular risk partly because they:",
    topic: "Eicosanoids",
    explanation:
      "COX-2 inhibition lowers endothelial prostacyclin (antithrombotic, vasodilatory) while sparing platelet COX-1-derived thromboxane, tilting the balance toward thrombosis.",
    choices: [
      { text: "Reduce protective prostacyclin while sparing platelet thromboxane", isCorrect: true },
      { text: "Increase prostacyclin excessively" },
      { text: "Block thromboxane synthesis completely" },
      { text: "Inhibit phospholipase A2" },
      { text: "Deplete arachidonic acid stores" },
    ],
  },
  {
    stem: "Krabbe disease, with peripheral neuropathy and globoid cells, results from deficiency of:",
    topic: "Sphingolipids & Lysosomal Storage",
    explanation:
      "Galactocerebrosidase deficiency causes galactocerebroside accumulation and destruction of myelin, producing the globoid-cell leukodystrophy known as Krabbe disease.",
    choices: [
      { text: "Galactocerebrosidase", isCorrect: true },
      { text: "Hexosaminidase A" },
      { text: "Sphingomyelinase" },
      { text: "Alpha-galactosidase A" },
      { text: "Arylsulfatase A" },
      { text: "Iduronidase" },
    ],
  },
  {
    stem: "Which sphingolipidoses classically present with a cherry-red macula? Select all that apply.",
    type: "MULTI",
    topic: "Sphingolipids & Lysosomal Storage",
    explanation:
      "Tay-Sachs and Niemann-Pick disease both feature a cherry-red spot from ganglioside/sphingomyelin accumulation in retinal ganglion cells; Gaucher and Fabry disease do not.",
    choices: [
      { text: "Tay-Sachs disease", isCorrect: true },
      { text: "Niemann-Pick disease", isCorrect: true },
      { text: "Gaucher disease" },
      { text: "Fabry disease" },
      { text: "Metachromatic leukodystrophy" },
    ],
  },
  {
    stem: "A patient with very high triglycerides is counseled that the main acute danger of levels above ~1000 mg/dL is:",
    topic: "Clinical Application",
    explanation:
      "Severe hypertriglyceridemia (usually from impaired chylomicron clearance) can precipitate acute pancreatitis, the key acute risk that drives urgent triglyceride lowering.",
    choices: [
      { text: "Acute pancreatitis", isCorrect: true },
      { text: "Immediate stroke from LDL" },
      { text: "Hemolysis" },
      { text: "Cataracts" },
      { text: "Gout" },
    ],
  },
  {
    stem: "An alcoholic patient with poor intake presents with a high-anion-gap acidosis, positive ketones, and near-normal glucose. This alcoholic ketoacidosis arises because:",
    topic: "Clinical Application",
    explanation:
      "Ethanol metabolism raises the NADH/NAD+ ratio, promoting lipolysis and ketogenesis while impairing gluconeogenesis, so ketones rise without marked hyperglycemia.",
    choices: [
      { text: "A high NADH/NAD+ ratio drives ketogenesis and limits gluconeogenesis", isCorrect: true },
      { text: "Insulin excess drives fat storage" },
      { text: "Glycogen stores are overloaded" },
      { text: "Fatty acid oxidation is blocked genetically" },
      { text: "Cholesterol synthesis is increased" },
    ],
  },
  {
    stem: "Trans fats raise cardiovascular risk in part because, compared with cis unsaturated fats, they:",
    topic: "Fatty Acid Structure & Digestion",
    explanation:
      "Trans fatty acids raise LDL and lower HDL and behave more like saturated fats, adversely shifting the lipoprotein profile and promoting atherosclerosis.",
    choices: [
      { text: "Raise LDL and lower HDL cholesterol", isCorrect: true },
      { text: "Lower LDL and raise HDL" },
      { text: "Cannot be absorbed" },
      { text: "Are converted directly to ketones" },
    ],
  },
  {
    stem: "Intracellular cholesterol regulates its own synthesis largely through which transcriptional system that controls HMG-CoA reductase and LDL-receptor genes?",
    topic: "Cholesterol Synthesis & Regulation",
    explanation:
      "Sterol regulatory element-binding proteins (SREBPs) are activated when cholesterol is low, inducing HMG-CoA reductase and LDL-receptor expression; high sterol suppresses this program.",
    choices: [
      { text: "SREBP (sterol regulatory element-binding protein)", isCorrect: true },
      { text: "PPAR-gamma" },
      { text: "NF-kB" },
      { text: "HIF-1alpha" },
      { text: "mTOR alone" },
    ],
  },
  {
    stem: "ABCA1 transporter defects cause Tangier disease with very low HDL because ABCA1 normally:",
    topic: "Lipoproteins & Transport",
    explanation:
      "ABCA1 effluxes cellular cholesterol and phospholipid onto lipid-poor apoA-I to form nascent HDL; its loss (Tangier disease) causes near-absent HDL and cholesterol-laden tissues.",
    choices: [
      { text: "Loads cholesterol onto apoA-I to form nascent HDL", isCorrect: true },
      { text: "Clears LDL via the liver" },
      { text: "Hydrolyzes triglyceride in capillaries" },
      { text: "Absorbs cholesterol in the intestine" },
      { text: "Esterifies cholesterol in plasma" },
    ],
  },
  {
    stem: "True or False: Cholesteryl ester transfer protein (CETP) exchanges cholesteryl esters from HDL for triglycerides in VLDL/LDL, and inhibiting it raises HDL levels.",
    type: "TRUE_FALSE",
    topic: "Lipoproteins & Transport",
    explanation:
      "True. CETP moves cholesteryl esters from HDL to apoB-containing lipoproteins; pharmacologic CETP inhibition raises HDL, though clinical benefit has been inconsistent.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Unsaturated fatty acids require additional enzymes for complete oxidation, namely:",
    topic: "Fatty Acid Oxidation",
    explanation:
      "An enoyl-CoA isomerase (and, for polyunsaturated fats, a reductase) reposition or reduce existing double bonds so the standard beta-oxidation enzymes can proceed.",
    choices: [
      { text: "An enoyl-CoA isomerase (and a reductase for polyunsaturates)", isCorrect: true },
      { text: "An extra thiolase only" },
      { text: "A biotin carboxylase" },
      { text: "Carnitine acyltransferase III" },
      { text: "A separate FAD-independent dehydrogenase" },
    ],
  },
  {
    stem: "Acetone, a minor ketone body, is notable clinically because it:",
    topic: "Ketone Body Metabolism",
    explanation:
      "Acetone forms by spontaneous decarboxylation of acetoacetate and is volatile, producing the fruity breath odor detectable in ketoacidosis; it is not a significant fuel.",
    choices: [
      { text: "Is exhaled, giving a fruity breath odor", isCorrect: true },
      { text: "Is the main fuel for the heart" },
      { text: "Is converted back to glucose" },
      { text: "Is stored in adipose tissue" },
      { text: "Activates lipoprotein lipase" },
    ],
  },
  {
    stem: "Neonatal respiratory distress syndrome in a premature infant reflects insufficient surfactant. Antenatal treatment to accelerate its production is:",
    topic: "Triglyceride & Phospholipid Metabolism",
    explanation:
      "Antenatal glucocorticoids stimulate type II pneumocytes to produce surfactant (mainly dipalmitoylphosphatidylcholine), reducing respiratory distress in preterm infants.",
    choices: [
      { text: "Maternal glucocorticoids", isCorrect: true },
      { text: "Maternal insulin" },
      { text: "Neonatal statins" },
      { text: "Maternal bile-acid sequestrants" },
      { text: "Neonatal carnitine" },
    ],
  },
  {
    stem: "Where does the two-carbon unit come from during each elongation step of fatty acid synthesis on fatty acid synthase?",
    topic: "Fatty Acid Synthesis",
    explanation:
      "Although acetyl-CoA primes the chain, each two-carbon addition is donated by malonyl-CoA, which is decarboxylated during condensation to drive elongation forward.",
    choices: [
      { text: "Malonyl-CoA", isCorrect: true },
      { text: "Acetoacetyl-CoA" },
      { text: "Free acetate" },
      { text: "Citrate" },
      { text: "Propionyl-CoA" },
    ],
  },
  {
    stem: "A patient with a family history of very early heart attacks has an LDL of 260 mg/dL, tendon xanthomas, and corneal arcus at age 30. First-line pharmacotherapy targets:",
    topic: "Clinical Application",
    explanation:
      "This is familial hypercholesterolemia; a high-intensity statin (HMG-CoA reductase inhibitor), often with ezetimibe or a PCSK9 inhibitor, is first-line to lower LDL and cardiovascular risk.",
    choices: [
      { text: "HMG-CoA reductase (statin therapy)", isCorrect: true },
      { text: "Lipoprotein lipase activation only" },
      { text: "Pancreatic lipase inhibition" },
      { text: "Carnitine supplementation" },
      { text: "Bile-acid synthesis stimulation" },
    ],
  },
  {
    stem: "A fasting patient shifts fuel use over time. Which statements about metabolic fuel use during a prolonged fast are correct? Select all that apply.",
    type: "MULTI",
    topic: "Clinical Application",
    explanation:
      "During prolonged fasting adipose lipolysis rises, the liver makes ketone bodies, the brain adapts to use ketones, and red blood cells still require glucose. Muscle protein breakdown slows over time to conserve protein, not accelerates indefinitely.",
    choices: [
      { text: "Adipose lipolysis supplies fatty acids to tissues", isCorrect: true },
      { text: "The liver produces ketone bodies", isCorrect: true },
      { text: "The brain adapts to use ketone bodies", isCorrect: true },
      { text: "Red blood cells continue to require glucose", isCorrect: true },
      { text: "Muscle proteolysis accelerates indefinitely to supply glucose" },
    ],
  },
];
