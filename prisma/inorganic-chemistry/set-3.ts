/**
 * INORGANIC CHEMISTRY — PRACTICE SET 3
 * Chemical Bonding I — Ionic & Covalent
 *
 * Housecroft & Sharpe / J. D. Lee / Weller depth. Ionic bonding and lattice energy
 * (Born–Landé, the Madelung constant), the Born–Haber cycle, Fajans' rules and covalent
 * character, Lewis structures, resonance and formal charge, exceptions to the octet,
 * VSEPR geometry and bond angles, hybridization, bond polarity and dipole moments, and
 * the bond-order / bond-length / bond-energy relationships. 100 questions.
 *
 * Chemical formulae, charges, equations and electron configurations are written in proper
 * notation (subscripts, superscripts, arrows) so the items read as real exam questions.
 * Options are length-matched and answer positions are randomized by the engine.
 */

import type { Q } from "../_lib/qbank";

export const INORGANIC_SET_3: Q[] = [
  {
    stem: "An ionic bond is best described as the electrostatic attraction that arises after:",
    topic: "Ionic Bonding & Lattice Formation",
    explanation:
      "Ionic bonding forms when a metal transfers one or more electrons to a non-metal, giving oppositely charged ions that attract; in Na⁺ and Cl⁻ forming NaCl, each ion attains a noble-gas configuration and packs into a lattice.",
    choices: [
      { text: "electrons transfer from a metal to a non-metal", isCorrect: true },
      { text: "electrons are shared equally between atoms" },
      { text: "electrons are pooled among metal atoms" },
      { text: "protons move from one atom to another" },
    ],
  },
  {
    stem: "In the rock-salt structure of NaCl, each Na⁺ ion is surrounded by how many Cl⁻ ions?",
    topic: "Ionic Bonding & Lattice Formation",
    explanation:
      "Rock salt is 6:6 coordinated: every Na⁺ is octahedrally surrounded by six Cl⁻ and vice versa. The 6:6 arrangement reflects the radius ratio of the ions, which favours octahedral holes for this cation-to-anion size.",
    choices: [
      { text: "six", isCorrect: true },
      { text: "four" },
      { text: "eight" },
      { text: "twelve" },
    ],
  },
  {
    stem: "Caesium chloride (CsCl) adopts 8:8 coordination rather than the 6:6 of NaCl chiefly because:",
    topic: "Ionic Bonding & Lattice Formation",
    explanation:
      "The larger Cs⁺ ion has a radius ratio with Cl⁻ that exceeds the limit for octahedral holes, so it fills cubic holes with eight neighbours; radius ratio rules thus rationalise why bigger cations take higher coordination numbers.",
    choices: [
      { text: "the larger Cs⁺ raises the radius ratio", isCorrect: true },
      { text: "caesium is more electronegative than sodium" },
      { text: "the chloride ion is much smaller in CsCl" },
      { text: "the bonding in CsCl is largely covalent" },
    ],
  },
  {
    stem: "Ionic solids such as NaCl are typically hard, brittle, and high-melting because:",
    topic: "Ionic Bonding & Lattice Formation",
    explanation:
      "A strong three-dimensional array of electrostatic forces must be overcome to melt or deform the crystal, giving high melting points and hardness; displacing a layer aligns like charges, so the crystal cleaves, which is why ionic solids are brittle.",
    choices: [
      { text: "of a strong 3-D lattice of ionic forces", isCorrect: true },
      { text: "of weak dispersion forces between molecules" },
      { text: "of a sea of freely moving electrons" },
      { text: "of a network of shared covalent bonds" },
    ],
  },
  {
    stem: "Molten NaCl conducts electricity, whereas the solid does not, because:",
    topic: "Ionic Bonding & Lattice Formation",
    explanation:
      "In the solid the ions are locked in the lattice, but on melting they become free to move and carry charge; conductivity on melting is a classic diagnostic of ionic bonding, distinguishing it from covalent solids that stay non-conducting.",
    choices: [
      { text: "ions become mobile only when the lattice melts", isCorrect: true },
      { text: "electrons are released only in the liquid" },
      { text: "the melt contains neutral NaCl molecules" },
      { text: "melting converts the bonding to metallic" },
    ],
  },
  {
    stem: "Which factor increases the electrostatic energy released as an ionic lattice forms?",
    topic: "Ionic Bonding & Lattice Formation",
    explanation:
      "Lattice energy grows with larger ionic charges and smaller inter-ionic distances, since the Coulomb attraction scales as (Z⁺Z⁻)/r; higher charges dominate, which is why MgO greatly exceeds NaCl in lattice energy.",
    choices: [
      { text: "higher ionic charges and smaller ions", isCorrect: true },
      { text: "lower ionic charges and larger ions" },
      { text: "larger ions of the same charge" },
      { text: "a lower charge on the cation only" },
    ],
  },
  {
    stem: "The empirical formula of an ionic compound is fixed by the requirement that:",
    topic: "Ionic Bonding & Lattice Formation",
    explanation:
      "An ionic solid is overall neutral, so cation and anion charges must balance; for Al³⁺ with O²⁻ the ratio 2:3 gives Al₂O₃, the formula that makes the total positive and negative charge equal.",
    choices: [
      { text: "the total positive and negative charge must balance", isCorrect: true },
      { text: "the cation and anion must be equal in number" },
      { text: "the smaller ion must always be in excess" },
      { text: "the metal must supply exactly one electron" },
    ],
  },
  {
    stem: "Which properties are characteristic of typical ionic compounds? Select all that apply.",
    type: "MULTI",
    topic: "Ionic Bonding & Lattice Formation",
    explanation:
      "Ionic compounds tend to have high melting points, to be brittle, to conduct when molten or dissolved, and often to dissolve in polar solvents such as water; they do not conduct as solids, because the charged ions are held fixed in the lattice.",
    choices: [
      { text: "high melting and boiling points", isCorrect: true },
      { text: "brittleness under mechanical stress", isCorrect: true },
      { text: "conduction when molten or aqueous", isCorrect: true },
      { text: "frequent solubility in polar solvents", isCorrect: true },
      { text: "good electrical conduction as a solid" },
      { text: "very low melting points as solids" },
    ],
  },
  {
    stem: "True or False: Because the electrostatic attraction in an ionic lattice acts in all directions, ionic bonding is described as non-directional.",
    type: "TRUE_FALSE",
    topic: "Ionic Bonding & Lattice Formation",
    explanation:
      "True. Unlike a covalent bond that points along a specific axis, the Coulomb force around an ion is spherically symmetric; this non-directional character lets ions surround themselves with as many counter-ions as size allows, giving the regular lattice.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "According to the Born–Landé model, the lattice energy of an ionic crystal is proportional to:",
    topic: "Lattice Energy & the Born–Landé Equation",
    explanation:
      "The Born–Landé expression makes lattice energy scale as (Z⁺Z⁻)/r₀, also carrying the Madelung constant and the Born exponent; the product of charges over the inter-ionic separation captures why charge and size dominate the trend.",
    choices: [
      { text: "(Z⁺Z⁻) divided by the inter-ionic distance", isCorrect: true },
      { text: "the sum of the two ionic charges only" },
      { text: "the inter-ionic distance divided by the charges" },
      { text: "the difference in the two ionic radii" },
    ],
  },
  {
    stem: "The Madelung constant that appears in the lattice-energy expression depends on:",
    topic: "Lattice Energy & the Born–Landé Equation",
    explanation:
      "The Madelung constant sums the geometric series of attractions and repulsions over the whole lattice, so it is fixed by the structure type; rock salt, caesium chloride and zinc blende each have their own characteristic value.",
    choices: [
      { text: "the geometry of the crystal structure", isCorrect: true },
      { text: "the temperature of the crystal" },
      { text: "the mass of all the ions present" },
      { text: "the colour of the whole ionic solid" },
    ],
  },
  {
    stem: "Placing MgO, NaCl, CaO and KCl in order, which has the largest (most exothermic) lattice energy?",
    topic: "Lattice Energy & the Born–Landé Equation",
    explanation:
      "MgO wins because it pairs the +2/−2 charges of small Mg²⁺ and O²⁻; the (Z⁺Z⁻) product of 4 and the short distance dominate over the singly charged NaCl and KCl and the larger CaO.",
    choices: [
      { text: "MgO", isCorrect: true },
      { text: "CaO" },
      { text: "NaCl" },
      { text: "KCl" },
    ],
  },
  {
    stem: "Why is the lattice energy of MgO roughly four times that of NaCl?",
    topic: "Lattice Energy & the Born–Landé Equation",
    explanation:
      "Both are 6:6 rock-salt solids, but MgO carries doubly charged ions, so the (Z⁺Z⁻) product is 4 rather than 1; the higher charges, together with the smaller ions, multiply the Coulomb attraction several-fold.",
    choices: [
      { text: "its ions carry double the charge", isCorrect: true },
      { text: "its ions are far larger than in NaCl" },
      { text: "it adopts a different lattice type" },
      { text: "magnesium is more electronegative" },
    ],
  },
  {
    stem: "For the alkali-metal chlorides LiCl → CsCl, the lattice energy becomes less exothermic down the group because:",
    topic: "Lattice Energy & the Born–Landé Equation",
    explanation:
      "As the cation grows from Li⁺ to Cs⁺, the inter-ionic distance r₀ increases, so (Z⁺Z⁻)/r₀ and the lattice energy shrink; the charges are constant, leaving ionic size to drive the trend.",
    choices: [
      { text: "the inter-ionic distance increases", isCorrect: true },
      { text: "the ionic charges steadily rise" },
      { text: "the Madelung constant falls sharply" },
      { text: "the chloride ion grows much smaller" },
    ],
  },
  {
    stem: "Lattice energies obtained from a Born–Haber cycle are usually a little larger than those from the purely ionic Born–Landé model when:",
    topic: "Lattice Energy & the Born–Landé Equation",
    explanation:
      "The electrostatic model assumes perfect ions; extra covalent character adds bonding the model omits, so the experimental (Born–Haber) value exceeds the calculated one. A large gap therefore signals significant polarisation and covalency.",
    choices: [
      { text: "the bonding has covalent character", isCorrect: true },
      { text: "the crystal is perfectly ionic" },
      { text: "the ions are very large and soft" },
      { text: "the charges on the ions are low" },
    ],
  },
  {
    stem: "The Born exponent (or the repulsive term) is included in lattice-energy models to represent:",
    topic: "Lattice Energy & the Born–Landé Equation",
    explanation:
      "At very short range the electron clouds of the ions repel, opposing collapse; the Born repulsive term accounts for this, so the net lattice energy is slightly less than a bare point-charge attraction would predict.",
    choices: [
      { text: "short-range repulsion of electron clouds", isCorrect: true },
      { text: "the long-range attraction of the ions" },
      { text: "the kinetic energy of the ions" },
      { text: "the covalent sharing of electrons" },
    ],
  },
  {
    stem: "Which changes would increase the magnitude of a compound's lattice energy? Select all that apply.",
    type: "MULTI",
    topic: "Lattice Energy & the Born–Landé Equation",
    explanation:
      "Lattice energy rises with greater ionic charge and with smaller ions, both of which strengthen the (Z⁺Z⁻)/r₀ term; increasing the ionic radii or lowering the charges weakens the attraction and reduces the lattice energy.",
    choices: [
      { text: "raising the charge on the cation", isCorrect: true },
      { text: "raising the charge on the anion", isCorrect: true },
      { text: "using a smaller cation", isCorrect: true },
      { text: "using a smaller anion", isCorrect: true },
      { text: "increasing the ionic radii" },
      { text: "lowering the ionic charges" },
    ],
  },
  {
    stem: "The Born–Haber cycle is an application of which principle to the formation of an ionic solid?",
    topic: "The Born–Haber Cycle",
    explanation:
      "The cycle applies Hess's law: because enthalpy is a state function, the direct formation enthalpy equals the sum of the stepwise enthalpies (sublimation, dissociation, ionisation, electron gain and lattice formation) around the cycle.",
    choices: [
      { text: "Hess's law of constant heat summation", isCorrect: true },
      { text: "Le Chatelier's principle" },
      { text: "the Aufbau principle" },
      { text: "Hund's rule of maximum multiplicity" },
    ],
  },
  {
    stem: "In the Born–Haber cycle for NaCl, which step is endothermic?",
    topic: "The Born–Haber Cycle",
    explanation:
      "Sublimation of sodium, dissociation of Cl₂ and ionisation of sodium all absorb energy, so they are endothermic; electron gain by chlorine and lattice formation release energy. Ionisation of the metal is a characteristically endothermic step.",
    choices: [
      { text: "ionisation of gaseous sodium atoms", isCorrect: true },
      { text: "lattice formation from gaseous ions" },
      { text: "electron gain by chlorine atoms" },
      { text: "condensation of sodium vapour" },
    ],
  },
  {
    stem: "For NaCl the data are ΔHf = −411, ΔHsub(Na) = +107, ½D(Cl₂) = +122, IE(Na) = +496 and EA(Cl) = −349 kJ mol⁻¹. The lattice energy is closest to:",
    topic: "The Born–Haber Cycle",
    explanation:
      "Rearranging the cycle, U = ΔHf − ΔHsub − IE − ½D − EA = −411 − 107 − 496 − 122 + 349 = −787 kJ mol⁻¹; the large negative value reflects the strong ionic lattice.",
    choices: [
      { text: "−787 kJ mol⁻¹", isCorrect: true },
      { text: "−411 kJ mol⁻¹" },
      { text: "−640 kJ mol⁻¹" },
      { text: "−960 kJ mol⁻¹" },
    ],
  },
  {
    stem: "Within a Born–Haber cycle, the lattice formation step (gaseous ions → solid) is always:",
    topic: "The Born–Haber Cycle",
    explanation:
      "Bringing gaseous cations and anions together into the ordered crystal releases a large amount of energy, so lattice formation is strongly exothermic; it is usually the largest single energy term and the main driving force for the compound's stability.",
    choices: [
      { text: "strongly exothermic", isCorrect: true },
      { text: "strongly endothermic" },
      { text: "close to zero" },
      { text: "endothermic for small ions" },
    ],
  },
  {
    stem: "The second ionisation energy of an alkaline-earth metal appears in the Born–Haber cycle for its ²⁺ oxide because:",
    topic: "The Born–Haber Cycle",
    explanation:
      "Forming M²⁺ requires removing two electrons, so both the first and second ionisation energies enter the cycle; although the second is larger, the very exothermic lattice energy of the doubly charged oxide more than repays it.",
    choices: [
      { text: "two electrons must be removed to give M²⁺", isCorrect: true },
      { text: "the metal instead gains two electrons" },
      { text: "the oxide ion loses two electrons" },
      { text: "the lattice contains only M⁺ ions" },
    ],
  },
  {
    stem: "A Born–Haber analysis explains why 'NaCl₂' (containing Na²⁺) does not form, because:",
    topic: "The Born–Haber Cycle",
    explanation:
      "The huge second ionisation energy of sodium, which strips a 2p electron from a noble-gas core, cannot be recovered even by the larger lattice energy of a 2+ salt; the cycle therefore predicts a positive formation enthalpy for NaCl₂.",
    choices: [
      { text: "Na's 2nd ionisation energy is far too large", isCorrect: true },
      { text: "the lattice energy of NaCl₂ would be tiny" },
      { text: "chlorine cannot accept two electrons" },
      { text: "the Na²⁺ ion would be far too large" },
    ],
  },
  {
    stem: "Which steps in a typical Born–Haber cycle are endothermic (energy-absorbing)? Select all that apply.",
    type: "MULTI",
    topic: "The Born–Haber Cycle",
    explanation:
      "Atomising or subliming the metal, dissociating the diatomic non-metal into atoms, and ionising the metal all absorb energy; electron attachment to the non-metal and formation of the lattice from gaseous ions both release energy.",
    choices: [
      { text: "sublimation of the metal", isCorrect: true },
      { text: "bond dissociation of the non-metal", isCorrect: true },
      { text: "ionisation of the metal atoms", isCorrect: true },
      { text: "first electron gain enthalpy of a halogen" },
      { text: "lattice formation from gaseous ions" },
    ],
  },
  {
    stem: "True or False: The lattice energy cannot be measured directly, so the Born–Haber cycle is used to obtain it from other measurable enthalpies.",
    type: "TRUE_FALSE",
    topic: "The Born–Haber Cycle",
    explanation:
      "True. Because one cannot isolate the step of assembling a mole of gaseous ions into a crystal, lattice energy is found indirectly: every other term in the cycle is measurable, and Hess's law then yields the lattice energy by difference.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Fajans' rules predict greater covalent character in an ionic bond when the cation is:",
    topic: "Fajans' Rules & Covalent Character",
    explanation:
      "A small, highly charged cation has a strong polarising power, distorting the anion's electron cloud toward covalency; thus Al³⁺ polarises far more than Na⁺, giving aluminium halides much more covalent character.",
    choices: [
      { text: "small and highly charged", isCorrect: true },
      { text: "large and singly charged" },
      { text: "large and weakly charged" },
      { text: "small and weakly charged" },
    ],
  },
  {
    stem: "By Fajans' rules, covalent character increases when the anion is:",
    topic: "Fajans' Rules & Covalent Character",
    explanation:
      "A large, highly charged anion is easily polarised because its outer electrons are loosely held; iodide is more polarisable than fluoride, so LiI shows more covalent character than LiF despite similar cation charge.",
    choices: [
      { text: "large and highly charged", isCorrect: true },
      { text: "small and singly charged" },
      { text: "small and weakly charged" },
      { text: "large and weakly charged" },
    ],
  },
  {
    stem: "Which compound is expected to have the most covalent character according to Fajans' rules?",
    topic: "Fajans' Rules & Covalent Character",
    explanation:
      "AlCl₃ combines the small, triply charged Al³⁺ with a polarisable chloride, maximising polarisation; the alkali-metal chlorides, with singly charged low-polarising cations, are far more ionic by comparison.",
    choices: [
      { text: "AlCl₃", isCorrect: true },
      { text: "NaCl" },
      { text: "MgCl₂" },
      { text: "CsCl" },
    ],
  },
  {
    stem: "Comparing LiF, LiCl, LiBr and LiI, covalent character is greatest in:",
    topic: "Fajans' Rules & Covalent Character",
    explanation:
      "With the cation fixed as Li⁺, covalency tracks anion polarisability, which rises F < Cl < Br < I; the large, soft iodide is most easily distorted, so LiI is the most covalent and lowest-melting of the series.",
    choices: [
      { text: "LiI", isCorrect: true },
      { text: "LiF" },
      { text: "LiCl" },
      { text: "LiBr" },
    ],
  },
  {
    stem: "The polarising power of a cation, central to Fajans' rules, is measured by its:",
    topic: "Fajans' Rules & Covalent Character",
    explanation:
      "Polarising power rises with charge and falls with size, so it is expressed as the charge density (charge per unit radius or volume); a high charge density lets a cation pull on a neighbouring anion's electrons and induce covalency.",
    choices: [
      { text: "its charge-to-size ratio", isCorrect: true },
      { text: "the atomic mass number" },
      { text: "the electron affinity value" },
      { text: "the melting point of the metal" },
    ],
  },
  {
    stem: "A cation with a non-noble-gas (e.g. 18-electron) outer configuration polarises more strongly than an inert-gas-type cation of the same size and charge because:",
    topic: "Fajans' Rules & Covalent Character",
    explanation:
      "A pseudo-noble-gas d¹⁰ shell screens the nucleus poorly, so such a cation exerts a greater effective pull on anion electrons; this is why Cu⁺ and Ag⁺ salts are more covalent than the analogous alkali-metal salts.",
    choices: [
      { text: "its d electrons shield the nucleus poorly", isCorrect: true },
      { text: "it has a much larger ionic radius" },
      { text: "it carries a smaller nuclear charge" },
      { text: "it has a complete octet outside" },
    ],
  },
  {
    stem: "According to Fajans' rules, which conditions favour increased covalent character in a mainly ionic bond? Select all that apply.",
    type: "MULTI",
    topic: "Fajans' Rules & Covalent Character",
    explanation:
      "Covalency is favoured by a small cation, a high cationic charge, a large anion, and a cation with a non-inert-gas electron configuration; a large low-charge cation with a small anion instead favours a predominantly ionic bond.",
    choices: [
      { text: "a small cation", isCorrect: true },
      { text: "a high charge on the cation", isCorrect: true },
      { text: "a large, polarisable anion", isCorrect: true },
      { text: "a cation with a non-noble-gas configuration", isCorrect: true },
      { text: "a very large but singly charged cation" },
      { text: "a small and weakly charged anion" },
    ],
  },
  {
    stem: "True or False: Fajans' rules help explain why AlCl₃ is a low-melting, easily vaporised solid rather than a high-melting ionic salt.",
    type: "TRUE_FALSE",
    topic: "Fajans' Rules & Covalent Character",
    explanation:
      "True. The intense polarising power of Al³⁺ imparts strong covalent character, so AlCl₃ forms molecular/dimeric Al₂Cl₆ units held by weaker forces; hence its low melting point, unlike a fully ionic chloride.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "In drawing a Lewis structure, the total number of valence electrons for the polyatomic ion NO₃⁻ is:",
    topic: "Lewis Structures & the Octet",
    explanation:
      "Nitrogen contributes 5, each of three oxygens 6 (18), and the −1 charge adds 1, giving 5 + 18 + 1 = 24 valence electrons to distribute; counting electrons correctly is the essential first step of any Lewis structure.",
    choices: [
      { text: "24", isCorrect: true },
      { text: "22" },
      { text: "23" },
      { text: "26" },
    ],
  },
  {
    stem: "The octet rule states that main-group atoms tend to gain, lose, or share electrons until they:",
    topic: "Lewis Structures & the Octet",
    explanation:
      "Main-group atoms are most stable with eight electrons in their valence shell, matching a noble-gas configuration; this octet target guides the placing of bonding and lone pairs when building Lewis structures for molecules and ions.",
    choices: [
      { text: "are surrounded by eight valence electrons", isCorrect: true },
      { text: "have two electrons in every shell" },
      { text: "empty their outermost shell entirely" },
      { text: "hold eighteen valence electrons" },
    ],
  },
  {
    stem: "In the Lewis structure of CO₂, O=C=O, the carbon atom is surrounded by:",
    topic: "Lewis Structures & the Octet",
    explanation:
      "Carbon forms two double bonds to the oxygens, so eight bonding electrons (two σ and two π) complete its octet with no lone pairs; each oxygen then carries two lone pairs, satisfying every octet in the linear molecule.",
    choices: [
      { text: "four bonding pairs and no lone pairs", isCorrect: true },
      { text: "two bonding pairs and two lone pairs" },
      { text: "three bonding pairs and one lone pair" },
      { text: "four bonding pairs and two lone pairs" },
    ],
  },
  {
    stem: "A coordinate (dative) covalent bond differs from an ordinary covalent bond in that:",
    topic: "Lewis Structures & the Octet",
    explanation:
      "In a dative bond both shared electrons come from the same atom, as when the lone pair of NH₃ bonds to H⁺ to give NH₄⁺; once formed it is identical to any other covalent bond, differing only in electron origin.",
    choices: [
      { text: "both shared electrons come from one atom", isCorrect: true },
      { text: "it contains three shared electrons" },
      { text: "it is much weaker than a normal bond" },
      { text: "no electrons are actually shared" },
    ],
  },
  {
    stem: "When several Lewis structures are possible, the most plausible one generally has:",
    topic: "Lewis Structures & the Octet",
    explanation:
      "The preferred structure minimises formal charges and places any negative formal charge on the most electronegative atom; keeping formal charges small and sensibly located best represents the true electron distribution.",
    choices: [
      { text: "formal charges as small as possible", isCorrect: true },
      { text: "the largest possible formal charges" },
      { text: "positive charge on the most electronegative atom" },
      { text: "all atoms bearing a formal charge" },
    ],
  },
  {
    stem: "In the cyanide ion CN⁻, the carbon and nitrogen are joined by a:",
    topic: "Lewis Structures & the Octet",
    explanation:
      "Cyanide has the structure [:C≡N:]⁻ with a carbon-nitrogen triple bond and a lone pair on each atom; the triple bond accounts for its short, strong bond and its isoelectronic relationship with N₂ and CO.",
    choices: [
      { text: "triple bond", isCorrect: true },
      { text: "single bond" },
      { text: "double bond" },
      { text: "dative bond only" },
    ],
  },
  {
    stem: "Which species are isoelectronic, each having 14 electrons and a triple bond? Select all that apply.",
    type: "MULTI",
    topic: "Lewis Structures & the Octet",
    explanation:
      "N₂, CO, CN⁻ and NO⁺ all have 14 electrons and a triple bond, making them a classic isoelectronic set with very similar bonding; O₂ and NO have different electron counts and lower bond orders.",
    choices: [
      { text: "N₂", isCorrect: true },
      { text: "CO", isCorrect: true },
      { text: "CN⁻", isCorrect: true },
      { text: "NO⁺", isCorrect: true },
      { text: "O₂" },
      { text: "NO" },
    ],
  },
  {
    stem: "True or False: In a valid Lewis structure the sum of all the formal charges must equal the overall charge on the species.",
    type: "TRUE_FALSE",
    topic: "Lewis Structures & the Octet",
    explanation:
      "True. Formal charges are a bookkeeping of electrons, so for a neutral molecule they sum to zero and for an ion they sum to its charge; a structure whose formal charges do not add up to the real charge is drawn incorrectly.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The formal charge on an atom in a Lewis structure is calculated as:",
    topic: "Resonance & Formal Charge",
    explanation:
      "Formal charge = (valence electrons) − (non-bonding electrons) − ½(bonding electrons); it compares the electrons an atom 'owns' in the structure with its free-atom valence count to flag charge separation.",
    choices: [
      { text: "valence − lone-pair − ½ bonding electrons", isCorrect: true },
      { text: "valence + lone-pair + bonding electrons" },
      { text: "bonding electrons − valence electrons" },
      { text: "lone-pair − ½ bonding electrons" },
    ],
  },
  {
    stem: "Resonance structures for a species such as the carbonate ion CO₃²⁻ differ only in the:",
    topic: "Resonance & Formal Charge",
    explanation:
      "Resonance forms keep every atom in place and differ only in where the electrons (the π bond and lone pairs) are drawn; the true ion is a single delocalised hybrid, not a rapid flicker between the separate structures.",
    choices: [
      { text: "arrangement of electrons, not atoms", isCorrect: true },
      { text: "positions of the atomic nuclei" },
      { text: "total number of valence electrons" },
      { text: "identity of the central atom itself" },
    ],
  },
  {
    stem: "Experimentally, all three carbon-oxygen bonds in CO₃²⁻ are found to be:",
    topic: "Resonance & Formal Charge",
    explanation:
      "The three resonance structures make each C–O bond equivalent, with a bond order of 4/3; measurement confirms three identical bonds of length between a single and a double bond, the hallmark of a delocalised π system.",
    choices: [
      { text: "identical, between single and double", isCorrect: true },
      { text: "one double bond and two single bonds" },
      { text: "three complete double bonds each" },
      { text: "three equal single bonds only" },
    ],
  },
  {
    stem: "The bond order of each N–O bond in the nitrate ion NO₃⁻, which has three equivalent resonance forms, is:",
    topic: "Resonance & Formal Charge",
    explanation:
      "One π bond is shared over three N–O linkages, so each has bond order 1 + 1/3 = 4/3; the equal bond order across all three bonds explains their equal, intermediate lengths in the planar ion.",
    choices: [
      { text: "4/3", isCorrect: true },
      { text: "1" },
      { text: "2" },
      { text: "3/2" },
    ],
  },
  {
    stem: "In ozone, O₃, the two terminal oxygen atoms are equivalent because:",
    topic: "Resonance & Formal Charge",
    explanation:
      "Ozone is a resonance hybrid of two structures that interconvert the single and double bonds, so both O–O bonds are identical with bond order 1.5; the delocalised π electrons spread evenly over the bent molecule.",
    choices: [
      { text: "of resonance delocalising the π electrons", isCorrect: true },
      { text: "the molecule is perfectly linear" },
      { text: "each oxygen forms a full double bond" },
      { text: "the central oxygen has no lone pairs" },
    ],
  },
  {
    stem: "A resonance structure contributes more to the real hybrid when it:",
    topic: "Resonance & Formal Charge",
    explanation:
      "The most important contributors have complete octets, minimal formal charge, and any negative formal charge on the more electronegative atom; such low-energy structures resemble the true distribution most closely and dominate the hybrid.",
    choices: [
      { text: "has small formal charges and full octets", isCorrect: true },
      { text: "has large separated formal charges" },
      { text: "breaks the octet on several atoms" },
      { text: "puts negative charge on the least electronegative atom" },
    ],
  },
  {
    stem: "Which statements about resonance are correct? Select all that apply.",
    type: "MULTI",
    topic: "Resonance & Formal Charge",
    explanation:
      "Resonance forms differ only in electron placement, the molecule is a single averaged hybrid more stable than any one form, and equivalent forms give equal bond lengths; the molecule does not oscillate between the structures, nor is it a mixture of separate molecules.",
    choices: [
      { text: "only electron positions differ between forms", isCorrect: true },
      { text: "the true species is one delocalised hybrid", isCorrect: true },
      { text: "delocalisation lowers the energy", isCorrect: true },
      { text: "equivalent forms give equal bond lengths", isCorrect: true },
      { text: "the molecule flips rapidly between forms" },
      { text: "the sample is a mixture of the separate structures" },
    ],
  },
  {
    stem: "True or False: A resonance hybrid is lower in energy (more stable) than any of its individual contributing structures.",
    type: "TRUE_FALSE",
    topic: "Resonance & Formal Charge",
    explanation:
      "True. Delocalising electrons over several atoms spreads charge and lowers energy, so the real hybrid lies below every contributing form; this resonance stabilisation underlies the special stability of species such as carbonate and benzene.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Boron in BF₃ is described as electron-deficient because the boron atom has only:",
    topic: "Exceptions to the Octet Rule",
    explanation:
      "With three B–F bonds and no lone pair, boron is surrounded by just six electrons, short of an octet; this electron deficiency makes BF₃ a strong Lewis acid, readily accepting a lone pair to complete its shell.",
    choices: [
      { text: "six valence electrons", isCorrect: true },
      { text: "eight valence electrons" },
      { text: "ten valence electrons" },
      { text: "four valence electrons" },
    ],
  },
  {
    stem: "Sulfur in SF₆ accommodates six bonds by forming an:",
    topic: "Exceptions to the Octet Rule",
    explanation:
      "SF₆ places twelve electrons around sulfur in an expanded octet, possible for period-3 elements; the six bonding pairs adopt an octahedral geometry, and the availability of low-lying orbitals lets sulfur exceed eight electrons.",
    choices: [
      { text: "expanded octet of twelve electrons", isCorrect: true },
      { text: "incomplete octet of six electrons" },
      { text: "normal octet of eight electrons" },
      { text: "odd-electron configuration" },
    ],
  },
  {
    stem: "Which molecule contains an odd number of electrons, making it a paramagnetic radical?",
    topic: "Exceptions to the Octet Rule",
    explanation:
      "Nitrogen dioxide, NO₂, has an odd total electron count and an unpaired electron on nitrogen, so it is a paramagnetic free radical; this also drives its dimerisation to N₂O₄, which pairs the electrons.",
    choices: [
      { text: "NO₂", isCorrect: true },
      { text: "CO₂" },
      { text: "SO₂" },
      { text: "H₂O" },
    ],
  },
  {
    stem: "The ability of period-3 and heavier p-block elements to expand their octets is usually attributed to:",
    topic: "Exceptions to the Octet Rule",
    explanation:
      "Elements from period 3 onward have accessible low-energy d orbitals (and larger size) that can hold extra bonding electrons, unlike period-2 elements; this is why phosphorus and sulfur form PCl₅ and SF₆ but nitrogen and oxygen do not.",
    choices: [
      { text: "access to low-lying d orbitals", isCorrect: true },
      { text: "their high electronegativity" },
      { text: "having a small atomic radius" },
      { text: "having only s and p orbitals" },
    ],
  },
  {
    stem: "Why can nitrogen never form a pentahalide such as 'NCl₅' whereas phosphorus forms PCl₅?",
    topic: "Exceptions to the Octet Rule",
    explanation:
      "Nitrogen is confined to period 2 with only 2s and 2p orbitals, so it cannot exceed an octet; phosphorus, in period 3, can use additional orbitals and its larger size to bond five chlorines, giving trigonal-bipyramidal PCl₅.",
    choices: [
      { text: "nitrogen has no orbitals beyond 2s and 2p", isCorrect: true },
      { text: "nitrogen is far too large an atom" },
      { text: "chlorine cannot bond to nitrogen" },
      { text: "nitrogen has too few valence electrons" },
    ],
  },
  {
    stem: "Which of the following are genuine exceptions to the octet rule? Select all that apply.",
    type: "MULTI",
    topic: "Exceptions to the Octet Rule",
    explanation:
      "BeCl₂ and BF₃ are electron-deficient, SF₆ and PCl₅ have expanded octets, and NO is an odd-electron radical; CH₄ and H₂O are ordinary octet (or duet) molecules that obey the rule.",
    choices: [
      { text: "BF₃ (electron-deficient)", isCorrect: true },
      { text: "SF₆ (expanded octet)", isCorrect: true },
      { text: "PCl₅ (expanded octet)", isCorrect: true },
      { text: "NO (odd-electron radical)", isCorrect: true },
      { text: "CH₄ (an ordinary octet)" },
      { text: "H₂O (an ordinary octet)" },
    ],
  },
  {
    stem: "True or False: BF₃ acts as a Lewis acid because its electron-deficient boron can accept a lone pair to complete its octet.",
    type: "TRUE_FALSE",
    topic: "Exceptions to the Octet Rule",
    explanation:
      "True. Having only six electrons, boron readily accepts a donated lone pair, for example from NH₃ to give F₃B←NH₃; this lone-pair acceptance is the defining behaviour of a Lewis acid.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "VSEPR theory predicts molecular shape from the principle that electron domains around a central atom:",
    topic: "VSEPR Geometry",
    explanation:
      "Valence-shell electron-pair repulsion holds that bonding and lone-pair domains arrange themselves as far apart as possible to minimise repulsion; this simple idea reproduces the observed geometries of a huge range of molecules and ions.",
    choices: [
      { text: "arrange to minimise repulsion", isCorrect: true },
      { text: "cluster together on one side" },
      { text: "align in a single plane always" },
      { text: "pack as closely as possible" },
    ],
  },
  {
    stem: "A molecule of type AX₄ with four bonding pairs and no lone pairs, such as CH₄, is:",
    topic: "VSEPR Geometry",
    explanation:
      "Four electron domains point to the corners of a tetrahedron, giving a tetrahedral shape with 109.5° angles; methane, CCl₄ and NH₄⁺ all share this geometry as classic AX₄ examples.",
    choices: [
      { text: "tetrahedral, 109.5°", isCorrect: true },
      { text: "square planar, 90°" },
      { text: "trigonal pyramidal, 107°" },
      { text: "see-saw shaped" },
    ],
  },
  {
    stem: "Phosphorus pentachloride, PCl₅, with five bonding pairs, adopts which geometry?",
    topic: "VSEPR Geometry",
    explanation:
      "Five electron domains give a trigonal-bipyramidal arrangement, with three equatorial bonds at 120° and two axial bonds at 90°; PCl₅ is the textbook example of this five-coordinate main-group geometry.",
    choices: [
      { text: "trigonal bipyramidal", isCorrect: true },
      { text: "square pyramidal" },
      { text: "pentagonal planar" },
      { text: "octahedral" },
    ],
  },
  {
    stem: "Sulfur hexafluoride, SF₆, with six bonding pairs, has which shape and bond angle?",
    topic: "VSEPR Geometry",
    explanation:
      "Six equivalent domains point to the corners of an octahedron with 90° angles, giving SF₆ its regular octahedral shape; the symmetric arrangement also makes the molecule non-polar despite the polar S–F bonds.",
    choices: [
      { text: "octahedral, 90°", isCorrect: true },
      { text: "trigonal bipyramidal, 120°" },
      { text: "hexagonal planar, 60°" },
      { text: "tetrahedral, 109.5°" },
    ],
  },
  {
    stem: "The triiodide ion I₃⁻, with three lone pairs and two bonds on the central iodine, is:",
    topic: "VSEPR Geometry",
    explanation:
      "Five domains (three lone pairs equatorial, two bonds axial) in a trigonal bipyramid leave the two I–I bonds opposite each other, so I₃⁻ is linear; placing the lone pairs equatorially minimises their strong repulsions.",
    choices: [
      { text: "linear", isCorrect: true },
      { text: "bent" },
      { text: "trigonal planar" },
      { text: "T-shaped" },
    ],
  },
  {
    stem: "Xenon tetrafluoride, XeF₄, has four bonds and two lone pairs on xenon, giving the shape:",
    topic: "VSEPR Geometry",
    explanation:
      "Six domains form an octahedral arrangement; the two lone pairs take opposite axial positions to minimise repulsion, leaving the four fluorines in a plane, so XeF₄ is square planar, a striking noble-gas example of VSEPR.",
    choices: [
      { text: "square planar", isCorrect: true },
      { text: "tetrahedral" },
      { text: "see-saw" },
      { text: "trigonal pyramidal" },
    ],
  },
  {
    stem: "Chlorine trifluoride, ClF₃, with three bonds and two lone pairs, adopts which shape?",
    topic: "VSEPR Geometry",
    explanation:
      "Five domains give a trigonal bipyramid; the two lone pairs occupy equatorial sites to reduce repulsion, bending the three Cl–F bonds into a T-shape with angles slightly under 90°.",
    choices: [
      { text: "T-shaped", isCorrect: true },
      { text: "trigonal planar" },
      { text: "trigonal pyramidal" },
      { text: "linear" },
    ],
  },
  {
    stem: "Which molecules or ions are correctly matched to their VSEPR shape? Select all that apply.",
    type: "MULTI",
    topic: "VSEPR Geometry",
    explanation:
      "CO₂ is linear, BF₃ trigonal planar, CH₄ tetrahedral, and SF₆ octahedral, all with no lone pairs on the central atom; H₂O is bent, not linear, and NH₃ is trigonal pyramidal, not trigonal planar.",
    choices: [
      { text: "CO₂ is linear", isCorrect: true },
      { text: "BF₃ is trigonal planar", isCorrect: true },
      { text: "CH₄ is tetrahedral", isCorrect: true },
      { text: "SF₆ is octahedral", isCorrect: true },
      { text: "H₂O is linear" },
      { text: "NH₃ is trigonal planar" },
    ],
  },
  {
    stem: "The bond angle in water, H₂O, is about 104.5° rather than the ideal 109.5° because:",
    topic: "VSEPR — Lone Pairs & Bond Angles",
    explanation:
      "Oxygen has two lone pairs whose repulsion exceeds that of bonding pairs, squeezing the H–O–H angle below the tetrahedral value; the shape is bent, based on a tetrahedral arrangement of four electron domains.",
    choices: [
      { text: "two lone pairs compress the bonding angle", isCorrect: true },
      { text: "the molecule is linear at heart" },
      { text: "oxygen forms a double bond to hydrogen" },
      { text: "hydrogen atoms repel each other strongly" },
    ],
  },
  {
    stem: "Ammonia, NH₃, has a bond angle of roughly 107°, between water's and the tetrahedral value, because it has:",
    topic: "VSEPR — Lone Pairs & Bond Angles",
    explanation:
      "One lone pair on nitrogen pushes the three N–H bonds together slightly, giving 107°; with fewer lone pairs than water, the compression is smaller, and the molecule is trigonal pyramidal rather than bent.",
    choices: [
      { text: "one lone pair on the central atom", isCorrect: true },
      { text: "two lone pairs on the central atom" },
      { text: "no lone pairs at all" },
      { text: "three lone pairs on nitrogen" },
    ],
  },
  {
    stem: "The order of repulsion strength between electron domains, from strongest to weakest, is:",
    topic: "VSEPR — Lone Pairs & Bond Angles",
    explanation:
      "Lone pairs occupy more space near the central atom, so repulsions rank lone pair–lone pair > lone pair–bond pair > bond pair–bond pair; this ordering explains why lone pairs distort ideal angles the most.",
    choices: [
      { text: "lp–lp > lp–bp > bp–bp", isCorrect: true },
      { text: "bp–bp > lp–bp > lp–lp" },
      { text: "lp–bp > lp–lp > bp–bp" },
      { text: "all three repulsions are equal" },
    ],
  },
  {
    stem: "Sulfur dioxide, SO₂, with one lone pair on sulfur, is:",
    topic: "VSEPR — Lone Pairs & Bond Angles",
    explanation:
      "Three electron domains (two bonds and a lone pair) give a bent molecule with an angle near 119°, based on a trigonal-planar arrangement; the lone pair makes SO₂ bent and polar rather than linear.",
    choices: [
      { text: "bent (angular)", isCorrect: true },
      { text: "linear" },
      { text: "trigonal planar" },
      { text: "tetrahedral" },
    ],
  },
  {
    stem: "The H–X–H angle decreases in the order NH₃ (107°) > PH₃ (94°) because, down the group:",
    topic: "VSEPR — Lone Pairs & Bond Angles",
    explanation:
      "As the central atom grows larger and less electronegative, the bonding pairs lie farther out and interact less, so the angle collapses toward 90°; the heavier hydrides use orbitals closer to pure p character.",
    choices: [
      { text: "the atom enlarges, using more p character", isCorrect: true },
      { text: "the central lone pair disappears entirely" },
      { text: "the electronegativity increases sharply" },
      { text: "the bonds become much shorter and stronger" },
    ],
  },
  {
    stem: "In a trigonal-bipyramidal molecule, a lone pair preferentially occupies an equatorial position because:",
    topic: "VSEPR — Lone Pairs & Bond Angles",
    explanation:
      "An equatorial lone pair suffers only two close (90°) neighbours, versus three for an axial site, minimising repulsion; this is why SF₄ is see-saw and ClF₃ is T-shaped, with lone pairs equatorial.",
    choices: [
      { text: "it has fewer close 90° repulsions there", isCorrect: true },
      { text: "axial positions are physically larger" },
      { text: "equatorial bonds are always shorter" },
      { text: "it must avoid the equatorial plane" },
    ],
  },
  {
    stem: "The molecule SF₄ (four bonds, one lone pair) has which shape?",
    topic: "VSEPR — Lone Pairs & Bond Angles",
    explanation:
      "Five domains form a trigonal bipyramid; the lone pair takes an equatorial site, distorting the remaining four bonds into a see-saw (disphenoidal) shape with characteristic axial and equatorial angles slightly less than ideal.",
    choices: [
      { text: "see-saw", isCorrect: true },
      { text: "tetrahedral" },
      { text: "square planar" },
      { text: "trigonal pyramidal" },
    ],
  },
  {
    stem: "Double bonds are treated in VSEPR as:",
    topic: "VSEPR — Lone Pairs & Bond Angles",
    explanation:
      "A multiple bond counts as a single electron domain for predicting geometry, though it repels somewhat more strongly than a single bond; this is why CO₂, with two double bonds, is still linear like a two-domain molecule.",
    choices: [
      { text: "one domain, like a single bond", isCorrect: true },
      { text: "two separate electron domains each" },
      { text: "three electron domains" },
      { text: "no electron domain at all" },
    ],
  },
  {
    stem: "True or False: A lone pair of electrons repels neighbouring bonding pairs more strongly than a bonding pair does, distorting bond angles.",
    type: "TRUE_FALSE",
    topic: "VSEPR — Lone Pairs & Bond Angles",
    explanation:
      "True. A lone pair is held by only one nucleus, so it spreads out closer to the central atom and repels more; this greater repulsion pushes bonding pairs together, lowering angles below their ideal values in molecules like water and ammonia.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "According to hybridization theory, the four equivalent bonds of methane, CH₄, arise from:",
    topic: "Hybridization",
    explanation:
      "One 2s and three 2p orbitals mix to give four equivalent sp³ hybrids pointing to the corners of a tetrahedron; each overlaps a hydrogen 1s orbital, explaining the four identical C–H bonds and 109.5° angles.",
    choices: [
      { text: "four sp³ hybrid orbitals", isCorrect: true },
      { text: "three sp² hybrids and one p" },
      { text: "two sp hybrids and two p" },
      { text: "four unmixed p orbitals" },
    ],
  },
  {
    stem: "The hybridization of carbon in ethene, H₂C=CH₂, is:",
    topic: "Hybridization",
    explanation:
      "Each carbon uses sp² hybrids for three σ bonds in a plane, leaving one unhybridised p orbital to form the π bond; this sp² framework gives ethene its planar geometry and 120° angles.",
    choices: [
      { text: "sp²", isCorrect: true },
      { text: "sp³" },
      { text: "sp" },
      { text: "sp³d" },
    ],
  },
  {
    stem: "In ethyne (acetylene), H–C≡C–H, each carbon is:",
    topic: "Hybridization",
    explanation:
      "Acetylene's carbons are sp-hybridised, forming two σ bonds at 180° and leaving two p orbitals each to build the two π bonds of the triple bond; the sp hybridisation makes the molecule linear.",
    choices: [
      { text: "sp hybridised", isCorrect: true },
      { text: "sp² hybridised" },
      { text: "sp³ hybridised" },
      { text: "sp³d hybridised" },
    ],
  },
  {
    stem: "The hybridization that corresponds to an octahedral arrangement of six bonds, as in SF₆, is:",
    topic: "Hybridization",
    explanation:
      "Six bonds require six hybrid orbitals, formed by mixing s, three p and two d orbitals into sp³d²; these point to the vertices of an octahedron, matching the geometry predicted by VSEPR.",
    choices: [
      { text: "sp³d²", isCorrect: true },
      { text: "sp³d" },
      { text: "sp³" },
      { text: "sp²" },
    ],
  },
  {
    stem: "Which hybridization corresponds to a trigonal-bipyramidal geometry (five domains), as in PCl₅?",
    topic: "Hybridization",
    explanation:
      "Five electron domains use sp³d hybrids, mixing one s, three p and one d orbital; they give the three equatorial and two axial directions of the trigonal bipyramid seen in PCl₅.",
    choices: [
      { text: "sp³d", isCorrect: true },
      { text: "sp³d²" },
      { text: "sp³" },
      { text: "sp" },
    ],
  },
  {
    stem: "As the s character of a hybrid orbital increases (sp³ → sp² → sp), the bond angle:",
    topic: "Hybridization",
    explanation:
      "More s character concentrates electron density closer to the nucleus and widens the angle, so angles rise 109.5° → 120° → 180°; higher s character also shortens and strengthens the resulting bonds.",
    choices: [
      { text: "increases from 109.5° to 180°", isCorrect: true },
      { text: "decreases steadily toward 90°" },
      { text: "stays fixed near 109.5°" },
      { text: "first falls then rises again" },
    ],
  },
  {
    stem: "The number of hybrid orbitals formed always equals:",
    topic: "Hybridization",
    explanation:
      "Hybridisation conserves orbitals: mixing n atomic orbitals yields exactly n hybrids. So an sp³ set comes from four atomic orbitals and provides four hybrids, one for each electron domain around the atom.",
    choices: [
      { text: "the number of orbitals that mixed", isCorrect: true },
      { text: "the number of sigma bonds only" },
      { text: "twice the number of lone pairs" },
      { text: "the number of unpaired electrons" },
    ],
  },
  {
    stem: "Which molecules have an sp³-hybridised central atom? Select all that apply.",
    type: "MULTI",
    topic: "Hybridization",
    explanation:
      "CH₄, NH₃ and H₂O all have four electron domains around the central atom and so are sp³ hybridised, whether the domains are bonds or lone pairs; BF₃ is sp² and CO₂ is sp.",
    choices: [
      { text: "CH₄", isCorrect: true },
      { text: "NH₃", isCorrect: true },
      { text: "H₂O", isCorrect: true },
      { text: "NH₄⁺", isCorrect: true },
      { text: "BF₃" },
      { text: "CO₂" },
    ],
  },
  {
    stem: "A covalent bond is polar when the two bonded atoms differ in:",
    topic: "Bond Polarity & Dipole Moments",
    explanation:
      "Unequal electronegativity draws the shared electrons toward the more electronegative atom, creating partial charges δ⁺ and δ⁻; the larger the electronegativity difference, the more polar the bond.",
    choices: [
      { text: "electronegativity", isCorrect: true },
      { text: "atomic mass" },
      { text: "number of neutrons" },
      { text: "nuclear spin" },
    ],
  },
  {
    stem: "Carbon dioxide, O=C=O, has polar bonds yet no molecular dipole because:",
    topic: "Bond Polarity & Dipole Moments",
    explanation:
      "The two C=O bond dipoles are equal and point in opposite directions along the linear molecule, so they cancel; the vector sum is zero, making CO₂ non-polar despite each bond being polar.",
    choices: [
      { text: "its linear shape makes the bond dipoles cancel", isCorrect: true },
      { text: "the C=O bonds are actually non-polar" },
      { text: "carbon and oxygen are equally electronegative" },
      { text: "the molecule is bent and symmetric" },
    ],
  },
  {
    stem: "Water is a polar molecule, but carbon dioxide is not, chiefly because of a difference in their:",
    topic: "Bond Polarity & Dipole Moments",
    explanation:
      "Water's bent shape means its two O–H bond dipoles do not cancel but add to a net dipole, whereas CO₂'s linear shape cancels its dipoles; molecular geometry, not bond polarity alone, decides overall polarity.",
    choices: [
      { text: "molecular geometry", isCorrect: true },
      { text: "bond electronegativity difference" },
      { text: "number of atoms" },
      { text: "molar mass" },
    ],
  },
  {
    stem: "Which molecule is non-polar overall despite containing polar bonds?",
    topic: "Bond Polarity & Dipole Moments",
    explanation:
      "BF₃ is trigonal planar and symmetric, so its three B–F dipoles cancel to give no net dipole; NH₃, H₂O and CHCl₃ are all shaped so that their bond dipoles do not fully cancel.",
    choices: [
      { text: "BF₃", isCorrect: true },
      { text: "NH₃" },
      { text: "H₂O" },
      { text: "CHCl₃" },
    ],
  },
  {
    stem: "The dipole moment μ of a molecule is a vector quantity equal to:",
    topic: "Bond Polarity & Dipole Moments",
    explanation:
      "The molecular dipole is the vector sum of the individual bond dipoles, each running from δ⁺ to δ⁻; because it is a vector, symmetric molecules can have polar bonds yet a zero net moment.",
    choices: [
      { text: "the vector sum of the bond dipoles", isCorrect: true },
      { text: "the simple arithmetic sum of bond dipoles" },
      { text: "the largest single bond dipole" },
      { text: "the product of the bond dipoles" },
    ],
  },
  {
    stem: "Comparing cis- and trans-1,2-dichloroethene, the trans isomer has:",
    topic: "Bond Polarity & Dipole Moments",
    explanation:
      "In the trans isomer the two C–Cl dipoles point oppositely and cancel, giving no net dipole, while the cis isomer's dipoles add to a real moment; geometry thus makes otherwise similar molecules differ in polarity.",
    choices: [
      { text: "no net dipole moment", isCorrect: true },
      { text: "a larger dipole than cis" },
      { text: "the same dipole as cis" },
      { text: "an ionic character" },
    ],
  },
  {
    stem: "A greater electronegativity difference between two bonded atoms produces:",
    topic: "Bond Polarity & Dipole Moments",
    explanation:
      "As Δχ grows, the bond becomes more polar, with more charge separation; beyond roughly 1.7 on the Pauling scale the bond is usually regarded as predominantly ionic rather than polar covalent.",
    choices: [
      { text: "a more polar bond and more separation", isCorrect: true },
      { text: "a purely non-polar covalent bond" },
      { text: "a weaker and longer bond always" },
      { text: "no change at all in bond polarity" },
    ],
  },
  {
    stem: "Which molecules are non-polar overall? Select all that apply.",
    type: "MULTI",
    topic: "Bond Polarity & Dipole Moments",
    explanation:
      "CO₂, BF₃, CCl₄ and SF₆ are symmetric, so their bond dipoles cancel to zero net moment; H₂O and NH₃ are bent and pyramidal respectively, giving them permanent dipoles.",
    choices: [
      { text: "CO₂", isCorrect: true },
      { text: "BF₃", isCorrect: true },
      { text: "CCl₄", isCorrect: true },
      { text: "SF₆", isCorrect: true },
      { text: "H₂O" },
      { text: "NH₃" },
    ],
  },
  {
    stem: "For bonds between the same two atoms, as bond order increases from single to triple, the bond length:",
    topic: "Bond Order, Length & Energy",
    explanation:
      "Higher bond order pulls the atoms closer, so length falls in the order single > double > triple; thus C≡C is shorter than C=C, which is shorter than C–C, a trend mirrored in nitrogen and oxygen species.",
    choices: [
      { text: "decreases (bond gets shorter)", isCorrect: true },
      { text: "increases (the bond gets longer)" },
      { text: "stays the same" },
      { text: "first increases then decreases" },
    ],
  },
  {
    stem: "A higher bond order between two atoms generally corresponds to a bond that is:",
    topic: "Bond Order, Length & Energy",
    explanation:
      "More shared electron pairs mean stronger attraction, so higher bond order gives greater bond dissociation energy; the triple bond of N₂ (bond order 3) is exceptionally strong, which is why N₂ is so unreactive.",
    choices: [
      { text: "stronger and harder to break", isCorrect: true },
      { text: "weaker and easier to break" },
      { text: "essentially unchanged in strength" },
      { text: "always ionic in character" },
    ],
  },
  {
    stem: "The very high stability and inertness of the nitrogen molecule N≡N is due mainly to its:",
    topic: "Bond Order, Length & Energy",
    explanation:
      "N₂ has a bond order of 3 and one of the largest bond dissociation energies known (about 945 kJ mol⁻¹); breaking this strong triple bond demands so much energy that N₂ is remarkably unreactive.",
    choices: [
      { text: "triple bond (bond order 3)", isCorrect: true },
      { text: "a weak single bond only" },
      { text: "a polar double bond" },
      { text: "largely ionic character" },
    ],
  },
  {
    stem: "Which of these carbon-carbon bonds is the shortest?",
    topic: "Bond Order, Length & Energy",
    explanation:
      "Bond length shrinks as bond order rises, so the triple bond of ethyne (C≡C) is shortest, followed by the double bond of ethene and the single bond of ethane; higher order means closer, tighter atoms.",
    choices: [
      { text: "the C≡C bond in ethyne", isCorrect: true },
      { text: "the C–C bond in ethane" },
      { text: "the C=C bond in ethene" },
      { text: "all are equal in length" },
    ],
  },
  {
    stem: "Bond dissociation energy is defined as the energy required to:",
    topic: "Bond Order, Length & Energy",
    explanation:
      "It is the enthalpy needed to break one mole of a specified bond homolytically in the gas phase, giving neutral fragments; larger values indicate stronger bonds, and the quantity underlies estimates of reaction enthalpies.",
    choices: [
      { text: "break a mole of the bond in gas phase", isCorrect: true },
      { text: "form one mole of the bond from atoms" },
      { text: "melt one mole of the substance" },
      { text: "ionise one mole of the molecule" },
    ],
  },
  {
    stem: "Across the series O₂⁺, O₂, O₂⁻, O₂²⁻, the O–O bond becomes longer because:",
    topic: "Bond Order, Length & Energy",
    explanation:
      "Adding electrons fills antibonding π* orbitals, lowering the bond order from 2.5 to 2 to 1.5 to 1; as bond order falls the bond lengthens and weakens, a neat illustration of the bond-order/length link.",
    choices: [
      { text: "bond order falls as antibonding fills", isCorrect: true },
      { text: "the bond order instead rises steadily" },
      { text: "the atoms become more electronegative" },
      { text: "the charge makes the atoms smaller" },
    ],
  },
  {
    stem: "Estimating a reaction enthalpy from bond energies uses the relationship ΔH ≈:",
    topic: "Bond Order, Length & Energy",
    explanation:
      "ΔH ≈ (sum of bond energies broken) − (sum of bond energies formed); breaking bonds costs energy and forming them releases it, so this difference approximates the reaction enthalpy from tabulated bond energies.",
    choices: [
      { text: "bonds broken − bonds formed", isCorrect: true },
      { text: "bonds formed − bonds broken" },
      { text: "bonds broken + bonds formed" },
      { text: "bonds formed × bonds broken" },
    ],
  },
  {
    stem: "Which statements about bond order, length and energy are correct? Select all that apply.",
    type: "MULTI",
    topic: "Bond Order, Length & Energy",
    explanation:
      "Higher bond order gives shorter and stronger bonds, N₂ has bond order 3, and filling antibonding orbitals lowers bond order; a triple bond is not longer than a single bond, and higher bond order does not weaken a bond.",
    choices: [
      { text: "higher bond order means a shorter bond", isCorrect: true },
      { text: "higher bond order means a stronger bond", isCorrect: true },
      { text: "N₂ has a bond order of three", isCorrect: true },
      { text: "filling antibonding orbitals lowers bond order", isCorrect: true },
      { text: "a triple bond is longer than a single bond" },
      { text: "higher bond order gives a weaker bond" },
    ],
  },
  {
    stem: "A radius ratio r₊/r₋ between 0.414 and 0.732 predicts a coordination number and geometry of:",
    topic: "Ionic Bonding & Lattice Formation",
    explanation:
      "Radius-ratio rules relate the cation-to-anion size ratio to the hole a cation can occupy: 0.414–0.732 fits an octahedral hole (6-coordinate), as in NaCl, while larger ratios favour cubic 8-coordination and smaller favour tetrahedral 4-coordination.",
    choices: [
      { text: "6, octahedral", isCorrect: true },
      { text: "8, cubic" },
      { text: "4, tetrahedral" },
      { text: "2, linear" },
    ],
  },
  {
    stem: "Gaseous beryllium chloride, Cl–Be–Cl, has two bonding pairs and no lone pairs on beryllium, so it is:",
    topic: "VSEPR Geometry",
    explanation:
      "Two electron domains point in opposite directions to minimise repulsion, giving a linear molecule with a 180° bond angle; monomeric BeCl₂ is a classic electron-deficient AX₂ species that is linear in the gas phase.",
    choices: [
      { text: "linear, 180°", isCorrect: true },
      { text: "bent, 104.5°" },
      { text: "trigonal planar, 120°" },
      { text: "tetrahedral, 109.5°" },
    ],
  },
  {
    stem: "Among the hydrogen halides HF, HCl, HBr and HI, the largest dipole moment belongs to:",
    topic: "Bond Polarity & Dipole Moments",
    explanation:
      "The dipole tracks the electronegativity difference, which is greatest for H–F because fluorine is the most electronegative element; hence HF has the largest dipole moment, decreasing down the series to HI.",
    choices: [
      { text: "HF", isCorrect: true },
      { text: "HCl" },
      { text: "HBr" },
      { text: "HI" },
    ],
  },
];
