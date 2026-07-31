/**
 * PHARMACOLOGY — SET 4 of 7  ·  TIER 4: SPECIAL POPULATIONS
 *
 * SIXTY questions. Ten areas, six each.
 *
 * Tiers 1–3 built principles, classes and straightforward application. Tier 4
 * is where the standard answer stops working: pregnancy, breastfeeding,
 * neonates, children, older adults, obesity, the end of life, and the patient
 * whose four guidelines contradict each other.
 *
 * This is the tier that separates someone who has memorised drug facts from
 * someone who can prescribe. It assumes Sets 1–3 and re-tests none of them.
 *
 * Non-destructive (uses _seedkit) — a re-run refreshes only what it owns and
 * keeps anything you added through Admin.
 *
 * ⚠ Specific agents, thresholds and doses vary by national guideline and
 * formulary. These test the reasoning that decides the choice, which travels.
 * Review anything numerical against Kenyan guidance before publishing.
 *
 * Run:  npx tsx prisma/seed-pharmacology-set-4.ts
 */

import { type Q, findCategory, seedSet, done, REPLACE_MODE } from "./_seedkit";

const SET4: Q[] = [
  /* ── Pregnancy: General Principles ── */
  {
    stem: "Why is the first trimester the period of greatest teratogenic risk?",
    topic: "Pregnancy: General Principles",
    explanation:
      "Organogenesis occurs then, so a structural insult during that window produces malformation. Later exposure more often affects growth, function or the neonate at delivery rather than structure — which is why the same drug carries different risks depending on when it is taken.",
    choices: [
      { text: "Organogenesis occurs then, so insults produce structural malformation", isCorrect: true },
      { text: "The placenta is most permeable in late pregnancy only", isCorrect: false },
      { text: "Maternal metabolism is slowest early on", isCorrect: false },
      { text: "Risk is identical across all three trimesters", isCorrect: false },
    ],
  },
  {
    stem: "Why is withholding all medication not automatically the safest choice in pregnancy?",
    topic: "Pregnancy: General Principles",
    explanation:
      "Untreated maternal illness carries its own risk to both mother and fetus — uncontrolled epilepsy, asthma, infection, diabetes and severe mental illness all cause harm. The comparison is never drug versus nothing; it is drug versus untreated disease.",
    choices: [
      { text: "Untreated maternal illness harms both mother and fetus", isCorrect: true },
      { text: "All drugs are proven safe in pregnancy", isCorrect: false },
      { text: "The placenta blocks every medication", isCorrect: false },
      { text: "Stopping treatment has no consequences", isCorrect: false },
    ],
  },
  {
    stem: "Why is safety evidence in pregnancy so much weaker than for other groups?",
    topic: "Pregnancy: General Principles",
    explanation:
      "Pregnant women are almost always excluded from clinical trials, so evidence comes from registries, cohort studies and post-marketing reports gathered after the fact. Absence of reported harm therefore means limited data rather than demonstrated safety — a distinction worth being explicit about with patients.",
    choices: [
      { text: "Trials exclude pregnant women, so evidence is observational and accumulates slowly", isCorrect: true },
      { text: "Regulators forbid collecting any pregnancy data", isCorrect: false },
      { text: "Drugs behave identically in pregnancy so no data is needed", isCorrect: false },
      { text: "The evidence is in fact stronger than for other groups", isCorrect: false },
    ],
  },
  {
    stem: "Which physiological changes of pregnancy alter drug handling?",
    topic: "Pregnancy: General Principles",
    explanation:
      "Plasma volume and total body water rise, albumin falls, and renal blood flow and glomerular filtration increase substantially. Together these can lower concentrations of renally cleared drugs, so some — antiepileptics being the clearest example — need dose increases as pregnancy advances.",
    choices: [
      { text: "Expanded volume, lower albumin and increased renal clearance", isCorrect: true },
      { text: "Reduced renal clearance and raised albumin", isCorrect: false },
      { text: "No meaningful physiological change occurs", isCorrect: false },
      { text: "Complete cessation of hepatic metabolism", isCorrect: false },
    ],
  },
  {
    stem: "Why should a woman with a chronic condition receive pre-conception advice rather than waiting for her first antenatal appointment?",
    topic: "Pregnancy: General Principles",
    explanation:
      "Organogenesis is well advanced, and often complete, before most women book — so a teratogenic exposure has already happened by the time the conversation occurs. The opportunity to switch agents, optimise control and start folic acid exists only beforehand.",
    choices: [
      { text: "Organogenesis is largely complete before most women book for antenatal care", isCorrect: true },
      { text: "Antenatal clinics cannot alter medication", isCorrect: false },
      { text: "Risk only begins in the second trimester", isCorrect: false },
      { text: "Pre-conception advice has no evidence behind it", isCorrect: false },
    ],
  },
  {
    stem: "Which drug properties favour crossing the placenta?",
    topic: "Pregnancy: General Principles",
    explanation:
      "Low molecular weight, lipid solubility, being unionised and low protein binding. Large, highly polar or heavily protein-bound molecules cross poorly, which is why heparins do not reach the fetus while many small lipophilic drugs do.",
    choices: [
      { text: "Low molecular weight, lipid solubility, unionised form and low protein binding", isCorrect: true },
      { text: "High molecular weight and strong ionisation", isCorrect: false },
      { text: "Extensive protein binding", isCorrect: false },
      { text: "Placental transfer is identical for all drugs", isCorrect: false },
    ],
  },

  /* ── Prescribing in Pregnancy ── */
  {
    stem: "Why is folic acid started before conception rather than at the first antenatal visit?",
    topic: "Prescribing in Pregnancy",
    explanation:
      "The neural tube closes within the first month, usually before pregnancy is recognised, so supplementation started at booking is too late to prevent a defect. Higher doses are used where risk is increased, including previous affected pregnancy, diabetes, obesity and certain antiepileptics.",
    choices: [
      { text: "The neural tube closes within the first month, often before pregnancy is known", isCorrect: true },
      { text: "Folic acid only works in the third trimester", isCorrect: false },
      { text: "It prevents nausea rather than any defect", isCorrect: false },
      { text: "Timing makes no difference to effect", isCorrect: false },
    ],
  },
  {
    stem: "A woman with epilepsy discovers she is pregnant while taking an antiepileptic. What is the correct immediate action?",
    topic: "Prescribing in Pregnancy",
    explanation:
      "Do not stop the drug abruptly; arrange urgent specialist review. Uncontrolled seizures endanger both mother and fetus, and by the time pregnancy is recognised any first-trimester exposure has already occurred, so stopping abruptly adds risk without removing what has happened.",
    choices: [
      { text: "Continue the drug and arrange urgent specialist review", isCorrect: true },
      { text: "Stop the antiepileptic immediately", isCorrect: false },
      { text: "Halve the dose without review", isCorrect: false },
      { text: "Wait until after delivery to discuss it", isCorrect: false },
    ],
  },
  {
    stem: "Which antibiotic classes are generally regarded as acceptable in pregnancy?",
    topic: "Prescribing in Pregnancy",
    explanation:
      "Penicillins and cephalosporins, which have long records of use without evidence of teratogenicity. Several other classes carry specific concerns — trimethoprim is a folate antagonist of particular concern early, and nitrofurantoin is avoided near term because of neonatal haemolysis risk.",
    choices: [
      { text: "Penicillins and cephalosporins", isCorrect: true },
      { text: "Fluoroquinolones and aminoglycosides", isCorrect: false },
      { text: "No antibiotic can be used in pregnancy", isCorrect: false },
      { text: "All classes are equally acceptable", isCorrect: false },
    ],
  },
  {
    stem: "Why is nausea and vomiting of pregnancy worth treating rather than simply enduring?",
    topic: "Prescribing in Pregnancy",
    explanation:
      "Severe symptoms cause dehydration, electrolyte disturbance, weight loss and thiamine deficiency, alongside a substantial effect on function and mental health. Effective antiemetics with reassuring safety records exist, so leaving a woman to cope is a decision with consequences rather than a neutral one.",
    choices: [
      { text: "Severe symptoms cause dehydration, electrolyte loss and thiamine deficiency", isCorrect: true },
      { text: "It has no physical consequences", isCorrect: false },
      { text: "No safe antiemetic exists", isCorrect: false },
      { text: "Treatment always harms the fetus", isCorrect: false },
    ],
  },
  {
    stem: "Why is low molecular weight heparin rather than warfarin used for anticoagulation in pregnancy?",
    topic: "Prescribing in Pregnancy",
    explanation:
      "Heparins are large, highly charged molecules that do not cross the placenta, whereas warfarin does and is teratogenic — causing a recognised embryopathy and fetal bleeding. The molecular property directly determines the clinical choice.",
    choices: [
      { text: "Heparin does not cross the placenta; warfarin does and is teratogenic", isCorrect: true },
      { text: "Warfarin is not absorbed during pregnancy", isCorrect: false },
      { text: "Heparin is simply cheaper", isCorrect: false },
      { text: "Both are equally safe and the choice is arbitrary", isCorrect: false },
    ],
  },
  {
    stem: "Which vaccines are actively recommended during pregnancy, and which are avoided?",
    topic: "Prescribing in Pregnancy",
    explanation:
      "Inactivated vaccines such as influenza and pertussis are recommended, protecting the mother and passing antibody to the infant for the vulnerable early weeks. Live vaccines are generally avoided on theoretical grounds, though inadvertent exposure has not been shown to cause harm.",
    choices: [
      { text: "Inactivated vaccines like influenza and pertussis are recommended; live vaccines avoided", isCorrect: true },
      { text: "All vaccines are contraindicated in pregnancy", isCorrect: false },
      { text: "Live vaccines are preferred for stronger immunity", isCorrect: false },
      { text: "Vaccination confers no benefit to the infant", isCorrect: false },
    ],
  },

  /* ── Breastfeeding ── */
  {
    stem: "What determines how much of a maternal drug actually reaches the breastfed infant?",
    topic: "Breastfeeding",
    explanation:
      "How much passes into milk — favoured by lipid solubility, low protein binding and low molecular weight — and then how much the infant absorbs orally. A drug with negligible oral bioavailability delivers almost nothing systemically even if it appears in milk.",
    choices: [
      { text: "Transfer into milk, then the infant's oral absorption of it", isCorrect: true },
      { text: "Only the maternal dose, nothing else", isCorrect: false },
      { text: "The infant's weight alone", isCorrect: false },
      { text: "All drugs transfer equally and completely", isCorrect: false },
    ],
  },
  {
    stem: "Why is advising a mother to stop breastfeeding usually the wrong first response to a needed medication?",
    topic: "Breastfeeding",
    explanation:
      "Most drugs are compatible with breastfeeding, and stopping forfeits substantial benefits for both mother and infant that are hard to regain. Checking a proper reference usually finds either a compatible drug or a compatible alternative, and unnecessary cessation is a recognised avoidable harm.",
    choices: [
      { text: "Most drugs are compatible, and stopping forfeits real benefits that are hard to regain", isCorrect: true },
      { text: "Breastfeeding provides no measurable benefit", isCorrect: false },
      { text: "Almost all drugs are contraindicated", isCorrect: false },
      { text: "Formula is superior in every respect", isCorrect: false },
    ],
  },
  {
    stem: "How can dose timing reduce infant exposure during breastfeeding?",
    topic: "Breastfeeding",
    explanation:
      "Taking the dose immediately after a feed, or before the infant's longest sleep, means the peak concentration has largely passed before the next feed. It is a simple adjustment that meaningfully reduces exposure without changing the treatment.",
    choices: [
      { text: "Take the dose just after a feed or before the longest sleep", isCorrect: true },
      { text: "Take the dose immediately before every feed", isCorrect: false },
      { text: "Timing has no influence on milk concentration", isCorrect: false },
      { text: "Double the dose and feed less often", isCorrect: false },
    ],
  },
  {
    stem: "Which breastfed infant is most vulnerable to a maternal drug?",
    topic: "Breastfeeding",
    explanation:
      "The preterm or newborn infant, whose hepatic enzymes and renal clearance are immature, so even small amounts accumulate. Risk falls as the infant matures, which is why a drug unsuitable in the first weeks may be acceptable at six months.",
    choices: [
      { text: "The preterm or newborn infant, because of immature metabolism and clearance", isCorrect: true },
      { text: "The older infant approaching weaning", isCorrect: false },
      { text: "Age makes no difference to vulnerability", isCorrect: false },
      { text: "Only infants over one year are at risk", isCorrect: false },
    ],
  },
  {
    stem: "Why is codeine avoided in breastfeeding mothers?",
    topic: "Breastfeeding",
    explanation:
      "It is converted to morphine, and mothers who are ultra-rapid metabolisers produce far more than expected — leading to reported cases of infant sedation and respiratory depression. Because metabolising status is not usually known, safer analgesia is chosen instead.",
    choices: [
      { text: "Ultra-rapid metabolisers convert it to excess morphine, sedating the infant", isCorrect: true },
      { text: "It suppresses milk production entirely", isCorrect: false },
      { text: "It is inactive in breastfeeding women", isCorrect: false },
      { text: "It causes an allergic rash in all infants", isCorrect: false },
    ],
  },
  {
    stem: "Which medications can interfere with establishing or maintaining lactation?",
    topic: "Breastfeeding",
    explanation:
      "Oestrogen-containing contraception, particularly in the early weeks, and dopamine agonists which suppress prolactin. Progestogen-only methods do not carry the same effect, which is why contraceptive choice postpartum is made with lactation in mind.",
    choices: [
      { text: "Oestrogen-containing contraception early on, and dopamine agonists", isCorrect: true },
      { text: "Progestogen-only contraception specifically", isCorrect: false },
      { text: "Paracetamol and ibuprofen", isCorrect: false },
      { text: "No medication affects lactation", isCorrect: false },
    ],
  },

  /* ── Neonates & Infants ── */
  {
    stem: "Why do neonates handle drugs differently from older children?",
    topic: "Neonates & Infants",
    explanation:
      "Hepatic enzyme systems and renal clearance are immature, total body water is proportionally higher and protein binding is lower. The net effect is longer half-lives and a higher free fraction, so both dose and interval usually need adjusting rather than dose alone.",
    choices: [
      { text: "Immature metabolism and clearance, higher body water and lower protein binding", isCorrect: true },
      { text: "Faster metabolism than adults in every pathway", isCorrect: false },
      { text: "Identical handling to adults, scaled by weight", isCorrect: false },
      { text: "Complete inability to absorb any oral drug", isCorrect: false },
    ],
  },
  {
    stem: "Why are drugs that displace bilirubin from albumin dangerous in the neonate?",
    topic: "Neonates & Infants",
    explanation:
      "Displaced free bilirubin can cross the immature blood-brain barrier and deposit in the basal ganglia, causing kernicterus and permanent neurological damage. Sulfonamides are the classic example, and it is why neonatal prescribing considers protein binding specifically.",
    choices: [
      { text: "Free bilirubin crosses into the brain and causes kernicterus", isCorrect: true },
      { text: "Bilirubin becomes inactive once displaced", isCorrect: false },
      { text: "It causes only a transient rash", isCorrect: false },
      { text: "Displacement has no clinical consequence", isCorrect: false },
    ],
  },
  {
    stem: "Why is scaling an adult dose down by body weight alone unsafe in small children?",
    topic: "Neonates & Infants",
    explanation:
      "Organ maturity, body composition and metabolic rate do not scale linearly with weight — a young child may clear a drug faster per kilogram than an adult, while a neonate clears it far more slowly. Paediatric doses come from paediatric references, not arithmetic on an adult dose.",
    choices: [
      { text: "Maturity and metabolism do not scale linearly with weight", isCorrect: true },
      { text: "Children always need proportionally larger doses", isCorrect: false },
      { text: "Weight has no relevance to paediatric dosing", isCorrect: false },
      { text: "Linear scaling from adult doses is the standard method", isCorrect: false },
    ],
  },
  {
    stem: "Why do excipients matter more in neonates than in adults?",
    topic: "Neonates & Infants",
    explanation:
      "Benzyl alcohol, propylene glycol and ethanol are present in some liquid preparations and are cleared poorly by an immature liver, accumulating to toxic levels. The active drug may be appropriate while the formulation is not, so preparation choice is part of the prescribing decision.",
    choices: [
      { text: "Preservatives and solvents accumulate because clearance is immature", isCorrect: true },
      { text: "Excipients are pharmacologically inert in everyone", isCorrect: false },
      { text: "Neonates clear excipients faster than adults", isCorrect: false },
      { text: "Formulation never affects safety", isCorrect: false },
    ],
  },
  {
    stem: "Why is topical drug absorption a particular concern in infants?",
    topic: "Neonates & Infants",
    explanation:
      "The skin barrier is thinner and the surface area to weight ratio is much higher, so a topical agent applied over a large area can produce systemic effects. Potent topical steroids and iodine-containing antiseptics are the usual examples.",
    choices: [
      { text: "A thinner barrier and high surface-area-to-weight ratio give systemic absorption", isCorrect: true },
      { text: "Infant skin absorbs nothing at all", isCorrect: false },
      { text: "Topical agents cannot cause systemic effects at any age", isCorrect: false },
      { text: "Absorption is lower than in adults", isCorrect: false },
    ],
  },
  {
    stem: "Why are tenfold dosing errors particularly associated with paediatric prescribing, and how are they prevented?",
    topic: "Neonates & Infants",
    explanation:
      "Doses are calculated from weight rather than read from a fixed list, so a misplaced decimal point produces a tenfold error that still looks plausible. Independent double-checking of the calculation, leading zeros before decimal points and never using trailing zeros are the standard defences.",
    choices: [
      { text: "Weight-based calculation makes a misplaced decimal plausible; independent checking prevents it", isCorrect: true },
      { text: "Children are prescribed fixed doses, so errors are rare", isCorrect: false },
      { text: "Such errors cannot occur with electronic prescribing", isCorrect: false },
      { text: "Tenfold errors are harmless in children", isCorrect: false },
    ],
  },

  /* ── Children & Adolescents ── */
  {
    stem: "Why is a weight-based paediatric dose capped at the adult dose?",
    topic: "Children & Adolescents",
    explanation:
      "A heavy older child or adolescent can calculate to more than an adult would receive, which offers no extra benefit and adds toxicity. The cap is a routine safety check that is easy to forget when the calculation is done quickly.",
    choices: [
      { text: "A heavy child can calculate above the adult dose, adding toxicity without benefit", isCorrect: true },
      { text: "Children always need more than adults per dose", isCorrect: false },
      { text: "The cap exists only for cost reasons", isCorrect: false },
      { text: "There is no upper limit in paediatric dosing", isCorrect: false },
    ],
  },
  {
    stem: "Why should aspirin be avoided in children with a febrile illness?",
    topic: "Children & Adolescents",
    explanation:
      "Because of the association with Reye's syndrome — acute encephalopathy with hepatic dysfunction, which carries significant mortality. Specific indications such as Kawasaki disease are the recognised exception, prescribed deliberately rather than as routine antipyresis.",
    choices: [
      { text: "The association with Reye's syndrome", isCorrect: true },
      { text: "It is ineffective as an antipyretic in children", isCorrect: false },
      { text: "It stains developing teeth", isCorrect: false },
      { text: "It cannot be swallowed by children", isCorrect: false },
    ],
  },
  {
    stem: "What does off-label prescribing mean, and why is it common in paediatrics?",
    topic: "Children & Adolescents",
    explanation:
      "Using a licensed drug outside its approved age, indication or route — common in children because so few trials are conducted in them. It is legitimate and often unavoidable, but it shifts more responsibility onto the prescriber and should be explained to the family.",
    choices: [
      { text: "Using a licensed drug outside its approved terms, common because paediatric trials are few", isCorrect: true },
      { text: "Using an unlicensed and untested substance", isCorrect: false },
      { text: "A practice that is prohibited in children", isCorrect: false },
      { text: "Prescribing without a diagnosis", isCorrect: false },
    ],
  },
  {
    stem: "Why does formulation matter so much in paediatric prescribing?",
    topic: "Children & Adolescents",
    explanation:
      "A correctly calculated dose achieves nothing if the child will not take it or cannot swallow it. Palatability, volume and whether a tablet can be dispersed determine real adherence, so the practical question of how it will be given belongs in the prescribing decision.",
    choices: [
      { text: "A correct dose is useless if the child cannot or will not take it", isCorrect: true },
      { text: "All formulations are equally acceptable to children", isCorrect: false },
      { text: "Taste has no bearing on adherence", isCorrect: false },
      { text: "Only the dose calculation matters", isCorrect: false },
    ],
  },
  {
    stem: "Why should an oral syringe be supplied rather than relying on a household spoon?",
    topic: "Children & Adolescents",
    explanation:
      "Kitchen spoons vary widely in volume, so measurement error can be substantial in either direction. An oral syringe delivers the intended dose and allows small volumes to be given accurately to an unwilling child.",
    choices: [
      { text: "Household spoons vary widely, so the delivered dose is unreliable", isCorrect: true },
      { text: "Syringes are simply cheaper to supply", isCorrect: false },
      { text: "Spoons are equally accurate", isCorrect: false },
      { text: "The measuring device has no effect on dose", isCorrect: false },
    ],
  },
  {
    stem: "What changes about prescribing when a patient becomes an adolescent?",
    topic: "Children & Adolescents",
    explanation:
      "Responsibility for taking the medicine shifts from parent to young person, adherence commonly falls, and confidentiality and capacity become live issues. Body weight and pharmacokinetics also change quickly, so doses set in childhood need reviewing rather than repeating.",
    choices: [
      { text: "Responsibility shifts to the young person, adherence falls, and doses need review as they grow", isCorrect: true },
      { text: "Nothing changes until they turn eighteen", isCorrect: false },
      { text: "Adherence reliably improves in adolescence", isCorrect: false },
      { text: "Confidentiality has no relevance before adulthood", isCorrect: false },
    ],
  },

  /* ── Older Adults ── */
  {
    stem: "What is anticholinergic burden, and why does it matter?",
    topic: "Older Adults",
    explanation:
      "The cumulative antimuscarinic effect of several drugs taken together, each individually modest — some antidepressants, antihistamines, bladder antimuscarinics and antipsychotics. The total is associated with confusion, falls, urinary retention and cognitive decline, and no single drug on the list looks like the culprit.",
    choices: [
      { text: "The cumulative antimuscarinic effect of several drugs, linked to confusion and falls", isCorrect: true },
      { text: "The effect of one strongly anticholinergic drug alone", isCorrect: false },
      { text: "A measure of how much cholinergic drug is needed", isCorrect: false },
      { text: "A concept with no clinical relevance", isCorrect: false },
    ],
  },
  {
    stem: "Why are older adults more sensitive to sedatives and opioids even at the same plasma concentration?",
    topic: "Older Adults",
    explanation:
      "Sensitivity at the receptor and in the central nervous system increases with age — a pharmacodynamic change, distinct from the pharmacokinetic changes in clearance. So a level that is entirely appropriate in a younger patient can cause confusion and respiratory depression in an older one.",
    choices: [
      { text: "Central nervous system sensitivity increases with age, independent of clearance", isCorrect: true },
      { text: "They absorb more of the drug from the gut", isCorrect: false },
      { text: "Plasma concentration is irrelevant at any age", isCorrect: false },
      { text: "Sensitivity decreases with age", isCorrect: false },
    ],
  },
  {
    stem: "Which drug classes most commonly cause orthostatic hypotension in older patients?",
    topic: "Older Adults",
    explanation:
      "Antihypertensives, particularly alpha blockers and diuretics, along with nitrates, antipsychotics and tricyclics. The consequence is falls and fracture, so lying and standing blood pressure is worth measuring rather than assuming a seated reading tells the story.",
    choices: [
      { text: "Antihypertensives, alpha blockers, diuretics, nitrates, antipsychotics and tricyclics", isCorrect: true },
      { text: "Inhaled corticosteroids and antihistamines", isCorrect: false },
      { text: "Topical preparations only", isCorrect: false },
      { text: "No class causes postural drop in older people", isCorrect: false },
    ],
  },
  {
    stem: "Which practical barriers to taking medication are easily missed in older patients?",
    topic: "Older Adults",
    explanation:
      "Difficulty opening blister packs or bottles with arthritic hands, poor vision making labels unreadable, swallowing difficulty, and regimens too complex to follow. These are fixable with a different formulation, larger print or a dosette box — but only if someone asks.",
    choices: [
      { text: "Packaging, eyesight, swallowing and regimen complexity", isCorrect: true },
      { text: "Nothing practical affects adherence", isCorrect: false },
      { text: "Only the cost of the medicine", isCorrect: false },
      { text: "Older patients are uniformly adherent", isCorrect: false },
    ],
  },
  {
    stem: "Why is under-treatment as much a risk as over-treatment in older patients?",
    topic: "Older Adults",
    explanation:
      "Caution about adverse effects leads to withholding treatment that would genuinely help — pain relief, heart failure therapy, osteoporosis treatment. Because absolute risk of the underlying condition rises with age, the absolute benefit of treating is often larger, not smaller.",
    choices: [
      { text: "Caution leads to withholding treatment whose absolute benefit is often greater with age", isCorrect: true },
      { text: "Older patients never benefit from treatment", isCorrect: false },
      { text: "Under-treatment carries no consequence", isCorrect: false },
      { text: "Absolute benefit always falls with age", isCorrect: false },
    ],
  },
  {
    stem: "Which drug groups account for most medication-related hospital admissions in older people?",
    topic: "Older Adults",
    explanation:
      "NSAIDs, anticoagulants and antiplatelets, diuretics, and hypoglycaemic agents including insulin — through bleeding, renal injury, electrolyte disturbance and hypoglycaemia. A small number of familiar drug groups causes most of the harm, which makes targeted review effective.",
    choices: [
      { text: "NSAIDs, anticoagulants and antiplatelets, diuretics and hypoglycaemic agents", isCorrect: true },
      { text: "Topical emollients and vitamins", isCorrect: false },
      { text: "Inhalers and eye drops", isCorrect: false },
      { text: "Admissions are spread evenly across all drug classes", isCorrect: false },
    ],
  },

  /* ── Frailty & Falls ── */
  {
    stem: "What does frailty mean for prescribing decisions?",
    topic: "Frailty & Falls",
    explanation:
      "Reduced physiological reserve, so a modest insult produces a disproportionate effect and recovery is slower. A drug change that a robust patient absorbs without difficulty can precipitate a fall, delirium or admission in a frail one — so changes are made one at a time and reviewed.",
    choices: [
      { text: "Reduced reserve, so small insults have disproportionate effects", isCorrect: true },
      { text: "Simply being over a certain age", isCorrect: false },
      { text: "That no medication should ever be prescribed", isCorrect: false },
      { text: "Increased tolerance of drug changes", isCorrect: false },
    ],
  },
  {
    stem: "After an older patient has a fall, which aspect of their medication deserves scrutiny?",
    topic: "Frailty & Falls",
    explanation:
      "Anything sedating, anticholinergic, or capable of lowering blood pressure — and the number of such drugs combined. A fall is one of the clearest prompts for medication review there is, yet it is often recorded as an event rather than treated as a signal.",
    choices: [
      { text: "Sedating, anticholinergic and blood-pressure-lowering drugs, and how many are combined", isCorrect: true },
      { text: "Only drugs started in the last 24 hours", isCorrect: false },
      { text: "Nothing — falls are unrelated to medication", isCorrect: false },
      { text: "Topical preparations alone", isCorrect: false },
    ],
  },
  {
    stem: "Why does deprescribing itself need care rather than simply stopping drugs?",
    topic: "Frailty & Falls",
    explanation:
      "Several classes cause rebound or withdrawal — beta blockers, some antidepressants, and long-term sedatives among them. Stopping one drug at a time, with a plan and a review, distinguishes deprescribing from abrupt cessation and its consequences.",
    choices: [
      { text: "Several classes cause rebound or withdrawal, so changes are staged and reviewed", isCorrect: true },
      { text: "Stopping any drug is always immediately safe", isCorrect: false },
      { text: "All drugs should be stopped simultaneously", isCorrect: false },
      { text: "Withdrawal effects do not occur in older people", isCorrect: false },
    ],
  },
  {
    stem: "Why is crushing a modified-release tablet dangerous?",
    topic: "Frailty & Falls",
    explanation:
      "It destroys the mechanism controlling release, delivering the whole day's dose at once — potentially a serious overdose with opioids, calcium channel blockers or antidiabetic agents. When swallowing fails, the answer is a different formulation, not a modified one crushed.",
    choices: [
      { text: "The whole dose is released at once, causing overdose", isCorrect: true },
      { text: "The drug becomes inactive but is otherwise harmless", isCorrect: false },
      { text: "It only affects the taste", isCorrect: false },
      { text: "Crushing is safe for all tablet types", isCorrect: false },
    ],
  },
  {
    stem: "What should be considered when medication is given by a carer or in a care home?",
    topic: "Frailty & Falls",
    explanation:
      "Whether the regimen is practical for whoever administers it, whether formulations can be given as supplied, and — where a patient resists — whether the legal and ethical framework for covert administration has been properly followed. Prescribing that ignores who will give the drug frequently fails at that point.",
    choices: [
      { text: "Practicality for the administrator, suitable formulation, and proper process if given covertly", isCorrect: true },
      { text: "Nothing beyond the prescription itself", isCorrect: false },
      { text: "Only the cost to the home", isCorrect: false },
      { text: "Covert administration needs no particular process", isCorrect: false },
    ],
  },
  {
    stem: "Why can a fracture-prevention drug still be worth starting in a frail faller?",
    topic: "Frailty & Falls",
    explanation:
      "Because their absolute fracture risk is high, so the absolute benefit of reducing it is correspondingly large — provided life expectancy exceeds the time the treatment takes to work. Frailty argues for weighing time-to-benefit carefully, not for withholding automatically.",
    choices: [
      { text: "High absolute risk means large absolute benefit, if life expectancy exceeds time-to-benefit", isCorrect: true },
      { text: "Frail patients never benefit from any preventive treatment", isCorrect: false },
      { text: "Fracture risk falls with frailty", isCorrect: false },
      { text: "Time to benefit is irrelevant to the decision", isCorrect: false },
    ],
  },

  /* ── Obesity & Weight-Based Dosing ── */
  {
    stem: "Why is total body weight not always the right basis for dosing in obesity?",
    topic: "Obesity & Weight-Based Dosing",
    explanation:
      "It depends on how the drug distributes. Lipophilic drugs distribute into adipose tissue and scale reasonably with total weight, whereas hydrophilic ones largely do not — so using total body weight for a hydrophilic drug risks substantial overdose.",
    choices: [
      { text: "It depends on whether the drug is lipophilic or hydrophilic", isCorrect: true },
      { text: "Total body weight is always correct", isCorrect: false },
      { text: "Weight is never relevant to dosing", isCorrect: false },
      { text: "All drugs distribute equally into fat", isCorrect: false },
    ],
  },
  {
    stem: "Why can fixed-dose medication under-treat a patient with obesity?",
    topic: "Obesity & Weight-Based Dosing",
    explanation:
      "A dose designed around average body size may produce sub-therapeutic concentrations in a much larger volume of distribution. It is a recognised issue for some antimicrobials and for emergency contraception, where under-dosing means treatment failure rather than reduced effect.",
    choices: [
      { text: "A larger volume of distribution can leave a standard dose sub-therapeutic", isCorrect: true },
      { text: "Fixed doses are always adequate regardless of size", isCorrect: false },
      { text: "Obesity increases drug potency", isCorrect: false },
      { text: "Under-dosing has no clinical consequence", isCorrect: false },
    ],
  },
  {
    stem: "Why is under-dosing antimicrobials in obesity particularly serious in sepsis?",
    topic: "Obesity & Weight-Based Dosing",
    explanation:
      "Sub-therapeutic concentrations both fail to control the infection and select for resistance, in a patient with no margin for a failed first attempt. Weight-adjusted dosing where the evidence supports it is a safety measure, not a refinement.",
    choices: [
      { text: "Sub-therapeutic levels fail to control infection and select resistance, with no margin for error", isCorrect: true },
      { text: "Antimicrobials are more potent in obesity", isCorrect: false },
      { text: "Dose has no bearing on outcome in sepsis", isCorrect: false },
      { text: "Standard doses are always sufficient", isCorrect: false },
    ],
  },
  {
    stem: "How does bariatric surgery alter drug absorption?",
    topic: "Obesity & Weight-Based Dosing",
    explanation:
      "Reduced gastric volume, altered pH and a shortened absorptive surface change how much and how quickly a drug is absorbed. Modified-release preparations may pass through without releasing properly, so switching to immediate-release or another route is often needed.",
    choices: [
      { text: "Reduced surface area, altered pH and transit — modified-release forms may fail", isCorrect: true },
      { text: "Absorption is unchanged after surgery", isCorrect: false },
      { text: "All drugs are absorbed better afterwards", isCorrect: false },
      { text: "Only injectable drugs are affected", isCorrect: false },
    ],
  },
  {
    stem: "Why is BMI a crude guide for dosing decisions?",
    topic: "Obesity & Weight-Based Dosing",
    explanation:
      "It does not distinguish fat from muscle or describe how that mass is distributed, and drug distribution depends on body composition rather than a ratio. Lean or adjusted body weight is more useful for many drugs, which is why references specify which weight to use.",
    choices: [
      { text: "It does not describe body composition, which is what determines distribution", isCorrect: true },
      { text: "It is the most precise measure available for dosing", isCorrect: false },
      { text: "Body composition is irrelevant to drug handling", isCorrect: false },
      { text: "BMI directly measures fat mass", isCorrect: false },
    ],
  },
  {
    stem: "Why does obesity complicate low molecular weight heparin dosing?",
    topic: "Obesity & Weight-Based Dosing",
    explanation:
      "Standard prophylactic doses may be inadequate at high body weight, while capping the dose risks under-anticoagulation and uncapped weight-based dosing risks bleeding. It is one of the situations where anti-Xa monitoring is considered rather than relying on the calculation alone.",
    choices: [
      { text: "Standard doses may under-treat while uncapped dosing risks bleeding, so monitoring may be needed", isCorrect: true },
      { text: "Heparin is not absorbed in obesity", isCorrect: false },
      { text: "The standard dose is reliably correct at any weight", isCorrect: false },
      { text: "Obesity reduces thrombotic risk", isCorrect: false },
    ],
  },

  /* ── Palliative & End-of-Life Care ── */
  {
    stem: "What is anticipatory prescribing in palliative care?",
    topic: "Palliative & End-of-Life Care",
    explanation:
      "Medicines prescribed and left in the home in advance for symptoms expected to arise — pain, breathlessness, agitation, nausea and secretions. It means a symptom at three in the morning can be treated immediately rather than after hours of waiting for a prescription.",
    choices: [
      { text: "Medicines supplied in advance so expected symptoms can be treated without delay", isCorrect: true },
      { text: "Prescribing for a diagnosis not yet made", isCorrect: false },
      { text: "Withholding treatment until symptoms are severe", isCorrect: false },
      { text: "Prescribing only after a specialist review", isCorrect: false },
    ],
  },
  {
    stem: "Why is the subcutaneous route used when a dying patient can no longer swallow?",
    topic: "Palliative & End-of-Life Care",
    explanation:
      "It gives reliable absorption without the discomfort and difficulty of intravenous access, and a syringe driver delivers continuous symptom control. It can be managed at home, which is often what allows a patient to remain there.",
    choices: [
      { text: "Reliable absorption without needing intravenous access, and manageable at home", isCorrect: true },
      { text: "It is the only route that works at any stage", isCorrect: false },
      { text: "It is faster acting than intravenous administration", isCorrect: false },
      { text: "Oral medication always remains preferable", isCorrect: false },
    ],
  },
  {
    stem: "Why are opioids used for breathlessness in advanced disease?",
    topic: "Palliative & End-of-Life Care",
    explanation:
      "They reduce the sensation of breathlessness through central effects on respiratory drive and perception, independent of any analgesic action. At the doses used for this purpose there is good evidence they relieve distress without hastening death.",
    choices: [
      { text: "They reduce the perception of breathlessness centrally, independent of analgesia", isCorrect: true },
      { text: "They dilate the bronchi directly", isCorrect: false },
      { text: "They increase oxygen saturation", isCorrect: false },
      { text: "They have no role in breathlessness", isCorrect: false },
    ],
  },
  {
    stem: "Which medicines are usually appropriate to stop as a patient approaches the end of life?",
    topic: "Palliative & End-of-Life Care",
    explanation:
      "Preventive treatments whose benefit lies years away — statins, bisphosphonates, many antihypertensives. Stopping them reduces burden and interaction risk without losing anything the patient will live to gain, and frees attention for symptom control.",
    choices: [
      { text: "Long-term preventive drugs whose benefit lies years ahead", isCorrect: true },
      { text: "Analgesics and antiemetics", isCorrect: false },
      { text: "Everything, including symptom control", isCorrect: false },
      { text: "Nothing should ever be stopped", isCorrect: false },
    ],
  },
  {
    stem: "Why are antimuscarinic drugs used for respiratory secretions at the end of life?",
    topic: "Palliative & End-of-Life Care",
    explanation:
      "They reduce further secretion production, though they do not clear what has already accumulated — which is why they work best given early. The noise usually distresses the family more than the patient, so explanation alongside treatment matters.",
    choices: [
      { text: "They reduce further secretions but do not clear existing ones, so early use helps most", isCorrect: true },
      { text: "They dissolve secretions already present", isCorrect: false },
      { text: "They sedate the patient, which is the intended effect", isCorrect: false },
      { text: "They have no role in this setting", isCorrect: false },
    ],
  },
  {
    stem: "How should concern about opioids hastening death in a dying patient be addressed?",
    topic: "Palliative & End-of-Life Care",
    explanation:
      "Doses titrated proportionately to symptoms relieve distress without shortening life, which the evidence supports. The fear is understandable and common among families and staff, and under-treating pain out of that fear causes real, avoidable suffering.",
    choices: [
      { text: "Proportionate titration relieves symptoms without shortening life; under-treating causes real suffering", isCorrect: true },
      { text: "The concern is correct and opioids should be withheld", isCorrect: false },
      { text: "Any opioid dose shortens life significantly", isCorrect: false },
      { text: "The question should not be discussed with families", isCorrect: false },
    ],
  },

  /* ── Multimorbidity & Guideline Conflict ── */
  {
    stem: "Why do clinical guidelines often conflict in a patient with several conditions?",
    topic: "Multimorbidity & Guideline Conflict",
    explanation:
      "Each is written for a single disease in patients who typically have only that disease, so following four guidelines produces a regimen none of them anticipated. Applying them additively is how a patient ends up on fifteen medicines that individually all look justified.",
    choices: [
      { text: "Each addresses one disease in isolation, so applying several additively produces an unintended regimen", isCorrect: true },
      { text: "Guidelines are written to contradict each other deliberately", isCorrect: false },
      { text: "Guidelines always account for multimorbidity", isCorrect: false },
      { text: "Conflict never arises in practice", isCorrect: false },
    ],
  },
  {
    stem: "What is a prescribing cascade?",
    topic: "Multimorbidity & Guideline Conflict",
    explanation:
      "A drug's side effect is mistaken for a new condition and treated with another drug. The classic example is ankle oedema from a calcium channel blocker treated with a diuretic — recognising it allows one drug to be stopped rather than two continued.",
    choices: [
      { text: "A side effect mistaken for a new problem and treated with another drug", isCorrect: true },
      { text: "Deliberately increasing doses in steps", isCorrect: false },
      { text: "Prescribing several drugs at once for one condition", isCorrect: false },
      { text: "Stopping drugs one after another", isCorrect: false },
    ],
  },
  {
    stem: "Why does time-to-benefit matter when deciding whether to continue a preventive drug?",
    topic: "Multimorbidity & Guideline Conflict",
    explanation:
      "Some treatments take years to produce measurable benefit, so a patient whose life expectancy is shorter than that receives all the burden and none of the gain. Comparing time-to-benefit against realistic prognosis turns a vague judgement into a specific one.",
    choices: [
      { text: "If life expectancy is shorter than time-to-benefit, the patient gets the burden without the gain", isCorrect: true },
      { text: "All preventive drugs work immediately", isCorrect: false },
      { text: "Prognosis is irrelevant to prescribing decisions", isCorrect: false },
      { text: "Preventive drugs carry no burden", isCorrect: false },
    ],
  },
  {
    stem: "What is treatment burden, and why is it a legitimate clinical consideration?",
    topic: "Multimorbidity & Guideline Conflict",
    explanation:
      "The total work a regimen demands — tablets, timings, monitoring, appointments and cost. Beyond a certain point it damages quality of life and adherence collapses, so a simpler regimen taken properly can outperform an optimal one that isn't.",
    choices: [
      { text: "The total work a regimen demands; beyond a point adherence collapses and a simpler plan works better", isCorrect: true },
      { text: "The financial cost to the health service alone", isCorrect: false },
      { text: "A concept with no bearing on outcomes", isCorrect: false },
      { text: "The number of side effects only", isCorrect: false },
    ],
  },
  {
    stem: "Why does evidence from major trials often apply poorly to older patients with multimorbidity?",
    topic: "Multimorbidity & Guideline Conflict",
    explanation:
      "Trials commonly exclude those with several conditions, significant renal impairment or advanced age, so the studied population differs from the patient in front of you. The evidence remains the best available, but applying it requires judgement rather than direct transfer.",
    choices: [
      { text: "Trials exclude the multimorbid and very old, so the studied population differs from the patient", isCorrect: true },
      { text: "Trial evidence applies identically to everyone", isCorrect: false },
      { text: "Older patients are over-represented in trials", isCorrect: false },
      { text: "Trial findings should be disregarded entirely", isCorrect: false },
    ],
  },
  {
    stem: "How should priorities be set when a patient's conditions demand competing treatments?",
    topic: "Multimorbidity & Guideline Conflict",
    explanation:
      "By establishing what matters most to the patient — independence, staying at home, freedom from symptoms — and treating that as the organising goal. Two people with identical conditions can reasonably reach different regimens, and the deciding factor belongs to them.",
    choices: [
      { text: "By establishing what the patient values most and using that as the organising goal", isCorrect: true },
      { text: "By always following the guideline for the most serious diagnosis", isCorrect: false },
      { text: "By treating every condition maximally regardless", isCorrect: false },
      { text: "Patient priorities should not influence prescribing", isCorrect: false },
    ],
  },
];

async function main() {
  console.log(`Seeding Pharmacology — Set 4 (Tier 4: Special Populations)${REPLACE_MODE ? "  [REPLACE MODE]" : ""}…\n`);

  const categoryId = await findCategory("fs-pharmacology");
  if (!categoryId) return;

  await seedSet({
    categoryId,
    slug: "pharmacology-set-4-special-populations",
    title: "Pharmacology — Set 4: Special Populations",
    description:
      "Sixty questions on prescribing where the standard answer stops working: pregnancy and breastfeeding, neonates, children and adolescents, older adults, frailty and falls, obesity and weight-based dosing, palliative care, and the patient whose guidelines contradict each other. Assumes Sets 1–3. Untimed.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Intermediate",
    questions: SET4,
  });

  await done();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
