import type { Q } from "../_lib/qbank";

export const PHYSICAL_SET_1: Q[] = [
  {
    stem: "The ideal gas equation of state is written as:",
    topic: "Ideal Gas Law",
    explanation:
      "The ideal gas law, pV = nRT, links pressure, volume, amount and temperature through the gas constant R. It is the limiting law that all real gases approach as pressure tends to zero.",
    choices: [
      { text: "pV = nRT", isCorrect: true },
      { text: "pV = nRT²" },
      { text: "p/V = nRT" },
      { text: "pVT = nR" },
    ],
  },
  {
    stem: "For a fixed amount of gas at constant temperature, Boyle's law states that pressure and volume are:",
    topic: "Gas Laws",
    explanation:
      "Boyle's law: at constant n and T, p ∝ 1/V, so pV is constant. Doubling the pressure halves the volume. It follows directly from the ideal gas law with T and n fixed.",
    choices: [
      { text: "Inversely proportional (pV constant)", isCorrect: true },
      { text: "Directly proportional (p/V constant)" },
      { text: "Equal in magnitude always" },
      { text: "Completely independent of each other" },
    ],
  },
  {
    stem: "Charles's law states that, at constant pressure, the volume of a fixed amount of gas is:",
    topic: "Gas Laws",
    explanation:
      "Charles's law: at constant p and n, V ∝ T (absolute temperature). A plot of V against T (in kelvin) is a straight line through the origin, extrapolating to zero volume at absolute zero.",
    choices: [
      { text: "Directly proportional to absolute temperature", isCorrect: true },
      { text: "Inversely proportional to temperature" },
      { text: "Independent of temperature" },
      { text: "Proportional to the square of temperature" },
    ],
  },
  {
    stem: "Avogadro's principle states that equal volumes of gases at the same temperature and pressure contain:",
    topic: "Gas Laws",
    explanation:
      "Avogadro's principle: equal volumes of any gases at the same T and p contain equal numbers of molecules. Consequently V ∝ n at fixed T and p, regardless of the gas's identity.",
    choices: [
      { text: "Equal numbers of molecules", isCorrect: true },
      { text: "Equal masses of gas" },
      { text: "The same number of atoms only" },
      { text: "Equal densities in every case" },
    ],
  },
  {
    stem: "The value of the gas constant R in SI units is closest to:",
    topic: "Ideal Gas Law",
    explanation:
      "R = 8.314 J K⁻¹ mol⁻¹ in SI units. Equivalent forms include 0.08206 L·atm K⁻¹ mol⁻¹, used when pressure is in atmospheres and volume in litres.",
    choices: [
      { text: "8.314 J K⁻¹ mol⁻¹", isCorrect: true },
      { text: "6.022 J K⁻¹ mol⁻¹" },
      { text: "1.381 J K⁻¹ mol⁻¹" },
      { text: "96 485 J K⁻¹ mol⁻¹" },
    ],
  },
  {
    stem: "Standard temperature and pressure (STP), as defined by IUPAC, refers to:",
    topic: "Ideal Gas Law",
    explanation:
      "IUPAC STP is 0 °C (273.15 K) and 1 bar (10⁵ Pa). The molar volume of an ideal gas at STP is about 22.7 L mol⁻¹ (22.4 L mol⁻¹ under the older 1 atm convention).",
    choices: [
      { text: "273.15 K and 1 bar", isCorrect: true },
      { text: "298 K and 1 atm" },
      { text: "0 K and zero pressure" },
      { text: "100 °C and 1 atm" },
    ],
  },
  {
    stem: "According to Dalton's law of partial pressures, the total pressure of a gas mixture equals:",
    topic: "Partial Pressures",
    explanation:
      "Dalton's law: the total pressure is the sum of the partial pressures each gas would exert alone in the same volume, p_total = Σpᵢ. It holds because ideal gas molecules do not interact.",
    choices: [
      { text: "The sum of the individual partial pressures", isCorrect: true },
      { text: "The product of the partial pressures" },
      { text: "The largest single partial pressure" },
      { text: "The average of the partial pressures" },
    ],
  },
  {
    stem: "The partial pressure of a component gas i in an ideal mixture is related to the total pressure by:",
    topic: "Partial Pressures",
    explanation:
      "The partial pressure equals the mole fraction times the total pressure: pᵢ = xᵢ·p_total. Mole fractions sum to one, so the partial pressures sum to the total pressure.",
    choices: [
      { text: "pᵢ = xᵢ p_total (mole fraction × total)", isCorrect: true },
      { text: "pᵢ = p_total divided by xᵢ" },
      { text: "pᵢ = xᵢ divided by p_total" },
      { text: "pᵢ = p_total minus xᵢ" },
    ],
  },
  {
    stem: "If a fixed amount of ideal gas is heated at constant volume, its pressure will:",
    topic: "Gas Laws",
    explanation:
      "At constant V and n, p ∝ T (Gay-Lussac's law), so raising the absolute temperature raises the pressure proportionally. This follows from pV = nRT with V and n held fixed.",
    choices: [
      { text: "Rise in proportion to temperature", isCorrect: true },
      { text: "Decrease as temperature rises" },
      { text: "Stay exactly constant throughout" },
      { text: "Fall to zero immediately" },
    ],
  },
  {
    stem: "Doubling the absolute temperature of a fixed amount of ideal gas while halving its volume changes the pressure by a factor of:",
    topic: "Ideal Gas Law",
    explanation:
      "From pV = nRT, p ∝ T/V. Doubling T multiplies p by 2, and halving V multiplies p by another 2, so the pressure increases fourfold overall.",
    choices: [
      { text: "4 (a fourfold increase)", isCorrect: true },
      { text: "1 (no change)" },
      { text: "2 (a doubling)" },
      { text: "½ (a halving)" },
    ],
  },
  {
    stem: "The density of an ideal gas at fixed temperature and pressure is proportional to its:",
    topic: "Ideal Gas Law",
    explanation:
      "Combining pV = nRT with n = m/M gives ρ = pM/RT, so at fixed T and p the density is proportional to the molar mass M. Denser gases therefore have larger molar masses.",
    choices: [
      { text: "Molar mass", isCorrect: true },
      { text: "Reciprocal of molar mass" },
      { text: "Absolute temperature" },
      { text: "Volume of the container" },
    ],
  },
  {
    stem: "An ideal gas is best described microscopically as one whose molecules:",
    topic: "Ideal Gas Law",
    explanation:
      "The ideal gas model assumes point molecules of negligible volume with no intermolecular forces, undergoing perfectly elastic collisions. Real gases approach this behaviour at low pressure and high temperature.",
    choices: [
      { text: "Have negligible volume and no mutual forces", isCorrect: true },
      { text: "Strongly attract one another at all distances" },
      { text: "Occupy most of the container's volume" },
      { text: "Lose kinetic energy at each collision" },
    ],
  },
  {
    stem: "A sample of ideal gas has its pressure and absolute temperature both doubled. Its volume will:",
    topic: "Ideal Gas Law",
    explanation:
      "From pV = nRT, V ∝ T/p at fixed n. Doubling T doubles V, but doubling p halves it, so the two effects cancel and the volume is unchanged.",
    choices: [
      { text: "Remain the same", isCorrect: true },
      { text: "Double" },
      { text: "Quadruple" },
      { text: "Halve" },
    ],
  },
  {
    stem: "Which statements follow directly from the ideal gas law pV = nRT? Select all that apply.",
    type: "MULTI",
    topic: "Ideal Gas Law",
    explanation:
      "At fixed T, n: pV is constant (Boyle). At fixed p, n: V ∝ T (Charles). At fixed T, p: V ∝ n (Avogadro). At fixed V, n: p ∝ T. Volume is not independent of temperature at fixed pressure.",
    choices: [
      { text: "At constant T and n, pV is constant", isCorrect: true },
      { text: "At constant p and n, V is proportional to T", isCorrect: true },
      { text: "At constant T and p, V is proportional to n", isCorrect: true },
      { text: "At constant V and n, p is proportional to T", isCorrect: true },
      { text: "At constant p and n, V is independent of T" },
      { text: "At constant T and n, p is proportional to V" },
    ],
  },
  {
    stem: "Which statements about Dalton's law and partial pressures are correct? Select all that apply.",
    type: "MULTI",
    topic: "Partial Pressures",
    explanation:
      "Total pressure is the sum of partial pressures; each partial pressure is xᵢ·p_total; mole fractions sum to one; the law assumes no interactions between gases. Partial pressure is not the total divided by the number of gases.",
    choices: [
      { text: "Total pressure is the sum of the partial pressures", isCorrect: true },
      { text: "Each partial pressure equals xᵢ times the total pressure", isCorrect: true },
      { text: "The mole fractions of all components sum to one", isCorrect: true },
      { text: "The law assumes the gases do not interact", isCorrect: true },
      { text: "Each partial pressure equals the total divided by the number of gases" },
    ],
  },
  {
    stem: "According to Charles's law, the volume of a fixed amount of gas at constant pressure is directly proportional to its absolute (kelvin) temperature.",
    type: "TRUE_FALSE",
    topic: "Gas Laws",
    explanation:
      "Charles's law states V ∝ T when p and n are fixed, with T in kelvin; the volume extrapolates to zero at absolute zero. Using Celsius rather than kelvin would give a wrong proportionality.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "A central result of the kinetic molecular theory is that the average translational kinetic energy of a gas molecule depends only on the:",
    topic: "Kinetic Theory",
    explanation:
      "The mean translational kinetic energy is ⟨E⟩ = (3/2)kT, a function of absolute temperature alone. At a given temperature, all ideal gases share the same average translational kinetic energy regardless of mass.",
    choices: [
      { text: "Absolute temperature", isCorrect: true },
      { text: "Molar mass of the gas" },
      { text: "Pressure of the gas" },
      { text: "Volume of the container" },
    ],
  },
  {
    stem: "The kinetic theory relates the pressure of a gas to molecular motion through the expression:",
    topic: "Kinetic Theory",
    explanation:
      "Kinetic theory gives pV = (1/3)Nm⟨v²⟩, where N is the number of molecules, m the molecular mass and ⟨v²⟩ the mean-square speed. Pressure arises from momentum transfer during wall collisions.",
    choices: [
      { text: "pV = (1/3)Nm⟨v²⟩", isCorrect: true },
      { text: "pV = (3/2)NkT²" },
      { text: "pV = Nm⟨v⟩" },
      { text: "pV = (1/2)Nm⟨v²⟩" },
    ],
  },
  {
    stem: "At the same temperature, a lighter gas molecule compared with a heavier one has a:",
    topic: "Kinetic Theory",
    explanation:
      "Since ⟨E⟩ = (1/2)m⟨v²⟩ = (3/2)kT is the same for all gases at a given T, a smaller mass m must be offset by a larger mean-square speed. Lighter molecules therefore move faster on average.",
    choices: [
      { text: "Higher average speed", isCorrect: true },
      { text: "Higher average kinetic energy" },
      { text: "Lower average speed" },
      { text: "Identical average speed" },
    ],
  },
  {
    stem: "The root-mean-square speed of a gas molecule is given by:",
    topic: "Molecular Speeds",
    explanation:
      "The rms speed is v_rms = √(3RT/M) (equivalently √(3kT/m)). It rises with the square root of temperature and falls with the square root of molar mass.",
    choices: [
      { text: "v_rms = √(3RT/M)", isCorrect: true },
      { text: "v_rms = 3RT/M" },
      { text: "v_rms = √(RT/3M)" },
      { text: "v_rms = √(2RT/M)" },
    ],
  },
  {
    stem: "The Maxwell–Boltzmann distribution of molecular speeds in a gas is:",
    topic: "Maxwell–Boltzmann Distribution",
    explanation:
      "The distribution is asymmetric (positively skewed): it rises from zero, peaks at the most probable speed, and has a long tail toward high speeds. It is not symmetric like a Gaussian in speed.",
    choices: [
      { text: "Asymmetric, with a long high-speed tail", isCorrect: true },
      { text: "Perfectly symmetric about the mean speed" },
      { text: "A flat, uniform distribution" },
      { text: "Sharply peaked at a single speed" },
    ],
  },
  {
    stem: "As the temperature of a gas is raised, its Maxwell–Boltzmann speed distribution:",
    topic: "Maxwell–Boltzmann Distribution",
    explanation:
      "Heating broadens and flattens the distribution and shifts its peak to higher speed, so a larger fraction of molecules move fast. The area under the curve stays constant (it is a normalised probability distribution).",
    choices: [
      { text: "Broadens; its peak moves up", isCorrect: true },
      { text: "Narrows and shifts to lower speed" },
      { text: "Stays exactly the same shape" },
      { text: "Loses total area under the curve" },
    ],
  },
  {
    stem: "For a Maxwell–Boltzmann distribution, the correct ordering of the characteristic speeds is:",
    topic: "Molecular Speeds",
    explanation:
      "Because the distribution is skewed toward high speeds, the most probable speed (at the peak) is smallest, the mean speed is larger, and the rms speed is largest: v_mp < v_mean < v_rms.",
    choices: [
      { text: "v_mp < v_mean < v_rms", isCorrect: true },
      { text: "v_rms < v_mean < v_mp" },
      { text: "v_mean < v_mp < v_rms" },
      { text: "They are all exactly equal" },
    ],
  },
  {
    stem: "The most probable speed of a gas molecule corresponds to the:",
    topic: "Molecular Speeds",
    explanation:
      "The most probable speed is the speed at the maximum of the Maxwell–Boltzmann curve, v_mp = √(2RT/M). It is the speed possessed by the largest fraction of molecules.",
    choices: [
      { text: "Peak (maximum) of the speed distribution", isCorrect: true },
      { text: "High-speed tail of the distribution" },
      { text: "Lowest speed present in the gas" },
      { text: "Average of all molecular speeds" },
    ],
  },
  {
    stem: "The Boltzmann constant k is related to the gas constant R and the Avogadro constant N_A by:",
    topic: "Kinetic Theory",
    explanation:
      "k = R/N_A ≈ 1.381 × 10⁻²³ J K⁻¹. It is the gas constant expressed per molecule rather than per mole, linking molecular and molar descriptions.",
    choices: [
      { text: "k = R/N_A", isCorrect: true },
      { text: "k = R·N_A" },
      { text: "k = N_A/R" },
      { text: "k = R + N_A" },
    ],
  },
  {
    stem: "Raising the absolute temperature of a gas from T to 4T changes the root-mean-square speed by a factor of:",
    topic: "Molecular Speeds",
    explanation:
      "Because v_rms ∝ √T, multiplying the absolute temperature by four multiplies the rms speed by √4 = 2. Speed scales with the square root of temperature, not linearly.",
    choices: [
      { text: "2", isCorrect: true },
      { text: "4" },
      { text: "16" },
      { text: "√2" },
    ],
  },
  {
    stem: "At a given temperature, the ratio of the rms speeds of two gases equals the:",
    topic: "Molecular Speeds",
    explanation:
      "Since v_rms = √(3RT/M), at fixed T the ratio v_rms,1/v_rms,2 = √(M₂/M₁) — the inverse square root of the molar-mass ratio. The lighter gas is faster.",
    choices: [
      { text: "Inverse square root of the mass ratio", isCorrect: true },
      { text: "Direct ratio of their molar masses" },
      { text: "Square of their molar-mass ratio" },
      { text: "Simple ratio of their densities" },
    ],
  },
  {
    stem: "The kinetic theory attributes the pressure exerted by a gas to:",
    topic: "Kinetic Theory",
    explanation:
      "Pressure results from the momentum transferred to the container walls during the incessant elastic collisions of gas molecules. More frequent or more forceful collisions raise the pressure.",
    choices: [
      { text: "Momentum transfer in wall collisions", isCorrect: true },
      { text: "Attractive forces pulling molecules to the walls" },
      { text: "Chemical bonding between gas molecules" },
      { text: "The finite size of the molecules alone" },
    ],
  },
  {
    stem: "The equipartition theorem assigns to each quadratic (translational or rotational) degree of freedom an average energy of:",
    topic: "Kinetic Theory",
    explanation:
      "Equipartition gives (1/2)kT per quadratic degree of freedom per molecule. A monatomic gas has three translational degrees, giving (3/2)kT, consistent with the kinetic-theory result.",
    choices: [
      { text: "½kT per degree of freedom", isCorrect: true },
      { text: "kT per degree of freedom" },
      { text: "(3/2)kT per degree of freedom" },
      { text: "RT per degree of freedom" },
    ],
  },
  {
    stem: "Which statements about molecular speeds in a gas are correct? Select all that apply.",
    type: "MULTI",
    topic: "Molecular Speeds",
    explanation:
      "v_rms = √(3RT/M); rms speed rises with √T and falls with √M; the ordering is v_mp < v_mean < v_rms; lighter molecules move faster at a given T. The mean speed is not independent of molar mass.",
    choices: [
      { text: "v_rms is proportional to the square root of temperature", isCorrect: true },
      { text: "v_rms is inversely proportional to the square root of molar mass", isCorrect: true },
      { text: "The order is v_mp < v_mean < v_rms", isCorrect: true },
      { text: "Lighter molecules have higher speeds at a given temperature", isCorrect: true },
      { text: "The mean speed is independent of molar mass" },
    ],
  },
  {
    stem: "Which statements about the kinetic molecular theory are correct? Select all that apply.",
    type: "MULTI",
    topic: "Kinetic Theory",
    explanation:
      "Mean translational KE is (3/2)kT (temperature only); pressure comes from wall collisions; k = R/N_A; equipartition gives ½kT per quadratic degree of freedom. Kinetic energy does depend on temperature, so it is not the same at all temperatures.",
    choices: [
      { text: "Mean translational kinetic energy is (3/2)kT", isCorrect: true },
      { text: "Pressure arises from molecular collisions with the walls", isCorrect: true },
      { text: "The Boltzmann constant equals R/N_A", isCorrect: true },
      { text: "Each quadratic degree of freedom carries ½kT on average", isCorrect: true },
      { text: "Average kinetic energy is the same at every temperature" },
    ],
  },
  {
    stem: "At the same temperature, all ideal gases have the same average translational kinetic energy per molecule, regardless of their molar mass.",
    type: "TRUE_FALSE",
    topic: "Kinetic Theory",
    explanation:
      "The mean translational kinetic energy is (3/2)kT, a function of temperature only. Heavier gases compensate for their larger mass with lower average speeds, so the kinetic energy is unchanged.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Effusion is the process by which a gas:",
    topic: "Effusion & Diffusion",
    explanation:
      "Effusion is the escape of gas molecules through a tiny orifice into a vacuum, one molecule at a time without collisions in the hole. Diffusion, by contrast, is the spreading of one gas through another.",
    choices: [
      { text: "Escapes through a tiny hole into a vacuum", isCorrect: true },
      { text: "Spreads uniformly through another gas" },
      { text: "Condenses onto a cold surface" },
      { text: "Dissolves into a liquid solvent" },
    ],
  },
  {
    stem: "Graham's law of effusion states that the rate of effusion of a gas is:",
    topic: "Effusion & Diffusion",
    explanation:
      "Graham's law: the effusion rate is inversely proportional to the square root of the molar mass, rate ∝ 1/√M. Lighter gases effuse faster, which is the basis of gaseous isotope separation.",
    choices: [
      { text: "Inversely proportional to √M", isCorrect: true },
      { text: "Directly proportional to M" },
      { text: "Proportional to M²" },
      { text: "Independent of molar mass" },
    ],
  },
  {
    stem: "Gas A effuses four times faster than gas B under the same conditions. The ratio of their molar masses M_B/M_A is:",
    topic: "Effusion & Diffusion",
    explanation:
      "By Graham's law, rate_A/rate_B = √(M_B/M_A) = 4, so M_B/M_A = 16. A fourfold difference in rate corresponds to a sixteenfold difference in molar mass.",
    choices: [
      { text: "16", isCorrect: true },
      { text: "4" },
      { text: "2" },
      { text: "8" },
    ],
  },
  {
    stem: "Why does helium effuse faster than carbon dioxide at the same temperature?",
    topic: "Effusion & Diffusion",
    explanation:
      "At equal temperature both have the same mean kinetic energy, but helium's much smaller molar mass gives it a higher mean speed (v ∝ 1/√M), so it effuses faster in accordance with Graham's law.",
    choices: [
      { text: "Helium's smaller molar mass raises its speed", isCorrect: true },
      { text: "Helium molecules are more strongly attracted" },
      { text: "Carbon dioxide has more kinetic energy" },
      { text: "Helium is held at a higher temperature" },
    ],
  },
  {
    stem: "The mean free path of a gas molecule is the:",
    topic: "Collisions & Mean Free Path",
    explanation:
      "The mean free path λ is the average distance a molecule travels between successive collisions. It grows as the gas becomes more dilute and shrinks as molecular size or number density increases.",
    choices: [
      { text: "Average distance travelled between collisions", isCorrect: true },
      { text: "Total distance travelled per second" },
      { text: "Shortest possible path to the wall" },
      { text: "Distance to the nearest neighbour at rest" },
    ],
  },
  {
    stem: "The mean free path of a gas is related to number density and collision cross-section by λ =:",
    topic: "Collisions & Mean Free Path",
    explanation:
      "The mean free path is λ = 1/(√2 · σ · n), where σ is the collision cross-section and n the number density. Larger molecules (bigger σ) or denser gases (bigger n) give a shorter mean free path.",
    choices: [
      { text: "1/(√2 σ n)", isCorrect: true },
      { text: "√2 σ n" },
      { text: "σ n / √2" },
      { text: "n/(√2 σ)" },
    ],
  },
  {
    stem: "How does the mean free path of a gas change if the pressure is increased at constant temperature?",
    topic: "Collisions & Mean Free Path",
    explanation:
      "At constant T, number density n ∝ p, and λ ∝ 1/n, so the mean free path decreases as pressure rises. Crowding the molecules together makes collisions more frequent and the free path shorter.",
    choices: [
      { text: "It decreases", isCorrect: true },
      { text: "It increases" },
      { text: "It stays constant" },
      { text: "It first rises then falls" },
    ],
  },
  {
    stem: "The collision frequency z (collisions per molecule per second) in a gas increases with:",
    topic: "Collisions & Mean Free Path",
    explanation:
      "Collision frequency rises with number density (more targets), with mean speed (faster molecules meet sooner), and with collision cross-section. It therefore increases with pressure and with temperature.",
    choices: [
      { text: "Higher number density and speed", isCorrect: true },
      { text: "Decreasing number density only" },
      { text: "A decreasing gas temperature" },
      { text: "Increasing mean free path" },
    ],
  },
  {
    stem: "The rate at which gas molecules strike unit area of a wall (the collision flux) is proportional to:",
    topic: "Collisions & Mean Free Path",
    explanation:
      "The wall collision flux is Z_w = p/√(2πmkT), so it rises with pressure (number density) and mean speed. This flux underlies effusion rates through a small hole.",
    choices: [
      { text: "Number density times mean speed", isCorrect: true },
      { text: "Mean free path times pressure" },
      { text: "The reciprocal of temperature only" },
      { text: "Molecular mass times volume" },
    ],
  },
  {
    stem: "Diffusion of one gas through another is generally much slower than the free molecular speed would suggest because:",
    topic: "Effusion & Diffusion",
    explanation:
      "Although molecules move at hundreds of metres per second, frequent collisions cause them to follow a tortuous random-walk path, so net migration (diffusion) across a distance is comparatively slow.",
    choices: [
      { text: "Frequent collisions force a slow random-walk path", isCorrect: true },
      { text: "Molecules stop moving between collisions" },
      { text: "Diffusion needs an external force to proceed" },
      { text: "Gas molecules attract each other strongly" },
    ],
  },
  {
    stem: "If the collision cross-section σ of a gas doubles (larger molecules) at fixed number density, the mean free path:",
    topic: "Collisions & Mean Free Path",
    explanation:
      "Because λ = 1/(√2 σ n), the mean free path is inversely proportional to σ. Doubling the cross-section halves the mean free path, since larger targets collide more often.",
    choices: [
      { text: "Halves", isCorrect: true },
      { text: "Doubles" },
      { text: "Is unchanged" },
      { text: "Quadruples" },
    ],
  },
  {
    stem: "Uranium isotopes were historically separated by gaseous diffusion of UF₆ because the two isotopic forms have:",
    topic: "Effusion & Diffusion",
    explanation:
      "²³⁵UF₆ and ²³⁸UF₆ differ slightly in molar mass, so by Graham's law they effuse at slightly different rates. Repeating the small enrichment over many stages separates the isotopes.",
    choices: [
      { text: "Slightly different molar masses", isCorrect: true },
      { text: "Very different chemical reactivities" },
      { text: "Different numbers of electrons" },
      { text: "Opposite net electrical charges" },
    ],
  },
  {
    stem: "At constant temperature, the average speed of molecules between collisions and the collision frequency together determine the:",
    topic: "Collisions & Mean Free Path",
    explanation:
      "The mean free path equals the mean speed divided by the collision frequency, λ = ⟨v⟩/z. Both quantities follow from kinetic theory and set how far a molecule travels before its next collision.",
    choices: [
      { text: "Mean free path (λ = ⟨v⟩/z)", isCorrect: true },
      { text: "Molar mass of the gas" },
      { text: "Critical temperature" },
      { text: "Compression factor" },
    ],
  },
  {
    stem: "Which statements about effusion and Graham's law are correct? Select all that apply.",
    type: "MULTI",
    topic: "Effusion & Diffusion",
    explanation:
      "Effusion is escape through a small hole; rate ∝ 1/√M; lighter gases effuse faster; a 4× rate ratio means a 16× molar-mass ratio. Effusion rate is not proportional to molar mass.",
    choices: [
      { text: "Effusion is escape of gas through a tiny orifice", isCorrect: true },
      { text: "Effusion rate is inversely proportional to √M", isCorrect: true },
      { text: "Lighter gases effuse faster than heavier ones", isCorrect: true },
      { text: "A fourfold rate ratio implies a sixteenfold mass ratio", isCorrect: true },
      { text: "Effusion rate is directly proportional to molar mass" },
    ],
  },
  {
    stem: "Which factors shorten the mean free path of a gas? Select all that apply.",
    type: "MULTI",
    topic: "Collisions & Mean Free Path",
    explanation:
      "λ = 1/(√2 σ n) falls when number density rises (higher pressure at fixed T) and when the collision cross-section (molecular size) grows. Raising temperature at fixed pressure lowers n and lengthens λ; increasing volume at fixed amount also lowers n.",
    choices: [
      { text: "Increasing the pressure at constant temperature", isCorrect: true },
      { text: "Increasing the molecular collision cross-section", isCorrect: true },
      { text: "Increasing the number density of molecules", isCorrect: true },
      { text: "Raising the temperature at constant pressure" },
      { text: "Expanding the gas into a larger volume" },
    ],
  },
  {
    stem: "By Graham's law, at a given temperature a gas of lower molar mass effuses more rapidly than a gas of higher molar mass.",
    type: "TRUE_FALSE",
    topic: "Effusion & Diffusion",
    explanation:
      "Effusion rate is proportional to 1/√M, so the lighter gas — moving faster at the same temperature — escapes through the orifice more quickly.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The compression factor (compressibility factor) Z of a gas is defined as:",
    topic: "Real Gases",
    explanation:
      "Z = pV_m/RT, the ratio of the molar volume to that of an ideal gas at the same T and p. Z = 1 for an ideal gas; deviations from unity measure non-ideal behaviour.",
    choices: [
      { text: "Z = pV_m/RT", isCorrect: true },
      { text: "Z = RT/pV_m" },
      { text: "Z = pV_m·RT" },
      { text: "Z = p/(V_m RT)" },
    ],
  },
  {
    stem: "A compression factor Z < 1 for a real gas indicates that:",
    topic: "Real Gases",
    explanation:
      "Z < 1 means the molar volume is smaller than the ideal value, so the gas is more compressible than ideal — a sign that attractive intermolecular forces dominate, pulling molecules together.",
    choices: [
      { text: "Attractive forces dominate over repulsions", isCorrect: true },
      { text: "Repulsive forces dominate strongly" },
      { text: "The gas behaves exactly ideally" },
      { text: "The temperature is above critical" },
    ],
  },
  {
    stem: "A compression factor Z > 1 for a real gas indicates that:",
    topic: "Real Gases",
    explanation:
      "Z > 1 means the molar volume exceeds the ideal value, so the gas is less compressible than ideal. This occurs at high pressure where short-range repulsions (finite molecular size) dominate.",
    choices: [
      { text: "Repulsive forces dominate", isCorrect: true },
      { text: "Attractive forces dominate strongly" },
      { text: "The gas is behaving perfectly ideally" },
      { text: "The gas has condensed to a liquid" },
    ],
  },
  {
    stem: "Real gases behave most nearly ideally under conditions of:",
    topic: "Real Gases",
    explanation:
      "At low pressure the molecules are far apart (negligible volume and interactions) and at high temperature their kinetic energy overwhelms intermolecular attractions, so real gases approach ideal behaviour there.",
    choices: [
      { text: "Low pressure and high temperature", isCorrect: true },
      { text: "High pressure and low temperature" },
      { text: "High pressure and high temperature only" },
      { text: "Conditions near the critical point" },
    ],
  },
  {
    stem: "In the van der Waals equation, the term involving the constant a corrects for:",
    topic: "Van der Waals Equation",
    explanation:
      "The a term (a·n²/V²) accounts for intermolecular attractions, which reduce the measured pressure below the ideal value. Larger a means stronger attractive forces between molecules.",
    choices: [
      { text: "Intermolecular attractive forces", isCorrect: true },
      { text: "The finite volume of the molecules" },
      { text: "Molecular kinetic energy" },
      { text: "Collisions with the container walls" },
    ],
  },
  {
    stem: "In the van der Waals equation, the constant b represents:",
    topic: "Van der Waals Equation",
    explanation:
      "The b term subtracts an excluded volume (nb) from the container volume, correcting for the finite size of molecules. Larger molecules have larger b values.",
    choices: [
      { text: "Excluded volume of the molecules", isCorrect: true },
      { text: "The strength of the attractive forces" },
      { text: "The number of collisions per second" },
      { text: "The critical temperature of the gas" },
    ],
  },
  {
    stem: "The van der Waals equation of state is written as:",
    topic: "Van der Waals Equation",
    explanation:
      "The van der Waals equation is (p + an²/V²)(V − nb) = nRT. The pressure correction adds an²/V² and the volume correction subtracts nb from V, recovering pV = nRT when a = b = 0.",
    choices: [
      { text: "(p + an²/V²)(V − nb) = nRT", isCorrect: true },
      { text: "(p − an²/V²)(V + nb) = nRT" },
      { text: "p(V − nb) = nRT + an²" },
      { text: "(p + an²)(V − nb²) = RT" },
    ],
  },
  {
    stem: "Above its critical temperature, a gas:",
    topic: "Critical Constants",
    explanation:
      "Above the critical temperature, no amount of pressure will liquefy the gas; the distinction between liquid and gas disappears and only a supercritical fluid exists. Below T_c, sufficient pressure causes condensation.",
    choices: [
      { text: "Cannot be liquefied by pressure alone", isCorrect: true },
      { text: "Liquefies at any applied pressure" },
      { text: "Becomes a perfect ideal gas" },
      { text: "Immediately solidifies" },
    ],
  },
  {
    stem: "The critical point of a substance is the temperature and pressure at which:",
    topic: "Critical Constants",
    explanation:
      "At the critical point the liquid and vapour phases become indistinguishable — their densities converge and the meniscus disappears. Beyond it lies the supercritical fluid region.",
    choices: [
      { text: "Liquid and vapour become identical", isCorrect: true },
      { text: "The solid first begins to melt" },
      { text: "The gas reaches absolute zero" },
      { text: "Effusion of the gas ceases entirely" },
    ],
  },
  {
    stem: "For a van der Waals gas, the critical temperature is given in terms of a and b by T_c =:",
    topic: "Critical Constants",
    explanation:
      "For a van der Waals gas, T_c = 8a/(27Rb). The critical constants can all be expressed through a and b: V_c = 3b and p_c = a/(27b²).",
    choices: [
      { text: "8a/(27Rb)", isCorrect: true },
      { text: "27a/(8Rb)" },
      { text: "a/(27b²)" },
      { text: "3b/R" },
    ],
  },
  {
    stem: "The principle of corresponding states asserts that real gases at the same reduced temperature and reduced pressure have approximately the same:",
    topic: "Corresponding States",
    explanation:
      "Expressed through reduced variables (T_r = T/T_c, p_r = p/p_c), many gases follow a common curve and share nearly equal compression factors. This is the principle of corresponding states.",
    choices: [
      { text: "Compression factor", isCorrect: true },
      { text: "Molar mass" },
      { text: "Absolute temperature" },
      { text: "Number of molecules" },
    ],
  },
  {
    stem: "The Boyle temperature of a real gas is the temperature at which:",
    topic: "Real Gases",
    explanation:
      "At the Boyle temperature the attractive and repulsive contributions cancel over a range of pressures, so Z ≈ 1 and the gas behaves nearly ideally (the second virial coefficient is zero) up to moderate pressures.",
    choices: [
      { text: "The gas behaves nearly ideally", isCorrect: true },
      { text: "The gas instantly condenses to a liquid" },
      { text: "The compression factor is largest" },
      { text: "All molecular motion ceases entirely" },
    ],
  },
  {
    stem: "The virial equation of state expresses the compression factor as a power series in:",
    topic: "Real Gases",
    explanation:
      "The virial expansion writes Z = 1 + B/V_m + C/V_m² + …, a power series in inverse molar volume (or in pressure). The coefficients B, C, … capture successively higher-order molecular interactions.",
    choices: [
      { text: "Inverse molar volume (1/V_m)", isCorrect: true },
      { text: "Absolute temperature" },
      { text: "Molar mass" },
      { text: "The square of the amount of gas" },
    ],
  },
  {
    stem: "Which statements about the compression factor Z are correct? Select all that apply.",
    type: "MULTI",
    topic: "Real Gases",
    explanation:
      "Z = pV_m/RT; Z = 1 for an ideal gas; Z < 1 signals dominant attractions; Z > 1 signals dominant repulsions. Z is not always greater than one for real gases — it depends on conditions.",
    choices: [
      { text: "Z = pV_m/RT by definition", isCorrect: true },
      { text: "Z equals 1 for an ideal gas", isCorrect: true },
      { text: "Z < 1 indicates dominant attractive forces", isCorrect: true },
      { text: "Z > 1 indicates dominant repulsive forces", isCorrect: true },
      { text: "Z is always greater than 1 for any real gas" },
    ],
  },
  {
    stem: "Which statements about the van der Waals equation and critical behaviour are correct? Select all that apply.",
    type: "MULTI",
    topic: "Van der Waals Equation",
    explanation:
      "The a term corrects for attractions and b for molecular volume; above T_c a gas cannot be liquefied by pressure; the equation reduces to pV = nRT when a = b = 0. The b term does not represent attractive forces.",
    choices: [
      { text: "The a term accounts for intermolecular attractions", isCorrect: true },
      { text: "The b term accounts for finite molecular volume", isCorrect: true },
      { text: "Above T_c the gas cannot be liquefied by pressure", isCorrect: true },
      { text: "Setting a = b = 0 recovers the ideal gas law", isCorrect: true },
      { text: "The b term represents attractive forces" },
    ],
  },
  {
    stem: "A real gas approaches ideal behaviour in the limit of low pressure and high temperature.",
    type: "TRUE_FALSE",
    topic: "Real Gases",
    explanation:
      "At low pressure molecules are far apart (small interactions and negligible molecular volume) and at high temperature kinetic energy dominates attractions, so the gas obeys pV = nRT closely.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The combined gas law relating two states of a fixed amount of gas is:",
    topic: "Gas Laws",
    explanation:
      "For a fixed amount of gas, p₁V₁/T₁ = p₂V₂/T₂. It merges Boyle's, Charles's and Gay-Lussac's laws and follows from pV = nRT with n constant.",
    choices: [
      { text: "p₁V₁/T₁ = p₂V₂/T₂", isCorrect: true },
      { text: "p₁T₁/V₁ = p₂T₂/V₂" },
      { text: "V₁T₁/p₁ = V₂T₂/p₂" },
      { text: "p₁V₁T₁ = p₂V₂T₂" },
    ],
  },
  {
    stem: "One mole of an ideal gas at 273.15 K and 1 atm occupies approximately:",
    topic: "Ideal Gas Law",
    explanation:
      "The molar volume of an ideal gas at 0 °C and 1 atm is about 22.4 L mol⁻¹. Under the IUPAC 1-bar standard it is slightly larger, about 22.7 L mol⁻¹.",
    choices: [
      { text: "22.4 L", isCorrect: true },
      { text: "1.0 L" },
      { text: "6.02 L" },
      { text: "101 L" },
    ],
  },
  {
    stem: "To find the molar mass of an unknown gas from measured p, V, T and mass m, one uses:",
    topic: "Ideal Gas Law",
    explanation:
      "Combining pV = nRT with n = m/M gives M = mRT/(pV). Measuring the mass of a known volume at known p and T therefore yields the molar mass.",
    choices: [
      { text: "M = mRT/(pV)", isCorrect: true },
      { text: "M = pV/(mRT)" },
      { text: "M = pVRT/m" },
      { text: "M = m/(pVRT)" },
    ],
  },
  {
    stem: "At constant temperature and pressure, the volume occupied by a gas is proportional to the number of moles, which underlies:",
    topic: "Gas Laws",
    explanation:
      "Because V ∝ n at fixed T and p (Avogadro's principle), the volume ratios of gaseous reactants and products equal their mole ratios — the basis of gas-phase reaction stoichiometry by volume.",
    choices: [
      { text: "Gas volumes in simple mole ratios", isCorrect: true },
      { text: "Gas density being independent of amount" },
      { text: "Pressure being proportional to volume" },
      { text: "Effusion being independent of molar mass" },
    ],
  },
  {
    stem: "If 2 volumes of hydrogen react with 1 volume of oxygen to form water vapour, the volume of water vapour produced (same T, p) is:",
    topic: "Gas Laws",
    explanation:
      "The balanced reaction 2H₂ + O₂ → 2H₂O gives 2 volumes of water vapour from 2 volumes of hydrogen. By Avogadro's principle, volume ratios equal mole ratios at constant T and p.",
    choices: [
      { text: "2 volumes", isCorrect: true },
      { text: "1 volume" },
      { text: "3 volumes" },
      { text: "½ volume" },
    ],
  },
  {
    stem: "The partial pressure of water vapour must be subtracted when a gas is collected over water because the measured pressure is:",
    topic: "Partial Pressures",
    explanation:
      "A gas collected over water is saturated with water vapour, so the total pressure includes the vapour pressure of water. Subtracting it (Dalton's law) gives the partial pressure of the dry collected gas.",
    choices: [
      { text: "Dry-gas plus water-vapour pressure", isCorrect: true },
      { text: "Only the water-vapour pressure" },
      { text: "Always equal to atmospheric pressure" },
      { text: "Entirely independent of temperature" },
    ],
  },
  {
    stem: "At constant volume and amount, if the Kelvin temperature of a gas is tripled, the pressure:",
    topic: "Gas Laws",
    explanation:
      "At fixed V and n, p ∝ T (Gay-Lussac). Tripling the absolute temperature triples the pressure. Using Celsius rather than Kelvin would give an incorrect factor.",
    choices: [
      { text: "Triples", isCorrect: true },
      { text: "Is unchanged" },
      { text: "Is reduced to one-third" },
      { text: "Increases ninefold" },
    ],
  },
  {
    stem: "The density of a gas increases when, at fixed temperature, the pressure is:",
    topic: "Ideal Gas Law",
    explanation:
      "Since ρ = pM/RT, density is proportional to pressure at fixed T. Compressing the gas packs the same mass into a smaller volume, raising the density.",
    choices: [
      { text: "Increased", isCorrect: true },
      { text: "Decreased" },
      { text: "Held constant" },
      { text: "Reduced to zero" },
    ],
  },
  {
    stem: "Two identical flasks at the same T and p contain hydrogen and carbon dioxide respectively. They contain the same number of:",
    topic: "Gas Laws",
    explanation:
      "By Avogadro's principle, equal volumes at equal T and p hold equal numbers of molecules (and moles). The masses differ, because the molar masses differ, but the molecule counts are equal.",
    choices: [
      { text: "Molecules", isCorrect: true },
      { text: "Grams of gas" },
      { text: "Atoms exactly" },
      { text: "Kilojoules of bond energy" },
    ],
  },
  {
    stem: "For an ideal gas undergoing a change at constant temperature, the product pV:",
    topic: "Gas Laws",
    explanation:
      "At constant T and n, pV = nRT is constant (Boyle's law). So although p and V each change, their product stays fixed along an isotherm.",
    choices: [
      { text: "Remains constant", isCorrect: true },
      { text: "Doubles when V doubles" },
      { text: "Falls to zero" },
      { text: "Depends on the gas identity" },
    ],
  },
  {
    stem: "The pressure of a gas mixture is 5.0 bar and nitrogen makes up a mole fraction of 0.80. The partial pressure of nitrogen is:",
    topic: "Partial Pressures",
    explanation:
      "The partial pressure is pᵢ = xᵢ·p_total = 0.80 × 5.0 bar = 4.0 bar. Partial pressures scale linearly with mole fraction at fixed total pressure.",
    choices: [
      { text: "4.0 bar", isCorrect: true },
      { text: "0.80 bar" },
      { text: "5.0 bar" },
      { text: "6.25 bar" },
    ],
  },
  {
    stem: "A gas thermometer works because, at low pressure and constant volume, a gas's pressure is an accurate linear measure of its:",
    topic: "Kinetic Theory",
    explanation:
      "At low pressure a real gas is nearly ideal, so p ∝ T at constant V. This linear relation, extrapolating to zero pressure at absolute zero, makes the constant-volume gas thermometer a primary temperature standard.",
    choices: [
      { text: "Absolute temperature", isCorrect: true },
      { text: "Molar mass" },
      { text: "Mean free path" },
      { text: "Compression factor" },
    ],
  },
  {
    stem: "The temperature at which the volume of an ideal gas would extrapolate to zero, absolute zero, is:",
    topic: "Gas Laws",
    explanation:
      "Extrapolating the linear V–T (Charles's law) plot to V = 0 gives −273.15 °C, defined as 0 K. Real gases liquefy before this point, but the ideal extrapolation defines the absolute scale.",
    choices: [
      { text: "−273.15 °C (0 K)", isCorrect: true },
      { text: "0 °C" },
      { text: "−100 °C" },
      { text: "100 K above 0 °C" },
    ],
  },
  {
    stem: "Two gases at the same temperature but different molar masses are compared. They necessarily share the same:",
    topic: "Kinetic Theory",
    explanation:
      "At equal temperature, the mean translational kinetic energy per molecule, (3/2)kT, is identical for both gases. Their mean speeds differ because their masses differ.",
    choices: [
      { text: "Mean translational kinetic energy", isCorrect: true },
      { text: "Average molecular speed" },
      { text: "Mass of each molecule" },
      { text: "Density at fixed pressure" },
    ],
  },
  {
    stem: "A rigid sealed container of gas is cooled. According to kinetic theory, the pressure falls because the molecules:",
    topic: "Kinetic Theory",
    explanation:
      "Cooling lowers the mean molecular speed, so wall collisions become both less frequent and less forceful; the reduced momentum transfer per unit area lowers the pressure at constant volume.",
    choices: [
      { text: "Hit the walls less often and less hard", isCorrect: true },
      { text: "Shrink in their physical size" },
      { text: "Attract one another more strongly" },
      { text: "Increase in total number" },
    ],
  },
  {
    stem: "Which relationships correctly follow from pV = nRT for an ideal gas? Select all that apply.",
    type: "MULTI",
    topic: "Ideal Gas Law",
    explanation:
      "Density ρ = pM/RT; molar mass M = mRT/(pV); molar volume ≈ 22.4 L at 0 °C, 1 atm; combined law p₁V₁/T₁ = p₂V₂/T₂. Density is not independent of molar mass.",
    choices: [
      { text: "Density equals pM/RT", isCorrect: true },
      { text: "Molar mass equals mRT/(pV)", isCorrect: true },
      { text: "Molar volume is about 22.4 L at 0 °C and 1 atm", isCorrect: true },
      { text: "p₁V₁/T₁ = p₂V₂/T₂ for a fixed amount", isCorrect: true },
      { text: "Density is independent of molar mass" },
    ],
  },
  {
    stem: "Which statements about gas mixtures and partial pressures are correct? Select all that apply.",
    type: "MULTI",
    topic: "Partial Pressures",
    explanation:
      "Partial pressure = mole fraction × total pressure; total = sum of partials; a gas over water carries water vapour that must be subtracted; mole fractions sum to one. The partial pressure is not the same for every component regardless of amount.",
    choices: [
      { text: "Partial pressure equals mole fraction times total pressure", isCorrect: true },
      { text: "Total pressure is the sum of the partial pressures", isCorrect: true },
      { text: "A gas collected over water includes water vapour pressure", isCorrect: true },
      { text: "The mole fractions of all components sum to one", isCorrect: true },
      { text: "Every component has the same partial pressure regardless of amount" },
    ],
  },
  {
    stem: "At constant temperature and pressure, equal volumes of two different ideal gases contain equal numbers of molecules but generally different masses.",
    type: "TRUE_FALSE",
    topic: "Gas Laws",
    explanation:
      "Avogadro's principle fixes the molecule count for equal volumes at equal T and p; the masses differ because the two gases have different molar masses.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The SI unit of pressure, the pascal (Pa), is equivalent to:",
    topic: "Ideal Gas Law",
    explanation:
      "One pascal is one newton per square metre (N m⁻²). Related units include the bar (10⁵ Pa) and the standard atmosphere (101 325 Pa).",
    choices: [
      { text: "One newton per square metre", isCorrect: true },
      { text: "One joule for each mole" },
      { text: "One kilogram per litre" },
      { text: "One newton per metre" },
    ],
  },
  {
    stem: "Which of the following is the largest pressure?",
    topic: "Ideal Gas Law",
    explanation:
      "1 atm = 101 325 Pa ≈ 1.013 bar, which exceeds 1 bar (10⁵ Pa) and 100 kPa (= 1 bar). So the standard atmosphere is the largest of these.",
    choices: [
      { text: "1 standard atmosphere", isCorrect: true },
      { text: "A pressure of 1 bar" },
      { text: "A pressure of 100 kPa" },
      { text: "A pressure of 1000 Pa" },
    ],
  },
  {
    stem: "A manometer measures the pressure of a gas by balancing it against:",
    topic: "Ideal Gas Law",
    explanation:
      "A liquid-column manometer balances the gas pressure against a column of liquid (often mercury); the height difference, with the liquid's density and g, gives the pressure. A barometer works the same way for the atmosphere.",
    choices: [
      { text: "A liquid column of known density", isCorrect: true },
      { text: "An applied electric current" },
      { text: "The molar mass of the gas" },
      { text: "The speed of sound in the gas" },
    ],
  },
  {
    stem: "The barometric (exponential atmosphere) formula predicts that atmospheric pressure with increasing altitude:",
    topic: "Kinetic Theory",
    explanation:
      "The barometric formula p = p₀·exp(−Mgh/RT) shows pressure falling exponentially with height, because gravity sets up a Boltzmann distribution of molecules with altitude. Heavier gases fall off faster.",
    choices: [
      { text: "Decreases exponentially", isCorrect: true },
      { text: "Increases linearly" },
      { text: "Stays constant" },
      { text: "Decreases then increases" },
    ],
  },
  {
    stem: "The heat capacity ratio γ = C_p/C_V for an ideal monatomic gas is:",
    topic: "Kinetic Theory",
    explanation:
      "A monatomic ideal gas has C_V = (3/2)R and C_p = (5/2)R, so γ = C_p/C_V = 5/3 ≈ 1.67. Diatomic gases, with extra rotational modes, have a smaller γ (about 7/5).",
    choices: [
      { text: "5/3", isCorrect: true },
      { text: "1 exactly" },
      { text: "7/5" },
      { text: "2" },
    ],
  },
  {
    stem: "For an ideal gas, the difference between the molar heat capacities C_p and C_V equals:",
    topic: "Kinetic Theory",
    explanation:
      "For one mole of ideal gas, C_p − C_V = R (Mayer's relation). The extra heat at constant pressure goes into the expansion work the gas does as it warms.",
    choices: [
      { text: "R (the gas constant)", isCorrect: true },
      { text: "Exactly zero" },
      { text: "The quantity 3R/2" },
      { text: "The quantity R/2" },
    ],
  },
  {
    stem: "A diatomic gas has a larger molar heat capacity than a monatomic gas at the same temperature because it has additional:",
    topic: "Kinetic Theory",
    explanation:
      "A diatomic molecule stores energy in rotational (and, at high T, vibrational) modes as well as translation. These extra active degrees of freedom raise its heat capacity above the (3/2)R of a monatomic gas.",
    choices: [
      { text: "Rotational degrees of freedom", isCorrect: true },
      { text: "Translational degrees of freedom only" },
      { text: "Stored electric charge" },
      { text: "Nuclear spin states that store heat" },
    ],
  },
  {
    stem: "The thermal conductivity of a gas arises microscopically from molecules transporting, between collisions, their:",
    topic: "Transport Properties",
    explanation:
      "In a temperature gradient, faster (hotter) molecules carry more kinetic energy across the mean free path to cooler regions, transferring energy. This molecular transport of kinetic energy is thermal conduction.",
    choices: [
      { text: "Kinetic energy along a gradient", isCorrect: true },
      { text: "Electric charge along a field" },
      { text: "Net momentum against gravity" },
      { text: "Chemical bonds between regions" },
    ],
  },
  {
    stem: "The viscosity of a gas arises from molecules transporting, across layers of differing flow velocity, their:",
    topic: "Transport Properties",
    explanation:
      "Gas viscosity comes from molecules carrying momentum between adjacent layers moving at different speeds; this transfer of momentum resists shear. Notably, gas viscosity rises with temperature (unlike liquids).",
    choices: [
      { text: "Momentum between adjacent flow layers", isCorrect: true },
      { text: "Kinetic energy toward the walls" },
      { text: "Electric charge across the flow" },
      { text: "Mass into the container walls" },
    ],
  },
  {
    stem: "Unlike a liquid, the viscosity of a gas generally ______ as temperature rises.",
    topic: "Transport Properties",
    explanation:
      "Gas viscosity increases with temperature, because faster molecules transfer momentum between flow layers more effectively. In liquids, viscosity falls with temperature as intermolecular forces weaken.",
    choices: [
      { text: "Increases", isCorrect: true },
      { text: "Decreases sharply" },
      { text: "Stays exactly constant" },
      { text: "Falls to zero" },
    ],
  },
  {
    stem: "For a real gas described by the virial equation, the second virial coefficient B is negative at low temperature because:",
    topic: "Real Gases",
    explanation:
      "A negative B means attractions dominate, lowering Z below 1. At low temperature molecules move slowly enough for attractive forces to have a large effect; B rises through zero (at the Boyle temperature) toward positive values as T increases.",
    choices: [
      { text: "Attractive forces dominate", isCorrect: true },
      { text: "Repulsive forces dominate strongly" },
      { text: "The molecules have zero volume" },
      { text: "The gas has become perfectly ideal" },
    ],
  },
  {
    stem: "The Joule–Thomson effect, the temperature change when a real gas expands through a throttle at constant enthalpy, is zero for:",
    topic: "Real Gases",
    explanation:
      "An ideal gas has no intermolecular forces, so throttling produces no temperature change (its Joule–Thomson coefficient is zero). Real gases cool or warm on expansion depending on whether they are below or above their inversion temperature.",
    choices: [
      { text: "An ideal gas", isCorrect: true },
      { text: "Any gas below its inversion temperature" },
      { text: "A gas with strong attractions only" },
      { text: "A gas at its critical point" },
    ],
  },
  {
    stem: "Liquefaction of gases such as nitrogen by repeated Joule–Thomson expansion requires the gas to start:",
    topic: "Real Gases",
    explanation:
      "Cooling on throttling occurs only below the inversion temperature, where attractive forces dominate. Nitrogen's inversion temperature is above room temperature, so it cools and can be liquefied; hydrogen and helium must be pre-cooled first.",
    choices: [
      { text: "Below its inversion temperature", isCorrect: true },
      { text: "Above its critical temperature" },
      { text: "Cooled to exactly absolute zero" },
      { text: "Already a supercritical fluid" },
    ],
  },
  {
    stem: "At extremely low pressure such that the mean free path exceeds the container size, gas flow enters the regime called:",
    topic: "Collisions & Mean Free Path",
    explanation:
      "When the mean free path is larger than the vessel, molecules collide with the walls more often than with each other — the free-molecular (Knudsen) regime, where effusion-like behaviour governs flow.",
    choices: [
      { text: "Free-molecular (Knudsen) flow", isCorrect: true },
      { text: "Turbulent flow" },
      { text: "Ideal incompressible flow" },
      { text: "Supercritical flow" },
    ],
  },
  {
    stem: "The speed of sound in an ideal gas increases with temperature because it is proportional to:",
    topic: "Kinetic Theory",
    explanation:
      "The speed of sound is c = √(γRT/M), so it rises with the square root of temperature (like molecular speeds) and falls with molar mass. Sound travels through the gas via molecular motion, so it tracks the mean speed.",
    choices: [
      { text: "The square root of temperature", isCorrect: true },
      { text: "The square of the pressure" },
      { text: "The molar mass of the gas directly" },
      { text: "The container volume" },
    ],
  },
  {
    stem: "Which statements about the heat capacities and degrees of freedom of ideal gases are correct? Select all that apply.",
    type: "MULTI",
    topic: "Kinetic Theory",
    explanation:
      "For an ideal gas C_p − C_V = R; a monatomic gas has C_V = (3/2)R and γ = 5/3; diatomic gases have extra rotational modes and larger heat capacity. Equipartition gives ½kT (not kT) per quadratic degree of freedom.",
    choices: [
      { text: "C_p − C_V = R for an ideal gas", isCorrect: true },
      { text: "A monatomic ideal gas has C_V = (3/2)R", isCorrect: true },
      { text: "The ratio γ = C_p/C_V is 5/3 for a monatomic gas", isCorrect: true },
      { text: "Diatomic gases have larger heat capacity from rotation", isCorrect: true },
      { text: "Each quadratic degree of freedom contributes kT, not ½kT" },
    ],
  },
  {
    stem: "The viscosity of a gas increases with rising temperature, in contrast to the viscosity of a liquid, which decreases.",
    type: "TRUE_FALSE",
    topic: "Transport Properties",
    explanation:
      "In a gas, higher temperature means faster molecules transferring momentum between flow layers more effectively, raising viscosity; in a liquid, heating weakens intermolecular forces and lowers viscosity.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "For an ideal gas, expansion through a throttle at constant enthalpy (the Joule–Thomson process) produces no change in temperature.",
    type: "TRUE_FALSE",
    topic: "Real Gases",
    explanation:
      "With no intermolecular forces, an ideal gas has a zero Joule–Thomson coefficient, so throttling leaves its temperature unchanged. Real gases show cooling or heating depending on the inversion temperature.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
];
