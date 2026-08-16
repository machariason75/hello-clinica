import type { Q } from "../_lib/qbank";

export const ORGANIC_SET_7: Q[] = [
  {
    stem: "Infrared spectroscopy detects molecular vibrations; a bond absorbs IR radiation only if the vibration causes a change in the molecule's:",
    topic: "IR Spectroscopy",
    explanation:
      "A vibrational mode is IR-active only if it changes the molecular dipole moment. Symmetric stretches that leave the dipole unchanged (e.g. the C=C of a symmetrical alkene) are weak or absent in the IR.",
    choices: [
      { text: "Dipole moment during the vibration", isCorrect: true },
      { text: "Total number of electrons present" },
      { text: "Overall molecular mass value" },
      { text: "Colour under visible light" },
    ],
  },
  {
    stem: "A strong, sharp absorption near 1700–1750 cm⁻¹ in an IR spectrum is most characteristic of a:",
    topic: "IR Spectroscopy",
    explanation:
      "The carbonyl (C=O) stretch is intense and appears around 1700–1750 cm⁻¹, one of the most diagnostic IR bands. Its exact position distinguishes esters, ketones, aldehydes, acids and amides.",
    choices: [
      { text: "Carbonyl (C=O) group", isCorrect: true },
      { text: "Carbon–hydrogen single bond" },
      { text: "Carbon–carbon single bond" },
      { text: "Isolated ether C–O–C linkage" },
    ],
  },
  {
    stem: "A broad absorption spanning roughly 3200–3550 cm⁻¹ usually indicates:",
    topic: "IR Spectroscopy",
    explanation:
      "The O–H stretch of an alcohol is broad (from hydrogen bonding) and centred around 3200–3550 cm⁻¹. Its breadth distinguishes it from the sharper N–H bands in the same region.",
    choices: [
      { text: "An O–H group of an alcohol", isCorrect: true },
      { text: "A C≡C triple bond" },
      { text: "A carbonyl double bond" },
      { text: "An aromatic ring breathing mode" },
    ],
  },
  {
    stem: "The very broad O–H absorption of a carboxylic acid (often 2500–3300 cm⁻¹, overlapping the C–H region) is broad because of:",
    topic: "IR Spectroscopy",
    explanation:
      "Carboxylic acids exist as strongly hydrogen-bonded dimers, giving an extremely broad O–H stretch that smears across 2500–3300 cm⁻¹ and overlaps the C–H stretches — a hallmark of the –COOH group.",
    choices: [
      { text: "Strong hydrogen bonding in acid dimers", isCorrect: true },
      { text: "Complete absence of any O–H bond" },
      { text: "An unusually rigid, isolated O–H bond" },
      { text: "Resonance that removes the dipole entirely" },
    ],
  },
  {
    stem: "A medium, sharp absorption near 2210–2260 cm⁻¹ is characteristic of a:",
    topic: "IR Spectroscopy",
    explanation:
      "The C≡N stretch of a nitrile appears as a sharp band around 2210–2260 cm⁻¹, in a fairly empty region of the spectrum; a C≡C stretch appears nearby (~2100–2260) but is usually weaker.",
    choices: [
      { text: "Nitrile (C≡N) group", isCorrect: true },
      { text: "Simple C=O carbonyl group" },
      { text: "Alcohol O–H group" },
      { text: "Aromatic C–H bond" },
    ],
  },
  {
    stem: "C–H stretches just above 3000 cm⁻¹ (around 3000–3100) rather than just below suggest hydrogens attached to:",
    topic: "IR Spectroscopy",
    explanation:
      "sp²-hybridised (vinyl or aromatic) C–H bonds absorb just above 3000 cm⁻¹, whereas sp³ (alkyl) C–H bonds absorb just below 3000. This small shift helps flag unsaturation or an aromatic ring.",
    choices: [
      { text: "sp² carbons (vinyl or aromatic)", isCorrect: true },
      { text: "sp³ alkyl carbons only" },
      { text: "A carbonyl carbon exclusively" },
      { text: "An sp carbon of an alkyne" },
    ],
  },
  {
    stem: "Within the carbonyl region, an ester C=O typically absorbs at a HIGHER wavenumber than a ketone C=O mainly because of:",
    topic: "IR Spectroscopy",
    explanation:
      "The ester oxygen inductively withdraws electron density, strengthening the C=O bond and raising its stretch (~1735–1750 cm⁻¹) relative to a ketone (~1705–1725). Conjugation, by contrast, lowers a carbonyl stretch.",
    choices: [
      { text: "The inductive electron withdrawal by the ester oxygen", isCorrect: true },
      { text: "A weaker C=O bond in the ester group" },
      { text: "Extra conjugation that raises the frequency" },
      { text: "The greater mass of the ester group" },
    ],
  },
  {
    stem: "Conjugation of a carbonyl with an adjacent C=C (an α,β-unsaturated carbonyl) shifts the C=O stretch to:",
    topic: "IR Spectroscopy",
    explanation:
      "Conjugation delocalises the C=O π electrons, giving the bond partial single-bond character and lowering its force constant, so the stretch moves to a lower wavenumber (typically ~1680 cm⁻¹) than an isolated carbonyl.",
    choices: [
      { text: "A lower wavenumber than an isolated C=O", isCorrect: true },
      { text: "A much higher wavenumber than usual" },
      { text: "Exactly the same position as an alcohol O–H" },
      { text: "The triple-bond region near 2200" },
    ],
  },
  {
    stem: "The complex, hard-to-assign region below about 1500 cm⁻¹ that is nonetheless a unique molecular signature is called the:",
    topic: "IR Spectroscopy",
    explanation:
      "The fingerprint region (roughly 500–1500 cm⁻¹) contains many overlapping bending and skeletal vibrations. It is difficult to assign band-by-band but is essentially unique to each compound, useful for confirming identity by comparison.",
    choices: [
      { text: "Fingerprint region", isCorrect: true },
      { text: "Carbonyl region" },
      { text: "Hydroxyl stretch region" },
      { text: "Overtone-only region" },
    ],
  },
  {
    stem: "A primary amine (–NH₂) is distinguished from a secondary amine (–NH–) in the IR N–H stretch region by showing:",
    topic: "IR Spectroscopy",
    explanation:
      "A primary amine has two N–H bonds and shows two N–H stretching bands (symmetric and antisymmetric) near 3300–3500 cm⁻¹; a secondary amine has a single N–H and shows just one band.",
    choices: [
      { text: "Two N–H bands rather than one", isCorrect: true },
      { text: "No N–H absorption at all" },
      { text: "A single very broad O–H-like band" },
      { text: "A band in the triple-bond region" },
    ],
  },
  {
    stem: "Why is the symmetric C=C stretch of a fully symmetrical internal alkene (e.g. 2,3-dimethyl-2-butene) weak or absent in the IR?",
    topic: "IR Spectroscopy",
    explanation:
      "A symmetric C=C stretch in a symmetrically substituted alkene produces little or no change in dipole moment, so it is IR-inactive (or very weak). Such symmetric vibrations are, however, strong in Raman spectroscopy.",
    choices: [
      { text: "The stretch causes little or no dipole change", isCorrect: true },
      { text: "The molecule has no C=C bond present" },
      { text: "The bond is too strong to vibrate" },
      { text: "The alkene absorbs only in the UV" },
    ],
  },
  {
    stem: "An aldehyde can often be distinguished from a ketone in the IR by two weak C–H stretches near 2720 and 2820 cm⁻¹ arising from the:",
    topic: "IR Spectroscopy",
    explanation:
      "The aldehyde C–H (the H directly on the carbonyl carbon) gives two characteristic weak bands near 2720 and 2820 cm⁻¹. A ketone, lacking that H, does not show them, helping tell the two carbonyls apart.",
    choices: [
      { text: "Aldehyde C–H on the carbonyl carbon", isCorrect: true },
      { text: "Alcohol O–H stretch overtone bands" },
      { text: "Aromatic ring overtones only" },
      { text: "Nitrile C≡N combination band" },
    ],
  },
  {
    stem: "The position of an IR absorption (its wavenumber) increases with:",
    topic: "IR Spectroscopy",
    explanation:
      "By the simple harmonic-oscillator model, wavenumber rises with a stronger bond (larger force constant) and falls with heavier atoms (larger reduced mass). Thus C≡C > C=C > C–C, and C–H (light H) absorbs at high wavenumber.",
    choices: [
      { text: "A stronger bond and lighter atoms", isCorrect: true },
      { text: "A weaker bond and heavier atoms" },
      { text: "Higher molecular mass alone" },
      { text: "Greater conjugation in every case" },
    ],
  },
  {
    stem: "Which single IR feature would most cleanly distinguish a carboxylic acid from its corresponding ester?",
    topic: "IR Spectroscopy",
    explanation:
      "The carboxylic acid shows a very broad O–H stretch (2500–3300 cm⁻¹) that the ester entirely lacks; both have a strong C=O, so the O–H band is the distinguishing feature.",
    choices: [
      { text: "The broad acid O–H stretch, absent in the ester", isCorrect: true },
      { text: "The presence of a C=O band in one only" },
      { text: "A sharp nitrile band unique to the acid" },
      { text: "An sp³ C–H band unique to the ester" },
    ],
  },
  {
    stem: "Which IR absorptions are correctly matched to their functional group? Select all that apply.",
    type: "MULTI",
    topic: "IR Spectroscopy",
    explanation:
      "C=O ~1700–1750, nitrile C≡N ~2210–2260, alcohol O–H broad ~3200–3550, and sp²/aromatic C–H just above 3000 are all correct. A C–C single bond has no single strong diagnostic band (it lies in the crowded fingerprint region).",
    choices: [
      { text: "C=O near 1700–1750 cm⁻¹", isCorrect: true },
      { text: "C≡N near 2210–2260 cm⁻¹", isCorrect: true },
      { text: "Alcohol O–H broad near 3200–3550 cm⁻¹", isCorrect: true },
      { text: "sp² C–H just above 3000 cm⁻¹", isCorrect: true },
      { text: "C–C single bond with a strong band near 2200 cm⁻¹" },
      { text: "Carbonyl C=O near 3400 cm⁻¹" },
    ],
  },
  {
    stem: "Which statements about interpreting IR spectra are correct? Select all that apply.",
    type: "MULTI",
    topic: "IR Spectroscopy",
    explanation:
      "IR activity needs a dipole change; conjugation lowers a C=O stretch; a primary amine shows two N–H bands; the fingerprint region is unique per compound. Symmetric alkene C=C stretches are weak, not strong, in IR.",
    choices: [
      { text: "A vibration must change the dipole to absorb IR", isCorrect: true },
      { text: "Conjugation lowers the C=O stretching frequency", isCorrect: true },
      { text: "A primary amine shows two N–H stretching bands", isCorrect: true },
      { text: "The fingerprint region is essentially unique to a compound", isCorrect: true },
      { text: "A symmetric alkene C=C stretch is very strong in IR" },
    ],
  },
  {
    stem: "Conjugation of a carbonyl group with a neighbouring C=C lowers the wavenumber of its IR C=O stretch relative to an isolated carbonyl.",
    type: "TRUE_FALSE",
    topic: "IR Spectroscopy",
    explanation:
      "Delocalisation of the π electrons gives the C=O partial single-bond character, lowering its force constant and shifting the stretch to a lower wavenumber (around 1680 cm⁻¹).",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "In a ¹H NMR spectrum, the number of distinct signals tells you the number of:",
    topic: "¹H NMR",
    explanation:
      "Each set of chemically equivalent protons gives one signal. Counting signals therefore counts the number of chemically distinct (non-equivalent) proton environments in the molecule.",
    choices: [
      { text: "Non-equivalent proton environments", isCorrect: true },
      { text: "Carbon atoms in the molecule" },
      { text: "Total hydrogen atoms present" },
      { text: "Rings plus double bonds present" },
    ],
  },
  {
    stem: "The area under a ¹H NMR signal (its integration) is proportional to the:",
    topic: "¹H NMR",
    explanation:
      "Integration gives the relative number of protons producing each signal. Ratios of integrals (e.g. 3:2:1) reveal how many H are in each environment, a key step in assigning a structure.",
    choices: [
      { text: "Relative number of protons giving that signal", isCorrect: true },
      { text: "Number of neighbouring carbon atoms" },
      { text: "Absolute molecular mass of the sample" },
      { text: "Electronegativity of the nearest atom" },
    ],
  },
  {
    stem: "A proton's chemical shift (δ, in ppm) moves DOWNFIELD (higher δ) when the proton is:",
    topic: "¹H NMR",
    explanation:
      "Nearby electronegative atoms or π systems deshield a proton (pull electron density away), so it feels more of the applied field and resonates downfield at higher δ. Shielded protons appear upfield at low δ.",
    choices: [
      { text: "Deshielded by nearby electronegative or π groups", isCorrect: true },
      { text: "Strongly shielded by electron-rich neighbours" },
      { text: "Completely isolated from all other atoms" },
      { text: "Bonded to an atom of very low electronegativity" },
    ],
  },
  {
    stem: "Using the n+1 rule, a ¹H NMR signal split into a quartet indicates the proton has how many equivalent neighbouring protons?",
    topic: "¹H NMR",
    explanation:
      "The multiplicity from n equivalent neighbours is n+1 lines. A quartet (4 lines) means n = 3, i.e. three equivalent adjacent protons — the classic pattern for the CH₃ neighbours of an ethyl group's CH₂.",
    choices: [
      { text: "Three", isCorrect: true },
      { text: "Four" },
      { text: "Two" },
      { text: "Zero" },
    ],
  },
  {
    stem: "The classic ¹H NMR pattern of an ethyl group (–CH₂–CH₃) is:",
    topic: "¹H NMR",
    explanation:
      "The CH₃ (3H) is split by the two CH₂ protons into a triplet; the CH₂ (2H) is split by the three CH₃ protons into a quartet. A 3H triplet plus a 2H quartet is the signature of an ethyl group.",
    choices: [
      { text: "A 3H triplet and a 2H quartet", isCorrect: true },
      { text: "A 3H singlet and a 2H singlet" },
      { text: "A 2H triplet and a 3H doublet" },
      { text: "Two 5H multiplets of equal area" },
    ],
  },
  {
    stem: "A ¹H NMR signal appearing as a singlet indicates the responsible protons have:",
    topic: "¹H NMR",
    explanation:
      "A singlet means no coupling is observed, i.e. no non-equivalent protons on adjacent carbons (n = 0, giving n+1 = 1 line). Equivalent protons on the same carbon do not split one another.",
    choices: [
      { text: "No non-equivalent neighbouring protons", isCorrect: true },
      { text: "Exactly three equivalent neighbours" },
      { text: "Two neighbours on the next carbon" },
      { text: "A neighbouring carbonyl carbon only" },
    ],
  },
  {
    stem: "Protons on a benzene ring typically appear in the ¹H NMR near which chemical-shift range?",
    topic: "¹H NMR",
    explanation:
      "Aromatic ring protons resonate around δ 6.5–8 ppm, strongly deshielded by the ring current of the aromatic π system — well downfield of ordinary alkyl protons (δ ~0.9–1.5).",
    choices: [
      { text: "δ 6.5–8 ppm", isCorrect: true },
      { text: "δ 0–1 ppm" },
      { text: "δ 2–2.5 ppm" },
      { text: "δ 3–4 ppm" },
    ],
  },
  {
    stem: "An aldehyde proton (R–CHO) is characteristically found far downfield in ¹H NMR, near:",
    topic: "¹H NMR",
    explanation:
      "The aldehyde CHO proton is one of the most deshielded common protons, appearing around δ 9–10 ppm because it sits on the electron-poor carbonyl carbon and in the deshielding zone of the C=O.",
    choices: [
      { text: "δ 9–10 ppm", isCorrect: true },
      { text: "δ 1–2 ppm" },
      { text: "δ 3–4 ppm" },
      { text: "δ 5–6 ppm" },
    ],
  },
  {
    stem: "The carboxylic acid –COOH proton in ¹H NMR is typically observed:",
    topic: "¹H NMR",
    explanation:
      "The acidic –COOH proton is extremely deshielded, appearing very far downfield (often δ 10–12 ppm and sometimes beyond). Like O–H and N–H protons, its exact shift is variable and concentration-dependent.",
    choices: [
      { text: "Very far downfield, around δ 10–12 ppm", isCorrect: true },
      { text: "Upfield near δ 0–1 ppm" },
      { text: "In the aromatic region only" },
      { text: "Never visible under any conditions" },
    ],
  },
  {
    stem: "O–H and N–H protons often appear as broad ¹H NMR signals whose position varies with concentration because they are:",
    topic: "¹H NMR",
    explanation:
      "Exchangeable O–H and N–H protons undergo rapid exchange (hydrogen bonding), which broadens their signals and makes the chemical shift concentration- and solvent-dependent. Adding D₂O can make them disappear.",
    choices: [
      { text: "Exchangeable and hydrogen-bonding", isCorrect: true },
      { text: "Bonded only to sp carbons" },
      { text: "Completely shielded from the field" },
      { text: "Split into very sharp quartets always" },
    ],
  },
  {
    stem: "Two protons are chemically equivalent (and give a single ¹H NMR signal) when they are related by:",
    topic: "¹H NMR",
    explanation:
      "Protons interchangeable by a symmetry operation (e.g. a mirror plane or rotation) are chemically equivalent and resonate at the same shift, such as the six protons of the two methyls in acetone.",
    choices: [
      { text: "A molecular symmetry operation", isCorrect: true },
      { text: "Being on adjacent different carbons" },
      { text: "Having different electronegativity" },
      { text: "Bonding to different halogens" },
    ],
  },
  {
    stem: "Deshielding of a proton by an adjacent electronegative atom such as oxygen or a halogen:",
    topic: "¹H NMR",
    explanation:
      "An electronegative neighbour withdraws electron density, reducing the local shielding so the proton resonates at higher δ (downfield). For example, –OCH₃ protons appear near δ 3.3, well downfield of a plain alkyl CH₃.",
    choices: [
      { text: "Moves its signal downfield to higher δ", isCorrect: true },
      { text: "Moves its signal upfield to lower δ" },
      { text: "Removes the signal from the spectrum" },
      { text: "Splits it into a wide multiplet always" },
    ],
  },
  {
    stem: "Coupling (spin–spin splitting) in a simple first-order ¹H NMR spectrum arises between protons that are:",
    topic: "¹H NMR",
    explanation:
      "Splitting arises between non-equivalent protons on adjacent atoms (typically three bonds apart, e.g. vicinal H–C–C–H). Equivalent protons and those too far apart do not show mutual splitting in a simple spectrum.",
    choices: [
      { text: "Non-equivalent and on adjacent carbons", isCorrect: true },
      { text: "Chemically equivalent to each other" },
      { text: "Separated by many intervening bonds" },
      { text: "On the same carbon and identical" },
    ],
  },
  {
    stem: "A ¹H NMR doublet integrating for 6H, coupled to a single multiplet, is the classic signature of:",
    topic: "¹H NMR",
    explanation:
      "Two equivalent methyls that couple to one adjacent CH (an isopropyl group, (CH₃)₂CH–) give a 6H doublet. The lone CH appears as a septet (split by the six equivalent methyl protons).",
    choices: [
      { text: "An isopropyl group, (CH₃)₂CH–", isCorrect: true },
      { text: "A single methyl group, –CH₃" },
      { text: "An aldehyde proton, –CHO" },
      { text: "A benzene ring, C₆H₅" },
    ],
  },
  {
    stem: "Which pieces of information are read directly from a ¹H NMR spectrum? Select all that apply.",
    type: "MULTI",
    topic: "¹H NMR",
    explanation:
      "Number of signals (distinct H environments), chemical shift (electronic environment), integration (relative H counts), and multiplicity (number of neighbours via n+1) are all obtained. Exact molecular mass is not read from ¹H NMR — that comes from mass spectrometry.",
    choices: [
      { text: "The number of distinct proton environments", isCorrect: true },
      { text: "The chemical shift of each environment", isCorrect: true },
      { text: "The relative number of protons from integration", isCorrect: true },
      { text: "The number of neighbours from the splitting pattern", isCorrect: true },
      { text: "The exact molecular mass of the compound" },
      { text: "The absolute configuration by direct readout" },
    ],
  },
  {
    stem: "Which ¹H NMR shifts are correctly matched? Select all that apply.",
    type: "MULTI",
    topic: "¹H NMR",
    explanation:
      "Aldehyde CHO ~9–10, carboxylic acid –COOH ~10–12, aromatic H ~6.5–8, and alkyl CH₃ ~0.9 are all correct. A simple alkane proton does not appear near δ 7.",
    choices: [
      { text: "Aldehyde CHO around δ 9–10", isCorrect: true },
      { text: "Carboxylic acid OH around δ 10–12", isCorrect: true },
      { text: "Aromatic ring H around δ 6.5–8", isCorrect: true },
      { text: "Simple alkyl CH₃ around δ 0.9", isCorrect: true },
      { text: "A plain alkane CH₂ around δ 7" },
    ],
  },
  {
    stem: "In first-order ¹H NMR, a set of protons with three equivalent neighbouring protons appears as a quartet (n + 1 lines).",
    type: "TRUE_FALSE",
    topic: "¹H NMR",
    explanation:
      "The n+1 rule gives multiplicity: three equivalent neighbours (n = 3) produce a quartet (4 lines), as seen for the CH₂ of an ethyl group split by its CH₃.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The number of signals in a proton-decoupled ¹³C NMR spectrum tells you the number of:",
    topic: "¹³C NMR",
    explanation:
      "Each chemically distinct carbon gives one signal in a proton-decoupled ¹³C spectrum. Counting signals counts the non-equivalent carbon environments, complementing the proton count from ¹H NMR.",
    choices: [
      { text: "Non-equivalent carbon environments", isCorrect: true },
      { text: "Hydrogen atoms in the molecule" },
      { text: "Rings in the molecule only" },
      { text: "Oxygen atoms present in total" },
    ],
  },
  {
    stem: "A major reason ¹³C NMR signals are much weaker than ¹H signals is that:",
    topic: "¹³C NMR",
    explanation:
      "The NMR-active ¹³C isotope is only ~1.1% of natural carbon, so few nuclei contribute; ¹³C is also less sensitive than ¹H. Signals are therefore weak and typically require signal averaging over many scans.",
    choices: [
      { text: "¹³C is only about 1.1%% of natural carbon", isCorrect: true },
      { text: "Carbon has no nuclear spin at all" },
      { text: "¹³C nuclei are far more abundant than ¹H" },
      { text: "Carbon absorbs only in the infrared" },
    ],
  },
  {
    stem: "A carbonyl carbon (C=O) appears in ¹³C NMR at a characteristically high chemical shift, roughly:",
    topic: "¹³C NMR",
    explanation:
      "Carbonyl carbons are strongly deshielded and appear around δ 160–220 ppm (ketones/aldehydes ~190–220; acids/esters ~160–185), far downfield of sp³ alkyl carbons (~0–50).",
    choices: [
      { text: "δ 160–220 ppm", isCorrect: true },
      { text: "δ 0–20 ppm" },
      { text: "δ 40–60 ppm" },
      { text: "δ 100–110 ppm" },
    ],
  },
  {
    stem: "Proton decoupling is applied in routine ¹³C NMR so that each carbon appears as:",
    topic: "¹³C NMR",
    explanation:
      "Broadband proton decoupling collapses the C–H coupling, so each distinct carbon gives a single sharp singlet. This simplifies the spectrum to one line per carbon environment and boosts signal intensity.",
    choices: [
      { text: "A single sharp singlet", isCorrect: true },
      { text: "A broad multiplet from H coupling" },
      { text: "A quartet from every carbon" },
      { text: "No signal at all" },
    ],
  },
  {
    stem: "In mass spectrometry, the peak corresponding to the intact molecule that has lost a single electron is the:",
    topic: "Mass Spectrometry",
    explanation:
      "The molecular ion (M⁺•), a radical cation formed by loss of one electron, appears at m/z equal to the molecular mass. Its position gives the molecular weight; it may be weak if the ion fragments readily.",
    choices: [
      { text: "Molecular ion (M⁺•)", isCorrect: true },
      { text: "Base peak, always at m/z 1" },
      { text: "Isotope peak two mass units higher" },
      { text: "Fragment peak of lowest mass only" },
    ],
  },
  {
    stem: "The tallest peak in a mass spectrum, used as the intensity reference (100%%), is called the:",
    topic: "Mass Spectrometry",
    explanation:
      "The base peak is the most intense peak and is assigned 100% relative abundance; all other peaks are scaled to it. It often corresponds to a particularly stable fragment cation, not necessarily the molecular ion.",
    choices: [
      { text: "Base peak", isCorrect: true },
      { text: "Molecular ion always" },
      { text: "Isotope satellite peak" },
      { text: "Parent O–H peak" },
    ],
  },
  {
    stem: "A compound whose mass spectrum shows two molecular-ion peaks of nearly equal height at M and M+2 most likely contains:",
    topic: "Mass Spectrometry",
    explanation:
      "Bromine has two abundant isotopes (⁷⁹Br and ⁸¹Br) in roughly 1:1 ratio, giving M and M+2 peaks of similar height. Chlorine (³⁵Cl:³⁷Cl ≈ 3:1) gives an M:M+2 pattern nearer 3:1.",
    choices: [
      { text: "A bromine atom", isCorrect: true },
      { text: "Only carbon and hydrogen" },
      { text: "A single oxygen atom" },
      { text: "A nitrogen atom only" },
    ],
  },
  {
    stem: "An M+2 peak about one-third the height of the molecular ion (≈ 3:1) is the classic signature of:",
    topic: "Mass Spectrometry",
    explanation:
      "Chlorine's isotopes ³⁵Cl and ³⁷Cl occur in about a 3:1 ratio, so a chlorinated compound shows M:M+2 ≈ 3:1. This isotope pattern is a quick way to spot chlorine in a mass spectrum.",
    choices: [
      { text: "A chlorine atom", isCorrect: true },
      { text: "A bromine atom" },
      { text: "An iodine atom" },
      { text: "A fluorine atom" },
    ],
  },
  {
    stem: "The 'nitrogen rule' in mass spectrometry states that an odd molecular-ion m/z (for a compound of C, H, N, O) implies:",
    topic: "Mass Spectrometry",
    explanation:
      "A molecule with an odd number of nitrogen atoms has an odd nominal molecular mass; an even mass implies zero or an even number of nitrogens. This helps deduce whether nitrogen is present from the M⁺ value.",
    choices: [
      { text: "An odd number of nitrogen atoms", isCorrect: true },
      { text: "No nitrogen atoms at all" },
      { text: "An even number of oxygen atoms" },
      { text: "The presence of a halogen" },
    ],
  },
  {
    stem: "Fragmentation in mass spectrometry tends to give the most intense peaks from fragment cations that are:",
    topic: "Mass Spectrometry",
    explanation:
      "Bonds cleave to give the more stable cations; e.g. a molecule fragments preferentially to form tertiary, allylic, benzylic or acylium cations. The most stable fragment often becomes the base peak.",
    choices: [
      { text: "The most stable carbocations", isCorrect: true },
      { text: "The least stable possible cations" },
      { text: "Always exactly half the molecular mass" },
      { text: "Neutral radicals with no charge" },
    ],
  },
  {
    stem: "UV–visible absorption in an organic molecule arises mainly from electronic transitions such as:",
    topic: "UV–Vis Spectroscopy",
    explanation:
      "UV–Vis promotes electrons between molecular orbitals, most importantly π→π* (and n→π*) transitions of unsaturated/conjugated systems. Saturated molecules with only σ bonds absorb only in the far UV.",
    choices: [
      { text: "π→π* (and n→π*) transitions", isCorrect: true },
      { text: "Nuclear spin flips in a magnetic field" },
      { text: "Bond vibrations and bending" },
      { text: "Rotation of the whole molecule" },
    ],
  },
  {
    stem: "Extending conjugation in a molecule generally shifts its UV–Vis absorption toward:",
    topic: "UV–Vis Spectroscopy",
    explanation:
      "More conjugation raises the energy of the HOMO and lowers the LUMO, narrowing the gap. The absorption therefore moves to longer wavelength (lower energy) — a bathochromic or 'red' shift. Enough conjugation brings absorption into the visible, giving colour.",
    choices: [
      { text: "Longer wavelength (lower energy)", isCorrect: true },
      { text: "Shorter wavelength (higher energy)" },
      { text: "The infrared region entirely" },
      { text: "No change regardless of conjugation" },
    ],
  },
  {
    stem: "The part of a molecule responsible for its UV–Vis absorption (typically a conjugated π system) is called the:",
    topic: "UV–Vis Spectroscopy",
    explanation:
      "A chromophore is the light-absorbing group, usually a conjugated π system (e.g. a diene, enone or aromatic ring). Extending or substituting the chromophore shifts and intensifies the absorption.",
    choices: [
      { text: "Chromophore", isCorrect: true },
      { text: "Fingerprint region" },
      { text: "Base peak" },
      { text: "Anomeric centre" },
    ],
  },
  {
    stem: "Which statements about ¹³C NMR are correct? Select all that apply.",
    type: "MULTI",
    topic: "¹³C NMR",
    explanation:
      "The number of signals equals the distinct carbon environments; carbonyl carbons appear ~160–220 ppm; the ¹³C isotope is only ~1.1% abundant (weak signals); proton decoupling gives one line per carbon. Integration is not routinely quantitative in standard ¹³C spectra as it is in ¹H.",
    choices: [
      { text: "Signal count equals distinct carbon environments", isCorrect: true },
      { text: "Carbonyl carbons appear around δ 160–220 ppm", isCorrect: true },
      { text: "The ¹³C isotope is only about 1.1%% abundant", isCorrect: true },
      { text: "Proton decoupling gives one singlet per carbon", isCorrect: true },
      { text: "Peak integration is routinely quantitative as in ¹H NMR" },
    ],
  },
  {
    stem: "Which mass-spectrometry clues are correctly described? Select all that apply.",
    type: "MULTI",
    topic: "Mass Spectrometry",
    explanation:
      "M⁺ gives the molecular mass; the base peak is the tallest (100%); a ~1:1 M/M+2 pair signals bromine; a ~3:1 M/M+2 pair signals chlorine. The base peak is not always the molecular ion.",
    choices: [
      { text: "The molecular ion gives the molecular mass", isCorrect: true },
      { text: "The base peak is the most intense peak", isCorrect: true },
      { text: "A ~1:1 M/M+2 pattern indicates bromine", isCorrect: true },
      { text: "A ~3:1 M/M+2 pattern indicates chlorine", isCorrect: true },
      { text: "The base peak is always the molecular ion" },
    ],
  },
  {
    stem: "Increasing the extent of conjugation in a molecule shifts its UV–Vis absorption to longer wavelength (a bathochromic shift).",
    type: "TRUE_FALSE",
    topic: "UV–Vis Spectroscopy",
    explanation:
      "More conjugation narrows the HOMO–LUMO gap, so the π→π* transition needs less energy and absorbs at longer wavelength; extensive conjugation can move the absorption into the visible, producing colour.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The degree of unsaturation (index of hydrogen deficiency) of a molecule counts the total number of:",
    topic: "Structure Elucidation",
    explanation:
      "Each degree of unsaturation corresponds to one ring or one π bond. For CₙHₘ, DoU = (2n + 2 − m)/2 (adjusting for N and halogens), quickly indicating how many rings plus multiple bonds are present.",
    choices: [
      { text: "Rings plus π bonds in the molecule", isCorrect: true },
      { text: "Oxygen atoms in the molecule" },
      { text: "Chiral centres in the molecule" },
      { text: "Proton NMR signals expected" },
    ],
  },
  {
    stem: "For the formula C₆H₆, the degree of unsaturation is:",
    topic: "Structure Elucidation",
    explanation:
      "DoU = (2×6 + 2 − 6)/2 = 4. Benzene (C₆H₆) has four degrees: three π bonds plus one ring, consistent with its aromatic structure.",
    choices: [
      { text: "4", isCorrect: true },
      { text: "1" },
      { text: "2" },
      { text: "6" },
    ],
  },
  {
    stem: "A molecule with four degrees of unsaturation, IR absorption near 1600–1500 ⁻¹, and ¹H NMR signals at δ 6.5–8 most likely contains:",
    topic: "Structure Elucidation",
    explanation:
      "Four degrees of unsaturation (a ring plus three π bonds), aromatic C=C IR bands, and downfield ¹H signals at δ 6.5–8 together point to a benzene (aromatic) ring — a common combined-spectra deduction.",
    choices: [
      { text: "A benzene (aromatic) ring", isCorrect: true },
      { text: "An isolated terminal alkyne" },
      { text: "A saturated cyclohexane ring only" },
      { text: "A simple straight-chain alkane" },
    ],
  },
  {
    stem: "A compound shows a strong IR band at 1715 ⁻¹ and a ¹H NMR singlet near δ 2.1 with no aldehyde proton. It is most likely a:",
    topic: "Structure Elucidation",
    explanation:
      "A strong ~1715 cm⁻¹ band signals a carbonyl; a 3H singlet near δ 2.1 (a methyl next to C=O) with no δ 9–10 aldehyde proton points to a methyl ketone such as acetone rather than an aldehyde.",
    choices: [
      { text: "Ketone (e.g. a methyl ketone)", isCorrect: true },
      { text: "Aldehyde with a clear CHO proton" },
      { text: "Carboxylic acid with broad OH" },
      { text: "Simple ether with no carbonyl" },
    ],
  },
  {
    stem: "In planning a multistep synthesis, working backward from the target molecule to simpler precursors is called:",
    topic: "Multistep Synthesis",
    explanation:
      "Retrosynthetic analysis breaks the target into simpler precursors by mentally reversing reactions (disconnections), identifying synthons and the real reagents (synthetic equivalents) that would forge each bond.",
    choices: [
      { text: "Retrosynthetic analysis", isCorrect: true },
      { text: "Kinetic resolution" },
      { text: "Racemisation analysis" },
      { text: "Combustion analysis" },
    ],
  },
  {
    stem: "In retrosynthesis, the open arrow (⇒) represents a:",
    topic: "Multistep Synthesis",
    explanation:
      "The retrosynthetic (double-lined open) arrow denotes a 'disconnection' — the conceptual reverse of a bond-forming reaction, pointing from the target back toward a simpler precursor. A normal arrow denotes a forward reaction.",
    choices: [
      { text: "Disconnection back to a simpler precursor", isCorrect: true },
      { text: "Forward bond-forming reaction step" },
      { text: "Resonance between two structures" },
      { text: "An equilibrium between two species" },
    ],
  },
  {
    stem: "A functional-group interconversion (FGI) in synthesis is a step that:",
    topic: "Multistep Synthesis",
    explanation:
      "An FGI changes one functional group into another without necessarily changing the carbon skeleton — e.g. oxidising an alcohol to a ketone, or reducing a nitrile to an amine — to set up the next bond-forming step.",
    choices: [
      { text: "Changes one functional group into another", isCorrect: true },
      { text: "Always forms a new carbon–carbon bond" },
      { text: "Removes all functionality permanently" },
      { text: "Only ever adds a protecting group" },
    ],
  },
  {
    stem: "Why might a chemist convert an alcohol to a cyclic acetal or silyl ether partway through a synthesis?",
    topic: "Protecting Groups",
    explanation:
      "A protecting group temporarily masks a reactive site (here an –OH) so it survives conditions that would otherwise attack it; it is removed later. Acetals protect carbonyls and silyl ethers protect alcohols in exactly this way.",
    choices: [
      { text: "To protect it from reacting in a later step", isCorrect: true },
      { text: "To make it permanently unreactive forever" },
      { text: "To increase its acidity for a reaction" },
      { text: "To convert it into a carboxylic acid" },
    ],
  },
  {
    stem: "A good protecting group must be:",
    topic: "Protecting Groups",
    explanation:
      "An ideal protecting group is installed easily, is stable to the reaction conditions used while it protects the group, and is removed cleanly under conditions that do not disturb the rest of the molecule.",
    choices: [
      { text: "Easy to install, stable, then removable", isCorrect: true },
      { text: "Impossible to remove once installed" },
      { text: "Reactive toward every reagent used" },
      { text: "Permanently bonded to the substrate" },
    ],
  },
  {
    stem: "To lengthen a carbon chain by one carbon and finish with a carboxylic acid, a classic two-step sequence is:",
    topic: "Multistep Synthesis",
    explanation:
      "Substitution of an alkyl halide with cyanide (⁻CN) adds one carbon as a nitrile; hydrolysis then gives the carboxylic acid (R–X → R–CN → R–COOH), a standard one-carbon homologation.",
    choices: [
      { text: "Cyanide substitution, then hydrolysis", isCorrect: true },
      { text: "Ozonolysis, then careful reduction" },
      { text: "Halogenation, then elimination" },
      { text: "Hydroboration, then oxidation" },
    ],
  },
  {
    stem: "A reliable way to make a specific alkene from a ketone with full control of which carbon bears the new =CH₂ group is the:",
    topic: "Multistep Synthesis",
    explanation:
      "The Wittig reaction converts a ketone or aldehyde C=O into a C=C at exactly that carbon using a phosphorus ylide, giving unambiguous placement of the new double bond — very useful in targeted synthesis.",
    choices: [
      { text: "Wittig reaction", isCorrect: true },
      { text: "Fischer esterification" },
      { text: "Clemmensen reduction" },
      { text: "Cannizzaro reaction" },
    ],
  },
  {
    stem: "To reduce a ketone C=O all the way to a CH₂ (methylene) group, a suitable choice is:",
    topic: "Multistep Synthesis",
    explanation:
      "The Clemmensen (Zn(Hg)/HCl) and Wolff–Kishner (N₂H₄/base) reductions both convert a carbonyl fully to a CH₂. The complementary acidic/basic conditions let a chemist pick whichever suits the rest of the molecule.",
    choices: [
      { text: "Clemmensen or Wolff–Kishner reduction", isCorrect: true },
      { text: "Sodium borohydride in water" },
      { text: "Catalytic hydrogenation over Lindlar" },
      { text: "Ozonolysis followed by work-up" },
    ],
  },
  {
    stem: "When two functional groups in a target could react with the same reagent, a chemoselective strategy often relies on:",
    topic: "Multistep Synthesis",
    explanation:
      "Selectivity is achieved by protecting one group, or by choosing a reagent that reacts with only one of them (e.g. NaBH₄ reduces a ketone but not an ester). Order of steps and protecting groups together give chemoselectivity.",
    choices: [
      { text: "Protecting one group or a selective reagent", isCorrect: true },
      { text: "Treating both groups identically at once" },
      { text: "Removing the target's carbon skeleton" },
      { text: "Racemising every stereocentre first" },
    ],
  },
  {
    stem: "A synthesis requires an aromatic ring bearing a meta-directed substituent pattern that a group installs only after another. This illustrates the importance in synthesis of:",
    topic: "Multistep Synthesis",
    explanation:
      "The order of electrophilic aromatic substitutions matters because each substituent directs the next. Planning the sequence (and using blocking or directing groups) is essential to reach a specific substitution pattern.",
    choices: [
      { text: "Choosing the correct order of steps", isCorrect: true },
      { text: "Ignoring directing effects entirely" },
      { text: "Adding all groups simultaneously" },
      { text: "Using only meta directors ever" },
    ],
  },
  {
    stem: "Which are legitimate roles of steps in a multistep synthesis? Select all that apply.",
    type: "MULTI",
    topic: "Multistep Synthesis",
    explanation:
      "Forming C–C bonds (e.g. Grignard, Wittig, aldol), interconverting functional groups (FGI), protecting/deprotecting sensitive groups, and adjusting oxidation level are all standard synthetic roles. Deliberately racemising a needed stereocentre is not a goal.",
    choices: [
      { text: "Forming new carbon–carbon bonds", isCorrect: true },
      { text: "Interconverting functional groups (FGI)", isCorrect: true },
      { text: "Protecting and later deprotecting a group", isCorrect: true },
      { text: "Adjusting the oxidation level of a carbon", isCorrect: true },
      { text: "Deliberately destroying the target's stereocentre" },
    ],
  },
  {
    stem: "Which statements about retrosynthetic analysis and protecting groups are correct? Select all that apply.",
    type: "MULTI",
    topic: "Multistep Synthesis",
    explanation:
      "Retrosynthesis works backward via disconnections shown by the open arrow; a protecting group must be stable in use yet removable; NaBH₄ can reduce a ketone selectively over an ester. A protecting group that cannot be removed is useless.",
    choices: [
      { text: "Retrosynthesis reasons backward from the target", isCorrect: true },
      { text: "The open arrow (⇒) denotes a disconnection", isCorrect: true },
      { text: "A protecting group must be removable later", isCorrect: true },
      { text: "NaBH₄ can reduce a ketone but not an ester", isCorrect: true },
      { text: "An ideal protecting group can never be removed" },
    ],
  },
  {
    stem: "Retrosynthetic analysis plans a synthesis by working backward from the target molecule to simpler starting materials.",
    type: "TRUE_FALSE",
    topic: "Multistep Synthesis",
    explanation:
      "Retrosynthesis reverses reactions conceptually (disconnections) to reduce the target to available precursors, then the forward route is written out from those precursors.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "A monosaccharide such as glucose is chemically classified as a:",
    topic: "Carbohydrates",
    explanation:
      "Sugars are polyhydroxy carbonyl compounds. Glucose is an aldohexose — a six-carbon sugar with an aldehyde group (an 'aldose'); fructose is a ketose, with a ketone group.",
    choices: [
      { text: "Polyhydroxy aldehyde (aldose)", isCorrect: true },
      { text: "Simple non-polar hydrocarbon" },
      { text: "Aromatic carboxylic acid" },
      { text: "Long-chain primary amine" },
    ],
  },
  {
    stem: "In aqueous solution, glucose exists predominantly as a six-membered ring formed by an intramolecular reaction between its carbonyl and a distant –OH, giving a cyclic:",
    topic: "Carbohydrates",
    explanation:
      "The C5 hydroxyl adds to the C1 aldehyde to form a cyclic hemiacetal (a pyranose ring). This intramolecular hemiacetal formation is why solid glucose is essentially all in the ring form.",
    choices: [
      { text: "Hemiacetal", isCorrect: true },
      { text: "Full acetal" },
      { text: "Carboxylic acid" },
      { text: "Symmetric ether" },
    ],
  },
  {
    stem: "The new stereocentre created at the former carbonyl carbon when a sugar cyclises is called the:",
    topic: "Carbohydrates",
    explanation:
      "Ring closure makes C1 (the anomeric carbon) a stereocentre, giving α and β anomers that differ only in the configuration of the new –OH. In water they interconvert through the open-chain form (mutarotation).",
    choices: [
      { text: "Anomeric carbon", isCorrect: true },
      { text: "Meso carbon" },
      { text: "Quaternary carbon" },
      { text: "Benzylic carbon" },
    ],
  },
  {
    stem: "The slow change in optical rotation as α- and β-glucose interconvert in solution through the open-chain form is called:",
    topic: "Carbohydrates",
    explanation:
      "Mutarotation is the equilibration of the α and β anomers via the open-chain aldehyde, which changes the observed specific rotation until an equilibrium mixture is reached.",
    choices: [
      { text: "Mutarotation", isCorrect: true },
      { text: "Saponification" },
      { text: "Racemisation of the whole molecule" },
      { text: "Denaturation" },
    ],
  },
  {
    stem: "A sugar that gives a positive Tollens' or Fehling's test (a reducing sugar) does so because it can open to expose a free:",
    topic: "Carbohydrates",
    explanation:
      "The cyclic hemiacetal is in equilibrium with a small amount of open-chain form bearing a free aldehyde (or an α-hydroxy ketone that isomerises to one), which reduces the metal ion in these tests.",
    choices: [
      { text: "Aldehyde group in the open-chain form", isCorrect: true },
      { text: "Aromatic ring that reduces the reagent" },
      { text: "Tertiary alcohol resistant to oxidation" },
      { text: "Fully formed acetal linkage" },
    ],
  },
  {
    stem: "Two monosaccharides are joined in a disaccharide by a glycosidic bond, which is formed at the anomeric carbon and is chemically an:",
    topic: "Carbohydrates",
    explanation:
      "A glycosidic bond forms when the anomeric –OH reacts with an –OH of another sugar, giving an acetal (glycoside) with loss of water. Because it is an acetal (not a hemiacetal), a fully glycosidic-linked sugar loses its reducing ability at that centre.",
    choices: [
      { text: "Acetal linkage", isCorrect: true },
      { text: "Ester linkage" },
      { text: "Amide (peptide) linkage" },
      { text: "Simple ether unrelated to the anomeric carbon" },
    ],
  },
  {
    stem: "Sucrose is a non-reducing sugar because its glycosidic bond links the two:",
    topic: "Carbohydrates",
    explanation:
      "In sucrose the bond joins the anomeric carbons of both glucose and fructose, so neither ring can open to an aldehyde/ketone. With no free anomeric hemiacetal, sucrose does not reduce Tollens' or Fehling's reagents.",
    choices: [
      { text: "Anomeric carbons of both sugars together", isCorrect: true },
      { text: "Two non-anomeric hydroxyls only" },
      { text: "Carboxyl groups of both sugars" },
      { text: "Amino groups of both sugars" },
    ],
  },
  {
    stem: "An amino acid at physiological pH exists predominantly as a doubly charged, net-neutral species called a:",
    topic: "Amino Acids & Proteins",
    explanation:
      "The basic amine is protonated (–NH₃⁺) and the acidic carboxyl deprotonated (–COO⁻) simultaneously, giving a zwitterion — net neutral but bearing both charges. This is why amino acids behave like salts (high melting points, water solubility).",
    choices: [
      { text: "Zwitterion", isCorrect: true },
      { text: "Fully non-polar molecule" },
      { text: "Neutral molecule with no charges" },
      { text: "Dianion with two negative charges" },
    ],
  },
  {
    stem: "The pH at which an amino acid carries no net charge (existing mainly as the zwitterion) is its:",
    topic: "Amino Acids & Proteins",
    explanation:
      "The isoelectric point (pI) is the pH of zero net charge. Below it the amino acid is net positive, above it net negative; pI is used to separate amino acids and proteins (e.g. in electrophoresis).",
    choices: [
      { text: "Isoelectric point (pI)", isCorrect: true },
      { text: "Boiling point" },
      { text: "Flash point" },
      { text: "Anomeric point" },
    ],
  },
  {
    stem: "The 20 standard amino acids differ from one another only in their:",
    topic: "Amino Acids & Proteins",
    explanation:
      "Each α-amino acid has the same backbone (an α-carbon bearing –NH₂, –COOH and –H); they differ only in the side chain (R group), whose polarity, charge or bulk gives each amino acid its distinct properties.",
    choices: [
      { text: "Side chain (R group)", isCorrect: true },
      { text: "Carboxyl group identity" },
      { text: "Amino group identity" },
      { text: "Number of α-carbons present" },
    ],
  },
  {
    stem: "The 19 chiral standard amino acids in proteins almost all have which configuration at the α-carbon?",
    topic: "Amino Acids & Proteins",
    explanation:
      "Naturally occurring protein amino acids are the L-enantiomers (S configuration for most). Glycine is the exception, being achiral because its side chain is just a hydrogen.",
    choices: [
      { text: "The L-configuration", isCorrect: true },
      { text: "The D-configuration" },
      { text: "A racemic mixture in every case" },
      { text: "No configuration, all are achiral" },
    ],
  },
  {
    stem: "Amino acids link into peptides through an amide bond between the carboxyl of one and the amino group of the next, specifically called a:",
    topic: "Amino Acids & Proteins",
    explanation:
      "The peptide (amide) bond joins the –COOH of one amino acid to the –NH₂ of another with loss of water. Its partial double-bond character makes it planar and rigid, shaping protein backbones.",
    choices: [
      { text: "Peptide bond", isCorrect: true },
      { text: "Glycosidic bond" },
      { text: "Ester bond" },
      { text: "Disulfide bond" },
    ],
  },
  {
    stem: "The regular local folding of a protein backbone into α-helices and β-sheets, stabilised largely by backbone hydrogen bonds, is its:",
    topic: "Amino Acids & Proteins",
    explanation:
      "Secondary structure refers to α-helix and β-sheet motifs held by hydrogen bonds between backbone amide groups. Primary structure is the sequence; tertiary is the overall 3-D fold; quaternary is the assembly of subunits.",
    choices: [
      { text: "Secondary structure", isCorrect: true },
      { text: "Primary structure" },
      { text: "Quaternary structure" },
      { text: "Anomeric structure" },
    ],
  },
  {
    stem: "Which statements about carbohydrates are correct? Select all that apply.",
    type: "MULTI",
    topic: "Carbohydrates",
    explanation:
      "Glucose cyclises to a hemiacetal; the anomeric carbon is the new stereocentre; reducing sugars have a free (potential) aldehyde; sucrose is non-reducing because both anomeric carbons are tied up. A glycosidic bond is an acetal, not an ester.",
    choices: [
      { text: "Glucose cyclises to a hemiacetal ring", isCorrect: true },
      { text: "The anomeric carbon is a new stereocentre", isCorrect: true },
      { text: "Reducing sugars can open to a free aldehyde", isCorrect: true },
      { text: "Sucrose is non-reducing (both anomeric carbons linked)", isCorrect: true },
      { text: "A glycosidic bond is an ester linkage" },
    ],
  },
  {
    stem: "Which statements about amino acids and proteins are correct? Select all that apply.",
    type: "MULTI",
    topic: "Amino Acids & Proteins",
    explanation:
      "At physiological pH amino acids are zwitterions; pI is the pH of zero net charge; they differ only in the R group; protein amino acids are mostly L; peptide bonds are amides. They are not joined by glycosidic bonds.",
    choices: [
      { text: "They exist mainly as zwitterions near neutral pH", isCorrect: true },
      { text: "The pI is the pH of zero net charge", isCorrect: true },
      { text: "They differ only in the side chain", isCorrect: true },
      { text: "Protein amino acids are almost all L-configured", isCorrect: true },
      { text: "Amino acids are joined by glycosidic bonds" },
    ],
  },
  {
    stem: "The peptide bond joining two amino acids is an amide linkage formed with loss of water.",
    type: "TRUE_FALSE",
    topic: "Amino Acids & Proteins",
    explanation:
      "The carboxyl of one amino acid condenses with the amino group of another, forming an amide (peptide) bond and releasing water; its partial double-bond character makes it planar.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "A triglyceride (fat or oil) is chemically an ester formed from glycerol and three:",
    topic: "Lipids",
    explanation:
      "Triglycerides are triesters of glycerol (a triol) with three long-chain fatty acids. Hydrolysis (or base saponification) cleaves these ester bonds to release glycerol and the fatty acids (or their salts, soap).",
    choices: [
      { text: "Long-chain fatty acids", isCorrect: true },
      { text: "Amino acids" },
      { text: "Monosaccharide units" },
      { text: "Phosphate groups" },
    ],
  },
  {
    stem: "The main structural difference between a typical fat and a typical oil is that oils generally contain more:",
    topic: "Lipids",
    explanation:
      "Oils have more cis carbon–carbon double bonds (unsaturation) in their fatty-acid chains. The cis kinks stop the chains packing tightly, lowering the melting point, so oils are liquid at room temperature while saturated fats are solid.",
    choices: [
      { text: "Cis C=C double bonds (unsaturation)", isCorrect: true },
      { text: "Fully saturated straight chains" },
      { text: "Peptide bonds within the fatty chains" },
      { text: "Aromatic rings in the chains" },
    ],
  },
  {
    stem: "Converting a liquid oil into a semi-solid fat industrially (e.g. making margarine) is done by:",
    topic: "Lipids",
    explanation:
      "Catalytic hydrogenation adds H₂ across some of the C=C bonds of the unsaturated chains, raising the melting point. Partial hydrogenation can also generate trans fats as a by-product.",
    choices: [
      { text: "Catalytic hydrogenation of C=C bonds", isCorrect: true },
      { text: "Saponification with base" },
      { text: "Esterification with more acid" },
      { text: "Oxidation of the glycerol backbone" },
    ],
  },
  {
    stem: "Base hydrolysis (saponification) of a triglyceride yields glycerol plus:",
    topic: "Lipids",
    explanation:
      "Saponification cleaves the three ester bonds, giving glycerol and three fatty-acid carboxylate salts — soaps. Soap molecules have a polar head and non-polar tail, letting them emulsify grease.",
    choices: [
      { text: "Fatty-acid salts (soap)", isCorrect: true },
      { text: "Three amino acids" },
      { text: "Three monosaccharides" },
      { text: "A single large ester" },
    ],
  },
  {
    stem: "A phospholipid differs from a triglyceride in that one of glycerol's three positions carries, instead of a fatty acid, a:",
    topic: "Lipids",
    explanation:
      "In a phospholipid, two positions bear fatty acids and the third bears a phosphate-containing polar head group. This gives an amphipathic molecule (polar head, non-polar tails) that self-assembles into bilayers — the basis of cell membranes.",
    choices: [
      { text: "Phosphate-containing polar head group", isCorrect: true },
      { text: "Third identical fatty acid" },
      { text: "Peptide chain" },
      { text: "Glycosidic sugar ring" },
    ],
  },
  {
    stem: "Phospholipids spontaneously form bilayers in water because they are:",
    topic: "Lipids",
    explanation:
      "Being amphipathic (a polar head and two non-polar tails), phospholipids arrange with heads facing water and tails shielded inward, forming a bilayer. This is driven by the hydrophobic effect and underlies membrane structure.",
    choices: [
      { text: "Amphipathic (both polar and non-polar regions)", isCorrect: true },
      { text: "Completely non-polar throughout" },
      { text: "Entirely water-soluble in all parts" },
      { text: "Charged uniformly across the molecule" },
    ],
  },
  {
    stem: "Steroids such as cholesterol are lipids built on a characteristic framework of:",
    topic: "Lipids",
    explanation:
      "Steroids share a fused four-ring skeleton (three six-membered rings and one five-membered ring). Cholesterol, the steroid hormones and bile acids all share this core, decorated with different functional groups.",
    choices: [
      { text: "Four fused carbon rings", isCorrect: true },
      { text: "A single long unbranched chain" },
      { text: "Three ester-linked fatty acids" },
      { text: "A repeating sugar-phosphate chain" },
    ],
  },
  {
    stem: "The building-block monomer of a nucleic acid (a nucleotide) consists of a phosphate, a five-carbon sugar, and a:",
    topic: "Nucleic Acids",
    explanation:
      "A nucleotide has three parts: a phosphate group, a pentose sugar (ribose in RNA, deoxyribose in DNA), and a nitrogenous base. Chains of nucleotides linked by phosphodiester bonds make up DNA and RNA.",
    choices: [
      { text: "Nitrogenous base", isCorrect: true },
      { text: "Fatty-acid tail" },
      { text: "Amino-acid residue" },
      { text: "Steroid ring system" },
    ],
  },
  {
    stem: "DNA differs from RNA in its sugar: DNA contains deoxyribose, which lacks an –OH group at the:",
    topic: "Nucleic Acids",
    explanation:
      "Deoxyribose is missing the 2′-hydroxyl that ribose has. This small change makes DNA more chemically stable than RNA and is one reason DNA is the long-term store of genetic information.",
    choices: [
      { text: "2′ position of the sugar", isCorrect: true },
      { text: "Phosphate group" },
      { text: "Nitrogenous base" },
      { text: "5′ carbon exclusively" },
    ],
  },
  {
    stem: "In double-stranded DNA, adenine pairs with thymine and guanine pairs with cytosine through:",
    topic: "Nucleic Acids",
    explanation:
      "Complementary bases pair by specific hydrogen bonds (A–T with two, G–C with three). This base pairing holds the two antiparallel strands together in the double helix and underlies faithful replication.",
    choices: [
      { text: "Hydrogen bonds between complementary bases", isCorrect: true },
      { text: "Peptide bonds between the bases" },
      { text: "Ester bonds between the bases" },
      { text: "Glycosidic bonds between the strands" },
    ],
  },
  {
    stem: "The backbone of a nucleic acid strand is held together by linkages between the sugar of one nucleotide and the phosphate of the next, called:",
    topic: "Nucleic Acids",
    explanation:
      "Phosphodiester bonds join the 3′-OH of one sugar to the 5′-phosphate of the next, building the sugar–phosphate backbone. The sequence of bases hanging off this backbone encodes genetic information.",
    choices: [
      { text: "Phosphodiester bonds", isCorrect: true },
      { text: "Peptide bonds" },
      { text: "Disulfide bonds" },
      { text: "Glycosidic bonds between sugars only" },
    ],
  },
  {
    stem: "Considering all the major biomolecules, which linkage is correctly paired with its class?",
    topic: "Biomolecules Overview",
    explanation:
      "Peptide (amide) bonds join amino acids in proteins; glycosidic (acetal) bonds join sugars; ester bonds join glycerol and fatty acids in fats; phosphodiester bonds join nucleotides. Matching the bond to the class is a key unifying idea.",
    choices: [
      { text: "Peptide bond — proteins", isCorrect: true },
      { text: "Glycosidic bond — proteins" },
      { text: "Ester bond — nucleic acids" },
      { text: "Phosphodiester bond — fats" },
    ],
  },
  {
    stem: "A unifying theme across biomolecules is that their polymers are assembled from monomers by reactions that:",
    topic: "Biomolecules Overview",
    explanation:
      "Proteins, polysaccharides, fats and nucleic acids are all built by condensation (dehydration) reactions that join monomers with loss of water; hydrolysis (adding water) reverses them to release the monomers.",
    choices: [
      { text: "Release water; hydrolysis reverses them", isCorrect: true },
      { text: "Add a water molecule to join each monomer" },
      { text: "Require no bond formation at all" },
      { text: "Occur only by radical chain mechanisms" },
    ],
  },
  {
    stem: "Which spectroscopic method would most directly reveal the molecular mass of an unknown biomolecule fragment?",
    topic: "Structure Elucidation",
    explanation:
      "Mass spectrometry measures mass-to-charge ratios, giving the molecular mass (from the molecular ion) and fragmentation clues. NMR and IR report on structure and functional groups but not mass directly.",
    choices: [
      { text: "Mass spectrometry", isCorrect: true },
      { text: "Infrared spectroscopy" },
      { text: "UV–visible spectroscopy" },
      { text: "Optical rotation measurement" },
    ],
  },
  {
    stem: "Which statements about lipids and nucleic acids are correct? Select all that apply.",
    type: "MULTI",
    topic: "Biomolecules Overview",
    explanation:
      "Triglycerides are glycerol triesters; oils are more unsaturated than fats; phospholipids are amphipathic and form bilayers; DNA uses deoxyribose and A–T/G–C hydrogen-bond pairing. Nucleic acid backbones are phosphodiester-linked, not peptide-linked.",
    choices: [
      { text: "A triglyceride is an ester of glycerol and three fatty acids", isCorrect: true },
      { text: "Oils are more unsaturated than solid fats", isCorrect: true },
      { text: "Phospholipids are amphipathic and form bilayers", isCorrect: true },
      { text: "DNA base pairing is by hydrogen bonds (A–T, G–C)", isCorrect: true },
      { text: "Nucleic acid backbones are joined by peptide bonds" },
    ],
  },
  {
    stem: "Saturated fats have more carbon–carbon double bonds in their fatty-acid chains than unsaturated oils do.",
    type: "TRUE_FALSE",
    topic: "Lipids",
    explanation:
      "It is the reverse: unsaturated oils have more C=C double bonds, whose cis kinks prevent tight packing and lower the melting point. Saturated fats have straight, fully single-bonded chains and are solids.",
    choices: [
      { text: "True" },
      { text: "False", isCorrect: true },
    ],
  },
  {
    stem: "In DNA, guanine forms three hydrogen bonds with cytosine while adenine forms two hydrogen bonds with thymine.",
    type: "TRUE_FALSE",
    topic: "Nucleic Acids",
    explanation:
      "The complementary base pairs are held by specific hydrogen bonds: G–C by three and A–T by two, which contributes to the greater thermal stability of G–C-rich DNA.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
];
