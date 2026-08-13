/**
 * INORGANIC CHEMISTRY — PRACTICE SET 1
 * (title in seed) — Weller/Housecroft/Miessler/J. D. Lee depth. 100 questions.
 * Options length-matched (correct never perceptibly longest); positions randomized by engine.
 */

import type { Q } from "../_lib/qbank";

export const INORGANIC_SET_1: Q[] = [
  {
    stem: "Which subatomic particle has a mass close to that of the proton but carries no electric charge?",
    topic: "Fundamental Particles & Isotopes",
    explanation:
      "The neutron has almost the same mass as the proton, about one atomic mass unit, but is electrically neutral; together protons and neutrons make up nearly all of an atom's mass and are confined to the tiny, dense nucleus.",
    choices: [
      { text: "the neutron", isCorrect: true },
      { text: "the electron" },
      { text: "the positron" },
      { text: "the photon" },
    ],
  },
  {
    stem: "The chemical identity of an element is fixed by its:",
    topic: "Fundamental Particles & Isotopes",
    explanation:
      "The number of protons, the atomic number, defines the element: change it and the element changes. Neutron number can vary among isotopes and electron number among ions without altering which element the atom is.",
    choices: [
      { text: "number of protons", isCorrect: true },
      { text: "number of neutrons" },
      { text: "total mass number" },
      { text: "number of electrons" },
    ],
  },
  {
    stem: "Two atoms are isotopes of the same element if they have the same number of protons but a different number of:",
    topic: "Fundamental Particles & Isotopes",
    explanation:
      "Isotopes share the atomic number, so they are the same element with the same chemistry, but they differ in neutron number and therefore in mass; carbon-12 and carbon-13 are a familiar pair differing by one neutron.",
    choices: [
      { text: "neutrons", isCorrect: true },
      { text: "protons" },
      { text: "electrons" },
      { text: "valence orbitals" },
    ],
  },
  {
    stem: "The mass number of an atom is equal to the number of:",
    topic: "Fundamental Particles & Isotopes",
    explanation:
      "The mass number counts the nucleons, that is the protons plus the neutrons; it is a whole number specific to a given isotope and should not be confused with the relative atomic mass, which averages over all isotopes.",
    choices: [
      { text: "protons plus neutrons", isCorrect: true },
      { text: "protons plus electrons" },
      { text: "neutrons only" },
      { text: "protons only" },
    ],
  },
  {
    stem: "When a neutral atom loses electrons to form a cation, the resulting ion has:",
    topic: "Fundamental Particles & Isotopes",
    explanation:
      "Ionic charge comes from a mismatch of electrons and protons; removing electrons leaves more protons than electrons, giving a net positive charge. The nucleus is untouched, so the atom remains the same element with the same atomic number.",
    choices: [
      { text: "fewer electrons than protons", isCorrect: true },
      { text: "more electrons than protons" },
      { text: "fewer protons than before" },
      { text: "more neutrons than before" },
    ],
  },
  {
    stem: "The relative atomic mass of an element quoted in the periodic table is best described as:",
    topic: "Fundamental Particles & Isotopes",
    explanation:
      "Because most elements occur as a mixture of isotopes, the tabulated relative atomic mass is the abundance-weighted average of the isotopic masses; this is why values such as chlorine's 35.45 are not whole numbers.",
    choices: [
      { text: "the weighted average of its isotope masses", isCorrect: true },
      { text: "the mass of its single most abundant isotope" },
      { text: "the mass of its single heaviest isotope alone" },
      { text: "the simple sum of all of its isotope masses" },
    ],
  },
  {
    stem: "An element consists of two isotopes: mass 10 at 20% abundance and mass 11 at 80% abundance. Its relative atomic mass is:",
    topic: "Fundamental Particles & Isotopes",
    explanation:
      "The weighted average is (10 × 0.20) + (11 × 0.80) = 2.0 + 8.8 = 10.8. The result lies closer to 11 because the heavier isotope is far more abundant, illustrating how abundance skews the mean toward the dominant isotope.",
    choices: [
      { text: "10.8", isCorrect: true },
      { text: "10.2" },
      { text: "10.5" },
      { text: "11.0" },
    ],
  },
  {
    stem: "True or False: A mass spectrometer separates ions according to their mass-to-charge ratio, allowing isotopic masses and their relative abundances to be measured.",
    type: "TRUE_FALSE",
    topic: "Fundamental Particles & Isotopes",
    explanation:
      "True. After ionization the ions are accelerated and deflected in electric or magnetic fields by an amount depending on their mass-to-charge ratio; the resulting spectrum gives both the mass and the relative abundance of each isotope present.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Which statements about isotopes of an element are correct? Select all that apply.",
    type: "MULTI",
    topic: "Fundamental Particles & Isotopes",
    explanation:
      "Isotopes share the atomic number and thus the same place in the periodic table and virtually the same chemistry, while differing in neutron number and hence in mass; they do not differ in proton number, and their chemistry is not markedly different.",
    choices: [
      { text: "they have the same atomic number", isCorrect: true },
      { text: "they differ in the number of neutrons", isCorrect: true },
      { text: "they have nearly identical chemistry", isCorrect: true },
      { text: "they occupy the same place in the table", isCorrect: true },
      { text: "they have different numbers of protons" },
      { text: "they differ greatly in chemical behavior" },
    ],
  },
  {
    stem: "According to Planck, the energy of a single quantum of electromagnetic radiation is proportional to its:",
    topic: "Early Quantum Theory",
    explanation:
      "Planck proposed that radiation is emitted and absorbed in discrete quanta of energy E = hν, so the energy of each quantum is directly proportional to the frequency; the constant of proportionality h is Planck's constant.",
    choices: [
      { text: "frequency", isCorrect: true },
      { text: "wavelength" },
      { text: "amplitude" },
      { text: "speed in vacuum" },
    ],
  },
  {
    stem: "The photoelectric effect provided key evidence that light:",
    topic: "Early Quantum Theory",
    explanation:
      "Einstein explained the ejection of electrons from metals by treating light as a stream of photons, each carrying energy hν; only this particle picture accounts for the sharp threshold frequency and the way electron energy depends on frequency, not intensity.",
    choices: [
      { text: "can behave as particles called photons", isCorrect: true },
      { text: "is purely a continuous wave" },
      { text: "carries no energy at all" },
      { text: "travels faster than its usual speed" },
    ],
  },
  {
    stem: "In the photoelectric effect, no electrons are emitted below a certain threshold frequency, no matter how intense the light, because:",
    topic: "Early Quantum Theory",
    explanation:
      "Each photon delivers its whole energy hν to one electron; if that is less than the work function, the electron cannot escape however many such photons arrive. Raising intensity adds more weak photons but never enough energy per event.",
    choices: [
      { text: "each photon individually lacks enough energy", isCorrect: true },
      { text: "the metal surface reflects essentially all the light" },
      { text: "the electrons in the metal are simply too heavy" },
      { text: "the light intensity has no effect on the emission" },
    ],
  },
  {
    stem: "In the Bohr model of hydrogen, a photon is emitted when the electron:",
    topic: "Early Quantum Theory",
    explanation:
      "Bohr allowed only certain quantized orbits; light is given out when the electron drops from a higher to a lower allowed level, the photon energy equalling the difference between the two levels. Absorption is the reverse, promoting the electron upward.",
    choices: [
      { text: "falls from a higher to a lower level", isCorrect: true },
      { text: "rises from a lower to a higher level" },
      { text: "moves within the same level" },
      { text: "leaves the atom entirely" },
    ],
  },
  {
    stem: "In the hydrogen atom, the energy of the electron becomes less negative, that is higher, as the principal quantum number n:",
    topic: "Early Quantum Theory",
    explanation:
      "The bound electron's energy is negative and scales as minus one over n squared, so as n increases the energy rises toward zero, the ionization limit; successive levels crowd together as they approach that limit.",
    choices: [
      { text: "increases", isCorrect: true },
      { text: "decreases" },
      { text: "stays fixed" },
      { text: "becomes imaginary" },
    ],
  },
  {
    stem: "An atom is said to be in its ground state when its electrons:",
    topic: "Early Quantum Theory",
    explanation:
      "The ground state is the lowest-energy arrangement, with electrons filling the lowest available levels; supplying energy can promote an electron to a higher level, leaving the atom in a transient excited state from which it later relaxes.",
    choices: [
      { text: "occupy the lowest available energy levels", isCorrect: true },
      { text: "occupy the highest available energy levels" },
      { text: "have all been completely removed from the atom" },
      { text: "are spread out evenly across all the levels" },
    ],
  },
  {
    stem: "Bohr's quantization condition restricted the electron's orbital angular momentum to:",
    topic: "Early Quantum Theory",
    explanation:
      "Bohr postulated that angular momentum comes only in whole-number multiples of h over two pi; this ad hoc rule fixed the allowed orbits and radii and reproduced the hydrogen spectrum, though it lacked the deeper justification later given by wave mechanics.",
    choices: [
      { text: "integer multiples of h/2π", isCorrect: true },
      { text: "any continuous value" },
      { text: "half-integer values only" },
      { text: "multiples of the speed of light" },
    ],
  },
  {
    stem: "True or False: The Bohr model correctly predicts the line spectrum of hydrogen but fails for atoms with more than one electron.",
    type: "TRUE_FALSE",
    topic: "Early Quantum Theory",
    explanation:
      "True. Bohr's model works well for one-electron systems such as hydrogen and He+, but it cannot handle the electron–electron repulsions of many-electron atoms; a full quantum-mechanical treatment is needed for those.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Which observations are naturally explained by treating light as photons rather than as a continuous wave? Select all that apply.",
    type: "MULTI",
    topic: "Early Quantum Theory",
    explanation:
      "The photon picture explains the existence of a threshold frequency, the essentially instantaneous emission of electrons, and the rise of electron kinetic energy with frequency rather than intensity, all seen in the photoelectric effect; a continuous build-up of energy and emission below threshold with bright light are not observed.",
    choices: [
      { text: "a threshold frequency for emission", isCorrect: true },
      { text: "essentially instantaneous emission", isCorrect: true },
      { text: "kinetic energy rising with frequency", isCorrect: true },
      { text: "the photoelectric effect itself", isCorrect: true },
      { text: "emission below threshold if intense" },
      { text: "a gradual continuous build-up of energy" },
    ],
  },
  {
    stem: "The fact that excited hydrogen atoms emit light only at certain discrete wavelengths is direct evidence that:",
    topic: "Line Spectra & the Rydberg Equation",
    explanation:
      "A continuous range of energies would give a continuous spectrum; instead hydrogen shows sharp lines, each from a transition between two fixed levels. The discrete spectrum is therefore direct evidence that the electron's energy is quantized.",
    choices: [
      { text: "the electron's energy is quantized", isCorrect: true },
      { text: "the atom has no internal structure" },
      { text: "energy can take any value" },
      { text: "electrons and protons have equal mass" },
    ],
  },
  {
    stem: "In the Rydberg equation for hydrogen, the wavenumber of a spectral line depends on the difference of the terms:",
    topic: "Line Spectra & the Rydberg Equation",
    explanation:
      "The Rydberg equation gives one over lambda as the Rydberg constant times the difference of one over n-lower squared and one over n-upper squared; each line thus corresponds to a specific pair of levels, and the inverse-square dependence sets the pattern of spacings.",
    choices: [
      { text: "one over each level's quantum number squared", isCorrect: true },
      { text: "the two quantum numbers of the levels themselves" },
      { text: "the square roots of the two quantum numbers" },
      { text: "the product of the two levels' quantum numbers" },
    ],
  },
  {
    stem: "The Balmer series of hydrogen, which lies in the visible region, arises from electron transitions ending at:",
    topic: "Line Spectra & the Rydberg Equation",
    explanation:
      "The Balmer lines come from transitions down to the level n = 2, and their photon energies fall in the visible range; transitions ending at n = 1 give the higher-energy Lyman series in the ultraviolet, and those ending at n = 3 give the infrared Paschen series.",
    choices: [
      { text: "the level n = 2", isCorrect: true },
      { text: "the level n = 1" },
      { text: "the level n = 3" },
      { text: "the level n = 4" },
    ],
  },
  {
    stem: "The Lyman series of hydrogen appears in the ultraviolet because its transitions:",
    topic: "Line Spectra & the Rydberg Equation",
    explanation:
      "The Lyman series ends on the ground level n = 1, where the energy gaps are largest; the correspondingly large photon energies place these lines in the ultraviolet, at shorter wavelengths than the visible Balmer series.",
    choices: [
      { text: "end on the ground level and are high in energy", isCorrect: true },
      { text: "end on the n = 2 level and are low in energy each" },
      { text: "occur only between the very highest energy levels" },
      { text: "involve essentially no change in the energy at all" },
    ],
  },
  {
    stem: "The convergence limit, where the lines of the Lyman series crowd together and stop, corresponds physically to:",
    topic: "Line Spectra & the Rydberg Equation",
    explanation:
      "As the upper level rises, the lines converge because the energy gaps shrink toward the ionization limit; the series limit itself corresponds to the electron being removed entirely from the ground state, so it gives a route to the ionization energy.",
    choices: [
      { text: "ionization of the atom from the ground state", isCorrect: true },
      { text: "the electron settling down into the n = 2 level" },
      { text: "the emission of a low-energy infrared photon" },
      { text: "the electron losing all of its rest mass" },
    ],
  },
  {
    stem: "Which of these hydrogen transitions emits the photon of highest energy?",
    topic: "Line Spectra & the Rydberg Equation",
    explanation:
      "Photon energy equals the difference between the levels, which is largest for transitions ending on n = 1 and starting from a high level; among the choices n = 4 to n = 1 spans the greatest energy gap and so gives the most energetic, shortest-wavelength photon.",
    choices: [
      { text: "n = 4 to n = 1", isCorrect: true },
      { text: "n = 3 to n = 1" },
      { text: "n = 4 to n = 2" },
      { text: "n = 3 to n = 2" },
    ],
  },
  {
    stem: "An absorption spectrum shows dark lines against a bright background because atoms:",
    topic: "Line Spectra & the Rydberg Equation",
    explanation:
      "In absorption, atoms remove photons of exactly the energies matching their upward transitions, leaving dark gaps in an otherwise continuous spectrum; those missing wavelengths coincide precisely with the bright lines the same atoms would emit.",
    choices: [
      { text: "absorb photons matching their transition energies", isCorrect: true },
      { text: "emit photons across every possible wavelength band" },
      { text: "scatter light of every color about equally well" },
      { text: "convert all the incident light directly into heat" },
    ],
  },
  {
    stem: "The de Broglie wavelength associated with a moving particle is inversely proportional to its:",
    topic: "Wave-Particle Duality & Uncertainty",
    explanation:
      "De Broglie proposed that any particle has a wavelength equal to Planck's constant divided by its momentum; the greater the momentum, the shorter the wavelength, which is why only very light, slow particles such as electrons show easily observable wave effects.",
    choices: [
      { text: "momentum", isCorrect: true },
      { text: "electric charge" },
      { text: "temperature" },
      { text: "potential energy" },
    ],
  },
  {
    stem: "A thrown baseball shows no observable wave behavior because its de Broglie wavelength is:",
    topic: "Wave-Particle Duality & Uncertainty",
    explanation:
      "A macroscopic object has an enormous momentum compared with an electron, so its de Broglie wavelength is fantastically small, far below any length scale we could probe; wave effects are therefore utterly negligible for everyday objects.",
    choices: [
      { text: "far too small to detect", isCorrect: true },
      { text: "larger than the ball itself" },
      { text: "equal to the ball's diameter" },
      { text: "exactly one nanometre" },
    ],
  },
  {
    stem: "The Heisenberg uncertainty principle asserts that one cannot simultaneously know with unlimited precision a particle's:",
    topic: "Wave-Particle Duality & Uncertainty",
    explanation:
      "Position and momentum are conjugate quantities whose uncertainties obey a lower bound of the order of Planck's constant; pinning down one more tightly necessarily loosens knowledge of the other, a fundamental limit rather than a measurement flaw.",
    choices: [
      { text: "position and momentum", isCorrect: true },
      { text: "its rest mass together with its electric charge" },
      { text: "its electric charge together with its spin state" },
      { text: "its total energy together with its rest mass" },
    ],
  },
  {
    stem: "A key consequence of the uncertainty principle for the atom is that the electron is best described by:",
    topic: "Wave-Particle Duality & Uncertainty",
    explanation:
      "Because we cannot assign the electron a definite path, the sharp Bohr orbit is replaced by an orbital, a region of space giving the probability of finding the electron; this probabilistic cloud is the quantum-mechanical picture of the atom.",
    choices: [
      { text: "a probability distribution called an orbital", isCorrect: true },
      { text: "a fixed circular orbit of one definite radius" },
      { text: "a straight-line trajectory across the atom" },
      { text: "a stationary point charge fixed in space" },
    ],
  },
  {
    stem: "In quantum mechanics, the square of the wavefunction at a point represents:",
    topic: "Wave-Particle Duality & Uncertainty",
    explanation:
      "The wavefunction itself has no direct physical meaning, but its square gives the probability density, so that the probability of finding the electron in a small volume is the square of the wavefunction times that volume; this is the Born interpretation.",
    choices: [
      { text: "the probability density of the electron", isCorrect: true },
      { text: "the precise instantaneous position of the electron" },
      { text: "the total energy carried by the moving electron" },
      { text: "the fixed electric charge held by the electron" },
    ],
  },
  {
    stem: "Solving the Schrödinger equation for an electron bound in an atom yields:",
    topic: "Wave-Particle Duality & Uncertainty",
    explanation:
      "The boundary conditions on the wavefunction permit only certain solutions, and these carry only particular allowed energies; quantization thus emerges naturally from the wave equation, without the arbitrary postulates Bohr had to impose.",
    choices: [
      { text: "a set of quantized energy states", isCorrect: true },
      { text: "a single continuous energy" },
      { text: "no allowed energies at all" },
      { text: "energies that depend on charge only" },
    ],
  },
  {
    stem: "The diffraction of a beam of electrons by a crystal, as seen by Davisson and Germer, confirmed that electrons:",
    topic: "Wave-Particle Duality & Uncertainty",
    explanation:
      "Diffraction is a wave phenomenon, so the appearance of an electron diffraction pattern showed directly that particles of matter possess wave character, just as de Broglie had predicted; the spacing of the pattern matched the de Broglie wavelength.",
    choices: [
      { text: "possess a wave nature", isCorrect: true },
      { text: "carry no momentum" },
      { text: "are purely classical particles" },
      { text: "have no measurable mass" },
    ],
  },
  {
    stem: "Which of the following follow from the wave nature of the electron and the uncertainty principle? Select all that apply.",
    type: "MULTI",
    topic: "Wave-Particle Duality & Uncertainty",
    explanation:
      "The wave picture predicts that electrons diffract and that the atom's energies are quantized, while the uncertainty principle forbids a defined orbit and replaces it with a probability cloud; a fixed circular path and exact simultaneous knowledge of position and momentum are both excluded.",
    choices: [
      { text: "electrons can be diffracted", isCorrect: true },
      { text: "exact orbits cannot be defined", isCorrect: true },
      { text: "the electron is a probability cloud", isCorrect: true },
      { text: "energy levels are quantized", isCorrect: true },
      { text: "the electron follows a fixed orbit" },
      { text: "position and momentum are both exact" },
    ],
  },
  {
    stem: "The principal quantum number n primarily determines an electron's:",
    topic: "Quantum Numbers",
    explanation:
      "The principal quantum number labels the shell and sets the electron's energy and its average distance from the nucleus; larger n means a higher-energy, more diffuse orbital lying farther out on average.",
    choices: [
      { text: "its energy and its average distance from the nucleus", isCorrect: true },
      { text: "only the geometric shape of its occupied orbital" },
      { text: "only the intrinsic spin orientation it carries" },
      { text: "only its magnetic orientation in a field" },
    ],
  },
  {
    stem: "The azimuthal (angular-momentum) quantum number l determines the:",
    topic: "Quantum Numbers",
    explanation:
      "The quantum number l fixes the subshell and hence the shape of the orbital, distinguishing s from p from d from f; for a given n it may take integer values from zero up to n minus one.",
    choices: [
      { text: "shape of the orbital", isCorrect: true },
      { text: "size of the orbital" },
      { text: "spin of the electron" },
      { text: "number of neutrons" },
    ],
  },
  {
    stem: "An electron in a subshell with l = 2 occupies an orbital of type:",
    topic: "Quantum Numbers",
    explanation:
      "The values l = 0, 1, 2, 3 correspond to s, p, d, f orbitals respectively, so l = 2 designates a d orbital; this labelling scheme underlies the whole notation of electron configurations.",
    choices: [
      { text: "d", isCorrect: true },
      { text: "s" },
      { text: "p" },
      { text: "f" },
    ],
  },
  {
    stem: "For a subshell with l = 1, the number of allowed magnetic quantum numbers, and hence orbitals, is:",
    topic: "Quantum Numbers",
    explanation:
      "The magnetic quantum number runs from minus l to plus l in integer steps, giving 2l + 1 values; for l = 1 that is three, matching the three p orbitals oriented along the x, y and z axes.",
    choices: [
      { text: "3", isCorrect: true },
      { text: "1" },
      { text: "2" },
      { text: "5" },
    ],
  },
  {
    stem: "The spin magnetic quantum number of an electron may take the values:",
    topic: "Quantum Numbers",
    explanation:
      "An electron behaves as though it has an intrinsic spin with just two possible orientations, described by spin quantum numbers of plus one-half and minus one-half; this two-valuedness lets each spatial orbital hold two electrons.",
    choices: [
      { text: "+1/2 or −1/2", isCorrect: true },
      { text: "0 or 1" },
      { text: "any value from −l to +l" },
      { text: "+1 or −1" },
    ],
  },
  {
    stem: "Which of the following sets of quantum numbers (n, l, mₗ) is not allowed?",
    topic: "Quantum Numbers",
    explanation:
      "The rule l < n forbids the set with n = 2 and l = 2, since l may reach only n minus one; the other sets obey both l < n and the requirement that m sub l lie between minus l and plus l, so they are permitted.",
    choices: [
      { text: "n = 2, l = 2, mₗ = 0", isCorrect: true },
      { text: "n = 3, l = 2, mₗ = −1" },
      { text: "n = 2, l = 1, mₗ = 0" },
      { text: "n = 1, l = 0, mₗ = 0" },
    ],
  },
  {
    stem: "The maximum number of electrons that the shell with n = 3 can hold is:",
    topic: "Quantum Numbers",
    explanation:
      "A shell holds n squared orbitals and, with two electrons each, 2n squared electrons; for n = 3 that is eighteen, distributed as two in 3s, six in 3p and ten in 3d.",
    choices: [
      { text: "18", isCorrect: true },
      { text: "8" },
      { text: "9" },
      { text: "32" },
    ],
  },
  {
    stem: "A complete set of d orbitals can accommodate at most how many electrons?",
    topic: "Quantum Numbers",
    explanation:
      "The five d orbitals each hold two electrons of opposite spin, so a d subshell is full at ten electrons; this is why the d block spans ten groups across each transition series.",
    choices: [
      { text: "10", isCorrect: true },
      { text: "6" },
      { text: "14" },
      { text: "8" },
    ],
  },
  {
    stem: "Which statements about the quantum numbers are correct? Select all that apply.",
    type: "MULTI",
    topic: "Quantum Numbers",
    explanation:
      "The principal quantum number sets the shell and energy, l ranges from zero to n minus one, m sub l ranges from minus l to plus l, and each orbital holds at most two electrons; l cannot equal n, and the spin quantum number is not drawn from the range of m sub l.",
    choices: [
      { text: "n sets the shell and energy", isCorrect: true },
      { text: "l ranges from 0 to n − 1", isCorrect: true },
      { text: "mₗ ranges from −l to +l", isCorrect: true },
      { text: "an orbital holds at most two electrons", isCorrect: true },
      { text: "l can be equal to n for a heavy enough atom" },
      { text: "the spin m_s ranges from −l to +l as mₗ does" },
    ],
  },
  {
    stem: "The shape of an s orbital is:",
    topic: "Atomic Orbitals",
    explanation:
      "An s orbital is spherically symmetric about the nucleus, so the probability of finding the electron depends only on distance, not on direction; this symmetry is why s electrons penetrate closest to the nucleus.",
    choices: [
      { text: "spherically symmetric", isCorrect: true },
      { text: "dumbbell-shaped" },
      { text: "cloverleaf-shaped" },
      { text: "ring-shaped" },
    ],
  },
  {
    stem: "A set of p orbitals in a given shell consists of:",
    topic: "Atomic Orbitals",
    explanation:
      "The three p orbitals are dumbbell-shaped and mutually perpendicular, aligned along the x, y and z axes; they are degenerate in an isolated atom and together can hold six electrons.",
    choices: [
      { text: "three orbitals at right angles", isCorrect: true },
      { text: "a single spherical orbital" },
      { text: "five cloverleaf orbitals" },
      { text: "seven orbitals" },
    ],
  },
  {
    stem: "The total number of nodes in an atomic orbital is equal to:",
    topic: "Atomic Orbitals",
    explanation:
      "An orbital has n minus one nodes in all, split into l angular (planar or conical) nodes and the remainder radial; the count of nodes rises with n, reflecting the higher energy and greater structure of upper orbitals.",
    choices: [
      { text: "n − 1", isCorrect: true },
      { text: "n" },
      { text: "l" },
      { text: "n + l" },
    ],
  },
  {
    stem: "The number of angular (nodal-plane) nodes in an orbital equals:",
    topic: "Atomic Orbitals",
    explanation:
      "Angular nodes are fixed by the angular-momentum quantum number and equal l, so an s orbital has none, a p orbital one, and a d orbital two; the leftover nodes, n minus one minus l, are radial.",
    choices: [
      { text: "l", isCorrect: true },
      { text: "n" },
      { text: "n − 1" },
      { text: "2l + 1" },
    ],
  },
  {
    stem: "A 2s orbital contains how many radial nodes?",
    topic: "Atomic Orbitals",
    explanation:
      "Radial nodes number n minus one minus l, which for the 2s orbital is 2 minus 1 minus 0, that is one; this spherical node separates an inner and an outer region of electron density.",
    choices: [
      { text: "1", isCorrect: true },
      { text: "0" },
      { text: "2" },
      { text: "3" },
    ],
  },
  {
    stem: "Within a given shell, the subshell whose electrons penetrate closest to the nucleus is the:",
    topic: "Atomic Orbitals",
    explanation:
      "For a fixed n, penetration decreases in the order s greater than p greater than d greater than f; the more penetrating s electrons feel a larger effective nuclear charge and so lie lower in energy in many-electron atoms.",
    choices: [
      { text: "s subshell", isCorrect: true },
      { text: "p subshell" },
      { text: "d subshell" },
      { text: "f subshell" },
    ],
  },
  {
    stem: "True or False: In the hydrogen atom the 2s and 2p orbitals are degenerate, but in a many-electron atom the 2s lies lower in energy than the 2p.",
    type: "TRUE_FALSE",
    topic: "Atomic Orbitals",
    explanation:
      "True. With only one electron, hydrogen's subshells of the same n share the same energy; in many-electron atoms, differing penetration and shielding split them, so 2s, being more penetrating, drops below 2p.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Which statements about atomic orbitals are correct? Select all that apply.",
    type: "MULTI",
    topic: "Atomic Orbitals",
    explanation:
      "An s orbital is spherical, a p set has three perpendicular orbitals, the total number of nodes is n minus one, and the number of angular nodes equals l; an s orbital has no angular node, and d orbitals come as a set of five, not three.",
    choices: [
      { text: "an s orbital is spherical", isCorrect: true },
      { text: "a p set has three orbitals", isCorrect: true },
      { text: "total nodes equal n − 1", isCorrect: true },
      { text: "angular nodes equal l", isCorrect: true },
      { text: "an s orbital has a planar node" },
      { text: "d orbitals come in a set of three" },
    ],
  },
  {
    stem: "The Aufbau principle directs that, in the ground state, electrons are added:",
    topic: "Electron Configuration",
    explanation:
      "The building-up principle fills the lowest-energy orbitals first, working upward; combined with the Pauli principle and Hund's rule it predicts the ground-state configuration of most atoms across the periodic table.",
    choices: [
      { text: "to the lowest-energy orbitals first", isCorrect: true },
      { text: "to the highest-energy orbitals first" },
      { text: "evenly across all orbitals" },
      { text: "only to the valence shell" },
    ],
  },
  {
    stem: "The Pauli exclusion principle states that:",
    topic: "Electron Configuration",
    explanation:
      "No two electrons in the same atom may share all four quantum numbers; because a spatial orbital fixes three of them, the two electrons it holds must differ in spin, which caps every orbital at two electrons.",
    choices: [
      { text: "no two electrons share all four quantum numbers", isCorrect: true },
      { text: "all electrons in one atom must have parallel spins" },
      { text: "orbitals have to be filled two at a time first" },
      { text: "only the s orbitals of an atom may be filled" },
    ],
  },
  {
    stem: "Hund's rule of maximum multiplicity requires that a set of degenerate orbitals be:",
    topic: "Electron Configuration",
    explanation:
      "Electrons occupy degenerate orbitals singly, with parallel spins, before any pairing begins; this arrangement minimizes electron–electron repulsion and lowers the energy, giving, for example, three unpaired electrons in nitrogen's 2p subshell.",
    choices: [
      { text: "filled singly with parallel spins before pairing", isCorrect: true },
      { text: "filled two electrons at a time from the start" },
      { text: "left completely empty until forced to fill up" },
      { text: "filled with paired, opposite spins from the start" },
    ],
  },
  {
    stem: "By the n + l (Madelung) ordering rule, which subshell is filled first?",
    topic: "Electron Configuration",
    explanation:
      "The subshell of lower n plus l fills first, and ties are broken by the lower n; since 4s has n + l = 4 while 3d has n + l = 5, the 4s fills before the 3d, which is why potassium and calcium precede the transition metals.",
    choices: [
      { text: "4s before 3d", isCorrect: true },
      { text: "3d before 4s" },
      { text: "4p before 4s" },
      { text: "4f before 4d" },
    ],
  },
  {
    stem: "The ground-state electron configuration of sulfur (Z = 16) is:",
    topic: "Electron Configuration",
    explanation:
      "Sulfur has sixteen electrons: a neon core of ten plus 3s squared and 3p to the fourth, written [Ne]3s²3p⁴; the four p electrons leave two unpaired, consistent with sulfur's typical divalent behavior.",
    choices: [
      { text: "[Ne]3s²3p⁴", isCorrect: true },
      { text: "[Ne]3s²3p⁶" },
      { text: "[Ne]3s²3p³" },
      { text: "[Ar]3s²3p⁴" },
    ],
  },
  {
    stem: "Writing a configuration with a noble-gas core, such as [Ne] for the first ten electrons, is done because:",
    topic: "Electron Configuration",
    explanation:
      "The noble-gas shorthand replaces the filled inner shells, which form a chemically inert core, by the symbol of the preceding noble gas; this focuses attention on the valence electrons that actually determine an element's chemistry.",
    choices: [
      { text: "the core electrons are chemically inert", isCorrect: true },
      { text: "the core electrons do not really exist at all" },
      { text: "noble gases contain no electrons whatsoever" },
      { text: "only the core electrons take part in reactions" },
    ],
  },
  {
    stem: "The ground-state configuration of iron (Z = 26) is:",
    topic: "Electron Configuration",
    explanation:
      "Iron's twenty-six electrons fill an argon core and then 4s squared and 3d to the sixth, giving [Ar]3d⁶4s²; the partly filled 3d subshell is the source of iron's variable oxidation states and its magnetism.",
    choices: [
      { text: "[Ar]3d⁶4s²", isCorrect: true },
      { text: "[Ar]3d⁸" },
      { text: "[Ar]3d⁴4s²" },
      { text: "[Ar]4s²3d⁴" },
    ],
  },
  {
    stem: "True or False: By Hund's rule, the ground state of the nitrogen atom has three unpaired electrons, one in each 2p orbital.",
    type: "TRUE_FALSE",
    topic: "Electron Configuration",
    explanation:
      "True. Nitrogen's three 2p electrons each take a separate p orbital with parallel spins before any pairing, giving a half-filled 2p subshell with three unpaired electrons, which accounts for nitrogen's magnetic and spectroscopic behavior.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Which rules govern the ground-state electron configuration of an atom? Select all that apply.",
    type: "MULTI",
    topic: "Electron Configuration",
    explanation:
      "The Aufbau order fills the lowest-energy orbitals first, the Pauli principle limits an orbital to two electrons, Hund's rule maximizes parallel spins in degenerate orbitals, and the n plus l rule places 4s below 3d; electrons do not pair before singly filling degenerate orbitals, and no two may share all four quantum numbers.",
    choices: [
      { text: "Aufbau fills lowest energy first", isCorrect: true },
      { text: "Pauli limits an orbital to two electrons", isCorrect: true },
      { text: "Hund maximizes parallel spins", isCorrect: true },
      { text: "the n + l rule puts 4s below 3d", isCorrect: true },
      { text: "electrons pair before filling singly" },
      { text: "two electrons may share all quantum numbers" },
    ],
  },
  {
    stem: "Chromium (Z = 24) adopts the anomalous ground-state configuration:",
    topic: "Configuration of Ions & Anomalies",
    explanation:
      "Rather than [Ar]3d⁴4s², chromium is [Ar]3d⁵4s¹, because a half-filled 3d subshell together with a half-filled 4s is unusually stable; the small energy gap between 4s and 3d makes such a rearrangement favorable.",
    choices: [
      { text: "[Ar]3d⁵4s¹", isCorrect: true },
      { text: "[Ar]3d⁴4s²" },
      { text: "[Ar]3d⁶4s⁰" },
      { text: "[Ar]3d³4s³" },
    ],
  },
  {
    stem: "Copper (Z = 29) has the anomalous configuration [Ar]3d¹⁰4s¹ rather than [Ar]3d⁹4s² because:",
    topic: "Configuration of Ions & Anomalies",
    explanation:
      "Promoting one 4s electron gives copper a fully filled 3d subshell, whose extra stability outweighs the small cost; the resulting [Ar]3d¹⁰4s¹ underlies copper's tendency to form the cuprous ion and its distinctive chemistry.",
    choices: [
      { text: "a filled 3d subshell is especially stable", isCorrect: true },
      { text: "the 4s orbital cannot hold two electrons" },
      { text: "copper has only one valence electron total" },
      { text: "the 3d orbital lies above the 4p" },
    ],
  },
  {
    stem: "When a first-row transition metal is ionized, electrons are removed first from the:",
    topic: "Configuration of Ions & Anomalies",
    explanation:
      "Although 4s fills before 3d, once the 3d orbitals are occupied they drop below the 4s, so in cation formation the 4s electrons leave first; this is why the common transition-metal ions have configurations ending in 3d.",
    choices: [
      { text: "4s orbital", isCorrect: true },
      { text: "3d orbital" },
      { text: "3p orbital" },
      { text: "4p orbital" },
    ],
  },
  {
    stem: "The electron configuration of the Fe²⁺ ion is:",
    topic: "Configuration of Ions & Anomalies",
    explanation:
      "Neutral iron is [Ar]3d⁶4s²; forming Fe²⁺ removes the two 4s electrons first, leaving [Ar]3d⁶. Recognizing that the 4s empties before the 3d is essential for getting transition-metal ion configurations right.",
    choices: [
      { text: "[Ar]3d⁶", isCorrect: true },
      { text: "[Ar]3d⁄4s²" },
      { text: "[Ar]3d⁵4s¹" },
      { text: "[Ar]3d⁸" },
    ],
  },
  {
    stem: "The Fe³⁺ ion is particularly stable in part because its configuration, [Ar]3d⁵, is:",
    topic: "Configuration of Ions & Anomalies",
    explanation:
      "Removing a third electron from iron gives [Ar]3d⁵, a half-filled d subshell whose symmetric, exchange-stabilized arrangement lends extra stability; this helps explain why the ferric ion is so readily formed.",
    choices: [
      { text: "a specially stable half-filled d subshell", isCorrect: true },
      { text: "a completely filled d subshell of ten electrons" },
      { text: "a completely empty d subshell of zero electrons" },
      { text: "an electron arrangement identical to that of argon" },
    ],
  },
  {
    stem: "Which ion is isoelectronic with neon (that is, has the same number of electrons)?",
    topic: "Configuration of Ions & Anomalies",
    explanation:
      "Neon has ten electrons, and the sodium cation, having lost its single 3s electron, also has ten; such isoelectronic species share an electron count, though their differing nuclear charges make their radii differ.",
    choices: [
      { text: "Na⁺", isCorrect: true },
      { text: "Cl⁻" },
      { text: "K⁺" },
      { text: "Li⁺" },
    ],
  },
  {
    stem: "True or False: The special stability of half-filled and fully filled d subshells accounts for the anomalous configurations of chromium and copper.",
    type: "TRUE_FALSE",
    topic: "Configuration of Ions & Anomalies",
    explanation:
      "True. The gain in stability from a half-filled 3d in chromium and a fully filled 3d in copper is enough to promote a 4s electron into the 3d, producing configurations that depart from the simple Aufbau prediction.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Which statements about ion configurations and anomalous atoms are correct? Select all that apply.",
    type: "MULTI",
    topic: "Configuration of Ions & Anomalies",
    explanation:
      "Chromium is [Ar]3d⁵4s¹ and copper is [Ar]3d¹⁰4s¹, the 4s electrons are removed before the 3d when cations form, and Fe³⁺ is [Ar]3d⁵; chromium is not [Ar]3d⁴4s², and the 3d electrons are not removed before the 4s.",
    choices: [
      { text: "chromium is [Ar]3d⁵4s¹", isCorrect: true },
      { text: "copper is [Ar]3d¹⁰4s¹", isCorrect: true },
      { text: "4s empties before 3d in cations", isCorrect: true },
      { text: "Fe³⁺ is [Ar]3d⁵", isCorrect: true },
      { text: "chromium is [Ar]3d⁴4s²" },
      { text: "3d empties before 4s in cations" },
    ],
  },
  {
    stem: "The effective nuclear charge experienced by a valence electron is:",
    topic: "Effective Nuclear Charge & Shielding",
    explanation:
      "The effective nuclear charge is the true nuclear charge reduced by the screening of the intervening electrons, written Z sub eff equals Z minus the shielding constant; it is the net pull the electron actually feels and governs size and ionization energy.",
    choices: [
      { text: "the nuclear charge minus the electron shielding", isCorrect: true },
      { text: "the nuclear charge plus the electron count" },
      { text: "equal to the atomic number always" },
      { text: "the number of valence electrons" },
    ],
  },
  {
    stem: "Inner-shell electrons lower the nuclear charge felt by valence electrons through the effect of:",
    topic: "Effective Nuclear Charge & Shielding",
    explanation:
      "Electrons in shells beneath the valence level repel the outer electrons and interpose between them and the nucleus, screening much of its charge; this shielding is why an outer electron feels far less than the full nuclear pull.",
    choices: [
      { text: "shielding, or screening", isCorrect: true },
      { text: "nuclear fusion" },
      { text: "orbital hybridization" },
      { text: "spin pairing" },
    ],
  },
  {
    stem: "Slater's rules provide an empirical way to estimate:",
    topic: "Effective Nuclear Charge & Shielding",
    explanation:
      "Slater's rules assign screening contributions to the various groups of electrons, giving a shielding constant and hence an estimate of the effective nuclear charge; the scheme is approximate but captures the main trends in size and energy.",
    choices: [
      { text: "the shielding constant and effective charge", isCorrect: true },
      { text: "the precise energies of all the atomic orbitals" },
      { text: "the number of naturally occurring isotopes" },
      { text: "the equilibrium bond angles in a molecule" },
    ],
  },
  {
    stem: "Moving from left to right across a period, the effective nuclear charge on the valence electrons:",
    topic: "Effective Nuclear Charge & Shielding",
    explanation:
      "Each step across a period adds a proton and a valence electron, but electrons in the same shell shield one another poorly, so the net nuclear pull grows; this rising effective nuclear charge drives the contraction of atoms across a period.",
    choices: [
      { text: "increases", isCorrect: true },
      { text: "decreases" },
      { text: "stays exactly constant" },
      { text: "falls to zero" },
    ],
  },
  {
    stem: "By Slater's rules, each additional electron in the same group as the electron of interest contributes a shielding of about:",
    topic: "Effective Nuclear Charge & Shielding",
    explanation:
      "Slater assigns a screening of roughly 0.35 for each other electron in the same group, 0.85 for each in the next inner shell of an s or p electron, and 1.00 for deeper electrons; the small same-group value reflects how weakly such electrons screen one another.",
    choices: [
      { text: "0.35", isCorrect: true },
      { text: "0.85" },
      { text: "1.00" },
      { text: "0.00" },
    ],
  },
  {
    stem: "An electron in a more penetrating subshell, such as an s subshell, tends to:",
    topic: "Effective Nuclear Charge & Shielding",
    explanation:
      "Penetrating electrons spend part of their time close to the nucleus inside the inner shells, so they are shielded less and feel a larger effective nuclear charge; this is why, in a many-electron atom, an s electron lies lower in energy than a p electron of the same shell.",
    choices: [
      { text: "feel a larger effective nuclear charge", isCorrect: true },
      { text: "feel a smaller effective nuclear charge" },
      { text: "be perfectly shielded from the nucleus" },
      { text: "have no effect on its own energy" },
    ],
  },
  {
    stem: "The poor shielding provided by d and f electrons has the consequence that:",
    topic: "Effective Nuclear Charge & Shielding",
    explanation:
      "Because d and f electrons screen the nucleus inefficiently, elements that follow a d or f series feel a heightened effective nuclear charge; this underlies the lanthanide contraction and the smaller-than-expected radii of the post-transition elements.",
    choices: [
      { text: "following elements feel a larger effective charge", isCorrect: true },
      { text: "following elements feel a much smaller effective charge" },
      { text: "the shielding of the nucleus becomes essentially complete" },
      { text: "the actual nuclear charge of the atom is reduced" },
    ],
  },
  {
    stem: "True or False: Because d and f electrons shield the nucleus poorly, elements immediately following the d and f blocks experience a larger effective nuclear charge than a naive count would predict.",
    type: "TRUE_FALSE",
    topic: "Effective Nuclear Charge & Shielding",
    explanation:
      "True. The diffuse, poorly penetrating d and f orbitals leave much of the added nuclear charge unscreened, so the next electrons feel an unusually strong pull; the lanthanide contraction, which makes the second- and third-row transition metals similar in size, is a direct result.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Which statements about effective nuclear charge and shielding are correct? Select all that apply.",
    type: "MULTI",
    topic: "Effective Nuclear Charge & Shielding",
    explanation:
      "Effective nuclear charge is Z minus the shielding constant, inner electrons shield more effectively than same-shell electrons, the effective charge rises across a period, and poor shielding by d electrons raises it for the following elements; valence electrons do not shield one another completely, and the effective charge does not fall across a period.",
    choices: [
      { text: "Zₑff equals Z minus the shielding constant", isCorrect: true },
      { text: "inner electrons shield better than same-shell ones", isCorrect: true },
      { text: "effective charge increases across a period", isCorrect: true },
      { text: "poor d shielding raises it for later elements", isCorrect: true },
      { text: "valence electrons shield each other completely" },
      { text: "effective charge decreases across a period" },
    ],
  },
  {
    stem: "The block to which an element belongs is determined by:",
    topic: "Periodic Table Structure & Blocks",
    explanation:
      "An element's block is named for the subshell that receives its last, highest-energy electron, giving the s, p, d and f blocks; this classification maps directly onto the shape of the periodic table.",
    choices: [
      { text: "the subshell receiving its last electron", isCorrect: true },
      { text: "the total number of neutrons it happens to have" },
      { text: "the value of its measured relative atomic mass" },
      { text: "the characteristic color the element displays" },
    ],
  },
  {
    stem: "The period number of an element corresponds to:",
    topic: "Periodic Table Structure & Blocks",
    explanation:
      "The period is set by the highest principal quantum number that holds electrons in the ground state; each new period begins as electrons start to fill a new shell, so the period counts the occupied shells.",
    choices: [
      { text: "the highest principal quantum number occupied", isCorrect: true },
      { text: "the total count of its valence-shell electrons" },
      { text: "the number of neutrons present in its nucleus" },
      { text: "the block of the periodic table it belongs to" },
    ],
  },
  {
    stem: "The d-block elements are collectively known as the:",
    topic: "Periodic Table Structure & Blocks",
    explanation:
      "The d-block, spanning groups three to twelve, comprises the transition metals, whose partly filled d orbitals give them variable oxidation states, colored compounds, and catalytic and magnetic properties.",
    choices: [
      { text: "transition metals", isCorrect: true },
      { text: "alkali metals" },
      { text: "halogens" },
      { text: "noble gases" },
    ],
  },
  {
    stem: "The modern periodic law states that the properties of the elements are a periodic function of their:",
    topic: "Periodic Table Structure & Blocks",
    explanation:
      "Moseley's work established that atomic number, not atomic mass, is the fundamental ordering property; arranging elements by increasing atomic number makes their chemical and physical properties recur in a regular, periodic way.",
    choices: [
      { text: "atomic number", isCorrect: true },
      { text: "atomic mass" },
      { text: "neutron number" },
      { text: "density" },
    ],
  },
  {
    stem: "The f-block elements comprise the:",
    topic: "Periodic Table Structure & Blocks",
    explanation:
      "The f-block holds the lanthanides and the actinides, in which the 4f and 5f orbitals are being filled; they are usually shown separately below the main table to keep it a manageable width.",
    choices: [
      { text: "lanthanides and actinides", isCorrect: true },
      { text: "alkali and alkaline earth metals" },
      { text: "halogens and noble gases" },
      { text: "transition metals only" },
    ],
  },
  {
    stem: "The s-block of the periodic table consists of:",
    topic: "Periodic Table Structure & Blocks",
    explanation:
      "The s-block is made up of groups one and two, the alkali and alkaline-earth metals, plus helium; their chemistry is dominated by the loss of the one or two easily removed s electrons.",
    choices: [
      { text: "groups 1 and 2, together with helium", isCorrect: true },
      { text: "groups 13 to 18 of the periodic table" },
      { text: "groups 3 to 12 of the periodic table" },
      { text: "the lanthanide and actinide inner-transition rows" },
    ],
  },
  {
    stem: "The p-block spans:",
    topic: "Periodic Table Structure & Blocks",
    explanation:
      "The p-block runs from group thirteen to group eighteen as the p orbitals fill; it contains metals, metalloids and nonmetals and shows the widest variety of chemical behavior of any block.",
    choices: [
      { text: "groups 13 to 18", isCorrect: true },
      { text: "groups 1 and 2" },
      { text: "groups 3 to 12" },
      { text: "only the noble gases" },
    ],
  },
  {
    stem: "Metalloids, with properties intermediate between metals and nonmetals, are found:",
    topic: "Periodic Table Structure & Blocks",
    explanation:
      "The metalloids lie along the diagonal staircase separating metals from nonmetals in the p-block; elements such as silicon and germanium show the intermediate, semiconducting behavior that gives this region its importance in electronics.",
    choices: [
      { text: "along the staircase dividing metals and nonmetals", isCorrect: true },
      { text: "only within the s-block region of the whole table" },
      { text: "distributed among the d-block transition metals" },
      { text: "only within the very first period of the table" },
    ],
  },
  {
    stem: "The number of elements in a period is set by:",
    topic: "Periodic Table Structure & Blocks",
    explanation:
      "The length of a period equals the number of electrons the newly available orbitals can hold, so periods of two, eight, eight, eighteen and thirty-two arise as s, then p, then d, then f subshells become accessible.",
    choices: [
      { text: "how many electrons the available orbitals hold", isCorrect: true },
      { text: "the number of neutrons added to each nucleus" },
      { text: "the average relative atomic mass of the elements" },
      { text: "the characteristic flame color of the elements" },
    ],
  },
  {
    stem: "Which pairings of block and groups are correct? Select all that apply.",
    type: "MULTI",
    topic: "Periodic Table Structure & Blocks",
    explanation:
      "The s-block is groups one and two, the p-block is groups thirteen to eighteen, the d-block is the transition metals, and the f-block is the lanthanides and actinides; the d-block is not groups one and two, and the p-block is not the transition metals.",
    choices: [
      { text: "s-block is groups 1 and 2", isCorrect: true },
      { text: "p-block is groups 13 to 18", isCorrect: true },
      { text: "d-block is the transition metals", isCorrect: true },
      { text: "f-block is the lanthanides and actinides", isCorrect: true },
      { text: "the d-block is groups 1 and 2 of the table" },
      { text: "the p-block region holds the transition metals" },
    ],
  },
  {
    stem: "A chemical species is paramagnetic when it possesses:",
    topic: "Magnetic Properties",
    explanation:
      "Paramagnetism arises from unpaired electron spins, which align with an applied field and draw the substance into it; the more unpaired electrons, the stronger the effect, so counting them predicts the magnetic behavior.",
    choices: [
      { text: "one or more unpaired electrons", isCorrect: true },
      { text: "only fully paired electrons" },
      { text: "no electrons at all" },
      { text: "an even atomic number" },
    ],
  },
  {
    stem: "Which of the following ions is diamagnetic?",
    topic: "Magnetic Properties",
    explanation:
      "Diamagnetic species have every electron paired. The zinc(II) ion is [Ar]3d¹⁰ with a completely filled d subshell and no unpaired electrons, whereas Fe³⁺, Mn²⁺ and Cu²⁺ all retain unpaired d electrons and are paramagnetic.",
    choices: [
      { text: "Zn²⁺, which is [Ar]3d¹⁰", isCorrect: true },
      { text: "Fe³⁺, which is [Ar]3d⁵" },
      { text: "Mn²⁺, which is [Ar]3d⁵" },
      { text: "Cu²⁺, which is [Ar]3d⁹" },
    ],
  },
  {
    stem: "The spin-only magnetic moment of a transition-metal ion depends only on the number of:",
    topic: "Magnetic Properties",
    explanation:
      "The spin-only formula, the square root of n times n plus two in Bohr magnetons, uses n, the number of unpaired electrons; it ignores orbital contributions and works well for many first-row transition-metal ions.",
    choices: [
      { text: "unpaired electrons", isCorrect: true },
      { text: "total electrons" },
      { text: "neutrons" },
      { text: "filled orbitals" },
    ],
  },
  {
    stem: "For an ion with three unpaired electrons, the spin-only magnetic moment is approximately:",
    topic: "Magnetic Properties",
    explanation:
      "Using the square root of n times n plus two with n equal to three gives the square root of fifteen, about 3.87 Bohr magnetons; this predicted value agrees closely with measured moments for ions such as Cr³⁺.",
    choices: [
      { text: "3.87 Bohr magnetons", isCorrect: true },
      { text: "1.73 Bohr magnetons" },
      { text: "2.83 Bohr magnetons" },
      { text: "5.92 Bohr magnetons" },
    ],
  },
  {
    stem: "A substance in which all electrons are paired is described as:",
    topic: "Magnetic Properties",
    explanation:
      "With no unpaired spins there is no net magnetic moment, and the substance is diamagnetic, being weakly repelled by a magnetic field; diamagnetism is a property of all matter but is masked when unpaired electrons make a species paramagnetic.",
    choices: [
      { text: "diamagnetic", isCorrect: true },
      { text: "paramagnetic" },
      { text: "ferromagnetic" },
      { text: "radioactive" },
    ],
  },
  {
    stem: "True or False: An ion with all of its electrons paired is diamagnetic and is weakly repelled by a magnetic field.",
    type: "TRUE_FALSE",
    topic: "Magnetic Properties",
    explanation:
      "True. Paired electrons contribute no net spin magnetic moment, so the species has no permanent moment and is pushed slightly out of a magnetic field; only unpaired electrons produce the attraction of paramagnetism.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The energy of a photon is related to its wavelength by the expression:",
    topic: "Applications & Calculations",
    explanation:
      "Combining E equals h nu with nu equals c over lambda gives E equals hc over lambda, so photon energy rises as wavelength shortens; this relation converts between the wavelength of a spectral line and the energy of the transition that produced it.",
    choices: [
      { text: "E = hc/λ", isCorrect: true },
      { text: "E = hλ/c" },
      { text: "E = λ/hc" },
      { text: "E = hcλ" },
    ],
  },
  {
    stem: "Of ultraviolet, visible, and infrared light, the photons carrying the most energy are those of:",
    topic: "Applications & Calculations",
    explanation:
      "Photon energy increases with frequency and so decreases with wavelength; ultraviolet light has the shortest wavelength of the three and therefore the highest photon energy, which is why it is the most damaging to tissue.",
    choices: [
      { text: "ultraviolet light", isCorrect: true },
      { text: "infrared light" },
      { text: "visible red light" },
      { text: "all carry equal energy" },
    ],
  },
  {
    stem: "The energy released when a hydrogen electron falls from n = 2 to n = 1 is about:",
    topic: "Applications & Calculations",
    explanation:
      "The energy is 13.6 electronvolts times the quantity one minus one-quarter, which is 13.6 times 0.75, giving 10.2 electronvolts; this is the first line of the Lyman series, emitted in the ultraviolet.",
    choices: [
      { text: "10.2 eV", isCorrect: true },
      { text: "13.6 eV" },
      { text: "3.4 eV" },
      { text: "1.5 eV" },
    ],
  },
  {
    stem: "The ionization energy of a ground-state hydrogen atom is:",
    topic: "Applications & Calculations",
    explanation:
      "Removing the electron from the n = 1 level to n at infinity requires 13.6 electronvolts, the ionization energy of hydrogen; it equals the depth of the ground level below the ionization limit and anchors the whole hydrogen energy-level scheme.",
    choices: [
      { text: "13.6 eV", isCorrect: true },
      { text: "10.2 eV" },
      { text: "3.4 eV" },
      { text: "27.2 eV" },
    ],
  },
  {
    stem: "The energy of the n = 2 level of the hydrogen atom is:",
    topic: "Applications & Calculations",
    explanation:
      "Each level has energy minus 13.6 electronvolts divided by n squared, so for n = 2 it is minus 13.6 over four, that is minus 3.4 electronvolts; the negative sign marks the electron as bound, and the value rises toward zero as n grows.",
    choices: [
      { text: "−3.4 eV", isCorrect: true },
      { text: "−13.6 eV" },
      { text: "−6.8 eV" },
      { text: "−1.5 eV" },
    ],
  },
  {
    stem: "The characteristic colors produced when metal salts are heated in a flame arise from:",
    topic: "Applications & Calculations",
    explanation:
      "Heat promotes electrons to higher levels, and as they fall back they emit photons of definite energies set by the spacing of the atom's levels; the resulting wavelengths give each element its signature flame color, the basis of a simple qualitative test.",
    choices: [
      { text: "electrons emitting photons of specific energies", isCorrect: true },
      { text: "the physical melting of the heated metal ions" },
      { text: "neutrons being ejected from the metal nuclei" },
      { text: "a continuous glow produced simply by the heating" },
    ],
  },
  {
    stem: "Which quantities can be obtained from the Bohr–Rydberg treatment of the hydrogen atom? Select all that apply.",
    type: "MULTI",
    topic: "Applications & Calculations",
    explanation:
      "The model yields the wavelength of each spectral line, the ionization energy from the ground state, the energy of every level, and the energy of any transition; it cannot give the exact position of the electron or the orientation of its spin.",
    choices: [
      { text: "the wavelength of a spectral line", isCorrect: true },
      { text: "the ionization energy from the ground state", isCorrect: true },
      { text: "the energy of each level", isCorrect: true },
      { text: "the energy of a given transition", isCorrect: true },
      { text: "the exact position of the electron" },
      { text: "the orientation of the electron's spin" },
    ],
  },
  {
    stem: "Which statements about photon energy are correct? Select all that apply.",
    type: "MULTI",
    topic: "Applications & Calculations",
    explanation:
      "Photon energy is proportional to frequency and inversely proportional to wavelength, ultraviolet photons carry more energy than infrared, and the energy equals hc over lambda; energy is not proportional to wavelength, and red photons are less energetic, not more, than blue.",
    choices: [
      { text: "energy is proportional to frequency", isCorrect: true },
      { text: "energy is inversely proportional to wavelength", isCorrect: true },
      { text: "ultraviolet photons exceed infrared in energy", isCorrect: true },
      { text: "E equals hc divided by lambda", isCorrect: true },
      { text: "energy is directly proportional to the wavelength" },
      { text: "red-light photons exceed blue-light ones in energy" },
    ],
  },
];
