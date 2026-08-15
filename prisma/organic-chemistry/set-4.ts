import type { Q } from "../_lib/qbank";

export const ORGANIC_SET_4: Q[] = [
  {
    stem: "The SN2 reaction proceeds through a mechanism that is:",
    topic: "Substitution: SN1 & SN2",
    explanation:
      "SN2 is concerted (one step): the nucleophile attacks as the leaving group departs, passing through a single trigonal-bipyramidal transition state with no intermediate.",
    choices: [
      { text: "Concerted, in a single step with no intermediate", isCorrect: true },
      { text: "Stepwise, through a carbocation intermediate" },
      { text: "Stepwise, through a carbanion intermediate" },
      { text: "Radical, through a chain mechanism" },
    ],
  },
  {
    stem: "The rate of an SN2 reaction depends on:",
    topic: "Substitution: SN1 & SN2",
    explanation:
      "SN2 is bimolecular: its rate = k[substrate][nucleophile], first order in each, because both take part in the single rate-determining transition state.",
    choices: [
      { text: "Both substrate and nucleophile amounts", isCorrect: true },
      { text: "The concentration of the substrate only" },
      { text: "The concentration of the nucleophile only" },
      { text: "Neither the substrate nor nucleophile amount" },
    ],
  },
  {
    stem: "An SN2 reaction at a stereocentre proceeds with:",
    topic: "Substitution: SN1 & SN2",
    explanation:
      "The nucleophile attacks from the side opposite the leaving group (backside attack), so the stereocentre is inverted — a Walden inversion, like an umbrella turning inside out.",
    choices: [
      { text: "Inversion of configuration (Walden)", isCorrect: true },
      { text: "Complete retention of the configuration" },
      { text: "Full racemisation at the reacting centre" },
      { text: "Loss of the stereocentre altogether" },
    ],
  },
  {
    stem: "Which substrate reacts fastest by an SN2 mechanism?",
    topic: "Substitution: SN1 & SN2",
    explanation:
      "SN2 is fastest at unhindered carbons, so methyl and primary halides react best; increasing substitution (secondary, then tertiary) blocks backside attack and slows or stops SN2.",
    choices: [
      { text: "A methyl or primary halide", isCorrect: true },
      { text: "A tertiary halide" },
      { text: "A quaternary carbon" },
      { text: "A highly branched neopentyl halide" },
    ],
  },
  {
    stem: "Increasing steric bulk at the carbon bearing the leaving group affects SN2 by:",
    topic: "Substitution: SN1 & SN2",
    explanation:
      "Bulk around the reacting carbon hinders the nucleophile's backside approach, raising the transition-state energy; hence the SN2 rate order methyl > primary > secondary ≫ tertiary.",
    choices: [
      { text: "Slowing it, by hindering backside attack", isCorrect: true },
      { text: "Speeding it, by stabilising the transition state" },
      { text: "Leaving the rate unchanged" },
      { text: "Converting it into an SN1 reaction with no rate change" },
    ],
  },
  {
    stem: "SN2 reactions are favoured by which type of nucleophile?",
    topic: "Substitution: SN1 & SN2",
    explanation:
      "A strong, often negatively charged nucleophile drives SN2, since the nucleophile participates in the rate-determining step; weak nucleophiles favour the SN1 pathway instead.",
    choices: [
      { text: "A strong, often anionic nucleophile", isCorrect: true },
      { text: "A weak, neutral nucleophile species" },
      { text: "The absence of any nucleophile" },
      { text: "A bulky, non-nucleophilic hindered base" },
    ],
  },
  {
    stem: "Polar aprotic solvents (e.g. DMSO, acetone, DMF) speed up SN2 reactions because they:",
    topic: "Substitution: SN1 & SN2",
    explanation:
      "Polar aprotic solvents solvate cations well but leave anions relatively 'naked' and reactive (no hydrogen-bonding to the nucleophile), so the nucleophile attacks faster in SN2.",
    choices: [
      { text: "Leave the anion poorly solvated and reactive", isCorrect: true },
      { text: "Strongly hydrogen-bond to and cage the nucleophile" },
      { text: "Stabilise carbocation intermediates especially well" },
      { text: "Remove the nucleophile from the solution entirely" },
    ],
  },
  {
    stem: "The SN1 reaction proceeds through a mechanism that is:",
    topic: "Substitution: SN1 & SN2",
    explanation:
      "SN1 is stepwise: the leaving group departs first to form a carbocation (the slow, rate-determining step), which the nucleophile then captures in a fast second step.",
    choices: [
      { text: "Stepwise, via a carbocation", isCorrect: true },
      { text: "Concerted, in one single step" },
      { text: "Radical, via a chain mechanism" },
      { text: "Stepwise, via a carbanion intermediate" },
    ],
  },
  {
    stem: "The rate of an SN1 reaction depends on:",
    topic: "Substitution: SN1 & SN2",
    explanation:
      "SN1 is unimolecular: rate = k[substrate], independent of nucleophile concentration, because only the substrate is present in the rate-determining ionisation step.",
    choices: [
      { text: "The substrate concentration only", isCorrect: true },
      { text: "Both the substrate and nucleophile concentrations" },
      { text: "The nucleophile concentration only" },
      { text: "The solvent concentration only" },
    ],
  },
  {
    stem: "Which substrate reacts fastest by an SN1 mechanism?",
    topic: "Substitution: SN1 & SN2",
    explanation:
      "SN1 rate tracks carbocation stability, so tertiary halides (forming stable 3° cations) react fastest; methyl and primary halides essentially do not go by SN1 because their cations are too unstable.",
    choices: [
      { text: "A tertiary halide", isCorrect: true },
      { text: "A methyl halide" },
      { text: "A primary halide" },
      { text: "An unhindered ethyl halide" },
    ],
  },
  {
    stem: "An SN1 reaction at a stereocentre typically gives:",
    topic: "Substitution: SN1 & SN2",
    explanation:
      "The planar carbocation can be attacked from either face, so SN1 gives substantial racemisation (often with slight inversion excess), unlike the clean inversion of SN2.",
    choices: [
      { text: "A largely racemic product mixture", isCorrect: true },
      { text: "A single, fully inverted product only" },
      { text: "A single, fully retained product only" },
      { text: "An achiral product in every single case" },
    ],
  },
  {
    stem: "Protic solvents (e.g. water, alcohols) favour SN1 reactions because they:",
    topic: "Substitution: SN1 & SN2",
    explanation:
      "Protic solvents stabilise the developing carbocation and the departing anion through solvation and hydrogen bonding, lowering the ionisation barrier that controls the SN1 rate.",
    choices: [
      { text: "Solvate the carbocation and leaving group", isCorrect: true },
      { text: "Leave the nucleophile bare and reactive" },
      { text: "Prevent any ionisation of the substrate" },
      { text: "Destabilise every charged intermediate formed" },
    ],
  },
  {
    stem: "Which statements about the SN2 mechanism are correct? Select all that apply.",
    type: "MULTI",
    topic: "Substitution: SN1 & SN2",
    explanation:
      "SN2 is concerted and bimolecular, gives inversion, is fastest at methyl/primary carbons, favours strong nucleophiles, and is accelerated by polar aprotic solvents. It does not proceed via a carbocation.",
    choices: [
      { text: "It is a concerted, one-step reaction", isCorrect: true },
      { text: "Its rate is first order in both substrate and nucleophile", isCorrect: true },
      { text: "It gives inversion of configuration", isCorrect: true },
      { text: "It is fastest at methyl and primary carbons", isCorrect: true },
      { text: "It proceeds through a free carbocation intermediate" },
      { text: "It is fastest at tertiary carbons" },
    ],
  },
  {
    stem: "Which statements about the SN1 mechanism are correct? Select all that apply.",
    type: "MULTI",
    topic: "Substitution: SN1 & SN2",
    explanation:
      "SN1 is stepwise via a carbocation, unimolecular (first order in substrate only), fastest at tertiary carbons, favours protic solvents, and gives racemisation. Its rate does not depend on nucleophile concentration.",
    choices: [
      { text: "It proceeds through a carbocation intermediate", isCorrect: true },
      { text: "Its rate depends only on the substrate concentration", isCorrect: true },
      { text: "It is fastest at tertiary carbons", isCorrect: true },
      { text: "It gives largely racemised product", isCorrect: true },
      { text: "Its rate is first order in the nucleophile" },
      { text: "It is a concerted, one-step reaction" },
    ],
  },
  {
    stem: "In the SN2 mechanism, the nucleophile attacks the carbon from the side directly opposite the leaving group.",
    type: "TRUE_FALSE",
    topic: "Substitution: SN1 & SN2",
    explanation:
      "Backside attack lets the nucleophile's electrons enter the C–LG antibonding orbital as the leaving group departs; the resulting inversion of the three other groups is the Walden inversion.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "A tertiary halide undergoes SN1 much faster than SN2 because its carbocation is stabilised while its carbon is too hindered for backside attack.",
    type: "TRUE_FALSE",
    topic: "Substitution: SN1 & SN2",
    explanation:
      "The bulky tertiary centre blocks the SN2 backside approach, while the tertiary carbocation is relatively stable, so ionisation (SN1) is strongly preferred over direct displacement.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The E2 reaction proceeds through a mechanism that is:",
    topic: "Elimination: E1 & E2",
    explanation:
      "E2 is concerted and bimolecular: a base removes a β-hydrogen as the leaving group departs and the π bond forms, all in one step through a single transition state.",
    choices: [
      { text: "Concerted and bimolecular, in a single step", isCorrect: true },
      { text: "Stepwise, through a carbocation intermediate" },
      { text: "Stepwise, through a carbanion intermediate" },
      { text: "Radical, through a chain mechanism" },
    ],
  },
  {
    stem: "The rate of an E2 reaction is:",
    topic: "Elimination: E1 & E2",
    explanation:
      "E2 rate = k[substrate][base], first order in each, because both the substrate and the base take part in the single rate-determining transition state.",
    choices: [
      { text: "First order in both substrate and base", isCorrect: true },
      { text: "First order in the substrate alone" },
      { text: "First order in the base alone" },
      { text: "Zero order in both of the reactants" },
    ],
  },
  {
    stem: "E2 elimination requires that the β-hydrogen and the leaving group be:",
    topic: "Elimination: E1 & E2",
    explanation:
      "E2 has a stereoelectronic requirement: the β-H and leaving group must be anti-periplanar (180° dihedral) so the developing p orbitals align to form the π bond in the concerted transition state.",
    choices: [
      { text: "Anti-periplanar (180°)", isCorrect: true },
      { text: "Eclipsed, at 0° dihedral" },
      { text: "Gauche, at 60° dihedral" },
      { text: "Located on the same carbon atom" },
    ],
  },
  {
    stem: "According to Zaitsev's rule, the major product of most eliminations is the alkene that is:",
    topic: "Elimination: E1 & E2",
    explanation:
      "Zaitsev's rule states the more substituted (more stable) alkene predominates, because the more substituted double bond is thermodynamically favoured and usually reached through the lower-energy transition state.",
    choices: [
      { text: "The more substituted (more stable) alkene", isCorrect: true },
      { text: "The least substituted alkene isomer" },
      { text: "Always the cis-configured alkene" },
      { text: "Always the terminal alkene isomer" },
    ],
  },
  {
    stem: "A bulky strong base such as potassium tert-butoxide tends to give the:",
    topic: "Elimination: E1 & E2",
    explanation:
      "A bulky base is hindered from reaching the more crowded internal β-hydrogens, so it removes a less hindered terminal hydrogen, giving the less substituted (Hofmann) alkene as the major product.",
    choices: [
      { text: "Less substituted (Hofmann) alkene", isCorrect: true },
      { text: "More substituted (Zaitsev) alkene" },
      { text: "Substitution product exclusively" },
      { text: "A rearranged carbocation product" },
    ],
  },
  {
    stem: "The E1 reaction proceeds through a mechanism that is:",
    topic: "Elimination: E1 & E2",
    explanation:
      "E1 is stepwise: the leaving group departs first to give a carbocation (slow, rate-determining), then a base removes a β-hydrogen to form the alkene (fast).",
    choices: [
      { text: "Stepwise, through a carbocation intermediate", isCorrect: true },
      { text: "Concerted and bimolecular" },
      { text: "Radical, through a chain mechanism" },
      { text: "Stepwise, through a carbanion intermediate" },
    ],
  },
  {
    stem: "The rate of an E1 reaction depends on:",
    topic: "Elimination: E1 & E2",
    explanation:
      "E1 is unimolecular: rate = k[substrate], independent of base concentration, because only the substrate ionises in the rate-determining step, exactly as in SN1.",
    choices: [
      { text: "The substrate concentration only", isCorrect: true },
      { text: "Both substrate and base concentrations" },
      { text: "The base concentration only" },
      { text: "The solvent concentration only" },
    ],
  },
  {
    stem: "E1 and SN1 reactions often compete because both:",
    topic: "Elimination: E1 & E2",
    explanation:
      "E1 and SN1 share the same first step — rate-determining ionisation to a carbocation; the intermediate then partitions between losing a β-proton (E1) and being captured by a nucleophile (SN1).",
    choices: [
      { text: "Share a common carbocation intermediate", isCorrect: true },
      { text: "Have identical products in all cases" },
      { text: "Require a strong base and strong nucleophile" },
      { text: "Proceed only at primary carbons" },
    ],
  },
  {
    stem: "Which substrate most readily undergoes E1 (and SN1)?",
    topic: "Elimination: E1 & E2",
    explanation:
      "Tertiary substrates ionise most easily because they give the most stable carbocation, so they favour the unimolecular E1/SN1 pathways; primary substrates essentially do not go by E1.",
    choices: [
      { text: "A tertiary halide", isCorrect: true },
      { text: "A primary halide" },
      { text: "A methyl halide" },
      { text: "An unhindered ethyl halide" },
    ],
  },
  {
    stem: "Raising the temperature generally favours elimination over substitution because elimination has a:",
    topic: "Substitution vs Elimination",
    explanation:
      "Elimination increases the number of molecules and has a more positive entropy change; the TΔS term grows with temperature, so higher temperatures tilt the competition toward elimination.",
    choices: [
      { text: "A positive entropy change, favoured when hot", isCorrect: true },
      { text: "A more negative overall entropy change" },
      { text: "Lower activation energy at all temperatures" },
      { text: "Complete independence from the temperature" },
    ],
  },
  {
    stem: "Which statements about the E2 mechanism are correct? Select all that apply.",
    type: "MULTI",
    topic: "Elimination: E1 & E2",
    explanation:
      "E2 is concerted, bimolecular, needs an anti-periplanar β-H and leaving group, favours strong bases, and typically follows Zaitsev. It does not proceed through a carbocation intermediate.",
    choices: [
      { text: "It is concerted and one-step", isCorrect: true },
      { text: "Its rate is first order in both substrate and base", isCorrect: true },
      { text: "It requires an anti-periplanar β-hydrogen and leaving group", isCorrect: true },
      { text: "It is promoted by strong bases", isCorrect: true },
      { text: "It proceeds through a carbocation intermediate" },
      { text: "Its rate is independent of base concentration" },
    ],
  },
  {
    stem: "Which factors favour elimination over substitution? Select all that apply.",
    type: "MULTI",
    topic: "Substitution vs Elimination",
    explanation:
      "A strong/bulky base, a hindered (more substituted) substrate, and higher temperature all favour elimination. Weak nucleophiles at unhindered primary carbons favour substitution instead.",
    choices: [
      { text: "A strong, bulky base", isCorrect: true },
      { text: "A more substituted (hindered) substrate", isCorrect: true },
      { text: "A higher reaction temperature", isCorrect: true },
      { text: "Anti-periplanar geometry for E2", isCorrect: true },
      { text: "A weak nucleophile at an unhindered primary carbon" },
      { text: "Low temperature with a small nucleophile" },
    ],
  },
  {
    stem: "In an E2 reaction, removal of the β-hydrogen and departure of the leaving group occur in the same step.",
    type: "TRUE_FALSE",
    topic: "Elimination: E1 & E2",
    explanation:
      "E2 is a single concerted step: as the base pulls off the β-H, the C–LG bond breaks and the π bond forms simultaneously, which is why the rate depends on both base and substrate.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Zaitsev's rule predicts the more substituted alkene as the major elimination product under ordinary conditions.",
    type: "TRUE_FALSE",
    topic: "Elimination: E1 & E2",
    explanation:
      "Because the more substituted alkene is more stable, it is usually the major product; the exception is when a bulky base forces removal of a less hindered proton, giving the Hofmann (less substituted) alkene.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "A primary substrate with a strong, unhindered nucleophile most likely reacts by:",
    topic: "Substitution vs Elimination",
    explanation:
      "Primary carbons are ideal for backside attack and cannot form stable carbocations, so with a good nucleophile they react cleanly by SN2; SN1/E1 are ruled out by the unstable primary cation.",
    choices: [
      { text: "SN2", isCorrect: true },
      { text: "SN1" },
      { text: "E1" },
      { text: "A carbocation rearrangement" },
    ],
  },
  {
    stem: "A tertiary substrate with a weak nucleophile in a protic solvent most likely reacts by:",
    topic: "Substitution vs Elimination",
    explanation:
      "A tertiary carbon cannot undergo SN2 (too hindered) but ionises readily; with a weak nucleophile/base in a protic solvent, it follows the unimolecular SN1 (and competing E1) pathway.",
    choices: [
      { text: "SN1 (with some E1)", isCorrect: true },
      { text: "SN2 only" },
      { text: "E2 elimination exclusively" },
      { text: "A radical chain process" },
    ],
  },
  {
    stem: "A primary or secondary substrate with a strong, bulky base most likely reacts by:",
    topic: "Substitution vs Elimination",
    explanation:
      "A strong, bulky base is poor at backside attack but good at removing a β-proton, so it drives bimolecular elimination (E2), typically giving the Hofmann alkene when very bulky.",
    choices: [
      { text: "E2", isCorrect: true },
      { text: "SN2" },
      { text: "SN1" },
      { text: "E1" },
    ],
  },
  {
    stem: "A methyl halide (CH₃X) essentially cannot undergo which mechanisms?",
    topic: "Substitution vs Elimination",
    explanation:
      "A methyl carbon has no β-hydrogen (so no elimination) and forms an extremely unstable cation (so no SN1/E1); it reacts only by SN2. Thus SN1, E1 and E2 are all excluded for CH₃X.",
    choices: [
      { text: "SN1, E1 and E2", isCorrect: true },
      { text: "SN2 only" },
      { text: "All four mechanisms equally" },
      { text: "Only radical substitution" },
    ],
  },
  {
    stem: "Comparing SN1 and SN2, increasing substrate substitution (1° → 3°) shifts the preference:",
    topic: "Substitution: SN1 & SN2",
    explanation:
      "More substitution stabilises the carbocation (favouring SN1) while blocking backside attack (disfavouring SN2), so the trend runs from SN2 at primary toward SN1 at tertiary carbons.",
    choices: [
      { text: "From SN2 (primary) toward SN1 (tertiary)", isCorrect: true },
      { text: "From SN1 (primary) toward SN2 (tertiary)" },
      { text: "Toward SN2 for all substitution levels" },
      { text: "With no dependence on substitution" },
    ],
  },
  {
    stem: "A good leaving group is essential to substitution and elimination; the best leaving groups are:",
    topic: "Leaving Groups",
    explanation:
      "Good leaving groups are weak, stable bases (I⁻, Br⁻, Cl⁻, tosylate) that readily accept the bonding electrons; strong bases like OH⁻ and RO⁻ are poor leaving groups.",
    choices: [
      { text: "Weak, stable bases (halides, sulfonates)", isCorrect: true },
      { text: "Strong, unstable bases such as hydroxide" },
      { text: "Neutral, unfunctionalised hydrocarbons" },
      { text: "Small, strongly basic anions" },
    ],
  },
  {
    stem: "Among the halide leaving groups, the reactivity order in substitution is:",
    topic: "Leaving Groups",
    explanation:
      "Leaving-group ability improves down the group as the C–X bond weakens and the anion becomes more stable: I⁻ > Br⁻ > Cl⁻ > F⁻ (fluoride is a very poor leaving group).",
    choices: [
      { text: "I > Br > Cl > F", isCorrect: true },
      { text: "F > Cl > Br > I" },
      { text: "Cl > Br > I > F" },
      { text: "All halides leave at the same rate" },
    ],
  },
  {
    stem: "A weak nucleophile that is also a weak base (e.g. water or an alcohol) with a tertiary substrate promotes:",
    topic: "Substitution vs Elimination",
    explanation:
      "Weak, neutral nucleophiles cannot force bimolecular reactions; with a tertiary substrate they allow slow ionisation, giving SN1 and E1 products through the shared carbocation intermediate.",
    choices: [
      { text: "SN1 and E1 pathways", isCorrect: true },
      { text: "SN2 and E2 pathways" },
      { text: "Only E2" },
      { text: "No reaction under any conditions" },
    ],
  },
  {
    stem: "A strong nucleophile that is a weak base (e.g. I⁻, RS⁻, CN⁻) at a primary/secondary carbon favours:",
    topic: "Substitution vs Elimination",
    explanation:
      "A species that is strongly nucleophilic but weakly basic pushes substitution over elimination; at an accessible primary or secondary carbon this means predominantly SN2.",
    choices: [
      { text: "SN2 substitution", isCorrect: true },
      { text: "E2 elimination" },
      { text: "E1 elimination" },
      { text: "A radical chain" },
    ],
  },
  {
    stem: "A strong base that is also a strong nucleophile (e.g. ethoxide) at a secondary carbon typically gives:",
    topic: "Substitution vs Elimination",
    explanation:
      "At a secondary carbon a strong base/nucleophile like ethoxide promotes both bimolecular pathways, so a mixture of SN2 and E2 products forms, with elimination favoured at higher temperature.",
    choices: [
      { text: "A mix of SN2 and E2 products", isCorrect: true },
      { text: "Exclusively the SN1 pathway" },
      { text: "Exclusively the E1 pathway" },
      { text: "No reaction whatsoever" },
    ],
  },
  {
    stem: "Which conditions favour the SN1/E1 (unimolecular) pathways? Select all that apply.",
    type: "MULTI",
    topic: "Substitution vs Elimination",
    explanation:
      "Tertiary substrates, weak nucleophiles/bases, protic (ionising) solvents, and good leaving groups favour ionisation to a carbocation and thus SN1/E1. Strong nucleophiles at primary carbons favour bimolecular pathways.",
    choices: [
      { text: "A tertiary substrate", isCorrect: true },
      { text: "A weak nucleophile or base", isCorrect: true },
      { text: "A protic, ionising solvent", isCorrect: true },
      { text: "A good leaving group", isCorrect: true },
      { text: "A strong nucleophile at a primary carbon" },
      { text: "A polar aprotic solvent with a strong anion" },
    ],
  },
  {
    stem: "Which conditions favour the SN2 pathway? Select all that apply.",
    type: "MULTI",
    topic: "Substitution: SN1 & SN2",
    explanation:
      "Methyl/primary substrates, strong (often anionic) nucleophiles, polar aprotic solvents, and good leaving groups favour SN2. Tertiary substrates and weak nucleophiles disfavour it.",
    choices: [
      { text: "A methyl or primary substrate", isCorrect: true },
      { text: "A strong, anionic nucleophile", isCorrect: true },
      { text: "A polar aprotic solvent", isCorrect: true },
      { text: "A good leaving group", isCorrect: true },
      { text: "A tertiary, hindered substrate" },
      { text: "A weak, neutral nucleophile in a protic solvent" },
    ],
  },
  {
    stem: "Which statements about leaving groups are correct? Select all that apply.",
    type: "MULTI",
    topic: "Leaving Groups",
    explanation:
      "Good leaving groups are weak, stable bases; halide ability increases I > Br > Cl > F; sulfonates (tosylate) are excellent; protonating –OH makes water a good leaving group. Strong bases like OH⁻ are poor leaving groups.",
    choices: [
      { text: "Good leaving groups are weak, stable bases", isCorrect: true },
      { text: "Leaving ability follows I⁻ > Br⁻ > Cl⁻ > F⁻", isCorrect: true },
      { text: "Tosylate is an excellent leaving group", isCorrect: true },
      { text: "Protonating an alcohol turns –OH into water, a good leaving group", isCorrect: true },
      { text: "Hydroxide is an excellent leaving group" },
      { text: "Fluoride is the best halide leaving group" },
    ],
  },
  {
    stem: "A polar aprotic solvent accelerates SN2 reactions, whereas a polar protic solvent tends to favour SN1.",
    type: "TRUE_FALSE",
    topic: "Substitution vs Elimination",
    explanation:
      "Aprotic solvents free the nucleophile for backside attack (SN2), while protic solvents stabilise ions and cage the nucleophile, promoting ionisation to a carbocation (SN1); solvent choice thus steers the mechanism.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "In an alkyl halide R–X, the carbon–halogen bond is polarised so that the carbon is:",
    topic: "Alkyl Halides",
    explanation:
      "The halogen is more electronegative than carbon, so the C–X bond is polarised with carbon δ⁺ (electrophilic); this electrophilic carbon is the site attacked by nucleophiles in substitution.",
    choices: [
      { text: "δ⁺ and electrophilic", isCorrect: true },
      { text: "δ⁻ and nucleophilic" },
      { text: "Fully negatively charged" },
      { text: "Completely nonpolar" },
    ],
  },
  {
    stem: "Reaction of a primary alkyl halide with sodium hydroxide (aqueous) gives principally:",
    topic: "Alkyl Halides",
    explanation:
      "Aqueous hydroxide is a strong nucleophile; at an unhindered primary carbon it displaces the halide by SN2 to give the corresponding alcohol as the main product.",
    choices: [
      { text: "An alcohol, by SN2 substitution", isCorrect: true },
      { text: "An alkene, by E1 elimination" },
      { text: "A carboxylic acid" },
      { text: "An ether, by SN1 substitution" },
    ],
  },
  {
    stem: "Reaction of an alkyl halide with an alkoxide (RO⁻) to form an ether is known as the:",
    topic: "Alkyl Halides",
    explanation:
      "The Williamson ether synthesis combines an alkoxide with a (preferably primary) alkyl halide by SN2 to form an ether; using a hindered halide instead promotes elimination.",
    choices: [
      { text: "Williamson ether synthesis", isCorrect: true },
      { text: "Friedel–Crafts alkylation" },
      { text: "Wittig reaction" },
      { text: "Markovnikov addition" },
    ],
  },
  {
    stem: "Reaction of an alkyl halide with a cyanide ion (CN⁻) gives a nitrile and is useful because it:",
    topic: "Alkyl Halides",
    explanation:
      "Displacement of halide by cyanide (SN2) forms a C–C bond, extending the carbon chain by one carbon; the nitrile can then be hydrolysed to a carboxylic acid or reduced to an amine.",
    choices: [
      { text: "Forms a new C–C bond, extending the chain", isCorrect: true },
      { text: "Removes one carbon from the chain" },
      { text: "Converts the halide directly into an alkene" },
      { text: "Leaves the chain length unchanged" },
    ],
  },
  {
    stem: "Reaction of a primary alkyl halide with excess ammonia can produce:",
    topic: "Alkyl Halides",
    explanation:
      "Ammonia acts as a nucleophile, displacing halide to give an amine (often as a mixture of degrees of substitution); excess ammonia favours the primary amine and limits over-alkylation.",
    choices: [
      { text: "A primary amine (possibly over-alkylated)", isCorrect: true },
      { text: "An alkene, by elimination only" },
      { text: "A carboxylic acid product" },
      { text: "A symmetrical ether" },
    ],
  },
  {
    stem: "Allylic and benzylic halides are unusually reactive in SN1 because they form carbocations that are:",
    topic: "Allylic & Benzylic Systems",
    explanation:
      "The allylic/benzylic cation is resonance-stabilised (charge delocalised into the adjacent π system), lowering the ionisation barrier and greatly accelerating SN1 (and E1) relative to simple alkyl halides.",
    choices: [
      { text: "Resonance-stabilised by the adjacent π system", isCorrect: true },
      { text: "Destabilised by the adjacent π system" },
      { text: "Completely unable to form at all" },
      { text: "Identical in stability to a methyl cation" },
    ],
  },
  {
    stem: "Allylic and benzylic halides are also relatively reactive in SN2 because the adjacent π system:",
    topic: "Allylic & Benzylic Systems",
    explanation:
      "The adjacent π system stabilises the SN2 transition state (partial conjugation with the forming/breaking bonds), so allylic and benzylic substrates react faster than comparable simple primary halides.",
    choices: [
      { text: "Stabilises the SN2 transition state", isCorrect: true },
      { text: "Blocks the nucleophile entirely" },
      { text: "Makes backside attack impossible" },
      { text: "Removes the leaving group prematurely" },
    ],
  },
  {
    stem: "Vinyl and aryl halides are very unreactive toward SN1 and SN2 because:",
    topic: "Alkyl Halides",
    explanation:
      "In vinyl/aryl halides the C–X carbon is sp² and the C–X bond is strengthened by partial conjugation; backside attack is blocked and the aryl/vinyl cation would be very unstable, so both pathways are disfavoured.",
    choices: [
      { text: "Strong sp² C–X bond; the cation is unstable", isCorrect: true },
      { text: "They would form especially stable carbocations" },
      { text: "They possess exceptionally good leaving groups" },
      { text: "The nucleophile attacks far too easily" },
    ],
  },
  {
    stem: "A secondary alkyl halide can react by SN1, SN2, E1 or E2 depending mainly on:",
    topic: "Substitution vs Elimination",
    explanation:
      "Secondary substrates are borderline: the observed pathway depends on the strength and bulk of the nucleophile/base, the solvent, and the temperature, which together select among the four mechanisms.",
    choices: [
      { text: "The base, solvent and temperature", isCorrect: true },
      { text: "Just the identity of the leaving group" },
      { text: "Nothing; secondary halides are always SN2" },
      { text: "The colour of the reagents" },
    ],
  },
  {
    stem: "The stereochemical outcome that distinguishes SN2 from SN1 is that SN2 gives:",
    topic: "Substitution: SN1 & SN2",
    explanation:
      "SN2 inverts the stereocentre (single backside attack), whereas SN1 goes through a planar cation attacked from both faces, giving racemisation; the stereochemistry is a key mechanistic probe.",
    choices: [
      { text: "Inversion, while SN1 gives racemisation", isCorrect: true },
      { text: "Racemisation, while SN1 gives inversion" },
      { text: "Retention, while SN1 gives inversion" },
      { text: "The same result as SN1 in all cases" },
    ],
  },
  {
    stem: "When an SN1 reaction generates a carbocation that can rearrange, the product may reflect:",
    topic: "Substitution: SN1 & SN2",
    explanation:
      "Because SN1 forms a free carbocation, a 1,2-hydride or alkyl shift to a more stable cation can occur before the nucleophile attacks, giving a rearranged product not expected from the starting skeleton.",
    choices: [
      { text: "A skeleton rearranged by a hydride/alkyl shift", isCorrect: true },
      { text: "Strict retention of the original skeleton always" },
      { text: "Complete loss of all carbon atoms" },
      { text: "Inversion with no possibility of rearrangement" },
    ],
  },
  {
    stem: "SN2 reactions do not show carbocation rearrangements because they:",
    topic: "Substitution: SN1 & SN2",
    explanation:
      "SN2 is concerted with no carbocation intermediate, so there is no electron-deficient centre to rearrange; the product skeleton always matches the substrate, unlike in SN1.",
    choices: [
      { text: "Have no carbocation intermediate to rearrange", isCorrect: true },
      { text: "Form an especially stable carbocation" },
      { text: "Proceed through a carbanion that cannot shift" },
      { text: "Always rearrange before product forms" },
    ],
  },
  {
    stem: "The reactivity difference that makes tertiary substrates poor at SN2 is primarily:",
    topic: "Substitution: SN1 & SN2",
    explanation:
      "Three alkyl groups around the reacting carbon sterically block the nucleophile's backside approach, raising the SN2 transition-state energy so much that tertiary substrates react by SN1/E1 instead.",
    choices: [
      { text: "Steric hindrance blocking backside attack", isCorrect: true },
      { text: "An unusually weak leaving group present" },
      { text: "The complete absence of β-hydrogens" },
      { text: "An especially strong carbon–halogen bond" },
    ],
  },
  {
    stem: "In deciding substitution versus elimination, a small, strong nucleophile that is a weak base (like azide, N₃⁻) tends to give:",
    topic: "Substitution vs Elimination",
    explanation:
      "A good nucleophile that is a poor base favours substitution over elimination; azide is small and highly nucleophilic but weakly basic, so it gives clean SN2 at accessible carbons.",
    choices: [
      { text: "Substitution (SN2) rather than elimination", isCorrect: true },
      { text: "Elimination (E2) rather than substitution" },
      { text: "Only E1 products" },
      { text: "No reaction at all" },
    ],
  },
  {
    stem: "Increasing the strength of the base in a reaction with a secondary substrate tends to:",
    topic: "Substitution vs Elimination",
    explanation:
      "A stronger base is more effective at removing a β-proton, so raising base strength shifts a borderline secondary substrate toward elimination (E2) at the expense of substitution.",
    choices: [
      { text: "Increase the proportion of elimination", isCorrect: true },
      { text: "Increase the proportion of substitution" },
      { text: "Stop the reaction entirely" },
      { text: "Have no effect on the product ratio" },
    ],
  },
  {
    stem: "Which reactions of alkyl halides are correctly matched to their product? Select all that apply.",
    type: "MULTI",
    topic: "Alkyl Halides",
    explanation:
      "With OH⁻ → alcohol; with RO⁻ → ether (Williamson); with CN⁻ → nitrile; with NH₃ → amine. Reaction with a strong bulky base gives an alkene, not an alcohol.",
    choices: [
      { text: "With hydroxide → an alcohol", isCorrect: true },
      { text: "With an alkoxide → an ether", isCorrect: true },
      { text: "With cyanide → a nitrile", isCorrect: true },
      { text: "With ammonia → an amine", isCorrect: true },
      { text: "With a bulky strong base → an alcohol" },
      { text: "With cyanide → an alkene" },
    ],
  },
  {
    stem: "Which statements about allylic, benzylic, vinyl and aryl halides are correct? Select all that apply.",
    type: "MULTI",
    topic: "Allylic & Benzylic Systems",
    explanation:
      "Allylic/benzylic halides are reactive (resonance-stabilised cation, stabilised SN2 TS); vinyl/aryl halides are unreactive toward SN1/SN2. Vinyl halides do not form especially stable cations.",
    choices: [
      { text: "Allylic halides form resonance-stabilised carbocations", isCorrect: true },
      { text: "Benzylic halides are relatively reactive in SN2", isCorrect: true },
      { text: "Vinyl and aryl halides resist both SN1 and SN2", isCorrect: true },
      { text: "Benzylic cations are stabilised by the aromatic ring", isCorrect: true },
      { text: "Vinyl halides form especially stable carbocations" },
      { text: "Aryl halides undergo rapid SN2 at the ring carbon" },
    ],
  },
  {
    stem: "Which statements correctly distinguish SN1 from SN2? Select all that apply.",
    type: "MULTI",
    topic: "Substitution: SN1 & SN2",
    explanation:
      "SN1 is stepwise via a carbocation, unimolecular, racemising, can rearrange; SN2 is concerted, bimolecular, inverting, no rearrangement. SN2 is not rate-dependent on solvent ionising power in the SN1 sense.",
    choices: [
      { text: "SN1 goes through a carbocation; SN2 is concerted", isCorrect: true },
      { text: "SN1 is first order in substrate only; SN2 is second order", isCorrect: true },
      { text: "SN1 racemises; SN2 inverts the stereocentre", isCorrect: true },
      { text: "SN1 can give rearranged products; SN2 cannot", isCorrect: true },
      { text: "SN2 proceeds through a carbocation intermediate" },
      { text: "SN1 gives clean inversion of configuration" },
    ],
  },
  {
    stem: "Which statements about the stereochemistry and requirements of E2 are correct? Select all that apply.",
    type: "MULTI",
    topic: "Elimination: E1 & E2",
    explanation:
      "E2 needs an anti-periplanar β-H and leaving group, is concerted and bimolecular, and usually gives the Zaitsev alkene (Hofmann with a bulky base). It does not proceed via a carbocation.",
    choices: [
      { text: "It requires anti-periplanar geometry of β-H and leaving group", isCorrect: true },
      { text: "It is concerted and bimolecular", isCorrect: true },
      { text: "It usually gives the more substituted (Zaitsev) alkene", isCorrect: true },
      { text: "A bulky base can shift it to the Hofmann alkene", isCorrect: true },
      { text: "It proceeds through a discrete carbocation" },
      { text: "Its rate is independent of base concentration" },
    ],
  },
  {
    stem: "Aryl and vinyl halides do not readily undergo SN1 or SN2 reactions under ordinary conditions.",
    type: "TRUE_FALSE",
    topic: "Alkyl Halides",
    explanation:
      "Their sp² C–X bonds are strong and shortened by conjugation, backside attack is geometrically blocked, and the corresponding cations are very unstable, so both substitution pathways are strongly disfavoured.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Because SN1 proceeds through a planar carbocation, a single enantiomer of the substrate typically gives a racemic product.",
    type: "TRUE_FALSE",
    topic: "Substitution: SN1 & SN2",
    explanation:
      "The planar carbocation can be attacked equally from either face, so an optically pure substrate yields both enantiomers in roughly equal amounts — extensive racemisation, unlike the inversion of SN2.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The bond that breaks in the rate-determining step of an SN1 reaction is the:",
    topic: "Substitution: SN1 & SN2",
    explanation:
      "The slow step of SN1 is ionisation, in which the carbon–leaving group bond breaks heterolytically to form the carbocation; nucleophile attack occurs only afterward in a fast step.",
    choices: [
      { text: "Carbon–leaving group bond", isCorrect: true },
      { text: "Carbon–nucleophile bond" },
      { text: "A carbon–hydrogen bond" },
      { text: "A carbon–carbon bond" },
    ],
  },
  {
    stem: "In an SN2 reaction, the transition state has the carbon:",
    topic: "Substitution: SN1 & SN2",
    explanation:
      "At the SN2 transition state the central carbon is sp²-like and trigonal-bipyramidal, partially bonded to both the incoming nucleophile and the departing leaving group on opposite sides.",
    choices: [
      { text: "Partially bonded to nucleophile and leaving group", isCorrect: true },
      { text: "Fully bonded to the nucleophile alone" },
      { text: "Fully bonded to the leaving group alone" },
      { text: "Carrying a lone pair and a full negative charge" },
    ],
  },
  {
    stem: "Comparing E1 and E2, the pathway whose rate is independent of base concentration is:",
    topic: "Elimination: E1 & E2",
    explanation:
      "E1 is unimolecular, so its rate depends only on the substrate and not on the base; E2 is bimolecular and first order in base, so increasing base concentration speeds E2 but not E1.",
    choices: [
      { text: "E1", isCorrect: true },
      { text: "E2" },
      { text: "Both equally" },
      { text: "Neither" },
    ],
  },
  {
    stem: "A reaction that converts a secondary alcohol into a secondary alkyl bromide can use:",
    topic: "Alkyl Halides",
    explanation:
      "Reagents such as HBr or PBr₃ replace the alcohol's –OH with –Br; PBr₃ is often preferred for secondary alcohols because it avoids the carbocation rearrangements that HBr's SN1 pathway can cause.",
    choices: [
      { text: "HBr or phosphorus tribromide, PBr₃", isCorrect: true },
      { text: "Aqueous sodium hydroxide solution" },
      { text: "Sodium metal on its own" },
      { text: "Dilute sulfuric acid by itself" },
    ],
  },
  {
    stem: "The observation that an optically active secondary halide gives an optically active, inverted product supports a mechanism that is:",
    topic: "Substitution: SN1 & SN2",
    explanation:
      "Clean inversion with retention of optical activity is the signature of SN2 backside attack; an SN1 pathway through a planar cation would instead racemise the product.",
    choices: [
      { text: "SN2", isCorrect: true },
      { text: "SN1" },
      { text: "E1" },
      { text: "Radical substitution" },
    ],
  },
  {
    stem: "The rate of an SN2 reaction increases when the leaving group is changed from Cl to I because:",
    topic: "Leaving Groups",
    explanation:
      "Iodide is a weaker base and a better leaving group than chloride (the C–I bond is weaker and I⁻ is more stable), so the transition state is reached more easily and the SN2 rate rises.",
    choices: [
      { text: "Iodide is a weaker base and better leaving group", isCorrect: true },
      { text: "Iodide is a stronger base and poorer leaving group" },
      { text: "The C–I bond is much stronger than C–Cl" },
      { text: "Chloride is the best leaving group of the halides" },
    ],
  },
  {
    stem: "An E2 reaction on a cyclohexyl halide requires the leaving group and β-hydrogen to be:",
    topic: "Elimination: E1 & E2",
    explanation:
      "On a cyclohexane ring, anti-periplanar alignment means both the leaving group and the β-hydrogen must be axial (trans-diaxial); if the leaving group is equatorial, the ring must flip before E2 can occur.",
    choices: [
      { text: "Both axial (trans-diaxial) on the ring", isCorrect: true },
      { text: "Both groups equatorial on the ring" },
      { text: "Both on the same carbon atom" },
      { text: "Cis to one another and eclipsed" },
    ],
  },
  {
    stem: "A neopentyl halide, (CH₃)₃CCH₂X, reacts very slowly by SN2 despite being primary because:",
    topic: "Alkyl Halides",
    explanation:
      "The bulky tert-butyl group adjacent to the reacting CH₂ blocks the nucleophile's backside approach, so this primary substrate is sterically hindered and unusually sluggish in SN2.",
    choices: [
      { text: "The adjacent bulky group blocks backside attack", isCorrect: true },
      { text: "It forms an especially stable carbocation" },
      { text: "It has no leaving group at all" },
      { text: "It is actually a tertiary substrate" },
    ],
  },
  {
    stem: "Which combination most cleanly gives a single substitution product with inversion?",
    topic: "Substitution vs Elimination",
    explanation:
      "A primary substrate with a strong, non-bulky nucleophile (e.g. CH₃CH₂Br with CN⁻) undergoes clean SN2, giving one inverted product with minimal elimination.",
    choices: [
      { text: "A primary halide with a small strong nucleophile", isCorrect: true },
      { text: "A tertiary halide with a weak nucleophile" },
      { text: "A tertiary halide with a bulky strong base" },
      { text: "An aryl halide with aqueous hydroxide" },
    ],
  },
  {
    stem: "The main organic product when 2-bromo-2-methylpropane (tert-butyl bromide) is warmed in ethanol is formed by:",
    topic: "Substitution vs Elimination",
    explanation:
      "tert-Butyl bromide is tertiary and ethanol is a weak nucleophile and ionising solvent, so it reacts by SN1 (and competing E1) through the tertiary carbocation, giving substitution and elimination products.",
    choices: [
      { text: "SN1/E1 through a tertiary carbocation", isCorrect: true },
      { text: "SN2 backside attack" },
      { text: "A concerted E2 with ethanol as base" },
      { text: "Radical halogenation" },
    ],
  },
  {
    stem: "The feature of a substrate that permits elimination but not substitution consideration is the presence of a:",
    topic: "Elimination: E1 & E2",
    explanation:
      "Elimination needs a β-hydrogen (on the carbon adjacent to the leaving group) to form the new π bond; a substrate lacking any β-hydrogen cannot eliminate and can only substitute.",
    choices: [
      { text: "β-hydrogen adjacent to the leaving group", isCorrect: true },
      { text: "β-halogen on the same carbon" },
      { text: "Second leaving group on the α-carbon" },
      { text: "Aromatic ring at the reacting carbon" },
    ],
  },
  {
    stem: "Raising temperature in a borderline secondary system shifts the product mixture toward:",
    topic: "Substitution vs Elimination",
    explanation:
      "Elimination is entropically favoured (more molecules formed), so its share grows as temperature rises; heating a borderline secondary substrate therefore yields relatively more alkene (elimination).",
    choices: [
      { text: "More elimination (alkene) product", isCorrect: true },
      { text: "More substitution product" },
      { text: "Only skeletally rearranged products" },
      { text: "No change at all in the product ratio" },
    ],
  },
  {
    stem: "The reason fluoride is a poor leaving group compared with the other halides is that:",
    topic: "Leaving Groups",
    explanation:
      "Fluoride is the strongest (least stable) base of the halides and forms the strongest C–X bond, so it is reluctant to depart with the bonding electrons — making C–F substitutions very slow.",
    choices: [
      { text: "It is a strong base with a strong C–F bond", isCorrect: true },
      { text: "It is the weakest base of the halides" },
      { text: "It forms an especially weak C–F bond" },
      { text: "It is the largest, most polarisable halide" },
    ],
  },
  {
    stem: "The Finkelstein reaction converts an alkyl chloride to an alkyl iodide using NaI in acetone; it is driven by:",
    topic: "Alkyl Halides",
    explanation:
      "NaI is soluble in acetone but NaCl is not, so the precipitation of NaCl removes chloride and pulls the SN2 equilibrium toward the alkyl iodide product (Le Chatelier).",
    choices: [
      { text: "NaCl precipitation, driving the equilibrium", isCorrect: true },
      { text: "The greater intrinsic strength of the C–I bond" },
      { text: "Oxidation of the iodide ion to iodine" },
      { text: "An initiated radical chain mechanism" },
    ],
  },
  {
    stem: "Free-radical halogenation of an alkane replaces a C–H with a C–X and proceeds by:",
    topic: "Radical Halogenation",
    explanation:
      "Radical halogenation (with Cl₂ or Br₂ and light/heat) runs by a chain mechanism — initiation, propagation, termination — substituting a hydrogen with a halogen through radical intermediates.",
    choices: [
      { text: "A radical chain mechanism", isCorrect: true },
      { text: "A concerted ionic mechanism" },
      { text: "Nucleophilic substitution" },
      { text: "Electrophilic addition" },
    ],
  },
  {
    stem: "In radical halogenation, bromination is more selective than chlorination because bromine radicals:",
    topic: "Radical Halogenation",
    explanation:
      "The less reactive bromine radical has a later, more product-like transition state (Hammond), so it discriminates strongly for the weakest C–H bond, favouring the more stable (e.g. tertiary) radical.",
    choices: [
      { text: "Less reactive, selective for the weakest C–H", isCorrect: true },
      { text: "Are more reactive but far less selective overall" },
      { text: "Cannot abstract a hydrogen atom under any conditions" },
      { text: "React only at primary carbon positions" },
    ],
  },
  {
    stem: "The most easily abstracted hydrogen in radical halogenation is the one that gives the:",
    topic: "Radical Halogenation",
    explanation:
      "Abstraction is easiest where it forms the most stable radical, so tertiary C–H bonds react preferentially over secondary and primary, mirroring the tertiary > secondary > primary radical stability order.",
    choices: [
      { text: "The most stable (tertiary) radical", isCorrect: true },
      { text: "The least stable, primary radical" },
      { text: "The most stable carbocation" },
      { text: "The most stable carbanion" },
    ],
  },
  {
    stem: "Which nucleophile order (weakest to strongest in a polar aprotic solvent) is correct for the halides?",
    topic: "Substitution: SN1 & SN2",
    explanation:
      "In polar aprotic solvents, where anions are poorly solvated, nucleophilicity follows basicity: F⁻ > Cl⁻ > Br⁻ > I⁻, the reverse of the protic-solvent order.",
    choices: [
      { text: "I⁻ < Br⁻ < Cl⁻ < F⁻", isCorrect: true },
      { text: "F⁻ < Cl⁻ < Br⁻ < I⁻" },
      { text: "All halides equal" },
      { text: "Cl⁻ < I⁻ < F⁻ < Br⁻" },
    ],
  },
  {
    stem: "The change in solvent from protic to polar aprotic reverses the nucleophilicity order of the halides because protic solvents:",
    topic: "Substitution: SN1 & SN2",
    explanation:
      "Protic solvents hydrogen-bond most strongly to the small, hard fluoride, caging it and lowering its nucleophilicity; removing that solvation (aprotic) lets the intrinsic basicity order F⁻ > Cl⁻ > Br⁻ > I⁻ dominate.",
    choices: [
      { text: "Hydrogen-bond most strongly to the smallest halide", isCorrect: true },
      { text: "Hydrogen-bond most strongly to the largest halide" },
      { text: "Do not solvate anions at all" },
      { text: "React chemically with the halides" },
    ],
  },
  {
    stem: "A carbocation intermediate is flat (trigonal planar); this geometry is the direct cause of:",
    topic: "Substitution: SN1 & SN2",
    explanation:
      "The planar sp² cation exposes both faces to nucleophilic attack, so SN1 at a stereocentre gives roughly equal amounts of both configurations — the racemisation characteristic of SN1.",
    choices: [
      { text: "Racemisation in SN1 reactions", isCorrect: true },
      { text: "Inversion in SN1 reactions" },
      { text: "Retention in SN2 reactions" },
      { text: "The bimolecular rate law of SN1" },
    ],
  },
  {
    stem: "The overall order of alkyl halide reactivity toward SN1 is:",
    topic: "Substitution: SN1 & SN2",
    explanation:
      "SN1 reactivity follows carbocation stability, so 3° > 2° > 1° > methyl; the more stable the cation, the faster the ionisation that controls the SN1 rate.",
    choices: [
      { text: "3° > 2° > 1° > methyl", isCorrect: true },
      { text: "methyl > 1° > 2° > 3°" },
      { text: "1° > 2° > 3° > methyl" },
      { text: "2° > methyl > 3° > 1°" },
    ],
  },
  {
    stem: "The overall order of alkyl halide reactivity toward SN2 is:",
    topic: "Substitution: SN1 & SN2",
    explanation:
      "SN2 reactivity is governed by steric access, so methyl > 1° > 2° > 3°; increasing substitution blocks backside attack, making tertiary substrates essentially unreactive toward SN2.",
    choices: [
      { text: "methyl > 1° > 2° > 3°", isCorrect: true },
      { text: "3° > 2° > 1° > methyl" },
      { text: "2° > 3° > methyl > 1°" },
      { text: "All react equally fast" },
    ],
  },
  {
    stem: "An alkyl halide treated with magnesium in dry ether forms a Grignard reagent, in which the carbon becomes:",
    topic: "Alkyl Halides",
    explanation:
      "Inserting magnesium into the C–X bond gives R–MgX, reversing the carbon's polarity: the carbon is now δ⁻ (nucleophilic/carbanion-like) and reacts with electrophiles such as carbonyl groups.",
    choices: [
      { text: "Nucleophilic, carbanion-like (δ⁻)", isCorrect: true },
      { text: "Electrophilic in character, δ⁺" },
      { text: "A stable, isolable carbocation" },
      { text: "Essentially chemically inert" },
    ],
  },
  {
    stem: "A substrate that gives only elimination and no substitution when treated with a strong bulky base is typically:",
    topic: "Substitution vs Elimination",
    explanation:
      "A hindered (e.g. tertiary or neopentyl-like) substrate with a bulky strong base cannot undergo SN2, and the base is too bulky to substitute, so essentially only E2 elimination is observed.",
    choices: [
      { text: "A hindered substrate with a bulky base", isCorrect: true },
      { text: "A methyl halide with a small nucleophile" },
      { text: "A primary halide with iodide" },
      { text: "An aryl halide with water" },
    ],
  },
  {
    stem: "The kinetic evidence that a reaction is SN2 rather than SN1 is that its rate:",
    topic: "Substitution: SN1 & SN2",
    explanation:
      "SN2 shows second-order kinetics — first order in both substrate and nucleophile — because both appear in the rate-determining step; SN1 is first order in substrate only.",
    choices: [
      { text: "Depends on substrate and nucleophile amounts", isCorrect: true },
      { text: "Depends on the concentration of substrate only" },
      { text: "Is independent of all concentrations" },
      { text: "Depends solely on the reaction temperature" },
    ],
  },
  {
    stem: "Adding a small amount of iodide ion can catalyse the substitution of an alkyl chloride because iodide:",
    topic: "Alkyl Halides",
    explanation:
      "Iodide is both an excellent nucleophile and an excellent leaving group: it rapidly displaces chloride to give the alkyl iodide, which then reacts on with the true nucleophile faster than the chloride would.",
    choices: [
      { text: "Is a strong nucleophile and good leaving group", isCorrect: true },
      { text: "Is a poor nucleophile yet a good leaving group" },
      { text: "Permanently blocks the whole reaction" },
      { text: "Only precipitates the organic substrate" },
    ],
  },
  {
    stem: "In cyclohexyl systems, if the leaving group can only be equatorial, E2 elimination requires the ring to:",
    topic: "Elimination: E1 & E2",
    explanation:
      "E2 needs the leaving group axial (anti-periplanar to an axial β-H); if it sits equatorial, the ring must flip to the chair that makes it axial before elimination can proceed.",
    choices: [
      { text: "Flip to place the leaving group axial", isCorrect: true },
      { text: "Stay fixed with the leaving group equatorial" },
      { text: "Adopt a boat with the group at the flagpole" },
      { text: "Break a ring carbon–carbon bond" },
    ],
  },
  {
    stem: "The product of an SN1 reaction on an allylic halide can sometimes be a mixture of two constitutional isomers because the allylic cation:",
    topic: "Allylic & Benzylic Systems",
    explanation:
      "The allylic carbocation is delocalised over two carbons, so a nucleophile can attack at either end, giving both the direct-substitution product and an 'allylic-shift' product with the double bond moved.",
    choices: [
      { text: "Is delocalised, allowing attack at either end", isCorrect: true },
      { text: "Is localised on just one carbon atom" },
      { text: "Cannot react with any nucleophile" },
      { text: "Rearranges into an aromatic ring system" },
    ],
  },
  {
    stem: "The main purpose of using a polar aprotic solvent in a synthesis is usually to:",
    topic: "Substitution: SN1 & SN2",
    explanation:
      "Polar aprotic solvents dissolve ionic reagents yet leave the anionic nucleophile poorly solvated and highly reactive, which markedly accelerates desired SN2 substitutions.",
    choices: [
      { text: "Boost an anionic nucleophile in SN2", isCorrect: true },
      { text: "Promote ionisation to a carbocation for SN1" },
      { text: "Quench the nucleophile completely in solution" },
      { text: "Prevent any substitution reaction occurring" },
    ],
  },
  {
    stem: "When both SN2 and E2 are possible, using a lower temperature and a less bulky nucleophile tends to favour:",
    topic: "Substitution vs Elimination",
    explanation:
      "Substitution has the lower activation entropy demand and is favoured at lower temperature; a small, strong nucleophile that is not very basic further tips a borderline case toward SN2 over E2.",
    choices: [
      { text: "Substitution (SN2)", isCorrect: true },
      { text: "Elimination (E2)" },
      { text: "Elimination (E1)" },
      { text: "No reaction" },
    ],
  },
  {
    stem: "The rate-determining step of both E1 and SN1 for a given substrate is:",
    topic: "Substitution vs Elimination",
    explanation:
      "E1 and SN1 share the same slow first step — ionisation of the C–LG bond to form the carbocation; what differs is the fast second step (proton loss for E1, nucleophile capture for SN1).",
    choices: [
      { text: "Ionisation to the carbocation", isCorrect: true },
      { text: "Removal of a proton by the base" },
      { text: "Nucleophilic attack at the carbon" },
      { text: "Formation of the new π bond" },
    ],
  },
  {
    stem: "Compared with a chloride, an alkyl tosylate is often used in substitution because tosylate is:",
    topic: "Leaving Groups",
    explanation:
      "The tosylate (p-toluenesulfonate) group is an excellent, very stable leaving group — even better than the halides — so alcohols are frequently converted to tosylates to make substitution or elimination easy.",
    choices: [
      { text: "An excellent, very stable leaving group", isCorrect: true },
      { text: "A poor leaving group and strong base" },
      { text: "A strong nucleophile that blocks reaction" },
      { text: "Identical in ability to fluoride" },
    ],
  },
  {
    stem: "A key structural requirement for any β-elimination is that the leaving group and the removed hydrogen are on:",
    topic: "Elimination: E1 & E2",
    explanation:
      "Elimination forms a π bond between two adjacent carbons, so the leaving group is on the α-carbon and the departing hydrogen on the neighbouring β-carbon; both must be on adjacent carbons.",
    choices: [
      { text: "Adjacent α and β carbons", isCorrect: true },
      { text: "Groups on the same carbon atom" },
      { text: "Carbons that are three bonds apart" },
      { text: "Two entirely separate molecules" },
    ],
  },
  {
    stem: "The competition between substitution and elimination is decided by the combined influence of substrate, reagent, solvent and:",
    topic: "Substitution vs Elimination",
    explanation:
      "Temperature is the fourth key variable: higher temperatures favour the entropically preferred elimination, so the substitution/elimination ratio depends on substrate, nucleophile/base, solvent and temperature together.",
    choices: [
      { text: "Temperature", isCorrect: true },
      { text: "The colour of the reagents" },
      { text: "Atmospheric pressure alone" },
      { text: "The size of the reaction flask" },
    ],
  },
  {
    stem: "A tertiary alkyl halide treated with a strong base (rather than a weak nucleophile) gives mainly:",
    topic: "Substitution vs Elimination",
    explanation:
      "A tertiary substrate cannot do SN2; with a strong base the dominant bimolecular pathway available is E2, so elimination to the alkene is the major outcome.",
    choices: [
      { text: "The E2 elimination (alkene) product", isCorrect: true },
      { text: "The SN2 substitution product" },
      { text: "Only the SN1 substitution product" },
      { text: "No reaction under these conditions" },
    ],
  },
];
