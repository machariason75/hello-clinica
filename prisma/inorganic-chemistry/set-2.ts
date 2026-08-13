/**
 * INORGANIC CHEMISTRY — PRACTICE SET 2
 * (title in seed) — Weller/Housecroft/Miessler/J. D. Lee depth. 100 questions.
 * Options length-matched (correct never perceptibly longest); positions randomized by engine.
 */

import type { Q } from "../_lib/qbank";

export const INORGANIC_SET_2: Q[] = [
  {
    stem: "Atomic radius increases on descending a group because:",
    topic: "Atomic Radius",
    explanation:
      "Each step down a group adds a new occupied shell, placing the outermost electrons farther from the nucleus; although the nuclear charge also rises, the added shell and the extra shielding win out, so the atom grows larger.",
    choices: [
      { text: "each element adds another electron shell", isCorrect: true },
      { text: "the nuclear charge decreases downward" },
      { text: "electrons are removed going down" },
      { text: "the atoms lose their outer shell" },
    ],
  },
  {
    stem: "Across a period from left to right, atomic radius generally decreases because:",
    topic: "Atomic Radius",
    explanation:
      "Along a period electrons enter the same shell while the nuclear charge climbs, so the rising effective nuclear charge draws the electron cloud inward; the poor mutual shielding of same-shell electrons lets this contraction proceed steadily.",
    choices: [
      { text: "the effective nuclear charge increases", isCorrect: true },
      { text: "a completely new electron shell is added" },
      { text: "the total nuclear charge suddenly falls" },
      { text: "electrons are steadily being removed from it" },
    ],
  },
  {
    stem: "The covalent radius of an element is defined as:",
    topic: "Atomic Radius",
    explanation:
      "The covalent radius is taken as half the distance between the nuclei of two identical atoms joined by a single bond; tabulating radii this way lets bond lengths in other molecules be estimated by adding the radii of the bonded atoms.",
    choices: [
      { text: "half the distance between two bonded like atoms", isCorrect: true },
      { text: "the full distance between two bonded atoms" },
      { text: "the radius of the isolated ion" },
      { text: "the distance to the nearest neighbor in a gas" },
    ],
  },
  {
    stem: "The largest neutral atoms are located in the periodic table's:",
    topic: "Atomic Radius",
    explanation:
      "Radius grows down a group and to the left across a period, so the biggest atoms sit toward the lower left, where caesium and francium lie; the smallest reactive atoms are toward the upper right.",
    choices: [
      { text: "lower-left region", isCorrect: true },
      { text: "upper-right region" },
      { text: "exact center" },
      { text: "upper-left corner only" },
    ],
  },
  {
    stem: "Among the period-2 elements lithium, carbon, nitrogen and fluorine, the largest atom is:",
    topic: "Atomic Radius",
    explanation:
      "Radius falls across a period as effective nuclear charge rises, so lithium, at the start of period 2 with the lowest effective charge on its valence shell, is the largest of these atoms; fluorine, near the end, is the smallest.",
    choices: [
      { text: "lithium", isCorrect: true },
      { text: "carbon" },
      { text: "nitrogen" },
      { text: "fluorine" },
    ],
  },
  {
    stem: "Comparing sodium and potassium, the atom with the larger radius is:",
    topic: "Atomic Radius",
    explanation:
      "Potassium lies one period below sodium and has an additional occupied shell, so its valence electrons are farther out and it is the larger atom; this is the usual increase in size on moving down a group.",
    choices: [
      { text: "potassium", isCorrect: true },
      { text: "sodium" },
      { text: "they are identical" },
      { text: "neither has a radius" },
    ],
  },
  {
    stem: "The van der Waals radius of an atom is generally larger than its covalent radius because it reflects:",
    topic: "Atomic Radius",
    explanation:
      "The van der Waals radius measures how close non-bonded atoms approach before repelling, whereas the covalent radius reflects atoms drawn together by a shared bond; since bonding pulls atoms closer, the covalent radius is the smaller of the two.",
    choices: [
      { text: "contact between non-bonded atoms", isCorrect: true },
      { text: "atoms held together by a bond" },
      { text: "the size of the nucleus" },
      { text: "the radius of the cation" },
    ],
  },
  {
    stem: "Across a first-row transition series the atomic radii change relatively little because:",
    topic: "Atomic Radius",
    explanation:
      "As protons are added across the d block, electrons enter the inner d subshell, which shields the outer 4s electrons fairly well; the rise in effective nuclear charge is thus muted, and the radii stay nearly constant across much of the series.",
    choices: [
      { text: "added d electrons shield the outer electrons", isCorrect: true },
      { text: "the nuclear charge does not change at all" },
      { text: "a completely new shell is added each step" },
      { text: "electrons are removed across the whole series" },
    ],
  },
  {
    stem: "The noble gases are often listed with comparatively large radii in tables because the value quoted is a:",
    topic: "Atomic Radius",
    explanation:
      "Noble gases form no ordinary bonds, so their size is reported as a van der Waals radius rather than a covalent one; because van der Waals radii exceed covalent radii, the noble gases can appear anomalously large next to their neighbors.",
    choices: [
      { text: "van der Waals radius, not a covalent one", isCorrect: true },
      { text: "covalent radius like their neighbors" },
      { text: "radius of their common cation" },
      { text: "purely theoretical zero value" },
    ],
  },
  {
    stem: "A metallic radius is defined from the spacing of atoms in:",
    topic: "Atomic Radius",
    explanation:
      "In a metal the atoms pack together in a lattice, and the metallic radius is taken as half the internuclear distance between nearest neighbors in that solid; it provides the size measure appropriate to metallic bonding.",
    choices: [
      { text: "the solid metallic lattice", isCorrect: true },
      { text: "an isolated gaseous atom" },
      { text: "an ionic crystal" },
      { text: "a covalent gas molecule" },
    ],
  },
  {
    stem: "Which statements about atomic-radius trends are correct? Select all that apply.",
    type: "MULTI",
    topic: "Atomic Radius",
    explanation:
      "Atomic radius increases down a group as shells are added and decreases across a period as effective nuclear charge rises, so the largest atoms lie toward the lower left; the radius does not increase across a period or decrease down a group.",
    choices: [
      { text: "radius increases down a group", isCorrect: true },
      { text: "radius decreases across a period", isCorrect: true },
      { text: "the largest atoms lie in the lower left", isCorrect: true },
      { text: "rising effective charge drives the period trend", isCorrect: true },
      { text: "the radius clearly increases across a whole period" },
      { text: "the radius decreases on going down a group" },
    ],
  },
  {
    stem: "A cation is smaller than the atom from which it forms because:",
    topic: "Ionic Radius",
    explanation:
      "Removing electrons, often emptying the outermost shell entirely, leaves fewer electrons under the same nuclear charge, so each remaining electron is pulled in more tightly; the cation is therefore markedly smaller than the parent atom.",
    choices: [
      { text: "it has fewer electrons and often loses a shell", isCorrect: true },
      { text: "it gains an extra electron shell around itself" },
      { text: "its effective nuclear charge is greatly reduced" },
      { text: "it gains electrons and so extra mutual repulsion" },
    ],
  },
  {
    stem: "An anion is larger than the atom from which it forms because:",
    topic: "Ionic Radius",
    explanation:
      "Adding electrons increases the electron–electron repulsion while the nuclear charge is unchanged, so the electron cloud expands; the anion is thus larger than its parent atom, the opposite of the contraction seen on forming a cation.",
    choices: [
      { text: "added electrons increase mutual repulsion", isCorrect: true },
      { text: "it loses its entire outermost electron shell" },
      { text: "its effective nuclear charge sharply increases" },
      { text: "it removes all electron–electron repulsion" },
    ],
  },
  {
    stem: "In the isoelectronic series N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺, the largest ion is:",
    topic: "Ionic Radius",
    explanation:
      "All these ions have ten electrons, so their sizes are set by nuclear charge; the nitride ion has the fewest protons pulling on those ten electrons and is therefore the largest, while Mg²⁺, with the most protons, is the smallest.",
    choices: [
      { text: "N³⁻", isCorrect: true },
      { text: "F⁻" },
      { text: "Na⁺" },
      { text: "Mg²⁺" },
    ],
  },
  {
    stem: "For a given element, arranging its neutral atom, its cation and its anion by size gives the order:",
    topic: "Ionic Radius",
    explanation:
      "The cation, having lost electrons, is the smallest, and the anion, having gained them, is the largest, with the neutral atom in between; so for chlorine, for instance, the size order runs from the small cation up to the large chloride ion.",
    choices: [
      { text: "cation < atom < anion", isCorrect: true },
      { text: "anion < atom < cation" },
      { text: "atom < cation < anion" },
      { text: "all three are equal" },
    ],
  },
  {
    stem: "Comparing the two iron cations, the smaller ion is:",
    topic: "Ionic Radius",
    explanation:
      "Removing a further electron to make Fe³⁺ raises the charge felt by the remaining electrons and reduces their mutual repulsion, so Fe³⁺ is smaller than Fe²⁺; higher-charged cations of the same element are consistently the smaller.",
    choices: [
      { text: "Fe³⁺", isCorrect: true },
      { text: "Fe²⁺" },
      { text: "they are identical" },
      { text: "neither has a size" },
    ],
  },
  {
    stem: "Down a group, the ionic radii of ions of the same charge, such as the alkali-metal cations, tend to:",
    topic: "Ionic Radius",
    explanation:
      "Just as atoms grow down a group, so do their ions of like charge, because each lower member has an additional occupied shell; thus the ionic radius increases in the order from lithium's cation down to caesium's.",
    choices: [
      { text: "increase", isCorrect: true },
      { text: "decrease" },
      { text: "stay exactly constant" },
      { text: "fall to zero" },
    ],
  },
  {
    stem: "Cations are generally smaller than anions in an isoelectronic comparison because cations:",
    topic: "Ionic Radius",
    explanation:
      "For the same electron count, cations come from elements with more protons relative to their electrons, giving a stronger inward pull and a smaller size; anions, formed from elements with fewer protons per electron, are correspondingly larger.",
    choices: [
      { text: "have a higher nuclear charge per electron", isCorrect: true },
      { text: "have a lower nuclear charge per electron" },
      { text: "contain more electrons than anions" },
      { text: "have no nuclear charge" },
    ],
  },
  {
    stem: "The concept of a radius ratio, the ratio of cation to anion radius, is used to predict:",
    topic: "Ionic Radius",
    explanation:
      "In ionic solids the ratio of the ionic radii helps predict how many anions can pack around a cation, and hence the likely coordination number and crystal structure; it is a simple geometric guide to the packing of ions.",
    choices: [
      { text: "the coordination number in an ionic crystal", isCorrect: true },
      { text: "the visible color of the ionic compound formed" },
      { text: "the ionization energy of the free gaseous metal" },
      { text: "the boiling point of the substance quite precisely" },
    ],
  },
  {
    stem: "Successive cations of an element, such as Mn²⁺ and Mn⁴⁺, differ in size such that the more highly charged ion is:",
    topic: "Ionic Radius",
    explanation:
      "Each additional electron removed increases the effective nuclear charge on those that remain and reduces repulsion, so the higher-charged cation is smaller; this steady shrinkage with increasing positive charge is a general rule for the ions of an element.",
    choices: [
      { text: "smaller than the lower-charged one", isCorrect: true },
      { text: "larger than the lower-charged one" },
      { text: "exactly the same size" },
      { text: "larger than the neutral atom" },
    ],
  },
  {
    stem: "True or False: The tabulated radius of a given ion increases as its coordination number in a crystal increases.",
    type: "TRUE_FALSE",
    topic: "Ionic Radius",
    explanation:
      "True. An ion appears larger when surrounded by more neighbors, because the packing forces it to sit at a greater internuclear distance; this is why standard tables of ionic radii, such as Shannon's, specify the coordination number.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Which statements about ionic radii are correct? Select all that apply.",
    type: "MULTI",
    topic: "Ionic Radius",
    explanation:
      "Cations are smaller and anions larger than their parent atoms, in an isoelectronic series the radius falls as nuclear charge rises, and Fe³⁺ is smaller than Fe²⁺; cations are not larger than their parents, and anions are not smaller than theirs.",
    choices: [
      { text: "cations are smaller than their parent atoms", isCorrect: true },
      { text: "anions are larger than their parent atoms", isCorrect: true },
      { text: "isoelectronic radius falls as charge rises", isCorrect: true },
      { text: "Fe³⁺ is smaller than Fe²⁺", isCorrect: true },
      { text: "cations are larger than their parent atoms" },
      { text: "anions are smaller than their parent atoms" },
    ],
  },
  {
    stem: "The first ionization energy of an element is the energy required to:",
    topic: "Ionization Energy",
    explanation:
      "It is the energy to remove one mole of electrons from one mole of gaseous atoms, forming singly charged gaseous cations; the process is endothermic, and its size measures how tightly the outermost electron is held.",
    choices: [
      { text: "remove one electron from a gaseous atom", isCorrect: true },
      { text: "add one electron to a gaseous atom" },
      { text: "break a mole of covalent bonds" },
      { text: "vaporize one mole of the solid" },
    ],
  },
  {
    stem: "First ionization energy generally increases across a period because:",
    topic: "Ionization Energy",
    explanation:
      "As effective nuclear charge rises across a period and the radius shrinks, the outer electron is held more tightly, so more energy is needed to remove it; the trend is uneven only where subshell effects intervene.",
    choices: [
      { text: "the effective nuclear charge increases", isCorrect: true },
      { text: "a completely new electron shell is added each step" },
      { text: "the atomic radius increases across the period" },
      { text: "the nuclear charge steadily decreases across it" },
    ],
  },
  {
    stem: "First ionization energy generally decreases down a group because:",
    topic: "Ionization Energy",
    explanation:
      "Descending a group, the outer electron lies in a higher shell, farther from the nucleus and better shielded by inner electrons, so it is less tightly held and more easily removed; the ionization energy therefore falls.",
    choices: [
      { text: "the outer electron is farther out and better shielded", isCorrect: true },
      { text: "the effective nuclear charge rises very sharply downward" },
      { text: "the atoms steadily become smaller down the group" },
      { text: "the nuclear charge disappears entirely downward" },
    ],
  },
  {
    stem: "Which element has the highest first ionization energy?",
    topic: "Ionization Energy",
    explanation:
      "Helium holds the record for first ionization energy: its two electrons occupy the compact 1s shell close to a nucleus of charge two, with almost no shielding, so removing an electron is exceptionally difficult, even harder than for neon.",
    choices: [
      { text: "helium", isCorrect: true },
      { text: "hydrogen" },
      { text: "lithium" },
      { text: "neon" },
    ],
  },
  {
    stem: "The successive ionization energies of any given element always:",
    topic: "Ionization Energy",
    explanation:
      "Each electron is pulled from an increasingly positive ion, so it is bound ever more tightly; consequently the second ionization energy exceeds the first, the third exceeds the second, and so on without exception.",
    choices: [
      { text: "increase with each electron removed", isCorrect: true },
      { text: "decrease with each electron removed" },
      { text: "remain the same throughout" },
      { text: "first fall, then rise" },
    ],
  },
  {
    stem: "A very large jump between the second and third ionization energies of an element indicates that the element has:",
    topic: "Ionization Energy",
    explanation:
      "The jump appears when ionization begins to break into a filled inner, noble-gas-like shell; a leap after the second electron means only two were loosely held outside that core, so the element has two valence electrons and is a group-2 metal.",
    choices: [
      { text: "two valence electrons", isCorrect: true },
      { text: "three valence electrons" },
      { text: "one valence electron" },
      { text: "eight valence electrons" },
    ],
  },
  {
    stem: "The elements with the lowest first ionization energies are the:",
    topic: "Ionization Energy",
    explanation:
      "The alkali metals have a single outer electron far from the nucleus and well shielded, so it is removed with little energy; their low ionization energies are why they are such reactive, readily oxidized metals.",
    choices: [
      { text: "alkali metals", isCorrect: true },
      { text: "noble gases" },
      { text: "halogens" },
      { text: "transition metals" },
    ],
  },
  {
    stem: "A low first ionization energy is associated with an element that is:",
    topic: "Ionization Energy",
    explanation:
      "An electron given up easily makes an element a reactive metal, prone to forming cations; thus the metals of the lower left, with their low ionization energies, are the most chemically reactive, while high ionization energies mark unreactive nonmetals.",
    choices: [
      { text: "a reactive metal", isCorrect: true },
      { text: "an unreactive nonmetal" },
      { text: "a noble gas" },
      { text: "chemically inert" },
    ],
  },
  {
    stem: "For a group-1 metal, the second ionization energy is enormously larger than the first because the second electron:",
    topic: "Ionization Energy",
    explanation:
      "The first electron comes from the lone outer shell, but the second must be torn from the underlying noble-gas core; that core is close to the nucleus and tightly bound, so its ionization energy is dramatically higher, giving the huge jump.",
    choices: [
      { text: "is removed from the stable inner core", isCorrect: true },
      { text: "comes from the same outer shell" },
      { text: "is farther from the nucleus" },
      { text: "experiences less nuclear charge" },
    ],
  },
  {
    stem: "Plotting the successive ionization energies of an element reveals its number of valence electrons because:",
    topic: "Ionization Energy",
    explanation:
      "The gentle rises within a shell are punctuated by a sudden jump when a filled inner shell is breached; counting the electrons removed before that jump gives the number of valence electrons, providing direct evidence of shell structure.",
    choices: [
      { text: "a sharp jump marks the break into the inner shell", isCorrect: true },
      { text: "all of the successive values are essentially identical" },
      { text: "the successive energies fall steadily and smoothly" },
      { text: "the very first value is always by far the largest" },
    ],
  },
  {
    stem: "True or False: The pattern of successive ionization energies, rising gently and then jumping sharply, provides direct evidence for the existence of electron shells.",
    type: "TRUE_FALSE",
    topic: "Ionization Energy",
    explanation:
      "True. The steady increases within a shell followed by an abrupt leap when the next inner shell is reached mirror the shell model exactly; counting electrons removed before each jump even reveals how many occupy each shell.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Which statements about ionization energy are correct? Select all that apply.",
    type: "MULTI",
    topic: "Ionization Energy",
    explanation:
      "First ionization energy increases across a period and decreases down a group, successive values always increase, and a large jump reveals the number of valence electrons; it does not decrease across a period, and the second ionization energy is never smaller than the first.",
    choices: [
      { text: "it increases across a period", isCorrect: true },
      { text: "it decreases down a group", isCorrect: true },
      { text: "successive values increase", isCorrect: true },
      { text: "a large jump reveals the valence count", isCorrect: true },
      { text: "it decreases across a period" },
      { text: "the second value is smaller than the first" },
    ],
  },
  {
    stem: "The first ionization energy of boron is slightly lower than that of beryllium because boron's outermost electron occupies a:",
    topic: "Ionization Energy Irregularities",
    explanation:
      "Beryllium loses an electron from a filled 2s subshell, whereas boron loses one from a 2p orbital that lies a little higher in energy and is better shielded by the 2s pair; the 2p electron is thus easier to remove, dipping the ionization energy.",
    choices: [
      { text: "a 2p orbital, higher in energy than the 2s", isCorrect: true },
      { text: "a 2s orbital, lying lower in energy than the 2p" },
      { text: "a stable, completely filled inner electron shell" },
      { text: "a half-filled and specially stable 2p subshell" },
    ],
  },
  {
    stem: "Oxygen's first ionization energy is slightly lower than nitrogen's because in oxygen the electron removed:",
    topic: "Ionization Energy Irregularities",
    explanation:
      "Nitrogen has a stable half-filled 2p subshell with three unpaired electrons, but oxygen's fourth 2p electron must pair up, and the added electron–electron repulsion makes it easier to remove; hence oxygen's ionization energy dips below nitrogen's.",
    choices: [
      { text: "comes from a doubly occupied 2p orbital", isCorrect: true },
      { text: "comes from the lower-energy 2s subshell" },
      { text: "comes from a deep and very stable inner shell" },
      { text: "is the only 2p electron the atom possesses" },
    ],
  },
  {
    stem: "Local maxima in first ionization energy across a period occur at elements with:",
    topic: "Ionization Energy Irregularities",
    explanation:
      "Filled and half-filled subshells are extra stable, so removing an electron from them costs more energy, producing peaks in the ionization-energy trend; these peaks at the group-2 filled s and the group-15 half-filled p are the origin of the well-known dips just after them.",
    choices: [
      { text: "filled or half-filled subshells", isCorrect: true },
      { text: "partly filled p orbitals only" },
      { text: "empty valence subshells" },
      { text: "the largest atomic radii" },
    ],
  },
  {
    stem: "Aluminium's first ionization energy is lower than magnesium's for essentially the same reason that:",
    topic: "Ionization Energy Irregularities",
    explanation:
      "Magnesium loses a 2s-like electron from a filled 3s subshell, while aluminium loses a higher-energy 3p electron; this parallels the beryllium-to-boron case exactly, where the switch from an s to a p electron lowers the ionization energy.",
    choices: [
      { text: "boron's is lower than beryllium's", isCorrect: true },
      { text: "nitrogen's is lower than carbon's" },
      { text: "neon's is lower than fluorine's" },
      { text: "sodium's is higher than magnesium's" },
    ],
  },
  {
    stem: "Sulfur's first ionization energy is slightly lower than phosphorus's, mirroring the anomaly seen between:",
    topic: "Ionization Energy Irregularities",
    explanation:
      "Phosphorus has a half-filled 3p subshell, and sulfur's fourth 3p electron must pair, raising repulsion and easing its removal; this is the third-period echo of the nitrogen-to-oxygen dip in the second period.",
    choices: [
      { text: "nitrogen and oxygen", isCorrect: true },
      { text: "beryllium and boron" },
      { text: "lithium and beryllium" },
      { text: "neon and sodium" },
    ],
  },
  {
    stem: "A group-2 element has a higher first ionization energy than the group-13 element that follows it because the group-2 atom loses an electron from a:",
    topic: "Ionization Energy Irregularities",
    explanation:
      "The group-2 atom parts with an electron from a stable, filled s subshell, which resists removal, while the next element loses a more loosely held p electron; the result is the small drop in ionization energy from group 2 to group 13.",
    choices: [
      { text: "filled s subshell", isCorrect: true },
      { text: "half-filled p subshell" },
      { text: "filled p subshell" },
      { text: "filled d subshell" },
    ],
  },
  {
    stem: "A group-15 element has a higher first ionization energy than the group-16 element beside it because the group-15 atom has a:",
    topic: "Ionization Energy Irregularities",
    explanation:
      "The group-15 atom enjoys the stability of a half-filled p subshell, so its electron is harder to remove; the group-16 atom must give up a paired p electron with its extra repulsion, so ionization is easier and the energy dips.",
    choices: [
      { text: "a stable half-filled p subshell", isCorrect: true },
      { text: "a completely filled and stable p subshell" },
      { text: "a completely filled outer s subshell" },
      { text: "only a single lone p electron present" },
    ],
  },
  {
    stem: "True or False: Nitrogen's half-filled 2p subshell gives it an anomalously high first ionization energy compared with oxygen.",
    type: "TRUE_FALSE",
    topic: "Ionization Energy Irregularities",
    explanation:
      "True. The three unpaired, exchange-stabilized electrons of nitrogen's half-filled 2p subshell are held firmly, so nitrogen's ionization energy exceeds oxygen's, whose paired 2p electron is loosened by mutual repulsion.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Which ionization-energy irregularities are correctly explained? Select all that apply.",
    type: "MULTI",
    topic: "Ionization Energy Irregularities",
    explanation:
      "Boron falls below beryllium because it loses a higher-energy 2p electron, oxygen falls below nitrogen because a 2p electron must pair, and aluminium below magnesium and sulfur below phosphorus repeat these s-to-p and pairing effects; nitrogen is not below oxygen, and beryllium does not lose a 2p electron.",
    choices: [
      { text: "B < Be: boron loses a 2p electron", isCorrect: true },
      { text: "O < N: a 2p electron must pair in oxygen", isCorrect: true },
      { text: "Al < Mg: the same s-to-p effect", isCorrect: true },
      { text: "S < P: the same pairing effect", isCorrect: true },
      { text: "N < O because nitrogen's 2p is paired" },
      { text: "Be < B because beryllium loses a 2p electron" },
    ],
  },
  {
    stem: "The electron affinity of an element refers to the energy change when a gaseous atom:",
    topic: "Electron Affinity",
    explanation:
      "Electron affinity is the energy released or absorbed as a gaseous atom gains an electron to form an anion; for most nonmetals the first electron affinity is exothermic, reflecting a favorable attraction of the extra electron to the nucleus.",
    choices: [
      { text: "gains an electron", isCorrect: true },
      { text: "loses an electron" },
      { text: "gains a proton" },
      { text: "is vaporized from the solid" },
    ],
  },
  {
    stem: "The elements with the most exothermic, or most negative, electron affinities are the:",
    topic: "Electron Affinity",
    explanation:
      "The halogens are one electron short of a noble-gas configuration, so gaining an electron releases a great deal of energy; their strongly favorable electron affinities underlie their eagerness to form singly charged anions.",
    choices: [
      { text: "halogens", isCorrect: true },
      { text: "noble gases" },
      { text: "alkali metals" },
      { text: "alkaline-earth metals" },
    ],
  },
  {
    stem: "Across a period, electron affinities generally become:",
    topic: "Electron Affinity",
    explanation:
      "As effective nuclear charge rises across a period, the atom pulls an added electron in more strongly, so the energy released grows and electron affinities become more negative; the trend is broken only by the stability of filled and half-filled subshells.",
    choices: [
      { text: "more negative (more favorable)", isCorrect: true },
      { text: "less negative (less favorable)" },
      { text: "exactly zero throughout" },
      { text: "more positive across the whole period" },
    ],
  },
  {
    stem: "The electron affinity of a noble gas is:",
    topic: "Electron Affinity",
    explanation:
      "A noble gas already has a full outer shell, so an added electron would have to enter a new, higher shell against an unfavorable energy change; noble-gas electron affinities are therefore near zero or positive, meaning electron gain is not favored.",
    choices: [
      { text: "near zero or unfavorable", isCorrect: true },
      { text: "the most negative of any group" },
      { text: "larger than the halogens'" },
      { text: "always strongly exothermic" },
    ],
  },
  {
    stem: "The alkaline-earth (group-2) elements have unfavorable electron affinities because an added electron would enter a:",
    topic: "Electron Affinity",
    explanation:
      "Group-2 atoms have a filled ns subshell, so the extra electron must go into a higher-energy np orbital; this is energetically unfavorable, giving these elements electron affinities near zero rather than the exothermic values of the nonmetals.",
    choices: [
      { text: "a higher-energy p subshell above a filled s", isCorrect: true },
      { text: "a half-filled p subshell of parallel spins" },
      { text: "an already vacant and available s subshell" },
      { text: "a completely filled and very stable inner shell" },
    ],
  },
  {
    stem: "Chlorine has a more negative electron affinity than fluorine because in the small fluorine atom:",
    topic: "Electron Affinity",
    explanation:
      "Fluorine's compact 2p subshell is so crowded that adding an electron brings strong electron–electron repulsion, which offsets some of the energy released; chlorine's larger 3p subshell is roomier, so it accommodates the extra electron with less repulsion and releases more energy.",
    choices: [
      { text: "electron–electron repulsion reduces the energy released", isCorrect: true },
      { text: "the nuclear charge of fluorine is far smaller than chlorine's" },
      { text: "the added electron must enter a deep inner shell" },
      { text: "fluorine already possesses a filled valence shell" },
    ],
  },
  {
    stem: "The second electron affinity, corresponding to adding an electron to a singly charged anion, is:",
    topic: "Electron Affinity",
    explanation:
      "Forcing a second electron onto an already negative ion means overcoming the repulsion between that ion and the incoming electron, which always costs energy; the second electron affinity is therefore endothermic, even for elements that readily form the first anion.",
    choices: [
      { text: "always endothermic", isCorrect: true },
      { text: "always exothermic" },
      { text: "always zero" },
      { text: "equal to the first affinity" },
    ],
  },
  {
    stem: "The electron affinity of nitrogen is close to zero, unlike its neighbors, because nitrogen has a:",
    topic: "Electron Affinity",
    explanation:
      "Nitrogen's stable half-filled 2p subshell resists accepting another electron, which would have to pair up; the resulting near-zero electron affinity is an irregularity that parallels the extra stability seen in nitrogen's ionization energy.",
    choices: [
      { text: "a stable half-filled 2p subshell", isCorrect: true },
      { text: "a completely filled 2p subshell" },
      { text: "a totally vacant 2p subshell" },
      { text: "a filled and stable inner shell only" },
    ],
  },
  {
    stem: "Care is needed with electron-affinity data because different sources may define the sign so that a favorable electron gain is reported as:",
    topic: "Electron Affinity",
    explanation:
      "By the thermodynamic convention an exothermic electron gain has a negative energy change, but many tables list electron affinity as a positive number representing the energy released; recognizing which convention is in use avoids reversing the trend.",
    choices: [
      { text: "either a negative or a positive number", isCorrect: true },
      { text: "always strictly a positive number by convention" },
      { text: "always strictly a negative number by convention" },
      { text: "a value whose sign carries no real meaning" },
    ],
  },
  {
    stem: "True or False: Adding an electron to a negatively charged ion is always endothermic because of the repulsion between the ion and the incoming electron.",
    type: "TRUE_FALSE",
    topic: "Electron Affinity",
    explanation:
      "True. Any second or further electron must be driven onto an ion that already repels it, so energy must be supplied; this is why oxide and other multiply charged anions are stabilized only within lattices or solvation, not in isolation.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Which statements about electron affinity are correct? Select all that apply.",
    type: "MULTI",
    topic: "Electron Affinity",
    explanation:
      "The halogens have the most negative electron affinities, the noble gases have near-zero or unfavorable values, the second electron affinity is endothermic, and chlorine's affinity is more negative than fluorine's; the noble gases are not the most negative, and the second electron affinity is not exothermic.",
    choices: [
      { text: "halogens have the most negative affinities", isCorrect: true },
      { text: "noble gases have near-zero values", isCorrect: true },
      { text: "the second electron affinity is endothermic", isCorrect: true },
      { text: "chlorine's affinity exceeds fluorine's", isCorrect: true },
      { text: "noble gases have the most negative values" },
      { text: "the second electron affinity is exothermic" },
    ],
  },
  {
    stem: "Electronegativity is defined as the tendency of an atom in a bond to:",
    topic: "Electronegativity",
    explanation:
      "Electronegativity measures how strongly a bonded atom draws the shared electron pair toward itself; the difference in electronegativity between two bonded atoms determines how polar, or how ionic, their bond will be.",
    choices: [
      { text: "attract the shared electron pair", isCorrect: true },
      { text: "release its valence electrons" },
      { text: "gain a neutron" },
      { text: "increase its own radius" },
    ],
  },
  {
    stem: "The most electronegative element is:",
    topic: "Electronegativity",
    explanation:
      "Fluorine, small and with a high effective nuclear charge acting on its bonding electrons, tops the Pauling scale at about 4.0; its extreme electronegativity is why fluorine forms such strongly polar bonds and is the strongest common oxidizer.",
    choices: [
      { text: "fluorine", isCorrect: true },
      { text: "oxygen" },
      { text: "chlorine" },
      { text: "nitrogen" },
    ],
  },
  {
    stem: "Electronegativity increases:",
    topic: "Electronegativity",
    explanation:
      "Like ionization energy, electronegativity rises with effective nuclear charge and falls with size, so it increases across a period and up a group; the trend points toward fluorine at the upper right as the maximum.",
    choices: [
      { text: "across a period and up a group", isCorrect: true },
      { text: "down a group and to the left" },
      { text: "only down a group" },
      { text: "uniformly in every direction" },
    ],
  },
  {
    stem: "A large electronegativity difference between two bonded atoms produces a bond that is:",
    topic: "Electronegativity",
    explanation:
      "When one atom pulls the shared electrons much more strongly, the pair is essentially transferred, giving an ionic bond; a small difference leaves the electrons shared fairly evenly in a covalent bond, and an intermediate difference gives a polar covalent bond.",
    choices: [
      { text: "ionic", isCorrect: true },
      { text: "nonpolar covalent" },
      { text: "purely metallic" },
      { text: "a hydrogen bond" },
    ],
  },
  {
    stem: "Two atoms of equal electronegativity, such as the two atoms in a diatomic element, form a bond that is:",
    topic: "Electronegativity",
    explanation:
      "With no electronegativity difference, neither atom pulls the shared pair preferentially, so the electrons are shared equally and the bond is nonpolar covalent; the identical atoms of elements such as nitrogen or oxygen bond in just this way.",
    choices: [
      { text: "nonpolar covalent", isCorrect: true },
      { text: "polar covalent" },
      { text: "ionic" },
      { text: "hydrogen-bonded" },
    ],
  },
  {
    stem: "In a polar covalent bond, the partial negative charge resides on the atom that is:",
    topic: "Electronegativity",
    explanation:
      "The more electronegative atom draws the shared electrons closer, acquiring a partial negative charge while its partner becomes partially positive; this separation of charge is the bond dipole, whose size grows with the electronegativity difference.",
    choices: [
      { text: "more electronegative", isCorrect: true },
      { text: "less electronegative" },
      { text: "larger in radius" },
      { text: "lower in mass" },
    ],
  },
  {
    stem: "Metals and nonmetals differ in electronegativity in that metals are generally:",
    topic: "Electronegativity",
    explanation:
      "Metals hold their valence electrons loosely and have low electronegativities, tending to give electrons up, whereas nonmetals have high electronegativities and attract electrons; the wide gap between a metal and a nonmetal is what makes their bonding ionic.",
    choices: [
      { text: "of low electronegativity", isCorrect: true },
      { text: "of high electronegativity" },
      { text: "identical to nonmetals" },
      { text: "the most electronegative" },
    ],
  },
  {
    stem: "Among sodium, carbon, oxygen and fluorine, the least electronegative element is:",
    topic: "Electronegativity",
    explanation:
      "Sodium sits at the far left of period 3 with a single, loosely held valence electron and a low effective nuclear charge, giving it the lowest electronegativity of the four; fluorine, at the upper right, has the highest.",
    choices: [
      { text: "sodium", isCorrect: true },
      { text: "carbon" },
      { text: "oxygen" },
      { text: "fluorine" },
    ],
  },
  {
    stem: "The electronegativity difference is useful because it lets one predict a bond's:",
    topic: "Electronegativity",
    explanation:
      "From the difference one can gauge where a bond falls on the continuum from nonpolar covalent through polar covalent to ionic, and hence its polarity and partial charges; it is a simple but powerful predictor of bonding character.",
    choices: [
      { text: "polarity and degree of ionic character", isCorrect: true },
      { text: "the exact bond length to several decimal places" },
      { text: "the magnetic moment of the resulting molecule" },
      { text: "the precise boiling point of the compound formed" },
    ],
  },
  {
    stem: "On the Mulliken scale, an atom's electronegativity is estimated as the average of its:",
    topic: "Electronegativity",
    explanation:
      "Mulliken defined electronegativity as the mean of the ionization energy and the electron affinity, reasoning that an atom that both holds its own electrons tightly and attracts others strongly should be highly electronegative; this ties the concept to measurable atomic energies.",
    choices: [
      { text: "ionization energy and electron affinity", isCorrect: true },
      { text: "the atomic mass together with the atomic radius" },
      { text: "the melting point together with the boiling point" },
      { text: "the proton number together with the neutron number" },
    ],
  },
  {
    stem: "True or False: Fluorine is the most electronegative element, and electronegativity increases toward the upper-right of the periodic table.",
    type: "TRUE_FALSE",
    topic: "Electronegativity",
    explanation:
      "True. The combination of small size and high effective nuclear charge makes fluorine the most electronegative element, and the same factors make electronegativity rise across a period and up a group, peaking at the upper right.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Which statements about electronegativity are correct? Select all that apply.",
    type: "MULTI",
    topic: "Electronegativity",
    explanation:
      "Fluorine is the most electronegative element, electronegativity increases across a period and decreases down a group, and a large difference favors ionic bonding; caesium is far less electronegative than fluorine, and electronegativity does not increase down a group.",
    choices: [
      { text: "fluorine is the most electronegative element", isCorrect: true },
      { text: "it increases across a period", isCorrect: true },
      { text: "it decreases down a group", isCorrect: true },
      { text: "a large difference favors ionic bonding", isCorrect: true },
      { text: "caesium is more electronegative than fluorine" },
      { text: "it increases down a group" },
    ],
  },
  {
    stem: "Which bond descriptions match their electronegativity difference? Select all that apply.",
    type: "MULTI",
    topic: "Electronegativity",
    explanation:
      "A large difference gives an ionic bond, a near-zero difference gives a nonpolar covalent bond, an intermediate difference gives a polar covalent bond, and the more electronegative atom carries the partial negative charge; a large difference does not give a nonpolar bond, and equal electronegativities do not give an ionic bond.",
    choices: [
      { text: "a large difference gives an ionic bond", isCorrect: true },
      { text: "a near-zero difference gives a nonpolar bond", isCorrect: true },
      { text: "an intermediate difference gives a polar bond", isCorrect: true },
      { text: "the more electronegative atom is partly negative", isCorrect: true },
      { text: "a large difference gives a nonpolar bond" },
      { text: "equal electronegativities give an ionic bond" },
    ],
  },
  {
    stem: "Metallic character across the periodic table increases:",
    topic: "Metallic & Nonmetallic Character",
    explanation:
      "Metallic character grows as atoms give up electrons more readily, which happens as ionization energy falls; that means it increases down a group and toward the left of a period, so the most metallic elements lie in the lower-left region.",
    choices: [
      { text: "down a group and to the left", isCorrect: true },
      { text: "up a group and to the right" },
      { text: "only across a period" },
      { text: "toward the noble gases" },
    ],
  },
  {
    stem: "The oxides of nonmetals are generally:",
    topic: "Metallic & Nonmetallic Character",
    explanation:
      "Nonmetal oxides such as carbon dioxide and sulfur trioxide react with water to give acids, so they are acidic oxides; this contrasts with metal oxides, which are basic, and the trend in oxide character tracks the metal-to-nonmetal change across a period.",
    choices: [
      { text: "acidic", isCorrect: true },
      { text: "basic" },
      { text: "always neutral" },
      { text: "never soluble" },
    ],
  },
  {
    stem: "When sodium oxide dissolves in water, the resulting solution is:",
    topic: "Metallic & Nonmetallic Character",
    explanation:
      "Sodium oxide is a basic oxide that reacts with water to give sodium hydroxide, a strong base, so the solution is strongly alkaline; the basicity of such oxides reflects the metallic, electron-releasing nature of the element.",
    choices: [
      { text: "basic (alkaline)", isCorrect: true },
      { text: "strongly acidic" },
      { text: "exactly neutral" },
      { text: "unable to react" },
    ],
  },
  {
    stem: "Aluminium oxide is described as amphoteric because it:",
    topic: "Metallic & Nonmetallic Character",
    explanation:
      "Sitting near the metal–nonmetal borderline, aluminium oxide reacts with acids as a base and with strong bases as an acid, dissolving in both; this dual behavior, shared by oxides such as zinc oxide, is the hallmark of an amphoteric oxide.",
    choices: [
      { text: "reacts with both acids and bases", isCorrect: true },
      { text: "reacts with neither acids nor bases" },
      { text: "reacts only with water" },
      { text: "is a strong base only" },
    ],
  },
  {
    stem: "Across period 3, from sodium to sulfur and chlorine, the character of the oxides changes from:",
    topic: "Metallic & Nonmetallic Character",
    explanation:
      "Sodium and magnesium form basic oxides, aluminium's oxide is amphoteric, and the oxides of silicon, phosphorus, sulfur and chlorine are acidic; this basic-to-acidic progression follows the increasing nonmetallic character across the period.",
    choices: [
      { text: "basic through amphoteric to acidic", isCorrect: true },
      { text: "acidic through amphoteric to basic" },
      { text: "basic throughout the period" },
      { text: "acidic throughout the period" },
    ],
  },
  {
    stem: "For a given element that forms several oxides, the oxide in which the element has the highest oxidation state is usually the:",
    topic: "Metallic & Nonmetallic Character",
    explanation:
      "As the oxidation state of the central element rises, its oxide becomes more acidic, so the highest oxide is the most acidic; chromium, for example, gives a basic oxide at low oxidation state but a strongly acidic oxide at its highest.",
    choices: [
      { text: "most acidic", isCorrect: true },
      { text: "most basic" },
      { text: "most metallic" },
      { text: "least soluble in acid" },
    ],
  },
  {
    stem: "True or False: Across a period the oxides of the elements change progressively from basic, through amphoteric, to acidic.",
    type: "TRUE_FALSE",
    topic: "Metallic & Nonmetallic Character",
    explanation:
      "True. The leftmost metals give basic oxides, the borderline elements give amphoteric oxides such as alumina, and the nonmetals to the right give acidic oxides; the sequence mirrors the fall in metallic character across the period.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Which statements about metallic character and oxides are correct? Select all that apply.",
    type: "MULTI",
    topic: "Metallic & Nonmetallic Character",
    explanation:
      "Metallic character increases down a group, metal oxides are basic, nonmetal oxides are acidic, and borderline oxides such as alumina are amphoteric; nonmetal oxides are not basic, and metallic character does not increase across a period toward the right.",
    choices: [
      { text: "metallic character increases down a group", isCorrect: true },
      { text: "metal oxides are basic", isCorrect: true },
      { text: "nonmetal oxides are acidic", isCorrect: true },
      { text: "oxides like Al₂O₃ are amphoteric", isCorrect: true },
      { text: "nonmetal oxides are basic" },
      { text: "metallic character increases across a period" },
    ],
  },
  {
    stem: "For a main-group element, the maximum positive oxidation state is usually equal to its:",
    topic: "Periodic Oxidation States & Valence",
    explanation:
      "A main-group element can, at most, use all its valence electrons in bonding, so its highest oxidation state generally equals the group number; sulfur in group 16 reaching +6 and chlorine in group 17 reaching +7 are familiar examples.",
    choices: [
      { text: "group number (number of valence electrons)", isCorrect: true },
      { text: "period number in which the element is found" },
      { text: "total number of neutrons within its nucleus" },
      { text: "number of completely filled inner shells it has" },
    ],
  },
  {
    stem: "The alkali metals of group 1 characteristically show an oxidation state of:",
    topic: "Periodic Oxidation States & Valence",
    explanation:
      "With one loosely held valence electron, the group-1 metals lose it readily to reach a noble-gas configuration, so they are almost always +1; the very large second ionization energy makes any higher state inaccessible in ordinary chemistry.",
    choices: [
      { text: "+1", isCorrect: true },
      { text: "+2" },
      { text: "−1" },
      { text: "+3" },
    ],
  },
  {
    stem: "Chlorine, in group 17, can display oxidation states ranging from:",
    topic: "Periodic Oxidation States & Valence",
    explanation:
      "Chlorine gains one electron to reach −1 in chlorides but can also lose or share its electrons with more electronegative oxygen to reach up to +7, as in perchlorate; this wide range is typical of the heavier p-block nonmetals.",
    choices: [
      { text: "−1 up to +7", isCorrect: true },
      { text: "only −1" },
      { text: "only +1" },
      { text: "−2 up to +2" },
    ],
  },
  {
    stem: "Transition metals commonly exhibit several oxidation states because:",
    topic: "Periodic Oxidation States & Valence",
    explanation:
      "In the transition metals the 4s and 3d electrons lie close together in energy, so varying numbers of them can be involved in bonding; this gives rise to the multiple oxidation states, and hence the rich redox chemistry, characteristic of the d block.",
    choices: [
      { text: "their 4s and 3d electrons are close in energy", isCorrect: true },
      { text: "they possess only a single valence electron each" },
      { text: "their inner electron shells are left unfilled" },
      { text: "they never actually form ions in any compound" },
    ],
  },
  {
    stem: "The tendency of the heavier p-block elements to favor an oxidation state two units below the group maximum is called the:",
    topic: "Periodic Oxidation States & Valence",
    explanation:
      "In elements such as thallium, lead and bismuth, the outer s-electron pair is held tightly and resists involvement in bonding, the inert-pair effect; this stabilizes states such as Tl(I), Pb(II) and Bi(III) over the group-maximum states.",
    choices: [
      { text: "inert-pair effect", isCorrect: true },
      { text: "diagonal relationship" },
      { text: "lanthanide contraction" },
      { text: "shielding effect" },
    ],
  },
  {
    stem: "The elements of group 16 most characteristically show, in their binary compounds with metals, an oxidation state of:",
    topic: "Periodic Oxidation States & Valence",
    explanation:
      "Needing two electrons to complete an octet, the group-16 elements typically gain them to reach −2, as in oxides and sulfides; they can reach positive states with more electronegative partners, but −2 is their signature state with metals.",
    choices: [
      { text: "−2", isCorrect: true },
      { text: "+2" },
      { text: "+6 only" },
      { text: "−1" },
    ],
  },
  {
    stem: "True or False: The inert-pair effect makes the +1 state of thallium and the +2 state of lead more stable than their group-maximum states.",
    type: "TRUE_FALSE",
    topic: "Periodic Oxidation States & Valence",
    explanation:
      "True. For these heavy p-block metals the outer s pair is reluctant to bond, so lower oxidation states two below the group maximum become the more stable; thallium(I) and lead(II) accordingly dominate over thallium(III) and lead(IV).",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The diagonal relationship in the periodic table pairs lithium most closely with:",
    topic: "Diagonal Relationship & Anomalies",
    explanation:
      "Lithium resembles magnesium, its diagonal neighbor, more than it resembles the other alkali metals; both form largely covalent, somewhat soluble compounds and behave similarly because their ions have comparable charge-to-size ratios.",
    choices: [
      { text: "magnesium", isCorrect: true },
      { text: "sodium" },
      { text: "potassium" },
      { text: "calcium" },
    ],
  },
  {
    stem: "Beryllium shows a diagonal relationship with aluminium, reflected in the fact that both:",
    topic: "Diagonal Relationship & Anomalies",
    explanation:
      "Beryllium and aluminium each form amphoteric oxides and covalent, readily hydrolyzed halides, unlike the more ionic compounds of their own groups; this similarity across the diagonal stems from their similar polarizing powers.",
    choices: [
      { text: "form amphoteric oxides and covalent halides", isCorrect: true },
      { text: "form only strongly ionic solids and simple salts" },
      { text: "are completely unreactive noble-gas elements" },
      { text: "share exactly the same atomic number value" },
    ],
  },
  {
    stem: "Boron resembles silicon, its diagonal partner, in that both are:",
    topic: "Diagonal Relationship & Anomalies",
    explanation:
      "Boron and silicon are both metalloids that form acidic oxides and covalent, network or molecular structures rather than simple ionic solids; their diagonal likeness sets them apart from the more metallic members of their own groups.",
    choices: [
      { text: "metalloids forming covalent, acidic oxides", isCorrect: true },
      { text: "reactive alkali metals with strongly basic oxides" },
      { text: "unreactive monatomic noble gases at all times" },
      { text: "typical ionic-bonding metals of the s-block" },
    ],
  },
  {
    stem: "The diagonal relationship arises because the paired elements have similar:",
    topic: "Diagonal Relationship & Anomalies",
    explanation:
      "Moving down increases size while moving right increases charge; along a diagonal these effects offset, so the paired ions end up with comparable charge-to-size ratios, or polarizing power, and hence similar bonding and chemistry.",
    choices: [
      { text: "charge-to-size ratios (polarizing power)", isCorrect: true },
      { text: "numbers of neutrons within their two nuclei" },
      { text: "atomic masses to several significant figures" },
      { text: "characteristic colors in a hot flame test" },
    ],
  },
  {
    stem: "The first element of each main group often differs markedly from the rest of its group because it:",
    topic: "Diagonal Relationship & Anomalies",
    explanation:
      "The head element of a group is unusually small and, in the second period, has no low-lying d orbitals; this restricts its coordination and bonding, so elements such as lithium, beryllium, boron, carbon, nitrogen, oxygen and fluorine behave atypically for their groups.",
    choices: [
      { text: "is small and lacks available d orbitals", isCorrect: true },
      { text: "has the most available d orbitals" },
      { text: "is the most metallic in the group" },
      { text: "has the largest radius in the group" },
    ],
  },
  {
    stem: "Which pairs show a genuine diagonal relationship, and why? Select all that apply.",
    type: "MULTI",
    topic: "Diagonal Relationship & Anomalies",
    explanation:
      "Lithium with magnesium, beryllium with aluminium, and boron with silicon are the classic diagonal pairs, all arising from similar polarizing power; sodium with calcium and carbon with phosphorus are not diagonal relationships.",
    choices: [
      { text: "lithium and magnesium", isCorrect: true },
      { text: "beryllium and aluminium", isCorrect: true },
      { text: "boron and silicon", isCorrect: true },
      { text: "the pairs share similar polarizing power", isCorrect: true },
      { text: "sodium paired diagonally with calcium here" },
      { text: "carbon paired diagonally with phosphorus" },
    ],
  },
  {
    stem: "The lanthanide contraction is the steady decrease in atomic and ionic size across the lanthanide series, caused by:",
    topic: "Lanthanide Contraction",
    explanation:
      "As the 4f subshell fills across the lanthanides, its electrons shield the growing nuclear charge very poorly, so the effective nuclear charge on the outer electrons climbs and the atoms shrink steadily; the cumulative effect over fourteen elements is substantial.",
    choices: [
      { text: "poor shielding by the 4f electrons", isCorrect: true },
      { text: "strong shielding by the 4f electrons" },
      { text: "the loss of the 4f subshell" },
      { text: "a fall in the nuclear charge" },
    ],
  },
  {
    stem: "A major consequence of the lanthanide contraction is that:",
    topic: "Lanthanide Contraction",
    explanation:
      "The contraction offsets the expected increase in size on going from the second to the third transition series, so pairs like zirconium and hafnium, or niobium and tantalum, end up almost identical in size; their chemistry becomes correspondingly alike.",
    choices: [
      { text: "the 2nd and 3rd row transition metals are alike in size", isCorrect: true },
      { text: "the lanthanides steadily expand across the whole series" },
      { text: "the transition metals come to differ greatly in size" },
      { text: "hafnium becomes very much larger than zirconium" },
    ],
  },
  {
    stem: "Zirconium and hafnium are notoriously difficult to separate chemically because the lanthanide contraction makes them:",
    topic: "Lanthanide Contraction",
    explanation:
      "Because the contraction leaves hafnium and zirconium with nearly the same ionic radius, their compounds behave almost identically, so ordinary chemical separations barely distinguish them; this is a direct practical consequence of the 4f contraction.",
    choices: [
      { text: "nearly identical in size and chemistry", isCorrect: true },
      { text: "very different in both their size and chemistry" },
      { text: "oppositely charged ions in all their compounds" },
      { text: "short-lived radioactive isotopes of one element" },
    ],
  },
  {
    stem: "The unusually high densities of the third-row transition metals such as osmium, iridium and platinum owe much to:",
    topic: "Lanthanide Contraction",
    explanation:
      "The lanthanide contraction packs a large atomic mass into a radius no bigger than the second-row metals above them, driving the density up; osmium and iridium are, in fact, the densest of all the elements largely for this reason.",
    choices: [
      { text: "their contracted size for a large atomic mass", isCorrect: true },
      { text: "their exceptionally large atomic radii" },
      { text: "a complete absence of any nuclear charge" },
      { text: "their normally gaseous state at room temperature" },
    ],
  },
  {
    stem: "Which of the following are consequences of the lanthanide contraction? Select all that apply.",
    type: "MULTI",
    topic: "Lanthanide Contraction",
    explanation:
      "The contraction makes the second- and third-row transition metals similar in size, renders zirconium and hafnium hard to separate, and gives the third-row metals unusually high densities, with Hf and Zr sharing similar chemistry; the lanthanides do not expand across the series, and the contraction is not caused by strong 4f shielding.",
    choices: [
      { text: "2nd and 3rd row transition metals similar in size", isCorrect: true },
      { text: "zirconium and hafnium hard to separate", isCorrect: true },
      { text: "very high densities in the third-row metals", isCorrect: true },
      { text: "Hf and Zr have similar chemistry", isCorrect: true },
      { text: "the lanthanides steadily expand across the series" },
      { text: "it is caused by unusually strong 4f shielding" },
    ],
  },
  {
    stem: "Among sodium, magnesium, aluminium and silicon, the element with the highest first ionization energy is:",
    topic: "Applications & Comparative Reasoning",
    explanation:
      "Ionization energy rises across period 3 apart from the small dips, and silicon lies farthest right of these four, so it holds its electrons most tightly; the order runs sodium below aluminium below magnesium below silicon.",
    choices: [
      { text: "silicon", isCorrect: true },
      { text: "sodium" },
      { text: "magnesium" },
      { text: "aluminium" },
    ],
  },
  {
    stem: "Among magnesium, calcium, strontium and barium, the atom with the largest radius is:",
    topic: "Applications & Comparative Reasoning",
    explanation:
      "These are all group-2 metals, and radius increases down the group as shells are added, so barium, the lowest of the four, is the largest; the trend simply follows the general increase in atomic size down any group.",
    choices: [
      { text: "barium", isCorrect: true },
      { text: "magnesium" },
      { text: "calcium" },
      { text: "strontium" },
    ],
  },
  {
    stem: "Among lithium, sodium, potassium and rubidium, the most reactive metal is:",
    topic: "Applications & Comparative Reasoning",
    explanation:
      "Reactivity of the alkali metals rises down the group as the outer electron becomes easier to lose, so rubidium, with the lowest ionization energy of the four, is the most reactive; the least reactive is lithium at the top.",
    choices: [
      { text: "rubidium", isCorrect: true },
      { text: "lithium" },
      { text: "sodium" },
      { text: "potassium" },
    ],
  },
  {
    stem: "The most reactive nonmetal, readily gaining or attracting electrons, is:",
    topic: "Applications & Comparative Reasoning",
    explanation:
      "Fluorine combines the highest electronegativity with a strongly favorable electron affinity, making it the most reactive nonmetal and the strongest common oxidizing agent; it reacts, often violently, with almost every other element.",
    choices: [
      { text: "fluorine", isCorrect: true },
      { text: "chlorine" },
      { text: "oxygen" },
      { text: "nitrogen" },
    ],
  },
  {
    stem: "Of the bonds H–Cl, Na–Cl, C–Cl and Cl–Cl, the most ionic is:",
    topic: "Applications & Comparative Reasoning",
    explanation:
      "Ionic character grows with the electronegativity difference between the bonded atoms; sodium and chlorine lie far apart on the scale, so the Na–Cl bond has the greatest difference and is the most ionic, while Cl–Cl, with no difference, is purely covalent.",
    choices: [
      { text: "Na–Cl", isCorrect: true },
      { text: "H–Cl" },
      { text: "C–Cl" },
      { text: "Cl–Cl" },
    ],
  },
  {
    stem: "In the isoelectronic series O²⁻, F⁻, Na⁺ and Mg²⁺, the ions are correctly ordered by decreasing size as:",
    topic: "Applications & Comparative Reasoning",
    explanation:
      "With the same ten electrons, size falls as nuclear charge rises, so the order of decreasing radius is the oxide ion, then fluoride, then the sodium ion, then the magnesium ion; the most highly charged cation is the smallest.",
    choices: [
      { text: "O²⁻ > F⁻ > Na⁺ > Mg²⁺", isCorrect: true },
      { text: "Mg²⁺ > Na⁺ > F⁻ > O²⁻" },
      { text: "F⁻ > O²⁻ > Mg²⁺ > Na⁺" },
      { text: "Na⁺ > Mg²⁺ > O²⁻ > F⁻" },
    ],
  },
  {
    stem: "Which of the following comparisons are correct? Select all that apply.",
    type: "MULTI",
    topic: "Applications & Comparative Reasoning",
    explanation:
      "Rubidium has a lower ionization energy than sodium, barium is larger than magnesium, fluorine is more electronegative than chlorine, and Fe³⁺ is smaller than Fe²⁺; potassium does not have a higher ionization energy than bromine, and caesium is far larger, not smaller, than lithium.",
    choices: [
      { text: "Rb has a lower ionization energy than Na", isCorrect: true },
      { text: "Ba is larger than Mg", isCorrect: true },
      { text: "F is more electronegative than Cl", isCorrect: true },
      { text: "Fe³⁺ is smaller than Fe²⁺", isCorrect: true },
      { text: "K has a higher ionization energy than Br" },
      { text: "Cs is smaller than Li" },
    ],
  },
];
