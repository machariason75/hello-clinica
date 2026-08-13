/**
 * INORGANIC CHEMISTRY — PRACTICE SET 4
 * Chemical Bonding II — Molecular Orbital Theory & Metallic Bonding
 *
 * Housecroft & Sharpe / Miessler / Weller depth. LCAO and bonding/antibonding orbitals,
 * bond order from molecular orbitals, the period-2 homonuclear diatomics and s–p mixing,
 * the paramagnetism of O₂, molecular-orbital electron configurations, heteronuclear
 * diatomics (CO, NO, HF), valence-bond versus MO pictures, metallic bonding and band
 * theory, conductors / semiconductors / insulators and doping, delocalized π systems,
 * and magnetic properties. 100 questions.
 *
 * Molecular-orbital configurations, bond orders and equations are written in proper
 * notation. Options are length-matched and answer positions are randomized by the engine.
 */

import type { Q } from "../_lib/qbank";

export const INORGANIC_SET_4: Q[] = [
  {
    stem: "In molecular orbital theory, atomic orbitals are combined by the method known as:",
    topic: "Molecular Orbital Theory — Basics",
    explanation:
      "Molecular orbitals are built as a linear combination of atomic orbitals (LCAO): adding the atomic wavefunctions gives a bonding MO, subtracting them gives an antibonding MO. The number of MOs formed equals the number of atomic orbitals combined.",
    choices: [
      { text: "linear combination of atomic orbitals", isCorrect: true },
      { text: "the hybridisation of atomic orbitals" },
      { text: "the promotion of core electrons" },
      { text: "pairing of nuclear spins" },
    ],
  },
  {
    stem: "A bonding molecular orbital differs from the atomic orbitals it forms from in that it has:",
    topic: "Molecular Orbital Theory — Basics",
    explanation:
      "A bonding MO concentrates electron density between the two nuclei and lies lower in energy than the parent atomic orbitals; electrons in it are stabilised, which is what holds the atoms together.",
    choices: [
      { text: "lower energy and density between the nuclei", isCorrect: true },
      { text: "higher energy and a node between nuclei" },
      { text: "the same energy as the atomic orbitals" },
      { text: "no electron density anywhere" },
    ],
  },
  {
    stem: "An antibonding molecular orbital (marked with an asterisk, e.g. σ*2s) is characterised by:",
    topic: "Molecular Orbital Theory — Basics",
    explanation:
      "An antibonding MO has a node between the nuclei and lies higher in energy than the atomic orbitals; populating it removes electron density from between the atoms and weakens or cancels the bond.",
    choices: [
      { text: "a node between nuclei, higher energy", isCorrect: true },
      { text: "extra density between the nuclei" },
      { text: "the lowest energy in the molecule" },
      { text: "being always completely empty" },
    ],
  },
  {
    stem: "When two 2pz orbitals overlap end-on along the bond axis, they form:",
    topic: "Molecular Orbital Theory — Basics",
    explanation:
      "Head-on (axial) overlap of pz orbitals gives a σ molecular orbital, cylindrically symmetric about the bond axis; side-on overlap of px or py instead gives π orbitals with a nodal plane through the axis.",
    choices: [
      { text: "a σ (sigma) molecular orbital", isCorrect: true },
      { text: "a π (pi) molecular orbital" },
      { text: "two nonbonding orbitals" },
      { text: "no molecular orbital at all" },
    ],
  },
  {
    stem: "Sideways (parallel) overlap of two 2px orbitals produces a π orbital, which has:",
    topic: "Molecular Orbital Theory — Basics",
    explanation:
      "A π MO has a nodal plane containing the internuclear axis, with electron density in two lobes above and below; π overlap is generally weaker than σ overlap because it is less direct.",
    choices: [
      { text: "a nodal plane along the bond axis", isCorrect: true },
      { text: "cylindrical symmetry about the axis" },
      { text: "no nodes anywhere" },
      { text: "its density only on the axis" },
    ],
  },
  {
    stem: "For two atomic orbitals to combine effectively into molecular orbitals, they must have:",
    topic: "Molecular Orbital Theory — Basics",
    explanation:
      "Efficient MO formation requires the atomic orbitals to be close in energy, to have compatible symmetry, and to overlap in space; orbitals of very different energy or wrong symmetry mix poorly and contribute little bonding.",
    choices: [
      { text: "similar energy and matching symmetry", isCorrect: true },
      { text: "identical principal quantum number only" },
      { text: "opposite spin quantum numbers" },
      { text: "very different energies" },
    ],
  },
  {
    stem: "The total number of molecular orbitals produced always equals:",
    topic: "Molecular Orbital Theory — Basics",
    explanation:
      "MO theory conserves orbitals: combining N atomic orbitals yields exactly N molecular orbitals, split into bonding and antibonding sets. Thus two 1s orbitals give one σ1s and one σ*1s.",
    choices: [
      { text: "the number of atomic orbitals combined", isCorrect: true },
      { text: "twice the number of atoms present" },
      { text: "the number of bonding orbitals only" },
      { text: "the number of valence electrons" },
    ],
  },
  {
    stem: "Which statements correctly contrast bonding and antibonding molecular orbitals? Select all that apply.",
    type: "MULTI",
    topic: "Molecular Orbital Theory — Basics",
    explanation:
      "Bonding MOs are lower in energy, build electron density between the nuclei, and stabilise the molecule; antibonding MOs are higher in energy, have a node between the nuclei, and destabilise it. They are not equal in energy, and both can hold electrons.",
    choices: [
      { text: "bonding MOs lie lower in energy", isCorrect: true },
      { text: "antibonding MOs lie higher in energy", isCorrect: true },
      { text: "bonding MOs add density between nuclei", isCorrect: true },
      { text: "antibonding MOs have a node between nuclei", isCorrect: true },
      { text: "the two sets are equal in energy" },
      { text: "antibonding MOs can never hold electrons" },
    ],
  },
  {
    stem: "True or False: Filling an antibonding molecular orbital reduces the net bond order and weakens the bond between the atoms.",
    type: "TRUE_FALSE",
    topic: "Molecular Orbital Theory — Basics",
    explanation:
      "True. Bond order counts bonding minus antibonding electrons (halved), so electrons in antibonding orbitals subtract from the bond; this is why He₂, with equal bonding and antibonding populations, has a bond order of zero and does not exist.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The molecular-orbital bond order is calculated as:",
    topic: "Bond Order from Molecular Orbitals",
    explanation:
      "Bond order = ½(number of bonding electrons − number of antibonding electrons). A larger positive value means a stronger, shorter bond, while a value of zero means no net bond forms.",
    choices: [
      { text: "½(bonding − antibonding electrons)", isCorrect: true },
      { text: "½(bonding + antibonding electrons)" },
      { text: "(antibonding − bonding electrons)" },
      { text: "½(total valence electrons)" },
    ],
  },
  {
    stem: "The bond order of the dihydrogen molecule H₂, with configuration (σ1s)², is:",
    topic: "Bond Order from Molecular Orbitals",
    explanation:
      "H₂ has two electrons in the bonding σ1s orbital and none antibonding, so bond order = ½(2 − 0) = 1; this single bond is consistent with its known stability.",
    choices: [
      { text: "1", isCorrect: true },
      { text: "0" },
      { text: "2" },
      { text: "½" },
    ],
  },
  {
    stem: "Why does the helium 'molecule' He₂, configuration (σ1s)²(σ*1s)², not exist?",
    topic: "Bond Order from Molecular Orbitals",
    explanation:
      "With two bonding and two antibonding electrons, bond order = ½(2 − 2) = 0, so there is no net bonding and He₂ is not a stable molecule; MO theory thus explains helium's monatomic nature.",
    choices: [
      { text: "its bond order is zero", isCorrect: true },
      { text: "its bond order is two" },
      { text: "helium has no electrons to share" },
      { text: "the atoms repel by their charge" },
    ],
  },
  {
    stem: "The one-electron ion H₂⁺, configuration (σ1s)¹, has a bond order of:",
    topic: "Bond Order from Molecular Orbitals",
    explanation:
      "A single bonding electron gives bond order = ½(1 − 0) = ½; H₂⁺ is a real, if weak, species, showing that even a half bond can hold two nuclei together.",
    choices: [
      { text: "½", isCorrect: true },
      { text: "1" },
      { text: "0" },
      { text: "2" },
    ],
  },
  {
    stem: "For the isoelectronic series O₂⁺, O₂, O₂⁻, O₂²⁻, the bond orders are, respectively:",
    topic: "Bond Order from Molecular Orbitals",
    explanation:
      "Adding electrons into the π* orbitals lowers the bond order step by step: O₂⁺ 2.5, O₂ 2, O₂⁻ 1.5, O₂²⁻ 1; bond length increases and bond strength falls along the series.",
    choices: [
      { text: "2.5, 2, 1.5, 1", isCorrect: true },
      { text: "1, 1.5, 2, 2.5" },
      { text: "2, 2, 2, 2" },
      { text: "3, 2.5, 2, 1.5" },
    ],
  },
  {
    stem: "Which of these species has the shortest, strongest bond, judged by MO bond order?",
    topic: "Bond Order from Molecular Orbitals",
    explanation:
      "O₂⁺ has bond order 2.5, higher than O₂ (2), O₂⁻ (1.5) or O₂²⁻ (1); the greater bond order means the shortest and strongest of the four oxygen species.",
    choices: [
      { text: "O₂⁺", isCorrect: true },
      { text: "O₂" },
      { text: "O₂⁻" },
      { text: "O₂²⁻" },
    ],
  },
  {
    stem: "A bond order of zero, as found for He₂ and Be₂ (to a first approximation), predicts that the species is:",
    topic: "Bond Order from Molecular Orbitals",
    explanation:
      "Zero net bonding means the atoms are not held together, so the molecule does not form under normal conditions; this correctly accounts for the absence of stable He₂ and the extreme weakness of Be₂.",
    choices: [
      { text: "not stable; does not exist", isCorrect: true },
      { text: "a very strongly bonded species" },
      { text: "ionic rather than covalent" },
      { text: "aromatic and stable" },
    ],
  },
  {
    stem: "Which statements about MO bond order are correct? Select all that apply.",
    type: "MULTI",
    topic: "Bond Order from Molecular Orbitals",
    explanation:
      "A higher bond order means a shorter, stronger bond; a zero bond order means no molecule; fractional bond orders (as in H₂⁺, bond order ½) are allowed; and adding antibonding electrons lowers the bond order. Bond order is not always a whole number, nor does it ignore antibonding electrons.",
    choices: [
      { text: "higher bond order gives a shorter bond", isCorrect: true },
      { text: "zero bond order means no stable molecule", isCorrect: true },
      { text: "fractional bond orders are possible", isCorrect: true },
      { text: "antibonding electrons lower the bond order", isCorrect: true },
      { text: "bond order must always be a whole number" },
      { text: "antibonding electrons are simply ignored" },
    ],
  },
  {
    stem: "True or False: The molecular ion O₂⁺ has a higher bond order, and therefore a shorter bond, than neutral O₂.",
    type: "TRUE_FALSE",
    topic: "Bond Order from Molecular Orbitals",
    explanation:
      "True. Removing an electron from an antibonding π* orbital raises the bond order from 2 to 2.5, shortening and strengthening the bond; O₂⁺ (the dioxygenyl cation) indeed has a measurably shorter bond than O₂.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "For the early period-2 diatomics (Li₂ to N₂), s–p mixing raises the σ2p orbital so that it lies:",
    topic: "Period-2 Homonuclear Diatomics",
    explanation:
      "In B₂, C₂ and N₂, s–p mixing pushes σ2p above the π2p pair, giving the order π2p < σ2p; from O₂ onward the mixing is weaker and the normal order σ2p < π2p returns.",
    choices: [
      { text: "above the π2p orbitals", isCorrect: true },
      { text: "far below all 2p orbitals" },
      { text: "below the σ2s orbital" },
      { text: "exactly on the π*2p level" },
    ],
  },
  {
    stem: "The molecule B₂ is found to be paramagnetic with two unpaired electrons because, with s–p mixing, its highest electrons occupy:",
    topic: "Period-2 Homonuclear Diatomics",
    explanation:
      "Because π2p lies below σ2p in B₂, its last two electrons enter the two degenerate π2p orbitals singly (Hund's rule), leaving two unpaired spins; this paramagnetism is direct evidence for the s–p-mixed ordering.",
    choices: [
      { text: "the two π2p orbitals singly", isCorrect: true },
      { text: "the σ2p orbital as a filled pair" },
      { text: "the σ*2s orbital" },
      { text: "the π*2p orbitals as a pair" },
    ],
  },
  {
    stem: "The carbon molecule C₂ has a bond order of 2 and is diamagnetic because its configuration ends in:",
    topic: "Period-2 Homonuclear Diatomics",
    explanation:
      "In C₂ the four highest electrons fill the two π2p orbitals completely ((π2p)⁴), giving bond order 2 with all electrons paired; unusually, its bonding is essentially two π bonds and no net σ2p bond.",
    choices: [
      { text: "(π2p)⁴, all electrons paired", isCorrect: true },
      { text: "(σ2p)² with two unpaired spins" },
      { text: "(π*2p)² with two unpaired" },
      { text: "(σ*2s)² only" },
    ],
  },
  {
    stem: "Down the period-2 diatomics the bond order rises to a maximum at N₂ and then falls; N₂ has bond order:",
    topic: "Period-2 Homonuclear Diatomics",
    explanation:
      "N₂ fills all bonding orbitals through σ2p with empty π*, giving bond order ½(8 − 2) = 3; this maximum triple bond is why N₂ has the highest bond energy of the series.",
    choices: [
      { text: "3", isCorrect: true },
      { text: "2" },
      { text: "1" },
      { text: "2.5" },
    ],
  },
  {
    stem: "The trend in bond dissociation energy across Li₂, B₂, C₂, N₂, O₂, F₂ peaks at N₂ because:",
    topic: "Period-2 Homonuclear Diatomics",
    explanation:
      "Bond energy tracks bond order, which climbs to 3 at N₂ then falls as electrons enter π*2p orbitals in O₂ and F₂; the maximal bond order at nitrogen gives it the strongest bond in the row.",
    choices: [
      { text: "its bond order is the highest, at 3", isCorrect: true },
      { text: "it has the most antibonding electrons" },
      { text: "it is the heaviest of the molecules" },
      { text: "it has the largest atomic radius" },
    ],
  },
  {
    stem: "The difluorine molecule F₂ has bond order 1 and is diamagnetic because its π*2p orbitals are:",
    topic: "Period-2 Homonuclear Diatomics",
    explanation:
      "In F₂ both π*2p orbitals are completely filled ((π*2p)⁴), cancelling two of the π bonds and leaving only the σ2p bond; all electrons are paired, so F₂ is diamagnetic with a single bond.",
    choices: [
      { text: "completely filled, paired electrons", isCorrect: true },
      { text: "half filled with unpaired electrons" },
      { text: "completely empty" },
      { text: "higher in energy than σ*2p" },
    ],
  },
  {
    stem: "Which period-2 homonuclear diatomics are paramagnetic? Select all that apply.",
    type: "MULTI",
    topic: "Period-2 Homonuclear Diatomics",
    explanation:
      "B₂ and O₂ each have two unpaired electrons and are paramagnetic; N₂, C₂, F₂ and Li₂ have all their electrons paired and are diamagnetic. The paramagnetism of B₂ and O₂ is a key MO prediction.",
    choices: [
      { text: "B₂", isCorrect: true },
      { text: "O₂", isCorrect: true },
      { text: "N₂" },
      { text: "C₂" },
      { text: "F₂" },
      { text: "Li₂" },
    ],
  },
  {
    stem: "True or False: The reversal of σ2p and π2p ordering between N₂ and O₂ is caused by weaker s–p mixing in oxygen.",
    type: "TRUE_FALSE",
    topic: "Period-2 Homonuclear Diatomics",
    explanation:
      "True. As nuclear charge rises, the 2s and 2p orbitals separate in energy, so s–p mixing weakens; by O₂ the σ2p orbital drops below π2p, restoring the 'normal' ordering used for O₂ and F₂.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Molecular oxygen O₂ is paramagnetic, a fact famously explained by MO theory because its two highest electrons occupy:",
    topic: "The Paramagnetism of O₂",
    explanation:
      "O₂ places its last two electrons singly in the two degenerate π*2p orbitals, leaving two unpaired spins and making the molecule paramagnetic; the simple Lewis structure O=O cannot account for this.",
    choices: [
      { text: "the two π*2p orbitals, one each", isCorrect: true },
      { text: "a single σ2p orbital as a pair" },
      { text: "the σ*2s orbital as a pair" },
      { text: "the σ2p and σ*2p together" },
    ],
  },
  {
    stem: "The molecular-orbital bond order of O₂ is:",
    topic: "The Paramagnetism of O₂",
    explanation:
      "O₂ has 8 bonding and 4 antibonding electrons in the valence set, giving bond order = ½(8 − 4) = 2; this double-bond order coexists with two unpaired electrons, which only MO theory captures.",
    choices: [
      { text: "2", isCorrect: true },
      { text: "1" },
      { text: "3" },
      { text: "2.5" },
    ],
  },
  {
    stem: "Liquid oxygen is observed to stick between the poles of a magnet. This behaviour is direct evidence that O₂:",
    topic: "The Paramagnetism of O₂",
    explanation:
      "The attraction of liquid O₂ to a magnetic field demonstrates paramagnetism, which requires unpaired electrons; MO theory predicts exactly two, in the π*2p orbitals, matching the observation and vindicating the model.",
    choices: [
      { text: "has unpaired electrons", isCorrect: true },
      { text: "has only paired electrons" },
      { text: "is ionically bonded" },
      { text: "contains no π bonding" },
    ],
  },
  {
    stem: "Why does the simple Lewis structure O=O fail where MO theory succeeds for oxygen?",
    topic: "The Paramagnetism of O₂",
    explanation:
      "The Lewis picture pairs all electrons and predicts a diamagnetic molecule, contradicting experiment; MO theory correctly places two electrons unpaired in π*2p, explaining both the double-bond order and the paramagnetism.",
    choices: [
      { text: "it wrongly predicts all electrons paired", isCorrect: true },
      { text: "it predicts a bond order of three" },
      { text: "it predicts an ionic molecule" },
      { text: "it gives too many unpaired electrons" },
    ],
  },
  {
    stem: "Which statements about O₂ from MO theory are correct? Select all that apply.",
    type: "MULTI",
    topic: "The Paramagnetism of O₂",
    explanation:
      "O₂ has a bond order of 2, two unpaired electrons in the π*2p orbitals, and is paramagnetic, a result the Lewis structure misses; it is not diamagnetic, and its bond order is not three.",
    choices: [
      { text: "its bond order is 2", isCorrect: true },
      { text: "it has two unpaired electrons", isCorrect: true },
      { text: "it is paramagnetic", isCorrect: true },
      { text: "the Lewis structure misses this", isCorrect: true },
      { text: "it is wrongly said to be diamagnetic" },
      { text: "the bond order is wrongly given as 3" },
    ],
  },
  {
    stem: "Using the O₂/F₂ ordering, the valence configuration of O₂ is (σ2s)²(σ*2s)²(σ2p)²(π2p)⁴(π*2p)². Its bond order is:",
    topic: "MO Electron Configurations",
    explanation:
      "Counting 8 bonding electrons (σ2s, σ2p, π2p) and 4 antibonding (σ*2s, π*2p) gives bond order = ½(8 − 4) = 2, with the two π*2p electrons unpaired.",
    choices: [
      { text: "2", isCorrect: true },
      { text: "1" },
      { text: "3" },
      { text: "2.5" },
    ],
  },
  {
    stem: "For N₂, with s–p mixing, the correct filling of the highest occupied orbitals is:",
    topic: "MO Electron Configurations",
    explanation:
      "In N₂ the π2p pair lies below σ2p, so the order filled is (π2p)⁴(σ2p)², with empty π*2p; this gives bond order 3 and a diamagnetic molecule.",
    choices: [
      { text: "(π2p)⁴(σ2p)²", isCorrect: true },
      { text: "(σ2p)²(π2p)⁴(π*2p)²" },
      { text: "(σ2p)²(π*2p)⁴" },
      { text: "(π*2p)⁴(σ2p)²" },
    ],
  },
  {
    stem: "The number of unpaired electrons in the ground state of the nitrogen molecule N₂ is:",
    topic: "MO Electron Configurations",
    explanation:
      "All of nitrogen's molecular orbitals up to σ2p are doubly occupied and π*2p is empty, so every electron is paired; N₂ is diamagnetic with zero unpaired electrons, consistent with its triple bond.",
    choices: [
      { text: "0", isCorrect: true },
      { text: "2" },
      { text: "1" },
      { text: "3" },
    ],
  },
  {
    stem: "Writing MO configurations, the core electrons are often abbreviated 'KK'. This represents:",
    topic: "MO Electron Configurations",
    explanation:
      "'KK' stands for the filled K shells of the two atoms, i.e. the (σ1s)²(σ*1s)² pair of core orbitals that contribute no net bonding; abbreviating them focuses attention on the valence orbitals.",
    choices: [
      { text: "the filled 1s core orbitals of both atoms", isCorrect: true },
      { text: "the two π*2p antibonding orbitals" },
      { text: "the highest occupied valence orbitals" },
      { text: "a pair of nonbonding lone pairs" },
    ],
  },
  {
    stem: "The peroxide ion O₂²⁻ has bond order 1 because, relative to O₂, it has:",
    topic: "MO Electron Configurations",
    explanation:
      "Adding two electrons fills both π*2p orbitals, so bond order drops to ½(8 − 6) = 1; the O–O bond of peroxide is correspondingly longer and weaker than in O₂.",
    choices: [
      { text: "both π*2p orbitals now filled", isCorrect: true },
      { text: "empty π*2p orbitals" },
      { text: "an extra σ2p bond" },
      { text: "distinctly fewer bonding electrons" },
    ],
  },
  {
    stem: "Which statements about MO configurations and their consequences are correct? Select all that apply.",
    type: "MULTI",
    topic: "MO Electron Configurations",
    explanation:
      "N₂ is diamagnetic with bond order 3, O₂ is paramagnetic with bond order 2, and filling π*2p lowers bond order down O₂ → O₂²⁻; N₂ is not paramagnetic, and O₂ does not have all electrons paired.",
    choices: [
      { text: "N₂ is diamagnetic, bond order 3", isCorrect: true },
      { text: "O₂ is paramagnetic, bond order 2", isCorrect: true },
      { text: "filling π*2p lowers the bond order", isCorrect: true },
      { text: "peroxide O₂²⁻ has bond order 1", isCorrect: true },
      { text: "N₂ is wrongly called paramagnetic" },
      { text: "O₂ has all its electrons paired" },
    ],
  },
  {
    stem: "True or False: Because it has empty π*2p orbitals and a bond order of 3, the nitrogen molecule N₂ is diamagnetic.",
    type: "TRUE_FALSE",
    topic: "MO Electron Configurations",
    explanation:
      "True. With all electrons paired in bonding orbitals and none in π*2p, N₂ has no unpaired spins and is diamagnetic; its high bond order also gives it an exceptionally strong, short bond.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Carbon monoxide, CO, is isoelectronic with N₂ and therefore has a bond order of:",
    topic: "Heteronuclear Diatomics",
    explanation:
      "CO has 14 electrons like N₂, filling the same orbitals to give bond order 3; this strong triple bond and the resulting short bond length make CO one of the most tightly bound diatomic molecules.",
    choices: [
      { text: "3", isCorrect: true },
      { text: "2" },
      { text: "1" },
      { text: "2.5" },
    ],
  },
  {
    stem: "In a heteronuclear diatomic such as HF, the bonding molecular orbital lies closer in energy to, and has more character of, the:",
    topic: "Heteronuclear Diatomics",
    explanation:
      "In HF the fluorine 2p orbital is much lower in energy than the hydrogen 1s, so the bonding MO is mostly fluorine in character; this uneven mixing puts more electron density on fluorine, giving the bond its polarity.",
    choices: [
      { text: "more electronegative atom (fluorine)", isCorrect: true },
      { text: "less electronegative atom (hydrogen)" },
      { text: "atom with the larger radius" },
      { text: "atom with more protons only if metallic" },
    ],
  },
  {
    stem: "The nitric oxide molecule NO has one electron in a π*2p orbital, giving it a bond order of:",
    topic: "Heteronuclear Diatomics",
    explanation:
      "NO has 11 valence electrons, one of them in a π*2p orbital, so bond order = ½(8 − 3) = 2.5; this odd electron makes NO a paramagnetic radical, and losing it (to NO⁺) raises the bond order to 3.",
    choices: [
      { text: "2.5", isCorrect: true },
      { text: "2.0" },
      { text: "3.0" },
      { text: "1.5" },
    ],
  },
  {
    stem: "Removing an electron from NO to give NO⁺ changes the bond order to:",
    topic: "Heteronuclear Diatomics",
    explanation:
      "The electron lost comes from the antibonding π*2p orbital, so bond order rises from 2.5 to 3; NO⁺ (nitrosonium), isoelectronic with N₂ and CO, therefore has a stronger, shorter bond than NO.",
    choices: [
      { text: "3, a stronger bond", isCorrect: true },
      { text: "2, a weaker bond" },
      { text: "1.5, a much weaker bond" },
      { text: "unchanged at 2.5" },
    ],
  },
  {
    stem: "The polarity of the bonding molecular orbital in a heteronuclear diatomic arises because the two atoms have:",
    topic: "Heteronuclear Diatomics",
    explanation:
      "Different electronegativities give the atomic orbitals different energies, so the bonding MO mixes them unequally and concentrates density on the lower-energy (more electronegative) atom; equal contributions occur only for identical atoms.",
    choices: [
      { text: "atomic orbitals of unequal energy", isCorrect: true },
      { text: "exactly the same orbital energies" },
      { text: "no orbital overlap at all" },
      { text: "identical electronegativities" },
    ],
  },
  {
    stem: "Which species are isoelectronic with N₂ and share its bond order of 3? Select all that apply.",
    type: "MULTI",
    topic: "Heteronuclear Diatomics",
    explanation:
      "CO, CN⁻ and NO⁺ each have 14 electrons and a triple bond like N₂; NO has 15 electrons (bond order 2.5) and O₂ has 16 (bond order 2), so neither belongs to the set.",
    choices: [
      { text: "CO", isCorrect: true },
      { text: "CN⁻", isCorrect: true },
      { text: "NO⁺", isCorrect: true },
      { text: "NO" },
      { text: "O₂" },
      { text: "F₂" },
    ],
  },
  {
    stem: "A key advantage of molecular-orbital theory over the simple valence-bond/Lewis picture is that it:",
    topic: "Valence Bond vs MO Theory",
    explanation:
      "MO theory treats electrons as delocalised over the whole molecule, so it naturally predicts properties like the paramagnetism of O₂ and the existence of odd-electron species that a localised Lewis structure cannot.",
    choices: [
      { text: "explains delocalisation and paramagnetism", isCorrect: true },
      { text: "always uses localised electron pairs" },
      { text: "ignores antibonding interactions" },
      { text: "cannot handle diatomic molecules" },
    ],
  },
  {
    stem: "Valence-bond theory describes a covalent bond as arising from:",
    topic: "Valence Bond vs MO Theory",
    explanation:
      "In valence-bond theory a bond forms by the overlap of two atomic orbitals, each contributing one electron, giving a localised shared pair; hybridisation extends this picture to shapes, but electrons stay localised between specific atoms.",
    choices: [
      { text: "overlap of two singly filled orbitals", isCorrect: true },
      { text: "delocalisation over all the atoms" },
      { text: "complete transfer of an electron" },
      { text: "promotion of an electron to a d orbital" },
    ],
  },
  {
    stem: "Both valence-bond and molecular-orbital theories agree that, in forming a bond, electron density is:",
    topic: "Valence Bond vs MO Theory",
    explanation:
      "Whatever the model, a covalent bond concentrates electron density between the nuclei, lowering the energy; the theories differ mainly in whether that density is described as localised (VB) or delocalised over molecular orbitals (MO).",
    choices: [
      { text: "increased between the bonded nuclei", isCorrect: true },
      { text: "removed from between the nuclei" },
      { text: "confined to the antibonding region" },
      { text: "unchanged from the free atoms" },
    ],
  },
  {
    stem: "True or False: The paramagnetism of O₂ is more naturally explained by molecular-orbital theory than by a simple Lewis (valence-bond) structure.",
    type: "TRUE_FALSE",
    topic: "Valence Bond vs MO Theory",
    explanation:
      "True. The Lewis structure pairs all electrons and predicts a diamagnetic O₂, whereas MO theory places two electrons singly in π*2p; the observed paramagnetism is a classic success of the MO approach.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Metallic bonding is often pictured as a lattice of positive metal ions immersed in:",
    topic: "Metallic Bonding & Band Theory",
    explanation:
      "The 'electron sea' model views a metal as cations held together by a cloud of delocalised valence electrons free to move throughout the lattice; this mobility accounts for electrical and thermal conductivity and for metallic lustre.",
    choices: [
      { text: "a sea of delocalised electrons", isCorrect: true },
      { text: "shared, localised electron pairs" },
      { text: "fixed, immobile electrons" },
      { text: "a lattice of negative ions" },
    ],
  },
  {
    stem: "In band theory, the delocalised molecular orbitals of a metal merge into:",
    topic: "Metallic Bonding & Band Theory",
    explanation:
      "As enormous numbers of atomic orbitals combine, their MOs become so closely spaced in energy that they form a continuous band; the highest occupied band and the lowest empty band determine the electrical behaviour of the solid.",
    choices: [
      { text: "continuous bands of closely spaced levels", isCorrect: true },
      { text: "a few discrete molecular orbitals" },
      { text: "isolated atomic energy levels" },
      { text: "only bonding orbitals, no antibonding" },
    ],
  },
  {
    stem: "Metals conduct electricity because their valence band is:",
    topic: "Metallic Bonding & Band Theory",
    explanation:
      "A metal has a partly filled band (or overlapping bands), so electrons can move into nearby empty levels under an applied field with almost no energy barrier; this ease of electron motion is the essence of metallic conduction.",
    choices: [
      { text: "partly filled, empty levels just above", isCorrect: true },
      { text: "completely full with a large gap above" },
      { text: "completely empty of electrons" },
      { text: "separated from all other bands" },
    ],
  },
  {
    stem: "The malleability and ductility of metals are explained by the electron-sea/band model because:",
    topic: "Metallic Bonding & Band Theory",
    explanation:
      "The non-directional bonding lets layers of cations slide past one another while the mobile electron sea keeps them bonded, so metals deform without shattering; this contrasts with brittle ionic solids where sliding aligns like charges.",
    choices: [
      { text: "ion layers slide while staying bonded", isCorrect: true },
      { text: "the bonds are rigid and directional" },
      { text: "the electrons are locked in place" },
      { text: "the ions are covalently linked" },
    ],
  },
  {
    stem: "Metallic bond strength (and hence melting point) tends to increase with:",
    topic: "Metallic Bonding & Band Theory",
    explanation:
      "More delocalised electrons per atom and smaller, more highly charged cations strengthen metallic bonding, raising melting points; this is why transition metals, contributing several electrons, are generally much harder and higher-melting than the alkali metals.",
    choices: [
      { text: "more delocalised electrons per atom", isCorrect: true },
      { text: "fewer valence electrons per atom" },
      { text: "larger cations with low charge" },
      { text: "weaker attraction to the electron sea" },
    ],
  },
  {
    stem: "Which properties of metals does the electron-sea / band model explain? Select all that apply.",
    type: "MULTI",
    topic: "Metallic Bonding & Band Theory",
    explanation:
      "The mobile delocalised electrons account for high electrical and thermal conductivity, metallic lustre, and malleability; the model does not make metals brittle or electrically insulating, which are properties of other bonding types.",
    choices: [
      { text: "high electrical conductivity", isCorrect: true },
      { text: "high thermal conductivity", isCorrect: true },
      { text: "metallic lustre", isCorrect: true },
      { text: "malleability and ductility", isCorrect: true },
      { text: "brittleness like ionic solids" },
      { text: "behaviour as an insulator" },
    ],
  },
  {
    stem: "True or False: In a metal, the closely spaced molecular orbitals form energy bands, and conduction occurs when electrons move into empty levels within or just above the filled band.",
    type: "TRUE_FALSE",
    topic: "Metallic Bonding & Band Theory",
    explanation:
      "True. Band theory replaces discrete levels with near-continuous bands; because the conduction levels are immediately accessible in a metal, even a tiny field sets electrons moving, giving the characteristic high conductivity of metals.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "In band-theory terms, an electrical insulator is a solid in which:",
    topic: "Band Gap: Conductors, Semiconductors, Insulators",
    explanation:
      "An insulator has a completely filled valence band separated from an empty conduction band by a large energy gap; electrons cannot easily cross it, so almost no current flows under ordinary conditions.",
    choices: [
      { text: "a large gap between full and empty bands", isCorrect: true },
      { text: "the valence band is only partly filled" },
      { text: "filled and empty bands overlap" },
      { text: "there are no electrons in any band" },
    ],
  },
  {
    stem: "A semiconductor differs from an insulator chiefly in that its band gap is:",
    topic: "Band Gap: Conductors, Semiconductors, Insulators",
    explanation:
      "A semiconductor has a small band gap (roughly 0.5–3 eV), so thermal energy can promote some electrons into the conduction band; an insulator's gap is far larger, blocking such promotion at ordinary temperatures.",
    choices: [
      { text: "small enough for thermal promotion", isCorrect: true },
      { text: "far larger than that of an insulator" },
      { text: "exactly zero, as in a metal" },
      { text: "negative in value" },
    ],
  },
  {
    stem: "A conductor (metal) is characterised in band theory by:",
    topic: "Band Gap: Conductors, Semiconductors, Insulators",
    explanation:
      "In a metal the valence and conduction bands overlap or the valence band is only partly filled, so there is no gap to cross; electrons move freely into adjacent empty levels, giving high conductivity.",
    choices: [
      { text: "overlapping or partly filled bands", isCorrect: true },
      { text: "a large gap between full and empty bands" },
      { text: "a completely empty valence band" },
      { text: "a small but finite band gap" },
    ],
  },
  {
    stem: "The band gap of silicon is about 1.1 eV, which classifies it as a:",
    topic: "Band Gap: Conductors, Semiconductors, Insulators",
    explanation:
      "Silicon's modest 1.1 eV gap allows limited thermal excitation of electrons into the conduction band, the defining behaviour of a semiconductor; this property underlies its central role in electronic devices.",
    choices: [
      { text: "semiconductor", isCorrect: true },
      { text: "good conductor" },
      { text: "perfect insulator" },
      { text: "superconductor" },
    ],
  },
  {
    stem: "Unlike a metal, the electrical conductivity of a pure (intrinsic) semiconductor:",
    topic: "Band Gap: Conductors, Semiconductors, Insulators",
    explanation:
      "Heating a semiconductor promotes more electrons across the small gap, so its conductivity rises with temperature; a metal behaves oppositely, its conductivity falling as increased lattice vibration scatters the electrons.",
    choices: [
      { text: "increases as temperature rises", isCorrect: true },
      { text: "decreases as temperature rises" },
      { text: "is independent of temperature" },
      { text: "drops abruptly to zero when warmed" },
    ],
  },
  {
    stem: "When an electron is promoted across the band gap of a semiconductor, it leaves behind in the valence band a:",
    topic: "Band Gap: Conductors, Semiconductors, Insulators",
    explanation:
      "The vacancy left behind is a positively charged 'hole' that can also move as neighbouring electrons shift into it; conduction in semiconductors thus involves both electrons in the conduction band and holes in the valence band.",
    choices: [
      { text: "positively charged hole", isCorrect: true },
      { text: "second free electron" },
      { text: "negative ion" },
      { text: "permanent lattice defect" },
    ],
  },
  {
    stem: "Diamond, with a band gap of about 5.5 eV, is best classified as:",
    topic: "Band Gap: Conductors, Semiconductors, Insulators",
    explanation:
      "The very large gap in diamond prevents thermal promotion of electrons at ordinary temperatures, so it behaves as an electrical insulator despite being a covalent network solid like silicon, whose smaller gap makes it a semiconductor.",
    choices: [
      { text: "an electrical insulator", isCorrect: true },
      { text: "a metallic conductor" },
      { text: "an intrinsic semiconductor" },
      { text: "a superconductor" },
    ],
  },
  {
    stem: "The energy needed to excite an electron from the top of the valence band to the bottom of the conduction band is called the:",
    topic: "Band Gap: Conductors, Semiconductors, Insulators",
    explanation:
      "This energy is the band gap, Eg; its size determines whether a material conducts, semiconducts, or insulates, and it sets the minimum photon energy a semiconductor can absorb or emit.",
    choices: [
      { text: "band gap energy", isCorrect: true },
      { text: "ionisation energy" },
      { text: "lattice energy" },
      { text: "work function" },
    ],
  },
  {
    stem: "Which statements correctly distinguish conductors, semiconductors, and insulators? Select all that apply.",
    type: "MULTI",
    topic: "Band Gap: Conductors, Semiconductors, Insulators",
    explanation:
      "Conductors have overlapping or partly filled bands, semiconductors a small gap, and insulators a large gap; semiconductor conductivity rises with temperature. Insulators do not have zero gap, and metals do not gain conductivity on heating.",
    choices: [
      { text: "conductors have no band gap", isCorrect: true },
      { text: "semiconductors have a small gap", isCorrect: true },
      { text: "insulators have a large gap", isCorrect: true },
      { text: "semiconductors conduct more when heated", isCorrect: true },
      { text: "insulators have a zero energy band gap" },
      { text: "metals conduct much better when heated" },
    ],
  },
  {
    stem: "True or False: The conductivity of a pure semiconductor increases with temperature, whereas that of a metal decreases.",
    type: "TRUE_FALSE",
    topic: "Band Gap: Conductors, Semiconductors, Insulators",
    explanation:
      "True. In a semiconductor, heat promotes more carriers across the small gap, raising conductivity; in a metal, the carrier number is fixed but hotter lattice vibrations scatter electrons more, so its conductivity falls with temperature.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Doping silicon with a group-15 element such as phosphorus produces an n-type semiconductor because phosphorus provides:",
    topic: "Semiconductor Doping",
    explanation:
      "Each phosphorus atom has one more valence electron than silicon, donating an extra electron to the conduction band just below it; these negative carriers make the material n-type, and phosphorus is called a donor.",
    choices: [
      { text: "an extra, easily freed electron", isCorrect: true },
      { text: "an extra positive hole instead" },
      { text: "one fewer valence electron" },
      { text: "no real change in the carriers" },
    ],
  },
  {
    stem: "Doping silicon with a group-13 element such as boron gives a p-type semiconductor because boron introduces:",
    topic: "Semiconductor Doping",
    explanation:
      "Boron has one fewer valence electron than silicon, creating a vacancy or 'hole' in the valence band that accepts electrons; conduction by these positive holes makes the material p-type, and boron is an acceptor.",
    choices: [
      { text: "a positive hole (an acceptor level)", isCorrect: true },
      { text: "an extra free electron" },
      { text: "a donor level below the conduction band" },
      { text: "a filled conduction band" },
    ],
  },
  {
    stem: "In an n-type semiconductor, the majority charge carriers are:",
    topic: "Semiconductor Doping",
    explanation:
      "Donor atoms supply extra electrons to the conduction band, so electrons are the majority carriers in n-type material; the small number of holes present are the minority carriers.",
    choices: [
      { text: "electrons", isCorrect: true },
      { text: "positive holes" },
      { text: "cations" },
      { text: "photons" },
    ],
  },
  {
    stem: "In a p-type semiconductor, the majority charge carriers are:",
    topic: "Semiconductor Doping",
    explanation:
      "Acceptor atoms create holes in the valence band, so positive holes are the majority carriers in p-type material, with electrons as the minority carriers; movement of holes carries the current.",
    choices: [
      { text: "positive holes", isCorrect: true },
      { text: "free electrons" },
      { text: "negative anions" },
      { text: "neutral atoms" },
    ],
  },
  {
    stem: "Doping raises the conductivity of a semiconductor because it:",
    topic: "Semiconductor Doping",
    explanation:
      "Introducing donor or acceptor levels within the gap supplies extra carriers (electrons or holes) that are easily activated, greatly increasing conductivity even at low doping; this controlled tuning is what makes semiconductor devices possible.",
    choices: [
      { text: "adds carriers via levels in the gap", isCorrect: true },
      { text: "widens the band gap greatly" },
      { text: "removes all charge carriers" },
      { text: "turns the solid into an insulator" },
    ],
  },
  {
    stem: "A donor level created by an n-type dopant lies:",
    topic: "Semiconductor Doping",
    explanation:
      "The donor level sits just below the conduction band, so little energy is needed to release its electron into that band; this small activation energy is why even light doping sharply raises conductivity.",
    choices: [
      { text: "just below the conduction band", isCorrect: true },
      { text: "just above the valence band" },
      { text: "in the middle of the gap only" },
      { text: "below the valence band" },
    ],
  },
  {
    stem: "A p–n junction, the basis of a diode, is formed by joining:",
    topic: "Semiconductor Doping",
    explanation:
      "Bringing p-type and n-type regions together makes a p–n junction, which conducts easily in one direction but not the other; this rectifying behaviour is the foundation of diodes, transistors and many other devices.",
    choices: [
      { text: "a p-type to an n-type region", isCorrect: true },
      { text: "two identical n-type regions" },
      { text: "a metal to an insulator" },
      { text: "two insulators together" },
    ],
  },
  {
    stem: "Which statements about semiconductor doping are correct? Select all that apply.",
    type: "MULTI",
    topic: "Semiconductor Doping",
    explanation:
      "Group-15 dopants donate electrons for n-type material, group-13 dopants create holes for p-type, doping raises conductivity, and a p–n junction rectifies current; n-type carriers are not holes, and doping does not lower conductivity.",
    choices: [
      { text: "group-15 dopants give n-type material", isCorrect: true },
      { text: "group-13 dopants give p-type material", isCorrect: true },
      { text: "doping increases conductivity", isCorrect: true },
      { text: "a p–n junction rectifies current", isCorrect: true },
      { text: "n-type majority carriers are holes" },
      { text: "doping lowers conductivity" },
    ],
  },
  {
    stem: "In benzene, C₆H₆, the six π electrons are described as delocalised because they:",
    topic: "Delocalized π Systems",
    explanation:
      "Each carbon contributes one p orbital perpendicular to the ring; these overlap all around, so the six π electrons spread over the whole ring rather than sitting in three fixed double bonds, giving equal C–C bonds.",
    choices: [
      { text: "spread over all six carbon atoms", isCorrect: true },
      { text: "are fixed in three separate double bonds" },
      { text: "are localised on a single carbon" },
      { text: "occupy the σ framework only" },
    ],
  },
  {
    stem: "All six carbon-carbon bonds in benzene are found to be identical, with a length between single and double bonds, because of:",
    topic: "Delocalized π Systems",
    explanation:
      "π-electron delocalisation averages the bonding over the ring, so every C–C bond has the same intermediate length and bond order 1.5; this equivalence is a direct structural consequence of the delocalised system.",
    choices: [
      { text: "delocalisation of the π electrons", isCorrect: true },
      { text: "rapid rotation of the molecule" },
      { text: "alternating single and double bonds" },
      { text: "hydrogen bonding within the ring" },
    ],
  },
  {
    stem: "The extra thermodynamic stability of benzene relative to a hypothetical 'cyclohexatriene' is called:",
    topic: "Delocalized π Systems",
    explanation:
      "Delocalising the π electrons lowers the energy below that expected for three isolated double bonds; this resonance (delocalisation) energy, around 150 kJ mol⁻¹ for benzene, is the origin of aromatic stability.",
    choices: [
      { text: "resonance energy", isCorrect: true },
      { text: "crystal lattice energy" },
      { text: "first ionisation energy" },
      { text: "aqueous hydration energy" },
    ],
  },
  {
    stem: "A conjugated system is one that contains:",
    topic: "Delocalized π Systems",
    explanation:
      "Conjugation means alternating single and multiple bonds (or p orbitals) that allow π electrons to delocalise across several atoms; the overlapping p orbitals form extended molecular orbitals lower in energy than isolated double bonds.",
    choices: [
      { text: "alternating multiple/single bonds", isCorrect: true },
      { text: "only isolated single bonds present" },
      { text: "no π bonds present at all" },
      { text: "exclusively triple bonds only" },
    ],
  },
  {
    stem: "The allyl cation, CH₂=CH–CH₂⁺, is stabilised because its π system allows the positive charge to be:",
    topic: "Delocalized π Systems",
    explanation:
      "The three-carbon π system lets the empty p orbital conjugate with the double bond, spreading the positive charge over the two terminal carbons; this delocalisation makes the allyl cation far more stable than a simple primary cation.",
    choices: [
      { text: "spread over the terminal carbons", isCorrect: true },
      { text: "fixed only on the central carbon" },
      { text: "confined to a single atom" },
      { text: "removed from the molecule" },
    ],
  },
  {
    stem: "Graphite conducts electricity along its layers because each carbon is sp² hybridised, leaving:",
    topic: "Delocalized π Systems",
    explanation:
      "The unhybridised p orbital on every carbon forms a delocalised π system spread across each sheet; these mobile π electrons carry current along the layers, making graphite a good in-plane electrical conductor, unlike diamond.",
    choices: [
      { text: "a delocalised π system per layer", isCorrect: true },
      { text: "no free electrons at all present" },
      { text: "four localised single bonds" },
      { text: "an ionic lattice of carbons" },
    ],
  },
  {
    stem: "In molecular-orbital terms, a delocalised π system is built by combining:",
    topic: "Delocalized π Systems",
    explanation:
      "The parallel p orbitals on adjacent atoms combine into a set of π molecular orbitals extending over all the atoms; electrons fill the lower (bonding) members, giving the extended delocalised π cloud.",
    choices: [
      { text: "parallel p orbitals on neighbours", isCorrect: true },
      { text: "s orbitals pointing along the bonds" },
      { text: "the core 1s orbitals only" },
      { text: "hybrid sp³ orbitals alone" },
    ],
  },
  {
    stem: "Extending conjugation over more atoms generally lowers the energy gap between the highest occupied and lowest unoccupied π orbitals, which:",
    topic: "Delocalized π Systems",
    explanation:
      "A longer conjugated system has more closely spaced π levels, so the HOMO–LUMO gap shrinks and the wavelength of light absorbed lengthens; this is why extended dyes and pigments absorb visible light and appear coloured.",
    choices: [
      { text: "shifts absorption to longer wavelengths", isCorrect: true },
      { text: "shifts absorption to shorter wavelengths" },
      { text: "removes all colour" },
      { text: "has no effect on absorption" },
    ],
  },
  {
    stem: "Which species or materials owe key properties to a delocalised π system? Select all that apply.",
    type: "MULTI",
    topic: "Delocalized π Systems",
    explanation:
      "Benzene's equal bonds, the allyl cation's stability, and graphite's in-plane conductivity all stem from π delocalisation; methane and diamond are built from localised σ (sp³) bonds with no delocalised π system.",
    choices: [
      { text: "benzene's equal C–C bonds", isCorrect: true },
      { text: "the allyl cation's stability", isCorrect: true },
      { text: "graphite's in-plane conduction", isCorrect: true },
      { text: "the colour of conjugated dyes", isCorrect: true },
      { text: "methane's localised C–H single bonds" },
      { text: "the rigidity of the diamond lattice" },
    ],
  },
  {
    stem: "A paramagnetic substance is one that is attracted into a magnetic field because it contains:",
    topic: "Magnetic Properties",
    explanation:
      "Paramagnetism arises from unpaired electrons, whose magnetic moments align with an applied field and draw the substance in; the more unpaired electrons, the stronger the effect. O₂ and many transition-metal ions are paramagnetic.",
    choices: [
      { text: "one or more unpaired electrons", isCorrect: true },
      { text: "only fully paired electrons" },
      { text: "no electrons in the valence shell" },
      { text: "an even number of protons" },
    ],
  },
  {
    stem: "A diamagnetic substance, having only paired electrons, is:",
    topic: "Magnetic Properties",
    explanation:
      "With all electrons paired, the individual magnetic moments cancel, so a diamagnetic material is weakly repelled by a magnetic field; N₂ and Zn²⁺ are examples with no unpaired electrons.",
    choices: [
      { text: "weakly repelled by a magnetic field", isCorrect: true },
      { text: "strongly attracted to the field" },
      { text: "permanently magnetised" },
      { text: "unaffected because it has unpaired spins" },
    ],
  },
  {
    stem: "Whether a molecule is paramagnetic or diamagnetic can be decided by:",
    topic: "Magnetic Properties",
    explanation:
      "Counting unpaired electrons in the ground-state (molecular-orbital or d-orbital) configuration tells you the magnetism: any unpaired electrons make it paramagnetic, all paired makes it diamagnetic. This is how MO theory predicts O₂'s paramagnetism.",
    choices: [
      { text: "counting its unpaired electrons", isCorrect: true },
      { text: "measuring its total mass" },
      { text: "finding its boiling point" },
      { text: "counting only its protons" },
    ],
  },
  {
    stem: "The spin-only magnetic moment of a species with n unpaired electrons is given by μ = √(n(n+2)) in units of:",
    topic: "Magnetic Properties",
    explanation:
      "The spin-only formula μ = √(n(n+2)) gives the moment in Bohr magnetons (μB); for example, two unpaired electrons give √8 ≈ 2.83 μB, letting chemists deduce n from measured magnetism.",
    choices: [
      { text: "Bohr magnetons", isCorrect: true },
      { text: "kilojoules per mole" },
      { text: "electronvolts" },
      { text: "pascals" },
    ],
  },
  {
    stem: "How many unpaired electrons does molecular oxygen O₂, a paramagnetic molecule, have?",
    topic: "Magnetic Properties",
    explanation:
      "O₂ places one electron in each of its two π*2p orbitals, giving two unpaired electrons; this is why liquid oxygen is drawn into a magnetic field, and it corresponds to a spin-only moment of about 2.83 μB.",
    choices: [
      { text: "two", isCorrect: true },
      { text: "zero" },
      { text: "one" },
      { text: "four" },
    ],
  },
  {
    stem: "Ferromagnetic materials such as iron differ from ordinary paramagnets in that they:",
    topic: "Magnetic Properties",
    explanation:
      "In a ferromagnet the unpaired spins align cooperatively within domains and stay aligned, giving strong, permanent magnetism; an ordinary paramagnet only aligns weakly while the field is applied and loses it once removed.",
    choices: [
      { text: "retain permanent magnetic alignment", isCorrect: true },
      { text: "have no unpaired electrons" },
      { text: "are repelled by magnetic fields" },
      { text: "cannot be magnetised at all" },
    ],
  },
  {
    stem: "A transition-metal complex found to have four unpaired electrons is:",
    topic: "Magnetic Properties",
    explanation:
      "Four unpaired electrons give a substantial spin-only moment (μ = √24 ≈ 4.90 μB) and clear paramagnetism; the number of unpaired electrons, set by the d-electron count and ligand field, thus fixes the magnetic behaviour.",
    choices: [
      { text: "strongly paramagnetic", isCorrect: true },
      { text: "diamagnetic" },
      { text: "non-magnetic" },
      { text: "weakly repelled by a field" },
    ],
  },
  {
    stem: "A species is diamagnetic only when:",
    topic: "Magnetic Properties",
    explanation:
      "Diamagnetism requires every electron to be paired, so the net spin and magnetic moment are zero; the presence of even a single unpaired electron makes a substance paramagnetic instead.",
    choices: [
      { text: "all of its electrons are paired", isCorrect: true },
      { text: "it has one unpaired electron" },
      { text: "it has an odd electron count" },
      { text: "it contains transition metals" },
    ],
  },
  {
    stem: "Which statements about magnetism are correct? Select all that apply.",
    type: "MULTI",
    topic: "Magnetic Properties",
    explanation:
      "Unpaired electrons cause paramagnetism (attraction), fully paired electrons give diamagnetism (weak repulsion), the moment follows μ = √(n(n+2)), and O₂ has two unpaired electrons; paramagnets are not repelled, and diamagnets do not have unpaired electrons.",
    choices: [
      { text: "unpaired electrons cause paramagnetism", isCorrect: true },
      { text: "paired-only electrons give diamagnetism", isCorrect: true },
      { text: "moment follows μ = √(n(n+2))", isCorrect: true },
      { text: "O₂ has two unpaired electrons", isCorrect: true },
      { text: "paramagnetic species are repelled by fields" },
      { text: "diamagnetic species have unpaired electrons" },
    ],
  },
  {
    stem: "A light-emitting diode (LED) produces light when electrons and holes recombine across a semiconductor's band gap, so the colour emitted depends on the:",
    topic: "Applications of Bonding & Band Theory",
    explanation:
      "The photon energy released on recombination equals the band gap, and E = hν fixes its wavelength; choosing semiconductors of different band gap therefore tunes an LED's colour from infrared through to blue.",
    choices: [
      { text: "size of the band gap", isCorrect: true },
      { text: "length of the connecting wires" },
      { text: "temperature of the room only" },
      { text: "mass of the semiconductor" },
    ],
  },
  {
    stem: "A photovoltaic (solar) cell generates electricity when photons with energy greater than the band gap:",
    topic: "Applications of Bonding & Band Theory",
    explanation:
      "Absorbed photons promote electrons across the gap, creating electron–hole pairs that the built-in field of a p–n junction separates into a current; only photons above the band-gap energy can drive this process.",
    choices: [
      { text: "promote electrons across the band gap", isCorrect: true },
      { text: "are reflected without absorption" },
      { text: "cool the semiconductor down" },
      { text: "fill the valence band completely" },
    ],
  },
  {
    stem: "A superconductor is a material that, below a critical temperature Tc, exhibits:",
    topic: "Applications of Bonding & Band Theory",
    explanation:
      "Below Tc a superconductor loses all electrical resistance and expels magnetic fields (the Meissner effect); current flows without loss, a property exploited in powerful electromagnets for MRI and research.",
    choices: [
      { text: "zero electrical resistance", isCorrect: true },
      { text: "greatly increased resistance" },
      { text: "a very large band gap" },
      { text: "permanent loss of conductivity" },
    ],
  },
  {
    stem: "The transistor, the basis of modern electronics, is fundamentally a device built from:",
    topic: "Applications of Bonding & Band Theory",
    explanation:
      "A transistor is made by combining doped n-type and p-type semiconductor regions so that a small voltage controls a larger current; this switching and amplifying action, repeated billions of times, powers integrated circuits.",
    choices: [
      { text: "doped semiconductor regions", isCorrect: true },
      { text: "pure insulating materials only" },
      { text: "superconducting wires" },
      { text: "ionic salts" },
    ],
  },
  {
    stem: "A thermistor, whose resistance falls sharply as it warms, exploits the fact that a semiconductor's conductivity:",
    topic: "Applications of Bonding & Band Theory",
    explanation:
      "Because heating a semiconductor promotes more carriers across the gap, its resistance drops as temperature rises; thermistors use this strong temperature dependence to sense and measure temperature.",
    choices: [
      { text: "rises steeply with temperature", isCorrect: true },
      { text: "falls steeply with temperature" },
      { text: "does not depend on temperature" },
      { text: "is fixed by doping alone" },
    ],
  },
  {
    stem: "Graphene, a single sheet of sp² carbon, is an outstanding electrical conductor because it has:",
    topic: "Applications of Bonding & Band Theory",
    explanation:
      "Every carbon in graphene contributes a p electron to a delocalised π system spanning the whole sheet, and its bands just touch, so charge carriers move with extraordinarily high mobility across the plane.",
    choices: [
      { text: "a delocalised π electron system", isCorrect: true },
      { text: "a very large band gap" },
      { text: "only localised σ single bonds" },
      { text: "a rigid ionic lattice structure" },
    ],
  },
  {
    stem: "Choosing a semiconductor with a wider band gap for an LED shifts the emitted light toward:",
    topic: "Applications of Bonding & Band Theory",
    explanation:
      "A wider gap means a larger photon energy on recombination, and since E = hc/λ a bigger energy means a shorter wavelength; so wide-gap semiconductors emit toward the blue and ultraviolet, narrow-gap ones toward the red and infrared.",
    choices: [
      { text: "shorter wavelengths (toward blue)", isCorrect: true },
      { text: "longer wavelengths (toward the red)" },
      { text: "no visible change" },
      { text: "lower photon energy" },
    ],
  },
  {
    stem: "Insulators are chosen to coat electrical wiring because their large band gap ensures they:",
    topic: "Applications of Bonding & Band Theory",
    explanation:
      "A large band gap keeps virtually all electrons locked in the valence band, so an insulator carries almost no current and safely confines electricity to the conductor it surrounds; this is the practical use of the band-gap concept.",
    choices: [
      { text: "carry almost no electric current", isCorrect: true },
      { text: "conduct electricity extremely well" },
      { text: "act as semiconductors" },
      { text: "become superconducting" },
    ],
  },
  {
    stem: "Magnesium is a good conductor even though its 3s band is full, because in the solid its empty 3p band:",
    topic: "Metallic Bonding & Band Theory",
    explanation:
      "In magnesium metal the empty 3p band overlaps the filled 3s band, so there are accessible empty levels immediately above the filled ones; electrons move into them freely, giving the conduction expected of a metal despite the full s band.",
    choices: [
      { text: "overlaps the filled 3s band", isCorrect: true },
      { text: "lies far above the 3s band" },
      { text: "is also completely filled" },
      { text: "is removed from the solid" },
    ],
  },
];
