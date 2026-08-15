import type { Q } from "../_lib/qbank";

export const ORGANIC_SET_5: Q[] = [
  {
    stem: "Alkenes typically react with electrophiles because the C=C π bond:",
    topic: "Electrophilic Addition",
    explanation:
      "The π electrons sit above and below the plane and are loosely held, making the alkene electron-rich; it therefore acts as a nucleophile toward electrophiles, which add across the double bond.",
    choices: [
      { text: "Is electron-rich and attracts electrophiles", isCorrect: true },
      { text: "Is electron-poor, attracting nucleophiles" },
      { text: "Is inert and unreactive toward reagents" },
      { text: "Carries a full negative charge on each carbon" },
    ],
  },
  {
    stem: "Addition of HBr to propene follows Markovnikov's rule, giving mainly:",
    topic: "Electrophilic Addition",
    explanation:
      "The proton adds to the less substituted carbon so that the more stable (secondary) carbocation forms; bromide then adds there, giving 2-bromopropane as the major product.",
    choices: [
      { text: "2-bromopropane", isCorrect: true },
      { text: "1-bromopropane" },
      { text: "1,2-dibromopropane" },
      { text: "propan-1-ol" },
    ],
  },
  {
    stem: "Markovnikov's rule is best explained by the fact that HX addition proceeds through:",
    topic: "Electrophilic Addition",
    explanation:
      "The regiochemistry is set by carbocation stability: protonation gives the more stable (more substituted) carbocation, and the nucleophile then adds to that carbon.",
    choices: [
      { text: "The more stable (more substituted) carbocation", isCorrect: true },
      { text: "The less stable (less substituted) carbocation" },
      { text: "A concerted four-centre transition state" },
      { text: "A free-radical chain mechanism" },
    ],
  },
  {
    stem: "Acid-catalysed hydration of an alkene adds water across the double bond to give, by Markovnikov orientation:",
    topic: "Electrophilic Addition",
    explanation:
      "Water adds with Markovnikov regiochemistry via the more stable carbocation, so the –OH ends up on the more substituted carbon; e.g. propene gives propan-2-ol.",
    choices: [
      { text: "The more substituted alcohol (propan-2-ol)", isCorrect: true },
      { text: "The less substituted alcohol (e.g. propan-1-ol from propene)" },
      { text: "A vicinal diol with two –OH groups" },
      { text: "An ether product" },
    ],
  },
  {
    stem: "Addition of bromine (Br₂) to an alkene proceeds with anti stereochemistry because the reaction passes through:",
    topic: "Electrophilic Addition",
    explanation:
      "A cyclic bromonium ion forms first; bromide then attacks from the opposite face, opening the ring and giving anti (trans) addition of the two bromine atoms.",
    choices: [
      { text: "A cyclic bromonium-ion intermediate", isCorrect: true },
      { text: "A planar free carbocation" },
      { text: "A carbanion intermediate" },
      { text: "A concerted syn addition with no intermediate" },
    ],
  },
  {
    stem: "Treating an alkene with Br₂ dissolved in water (rather than an inert solvent) gives a:",
    topic: "Electrophilic Addition",
    explanation:
      "In water the bromonium ion is opened by water instead of bromide, placing –OH and –Br on adjacent carbons: a halohydrin, with the –OH at the more substituted carbon (Markovnikov).",
    choices: [
      { text: "A halohydrin (–OH, –Br adjacent)", isCorrect: true },
      { text: "A vicinal dibromide only" },
      { text: "A symmetrical vicinal diol" },
      { text: "A simple monoalkyl bromide" },
    ],
  },
  {
    stem: "The rapid decolourisation of bromine water is a classic qualitative test for:",
    topic: "Electrophilic Addition",
    explanation:
      "Alkenes (and alkynes) add bromine across the multiple bond, discharging its orange-brown colour; saturated alkanes do not react, so decolourisation indicates unsaturation.",
    choices: [
      { text: "A C=C or C≡C unsaturation", isCorrect: true },
      { text: "The presence of a hydroxyl (alcohol) group" },
      { text: "A fully saturated, unreactive alkane" },
      { text: "An isolated aromatic ring only" },
    ],
  },
  {
    stem: "When HX adds to an alkene that can form a secondary carbocation adjacent to a more substituted carbon, a minor product may arise from:",
    topic: "Electrophilic Addition",
    explanation:
      "A less stable carbocation can undergo a 1,2-hydride or 1,2-alkyl shift to a more stable one before the nucleophile adds, giving a rearranged (often more substituted) product.",
    choices: [
      { text: "A 1,2-shift to a more stable carbocation", isCorrect: true },
      { text: "A concerted anti addition with no intermediate" },
      { text: "Loss of the carbocation as a free alkane" },
      { text: "Direct radical abstraction of a hydrogen atom" },
    ],
  },
  {
    stem: "Which statements about electrophilic addition to alkenes are correct? Select all that apply.",
    type: "MULTI",
    topic: "Electrophilic Addition",
    explanation:
      "The π bond is nucleophilic; HX follows Markovnikov via the more stable carbocation; Br₂ adds anti through a bromonium ion; carbocation rearrangements can occur. The alkene is not electrophilic toward nucleophiles.",
    choices: [
      { text: "The alkene π bond acts as a nucleophile toward electrophiles", isCorrect: true },
      { text: "HX addition follows Markovnikov's rule via the more stable carbocation", isCorrect: true },
      { text: "Br₂ adds with anti stereochemistry through a bromonium ion", isCorrect: true },
      { text: "Carbocation rearrangements can give minor products", isCorrect: true },
      { text: "Alkenes are electrophilic and attract nucleophiles" },
      { text: "HX addition always gives the anti-Markovnikov product" },
    ],
  },
  {
    stem: "Bromine adds across a carbon–carbon double bond with anti stereochemistry because the second bromide attacks the bromonium ion from the opposite face.",
    type: "TRUE_FALSE",
    topic: "Electrophilic Addition",
    explanation:
      "The bridged bromonium ion blocks one face; bromide must attack the back face of a ring carbon, so the two bromines end up on opposite sides — anti (trans) addition.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "In acid-catalysed hydration, the hydroxyl group adds to the more substituted carbon of the original double bond.",
    type: "TRUE_FALSE",
    topic: "Electrophilic Addition",
    explanation:
      "Hydration goes through the more stable carbocation (Markovnikov), so water bonds to the more substituted carbon, placing the –OH there; propene therefore gives propan-2-ol.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Hydroboration–oxidation of a terminal alkene converts it to an alcohol with:",
    topic: "Alkene Addition Reactions",
    explanation:
      "Hydroboration adds BH₃ with the boron on the less hindered carbon; oxidation replaces boron with –OH, giving overall anti-Markovnikov, syn addition of water — the –OH ends up on the terminal carbon.",
    choices: [
      { text: "Anti-Markovnikov orientation and syn addition", isCorrect: true },
      { text: "Markovnikov orientation and anti addition" },
      { text: "Markovnikov orientation with rearrangement" },
      { text: "Anti-Markovnikov orientation and anti addition" },
    ],
  },
  {
    stem: "Oxymercuration–demercuration hydrates an alkene with Markovnikov orientation and, importantly:",
    topic: "Alkene Addition Reactions",
    explanation:
      "The bridged mercurinium ion prevents free-carbocation formation, so oxymercuration gives Markovnikov hydration without the skeletal rearrangements that plague acid-catalysed hydration.",
    choices: [
      { text: "Without carbocation rearrangements", isCorrect: true },
      { text: "With extensive skeletal rearrangement" },
      { text: "With anti-Markovnikov orientation" },
      { text: "Giving a vicinal diol" },
    ],
  },
  {
    stem: "Catalytic hydrogenation of an alkene (H₂, Pd or Pt) adds two hydrogens with:",
    topic: "Alkene Addition Reactions",
    explanation:
      "Both hydrogens are delivered from the metal surface to the same face of the alkene, so hydrogenation is a syn addition, converting the C=C to a C–C single bond.",
    choices: [
      { text: "Syn addition (both H, same face)", isCorrect: true },
      { text: "Anti stereochemistry (H from opposite faces)" },
      { text: "Markovnikov regiochemistry only" },
      { text: "Loss of one carbon as methane" },
    ],
  },
  {
    stem: "Adding HBr to an alkene in the presence of peroxides gives the anti-Markovnikov product because the reaction switches to:",
    topic: "Alkene Addition Reactions",
    explanation:
      "Peroxides initiate a radical chain: a bromine radical adds to give the more stable (more substituted) carbon radical, so Br ends up on the less substituted carbon — the anti-Markovnikov 'peroxide effect'.",
    choices: [
      { text: "A free-radical chain mechanism", isCorrect: true },
      { text: "A carbocation mechanism" },
      { text: "A concerted pericyclic mechanism" },
      { text: "A carbanion mechanism" },
    ],
  },
  {
    stem: "The peroxide (anti-Markovnikov) effect is observed for the addition of:",
    topic: "Alkene Addition Reactions",
    explanation:
      "Only HBr shows the radical anti-Markovnikov effect; for HCl and HI the radical chain steps are energetically unfavourable, so those hydrogen halides add by the normal Markovnikov (ionic) route.",
    choices: [
      { text: "HBr, but not HCl or HI", isCorrect: true },
      { text: "HCl and HI, but not HBr" },
      { text: "All hydrogen halides equally" },
      { text: "Water, but not any hydrogen halide" },
    ],
  },
  {
    stem: "Ozonolysis of an alkene followed by a reductive work-up cleaves the C=C bond to give:",
    topic: "Oxidative Cleavage",
    explanation:
      "Ozonolysis breaks the double bond entirely; with reductive work-up (e.g. Zn or Me₂S), each alkene carbon becomes a carbonyl — aldehydes and/or ketones depending on substitution.",
    choices: [
      { text: "Two carbonyls (aldehyde/ketone)", isCorrect: true },
      { text: "A single vicinal (1,2) diol" },
      { text: "A three-membered epoxide" },
      { text: "Only a carboxylic acid plus CO₂" },
    ],
  },
  {
    stem: "Reaction of an alkene with a peroxyacid (e.g. mCPBA) gives:",
    topic: "Oxidative Cleavage",
    explanation:
      "A peroxyacid transfers an oxygen to the double bond in a single step, giving an epoxide (oxirane) with syn stereochemistry; the ring can later be opened by nucleophiles.",
    choices: [
      { text: "An epoxide (oxirane)", isCorrect: true },
      { text: "A vicinal diol formed directly" },
      { text: "Two separate carbonyl fragments" },
      { text: "A vicinal halohydrin" },
    ],
  },
  {
    stem: "Treatment of an alkene with cold dilute KMnO₄ (or OsO₄) gives:",
    topic: "Oxidative Cleavage",
    explanation:
      "Cold dilute permanganate or osmium tetroxide adds two hydroxyls to the same face of the double bond, giving a syn (cis) vicinal diol; hot concentrated KMnO₄ instead cleaves the bond.",
    choices: [
      { text: "A syn (cis) vicinal diol", isCorrect: true },
      { text: "An epoxide (oxirane ring)" },
      { text: "A single aldehyde product" },
      { text: "A simple alkyl halide" },
    ],
  },
  {
    stem: "Acid-catalysed opening of an epoxide by water gives a diol with:",
    topic: "Oxidative Cleavage",
    explanation:
      "The nucleophile attacks the protonated epoxide from the face opposite the C–O bond being broken, so epoxide hydrolysis gives an anti (trans) vicinal diol — complementary to the syn diol from OsO₄.",
    choices: [
      { text: "Anti (trans) stereochemistry", isCorrect: true },
      { text: "Syn (cis) stereochemistry" },
      { text: "No defined stereochemistry" },
      { text: "Retention at both carbons" },
    ],
  },
  {
    stem: "Which additions to an alkene are correctly matched to their outcome? Select all that apply.",
    type: "MULTI",
    topic: "Alkene Addition Reactions",
    explanation:
      "Hydroboration–oxidation gives anti-Markovnikov syn hydration; oxymercuration gives Markovnikov hydration without rearrangement; hydrogenation is syn; HBr/peroxide is anti-Markovnikov. Ozonolysis does not give a diol.",
    choices: [
      { text: "Hydroboration–oxidation → anti-Markovnikov alcohol", isCorrect: true },
      { text: "Oxymercuration → Markovnikov alcohol without rearrangement", isCorrect: true },
      { text: "H₂/Pd → syn addition of two hydrogens", isCorrect: true },
      { text: "HBr with peroxides → anti-Markovnikov bromide", isCorrect: true },
      { text: "Ozonolysis → vicinal diol" },
      { text: "mCPBA → carboxylic acid" },
    ],
  },
  {
    stem: "Which reagents convert an alkene into a compound bearing two oxygens (a diol or two carbonyls)? Select all that apply.",
    type: "MULTI",
    topic: "Oxidative Cleavage",
    explanation:
      "Cold dilute KMnO₄ and OsO₄ give syn diols; acid-catalysed epoxide hydrolysis gives an anti diol; ozonolysis gives two carbonyls. Catalytic hydrogenation adds hydrogens, not oxygens.",
    choices: [
      { text: "Cold dilute KMnO₄", isCorrect: true },
      { text: "OsO₄ then work-up", isCorrect: true },
      { text: "Epoxidation followed by aqueous acid", isCorrect: true },
      { text: "Ozonolysis with reductive work-up", isCorrect: true },
      { text: "H₂ with a palladium catalyst" },
      { text: "HBr with peroxides" },
    ],
  },
  {
    stem: "Hydroboration–oxidation and acid-catalysed hydration give complementary regiochemistry: one anti-Markovnikov, the other Markovnikov.",
    type: "TRUE_FALSE",
    topic: "Alkene Addition Reactions",
    explanation:
      "Hydroboration–oxidation places –OH on the less substituted carbon (anti-Markovnikov), while acid-catalysed hydration and oxymercuration place it on the more substituted carbon (Markovnikov), so the two routes are complementary.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "A terminal alkyne (RC≡CH) is weakly acidic (pKa ≈ 25) because the resulting acetylide anion places the negative charge in an orbital of:",
    topic: "Alkyne Chemistry",
    explanation:
      "Deprotonation gives an acetylide anion whose lone pair sits in an sp orbital; the high s-character holds the electrons close to carbon, stabilising the anion and making the terminal C–H unusually acidic for a hydrocarbon.",
    choices: [
      { text: "An sp orbital (high s-character)", isCorrect: true },
      { text: "Low s-character (an sp³ orbital)" },
      { text: "Pure p character" },
      { text: "An antibonding π* orbital" },
    ],
  },
  {
    stem: "Terminal alkynes can be deprotonated by a strong base such as sodium amide (NaNH₂) to give an acetylide, which is useful because it:",
    topic: "Alkyne Chemistry",
    explanation:
      "The acetylide anion is a strong carbon nucleophile; it reacts with primary alkyl halides in SN2 fashion to form new C–C bonds, a key method for lengthening a carbon chain.",
    choices: [
      { text: "Acts as a nucleophile forming new C–C bonds", isCorrect: true },
      { text: "Is completely unreactive and inert" },
      { text: "Acts only as a proton source" },
      { text: "Behaves as an electrophile toward nucleophiles" },
    ],
  },
  {
    stem: "Addition of one equivalent of HBr to a terminal alkyne gives, by Markovnikov orientation:",
    topic: "Alkyne Chemistry",
    explanation:
      "The proton adds to the terminal carbon so bromine ends up on the more substituted carbon, giving a Markovnikov vinyl bromide (2-bromoalkene); a second equivalent would give a geminal dibromide.",
    choices: [
      { text: "A Markovnikov vinyl bromide", isCorrect: true },
      { text: "An anti-Markovnikov vinyl bromide product" },
      { text: "A vicinal dibromide product" },
      { text: "A terminal aldehyde product" },
    ],
  },
  {
    stem: "Acid-catalysed (Markovnikov) hydration of a terminal alkyne, after tautomerisation of the enol, gives:",
    topic: "Alkyne Chemistry",
    explanation:
      "Markovnikov hydration (HgSO₄/H₂SO₄) puts –OH on the internal carbon; the resulting enol tautomerises to a ketone (a methyl ketone for a terminal alkyne), not an aldehyde.",
    choices: [
      { text: "A methyl ketone", isCorrect: true },
      { text: "A terminal aldehyde" },
      { text: "A carboxylic acid" },
      { text: "A vicinal diol" },
    ],
  },
  {
    stem: "Hydroboration–oxidation of a terminal alkyne (anti-Markovnikov hydration) gives, after tautomerisation:",
    topic: "Alkyne Chemistry",
    explanation:
      "Anti-Markovnikov hydration places –OH on the terminal carbon; the enol tautomerises to an aldehyde, making this route complementary to the ketone-forming acid-catalysed hydration.",
    choices: [
      { text: "An aldehyde", isCorrect: true },
      { text: "A methyl ketone" },
      { text: "A carboxylic acid" },
      { text: "A geminal diol" },
    ],
  },
  {
    stem: "Catalytic hydrogenation of an internal alkyne over Lindlar's catalyst stops at the alkene and gives:",
    topic: "Alkyne Chemistry",
    explanation:
      "Lindlar's poisoned palladium catalyst adds H₂ once, with syn stereochemistry, delivering the cis (Z) alkene; dissolving-metal (Na/NH₃) reduction instead gives the trans (E) alkene.",
    choices: [
      { text: "The cis (Z) alkene", isCorrect: true },
      { text: "The trans (E) alkene" },
      { text: "The fully saturated alkane" },
      { text: "A mixture with no stereochemical preference" },
    ],
  },
  {
    stem: "Reduction of an internal alkyne with sodium in liquid ammonia (Na/NH₃) gives:",
    topic: "Alkyne Chemistry",
    explanation:
      "The dissolving-metal reduction proceeds through a trans vinyl radical/anion, delivering the two hydrogens to opposite faces and giving the trans (E) alkene — complementary to Lindlar's cis product.",
    choices: [
      { text: "The trans (E) alkene", isCorrect: true },
      { text: "The cis (Z) alkene" },
      { text: "The saturated alkane" },
      { text: "A terminal alkyne" },
    ],
  },
  {
    stem: "Complete catalytic hydrogenation of an alkyne (excess H₂, Pd) gives:",
    topic: "Alkyne Chemistry",
    explanation:
      "With an ordinary active catalyst and excess hydrogen, both π bonds are reduced, converting the alkyne all the way to the corresponding alkane.",
    choices: [
      { text: "The fully saturated alkane", isCorrect: true },
      { text: "Only the cis (Z) alkene" },
      { text: "Only the trans (E) alkene" },
      { text: "A terminal aldehyde" },
    ],
  },
  {
    stem: "Which statements about alkyne chemistry are correct? Select all that apply.",
    type: "MULTI",
    topic: "Alkyne Chemistry",
    explanation:
      "Terminal alkynes are weakly acidic (sp C–H); acetylides form new C–C bonds; Markovnikov hydration gives a ketone while hydroboration gives an aldehyde; Lindlar gives cis and Na/NH₃ gives trans alkenes. Internal alkynes have no acidic C–H.",
    choices: [
      { text: "A terminal alkyne C–H is weakly acidic", isCorrect: true },
      { text: "Acetylide anions form new carbon–carbon bonds with alkyl halides", isCorrect: true },
      { text: "Acid-catalysed hydration of a terminal alkyne gives a methyl ketone", isCorrect: true },
      { text: "Lindlar's catalyst gives the cis alkene", isCorrect: true },
      { text: "Internal alkynes possess an acidic terminal C–H" },
      { text: "Na/NH₃ reduction gives the cis alkene" },
    ],
  },
  {
    stem: "Lindlar's catalyst and sodium-in-ammonia reduction of an internal alkyne give alkenes of opposite geometry (cis and trans respectively).",
    type: "TRUE_FALSE",
    topic: "Alkyne Chemistry",
    explanation:
      "Lindlar hydrogenation delivers both hydrogens to the same face (syn), giving the cis alkene, whereas the dissolving-metal reduction proceeds anti to give the trans alkene, so the two methods are stereochemically complementary.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "For a species to be aromatic it must be cyclic, planar, fully conjugated and contain:",
    topic: "Aromaticity",
    explanation:
      "Hückel's rule requires (4n + 2) π electrons in a planar, fully conjugated ring; benzene has 6 (n = 1). A continuous ring of overlapping p orbitals is also needed.",
    choices: [
      { text: "(4n + 2) π electrons in the ring", isCorrect: true },
      { text: "4n π electrons in the ring" },
      { text: "An odd number of σ bonds" },
      { text: "Exactly four π electrons in every case" },
    ],
  },
  {
    stem: "A planar, fully conjugated cyclic species with 4n π electrons (e.g. 4) is classified as:",
    topic: "Aromaticity",
    explanation:
      "Rings that are cyclic, planar and conjugated but hold 4n π electrons are antiaromatic and destabilised; cyclobutadiene (4 π electrons) is the classic example and is highly reactive.",
    choices: [
      { text: "Antiaromatic and destabilised", isCorrect: true },
      { text: "Aromatic and especially stable" },
      { text: "Non-aromatic and unaffected" },
      { text: "A normal alkene with no special property" },
    ],
  },
  {
    stem: "The special stability of benzene compared with a hypothetical cyclohexatriene is quantified by its:",
    topic: "Aromaticity",
    explanation:
      "Benzene's measured heat of hydrogenation is much less exothermic than three times that of cyclohexene; the shortfall (~150 kJ/mol) is the aromatic resonance (delocalisation) energy.",
    choices: [
      { text: "Resonance delocalisation energy", isCorrect: true },
      { text: "Ring (angle) strain energy alone" },
      { text: "Torsional strain energy" },
      { text: "Hydrogen-bond energy" },
    ],
  },
  {
    stem: "The cyclopentadienyl anion (C₅H₅⁻) is aromatic because it has:",
    topic: "Aromaticity",
    explanation:
      "The five-membered ring becomes fully conjugated when the extra electron pair enters the π system, giving 6 π electrons (4n + 2, n = 1) delocalised over all five carbons — an aromatic anion.",
    choices: [
      { text: "Six delocalised π electrons, planar", isCorrect: true },
      { text: "Only four π electrons in the ring" },
      { text: "No delocalised π electrons at all" },
      { text: "A full eight π electrons in the ring" },
    ],
  },
  {
    stem: "Pyridine is aromatic; its nitrogen lone pair is:",
    topic: "Aromaticity",
    explanation:
      "In pyridine the nitrogen contributes one electron to the aromatic π sextet through its p orbital, while its lone pair lies in an sp² orbital in the ring plane — available to act as a base without disrupting aromaticity.",
    choices: [
      { text: "In an sp² orbital in the ring plane, not part of the π system", isCorrect: true },
      { text: "Part of the aromatic π sextet" },
      { text: "Completely delocalised out of the molecule" },
      { text: "In a pure p orbital perpendicular to the ring, in the π system" },
    ],
  },
  {
    stem: "Pyrrole is aromatic, and unlike pyridine its nitrogen lone pair:",
    topic: "Aromaticity",
    explanation:
      "In pyrrole the nitrogen lone pair occupies a p orbital and is donated into the ring to complete the 6-π aromatic sextet; because that pair is tied up in aromaticity, pyrrole is a very weak base.",
    choices: [
      { text: "Is donated into the aromatic sextet", isCorrect: true },
      { text: "Sits in the ring plane and is freely basic" },
      { text: "Is not involved in ring bonding at all" },
      { text: "Makes pyrrole a strongly basic amine" },
    ],
  },
  {
    stem: "Benzene undergoes substitution rather than addition with electrophiles because substitution:",
    topic: "Aromaticity",
    explanation:
      "Adding across the ring would destroy the aromatic sextet; substitution replaces a hydrogen and restores the aromatic system, so it is strongly preferred despite benzene's unsaturation.",
    choices: [
      { text: "Preserves the aromatic ring", isCorrect: true },
      { text: "Destroys the aromatic ring" },
      { text: "Is always faster than any addition for all alkenes" },
      { text: "Requires breaking the σ framework" },
    ],
  },
  {
    stem: "All C–C bonds in benzene are equal in length (about 139 pm), intermediate between single and double, because:",
    topic: "Aromaticity",
    explanation:
      "The six π electrons are delocalised evenly around the ring, giving every C–C bond a bond order of about 1.5 and a single uniform length — a structural hallmark of aromaticity.",
    choices: [
      { text: "The π electrons delocalise equally", isCorrect: true },
      { text: "The ring has fixed alternating single and double bonds" },
      { text: "The carbons are sp³ hybridised" },
      { text: "Strong hydrogen bonding equalises the bonds" },
    ],
  },
  {
    stem: "Which species are aromatic? Select all that apply.",
    type: "MULTI",
    topic: "Aromaticity",
    explanation:
      "Benzene, the cyclopentadienyl anion, pyridine and pyrrole all satisfy Hückel's rule with a planar, fully conjugated (4n+2) π system. Cyclobutadiene (4 π electrons) is antiaromatic, and cyclohexane has no π system.",
    choices: [
      { text: "Benzene", isCorrect: true },
      { text: "The cyclopentadienyl anion", isCorrect: true },
      { text: "Pyridine", isCorrect: true },
      { text: "Pyrrole", isCorrect: true },
      { text: "Cyclobutadiene" },
      { text: "Cyclohexane" },
    ],
  },
  {
    stem: "Which criteria must be met for a molecule to be aromatic? Select all that apply.",
    type: "MULTI",
    topic: "Aromaticity",
    explanation:
      "Aromaticity requires a cyclic, planar, fully conjugated ring with (4n+2) π electrons in a continuous loop of p orbitals. Being saturated or holding 4n π electrons does not give aromaticity.",
    choices: [
      { text: "The ring must be cyclic", isCorrect: true },
      { text: "The ring must be planar", isCorrect: true },
      { text: "The π system must be fully conjugated around the ring", isCorrect: true },
      { text: "It must contain (4n + 2) π electrons", isCorrect: true },
      { text: "The ring carbons must be sp³ hybridised" },
      { text: "It must contain 4n π electrons" },
    ],
  },
  {
    stem: "Benzene reacts with electrophiles predominantly by substitution because addition would sacrifice its aromatic stabilisation.",
    type: "TRUE_FALSE",
    topic: "Aromaticity",
    explanation:
      "An electrophilic addition would break the delocalised 6-π system and lose the large resonance energy; substitution, which restores aromaticity after replacing a hydrogen, is therefore strongly favoured.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "The key intermediate in electrophilic aromatic substitution is the:",
    topic: "Electrophilic Aromatic Substitution",
    explanation:
      "The electrophile adds to the ring to give a resonance-stabilised carbocation (the arenium ion, or sigma/Wheland intermediate); loss of a proton from it then restores aromaticity.",
    choices: [
      { text: "A resonance-stabilised arenium", isCorrect: true },
      { text: "Free carbanion on the ring" },
      { text: "An aromatic radical anion" },
      { text: "A bromonium-type bridged ion" },
    ],
  },
  {
    stem: "In the nitration of benzene, the electrophile that attacks the ring is:",
    topic: "Electrophilic Aromatic Substitution",
    explanation:
      "A mixture of concentrated nitric and sulfuric acids generates the nitronium ion, NO₂⁺, which is the electrophile that substitutes onto the ring to give nitrobenzene.",
    choices: [
      { text: "The nitronium ion, NO₂⁺", isCorrect: true },
      { text: "The nitrite ion, NO₂⁻" },
      { text: "Nitric oxide, NO" },
      { text: "The ammonium ion, NH₄⁺" },
    ],
  },
  {
    stem: "Friedel–Crafts alkylation installs an alkyl group on benzene using an alkyl halide together with:",
    topic: "Electrophilic Aromatic Substitution",
    explanation:
      "A Lewis acid such as AlCl₃ ionises the alkyl halide to generate a carbocation (the electrophile); the ring then attacks it, forming a new C–C bond to give an alkylbenzene.",
    choices: [
      { text: "A Lewis acid catalyst such as AlCl₃", isCorrect: true },
      { text: "A strong base such as aqueous NaOH" },
      { text: "A reducing metal such as sodium metal" },
      { text: "Water acting as the only reagent" },
    ],
  },
  {
    stem: "A significant limitation of Friedel–Crafts alkylation is that:",
    topic: "Electrophilic Aromatic Substitution",
    explanation:
      "The carbocation electrophile can rearrange to a more stable ion (giving the wrong alkyl group), and the product is more reactive than benzene, so polyalkylation is common — both complicate the reaction.",
    choices: [
      { text: "Rearrangement and polyalkylation occur", isCorrect: true },
      { text: "It works only on strongly deactivated rings" },
      { text: "It mistakenly installs a carbonyl group" },
      { text: "It requires a strong base to proceed" },
    ],
  },
  {
    stem: "Friedel–Crafts acylation avoids the rearrangement problem of alkylation because its electrophile, the acylium ion, is:",
    topic: "Electrophilic Aromatic Substitution",
    explanation:
      "The acylium ion (R–C≡O⁺) is resonance-stabilised and does not rearrange; acylation also stops cleanly at one substitution because the ketone product is deactivated toward further reaction.",
    choices: [
      { text: "Resonance-stabilised and does not rearrange", isCorrect: true },
      { text: "A primary carbocation that rearranges readily" },
      { text: "A free radical" },
      { text: "A carbanion" },
    ],
  },
  {
    stem: "The ketone product of a Friedel–Crafts acylation can be converted to an alkylbenzene by:",
    topic: "Electrophilic Aromatic Substitution",
    explanation:
      "Reducing the C=O of the aryl ketone (Clemmensen, Zn(Hg)/HCl, or Wolff–Kishner, N₂H₄/base) gives a straight-chain alkylbenzene, avoiding the rearrangement that direct alkylation would cause.",
    choices: [
      { text: "Reduction (Clemmensen/Wolff–Kishner)", isCorrect: true },
      { text: "Oxidising the carbonyl to a carboxyl" },
      { text: "Treating with further acyl chloride" },
      { text: "Adding aqueous bromine water" },
    ],
  },
  {
    stem: "Halogenation of benzene (e.g. bromination) requires a Lewis-acid catalyst such as FeBr₃ in order to:",
    topic: "Electrophilic Aromatic Substitution",
    explanation:
      "Benzene is not nucleophilic enough to react with Br₂ alone; FeBr₃ polarises/activates the halogen, generating a stronger electrophile (effectively Br⁺) that the ring can attack.",
    choices: [
      { text: "Generate a stronger halogen electrophile", isCorrect: true },
      { text: "Deprotonate the benzene ring first" },
      { text: "Reduce the bromine down to bromide" },
      { text: "Turn it into a radical chain reaction" },
    ],
  },
  {
    stem: "Sulfonation of benzene with fuming sulfuric acid is notable among EAS reactions for being:",
    topic: "Electrophilic Aromatic Substitution",
    explanation:
      "Sulfonation (electrophile SO₃ or ⁺SO₃H) is reversible: heating the sulfonic acid in dilute aqueous acid removes the –SO₃H group, which makes it a useful removable blocking group in synthesis.",
    choices: [
      { text: "Reversible, so the –SO₃H group can be removed later", isCorrect: true },
      { text: "Completely irreversible under all conditions" },
      { text: "A radical rather than ionic process" },
      { text: "Incapable of occurring without a metal catalyst" },
    ],
  },
  {
    stem: "Which reagent/electrophile pairings for EAS are correct? Select all that apply.",
    type: "MULTI",
    topic: "Electrophilic Aromatic Substitution",
    explanation:
      "Nitration uses NO₂⁺; Friedel–Crafts alkylation a carbocation (R⁺); acylation an acylium ion; bromination a halogen activated by a Lewis acid. Nitration does not use the nitrite ion.",
    choices: [
      { text: "Nitration → nitronium ion NO₂⁺", isCorrect: true },
      { text: "Friedel–Crafts alkylation → carbocation R⁺", isCorrect: true },
      { text: "Friedel–Crafts acylation → acylium ion RCO⁺", isCorrect: true },
      { text: "Bromination → Br₂ activated by FeBr₃", isCorrect: true },
      { text: "Nitration → nitrite ion NO₂⁻" },
      { text: "Acylation → free methyl radical" },
    ],
  },
  {
    stem: "Which statements about Friedel–Crafts reactions are correct? Select all that apply.",
    type: "MULTI",
    topic: "Electrophilic Aromatic Substitution",
    explanation:
      "Alkylation can rearrange and polyalkylate; acylation uses a non-rearranging acylium ion and stops at one substitution; the ketone can be reduced to an alkylbenzene. Friedel–Crafts fails on strongly deactivated rings.",
    choices: [
      { text: "Alkylation can suffer carbocation rearrangement", isCorrect: true },
      { text: "Alkylation is prone to polyalkylation", isCorrect: true },
      { text: "Acylation proceeds through a non-rearranging acylium ion", isCorrect: true },
      { text: "The acylation product can be reduced to an alkylbenzene", isCorrect: true },
      { text: "Friedel–Crafts works well on strongly deactivated (e.g. nitro-substituted) rings" },
      { text: "Acylation readily adds two or three acyl groups" },
    ],
  },
  {
    stem: "Electrophilic aromatic substitution replaces a ring hydrogen and regenerates the aromatic system after loss of a proton from the arenium intermediate.",
    type: "TRUE_FALSE",
    topic: "Electrophilic Aromatic Substitution",
    explanation:
      "The electrophile adds to give the non-aromatic arenium ion; a base then removes the proton from the sp³ carbon, restoring the aromatic sextet and yielding the substituted benzene.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "An electron-donating substituent already on a benzene ring generally makes the ring:",
    topic: "Directing Effects",
    explanation:
      "Donor groups raise ring electron density, so they activate the ring toward electrophilic substitution (faster than benzene) and direct the incoming electrophile to the ortho and para positions.",
    choices: [
      { text: "More reactive and ortho/para-directing", isCorrect: true },
      { text: "Less reactive and meta-directing" },
      { text: "Completely unreactive toward electrophiles" },
      { text: "More reactive but meta-directing" },
    ],
  },
  {
    stem: "A strong electron-withdrawing group such as –NO₂ makes the ring:",
    topic: "Directing Effects",
    explanation:
      "Withdrawing groups lower ring electron density, deactivating it (slower than benzene) and directing electrophiles to the meta position, where the arenium intermediate is least destabilised.",
    choices: [
      { text: "Less reactive and meta-directing", isCorrect: true },
      { text: "More reactive and ortho/para-directing" },
      { text: "More reactive and meta-directing" },
      { text: "Unchanged in reactivity" },
    ],
  },
  {
    stem: "Ortho/para directors activate those positions because in the arenium intermediate they can:",
    topic: "Directing Effects",
    explanation:
      "When the electrophile adds ortho or para to a donor group, the positive charge can be delocalised onto the carbon bearing the donor, which stabilises the intermediate — favouring those positions.",
    choices: [
      { text: "Stabilise the intermediate by resonance", isCorrect: true },
      { text: "Destabilise the intermediate at those positions" },
      { text: "Break the aromatic ring open" },
      { text: "Convert the ring into a carbanion" },
    ],
  },
  {
    stem: "The halogens (–Cl, –Br) are unusual directors because they are:",
    topic: "Directing Effects",
    explanation:
      "Halogens withdraw electron density inductively (deactivating, so the ring reacts slower than benzene) yet donate a lone pair by resonance at ortho/para — so they are deactivating but ortho/para-directing.",
    choices: [
      { text: "Deactivating yet ortho/para-directing", isCorrect: true },
      { text: "Activating and ortho/para-directing" },
      { text: "Deactivating and meta-directing" },
      { text: "Activating and meta-directing" },
    ],
  },
  {
    stem: "Which substituent is a meta director?",
    topic: "Directing Effects",
    explanation:
      "Groups that withdraw electrons (–NO₂, –C≡N, –SO₃H, carbonyls) are meta directors; –OH, –NH₂, –OR and alkyl groups are ortho/para directors. The nitro group is a classic meta director.",
    choices: [
      { text: "The nitro group –NO₂", isCorrect: true },
      { text: "The hydroxyl group –OH" },
      { text: "The amino group –NH₂" },
      { text: "A methyl group –CH₃" },
    ],
  },
  {
    stem: "Among ortho/para products, a bulky electrophile or a bulky existing substituent tends to favour the:",
    topic: "Directing Effects",
    explanation:
      "Ortho positions are next to the existing group and are sterically crowded, so with bulky partners the para product predominates; small groups give a more statistical ortho/para mix.",
    choices: [
      { text: "Para product, for steric reasons", isCorrect: true },
      { text: "Ortho product, for steric reasons" },
      { text: "Meta product exclusively" },
      { text: "Ipso product" },
    ],
  },
  {
    stem: "The strongest activating substituents (–NH₂, –OH, –OR) activate the ring so strongly that they:",
    topic: "Directing Effects",
    explanation:
      "Powerful π-donors make the ring very reactive; for example aniline and phenol brominate rapidly and multiply (e.g. tribromination) even without a Lewis-acid catalyst.",
    choices: [
      { text: "Can substitute multiply, even without catalyst", isCorrect: true },
      { text: "React more slowly than benzene itself" },
      { text: "Prevent electrophilic substitution occurring" },
      { text: "Direct electrophiles to the meta position" },
    ],
  },
  {
    stem: "When two directing groups on a ring reinforce each other, the position of further substitution is decided; when they conflict, the site is usually controlled by:",
    topic: "Directing Effects",
    explanation:
      "The more powerful activating group dominates the orientation of a third substituent; strongly hindered positions between two substituents are also usually avoided for steric reasons.",
    choices: [
      { text: "The stronger activating group", isCorrect: true },
      { text: "The weaker (more deactivating) group" },
      { text: "Whichever group was added first, always" },
      { text: "Random statistics with no preference" },
    ],
  },
  {
    stem: "To make meta-bromonitrobenzene, one nitrates and brominates in an order that uses:",
    topic: "Synthesis Strategy",
    explanation:
      "Because –NO₂ is a meta director, installing it first sets up meta bromination; adding bromine first (an o/p director) would instead give o/p products, so the order of steps controls the substitution pattern.",
    choices: [
      { text: "Nitrate first, so –NO₂ steers bromine meta", isCorrect: true },
      { text: "Bromination first, steering nitro meta" },
      { text: "Either order, since order does not matter" },
      { text: "Sulfonation as the only route" },
    ],
  },
  {
    stem: "A sulfonic-acid group is sometimes installed temporarily in a synthesis because it:",
    topic: "Synthesis Strategy",
    explanation:
      "The –SO₃H group blocks the para position and can later be removed by dilute acid; this lets a chemist force substitution ortho, then strip off the blocking group — a removable directing/blocking strategy.",
    choices: [
      { text: "Blocks a position, then can be removed", isCorrect: true },
      { text: "Permanently locks the ring against reaction" },
      { text: "Converts the ring to a non-aromatic system" },
      { text: "Adds two carbons to the ring" },
    ],
  },
  {
    stem: "Nucleophilic aromatic substitution (addition–elimination) is greatly accelerated by:",
    topic: "Nucleophilic Aromatic Substitution",
    explanation:
      "The addition–elimination (SNAr) pathway needs strong electron-withdrawing groups ortho and/or para to the leaving group to stabilise the anionic Meisenheimer intermediate; nitro groups are ideal.",
    choices: [
      { text: "Strong EWGs ortho/para to the leaving group", isCorrect: true },
      { text: "Strong electron-donating groups on the ring" },
      { text: "Removing every substituent from the ring" },
      { text: "An aromatic ring bearing no leaving group" },
    ],
  },
  {
    stem: "The negatively charged intermediate in addition–elimination nucleophilic aromatic substitution is called the:",
    topic: "Nucleophilic Aromatic Substitution",
    explanation:
      "The nucleophile adds first to give a resonance-stabilised anionic cyclohexadienyl (Meisenheimer) complex; the leaving group is then expelled to restore aromaticity.",
    choices: [
      { text: "The Meisenheimer complex", isCorrect: true },
      { text: "An arenium (sigma) ion" },
      { text: "A bridged bromonium ion" },
      { text: "Acylium ion" },
    ],
  },
  {
    stem: "The order of leaving-group ability in addition–elimination SNAr (F often fastest) is opposite to aliphatic substitution because the rate-determining step is:",
    topic: "Nucleophilic Aromatic Substitution",
    explanation:
      "In SNAr the nucleophilic addition is rate-determining; the strongly electron-withdrawing, small fluorine best stabilises the anionic transition state, so aryl fluorides react fastest despite the strong C–F bond.",
    choices: [
      { text: "Addition, favoured by fluorine's withdrawal", isCorrect: true },
      { text: "C–halogen bond cleavage, favouring iodide" },
      { text: "Formation of a free, unstable aryl cation" },
      { text: "Loss of a ring proton in the first step" },
    ],
  },
  {
    stem: "In the absence of activating groups, a very strong base (e.g. NaNH₂) can convert an aryl halide to a substituted arene through a:",
    topic: "Nucleophilic Aromatic Substitution",
    explanation:
      "With no EWG to allow addition–elimination, a strong base removes an ortho proton and eliminates halide to give a highly reactive benzyne, which the nucleophile then adds across (elimination–addition).",
    choices: [
      { text: "Benzyne (elimination–addition)", isCorrect: true },
      { text: "Meisenheimer addition complex" },
      { text: "Stable, isolable aryl carbocation" },
      { text: "Free-radical chain process" },
    ],
  },
  {
    stem: "Evidence for the benzyne mechanism includes the finding that a nucleophile can end up on:",
    topic: "Nucleophilic Aromatic Substitution",
    explanation:
      "Because benzyne is symmetrical about the triple-bond-like carbons, the nucleophile can add to either carbon, so the substituent may appear on the original carbon or the adjacent one (isotopic labelling confirms this).",
    choices: [
      { text: "Either the original or the adjacent carbon", isCorrect: true },
      { text: "Only the very carbon that bore the halide" },
      { text: "The para ring carbon exclusively" },
      { text: "A carbon on an entirely different ring" },
    ],
  },
  {
    stem: "Vigorous oxidation of an alkylbenzene (e.g. toluene with hot KMnO₄) gives:",
    topic: "Side-Chain Reactions",
    explanation:
      "Regardless of chain length, an alkyl side chain bearing a benzylic hydrogen is oxidised all the way to a carboxyl group attached to the ring, so toluene gives benzoic acid.",
    choices: [
      { text: "Benzoic acid (ring –COOH)", isCorrect: true },
      { text: "An aldehyde, stopping at one carbon" },
      { text: "A ketone within the ring" },
      { text: "Complete destruction of the ring" },
    ],
  },
  {
    stem: "A tert-butylbenzene resists side-chain oxidation by hot KMnO₄ because its benzylic carbon:",
    topic: "Side-Chain Reactions",
    explanation:
      "Side-chain oxidation requires a benzylic C–H bond; the quaternary benzylic carbon of tert-butylbenzene has no hydrogen, so the side chain cannot be oxidised to a carboxyl group.",
    choices: [
      { text: "Has no hydrogen (quaternary)", isCorrect: true },
      { text: "Bears three hydrogens" },
      { text: "Is part of the aromatic ring" },
      { text: "Is especially electron-rich" },
    ],
  },
  {
    stem: "Radical benzylic bromination (e.g. with NBS) is selective for the benzylic position because the intermediate benzylic radical is:",
    topic: "Side-Chain Reactions",
    explanation:
      "Abstraction of a benzylic hydrogen gives a radical stabilised by resonance into the aromatic ring; this stabilisation makes the benzylic C–H by far the easiest to abstract, so NBS brominates there selectively.",
    choices: [
      { text: "resonance-stabilised by the ring", isCorrect: true },
      { text: "Destabilised by the aromatic ring" },
      { text: "a carbocation rather than a radical" },
      { text: "unable to form under any conditions" },
    ],
  },
  {
    stem: "Phenol is considerably more acidic than an aliphatic alcohol such as ethanol because the phenoxide anion is:",
    topic: "Phenols",
    explanation:
      "Loss of the phenolic proton gives a phenoxide whose negative charge is delocalised into the aromatic ring; this resonance stabilisation (absent in ethoxide) makes phenol far more acidic than ethanol.",
    choices: [
      { text: "Resonance-stabilised into the ring", isCorrect: true },
      { text: "Destabilised relative to the ethoxide ion" },
      { text: "Completely unable to delocalise its charge" },
      { text: "A localised primary alkoxide anion" },
    ],
  },
  {
    stem: "An aryldiazonium salt (ArN₂⁺), formed from an aromatic amine and nitrous acid, is synthetically valuable because the –N₂⁺ group can be:",
    topic: "Aromatic Amines & Diazonium",
    explanation:
      "The diazonium group is an excellent leaving group: it can be replaced by –OH, –CN, –F, –Cl, –Br or –H, or coupled with activated arenes to make azo dyes, giving access to many substituted benzenes.",
    choices: [
      { text: "Replaced by a wide range of other groups", isCorrect: true },
      { text: "Never displaced under any conditions" },
      { text: "Converted only back into the amine" },
      { text: "Used only as an oxidising agent" },
    ],
  },
  {
    stem: "Which substituents are ortho/para directors? Select all that apply.",
    type: "MULTI",
    topic: "Directing Effects",
    explanation:
      "–OH, –NH₂, –OR and alkyl groups are ortho/para directors (donors or weak activators), and halogens are ortho/para directors too (though deactivating). –NO₂ and –C≡N are meta directors.",
    choices: [
      { text: "The hydroxyl group –OH", isCorrect: true },
      { text: "The amino group –NH₂", isCorrect: true },
      { text: "A methyl group –CH₃", isCorrect: true },
      { text: "A chlorine substituent –Cl", isCorrect: true },
      { text: "The nitro group –NO₂" },
      { text: "The cyano group –C≡N" },
    ],
  },
  {
    stem: "Which conditions favour nucleophilic aromatic substitution by the addition–elimination (SNAr) route? Select all that apply.",
    type: "MULTI",
    topic: "Nucleophilic Aromatic Substitution",
    explanation:
      "SNAr needs strong EWGs ortho/para to a leaving group, a good nucleophile, and a leaving group on the ring; it proceeds via a Meisenheimer complex. Electron-rich rings and the absence of a leaving group prevent it.",
    choices: [
      { text: "Strong electron-withdrawing groups ortho/para to the leaving group", isCorrect: true },
      { text: "A good nucleophile", isCorrect: true },
      { text: "A leaving group attached to the ring", isCorrect: true },
      { text: "Passage through a Meisenheimer complex", isCorrect: true },
      { text: "An electron-rich ring bearing only donor groups" },
      { text: "A ring with no leaving group at all" },
    ],
  },
  {
    stem: "Halogen substituents on benzene are unusual in being deactivating toward electrophilic substitution yet ortho/para-directing.",
    type: "TRUE_FALSE",
    topic: "Directing Effects",
    explanation:
      "Halogens withdraw electron density inductively (slowing the reaction, hence deactivating) but donate a lone pair by resonance at the ortho and para positions, so they still steer the electrophile there.",
    choices: [
      { text: "True", isCorrect: true },
      { text: "False" },
    ],
  },
  {
    stem: "Toluene undergoes electrophilic substitution faster than benzene because the methyl group is:",
    topic: "Directing Effects",
    explanation:
      "The methyl group is weakly electron-releasing (+I and hyperconjugation), so it activates the ring; toluene therefore reacts faster than benzene, giving mainly ortho and para products.",
    choices: [
      { text: "A weak electron-releasing group", isCorrect: true },
      { text: "A strong ring deactivator" },
      { text: "A meta-directing group" },
      { text: "Electronically inert overall" },
    ],
  },
  {
    stem: "Nitrobenzene undergoes further nitration much more slowly than benzene and gives mainly the:",
    topic: "Directing Effects",
    explanation:
      "The nitro group is strongly deactivating and meta-directing, so a second nitration is slow and occurs predominantly at the meta position, giving 1,3-dinitrobenzene.",
    choices: [
      { text: "Meta (1,3-dinitrobenzene)", isCorrect: true },
      { text: "1,4-para product" },
      { text: "1,2-ortho product" },
      { text: "ipso-substituted product" },
    ],
  },
  {
    stem: "Aniline is often protected as its amide (acetanilide) before nitration because the free –NH₂ group:",
    topic: "Aromatic Amines & Diazonium",
    explanation:
      "The strongly activating amino group makes aniline so reactive (and prone to oxidation) that nitration is uncontrolled; acetylation moderates it to a well-behaved ortho/para director for clean nitration.",
    choices: [
      { text: "Is so activating that reaction runs wild", isCorrect: true },
      { text: "Deactivates the ring too much to react" },
      { text: "Prevents any substitution whatsoever" },
      { text: "Turns the ring into a meta director" },
    ],
  },
  {
    stem: "Which position is least favoured when a bulky electrophile substitutes on a ring already bearing a bulky ortho/para director?",
    topic: "Directing Effects",
    explanation:
      "The ortho positions flank the existing bulky group and are sterically hindered, so bulky partners react there least; para (and the statistically less crowded sites) are preferred.",
    choices: [
      { text: "Ortho, because of steric crowding", isCorrect: true },
      { text: "Para, because it is too far away" },
      { text: "Meta, because it is activated" },
      { text: "All positions equally hindered" },
    ],
  },
  {
    stem: "Benzene's molecular formula C₆H₆ indicates four degrees of unsaturation, accounted for by:",
    topic: "Aromaticity",
    explanation:
      "DoU = (2×6+2−6)/2 = 4; in benzene these correspond to one ring plus three π bonds delocalised into the aromatic system, consistent with its planar six-membered structure.",
    choices: [
      { text: "One ring and three π bonds", isCorrect: true },
      { text: "Four separate rings" },
      { text: "Four isolated double bonds and no ring" },
      { text: "Two rings and two π bonds" },
    ],
  },
  {
    stem: "The reason the arenium intermediate from meta attack on nitrobenzene is preferred is that meta attack avoids:",
    topic: "Directing Effects",
    explanation:
      "For a meta director, ortho or para attack would place positive charge directly on the ring carbon bearing the electron-withdrawing group — a very unfavourable arrangement; meta attack avoids that, so it dominates.",
    choices: [
      { text: "Charge on the carbon bearing –NO₂", isCorrect: true },
      { text: "Forming any resonance structures whatsoever" },
      { text: "Breaking open the aromatic ring" },
      { text: "Using the nitronium electrophile" },
    ],
  },
  {
    stem: "Electrophilic addition and electrophilic aromatic substitution both begin with attack by the π electrons, but differ in that substitution:",
    topic: "Aromaticity",
    explanation:
      "In an alkene the intermediate cation is quenched by a nucleophile (net addition); in benzene the arenium ion instead loses a proton to restore the aromatic ring (net substitution), preserving aromaticity.",
    choices: [
      { text: "Loses a proton to restore aromaticity", isCorrect: true },
      { text: "Ends by adding a nucleophile to the ring" },
      { text: "Involves no cationic intermediate at all" },
      { text: "Destroys the aromatic ring permanently" },
    ],
  },
  {
    stem: "A ring bearing both a –CH₃ group and a –NO₂ group meta to each other will direct a third electrophile predominantly to the position governed by:",
    topic: "Directing Effects",
    explanation:
      "The methyl group is an activating o/p director and the nitro group a deactivating meta director; the activating group wins, so substitution goes ortho/para to the methyl (and, where they agree, at the shared favoured site).",
    choices: [
      { text: "The activating methyl group", isCorrect: true },
      { text: "The deactivating nitro group" },
      { text: "Neither group; it is random" },
      { text: "Whichever group is drawn first" },
    ],
  },
  {
    stem: "Chlorobenzene is less reactive than benzene toward nitration but still gives mainly ortho and para nitro products because chlorine:",
    topic: "Directing Effects",
    explanation:
      "Chlorine deactivates the ring inductively (slower reaction) yet donates a lone pair by resonance at ortho/para, stabilising those intermediates — hence o/p products despite the overall deactivation.",
    choices: [
      { text: "Withdraws by induction, donates at o/p", isCorrect: true },
      { text: "Strongly activates the whole ring" },
      { text: "Directs incoming groups only to meta" },
      { text: "Exerts no electronic effect on the ring" },
    ],
  },
  {
    stem: "Reduction of nitrobenzene (e.g. Sn/HCl then base, or H₂/catalyst) gives:",
    topic: "Aromatic Amines & Diazonium",
    explanation:
      "Reducing the nitro group converts it stepwise to the amine, giving aniline; this is the standard way to install an amino group, since direct amination of benzene is not practical.",
    choices: [
      { text: "Aniline (aminobenzene)", isCorrect: true },
      { text: "Phenol (hydroxybenzene)" },
      { text: "Benzoic acid (PhCOOH)" },
      { text: "Benzaldehyde (PhCHO)" },
    ],
  },
  {
    stem: "An arenediazonium salt loses N₂ and is replaced by –OH when:",
    topic: "Aromatic Amines & Diazonium",
    explanation:
      "Warming an aryldiazonium salt in aqueous acid substitutes the diazonium group with a hydroxyl, giving a phenol; the very stable N₂ molecule is the leaving group that drives the reaction.",
    choices: [
      { text: "It is warmed in water, giving a phenol", isCorrect: true },
      { text: "It is treated with strong base alone" },
      { text: "It is cooled below zero indefinitely" },
      { text: "It is reduced with hydrogen gas over metal" },
    ],
  },
  {
    stem: "Naphthalene, with two fused benzene rings, is aromatic and contains a delocalised π system of:",
    topic: "Aromaticity",
    explanation:
      "Naphthalene has ten π electrons delocalised over its two fused rings, satisfying aromatic requirements; it is aromatic overall, though its two rings are not perfectly equivalent.",
    choices: [
      { text: "Ten delocalised π electrons", isCorrect: true },
      { text: "Six π electrons in a single ring only" },
      { text: "Four π electrons" },
      { text: "No delocalised π electrons" },
    ],
  },
  {
    stem: "Compared with electrophilic addition to an alkene, benzene requires more forcing conditions (a catalyst or strong electrophile) because:",
    topic: "Aromaticity",
    explanation:
      "Reacting benzene means temporarily disrupting the stabilised aromatic sextet, which raises the activation barrier; a stronger electrophile or Lewis-acid catalyst is therefore needed compared with a reactive alkene.",
    choices: [
      { text: "Reaction must overcome benzene's aromatic stabilisation", isCorrect: true },
      { text: "Benzene has no π electrons to react" },
      { text: "Benzene is far more reactive than an alkene" },
      { text: "The ring is already saturated" },
    ],
  },
  {
    stem: "The product of Friedel–Crafts acylation of benzene with an acyl chloride RCOCl is:",
    topic: "Electrophilic Aromatic Substitution",
    explanation:
      "The acylium ion substitutes onto the ring to give an aryl ketone (Ar–CO–R); unlike alkylation, acylation stops cleanly at one substitution because the ketone deactivates the ring.",
    choices: [
      { text: "An aryl ketone (Ar–CO–R)", isCorrect: true },
      { text: "An alkylbenzene (Ar–R)" },
      { text: "A carboxylic acid" },
      { text: "A ring phenol" },
    ],
  },
  {
    stem: "A ring carrying a strongly deactivating group (e.g. –NO₂) generally will NOT undergo:",
    topic: "Electrophilic Aromatic Substitution",
    explanation:
      "Friedel–Crafts reactions require a reasonably nucleophilic ring; a strongly deactivated ring (nitrobenzene) is too electron-poor to react, so Friedel–Crafts alkylation/acylation essentially fail on it.",
    choices: [
      { text: "Friedel–Crafts alkylation/acylation", isCorrect: true },
      { text: "Reduction of an existing nitro group" },
      { text: "Any electrophilic reaction whatsoever" },
      { text: "Slow, meta-directed nitration" },
    ],
  },
  {
    stem: "A phenoxide ion is a better nucleophile than phenol itself in ring reactions because:",
    topic: "Phenols",
    explanation:
      "Deprotonating phenol to phenoxide gives a negatively charged, electron-rich ring that is strongly activated; phenoxide undergoes electrophilic substitution (and reactions like Kolbe carboxylation) far more readily than neutral phenol.",
    choices: [
      { text: "The charge makes the ring electron-rich", isCorrect: true },
      { text: "The negative charge deactivates the whole ring" },
      { text: "It is no longer an aromatic species" },
      { text: "It has lost all of its π electrons" },
    ],
  },
  {
    stem: "Which of these will react fastest with an electrophile such as the nitronium ion?",
    topic: "Directing Effects",
    explanation:
      "Reactivity tracks ring electron density: the strongly activated anisole (methoxybenzene) reacts fastest, benzene is the reference, and the deactivated chlorobenzene and (especially) nitrobenzene are slower.",
    choices: [
      { text: "Anisole (activated)", isCorrect: true },
      { text: "Nitrobenzene (deactivated)" },
      { text: "Chlorobenzene (deactivated)" },
      { text: "Benzoic acid (deactivated)" },
    ],
  },
  {
    stem: "The addition–elimination and elimination–addition (benzyne) pathways differ in that only the benzyne route:",
    topic: "Nucleophilic Aromatic Substitution",
    explanation:
      "The benzyne (elimination–addition) route requires a very strong base and passes through a strained benzyne intermediate; the addition–elimination route instead needs activating EWGs and forms a Meisenheimer complex.",
    choices: [
      { text: "Proceeds through a strained benzyne intermediate", isCorrect: true },
      { text: "Requires strong electron-withdrawing groups on the ring" },
      { text: "Forms a Meisenheimer complex" },
      { text: "Occurs only with electron-rich rings and no base" },
    ],
  },
  {
    stem: "A benzylic C–H bond is weaker than an ordinary alkane C–H bond because homolysis gives a radical that is:",
    topic: "Side-Chain Reactions",
    explanation:
      "The benzylic radical is delocalised into the aromatic ring by resonance, which lowers its energy; this stabilisation weakens the benzylic C–H bond and makes benzylic positions reactive toward radical halogenation.",
    choices: [
      { text: "Resonance-stabilised by the ring", isCorrect: true },
      { text: "Destabilised by the ring" },
      { text: "A carbocation rather than a radical" },
      { text: "Incapable of forming" },
    ],
  },
  {
    stem: "The characteristic reaction of benzene with a mixture of concentrated HNO₃ and H₂SO₄ is:",
    topic: "Electrophilic Aromatic Substitution",
    explanation:
      "This mixture generates the nitronium ion and nitrates benzene to nitrobenzene; the sulfuric acid protonates nitric acid to help form the NO₂⁺ electrophile.",
    choices: [
      { text: "Nitration to nitrobenzene", isCorrect: true },
      { text: "Sulfonation to benzenesulfonic acid" },
      { text: "Bromination to bromobenzene" },
      { text: "Complete oxidation of the ring" },
    ],
  },
  {
    stem: "The Kekulé and delocalised (circle) representations of benzene differ in that the delocalised model shows:",
    topic: "Aromaticity",
    explanation:
      "The circle-in-a-hexagon representation emphasises that the six π electrons are shared equally around the ring (all bonds equivalent), whereas a single Kekulé structure misleadingly implies alternating fixed double bonds.",
    choices: [
      { text: "π electrons shared equally", isCorrect: true },
      { text: "Three permanently fixed double bonds" },
      { text: "An sp³-hybridised, puckered ring form" },
      { text: "A localised carbanion" },
    ],
  },
  {
    stem: "Which statements about aromatic side-chain and related reactions are correct? Select all that apply.",
    type: "MULTI",
    topic: "Side-Chain Reactions",
    explanation:
      "Hot KMnO₄ oxidises a benzylic side chain to –COOH; a benzylic C–H is weakened by radical resonance stabilisation; phenol is more acidic than ethanol; a quaternary benzylic carbon resists oxidation. Benzene's ring is not cleaved by mild reagents.",
    choices: [
      { text: "Hot KMnO₄ oxidises an alkyl side chain to a carboxyl group", isCorrect: true },
      { text: "Benzylic radicals are resonance-stabilised by the ring", isCorrect: true },
      { text: "Phenol is more acidic than ethanol", isCorrect: true },
      { text: "A quaternary benzylic carbon resists side-chain oxidation", isCorrect: true },
      { text: "Benzene's ring is readily cleaved by cold dilute KMnO₄" },
      { text: "Benzylic positions are the least reactive toward radical bromination" },
    ],
  },
];
