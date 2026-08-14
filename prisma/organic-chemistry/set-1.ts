import type { Q } from "../_lib/qbank";

export const ORGANIC_SET_1: Q[] = [
  {
    stem: "The carbon atom in methane CH₄ is described as sp³ hybridised, giving a geometry that is:",
    topic: "Hybridisation & Bonding",
    explanation:
      "Four equivalent sp³ hybrid orbitals point to the corners of a tetrahedron, so methane is tetrahedral with H–C–H angles of 109.5°; all four C–H bonds are equivalent σ bonds.",
    choices: [
      { text: "Tetrahedral, with bond angles of about 109.5°", isCorrect: true },
      { text: "Trigonal planar, with bond angles of 120°" },
      { text: "Linear, with bond angles of 180°" },
      { text: "Square planar, with bond angles of 90°" },
    ],
  },
  {
    stem: "In ethene (ethylene) H₂C=CH₂, each carbon is hybridised:",
    topic: "Hybridisation & Bonding",
    explanation:
      "Each alkene carbon is sp² hybridised (three σ bonds, trigonal planar, ~120°); the unhybridised p orbitals overlap side-on to form the π bond, giving the C=C double bond and planarity.",
    choices: [
      { text: "sp², giving a trigonal-planar carbon", isCorrect: true },
      { text: "sp³, giving a tetrahedral carbon" },
      { text: "sp, giving a linear carbon" },
      { text: "sp³d, giving a bipyramidal carbon" },
    ],
  },
  {
    stem: "The carbon atoms in ethyne (acetylene) HC≡CH are sp hybridised, so the molecule is:",
    topic: "Hybridisation & Bonding",
    explanation:
      "sp hybridisation gives two σ bonds at 180° (linear) and leaves two unhybridised p orbitals per carbon that form the two π bonds of the C≡C triple bond.",
    choices: [
      { text: "Linear, with a 180° H–C–C angle", isCorrect: true },
      { text: "Bent, with a 120° H–C–C angle" },
      { text: "Trigonal planar around each carbon" },
      { text: "Tetrahedral around each carbon" },
    ],
  },
  {
    stem: "A carbon–carbon double bond consists of:",
    topic: "Hybridisation & Bonding",
    explanation:
      "A C=C double bond is one σ bond (head-on sp²–sp² overlap) plus one π bond (side-on p–p overlap); the π bond restricts rotation, which gives rise to cis/trans (E/Z) isomerism.",
    choices: [
      { text: "One σ bond and one π bond", isCorrect: true },
      { text: "Two σ bonds" },
      { text: "Two π bonds" },
      { text: "One σ bond and two π bonds" },
    ],
  },
  {
    stem: "As the s-character of a carbon hybrid orbital increases (sp³ → sp² → sp), the C–H bonds become:",
    topic: "Hybridisation & Bonding",
    explanation:
      "Higher s-character holds bonding electrons closer to the nucleus, so bonds shorten and strengthen and the carbon becomes more electronegative; this is why terminal alkyne C–H is weakly acidic.",
    choices: [
      { text: "Shorter and stronger, carbon more electronegative", isCorrect: true },
      { text: "Longer and weaker, with less electronegative carbon" },
      { text: "Unchanged in length but appreciably weaker" },
      { text: "Longer but simultaneously stronger" },
    ],
  },
  {
    stem: "A σ bond differs from a π bond in that a σ bond:",
    topic: "Hybridisation & Bonding",
    explanation:
      "A σ bond has electron density concentrated along the internuclear axis (head-on overlap) and permits free rotation; a π bond arises from side-on p-orbital overlap above and below the axis and blocks rotation.",
    choices: [
      { text: "Has density along the internuclear axis and allows rotation", isCorrect: true },
      { text: "Has electron density only above and below the axis" },
      { text: "Is always weaker and longer than a comparable π bond" },
      { text: "Cannot exist without an accompanying π bond" },
    ],
  },
  {
    stem: "The C–C bond in ethane, C–C in ethene, and C–C in ethyne differ in length in the order:",
    topic: "Hybridisation & Bonding",
    explanation:
      "More bonds and higher s-character shorten the bond: ethyne (triple, ~120 pm) < ethene (double, ~134 pm) < ethane (single, ~154 pm). Bond order and s-character both act to pull the carbons closer.",
    choices: [
      { text: "ethyne < ethene < ethane", isCorrect: true },
      { text: "ethane < ethene < ethyne" },
      { text: "ethene < ethane < ethyne" },
      { text: "ethyne < ethane < ethene" },
    ],
  },
  {
    stem: "Which orbital description applies to the nitrogen atom in an amine R–NH₂?",
    topic: "Hybridisation & Bonding",
    explanation:
      "Amine nitrogen is sp³ hybridised: three σ bonds and one lone pair in the fourth sp³ orbital give a pyramidal shape; that lone pair is responsible for the amine's basicity and nucleophilicity.",
    choices: [
      { text: "sp³, pyramidal with a lone pair", isCorrect: true },
      { text: "sp², trigonal planar with no lone pair" },
      { text: "sp, linear with two lone pairs" },
      { text: "Unhybridised, using pure p orbitals only" },
    ],
  },
  {
    stem: "The oxygen atom in an alcohol R–OH is best described as:",
    topic: "Hybridisation & Bonding",
    explanation:
      "Alcohol oxygen is approximately sp³ hybridised with two bonding pairs (to C and H) and two lone pairs, giving a bent C–O–H arrangement similar to water and enabling hydrogen bonding.",
    choices: [
      { text: "sp³ hybridised with two lone pairs, bent at oxygen", isCorrect: true },
      { text: "sp hybridised, giving a linear arrangement at oxygen" },
      { text: "sp² hybridised, bearing no lone pairs at all" },
      { text: "Unhybridised with four bonding pairs" },
    ],
  },
  {
    stem: "Which statements about hybridisation and bonding in organic molecules are correct? Select all that apply.",
    type: "MULTI",
    topic: "Hybridisation & Bonding",
    explanation:
      "sp³ carbon is tetrahedral, sp² trigonal planar, sp linear; a double bond is one σ + one π; higher s-character shortens and strengthens bonds. A π bond does not permit free rotation.",
    choices: [
      { text: "sp³ carbon is tetrahedral (~109.5°)", isCorrect: true },
      { text: "sp² carbon is trigonal planar (~120°)", isCorrect: true },
      { text: "A C=C double bond is one σ and one π bond", isCorrect: true },
      { text: "Greater s-character shortens and strengthens a bond", isCorrect: true },
      { text: "A π bond permits free rotation about its axis" },
      { text: "sp carbon adopts a bent geometry" },
    ],
  },
  {
    stem: "Restricted rotation about a carbon–carbon double bond is a consequence of the π bond and gives rise to cis–trans isomerism.",
    type: "TRUE_FALSE",
    topic: "Hybridisation & Bonding",
    explanation:
      "The side-on overlap of the π bond would have to break for the groups to rotate, which costs too much energy at ordinary temperatures; the locked geometry produces distinct cis (Z) and trans (E) isomers.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "In a carbon–carbon triple bond, two of the three bonds are π bonds.",
    type: "TRUE_FALSE",
    topic: "Hybridisation & Bonding",
    explanation:
      "A triple bond is one σ bond plus two mutually perpendicular π bonds formed from the two unhybridised p orbitals on each sp carbon, giving the short, strong, linear C≡C linkage.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The functional group –COOH is characteristic of which class of compounds?",
    topic: "Functional Groups",
    explanation:
      "The carboxyl group –COOH (a carbonyl bearing a hydroxyl) defines carboxylic acids; it is weakly acidic because the resulting carboxylate anion is resonance-stabilised over two equivalent oxygens.",
    choices: [
      { text: "Carboxylic acids", isCorrect: true },
      { text: "Simple aldehydes" },
      { text: "Dialkyl ketones" },
      { text: "Primary alcohols" },
    ],
  },
  {
    stem: "A compound containing a carbonyl group with the carbon bonded to two other carbons (R–CO–R′) is:",
    topic: "Functional Groups",
    explanation:
      "A ketone has its carbonyl carbon flanked by two carbon groups; an aldehyde instead has at least one hydrogen on the carbonyl carbon (R–CHO), a distinction that affects oxidation behaviour.",
    choices: [
      { text: "A ketone", isCorrect: true },
      { text: "An aldehyde" },
      { text: "A carboxylic acid" },
      { text: "An ester" },
    ],
  },
  {
    stem: "The group –CHO at the end of a carbon chain denotes:",
    topic: "Functional Groups",
    explanation:
      "The –CHO group is an aldehyde: a carbonyl carbon bearing one hydrogen, always at the end of a chain. Aldehydes are readily oxidised to carboxylic acids, unlike ketones.",
    choices: [
      { text: "An aldehyde", isCorrect: true },
      { text: "A dialkyl ketone" },
      { text: "A dialkyl ether" },
      { text: "An alcohol" },
    ],
  },
  {
    stem: "An ester is formed, formally, by combining a carboxylic acid with:",
    topic: "Functional Groups",
    explanation:
      "Esters (R–CO–O–R′) arise from a carboxylic acid and an alcohol with loss of water (Fischer esterification); the C(=O)–O–C linkage is the defining feature and hydrolyses back under acid or base.",
    choices: [
      { text: "An alcohol, with loss of water", isCorrect: true },
      { text: "A second carboxylic acid" },
      { text: "An amine, with loss of ammonia" },
      { text: "A ketone, with loss of hydrogen" },
    ],
  },
  {
    stem: "Which functional group is present in an amide?",
    topic: "Functional Groups",
    explanation:
      "An amide contains a carbonyl bonded to nitrogen (–CO–N<); the C–N bond has partial double-bond character from resonance, which restricts rotation and makes amides far less basic than amines.",
    choices: [
      { text: "A carbonyl bonded to nitrogen", isCorrect: true },
      { text: "A carbonyl bonded to a hydroxyl" },
      { text: "Two singly bonded oxygens on one carbon" },
      { text: "A carbon–nitrogen triple bond" },
    ],
  },
  {
    stem: "The suffix used in the IUPAC name of a ketone is:",
    topic: "IUPAC Nomenclature",
    explanation:
      "Ketones take the suffix -one (e.g. propan-2-one); aldehydes use -al, carboxylic acids -oic acid, and alcohols -ol. The suffix identifies the principal characteristic group.",
    choices: [
      { text: "-one", isCorrect: true },
      { text: "-al" },
      { text: "-ol" },
      { text: "-oic acid" },
    ],
  },
  {
    stem: "The IUPAC name of (CH₃)₂CHCH₂CH₃ is:",
    topic: "IUPAC Nomenclature",
    explanation:
      "The longest chain is four carbons (butane) with a methyl branch on C2, giving 2-methylbutane; the chain is numbered to give the substituent the lowest locant.",
    choices: [
      { text: "2-methylbutane", isCorrect: true },
      { text: "3-methylbutane" },
      { text: "2-methylpropane" },
      { text: "pentane" },
    ],
  },
  {
    stem: "In naming a molecule that contains both a hydroxyl group and a carboxylic acid group, the group cited as the suffix is the:",
    topic: "IUPAC Nomenclature",
    explanation:
      "Seniority rules place carboxylic acid above alcohol, so –COOH is the suffix (-oic acid) and –OH becomes the 'hydroxy' prefix, e.g. 2-hydroxypropanoic acid (lactic acid).",
    choices: [
      { text: "Carboxylic acid, with the alcohol as a hydroxy prefix", isCorrect: true },
      { text: "Alcohol, with the acid named as a prefix" },
      { text: "Whichever of the two groups happens to have the lower locant" },
      { text: "Whichever group comes first in strict alphabetical order" },
    ],
  },
  {
    stem: "The correct IUPAC name for CH₃CH₂CH₂OH is:",
    topic: "IUPAC Nomenclature",
    explanation:
      "A three-carbon chain ending in –OH is propan-1-ol; the –ol suffix and locant 1 identify the hydroxyl on the terminal carbon.",
    choices: [
      { text: "propan-1-ol", isCorrect: true },
      { text: "propan-2-ol" },
      { text: "propanal" },
      { text: "propanoic acid" },
    ],
  },
  {
    stem: "When several substituents are present, they are listed in the name:",
    topic: "IUPAC Nomenclature",
    explanation:
      "Substituent prefixes are cited in alphabetical order (ignoring multiplying prefixes like di-, tri-), each with its locant; the parent chain is numbered to give the set of locants the lowest values.",
    choices: [
      { text: "In alphabetical order, each with its locant", isCorrect: true },
      { text: "In order of increasing size only" },
      { text: "In the order they are drawn on the page" },
      { text: "Grouped by element, carbon substituents last" },
    ],
  },
  {
    stem: "Which functional-group / suffix pairings are correct? Select all that apply.",
    type: "MULTI",
    topic: "IUPAC Nomenclature",
    explanation:
      "Aldehyde → -al, ketone → -one, carboxylic acid → -oic acid, alcohol → -ol are all correct. An amine does not take the suffix -one, and an ester is not named with -al.",
    choices: [
      { text: "Aldehyde uses the suffix -al", isCorrect: true },
      { text: "Ketone uses the suffix -one", isCorrect: true },
      { text: "Carboxylic acid uses the suffix -oic acid", isCorrect: true },
      { text: "Alcohol uses the suffix -ol", isCorrect: true },
      { text: "Amine uses the suffix -one" },
      { text: "Ester uses the suffix -al" },
    ],
  },
  {
    stem: "Which statements about functional groups are correct? Select all that apply.",
    type: "MULTI",
    topic: "Functional Groups",
    explanation:
      "Aldehydes have a terminal carbonyl with an H; ketones have the carbonyl between two carbons; esters contain C(=O)–O–C; amides contain C(=O)–N. A carboxylic acid is not simply an ether.",
    choices: [
      { text: "An aldehyde carbonyl carbon bears at least one hydrogen", isCorrect: true },
      { text: "A ketone carbonyl carbon is bonded to two carbons", isCorrect: true },
      { text: "An ester contains a C(=O)–O–C linkage", isCorrect: true },
      { text: "An amide contains a carbonyl bonded to nitrogen", isCorrect: true },
      { text: "A carboxylic acid is a type of ether" },
      { text: "An alcohol contains a carbonyl group" },
    ],
  },
  {
    stem: "In IUPAC nomenclature, the parent chain chosen is the longest continuous carbon chain that includes the principal functional group.",
    type: "TRUE_FALSE",
    topic: "IUPAC Nomenclature",
    explanation:
      "The parent chain must contain the principal characteristic group and be the longest such chain; numbering then gives that group the lowest possible locant, fixing the stem name and suffix.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Butane and 2-methylpropane share the molecular formula C₄H₁₀ but differ in connectivity; they are:",
    topic: "Structural Isomerism",
    explanation:
      "Same molecular formula, different atom connectivity makes them constitutional (structural) isomers — specifically chain isomers, differing in whether the carbon skeleton is straight or branched.",
    choices: [
      { text: "Constitutional (structural) isomers", isCorrect: true },
      { text: "Stereoisomers (same connectivity)" },
      { text: "Resonance structures of one compound" },
      { text: "Identical molecules drawn differently" },
    ],
  },
  {
    stem: "Propan-1-ol and propan-2-ol are examples of which kind of structural isomerism?",
    topic: "Structural Isomerism",
    explanation:
      "They differ only in the position of the –OH group on the same carbon skeleton, so they are positional isomers, a subclass of constitutional isomerism.",
    choices: [
      { text: "Positional isomerism", isCorrect: true },
      { text: "Chain isomerism" },
      { text: "Functional-group isomerism" },
      { text: "Geometric isomerism" },
    ],
  },
  {
    stem: "An alcohol and an ether can share the same molecular formula (e.g. C₂H₆O as ethanol and dimethyl ether); this is:",
    topic: "Structural Isomerism",
    explanation:
      "Ethanol (CH₃CH₂OH) and dimethyl ether (CH₃OCH₃) have the same formula but different functional groups, so they are functional-group isomers, with markedly different properties.",
    choices: [
      { text: "Functional-group isomerism", isCorrect: true },
      { text: "Positional (locant) isomerism" },
      { text: "Carbon-chain isomerism" },
      { text: "Conformational isomerism" },
    ],
  },
  {
    stem: "The general molecular formula of an acyclic, saturated alkane is:",
    topic: "Molecular Formulae",
    explanation:
      "Acyclic alkanes follow CₙH₂ₙ₊₂; each ring or double bond reduces the hydrogen count by two, which is the basis of the degree-of-unsaturation calculation.",
    choices: [
      { text: "CnH₂n₊₂", isCorrect: true },
      { text: "CnH₂n (an alkene ratio)" },
      { text: "CnH₂n₋₂" },
      { text: "CnHn (a highly unsaturated ratio)" },
    ],
  },
  {
    stem: "A single degree of unsaturation (index of hydrogen deficiency) corresponds to:",
    topic: "Degrees of Unsaturation",
    explanation:
      "Each degree of unsaturation represents one ring or one π bond; a molecule with formula CₙH₂ₙ has one degree, satisfied by either a ring or a double bond.",
    choices: [
      { text: "One ring or one double bond", isCorrect: true },
      { text: "One lone pair on a heteroatom" },
      { text: "One branch point in the carbon chain" },
      { text: "One hydrogen bond in the structure" },
    ],
  },
  {
    stem: "How many degrees of unsaturation does a compound of formula C₆H₆ (benzene) possess?",
    topic: "Degrees of Unsaturation",
    explanation:
      "Degrees = (2×6 + 2 − 6)/2 = 4. Benzene's four degrees correspond to one ring plus three π bonds, consistent with its aromatic six-membered ring.",
    choices: [
      { text: "Four", isCorrect: true },
      { text: "Two" },
      { text: "Three" },
      { text: "One" },
    ],
  },
  {
    stem: "For a compound containing nitrogen, the degree-of-unsaturation formula is adjusted by:",
    topic: "Degrees of Unsaturation",
    explanation:
      "Each trivalent nitrogen adds one to the effective hydrogen count: DoU = (2C + 2 + N − H)/2. Halogens count like hydrogen (subtract), and divalent oxygen is ignored.",
    choices: [
      { text: "Adding the number of nitrogen atoms", isCorrect: true },
      { text: "Subtracting the number of nitrogen atoms present" },
      { text: "Ignoring nitrogen entirely, as one does for oxygen" },
      { text: "Doubling the number of nitrogens" },
    ],
  },
  {
    stem: "In calculating degrees of unsaturation, halogen atoms are treated as:",
    topic: "Degrees of Unsaturation",
    explanation:
      "Monovalent halogens behave like hydrogen atoms, so they are subtracted along with H: DoU = (2C + 2 + N − H − X)/2. Oxygen and other divalent atoms have no effect on the count.",
    choices: [
      { text: "Equivalent to hydrogen atoms", isCorrect: true },
      { text: "Equivalent to carbon atoms" },
      { text: "Equivalent to nitrogen atoms" },
      { text: "Having no effect, like oxygen" },
    ],
  },
  {
    stem: "Members of a homologous series such as the alkanes:",
    topic: "Homologous Series",
    explanation:
      "A homologous series shares a general formula and functional group, with successive members differing by CH₂; physical properties (e.g. boiling point) change gradually with chain length while chemistry stays similar.",
    choices: [
      { text: "Differ by a CH₂ unit and share a general formula", isCorrect: true },
      { text: "Have identical molecular formulae to one another" },
      { text: "Each contain a different functional group" },
      { text: "Show abruptly different chemical reactivity" },
    ],
  },
  {
    stem: "Cis- and trans-but-2-ene are best classified as:",
    topic: "Isomerism Overview",
    explanation:
      "They share connectivity but differ in the fixed spatial arrangement across the C=C double bond, so they are stereoisomers — specifically geometric (cis/trans, or E/Z) isomers.",
    choices: [
      { text: "Stereoisomers (geometric isomers)", isCorrect: true },
      { text: "Simple constitutional isomers" },
      { text: "Functional-group constitutional isomers" },
      { text: "Resonance forms of one molecule" },
    ],
  },
  {
    stem: "Which pairs are constitutional (structural) isomers? Select all that apply.",
    type: "MULTI",
    topic: "Structural Isomerism",
    explanation:
      "Chain (butane/2-methylpropane), positional (propan-1-ol/propan-2-ol) and functional-group (ethanol/dimethyl ether) pairs are all constitutional isomers. Cis/trans-butene are stereoisomers, and identical molecules are not isomers.",
    choices: [
      { text: "Butane and 2-methylpropane", isCorrect: true },
      { text: "Propan-1-ol and propan-2-ol", isCorrect: true },
      { text: "Ethanol and dimethyl ether", isCorrect: true },
      { text: "Pentane and 2-methylbutane", isCorrect: true },
      { text: "cis- and trans-but-2-ene" },
      { text: "Two drawings of the same ethanol molecule" },
    ],
  },
  {
    stem: "Which statements about degrees of unsaturation are correct? Select all that apply.",
    type: "MULTI",
    topic: "Degrees of Unsaturation",
    explanation:
      "Each degree is a ring or π bond; alkanes (CₙH₂ₙ₊₂) have zero; benzene has four; halogens count as H and oxygen is ignored. A degree of unsaturation is not a lone pair.",
    choices: [
      { text: "Each degree equals one ring or one π bond", isCorrect: true },
      { text: "A saturated acyclic alkane has zero degrees", isCorrect: true },
      { text: "Benzene (C₆H₆) has four degrees", isCorrect: true },
      { text: "Oxygen atoms are ignored in the calculation", isCorrect: true },
      { text: "Each degree corresponds to a lone pair" },
      { text: "Halogens are ignored like oxygen" },
    ],
  },
  {
    stem: "Which statements about isomerism are correct? Select all that apply.",
    type: "MULTI",
    topic: "Isomerism Overview",
    explanation:
      "Constitutional isomers differ in connectivity (chain, positional, functional-group); stereoisomers share connectivity but differ in spatial arrangement. Isomers must share a molecular formula but are not identical molecules.",
    choices: [
      { text: "Chain, positional and functional-group isomers are all constitutional", isCorrect: true },
      { text: "Stereoisomers share connectivity but differ spatially", isCorrect: true },
      { text: "All isomers share the same molecular formula", isCorrect: true },
      { text: "cis/trans isomers are a type of stereoisomer", isCorrect: true },
      { text: "Constitutional isomers have the same connectivity" },
      { text: "Isomers are simply the same molecule redrawn" },
    ],
  },
  {
    stem: "A compound with molecular formula C₅H₁₀ must contain either one ring or one carbon–carbon double bond.",
    type: "TRUE_FALSE",
    topic: "Degrees of Unsaturation",
    explanation:
      "DoU = (2×5 + 2 − 10)/2 = 1, so exactly one degree of unsaturation is present, satisfied by a single ring (e.g. cyclopentane) or one double bond (e.g. a pentene).",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Formal charge on an atom in a Lewis structure is calculated as:",
    topic: "Formal Charge",
    explanation:
      "Formal charge = (valence electrons) − (non-bonding electrons) − ½(bonding electrons); it apportions electrons assuming equal sharing and helps identify the most reasonable Lewis structure.",
    choices: [
      { text: "Valence − lone-pair − ½(bonding) electrons", isCorrect: true },
      { text: "Valence electrons + lone-pair electrons + bonding electrons" },
      { text: "Bonding electrons − lone-pair electrons" },
      { text: "½(valence electrons) − bonding electrons" },
    ],
  },
  {
    stem: "In the hydronium ion H₃O⁺, the formal charge on oxygen is:",
    topic: "Formal Charge",
    explanation:
      "Oxygen has 6 valence electrons; in H₃O⁺ it has one lone pair (2 non-bonding) and three bonds (6 bonding): FC = 6 − 2 − 3 = +1, accounting for the ion's overall positive charge.",
    choices: [
      { text: "+1", isCorrect: true },
      { text: "0" },
      { text: "−1" },
      { text: "+2" },
    ],
  },
  {
    stem: "The most acceptable Lewis (resonance) structure is generally the one that:",
    topic: "Formal Charge",
    explanation:
      "Preferred structures minimise formal charges, place any negative charge on the most electronegative atom, and keep octets complete; these criteria pick the largest contributor to the resonance hybrid.",
    choices: [
      { text: "Minimises formal charges and completes octets", isCorrect: true },
      { text: "Maximises the number of formal charges" },
      { text: "Places negative charge on the least electronegative atom" },
      { text: "Leaves as many atoms as possible without an octet" },
    ],
  },
  {
    stem: "Resonance structures of a molecule differ only in the:",
    topic: "Resonance & Delocalisation",
    explanation:
      "Resonance forms differ only in the placement of electrons (π and lone pairs); the positions of the nuclei stay fixed. The true structure is a single hybrid, not a rapid interconversion of the forms.",
    choices: [
      { text: "Positions of electrons, not of the nuclei", isCorrect: true },
      { text: "Positions of the atomic nuclei in space" },
      { text: "Total number of electrons present in the species" },
      { text: "Molecular formula of the species" },
    ],
  },
  {
    stem: "The carboxylate ion RCOO⁻ is stabilised because its negative charge is:",
    topic: "Resonance & Delocalisation",
    explanation:
      "The charge is delocalised equally over two oxygen atoms by resonance, giving two equivalent C–O bonds of order 1.5; this delocalisation is why carboxylic acids are more acidic than alcohols.",
    choices: [
      { text: "Delocalised over two equivalent oxygen atoms", isCorrect: true },
      { text: "Localised entirely on the carbon atom" },
      { text: "Localised on a single oxygen atom" },
      { text: "Removed entirely, leaving a neutral species" },
    ],
  },
  {
    stem: "A resonance hybrid is:",
    topic: "Resonance & Delocalisation",
    explanation:
      "The real molecule is a single, unchanging structure — a weighted average of the contributing resonance forms — not a mixture that flips between them; delocalisation lowers its energy below any one form.",
    choices: [
      { text: "A single weighted average of the contributors", isCorrect: true },
      { text: "A rapid equilibrium between distinct molecules" },
      { text: "Whichever contributing form has the highest energy" },
      { text: "Two separate compounds present in a fixed proportion" },
    ],
  },
  {
    stem: "Which species is stabilised by resonance delocalisation of a positive charge?",
    topic: "Resonance & Delocalisation",
    explanation:
      "The allyl cation (CH₂=CH–CH₂⁺) delocalises its positive charge over the two terminal carbons through the π system, making it far more stable than a comparable localised primary carbocation.",
    choices: [
      { text: "The allyl cation, CH₂=CH–CH₂⁺", isCorrect: true },
      { text: "The methyl cation, CH₃⁺" },
      { text: "A saturated primary carbocation with no π system" },
      { text: "A fully saturated tetrahedral carbon" },
    ],
  },
  {
    stem: "Greater resonance stabilisation is expected when the contributing structures are:",
    topic: "Resonance & Delocalisation",
    explanation:
      "Delocalisation is most effective when contributors are similar in energy (ideally equivalent), all atoms have complete octets, and charges are minimal and well placed; equivalent forms give the largest stabilisation.",
    choices: [
      { text: "Equivalent in energy, with complete octets", isCorrect: true },
      { text: "Very different in energy from one another" },
      { text: "Few in number and carrying large formal charges" },
      { text: "Structures with many incomplete octets" },
    ],
  },
  {
    stem: "For effective resonance (π delocalisation) across adjacent atoms, the relevant p orbitals must be:",
    topic: "Resonance & Delocalisation",
    explanation:
      "Delocalisation requires a continuous, parallel (coplanar) array of p orbitals so they can overlap side-on; twisting a system out of planarity breaks conjugation and removes the stabilisation.",
    choices: [
      { text: "Parallel within a coplanar, conjugated system", isCorrect: true },
      { text: "Held perpendicular to one another across the system" },
      { text: "Completely filled and non-overlapping" },
      { text: "Located on non-adjacent, isolated atoms" },
    ],
  },
  {
    stem: "Conjugation refers to a system in which:",
    topic: "Resonance & Delocalisation",
    explanation:
      "A conjugated system has alternating multiple and single bonds (or p orbitals/lone pairs adjacent to π bonds), allowing π electrons to delocalise over several atoms and lowering the system's energy.",
    choices: [
      { text: "π and single bonds alternate, allowing delocalisation", isCorrect: true },
      { text: "All bonds are isolated, non-interacting single bonds" },
      { text: "Two π bonds are separated by several sp³ carbons" },
      { text: "Only σ bonds are present throughout the molecule" },
    ],
  },
  {
    stem: "Which statements about resonance are correct? Select all that apply.",
    type: "MULTI",
    topic: "Resonance & Delocalisation",
    explanation:
      "Resonance moves electrons not nuclei; the hybrid is a single lower-energy structure; equivalent contributors give maximal stabilisation; a planar conjugated system is required. Resonance is not a physical equilibrium.",
    choices: [
      { text: "Resonance forms differ only in electron placement", isCorrect: true },
      { text: "The resonance hybrid is lower in energy than any single form", isCorrect: true },
      { text: "Equivalent contributors give the greatest stabilisation", isCorrect: true },
      { text: "Effective delocalisation requires a coplanar conjugated system", isCorrect: true },
      { text: "Resonance forms interconvert as a real equilibrium" },
      { text: "Resonance changes the positions of the nuclei" },
    ],
  },
  {
    stem: "Which species are stabilised by resonance delocalisation? Select all that apply.",
    type: "MULTI",
    topic: "Resonance & Delocalisation",
    explanation:
      "The carboxylate ion, allyl cation, allyl anion and benzene ring all delocalise electrons through conjugated π systems. An isolated sp³ carbon and the methyl cation have no π system to delocalise into.",
    choices: [
      { text: "The carboxylate ion RCOO⁻", isCorrect: true },
      { text: "The allyl cation", isCorrect: true },
      { text: "The allyl anion", isCorrect: true },
      { text: "The benzene ring", isCorrect: true },
      { text: "The methyl cation CH₃⁺" },
      { text: "A saturated, isolated sp³ carbon" },
    ],
  },
  {
    stem: "Delocalisation of electrons through resonance lowers the energy of a molecule or ion, increasing its stability.",
    type: "TRUE_FALSE",
    topic: "Resonance & Delocalisation",
    explanation:
      "Spreading electron density over several atoms reduces electron–electron repulsion and stabilises the species; this resonance stabilisation underlies the acidity of carboxylic acids and the special stability of aromatic rings.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The inductive effect is the transmission of charge through:",
    topic: "Electronic Effects",
    explanation:
      "The inductive effect is the polarisation of σ bonds by an electronegative (or electron-releasing) atom, transmitted through the chain of σ bonds and falling off rapidly with distance.",
    choices: [
      { text: "σ bonds, weakening with distance", isCorrect: true },
      { text: "π bonds, over long distances without loss" },
      { text: "space, independent of the bonding framework" },
      { text: "lone pairs only, never through bonds" },
    ],
  },
  {
    stem: "A −I (electron-withdrawing inductive) group such as a halogen tends to make a nearby carboxylic acid:",
    topic: "Electronic Effects",
    explanation:
      "Electron-withdrawing groups stabilise the carboxylate conjugate base by dispersing its negative charge, so they increase acid strength; e.g. chloroacetic acid is stronger than acetic acid.",
    choices: [
      { text: "More acidic, by stabilising the conjugate base", isCorrect: true },
      { text: "Less acidic, by destabilising the conjugate base" },
      { text: "Unchanged in acidity" },
      { text: "More basic and less acidic" },
    ],
  },
  {
    stem: "Alkyl groups are generally regarded as:",
    topic: "Electronic Effects",
    explanation:
      "Alkyl groups are weakly electron-releasing (+I, and +hyperconjugation); this electron donation stabilises adjacent positive charge, which is why more substituted carbocations are more stable.",
    choices: [
      { text: "Weakly electron-releasing (+I)", isCorrect: true },
      { text: "Strongly electron-withdrawing (−I)" },
      { text: "Electronically neutral in every context" },
      { text: "Strong π-acceptors" },
    ],
  },
  {
    stem: "The mesomeric (resonance) effect differs from the inductive effect in that it operates through:",
    topic: "Electronic Effects",
    explanation:
      "The mesomeric (+M/−M) effect involves delocalisation of π electrons or lone pairs through a conjugated system, whereas the inductive effect polarises σ bonds; mesomeric effects can transmit over longer, conjugated paths.",
    choices: [
      { text: "conjugated π systems and lone pairs", isCorrect: true },
      { text: "polarised σ bonds only" },
      { text: "through-space electrostatic attraction" },
      { text: "a sea of metallic delocalised electrons" },
    ],
  },
  {
    stem: "A group with a +M (electron-donating resonance) effect, such as –OCH₃ attached to a benzene ring, tends to:",
    topic: "Electronic Effects",
    explanation:
      "A +M group donates lone-pair density into the ring, raising electron density especially at the ortho and para positions; this activates the ring toward electrophilic substitution and directs incoming groups there.",
    choices: [
      { text: "Raise ring electron density at ortho and para", isCorrect: true },
      { text: "Withdraw electron density evenly from the whole ring" },
      { text: "Leave the ring's electron density unchanged" },
      { text: "Direct incoming electrophiles only to the meta position" },
    ],
  },
  {
    stem: "Hyperconjugation is best described as the delocalisation of electrons from:",
    topic: "Electronic Effects",
    explanation:
      "Hyperconjugation delocalises σ(C–H) bonding electrons into an adjacent empty or π orbital (e.g. into a carbocation's empty p orbital); more adjacent C–H bonds give more hyperconjugation and greater stabilisation.",
    choices: [
      { text: "An adjacent σ(C–H) bond into an empty or π orbital", isCorrect: true },
      { text: "A heteroatom lone pair into a σ* orbital only" },
      { text: "A π bond into another π bond directly" },
      { text: "Charge from the nucleus into the bonding region" },
    ],
  },
  {
    stem: "The relative stability of carbocations tert > sec > prim is explained mainly by:",
    topic: "Electronic Effects",
    explanation:
      "Alkyl groups stabilise the electron-deficient centre by inductive donation and, more importantly, hyperconjugation; a tertiary cation has the most adjacent C–H/C–C bonds and so is the most stabilised.",
    choices: [
      { text: "Increasing alkyl donation of electron density", isCorrect: true },
      { text: "Increasing electron withdrawal by alkyl groups" },
      { text: "A decreasing number of adjacent C–H bonds available" },
      { text: "The complete absence of any hyperconjugation" },
    ],
  },
  {
    stem: "Which order correctly ranks carbocation stability from most to least stable?",
    topic: "Electronic Effects",
    explanation:
      "Allylic/benzylic and tertiary cations (resonance and/or hyperconjugation) outrank secondary, then primary, with methyl least stable; delocalisation and alkyl donation together set the order.",
    choices: [
      { text: "Tertiary/allylic > secondary > primary > methyl", isCorrect: true },
      { text: "Methyl > primary > secondary > tertiary" },
      { text: "Primary > secondary > tertiary > allylic" },
      { text: "Secondary > tertiary > methyl > primary" },
    ],
  },
  {
    stem: "A carbanion is stabilised by adjacent groups that are:",
    topic: "Electronic Effects",
    explanation:
      "Carbanions bear a negative charge, so they are stabilised by electron-withdrawing groups (−I, −M, e.g. carbonyl or nitro) that disperse that charge — the opposite of what stabilises a carbocation.",
    choices: [
      { text: "Electron-withdrawing, dispersing the negative charge", isCorrect: true },
      { text: "Electron-releasing, adding to the negative charge" },
      { text: "Bulky but electronically neutral" },
      { text: "Identical to those that stabilise carbocations" },
    ],
  },
  {
    stem: "The nitro group –NO₂ attached to a benzene ring is:",
    topic: "Electronic Effects",
    explanation:
      "The nitro group is strongly electron-withdrawing by both −I and −M, so it deactivates the ring toward electrophilic substitution and directs incoming electrophiles to the meta position.",
    choices: [
      { text: "Electron-withdrawing and meta-directing", isCorrect: true },
      { text: "Electron-releasing and ortho/para-directing" },
      { text: "Electronically neutral and non-directing" },
      { text: "A strong activator of the ring" },
    ],
  },
  {
    stem: "Which statements about electronic effects are correct? Select all that apply.",
    type: "MULTI",
    topic: "Electronic Effects",
    explanation:
      "Inductive effects act through σ bonds and fade with distance; mesomeric effects act through conjugation; alkyl groups are +I and donate by hyperconjugation; −I groups increase acidity. The inductive effect does not strengthen with distance.",
    choices: [
      { text: "The inductive effect is transmitted through σ bonds", isCorrect: true },
      { text: "The mesomeric effect operates through conjugated π systems", isCorrect: true },
      { text: "Alkyl groups donate electron density (+I, hyperconjugation)", isCorrect: true },
      { text: "Electron-withdrawing groups increase carboxylic-acid strength", isCorrect: true },
      { text: "The inductive effect grows stronger with distance" },
      { text: "Alkyl groups are strongly electron-withdrawing" },
    ],
  },
  {
    stem: "Which factors stabilise a carbocation? Select all that apply.",
    type: "MULTI",
    topic: "Electronic Effects",
    explanation:
      "Increasing alkyl substitution, hyperconjugation, resonance/allylic delocalisation and adjacent lone-pair donation all stabilise a carbocation. Adjacent electron-withdrawing groups and less substitution destabilise it.",
    choices: [
      { text: "Increased alkyl substitution", isCorrect: true },
      { text: "Hyperconjugation from adjacent C–H bonds", isCorrect: true },
      { text: "Resonance (allylic or benzylic) delocalisation", isCorrect: true },
      { text: "Donation from an adjacent heteroatom lone pair", isCorrect: true },
      { text: "An adjacent strongly electron-withdrawing group" },
      { text: "Being a methyl rather than tertiary cation" },
    ],
  },
  {
    stem: "Which groups are electron-withdrawing when attached to a benzene ring? Select all that apply.",
    type: "MULTI",
    topic: "Electronic Effects",
    explanation:
      "Nitro, carbonyl, cyano and sulfonic-acid groups withdraw electron density (−I and/or −M), deactivating the ring. Methoxy and amino groups are electron-donating activators, not withdrawers.",
    choices: [
      { text: "The nitro group –NO₂", isCorrect: true },
      { text: "A carbonyl group –C(=O)–", isCorrect: true },
      { text: "The cyano group –C≡N", isCorrect: true },
      { text: "The sulfonic-acid group –SO₃H", isCorrect: true },
      { text: "The methoxy group –OCH₃" },
      { text: "The amino group –NH₂" },
    ],
  },
  {
    stem: "More highly substituted carbocations are more stable partly because they benefit from a greater number of hyperconjugative interactions.",
    type: "TRUE_FALSE",
    topic: "Electronic Effects",
    explanation:
      "Each adjacent C–H (or C–C) bond can overlap with the empty p orbital of the cation; a tertiary centre has more such neighbours than a secondary or primary centre, so it enjoys more hyperconjugation and greater stability.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "An electron-donating group increases the electron density of an aromatic ring and activates it toward electrophilic substitution.",
    type: "TRUE_FALSE",
    topic: "Electronic Effects",
    explanation:
      "Donor groups (+M/+I, e.g. –OH, –NH₂, –OR) raise ring electron density, especially at ortho and para positions, making the ring react faster with electrophiles and directing substitution to those positions.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "A C–Cl bond is polar because chlorine is:",
    topic: "Bond Polarity",
    explanation:
      "Chlorine is more electronegative than carbon, so it draws the shared electrons toward itself, giving carbon a partial positive (δ⁺) and chlorine a partial negative (δ⁻) charge — a polar covalent bond.",
    choices: [
      { text: "More electronegative than carbon", isCorrect: true },
      { text: "Less electronegative than carbon" },
      { text: "Identical in electronegativity to carbon" },
      { text: "A metal that ionises the bond completely" },
    ],
  },
  {
    stem: "Tetrachloromethane CCl₄ has four polar C–Cl bonds yet no net dipole moment because:",
    topic: "Molecular Polarity",
    explanation:
      "The four C–Cl bond dipoles point symmetrically to the corners of a tetrahedron and cancel, so the molecule is non-polar overall — polarity depends on both bond polarity and molecular shape.",
    choices: [
      { text: "Its tetrahedral symmetry cancels the bond dipoles", isCorrect: true },
      { text: "Its four C–Cl bonds are actually non-polar" },
      { text: "Chlorine is less electronegative than carbon" },
      { text: "It has an unpaired electron that cancels the dipole" },
    ],
  },
  {
    stem: "Which molecule is polar?",
    topic: "Molecular Polarity",
    explanation:
      "Dichloromethane CH₂Cl₂ is tetrahedral but unsymmetrical, so its bond dipoles do not cancel and it has a net dipole; CCl₄, CO₂ and symmetric molecules are non-polar despite polar bonds.",
    choices: [
      { text: "Dichloromethane, CH₂Cl₂", isCorrect: true },
      { text: "Tetrachloromethane, CCl₄" },
      { text: "Carbon dioxide, CO₂" },
      { text: "Methane, CH₄" },
    ],
  },
  {
    stem: "The only intermolecular force acting between non-polar alkane molecules is:",
    topic: "Intermolecular Forces",
    explanation:
      "Alkanes are non-polar, so they interact only through London dispersion (induced-dipole) forces; these strengthen with molecular size, which is why boiling point rises with chain length.",
    choices: [
      { text: "London dispersion forces", isCorrect: true },
      { text: "Hydrogen bonding" },
      { text: "Ionic attraction" },
      { text: "Permanent dipole–dipole forces" },
    ],
  },
  {
    stem: "Alcohols boil at much higher temperatures than alkanes of similar molar mass because alcohols can:",
    topic: "Physical Properties",
    explanation:
      "The O–H group lets alcohol molecules hydrogen-bond to one another, a much stronger interaction than the dispersion forces between alkanes, so more energy is needed to separate them into the gas phase.",
    choices: [
      { text: "Form hydrogen bonds between molecules", isCorrect: true },
      { text: "Form ionic bonds between molecules" },
      { text: "Interact only through weak dispersion forces" },
      { text: "Undergo covalent bonding between molecules" },
    ],
  },
  {
    stem: "Within a homologous series such as the straight-chain alkanes, boiling point increases with chain length because:",
    topic: "Physical Properties",
    explanation:
      "Longer chains have larger surface areas and more electrons, strengthening London dispersion forces; the greater intermolecular attraction raises the boiling point steadily along the series.",
    choices: [
      { text: "Larger molecules have stronger dispersion forces", isCorrect: true },
      { text: "Larger molecules have weaker dispersion forces" },
      { text: "Hydrogen bonding increases along the series" },
      { text: "The molecules become increasingly ionic" },
    ],
  },
  {
    stem: "For two isomeric alkanes, the more highly branched isomer generally has:",
    topic: "Physical Properties",
    explanation:
      "Branching makes a molecule more compact and roughly spherical, reducing surface contact between molecules and weakening dispersion forces, so the branched isomer boils at a lower temperature than its straight-chain isomer.",
    choices: [
      { text: "A lower boiling point than the straight-chain isomer", isCorrect: true },
      { text: "A higher boiling point than the straight-chain isomer" },
      { text: "An identical boiling point" },
      { text: "A boiling point that depends only on molar mass" },
    ],
  },
  {
    stem: "Following the principle 'like dissolves like', a small alcohol such as ethanol is:",
    topic: "Physical Properties",
    explanation:
      "Ethanol's –OH group hydrogen-bonds with water, so small alcohols are miscible with water; as the non-polar carbon chain lengthens, water solubility falls and solubility in non-polar solvents rises.",
    choices: [
      { text: "Water-miscible through hydrogen bonding", isCorrect: true },
      { text: "Completely insoluble in water at any ratio" },
      { text: "Soluble only in strongly ionic solvents" },
      { text: "Unable to interact with water at all" },
    ],
  },
  {
    stem: "Carboxylic acids often boil higher even than alcohols of similar mass because in the liquid they can form:",
    topic: "Physical Properties",
    explanation:
      "Carboxylic acids form hydrogen-bonded dimers (two O–H⋯O bonds between paired molecules), an especially strong association that raises their boiling points above comparable alcohols.",
    choices: [
      { text: "Hydrogen-bonded dimers (two O–H⋯O bonds)", isCorrect: true },
      { text: "Weak London dispersion forces only" },
      { text: "Ionic lattices in the liquid state" },
      { text: "No intermolecular hydrogen bonds at all" },
    ],
  },
  {
    stem: "A tertiary amine R₃N boils lower than a primary amine of similar mass mainly because the tertiary amine:",
    topic: "Physical Properties",
    explanation:
      "A tertiary amine has no N–H bond, so it cannot donate a hydrogen bond to another amine; primary amines have N–H bonds and hydrogen-bond to one another, giving them higher boiling points.",
    choices: [
      { text: "Has no N–H bond to donate in hydrogen bonding", isCorrect: true },
      { text: "Is far more polar than a primary amine" },
      { text: "Forms ionic bonds that a primary amine cannot" },
      { text: "Has a much larger molar mass" },
    ],
  },
  {
    stem: "According to Hückel's rule, a planar cyclic conjugated ring is aromatic if it contains:",
    topic: "Aromaticity",
    explanation:
      "Hückel's rule requires (4n + 2) π electrons in a planar, fully conjugated ring; benzene, with 6 π electrons (n = 1), is the archetype. Systems with 4n π electrons are antiaromatic instead.",
    choices: [
      { text: "(4n + 2) delocalised π electrons", isCorrect: true },
      { text: "4n delocalised π electrons" },
      { text: "Any even number of π electrons" },
      { text: "Exactly four π electrons in all cases" },
    ],
  },
  {
    stem: "Benzene is unusually stable compared with a hypothetical cyclohexatriene because of:",
    topic: "Aromaticity",
    explanation:
      "The six π electrons are fully delocalised over the ring, giving aromatic (resonance) stabilisation well beyond three isolated double bonds; this is reflected in benzene's lower-than-expected heat of hydrogenation.",
    choices: [
      { text: "Aromatic delocalisation of its six π electrons", isCorrect: true },
      { text: "Three fixed, isolated carbon–carbon double bonds" },
      { text: "sp³ hybridisation of its ring carbons" },
      { text: "The complete absence of any π electrons" },
    ],
  },
  {
    stem: "All six carbon atoms of benzene are:",
    topic: "Aromaticity",
    explanation:
      "Each benzene carbon is sp² hybridised and coplanar, contributing one electron in a p orbital perpendicular to the ring; these overlap into the delocalised aromatic π system above and below the plane.",
    choices: [
      { text: "sp² hybridised and coplanar", isCorrect: true },
      { text: "sp³ hybridised and puckered" },
      { text: "sp hybridised and linear" },
      { text: "A mixture of sp² and sp³ carbons" },
    ],
  },
  {
    stem: "The C–C bonds in benzene are all the same length, intermediate between a single and double bond, because:",
    topic: "Aromaticity",
    explanation:
      "Delocalisation of the π electrons over the whole ring makes every C–C bond equivalent, with a bond order of about 1.5; this uniform bonding is a direct structural signature of aromaticity.",
    choices: [
      { text: "The π electrons delocalise around the ring", isCorrect: true },
      { text: "The ring alternates fixed single and double bonds" },
      { text: "The ring carbons are all sp³ hybridised" },
      { text: "Hydrogen bonding equalises the bond lengths" },
    ],
  },
  {
    stem: "In a skeletal (bond-line) structure, an unlabelled vertex or line terminus represents:",
    topic: "Structure Representation",
    explanation:
      "In skeletal formulae each vertex or line end is a carbon atom, and the hydrogens needed to complete carbon's four bonds are implied; heteroatoms and their hydrogens are drawn explicitly.",
    choices: [
      { text: "A carbon with the implied hydrogens", isCorrect: true },
      { text: "An oxygen atom, unless labelled otherwise" },
      { text: "An empty position with no atom" },
      { text: "Always a hydrogen atom at that position" },
    ],
  },
  {
    stem: "A carbon atom bonded to three other carbon atoms is classified as:",
    topic: "Structure Representation",
    explanation:
      "Carbons are labelled by how many other carbons they bear: primary (1°), secondary (2°), tertiary (3°) or quaternary (4°); a carbon attached to three other carbons is tertiary.",
    choices: [
      { text: "Tertiary (3°)", isCorrect: true },
      { text: "Primary (1°)" },
      { text: "Secondary (2°)" },
      { text: "Quaternary (4°)" },
    ],
  },
  {
    stem: "A quaternary carbon is one that is bonded to:",
    topic: "Structure Representation",
    explanation:
      "A quaternary carbon is bonded to four other carbon atoms and therefore carries no hydrogen; such centres cannot be sites of many reactions that require a C–H bond, such as oxidation to a carbonyl.",
    choices: [
      { text: "Four other carbon atoms", isCorrect: true },
      { text: "Three other carbon atoms and one hydrogen" },
      { text: "Two carbons and two hydrogens" },
      { text: "One carbon and three hydrogens" },
    ],
  },
  {
    stem: "The empirical formula of a compound expresses:",
    topic: "Molecular Formulae",
    explanation:
      "The empirical formula gives the simplest whole-number ratio of atoms; the molecular formula (a whole-number multiple of it) gives the actual numbers. For example CH₂O is the empirical formula of glucose C₆H₁₂O₆.",
    choices: [
      { text: "The simplest whole-number ratio of atoms", isCorrect: true },
      { text: "The exact number of each atom in a molecule" },
      { text: "The three-dimensional shape of the molecule" },
      { text: "The arrangement of electrons in bonds" },
    ],
  },
  {
    stem: "The isopropyl group is best represented as:",
    topic: "IUPAC Nomenclature",
    explanation:
      "The isopropyl group is (CH₃)₂CH– , a propyl unit attached through its middle (secondary) carbon; the straight-chain isomer attached through an end carbon is the n-propyl group.",
    choices: [
      { text: "(CH₃)₂CH–", isCorrect: true },
      { text: "CH₃CH₂CH₂–" },
      { text: "(CH₃)₃C–" },
      { text: "CH₃CH₂–" },
    ],
  },
  {
    stem: "A saturated hydrocarbon is one that:",
    topic: "Saturation",
    explanation:
      "A saturated hydrocarbon contains only C–C single bonds (and C–H), holding the maximum number of hydrogens; unsaturated hydrocarbons contain one or more C=C or C≡C bonds (or rings) and fewer hydrogens.",
    choices: [
      { text: "Contains only carbon–carbon single bonds", isCorrect: true },
      { text: "Contains at least one carbon–carbon double bond" },
      { text: "Contains a benzene ring" },
      { text: "Contains at least one triple bond" },
    ],
  },
  {
    stem: "A cyclic alkane with the same number of carbons as an open-chain alkane has:",
    topic: "Saturation",
    explanation:
      "Forming a ring costs two hydrogens (one degree of unsaturation), so a cycloalkane CₙH₂ₙ has two fewer hydrogens than the corresponding acyclic alkane CₙH₂ₙ₊₂.",
    choices: [
      { text: "Two fewer hydrogen atoms than the open chain", isCorrect: true },
      { text: "The same number of hydrogen atoms" },
      { text: "Two more hydrogen atoms than the open-chain alkane" },
      { text: "Half as many hydrogen atoms as the open-chain alkane" },
    ],
  },
  {
    stem: "In the compound CH₃–CH=CH–C≡CH, the number of sp-hybridised carbons is:",
    topic: "Hybridisation & Bonding",
    explanation:
      "The two carbons of the terminal C≡C triple bond are sp hybridised; the two doubly bonded carbons are sp², and the CH₃ carbon is sp³ — giving exactly two sp carbons.",
    choices: [
      { text: "Two", isCorrect: true },
      { text: "One" },
      { text: "Three" },
      { text: "Four" },
    ],
  },
  {
    stem: "Which is the correct IUPAC name for the straight-chain alkene CH₂=CHCH₂CH₃?",
    topic: "IUPAC Nomenclature",
    explanation:
      "The four-carbon chain with a double bond starting at C1 is but-1-ene; numbering starts from the end nearer the double bond to give it the lowest locant.",
    choices: [
      { text: "but-1-ene", isCorrect: true },
      { text: "but-2-ene" },
      { text: "butane" },
      { text: "but-1-yne" },
    ],
  },
  {
    stem: "The prefix 'cyclo-' in a name such as cyclohexane indicates that the carbon atoms:",
    topic: "IUPAC Nomenclature",
    explanation:
      "The 'cyclo-' prefix denotes a ring: cyclohexane is a six-membered ring of CH₂ groups, formula C₆H₁₂, with one degree of unsaturation arising from the ring closure.",
    choices: [
      { text: "Are joined in a closed ring", isCorrect: true },
      { text: "Form a branched open chain" },
      { text: "Contain a triple bond" },
      { text: "Are all sp² hybridised" },
    ],
  },
  {
    stem: "The compound CH₃COCH₂CH₃ is correctly named:",
    topic: "IUPAC Nomenclature",
    explanation:
      "The four-carbon chain with a carbonyl at C2 is butan-2-one (methyl ethyl ketone); the -one suffix with locant 2 places the ketone carbonyl on the second carbon.",
    choices: [
      { text: "butan-2-one", isCorrect: true },
      { text: "butan-1-one" },
      { text: "butanal" },
      { text: "butan-2-ol" },
    ],
  },
  {
    stem: "In the molecule CH₃OCH₃ (dimethyl ether), the two carbon atoms are joined to oxygen by:",
    topic: "Functional Groups",
    explanation:
      "An ether has two carbon groups singly bonded to an oxygen (C–O–C); dimethyl ether has two C–O single bonds and no O–H, so unlike its isomer ethanol it cannot hydrogen-bond to itself.",
    choices: [
      { text: "Two C–O single bonds (an ether)", isCorrect: true },
      { text: "A single C=O carbonyl double bond" },
      { text: "A carbon–carbon bond through oxygen" },
      { text: "An O–H bond shared between them" },
    ],
  },
  {
    stem: "Electrons are described as delocalised in benzene, meaning the π electrons are:",
    topic: "Aromaticity",
    explanation:
      "Delocalised π electrons are not confined between two particular atoms but spread over all six ring carbons; this even distribution is what confers benzene's aromatic stability and equal bond lengths.",
    choices: [
      { text: "Spread evenly over all six ring carbons", isCorrect: true },
      { text: "Fixed in three separate, localised carbon–carbon double bonds" },
      { text: "Confined entirely to the σ-bond framework of the ring" },
      { text: "Removed from the ring, leaving it electron-deficient" },
    ],
  },
  {
    stem: "Which statement about the boiling points of the straight-chain alkanes methane, ethane and propane is correct?",
    topic: "Physical Properties",
    explanation:
      "Boiling point rises methane < ethane < propane as chain length and dispersion forces increase; all three are gases at room temperature, but propane liquefies most readily of the three.",
    choices: [
      { text: "Boiling point increases from methane to propane", isCorrect: true },
      { text: "Boiling point decreases from methane to propane" },
      { text: "All three have identical boiling points" },
      { text: "Propane boils lower than methane" },
    ],
  },
  {
    stem: "A molecule's molecular formula is always:",
    topic: "Molecular Formulae",
    explanation:
      "The molecular formula is a whole-number multiple of the empirical formula; the multiplier is found by comparing the empirical formula mass with the measured molar mass of the compound.",
    choices: [
      { text: "A whole-number multiple of its empirical formula", isCorrect: true },
      { text: "The same as its empirical formula in every case" },
      { text: "Independent of the empirical formula" },
      { text: "Always exactly twice the empirical formula" },
    ],
  },
  {
    stem: "Amines are basic because the nitrogen atom:",
    topic: "Functional Groups",
    explanation:
      "An amine nitrogen has a lone pair that can accept a proton (Brønsted base) or bond to an electrophile (Lewis base); this lone pair, in an sp³ orbital, is the origin of amine basicity and nucleophilicity.",
    choices: [
      { text: "Bears a lone pair that accepts a proton", isCorrect: true },
      { text: "Carries a full positive formal charge" },
      { text: "Has no lone pair available for bonding" },
      { text: "Forms a double bond to hydrogen" },
    ],
  },
  {
    stem: "The C=O bond of a carbonyl group is polarised so that:",
    topic: "Functional Groups",
    explanation:
      "Oxygen is more electronegative than carbon, so the carbonyl carbon is δ⁺ (electrophilic) and oxygen δ⁻; this polarisation is why nucleophiles attack the carbonyl carbon in addition and acyl substitution.",
    choices: [
      { text: "Carbon is δ⁺ and oxygen is δ⁻", isCorrect: true },
      { text: "Carbon is δ⁻ and oxygen is δ⁺" },
      { text: "Both atoms carry a full negative charge" },
      { text: "The bond is completely non-polar" },
    ],
  },
  {
    stem: "The degree of unsaturation of a straight-chain compound with formula C₄H₈ is:",
    topic: "Degrees of Unsaturation",
    explanation:
      "DoU = (2×4 + 2 − 8)/2 = 1, so C₄H₈ has one degree of unsaturation — a single double bond (e.g. butene) or one ring (e.g. cyclobutane or methylcyclopropane).",
    choices: [
      { text: "One", isCorrect: true },
      { text: "Two" },
      { text: "Zero" },
      { text: "Three" },
    ],
  },
  {
    stem: "Kekulé, condensed and skeletal formulae of a molecule all represent:",
    topic: "Structure Representation",
    explanation:
      "These are different drawing conventions for the same connectivity: Kekulé shows every bond, condensed groups atoms together (e.g. CH₃CH₂OH), and skeletal uses lines with implied carbons and hydrogens.",
    choices: [
      { text: "The same molecule at different levels of detail", isCorrect: true },
      { text: "Three different constitutional isomers of a molecule" },
      { text: "Three different resonance structures" },
      { text: "Three different conformations of one molecule" },
    ],
  },
];
