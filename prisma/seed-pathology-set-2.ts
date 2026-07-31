/**
 * PATHOLOGY — SET 2 of 7  ·  TIER 2: CORE PROCESSES
 *
 * SEVENTY questions. Ten topics, seven each.
 *
 * Set 1 covered how cells are injured, die and repair. Set 2 covers the disease
 * processes built on top of that: haemodynamics, thrombosis, infarction, shock,
 * vascular pathology, immunopathology, genetics, carcinogenesis, infection and
 * the environmental causes of disease.
 *
 * AS WITH SET 1, THE EXISTING 75 QUESTIONS WERE READ FIRST. The older General
 * Pathology Set 2 covers Virchow's triad, embolism, infarction, oedema,
 * atherosclerosis and the hypersensitivity reactions at overview level, and the
 * two Neoplasia sets cover tumour biology and oncogenic agents. This set goes
 * beneath those: not what the triad is, but why arterial and venous thrombi
 * differ in composition and what that means for treatment.
 *
 * Non-destructive (uses _seedkit) — a re-run refreshes only what it owns and
 * keeps anything you added through Admin.
 *
 * ⚠ Do not run the old prisma/seed-pathology.ts — it still deletes before it
 * writes.
 *
 * Run:  npx tsx prisma/seed-pathology-set-2.ts
 */

import { type Q, findCategory, seedSet, done, REPLACE_MODE } from "./_seedkit";

const SET2: Q[] = [
  /* ── Oedema & Effusions ── */
  {
    stem: "What distinguishes a transudate from an exudate, and why does it matter?",
    topic: "Oedema & Effusions",
    explanation:
      "A transudate is protein-poor with low LDH, produced by altered pressures in intact vessels — heart failure, hypoalbuminaemia. An exudate is protein-rich with high LDH, produced by increased vascular permeability from inflammation, infection or malignancy. The distinction separates a plumbing problem from a disease of the surface itself.",
    choices: [
      { text: "Protein and LDH content — a transudate reflects altered pressures, an exudate increased permeability", isCorrect: true },
      { text: "The volume of fluid present", isCorrect: false },
      { text: "The colour of the fluid alone", isCorrect: false },
      { text: "There is no useful distinction", isCorrect: false },
    ],
  },
  {
    stem: "Why does ascites develop in cirrhosis?",
    topic: "Oedema & Effusions",
    explanation:
      "Portal hypertension raises hydrostatic pressure in the splanchnic bed while reduced albumin synthesis lowers oncotic pressure, and secondary hyperaldosteronism drives sodium and water retention. Three mechanisms compound, which is why treatment addresses salt, aldosterone and portal pressure rather than any one alone.",
    choices: [
      { text: "Portal hypertension, low albumin and secondary hyperaldosteronism acting together", isCorrect: true },
      { text: "Increased albumin production by the diseased liver", isCorrect: false },
      { text: "Reduced portal pressure", isCorrect: false },
      { text: "A single mechanism of sodium loss", isCorrect: false },
    ],
  },
  {
    stem: "How does lymphoedema differ in mechanism from other oedema?",
    topic: "Oedema & Effusions",
    explanation:
      "Lymphatic obstruction prevents clearance of interstitial protein, so protein accumulates and draws water in. Because the fluid is protein-rich it becomes non-pitting and fibrotic over time, unlike the pitting oedema of raised venous pressure — and it does not respond to diuretics.",
    choices: [
      { text: "Obstructed lymphatic drainage leaves protein in the interstitium, giving non-pitting fibrotic swelling", isCorrect: true },
      { text: "It is caused by low albumin", isCorrect: false },
      { text: "It responds well to diuretics", isCorrect: false },
      { text: "It is identical to cardiac oedema", isCorrect: false },
    ],
  },
  {
    stem: "What distinguishes cardiogenic from non-cardiogenic pulmonary oedema pathologically?",
    topic: "Oedema & Effusions",
    explanation:
      "Cardiogenic oedema results from raised pulmonary capillary pressure with an intact alveolar barrier, so the fluid is protein-poor. Non-cardiogenic oedema, as in ARDS, results from damaged alveolar-capillary membrane, so protein-rich fluid and inflammatory cells enter the alveolus — which is why it does not resolve with diuresis.",
    choices: [
      { text: "Raised pressure with an intact barrier versus a damaged barrier leaking protein-rich fluid", isCorrect: true },
      { text: "Both result from raised capillary pressure", isCorrect: false },
      { text: "Non-cardiogenic oedema resolves with diuretics", isCorrect: false },
      { text: "They are pathologically identical", isCorrect: false },
    ],
  },
  {
    stem: "Why does oedema from heart failure typically affect the ankles while oedema from hypoalbuminaemia often affects the face?",
    topic: "Oedema & Effusions",
    explanation:
      "Raised venous pressure is gravity-dependent, so it accumulates at the lowest point. Low oncotic pressure acts uniformly throughout the body, so it becomes apparent where tissue is loose and unsupported — periorbital tissue in particular, noticed on waking.",
    choices: [
      { text: "Raised venous pressure is gravity-dependent; low oncotic pressure acts uniformly and shows in loose tissue", isCorrect: true },
      { text: "Albumin is concentrated in facial tissue", isCorrect: false },
      { text: "The distribution is random", isCorrect: false },
      { text: "Both always affect the ankles equally", isCorrect: false },
    ],
  },
  {
    stem: "What does a pleural effusion with very high protein, low glucose and many neutrophils suggest?",
    topic: "Oedema & Effusions",
    explanation:
      "An empyema or complicated parapneumonic effusion — organisms consume glucose while neutrophils accumulate. It matters because such an effusion requires drainage rather than antibiotics alone, so the fluid analysis directly determines whether a chest drain is needed.",
    choices: [
      { text: "Empyema or complicated parapneumonic effusion, requiring drainage rather than antibiotics alone", isCorrect: true },
      { text: "A simple transudate from heart failure", isCorrect: false },
      { text: "A malignant effusion that needs no intervention", isCorrect: false },
      { text: "Normal pleural fluid", isCorrect: false },
    ],
  },
  {
    stem: "Why does severe protein-energy malnutrition cause oedema despite a low total body water content?",
    topic: "Oedema & Effusions",
    explanation:
      "Plasma oncotic pressure falls with hypoalbuminaemia, so what fluid there is moves into the interstitium — the child is intravascularly depleted while visibly swollen. It is why rehydrating a child with kwashiorkor requires care rather than the volumes appropriate to simple dehydration.",
    choices: [
      { text: "Low oncotic pressure shifts fluid into the interstitium, so the child is dry intravascularly yet swollen", isCorrect: true },
      { text: "Total body water is increased", isCorrect: false },
      { text: "The kidneys retain excess sodium as the primary cause", isCorrect: false },
      { text: "Oedema excludes dehydration", isCorrect: false },
    ],
  },

  /* ── Thrombosis & Embolism in Depth ── */
  {
    stem: "How does the composition of an arterial thrombus differ from a venous one, and what follows for treatment?",
    topic: "Thrombosis & Embolism in Depth",
    explanation:
      "Arterial thrombi form under high shear on damaged endothelium and are platelet-rich — the white thrombus. Venous thrombi form in stasis and are fibrin and red cell rich. That is why antiplatelet agents dominate arterial disease and anticoagulants dominate venous disease.",
    choices: [
      { text: "Arterial thrombi are platelet-rich, venous are fibrin and red cell rich — hence antiplatelets versus anticoagulants", isCorrect: true },
      { text: "Both are identical in composition", isCorrect: false },
      { text: "Venous thrombi are platelet-rich", isCorrect: false },
      { text: "Composition has no bearing on treatment", isCorrect: false },
    ],
  },
  {
    stem: "What are lines of Zahn, and what do they indicate?",
    topic: "Thrombosis & Embolism in Depth",
    explanation:
      "Alternating pale platelet-fibrin and dark red-cell layers within a thrombus, formed by flowing blood. Their presence indicates the thrombus formed before death in flowing blood, distinguishing a true thrombus from a post-mortem clot — a distinction that matters at autopsy.",
    choices: [
      { text: "Alternating platelet and red cell layers showing the thrombus formed in flowing blood before death", isCorrect: true },
      { text: "Bands of calcification within an old thrombus", isCorrect: false },
      { text: "A feature of post-mortem clot", isCorrect: false },
      { text: "Layers of bacteria in an infected thrombus", isCorrect: false },
    ],
  },
  {
    stem: "What are the possible fates of a thrombus?",
    topic: "Thrombosis & Embolism in Depth",
    explanation:
      "Propagation, embolisation, dissolution by fibrinolysis, or organisation and recanalisation with new channels forming through it. Which occurs determines whether the patient has a resolved event, a chronic obstruction or a distant embolus — from the same starting lesion.",
    choices: [
      { text: "Propagation, embolisation, dissolution, or organisation with recanalisation", isCorrect: true },
      { text: "It can only either dissolve or persist unchanged", isCorrect: false },
      { text: "Thrombi always embolise", isCorrect: false },
      { text: "Thrombi never change once formed", isCorrect: false },
    ],
  },
  {
    stem: "How does a paradoxical embolus reach the arterial circulation?",
    topic: "Thrombosis & Embolism in Depth",
    explanation:
      "Through a right-to-left shunt, typically a patent foramen ovale, so a venous thrombus bypasses the pulmonary filter and enters the systemic circulation. It is the mechanism by which a deep vein thrombosis can cause a stroke, and why a young stroke patient may need an echocardiogram.",
    choices: [
      { text: "Via a right-to-left shunt such as a patent foramen ovale, bypassing the pulmonary filter", isCorrect: true },
      { text: "By dissolving and reforming in an artery", isCorrect: false },
      { text: "Through the lymphatic system", isCorrect: false },
      { text: "Paradoxical embolism is not possible", isCorrect: false },
    ],
  },
  {
    stem: "When does fat embolism syndrome occur, and how does it present?",
    topic: "Thrombosis & Embolism in Depth",
    explanation:
      "Typically one to three days after long bone or pelvic fracture, with the triad of respiratory distress, neurological change and a petechial rash. The delay is characteristic and often causes the diagnosis to be missed, because attention has moved on from the fracture by then.",
    choices: [
      { text: "One to three days after long bone fracture — respiratory distress, confusion and petechial rash", isCorrect: true },
      { text: "Immediately at the moment of injury", isCorrect: false },
      { text: "Only after orthopaedic surgery, never after trauma alone", isCorrect: false },
      { text: "Weeks later, with isolated leg swelling", isCorrect: false },
    ],
  },
  {
    stem: "Why is amniotic fluid embolism so dangerous?",
    topic: "Thrombosis & Embolism in Depth",
    explanation:
      "It provokes an anaphylactoid response with sudden cardiovascular collapse, and amniotic fluid is highly thrombogenic — so disseminated intravascular coagulation frequently follows. The combination of collapse and consumptive coagulopathy in a labouring woman is what makes it lethal.",
    choices: [
      { text: "Anaphylactoid collapse followed by disseminated intravascular coagulation", isCorrect: true },
      { text: "Simple mechanical obstruction of the pulmonary artery", isCorrect: false },
      { text: "It causes only mild transient breathlessness", isCorrect: false },
      { text: "It occurs weeks after delivery", isCorrect: false },
    ],
  },
  {
    stem: "Under what circumstances does air embolism become clinically significant?",
    topic: "Thrombosis & Embolism in Depth",
    explanation:
      "When a sufficient volume enters rapidly — through a central line, during neurosurgery in the sitting position, or from barotrauma in diving. Air lodging in the right ventricle can form an airlock preventing output, which is why the patient is positioned left lateral head-down.",
    choices: [
      { text: "When enough enters rapidly to form an airlock in the right ventricle", isCorrect: true },
      { text: "Any bubble of any size is immediately fatal", isCorrect: false },
      { text: "Air embolism has no clinical consequence", isCorrect: false },
      { text: "Only arterial entry can cause harm", isCorrect: false },
    ],
  },

  /* ── Infarction & Ischaemia ── */
  {
    stem: "What determines whether an infarct is red or white?",
    topic: "Infarction & Ischaemia",
    explanation:
      "Tissue architecture and blood supply. White infarcts occur in solid organs with a single end-arterial supply — heart, kidney, spleen. Red infarcts occur in loose tissue or where there is dual supply or venous obstruction — lung, bowel, testis — allowing blood to seep into the dead area.",
    choices: [
      { text: "Tissue density and whether there is dual or end-arterial supply", isCorrect: true },
      { text: "The age of the patient", isCorrect: false },
      { text: "How long ago the infarct occurred, in all cases", isCorrect: false },
      { text: "Whether infection is present", isCorrect: false },
    ],
  },
  {
    stem: "What is a watershed infarct, and where do they occur?",
    topic: "Infarction & Ischaemia",
    explanation:
      "Infarction at the border between two arterial territories, where perfusion pressure is lowest and falls first in global hypotension. Cerebral watershed zones and the splenic flexure of the colon are the classic sites — which is why a period of hypotension can cause damage without any occluded vessel.",
    choices: [
      { text: "Infarction at the border between arterial territories during global hypoperfusion", isCorrect: true },
      { text: "Infarction caused by a single large embolus", isCorrect: false },
      { text: "Infarction only in the presence of atherosclerosis", isCorrect: false },
      { text: "A finding limited to the kidney", isCorrect: false },
    ],
  },
  {
    stem: "Why do different tissues tolerate ischaemia for very different lengths of time?",
    topic: "Infarction & Ischaemia",
    explanation:
      "Metabolic demand and dependence on oxidative metabolism differ. Neurons are irreversibly damaged within minutes, myocardium within tens of minutes, while fibroblasts and skeletal muscle tolerate hours. This ordering is why time targets for reperfusion differ so much between stroke and limb ischaemia.",
    choices: [
      { text: "Differing metabolic demand — neurons fail within minutes, fibroblasts tolerate hours", isCorrect: true },
      { text: "All tissues die at the same rate", isCorrect: false },
      { text: "Tolerance depends only on the patient's age", isCorrect: false },
      { text: "Skeletal muscle is the most vulnerable tissue", isCorrect: false },
    ],
  },
  {
    stem: "How does the microscopic appearance of a myocardial infarct change over the first two weeks?",
    topic: "Infarction & Ischaemia",
    explanation:
      "Coagulative necrosis with neutrophil infiltration in the first days, macrophages clearing debris in the first week, then granulation tissue and progressive fibrosis into the second week and beyond. The timeline lets an infarct be dated histologically — and explains why rupture risk peaks when the wall is softest at three to seven days.",
    choices: [
      { text: "Necrosis with neutrophils, then macrophage clearance, then granulation tissue and fibrosis", isCorrect: true },
      { text: "Immediate fibrosis within hours", isCorrect: false },
      { text: "No microscopic change occurs for a month", isCorrect: false },
      { text: "Lymphocytes predominate from the first hour", isCorrect: false },
    ],
  },
  {
    stem: "How does chronic ischaemia differ from infarction in its tissue effect?",
    topic: "Infarction & Ischaemia",
    explanation:
      "Chronic ischaemia produces atrophy and fibrosis as tissue slowly adapts to reduced supply, without abrupt necrosis. Infarction is sudden death of tissue. This is why chronic mesenteric ischaemia causes pain and weight loss over months while acute occlusion is a surgical emergency within hours.",
    choices: [
      { text: "Chronic ischaemia causes gradual atrophy and fibrosis; infarction causes abrupt necrosis", isCorrect: true },
      { text: "They produce identical tissue changes", isCorrect: false },
      { text: "Chronic ischaemia causes more rapid tissue death", isCorrect: false },
      { text: "Chronic ischaemia has no tissue effect", isCorrect: false },
    ],
  },
  {
    stem: "What is a septic infarct?",
    topic: "Infarction & Ischaemia",
    explanation:
      "Infarction caused by an embolus containing organisms, typically from infective endocarditis, so the dead tissue becomes an abscess. It explains why endocarditis produces both embolic and infective complications at distant sites, and why splenic or cerebral abscess can be its first presentation.",
    choices: [
      { text: "Infarction from an infected embolus, so the dead tissue becomes an abscess", isCorrect: true },
      { text: "Infarction that later becomes contaminated from the skin", isCorrect: false },
      { text: "A sterile infarct in a septic patient", isCorrect: false },
      { text: "A term for any large infarct", isCorrect: false },
    ],
  },
  {
    stem: "Why can reperfusion of infarcted myocardium provoke arrhythmia?",
    topic: "Infarction & Ischaemia",
    explanation:
      "Restoring flow washes accumulated potassium and metabolites into the circulation, and reoxygenation generates reactive species and calcium overload in damaged myocytes — creating electrical instability. It is why monitoring continues after successful reperfusion rather than stopping at the point of restored flow.",
    choices: [
      { text: "Washout of accumulated metabolites with oxidative stress and calcium overload causing electrical instability", isCorrect: true },
      { text: "Arrhythmia proves reperfusion has failed", isCorrect: false },
      { text: "Reperfusion never causes arrhythmia", isCorrect: false },
      { text: "It results from the contrast medium alone", isCorrect: false },
    ],
  },

  /* ── Shock & Organ Failure ── */
  {
    stem: "How do the main categories of shock differ in mechanism?",
    topic: "Shock & Organ Failure",
    explanation:
      "Hypovolaemic from lost volume, cardiogenic from pump failure, obstructive from mechanical impedance to filling or output, and distributive from vasodilation with maldistribution. They differ in preload, output and peripheral resistance, so the examination findings point to the category before any test.",
    choices: [
      { text: "Lost volume, pump failure, mechanical obstruction, or vasodilation with maldistribution", isCorrect: true },
      { text: "All shock results from blood loss", isCorrect: false },
      { text: "They differ only in severity", isCorrect: false },
      { text: "The category has no bearing on management", isCorrect: false },
    ],
  },
  {
    stem: "Why are the peripheries warm in early septic shock but cold in cardiogenic shock?",
    topic: "Shock & Organ Failure",
    explanation:
      "Septic shock is distributive, with inflammatory vasodilation causing a high-output, low-resistance state that keeps the skin perfused. Cardiogenic shock produces compensatory vasoconstriction to preserve central pressure, shutting down the periphery. The skin therefore reports the mechanism.",
    choices: [
      { text: "Sepsis causes vasodilation with high output; cardiogenic shock causes compensatory vasoconstriction", isCorrect: true },
      { text: "Sepsis causes intense vasoconstriction", isCorrect: false },
      { text: "Peripheral temperature is unrelated to the mechanism", isCorrect: false },
      { text: "Both produce warm peripheries", isCorrect: false },
    ],
  },
  {
    stem: "What defines the transition from compensated to decompensated shock?",
    topic: "Shock & Organ Failure",
    explanation:
      "Compensatory mechanisms — tachycardia, vasoconstriction, fluid shift — maintain perfusion of vital organs until they are exhausted, at which point blood pressure falls and organ injury accelerates. The fall in blood pressure is therefore a late sign marking failure of compensation, not the onset of shock.",
    choices: [
      { text: "Compensatory mechanisms are exhausted, so hypotension appears late rather than early", isCorrect: true },
      { text: "Hypotension is the first sign of shock", isCorrect: false },
      { text: "Compensation continues indefinitely", isCorrect: false },
      { text: "The transition has no clinical markers", isCorrect: false },
    ],
  },
  {
    stem: "What is the pathological basis of disseminated intravascular coagulation?",
    topic: "Shock & Organ Failure",
    explanation:
      "Widespread activation of coagulation consumes platelets and clotting factors while microthrombi obstruct small vessels — so the patient bleeds and clots simultaneously. That paradox is why the picture shows a low platelet count, prolonged clotting times, low fibrinogen and raised D-dimer together.",
    choices: [
      { text: "Widespread coagulation activation consuming factors and platelets while microthrombi form", isCorrect: true },
      { text: "Isolated failure of platelet production", isCorrect: false },
      { text: "Pure fibrinolysis with no clotting", isCorrect: false },
      { text: "A deficiency of a single clotting factor", isCorrect: false },
    ],
  },
  {
    stem: "What characterises the pathology of acute respiratory distress syndrome?",
    topic: "Shock & Organ Failure",
    explanation:
      "Diffuse alveolar damage with hyaline membrane formation, protein-rich oedema and loss of surfactant, followed by a proliferative and sometimes fibrotic phase. Because the injury is to the alveolar-capillary membrane itself, oxygenation fails in a way that fluid removal does not correct.",
    choices: [
      { text: "Diffuse alveolar damage with hyaline membranes and protein-rich oedema", isCorrect: true },
      { text: "Raised pulmonary capillary pressure with an intact membrane", isCorrect: false },
      { text: "Bronchial obstruction by mucus", isCorrect: false },
      { text: "Pleural fluid accumulation alone", isCorrect: false },
    ],
  },
  {
    stem: "Which renal lesion typically follows a prolonged period of shock?",
    topic: "Shock & Organ Failure",
    explanation:
      "Acute tubular necrosis, since proximal tubular cells have a high metabolic demand and sit in a relatively hypoxic medulla. It is potentially reversible if the tubular basement membrane is intact, which is why renal function often recovers over weeks if the patient is supported.",
    choices: [
      { text: "Acute tubular necrosis, often reversible if the basement membrane is intact", isCorrect: true },
      { text: "Irreversible glomerulosclerosis within hours", isCorrect: false },
      { text: "Acute interstitial nephritis", isCorrect: false },
      { text: "The kidney is not affected by shock", isCorrect: false },
    ],
  },
  {
    stem: "Why does multi-organ dysfunction develop after an insult has been treated?",
    topic: "Shock & Organ Failure",
    explanation:
      "A sustained systemic inflammatory response with endothelial injury, microvascular thrombosis and impaired oxygen utilisation continues after the original trigger is controlled. The patient is then failing from the response rather than from the cause, which is why source control alone does not guarantee recovery.",
    choices: [
      { text: "A continuing inflammatory response with endothelial injury and impaired oxygen use outlives the trigger", isCorrect: true },
      { text: "The original insult must still be present", isCorrect: false },
      { text: "It reflects treatment failure in every case", isCorrect: false },
      { text: "Organ failure resolves as soon as the cause is treated", isCorrect: false },
    ],
  },

  /* ── Vascular Pathology ── */
  {
    stem: "What does the response-to-injury hypothesis propose about atherosclerosis?",
    topic: "Vascular Pathology",
    explanation:
      "Endothelial injury from shear stress, smoking, hypertension or hyperlipidaemia permits lipoprotein entry and monocyte recruitment; macrophages become foam cells, smooth muscle migrates and a fibrofatty plaque forms. It frames atherosclerosis as chronic inflammation rather than passive lipid deposition.",
    choices: [
      { text: "Endothelial injury initiates a chronic inflammatory process producing a fibrofatty plaque", isCorrect: true },
      { text: "Lipid deposits passively without any cellular response", isCorrect: false },
      { text: "Plaques are congenital in origin", isCorrect: false },
      { text: "Inflammation plays no part", isCorrect: false },
    ],
  },
  {
    stem: "What makes an atherosclerotic plaque vulnerable rather than stable?",
    topic: "Vascular Pathology",
    explanation:
      "A large lipid core, a thin fibrous cap and dense macrophage infiltration weakening it. Vulnerable plaques may cause little stenosis yet rupture and occlude suddenly — which is why the degree of narrowing on imaging predicts angina better than it predicts infarction.",
    choices: [
      { text: "A large lipid core with a thin, inflamed fibrous cap — and it may cause little stenosis", isCorrect: true },
      { text: "The degree of luminal narrowing alone", isCorrect: false },
      { text: "Heavy calcification, which destabilises it", isCorrect: false },
      { text: "Plaque composition is irrelevant to risk", isCorrect: false },
    ],
  },
  {
    stem: "How does the pathogenesis of an abdominal aortic aneurysm differ from an aortic dissection?",
    topic: "Vascular Pathology",
    explanation:
      "An aneurysm is progressive weakening and dilatation of the whole wall, driven by atherosclerosis and proteolytic degradation of elastin. A dissection is an intimal tear allowing blood into the media, splitting the wall — associated with hypertension and connective tissue disorders. Different mechanisms, different time course, different management.",
    choices: [
      { text: "Aneurysm is progressive wall weakening; dissection is an intimal tear splitting the media", isCorrect: true },
      { text: "They are the same process at different stages", isCorrect: false },
      { text: "Dissection is a slow dilatation over years", isCorrect: false },
      { text: "Both are caused solely by infection", isCorrect: false },
    ],
  },
  {
    stem: "How are the vasculitides usefully classified?",
    topic: "Vascular Pathology",
    explanation:
      "By the size of vessel predominantly affected — large vessel such as giant cell and Takayasu, medium vessel such as polyarteritis nodosa and Kawasaki, and small vessel such as the ANCA-associated and immune complex vasculitides. Vessel size predicts the clinical pattern, which is why the classification is practical rather than academic.",
    choices: [
      { text: "By predominant vessel size, which predicts the clinical pattern", isCorrect: true },
      { text: "By the patient's age alone", isCorrect: false },
      { text: "By whether treatment is available", isCorrect: false },
      { text: "Vasculitides cannot be classified", isCorrect: false },
    ],
  },
  {
    stem: "What vascular changes does chronic hypertension produce?",
    topic: "Vascular Pathology",
    explanation:
      "Hyaline arteriolosclerosis with protein deposition and wall thickening in small vessels, plus accelerated atherosclerosis in larger ones. In malignant hypertension, hyperplastic arteriolosclerosis with an onion-skin appearance and fibrinoid necrosis appears instead — a different lesion reflecting a different tempo.",
    choices: [
      { text: "Hyaline arteriolosclerosis, with hyperplastic onion-skin change and fibrinoid necrosis in malignant hypertension", isCorrect: true },
      { text: "No structural vascular change occurs", isCorrect: false },
      { text: "Only venous changes are seen", isCorrect: false },
      { text: "Vessel walls become uniformly thinner", isCorrect: false },
    ],
  },
  {
    stem: "Why does diabetes damage both large and small vessels?",
    topic: "Vascular Pathology",
    explanation:
      "Hyperglycaemia accelerates atherosclerosis in large vessels while non-enzymatic glycation thickens small vessel basement membranes. The two processes explain the two families of complication — macrovascular events such as infarction and stroke, and microvascular disease of retina, nerve and glomerulus.",
    choices: [
      { text: "Accelerated atherosclerosis in large vessels and glycation-driven basement membrane thickening in small ones", isCorrect: true },
      { text: "Only large vessels are affected", isCorrect: false },
      { text: "Only capillaries are affected", isCorrect: false },
      { text: "Vascular damage is unrelated to glucose", isCorrect: false },
    ],
  },
  {
    stem: "What is the pathological basis of a varicose vein?",
    topic: "Vascular Pathology",
    explanation:
      "Incompetent valves allow reflux, so sustained venous hypertension dilates and elongates the vein. Chronic venous hypertension then drives skin changes — pigmentation from haemosiderin, lipodermatosclerosis and ulceration — which is why the ulcer is a consequence of the same process rather than a separate problem.",
    choices: [
      { text: "Valvular incompetence causing reflux and sustained venous hypertension, which also drives the skin changes", isCorrect: true },
      { text: "Arterial insufficiency", isCorrect: false },
      { text: "Acute venous thrombosis in every case", isCorrect: false },
      { text: "A purely cosmetic finding with no pathology", isCorrect: false },
    ],
  },

  /* ── Immunopathology ── */
  {
    stem: "What is the difference between central and peripheral tolerance?",
    topic: "Immunopathology",
    explanation:
      "Central tolerance deletes self-reactive lymphocytes during development in thymus and marrow. Peripheral tolerance controls those that escape, through anergy, regulatory T cells and deletion. Autoimmunity requires failure of both, which is why a single defect rarely produces disease on its own.",
    choices: [
      { text: "Central deletes self-reactive cells during development; peripheral controls those that escape", isCorrect: true },
      { text: "Central occurs in lymph nodes and peripheral in the thymus", isCorrect: false },
      { text: "They are two names for one process", isCorrect: false },
      { text: "Only central tolerance exists", isCorrect: false },
    ],
  },
  {
    stem: "What is molecular mimicry, and how does it cause disease?",
    topic: "Immunopathology",
    explanation:
      "A microbial antigen resembles a host protein closely enough that antibodies raised against the organism cross-react with self. Rheumatic fever after streptococcal infection is the classic example, where antibody to M protein attacks cardiac tissue — an immune response that outlives its usefulness.",
    choices: [
      { text: "Microbial antigen resembles a self protein, so anti-microbial antibody cross-reacts — as in rheumatic fever", isCorrect: true },
      { text: "The organism physically hides inside host cells", isCorrect: false },
      { text: "The host copies microbial DNA", isCorrect: false },
      { text: "It describes two organisms resembling each other", isCorrect: false },
    ],
  },
  {
    stem: "How do the types of transplant rejection differ in timing and mechanism?",
    topic: "Immunopathology",
    explanation:
      "Hyperacute occurs within minutes from pre-formed antibody causing thrombosis; acute occurs over days to months and is predominantly T cell mediated; chronic occurs over years with progressive fibrosis and vascular narrowing. Cross-matching prevents the first, immunosuppression controls the second, and the third remains the limiting factor for graft survival.",
    choices: [
      { text: "Hyperacute from pre-formed antibody in minutes, acute T cell mediated over weeks, chronic fibrotic over years", isCorrect: true },
      { text: "All rejection is antibody mediated", isCorrect: false },
      { text: "Chronic rejection occurs first", isCorrect: false },
      { text: "The types are indistinguishable", isCorrect: false },
    ],
  },
  {
    stem: "What distinguishes graft-versus-host disease from transplant rejection?",
    topic: "Immunopathology",
    explanation:
      "The direction of attack. In rejection the recipient's immune system attacks the graft; in graft-versus-host disease immunocompetent donor cells attack the recipient — typically skin, gut and liver. It requires a graft containing immune cells and a recipient unable to reject them, hence its association with bone marrow transplantation.",
    choices: [
      { text: "Donor immune cells attack the recipient, rather than the reverse — affecting skin, gut and liver", isCorrect: true },
      { text: "It is rejection occurring more rapidly", isCorrect: false },
      { text: "It affects only solid organ transplants", isCorrect: false },
      { text: "There is no meaningful difference", isCorrect: false },
    ],
  },
  {
    stem: "What is the difference between primary and secondary immunodeficiency, and which is commoner?",
    topic: "Immunopathology",
    explanation:
      "Primary immunodeficiencies are inherited defects of a specific immune component, usually presenting in childhood. Secondary immunodeficiency is acquired — from HIV, malnutrition, malignancy, drugs or splenectomy — and is far commoner. Recognising the pattern of infection points to which component is missing.",
    choices: [
      { text: "Primary is inherited; secondary is acquired and far commoner — from HIV, malnutrition, drugs or splenectomy", isCorrect: true },
      { text: "Primary immunodeficiency is the commoner", isCorrect: false },
      { text: "Secondary immunodeficiency is always inherited", isCorrect: false },
      { text: "They present identically", isCorrect: false },
    ],
  },
  {
    stem: "Why do patients without a functioning spleen face particular infection risks?",
    topic: "Immunopathology",
    explanation:
      "The spleen clears encapsulated organisms opsonised by antibody and is a major site of IgM production, so pneumococcus, meningococcus and Haemophilus become dangerous. This underpins the need for vaccination, prophylactic antibiotics and prompt treatment of fever in these patients.",
    choices: [
      { text: "Loss of clearance of encapsulated organisms, hence vaccination and prophylaxis", isCorrect: true },
      { text: "Loss of all T cell function", isCorrect: false },
      { text: "Inability to produce any antibody", isCorrect: false },
      { text: "There is no increased risk", isCorrect: false },
    ],
  },
  {
    stem: "What is immune privilege, and where does it apply?",
    topic: "Immunopathology",
    explanation:
      "Certain sites — brain, eye, testis, pregnant uterus — limit immune responses through barriers, lack of lymphatic drainage and local suppressive factors. It permits corneal grafting without matching, but also means that if the barrier is breached, previously hidden antigen can provoke autoimmunity such as sympathetic ophthalmia.",
    choices: [
      { text: "Sites with limited immune access — brain, eye, testis, uterus — permitting grafts but risking autoimmunity if breached", isCorrect: true },
      { text: "Sites with unusually strong immune responses", isCorrect: false },
      { text: "A property of certain individuals rather than sites", isCorrect: false },
      { text: "A theoretical idea with no clinical relevance", isCorrect: false },
    ],
  },

  /* ── Genetic Basis of Disease ── */
  {
    stem: "What do penetrance and expressivity describe, and how do they differ?",
    topic: "Genetic Basis of Disease",
    explanation:
      "Penetrance is the proportion of people with a genotype who show any phenotype at all; expressivity is how severely it manifests in those who do. Incomplete penetrance explains a condition apparently skipping a generation, and variable expressivity explains why affected relatives differ so much.",
    choices: [
      { text: "Penetrance is whether the phenotype appears at all; expressivity is how severe it is when it does", isCorrect: true },
      { text: "They are interchangeable terms", isCorrect: false },
      { text: "Penetrance describes severity", isCorrect: false },
      { text: "Neither affects clinical presentation", isCorrect: false },
    ],
  },
  {
    stem: "What is anticipation, and in which disorders is it seen?",
    topic: "Genetic Basis of Disease",
    explanation:
      "Progressively earlier onset and greater severity in successive generations, caused by expansion of an unstable trinucleotide repeat. Huntington's disease and myotonic dystrophy are the standard examples, and it means a family history of late-onset disease does not predict a late onset in the next generation.",
    choices: [
      { text: "Earlier onset and greater severity in successive generations, from trinucleotide repeat expansion", isCorrect: true },
      { text: "Later onset in each generation", isCorrect: false },
      { text: "A feature of all inherited disease", isCorrect: false },
      { text: "Anticipation of symptoms by the patient", isCorrect: false },
    ],
  },
  {
    stem: "What is genomic imprinting, and what does it explain?",
    topic: "Genetic Basis of Disease",
    explanation:
      "Certain genes are expressed only from the maternal or only from the paternal copy. It explains why the same chromosomal deletion produces Prader-Willi syndrome when paternal and Angelman syndrome when maternal — the same missing region, two entirely different diseases depending on parental origin.",
    choices: [
      { text: "Expression from only one parental copy — the same deletion gives Prader-Willi or Angelman by parental origin", isCorrect: true },
      { text: "A mutation acquired during life", isCorrect: false },
      { text: "Both copies always being expressed equally", isCorrect: false },
      { text: "A phenomenon confined to plants", isCorrect: false },
    ],
  },
  {
    stem: "What is mosaicism, and what are its consequences?",
    topic: "Genetic Basis of Disease",
    explanation:
      "Two or more genetically different cell populations in one individual, arising from a post-zygotic mutation. Severity depends on when it occurred and which tissues carry it, so mosaic disease is often milder and patchier — and germline mosaicism explains recurrence in siblings when both parents test negative.",
    choices: [
      { text: "Genetically different cell populations from a post-zygotic mutation, giving milder patchier disease", isCorrect: true },
      { text: "Inheritance of two identical alleles", isCorrect: false },
      { text: "A mutation present in every cell equally", isCorrect: false },
      { text: "It has no clinical consequences", isCorrect: false },
    ],
  },
  {
    stem: "How does non-disjunction produce trisomy, and why does risk rise with maternal age?",
    topic: "Genetic Basis of Disease",
    explanation:
      "Chromosomes fail to separate during meiosis, so a gamete carries an extra copy. Oocytes are arrested in meiosis for decades, and the longer that arrest the more likely the spindle apparatus is to fail — which is why the association is with maternal rather than paternal age.",
    choices: [
      { text: "Failure of chromosome separation in meiosis, more likely after decades of oocyte arrest", isCorrect: true },
      { text: "A new mutation in a single gene", isCorrect: false },
      { text: "Paternal age is the dominant factor", isCorrect: false },
      { text: "It occurs only after fertilisation", isCorrect: false },
    ],
  },
  {
    stem: "What distinguishes a multifactorial disorder from a single gene disorder?",
    topic: "Genetic Basis of Disease",
    explanation:
      "Multifactorial disease arises from many genes of small effect interacting with environment, so it clusters in families without following a Mendelian pattern and recurrence risk is empirical rather than calculable. Most common disease — diabetes, hypertension, ischaemic heart disease — is of this kind.",
    choices: [
      { text: "Many genes of small effect plus environment, giving familial clustering without a Mendelian pattern", isCorrect: true },
      { text: "A single gene with complete penetrance", isCorrect: false },
      { text: "Purely environmental causation", isCorrect: false },
      { text: "It follows autosomal dominant inheritance", isCorrect: false },
    ],
  },
  {
    stem: "Why does consanguinity increase the risk of autosomal recessive disease?",
    topic: "Genetic Basis of Disease",
    explanation:
      "Related parents are more likely to carry the same rare recessive allele inherited from a shared ancestor, so both can pass it on. The effect is specific to recessive conditions, and it makes a family history and a careful pedigree particularly informative where consanguineous marriage is common.",
    choices: [
      { text: "Related parents more often carry the same rare recessive allele from a shared ancestor", isCorrect: true },
      { text: "Consanguinity causes new mutations", isCorrect: false },
      { text: "It increases dominant disease specifically", isCorrect: false },
      { text: "There is no genuine increase in risk", isCorrect: false },
    ],
  },

  /* ── Carcinogenesis ── */
  {
    stem: "What does the two-hit hypothesis explain about tumour suppressor genes?",
    topic: "Carcinogenesis",
    explanation:
      "Both copies must be lost for function to fail, so sporadic cases require two somatic events while an inherited germline mutation supplies the first hit in every cell. That is why familial cases present earlier, more often bilaterally and with multiple tumours — retinoblastoma being the original example.",
    choices: [
      { text: "Both alleles must be lost; an inherited first hit explains earlier, bilateral and multiple tumours", isCorrect: true },
      { text: "A single mutation is sufficient in all cases", isCorrect: false },
      { text: "It applies to oncogenes rather than tumour suppressors", isCorrect: false },
      { text: "Inherited cases present later than sporadic ones", isCorrect: false },
    ],
  },
  {
    stem: "How does the mechanism of an oncogene differ from that of a tumour suppressor?",
    topic: "Carcinogenesis",
    explanation:
      "Oncogenes are gain-of-function and dominant — one altered copy suffices, acting like an accelerator stuck down. Tumour suppressors are loss-of-function and generally recessive at the cellular level, acting like failed brakes. The distinction predicts inheritance pattern and which are druggable targets.",
    choices: [
      { text: "Oncogenes are dominant gain-of-function; tumour suppressors are recessive loss-of-function", isCorrect: true },
      { text: "Both require loss of two copies", isCorrect: false },
      { text: "Oncogenes are recessive", isCorrect: false },
      { text: "The distinction has no practical consequence", isCorrect: false },
    ],
  },
  {
    stem: "Why must a cancer cell activate telomerase?",
    topic: "Carcinogenesis",
    explanation:
      "Telomeres shorten with each division until the cell senesces, which caps normal replicative lifespan. Reactivating telomerase maintains telomere length and permits limitless division — one of the essential steps in becoming malignant, and one that normal somatic cells do not take.",
    choices: [
      { text: "To maintain telomere length and escape the replicative limit that causes senescence", isCorrect: true },
      { text: "To increase its rate of metabolism", isCorrect: false },
      { text: "To repair double-strand DNA breaks", isCorrect: false },
      { text: "Telomerase suppresses tumour growth", isCorrect: false },
    ],
  },
  {
    stem: "What does the multistep model of carcinogenesis imply about how cancers develop?",
    topic: "Carcinogenesis",
    explanation:
      "Several sequential genetic changes accumulate over years, each conferring a further growth advantage — the adenoma-carcinoma sequence in colorectal cancer being the best characterised. It explains the long latency, the age distribution of cancer, and why screening for precursor lesions can work.",
    choices: [
      { text: "Sequential accumulation of changes over years, explaining latency and why precursor screening works", isCorrect: true },
      { text: "A single mutation transforms a cell instantly", isCorrect: false },
      { text: "Cancers arise fully formed without precursors", isCorrect: false },
      { text: "Genetic change plays no part", isCorrect: false },
    ],
  },
  {
    stem: "How can a gene be silenced without any change to its DNA sequence?",
    topic: "Carcinogenesis",
    explanation:
      "By epigenetic mechanisms — promoter methylation and histone modification — which switch off transcription while leaving the sequence intact. Hypermethylation of tumour suppressor promoters is a recognised route to cancer, and because it is reversible in principle it has become a therapeutic target.",
    choices: [
      { text: "Epigenetic silencing by promoter methylation and histone modification, which is potentially reversible", isCorrect: true },
      { text: "Only by deletion of the gene", isCorrect: false },
      { text: "Only by point mutation", isCorrect: false },
      { text: "Gene expression cannot be altered without sequence change", isCorrect: false },
    ],
  },
  {
    stem: "What does clonal evolution explain about tumour behaviour?",
    topic: "Carcinogenesis",
    explanation:
      "A tumour is not uniform — subclones acquire different mutations and compete, so selection pressure from treatment favours resistant populations. It explains why a cancer initially responsive relapses with resistant disease, and why single biopsies can misrepresent the tumour as a whole.",
    choices: [
      { text: "Competing subclones under selection pressure, explaining acquired resistance and biopsy sampling error", isCorrect: true },
      { text: "That all tumour cells are genetically identical", isCorrect: false },
      { text: "That tumours never develop resistance", isCorrect: false },
      { text: "That a single biopsy always represents the whole tumour", isCorrect: false },
    ],
  },
  {
    stem: "What is field change, and why does it matter after treating a tumour?",
    topic: "Carcinogenesis",
    explanation:
      "Widespread carcinogen exposure alters a whole region of epithelium, so the visible tumour arises from a field of already abnormal tissue. That is why second primaries are common in the aerodigestive tract after smoking, and why excising the lesion does not remove the risk from what surrounds it.",
    choices: [
      { text: "A whole epithelial region is altered by exposure, so second primaries arise despite complete excision", isCorrect: true },
      { text: "A tumour recurring at the original site only", isCorrect: false },
      { text: "Metastatic spread to nearby nodes", isCorrect: false },
      { text: "A staging term describing tumour size", isCorrect: false },
    ],
  },

  /* ── Infection & Host Response ── */
  {
    stem: "What is the Ghon complex, and what does it represent?",
    topic: "Infection & Host Response",
    explanation:
      "A subpleural parenchymal focus together with involved hilar lymph nodes, formed during primary tuberculosis. It usually heals with fibrosis and calcification while containing viable organisms — which is the anatomical basis of latent infection and its capacity to reactivate decades later.",
    choices: [
      { text: "A parenchymal focus with hilar node involvement in primary TB, which heals but may contain viable organisms", isCorrect: true },
      { text: "A cavity formed in post-primary tuberculosis", isCorrect: false },
      { text: "A tumour of the lung apex", isCorrect: false },
      { text: "A finding exclusive to childhood pneumonia", isCorrect: false },
    ],
  },
  {
    stem: "Why does post-primary tuberculosis characteristically affect the lung apices and cavitate?",
    topic: "Infection & Host Response",
    explanation:
      "The apices have the highest oxygen tension, favouring an obligate aerobe, and relatively poor lymphatic drainage. Cavitation follows caseous necrosis liquefying and discharging into a bronchus — which is also the point at which the patient becomes highly infectious.",
    choices: [
      { text: "High apical oxygen tension suits an aerobe; cavitation follows caseous material discharging into a bronchus", isCorrect: true },
      { text: "Gravity causes organisms to settle at the apices", isCorrect: false },
      { text: "The apices have the richest blood supply", isCorrect: false },
      { text: "Cavitation makes the patient less infectious", isCorrect: false },
    ],
  },
  {
    stem: "What are viral inclusion bodies, and what is their diagnostic value?",
    topic: "Infection & Host Response",
    explanation:
      "Aggregates of viral particles or altered cell components visible within nucleus or cytoplasm, often with a characteristic appearance — the owl's eye of cytomegalovirus, Negri bodies in rabies. They allow a viral cause to be identified on histology alone where molecular testing is unavailable.",
    choices: [
      { text: "Visible aggregates of viral material with characteristic appearances allowing histological diagnosis", isCorrect: true },
      { text: "Bacterial colonies within cells", isCorrect: false },
      { text: "Deposits of calcium in infected tissue", isCorrect: false },
      { text: "Artefacts of tissue processing", isCorrect: false },
    ],
  },
  {
    stem: "What does the pattern of opportunistic infection reveal about which immune component has failed?",
    topic: "Infection & Host Response",
    explanation:
      "T cell defects give viral, fungal and intracellular infections — Pneumocystis, cryptococcus, mycobacteria. Antibody or complement defects give encapsulated bacterial infection. Neutrophil defects give bacterial and fungal abscesses. The organism therefore points back to the deficiency.",
    choices: [
      { text: "T cell defects give intracellular and fungal infection; antibody defects give encapsulated bacteria; neutrophil defects give abscesses", isCorrect: true },
      { text: "All immunodeficiencies produce the same infections", isCorrect: false },
      { text: "The organism gives no information about the defect", isCorrect: false },
      { text: "Only viral infections occur in immunodeficiency", isCorrect: false },
    ],
  },
  {
    stem: "How does the tissue reaction to helminth infection differ from that to bacterial infection?",
    topic: "Infection & Host Response",
    explanation:
      "Helminths provoke an eosinophil-rich response with IgE and mast cell involvement, and often granuloma formation around eggs or larvae too large to phagocytose. Bacterial infection typically provokes neutrophils. The eosinophilic pattern on histology is therefore a pointer towards parasitic disease.",
    choices: [
      { text: "An eosinophil-rich response with granulomas around organisms too large to phagocytose", isCorrect: true },
      { text: "A neutrophil-predominant response identical to bacterial infection", isCorrect: false },
      { text: "No inflammatory response at all", isCorrect: false },
      { text: "A purely lymphocytic response", isCorrect: false },
    ],
  },
  {
    stem: "Why does chronic HIV infection cause progressive lymphoid tissue damage as well as CD4 depletion?",
    topic: "Infection & Host Response",
    explanation:
      "Persistent viral replication within lymphoid tissue drives chronic immune activation and follicular destruction, replacing architecture with fibrosis. That structural damage explains why immune reconstitution on treatment is often incomplete even when the viral load becomes undetectable.",
    choices: [
      { text: "Chronic activation destroys lymphoid architecture and replaces it with fibrosis, limiting later reconstitution", isCorrect: true },
      { text: "The virus only removes circulating CD4 cells", isCorrect: false },
      { text: "Lymphoid tissue is unaffected by HIV", isCorrect: false },
      { text: "Reconstitution is always complete on treatment", isCorrect: false },
    ],
  },
  {
    stem: "What pathological process produces the vegetations of infective endocarditis?",
    topic: "Infection & Host Response",
    explanation:
      "Organisms colonise a platelet-fibrin thrombus on damaged or turbulent-flow endothelium, forming a friable mass with poor blood supply. That avascularity is why prolonged high-dose antibiotics are needed, and the friability is why fragments embolise to distant organs.",
    choices: [
      { text: "Organisms colonising a platelet-fibrin thrombus, forming a friable avascular mass that embolises", isCorrect: true },
      { text: "Direct bacterial invasion of healthy myocardium", isCorrect: false },
      { text: "Calcification of a normal valve", isCorrect: false },
      { text: "Immune complex deposition alone", isCorrect: false },
    ],
  },

  /* ── Environmental & Nutritional Pathology ── */
  {
    stem: "What distinguishes kwashiorkor from marasmus?",
    topic: "Environmental & Nutritional Pathology",
    explanation:
      "Marasmus is severe deficiency of total energy, producing profound wasting with preserved albumin and no oedema. Kwashiorkor involves relatively preserved energy intake with inadequate protein, producing hypoalbuminaemia with oedema, fatty liver, skin and hair change — so a child can look less thin while being more critically unwell.",
    choices: [
      { text: "Marasmus is total energy deficiency with wasting; kwashiorkor is protein deficiency with oedema and fatty liver", isCorrect: true },
      { text: "Kwashiorkor produces severe wasting without oedema", isCorrect: false },
      { text: "They are the same condition", isCorrect: false },
      { text: "Marasmus is characterised by oedema", isCorrect: false },
    ],
  },
  {
    stem: "Which pathological changes does chronic tobacco smoking produce in the lung?",
    topic: "Environmental & Nutritional Pathology",
    explanation:
      "Squamous metaplasia and then dysplasia of bronchial epithelium, loss of ciliary function, chronic bronchitis with mucous gland hypertrophy, and emphysema from protease-antiprotease imbalance destroying alveolar walls. The same exposure therefore drives obstruction, infection risk and malignancy together.",
    choices: [
      { text: "Squamous metaplasia and dysplasia, ciliary loss, mucous gland hypertrophy and protease-driven emphysema", isCorrect: true },
      { text: "Only a reversible increase in mucus", isCorrect: false },
      { text: "Fibrosis of the pleura alone", isCorrect: false },
      { text: "No structural change until cancer develops", isCorrect: false },
    ],
  },
  {
    stem: "Why does indoor cooking smoke cause lung disease comparable to tobacco in some settings?",
    topic: "Environmental & Nutritional Pathology",
    explanation:
      "Biomass combustion in poorly ventilated spaces delivers a heavy respirable particulate and irritant burden over years, producing chronic bronchitis, airway remodelling and COPD in people who have never smoked. It disproportionately affects women and young children, and is a genuine cause of non-smoking COPD.",
    choices: [
      { text: "Heavy particulate and irritant exposure over years causes COPD in people who have never smoked", isCorrect: true },
      { text: "Biomass smoke is harmless", isCorrect: false },
      { text: "Only tobacco can cause COPD", isCorrect: false },
      { text: "It affects only adult men", isCorrect: false },
    ],
  },
  {
    stem: "How does asbestos exposure differ from silica exposure in the disease it causes?",
    topic: "Environmental & Nutritional Pathology",
    explanation:
      "Asbestos causes pleural plaques, diffuse interstitial fibrosis, and both bronchial carcinoma and mesothelioma, with a latency of decades. Silica causes nodular upper zone fibrosis and markedly increases tuberculosis risk. Both are occupational, and the exposure history may be forty years old.",
    choices: [
      { text: "Asbestos gives pleural disease and mesothelioma; silica gives nodular fibrosis and raises TB risk", isCorrect: true },
      { text: "They cause identical disease", isCorrect: false },
      { text: "Silica causes mesothelioma", isCorrect: false },
      { text: "Neither causes lasting disease", isCorrect: false },
    ],
  },
  {
    stem: "What determines the tissue effects of ionising radiation?",
    topic: "Environmental & Nutritional Pathology",
    explanation:
      "Rapidly dividing tissues are most vulnerable — marrow, gut epithelium, gonads — because DNA damage is expressed at division. Acute effects reflect cell loss in those tissues, while late effects include fibrosis, vascular damage and second malignancy appearing years afterwards.",
    choices: [
      { text: "Rapidly dividing tissues suffer first; late effects include fibrosis, vascular damage and second cancers", isCorrect: true },
      { text: "All tissues are affected equally", isCorrect: false },
      { text: "Effects are confined to the moment of exposure", isCorrect: false },
      { text: "Slowly dividing tissues are the most vulnerable", isCorrect: false },
    ],
  },
  {
    stem: "Which organ changes result from chronic excessive alcohol use?",
    topic: "Environmental & Nutritional Pathology",
    explanation:
      "Progressive liver injury from steatosis through hepatitis to cirrhosis, plus pancreatitis, cardiomyopathy, cerebral and cerebellar atrophy, peripheral neuropathy and Wernicke-Korsakoff from thiamine deficiency. It is multisystem, and the liver findings are only the most visible part.",
    choices: [
      { text: "Steatosis through hepatitis to cirrhosis, plus pancreatitis, cardiomyopathy and thiamine-related brain injury", isCorrect: true },
      { text: "Liver damage only", isCorrect: false },
      { text: "No structural organ damage", isCorrect: false },
      { text: "Damage confined to the nervous system", isCorrect: false },
    ],
  },
  {
    stem: "Why is obesity now regarded as a state of chronic low-grade inflammation?",
    topic: "Environmental & Nutritional Pathology",
    explanation:
      "Adipose tissue is metabolically active, secreting cytokines and adipokines and recruiting macrophages as it expands. The resulting inflammatory state contributes to insulin resistance, accelerated atherosclerosis and an increased risk of several cancers — mechanisms rather than mere association.",
    choices: [
      { text: "Expanded adipose tissue secretes cytokines and recruits macrophages, driving insulin resistance and atherosclerosis", isCorrect: true },
      { text: "Adipose tissue is metabolically inert storage", isCorrect: false },
      { text: "The association with disease is purely mechanical", isCorrect: false },
      { text: "Inflammation plays no role", isCorrect: false },
    ],
  },
];

async function main() {
  console.log(`Seeding Pathology — Set 2 (Tier 2: Core Processes)${REPLACE_MODE ? "  [REPLACE MODE]" : ""}…\n`);

  const categoryId = await findCategory("fs-pathology");
  if (!categoryId) return;

  await seedSet({
    categoryId,
    slug: "pathology-set-2-core-processes",
    title: "Pathology — Set 2: Core Processes",
    description:
      "Seventy questions on the disease processes built on cell injury: oedema and effusions, thrombosis and embolism, infarction and ischaemia, shock and organ failure, vascular pathology, immunopathology, the genetic basis of disease, carcinogenesis, infection and host response, and environmental and nutritional pathology. Assumes Set 1. Untimed.",
    kind: "PRACTICE",
    timeLimitSeconds: null,
    difficulty: "Foundational",
    questions: SET2,
  });

  await done();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
