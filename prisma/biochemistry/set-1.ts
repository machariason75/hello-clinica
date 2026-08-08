/**
 * BIOCHEMISTRY — PRACTICE SET 1
 * Amino Acids, Proteins & Enzymes
 *
 * Difficulty: Foundational. The chemistry the rest of the subject is built on —
 * how amino acids assemble into proteins, how proteins fold into machines, and
 * how those machines (enzymes) are described by kinetics and controlled by
 * regulation. Pairs with Set 2 (Bioenergetics) to build Exam 1, the Foundations
 * Block.
 *
 * 80 questions across 12 topics:
 *   Amino Acid Chemistry · Protein Structure · Protein Folding & Denaturation ·
 *   Enzyme Catalysis · Enzyme Kinetics · Enzyme Inhibition · Enzyme Regulation ·
 *   Cofactors & Coenzymes · Hemoglobin & Oxygen Transport · Collagen & Structural
 *   Proteins · Clinical Enzymology · Clinical Application
 *
 * Item mix: 60 single-answer, 10 select-all-that-apply, 10 true/false.
 * US conventional units and standard biochemical nomenclature throughout.
 */

import type { Q } from "../_lib/qbank";

export const BIOCHEMISTRY_SET_1: Q[] = [
  /* ══════════════ AMINO ACID CHEMISTRY ══════════════ */
  {
    stem: "At physiologic pH (about 7.4), a typical free amino acid exists predominantly as a zwitterion. This means it has:",
    topic: "Amino Acid Chemistry",
    explanation:
      "At pH 7.4 the alpha-carboxyl group (pKa ~2) is deprotonated and negatively charged while the alpha-amino group (pKa ~9-10) is protonated and positively charged, giving a net-neutral dipolar ion. This dual ionization underlies amino acids' buffering behavior near their pKa values.",
    choices: [
      { text: "A negatively charged carboxyl group and a positively charged amino group", isCorrect: true },
      { text: "Two positive charges and no negative charge" },
      { text: "A neutral carboxyl and a neutral amino group" },
      { text: "Only a single negative charge overall" },
      { text: "No ionizable groups at all" },
    ],
  },
  {
    stem: "Which amino acid is unique in that its side chain forms a covalent bond back to its own backbone nitrogen, creating a rigid ring that disrupts alpha-helices?",
    topic: "Amino Acid Chemistry",
    explanation:
      "Proline's side chain loops back to the backbone nitrogen, forming a secondary amine (imino acid) with restricted rotation; this rigidity introduces kinks and disrupts regular alpha-helical geometry, so proline is often called a 'helix breaker.' It is also key to collagen's structure.",
    choices: [
      { text: "Proline", isCorrect: true },
      { text: "Glycine" },
      { text: "Alanine" },
      { text: "Leucine" },
      { text: "Serine" },
    ],
  },
  {
    stem: "Which amino acid's side chain (pKa near 6) makes it the most effective amino acid buffer at physiologic pH and a common catalytic residue in enzyme active sites?",
    topic: "Amino Acid Chemistry",
    explanation:
      "Histidine's imidazole side chain has a pKa around 6, close enough to 7.4 to shuttle protons readily, making it both a good physiologic buffer and a frequent acid-base catalyst in enzyme active sites. This proton-handling ability is central to many catalytic mechanisms.",
    choices: [
      { text: "Histidine", isCorrect: true },
      { text: "Valine" },
      { text: "Phenylalanine" },
      { text: "Isoleucine" },
      { text: "Methionine" },
    ],
  },
  {
    stem: "The distinction between an essential and a non-essential amino acid is that essential amino acids:",
    topic: "Amino Acid Chemistry",
    explanation:
      "Essential amino acids cannot be synthesized by humans in adequate amounts and must be obtained from the diet, whereas non-essential ones can be made from metabolic intermediates. This is a nutritional distinction, not a statement about their importance in proteins.",
    choices: [
      { text: "Cannot be synthesized by the body and must be obtained from the diet", isCorrect: true },
      { text: "Are the only ones found in human proteins" },
      { text: "Are more important to protein function than non-essential ones" },
      { text: "Are synthesized only in the liver" },
      { text: "Contain sulfur in their side chains" },
    ],
  },
  {
    stem: "Which two amino acids contain sulfur in their side chains, with one able to form disulfide bonds?",
    topic: "Amino Acid Chemistry",
    explanation:
      "Cysteine and methionine are the sulfur-containing amino acids; cysteine's thiol group can be oxidized to form disulfide bonds that stabilize tertiary and quaternary protein structure. Methionine, carrying a thioether, also serves as the start codon's amino acid.",
    choices: [
      { text: "Cysteine and methionine", isCorrect: true },
      { text: "Serine and threonine" },
      { text: "Aspartate and glutamate" },
      { text: "Lysine and arginine" },
      { text: "Leucine and isoleucine" },
    ],
  },
  {
    stem: "Which amino acids carry a net negative charge (acidic side chains) at physiologic pH? Select all that apply.",
    type: "MULTI",
    topic: "Amino Acid Chemistry",
    explanation:
      "Aspartate and glutamate have carboxylate side chains that are deprotonated and negatively charged at pH 7.4. Lysine and arginine are basic (positively charged), and leucine is nonpolar, so those do not carry a negative charge.",
    choices: [
      { text: "Aspartate", isCorrect: true },
      { text: "Glutamate", isCorrect: true },
      { text: "Lysine" },
      { text: "Arginine" },
      { text: "Leucine" },
    ],
  },
  {
    stem: "True or False: Glycine is the only standard amino acid that is not chiral, because its side chain is a single hydrogen atom.",
    type: "TRUE_FALSE",
    topic: "Amino Acid Chemistry",
    explanation:
      "True. Glycine's 'side chain' is just a hydrogen, so its alpha-carbon has two identical hydrogens and is not a stereocenter, making glycine achiral. Its small size also lets it fit into tight turns where larger residues cannot.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  /* ══════════════ PROTEIN STRUCTURE ══════════════ */
  {
    stem: "The primary structure of a protein refers to:",
    topic: "Protein Structure",
    explanation:
      "Primary structure is the linear sequence of amino acids joined by peptide bonds, encoded by the gene. Because sequence dictates all higher levels of folding, a single amino acid change can alter the protein's final three-dimensional shape and function.",
    choices: [
      { text: "The linear sequence of amino acids linked by peptide bonds", isCorrect: true },
      { text: "The local coiling into helices and sheets" },
      { text: "The overall three-dimensional fold of one chain" },
      { text: "The assembly of multiple subunits" },
      { text: "The pattern of disulfide bonds only" },
    ],
  },
  {
    stem: "Alpha-helices and beta-pleated sheets are elements of secondary structure that are stabilized primarily by:",
    topic: "Protein Structure",
    explanation:
      "Secondary structure is held together by hydrogen bonds between backbone carbonyl oxygen and amide hydrogen atoms, independent of side-chain identity. This backbone hydrogen bonding gives the regular, repeating geometry of helices and sheets.",
    choices: [
      { text: "Hydrogen bonds between backbone atoms", isCorrect: true },
      { text: "Disulfide bonds between cysteines" },
      { text: "Peptide bonds between side chains" },
      { text: "Ionic bonds between metal ions" },
      { text: "Covalent bonds between distant residues" },
    ],
  },
  {
    stem: "The peptide bond has partial double-bond character, which explains why it is:",
    topic: "Protein Structure",
    explanation:
      "Resonance delocalizes electrons across the C-N peptide bond, giving it partial double-bond character that makes it planar and rigid, restricting rotation. This planarity constrains the backbone conformations available and shapes secondary structure.",
    choices: [
      { text: "Planar and rigid, with restricted rotation", isCorrect: true },
      { text: "Freely rotating in all directions" },
      { text: "Easily hydrolyzed at physiologic pH without enzymes" },
      { text: "Ionic rather than covalent" },
      { text: "Stabilized only by disulfide bridges" },
    ],
  },
  {
    stem: "Tertiary structure — the overall three-dimensional fold of a single polypeptide — is stabilized by all of the following except:",
    topic: "Protein Structure",
    explanation:
      "Tertiary structure is held by hydrophobic interactions, hydrogen bonds, ionic (salt) bridges and disulfide bonds among side chains. Peptide bonds link residues in the primary sequence but do not, by themselves, fold the chain into its tertiary shape.",
    choices: [
      { text: "Peptide bonds between adjacent residues", isCorrect: true },
      { text: "Hydrophobic interactions among nonpolar side chains" },
      { text: "Disulfide bonds between cysteines" },
      { text: "Ionic bonds between charged side chains" },
      { text: "Hydrogen bonds between side chains" },
    ],
  },
  {
    stem: "A protein described as having quaternary structure necessarily:",
    topic: "Protein Structure",
    explanation:
      "Quaternary structure is the assembly of two or more folded polypeptide subunits into a functional complex, as in hemoglobin's four chains. A protein with a single chain, however large, has no quaternary structure.",
    choices: [
      { text: "Contains more than one polypeptide subunit", isCorrect: true },
      { text: "Consists of a single very long chain" },
      { text: "Lacks any secondary structure" },
      { text: "Cannot contain disulfide bonds" },
      { text: "Is always an enzyme" },
    ],
  },
  {
    stem: "Which forces or bonds contribute to stabilizing the folded tertiary structure of a globular protein? Select all that apply.",
    type: "MULTI",
    topic: "Protein Structure",
    explanation:
      "Hydrophobic interactions burying nonpolar residues in the core, ionic salt bridges, side-chain hydrogen bonds, and disulfide bonds all stabilize tertiary structure. Random unfolding into a denatured coil is the opposite of stabilization, not a stabilizing force.",
    choices: [
      { text: "Hydrophobic interactions", isCorrect: true },
      { text: "Ionic (salt) bridges", isCorrect: true },
      { text: "Side-chain hydrogen bonds", isCorrect: true },
      { text: "Disulfide bonds", isCorrect: true },
      { text: "Random coil formation" },
    ],
  },
  /* ══════════════ PROTEIN FOLDING & DENATURATION ══════════════ */
  {
    stem: "Denaturation abolishes an enzyme's activity even though no peptide bonds are broken because:",
    topic: "Protein Folding & Denaturation",
    explanation:
      "Denaturation disrupts the non-covalent interactions and any disulfide bonds that maintain the three-dimensional fold, so the active site's precise geometry is lost while the amino acid sequence (primary structure) stays intact. Function depends on shape, not sequence alone.",
    choices: [
      { text: "The three-dimensional shape of the active site is lost while the sequence remains", isCorrect: true },
      { text: "The primary sequence is cleaved into fragments" },
      { text: "New amino acids are added to the chain" },
      { text: "The gene encoding it is mutated" },
      { text: "Peptide bonds are hydrolyzed" },
    ],
  },
  {
    stem: "Which agents commonly denature proteins? Select all that apply.",
    type: "MULTI",
    topic: "Protein Folding & Denaturation",
    explanation:
      "Heat, extremes of pH, and chaotropic agents such as urea all disrupt the weak interactions that maintain protein fold, causing denaturation. Storing a protein at its optimal physiologic temperature and pH preserves rather than denatures it.",
    choices: [
      { text: "High temperature", isCorrect: true },
      { text: "Extremes of pH", isCorrect: true },
      { text: "Urea or other chaotropic agents", isCorrect: true },
      { text: "Storage at physiologic temperature and pH" },
      { text: "Maintaining the protein in its native buffer" },
    ],
  },
  {
    stem: "Molecular chaperones such as the heat-shock proteins assist protein folding by:",
    topic: "Protein Folding & Denaturation",
    explanation:
      "Chaperones bind exposed hydrophobic regions of nascent or stressed proteins and prevent inappropriate aggregation, giving the polypeptide time to reach its correct native fold. They do not dictate the final structure, which is encoded by the sequence itself.",
    choices: [
      { text: "Preventing aggregation and helping proteins reach their native fold", isCorrect: true },
      { text: "Cutting misfolded proteins into amino acids" },
      { text: "Adding the amino acid sequence to the protein" },
      { text: "Encoding the protein's final shape themselves" },
      { text: "Forming permanent covalent bonds with the client protein" },
    ],
  },
  {
    stem: "Prion diseases illustrate a striking principle of protein folding, namely that:",
    topic: "Protein Folding & Denaturation",
    explanation:
      "A misfolded prion protein (rich in beta-sheet) can template the conversion of normally folded copies into the same misfolded, aggregation-prone form, propagating disease without any change in DNA sequence. This shows that conformation itself can be self-propagating.",
    choices: [
      { text: "A misfolded protein can induce normal copies to misfold", isCorrect: true },
      { text: "Proteins can replicate their own DNA" },
      { text: "Denaturation is always reversible" },
      { text: "Sequence changes are required for aggregation" },
      { text: "Chaperones cause the disease directly" },
    ],
  },
  {
    stem: "True or False: The information needed for a protein to fold into its correct three-dimensional shape is contained within its amino acid sequence.",
    type: "TRUE_FALSE",
    topic: "Protein Folding & Denaturation",
    explanation:
      "True. Anfinsen's classic work showed that many denatured proteins can spontaneously refold to their native, active state once denaturant is removed, demonstrating that the primary sequence encodes the final fold. Chaperones assist but do not override this information.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  /* ══════════════ ENZYME CATALYSIS ══════════════ */
  {
    stem: "Enzymes accelerate biochemical reactions primarily by:",
    topic: "Enzyme Catalysis",
    explanation:
      "Enzymes lower the activation energy of a reaction, largely by binding and stabilizing the transition state, which increases the fraction of substrate molecules that can react. They do not change the reaction's overall thermodynamics or equilibrium position.",
    choices: [
      { text: "Lowering the activation energy by stabilizing the transition state", isCorrect: true },
      { text: "Increasing the activation energy required" },
      { text: "Changing the equilibrium constant of the reaction" },
      { text: "Making an endergonic reaction exergonic" },
      { text: "Supplying energy to push the reaction forward" },
    ],
  },
  {
    stem: "According to the induced-fit model of enzyme action, the active site:",
    topic: "Enzyme Catalysis",
    explanation:
      "In the induced-fit model, substrate binding causes a conformational change in the active site that molds it around the substrate, optimizing catalytic contacts. This refines the older rigid 'lock-and-key' picture in which the site was assumed to be perfectly preformed.",
    choices: [
      { text: "Changes shape upon substrate binding to fit it more precisely", isCorrect: true },
      { text: "Is perfectly rigid and never changes shape" },
      { text: "Binds any molecule regardless of shape" },
      { text: "Is destroyed after each catalytic cycle" },
      { text: "Is located on a separate protein" },
    ],
  },
  {
    stem: "An enzyme does not alter the equilibrium of a reaction. This is because it:",
    topic: "Enzyme Catalysis",
    explanation:
      "Enzymes speed the forward and reverse reactions equally, so they hasten the approach to equilibrium without shifting where that equilibrium lies. The equilibrium position is set by the free-energy difference between reactants and products, which the enzyme cannot change.",
    choices: [
      { text: "Accelerates the forward and reverse reactions equally", isCorrect: true },
      { text: "Only accelerates the forward reaction" },
      { text: "Adds free energy to the products" },
      { text: "Is consumed in the reaction" },
      { text: "Changes the free energy of the reactants permanently" },
    ],
  },
  {
    stem: "The remarkable specificity of enzymes for particular substrates arises mainly from:",
    topic: "Enzyme Catalysis",
    explanation:
      "The complementary shape and chemistry of the active site — its size, charge distribution and hydrogen-bonding pattern — allow it to bind only substrates that fit precisely, giving enzymes their specificity. This structural complementarity is the basis of molecular recognition.",
    choices: [
      { text: "The complementary shape and chemistry of the active site", isCorrect: true },
      { text: "The overall molecular weight of the enzyme" },
      { text: "The number of subunits present" },
      { text: "The concentration of enzyme alone" },
      { text: "The temperature of the reaction only" },
    ],
  },
  {
    stem: "True or False: Because enzymes are catalysts, they are not consumed in the reactions they catalyze and can act repeatedly.",
    type: "TRUE_FALSE",
    topic: "Enzyme Catalysis",
    explanation:
      "True. A catalyst emerges unchanged from the reaction and is regenerated each cycle, so a small amount of enzyme can convert a large amount of substrate over time. This turnover is what makes enzymes so metabolically efficient.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  /* ══════════════ ENZYME KINETICS ══════════════ */
  {
    stem: "In Michaelis-Menten kinetics, the Michaelis constant (Km) represents:",
    topic: "Enzyme Kinetics",
    explanation:
      "Km is the substrate concentration at which the reaction proceeds at half of Vmax. A low Km indicates high apparent affinity (little substrate needed to reach half-maximal velocity), while a high Km indicates low apparent affinity.",
    choices: [
      { text: "The substrate concentration that gives half-maximal velocity", isCorrect: true },
      { text: "The maximum velocity of the reaction" },
      { text: "The total enzyme concentration" },
      { text: "The rate at infinite substrate" },
      { text: "The concentration of product at equilibrium" },
    ],
  },
  {
    stem: "A low Km value for an enzyme-substrate pair indicates that the enzyme has:",
    topic: "Enzyme Kinetics",
    explanation:
      "A low Km means half-maximal velocity is reached at a low substrate concentration, reflecting a high apparent affinity of the enzyme for that substrate. Conversely, a high Km reflects lower apparent affinity, as with hepatic glucokinase.",
    choices: [
      { text: "A high apparent affinity for its substrate", isCorrect: true },
      { text: "A low apparent affinity for its substrate" },
      { text: "A high maximum velocity" },
      { text: "No dependence on substrate concentration" },
      { text: "An irreversible inhibitor bound" },
    ],
  },
  {
    stem: "Vmax, the maximum reaction velocity, is reached when:",
    topic: "Enzyme Kinetics",
    explanation:
      "Vmax is approached as substrate concentration becomes high enough to saturate essentially all enzyme active sites, so the rate no longer rises with more substrate. Vmax is proportional to the amount of enzyme present.",
    choices: [
      { text: "The enzyme is saturated with substrate", isCorrect: true },
      { text: "Substrate concentration equals Km" },
      { text: "There is no substrate present" },
      { text: "The enzyme is completely inhibited" },
      { text: "Temperature is at absolute zero" },
    ],
  },
  {
    stem: "On a Lineweaver-Burk (double-reciprocal) plot, the x-intercept and y-intercept correspond respectively to:",
    topic: "Enzyme Kinetics",
    explanation:
      "The double-reciprocal plot linearizes Michaelis-Menten data so that the y-intercept equals 1/Vmax and the x-intercept equals -1/Km. This transformation makes it easy to read kinetic constants and to distinguish inhibitor types from how the lines shift.",
    choices: [
      { text: "-1/Km and 1/Vmax", isCorrect: true },
      { text: "Km and Vmax directly" },
      { text: "1/Km and -1/Vmax" },
      { text: "Vmax and Km directly" },
      { text: "The substrate and product concentrations" },
    ],
  },
  {
    stem: "Hepatic glucokinase has a high Km for glucose compared with hexokinase in other tissues. The functional consequence is that glucokinase:",
    topic: "Enzyme Kinetics",
    explanation:
      "Because of its high Km, glucokinase becomes active only when glucose is abundant, such as after a meal, allowing the liver to buffer blood glucose without competing for it during fasting. Its lack of product inhibition further suits it to high-throughput glucose handling.",
    choices: [
      { text: "Traps glucose in the liver mainly when glucose is abundant", isCorrect: true },
      { text: "Works maximally even at very low glucose" },
      { text: "Is strongly inhibited by its product" },
      { text: "Cannot phosphorylate glucose at all" },
      { text: "Functions only during starvation" },
    ],
  },
  {
    stem: "An enzyme that shows sigmoidal (S-shaped) rather than hyperbolic kinetics is best described as:",
    topic: "Enzyme Kinetics",
    explanation:
      "Sigmoidal kinetics indicate cooperativity, typical of allosteric multi-subunit enzymes in which substrate binding at one site changes affinity at others. Simple Michaelis-Menten enzymes instead show a hyperbolic velocity curve.",
    choices: [
      { text: "An allosteric, cooperative enzyme", isCorrect: true },
      { text: "A simple single-site Michaelis-Menten enzyme" },
      { text: "A denatured enzyme" },
      { text: "An enzyme with no active site" },
      { text: "A non-catalytic protein" },
    ],
  },
  {
    stem: "True or False: Adding more substrate can overcome the inhibition caused by a competitive inhibitor.",
    type: "TRUE_FALSE",
    topic: "Enzyme Kinetics",
    explanation:
      "True. A competitive inhibitor binds the active site reversibly, so raising substrate concentration outcompetes it and restores Vmax; only the apparent Km rises. This is the hallmark that distinguishes competitive from noncompetitive inhibition.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  /* ══════════════ ENZYME INHIBITION ══════════════ */
  {
    stem: "A competitive inhibitor produces which change in an enzyme's apparent kinetic constants?",
    topic: "Enzyme Inhibition",
    explanation:
      "A competitive inhibitor binds the active site and competes with substrate, so more substrate is needed to reach half-maximal velocity (apparent Km rises), but with enough substrate Vmax is still attainable (Vmax unchanged). This is the classic competitive pattern.",
    choices: [
      { text: "Apparent Km increases, Vmax unchanged", isCorrect: true },
      { text: "Apparent Km decreases, Vmax unchanged" },
      { text: "Km unchanged, Vmax decreases" },
      { text: "Both Km and Vmax increase" },
      { text: "Both Km and Vmax decrease" },
    ],
  },
  {
    stem: "A classic pure noncompetitive inhibitor affects the kinetics by:",
    topic: "Enzyme Inhibition",
    explanation:
      "A pure noncompetitive inhibitor binds equally to enzyme and enzyme-substrate complex at a site other than the active site, lowering the effective amount of functional enzyme; this decreases Vmax while leaving Km unchanged. Adding substrate cannot overcome it.",
    choices: [
      { text: "Decreasing Vmax with Km unchanged", isCorrect: true },
      { text: "Increasing Km with Vmax unchanged" },
      { text: "Increasing both Km and Vmax" },
      { text: "Binding only the free active site" },
      { text: "Being fully reversed by excess substrate" },
    ],
  },
  {
    stem: "Which feature distinguishes an irreversible inhibitor, such as aspirin acting on cyclooxygenase, from a reversible one?",
    topic: "Enzyme Inhibition",
    explanation:
      "Irreversible inhibitors form a stable, often covalent bond with the enzyme, permanently inactivating it so that activity returns only when new enzyme is synthesized. Aspirin's covalent acetylation of cyclooxygenase is a textbook example.",
    choices: [
      { text: "It forms a stable, often covalent bond that permanently inactivates the enzyme", isCorrect: true },
      { text: "It always binds the active site loosely" },
      { text: "It can be washed away easily to restore activity" },
      { text: "It raises Vmax" },
      { text: "It requires very high substrate to act" },
    ],
  },
  {
    stem: "In the treatment of methanol poisoning, ethanol or fomepizole works as which type of inhibitor of alcohol dehydrogenase?",
    topic: "Enzyme Inhibition",
    explanation:
      "Ethanol competes with methanol for the active site of alcohol dehydrogenase (competitive inhibition), and fomepizole inhibits the enzyme as well, slowing formation of toxic formaldehyde and formic acid. This illustrates competitive inhibition applied therapeutically.",
    choices: [
      { text: "Competitive inhibition at the enzyme's active site", isCorrect: true },
      { text: "Irreversible covalent inhibition" },
      { text: "Allosteric activation" },
      { text: "Noncompetitive inhibition that lowers Km" },
      { text: "Feedback activation" },
    ],
  },
  {
    stem: "Which statements correctly contrast competitive and noncompetitive inhibition? Select all that apply.",
    type: "MULTI",
    topic: "Enzyme Inhibition",
    explanation:
      "Competitive inhibitors bind the active site, raise apparent Km, leave Vmax unchanged, and can be overcome by adding substrate. Noncompetitive inhibitors bind elsewhere and lower Vmax without changing Km. It is not true that both raise Vmax, nor that noncompetitive inhibition is reversed by more substrate.",
    choices: [
      { text: "Competitive inhibitors raise apparent Km", isCorrect: true },
      { text: "Adding substrate can overcome competitive inhibition", isCorrect: true },
      { text: "Noncompetitive inhibitors decrease Vmax", isCorrect: true },
      { text: "Both types increase Vmax" },
      { text: "Excess substrate reverses noncompetitive inhibition" },
    ],
  },
  /* ══════════════ ENZYME REGULATION ══════════════ */
  {
    stem: "In feedback (end-product) inhibition of a metabolic pathway, the final product typically:",
    topic: "Enzyme Regulation",
    explanation:
      "The end product allosterically inhibits an early, committed (often rate-limiting) enzyme of its own pathway, preventing wasteful overproduction. This negative feedback matches output to need and is a central logic of metabolic control.",
    choices: [
      { text: "Inhibits an early, rate-limiting enzyme of the pathway", isCorrect: true },
      { text: "Activates the first enzyme of the pathway" },
      { text: "Has no effect on pathway enzymes" },
      { text: "Is required as a cofactor for the last enzyme" },
      { text: "Speeds up its own production" },
    ],
  },
  {
    stem: "Covalent modification by phosphorylation regulates many enzymes. This modification is:",
    topic: "Enzyme Regulation",
    explanation:
      "Phosphorylation by kinases and dephosphorylation by phosphatases is a rapid, reversible covalent switch that can activate or inhibit an enzyme depending on the protein. This allows hormones like insulin and glucagon to toggle metabolic pathways quickly.",
    choices: [
      { text: "Reversible, added by kinases and removed by phosphatases", isCorrect: true },
      { text: "Permanent and irreversible" },
      { text: "Only ever activating, never inhibiting" },
      { text: "Independent of hormonal control" },
      { text: "A form of substrate-level control only" },
    ],
  },
  {
    stem: "Zymogens (proenzymes) such as trypsinogen and the clotting factors are secreted in an inactive form because:",
    topic: "Enzyme Regulation",
    explanation:
      "Synthesizing a dangerous enzyme as an inactive zymogen prevents it from digesting the cell or activating prematurely; it is switched on by irreversible proteolytic cleavage at the correct time and place. This is how digestive proteases and the coagulation cascade are controlled.",
    choices: [
      { text: "Their activity would be harmful if switched on too early, so cleavage activates them at the right site", isCorrect: true },
      { text: "They can never be activated" },
      { text: "They work only when phosphorylated" },
      { text: "They require denaturation to function" },
      { text: "They are activated by lowering substrate" },
    ],
  },
  {
    stem: "An allosteric activator of an enzyme acts by:",
    topic: "Enzyme Regulation",
    explanation:
      "An allosteric activator binds a regulatory site distinct from the active site and shifts the enzyme toward its high-activity conformation, increasing catalytic rate. Allosteric effectors — activators and inhibitors — allow fine, rapid tuning of key enzymes.",
    choices: [
      { text: "Binding a regulatory site and favoring the active conformation", isCorrect: true },
      { text: "Binding the active site as a substrate analog" },
      { text: "Cleaving the enzyme into fragments" },
      { text: "Permanently denaturing the enzyme" },
      { text: "Removing the enzyme's cofactor" },
    ],
  },
  {
    stem: "The rate-limiting step of a metabolic pathway is usually the point of regulation because:",
    topic: "Enzyme Regulation",
    explanation:
      "The slowest, committed step is the bottleneck that determines flux through the whole pathway, so controlling its enzyme controls the entire pathway's output efficiently. This is why regulatory signals concentrate on rate-limiting enzymes.",
    choices: [
      { text: "Controlling the bottleneck controls flux through the whole pathway", isCorrect: true },
      { text: "It is always the last step" },
      { text: "It is the fastest reaction" },
      { text: "It never involves an enzyme" },
      { text: "It has no effect on downstream steps" },
    ],
  },
  {
    stem: "Which are recognized mechanisms for regulating enzyme activity? Select all that apply.",
    type: "MULTI",
    topic: "Enzyme Regulation",
    explanation:
      "Allosteric effectors, reversible covalent modification (e.g., phosphorylation), proteolytic activation of zymogens, and changes in the amount of enzyme (induction/repression of synthesis) all regulate activity. Randomly denaturing enzymes is destructive damage, not a physiologic regulatory mechanism.",
    choices: [
      { text: "Allosteric activation or inhibition", isCorrect: true },
      { text: "Reversible phosphorylation", isCorrect: true },
      { text: "Proteolytic activation of zymogens", isCorrect: true },
      { text: "Changing the amount of enzyme synthesized", isCorrect: true },
      { text: "Randomly denaturing the enzyme" },
    ],
  },
  /* ══════════════ COFACTORS & COENZYMES ══════════════ */
  {
    stem: "The relationship between a cofactor and a coenzyme is best stated as:",
    topic: "Cofactors & Coenzymes",
    explanation:
      "Cofactors are non-protein helpers required for enzyme activity and include both inorganic ions (such as Zn2+ or Mg2+) and organic molecules; coenzymes are the organic subset, many derived from vitamins. Thus every coenzyme is a cofactor, but not every cofactor is a coenzyme.",
    choices: [
      { text: "Coenzymes are the organic subset of cofactors, often vitamin-derived", isCorrect: true },
      { text: "Cofactors are always proteins" },
      { text: "Coenzymes are inorganic metal ions" },
      { text: "The two terms are unrelated" },
      { text: "Coenzymes are parts of the primary sequence" },
    ],
  },
  {
    stem: "An apoenzyme differs from a holoenzyme in that the apoenzyme:",
    topic: "Cofactors & Coenzymes",
    explanation:
      "The apoenzyme is the protein portion without its required cofactor and is catalytically inactive; adding the cofactor produces the active holoenzyme. This distinction explains why cofactor or vitamin deficiency can impair enzyme function.",
    choices: [
      { text: "Is the inactive protein lacking its cofactor", isCorrect: true },
      { text: "Is the fully active enzyme with cofactor bound" },
      { text: "Is a separate inorganic ion" },
      { text: "Contains no amino acids" },
      { text: "Is a denatured coenzyme" },
    ],
  },
  {
    stem: "Which coenzyme, derived from niacin, serves as the principal electron carrier in catabolic oxidation reactions?",
    topic: "Cofactors & Coenzymes",
    explanation:
      "NAD+ (from niacin) accepts electrons as NADH in catabolic pathways such as glycolysis and the TCA cycle, delivering them to the electron transport chain. NADPH, in contrast, supplies reducing power for biosynthesis.",
    choices: [
      { text: "NAD+", isCorrect: true },
      { text: "Biotin" },
      { text: "Pyridoxal phosphate" },
      { text: "Tetrahydrofolate" },
      { text: "Coenzyme A" },
    ],
  },
  {
    stem: "Pyridoxal phosphate, derived from vitamin B6, is the key coenzyme for which class of reactions?",
    topic: "Cofactors & Coenzymes",
    explanation:
      "Pyridoxal phosphate is essential for transamination and many other amino acid reactions such as decarboxylations, transferring or handling the amino group. Its role explains why B6 deficiency disturbs amino acid and neurotransmitter metabolism.",
    choices: [
      { text: "Transamination and other amino acid reactions", isCorrect: true },
      { text: "Carboxylation reactions" },
      { text: "One-carbon transfers in nucleotide synthesis" },
      { text: "Electron transport in complex IV" },
      { text: "Fatty acid chain elongation only" },
    ],
  },
  {
    stem: "Which cofactor is required by carboxylase enzymes such as pyruvate carboxylase and acetyl-CoA carboxylase?",
    topic: "Cofactors & Coenzymes",
    explanation:
      "Biotin is the coenzyme that carries activated carbon dioxide for carboxylation reactions, including pyruvate carboxylase in gluconeogenesis and acetyl-CoA carboxylase in fatty acid synthesis. Raw egg-white avidin can bind biotin and induce deficiency.",
    choices: [
      { text: "Biotin", isCorrect: true },
      { text: "Thiamine pyrophosphate" },
      { text: "Riboflavin" },
      { text: "Ascorbate" },
      { text: "Cobalamin" },
    ],
  },
  {
    stem: "True or False: Many water-soluble vitamins function as precursors of coenzymes, which is why their deficiency impairs specific enzyme-catalyzed reactions.",
    type: "TRUE_FALSE",
    topic: "Cofactors & Coenzymes",
    explanation:
      "True. B-complex vitamins give rise to coenzymes such as NAD+ (niacin), FAD (riboflavin), TPP (thiamine), coenzyme A (pantothenate) and pyridoxal phosphate (B6), so a deficiency produces predictable metabolic blocks. This links nutrition directly to enzymology.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  /* ══════════════ HEMOGLOBIN & OXYGEN TRANSPORT ══════════════ */
  {
    stem: "Hemoglobin's sigmoidal oxygen-binding curve, in contrast to myoglobin's hyperbolic curve, reflects:",
    topic: "Hemoglobin & Oxygen Transport",
    explanation:
      "Hemoglobin is a tetramer showing cooperative binding — oxygen binding to one subunit increases affinity of the others — producing an S-shaped curve ideal for loading oxygen in the lungs and unloading it in tissues. Myoglobin, a monomer, binds noncooperatively and stores oxygen in muscle.",
    choices: [
      { text: "Cooperative oxygen binding among its four subunits", isCorrect: true },
      { text: "The absence of any heme groups" },
      { text: "Its single-subunit structure" },
      { text: "Irreversible oxygen binding" },
      { text: "A complete lack of iron" },
    ],
  },
  {
    stem: "A rightward shift of the hemoglobin-oxygen dissociation curve indicates:",
    topic: "Hemoglobin & Oxygen Transport",
    explanation:
      "A rightward shift reflects decreased oxygen affinity, promoting oxygen unloading to tissues; it is caused by increased CO2, H+ (lower pH, the Bohr effect), temperature and 2,3-BPG. A leftward shift means increased affinity and reduced unloading.",
    choices: [
      { text: "Decreased oxygen affinity, favoring unloading to tissues", isCorrect: true },
      { text: "Increased oxygen affinity" },
      { text: "Complete loss of oxygen binding" },
      { text: "Conversion of hemoglobin to myoglobin" },
      { text: "Loss of the heme iron" },
    ],
  },
  {
    stem: "The molecule 2,3-bisphosphoglycerate (2,3-BPG) regulates oxygen delivery by:",
    topic: "Hemoglobin & Oxygen Transport",
    explanation:
      "2,3-BPG binds the central cavity of deoxyhemoglobin, stabilizing the low-affinity (T) state and shifting the curve rightward to enhance oxygen unloading; its levels rise in chronic hypoxia and at altitude. This is an adaptive mechanism to improve tissue oxygenation.",
    choices: [
      { text: "Binding deoxyhemoglobin and lowering its oxygen affinity", isCorrect: true },
      { text: "Increasing hemoglobin's oxygen affinity" },
      { text: "Replacing the heme iron" },
      { text: "Denaturing hemoglobin" },
      { text: "Converting oxygen to carbon dioxide" },
    ],
  },
  {
    stem: "Carbon monoxide is dangerous partly because, in addition to occupying the oxygen-binding site, it:",
    topic: "Hemoglobin & Oxygen Transport",
    explanation:
      "Carbon monoxide binds heme with far greater affinity than oxygen and also increases the oxygen affinity of the remaining subunits, shifting the curve left so that bound oxygen is not released to tissues. The result is impaired oxygen delivery despite a near-normal measured oxygen tension.",
    choices: [
      { text: "Shifts the curve left, impairing release of any bound oxygen", isCorrect: true },
      { text: "Shifts the curve far to the right" },
      { text: "Destroys the globin chains" },
      { text: "Has lower affinity than oxygen" },
      { text: "Converts hemoglobin to myoglobin" },
    ],
  },
  {
    stem: "Which factors shift the hemoglobin-oxygen curve to the right, promoting oxygen unloading? Select all that apply.",
    type: "MULTI",
    topic: "Hemoglobin & Oxygen Transport",
    explanation:
      "Increased CO2, increased H+ (decreased pH, the Bohr effect), increased temperature and increased 2,3-BPG all lower affinity and shift the curve rightward, aiding delivery to active tissues. Alkalosis (increased pH) instead shifts the curve leftward.",
    choices: [
      { text: "Increased carbon dioxide", isCorrect: true },
      { text: "Decreased pH (increased H+)", isCorrect: true },
      { text: "Increased temperature", isCorrect: true },
      { text: "Increased 2,3-BPG", isCorrect: true },
      { text: "Increased pH (alkalosis)" },
    ],
  },
  /* ══════════════ COLLAGEN & STRUCTURAL PROTEINS ══════════════ */
  {
    stem: "The repeating amino acid motif that allows collagen's tight triple helix is:",
    topic: "Collagen & Structural Proteins",
    explanation:
      "Collagen's sequence is a repeating Gly-X-Y pattern, where glycine's small size lets it pack into the crowded center of the triple helix, and X and Y are frequently proline and hydroxyproline. Any substitution for glycine disrupts the helix, as in osteogenesis imperfecta.",
    choices: [
      { text: "Glycine-X-Y, where X and Y are often proline and hydroxyproline", isCorrect: true },
      { text: "Alanine-alanine-alanine repeats" },
      { text: "A random sequence with no pattern" },
      { text: "Cysteine every third residue" },
      { text: "Only aromatic amino acids" },
    ],
  },
  {
    stem: "Vitamin C is required for normal collagen synthesis because it is a cofactor for:",
    topic: "Collagen & Structural Proteins",
    explanation:
      "Ascorbate is needed by prolyl and lysyl hydroxylases, which hydroxylate proline and lysine residues to stabilize the collagen triple helix and permit cross-linking. Deficiency (scurvy) yields weak collagen, causing bleeding gums, poor wound healing and fragile vessels.",
    choices: [
      { text: "Prolyl and lysyl hydroxylase", isCorrect: true },
      { text: "Lysyl oxidase only" },
      { text: "Collagenase" },
      { text: "Peptidyl transferase" },
      { text: "DNA polymerase" },
    ],
  },
  {
    stem: "A defect in type I collagen production classically underlies which condition?",
    topic: "Collagen & Structural Proteins",
    explanation:
      "Osteogenesis imperfecta results from defective type I collagen, causing brittle bones, blue sclerae and easy fractures; most cases arise from glycine substitutions that disrupt the triple helix. It illustrates how one amino acid change can cripple a structural protein.",
    choices: [
      { text: "Osteogenesis imperfecta", isCorrect: true },
      { text: "Sickle cell disease" },
      { text: "Phenylketonuria" },
      { text: "Cystic fibrosis" },
      { text: "Gout" },
    ],
  },
  {
    stem: "Elastin differs from collagen in that elastin:",
    topic: "Collagen & Structural Proteins",
    explanation:
      "Elastin is rich in glycine and proline but is not extensively hydroxylated or glycosylated; its cross-linked, coiled structure lets tissues such as lung, skin and large arteries stretch and recoil. Alpha-1 antitrypsin protects elastin from destruction by elastase.",
    choices: [
      { text: "Provides stretch and recoil to tissues rather than tensile rigidity", isCorrect: true },
      { text: "Is the main protein of bone matrix" },
      { text: "Contains a strict Gly-X-Y repeat and heavy hydroxylation" },
      { text: "Cannot be degraded by any enzyme" },
      { text: "Is a globular transport protein" },
    ],
  },
  /* ══════════════ CLINICAL ENZYMOLOGY ══════════════ */
  {
    stem: "Serum troponin is the preferred biomarker for myocardial infarction because it is:",
    topic: "Clinical Enzymology",
    explanation:
      "Cardiac troponins I and T are highly specific to cardiac muscle and rise within hours of myocardial injury, remaining elevated for days, giving both sensitivity and specificity superior to older markers. This makes troponin central to diagnosing myocardial infarction.",
    choices: [
      { text: "Highly specific to cardiac muscle and sensitive to injury", isCorrect: true },
      { text: "Found only in the liver" },
      { text: "Nonspecific and present in all tissues equally" },
      { text: "Elevated only in renal disease" },
      { text: "Undetectable after any heart injury" },
    ],
  },
  {
    stem: "A marked rise in serum ALT and AST, with ALT greater than AST, most specifically points to injury of which organ?",
    topic: "Clinical Enzymology",
    explanation:
      "Aminotransferases ALT and AST are released from injured hepatocytes; ALT is relatively liver-specific, so an ALT-predominant rise indicates hepatocellular injury such as viral hepatitis. An AST:ALT ratio above 2 instead suggests alcoholic liver disease.",
    choices: [
      { text: "The liver (hepatocellular injury)", isCorrect: true },
      { text: "The pancreas" },
      { text: "The heart" },
      { text: "The kidney" },
      { text: "Skeletal bone" },
    ],
  },
  {
    stem: "Elevated serum amylase and lipase together are most useful for diagnosing:",
    topic: "Clinical Enzymology",
    explanation:
      "Amylase and lipase are released from injured pancreatic acinar cells, and their elevation supports a diagnosis of acute pancreatitis; lipase is more specific and stays elevated longer than amylase. This is a classic enzyme pattern in clinical practice.",
    choices: [
      { text: "Acute pancreatitis", isCorrect: true },
      { text: "Myocardial infarction" },
      { text: "Hepatitis" },
      { text: "Bone metastases" },
      { text: "Hemolytic anemia" },
    ],
  },
  {
    stem: "Isoenzymes (isozymes) are useful diagnostically because they:",
    topic: "Clinical Enzymology",
    explanation:
      "Isoenzymes catalyze the same reaction but differ in structure and tissue distribution, so identifying which isoform is elevated localizes the source of injury — for example, distinguishing cardiac from hepatic or bone origin. This tissue specificity is what makes them clinically valuable.",
    choices: [
      { text: "Catalyze the same reaction but differ by tissue, localizing injury", isCorrect: true },
      { text: "Are identical in every tissue" },
      { text: "Have no catalytic activity" },
      { text: "Are found only in serum" },
      { text: "Cannot be measured in blood" },
    ],
  },
  {
    stem: "An elevated alkaline phosphatase with otherwise normal liver enzymes should prompt consideration of disease in which additional tissue?",
    topic: "Clinical Enzymology",
    explanation:
      "Alkaline phosphatase is abundant in both bile ducts and bone, so an isolated rise may reflect bone disease such as Paget disease, healing fractures or bony metastases, in addition to cholestasis. Checking GGT helps distinguish a hepatic from a bony source.",
    choices: [
      { text: "Bone", isCorrect: true },
      { text: "Cardiac muscle" },
      { text: "Red blood cells" },
      { text: "Adipose tissue" },
      { text: "Thyroid" },
    ],
  },
  {
    stem: "Which serum markers are matched correctly to the tissue whose injury they signal? Select all that apply.",
    type: "MULTI",
    topic: "Clinical Enzymology",
    explanation:
      "Troponin indicates cardiac injury, lipase indicates pancreatic injury, and ALT indicates hepatocellular injury. Alkaline phosphatase is not specific to red blood cells (it reflects bone or biliary tissue), and amylase is not a marker of bone disease.",
    choices: [
      { text: "Troponin — heart", isCorrect: true },
      { text: "Lipase — pancreas", isCorrect: true },
      { text: "ALT — liver", isCorrect: true },
      { text: "Alkaline phosphatase — red blood cells" },
      { text: "Amylase — bone" },
    ],
  },
  /* ══════════════ CLINICAL APPLICATION ══════════════ */
  {
    stem: "A newborn is found on screening to have a defect in phenylalanine hydroxylase. Beyond dietary phenylalanine restriction, which amino acid becomes conditionally essential and must be supplied?",
    topic: "Clinical Application",
    explanation:
      "In phenylketonuria the block at phenylalanine hydroxylase prevents conversion of phenylalanine to tyrosine, so tyrosine can no longer be made and becomes a dietary (conditionally essential) requirement. Restricting phenylalanine and supplementing tyrosine prevents intellectual disability.",
    choices: [
      { text: "Tyrosine", isCorrect: true },
      { text: "Leucine" },
      { text: "Lysine" },
      { text: "Glutamate" },
      { text: "Alanine" },
    ],
  },
  {
    stem: "A patient with a single amino acid substitution (glutamate to valine) in the beta-globin chain has sickle cell disease. This illustrates that a change in:",
    topic: "Clinical Application",
    explanation:
      "Replacing a surface glutamate with hydrophobic valine lets deoxygenated hemoglobin S polymerize, deforming red cells — showing how a single primary-structure change can alter quaternary behavior and function. It is a paradigm of the sequence-to-function principle.",
    choices: [
      { text: "Primary structure can profoundly alter a protein's behavior", isCorrect: true },
      { text: "The genetic code cannot affect proteins" },
      { text: "Only quaternary structure matters for function" },
      { text: "Amino acid identity is irrelevant to folding" },
      { text: "Denaturation caused the mutation" },
    ],
  },
  {
    stem: "A child presents with scurvy-like features: bleeding gums, poor wound healing and fragile capillaries. The underlying biochemical defect involves impaired:",
    topic: "Clinical Application",
    explanation:
      "Vitamin C deficiency impairs prolyl and lysyl hydroxylation of collagen, so the triple helix is unstable and connective tissue is weak, producing the bleeding and poor healing of scurvy. Restoring ascorbate corrects collagen synthesis.",
    choices: [
      { text: "Hydroxylation of proline and lysine in collagen", isCorrect: true },
      { text: "Phosphorylation of glycogen phosphorylase" },
      { text: "Transamination of alanine" },
      { text: "Oxidation of pyruvate" },
      { text: "Replication of mitochondrial DNA" },
    ],
  },
  {
    stem: "A researcher measures an enzyme's velocity at increasing substrate concentrations and finds a hyperbolic curve; adding a drug raises the apparent Km but leaves Vmax unchanged. The drug is acting as a:",
    topic: "Clinical Application",
    explanation:
      "An increase in apparent Km with unchanged Vmax is the signature of competitive inhibition, in which the drug competes with substrate for the active site and can be overcome by more substrate. This is how the kinetic data identify the inhibitor type.",
    choices: [
      { text: "Competitive inhibitor", isCorrect: true },
      { text: "Pure noncompetitive inhibitor" },
      { text: "Allosteric activator" },
      { text: "Irreversible inhibitor" },
      { text: "Coenzyme" },
    ],
  },
  {
    stem: "Which clinical situations correctly link a biochemical lesion in protein or enzyme function to its consequence? Select all that apply.",
    type: "MULTI",
    topic: "Clinical Application",
    explanation:
      "Phenylketonuria (phenylalanine hydroxylase deficiency), scurvy (defective collagen hydroxylation from vitamin C deficiency), and osteogenesis imperfecta (defective type I collagen) all tie an enzyme or structural-protein defect to disease. A missing mitochondrion does not cause phenylketonuria, and excess vitamin C is not the cause of scurvy.",
    choices: [
      { text: "Phenylalanine hydroxylase deficiency → phenylketonuria", isCorrect: true },
      { text: "Vitamin C deficiency → defective collagen (scurvy)", isCorrect: true },
      { text: "Defective type I collagen → osteogenesis imperfecta", isCorrect: true },
      { text: "Missing mitochondria → phenylketonuria" },
      { text: "Excess vitamin C → scurvy" },
    ],
  },
  {
    stem: "True or False: Because the active site's shape depends on the folded structure, conditions that denature a diagnostic enzyme in a mishandled blood sample can lower its measured activity.",
    type: "TRUE_FALSE",
    topic: "Clinical Application",
    explanation:
      "True. Heat or other denaturing conditions during sample handling can unfold enzymes and reduce their measured activity, potentially causing falsely low results. This practical point connects protein-folding principles to laboratory medicine.",
    choices: [{ text: "True", isCorrect: true }, { text: "False" }],
  },
  /* ══════════════ ADDITIONAL ITEMS ══════════════ */
  {
    stem: "Which amino acids are aromatic, carrying a ring structure in their side chains? Select all that apply.",
    type: "MULTI",
    topic: "Amino Acid Chemistry",
    explanation:
      "Phenylalanine, tyrosine and tryptophan are the aromatic amino acids; their rings absorb ultraviolet light near 280 nm, which is used to quantify proteins. Tyrosine and tryptophan are precursors of molecules such as catecholamines and serotonin. Leucine and lysine are not aromatic.",
    choices: [
      { text: "Phenylalanine", isCorrect: true },
      { text: "Tyrosine", isCorrect: true },
      { text: "Tryptophan", isCorrect: true },
      { text: "Leucine" },
      { text: "Lysine" },
    ],
  },
  {
    stem: "The turnover number (kcat) of an enzyme describes:",
    topic: "Enzyme Kinetics",
    explanation:
      "The turnover number is the number of substrate molecules converted to product per enzyme active site per unit time when the enzyme is saturated. Together with Km, the ratio kcat/Km gauges an enzyme's overall catalytic efficiency.",
    choices: [
      { text: "How many substrate molecules one active site converts per unit time when saturated", isCorrect: true },
      { text: "The substrate concentration giving half-maximal velocity" },
      { text: "The total amount of enzyme present" },
      { text: "The energy of the transition state" },
      { text: "The number of subunits in the enzyme" },
    ],
  },
  {
    stem: "Fetal hemoglobin (HbF) has a higher oxygen affinity than adult hemoglobin (HbA) largely because HbF:",
    topic: "Hemoglobin & Oxygen Transport",
    explanation:
      "HbF is composed of two alpha and two gamma chains, and the gamma chains bind 2,3-BPG poorly, so HbF is less stabilized in the low-affinity state and holds oxygen more tightly. This higher affinity lets the fetus extract oxygen from maternal blood across the placenta.",
    choices: [
      { text: "Binds 2,3-BPG weakly, so it holds oxygen more tightly", isCorrect: true },
      { text: "Lacks heme groups" },
      { text: "Binds 2,3-BPG more strongly than HbA" },
      { text: "Contains no iron" },
      { text: "Is a single-chain monomer" },
    ],
  },
  {
    stem: "In the diagnosis of myocardial infarction, the isoenzyme CK-MB is useful mainly because it:",
    topic: "Clinical Enzymology",
    explanation:
      "Creatine kinase exists as isoenzymes, and the MB form is relatively enriched in cardiac muscle, so a rise in CK-MB supports myocardial injury and can help detect reinfarction. Troponin is more specific, but CK-MB falls sooner and remains useful for timing.",
    choices: [
      { text: "Is relatively enriched in cardiac muscle", isCorrect: true },
      { text: "Is found only in the liver" },
      { text: "Is specific to bone" },
      { text: "Has no catalytic activity" },
      { text: "Is present only in red blood cells" },
    ],
  },
];
