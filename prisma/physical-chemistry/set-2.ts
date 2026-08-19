import type { Q } from "../_lib/qbank";

export const PHYSICAL_SET_2: Q[] = [
  {
    stem: "The first law of thermodynamics for a closed system is expressed as:",
    topic: "First Law",
    explanation:
      "The first law states ΔU = q + w: the change in internal energy equals the heat added to the system plus the work done on it. It is a statement of the conservation of energy.",
    choices: [
      { text: "ΔU = q + w", isCorrect: true },
      { text: "ΔU = q − w always" },
      { text: "ΔU = q × w" },
      { text: "ΔU = w − q" },
    ],
  },
  {
    stem: "In the convention where w is work done ON the system, compression of a gas corresponds to:",
    topic: "First Law",
    explanation:
      "When the surroundings compress the gas, work is done on the system, so w is positive (energy flows in). In expansion the system does work on the surroundings and w is negative in this convention.",
    choices: [
      { text: "Positive work (w > 0)", isCorrect: true },
      { text: "Negative work (w < 0)" },
      { text: "Zero work always" },
      { text: "Work equal to the heat released" },
    ],
  },
  {
    stem: "Internal energy U is a state function, which means its change depends on:",
    topic: "First Law",
    explanation:
      "A state function depends only on the initial and final states, not on the path taken. So ΔU is fixed by the endpoints, even though q and w individually are path-dependent.",
    choices: [
      { text: "Only initial and final states", isCorrect: true },
      { text: "The particular path taken" },
      { text: "The total time elapsed" },
      { text: "The size of the surroundings" },
    ],
  },
  {
    stem: "Heat (q) and work (w) are best described as:",
    topic: "First Law",
    explanation:
      "Heat and work are path functions (energy in transit), not properties of the system. Their values depend on how a change is carried out, whereas their sum ΔU is path-independent.",
    choices: [
      { text: "Path functions, not state functions", isCorrect: true },
      { text: "State functions like internal energy" },
      { text: "Always equal to one another" },
      { text: "Independent of the process path" },
    ],
  },
  {
    stem: "The expansion work done by a gas against a constant external pressure is:",
    topic: "Work",
    explanation:
      "Against a constant external pressure, w = −p_ext·ΔV (work done on the system). The gas doing work by expanding (ΔV > 0) gives negative w in this convention.",
    choices: [
      { text: "w = −p_ext ΔV", isCorrect: true },
      { text: "w = +p_ext ΔV" },
      { text: "w = −ΔV/p_ext" },
      { text: "w = p_ext/ΔV" },
    ],
  },
  {
    stem: "A process carried out so that the system stays infinitesimally close to equilibrium throughout is called:",
    topic: "Work",
    explanation:
      "A reversible process proceeds through a continuous succession of equilibrium states and can be reversed by an infinitesimal change. Reversible expansion does the maximum possible work.",
    choices: [
      { text: "Reversible", isCorrect: true },
      { text: "Adiabatic" },
      { text: "Irreversible" },
      { text: "Isochoric" },
    ],
  },
  {
    stem: "For the isothermal reversible expansion of an ideal gas, the work done on the system is:",
    topic: "Work",
    explanation:
      "Isothermal reversible expansion gives w = −nRT ln(V₂/V₁). Because the gas expands against a matched pressure at every step, this reversible path extracts the maximum work.",
    choices: [
      { text: "w = −nRT ln(V₂/V₁)", isCorrect: true },
      { text: "w = −p ΔV (constant p)" },
      { text: "w = nRT(V₂ − V₁)" },
      { text: "w = 0 for any expansion" },
    ],
  },
  {
    stem: "During a reversible isothermal expansion of an ideal gas, the change in internal energy ΔU is:",
    topic: "First Law",
    explanation:
      "For an ideal gas, U depends only on temperature. In an isothermal process T is constant, so ΔU = 0, and therefore q = −w: all the heat absorbed is converted to work.",
    choices: [
      { text: "Zero", isCorrect: true },
      { text: "Equal to the work done" },
      { text: "Always positive" },
      { text: "Equal to the enthalpy change" },
    ],
  },
  {
    stem: "A process that occurs with no heat exchange between system and surroundings (q = 0) is:",
    topic: "First Law",
    explanation:
      "An adiabatic process has q = 0, so ΔU = w. Adiabatic compression raises the temperature (work done on the gas), and adiabatic expansion lowers it.",
    choices: [
      { text: "Adiabatic", isCorrect: true },
      { text: "Isothermal" },
      { text: "Isobaric" },
      { text: "Reversible by definition" },
    ],
  },
  {
    stem: "For a process carried out at constant volume with only expansion work possible, the heat absorbed equals:",
    topic: "First Law",
    explanation:
      "At constant volume no expansion work is done (w = 0), so ΔU = q_V. The heat measured in a bomb (constant-volume) calorimeter therefore gives the internal energy change directly.",
    choices: [
      { text: "The internal energy change, ΔU", isCorrect: true },
      { text: "The change in enthalpy, ΔH" },
      { text: "The expansion work done, w" },
      { text: "Exactly zero in all cases" },
    ],
  },
  {
    stem: "The internal energy of an ideal gas depends only on its:",
    topic: "First Law",
    explanation:
      "For an ideal gas there are no intermolecular forces, so internal energy is purely kinetic and depends only on temperature (and amount), not on pressure or volume.",
    choices: [
      { text: "Its temperature and amount", isCorrect: true },
      { text: "Its pressure alone" },
      { text: "Its volume alone" },
      { text: "The container shape" },
    ],
  },
  {
    stem: "When a gas expands freely into a vacuum (Joule expansion), the work done is:",
    topic: "Work",
    explanation:
      "Expansion into a vacuum has no opposing pressure (p_ext = 0), so w = 0. For an ideal gas the temperature is also unchanged, so q = 0 and ΔU = 0 as well.",
    choices: [
      { text: "Zero, because there is no opposing pressure", isCorrect: true },
      { text: "Maximum, because the volume change is large" },
      { text: "Equal to nRT ln 2" },
      { text: "Negative and large" },
    ],
  },
  {
    stem: "In the sign convention used here, an exothermic process that releases heat to the surroundings has:",
    topic: "First Law",
    explanation:
      "Heat leaving the system is counted as negative, so an exothermic process has q < 0. An endothermic process, absorbing heat, has q > 0.",
    choices: [
      { text: "q < 0", isCorrect: true },
      { text: "q > 0" },
      { text: "q = 0 exactly" },
      { text: "w = 0 exactly" },
    ],
  },
  {
    stem: "Which quantities are state functions? Select all that apply.",
    type: "MULTI",
    topic: "First Law",
    explanation:
      "Internal energy, enthalpy and temperature are state functions (path-independent). Heat and work are path functions — they describe energy in transit and depend on how the change is carried out.",
    choices: [
      { text: "Internal energy (U)", isCorrect: true },
      { text: "Enthalpy (H)", isCorrect: true },
      { text: "Temperature (T)", isCorrect: true },
      { text: "Heat (q)" },
      { text: "Work (w)" },
    ],
  },
  {
    stem: "Which statements about the first law and work are correct? Select all that apply.",
    type: "MULTI",
    topic: "First Law",
    explanation:
      "ΔU = q + w; ΔU is path-independent; for an ideal gas ΔU depends only on T; free expansion does no work; reversible isothermal work is −nRT ln(V₂/V₁). Heat and work are not themselves state functions.",
    choices: [
      { text: "ΔU = q + w for a closed system", isCorrect: true },
      { text: "ΔU depends only on the initial and final states", isCorrect: true },
      { text: "An ideal gas's internal energy depends only on temperature", isCorrect: true },
      { text: "Free expansion into a vacuum does zero work", isCorrect: true },
      { text: "Heat and work are state functions" },
    ],
  },
  {
    stem: "For the isothermal expansion of an ideal gas, the change in internal energy is zero and all the heat absorbed is converted into work done by the gas.",
    type: "TRUE_FALSE",
    topic: "First Law",
    explanation:
      "Since an ideal gas's internal energy depends only on temperature, ΔU = 0 at constant T; the first law then gives q = −w, so the absorbed heat exactly equals the work done by the gas.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Enthalpy H is defined in terms of internal energy, pressure and volume as:",
    topic: "Enthalpy & Thermochemistry",
    explanation:
      "Enthalpy is defined H = U + pV. This combination is convenient because, at constant pressure with only expansion work, the heat absorbed equals ΔH.",
    choices: [
      { text: "H = U + pV", isCorrect: true },
      { text: "H = U − pV" },
      { text: "H = U + p/V" },
      { text: "H = pV − U" },
    ],
  },
  {
    stem: "At constant pressure, with only expansion work permitted, the heat absorbed by a system equals its:",
    topic: "Enthalpy & Thermochemistry",
    explanation:
      "At constant pressure, q_p = ΔH. This is why enthalpy is the natural heat measure for reactions run open to the atmosphere, where pressure is fixed.",
    choices: [
      { text: "Change in enthalpy, ΔH", isCorrect: true },
      { text: "Change in internal energy, ΔU" },
      { text: "Work done, w" },
      { text: "Entropy change, ΔS" },
    ],
  },
  {
    stem: "For a reaction involving ideal gases, ΔH and ΔU are related by:",
    topic: "Enthalpy & Thermochemistry",
    explanation:
      "ΔH = ΔU + Δ(pV) = ΔU + Δn_gas·RT, where Δn_gas is the change in the number of moles of gas. When Δn_gas = 0, ΔH ≈ ΔU.",
    choices: [
      { text: "ΔH = ΔU + Δn_gas RT", isCorrect: true },
      { text: "ΔH = ΔU − Δn_gas RT" },
      { text: "ΔH = ΔU × Δn_gas" },
      { text: "ΔH = ΔU / RT" },
    ],
  },
  {
    stem: "The molar heat capacity at constant volume, C_V, is defined as the:",
    topic: "Heat Capacities",
    explanation:
      "C_V = (∂U/∂T)_V — the rate of change of internal energy with temperature at constant volume. It measures how much heat raises the temperature when no expansion work is done.",
    choices: [
      { text: "Change of U with T at constant volume", isCorrect: true },
      { text: "Rate of change of enthalpy with pressure" },
      { text: "Heat released per mole of reaction run" },
      { text: "Change in entropy with temperature" },
    ],
  },
  {
    stem: "The molar heat capacity at constant pressure, C_p, is defined as the:",
    topic: "Heat Capacities",
    explanation:
      "C_p = (∂H/∂T)_p — the rate of change of enthalpy with temperature at constant pressure. It exceeds C_V because some added heat also does expansion work.",
    choices: [
      { text: "Change of H with T at constant pressure", isCorrect: true },
      { text: "Rate of change of internal energy with volume" },
      { text: "Total enthalpy divided by temperature" },
      { text: "Work done per degree of heating" },
    ],
  },
  {
    stem: "For an ideal gas, the relationship between the molar heat capacities is:",
    topic: "Heat Capacities",
    explanation:
      "For one mole of ideal gas, C_p − C_V = R (Mayer's relation). At constant pressure the gas also does expansion work as it warms, requiring the extra R of heat.",
    choices: [
      { text: "C_p − C_V = R", isCorrect: true },
      { text: "C_p − C_V = 0" },
      { text: "C_V − C_p = R" },
      { text: "C_p = C_V/R" },
    ],
  },
  {
    stem: "C_p is greater than C_V for a gas because at constant pressure some of the added heat is used to:",
    topic: "Heat Capacities",
    explanation:
      "At constant pressure the gas expands as it is heated, doing work on the surroundings; that extra energy demand means more heat is needed per degree, so C_p > C_V.",
    choices: [
      { text: "Do work on the surroundings", isCorrect: true },
      { text: "Break internal chemical bonds" },
      { text: "Increase the molar mass" },
      { text: "Ionise some of the molecules" },
    ],
  },
  {
    stem: "The heat needed to raise the temperature of a substance is q = C·ΔT, where C is the:",
    topic: "Heat Capacities",
    explanation:
      "The heat capacity C is the proportionality between heat supplied and temperature rise: q = C·ΔT. It may be quoted per mole (molar heat capacity) or per gram (specific heat capacity).",
    choices: [
      { text: "Heat capacity", isCorrect: true },
      { text: "Enthalpy of formation" },
      { text: "Entropy" },
      { text: "Gas constant" },
    ],
  },
  {
    stem: "For a monatomic ideal gas, the molar heat capacity at constant volume C_V is:",
    topic: "Heat Capacities",
    explanation:
      "A monatomic ideal gas has three translational degrees of freedom, giving C_V = (3/2)R by equipartition, and hence C_p = (5/2)R.",
    choices: [
      { text: "(3/2)R", isCorrect: true },
      { text: "(5/2)R" },
      { text: "R" },
      { text: "(7/2)R" },
    ],
  },
  {
    stem: "The specific heat capacity of water is unusually high, which means that water:",
    topic: "Heat Capacities",
    explanation:
      "Water's large specific heat (about 4.18 J g⁻¹ K⁻¹) means it absorbs a lot of heat for a small temperature rise, making it an effective coolant and a moderator of climate.",
    choices: [
      { text: "Absorbs much heat per degree", isCorrect: true },
      { text: "Heats up extremely rapidly when warmed" },
      { text: "Has a very low boiling point" },
      { text: "Cannot store thermal energy" },
    ],
  },
  {
    stem: "In an adiabatic reversible expansion of an ideal gas, the temperature falls because:",
    topic: "First Law",
    explanation:
      "With q = 0, ΔU = w. As the gas does expansion work (w < 0), its internal energy — and therefore its temperature — must decrease. This underlies the cooling of rising air.",
    choices: [
      { text: "It does work from its internal energy", isCorrect: true },
      { text: "Heat flows out to the surroundings" },
      { text: "The molar mass of the gas increases" },
      { text: "Work is done on the gas by the surroundings" },
    ],
  },
  {
    stem: "For an adiabatic reversible process in an ideal gas, the relation between p and V is:",
    topic: "First Law",
    explanation:
      "Adiabatic reversible changes of an ideal gas obey pV^γ = constant, where γ = C_p/C_V. The steeper adiabat contrasts with the isotherm pV = constant.",
    choices: [
      { text: "pV^γ = constant", isCorrect: true },
      { text: "pV = constant" },
      { text: "p/V = constant" },
      { text: "p + V = constant" },
    ],
  },
  {
    stem: "A calorimeter that operates at constant volume (a bomb calorimeter) directly measures:",
    topic: "Calorimetry",
    explanation:
      "Because no expansion work is done at constant volume, the heat released equals ΔU. Combustion in a sealed bomb calorimeter therefore gives the internal energy change of reaction.",
    choices: [
      { text: "The internal energy change, ΔU", isCorrect: true },
      { text: "The enthalpy change, ΔH" },
      { text: "The entropy change, ΔS" },
      { text: "The Gibbs energy change, ΔG" },
    ],
  },
  {
    stem: "Which statements about enthalpy and heat are correct? Select all that apply.",
    type: "MULTI",
    topic: "Enthalpy & Thermochemistry",
    explanation:
      "H = U + pV; q_p = ΔH; q_V = ΔU; ΔH = ΔU + Δn_gas·RT for gas reactions. Enthalpy is a state function, not a path function.",
    choices: [
      { text: "Enthalpy is defined as H = U + pV", isCorrect: true },
      { text: "At constant pressure, q_p equals ΔH", isCorrect: true },
      { text: "At constant volume, q_V equals ΔU", isCorrect: true },
      { text: "ΔH = ΔU + Δn_gas RT for a gas-phase reaction", isCorrect: true },
      { text: "Enthalpy is a path function like heat" },
    ],
  },
  {
    stem: "Which statements about heat capacities are correct? Select all that apply.",
    type: "MULTI",
    topic: "Heat Capacities",
    explanation:
      "C_V = (∂U/∂T)_V; C_p = (∂H/∂T)_p; C_p − C_V = R for an ideal gas; C_p > C_V because of expansion work; monatomic C_V = (3/2)R. C_p is not smaller than C_V.",
    choices: [
      { text: "C_V is the temperature derivative of U at constant volume", isCorrect: true },
      { text: "C_p is the temperature derivative of H at constant pressure", isCorrect: true },
      { text: "C_p − C_V = R for an ideal gas", isCorrect: true },
      { text: "A monatomic ideal gas has C_V = (3/2)R", isCorrect: true },
      { text: "C_p is always smaller than C_V" },
    ],
  },
  {
    stem: "At constant pressure with only expansion work, the heat absorbed by a system equals its enthalpy change, whereas at constant volume it equals its internal energy change.",
    type: "TRUE_FALSE",
    topic: "Enthalpy & Thermochemistry",
    explanation:
      "q_p = ΔH and q_V = ΔU. These identities are why enthalpy suits constant-pressure (open) processes and internal energy suits constant-volume (bomb-calorimeter) processes.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The standard enthalpy of formation of a compound is the enthalpy change when one mole of it forms from:",
    topic: "Enthalpy & Thermochemistry",
    explanation:
      "ΔH°_f is the enthalpy change forming one mole of a compound from its elements in their standard (reference) states at 1 bar. It is the tabulated quantity from which reaction enthalpies are built.",
    choices: [
      { text: "Elements in their standard states", isCorrect: true },
      { text: "Any convenient set of reactants" },
      { text: "Its separate gaseous atoms" },
      { text: "The pure liquid compound" },
    ],
  },
  {
    stem: "By convention, the standard enthalpy of formation of an element in its most stable form is:",
    topic: "Enthalpy & Thermochemistry",
    explanation:
      "An element in its reference state (e.g. O₂ gas, graphite) has ΔH°_f = 0 by definition. This zero baseline lets reaction enthalpies be computed from tabulated compound values.",
    choices: [
      { text: "Zero", isCorrect: true },
      { text: "Always negative" },
      { text: "Equal to its atomic mass" },
      { text: "Equal to R" },
    ],
  },
  {
    stem: "Hess's law states that the enthalpy change of a reaction is:",
    topic: "Hess's Law",
    explanation:
      "Because enthalpy is a state function, ΔH depends only on the initial and final states, not the route. So a reaction's enthalpy is the same whether it occurs in one step or several — the basis of Hess's law.",
    choices: [
      { text: "Independent of the reaction pathway", isCorrect: true },
      { text: "Dependent on the reaction pathway" },
      { text: "Always equal to the activation energy" },
      { text: "Zero for every possible reaction" },
    ],
  },
  {
    stem: "Using standard enthalpies of formation, the enthalpy of a reaction is calculated as:",
    topic: "Hess's Law",
    explanation:
      "ΔH°_rxn = ΣΔH°_f(products) − ΣΔH°_f(reactants), each weighted by its stoichiometric coefficient. This follows from Hess's law with formation reactions as the building blocks.",
    choices: [
      { text: "Σ ΔH°_f(products) − Σ ΔH°_f(reactants)", isCorrect: true },
      { text: "Σ ΔH°_f(reactants) − Σ ΔH°_f(products)" },
      { text: "Σ ΔH°_f(products) + Σ ΔH°_f(reactants)" },
      { text: "The average of all ΔH°_f values" },
    ],
  },
  {
    stem: "The standard enthalpy of combustion is the enthalpy change when one mole of a substance is completely burned in:",
    topic: "Enthalpy & Thermochemistry",
    explanation:
      "ΔH°_c refers to complete combustion in excess oxygen under standard conditions, forming products such as CO₂ and H₂O. These values are strongly negative for fuels.",
    choices: [
      { text: "Excess oxygen under standard conditions", isCorrect: true },
      { text: "A strictly limited supply of oxygen" },
      { text: "An inert nitrogen atmosphere" },
      { text: "Pure liquid water held at 25 °C" },
    ],
  },
  {
    stem: "If a reaction is reversed, its enthalpy change:",
    topic: "Hess's Law",
    explanation:
      "Reversing a reaction changes the sign of ΔH but not its magnitude, since the initial and final states are swapped. This rule is used when combining reactions by Hess's law.",
    choices: [
      { text: "Flips sign, same magnitude", isCorrect: true },
      { text: "Stays exactly the same" },
      { text: "Becomes exactly zero" },
      { text: "Doubles in magnitude" },
    ],
  },
  {
    stem: "If the coefficients of a thermochemical equation are all doubled, the enthalpy change:",
    topic: "Hess's Law",
    explanation:
      "Enthalpy is extensive, so doubling the amounts doubles ΔH. Multiplying an equation by a factor multiplies its enthalpy change by the same factor.",
    choices: [
      { text: "Doubles", isCorrect: true },
      { text: "Stays the same" },
      { text: "Halves" },
      { text: "Changes sign" },
    ],
  },
  {
    stem: "Bond enthalpy is the energy required to:",
    topic: "Bond Enthalpies",
    explanation:
      "A bond enthalpy is the energy needed to break one mole of a particular bond in the gas phase, homolytically. Breaking bonds is endothermic; forming bonds is exothermic.",
    choices: [
      { text: "Break a mole of a bond (gas phase)", isCorrect: true },
      { text: "Form one mole of bonds from atoms" },
      { text: "Melt one full mole of a solid" },
      { text: "Ionise one full mole of atoms" },
    ],
  },
  {
    stem: "Using mean bond enthalpies, the enthalpy of a gas-phase reaction is approximately:",
    topic: "Bond Enthalpies",
    explanation:
      "ΔH ≈ Σ(bonds broken) − Σ(bonds formed). Energy is absorbed to break reactant bonds and released when product bonds form; the difference estimates the reaction enthalpy.",
    choices: [
      { text: "Σ(bonds broken) − Σ(bonds formed)", isCorrect: true },
      { text: "Σ(bonds formed) − Σ(bonds broken)" },
      { text: "Σ(bonds broken) + Σ(bonds formed)" },
      { text: "The largest single bond enthalpy" },
    ],
  },
  {
    stem: "Bond-enthalpy calculations give only approximate reaction enthalpies because tabulated bond enthalpies are:",
    topic: "Bond Enthalpies",
    explanation:
      "Mean bond enthalpies are averages over many different molecules, so the value for a specific bond in a specific compound differs slightly. They also apply strictly to gas-phase species.",
    choices: [
      { text: "Averages varying between molecules", isCorrect: true },
      { text: "Measured only at absolute zero" },
      { text: "Exact for every compound" },
      { text: "Defined only for ionic solids" },
    ],
  },
  {
    stem: "Kirchhoff's law describes how a reaction enthalpy varies with:",
    topic: "Kirchhoff's Law",
    explanation:
      "Kirchhoff's law gives the temperature dependence of ΔH: d(ΔH)/dT = ΔC_p, the difference in heat capacities of products and reactants. It lets ΔH at one temperature be converted to another.",
    choices: [
      { text: "Temperature", isCorrect: true },
      { text: "Pressure only" },
      { text: "Catalyst concentration" },
      { text: "Container volume" },
    ],
  },
  {
    stem: "According to Kirchhoff's law, the change in reaction enthalpy with temperature equals:",
    topic: "Kirchhoff's Law",
    explanation:
      "d(ΔH)/dT = ΔC_p, where ΔC_p = ΣC_p(products) − ΣC_p(reactants). Integrating gives ΔH at a new temperature from its value at a reference temperature.",
    choices: [
      { text: "ΔC_p, the heat-capacity gap", isCorrect: true },
      { text: "ΔS, the entropy change" },
      { text: "ΔG, the free-energy change" },
      { text: "Zero under all conditions" },
    ],
  },
  {
    stem: "The enthalpy of formation of a very stable compound (such as CO₂ or H₂O) is characteristically:",
    topic: "Enthalpy & Thermochemistry",
    explanation:
      "Stable compounds sit low in energy relative to their elements, so their formation is strongly exothermic and ΔH°_f is large and negative. A large negative ΔH°_f reflects thermodynamic stability.",
    choices: [
      { text: "Large and negative", isCorrect: true },
      { text: "Large and positive" },
      { text: "Exactly zero" },
      { text: "Equal to the bond enthalpy" },
    ],
  },
  {
    stem: "Which statements about standard enthalpies and Hess's law are correct? Select all that apply.",
    type: "MULTI",
    topic: "Hess's Law",
    explanation:
      "Elements in standard states have ΔH°_f = 0; ΔH°_rxn = ΣΔH°_f(products) − ΣΔH°_f(reactants); reversing a reaction flips the sign of ΔH; scaling an equation scales ΔH. ΔH does depend on state, so it is not path-dependent.",
    choices: [
      { text: "An element in its standard state has ΔH°_f = 0", isCorrect: true },
      { text: "ΔH°_rxn = ΣΔH°_f(products) − ΣΔH°_f(reactants)", isCorrect: true },
      { text: "Reversing a reaction changes the sign of ΔH", isCorrect: true },
      { text: "Doubling the coefficients doubles ΔH", isCorrect: true },
      { text: "ΔH depends on the pathway taken" },
    ],
  },
  {
    stem: "Which statements about bond enthalpies and Kirchhoff's law are correct? Select all that apply.",
    type: "MULTI",
    topic: "Bond Enthalpies",
    explanation:
      "Breaking bonds is endothermic; ΔH ≈ Σ(broken) − Σ(formed); mean bond enthalpies are averages giving approximate answers; Kirchhoff's law uses ΔC_p for temperature dependence. Forming bonds releases (not absorbs) energy.",
    choices: [
      { text: "Breaking a bond requires energy (endothermic)", isCorrect: true },
      { text: "ΔH ≈ Σ(bonds broken) − Σ(bonds formed)", isCorrect: true },
      { text: "Mean bond enthalpies give only approximate reaction enthalpies", isCorrect: true },
      { text: "Kirchhoff's law relates ΔH change to ΔC_p", isCorrect: true },
      { text: "Forming a bond absorbs energy from the surroundings" },
    ],
  },
  {
    stem: "Because enthalpy is a state function, the enthalpy change of a reaction is the same whether it proceeds in one step or through several intermediate steps.",
    type: "TRUE_FALSE",
    topic: "Hess's Law",
    explanation:
      "This path-independence is Hess's law: ΔH depends only on the initial and final states, so summing the enthalpies of intermediate steps gives the overall reaction enthalpy.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The standard enthalpy of fusion is the enthalpy change when one mole of a substance:",
    topic: "Enthalpy Changes",
    explanation:
      "The enthalpy of fusion (ΔH_fus) accompanies melting one mole of solid to liquid at its melting point. It is endothermic, as energy is needed to overcome the ordered lattice interactions.",
    choices: [
      { text: "Melts from solid to liquid", isCorrect: true },
      { text: "Boils from liquid to gas" },
      { text: "Sublimes from solid to gas" },
      { text: "Dissolves in water" },
    ],
  },
  {
    stem: "The enthalpy of vaporisation is larger than the enthalpy of fusion for the same substance because vaporisation requires:",
    topic: "Enthalpy Changes",
    explanation:
      "Vaporisation separates molecules to essentially infinite distance, overcoming nearly all intermolecular attraction, whereas fusion only loosens the lattice. So ΔH_vap > ΔH_fus for a given substance.",
    choices: [
      { text: "Near-total separation of molecules", isCorrect: true },
      { text: "Only a slight loosening of the lattice" },
      { text: "Breaking of covalent bonds" },
      { text: "No energy input whatsoever" },
    ],
  },
  {
    stem: "The standard enthalpy of atomisation is the enthalpy change to produce one mole of:",
    topic: "Enthalpy Changes",
    explanation:
      "Atomisation forms one mole of gaseous atoms from an element in its standard state. It is always endothermic, since bonds (metallic, covalent or the bonds in a molecular element) must be broken.",
    choices: [
      { text: "Gaseous atoms from an element", isCorrect: true },
      { text: "Aqueous ions from a solid" },
      { text: "A compound from its elements" },
      { text: "Liquid from a solid" },
    ],
  },
  {
    stem: "The lattice enthalpy of an ionic solid (defined as lattice dissociation) is the enthalpy change to:",
    topic: "Born–Haber Cycle",
    explanation:
      "The lattice dissociation enthalpy is the energy to separate one mole of solid ionic compound into its gaseous ions. It is large and endothermic; the reverse (lattice formation) is exothermic.",
    choices: [
      { text: "Split the solid into gaseous ions", isCorrect: true },
      { text: "Melt the solid to a liquid" },
      { text: "Dissolve the solid in water" },
      { text: "Form the solid from its elements" },
    ],
  },
  {
    stem: "A Born–Haber cycle is a thermochemical cycle used to determine the lattice enthalpy of an ionic compound by applying:",
    topic: "Born–Haber Cycle",
    explanation:
      "The Born–Haber cycle applies Hess's law to a closed loop of steps (atomisation, ionisation, electron affinity, formation) to find the otherwise hard-to-measure lattice enthalpy.",
    choices: [
      { text: "Hess's law within a short cycle", isCorrect: true },
      { text: "The ideal gas law to the ions" },
      { text: "Kirchhoff's law at high temperature" },
      { text: "Graham's law of effusion" },
    ],
  },
  {
    stem: "The first ionisation enthalpy step in a Born–Haber cycle is:",
    topic: "Born–Haber Cycle",
    explanation:
      "Removing an electron from a gaseous atom (ionisation) always requires energy, so it is endothermic. Electron gain (electron affinity) is usually exothermic for the first electron added.",
    choices: [
      { text: "Endothermic (energy is absorbed)", isCorrect: true },
      { text: "Exothermic (energy is released)" },
      { text: "Exactly zero" },
      { text: "Equal to the lattice enthalpy" },
    ],
  },
  {
    stem: "The enthalpy of hydration is the enthalpy change when one mole of gaseous ions:",
    topic: "Enthalpy Changes",
    explanation:
      "Hydration enthalpy accompanies gaseous ions dissolving to become aqueous, surrounded by water molecules. It is exothermic because ion–dipole attractions release energy.",
    choices: [
      { text: "Becomes aqueous hydrated ions", isCorrect: true },
      { text: "Forms a solid lattice" },
      { text: "Is atomised to a gas" },
      { text: "Loses an outer electron" },
    ],
  },
  {
    stem: "The enthalpy of solution of an ionic compound can be found from a cycle combining lattice enthalpy and:",
    topic: "Enthalpy Changes",
    explanation:
      "ΔH_solution = −ΔH_lattice(formation) + Σ ΔH_hydration, i.e. it balances the energy to break the lattice against the energy released on hydrating the ions. Small differences of large numbers can be positive or negative.",
    choices: [
      { text: "The ionic hydration enthalpies", isCorrect: true },
      { text: "The bond enthalpies of water" },
      { text: "The ionisation energy of oxygen" },
      { text: "Graham's law effusion rates here" },
    ],
  },
  {
    stem: "The standard enthalpy of neutralisation for a strong acid and strong base is nearly constant (about −57 kJ mol⁻¹) because the reaction is effectively:",
    topic: "Enthalpy Changes",
    explanation:
      "For strong acids and bases, neutralisation is essentially H⁺(aq) + OH⁻(aq) → H₂O(l) in every case, so the enthalpy per mole of water formed is the same regardless of which strong acid and base are used.",
    choices: [
      { text: "Always the same H⁺ + OH⁻ → H₂O reaction", isCorrect: true },
      { text: "Different for every acid–base pair" },
      { text: "Strongly endothermic in every case" },
      { text: "Dependent on the spectator ions" },
    ],
  },
  {
    stem: "Compared with strong acids, the enthalpy of neutralisation of a weak acid is typically slightly less exothermic because some energy is used to:",
    topic: "Enthalpy Changes",
    explanation:
      "A weak acid is only partly dissociated, so some of the released energy is consumed in completing its ionisation during neutralisation, making the overall process a little less exothermic than for a strong acid.",
    choices: [
      { text: "Finish ionising the weak acid", isCorrect: true },
      { text: "Evaporate some of the water formed" },
      { text: "Break the O–H bonds in water" },
      { text: "Ionise the spectator ions" },
    ],
  },
  {
    stem: "Which sign of ΔH corresponds to an endothermic reaction?",
    topic: "Enthalpy & Thermochemistry",
    explanation:
      "An endothermic reaction absorbs heat from the surroundings, so the system's enthalpy rises and ΔH > 0. Exothermic reactions release heat and have ΔH < 0.",
    choices: [
      { text: "Positive (ΔH > 0)", isCorrect: true },
      { text: "Negative (ΔH < 0)" },
      { text: "Exactly zero" },
      { text: "Undefined" },
    ],
  },
  {
    stem: "An enthalpy-level (reaction profile) diagram for an exothermic reaction shows the products:",
    topic: "Enthalpy & Thermochemistry",
    explanation:
      "In an exothermic reaction the products lie at lower enthalpy than the reactants, so ΔH is negative; the difference in levels equals the enthalpy released.",
    choices: [
      { text: "At lower enthalpy than the reactants", isCorrect: true },
      { text: "At higher enthalpy than the reactants" },
      { text: "At exactly the same enthalpy" },
      { text: "At zero enthalpy always" },
    ],
  },
  {
    stem: "The enthalpy of sublimation of a solid is related to fusion and vaporisation by:",
    topic: "Enthalpy Changes",
    explanation:
      "Because enthalpy is a state function, ΔH_sub = ΔH_fus + ΔH_vap: going solid→gas directly equals the sum of solid→liquid and liquid→gas. This is a simple Hess's-law relationship.",
    choices: [
      { text: "ΔH_sub = ΔH_fus + ΔH_vap", isCorrect: true },
      { text: "ΔH_sub = ΔH_vap − ΔH_fus" },
      { text: "ΔH_sub = ΔH_fus − ΔH_vap" },
      { text: "ΔH_sub = ΔH_fus × ΔH_vap" },
    ],
  },
  {
    stem: "Which of these enthalpy changes are normally endothermic? Select all that apply.",
    type: "MULTI",
    topic: "Enthalpy Changes",
    explanation:
      "Fusion, vaporisation, atomisation, and lattice dissociation all require energy input and are endothermic. Hydration of gaseous ions is exothermic, releasing energy through ion–dipole attraction.",
    choices: [
      { text: "Fusion (melting)", isCorrect: true },
      { text: "Vaporisation", isCorrect: true },
      { text: "Atomisation", isCorrect: true },
      { text: "Lattice dissociation into gaseous ions", isCorrect: true },
      { text: "Hydration of gaseous ions" },
    ],
  },
  {
    stem: "Which statements about the Born–Haber cycle are correct? Select all that apply.",
    type: "MULTI",
    topic: "Born–Haber Cycle",
    explanation:
      "It applies Hess's law to find lattice enthalpy; ionisation is endothermic; the reverse lattice formation is exothermic; atomisation is endothermic. Electron affinity for the first electron is usually exothermic, not endothermic.",
    choices: [
      { text: "It uses Hess's law to obtain the lattice enthalpy", isCorrect: true },
      { text: "Ionisation of the metal atom is endothermic", isCorrect: true },
      { text: "Lattice formation from gaseous ions is exothermic", isCorrect: true },
      { text: "Atomisation of the elements is endothermic", isCorrect: true },
      { text: "The first electron affinity is normally endothermic" },
    ],
  },
  {
    stem: "The enthalpy of sublimation of a substance equals the sum of its enthalpies of fusion and vaporisation.",
    type: "TRUE_FALSE",
    topic: "Enthalpy Changes",
    explanation:
      "Since enthalpy is a state function, the solid→gas route has the same enthalpy change as solid→liquid→gas, so ΔH_sub = ΔH_fus + ΔH_vap.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "A reaction has ΔU = −100 kJ and does no work (constant volume). The heat released is:",
    topic: "Calorimetry",
    explanation:
      "At constant volume w = 0, so q_V = ΔU = −100 kJ. The negative sign shows 100 kJ of heat is released to the surroundings.",
    choices: [
      { text: "100 kJ released", isCorrect: true },
      { text: "100 kJ absorbed" },
      { text: "Zero" },
      { text: "200 kJ released" },
    ],
  },
  {
    stem: "For a gas-phase reaction with Δn_gas = +1 at 298 K, ΔH exceeds ΔU by approximately:",
    topic: "Enthalpy & Thermochemistry",
    explanation:
      "ΔH − ΔU = Δn_gas·RT = 1 × 8.314 × 298 ≈ 2.5 kJ mol⁻¹. A positive Δn_gas makes ΔH slightly greater than ΔU because of the expansion against the atmosphere.",
    choices: [
      { text: "2.5 kJ mol⁻¹", isCorrect: true },
      { text: "25 kJ mol⁻¹" },
      { text: "0.25 kJ mol⁻¹" },
      { text: "250 kJ mol⁻¹" },
    ],
  },
  {
    stem: "A reaction that produces more moles of gas than it consumes (Δn_gas > 0) at constant pressure does:",
    topic: "Enthalpy & Thermochemistry",
    explanation:
      "Producing more gas increases the volume, so the system does expansion work on the surroundings (w < 0). This is why ΔH and ΔU differ by Δn_gas·RT.",
    choices: [
      { text: "Expansion work on the surroundings", isCorrect: true },
      { text: "Compression work on the system" },
      { text: "No work at all" },
      { text: "Work equal to its enthalpy change" },
    ],
  },
  {
    stem: "To heat 100 g of water (specific heat 4.18 J g⁻¹ K⁻¹) by 10 K requires approximately:",
    topic: "Calorimetry",
    explanation:
      "q = m·c·ΔT = 100 × 4.18 × 10 ≈ 4180 J (about 4.18 kJ). The specific heat times mass gives the heat capacity of the sample.",
    choices: [
      { text: "4.18 kJ", isCorrect: true },
      { text: "41.8 kJ" },
      { text: "0.418 kJ" },
      { text: "418 kJ" },
    ],
  },
  {
    stem: "In a coffee-cup (constant-pressure) calorimeter, the heat measured for a reaction corresponds to:",
    topic: "Calorimetry",
    explanation:
      "A coffee-cup calorimeter operates open to the atmosphere at constant pressure, so the heat evolved equals ΔH. A bomb calorimeter, at constant volume, would give ΔU instead.",
    choices: [
      { text: "The enthalpy change, ΔH", isCorrect: true },
      { text: "The internal energy change, ΔU" },
      { text: "The entropy change, ΔS" },
      { text: "The work done, w" },
    ],
  },
  {
    stem: "Given ΔH°_f values, the enthalpy of combustion of methane is found by:",
    topic: "Hess's Law",
    explanation:
      "ΔH°_c = ΣΔH°_f(products: CO₂ + 2H₂O) − ΣΔH°_f(reactants: CH₄ + 2O₂), with O₂ contributing zero. This Hess's-law sum gives the combustion enthalpy.",
    choices: [
      { text: "Products minus reactants formation values", isCorrect: true },
      { text: "Adding all formation enthalpies together" },
      { text: "Averaging the bond enthalpies only" },
      { text: "Using Graham's law of effusion and rates" },
    ],
  },
  {
    stem: "If two reactions are added together, their enthalpy changes are:",
    topic: "Hess's Law",
    explanation:
      "By Hess's law, adding chemical equations adds their enthalpy changes: ΔH_total = ΔH₁ + ΔH₂. This lets an unknown ΔH be found by combining known reactions.",
    choices: [
      { text: "Added together", isCorrect: true },
      { text: "Multiplied together" },
      { text: "Subtracted always" },
      { text: "Averaged" },
    ],
  },
  {
    stem: "An adiabatic compression of a gas raises its temperature because:",
    topic: "First Law",
    explanation:
      "With q = 0, ΔU = w. In compression the surroundings do work on the gas (w > 0), increasing its internal energy and hence its temperature. This is how a diesel engine ignites fuel.",
    choices: [
      { text: "Work is done on it, no heat lost", isCorrect: true },
      { text: "Heat flows into the gas from outside" },
      { text: "The gas loses internal energy" },
      { text: "The molar mass of the gas decreases" },
    ],
  },
  {
    stem: "For the same initial and final volumes, the work done by a gas is greatest for:",
    topic: "Work",
    explanation:
      "Reversible isothermal expansion does the maximum work because the gas pushes against the largest possible opposing pressure at every stage. Irreversible expansion against a lower constant pressure does less.",
    choices: [
      { text: "Reversible isothermal expansion", isCorrect: true },
      { text: "Irreversible expansion against low pressure" },
      { text: "Free expansion into a vacuum" },
      { text: "Any adiabatic expansion" },
    ],
  },
  {
    stem: "The area under a curve on a pressure–volume (indicator) diagram represents the:",
    topic: "Work",
    explanation:
      "On a p–V diagram, the area beneath the process path equals the expansion work, ∫p dV. Different paths between the same endpoints enclose different areas, reflecting the path-dependence of work.",
    choices: [
      { text: "Work done during the process", isCorrect: true },
      { text: "Change in internal energy" },
      { text: "Entropy generated" },
      { text: "Enthalpy of the system" },
    ],
  },
  {
    stem: "For an ideal gas expanding isothermally and reversibly to twice its volume, the heat absorbed equals:",
    topic: "Work",
    explanation:
      "Isothermal expansion has ΔU = 0, so q = −w = nRT ln(V₂/V₁) = nRT ln 2. All the absorbed heat is converted into the work of expansion.",
    choices: [
      { text: "nRT ln 2", isCorrect: true },
      { text: "Zero" },
      { text: "nRT" },
      { text: "(3/2)nRT" },
    ],
  },
  {
    stem: "A cyclic process returns the system to its initial state, so over one complete cycle:",
    topic: "First Law",
    explanation:
      "Because U is a state function, ΔU = 0 over any complete cycle. The first law then gives q = −w: the net heat absorbed equals the net work done by the system.",
    choices: [
      { text: "ΔU = 0 and q = −w", isCorrect: true },
      { text: "ΔU equals the total work" },
      { text: "q = 0 necessarily" },
      { text: "w = 0 necessarily" },
    ],
  },
  {
    stem: "The standard enthalpy of a reaction calculated from bond enthalpies will differ from the value from formation enthalpies mainly because bond enthalpies:",
    topic: "Bond Enthalpies",
    explanation:
      "Bond enthalpies are averaged over many molecules and apply to gas-phase species, so they give an approximate result; formation enthalpies are specific measured values, generally more accurate.",
    choices: [
      { text: "Are averaged gas-phase values", isCorrect: true },
      { text: "Are always exact for each molecule" },
      { text: "Apply strictly to ionic solids only" },
      { text: "Include entropy contributions" },
    ],
  },
  {
    stem: "If ΔH°_f(CO₂) = −394 and ΔH°_f(CO) = −111 kJ mol⁻¹, the enthalpy of CO(g) + ½O₂(g) → CO₂(g) is:",
    topic: "Hess's Law",
    explanation:
      "ΔH = ΔH°_f(CO₂) − ΔH°_f(CO) = −394 − (−111) = −283 kJ mol⁻¹, with O₂ contributing zero. The strongly negative value reflects further oxidation of CO.",
    choices: [
      { text: "−283 kJ mol⁻¹", isCorrect: true },
      { text: "−505 kJ mol⁻¹" },
      { text: "+283 kJ mol⁻¹" },
      { text: "−394 kJ mol⁻¹" },
    ],
  },
  {
    stem: "Which statements about calorimetry and work are correct? Select all that apply.",
    type: "MULTI",
    topic: "Calorimetry",
    explanation:
      "A bomb calorimeter measures ΔU (constant volume); a coffee-cup calorimeter measures ΔH (constant pressure); q = mcΔT; the area under a p–V curve is work. A bomb calorimeter does not measure ΔH directly.",
    choices: [
      { text: "A bomb calorimeter measures ΔU at constant volume", isCorrect: true },
      { text: "A coffee-cup calorimeter measures ΔH at constant pressure", isCorrect: true },
      { text: "Heat supplied is q = m c ΔT", isCorrect: true },
      { text: "The area under a p–V curve equals the work", isCorrect: true },
      { text: "A bomb calorimeter directly measures ΔH" },
    ],
  },
  {
    stem: "Which statements about ΔH and ΔU for reactions are correct? Select all that apply.",
    type: "MULTI",
    topic: "Enthalpy & Thermochemistry",
    explanation:
      "ΔH = ΔU + Δn_gas·RT; when Δn_gas = 0 they are equal; a positive Δn_gas means expansion work; both are state functions. ΔH does not always equal ΔU when gases are produced or consumed.",
    choices: [
      { text: "ΔH = ΔU + Δn_gas RT", isCorrect: true },
      { text: "ΔH ≈ ΔU when Δn_gas is zero", isCorrect: true },
      { text: "A positive Δn_gas implies expansion work is done", isCorrect: true },
      { text: "Both ΔH and ΔU are state functions", isCorrect: true },
      { text: "ΔH always equals ΔU regardless of gas moles" },
    ],
  },
  {
    stem: "Reversible isothermal expansion of an ideal gas does more work than irreversible expansion between the same two volumes.",
    type: "TRUE_FALSE",
    topic: "Work",
    explanation:
      "Reversible expansion opposes the largest possible external pressure at each step, extracting the maximum work; any irreversible path against a lower pressure does less work.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "A thermodynamic system that can exchange energy but not matter with its surroundings is described as:",
    topic: "First Law",
    explanation:
      "A closed system exchanges energy (heat and work) but not matter. An open system exchanges both; an isolated system exchanges neither.",
    choices: [
      { text: "Closed", isCorrect: true },
      { text: "Open" },
      { text: "Isolated" },
      { text: "Adiabatic by definition" },
    ],
  },
  {
    stem: "An isolated system exchanges with its surroundings:",
    topic: "First Law",
    explanation:
      "An isolated system exchanges neither energy nor matter, so its internal energy is constant (ΔU = 0). The universe as a whole is treated as an isolated system.",
    choices: [
      { text: "Neither energy nor matter", isCorrect: true },
      { text: "Energy but not matter" },
      { text: "Matter but not energy" },
      { text: "Both energy and matter freely" },
    ],
  },
  {
    stem: "The standard state of a substance in thermodynamics refers to its pure form at:",
    topic: "Enthalpy & Thermochemistry",
    explanation:
      "The standard state is the pure substance at a pressure of 1 bar (and a specified temperature, usually 298.15 K). Standard enthalpies carry the superscript ° to denote these reference conditions.",
    choices: [
      { text: "A pressure of 1 bar", isCorrect: true },
      { text: "A pressure of zero" },
      { text: "The critical pressure" },
      { text: "A temperature of 0 K" },
    ],
  },
  {
    stem: "Which statement about heat and temperature is correct?",
    topic: "First Law",
    explanation:
      "Heat is energy transferred because of a temperature difference; temperature is a measure of the average kinetic energy of particles. Heat flows spontaneously from higher to lower temperature.",
    choices: [
      { text: "Heat is energy driven by a T difference", isCorrect: true },
      { text: "Heat and temperature are the same quantity" },
      { text: "Temperature measures the total energy content" },
      { text: "Heat always flows from cold toward hot" },
    ],
  },
  {
    stem: "For an ideal gas heated at constant pressure, part of the supplied heat raises internal energy and the rest:",
    topic: "Heat Capacities",
    explanation:
      "At constant pressure the gas expands, so some heat becomes expansion work while the rest raises the internal energy (temperature). This split is why C_p exceeds C_V by R.",
    choices: [
      { text: "Does work on the surroundings", isCorrect: true },
      { text: "Is completely destroyed" },
      { text: "Ionises all the molecules" },
      { text: "Increases the molar mass" },
    ],
  },
  {
    stem: "A thermochemical equation must specify the physical states of reactants and products because enthalpy changes depend on:",
    topic: "Enthalpy & Thermochemistry",
    explanation:
      "The enthalpy of a reaction depends on whether species are solid, liquid, gas or aqueous, since phase changes carry their own enthalpies. Omitting states makes ΔH ambiguous.",
    choices: [
      { text: "The states of the species", isCorrect: true },
      { text: "The colour of the reagents" },
      { text: "The rate of stirring used" },
      { text: "The size of the vessel" },
    ],
  },
  {
    stem: "The 'system' in thermodynamics refers to:",
    topic: "First Law",
    explanation:
      "The system is the specific part of the universe under study (e.g. the reaction mixture); everything else is the surroundings. The two together make up the universe.",
    choices: [
      { text: "The region under study", isCorrect: true },
      { text: "The entire universe at once" },
      { text: "Only the container walls" },
      { text: "The measuring instruments" },
    ],
  },
  {
    stem: "A reaction with ΔH = +50 kJ mol⁻¹ will feel, to the touch, as though the surroundings become:",
    topic: "Enthalpy & Thermochemistry",
    explanation:
      "A positive ΔH means the reaction absorbs heat from the surroundings (endothermic), so the surroundings cool and the vessel feels cold. Exothermic reactions (ΔH < 0) warm the surroundings.",
    choices: [
      { text: "Cooler (heat is absorbed)", isCorrect: true },
      { text: "Warmer (heat is released)" },
      { text: "Unchanged in temperature" },
      { text: "Instantly frozen solid" },
    ],
  },
  {
    stem: "The first law implies that a perpetual-motion machine of the first kind (producing work with no energy input) is:",
    topic: "First Law",
    explanation:
      "Such a machine would create energy from nothing, violating conservation of energy (the first law). It is therefore impossible; work can only come at the expense of some energy source.",
    choices: [
      { text: "Impossible; it would create energy", isCorrect: true },
      { text: "Possible with a good catalyst" },
      { text: "Possible only at absolute zero" },
      { text: "Allowed by the first law" },
    ],
  },
  {
    stem: "When a spring or gas stores energy through work done on it with no heat flow, that energy appears as increased:",
    topic: "First Law",
    explanation:
      "With q = 0, the work done on the system increases its internal energy (ΔU = w). For a compressed gas this shows up as higher temperature and internal energy.",
    choices: [
      { text: "Internal energy", isCorrect: true },
      { text: "Entropy only" },
      { text: "Heat content lost" },
      { text: "Molar mass" },
    ],
  },
  {
    stem: "Two systems in thermal contact reach the same temperature at equilibrium, an idea formalised by the:",
    topic: "First Law",
    explanation:
      "The zeroth law of thermodynamics states that systems in thermal equilibrium with a third are in equilibrium with each other, giving temperature a consistent meaning and justifying thermometry.",
    choices: [
      { text: "Zeroth law of thermodynamics", isCorrect: true },
      { text: "Third law of thermodynamics" },
      { text: "Graham's law" },
      { text: "Hess's law" },
    ],
  },
  {
    stem: "For a reaction run at constant temperature and pressure, the heat released can be used to find ΔH provided the process involves:",
    topic: "Enthalpy & Thermochemistry",
    explanation:
      "The identity q_p = ΔH holds when only expansion (pV) work is done. If additional non-expansion work (e.g. electrical) is involved, the simple equality no longer applies.",
    choices: [
      { text: "Only expansion work", isCorrect: true },
      { text: "Substantial electrical work" },
      { text: "No temperature control" },
      { text: "A vacuum around the system" },
    ],
  },
  {
    stem: "The enthalpy change of a reaction measured at constant pressure includes the energy for any:",
    topic: "Enthalpy & Thermochemistry",
    explanation:
      "At constant pressure, ΔH already accounts for the expansion work done as the system's volume changes; that is precisely why the constant-pressure heat equals ΔH rather than ΔU.",
    choices: [
      { text: "Volume change against the air", isCorrect: true },
      { text: "Any change in the molar mass" },
      { text: "Nuclear binding rearrangement" },
      { text: "Change in the gas constant" },
    ],
  },
  {
    stem: "A fuel with a more negative standard enthalpy of combustion per gram will, on burning a fixed mass, release:",
    topic: "Enthalpy & Thermochemistry",
    explanation:
      "A more negative ΔH_c per gram means more heat is released per unit mass, so the fuel yields more energy when a fixed mass is burned. This is a key measure of fuel quality.",
    choices: [
      { text: "More heat energy", isCorrect: true },
      { text: "Less heat energy" },
      { text: "The same heat regardless" },
      { text: "No heat at all" },
    ],
  },
  {
    stem: "The internal energy of a system can be increased by:",
    topic: "First Law",
    explanation:
      "By ΔU = q + w, internal energy rises when heat is added to the system, work is done on it, or both. Removing heat or letting the system do work lowers U.",
    choices: [
      { text: "Adding heat to it or doing work on it", isCorrect: true },
      { text: "Only by adding heat, never by work" },
      { text: "Letting it do work on the surroundings" },
      { text: "Removing heat from it" },
    ],
  },
  {
    stem: "Which statements about thermodynamic systems and conventions are correct? Select all that apply.",
    type: "MULTI",
    topic: "First Law",
    explanation:
      "A closed system exchanges energy but not matter; an isolated system exchanges neither; endothermic means q > 0; ΔU = q + w. An open system exchanges both energy and matter, not neither.",
    choices: [
      { text: "A closed system exchanges energy but not matter", isCorrect: true },
      { text: "An isolated system exchanges neither energy nor matter", isCorrect: true },
      { text: "An endothermic process has q > 0", isCorrect: true },
      { text: "The first law is ΔU = q + w", isCorrect: true },
      { text: "An open system exchanges neither energy nor matter" },
    ],
  },
  {
    stem: "An endothermic reaction absorbs heat from its surroundings, so its enthalpy change is positive and the surroundings tend to cool.",
    type: "TRUE_FALSE",
    topic: "Enthalpy & Thermochemistry",
    explanation:
      "Endothermic reactions have ΔH > 0; the heat they draw in comes from the surroundings, which therefore fall in temperature (the vessel feels cold).",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "A perpetual-motion machine of the first kind, which would do work without any energy input, is forbidden by the first law of thermodynamics.",
    type: "TRUE_FALSE",
    topic: "First Law",
    explanation:
      "The first law is the conservation of energy: work must be paid for by an equal amount of energy from heat or internal energy, so a machine producing work from nothing is impossible.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Hess's law is a direct consequence of which property of enthalpy?",
    topic: "Hess's Law",
    explanation:
      "Hess's law follows from enthalpy being a state function: since ΔH depends only on the initial and final states, the total enthalpy change is the same regardless of the route taken.",
    choices: [
      { text: "That enthalpy is a state function", isCorrect: true },
      { text: "That enthalpy is always negative" },
      { text: "That enthalpy depends on the path" },
      { text: "That enthalpy equals the work done" },
    ],
  },
];
