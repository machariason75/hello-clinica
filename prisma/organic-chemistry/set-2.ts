import type { Q } from "../_lib/qbank";

export const ORGANIC_SET_2: Q[] = [
  {
    stem: "A chiral molecule is one that:",
    topic: "Chirality",
    explanation:
      "A chiral molecule is non-superimposable on its mirror image; the commonest cause is a carbon bearing four different groups, though chirality can also arise from other kinds of asymmetry.",
    choices: [
      { text: "Is not superimposable on its mirror image", isCorrect: true },
      { text: "Is identical to its mirror image" },
      { text: "Contains at least one internal plane of symmetry" },
      { text: "Always contains a carbon–carbon double bond" },
    ],
  },
  {
    stem: "The most common type of stereocentre in organic molecules is a carbon bonded to:",
    topic: "Chirality",
    explanation:
      "A classic stereocentre (chirality centre) is a carbon with four different substituents; swapping any two of them gives the mirror-image configuration, so such a carbon generates a pair of enantiomers.",
    choices: [
      { text: "Four different groups", isCorrect: true },
      { text: "Two identical groups and two different groups" },
      { text: "Three hydrogen atoms and one other group" },
      { text: "Two carbon–carbon double bonds" },
    ],
  },
  {
    stem: "A molecule that possesses an internal plane of symmetry is:",
    topic: "Chirality",
    explanation:
      "An internal mirror plane makes a molecule superimposable on its mirror image, so it is achiral even if it contains stereocentres — the basis of meso compounds.",
    choices: [
      { text: "Achiral, matching its own mirror image", isCorrect: true },
      { text: "Always chiral regardless of other features" },
      { text: "Optically active in all cases" },
      { text: "Necessarily present as a pair of enantiomers" },
    ],
  },
  {
    stem: "How many stereoisomers are possible, at most, for a molecule with n stereocentres?",
    topic: "Chirality",
    explanation:
      "The maximum number of stereoisomers is 2ⁿ; the actual number can be fewer when meso forms exist (an internal symmetry makes two apparent stereoisomers identical).",
    choices: [
      { text: "2ⁿ", isCorrect: true },
      { text: "n²" },
      { text: "2n" },
      { text: "n!" },
    ],
  },
  {
    stem: "In the Cahn–Ingold–Prelog system, priority among the four groups at a stereocentre is assigned by:",
    topic: "Stereochemistry: R/S",
    explanation:
      "CIP priorities are set by atomic number at the first point of difference: the atom directly bonded with the highest atomic number ranks first, with ties broken by moving outward along the branches.",
    choices: [
      { text: "Atomic number at the first difference", isCorrect: true },
      { text: "Alphabetical order of the group names" },
      { text: "The size or bulk of each group" },
      { text: "The number of hydrogens on each group" },
    ],
  },
  {
    stem: "After ranking the four groups 1–4 (highest to lowest), the configuration is R if, with the lowest priority pointing away, the sequence 1→2→3 runs:",
    topic: "Stereochemistry: R/S",
    explanation:
      "With the lowest-priority group directed away from the viewer, a clockwise 1→2→3 sequence is R (rectus) and an anticlockwise sequence is S (sinister).",
    choices: [
      { text: "Clockwise", isCorrect: true },
      { text: "Anticlockwise" },
      { text: "From front to back" },
      { text: "In a straight line" },
    ],
  },
  {
    stem: "When the lowest-priority group at a stereocentre points toward the viewer rather than away, the assignment obtained must be:",
    topic: "Stereochemistry: R/S",
    explanation:
      "If the lowest-priority group faces the viewer, the apparent rotation is reversed, so the direct reading must be inverted (an apparent R is actually S, and vice versa).",
    choices: [
      { text: "Reversed to give the correct descriptor", isCorrect: true },
      { text: "Taken directly as read, without change" },
      { text: "Discarded, as no assignment is possible" },
      { text: "Always R by convention" },
    ],
  },
  {
    stem: "For the groups –OH, –CH₃, –H and –COOH on a stereocentre, the CIP priority order (highest first) is:",
    topic: "Stereochemistry: R/S",
    explanation:
      "By first-atom atomic number, oxygen of –OH outranks the carboxyl carbon, which (bonded to O,O,O) outranks methyl carbon, and H is lowest: –OH > –COOH > –CH₃ > –H.",
    choices: [
      { text: "–OH > –COOH > –CH₃ > –H", isCorrect: true },
      { text: "–COOH > –OH > –CH₃ > –H" },
      { text: "–CH₃ > –OH > –COOH > –H" },
      { text: "–H > –CH₃ > –COOH > –OH" },
    ],
  },
  {
    stem: "When comparing two carbon substituents of equal first atom, CIP rules break the tie by:",
    topic: "Stereochemistry: R/S",
    explanation:
      "If the first atoms tie, one compares the sets of atoms attached to them, moving outward until a difference is found; a double bond is treated as a duplicated atom at each end.",
    choices: [
      { text: "Comparing atoms further out on each branch", isCorrect: true },
      { text: "Choosing whichever branch is drawn on the left" },
      { text: "Counting the total number of atoms in each group" },
      { text: "Ranking by the mass of the whole substituent" },
    ],
  },
  {
    stem: "In CIP analysis, a doubly bonded atom (as in C=O) is treated as though the carbon is bonded to:",
    topic: "Stereochemistry: R/S",
    explanation:
      "Each atom of a double bond is duplicated: C=O is treated as a carbon bonded to two oxygens (and the oxygen to two carbons), which raises the priority of doubly bonded carbons appropriately.",
    choices: [
      { text: "Two such atoms (a duplicated oxygen)", isCorrect: true },
      { text: "Half of one such atom" },
      { text: "No additional atoms at all" },
      { text: "A hydrogen atom in place of the double bond" },
    ],
  },
  {
    stem: "Which statements about chirality and stereocentres are correct? Select all that apply.",
    type: "MULTI",
    topic: "Chirality",
    explanation:
      "A chiral molecule is non-superimposable on its mirror image; a carbon with four different groups is a stereocentre; an internal mirror plane makes a molecule achiral; the maximum stereoisomer count is 2ⁿ. A chiral molecule is not identical to its mirror image.",
    choices: [
      { text: "A chiral molecule is non-superimposable on its mirror image", isCorrect: true },
      { text: "A carbon with four different groups is a stereocentre", isCorrect: true },
      { text: "An internal mirror plane makes a molecule achiral", isCorrect: true },
      { text: "At most 2ⁿ stereoisomers arise from n stereocentres", isCorrect: true },
      { text: "A chiral molecule is identical to its mirror image" },
      { text: "Every molecule with a stereocentre must be achiral" },
    ],
  },
  {
    stem: "Which statements about CIP (R/S) assignment are correct? Select all that apply.",
    type: "MULTI",
    topic: "Stereochemistry: R/S",
    explanation:
      "Priority is by atomic number at the first difference; the lowest group is oriented away; clockwise 1→2→3 is R; a double-bonded atom is duplicated. Priorities are not set alphabetically.",
    choices: [
      { text: "Priority is assigned by atomic number", isCorrect: true },
      { text: "The lowest-priority group is oriented away from the viewer", isCorrect: true },
      { text: "A clockwise 1→2→3 sequence denotes R", isCorrect: true },
      { text: "A double bond is treated as a duplicated atom", isCorrect: true },
      { text: "Priorities are assigned alphabetically by group name" },
      { text: "An anticlockwise 1→2→3 sequence denotes R" },
    ],
  },
  {
    stem: "Interchanging any two groups at a stereocentre converts a molecule into its mirror-image configuration.",
    type: "TRUE_FALSE",
    topic: "Stereochemistry: R/S",
    explanation:
      "A single swap of two substituents at a stereocentre inverts its configuration (R↔S); an odd number of swaps gives the enantiomeric arrangement, while an even number returns the original.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "A carbon atom bearing two identical substituents cannot be a stereocentre.",
    type: "TRUE_FALSE",
    topic: "Chirality",
    explanation:
      "A stereocentre requires four different groups; if two are identical, the mirror image is superimposable at that carbon, so no pair of configurations (R/S) exists there.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Enantiomers are stereoisomers that are:",
    topic: "Enantiomers & Diastereomers",
    explanation:
      "Enantiomers are non-superimposable mirror images; they share identical scalar physical properties (melting point, solubility) and differ only in the sign of optical rotation and in reactions with other chiral species.",
    choices: [
      { text: "Non-superimposable mirror images of each other", isCorrect: true },
      { text: "Readily superimposable mirror images" },
      { text: "Stereoisomers that are not mirror images" },
      { text: "Simply two conformations of the same molecule" },
    ],
  },
  {
    stem: "Diastereomers are stereoisomers that:",
    topic: "Enantiomers & Diastereomers",
    explanation:
      "Diastereomers are stereoisomers that are not mirror images; unlike enantiomers they have different physical properties (melting point, solubility, etc.), which allows them to be separated by ordinary means.",
    choices: [
      { text: "Are not mirror images", isCorrect: true },
      { text: "Are non-superimposable mirror-image forms" },
      { text: "Are always completely identical molecules" },
      { text: "Differ only by rotation about a single bond" },
    ],
  },
  {
    stem: "A meso compound is one that:",
    topic: "Meso Compounds",
    explanation:
      "A meso compound contains stereocentres but also an internal mirror plane, making the whole molecule achiral and optically inactive despite the stereocentres — e.g. meso-tartaric acid.",
    choices: [
      { text: "Has stereocentres yet is achiral overall", isCorrect: true },
      { text: "Contains no stereocentres at all" },
      { text: "Is a chiral molecule with a large rotation" },
      { text: "Is merely one enantiomer of a racemic pair" },
    ],
  },
  {
    stem: "Two diastereomers differ from a pair of enantiomers in that diastereomers:",
    topic: "Enantiomers & Diastereomers",
    explanation:
      "Because diastereomers are not mirror images, they have distinct physical properties and can be separated by distillation, crystallisation or ordinary chromatography; enantiomers cannot be separated this way.",
    choices: [
      { text: "Have different properties, separable conventionally", isCorrect: true },
      { text: "Have identical physical properties in every respect" },
      { text: "Cannot exist for molecules with two stereocentres" },
      { text: "Are always optically inactive in every case" },
    ],
  },
  {
    stem: "For a molecule with two stereocentres, the (R,R) and (S,S) forms are related as:",
    topic: "Enantiomers & Diastereomers",
    explanation:
      "(R,R) and (S,S) are mirror images of each other, hence enantiomers; each is a diastereomer of the (R,S)/(S,R) forms. When an internal mirror plane exists, (R,S) becomes a single meso compound.",
    choices: [
      { text: "Enantiomers", isCorrect: true },
      { text: "Diastereomers" },
      { text: "Identical molecules" },
      { text: "Constitutional isomers" },
    ],
  },
  {
    stem: "An optically active substance is one that:",
    topic: "Optical Activity",
    explanation:
      "An optically active sample rotates the plane of plane-polarised light; this requires a chiral substance present in excess of its mirror image, as in a single enantiomer.",
    choices: [
      { text: "Rotates the plane of plane-polarised light", isCorrect: true },
      { text: "Absorbs all visible light passing through it" },
      { text: "Emits visible light when it is illuminated" },
      { text: "Cannot interact with polarised light at all" },
    ],
  },
  {
    stem: "A dextrorotatory sample rotates plane-polarised light:",
    topic: "Optical Activity",
    explanation:
      "Dextrorotatory (+) samples rotate the plane clockwise (to the right) as viewed toward the source; laevorotatory (−) samples rotate it anticlockwise. The sign is measured, not predictable from R/S.",
    choices: [
      { text: "Clockwise (to the right)", isCorrect: true },
      { text: "Anticlockwise (to the left)" },
      { text: "Through exactly 90° in every case" },
      { text: "Not at all under any conditions" },
    ],
  },
  {
    stem: "The specific rotation [α] of a compound depends on the substance, solvent, temperature, wavelength and:",
    topic: "Optical Activity",
    explanation:
      "Observed rotation depends on concentration and path length; specific rotation normalises these out ([α] = α/(c·l)), giving a characteristic constant for a pure substance under stated conditions.",
    choices: [
      { text: "Sample concentration and path length", isCorrect: true },
      { text: "The colour of the polarimeter tube" },
      { text: "The mass of the polarimeter" },
      { text: "The atmospheric pressure only" },
    ],
  },
  {
    stem: "The sign of optical rotation (+ or −) and the CIP descriptor (R or S) are related how?",
    topic: "Optical Activity",
    explanation:
      "There is no fixed correlation: the direction a molecule rotates light must be measured experimentally and cannot be deduced from whether it is R or S. Both labels simply describe the same molecule differently.",
    choices: [
      { text: "They are independent; rotation is measured", isCorrect: true },
      { text: "The R descriptor always corresponds to (+) rotation" },
      { text: "The S descriptor always corresponds to (+) rotation" },
      { text: "They are always exactly opposite in sign" },
    ],
  },
  {
    stem: "A racemic mixture (racemate) is:",
    topic: "Racemates & Resolution",
    explanation:
      "A racemate is an equimolar (50:50) mixture of two enantiomers; the equal and opposite rotations cancel, so the mixture is optically inactive even though each component is chiral.",
    choices: [
      { text: "A 50:50, optically inactive enantiomer mixture", isCorrect: true },
      { text: "A single pure enantiomer on its own" },
      { text: "A mixture of diastereomers in any ratio" },
      { text: "Simply a meso compound under another name" },
    ],
  },
  {
    stem: "Resolution of a racemate refers to:",
    topic: "Racemates & Resolution",
    explanation:
      "Resolution is the separation of a racemate into its individual enantiomers, classically by reacting with a single chiral resolving agent to form separable diastereomeric salts, then regenerating each enantiomer.",
    choices: [
      { text: "Separating a racemate into its enantiomers", isCorrect: true },
      { text: "Converting one enantiomer into the other" },
      { text: "Combining two enantiomers into a meso form" },
      { text: "Deliberately racemising a pure enantiomer sample" },
    ],
  },
  {
    stem: "Classical resolution often works by converting enantiomers into diastereomers because diastereomers:",
    topic: "Racemates & Resolution",
    explanation:
      "Reacting a racemic acid with a single enantiomer of a chiral base gives two diastereomeric salts; unlike enantiomers, these have different solubilities and can be separated by crystallisation.",
    choices: [
      { text: "Differ in properties, unlike enantiomers", isCorrect: true },
      { text: "Have identical solubilities, easing separation" },
      { text: "Are optically inactive, making them easy to handle" },
      { text: "Cannot be separated by any physical means" },
    ],
  },
  {
    stem: "A reaction that produces a new stereocentre from achiral starting materials, with no chiral influence, gives:",
    topic: "Racemates & Resolution",
    explanation:
      "With no chiral reagent, catalyst or environment, the two faces of a planar intermediate react equally, so both enantiomers form in equal amounts — a racemic product that is optically inactive.",
    choices: [
      { text: "An equal, racemic mix of enantiomers", isCorrect: true },
      { text: "A single pure enantiomer of one handedness" },
      { text: "A meso compound as the sole product" },
      { text: "An optically active product of one handedness" },
    ],
  },
  {
    stem: "Which statements about enantiomers, diastereomers and meso compounds are correct? Select all that apply.",
    type: "MULTI",
    topic: "Enantiomers & Diastereomers",
    explanation:
      "Enantiomers are non-superimposable mirror images with identical scalar properties; diastereomers are non-mirror-image stereoisomers with different properties; meso compounds have stereocentres but are achiral. Enantiomers are not separable by ordinary distillation.",
    choices: [
      { text: "Enantiomers are non-superimposable mirror images", isCorrect: true },
      { text: "Diastereomers have different physical properties", isCorrect: true },
      { text: "A meso compound has stereocentres but is achiral", isCorrect: true },
      { text: "(R,R) and (S,S) of a molecule are enantiomers", isCorrect: true },
      { text: "Enantiomers differ in melting point and are easily distilled apart" },
      { text: "Diastereomers are always mirror images" },
    ],
  },
  {
    stem: "Which statements about optical activity are correct? Select all that apply.",
    type: "MULTI",
    topic: "Optical Activity",
    explanation:
      "Optically active samples rotate plane-polarised light; a racemate is inactive; the sign of rotation is measured, not deduced from R/S; specific rotation normalises concentration and path length. A meso compound is not optically active.",
    choices: [
      { text: "A single enantiomer rotates plane-polarised light", isCorrect: true },
      { text: "A racemic mixture is optically inactive", isCorrect: true },
      { text: "The sign of rotation must be determined experimentally", isCorrect: true },
      { text: "Specific rotation removes the dependence on concentration and path length", isCorrect: true },
      { text: "A meso compound is strongly optically active" },
      { text: "R configuration always gives (+) rotation" },
    ],
  },
  {
    stem: "A racemic mixture shows no net optical rotation because the rotations of its two enantiomers are equal and opposite.",
    type: "TRUE_FALSE",
    topic: "Racemates & Resolution",
    explanation:
      "Each enantiomer rotates polarised light equally but in opposite directions; in a 50:50 mixture these cancel exactly, so the racemate is optically inactive despite consisting entirely of chiral molecules.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Enantiomers can behave differently in a chiral environment, such as toward a biological receptor.",
    type: "TRUE_FALSE",
    topic: "Enantiomers & Diastereomers",
    explanation:
      "Although enantiomers have identical scalar properties, a chiral environment (an enzyme, receptor or chiral reagent) distinguishes them, so the two enantiomers of a drug can differ sharply in biological activity.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Conformational isomers (conformers) of a molecule interconvert by:",
    topic: "Conformational Analysis",
    explanation:
      "Conformers differ only by rotation about single (σ) bonds; because no bonds break, they interconvert rapidly at room temperature and cannot normally be isolated as separate compounds.",
    choices: [
      { text: "Rotation about single bonds only", isCorrect: true },
      { text: "Breaking and then reforming the σ bonds" },
      { text: "Inversion of configuration at a stereocentre" },
      { text: "Breaking a π bond within the molecule" },
    ],
  },
  {
    stem: "For ethane, the lowest-energy conformation is the:",
    topic: "Conformational Analysis: Ethane",
    explanation:
      "The staggered conformation of ethane places the C–H bonds of the two carbons as far apart as possible (60° dihedral), minimising torsional strain; the eclipsed form is a higher-energy maximum.",
    choices: [
      { text: "Staggered conformation", isCorrect: true },
      { text: "Eclipsed conformation" },
      { text: "Gauche conformation" },
      { text: "Anti-periplanar conformation only" },
    ],
  },
  {
    stem: "The energy barrier to rotation in ethane arises mainly from:",
    topic: "Conformational Analysis: Ethane",
    explanation:
      "The barrier (~12 kJ/mol) is torsional strain: the eclipsed conformation suffers unfavourable overlap/repulsion between the C–H bonding electrons on adjacent carbons, raising its energy above the staggered form.",
    choices: [
      { text: "Torsional strain in the eclipsed form", isCorrect: true },
      { text: "Severe steric clash of large groups" },
      { text: "Breaking of the carbon–carbon σ bond" },
      { text: "Angle strain in the tetrahedral carbons" },
    ],
  },
  {
    stem: "In a Newman projection, the front and back carbons are represented by:",
    topic: "Newman Projections",
    explanation:
      "A Newman projection views a C–C bond end-on: the front carbon is a dot with three bonds meeting at the centre, and the back carbon is a circle with three bonds emerging from its edge.",
    choices: [
      { text: "A dot (front) and a circle (back)", isCorrect: true },
      { text: "Two overlapping squares" },
      { text: "A single straight line only" },
      { text: "Two circles of equal size" },
    ],
  },
  {
    stem: "For butane (viewed along the C2–C3 bond), the most stable conformation is the:",
    topic: "Conformational Analysis: Butane",
    explanation:
      "The anti conformation places the two methyl groups 180° apart, minimising steric strain; it is lower in energy than the gauche (60°) form and far below the eclipsed conformations.",
    choices: [
      { text: "Anti conformation, with methyls 180° apart", isCorrect: true },
      { text: "Gauche conformation, with methyls 60° apart" },
      { text: "Fully eclipsed conformation" },
      { text: "Conformation with methyls eclipsing each other" },
    ],
  },
  {
    stem: "The gauche conformation of butane is higher in energy than the anti because of:",
    topic: "Conformational Analysis: Butane",
    explanation:
      "In the gauche form the two methyl groups are only 60° apart and their electron clouds crowd each other, producing steric strain that raises its energy about 3.8 kJ/mol above the anti conformation.",
    choices: [
      { text: "Steric strain between the two nearby methyl groups", isCorrect: true },
      { text: "Torsional strain absent from the anti form" },
      { text: "Angle strain unique to the gauche form" },
      { text: "Breaking of a carbon–hydrogen bond" },
    ],
  },
  {
    stem: "The highest-energy conformation of butane about the C2–C3 bond is the one in which:",
    topic: "Conformational Analysis: Butane",
    explanation:
      "The global maximum is the fully eclipsed (syn-periplanar) conformation, where the two methyl groups eclipse each other (0° dihedral), combining maximal torsional and steric strain.",
    choices: [
      { text: "The two methyl groups eclipse each other", isCorrect: true },
      { text: "The methyl groups are anti (180° apart)" },
      { text: "The methyl groups are gauche (60° apart)" },
      { text: "Every bond is perfectly staggered" },
    ],
  },
  {
    stem: "In a Fischer projection, horizontal lines represent bonds pointing:",
    topic: "Fischer Projections",
    explanation:
      "By convention a Fischer projection places horizontal bonds toward the viewer (wedges) and vertical bonds away; the central carbon is a stereocentre at each cross, aiding sugar and amino-acid depiction.",
    choices: [
      { text: "Toward the viewer (out of the plane)", isCorrect: true },
      { text: "Away from the viewer (behind the plane)" },
      { text: "Exactly in the plane of the paper" },
      { text: "In no consistent direction" },
    ],
  },
  {
    stem: "Rotating a Fischer projection by 90° in the plane of the paper:",
    topic: "Fischer Projections",
    explanation:
      "A 90° rotation swaps horizontal and vertical bonds and therefore inverts the apparent configuration, giving the enantiomer; only a 180° rotation preserves the configuration.",
    choices: [
      { text: "Inverts the configuration, giving the enantiomer", isCorrect: true },
      { text: "Leaves the configuration unchanged" },
      { text: "Converts it into a constitutional isomer" },
      { text: "Has no defined effect on the structure" },
    ],
  },
  {
    stem: "Torsional strain is best defined as the resistance to:",
    topic: "Conformational Analysis",
    explanation:
      "Torsional (eclipsing) strain is the increase in energy when bonds on adjacent atoms are forced toward an eclipsed (0°) rather than staggered (60°) dihedral arrangement, from unfavourable bond–bond interactions.",
    choices: [
      { text: "Rotation that eclipses bonds on adjacent atoms", isCorrect: true },
      { text: "Compression of a bond angle below its ideal value" },
      { text: "Stretching of a bond beyond its natural length" },
      { text: "Bringing large groups into direct contact" },
    ],
  },
  {
    stem: "Which statements about ethane and butane conformations are correct? Select all that apply.",
    type: "MULTI",
    topic: "Conformational Analysis",
    explanation:
      "Conformers interconvert by single-bond rotation; ethane's staggered form is lowest; butane's anti form is most stable and its fully eclipsed form least; gauche strain is steric. The eclipsed ethane form is not the most stable.",
    choices: [
      { text: "Conformers interconvert by rotation about single bonds", isCorrect: true },
      { text: "Staggered ethane is lower in energy than eclipsed ethane", isCorrect: true },
      { text: "Anti-butane is the most stable conformation about C2–C3", isCorrect: true },
      { text: "Gauche-butane suffers steric strain between the methyls", isCorrect: true },
      { text: "Eclipsed ethane is the lowest-energy conformation" },
      { text: "Fully eclipsed butane is the most stable conformation" },
    ],
  },
  {
    stem: "Which statements about Newman and Fischer projections are correct? Select all that apply.",
    type: "MULTI",
    topic: "Newman Projections",
    explanation:
      "A Newman projection views a bond end-on (dot front, circle back); staggered shows 60° dihedrals. In a Fischer projection horizontals come forward and a 90° in-plane rotation inverts configuration. A Newman does not require breaking bonds.",
    choices: [
      { text: "A Newman projection uses a dot for the front and a circle for the back carbon", isCorrect: true },
      { text: "A staggered Newman projection shows 60° dihedral angles", isCorrect: true },
      { text: "Fischer horizontal bonds point toward the viewer", isCorrect: true },
      { text: "A 90° in-plane rotation of a Fischer projection inverts configuration", isCorrect: true },
      { text: "A Newman projection requires a bond to be broken" },
      { text: "Fischer vertical bonds point toward the viewer" },
    ],
  },
  {
    stem: "Different conformations of a molecule cannot usually be isolated as separate compounds at room temperature.",
    type: "TRUE_FALSE",
    topic: "Conformational Analysis",
    explanation:
      "The barriers to rotation about single bonds are low (a few to ~20 kJ/mol), so conformers interconvert billions of times a second at room temperature and exist as a rapidly equilibrating mixture, not isolable isomers.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The most stable conformation of cyclohexane is the:",
    topic: "Cyclohexane Conformations",
    explanation:
      "The chair conformation lets every carbon adopt near-tetrahedral angles with all bonds staggered, minimising both angle and torsional strain; it is far more stable than the boat or twist-boat forms.",
    choices: [
      { text: "Chair conformation", isCorrect: true },
      { text: "Boat conformation" },
      { text: "A flat, planar hexagonal ring" },
      { text: "The half-chair conformation" },
    ],
  },
  {
    stem: "In chair cyclohexane, each carbon bears one axial and one equatorial hydrogen; axial bonds point:",
    topic: "Cyclohexane Conformations",
    explanation:
      "Axial bonds point straight up or down, parallel to the ring's principal axis, alternating up/down around the ring; equatorial bonds point outward, roughly around the ring's 'equator'.",
    choices: [
      { text: "Vertically, parallel to the ring axis", isCorrect: true },
      { text: "Outward, around the equator of the ring" },
      { text: "Directly at the ring centre" },
      { text: "Randomly in all directions" },
    ],
  },
  {
    stem: "A ring flip of chair cyclohexane converts:",
    topic: "Cyclohexane Conformations",
    explanation:
      "The chair-to-chair ring flip interconverts the two chair forms, turning every axial substituent equatorial and every equatorial substituent axial, while preserving cis/trans relationships.",
    choices: [
      { text: "Axial groups to equatorial and vice versa", isCorrect: true },
      { text: "Cis substituents into trans substituents" },
      { text: "The chair form into a flat, planar ring" },
      { text: "One constitutional isomer into a different one" },
    ],
  },
  {
    stem: "A bulky substituent such as a tert-butyl group on a cyclohexane ring strongly prefers the:",
    topic: "Cyclohexane Conformations",
    explanation:
      "A large group prefers the equatorial position to avoid 1,3-diaxial steric interactions; tert-butyl is so bulky that it essentially locks the ring in the chair with the group equatorial.",
    choices: [
      { text: "Equatorial site, avoiding 1,3-diaxial strain", isCorrect: true },
      { text: "Axial position, maximising 1,3-diaxial contacts" },
      { text: "The boat conformation almost exclusively" },
      { text: "A position pointing at the ring centre" },
    ],
  },
  {
    stem: "The strain that destabilises an axial substituent on cyclohexane is called:",
    topic: "Cyclohexane Conformations",
    explanation:
      "An axial group clashes with the two other axial hydrogens/groups on the same side of the ring (the 1,3-diaxial positions); this 1,3-diaxial (steric) strain is relieved by placing the group equatorial.",
    choices: [
      { text: "1,3-Diaxial strain", isCorrect: true },
      { text: "Angle strain from distorted bond angles" },
      { text: "Torsional strain from eclipsing only" },
      { text: "Aromatic ring-current strain" },
    ],
  },
  {
    stem: "For a monosubstituted cyclohexane, the equatorial and axial chair forms are related as:",
    topic: "Cyclohexane Conformations",
    explanation:
      "The two chairs are conformers in equilibrium, interconverting by a ring flip; the equatorial-substituent chair predominates because it is lower in energy, but both are the same compound.",
    choices: [
      { text: "Conformers in equilibrium via a ring flip", isCorrect: true },
      { text: "Distinct configurational isomers that cannot interconvert" },
      { text: "Enantiomers of each other" },
      { text: "Constitutional isomers" },
    ],
  },
  {
    stem: "Cyclopropane is highly strained mainly because its 60° C–C–C bond angles cause:",
    topic: "Ring Strain",
    explanation:
      "The 60° internal angles force the sp³ carbons far from the ideal 109.5°, producing severe angle (Baeyer) strain; the bent 'banana' bonds also add torsional strain, making cyclopropane very reactive.",
    choices: [
      { text: "Severe angle strain from compressed angles", isCorrect: true },
      { text: "No strain, since the ring is perfectly relaxed" },
      { text: "Aromatic stabilisation of the small ring" },
      { text: "Strong hydrogen bonding across the small ring" },
    ],
  },
  {
    stem: "Which cycloalkane is essentially strain-free and therefore especially stable?",
    topic: "Ring Strain",
    explanation:
      "Cyclohexane, adopting the chair, has near-ideal tetrahedral angles and fully staggered bonds, so it is virtually free of angle and torsional strain — the most stable common ring size.",
    choices: [
      { text: "Cyclohexane", isCorrect: true },
      { text: "Cyclopropane" },
      { text: "Cyclobutane" },
      { text: "Cyclopropene" },
    ],
  },
  {
    stem: "Cyclobutane puckers slightly from planarity in order to:",
    topic: "Ring Strain",
    explanation:
      "A slight pucker (butterfly bend) relieves some of the eclipsing (torsional) strain that a flat four-membered ring would suffer, at the cost of a little extra angle strain — a net stabilisation.",
    choices: [
      { text: "Reduce torsional strain between C–H bonds", isCorrect: true },
      { text: "Increase angle strain deliberately" },
      { text: "Become an aromatic ring system" },
      { text: "Deliberately maximise 1,3-diaxial contacts" },
    ],
  },
  {
    stem: "Geometric (cis/trans, E/Z) isomerism about a C=C double bond arises because:",
    topic: "E/Z Alkene Stereochemistry",
    explanation:
      "The π bond prevents rotation about the double bond, so substituents are locked on the same or opposite sides; this fixed geometry gives distinct cis/trans (E/Z) isomers, provided each carbon bears two different groups.",
    choices: [
      { text: "Restricted rotation fixes substituent positions", isCorrect: true },
      { text: "Free rotation lets substituents exchange positions" },
      { text: "The double bond readily breaks and then reforms" },
      { text: "The alkene carbons are sp³ hybridised" },
    ],
  },
  {
    stem: "Using CIP priorities, an alkene is designated Z when the two higher-priority groups are:",
    topic: "E/Z Alkene Stereochemistry",
    explanation:
      "Z (zusammen) means the higher-priority group on each double-bond carbon lies on the same side; E (entgegen) means they lie on opposite sides. Priorities are set by the same atomic-number rules as R/S.",
    choices: [
      { text: "On the same side of the double bond", isCorrect: true },
      { text: "On opposite sides of the double bond" },
      { text: "Both pointing away from the viewer" },
      { text: "Always the two hydrogen atoms" },
    ],
  },
  {
    stem: "A necessary condition for a carbon–carbon double bond to show E/Z isomerism is that:",
    topic: "E/Z Alkene Stereochemistry",
    explanation:
      "Each of the two doubly bonded carbons must carry two different groups; if either carbon bears two identical substituents, the 'same side' and 'opposite side' arrangements become identical and no isomerism exists.",
    choices: [
      { text: "Each doubly bonded carbon bears two different groups", isCorrect: true },
      { text: "At least one carbon bears two identical groups" },
      { text: "Both carbons are bonded only to hydrogen" },
      { text: "The molecule also contains a stereocentre" },
    ],
  },
  {
    stem: "Which alkene can exist as E and Z isomers?",
    topic: "E/Z Alkene Stereochemistry",
    explanation:
      "But-2-ene (CH₃CH=CHCH₃) has two different groups (CH₃ and H) on each double-bond carbon, so it shows E/Z isomerism; but-1-ene and 2-methylpropene have a carbon bearing two identical groups and cannot.",
    choices: [
      { text: "But-2-ene, CH₃CH=CHCH₃", isCorrect: true },
      { text: "But-1-ene, CH₂=CHCH₂CH₃" },
      { text: "2-methylpropene, (CH₃)₂C=CH₂" },
      { text: "Ethene, CH₂=CH₂" },
    ],
  },
  {
    stem: "In many simple alkenes the trans (E) isomer is more stable than the cis (Z) isomer because the trans form has:",
    topic: "E/Z Alkene Stereochemistry",
    explanation:
      "In the trans isomer the two larger groups sit on opposite sides, minimising steric strain; in the cis isomer they crowd each other on the same side, raising its energy relative to the trans form.",
    choices: [
      { text: "Less steric strain between large groups", isCorrect: true },
      { text: "More steric strain between its substituents" },
      { text: "A broken π bond that allows it to relax" },
      { text: "Aromatic stabilisation that cis lacks" },
    ],
  },
  {
    stem: "Which statements about chair cyclohexane are correct? Select all that apply.",
    type: "MULTI",
    topic: "Cyclohexane Conformations",
    explanation:
      "The chair is most stable, with near-tetrahedral angles and staggered bonds; a ring flip interconverts axial and equatorial; bulky groups prefer equatorial to avoid 1,3-diaxial strain. The chair is not planar.",
    choices: [
      { text: "The chair is the most stable conformation", isCorrect: true },
      { text: "A ring flip exchanges axial and equatorial positions", isCorrect: true },
      { text: "Bulky substituents prefer the equatorial position", isCorrect: true },
      { text: "Axial groups suffer 1,3-diaxial interactions", isCorrect: true },
      { text: "The chair conformation is planar" },
      { text: "Bulky groups prefer the axial position" },
    ],
  },
  {
    stem: "Which statements about ring strain in cycloalkanes are correct? Select all that apply.",
    type: "MULTI",
    topic: "Ring Strain",
    explanation:
      "Cyclopropane and cyclobutane are strained (angle and torsional); cyclohexane is essentially strain-free in the chair; small rings are more reactive. Cyclopropane is not strain-free.",
    choices: [
      { text: "Cyclopropane suffers severe angle strain", isCorrect: true },
      { text: "Cyclobutane puckers to relieve torsional strain", isCorrect: true },
      { text: "Cyclohexane is essentially strain-free in the chair", isCorrect: true },
      { text: "Strained small rings tend to be more reactive", isCorrect: true },
      { text: "Cyclopropane is a strain-free, unreactive ring" },
      { text: "Cyclohexane must be planar to avoid strain" },
    ],
  },
  {
    stem: "Which statements about E/Z (cis/trans) alkene isomerism are correct? Select all that apply.",
    type: "MULTI",
    topic: "E/Z Alkene Stereochemistry",
    explanation:
      "It arises from restricted rotation about the C=C; each carbon needs two different groups; Z has higher priorities on the same side; trans is often more stable. Free rotation about C=C is not possible.",
    choices: [
      { text: "It results from restricted rotation about the double bond", isCorrect: true },
      { text: "Each double-bond carbon must bear two different groups", isCorrect: true },
      { text: "Z means the higher-priority groups are on the same side", isCorrect: true },
      { text: "The trans (E) isomer is often the more stable", isCorrect: true },
      { text: "There is free rotation about a carbon–carbon double bond" },
      { text: "A carbon bearing two identical groups still gives E/Z isomers" },
    ],
  },
  {
    stem: "Which molecules are chiral? Select all that apply.",
    type: "MULTI",
    topic: "Chirality",
    explanation:
      "A carbon with four different groups (e.g. bromochlorofluoromethane, butan-2-ol, an α-amino acid other than glycine) is chiral; a molecule with an internal mirror plane or a carbon with duplicate groups is achiral.",
    choices: [
      { text: "CHFClBr (bromochlorofluoromethane)", isCorrect: true },
      { text: "Butan-2-ol", isCorrect: true },
      { text: "Alanine (2-aminopropanoic acid)", isCorrect: true },
      { text: "3-methylhexane", isCorrect: true },
      { text: "Propan-2-ol" },
      { text: "Dichloromethane, CH₂Cl₂" },
    ],
  },
  {
    stem: "A cis-1,2-disubstituted cyclohexane cannot place both substituents equatorial in the same chair conformation.",
    type: "TRUE_FALSE",
    topic: "Cyclohexane Conformations",
    explanation:
      "For a cis-1,2 arrangement, one substituent must be axial and the other equatorial in either chair; only the trans-1,2 isomer can achieve the doubly equatorial (diequatorial) arrangement.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The cis and trans isomers of but-2-ene are diastereomers, not enantiomers.",
    type: "TRUE_FALSE",
    topic: "E/Z Alkene Stereochemistry",
    explanation:
      "cis- and trans-but-2-ene are stereoisomers that are not mirror images (they have different physical properties, e.g. boiling point), so by definition they are diastereomers.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The two chair conformations of an unsubstituted cyclohexane ring are:",
    topic: "Cyclohexane Conformations",
    explanation:
      "For plain cyclohexane the two chairs are identical in energy and interconvert rapidly; substituents break this degeneracy by favouring the chair that places them equatorial.",
    choices: [
      { text: "Equal in energy and rapidly interconverting", isCorrect: true },
      { text: "Very different in energy and non-interconverting" },
      { text: "Actually enantiomers of one another" },
      { text: "Two separate, isolable compounds" },
    ],
  },
  {
    stem: "Compared with the chair, the boat conformation of cyclohexane is higher in energy partly because of:",
    topic: "Cyclohexane Conformations",
    explanation:
      "The boat suffers flagpole steric strain between the two 'bowsprit' hydrogens and eclipsing (torsional) strain along its sides, so it sits well above the chair; the twist-boat relieves some of this.",
    choices: [
      { text: "Flagpole strain and eclipsing interactions", isCorrect: true },
      { text: "Complete absence of any strain" },
      { text: "Aromatic delocalisation around the ring" },
      { text: "Severe angle strain from 60° bond angles" },
    ],
  },
  {
    stem: "The number of stereoisomers actually observed for tartaric acid (two stereocentres) is three rather than four because:",
    topic: "Meso Compounds",
    explanation:
      "Tartaric acid has a meso form: its (R,S) diastereomer has an internal mirror plane and is achiral, so it is a single compound. With the (R,R)/(S,S) enantiomeric pair, only three stereoisomers exist.",
    choices: [
      { text: "One combination is an achiral meso form", isCorrect: true },
      { text: "One combination is impossible to draw" },
      { text: "Two of the forms are constitutional isomers" },
      { text: "The molecule has no stereocentres" },
    ],
  },
  {
    stem: "The specific rotation of a pure enantiomer and that of its mirror image are:",
    topic: "Optical Activity",
    explanation:
      "Enantiomers rotate plane-polarised light by equal magnitudes in opposite directions, so their specific rotations are equal in size but opposite in sign (e.g. +52° and −52°).",
    choices: [
      { text: "Equal in magnitude but opposite in sign", isCorrect: true },
      { text: "Identical in both magnitude and sign" },
      { text: "Different in magnitude and the same sign" },
      { text: "Both exactly zero" },
    ],
  },
  {
    stem: "An achiral molecule placed in an ordinary (achiral) solution will:",
    topic: "Optical Activity",
    explanation:
      "An achiral substance does not rotate plane-polarised light because its mirror image is superimposable; only a chiral substance present in enantiomeric excess is optically active.",
    choices: [
      { text: "Show no optical rotation", isCorrect: true },
      { text: "Rotate polarised light strongly" },
      { text: "Rotate polarised light only when heated" },
      { text: "Always rotate light to the right" },
    ],
  },
  {
    stem: "If a molecule has an odd number of stereocentre interchanges applied to it, the result is:",
    topic: "Stereochemistry: R/S",
    explanation:
      "Each swap of two groups at a stereocentre inverts that centre; an odd number of inversions overall converts a molecule into its enantiomer, while an even number returns the original configuration.",
    choices: [
      { text: "Its enantiomer", isCorrect: true },
      { text: "The identical original molecule" },
      { text: "A constitutional isomer" },
      { text: "A meso compound" },
    ],
  },
  {
    stem: "Two compounds with the same connectivity but different three-dimensional arrangements that are NOT mirror images are:",
    topic: "Enantiomers & Diastereomers",
    explanation:
      "Stereoisomers that are not mirror images are diastereomers; this category includes cis/trans (E/Z) isomers and the non-mirror pairings among molecules with several stereocentres.",
    choices: [
      { text: "Diastereomers", isCorrect: true },
      { text: "Enantiomers" },
      { text: "Conformers only" },
      { text: "Constitutional isomers" },
    ],
  },
  {
    stem: "In glyceraldehyde, the biologically important reference sugar, the single stereocentre gives rise to:",
    topic: "Enantiomers & Diastereomers",
    explanation:
      "One stereocentre gives 2¹ = 2 stereoisomers, the enantiomeric pair D- and L-glyceraldehyde; historically these defined the D/L convention later related to R/S descriptors.",
    choices: [
      { text: "Two enantiomers (D and L forms)", isCorrect: true },
      { text: "Four diastereomers" },
      { text: "A single achiral compound" },
      { text: "Three stereoisomers including a meso form" },
    ],
  },
  {
    stem: "The dihedral (torsion) angle between two specified bonds in a staggered conformation is:",
    topic: "Conformational Analysis",
    explanation:
      "In a perfectly staggered arrangement the bonds on adjacent atoms sit 60° apart (and 180° for anti-periplanar pairs); eclipsed arrangements correspond to 0° dihedral angles.",
    choices: [
      { text: "60° (or 180° for anti pairs)", isCorrect: true },
      { text: "0° in every staggered case" },
      { text: "90° in every conformation" },
      { text: "120° in every conformation" },
    ],
  },
  {
    stem: "A trans-1,4-disubstituted cyclohexane with two identical bulky groups is most stable when both groups are:",
    topic: "Cyclohexane Conformations",
    explanation:
      "For the trans-1,4 isomer, the diequatorial chair places both bulky groups equatorial, avoiding 1,3-diaxial strain; this is the strongly preferred conformation of the ring.",
    choices: [
      { text: "Equatorial (the diequatorial chair)", isCorrect: true },
      { text: "Axial (the diaxial chair)" },
      { text: "One axial and one equatorial" },
      { text: "Forced into a boat conformation" },
    ],
  },
  {
    stem: "Optical isomers (enantiomers) of a drug can differ in physiological effect because the body provides:",
    topic: "Enantiomers & Diastereomers",
    explanation:
      "Enzymes and receptors are themselves chiral, so they bind the two enantiomers of a drug differently; this can make one enantiomer active and the other inactive or even harmful.",
    choices: [
      { text: "A chiral environment distinguishing them", isCorrect: true },
      { text: "An achiral environment that is identical for both" },
      { text: "No means of distinguishing the two forms" },
      { text: "Conditions that instantly racemise the drug" },
    ],
  },
  {
    stem: "A molecule is achiral if it possesses any improper symmetry element, the simplest being:",
    topic: "Chirality",
    explanation:
      "The presence of an internal mirror plane (or a centre of inversion) guarantees the molecule is superimposable on its mirror image and hence achiral, regardless of how many stereocentres it contains.",
    choices: [
      { text: "An internal mirror plane of symmetry", isCorrect: true },
      { text: "A single stereocentre" },
      { text: "A carbon–carbon double bond" },
      { text: "A quaternary carbon" },
    ],
  },
  {
    stem: "The conformation of butane in which the dihedral angle between the methyl groups is 180° is called:",
    topic: "Conformational Analysis: Butane",
    explanation:
      "The 180° (methyl-to-methyl) arrangement is the anti conformation, the global energy minimum for butane; the 60° arrangements are the gauche conformers, slightly higher in energy.",
    choices: [
      { text: "The anti conformation", isCorrect: true },
      { text: "The gauche conformation" },
      { text: "The fully eclipsed conformation" },
      { text: "The syn-periplanar conformation" },
    ],
  },
  {
    stem: "Enantiomeric excess (ee) of a sample measures:",
    topic: "Optical Purity",
    explanation:
      "Enantiomeric excess is the difference between the percentages of the two enantiomers (%major − %minor); a 75:25 mixture has 50% ee, and a pure single enantiomer has 100% ee.",
    choices: [
      { text: "One enantiomer in excess, as a percentage", isCorrect: true },
      { text: "The total mass of chiral material in the sample" },
      { text: "The number of stereocentres in the molecule" },
      { text: "The rate at which a compound racemises" },
    ],
  },
  {
    stem: "A sample that is 90% one enantiomer and 10% the other has an enantiomeric excess of:",
    topic: "Optical Purity",
    explanation:
      "ee = %major − %minor = 90% − 10% = 80%. The remaining 20% behaves as a racemate, so optical purity for an ideal sample equals the ee of 80%.",
    choices: [
      { text: "80%", isCorrect: true },
      { text: "90%" },
      { text: "10%" },
      { text: "100%" },
    ],
  },
  {
    stem: "Absolute configuration refers to:",
    topic: "Configuration",
    explanation:
      "Absolute configuration is the actual three-dimensional arrangement of groups at a stereocentre, expressed as R or S; relative configuration instead describes how centres relate to one another (e.g. cis/trans, threo/erythro).",
    choices: [
      { text: "The actual R or S arrangement at a stereocentre", isCorrect: true },
      { text: "Only the direction a compound rotates light" },
      { text: "The ratio of two enantiomers in a mixture" },
      { text: "The most stable conformation of a molecule" },
    ],
  },
  {
    stem: "The older D/L system used for sugars and amino acids is based on:",
    topic: "Configuration",
    explanation:
      "D/L descriptors relate a molecule's configuration to that of glyceraldehyde (drawn in a Fischer projection), not to the sign of rotation; a D sugar need not be dextrorotatory.",
    choices: [
      { text: "Comparison with glyceraldehyde", isCorrect: true },
      { text: "The experimentally measured sign of rotation" },
      { text: "The numerical size of the specific rotation" },
      { text: "The total number of carbon atoms present" },
    ],
  },
  {
    stem: "Configurational isomers differ from conformational isomers in that configurational isomers:",
    topic: "Configuration",
    explanation:
      "Configurational isomers (e.g. enantiomers, cis/trans) can only be interconverted by breaking bonds, so they are isolable; conformers interconvert by mere bond rotation and generally cannot be separated.",
    choices: [
      { text: "Interconvert only by breaking bonds", isCorrect: true },
      { text: "Interconvert freely by bond rotation" },
      { text: "Are always identical in every property" },
      { text: "Never involve a stereocentre of any kind" },
    ],
  },
  {
    stem: "Epimers are diastereomers that differ in configuration at:",
    topic: "Enantiomers & Diastereomers",
    explanation:
      "Epimers are diastereomers differing at exactly one of several stereocentres; for example, glucose and galactose differ only at C4 and are therefore epimers.",
    choices: [
      { text: "One of several stereocentres", isCorrect: true },
      { text: "Every stereocentre in the molecule" },
      { text: "A carbon that is not a stereocentre" },
      { text: "The position of a carbon–carbon double bond" },
    ],
  },
  {
    stem: "Atropisomerism is a form of stereoisomerism that arises from:",
    topic: "Atropisomerism",
    explanation:
      "Atropisomers are stereoisomers interconverted by rotation about a single bond that is so hindered (as in ortho-substituted biphenyls) that rotation is effectively frozen, making the isomers isolable.",
    choices: [
      { text: "Hindered single-bond rotation, isolable isomers", isCorrect: true },
      { text: "Rapid pyramidal inversion at a nitrogen atom" },
      { text: "The presence of a carbon–carbon triple bond" },
      { text: "Completely free rotation about a double bond" },
    ],
  },
  {
    stem: "A hindered biphenyl bearing bulky groups at the ortho positions can be chiral because:",
    topic: "Atropisomerism",
    explanation:
      "When ortho substituents are large enough to block rotation about the central single bond, the two rings are locked at an angle and the molecule lacks a mirror plane, so it exists as isolable atropisomers.",
    choices: [
      { text: "Blocked rotation removes the mirror plane", isCorrect: true },
      { text: "It contains a classical four-different-groups carbon" },
      { text: "The rings freely rotate to average out any chirality" },
      { text: "It contains a stereogenic carbon–carbon double bond" },
    ],
  },
  {
    stem: "A sawhorse projection depicts a C–C bond by:",
    topic: "Conformational Analysis",
    explanation:
      "A sawhorse projection views the C–C bond obliquely, drawing it as a diagonal line with the front and back carbons and their three bonds each shown; it conveys the same conformational information as a Newman projection.",
    choices: [
      { text: "Viewing the bond obliquely, both carbons shown", isCorrect: true },
      { text: "Viewing the bond exactly end-on as a dot and circle" },
      { text: "Flattening the molecule into a Fischer projection cross" },
      { text: "Omitting the rear carbon atom entirely" },
    ],
  },
  {
    stem: "The twist-boat (skew-boat) conformation of cyclohexane is:",
    topic: "Cyclohexane Conformations",
    explanation:
      "The twist-boat is lower in energy than the boat because it relieves some flagpole and eclipsing strain, but it remains well above the chair; it is a shallow minimum on the interconversion pathway.",
    choices: [
      { text: "Below the boat but above the chair", isCorrect: true },
      { text: "The most stable conformation of cyclohexane" },
      { text: "Identical in energy to the chair" },
      { text: "Higher in energy than the classic boat" },
    ],
  },
  {
    stem: "For cis-1,3-dimethylcyclohexane, the more stable chair places the two methyl groups:",
    topic: "Cyclohexane Conformations",
    explanation:
      "In the cis-1,3 isomer both methyls can be equatorial in the same chair (diequatorial), avoiding 1,3-diaxial strain; this makes cis-1,3-dimethylcyclohexane more stable than its trans isomer.",
    choices: [
      { text: "Both equatorial in the same chair", isCorrect: true },
      { text: "Both axial in the same chair" },
      { text: "One axial and one equatorial only" },
      { text: "In a forced boat conformation" },
    ],
  },
  {
    stem: "Racemisation of a single enantiomer produces:",
    topic: "Racemates & Resolution",
    explanation:
      "Racemisation converts one pure enantiomer into a 50:50 mixture of both enantiomers (a racemate); the process destroys optical activity as the two forms come to equal amounts.",
    choices: [
      { text: "An inactive 50:50 enantiomer mixture", isCorrect: true },
      { text: "A pure sample of the opposite enantiomer" },
      { text: "A meso compound instead" },
      { text: "A constitutional isomer of the starting material" },
    ],
  },
  {
    stem: "The maximum number of stereoisomers for a molecule with three different stereocentres (no meso forms) is:",
    topic: "Chirality",
    explanation:
      "With three stereocentres and no internal symmetry, the count is 2³ = 8 stereoisomers, arranged as four pairs of enantiomers that are diastereomeric to one another.",
    choices: [
      { text: "Eight", isCorrect: true },
      { text: "Six" },
      { text: "Four" },
      { text: "Three" },
    ],
  },
  {
    stem: "Two molecules that are identical in every physical property except the direction they rotate polarised light are:",
    topic: "Enantiomers & Diastereomers",
    explanation:
      "This describes a pair of enantiomers: they share melting point, boiling point and solubility, and differ only in the sign of optical rotation and in behaviour toward other chiral substances.",
    choices: [
      { text: "Enantiomers", isCorrect: true },
      { text: "Diastereomers" },
      { text: "Constitutional isomers" },
      { text: "Conformers" },
    ],
  },
  {
    stem: "In assigning R/S, if two of the four groups are the ranked highest and lowest, the descriptor is decided by the arrangement of:",
    topic: "Stereochemistry: R/S",
    explanation:
      "Once priorities 1–4 are set, the descriptor comes from the 1→2→3 rotational sense (clockwise = R) with group 4 pointing away; the position of the lowest-priority group fixes the viewing direction.",
    choices: [
      { text: "Groups 1–3, with group 4 pointing away", isCorrect: true },
      { text: "Groups 1 and 4 only, ignoring the middle ranks" },
      { text: "The two lowest-priority groups alone" },
      { text: "Whichever groups are drawn horizontally" },
    ],
  },
  {
    stem: "cis-but-2-ene has a small but non-zero dipole moment, whereas trans-but-2-ene has essentially none, because:",
    topic: "E/Z Alkene Stereochemistry",
    explanation:
      "In the cis isomer the two methyl (and the two H) groups lie on the same side, so the bond dipoles do not fully cancel; in the symmetric trans isomer they point oppositely and cancel, giving no net dipole.",
    choices: [
      { text: "The cis geometry stops the dipoles cancelling", isCorrect: true },
      { text: "The trans isomer has larger individual bond dipoles" },
      { text: "Only the cis isomer contains polar bonds" },
      { text: "The trans isomer is ionic" },
    ],
  },
  {
    stem: "The property that all chiral molecules lack is:",
    topic: "Chirality",
    explanation:
      "A chiral molecule has no improper symmetry element — in particular no mirror plane (S₁) and no centre of inversion; possessing any such element would make it superimposable on its mirror image.",
    choices: [
      { text: "An improper element such as a mirror plane", isCorrect: true },
      { text: "Any stereocentre whatsoever in the structure" },
      { text: "An ordinary carbon–carbon single bond" },
      { text: "The ability to rotate polarised light" },
    ],
  },
  {
    stem: "Which relationship exists between the D- and L-forms of an amino acid such as alanine?",
    topic: "Enantiomers & Diastereomers",
    explanation:
      "The D- and L-forms of a molecule with a single stereocentre are non-superimposable mirror images, i.e. enantiomers; proteins are built almost exclusively from L-amino acids.",
    choices: [
      { text: "They are enantiomers", isCorrect: true },
      { text: "They are diastereomers" },
      { text: "They are identical molecules" },
      { text: "They are constitutional isomers" },
    ],
  },
  {
    stem: "A compound possessing two stereocentres that are mirror images within the same molecule (an internal mirror plane) is:",
    topic: "Meso Compounds",
    explanation:
      "Such internal symmetry defines a meso compound: the molecule is achiral overall and optically inactive even though it contains stereocentres, because one half mirrors the other.",
    choices: [
      { text: "A meso compound, achiral overall", isCorrect: true },
      { text: "A chiral compound with large rotation" },
      { text: "A pair of separable enantiomers" },
      { text: "A constitutional isomer" },
    ],
  },
  {
    stem: "Compared with an ordinary secondary carbon, rotation about the C–N bond of an amide is:",
    topic: "Conformational Analysis",
    explanation:
      "Amide C–N bonds have partial double-bond character from resonance, so rotation is restricted (barrier ~75 kJ/mol); this is why amide groups are planar and can show distinct rotamers, unlike a normal single bond.",
    choices: [
      { text: "Restricted, owing to partial double-bond character", isCorrect: true },
      { text: "Completely free, as for any single bond" },
      { text: "Impossible, because the bond is ionic" },
      { text: "Faster than rotation about a C–C single bond" },
    ],
  },
  {
    stem: "A molecule drawn in a wedge-dash structure uses a bold wedge to indicate a bond that points:",
    topic: "Structure Representation",
    explanation:
      "In wedge-dash notation a solid/bold wedge shows a bond coming toward the viewer (out of the plane) and a hashed/dashed wedge shows a bond going behind the plane; plain lines lie in the plane.",
    choices: [
      { text: "Toward the viewer, out of the plane", isCorrect: true },
      { text: "Away from the viewer, behind the plane" },
      { text: "Exactly within the plane of the paper" },
      { text: "In a direction that cannot be determined" },
    ],
  },
  {
    stem: "The reason enantiomers cannot be separated by ordinary distillation or crystallisation is that they have:",
    topic: "Racemates & Resolution",
    explanation:
      "Enantiomers share identical boiling points, melting points and solubilities in achiral media, so achiral separation methods cannot distinguish them; a chiral resolving agent or chiral chromatography is required.",
    choices: [
      { text: "Identical properties in an achiral setting", isCorrect: true },
      { text: "Completely different boiling and melting points" },
      { text: "Different underlying molecular formulae" },
      { text: "Different connectivity of their atoms" },
    ],
  },
  {
    stem: "Which statements about configuration and optical purity are correct? Select all that apply.",
    type: "MULTI",
    topic: "Configuration",
    explanation:
      "Absolute configuration is R/S; D/L is referenced to glyceraldehyde; ee is %major − %minor; configurational isomers need bond breaking to interconvert. The sign of rotation is not fixed by R/S.",
    choices: [
      { text: "Absolute configuration is expressed as R or S", isCorrect: true },
      { text: "The D/L system references glyceraldehyde", isCorrect: true },
      { text: "Enantiomeric excess equals %major − %minor", isCorrect: true },
      { text: "Configurational isomers require bond breaking to interconvert", isCorrect: true },
      { text: "The R descriptor always means (+) rotation" },
      { text: "Conformers require bond breaking to interconvert" },
    ],
  },
];
