/**
 * PHYSIOLOGY — PRACTICE SET 4
 * Renal Physiology, Body Fluids & Acid-Base
 *
 * Guyton & Hall / Ganong depth. Body-fluid compartments, renal clearance and the
 * glomerular filtration rate, glomerular filtration and its autoregulation,
 * tubular reabsorption and secretion, the loop of Henle and countercurrent
 * multiplication, the regulation of water and sodium, potassium, calcium and
 * phosphate handling, and acid-base physiology and its disorders. 100 questions.
 *
 * Options are length-matched (the correct answer is not perceptibly the longest)
 * and every distractor is a defensible near-miss. Positions randomized by engine.
 */

import type { Q } from "../_lib/qbank";

export const PHYSIOLOGY_SET_4: Q[] = [
  {
    stem: "In a lean adult, total body water makes up approximately what fraction of body weight?",
    topic: "Body Fluid Compartments",
    explanation:
      "Total body water is close to sixty percent of body weight in a lean adult male, somewhat less in females and the obese because fat holds little water; this water is then partitioned between the intracellular and extracellular compartments.",
    choices: [
      { text: "about 60 percent", isCorrect: true },
      { text: "about 40 percent" },
      { text: "about 20 percent" },
      { text: "about 80 percent" },
    ],
  },
  {
    stem: "Of the total body water, the intracellular compartment contains about:",
    topic: "Body Fluid Compartments",
    explanation:
      "Roughly two-thirds of body water lies inside cells and one-third outside them; so in a seventy-kilogram person with forty-two liters of water, about twenty-eight liters are intracellular and about fourteen liters extracellular.",
    choices: [
      { text: "two-thirds of the total", isCorrect: true },
      { text: "one-third of the total" },
      { text: "one-half of the total" },
      { text: "one-quarter of the total" },
    ],
  },
  {
    stem: "Within the extracellular fluid, the plasma volume represents approximately:",
    topic: "Body Fluid Compartments",
    explanation:
      "The extracellular fluid divides into plasma and interstitial fluid in about a one-to-three ratio, so plasma is roughly a quarter of the extracellular volume; the capillary wall separates these two subcompartments while letting water and small solutes pass.",
    choices: [
      { text: "one-quarter of the volume", isCorrect: true },
      { text: "three-quarters of the volume" },
      { text: "one-half of the volume" },
      { text: "nine-tenths of the volume" },
    ],
  },
  {
    stem: "The principal cation of the intracellular fluid is:",
    topic: "Body Fluid Compartments",
    explanation:
      "Potassium is the dominant intracellular cation, held there by the sodium-potassium pump, while sodium dominates outside the cell; this asymmetry, maintained by active transport, underlies the resting membrane potential of every cell.",
    choices: [
      { text: "potassium", isCorrect: true },
      { text: "sodium" },
      { text: "calcium" },
      { text: "magnesium" },
    ],
  },
  {
    stem: "The principal cation of the extracellular fluid is:",
    topic: "Body Fluid Compartments",
    explanation:
      "Sodium is the main extracellular cation and, with its accompanying anions, accounts for most of the extracellular osmolarity; because water follows sodium, the total body sodium content largely determines the extracellular fluid volume.",
    choices: [
      { text: "sodium", isCorrect: true },
      { text: "potassium" },
      { text: "calcium" },
      { text: "phosphate" },
    ],
  },
  {
    stem: "At steady state, the osmolarity of the intracellular fluid compared with that of the extracellular fluid is:",
    topic: "Body Fluid Compartments",
    explanation:
      "Water crosses cell membranes freely until osmotic equilibrium is reached, so the two compartments are essentially isosmotic at about two hundred ninety milliosmoles per liter; a change in one compartment's osmolarity is quickly shared by the other.",
    choices: [
      { text: "essentially equal to it", isCorrect: true },
      { text: "much higher than it" },
      { text: "much lower than it" },
      { text: "half of its value" },
    ],
  },
  {
    stem: "Which marker is used to measure the total body water by the indicator-dilution method?",
    topic: "Body Fluid Compartments",
    explanation:
      "Deuterium oxide, or heavy water, distributes through all body water and so measures the total; inulin or mannitol stay in the extracellular fluid, while Evans blue or labeled albumin remain in the plasma, each marking a different compartment.",
    choices: [
      { text: "deuterium oxide (heavy water)", isCorrect: true },
      { text: "inulin confined to plasma" },
      { text: "the Evans blue plasma dye" },
      { text: "radiolabeled serum albumin" },
    ],
  },
  {
    stem: "A dye such as Evans blue that binds plasma albumin is used to measure the:",
    topic: "Body Fluid Compartments",
    explanation:
      "Because albumin and the dye bound to it are held within the vessels by the capillary wall, their dilution measures the plasma volume; from plasma volume and the hematocrit the total blood volume can then be calculated.",
    choices: [
      { text: "plasma volume of the blood", isCorrect: true },
      { text: "total body water volume" },
      { text: "interstitial fluid volume" },
      { text: "intracellular fluid volume" },
    ],
  },
  {
    stem: "Loss of isotonic fluid, as in acute hemorrhage, initially contracts the:",
    topic: "Body Fluid Compartments",
    explanation:
      "Isotonic loss removes fluid of the same osmolarity as plasma, so no osmotic gradient drives water across cell membranes; the extracellular volume falls while the intracellular volume is unchanged, at least until compensatory shifts occur.",
    choices: [
      { text: "extracellular volume alone", isCorrect: true },
      { text: "intracellular volume alone" },
      { text: "both compartments equally" },
      { text: "plasma but not interstitium" },
    ],
  },
  {
    stem: "Infusing hypertonic saline raises extracellular osmolarity and therefore draws water:",
    topic: "Body Fluid Compartments",
    explanation:
      "Adding solute to the extracellular fluid raises its osmolarity, so water leaves the cells to restore balance; the extracellular volume expands and the cells shrink, the opposite of what pure water or hypotonic fluid would do.",
    choices: [
      { text: "out of the cells into the extracellular fluid", isCorrect: true },
      { text: "into the cells from the extracellular fluid" },
      { text: "out of the plasma into the interstitium only" },
      { text: "in neither direction across the membrane" },
    ],
  },
  {
    stem: "True or False: Adding isotonic saline to the body expands the extracellular volume while leaving the intracellular volume essentially unchanged.",
    type: "TRUE_FALSE",
    topic: "Body Fluid Compartments",
    explanation:
      "True. Isotonic saline matches extracellular osmolarity, so there is no gradient to move water into or out of cells; the added fluid stays extracellular, distributing between plasma and interstitium and expanding only that compartment.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The renal clearance of a substance is defined as the volume of plasma completely cleared of that substance per:",
    topic: "Renal Clearance & GFR",
    explanation:
      "Clearance expresses excretion as the volume of plasma that would have to be stripped entirely of a solute each minute to account for the amount appearing in the urine; it equals urine concentration times flow divided by plasma concentration.",
    choices: [
      { text: "unit of time", isCorrect: true },
      { text: "filtered load" },
      { text: "cardiac cycle" },
      { text: "liter of urine" },
    ],
  },
  {
    stem: "Inulin is the ideal marker of the glomerular filtration rate because it is:",
    topic: "Renal Clearance & GFR",
    explanation:
      "Inulin is freely filtered at the glomerulus and then neither reabsorbed nor secreted by the tubule, so all that is filtered appears in the urine; its clearance therefore equals exactly the volume filtered, which is the glomerular filtration rate.",
    choices: [
      { text: "freely filtered and not handled further", isCorrect: true },
      { text: "filtered and then fully reabsorbed" },
      { text: "secreted heavily by the tubule" },
      { text: "bound tightly to plasma proteins" },
    ],
  },
  {
    stem: "The clearance of creatinine slightly overestimates the true glomerular filtration rate because creatinine is:",
    topic: "Renal Clearance & GFR",
    explanation:
      "Creatinine is filtered like inulin but is also secreted in small amounts by the proximal tubule, so a little extra appears in the urine; its clearance therefore exceeds the filtration rate modestly, which is acceptable for routine clinical estimates.",
    choices: [
      { text: "also secreted by the tubule", isCorrect: true },
      { text: "partly reabsorbed by the tubule" },
      { text: "bound to the plasma proteins" },
      { text: "produced within the kidney" },
    ],
  },
  {
    stem: "The clearance of para-aminohippurate, which is filtered and then almost completely secreted, is used to estimate the:",
    topic: "Renal Clearance & GFR",
    explanation:
      "Because para-aminohippurate is nearly all removed from the plasma in a single pass, both by filtration and by secretion, its clearance approximates the total plasma flow through the kidney; correcting for the small unextracted fraction refines the estimate.",
    choices: [
      { text: "renal plasma flow", isCorrect: true },
      { text: "glomerular filtration rate" },
      { text: "tubular reabsorption rate" },
      { text: "total body water volume" },
    ],
  },
  {
    stem: "The filtration fraction, normally about one-fifth, is defined as the ratio of the:",
    topic: "Renal Clearance & GFR",
    explanation:
      "Filtration fraction is the glomerular filtration rate divided by the renal plasma flow, normally around zero point two, meaning about a fifth of the plasma reaching the glomeruli is filtered; angiotensin II raises it by constricting the efferent arteriole.",
    choices: [
      { text: "filtration rate to the plasma flow", isCorrect: true },
      { text: "plasma flow to the filtration rate" },
      { text: "urine flow to the plasma flow" },
      { text: "filtration rate to the blood flow" },
    ],
  },
  {
    stem: "The kidneys receive approximately what share of the resting cardiac output?",
    topic: "Renal Clearance & GFR",
    explanation:
      "The two kidneys, though small, take about a fifth of the resting cardiac output, a flow far exceeding their metabolic needs; this generous perfusion supports the high filtration rate required to regulate the volume and composition of body fluids.",
    choices: [
      { text: "about one-fifth", isCorrect: true },
      { text: "about one-half" },
      { text: "about one-tenth" },
      { text: "about one-third" },
    ],
  },
  {
    stem: "If a filtered substance has a clearance greater than that of inulin, the substance must be undergoing net:",
    topic: "Renal Clearance & GFR",
    explanation:
      "A clearance above the filtration rate means more is excreted than was filtered, so the tubule must be adding it by secretion; a clearance below inulin's would instead mean some filtered solute was reabsorbed back into the blood.",
    choices: [
      { text: "tubular secretion", isCorrect: true },
      { text: "tubular reabsorption" },
      { text: "plasma protein binding" },
      { text: "renal metabolism" },
    ],
  },
  {
    stem: "The filtered load of a solute is calculated as its plasma concentration multiplied by the:",
    topic: "Renal Clearance & GFR",
    explanation:
      "The filtered load is how much of a solute enters the tubule each minute, the product of the plasma concentration and the glomerular filtration rate; comparing it with the amount excreted reveals whether the tubule reabsorbed or secreted the solute.",
    choices: [
      { text: "glomerular filtration rate", isCorrect: true },
      { text: "renal plasma flow" },
      { text: "urine flow rate" },
      { text: "tubular secretion rate" },
    ],
  },
  {
    stem: "The normal glomerular filtration rate in a healthy adult is approximately:",
    topic: "Renal Clearance & GFR",
    explanation:
      "The glomeruli filter about one hundred twenty-five milliliters per minute, which amounts to roughly one hundred eighty liters per day; almost all of this vast volume is reabsorbed, leaving only a liter or two to be excreted as urine.",
    choices: [
      { text: "125 milliliters per minute", isCorrect: true },
      { text: "25 milliliters per minute" },
      { text: "500 milliliters per minute" },
      { text: "12 milliliters per minute" },
    ],
  },
  {
    stem: "True or False: A substance that is freely filtered and then completely reabsorbed, like glucose in a healthy person, has a renal clearance of nearly zero.",
    type: "TRUE_FALSE",
    topic: "Renal Clearance & GFR",
    explanation:
      "True. If everything filtered is reclaimed by the tubule, none appears in the urine, so no plasma is effectively cleared; glucose in health therefore has a clearance approaching zero despite being filtered in large amounts each minute.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Glomerular filtration is driven mainly by the:",
    topic: "Glomerular Filtration & Autoregulation",
    explanation:
      "Filtration across the glomerular capillary depends on the balance of Starling forces, and the dominant force is the high glomerular capillary hydrostatic pressure; it is opposed by the capsule pressure and by the rising oncotic pressure of plasma proteins.",
    choices: [
      { text: "glomerular capillary hydrostatic pressure", isCorrect: true },
      { text: "plasma colloid osmotic pressure" },
      { text: "Bowman's capsule hydrostatic pressure" },
      { text: "interstitial fluid oncotic pressure" },
    ],
  },
  {
    stem: "The glomerular filtration barrier restricts the passage of albumin chiefly because albumin is:",
    topic: "Glomerular Filtration & Autoregulation",
    explanation:
      "The barrier of endothelium, basement membrane, and podocyte slits screens molecules by size and by charge; albumin is both fairly large and strongly negatively charged, and the negatively charged barrier repels it, so little normally reaches the filtrate.",
    choices: [
      { text: "large and negatively charged", isCorrect: true },
      { text: "small and positively charged" },
      { text: "small and electrically neutral" },
      { text: "bound to filtered sodium" },
    ],
  },
  {
    stem: "Selective constriction of the efferent arteriole, as by angiotensin II, tends to:",
    topic: "Glomerular Filtration & Autoregulation",
    explanation:
      "Narrowing the vessel leaving the glomerulus dams blood within it, raising the glomerular capillary pressure and the filtration rate even as total renal blood flow falls; this is how angiotensin II defends filtration when perfusion is threatened.",
    choices: [
      { text: "raise glomerular pressure and filtration", isCorrect: true },
      { text: "lower glomerular pressure and filtration" },
      { text: "raise the renal blood flow sharply" },
      { text: "leave the filtration rate unchanged" },
    ],
  },
  {
    stem: "Constriction of the afferent arteriole, in contrast, tends to:",
    topic: "Glomerular Filtration & Autoregulation",
    explanation:
      "Narrowing the vessel entering the glomerulus reduces the pressure and flow reaching it, so both renal blood flow and the glomerular filtration rate fall together; the afferent arteriole is thus the main site controlling flow into the glomerulus.",
    choices: [
      { text: "lower both renal flow and filtration", isCorrect: true },
      { text: "raise both renal flow and filtration" },
      { text: "raise filtration but lower flow" },
      { text: "leave both flow and filtration fixed" },
    ],
  },
  {
    stem: "Renal blood flow and glomerular filtration are held relatively constant across a wide range of arterial pressures by:",
    topic: "Glomerular Filtration & Autoregulation",
    explanation:
      "Autoregulation keeps flow and filtration stable between arterial pressures of about eighty and one hundred eighty millimeters of mercury; it operates through a fast myogenic response and through tubuloglomerular feedback at the macula densa.",
    choices: [
      { text: "intrinsic renal autoregulation", isCorrect: true },
      { text: "the systemic baroreflex alone" },
      { text: "changes in the plasma oncotic force" },
      { text: "antidiuretic hormone secretion" },
    ],
  },
  {
    stem: "The macula densa senses the delivery of sodium chloride to the distal tubule and adjusts the filtration rate of its own nephron through:",
    topic: "Glomerular Filtration & Autoregulation",
    explanation:
      "When sodium chloride delivery rises, the macula densa signals the nearby afferent arteriole to constrict, lowering that nephron's filtration; this tubuloglomerular feedback matches filtration to tubular capacity and contributes to autoregulation.",
    choices: [
      { text: "tubuloglomerular feedback", isCorrect: true },
      { text: "the central baroreflex" },
      { text: "direct sympathetic outflow" },
      { text: "antidiuretic hormone release" },
    ],
  },
  {
    stem: "Angiotensin II preferentially constricts the efferent arteriole, an action that helps to:",
    topic: "Glomerular Filtration & Autoregulation",
    explanation:
      "By raising resistance downstream of the glomerulus, angiotensin II sustains glomerular pressure and filtration when renal perfusion falls; this is why blocking it can drop filtration in patients who depend on that efferent tone, such as in renal artery stenosis.",
    choices: [
      { text: "preserve filtration when renal flow falls", isCorrect: true },
      { text: "lower filtration when renal flow falls" },
      { text: "increase the total renal blood flow" },
      { text: "dilate the glomerular capillaries" },
    ],
  },
  {
    stem: "Nonsteroidal anti-inflammatory drugs can reduce the glomerular filtration rate, especially in volume-depleted patients, by blocking:",
    topic: "Glomerular Filtration & Autoregulation",
    explanation:
      "Prostaglandins dilate the afferent arteriole and protect renal perfusion when circulating volume is low; blocking their synthesis with these drugs removes that afferent dilation, so the afferent constricts and the filtration rate can fall sharply.",
    choices: [
      { text: "afferent vasodilating prostaglandins", isCorrect: true },
      { text: "efferent constricting angiotensin" },
      { text: "the sodium-potassium pump" },
      { text: "antidiuretic hormone action" },
    ],
  },
  {
    stem: "The glomerular capillaries are unusual in that the plasma oncotic pressure rises along their length, which:",
    topic: "Glomerular Filtration & Autoregulation",
    explanation:
      "As protein-free filtrate leaves the capillary, the remaining plasma proteins become more concentrated and their oncotic pressure climbs; this rising opposing force progressively slows filtration toward the efferent end, so filtration is not uniform along the tuft.",
    choices: [
      { text: "progressively opposes further filtration", isCorrect: true },
      { text: "progressively favors more filtration" },
      { text: "has no effect on the filtration" },
      { text: "reverses the direction of filtration" },
    ],
  },
  {
    stem: "Which changes would decrease the glomerular filtration rate? Select all that apply.",
    type: "MULTI",
    topic: "Glomerular Filtration & Autoregulation",
    explanation:
      "Filtration falls when the afferent arteriole constricts, when glomerular hydrostatic pressure drops, when capsular pressure rises with obstruction, or when plasma oncotic pressure climbs; efferent constriction and a fall in plasma oncotic pressure instead tend to raise filtration.",
    choices: [
      { text: "constriction of the afferent arteriole", isCorrect: true },
      { text: "a fall in glomerular hydrostatic pressure", isCorrect: true },
      { text: "a rise in Bowman's capsule pressure", isCorrect: true },
      { text: "a rise in plasma oncotic pressure", isCorrect: true },
      { text: "constriction of the efferent arteriole" },
      { text: "a fall in plasma oncotic pressure" },
    ],
  },
  {
    stem: "True or False: Because efferent constriction raises glomerular capillary pressure, angiotensin II can help maintain filtration even while it reduces overall renal blood flow.",
    type: "TRUE_FALSE",
    topic: "Glomerular Filtration & Autoregulation",
    explanation:
      "True. Angiotensin II raises efferent resistance more than afferent, so glomerular pressure and filtration are supported at the expense of flow; this trade-off preserves excretory function when perfusion is compromised but makes filtration dependent on that tone.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The proximal tubule reabsorbs approximately what fraction of the filtered sodium and water?",
    topic: "Tubular Reabsorption & Secretion",
    explanation:
      "The proximal tubule reclaims about two-thirds of the filtered sodium and water isosmotically, along with nearly all the glucose, amino acids, and bicarbonate; this bulk reabsorption sets up the smaller, finely regulated handling that follows downstream.",
    choices: [
      { text: "about two-thirds of the filtered load", isCorrect: true },
      { text: "about one-tenth of the filtered load" },
      { text: "nearly all of the filtered load" },
      { text: "about one-third of the filtered load" },
    ],
  },
  {
    stem: "Filtered glucose is reclaimed in the proximal tubule by a carrier that couples its uptake to:",
    topic: "Tubular Reabsorption & Secretion",
    explanation:
      "Glucose is reabsorbed by sodium-glucose cotransporters that use the inward sodium gradient to pull glucose in against its own gradient; the gradient itself is maintained by the basolateral sodium pump, so glucose uptake ultimately depends on that pump.",
    choices: [
      { text: "the inward movement of sodium", isCorrect: true },
      { text: "the outward movement of potassium" },
      { text: "the secretion of hydrogen ions" },
      { text: "direct splitting of ATP by the carrier" },
    ],
  },
  {
    stem: "Glucose begins to appear in the urine once the plasma glucose exceeds the renal threshold, because the:",
    topic: "Tubular Reabsorption & Secretion",
    explanation:
      "The glucose transporters have a finite transport maximum; when the filtered load exceeds their capacity, the surplus glucose cannot be reabsorbed and spills into the urine, which is why hyperglycemia beyond the threshold causes glucosuria.",
    choices: [
      { text: "reabsorptive transporters become saturated", isCorrect: true },
      { text: "the glomerular filtration rate collapses" },
      { text: "filtered glucose is actively secreted" },
      { text: "the tubular cells stop making ATP" },
    ],
  },
  {
    stem: "The energy for most tubular sodium reabsorption is supplied directly by the:",
    topic: "Tubular Reabsorption & Secretion",
    explanation:
      "The basolateral sodium-potassium pump continuously exports sodium from the cell, keeping intracellular sodium low; this maintains the gradient that powers sodium entry across the luminal membrane and, with it, the secondary transport of many other solutes.",
    choices: [
      { text: "basolateral sodium-potassium pump", isCorrect: true },
      { text: "luminal sodium-glucose carrier" },
      { text: "apical hydrogen-ion pump" },
      { text: "basolateral chloride channel" },
    ],
  },
  {
    stem: "Organic anions and many drugs, such as penicillin, are added to the tubular fluid in the proximal tubule by:",
    topic: "Tubular Reabsorption & Secretion",
    explanation:
      "The proximal tubule possesses active secretory carriers for organic anions and cations that move drugs and metabolic wastes from blood into the lumen; this secretion clears substances that are highly protein-bound and thus poorly filtered.",
    choices: [
      { text: "active tubular secretion", isCorrect: true },
      { text: "passive glomerular filtration" },
      { text: "water-driven solvent drag" },
      { text: "simple back-diffusion" },
    ],
  },
  {
    stem: "Most of the water reabsorbed in the proximal tubule follows the reabsorbed solute, making proximal reabsorption:",
    topic: "Tubular Reabsorption & Secretion",
    explanation:
      "Water crosses the water-permeable proximal tubule by osmosis in the wake of reabsorbed sodium and solute, so the fluid remaining stays at nearly the same osmolarity as plasma; proximal reabsorption is therefore described as isosmotic.",
    choices: [
      { text: "isosmotic with the plasma", isCorrect: true },
      { text: "strongly hyperosmotic to plasma" },
      { text: "strongly hypoosmotic to plasma" },
      { text: "independent of solute movement" },
    ],
  },
  {
    stem: "Filtered bicarbonate is reclaimed in the proximal tubule indirectly, through the secretion of:",
    topic: "Tubular Reabsorption & Secretion",
    explanation:
      "The tubule secretes hydrogen ions that combine with filtered bicarbonate to form carbon dioxide and water, which enter the cell and regenerate bicarbonate for return to the blood; carbonic anhydrase speeds these reactions on both sides of the membrane.",
    choices: [
      { text: "hydrogen ions into the lumen", isCorrect: true },
      { text: "potassium ions into the lumen" },
      { text: "bicarbonate ions into the lumen" },
      { text: "chloride ions into the lumen" },
    ],
  },
  {
    stem: "The transport maximum for a substance like glucose refers to the:",
    topic: "Tubular Reabsorption & Secretion",
    explanation:
      "The transport maximum is the highest rate at which the carriers can move a solute once they are fully saturated; beyond it, additional filtered solute is excreted, and the gradual approach to saturation gives the curve its rounded splay.",
    choices: [
      { text: "maximal rate the carriers can transport", isCorrect: true },
      { text: "plasma level at which filtration stops" },
      { text: "rate of glomerular filtration itself" },
      { text: "amount of solute in the final urine" },
    ],
  },
  {
    stem: "Because the proximal tubule reabsorbs solute and water in equal proportion, the tubular fluid leaving it is:",
    topic: "Tubular Reabsorption & Secretion",
    explanation:
      "Sodium, its accompanying solutes, and water are removed together, so although about two-thirds of the volume is reabsorbed, the fluid that remains has essentially the same osmolarity as the plasma from which it was filtered.",
    choices: [
      { text: "about isosmotic to plasma", isCorrect: true },
      { text: "markedly concentrated already" },
      { text: "markedly diluted already" },
      { text: "free of all sodium ions" },
    ],
  },
  {
    stem: "Which statements about the proximal tubule are correct? Select all that apply.",
    type: "MULTI",
    topic: "Tubular Reabsorption & Secretion",
    explanation:
      "The proximal tubule reabsorbs roughly two-thirds of filtered sodium and water, reclaims nearly all filtered glucose and amino acids, recovers most filtered bicarbonate, and does so isosmotically; it is not the site of antidiuretic hormone action, nor does it build the medullary gradient.",
    choices: [
      { text: "it reabsorbs about two-thirds of sodium and water", isCorrect: true },
      { text: "it reclaims nearly all glucose and amino acids", isCorrect: true },
      { text: "it recovers most of the filtered bicarbonate", isCorrect: true },
      { text: "its reabsorption is essentially isosmotic", isCorrect: true },
      { text: "it is the main site of antidiuretic hormone action" },
      { text: "it generates the medullary osmotic gradient" },
    ],
  },
  {
    stem: "True or False: Glucose normally spills into the urine only when the plasma glucose rises above the renal threshold and the tubular transporters become saturated.",
    type: "TRUE_FALSE",
    topic: "Tubular Reabsorption & Secretion",
    explanation:
      "True. Below the threshold every filtered glucose molecule is reabsorbed and none reaches the urine; only when the filtered load outstrips the transport maximum does the excess escape reabsorption and appear as glucosuria, as in uncontrolled diabetes.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The thick ascending limb of Henle actively reabsorbs sodium chloride but is impermeable to water, so it:",
    topic: "Loop of Henle & Countercurrent",
    explanation:
      "As salt is pumped out of the water-tight ascending limb, the fluid within becomes progressively dilute while the surrounding interstitium is loaded with solute; the ascending limb is thus the diluting segment and the engine of the concentrating mechanism.",
    choices: [
      { text: "dilutes the fluid it delivers onward", isCorrect: true },
      { text: "concentrates the fluid it delivers onward" },
      { text: "leaves the fluid osmolarity unchanged" },
      { text: "reabsorbs water without any solute" },
    ],
  },
  {
    stem: "The descending limb of the loop of Henle concentrates the tubular fluid because it is:",
    topic: "Loop of Henle & Countercurrent",
    explanation:
      "The descending limb is permeable to water but not to solute, so as it dips into the hyperosmotic medulla water leaves and the tubular fluid becomes progressively concentrated; the ascending limb then reverses this by pumping out salt without water.",
    choices: [
      { text: "permeable to water but not solute", isCorrect: true },
      { text: "permeable to solute but not water" },
      { text: "impermeable to both water and solute" },
      { text: "permeable equally to both" },
    ],
  },
  {
    stem: "The high osmolarity of the renal medullary interstitium is established by the:",
    topic: "Loop of Henle & Countercurrent",
    explanation:
      "The loop's opposing limbs, with active salt transport in the ascending limb and passive water loss in the descending limb, multiply a small transverse difference into a large corticomedullary gradient; this countercurrent multiplier makes concentrated urine possible.",
    choices: [
      { text: "countercurrent multiplier of the loop", isCorrect: true },
      { text: "countercurrent exchanger of vessels" },
      { text: "bulk reabsorption in the proximal tubule" },
      { text: "secretion of potassium distally" },
    ],
  },
  {
    stem: "The vasa recta help preserve the medullary osmotic gradient by functioning as:",
    topic: "Loop of Henle & Countercurrent",
    explanation:
      "The hairpin vasa recta run alongside the loops so that solute diffusing out of the ascending vessel is picked up by the descending one; this countercurrent exchange lets blood nourish the medulla while carrying away little of its precious solute.",
    choices: [
      { text: "countercurrent exchangers", isCorrect: true },
      { text: "countercurrent multipliers" },
      { text: "active salt pumps" },
      { text: "simple end-arterioles" },
    ],
  },
  {
    stem: "Urea contributes to the medullary gradient because it is recycled from the:",
    topic: "Loop of Henle & Countercurrent",
    explanation:
      "Antidiuretic hormone makes the inner medullary collecting duct permeable to urea, which then diffuses into the interstitium and adds to its osmolarity; some re-enters the loop and recycles, so urea handling links water conservation to the gradient.",
    choices: [
      { text: "inner medullary collecting duct", isCorrect: true },
      { text: "cortical proximal tubule" },
      { text: "glomerular filtration barrier" },
      { text: "thick ascending limb wall" },
    ],
  },
  {
    stem: "Loop diuretics such as furosemide produce a large diuresis by inhibiting the sodium-potassium-two-chloride carrier in the:",
    topic: "Loop of Henle & Countercurrent",
    explanation:
      "Blocking the cotransporter in the thick ascending limb prevents salt reabsorption there, both dumping sodium into the urine and dissipating the medullary gradient; the kidney then cannot concentrate the urine, which explains the drug's powerful effect.",
    choices: [
      { text: "thick ascending limb of Henle", isCorrect: true },
      { text: "proximal convoluted tubule" },
      { text: "cortical collecting duct" },
      { text: "distal convoluted tubule" },
    ],
  },
  {
    stem: "The ability of the loop to generate a large medullary gradient from a small step at each level is called the:",
    topic: "Loop of Henle & Countercurrent",
    explanation:
      "Each turn of the loop creates only a modest osmotic difference between the limbs, but the countercurrent flow stacks these single effects along the medulla into a steep gradient; this multiplication is what allows urine to be concentrated far above plasma.",
    choices: [
      { text: "multiplication of the single effect", isCorrect: true },
      { text: "dilution of the single effect" },
      { text: "exchange of the single effect" },
      { text: "filtration of the single effect" },
    ],
  },
  {
    stem: "The maximal concentration of urine a person can achieve depends on the medullary gradient together with the presence of:",
    topic: "Loop of Henle & Countercurrent",
    explanation:
      "Even a steep medullary gradient cannot concentrate urine unless antidiuretic hormone makes the collecting duct permeable to water; the two together allow water to be drawn out into the hyperosmotic medulla, yielding a small volume of concentrated urine.",
    choices: [
      { text: "antidiuretic hormone", isCorrect: true },
      { text: "aldosterone hormone" },
      { text: "atrial natriuretic peptide" },
      { text: "parathyroid hormone" },
    ],
  },
  {
    stem: "Fluid entering the distal tubule from the ascending limb is normally:",
    topic: "Loop of Henle & Countercurrent",
    explanation:
      "Because the ascending limb removes salt without water, the fluid delivered to the distal tubule is hypoosmotic to plasma regardless of the body's hydration state; what happens to it thereafter depends on antidiuretic hormone acting further downstream.",
    choices: [
      { text: "hypoosmotic to the plasma", isCorrect: true },
      { text: "hyperosmotic to the plasma" },
      { text: "exactly isosmotic to plasma" },
      { text: "free of sodium chloride" },
    ],
  },
  {
    stem: "Which factors contribute to building the hyperosmotic medullary interstitium? Select all that apply.",
    type: "MULTI",
    topic: "Loop of Henle & Countercurrent",
    explanation:
      "The gradient is built by active salt reabsorption in the thick ascending limb, the countercurrent geometry of the loop, urea recycling from the collecting duct, and countercurrent exchange in the vasa recta; proximal water reabsorption and distal potassium secretion do not build it.",
    choices: [
      { text: "active salt reabsorption in the ascending limb", isCorrect: true },
      { text: "the countercurrent arrangement of the loop", isCorrect: true },
      { text: "urea recycling from the collecting duct", isCorrect: true },
      { text: "countercurrent exchange in the vasa recta", isCorrect: true },
      { text: "water reabsorption in the proximal tubule" },
      { text: "potassium secretion in the distal tubule" },
    ],
  },
  {
    stem: "True or False: The thick ascending limb is called the diluting segment because it removes solute from the tubular fluid while remaining impermeable to water.",
    type: "TRUE_FALSE",
    topic: "Loop of Henle & Countercurrent",
    explanation:
      "True. Salt is pumped out but water cannot follow, so the fluid left behind is diluted while the interstitium is concentrated; this dual action both dilutes the urine when needed and supplies the gradient used later to concentrate it.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Antidiuretic hormone concentrates the urine by inserting water channels into the apical membrane of the:",
    topic: "Regulation of Water",
    explanation:
      "Antidiuretic hormone binds receptors on the collecting-duct cells and drives aquaporin water channels into their luminal membrane; water is then drawn osmotically into the hyperosmotic medulla, so the urine becomes concentrated and its volume small.",
    choices: [
      { text: "collecting duct cells", isCorrect: true },
      { text: "proximal tubule cells" },
      { text: "thick ascending limb cells" },
      { text: "glomerular capillary wall" },
    ],
  },
  {
    stem: "Antidiuretic hormone is synthesized in the hypothalamus and released into the blood from the:",
    topic: "Regulation of Water",
    explanation:
      "The hormone is made in hypothalamic neurons whose axons run down to the posterior pituitary, where it is stored and released; because it is a neuronal secretion, damage along this tract can cause a deficiency and central diabetes insipidus.",
    choices: [
      { text: "posterior pituitary gland", isCorrect: true },
      { text: "anterior pituitary gland" },
      { text: "adrenal cortex" },
      { text: "thyroid gland" },
    ],
  },
  {
    stem: "The most sensitive physiological stimulus for the release of antidiuretic hormone is a rise in:",
    topic: "Regulation of Water",
    explanation:
      "Hypothalamic osmoreceptors detect tiny increases in plasma osmolarity and trigger antidiuretic hormone release and thirst; large falls in blood volume or pressure can also release it through baroreceptor pathways, but osmolarity is the most sensitive signal.",
    choices: [
      { text: "plasma osmolarity", isCorrect: true },
      { text: "plasma potassium" },
      { text: "arterial oxygen level" },
      { text: "blood glucose level" },
    ],
  },
  {
    stem: "A patient who passes large volumes of dilute urine, and whose urine concentrates after a dose of desmopressin, most likely has:",
    topic: "Regulation of Water",
    explanation:
      "Concentrating the urine in response to synthetic antidiuretic hormone shows the collecting duct can respond, so the defect is a lack of the hormone itself, that is central diabetes insipidus; a nephrogenic defect would not respond to the hormone.",
    choices: [
      { text: "central diabetes insipidus", isCorrect: true },
      { text: "nephrogenic diabetes insipidus" },
      { text: "the syndrome of inappropriate ADH" },
      { text: "primary polydipsia only" },
    ],
  },
  {
    stem: "Free-water clearance is positive, meaning the kidney is excreting solute-free water, when the:",
    topic: "Regulation of Water",
    explanation:
      "When antidiuretic hormone is low the collecting duct stays impermeable to water, so the dilute fluid from the ascending limb is excreted and free water is lost; a positive free-water clearance therefore reflects the excretion of dilute urine.",
    choices: [
      { text: "antidiuretic hormone level is low", isCorrect: true },
      { text: "antidiuretic hormone level is high" },
      { text: "plasma osmolarity is very high" },
      { text: "medullary gradient is abolished" },
    ],
  },
  {
    stem: "The osmoreceptors that govern thirst and antidiuretic hormone secretion are located in the:",
    topic: "Regulation of Water",
    explanation:
      "Specialized neurons in the hypothalamus shrink or swell with changes in plasma osmolarity and thereby regulate both the sensation of thirst and the release of antidiuretic hormone; together these defend plasma osmolarity within a narrow range.",
    choices: [
      { text: "hypothalamus of the brain", isCorrect: true },
      { text: "carotid body of the neck" },
      { text: "wall of the renal tubule" },
      { text: "posterior pituitary gland" },
    ],
  },
  {
    stem: "The maximally concentrated human urine can reach an osmolarity of about:",
    topic: "Regulation of Water",
    explanation:
      "With maximal antidiuretic hormone and a full medullary gradient, human urine can reach roughly twelve hundred milliosmoles per liter, about four times plasma; this ceiling, set by the gradient, determines the minimum water needed to excrete the daily solute load.",
    choices: [
      { text: "1200 milliosmoles per liter", isCorrect: true },
      { text: "300 milliosmoles per liter" },
      { text: "100 milliosmoles per liter" },
      { text: "5000 milliosmoles per liter" },
    ],
  },
  {
    stem: "Alcohol promotes a diuresis chiefly because it:",
    topic: "Regulation of Water",
    explanation:
      "Alcohol suppresses the release of antidiuretic hormone from the posterior pituitary, so the collecting duct becomes water-impermeable and dilute urine is lost; the resulting free-water loss contributes to the dehydration that follows heavy drinking.",
    choices: [
      { text: "inhibits antidiuretic hormone release", isCorrect: true },
      { text: "stimulates antidiuretic hormone release" },
      { text: "blocks the sodium-potassium pump" },
      { text: "increases the glomerular filtration" },
    ],
  },
  {
    stem: "In the syndrome of inappropriate antidiuretic hormone secretion, the urine is inappropriately concentrated and the plasma sodium:",
    topic: "Regulation of Water",
    explanation:
      "Persistent antidiuretic hormone makes the kidney retain water despite a normal or low plasma osmolarity, so water is retained and dilutes the plasma; the hallmark is a low plasma sodium with a concentrated urine, the opposite of diabetes insipidus.",
    choices: [
      { text: "falls with dilutional hyponatremia", isCorrect: true },
      { text: "rises with a clear hypernatremia" },
      { text: "remains completely unchanged" },
      { text: "cannot be predicted reliably" },
    ],
  },
  {
    stem: "A defect in which the collecting duct fails to respond to antidiuretic hormone, producing dilute urine despite high hormone levels, is called:",
    topic: "Regulation of Water",
    explanation:
      "When the kidney cannot respond to the hormone, giving more has no effect and the urine stays dilute; this nephrogenic diabetes insipidus arises from receptor or channel defects or from drugs such as lithium, unlike the central form which lacks the hormone.",
    choices: [
      { text: "nephrogenic diabetes insipidus", isCorrect: true },
      { text: "central diabetes insipidus" },
      { text: "the syndrome of inappropriate ADH" },
      { text: "psychogenic polydipsia" },
    ],
  },
  {
    stem: "Which stimuli increase the secretion of antidiuretic hormone? Select all that apply.",
    type: "MULTI",
    topic: "Regulation of Water",
    explanation:
      "Antidiuretic hormone rises with a rise in plasma osmolarity, a large fall in blood volume, a fall in arterial pressure, and with nausea or pain; a fall in plasma osmolarity or an expansion of blood volume instead suppress its release.",
    choices: [
      { text: "a rise in plasma osmolarity", isCorrect: true },
      { text: "a large fall in blood volume", isCorrect: true },
      { text: "a fall in arterial pressure", isCorrect: true },
      { text: "severe nausea or pain", isCorrect: true },
      { text: "a fall in plasma osmolarity" },
      { text: "an expansion of blood volume" },
    ],
  },
  {
    stem: "True or False: In the syndrome of inappropriate antidiuretic hormone, water is retained and the plasma sodium falls even though the urine is concentrated.",
    type: "TRUE_FALSE",
    topic: "Regulation of Water",
    explanation:
      "True. The unregulated hormone drives water reabsorption regardless of plasma osmolarity, so water accumulates and dilutes the plasma sodium while the kidney continues to put out concentrated urine, giving the characteristic dilutional hyponatremia.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Aldosterone increases sodium reabsorption and potassium secretion mainly by acting on the:",
    topic: "Sodium & ECF Volume Regulation",
    explanation:
      "Aldosterone drives the principal cells of the late distal tubule and collecting duct to insert sodium channels and pumps, reclaiming sodium while secreting potassium; the retained sodium holds water and so expands the extracellular volume over hours to days.",
    choices: [
      { text: "principal cells of the collecting duct", isCorrect: true },
      { text: "cells of the thick ascending limb" },
      { text: "cells of the proximal tubule" },
      { text: "podocytes of the glomerulus" },
    ],
  },
  {
    stem: "The two principal stimuli for the secretion of aldosterone are angiotensin II and:",
    topic: "Sodium & ECF Volume Regulation",
    explanation:
      "Aldosterone release is driven by angiotensin II, generated when volume or pressure falls, and independently by a rise in plasma potassium acting directly on the adrenal cortex; together these let it defend both volume and potassium balance.",
    choices: [
      { text: "a rise in plasma potassium", isCorrect: true },
      { text: "a rise in plasma sodium" },
      { text: "a fall in plasma potassium" },
      { text: "a rise in plasma calcium" },
    ],
  },
  {
    stem: "Atrial natriuretic peptide, released when the atria are stretched, promotes sodium excretion by:",
    topic: "Sodium & ECF Volume Regulation",
    explanation:
      "The peptide raises the filtration rate and directly inhibits sodium reabsorption in the collecting duct, while also suppressing renin and aldosterone; the combined effect increases sodium and water loss, unloading the overfilled circulation.",
    choices: [
      { text: "raising GFR and reducing sodium reabsorption", isCorrect: true },
      { text: "lowering GFR and sparing sodium strongly" },
      { text: "stimulating renin and aldosterone release" },
      { text: "constricting the renal afferent arteriole" },
    ],
  },
  {
    stem: "Over the long term, the volume of the extracellular fluid is determined mainly by the body's total content of:",
    topic: "Sodium & ECF Volume Regulation",
    explanation:
      "Sodium is the osmotic skeleton of the extracellular fluid, and water follows it, so the total body sodium sets the extracellular volume; regulating sodium excretion is therefore how the kidney ultimately controls that volume and, with it, blood pressure.",
    choices: [
      { text: "sodium", isCorrect: true },
      { text: "potassium" },
      { text: "albumin" },
      { text: "bicarbonate" },
    ],
  },
  {
    stem: "Increased renal sympathetic nerve activity tends to:",
    topic: "Sodium & ECF Volume Regulation",
    explanation:
      "Renal sympathetic activity constricts renal vessels, stimulates renin release, and directly enhances tubular sodium reabsorption; the net effect is sodium and water retention, which supports blood volume and pressure during stress or volume loss.",
    choices: [
      { text: "promote renal sodium retention", isCorrect: true },
      { text: "promote renal sodium excretion" },
      { text: "raise the renal blood flow" },
      { text: "suppress the release of renin" },
    ],
  },
  {
    stem: "Which factors promote renal sodium retention? Select all that apply.",
    type: "MULTI",
    topic: "Sodium & ECF Volume Regulation",
    explanation:
      "Sodium is retained under angiotensin II, aldosterone, and increased renal sympathetic tone, and when arterial pressure falls the pressure-natriuresis mechanism withholds sodium; atrial natriuretic peptide and volume expansion instead promote sodium loss.",
    choices: [
      { text: "angiotensin II acting on the tubule", isCorrect: true },
      { text: "aldosterone from the adrenal cortex", isCorrect: true },
      { text: "increased renal sympathetic activity", isCorrect: true },
      { text: "a fall in the arterial pressure", isCorrect: true },
      { text: "atrial natriuretic peptide release" },
      { text: "expansion of the blood volume" },
    ],
  },
  {
    stem: "Which factors increase renal sodium excretion (natriuresis)? Select all that apply.",
    type: "MULTI",
    topic: "Sodium & ECF Volume Regulation",
    explanation:
      "Sodium excretion rises with atrial natriuretic peptide, with a rise in arterial pressure through pressure natriuresis, with volume expansion, and with renal dopamine; aldosterone and angiotensin II act in the opposite direction to conserve sodium.",
    choices: [
      { text: "atrial natriuretic peptide", isCorrect: true },
      { text: "a rise in the arterial pressure", isCorrect: true },
      { text: "expansion of the blood volume", isCorrect: true },
      { text: "dopamine acting in the kidney", isCorrect: true },
      { text: "aldosterone from the adrenal" },
      { text: "angiotensin II on the tubule" },
    ],
  },
  {
    stem: "Renal potassium secretion in the distal nephron is increased by:",
    topic: "Potassium, Calcium & Phosphate",
    explanation:
      "Potassium is secreted by principal cells, and the secretion is enhanced by aldosterone, by a high plasma potassium, and by increased distal flow; these controls let the kidney match excretion to intake and defend the plasma potassium level.",
    choices: [
      { text: "aldosterone and a high plasma potassium", isCorrect: true },
      { text: "a low plasma potassium level alone" },
      { text: "a fall in the distal tubular flow" },
      { text: "angiotensin II acting directly" },
    ],
  },
  {
    stem: "Acute acidosis tends to raise the plasma potassium because hydrogen ions:",
    topic: "Potassium, Calcium & Phosphate",
    explanation:
      "In acidosis, excess hydrogen ions move into cells to be buffered, and potassium moves out to preserve electroneutrality; this transcellular shift raises plasma potassium even when total body potassium is normal, and it reverses as the acidosis is corrected.",
    choices: [
      { text: "enter cells in exchange for potassium", isCorrect: true },
      { text: "leave cells in exchange for potassium" },
      { text: "are secreted with potassium together" },
      { text: "bind directly to plasma potassium" },
    ],
  },
  {
    stem: "Parathyroid hormone raises the plasma calcium in part by increasing calcium reabsorption in the:",
    topic: "Potassium, Calcium & Phosphate",
    explanation:
      "Parathyroid hormone enhances calcium reabsorption in the distal tubule, mobilizes calcium from bone, and stimulates renal activation of vitamin D; together these actions restore a low plasma calcium toward normal while promoting phosphate loss.",
    choices: [
      { text: "distal tubule of the nephron", isCorrect: true },
      { text: "thick ascending limb only" },
      { text: "proximal tubule alone" },
      { text: "collecting duct principal cells" },
    ],
  },
  {
    stem: "Parathyroid hormone lowers the plasma phosphate by:",
    topic: "Potassium, Calcium & Phosphate",
    explanation:
      "Parathyroid hormone inhibits the sodium-phosphate cotransporter in the proximal tubule, so less filtered phosphate is reclaimed and more is excreted; this phosphaturic action offsets the phosphate released from bone, keeping the calcium-phosphate product in check.",
    choices: [
      { text: "reducing its proximal reabsorption", isCorrect: true },
      { text: "increasing its proximal reabsorption" },
      { text: "blocking its glomerular filtration" },
      { text: "stimulating its distal reabsorption" },
    ],
  },
  {
    stem: "The kidney completes the activation of vitamin D by converting it to:",
    topic: "Potassium, Calcium & Phosphate",
    explanation:
      "The proximal tubule's one-alpha-hydroxylase converts twenty-five-hydroxyvitamin D into the active one, twenty-five-dihydroxyvitamin D, under the influence of parathyroid hormone; this active form then raises intestinal absorption of calcium and phosphate.",
    choices: [
      { text: "1,25-dihydroxyvitamin D", isCorrect: true },
      { text: "25-hydroxyvitamin D" },
      { text: "inactive vitamin D2" },
      { text: "7-dehydrocholesterol" },
    ],
  },
  {
    stem: "Which conditions tend to raise the plasma potassium (hyperkalemia)? Select all that apply.",
    type: "MULTI",
    topic: "Potassium, Calcium & Phosphate",
    explanation:
      "Potassium rises with metabolic acidosis, with insulin deficiency, with aldosterone deficiency, and when cell breakdown releases intracellular potassium; alkalosis and insulin excess instead drive potassium into cells and lower the plasma level.",
    choices: [
      { text: "a metabolic acidosis", isCorrect: true },
      { text: "a deficiency of insulin", isCorrect: true },
      { text: "a deficiency of aldosterone", isCorrect: true },
      { text: "the breakdown of body tissue", isCorrect: true },
      { text: "a chronic metabolic alkalosis" },
      { text: "an excess of circulating insulin" },
    ],
  },
  {
    stem: "By the Henderson-Hasselbalch relationship, the arterial pH is set by the ratio of bicarbonate to the:",
    topic: "Acid-Base Physiology",
    explanation:
      "The pH depends on the ratio of bicarbonate, regulated by the kidney, to the dissolved carbon dioxide, set by the lungs; because the ratio matters, a disturbance in one can be offset by an adjustment in the other to defend the pH.",
    choices: [
      { text: "partial pressure of carbon dioxide", isCorrect: true },
      { text: "the total plasma protein level" },
      { text: "the plasma chloride concentration" },
      { text: "the plasma potassium concentration" },
    ],
  },
  {
    stem: "The most important buffer of the extracellular fluid is the:",
    topic: "Acid-Base Physiology",
    explanation:
      "The bicarbonate system is the principal extracellular buffer, not because it is chemically the strongest but because its two components are independently controlled by the lungs and kidneys; this open system gives it enormous effective buffering power.",
    choices: [
      { text: "bicarbonate buffer system", isCorrect: true },
      { text: "phosphate buffer system" },
      { text: "hemoglobin buffer system" },
      { text: "plasma protein buffer" },
    ],
  },
  {
    stem: "Whereas the lungs excrete the volatile acid carbon dioxide, the kidneys are responsible for excreting the:",
    topic: "Acid-Base Physiology",
    explanation:
      "Metabolism produces volatile acid as carbon dioxide, cleared by the lungs, and fixed acids such as sulfuric and phosphoric acid, which only the kidney can excrete; the kidney also regenerates the bicarbonate consumed in buffering these acids.",
    choices: [
      { text: "fixed nonvolatile acids", isCorrect: true },
      { text: "volatile carbon dioxide" },
      { text: "filtered bicarbonate load" },
      { text: "dissolved oxygen content" },
    ],
  },
  {
    stem: "The kidney excretes most of its daily acid load buffered in the urine as:",
    topic: "Acid-Base Physiology",
    explanation:
      "Secreted hydrogen ions are trapped in the urine as titratable acid, chiefly on phosphate, and as ammonium made from glutamine; both allow large amounts of acid to be excreted at a tolerable urine pH while new bicarbonate is returned to the blood.",
    choices: [
      { text: "ammonium and titratable acid", isCorrect: true },
      { text: "free hydrogen ions alone" },
      { text: "filtered bicarbonate ions" },
      { text: "dissolved carbon dioxide" },
    ],
  },
  {
    stem: "During chronic metabolic acidosis, the kidney's capacity to excrete acid rises largely through increased:",
    topic: "Acid-Base Physiology",
    explanation:
      "Sustained acidosis induces the enzymes of renal glutamine metabolism, so ammonium production and excretion climb over days; this adaptive ammoniagenesis lets the kidney dispose of more acid and regenerate more bicarbonate than in the acute setting.",
    choices: [
      { text: "ammonia production from glutamine", isCorrect: true },
      { text: "filtration of more bicarbonate" },
      { text: "reabsorption of more chloride" },
      { text: "distal secretion of potassium" },
    ],
  },
  {
    stem: "True or False: The lungs excrete the volatile acid as carbon dioxide, while the kidneys excrete the fixed acids and regenerate the bicarbonate consumed in buffering them.",
    type: "TRUE_FALSE",
    topic: "Acid-Base Physiology",
    explanation:
      "True. This division of labor lets the fast respiratory system handle the large volatile acid load minute to minute while the slower kidney disposes of fixed acids and restores bicarbonate stores, together keeping the blood pH within narrow limits.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Which statements about renal acid-base handling are correct? Select all that apply.",
    type: "MULTI",
    topic: "Acid-Base Physiology",
    explanation:
      "The proximal tubule reabsorbs most filtered bicarbonate, the distal nephron generates new bicarbonate as it excretes acid, ammonium excretion rises in chronic acidosis, and phosphate buffers secreted hydrogen ions as titratable acid; the kidney does not excrete volatile carbon dioxide, nor make bicarbonate in the glomerulus.",
    choices: [
      { text: "most filtered bicarbonate is reabsorbed proximally", isCorrect: true },
      { text: "new bicarbonate is generated as acid is excreted", isCorrect: true },
      { text: "ammonium excretion rises in chronic acidosis", isCorrect: true },
      { text: "phosphate buffers acid as titratable acid", isCorrect: true },
      { text: "the kidney excretes carbon dioxide as fixed acid" },
      { text: "new bicarbonate is generated in the glomerulus" },
    ],
  },
  {
    stem: "In a primary metabolic acidosis, the expected respiratory compensation is to:",
    topic: "Acid-Base Disorders",
    explanation:
      "A low bicarbonate lowers the pH, and the chemoreceptors respond by increasing ventilation to blow off carbon dioxide; the resulting fall in carbon dioxide pulls the bicarbonate-to-carbon-dioxide ratio back toward normal, limiting the drop in pH.",
    choices: [
      { text: "lower the carbon dioxide by hyperventilation", isCorrect: true },
      { text: "raise the carbon dioxide by hypoventilation" },
      { text: "retain more bicarbonate at the kidney" },
      { text: "excrete more bicarbonate at the kidney" },
    ],
  },
  {
    stem: "The plasma anion gap is calculated as the sodium concentration minus the sum of chloride and:",
    topic: "Acid-Base Disorders",
    explanation:
      "The anion gap estimates unmeasured anions as sodium minus chloride and bicarbonate; a normal value reflects the usual unmeasured anions, while a widened gap signals the accumulation of acid anions such as lactate or ketoacids.",
    choices: [
      { text: "bicarbonate", isCorrect: true },
      { text: "potassium" },
      { text: "albumin" },
      { text: "phosphate" },
    ],
  },
  {
    stem: "A high-anion-gap metabolic acidosis is characteristically produced by:",
    topic: "Acid-Base Disorders",
    explanation:
      "In diabetic ketoacidosis, unmeasured ketoacid anions accumulate and consume bicarbonate, widening the anion gap; disorders that instead lose bicarbonate directly, such as diarrhea, lower bicarbonate but leave the gap normal by retaining chloride.",
    choices: [
      { text: "diabetic ketoacidosis", isCorrect: true },
      { text: "severe watery diarrhea" },
      { text: "prolonged vomiting" },
      { text: "a thiazide diuretic" },
    ],
  },
  {
    stem: "A normal-anion-gap metabolic acidosis is typically caused by:",
    topic: "Acid-Base Disorders",
    explanation:
      "When bicarbonate is lost through the gut or the kidney, chloride is retained to preserve electroneutrality, so the anion gap stays normal; severe diarrhea and renal tubular acidosis are classic causes of this hyperchloremic pattern.",
    choices: [
      { text: "severe diarrhea losing bicarbonate", isCorrect: true },
      { text: "lactic acidosis from poor perfusion" },
      { text: "uncontrolled diabetic ketoacidosis" },
      { text: "acute methanol poisoning" },
    ],
  },
  {
    stem: "Respiratory compensation for a primary metabolic alkalosis consists of:",
    topic: "Acid-Base Disorders",
    explanation:
      "A high bicarbonate raises the pH, so ventilation is reflexly reduced to retain carbon dioxide and pull the pH back down; this compensation is limited, however, because hypoventilation cannot proceed far without causing hypoxemia.",
    choices: [
      { text: "hypoventilation to raise carbon dioxide", isCorrect: true },
      { text: "hyperventilation to lower carbon dioxide" },
      { text: "renal retention of bicarbonate" },
      { text: "renal excretion of bicarbonate" },
    ],
  },
  {
    stem: "Prolonged vomiting characteristically produces a:",
    topic: "Acid-Base Disorders",
    explanation:
      "Vomiting loses hydrogen and chloride ions from the stomach, and volume depletion further drives the kidney to retain bicarbonate; the result is a hypochloremic metabolic alkalosis, which is maintained until the chloride and volume deficits are repaired.",
    choices: [
      { text: "metabolic alkalosis with low chloride", isCorrect: true },
      { text: "metabolic acidosis with high chloride" },
      { text: "respiratory acidosis with high carbon dioxide" },
      { text: "respiratory alkalosis with low carbon dioxide" },
    ],
  },
  {
    stem: "Which conditions typically produce a metabolic acidosis? Select all that apply.",
    type: "MULTI",
    topic: "Acid-Base Disorders",
    explanation:
      "Metabolic acidosis arises when acid is added or bicarbonate is lost: diabetic ketoacidosis, lactic acidosis from poor perfusion, bicarbonate-losing diarrhea, and the acid retention of kidney failure all qualify; vomiting and diuretic-induced volume loss instead cause alkalosis.",
    choices: [
      { text: "diabetic ketoacidosis", isCorrect: true },
      { text: "lactic acidosis from hypoperfusion", isCorrect: true },
      { text: "severe diarrhea losing bicarbonate", isCorrect: true },
      { text: "acid retention in kidney failure", isCorrect: true },
      { text: "prolonged gastric vomiting" },
      { text: "diuretic-induced volume loss" },
    ],
  },
  {
    stem: "Which features characterize a high-anion-gap metabolic acidosis? Select all that apply.",
    type: "MULTI",
    topic: "Acid-Base Disorders",
    explanation:
      "The high-gap pattern shows accumulation of unmeasured acid anions, a low bicarbonate consumed in buffering, a widened anion gap, and compensatory hyperventilation lowering carbon dioxide; a normal gap or a high bicarbonate would point elsewhere.",
    choices: [
      { text: "raised unmeasured acid anions", isCorrect: true },
      { text: "a low plasma bicarbonate", isCorrect: true },
      { text: "a widened anion gap", isCorrect: true },
      { text: "compensatory hyperventilation", isCorrect: true },
      { text: "an entirely normal anion gap value" },
      { text: "a distinctly raised bicarbonate" },
    ],
  },
  {
    stem: "A potassium-sparing diuretic that works by blocking the aldosterone receptor is:",
    topic: "Clinical Application",
    explanation:
      "Spironolactone competitively blocks the mineralocorticoid receptor, so the collecting duct reabsorbs less sodium and secretes less potassium; the modest natriuresis is accompanied by potassium retention, making it useful where potassium loss must be avoided.",
    choices: [
      { text: "spironolactone", isCorrect: true },
      { text: "furosemide" },
      { text: "hydrochlorothiazide" },
      { text: "acetazolamide" },
    ],
  },
  {
    stem: "Thiazide diuretics act by inhibiting the sodium-chloride cotransporter of the:",
    topic: "Clinical Application",
    explanation:
      "Thiazides block the sodium-chloride cotransporter in the early distal convoluted tubule, producing a moderate natriuresis; by enhancing distal sodium delivery they also increase potassium loss and, unlike loop agents, tend to raise calcium reabsorption.",
    choices: [
      { text: "distal convoluted tubule", isCorrect: true },
      { text: "thick ascending limb" },
      { text: "proximal convoluted tubule" },
      { text: "collecting duct segment" },
    ],
  },
  {
    stem: "The carbonic anhydrase inhibitor acetazolamide causes a mild metabolic acidosis because it:",
    topic: "Clinical Application",
    explanation:
      "By blocking carbonic anhydrase in the proximal tubule, acetazolamide prevents bicarbonate reabsorption, so bicarbonate is lost in the urine; the resulting bicarbonate depletion produces a mild metabolic acidosis along with the drug's diuretic effect.",
    choices: [
      { text: "causes bicarbonate to be lost in urine", isCorrect: true },
      { text: "causes bicarbonate to be retained" },
      { text: "blocks sodium in the loop" },
      { text: "blocks the aldosterone receptor" },
    ],
  },
  {
    stem: "A patient with an acute asthma attack tiring into respiratory failure shows a rising carbon dioxide with a falling pH and a near-normal bicarbonate. This indicates:",
    topic: "Clinical Application",
    explanation:
      "A high carbon dioxide with a low pH and a bicarbonate that has not yet risen marks an acute respiratory acidosis; the normal bicarbonate shows the kidney has not had time to compensate, a worrying sign of impending respiratory failure.",
    choices: [
      { text: "an acute respiratory acidosis", isCorrect: true },
      { text: "a chronic respiratory acidosis" },
      { text: "a metabolic acidosis" },
      { text: "a respiratory alkalosis" },
    ],
  },
  {
    stem: "Advanced chronic kidney disease impairs erythropoietin production, which contributes to the associated:",
    topic: "Clinical Application",
    explanation:
      "The diseased kidney makes too little erythropoietin, so red-cell production falls and a normocytic anemia develops; this is one of several consequences of failing renal endocrine and excretory function, alongside acid, potassium, and phosphate retention.",
    choices: [
      { text: "anemia from low erythropoietin", isCorrect: true },
      { text: "polycythemia from high erythropoietin" },
      { text: "a metabolic alkalosis" },
      { text: "a low plasma phosphate" },
    ],
  },
  {
    stem: "Which findings are expected in advanced chronic kidney disease? Select all that apply.",
    type: "MULTI",
    topic: "Clinical Application",
    explanation:
      "The failing kidney retains acid, potassium, and phosphate and makes too little erythropoietin, so a metabolic acidosis, hyperkalemia, hyperphosphatemia, and anemia develop; a metabolic alkalosis or a raised erythropoietin level would not fit the picture.",
    choices: [
      { text: "a metabolic acidosis", isCorrect: true },
      { text: "hyperkalemia", isCorrect: true },
      { text: "phosphate retention", isCorrect: true },
      { text: "anemia from low erythropoietin", isCorrect: true },
      { text: "a metabolic alkalosis" },
      { text: "a raised erythropoietin level" },
    ],
  },
];
