import type { Q } from "../_lib/qbank";

export const ORGANIC_SET_3: Q[] = [
  {
    stem: "In organic mechanisms, a curly (curved) arrow represents the movement of:",
    topic: "Reaction Mechanisms",
    explanation:
      "A full-headed curly arrow shows the movement of a pair of electrons, always drawn from the electron source (a bond or lone pair) to where they end up; a half-headed 'fishhook' arrow shows one electron.",
    choices: [
      { text: "A pair of electrons to their destination", isCorrect: true },
      { text: "A single proton passing between atoms" },
      { text: "A whole atom moving through space" },
      { text: "A whole molecule rearranging" },
    ],
  },
  {
    stem: "A curly arrow must always begin at:",
    topic: "Reaction Mechanisms",
    explanation:
      "The tail of a curly arrow starts at the electron source — a lone pair or the centre of a bond — and the head points to the atom or bond where the electrons go; it never starts at a positive charge.",
    choices: [
      { text: "An electron source (a lone pair or bond)", isCorrect: true },
      { text: "A positively charged, electron-poor atom" },
      { text: "An empty valence orbital" },
      { text: "The most electronegative atom present" },
    ],
  },
  {
    stem: "Homolytic bond cleavage (homolysis) produces:",
    topic: "Bond Cleavage",
    explanation:
      "In homolysis each atom keeps one electron of the shared pair, generating two neutral radicals; it is favoured by nonpolar bonds, heat or light, and is shown with fishhook (single-electron) arrows.",
    choices: [
      { text: "Two radicals with one electron each", isCorrect: true },
      { text: "A cation and an anion" },
      { text: "Two separate cations" },
      { text: "A single doubly charged species" },
    ],
  },
  {
    stem: "Heterolytic bond cleavage (heterolysis) produces:",
    topic: "Bond Cleavage",
    explanation:
      "In heterolysis one atom takes both bonding electrons, giving a cation and an anion; it is favoured by polar bonds and polar solvents and underlies most ionic (polar) organic mechanisms.",
    choices: [
      { text: "A cation and an anion", isCorrect: true },
      { text: "Two neutral radicals" },
      { text: "Two identical neutral atoms" },
      { text: "Two anions" },
    ],
  },
  {
    stem: "A fishhook (single-barbed) arrow is used to depict:",
    topic: "Bond Cleavage",
    explanation:
      "A fishhook arrow shows the movement of a single electron, as in homolysis and radical chain steps; the ordinary full-headed curly arrow is reserved for movement of an electron pair.",
    choices: [
      { text: "The movement of one electron", isCorrect: true },
      { text: "The movement of an electron pair" },
      { text: "The movement of a proton" },
      { text: "The transfer of a whole atom" },
    ],
  },
  {
    stem: "A nucleophile is a species that:",
    topic: "Nucleophiles & Electrophiles",
    explanation:
      "A nucleophile ('nucleus-loving') is electron-rich and donates a lone pair or π electrons to an electron-poor centre; it is by definition a Lewis base and attacks electrophilic atoms.",
    choices: [
      { text: "Donates an electron pair to an electrophile", isCorrect: true },
      { text: "Accepts an electron pair from another species" },
      { text: "Carries a full positive charge in every case" },
      { text: "Always contains a metal atom" },
    ],
  },
  {
    stem: "An electrophile is a species that:",
    topic: "Nucleophiles & Electrophiles",
    explanation:
      "An electrophile ('electron-loving') is electron-poor and accepts a pair of electrons from a nucleophile; it is a Lewis acid, often bearing a positive charge or an electron-deficient atom.",
    choices: [
      { text: "Accepts an electron pair from a nucleophile", isCorrect: true },
      { text: "Donates an electron pair to a nucleophile" },
      { text: "Always carries a full negative charge" },
      { text: "Cannot take part in polar reactions" },
    ],
  },
  {
    stem: "Which of the following is best classified as a nucleophile?",
    topic: "Nucleophiles & Electrophiles",
    explanation:
      "The hydroxide ion OH⁻ is electron-rich, with lone pairs and a negative charge, so it readily donates electrons and acts as a nucleophile; H⁺, BF₃ and a carbocation are electrophiles.",
    choices: [
      { text: "The hydroxide ion, OH⁻", isCorrect: true },
      { text: "The proton, H⁺" },
      { text: "Boron trifluoride, BF₃" },
      { text: "A tertiary carbocation" },
    ],
  },
  {
    stem: "The carbonyl carbon of an aldehyde or ketone is electrophilic because:",
    topic: "Nucleophiles & Electrophiles",
    explanation:
      "The C=O bond is polarised toward the more electronegative oxygen, leaving the carbon δ⁺ and electron-poor; nucleophiles therefore attack this carbon in addition and acyl-substitution reactions.",
    choices: [
      { text: "The C=O bond is polarised toward oxygen", isCorrect: true },
      { text: "Carbon is more electronegative than oxygen" },
      { text: "The carbon itself bears three lone pairs" },
      { text: "The carbon carries a full negative charge" },
    ],
  },
  {
    stem: "In general, a good nucleophile attacks a good electrophile because the reaction involves:",
    topic: "Nucleophiles & Electrophiles",
    explanation:
      "Polar bond-forming steps pair an electron-rich site (nucleophile) with an electron-poor site (electrophile); electrons flow from the nucleophile's HOMO into the electrophile's empty or antibonding orbital.",
    choices: [
      { text: "Electron flow from the rich to the poor species", isCorrect: true },
      { text: "Electron flow from the electron-poor to the electron-rich species" },
      { text: "No net movement of any electrons at all" },
      { text: "Transfer of a proton back and forth both ways" },
    ],
  },
  {
    stem: "Which statements about curly arrows and bond cleavage are correct? Select all that apply.",
    type: "MULTI",
    topic: "Reaction Mechanisms",
    explanation:
      "A curly arrow shows a pair of electrons moving from source to sink; a fishhook shows one electron; homolysis gives radicals and heterolysis gives ions. A curly arrow does not start at a positive charge.",
    choices: [
      { text: "A full curly arrow represents a pair of electrons", isCorrect: true },
      { text: "A fishhook arrow represents a single electron", isCorrect: true },
      { text: "Homolysis generates two radicals", isCorrect: true },
      { text: "Heterolysis generates a cation and an anion", isCorrect: true },
      { text: "A curly arrow starts at an electron-poor atom" },
      { text: "Homolysis generates a cation and an anion" },
    ],
  },
  {
    stem: "Which species act as electrophiles? Select all that apply.",
    type: "MULTI",
    topic: "Nucleophiles & Electrophiles",
    explanation:
      "The proton, BF₃, a carbocation and the carbonyl carbon are all electron-poor electrophiles. Hydroxide and ammonia are electron-rich nucleophiles, not electrophiles.",
    choices: [
      { text: "The proton, H⁺", isCorrect: true },
      { text: "Boron trifluoride, BF₃", isCorrect: true },
      { text: "A tertiary carbocation", isCorrect: true },
      { text: "The carbonyl carbon of a ketone", isCorrect: true },
      { text: "The hydroxide ion, OH⁻" },
      { text: "Ammonia, NH₃" },
    ],
  },
  {
    stem: "A nucleophile is an electron-pair donor and therefore also a Lewis base.",
    type: "TRUE_FALSE",
    topic: "Nucleophiles & Electrophiles",
    explanation:
      "Both terms describe an electron-pair donor; the label 'nucleophile' stresses kinetics (attacking a carbon centre) while 'Lewis base' stresses the electron donation itself, but the same species fits both.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Heterolytic bond cleavage is favoured by polar bonds and polar solvents.",
    type: "TRUE_FALSE",
    topic: "Bond Cleavage",
    explanation:
      "Polar bonds already have uneven electron distribution, and polar solvents stabilise the resulting ions, so both promote heterolysis; nonpolar bonds broken by heat or light tend to undergo homolysis instead.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "A carbocation has a central carbon that is:",
    topic: "Reactive Intermediates",
    explanation:
      "A carbocation carbon is sp² hybridised and trigonal planar, with an empty p orbital; only six valence electrons make it strongly electrophilic and eager to accept an electron pair.",
    choices: [
      { text: "sp², trigonal planar, with an empty p orbital", isCorrect: true },
      { text: "sp³ hybridised and tetrahedral, with a lone pair" },
      { text: "sp hybridised and linear, with two lone pairs" },
      { text: "sp³ hybridised with a complete octet" },
    ],
  },
  {
    stem: "The order of carbocation stability, most to least stable, is:",
    topic: "Reactive Intermediates",
    explanation:
      "Tertiary carbocations are most stable (most alkyl donation and hyperconjugation), then secondary, then primary, with methyl least stable; allylic and benzylic cations gain extra resonance stabilisation.",
    choices: [
      { text: "Tertiary > secondary > primary > methyl", isCorrect: true },
      { text: "Methyl > primary > secondary > tertiary" },
      { text: "Primary > tertiary > methyl > secondary" },
      { text: "Secondary > methyl > tertiary > primary" },
    ],
  },
  {
    stem: "A carbanion bears a lone pair and a negative charge on carbon; it is stabilised by adjacent groups that are:",
    topic: "Reactive Intermediates",
    explanation:
      "A carbanion is electron-rich, so electron-withdrawing groups (−I, −M, such as carbonyl or nitro) stabilise it by dispersing the negative charge; electron-releasing alkyl groups destabilise it.",
    choices: [
      { text: "Electron-withdrawing, dispersing the negative charge", isCorrect: true },
      { text: "Electron-releasing, intensifying the negative charge" },
      { text: "Bulky but electronically neutral" },
      { text: "Identical to those that stabilise carbocations" },
    ],
  },
  {
    stem: "A free radical is a species that contains:",
    topic: "Reactive Intermediates",
    explanation:
      "A radical has an unpaired electron; carbon radicals are roughly sp² (near-planar) and, like carbocations, are stabilised by alkyl substitution (hyperconjugation) and by adjacent conjugation.",
    choices: [
      { text: "An unpaired electron", isCorrect: true },
      { text: "A lone pair and a negative charge" },
      { text: "An empty p orbital and a positive charge" },
      { text: "A complete octet with no reactive feature" },
    ],
  },
  {
    stem: "Free-radical stability follows which order?",
    topic: "Reactive Intermediates",
    explanation:
      "Like carbocations, radicals are stabilised by increasing alkyl substitution: tertiary > secondary > primary > methyl, with allylic and benzylic radicals especially stabilised by resonance.",
    choices: [
      { text: "Tertiary > secondary > primary > methyl", isCorrect: true },
      { text: "Methyl > primary > secondary > tertiary" },
      { text: "Primary > secondary > tertiary > allylic" },
      { text: "All radicals are equally stable" },
    ],
  },
  {
    stem: "A carbene, such as :CH₂, is a neutral carbon species bearing:",
    topic: "Reactive Intermediates",
    explanation:
      "A carbene has a neutral carbon with only six valence electrons — two bonds and one nonbonding pair (or two single electrons in the triplet form) — making it highly reactive toward insertion and addition.",
    choices: [
      { text: "Six valence electrons and a nonbonding pair", isCorrect: true },
      { text: "A full octet and a negative charge" },
      { text: "An empty valence shell and no bonds" },
      { text: "Eight valence electrons and a positive charge" },
    ],
  },
  {
    stem: "Carbocations can undergo rearrangement when a hydride or alkyl group migrates to give:",
    topic: "Carbocation Rearrangement",
    explanation:
      "A 1,2-hydride or 1,2-alkyl shift occurs when it converts a less stable carbocation into a more stable one (e.g. secondary → tertiary); such rearrangements are a hallmark of carbocation intermediates.",
    choices: [
      { text: "A more stable carbocation", isCorrect: true },
      { text: "A less stable carbocation" },
      { text: "A neutral radical" },
      { text: "A carbanion" },
    ],
  },
  {
    stem: "A 1,2-hydride shift involves migration of a hydrogen, with its bonding electrons, from:",
    topic: "Carbocation Rearrangement",
    explanation:
      "In a 1,2-hydride shift, a hydrogen and its pair of electrons move from a carbon adjacent to the cationic centre onto that centre, relocating the positive charge to the carbon the H left behind.",
    choices: [
      { text: "An adjacent carbon onto the cationic centre", isCorrect: true },
      { text: "The cationic carbon to a distant carbon" },
      { text: "One molecule across to a separate molecule" },
      { text: "Oxygen to carbon within a carbonyl" },
    ],
  },
  {
    stem: "The driving force for a carbocation rearrangement is:",
    topic: "Carbocation Rearrangement",
    explanation:
      "Rearrangement occurs only when it increases stability — for example a secondary cation shifting to a tertiary one; if no more stable cation is accessible, no rearrangement takes place.",
    choices: [
      { text: "Formation of a more stable carbocation", isCorrect: true },
      { text: "A decrease in overall stability" },
      { text: "Conversion of the cation into a radical" },
      { text: "An increase in ring strain" },
    ],
  },
  {
    stem: "Allylic and benzylic carbocations are unusually stable because the positive charge is:",
    topic: "Reactive Intermediates",
    explanation:
      "In allylic and benzylic cations the empty p orbital overlaps an adjacent π system, delocalising the positive charge over several atoms by resonance and lowering the intermediate's energy substantially.",
    choices: [
      { text: "Delocalised over a π system by resonance", isCorrect: true },
      { text: "Localised entirely on a single carbon" },
      { text: "Neutralised by an extra lone pair" },
      { text: "Removed from the molecule altogether" },
    ],
  },
  {
    stem: "Which statements about reactive intermediates are correct? Select all that apply.",
    type: "MULTI",
    topic: "Reactive Intermediates",
    explanation:
      "A carbocation is sp² with an empty p orbital; a carbanion has a lone pair and negative charge; a radical has an unpaired electron; a carbene has six valence electrons. A carbocation does not have a complete octet.",
    choices: [
      { text: "A carbocation carbon is sp² with an empty p orbital", isCorrect: true },
      { text: "A carbanion carbon bears a lone pair and negative charge", isCorrect: true },
      { text: "A free radical contains an unpaired electron", isCorrect: true },
      { text: "A carbene carbon has only six valence electrons", isCorrect: true },
      { text: "A carbocation carbon has a complete octet" },
      { text: "A carbanion is stabilised by electron-releasing groups" },
    ],
  },
  {
    stem: "Which factors stabilise a carbanion? Select all that apply.",
    type: "MULTI",
    topic: "Reactive Intermediates",
    explanation:
      "A carbanion bears a negative charge, so adjacent electron-withdrawing groups, resonance delocalisation onto a carbonyl or nitro group, greater s-character at the carbanion carbon, and an electronegative neighbouring atom all stabilise it. Alkyl donation and hyperconjugation destabilise it.",
    choices: [
      { text: "An adjacent electron-withdrawing group", isCorrect: true },
      { text: "Resonance delocalisation onto a carbonyl or nitro group", isCorrect: true },
      { text: "Greater s-character at the carbanion carbon", isCorrect: true },
      { text: "An electronegative atom bonded to the carbanion carbon", isCorrect: true },
      { text: "Increasing alkyl substitution at the carbanion" },
      { text: "Extensive hyperconjugation from adjacent C–H bonds" },
    ],
  },
  {
    stem: "Which statements about carbocation rearrangements are correct? Select all that apply.",
    type: "MULTI",
    topic: "Carbocation Rearrangement",
    explanation:
      "Rearrangements convert a less stable cation to a more stable one via 1,2-hydride or 1,2-alkyl shifts; they occur only when they raise stability. They do not convert cations into radicals.",
    choices: [
      { text: "A 1,2-hydride shift can convert a secondary to a tertiary cation", isCorrect: true },
      { text: "A 1,2-alkyl (methyl) shift is also possible", isCorrect: true },
      { text: "Rearrangement occurs only if a more stable cation results", isCorrect: true },
      { text: "The migrating group takes its bonding electrons with it", isCorrect: true },
      { text: "Rearrangement converts the cation into a free radical" },
      { text: "Rearrangement deliberately forms a less stable cation" },
    ],
  },
  {
    stem: "A free radical, like a carbocation, is stabilised by increasing alkyl substitution at the reactive carbon.",
    type: "TRUE_FALSE",
    topic: "Reactive Intermediates",
    explanation:
      "Adjacent alkyl groups donate electron density through hyperconjugation to both radicals and carbocations, so both follow the same tertiary > secondary > primary > methyl stability order.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "A carbene is an electrically neutral species despite having an incomplete octet.",
    type: "TRUE_FALSE",
    topic: "Reactive Intermediates",
    explanation:
      "A carbene carbon has two bonds plus a nonbonding electron pair (or two single electrons), totalling six valence electrons; the formal charge is zero, so the species is neutral though highly reactive.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "In a substitution reaction, one atom or group is:",
    topic: "Reaction Types",
    explanation:
      "Substitution replaces one atom or group on a molecule with another; the number of σ bonds is conserved. It is characteristic of alkyl halides (SN1/SN2) and of aromatic rings (electrophilic substitution).",
    choices: [
      { text: "Replaced by another atom or group", isCorrect: true },
      { text: "Added across a double bond" },
      { text: "Removed to create a new double bond" },
      { text: "Shifted to a new position within the molecule" },
    ],
  },
  {
    stem: "An addition reaction is characterised by:",
    topic: "Reaction Types",
    explanation:
      "Addition adds atoms across a multiple bond, converting a π bond into two new σ bonds; alkenes and carbonyls typically undergo addition (electrophilic and nucleophilic addition respectively).",
    choices: [
      { text: "Atoms adding across a multiple bond, removing unsaturation", isCorrect: true },
      { text: "One group replacing another with no change in unsaturation" },
      { text: "Loss of a small molecule to form a π bond" },
      { text: "Migration of a group within the same molecule" },
    ],
  },
  {
    stem: "An elimination reaction typically:",
    topic: "Reaction Types",
    explanation:
      "Elimination removes two atoms or groups from adjacent carbons to form a new π bond (e.g. dehydrohalogenation of an alkyl halide to an alkene), the reverse of addition.",
    choices: [
      { text: "Removes adjacent groups to form a π bond", isCorrect: true },
      { text: "Adds groups across a double bond" },
      { text: "Replaces one group with a different one" },
      { text: "Leaves the degree of unsaturation unchanged" },
    ],
  },
  {
    stem: "The conversion of an alkene to an alkane by adding hydrogen is an example of:",
    topic: "Reaction Types",
    explanation:
      "Hydrogenation adds H₂ across the C=C double bond, an addition reaction that removes one degree of unsaturation; it is typically catalysed by a metal such as Pd, Pt or Ni.",
    choices: [
      { text: "An addition reaction", isCorrect: true },
      { text: "A substitution reaction" },
      { text: "An elimination reaction" },
      { text: "A rearrangement reaction" },
    ],
  },
  {
    stem: "On a reaction energy diagram, the activation energy is the energy difference between:",
    topic: "Energy Diagrams",
    explanation:
      "Activation energy (Eₐ) is measured from the reactants up to the highest transition state; a larger Eₐ means a slower reaction. It is distinct from the overall energy change between reactants and products.",
    choices: [
      { text: "Reactants and the transition state", isCorrect: true },
      { text: "The reactants and the products" },
      { text: "Two adjacent products" },
      { text: "The solvent and the substrate" },
    ],
  },
  {
    stem: "A transition state on a reaction coordinate diagram corresponds to:",
    topic: "Energy Diagrams",
    explanation:
      "A transition state is an energy maximum along the reaction coordinate — a fleeting arrangement with partially formed and broken bonds that cannot be isolated, unlike an intermediate at an energy minimum.",
    choices: [
      { text: "An energy maximum that cannot be isolated", isCorrect: true },
      { text: "An energy minimum that can be isolated" },
      { text: "The lowest point on the whole diagram" },
      { text: "A stable product of the reaction" },
    ],
  },
  {
    stem: "A reaction intermediate differs from a transition state in that an intermediate:",
    topic: "Energy Diagrams",
    explanation:
      "An intermediate sits in a local energy minimum (a dip between two transition states) and has a finite lifetime, so in principle it can be detected or trapped; a transition state exists only instantaneously.",
    choices: [
      { text: "Sits in an energy minimum with a finite lifetime", isCorrect: true },
      { text: "Sits at an energy maximum and cannot be isolated" },
      { text: "Has no defined structure at all" },
      { text: "Is always the final product" },
    ],
  },
  {
    stem: "An exothermic (exergonic) reaction is one in which:",
    topic: "Energy Diagrams",
    explanation:
      "In an exothermic reaction the products lie lower in energy than the reactants, so energy is released; on the diagram the product level is below the reactant level regardless of the activation-energy barrier.",
    choices: [
      { text: "The products are lower in energy than the reactants", isCorrect: true },
      { text: "The products are higher in energy than the reactants" },
      { text: "Reactants and products are equal in energy" },
      { text: "No activation barrier exists" },
    ],
  },
  {
    stem: "The rate-determining step of a multi-step reaction is:",
    topic: "Reaction Kinetics",
    explanation:
      "The rate-determining (rate-limiting) step is the slowest step, corresponding to the highest transition state on the pathway; the overall rate can be no faster than this step, so it controls the kinetics.",
    choices: [
      { text: "The slowest step of the sequence", isCorrect: true },
      { text: "The fastest step in the sequence" },
      { text: "Always the first step regardless of barriers" },
      { text: "The step that releases the most energy" },
    ],
  },
  {
    stem: "The Hammond postulate states that the transition state most resembles the species to which it is:",
    topic: "Hammond Postulate",
    explanation:
      "By the Hammond postulate, a transition state resembles the adjacent species (reactant or product) nearest to it in energy; so endothermic steps have product-like ('late') transition states and exothermic steps reactant-like ('early') ones.",
    choices: [
      { text: "Closest in energy", isCorrect: true },
      { text: "Furthest in energy" },
      { text: "Most different in structure" },
      { text: "Always the product, regardless of energy" },
    ],
  },
  {
    stem: "For a highly exothermic step, the Hammond postulate predicts a transition state that is:",
    topic: "Hammond Postulate",
    explanation:
      "An exothermic step has an 'early', reactant-like transition state, reached before much bond reorganisation; this is why the most stable product often forms fastest in strongly exothermic reactions.",
    choices: [
      { text: "Early and reactant-like", isCorrect: true },
      { text: "Late and product-like" },
      { text: "Exactly halfway in structure" },
      { text: "Unrelated to reactant or product" },
    ],
  },
  {
    stem: "Under kinetic control, the major product of a reaction is the one that:",
    topic: "Kinetic vs Thermodynamic Control",
    explanation:
      "Kinetic control favours the product formed fastest — via the lowest activation-energy transition state — even if it is not the most stable; it dominates at low temperature and short reaction times.",
    choices: [
      { text: "Forms fastest, over the lowest barrier", isCorrect: true },
      { text: "Is the most thermodynamically stable" },
      { text: "Has the highest activation energy" },
      { text: "Forms most slowly of the possible products" },
    ],
  },
  {
    stem: "Under thermodynamic control, the major product is the one that:",
    topic: "Kinetic vs Thermodynamic Control",
    explanation:
      "Thermodynamic control favours the most stable (lowest-energy) product, reached when the reaction is reversible and given enough time/temperature to equilibrate, regardless of which forms fastest.",
    choices: [
      { text: "Is the most stable product at equilibrium", isCorrect: true },
      { text: "Forms fastest but is the least stable product" },
      { text: "Has the highest energy of the options" },
      { text: "Never appears in the equilibrium mixture" },
    ],
  },
  {
    stem: "Which statements about reaction energy diagrams are correct? Select all that apply.",
    type: "MULTI",
    topic: "Energy Diagrams",
    explanation:
      "Activation energy runs from reactants to the transition state; a transition state is an energy maximum; an intermediate is an energy minimum; the rate-determining step has the highest barrier. Products below reactants means exothermic.",
    choices: [
      { text: "Activation energy is measured from reactants to the transition state", isCorrect: true },
      { text: "A transition state is an energy maximum", isCorrect: true },
      { text: "An intermediate lies in a local energy minimum", isCorrect: true },
      { text: "The rate-determining step has the highest transition state", isCorrect: true },
      { text: "A transition state can be isolated and stored" },
      { text: "Activation energy equals the overall reaction energy change" },
    ],
  },
  {
    stem: "Which statements about kinetic and thermodynamic control are correct? Select all that apply.",
    type: "MULTI",
    topic: "Kinetic vs Thermodynamic Control",
    explanation:
      "Kinetic control favours the fastest-formed product (lowest Eₐ), often at low temperature; thermodynamic control favours the most stable product, needing reversibility and time. The kinetic product is not always the most stable.",
    choices: [
      { text: "The kinetic product forms via the lowest activation barrier", isCorrect: true },
      { text: "Kinetic control is favoured at low temperature and short times", isCorrect: true },
      { text: "The thermodynamic product is the most stable one", isCorrect: true },
      { text: "Thermodynamic control requires a reversible reaction", isCorrect: true },
      { text: "The kinetic product is always the most stable" },
      { text: "Thermodynamic control dominates at very short reaction times" },
    ],
  },
  {
    stem: "A catalyst increases a reaction's rate by providing an alternative pathway with a lower activation energy, without being consumed overall.",
    type: "TRUE_FALSE",
    topic: "Reaction Kinetics",
    explanation:
      "A catalyst offers a new mechanism whose highest barrier is lower, speeding both forward and reverse rates equally; it is regenerated by the end, so it does not appear in the overall balanced equation.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "A lower pKa value corresponds to an acid that is:",
    topic: "Acids & Bases: pKa",
    explanation:
      "pKa = −log Ka, so a lower pKa means a larger Ka and a stronger acid; for example acetic acid (pKa ≈ 4.8) is far stronger than ethanol (pKa ≈ 16).",
    choices: [
      { text: "Stronger, dissociating more completely", isCorrect: true },
      { text: "Weaker, dissociating less" },
      { text: "Neutral, neither acidic nor basic" },
      { text: "Unrelated in strength to its pKa" },
    ],
  },
  {
    stem: "The strength of an acid HA is governed largely by the stability of:",
    topic: "Acids & Bases: Acidity",
    explanation:
      "The more stable the conjugate base A⁻, the more readily HA loses its proton and the stronger the acid; anything that delocalises or withdraws the negative charge of A⁻ increases acidity.",
    choices: [
      { text: "Its conjugate base A⁻", isCorrect: true },
      { text: "Its neutral molecule HA only" },
      { text: "The proton once released" },
      { text: "The solvent alone, independent of A⁻" },
    ],
  },
  {
    stem: "A carboxylic acid (pKa ≈ 4–5) is much more acidic than an alcohol (pKa ≈ 16) because the carboxylate anion is stabilised by:",
    topic: "Acids & Bases: Acidity",
    explanation:
      "The carboxylate's negative charge is delocalised equally over two oxygen atoms by resonance, greatly stabilising it; an alkoxide localises the charge on a single oxygen, so alcohols are far weaker acids.",
    choices: [
      { text: "Resonance delocalisation over two oxygen atoms", isCorrect: true },
      { text: "Localisation of the charge on one carbon" },
      { text: "An intramolecular hydrogen bond only" },
      { text: "The complete absence of any charge" },
    ],
  },
  {
    stem: "Adding an electron-withdrawing substituent (e.g. Cl) near a carboxylic acid group makes the acid:",
    topic: "Acids & Bases: Acidity",
    explanation:
      "An electron-withdrawing group stabilises the carboxylate by dispersing its negative charge (an inductive effect), so the acid ionises more readily; chloroacetic acid (pKa ≈ 2.9) is stronger than acetic acid (≈ 4.8).",
    choices: [
      { text: "Stronger, stabilising the conjugate base", isCorrect: true },
      { text: "Weaker, by destabilising the conjugate base" },
      { text: "Unchanged in its acid strength" },
      { text: "A base rather than an acid" },
    ],
  },
  {
    stem: "Among the halogenated acetic acids, the strongest is:",
    topic: "Acids & Bases: Acidity",
    explanation:
      "More electronegative and more numerous halogens withdraw more electron density, so trichloroacetic acid (three Cl, pKa ≈ 0.7) is far stronger than di-, mono-, or unsubstituted acetic acid.",
    choices: [
      { text: "Trichloroacetic acid, CCl₃COOH", isCorrect: true },
      { text: "Dichloroacetic acid, CHCl₂COOH" },
      { text: "Chloroacetic acid, CH₂ClCOOH" },
      { text: "Acetic acid, CH₃COOH" },
    ],
  },
  {
    stem: "Phenol (pKa ≈ 10) is more acidic than an aliphatic alcohol (pKa ≈ 16) because the phenoxide ion is:",
    topic: "Acids & Bases: Acidity",
    explanation:
      "The phenoxide negative charge is delocalised into the aromatic ring by resonance, stabilising it; an alkoxide has no such delocalisation, so phenols are markedly more acidic than ordinary alcohols.",
    choices: [
      { text: "Resonance-stabilised into the aromatic ring", isCorrect: true },
      { text: "Destabilised by the aromatic ring" },
      { text: "Completely unable to delocalise its charge" },
      { text: "Stabilised only by the solvent" },
    ],
  },
  {
    stem: "The effect of the central atom's electronegativity on acidity is seen in the trend:",
    topic: "Acids & Bases: Acidity",
    explanation:
      "Across a period, greater electronegativity better stabilises the conjugate base's negative charge, so acidity rises CH₄ < NH₃ < H₂O < HF; the O–H of an alcohol is far more acidic than a C–H bond.",
    choices: [
      { text: "Acidity rises with the electronegativity of that atom", isCorrect: true },
      { text: "Acidity falls as electronegativity rises" },
      { text: "Electronegativity has no effect on acidity" },
      { text: "Only atomic size, never electronegativity, matters" },
    ],
  },
  {
    stem: "Down a group, the increasing acidity of the hydrides (e.g. HF < HCl < HBr < HI) is explained mainly by:",
    topic: "Acids & Bases: Acidity",
    explanation:
      "Down a group the H–X bond lengthens and weakens and the larger conjugate base disperses charge over a bigger ion, both favouring proton loss; bond strength, not electronegativity, dominates this trend.",
    choices: [
      { text: "Weaker H–X bonds and more stable anions", isCorrect: true },
      { text: "Rising electronegativity down the group" },
      { text: "Progressively stronger H–X bonds down the group" },
      { text: "Smaller, less stable conjugate bases down the group" },
    ],
  },
  {
    stem: "The effect of hybridisation on C–H acidity gives the order:",
    topic: "Acids & Bases: Acidity",
    explanation:
      "Greater s-character holds the carbanion lone pair closer to the nucleus, stabilising it; so acidity rises sp³ < sp² < sp, and a terminal alkyne C–H (pKa ≈ 25) is far more acidic than an alkane C–H (pKa ≈ 50).",
    choices: [
      { text: "sp³ < sp² < sp (terminal alkyne most acidic)", isCorrect: true },
      { text: "sp < sp² < sp³ (alkane most acidic)" },
      { text: "All C–H bonds have identical acidity" },
      { text: "Hybridisation has no effect on C–H acidity" },
    ],
  },
  {
    stem: "In an acid–base reaction, equilibrium always favours formation of the:",
    topic: "Acids & Bases: Equilibria",
    explanation:
      "An acid–base equilibrium lies toward the side with the weaker acid and weaker base (the more stable species); comparing pKa values of the two acids predicts which side is favoured.",
    choices: [
      { text: "Weaker acid and weaker base", isCorrect: true },
      { text: "Stronger acid and stronger base" },
      { text: "Side with the larger molecules" },
      { text: "Side with the more coloured species" },
    ],
  },
  {
    stem: "A terminal alkyne (pKa ≈ 25) can be deprotonated by sodium amide (NaNH₂, conjugate acid NH₃ pKa ≈ 38) because:",
    topic: "Acids & Bases: Equilibria",
    explanation:
      "Deprotonation is favourable when the base's conjugate acid is weaker (higher pKa) than the acid being removed; NH₃ (pKa 38) is weaker than the alkyne C–H (pKa 25), so amide can remove the alkyne proton.",
    choices: [
      { text: "The base's conjugate acid (NH₃) is weaker than the alkyne", isCorrect: true },
      { text: "The base's conjugate acid is stronger than the alkyne" },
      { text: "Both acids have exactly the same pKa" },
      { text: "The alkyne cannot be deprotonated at all" },
    ],
  },
  {
    stem: "Which factors increase the acidity of an organic acid HA? Select all that apply.",
    type: "MULTI",
    topic: "Acids & Bases: Acidity",
    explanation:
      "Resonance delocalisation of A⁻, electron-withdrawing groups, greater electronegativity of the atom bearing H, and greater s-character all stabilise the conjugate base and raise acidity. Electron-donating alkyl groups lower acidity.",
    choices: [
      { text: "Resonance delocalisation of the conjugate base", isCorrect: true },
      { text: "Nearby electron-withdrawing groups", isCorrect: true },
      { text: "A more electronegative atom bearing the acidic H", isCorrect: true },
      { text: "Greater s-character at the atom bearing the acidic H", isCorrect: true },
      { text: "Electron-donating alkyl groups near the acidic site" },
      { text: "Localising the conjugate base's charge on one atom" },
    ],
  },
  {
    stem: "Which statements comparing organic acid strengths are correct? Select all that apply.",
    type: "MULTI",
    topic: "Acids & Bases: Acidity",
    explanation:
      "Carboxylic acids > phenols > alcohols in acidity; a lower pKa means a stronger acid; halogen substitution increases carboxylic-acid strength; terminal alkynes are more acidic than alkanes. Alcohols are not stronger acids than carboxylic acids.",
    choices: [
      { text: "Carboxylic acids are more acidic than phenols", isCorrect: true },
      { text: "Phenols are more acidic than aliphatic alcohols", isCorrect: true },
      { text: "A lower pKa indicates a stronger acid", isCorrect: true },
      { text: "Halogen substitution strengthens a carboxylic acid", isCorrect: true },
      { text: "Aliphatic alcohols are stronger acids than carboxylic acids" },
      { text: "Alkane C–H bonds are more acidic than terminal alkyne C–H bonds" },
    ],
  },
  {
    stem: "The position of an acid–base equilibrium can be predicted by comparing the pKa values of the acids on each side.",
    type: "TRUE_FALSE",
    topic: "Acids & Bases: Equilibria",
    explanation:
      "The equilibrium favours the side with the higher-pKa (weaker) acid; comparing the pKa of the reactant acid with that of the product acid immediately shows which direction is thermodynamically preferred.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Aniline (phenylamine) is a much weaker base than a simple alkylamine such as ethylamine because in aniline the nitrogen lone pair is:",
    topic: "Acids & Bases: Basicity",
    explanation:
      "In aniline the nitrogen lone pair is delocalised into the aromatic ring, so it is less available to bond a proton; ethylamine's lone pair is fully localised and alkyl-donated, making it the far stronger base.",
    choices: [
      { text: "Delocalised into the aromatic ring, lowering its availability", isCorrect: true },
      { text: "Localised and pushed onto nitrogen by the ring" },
      { text: "Removed entirely, leaving no lone pair at all" },
      { text: "Held in a pure s orbital of high basicity" },
    ],
  },
  {
    stem: "A stronger base has a conjugate acid with a:",
    topic: "Acids & Bases: Basicity",
    explanation:
      "Base strength runs opposite to the acidity of its conjugate acid: a strong base holds the proton tightly, so its conjugate acid is weak and has a high pKa. Comparing conjugate-acid pKa values ranks base strength.",
    choices: [
      { text: "Higher pKa (weaker conjugate acid)", isCorrect: true },
      { text: "Lower pKa (stronger conjugate acid)" },
      { text: "pKa of exactly 7 in all cases" },
      { text: "pKa unrelated to base strength" },
    ],
  },
  {
    stem: "Aromatic amines such as aniline are weaker bases than aliphatic amines because the nitrogen lone pair is:",
    topic: "Acids & Bases: Basicity",
    explanation:
      "In aniline the nitrogen lone pair is delocalised into the aromatic ring, making it less available to bond a proton; this resonance lowers basicity relative to an aliphatic amine like methylamine.",
    choices: [
      { text: "Delocalised into the ring, so less available", isCorrect: true },
      { text: "More concentrated on nitrogen than in an alkylamine" },
      { text: "Completely removed from the molecule" },
      { text: "Converted into a second N–H bond" },
    ],
  },
  {
    stem: "An amide (e.g. CH₃CONH₂) is a far weaker base than an amine because the nitrogen lone pair is:",
    topic: "Acids & Bases: Basicity",
    explanation:
      "In an amide the nitrogen lone pair is delocalised into the adjacent carbonyl by resonance, tying it up and greatly reducing basicity; amides are essentially neutral, unlike basic amines.",
    choices: [
      { text: "Delocalised into the carbonyl group", isCorrect: true },
      { text: "Localised entirely on nitrogen" },
      { text: "Held in an sp-hybridised orbital" },
      { text: "Absent from the molecule altogether" },
    ],
  },
  {
    stem: "Electron-donating alkyl groups on nitrogen tend to make an amine:",
    topic: "Acids & Bases: Basicity",
    explanation:
      "Alkyl groups donate electron density (+I) to nitrogen, making the lone pair more available and stabilising the protonated ammonium ion, so in the gas phase basicity rises with alkyl substitution.",
    choices: [
      { text: "A stronger base", isCorrect: true },
      { text: "A weaker base" },
      { text: "Completely non-basic" },
      { text: "A strong acid instead" },
    ],
  },
  {
    stem: "Nucleophilicity and basicity differ in that nucleophilicity is a measure of:",
    topic: "Nucleophilicity vs Basicity",
    explanation:
      "Basicity is a thermodynamic measure of affinity for H⁺, while nucleophilicity is a kinetic measure of how fast a species attacks an electrophilic carbon; the two often, but not always, run parallel.",
    choices: [
      { text: "How fast it attacks an electrophilic carbon", isCorrect: true },
      { text: "How strongly a species binds a proton at equilibrium" },
      { text: "The colour of the species in solution" },
      { text: "The molar mass of the attacking species" },
    ],
  },
  {
    stem: "Down a group in the periodic table (e.g. F⁻ to I⁻), nucleophilicity in a protic solvent generally:",
    topic: "Nucleophilicity vs Basicity",
    explanation:
      "In protic solvents, larger, more polarisable and less tightly solvated ions are better nucleophiles, so nucleophilicity rises F⁻ < Cl⁻ < Br⁻ < I⁻ — the opposite of the basicity trend for these ions.",
    choices: [
      { text: "Increases with ion size and polarisability", isCorrect: true },
      { text: "Decreases steadily down the group" },
      { text: "Stays exactly constant down the group" },
      { text: "Exactly parallels the basicity trend" },
    ],
  },
  {
    stem: "A negatively charged nucleophile is generally a stronger nucleophile than its neutral conjugate; for example:",
    topic: "Nucleophilicity vs Basicity",
    explanation:
      "Removing the proton frees the lone pair and adds charge density, so the anion is more nucleophilic: hydroxide OH⁻ is a stronger nucleophile than water, and alkoxide RO⁻ stronger than an alcohol.",
    choices: [
      { text: "Hydroxide OH⁻ is a stronger nucleophile than water", isCorrect: true },
      { text: "Water is a stronger nucleophile than hydroxide" },
      { text: "Charge has no effect on nucleophilicity" },
      { text: "Neutral molecules are always the best nucleophiles" },
    ],
  },
  {
    stem: "Steric bulk around a nucleophile tends to:",
    topic: "Nucleophilicity vs Basicity",
    explanation:
      "A bulky nucleophile is hindered from reaching an electrophilic carbon, lowering its nucleophilicity even if it remains a strong base; this is why bulky bases like tert-butoxide favour elimination over substitution.",
    choices: [
      { text: "Lower nucleophilicity though basicity may stay", isCorrect: true },
      { text: "Increase its nucleophilicity sharply" },
      { text: "Have no effect at all on reactivity" },
      { text: "Convert the nucleophile into an electrophile" },
    ],
  },
  {
    stem: "A reaction in which a nucleophile replaces a leaving group on a saturated carbon is classified as:",
    topic: "Reaction Types",
    explanation:
      "Nucleophilic substitution at sp³ carbon (SN1 or SN2) exchanges a leaving group for a nucleophile; the closely related elimination pathways instead remove the leaving group and a β-hydrogen to form an alkene.",
    choices: [
      { text: "Nucleophilic substitution", isCorrect: true },
      { text: "Electrophilic addition" },
      { text: "Radical substitution" },
      { text: "Nucleophilic addition" },
    ],
  },
  {
    stem: "Addition of an electrophile to the π electrons of an alkene begins a reaction classified as:",
    topic: "Reaction Types",
    explanation:
      "Alkenes are electron-rich at the π bond, so they react with electrophiles; the electrophile adds first, generating a carbocation that is then captured by a nucleophile — electrophilic addition.",
    choices: [
      { text: "Electrophilic addition", isCorrect: true },
      { text: "Nucleophilic substitution" },
      { text: "Electrophilic substitution" },
      { text: "Radical elimination" },
    ],
  },
  {
    stem: "Attack of a nucleophile on the carbon of a C=O group, adding across the double bond, is classified as:",
    topic: "Reaction Types",
    explanation:
      "The electrophilic carbonyl carbon is attacked by a nucleophile, which adds across the C=O to give an alkoxide/alcohol; this nucleophilic addition is characteristic of aldehydes and ketones.",
    choices: [
      { text: "Nucleophilic addition", isCorrect: true },
      { text: "Electrophilic addition" },
      { text: "Nucleophilic substitution" },
      { text: "Radical addition" },
    ],
  },
  {
    stem: "Substitution of a hydrogen on a benzene ring by an electrophile is classified as:",
    topic: "Reaction Types",
    explanation:
      "Benzene's π system reacts with electrophiles, but rather than adding (which would destroy aromaticity) it substitutes a ring hydrogen, restoring the aromatic system — electrophilic aromatic substitution.",
    choices: [
      { text: "Electrophilic substitution", isCorrect: true },
      { text: "Nucleophilic ring addition" },
      { text: "Electrophilic addition" },
      { text: "Radical chain substitution" },
    ],
  },
  {
    stem: "Which statements about basicity of nitrogen compounds are correct? Select all that apply.",
    type: "MULTI",
    topic: "Acids & Bases: Basicity",
    explanation:
      "Amine basicity comes from the N lone pair; a stronger base has a weaker (higher-pKa) conjugate acid; aniline and amides are weaker bases because the lone pair is delocalised. Amides are not stronger bases than amines.",
    choices: [
      { text: "Amine basicity arises from the nitrogen lone pair", isCorrect: true },
      { text: "A stronger base has a higher-pKa conjugate acid", isCorrect: true },
      { text: "Aniline is a weaker base than an aliphatic amine", isCorrect: true },
      { text: "Amides are much weaker bases than amines", isCorrect: true },
      { text: "Amides are stronger bases than simple amines" },
      { text: "Delocalising the N lone pair increases basicity" },
    ],
  },
  {
    stem: "Which statements about nucleophilicity are correct? Select all that apply.",
    type: "MULTI",
    topic: "Nucleophilicity vs Basicity",
    explanation:
      "Nucleophilicity is kinetic; an anion is more nucleophilic than its neutral conjugate; in protic solvents nucleophilicity rises down a group; steric bulk lowers it. Nucleophilicity is not the same as basicity.",
    choices: [
      { text: "Nucleophilicity is a kinetic property", isCorrect: true },
      { text: "An anion is usually more nucleophilic than its conjugate acid", isCorrect: true },
      { text: "In protic solvents nucleophilicity increases down a group", isCorrect: true },
      { text: "Bulky nucleophiles are less effective at attacking carbon", isCorrect: true },
      { text: "Nucleophilicity is identical to basicity in every case" },
      { text: "Neutral molecules are always better nucleophiles than anions" },
    ],
  },
  {
    stem: "Basicity is a thermodynamic property, whereas nucleophilicity is a kinetic property.",
    type: "TRUE_FALSE",
    topic: "Nucleophilicity vs Basicity",
    explanation:
      "Basicity reflects the equilibrium affinity of a species for a proton (thermodynamic), while nucleophilicity reflects the rate at which it attacks an electrophilic carbon (kinetic); they measure different things.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The conjugate base of ethanol, CH₃CH₂OH, is:",
    topic: "Acids & Bases: Fundamentals",
    explanation:
      "Removing the O–H proton from ethanol gives the ethoxide ion CH₃CH₂O⁻ (an alkoxide); this strong base and good nucleophile is generated by reacting the alcohol with sodium or sodium hydride.",
    choices: [
      { text: "The ethoxide ion, CH₃CH₂O⁻", isCorrect: true },
      { text: "The ethyl cation, CH₃CH₂⁺" },
      { text: "Ethanoic acid, CH₃COOH" },
      { text: "Ethene, CH₂=CH₂" },
    ],
  },
  {
    stem: "Which species is the strongest base?",
    topic: "Acids & Bases: Basicity",
    explanation:
      "Base strength inversely tracks conjugate-acid pKa: amide (NH₂⁻, conj. acid NH₃ pKa 38) is a far stronger base than hydroxide (conj. acid H₂O, pKa 15.7), which is stronger than a carboxylate (conj. acid pKa ~5).",
    choices: [
      { text: "The amide ion, NH₂⁻", isCorrect: true },
      { text: "The hydroxide ion, OH⁻" },
      { text: "A carboxylate ion, RCOO⁻" },
      { text: "A chloride ion, Cl⁻" },
    ],
  },
  {
    stem: "A leaving group departs most readily when it is:",
    topic: "Reaction Mechanisms",
    explanation:
      "Good leaving groups are weak bases that are stable once they carry the bonding electrons (e.g. I⁻, Br⁻, tosylate); strong bases like OH⁻ and NH₂⁻ are poor leaving groups because they are unstable as anions.",
    choices: [
      { text: "A weak, stable base such as a halide or tosylate", isCorrect: true },
      { text: "A strong, unstable base such as hydroxide" },
      { text: "Always a neutral hydrocarbon" },
      { text: "A species that cannot bear the bonding electrons" },
    ],
  },
  {
    stem: "The strongest acid among the following is:",
    topic: "Acids & Bases: Acidity",
    explanation:
      "Ordering by pKa: a carboxylic acid (~4.8) is more acidic than phenol (~10), which is more acidic than an alcohol (~16), which is more acidic than an alkane C–H (~50).",
    choices: [
      { text: "Ethanoic acid (pKa ≈ 4.8)", isCorrect: true },
      { text: "Phenol (pKa ≈ 10)" },
      { text: "Ethanol (pKa ≈ 16)" },
      { text: "Ethane (pKa ≈ 50)" },
    ],
  },
  {
    stem: "The α-hydrogens next to a carbonyl group are unusually acidic because the resulting carbanion (enolate) is:",
    topic: "Acids & Bases: Acidity",
    explanation:
      "Deprotonating an α-carbon gives an enolate whose negative charge is delocalised onto the carbonyl oxygen by resonance; this stabilisation makes α-hydrogens (pKa ~20) far more acidic than ordinary C–H bonds.",
    choices: [
      { text: "Stabilised onto the carbonyl oxygen", isCorrect: true },
      { text: "Destabilised by the nearby carbonyl" },
      { text: "Unable to delocalise its charge" },
      { text: "Converted directly into a carbocation" },
    ],
  },
  {
    stem: "A Brønsted–Lowry acid–base reaction always involves the transfer of:",
    topic: "Acids & Bases: Fundamentals",
    explanation:
      "In the Brønsted–Lowry picture an acid donates a proton (H⁺) to a base; every such reaction is a proton transfer that generates a conjugate acid and a conjugate base.",
    choices: [
      { text: "A proton from the acid to the base", isCorrect: true },
      { text: "An electron pair from acid to base" },
      { text: "A hydride ion from base to acid" },
      { text: "A whole hydrogen atom with its electron" },
    ],
  },
  {
    stem: "The conjugate acid of methylamine, CH₃NH₂, is:",
    topic: "Acids & Bases: Fundamentals",
    explanation:
      "Adding a proton to the nitrogen lone pair of methylamine gives the methylammonium ion CH₃NH₃⁺; its pKa (~10.6) reflects the basicity of the parent amine.",
    choices: [
      { text: "The methylammonium ion, CH₃NH₃⁺", isCorrect: true },
      { text: "The methylamide ion, CH₃NH⁻" },
      { text: "Methanol, CH₃OH" },
      { text: "The methyl cation, CH₃⁺" },
    ],
  },
  {
    stem: "The rate law of a reaction reveals the composition of the:",
    topic: "Reaction Kinetics",
    explanation:
      "The experimentally determined rate law reflects the species present in (and up to) the rate-determining transition state; it is a key piece of evidence used to distinguish, for example, SN1 from SN2 mechanisms.",
    choices: [
      { text: "The rate-determining transition state", isCorrect: true },
      { text: "The final product only" },
      { text: "The solvent molecules exclusively" },
      { text: "Catalyst regenerated at the end" },
    ],
  },
  {
    stem: "An intermediate that appears in a mechanism but not in the overall equation is one that is:",
    topic: "Reaction Mechanisms",
    explanation:
      "A true intermediate is produced in one step and consumed in a later step, so it cancels out of the overall balanced equation even though it has a real, finite existence during the reaction.",
    choices: [
      { text: "Formed then consumed in a later step", isCorrect: true },
      { text: "Present unchanged from start to finish" },
      { text: "One that is never actually formed" },
      { text: "The same as the final product" },
    ],
  },
  {
    stem: "A radical chain reaction characteristically proceeds through the stages:",
    topic: "Reaction Mechanisms",
    explanation:
      "Radical chains run through initiation (radicals generated, e.g. by homolysis), propagation (radicals consumed and regenerated, building product), and termination (radicals combine, ending the chain).",
    choices: [
      { text: "Initiation, propagation and termination", isCorrect: true },
      { text: "Only a single concerted step" },
      { text: "Protonation followed by deprotonation" },
      { text: "Addition followed immediately by substitution" },
    ],
  },
  {
    stem: "In the propagation steps of a radical chain, radicals are:",
    topic: "Reaction Mechanisms",
    explanation:
      "Propagation steps consume one radical and generate another, so the number of radicals is conserved while product is formed; this self-sustaining cycle continues until termination removes radicals.",
    choices: [
      { text: "Consumed and regenerated each cycle", isCorrect: true },
      { text: "Only created and never consumed" },
      { text: "Only destroyed and never created" },
      { text: "Entirely absent from the mechanism" },
    ],
  },
  {
    stem: "Which is the best leaving group in a nucleophilic substitution?",
    topic: "Reaction Mechanisms",
    explanation:
      "Iodide is the weakest base among the halides and the most stable once it leaves, so it is the best leaving group; hydroxide and amide are strong bases and very poor leaving groups.",
    choices: [
      { text: "Iodide, I⁻", isCorrect: true },
      { text: "Hydroxide, OH⁻" },
      { text: "Amide, NH₂⁻" },
      { text: "Hydride, H⁻" },
    ],
  },
  {
    stem: "Protonating a poor leaving group such as the –OH of an alcohol helps reaction by converting it into:",
    topic: "Reaction Mechanisms",
    explanation:
      "Acid protonates the hydroxyl oxygen to give –OH₂⁺, so the group departs as neutral water — a far better (weaker-base) leaving group than hydroxide; this is why alcohol substitutions and dehydrations need acid.",
    choices: [
      { text: "Water, a better leaving group", isCorrect: true },
      { text: "An even stronger base" },
      { text: "A carbanion-type leaving group" },
      { text: "A stable aromatic ring system" },
    ],
  },
  {
    stem: "The inductive electron-withdrawing effect of a substituent on acidity falls off:",
    topic: "Acids & Bases: Acidity",
    explanation:
      "Because the inductive effect is transmitted through σ bonds, it weakens rapidly with distance; a chlorine two carbons from a carboxyl group raises acidity far less than one on the adjacent carbon.",
    choices: [
      { text: "Rapidly with distance", isCorrect: true },
      { text: "Not at all as distance increases" },
      { text: "More strongly as distance increases" },
      { text: "Only through π bonds, never σ bonds" },
    ],
  },
  {
    stem: "Which of these is the most stable carbocation?",
    topic: "Reactive Intermediates",
    explanation:
      "The benzylic (or tertiary) cation is stabilised by resonance into the ring (or by maximal alkyl donation), so it is more stable than a secondary, primary, or the very unstable methyl cation.",
    choices: [
      { text: "A benzylic carbocation", isCorrect: true },
      { text: "A primary carbocation" },
      { text: "The methyl carbocation" },
      { text: "A vinyl carbocation" },
    ],
  },
  {
    stem: "Compared to a carbocation, a carbanion of the same substitution pattern is stabilised by the opposite electronic influences, being favoured by:",
    topic: "Reactive Intermediates",
    explanation:
      "A carbanion bears negative charge, so it is stabilised by electron-withdrawing groups and destabilised by electron-donating alkyl groups — exactly the reverse of the pattern that stabilises a carbocation.",
    choices: [
      { text: "Electron-withdrawing groups nearby", isCorrect: true },
      { text: "Electron-donating alkyl groups nearby" },
      { text: "An empty adjacent p orbital" },
      { text: "Increasing alkyl substitution" },
    ],
  },
  {
    stem: "A concerted reaction is one that:",
    topic: "Reaction Mechanisms",
    explanation:
      "A concerted reaction takes place in a single step with no intermediate — bonds break and form simultaneously through one transition state; SN2 substitution is the classic concerted example.",
    choices: [
      { text: "Occurs in a single step with no intermediate", isCorrect: true },
      { text: "Always proceeds through a stable intermediate" },
      { text: "Requires at least three separate steps" },
      { text: "Involves no bond breaking" },
    ],
  },
  {
    stem: "The transition state of a one-step (concerted) reaction contains:",
    topic: "Reaction Mechanisms",
    explanation:
      "In a concerted transition state, bonds to the incoming and departing groups are partially formed and partially broken at the same time; this single high-energy point determines the reaction's rate.",
    choices: [
      { text: "Partly made and partly broken bonds", isCorrect: true },
      { text: "Only completely formed bonds" },
      { text: "Only completely broken bonds" },
      { text: "No bonds undergoing any change" },
    ],
  },
  {
    stem: "Water can act as either an acid or a base, which makes it:",
    topic: "Acids & Bases: Fundamentals",
    explanation:
      "Water is amphoteric (amphiprotic): it donates a proton to bases (acting as an acid) and accepts one from acids (acting as a base), a versatility central to aqueous organic chemistry.",
    choices: [
      { text: "Amphoteric (amphiprotic)", isCorrect: true },
      { text: "A strong acid only" },
      { text: "A strong base only" },
      { text: "Completely unreactive toward protons" },
    ],
  },
  {
    stem: "The larger the Ka of an acid, the:",
    topic: "Acids & Bases: pKa",
    explanation:
      "Ka is the acid dissociation constant; a larger Ka means the acid dissociates more fully and is stronger, corresponding to a smaller (often negative) pKa value.",
    choices: [
      { text: "Stronger the acid and the smaller its pKa", isCorrect: true },
      { text: "Weaker the acid and the larger its pKa" },
      { text: "More basic the substance becomes" },
      { text: "Less it dissociates in water" },
    ],
  },
  {
    stem: "Sulfuric acid can protonate an alcohol; in doing so the alcohol acts as:",
    topic: "Acids & Bases: Fundamentals",
    explanation:
      "The alcohol oxygen's lone pair accepts a proton from the strong acid, so the alcohol behaves as a Brønsted base here, forming a protonated (oxonium) species that is set up to lose water.",
    choices: [
      { text: "A base, protonated at oxygen", isCorrect: true },
      { text: "An acid, donating its own proton" },
      { text: "A reducing agent" },
      { text: "A leaving group in its own right" },
    ],
  },
  {
    stem: "In the gas phase, the acidity order of the simple alcohols is methanol < ethanol < ... because larger alkyl groups:",
    topic: "Acids & Bases: Acidity",
    explanation:
      "Larger, more polarisable alkyl groups better stabilise the alkoxide's negative charge in the gas phase, so gas-phase acidity actually increases with alkyl size (the trend can reverse in solution due to solvation).",
    choices: [
      { text: "Better stabilise the alkoxide charge", isCorrect: true },
      { text: "Destabilise the alkoxide by adding charge" },
      { text: "Have no measurable effect" },
      { text: "Convert the alkoxide into a cation" },
    ],
  },
  {
    stem: "The species H₃O⁺ (hydronium) is best described as the:",
    topic: "Acids & Bases: Fundamentals",
    explanation:
      "Hydronium is the conjugate acid of water, formed when water accepts a proton; its pKa (~ −1.7) makes it the effective strong-acid species present in acidic aqueous solution.",
    choices: [
      { text: "Conjugate acid of water", isCorrect: true },
      { text: "Conjugate base of water" },
      { text: "Conjugate acid of hydroxide" },
      { text: "A neutral, non-acidic species" },
    ],
  },
  {
    stem: "A base that is very effective at removing protons but too bulky to attack carbon efficiently is described as:",
    topic: "Nucleophilicity vs Basicity",
    explanation:
      "A strong, hindered base such as tert-butoxide or LDA readily removes a proton but is too bulky to reach an sp³ carbon for substitution, so it strongly favours elimination over substitution.",
    choices: [
      { text: "A strong, non-nucleophilic (hindered) base", isCorrect: true },
      { text: "A weak base and strong nucleophile" },
      { text: "Both a strong base and a strong nucleophile" },
      { text: "Neither basic nor nucleophilic" },
    ],
  },
  {
    stem: "The overall order of increasing acidity alkane < alkene < alkyne for their C–H bonds parallels the increasing:",
    topic: "Acids & Bases: Acidity",
    explanation:
      "The trend tracks the s-character of the carbon holding the hydrogen (sp³ < sp² < sp); higher s-character stabilises the carbanion conjugate base, so terminal alkynes are the most acidic of the three.",
    choices: [
      { text: "s-character of the relevant carbon", isCorrect: true },
      { text: "p-character of the relevant carbon" },
      { text: "overall molar mass of the hydrocarbon" },
      { text: "number of hydrogens in the molecule" },
    ],
  },
];
