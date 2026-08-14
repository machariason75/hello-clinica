import type { Q } from "../_lib/qbank";

export const INORGANIC_SET_5: Q[] = [
  {
    stem: "Werner's coordination theory introduced the idea that a metal exhibits two kinds of valence. These are:",
    topic: "Werner's Theory & Coordination Sphere",
    explanation:
      "Werner proposed a primary valence (oxidation state, satisfied by anions) and a secondary valence (coordination number) that directs the fixed spatial geometry of the ligands.",
    choices: [
      { text: "A primary (ionizable) valence satisfied by anions and a secondary valence fixing the geometry", isCorrect: true },
      { text: "A primary valence set by atomic number and a secondary valence set by the metal's atomic mass" },
      { text: "An oxidation valence and a separate, unrelated reduction valence that act quite independently" },
      { text: "A covalent valence for metals and a purely ionic valence reserved for the non-metals" },
    ],
  },
  {
    stem: "In the complex [Co(NH₃)₆]Cl₃, Werner's secondary valence (the coordination number) and primary valence (oxidation state of cobalt) are respectively:",
    topic: "Werner's Theory & Coordination Sphere",
    explanation:
      "Six NH₃ ligands satisfy the secondary valence (coordination number 6); three chloride counter-ions balance the +3 primary valence, so cobalt is Co(III).",
    choices: [
      { text: "6 and +3", isCorrect: true },
      { text: "3 and +6" },
      { text: "6 and +6" },
      { text: "3 and +3" },
    ],
  },
  {
    stem: "When [Co(NH₃)₆]Cl₃ is treated with excess AgNO₃, the number of chloride ions precipitated instantly as AgCl per formula unit is:",
    topic: "Werner's Theory & Coordination Sphere",
    explanation:
      "All three Cl⁻ are counter-ions outside the coordination sphere, so all three are free in solution and precipitate immediately as AgCl.",
    choices: [
      { text: "3, because all three chlorides are outside the coordination sphere", isCorrect: true },
      { text: "0, because every chloride is bound directly to cobalt" },
      { text: "1, since only one chloride can ever be ionized in solution" },
      { text: "6, matching the coordination number of the cobalt centre" },
    ],
  },
  {
    stem: "For the series of complexes [Co(NH₃)₆]Cl₃, [Co(NH₃)₅Cl]Cl₂ and [Co(NH₃)₄Cl₂]Cl, the number of ions produced in solution per formula unit is, respectively:",
    topic: "Werner's Theory & Coordination Sphere",
    explanation:
      "Only chlorides outside the sphere ionize: [Co(NH₃)₆]³⁺+3Cl gives 4 ions; the pentaammine gives 3; the tetraammine gives 2. Conductivity falls accordingly.",
    choices: [
      { text: "4, 3 and 2", isCorrect: true },
      { text: "3, 2 and 1" },
      { text: "2, 3 and 4" },
      { text: "4, 4 and 4" },
    ],
  },
  {
    stem: "The set of ligands bound directly to the central metal, enclosed in square brackets in the formula, is collectively called the:",
    topic: "Werner's Theory & Coordination Sphere",
    explanation:
      "Ligands directly bonded to the metal constitute the coordination (or inner) sphere, written inside square brackets; counter-ions lie in the outer sphere.",
    choices: [
      { text: "Coordination sphere", isCorrect: true },
      { text: "Ionization sphere" },
      { text: "Valence shell contour" },
      { text: "Outer counter-ion shell" },
    ],
  },
  {
    stem: "A ligand that binds a metal centre through two donor atoms simultaneously is described as:",
    topic: "Ligands & Denticity",
    explanation:
      "Denticity counts the donor atoms a ligand uses. Two donor atoms means bidentate, as in ethylenediamine (en), which chelates through both nitrogen atoms.",
    choices: [
      { text: "Bidentate", isCorrect: true },
      { text: "Monodentate" },
      { text: "Ambidentate" },
      { text: "Hexadentate" },
    ],
  },
  {
    stem: "Ethylenediaminetetraacetate (EDTA⁴⁻) is classified as a hexadentate ligand because it coordinates through:",
    topic: "Ligands & Denticity",
    explanation:
      "EDTA⁴⁻ wraps a metal using its two amine nitrogens plus four carboxylate oxygens, giving six points of attachment and a very stable cage-like chelate.",
    choices: [
      { text: "Two nitrogen atoms and four carboxylate oxygen atoms", isCorrect: true },
      { text: "Six carbon atoms arranged around the metal centre" },
      { text: "Four nitrogen atoms and two oxygen atoms in a ring" },
      { text: "Six oxygen atoms drawn from three water molecules" },
    ],
  },
  {
    stem: "An ambidentate ligand such as the thiocyanate ion, SCN⁻, is one that:",
    topic: "Ligands & Denticity",
    explanation:
      "Thiocyanate can coordinate through sulfur (thiocyanato, M–SCN) or nitrogen (isothiocyanato, M–NCS); an ambidentate ligand offers a choice of donor atom, using one per binding event.",
    choices: [
      { text: "Can bind through either of two different donor atoms (N or S)", isCorrect: true },
      { text: "Simultaneously bridges two metal centres using the same single atom" },
      { text: "Always donates two lone pairs from the very same atom" },
      { text: "Changes its overall charge depending on the metal it coordinates" },
    ],
  },
  {
    stem: "Which of the following are polydentate (chelating) ligands? Select all that apply.",
    type: "MULTI",
    topic: "Ligands & Denticity",
    explanation:
      "en (2 N donors), oxalate (2 O donors) and EDTA (6 donors) are polydentate chelators; NH₃, Cl⁻ and H₂O are monodentate, using a single donor atom each.",
    choices: [
      { text: "Ethylenediamine (en)", isCorrect: true },
      { text: "Oxalate, C₂O₄²⁻", isCorrect: true },
      { text: "EDTA⁴⁻", isCorrect: true },
      { text: "Ammonia, NH₃" },
      { text: "Chloride, Cl⁻" },
      { text: "Water, H₂O" },
    ],
  },
  {
    stem: "The chelate effect refers to the observation that complexes containing chelating ligands are more stable than comparable complexes with monodentate ligands. Its principal driving force is:",
    topic: "Ligands & Denticity",
    explanation:
      "Replacing several monodentate ligands with one polydentate ligand liberates more particles than are consumed (e.g. 6 H₂O out, 3 en in nets +2 particles), raising ΔS and thus stability.",
    choices: [
      { text: "A favourable entropy increase, as chelation liberates more free ligands than it uses", isCorrect: true },
      { text: "A large decrease in entropy that is said to strongly stabilize the chelate ring" },
      { text: "The formation of stronger, purely covalent metal–ligand bonds in every case" },
      { text: "A reduction in the oxidation state of the central metal ion on chelation" },
    ],
  },
  {
    stem: "A chelate ring containing five or six members is generally more stable than one containing three or four members.",
    type: "TRUE_FALSE",
    topic: "Ligands & Denticity",
    explanation:
      "Five- and six-membered chelate rings minimize ring strain and match ideal bond angles, so they are markedly more stable than strained three- or four-membered rings.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Applying IUPAC rules, the correct name of the complex [Co(NH₃)₆]Cl₃ is:",
    topic: "Nomenclature of Complexes",
    explanation:
      "Ligands are named alphabetically before the metal (ammine = NH₃), Greek prefixes count them, cobalt's oxidation state (+3) is a Roman numeral, then the counter-ion.",
    choices: [
      { text: "Hexaamminecobalt(III) chloride", isCorrect: true },
      { text: "Hexaamminecobalt(II) trichloride salt" },
      { text: "Cobalt hexaammine trichloride complex" },
      { text: "Trichlorohexaamminecobaltate(III)" },
    ],
  },
  {
    stem: "In K₄[Fe(CN)₆], the systematic name is potassium hexacyanoferrate(II). The metal takes the suffix '-ate' because:",
    topic: "Nomenclature of Complexes",
    explanation:
      "When the coordination complex is an anion, the metal name takes the '-ate' suffix (ferrate for iron); the [Fe(CN)₆]⁴⁻ ion here is anionic, balanced by four K⁺.",
    choices: [
      { text: "The complex ion carries an overall negative charge (it is anionic)", isCorrect: true },
      { text: "Iron is always named with an '-ate' ending in every complex" },
      { text: "Potassium forces the '-ate' suffix onto any partner metal" },
      { text: "The cyanide ligands are themselves negatively charged" },
    ],
  },
  {
    stem: "For a complex containing a polydentate ligand whose name already includes a Greek numerical prefix (e.g. ethylenediamine), the number of such ligands is indicated using the multiplying prefixes:",
    topic: "Nomenclature of Complexes",
    explanation:
      "To avoid ambiguity with ligand names that contain di/tri, the enclosing prefixes bis, tris, tetrakis are used, e.g. tris(ethylenediamine) for three en ligands.",
    choices: [
      { text: "bis-, tris-, tetrakis-", isCorrect: true },
      { text: "di-, tri-, tetra-" },
      { text: "mono-, sesqui-, poly-" },
      { text: "hemi-, uni-, multi-" },
    ],
  },
  {
    stem: "The name of the neutral complex [Pt(NH₃)₂Cl₂] is:",
    topic: "Nomenclature of Complexes",
    explanation:
      "Ligands cited alphabetically (ammine before chlorido), each with its count; platinum is +2 to balance two Cl⁻; the complex is neutral so no '-ate' suffix (this is the drug cisplatin).",
    choices: [
      { text: "Diamminedichloridoplatinum(II)", isCorrect: true },
      { text: "Dichloridodiammineplatinum(IV)" },
      { text: "Platinum diammine dichloride(0)" },
      { text: "Diamminedichloridoplatinate(II)" },
    ],
  },
  {
    stem: "Which statements about coordination-complex nomenclature are correct? Select all that apply.",
    type: "MULTI",
    topic: "Nomenclature of Complexes",
    explanation:
      "Ligands precede the metal, cited alphabetically by ligand name (not prefix); anionic '-ide' becomes '-ido'; oxidation state is a parenthetical Roman numeral. '-ate' marks anionic complexes, not neutral ligands.",
    choices: [
      { text: "Anionic ligands ending in '-ide' generally change to '-ido' (e.g. chloride → chlorido)", isCorrect: true },
      { text: "Ligands are listed alphabetically, ignoring the multiplying prefix when alphabetizing", isCorrect: true },
      { text: "The oxidation state of the metal is given as a Roman numeral in parentheses", isCorrect: true },
      { text: "The metal is always named before the ligands in the complex" },
      { text: "Neutral ligands always take an '-ate' ending" },
    ],
  },
  {
    stem: "A metal centre with coordination number 6 almost always adopts which geometry?",
    topic: "Coordination Number & Geometry",
    explanation:
      "Six ligands around a metal overwhelmingly favour the octahedral arrangement, which places the donor atoms at maximum separation on the axes of the coordinate system.",
    choices: [
      { text: "Octahedral", isCorrect: true },
      { text: "Trigonal planar" },
      { text: "Pentagonal bipyramidal" },
      { text: "Square pyramidal only" },
    ],
  },
  {
    stem: "Coordination number 4 can give rise to two distinct geometries. These are:",
    topic: "Coordination Number & Geometry",
    explanation:
      "Four-coordinate complexes are either tetrahedral (common for d⁰, d¹⁰ and small ligands) or square planar (favoured by d⁸ metals such as Pt(II), Pd(II), Ni(II)).",
    choices: [
      { text: "Tetrahedral and square planar", isCorrect: true },
      { text: "Octahedral and trigonal planar" },
      { text: "Linear and bent" },
      { text: "Trigonal bipyramidal and see-saw" },
    ],
  },
  {
    stem: "Square-planar geometry is especially characteristic of d⁸ metal ions such as:",
    topic: "Coordination Number & Geometry",
    explanation:
      "Low-spin d⁸ ions gain large stabilization from the square-planar field (the dx²₋y² orbital left empty), so Pt(II), Pd(II) and Au(III) favour this geometry.",
    choices: [
      { text: "Pt(II), Pd(II) and Au(III)", isCorrect: true },
      { text: "Fe(III), Cr(III) and Co(III)" },
      { text: "Zn(II), Cd(II) and Hg(II)" },
      { text: "Ca(II), Mg(II) and Ba(II)" },
    ],
  },
  {
    stem: "Which metal ions characteristically form linear, two-coordinate complexes? Select all that apply.",
    type: "MULTI",
    topic: "Coordination Number & Geometry",
    explanation:
      "The d¹⁰ ions of group 11 in the +1 state (Cu(I), Ag(I), Au(I)) characteristically give linear two-coordinate complexes such as [Ag(NH₃)₂]⁺; the listed d⁸ and d³ ions favour square-planar or octahedral geometries instead.",
    choices: [
      { text: "Cu(I), as in [Cu(NH₃)₂]⁺", isCorrect: true },
      { text: "Ag(I), as in [Ag(CN)₂]⁻", isCorrect: true },
      { text: "Au(I), as in [Au(CN)₂]⁻", isCorrect: true },
      { text: "Pt(II), which strongly prefers square-planar coordination" },
      { text: "Cr(III), which strongly prefers octahedral coordination" },
    ],
  },
  {
    stem: "For a given metal and ligand, a tetrahedral complex and a square-planar complex have the same coordination number.",
    type: "TRUE_FALSE",
    topic: "Coordination Number & Geometry",
    explanation:
      "Both geometries are four-coordinate; they differ only in the spatial arrangement of the four ligands, not in the coordination number.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Linkage (ambidentate) isomerism arises when:",
    topic: "Structural Isomerism",
    explanation:
      "A classic pair is [Co(NH₃)₅(NO₂)]²⁺ (nitro, M–N) versus [Co(NH₃)₅(ONO)]²⁺ (nitrito, M–O); the ambidentate NO₂⁻ binds through different atoms.",
    choices: [
      { text: "An ambidentate ligand binds through a different donor atom in each of the two isomers", isCorrect: true },
      { text: "Ligands and counter-ions swap places between inside and outside the coordination sphere" },
      { text: "The same ligands are arranged as cis and trans about the metal" },
      { text: "Water is incorporated inside versus outside the coordination sphere" },
    ],
  },
  {
    stem: "The two complexes [Co(NH₃)₅Br]SO₄ and [Co(NH₃)₅(SO₄)]Br illustrate which type of isomerism?",
    topic: "Structural Isomerism",
    explanation:
      "Ionization isomers exchange a ligand and a counter-ion between the inner and outer spheres, giving different ions in solution — here bromide versus sulfate is freed.",
    choices: [
      { text: "Ionization isomerism", isCorrect: true },
      { text: "Linkage isomerism" },
      { text: "Optical isomerism" },
      { text: "Coordination isomerism" },
    ],
  },
  {
    stem: "Hydrate (solvate) isomerism is exemplified by the well-known chromium(III) chloride hydrates. The violet [Cr(H₂O)₆]Cl₃ and green [Cr(H₂O)₅Cl]Cl₂·H₂O differ in:",
    topic: "Structural Isomerism",
    explanation:
      "Hydrate isomers differ in the distribution of water between coordinated (inner sphere) and lattice (outer sphere) positions, which also changes how many chlorides are ionizable.",
    choices: [
      { text: "How many water molecules occupy the coordination sphere versus the crystal lattice", isCorrect: true },
      { text: "The oxidation state of the central chromium ion in the two hydrates" },
      { text: "The total number of chlorine atoms present in the empirical formula" },
      { text: "Whether the chromium centre is octahedral or tetrahedral in the two forms" },
    ],
  },
  {
    stem: "Coordination isomerism can occur only when:",
    topic: "Structural Isomerism",
    explanation:
      "In a salt like [Co(NH₃)₆][Cr(CN)₆], ligands can be swapped between the two complex ions (e.g. giving [Cr(NH₃)₆][Co(CN)₆]); this requires both ions to be complexes.",
    choices: [
      { text: "Both the cation and the anion of a salt are complex ions", isCorrect: true },
      { text: "A single ambidentate ligand switches its donor atom" },
      { text: "The complex contains at least one chelating ligand forming a ring" },
      { text: "Water molecules move between the inner and outer spheres" },
    ],
  },
  {
    stem: "Which of the following are forms of structural (constitutional) isomerism in coordination compounds? Select all that apply.",
    type: "MULTI",
    topic: "Structural Isomerism",
    explanation:
      "Structural isomers differ in connectivity: ionization, linkage, hydrate and coordination isomerism. Geometric and optical isomerism are stereoisomerism — same bonds, different spatial arrangement.",
    choices: [
      { text: "Ionization isomerism", isCorrect: true },
      { text: "Linkage isomerism", isCorrect: true },
      { text: "Hydrate (solvate) isomerism", isCorrect: true },
      { text: "Coordination isomerism", isCorrect: true },
      { text: "Geometric (cis–trans) isomerism" },
      { text: "Optical isomerism" },
    ],
  },
  {
    stem: "Geometric (cis–trans) isomerism in an octahedral complex of the type [MA₄B₂] distinguishes isomers by:",
    topic: "Stereoisomerism",
    explanation:
      "In [MA₄B₂], the two B ligands are either cis (90° apart, adjacent) or trans (180° apart, opposite), a difference in spatial arrangement with identical connectivity.",
    choices: [
      { text: "Whether the two B ligands sit adjacent (cis, 90°) or opposite (trans, 180°)", isCorrect: true },
      { text: "Whether the complex is able to rotate plane-polarized light" },
      { text: "Which donor atom of a coordinated ambidentate ligand is used" },
      { text: "The distribution of ligands between the inner and outer coordination spheres" },
    ],
  },
  {
    stem: "Square-planar [Pt(NH₃)₂Cl₂] exists as cis and trans isomers. The cis isomer is medically important because it is:",
    topic: "Stereoisomerism",
    explanation:
      "cis-[Pt(NH₃)₂Cl₂] (cisplatin) binds DNA and is a widely used chemotherapeutic; trans-platin has the same formula but markedly lower antitumour activity — a striking geometric-isomer effect.",
    choices: [
      { text: "Cisplatin, an anticancer drug, whereas the trans isomer is clinically far less active", isCorrect: true },
      { text: "More brightly coloured than the trans isomer and formerly used as a fabric dye" },
      { text: "The only isomer that is optically active, being chiral and resolvable" },
      { text: "A far stronger oxidizing agent, exploited in industrial bleaching" },
    ],
  },
  {
    stem: "An octahedral complex is optically active (chiral) when it:",
    topic: "Stereoisomerism",
    explanation:
      "Chirality requires a non-superimposable mirror image and absence of an improper axis. The tris(bidentate) [Co(en)₃]³⁺ has Δ and Λ enantiomers that rotate polarized light oppositely.",
    choices: [
      { text: "Is non-superimposable on its mirror image", isCorrect: true },
      { text: "Contains any ambidentate ligand, regardless of geometry" },
      { text: "Has all six ligands identical to one another" },
      { text: "Possesses a centre of symmetry through the metal" },
    ],
  },
  {
    stem: "Which complex is capable of exhibiting optical isomerism?",
    topic: "Stereoisomerism",
    explanation:
      "The cis-bis(ethylenediamine) isomer is chiral (no symmetry plane, resolvable into enantiomers), whereas the trans isomer has a mirror plane and is optically inactive.",
    choices: [
      { text: "cis-[Co(en)₂Cl₂]⁺, which lacks an internal mirror plane", isCorrect: true },
      { text: "trans-[Co(en)₂Cl₂]⁺, which has a plane of symmetry" },
      { text: "Tetrahedral [ZnCl₄]²⁻ with four identical ligands" },
      { text: "Square-planar trans-[Pt(NH₃)₂Cl₂]" },
    ],
  },
  {
    stem: "The trans isomer of an octahedral [M(AA)₂X₂] complex (AA = symmetric bidentate) is generally optically inactive because it possesses a plane of symmetry.",
    type: "TRUE_FALSE",
    topic: "Stereoisomerism",
    explanation:
      "The trans arrangement places the two X ligands opposite one another, generating a mirror plane; the molecule is superimposable on its mirror image and hence achiral.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "In crystal field theory, the approach of six ligands along the axes of an octahedral complex splits the five d orbitals into:",
    topic: "Octahedral Crystal Field Splitting",
    explanation:
      "Ligands approach along x, y, z, raising the axis-pointing eg pair (dz², dx²₋y²) above the t₂g trio (dxy, dxz, dyz) that points between axes.",
    choices: [
      { text: "A lower triply degenerate t₂g set and a higher doubly degenerate eg set", isCorrect: true },
      { text: "A lower doubly degenerate eg set and a higher triply degenerate t₂g set" },
      { text: "Two equal sets of orbitals separated by the pairing energy" },
      { text: "A single set of five orbitals that remain fully degenerate" },
    ],
  },
  {
    stem: "The energy gap between the t₂g and eg orbital sets in an octahedral field is denoted Δo and is measured spectroscopically from:",
    topic: "Octahedral Crystal Field Splitting",
    explanation:
      "The splitting Δo corresponds to the energy of the t₂g → eg transition; the absorbed wavelength (hence the complex's colour) gives Δo directly via E = hc/λ.",
    choices: [
      { text: "The wavelength of light absorbed in the d–d electronic transition", isCorrect: true },
      { text: "The first ionization energy of the gaseous metal atom or ion" },
      { text: "The lattice energy released when the corresponding solid salt forms" },
      { text: "The spin-only magnetic moment expressed in units of Bohr magnetons" },
    ],
  },
  {
    stem: "Relative to the barycentre (the mean d-orbital energy), each eg orbital is raised by +0.6Δo and each t₂g orbital is lowered by:",
    topic: "Octahedral Crystal Field Splitting",
    explanation:
      "To preserve the barycentre, the two eg orbitals go up by 0.6Δo (+3/5) and the three t₂g orbitals go down by 0.4Δo (−2/5): 2(0.6) = 3(0.4), so the centre of gravity is conserved.",
    choices: [
      { text: "−0.4Δo", isCorrect: true },
      { text: "−0.6Δo" },
      { text: "−0.4Δt" },
      { text: "−1.0Δo" },
    ],
  },
  {
    stem: "The crystal field stabilization energy (CFSE) of a d³ ion in a weak octahedral field is:",
    topic: "Crystal Field Stabilization Energy",
    explanation:
      "Three electrons fill t₂g (t₂g³): CFSE = 3 × (−0.4Δo) = −1.2Δo. Pairing energy is not yet involved because each t₂g orbital holds one electron.",
    choices: [
      { text: "−1.2Δo", isCorrect: true },
      { text: "−0.8Δo" },
      { text: "−1.6Δo" },
      { text: "0" },
    ],
  },
  {
    stem: "For a high-spin d⁵ octahedral ion such as [Mn(H₂O)₆]²⁺, the crystal field stabilization energy is:",
    topic: "Crystal Field Stabilization Energy",
    explanation:
      "High-spin d⁵ is t₂g³eg²: CFSE = 3(−0.4Δo) + 2(+0.6Δo) = −1.2 + 1.2 = 0. This zero CFSE partly explains the pale colour and lability of Mn(II).",
    choices: [
      { text: "0, because t₂g³eg² gives 3(−0.4Δo)+2(+0.6Δo) = 0", isCorrect: true },
      { text: "−2.0Δo, the largest possible stabilization" },
      { text: "−1.2Δo, the same as a d³ configuration" },
      { text: "+0.6Δo, a net destabilization of the ion" },
    ],
  },
  {
    stem: "A low-spin d⁶ octahedral ion such as [Co(NH₃)₆]³⁺ has the configuration t₂g⁶eg⁰. Its CFSE (ignoring pairing) is:",
    topic: "Crystal Field Stabilization Energy",
    explanation:
      "Six electrons in t₂g: CFSE = 6 × (−0.4Δo) = −2.4Δo. This large stabilization makes low-spin d⁶ complexes like [Co(NH₃)₆]³⁺ exceptionally inert.",
    choices: [
      { text: "−2.4Δo", isCorrect: true },
      { text: "−1.6Δo" },
      { text: "−0.4Δo" },
      { text: "0" },
    ],
  },
  {
    stem: "Whether an octahedral d⁴–d⁷ complex is high-spin or low-spin is decided by the competition between:",
    topic: "High-Spin vs Low-Spin",
    explanation:
      "If Δo > P, electrons pair in t₂g before occupying eg (low-spin); if Δo < P, they spread out to maximize unpaired spins (high-spin). Only d⁴–d⁷ offer a genuine choice.",
    choices: [
      { text: "The crystal field splitting Δo and the electron pairing energy P", isCorrect: true },
      { text: "The lattice energy and the hydration enthalpy" },
      { text: "The ionization energy and the electron affinity of the metal" },
      { text: "The metal's atomic radius and its electronegativity" },
    ],
  },
  {
    stem: "A strong-field ligand produces a low-spin complex because it:",
    topic: "High-Spin vs Low-Spin",
    explanation:
      "Strong-field ligands (e.g. CN⁻, CO) give Δo > P, so it costs less energy to pair up in the low t₂g set than to promote an electron to eg — the low-spin outcome.",
    choices: [
      { text: "Generates a large Δo that exceeds the pairing energy", isCorrect: true },
      { text: "Lowers the pairing energy so that electrons spread into eg" },
      { text: "Removes the degeneracy of the eg set entirely" },
      { text: "Increases the metal's oxidation state during complex formation" },
    ],
  },
  {
    stem: "The number of unpaired electrons in high-spin versus low-spin [Fe(H₂O)₆]²⁺ (an d⁶ ion) and [Fe(CN)₆]⁴⁻ respectively is:",
    topic: "High-Spin vs Low-Spin",
    explanation:
      "Weak-field H₂O gives high-spin t₂g⁴eg² (4 unpaired); strong-field CN⁻ gives low-spin t₂g⁶ (0 unpaired, diamagnetic). Same d⁶ ion, opposite magnetism.",
    choices: [
      { text: "4 (high-spin, t₂g⁴eg²) and 0 (low-spin, t₂g⁶)", isCorrect: true },
      { text: "2 and 4, with cyanide giving the higher spin" },
      { text: "6 and 6, since both are the same d-count" },
      { text: "0 and 4, with water giving the low-spin case" },
    ],
  },
  {
    stem: "Which octahedral d-electron counts can, in principle, exist as either high-spin or low-spin complexes? Select all that apply.",
    type: "MULTI",
    topic: "High-Spin vs Low-Spin",
    explanation:
      "Only d⁴ through d⁷ have a spin choice in an octahedral field. d¹–d³ and d⁸–d¹⁰ fill the same way regardless of field strength.",
    choices: [
      { text: "d⁴", isCorrect: true },
      { text: "d⁵", isCorrect: true },
      { text: "d⁶", isCorrect: true },
      { text: "d⁷", isCorrect: true },
      { text: "d³" },
      { text: "d⁸" },
    ],
  },
  {
    stem: "For a given metal ion, a low-spin octahedral complex always has a magnetic moment less than or equal to that of the high-spin complex.",
    type: "TRUE_FALSE",
    topic: "High-Spin vs Low-Spin",
    explanation:
      "Low-spin configurations maximize pairing and therefore minimize the number of unpaired electrons, so the spin-only moment ν is never larger than that of the high-spin form.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The spectrochemical series ranks ligands by the size of the crystal field splitting they produce. The correct order of increasing Δo for these ligands is:",
    topic: "Spectrochemical Series",
    explanation:
      "Weak-field halides sit at the low end and strong-field π-acceptors (CN⁻, CO) at the high end; a common mnemonic runs from iodide up through water and ammonia to cyanide and carbonyl.",
    choices: [
      { text: "I⁻ < Br⁻ < Cl⁻ < F⁻ < H₂O < NH₃ < en < CN⁻ < CO", isCorrect: true },
      { text: "CO < CN⁻ < NH₃ < H₂O < F⁻ < Cl⁻ < I⁻" },
      { text: "CN⁻ < H₂O < NH₃ < Cl⁻ < CO < I⁻" },
      { text: "F⁻ < I⁻ < CN⁻ < H₂O < CO < NH₃" },
    ],
  },
  {
    stem: "Carbon monoxide and cyanide lie at the strong-field end of the spectrochemical series largely because they are:",
    topic: "Spectrochemical Series",
    explanation:
      "CO and CN⁻ have empty π* orbitals that accept metal t₂g density (back-bonding), which lowers t₂g and enlarges Δo — an effect crystal field theory cannot explain but ligand field theory does.",
    choices: [
      { text: "π-acceptor ligands that accept metal d-electron density into empty π* orbitals", isCorrect: true },
      { text: "π-donor ligands that push filled p-orbital density onto the metal centre" },
      { text: "Highly charged anionic ligands with unusually small ionic radii" },
      { text: "Chelating ligands that bind through more than one donor atom at once" },
    ],
  },
  {
    stem: "The position of a ligand in the spectrochemical series, together with the metal, determines the observed colour of a complex because it sets:",
    topic: "Spectrochemical Series",
    explanation:
      "Larger Δo means higher-energy (shorter-wavelength) absorption; the complementary colour is transmitted. Changing ligand along the series shifts Δo and therefore the colour.",
    choices: [
      { text: "The magnitude of Δo, and hence the wavelength of light absorbed in the d–d transition", isCorrect: true },
      { text: "The overall electrical charge carried by the complex ion when dissolved in water" },
      { text: "The coordination number adopted by the metal centre in the solid state" },
      { text: "The aqueous solubility of the complex and the size of its counter-ion" },
    ],
  },
  {
    stem: "In a tetrahedral crystal field, the d-orbital splitting pattern is:",
    topic: "Tetrahedral & Square-Planar Fields",
    explanation:
      "With no ligands pointing directly at any d orbital, the pattern inverts: the e pair (dz², dx²₋y²) lies below the t₂ trio, opposite to the octahedral case.",
    choices: [
      { text: "Inverted relative to octahedral — the e set lies below the t₂g (t₂) set", isCorrect: true },
      { text: "Identical to the octahedral pattern in both order and magnitude" },
      { text: "A single large gap with all five orbitals split apart" },
      { text: "No splitting at all because the geometry is symmetric" },
    ],
  },
  {
    stem: "The tetrahedral splitting Δt is related to the octahedral splitting for the same metal and ligands approximately by:",
    topic: "Tetrahedral & Square-Planar Fields",
    explanation:
      "Only four ligands (versus six) and none pointing at the orbitals give Δt ≈ 4/9 Δo. Because Δt is small, tetrahedral complexes are almost always high-spin.",
    choices: [
      { text: "Δt ≈ (4/9)Δo", isCorrect: true },
      { text: "Δt ≈ (9/4)Δo" },
      { text: "Δt ≈ Δo" },
      { text: "Δt ≈ 2Δo" },
    ],
  },
  {
    stem: "Tetrahedral complexes are almost always high-spin because the small splitting Δt is nearly always less than the electron pairing energy.",
    type: "TRUE_FALSE",
    topic: "Tetrahedral & Square-Planar Fields",
    explanation:
      "Since Δt ≈ 4/9 Δo is small, it rarely exceeds the pairing energy P, so electrons spread out to maximize unpaired spins — low-spin tetrahedral complexes are exceedingly rare.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Square-planar complexes are derived conceptually from the octahedron by:",
    topic: "Tetrahedral & Square-Planar Fields",
    explanation:
      "Pulling the two axial ligands away drops the z-containing orbitals; dx²₋y² (pointing straight at the four planar ligands) is left highest, giving the large gap that favours d⁸ low-spin.",
    choices: [
      { text: "Removing the two ligands along the z-axis", isCorrect: true },
      { text: "Adding two extra ligands along the z-axis to give eight-coordination" },
      { text: "Compressing all six ligands into one plane equally" },
      { text: "Rotating the octahedron by 45° about the z-axis" },
    ],
  },
  {
    stem: "The very large tetragonal splitting in d⁸ square-planar complexes explains why ions such as [Ni(CN)₄]²⁻ are:",
    topic: "Tetrahedral & Square-Planar Fields",
    explanation:
      "Strong-field CN⁻ makes dx²₋y² very high; the eight electrons fill the four lower orbitals in pairs, leaving none unpaired — hence [Ni(CN)₄]²⁻ is diamagnetic and square planar.",
    choices: [
      { text: "Diamagnetic, with all eight d-electrons paired below the empty dx²₋y²", isCorrect: true },
      { text: "Strongly paramagnetic, carrying two unpaired electrons in the eg set" },
      { text: "Tetrahedral rather than square-planar when dissolved in water" },
      { text: "Colourless in every case, irrespective of the coordinated ligand" },
    ],
  },
  {
    stem: "Which statements correctly compare octahedral and tetrahedral crystal fields? Select all that apply.",
    type: "MULTI",
    topic: "Tetrahedral & Square-Planar Fields",
    explanation:
      "Tetrahedral fields invert the octahedral order (e below t₂), give a smaller splitting (Δt ≈ 4/9 Δo), and are almost always high-spin because Δt < P.",
    choices: [
      { text: "The tetrahedral pattern is the inverse of the octahedral pattern", isCorrect: true },
      { text: "Δt is smaller than Δo for the same metal and ligands", isCorrect: true },
      { text: "Tetrahedral complexes are generally high-spin", isCorrect: true },
      { text: "Tetrahedral splitting has the e set above the t₂ set" },
      { text: "Δt typically exceeds the pairing energy" },
    ],
  },
  {
    stem: "For a high-spin d⁷ octahedral ion, the configuration and CFSE (ignoring pairing) are:",
    topic: "Crystal Field Stabilization Energy",
    explanation:
      "High-spin d⁷ has the configuration t₂g⁵eg²: CFSE = 5(−0.4Δo) + 2(+0.6Δo) = −2.0 + 1.2 = −0.8Δo, a modest net stabilization.",
    choices: [
      { text: "t₂g⁵eg² and −0.8Δo", isCorrect: true },
      { text: "t₂g⁶eg¹ and −1.2Δo" },
      { text: "t₂g⁴eg³ and −0.4Δo" },
      { text: "t₂g⁷eg⁰ and −2.8Δo" },
    ],
  },
  {
    stem: "A plot of hydration enthalpies of the first-row M²⁺ ions across the period shows a characteristic double-humped curve. Crystal field theory attributes this to:",
    topic: "Crystal Field Stabilization Energy",
    explanation:
      "Removing the (zero-CFSE) d⁰, d⁵, d¹⁰ points gives a smooth curve from increasing Zeff; the extra CFSE at intermediate d-counts produces the two humps.",
    choices: [
      { text: "The added CFSE at intermediate d-counts, on top of the smooth Zeff rise", isCorrect: true },
      { text: "Random experimental scatter in the calorimetric measurements of the enthalpies" },
      { text: "A systematic change in coordination number from six to four across the row" },
      { text: "The lanthanide contraction, which reduces the ionic radii across the 3d series" },
    ],
  },
  {
    stem: "The colour of most transition-metal complexes originates from:",
    topic: "Colour & the d–d Transition",
    explanation:
      "Absorption of a photon whose energy equals Δo promotes a t₂g electron to eg; the complementary colour of the absorbed light is what the eye perceives.",
    choices: [
      { text: "d–d electronic transitions in which an electron is promoted from t₂g to eg", isCorrect: true },
      { text: "Nuclear transitions taking place within the central metal nucleus" },
      { text: "Rotational tumbling of the entire complex ion in solution" },
      { text: "Stretching vibrations of the metal–ligand bonds at ambient temperature" },
    ],
  },
  {
    stem: "A complex that absorbs light strongly in the red region of the spectrum will appear, to the eye, approximately:",
    topic: "Colour & the d–d Transition",
    explanation:
      "The transmitted colour is complementary to the absorbed colour; a complex absorbing red light transmits and appears green on the opposite side of the colour wheel.",
    choices: [
      { text: "Green (the complementary colour of red)", isCorrect: true },
      { text: "Red, the same colour it absorbs" },
      { text: "Black, because all light is removed" },
      { text: "Colourless, because red is invisible" },
    ],
  },
  {
    stem: "[Ti(H₂O)₆]³⁺ is violet because its single d-electron absorbs in the yellow-green near 500 nm. This absorption energy corresponds directly to:",
    topic: "Colour & the d–d Transition",
    explanation:
      "[Ti(H₂O)₆]³⁺ is d¹; its lone t₂g → eg transition absorbs around 500 nm, and that photon energy equals Δo for the aqua ligand field.",
    choices: [
      { text: "Δo for the aqua complex", isCorrect: true },
      { text: "The ionization energy of titanium" },
      { text: "The pairing energy of the d-electron" },
      { text: "The lattice energy of the solid salt" },
    ],
  },
  {
    stem: "Why are d⁰ ions (e.g. Sc³⁺, Ti⁴⁺) and d¹⁰ ions (e.g. Zn²⁺) typically colourless?",
    topic: "Colour & the d–d Transition",
    explanation:
      "d⁰ has no d-electron to promote and d¹⁰ has a full d-set with no vacancy, so neither undergoes a d–d transition — both are usually colourless (or absorb only in the UV).",
    choices: [
      { text: "They have no partially filled d-set, so no d–d transition is possible", isCorrect: true },
      { text: "Their splitting Δo happens to fall exactly in the ultraviolet always" },
      { text: "They always adopt tetrahedral geometry, which forbids colour" },
      { text: "Their electrons are too tightly bound to absorb any light" },
    ],
  },
  {
    stem: "Charge-transfer transitions, such as the intense purple of the permanganate ion MnO₄⁻, differ from d–d transitions in that they:",
    topic: "Colour & the d–d Transition",
    explanation:
      "In MnO₄⁻ (formally d⁰ Mn(VII)) the colour is a ligand-to-metal charge transfer, which is Laporte-allowed and hence far more intense than a (forbidden) d–d band.",
    choices: [
      { text: "Are Laporte-allowed and therefore give very intense, high-molar-absorptivity colours", isCorrect: true },
      { text: "Are always weaker and paler than d–d bands because they are Laporte-forbidden" },
      { text: "Occur only in high-spin d⁵ ions and never in d⁰ centres such as Mn(VII)" },
      { text: "Require the complex to be optically active and thus resolvable into enantiomers" },
    ],
  },
  {
    stem: "Which factors influence the observed colour (the value of Δo) of an octahedral transition-metal complex? Select all that apply.",
    type: "MULTI",
    topic: "Colour & the d–d Transition",
    explanation:
      "Ligand field strength, metal oxidation state (higher charge → larger Δo) and the metal's row (3d < 4d < 5d) all change Δo. Outer-sphere counter-ions have essentially no effect on the d–d energy.",
    choices: [
      { text: "The identity of the ligands (their place in the spectrochemical series)", isCorrect: true },
      { text: "The oxidation state of the metal ion", isCorrect: true },
      { text: "The period (row) of the metal in the d-block", isCorrect: true },
      { text: "The counter-ion outside the coordination sphere" },
      { text: "The temperature at which the salt was crystallized" },
    ],
  },
  {
    stem: "The Jahn–Teller theorem states that a non-linear molecule in a degenerate electronic state will:",
    topic: "Jahn–Teller Distortion",
    explanation:
      "An orbitally degenerate, unevenly occupied state is unstable; the molecule distorts (usually a tetragonal elongation) to split the degenerate orbitals and stabilize the occupied ones.",
    choices: [
      { text: "Distort geometrically to remove the degeneracy and lower its energy", isCorrect: true },
      { text: "Remain in its perfectly symmetric geometry so as to preserve the degeneracy" },
      { text: "Always dissociate spontaneously into two or more simpler fragments" },
      { text: "Convert entirely from octahedral to a tetrahedral coordination geometry" },
    ],
  },
  {
    stem: "Jahn–Teller distortion is most pronounced for octahedral ions with uneven occupancy of the eg orbitals, the classic example being:",
    topic: "Jahn–Teller Distortion",
    explanation:
      "Cu²⁺ (d⁹) has the eg set occupied (dz²)² (dx²₋y²)¹ — an uneven eg occupancy that drives a strong tetragonal (axial) elongation.",
    choices: [
      { text: "High-spin d⁹, such as Cu²⁺ (t₂g⁶eg³)", isCorrect: true },
      { text: "Half-filled d⁵ high-spin Mn²⁺" },
      { text: "d³ Cr³⁺ with a symmetric t₂g" },
      { text: "d⁰ Sc³⁺ with no d-electrons" },
    ],
  },
  {
    stem: "The consequence of Jahn–Teller elongation in [Cu(H₂O)₆]²⁺ is that:",
    topic: "Jahn–Teller Distortion",
    explanation:
      "Uneven eg occupancy lowers energy by lengthening the two axial bonds (in dz²) while the four equatorial bonds shorten — a 4 + 2 tetragonally distorted octahedron typical of Cu(II).",
    choices: [
      { text: "The two axial Cu–O bonds are longer than the four equatorial Cu–O bonds", isCorrect: true },
      { text: "All six Cu–O bonds contract equally to a single uniform short length" },
      { text: "The complex relaxes into a perfectly symmetric, undistorted octahedron" },
      { text: "Copper is spontaneously oxidized from the +2 to the +3 oxidation state" },
    ],
  },
  {
    stem: "Jahn–Teller distortions are generally much larger when the degeneracy involves the eg orbitals than when it involves the t₂g orbitals.",
    type: "TRUE_FALSE",
    topic: "Jahn–Teller Distortion",
    explanation:
      "eg orbitals point directly at the ligands, so uneven eg occupancy strongly perturbs bond lengths; t₂g orbitals point between ligands, so their distortions are much weaker.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The spin-only magnetic moment of a complex is calculated from the number of unpaired electrons n by the formula:",
    topic: "Magnetic Properties of Complexes",
    explanation:
      "The spin-only moment is ν = √[n(n+2)] B.M.; for n = 1,2,3,4,5 it gives 1.73, 2.83, 3.87, 4.90 and 5.92 B.M. respectively.",
    choices: [
      { text: "ν = √[n(n+2)] Bohr magnetons", isCorrect: true },
      { text: "ν = √[n(n−2)] Bohr magnetons" },
      { text: "ν = n(n+2) Bohr magnetons" },
      { text: "ν = 2√n Bohr magnetons" },
    ],
  },
  {
    stem: "A complex is found to have a spin-only magnetic moment of about 3.87 B.M. The number of unpaired electrons present is:",
    topic: "Magnetic Properties of Complexes",
    explanation:
      "√[n(n+2)] = 3.87 solves to n = 3, since √(3×5) = √15 ≈ 3.87 B.M. — for example a d³ Cr³⁺ complex.",
    choices: [
      { text: "3", isCorrect: true },
      { text: "2" },
      { text: "4" },
      { text: "5" },
    ],
  },
  {
    stem: "Low-spin [Fe(CN)₆]³⁻ (an d⁵ ion, t₂g⁵) has one unpaired electron. Its spin-only moment is therefore close to:",
    topic: "Magnetic Properties of Complexes",
    explanation:
      "Strong-field CN⁻ gives low-spin t₂g⁵ with one unpaired electron: ν = √(1×3) = 1.73 B.M., far below the high-spin d⁵ value of 5.92 B.M.",
    choices: [
      { text: "1.73 B.M.", isCorrect: true },
      { text: "5.92 B.M." },
      { text: "3.87 B.M." },
      { text: "0 B.M." },
    ],
  },
  {
    stem: "A substance that is drawn into a magnetic field because it contains unpaired electrons is described as:",
    topic: "Magnetic Properties of Complexes",
    explanation:
      "Unpaired electrons give a net magnetic moment and cause paramagnetism (attraction into a field); fully paired systems are diamagnetic and are weakly repelled.",
    choices: [
      { text: "Paramagnetic", isCorrect: true },
      { text: "Diamagnetic" },
      { text: "Ferroelectric" },
      { text: "Nonmagnetic in all fields" },
    ],
  },
  {
    stem: "Which of the following octahedral complexes are diamagnetic (zero unpaired electrons)? Select all that apply.",
    type: "MULTI",
    topic: "Magnetic Properties of Complexes",
    explanation:
      "Low-spin d⁶ (t₂g⁶) and square-planar d⁸ have all electrons paired (diamagnetic). High-spin d⁵ (5 unpaired) and high-spin d⁶ (4 unpaired) are paramagnetic.",
    choices: [
      { text: "[Co(NH₃)₆]³⁺ (low-spin d⁶)", isCorrect: true },
      { text: "[Fe(CN)₆]⁴⁻ (low-spin d⁶)", isCorrect: true },
      { text: "[Ni(CN)₄]²⁻ (square-planar d⁸)", isCorrect: true },
      { text: "[Mn(H₂O)₆]²⁺ (high-spin d⁵)" },
      { text: "[CoF₆]³⁻ (high-spin d⁶)" },
    ],
  },
  {
    stem: "The 18-electron rule rationalizes the stability of many organometallic complexes by noting that stability is greatest when the metal's valence shell reaches:",
    topic: "The 18-Electron Rule",
    explanation:
      "Filling the nine valence orbitals (five d, one s, three p) with 18 electrons gives a noble-gas configuration, conferring special stability on many low-oxidation-state organometallics.",
    choices: [
      { text: "18 electrons, corresponding to a filled (n−1)d, ns and np set", isCorrect: true },
      { text: "8 electrons, matching the octet of main-group elements" },
      { text: "12 electrons, filling only the d-orbitals" },
      { text: "36 electrons, the configuration of krypton" },
    ],
  },
  {
    stem: "Counting electrons in [Cr(CO)₆] (neutral-atom method): Cr contributes 6 and each CO contributes 2. The total valence electron count is:",
    topic: "The 18-Electron Rule",
    explanation:
      "Cr(0) provides 6 d-electrons and six CO ligands provide 6 × 2 = 12, totalling 18 — hence [Cr(CO)₆] is a stable, saturated 18-electron carbonyl.",
    choices: [
      { text: "18, satisfying the 18-electron rule", isCorrect: true },
      { text: "16, two short of the rule" },
      { text: "20, two in excess of the rule" },
      { text: "12, matching only the d-electrons" },
    ],
  },
  {
    stem: "π-acceptor ligands such as CO and CN⁻ are especially good at stabilizing complexes that obey the 18-electron rule.",
    type: "TRUE_FALSE",
    topic: "The 18-Electron Rule",
    explanation:
      "Strong π-acceptors delocalize excess metal d-density into their π* orbitals (back-bonding), which stabilizes the filled 18-electron configuration and low metal oxidation states.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "In [Fe(CO)₅], using the neutral-atom counting method, the total valence electron count is:",
    topic: "The 18-Electron Rule",
    explanation:
      "Fe(0) has 8 valence electrons and five CO ligands each donate 2 (total 10): 8 + 10 = 18, so iron pentacarbonyl is an 18-electron complex.",
    choices: [
      { text: "18 (Fe contributes 8, five CO contribute 10)", isCorrect: true },
      { text: "16 (Fe contributes 6, five CO contribute 10)" },
      { text: "20 (Fe contributes 10, five CO contribute 10)" },
      { text: "14 (Fe contributes 4, five CO contribute 10)" },
    ],
  },
  {
    stem: "The intense colour and strong-field behaviour of cyanide complexes, contrasted with the pale colour and weak-field behaviour of aqua complexes of the same metal, is a direct experimental demonstration of:",
    topic: "Spectrochemical Series",
    explanation:
      "CN⁻ lies far above H₂O in the spectrochemical series, giving a larger Δo, higher-energy absorption and often low-spin behaviour — visibly different colour and magnetism for the same metal.",
    choices: [
      { text: "The spectrochemical series ordering of ligand field strength", isCorrect: true },
      { text: "The chelate effect operating on monodentate ligands" },
      { text: "Jahn–Teller distortion in symmetric ions" },
      { text: "The 18-electron rule governing all complexes" },
    ],
  },
  {
    stem: "The overall stability (formation) constant β of a complex MLn describes the equilibrium:",
    topic: "Stability Constants & the Chelate Effect",
    explanation:
      "The cumulative formation constant βn is the equilibrium constant for M + nL ⇌ MLn; a large β means formation is strongly favoured and the complex is thermodynamically stable.",
    choices: [
      { text: "M + nL ⇌ MLn, with a large β indicating a very stable complex", isCorrect: true },
      { text: "The kinetic rate at which the complex assembles from its constituent ions" },
      { text: "The energy of the d–d electronic transition responsible for the colour" },
      { text: "The solubility product governing precipitation of the metal hydroxide" },
    ],
  },
  {
    stem: "Stepwise stability constants K₁, K₂, K₃ … for successive ligand addition almost always:",
    topic: "Stability Constants & the Chelate Effect",
    explanation:
      "Statistical factors and increasing steric/electrostatic crowding make each successive step less favourable, so K₁ > K₂ > K₃ … in the great majority of systems.",
    choices: [
      { text: "Decrease steadily as more ligands are added", isCorrect: true },
      { text: "Increase steadily with each added ligand" },
      { text: "Remain exactly equal to one another" },
      { text: "Alternate up and down with no pattern" },
    ],
  },
  {
    stem: "Comparing [Ni(NH₃)₆]²⁺ with [Ni(en)₃]²⁺, the ethylenediamine complex has a much larger overall stability constant. This is the:",
    topic: "Stability Constants & the Chelate Effect",
    explanation:
      "Both give an NiN₆ core, but three chelating en ligands release more free particles than six NH₃, raising ΔS and making [Ni(en)₃]²⁺ far more stable — the chelate effect.",
    choices: [
      { text: "Chelate effect, driven largely by a favourable entropy change", isCorrect: true },
      { text: "Trans effect, which arises from kinetic labilization of trans ligands" },
      { text: "Jahn–Teller effect, which tetragonally distorts the coordination geometry" },
      { text: "Lanthanide contraction, which steadily reduces the metal ionic radius" },
    ],
  },
  {
    stem: "The macrocyclic effect describes the additional stability of complexes formed by cyclic polydentate ligands (such as crown ethers or porphyrins) compared with open-chain analogues. It arises from:",
    topic: "Stability Constants & the Chelate Effect",
    explanation:
      "A pre-organized macrocycle pays less entropic and desolvation penalty on binding than a flexible open chain, so cyclic ligands bind even more strongly — the macrocyclic effect, seen in porphyrins and crowns.",
    choices: [
      { text: "Both favourable entropy (pre-organization) and favourable enthalpy contributions", isCorrect: true },
      { text: "A purely kinetic barrier that slows dissociation without changing stability" },
      { text: "The higher oxidation state that the rigid macrocycle forces on the metal" },
      { text: "The complete loss of chelate ring strain when the ligand becomes cyclic" },
    ],
  },
  {
    stem: "Which factors tend to increase the thermodynamic stability of a metal complex? Select all that apply.",
    type: "MULTI",
    topic: "Stability Constants & the Chelate Effect",
    explanation:
      "Chelation (entropy), high charge density (electrostatics) and good donor–acceptor matching all raise stability. Monodentate substitution loses the chelate advantage, and small strained rings are destabilizing.",
    choices: [
      { text: "Chelating (polydentate) rather than monodentate ligands", isCorrect: true },
      { text: "A higher charge-to-radius ratio on the metal ion", isCorrect: true },
      { text: "Ligands that are strong σ-donors well matched to the metal", isCorrect: true },
      { text: "Using six monodentate ligands instead of three bidentate ones" },
      { text: "Forming strained three-membered chelate rings" },
    ],
  },
  {
    stem: "In haemoglobin, the reversible binding of dioxygen occurs at a metal centre held within a porphyrin ring. That metal is:",
    topic: "Coordination in Biology",
    explanation:
      "Each haem group is an Fe(II)–porphyrin; the iron binds O₂ reversibly at its sixth coordination site, with a proximal histidine occupying the fifth — a coordination complex central to oxygen transport.",
    choices: [
      { text: "Iron, as Fe(II)", isCorrect: true },
      { text: "Magnesium, as Mg(II)" },
      { text: "Cobalt, as Co(III)" },
      { text: "Copper, as Cu(II)" },
    ],
  },
  {
    stem: "Chlorophyll, the green pigment of photosynthesis, is a coordination complex in which a porphyrin-like ring chelates a central:",
    topic: "Coordination in Biology",
    explanation:
      "Chlorophyll is a Mg²⁺–chlorin complex; the central magnesium sits in a porphyrin-derived macrocycle whose conjugation and metal centre tune light absorption for photosynthesis.",
    choices: [
      { text: "Magnesium(II) ion", isCorrect: true },
      { text: "Iron(II) ion" },
      { text: "Manganese(II) ion" },
      { text: "Zinc(II) ion" },
    ],
  },
  {
    stem: "Vitamin B₁₂ (cobalamin) is a naturally occurring coordination compound built around a corrin ring that chelates:",
    topic: "Coordination in Biology",
    explanation:
      "Cobalamin holds a central cobalt ion in a corrin macrocycle; the Co–C bond in its coenzyme forms is one of the few biologically important metal–carbon bonds.",
    choices: [
      { text: "Cobalt", isCorrect: true },
      { text: "Iron" },
      { text: "Nickel" },
      { text: "Molybdenum" },
    ],
  },
  {
    stem: "The carbon monoxide poisoning hazard arises because CO binds to the iron of haemoglobin:",
    topic: "Coordination in Biology",
    explanation:
      "CO is a strong-field ligand that coordinates haem iron far more tightly than O₂; it occupies the oxygen-binding site, so oxygen can no longer be carried — the basis of CO toxicity.",
    choices: [
      { text: "Much more strongly than O₂, blocking reversible oxygen transport", isCorrect: true },
      { text: "More weakly than O₂, so that it is essentially harmless in small doses" },
      { text: "Only once the haem iron has first been oxidized to the Fe(III) state" },
      { text: "At the porphyrin nitrogen atoms rather than the metal" },
    ],
  },
  {
    stem: "Which of the following are metal-containing coordination complexes found in biological systems? Select all that apply.",
    type: "MULTI",
    topic: "Coordination in Biology",
    explanation:
      "Haemoglobin, chlorophyll, cobalamin and carbonic anhydrase all feature a metal ion held by donor ligands — bio-coordination complexes. NaCl and glucose contain no coordinated metal centre.",
    choices: [
      { text: "Haemoglobin (Fe–porphyrin)", isCorrect: true },
      { text: "Chlorophyll (Mg–chlorin)", isCorrect: true },
      { text: "Vitamin B₁₂ (Co–corrin)", isCorrect: true },
      { text: "Carbonic anhydrase active site (Zn)", isCorrect: true },
      { text: "Table salt, NaCl" },
      { text: "Glucose, C₆H₁₂O₆" },
    ],
  },
  {
    stem: "EDTA is widely used in complexometric titrations to determine water hardness because it:",
    topic: "Analytical & Industrial Applications",
    explanation:
      "Hexadentate EDTA → one metal ion in a 1:1 cage complex with a large formation constant; the sharp endpoint (with an indicator such as EBT) allows accurate determination of Ca²⁺/Mg²⁺ hardness.",
    choices: [
      { text: "Forms very stable 1:1 chelate complexes with Ca²⁺ and Mg²⁺", isCorrect: true },
      { text: "Precipitates calcium and magnesium as insoluble carbonates" },
      { text: "Oxidizes the metal ions to a higher oxidation state" },
      { text: "Changes the pH sharply without binding the metals" },
    ],
  },
  {
    stem: "In the metallurgical extraction of gold and silver, the metals are dissolved from their ores by cyanide as soluble complexes. For gold the species formed is:",
    topic: "Analytical & Industrial Applications",
    explanation:
      "The MacArthur–Forrest cyanidation process forms the linear [Au(CN)₂]⁻; gold is then recovered by reduction with zinc — coordination chemistry applied industrially.",
    choices: [
      { text: "[Au(CN)₂]⁻", isCorrect: true },
      { text: "[Au(CN)₆]³⁻" },
      { text: "[AuCl₄]⁻" },
      { text: "[Au(NH₃)₂]⁺" },
    ],
  },
  {
    stem: "Ligands such as EDTA are added to processed foods and shampoos as sequestering agents. Their function is to:",
    topic: "Analytical & Industrial Applications",
    explanation:
      "By chelating free Fe³⁺/Cu²⁺ etc., EDTA removes catalytic metals from solution, slowing oxidation and rancidity — the same sequestering principle used to soften water.",
    choices: [
      { text: "Bind trace metal ions that would otherwise catalyse spoilage or oxidation", isCorrect: true },
      { text: "Increase the free concentration of catalytic trace metal ions in the product" },
      { text: "Provide an attractive colour to the finished product through d–d absorption" },
      { text: "Raise the oxidation state of any trace metals so they precipitate out" },
    ],
  },
  {
    stem: "Metal carbonyls such as [Ni(CO)₄] are stabilized by synergic bonding, which combines:",
    topic: "Organometallic Bonding",
    explanation:
      "CO donates its carbon lone pair into an empty metal orbital (σ), while filled metal t₂g orbitals back-donate into CO's π* (π). This synergic push–pull strengthens the M–C bond and weakens C≡O.",
    choices: [
      { text: "σ-donation from CO to the metal with π-back-donation from metal to CO π* orbitals", isCorrect: true },
      { text: "Pure ionic attraction between a Ni²⁺ cation and formally anionic CO⁻ ligands" },
      { text: "Hydrogen bonding between the oxygen atoms of adjacent coordinated CO ligands" },
      { text: "Only weak electrostatic ion–dipole forces with no covalent contribution" },
    ],
  },
  {
    stem: "Evidence for π-back-bonding in metal carbonyls comes from infrared spectroscopy, which shows that on coordination the C–O stretching frequency:",
    topic: "Organometallic Bonding",
    explanation:
      "Back-donation populates CO's π* orbital, weakening the C–O bond; the stretching frequency drops from ~2143 cm⁻¹ in free CO to lower values, quantifying the degree of back-bonding.",
    choices: [
      { text: "Decreases, because electron density enters the C–O antibonding π* orbital", isCorrect: true },
      { text: "Increases, because the C–O bond becomes stronger" },
      { text: "Stays exactly the same as in free CO, showing no change on coordination" },
      { text: "Disappears entirely from the infrared spectrum once CO is coordinated" },
    ],
  },
  {
    stem: "Ferrocene, [Fe(C₅H₅)₂], is the archetypal sandwich compound. Each cyclopentadienyl ring binds iron in an η⁵ fashion, meaning:",
    topic: "Organometallic Bonding",
    explanation:
      "The η⁵ (pentahapto) designation means all five carbons of each C₅H₅ ring donate to iron; the two parallel rings sandwich an 18-electron Fe(II) centre, giving ferrocene its great stability.",
    choices: [
      { text: "All five carbon atoms of the ring bond to the metal simultaneously", isCorrect: true },
      { text: "Only a single carbon of each ring σ-bonds to the iron centre" },
      { text: "The rings are held to Fe³⁺ purely by electrostatic ionic forces" },
      { text: "Iron sits within the plane of just one cyclopentadienyl ring" },
    ],
  },
  {
    stem: "The hapticity symbol ηⁿ in organometallic nomenclature specifies:",
    topic: "Organometallic Bonding",
    explanation:
      "Hapticity ηⁿ counts how many adjacent atoms of a single ligand are coordinated — e.g. η⁵-cyclopentadienyl uses five carbons, η²-ethene uses two.",
    choices: [
      { text: "The number of contiguous atoms of a ligand bonded to the metal", isCorrect: true },
      { text: "The formal oxidation state adopted by the central metal atom" },
      { text: "The total valence electron count of the whole organometallic complex" },
      { text: "The total number of ligands of that particular type in the complex" },
    ],
  },
  {
    stem: "A complex is described as kinetically inert if it:",
    topic: "Kinetics: Labile vs Inert",
    explanation:
      "Inertness is a kinetic property (slow substitution), distinct from thermodynamic stability. Low-spin d³ and d⁶ complexes (e.g. Cr(III), Co(III)) are classically inert.",
    choices: [
      { text: "Undergoes ligand substitution only very slowly", isCorrect: true },
      { text: "Has a very small overall formation constant β" },
      { text: "Always dissociates rapidly on dissolving in water" },
      { text: "Contains no d-electrons whatsoever on the metal" },
    ],
  },
  {
    stem: "Crystal field theory predicts that d³ and low-spin d⁶ octahedral complexes are kinetically inert because they have:",
    topic: "Kinetics: Labile vs Inert",
    explanation:
      "The large loss of CFSE on reaching the transition state for substitution makes d³ (t₂g³) and low-spin d⁶ (t₂g⁶) complexes react slowly — they are kinetically inert.",
    choices: [
      { text: "A high CFSE and no low-energy pathway for losing a ligand", isCorrect: true },
      { text: "Zero CFSE and thus no barrier to substitution" },
      { text: "A half-filled eg set that labilizes bonds" },
      { text: "An odd number of d-electrons that speeds exchange" },
    ],
  },
  {
    stem: "The trans effect, important in the synthesis of square-planar Pt(II) complexes, refers to the ability of a coordinated ligand to:",
    topic: "Kinetics: Labile vs Inert",
    explanation:
      "Strong trans-directing ligands (CN⁻, CO, C₂H₄ > I⁻ > Cl⁻ > NH₃) labilize the group trans to them, allowing controlled, stepwise synthesis of specific isomers such as cisplatin.",
    choices: [
      { text: "Direct incoming substitution to the position trans to itself", isCorrect: true },
      { text: "Increase the oxidation state of the central platinum ion during substitution" },
      { text: "Force the square-planar complex to rearrange into a tetrahedral geometry" },
      { text: "Prevent any further ligand substitution from occurring at the metal centre" },
    ],
  },
  {
    stem: "A double salt such as carnallite, KCl·MgCl₂·6H₂O, differs fundamentally from a coordination complex in that a double salt:",
    topic: "Double Salts vs Complexes",
    explanation:
      "Double salts exist only in the solid; on dissolving they give all the free ions (K⁺, Mg²⁺, Cl⁻). A complex like [Fe(CN)₆]⁴⁻ keeps its complex ion intact in solution.",
    choices: [
      { text: "Dissociates completely into all its simple ions in solution", isCorrect: true },
      { text: "Retains a discrete, stable complex ion when dissolved in water" },
      { text: "Contains no water of crystallization within its solid lattice" },
      { text: "Has a metal in an unusually high oxidation state" },
    ],
  },
  {
    stem: "The primary reason the 4d and 5d transition metals show a much stronger tendency to be low-spin than the 3d metals is that:",
    topic: "Periodic Trends in Complexes",
    explanation:
      "4d and 5d orbitals are larger and interact more strongly with ligands, so Δo is much greater (roughly 50% larger per row); Δo > P almost always, making heavier d-metals predominantly low-spin.",
    choices: [
      { text: "Their larger, more diffuse d-orbitals give a substantially bigger Δo", isCorrect: true },
      { text: "Their electron pairing energies are far larger than those of the 3d metals" },
      { text: "They almost always adopt a four-coordinate tetrahedral geometry" },
      { text: "They possess no available d-electrons that are able to pair up" },
    ],
  },
  {
    stem: "Across the spectrochemical series the same metal ion gives complexes whose Δo increases with ligand field strength. For Cr³⁺, which complex absorbs at the shortest wavelength (highest energy)?",
    topic: "Spectrochemical Series",
    explanation:
      "Largest Δo means highest-energy (shortest-wavelength) d–d absorption. Among these, cyanide gives the biggest splitting, so [Cr(CN)₆]³⁻ absorbs at the shortest wavelength.",
    choices: [
      { text: "[Cr(CN)₆]³⁻, the strongest-field ligand set", isCorrect: true },
      { text: "[CrCl₆]³⁻, a weak-field halide complex" },
      { text: "[CrF₆]³⁻, a weak-field fluoride complex" },
      { text: "[Cr(H₂O)₆]³⁺, an intermediate aqua complex" },
    ],
  },
  {
    stem: "A metal ion forms a colourless, diamagnetic, tetrahedral complex [MCl₄]²⁻. Which d-configuration is most consistent with all three observations?",
    topic: "Integrated Reasoning",
    explanation:
      "Colourless rules out d–d transitions, diamagnetic rules out unpaired electrons: only a full d¹⁰ set satisfies both, as in [ZnCl₄]²⁻.",
    choices: [
      { text: "d¹⁰, e.g. Zn²⁺", isCorrect: true },
      { text: "d⁵ high-spin, e.g. Mn²⁺" },
      { text: "d⁷, e.g. Co²⁺" },
      { text: "d³, e.g. Cr³⁺" },
      { text: "d⁹, e.g. Cu²⁺" },
    ],
  },
  {
    stem: "The green colour of [Ni(H₂O)₆]²⁺ versus the blue of [Ni(NH₃)₆]²⁺ for the same Ni²⁺ centre is explained by:",
    topic: "Spectrochemical Series",
    explanation:
      "Replacing H₂O with the stronger-field NH₃ raises Δo, moving the d–d absorption to higher energy and changing the transmitted colour from green to blue for the same metal.",
    choices: [
      { text: "Ammonia lying above water in the spectrochemical series", isCorrect: true },
      { text: "A change in the oxidation state of nickel" },
      { text: "A change in coordination number from 6 to 4" },
      { text: "Jahn–Teller distortion only in the aqua complex" },
    ],
  },
  {
    stem: "Which observations would each, on their own, indicate that a given octahedral complex is low-spin rather than high-spin? Select all that apply.",
    type: "MULTI",
    topic: "Integrated Reasoning",
    explanation:
      "A small moment (more pairing), a strong-field ligand (large Δo > P) and a large Δo all point to low-spin. Charge-transfer intensity is unrelated to spin state, and tetrahedral complexes are essentially always high-spin.",
    choices: [
      { text: "A measured magnetic moment much smaller than the high-spin prediction", isCorrect: true },
      { text: "The presence of a very strong-field ligand such as CN⁻", isCorrect: true },
      { text: "A d–d absorption at notably higher energy (larger Δo)", isCorrect: true },
      { text: "An intense colour arising from charge transfer only" },
      { text: "A tetrahedral rather than octahedral geometry" },
    ],
  },
  {
    stem: "Overall, the crystal field model succeeds in explaining colour, magnetism and CFSE trends, but it fundamentally treats the metal–ligand interaction as purely:",
    topic: "Integrated Reasoning",
    explanation:
      "CFT models ligands as point negative charges (electrostatic only); ligand field / MO theory is needed to explain covalency, π-back-bonding, and why π-acceptors like CO produce such large splittings.",
    choices: [
      { text: "Electrostatic, treating each ligand as a simple point negative charge", isCorrect: true },
      { text: "Covalent, so it correctly predicts the full spectrochemical ordering of ligands" },
      { text: "Metallic, treating the ligand electrons as a delocalized conduction band" },
      { text: "Nuclear in origin, arising from direct interaction with the metal nucleus" },
    ],
  },
];
