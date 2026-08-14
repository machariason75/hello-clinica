import type { Q } from "../_lib/qbank";

export const INORGANIC_SET_7: Q[] = [
  {
    stem: "A transition element is best defined as one that forms at least one stable ion with:",
    topic: "d-Block: Definition",
    explanation:
      "The IUPAC definition requires a partially filled d subshell in the element or one of its stable ions; on this basis Zn (d¹⁰ as Zn²⁺) and Sc (d⁰ as Sc³⁺) are often treated as non-typical of the series.",
    choices: [
      { text: "A partially filled d subshell", isCorrect: true },
      { text: "A completely filled d subshell" },
      { text: "A partially filled f subshell" },
      { text: "An empty valence shell of any kind" },
    ],
  },
  {
    stem: "Why is zinc often not regarded as a typical transition metal?",
    topic: "d-Block: Definition",
    explanation:
      "Zn forms only Zn²⁺, which is d¹⁰ (a full d subshell); with no partially filled d level in its compounds it lacks variable oxidation states, coloured ions and typical catalytic behaviour.",
    choices: [
      { text: "Its only common ion, Zn²⁺, has a full d¹⁰ configuration", isCorrect: true },
      { text: "It has no d electrons at all in the neutral atom" },
      { text: "It is a p-block element misplaced in the d-block" },
      { text: "It cannot form any compounds with oxygen or halogens" },
    ],
  },
  {
    stem: "The ground-state configuration of a chromium atom (Z = 24) is:",
    topic: "d-Block: Electron Configuration",
    explanation:
      "Chromium is [Ar]3d⁵4s¹, not 3d⁴4s²: a half-filled 3d subshell plus a singly occupied 4s gives extra exchange stability, one of the two classic 3d anomalies (the other is copper).",
    choices: [
      { text: "[Ar]3d⁵4s¹", isCorrect: true },
      { text: "[Ar]3d⁴4s²" },
      { text: "[Ar]3d⁶" },
      { text: "[Ar]3d⁵4s²" },
    ],
  },
  {
    stem: "The ground-state configuration of a copper atom (Z = 29) is:",
    topic: "d-Block: Electron Configuration",
    explanation:
      "Copper is [Ar]3d¹⁰4s¹: a completely filled 3d subshell is more stable than 3d⁹4s², so one 4s electron shifts into 3d, the second classic anomaly of the first transition series.",
    choices: [
      { text: "[Ar]3d¹⁰4s¹", isCorrect: true },
      { text: "[Ar]3d⁹4s²" },
      { text: "[Ar]3d¹⁰4s²" },
      { text: "[Ar]3d¹¹" },
    ],
  },
  {
    stem: "When a first-row transition metal is ionised, electrons are removed first from:",
    topic: "d-Block: Electron Configuration",
    explanation:
      "Although 4s fills before 3d, once 3d is occupied it drops below 4s in energy; so on ionisation the 4s electrons leave first. Thus Fe²⁺ is [Ar]3d⁶, not [Ar]3d⁴4s².",
    choices: [
      { text: "The 4s orbital, before any 3d electrons", isCorrect: true },
      { text: "The 3d orbital, before the 4s electrons" },
      { text: "The 3p orbital of the argon core" },
      { text: "The 4s and 3d orbitals simultaneously and equally" },
    ],
  },
  {
    stem: "Across the first transition series the atomic radius changes relatively little because:",
    topic: "d-Block: Periodic Trends",
    explanation:
      "The added 3d electrons shield the outer 4s electrons fairly well, largely offsetting the rising nuclear charge, so the radius decreases only slowly and then levels off across the series.",
    choices: [
      { text: "Added 3d electrons shield the 4s electrons from the rising charge", isCorrect: true },
      { text: "Nuclear charge stays constant across the series" },
      { text: "Electrons are added to a new shell at each element" },
      { text: "The metals all adopt identical crystal structures" },
    ],
  },
  {
    stem: "Transition metals commonly show variable oxidation states chiefly because:",
    topic: "d-Block: Oxidation States",
    explanation:
      "The 3d and 4s electrons are close in energy, so a variable number can be lost with similar energy cost; this gives the range of oxidation states (e.g. Fe²⁺/Fe³⁺, Mn²⁺ to Mn⁷⁺).",
    choices: [
      { text: "The 3d and 4s electrons are similar in energy", isCorrect: true },
      { text: "Their d subshells are always completely empty" },
      { text: "They readily gain electrons to form stable anions" },
      { text: "They possess unusually low first ionisation energies" },
    ],
  },
  {
    stem: "The maximum oxidation state reached in the first transition series occurs at manganese and equals:",
    topic: "d-Block: Oxidation States",
    explanation:
      "Mn (3d⁵4s²) can in principle use all seven 3d+4s electrons, reaching +7 in MnO₄⁻; beyond Mn the increasing effective nuclear charge binds the d electrons too tightly for such high states.",
    choices: [
      { text: "+7, as in the permanganate ion MnO₄⁻", isCorrect: true },
      { text: "+5, as in the highest vanadium oxide" },
      { text: "+4, matching the number of unpaired d electrons" },
      { text: "+2, the state common to the whole series" },
    ],
  },
  {
    stem: "For the later 3d metals (Fe onward) the highest attainable oxidation state falls because:",
    topic: "d-Block: Oxidation States",
    explanation:
      "As nuclear charge rises across the series the d electrons become more tightly held, so removing many of them to reach high oxidation states becomes energetically unfavourable; +2 and +3 dominate at the right.",
    choices: [
      { text: "Rising effective nuclear charge binds the d electrons more tightly", isCorrect: true },
      { text: "The d subshell empties completely at iron" },
      { text: "The 4s electrons are no longer available for bonding" },
      { text: "The atomic radius increases sharply toward copper" },
    ],
  },
  {
    stem: "Which oxidation state is common to essentially every element of the first transition series?",
    topic: "d-Block: Oxidation States",
    explanation:
      "The +2 state, from loss of the two 4s electrons, appears across the series (Ti²⁺ through Cu²⁺ and Zn²⁺); higher states become progressively less stable toward the right of the series.",
    choices: [
      { text: "+2", isCorrect: true },
      { text: "+7" },
      { text: "+6" },
      { text: "+4" },
    ],
  },
  {
    stem: "Which properties are characteristic of typical transition metals? Select all that apply.",
    type: "MULTI",
    topic: "d-Block: General Properties",
    explanation:
      "Typical transition metals show variable oxidation states, coloured compounds, catalytic activity, paramagnetism from unpaired d electrons, and a strong tendency to form complexes. They are metals, not non-metals.",
    choices: [
      { text: "Variable oxidation states", isCorrect: true },
      { text: "Formation of coloured ions", isCorrect: true },
      { text: "Catalytic activity", isCorrect: true },
      { text: "A strong tendency to form complex ions", isCorrect: true },
      { text: "Consistently low melting points typical of non-metals" },
      { text: "An inability to form any paramagnetic species" },
    ],
  },
  {
    stem: "Which statements about first-row d-block electron configurations are correct? Select all that apply.",
    type: "MULTI",
    topic: "d-Block: Electron Configuration",
    explanation:
      "Cr is 3d⁵4s¹ and Cu is 3d¹⁰4s¹ (half- and fully-filled stability); on ionisation 4s empties before 3d, so Fe²⁺ is 3d⁶. Scandium's only common ion Sc³⁺ is d⁰.",
    choices: [
      { text: "Chromium is [Ar]3d⁵4s¹", isCorrect: true },
      { text: "Copper is [Ar]3d¹⁰4s¹", isCorrect: true },
      { text: "Iron(II) is [Ar]3d⁶, the 4s emptying first", isCorrect: true },
      { text: "Sc³⁺ has an empty d subshell (d⁰)", isCorrect: true },
      { text: "Chromium is [Ar]3d⁴4s² in the ground state" },
      { text: "The 3d electrons are always removed before the 4s" },
    ],
  },
  {
    stem: "Transition metals generally have higher melting points and densities than the s-block metals of the same period.",
    type: "TRUE_FALSE",
    topic: "d-Block: General Properties",
    explanation:
      "Strong metallic bonding involving both 4s and 3d electrons gives the transition metals high melting points, hardness and densities, well above those of the neighbouring s-block metals such as K and Ca.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Scandium in the +3 oxidation state has no d electrons and its compounds are typically colourless.",
    type: "TRUE_FALSE",
    topic: "d-Block: Oxidation States",
    explanation:
      "Sc³⁺ is [Ar] (d⁰); with no d electrons there are no d–d transitions, so scandium(III) compounds are colourless — one reason scandium is regarded as atypical of the series.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "In the reaction Zn + Cu²⁺ → Zn²⁺ + Cu, the species oxidised is:",
    topic: "Redox: Fundamentals",
    explanation:
      "Zinc loses two electrons (Zn → Zn²⁺ + 2e⁻), so zinc is oxidised and acts as the reducing agent; Cu²⁺ gains those electrons and is reduced to copper metal.",
    choices: [
      { text: "Zinc metal, which loses electrons", isCorrect: true },
      { text: "The copper(II) ion, which loses electrons" },
      { text: "The zinc ion produced in solution" },
      { text: "Copper metal, which gains electrons" },
    ],
  },
  {
    stem: "An oxidising agent is a species that:",
    topic: "Redox: Fundamentals",
    explanation:
      "An oxidising agent oxidises another species by accepting its electrons, and is itself reduced in the process; a reducing agent does the reverse, donating electrons and being oxidised.",
    choices: [
      { text: "Accepts electrons and is itself reduced", isCorrect: true },
      { text: "Donates electrons and is itself oxidised" },
      { text: "Neither gains nor loses electrons" },
      { text: "Always contains oxygen in its formula" },
    ],
  },
  {
    stem: "The oxidation number of chromium in the dichromate ion Cr₂O₇²⁻ is:",
    topic: "Redox: Oxidation Numbers",
    explanation:
      "With seven oxygens at −2 (total −14) and an overall charge of −2, the two chromiums share +12, giving each chromium the +6 oxidation state, consistent with dichromate's strong oxidising power.",
    choices: [
      { text: "+6", isCorrect: true },
      { text: "+3" },
      { text: "+7" },
      { text: "+2" },
    ],
  },
  {
    stem: "In acidic solution, balancing a redox half-reaction requires adding H⁺ and which species to balance oxygen and charge?",
    topic: "Redox: Balancing",
    explanation:
      "In acid, oxygen is balanced with H₂O and hydrogen with H⁺, then electrons balance the charge; in basic solution one instead uses OH⁻ and H₂O. Getting the medium right is essential to a correct equation.",
    choices: [
      { text: "Water (H₂O)", isCorrect: true },
      { text: "Hydroxide ions (OH⁻)" },
      { text: "Molecular oxygen (O₂)" },
      { text: "Hydrogen gas (H₂)" },
    ],
  },
  {
    stem: "Disproportionation is a reaction in which a single species is:",
    topic: "Redox: Disproportionation",
    explanation:
      "In disproportionation one element in one oxidation state is simultaneously oxidised and reduced, e.g. Cu⁺ → Cu²⁺ + Cu, or Cl₂ + OH⁻ → Cl⁻ + ClO⁻; it needs an element with an intermediate state.",
    choices: [
      { text: "Simultaneously oxidised and reduced", isCorrect: true },
      { text: "Only oxidised, never reduced" },
      { text: "Only reduced, never oxidised" },
      { text: "Neither oxidised nor reduced, merely dissolved" },
    ],
  },
  {
    stem: "Copper(I) is unstable in aqueous solution and disproportionates to give:",
    topic: "Redox: Disproportionation",
    explanation:
      "2Cu⁺ → Cu²⁺ + Cu: in water the sum of hydration and other energetics makes Cu(I) unstable relative to Cu(II) plus copper metal, so simple Cu⁺ salts disproportionate.",
    choices: [
      { text: "Copper(II) ions and copper metal", isCorrect: true },
      { text: "Copper(III) ions and copper metal" },
      { text: "Copper(II) oxide and hydrogen gas" },
      { text: "Copper metal and molecular oxygen" },
    ],
  },
  {
    stem: "In a galvanic (voltaic) cell, oxidation occurs at the:",
    topic: "Electrochemistry: Cells",
    explanation:
      "By definition oxidation always occurs at the anode and reduction at the cathode; in a galvanic cell the anode is the negative electrode, the source of electrons flowing through the external circuit.",
    choices: [
      { text: "Anode, which is the negative electrode", isCorrect: true },
      { text: "Cathode, which is the negative electrode" },
      { text: "Cathode, which is the positive electrode" },
      { text: "Salt bridge connecting the two half-cells" },
    ],
  },
  {
    stem: "The standard hydrogen electrode is assigned a standard potential of exactly:",
    topic: "Electrochemistry: Standard Potentials",
    explanation:
      "The SHE (Pt, H₂ at 1 bar, H⁺ at 1 mol/L, 298 K) is the reference against which all other electrode potentials are measured, defined as 0.00 V by convention.",
    choices: [
      { text: "0.00 V", isCorrect: true },
      { text: "+1.00 V" },
      { text: "−0.76 V" },
      { text: "+0.34 V" },
    ],
  },
  {
    stem: "Given E°(Cu²⁺/Cu) = +0.34 V and E°(Zn²⁺/Zn) = −0.76 V, the standard cell EMF of the Daniell cell is:",
    topic: "Electrochemistry: Cell EMF",
    explanation:
      "E°cell = E°(cathode) − E°(anode) = (+0.34) − (−0.76) = +1.10 V; the positive value confirms the Zn/Cu²⁺ reaction is spontaneous under standard conditions.",
    choices: [
      { text: "+1.10 V", isCorrect: true },
      { text: "−0.42 V" },
      { text: "+0.42 V" },
      { text: "−1.10 V" },
    ],
  },
  {
    stem: "A positive standard cell potential E°cell corresponds to a reaction that is:",
    topic: "Electrochemistry: Thermodynamics",
    explanation:
      "Because ΔG° = −nFE°cell, a positive E°cell gives a negative ΔG°, so the cell reaction is spontaneous (product-favoured) under standard conditions; a negative E°cell means non-spontaneous.",
    choices: [
      { text: "Spontaneous, with a negative ΔG°", isCorrect: true },
      { text: "Non-spontaneous, with a positive ΔG°" },
      { text: "At equilibrium, with ΔG° equal to zero" },
      { text: "Spontaneous only when driven by an external voltage" },
    ],
  },
  {
    stem: "The relationship linking standard cell potential to the standard Gibbs energy change is:",
    topic: "Electrochemistry: Thermodynamics",
    explanation:
      "ΔG° = −nFE°cell, where n is the moles of electrons transferred and F is the Faraday constant (96 485 C/mol); it converts a measured cell voltage into the reaction's Gibbs energy change.",
    choices: [
      { text: "ΔG° = −nFE°cell", isCorrect: true },
      { text: "ΔG° = +nFE°cell" },
      { text: "ΔG° = −E°cell / nF" },
      { text: "ΔG° = nF / E°cell" },
    ],
  },
  {
    stem: "The Nernst equation describes how an electrode or cell potential varies with:",
    topic: "Electrochemistry: Nernst Equation",
    explanation:
      "The Nernst equation, E = E° − (RT/nF)lnQ, gives the potential away from standard conditions as a function of the reaction quotient Q (concentrations/pressures) and temperature.",
    choices: [
      { text: "The concentrations (activities) of the species and temperature", isCorrect: true },
      { text: "The physical size of the electrodes only" },
      { text: "The colour of the electrolyte solution" },
      { text: "The length of the connecting wires" },
    ],
  },
  {
    stem: "As a galvanic cell discharges toward equilibrium, its cell potential E:",
    topic: "Electrochemistry: Nernst Equation",
    explanation:
      "As reactants convert to products, Q rises toward K and, by the Nernst equation, E falls; at equilibrium Q = K, E = 0, and the cell is 'flat' — no further net current flows.",
    choices: [
      { text: "Falls toward zero, reaching zero at equilibrium", isCorrect: true },
      { text: "Rises steadily until the reactants are exhausted" },
      { text: "Stays constant until it suddenly stops" },
      { text: "Becomes increasingly negative without limit" },
    ],
  },
  {
    stem: "According to Faraday's first law, the mass of substance deposited during electrolysis is proportional to:",
    topic: "Electrochemistry: Electrolysis",
    explanation:
      "Faraday's first law states the amount of product at an electrode is proportional to the electric charge passed (Q = It); combined with the second law it relates mass to charge and molar mass / electrons.",
    choices: [
      { text: "The quantity of electric charge passed", isCorrect: true },
      { text: "The voltage applied across the cell only" },
      { text: "The surface area of the electrodes only" },
      { text: "The time alone, regardless of the current" },
    ],
  },
  {
    stem: "Depositing one mole of a metal that forms M³⁺ ions by electrolysis requires how many moles of electrons?",
    topic: "Electrochemistry: Electrolysis",
    explanation:
      "Reduction M³⁺ + 3e⁻ → M needs three electrons per ion, so three moles of electrons (≈ 3 × 96 485 C) deposit one mole of the metal; the charge per mole scales with the ionic charge.",
    choices: [
      { text: "Three moles of electrons", isCorrect: true },
      { text: "One mole of electrons" },
      { text: "Two moles of electrons" },
      { text: "Six moles of electrons" },
    ],
  },
  {
    stem: "In the electrolysis of molten sodium chloride, the product formed at the cathode is:",
    topic: "Electrochemistry: Electrolysis",
    explanation:
      "At the cathode (reduction) Na⁺ + e⁻ → Na, giving sodium metal; chlorine gas is evolved at the anode. The molten (not aqueous) melt is used so sodium, not hydrogen, is discharged.",
    choices: [
      { text: "Sodium metal", isCorrect: true },
      { text: "Chlorine gas" },
      { text: "Hydrogen gas" },
      { text: "Sodium hydroxide" },
    ],
  },
  {
    stem: "Which statements about electrochemistry are correct? Select all that apply.",
    type: "MULTI",
    topic: "Electrochemistry: Cells",
    explanation:
      "Oxidation is at the anode; ΔG° = −nFE°cell so positive E°cell means spontaneous; the SHE is the 0 V reference; the Nernst equation gives E away from standard conditions. Reduction is not at the anode.",
    choices: [
      { text: "Oxidation occurs at the anode", isCorrect: true },
      { text: "ΔG° = −nFE°cell relates cell potential to Gibbs energy", isCorrect: true },
      { text: "The standard hydrogen electrode defines 0.00 V", isCorrect: true },
      { text: "The Nernst equation accounts for non-standard concentrations", isCorrect: true },
      { text: "Reduction occurs at the anode of any cell" },
      { text: "A negative E°cell indicates a spontaneous reaction" },
    ],
  },
  {
    stem: "Which species are commonly used as strong oxidising agents in inorganic redox titrations? Select all that apply.",
    type: "MULTI",
    topic: "Redox: Oxidising Agents",
    explanation:
      "Permanganate (Mn⁺⁷→Mn²⁺) and dichromate (Cr⁺⁶→Cr³⁺) are classic oxidants, as are cerium(IV) and hydrogen peroxide; iodide and Fe(II) act as reductants, not oxidants, in such titrations.",
    choices: [
      { text: "Potassium permanganate, KMnO₄", isCorrect: true },
      { text: "Potassium dichromate, K₂Cr₂O₇", isCorrect: true },
      { text: "Cerium(IV) salts", isCorrect: true },
      { text: "Hydrogen peroxide acting on a reductant", isCorrect: true },
      { text: "Potassium iodide as the titrant reductant" },
      { text: "Iron(II) sulfate as the oxidant" },
    ],
  },
  {
    stem: "In a redox titration with acidified potassium permanganate, the end point is marked by the first permanent pale-pink colour.",
    type: "TRUE_FALSE",
    topic: "Redox: Titrations",
    explanation:
      "MnO₄⁻ is deep purple and is decolourised as it is reduced to near-colourless Mn²⁺; once the reductant is used up, one extra drop of permanganate gives a persisting pale pink, signalling the end point.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "A more positive standard reduction potential indicates a stronger tendency to be reduced.",
    type: "TRUE_FALSE",
    topic: "Electrochemistry: Standard Potentials",
    explanation:
      "Electrode potentials are tabulated as reduction potentials; the more positive the value, the greater the species' tendency to gain electrons (be reduced), making it the better oxidising agent.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Fluorine has the most positive standard reduction potential of the common elements, which means it is:",
    topic: "Electrochemistry: Standard Potentials",
    explanation:
      "With E°(F₂/F⁻) ≈ +2.87 V, fluorine has the strongest tendency to be reduced, making F₂ the strongest common elemental oxidising agent; the corresponding F⁻ ion is a very poor reductant.",
    choices: [
      { text: "The strongest common elemental oxidising agent", isCorrect: true },
      { text: "The strongest common elemental reducing agent" },
      { text: "Essentially inert in redox chemistry" },
      { text: "Equal in oxidising power to iodine" },
    ],
  },
  {
    stem: "According to the Brønsted–Lowry definition, an acid is a species that:",
    topic: "Acid-Base: Brønsted-Lowry",
    explanation:
      "A Brønsted–Lowry acid is a proton (H⁺) donor and a base is a proton acceptor; this extends the Arrhenius picture to non-aqueous systems and to reactions producing no water.",
    choices: [
      { text: "Donates a proton (H⁺)", isCorrect: true },
      { text: "Accepts a proton (H⁺)" },
      { text: "Donates a pair of electrons" },
      { text: "Produces hydroxide ions in water" },
    ],
  },
  {
    stem: "In the reaction NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, water acts as:",
    topic: "Acid-Base: Brønsted-Lowry",
    explanation:
      "Here water donates a proton to ammonia, so water is the Brønsted acid and NH₃ the base; because water can act as either acid or base depending on partner, it is amphiprotic.",
    choices: [
      { text: "A Brønsted acid, donating a proton to ammonia", isCorrect: true },
      { text: "A Brønsted base, accepting a proton from ammonia" },
      { text: "A Lewis acid, accepting an electron pair" },
      { text: "A spectator that takes no part in the reaction" },
    ],
  },
  {
    stem: "The conjugate base of the hydrogen carbonate ion HCO₃⁻ is:",
    topic: "Acid-Base: Conjugate Pairs",
    explanation:
      "Removing one proton from HCO₃⁻ gives the carbonate ion CO₃²⁻; a conjugate base always has one fewer H⁺ and one more negative charge than its acid.",
    choices: [
      { text: "The carbonate ion, CO₃²⁻", isCorrect: true },
      { text: "Carbonic acid, H₂CO₃" },
      { text: "The hydroxide ion, OH⁻" },
      { text: "Carbon dioxide, CO₂" },
    ],
  },
  {
    stem: "A Lewis acid is best described as:",
    topic: "Acid-Base: Lewis Theory",
    explanation:
      "A Lewis acid accepts an electron pair (has a vacant orbital), while a Lewis base donates one; this is the most general acid–base picture, covering species like BF₃ that have no proton to donate.",
    choices: [
      { text: "An electron-pair acceptor", isCorrect: true },
      { text: "An electron-pair donor" },
      { text: "A proton donor only" },
      { text: "A hydroxide-ion acceptor" },
    ],
  },
  {
    stem: "Boron trifluoride BF₃ is classed as a Lewis acid but not a Brønsted acid because it:",
    topic: "Acid-Base: Lewis Theory",
    explanation:
      "BF₃ has no ionisable hydrogen, so it cannot donate a proton (not Brønsted), yet its electron-deficient boron accepts an electron pair (e.g. from NH₃), making it a Lewis acid.",
    choices: [
      { text: "Accepts an electron pair but has no proton to donate", isCorrect: true },
      { text: "Donates a proton but cannot accept electron pairs" },
      { text: "Produces hydroxide ions when dissolved in water" },
      { text: "Neither accepts nor donates anything" },
    ],
  },
  {
    stem: "In the adduct F₃B←NH₃, the ammonia molecule functions as:",
    topic: "Acid-Base: Lewis Theory",
    explanation:
      "The lone pair on nitrogen is donated into boron's empty orbital, so NH₃ is the Lewis base (electron-pair donor) and BF₃ the Lewis acid; the dative bond defines the acid–base adduct.",
    choices: [
      { text: "A Lewis base donating its nitrogen lone pair", isCorrect: true },
      { text: "A Lewis acid accepting an electron pair" },
      { text: "A Brønsted acid donating a proton" },
      { text: "A reducing agent transferring electrons fully" },
    ],
  },
  {
    stem: "An amphoteric species such as the hydrogen carbonate ion HCO₃⁻ can:",
    topic: "Acid-Base: Amphoterism",
    explanation:
      "Amphoteric (amphiprotic) species react as either acid or base: HCO₃⁻ can donate a proton to give CO₃²⁻ or accept one to give H₂CO₃, depending on the partner in solution.",
    choices: [
      { text: "React as either an acid or a base", isCorrect: true },
      { text: "React only as an acid, never a base" },
      { text: "React only as a base, never an acid" },
      { text: "React with neither acids nor bases" },
    ],
  },
  {
    stem: "For the binary hydrides of a group, acid strength in water increases down the group mainly because:",
    topic: "Acid-Base: Acid Strength",
    explanation:
      "Down a group the H–X bond weakens as X grows larger, so the proton is lost more easily; e.g. HF < HCl < HBr < HI, where bond strength, not electronegativity, controls the trend.",
    choices: [
      { text: "The H–X bond becomes weaker as X grows larger", isCorrect: true },
      { text: "The electronegativity of X rises sharply down the group" },
      { text: "The molecules become smaller and more polar" },
      { text: "Hydrogen bonding increases steadily down the group" },
    ],
  },
  {
    stem: "Across a period, the acid strength of the binary hydrides increases (e.g. CH₄ < NH₃ < H₂O < HF) mainly because of the rising:",
    topic: "Acid-Base: Acid Strength",
    explanation:
      "Across a period the increasing electronegativity of the central atom polarises and stabilises the resulting anion (and the conjugate base), so the proton is released more readily from left to right.",
    choices: [
      { text: "Electronegativity of the central atom", isCorrect: true },
      { text: "Atomic radius of the central atom" },
      { text: "Number of lone pairs on hydrogen" },
      { text: "Metallic character of the central atom" },
    ],
  },
  {
    stem: "For oxoacids of the type (HO)mEOn, acid strength increases with the number of terminal (non-hydroxyl) oxygen atoms n because they:",
    topic: "Acid-Base: Oxoacids",
    explanation:
      "Each terminal E=O withdraws electron density and delocalises the negative charge of the conjugate base, stabilising it; thus HClO < HClO₂ < HClO₃ < HClO₄ as n rises from 0 to 3.",
    choices: [
      { text: "Stabilise the conjugate base by delocalising its charge", isCorrect: true },
      { text: "Increase the number of ionisable O–H protons" },
      { text: "Make the central atom less electronegative" },
      { text: "Weaken the acid by adding electron density" },
    ],
  },
  {
    stem: "Which is the strongest acid among these chlorine oxoacids?",
    topic: "Acid-Base: Oxoacids",
    explanation:
      "Perchloric acid HClO₄ (chlorine in +7, three terminal oxygens) has the most stabilised conjugate base (ClO₄⁻) and is the strongest; strength falls through HClO₃, HClO₂ to HOCl.",
    choices: [
      { text: "HClO₄", isCorrect: true },
      { text: "HClO₃" },
      { text: "HClO₂" },
      { text: "HOCl" },
    ],
  },
  {
    stem: "Sulfuric acid H₂SO₄ is a stronger acid than sulfurous acid H₂SO₃ chiefly because sulfuric acid has:",
    topic: "Acid-Base: Oxoacids",
    explanation:
      "H₂SO₄ has sulfur in +6 with two terminal S=O oxygens versus one in H₂SO₃ (S +4); the extra terminal oxygen better stabilises the conjugate base, raising acid strength.",
    choices: [
      { text: "More terminal oxygen atoms stabilising its conjugate base", isCorrect: true },
      { text: "A weaker O–H bond due to hydrogen bonding" },
      { text: "A lower oxidation state of sulfur" },
      { text: "Fewer oxygen atoms overall in the molecule" },
    ],
  },
  {
    stem: "In hard–soft acid–base (HSAB) theory, 'hard' acids and bases are characterised as:",
    topic: "Acid-Base: HSAB Theory",
    explanation:
      "Hard species are small, of high charge density and low polarisability (e.g. H⁺, Al³⁺, F⁻, O-donors); soft species are large, polarisable and of low charge density (e.g. Ag⁺, I⁻, S-donors).",
    choices: [
      { text: "Small, weakly polarisable, of high charge density", isCorrect: true },
      { text: "Large, highly polarisable, of low charge density" },
      { text: "Always neutral molecules rather than ions" },
      { text: "Defined solely by their oxidation state" },
    ],
  },
  {
    stem: "The central principle of HSAB theory is that:",
    topic: "Acid-Base: HSAB Theory",
    explanation:
      "Hard acids bind preferentially to hard bases and soft acids to soft bases, giving the more stable combinations; this rationalises, for example, why Ag⁺ (soft) favours I⁻/S-donors over F⁻/O-donors.",
    choices: [
      { text: "Hard acids prefer hard bases and soft acids prefer soft bases", isCorrect: true },
      { text: "Hard acids always prefer soft bases and vice versa" },
      { text: "Acid–base stability is independent of hardness" },
      { text: "Only charge, never polarisability, determines binding" },
    ],
  },
  {
    stem: "Using HSAB reasoning, the soft cation Ag⁺ is expected to bind most strongly to:",
    topic: "Acid-Base: HSAB Theory",
    explanation:
      "Ag⁺ is a soft acid, so it forms its most stable complexes with soft, polarisable donors such as I⁻ and sulfur ligands, rather than with hard donors like F⁻ — consistent with AgI's low solubility.",
    choices: [
      { text: "The iodide ion I⁻", isCorrect: true },
      { text: "The fluoride ion F⁻" },
      { text: "The hydroxide ion OH⁻" },
      { text: "The water molecule as an O-donor" },
    ],
  },
  {
    stem: "HSAB theory helps explain why 'hard' metal ions such as Al³⁺ occur in nature mainly as:",
    topic: "Acid-Base: HSAB Theory",
    explanation:
      "Hard cations (Al³⁺, Mg²⁺, Ca²⁺) associate with hard O-donor anions, so they are found as oxides, silicates and carbonates; soft cations like Cu⁺, Ag⁺, Hg²⁺ occur instead as sulfide ores.",
    choices: [
      { text: "Oxides and silicates (hard O-donor minerals)", isCorrect: true },
      { text: "Sulfide ores (soft S-donor minerals)" },
      { text: "Native uncombined metals" },
      { text: "Iodide and telluride minerals" },
    ],
  },
  {
    stem: "Which statements about acid–base theories are correct? Select all that apply.",
    type: "MULTI",
    topic: "Acid-Base: Theories",
    explanation:
      "Brønsted acids donate protons and bases accept them; Lewis acids accept electron pairs; amphoteric species act as either acid or base; BF₃ is a Lewis but not Brønsted acid. A Lewis base donates, not accepts, electron pairs.",
    choices: [
      { text: "A Brønsted acid is a proton donor", isCorrect: true },
      { text: "A Lewis acid is an electron-pair acceptor", isCorrect: true },
      { text: "Amphoteric species can act as acid or base", isCorrect: true },
      { text: "BF₃ is a Lewis acid but not a Brønsted acid", isCorrect: true },
      { text: "A Lewis base is an electron-pair acceptor" },
      { text: "The Arrhenius model applies to non-aqueous solvents" },
    ],
  },
  {
    stem: "Which statements about oxoacid and hydride acid strength are correct? Select all that apply.",
    type: "MULTI",
    topic: "Acid-Base: Acid Strength",
    explanation:
      "Oxoacid strength rises with terminal oxygen count; binary hydride acidity rises down a group (bond strength) and across a period (electronegativity); HClO₄ is stronger than HOCl. HF is not the strongest hydrohalic acid.",
    choices: [
      { text: "Oxoacid strength increases with more terminal oxygens", isCorrect: true },
      { text: "Hydride acidity increases down a group as the H–X bond weakens", isCorrect: true },
      { text: "Across a period, hydride acidity rises with electronegativity", isCorrect: true },
      { text: "HClO₄ is a stronger acid than HOCl", isCorrect: true },
      { text: "HF is the strongest of the hydrohalic acids" },
      { text: "Oxoacid strength falls as terminal oxygens increase" },
    ],
  },
  {
    stem: "Which of these oxides or hydroxides are amphoteric? Select all that apply.",
    type: "MULTI",
    topic: "Acid-Base: Amphoterism",
    explanation:
      "Al₂O₃, ZnO, PbO and Cr₂O₃ react with both acids and bases and are amphoteric; Na₂O is basic and SO₃ is acidic, illustrating the contrast with the amphoteric oxides.",
    choices: [
      { text: "Al₂O₃", isCorrect: true },
      { text: "ZnO", isCorrect: true },
      { text: "PbO", isCorrect: true },
      { text: "Cr₂O₃", isCorrect: true },
      { text: "Na₂O" },
      { text: "SO₃" },
    ],
  },
  {
    stem: "In the Lewis picture, the formation of a complex ion is an acid–base reaction between a metal ion and its ligands.",
    type: "TRUE_FALSE",
    topic: "Acid-Base: Lewis Theory",
    explanation:
      "A metal ion (electron-pair acceptor, Lewis acid) bonds to ligands that donate lone pairs (Lewis bases); coordinate-bond formation in complexes is therefore a Lewis acid–base interaction.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Water is amphiprotic, able to act as both a proton donor and a proton acceptor.",
    type: "TRUE_FALSE",
    topic: "Acid-Base: Amphoterism",
    explanation:
      "Water donates a proton to bases (acting as an acid) and accepts one from acids (acting as a base); this amphiprotic character underlies its self-ionisation to H₃O⁺ and OH⁻.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The colours of most transition-metal complexes arise from:",
    topic: "d-Block: Colour",
    explanation:
      "Absorption of visible light promotes an electron between the crystal-field-split d orbitals (a d–d transition); the complementary colour is transmitted. d⁰ and d¹⁰ ions, lacking such transitions, are colourless.",
    choices: [
      { text: "d–d electronic transitions between split d orbitals", isCorrect: true },
      { text: "Nuclear transitions within the metal atom" },
      { text: "Vibrations of the metal–ligand bonds" },
      { text: "Ionisation of the ligands by visible light" },
    ],
  },
  {
    stem: "Which aqueous ion is expected to be colourless?",
    topic: "d-Block: Colour",
    explanation:
      "Zn²⁺ is d¹⁰ (a full d subshell) with no possible d–d transition, so it is colourless; Cu²⁺ (d⁹), Ni²⁺ (d⁸) and Mn²⁺-containing oxidised species show colour from d–d or charge-transfer absorption.",
    choices: [
      { text: "Zn²⁺ (d¹⁰)", isCorrect: true },
      { text: "Cu²⁺ (d⁹)" },
      { text: "Ni²⁺ (d⁸)" },
      { text: "Cr³⁺ (d³)" },
    ],
  },
  {
    stem: "The intense purple colour of the permanganate ion MnO₄⁻, despite manganese being d⁰, is due to:",
    topic: "d-Block: Colour",
    explanation:
      "With Mn(VII) formally d⁰ there are no d electrons for a d–d transition; the strong colour comes from a ligand-to-metal charge-transfer (O→Mn) absorption, which is intense and Laporte-allowed.",
    choices: [
      { text: "A ligand-to-metal charge-transfer transition", isCorrect: true },
      { text: "A d–d transition within a partly filled d shell" },
      { text: "Emission of light by excited manganese atoms" },
      { text: "Scattering of light by colloidal manganese" },
    ],
  },
  {
    stem: "The paramagnetism of many transition-metal ions is a direct consequence of:",
    topic: "d-Block: Magnetism",
    explanation:
      "Unpaired electrons in the d orbitals give a magnetic moment; the spin-only moment μ = √[n(n+2)] BM increases with the number of unpaired electrons n, so paramagnetism tracks the d-electron count and field.",
    choices: [
      { text: "Unpaired electrons in the d orbitals", isCorrect: true },
      { text: "Completely paired d electrons" },
      { text: "The absence of any d electrons" },
      { text: "Delocalised electrons in the 4s orbital only" },
    ],
  },
  {
    stem: "Transition metals and their compounds are effective catalysts largely because they can:",
    topic: "d-Block: Catalysis",
    explanation:
      "Variable oxidation states let them provide alternative lower-energy pathways (in homogeneous catalysis), while surfaces of the metals adsorb and activate reactants (in heterogeneous catalysis).",
    choices: [
      { text: "Adopt variable oxidation states and adsorb reactants", isCorrect: true },
      { text: "Only ever exist in a single oxidation state" },
      { text: "Form exclusively colourless, diamagnetic ions" },
      { text: "Avoid forming any bonds with the reactants" },
    ],
  },
  {
    stem: "In the Haber process for ammonia synthesis, the heterogeneous catalyst used is:",
    topic: "d-Block: Catalysis",
    explanation:
      "Finely divided iron (promoted with K₂O and Al₂O₃) catalyses N₂ + 3H₂ ⇌ 2NH₃ by adsorbing and dissociating the reactants on its surface, lowering the activation energy for N≡N cleavage.",
    choices: [
      { text: "Finely divided iron", isCorrect: true },
      { text: "Vanadium(V) oxide" },
      { text: "Platinum–rhodium gauze" },
      { text: "Manganese dioxide" },
    ],
  },
  {
    stem: "In the Contact process, vanadium(V) oxide catalyses the oxidation of SO₂ to SO₃ by:",
    topic: "d-Block: Catalysis",
    explanation:
      "V₂O₅ oxidises SO₂ to SO₃, being reduced to V₂O₄, which is then reoxidised by O₂ — a cycle exploiting vanadium's accessible +5/+4 states, the essence of a homogeneous-type redox catalytic cycle.",
    choices: [
      { text: "Cycling between the +5 and +4 oxidation states", isCorrect: true },
      { text: "Remaining fixed in the +5 state throughout" },
      { text: "Permanently converting to vanadium metal" },
      { text: "Absorbing SO₃ without any redox change" },
    ],
  },
  {
    stem: "Nickel is widely used as a catalyst in the:",
    topic: "d-Block: Catalysis",
    explanation:
      "Finely divided nickel catalyses the hydrogenation of unsaturated organic compounds (e.g. hardening vegetable oils), adsorbing H₂ and the substrate on its surface to add hydrogen across double bonds.",
    choices: [
      { text: "Hydrogenation of unsaturated compounds", isCorrect: true },
      { text: "Oxidation of ammonia to nitric oxide" },
      { text: "Cracking of long-chain alkanes to alkenes" },
      { text: "Electrolytic extraction of aluminium" },
    ],
  },
  {
    stem: "The green aqueous ion [Fe(H₂O)₆]²⁺ is slowly oxidised in air to give:",
    topic: "d-Block: Iron Chemistry",
    explanation:
      "Fe(II) is readily oxidised by atmospheric O₂ to Fe(III), so pale-green iron(II) solutions turn yellow-brown as [Fe(H₂O)₆]³⁺ (and hydrolysed species) form; Fe(III) is the more stable state in aerated water.",
    choices: [
      { text: "The yellow-brown iron(III) ion", isCorrect: true },
      { text: "Iron metal by reduction" },
      { text: "The colourless iron(IV) ion" },
      { text: "A permanent deep-purple iron(II) species" },
    ],
  },
  {
    stem: "Adding excess aqueous ammonia to copper(II) sulfate solution ultimately gives a deep-blue solution containing:",
    topic: "d-Block: Copper Chemistry",
    explanation:
      "Excess NH₃ replaces water ligands to form the deep-blue tetraamminecopper(II) ion [Cu(NH₃)₄(H₂O)₂]²⁺; the initial pale-blue Cu(OH)₂ precipitate redissolves as this complex forms.",
    choices: [
      { text: "The deep-blue [Cu(NH₃)₄(H₂O)₂]²⁺ ion", isCorrect: true },
      { text: "Colourless copper(I) ammonia complex only" },
      { text: "A permanent pale-blue copper hydroxide precipitate" },
      { text: "Copper metal deposited from solution" },
    ],
  },
  {
    stem: "Acidified dichromate Cr₂O₇²⁻ acts as an oxidising agent and is itself reduced to:",
    topic: "d-Block: Chromium Chemistry",
    explanation:
      "In acid, orange Cr₂O₇²⁻ (Cr +6) is reduced to the green chromium(III) ion Cr³⁺; the accompanying orange-to-green colour change is used to follow such oxidations, e.g. of alcohols or Fe²⁺.",
    choices: [
      { text: "The green chromium(III) ion Cr³⁺", isCorrect: true },
      { text: "The yellow chromate ion CrO₄²⁻" },
      { text: "Chromium metal" },
      { text: "The blue chromium(II) ion Cr²⁺" },
    ],
  },
  {
    stem: "The interconversion 2CrO₄²⁻ + 2H⁺ ⇌ Cr₂O₇²⁻ + H₂O shows that adding acid to yellow chromate:",
    topic: "d-Block: Chromium Chemistry",
    explanation:
      "Adding acid shifts the equilibrium toward orange dichromate; adding base reverses it back to yellow chromate. It is an acid–base (not redox) equilibrium — chromium stays in the +6 state throughout.",
    choices: [
      { text: "Converts it to orange dichromate without changing chromium's oxidation state", isCorrect: true },
      { text: "Reduces chromium from +6 to +3" },
      { text: "Oxidises chromium from +3 to +6" },
      { text: "Precipitates chromium metal from solution" },
    ],
  },
  {
    stem: "Manganese(II) is the most stable common oxidation state of manganese in acidic solution partly because Mn²⁺ has:",
    topic: "d-Block: Manganese Chemistry",
    explanation:
      "Mn²⁺ is d⁵ — a half-filled d subshell with extra exchange stability — so it resists both oxidation and reduction in acid; higher states like MnO₄⁻ are strong oxidants that revert to Mn²⁺.",
    choices: [
      { text: "A stable half-filled d⁵ configuration", isCorrect: true },
      { text: "A completely filled d¹⁰ configuration" },
      { text: "An empty d⁰ configuration" },
      { text: "No d electrons available for bonding" },
    ],
  },
  {
    stem: "Titanium is valued as a structural metal largely because it:",
    topic: "d-Block: Titanium Chemistry",
    explanation:
      "Titanium combines a high strength-to-weight ratio with excellent corrosion resistance from a passivating TiO₂ film; it is extracted by the Kroll process (reduction of TiCl₄ with magnesium).",
    choices: [
      { text: "Has a high strength-to-weight ratio and resists corrosion", isCorrect: true },
      { text: "Is the densest and heaviest of all common metals" },
      { text: "Melts below the boiling point of water" },
      { text: "Reacts violently with air at room temperature" },
    ],
  },
  {
    stem: "Adding aqueous sodium hydroxide to most transition-metal(II) salt solutions typically produces:",
    topic: "d-Block: Descriptive Reactions",
    explanation:
      "OH⁻ precipitates insoluble, often coloured metal(II) hydroxides (e.g. blue Cu(OH)₂, green Fe(OH)₂, green Ni(OH)₂); some, like Zn(OH)₂ and Cr(OH)₃, redissolve in excess base because they are amphoteric.",
    choices: [
      { text: "An insoluble, often coloured metal hydroxide", isCorrect: true },
      { text: "A colourless, highly soluble metal hydroxide" },
      { text: "The free metal deposited from solution" },
      { text: "No reaction, since the salts are inert to base" },
    ],
  },
  {
    stem: "The [Cu(H₂O)₆]²⁺ ion is blue whereas the [Cu(NH₃)₄(H₂O)₂]²⁺ ion is a much deeper blue because ammonia:",
    topic: "d-Block: Copper Chemistry",
    explanation:
      "NH₃ is higher than H₂O in the spectrochemical series, giving a larger crystal-field splitting Δ; the d–d absorption shifts, changing the transmitted colour to the more intense deep blue.",
    choices: [
      { text: "Produces a larger crystal-field splitting than water", isCorrect: true },
      { text: "Produces a smaller crystal-field splitting than water" },
      { text: "Removes all colour by filling the d subshell" },
      { text: "Oxidises copper(II) to a higher oxidation state" },
    ],
  },
  {
    stem: "The lanthanide contraction is the steady decrease in atomic and ionic radius across the lanthanides caused by:",
    topic: "f-Block: Lanthanides",
    explanation:
      "The poor shielding by the diffuse 4f electrons lets the effective nuclear charge felt by the outer electrons rise across the series, contracting the radii; this makes 4d and 5d congeners similar in size.",
    choices: [
      { text: "Poor shielding by the 4f electrons", isCorrect: true },
      { text: "Excellent shielding by the 4f electrons" },
      { text: "A steady decrease in nuclear charge" },
      { text: "The addition of electrons to a new shell each step" },
    ],
  },
  {
    stem: "The most common and stable oxidation state across the lanthanide series is:",
    topic: "f-Block: Lanthanides",
    explanation:
      "The lanthanides are overwhelmingly +3 (Ln³⁺), losing two 6s and one 5d/4f electron; a few show +2 or +4 where these give empty, half-filled or filled 4f subshells (e.g. Eu²⁺, Ce⁴⁺).",
    choices: [
      { text: "+3", isCorrect: true },
      { text: "+2" },
      { text: "+6" },
      { text: "+7" },
    ],
  },
  {
    stem: "A key consequence of the lanthanide contraction is that the second- and third-row transition metals of a given group (e.g. Zr and Hf) have:",
    topic: "f-Block: Lanthanides",
    explanation:
      "Because the contraction offsets the expected size increase, 4d and 5d congeners such as Zr/Hf and Nb/Ta have nearly identical radii and very similar chemistry, making them hard to separate.",
    choices: [
      { text: "Very similar atomic radii and chemistry", isCorrect: true },
      { text: "Radically different atomic radii" },
      { text: "Opposite magnetic behaviour in every case" },
      { text: "No chemical resemblance to one another" },
    ],
  },
  {
    stem: "Compared with the lanthanides, the early actinides show a wider range of oxidation states because their 5f electrons are:",
    topic: "f-Block: Actinides",
    explanation:
      "The 5f orbitals of the early actinides are more spatially extended and closer in energy to 6d/7s than the buried 4f of the lanthanides, so more electrons are chemically accessible (e.g. U shows +3 to +6).",
    choices: [
      { text: "More spatially extended and closer in energy to the valence orbitals", isCorrect: true },
      { text: "More tightly buried in the core than the lanthanide 4f" },
      { text: "Completely unavailable for any bonding" },
      { text: "Identical in behaviour to the lanthanide 4f electrons" },
    ],
  },
  {
    stem: "Which statements about transition-metal descriptive chemistry are correct? Select all that apply.",
    type: "MULTI",
    topic: "d-Block: Descriptive Reactions",
    explanation:
      "Fe(II) oxidises in air to Fe(III); excess NH₃ gives deep-blue [Cu(NH₃)₄(H₂O)₂]²⁺; acidified dichromate is reduced to green Cr³⁺; MnO₄⁻ colour is charge-transfer. Zn²⁺ is not coloured.",
    choices: [
      { text: "Iron(II) is oxidised by air to iron(III)", isCorrect: true },
      { text: "Excess ammonia gives a deep-blue copper(II) ammine complex", isCorrect: true },
      { text: "Acidified dichromate is reduced to green Cr³⁺", isCorrect: true },
      { text: "Permanganate's colour is due to charge transfer", isCorrect: true },
      { text: "The Zn²⁺ ion is intensely coloured by d–d transitions" },
      { text: "Chromate converts to dichromate on adding alkali" },
    ],
  },
  {
    stem: "Which statements about catalysis by transition metals are correct? Select all that apply.",
    type: "MULTI",
    topic: "d-Block: Catalysis",
    explanation:
      "Iron catalyses the Haber process, V₂O₅ the Contact process, and nickel hydrogenation; variable oxidation states and surface adsorption underpin catalytic activity. Catalysts are not consumed overall.",
    choices: [
      { text: "Iron catalyses ammonia synthesis in the Haber process", isCorrect: true },
      { text: "Vanadium(V) oxide catalyses the Contact process", isCorrect: true },
      { text: "Nickel catalyses hydrogenation of unsaturated compounds", isCorrect: true },
      { text: "Variable oxidation states aid their catalytic action", isCorrect: true },
      { text: "The catalyst is permanently consumed in the reaction" },
      { text: "Catalytic activity requires a full d¹⁰ subshell" },
    ],
  },
  {
    stem: "Which statements about the f-block elements are correct? Select all that apply.",
    type: "MULTI",
    topic: "f-Block: General",
    explanation:
      "Lanthanides are mainly +3; the lanthanide contraction stems from poor 4f shielding and makes Zr/Hf alike; early actinides show varied states from accessible 5f electrons. The 4f electrons shield well is false.",
    choices: [
      { text: "The lanthanides are predominantly +3", isCorrect: true },
      { text: "The lanthanide contraction arises from poor 4f shielding", isCorrect: true },
      { text: "Zr and Hf are very similar in size and chemistry", isCorrect: true },
      { text: "Early actinides show a wider range of oxidation states than lanthanides", isCorrect: true },
      { text: "The 4f electrons shield the nuclear charge very effectively" },
      { text: "All lanthanides are most stable in the +6 state" },
    ],
  },
  {
    stem: "Which aqueous transition-metal ions are coloured? Select all that apply.",
    type: "MULTI",
    topic: "d-Block: Colour",
    explanation:
      "Cu²⁺ (d⁹), Ni²⁺ (d⁸), Cr³⁺ (d³) and Fe³⁺ (d⁵, via charge transfer/hydrolysis) are coloured; Zn²⁺ (d¹⁰) and Sc³⁺ (d⁰) are colourless as they lack d–d transitions.",
    choices: [
      { text: "Cu²⁺", isCorrect: true },
      { text: "Ni²⁺", isCorrect: true },
      { text: "Cr³⁺", isCorrect: true },
      { text: "Fe³⁺", isCorrect: true },
      { text: "Zn²⁺" },
      { text: "Sc³⁺" },
    ],
  },
  {
    stem: "The oxidising power of the oxoanions increases with the oxidation state of the metal, so MnO₄⁻ (Mn +7) is a stronger oxidant than MnO₂ (Mn +4).",
    type: "TRUE_FALSE",
    topic: "d-Block: Oxidising Agents",
    explanation:
      "Higher metal oxidation states in oxoanions tend to be more strongly oxidising; permanganate (Mn⁺⁷) is a powerful oxidant, readily reduced to Mn²⁺ in acid, whereas MnO₂ (Mn⁺⁴) is a milder oxidant.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The overall trend in stability of the +3 relative to the +2 state on moving left to right across the first transition series is that +3 becomes:",
    topic: "d-Block: Oxidation States",
    explanation:
      "Toward the right (e.g. Co, Ni, Cu) the third ionisation energy is high, so the +3 state becomes harder to reach and less stable relative to +2; early members like Sc and Ti favour higher states more readily.",
    choices: [
      { text: "Less stable relative to +2 toward the right of the series", isCorrect: true },
      { text: "More stable relative to +2 toward the right of the series" },
      { text: "Completely independent of position in the series" },
      { text: "The only accessible state for every element" },
    ],
  },
  {
    stem: "Zinc, cadmium and mercury are grouped together and, like the noble gases of the d-block, are relatively unreactive as metals because their atoms have:",
    topic: "d-Block: Group 12",
    explanation:
      "Group 12 metals have full (n−1)d¹⁰ns² configurations; the completely filled d subshell is not involved in metallic bonding, giving low melting points and, for mercury, a liquid metal at room temperature.",
    choices: [
      { text: "A completely filled d subshell not used in metallic bonding", isCorrect: true },
      { text: "A half-filled d subshell of maximum stability" },
      { text: "An empty d subshell like the early transition metals" },
      { text: "No electrons in the outermost s orbital" },
    ],
  },
  {
    stem: "The extraction of iron in the blast furnace relies on carbon monoxide acting as the:",
    topic: "d-Block: Extraction",
    explanation:
      "In the blast furnace CO reduces iron oxides to molten iron (Fe₂O₃ + 3CO → 2Fe + 3CO₂); carbon monoxide is the reducing agent, being oxidised to CO₂ while iron is reduced from +3 to 0.",
    choices: [
      { text: "Reducing agent, itself oxidised to CO₂", isCorrect: true },
      { text: "Oxidising agent, itself reduced to carbon" },
      { text: "Catalyst that is not consumed" },
      { text: "Flux that removes silicate impurities" },
    ],
  },
  {
    stem: "Steel is described as an alloy chiefly of iron with controlled amounts of:",
    topic: "d-Block: Alloys",
    explanation:
      "Carbon steel is iron plus a small, controlled proportion of carbon (typically well under 2%); other elements such as chromium and nickel are added for stainless and specialist steels, tuning hardness and corrosion resistance.",
    choices: [
      { text: "Carbon", isCorrect: true },
      { text: "Sulfur" },
      { text: "Phosphorus" },
      { text: "Sodium" },
    ],
  },
  {
    stem: "A saturated solution of iron(III) chloride in water is acidic because the [Fe(H₂O)₆]³⁺ ion:",
    topic: "d-Block: Hydrolysis",
    explanation:
      "The small, highly charged Fe³⁺ polarises coordinated water, making it release H⁺ (hydrolysis): [Fe(H₂O)₆]³⁺ ⇌ [Fe(H₂O)₅(OH)]²⁺ + H⁺, so the solution is acidic — a general feature of highly charged metal aqua ions.",
    choices: [
      { text: "Polarises coordinated water, releasing H⁺", isCorrect: true },
      { text: "Accepts protons from the surrounding water" },
      { text: "Precipitates as a neutral hydroxide immediately" },
      { text: "Has no effect on the acidity of the solution" },
    ],
  },
  {
    stem: "The standard reduction potential E°(Fe³⁺/Fe²⁺) is +0.77 V, so iron(III) can oxidise iodide (E°(I₂/I⁻) = +0.54 V) because:",
    topic: "Electrochemistry: Applications",
    explanation:
      "The species with the more positive reduction potential is reduced; since +0.77 V (Fe³⁺/Fe²⁺) exceeds +0.54 V (I₂/I⁻), Fe³⁺ oxidises I⁻ to I₂ while being reduced to Fe²⁺ — a spontaneous cell reaction.",
    choices: [
      { text: "Its reduction potential is more positive than that of iodine", isCorrect: true },
      { text: "Its reduction potential is more negative than that of iodine" },
      { text: "Iodide is a stronger oxidant than iron(III)" },
      { text: "Both couples have identical reduction potentials" },
    ],
  },
  {
    stem: "The blue colour produced when Fe³⁺ reacts with hexacyanoferrate(II) (Prussian blue) is an example of:",
    topic: "d-Block: Charge Transfer",
    explanation:
      "Prussian blue owes its intense colour to metal-to-metal charge transfer between Fe(II) and Fe(III) centres bridged by cyanide; such charge-transfer bands are much more intense than ordinary d–d transitions.",
    choices: [
      { text: "A metal-to-metal charge-transfer transition", isCorrect: true },
      { text: "A simple d–d transition on a single iron ion" },
      { text: "Emission of light by excited cyanide ions" },
      { text: "A nuclear transition within the iron nucleus" },
    ],
  },
  {
    stem: "Anhydrous copper(II) sulfate is white, but the pentahydrate CuSO₄·₅H₂O is blue because:",
    topic: "d-Block: Colour",
    explanation:
      "The blue colour requires water ligands around Cu²⁺: in the hydrate, coordinated H₂O sets up the crystal-field splitting that allows the d–d absorption; the anhydrous salt, lacking these ligands, is white.",
    choices: [
      { text: "Coordinated water sets up the crystal-field splitting for a d–d transition", isCorrect: true },
      { text: "Water chemically reduces copper(II) to copper(I)" },
      { text: "The sulfate ion itself is intensely blue" },
      { text: "Hydration removes all d electrons from copper" },
    ],
  },
  {
    stem: "Cobalt(II) chloride paper is used to test for water because it changes colour from:",
    topic: "d-Block: Cobalt Chemistry",
    explanation:
      "Anhydrous CoCl₂ is blue (tetrahedral [CoCl₄]²⁻-like); on hydration it becomes pink [Co(H₂O)₆]²⁺. The reversible blue-to-pink change on contact with water makes it a simple moisture indicator.",
    choices: [
      { text: "Blue to pink on hydration", isCorrect: true },
      { text: "Pink to blue on hydration" },
      { text: "Green to yellow on hydration" },
      { text: "Colourless to black on hydration" },
    ],
  },
  {
    stem: "Vanadium is notable for showing four oxidation states in aqueous solution, whose ions are distinguished by their:",
    topic: "d-Block: Vanadium Chemistry",
    explanation:
      "Vanadium's +5, +4, +3 and +2 aqueous ions have characteristic colours (yellow VO₂⁺, blue VO²⁺, green V³⁺, violet V²⁺); successive reduction, e.g. by zinc in acid, steps through this colour sequence.",
    choices: [
      { text: "Distinct characteristic colours for each state", isCorrect: true },
      { text: "Identical colour regardless of oxidation state" },
      { text: "A total lack of colour in every state" },
      { text: "Colours that depend only on temperature" },
    ],
  },
  {
    stem: "Across the 3d series the second and third ionisation energies rise overall, which helps explain why the highest oxidation states are:",
    topic: "d-Block: Ionization Energy",
    explanation:
      "As successive ionisation energies climb across the series, removing many electrons to reach very high oxidation states becomes progressively harder, so those high states are confined to the earlier metals (Ti–Mn).",
    choices: [
      { text: "Confined mainly to the earlier members of the series", isCorrect: true },
      { text: "Most common among the later members of the series" },
      { text: "Equally accessible to every member of the series" },
      { text: "Never observed anywhere in the series" },
    ],
  },
  {
    stem: "A ligand that causes a large crystal-field splitting (a strong-field ligand such as CN⁻ or CO) tends to give complexes that are:",
    topic: "d-Block: Ligand Field",
    explanation:
      "Strong-field ligands produce a large Δ, favouring electron pairing (low-spin complexes) and often placing the d–d absorption toward higher energy; weak-field ligands give small Δ and high-spin complexes.",
    choices: [
      { text: "Low-spin, with electrons paired in the lower d orbitals", isCorrect: true },
      { text: "Always high-spin, with a maximum of unpaired electrons" },
      { text: "Necessarily colourless and diamagnetic" },
      { text: "Unable to form any stable complex at all" },
    ],
  },
  {
    stem: "Overall, the transition metals are far better than the s-block metals at forming complex ions because their cations are:",
    topic: "d-Block: Complex Formation",
    explanation:
      "Transition-metal cations are relatively small with high charge density and have available low-energy d orbitals to accept ligand lone pairs, so they bind ligands strongly to form stable complexes.",
    choices: [
      { text: "Small, highly charged, with available d orbitals for ligands", isCorrect: true },
      { text: "Large, singly charged, with no available orbitals" },
      { text: "Unable to accept any electron pairs from ligands" },
      { text: "Always in the zero oxidation state" },
    ],
  },
  {
    stem: "The rusting of iron is an electrochemical process requiring both:",
    topic: "d-Block: Corrosion",
    explanation:
      "Rusting needs oxygen and water together: iron is oxidised at anodic regions while O₂ is reduced at cathodic regions, forming hydrated iron(III) oxide; excluding either water or air prevents rust.",
    choices: [
      { text: "Water and oxygen", isCorrect: true },
      { text: "Water and nitrogen" },
      { text: "Oxygen and carbon dioxide only" },
      { text: "Dry air alone, without any moisture" },
    ],
  },
  {
    stem: "Sacrificial protection of a steel structure uses a more reactive metal such as zinc or magnesium that:",
    topic: "Electrochemistry: Corrosion Protection",
    explanation:
      "The more reactive metal has the more negative electrode potential, so it is preferentially oxidised (corrodes) and protects the iron, which stays cathodic; the block is replaced as it is consumed.",
    choices: [
      { text: "Is oxidised in preference to the iron, protecting it", isCorrect: true },
      { text: "Is reduced in preference to the iron" },
      { text: "Coats the iron with an unreactive oxide of iron" },
      { text: "Increases the reduction potential of the iron" },
    ],
  },
  {
    stem: "In an iodometric titration, the iodine liberated is determined by titration against standard sodium thiosulfate, which reduces it to:",
    topic: "Redox: Titrations",
    explanation:
      "Thiosulfate reduces iodine: I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻ (tetrathionate). Starch, added near the end point, sharpens the blue-to-colourless change as the last iodine is consumed.",
    choices: [
      { text: "Iodide ions, itself forming tetrathionate", isCorrect: true },
      { text: "Iodate ions, itself forming sulfate" },
      { text: "Free iodine of higher concentration" },
      { text: "Hydrogen iodide gas" },
    ],
  },
  {
    stem: "During the electrolysis of aqueous (rather than molten) sodium chloride, the gas evolved at the cathode is usually:",
    topic: "Electrochemistry: Electrolysis",
    explanation:
      "In aqueous NaCl, water is reduced in preference to Na⁺ (which has a very negative potential), so hydrogen is evolved at the cathode; chlorine forms at the anode, and NaOH remains in solution.",
    choices: [
      { text: "Hydrogen, from reduction of water", isCorrect: true },
      { text: "Sodium vapour, from reduction of Na⁺" },
      { text: "Oxygen, from reduction of water" },
      { text: "Chlorine, from reduction of chloride" },
    ],
  },
  {
    stem: "Chromium and aluminium resist corrosion despite being reactive metals because each forms a:",
    topic: "d-Block: Passivation",
    explanation:
      "Both develop a thin, adherent, impervious oxide film (Cr₂O₃, Al₂O₃) that passivates the surface and blocks further attack; this passivation, not inertness, accounts for their durability and stainless alloys.",
    choices: [
      { text: "Thin, adherent, protective oxide layer", isCorrect: true },
      { text: "Loose, flaky oxide that constantly renews corrosion" },
      { text: "Volatile oxide that escapes as a gas" },
      { text: "Water-soluble oxide that washes away" },
    ],
  },
  {
    stem: "Some transition metals form interstitial compounds (e.g. with hydrogen, carbon or nitrogen), in which the small non-metal atoms:",
    topic: "d-Block: Interstitial Compounds",
    explanation:
      "Small atoms such as H, C and N occupy the holes (interstices) in the metal's close-packed lattice, giving hard, often non-stoichiometric materials with high melting points, like tungsten carbide and steels.",
    choices: [
      { text: "Occupy the holes within the metal lattice", isCorrect: true },
      { text: "Replace metal atoms at every lattice site" },
      { text: "Form separate ionic layers between metal sheets" },
      { text: "Bond only at the surface of the metal crystal" },
    ],
  },
];
