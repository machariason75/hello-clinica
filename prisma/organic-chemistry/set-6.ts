import type { Q } from "../_lib/qbank";

export const ORGANIC_SET_6: Q[] = [
  {
    stem: "The carbon and oxygen of a carbonyl group are best described as:",
    topic: "Carbonyl Structure & Reactivity",
    explanation:
      "The carbonyl carbon is sp² hybridised and planar, with the C, O and the two attached groups roughly 120° apart. A σ bond plus a π bond join C and O, and the C=O is strongly polarised toward oxygen.",
    choices: [
      { text: "sp² hybridised and trigonal planar, joined by a σ and a π bond", isCorrect: true },
      { text: "sp³ hybridised and tetrahedral at the carbonyl carbon" },
      { text: "sp hybridised and linear about the carbonyl carbon" },
      { text: "Joined by two π bonds and no σ bond at all" },
    ],
  },
  {
    stem: "Nucleophilic addition to a carbonyl converts the planar sp² carbon into:",
    topic: "Nucleophilic Addition",
    explanation:
      "Attack of a nucleophile on the carbonyl carbon rehybridises it from sp² (trigonal planar) to sp³ (tetrahedral); the electrons of the π bond move onto oxygen to give an alkoxide.",
    choices: [
      { text: "A tetrahedral sp³ alkoxide carbon", isCorrect: true },
      { text: "A linear sp-hybridised carbon" },
      { text: "An aromatic ring carbon" },
      { text: "A carbocation with no oxygen" },
    ],
  },
  {
    stem: "Aldehydes are generally more reactive than ketones toward nucleophilic addition because they are:",
    topic: "Nucleophilic Addition",
    explanation:
      "A ketone has two electron-donating alkyl groups that stabilise the carbonyl and sterically shield it; an aldehyde has only one, so it is less hindered and more electrophilic — hence more reactive.",
    choices: [
      { text: "Less hindered and less stabilised", isCorrect: true },
      { text: "More hindered and more stabilised" },
      { text: "Fully aromatic and therefore inert" },
      { text: "Bearing a full positive charge" },
    ],
  },
  {
    stem: "Reaction of an aldehyde or ketone with a Grignard reagent (RMgX), after aqueous work-up, gives:",
    topic: "Nucleophilic Addition",
    explanation:
      "The Grignard carbanion adds to the carbonyl carbon and forms a new C–C bond; protonation of the resulting alkoxide gives an alcohol — a primary, secondary or tertiary alcohol depending on the carbonyl.",
    choices: [
      { text: "An alcohol, with a new C–C bond", isCorrect: true },
      { text: "An alkane, with loss of oxygen" },
      { text: "A carboxylic acid product" },
      { text: "A simple dialkyl ether" },
    ],
  },
  {
    stem: "Reaction of formaldehyde (methanal) with a Grignard reagent gives, after work-up:",
    topic: "Nucleophilic Addition",
    explanation:
      "Formaldehyde has two hydrogens on the carbonyl carbon, so Grignard addition and protonation give a primary alcohol (the new carbon becomes –CH₂OH).",
    choices: [
      { text: "A primary alcohol", isCorrect: true },
      { text: "A secondary alcohol" },
      { text: "A tertiary alcohol" },
      { text: "A carboxylic acid" },
    ],
  },
  {
    stem: "Reaction of a ketone with a Grignard reagent gives, after work-up:",
    topic: "Nucleophilic Addition",
    explanation:
      "A ketone's carbonyl carbon already bears two carbon groups; adding a third from the Grignard and then protonating the alkoxide gives a tertiary alcohol.",
    choices: [
      { text: "A tertiary alcohol", isCorrect: true },
      { text: "A primary alcohol" },
      { text: "A secondary alcohol" },
      { text: "An aldehyde" },
    ],
  },
  {
    stem: "Sodium borohydride (NaBH₄) and lithium aluminium hydride (LiAlH₄) reduce aldehydes and ketones to alcohols by delivering:",
    topic: "Carbonyl Reduction",
    explanation:
      "These reagents act as hydride (H⁻) donors: hydride adds to the carbonyl carbon and, after protonation, gives the alcohol. NaBH₄ is mild (aldehydes/ketones); LiAlH₄ is stronger (also reduces acids, esters).",
    choices: [
      { text: "A hydride ion to the carbonyl carbon", isCorrect: true },
      { text: "A proton to the carbonyl oxygen only" },
      { text: "An electron pair to make a radical" },
      { text: "A carbanion that forms a C–C bond" },
    ],
  },
  {
    stem: "Reduction of a ketone gives a secondary alcohol; reduction of an aldehyde gives:",
    topic: "Carbonyl Reduction",
    explanation:
      "Hydride reduction adds H to the carbonyl carbon: an aldehyde (RCHO) becomes a primary alcohol (RCH₂OH), while a ketone becomes a secondary alcohol.",
    choices: [
      { text: "A primary alcohol", isCorrect: true },
      { text: "A tertiary alcohol" },
      { text: "A carboxylic acid" },
      { text: "Another ketone" },
    ],
  },
  {
    stem: "Addition of hydrogen cyanide (HCN) to an aldehyde or ketone gives a:",
    topic: "Nucleophilic Addition",
    explanation:
      "Cyanide adds to the carbonyl carbon and, after protonation of the alkoxide, gives a cyanohydrin — a molecule bearing both –OH and –C≡N on the same carbon; it also forms a new C–C bond.",
    choices: [
      { text: "Cyanohydrin (–OH and –CN on one carbon)", isCorrect: true },
      { text: "Carboxylic acid" },
      { text: "Simple alcohol with no nitrogen" },
      { text: "An amide" },
    ],
  },
  {
    stem: "The addition of water to a carbonyl gives a gem-diol (hydrate); this equilibrium lies far toward the hydrate for:",
    topic: "Nucleophilic Addition",
    explanation:
      "Electron-poor, unhindered carbonyls hydrate most: formaldehyde is almost fully hydrated, and electron-withdrawing groups (as in chloral or ninhydrin) also favour the gem-diol; ordinary ketones hydrate very little.",
    choices: [
      { text: "Formaldehyde and electron-poor C=O", isCorrect: true },
      { text: "Bulky, electron-rich ketones" },
      { text: "Only aromatic aryl ketones" },
      { text: "Simple carboxylic acids" },
    ],
  },
  {
    stem: "Which statements about nucleophilic addition to carbonyls are correct? Select all that apply.",
    type: "MULTI",
    topic: "Nucleophilic Addition",
    explanation:
      "The carbonyl carbon is δ⁺ and attacked by nucleophiles; addition gives a tetrahedral alkoxide; aldehydes are more reactive than ketones; Grignards and hydrides add to give alcohols. The carbonyl carbon is not nucleophilic.",
    choices: [
      { text: "The carbonyl carbon is electrophilic (δ⁺)", isCorrect: true },
      { text: "Addition converts sp² carbon to a tetrahedral sp³ centre", isCorrect: true },
      { text: "Aldehydes are more reactive than ketones", isCorrect: true },
      { text: "Grignard and hydride reagents give alcohols", isCorrect: true },
      { text: "The carbonyl carbon acts as a nucleophile" },
      { text: "Ketones are more reactive than aldehydes" },
    ],
  },
  {
    stem: "Which reagents reduce a ketone or add carbon to a carbonyl to give an alcohol? Select all that apply.",
    type: "MULTI",
    topic: "Nucleophilic Addition",
    explanation:
      "NaBH₄ and LiAlH₄ reduce carbonyls to alcohols (hydride); Grignard and organolithium reagents add a carbon nucleophile to give alcohols. Aqueous acid alone and PCC (an oxidant) do not.",
    choices: [
      { text: "Sodium borohydride, NaBH₄", isCorrect: true },
      { text: "Lithium aluminium hydride, LiAlH₄", isCorrect: true },
      { text: "A Grignard reagent, RMgX", isCorrect: true },
      { text: "An organolithium reagent, RLi", isCorrect: true },
      { text: "Dilute aqueous acid alone" },
      { text: "PCC (pyridinium chlorochromate)" },
    ],
  },
  {
    stem: "Aldehydes undergo nucleophilic addition more readily than ketones because of both steric and electronic factors.",
    type: "TRUE_FALSE",
    topic: "Nucleophilic Addition",
    explanation:
      "A ketone's two alkyl groups both crowd the carbonyl carbon and donate electron density that stabilises it; an aldehyde has only one such group, so it is less hindered and more electrophilic, reacting faster.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Reaction of an aldehyde with one equivalent of an alcohol under acid catalysis gives a:",
    topic: "Acetals & Hemiacetals",
    explanation:
      "The alcohol adds once to the protonated carbonyl to give a hemiacetal, which bears both an –OH and an –OR on the same carbon; a second alcohol then converts it to an acetal.",
    choices: [
      { text: "A hemiacetal (–OH and –OR)", isCorrect: true },
      { text: "An acetal directly" },
      { text: "A carboxylic acid" },
      { text: "A simple ether" },
    ],
  },
  {
    stem: "Reaction of an aldehyde with two equivalents of alcohol under anhydrous acid gives an acetal, which has:",
    topic: "Acetals & Hemiacetals",
    explanation:
      "Acid-catalysed reaction with excess alcohol replaces the carbonyl oxygen with two –OR groups, giving an acetal (R–CH(OR')₂); water is lost in the process, so anhydrous conditions drive it forward.",
    choices: [
      { text: "Two –OR groups (an acetal)", isCorrect: true },
      { text: "One –OH and one –OR group" },
      { text: "A carbon–nitrogen double bond" },
      { text: "A carboxyl (–COOH) group" },
    ],
  },
  {
    stem: "Acetal formation is reversible; an acetal can be hydrolysed back to the carbonyl compound by:",
    topic: "Acetals & Hemiacetals",
    explanation:
      "Because each step is an equilibrium, aqueous acid hydrolyses an acetal back to the aldehyde or ketone plus two alcohols; excess water drives the reaction toward the carbonyl.",
    choices: [
      { text: "Aqueous acid (excess water)", isCorrect: true },
      { text: "Anhydrous acid with excess alcohol" },
      { text: "Strong aqueous base" },
      { text: "A hydride reducing agent" },
    ],
  },
  {
    stem: "Acetals are widely used in synthesis as:",
    topic: "Acetals & Hemiacetals",
    explanation:
      "An acetal is stable to base and to nucleophiles, so a carbonyl can be temporarily converted to an acetal to protect it during a reaction elsewhere, then removed by aqueous acid — a protecting group.",
    choices: [
      { text: "Protecting groups for aldehydes and ketones", isCorrect: true },
      { text: "Strong oxidising agents" },
      { text: "Reactive electrophiles toward Grignards" },
      { text: "Permanent, non-removable groups" },
    ],
  },
  {
    stem: "Reaction of an aldehyde or ketone with a primary amine (RNH₂) gives, after loss of water, a:",
    topic: "Imines & Enamines",
    explanation:
      "A primary amine adds to the carbonyl and, with loss of water, forms an imine (Schiff base) containing a C=N double bond; the reaction is fastest around mildly acidic pH.",
    choices: [
      { text: "Imine (C=N double bond)", isCorrect: true },
      { text: "Enamine" },
      { text: "Acetal" },
      { text: "Carboxylic acid" },
    ],
  },
  {
    stem: "Reaction of an aldehyde or ketone with a secondary amine (R₂NH) gives, after loss of water, a:",
    topic: "Imines & Enamines",
    explanation:
      "A secondary amine cannot form a stable C=N (nitrogen has no remaining H to lose), so after dehydration the product is an enamine — a nitrogen attached to a C=C double bond.",
    choices: [
      { text: "Enamine (nitrogen on a C=C)", isCorrect: true },
      { text: "Imine with a C=N bond" },
      { text: "Hemiacetal" },
      { text: "Nitrile" },
    ],
  },
  {
    stem: "Imine (and enamine) formation is characteristically fastest at:",
    topic: "Imines & Enamines",
    explanation:
      "The reaction needs acid to protonate the carbinolamine –OH for loss of water, but too much acid protonates the amine and removes the nucleophile; a mildly acidic pH (~4–5) balances these, giving the fastest rate.",
    choices: [
      { text: "Mildly acidic pH (about 4–5)", isCorrect: true },
      { text: "Strongly acidic pH (below 1)" },
      { text: "Strongly basic pH (above 12)" },
      { text: "Only in the complete absence of acid" },
    ],
  },
  {
    stem: "In reductive amination, an aldehyde or ketone is converted to an amine by forming an imine (or iminium ion) and then:",
    topic: "Reductive Amination",
    explanation:
      "The carbonyl condenses with an amine to give an imine/iminium ion, which is reduced in situ (e.g. by NaBH₃CN) to the amine; this is a general route to substituted amines.",
    choices: [
      { text: "Reducing it (e.g. with NaBH₃CN)", isCorrect: true },
      { text: "Oxidising it with KMnO₄" },
      { text: "Hydrolysing it with aqueous acid" },
      { text: "Adding a Grignard reagent" },
    ],
  },
  {
    stem: "The Wolff–Kishner reduction converts a ketone or aldehyde carbonyl (C=O) all the way to a:",
    topic: "Carbonyl Reduction",
    explanation:
      "Wolff–Kishner (hydrazine, then strong base and heat) reduces the carbonyl to a methylene (CH₂) group; the Clemmensen reduction (Zn(Hg)/HCl) achieves the same under acidic conditions.",
    choices: [
      { text: "Methylene group (CH₂)", isCorrect: true },
      { text: "Primary alcohol" },
      { text: "Carboxylic acid" },
      { text: "Alkene" },
    ],
  },
  {
    stem: "The Wittig reaction converts an aldehyde or ketone into an alkene using a:",
    topic: "Wittig Reaction",
    explanation:
      "A phosphorus ylide (R₃P=CR'₂) adds to the carbonyl and, via a four-membered oxaphosphetane, expels triphenylphosphine oxide to give an alkene with a C=C where the C=O had been.",
    choices: [
      { text: "Phosphorus ylide", isCorrect: true },
      { text: "Grignard reagent" },
      { text: "Hydride reagent" },
      { text: "Peroxyacid" },
    ],
  },
  {
    stem: "The driving force for the Wittig reaction is the formation of the very strong:",
    topic: "Wittig Reaction",
    explanation:
      "The reaction is pushed forward by forming the exceptionally strong phosphorus–oxygen double bond in triphenylphosphine oxide, which more than compensates for the bonds broken.",
    choices: [
      { text: "Phosphorus–oxygen bond in Ph₃P=O", isCorrect: true },
      { text: "Carbon–hydrogen bond in methane" },
      { text: "Nitrogen–nitrogen bond in N₂" },
      { text: "Oxygen–oxygen bond in a peroxide" },
    ],
  },
  {
    stem: "Which carbonyl-plus-nucleophile pairings give the stated product? Select all that apply.",
    type: "MULTI",
    topic: "Imines & Enamines",
    explanation:
      "A primary amine gives an imine; a secondary amine gives an enamine; one alcohol gives a hemiacetal and two give an acetal. A primary amine does not give an enamine.",
    choices: [
      { text: "Primary amine → imine (C=N)", isCorrect: true },
      { text: "Secondary amine → enamine", isCorrect: true },
      { text: "One equivalent of alcohol → hemiacetal", isCorrect: true },
      { text: "Two equivalents of alcohol → acetal", isCorrect: true },
      { text: "Primary amine → enamine" },
      { text: "Alcohol → imine" },
    ],
  },
  {
    stem: "An acetal is stable to base and can therefore protect a carbonyl group, later being removed by aqueous acid.",
    type: "TRUE_FALSE",
    topic: "Acetals & Hemiacetals",
    explanation:
      "Acetals resist bases and nucleophiles, so a carbonyl masked as an acetal survives basic reaction conditions elsewhere; because acetal formation is reversible, aqueous acid regenerates the original carbonyl afterwards.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The α-hydrogen of an aldehyde or ketone (on the carbon next to C=O) is unusually acidic because:",
    topic: "Enols & Enolates",
    explanation:
      "Removing an α-hydrogen gives an enolate whose negative charge is delocalised onto the electronegative carbonyl oxygen. That resonance stabilisation is why a typical α C–H has pKa ≈ 20, far more acidic than an ordinary alkane C–H (pKa ≈ 50).",
    choices: [
      { text: "The resulting enolate is resonance-stabilised onto oxygen", isCorrect: true },
      { text: "The C–H bond is unusually weak and non-polar in nature" },
      { text: "The carbon becomes aromatic once deprotonated fully" },
      { text: "Hyperconjugation from the carbonyl removes the electrons" },
    ],
  },
  {
    stem: "Keto–enol tautomers are best described as:",
    topic: "Keto–Enol Tautomerism",
    explanation:
      "Tautomers are constitutional isomers that interconvert by moving a proton (here, an α-H to oxygen) and shifting a double bond. The keto and enol forms are separate isomers in rapid equilibrium, not resonance structures of one species.",
    choices: [
      { text: "Isomers interconverting by proton and π-bond shift", isCorrect: true },
      { text: "Resonance structures of a single delocalised molecule" },
      { text: "Mirror-image stereoisomers of the same compound" },
      { text: "Two names for one single rigid structure" },
    ],
  },
  {
    stem: "For a simple ketone such as acetone (propanone), the keto–enol equilibrium at equilibrium lies:",
    topic: "Keto–Enol Tautomerism",
    explanation:
      "The keto form is far more stable because the C=O bond is much stronger than the C=C plus O–H of the enol, so for ordinary ketones the enol content is tiny (well under 1%).",
    choices: [
      { text: "Overwhelmingly toward the keto form", isCorrect: true },
      { text: "Overwhelmingly toward the enol form always" },
      { text: "Almost exactly balanced between the two" },
      { text: "Entirely toward a fully aromatic tautomer" },
    ],
  },
  {
    stem: "A carbonyl compound in which the enol content is exceptionally high (often the major tautomer) is:",
    topic: "Keto–Enol Tautomerism",
    explanation:
      "In a 1,3-dicarbonyl such as pentane-2,4-dione (acetylacetone), the enol is stabilised by conjugation and an intramolecular hydrogen bond to the second carbonyl, so the enol can dominate the equilibrium.",
    choices: [
      { text: "A 1,3-dicarbonyl such as pentane-2,4-dione", isCorrect: true },
      { text: "A simple straight-chain aldehyde like propanal" },
      { text: "An unstrained dialkyl ketone such as 3-pentanone" },
      { text: "A fully saturated ester with no α-hydrogens" },
    ],
  },
  {
    stem: "An enolate ion is an ambident nucleophile, meaning it can react at:",
    topic: "Enols & Enolates",
    explanation:
      "The enolate carries negative charge shared between the α-carbon and oxygen, so it can be alkylated or protonated at either site. Carbon-attack (C-alkylation) is the synthetically useful pathway that forms new C–C bonds.",
    choices: [
      { text: "Either the α-carbon or the oxygen atom", isCorrect: true },
      { text: "Only the carbonyl carbon, never elsewhere" },
      { text: "Only a distant carbon two positions away" },
      { text: "Neither carbon nor oxygen, only hydrogen" },
    ],
  },
  {
    stem: "A common strong, bulky, non-nucleophilic base used to form an enolate essentially completely (kinetic enolate) is:",
    topic: "Enols & Enolates",
    explanation:
      "Lithium diisopropylamide (LDA) is strong enough to deprotonate an α-C–H quantitatively yet too hindered to add to the carbonyl, so it forms the enolate cleanly at low temperature — favouring the less-substituted kinetic enolate.",
    choices: [
      { text: "Lithium diisopropylamide (LDA)", isCorrect: true },
      { text: "Aqueous sodium hydroxide at reflux" },
      { text: "A dilute solution of sodium chloride" },
      { text: "Water containing a trace of acid" },
    ],
  },
  {
    stem: "The less-substituted enolate formed rapidly with a bulky base at low temperature is called the:",
    topic: "Enols & Enolates",
    explanation:
      "The kinetic enolate forms fastest because the less-hindered α-H is removed more easily by a bulky base at low temperature; the more-substituted, more-stable enolate is the thermodynamic one, favoured under equilibrating conditions.",
    choices: [
      { text: "Kinetic enolate", isCorrect: true },
      { text: "Thermodynamic enolate exclusively" },
      { text: "Aromatic enolate ring system" },
      { text: "Racemic enolate mixture only" },
    ],
  },
  {
    stem: "Under acidic conditions, aldehydes and ketones with α-hydrogens undergo α-halogenation. The reactive species that attacks the halogen is the:",
    topic: "α-Halogenation",
    explanation:
      "In acid, a small equilibrium amount of the enol forms; its nucleophilic α-carbon (electron-rich C=C) attacks the halogen (e.g. Br₂). Acid-catalysed halogenation typically stops cleanly after one substitution.",
    choices: [
      { text: "Enol tautomer of the carbonyl compound", isCorrect: true },
      { text: "Protonated carbonyl oxygen directly" },
      { text: "Fully ionised acyl cation intermediate" },
      { text: "Unreactive keto form itself" },
    ],
  },
  {
    stem: "Acid-catalysed α-halogenation of a ketone typically introduces:",
    topic: "α-Halogenation",
    explanation:
      "Under acid, the first halogen added makes the remaining α-hydrogens slightly less basic/enolisable, so the reaction usually installs just one halogen at the α-position, unlike the base-promoted case.",
    choices: [
      { text: "A single halogen at the α-carbon", isCorrect: true },
      { text: "Three halogens on the same α-carbon at once" },
      { text: "A halogen on the carbonyl oxygen atom" },
      { text: "A halogen at the β-carbon instead" },
    ],
  },
  {
    stem: "Under basic conditions, halogenation of a methyl ketone (CH₃CO–) does not stop cleanly because:",
    topic: "α-Halogenation",
    explanation:
      "Each halogen added to the α-carbon is electron-withdrawing, making the remaining α-hydrogens more acidic and enolisation faster. So base-promoted halogenation of a methyl ketone proceeds all the way to the trihalo compound.",
    choices: [
      { text: "Each added halogen makes the next α-H more acidic", isCorrect: true },
      { text: "The base is consumed before any reaction starts" },
      { text: "The ketone becomes aromatic after one halogen" },
      { text: "Halogen cannot add to a methyl group at all" },
    ],
  },
  {
    stem: "In the haloform reaction, a methyl ketone treated with excess halogen and base gives a carboxylate plus:",
    topic: "Haloform Reaction",
    explanation:
      "After the methyl group is fully tri-halogenated, hydroxide cleaves the C–C bond, expelling the stabilised ⁻CX₃ ion which picks up a proton to give haloform (CHX₃, e.g. CHI₃, iodoform). A carboxylate salt is the other product.",
    choices: [
      { text: "A haloform molecule, CHX₃", isCorrect: true },
      { text: "A stable primary alcohol product" },
      { text: "An unreactive tertiary amine" },
      { text: "Carbon dioxide and water only" },
    ],
  },
  {
    stem: "The classic positive iodoform test (a pale-yellow precipitate of CHI₃) indicates the presence of:",
    topic: "Haloform Reaction",
    explanation:
      "The iodoform test is positive for methyl ketones (CH₃CO–R) and for compounds oxidised to them in situ, including ethanol and secondary alcohols of the type CH₃CH(OH)–R (which give methyl ketones on oxidation by the reagent).",
    choices: [
      { text: "A methyl ketone or a CH₃CH(OH)– alcohol", isCorrect: true },
      { text: "Any carboxylic acid without exception" },
      { text: "Only fully aromatic ketones such as benzophenone" },
      { text: "Any tertiary alcohol lacking α-hydrogens" },
    ],
  },
  {
    stem: "Which of these would give a positive iodoform test?",
    topic: "Haloform Reaction",
    explanation:
      "Acetophenone (PhCOCH₃) is a methyl ketone, so it gives iodoform. Benzaldehyde (no methyl ketone, no CH₃CH(OH)) and benzophenone (diaryl ketone) are negative.",
    choices: [
      { text: "Acetophenone, C₆H₅COCH₃", isCorrect: true },
      { text: "Benzaldehyde, C₆H₅CHO" },
      { text: "Benzophenone, (C₆H₅)₂CO" },
      { text: "Diethyl ether, (C₂H₅)₂O" },
    ],
  },
  {
    stem: "Which statements about enols and enolates are correct? Select all that apply.",
    type: "MULTI",
    topic: "Enols & Enolates",
    explanation:
      "Enolates are resonance-stabilised with charge on C and O; a typical α-C–H has pKa ≈ 20; 1,3-dicarbonyls have much more acidic α-H and higher enol content; the keto form of a simple ketone dominates at equilibrium.",
    choices: [
      { text: "An enolate has negative charge shared over carbon and oxygen", isCorrect: true },
      { text: "A typical ketone α-hydrogen has pKa around 20", isCorrect: true },
      { text: "The α-hydrogen of a 1,3-dicarbonyl is more acidic than usual", isCorrect: true },
      { text: "A simple ketone exists mostly as its keto tautomer", isCorrect: true },
      { text: "Enol and keto forms are resonance structures, not isomers" },
      { text: "Simple ketones exist almost entirely as the enol form" },
    ],
  },
  {
    stem: "Which are features of the base-promoted haloform reaction? Select all that apply.",
    type: "MULTI",
    topic: "Haloform Reaction",
    explanation:
      "It needs a methyl ketone (or precursor), uses excess halogen and base, tri-halogenates the methyl group, then cleaves the C–C bond to give a carboxylate plus CHX₃; each added halogen accelerates the next substitution.",
    choices: [
      { text: "It requires a methyl ketone or a compound oxidised to one", isCorrect: true },
      { text: "The methyl group is fully tri-halogenated", isCorrect: true },
      { text: "C–C cleavage gives a carboxylate and CHX₃", isCorrect: true },
      { text: "Each halogen added speeds the next substitution", isCorrect: true },
      { text: "It stops cleanly after adding one halogen atom" },
      { text: "It converts the ketone into a tertiary amine" },
    ],
  },
  {
    stem: "Under basic conditions, halogenation at the α-carbon of a methyl ketone is difficult to stop after a single substitution.",
    type: "TRUE_FALSE",
    topic: "α-Halogenation",
    explanation:
      "Each electron-withdrawing halogen makes the remaining α-hydrogens more acidic, so base-promoted halogenation accelerates and proceeds to the trihalo stage rather than stopping at one.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "In the aldol addition, the nucleophile that attacks a second carbonyl molecule is:",
    topic: "Aldol Reaction",
    explanation:
      "Base removes an α-hydrogen to give an enolate; that enolate carbon adds to the electrophilic carbonyl carbon of another aldehyde or ketone. The immediate product is a β-hydroxy carbonyl compound (an 'aldol').",
    choices: [
      { text: "An enolate generated from an α-carbon", isCorrect: true },
      { text: "A protonated carbonyl oxygen atom" },
      { text: "A free carbocation on the α-carbon" },
      { text: "A halide ion from the solvent shell" },
    ],
  },
  {
    stem: "The direct product of an aldol addition is a:",
    topic: "Aldol Reaction",
    explanation:
      "Enolate addition to a carbonyl, followed by protonation of the resulting alkoxide, gives a β-hydroxy aldehyde or β-hydroxy ketone — the aldol. Heating then dehydrates it to the condensation product.",
    choices: [
      { text: "β-hydroxy aldehyde or ketone", isCorrect: true },
      { text: "Fully conjugated aromatic ring" },
      { text: "Symmetrical acetal product" },
      { text: "Terminal carboxylic acid group" },
    ],
  },
  {
    stem: "On warming or with acid/base, the aldol product loses water to give:",
    topic: "Aldol Condensation",
    explanation:
      "Dehydration of the β-hydroxy carbonyl removes the OH and an α-H to form a C=C conjugated with the carbonyl. The overall aldol-plus-dehydration sequence is the aldol condensation, giving an α,β-unsaturated carbonyl.",
    choices: [
      { text: "An α,β-unsaturated carbonyl compound", isCorrect: true },
      { text: "A saturated gem-diol product" },
      { text: "A simple dialkyl ether linkage" },
      { text: "An unconjugated terminal alkyne" },
    ],
  },
  {
    stem: "The driving force that makes aldol condensation (dehydration) favourable is:",
    topic: "Aldol Condensation",
    explanation:
      "Loss of water gives an extended conjugated system: the new C=C is conjugated with the C=O. That conjugation stabilises the product and, with loss of water, drives the equilibrium toward the enone.",
    choices: [
      { text: "Formation of a conjugated C=C–C=O system", isCorrect: true },
      { text: "Creation of a new stereocentre by chance" },
      { text: "Generation of an aromatic six-membered ring" },
      { text: "Release of molecular hydrogen gas" },
    ],
  },
  {
    stem: "A crossed (mixed) aldol reaction between two different carbonyl compounds is most synthetically useful when:",
    topic: "Aldol Reaction",
    explanation:
      "A mixed aldol gives up to four products unless controlled. It works cleanly when one partner has no α-hydrogen (cannot enolise, e.g. benzaldehyde) and simply acts as the electrophile for the other partner's enolate.",
    choices: [
      { text: "One partner has no α-H and is only the electrophile", isCorrect: true },
      { text: "Both partners enolise equally at the same rate" },
      { text: "Neither partner has any α-hydrogen at all" },
      { text: "Both partners are the same identical compound" },
    ],
  },
  {
    stem: "An intramolecular aldol condensation is especially favourable when it forms:",
    topic: "Aldol Condensation",
    explanation:
      "When a single molecule contains two carbonyls suitably spaced, an intramolecular aldol closes a ring; five- and six-membered rings form fastest because of favourable ring strain and entropy.",
    choices: [
      { text: "A five- or six-membered ring", isCorrect: true },
      { text: "A highly strained three-membered ring" },
      { text: "An open chain with no ring at all" },
      { text: "A twelve-membered macrocycle preferentially" },
    ],
  },
  {
    stem: "The Claisen condensation combines two ester molecules to give, after work-up, a:",
    topic: "Claisen Condensation",
    explanation:
      "An ester enolate attacks the carbonyl of a second ester; the tetrahedral intermediate expels alkoxide (nucleophilic acyl substitution), giving a β-keto ester. This differs from the aldol because a leaving group departs.",
    choices: [
      { text: "β-keto ester", isCorrect: true },
      { text: "β-hydroxy aldehyde" },
      { text: "Symmetrical acetal" },
      { text: "Simple primary amine" },
    ],
  },
  {
    stem: "The key mechanistic difference between the Claisen condensation and the aldol reaction is that the Claisen involves:",
    topic: "Claisen Condensation",
    explanation:
      "In the aldol, the enolate adds to a carbonyl that has no leaving group, so addition is retained. In the Claisen, the ester carbonyl bears an –OR leaving group, so the tetrahedral intermediate collapses by expelling alkoxide — nucleophilic acyl substitution.",
    choices: [
      { text: "Loss of an alkoxide leaving group from a tetrahedral intermediate", isCorrect: true },
      { text: "Direct attack that never forms a tetrahedral intermediate" },
      { text: "A carbocation rearrangement at the α-carbon" },
      { text: "Complete loss of the entire carbonyl group" },
    ],
  },
  {
    stem: "At least one full equivalent of base is needed to drive the Claisen condensation to completion because:",
    topic: "Claisen Condensation",
    explanation:
      "The β-keto ester product has an especially acidic α-hydrogen (flanked by two carbonyls, pKa ≈ 11). Deprotonating it to the stabilised enolate under the reaction conditions removes it from equilibrium and pulls the reaction forward.",
    choices: [
      { text: "The β-keto ester is deprotonated to a stable enolate", isCorrect: true },
      { text: "The base is destroyed by the alcohol solvent first" },
      { text: "Two esters cannot otherwise be brought together" },
      { text: "The starting ester has no α-hydrogen to remove" },
    ],
  },
  {
    stem: "In a conjugate (Michael, 1,4-) addition, a nucleophile adds to an α,β-unsaturated carbonyl at the:",
    topic: "Conjugate Addition",
    explanation:
      "An α,β-unsaturated carbonyl is electrophilic at both the carbonyl carbon (1,2) and the β-carbon (1,4). Soft, stabilised nucleophiles favour conjugate (1,4-) addition at the β-carbon, ultimately giving the saturated carbonyl after tautomerisation.",
    choices: [
      { text: "β-carbon of the C=C (1,4-addition)", isCorrect: true },
      { text: "Carbonyl oxygen directly (O-addition)" },
      { text: "α-carbon adjacent to the carbonyl" },
      { text: "Terminal carbon farthest from C=O only" },
    ],
  },
  {
    stem: "Nucleophiles that tend to give 1,4- (conjugate) rather than 1,2-addition to an enone are typically:",
    topic: "Conjugate Addition",
    explanation:
      "Softer, more stabilised (weakly basic) nucleophiles — e.g. cuprates, enolates, amines, thiolates, cyanide — favour reversible attack that funnels to the thermodynamic 1,4-product. Hard, strongly basic nucleophiles (RLi, RMgX) tend to add 1,2 at the carbonyl.",
    choices: [
      { text: "Soft, stabilised nucleophiles (cuprates, enolates)", isCorrect: true },
      { text: "Hard organolithium reagents exclusively" },
      { text: "Only strong, non-nucleophilic hindered bases" },
      { text: "Nucleophiles that cannot attack carbon at all" },
    ],
  },
  {
    stem: "An organocuprate (Gilman reagent, R₂CuLi) added to an α,β-unsaturated ketone gives predominantly:",
    topic: "Conjugate Addition",
    explanation:
      "Gilman reagents (R₂CuLi) are soft carbon nucleophiles that add 1,4 to enones, installing the R group at the β-carbon. This complements Grignard/organolithium reagents, which usually add 1,2 to the carbonyl.",
    choices: [
      { text: "The 1,4- (conjugate) addition product", isCorrect: true },
      { text: "The 1,2-addition alcohol product only" },
      { text: "An acetal at the carbonyl carbon" },
      { text: "A fully reduced hydrocarbon product" },
    ],
  },
  {
    stem: "A Michael addition specifically refers to conjugate addition of a nucleophile that is:",
    topic: "Conjugate Addition",
    explanation:
      "In the classic Michael reaction, the nucleophile is a stabilised enolate (the 'Michael donor', e.g. from a 1,3-dicarbonyl) adding to an α,β-unsaturated carbonyl (the 'Michael acceptor'), forming a new C–C bond at the β-carbon.",
    choices: [
      { text: "A stabilised enolate (Michael donor)", isCorrect: true },
      { text: "A simple halide ion from salt" },
      { text: "A noble-gas atom acting as base" },
      { text: "An unstabilised primary carbanion only" },
    ],
  },
  {
    stem: "Which statements correctly contrast the aldol and Claisen reactions? Select all that apply.",
    type: "MULTI",
    topic: "Aldol Reaction",
    explanation:
      "Aldol uses aldehyde/ketone enolates and gives a β-hydroxy carbonyl (retention, addition); Claisen uses ester enolates and gives a β-keto ester by expelling alkoxide (nucleophilic acyl substitution). Both begin by forming an enolate.",
    choices: [
      { text: "The aldol gives a β-hydroxy carbonyl product", isCorrect: true },
      { text: "The Claisen gives a β-keto ester product", isCorrect: true },
      { text: "Both reactions begin by forming an enolate", isCorrect: true },
      { text: "The Claisen expels an alkoxide leaving group", isCorrect: true },
      { text: "The aldol expels an alkoxide leaving group too" },
      { text: "Neither reaction involves an enolate nucleophile" },
    ],
  },
  {
    stem: "Which are characteristic of conjugate (1,4-) addition to an enone? Select all that apply.",
    type: "MULTI",
    topic: "Conjugate Addition",
    explanation:
      "The nucleophile adds at the β-carbon; soft/stabilised nucleophiles (cuprates, enolates) favour it; the initial enol/enolate tautomerises to the saturated carbonyl; hard organolithiums instead favour 1,2-addition.",
    choices: [
      { text: "The nucleophile adds to the β-carbon", isCorrect: true },
      { text: "Soft nucleophiles such as cuprates favour this mode", isCorrect: true },
      { text: "The product tautomerises to a saturated carbonyl", isCorrect: true },
      { text: "Hard RLi reagents strongly favour 1,4 over 1,2" },
      { text: "Addition occurs directly onto the oxygen atom" },
    ],
  },
  {
    stem: "In the aldol condensation, dehydration of the initial β-hydroxy carbonyl is favoured because it creates conjugation between the new C=C and the carbonyl.",
    type: "TRUE_FALSE",
    topic: "Aldol Condensation",
    explanation:
      "Loss of water gives an α,β-unsaturated carbonyl in which the C=C is conjugated with the C=O; that extended conjugation stabilises the product and drives the dehydration.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Aldehydes are readily oxidised to carboxylic acids, whereas ketones resist mild oxidation because:",
    topic: "Aldehyde Oxidation",
    explanation:
      "Oxidation of a carbonyl requires an H on the carbonyl carbon to be removed. An aldehyde has that C–H; a ketone has two carbon substituents and no such hydrogen, so it is not oxidised under mild conditions.",
    choices: [
      { text: "An aldehyde has a C–H on the carbonyl carbon; a ketone does not", isCorrect: true },
      { text: "A ketone carbonyl carbon carries an extra hydrogen atom" },
      { text: "Ketones are already at the carboxylic-acid oxidation level" },
      { text: "Aldehydes lack any oxygen for oxidation to occur" },
    ],
  },
  {
    stem: "Tollens' reagent (Ag(NH₃)₂⁺) gives a positive test for an aldehyde by depositing:",
    topic: "Aldehyde Oxidation",
    explanation:
      "Tollens' reagent oxidises an aldehyde to a carboxylate while the silver(I) complex is reduced to metallic silver, which plates the glass as a bright 'silver mirror'. Ketones give no reaction.",
    choices: [
      { text: "A metallic silver mirror on the glass", isCorrect: true },
      { text: "A deep-purple permanganate colour" },
      { text: "A green chromium(III) precipitate" },
      { text: "A pale-blue copper(II) solution" },
    ],
  },
  {
    stem: "Fehling's and Benedict's solutions test for aldehydes (and reducing sugars) by forming:",
    topic: "Aldehyde Oxidation",
    explanation:
      "These reagents contain copper(II) in complex; an aldehyde reduces Cu(II) to Cu(I), precipitating brick-red copper(I) oxide (Cu₂O) as the aldehyde is oxidised to a carboxylate.",
    choices: [
      { text: "A brick-red precipitate of copper(I) oxide", isCorrect: true },
      { text: "A silver mirror on the flask wall" },
      { text: "A colourless soluble copper(II) complex" },
      { text: "A yellow precipitate of iodoform" },
    ],
  },
  {
    stem: "An aldehyde with no α-hydrogen (e.g. benzaldehyde or formaldehyde) treated with concentrated hydroxide undergoes the Cannizzaro reaction, a:",
    topic: "Cannizzaro Reaction",
    explanation:
      "With no α-H to enolise, two aldehyde molecules undergo a disproportionation: one is reduced to the alcohol and the other oxidised to the carboxylate. A hydride is transferred from a tetrahedral intermediate to the second aldehyde.",
    choices: [
      { text: "Disproportionation to an alcohol and a carboxylate", isCorrect: true },
      { text: "Simple aldol condensation to an enone" },
      { text: "Complete reduction of both molecules to alcohols" },
      { text: "Halogenation at the α-carbon position" },
    ],
  },
  {
    stem: "The Cannizzaro reaction requires an aldehyde that:",
    topic: "Cannizzaro Reaction",
    explanation:
      "Because any aldehyde with α-hydrogens would preferentially enolise and undergo aldol chemistry, the Cannizzaro pathway is seen only with aldehydes lacking α-hydrogens, such as benzaldehyde and formaldehyde.",
    choices: [
      { text: "Has no α-hydrogen available", isCorrect: true },
      { text: "Carries at least two α-hydrogens" },
      { text: "Is a methyl ketone by structure" },
      { text: "Contains an aromatic ring only" },
    ],
  },
  {
    stem: "The Baeyer–Villiger oxidation of a ketone with a peroxyacid inserts an oxygen atom to give:",
    topic: "Baeyer–Villiger Oxidation",
    explanation:
      "A peroxyacid (e.g. mCPBA) converts a ketone into an ester by inserting an O between the carbonyl carbon and the more substituted (more migratory) group. The migratory aptitude order is roughly 3° > 2° ≈ aryl > 1° > methyl.",
    choices: [
      { text: "An ester (O inserted at the carbonyl)", isCorrect: true },
      { text: "A symmetrical ether with no carbonyl" },
      { text: "A carboxylic acid by C–C cleavage only" },
      { text: "A primary amine at the carbonyl carbon" },
    ],
  },
  {
    stem: "In a Baeyer–Villiger oxidation, the group that preferentially migrates to oxygen is the:",
    topic: "Baeyer–Villiger Oxidation",
    explanation:
      "Migration proceeds through a positively polarised transition state, so the group best able to stabilise positive charge migrates fastest: tertiary > secondary ≈ aryl > primary > methyl. This controls which ester regioisomer forms.",
    choices: [
      { text: "More substituted (more migratory) group", isCorrect: true },
      { text: "Least substituted methyl group always" },
      { text: "Group that best stabilises a negative charge" },
      { text: "Carbonyl oxygen itself, not a carbon group" },
    ],
  },
  {
    stem: "An α,β-unsaturated aldehyde treated with a hard nucleophile such as an organolithium reagent tends to give:",
    topic: "Conjugate Addition",
    explanation:
      "Hard, strongly basic nucleophiles (RLi, often RMgX) add irreversibly to the carbonyl carbon, giving predominantly the 1,2-addition product (allylic alcohol), in contrast to the 1,4-preference of soft nucleophiles.",
    choices: [
      { text: "The 1,2-addition (allylic alcohol) product", isCorrect: true },
      { text: "Exclusively the 1,4-conjugate product" },
      { text: "An acetal at the β-carbon position" },
      { text: "A fully aromatic ring by cyclisation" },
    ],
  },
  {
    stem: "Catalytic hydrogenation (H₂, Pd) of an α,β-unsaturated ketone typically reduces:",
    topic: "α,β-Unsaturated Carbonyls",
    explanation:
      "Heterogeneous catalytic hydrogenation adds H₂ across the more accessible C=C of the enone, giving the saturated ketone; the stronger C=O bond is generally left intact under these mild conditions.",
    choices: [
      { text: "The C=C, leaving the C=O intact", isCorrect: true },
      { text: "The C=O, leaving the C=C intact" },
      { text: "Both C=C and C=O to give an alkane" },
      { text: "Neither bond under any condition" },
    ],
  },
  {
    stem: "Pyridinium chlorochromate (PCC) is preferred over aqueous chromic acid for oxidising a primary alcohol when the goal is to stop at the:",
    topic: "Aldehyde Oxidation",
    explanation:
      "PCC is a mild, anhydrous Cr(VI) reagent that oxidises a primary alcohol only as far as the aldehyde. Aqueous strong oxidants (e.g. Jones/chromic acid) over-oxidise the aldehyde on through to the carboxylic acid.",
    choices: [
      { text: "Aldehyde stage, without over-oxidation", isCorrect: true },
      { text: "Carboxylic acid stage directly" },
      { text: "Fully reduced alkane product" },
      { text: "Symmetrical ester product" },
    ],
  },
  {
    stem: "A reducing sugar gives a positive Tollens' or Fehling's test because in solution it can open to reveal a free:",
    topic: "Aldehyde Oxidation",
    explanation:
      "A reducing sugar exists partly as an open-chain form bearing a free aldehyde (or an α-hydroxy ketone that isomerises to one), which is oxidised by these mild reagents — the basis of the classic reducing-sugar tests.",
    choices: [
      { text: "Aldehyde group in the open-chain form", isCorrect: true },
      { text: "Tertiary alcohol resistant to oxidation" },
      { text: "Fully substituted quaternary carbon" },
      { text: "Aromatic ring that reduces the reagent" },
    ],
  },
  {
    stem: "Which reagents/tests will distinguish an aldehyde from a ketone? Select all that apply.",
    type: "MULTI",
    topic: "Aldehyde Oxidation",
    explanation:
      "Tollens' (silver mirror), Fehling's/Benedict's (brick-red Cu₂O), and mild oxidants that convert aldehydes to acids all give a positive result with aldehydes but not ordinary ketones. NaBH₄ reduces both, so it does not distinguish them.",
    choices: [
      { text: "Tollens' reagent (silver mirror)", isCorrect: true },
      { text: "Fehling's or Benedict's solution", isCorrect: true },
      { text: "Mild oxidation to a carboxylic acid", isCorrect: true },
      { text: "Sodium borohydride reduction" },
      { text: "Addition of a Grignard reagent" },
    ],
  },
  {
    stem: "A ketone is readily oxidised to a carboxylic acid by Tollens' reagent under the usual mild test conditions.",
    type: "TRUE_FALSE",
    topic: "Aldehyde Oxidation",
    explanation:
      "Ketones lack a hydrogen on the carbonyl carbon and are not oxidised by mild reagents such as Tollens'; only aldehydes give the positive silver-mirror result.",
    choices: [
      { text: "True" },
      { text: "False", isCorrect: true },
    ],
  },
  {
    stem: "Carboxylic acids are far more acidic than alcohols (pKa ≈ 5 vs ≈ 16) mainly because:",
    topic: "Carboxylic Acid Acidity",
    explanation:
      "The carboxylate anion delocalises its negative charge equally over two oxygen atoms, spreading and stabilising the charge. An alkoxide localises the charge on one oxygen, so it is far less stable and the alcohol far less acidic.",
    choices: [
      { text: "The carboxylate charge is delocalised over two oxygens", isCorrect: true },
      { text: "The O–H bond of an acid is unusually weak and non-polar" },
      { text: "Carboxylic acids form aromatic rings when ionised" },
      { text: "Alkoxides are stabilised by resonance but carboxylates are not" },
    ],
  },
  {
    stem: "Adding an electron-withdrawing group (e.g. Cl) near the carboxyl group makes a carboxylic acid:",
    topic: "Carboxylic Acid Acidity",
    explanation:
      "An electron-withdrawing substituent stabilises the carboxylate by inductively pulling electron density away from the negative charge. So chloroacetic acid is more acidic than acetic acid, and the effect falls off with distance.",
    choices: [
      { text: "More acidic, by inductively stabilising the carboxylate", isCorrect: true },
      { text: "Less acidic, by destabilising the carboxylate anion" },
      { text: "Completely non-acidic and neutral" },
      { text: "Acidic only in the gas phase, never in water" },
    ],
  },
  {
    stem: "The general mechanism by which carboxylic acid derivatives react with nucleophiles is:",
    topic: "Nucleophilic Acyl Substitution",
    explanation:
      "The nucleophile adds to the carbonyl to form a tetrahedral intermediate, which then collapses by expelling the leaving group (Cl⁻, carboxylate, ⁻OR, ⁻NR₂). The net result is substitution of one group on the acyl carbon for another.",
    choices: [
      { text: "Tetrahedral intermediate, then loss of leaving group", isCorrect: true },
      { text: "Direct single-step substitution with no intermediate" },
      { text: "Formation of a stable carbocation at the acyl carbon" },
      { text: "A radical chain substitution at the carbonyl carbon" },
    ],
  },
  {
    stem: "Which carboxylic acid derivative is the MOST reactive toward nucleophilic acyl substitution?",
    topic: "Acyl Derivative Reactivity",
    explanation:
      "Reactivity tracks how good the leaving group is and how little the group donates into the carbonyl. Acyl chlorides are most reactive (Cl⁻ is an excellent leaving group); the order is acyl chloride > anhydride > ester > amide.",
    choices: [
      { text: "An acyl (acid) chloride, RCOCl", isCorrect: true },
      { text: "A primary amide, RCONH₂" },
      { text: "An ethyl ester, RCOOC₂H₅" },
      { text: "A carboxylate salt, RCOO⁻" },
    ],
  },
  {
    stem: "The correct order of reactivity of carboxylic acid derivatives toward nucleophilic acyl substitution is:",
    topic: "Acyl Derivative Reactivity",
    explanation:
      "Acyl chloride > anhydride > ester > amide. Amides are least reactive because the nitrogen lone pair donates strongly into the carbonyl, stabilising it, and amide (⁻NR₂) is the poorest leaving group.",
    choices: [
      { text: "Acyl chloride > anhydride > ester > amide", isCorrect: true },
      { text: "Amide > ester > anhydride > acyl chloride" },
      { text: "Ester > acyl chloride > amide > anhydride" },
      { text: "Anhydride > amide > acyl chloride > ester" },
    ],
  },
  {
    stem: "Amides are the least reactive acid derivatives partly because the nitrogen lone pair:",
    topic: "Acyl Derivative Reactivity",
    explanation:
      "The nitrogen lone pair is delocalised into the carbonyl π system (giving partial C–N double-bond character), which stabilises the amide and lowers the carbonyl's electrophilicity. Amide (⁻NR₂) is also a very poor leaving group.",
    choices: [
      { text: "Donates into the carbonyl, stabilising it", isCorrect: true },
      { text: "Withdraws electron density from the carbonyl" },
      { text: "Is completely absent in an amide" },
      { text: "Forms a second C=O bond to oxygen" },
    ],
  },
  {
    stem: "A convenient way to convert a carboxylic acid into a much more reactive acylating agent is to treat it with:",
    topic: "Nucleophilic Acyl Substitution",
    explanation:
      "Thionyl chloride (SOCl₂) converts –COOH into the acyl chloride –COCl, a highly reactive acylating agent that then readily forms esters or amides. The by-products (SO₂, HCl) are gases that escape, driving the reaction.",
    choices: [
      { text: "Thionyl chloride (SOCl₂)", isCorrect: true },
      { text: "Dilute aqueous sodium chloride" },
      { text: "Sodium borohydride in water" },
      { text: "A mild base such as pyridine alone" },
    ],
  },
  {
    stem: "Fischer esterification combines a carboxylic acid and an alcohol under acid catalysis to give:",
    topic: "Fischer Esterification",
    explanation:
      "Acid-catalysed condensation of a carboxylic acid with an alcohol gives an ester plus water. The reaction is an equilibrium, so an excess of one reactant or removal of water is used to drive it toward the ester.",
    choices: [
      { text: "An ester plus water, at equilibrium", isCorrect: true },
      { text: "An amide plus hydrogen gas" },
      { text: "An acyl chloride plus HCl" },
      { text: "An irreversible ester with no water formed" },
    ],
  },
  {
    stem: "Because Fischer esterification is an equilibrium, the yield of ester is improved by:",
    topic: "Fischer Esterification",
    explanation:
      "Le Chatelier's principle: using a large excess of the alcohol (or acid) or continuously removing the water shifts the equilibrium toward the ester. A strong acid catalyst only speeds the approach to equilibrium, not the position.",
    choices: [
      { text: "Using excess alcohol or removing water as it forms", isCorrect: true },
      { text: "Adding a large amount of water to the mixture" },
      { text: "Cooling the reaction to stop it early" },
      { text: "Removing the acid catalyst partway through" },
    ],
  },
  {
    stem: "Reaction of an acyl chloride with an alcohol (often with a base such as pyridine) gives:",
    topic: "Nucleophilic Acyl Substitution",
    explanation:
      "The alcohol displaces chloride from the acyl chloride to give an ester; pyridine neutralises the HCl produced. Because acyl chlorides are highly reactive, this route is fast and does not need an equilibrium-driving trick.",
    choices: [
      { text: "An ester, releasing HCl", isCorrect: true },
      { text: "An amide, releasing water" },
      { text: "A symmetrical ether, releasing chloride" },
      { text: "A carboxylic acid, releasing an alkene" },
    ],
  },
  {
    stem: "Reaction of an acyl chloride or anhydride with ammonia or an amine gives:",
    topic: "Nucleophilic Acyl Substitution",
    explanation:
      "The nitrogen nucleophile displaces the leaving group from the acyl carbon to give an amide. Two equivalents of amine (or an added base) are used, since one equivalent is protonated by the acid by-product.",
    choices: [
      { text: "An amide", isCorrect: true },
      { text: "An ester product" },
      { text: "A nitrile product" },
      { text: "A primary alcohol product" },
    ],
  },
  {
    stem: "Which statements about carboxylic acid derivatives are correct? Select all that apply.",
    type: "MULTI",
    topic: "Acyl Derivative Reactivity",
    explanation:
      "Acyl chlorides are the most reactive and amides the least; all react by addition–elimination (tetrahedral intermediate); reactivity follows leaving-group ability; amide nitrogen donates into the carbonyl. A more reactive derivative can be converted into a less reactive one, but not easily the reverse.",
    choices: [
      { text: "Acyl chlorides are the most reactive derivative", isCorrect: true },
      { text: "Amides are the least reactive derivative", isCorrect: true },
      { text: "All react through a tetrahedral intermediate", isCorrect: true },
      { text: "A more reactive derivative can be converted to a less reactive one", isCorrect: true },
      { text: "Amides are more reactive than acyl chlorides" },
      { text: "The reactions proceed by a stable acyl carbocation" },
    ],
  },
  {
    stem: "Which factors help drive a Fischer esterification toward the ester? Select all that apply.",
    type: "MULTI",
    topic: "Fischer Esterification",
    explanation:
      "Being an equilibrium, the ester is favoured by excess acid or alcohol and by removing water; a strong acid catalyst speeds equilibration. Adding water or diluting heavily pushes back toward the reactants.",
    choices: [
      { text: "Using a large excess of the alcohol", isCorrect: true },
      { text: "Removing water as it is formed", isCorrect: true },
      { text: "Using a strong acid catalyst to speed equilibration", isCorrect: true },
      { text: "Adding extra water to the reaction" },
      { text: "Cooling to freeze out the ester early" },
    ],
  },
  {
    stem: "Amides are the most reactive of the common carboxylic acid derivatives toward nucleophilic acyl substitution.",
    type: "TRUE_FALSE",
    topic: "Acyl Derivative Reactivity",
    explanation:
      "Amides are in fact the least reactive: the nitrogen lone pair stabilises the carbonyl and amide is a poor leaving group. Acyl chlorides are the most reactive.",
    choices: [
      { text: "True" },
      { text: "False", isCorrect: true },
    ],
  },
  {
    stem: "Base-promoted hydrolysis of an ester (saponification) gives an alcohol plus:",
    topic: "Ester Hydrolysis",
    explanation:
      "Hydroxide adds to the ester carbonyl and the tetrahedral intermediate expels alkoxide; the acid formed is immediately deprotonated to the carboxylate. Consuming the product this way makes saponification essentially irreversible.",
    choices: [
      { text: "A carboxylate salt", isCorrect: true },
      { text: "A free carboxylic acid at equilibrium" },
      { text: "An acyl chloride product" },
      { text: "A primary amide product" },
    ],
  },
  {
    stem: "Saponification is essentially irreversible (unlike acid-catalysed ester hydrolysis) because:",
    topic: "Ester Hydrolysis",
    explanation:
      "The carboxylate product is resonance-stabilised and deprotonated, so it is a very poor electrophile and will not revert. Acid-catalysed hydrolysis, by contrast, is a true equilibrium with esterification.",
    choices: [
      { text: "The carboxylate product will not revert to ester", isCorrect: true },
      { text: "Water is completely excluded from the reaction" },
      { text: "The alcohol immediately re-esterifies the acid" },
      { text: "No tetrahedral intermediate is ever formed" },
    ],
  },
  {
    stem: "The word 'saponification' refers historically to the industrial production of:",
    topic: "Ester Hydrolysis",
    explanation:
      "Saponification is the base hydrolysis of triglyceride esters (fats) to give glycerol and the sodium salts of long-chain fatty acids — that is, soap. The term literally means 'soap making'.",
    choices: [
      { text: "Soap, from base hydrolysis of fats", isCorrect: true },
      { text: "Glucose, from starch hydrolysis" },
      { text: "Ethanol, from sugar fermentation" },
      { text: "Nylon, from diamine and diacid" },
    ],
  },
  {
    stem: "Amides are hydrolysed only under forcing conditions (strong acid or base, prolonged heating) because they are:",
    topic: "Amide Hydrolysis",
    explanation:
      "The amide is the least reactive acid derivative: the nitrogen lone pair stabilises the carbonyl and ⁻NR₂/NH₂ is a very poor leaving group. Hydrolysis therefore needs vigorous acid or base and heat.",
    choices: [
      { text: "The least reactive, most stabilised derivative", isCorrect: true },
      { text: "The most reactive acid derivative known" },
      { text: "Unable to react with water under any conditions" },
      { text: "Spontaneously hydrolysed at room temperature" },
    ],
  },
  {
    stem: "Acidic hydrolysis of a nitrile (R–C≡N) proceeds through an amide to give, ultimately:",
    topic: "Nitrile Hydrolysis",
    explanation:
      "Water adds across the C≡N to give first an amide and then, on further hydrolysis, a carboxylic acid (plus ammonium). This provides a route to a carboxylic acid one carbon longer than the alkyl halide precursor.",
    choices: [
      { text: "A carboxylic acid", isCorrect: true },
      { text: "A primary amine only" },
      { text: "An aldehyde that stops there" },
      { text: "A stable ester product" },
    ],
  },
  {
    stem: "Converting an alkyl halide to a nitrile (with ⁻CN) and then hydrolysing is a useful way to:",
    topic: "Nitrile Hydrolysis",
    explanation:
      "Cyanide substitution adds one carbon as the nitrile; hydrolysis then unmasks a carboxylic acid. The net effect is a one-carbon chain extension, turning R–X into R–COOH.",
    choices: [
      { text: "Extend the carbon chain by one and install –COOH", isCorrect: true },
      { text: "Shorten the carbon chain by one carbon" },
      { text: "Convert a halide directly into an amine" },
      { text: "Introduce a carbonyl without changing chain length" },
    ],
  },
  {
    stem: "β-keto acids and malonic-type acids readily lose CO₂ on heating (decarboxylation) because the transition state is stabilised by:",
    topic: "Decarboxylation",
    explanation:
      "A carboxylic acid with a carbonyl at the β-position can lose CO₂ through a cyclic six-membered transition state, giving an enol that tautomerises to the ketone or acid. Ordinary carboxylic acids, lacking the β-carbonyl, do not decarboxylate easily.",
    choices: [
      { text: "A cyclic six-membered transition state", isCorrect: true },
      { text: "Formation of a stable primary carbanion" },
      { text: "Aromatisation of the carboxyl group" },
      { text: "A free-radical chain propagation step" },
    ],
  },
  {
    stem: "A simple carboxylic acid such as acetic acid, lacking a β-carbonyl group, on gentle heating:",
    topic: "Decarboxylation",
    explanation:
      "Ordinary carboxylic acids do not decarboxylate under mild heating because there is no β-carbonyl to enable the low-energy cyclic pathway. Only β-keto acids, malonic acids and similar readily lose CO₂ on warming.",
    choices: [
      { text: "Does not readily lose CO₂", isCorrect: true },
      { text: "Loses CO₂ almost instantly at room temperature" },
      { text: "Forms an aromatic ring by decarboxylation" },
      { text: "Converts spontaneously into an amide" },
    ],
  },
  {
    stem: "The acetoacetic ester synthesis exploits decarboxylation: after alkylating and hydrolysing ethyl acetoacetate, heating the β-keto acid gives a:",
    topic: "Decarboxylation",
    explanation:
      "Ethyl acetoacetate is alkylated at its acidic α-carbon, then hydrolysed to the β-keto acid, which decarboxylates on heating. The overall product is a substituted methyl ketone — a classic way to build ketones.",
    choices: [
      { text: "Substituted methyl ketone", isCorrect: true },
      { text: "Substituted carboxylic acid that keeps the CO₂" },
      { text: "Symmetrical ether product" },
      { text: "Primary amine product" },
    ],
  },
  {
    stem: "A transesterification reaction converts one ester into another by exchanging its:",
    topic: "Ester Hydrolysis",
    explanation:
      "Under acid or base catalysis, an ester reacts with a different alcohol so that the alkoxy (–OR) group is swapped for a new one, giving a new ester and releasing the original alcohol. It is an equilibrium driven by excess of the incoming alcohol.",
    choices: [
      { text: "Alkoxy (–OR) group for another one", isCorrect: true },
      { text: "Its acyl group for a halogen atom" },
      { text: "Carbonyl oxygen for a nitrogen atom" },
      { text: "Entire carbon skeleton for a new one" },
    ],
  },
  {
    stem: "Acid-catalysed hydrolysis of an ester is best described as:",
    topic: "Ester Hydrolysis",
    explanation:
      "Acid-catalysed ester hydrolysis is simply the reverse of Fischer esterification: an equilibrium giving the carboxylic acid and alcohol. Excess water drives it toward hydrolysis; excess alcohol drives it back toward the ester.",
    choices: [
      { text: "The reverse of Fischer esterification (equilibrium)", isCorrect: true },
      { text: "A completely irreversible one-way reaction" },
      { text: "A radical chain hydrolysis pathway throughout" },
      { text: "Identical in every way to saponification" },
    ],
  },
  {
    stem: "Lithium aluminium hydride (LiAlH₄) reduces a carboxylic acid or ester to a:",
    topic: "Carbonyl Reduction",
    explanation:
      "LiAlH₄ is a powerful hydride reagent that reduces carboxylic acids and esters all the way to primary alcohols. Milder NaBH₄ generally does not reduce acids or esters, reacting instead with aldehydes and ketones.",
    choices: [
      { text: "Primary alcohol", isCorrect: true },
      { text: "Aldehyde that stops there" },
      { text: "Tertiary alcohol product" },
      { text: "Symmetrical ketone product" },
    ],
  },
  {
    stem: "An anhydride reacting with an alcohol gives an ester plus:",
    topic: "Nucleophilic Acyl Substitution",
    explanation:
      "The alcohol displaces one acyl unit from the anhydride to give an ester; the departing half leaves as a carboxylic acid (or carboxylate if base is present). Anhydrides are milder acylating agents than acyl chlorides.",
    choices: [
      { text: "A carboxylic acid", isCorrect: true },
      { text: "Hydrogen chloride gas" },
      { text: "An aldehyde by-product" },
      { text: "A primary amine by-product" },
    ],
  },
  {
    stem: "Which statements about ester and amide hydrolysis are correct? Select all that apply.",
    type: "MULTI",
    topic: "Ester Hydrolysis",
    explanation:
      "Saponification (base) gives a carboxylate and is essentially irreversible; acid-catalysed ester hydrolysis is the reverse of esterification and is an equilibrium; amides need forcing conditions; all proceed via a tetrahedral intermediate.",
    choices: [
      { text: "Saponification gives a carboxylate and is essentially irreversible", isCorrect: true },
      { text: "Acid-catalysed ester hydrolysis is an equilibrium", isCorrect: true },
      { text: "Amide hydrolysis requires forcing acid or base and heat", isCorrect: true },
      { text: "All these hydrolyses go through a tetrahedral intermediate", isCorrect: true },
      { text: "Amides hydrolyse faster than esters under mild conditions" },
      { text: "Saponification readily reverts to the ester on standing" },
    ],
  },
  {
    stem: "Heating a β-keto acid causes ready loss of CO₂ through a cyclic six-membered transition state, whereas a simple carboxylic acid does not readily decarboxylate.",
    type: "TRUE_FALSE",
    topic: "Decarboxylation",
    explanation:
      "The β-carbonyl allows a low-energy cyclic transition state that expels CO₂ to give an enol (then the ketone). Ordinary carboxylic acids lack this feature and are stable to mild heating.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
];
